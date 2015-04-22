// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t10831 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10831 = (function (f,fn_handler,meta10832){
this.f = f;
this.fn_handler = fn_handler;
this.meta10832 = meta10832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t10831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10833){
var self__ = this;
var _10833__$1 = this;
return self__.meta10832;
});

cljs.core.async.t10831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10833,meta10832__$1){
var self__ = this;
var _10833__$1 = this;
return (new cljs.core.async.t10831(self__.f,self__.fn_handler,meta10832__$1));
});

cljs.core.async.t10831.cljs$lang$type = true;

cljs.core.async.t10831.cljs$lang$ctorStr = "cljs.core.async/t10831";

cljs.core.async.t10831.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t10831");
});

cljs.core.async.__GT_t10831 = (function cljs$core$async$fn_handler_$___GT_t10831(f__$1,fn_handler__$1,meta10832){
return (new cljs.core.async.t10831(f__$1,fn_handler__$1,meta10832));
});

}

return (new cljs.core.async.t10831(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10835 = buff;
if(G__10835){
var bit__4796__auto__ = null;
if(cljs.core.truth_((function (){var or__4122__auto__ = bit__4796__auto__;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return G__10835.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__10835.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10835);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10835);
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
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
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
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
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
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10836 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10836);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10836,ret){
return (function (){
return fn1.call(null,val_10836);
});})(val_10836,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
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
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
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
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5007__auto___10837 = n;
var x_10838 = (0);
while(true){
if((x_10838 < n__5007__auto___10837)){
(a[x_10838] = (0));

var G__10839 = (x_10838 + (1));
x_10838 = G__10839;
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

var G__10840 = (i + (1));
i = G__10840;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t10844 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10844 = (function (flag,alt_flag,meta10845){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10845 = meta10845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t10844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t10844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10846){
var self__ = this;
var _10846__$1 = this;
return self__.meta10845;
});})(flag))
;

cljs.core.async.t10844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10846,meta10845__$1){
var self__ = this;
var _10846__$1 = this;
return (new cljs.core.async.t10844(self__.flag,self__.alt_flag,meta10845__$1));
});})(flag))
;

cljs.core.async.t10844.cljs$lang$type = true;

cljs.core.async.t10844.cljs$lang$ctorStr = "cljs.core.async/t10844";

cljs.core.async.t10844.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t10844");
});})(flag))
;

cljs.core.async.__GT_t10844 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t10844(flag__$1,alt_flag__$1,meta10845){
return (new cljs.core.async.t10844(flag__$1,alt_flag__$1,meta10845));
});})(flag))
;

}

return (new cljs.core.async.t10844(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t10850 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10850 = (function (cb,flag,alt_handler,meta10851){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10851 = meta10851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t10850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10852){
var self__ = this;
var _10852__$1 = this;
return self__.meta10851;
});

cljs.core.async.t10850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10852,meta10851__$1){
var self__ = this;
var _10852__$1 = this;
return (new cljs.core.async.t10850(self__.cb,self__.flag,self__.alt_handler,meta10851__$1));
});

cljs.core.async.t10850.cljs$lang$type = true;

cljs.core.async.t10850.cljs$lang$ctorStr = "cljs.core.async/t10850";

cljs.core.async.t10850.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t10850");
});

cljs.core.async.__GT_t10850 = (function cljs$core$async$alt_handler_$___GT_t10850(cb__$1,flag__$1,alt_handler__$1,meta10851){
return (new cljs.core.async.t10850(cb__$1,flag__$1,alt_handler__$1,meta10851));
});

}

return (new cljs.core.async.t10850(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10853_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10853_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10854_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10854_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4122__auto__ = wport;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10855 = (i + (1));
i = G__10855;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4122__auto__ = ret;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4110__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4110__auto__;
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
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__10856){
var map__10858 = p__10856;
var map__10858__$1 = ((cljs.core.seq_QMARK_.call(null,map__10858))?cljs.core.apply.call(null,cljs.core.hash_map,map__10858):map__10858);
var opts = map__10858__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__10856 = null;
if (arguments.length > 1) {
var G__10859__i = 0, G__10859__a = new Array(arguments.length -  1);
while (G__10859__i < G__10859__a.length) {G__10859__a[G__10859__i] = arguments[G__10859__i + 1]; ++G__10859__i;}
  p__10856 = new cljs.core.IndexedSeq(G__10859__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__10856);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__10860){
var ports = cljs.core.first(arglist__10860);
var p__10856 = cljs.core.rest(arglist__10860);
return cljs$core$async$alts_BANG___delegate(ports,p__10856);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__6828__auto___10955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___10955){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___10955){
return (function (state_10931){
var state_val_10932 = (state_10931[(1)]);
if((state_val_10932 === (7))){
var inst_10927 = (state_10931[(2)]);
var state_10931__$1 = state_10931;
var statearr_10933_10956 = state_10931__$1;
(statearr_10933_10956[(2)] = inst_10927);

(statearr_10933_10956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (1))){
var state_10931__$1 = state_10931;
var statearr_10934_10957 = state_10931__$1;
(statearr_10934_10957[(2)] = null);

(statearr_10934_10957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (4))){
var inst_10910 = (state_10931[(7)]);
var inst_10910__$1 = (state_10931[(2)]);
var inst_10911 = (inst_10910__$1 == null);
var state_10931__$1 = (function (){var statearr_10935 = state_10931;
(statearr_10935[(7)] = inst_10910__$1);

return statearr_10935;
})();
if(cljs.core.truth_(inst_10911)){
var statearr_10936_10958 = state_10931__$1;
(statearr_10936_10958[(1)] = (5));

} else {
var statearr_10937_10959 = state_10931__$1;
(statearr_10937_10959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (13))){
var state_10931__$1 = state_10931;
var statearr_10938_10960 = state_10931__$1;
(statearr_10938_10960[(2)] = null);

(statearr_10938_10960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (6))){
var inst_10910 = (state_10931[(7)]);
var state_10931__$1 = state_10931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10931__$1,(11),to,inst_10910);
} else {
if((state_val_10932 === (3))){
var inst_10929 = (state_10931[(2)]);
var state_10931__$1 = state_10931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10931__$1,inst_10929);
} else {
if((state_val_10932 === (12))){
var state_10931__$1 = state_10931;
var statearr_10939_10961 = state_10931__$1;
(statearr_10939_10961[(2)] = null);

(statearr_10939_10961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (2))){
var state_10931__$1 = state_10931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10931__$1,(4),from);
} else {
if((state_val_10932 === (11))){
var inst_10920 = (state_10931[(2)]);
var state_10931__$1 = state_10931;
if(cljs.core.truth_(inst_10920)){
var statearr_10940_10962 = state_10931__$1;
(statearr_10940_10962[(1)] = (12));

} else {
var statearr_10941_10963 = state_10931__$1;
(statearr_10941_10963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (9))){
var state_10931__$1 = state_10931;
var statearr_10942_10964 = state_10931__$1;
(statearr_10942_10964[(2)] = null);

(statearr_10942_10964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (5))){
var state_10931__$1 = state_10931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10943_10965 = state_10931__$1;
(statearr_10943_10965[(1)] = (8));

} else {
var statearr_10944_10966 = state_10931__$1;
(statearr_10944_10966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (14))){
var inst_10925 = (state_10931[(2)]);
var state_10931__$1 = state_10931;
var statearr_10945_10967 = state_10931__$1;
(statearr_10945_10967[(2)] = inst_10925);

(statearr_10945_10967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (10))){
var inst_10917 = (state_10931[(2)]);
var state_10931__$1 = state_10931;
var statearr_10946_10968 = state_10931__$1;
(statearr_10946_10968[(2)] = inst_10917);

(statearr_10946_10968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10932 === (8))){
var inst_10914 = cljs.core.async.close_BANG_.call(null,to);
var state_10931__$1 = state_10931;
var statearr_10947_10969 = state_10931__$1;
(statearr_10947_10969[(2)] = inst_10914);

(statearr_10947_10969[(1)] = (10));


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
});})(c__6828__auto___10955))
;
return ((function (switch__6772__auto__,c__6828__auto___10955){
return (function() {
var cljs$core$async$pipe_$_state_machine__6773__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6773__auto____0 = (function (){
var statearr_10951 = [null,null,null,null,null,null,null,null];
(statearr_10951[(0)] = cljs$core$async$pipe_$_state_machine__6773__auto__);

(statearr_10951[(1)] = (1));

return statearr_10951;
});
var cljs$core$async$pipe_$_state_machine__6773__auto____1 = (function (state_10931){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_10931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e10952){if((e10952 instanceof Object)){
var ex__6776__auto__ = e10952;
var statearr_10953_10970 = state_10931;
(statearr_10953_10970[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10971 = state_10931;
state_10931 = G__10971;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6773__auto__ = function(state_10931){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6773__auto____1.call(this,state_10931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6773__auto____0;
cljs$core$async$pipe_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6773__auto____1;
return cljs$core$async$pipe_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___10955))
})();
var state__6830__auto__ = (function (){var statearr_10954 = f__6829__auto__.call(null);
(statearr_10954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___10955);

return statearr_10954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___10955))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11155){
var vec__11156 = p__11155;
var v = cljs.core.nth.call(null,vec__11156,(0),null);
var p = cljs.core.nth.call(null,vec__11156,(1),null);
var job = vec__11156;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6828__auto___11338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___11338,res,vec__11156,v,p,job,jobs,results){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___11338,res,vec__11156,v,p,job,jobs,results){
return (function (state_11161){
var state_val_11162 = (state_11161[(1)]);
if((state_val_11162 === (2))){
var inst_11158 = (state_11161[(2)]);
var inst_11159 = cljs.core.async.close_BANG_.call(null,res);
var state_11161__$1 = (function (){var statearr_11163 = state_11161;
(statearr_11163[(7)] = inst_11158);

return statearr_11163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11161__$1,inst_11159);
} else {
if((state_val_11162 === (1))){
var state_11161__$1 = state_11161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11161__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6828__auto___11338,res,vec__11156,v,p,job,jobs,results))
;
return ((function (switch__6772__auto__,c__6828__auto___11338,res,vec__11156,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0 = (function (){
var statearr_11167 = [null,null,null,null,null,null,null,null];
(statearr_11167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__);

(statearr_11167[(1)] = (1));

return statearr_11167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1 = (function (state_11161){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11168){if((e11168 instanceof Object)){
var ex__6776__auto__ = e11168;
var statearr_11169_11339 = state_11161;
(statearr_11169_11339[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11340 = state_11161;
state_11161 = G__11340;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = function(state_11161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1.call(this,state_11161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___11338,res,vec__11156,v,p,job,jobs,results))
})();
var state__6830__auto__ = (function (){var statearr_11170 = f__6829__auto__.call(null);
(statearr_11170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___11338);

return statearr_11170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___11338,res,vec__11156,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11171){
var vec__11172 = p__11171;
var v = cljs.core.nth.call(null,vec__11172,(0),null);
var p = cljs.core.nth.call(null,vec__11172,(1),null);
var job = vec__11172;
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
var n__5007__auto___11341 = n;
var __11342 = (0);
while(true){
if((__11342 < n__5007__auto___11341)){
var G__11173_11343 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11173_11343) {
case "async":
var c__6828__auto___11345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11342,c__6828__auto___11345,G__11173_11343,n__5007__auto___11341,jobs,results,process,async){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (__11342,c__6828__auto___11345,G__11173_11343,n__5007__auto___11341,jobs,results,process,async){
return (function (state_11186){
var state_val_11187 = (state_11186[(1)]);
if((state_val_11187 === (7))){
var inst_11182 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11188_11346 = state_11186__$1;
(statearr_11188_11346[(2)] = inst_11182);

(statearr_11188_11346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (6))){
var state_11186__$1 = state_11186;
var statearr_11189_11347 = state_11186__$1;
(statearr_11189_11347[(2)] = null);

(statearr_11189_11347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (5))){
var state_11186__$1 = state_11186;
var statearr_11190_11348 = state_11186__$1;
(statearr_11190_11348[(2)] = null);

(statearr_11190_11348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (4))){
var inst_11176 = (state_11186[(2)]);
var inst_11177 = async.call(null,inst_11176);
var state_11186__$1 = state_11186;
if(cljs.core.truth_(inst_11177)){
var statearr_11191_11349 = state_11186__$1;
(statearr_11191_11349[(1)] = (5));

} else {
var statearr_11192_11350 = state_11186__$1;
(statearr_11192_11350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (3))){
var inst_11184 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11186__$1,inst_11184);
} else {
if((state_val_11187 === (2))){
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11186__$1,(4),jobs);
} else {
if((state_val_11187 === (1))){
var state_11186__$1 = state_11186;
var statearr_11193_11351 = state_11186__$1;
(statearr_11193_11351[(2)] = null);

(statearr_11193_11351[(1)] = (2));


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
});})(__11342,c__6828__auto___11345,G__11173_11343,n__5007__auto___11341,jobs,results,process,async))
;
return ((function (__11342,switch__6772__auto__,c__6828__auto___11345,G__11173_11343,n__5007__auto___11341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0 = (function (){
var statearr_11197 = [null,null,null,null,null,null,null];
(statearr_11197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__);

(statearr_11197[(1)] = (1));

return statearr_11197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1 = (function (state_11186){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11198){if((e11198 instanceof Object)){
var ex__6776__auto__ = e11198;
var statearr_11199_11352 = state_11186;
(statearr_11199_11352[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11353 = state_11186;
state_11186 = G__11353;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = function(state_11186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1.call(this,state_11186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__;
})()
;})(__11342,switch__6772__auto__,c__6828__auto___11345,G__11173_11343,n__5007__auto___11341,jobs,results,process,async))
})();
var state__6830__auto__ = (function (){var statearr_11200 = f__6829__auto__.call(null);
(statearr_11200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___11345);

return statearr_11200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(__11342,c__6828__auto___11345,G__11173_11343,n__5007__auto___11341,jobs,results,process,async))
);


break;
case "compute":
var c__6828__auto___11354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11342,c__6828__auto___11354,G__11173_11343,n__5007__auto___11341,jobs,results,process,async){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (__11342,c__6828__auto___11354,G__11173_11343,n__5007__auto___11341,jobs,results,process,async){
return (function (state_11213){
var state_val_11214 = (state_11213[(1)]);
if((state_val_11214 === (7))){
var inst_11209 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
var statearr_11215_11355 = state_11213__$1;
(statearr_11215_11355[(2)] = inst_11209);

(statearr_11215_11355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (6))){
var state_11213__$1 = state_11213;
var statearr_11216_11356 = state_11213__$1;
(statearr_11216_11356[(2)] = null);

(statearr_11216_11356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (5))){
var state_11213__$1 = state_11213;
var statearr_11217_11357 = state_11213__$1;
(statearr_11217_11357[(2)] = null);

(statearr_11217_11357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (4))){
var inst_11203 = (state_11213[(2)]);
var inst_11204 = process.call(null,inst_11203);
var state_11213__$1 = state_11213;
if(cljs.core.truth_(inst_11204)){
var statearr_11218_11358 = state_11213__$1;
(statearr_11218_11358[(1)] = (5));

} else {
var statearr_11219_11359 = state_11213__$1;
(statearr_11219_11359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11214 === (3))){
var inst_11211 = (state_11213[(2)]);
var state_11213__$1 = state_11213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11213__$1,inst_11211);
} else {
if((state_val_11214 === (2))){
var state_11213__$1 = state_11213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11213__$1,(4),jobs);
} else {
if((state_val_11214 === (1))){
var state_11213__$1 = state_11213;
var statearr_11220_11360 = state_11213__$1;
(statearr_11220_11360[(2)] = null);

(statearr_11220_11360[(1)] = (2));


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
});})(__11342,c__6828__auto___11354,G__11173_11343,n__5007__auto___11341,jobs,results,process,async))
;
return ((function (__11342,switch__6772__auto__,c__6828__auto___11354,G__11173_11343,n__5007__auto___11341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0 = (function (){
var statearr_11224 = [null,null,null,null,null,null,null];
(statearr_11224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__);

(statearr_11224[(1)] = (1));

return statearr_11224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1 = (function (state_11213){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11225){if((e11225 instanceof Object)){
var ex__6776__auto__ = e11225;
var statearr_11226_11361 = state_11213;
(statearr_11226_11361[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11362 = state_11213;
state_11213 = G__11362;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = function(state_11213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1.call(this,state_11213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__;
})()
;})(__11342,switch__6772__auto__,c__6828__auto___11354,G__11173_11343,n__5007__auto___11341,jobs,results,process,async))
})();
var state__6830__auto__ = (function (){var statearr_11227 = f__6829__auto__.call(null);
(statearr_11227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___11354);

return statearr_11227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(__11342,c__6828__auto___11354,G__11173_11343,n__5007__auto___11341,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11363 = (__11342 + (1));
__11342 = G__11363;
continue;
} else {
}
break;
}

var c__6828__auto___11364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___11364,jobs,results,process,async){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___11364,jobs,results,process,async){
return (function (state_11249){
var state_val_11250 = (state_11249[(1)]);
if((state_val_11250 === (9))){
var inst_11242 = (state_11249[(2)]);
var state_11249__$1 = (function (){var statearr_11251 = state_11249;
(statearr_11251[(7)] = inst_11242);

return statearr_11251;
})();
var statearr_11252_11365 = state_11249__$1;
(statearr_11252_11365[(2)] = null);

(statearr_11252_11365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (8))){
var inst_11235 = (state_11249[(8)]);
var inst_11240 = (state_11249[(2)]);
var state_11249__$1 = (function (){var statearr_11253 = state_11249;
(statearr_11253[(9)] = inst_11240);

return statearr_11253;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11249__$1,(9),results,inst_11235);
} else {
if((state_val_11250 === (7))){
var inst_11245 = (state_11249[(2)]);
var state_11249__$1 = state_11249;
var statearr_11254_11366 = state_11249__$1;
(statearr_11254_11366[(2)] = inst_11245);

(statearr_11254_11366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (6))){
var inst_11235 = (state_11249[(8)]);
var inst_11230 = (state_11249[(10)]);
var inst_11235__$1 = cljs.core.async.chan.call(null,(1));
var inst_11236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11237 = [inst_11230,inst_11235__$1];
var inst_11238 = (new cljs.core.PersistentVector(null,2,(5),inst_11236,inst_11237,null));
var state_11249__$1 = (function (){var statearr_11255 = state_11249;
(statearr_11255[(8)] = inst_11235__$1);

return statearr_11255;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11249__$1,(8),jobs,inst_11238);
} else {
if((state_val_11250 === (5))){
var inst_11233 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11249__$1 = state_11249;
var statearr_11256_11367 = state_11249__$1;
(statearr_11256_11367[(2)] = inst_11233);

(statearr_11256_11367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (4))){
var inst_11230 = (state_11249[(10)]);
var inst_11230__$1 = (state_11249[(2)]);
var inst_11231 = (inst_11230__$1 == null);
var state_11249__$1 = (function (){var statearr_11257 = state_11249;
(statearr_11257[(10)] = inst_11230__$1);

return statearr_11257;
})();
if(cljs.core.truth_(inst_11231)){
var statearr_11258_11368 = state_11249__$1;
(statearr_11258_11368[(1)] = (5));

} else {
var statearr_11259_11369 = state_11249__$1;
(statearr_11259_11369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (3))){
var inst_11247 = (state_11249[(2)]);
var state_11249__$1 = state_11249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11249__$1,inst_11247);
} else {
if((state_val_11250 === (2))){
var state_11249__$1 = state_11249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11249__$1,(4),from);
} else {
if((state_val_11250 === (1))){
var state_11249__$1 = state_11249;
var statearr_11260_11370 = state_11249__$1;
(statearr_11260_11370[(2)] = null);

(statearr_11260_11370[(1)] = (2));


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
});})(c__6828__auto___11364,jobs,results,process,async))
;
return ((function (switch__6772__auto__,c__6828__auto___11364,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0 = (function (){
var statearr_11264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__);

(statearr_11264[(1)] = (1));

return statearr_11264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1 = (function (state_11249){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11265){if((e11265 instanceof Object)){
var ex__6776__auto__ = e11265;
var statearr_11266_11371 = state_11249;
(statearr_11266_11371[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11372 = state_11249;
state_11249 = G__11372;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = function(state_11249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1.call(this,state_11249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___11364,jobs,results,process,async))
})();
var state__6830__auto__ = (function (){var statearr_11267 = f__6829__auto__.call(null);
(statearr_11267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___11364);

return statearr_11267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___11364,jobs,results,process,async))
);


var c__6828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto__,jobs,results,process,async){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto__,jobs,results,process,async){
return (function (state_11305){
var state_val_11306 = (state_11305[(1)]);
if((state_val_11306 === (7))){
var inst_11301 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11307_11373 = state_11305__$1;
(statearr_11307_11373[(2)] = inst_11301);

(statearr_11307_11373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (20))){
var state_11305__$1 = state_11305;
var statearr_11308_11374 = state_11305__$1;
(statearr_11308_11374[(2)] = null);

(statearr_11308_11374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (1))){
var state_11305__$1 = state_11305;
var statearr_11309_11375 = state_11305__$1;
(statearr_11309_11375[(2)] = null);

(statearr_11309_11375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (4))){
var inst_11270 = (state_11305[(7)]);
var inst_11270__$1 = (state_11305[(2)]);
var inst_11271 = (inst_11270__$1 == null);
var state_11305__$1 = (function (){var statearr_11310 = state_11305;
(statearr_11310[(7)] = inst_11270__$1);

return statearr_11310;
})();
if(cljs.core.truth_(inst_11271)){
var statearr_11311_11376 = state_11305__$1;
(statearr_11311_11376[(1)] = (5));

} else {
var statearr_11312_11377 = state_11305__$1;
(statearr_11312_11377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (15))){
var inst_11283 = (state_11305[(8)]);
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11305__$1,(18),to,inst_11283);
} else {
if((state_val_11306 === (21))){
var inst_11296 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11313_11378 = state_11305__$1;
(statearr_11313_11378[(2)] = inst_11296);

(statearr_11313_11378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (13))){
var inst_11298 = (state_11305[(2)]);
var state_11305__$1 = (function (){var statearr_11314 = state_11305;
(statearr_11314[(9)] = inst_11298);

return statearr_11314;
})();
var statearr_11315_11379 = state_11305__$1;
(statearr_11315_11379[(2)] = null);

(statearr_11315_11379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (6))){
var inst_11270 = (state_11305[(7)]);
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11305__$1,(11),inst_11270);
} else {
if((state_val_11306 === (17))){
var inst_11291 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
if(cljs.core.truth_(inst_11291)){
var statearr_11316_11380 = state_11305__$1;
(statearr_11316_11380[(1)] = (19));

} else {
var statearr_11317_11381 = state_11305__$1;
(statearr_11317_11381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (3))){
var inst_11303 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11305__$1,inst_11303);
} else {
if((state_val_11306 === (12))){
var inst_11280 = (state_11305[(10)]);
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11305__$1,(14),inst_11280);
} else {
if((state_val_11306 === (2))){
var state_11305__$1 = state_11305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11305__$1,(4),results);
} else {
if((state_val_11306 === (19))){
var state_11305__$1 = state_11305;
var statearr_11318_11382 = state_11305__$1;
(statearr_11318_11382[(2)] = null);

(statearr_11318_11382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (11))){
var inst_11280 = (state_11305[(2)]);
var state_11305__$1 = (function (){var statearr_11319 = state_11305;
(statearr_11319[(10)] = inst_11280);

return statearr_11319;
})();
var statearr_11320_11383 = state_11305__$1;
(statearr_11320_11383[(2)] = null);

(statearr_11320_11383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (9))){
var state_11305__$1 = state_11305;
var statearr_11321_11384 = state_11305__$1;
(statearr_11321_11384[(2)] = null);

(statearr_11321_11384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (5))){
var state_11305__$1 = state_11305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11322_11385 = state_11305__$1;
(statearr_11322_11385[(1)] = (8));

} else {
var statearr_11323_11386 = state_11305__$1;
(statearr_11323_11386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (14))){
var inst_11285 = (state_11305[(11)]);
var inst_11283 = (state_11305[(8)]);
var inst_11283__$1 = (state_11305[(2)]);
var inst_11284 = (inst_11283__$1 == null);
var inst_11285__$1 = cljs.core.not.call(null,inst_11284);
var state_11305__$1 = (function (){var statearr_11324 = state_11305;
(statearr_11324[(11)] = inst_11285__$1);

(statearr_11324[(8)] = inst_11283__$1);

return statearr_11324;
})();
if(inst_11285__$1){
var statearr_11325_11387 = state_11305__$1;
(statearr_11325_11387[(1)] = (15));

} else {
var statearr_11326_11388 = state_11305__$1;
(statearr_11326_11388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (16))){
var inst_11285 = (state_11305[(11)]);
var state_11305__$1 = state_11305;
var statearr_11327_11389 = state_11305__$1;
(statearr_11327_11389[(2)] = inst_11285);

(statearr_11327_11389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (10))){
var inst_11277 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11328_11390 = state_11305__$1;
(statearr_11328_11390[(2)] = inst_11277);

(statearr_11328_11390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (18))){
var inst_11288 = (state_11305[(2)]);
var state_11305__$1 = state_11305;
var statearr_11329_11391 = state_11305__$1;
(statearr_11329_11391[(2)] = inst_11288);

(statearr_11329_11391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11306 === (8))){
var inst_11274 = cljs.core.async.close_BANG_.call(null,to);
var state_11305__$1 = state_11305;
var statearr_11330_11392 = state_11305__$1;
(statearr_11330_11392[(2)] = inst_11274);

(statearr_11330_11392[(1)] = (10));


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
});})(c__6828__auto__,jobs,results,process,async))
;
return ((function (switch__6772__auto__,c__6828__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0 = (function (){
var statearr_11334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__);

(statearr_11334[(1)] = (1));

return statearr_11334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1 = (function (state_11305){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11335){if((e11335 instanceof Object)){
var ex__6776__auto__ = e11335;
var statearr_11336_11393 = state_11305;
(statearr_11336_11393[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11394 = state_11305;
state_11305 = G__11394;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__ = function(state_11305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1.call(this,state_11305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto__,jobs,results,process,async))
})();
var state__6830__auto__ = (function (){var statearr_11337 = f__6829__auto__.call(null);
(statearr_11337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto__);

return statearr_11337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto__,jobs,results,process,async))
);

return c__6828__auto__;
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
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
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
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
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
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6828__auto___11495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___11495,tc,fc){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___11495,tc,fc){
return (function (state_11470){
var state_val_11471 = (state_11470[(1)]);
if((state_val_11471 === (7))){
var inst_11466 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
var statearr_11472_11496 = state_11470__$1;
(statearr_11472_11496[(2)] = inst_11466);

(statearr_11472_11496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (1))){
var state_11470__$1 = state_11470;
var statearr_11473_11497 = state_11470__$1;
(statearr_11473_11497[(2)] = null);

(statearr_11473_11497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (4))){
var inst_11447 = (state_11470[(7)]);
var inst_11447__$1 = (state_11470[(2)]);
var inst_11448 = (inst_11447__$1 == null);
var state_11470__$1 = (function (){var statearr_11474 = state_11470;
(statearr_11474[(7)] = inst_11447__$1);

return statearr_11474;
})();
if(cljs.core.truth_(inst_11448)){
var statearr_11475_11498 = state_11470__$1;
(statearr_11475_11498[(1)] = (5));

} else {
var statearr_11476_11499 = state_11470__$1;
(statearr_11476_11499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (13))){
var state_11470__$1 = state_11470;
var statearr_11477_11500 = state_11470__$1;
(statearr_11477_11500[(2)] = null);

(statearr_11477_11500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (6))){
var inst_11447 = (state_11470[(7)]);
var inst_11453 = p.call(null,inst_11447);
var state_11470__$1 = state_11470;
if(cljs.core.truth_(inst_11453)){
var statearr_11478_11501 = state_11470__$1;
(statearr_11478_11501[(1)] = (9));

} else {
var statearr_11479_11502 = state_11470__$1;
(statearr_11479_11502[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (3))){
var inst_11468 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11470__$1,inst_11468);
} else {
if((state_val_11471 === (12))){
var state_11470__$1 = state_11470;
var statearr_11480_11503 = state_11470__$1;
(statearr_11480_11503[(2)] = null);

(statearr_11480_11503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (2))){
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11470__$1,(4),ch);
} else {
if((state_val_11471 === (11))){
var inst_11447 = (state_11470[(7)]);
var inst_11457 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11470__$1,(8),inst_11457,inst_11447);
} else {
if((state_val_11471 === (9))){
var state_11470__$1 = state_11470;
var statearr_11481_11504 = state_11470__$1;
(statearr_11481_11504[(2)] = tc);

(statearr_11481_11504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (5))){
var inst_11450 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11451 = cljs.core.async.close_BANG_.call(null,fc);
var state_11470__$1 = (function (){var statearr_11482 = state_11470;
(statearr_11482[(8)] = inst_11450);

return statearr_11482;
})();
var statearr_11483_11505 = state_11470__$1;
(statearr_11483_11505[(2)] = inst_11451);

(statearr_11483_11505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (14))){
var inst_11464 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
var statearr_11484_11506 = state_11470__$1;
(statearr_11484_11506[(2)] = inst_11464);

(statearr_11484_11506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (10))){
var state_11470__$1 = state_11470;
var statearr_11485_11507 = state_11470__$1;
(statearr_11485_11507[(2)] = fc);

(statearr_11485_11507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (8))){
var inst_11459 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
if(cljs.core.truth_(inst_11459)){
var statearr_11486_11508 = state_11470__$1;
(statearr_11486_11508[(1)] = (12));

} else {
var statearr_11487_11509 = state_11470__$1;
(statearr_11487_11509[(1)] = (13));

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
});})(c__6828__auto___11495,tc,fc))
;
return ((function (switch__6772__auto__,c__6828__auto___11495,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6773__auto__ = null;
var cljs$core$async$split_$_state_machine__6773__auto____0 = (function (){
var statearr_11491 = [null,null,null,null,null,null,null,null,null];
(statearr_11491[(0)] = cljs$core$async$split_$_state_machine__6773__auto__);

(statearr_11491[(1)] = (1));

return statearr_11491;
});
var cljs$core$async$split_$_state_machine__6773__auto____1 = (function (state_11470){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11492){if((e11492 instanceof Object)){
var ex__6776__auto__ = e11492;
var statearr_11493_11510 = state_11470;
(statearr_11493_11510[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11511 = state_11470;
state_11470 = G__11511;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6773__auto__ = function(state_11470){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6773__auto____1.call(this,state_11470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6773__auto____0;
cljs$core$async$split_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6773__auto____1;
return cljs$core$async$split_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___11495,tc,fc))
})();
var state__6830__auto__ = (function (){var statearr_11494 = f__6829__auto__.call(null);
(statearr_11494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___11495);

return statearr_11494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___11495,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto__){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto__){
return (function (state_11558){
var state_val_11559 = (state_11558[(1)]);
if((state_val_11559 === (7))){
var inst_11554 = (state_11558[(2)]);
var state_11558__$1 = state_11558;
var statearr_11560_11576 = state_11558__$1;
(statearr_11560_11576[(2)] = inst_11554);

(statearr_11560_11576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (6))){
var inst_11547 = (state_11558[(7)]);
var inst_11544 = (state_11558[(8)]);
var inst_11551 = f.call(null,inst_11544,inst_11547);
var inst_11544__$1 = inst_11551;
var state_11558__$1 = (function (){var statearr_11561 = state_11558;
(statearr_11561[(8)] = inst_11544__$1);

return statearr_11561;
})();
var statearr_11562_11577 = state_11558__$1;
(statearr_11562_11577[(2)] = null);

(statearr_11562_11577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (5))){
var inst_11544 = (state_11558[(8)]);
var state_11558__$1 = state_11558;
var statearr_11563_11578 = state_11558__$1;
(statearr_11563_11578[(2)] = inst_11544);

(statearr_11563_11578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (4))){
var inst_11547 = (state_11558[(7)]);
var inst_11547__$1 = (state_11558[(2)]);
var inst_11548 = (inst_11547__$1 == null);
var state_11558__$1 = (function (){var statearr_11564 = state_11558;
(statearr_11564[(7)] = inst_11547__$1);

return statearr_11564;
})();
if(cljs.core.truth_(inst_11548)){
var statearr_11565_11579 = state_11558__$1;
(statearr_11565_11579[(1)] = (5));

} else {
var statearr_11566_11580 = state_11558__$1;
(statearr_11566_11580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11559 === (3))){
var inst_11556 = (state_11558[(2)]);
var state_11558__$1 = state_11558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11558__$1,inst_11556);
} else {
if((state_val_11559 === (2))){
var state_11558__$1 = state_11558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11558__$1,(4),ch);
} else {
if((state_val_11559 === (1))){
var inst_11544 = init;
var state_11558__$1 = (function (){var statearr_11567 = state_11558;
(statearr_11567[(8)] = inst_11544);

return statearr_11567;
})();
var statearr_11568_11581 = state_11558__$1;
(statearr_11568_11581[(2)] = null);

(statearr_11568_11581[(1)] = (2));


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
});})(c__6828__auto__))
;
return ((function (switch__6772__auto__,c__6828__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6773__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6773__auto____0 = (function (){
var statearr_11572 = [null,null,null,null,null,null,null,null,null];
(statearr_11572[(0)] = cljs$core$async$reduce_$_state_machine__6773__auto__);

(statearr_11572[(1)] = (1));

return statearr_11572;
});
var cljs$core$async$reduce_$_state_machine__6773__auto____1 = (function (state_11558){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11573){if((e11573 instanceof Object)){
var ex__6776__auto__ = e11573;
var statearr_11574_11582 = state_11558;
(statearr_11574_11582[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11583 = state_11558;
state_11558 = G__11583;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6773__auto__ = function(state_11558){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6773__auto____1.call(this,state_11558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6773__auto____0;
cljs$core$async$reduce_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6773__auto____1;
return cljs$core$async$reduce_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto__))
})();
var state__6830__auto__ = (function (){var statearr_11575 = f__6829__auto__.call(null);
(statearr_11575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto__);

return statearr_11575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto__))
);

return c__6828__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto__){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto__){
return (function (state_11657){
var state_val_11658 = (state_11657[(1)]);
if((state_val_11658 === (7))){
var inst_11639 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
var statearr_11659_11682 = state_11657__$1;
(statearr_11659_11682[(2)] = inst_11639);

(statearr_11659_11682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (1))){
var inst_11633 = cljs.core.seq.call(null,coll);
var inst_11634 = inst_11633;
var state_11657__$1 = (function (){var statearr_11660 = state_11657;
(statearr_11660[(7)] = inst_11634);

return statearr_11660;
})();
var statearr_11661_11683 = state_11657__$1;
(statearr_11661_11683[(2)] = null);

(statearr_11661_11683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (4))){
var inst_11634 = (state_11657[(7)]);
var inst_11637 = cljs.core.first.call(null,inst_11634);
var state_11657__$1 = state_11657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11657__$1,(7),ch,inst_11637);
} else {
if((state_val_11658 === (13))){
var inst_11651 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
var statearr_11662_11684 = state_11657__$1;
(statearr_11662_11684[(2)] = inst_11651);

(statearr_11662_11684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (6))){
var inst_11642 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
if(cljs.core.truth_(inst_11642)){
var statearr_11663_11685 = state_11657__$1;
(statearr_11663_11685[(1)] = (8));

} else {
var statearr_11664_11686 = state_11657__$1;
(statearr_11664_11686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (3))){
var inst_11655 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11657__$1,inst_11655);
} else {
if((state_val_11658 === (12))){
var state_11657__$1 = state_11657;
var statearr_11665_11687 = state_11657__$1;
(statearr_11665_11687[(2)] = null);

(statearr_11665_11687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (2))){
var inst_11634 = (state_11657[(7)]);
var state_11657__$1 = state_11657;
if(cljs.core.truth_(inst_11634)){
var statearr_11666_11688 = state_11657__$1;
(statearr_11666_11688[(1)] = (4));

} else {
var statearr_11667_11689 = state_11657__$1;
(statearr_11667_11689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (11))){
var inst_11648 = cljs.core.async.close_BANG_.call(null,ch);
var state_11657__$1 = state_11657;
var statearr_11668_11690 = state_11657__$1;
(statearr_11668_11690[(2)] = inst_11648);

(statearr_11668_11690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (9))){
var state_11657__$1 = state_11657;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11669_11691 = state_11657__$1;
(statearr_11669_11691[(1)] = (11));

} else {
var statearr_11670_11692 = state_11657__$1;
(statearr_11670_11692[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (5))){
var inst_11634 = (state_11657[(7)]);
var state_11657__$1 = state_11657;
var statearr_11671_11693 = state_11657__$1;
(statearr_11671_11693[(2)] = inst_11634);

(statearr_11671_11693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (10))){
var inst_11653 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
var statearr_11672_11694 = state_11657__$1;
(statearr_11672_11694[(2)] = inst_11653);

(statearr_11672_11694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (8))){
var inst_11634 = (state_11657[(7)]);
var inst_11644 = cljs.core.next.call(null,inst_11634);
var inst_11634__$1 = inst_11644;
var state_11657__$1 = (function (){var statearr_11673 = state_11657;
(statearr_11673[(7)] = inst_11634__$1);

return statearr_11673;
})();
var statearr_11674_11695 = state_11657__$1;
(statearr_11674_11695[(2)] = null);

(statearr_11674_11695[(1)] = (2));


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
});})(c__6828__auto__))
;
return ((function (switch__6772__auto__,c__6828__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6773__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6773__auto____0 = (function (){
var statearr_11678 = [null,null,null,null,null,null,null,null];
(statearr_11678[(0)] = cljs$core$async$onto_chan_$_state_machine__6773__auto__);

(statearr_11678[(1)] = (1));

return statearr_11678;
});
var cljs$core$async$onto_chan_$_state_machine__6773__auto____1 = (function (state_11657){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e11679){if((e11679 instanceof Object)){
var ex__6776__auto__ = e11679;
var statearr_11680_11696 = state_11657;
(statearr_11680_11696[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11697 = state_11657;
state_11657 = G__11697;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6773__auto__ = function(state_11657){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6773__auto____1.call(this,state_11657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6773__auto____0;
cljs$core$async$onto_chan_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6773__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto__))
})();
var state__6830__auto__ = (function (){var statearr_11681 = f__6829__auto__.call(null);
(statearr_11681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto__);

return statearr_11681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto__))
);

return c__6828__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj11699 = {};
return obj11699;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4110__auto__ = _;
if(and__4110__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4758__auto__ = (((_ == null))?null:_);
return (function (){var or__4122__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj11701 = {};
return obj11701;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
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
if(typeof cljs.core.async.t11923 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11923 = (function (cs,ch,mult,meta11924){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11924 = meta11924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11923.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t11923.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t11923.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t11923.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t11923.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t11923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11925){
var self__ = this;
var _11925__$1 = this;
return self__.meta11924;
});})(cs))
;

cljs.core.async.t11923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11925,meta11924__$1){
var self__ = this;
var _11925__$1 = this;
return (new cljs.core.async.t11923(self__.cs,self__.ch,self__.mult,meta11924__$1));
});})(cs))
;

cljs.core.async.t11923.cljs$lang$type = true;

cljs.core.async.t11923.cljs$lang$ctorStr = "cljs.core.async/t11923";

cljs.core.async.t11923.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t11923");
});})(cs))
;

cljs.core.async.__GT_t11923 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t11923(cs__$1,ch__$1,mult__$1,meta11924){
return (new cljs.core.async.t11923(cs__$1,ch__$1,mult__$1,meta11924));
});})(cs))
;

}

return (new cljs.core.async.t11923(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6828__auto___12144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___12144,cs,m,dchan,dctr,done){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___12144,cs,m,dchan,dctr,done){
return (function (state_12056){
var state_val_12057 = (state_12056[(1)]);
if((state_val_12057 === (7))){
var inst_12052 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12058_12145 = state_12056__$1;
(statearr_12058_12145[(2)] = inst_12052);

(statearr_12058_12145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (20))){
var inst_11957 = (state_12056[(7)]);
var inst_11967 = cljs.core.first.call(null,inst_11957);
var inst_11968 = cljs.core.nth.call(null,inst_11967,(0),null);
var inst_11969 = cljs.core.nth.call(null,inst_11967,(1),null);
var state_12056__$1 = (function (){var statearr_12059 = state_12056;
(statearr_12059[(8)] = inst_11968);

return statearr_12059;
})();
if(cljs.core.truth_(inst_11969)){
var statearr_12060_12146 = state_12056__$1;
(statearr_12060_12146[(1)] = (22));

} else {
var statearr_12061_12147 = state_12056__$1;
(statearr_12061_12147[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (27))){
var inst_11997 = (state_12056[(9)]);
var inst_11928 = (state_12056[(10)]);
var inst_11999 = (state_12056[(11)]);
var inst_12004 = (state_12056[(12)]);
var inst_12004__$1 = cljs.core._nth.call(null,inst_11997,inst_11999);
var inst_12005 = cljs.core.async.put_BANG_.call(null,inst_12004__$1,inst_11928,done);
var state_12056__$1 = (function (){var statearr_12062 = state_12056;
(statearr_12062[(12)] = inst_12004__$1);

return statearr_12062;
})();
if(cljs.core.truth_(inst_12005)){
var statearr_12063_12148 = state_12056__$1;
(statearr_12063_12148[(1)] = (30));

} else {
var statearr_12064_12149 = state_12056__$1;
(statearr_12064_12149[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (1))){
var state_12056__$1 = state_12056;
var statearr_12065_12150 = state_12056__$1;
(statearr_12065_12150[(2)] = null);

(statearr_12065_12150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (24))){
var inst_11957 = (state_12056[(7)]);
var inst_11974 = (state_12056[(2)]);
var inst_11975 = cljs.core.next.call(null,inst_11957);
var inst_11937 = inst_11975;
var inst_11938 = null;
var inst_11939 = (0);
var inst_11940 = (0);
var state_12056__$1 = (function (){var statearr_12066 = state_12056;
(statearr_12066[(13)] = inst_11940);

(statearr_12066[(14)] = inst_11937);

(statearr_12066[(15)] = inst_11939);

(statearr_12066[(16)] = inst_11974);

(statearr_12066[(17)] = inst_11938);

return statearr_12066;
})();
var statearr_12067_12151 = state_12056__$1;
(statearr_12067_12151[(2)] = null);

(statearr_12067_12151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (39))){
var state_12056__$1 = state_12056;
var statearr_12071_12152 = state_12056__$1;
(statearr_12071_12152[(2)] = null);

(statearr_12071_12152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (4))){
var inst_11928 = (state_12056[(10)]);
var inst_11928__$1 = (state_12056[(2)]);
var inst_11929 = (inst_11928__$1 == null);
var state_12056__$1 = (function (){var statearr_12072 = state_12056;
(statearr_12072[(10)] = inst_11928__$1);

return statearr_12072;
})();
if(cljs.core.truth_(inst_11929)){
var statearr_12073_12153 = state_12056__$1;
(statearr_12073_12153[(1)] = (5));

} else {
var statearr_12074_12154 = state_12056__$1;
(statearr_12074_12154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (15))){
var inst_11940 = (state_12056[(13)]);
var inst_11937 = (state_12056[(14)]);
var inst_11939 = (state_12056[(15)]);
var inst_11938 = (state_12056[(17)]);
var inst_11953 = (state_12056[(2)]);
var inst_11954 = (inst_11940 + (1));
var tmp12068 = inst_11937;
var tmp12069 = inst_11939;
var tmp12070 = inst_11938;
var inst_11937__$1 = tmp12068;
var inst_11938__$1 = tmp12070;
var inst_11939__$1 = tmp12069;
var inst_11940__$1 = inst_11954;
var state_12056__$1 = (function (){var statearr_12075 = state_12056;
(statearr_12075[(13)] = inst_11940__$1);

(statearr_12075[(14)] = inst_11937__$1);

(statearr_12075[(18)] = inst_11953);

(statearr_12075[(15)] = inst_11939__$1);

(statearr_12075[(17)] = inst_11938__$1);

return statearr_12075;
})();
var statearr_12076_12155 = state_12056__$1;
(statearr_12076_12155[(2)] = null);

(statearr_12076_12155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (21))){
var inst_11978 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12080_12156 = state_12056__$1;
(statearr_12080_12156[(2)] = inst_11978);

(statearr_12080_12156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (31))){
var inst_12004 = (state_12056[(12)]);
var inst_12008 = done.call(null,null);
var inst_12009 = cljs.core.async.untap_STAR_.call(null,m,inst_12004);
var state_12056__$1 = (function (){var statearr_12081 = state_12056;
(statearr_12081[(19)] = inst_12008);

return statearr_12081;
})();
var statearr_12082_12157 = state_12056__$1;
(statearr_12082_12157[(2)] = inst_12009);

(statearr_12082_12157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (32))){
var inst_11998 = (state_12056[(20)]);
var inst_11997 = (state_12056[(9)]);
var inst_11999 = (state_12056[(11)]);
var inst_11996 = (state_12056[(21)]);
var inst_12011 = (state_12056[(2)]);
var inst_12012 = (inst_11999 + (1));
var tmp12077 = inst_11998;
var tmp12078 = inst_11997;
var tmp12079 = inst_11996;
var inst_11996__$1 = tmp12079;
var inst_11997__$1 = tmp12078;
var inst_11998__$1 = tmp12077;
var inst_11999__$1 = inst_12012;
var state_12056__$1 = (function (){var statearr_12083 = state_12056;
(statearr_12083[(20)] = inst_11998__$1);

(statearr_12083[(22)] = inst_12011);

(statearr_12083[(9)] = inst_11997__$1);

(statearr_12083[(11)] = inst_11999__$1);

(statearr_12083[(21)] = inst_11996__$1);

return statearr_12083;
})();
var statearr_12084_12158 = state_12056__$1;
(statearr_12084_12158[(2)] = null);

(statearr_12084_12158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (40))){
var inst_12024 = (state_12056[(23)]);
var inst_12028 = done.call(null,null);
var inst_12029 = cljs.core.async.untap_STAR_.call(null,m,inst_12024);
var state_12056__$1 = (function (){var statearr_12085 = state_12056;
(statearr_12085[(24)] = inst_12028);

return statearr_12085;
})();
var statearr_12086_12159 = state_12056__$1;
(statearr_12086_12159[(2)] = inst_12029);

(statearr_12086_12159[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (33))){
var inst_12015 = (state_12056[(25)]);
var inst_12017 = cljs.core.chunked_seq_QMARK_.call(null,inst_12015);
var state_12056__$1 = state_12056;
if(inst_12017){
var statearr_12087_12160 = state_12056__$1;
(statearr_12087_12160[(1)] = (36));

} else {
var statearr_12088_12161 = state_12056__$1;
(statearr_12088_12161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (13))){
var inst_11947 = (state_12056[(26)]);
var inst_11950 = cljs.core.async.close_BANG_.call(null,inst_11947);
var state_12056__$1 = state_12056;
var statearr_12089_12162 = state_12056__$1;
(statearr_12089_12162[(2)] = inst_11950);

(statearr_12089_12162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (22))){
var inst_11968 = (state_12056[(8)]);
var inst_11971 = cljs.core.async.close_BANG_.call(null,inst_11968);
var state_12056__$1 = state_12056;
var statearr_12090_12163 = state_12056__$1;
(statearr_12090_12163[(2)] = inst_11971);

(statearr_12090_12163[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (36))){
var inst_12015 = (state_12056[(25)]);
var inst_12019 = cljs.core.chunk_first.call(null,inst_12015);
var inst_12020 = cljs.core.chunk_rest.call(null,inst_12015);
var inst_12021 = cljs.core.count.call(null,inst_12019);
var inst_11996 = inst_12020;
var inst_11997 = inst_12019;
var inst_11998 = inst_12021;
var inst_11999 = (0);
var state_12056__$1 = (function (){var statearr_12091 = state_12056;
(statearr_12091[(20)] = inst_11998);

(statearr_12091[(9)] = inst_11997);

(statearr_12091[(11)] = inst_11999);

(statearr_12091[(21)] = inst_11996);

return statearr_12091;
})();
var statearr_12092_12164 = state_12056__$1;
(statearr_12092_12164[(2)] = null);

(statearr_12092_12164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (41))){
var inst_12015 = (state_12056[(25)]);
var inst_12031 = (state_12056[(2)]);
var inst_12032 = cljs.core.next.call(null,inst_12015);
var inst_11996 = inst_12032;
var inst_11997 = null;
var inst_11998 = (0);
var inst_11999 = (0);
var state_12056__$1 = (function (){var statearr_12093 = state_12056;
(statearr_12093[(20)] = inst_11998);

(statearr_12093[(9)] = inst_11997);

(statearr_12093[(27)] = inst_12031);

(statearr_12093[(11)] = inst_11999);

(statearr_12093[(21)] = inst_11996);

return statearr_12093;
})();
var statearr_12094_12165 = state_12056__$1;
(statearr_12094_12165[(2)] = null);

(statearr_12094_12165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (43))){
var state_12056__$1 = state_12056;
var statearr_12095_12166 = state_12056__$1;
(statearr_12095_12166[(2)] = null);

(statearr_12095_12166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (29))){
var inst_12040 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12096_12167 = state_12056__$1;
(statearr_12096_12167[(2)] = inst_12040);

(statearr_12096_12167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (44))){
var inst_12049 = (state_12056[(2)]);
var state_12056__$1 = (function (){var statearr_12097 = state_12056;
(statearr_12097[(28)] = inst_12049);

return statearr_12097;
})();
var statearr_12098_12168 = state_12056__$1;
(statearr_12098_12168[(2)] = null);

(statearr_12098_12168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (6))){
var inst_11988 = (state_12056[(29)]);
var inst_11987 = cljs.core.deref.call(null,cs);
var inst_11988__$1 = cljs.core.keys.call(null,inst_11987);
var inst_11989 = cljs.core.count.call(null,inst_11988__$1);
var inst_11990 = cljs.core.reset_BANG_.call(null,dctr,inst_11989);
var inst_11995 = cljs.core.seq.call(null,inst_11988__$1);
var inst_11996 = inst_11995;
var inst_11997 = null;
var inst_11998 = (0);
var inst_11999 = (0);
var state_12056__$1 = (function (){var statearr_12099 = state_12056;
(statearr_12099[(20)] = inst_11998);

(statearr_12099[(9)] = inst_11997);

(statearr_12099[(11)] = inst_11999);

(statearr_12099[(30)] = inst_11990);

(statearr_12099[(29)] = inst_11988__$1);

(statearr_12099[(21)] = inst_11996);

return statearr_12099;
})();
var statearr_12100_12169 = state_12056__$1;
(statearr_12100_12169[(2)] = null);

(statearr_12100_12169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (28))){
var inst_12015 = (state_12056[(25)]);
var inst_11996 = (state_12056[(21)]);
var inst_12015__$1 = cljs.core.seq.call(null,inst_11996);
var state_12056__$1 = (function (){var statearr_12101 = state_12056;
(statearr_12101[(25)] = inst_12015__$1);

return statearr_12101;
})();
if(inst_12015__$1){
var statearr_12102_12170 = state_12056__$1;
(statearr_12102_12170[(1)] = (33));

} else {
var statearr_12103_12171 = state_12056__$1;
(statearr_12103_12171[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (25))){
var inst_11998 = (state_12056[(20)]);
var inst_11999 = (state_12056[(11)]);
var inst_12001 = (inst_11999 < inst_11998);
var inst_12002 = inst_12001;
var state_12056__$1 = state_12056;
if(cljs.core.truth_(inst_12002)){
var statearr_12104_12172 = state_12056__$1;
(statearr_12104_12172[(1)] = (27));

} else {
var statearr_12105_12173 = state_12056__$1;
(statearr_12105_12173[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (34))){
var state_12056__$1 = state_12056;
var statearr_12106_12174 = state_12056__$1;
(statearr_12106_12174[(2)] = null);

(statearr_12106_12174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (17))){
var state_12056__$1 = state_12056;
var statearr_12107_12175 = state_12056__$1;
(statearr_12107_12175[(2)] = null);

(statearr_12107_12175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (3))){
var inst_12054 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12056__$1,inst_12054);
} else {
if((state_val_12057 === (12))){
var inst_11983 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12108_12176 = state_12056__$1;
(statearr_12108_12176[(2)] = inst_11983);

(statearr_12108_12176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (2))){
var state_12056__$1 = state_12056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,(4),ch);
} else {
if((state_val_12057 === (23))){
var state_12056__$1 = state_12056;
var statearr_12109_12177 = state_12056__$1;
(statearr_12109_12177[(2)] = null);

(statearr_12109_12177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (35))){
var inst_12038 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12110_12178 = state_12056__$1;
(statearr_12110_12178[(2)] = inst_12038);

(statearr_12110_12178[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (19))){
var inst_11957 = (state_12056[(7)]);
var inst_11961 = cljs.core.chunk_first.call(null,inst_11957);
var inst_11962 = cljs.core.chunk_rest.call(null,inst_11957);
var inst_11963 = cljs.core.count.call(null,inst_11961);
var inst_11937 = inst_11962;
var inst_11938 = inst_11961;
var inst_11939 = inst_11963;
var inst_11940 = (0);
var state_12056__$1 = (function (){var statearr_12111 = state_12056;
(statearr_12111[(13)] = inst_11940);

(statearr_12111[(14)] = inst_11937);

(statearr_12111[(15)] = inst_11939);

(statearr_12111[(17)] = inst_11938);

return statearr_12111;
})();
var statearr_12112_12179 = state_12056__$1;
(statearr_12112_12179[(2)] = null);

(statearr_12112_12179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (11))){
var inst_11957 = (state_12056[(7)]);
var inst_11937 = (state_12056[(14)]);
var inst_11957__$1 = cljs.core.seq.call(null,inst_11937);
var state_12056__$1 = (function (){var statearr_12113 = state_12056;
(statearr_12113[(7)] = inst_11957__$1);

return statearr_12113;
})();
if(inst_11957__$1){
var statearr_12114_12180 = state_12056__$1;
(statearr_12114_12180[(1)] = (16));

} else {
var statearr_12115_12181 = state_12056__$1;
(statearr_12115_12181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (9))){
var inst_11985 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12116_12182 = state_12056__$1;
(statearr_12116_12182[(2)] = inst_11985);

(statearr_12116_12182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (5))){
var inst_11935 = cljs.core.deref.call(null,cs);
var inst_11936 = cljs.core.seq.call(null,inst_11935);
var inst_11937 = inst_11936;
var inst_11938 = null;
var inst_11939 = (0);
var inst_11940 = (0);
var state_12056__$1 = (function (){var statearr_12117 = state_12056;
(statearr_12117[(13)] = inst_11940);

(statearr_12117[(14)] = inst_11937);

(statearr_12117[(15)] = inst_11939);

(statearr_12117[(17)] = inst_11938);

return statearr_12117;
})();
var statearr_12118_12183 = state_12056__$1;
(statearr_12118_12183[(2)] = null);

(statearr_12118_12183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (14))){
var state_12056__$1 = state_12056;
var statearr_12119_12184 = state_12056__$1;
(statearr_12119_12184[(2)] = null);

(statearr_12119_12184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (45))){
var inst_12046 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12120_12185 = state_12056__$1;
(statearr_12120_12185[(2)] = inst_12046);

(statearr_12120_12185[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (26))){
var inst_11988 = (state_12056[(29)]);
var inst_12042 = (state_12056[(2)]);
var inst_12043 = cljs.core.seq.call(null,inst_11988);
var state_12056__$1 = (function (){var statearr_12121 = state_12056;
(statearr_12121[(31)] = inst_12042);

return statearr_12121;
})();
if(inst_12043){
var statearr_12122_12186 = state_12056__$1;
(statearr_12122_12186[(1)] = (42));

} else {
var statearr_12123_12187 = state_12056__$1;
(statearr_12123_12187[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (16))){
var inst_11957 = (state_12056[(7)]);
var inst_11959 = cljs.core.chunked_seq_QMARK_.call(null,inst_11957);
var state_12056__$1 = state_12056;
if(inst_11959){
var statearr_12124_12188 = state_12056__$1;
(statearr_12124_12188[(1)] = (19));

} else {
var statearr_12125_12189 = state_12056__$1;
(statearr_12125_12189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (38))){
var inst_12035 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12126_12190 = state_12056__$1;
(statearr_12126_12190[(2)] = inst_12035);

(statearr_12126_12190[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (30))){
var state_12056__$1 = state_12056;
var statearr_12127_12191 = state_12056__$1;
(statearr_12127_12191[(2)] = null);

(statearr_12127_12191[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (10))){
var inst_11940 = (state_12056[(13)]);
var inst_11938 = (state_12056[(17)]);
var inst_11946 = cljs.core._nth.call(null,inst_11938,inst_11940);
var inst_11947 = cljs.core.nth.call(null,inst_11946,(0),null);
var inst_11948 = cljs.core.nth.call(null,inst_11946,(1),null);
var state_12056__$1 = (function (){var statearr_12128 = state_12056;
(statearr_12128[(26)] = inst_11947);

return statearr_12128;
})();
if(cljs.core.truth_(inst_11948)){
var statearr_12129_12192 = state_12056__$1;
(statearr_12129_12192[(1)] = (13));

} else {
var statearr_12130_12193 = state_12056__$1;
(statearr_12130_12193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (18))){
var inst_11981 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12131_12194 = state_12056__$1;
(statearr_12131_12194[(2)] = inst_11981);

(statearr_12131_12194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (42))){
var state_12056__$1 = state_12056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,(45),dchan);
} else {
if((state_val_12057 === (37))){
var inst_11928 = (state_12056[(10)]);
var inst_12024 = (state_12056[(23)]);
var inst_12015 = (state_12056[(25)]);
var inst_12024__$1 = cljs.core.first.call(null,inst_12015);
var inst_12025 = cljs.core.async.put_BANG_.call(null,inst_12024__$1,inst_11928,done);
var state_12056__$1 = (function (){var statearr_12132 = state_12056;
(statearr_12132[(23)] = inst_12024__$1);

return statearr_12132;
})();
if(cljs.core.truth_(inst_12025)){
var statearr_12133_12195 = state_12056__$1;
(statearr_12133_12195[(1)] = (39));

} else {
var statearr_12134_12196 = state_12056__$1;
(statearr_12134_12196[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (8))){
var inst_11940 = (state_12056[(13)]);
var inst_11939 = (state_12056[(15)]);
var inst_11942 = (inst_11940 < inst_11939);
var inst_11943 = inst_11942;
var state_12056__$1 = state_12056;
if(cljs.core.truth_(inst_11943)){
var statearr_12135_12197 = state_12056__$1;
(statearr_12135_12197[(1)] = (10));

} else {
var statearr_12136_12198 = state_12056__$1;
(statearr_12136_12198[(1)] = (11));

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
});})(c__6828__auto___12144,cs,m,dchan,dctr,done))
;
return ((function (switch__6772__auto__,c__6828__auto___12144,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6773__auto__ = null;
var cljs$core$async$mult_$_state_machine__6773__auto____0 = (function (){
var statearr_12140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12140[(0)] = cljs$core$async$mult_$_state_machine__6773__auto__);

(statearr_12140[(1)] = (1));

return statearr_12140;
});
var cljs$core$async$mult_$_state_machine__6773__auto____1 = (function (state_12056){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_12056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e12141){if((e12141 instanceof Object)){
var ex__6776__auto__ = e12141;
var statearr_12142_12199 = state_12056;
(statearr_12142_12199[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12200 = state_12056;
state_12056 = G__12200;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6773__auto__ = function(state_12056){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6773__auto____1.call(this,state_12056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6773__auto____0;
cljs$core$async$mult_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6773__auto____1;
return cljs$core$async$mult_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___12144,cs,m,dchan,dctr,done))
})();
var state__6830__auto__ = (function (){var statearr_12143 = f__6829__auto__.call(null);
(statearr_12143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___12144);

return statearr_12143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___12144,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
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

cljs.core.async.Mix = (function (){var obj12202 = {};
return obj12202;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12203){
var map__12208 = p__12203;
var map__12208__$1 = ((cljs.core.seq_QMARK_.call(null,map__12208))?cljs.core.apply.call(null,cljs.core.hash_map,map__12208):map__12208);
var opts = map__12208__$1;
var statearr_12209_12212 = state;
(statearr_12209_12212[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12208,map__12208__$1,opts){
return (function (val){
var statearr_12210_12213 = state;
(statearr_12210_12213[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12208,map__12208__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12211_12214 = state;
(statearr_12211_12214[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12203 = null;
if (arguments.length > 3) {
var G__12215__i = 0, G__12215__a = new Array(arguments.length -  3);
while (G__12215__i < G__12215__a.length) {G__12215__a[G__12215__i] = arguments[G__12215__i + 3]; ++G__12215__i;}
  p__12203 = new cljs.core.IndexedSeq(G__12215__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12203);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12216){
var state = cljs.core.first(arglist__12216);
arglist__12216 = cljs.core.next(arglist__12216);
var cont_block = cljs.core.first(arglist__12216);
arglist__12216 = cljs.core.next(arglist__12216);
var ports = cljs.core.first(arglist__12216);
var p__12203 = cljs.core.rest(arglist__12216);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__12203);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
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
if(typeof cljs.core.async.t12336 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12336 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12337){
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
this.meta12337 = meta12337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12336.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12336.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12336.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12336.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12336.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12336.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t12336.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12338){
var self__ = this;
var _12338__$1 = this;
return self__.meta12337;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12338,meta12337__$1){
var self__ = this;
var _12338__$1 = this;
return (new cljs.core.async.t12336(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12337__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12336.cljs$lang$type = true;

cljs.core.async.t12336.cljs$lang$ctorStr = "cljs.core.async/t12336";

cljs.core.async.t12336.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t12336");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12336 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t12336(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12337){
return (new cljs.core.async.t12336(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12337));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12336(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6828__auto___12455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___12455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___12455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12408){
var state_val_12409 = (state_12408[(1)]);
if((state_val_12409 === (7))){
var inst_12352 = (state_12408[(7)]);
var inst_12357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12352);
var state_12408__$1 = state_12408;
var statearr_12410_12456 = state_12408__$1;
(statearr_12410_12456[(2)] = inst_12357);

(statearr_12410_12456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (20))){
var inst_12367 = (state_12408[(8)]);
var state_12408__$1 = state_12408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12408__$1,(23),out,inst_12367);
} else {
if((state_val_12409 === (1))){
var inst_12342 = (state_12408[(9)]);
var inst_12342__$1 = calc_state.call(null);
var inst_12343 = cljs.core.seq_QMARK_.call(null,inst_12342__$1);
var state_12408__$1 = (function (){var statearr_12411 = state_12408;
(statearr_12411[(9)] = inst_12342__$1);

return statearr_12411;
})();
if(inst_12343){
var statearr_12412_12457 = state_12408__$1;
(statearr_12412_12457[(1)] = (2));

} else {
var statearr_12413_12458 = state_12408__$1;
(statearr_12413_12458[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (24))){
var inst_12360 = (state_12408[(10)]);
var inst_12352 = inst_12360;
var state_12408__$1 = (function (){var statearr_12414 = state_12408;
(statearr_12414[(7)] = inst_12352);

return statearr_12414;
})();
var statearr_12415_12459 = state_12408__$1;
(statearr_12415_12459[(2)] = null);

(statearr_12415_12459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (4))){
var inst_12342 = (state_12408[(9)]);
var inst_12348 = (state_12408[(2)]);
var inst_12349 = cljs.core.get.call(null,inst_12348,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12350 = cljs.core.get.call(null,inst_12348,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12351 = cljs.core.get.call(null,inst_12348,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12352 = inst_12342;
var state_12408__$1 = (function (){var statearr_12416 = state_12408;
(statearr_12416[(7)] = inst_12352);

(statearr_12416[(11)] = inst_12349);

(statearr_12416[(12)] = inst_12351);

(statearr_12416[(13)] = inst_12350);

return statearr_12416;
})();
var statearr_12417_12460 = state_12408__$1;
(statearr_12417_12460[(2)] = null);

(statearr_12417_12460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (15))){
var state_12408__$1 = state_12408;
var statearr_12418_12461 = state_12408__$1;
(statearr_12418_12461[(2)] = null);

(statearr_12418_12461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (21))){
var inst_12360 = (state_12408[(10)]);
var inst_12352 = inst_12360;
var state_12408__$1 = (function (){var statearr_12419 = state_12408;
(statearr_12419[(7)] = inst_12352);

return statearr_12419;
})();
var statearr_12420_12462 = state_12408__$1;
(statearr_12420_12462[(2)] = null);

(statearr_12420_12462[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (13))){
var inst_12404 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12421_12463 = state_12408__$1;
(statearr_12421_12463[(2)] = inst_12404);

(statearr_12421_12463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (22))){
var inst_12402 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12422_12464 = state_12408__$1;
(statearr_12422_12464[(2)] = inst_12402);

(statearr_12422_12464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (6))){
var inst_12406 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12408__$1,inst_12406);
} else {
if((state_val_12409 === (25))){
var state_12408__$1 = state_12408;
var statearr_12423_12465 = state_12408__$1;
(statearr_12423_12465[(2)] = null);

(statearr_12423_12465[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (17))){
var inst_12382 = (state_12408[(14)]);
var state_12408__$1 = state_12408;
var statearr_12424_12466 = state_12408__$1;
(statearr_12424_12466[(2)] = inst_12382);

(statearr_12424_12466[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (3))){
var inst_12342 = (state_12408[(9)]);
var state_12408__$1 = state_12408;
var statearr_12425_12467 = state_12408__$1;
(statearr_12425_12467[(2)] = inst_12342);

(statearr_12425_12467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (12))){
var inst_12382 = (state_12408[(14)]);
var inst_12363 = (state_12408[(15)]);
var inst_12368 = (state_12408[(16)]);
var inst_12382__$1 = inst_12363.call(null,inst_12368);
var state_12408__$1 = (function (){var statearr_12426 = state_12408;
(statearr_12426[(14)] = inst_12382__$1);

return statearr_12426;
})();
if(cljs.core.truth_(inst_12382__$1)){
var statearr_12427_12468 = state_12408__$1;
(statearr_12427_12468[(1)] = (17));

} else {
var statearr_12428_12469 = state_12408__$1;
(statearr_12428_12469[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (2))){
var inst_12342 = (state_12408[(9)]);
var inst_12345 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12342);
var state_12408__$1 = state_12408;
var statearr_12429_12470 = state_12408__$1;
(statearr_12429_12470[(2)] = inst_12345);

(statearr_12429_12470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (23))){
var inst_12393 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
if(cljs.core.truth_(inst_12393)){
var statearr_12430_12471 = state_12408__$1;
(statearr_12430_12471[(1)] = (24));

} else {
var statearr_12431_12472 = state_12408__$1;
(statearr_12431_12472[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (19))){
var inst_12390 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
if(cljs.core.truth_(inst_12390)){
var statearr_12432_12473 = state_12408__$1;
(statearr_12432_12473[(1)] = (20));

} else {
var statearr_12433_12474 = state_12408__$1;
(statearr_12433_12474[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (11))){
var inst_12367 = (state_12408[(8)]);
var inst_12373 = (inst_12367 == null);
var state_12408__$1 = state_12408;
if(cljs.core.truth_(inst_12373)){
var statearr_12434_12475 = state_12408__$1;
(statearr_12434_12475[(1)] = (14));

} else {
var statearr_12435_12476 = state_12408__$1;
(statearr_12435_12476[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (9))){
var inst_12360 = (state_12408[(10)]);
var inst_12360__$1 = (state_12408[(2)]);
var inst_12361 = cljs.core.get.call(null,inst_12360__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12362 = cljs.core.get.call(null,inst_12360__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12363 = cljs.core.get.call(null,inst_12360__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_12408__$1 = (function (){var statearr_12436 = state_12408;
(statearr_12436[(17)] = inst_12362);

(statearr_12436[(15)] = inst_12363);

(statearr_12436[(10)] = inst_12360__$1);

return statearr_12436;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12408__$1,(10),inst_12361);
} else {
if((state_val_12409 === (5))){
var inst_12352 = (state_12408[(7)]);
var inst_12355 = cljs.core.seq_QMARK_.call(null,inst_12352);
var state_12408__$1 = state_12408;
if(inst_12355){
var statearr_12437_12477 = state_12408__$1;
(statearr_12437_12477[(1)] = (7));

} else {
var statearr_12438_12478 = state_12408__$1;
(statearr_12438_12478[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (14))){
var inst_12368 = (state_12408[(16)]);
var inst_12375 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12368);
var state_12408__$1 = state_12408;
var statearr_12439_12479 = state_12408__$1;
(statearr_12439_12479[(2)] = inst_12375);

(statearr_12439_12479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (26))){
var inst_12398 = (state_12408[(2)]);
var state_12408__$1 = state_12408;
var statearr_12440_12480 = state_12408__$1;
(statearr_12440_12480[(2)] = inst_12398);

(statearr_12440_12480[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (16))){
var inst_12378 = (state_12408[(2)]);
var inst_12379 = calc_state.call(null);
var inst_12352 = inst_12379;
var state_12408__$1 = (function (){var statearr_12441 = state_12408;
(statearr_12441[(7)] = inst_12352);

(statearr_12441[(18)] = inst_12378);

return statearr_12441;
})();
var statearr_12442_12481 = state_12408__$1;
(statearr_12442_12481[(2)] = null);

(statearr_12442_12481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (10))){
var inst_12367 = (state_12408[(8)]);
var inst_12368 = (state_12408[(16)]);
var inst_12366 = (state_12408[(2)]);
var inst_12367__$1 = cljs.core.nth.call(null,inst_12366,(0),null);
var inst_12368__$1 = cljs.core.nth.call(null,inst_12366,(1),null);
var inst_12369 = (inst_12367__$1 == null);
var inst_12370 = cljs.core._EQ_.call(null,inst_12368__$1,change);
var inst_12371 = (inst_12369) || (inst_12370);
var state_12408__$1 = (function (){var statearr_12443 = state_12408;
(statearr_12443[(8)] = inst_12367__$1);

(statearr_12443[(16)] = inst_12368__$1);

return statearr_12443;
})();
if(cljs.core.truth_(inst_12371)){
var statearr_12444_12482 = state_12408__$1;
(statearr_12444_12482[(1)] = (11));

} else {
var statearr_12445_12483 = state_12408__$1;
(statearr_12445_12483[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (18))){
var inst_12362 = (state_12408[(17)]);
var inst_12363 = (state_12408[(15)]);
var inst_12368 = (state_12408[(16)]);
var inst_12385 = cljs.core.empty_QMARK_.call(null,inst_12363);
var inst_12386 = inst_12362.call(null,inst_12368);
var inst_12387 = cljs.core.not.call(null,inst_12386);
var inst_12388 = (inst_12385) && (inst_12387);
var state_12408__$1 = state_12408;
var statearr_12446_12484 = state_12408__$1;
(statearr_12446_12484[(2)] = inst_12388);

(statearr_12446_12484[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12409 === (8))){
var inst_12352 = (state_12408[(7)]);
var state_12408__$1 = state_12408;
var statearr_12447_12485 = state_12408__$1;
(statearr_12447_12485[(2)] = inst_12352);

(statearr_12447_12485[(1)] = (9));


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
});})(c__6828__auto___12455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6772__auto__,c__6828__auto___12455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6773__auto__ = null;
var cljs$core$async$mix_$_state_machine__6773__auto____0 = (function (){
var statearr_12451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12451[(0)] = cljs$core$async$mix_$_state_machine__6773__auto__);

(statearr_12451[(1)] = (1));

return statearr_12451;
});
var cljs$core$async$mix_$_state_machine__6773__auto____1 = (function (state_12408){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_12408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e12452){if((e12452 instanceof Object)){
var ex__6776__auto__ = e12452;
var statearr_12453_12486 = state_12408;
(statearr_12453_12486[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12487 = state_12408;
state_12408 = G__12487;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6773__auto__ = function(state_12408){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6773__auto____1.call(this,state_12408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6773__auto____0;
cljs$core$async$mix_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6773__auto____1;
return cljs$core$async$mix_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___12455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6830__auto__ = (function (){var statearr_12454 = f__6829__auto__.call(null);
(statearr_12454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___12455);

return statearr_12454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___12455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj12489 = {};
return obj12489;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

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
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4122__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4122__auto__,mults){
return (function (p1__12490_SHARP_){
if(cljs.core.truth_(p1__12490_SHARP_.call(null,topic))){
return p1__12490_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12490_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4122__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12613 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12613 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12614){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12614 = meta12614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12613.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12613.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12613.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t12613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12613.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12615){
var self__ = this;
var _12615__$1 = this;
return self__.meta12614;
});})(mults,ensure_mult))
;

cljs.core.async.t12613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12615,meta12614__$1){
var self__ = this;
var _12615__$1 = this;
return (new cljs.core.async.t12613(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12614__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12613.cljs$lang$type = true;

cljs.core.async.t12613.cljs$lang$ctorStr = "cljs.core.async/t12613";

cljs.core.async.t12613.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t12613");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12613 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t12613(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12614){
return (new cljs.core.async.t12613(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12614));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12613(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6828__auto___12735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___12735,mults,ensure_mult,p){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___12735,mults,ensure_mult,p){
return (function (state_12687){
var state_val_12688 = (state_12687[(1)]);
if((state_val_12688 === (7))){
var inst_12683 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12689_12736 = state_12687__$1;
(statearr_12689_12736[(2)] = inst_12683);

(statearr_12689_12736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (20))){
var state_12687__$1 = state_12687;
var statearr_12690_12737 = state_12687__$1;
(statearr_12690_12737[(2)] = null);

(statearr_12690_12737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (1))){
var state_12687__$1 = state_12687;
var statearr_12691_12738 = state_12687__$1;
(statearr_12691_12738[(2)] = null);

(statearr_12691_12738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (24))){
var inst_12666 = (state_12687[(7)]);
var inst_12675 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12666);
var state_12687__$1 = state_12687;
var statearr_12692_12739 = state_12687__$1;
(statearr_12692_12739[(2)] = inst_12675);

(statearr_12692_12739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (4))){
var inst_12618 = (state_12687[(8)]);
var inst_12618__$1 = (state_12687[(2)]);
var inst_12619 = (inst_12618__$1 == null);
var state_12687__$1 = (function (){var statearr_12693 = state_12687;
(statearr_12693[(8)] = inst_12618__$1);

return statearr_12693;
})();
if(cljs.core.truth_(inst_12619)){
var statearr_12694_12740 = state_12687__$1;
(statearr_12694_12740[(1)] = (5));

} else {
var statearr_12695_12741 = state_12687__$1;
(statearr_12695_12741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (15))){
var inst_12660 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12696_12742 = state_12687__$1;
(statearr_12696_12742[(2)] = inst_12660);

(statearr_12696_12742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (21))){
var inst_12680 = (state_12687[(2)]);
var state_12687__$1 = (function (){var statearr_12697 = state_12687;
(statearr_12697[(9)] = inst_12680);

return statearr_12697;
})();
var statearr_12698_12743 = state_12687__$1;
(statearr_12698_12743[(2)] = null);

(statearr_12698_12743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (13))){
var inst_12642 = (state_12687[(10)]);
var inst_12644 = cljs.core.chunked_seq_QMARK_.call(null,inst_12642);
var state_12687__$1 = state_12687;
if(inst_12644){
var statearr_12699_12744 = state_12687__$1;
(statearr_12699_12744[(1)] = (16));

} else {
var statearr_12700_12745 = state_12687__$1;
(statearr_12700_12745[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (22))){
var inst_12672 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
if(cljs.core.truth_(inst_12672)){
var statearr_12701_12746 = state_12687__$1;
(statearr_12701_12746[(1)] = (23));

} else {
var statearr_12702_12747 = state_12687__$1;
(statearr_12702_12747[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (6))){
var inst_12618 = (state_12687[(8)]);
var inst_12666 = (state_12687[(7)]);
var inst_12668 = (state_12687[(11)]);
var inst_12666__$1 = topic_fn.call(null,inst_12618);
var inst_12667 = cljs.core.deref.call(null,mults);
var inst_12668__$1 = cljs.core.get.call(null,inst_12667,inst_12666__$1);
var state_12687__$1 = (function (){var statearr_12703 = state_12687;
(statearr_12703[(7)] = inst_12666__$1);

(statearr_12703[(11)] = inst_12668__$1);

return statearr_12703;
})();
if(cljs.core.truth_(inst_12668__$1)){
var statearr_12704_12748 = state_12687__$1;
(statearr_12704_12748[(1)] = (19));

} else {
var statearr_12705_12749 = state_12687__$1;
(statearr_12705_12749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (25))){
var inst_12677 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12706_12750 = state_12687__$1;
(statearr_12706_12750[(2)] = inst_12677);

(statearr_12706_12750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (17))){
var inst_12642 = (state_12687[(10)]);
var inst_12651 = cljs.core.first.call(null,inst_12642);
var inst_12652 = cljs.core.async.muxch_STAR_.call(null,inst_12651);
var inst_12653 = cljs.core.async.close_BANG_.call(null,inst_12652);
var inst_12654 = cljs.core.next.call(null,inst_12642);
var inst_12628 = inst_12654;
var inst_12629 = null;
var inst_12630 = (0);
var inst_12631 = (0);
var state_12687__$1 = (function (){var statearr_12707 = state_12687;
(statearr_12707[(12)] = inst_12630);

(statearr_12707[(13)] = inst_12628);

(statearr_12707[(14)] = inst_12653);

(statearr_12707[(15)] = inst_12629);

(statearr_12707[(16)] = inst_12631);

return statearr_12707;
})();
var statearr_12708_12751 = state_12687__$1;
(statearr_12708_12751[(2)] = null);

(statearr_12708_12751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (3))){
var inst_12685 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12687__$1,inst_12685);
} else {
if((state_val_12688 === (12))){
var inst_12662 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12709_12752 = state_12687__$1;
(statearr_12709_12752[(2)] = inst_12662);

(statearr_12709_12752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (2))){
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12687__$1,(4),ch);
} else {
if((state_val_12688 === (23))){
var state_12687__$1 = state_12687;
var statearr_12710_12753 = state_12687__$1;
(statearr_12710_12753[(2)] = null);

(statearr_12710_12753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (19))){
var inst_12618 = (state_12687[(8)]);
var inst_12668 = (state_12687[(11)]);
var inst_12670 = cljs.core.async.muxch_STAR_.call(null,inst_12668);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12687__$1,(22),inst_12670,inst_12618);
} else {
if((state_val_12688 === (11))){
var inst_12642 = (state_12687[(10)]);
var inst_12628 = (state_12687[(13)]);
var inst_12642__$1 = cljs.core.seq.call(null,inst_12628);
var state_12687__$1 = (function (){var statearr_12711 = state_12687;
(statearr_12711[(10)] = inst_12642__$1);

return statearr_12711;
})();
if(inst_12642__$1){
var statearr_12712_12754 = state_12687__$1;
(statearr_12712_12754[(1)] = (13));

} else {
var statearr_12713_12755 = state_12687__$1;
(statearr_12713_12755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (9))){
var inst_12664 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12714_12756 = state_12687__$1;
(statearr_12714_12756[(2)] = inst_12664);

(statearr_12714_12756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (5))){
var inst_12625 = cljs.core.deref.call(null,mults);
var inst_12626 = cljs.core.vals.call(null,inst_12625);
var inst_12627 = cljs.core.seq.call(null,inst_12626);
var inst_12628 = inst_12627;
var inst_12629 = null;
var inst_12630 = (0);
var inst_12631 = (0);
var state_12687__$1 = (function (){var statearr_12715 = state_12687;
(statearr_12715[(12)] = inst_12630);

(statearr_12715[(13)] = inst_12628);

(statearr_12715[(15)] = inst_12629);

(statearr_12715[(16)] = inst_12631);

return statearr_12715;
})();
var statearr_12716_12757 = state_12687__$1;
(statearr_12716_12757[(2)] = null);

(statearr_12716_12757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (14))){
var state_12687__$1 = state_12687;
var statearr_12720_12758 = state_12687__$1;
(statearr_12720_12758[(2)] = null);

(statearr_12720_12758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (16))){
var inst_12642 = (state_12687[(10)]);
var inst_12646 = cljs.core.chunk_first.call(null,inst_12642);
var inst_12647 = cljs.core.chunk_rest.call(null,inst_12642);
var inst_12648 = cljs.core.count.call(null,inst_12646);
var inst_12628 = inst_12647;
var inst_12629 = inst_12646;
var inst_12630 = inst_12648;
var inst_12631 = (0);
var state_12687__$1 = (function (){var statearr_12721 = state_12687;
(statearr_12721[(12)] = inst_12630);

(statearr_12721[(13)] = inst_12628);

(statearr_12721[(15)] = inst_12629);

(statearr_12721[(16)] = inst_12631);

return statearr_12721;
})();
var statearr_12722_12759 = state_12687__$1;
(statearr_12722_12759[(2)] = null);

(statearr_12722_12759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (10))){
var inst_12630 = (state_12687[(12)]);
var inst_12628 = (state_12687[(13)]);
var inst_12629 = (state_12687[(15)]);
var inst_12631 = (state_12687[(16)]);
var inst_12636 = cljs.core._nth.call(null,inst_12629,inst_12631);
var inst_12637 = cljs.core.async.muxch_STAR_.call(null,inst_12636);
var inst_12638 = cljs.core.async.close_BANG_.call(null,inst_12637);
var inst_12639 = (inst_12631 + (1));
var tmp12717 = inst_12630;
var tmp12718 = inst_12628;
var tmp12719 = inst_12629;
var inst_12628__$1 = tmp12718;
var inst_12629__$1 = tmp12719;
var inst_12630__$1 = tmp12717;
var inst_12631__$1 = inst_12639;
var state_12687__$1 = (function (){var statearr_12723 = state_12687;
(statearr_12723[(12)] = inst_12630__$1);

(statearr_12723[(13)] = inst_12628__$1);

(statearr_12723[(17)] = inst_12638);

(statearr_12723[(15)] = inst_12629__$1);

(statearr_12723[(16)] = inst_12631__$1);

return statearr_12723;
})();
var statearr_12724_12760 = state_12687__$1;
(statearr_12724_12760[(2)] = null);

(statearr_12724_12760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (18))){
var inst_12657 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12725_12761 = state_12687__$1;
(statearr_12725_12761[(2)] = inst_12657);

(statearr_12725_12761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (8))){
var inst_12630 = (state_12687[(12)]);
var inst_12631 = (state_12687[(16)]);
var inst_12633 = (inst_12631 < inst_12630);
var inst_12634 = inst_12633;
var state_12687__$1 = state_12687;
if(cljs.core.truth_(inst_12634)){
var statearr_12726_12762 = state_12687__$1;
(statearr_12726_12762[(1)] = (10));

} else {
var statearr_12727_12763 = state_12687__$1;
(statearr_12727_12763[(1)] = (11));

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
});})(c__6828__auto___12735,mults,ensure_mult,p))
;
return ((function (switch__6772__auto__,c__6828__auto___12735,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6773__auto__ = null;
var cljs$core$async$pub_$_state_machine__6773__auto____0 = (function (){
var statearr_12731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12731[(0)] = cljs$core$async$pub_$_state_machine__6773__auto__);

(statearr_12731[(1)] = (1));

return statearr_12731;
});
var cljs$core$async$pub_$_state_machine__6773__auto____1 = (function (state_12687){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_12687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e12732){if((e12732 instanceof Object)){
var ex__6776__auto__ = e12732;
var statearr_12733_12764 = state_12687;
(statearr_12733_12764[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12765 = state_12687;
state_12687 = G__12765;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6773__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6773__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6773__auto____0;
cljs$core$async$pub_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6773__auto____1;
return cljs$core$async$pub_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___12735,mults,ensure_mult,p))
})();
var state__6830__auto__ = (function (){var statearr_12734 = f__6829__auto__.call(null);
(statearr_12734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___12735);

return statearr_12734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___12735,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
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
var c__6828__auto___12902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___12902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___12902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12872){
var state_val_12873 = (state_12872[(1)]);
if((state_val_12873 === (7))){
var state_12872__$1 = state_12872;
var statearr_12874_12903 = state_12872__$1;
(statearr_12874_12903[(2)] = null);

(statearr_12874_12903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (1))){
var state_12872__$1 = state_12872;
var statearr_12875_12904 = state_12872__$1;
(statearr_12875_12904[(2)] = null);

(statearr_12875_12904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (4))){
var inst_12836 = (state_12872[(7)]);
var inst_12838 = (inst_12836 < cnt);
var state_12872__$1 = state_12872;
if(cljs.core.truth_(inst_12838)){
var statearr_12876_12905 = state_12872__$1;
(statearr_12876_12905[(1)] = (6));

} else {
var statearr_12877_12906 = state_12872__$1;
(statearr_12877_12906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (15))){
var inst_12868 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
var statearr_12878_12907 = state_12872__$1;
(statearr_12878_12907[(2)] = inst_12868);

(statearr_12878_12907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (13))){
var inst_12861 = cljs.core.async.close_BANG_.call(null,out);
var state_12872__$1 = state_12872;
var statearr_12879_12908 = state_12872__$1;
(statearr_12879_12908[(2)] = inst_12861);

(statearr_12879_12908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (6))){
var state_12872__$1 = state_12872;
var statearr_12880_12909 = state_12872__$1;
(statearr_12880_12909[(2)] = null);

(statearr_12880_12909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (3))){
var inst_12870 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12872__$1,inst_12870);
} else {
if((state_val_12873 === (12))){
var inst_12858 = (state_12872[(8)]);
var inst_12858__$1 = (state_12872[(2)]);
var inst_12859 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12858__$1);
var state_12872__$1 = (function (){var statearr_12881 = state_12872;
(statearr_12881[(8)] = inst_12858__$1);

return statearr_12881;
})();
if(cljs.core.truth_(inst_12859)){
var statearr_12882_12910 = state_12872__$1;
(statearr_12882_12910[(1)] = (13));

} else {
var statearr_12883_12911 = state_12872__$1;
(statearr_12883_12911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (2))){
var inst_12835 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12836 = (0);
var state_12872__$1 = (function (){var statearr_12884 = state_12872;
(statearr_12884[(7)] = inst_12836);

(statearr_12884[(9)] = inst_12835);

return statearr_12884;
})();
var statearr_12885_12912 = state_12872__$1;
(statearr_12885_12912[(2)] = null);

(statearr_12885_12912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (11))){
var inst_12836 = (state_12872[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12872,(10),Object,null,(9));
var inst_12845 = chs__$1.call(null,inst_12836);
var inst_12846 = done.call(null,inst_12836);
var inst_12847 = cljs.core.async.take_BANG_.call(null,inst_12845,inst_12846);
var state_12872__$1 = state_12872;
var statearr_12886_12913 = state_12872__$1;
(statearr_12886_12913[(2)] = inst_12847);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12872__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (9))){
var inst_12836 = (state_12872[(7)]);
var inst_12849 = (state_12872[(2)]);
var inst_12850 = (inst_12836 + (1));
var inst_12836__$1 = inst_12850;
var state_12872__$1 = (function (){var statearr_12887 = state_12872;
(statearr_12887[(7)] = inst_12836__$1);

(statearr_12887[(10)] = inst_12849);

return statearr_12887;
})();
var statearr_12888_12914 = state_12872__$1;
(statearr_12888_12914[(2)] = null);

(statearr_12888_12914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (5))){
var inst_12856 = (state_12872[(2)]);
var state_12872__$1 = (function (){var statearr_12889 = state_12872;
(statearr_12889[(11)] = inst_12856);

return statearr_12889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12872__$1,(12),dchan);
} else {
if((state_val_12873 === (14))){
var inst_12858 = (state_12872[(8)]);
var inst_12863 = cljs.core.apply.call(null,f,inst_12858);
var state_12872__$1 = state_12872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12872__$1,(16),out,inst_12863);
} else {
if((state_val_12873 === (16))){
var inst_12865 = (state_12872[(2)]);
var state_12872__$1 = (function (){var statearr_12890 = state_12872;
(statearr_12890[(12)] = inst_12865);

return statearr_12890;
})();
var statearr_12891_12915 = state_12872__$1;
(statearr_12891_12915[(2)] = null);

(statearr_12891_12915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (10))){
var inst_12840 = (state_12872[(2)]);
var inst_12841 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12872__$1 = (function (){var statearr_12892 = state_12872;
(statearr_12892[(13)] = inst_12840);

return statearr_12892;
})();
var statearr_12893_12916 = state_12872__$1;
(statearr_12893_12916[(2)] = inst_12841);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12872__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12873 === (8))){
var inst_12854 = (state_12872[(2)]);
var state_12872__$1 = state_12872;
var statearr_12894_12917 = state_12872__$1;
(statearr_12894_12917[(2)] = inst_12854);

(statearr_12894_12917[(1)] = (5));


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
});})(c__6828__auto___12902,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6772__auto__,c__6828__auto___12902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6773__auto__ = null;
var cljs$core$async$map_$_state_machine__6773__auto____0 = (function (){
var statearr_12898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12898[(0)] = cljs$core$async$map_$_state_machine__6773__auto__);

(statearr_12898[(1)] = (1));

return statearr_12898;
});
var cljs$core$async$map_$_state_machine__6773__auto____1 = (function (state_12872){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_12872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e12899){if((e12899 instanceof Object)){
var ex__6776__auto__ = e12899;
var statearr_12900_12918 = state_12872;
(statearr_12900_12918[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12919 = state_12872;
state_12872 = G__12919;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6773__auto__ = function(state_12872){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6773__auto____1.call(this,state_12872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6773__auto____0;
cljs$core$async$map_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6773__auto____1;
return cljs$core$async$map_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___12902,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6830__auto__ = (function (){var statearr_12901 = f__6829__auto__.call(null);
(statearr_12901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___12902);

return statearr_12901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___12902,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6828__auto___13027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___13027,out){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___13027,out){
return (function (state_13003){
var state_val_13004 = (state_13003[(1)]);
if((state_val_13004 === (7))){
var inst_12983 = (state_13003[(7)]);
var inst_12982 = (state_13003[(8)]);
var inst_12982__$1 = (state_13003[(2)]);
var inst_12983__$1 = cljs.core.nth.call(null,inst_12982__$1,(0),null);
var inst_12984 = cljs.core.nth.call(null,inst_12982__$1,(1),null);
var inst_12985 = (inst_12983__$1 == null);
var state_13003__$1 = (function (){var statearr_13005 = state_13003;
(statearr_13005[(7)] = inst_12983__$1);

(statearr_13005[(9)] = inst_12984);

(statearr_13005[(8)] = inst_12982__$1);

return statearr_13005;
})();
if(cljs.core.truth_(inst_12985)){
var statearr_13006_13028 = state_13003__$1;
(statearr_13006_13028[(1)] = (8));

} else {
var statearr_13007_13029 = state_13003__$1;
(statearr_13007_13029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13004 === (1))){
var inst_12974 = cljs.core.vec.call(null,chs);
var inst_12975 = inst_12974;
var state_13003__$1 = (function (){var statearr_13008 = state_13003;
(statearr_13008[(10)] = inst_12975);

return statearr_13008;
})();
var statearr_13009_13030 = state_13003__$1;
(statearr_13009_13030[(2)] = null);

(statearr_13009_13030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13004 === (4))){
var inst_12975 = (state_13003[(10)]);
var state_13003__$1 = state_13003;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13003__$1,(7),inst_12975);
} else {
if((state_val_13004 === (6))){
var inst_12999 = (state_13003[(2)]);
var state_13003__$1 = state_13003;
var statearr_13010_13031 = state_13003__$1;
(statearr_13010_13031[(2)] = inst_12999);

(statearr_13010_13031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13004 === (3))){
var inst_13001 = (state_13003[(2)]);
var state_13003__$1 = state_13003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13003__$1,inst_13001);
} else {
if((state_val_13004 === (2))){
var inst_12975 = (state_13003[(10)]);
var inst_12977 = cljs.core.count.call(null,inst_12975);
var inst_12978 = (inst_12977 > (0));
var state_13003__$1 = state_13003;
if(cljs.core.truth_(inst_12978)){
var statearr_13012_13032 = state_13003__$1;
(statearr_13012_13032[(1)] = (4));

} else {
var statearr_13013_13033 = state_13003__$1;
(statearr_13013_13033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13004 === (11))){
var inst_12975 = (state_13003[(10)]);
var inst_12992 = (state_13003[(2)]);
var tmp13011 = inst_12975;
var inst_12975__$1 = tmp13011;
var state_13003__$1 = (function (){var statearr_13014 = state_13003;
(statearr_13014[(10)] = inst_12975__$1);

(statearr_13014[(11)] = inst_12992);

return statearr_13014;
})();
var statearr_13015_13034 = state_13003__$1;
(statearr_13015_13034[(2)] = null);

(statearr_13015_13034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13004 === (9))){
var inst_12983 = (state_13003[(7)]);
var state_13003__$1 = state_13003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13003__$1,(11),out,inst_12983);
} else {
if((state_val_13004 === (5))){
var inst_12997 = cljs.core.async.close_BANG_.call(null,out);
var state_13003__$1 = state_13003;
var statearr_13016_13035 = state_13003__$1;
(statearr_13016_13035[(2)] = inst_12997);

(statearr_13016_13035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13004 === (10))){
var inst_12995 = (state_13003[(2)]);
var state_13003__$1 = state_13003;
var statearr_13017_13036 = state_13003__$1;
(statearr_13017_13036[(2)] = inst_12995);

(statearr_13017_13036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13004 === (8))){
var inst_12983 = (state_13003[(7)]);
var inst_12975 = (state_13003[(10)]);
var inst_12984 = (state_13003[(9)]);
var inst_12982 = (state_13003[(8)]);
var inst_12987 = (function (){var c = inst_12984;
var v = inst_12983;
var vec__12980 = inst_12982;
var cs = inst_12975;
return ((function (c,v,vec__12980,cs,inst_12983,inst_12975,inst_12984,inst_12982,state_val_13004,c__6828__auto___13027,out){
return (function (p1__12920_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12920_SHARP_);
});
;})(c,v,vec__12980,cs,inst_12983,inst_12975,inst_12984,inst_12982,state_val_13004,c__6828__auto___13027,out))
})();
var inst_12988 = cljs.core.filterv.call(null,inst_12987,inst_12975);
var inst_12975__$1 = inst_12988;
var state_13003__$1 = (function (){var statearr_13018 = state_13003;
(statearr_13018[(10)] = inst_12975__$1);

return statearr_13018;
})();
var statearr_13019_13037 = state_13003__$1;
(statearr_13019_13037[(2)] = null);

(statearr_13019_13037[(1)] = (2));


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
});})(c__6828__auto___13027,out))
;
return ((function (switch__6772__auto__,c__6828__auto___13027,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6773__auto__ = null;
var cljs$core$async$merge_$_state_machine__6773__auto____0 = (function (){
var statearr_13023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13023[(0)] = cljs$core$async$merge_$_state_machine__6773__auto__);

(statearr_13023[(1)] = (1));

return statearr_13023;
});
var cljs$core$async$merge_$_state_machine__6773__auto____1 = (function (state_13003){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_13003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e13024){if((e13024 instanceof Object)){
var ex__6776__auto__ = e13024;
var statearr_13025_13038 = state_13003;
(statearr_13025_13038[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13039 = state_13003;
state_13003 = G__13039;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6773__auto__ = function(state_13003){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6773__auto____1.call(this,state_13003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6773__auto____0;
cljs$core$async$merge_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6773__auto____1;
return cljs$core$async$merge_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___13027,out))
})();
var state__6830__auto__ = (function (){var statearr_13026 = f__6829__auto__.call(null);
(statearr_13026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___13027);

return statearr_13026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___13027,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
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
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6828__auto___13132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___13132,out){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___13132,out){
return (function (state_13109){
var state_val_13110 = (state_13109[(1)]);
if((state_val_13110 === (7))){
var inst_13091 = (state_13109[(7)]);
var inst_13091__$1 = (state_13109[(2)]);
var inst_13092 = (inst_13091__$1 == null);
var inst_13093 = cljs.core.not.call(null,inst_13092);
var state_13109__$1 = (function (){var statearr_13111 = state_13109;
(statearr_13111[(7)] = inst_13091__$1);

return statearr_13111;
})();
if(inst_13093){
var statearr_13112_13133 = state_13109__$1;
(statearr_13112_13133[(1)] = (8));

} else {
var statearr_13113_13134 = state_13109__$1;
(statearr_13113_13134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (1))){
var inst_13086 = (0);
var state_13109__$1 = (function (){var statearr_13114 = state_13109;
(statearr_13114[(8)] = inst_13086);

return statearr_13114;
})();
var statearr_13115_13135 = state_13109__$1;
(statearr_13115_13135[(2)] = null);

(statearr_13115_13135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (4))){
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13109__$1,(7),ch);
} else {
if((state_val_13110 === (6))){
var inst_13104 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
var statearr_13116_13136 = state_13109__$1;
(statearr_13116_13136[(2)] = inst_13104);

(statearr_13116_13136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (3))){
var inst_13106 = (state_13109[(2)]);
var inst_13107 = cljs.core.async.close_BANG_.call(null,out);
var state_13109__$1 = (function (){var statearr_13117 = state_13109;
(statearr_13117[(9)] = inst_13106);

return statearr_13117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13109__$1,inst_13107);
} else {
if((state_val_13110 === (2))){
var inst_13086 = (state_13109[(8)]);
var inst_13088 = (inst_13086 < n);
var state_13109__$1 = state_13109;
if(cljs.core.truth_(inst_13088)){
var statearr_13118_13137 = state_13109__$1;
(statearr_13118_13137[(1)] = (4));

} else {
var statearr_13119_13138 = state_13109__$1;
(statearr_13119_13138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (11))){
var inst_13086 = (state_13109[(8)]);
var inst_13096 = (state_13109[(2)]);
var inst_13097 = (inst_13086 + (1));
var inst_13086__$1 = inst_13097;
var state_13109__$1 = (function (){var statearr_13120 = state_13109;
(statearr_13120[(10)] = inst_13096);

(statearr_13120[(8)] = inst_13086__$1);

return statearr_13120;
})();
var statearr_13121_13139 = state_13109__$1;
(statearr_13121_13139[(2)] = null);

(statearr_13121_13139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (9))){
var state_13109__$1 = state_13109;
var statearr_13122_13140 = state_13109__$1;
(statearr_13122_13140[(2)] = null);

(statearr_13122_13140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (5))){
var state_13109__$1 = state_13109;
var statearr_13123_13141 = state_13109__$1;
(statearr_13123_13141[(2)] = null);

(statearr_13123_13141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (10))){
var inst_13101 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
var statearr_13124_13142 = state_13109__$1;
(statearr_13124_13142[(2)] = inst_13101);

(statearr_13124_13142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (8))){
var inst_13091 = (state_13109[(7)]);
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13109__$1,(11),out,inst_13091);
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
});})(c__6828__auto___13132,out))
;
return ((function (switch__6772__auto__,c__6828__auto___13132,out){
return (function() {
var cljs$core$async$take_$_state_machine__6773__auto__ = null;
var cljs$core$async$take_$_state_machine__6773__auto____0 = (function (){
var statearr_13128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13128[(0)] = cljs$core$async$take_$_state_machine__6773__auto__);

(statearr_13128[(1)] = (1));

return statearr_13128;
});
var cljs$core$async$take_$_state_machine__6773__auto____1 = (function (state_13109){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_13109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e13129){if((e13129 instanceof Object)){
var ex__6776__auto__ = e13129;
var statearr_13130_13143 = state_13109;
(statearr_13130_13143[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13144 = state_13109;
state_13109 = G__13144;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6773__auto__ = function(state_13109){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6773__auto____1.call(this,state_13109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6773__auto____0;
cljs$core$async$take_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6773__auto____1;
return cljs$core$async$take_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___13132,out))
})();
var state__6830__auto__ = (function (){var statearr_13131 = f__6829__auto__.call(null);
(statearr_13131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___13132);

return statearr_13131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___13132,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t13152 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13152 = (function (ch,f,map_LT_,meta13153){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13153 = meta13153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13155 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13155 = (function (fn1,_,meta13153,map_LT_,f,ch,meta13156){
this.fn1 = fn1;
this._ = _;
this.meta13153 = meta13153;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13156 = meta13156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13155.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13145_SHARP_){
return f1.call(null,(((p1__13145_SHARP_ == null))?null:self__.f.call(null,p1__13145_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13157){
var self__ = this;
var _13157__$1 = this;
return self__.meta13156;
});})(___$1))
;

cljs.core.async.t13155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13157,meta13156__$1){
var self__ = this;
var _13157__$1 = this;
return (new cljs.core.async.t13155(self__.fn1,self__._,self__.meta13153,self__.map_LT_,self__.f,self__.ch,meta13156__$1));
});})(___$1))
;

cljs.core.async.t13155.cljs$lang$type = true;

cljs.core.async.t13155.cljs$lang$ctorStr = "cljs.core.async/t13155";

cljs.core.async.t13155.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13155");
});})(___$1))
;

cljs.core.async.__GT_t13155 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t13155(fn1__$1,___$2,meta13153__$1,map_LT___$1,f__$1,ch__$1,meta13156){
return (new cljs.core.async.t13155(fn1__$1,___$2,meta13153__$1,map_LT___$1,f__$1,ch__$1,meta13156));
});})(___$1))
;

}

return (new cljs.core.async.t13155(fn1,___$1,self__.meta13153,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4110__auto__ = ret;
if(cljs.core.truth_(and__4110__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4110__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t13152.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13154){
var self__ = this;
var _13154__$1 = this;
return self__.meta13153;
});

cljs.core.async.t13152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13154,meta13153__$1){
var self__ = this;
var _13154__$1 = this;
return (new cljs.core.async.t13152(self__.ch,self__.f,self__.map_LT_,meta13153__$1));
});

cljs.core.async.t13152.cljs$lang$type = true;

cljs.core.async.t13152.cljs$lang$ctorStr = "cljs.core.async/t13152";

cljs.core.async.t13152.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13152");
});

cljs.core.async.__GT_t13152 = (function cljs$core$async$map_LT__$___GT_t13152(ch__$1,f__$1,map_LT___$1,meta13153){
return (new cljs.core.async.t13152(ch__$1,f__$1,map_LT___$1,meta13153));
});

}

return (new cljs.core.async.t13152(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t13161 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13161 = (function (ch,f,map_GT_,meta13162){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13162 = meta13162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13161.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13163){
var self__ = this;
var _13163__$1 = this;
return self__.meta13162;
});

cljs.core.async.t13161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13163,meta13162__$1){
var self__ = this;
var _13163__$1 = this;
return (new cljs.core.async.t13161(self__.ch,self__.f,self__.map_GT_,meta13162__$1));
});

cljs.core.async.t13161.cljs$lang$type = true;

cljs.core.async.t13161.cljs$lang$ctorStr = "cljs.core.async/t13161";

cljs.core.async.t13161.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13161");
});

cljs.core.async.__GT_t13161 = (function cljs$core$async$map_GT__$___GT_t13161(ch__$1,f__$1,map_GT___$1,meta13162){
return (new cljs.core.async.t13161(ch__$1,f__$1,map_GT___$1,meta13162));
});

}

return (new cljs.core.async.t13161(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t13167 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13167 = (function (ch,p,filter_GT_,meta13168){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13168 = meta13168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13167.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13167.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13167.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13169){
var self__ = this;
var _13169__$1 = this;
return self__.meta13168;
});

cljs.core.async.t13167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13169,meta13168__$1){
var self__ = this;
var _13169__$1 = this;
return (new cljs.core.async.t13167(self__.ch,self__.p,self__.filter_GT_,meta13168__$1));
});

cljs.core.async.t13167.cljs$lang$type = true;

cljs.core.async.t13167.cljs$lang$ctorStr = "cljs.core.async/t13167";

cljs.core.async.t13167.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13167");
});

cljs.core.async.__GT_t13167 = (function cljs$core$async$filter_GT__$___GT_t13167(ch__$1,p__$1,filter_GT___$1,meta13168){
return (new cljs.core.async.t13167(ch__$1,p__$1,filter_GT___$1,meta13168));
});

}

return (new cljs.core.async.t13167(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6828__auto___13252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___13252,out){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___13252,out){
return (function (state_13231){
var state_val_13232 = (state_13231[(1)]);
if((state_val_13232 === (7))){
var inst_13227 = (state_13231[(2)]);
var state_13231__$1 = state_13231;
var statearr_13233_13253 = state_13231__$1;
(statearr_13233_13253[(2)] = inst_13227);

(statearr_13233_13253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (1))){
var state_13231__$1 = state_13231;
var statearr_13234_13254 = state_13231__$1;
(statearr_13234_13254[(2)] = null);

(statearr_13234_13254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (4))){
var inst_13213 = (state_13231[(7)]);
var inst_13213__$1 = (state_13231[(2)]);
var inst_13214 = (inst_13213__$1 == null);
var state_13231__$1 = (function (){var statearr_13235 = state_13231;
(statearr_13235[(7)] = inst_13213__$1);

return statearr_13235;
})();
if(cljs.core.truth_(inst_13214)){
var statearr_13236_13255 = state_13231__$1;
(statearr_13236_13255[(1)] = (5));

} else {
var statearr_13237_13256 = state_13231__$1;
(statearr_13237_13256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (6))){
var inst_13213 = (state_13231[(7)]);
var inst_13218 = p.call(null,inst_13213);
var state_13231__$1 = state_13231;
if(cljs.core.truth_(inst_13218)){
var statearr_13238_13257 = state_13231__$1;
(statearr_13238_13257[(1)] = (8));

} else {
var statearr_13239_13258 = state_13231__$1;
(statearr_13239_13258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (3))){
var inst_13229 = (state_13231[(2)]);
var state_13231__$1 = state_13231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13231__$1,inst_13229);
} else {
if((state_val_13232 === (2))){
var state_13231__$1 = state_13231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13231__$1,(4),ch);
} else {
if((state_val_13232 === (11))){
var inst_13221 = (state_13231[(2)]);
var state_13231__$1 = state_13231;
var statearr_13240_13259 = state_13231__$1;
(statearr_13240_13259[(2)] = inst_13221);

(statearr_13240_13259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (9))){
var state_13231__$1 = state_13231;
var statearr_13241_13260 = state_13231__$1;
(statearr_13241_13260[(2)] = null);

(statearr_13241_13260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (5))){
var inst_13216 = cljs.core.async.close_BANG_.call(null,out);
var state_13231__$1 = state_13231;
var statearr_13242_13261 = state_13231__$1;
(statearr_13242_13261[(2)] = inst_13216);

(statearr_13242_13261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (10))){
var inst_13224 = (state_13231[(2)]);
var state_13231__$1 = (function (){var statearr_13243 = state_13231;
(statearr_13243[(8)] = inst_13224);

return statearr_13243;
})();
var statearr_13244_13262 = state_13231__$1;
(statearr_13244_13262[(2)] = null);

(statearr_13244_13262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13232 === (8))){
var inst_13213 = (state_13231[(7)]);
var state_13231__$1 = state_13231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13231__$1,(11),out,inst_13213);
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
});})(c__6828__auto___13252,out))
;
return ((function (switch__6772__auto__,c__6828__auto___13252,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6773__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6773__auto____0 = (function (){
var statearr_13248 = [null,null,null,null,null,null,null,null,null];
(statearr_13248[(0)] = cljs$core$async$filter_LT__$_state_machine__6773__auto__);

(statearr_13248[(1)] = (1));

return statearr_13248;
});
var cljs$core$async$filter_LT__$_state_machine__6773__auto____1 = (function (state_13231){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_13231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e13249){if((e13249 instanceof Object)){
var ex__6776__auto__ = e13249;
var statearr_13250_13263 = state_13231;
(statearr_13250_13263[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13264 = state_13231;
state_13231 = G__13264;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6773__auto__ = function(state_13231){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6773__auto____1.call(this,state_13231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6773__auto____0;
cljs$core$async$filter_LT__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6773__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___13252,out))
})();
var state__6830__auto__ = (function (){var statearr_13251 = f__6829__auto__.call(null);
(statearr_13251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___13252);

return statearr_13251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___13252,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto__){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto__){
return (function (state_13430){
var state_val_13431 = (state_13430[(1)]);
if((state_val_13431 === (7))){
var inst_13426 = (state_13430[(2)]);
var state_13430__$1 = state_13430;
var statearr_13432_13473 = state_13430__$1;
(statearr_13432_13473[(2)] = inst_13426);

(statearr_13432_13473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (20))){
var inst_13396 = (state_13430[(7)]);
var inst_13407 = (state_13430[(2)]);
var inst_13408 = cljs.core.next.call(null,inst_13396);
var inst_13382 = inst_13408;
var inst_13383 = null;
var inst_13384 = (0);
var inst_13385 = (0);
var state_13430__$1 = (function (){var statearr_13433 = state_13430;
(statearr_13433[(8)] = inst_13407);

(statearr_13433[(9)] = inst_13384);

(statearr_13433[(10)] = inst_13382);

(statearr_13433[(11)] = inst_13383);

(statearr_13433[(12)] = inst_13385);

return statearr_13433;
})();
var statearr_13434_13474 = state_13430__$1;
(statearr_13434_13474[(2)] = null);

(statearr_13434_13474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (1))){
var state_13430__$1 = state_13430;
var statearr_13435_13475 = state_13430__$1;
(statearr_13435_13475[(2)] = null);

(statearr_13435_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (4))){
var inst_13371 = (state_13430[(13)]);
var inst_13371__$1 = (state_13430[(2)]);
var inst_13372 = (inst_13371__$1 == null);
var state_13430__$1 = (function (){var statearr_13436 = state_13430;
(statearr_13436[(13)] = inst_13371__$1);

return statearr_13436;
})();
if(cljs.core.truth_(inst_13372)){
var statearr_13437_13476 = state_13430__$1;
(statearr_13437_13476[(1)] = (5));

} else {
var statearr_13438_13477 = state_13430__$1;
(statearr_13438_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (15))){
var state_13430__$1 = state_13430;
var statearr_13442_13478 = state_13430__$1;
(statearr_13442_13478[(2)] = null);

(statearr_13442_13478[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (21))){
var state_13430__$1 = state_13430;
var statearr_13443_13479 = state_13430__$1;
(statearr_13443_13479[(2)] = null);

(statearr_13443_13479[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (13))){
var inst_13384 = (state_13430[(9)]);
var inst_13382 = (state_13430[(10)]);
var inst_13383 = (state_13430[(11)]);
var inst_13385 = (state_13430[(12)]);
var inst_13392 = (state_13430[(2)]);
var inst_13393 = (inst_13385 + (1));
var tmp13439 = inst_13384;
var tmp13440 = inst_13382;
var tmp13441 = inst_13383;
var inst_13382__$1 = tmp13440;
var inst_13383__$1 = tmp13441;
var inst_13384__$1 = tmp13439;
var inst_13385__$1 = inst_13393;
var state_13430__$1 = (function (){var statearr_13444 = state_13430;
(statearr_13444[(9)] = inst_13384__$1);

(statearr_13444[(10)] = inst_13382__$1);

(statearr_13444[(11)] = inst_13383__$1);

(statearr_13444[(12)] = inst_13385__$1);

(statearr_13444[(14)] = inst_13392);

return statearr_13444;
})();
var statearr_13445_13480 = state_13430__$1;
(statearr_13445_13480[(2)] = null);

(statearr_13445_13480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (22))){
var state_13430__$1 = state_13430;
var statearr_13446_13481 = state_13430__$1;
(statearr_13446_13481[(2)] = null);

(statearr_13446_13481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (6))){
var inst_13371 = (state_13430[(13)]);
var inst_13380 = f.call(null,inst_13371);
var inst_13381 = cljs.core.seq.call(null,inst_13380);
var inst_13382 = inst_13381;
var inst_13383 = null;
var inst_13384 = (0);
var inst_13385 = (0);
var state_13430__$1 = (function (){var statearr_13447 = state_13430;
(statearr_13447[(9)] = inst_13384);

(statearr_13447[(10)] = inst_13382);

(statearr_13447[(11)] = inst_13383);

(statearr_13447[(12)] = inst_13385);

return statearr_13447;
})();
var statearr_13448_13482 = state_13430__$1;
(statearr_13448_13482[(2)] = null);

(statearr_13448_13482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (17))){
var inst_13396 = (state_13430[(7)]);
var inst_13400 = cljs.core.chunk_first.call(null,inst_13396);
var inst_13401 = cljs.core.chunk_rest.call(null,inst_13396);
var inst_13402 = cljs.core.count.call(null,inst_13400);
var inst_13382 = inst_13401;
var inst_13383 = inst_13400;
var inst_13384 = inst_13402;
var inst_13385 = (0);
var state_13430__$1 = (function (){var statearr_13449 = state_13430;
(statearr_13449[(9)] = inst_13384);

(statearr_13449[(10)] = inst_13382);

(statearr_13449[(11)] = inst_13383);

(statearr_13449[(12)] = inst_13385);

return statearr_13449;
})();
var statearr_13450_13483 = state_13430__$1;
(statearr_13450_13483[(2)] = null);

(statearr_13450_13483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (3))){
var inst_13428 = (state_13430[(2)]);
var state_13430__$1 = state_13430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13430__$1,inst_13428);
} else {
if((state_val_13431 === (12))){
var inst_13416 = (state_13430[(2)]);
var state_13430__$1 = state_13430;
var statearr_13451_13484 = state_13430__$1;
(statearr_13451_13484[(2)] = inst_13416);

(statearr_13451_13484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (2))){
var state_13430__$1 = state_13430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13430__$1,(4),in$);
} else {
if((state_val_13431 === (23))){
var inst_13424 = (state_13430[(2)]);
var state_13430__$1 = state_13430;
var statearr_13452_13485 = state_13430__$1;
(statearr_13452_13485[(2)] = inst_13424);

(statearr_13452_13485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (19))){
var inst_13411 = (state_13430[(2)]);
var state_13430__$1 = state_13430;
var statearr_13453_13486 = state_13430__$1;
(statearr_13453_13486[(2)] = inst_13411);

(statearr_13453_13486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (11))){
var inst_13382 = (state_13430[(10)]);
var inst_13396 = (state_13430[(7)]);
var inst_13396__$1 = cljs.core.seq.call(null,inst_13382);
var state_13430__$1 = (function (){var statearr_13454 = state_13430;
(statearr_13454[(7)] = inst_13396__$1);

return statearr_13454;
})();
if(inst_13396__$1){
var statearr_13455_13487 = state_13430__$1;
(statearr_13455_13487[(1)] = (14));

} else {
var statearr_13456_13488 = state_13430__$1;
(statearr_13456_13488[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (9))){
var inst_13418 = (state_13430[(2)]);
var inst_13419 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13430__$1 = (function (){var statearr_13457 = state_13430;
(statearr_13457[(15)] = inst_13418);

return statearr_13457;
})();
if(cljs.core.truth_(inst_13419)){
var statearr_13458_13489 = state_13430__$1;
(statearr_13458_13489[(1)] = (21));

} else {
var statearr_13459_13490 = state_13430__$1;
(statearr_13459_13490[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (5))){
var inst_13374 = cljs.core.async.close_BANG_.call(null,out);
var state_13430__$1 = state_13430;
var statearr_13460_13491 = state_13430__$1;
(statearr_13460_13491[(2)] = inst_13374);

(statearr_13460_13491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (14))){
var inst_13396 = (state_13430[(7)]);
var inst_13398 = cljs.core.chunked_seq_QMARK_.call(null,inst_13396);
var state_13430__$1 = state_13430;
if(inst_13398){
var statearr_13461_13492 = state_13430__$1;
(statearr_13461_13492[(1)] = (17));

} else {
var statearr_13462_13493 = state_13430__$1;
(statearr_13462_13493[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (16))){
var inst_13414 = (state_13430[(2)]);
var state_13430__$1 = state_13430;
var statearr_13463_13494 = state_13430__$1;
(statearr_13463_13494[(2)] = inst_13414);

(statearr_13463_13494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13431 === (10))){
var inst_13383 = (state_13430[(11)]);
var inst_13385 = (state_13430[(12)]);
var inst_13390 = cljs.core._nth.call(null,inst_13383,inst_13385);
var state_13430__$1 = state_13430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13430__$1,(13),out,inst_13390);
} else {
if((state_val_13431 === (18))){
var inst_13396 = (state_13430[(7)]);
var inst_13405 = cljs.core.first.call(null,inst_13396);
var state_13430__$1 = state_13430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13430__$1,(20),out,inst_13405);
} else {
if((state_val_13431 === (8))){
var inst_13384 = (state_13430[(9)]);
var inst_13385 = (state_13430[(12)]);
var inst_13387 = (inst_13385 < inst_13384);
var inst_13388 = inst_13387;
var state_13430__$1 = state_13430;
if(cljs.core.truth_(inst_13388)){
var statearr_13464_13495 = state_13430__$1;
(statearr_13464_13495[(1)] = (10));

} else {
var statearr_13465_13496 = state_13430__$1;
(statearr_13465_13496[(1)] = (11));

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
});})(c__6828__auto__))
;
return ((function (switch__6772__auto__,c__6828__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6773__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6773__auto____0 = (function (){
var statearr_13469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13469[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6773__auto__);

(statearr_13469[(1)] = (1));

return statearr_13469;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6773__auto____1 = (function (state_13430){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_13430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e13470){if((e13470 instanceof Object)){
var ex__6776__auto__ = e13470;
var statearr_13471_13497 = state_13430;
(statearr_13471_13497[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13498 = state_13430;
state_13430 = G__13498;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6773__auto__ = function(state_13430){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6773__auto____1.call(this,state_13430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6773__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6773__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto__))
})();
var state__6830__auto__ = (function (){var statearr_13472 = f__6829__auto__.call(null);
(statearr_13472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto__);

return statearr_13472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto__))
);

return c__6828__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6828__auto___13595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___13595,out){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___13595,out){
return (function (state_13570){
var state_val_13571 = (state_13570[(1)]);
if((state_val_13571 === (7))){
var inst_13565 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
var statearr_13572_13596 = state_13570__$1;
(statearr_13572_13596[(2)] = inst_13565);

(statearr_13572_13596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (1))){
var inst_13547 = null;
var state_13570__$1 = (function (){var statearr_13573 = state_13570;
(statearr_13573[(7)] = inst_13547);

return statearr_13573;
})();
var statearr_13574_13597 = state_13570__$1;
(statearr_13574_13597[(2)] = null);

(statearr_13574_13597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (4))){
var inst_13550 = (state_13570[(8)]);
var inst_13550__$1 = (state_13570[(2)]);
var inst_13551 = (inst_13550__$1 == null);
var inst_13552 = cljs.core.not.call(null,inst_13551);
var state_13570__$1 = (function (){var statearr_13575 = state_13570;
(statearr_13575[(8)] = inst_13550__$1);

return statearr_13575;
})();
if(inst_13552){
var statearr_13576_13598 = state_13570__$1;
(statearr_13576_13598[(1)] = (5));

} else {
var statearr_13577_13599 = state_13570__$1;
(statearr_13577_13599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (6))){
var state_13570__$1 = state_13570;
var statearr_13578_13600 = state_13570__$1;
(statearr_13578_13600[(2)] = null);

(statearr_13578_13600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (3))){
var inst_13567 = (state_13570[(2)]);
var inst_13568 = cljs.core.async.close_BANG_.call(null,out);
var state_13570__$1 = (function (){var statearr_13579 = state_13570;
(statearr_13579[(9)] = inst_13567);

return statearr_13579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13570__$1,inst_13568);
} else {
if((state_val_13571 === (2))){
var state_13570__$1 = state_13570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13570__$1,(4),ch);
} else {
if((state_val_13571 === (11))){
var inst_13550 = (state_13570[(8)]);
var inst_13559 = (state_13570[(2)]);
var inst_13547 = inst_13550;
var state_13570__$1 = (function (){var statearr_13580 = state_13570;
(statearr_13580[(7)] = inst_13547);

(statearr_13580[(10)] = inst_13559);

return statearr_13580;
})();
var statearr_13581_13601 = state_13570__$1;
(statearr_13581_13601[(2)] = null);

(statearr_13581_13601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (9))){
var inst_13550 = (state_13570[(8)]);
var state_13570__$1 = state_13570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13570__$1,(11),out,inst_13550);
} else {
if((state_val_13571 === (5))){
var inst_13550 = (state_13570[(8)]);
var inst_13547 = (state_13570[(7)]);
var inst_13554 = cljs.core._EQ_.call(null,inst_13550,inst_13547);
var state_13570__$1 = state_13570;
if(inst_13554){
var statearr_13583_13602 = state_13570__$1;
(statearr_13583_13602[(1)] = (8));

} else {
var statearr_13584_13603 = state_13570__$1;
(statearr_13584_13603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (10))){
var inst_13562 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
var statearr_13585_13604 = state_13570__$1;
(statearr_13585_13604[(2)] = inst_13562);

(statearr_13585_13604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (8))){
var inst_13547 = (state_13570[(7)]);
var tmp13582 = inst_13547;
var inst_13547__$1 = tmp13582;
var state_13570__$1 = (function (){var statearr_13586 = state_13570;
(statearr_13586[(7)] = inst_13547__$1);

return statearr_13586;
})();
var statearr_13587_13605 = state_13570__$1;
(statearr_13587_13605[(2)] = null);

(statearr_13587_13605[(1)] = (2));


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
});})(c__6828__auto___13595,out))
;
return ((function (switch__6772__auto__,c__6828__auto___13595,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6773__auto__ = null;
var cljs$core$async$unique_$_state_machine__6773__auto____0 = (function (){
var statearr_13591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13591[(0)] = cljs$core$async$unique_$_state_machine__6773__auto__);

(statearr_13591[(1)] = (1));

return statearr_13591;
});
var cljs$core$async$unique_$_state_machine__6773__auto____1 = (function (state_13570){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_13570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e13592){if((e13592 instanceof Object)){
var ex__6776__auto__ = e13592;
var statearr_13593_13606 = state_13570;
(statearr_13593_13606[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13607 = state_13570;
state_13570 = G__13607;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6773__auto__ = function(state_13570){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6773__auto____1.call(this,state_13570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6773__auto____0;
cljs$core$async$unique_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6773__auto____1;
return cljs$core$async$unique_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___13595,out))
})();
var state__6830__auto__ = (function (){var statearr_13594 = f__6829__auto__.call(null);
(statearr_13594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___13595);

return statearr_13594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___13595,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6828__auto___13742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___13742,out){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___13742,out){
return (function (state_13712){
var state_val_13713 = (state_13712[(1)]);
if((state_val_13713 === (7))){
var inst_13708 = (state_13712[(2)]);
var state_13712__$1 = state_13712;
var statearr_13714_13743 = state_13712__$1;
(statearr_13714_13743[(2)] = inst_13708);

(statearr_13714_13743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (1))){
var inst_13675 = (new Array(n));
var inst_13676 = inst_13675;
var inst_13677 = (0);
var state_13712__$1 = (function (){var statearr_13715 = state_13712;
(statearr_13715[(7)] = inst_13677);

(statearr_13715[(8)] = inst_13676);

return statearr_13715;
})();
var statearr_13716_13744 = state_13712__$1;
(statearr_13716_13744[(2)] = null);

(statearr_13716_13744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (4))){
var inst_13680 = (state_13712[(9)]);
var inst_13680__$1 = (state_13712[(2)]);
var inst_13681 = (inst_13680__$1 == null);
var inst_13682 = cljs.core.not.call(null,inst_13681);
var state_13712__$1 = (function (){var statearr_13717 = state_13712;
(statearr_13717[(9)] = inst_13680__$1);

return statearr_13717;
})();
if(inst_13682){
var statearr_13718_13745 = state_13712__$1;
(statearr_13718_13745[(1)] = (5));

} else {
var statearr_13719_13746 = state_13712__$1;
(statearr_13719_13746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (15))){
var inst_13702 = (state_13712[(2)]);
var state_13712__$1 = state_13712;
var statearr_13720_13747 = state_13712__$1;
(statearr_13720_13747[(2)] = inst_13702);

(statearr_13720_13747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (13))){
var state_13712__$1 = state_13712;
var statearr_13721_13748 = state_13712__$1;
(statearr_13721_13748[(2)] = null);

(statearr_13721_13748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (6))){
var inst_13677 = (state_13712[(7)]);
var inst_13698 = (inst_13677 > (0));
var state_13712__$1 = state_13712;
if(cljs.core.truth_(inst_13698)){
var statearr_13722_13749 = state_13712__$1;
(statearr_13722_13749[(1)] = (12));

} else {
var statearr_13723_13750 = state_13712__$1;
(statearr_13723_13750[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (3))){
var inst_13710 = (state_13712[(2)]);
var state_13712__$1 = state_13712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13712__$1,inst_13710);
} else {
if((state_val_13713 === (12))){
var inst_13676 = (state_13712[(8)]);
var inst_13700 = cljs.core.vec.call(null,inst_13676);
var state_13712__$1 = state_13712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13712__$1,(15),out,inst_13700);
} else {
if((state_val_13713 === (2))){
var state_13712__$1 = state_13712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13712__$1,(4),ch);
} else {
if((state_val_13713 === (11))){
var inst_13692 = (state_13712[(2)]);
var inst_13693 = (new Array(n));
var inst_13676 = inst_13693;
var inst_13677 = (0);
var state_13712__$1 = (function (){var statearr_13724 = state_13712;
(statearr_13724[(7)] = inst_13677);

(statearr_13724[(8)] = inst_13676);

(statearr_13724[(10)] = inst_13692);

return statearr_13724;
})();
var statearr_13725_13751 = state_13712__$1;
(statearr_13725_13751[(2)] = null);

(statearr_13725_13751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (9))){
var inst_13676 = (state_13712[(8)]);
var inst_13690 = cljs.core.vec.call(null,inst_13676);
var state_13712__$1 = state_13712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13712__$1,(11),out,inst_13690);
} else {
if((state_val_13713 === (5))){
var inst_13677 = (state_13712[(7)]);
var inst_13676 = (state_13712[(8)]);
var inst_13680 = (state_13712[(9)]);
var inst_13685 = (state_13712[(11)]);
var inst_13684 = (inst_13676[inst_13677] = inst_13680);
var inst_13685__$1 = (inst_13677 + (1));
var inst_13686 = (inst_13685__$1 < n);
var state_13712__$1 = (function (){var statearr_13726 = state_13712;
(statearr_13726[(12)] = inst_13684);

(statearr_13726[(11)] = inst_13685__$1);

return statearr_13726;
})();
if(cljs.core.truth_(inst_13686)){
var statearr_13727_13752 = state_13712__$1;
(statearr_13727_13752[(1)] = (8));

} else {
var statearr_13728_13753 = state_13712__$1;
(statearr_13728_13753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (14))){
var inst_13705 = (state_13712[(2)]);
var inst_13706 = cljs.core.async.close_BANG_.call(null,out);
var state_13712__$1 = (function (){var statearr_13730 = state_13712;
(statearr_13730[(13)] = inst_13705);

return statearr_13730;
})();
var statearr_13731_13754 = state_13712__$1;
(statearr_13731_13754[(2)] = inst_13706);

(statearr_13731_13754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (10))){
var inst_13696 = (state_13712[(2)]);
var state_13712__$1 = state_13712;
var statearr_13732_13755 = state_13712__$1;
(statearr_13732_13755[(2)] = inst_13696);

(statearr_13732_13755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (8))){
var inst_13676 = (state_13712[(8)]);
var inst_13685 = (state_13712[(11)]);
var tmp13729 = inst_13676;
var inst_13676__$1 = tmp13729;
var inst_13677 = inst_13685;
var state_13712__$1 = (function (){var statearr_13733 = state_13712;
(statearr_13733[(7)] = inst_13677);

(statearr_13733[(8)] = inst_13676__$1);

return statearr_13733;
})();
var statearr_13734_13756 = state_13712__$1;
(statearr_13734_13756[(2)] = null);

(statearr_13734_13756[(1)] = (2));


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
});})(c__6828__auto___13742,out))
;
return ((function (switch__6772__auto__,c__6828__auto___13742,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6773__auto__ = null;
var cljs$core$async$partition_$_state_machine__6773__auto____0 = (function (){
var statearr_13738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13738[(0)] = cljs$core$async$partition_$_state_machine__6773__auto__);

(statearr_13738[(1)] = (1));

return statearr_13738;
});
var cljs$core$async$partition_$_state_machine__6773__auto____1 = (function (state_13712){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_13712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e13739){if((e13739 instanceof Object)){
var ex__6776__auto__ = e13739;
var statearr_13740_13757 = state_13712;
(statearr_13740_13757[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13758 = state_13712;
state_13712 = G__13758;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6773__auto__ = function(state_13712){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6773__auto____1.call(this,state_13712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6773__auto____0;
cljs$core$async$partition_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6773__auto____1;
return cljs$core$async$partition_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___13742,out))
})();
var state__6830__auto__ = (function (){var statearr_13741 = f__6829__auto__.call(null);
(statearr_13741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___13742);

return statearr_13741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___13742,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6828__auto___13901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6828__auto___13901,out){
return (function (){
var f__6829__auto__ = (function (){var switch__6772__auto__ = ((function (c__6828__auto___13901,out){
return (function (state_13871){
var state_val_13872 = (state_13871[(1)]);
if((state_val_13872 === (7))){
var inst_13867 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
var statearr_13873_13902 = state_13871__$1;
(statearr_13873_13902[(2)] = inst_13867);

(statearr_13873_13902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (1))){
var inst_13830 = [];
var inst_13831 = inst_13830;
var inst_13832 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13871__$1 = (function (){var statearr_13874 = state_13871;
(statearr_13874[(7)] = inst_13832);

(statearr_13874[(8)] = inst_13831);

return statearr_13874;
})();
var statearr_13875_13903 = state_13871__$1;
(statearr_13875_13903[(2)] = null);

(statearr_13875_13903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (4))){
var inst_13835 = (state_13871[(9)]);
var inst_13835__$1 = (state_13871[(2)]);
var inst_13836 = (inst_13835__$1 == null);
var inst_13837 = cljs.core.not.call(null,inst_13836);
var state_13871__$1 = (function (){var statearr_13876 = state_13871;
(statearr_13876[(9)] = inst_13835__$1);

return statearr_13876;
})();
if(inst_13837){
var statearr_13877_13904 = state_13871__$1;
(statearr_13877_13904[(1)] = (5));

} else {
var statearr_13878_13905 = state_13871__$1;
(statearr_13878_13905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (15))){
var inst_13861 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
var statearr_13879_13906 = state_13871__$1;
(statearr_13879_13906[(2)] = inst_13861);

(statearr_13879_13906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (13))){
var state_13871__$1 = state_13871;
var statearr_13880_13907 = state_13871__$1;
(statearr_13880_13907[(2)] = null);

(statearr_13880_13907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (6))){
var inst_13831 = (state_13871[(8)]);
var inst_13856 = inst_13831.length;
var inst_13857 = (inst_13856 > (0));
var state_13871__$1 = state_13871;
if(cljs.core.truth_(inst_13857)){
var statearr_13881_13908 = state_13871__$1;
(statearr_13881_13908[(1)] = (12));

} else {
var statearr_13882_13909 = state_13871__$1;
(statearr_13882_13909[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (3))){
var inst_13869 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13871__$1,inst_13869);
} else {
if((state_val_13872 === (12))){
var inst_13831 = (state_13871[(8)]);
var inst_13859 = cljs.core.vec.call(null,inst_13831);
var state_13871__$1 = state_13871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13871__$1,(15),out,inst_13859);
} else {
if((state_val_13872 === (2))){
var state_13871__$1 = state_13871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13871__$1,(4),ch);
} else {
if((state_val_13872 === (11))){
var inst_13835 = (state_13871[(9)]);
var inst_13839 = (state_13871[(10)]);
var inst_13849 = (state_13871[(2)]);
var inst_13850 = [];
var inst_13851 = inst_13850.push(inst_13835);
var inst_13831 = inst_13850;
var inst_13832 = inst_13839;
var state_13871__$1 = (function (){var statearr_13883 = state_13871;
(statearr_13883[(7)] = inst_13832);

(statearr_13883[(11)] = inst_13851);

(statearr_13883[(8)] = inst_13831);

(statearr_13883[(12)] = inst_13849);

return statearr_13883;
})();
var statearr_13884_13910 = state_13871__$1;
(statearr_13884_13910[(2)] = null);

(statearr_13884_13910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (9))){
var inst_13831 = (state_13871[(8)]);
var inst_13847 = cljs.core.vec.call(null,inst_13831);
var state_13871__$1 = state_13871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13871__$1,(11),out,inst_13847);
} else {
if((state_val_13872 === (5))){
var inst_13832 = (state_13871[(7)]);
var inst_13835 = (state_13871[(9)]);
var inst_13839 = (state_13871[(10)]);
var inst_13839__$1 = f.call(null,inst_13835);
var inst_13840 = cljs.core._EQ_.call(null,inst_13839__$1,inst_13832);
var inst_13841 = cljs.core.keyword_identical_QMARK_.call(null,inst_13832,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13842 = (inst_13840) || (inst_13841);
var state_13871__$1 = (function (){var statearr_13885 = state_13871;
(statearr_13885[(10)] = inst_13839__$1);

return statearr_13885;
})();
if(cljs.core.truth_(inst_13842)){
var statearr_13886_13911 = state_13871__$1;
(statearr_13886_13911[(1)] = (8));

} else {
var statearr_13887_13912 = state_13871__$1;
(statearr_13887_13912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (14))){
var inst_13864 = (state_13871[(2)]);
var inst_13865 = cljs.core.async.close_BANG_.call(null,out);
var state_13871__$1 = (function (){var statearr_13889 = state_13871;
(statearr_13889[(13)] = inst_13864);

return statearr_13889;
})();
var statearr_13890_13913 = state_13871__$1;
(statearr_13890_13913[(2)] = inst_13865);

(statearr_13890_13913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (10))){
var inst_13854 = (state_13871[(2)]);
var state_13871__$1 = state_13871;
var statearr_13891_13914 = state_13871__$1;
(statearr_13891_13914[(2)] = inst_13854);

(statearr_13891_13914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13872 === (8))){
var inst_13835 = (state_13871[(9)]);
var inst_13831 = (state_13871[(8)]);
var inst_13839 = (state_13871[(10)]);
var inst_13844 = inst_13831.push(inst_13835);
var tmp13888 = inst_13831;
var inst_13831__$1 = tmp13888;
var inst_13832 = inst_13839;
var state_13871__$1 = (function (){var statearr_13892 = state_13871;
(statearr_13892[(7)] = inst_13832);

(statearr_13892[(14)] = inst_13844);

(statearr_13892[(8)] = inst_13831__$1);

return statearr_13892;
})();
var statearr_13893_13915 = state_13871__$1;
(statearr_13893_13915[(2)] = null);

(statearr_13893_13915[(1)] = (2));


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
});})(c__6828__auto___13901,out))
;
return ((function (switch__6772__auto__,c__6828__auto___13901,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6773__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6773__auto____0 = (function (){
var statearr_13897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13897[(0)] = cljs$core$async$partition_by_$_state_machine__6773__auto__);

(statearr_13897[(1)] = (1));

return statearr_13897;
});
var cljs$core$async$partition_by_$_state_machine__6773__auto____1 = (function (state_13871){
while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_13871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6775__auto__;
}
break;
}
}catch (e13898){if((e13898 instanceof Object)){
var ex__6776__auto__ = e13898;
var statearr_13899_13916 = state_13871;
(statearr_13899_13916[(5)] = ex__6776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13917 = state_13871;
state_13871 = G__13917;
continue;
} else {
return ret_value__6774__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6773__auto__ = function(state_13871){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6773__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6773__auto____1.call(this,state_13871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6773__auto____0;
cljs$core$async$partition_by_$_state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6773__auto____1;
return cljs$core$async$partition_by_$_state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6828__auto___13901,out))
})();
var state__6830__auto__ = (function (){var statearr_13900 = f__6829__auto__.call(null);
(statearr_13900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6828__auto___13901);

return statearr_13900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6830__auto__);
});})(c__6828__auto___13901,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map