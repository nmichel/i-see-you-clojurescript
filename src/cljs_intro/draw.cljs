(ns cljs-intro.draw
  (:require [cljs-intro.g2d :as g2d]
            [cljs-intro.core :as core]))

(defn draw-point [context {x :x y :y} color]
  (set! (. context -fillStyle) color)
  (doto context
    (.beginPath)
    (.arc x y 5 0 (* 2.0 Math/PI) false)
    (.fill)
    )
  )

(defn draw-rect
  [context x y w h color]
  (set! (. context -fillStyle) color)
  (.fillRect context x y w h)
  )

(defn draw-hull-by-clipping
  [context ox oy [{{px :x py :y} :point} & pts] img]
  (doto context
    (.save)
    (.beginPath)
    (.moveTo px py)
    )
  (doseq [{{ax :x ay :y} :point} pts]
    (.lineTo context ax ay)
    )
  (doto context
    (.clip)
    (draw-rect 0 0 800 600 "green") ;;(.drawImage context img 0 0 800 600)
    (.restore)
    )
  )

(defn draw-hull-as-polygon
  [context ox oy [{{px :x py :y} :point} & pts]]
  (set! (. context -fillStyle) "yellow")
  ;; (set! (. context -strokeStyle) "yellow")
  (set! (.-lineWidth context) 2)
  (.beginPath context)
  (.moveTo context px py)
  (doseq [{{ax :x ay :y} :point} pts]
    (.lineTo context ax ay)
    )
  (.fill context)
  )

(defn draw-hull-as-fan
  [context ox oy pts img]
  (set! (. context -fillStyle) "yellow")
  (set! (. context -strokeStyle) "orange")
  (set! (.-lineWidth context) 2)
  (doseq [[{{ax :x ay :y} :point} {{bx :x by :y} :point}] (->> pts (cycle) (partition 2 1) (take (count pts)))]
    (doto context
      (.beginPath)
      (.moveTo ax ay)
      (.lineTo ox oy)
      (.lineTo bx by)
      (.lineTo ax ay)
      (.fill)
      (.stroke)
      )
    )
  )

(defn draw-hull-as-surfaces
  [context surfaces]
  (set! (. context -fillStyle) "yellow")
  (set! (. context -strokeStyle) "red")
  (set! (.-lineWidth context) 2)
  (doseq
    [[t
      {ox :x oy :y}
      {a :point angle_a :angle}
      {b :point angle_b :angle} :as surf] surfaces]

    (if
      (= :arc t)
      (let [dist (nth surf 4)]
        (doto context
          (.beginPath)
          (.moveTo ox oy)
          (.arc ox oy dist angle_a angle_b false)
          (.fill)
          )
        )
      (do
        (doto context
          (.beginPath)
          (.moveTo (:x a) (:y a))
          (.lineTo ox oy)
          (.lineTo (:x b) (:y b))
          (.lineTo (:x a) (:y a))
          (.fill)
          )
        (doto context
          (.beginPath)
          (.moveTo (:x a) (:y a))
          (.lineTo (:x b) (:y b))
          (.stroke)
          )
        )
      )
    )
)

(defn draw-geometry
  [context data]
  (set! (. context -strokeStyle) "blue")
  (set! (.-lineWidth context) 2)
  (doseq [d data :let [{point :point :as ep} (first d)]]
    (.beginPath context)
    (.moveTo context (:x point) (:y point))
    (doseq [{point :point} (rest d)]
      (.lineTo context (:x point) (:y point)))
    (when (> (count (:segments ep)) 1)
      (.lineTo context (:x point) (:y point)))
    (.stroke context)
    )
  )

(def ^private role-to-color-map
  {:in        "blue"
   :out       "green"
   :cross     "yellow"
   :collision "black"})

(defn draw-hull-vertices
  [context pts]
  (doseq [{p :point r :role} pts]
    (draw-point context p (get role-to-color-map r "white"))
    )
  )

(defn draw-endpoints
  [context eps]
  (doseq [{{x :x y :y} :point} eps]
    (set! (. context -fillStyle) "red")
    (doto context
      (.beginPath)
      (.arc x y 5 0 (* 2.0 Math/PI) false)
      (.fill)
      )
    ))

(defn draw-segments
  [context segments]
  (set! (. context -strokeStyle) "cyan")
  (set! (.-lineWidth context) 2)
  (doseq [{{x1 :x y1 :y} :a {x2 :x y2 :y} :b} segments]
    (doto context
      (.beginPath)
      (.moveTo x1 y1)
      (.lineTo x2 y2)
      (.stroke)
      )
    ))

(defn draw-circle
  [context ox oy dist]
  (set! (. context -strokeStyle) "green")
  (set! (.-lineWidth context) 2)
  (doto context
    (.beginPath)
    (.arc ox oy dist 0 (* 2 Math/PI) false)
    (.stroke)
    ))

(defn draw-pie
  [context ox oy dist alpha beta]
  (set! (. context -strokeStyle) "green")
  (set! (.-lineWidth context) 2)
  (doto context
    (.beginPath)
    (.moveTo ox oy)
    (.arc ox oy dist alpha beta false)
    (.lineTo ox oy)
    (.stroke)
    ))
