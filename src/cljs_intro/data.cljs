(ns cljs-intro.data)

(defn- add-frame
  [data]
  (into []
        (concat [{:data [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0] :closed true}]
                data))
  )

(defn produce-dev-data
  []
  (add-frame
   [{:data [100.0,50.0,540.0,50.0,540.0,160.0,100.0,160.0] :closed false}
    {:data [200.0,190.0,300,350] :closed false}])
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
  []
  (add-frame
   (for [sx (range 6)
         sy (range 3)]
     (let [x (+ (* sx 100) 40)
           y (+ (* sy 100) 50)
           c 50]
       {:data [x y (+ x c) y (+ x c) (+ y c) x (+ y c)] :closed (even? (+ sx sy))}
       )
     )
   )
  )

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

