(ns cljs-intro.pie
  (:require [cljs-intro.core :as core]
            [cljs-intro.g2d :as g2d :refer [-pi+pi->0+2pi]]))

(defn- is-in-range?
  [a p q]
  (<= p a q))

(defn- is-segment-near-point?
  "Select segments for which absolute distance to m is lower than or equal to d"

  [m d s]
  (let [sd (-> (g2d/distance-to-segment s m) (Math/abs))]
    (and (< sd d)   ;; distance to segment must be STRICTLY lower than distance to horizon (reject tangent segments)
         (> sd 0))) ;; ... but also STRICTLY positive (if the observer lies ON a segment, ignore it)
  )

(defn- is-segment-outside-pie-piece?
  "Return true if segment s is totally out of the piece of pie defined by
   center o, direction angle alpha, and half apperture angle h."
  [o alpha h {a :a b :b :as s}]
  (let [h+    (* 2 h)
        ra    (-> (g2d/->polar o a) (:theta) (- alpha) (g2d/->-pi+pi) (+ h) (g2d/->-pi+pi) (-pi+pi->0+2pi))
        rb    (-> (g2d/->polar o b) (:theta) (- alpha) (g2d/->-pi+pi) (+ h) (g2d/->-pi+pi) (-pi+pi->0+2pi))
        minab (Math/min ra rb)
        maxab (Math/max ra rb)]

    ;; ra and rb are angular position of segment both ends, expressed in a base where
    ;; the angle of vision lower bound is at angle 0.
    ;; Therefore h+ is the upper angular bound of the angle of vision, in this coordinate system.
    ;;
    (cond
     (< minab h+)
       ;; At leat on end lies in the visible range
       ;;
       false

     (> h (* Math/PI 0.5))
       ;; Half apperture if greater than PI/2
       ;; Therefore the segment can not be visible, otherwise minab would have been in visible range
       ;;
       true


     :else
       ;; Full apperture is less than PI.
       ;; Therefore, if the second point (at maxab angular position)  is
       ;; after (minab + PI), it lies in the same half-plae than h+ and h-, and
       ;; crosses them both.
       ;;
       (<= maxab (+ minab Math/PI))
     )))

(defn- trim-segment-by-circle
  "Trim segment s with respect to circle c.
  "
  [c {a :a b :b :as s}]
  (let [[col? cols] (g2d/intersection-segment-circle c s)]
    (when col?
      (let [ta (if (nil? (cols :t1)) a (g2d/stretch s (cols :t1)))
            tb (if (nil? (cols :t2)) b (g2d/stretch s (cols :t2)))
            ma (if (nil? (cols :t1)) :geom :inter)
            mb (if (nil? (cols :t2)) :geom :inter)]
        (assoc s :a ta :b tb :ma ma :mb mb)
        ))))

(declare trim-segment-by-angle-narrow)
(declare trim-segment-by-angle-wide)
(defn- trim-segment-by-angle
  "*WARN* segment should *NOT* be totally out-of-sight !"
  [o d alpha h s]
  (if (< h (* Math/PI 0.5))
    (trim-segment-by-angle-narrow o d alpha h s)
    (trim-segment-by-angle-wide o d alpha h s)))

(defn- trim-segment-by-angle-wide
  "TODO"
  [o d alpha h {a :a b :b :as s}]
  (let [h+    (* 2 h)
        ra    (-> (g2d/->polar o a) (:theta) (- alpha) (g2d/->-pi+pi) (+ h) (g2d/->-pi+pi) (-pi+pi->0+2pi))
        rb    (-> (g2d/->polar o b) (:theta) (- alpha) (g2d/->-pi+pi) (+ h) (g2d/->-pi+pi) (-pi+pi->0+2pi))
        minab (Math/min ra rb)
        maxab (Math/max ra rb)
        p     (if (== minab ra) a b)
        q     (if (== maxab ra) a b)]
    (if (>= minab h+)
      ;; The smallest angle is after h+, therefore the whole segment is out of sight
      ;;
      [nil]

      ;; The smallest angle is before h+, lets look at the other angle position, relatively to h+ and (minab + PI)
      ;;
      (if (< maxab h+)
        ;; The other point is inside angle of sight
        ;;
        (if (< maxab (+ minab Math/PI))
          ;; The other point is before (minab + PI), therefore the segment is fully visible
          ;;
          [s]

          ;; The other point is after  (minab + PI), therefore the segment crosses both bounds of angle of sight
          ;;
          (let [s1b (g2d/polar-> o (g2d/polar d (+ alpha h)))
                r1  (g2d/ray o s1b)
                i1  (g2d/intersection r1 s)
                s2b (g2d/polar-> o (g2d/polar d (- alpha h)))
                r2 (g2d/ray o s2b)
                i2 (g2d/intersection r2 s)]
            [(g2d/segment (:p i1) q), (g2d/segment (:p i2) p)])
          )

        ;; The other point is outside angle of sight
        ;;
        (if (< maxab (+ minab Math/PI))
          ;; Segment crosses upper bound
          ;;
          (let [sb (g2d/polar-> o (g2d/polar d (+ alpha h)))
                r  (g2d/ray o sb)
                i  (g2d/intersection r s)]
            [(g2d/segment (:p i) p)])

          ;; Segment crosses lower bound
          ;;
          (let [sb (g2d/polar-> o (g2d/polar d (- alpha h)))
                r  (g2d/ray o sb)
                i  (g2d/intersection r s)]
            [(g2d/segment (:p i) p)])
         )
        )
      )
    ))

(defn- trim-segment-by-angle-narrow
  "TODO"
  [o d alpha h {a :a b :b :as s}]
  (let [h+    (* 2 h)
        ra    (-> (g2d/->polar o a) (:theta) (- alpha) (g2d/->-pi+pi) (+ h) (g2d/->-pi+pi) (-pi+pi->0+2pi))
        rb    (-> (g2d/->polar o b) (:theta) (- alpha) (g2d/->-pi+pi) (+ h) (g2d/->-pi+pi) (-pi+pi->0+2pi))
        minab (Math/min ra rb)
        maxab (Math/max ra rb)
        p     (if (== minab ra) a b)
        q     (if (== maxab ra) a b)]
    (if (< minab h+)
      (cond
       (< maxab h+)
         [s]

       (< maxab (+ minab Math/PI))
         ;; Segment crosses upper bound
         ;;
         (let [sb (g2d/polar-> o (g2d/polar d (+ alpha h)))
               r  (g2d/ray o sb)
               i  (g2d/intersection r s)]
           [(g2d/segment p (:p i))])

       :else
         ;; Segment crosses lower bound
         ;;
         (let [sb (g2d/polar-> o (g2d/polar d (- alpha h)))
               r  (g2d/ray o sb)
               i  (g2d/intersection r s)]
           [(g2d/segment (:p i) p)])
       )

      (if (<= maxab (+ minab Math/PI))
        ;; Segment is fully invisible
        [nil]

        ;; Segment crosses both bounds
        ;;
        (let [s1b (g2d/polar-> o (g2d/polar d (+ alpha h)))
              r1  (g2d/ray o s1b)
              i1  (g2d/intersection r1 s)
              s2b (g2d/polar-> o (g2d/polar d (- alpha h)))
              r2 (g2d/ray o s2b)
              i2 (g2d/intersection r2 s)]
          [(g2d/segment (:p i1) (:p i2))])
        ))))

(defn- qualify-endpoint-geom
  [ep kind]
  (assoc ep :geom kind))

(defn- qualify-endpoint-role
  [ep kind]
  (assoc ep :role kind))

(defn- build-endpoint-list
  [segments]
  (reduce (fn [acc {:keys [a b ma mb] :as s}]
            (conj acc (-> (g2d/endpoint a [s]) (qualify-endpoint-geom ma)) (-> (g2d/endpoint b [s]) (qualify-endpoint-geom mb))))
          []
          segments))

(defn- merge-sorted-endpoints
  "When 2 endpoints are at the same position, then melt them, an reconstruct their bearing segments."
  [eps]
  (loop [acc []
         pts eps]
    (let [a (first pts)
          atail (rest pts)]
      (cond (empty? pts)
              acc
            (empty? atail)
              (conj acc a)
            :else
              (let [b (first atail)
                    btail (rest atail)]
                (if (not= (a :point) (b :point))
                  (recur (conj acc a) atail)
                  (let [{pa :point sas :segments} a
                        {pb :point [sb] :segments} b
                        c (core/find-other-end sb pb)
                        sa2 (g2d/segment pa c)
                        newa (assoc a :segments (conj sas sa2))]
                    (recur (conj acc newa) btail))))))))

(defn- merge-angle-sorted-endpoints
  [eps-by-angle]
  (for [[angle eps] eps-by-angle]
    [angle (merge-sorted-endpoints eps)]
    )
  )

(defn- rebase-angle-sorted-endpoints
  [alpha eps-by-angle]
  (map (fn [[angle eps]]
    [(-> (- angle alpha) g2d/->-pi+pi) eps])  eps-by-angle))

(defn- sort-angle-sorted-endpoints
  [eps-by-angle]
  (sort (fn [[a _] [b _]] (<= a b)) eps-by-angle))

(defn- compute-far-point
  [{o :o p :p} d]
  (let [po (g2d/minus p o)
        l  (g2d/magnitude po)
        n  (g2d/scale po (/ 1.0 l))
        p  (->> (g2d/scale n d)
                (g2d/plus o))]

    {:p p :f (/ d l)}
    )
  )

(defn- process-one-endpoint
  [o dist segments {:keys [point angle] :as ep}]
  (let [ray          (g2d/ray o point)
        tested-segs  (core/compute-non-bearing-segments-list [ep] segments)
        [c :as cols] (core/compute-ray-segments-intersections ray tested-segs) ; c is nil when (empty? cols) is true
        classif      (core/classify-endpoint ray ep)]
    (if (and (not (nil? c)) (< (:f c) 1))
      [(->
        (g2d/endpoint (:p c) [])
        (qualify-endpoint-geom :collision)
        (qualify-endpoint-role :collision)
        (core/qualify-endpoint-angle angle))]
      (let [col (if (empty? cols)
                  (-> (compute-far-point ray dist) (:p) (g2d/endpoint []) (qualify-endpoint-geom :farpoint) (core/qualify-endpoint-angle angle))
                  (-> c                            (:p) (g2d/endpoint []) (qualify-endpoint-geom :collision) (core/qualify-endpoint-angle angle)))]
        (cond
         (= classif :cross) [(qualify-endpoint-role ep :cross)]
         (= classif :in)    [(-> (qualify-endpoint-role col :out) (core/qualify-endpoint-angle angle)) (qualify-endpoint-role ep :in)]
         (= classif :out)   [(qualify-endpoint-role ep :out) (-> (qualify-endpoint-role col :in) (core/qualify-endpoint-angle angle))]
         )
        )
      )
    )
  )

(defn- process-many-endpoint
  [o dist segments [{:keys [point angle]} :as eps]]
  (let [ray                    (g2d/ray o point) ;; use the first point as origin of the ray
        eps-with-classif       (map (fn[e] [(core/classify-endpoint ray e) e]) eps) ;; ( [classif ep] [classif ep] ... )
        eps-wo-first-collinear (drop-while #(= :collinear (nth %1 0)) eps-with-classif)]

    (cond
     ;; all endpoints are collinear : no point produced
     ;;
     (empty? eps-wo-first-collinear) []

     ;; General case : at least one active endpoint
     ;;
     ;; Tech note : why (conj (into [] ...)) ?! Because 'conj' appends to
     ;;   the end of a vector, but to the BEGINING of a list. As we want our
     ;;   far point to be at the end of the list of collisions, convert list
     ;;   to vector with 'into' before applying 'conj' ...
     ;;
     :else (let [tested-segs     (core/compute-non-bearing-segments-list eps segments) ;; only segments not bearing any endpoint
                 cols            (core/compute-ray-segments-intersections ray tested-segs)
                 [c1 ep1 :as e1] (first eps-wo-first-collinear)]
             (let [[col fcol] (if (empty? cols)
                                (let [fp (compute-far-point ray dist)]
                                  [(-> fp (:p) (g2d/endpoint []) (qualify-endpoint-geom :farpoint) (core/qualify-endpoint-angle angle)) (:f fp)])
                                (let [gp (first cols)]
                                  [(-> gp (:p) (g2d/endpoint []) (qualify-endpoint-geom :collision) (core/qualify-endpoint-angle angle)) (:f gp)]))]

               (cond
                ;; the nearest collision if before the first ep
                ;;
                (< fcol 1) [(qualify-endpoint-role col :collision)]

                ;; The first ep is :cross
                ;;
                (= :cross c1) [(qualify-endpoint-role ep1 :cross)]

                ;; First ep is :out
                ;; Search for first :in or :cross (is any)
                ;;
                (= :out c1) (let [[c2 p2] (first (filter (fn[[c2]] (or (= :in c2)(= :cross c2))) (rest eps-wo-first-collinear)))]
                              (cond
                               ;; No closing ep found
                               ;;
                               (nil? c2) [(qualify-endpoint-role ep1 :out) (qualify-endpoint-role col :in)]

                               ;; A closing ep and no col
                               ;;
                               (nil? col) [(qualify-endpoint-role ep1 :out) (qualify-endpoint-role p2 :in)]

                               ;; A closing ep. Depending on the relative positions of the closing point and the
                               ;; closest collision, use one or the other as the second point
                               ;;
                               :else (let [r2 (g2d/ratio ray (:point p2))
                                           p (if (< fcol r2) col p2)]
                                       [(qualify-endpoint-role ep1 :out) (qualify-endpoint-role p :in)])
                               )
                              )

                ;; First ep is :in
                ;; Search for first :out or :cross (is any)
                ;;
                (= :in c1) (let [[c2 p2] (first (filter (fn[[c2]] (or (= :out c2)(= :cross c2))) (rest eps-wo-first-collinear)))]
                             (cond
                              ;; No closing ep found
                              ;;
                              (nil? c2) [(qualify-endpoint-role col :in) (qualify-endpoint-role ep1 :out)]

                              ;; A closing ep and no col
                              ;;
                              (nil? col) [(qualify-endpoint-role p2 :in) (qualify-endpoint-role ep1 :out)]

                              ;; A closing ep. Depending on the relative positions of the closing point and the
                              ;; closest collision, use one or the other as the second point
                              ;;
                              :else (let [r2 (g2d/ratio ray (:point p2))
                                          p (if (< fcol r2) col p2)]
                                      [(qualify-endpoint-role p :in) (qualify-endpoint-role ep1 :out)])
                              )
                             )
                )
               )
             )
     )
    )
  )

(defn- compute-hull-vertices
  "Given a sequence of pairs (angle, endpoints) sorted by increasing angle, compute the sequence of endpoints defining the visibility hull.

  For a given angle, endpoints are sorted by increasing distance from the origin.

  Output endpoints are decorated with :role qualifier.

  Input:
  ((a0 (ep00 ep01 ... ep0n))
   (a1 (ep10 ep11 ... ep1n))
   ...
   (am (epm0 epm1 ... epmn)))

  Output:
  (ep0 ep1 ... epn)
  "

  [alpha apperture o dist segs eps-by-angle]
  (concat
   ;; If necessary produce a first vertex
   ;;
   (let [angle (g2d/->-pi+pi (- alpha apperture))
         sb    (g2d/polar-> o (g2d/polar dist angle))
         r     (g2d/ray o sb)]
     [(-> (compute-far-point r dist) (:p) (g2d/endpoint []) (qualify-endpoint-geom :farpoint) (core/qualify-endpoint-angle angle))])

   (mapcat (fn [[angle eps]]
             (cond (= 1 (count eps)) (process-one-endpoint o dist segs (first eps))
                   :else             (process-many-endpoint o dist segs eps)))
           eps-by-angle)

   (let [angle (g2d/->-pi+pi (+ alpha apperture))
         sb    (g2d/polar-> o (g2d/polar dist angle))
         r     (g2d/ray o sb)]
     [(-> (compute-far-point r dist) (:p) (g2d/endpoint []) (qualify-endpoint-geom :farpoint) (core/qualify-endpoint-angle angle))])
   )
  )

(defn- compute-hull-surfaces
  "Given a sequence of qualified endpoints, compute the sequence defining the visibility hull.

  Each spitted out surface is a definition of either a triangle or an arc.

  Input:
  (ep0 ep1 ... epn)

  Output:
  (s0 s1 ... sn)
  "
  [o dist eps]
  (if (empty? eps)
    []
    (let [pts (drop-while (fn [{role :role}] (= role :collision)) eps)] ;; Start from a non collision point (as they will be dropped)
      (->
       (reduce (fn [[acc {a :point angle_a :angle geom_a :geom role_a :role :as epa}]
                    {b :point angle_b :angle geom_b :geom role_b :role :as epb}]
                 (cond
                  (= angle_a angle_b)
                    [acc epb]

                  (or (= :farpoint geom_a geom_b) ;; 2 far points define an arc
                      (and (= :farpoint geom_a) (= :inter geom_b)) ;; a far point and a circle/segment intersection point ...
                      (and (= :farpoint geom_b) (= :inter geom_a)) ;; ... define an arc (whatever their relative order)
                      (and (= :inter geom_b geom_a) (= :out role_a) (= :in role_b))) ;; 2 circle/segment intersection points define an arc
                                                                                     ;;   if and only  if the first is :out (leaves its bearing segment)
                                                                                     ;;   and the second if :in (enters its bearing segment)
                                                                                     ;; The only possible other case (:in -> :out) defines a segment because
                                                                                     ;; both points belongs to the same segment (by construction)
                                                                                     ;; Other cases are impossible, provided the geometry respects the constraints.
                    [(conj acc [:arc o epa epb dist]) epb]

                  (or (= :out role_b) (= :cross role_b) (= :in role_b))
                    [(conj acc [:triangle o epa epb]) epb]

                  :else
                    [acc epa]
                  )
                 )
               [
                [] ;; acc empty
                (first pts) ;; current endpoint is the first
                ]
               (->> (rest pts) (take (count eps)))
               )
       (nth 0)
       )
      )
    )
  )

(defn compute-visibility-hull
  "Given a position, visibility radius and a set of segments, compute
  the sequences of surface defining the visibility hull
  "
  [alpha apperture o dist segments]
  (let [segs (->> segments
                  (remove (partial is-segment-outside-pie-piece? o alpha apperture))
                  (filter (partial is-segment-near-point? o dist))
                  (map (partial trim-segment-by-circle (g2d/circle o dist)))
                  (remove nil?)
                  (remove (partial is-segment-outside-pie-piece? o alpha apperture))
                  (mapcat (partial trim-segment-by-angle o dist alpha apperture))
                  (remove nil?))
        eps (build-endpoint-list segs)]

    (->>
     (core/sort-endpoints-by-angle o eps)
     (core/group-endpoints-by-angle)
     (merge-angle-sorted-endpoints)
     ;;(rebase-angle-sorted-endpoints alpha)
     ;;(sort-angle-sorted-endpoints)
     (compute-hull-vertices alpha apperture o dist segs)
     (compute-hull-surfaces o dist)
     (conj [segs]))
    ))
