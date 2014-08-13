(ns cljs-intro.core
  (:require [cljs-intro.g2d :as g2d]
             [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [sel sel1]]))

(enable-console-print!)

(def geom [
           {:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}
           {:data [100.0,50.0,540.0,50.0
                   ; ,540.0,160.0,100.0,160.0
                   ] :closed false}
           ;{:data [200.0,170.0,300,350] :closed false}
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

(defn sort-endpoints-by-angle
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

(defn compute-intersections
  [sorted-ep allsegs o]
  (map (fn [[polar {:keys [point segments] :as ep}]]
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
  )

(defn produce-light-hull
  [collist]
  (reduce (fn [acc [{point :point segments :segments :as ep} {o :o p :p :as ray} cps]]
            (let [c (classify ray ep cps)]
              (cond
               (= c :nocol) (conj acc [p "white"])
               (= c :near) (let [[col] cps]
                             (conj acc [(:p col) "black"]))
               (= c :eos) (let [[seg] segments ;; first (and only) segment
                                other (find-other-end seg point) ;; find segment's end other than tested endpoint's position
                                d (g2d/distance ray other) ;; ... distance to ray
                                [{col-pos :p}] cps ;; nearest collision
                                [f s] (if (< d 0) [p col-pos] [col-pos p])]
                            (into acc [[f "green"] [s "blue"]]))
               (= c :dual) (let [[s1 s2] segments
                                 o1 (find-other-end s1 point)
                                 o2 (find-other-end s2 point)
                                 d1 (g2d/distance ray o1)
                                 d2 (g2d/distance ray o2)
                                 [{col-pos :p}] cps]
                             (cond
                              (< (* d1 d2) 0) (conj acc [p "yellow"]) ;; each other segment ends are around the point
                              (> 0 d1) (into acc [[p "green"] [col-pos "blue"]])
                              :else (into acc [[col-pos "green"] [p "blue"]])
                              )
                             )
               )
              )
            )
          [] collist)
  )

(defn group-endpoints-by-angle [[[first-polar  first-ep] & tail]]
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


(defn drawData
  [context ox oy]
  (let [[drawdata eps allsegs] (build-geom-data geom)
        o                      (g2d/vec2d ox oy)
        sorted-ep              (sort-endpoints-by-angle eps o)
        eps-by-angle           (group-endpoints-by-angle sorted-ep)
        collist                (compute-intersections sorted-ep allsegs o)
        pts                    (produce-light-hull collist)]

    (println "eps-by-angle " eps-by-angle)
    
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
    
    (let [poly-count (count pts)
          pts-source (cycle pts)]
      (loop [cnt poly-count
             pts pts-source]
        (if (= 0 cnt)
          nil
          (let [[[a] & tail] pts
                [[b]] tail]
            (.moveTo context ox oy)
            (.lineTo context (:x a) (:y a))
            (.lineTo context (:x b) (:y b))
            ; (set! (. context -fillStyle) "yellow")
            (set! (. context -strokeStyle) "yellow")
            (.stroke context)
            (recur (- cnt 1) tail)
            ))
        ))
    
    ;; (let [[[f color] & more] pts
    ;;       grd (.createRadialGradient context ox oy 50 ox oy 300)]
    ;;   (.addColorStop grd 0 "yellow")
    ;;   (.addColorStop grd 1 "white")
    ;;   (.beginPath context)
    ;;   (.moveTo context (:x f) (:y f))
    ;;   (doseq [[p color] more]
    ;;     (.lineTo context (:x p) (:y p))
    ;;     )
    ;;   (.lineTo context (:x f) (:y f))
    ;;   (set! (. context -fillStyle) "yellow")
    ;;   ;(set! (. context -fillStyle) grd)
    ;;   (.fill context)
    ;;   )
    
    ;; Draw collisions
    ;; 
    (doseq [[f color] pts]
      (draw-point context f color)
      )
    
    
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
    (set! (. context -fillStyle) "red")
    (.arc context (:x o) (:y o) 5 0 (* 2.0 Math/PI) false)
    (.fill context)
   )
  )

(defn ^:export init []
  (let [target (.getElementById js/document "target")
        context (.getContext target "2d")
        width (.-width target)
        height (.-height target)]
    (dommy/listen! (sel1 :canvas) :mousemove
                   (fn [ev]
                     (set! (. context -fillStyle) "white")
                     (.fillRect context 0 0 width height)
                     (println (.-x ev) (.-y ev))
                     (drawData context (.-x ev) (.-y ev))))))

