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
  [{{rpx :x rpy :y :as ra} :o rb :p} {{spx :x spy :y :as sega} :a segb :b}]
  (let [{rdx :x rdy :y :as rd} (minus rb ra)
        {sdx :x sdy :y :as sd} (minus segb sega)
        rmag (magnitude rd) ;; check magnitudes. Can't be 0
        smag (magnitude sd)
        rdxslope (/ rdx rmag)
        sdxslope (/ sdx smag)
        rdyslope (/ rdy rmag)
        sdyslope (/ sdy smag)]

    (if (and (= rdxslope sdxslope)(= rdyslope sdyslope))
      nil ;; ray and segment are beared by // lines
      (let [t2 (/ (+ (* rdx (- spy rpy))
                     (* rdy (- rpx spx)))
                  (- (* sdx rdy) (* sdy rdx)))] ;; What if a divide-by-0 occurs when computing t2 ?

        (if (= 0 rdx)
          (cond
           (< t2 0) nil ;; intersection outside segment (before a)
           (> t2 1) nil ;; intersection outside segment (after b)
           :else (let [i     (vec2d (+ spx (* sdx t2)) (+ spy (* sdy t2)))
                       oimag (magnitude (minus i ra))]
                   {:p i
                    :f (/ oimag rmag)}) ;; compute the offet of i on the ray (cannot use t1, of course)
           )
          
          (let [t1 (/ (- (+ spx (* sdx t2)) rpx) rdx)]
            (cond
             (< t1 0) nil ;; intersection before ray's origin
             (< t2 0) nil ;; intersection outside segment (before a)
             (> t2 1) nil ;; intersection outside segment (after b)
             :else {:p (vec2d
                        (+ rpx (* rdx t1))
                        (+ rpy (* rdy t1)))
                    :f t1})
            )
        )))))

(defn distance [{{x1 :x y1 :y :as a} :o {x2 :x y2 :y :as b} :p}
                {x0 :x y0 :y :as m}]
  (let [{dx21 :x dy21 :y :as vab} (minus b a)
        {dx10 :x dy10 :y} (minus a m)
        normab (magnitude vab)]
    (/ (- (* dx21 dy10)(* dx10 dy21))
       normab)
    )
  )
