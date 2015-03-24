(ns cljs-intro.spot
  (:require [cljs-intro.g2d :as g2d]
            [clojure.string :as string]))

(defn- dump-vec
  [{x :x y :y}]
  (string/join ["[x: " (.toString x) ", y: " (.toString y) "]"]))
  
(defn- dump-segment
  [{a :a b :b}]
  (string/join ["< " (dump-vec a) (dump-vec b) " >"]))

(defn- select-segments
  "Select segments for which absolute distance to m is lower than or equal to d"
  
  [segments m d]
  (filter #(->> (g2d/distance-to-segment %1 m)
                (Math/abs)
                (>= d))
          segments))

(defn prout
  [{a :a b :b :as s} f]

  (-> (g2d/minus b a)
      (g2d/scale f)
      (g2d/plus a)
      ))

(defn- trim-segment
  "Trim segment s with respect to circle c"

  [{a :a b :b :as s} c]
  (let [[col? cols] (g2d/intersection-segment-circle c s)]
    (if col?
      (let [ta   (if (nil? (cols :t1)) a (prout s (cols :t1)))
            tb   (if (nil? (cols :t2)) b (prout s (cols :t2)))]
        (assoc s :a ta :b tb))
      nil)))

(defn- trim-segments
  "Trim segments with respect to circle centered on m with radius d"
  
  [segments m d]
  (let [c (g2d/circle m d)]
    (map #(trim-segment %1 c) segments)))

(defn compute-visibility-hull
  [eps segments o dist]
  (let [r (-> segments
              (select-segments o dist)
              (trim-segments o dist)
              )]
    (remove nil? r)
    ))
