(ns cljs-intro.core
  (:require [cljs-intro.g2d :as g2d]
            [clojure.string :as string]))

(defn dump-vec
  [{x :x y :y}]
  (string/join ["[x: " (.toString x) ", y: " (.toString y) "]"]))

(defn dump-segment
  [{a :a b :b}]
  (string/join ["< " (dump-vec a) (dump-vec b) " >"]))

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
  "Return a list l such as:
   l[0] : list of list of endpoints (for drawing purpose)
   l[1] : list of all endpoints
   l[2] : list of all segments
  "
  (reduce (fn [[adraw aeps asegs] g]
            (let [[eps segs] (build-one-geom-data g)]
              [(conj adraw eps) (into aeps eps) (into asegs segs)]))
          [[] [] []] data))

(defn find-other-end [{:keys [a b]} p]
  (cond
   (= a p) b
   (= b p) a
   ))

(defn qualify-endpoint-angle
  [ep angle]
  (assoc ep :angle angle))

(defn qualify-endpoint-geom
  [ep kind]
  (assoc ep :geom kind))

(defn qualify-endpoint-role
  [ep kind]
  (assoc ep :role kind))

(defn- quite-same
  [e a b]
  (-> (- a b) (Math/abs) (< e)))

(defn sort-endpoints-by-angle
  "Sort endpoints by increasing polar angle. If some endpoints lie on the same angle, they are
   sorted by increasing distance to origin.

   Each endpoint is also tagged with the angle it lies with key :angle"

  [o eps]
  (->>
   (reduce (fn [acc {p :point :as ep}]
             (let [{angle :theta :as polar} (g2d/->polar (g2d/minus p o))]
               (conj! acc [polar (qualify-endpoint-angle ep angle)]))) ;; -> [[polar ep] [polar ep] ...]
           (transient []) eps)
   (persistent!)
   (sort (comp (fn [[{ra :r ta :theta} epa] [{rb :r tb :theta}  epb]]
                 (cond
                  (quite-same 0.000001 ta tb) (<= ra rb)
                  (<= ta tb) true
                  :else false)
                 )))))

(defn group-endpoints-by-angle
  " Group endpoints by \"quite same\" angle.

  i: ([a1 ep] [a2 ep] ... [an ep])
  o: ([a1 [ep ...]] [a2 [ep ...]] [an [ep ...]])"
  [[[first-polar first-ep] & tail]]
  (->>
   (reduce (fn [[out [current-angle eps-vec :as acc]]
                [next-polar next-ep]]
             (cond
              (quite-same 0.000001 current-angle (:theta next-polar)) [out [current-angle (conj eps-vec next-ep)]]    ;; same angle, add ep to acc
              :else                                                   [(conj out acc) [(:theta next-polar) [next-ep]]] ;; add acc to out, new acc from current ep
              )
             )
           [[]                                 ;; res empty at start
            [(:theta first-polar) [first-ep]]] ;; init acc with first endpoint
           tail)
   ((fn [[out acc]]
      (conj out acc) ;; Merge last angle/endpoints into final result
      )))
  )

(defn compute-ray-segments-intersections
  [ray segments]
  (->> segments
       (reduce (fn [acc s]
                 (let [i (g2d/intersection ray s)]
                   (if (or (= i nil) ;; no collision => reject
                           (= (:f i) 0)) ;; ray's origin lies ON the segment => reject collision (the bearing segment is considered as non colliding)
                     acc
                     (conj acc i))))
               [])
       (sort-by :f)))

(defn- is-segment-bearing-endpoint
  "Return true if endpoint is at same position than one segment ends"
  [{a :a b :b} {p :point}]
  (or (= a p) (= b p)))

(defn- is-segment-bearing-some-endpoints
  "Return true if seg is bearing at least one endpoint in eps"
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
     (> 0 d) :in
     (< 0 d) :out
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
     (or (> 0 d1)(> 0 d2))  :in
     (or (< 0 d1)(< 0 d2))  :out
     ))
  )

(defn classify-endpoint
  "Classify a point depending on segments bearing it and the ray passing through it.

  Returned classifier may be:

     :collinear => all endpoints are on the ray
     :cross     => one endpoint on each \"side\" of the ray
     :out       => all endpoints \"before\" the ray
     :in        => all endpoints \"after\" the ray
  "
  [ray {:keys [segments] :as ep}]
  (if (= 1 (count segments))
    (classify-final-endpoint ray ep)
    (classify-internal-endpoint ray ep)
    ))
