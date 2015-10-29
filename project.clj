(defproject cljs-intro "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.5.1"]
                 [prismatic/dommy "1.0.0"]]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1"]]

  :source-paths ["src"]

  :figwheel {
             :http-server-root "public" ;; this will be in resources/
             :server-port 3449          ;; default
             :server-ip   "192.168.232.129"     ;; default
             ;;:server-ip   "192.168.118.130"     ;; default
             }

  :cljsbuild {
    :builds [{:id "cljs-intro"
              :source-paths ["src"]
              :figwheel {:websocket-host "192.168.232.129"
                         :load-warninged-code true}
              ;; :figwheel {:websocket-host "192.168.118.130"
              ;;            :load-warninged-code true}

              :compiler {:output-to "cljs_intro.js"
                         :output-dir "out"
                         :optimizations :none
                         :source-map true}}]})
