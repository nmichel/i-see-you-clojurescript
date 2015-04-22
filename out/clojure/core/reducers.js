// Compiled by ClojureScript 0.0-3126 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 * When init is not provided, (f) is used.
 * Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function() {
var clojure$core$reducers$reduce = null;
var clojure$core$reducers$reduce__2 = (function (f,coll){
return clojure$core$reducers$reduce.call(null,f,f.call(null),coll);
});
var clojure$core$reducers$reduce__3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});
clojure$core$reducers$reduce = function(f,init,coll){
switch(arguments.length){
case 2:
return clojure$core$reducers$reduce__2.call(this,f,init);
case 3:
return clojure$core$reducers$reduce__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$reduce.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$reduce__2;
clojure$core$reducers$reduce.cljs$core$IFn$_invoke$arity$3 = clojure$core$reducers$reduce__3;
return clojure$core$reducers$reduce;
})()
;

clojure.core.reducers.CollFold = (function (){var obj5363 = {};
return obj5363;
})();

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((function (){var and__4110__auto__ = coll;
if(and__4110__auto__){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4;
} else {
return and__4110__auto__;
}
})()){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__4758__auto__ = (((coll == null))?null:coll);
return (function (){var or__4122__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
})().call(null,coll,n,combinef,reducef);
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 * strategy. The collection is partitioned into groups of approximately
 * n (default 512), each of which is reduced with reducef (with a seed
 * value obtained by calling (combinef) with no arguments). The results
 * of these reductions are then reduced with combinef (default
 * reducef). combinef must be associative, and, when called with no
 * arguments, (combinef) must produce its identity element. These
 * operations may be performed in parallel, but the results will
 * preserve order.
 * 
 * Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function() {
var clojure$core$reducers$fold = null;
var clojure$core$reducers$fold__2 = (function (reducef,coll){
return clojure$core$reducers$fold.call(null,reducef,reducef,coll);
});
var clojure$core$reducers$fold__3 = (function (combinef,reducef,coll){
return clojure$core$reducers$fold.call(null,(512),combinef,reducef,coll);
});
var clojure$core$reducers$fold__4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});
clojure$core$reducers$fold = function(n,combinef,reducef,coll){
switch(arguments.length){
case 2:
return clojure$core$reducers$fold__2.call(this,n,combinef);
case 3:
return clojure$core$reducers$fold__3.call(this,n,combinef,reducef);
case 4:
return clojure$core$reducers$fold__4.call(this,n,combinef,reducef,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$fold.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$fold__2;
clojure$core$reducers$fold.cljs$core$IFn$_invoke$arity$3 = clojure$core$reducers$fold__3;
clojure$core$reducers$fold.cljs$core$IFn$_invoke$arity$4 = clojure$core$reducers$fold__4;
return clojure$core$reducers$fold;
})()
;
/**
 * Given a reducible collection, and a transformation function xf,
 * returns a reducible collection, where any supplied reducing
 * fn will be transformed by xf. xf is a function of reducing fn to
 * reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t5367 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t5367 = (function (xf,coll,reducer,meta5368){
this.xf = xf;
this.coll = coll;
this.reducer = reducer;
this.meta5368 = meta5368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 917504;
})
clojure.core.reducers.t5367.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t5367.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t5367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5369){
var self__ = this;
var _5369__$1 = this;
return self__.meta5368;
});

clojure.core.reducers.t5367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5369,meta5368__$1){
var self__ = this;
var _5369__$1 = this;
return (new clojure.core.reducers.t5367(self__.xf,self__.coll,self__.reducer,meta5368__$1));
});

clojure.core.reducers.t5367.cljs$lang$type = true;

clojure.core.reducers.t5367.cljs$lang$ctorStr = "clojure.core.reducers/t5367";

clojure.core.reducers.t5367.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"clojure.core.reducers/t5367");
});

clojure.core.reducers.__GT_t5367 = (function clojure$core$reducers$reducer_$___GT_t5367(xf__$1,coll__$1,reducer__$1,meta5368){
return (new clojure.core.reducers.t5367(xf__$1,coll__$1,reducer__$1,meta5368));
});

}

return (new clojure.core.reducers.t5367(xf,coll,clojure$core$reducers$reducer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 * returns a foldable collection, where any supplied reducing
 * fn will be transformed by xf. xf is a function of reducing fn to
 * reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t5373 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t5373 = (function (xf,coll,folder,meta5374){
this.xf = xf;
this.coll = coll;
this.folder = folder;
this.meta5374 = meta5374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 917504;
})
clojure.core.reducers.t5373.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t5373.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t5373.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t5373.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t5373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5375){
var self__ = this;
var _5375__$1 = this;
return self__.meta5374;
});

clojure.core.reducers.t5373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5375,meta5374__$1){
var self__ = this;
var _5375__$1 = this;
return (new clojure.core.reducers.t5373(self__.xf,self__.coll,self__.folder,meta5374__$1));
});

clojure.core.reducers.t5373.cljs$lang$type = true;

clojure.core.reducers.t5373.cljs$lang$ctorStr = "clojure.core.reducers/t5373";

clojure.core.reducers.t5373.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"clojure.core.reducers/t5373");
});

clojure.core.reducers.__GT_t5373 = (function clojure$core$reducers$folder_$___GT_t5373(xf__$1,coll__$1,folder__$1,meta5374){
return (new clojure.core.reducers.t5373(xf__$1,coll__$1,folder__$1,meta5374));
});

}

return (new clojure.core.reducers.t5373(xf,coll,clojure$core$reducers$folder,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function() {
var clojure$core$reducers$map = null;
var clojure$core$reducers$map__1 = (function (f){
return (function (x__4544__auto__){
return clojure$core$reducers$map.call(null,f,x__4544__auto__);
});
});
var clojure$core$reducers$map__2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__5376 = null;
var G__5376__0 = (function (){
return f1.call(null);
});
var G__5376__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__5376__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__5376 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5376__0.call(this);
case 2:
return G__5376__2.call(this,ret,k);
case 3:
return G__5376__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5376.cljs$core$IFn$_invoke$arity$0 = G__5376__0;
G__5376.cljs$core$IFn$_invoke$arity$2 = G__5376__2;
G__5376.cljs$core$IFn$_invoke$arity$3 = G__5376__3;
return G__5376;
})()
}));
});
clojure$core$reducers$map = function(f,coll){
switch(arguments.length){
case 1:
return clojure$core$reducers$map__1.call(this,f);
case 2:
return clojure$core$reducers$map__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$map.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$map__1;
clojure$core$reducers$map.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$map__2;
return clojure$core$reducers$map;
})()
;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 * colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function() {
var clojure$core$reducers$mapcat = null;
var clojure$core$reducers$mapcat__1 = (function (f){
return (function (x__4544__auto__){
return clojure$core$reducers$mapcat.call(null,f,x__4544__auto__);
});
});
var clojure$core$reducers$mapcat__2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__5377 = null;
var G__5377__0 = (function (){
return f1.call(null);
});
var G__5377__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__5377__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__5377 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5377__0.call(this);
case 2:
return G__5377__2.call(this,ret,k);
case 3:
return G__5377__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5377.cljs$core$IFn$_invoke$arity$0 = G__5377__0;
G__5377.cljs$core$IFn$_invoke$arity$2 = G__5377__2;
G__5377.cljs$core$IFn$_invoke$arity$3 = G__5377__3;
return G__5377;
})()
}));
});
clojure$core$reducers$mapcat = function(f,coll){
switch(arguments.length){
case 1:
return clojure$core$reducers$mapcat__1.call(this,f);
case 2:
return clojure$core$reducers$mapcat__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$mapcat.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$mapcat__1;
clojure$core$reducers$mapcat.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$mapcat__2;
return clojure$core$reducers$mapcat;
})()
;
/**
 * Retains values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function() {
var clojure$core$reducers$filter = null;
var clojure$core$reducers$filter__1 = (function (pred){
return (function (x__4544__auto__){
return clojure$core$reducers$filter.call(null,pred,x__4544__auto__);
});
});
var clojure$core$reducers$filter__2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__5378 = null;
var G__5378__0 = (function (){
return f1.call(null);
});
var G__5378__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__5378__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__5378 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5378__0.call(this);
case 2:
return G__5378__2.call(this,ret,k);
case 3:
return G__5378__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5378.cljs$core$IFn$_invoke$arity$0 = G__5378__0;
G__5378.cljs$core$IFn$_invoke$arity$2 = G__5378__2;
G__5378.cljs$core$IFn$_invoke$arity$3 = G__5378__3;
return G__5378;
})()
}));
});
clojure$core$reducers$filter = function(pred,coll){
switch(arguments.length){
case 1:
return clojure$core$reducers$filter__1.call(this,pred);
case 2:
return clojure$core$reducers$filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$filter.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$filter__1;
clojure$core$reducers$filter.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$filter__2;
return clojure$core$reducers$filter;
})()
;
/**
 * Takes any nested combination of sequential things (lists, vectors,
 * etc.) and returns their contents as a single, flat foldable
 * collection.
 */
clojure.core.reducers.flatten = (function() {
var clojure$core$reducers$flatten = null;
var clojure$core$reducers$flatten__0 = (function (){
return (function (x__4544__auto__){
return clojure$core$reducers$flatten.call(null,x__4544__auto__);
});
});
var clojure$core$reducers$flatten__1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__5379 = null;
var G__5379__0 = (function (){
return f1.call(null);
});
var G__5379__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure$core$reducers$flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__5379 = function(ret,v){
switch(arguments.length){
case 0:
return G__5379__0.call(this);
case 2:
return G__5379__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5379.cljs$core$IFn$_invoke$arity$0 = G__5379__0;
G__5379.cljs$core$IFn$_invoke$arity$2 = G__5379__2;
return G__5379;
})()
}));
});
clojure$core$reducers$flatten = function(coll){
switch(arguments.length){
case 0:
return clojure$core$reducers$flatten__0.call(this);
case 1:
return clojure$core$reducers$flatten__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$flatten.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$flatten__0;
clojure$core$reducers$flatten.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$flatten__1;
return clojure$core$reducers$flatten;
})()
;
/**
 * Removes values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function() {
var clojure$core$reducers$remove = null;
var clojure$core$reducers$remove__1 = (function (pred){
return (function (x__4544__auto__){
return clojure$core$reducers$remove.call(null,pred,x__4544__auto__);
});
});
var clojure$core$reducers$remove__2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
clojure$core$reducers$remove = function(pred,coll){
switch(arguments.length){
case 1:
return clojure$core$reducers$remove__1.call(this,pred);
case 2:
return clojure$core$reducers$remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$remove.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$remove__1;
clojure$core$reducers$remove.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$remove__2;
return clojure$core$reducers$remove;
})()
;
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function() {
var clojure$core$reducers$take_while = null;
var clojure$core$reducers$take_while__1 = (function (pred){
return (function (x__4544__auto__){
return clojure$core$reducers$take_while.call(null,pred,x__4544__auto__);
});
});
var clojure$core$reducers$take_while__2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__5380 = null;
var G__5380__0 = (function (){
return f1.call(null);
});
var G__5380__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__5380__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__5380 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5380__0.call(this);
case 2:
return G__5380__2.call(this,ret,k);
case 3:
return G__5380__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5380.cljs$core$IFn$_invoke$arity$0 = G__5380__0;
G__5380.cljs$core$IFn$_invoke$arity$2 = G__5380__2;
G__5380.cljs$core$IFn$_invoke$arity$3 = G__5380__3;
return G__5380;
})()
}));
});
clojure$core$reducers$take_while = function(pred,coll){
switch(arguments.length){
case 1:
return clojure$core$reducers$take_while__1.call(this,pred);
case 2:
return clojure$core$reducers$take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$take_while.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$take_while__1;
clojure$core$reducers$take_while.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$take_while__2;
return clojure$core$reducers$take_while;
})()
;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function() {
var clojure$core$reducers$take = null;
var clojure$core$reducers$take__1 = (function (n){
return (function (x__4544__auto__){
return clojure$core$reducers$take.call(null,n,x__4544__auto__);
});
});
var clojure$core$reducers$take__2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__5381 = null;
var G__5381__0 = (function (){
return f1.call(null);
});
var G__5381__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__5381__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__5381 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5381__0.call(this);
case 2:
return G__5381__2.call(this,ret,k);
case 3:
return G__5381__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5381.cljs$core$IFn$_invoke$arity$0 = G__5381__0;
G__5381.cljs$core$IFn$_invoke$arity$2 = G__5381__2;
G__5381.cljs$core$IFn$_invoke$arity$3 = G__5381__3;
return G__5381;
})()
;})(cnt))
}));
});
clojure$core$reducers$take = function(n,coll){
switch(arguments.length){
case 1:
return clojure$core$reducers$take__1.call(this,n);
case 2:
return clojure$core$reducers$take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$take.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$take__1;
clojure$core$reducers$take.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$take__2;
return clojure$core$reducers$take;
})()
;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function() {
var clojure$core$reducers$drop = null;
var clojure$core$reducers$drop__1 = (function (n){
return (function (x__4544__auto__){
return clojure$core$reducers$drop.call(null,n,x__4544__auto__);
});
});
var clojure$core$reducers$drop__2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__5382 = null;
var G__5382__0 = (function (){
return f1.call(null);
});
var G__5382__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__5382__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__5382 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__5382__0.call(this);
case 2:
return G__5382__2.call(this,ret,k);
case 3:
return G__5382__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5382.cljs$core$IFn$_invoke$arity$0 = G__5382__0;
G__5382.cljs$core$IFn$_invoke$arity$2 = G__5382__2;
G__5382.cljs$core$IFn$_invoke$arity$3 = G__5382__3;
return G__5382;
})()
;})(cnt))
}));
});
clojure$core$reducers$drop = function(n,coll){
switch(arguments.length){
case 1:
return clojure$core$reducers$drop__1.call(this,n);
case 2:
return clojure$core$reducers$drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$drop.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$drop__1;
clojure$core$reducers$drop.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$drop__2;
return clojure$core$reducers$drop;
})()
;

/**
* @constructor
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
})
clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 * reduced values. The result is reducible, foldable, seqable and
 * counted, providing the identity collections are reducible, seqable
 * and counted. The single argument version will build a combining fn
 * with the supplied identity constructor. Tests for identity
 * with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function() {
var clojure$core$reducers$cat = null;
var clojure$core$reducers$cat__0 = (function (){
return [];
});
var clojure$core$reducers$cat__1 = (function (ctor){
return (function() {
var G__5383 = null;
var G__5383__0 = (function (){
return ctor.call(null);
});
var G__5383__2 = (function (left,right){
return clojure$core$reducers$cat.call(null,left,right);
});
G__5383 = function(left,right){
switch(arguments.length){
case 0:
return G__5383__0.call(this);
case 2:
return G__5383__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5383.cljs$core$IFn$_invoke$arity$0 = G__5383__0;
G__5383.cljs$core$IFn$_invoke$arity$2 = G__5383__2;
return G__5383;
})()
});
var clojure$core$reducers$cat__2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});
clojure$core$reducers$cat = function(left,right){
switch(arguments.length){
case 0:
return clojure$core$reducers$cat__0.call(this);
case 1:
return clojure$core$reducers$cat__1.call(this,left);
case 2:
return clojure$core$reducers$cat__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$cat.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$cat__0;
clojure$core$reducers$cat.cljs$core$IFn$_invoke$arity$1 = clojure$core$reducers$cat__1;
clojure$core$reducers$cat.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$cat__2;
return clojure$core$reducers$cat;
})()
;
/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__5385 = acc;
G__5385.push(x);

return G__5385;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 * constructor. op must be associative and ctor called with no args
 * must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure$core$reducers$foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

//# sourceMappingURL=reducers.js.map