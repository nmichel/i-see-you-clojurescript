(ns cljs-intro.core
  (:require [cljs-intro.g2d :as g2d]))

(enable-console-print!)

(def geom [{:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}
           {:data [100.0,50.0,540.0,50.0,540.0,260.0,100.0,260.0] :closed false}])

(defn- coord-list-to-point-list [data]
  (map (fn [[x y]] (g2d/vec2d x y)) (partition 2 data)))

(defn- build-segment-lists [points closed]
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

(defn- build-one-geom-data [{:keys [data closed]}]
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

;; test code

(defn drawData []
  (let [target (.getElementById js/document "target")
        context (.getContext target "2d")
        [drawdata eps allsegs] (build-geom-data geom)
        o (g2d/vec2d 200 200)
        sorted-ep (->>
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
        collist (map (fn [[polar {:keys [point segments]}]]
                       (let [ray (g2d/ray o point),
                             tested-segs (filter
                                          (fn [s] (not-any? #(identical? %1 s) segments)) ;; exclude segments bearing the endpoint
                                          allsegs)]
                         
                         (map #(g2d/intersection ray %1) tested-segs) ;; compute interstion between ray and all (non bearing) segments
                         )) sorted-ep)
        ]
    
    (doseq [d drawdata]
      (let [{point :point :as ep} (first d)]
        (set! (. context -strokeStyle) "#FF0000")
        (.beginPath context)
        (.moveTo context (:x point) (:y point))
        (doseq [{point :point} (rest d)]
          (.lineTo context (:x point) (:y point)))
        (if (> (count (:segments ep)) 1)
          (.lineTo context (:x point) (:y point)))
        (.stroke context)
        ))
    
    
    (.beginPath context)
    (.arc context (:x o) (:y o) 3 0 (* 2.0 Math/PI) false)
    (.fill context)
    
    (doseq [cps collist]
      (doseq [[c data] cps]
        (if c
          (let [{{x :x y :y} :p} data]
            (.beginPath context)
            (.arc context x y 3 0 (* 2.0 Math/PI) false)
            (set! (. context -fillStyle) "green")
            (.fill context)
            )
          )
        )
      )
    )
  )
  
(defn ^:export init []
  (drawData))

