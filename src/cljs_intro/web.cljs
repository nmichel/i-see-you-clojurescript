(ns cljs-intro.web
  (:require [cljs-intro.core :as core]
            [cljs-intro.global :as global]
            [cljs-intro.pie :as pie]
            ;;[cljs-intro.spot :as spot]
            [cljs-intro.g2d :as g2d]
            [cljs-intro.draw :as draw]
            [cljs-intro.data :as data]
            [dommy.core :as dommy]
            [cljs.core.async :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [dommy.core :refer [sel sel1]]
                   [cljs.core.async.macros :refer [go alt!]]))

(enable-console-print!)

;;(def geom (data/produce-empty-frame))
;;(def geom (data/produce-dev-data-4))
;;(def geom (data/produce-parallel-vertical-segments-soup))
;;(def geom (data/produce-parallel-horizontal-segments-soup))
;;(def geom (data/produce-square-soup 12 6 25 20 25))
;;(def geom (data/produce-square-soup 1 1 25 20 25))
;;(def geom (data/produce-square-soup 1 1 100 20 20))
(def geom (data/produce-block-soup))

(defn- build-dynamic-data
  []
  (let [data [-20 -20 20 -20 20 20 -20 20]]
    (for [sx (range 6)
          sy (range 3)]
      (let [x  (+ (+ (* 100 sx) 50) 30)
            y  (+ (+ (* 100 sy) 30) 40)
            a  (* (Math/random) (* 2 Math/PI))]
        {:x x :y y :data data :closed (even? (+ sx sy)) :alpha a}
        ))))

(defn- update-dynamic-data
 [a {:keys [x y data closed alpha]}]

 (->>
  (partition 2 data)
  (map (fn [p]
         (let [[rpx rpy] (g2d/rotate p (+ a alpha))]
           [(+ x rpx)(+ y rpy)])))
  (reduce concat)
  (into [])
  (assoc {:closed closed} :data)
  (core/build-one-geom-data)
  ))

(defn- listen-timer
  [chan-out period cb]

  (go (loop [timer (timeout period)]
        (<! timer)
        (put! chan-out [:timer cb])
        (recur (timeout period)))))

(defn- listen-dom-evt
  [chan-out target evt-type cb]
  (dommy/listen! target evt-type
                 (fn [ev]
                   (put! chan-out [ev cb]))))

(defn- init-game-state
  [dist]
  (let [target   (.getElementById js/document "target")
        context  (.getContext target "2d")
        img      (js/Image.)
        width    (.-width target)
        height   (.-height target)
        r-geom   (build-dynamic-data)]

    {:target  target
     :context context
     :img     img
     :width   width
     :height  height
     :hull    nil
     :x       320
     :y       180
     :r-geom  r-geom
     :alpha   0
     :static  (core/build-geom-data geom)
     :dynamic nil
     :dist    dist}
    )
  )


(def *alpha* (g2d/deg->rad -127))
(def *apperture* (g2d/deg->rad 160.0))

(defn- render-game
  [{:keys [img width height segs hull x y context eps dynamic dist] :as state}]
  (let [[drawdata eps _allsegs] dynamic
        o                       (g2d/vec2d x y)
        erase-color             "grey"]
    (draw/draw-rect context 0 0 width height erase-color)
    ;;(draw/draw-geometry context drawdata)
    (draw/draw-segments context segs)
    ;;(draw/draw-hull-as-surfaces context hull)
    (draw/draw-pie context x y dist (-> (- *alpha* *apperture*) (g2d/-pi+pi->0+2pi)) (-> (+ *alpha* *apperture*) (g2d/-pi+pi->0+2pi))) ;; work only with pie/compute-visibility-hull output
    ;;(draw/draw-hull-as-polygon context x y hull) ;; work only with global/compute-visibility-hull output
    ;;(draw/draw-hull-as-fan context x y hull img) ;; work only with global/compute-visibility-hull output
    ;;(draw/draw-hull-by-clipping context x y hull img) ;; work only with global/compute-visibility-hull output
    ;;(draw/draw-hull-vertices context hull) ;; work only with global/compute-visibility-hull output
    ;;(draw/draw-endpoints context eps)
    (draw/draw-point context o "lightblue")
    ))

(defn- build-data
  [[drawdata eps allsegs]
   dynamic
   alpha]
  (->> dynamic
       (map (partial update-dynamic-data alpha))
       (reduce (fn [[adraw aeps asegs] [e s]]
                 [(conj adraw e) (into aeps e) (into asegs s)])
               [drawdata eps allsegs])))

(def update-visibility-hull)

(defn- update-mouse-pos
  [ev state]
  (->> (assoc state :x (.-clientX ev) :y (.-clientY ev))
       (update-visibility-hull ev)
       ))

(defn- update-click-pos
  [ev state]
  (->> (assoc state :x (.-clientX ev) :y (.-clientY ev))
       ;;(update-visibility-hull ev)
       ))

(defn- update-visibility-hull
  [ev {:keys [static x y r-geom dist] :as state}]
  (let [o           (g2d/vec2d x y)
        alpha       (:alpha state)
        [dd de ds]  static ;; [dd de ds] (build-data static r-geom alpha)
        [segs hull] (pie/compute-visibility-hull *alpha* *apperture* o dist ds)
        ;;[segs hull] (spot/compute-visibility-hull o dist ds)
        ;;hull       (global/compute-visibility-hull o de ds)
        new-state   (assoc state
                      :segs segs
                      :hull hull
                      :dynamic [dd de ds]
                      :alpha (+ alpha (/ Math/PI 20)))]
    new-state))

(defn ^:export init
  []
  (let [target                 (.getElementById js/document "target")
        context                (.getContext target "2d")
        width                  (.-width target)
        height                 (.-height target)
        [drawdata eps allsegs :as data] (core/build-geom-data geom)]
    (let [chan-out (chan)]
      (listen-dom-evt chan-out target :mousemove update-mouse-pos)
      ;;(listen-dom-evt chan-out target :click update-click-pos)
      ;;(listen-timer chan-out 50 update-visibility-hull)

      ;; Game loop
      ;;
      (go (loop [cont true
                 state (init-game-state 100)]
            (let [[evt cb] (<! chan-out)
                  newstate (cb evt state)]
              (.requestAnimationFrame js/window (partial render-game newstate))
              (recur true newstate)
              ))))))

