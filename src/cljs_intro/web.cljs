(ns cljs-intro.web
  (:require [cljs-intro.core :as core]
            [cljs-intro.g2d :as g2d]
            [cljs-intro.draw :as draw]
            [cljs-intro.data :as data]
            [dommy.core :as dommy]
            [cljs.core.async :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [dommy.macros :refer [sel sel1]]
                   [cljs.core.async.macros :refer [go alt!]])
  )


(enable-console-print!)

(def geom (data/produce-empty-frame))
;(def geom (data/produce-dev-data))
;(def geom (data/produce-parallel-vertical-segments-soup))
;(def geom (data/produce-parallel-horizontal-segments-soup))
;(def geom (data/produce-square-soup 12 6 25 20 25))
;(def geom (data/produce-block-soup))

(defn build-time-dep-data
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
  )
 )

(defn listen-timer
  [chan-out period cb]
  
  (go (loop [timer (timeout period)]
        (<! timer)
        (put! chan-out [:timer cb])
        (recur (timeout period))))
  )

(defn listen-dom-evt
  [chan-out target evt-type cb]
  (dommy/listen! target evt-type
                 (fn [ev]
                   (put! chan-out [ev cb])
                   ))
  )

(defn init-game-state
  []
  (let [target   (.getElementById js/document "target")
        context  (.getContext target "2d")
        img      (js/Image.)
        width    (.-width target)
        height   (.-height target)
        data     [-20 -20 20 -20 20 20 -20 20]
        r-geom   (for [sx (range 6)
                       sy (range 3)]
                   (let [x  (+ (+ (* 100 sx) 50) 30)
                         y  (+ (+ (* 100 sy) 30) 40)
                         a  (* (Math/random) (* 2 Math/PI))]
                     {:x x :y y :data data :closed (even? (+ sx sy)) :alpha a}
                     )
                   )
;;        r-geom []
        ]
    
    (set! (.-src img) "http://www.topuniversities.com/sites/qs.topuni/files/filefields/field_article_image/Top_10_Universities_in_New_York_City.jpg")

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
     :static  (into {} (map vector [:drawdata :eps :allsegs] (core/build-geom-data geom)))
     :dynamic nil}
    )
  )

(defn- render-game
  [{:keys [img width height hull x y context eps dynamic] :as state}]
  (let [{:keys [drawdata eps]} dynamic
        o                      (g2d/vec2d x y)
        erase-color            "black"]
    (draw/draw-rect context 0 0 width height erase-color)
    (draw/draw-hull context x y hull img)
    (draw/draw-geometry context drawdata)
    ;(draw/draw-collisions context hull)
    ;(draw/draw-endpoints context eps)
    (draw/draw-point context o "lightblue")
    )
  )

(defn ^:export init
  []
  (let [target                 (.getElementById js/document "target")
        context                (.getContext target "2d")
        width                  (.-width target)
        height                 (.-height target)
        [drawdata eps allsegs :as data] (core/build-geom-data geom)]
    (let [chan-out (chan)]
      (listen-dom-evt chan-out target :mousemove (fn [ev state]
                                                   (assoc state :x (.-x ev) :y (.-y ev))))

      (listen-timer chan-out 50 (partial (fn [ev {:keys [static x y r-geom] :as state}]
                                           (let [{:keys [drawdata eps allsegs]} static
                                                 o (g2d/vec2d x y)
                                                 alpha (:alpha state)
                                                 [dd de ds] (->> r-geom
                                                                 (map (partial build-time-dep-data alpha))
                                                                 (reduce (fn [[adraw aeps asegs] [e s]]
                                                                           [(conj adraw e) (into aeps e) (into asegs s)])
                                                                         [drawdata eps allsegs]))
                                                 hull (core/compute-visibility-hull de ds o)
                                                 new-state (assoc state
                                                             :hull hull
                                                             :dynamic (assoc {}
                                                                        :drawdata dd
                                                                        :eps de
                                                                        :allsegs ds)
                                                             :alpha (+ alpha (/ Math/PI 20)))]
                                             (render-game new-state)
                                             new-state))))
      
      ;; Game loop
      ;; 
      (go (loop [cont true
                 state (init-game-state)]
            (let [[evt cb] (<! chan-out)]
              (recur true (cb evt state))
              )
            )
          )
      )
    )
  )

;; (defn ^:export init
;;   []
;;   (let [target   (.getElementById js/document "target")
;;         context  (.getContext target "2d")
;;         width    (.-width target)
;;         height   (.-height target)]
        
;;     (.log js/console
;;           (time
;;            (let [geom (data/produce-square-soup)
;;                  [drawdata eps allsegs :as data] (core/build-geom-data geom)
;;                  o (g2d/vec2d 320 180)
;;                  hull (core/compute-visibility-hull de ds o)]
;;              )))))

