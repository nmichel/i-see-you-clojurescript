(ns cljs-intro.spot
  (:require [cljs-intro.core :as core]
            [cljs-intro.g2d :as g2d]
            [clojure.string :as string]))

(defn- dump-vec
  [{x :x y :y}]
  (string/join ["[x: " (.toString x) ", y: " (.toString y) "]"]))
  
(defn- dump-segment
  [{a :a b :b}]
  (string/join ["< " (dump-vec a) (dump-vec b) " >"]))

(defn- select-segments
  "Select segments for which absolute distance to m is lower than or equal to d"
  
  [segments m d]
  (filter #(->> (g2d/distance-to-segment %1 m)
                (Math/abs)
                (>= d))
          segments))

(defn prout
  [{a :a b :b :as s} f]

  (-> (g2d/minus b a)
      (g2d/scale f)
      (g2d/plus a)
      ))

(defn- trim-segment
  "Trim segment s with respect to circle c"

  [{a :a b :b :as s} c]
  (let [[col? cols] (g2d/intersection-segment-circle c s)]
    (if col?
      (let [ta   (if (nil? (cols :t1)) a (prout s (cols :t1)))
            tb   (if (nil? (cols :t2)) b (prout s (cols :t2)))]
        (assoc s :a ta :b tb))
      nil)))

(defn- trim-segments
  "Trim segments with respect to circle centered on m with radius d"
  
  [segments m d]
  (let [c (g2d/circle m d)]
    (map #(trim-segment %1 c) segments)))

(defn- build-endpoint-list
  [segments]
  (reduce (fn [acc {:keys [a b] :as s}]
            (conj acc (g2d/endpoint a [s]) (g2d/endpoint b [s])))
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
  [{:keys [point] :as ep} segments o]
  (let [ray          (g2d/ray o point)
        tested-segs  (core/compute-non-bearing-segments-list [ep] segments)
        [c :as cols] (core/compute-ray-segments-intersections ray tested-segs) ; c is nil when (empty? cols) is true
        classif      (core/classify-endpoint ray ep)]
    (if (and (not (nil? c)) (< (:f c) 1))
      [[(:p c) "black"]]
      (let [col (if (empty? cols) (compute-far-point ray 100) c)] ;; TODO 100 is hardcoded !!!!
        (cond
         (= classif :cross) [[point "yellow"]]
         (= classif :in)    [[(:p col) "green"] [point "blue"]]
         (= classif :out)   [[point "green"] [(:p col) "blue"]]
         )
        )
      )
    )
  )

(defn process-many-endpoint
  [[{:keys [point]} :as eps] segments o]
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
                 [col :as cols]  (conj (into [] (core/compute-ray-segments-intersections ray tested-segs)) (compute-far-point ray 100)) ;; c is nil when (empty? cols)
                 [c1 ep1 :as e1] (first eps-wo-first-collinear)]

             (cond
              ;; There is at least a collision, and the nearest if before the first ep
              ;; 
              (and (not (nil? col)) (< (:f col) 1)) [[(:p col) "black"]]

              ;; The first ep is :cross
              ;;
              (= :cross c1) [[(:point ep1) "white"]]
                                          
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
                                        (nil? col) [[(:point ep1) "white"]]
                                        ;; no closing, but a col
                                        ;; 
                                        :else [[(:point ep1) "green"] [(:p col) "blue"]]
                                        )

                            ;; A closing ep and no col
                            ;; 
                            (nil? col) [[(:point ep1) "green"] [(:point p2) "blue"]]

                             ;; A closing ep. Depending on the relative positions of the closing point and the
                             ;; closest collision, use one or the other as the second point
                             ;; 
                             :else (let [r2 (g2d/ratio ray (:point p2))
                                         p (if (< (:f col) r2) (:p col) (:point p2))]
                                     [[(:point ep1) "green"] [p "blue"]])
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
                                       (nil? col) [[(:point ep1) "white"]]
                                       ;; no closing, but a col
                                       ;; 
                                       :else [[(:p col) "green"] [(:point ep1) "blue"]]
                                       )

                            ;; A closing ep and no col
                            ;; 
                            (nil? col) [[(:point p2) "green"] [(:point ep1) "blue"]]

                             ;; A closing ep. Depending on the relative positions of the closing point and the
                             ;; closest collision, use one or the other as the second point
                             ;; 
                             :else (let [r2 (g2d/ratio ray (:point p2))
                                         p (if (< (:f col) r2) (:p col) (:point p2))]
                                     [[p "green"] [(:point ep1) "blue"]])
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
                      (= 1 (count eps)) (process-one-endpoint ep segs o)
                      :else             (process-many-endpoint eps segs o))))
             [])
     (conj [segs]))))
