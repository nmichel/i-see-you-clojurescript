(ns cljs-intro.spot
  (:require [cljs-intro.core :as core]
            [cljs-intro.g2d :as g2d]))

(defn- select-segments
  "Select segments for which absolute distance to m is lower than or equal to d"

  [segments m d]
  (filter #(->> (g2d/distance-to-segment %1 m)
                (Math/abs)
                (>= d))
          segments))

(defn- trim-segment
  "Trim segment s with respect to circle c"

  [{a :a b :b :as s} c]
  (let [[col? cols] (g2d/intersection-segment-circle c s)]
    (when col?
      (let [ta (if (nil? (cols :t1)) a (g2d/stretch s (cols :t1)))
            tb (if (nil? (cols :t2)) b (g2d/stretch s (cols :t2)))
            ma (if (nil? (cols :t1)) :geom :inter)
            mb (if (nil? (cols :t2)) :geom :inter)]
        (assoc s :a ta :b tb :ma ma :mb mb)
        ))))

(defn- trim-segments
  "Trim segments with respect to circle centered on m with radius d"

  [segments m d]
  (let [c (g2d/circle m d)]
    (map #(trim-segment %1 c) segments)))

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
  (map (fn [[angle eps]]
         (let [merged (merge-sorted-endpoints eps)]
           [angle merged])
         )
       eps-by-angle))

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

(defn process-one-endpoint
  [{:keys [point angle] :as ep} segments o dist]

  (let [ray          (g2d/ray o point)
        tested-segs  (core/compute-non-bearing-segments-list [ep] segments)
        [c :as cols] (core/compute-ray-segments-intersections ray tested-segs) ; c is nil when (empty? cols) is true
        classif      (core/classify-endpoint ray ep)]
    (if (and (not (nil? c)) (< (:f c) 1))
      [[(->
         (g2d/endpoint (:p c) [])
         (qualify-endpoint-geom :collision)
         (qualify-endpoint-role :collision)
         (core/qualify-endpoint-angle angle)) "black"]]
      (let [col (if (empty? cols)
                  (-> (compute-far-point ray dist) (:p) (g2d/endpoint []) (qualify-endpoint-geom :farpoint) (core/qualify-endpoint-angle angle))
                  (-> c                            (:p) (g2d/endpoint []) (qualify-endpoint-geom :collision) (core/qualify-endpoint-angle angle)))]
        (cond
         (= classif :cross) [[(qualify-endpoint-role ep :cross) "yellow"]]
         (= classif :in)    [[(-> (qualify-endpoint-role col :out) (core/qualify-endpoint-angle angle)) "green"] [(qualify-endpoint-role ep :in) "blue"]]
         (= classif :out)   [[(qualify-endpoint-role ep :out) "green"] [(-> (qualify-endpoint-role col :in) (core/qualify-endpoint-angle angle)) "blue"]]
         )
        )
      )
    )
  )

(defn process-many-endpoint
  [[{:keys [point angle]} :as eps] segments o dist]
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
                (< fcol 1) [[col "black"]]

                ;; The first ep is :cross
                ;;
                (= :cross c1) [[ep1 "white"]]

                ;; First ep is :out
                ;; Search for first :in or :cross (is any)
                ;;
                (= :out c1) (let [[c2 p2] (first (filter (fn[[c2]] (or (= :in c2)(= :cross c2))) (rest eps-wo-first-collinear)))]
                              (cond
                               ;; No closing ep found
                               ;;
                               (nil? c2) (cond
                                          ;; Strange case : no closing ep and no collision. Should not append in a well defined geometry
                                          ;;
                                          (nil? col) [[ep1 "white"]]
                                          ;; no closing, but a col
                                          ;;
                                          :else [[ep1 "green"] [col "blue"]]
                                          )

                               ;; A closing ep and no col
                               ;;
                               (nil? col) [[ep1 "green"] [p2 "blue"]]

                               ;; A closing ep. Depending on the relative positions of the closing point and the
                               ;; closest collision, use one or the other as the second point
                               ;;
                               :else (let [r2 (g2d/ratio ray (:point p2))
                                           p (if (< fcol r2) col p2)]
                                       [[ep1 "green"] [p "blue"]])
                               )
                              )

                ;; First ep is :in
                ;; Search for first :out or :cross (is any)
                ;;
                (= :in c1) (let [[c2 p2] (first (filter (fn[[c2]] (or (= :out c2)(= :cross c2))) (rest eps-wo-first-collinear)))]
                             (cond
                              ;; No closing ep found
                              ;;
                              (nil? c2) (cond
                                         ;; Strange case : no closing ep and no collision. Should not append in a well defined geometry
                                         ;;
                                         (nil? col) [[ep1 "white"]]
                                         ;; no closing, but a col
                                         ;;
                                         :else [[col "green"] [ep1 "blue"]]
                                         )

                              ;; A closing ep and no col
                              ;;
                              (nil? col) [[p2 "green"] [ep1 "blue"]]

                              ;; A closing ep. Depending on the relative positions of the closing point and the
                              ;; closest collision, use one or the other as the second point
                              ;;
                              :else (let [r2 (g2d/ratio ray (:point p2))
                                          p (if (< fcol r2) col p2)]
                                      [[p "green"] [ep1 "blue"]])
                              )
                             )
                )
               )
             )
     )
    )
  )

(defn compute-visibility-hull
  [segments o dist]
  (let [r (-> segments
              (select-segments o dist)
              (trim-segments o dist)
              )
        segs (remove nil? r)
        eps (build-endpoint-list segs)]

    (->>
     (core/sort-endpoints-by-angle eps o)
     (core/group-endpoints-by-angle)
     (merge-angle-sorted-endpoints)
     (reduce (fn [acc [angle [ep :as eps]]]
               (into acc
                     (cond
                      (= 1 (count eps)) (process-one-endpoint ep segs o dist)
                      :else             (process-many-endpoint eps segs o dist))))
             [])
     (conj [segs]))
    ))
