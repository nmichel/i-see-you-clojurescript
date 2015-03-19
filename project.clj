(defproject cljs-intro "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3126"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [prismatic/dommy "1.0.0"]]

  :plugins [[lein-cljsbuild "1.0.5"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cljs-intro"
              :source-paths ["src"]
              :compiler {
                :output-to "cljs_intro.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
