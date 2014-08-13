(ns cljs-intro.data)

(defn produce-dev-data
  []
  [{:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}
   {:data [100.0,50.0,540.0,50.0
           ,540.0,160.0,100.0,160.0
           ] :closed false}
   {:data [200.0,190.0,300,350] :closed false}
   ]
)

(defn produce-stress-test-data-set-1
  []
  (into [{:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}]
        (->>
         (for [sx (range 6)
               sy (range 3)]
           (let [x  (+ (* 100 sx) 50)
                 y  (+ (* 100 sy) 30)]
             {:data [(+ x 20)(+ y 20)(+ x 8)(+ y 80)] :closed false})
           )
         (into [])
         ))
  )

(defn produce-stress-test-data-set-2
  []
  (into [{:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}]
        (->>
         (for [sx (range 6)
               sy (range 3)]
           (let [x  (+ (+ (* 100 sx) 50) 30)
                 y  (+ (+ (* 100 sy) 30) 40)
                 a  (* (Math/random) Math/PI)
                 c  (* (Math/cos a) 40)
                 s  (* (Math/sin a) 40)]
             {:data [(+ x c)(+ y s)(- x c)(- y s)] :closed false})
           )
         (into [])
         ))
  )
