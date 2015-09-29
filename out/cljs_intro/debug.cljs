(ns cljs-intro.debug
  (:require [clojure.string :as string]))

(defn- print
  [& args]
  (.log js/console (string/join args)))

(defn dump-endpoints
  [s]
  (doseq
      [{:keys [angle point]} s]
    (print "| a: " angle " p: " point)
    )
  )

(defn dump-angle-sorted-endpoints
  [s]
  (doseq
    [[a eps] s]
    (print "* angle [" a "]")
    (dump-endpoints eps)
    )
  s)

(defn dump-vertex
  [v]
  (print "| p: " (:point v) " g: " (:geom v) " r: " (:role v) " a: " (:angle v))
  )

(defn dump-vertices
  [vs]
  (doseq
      [v vs]
    (dump-vertex v))
  vs
  )

(defn dump-surface
  [[kind :as s]]
  (if (= kind :arc)
    (let [[:arc o epa epb dist] s]
      (print "| kind: " kind " " (:point epa) " " (:point epb) " " dist)
      )
    (let [[:triangle o epa epb] s]
      (print "| kind: " kind " " (:point epa) " " (:point epb))
      )
    )
  )

(defn dump-surfaces
  [surfs]
  (doseq
    [s surfs]
    (dump-surface s))
  surfs)

