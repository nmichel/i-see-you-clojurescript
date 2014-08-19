(ns cljs-intro.core
  (:require [cljs-intro.g2d :as g2d]))

(defn coord-list-to-point-list [data]
  (map (fn [[x y]] (g2d/vec2d x y)) (partition 2 data)))

(defn build-segment-lists [points closed]
  (let [pcnt (count points)
        scnt (if closed pcnt (- pcnt 1))
        pset (if closed (cycle points) points)
        pairs (take scnt (partition 2 1 pset))]
    (map (fn [[a b]] (g2d/segment a b)) pairs)
    ))

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

(defn build-endpoint-list [points segments closed]
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

(defn build-one-geom-data [{:keys [data closed]}]
  (let [points (vec (coord-list-to-point-list data))
        segments (vec (build-segment-lists points closed))
        eps (build-endpoint-list points segments closed)]
    [eps segments]
    ))

(defn build-geom-data [data]
  "Return a list l as
   l[0] : list of list of endpoints (for drawing purpose)
   l[1] : list of all endpoints
   l[2] : list of all segments"
  (reduce (fn [[adraw aeps asegs] g]
            (let [[eps segs] (build-one-geom-data g)]
              [(conj adraw eps) (into aeps eps) (into asegs segs)]))
          [[] [] []] data))

(defn- find-other-end [{:keys [a b]} p]
  (cond
   (identical? a p) b
   (identical? b p) a
   )
  )

(defn- sort-endpoints-by-angle
  [eps o]
  (->>
   (reduce (fn [acc {p :point :as ep}]
             (let [polar (g2d/->polar (g2d/minus p o))]
               (conj! acc [polar ep]))) ;; -> [ [polar ep] [polar ep] ...]
           (transient []) eps)
   (persistent!)
   (sort (comp (fn [[{ra :r ta :theta} epa] [{rb :r tb :theta}  epb]]
                 (cond
                  (== ta tb) (<= ra rb)
                  (<= ta tb) true
                  :else false)
                 ))))
  )

(defn- compute-ray-segments-intersections
  [ray segments]
  (->> segments
       (reduce (fn [acc s]
                 (let [i (g2d/intersection ray s)]
                   (if (= i nil)
                     acc
                     (conj acc i))))
               [])
       (sort-by :f)))

(defn- is-segment-bearing-endpoint
  [seg ep]
  (some #(identical? %1 seg) (:segments ep)))

(defn- is-segment-bearing-some-endpoints
  [eps seg]
  (some (partial is-segment-bearing-endpoint seg) eps))

(defn compute-non-bearing-segments-list
  [eps segs]
  (filter #(not (is-segment-bearing-some-endpoints eps %1)) segs))

(defn- classify-final-endpoint
  [ray {:keys [point segments]}]
  (let [[s] segments ;; only one segment bears the endpoint
        o   (find-other-end s point)
        d   (g2d/distance ray o)]

    (cond
     (= 0 d) :collinear
     (> 0 d) :out
     (< 0 d) :in
     ))
  )

(defn- classify-internal-endpoint
  [ray {:keys [point segments]}]
  (let [[s1 s2] segments ;; two segment bear the endpoint
        o1      (find-other-end s1 point)
        o2      (find-other-end s2 point)
        d1      (g2d/distance ray o1)
        d2      (g2d/distance ray o2)]
    (cond
     (and (= 0 d1)(= 0 d2)) :collinear
     (< (* d1 d2) 0)        :cross
     (or (> 0 d1)(> 0 d2))  :out
     (or (< 0 d1)(< 0 d2))  :in
     ))
  )

(defn- classify-endpoint
  [ray {:keys [segments] :as ep}]
  (if (= 1 (count segments))
    (classify-final-endpoint ray ep)
    (classify-internal-endpoint ray ep)
    ))

(defn- process-one-endpoint
  [{:keys [point] :as ep} segments o]
  (let [ray          (g2d/ray o point)
        tested-segs  (compute-non-bearing-segments-list [ep] segments)
        [c :as cols] (compute-ray-segments-intersections ray tested-segs) ; c is nil when (empty? cols) is true
        classif      (classify-endpoint ray ep)]
    (cond
     (empty? cols)      [[point "white"]]
     (< (:f c) 1)       [[(:p c) "black"]]
     (= classif :cross) [[point "yellow"]]
     (= classif :in)    [[(:p c) "green"] [point "blue"]]
     (= classif :out)   [[point "green"] [(:p c) "blue"]]
     )
    )
  )

(defn- process-many-endpoint
  [[{:keys [point]} :as eps] segments o]
  (let [ray                    (g2d/ray o point) ;; use the first point as origin of the ray
        eps-with-classif       (map (fn[e] [(classify-endpoint ray e) e]) eps) ;; ( [classif ep] [classif ep] ... )
        eps-wo-first-collinear (drop-while #(= :collinear (nth %1 0)) eps-with-classif)]
    (cond
     ;; all endpoints are collinear : no point produced
     ;;
     (empty? eps-wo-first-collinear) []

     ;; General case : at least one active endpoint
     ;; 
     :else (let [tested-segs     (compute-non-bearing-segments-list eps segments) ;; only segments not bearing any endpoint
                 [col :as cols]  (compute-ray-segments-intersections ray tested-segs) ;; c is nil when (empty? cols) is true
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

(defn- group-endpoints-by-angle [[[first-polar  first-ep] & tail]]
  "
  [[angle [ep ...] [angle [ep ...]]]
  "
  (->>
   (reduce (fn [[out [current-angle eps-vec :as acc]] [next-polar next-ep]]
             (cond
              (= current-angle (:theta next-polar)) [out [current-angle (conj eps-vec next-ep)]]     ;; same angle, add ep to acc
              :else                                 [(conj out acc) [(:theta next-polar) [next-ep]]] ;; add acc to out, new acc from current ep
              )
             )
           [[]                                 ;; res empty at start
            [(:theta first-polar) [first-ep]]] ;; init acc with first endpoint
           tail)
   ((fn [[out acc]]
      (conj out acc)
      )) 
   )
  )

(defn compute-visibility-hull
  [eps segments o]
  (let [sorted-ep    (sort-endpoints-by-angle eps o)
        eps-by-angle (group-endpoints-by-angle sorted-ep)]
    (reduce (fn [acc [angle [ep :as eps]]]
              (into acc
                    (cond
                     (= 1 (count eps)) (process-one-endpoint ep segments o)
                     :else             (process-many-endpoint eps segments o))))
            []
            eps-by-angle))
  )

