(ns cljs-intro.web
  (:require [cljs-intro.core :as core]
            [cljs-intro.global :as global]
            [cljs-intro.pie :as pie]
            [cljs-intro.spot :as spot]
            [cljs-intro.g2d :as g2d]
            [cljs-intro.draw :as draw]
            [cljs-intro.data :as data]
            [dommy.core :as dommy]
            [cljs.core.async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
            [reagent.core :as r])
  (:require-macros [dommy.core :refer [sel sel1]]
                   [cljs.core.async.macros :refer [go alt!]]))

(enable-console-print!)

;;(def geom (data/produce-empty-frame))
;;(def geom (data/produce-dev-data-4))
;;(def geom (data/produce-parallel-vertical-segments-soup))
;;(def geom (data/produce-parallel-horizontal-segments-soup))
;;(def geom (data/produce-square-soup 12 6 25 20 25))
;;(def geom (data/produce-square-soup 1 1 25 20 25))
;;(def geom (data/produce-square-soup 1 1 100 20 20))
(def geom (data/produce-block-soup))
;;(def geom (data/produce-oriented-segments-soup))
;;(def geom (data/add-frame (data/produce-polygon 320 180 100 10 0 false)))
;;(def geom (data/add-frame (data/produce-nested-polygons 320 180 170 5)))
;;(def geom (data/add-frame (data/produce-spiral 320 180 170 0)))

(defn- build-dynamic-data
  []
  (let [data [-20 -20 20 -20 20 20 -20 20]]
    (for [sx (range 6)
          sy (range 3)]
      (let [x  (+ (+ (* 100 sx) 50) 30)
            y  (+ (+ (* 100 sy) 30) 40)
            a  (* (Math/random) (* 2 Math/PI))]
        {:x x :y y :data data :closed (even? (+ sx sy)) :alpha a}
        ))))

(defn- update-dynamic-data
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
  ))

(defn- listen-timer
  [chan-out period cb]

  (go (loop [timer (timeout period)]
        (<! timer)
        (put! chan-out [:timer cb])
        (recur (timeout period)))))

(defn- listen-dom-evt
  [chan-out target evt-type cb]
  (dommy/listen! target evt-type
                 (fn [ev]
                   (put! chan-out [ev cb]))))

(def *alpha* (g2d/deg->rad 127))
(def *apperture* (g2d/deg->rad 137.0))

(defn- init-game-state
  [dist]
  (let [target   (.getElementById js/document "target")
        context  (.getContext target "2d")
        img      (js/Image.)
        width    (.-width target)
        height   (.-height target)
        r-geom   (build-dynamic-data)]

    {:target    target
     :context   context
     :width     width
     :height    height
     :hull      nil
     :x         320
     :y         180
     :r-geom    r-geom
     :alpha     *alpha*
     :apperture *apperture*
     :static    (core/build-geom-data geom)
     :dynamic   nil
     :dist      dist
     :algo      :global}
    )
  )

(defn- render-game
  [{:keys [width height segs eps hull x y context dynamic dist alpha apperture algo]}]
  (let [[drawdata _ _allsegs] dynamic
        o                       (g2d/vec2d x y)
        erase-color             "grey"]
    (draw/draw-rect context 0 0 width height erase-color)
    (if (get-in @state [:debug :show-geom])
      (draw/draw-geometry context drawdata))
    (if (get-in @state [:debug :show-sub-geom])
      (draw/draw-segments context segs))
    (draw/draw-hull-as-surfaces context hull)
    (cond
     (= algo :pie) (draw/draw-pie context x y dist (-> (- alpha apperture) (g2d/-pi+pi->0+2pi)) (-> (+ alpha apperture) (g2d/-pi+pi->0+2pi)))
     (= algo :spot) (draw/draw-circle context x y dist)
     )
    (if (get-in @state [:debug :show-ep])
      (draw/draw-hull-vertices context eps))
    (draw/draw-point context o "lightblue")
    ))

(defn- build-data
  [[drawdata eps allsegs]
   dynamic
   alpha]
  (->> dynamic
       (map (partial update-dynamic-data alpha))
       (reduce (fn [[adraw aeps asegs] [e s]]
                 [(conj adraw e) (into aeps e) (into asegs s)])
               [drawdata eps allsegs])))

(def update-visibility-hull)

(defn- update-mouse-pos
  [ev state]
  (->> ;;(assoc state :x 500 :y 180)
       (assoc state :x (.-offsetX ev) :y (.-offsetY ev))
       update-visibility-hull
       ))

(defn- update-click-pos
  [ev state]
  (->> (assoc state :x (.-clientX ev) :y (.-clientY ev))
       ;;update-visibility-hull
       ))

(defn- change-algo
  [k ev state]
  (let [algo k]
    (cond
     (= :global algo) (do
                        (dommy/remove-class! (dommy/sel1 "div[name='spot_group']") "visible")
                        (dommy/remove-class! (dommy/sel1 "div[name='pie_group']") "visible"))
     (= :spot algo) (do
                      (dommy/add-class! (dommy/sel1 "div[name='spot_group']") "visible")
                       (dommy/remove-class! (dommy/sel1 "div[name='pie_group']") "visible"))
     (= :pie algo) (do
                     (dommy/add-class! (dommy/sel1 "div[name='spot_group']") "visible")
                     (dommy/add-class! (dommy/sel1 "div[name='pie_group']") "visible"))
     ))
  (-> (assoc state :algo k)
      update-visibility-hull))

(defn- change-radius
  [radius state]
  (-> (assoc state :dist radius)
      update-visibility-hull))

(defn- change-angle
  [angle state]
  (-> (assoc state :alpha (-> angle (- 180) g2d/deg->rad))
      update-visibility-hull))

(defn- change-apperture
  [apperture state]
  (-> (assoc state :apperture (-> apperture g2d/deg->rad))
      update-visibility-hull))

(defn- get-compute-visibility-hull-function
  [{:keys [x y dist algo alpha apperture]}]
  (let [o (g2d/vec2d x y)]
    (cond
     (= :global algo) (partial global/compute-visibility-hull o)
     (= :spot algo) (partial spot/compute-visibility-hull o dist)
     (= :pie algo) (partial pie/compute-visibility-hull alpha apperture o dist )
     )))

(defn- update-visibility-hull
  [{:keys [static x y r-geom dist alpha apperture] :as state}]
  (let [data          static ;; data (build-data static r-geom alpha)
        visibility-fn (get-compute-visibility-hull-function state)
        {:keys [subgeom hull endpoints]} (visibility-fn data)]

    (assoc state
      :segs subgeom
      :eps endpoints
      :hull hull
      :dynamic data
;;      :alpha (+ alpha (/ Math/PI 20))
      )))

(def state (r/atom {:radius    {:id "spot_radius_slider"   :value 50 :min 10 :max 200}
                    :angle     {:id "pie_angle_slider"     :value 10 :min 0  :max 359}
                    :apperture {:id "pie_apperture_slider" :value 30 :min 1  :max 179}
                    :chan      (chan)
                    :debug {:show-ep       true
                            :show-geom     false
                            :show-sub-geom false}}))

(defn comp-fake []
  (fn []
    (let [{{rv :value} :radius {av :value} :angle {pv :value} :apperture c :chan} @state]
      (put! c [rv change-radius])
      (put! c [av change-angle])
      (put! c [pv change-apperture])
      [:span]
      )))

(defn slider-fn [name]
  (fn
    ([]    (name @state))
    ([k v] (swap! state assoc-in [name k] v)))
  )

(defn debug-fn [path]
  (fn
    ([]  (get-in @state path))
    ([v] (swap! state assoc-in path v)))
  )

(defn slider [f]
  (let [slider (r/atom nil)]
    (r/create-class {:component-did-mount
                     (fn [this]
                       (let [opts                    (clj->js {:tooltip_position "bottom"})
                             s                       (js/Slider. (r/dom-node this) opts)
                             {:keys [value min max]} (f)]
                         (doto s
                           (.setValue value)
                           (.setAttribute "min" min)
                           (.setAttribute "max" max))
                         (reset! slider s)
                         (.on s "change" #(f :value (.-newValue %)))))

                     :reagent-render
                     (fn []
                       (let [s                       @slider
                             {:keys [id value min max]} (f)]
                         (when s
                           (doto s
                             (.setValue value)
                             (.setAttribute "min" min)
                             (.setAttribute "max" max)))
                         [:input { :id id}]))})
    ))

(defn- comp-spot-param []
  [:div {:name "spot_group"}
   [:label {:class "keys btn label-primary"} "r | R"]
   [:label {:class "slide btn btn-primary active"}
    [:i {:class "fa fa-long-arrow-left"} ]
    [slider (slider-fn :radius)]]
   [:label {:class "value btn label-primary"} (get-in @state [:radius :value])]
   ]
  )

(defn- comp-pie-param []
  [:div {:name "pie_group"}
   [:div
    [:label {:class "keys btn label-primary"} "a | A"]
    [:label {:class "slide btn btn-primary active"}
     [:i {:class "fa fa-undo"} ]
     [slider (slider-fn :angle)]]
    [:label {:class "value btn label-primary"} (get-in @state [:angle :value]) "°"]
    ]

   [:div
    [:label {:class "keys btn label-primary"} "o | O"]
    [:label {:class "slide btn btn-primary active"}
     [:i {:class "fa fa-circle-o-notch"} ]
     [slider (slider-fn :apperture)]]
    [:label {:class "value btn label-primary"} (get-in @state [:apperture :value]) "°"]
    ]
   ]
  )

(defn- comp-algo []
  [:div.btn-group {:data-toggle "buttons"}
   [:label#algo_global {:class "btn btn-primary active"}
    [:i {:class "fa fa-square"}]
    [:input {:type "radio" :name "global" :checked true}]"Global"
    ]
   [:label#algo_spot {:class "btn btn-primary"}
    [:i {:class "fa fa-circle"}]
    [:input {:type "radio" :name "spot"}]"Spot"
    ]
   [:label#algo_pie {:class "btn btn-primary"}
    [:i {:class "fa fa-pie-chart"}]
    [:input {:type "radio" :name "pie"}]"Pie"
    ]
   ]
  )

(defn- comp-sidebar-control []
  [:div#sidebar {:class "card"}
   [:div.card-block
    [:h2.card-header [:i {:class "fa fa-cogs"}] "Controls"]
    [:h5.card-header "Algorithm"]
    [comp-algo]
    [:h5.card-header "Parameters"]
    [comp-spot-param]
    [comp-pie-param]
    ]
   ]
  )

(defn- comp-debug-check [f]
  (fn []
    (let [v (f)]
      [:label {:class (str "btn btn-primary debug" (if v " active"))
               :on-click (fn []
                           (f (not v)))
               }
       [:input {:type "checkbox"}
        [:i {:class (str  "fa " (if v "fa-check" "fa-times"))}]]]
      )
    )
  )

(defn- comp-sidebar-debug []
  [:div#sidebar {:class "card"}
   [:div.card-block
    [:h2.card-header [:i {:class "fa fa-bug"}] "Debug"]
    [:div.table.debug
     [:div.row.btn-secondary
      [:div.btn-group.cell {:data-toggle "buttons"}
       [comp-debug-check (debug-fn [:debug :show-ep])]
       ]
      [:label.cell  "endpoints"]
      ]

     [:div.row.btn-secondary
      [:div.btn-group.cell {:data-toggle "buttons"}
       [comp-debug-check (debug-fn [:debug :show-sub-geom])]
       ]
      [:label.cell "subgeometry"]
      ]

     [:div.row.btn-secondary
      [:div.btn-group.cell {:data-toggle "buttons"}
       [comp-debug-check (debug-fn [:debug :show-geom])]
       ]
      [:label.cell "geometry"]
      ]
     ]
    ]
   ]
  )

(defn- comp-menu []
  [:nav {:class "navbar navbar-dark bg-inverse"}
   [:span {:class "navbar-brand"} "cljs 2D"]
   ]
  )

(defn- comp-content []
  (r/create-class {:component-did-mount
                   (fn [this]
                     (let [e (r/dom-node this)]
                       (doto e
                         (dommy/set-attr! :tabindex "1000")
                         (dommy/listen! :keydown (fn [ev]
                                                   (let [k (.-keyCode ev)
                                                         shift? (.-shiftKey ev)
                                                         {{min-r :min max-r :max vr :value} :radius {min-a :min max-a :max va :value} :angle {min-p :min max-p :max vp :value} :apperture} @state]
                                                     (cond
                                                      (and (= k 82) shift?) (when (< vr max-r) (swap! state update-in [:radius :value] inc))
                                                      (= k 82)              (when (> vr min-r) (swap! state update-in [:radius :value] dec))
                                                      (and (= k 65) shift?) (when (< va max-a) (swap! state update-in [:angle :value] inc))
                                                      (= k 65)              (when (> va min-a) (swap! state update-in [:angle :value] dec))
                                                      (and (= k 79) shift?) (when (< vp max-p) (swap! state update-in [:apperture :value] inc))
                                                      (= k 79)              (when (> vp min-p) (swap! state update-in [:apperture :value] dec))
                                                      )
                                                     )
                                                   ))
                         (dommy/listen! :mouseover (fn [ev] (.focus e)))
                         )
                       )
                     )
                   :reagent-render
                   (fn []
                     [:div#rendering {:class "card"}
                      [:div {:class "card-block"}
                       [:div.card-text
                        [:canvas#target {:width "640px" :height "360px"}]
                        ]
                       ]
                      ]
                     )
                   }
                  )
  )

(defn- comp-view []
  [:div.container-fluid
   [comp-menu]
   [:div.card-group
    [comp-content]
    [comp-sidebar-control]
    [comp-sidebar-debug]
    ]
   [comp-fake]
   ]
  )

(defn ^:export init
  []
  (let [{chan-out :chan}  @state]
    (r/render [comp-view] (.getElementById js/document "hook"))
    
    (let [target                 (.getElementById js/document "target")
          context                (.getContext target "2d")
          width                  (.-width target)
          height                 (.-height target)
          [drawdata eps allsegs :as data] (core/build-geom-data geom)]

      (listen-dom-evt chan-out target :mousemove update-mouse-pos)
      (listen-dom-evt chan-out (.getElementById js/document "algo_global") :click (partial change-algo :global))
      (listen-dom-evt chan-out (.getElementById js/document "algo_spot") :click (partial change-algo :spot))
      (listen-dom-evt chan-out (.getElementById js/document "algo_pie") :click (partial change-algo :pie))
      ;;(listen-dom-evt chan-out target :click update-click-pos)
      ;;(listen-timer chan-out 50 update-visibility-hull)

      ;; Game loop
      ;;
      (go
       (put! chan-out [:click (partial change-algo :global)])
       (loop [cont true
              state (init-game-state 100)]
         (let [[evt cb] (<! chan-out)
               newstate (cb evt state)]
           (.requestAnimationFrame js/window (partial render-game newstate))
           ;;(.log js/console "x: " (:x newstate) "y: " (:y newstate))
           (recur true newstate)
           ))))))

