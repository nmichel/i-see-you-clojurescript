(defproject cljs-intro "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [org.clojure/core.async "0.1.319.0-6b1aca-alpha"]
                 [prismatic/dommy "0.1.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cljs-intro"
              :source-paths ["src"]
              :compiler {
                :output-to "cljs_intro.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
