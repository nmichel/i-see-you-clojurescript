(ns cljs-intro.draw)

(defn draw-point [context {x :x y :y} color]
  (.beginPath context)
  (.arc context x y 3 0 (* 2.0 Math/PI) false)
  (set! (. context -fillStyle) color)
  (.fill context)
  )

(defn draw-rect
  [context x y w h color]
  (set! (. context -fillStyle) color)
  (.fillRect context x y w h)
  )

(defn draw-hull
  [context ox oy pts]
  (let [poly-count (count pts)
        pts-source (cycle pts)
        grd (.createRadialGradient context ox oy 50 ox oy 500)]
    (.addColorStop grd 0 "yellow")
    (.addColorStop grd 1 "white")
    (loop [cnt poly-count
           pts pts-source]
      (if (= 0 cnt)
        nil
        (let [[[a] & tail] pts
              [[b]] tail]
          (.moveTo context ox oy)
          (.lineTo context (:x a) (:y a))
          (.lineTo context (:x b) (:y b))
          (set! (. context -fillStyle) grd)
          ;;            (set! (. context -fillStyle) "yellow")
          ;;            (set! (. context -strokeStyle) "yellow")
          (.fill context)
          (recur (- cnt 1) tail)
          )))))

(defn draw-geometry
  [context data]
  (doseq [d data]
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
  )

(defn draw-collisions
  [context pts]
  (doseq [[f color] pts]
    (draw-point context f color)
    )
  )

(defn draw-endpoints
  [context eps]
  (doseq [{{x :x y :y} :point} eps]
    (.beginPath context)
    (.arc context x y 5 0 (* 2.0 Math/PI) false)
    (set! (. context -fillStyle) "red")
    (.fill context)
    )
  )
