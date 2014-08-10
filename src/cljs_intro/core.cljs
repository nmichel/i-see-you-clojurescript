(ns cljs-intro.core
  (:require [cljs-intro.g2d :as g2d]
             [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [sel sel1]]))

(enable-console-print!)

(def geom [
           {:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}
           {:data [100.0,50.0,540.0,50.0,540.0,160.0,100.0,160.0] :closed false}
           {:data [200.0,170.0,300,350] :closed false}
           ])

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

(declare classify)
(declare find-other-end)
(declare draw-point)

(defn drawData [context ox oy]
  (let [[drawdata eps allsegs] (build-geom-data geom)
        o (g2d/vec2d ox oy)
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
        collist (map (fn [[polar {:keys [point segments] :as ep}]]
                       (let [ray (g2d/ray o point),
                             tested-segs (filter
                                          (fn [s] (not-any? #(identical? %1 s) segments)) ;; exclude segments bearing the endpoint
                                          allsegs)
                             cols (->> (reduce (fn [acc s]
                                                 (let [i (g2d/intersection ray s)]
                                                   (if (= i nil)
                                                     acc
                                                     (conj acc i))))
                                               [] tested-segs)
                                       (sort-by :f))]
                         
                         ;; compute interstion between ray and all (non bearing) segments
                         ;; [ [ep ray [col col ...]] [ep ray []] ...]
                         ;; 
                         [ep ray cols]
                         ))
                     sorted-ep)
        ]

    ;; Draw geometry
    ;; 
    (doseq [d drawdata]
      (let [{point :point :as ep} (first d)]
        (set! (. context -strokeStyle) "red")
        (.beginPath context)
        (.moveTo context (:x point) (:y point))
        (doseq [{point :point} (rest d)]
          (.lineTo context (:x point) (:y point)))
        (if (> (count (:segments ep)) 1)
          (.lineTo context (:x point) (:y point)))
        (.stroke context)
        ))
    
    ;; Draw endpoints
    ;; 
    (doseq [{{x :x y :y} :point} eps]
      (.beginPath context)
      (.arc context x y 5 0 (* 2.0 Math/PI) false)
      (set! (. context -fillStyle) "red")
      (.fill context)
      )

    ;; Draw origin
    ;; 
    (.beginPath context)
    (.arc context (:x o) (:y o) 5 0 (* 2.0 Math/PI) false)
    (.fill context)

    ;; Draw collisions
    ;; 
    (doseq [[{point :point segments :segments :as ep} {o :o p :p :as ray} cps] collist]
      (let [c (classify ray ep cps)]
        (cond
         (= c :nocol) (draw-point context p "white")
         (= c :near) (let [[col] cps]
                       (draw-point context (:p col) "black"))
         (= c :eos) (let [[seg] segments ;; first (and only) segment
                          other (find-other-end seg point) ;; find segment's end other than tested endpoint's position
                          d (g2d/distance ray other) ;; ... distance to ray
                          [{col-pos :p}] cps ;; nearest collision
                          [f s] (if (> d 0) [p col-pos] [col-pos p])]
                      (draw-point context f "green")
                      (draw-point context s "blue")
                      )
         (= c :dual) (let [[s1 s2] segments
                           o1 (find-other-end s1 point)
                           o2 (find-other-end s2 point)
                           d1 (g2d/distance ray o1)
                           d2 (g2d/distance ray o2)
                           [{col-pos :p}] cps]
                       (cond
                        (< (* d1 d2) 0) (draw-point context p "yellow") ;; each other segment ends are around the point
                        (< 0 d1) (do (draw-point context p "green")
                                     (draw-point context col-pos "blue"))
                        :else (do (draw-point context col-pos "green")
                                  (draw-point context p "blue"))
                        )
                       )
         )
        )
      )
    )
  )

(defn draw-point [context {x :x y :y} c]
  (.beginPath context)
  (.arc context x y 3 0 (* 2.0 Math/PI) false)
  (set! (. context -fillStyle) c)
  (.fill context)
  )

(defn find-other-end [{:keys [a b]} p]
  (cond
   (identical? a p) b
   (identical? b p) a
   :else (.log js/console "ERROR (find-other-end) : nor a neither b is p")
   )
  )

(defn classify [{o :o p :p}   ;; ray
                {s :segments} ;; endpoint
                cols]         ;; collisions
  (if (empty? cols)
    :nocol
    (let [[{t :f} & more] cols] ;; extract nearest collision
      (if (< t 1)
        :near
        (if (= 1(count s)) ;; endpoint end of segment ?
          :eos
          :dual
          )
      )
   )))

(defn ^:export init []
  (let [target (.getElementById js/document "target")
        context (.getContext target "2d")
        width (.-width target)
        height (.-height target)]
    (dommy/listen! (sel1 :canvas) :click
                   (fn [ev]
                     (set! (. context -fillStyle) "white")
                     (.fillRect context 0 0 width height)
                     (drawData context (.-x ev) (.-y ev))))))

