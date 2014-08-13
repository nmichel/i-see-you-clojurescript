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

(defn scale
  [{ax :x ay :y} f]
  (vec2d (* ax f) (* ay f)))

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

(declare polar)

(defn ->polar
  [{x :x y :y :as p}]
  (polar (magnitude p)
         (Math/atan2 x y)))

;; -----

(defn polar
  [r theta]
  {:r r :theta theta})

;; -----

(defn segment
  [a b]
  {:a a :b b})

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

(defn distance [{{x1 :x y1 :y :as a} :o {x2 :x y2 :y :as b} :p}
                {x0 :x y0 :y :as m}]
  "Return the distance from point m to ray [o p]
  "
  (let [{dx21 :x dy21 :y :as vab} (minus b a)
        {dx10 :x dy10 :y} (minus a m)
        normab (magnitude vab)]
    (/ (- (* dx21 dy10)(* dx10 dy21))
       normab)
    )
  )

(defn ratio
  [{{x1 :x y1 :y :as a} :o {x2 :x y2 :y :as b} :p}
   {x0 :x y0 :y :as m}]
  (let [op (minus b a)
        om (minus m a)]
    (/ (magnitude om) (magnitude op))))
