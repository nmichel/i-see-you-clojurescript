(ns cljs-intro.global
  (:require [cljs-intro.g2d :as g2d]
            [cljs-intro.core :as core :refer [qualify-endpoint-geom qualify-endpoint-role]]))

(defn- build-begin-endpoint [points segments closed]
  (g2d/endpoint (first points)
                (if closed
                  [(last segments) (first segments)]
                  [(first segments)])))

(defn- build-end-endpoint [points segments closed]
  (g2d/endpoint (last points)
                (if closed
                  (let [rev (reverse segments)] ;; highly inefficient :) better use random access in a vector
                    [(second rev) (first rev)])
                  [(last segments)])))

(defn- build-endpoint-list [points segments closed]
  (let [cnt (count points)
        bep (build-begin-endpoint points segments closed)
        eep (build-end-endpoint points segments closed)]
    (loop [i 0
           p (rest points)
           s segments
           acc (transient [])]
      (if (< i (- cnt 2))
        (let [ep (g2d/endpoint (first p) [(first s) (second s)])]
          (recur (+ i 1) (rest p) (rest s) (conj! acc ep)))
        (into [bep] (conj (persistent! acc) eep))))
    ))

(defn- process-one-endpoint
  [{:keys [point] :as ep} segments o]
  (let [ray          (g2d/ray o point)
        tested-segs  (core/compute-non-bearing-segments-list [ep] segments)
        cols         (core/compute-ray-segments-intersections ray tested-segs)
        classif      (core/classify-endpoint ray ep)]
    (if (empty? cols)
      [(qualify-endpoint-role ep :cross)]
      (let [[c] cols
            col (-> c :p (g2d/endpoint []) (qualify-endpoint-geom :collision))]
        (cond
         (< (:f c) 1)       [(qualify-endpoint-role col :collision)]
         (= classif :cross) [(qualify-endpoint-role ep :cross)]
         (= classif :in)    [(qualify-endpoint-role col :out) (qualify-endpoint-role ep :in)]
         (= classif :out)   [(qualify-endpoint-role ep :out) (qualify-endpoint-role col :in)]
         )
        )
      )
    )
  )

(defn- process-many-endpoint
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
     :else (let [tested-segs     (core/compute-non-bearing-segments-list eps segments) ;; only segments not bearing any endpoint
                 [c :as cols]  (core/compute-ray-segments-intersections ray tested-segs) ;; c is nil when (empty? cols) is true
                 [c1 ep1 :as e1] (first eps-wo-first-collinear)]

             (cond
              ;; There is at least a collision, and the nearest if before the first ep
              ;;
              (and (not (nil? c)) (< (:f c) 1)) [(-> c :p (g2d/endpoint []) (qualify-endpoint-geom :collision) (qualify-endpoint-role :collision))]

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
                             (nil? c2) (cond
                                        ;; Strange case : no closing ep and no collision. Should not append in a well defined geometry
                                        ;;
                                        (nil? c) [(qualify-endpoint-role ep1 :out)]
                                        ;; no closing, but a col
                                        ;;
                                        :else [(qualify-endpoint-role ep1 :out) (-> c :p (g2d/endpoint []) (qualify-endpoint-geom :collision) (qualify-endpoint-role :in))]
                                        )

                            ;; A closing ep and no col
                            ;;
                            (nil? c) [(qualify-endpoint-role ep1 :out) (qualify-endpoint-role p2 :in)]

                             ;; A closing ep. Depending on the relative positions of the closing point and the
                             ;; closest collision, use one or the other as the second point
                             ;;
                             :else (let [r2 (g2d/ratio ray (:point p2))
                                         p (if (< (:f c) r2) (:p c) (:point p2))]
                                     [(qualify-endpoint-role ep1 :out) (-> c :p (g2d/endpoint []) (qualify-endpoint-geom :collision) (qualify-endpoint-role :in))])
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
                                       (nil? c) [(qualify-endpoint-role ep1 :in)]
                                       ;; no closing, but a col
                                       ;;
                                       :else [(-> c :p (g2d/endpoint []) (qualify-endpoint-geom :collision) (qualify-endpoint-role :out)) (qualify-endpoint-role ep1 :in)]
                                       )

                            ;; A closing ep and no col
                            ;;
                            (nil? c) [(qualify-endpoint-role p2 :out) (qualify-endpoint-role ep1 :in)]

                             ;; A closing ep. Depending on the relative positions of the closing point and the
                             ;; closest collision, use one or the other as the second point
                             ;;
                             :else (let [r2 (g2d/ratio ray (:point p2))
                                         p (if (< (:f c) r2) (:p c) (:point p2))]
                                     [(-> c :p (g2d/endpoint []) (qualify-endpoint-geom :collision) (qualify-endpoint-role :in)) (qualify-endpoint-role ep1 :out)])
                             )
                           )
              )
             )
     )
    )
  )

(defn compute-visibility-hull
  "Compute the geometry of the visibility hull from
      . the \"light\" position
      . a set of endpoints
      . a set of non intersecting segments, joining points from the above set

  Return a list of [p c] where
      . p is g2d/vec2d
      . c is metadata associated to p

  Point are ordered with respect to their polar coordinate."

  [o eps segments]
  (->> (core/sort-endpoints-by-angle o eps)
       (core/group-endpoints-by-angle)
       (reduce (fn [acc [angle [ep :as eps]]]
                 (into acc
                       (cond
                        (= 1 (count eps)) (process-one-endpoint ep segments o)
                        :else             (process-many-endpoint eps segments o))))
               []))
  )
