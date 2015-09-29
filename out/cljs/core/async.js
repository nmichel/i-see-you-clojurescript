// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24627 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24627 = (function (f,fn_handler,meta24628){
this.f = f;
this.fn_handler = fn_handler;
this.meta24628 = meta24628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24627.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24629){
var self__ = this;
var _24629__$1 = this;
return self__.meta24628;
});

cljs.core.async.t24627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24629,meta24628__$1){
var self__ = this;
var _24629__$1 = this;
return (new cljs.core.async.t24627(self__.f,self__.fn_handler,meta24628__$1));
});

cljs.core.async.t24627.cljs$lang$type = true;

cljs.core.async.t24627.cljs$lang$ctorStr = "cljs.core.async/t24627";

cljs.core.async.t24627.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t24627");
});

cljs.core.async.__GT_t24627 = (function cljs$core$async$fn_handler_$___GT_t24627(f__$1,fn_handler__$1,meta24628){
return (new cljs.core.async.t24627(f__$1,fn_handler__$1,meta24628));
});

}

return (new cljs.core.async.t24627(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24631 = buff;
if(G__24631){
var bit__16817__auto__ = null;
if(cljs.core.truth_((function (){var or__16143__auto__ = bit__16817__auto__;
if(cljs.core.truth_(or__16143__auto__)){
return or__16143__auto__;
} else {
return G__24631.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24631.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24631);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24631);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__24633 = arguments.length;
switch (G__24633) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__24636 = arguments.length;
switch (G__24636) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24638 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24638);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24638,ret){
return (function (){
return fn1.call(null,val_24638);
});})(val_24638,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__24640 = arguments.length;
switch (G__24640) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17028__auto___24642 = n;
var x_24643 = (0);
while(true){
if((x_24643 < n__17028__auto___24642)){
(a[x_24643] = (0));

var G__24644 = (x_24643 + (1));
x_24643 = G__24644;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24645 = (i + (1));
i = G__24645;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24649 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24649 = (function (flag,alt_flag,meta24650){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24650 = meta24650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24651){
var self__ = this;
var _24651__$1 = this;
return self__.meta24650;
});})(flag))
;

cljs.core.async.t24649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24651,meta24650__$1){
var self__ = this;
var _24651__$1 = this;
return (new cljs.core.async.t24649(self__.flag,self__.alt_flag,meta24650__$1));
});})(flag))
;

cljs.core.async.t24649.cljs$lang$type = true;

cljs.core.async.t24649.cljs$lang$ctorStr = "cljs.core.async/t24649";

cljs.core.async.t24649.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t24649");
});})(flag))
;

cljs.core.async.__GT_t24649 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24649(flag__$1,alt_flag__$1,meta24650){
return (new cljs.core.async.t24649(flag__$1,alt_flag__$1,meta24650));
});})(flag))
;

}

return (new cljs.core.async.t24649(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24655 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24655 = (function (cb,flag,alt_handler,meta24656){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24656 = meta24656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24657){
var self__ = this;
var _24657__$1 = this;
return self__.meta24656;
});

cljs.core.async.t24655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24657,meta24656__$1){
var self__ = this;
var _24657__$1 = this;
return (new cljs.core.async.t24655(self__.cb,self__.flag,self__.alt_handler,meta24656__$1));
});

cljs.core.async.t24655.cljs$lang$type = true;

cljs.core.async.t24655.cljs$lang$ctorStr = "cljs.core.async/t24655";

cljs.core.async.t24655.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t24655");
});

cljs.core.async.__GT_t24655 = (function cljs$core$async$alt_handler_$___GT_t24655(cb__$1,flag__$1,alt_handler__$1,meta24656){
return (new cljs.core.async.t24655(cb__$1,flag__$1,alt_handler__$1,meta24656));
});

}

return (new cljs.core.async.t24655(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24658_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24658_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24659_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24659_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16143__auto__ = wport;
if(cljs.core.truth_(or__16143__auto__)){
return or__16143__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24660 = (i + (1));
i = G__24660;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16143__auto__ = ret;
if(cljs.core.truth_(or__16143__auto__)){
return or__16143__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16131__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16131__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16131__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17183__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17183__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24663){
var map__24664 = p__24663;
var map__24664__$1 = ((cljs.core.seq_QMARK_.call(null,map__24664))?cljs.core.apply.call(null,cljs.core.hash_map,map__24664):map__24664);
var opts = map__24664__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24661){
var G__24662 = cljs.core.first.call(null,seq24661);
var seq24661__$1 = cljs.core.next.call(null,seq24661);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24662,seq24661__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__24666 = arguments.length;
switch (G__24666) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19146__auto___24715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___24715){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___24715){
return (function (state_24690){
var state_val_24691 = (state_24690[(1)]);
if((state_val_24691 === (7))){
var inst_24686 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24692_24716 = state_24690__$1;
(statearr_24692_24716[(2)] = inst_24686);

(statearr_24692_24716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (1))){
var state_24690__$1 = state_24690;
var statearr_24693_24717 = state_24690__$1;
(statearr_24693_24717[(2)] = null);

(statearr_24693_24717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (4))){
var inst_24669 = (state_24690[(7)]);
var inst_24669__$1 = (state_24690[(2)]);
var inst_24670 = (inst_24669__$1 == null);
var state_24690__$1 = (function (){var statearr_24694 = state_24690;
(statearr_24694[(7)] = inst_24669__$1);

return statearr_24694;
})();
if(cljs.core.truth_(inst_24670)){
var statearr_24695_24718 = state_24690__$1;
(statearr_24695_24718[(1)] = (5));

} else {
var statearr_24696_24719 = state_24690__$1;
(statearr_24696_24719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (13))){
var state_24690__$1 = state_24690;
var statearr_24697_24720 = state_24690__$1;
(statearr_24697_24720[(2)] = null);

(statearr_24697_24720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (6))){
var inst_24669 = (state_24690[(7)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24690__$1,(11),to,inst_24669);
} else {
if((state_val_24691 === (3))){
var inst_24688 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24690__$1,inst_24688);
} else {
if((state_val_24691 === (12))){
var state_24690__$1 = state_24690;
var statearr_24698_24721 = state_24690__$1;
(statearr_24698_24721[(2)] = null);

(statearr_24698_24721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (2))){
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24690__$1,(4),from);
} else {
if((state_val_24691 === (11))){
var inst_24679 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
if(cljs.core.truth_(inst_24679)){
var statearr_24699_24722 = state_24690__$1;
(statearr_24699_24722[(1)] = (12));

} else {
var statearr_24700_24723 = state_24690__$1;
(statearr_24700_24723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (9))){
var state_24690__$1 = state_24690;
var statearr_24701_24724 = state_24690__$1;
(statearr_24701_24724[(2)] = null);

(statearr_24701_24724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (5))){
var state_24690__$1 = state_24690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24702_24725 = state_24690__$1;
(statearr_24702_24725[(1)] = (8));

} else {
var statearr_24703_24726 = state_24690__$1;
(statearr_24703_24726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (14))){
var inst_24684 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24704_24727 = state_24690__$1;
(statearr_24704_24727[(2)] = inst_24684);

(statearr_24704_24727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (10))){
var inst_24676 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24705_24728 = state_24690__$1;
(statearr_24705_24728[(2)] = inst_24676);

(statearr_24705_24728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (8))){
var inst_24673 = cljs.core.async.close_BANG_.call(null,to);
var state_24690__$1 = state_24690;
var statearr_24706_24729 = state_24690__$1;
(statearr_24706_24729[(2)] = inst_24673);

(statearr_24706_24729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___24715))
;
return ((function (switch__19084__auto__,c__19146__auto___24715){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_24710 = [null,null,null,null,null,null,null,null];
(statearr_24710[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_24710[(1)] = (1));

return statearr_24710;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_24690){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_24690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e24711){if((e24711 instanceof Object)){
var ex__19088__auto__ = e24711;
var statearr_24712_24730 = state_24690;
(statearr_24712_24730[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24731 = state_24690;
state_24690 = G__24731;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_24690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_24690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___24715))
})();
var state__19148__auto__ = (function (){var statearr_24713 = f__19147__auto__.call(null);
(statearr_24713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___24715);

return statearr_24713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___24715))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24915){
var vec__24916 = p__24915;
var v = cljs.core.nth.call(null,vec__24916,(0),null);
var p = cljs.core.nth.call(null,vec__24916,(1),null);
var job = vec__24916;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19146__auto___25098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___25098,res,vec__24916,v,p,job,jobs,results){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___25098,res,vec__24916,v,p,job,jobs,results){
return (function (state_24921){
var state_val_24922 = (state_24921[(1)]);
if((state_val_24922 === (2))){
var inst_24918 = (state_24921[(2)]);
var inst_24919 = cljs.core.async.close_BANG_.call(null,res);
var state_24921__$1 = (function (){var statearr_24923 = state_24921;
(statearr_24923[(7)] = inst_24918);

return statearr_24923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24921__$1,inst_24919);
} else {
if((state_val_24922 === (1))){
var state_24921__$1 = state_24921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24921__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19146__auto___25098,res,vec__24916,v,p,job,jobs,results))
;
return ((function (switch__19084__auto__,c__19146__auto___25098,res,vec__24916,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0 = (function (){
var statearr_24927 = [null,null,null,null,null,null,null,null];
(statearr_24927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__);

(statearr_24927[(1)] = (1));

return statearr_24927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1 = (function (state_24921){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_24921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e24928){if((e24928 instanceof Object)){
var ex__19088__auto__ = e24928;
var statearr_24929_25099 = state_24921;
(statearr_24929_25099[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25100 = state_24921;
state_24921 = G__25100;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = function(state_24921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1.call(this,state_24921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___25098,res,vec__24916,v,p,job,jobs,results))
})();
var state__19148__auto__ = (function (){var statearr_24930 = f__19147__auto__.call(null);
(statearr_24930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___25098);

return statearr_24930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___25098,res,vec__24916,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24931){
var vec__24932 = p__24931;
var v = cljs.core.nth.call(null,vec__24932,(0),null);
var p = cljs.core.nth.call(null,vec__24932,(1),null);
var job = vec__24932;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17028__auto___25101 = n;
var __25102 = (0);
while(true){
if((__25102 < n__17028__auto___25101)){
var G__24933_25103 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24933_25103) {
case "async":
var c__19146__auto___25105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25102,c__19146__auto___25105,G__24933_25103,n__17028__auto___25101,jobs,results,process,async){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (__25102,c__19146__auto___25105,G__24933_25103,n__17028__auto___25101,jobs,results,process,async){
return (function (state_24946){
var state_val_24947 = (state_24946[(1)]);
if((state_val_24947 === (7))){
var inst_24942 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24948_25106 = state_24946__$1;
(statearr_24948_25106[(2)] = inst_24942);

(statearr_24948_25106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (6))){
var state_24946__$1 = state_24946;
var statearr_24949_25107 = state_24946__$1;
(statearr_24949_25107[(2)] = null);

(statearr_24949_25107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (5))){
var state_24946__$1 = state_24946;
var statearr_24950_25108 = state_24946__$1;
(statearr_24950_25108[(2)] = null);

(statearr_24950_25108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (4))){
var inst_24936 = (state_24946[(2)]);
var inst_24937 = async.call(null,inst_24936);
var state_24946__$1 = state_24946;
if(cljs.core.truth_(inst_24937)){
var statearr_24951_25109 = state_24946__$1;
(statearr_24951_25109[(1)] = (5));

} else {
var statearr_24952_25110 = state_24946__$1;
(statearr_24952_25110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (3))){
var inst_24944 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24946__$1,inst_24944);
} else {
if((state_val_24947 === (2))){
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24946__$1,(4),jobs);
} else {
if((state_val_24947 === (1))){
var state_24946__$1 = state_24946;
var statearr_24953_25111 = state_24946__$1;
(statearr_24953_25111[(2)] = null);

(statearr_24953_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25102,c__19146__auto___25105,G__24933_25103,n__17028__auto___25101,jobs,results,process,async))
;
return ((function (__25102,switch__19084__auto__,c__19146__auto___25105,G__24933_25103,n__17028__auto___25101,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0 = (function (){
var statearr_24957 = [null,null,null,null,null,null,null];
(statearr_24957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__);

(statearr_24957[(1)] = (1));

return statearr_24957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1 = (function (state_24946){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_24946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e24958){if((e24958 instanceof Object)){
var ex__19088__auto__ = e24958;
var statearr_24959_25112 = state_24946;
(statearr_24959_25112[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25113 = state_24946;
state_24946 = G__25113;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = function(state_24946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1.call(this,state_24946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__;
})()
;})(__25102,switch__19084__auto__,c__19146__auto___25105,G__24933_25103,n__17028__auto___25101,jobs,results,process,async))
})();
var state__19148__auto__ = (function (){var statearr_24960 = f__19147__auto__.call(null);
(statearr_24960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___25105);

return statearr_24960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(__25102,c__19146__auto___25105,G__24933_25103,n__17028__auto___25101,jobs,results,process,async))
);


break;
case "compute":
var c__19146__auto___25114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25102,c__19146__auto___25114,G__24933_25103,n__17028__auto___25101,jobs,results,process,async){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (__25102,c__19146__auto___25114,G__24933_25103,n__17028__auto___25101,jobs,results,process,async){
return (function (state_24973){
var state_val_24974 = (state_24973[(1)]);
if((state_val_24974 === (7))){
var inst_24969 = (state_24973[(2)]);
var state_24973__$1 = state_24973;
var statearr_24975_25115 = state_24973__$1;
(statearr_24975_25115[(2)] = inst_24969);

(statearr_24975_25115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (6))){
var state_24973__$1 = state_24973;
var statearr_24976_25116 = state_24973__$1;
(statearr_24976_25116[(2)] = null);

(statearr_24976_25116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (5))){
var state_24973__$1 = state_24973;
var statearr_24977_25117 = state_24973__$1;
(statearr_24977_25117[(2)] = null);

(statearr_24977_25117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (4))){
var inst_24963 = (state_24973[(2)]);
var inst_24964 = process.call(null,inst_24963);
var state_24973__$1 = state_24973;
if(cljs.core.truth_(inst_24964)){
var statearr_24978_25118 = state_24973__$1;
(statearr_24978_25118[(1)] = (5));

} else {
var statearr_24979_25119 = state_24973__$1;
(statearr_24979_25119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24974 === (3))){
var inst_24971 = (state_24973[(2)]);
var state_24973__$1 = state_24973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24973__$1,inst_24971);
} else {
if((state_val_24974 === (2))){
var state_24973__$1 = state_24973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24973__$1,(4),jobs);
} else {
if((state_val_24974 === (1))){
var state_24973__$1 = state_24973;
var statearr_24980_25120 = state_24973__$1;
(statearr_24980_25120[(2)] = null);

(statearr_24980_25120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25102,c__19146__auto___25114,G__24933_25103,n__17028__auto___25101,jobs,results,process,async))
;
return ((function (__25102,switch__19084__auto__,c__19146__auto___25114,G__24933_25103,n__17028__auto___25101,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0 = (function (){
var statearr_24984 = [null,null,null,null,null,null,null];
(statearr_24984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__);

(statearr_24984[(1)] = (1));

return statearr_24984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1 = (function (state_24973){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_24973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e24985){if((e24985 instanceof Object)){
var ex__19088__auto__ = e24985;
var statearr_24986_25121 = state_24973;
(statearr_24986_25121[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25122 = state_24973;
state_24973 = G__25122;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = function(state_24973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1.call(this,state_24973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__;
})()
;})(__25102,switch__19084__auto__,c__19146__auto___25114,G__24933_25103,n__17028__auto___25101,jobs,results,process,async))
})();
var state__19148__auto__ = (function (){var statearr_24987 = f__19147__auto__.call(null);
(statearr_24987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___25114);

return statearr_24987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(__25102,c__19146__auto___25114,G__24933_25103,n__17028__auto___25101,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25123 = (__25102 + (1));
__25102 = G__25123;
continue;
} else {
}
break;
}

var c__19146__auto___25124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___25124,jobs,results,process,async){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___25124,jobs,results,process,async){
return (function (state_25009){
var state_val_25010 = (state_25009[(1)]);
if((state_val_25010 === (9))){
var inst_25002 = (state_25009[(2)]);
var state_25009__$1 = (function (){var statearr_25011 = state_25009;
(statearr_25011[(7)] = inst_25002);

return statearr_25011;
})();
var statearr_25012_25125 = state_25009__$1;
(statearr_25012_25125[(2)] = null);

(statearr_25012_25125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25010 === (8))){
var inst_24995 = (state_25009[(8)]);
var inst_25000 = (state_25009[(2)]);
var state_25009__$1 = (function (){var statearr_25013 = state_25009;
(statearr_25013[(9)] = inst_25000);

return statearr_25013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25009__$1,(9),results,inst_24995);
} else {
if((state_val_25010 === (7))){
var inst_25005 = (state_25009[(2)]);
var state_25009__$1 = state_25009;
var statearr_25014_25126 = state_25009__$1;
(statearr_25014_25126[(2)] = inst_25005);

(statearr_25014_25126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25010 === (6))){
var inst_24995 = (state_25009[(8)]);
var inst_24990 = (state_25009[(10)]);
var inst_24995__$1 = cljs.core.async.chan.call(null,(1));
var inst_24996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24997 = [inst_24990,inst_24995__$1];
var inst_24998 = (new cljs.core.PersistentVector(null,2,(5),inst_24996,inst_24997,null));
var state_25009__$1 = (function (){var statearr_25015 = state_25009;
(statearr_25015[(8)] = inst_24995__$1);

return statearr_25015;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25009__$1,(8),jobs,inst_24998);
} else {
if((state_val_25010 === (5))){
var inst_24993 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25009__$1 = state_25009;
var statearr_25016_25127 = state_25009__$1;
(statearr_25016_25127[(2)] = inst_24993);

(statearr_25016_25127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25010 === (4))){
var inst_24990 = (state_25009[(10)]);
var inst_24990__$1 = (state_25009[(2)]);
var inst_24991 = (inst_24990__$1 == null);
var state_25009__$1 = (function (){var statearr_25017 = state_25009;
(statearr_25017[(10)] = inst_24990__$1);

return statearr_25017;
})();
if(cljs.core.truth_(inst_24991)){
var statearr_25018_25128 = state_25009__$1;
(statearr_25018_25128[(1)] = (5));

} else {
var statearr_25019_25129 = state_25009__$1;
(statearr_25019_25129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25010 === (3))){
var inst_25007 = (state_25009[(2)]);
var state_25009__$1 = state_25009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25009__$1,inst_25007);
} else {
if((state_val_25010 === (2))){
var state_25009__$1 = state_25009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25009__$1,(4),from);
} else {
if((state_val_25010 === (1))){
var state_25009__$1 = state_25009;
var statearr_25020_25130 = state_25009__$1;
(statearr_25020_25130[(2)] = null);

(statearr_25020_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___25124,jobs,results,process,async))
;
return ((function (switch__19084__auto__,c__19146__auto___25124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0 = (function (){
var statearr_25024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__);

(statearr_25024[(1)] = (1));

return statearr_25024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1 = (function (state_25009){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_25009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e25025){if((e25025 instanceof Object)){
var ex__19088__auto__ = e25025;
var statearr_25026_25131 = state_25009;
(statearr_25026_25131[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25132 = state_25009;
state_25009 = G__25132;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = function(state_25009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1.call(this,state_25009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___25124,jobs,results,process,async))
})();
var state__19148__auto__ = (function (){var statearr_25027 = f__19147__auto__.call(null);
(statearr_25027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___25124);

return statearr_25027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___25124,jobs,results,process,async))
);


var c__19146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto__,jobs,results,process,async){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto__,jobs,results,process,async){
return (function (state_25065){
var state_val_25066 = (state_25065[(1)]);
if((state_val_25066 === (7))){
var inst_25061 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25067_25133 = state_25065__$1;
(statearr_25067_25133[(2)] = inst_25061);

(statearr_25067_25133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (20))){
var state_25065__$1 = state_25065;
var statearr_25068_25134 = state_25065__$1;
(statearr_25068_25134[(2)] = null);

(statearr_25068_25134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (1))){
var state_25065__$1 = state_25065;
var statearr_25069_25135 = state_25065__$1;
(statearr_25069_25135[(2)] = null);

(statearr_25069_25135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (4))){
var inst_25030 = (state_25065[(7)]);
var inst_25030__$1 = (state_25065[(2)]);
var inst_25031 = (inst_25030__$1 == null);
var state_25065__$1 = (function (){var statearr_25070 = state_25065;
(statearr_25070[(7)] = inst_25030__$1);

return statearr_25070;
})();
if(cljs.core.truth_(inst_25031)){
var statearr_25071_25136 = state_25065__$1;
(statearr_25071_25136[(1)] = (5));

} else {
var statearr_25072_25137 = state_25065__$1;
(statearr_25072_25137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (15))){
var inst_25043 = (state_25065[(8)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25065__$1,(18),to,inst_25043);
} else {
if((state_val_25066 === (21))){
var inst_25056 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25073_25138 = state_25065__$1;
(statearr_25073_25138[(2)] = inst_25056);

(statearr_25073_25138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (13))){
var inst_25058 = (state_25065[(2)]);
var state_25065__$1 = (function (){var statearr_25074 = state_25065;
(statearr_25074[(9)] = inst_25058);

return statearr_25074;
})();
var statearr_25075_25139 = state_25065__$1;
(statearr_25075_25139[(2)] = null);

(statearr_25075_25139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (6))){
var inst_25030 = (state_25065[(7)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25065__$1,(11),inst_25030);
} else {
if((state_val_25066 === (17))){
var inst_25051 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_25051)){
var statearr_25076_25140 = state_25065__$1;
(statearr_25076_25140[(1)] = (19));

} else {
var statearr_25077_25141 = state_25065__$1;
(statearr_25077_25141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (3))){
var inst_25063 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25065__$1,inst_25063);
} else {
if((state_val_25066 === (12))){
var inst_25040 = (state_25065[(10)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25065__$1,(14),inst_25040);
} else {
if((state_val_25066 === (2))){
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25065__$1,(4),results);
} else {
if((state_val_25066 === (19))){
var state_25065__$1 = state_25065;
var statearr_25078_25142 = state_25065__$1;
(statearr_25078_25142[(2)] = null);

(statearr_25078_25142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (11))){
var inst_25040 = (state_25065[(2)]);
var state_25065__$1 = (function (){var statearr_25079 = state_25065;
(statearr_25079[(10)] = inst_25040);

return statearr_25079;
})();
var statearr_25080_25143 = state_25065__$1;
(statearr_25080_25143[(2)] = null);

(statearr_25080_25143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (9))){
var state_25065__$1 = state_25065;
var statearr_25081_25144 = state_25065__$1;
(statearr_25081_25144[(2)] = null);

(statearr_25081_25144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (5))){
var state_25065__$1 = state_25065;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25082_25145 = state_25065__$1;
(statearr_25082_25145[(1)] = (8));

} else {
var statearr_25083_25146 = state_25065__$1;
(statearr_25083_25146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (14))){
var inst_25043 = (state_25065[(8)]);
var inst_25045 = (state_25065[(11)]);
var inst_25043__$1 = (state_25065[(2)]);
var inst_25044 = (inst_25043__$1 == null);
var inst_25045__$1 = cljs.core.not.call(null,inst_25044);
var state_25065__$1 = (function (){var statearr_25084 = state_25065;
(statearr_25084[(8)] = inst_25043__$1);

(statearr_25084[(11)] = inst_25045__$1);

return statearr_25084;
})();
if(inst_25045__$1){
var statearr_25085_25147 = state_25065__$1;
(statearr_25085_25147[(1)] = (15));

} else {
var statearr_25086_25148 = state_25065__$1;
(statearr_25086_25148[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (16))){
var inst_25045 = (state_25065[(11)]);
var state_25065__$1 = state_25065;
var statearr_25087_25149 = state_25065__$1;
(statearr_25087_25149[(2)] = inst_25045);

(statearr_25087_25149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (10))){
var inst_25037 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25088_25150 = state_25065__$1;
(statearr_25088_25150[(2)] = inst_25037);

(statearr_25088_25150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (18))){
var inst_25048 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25089_25151 = state_25065__$1;
(statearr_25089_25151[(2)] = inst_25048);

(statearr_25089_25151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (8))){
var inst_25034 = cljs.core.async.close_BANG_.call(null,to);
var state_25065__$1 = state_25065;
var statearr_25090_25152 = state_25065__$1;
(statearr_25090_25152[(2)] = inst_25034);

(statearr_25090_25152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto__,jobs,results,process,async))
;
return ((function (switch__19084__auto__,c__19146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0 = (function (){
var statearr_25094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__);

(statearr_25094[(1)] = (1));

return statearr_25094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1 = (function (state_25065){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_25065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e25095){if((e25095 instanceof Object)){
var ex__19088__auto__ = e25095;
var statearr_25096_25153 = state_25065;
(statearr_25096_25153[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25154 = state_25065;
state_25065 = G__25154;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__ = function(state_25065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1.call(this,state_25065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto__,jobs,results,process,async))
})();
var state__19148__auto__ = (function (){var statearr_25097 = f__19147__auto__.call(null);
(statearr_25097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto__);

return statearr_25097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto__,jobs,results,process,async))
);

return c__19146__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__25156 = arguments.length;
switch (G__25156) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__25159 = arguments.length;
switch (G__25159) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__25162 = arguments.length;
switch (G__25162) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19146__auto___25214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___25214,tc,fc){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___25214,tc,fc){
return (function (state_25188){
var state_val_25189 = (state_25188[(1)]);
if((state_val_25189 === (7))){
var inst_25184 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25190_25215 = state_25188__$1;
(statearr_25190_25215[(2)] = inst_25184);

(statearr_25190_25215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (1))){
var state_25188__$1 = state_25188;
var statearr_25191_25216 = state_25188__$1;
(statearr_25191_25216[(2)] = null);

(statearr_25191_25216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (4))){
var inst_25165 = (state_25188[(7)]);
var inst_25165__$1 = (state_25188[(2)]);
var inst_25166 = (inst_25165__$1 == null);
var state_25188__$1 = (function (){var statearr_25192 = state_25188;
(statearr_25192[(7)] = inst_25165__$1);

return statearr_25192;
})();
if(cljs.core.truth_(inst_25166)){
var statearr_25193_25217 = state_25188__$1;
(statearr_25193_25217[(1)] = (5));

} else {
var statearr_25194_25218 = state_25188__$1;
(statearr_25194_25218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (13))){
var state_25188__$1 = state_25188;
var statearr_25195_25219 = state_25188__$1;
(statearr_25195_25219[(2)] = null);

(statearr_25195_25219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (6))){
var inst_25165 = (state_25188[(7)]);
var inst_25171 = p.call(null,inst_25165);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25171)){
var statearr_25196_25220 = state_25188__$1;
(statearr_25196_25220[(1)] = (9));

} else {
var statearr_25197_25221 = state_25188__$1;
(statearr_25197_25221[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (3))){
var inst_25186 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else {
if((state_val_25189 === (12))){
var state_25188__$1 = state_25188;
var statearr_25198_25222 = state_25188__$1;
(statearr_25198_25222[(2)] = null);

(statearr_25198_25222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (2))){
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25188__$1,(4),ch);
} else {
if((state_val_25189 === (11))){
var inst_25165 = (state_25188[(7)]);
var inst_25175 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25188__$1,(8),inst_25175,inst_25165);
} else {
if((state_val_25189 === (9))){
var state_25188__$1 = state_25188;
var statearr_25199_25223 = state_25188__$1;
(statearr_25199_25223[(2)] = tc);

(statearr_25199_25223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (5))){
var inst_25168 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25169 = cljs.core.async.close_BANG_.call(null,fc);
var state_25188__$1 = (function (){var statearr_25200 = state_25188;
(statearr_25200[(8)] = inst_25168);

return statearr_25200;
})();
var statearr_25201_25224 = state_25188__$1;
(statearr_25201_25224[(2)] = inst_25169);

(statearr_25201_25224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (14))){
var inst_25182 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25202_25225 = state_25188__$1;
(statearr_25202_25225[(2)] = inst_25182);

(statearr_25202_25225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (10))){
var state_25188__$1 = state_25188;
var statearr_25203_25226 = state_25188__$1;
(statearr_25203_25226[(2)] = fc);

(statearr_25203_25226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (8))){
var inst_25177 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25177)){
var statearr_25204_25227 = state_25188__$1;
(statearr_25204_25227[(1)] = (12));

} else {
var statearr_25205_25228 = state_25188__$1;
(statearr_25205_25228[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___25214,tc,fc))
;
return ((function (switch__19084__auto__,c__19146__auto___25214,tc,fc){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_25209 = [null,null,null,null,null,null,null,null,null];
(statearr_25209[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_25209[(1)] = (1));

return statearr_25209;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_25188){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_25188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e25210){if((e25210 instanceof Object)){
var ex__19088__auto__ = e25210;
var statearr_25211_25229 = state_25188;
(statearr_25211_25229[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25230 = state_25188;
state_25188 = G__25230;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___25214,tc,fc))
})();
var state__19148__auto__ = (function (){var statearr_25212 = f__19147__auto__.call(null);
(statearr_25212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___25214);

return statearr_25212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___25214,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto__){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto__){
return (function (state_25277){
var state_val_25278 = (state_25277[(1)]);
if((state_val_25278 === (7))){
var inst_25273 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25279_25295 = state_25277__$1;
(statearr_25279_25295[(2)] = inst_25273);

(statearr_25279_25295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (6))){
var inst_25263 = (state_25277[(7)]);
var inst_25266 = (state_25277[(8)]);
var inst_25270 = f.call(null,inst_25263,inst_25266);
var inst_25263__$1 = inst_25270;
var state_25277__$1 = (function (){var statearr_25280 = state_25277;
(statearr_25280[(7)] = inst_25263__$1);

return statearr_25280;
})();
var statearr_25281_25296 = state_25277__$1;
(statearr_25281_25296[(2)] = null);

(statearr_25281_25296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (5))){
var inst_25263 = (state_25277[(7)]);
var state_25277__$1 = state_25277;
var statearr_25282_25297 = state_25277__$1;
(statearr_25282_25297[(2)] = inst_25263);

(statearr_25282_25297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (4))){
var inst_25266 = (state_25277[(8)]);
var inst_25266__$1 = (state_25277[(2)]);
var inst_25267 = (inst_25266__$1 == null);
var state_25277__$1 = (function (){var statearr_25283 = state_25277;
(statearr_25283[(8)] = inst_25266__$1);

return statearr_25283;
})();
if(cljs.core.truth_(inst_25267)){
var statearr_25284_25298 = state_25277__$1;
(statearr_25284_25298[(1)] = (5));

} else {
var statearr_25285_25299 = state_25277__$1;
(statearr_25285_25299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (3))){
var inst_25275 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25277__$1,inst_25275);
} else {
if((state_val_25278 === (2))){
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25277__$1,(4),ch);
} else {
if((state_val_25278 === (1))){
var inst_25263 = init;
var state_25277__$1 = (function (){var statearr_25286 = state_25277;
(statearr_25286[(7)] = inst_25263);

return statearr_25286;
})();
var statearr_25287_25300 = state_25277__$1;
(statearr_25287_25300[(2)] = null);

(statearr_25287_25300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19146__auto__))
;
return ((function (switch__19084__auto__,c__19146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19085__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19085__auto____0 = (function (){
var statearr_25291 = [null,null,null,null,null,null,null,null,null];
(statearr_25291[(0)] = cljs$core$async$reduce_$_state_machine__19085__auto__);

(statearr_25291[(1)] = (1));

return statearr_25291;
});
var cljs$core$async$reduce_$_state_machine__19085__auto____1 = (function (state_25277){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_25277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e25292){if((e25292 instanceof Object)){
var ex__19088__auto__ = e25292;
var statearr_25293_25301 = state_25277;
(statearr_25293_25301[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25302 = state_25277;
state_25277 = G__25302;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19085__auto__ = function(state_25277){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19085__auto____1.call(this,state_25277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19085__auto____0;
cljs$core$async$reduce_$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19085__auto____1;
return cljs$core$async$reduce_$_state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto__))
})();
var state__19148__auto__ = (function (){var statearr_25294 = f__19147__auto__.call(null);
(statearr_25294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto__);

return statearr_25294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto__))
);

return c__19146__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__25304 = arguments.length;
switch (G__25304) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto__){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto__){
return (function (state_25329){
var state_val_25330 = (state_25329[(1)]);
if((state_val_25330 === (7))){
var inst_25311 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25331_25355 = state_25329__$1;
(statearr_25331_25355[(2)] = inst_25311);

(statearr_25331_25355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (1))){
var inst_25305 = cljs.core.seq.call(null,coll);
var inst_25306 = inst_25305;
var state_25329__$1 = (function (){var statearr_25332 = state_25329;
(statearr_25332[(7)] = inst_25306);

return statearr_25332;
})();
var statearr_25333_25356 = state_25329__$1;
(statearr_25333_25356[(2)] = null);

(statearr_25333_25356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (4))){
var inst_25306 = (state_25329[(7)]);
var inst_25309 = cljs.core.first.call(null,inst_25306);
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25329__$1,(7),ch,inst_25309);
} else {
if((state_val_25330 === (13))){
var inst_25323 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25334_25357 = state_25329__$1;
(statearr_25334_25357[(2)] = inst_25323);

(statearr_25334_25357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (6))){
var inst_25314 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
if(cljs.core.truth_(inst_25314)){
var statearr_25335_25358 = state_25329__$1;
(statearr_25335_25358[(1)] = (8));

} else {
var statearr_25336_25359 = state_25329__$1;
(statearr_25336_25359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (3))){
var inst_25327 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25329__$1,inst_25327);
} else {
if((state_val_25330 === (12))){
var state_25329__$1 = state_25329;
var statearr_25337_25360 = state_25329__$1;
(statearr_25337_25360[(2)] = null);

(statearr_25337_25360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (2))){
var inst_25306 = (state_25329[(7)]);
var state_25329__$1 = state_25329;
if(cljs.core.truth_(inst_25306)){
var statearr_25338_25361 = state_25329__$1;
(statearr_25338_25361[(1)] = (4));

} else {
var statearr_25339_25362 = state_25329__$1;
(statearr_25339_25362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (11))){
var inst_25320 = cljs.core.async.close_BANG_.call(null,ch);
var state_25329__$1 = state_25329;
var statearr_25340_25363 = state_25329__$1;
(statearr_25340_25363[(2)] = inst_25320);

(statearr_25340_25363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (9))){
var state_25329__$1 = state_25329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25341_25364 = state_25329__$1;
(statearr_25341_25364[(1)] = (11));

} else {
var statearr_25342_25365 = state_25329__$1;
(statearr_25342_25365[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (5))){
var inst_25306 = (state_25329[(7)]);
var state_25329__$1 = state_25329;
var statearr_25343_25366 = state_25329__$1;
(statearr_25343_25366[(2)] = inst_25306);

(statearr_25343_25366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (10))){
var inst_25325 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25344_25367 = state_25329__$1;
(statearr_25344_25367[(2)] = inst_25325);

(statearr_25344_25367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (8))){
var inst_25306 = (state_25329[(7)]);
var inst_25316 = cljs.core.next.call(null,inst_25306);
var inst_25306__$1 = inst_25316;
var state_25329__$1 = (function (){var statearr_25345 = state_25329;
(statearr_25345[(7)] = inst_25306__$1);

return statearr_25345;
})();
var statearr_25346_25368 = state_25329__$1;
(statearr_25346_25368[(2)] = null);

(statearr_25346_25368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto__))
;
return ((function (switch__19084__auto__,c__19146__auto__){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_25350 = [null,null,null,null,null,null,null,null];
(statearr_25350[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_25350[(1)] = (1));

return statearr_25350;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_25329){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_25329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e25351){if((e25351 instanceof Object)){
var ex__19088__auto__ = e25351;
var statearr_25352_25369 = state_25329;
(statearr_25352_25369[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25370 = state_25329;
state_25329 = G__25370;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_25329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_25329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto__))
})();
var state__19148__auto__ = (function (){var statearr_25353 = f__19147__auto__.call(null);
(statearr_25353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto__);

return statearr_25353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto__))
);

return c__19146__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25372 = {};
return obj25372;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16131__auto__ = _;
if(and__16131__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16131__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16779__auto__ = (((_ == null))?null:_);
return (function (){var or__16143__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25374 = {};
return obj25374;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25596 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25596 = (function (cs,ch,mult,meta25597){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25597 = meta25597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25596.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25596.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25598){
var self__ = this;
var _25598__$1 = this;
return self__.meta25597;
});})(cs))
;

cljs.core.async.t25596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25598,meta25597__$1){
var self__ = this;
var _25598__$1 = this;
return (new cljs.core.async.t25596(self__.cs,self__.ch,self__.mult,meta25597__$1));
});})(cs))
;

cljs.core.async.t25596.cljs$lang$type = true;

cljs.core.async.t25596.cljs$lang$ctorStr = "cljs.core.async/t25596";

cljs.core.async.t25596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t25596");
});})(cs))
;

cljs.core.async.__GT_t25596 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25596(cs__$1,ch__$1,mult__$1,meta25597){
return (new cljs.core.async.t25596(cs__$1,ch__$1,mult__$1,meta25597));
});})(cs))
;

}

return (new cljs.core.async.t25596(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19146__auto___25817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___25817,cs,m,dchan,dctr,done){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___25817,cs,m,dchan,dctr,done){
return (function (state_25729){
var state_val_25730 = (state_25729[(1)]);
if((state_val_25730 === (7))){
var inst_25725 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25731_25818 = state_25729__$1;
(statearr_25731_25818[(2)] = inst_25725);

(statearr_25731_25818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (20))){
var inst_25630 = (state_25729[(7)]);
var inst_25640 = cljs.core.first.call(null,inst_25630);
var inst_25641 = cljs.core.nth.call(null,inst_25640,(0),null);
var inst_25642 = cljs.core.nth.call(null,inst_25640,(1),null);
var state_25729__$1 = (function (){var statearr_25732 = state_25729;
(statearr_25732[(8)] = inst_25641);

return statearr_25732;
})();
if(cljs.core.truth_(inst_25642)){
var statearr_25733_25819 = state_25729__$1;
(statearr_25733_25819[(1)] = (22));

} else {
var statearr_25734_25820 = state_25729__$1;
(statearr_25734_25820[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (27))){
var inst_25677 = (state_25729[(9)]);
var inst_25601 = (state_25729[(10)]);
var inst_25672 = (state_25729[(11)]);
var inst_25670 = (state_25729[(12)]);
var inst_25677__$1 = cljs.core._nth.call(null,inst_25670,inst_25672);
var inst_25678 = cljs.core.async.put_BANG_.call(null,inst_25677__$1,inst_25601,done);
var state_25729__$1 = (function (){var statearr_25735 = state_25729;
(statearr_25735[(9)] = inst_25677__$1);

return statearr_25735;
})();
if(cljs.core.truth_(inst_25678)){
var statearr_25736_25821 = state_25729__$1;
(statearr_25736_25821[(1)] = (30));

} else {
var statearr_25737_25822 = state_25729__$1;
(statearr_25737_25822[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (1))){
var state_25729__$1 = state_25729;
var statearr_25738_25823 = state_25729__$1;
(statearr_25738_25823[(2)] = null);

(statearr_25738_25823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (24))){
var inst_25630 = (state_25729[(7)]);
var inst_25647 = (state_25729[(2)]);
var inst_25648 = cljs.core.next.call(null,inst_25630);
var inst_25610 = inst_25648;
var inst_25611 = null;
var inst_25612 = (0);
var inst_25613 = (0);
var state_25729__$1 = (function (){var statearr_25739 = state_25729;
(statearr_25739[(13)] = inst_25647);

(statearr_25739[(14)] = inst_25612);

(statearr_25739[(15)] = inst_25613);

(statearr_25739[(16)] = inst_25611);

(statearr_25739[(17)] = inst_25610);

return statearr_25739;
})();
var statearr_25740_25824 = state_25729__$1;
(statearr_25740_25824[(2)] = null);

(statearr_25740_25824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (39))){
var state_25729__$1 = state_25729;
var statearr_25744_25825 = state_25729__$1;
(statearr_25744_25825[(2)] = null);

(statearr_25744_25825[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (4))){
var inst_25601 = (state_25729[(10)]);
var inst_25601__$1 = (state_25729[(2)]);
var inst_25602 = (inst_25601__$1 == null);
var state_25729__$1 = (function (){var statearr_25745 = state_25729;
(statearr_25745[(10)] = inst_25601__$1);

return statearr_25745;
})();
if(cljs.core.truth_(inst_25602)){
var statearr_25746_25826 = state_25729__$1;
(statearr_25746_25826[(1)] = (5));

} else {
var statearr_25747_25827 = state_25729__$1;
(statearr_25747_25827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (15))){
var inst_25612 = (state_25729[(14)]);
var inst_25613 = (state_25729[(15)]);
var inst_25611 = (state_25729[(16)]);
var inst_25610 = (state_25729[(17)]);
var inst_25626 = (state_25729[(2)]);
var inst_25627 = (inst_25613 + (1));
var tmp25741 = inst_25612;
var tmp25742 = inst_25611;
var tmp25743 = inst_25610;
var inst_25610__$1 = tmp25743;
var inst_25611__$1 = tmp25742;
var inst_25612__$1 = tmp25741;
var inst_25613__$1 = inst_25627;
var state_25729__$1 = (function (){var statearr_25748 = state_25729;
(statearr_25748[(14)] = inst_25612__$1);

(statearr_25748[(15)] = inst_25613__$1);

(statearr_25748[(18)] = inst_25626);

(statearr_25748[(16)] = inst_25611__$1);

(statearr_25748[(17)] = inst_25610__$1);

return statearr_25748;
})();
var statearr_25749_25828 = state_25729__$1;
(statearr_25749_25828[(2)] = null);

(statearr_25749_25828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (21))){
var inst_25651 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25753_25829 = state_25729__$1;
(statearr_25753_25829[(2)] = inst_25651);

(statearr_25753_25829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (31))){
var inst_25677 = (state_25729[(9)]);
var inst_25681 = done.call(null,null);
var inst_25682 = cljs.core.async.untap_STAR_.call(null,m,inst_25677);
var state_25729__$1 = (function (){var statearr_25754 = state_25729;
(statearr_25754[(19)] = inst_25681);

return statearr_25754;
})();
var statearr_25755_25830 = state_25729__$1;
(statearr_25755_25830[(2)] = inst_25682);

(statearr_25755_25830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (32))){
var inst_25669 = (state_25729[(20)]);
var inst_25671 = (state_25729[(21)]);
var inst_25672 = (state_25729[(11)]);
var inst_25670 = (state_25729[(12)]);
var inst_25684 = (state_25729[(2)]);
var inst_25685 = (inst_25672 + (1));
var tmp25750 = inst_25669;
var tmp25751 = inst_25671;
var tmp25752 = inst_25670;
var inst_25669__$1 = tmp25750;
var inst_25670__$1 = tmp25752;
var inst_25671__$1 = tmp25751;
var inst_25672__$1 = inst_25685;
var state_25729__$1 = (function (){var statearr_25756 = state_25729;
(statearr_25756[(22)] = inst_25684);

(statearr_25756[(20)] = inst_25669__$1);

(statearr_25756[(21)] = inst_25671__$1);

(statearr_25756[(11)] = inst_25672__$1);

(statearr_25756[(12)] = inst_25670__$1);

return statearr_25756;
})();
var statearr_25757_25831 = state_25729__$1;
(statearr_25757_25831[(2)] = null);

(statearr_25757_25831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (40))){
var inst_25697 = (state_25729[(23)]);
var inst_25701 = done.call(null,null);
var inst_25702 = cljs.core.async.untap_STAR_.call(null,m,inst_25697);
var state_25729__$1 = (function (){var statearr_25758 = state_25729;
(statearr_25758[(24)] = inst_25701);

return statearr_25758;
})();
var statearr_25759_25832 = state_25729__$1;
(statearr_25759_25832[(2)] = inst_25702);

(statearr_25759_25832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (33))){
var inst_25688 = (state_25729[(25)]);
var inst_25690 = cljs.core.chunked_seq_QMARK_.call(null,inst_25688);
var state_25729__$1 = state_25729;
if(inst_25690){
var statearr_25760_25833 = state_25729__$1;
(statearr_25760_25833[(1)] = (36));

} else {
var statearr_25761_25834 = state_25729__$1;
(statearr_25761_25834[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (13))){
var inst_25620 = (state_25729[(26)]);
var inst_25623 = cljs.core.async.close_BANG_.call(null,inst_25620);
var state_25729__$1 = state_25729;
var statearr_25762_25835 = state_25729__$1;
(statearr_25762_25835[(2)] = inst_25623);

(statearr_25762_25835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (22))){
var inst_25641 = (state_25729[(8)]);
var inst_25644 = cljs.core.async.close_BANG_.call(null,inst_25641);
var state_25729__$1 = state_25729;
var statearr_25763_25836 = state_25729__$1;
(statearr_25763_25836[(2)] = inst_25644);

(statearr_25763_25836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (36))){
var inst_25688 = (state_25729[(25)]);
var inst_25692 = cljs.core.chunk_first.call(null,inst_25688);
var inst_25693 = cljs.core.chunk_rest.call(null,inst_25688);
var inst_25694 = cljs.core.count.call(null,inst_25692);
var inst_25669 = inst_25693;
var inst_25670 = inst_25692;
var inst_25671 = inst_25694;
var inst_25672 = (0);
var state_25729__$1 = (function (){var statearr_25764 = state_25729;
(statearr_25764[(20)] = inst_25669);

(statearr_25764[(21)] = inst_25671);

(statearr_25764[(11)] = inst_25672);

(statearr_25764[(12)] = inst_25670);

return statearr_25764;
})();
var statearr_25765_25837 = state_25729__$1;
(statearr_25765_25837[(2)] = null);

(statearr_25765_25837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (41))){
var inst_25688 = (state_25729[(25)]);
var inst_25704 = (state_25729[(2)]);
var inst_25705 = cljs.core.next.call(null,inst_25688);
var inst_25669 = inst_25705;
var inst_25670 = null;
var inst_25671 = (0);
var inst_25672 = (0);
var state_25729__$1 = (function (){var statearr_25766 = state_25729;
(statearr_25766[(27)] = inst_25704);

(statearr_25766[(20)] = inst_25669);

(statearr_25766[(21)] = inst_25671);

(statearr_25766[(11)] = inst_25672);

(statearr_25766[(12)] = inst_25670);

return statearr_25766;
})();
var statearr_25767_25838 = state_25729__$1;
(statearr_25767_25838[(2)] = null);

(statearr_25767_25838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (43))){
var state_25729__$1 = state_25729;
var statearr_25768_25839 = state_25729__$1;
(statearr_25768_25839[(2)] = null);

(statearr_25768_25839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (29))){
var inst_25713 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25769_25840 = state_25729__$1;
(statearr_25769_25840[(2)] = inst_25713);

(statearr_25769_25840[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (44))){
var inst_25722 = (state_25729[(2)]);
var state_25729__$1 = (function (){var statearr_25770 = state_25729;
(statearr_25770[(28)] = inst_25722);

return statearr_25770;
})();
var statearr_25771_25841 = state_25729__$1;
(statearr_25771_25841[(2)] = null);

(statearr_25771_25841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (6))){
var inst_25661 = (state_25729[(29)]);
var inst_25660 = cljs.core.deref.call(null,cs);
var inst_25661__$1 = cljs.core.keys.call(null,inst_25660);
var inst_25662 = cljs.core.count.call(null,inst_25661__$1);
var inst_25663 = cljs.core.reset_BANG_.call(null,dctr,inst_25662);
var inst_25668 = cljs.core.seq.call(null,inst_25661__$1);
var inst_25669 = inst_25668;
var inst_25670 = null;
var inst_25671 = (0);
var inst_25672 = (0);
var state_25729__$1 = (function (){var statearr_25772 = state_25729;
(statearr_25772[(30)] = inst_25663);

(statearr_25772[(20)] = inst_25669);

(statearr_25772[(29)] = inst_25661__$1);

(statearr_25772[(21)] = inst_25671);

(statearr_25772[(11)] = inst_25672);

(statearr_25772[(12)] = inst_25670);

return statearr_25772;
})();
var statearr_25773_25842 = state_25729__$1;
(statearr_25773_25842[(2)] = null);

(statearr_25773_25842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (28))){
var inst_25669 = (state_25729[(20)]);
var inst_25688 = (state_25729[(25)]);
var inst_25688__$1 = cljs.core.seq.call(null,inst_25669);
var state_25729__$1 = (function (){var statearr_25774 = state_25729;
(statearr_25774[(25)] = inst_25688__$1);

return statearr_25774;
})();
if(inst_25688__$1){
var statearr_25775_25843 = state_25729__$1;
(statearr_25775_25843[(1)] = (33));

} else {
var statearr_25776_25844 = state_25729__$1;
(statearr_25776_25844[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (25))){
var inst_25671 = (state_25729[(21)]);
var inst_25672 = (state_25729[(11)]);
var inst_25674 = (inst_25672 < inst_25671);
var inst_25675 = inst_25674;
var state_25729__$1 = state_25729;
if(cljs.core.truth_(inst_25675)){
var statearr_25777_25845 = state_25729__$1;
(statearr_25777_25845[(1)] = (27));

} else {
var statearr_25778_25846 = state_25729__$1;
(statearr_25778_25846[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (34))){
var state_25729__$1 = state_25729;
var statearr_25779_25847 = state_25729__$1;
(statearr_25779_25847[(2)] = null);

(statearr_25779_25847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (17))){
var state_25729__$1 = state_25729;
var statearr_25780_25848 = state_25729__$1;
(statearr_25780_25848[(2)] = null);

(statearr_25780_25848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (3))){
var inst_25727 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25729__$1,inst_25727);
} else {
if((state_val_25730 === (12))){
var inst_25656 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25781_25849 = state_25729__$1;
(statearr_25781_25849[(2)] = inst_25656);

(statearr_25781_25849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (2))){
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25729__$1,(4),ch);
} else {
if((state_val_25730 === (23))){
var state_25729__$1 = state_25729;
var statearr_25782_25850 = state_25729__$1;
(statearr_25782_25850[(2)] = null);

(statearr_25782_25850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (35))){
var inst_25711 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25783_25851 = state_25729__$1;
(statearr_25783_25851[(2)] = inst_25711);

(statearr_25783_25851[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (19))){
var inst_25630 = (state_25729[(7)]);
var inst_25634 = cljs.core.chunk_first.call(null,inst_25630);
var inst_25635 = cljs.core.chunk_rest.call(null,inst_25630);
var inst_25636 = cljs.core.count.call(null,inst_25634);
var inst_25610 = inst_25635;
var inst_25611 = inst_25634;
var inst_25612 = inst_25636;
var inst_25613 = (0);
var state_25729__$1 = (function (){var statearr_25784 = state_25729;
(statearr_25784[(14)] = inst_25612);

(statearr_25784[(15)] = inst_25613);

(statearr_25784[(16)] = inst_25611);

(statearr_25784[(17)] = inst_25610);

return statearr_25784;
})();
var statearr_25785_25852 = state_25729__$1;
(statearr_25785_25852[(2)] = null);

(statearr_25785_25852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (11))){
var inst_25610 = (state_25729[(17)]);
var inst_25630 = (state_25729[(7)]);
var inst_25630__$1 = cljs.core.seq.call(null,inst_25610);
var state_25729__$1 = (function (){var statearr_25786 = state_25729;
(statearr_25786[(7)] = inst_25630__$1);

return statearr_25786;
})();
if(inst_25630__$1){
var statearr_25787_25853 = state_25729__$1;
(statearr_25787_25853[(1)] = (16));

} else {
var statearr_25788_25854 = state_25729__$1;
(statearr_25788_25854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (9))){
var inst_25658 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25789_25855 = state_25729__$1;
(statearr_25789_25855[(2)] = inst_25658);

(statearr_25789_25855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (5))){
var inst_25608 = cljs.core.deref.call(null,cs);
var inst_25609 = cljs.core.seq.call(null,inst_25608);
var inst_25610 = inst_25609;
var inst_25611 = null;
var inst_25612 = (0);
var inst_25613 = (0);
var state_25729__$1 = (function (){var statearr_25790 = state_25729;
(statearr_25790[(14)] = inst_25612);

(statearr_25790[(15)] = inst_25613);

(statearr_25790[(16)] = inst_25611);

(statearr_25790[(17)] = inst_25610);

return statearr_25790;
})();
var statearr_25791_25856 = state_25729__$1;
(statearr_25791_25856[(2)] = null);

(statearr_25791_25856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (14))){
var state_25729__$1 = state_25729;
var statearr_25792_25857 = state_25729__$1;
(statearr_25792_25857[(2)] = null);

(statearr_25792_25857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (45))){
var inst_25719 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25793_25858 = state_25729__$1;
(statearr_25793_25858[(2)] = inst_25719);

(statearr_25793_25858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (26))){
var inst_25661 = (state_25729[(29)]);
var inst_25715 = (state_25729[(2)]);
var inst_25716 = cljs.core.seq.call(null,inst_25661);
var state_25729__$1 = (function (){var statearr_25794 = state_25729;
(statearr_25794[(31)] = inst_25715);

return statearr_25794;
})();
if(inst_25716){
var statearr_25795_25859 = state_25729__$1;
(statearr_25795_25859[(1)] = (42));

} else {
var statearr_25796_25860 = state_25729__$1;
(statearr_25796_25860[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (16))){
var inst_25630 = (state_25729[(7)]);
var inst_25632 = cljs.core.chunked_seq_QMARK_.call(null,inst_25630);
var state_25729__$1 = state_25729;
if(inst_25632){
var statearr_25797_25861 = state_25729__$1;
(statearr_25797_25861[(1)] = (19));

} else {
var statearr_25798_25862 = state_25729__$1;
(statearr_25798_25862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (38))){
var inst_25708 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25799_25863 = state_25729__$1;
(statearr_25799_25863[(2)] = inst_25708);

(statearr_25799_25863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (30))){
var state_25729__$1 = state_25729;
var statearr_25800_25864 = state_25729__$1;
(statearr_25800_25864[(2)] = null);

(statearr_25800_25864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (10))){
var inst_25613 = (state_25729[(15)]);
var inst_25611 = (state_25729[(16)]);
var inst_25619 = cljs.core._nth.call(null,inst_25611,inst_25613);
var inst_25620 = cljs.core.nth.call(null,inst_25619,(0),null);
var inst_25621 = cljs.core.nth.call(null,inst_25619,(1),null);
var state_25729__$1 = (function (){var statearr_25801 = state_25729;
(statearr_25801[(26)] = inst_25620);

return statearr_25801;
})();
if(cljs.core.truth_(inst_25621)){
var statearr_25802_25865 = state_25729__$1;
(statearr_25802_25865[(1)] = (13));

} else {
var statearr_25803_25866 = state_25729__$1;
(statearr_25803_25866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (18))){
var inst_25654 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25804_25867 = state_25729__$1;
(statearr_25804_25867[(2)] = inst_25654);

(statearr_25804_25867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (42))){
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25729__$1,(45),dchan);
} else {
if((state_val_25730 === (37))){
var inst_25601 = (state_25729[(10)]);
var inst_25697 = (state_25729[(23)]);
var inst_25688 = (state_25729[(25)]);
var inst_25697__$1 = cljs.core.first.call(null,inst_25688);
var inst_25698 = cljs.core.async.put_BANG_.call(null,inst_25697__$1,inst_25601,done);
var state_25729__$1 = (function (){var statearr_25805 = state_25729;
(statearr_25805[(23)] = inst_25697__$1);

return statearr_25805;
})();
if(cljs.core.truth_(inst_25698)){
var statearr_25806_25868 = state_25729__$1;
(statearr_25806_25868[(1)] = (39));

} else {
var statearr_25807_25869 = state_25729__$1;
(statearr_25807_25869[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (8))){
var inst_25612 = (state_25729[(14)]);
var inst_25613 = (state_25729[(15)]);
var inst_25615 = (inst_25613 < inst_25612);
var inst_25616 = inst_25615;
var state_25729__$1 = state_25729;
if(cljs.core.truth_(inst_25616)){
var statearr_25808_25870 = state_25729__$1;
(statearr_25808_25870[(1)] = (10));

} else {
var statearr_25809_25871 = state_25729__$1;
(statearr_25809_25871[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___25817,cs,m,dchan,dctr,done))
;
return ((function (switch__19084__auto__,c__19146__auto___25817,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19085__auto__ = null;
var cljs$core$async$mult_$_state_machine__19085__auto____0 = (function (){
var statearr_25813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25813[(0)] = cljs$core$async$mult_$_state_machine__19085__auto__);

(statearr_25813[(1)] = (1));

return statearr_25813;
});
var cljs$core$async$mult_$_state_machine__19085__auto____1 = (function (state_25729){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_25729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e25814){if((e25814 instanceof Object)){
var ex__19088__auto__ = e25814;
var statearr_25815_25872 = state_25729;
(statearr_25815_25872[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25873 = state_25729;
state_25729 = G__25873;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19085__auto__ = function(state_25729){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19085__auto____1.call(this,state_25729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19085__auto____0;
cljs$core$async$mult_$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19085__auto____1;
return cljs$core$async$mult_$_state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___25817,cs,m,dchan,dctr,done))
})();
var state__19148__auto__ = (function (){var statearr_25816 = f__19147__auto__.call(null);
(statearr_25816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___25817);

return statearr_25816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___25817,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__25875 = arguments.length;
switch (G__25875) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj25878 = {};
return obj25878;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16131__auto__ = m;
if(and__16131__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16131__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16779__auto__ = (((m == null))?null:m);
return (function (){var or__16143__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17183__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17183__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25883){
var map__25884 = p__25883;
var map__25884__$1 = ((cljs.core.seq_QMARK_.call(null,map__25884))?cljs.core.apply.call(null,cljs.core.hash_map,map__25884):map__25884);
var opts = map__25884__$1;
var statearr_25885_25888 = state;
(statearr_25885_25888[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25884,map__25884__$1,opts){
return (function (val){
var statearr_25886_25889 = state;
(statearr_25886_25889[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25884,map__25884__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25887_25890 = state;
(statearr_25887_25890[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25879){
var G__25880 = cljs.core.first.call(null,seq25879);
var seq25879__$1 = cljs.core.next.call(null,seq25879);
var G__25881 = cljs.core.first.call(null,seq25879__$1);
var seq25879__$2 = cljs.core.next.call(null,seq25879__$1);
var G__25882 = cljs.core.first.call(null,seq25879__$2);
var seq25879__$3 = cljs.core.next.call(null,seq25879__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25880,G__25881,G__25882,seq25879__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26010 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26010 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26011){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26011 = meta26011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26010.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26010.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26012){
var self__ = this;
var _26012__$1 = this;
return self__.meta26011;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26012,meta26011__$1){
var self__ = this;
var _26012__$1 = this;
return (new cljs.core.async.t26010(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26011__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26010.cljs$lang$type = true;

cljs.core.async.t26010.cljs$lang$ctorStr = "cljs.core.async/t26010";

cljs.core.async.t26010.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t26010");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26010 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26010(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26011){
return (new cljs.core.async.t26010(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26011));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26010(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19146__auto___26129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___26129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___26129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26082){
var state_val_26083 = (state_26082[(1)]);
if((state_val_26083 === (7))){
var inst_26026 = (state_26082[(7)]);
var inst_26031 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26026);
var state_26082__$1 = state_26082;
var statearr_26084_26130 = state_26082__$1;
(statearr_26084_26130[(2)] = inst_26031);

(statearr_26084_26130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (20))){
var inst_26041 = (state_26082[(8)]);
var state_26082__$1 = state_26082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26082__$1,(23),out,inst_26041);
} else {
if((state_val_26083 === (1))){
var inst_26016 = (state_26082[(9)]);
var inst_26016__$1 = calc_state.call(null);
var inst_26017 = cljs.core.seq_QMARK_.call(null,inst_26016__$1);
var state_26082__$1 = (function (){var statearr_26085 = state_26082;
(statearr_26085[(9)] = inst_26016__$1);

return statearr_26085;
})();
if(inst_26017){
var statearr_26086_26131 = state_26082__$1;
(statearr_26086_26131[(1)] = (2));

} else {
var statearr_26087_26132 = state_26082__$1;
(statearr_26087_26132[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (24))){
var inst_26034 = (state_26082[(10)]);
var inst_26026 = inst_26034;
var state_26082__$1 = (function (){var statearr_26088 = state_26082;
(statearr_26088[(7)] = inst_26026);

return statearr_26088;
})();
var statearr_26089_26133 = state_26082__$1;
(statearr_26089_26133[(2)] = null);

(statearr_26089_26133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (4))){
var inst_26016 = (state_26082[(9)]);
var inst_26022 = (state_26082[(2)]);
var inst_26023 = cljs.core.get.call(null,inst_26022,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26024 = cljs.core.get.call(null,inst_26022,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26025 = cljs.core.get.call(null,inst_26022,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26026 = inst_26016;
var state_26082__$1 = (function (){var statearr_26090 = state_26082;
(statearr_26090[(11)] = inst_26025);

(statearr_26090[(12)] = inst_26023);

(statearr_26090[(7)] = inst_26026);

(statearr_26090[(13)] = inst_26024);

return statearr_26090;
})();
var statearr_26091_26134 = state_26082__$1;
(statearr_26091_26134[(2)] = null);

(statearr_26091_26134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (15))){
var state_26082__$1 = state_26082;
var statearr_26092_26135 = state_26082__$1;
(statearr_26092_26135[(2)] = null);

(statearr_26092_26135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (21))){
var inst_26034 = (state_26082[(10)]);
var inst_26026 = inst_26034;
var state_26082__$1 = (function (){var statearr_26093 = state_26082;
(statearr_26093[(7)] = inst_26026);

return statearr_26093;
})();
var statearr_26094_26136 = state_26082__$1;
(statearr_26094_26136[(2)] = null);

(statearr_26094_26136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (13))){
var inst_26078 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26095_26137 = state_26082__$1;
(statearr_26095_26137[(2)] = inst_26078);

(statearr_26095_26137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (22))){
var inst_26076 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26096_26138 = state_26082__$1;
(statearr_26096_26138[(2)] = inst_26076);

(statearr_26096_26138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (6))){
var inst_26080 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26082__$1,inst_26080);
} else {
if((state_val_26083 === (25))){
var state_26082__$1 = state_26082;
var statearr_26097_26139 = state_26082__$1;
(statearr_26097_26139[(2)] = null);

(statearr_26097_26139[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (17))){
var inst_26056 = (state_26082[(14)]);
var state_26082__$1 = state_26082;
var statearr_26098_26140 = state_26082__$1;
(statearr_26098_26140[(2)] = inst_26056);

(statearr_26098_26140[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (3))){
var inst_26016 = (state_26082[(9)]);
var state_26082__$1 = state_26082;
var statearr_26099_26141 = state_26082__$1;
(statearr_26099_26141[(2)] = inst_26016);

(statearr_26099_26141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (12))){
var inst_26056 = (state_26082[(14)]);
var inst_26037 = (state_26082[(15)]);
var inst_26042 = (state_26082[(16)]);
var inst_26056__$1 = inst_26037.call(null,inst_26042);
var state_26082__$1 = (function (){var statearr_26100 = state_26082;
(statearr_26100[(14)] = inst_26056__$1);

return statearr_26100;
})();
if(cljs.core.truth_(inst_26056__$1)){
var statearr_26101_26142 = state_26082__$1;
(statearr_26101_26142[(1)] = (17));

} else {
var statearr_26102_26143 = state_26082__$1;
(statearr_26102_26143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (2))){
var inst_26016 = (state_26082[(9)]);
var inst_26019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26016);
var state_26082__$1 = state_26082;
var statearr_26103_26144 = state_26082__$1;
(statearr_26103_26144[(2)] = inst_26019);

(statearr_26103_26144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (23))){
var inst_26067 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
if(cljs.core.truth_(inst_26067)){
var statearr_26104_26145 = state_26082__$1;
(statearr_26104_26145[(1)] = (24));

} else {
var statearr_26105_26146 = state_26082__$1;
(statearr_26105_26146[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (19))){
var inst_26064 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
if(cljs.core.truth_(inst_26064)){
var statearr_26106_26147 = state_26082__$1;
(statearr_26106_26147[(1)] = (20));

} else {
var statearr_26107_26148 = state_26082__$1;
(statearr_26107_26148[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (11))){
var inst_26041 = (state_26082[(8)]);
var inst_26047 = (inst_26041 == null);
var state_26082__$1 = state_26082;
if(cljs.core.truth_(inst_26047)){
var statearr_26108_26149 = state_26082__$1;
(statearr_26108_26149[(1)] = (14));

} else {
var statearr_26109_26150 = state_26082__$1;
(statearr_26109_26150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (9))){
var inst_26034 = (state_26082[(10)]);
var inst_26034__$1 = (state_26082[(2)]);
var inst_26035 = cljs.core.get.call(null,inst_26034__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26036 = cljs.core.get.call(null,inst_26034__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26037 = cljs.core.get.call(null,inst_26034__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26082__$1 = (function (){var statearr_26110 = state_26082;
(statearr_26110[(15)] = inst_26037);

(statearr_26110[(17)] = inst_26036);

(statearr_26110[(10)] = inst_26034__$1);

return statearr_26110;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26082__$1,(10),inst_26035);
} else {
if((state_val_26083 === (5))){
var inst_26026 = (state_26082[(7)]);
var inst_26029 = cljs.core.seq_QMARK_.call(null,inst_26026);
var state_26082__$1 = state_26082;
if(inst_26029){
var statearr_26111_26151 = state_26082__$1;
(statearr_26111_26151[(1)] = (7));

} else {
var statearr_26112_26152 = state_26082__$1;
(statearr_26112_26152[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (14))){
var inst_26042 = (state_26082[(16)]);
var inst_26049 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26042);
var state_26082__$1 = state_26082;
var statearr_26113_26153 = state_26082__$1;
(statearr_26113_26153[(2)] = inst_26049);

(statearr_26113_26153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (26))){
var inst_26072 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26114_26154 = state_26082__$1;
(statearr_26114_26154[(2)] = inst_26072);

(statearr_26114_26154[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (16))){
var inst_26052 = (state_26082[(2)]);
var inst_26053 = calc_state.call(null);
var inst_26026 = inst_26053;
var state_26082__$1 = (function (){var statearr_26115 = state_26082;
(statearr_26115[(7)] = inst_26026);

(statearr_26115[(18)] = inst_26052);

return statearr_26115;
})();
var statearr_26116_26155 = state_26082__$1;
(statearr_26116_26155[(2)] = null);

(statearr_26116_26155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (10))){
var inst_26041 = (state_26082[(8)]);
var inst_26042 = (state_26082[(16)]);
var inst_26040 = (state_26082[(2)]);
var inst_26041__$1 = cljs.core.nth.call(null,inst_26040,(0),null);
var inst_26042__$1 = cljs.core.nth.call(null,inst_26040,(1),null);
var inst_26043 = (inst_26041__$1 == null);
var inst_26044 = cljs.core._EQ_.call(null,inst_26042__$1,change);
var inst_26045 = (inst_26043) || (inst_26044);
var state_26082__$1 = (function (){var statearr_26117 = state_26082;
(statearr_26117[(8)] = inst_26041__$1);

(statearr_26117[(16)] = inst_26042__$1);

return statearr_26117;
})();
if(cljs.core.truth_(inst_26045)){
var statearr_26118_26156 = state_26082__$1;
(statearr_26118_26156[(1)] = (11));

} else {
var statearr_26119_26157 = state_26082__$1;
(statearr_26119_26157[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (18))){
var inst_26037 = (state_26082[(15)]);
var inst_26036 = (state_26082[(17)]);
var inst_26042 = (state_26082[(16)]);
var inst_26059 = cljs.core.empty_QMARK_.call(null,inst_26037);
var inst_26060 = inst_26036.call(null,inst_26042);
var inst_26061 = cljs.core.not.call(null,inst_26060);
var inst_26062 = (inst_26059) && (inst_26061);
var state_26082__$1 = state_26082;
var statearr_26120_26158 = state_26082__$1;
(statearr_26120_26158[(2)] = inst_26062);

(statearr_26120_26158[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (8))){
var inst_26026 = (state_26082[(7)]);
var state_26082__$1 = state_26082;
var statearr_26121_26159 = state_26082__$1;
(statearr_26121_26159[(2)] = inst_26026);

(statearr_26121_26159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___26129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19084__auto__,c__19146__auto___26129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19085__auto__ = null;
var cljs$core$async$mix_$_state_machine__19085__auto____0 = (function (){
var statearr_26125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26125[(0)] = cljs$core$async$mix_$_state_machine__19085__auto__);

(statearr_26125[(1)] = (1));

return statearr_26125;
});
var cljs$core$async$mix_$_state_machine__19085__auto____1 = (function (state_26082){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26126){if((e26126 instanceof Object)){
var ex__19088__auto__ = e26126;
var statearr_26127_26160 = state_26082;
(statearr_26127_26160[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26161 = state_26082;
state_26082 = G__26161;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19085__auto__ = function(state_26082){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19085__auto____1.call(this,state_26082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19085__auto____0;
cljs$core$async$mix_$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19085__auto____1;
return cljs$core$async$mix_$_state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___26129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19148__auto__ = (function (){var statearr_26128 = f__19147__auto__.call(null);
(statearr_26128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___26129);

return statearr_26128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___26129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26163 = {};
return obj26163;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16131__auto__ = p;
if(and__16131__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16131__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16779__auto__ = (((p == null))?null:p);
return (function (){var or__16143__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16131__auto__ = p;
if(and__16131__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16131__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16779__auto__ = (((p == null))?null:p);
return (function (){var or__16143__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26165 = arguments.length;
switch (G__26165) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16131__auto__ = p;
if(and__16131__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16131__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16779__auto__ = (((p == null))?null:p);
return (function (){var or__16143__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16131__auto__ = p;
if(and__16131__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16131__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16779__auto__ = (((p == null))?null:p);
return (function (){var or__16143__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16779__auto__)]);
if(or__16143__auto__){
return or__16143__auto__;
} else {
var or__16143__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16143__auto____$1){
return or__16143__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__26169 = arguments.length;
switch (G__26169) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16143__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16143__auto__)){
return or__16143__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16143__auto__,mults){
return (function (p1__26167_SHARP_){
if(cljs.core.truth_(p1__26167_SHARP_.call(null,topic))){
return p1__26167_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26167_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16143__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26170 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26170 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta26171){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta26171 = meta26171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26170.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26170.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26172){
var self__ = this;
var _26172__$1 = this;
return self__.meta26171;
});})(mults,ensure_mult))
;

cljs.core.async.t26170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26172,meta26171__$1){
var self__ = this;
var _26172__$1 = this;
return (new cljs.core.async.t26170(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta26171__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26170.cljs$lang$type = true;

cljs.core.async.t26170.cljs$lang$ctorStr = "cljs.core.async/t26170";

cljs.core.async.t26170.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t26170");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26170 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta26171){
return (new cljs.core.async.t26170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta26171));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26170(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19146__auto___26293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___26293,mults,ensure_mult,p){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___26293,mults,ensure_mult,p){
return (function (state_26244){
var state_val_26245 = (state_26244[(1)]);
if((state_val_26245 === (7))){
var inst_26240 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26246_26294 = state_26244__$1;
(statearr_26246_26294[(2)] = inst_26240);

(statearr_26246_26294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (20))){
var state_26244__$1 = state_26244;
var statearr_26247_26295 = state_26244__$1;
(statearr_26247_26295[(2)] = null);

(statearr_26247_26295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (1))){
var state_26244__$1 = state_26244;
var statearr_26248_26296 = state_26244__$1;
(statearr_26248_26296[(2)] = null);

(statearr_26248_26296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (24))){
var inst_26223 = (state_26244[(7)]);
var inst_26232 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26223);
var state_26244__$1 = state_26244;
var statearr_26249_26297 = state_26244__$1;
(statearr_26249_26297[(2)] = inst_26232);

(statearr_26249_26297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (4))){
var inst_26175 = (state_26244[(8)]);
var inst_26175__$1 = (state_26244[(2)]);
var inst_26176 = (inst_26175__$1 == null);
var state_26244__$1 = (function (){var statearr_26250 = state_26244;
(statearr_26250[(8)] = inst_26175__$1);

return statearr_26250;
})();
if(cljs.core.truth_(inst_26176)){
var statearr_26251_26298 = state_26244__$1;
(statearr_26251_26298[(1)] = (5));

} else {
var statearr_26252_26299 = state_26244__$1;
(statearr_26252_26299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (15))){
var inst_26217 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26253_26300 = state_26244__$1;
(statearr_26253_26300[(2)] = inst_26217);

(statearr_26253_26300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (21))){
var inst_26237 = (state_26244[(2)]);
var state_26244__$1 = (function (){var statearr_26254 = state_26244;
(statearr_26254[(9)] = inst_26237);

return statearr_26254;
})();
var statearr_26255_26301 = state_26244__$1;
(statearr_26255_26301[(2)] = null);

(statearr_26255_26301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (13))){
var inst_26199 = (state_26244[(10)]);
var inst_26201 = cljs.core.chunked_seq_QMARK_.call(null,inst_26199);
var state_26244__$1 = state_26244;
if(inst_26201){
var statearr_26256_26302 = state_26244__$1;
(statearr_26256_26302[(1)] = (16));

} else {
var statearr_26257_26303 = state_26244__$1;
(statearr_26257_26303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (22))){
var inst_26229 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26229)){
var statearr_26258_26304 = state_26244__$1;
(statearr_26258_26304[(1)] = (23));

} else {
var statearr_26259_26305 = state_26244__$1;
(statearr_26259_26305[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (6))){
var inst_26223 = (state_26244[(7)]);
var inst_26225 = (state_26244[(11)]);
var inst_26175 = (state_26244[(8)]);
var inst_26223__$1 = topic_fn.call(null,inst_26175);
var inst_26224 = cljs.core.deref.call(null,mults);
var inst_26225__$1 = cljs.core.get.call(null,inst_26224,inst_26223__$1);
var state_26244__$1 = (function (){var statearr_26260 = state_26244;
(statearr_26260[(7)] = inst_26223__$1);

(statearr_26260[(11)] = inst_26225__$1);

return statearr_26260;
})();
if(cljs.core.truth_(inst_26225__$1)){
var statearr_26261_26306 = state_26244__$1;
(statearr_26261_26306[(1)] = (19));

} else {
var statearr_26262_26307 = state_26244__$1;
(statearr_26262_26307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (25))){
var inst_26234 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26263_26308 = state_26244__$1;
(statearr_26263_26308[(2)] = inst_26234);

(statearr_26263_26308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (17))){
var inst_26199 = (state_26244[(10)]);
var inst_26208 = cljs.core.first.call(null,inst_26199);
var inst_26209 = cljs.core.async.muxch_STAR_.call(null,inst_26208);
var inst_26210 = cljs.core.async.close_BANG_.call(null,inst_26209);
var inst_26211 = cljs.core.next.call(null,inst_26199);
var inst_26185 = inst_26211;
var inst_26186 = null;
var inst_26187 = (0);
var inst_26188 = (0);
var state_26244__$1 = (function (){var statearr_26264 = state_26244;
(statearr_26264[(12)] = inst_26185);

(statearr_26264[(13)] = inst_26187);

(statearr_26264[(14)] = inst_26210);

(statearr_26264[(15)] = inst_26186);

(statearr_26264[(16)] = inst_26188);

return statearr_26264;
})();
var statearr_26265_26309 = state_26244__$1;
(statearr_26265_26309[(2)] = null);

(statearr_26265_26309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (3))){
var inst_26242 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26244__$1,inst_26242);
} else {
if((state_val_26245 === (12))){
var inst_26219 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26266_26310 = state_26244__$1;
(statearr_26266_26310[(2)] = inst_26219);

(statearr_26266_26310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (2))){
var state_26244__$1 = state_26244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26244__$1,(4),ch);
} else {
if((state_val_26245 === (23))){
var state_26244__$1 = state_26244;
var statearr_26267_26311 = state_26244__$1;
(statearr_26267_26311[(2)] = null);

(statearr_26267_26311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (19))){
var inst_26225 = (state_26244[(11)]);
var inst_26175 = (state_26244[(8)]);
var inst_26227 = cljs.core.async.muxch_STAR_.call(null,inst_26225);
var state_26244__$1 = state_26244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26244__$1,(22),inst_26227,inst_26175);
} else {
if((state_val_26245 === (11))){
var inst_26185 = (state_26244[(12)]);
var inst_26199 = (state_26244[(10)]);
var inst_26199__$1 = cljs.core.seq.call(null,inst_26185);
var state_26244__$1 = (function (){var statearr_26268 = state_26244;
(statearr_26268[(10)] = inst_26199__$1);

return statearr_26268;
})();
if(inst_26199__$1){
var statearr_26269_26312 = state_26244__$1;
(statearr_26269_26312[(1)] = (13));

} else {
var statearr_26270_26313 = state_26244__$1;
(statearr_26270_26313[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (9))){
var inst_26221 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26271_26314 = state_26244__$1;
(statearr_26271_26314[(2)] = inst_26221);

(statearr_26271_26314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (5))){
var inst_26182 = cljs.core.deref.call(null,mults);
var inst_26183 = cljs.core.vals.call(null,inst_26182);
var inst_26184 = cljs.core.seq.call(null,inst_26183);
var inst_26185 = inst_26184;
var inst_26186 = null;
var inst_26187 = (0);
var inst_26188 = (0);
var state_26244__$1 = (function (){var statearr_26272 = state_26244;
(statearr_26272[(12)] = inst_26185);

(statearr_26272[(13)] = inst_26187);

(statearr_26272[(15)] = inst_26186);

(statearr_26272[(16)] = inst_26188);

return statearr_26272;
})();
var statearr_26273_26315 = state_26244__$1;
(statearr_26273_26315[(2)] = null);

(statearr_26273_26315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (14))){
var state_26244__$1 = state_26244;
var statearr_26277_26316 = state_26244__$1;
(statearr_26277_26316[(2)] = null);

(statearr_26277_26316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (16))){
var inst_26199 = (state_26244[(10)]);
var inst_26203 = cljs.core.chunk_first.call(null,inst_26199);
var inst_26204 = cljs.core.chunk_rest.call(null,inst_26199);
var inst_26205 = cljs.core.count.call(null,inst_26203);
var inst_26185 = inst_26204;
var inst_26186 = inst_26203;
var inst_26187 = inst_26205;
var inst_26188 = (0);
var state_26244__$1 = (function (){var statearr_26278 = state_26244;
(statearr_26278[(12)] = inst_26185);

(statearr_26278[(13)] = inst_26187);

(statearr_26278[(15)] = inst_26186);

(statearr_26278[(16)] = inst_26188);

return statearr_26278;
})();
var statearr_26279_26317 = state_26244__$1;
(statearr_26279_26317[(2)] = null);

(statearr_26279_26317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (10))){
var inst_26185 = (state_26244[(12)]);
var inst_26187 = (state_26244[(13)]);
var inst_26186 = (state_26244[(15)]);
var inst_26188 = (state_26244[(16)]);
var inst_26193 = cljs.core._nth.call(null,inst_26186,inst_26188);
var inst_26194 = cljs.core.async.muxch_STAR_.call(null,inst_26193);
var inst_26195 = cljs.core.async.close_BANG_.call(null,inst_26194);
var inst_26196 = (inst_26188 + (1));
var tmp26274 = inst_26185;
var tmp26275 = inst_26187;
var tmp26276 = inst_26186;
var inst_26185__$1 = tmp26274;
var inst_26186__$1 = tmp26276;
var inst_26187__$1 = tmp26275;
var inst_26188__$1 = inst_26196;
var state_26244__$1 = (function (){var statearr_26280 = state_26244;
(statearr_26280[(12)] = inst_26185__$1);

(statearr_26280[(17)] = inst_26195);

(statearr_26280[(13)] = inst_26187__$1);

(statearr_26280[(15)] = inst_26186__$1);

(statearr_26280[(16)] = inst_26188__$1);

return statearr_26280;
})();
var statearr_26281_26318 = state_26244__$1;
(statearr_26281_26318[(2)] = null);

(statearr_26281_26318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (18))){
var inst_26214 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26282_26319 = state_26244__$1;
(statearr_26282_26319[(2)] = inst_26214);

(statearr_26282_26319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (8))){
var inst_26187 = (state_26244[(13)]);
var inst_26188 = (state_26244[(16)]);
var inst_26190 = (inst_26188 < inst_26187);
var inst_26191 = inst_26190;
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26191)){
var statearr_26283_26320 = state_26244__$1;
(statearr_26283_26320[(1)] = (10));

} else {
var statearr_26284_26321 = state_26244__$1;
(statearr_26284_26321[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___26293,mults,ensure_mult,p))
;
return ((function (switch__19084__auto__,c__19146__auto___26293,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_26288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26288[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_26288[(1)] = (1));

return statearr_26288;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_26244){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26289){if((e26289 instanceof Object)){
var ex__19088__auto__ = e26289;
var statearr_26290_26322 = state_26244;
(statearr_26290_26322[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26323 = state_26244;
state_26244 = G__26323;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_26244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_26244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___26293,mults,ensure_mult,p))
})();
var state__19148__auto__ = (function (){var statearr_26291 = f__19147__auto__.call(null);
(statearr_26291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___26293);

return statearr_26291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___26293,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__26325 = arguments.length;
switch (G__26325) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__26328 = arguments.length;
switch (G__26328) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__26331 = arguments.length;
switch (G__26331) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19146__auto___26401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___26401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___26401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26370){
var state_val_26371 = (state_26370[(1)]);
if((state_val_26371 === (7))){
var state_26370__$1 = state_26370;
var statearr_26372_26402 = state_26370__$1;
(statearr_26372_26402[(2)] = null);

(statearr_26372_26402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (1))){
var state_26370__$1 = state_26370;
var statearr_26373_26403 = state_26370__$1;
(statearr_26373_26403[(2)] = null);

(statearr_26373_26403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (4))){
var inst_26334 = (state_26370[(7)]);
var inst_26336 = (inst_26334 < cnt);
var state_26370__$1 = state_26370;
if(cljs.core.truth_(inst_26336)){
var statearr_26374_26404 = state_26370__$1;
(statearr_26374_26404[(1)] = (6));

} else {
var statearr_26375_26405 = state_26370__$1;
(statearr_26375_26405[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (15))){
var inst_26366 = (state_26370[(2)]);
var state_26370__$1 = state_26370;
var statearr_26376_26406 = state_26370__$1;
(statearr_26376_26406[(2)] = inst_26366);

(statearr_26376_26406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (13))){
var inst_26359 = cljs.core.async.close_BANG_.call(null,out);
var state_26370__$1 = state_26370;
var statearr_26377_26407 = state_26370__$1;
(statearr_26377_26407[(2)] = inst_26359);

(statearr_26377_26407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (6))){
var state_26370__$1 = state_26370;
var statearr_26378_26408 = state_26370__$1;
(statearr_26378_26408[(2)] = null);

(statearr_26378_26408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (3))){
var inst_26368 = (state_26370[(2)]);
var state_26370__$1 = state_26370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26370__$1,inst_26368);
} else {
if((state_val_26371 === (12))){
var inst_26356 = (state_26370[(8)]);
var inst_26356__$1 = (state_26370[(2)]);
var inst_26357 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26356__$1);
var state_26370__$1 = (function (){var statearr_26379 = state_26370;
(statearr_26379[(8)] = inst_26356__$1);

return statearr_26379;
})();
if(cljs.core.truth_(inst_26357)){
var statearr_26380_26409 = state_26370__$1;
(statearr_26380_26409[(1)] = (13));

} else {
var statearr_26381_26410 = state_26370__$1;
(statearr_26381_26410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (2))){
var inst_26333 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26334 = (0);
var state_26370__$1 = (function (){var statearr_26382 = state_26370;
(statearr_26382[(7)] = inst_26334);

(statearr_26382[(9)] = inst_26333);

return statearr_26382;
})();
var statearr_26383_26411 = state_26370__$1;
(statearr_26383_26411[(2)] = null);

(statearr_26383_26411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (11))){
var inst_26334 = (state_26370[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26370,(10),Object,null,(9));
var inst_26343 = chs__$1.call(null,inst_26334);
var inst_26344 = done.call(null,inst_26334);
var inst_26345 = cljs.core.async.take_BANG_.call(null,inst_26343,inst_26344);
var state_26370__$1 = state_26370;
var statearr_26384_26412 = state_26370__$1;
(statearr_26384_26412[(2)] = inst_26345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26370__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (9))){
var inst_26334 = (state_26370[(7)]);
var inst_26347 = (state_26370[(2)]);
var inst_26348 = (inst_26334 + (1));
var inst_26334__$1 = inst_26348;
var state_26370__$1 = (function (){var statearr_26385 = state_26370;
(statearr_26385[(7)] = inst_26334__$1);

(statearr_26385[(10)] = inst_26347);

return statearr_26385;
})();
var statearr_26386_26413 = state_26370__$1;
(statearr_26386_26413[(2)] = null);

(statearr_26386_26413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (5))){
var inst_26354 = (state_26370[(2)]);
var state_26370__$1 = (function (){var statearr_26387 = state_26370;
(statearr_26387[(11)] = inst_26354);

return statearr_26387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26370__$1,(12),dchan);
} else {
if((state_val_26371 === (14))){
var inst_26356 = (state_26370[(8)]);
var inst_26361 = cljs.core.apply.call(null,f,inst_26356);
var state_26370__$1 = state_26370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26370__$1,(16),out,inst_26361);
} else {
if((state_val_26371 === (16))){
var inst_26363 = (state_26370[(2)]);
var state_26370__$1 = (function (){var statearr_26388 = state_26370;
(statearr_26388[(12)] = inst_26363);

return statearr_26388;
})();
var statearr_26389_26414 = state_26370__$1;
(statearr_26389_26414[(2)] = null);

(statearr_26389_26414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (10))){
var inst_26338 = (state_26370[(2)]);
var inst_26339 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26370__$1 = (function (){var statearr_26390 = state_26370;
(statearr_26390[(13)] = inst_26338);

return statearr_26390;
})();
var statearr_26391_26415 = state_26370__$1;
(statearr_26391_26415[(2)] = inst_26339);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26370__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26371 === (8))){
var inst_26352 = (state_26370[(2)]);
var state_26370__$1 = state_26370;
var statearr_26392_26416 = state_26370__$1;
(statearr_26392_26416[(2)] = inst_26352);

(statearr_26392_26416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___26401,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19084__auto__,c__19146__auto___26401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_26396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26396[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_26396[(1)] = (1));

return statearr_26396;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_26370){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26397){if((e26397 instanceof Object)){
var ex__19088__auto__ = e26397;
var statearr_26398_26417 = state_26370;
(statearr_26398_26417[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26418 = state_26370;
state_26370 = G__26418;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_26370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_26370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___26401,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19148__auto__ = (function (){var statearr_26399 = f__19147__auto__.call(null);
(statearr_26399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___26401);

return statearr_26399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___26401,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__26421 = arguments.length;
switch (G__26421) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19146__auto___26476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___26476,out){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___26476,out){
return (function (state_26451){
var state_val_26452 = (state_26451[(1)]);
if((state_val_26452 === (7))){
var inst_26430 = (state_26451[(7)]);
var inst_26431 = (state_26451[(8)]);
var inst_26430__$1 = (state_26451[(2)]);
var inst_26431__$1 = cljs.core.nth.call(null,inst_26430__$1,(0),null);
var inst_26432 = cljs.core.nth.call(null,inst_26430__$1,(1),null);
var inst_26433 = (inst_26431__$1 == null);
var state_26451__$1 = (function (){var statearr_26453 = state_26451;
(statearr_26453[(7)] = inst_26430__$1);

(statearr_26453[(9)] = inst_26432);

(statearr_26453[(8)] = inst_26431__$1);

return statearr_26453;
})();
if(cljs.core.truth_(inst_26433)){
var statearr_26454_26477 = state_26451__$1;
(statearr_26454_26477[(1)] = (8));

} else {
var statearr_26455_26478 = state_26451__$1;
(statearr_26455_26478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (1))){
var inst_26422 = cljs.core.vec.call(null,chs);
var inst_26423 = inst_26422;
var state_26451__$1 = (function (){var statearr_26456 = state_26451;
(statearr_26456[(10)] = inst_26423);

return statearr_26456;
})();
var statearr_26457_26479 = state_26451__$1;
(statearr_26457_26479[(2)] = null);

(statearr_26457_26479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (4))){
var inst_26423 = (state_26451[(10)]);
var state_26451__$1 = state_26451;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26451__$1,(7),inst_26423);
} else {
if((state_val_26452 === (6))){
var inst_26447 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
var statearr_26458_26480 = state_26451__$1;
(statearr_26458_26480[(2)] = inst_26447);

(statearr_26458_26480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (3))){
var inst_26449 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26451__$1,inst_26449);
} else {
if((state_val_26452 === (2))){
var inst_26423 = (state_26451[(10)]);
var inst_26425 = cljs.core.count.call(null,inst_26423);
var inst_26426 = (inst_26425 > (0));
var state_26451__$1 = state_26451;
if(cljs.core.truth_(inst_26426)){
var statearr_26460_26481 = state_26451__$1;
(statearr_26460_26481[(1)] = (4));

} else {
var statearr_26461_26482 = state_26451__$1;
(statearr_26461_26482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (11))){
var inst_26423 = (state_26451[(10)]);
var inst_26440 = (state_26451[(2)]);
var tmp26459 = inst_26423;
var inst_26423__$1 = tmp26459;
var state_26451__$1 = (function (){var statearr_26462 = state_26451;
(statearr_26462[(11)] = inst_26440);

(statearr_26462[(10)] = inst_26423__$1);

return statearr_26462;
})();
var statearr_26463_26483 = state_26451__$1;
(statearr_26463_26483[(2)] = null);

(statearr_26463_26483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (9))){
var inst_26431 = (state_26451[(8)]);
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26451__$1,(11),out,inst_26431);
} else {
if((state_val_26452 === (5))){
var inst_26445 = cljs.core.async.close_BANG_.call(null,out);
var state_26451__$1 = state_26451;
var statearr_26464_26484 = state_26451__$1;
(statearr_26464_26484[(2)] = inst_26445);

(statearr_26464_26484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (10))){
var inst_26443 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
var statearr_26465_26485 = state_26451__$1;
(statearr_26465_26485[(2)] = inst_26443);

(statearr_26465_26485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (8))){
var inst_26423 = (state_26451[(10)]);
var inst_26430 = (state_26451[(7)]);
var inst_26432 = (state_26451[(9)]);
var inst_26431 = (state_26451[(8)]);
var inst_26435 = (function (){var c = inst_26432;
var v = inst_26431;
var vec__26428 = inst_26430;
var cs = inst_26423;
return ((function (c,v,vec__26428,cs,inst_26423,inst_26430,inst_26432,inst_26431,state_val_26452,c__19146__auto___26476,out){
return (function (p1__26419_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26419_SHARP_);
});
;})(c,v,vec__26428,cs,inst_26423,inst_26430,inst_26432,inst_26431,state_val_26452,c__19146__auto___26476,out))
})();
var inst_26436 = cljs.core.filterv.call(null,inst_26435,inst_26423);
var inst_26423__$1 = inst_26436;
var state_26451__$1 = (function (){var statearr_26466 = state_26451;
(statearr_26466[(10)] = inst_26423__$1);

return statearr_26466;
})();
var statearr_26467_26486 = state_26451__$1;
(statearr_26467_26486[(2)] = null);

(statearr_26467_26486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___26476,out))
;
return ((function (switch__19084__auto__,c__19146__auto___26476,out){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_26471 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26471[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_26471[(1)] = (1));

return statearr_26471;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_26451){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26472){if((e26472 instanceof Object)){
var ex__19088__auto__ = e26472;
var statearr_26473_26487 = state_26451;
(statearr_26473_26487[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26488 = state_26451;
state_26451 = G__26488;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_26451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_26451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___26476,out))
})();
var state__19148__auto__ = (function (){var statearr_26474 = f__19147__auto__.call(null);
(statearr_26474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___26476);

return statearr_26474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___26476,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__26490 = arguments.length;
switch (G__26490) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19146__auto___26538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___26538,out){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___26538,out){
return (function (state_26514){
var state_val_26515 = (state_26514[(1)]);
if((state_val_26515 === (7))){
var inst_26496 = (state_26514[(7)]);
var inst_26496__$1 = (state_26514[(2)]);
var inst_26497 = (inst_26496__$1 == null);
var inst_26498 = cljs.core.not.call(null,inst_26497);
var state_26514__$1 = (function (){var statearr_26516 = state_26514;
(statearr_26516[(7)] = inst_26496__$1);

return statearr_26516;
})();
if(inst_26498){
var statearr_26517_26539 = state_26514__$1;
(statearr_26517_26539[(1)] = (8));

} else {
var statearr_26518_26540 = state_26514__$1;
(statearr_26518_26540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (1))){
var inst_26491 = (0);
var state_26514__$1 = (function (){var statearr_26519 = state_26514;
(statearr_26519[(8)] = inst_26491);

return statearr_26519;
})();
var statearr_26520_26541 = state_26514__$1;
(statearr_26520_26541[(2)] = null);

(statearr_26520_26541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (4))){
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26514__$1,(7),ch);
} else {
if((state_val_26515 === (6))){
var inst_26509 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26521_26542 = state_26514__$1;
(statearr_26521_26542[(2)] = inst_26509);

(statearr_26521_26542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (3))){
var inst_26511 = (state_26514[(2)]);
var inst_26512 = cljs.core.async.close_BANG_.call(null,out);
var state_26514__$1 = (function (){var statearr_26522 = state_26514;
(statearr_26522[(9)] = inst_26511);

return statearr_26522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26514__$1,inst_26512);
} else {
if((state_val_26515 === (2))){
var inst_26491 = (state_26514[(8)]);
var inst_26493 = (inst_26491 < n);
var state_26514__$1 = state_26514;
if(cljs.core.truth_(inst_26493)){
var statearr_26523_26543 = state_26514__$1;
(statearr_26523_26543[(1)] = (4));

} else {
var statearr_26524_26544 = state_26514__$1;
(statearr_26524_26544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (11))){
var inst_26491 = (state_26514[(8)]);
var inst_26501 = (state_26514[(2)]);
var inst_26502 = (inst_26491 + (1));
var inst_26491__$1 = inst_26502;
var state_26514__$1 = (function (){var statearr_26525 = state_26514;
(statearr_26525[(8)] = inst_26491__$1);

(statearr_26525[(10)] = inst_26501);

return statearr_26525;
})();
var statearr_26526_26545 = state_26514__$1;
(statearr_26526_26545[(2)] = null);

(statearr_26526_26545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (9))){
var state_26514__$1 = state_26514;
var statearr_26527_26546 = state_26514__$1;
(statearr_26527_26546[(2)] = null);

(statearr_26527_26546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (5))){
var state_26514__$1 = state_26514;
var statearr_26528_26547 = state_26514__$1;
(statearr_26528_26547[(2)] = null);

(statearr_26528_26547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (10))){
var inst_26506 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26529_26548 = state_26514__$1;
(statearr_26529_26548[(2)] = inst_26506);

(statearr_26529_26548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (8))){
var inst_26496 = (state_26514[(7)]);
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26514__$1,(11),out,inst_26496);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___26538,out))
;
return ((function (switch__19084__auto__,c__19146__auto___26538,out){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_26533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26533[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_26533[(1)] = (1));

return statearr_26533;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_26514){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26534){if((e26534 instanceof Object)){
var ex__19088__auto__ = e26534;
var statearr_26535_26549 = state_26514;
(statearr_26535_26549[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26550 = state_26514;
state_26514 = G__26550;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_26514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_26514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___26538,out))
})();
var state__19148__auto__ = (function (){var statearr_26536 = f__19147__auto__.call(null);
(statearr_26536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___26538);

return statearr_26536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___26538,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26558 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26558 = (function (ch,f,map_LT_,meta26559){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26559 = meta26559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26558.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26558.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26561 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26561 = (function (fn1,_,meta26559,map_LT_,f,ch,meta26562){
this.fn1 = fn1;
this._ = _;
this.meta26559 = meta26559;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26562 = meta26562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26551_SHARP_){
return f1.call(null,(((p1__26551_SHARP_ == null))?null:self__.f.call(null,p1__26551_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26563){
var self__ = this;
var _26563__$1 = this;
return self__.meta26562;
});})(___$1))
;

cljs.core.async.t26561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26563,meta26562__$1){
var self__ = this;
var _26563__$1 = this;
return (new cljs.core.async.t26561(self__.fn1,self__._,self__.meta26559,self__.map_LT_,self__.f,self__.ch,meta26562__$1));
});})(___$1))
;

cljs.core.async.t26561.cljs$lang$type = true;

cljs.core.async.t26561.cljs$lang$ctorStr = "cljs.core.async/t26561";

cljs.core.async.t26561.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t26561");
});})(___$1))
;

cljs.core.async.__GT_t26561 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26561(fn1__$1,___$2,meta26559__$1,map_LT___$1,f__$1,ch__$1,meta26562){
return (new cljs.core.async.t26561(fn1__$1,___$2,meta26559__$1,map_LT___$1,f__$1,ch__$1,meta26562));
});})(___$1))
;

}

return (new cljs.core.async.t26561(fn1,___$1,self__.meta26559,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16131__auto__ = ret;
if(cljs.core.truth_(and__16131__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16131__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26558.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26558.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26560){
var self__ = this;
var _26560__$1 = this;
return self__.meta26559;
});

cljs.core.async.t26558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26560,meta26559__$1){
var self__ = this;
var _26560__$1 = this;
return (new cljs.core.async.t26558(self__.ch,self__.f,self__.map_LT_,meta26559__$1));
});

cljs.core.async.t26558.cljs$lang$type = true;

cljs.core.async.t26558.cljs$lang$ctorStr = "cljs.core.async/t26558";

cljs.core.async.t26558.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t26558");
});

cljs.core.async.__GT_t26558 = (function cljs$core$async$map_LT__$___GT_t26558(ch__$1,f__$1,map_LT___$1,meta26559){
return (new cljs.core.async.t26558(ch__$1,f__$1,map_LT___$1,meta26559));
});

}

return (new cljs.core.async.t26558(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26567 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26567 = (function (ch,f,map_GT_,meta26568){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26568 = meta26568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26567.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26567.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26567.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26569){
var self__ = this;
var _26569__$1 = this;
return self__.meta26568;
});

cljs.core.async.t26567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26569,meta26568__$1){
var self__ = this;
var _26569__$1 = this;
return (new cljs.core.async.t26567(self__.ch,self__.f,self__.map_GT_,meta26568__$1));
});

cljs.core.async.t26567.cljs$lang$type = true;

cljs.core.async.t26567.cljs$lang$ctorStr = "cljs.core.async/t26567";

cljs.core.async.t26567.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t26567");
});

cljs.core.async.__GT_t26567 = (function cljs$core$async$map_GT__$___GT_t26567(ch__$1,f__$1,map_GT___$1,meta26568){
return (new cljs.core.async.t26567(ch__$1,f__$1,map_GT___$1,meta26568));
});

}

return (new cljs.core.async.t26567(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26573 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26573 = (function (ch,p,filter_GT_,meta26574){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26574 = meta26574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26573.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26573.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26573.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26573.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26575){
var self__ = this;
var _26575__$1 = this;
return self__.meta26574;
});

cljs.core.async.t26573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26575,meta26574__$1){
var self__ = this;
var _26575__$1 = this;
return (new cljs.core.async.t26573(self__.ch,self__.p,self__.filter_GT_,meta26574__$1));
});

cljs.core.async.t26573.cljs$lang$type = true;

cljs.core.async.t26573.cljs$lang$ctorStr = "cljs.core.async/t26573";

cljs.core.async.t26573.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__,opt__16724__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"cljs.core.async/t26573");
});

cljs.core.async.__GT_t26573 = (function cljs$core$async$filter_GT__$___GT_t26573(ch__$1,p__$1,filter_GT___$1,meta26574){
return (new cljs.core.async.t26573(ch__$1,p__$1,filter_GT___$1,meta26574));
});

}

return (new cljs.core.async.t26573(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__26577 = arguments.length;
switch (G__26577) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19146__auto___26620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___26620,out){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___26620,out){
return (function (state_26598){
var state_val_26599 = (state_26598[(1)]);
if((state_val_26599 === (7))){
var inst_26594 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
var statearr_26600_26621 = state_26598__$1;
(statearr_26600_26621[(2)] = inst_26594);

(statearr_26600_26621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (1))){
var state_26598__$1 = state_26598;
var statearr_26601_26622 = state_26598__$1;
(statearr_26601_26622[(2)] = null);

(statearr_26601_26622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (4))){
var inst_26580 = (state_26598[(7)]);
var inst_26580__$1 = (state_26598[(2)]);
var inst_26581 = (inst_26580__$1 == null);
var state_26598__$1 = (function (){var statearr_26602 = state_26598;
(statearr_26602[(7)] = inst_26580__$1);

return statearr_26602;
})();
if(cljs.core.truth_(inst_26581)){
var statearr_26603_26623 = state_26598__$1;
(statearr_26603_26623[(1)] = (5));

} else {
var statearr_26604_26624 = state_26598__$1;
(statearr_26604_26624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (6))){
var inst_26580 = (state_26598[(7)]);
var inst_26585 = p.call(null,inst_26580);
var state_26598__$1 = state_26598;
if(cljs.core.truth_(inst_26585)){
var statearr_26605_26625 = state_26598__$1;
(statearr_26605_26625[(1)] = (8));

} else {
var statearr_26606_26626 = state_26598__$1;
(statearr_26606_26626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (3))){
var inst_26596 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26598__$1,inst_26596);
} else {
if((state_val_26599 === (2))){
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26598__$1,(4),ch);
} else {
if((state_val_26599 === (11))){
var inst_26588 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
var statearr_26607_26627 = state_26598__$1;
(statearr_26607_26627[(2)] = inst_26588);

(statearr_26607_26627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (9))){
var state_26598__$1 = state_26598;
var statearr_26608_26628 = state_26598__$1;
(statearr_26608_26628[(2)] = null);

(statearr_26608_26628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (5))){
var inst_26583 = cljs.core.async.close_BANG_.call(null,out);
var state_26598__$1 = state_26598;
var statearr_26609_26629 = state_26598__$1;
(statearr_26609_26629[(2)] = inst_26583);

(statearr_26609_26629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (10))){
var inst_26591 = (state_26598[(2)]);
var state_26598__$1 = (function (){var statearr_26610 = state_26598;
(statearr_26610[(8)] = inst_26591);

return statearr_26610;
})();
var statearr_26611_26630 = state_26598__$1;
(statearr_26611_26630[(2)] = null);

(statearr_26611_26630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (8))){
var inst_26580 = (state_26598[(7)]);
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26598__$1,(11),out,inst_26580);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___26620,out))
;
return ((function (switch__19084__auto__,c__19146__auto___26620,out){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_26615 = [null,null,null,null,null,null,null,null,null];
(statearr_26615[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_26615[(1)] = (1));

return statearr_26615;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_26598){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26616){if((e26616 instanceof Object)){
var ex__19088__auto__ = e26616;
var statearr_26617_26631 = state_26598;
(statearr_26617_26631[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26632 = state_26598;
state_26598 = G__26632;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_26598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_26598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___26620,out))
})();
var state__19148__auto__ = (function (){var statearr_26618 = f__19147__auto__.call(null);
(statearr_26618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___26620);

return statearr_26618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___26620,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__26634 = arguments.length;
switch (G__26634) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto__){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto__){
return (function (state_26801){
var state_val_26802 = (state_26801[(1)]);
if((state_val_26802 === (7))){
var inst_26797 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26803_26844 = state_26801__$1;
(statearr_26803_26844[(2)] = inst_26797);

(statearr_26803_26844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (20))){
var inst_26767 = (state_26801[(7)]);
var inst_26778 = (state_26801[(2)]);
var inst_26779 = cljs.core.next.call(null,inst_26767);
var inst_26753 = inst_26779;
var inst_26754 = null;
var inst_26755 = (0);
var inst_26756 = (0);
var state_26801__$1 = (function (){var statearr_26804 = state_26801;
(statearr_26804[(8)] = inst_26754);

(statearr_26804[(9)] = inst_26755);

(statearr_26804[(10)] = inst_26778);

(statearr_26804[(11)] = inst_26753);

(statearr_26804[(12)] = inst_26756);

return statearr_26804;
})();
var statearr_26805_26845 = state_26801__$1;
(statearr_26805_26845[(2)] = null);

(statearr_26805_26845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (1))){
var state_26801__$1 = state_26801;
var statearr_26806_26846 = state_26801__$1;
(statearr_26806_26846[(2)] = null);

(statearr_26806_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (4))){
var inst_26742 = (state_26801[(13)]);
var inst_26742__$1 = (state_26801[(2)]);
var inst_26743 = (inst_26742__$1 == null);
var state_26801__$1 = (function (){var statearr_26807 = state_26801;
(statearr_26807[(13)] = inst_26742__$1);

return statearr_26807;
})();
if(cljs.core.truth_(inst_26743)){
var statearr_26808_26847 = state_26801__$1;
(statearr_26808_26847[(1)] = (5));

} else {
var statearr_26809_26848 = state_26801__$1;
(statearr_26809_26848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (15))){
var state_26801__$1 = state_26801;
var statearr_26813_26849 = state_26801__$1;
(statearr_26813_26849[(2)] = null);

(statearr_26813_26849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (21))){
var state_26801__$1 = state_26801;
var statearr_26814_26850 = state_26801__$1;
(statearr_26814_26850[(2)] = null);

(statearr_26814_26850[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (13))){
var inst_26754 = (state_26801[(8)]);
var inst_26755 = (state_26801[(9)]);
var inst_26753 = (state_26801[(11)]);
var inst_26756 = (state_26801[(12)]);
var inst_26763 = (state_26801[(2)]);
var inst_26764 = (inst_26756 + (1));
var tmp26810 = inst_26754;
var tmp26811 = inst_26755;
var tmp26812 = inst_26753;
var inst_26753__$1 = tmp26812;
var inst_26754__$1 = tmp26810;
var inst_26755__$1 = tmp26811;
var inst_26756__$1 = inst_26764;
var state_26801__$1 = (function (){var statearr_26815 = state_26801;
(statearr_26815[(8)] = inst_26754__$1);

(statearr_26815[(9)] = inst_26755__$1);

(statearr_26815[(14)] = inst_26763);

(statearr_26815[(11)] = inst_26753__$1);

(statearr_26815[(12)] = inst_26756__$1);

return statearr_26815;
})();
var statearr_26816_26851 = state_26801__$1;
(statearr_26816_26851[(2)] = null);

(statearr_26816_26851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (22))){
var state_26801__$1 = state_26801;
var statearr_26817_26852 = state_26801__$1;
(statearr_26817_26852[(2)] = null);

(statearr_26817_26852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (6))){
var inst_26742 = (state_26801[(13)]);
var inst_26751 = f.call(null,inst_26742);
var inst_26752 = cljs.core.seq.call(null,inst_26751);
var inst_26753 = inst_26752;
var inst_26754 = null;
var inst_26755 = (0);
var inst_26756 = (0);
var state_26801__$1 = (function (){var statearr_26818 = state_26801;
(statearr_26818[(8)] = inst_26754);

(statearr_26818[(9)] = inst_26755);

(statearr_26818[(11)] = inst_26753);

(statearr_26818[(12)] = inst_26756);

return statearr_26818;
})();
var statearr_26819_26853 = state_26801__$1;
(statearr_26819_26853[(2)] = null);

(statearr_26819_26853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (17))){
var inst_26767 = (state_26801[(7)]);
var inst_26771 = cljs.core.chunk_first.call(null,inst_26767);
var inst_26772 = cljs.core.chunk_rest.call(null,inst_26767);
var inst_26773 = cljs.core.count.call(null,inst_26771);
var inst_26753 = inst_26772;
var inst_26754 = inst_26771;
var inst_26755 = inst_26773;
var inst_26756 = (0);
var state_26801__$1 = (function (){var statearr_26820 = state_26801;
(statearr_26820[(8)] = inst_26754);

(statearr_26820[(9)] = inst_26755);

(statearr_26820[(11)] = inst_26753);

(statearr_26820[(12)] = inst_26756);

return statearr_26820;
})();
var statearr_26821_26854 = state_26801__$1;
(statearr_26821_26854[(2)] = null);

(statearr_26821_26854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (3))){
var inst_26799 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26801__$1,inst_26799);
} else {
if((state_val_26802 === (12))){
var inst_26787 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26822_26855 = state_26801__$1;
(statearr_26822_26855[(2)] = inst_26787);

(statearr_26822_26855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (2))){
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26801__$1,(4),in$);
} else {
if((state_val_26802 === (23))){
var inst_26795 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26823_26856 = state_26801__$1;
(statearr_26823_26856[(2)] = inst_26795);

(statearr_26823_26856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (19))){
var inst_26782 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26824_26857 = state_26801__$1;
(statearr_26824_26857[(2)] = inst_26782);

(statearr_26824_26857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (11))){
var inst_26767 = (state_26801[(7)]);
var inst_26753 = (state_26801[(11)]);
var inst_26767__$1 = cljs.core.seq.call(null,inst_26753);
var state_26801__$1 = (function (){var statearr_26825 = state_26801;
(statearr_26825[(7)] = inst_26767__$1);

return statearr_26825;
})();
if(inst_26767__$1){
var statearr_26826_26858 = state_26801__$1;
(statearr_26826_26858[(1)] = (14));

} else {
var statearr_26827_26859 = state_26801__$1;
(statearr_26827_26859[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (9))){
var inst_26789 = (state_26801[(2)]);
var inst_26790 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26801__$1 = (function (){var statearr_26828 = state_26801;
(statearr_26828[(15)] = inst_26789);

return statearr_26828;
})();
if(cljs.core.truth_(inst_26790)){
var statearr_26829_26860 = state_26801__$1;
(statearr_26829_26860[(1)] = (21));

} else {
var statearr_26830_26861 = state_26801__$1;
(statearr_26830_26861[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (5))){
var inst_26745 = cljs.core.async.close_BANG_.call(null,out);
var state_26801__$1 = state_26801;
var statearr_26831_26862 = state_26801__$1;
(statearr_26831_26862[(2)] = inst_26745);

(statearr_26831_26862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (14))){
var inst_26767 = (state_26801[(7)]);
var inst_26769 = cljs.core.chunked_seq_QMARK_.call(null,inst_26767);
var state_26801__$1 = state_26801;
if(inst_26769){
var statearr_26832_26863 = state_26801__$1;
(statearr_26832_26863[(1)] = (17));

} else {
var statearr_26833_26864 = state_26801__$1;
(statearr_26833_26864[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (16))){
var inst_26785 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26834_26865 = state_26801__$1;
(statearr_26834_26865[(2)] = inst_26785);

(statearr_26834_26865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (10))){
var inst_26754 = (state_26801[(8)]);
var inst_26756 = (state_26801[(12)]);
var inst_26761 = cljs.core._nth.call(null,inst_26754,inst_26756);
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26801__$1,(13),out,inst_26761);
} else {
if((state_val_26802 === (18))){
var inst_26767 = (state_26801[(7)]);
var inst_26776 = cljs.core.first.call(null,inst_26767);
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26801__$1,(20),out,inst_26776);
} else {
if((state_val_26802 === (8))){
var inst_26755 = (state_26801[(9)]);
var inst_26756 = (state_26801[(12)]);
var inst_26758 = (inst_26756 < inst_26755);
var inst_26759 = inst_26758;
var state_26801__$1 = state_26801;
if(cljs.core.truth_(inst_26759)){
var statearr_26835_26866 = state_26801__$1;
(statearr_26835_26866[(1)] = (10));

} else {
var statearr_26836_26867 = state_26801__$1;
(statearr_26836_26867[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto__))
;
return ((function (switch__19084__auto__,c__19146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19085__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19085__auto____0 = (function (){
var statearr_26840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26840[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19085__auto__);

(statearr_26840[(1)] = (1));

return statearr_26840;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19085__auto____1 = (function (state_26801){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26841){if((e26841 instanceof Object)){
var ex__19088__auto__ = e26841;
var statearr_26842_26868 = state_26801;
(statearr_26842_26868[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26869 = state_26801;
state_26801 = G__26869;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19085__auto__ = function(state_26801){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19085__auto____1.call(this,state_26801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19085__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19085__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto__))
})();
var state__19148__auto__ = (function (){var statearr_26843 = f__19147__auto__.call(null);
(statearr_26843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto__);

return statearr_26843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto__))
);

return c__19146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__26871 = arguments.length;
switch (G__26871) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__26874 = arguments.length;
switch (G__26874) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__26877 = arguments.length;
switch (G__26877) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19146__auto___26927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___26927,out){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___26927,out){
return (function (state_26901){
var state_val_26902 = (state_26901[(1)]);
if((state_val_26902 === (7))){
var inst_26896 = (state_26901[(2)]);
var state_26901__$1 = state_26901;
var statearr_26903_26928 = state_26901__$1;
(statearr_26903_26928[(2)] = inst_26896);

(statearr_26903_26928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26902 === (1))){
var inst_26878 = null;
var state_26901__$1 = (function (){var statearr_26904 = state_26901;
(statearr_26904[(7)] = inst_26878);

return statearr_26904;
})();
var statearr_26905_26929 = state_26901__$1;
(statearr_26905_26929[(2)] = null);

(statearr_26905_26929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26902 === (4))){
var inst_26881 = (state_26901[(8)]);
var inst_26881__$1 = (state_26901[(2)]);
var inst_26882 = (inst_26881__$1 == null);
var inst_26883 = cljs.core.not.call(null,inst_26882);
var state_26901__$1 = (function (){var statearr_26906 = state_26901;
(statearr_26906[(8)] = inst_26881__$1);

return statearr_26906;
})();
if(inst_26883){
var statearr_26907_26930 = state_26901__$1;
(statearr_26907_26930[(1)] = (5));

} else {
var statearr_26908_26931 = state_26901__$1;
(statearr_26908_26931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26902 === (6))){
var state_26901__$1 = state_26901;
var statearr_26909_26932 = state_26901__$1;
(statearr_26909_26932[(2)] = null);

(statearr_26909_26932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26902 === (3))){
var inst_26898 = (state_26901[(2)]);
var inst_26899 = cljs.core.async.close_BANG_.call(null,out);
var state_26901__$1 = (function (){var statearr_26910 = state_26901;
(statearr_26910[(9)] = inst_26898);

return statearr_26910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26901__$1,inst_26899);
} else {
if((state_val_26902 === (2))){
var state_26901__$1 = state_26901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26901__$1,(4),ch);
} else {
if((state_val_26902 === (11))){
var inst_26881 = (state_26901[(8)]);
var inst_26890 = (state_26901[(2)]);
var inst_26878 = inst_26881;
var state_26901__$1 = (function (){var statearr_26911 = state_26901;
(statearr_26911[(10)] = inst_26890);

(statearr_26911[(7)] = inst_26878);

return statearr_26911;
})();
var statearr_26912_26933 = state_26901__$1;
(statearr_26912_26933[(2)] = null);

(statearr_26912_26933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26902 === (9))){
var inst_26881 = (state_26901[(8)]);
var state_26901__$1 = state_26901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26901__$1,(11),out,inst_26881);
} else {
if((state_val_26902 === (5))){
var inst_26881 = (state_26901[(8)]);
var inst_26878 = (state_26901[(7)]);
var inst_26885 = cljs.core._EQ_.call(null,inst_26881,inst_26878);
var state_26901__$1 = state_26901;
if(inst_26885){
var statearr_26914_26934 = state_26901__$1;
(statearr_26914_26934[(1)] = (8));

} else {
var statearr_26915_26935 = state_26901__$1;
(statearr_26915_26935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26902 === (10))){
var inst_26893 = (state_26901[(2)]);
var state_26901__$1 = state_26901;
var statearr_26916_26936 = state_26901__$1;
(statearr_26916_26936[(2)] = inst_26893);

(statearr_26916_26936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26902 === (8))){
var inst_26878 = (state_26901[(7)]);
var tmp26913 = inst_26878;
var inst_26878__$1 = tmp26913;
var state_26901__$1 = (function (){var statearr_26917 = state_26901;
(statearr_26917[(7)] = inst_26878__$1);

return statearr_26917;
})();
var statearr_26918_26937 = state_26901__$1;
(statearr_26918_26937[(2)] = null);

(statearr_26918_26937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___26927,out))
;
return ((function (switch__19084__auto__,c__19146__auto___26927,out){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_26901){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__19088__auto__ = e26923;
var statearr_26924_26938 = state_26901;
(statearr_26924_26938[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26939 = state_26901;
state_26901 = G__26939;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_26901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_26901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___26927,out))
})();
var state__19148__auto__ = (function (){var statearr_26925 = f__19147__auto__.call(null);
(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___26927);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___26927,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__26941 = arguments.length;
switch (G__26941) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19146__auto___27010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___27010,out){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___27010,out){
return (function (state_26979){
var state_val_26980 = (state_26979[(1)]);
if((state_val_26980 === (7))){
var inst_26975 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_26981_27011 = state_26979__$1;
(statearr_26981_27011[(2)] = inst_26975);

(statearr_26981_27011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (1))){
var inst_26942 = (new Array(n));
var inst_26943 = inst_26942;
var inst_26944 = (0);
var state_26979__$1 = (function (){var statearr_26982 = state_26979;
(statearr_26982[(7)] = inst_26943);

(statearr_26982[(8)] = inst_26944);

return statearr_26982;
})();
var statearr_26983_27012 = state_26979__$1;
(statearr_26983_27012[(2)] = null);

(statearr_26983_27012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (4))){
var inst_26947 = (state_26979[(9)]);
var inst_26947__$1 = (state_26979[(2)]);
var inst_26948 = (inst_26947__$1 == null);
var inst_26949 = cljs.core.not.call(null,inst_26948);
var state_26979__$1 = (function (){var statearr_26984 = state_26979;
(statearr_26984[(9)] = inst_26947__$1);

return statearr_26984;
})();
if(inst_26949){
var statearr_26985_27013 = state_26979__$1;
(statearr_26985_27013[(1)] = (5));

} else {
var statearr_26986_27014 = state_26979__$1;
(statearr_26986_27014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (15))){
var inst_26969 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_26987_27015 = state_26979__$1;
(statearr_26987_27015[(2)] = inst_26969);

(statearr_26987_27015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (13))){
var state_26979__$1 = state_26979;
var statearr_26988_27016 = state_26979__$1;
(statearr_26988_27016[(2)] = null);

(statearr_26988_27016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (6))){
var inst_26944 = (state_26979[(8)]);
var inst_26965 = (inst_26944 > (0));
var state_26979__$1 = state_26979;
if(cljs.core.truth_(inst_26965)){
var statearr_26989_27017 = state_26979__$1;
(statearr_26989_27017[(1)] = (12));

} else {
var statearr_26990_27018 = state_26979__$1;
(statearr_26990_27018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (3))){
var inst_26977 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26979__$1,inst_26977);
} else {
if((state_val_26980 === (12))){
var inst_26943 = (state_26979[(7)]);
var inst_26967 = cljs.core.vec.call(null,inst_26943);
var state_26979__$1 = state_26979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26979__$1,(15),out,inst_26967);
} else {
if((state_val_26980 === (2))){
var state_26979__$1 = state_26979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26979__$1,(4),ch);
} else {
if((state_val_26980 === (11))){
var inst_26959 = (state_26979[(2)]);
var inst_26960 = (new Array(n));
var inst_26943 = inst_26960;
var inst_26944 = (0);
var state_26979__$1 = (function (){var statearr_26991 = state_26979;
(statearr_26991[(7)] = inst_26943);

(statearr_26991[(10)] = inst_26959);

(statearr_26991[(8)] = inst_26944);

return statearr_26991;
})();
var statearr_26992_27019 = state_26979__$1;
(statearr_26992_27019[(2)] = null);

(statearr_26992_27019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (9))){
var inst_26943 = (state_26979[(7)]);
var inst_26957 = cljs.core.vec.call(null,inst_26943);
var state_26979__$1 = state_26979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26979__$1,(11),out,inst_26957);
} else {
if((state_val_26980 === (5))){
var inst_26947 = (state_26979[(9)]);
var inst_26943 = (state_26979[(7)]);
var inst_26952 = (state_26979[(11)]);
var inst_26944 = (state_26979[(8)]);
var inst_26951 = (inst_26943[inst_26944] = inst_26947);
var inst_26952__$1 = (inst_26944 + (1));
var inst_26953 = (inst_26952__$1 < n);
var state_26979__$1 = (function (){var statearr_26993 = state_26979;
(statearr_26993[(11)] = inst_26952__$1);

(statearr_26993[(12)] = inst_26951);

return statearr_26993;
})();
if(cljs.core.truth_(inst_26953)){
var statearr_26994_27020 = state_26979__$1;
(statearr_26994_27020[(1)] = (8));

} else {
var statearr_26995_27021 = state_26979__$1;
(statearr_26995_27021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (14))){
var inst_26972 = (state_26979[(2)]);
var inst_26973 = cljs.core.async.close_BANG_.call(null,out);
var state_26979__$1 = (function (){var statearr_26997 = state_26979;
(statearr_26997[(13)] = inst_26972);

return statearr_26997;
})();
var statearr_26998_27022 = state_26979__$1;
(statearr_26998_27022[(2)] = inst_26973);

(statearr_26998_27022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (10))){
var inst_26963 = (state_26979[(2)]);
var state_26979__$1 = state_26979;
var statearr_26999_27023 = state_26979__$1;
(statearr_26999_27023[(2)] = inst_26963);

(statearr_26999_27023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26980 === (8))){
var inst_26943 = (state_26979[(7)]);
var inst_26952 = (state_26979[(11)]);
var tmp26996 = inst_26943;
var inst_26943__$1 = tmp26996;
var inst_26944 = inst_26952;
var state_26979__$1 = (function (){var statearr_27000 = state_26979;
(statearr_27000[(7)] = inst_26943__$1);

(statearr_27000[(8)] = inst_26944);

return statearr_27000;
})();
var statearr_27001_27024 = state_26979__$1;
(statearr_27001_27024[(2)] = null);

(statearr_27001_27024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___27010,out))
;
return ((function (switch__19084__auto__,c__19146__auto___27010,out){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_27005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27005[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_27005[(1)] = (1));

return statearr_27005;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_26979){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_26979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e27006){if((e27006 instanceof Object)){
var ex__19088__auto__ = e27006;
var statearr_27007_27025 = state_26979;
(statearr_27007_27025[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27026 = state_26979;
state_26979 = G__27026;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_26979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_26979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___27010,out))
})();
var state__19148__auto__ = (function (){var statearr_27008 = f__19147__auto__.call(null);
(statearr_27008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___27010);

return statearr_27008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___27010,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__27028 = arguments.length;
switch (G__27028) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19146__auto___27101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19146__auto___27101,out){
return (function (){
var f__19147__auto__ = (function (){var switch__19084__auto__ = ((function (c__19146__auto___27101,out){
return (function (state_27070){
var state_val_27071 = (state_27070[(1)]);
if((state_val_27071 === (7))){
var inst_27066 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27072_27102 = state_27070__$1;
(statearr_27072_27102[(2)] = inst_27066);

(statearr_27072_27102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (1))){
var inst_27029 = [];
var inst_27030 = inst_27029;
var inst_27031 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27070__$1 = (function (){var statearr_27073 = state_27070;
(statearr_27073[(7)] = inst_27030);

(statearr_27073[(8)] = inst_27031);

return statearr_27073;
})();
var statearr_27074_27103 = state_27070__$1;
(statearr_27074_27103[(2)] = null);

(statearr_27074_27103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (4))){
var inst_27034 = (state_27070[(9)]);
var inst_27034__$1 = (state_27070[(2)]);
var inst_27035 = (inst_27034__$1 == null);
var inst_27036 = cljs.core.not.call(null,inst_27035);
var state_27070__$1 = (function (){var statearr_27075 = state_27070;
(statearr_27075[(9)] = inst_27034__$1);

return statearr_27075;
})();
if(inst_27036){
var statearr_27076_27104 = state_27070__$1;
(statearr_27076_27104[(1)] = (5));

} else {
var statearr_27077_27105 = state_27070__$1;
(statearr_27077_27105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (15))){
var inst_27060 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27078_27106 = state_27070__$1;
(statearr_27078_27106[(2)] = inst_27060);

(statearr_27078_27106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (13))){
var state_27070__$1 = state_27070;
var statearr_27079_27107 = state_27070__$1;
(statearr_27079_27107[(2)] = null);

(statearr_27079_27107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (6))){
var inst_27030 = (state_27070[(7)]);
var inst_27055 = inst_27030.length;
var inst_27056 = (inst_27055 > (0));
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_27056)){
var statearr_27080_27108 = state_27070__$1;
(statearr_27080_27108[(1)] = (12));

} else {
var statearr_27081_27109 = state_27070__$1;
(statearr_27081_27109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (3))){
var inst_27068 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27070__$1,inst_27068);
} else {
if((state_val_27071 === (12))){
var inst_27030 = (state_27070[(7)]);
var inst_27058 = cljs.core.vec.call(null,inst_27030);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27070__$1,(15),out,inst_27058);
} else {
if((state_val_27071 === (2))){
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27070__$1,(4),ch);
} else {
if((state_val_27071 === (11))){
var inst_27034 = (state_27070[(9)]);
var inst_27038 = (state_27070[(10)]);
var inst_27048 = (state_27070[(2)]);
var inst_27049 = [];
var inst_27050 = inst_27049.push(inst_27034);
var inst_27030 = inst_27049;
var inst_27031 = inst_27038;
var state_27070__$1 = (function (){var statearr_27082 = state_27070;
(statearr_27082[(11)] = inst_27050);

(statearr_27082[(7)] = inst_27030);

(statearr_27082[(12)] = inst_27048);

(statearr_27082[(8)] = inst_27031);

return statearr_27082;
})();
var statearr_27083_27110 = state_27070__$1;
(statearr_27083_27110[(2)] = null);

(statearr_27083_27110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (9))){
var inst_27030 = (state_27070[(7)]);
var inst_27046 = cljs.core.vec.call(null,inst_27030);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27070__$1,(11),out,inst_27046);
} else {
if((state_val_27071 === (5))){
var inst_27034 = (state_27070[(9)]);
var inst_27031 = (state_27070[(8)]);
var inst_27038 = (state_27070[(10)]);
var inst_27038__$1 = f.call(null,inst_27034);
var inst_27039 = cljs.core._EQ_.call(null,inst_27038__$1,inst_27031);
var inst_27040 = cljs.core.keyword_identical_QMARK_.call(null,inst_27031,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27041 = (inst_27039) || (inst_27040);
var state_27070__$1 = (function (){var statearr_27084 = state_27070;
(statearr_27084[(10)] = inst_27038__$1);

return statearr_27084;
})();
if(cljs.core.truth_(inst_27041)){
var statearr_27085_27111 = state_27070__$1;
(statearr_27085_27111[(1)] = (8));

} else {
var statearr_27086_27112 = state_27070__$1;
(statearr_27086_27112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (14))){
var inst_27063 = (state_27070[(2)]);
var inst_27064 = cljs.core.async.close_BANG_.call(null,out);
var state_27070__$1 = (function (){var statearr_27088 = state_27070;
(statearr_27088[(13)] = inst_27063);

return statearr_27088;
})();
var statearr_27089_27113 = state_27070__$1;
(statearr_27089_27113[(2)] = inst_27064);

(statearr_27089_27113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (10))){
var inst_27053 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27090_27114 = state_27070__$1;
(statearr_27090_27114[(2)] = inst_27053);

(statearr_27090_27114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (8))){
var inst_27034 = (state_27070[(9)]);
var inst_27030 = (state_27070[(7)]);
var inst_27038 = (state_27070[(10)]);
var inst_27043 = inst_27030.push(inst_27034);
var tmp27087 = inst_27030;
var inst_27030__$1 = tmp27087;
var inst_27031 = inst_27038;
var state_27070__$1 = (function (){var statearr_27091 = state_27070;
(statearr_27091[(7)] = inst_27030__$1);

(statearr_27091[(8)] = inst_27031);

(statearr_27091[(14)] = inst_27043);

return statearr_27091;
})();
var statearr_27092_27115 = state_27070__$1;
(statearr_27092_27115[(2)] = null);

(statearr_27092_27115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19146__auto___27101,out))
;
return ((function (switch__19084__auto__,c__19146__auto___27101,out){
return (function() {
var cljs$core$async$state_machine__19085__auto__ = null;
var cljs$core$async$state_machine__19085__auto____0 = (function (){
var statearr_27096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27096[(0)] = cljs$core$async$state_machine__19085__auto__);

(statearr_27096[(1)] = (1));

return statearr_27096;
});
var cljs$core$async$state_machine__19085__auto____1 = (function (state_27070){
while(true){
var ret_value__19086__auto__ = (function (){try{while(true){
var result__19087__auto__ = switch__19084__auto__.call(null,state_27070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19087__auto__;
}
break;
}
}catch (e27097){if((e27097 instanceof Object)){
var ex__19088__auto__ = e27097;
var statearr_27098_27116 = state_27070;
(statearr_27098_27116[(5)] = ex__19088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27117 = state_27070;
state_27070 = G__27117;
continue;
} else {
return ret_value__19086__auto__;
}
break;
}
});
cljs$core$async$state_machine__19085__auto__ = function(state_27070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19085__auto____1.call(this,state_27070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19085__auto____0;
cljs$core$async$state_machine__19085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19085__auto____1;
return cljs$core$async$state_machine__19085__auto__;
})()
;})(switch__19084__auto__,c__19146__auto___27101,out))
})();
var state__19148__auto__ = (function (){var statearr_27099 = f__19147__auto__.call(null);
(statearr_27099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19146__auto___27101);

return statearr_27099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19148__auto__);
});})(c__19146__auto___27101,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map