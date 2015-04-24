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
  [context ox oy pts img]
  (let [poly-count (count pts)
        pts-source (cycle pts)
        [p c] (first pts-source)]
    (.save context)
    (.beginPath context)
    (.moveTo context (:x p) (:y p))
    (loop [cnt poly-count
           pts (rest pts-source)]
      (if (= 0 cnt)
        (.clip context)
        (let [[[a] & tail] pts]
          (.lineTo context (:x a) (:y a))
          (recur (- cnt 1) tail)
          ))))
  (draw-rect context 0 0 800 600 "green") ;;(.drawImage context img 0 0 800 600)
  (.restore context)
  )

(defn draw-hull-as-polygon
  [context ox oy pts img]
  (let [poly-count (count pts)
        pts-source (cycle pts)
        [p c] (first pts-source)]
    (set! (. context -fillStyle) "yellow") ;; (set! (. context -strokeStyle) "yellow")
    (set! (.-lineWidth context) 2)
    (.beginPath context)
    (.moveTo context (:x p) (:y p))
    (loop [cnt poly-count
           pts (rest pts-source)]
      (if (= 0 cnt)
        (.fill context) ;; (.stroke context)
        (let [[[a] & tail] pts]
          (.lineTo context (:x a) (:y a))
          (recur (- cnt 1) tail)
          )))))

(defn draw-hull-as-fan
  [context ox oy pts img]
  (let [poly-count (count pts)
        pts-source (partition 2 1 (cycle pts))]
    (set! (. context -fillStyle) "yellow")
    (set! (. context -strokeStyle) "orange")
    (set! (.-lineWidth context) 2)
    (loop [cnt poly-count
           pts pts-source]
      (if (< 0 cnt)
        (let [pair (first pts)
              [a ca] (first pair)
              [b cb] (second pair)]
          (doto context
            (.beginPath)
            (.moveTo (:x a) (:y a))
            (.lineTo ox oy)
            (.lineTo (:x b) (:y b))
            (.lineTo (:x a) (:y a))
            (.fill)
            (.stroke)
            )
          (recur (dec cnt) (rest pts))
          )
        ))))

(defn draw-hull-as-surfaces
  [context surfaces]
  (set! (. context -fillStyle) "yellow")
  (doseq
    [[t
      {ox :x oy :y}
      [{a :point angle_a :angle} ca]
      [{b :point angle_b :angle} cb] :as surf] surfaces]

    (if
      (= :arc t)
      (let [dist (nth surf 4)]
        (doto context
          (.beginPath)
          (.moveTo ox oy)
          (.lineTo (:x a) (:y a))
          (.arc ox oy dist angle_a angle_b false)
          (.fill)
          )
        )
      (doto context
        (.beginPath)
        (.moveTo (:x a) (:y a))
        (.lineTo ox oy)
        (.lineTo (:x b) (:y b))
        (.lineTo (:x a) (:y a))
        (.fill)
        )
      )
    )
)

(defn draw-geometry
  [context data]
  (doseq [d data]
    (let [{point :point :as ep} (first d)]
      (set! (. context -strokeStyle) "red")
      (set! (.-lineWidth context) 2)
      (.beginPath context)
      (.moveTo context (:x point) (:y point))
      (doseq [{point :point} (rest d)]
        (.lineTo context (:x point) (:y point)))
      (if (> (count (:segments ep)) 1)
        (.lineTo context (:x point) (:y point)))
      (.stroke context)
      ))
  )

(defn draw-hull-vertices
  [context pts]
  (doseq [[f color] pts]
    (draw-point context f color)
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
