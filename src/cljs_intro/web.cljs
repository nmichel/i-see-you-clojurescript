(ns cljs-intro.web
  (:require [cljs-intro.core :as core]
            [cljs-intro.g2d :as g2d]
            [cljs-intro.draw :as draw]
            [cljs-intro.data :as data]
            [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [sel sel1]]))

(enable-console-print!)

;(def geom (data/produce-parallel-vertical-segments-soup))
;(def geom (data/produce-parallel-horizontal-segments-soup))
;(def geom (data/produce-square-soup))
(def geom (data/produce-block-soup))

(defn ^:export init []
  (let [target                 (.getElementById js/document "target")
        context                (.getContext target "2d")
        width                  (.-width target)
        height                 (.-height target)
        [drawdata eps allsegs :as data] (core/build-geom-data geom)]
    (dommy/listen! (sel1 :canvas) :mousemove
                   (fn [ev]
                     (let [x    (.-x ev)
                           y    (.-y ev)
                           o    (g2d/vec2d x y)
                           hull (core/compute-visibility-hull eps allsegs o)]
                       (draw/draw-rect context 0 0 width height "white")
                       (draw/draw-hull context x y hull)
                       (draw/draw-geometry context drawdata)
                       (draw/draw-collisions context hull)
                       (draw/draw-endpoints context eps)
                       (draw/draw-point context o "lightblue")
                       )))
    ))
