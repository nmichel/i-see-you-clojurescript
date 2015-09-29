(ns cljs-intro.data)

(defn- add-frame
  [data]
  (into []
        (concat [{:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}]
                data))
  )

(defn produce-empty-frame
  []
  (add-frame
   []))

(defn produce-dev-data-1
  []
  (add-frame
   [{:data [100.0,50.0,540.0,50.0,540.0,160.0,100.0,160.0] :closed false}
    {:data [200.0,190.0,300,350] :closed false}
    ])
  )

(defn produce-dev-data-2
  []
  (add-frame
   [{:data [100.0,80.0,150.0,50.0,150.0,160.0] :closed false}
    {:data [150.0,190.0,150.0,250.0,200.0,220.0] :closed false}
    ])
  )

(defn produce-dev-data-3
  []
  (add-frame
   [{:data [50.0,20.0,50.0,200.0] :closed false}
    ])
  )

(defn produce-dev-data-4
  []
  (add-frame
   [{:data [20,20, 220,20, 220,220, 20,220] :closed true}
    ])
  )

(defn produce-dev-data-5
  []
  (add-frame
   [{:data [120,120, 320,120, 320,320, 120,320] :closed true}
    ])
  )

(defn produce-parallel-diagonal-segments-soup
  []
  (add-frame
   (for [sx (range 6)
         sy (range 3)]
     (let [x  (+ (* 100 sx) 20)
           y  (+ (* 100 sy) 30)]
       {:data [(+ x 20)(+ y 20)(+ x 80)(+ y 80)] :closed false})))
  )

(defn produce-parallel-vertical-segments-soup
  []
  (add-frame
   (for [sx (range 6)
         sy (range 3)]
     (let [x  (+ (+ (* 100 sx) 50) 20)
           y  (+ (+ (* 100 sy) 30) 50)]
       {:data [x (+ y 30) x (- y 30)] :closed false})))
  )

(defn produce-parallel-horizontal-segments-soup
  []
  (add-frame
   (for [sx (range 6)
         sy (range 3)]
     (let [x  (+ (+ (* 100 sx) 50) 20)
           y  (+ (+ (* 100 sy) 30) 50)]
       {:data [(+ x 30) y (- x 30) y] :closed false})
     ))
  )

(defn produce-oriented-segments-soup
  []
  (add-frame
   (for [sx (range 6)
         sy (range 3)]
     (let [x  (+ (+ (* 100 sx) 50) 30)
           y  (+ (+ (* 100 sy) 30) 40)
           a  (* (Math/random) (* 2 Math/PI))
           c  (* (Math/cos a) 40)
           s  (* (Math/sin a) 40)]
       {:data [(+ x c)(+ y s)(- x c)(- y s)] :closed false})))
  )

(defn produce-square-soup
  ([]
     (produce-square-soup 6 3 50 40 50))

  ([rx ry hc ox oy]
     (let [c (* hc 2)]
       (add-frame
        (for [sx (range rx)
              sy (range ry)]
          (let [x (+ (* sx c) ox)
                y (+ (* sy c) oy)]
            {:data [x y (+ x hc) y (+ x hc) (+ y hc) x (+ y hc)] :closed (even? (+ sx sy))}
            )
          )
        )
       )
     ))

(defn- produce-space-partition-soup
  ([x y w h]
     (produce-space-partition-soup x y w h 0.1 3))

  ([x y w h p d]
     (if (and (> d 0) (> (Math/random) p))
       (let [o   (* 4 d)
             hw  (/ w 2)
             hh  (/ h 2)
             ihw (/ (- w (* 2 o)) 2)
             ihh (/ (- h (* 2 o)) 2)]
         (into []
               (concat
                (produce-space-partition-soup (+ x o)    (+ y o)    ihw ihh (* p 2) (- d 1))
                (produce-space-partition-soup (+ x hw o) (+ y o)    ihw ihh (* p 2) (- d 1))
                (produce-space-partition-soup (+ x hw o) (+ y hh o) ihw ihh (* p 2) (- d 1))
                (produce-space-partition-soup (+ x o)    (+ y hh o) ihw ihh (* p 2) (- d 1))
                )))

       (if (> (Math/random) p)
         (let [data [x y (+ x w) y (+ x w) (+ y h) x (+ y h)]
               closed (> (Math/random) 0.5)]
           [{:data (into [] (take 8 (drop (* (int (* 4 (Math/random))) 2) (cycle data)))) :closed closed}])
         [])
       )
     )
  )

(defn produce-block-soup
  []
  (add-frame
   (produce-space-partition-soup 10 10 620 320)))


(defn produce-polygon
  [x y r c offset closed]
  [{:data   (vec (mapcat (fn [a] [(-> (Math/cos (+ a offset)) (* r) (+ x))
                                  (-> (Math/sin (+ a offset)) (* r) (+ y))]) (range 0 (* 2 Math/PI) (/ ( * Math/PI 2) c))))
    :closed closed}]
  )

(defn produce-nested-polygons
  [x y r c]
  (mapcat (fn [rr] (produce-polygon x y rr (+ 5 (* (Math/random) 5)) (* (Math/random) Math/PI) false)) (->> (range 0 r (/ r c)) (drop 1)))
  )

(defn produce-spiral
  [x y r offset]
  (let [twopi (* 2 Math/PI)
        spir  (* 6 twopi)
        segs  200
        step  (/ spir segs)
        dr    (/ r segs)
        coefd 0.25
        coeft 1]

    (map (fn [rng]
           (let [l       (count rng)                     ;; indices range length
                 d       (* (Math/random) coefd l)       ;; how many indices dropped
                 t       (* (Math/random) coeft (- l d)) ;; how many indices taken
                 roffset (+ (* Math/PI (Math/random)))   ;; Shifting offset
                 ]
             {:data (mapcat (fn [i] [(-> (Math/cos (+ (* i step) roffset)) (* dr i) (+ x))
                                     (-> (Math/sin (+ (* i step) roffset)) (* dr i) (+ y))]) (->> rng (drop d) (take t)))
              :close false}
             ))
         (partition 10 (range 0 segs)))

    )
  )
