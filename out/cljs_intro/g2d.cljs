(ns cljs-intro.g2d)

(defn vec2d
  [x y]
  {:x x :y y})

(defn plus
  [{ax :x ay :y} {bx :x by :y}]
  (vec2d (+ ax bx) (+ ay by)))

(defn minus
  [{ax :x ay :y} {bx :x by :y}]
  (vec2d (- ax bx) (- ay by)))

(defn magnitude
  ([{dx :x dy :y :as p}]
     (Math/sqrt (+ (* dx dx) (* dy dy))))
  ([a b]
     (magnitude (minus a b))))

(defn scale
  [{x :x y :y} f]
  (vec2d (* x f) (* y f)))

(defn cross
  [{ax :x ay :y} {bx :x by :y}]
  (- (* ax by) (* ay bx)))

(defn dot
  [{ax :x ay :y} {bx :x by :y}]
  (+ (* ax bx) (* ay by)))

(declare polar)

(defn ->polar
  ([{x :x y :y :as p}]
    (polar (magnitude p)
           (Math/atan2 y x)))
  ([o, p]
   (->polar (minus p o))))

(def O (vec2d 0 0))

(defn polar->
  ([p]
   (polar-> O p))

  ([o {r :r theta :theta}]
   (-> (vec2d (Math/cos theta) (Math/sin theta))
       (scale r)
       (plus o))))

(defn rotate ;; TODO : pourri
  [[x y] a]
  (let [c (Math/cos a)
        s (Math/sin a)]
    [(- (* x c)(* y s))
     (+ (* y c)(* x s))]))

;; -----

(defn polar
  [r theta]
  {:r r :theta theta})

;; -----

(defn segment
  [a b]
  {:a a :b b})

(defn stretch
  [{a :a b :b :as s} f]

  (-> (minus b a)
      (scale f)
      (plus a)
      ))

;; -----

(defn endpoint
  [p segs]
  {:point p :segments segs})

;; -----

(defn ray
  [o p]
  {:o o :p p})

(defn intersection
  ;; http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
  ;; https://github.com/pgkelley4/line-segments-intersect/blob/master/js/line-segments-intersect.js
  ;;
  [{{rpx :x rpy :y :as ra} :o rb :p} {{spx :x spy :y :as sega} :a segb :b}]
  (let [r (minus rb ra)
        s (minus segb sega)
        uNumerator (cross (minus sega ra) r)
        denominator (cross r s)]

    (cond
     (and (= 0 uNumerator) (= 0 denominator)) nil
     (= 0 denominator) nil
     :else (let [u (/ uNumerator denominator)
                 t (/ (cross (minus sega  ra) s) denominator)]
             (if (and (>= t 0) (>= u 0) (<= u 1))
               {:p (plus ra (scale r t)) :f t}
               nil)
             )
     )
    )
  )

;; TODO : USE a protocol
(defn distance
  "Return the distance from point m to ray [o p]"

  [{{x1 :x y1 :y :as a} :o {x2 :x y2 :y :as b} :p}
   {x0 :x y0 :y :as m}]
  (let [{dx21 :x dy21 :y :as vab} (minus b a)
        {dx10 :x dy10 :y} (minus a m)
        normab (magnitude vab)]
    (/ (- (* dx21 dy10)(* dx10 dy21))
       normab))
  )

(defn distance-to-segment
  "Return the distance from point m to segment [a b]"

  [{{x1 :x y1 :y :as a} :a {x2 :x y2 :y :as b} :b}
   {x0 :x y0 :y :as m}]
  (let [{dx21 :x dy21 :y :as vab} (minus b a)
        {dx10 :x dy10 :y} (minus a m)
        normab (magnitude vab)]
    (/ (- (* dx21 dy10)(* dx10 dy21))
       normab)
    ))

(defn ratio
  [{{x1 :x y1 :y :as a} :o {x2 :x y2 :y :as b} :p}
   {x0 :x y0 :y :as m}]
  (let [op (minus b a)
        om (minus m a)]
    (/ (magnitude om) (magnitude op))))

;; -----

(defn circle
  [o r]
  {:o o :r r})

(defn intersection-segment-circle
  "Compute intersections between a circle and a segment.

  Intersections are stated as ratios in [0, 1] such as
     . 0 mean intersection lies at segment's origin,
     . 1 means intersection lies at segment's endpoint,
     . ]0, 1[ means intersection is \"in\" the segment

  Result is a list of 0 to 2 offset values, sorted increasingly.

  Code derived from : http://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
  "

  [{{ox :x oy :y :as o} :o r :r} {a :a b :b}]
  (let [d (minus b a)
        f (minus a o)
        a (dot d d)
        b (* 2.0 (dot f d))
        c (- (dot f f) (* r r))
        discriminant (- (* b b) (* 4 a c))]

    (cond
     (<= discriminant 0)
       [false nil] ;; no collision possible
     :else
       (let [root (Math/sqrt discriminant)
             t1   (/ (- (- b) root) (* 2 a))
             t2   (/ (+ (- b) root) (* 2 a))
             c1   (and (>= t1 0) (<= t1 1))
             c2   (and (>= t2 0) (<= t2 1))]

         (cond
          (and c1 c2)     [true {:t1 t1 :t2 t2}] ;; segment traverses the circle, a and b are out
          (and c1 true)   [true {:t1 t1}]        ;; a is out, b is in
          (and c2 true)   [true {:t2 t2}]        ;; a is in, b is out
          (< (* t1 t2) 0) [true {}]              ;; a and b are in (one intersection on each "side" of segment)
          :else           [false nil]            ;; segment doesn't cross the circle
          )))))

;; -----

(defn ->-pi+pi
  "Map any angle initially in [-pi, pi], possibly translated by a value in [-pi, +pi] into [-pi, pi[."
  [x]
  (cond
   (< x (- Math/PI)) (+ x (* 2 Math/PI))
   (< x Math/PI)     x
   :else             (- x (* 2 Math/PI))
   ))

(defn -pi+pi->0+2pi
  "Map any angle in [-pi, pi] into [0, 2pi[."
  [x]
  (if (>= x 0) x (+ x (* 2 Math/PI))))

(defn ->0+2pi
  "Map any angle initially in [0, 2pi[, possibly translated by a value in [-pi, +pi] into [0, 2pi[."
  [x]
  (cond
   (< x 0)             (+ x (* 2 Math/PI))
   (< x (* 2 Math/PI)) x
   :else               (- x (* 2 Math/PI))
   ))

(defn deg->rad [d] (-> d (* Math/PI) (/ 180.0)))
(defn rad->deg [r] (-> r (* 180.0) (/ Math/PI)))


