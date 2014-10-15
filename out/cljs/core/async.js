// Compiled by ClojureScript 0.0-2280
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10860 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10860 = (function (f,fn_handler,meta10861){
this.f = f;
this.fn_handler = fn_handler;
this.meta10861 = meta10861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10860.cljs$lang$type = true;
cljs.core.async.t10860.cljs$lang$ctorStr = "cljs.core.async/t10860";
cljs.core.async.t10860.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10860");
});
cljs.core.async.t10860.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10862){var self__ = this;
var _10862__$1 = this;return self__.meta10861;
});
cljs.core.async.t10860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10862,meta10861__$1){var self__ = this;
var _10862__$1 = this;return (new cljs.core.async.t10860(self__.f,self__.fn_handler,meta10861__$1));
});
cljs.core.async.__GT_t10860 = (function __GT_t10860(f__$1,fn_handler__$1,meta10861){return (new cljs.core.async.t10860(f__$1,fn_handler__$1,meta10861));
});
}
return (new cljs.core.async.t10860(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10864 = buff;if(G__10864)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__10864.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10864.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10864);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10864);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10865 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10865);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10865,ret){
return (function (){return fn1.call(null,val_10865);
});})(val_10865,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4400__auto___10866 = n;var x_10867 = (0);while(true){
if((x_10867 < n__4400__auto___10866))
{(a[x_10867] = (0));
{
var G__10868 = (x_10867 + (1));
x_10867 = G__10868;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10869 = (i + (1));
i = G__10869;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10873 = (function (flag,alt_flag,meta10874){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10874 = meta10874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10873.cljs$lang$type = true;
cljs.core.async.t10873.cljs$lang$ctorStr = "cljs.core.async/t10873";
cljs.core.async.t10873.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10873");
});})(flag))
;
cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10875){var self__ = this;
var _10875__$1 = this;return self__.meta10874;
});})(flag))
;
cljs.core.async.t10873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10875,meta10874__$1){var self__ = this;
var _10875__$1 = this;return (new cljs.core.async.t10873(self__.flag,self__.alt_flag,meta10874__$1));
});})(flag))
;
cljs.core.async.__GT_t10873 = ((function (flag){
return (function __GT_t10873(flag__$1,alt_flag__$1,meta10874){return (new cljs.core.async.t10873(flag__$1,alt_flag__$1,meta10874));
});})(flag))
;
}
return (new cljs.core.async.t10873(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10879 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10879 = (function (cb,flag,alt_handler,meta10880){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10880 = meta10880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10879.cljs$lang$type = true;
cljs.core.async.t10879.cljs$lang$ctorStr = "cljs.core.async/t10879";
cljs.core.async.t10879.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10879");
});
cljs.core.async.t10879.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10881){var self__ = this;
var _10881__$1 = this;return self__.meta10880;
});
cljs.core.async.t10879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10881,meta10880__$1){var self__ = this;
var _10881__$1 = this;return (new cljs.core.async.t10879(self__.cb,self__.flag,self__.alt_handler,meta10880__$1));
});
cljs.core.async.__GT_t10879 = (function __GT_t10879(cb__$1,flag__$1,alt_handler__$1,meta10880){return (new cljs.core.async.t10879(cb__$1,flag__$1,alt_handler__$1,meta10880));
});
}
return (new cljs.core.async.t10879(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10882_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10882_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10883_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10883_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3544__auto__ = wport;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10884 = (i + (1));
i = G__10884;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3544__auto__ = ret;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3532__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3532__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3532__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
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
var alts_BANG___delegate = function (ports,p__10885){var map__10887 = p__10885;var map__10887__$1 = ((cljs.core.seq_QMARK_.call(null,map__10887))?cljs.core.apply.call(null,cljs.core.hash_map,map__10887):map__10887);var opts = map__10887__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10885 = null;if (arguments.length > 1) {
  p__10885 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10885);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10888){
var ports = cljs.core.first(arglist__10888);
var p__10885 = cljs.core.rest(arglist__10888);
return alts_BANG___delegate(ports,p__10885);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10896 = (function (ch,f,map_LT_,meta10897){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10897 = meta10897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10896.cljs$lang$type = true;
cljs.core.async.t10896.cljs$lang$ctorStr = "cljs.core.async/t10896";
cljs.core.async.t10896.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10896");
});
cljs.core.async.t10896.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10896.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10899 = (function (fn1,_,meta10897,ch,f,map_LT_,meta10900){
this.fn1 = fn1;
this._ = _;
this.meta10897 = meta10897;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10900 = meta10900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10899.cljs$lang$type = true;
cljs.core.async.t10899.cljs$lang$ctorStr = "cljs.core.async/t10899";
cljs.core.async.t10899.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10899");
});})(___$1))
;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10889_SHARP_){return f1.call(null,(((p1__10889_SHARP_ == null))?null:self__.f.call(null,p1__10889_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10901){var self__ = this;
var _10901__$1 = this;return self__.meta10900;
});})(___$1))
;
cljs.core.async.t10899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10901,meta10900__$1){var self__ = this;
var _10901__$1 = this;return (new cljs.core.async.t10899(self__.fn1,self__._,self__.meta10897,self__.ch,self__.f,self__.map_LT_,meta10900__$1));
});})(___$1))
;
cljs.core.async.__GT_t10899 = ((function (___$1){
return (function __GT_t10899(fn1__$1,___$2,meta10897__$1,ch__$2,f__$2,map_LT___$2,meta10900){return (new cljs.core.async.t10899(fn1__$1,___$2,meta10897__$1,ch__$2,f__$2,map_LT___$2,meta10900));
});})(___$1))
;
}
return (new cljs.core.async.t10899(fn1,___$1,self__.meta10897,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3532__auto__ = ret;if(cljs.core.truth_(and__3532__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3532__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10896.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10898){var self__ = this;
var _10898__$1 = this;return self__.meta10897;
});
cljs.core.async.t10896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10898,meta10897__$1){var self__ = this;
var _10898__$1 = this;return (new cljs.core.async.t10896(self__.ch,self__.f,self__.map_LT_,meta10897__$1));
});
cljs.core.async.__GT_t10896 = (function __GT_t10896(ch__$1,f__$1,map_LT___$1,meta10897){return (new cljs.core.async.t10896(ch__$1,f__$1,map_LT___$1,meta10897));
});
}
return (new cljs.core.async.t10896(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10905 = (function (ch,f,map_GT_,meta10906){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10906 = meta10906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10905.cljs$lang$type = true;
cljs.core.async.t10905.cljs$lang$ctorStr = "cljs.core.async/t10905";
cljs.core.async.t10905.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10905");
});
cljs.core.async.t10905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10905.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10907){var self__ = this;
var _10907__$1 = this;return self__.meta10906;
});
cljs.core.async.t10905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10907,meta10906__$1){var self__ = this;
var _10907__$1 = this;return (new cljs.core.async.t10905(self__.ch,self__.f,self__.map_GT_,meta10906__$1));
});
cljs.core.async.__GT_t10905 = (function __GT_t10905(ch__$1,f__$1,map_GT___$1,meta10906){return (new cljs.core.async.t10905(ch__$1,f__$1,map_GT___$1,meta10906));
});
}
return (new cljs.core.async.t10905(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10911 = (function (ch,p,filter_GT_,meta10912){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10912 = meta10912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10911.cljs$lang$type = true;
cljs.core.async.t10911.cljs$lang$ctorStr = "cljs.core.async/t10911";
cljs.core.async.t10911.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10911");
});
cljs.core.async.t10911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10911.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10913){var self__ = this;
var _10913__$1 = this;return self__.meta10912;
});
cljs.core.async.t10911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10913,meta10912__$1){var self__ = this;
var _10913__$1 = this;return (new cljs.core.async.t10911(self__.ch,self__.p,self__.filter_GT_,meta10912__$1));
});
cljs.core.async.__GT_t10911 = (function __GT_t10911(ch__$1,p__$1,filter_GT___$1,meta10912){return (new cljs.core.async.t10911(ch__$1,p__$1,filter_GT___$1,meta10912));
});
}
return (new cljs.core.async.t10911(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6523__auto___10996 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___10996,out){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___10996,out){
return (function (state_10975){var state_val_10976 = (state_10975[(1)]);if((state_val_10976 === (7)))
{var inst_10971 = (state_10975[(2)]);var state_10975__$1 = state_10975;var statearr_10977_10997 = state_10975__$1;(statearr_10977_10997[(2)] = inst_10971);
(statearr_10977_10997[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (1)))
{var state_10975__$1 = state_10975;var statearr_10978_10998 = state_10975__$1;(statearr_10978_10998[(2)] = null);
(statearr_10978_10998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (4)))
{var inst_10957 = (state_10975[(7)]);var inst_10957__$1 = (state_10975[(2)]);var inst_10958 = (inst_10957__$1 == null);var state_10975__$1 = (function (){var statearr_10979 = state_10975;(statearr_10979[(7)] = inst_10957__$1);
return statearr_10979;
})();if(cljs.core.truth_(inst_10958))
{var statearr_10980_10999 = state_10975__$1;(statearr_10980_10999[(1)] = (5));
} else
{var statearr_10981_11000 = state_10975__$1;(statearr_10981_11000[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (6)))
{var inst_10957 = (state_10975[(7)]);var inst_10962 = p.call(null,inst_10957);var state_10975__$1 = state_10975;if(cljs.core.truth_(inst_10962))
{var statearr_10982_11001 = state_10975__$1;(statearr_10982_11001[(1)] = (8));
} else
{var statearr_10983_11002 = state_10975__$1;(statearr_10983_11002[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (3)))
{var inst_10973 = (state_10975[(2)]);var state_10975__$1 = state_10975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10975__$1,inst_10973);
} else
{if((state_val_10976 === (2)))
{var state_10975__$1 = state_10975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10975__$1,(4),ch);
} else
{if((state_val_10976 === (11)))
{var inst_10965 = (state_10975[(2)]);var state_10975__$1 = state_10975;var statearr_10984_11003 = state_10975__$1;(statearr_10984_11003[(2)] = inst_10965);
(statearr_10984_11003[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (9)))
{var state_10975__$1 = state_10975;var statearr_10985_11004 = state_10975__$1;(statearr_10985_11004[(2)] = null);
(statearr_10985_11004[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (5)))
{var inst_10960 = cljs.core.async.close_BANG_.call(null,out);var state_10975__$1 = state_10975;var statearr_10986_11005 = state_10975__$1;(statearr_10986_11005[(2)] = inst_10960);
(statearr_10986_11005[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (10)))
{var inst_10968 = (state_10975[(2)]);var state_10975__$1 = (function (){var statearr_10987 = state_10975;(statearr_10987[(8)] = inst_10968);
return statearr_10987;
})();var statearr_10988_11006 = state_10975__$1;(statearr_10988_11006[(2)] = null);
(statearr_10988_11006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10976 === (8)))
{var inst_10957 = (state_10975[(7)]);var state_10975__$1 = state_10975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10975__$1,(11),out,inst_10957);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___10996,out))
;return ((function (switch__6508__auto__,c__6523__auto___10996,out){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_10992 = [null,null,null,null,null,null,null,null,null];(statearr_10992[(0)] = state_machine__6509__auto__);
(statearr_10992[(1)] = (1));
return statearr_10992;
});
var state_machine__6509__auto____1 = (function (state_10975){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_10975);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e10993){if((e10993 instanceof Object))
{var ex__6512__auto__ = e10993;var statearr_10994_11007 = state_10975;(statearr_10994_11007[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11008 = state_10975;
state_10975 = G__11008;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_10975){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_10975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___10996,out))
})();var state__6525__auto__ = (function (){var statearr_10995 = f__6524__auto__.call(null);(statearr_10995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___10996);
return statearr_10995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___10996,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6523__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto__){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto__){
return (function (state_11174){var state_val_11175 = (state_11174[(1)]);if((state_val_11175 === (7)))
{var inst_11170 = (state_11174[(2)]);var state_11174__$1 = state_11174;var statearr_11176_11217 = state_11174__$1;(statearr_11176_11217[(2)] = inst_11170);
(statearr_11176_11217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (20)))
{var inst_11140 = (state_11174[(7)]);var inst_11151 = (state_11174[(2)]);var inst_11152 = cljs.core.next.call(null,inst_11140);var inst_11126 = inst_11152;var inst_11127 = null;var inst_11128 = (0);var inst_11129 = (0);var state_11174__$1 = (function (){var statearr_11177 = state_11174;(statearr_11177[(8)] = inst_11127);
(statearr_11177[(9)] = inst_11129);
(statearr_11177[(10)] = inst_11151);
(statearr_11177[(11)] = inst_11128);
(statearr_11177[(12)] = inst_11126);
return statearr_11177;
})();var statearr_11178_11218 = state_11174__$1;(statearr_11178_11218[(2)] = null);
(statearr_11178_11218[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (1)))
{var state_11174__$1 = state_11174;var statearr_11179_11219 = state_11174__$1;(statearr_11179_11219[(2)] = null);
(statearr_11179_11219[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (4)))
{var inst_11115 = (state_11174[(13)]);var inst_11115__$1 = (state_11174[(2)]);var inst_11116 = (inst_11115__$1 == null);var state_11174__$1 = (function (){var statearr_11180 = state_11174;(statearr_11180[(13)] = inst_11115__$1);
return statearr_11180;
})();if(cljs.core.truth_(inst_11116))
{var statearr_11181_11220 = state_11174__$1;(statearr_11181_11220[(1)] = (5));
} else
{var statearr_11182_11221 = state_11174__$1;(statearr_11182_11221[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (15)))
{var state_11174__$1 = state_11174;var statearr_11186_11222 = state_11174__$1;(statearr_11186_11222[(2)] = null);
(statearr_11186_11222[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (21)))
{var state_11174__$1 = state_11174;var statearr_11187_11223 = state_11174__$1;(statearr_11187_11223[(2)] = null);
(statearr_11187_11223[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (13)))
{var inst_11127 = (state_11174[(8)]);var inst_11129 = (state_11174[(9)]);var inst_11128 = (state_11174[(11)]);var inst_11126 = (state_11174[(12)]);var inst_11136 = (state_11174[(2)]);var inst_11137 = (inst_11129 + (1));var tmp11183 = inst_11127;var tmp11184 = inst_11128;var tmp11185 = inst_11126;var inst_11126__$1 = tmp11185;var inst_11127__$1 = tmp11183;var inst_11128__$1 = tmp11184;var inst_11129__$1 = inst_11137;var state_11174__$1 = (function (){var statearr_11188 = state_11174;(statearr_11188[(8)] = inst_11127__$1);
(statearr_11188[(9)] = inst_11129__$1);
(statearr_11188[(14)] = inst_11136);
(statearr_11188[(11)] = inst_11128__$1);
(statearr_11188[(12)] = inst_11126__$1);
return statearr_11188;
})();var statearr_11189_11224 = state_11174__$1;(statearr_11189_11224[(2)] = null);
(statearr_11189_11224[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (22)))
{var state_11174__$1 = state_11174;var statearr_11190_11225 = state_11174__$1;(statearr_11190_11225[(2)] = null);
(statearr_11190_11225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (6)))
{var inst_11115 = (state_11174[(13)]);var inst_11124 = f.call(null,inst_11115);var inst_11125 = cljs.core.seq.call(null,inst_11124);var inst_11126 = inst_11125;var inst_11127 = null;var inst_11128 = (0);var inst_11129 = (0);var state_11174__$1 = (function (){var statearr_11191 = state_11174;(statearr_11191[(8)] = inst_11127);
(statearr_11191[(9)] = inst_11129);
(statearr_11191[(11)] = inst_11128);
(statearr_11191[(12)] = inst_11126);
return statearr_11191;
})();var statearr_11192_11226 = state_11174__$1;(statearr_11192_11226[(2)] = null);
(statearr_11192_11226[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (17)))
{var inst_11140 = (state_11174[(7)]);var inst_11144 = cljs.core.chunk_first.call(null,inst_11140);var inst_11145 = cljs.core.chunk_rest.call(null,inst_11140);var inst_11146 = cljs.core.count.call(null,inst_11144);var inst_11126 = inst_11145;var inst_11127 = inst_11144;var inst_11128 = inst_11146;var inst_11129 = (0);var state_11174__$1 = (function (){var statearr_11193 = state_11174;(statearr_11193[(8)] = inst_11127);
(statearr_11193[(9)] = inst_11129);
(statearr_11193[(11)] = inst_11128);
(statearr_11193[(12)] = inst_11126);
return statearr_11193;
})();var statearr_11194_11227 = state_11174__$1;(statearr_11194_11227[(2)] = null);
(statearr_11194_11227[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (3)))
{var inst_11172 = (state_11174[(2)]);var state_11174__$1 = state_11174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11174__$1,inst_11172);
} else
{if((state_val_11175 === (12)))
{var inst_11160 = (state_11174[(2)]);var state_11174__$1 = state_11174;var statearr_11195_11228 = state_11174__$1;(statearr_11195_11228[(2)] = inst_11160);
(statearr_11195_11228[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (2)))
{var state_11174__$1 = state_11174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11174__$1,(4),in$);
} else
{if((state_val_11175 === (23)))
{var inst_11168 = (state_11174[(2)]);var state_11174__$1 = state_11174;var statearr_11196_11229 = state_11174__$1;(statearr_11196_11229[(2)] = inst_11168);
(statearr_11196_11229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (19)))
{var inst_11155 = (state_11174[(2)]);var state_11174__$1 = state_11174;var statearr_11197_11230 = state_11174__$1;(statearr_11197_11230[(2)] = inst_11155);
(statearr_11197_11230[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (11)))
{var inst_11140 = (state_11174[(7)]);var inst_11126 = (state_11174[(12)]);var inst_11140__$1 = cljs.core.seq.call(null,inst_11126);var state_11174__$1 = (function (){var statearr_11198 = state_11174;(statearr_11198[(7)] = inst_11140__$1);
return statearr_11198;
})();if(inst_11140__$1)
{var statearr_11199_11231 = state_11174__$1;(statearr_11199_11231[(1)] = (14));
} else
{var statearr_11200_11232 = state_11174__$1;(statearr_11200_11232[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (9)))
{var inst_11162 = (state_11174[(2)]);var inst_11163 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11174__$1 = (function (){var statearr_11201 = state_11174;(statearr_11201[(15)] = inst_11162);
return statearr_11201;
})();if(cljs.core.truth_(inst_11163))
{var statearr_11202_11233 = state_11174__$1;(statearr_11202_11233[(1)] = (21));
} else
{var statearr_11203_11234 = state_11174__$1;(statearr_11203_11234[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (5)))
{var inst_11118 = cljs.core.async.close_BANG_.call(null,out);var state_11174__$1 = state_11174;var statearr_11204_11235 = state_11174__$1;(statearr_11204_11235[(2)] = inst_11118);
(statearr_11204_11235[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (14)))
{var inst_11140 = (state_11174[(7)]);var inst_11142 = cljs.core.chunked_seq_QMARK_.call(null,inst_11140);var state_11174__$1 = state_11174;if(inst_11142)
{var statearr_11205_11236 = state_11174__$1;(statearr_11205_11236[(1)] = (17));
} else
{var statearr_11206_11237 = state_11174__$1;(statearr_11206_11237[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (16)))
{var inst_11158 = (state_11174[(2)]);var state_11174__$1 = state_11174;var statearr_11207_11238 = state_11174__$1;(statearr_11207_11238[(2)] = inst_11158);
(statearr_11207_11238[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11175 === (10)))
{var inst_11127 = (state_11174[(8)]);var inst_11129 = (state_11174[(9)]);var inst_11134 = cljs.core._nth.call(null,inst_11127,inst_11129);var state_11174__$1 = state_11174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11174__$1,(13),out,inst_11134);
} else
{if((state_val_11175 === (18)))
{var inst_11140 = (state_11174[(7)]);var inst_11149 = cljs.core.first.call(null,inst_11140);var state_11174__$1 = state_11174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11174__$1,(20),out,inst_11149);
} else
{if((state_val_11175 === (8)))
{var inst_11129 = (state_11174[(9)]);var inst_11128 = (state_11174[(11)]);var inst_11131 = (inst_11129 < inst_11128);var inst_11132 = inst_11131;var state_11174__$1 = state_11174;if(cljs.core.truth_(inst_11132))
{var statearr_11208_11239 = state_11174__$1;(statearr_11208_11239[(1)] = (10));
} else
{var statearr_11209_11240 = state_11174__$1;(statearr_11209_11240[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto__))
;return ((function (switch__6508__auto__,c__6523__auto__){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_11213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11213[(0)] = state_machine__6509__auto__);
(statearr_11213[(1)] = (1));
return statearr_11213;
});
var state_machine__6509__auto____1 = (function (state_11174){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_11174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e11214){if((e11214 instanceof Object))
{var ex__6512__auto__ = e11214;var statearr_11215_11241 = state_11174;(statearr_11215_11241[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11242 = state_11174;
state_11174 = G__11242;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_11174){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_11174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto__))
})();var state__6525__auto__ = (function (){var statearr_11216 = f__6524__auto__.call(null);(statearr_11216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto__);
return statearr_11216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto__))
);
return c__6523__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6523__auto___11337 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___11337){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___11337){
return (function (state_11313){var state_val_11314 = (state_11313[(1)]);if((state_val_11314 === (7)))
{var inst_11309 = (state_11313[(2)]);var state_11313__$1 = state_11313;var statearr_11315_11338 = state_11313__$1;(statearr_11315_11338[(2)] = inst_11309);
(statearr_11315_11338[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (1)))
{var state_11313__$1 = state_11313;var statearr_11316_11339 = state_11313__$1;(statearr_11316_11339[(2)] = null);
(statearr_11316_11339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (4)))
{var inst_11292 = (state_11313[(7)]);var inst_11292__$1 = (state_11313[(2)]);var inst_11293 = (inst_11292__$1 == null);var state_11313__$1 = (function (){var statearr_11317 = state_11313;(statearr_11317[(7)] = inst_11292__$1);
return statearr_11317;
})();if(cljs.core.truth_(inst_11293))
{var statearr_11318_11340 = state_11313__$1;(statearr_11318_11340[(1)] = (5));
} else
{var statearr_11319_11341 = state_11313__$1;(statearr_11319_11341[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (13)))
{var state_11313__$1 = state_11313;var statearr_11320_11342 = state_11313__$1;(statearr_11320_11342[(2)] = null);
(statearr_11320_11342[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (6)))
{var inst_11292 = (state_11313[(7)]);var state_11313__$1 = state_11313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11313__$1,(11),to,inst_11292);
} else
{if((state_val_11314 === (3)))
{var inst_11311 = (state_11313[(2)]);var state_11313__$1 = state_11313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11313__$1,inst_11311);
} else
{if((state_val_11314 === (12)))
{var state_11313__$1 = state_11313;var statearr_11321_11343 = state_11313__$1;(statearr_11321_11343[(2)] = null);
(statearr_11321_11343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (2)))
{var state_11313__$1 = state_11313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11313__$1,(4),from);
} else
{if((state_val_11314 === (11)))
{var inst_11302 = (state_11313[(2)]);var state_11313__$1 = state_11313;if(cljs.core.truth_(inst_11302))
{var statearr_11322_11344 = state_11313__$1;(statearr_11322_11344[(1)] = (12));
} else
{var statearr_11323_11345 = state_11313__$1;(statearr_11323_11345[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (9)))
{var state_11313__$1 = state_11313;var statearr_11324_11346 = state_11313__$1;(statearr_11324_11346[(2)] = null);
(statearr_11324_11346[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (5)))
{var state_11313__$1 = state_11313;if(cljs.core.truth_(close_QMARK_))
{var statearr_11325_11347 = state_11313__$1;(statearr_11325_11347[(1)] = (8));
} else
{var statearr_11326_11348 = state_11313__$1;(statearr_11326_11348[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (14)))
{var inst_11307 = (state_11313[(2)]);var state_11313__$1 = state_11313;var statearr_11327_11349 = state_11313__$1;(statearr_11327_11349[(2)] = inst_11307);
(statearr_11327_11349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (10)))
{var inst_11299 = (state_11313[(2)]);var state_11313__$1 = state_11313;var statearr_11328_11350 = state_11313__$1;(statearr_11328_11350[(2)] = inst_11299);
(statearr_11328_11350[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11314 === (8)))
{var inst_11296 = cljs.core.async.close_BANG_.call(null,to);var state_11313__$1 = state_11313;var statearr_11329_11351 = state_11313__$1;(statearr_11329_11351[(2)] = inst_11296);
(statearr_11329_11351[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___11337))
;return ((function (switch__6508__auto__,c__6523__auto___11337){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_11333 = [null,null,null,null,null,null,null,null];(statearr_11333[(0)] = state_machine__6509__auto__);
(statearr_11333[(1)] = (1));
return statearr_11333;
});
var state_machine__6509__auto____1 = (function (state_11313){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_11313);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e11334){if((e11334 instanceof Object))
{var ex__6512__auto__ = e11334;var statearr_11335_11352 = state_11313;(statearr_11335_11352[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11313);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11353 = state_11313;
state_11313 = G__11353;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_11313){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_11313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___11337))
})();var state__6525__auto__ = (function (){var statearr_11336 = f__6524__auto__.call(null);(statearr_11336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___11337);
return statearr_11336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___11337))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
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
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6523__auto___11454 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___11454,tc,fc){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___11454,tc,fc){
return (function (state_11429){var state_val_11430 = (state_11429[(1)]);if((state_val_11430 === (7)))
{var inst_11425 = (state_11429[(2)]);var state_11429__$1 = state_11429;var statearr_11431_11455 = state_11429__$1;(statearr_11431_11455[(2)] = inst_11425);
(statearr_11431_11455[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (1)))
{var state_11429__$1 = state_11429;var statearr_11432_11456 = state_11429__$1;(statearr_11432_11456[(2)] = null);
(statearr_11432_11456[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (4)))
{var inst_11406 = (state_11429[(7)]);var inst_11406__$1 = (state_11429[(2)]);var inst_11407 = (inst_11406__$1 == null);var state_11429__$1 = (function (){var statearr_11433 = state_11429;(statearr_11433[(7)] = inst_11406__$1);
return statearr_11433;
})();if(cljs.core.truth_(inst_11407))
{var statearr_11434_11457 = state_11429__$1;(statearr_11434_11457[(1)] = (5));
} else
{var statearr_11435_11458 = state_11429__$1;(statearr_11435_11458[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (13)))
{var state_11429__$1 = state_11429;var statearr_11436_11459 = state_11429__$1;(statearr_11436_11459[(2)] = null);
(statearr_11436_11459[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (6)))
{var inst_11406 = (state_11429[(7)]);var inst_11412 = p.call(null,inst_11406);var state_11429__$1 = state_11429;if(cljs.core.truth_(inst_11412))
{var statearr_11437_11460 = state_11429__$1;(statearr_11437_11460[(1)] = (9));
} else
{var statearr_11438_11461 = state_11429__$1;(statearr_11438_11461[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (3)))
{var inst_11427 = (state_11429[(2)]);var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11429__$1,inst_11427);
} else
{if((state_val_11430 === (12)))
{var state_11429__$1 = state_11429;var statearr_11439_11462 = state_11429__$1;(statearr_11439_11462[(2)] = null);
(statearr_11439_11462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (2)))
{var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11429__$1,(4),ch);
} else
{if((state_val_11430 === (11)))
{var inst_11406 = (state_11429[(7)]);var inst_11416 = (state_11429[(2)]);var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11429__$1,(8),inst_11416,inst_11406);
} else
{if((state_val_11430 === (9)))
{var state_11429__$1 = state_11429;var statearr_11440_11463 = state_11429__$1;(statearr_11440_11463[(2)] = tc);
(statearr_11440_11463[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (5)))
{var inst_11409 = cljs.core.async.close_BANG_.call(null,tc);var inst_11410 = cljs.core.async.close_BANG_.call(null,fc);var state_11429__$1 = (function (){var statearr_11441 = state_11429;(statearr_11441[(8)] = inst_11409);
return statearr_11441;
})();var statearr_11442_11464 = state_11429__$1;(statearr_11442_11464[(2)] = inst_11410);
(statearr_11442_11464[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (14)))
{var inst_11423 = (state_11429[(2)]);var state_11429__$1 = state_11429;var statearr_11443_11465 = state_11429__$1;(statearr_11443_11465[(2)] = inst_11423);
(statearr_11443_11465[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (10)))
{var state_11429__$1 = state_11429;var statearr_11444_11466 = state_11429__$1;(statearr_11444_11466[(2)] = fc);
(statearr_11444_11466[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (8)))
{var inst_11418 = (state_11429[(2)]);var state_11429__$1 = state_11429;if(cljs.core.truth_(inst_11418))
{var statearr_11445_11467 = state_11429__$1;(statearr_11445_11467[(1)] = (12));
} else
{var statearr_11446_11468 = state_11429__$1;(statearr_11446_11468[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___11454,tc,fc))
;return ((function (switch__6508__auto__,c__6523__auto___11454,tc,fc){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_11450 = [null,null,null,null,null,null,null,null,null];(statearr_11450[(0)] = state_machine__6509__auto__);
(statearr_11450[(1)] = (1));
return statearr_11450;
});
var state_machine__6509__auto____1 = (function (state_11429){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_11429);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e11451){if((e11451 instanceof Object))
{var ex__6512__auto__ = e11451;var statearr_11452_11469 = state_11429;(statearr_11452_11469[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11470 = state_11429;
state_11429 = G__11470;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_11429){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_11429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___11454,tc,fc))
})();var state__6525__auto__ = (function (){var statearr_11453 = f__6524__auto__.call(null);(statearr_11453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___11454);
return statearr_11453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___11454,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6523__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto__){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto__){
return (function (state_11517){var state_val_11518 = (state_11517[(1)]);if((state_val_11518 === (7)))
{var inst_11513 = (state_11517[(2)]);var state_11517__$1 = state_11517;var statearr_11519_11535 = state_11517__$1;(statearr_11519_11535[(2)] = inst_11513);
(statearr_11519_11535[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11518 === (6)))
{var inst_11503 = (state_11517[(7)]);var inst_11506 = (state_11517[(8)]);var inst_11510 = f.call(null,inst_11503,inst_11506);var inst_11503__$1 = inst_11510;var state_11517__$1 = (function (){var statearr_11520 = state_11517;(statearr_11520[(7)] = inst_11503__$1);
return statearr_11520;
})();var statearr_11521_11536 = state_11517__$1;(statearr_11521_11536[(2)] = null);
(statearr_11521_11536[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11518 === (5)))
{var inst_11503 = (state_11517[(7)]);var state_11517__$1 = state_11517;var statearr_11522_11537 = state_11517__$1;(statearr_11522_11537[(2)] = inst_11503);
(statearr_11522_11537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11518 === (4)))
{var inst_11506 = (state_11517[(8)]);var inst_11506__$1 = (state_11517[(2)]);var inst_11507 = (inst_11506__$1 == null);var state_11517__$1 = (function (){var statearr_11523 = state_11517;(statearr_11523[(8)] = inst_11506__$1);
return statearr_11523;
})();if(cljs.core.truth_(inst_11507))
{var statearr_11524_11538 = state_11517__$1;(statearr_11524_11538[(1)] = (5));
} else
{var statearr_11525_11539 = state_11517__$1;(statearr_11525_11539[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11518 === (3)))
{var inst_11515 = (state_11517[(2)]);var state_11517__$1 = state_11517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11517__$1,inst_11515);
} else
{if((state_val_11518 === (2)))
{var state_11517__$1 = state_11517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11517__$1,(4),ch);
} else
{if((state_val_11518 === (1)))
{var inst_11503 = init;var state_11517__$1 = (function (){var statearr_11526 = state_11517;(statearr_11526[(7)] = inst_11503);
return statearr_11526;
})();var statearr_11527_11540 = state_11517__$1;(statearr_11527_11540[(2)] = null);
(statearr_11527_11540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6523__auto__))
;return ((function (switch__6508__auto__,c__6523__auto__){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_11531 = [null,null,null,null,null,null,null,null,null];(statearr_11531[(0)] = state_machine__6509__auto__);
(statearr_11531[(1)] = (1));
return statearr_11531;
});
var state_machine__6509__auto____1 = (function (state_11517){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_11517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e11532){if((e11532 instanceof Object))
{var ex__6512__auto__ = e11532;var statearr_11533_11541 = state_11517;(statearr_11533_11541[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11542 = state_11517;
state_11517 = G__11542;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_11517){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_11517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto__))
})();var state__6525__auto__ = (function (){var statearr_11534 = f__6524__auto__.call(null);(statearr_11534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto__);
return statearr_11534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto__))
);
return c__6523__auto__;
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
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6523__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto__){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto__){
return (function (state_11616){var state_val_11617 = (state_11616[(1)]);if((state_val_11617 === (7)))
{var inst_11598 = (state_11616[(2)]);var state_11616__$1 = state_11616;var statearr_11618_11641 = state_11616__$1;(statearr_11618_11641[(2)] = inst_11598);
(statearr_11618_11641[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (1)))
{var inst_11592 = cljs.core.seq.call(null,coll);var inst_11593 = inst_11592;var state_11616__$1 = (function (){var statearr_11619 = state_11616;(statearr_11619[(7)] = inst_11593);
return statearr_11619;
})();var statearr_11620_11642 = state_11616__$1;(statearr_11620_11642[(2)] = null);
(statearr_11620_11642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (4)))
{var inst_11593 = (state_11616[(7)]);var inst_11596 = cljs.core.first.call(null,inst_11593);var state_11616__$1 = state_11616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11616__$1,(7),ch,inst_11596);
} else
{if((state_val_11617 === (13)))
{var inst_11610 = (state_11616[(2)]);var state_11616__$1 = state_11616;var statearr_11621_11643 = state_11616__$1;(statearr_11621_11643[(2)] = inst_11610);
(statearr_11621_11643[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (6)))
{var inst_11601 = (state_11616[(2)]);var state_11616__$1 = state_11616;if(cljs.core.truth_(inst_11601))
{var statearr_11622_11644 = state_11616__$1;(statearr_11622_11644[(1)] = (8));
} else
{var statearr_11623_11645 = state_11616__$1;(statearr_11623_11645[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (3)))
{var inst_11614 = (state_11616[(2)]);var state_11616__$1 = state_11616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11616__$1,inst_11614);
} else
{if((state_val_11617 === (12)))
{var state_11616__$1 = state_11616;var statearr_11624_11646 = state_11616__$1;(statearr_11624_11646[(2)] = null);
(statearr_11624_11646[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (2)))
{var inst_11593 = (state_11616[(7)]);var state_11616__$1 = state_11616;if(cljs.core.truth_(inst_11593))
{var statearr_11625_11647 = state_11616__$1;(statearr_11625_11647[(1)] = (4));
} else
{var statearr_11626_11648 = state_11616__$1;(statearr_11626_11648[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (11)))
{var inst_11607 = cljs.core.async.close_BANG_.call(null,ch);var state_11616__$1 = state_11616;var statearr_11627_11649 = state_11616__$1;(statearr_11627_11649[(2)] = inst_11607);
(statearr_11627_11649[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (9)))
{var state_11616__$1 = state_11616;if(cljs.core.truth_(close_QMARK_))
{var statearr_11628_11650 = state_11616__$1;(statearr_11628_11650[(1)] = (11));
} else
{var statearr_11629_11651 = state_11616__$1;(statearr_11629_11651[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (5)))
{var inst_11593 = (state_11616[(7)]);var state_11616__$1 = state_11616;var statearr_11630_11652 = state_11616__$1;(statearr_11630_11652[(2)] = inst_11593);
(statearr_11630_11652[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (10)))
{var inst_11612 = (state_11616[(2)]);var state_11616__$1 = state_11616;var statearr_11631_11653 = state_11616__$1;(statearr_11631_11653[(2)] = inst_11612);
(statearr_11631_11653[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (8)))
{var inst_11593 = (state_11616[(7)]);var inst_11603 = cljs.core.next.call(null,inst_11593);var inst_11593__$1 = inst_11603;var state_11616__$1 = (function (){var statearr_11632 = state_11616;(statearr_11632[(7)] = inst_11593__$1);
return statearr_11632;
})();var statearr_11633_11654 = state_11616__$1;(statearr_11633_11654[(2)] = null);
(statearr_11633_11654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto__))
;return ((function (switch__6508__auto__,c__6523__auto__){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_11637 = [null,null,null,null,null,null,null,null];(statearr_11637[(0)] = state_machine__6509__auto__);
(statearr_11637[(1)] = (1));
return statearr_11637;
});
var state_machine__6509__auto____1 = (function (state_11616){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_11616);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e11638){if((e11638 instanceof Object))
{var ex__6512__auto__ = e11638;var statearr_11639_11655 = state_11616;(statearr_11639_11655[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11656 = state_11616;
state_11616 = G__11656;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_11616){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_11616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto__))
})();var state__6525__auto__ = (function (){var statearr_11640 = f__6524__auto__.call(null);(statearr_11640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto__);
return statearr_11640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto__))
);
return c__6523__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11658 = {};return obj11658;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3532__auto__ = _;if(and__3532__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4171__auto__ = (((_ == null))?null:_);return (function (){var or__3544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11660 = {};return obj11660;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11882 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11882 = (function (cs,ch,mult,meta11883){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11883 = meta11883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11882.cljs$lang$type = true;
cljs.core.async.t11882.cljs$lang$ctorStr = "cljs.core.async/t11882";
cljs.core.async.t11882.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11882");
});})(cs))
;
cljs.core.async.t11882.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11882.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11882.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11882.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11882.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11884){var self__ = this;
var _11884__$1 = this;return self__.meta11883;
});})(cs))
;
cljs.core.async.t11882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11884,meta11883__$1){var self__ = this;
var _11884__$1 = this;return (new cljs.core.async.t11882(self__.cs,self__.ch,self__.mult,meta11883__$1));
});})(cs))
;
cljs.core.async.__GT_t11882 = ((function (cs){
return (function __GT_t11882(cs__$1,ch__$1,mult__$1,meta11883){return (new cljs.core.async.t11882(cs__$1,ch__$1,mult__$1,meta11883));
});})(cs))
;
}
return (new cljs.core.async.t11882(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6523__auto___12103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___12103,cs,m,dchan,dctr,done){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___12103,cs,m,dchan,dctr,done){
return (function (state_12015){var state_val_12016 = (state_12015[(1)]);if((state_val_12016 === (7)))
{var inst_12011 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12017_12104 = state_12015__$1;(statearr_12017_12104[(2)] = inst_12011);
(statearr_12017_12104[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (20)))
{var inst_11916 = (state_12015[(7)]);var inst_11926 = cljs.core.first.call(null,inst_11916);var inst_11927 = cljs.core.nth.call(null,inst_11926,(0),null);var inst_11928 = cljs.core.nth.call(null,inst_11926,(1),null);var state_12015__$1 = (function (){var statearr_12018 = state_12015;(statearr_12018[(8)] = inst_11927);
return statearr_12018;
})();if(cljs.core.truth_(inst_11928))
{var statearr_12019_12105 = state_12015__$1;(statearr_12019_12105[(1)] = (22));
} else
{var statearr_12020_12106 = state_12015__$1;(statearr_12020_12106[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (27)))
{var inst_11963 = (state_12015[(9)]);var inst_11887 = (state_12015[(10)]);var inst_11956 = (state_12015[(11)]);var inst_11958 = (state_12015[(12)]);var inst_11963__$1 = cljs.core._nth.call(null,inst_11956,inst_11958);var inst_11964 = cljs.core.async.put_BANG_.call(null,inst_11963__$1,inst_11887,done);var state_12015__$1 = (function (){var statearr_12021 = state_12015;(statearr_12021[(9)] = inst_11963__$1);
return statearr_12021;
})();if(cljs.core.truth_(inst_11964))
{var statearr_12022_12107 = state_12015__$1;(statearr_12022_12107[(1)] = (30));
} else
{var statearr_12023_12108 = state_12015__$1;(statearr_12023_12108[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (1)))
{var state_12015__$1 = state_12015;var statearr_12024_12109 = state_12015__$1;(statearr_12024_12109[(2)] = null);
(statearr_12024_12109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (24)))
{var inst_11916 = (state_12015[(7)]);var inst_11933 = (state_12015[(2)]);var inst_11934 = cljs.core.next.call(null,inst_11916);var inst_11896 = inst_11934;var inst_11897 = null;var inst_11898 = (0);var inst_11899 = (0);var state_12015__$1 = (function (){var statearr_12025 = state_12015;(statearr_12025[(13)] = inst_11899);
(statearr_12025[(14)] = inst_11898);
(statearr_12025[(15)] = inst_11933);
(statearr_12025[(16)] = inst_11896);
(statearr_12025[(17)] = inst_11897);
return statearr_12025;
})();var statearr_12026_12110 = state_12015__$1;(statearr_12026_12110[(2)] = null);
(statearr_12026_12110[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (39)))
{var state_12015__$1 = state_12015;var statearr_12030_12111 = state_12015__$1;(statearr_12030_12111[(2)] = null);
(statearr_12030_12111[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (4)))
{var inst_11887 = (state_12015[(10)]);var inst_11887__$1 = (state_12015[(2)]);var inst_11888 = (inst_11887__$1 == null);var state_12015__$1 = (function (){var statearr_12031 = state_12015;(statearr_12031[(10)] = inst_11887__$1);
return statearr_12031;
})();if(cljs.core.truth_(inst_11888))
{var statearr_12032_12112 = state_12015__$1;(statearr_12032_12112[(1)] = (5));
} else
{var statearr_12033_12113 = state_12015__$1;(statearr_12033_12113[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (15)))
{var inst_11899 = (state_12015[(13)]);var inst_11898 = (state_12015[(14)]);var inst_11896 = (state_12015[(16)]);var inst_11897 = (state_12015[(17)]);var inst_11912 = (state_12015[(2)]);var inst_11913 = (inst_11899 + (1));var tmp12027 = inst_11898;var tmp12028 = inst_11896;var tmp12029 = inst_11897;var inst_11896__$1 = tmp12028;var inst_11897__$1 = tmp12029;var inst_11898__$1 = tmp12027;var inst_11899__$1 = inst_11913;var state_12015__$1 = (function (){var statearr_12034 = state_12015;(statearr_12034[(13)] = inst_11899__$1);
(statearr_12034[(14)] = inst_11898__$1);
(statearr_12034[(18)] = inst_11912);
(statearr_12034[(16)] = inst_11896__$1);
(statearr_12034[(17)] = inst_11897__$1);
return statearr_12034;
})();var statearr_12035_12114 = state_12015__$1;(statearr_12035_12114[(2)] = null);
(statearr_12035_12114[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (21)))
{var inst_11937 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12039_12115 = state_12015__$1;(statearr_12039_12115[(2)] = inst_11937);
(statearr_12039_12115[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (31)))
{var inst_11963 = (state_12015[(9)]);var inst_11967 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11968 = cljs.core.async.untap_STAR_.call(null,m,inst_11963);var state_12015__$1 = (function (){var statearr_12040 = state_12015;(statearr_12040[(19)] = inst_11967);
return statearr_12040;
})();var statearr_12041_12116 = state_12015__$1;(statearr_12041_12116[(2)] = inst_11968);
(statearr_12041_12116[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (32)))
{var inst_11957 = (state_12015[(20)]);var inst_11955 = (state_12015[(21)]);var inst_11956 = (state_12015[(11)]);var inst_11958 = (state_12015[(12)]);var inst_11970 = (state_12015[(2)]);var inst_11971 = (inst_11958 + (1));var tmp12036 = inst_11957;var tmp12037 = inst_11955;var tmp12038 = inst_11956;var inst_11955__$1 = tmp12037;var inst_11956__$1 = tmp12038;var inst_11957__$1 = tmp12036;var inst_11958__$1 = inst_11971;var state_12015__$1 = (function (){var statearr_12042 = state_12015;(statearr_12042[(20)] = inst_11957__$1);
(statearr_12042[(22)] = inst_11970);
(statearr_12042[(21)] = inst_11955__$1);
(statearr_12042[(11)] = inst_11956__$1);
(statearr_12042[(12)] = inst_11958__$1);
return statearr_12042;
})();var statearr_12043_12117 = state_12015__$1;(statearr_12043_12117[(2)] = null);
(statearr_12043_12117[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (40)))
{var inst_11983 = (state_12015[(23)]);var inst_11987 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11988 = cljs.core.async.untap_STAR_.call(null,m,inst_11983);var state_12015__$1 = (function (){var statearr_12044 = state_12015;(statearr_12044[(24)] = inst_11987);
return statearr_12044;
})();var statearr_12045_12118 = state_12015__$1;(statearr_12045_12118[(2)] = inst_11988);
(statearr_12045_12118[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (33)))
{var inst_11974 = (state_12015[(25)]);var inst_11976 = cljs.core.chunked_seq_QMARK_.call(null,inst_11974);var state_12015__$1 = state_12015;if(inst_11976)
{var statearr_12046_12119 = state_12015__$1;(statearr_12046_12119[(1)] = (36));
} else
{var statearr_12047_12120 = state_12015__$1;(statearr_12047_12120[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (13)))
{var inst_11906 = (state_12015[(26)]);var inst_11909 = cljs.core.async.close_BANG_.call(null,inst_11906);var state_12015__$1 = state_12015;var statearr_12048_12121 = state_12015__$1;(statearr_12048_12121[(2)] = inst_11909);
(statearr_12048_12121[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (22)))
{var inst_11927 = (state_12015[(8)]);var inst_11930 = cljs.core.async.close_BANG_.call(null,inst_11927);var state_12015__$1 = state_12015;var statearr_12049_12122 = state_12015__$1;(statearr_12049_12122[(2)] = inst_11930);
(statearr_12049_12122[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (36)))
{var inst_11974 = (state_12015[(25)]);var inst_11978 = cljs.core.chunk_first.call(null,inst_11974);var inst_11979 = cljs.core.chunk_rest.call(null,inst_11974);var inst_11980 = cljs.core.count.call(null,inst_11978);var inst_11955 = inst_11979;var inst_11956 = inst_11978;var inst_11957 = inst_11980;var inst_11958 = (0);var state_12015__$1 = (function (){var statearr_12050 = state_12015;(statearr_12050[(20)] = inst_11957);
(statearr_12050[(21)] = inst_11955);
(statearr_12050[(11)] = inst_11956);
(statearr_12050[(12)] = inst_11958);
return statearr_12050;
})();var statearr_12051_12123 = state_12015__$1;(statearr_12051_12123[(2)] = null);
(statearr_12051_12123[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (41)))
{var inst_11974 = (state_12015[(25)]);var inst_11990 = (state_12015[(2)]);var inst_11991 = cljs.core.next.call(null,inst_11974);var inst_11955 = inst_11991;var inst_11956 = null;var inst_11957 = (0);var inst_11958 = (0);var state_12015__$1 = (function (){var statearr_12052 = state_12015;(statearr_12052[(20)] = inst_11957);
(statearr_12052[(27)] = inst_11990);
(statearr_12052[(21)] = inst_11955);
(statearr_12052[(11)] = inst_11956);
(statearr_12052[(12)] = inst_11958);
return statearr_12052;
})();var statearr_12053_12124 = state_12015__$1;(statearr_12053_12124[(2)] = null);
(statearr_12053_12124[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (43)))
{var state_12015__$1 = state_12015;var statearr_12054_12125 = state_12015__$1;(statearr_12054_12125[(2)] = null);
(statearr_12054_12125[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (29)))
{var inst_11999 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12055_12126 = state_12015__$1;(statearr_12055_12126[(2)] = inst_11999);
(statearr_12055_12126[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (44)))
{var inst_12008 = (state_12015[(2)]);var state_12015__$1 = (function (){var statearr_12056 = state_12015;(statearr_12056[(28)] = inst_12008);
return statearr_12056;
})();var statearr_12057_12127 = state_12015__$1;(statearr_12057_12127[(2)] = null);
(statearr_12057_12127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (6)))
{var inst_11947 = (state_12015[(29)]);var inst_11946 = cljs.core.deref.call(null,cs);var inst_11947__$1 = cljs.core.keys.call(null,inst_11946);var inst_11948 = cljs.core.count.call(null,inst_11947__$1);var inst_11949 = cljs.core.reset_BANG_.call(null,dctr,inst_11948);var inst_11954 = cljs.core.seq.call(null,inst_11947__$1);var inst_11955 = inst_11954;var inst_11956 = null;var inst_11957 = (0);var inst_11958 = (0);var state_12015__$1 = (function (){var statearr_12058 = state_12015;(statearr_12058[(30)] = inst_11949);
(statearr_12058[(20)] = inst_11957);
(statearr_12058[(29)] = inst_11947__$1);
(statearr_12058[(21)] = inst_11955);
(statearr_12058[(11)] = inst_11956);
(statearr_12058[(12)] = inst_11958);
return statearr_12058;
})();var statearr_12059_12128 = state_12015__$1;(statearr_12059_12128[(2)] = null);
(statearr_12059_12128[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (28)))
{var inst_11974 = (state_12015[(25)]);var inst_11955 = (state_12015[(21)]);var inst_11974__$1 = cljs.core.seq.call(null,inst_11955);var state_12015__$1 = (function (){var statearr_12060 = state_12015;(statearr_12060[(25)] = inst_11974__$1);
return statearr_12060;
})();if(inst_11974__$1)
{var statearr_12061_12129 = state_12015__$1;(statearr_12061_12129[(1)] = (33));
} else
{var statearr_12062_12130 = state_12015__$1;(statearr_12062_12130[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (25)))
{var inst_11957 = (state_12015[(20)]);var inst_11958 = (state_12015[(12)]);var inst_11960 = (inst_11958 < inst_11957);var inst_11961 = inst_11960;var state_12015__$1 = state_12015;if(cljs.core.truth_(inst_11961))
{var statearr_12063_12131 = state_12015__$1;(statearr_12063_12131[(1)] = (27));
} else
{var statearr_12064_12132 = state_12015__$1;(statearr_12064_12132[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (34)))
{var state_12015__$1 = state_12015;var statearr_12065_12133 = state_12015__$1;(statearr_12065_12133[(2)] = null);
(statearr_12065_12133[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (17)))
{var state_12015__$1 = state_12015;var statearr_12066_12134 = state_12015__$1;(statearr_12066_12134[(2)] = null);
(statearr_12066_12134[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (3)))
{var inst_12013 = (state_12015[(2)]);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12015__$1,inst_12013);
} else
{if((state_val_12016 === (12)))
{var inst_11942 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12067_12135 = state_12015__$1;(statearr_12067_12135[(2)] = inst_11942);
(statearr_12067_12135[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (2)))
{var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12015__$1,(4),ch);
} else
{if((state_val_12016 === (23)))
{var state_12015__$1 = state_12015;var statearr_12068_12136 = state_12015__$1;(statearr_12068_12136[(2)] = null);
(statearr_12068_12136[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (35)))
{var inst_11997 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12069_12137 = state_12015__$1;(statearr_12069_12137[(2)] = inst_11997);
(statearr_12069_12137[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (19)))
{var inst_11916 = (state_12015[(7)]);var inst_11920 = cljs.core.chunk_first.call(null,inst_11916);var inst_11921 = cljs.core.chunk_rest.call(null,inst_11916);var inst_11922 = cljs.core.count.call(null,inst_11920);var inst_11896 = inst_11921;var inst_11897 = inst_11920;var inst_11898 = inst_11922;var inst_11899 = (0);var state_12015__$1 = (function (){var statearr_12070 = state_12015;(statearr_12070[(13)] = inst_11899);
(statearr_12070[(14)] = inst_11898);
(statearr_12070[(16)] = inst_11896);
(statearr_12070[(17)] = inst_11897);
return statearr_12070;
})();var statearr_12071_12138 = state_12015__$1;(statearr_12071_12138[(2)] = null);
(statearr_12071_12138[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (11)))
{var inst_11916 = (state_12015[(7)]);var inst_11896 = (state_12015[(16)]);var inst_11916__$1 = cljs.core.seq.call(null,inst_11896);var state_12015__$1 = (function (){var statearr_12072 = state_12015;(statearr_12072[(7)] = inst_11916__$1);
return statearr_12072;
})();if(inst_11916__$1)
{var statearr_12073_12139 = state_12015__$1;(statearr_12073_12139[(1)] = (16));
} else
{var statearr_12074_12140 = state_12015__$1;(statearr_12074_12140[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (9)))
{var inst_11944 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12075_12141 = state_12015__$1;(statearr_12075_12141[(2)] = inst_11944);
(statearr_12075_12141[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (5)))
{var inst_11894 = cljs.core.deref.call(null,cs);var inst_11895 = cljs.core.seq.call(null,inst_11894);var inst_11896 = inst_11895;var inst_11897 = null;var inst_11898 = (0);var inst_11899 = (0);var state_12015__$1 = (function (){var statearr_12076 = state_12015;(statearr_12076[(13)] = inst_11899);
(statearr_12076[(14)] = inst_11898);
(statearr_12076[(16)] = inst_11896);
(statearr_12076[(17)] = inst_11897);
return statearr_12076;
})();var statearr_12077_12142 = state_12015__$1;(statearr_12077_12142[(2)] = null);
(statearr_12077_12142[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (14)))
{var state_12015__$1 = state_12015;var statearr_12078_12143 = state_12015__$1;(statearr_12078_12143[(2)] = null);
(statearr_12078_12143[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (45)))
{var inst_12005 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12079_12144 = state_12015__$1;(statearr_12079_12144[(2)] = inst_12005);
(statearr_12079_12144[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (26)))
{var inst_11947 = (state_12015[(29)]);var inst_12001 = (state_12015[(2)]);var inst_12002 = cljs.core.seq.call(null,inst_11947);var state_12015__$1 = (function (){var statearr_12080 = state_12015;(statearr_12080[(31)] = inst_12001);
return statearr_12080;
})();if(inst_12002)
{var statearr_12081_12145 = state_12015__$1;(statearr_12081_12145[(1)] = (42));
} else
{var statearr_12082_12146 = state_12015__$1;(statearr_12082_12146[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (16)))
{var inst_11916 = (state_12015[(7)]);var inst_11918 = cljs.core.chunked_seq_QMARK_.call(null,inst_11916);var state_12015__$1 = state_12015;if(inst_11918)
{var statearr_12083_12147 = state_12015__$1;(statearr_12083_12147[(1)] = (19));
} else
{var statearr_12084_12148 = state_12015__$1;(statearr_12084_12148[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (38)))
{var inst_11994 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12085_12149 = state_12015__$1;(statearr_12085_12149[(2)] = inst_11994);
(statearr_12085_12149[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (30)))
{var state_12015__$1 = state_12015;var statearr_12086_12150 = state_12015__$1;(statearr_12086_12150[(2)] = null);
(statearr_12086_12150[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (10)))
{var inst_11899 = (state_12015[(13)]);var inst_11897 = (state_12015[(17)]);var inst_11905 = cljs.core._nth.call(null,inst_11897,inst_11899);var inst_11906 = cljs.core.nth.call(null,inst_11905,(0),null);var inst_11907 = cljs.core.nth.call(null,inst_11905,(1),null);var state_12015__$1 = (function (){var statearr_12087 = state_12015;(statearr_12087[(26)] = inst_11906);
return statearr_12087;
})();if(cljs.core.truth_(inst_11907))
{var statearr_12088_12151 = state_12015__$1;(statearr_12088_12151[(1)] = (13));
} else
{var statearr_12089_12152 = state_12015__$1;(statearr_12089_12152[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (18)))
{var inst_11940 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12090_12153 = state_12015__$1;(statearr_12090_12153[(2)] = inst_11940);
(statearr_12090_12153[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (42)))
{var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12015__$1,(45),dchan);
} else
{if((state_val_12016 === (37)))
{var inst_11887 = (state_12015[(10)]);var inst_11974 = (state_12015[(25)]);var inst_11983 = (state_12015[(23)]);var inst_11983__$1 = cljs.core.first.call(null,inst_11974);var inst_11984 = cljs.core.async.put_BANG_.call(null,inst_11983__$1,inst_11887,done);var state_12015__$1 = (function (){var statearr_12091 = state_12015;(statearr_12091[(23)] = inst_11983__$1);
return statearr_12091;
})();if(cljs.core.truth_(inst_11984))
{var statearr_12092_12154 = state_12015__$1;(statearr_12092_12154[(1)] = (39));
} else
{var statearr_12093_12155 = state_12015__$1;(statearr_12093_12155[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (8)))
{var inst_11899 = (state_12015[(13)]);var inst_11898 = (state_12015[(14)]);var inst_11901 = (inst_11899 < inst_11898);var inst_11902 = inst_11901;var state_12015__$1 = state_12015;if(cljs.core.truth_(inst_11902))
{var statearr_12094_12156 = state_12015__$1;(statearr_12094_12156[(1)] = (10));
} else
{var statearr_12095_12157 = state_12015__$1;(statearr_12095_12157[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___12103,cs,m,dchan,dctr,done))
;return ((function (switch__6508__auto__,c__6523__auto___12103,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_12099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12099[(0)] = state_machine__6509__auto__);
(statearr_12099[(1)] = (1));
return statearr_12099;
});
var state_machine__6509__auto____1 = (function (state_12015){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_12015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e12100){if((e12100 instanceof Object))
{var ex__6512__auto__ = e12100;var statearr_12101_12158 = state_12015;(statearr_12101_12158[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12159 = state_12015;
state_12015 = G__12159;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_12015){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_12015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___12103,cs,m,dchan,dctr,done))
})();var state__6525__auto__ = (function (){var statearr_12102 = f__6524__auto__.call(null);(statearr_12102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___12103);
return statearr_12102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___12103,cs,m,dchan,dctr,done))
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
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12161 = {};return obj12161;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12281 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12281 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12282){
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
this.meta12282 = meta12282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12281.cljs$lang$type = true;
cljs.core.async.t12281.cljs$lang$ctorStr = "cljs.core.async/t12281";
cljs.core.async.t12281.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12281");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12281.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12283){var self__ = this;
var _12283__$1 = this;return self__.meta12282;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12283,meta12282__$1){var self__ = this;
var _12283__$1 = this;return (new cljs.core.async.t12281(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12282__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12281 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12281(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12282){return (new cljs.core.async.t12281(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12282));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12281(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6523__auto___12400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___12400,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___12400,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12353){var state_val_12354 = (state_12353[(1)]);if((state_val_12354 === (7)))
{var inst_12297 = (state_12353[(7)]);var inst_12302 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12297);var state_12353__$1 = state_12353;var statearr_12355_12401 = state_12353__$1;(statearr_12355_12401[(2)] = inst_12302);
(statearr_12355_12401[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (20)))
{var inst_12312 = (state_12353[(8)]);var state_12353__$1 = state_12353;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12353__$1,(23),out,inst_12312);
} else
{if((state_val_12354 === (1)))
{var inst_12287 = (state_12353[(9)]);var inst_12287__$1 = calc_state.call(null);var inst_12288 = cljs.core.seq_QMARK_.call(null,inst_12287__$1);var state_12353__$1 = (function (){var statearr_12356 = state_12353;(statearr_12356[(9)] = inst_12287__$1);
return statearr_12356;
})();if(inst_12288)
{var statearr_12357_12402 = state_12353__$1;(statearr_12357_12402[(1)] = (2));
} else
{var statearr_12358_12403 = state_12353__$1;(statearr_12358_12403[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (24)))
{var inst_12305 = (state_12353[(10)]);var inst_12297 = inst_12305;var state_12353__$1 = (function (){var statearr_12359 = state_12353;(statearr_12359[(7)] = inst_12297);
return statearr_12359;
})();var statearr_12360_12404 = state_12353__$1;(statearr_12360_12404[(2)] = null);
(statearr_12360_12404[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (4)))
{var inst_12287 = (state_12353[(9)]);var inst_12293 = (state_12353[(2)]);var inst_12294 = cljs.core.get.call(null,inst_12293,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12295 = cljs.core.get.call(null,inst_12293,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12296 = cljs.core.get.call(null,inst_12293,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12297 = inst_12287;var state_12353__$1 = (function (){var statearr_12361 = state_12353;(statearr_12361[(11)] = inst_12295);
(statearr_12361[(12)] = inst_12296);
(statearr_12361[(7)] = inst_12297);
(statearr_12361[(13)] = inst_12294);
return statearr_12361;
})();var statearr_12362_12405 = state_12353__$1;(statearr_12362_12405[(2)] = null);
(statearr_12362_12405[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (15)))
{var state_12353__$1 = state_12353;var statearr_12363_12406 = state_12353__$1;(statearr_12363_12406[(2)] = null);
(statearr_12363_12406[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (21)))
{var inst_12305 = (state_12353[(10)]);var inst_12297 = inst_12305;var state_12353__$1 = (function (){var statearr_12364 = state_12353;(statearr_12364[(7)] = inst_12297);
return statearr_12364;
})();var statearr_12365_12407 = state_12353__$1;(statearr_12365_12407[(2)] = null);
(statearr_12365_12407[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (13)))
{var inst_12349 = (state_12353[(2)]);var state_12353__$1 = state_12353;var statearr_12366_12408 = state_12353__$1;(statearr_12366_12408[(2)] = inst_12349);
(statearr_12366_12408[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (22)))
{var inst_12347 = (state_12353[(2)]);var state_12353__$1 = state_12353;var statearr_12367_12409 = state_12353__$1;(statearr_12367_12409[(2)] = inst_12347);
(statearr_12367_12409[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (6)))
{var inst_12351 = (state_12353[(2)]);var state_12353__$1 = state_12353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12353__$1,inst_12351);
} else
{if((state_val_12354 === (25)))
{var state_12353__$1 = state_12353;var statearr_12368_12410 = state_12353__$1;(statearr_12368_12410[(2)] = null);
(statearr_12368_12410[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (17)))
{var inst_12327 = (state_12353[(14)]);var state_12353__$1 = state_12353;var statearr_12369_12411 = state_12353__$1;(statearr_12369_12411[(2)] = inst_12327);
(statearr_12369_12411[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (3)))
{var inst_12287 = (state_12353[(9)]);var state_12353__$1 = state_12353;var statearr_12370_12412 = state_12353__$1;(statearr_12370_12412[(2)] = inst_12287);
(statearr_12370_12412[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (12)))
{var inst_12308 = (state_12353[(15)]);var inst_12327 = (state_12353[(14)]);var inst_12313 = (state_12353[(16)]);var inst_12327__$1 = inst_12308.call(null,inst_12313);var state_12353__$1 = (function (){var statearr_12371 = state_12353;(statearr_12371[(14)] = inst_12327__$1);
return statearr_12371;
})();if(cljs.core.truth_(inst_12327__$1))
{var statearr_12372_12413 = state_12353__$1;(statearr_12372_12413[(1)] = (17));
} else
{var statearr_12373_12414 = state_12353__$1;(statearr_12373_12414[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (2)))
{var inst_12287 = (state_12353[(9)]);var inst_12290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12287);var state_12353__$1 = state_12353;var statearr_12374_12415 = state_12353__$1;(statearr_12374_12415[(2)] = inst_12290);
(statearr_12374_12415[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (23)))
{var inst_12338 = (state_12353[(2)]);var state_12353__$1 = state_12353;if(cljs.core.truth_(inst_12338))
{var statearr_12375_12416 = state_12353__$1;(statearr_12375_12416[(1)] = (24));
} else
{var statearr_12376_12417 = state_12353__$1;(statearr_12376_12417[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (19)))
{var inst_12335 = (state_12353[(2)]);var state_12353__$1 = state_12353;if(cljs.core.truth_(inst_12335))
{var statearr_12377_12418 = state_12353__$1;(statearr_12377_12418[(1)] = (20));
} else
{var statearr_12378_12419 = state_12353__$1;(statearr_12378_12419[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (11)))
{var inst_12312 = (state_12353[(8)]);var inst_12318 = (inst_12312 == null);var state_12353__$1 = state_12353;if(cljs.core.truth_(inst_12318))
{var statearr_12379_12420 = state_12353__$1;(statearr_12379_12420[(1)] = (14));
} else
{var statearr_12380_12421 = state_12353__$1;(statearr_12380_12421[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (9)))
{var inst_12305 = (state_12353[(10)]);var inst_12305__$1 = (state_12353[(2)]);var inst_12306 = cljs.core.get.call(null,inst_12305__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12307 = cljs.core.get.call(null,inst_12305__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12308 = cljs.core.get.call(null,inst_12305__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12353__$1 = (function (){var statearr_12381 = state_12353;(statearr_12381[(10)] = inst_12305__$1);
(statearr_12381[(17)] = inst_12307);
(statearr_12381[(15)] = inst_12308);
return statearr_12381;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12353__$1,(10),inst_12306);
} else
{if((state_val_12354 === (5)))
{var inst_12297 = (state_12353[(7)]);var inst_12300 = cljs.core.seq_QMARK_.call(null,inst_12297);var state_12353__$1 = state_12353;if(inst_12300)
{var statearr_12382_12422 = state_12353__$1;(statearr_12382_12422[(1)] = (7));
} else
{var statearr_12383_12423 = state_12353__$1;(statearr_12383_12423[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (14)))
{var inst_12313 = (state_12353[(16)]);var inst_12320 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12313);var state_12353__$1 = state_12353;var statearr_12384_12424 = state_12353__$1;(statearr_12384_12424[(2)] = inst_12320);
(statearr_12384_12424[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (26)))
{var inst_12343 = (state_12353[(2)]);var state_12353__$1 = state_12353;var statearr_12385_12425 = state_12353__$1;(statearr_12385_12425[(2)] = inst_12343);
(statearr_12385_12425[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (16)))
{var inst_12323 = (state_12353[(2)]);var inst_12324 = calc_state.call(null);var inst_12297 = inst_12324;var state_12353__$1 = (function (){var statearr_12386 = state_12353;(statearr_12386[(7)] = inst_12297);
(statearr_12386[(18)] = inst_12323);
return statearr_12386;
})();var statearr_12387_12426 = state_12353__$1;(statearr_12387_12426[(2)] = null);
(statearr_12387_12426[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (10)))
{var inst_12312 = (state_12353[(8)]);var inst_12313 = (state_12353[(16)]);var inst_12311 = (state_12353[(2)]);var inst_12312__$1 = cljs.core.nth.call(null,inst_12311,(0),null);var inst_12313__$1 = cljs.core.nth.call(null,inst_12311,(1),null);var inst_12314 = (inst_12312__$1 == null);var inst_12315 = cljs.core._EQ_.call(null,inst_12313__$1,change);var inst_12316 = (inst_12314) || (inst_12315);var state_12353__$1 = (function (){var statearr_12388 = state_12353;(statearr_12388[(8)] = inst_12312__$1);
(statearr_12388[(16)] = inst_12313__$1);
return statearr_12388;
})();if(cljs.core.truth_(inst_12316))
{var statearr_12389_12427 = state_12353__$1;(statearr_12389_12427[(1)] = (11));
} else
{var statearr_12390_12428 = state_12353__$1;(statearr_12390_12428[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (18)))
{var inst_12307 = (state_12353[(17)]);var inst_12308 = (state_12353[(15)]);var inst_12313 = (state_12353[(16)]);var inst_12330 = cljs.core.empty_QMARK_.call(null,inst_12308);var inst_12331 = inst_12307.call(null,inst_12313);var inst_12332 = cljs.core.not.call(null,inst_12331);var inst_12333 = (inst_12330) && (inst_12332);var state_12353__$1 = state_12353;var statearr_12391_12429 = state_12353__$1;(statearr_12391_12429[(2)] = inst_12333);
(statearr_12391_12429[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12354 === (8)))
{var inst_12297 = (state_12353[(7)]);var state_12353__$1 = state_12353;var statearr_12392_12430 = state_12353__$1;(statearr_12392_12430[(2)] = inst_12297);
(statearr_12392_12430[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___12400,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6508__auto__,c__6523__auto___12400,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_12396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12396[(0)] = state_machine__6509__auto__);
(statearr_12396[(1)] = (1));
return statearr_12396;
});
var state_machine__6509__auto____1 = (function (state_12353){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_12353);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e12397){if((e12397 instanceof Object))
{var ex__6512__auto__ = e12397;var statearr_12398_12431 = state_12353;(statearr_12398_12431[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12353);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12432 = state_12353;
state_12353 = G__12432;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_12353){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_12353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___12400,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6525__auto__ = (function (){var statearr_12399 = f__6524__auto__.call(null);(statearr_12399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___12400);
return statearr_12399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___12400,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12434 = {};return obj12434;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
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
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3544__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3544__auto__,mults){
return (function (p1__12435_SHARP_){if(cljs.core.truth_(p1__12435_SHARP_.call(null,topic)))
{return p1__12435_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12435_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3544__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12558 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12559){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12559 = meta12559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12558.cljs$lang$type = true;
cljs.core.async.t12558.cljs$lang$ctorStr = "cljs.core.async/t12558";
cljs.core.async.t12558.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12558");
});})(mults,ensure_mult))
;
cljs.core.async.t12558.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12558.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12558.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12558.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12560){var self__ = this;
var _12560__$1 = this;return self__.meta12559;
});})(mults,ensure_mult))
;
cljs.core.async.t12558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12560,meta12559__$1){var self__ = this;
var _12560__$1 = this;return (new cljs.core.async.t12558(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12559__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12558 = ((function (mults,ensure_mult){
return (function __GT_t12558(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12559){return (new cljs.core.async.t12558(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12559));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12558(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6523__auto___12680 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___12680,mults,ensure_mult,p){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___12680,mults,ensure_mult,p){
return (function (state_12632){var state_val_12633 = (state_12632[(1)]);if((state_val_12633 === (7)))
{var inst_12628 = (state_12632[(2)]);var state_12632__$1 = state_12632;var statearr_12634_12681 = state_12632__$1;(statearr_12634_12681[(2)] = inst_12628);
(statearr_12634_12681[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (20)))
{var state_12632__$1 = state_12632;var statearr_12635_12682 = state_12632__$1;(statearr_12635_12682[(2)] = null);
(statearr_12635_12682[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (1)))
{var state_12632__$1 = state_12632;var statearr_12636_12683 = state_12632__$1;(statearr_12636_12683[(2)] = null);
(statearr_12636_12683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (24)))
{var inst_12611 = (state_12632[(7)]);var inst_12620 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12611);var state_12632__$1 = state_12632;var statearr_12637_12684 = state_12632__$1;(statearr_12637_12684[(2)] = inst_12620);
(statearr_12637_12684[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (4)))
{var inst_12563 = (state_12632[(8)]);var inst_12563__$1 = (state_12632[(2)]);var inst_12564 = (inst_12563__$1 == null);var state_12632__$1 = (function (){var statearr_12638 = state_12632;(statearr_12638[(8)] = inst_12563__$1);
return statearr_12638;
})();if(cljs.core.truth_(inst_12564))
{var statearr_12639_12685 = state_12632__$1;(statearr_12639_12685[(1)] = (5));
} else
{var statearr_12640_12686 = state_12632__$1;(statearr_12640_12686[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (15)))
{var inst_12605 = (state_12632[(2)]);var state_12632__$1 = state_12632;var statearr_12641_12687 = state_12632__$1;(statearr_12641_12687[(2)] = inst_12605);
(statearr_12641_12687[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (21)))
{var inst_12625 = (state_12632[(2)]);var state_12632__$1 = (function (){var statearr_12642 = state_12632;(statearr_12642[(9)] = inst_12625);
return statearr_12642;
})();var statearr_12643_12688 = state_12632__$1;(statearr_12643_12688[(2)] = null);
(statearr_12643_12688[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (13)))
{var inst_12587 = (state_12632[(10)]);var inst_12589 = cljs.core.chunked_seq_QMARK_.call(null,inst_12587);var state_12632__$1 = state_12632;if(inst_12589)
{var statearr_12644_12689 = state_12632__$1;(statearr_12644_12689[(1)] = (16));
} else
{var statearr_12645_12690 = state_12632__$1;(statearr_12645_12690[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (22)))
{var inst_12617 = (state_12632[(2)]);var state_12632__$1 = state_12632;if(cljs.core.truth_(inst_12617))
{var statearr_12646_12691 = state_12632__$1;(statearr_12646_12691[(1)] = (23));
} else
{var statearr_12647_12692 = state_12632__$1;(statearr_12647_12692[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (6)))
{var inst_12613 = (state_12632[(11)]);var inst_12563 = (state_12632[(8)]);var inst_12611 = (state_12632[(7)]);var inst_12611__$1 = topic_fn.call(null,inst_12563);var inst_12612 = cljs.core.deref.call(null,mults);var inst_12613__$1 = cljs.core.get.call(null,inst_12612,inst_12611__$1);var state_12632__$1 = (function (){var statearr_12648 = state_12632;(statearr_12648[(11)] = inst_12613__$1);
(statearr_12648[(7)] = inst_12611__$1);
return statearr_12648;
})();if(cljs.core.truth_(inst_12613__$1))
{var statearr_12649_12693 = state_12632__$1;(statearr_12649_12693[(1)] = (19));
} else
{var statearr_12650_12694 = state_12632__$1;(statearr_12650_12694[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (25)))
{var inst_12622 = (state_12632[(2)]);var state_12632__$1 = state_12632;var statearr_12651_12695 = state_12632__$1;(statearr_12651_12695[(2)] = inst_12622);
(statearr_12651_12695[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (17)))
{var inst_12587 = (state_12632[(10)]);var inst_12596 = cljs.core.first.call(null,inst_12587);var inst_12597 = cljs.core.async.muxch_STAR_.call(null,inst_12596);var inst_12598 = cljs.core.async.close_BANG_.call(null,inst_12597);var inst_12599 = cljs.core.next.call(null,inst_12587);var inst_12573 = inst_12599;var inst_12574 = null;var inst_12575 = (0);var inst_12576 = (0);var state_12632__$1 = (function (){var statearr_12652 = state_12632;(statearr_12652[(12)] = inst_12576);
(statearr_12652[(13)] = inst_12598);
(statearr_12652[(14)] = inst_12574);
(statearr_12652[(15)] = inst_12575);
(statearr_12652[(16)] = inst_12573);
return statearr_12652;
})();var statearr_12653_12696 = state_12632__$1;(statearr_12653_12696[(2)] = null);
(statearr_12653_12696[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (3)))
{var inst_12630 = (state_12632[(2)]);var state_12632__$1 = state_12632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12632__$1,inst_12630);
} else
{if((state_val_12633 === (12)))
{var inst_12607 = (state_12632[(2)]);var state_12632__$1 = state_12632;var statearr_12654_12697 = state_12632__$1;(statearr_12654_12697[(2)] = inst_12607);
(statearr_12654_12697[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (2)))
{var state_12632__$1 = state_12632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12632__$1,(4),ch);
} else
{if((state_val_12633 === (23)))
{var state_12632__$1 = state_12632;var statearr_12655_12698 = state_12632__$1;(statearr_12655_12698[(2)] = null);
(statearr_12655_12698[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (19)))
{var inst_12613 = (state_12632[(11)]);var inst_12563 = (state_12632[(8)]);var inst_12615 = cljs.core.async.muxch_STAR_.call(null,inst_12613);var state_12632__$1 = state_12632;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12632__$1,(22),inst_12615,inst_12563);
} else
{if((state_val_12633 === (11)))
{var inst_12587 = (state_12632[(10)]);var inst_12573 = (state_12632[(16)]);var inst_12587__$1 = cljs.core.seq.call(null,inst_12573);var state_12632__$1 = (function (){var statearr_12656 = state_12632;(statearr_12656[(10)] = inst_12587__$1);
return statearr_12656;
})();if(inst_12587__$1)
{var statearr_12657_12699 = state_12632__$1;(statearr_12657_12699[(1)] = (13));
} else
{var statearr_12658_12700 = state_12632__$1;(statearr_12658_12700[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (9)))
{var inst_12609 = (state_12632[(2)]);var state_12632__$1 = state_12632;var statearr_12659_12701 = state_12632__$1;(statearr_12659_12701[(2)] = inst_12609);
(statearr_12659_12701[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (5)))
{var inst_12570 = cljs.core.deref.call(null,mults);var inst_12571 = cljs.core.vals.call(null,inst_12570);var inst_12572 = cljs.core.seq.call(null,inst_12571);var inst_12573 = inst_12572;var inst_12574 = null;var inst_12575 = (0);var inst_12576 = (0);var state_12632__$1 = (function (){var statearr_12660 = state_12632;(statearr_12660[(12)] = inst_12576);
(statearr_12660[(14)] = inst_12574);
(statearr_12660[(15)] = inst_12575);
(statearr_12660[(16)] = inst_12573);
return statearr_12660;
})();var statearr_12661_12702 = state_12632__$1;(statearr_12661_12702[(2)] = null);
(statearr_12661_12702[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (14)))
{var state_12632__$1 = state_12632;var statearr_12665_12703 = state_12632__$1;(statearr_12665_12703[(2)] = null);
(statearr_12665_12703[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (16)))
{var inst_12587 = (state_12632[(10)]);var inst_12591 = cljs.core.chunk_first.call(null,inst_12587);var inst_12592 = cljs.core.chunk_rest.call(null,inst_12587);var inst_12593 = cljs.core.count.call(null,inst_12591);var inst_12573 = inst_12592;var inst_12574 = inst_12591;var inst_12575 = inst_12593;var inst_12576 = (0);var state_12632__$1 = (function (){var statearr_12666 = state_12632;(statearr_12666[(12)] = inst_12576);
(statearr_12666[(14)] = inst_12574);
(statearr_12666[(15)] = inst_12575);
(statearr_12666[(16)] = inst_12573);
return statearr_12666;
})();var statearr_12667_12704 = state_12632__$1;(statearr_12667_12704[(2)] = null);
(statearr_12667_12704[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (10)))
{var inst_12576 = (state_12632[(12)]);var inst_12574 = (state_12632[(14)]);var inst_12575 = (state_12632[(15)]);var inst_12573 = (state_12632[(16)]);var inst_12581 = cljs.core._nth.call(null,inst_12574,inst_12576);var inst_12582 = cljs.core.async.muxch_STAR_.call(null,inst_12581);var inst_12583 = cljs.core.async.close_BANG_.call(null,inst_12582);var inst_12584 = (inst_12576 + (1));var tmp12662 = inst_12574;var tmp12663 = inst_12575;var tmp12664 = inst_12573;var inst_12573__$1 = tmp12664;var inst_12574__$1 = tmp12662;var inst_12575__$1 = tmp12663;var inst_12576__$1 = inst_12584;var state_12632__$1 = (function (){var statearr_12668 = state_12632;(statearr_12668[(12)] = inst_12576__$1);
(statearr_12668[(17)] = inst_12583);
(statearr_12668[(14)] = inst_12574__$1);
(statearr_12668[(15)] = inst_12575__$1);
(statearr_12668[(16)] = inst_12573__$1);
return statearr_12668;
})();var statearr_12669_12705 = state_12632__$1;(statearr_12669_12705[(2)] = null);
(statearr_12669_12705[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (18)))
{var inst_12602 = (state_12632[(2)]);var state_12632__$1 = state_12632;var statearr_12670_12706 = state_12632__$1;(statearr_12670_12706[(2)] = inst_12602);
(statearr_12670_12706[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12633 === (8)))
{var inst_12576 = (state_12632[(12)]);var inst_12575 = (state_12632[(15)]);var inst_12578 = (inst_12576 < inst_12575);var inst_12579 = inst_12578;var state_12632__$1 = state_12632;if(cljs.core.truth_(inst_12579))
{var statearr_12671_12707 = state_12632__$1;(statearr_12671_12707[(1)] = (10));
} else
{var statearr_12672_12708 = state_12632__$1;(statearr_12672_12708[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___12680,mults,ensure_mult,p))
;return ((function (switch__6508__auto__,c__6523__auto___12680,mults,ensure_mult,p){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_12676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12676[(0)] = state_machine__6509__auto__);
(statearr_12676[(1)] = (1));
return statearr_12676;
});
var state_machine__6509__auto____1 = (function (state_12632){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_12632);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e12677){if((e12677 instanceof Object))
{var ex__6512__auto__ = e12677;var statearr_12678_12709 = state_12632;(statearr_12678_12709[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12632);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12710 = state_12632;
state_12632 = G__12710;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_12632){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_12632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___12680,mults,ensure_mult,p))
})();var state__6525__auto__ = (function (){var statearr_12679 = f__6524__auto__.call(null);(statearr_12679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___12680);
return statearr_12679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___12680,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
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
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6523__auto___12847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___12847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___12847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12817){var state_val_12818 = (state_12817[(1)]);if((state_val_12818 === (7)))
{var state_12817__$1 = state_12817;var statearr_12819_12848 = state_12817__$1;(statearr_12819_12848[(2)] = null);
(statearr_12819_12848[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (1)))
{var state_12817__$1 = state_12817;var statearr_12820_12849 = state_12817__$1;(statearr_12820_12849[(2)] = null);
(statearr_12820_12849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (4)))
{var inst_12781 = (state_12817[(7)]);var inst_12783 = (inst_12781 < cnt);var state_12817__$1 = state_12817;if(cljs.core.truth_(inst_12783))
{var statearr_12821_12850 = state_12817__$1;(statearr_12821_12850[(1)] = (6));
} else
{var statearr_12822_12851 = state_12817__$1;(statearr_12822_12851[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (15)))
{var inst_12813 = (state_12817[(2)]);var state_12817__$1 = state_12817;var statearr_12823_12852 = state_12817__$1;(statearr_12823_12852[(2)] = inst_12813);
(statearr_12823_12852[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (13)))
{var inst_12806 = cljs.core.async.close_BANG_.call(null,out);var state_12817__$1 = state_12817;var statearr_12824_12853 = state_12817__$1;(statearr_12824_12853[(2)] = inst_12806);
(statearr_12824_12853[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (6)))
{var state_12817__$1 = state_12817;var statearr_12825_12854 = state_12817__$1;(statearr_12825_12854[(2)] = null);
(statearr_12825_12854[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (3)))
{var inst_12815 = (state_12817[(2)]);var state_12817__$1 = state_12817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12817__$1,inst_12815);
} else
{if((state_val_12818 === (12)))
{var inst_12803 = (state_12817[(8)]);var inst_12803__$1 = (state_12817[(2)]);var inst_12804 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12803__$1);var state_12817__$1 = (function (){var statearr_12826 = state_12817;(statearr_12826[(8)] = inst_12803__$1);
return statearr_12826;
})();if(cljs.core.truth_(inst_12804))
{var statearr_12827_12855 = state_12817__$1;(statearr_12827_12855[(1)] = (13));
} else
{var statearr_12828_12856 = state_12817__$1;(statearr_12828_12856[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (2)))
{var inst_12780 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12781 = (0);var state_12817__$1 = (function (){var statearr_12829 = state_12817;(statearr_12829[(7)] = inst_12781);
(statearr_12829[(9)] = inst_12780);
return statearr_12829;
})();var statearr_12830_12857 = state_12817__$1;(statearr_12830_12857[(2)] = null);
(statearr_12830_12857[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (11)))
{var inst_12781 = (state_12817[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12817,(10),Object,null,(9));var inst_12790 = chs__$1.call(null,inst_12781);var inst_12791 = done.call(null,inst_12781);var inst_12792 = cljs.core.async.take_BANG_.call(null,inst_12790,inst_12791);var state_12817__$1 = state_12817;var statearr_12831_12858 = state_12817__$1;(statearr_12831_12858[(2)] = inst_12792);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12817__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (9)))
{var inst_12781 = (state_12817[(7)]);var inst_12794 = (state_12817[(2)]);var inst_12795 = (inst_12781 + (1));var inst_12781__$1 = inst_12795;var state_12817__$1 = (function (){var statearr_12832 = state_12817;(statearr_12832[(7)] = inst_12781__$1);
(statearr_12832[(10)] = inst_12794);
return statearr_12832;
})();var statearr_12833_12859 = state_12817__$1;(statearr_12833_12859[(2)] = null);
(statearr_12833_12859[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (5)))
{var inst_12801 = (state_12817[(2)]);var state_12817__$1 = (function (){var statearr_12834 = state_12817;(statearr_12834[(11)] = inst_12801);
return statearr_12834;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12817__$1,(12),dchan);
} else
{if((state_val_12818 === (14)))
{var inst_12803 = (state_12817[(8)]);var inst_12808 = cljs.core.apply.call(null,f,inst_12803);var state_12817__$1 = state_12817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12817__$1,(16),out,inst_12808);
} else
{if((state_val_12818 === (16)))
{var inst_12810 = (state_12817[(2)]);var state_12817__$1 = (function (){var statearr_12835 = state_12817;(statearr_12835[(12)] = inst_12810);
return statearr_12835;
})();var statearr_12836_12860 = state_12817__$1;(statearr_12836_12860[(2)] = null);
(statearr_12836_12860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (10)))
{var inst_12785 = (state_12817[(2)]);var inst_12786 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12817__$1 = (function (){var statearr_12837 = state_12817;(statearr_12837[(13)] = inst_12785);
return statearr_12837;
})();var statearr_12838_12861 = state_12817__$1;(statearr_12838_12861[(2)] = inst_12786);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12817__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12818 === (8)))
{var inst_12799 = (state_12817[(2)]);var state_12817__$1 = state_12817;var statearr_12839_12862 = state_12817__$1;(statearr_12839_12862[(2)] = inst_12799);
(statearr_12839_12862[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___12847,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6508__auto__,c__6523__auto___12847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_12843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12843[(0)] = state_machine__6509__auto__);
(statearr_12843[(1)] = (1));
return statearr_12843;
});
var state_machine__6509__auto____1 = (function (state_12817){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_12817);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e12844){if((e12844 instanceof Object))
{var ex__6512__auto__ = e12844;var statearr_12845_12863 = state_12817;(statearr_12845_12863[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12817);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12864 = state_12817;
state_12817 = G__12864;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_12817){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_12817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___12847,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6525__auto__ = (function (){var statearr_12846 = f__6524__auto__.call(null);(statearr_12846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___12847);
return statearr_12846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___12847,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6523__auto___12972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___12972,out){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___12972,out){
return (function (state_12948){var state_val_12949 = (state_12948[(1)]);if((state_val_12949 === (7)))
{var inst_12928 = (state_12948[(7)]);var inst_12927 = (state_12948[(8)]);var inst_12927__$1 = (state_12948[(2)]);var inst_12928__$1 = cljs.core.nth.call(null,inst_12927__$1,(0),null);var inst_12929 = cljs.core.nth.call(null,inst_12927__$1,(1),null);var inst_12930 = (inst_12928__$1 == null);var state_12948__$1 = (function (){var statearr_12950 = state_12948;(statearr_12950[(9)] = inst_12929);
(statearr_12950[(7)] = inst_12928__$1);
(statearr_12950[(8)] = inst_12927__$1);
return statearr_12950;
})();if(cljs.core.truth_(inst_12930))
{var statearr_12951_12973 = state_12948__$1;(statearr_12951_12973[(1)] = (8));
} else
{var statearr_12952_12974 = state_12948__$1;(statearr_12952_12974[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12949 === (1)))
{var inst_12919 = cljs.core.vec.call(null,chs);var inst_12920 = inst_12919;var state_12948__$1 = (function (){var statearr_12953 = state_12948;(statearr_12953[(10)] = inst_12920);
return statearr_12953;
})();var statearr_12954_12975 = state_12948__$1;(statearr_12954_12975[(2)] = null);
(statearr_12954_12975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12949 === (4)))
{var inst_12920 = (state_12948[(10)]);var state_12948__$1 = state_12948;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12948__$1,(7),inst_12920);
} else
{if((state_val_12949 === (6)))
{var inst_12944 = (state_12948[(2)]);var state_12948__$1 = state_12948;var statearr_12955_12976 = state_12948__$1;(statearr_12955_12976[(2)] = inst_12944);
(statearr_12955_12976[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12949 === (3)))
{var inst_12946 = (state_12948[(2)]);var state_12948__$1 = state_12948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12948__$1,inst_12946);
} else
{if((state_val_12949 === (2)))
{var inst_12920 = (state_12948[(10)]);var inst_12922 = cljs.core.count.call(null,inst_12920);var inst_12923 = (inst_12922 > (0));var state_12948__$1 = state_12948;if(cljs.core.truth_(inst_12923))
{var statearr_12957_12977 = state_12948__$1;(statearr_12957_12977[(1)] = (4));
} else
{var statearr_12958_12978 = state_12948__$1;(statearr_12958_12978[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12949 === (11)))
{var inst_12920 = (state_12948[(10)]);var inst_12937 = (state_12948[(2)]);var tmp12956 = inst_12920;var inst_12920__$1 = tmp12956;var state_12948__$1 = (function (){var statearr_12959 = state_12948;(statearr_12959[(11)] = inst_12937);
(statearr_12959[(10)] = inst_12920__$1);
return statearr_12959;
})();var statearr_12960_12979 = state_12948__$1;(statearr_12960_12979[(2)] = null);
(statearr_12960_12979[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12949 === (9)))
{var inst_12928 = (state_12948[(7)]);var state_12948__$1 = state_12948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12948__$1,(11),out,inst_12928);
} else
{if((state_val_12949 === (5)))
{var inst_12942 = cljs.core.async.close_BANG_.call(null,out);var state_12948__$1 = state_12948;var statearr_12961_12980 = state_12948__$1;(statearr_12961_12980[(2)] = inst_12942);
(statearr_12961_12980[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12949 === (10)))
{var inst_12940 = (state_12948[(2)]);var state_12948__$1 = state_12948;var statearr_12962_12981 = state_12948__$1;(statearr_12962_12981[(2)] = inst_12940);
(statearr_12962_12981[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12949 === (8)))
{var inst_12929 = (state_12948[(9)]);var inst_12928 = (state_12948[(7)]);var inst_12927 = (state_12948[(8)]);var inst_12920 = (state_12948[(10)]);var inst_12932 = (function (){var c = inst_12929;var v = inst_12928;var vec__12925 = inst_12927;var cs = inst_12920;return ((function (c,v,vec__12925,cs,inst_12929,inst_12928,inst_12927,inst_12920,state_val_12949,c__6523__auto___12972,out){
return (function (p1__12865_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12865_SHARP_);
});
;})(c,v,vec__12925,cs,inst_12929,inst_12928,inst_12927,inst_12920,state_val_12949,c__6523__auto___12972,out))
})();var inst_12933 = cljs.core.filterv.call(null,inst_12932,inst_12920);var inst_12920__$1 = inst_12933;var state_12948__$1 = (function (){var statearr_12963 = state_12948;(statearr_12963[(10)] = inst_12920__$1);
return statearr_12963;
})();var statearr_12964_12982 = state_12948__$1;(statearr_12964_12982[(2)] = null);
(statearr_12964_12982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___12972,out))
;return ((function (switch__6508__auto__,c__6523__auto___12972,out){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_12968 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12968[(0)] = state_machine__6509__auto__);
(statearr_12968[(1)] = (1));
return statearr_12968;
});
var state_machine__6509__auto____1 = (function (state_12948){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_12948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e12969){if((e12969 instanceof Object))
{var ex__6512__auto__ = e12969;var statearr_12970_12983 = state_12948;(statearr_12970_12983[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12984 = state_12948;
state_12948 = G__12984;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_12948){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_12948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___12972,out))
})();var state__6525__auto__ = (function (){var statearr_12971 = f__6524__auto__.call(null);(statearr_12971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___12972);
return statearr_12971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___12972,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6523__auto___13077 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___13077,out){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___13077,out){
return (function (state_13054){var state_val_13055 = (state_13054[(1)]);if((state_val_13055 === (7)))
{var inst_13036 = (state_13054[(7)]);var inst_13036__$1 = (state_13054[(2)]);var inst_13037 = (inst_13036__$1 == null);var inst_13038 = cljs.core.not.call(null,inst_13037);var state_13054__$1 = (function (){var statearr_13056 = state_13054;(statearr_13056[(7)] = inst_13036__$1);
return statearr_13056;
})();if(inst_13038)
{var statearr_13057_13078 = state_13054__$1;(statearr_13057_13078[(1)] = (8));
} else
{var statearr_13058_13079 = state_13054__$1;(statearr_13058_13079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (1)))
{var inst_13031 = (0);var state_13054__$1 = (function (){var statearr_13059 = state_13054;(statearr_13059[(8)] = inst_13031);
return statearr_13059;
})();var statearr_13060_13080 = state_13054__$1;(statearr_13060_13080[(2)] = null);
(statearr_13060_13080[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (4)))
{var state_13054__$1 = state_13054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13054__$1,(7),ch);
} else
{if((state_val_13055 === (6)))
{var inst_13049 = (state_13054[(2)]);var state_13054__$1 = state_13054;var statearr_13061_13081 = state_13054__$1;(statearr_13061_13081[(2)] = inst_13049);
(statearr_13061_13081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (3)))
{var inst_13051 = (state_13054[(2)]);var inst_13052 = cljs.core.async.close_BANG_.call(null,out);var state_13054__$1 = (function (){var statearr_13062 = state_13054;(statearr_13062[(9)] = inst_13051);
return statearr_13062;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13054__$1,inst_13052);
} else
{if((state_val_13055 === (2)))
{var inst_13031 = (state_13054[(8)]);var inst_13033 = (inst_13031 < n);var state_13054__$1 = state_13054;if(cljs.core.truth_(inst_13033))
{var statearr_13063_13082 = state_13054__$1;(statearr_13063_13082[(1)] = (4));
} else
{var statearr_13064_13083 = state_13054__$1;(statearr_13064_13083[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (11)))
{var inst_13031 = (state_13054[(8)]);var inst_13041 = (state_13054[(2)]);var inst_13042 = (inst_13031 + (1));var inst_13031__$1 = inst_13042;var state_13054__$1 = (function (){var statearr_13065 = state_13054;(statearr_13065[(10)] = inst_13041);
(statearr_13065[(8)] = inst_13031__$1);
return statearr_13065;
})();var statearr_13066_13084 = state_13054__$1;(statearr_13066_13084[(2)] = null);
(statearr_13066_13084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (9)))
{var state_13054__$1 = state_13054;var statearr_13067_13085 = state_13054__$1;(statearr_13067_13085[(2)] = null);
(statearr_13067_13085[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (5)))
{var state_13054__$1 = state_13054;var statearr_13068_13086 = state_13054__$1;(statearr_13068_13086[(2)] = null);
(statearr_13068_13086[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (10)))
{var inst_13046 = (state_13054[(2)]);var state_13054__$1 = state_13054;var statearr_13069_13087 = state_13054__$1;(statearr_13069_13087[(2)] = inst_13046);
(statearr_13069_13087[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13055 === (8)))
{var inst_13036 = (state_13054[(7)]);var state_13054__$1 = state_13054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13054__$1,(11),out,inst_13036);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___13077,out))
;return ((function (switch__6508__auto__,c__6523__auto___13077,out){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_13073 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13073[(0)] = state_machine__6509__auto__);
(statearr_13073[(1)] = (1));
return statearr_13073;
});
var state_machine__6509__auto____1 = (function (state_13054){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_13054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e13074){if((e13074 instanceof Object))
{var ex__6512__auto__ = e13074;var statearr_13075_13088 = state_13054;(statearr_13075_13088[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13089 = state_13054;
state_13054 = G__13089;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_13054){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_13054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___13077,out))
})();var state__6525__auto__ = (function (){var statearr_13076 = f__6524__auto__.call(null);(statearr_13076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___13077);
return statearr_13076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___13077,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6523__auto___13186 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___13186,out){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___13186,out){
return (function (state_13161){var state_val_13162 = (state_13161[(1)]);if((state_val_13162 === (7)))
{var inst_13156 = (state_13161[(2)]);var state_13161__$1 = state_13161;var statearr_13163_13187 = state_13161__$1;(statearr_13163_13187[(2)] = inst_13156);
(statearr_13163_13187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13162 === (1)))
{var inst_13138 = null;var state_13161__$1 = (function (){var statearr_13164 = state_13161;(statearr_13164[(7)] = inst_13138);
return statearr_13164;
})();var statearr_13165_13188 = state_13161__$1;(statearr_13165_13188[(2)] = null);
(statearr_13165_13188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13162 === (4)))
{var inst_13141 = (state_13161[(8)]);var inst_13141__$1 = (state_13161[(2)]);var inst_13142 = (inst_13141__$1 == null);var inst_13143 = cljs.core.not.call(null,inst_13142);var state_13161__$1 = (function (){var statearr_13166 = state_13161;(statearr_13166[(8)] = inst_13141__$1);
return statearr_13166;
})();if(inst_13143)
{var statearr_13167_13189 = state_13161__$1;(statearr_13167_13189[(1)] = (5));
} else
{var statearr_13168_13190 = state_13161__$1;(statearr_13168_13190[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13162 === (6)))
{var state_13161__$1 = state_13161;var statearr_13169_13191 = state_13161__$1;(statearr_13169_13191[(2)] = null);
(statearr_13169_13191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13162 === (3)))
{var inst_13158 = (state_13161[(2)]);var inst_13159 = cljs.core.async.close_BANG_.call(null,out);var state_13161__$1 = (function (){var statearr_13170 = state_13161;(statearr_13170[(9)] = inst_13158);
return statearr_13170;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13161__$1,inst_13159);
} else
{if((state_val_13162 === (2)))
{var state_13161__$1 = state_13161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13161__$1,(4),ch);
} else
{if((state_val_13162 === (11)))
{var inst_13141 = (state_13161[(8)]);var inst_13150 = (state_13161[(2)]);var inst_13138 = inst_13141;var state_13161__$1 = (function (){var statearr_13171 = state_13161;(statearr_13171[(7)] = inst_13138);
(statearr_13171[(10)] = inst_13150);
return statearr_13171;
})();var statearr_13172_13192 = state_13161__$1;(statearr_13172_13192[(2)] = null);
(statearr_13172_13192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13162 === (9)))
{var inst_13141 = (state_13161[(8)]);var state_13161__$1 = state_13161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13161__$1,(11),out,inst_13141);
} else
{if((state_val_13162 === (5)))
{var inst_13138 = (state_13161[(7)]);var inst_13141 = (state_13161[(8)]);var inst_13145 = cljs.core._EQ_.call(null,inst_13141,inst_13138);var state_13161__$1 = state_13161;if(inst_13145)
{var statearr_13174_13193 = state_13161__$1;(statearr_13174_13193[(1)] = (8));
} else
{var statearr_13175_13194 = state_13161__$1;(statearr_13175_13194[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13162 === (10)))
{var inst_13153 = (state_13161[(2)]);var state_13161__$1 = state_13161;var statearr_13176_13195 = state_13161__$1;(statearr_13176_13195[(2)] = inst_13153);
(statearr_13176_13195[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13162 === (8)))
{var inst_13138 = (state_13161[(7)]);var tmp13173 = inst_13138;var inst_13138__$1 = tmp13173;var state_13161__$1 = (function (){var statearr_13177 = state_13161;(statearr_13177[(7)] = inst_13138__$1);
return statearr_13177;
})();var statearr_13178_13196 = state_13161__$1;(statearr_13178_13196[(2)] = null);
(statearr_13178_13196[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___13186,out))
;return ((function (switch__6508__auto__,c__6523__auto___13186,out){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_13182 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13182[(0)] = state_machine__6509__auto__);
(statearr_13182[(1)] = (1));
return statearr_13182;
});
var state_machine__6509__auto____1 = (function (state_13161){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_13161);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e13183){if((e13183 instanceof Object))
{var ex__6512__auto__ = e13183;var statearr_13184_13197 = state_13161;(statearr_13184_13197[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13198 = state_13161;
state_13161 = G__13198;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_13161){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_13161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___13186,out))
})();var state__6525__auto__ = (function (){var statearr_13185 = f__6524__auto__.call(null);(statearr_13185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___13186);
return statearr_13185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___13186,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6523__auto___13333 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___13333,out){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___13333,out){
return (function (state_13303){var state_val_13304 = (state_13303[(1)]);if((state_val_13304 === (7)))
{var inst_13299 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13305_13334 = state_13303__$1;(statearr_13305_13334[(2)] = inst_13299);
(statearr_13305_13334[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (1)))
{var inst_13266 = (new Array(n));var inst_13267 = inst_13266;var inst_13268 = (0);var state_13303__$1 = (function (){var statearr_13306 = state_13303;(statearr_13306[(7)] = inst_13267);
(statearr_13306[(8)] = inst_13268);
return statearr_13306;
})();var statearr_13307_13335 = state_13303__$1;(statearr_13307_13335[(2)] = null);
(statearr_13307_13335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (4)))
{var inst_13271 = (state_13303[(9)]);var inst_13271__$1 = (state_13303[(2)]);var inst_13272 = (inst_13271__$1 == null);var inst_13273 = cljs.core.not.call(null,inst_13272);var state_13303__$1 = (function (){var statearr_13308 = state_13303;(statearr_13308[(9)] = inst_13271__$1);
return statearr_13308;
})();if(inst_13273)
{var statearr_13309_13336 = state_13303__$1;(statearr_13309_13336[(1)] = (5));
} else
{var statearr_13310_13337 = state_13303__$1;(statearr_13310_13337[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (15)))
{var inst_13293 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13311_13338 = state_13303__$1;(statearr_13311_13338[(2)] = inst_13293);
(statearr_13311_13338[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (13)))
{var state_13303__$1 = state_13303;var statearr_13312_13339 = state_13303__$1;(statearr_13312_13339[(2)] = null);
(statearr_13312_13339[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (6)))
{var inst_13268 = (state_13303[(8)]);var inst_13289 = (inst_13268 > (0));var state_13303__$1 = state_13303;if(cljs.core.truth_(inst_13289))
{var statearr_13313_13340 = state_13303__$1;(statearr_13313_13340[(1)] = (12));
} else
{var statearr_13314_13341 = state_13303__$1;(statearr_13314_13341[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (3)))
{var inst_13301 = (state_13303[(2)]);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13303__$1,inst_13301);
} else
{if((state_val_13304 === (12)))
{var inst_13267 = (state_13303[(7)]);var inst_13291 = cljs.core.vec.call(null,inst_13267);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13303__$1,(15),out,inst_13291);
} else
{if((state_val_13304 === (2)))
{var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13303__$1,(4),ch);
} else
{if((state_val_13304 === (11)))
{var inst_13283 = (state_13303[(2)]);var inst_13284 = (new Array(n));var inst_13267 = inst_13284;var inst_13268 = (0);var state_13303__$1 = (function (){var statearr_13315 = state_13303;(statearr_13315[(7)] = inst_13267);
(statearr_13315[(10)] = inst_13283);
(statearr_13315[(8)] = inst_13268);
return statearr_13315;
})();var statearr_13316_13342 = state_13303__$1;(statearr_13316_13342[(2)] = null);
(statearr_13316_13342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (9)))
{var inst_13267 = (state_13303[(7)]);var inst_13281 = cljs.core.vec.call(null,inst_13267);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13303__$1,(11),out,inst_13281);
} else
{if((state_val_13304 === (5)))
{var inst_13276 = (state_13303[(11)]);var inst_13267 = (state_13303[(7)]);var inst_13271 = (state_13303[(9)]);var inst_13268 = (state_13303[(8)]);var inst_13275 = (inst_13267[inst_13268] = inst_13271);var inst_13276__$1 = (inst_13268 + (1));var inst_13277 = (inst_13276__$1 < n);var state_13303__$1 = (function (){var statearr_13317 = state_13303;(statearr_13317[(11)] = inst_13276__$1);
(statearr_13317[(12)] = inst_13275);
return statearr_13317;
})();if(cljs.core.truth_(inst_13277))
{var statearr_13318_13343 = state_13303__$1;(statearr_13318_13343[(1)] = (8));
} else
{var statearr_13319_13344 = state_13303__$1;(statearr_13319_13344[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (14)))
{var inst_13296 = (state_13303[(2)]);var inst_13297 = cljs.core.async.close_BANG_.call(null,out);var state_13303__$1 = (function (){var statearr_13321 = state_13303;(statearr_13321[(13)] = inst_13296);
return statearr_13321;
})();var statearr_13322_13345 = state_13303__$1;(statearr_13322_13345[(2)] = inst_13297);
(statearr_13322_13345[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (10)))
{var inst_13287 = (state_13303[(2)]);var state_13303__$1 = state_13303;var statearr_13323_13346 = state_13303__$1;(statearr_13323_13346[(2)] = inst_13287);
(statearr_13323_13346[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13304 === (8)))
{var inst_13276 = (state_13303[(11)]);var inst_13267 = (state_13303[(7)]);var tmp13320 = inst_13267;var inst_13267__$1 = tmp13320;var inst_13268 = inst_13276;var state_13303__$1 = (function (){var statearr_13324 = state_13303;(statearr_13324[(7)] = inst_13267__$1);
(statearr_13324[(8)] = inst_13268);
return statearr_13324;
})();var statearr_13325_13347 = state_13303__$1;(statearr_13325_13347[(2)] = null);
(statearr_13325_13347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___13333,out))
;return ((function (switch__6508__auto__,c__6523__auto___13333,out){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_13329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13329[(0)] = state_machine__6509__auto__);
(statearr_13329[(1)] = (1));
return statearr_13329;
});
var state_machine__6509__auto____1 = (function (state_13303){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_13303);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e13330){if((e13330 instanceof Object))
{var ex__6512__auto__ = e13330;var statearr_13331_13348 = state_13303;(statearr_13331_13348[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13349 = state_13303;
state_13303 = G__13349;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_13303){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_13303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___13333,out))
})();var state__6525__auto__ = (function (){var statearr_13332 = f__6524__auto__.call(null);(statearr_13332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___13333);
return statearr_13332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___13333,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6523__auto___13492 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto___13492,out){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto___13492,out){
return (function (state_13462){var state_val_13463 = (state_13462[(1)]);if((state_val_13463 === (7)))
{var inst_13458 = (state_13462[(2)]);var state_13462__$1 = state_13462;var statearr_13464_13493 = state_13462__$1;(statearr_13464_13493[(2)] = inst_13458);
(statearr_13464_13493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (1)))
{var inst_13421 = [];var inst_13422 = inst_13421;var inst_13423 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13462__$1 = (function (){var statearr_13465 = state_13462;(statearr_13465[(7)] = inst_13423);
(statearr_13465[(8)] = inst_13422);
return statearr_13465;
})();var statearr_13466_13494 = state_13462__$1;(statearr_13466_13494[(2)] = null);
(statearr_13466_13494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (4)))
{var inst_13426 = (state_13462[(9)]);var inst_13426__$1 = (state_13462[(2)]);var inst_13427 = (inst_13426__$1 == null);var inst_13428 = cljs.core.not.call(null,inst_13427);var state_13462__$1 = (function (){var statearr_13467 = state_13462;(statearr_13467[(9)] = inst_13426__$1);
return statearr_13467;
})();if(inst_13428)
{var statearr_13468_13495 = state_13462__$1;(statearr_13468_13495[(1)] = (5));
} else
{var statearr_13469_13496 = state_13462__$1;(statearr_13469_13496[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (15)))
{var inst_13452 = (state_13462[(2)]);var state_13462__$1 = state_13462;var statearr_13470_13497 = state_13462__$1;(statearr_13470_13497[(2)] = inst_13452);
(statearr_13470_13497[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (13)))
{var state_13462__$1 = state_13462;var statearr_13471_13498 = state_13462__$1;(statearr_13471_13498[(2)] = null);
(statearr_13471_13498[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (6)))
{var inst_13422 = (state_13462[(8)]);var inst_13447 = inst_13422.length;var inst_13448 = (inst_13447 > (0));var state_13462__$1 = state_13462;if(cljs.core.truth_(inst_13448))
{var statearr_13472_13499 = state_13462__$1;(statearr_13472_13499[(1)] = (12));
} else
{var statearr_13473_13500 = state_13462__$1;(statearr_13473_13500[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (3)))
{var inst_13460 = (state_13462[(2)]);var state_13462__$1 = state_13462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13462__$1,inst_13460);
} else
{if((state_val_13463 === (12)))
{var inst_13422 = (state_13462[(8)]);var inst_13450 = cljs.core.vec.call(null,inst_13422);var state_13462__$1 = state_13462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13462__$1,(15),out,inst_13450);
} else
{if((state_val_13463 === (2)))
{var state_13462__$1 = state_13462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13462__$1,(4),ch);
} else
{if((state_val_13463 === (11)))
{var inst_13426 = (state_13462[(9)]);var inst_13430 = (state_13462[(10)]);var inst_13440 = (state_13462[(2)]);var inst_13441 = [];var inst_13442 = inst_13441.push(inst_13426);var inst_13422 = inst_13441;var inst_13423 = inst_13430;var state_13462__$1 = (function (){var statearr_13474 = state_13462;(statearr_13474[(7)] = inst_13423);
(statearr_13474[(11)] = inst_13440);
(statearr_13474[(12)] = inst_13442);
(statearr_13474[(8)] = inst_13422);
return statearr_13474;
})();var statearr_13475_13501 = state_13462__$1;(statearr_13475_13501[(2)] = null);
(statearr_13475_13501[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (9)))
{var inst_13422 = (state_13462[(8)]);var inst_13438 = cljs.core.vec.call(null,inst_13422);var state_13462__$1 = state_13462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13462__$1,(11),out,inst_13438);
} else
{if((state_val_13463 === (5)))
{var inst_13423 = (state_13462[(7)]);var inst_13426 = (state_13462[(9)]);var inst_13430 = (state_13462[(10)]);var inst_13430__$1 = f.call(null,inst_13426);var inst_13431 = cljs.core._EQ_.call(null,inst_13430__$1,inst_13423);var inst_13432 = cljs.core.keyword_identical_QMARK_.call(null,inst_13423,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13433 = (inst_13431) || (inst_13432);var state_13462__$1 = (function (){var statearr_13476 = state_13462;(statearr_13476[(10)] = inst_13430__$1);
return statearr_13476;
})();if(cljs.core.truth_(inst_13433))
{var statearr_13477_13502 = state_13462__$1;(statearr_13477_13502[(1)] = (8));
} else
{var statearr_13478_13503 = state_13462__$1;(statearr_13478_13503[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (14)))
{var inst_13455 = (state_13462[(2)]);var inst_13456 = cljs.core.async.close_BANG_.call(null,out);var state_13462__$1 = (function (){var statearr_13480 = state_13462;(statearr_13480[(13)] = inst_13455);
return statearr_13480;
})();var statearr_13481_13504 = state_13462__$1;(statearr_13481_13504[(2)] = inst_13456);
(statearr_13481_13504[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (10)))
{var inst_13445 = (state_13462[(2)]);var state_13462__$1 = state_13462;var statearr_13482_13505 = state_13462__$1;(statearr_13482_13505[(2)] = inst_13445);
(statearr_13482_13505[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13463 === (8)))
{var inst_13426 = (state_13462[(9)]);var inst_13430 = (state_13462[(10)]);var inst_13422 = (state_13462[(8)]);var inst_13435 = inst_13422.push(inst_13426);var tmp13479 = inst_13422;var inst_13422__$1 = tmp13479;var inst_13423 = inst_13430;var state_13462__$1 = (function (){var statearr_13483 = state_13462;(statearr_13483[(7)] = inst_13423);
(statearr_13483[(14)] = inst_13435);
(statearr_13483[(8)] = inst_13422__$1);
return statearr_13483;
})();var statearr_13484_13506 = state_13462__$1;(statearr_13484_13506[(2)] = null);
(statearr_13484_13506[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6523__auto___13492,out))
;return ((function (switch__6508__auto__,c__6523__auto___13492,out){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_13488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13488[(0)] = state_machine__6509__auto__);
(statearr_13488[(1)] = (1));
return statearr_13488;
});
var state_machine__6509__auto____1 = (function (state_13462){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_13462);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e13489){if((e13489 instanceof Object))
{var ex__6512__auto__ = e13489;var statearr_13490_13507 = state_13462;(statearr_13490_13507[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13508 = state_13462;
state_13462 = G__13508;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_13462){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_13462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto___13492,out))
})();var state__6525__auto__ = (function (){var statearr_13491 = f__6524__auto__.call(null);(statearr_13491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto___13492);
return statearr_13491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto___13492,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map