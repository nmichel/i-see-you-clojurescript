// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async12140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12140 = (function (fn_handler,f,meta12141){
this.fn_handler = fn_handler;
this.f = f;
this.meta12141 = meta12141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12142,meta12141__$1){
var self__ = this;
var _12142__$1 = this;
return (new cljs.core.async.t_cljs$core$async12140(self__.fn_handler,self__.f,meta12141__$1));
});

cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12142){
var self__ = this;
var _12142__$1 = this;
return self__.meta12141;
});

cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta12141","meta12141",-465175121,null)], null);
});

cljs.core.async.t_cljs$core$async12140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12140";

cljs.core.async.t_cljs$core$async12140.cljs$lang$ctorPrWriter = (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async12140");
});

cljs.core.async.__GT_t_cljs$core$async12140 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async12140(fn_handler__$1,f__$1,meta12141){
return (new cljs.core.async.t_cljs$core$async12140(fn_handler__$1,f__$1,meta12141));
});

}

return (new cljs.core.async.t_cljs$core$async12140(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12145 = [];
var len__5627__auto___12148 = arguments.length;
var i__5628__auto___12149 = (0);
while(true){
if((i__5628__auto___12149 < len__5627__auto___12148)){
args12145.push((arguments[i__5628__auto___12149]));

var G__12150 = (i__5628__auto___12149 + (1));
i__5628__auto___12149 = G__12150;
continue;
} else {
}
break;
}

var G__12147 = args12145.length;
switch (G__12147) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12145.length)].join('')));

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
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12152 = [];
var len__5627__auto___12155 = arguments.length;
var i__5628__auto___12156 = (0);
while(true){
if((i__5628__auto___12156 < len__5627__auto___12155)){
args12152.push((arguments[i__5628__auto___12156]));

var G__12157 = (i__5628__auto___12156 + (1));
i__5628__auto___12156 = G__12157;
continue;
} else {
}
break;
}

var G__12154 = args12152.length;
switch (G__12154) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12152.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12159 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12159);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12159,ret){
return (function (){
return fn1.call(null,val_12159);
});})(val_12159,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12160 = [];
var len__5627__auto___12163 = arguments.length;
var i__5628__auto___12164 = (0);
while(true){
if((i__5628__auto___12164 < len__5627__auto___12163)){
args12160.push((arguments[i__5628__auto___12164]));

var G__12165 = (i__5628__auto___12164 + (1));
i__5628__auto___12164 = G__12165;
continue;
} else {
}
break;
}

var G__12162 = args12160.length;
switch (G__12162) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12160.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__5472__auto___12167 = n;
var x_12168 = (0);
while(true){
if((x_12168 < n__5472__auto___12167)){
(a[x_12168] = (0));

var G__12169 = (x_12168 + (1));
x_12168 = G__12169;
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

var G__12170 = (i + (1));
i = G__12170;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12174 = (function (alt_flag,flag,meta12175){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12175 = meta12175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12176,meta12175__$1){
var self__ = this;
var _12176__$1 = this;
return (new cljs.core.async.t_cljs$core$async12174(self__.alt_flag,self__.flag,meta12175__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12176){
var self__ = this;
var _12176__$1 = this;
return self__.meta12175;
});})(flag))
;

cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12174.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12175","meta12175",1259387442,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12174";

cljs.core.async.t_cljs$core$async12174.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async12174");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12174 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12174(alt_flag__$1,flag__$1,meta12175){
return (new cljs.core.async.t_cljs$core$async12174(alt_flag__$1,flag__$1,meta12175));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12174(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12180 = (function (alt_handler,flag,cb,meta12181){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12181 = meta12181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12182,meta12181__$1){
var self__ = this;
var _12182__$1 = this;
return (new cljs.core.async.t_cljs$core$async12180(self__.alt_handler,self__.flag,self__.cb,meta12181__$1));
});

cljs.core.async.t_cljs$core$async12180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12182){
var self__ = this;
var _12182__$1 = this;
return self__.meta12181;
});

cljs.core.async.t_cljs$core$async12180.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12181","meta12181",-1754262649,null)], null);
});

cljs.core.async.t_cljs$core$async12180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12180";

cljs.core.async.t_cljs$core$async12180.cljs$lang$ctorPrWriter = (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async12180");
});

cljs.core.async.__GT_t_cljs$core$async12180 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12180(alt_handler__$1,flag__$1,cb__$1,meta12181){
return (new cljs.core.async.t_cljs$core$async12180(alt_handler__$1,flag__$1,cb__$1,meta12181));
});

}

return (new cljs.core.async.t_cljs$core$async12180(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12183_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12183_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12184_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12184_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4569__auto__ = wport;
if(cljs.core.truth_(or__4569__auto__)){
return or__4569__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12185 = (i + (1));
i = G__12185;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4569__auto__ = ret;
if(cljs.core.truth_(or__4569__auto__)){
return or__4569__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4557__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4557__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4557__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___12191 = arguments.length;
var i__5628__auto___12192 = (0);
while(true){
if((i__5628__auto___12192 < len__5627__auto___12191)){
args__5634__auto__.push((arguments[i__5628__auto___12192]));

var G__12193 = (i__5628__auto___12192 + (1));
i__5628__auto___12192 = G__12193;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((1) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5635__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12188){
var map__12189 = p__12188;
var map__12189__$1 = ((((!((map__12189 == null)))?((((map__12189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12189):map__12189);
var opts = map__12189__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12186){
var G__12187 = cljs.core.first.call(null,seq12186);
var seq12186__$1 = cljs.core.next.call(null,seq12186);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12187,seq12186__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12194 = [];
var len__5627__auto___12244 = arguments.length;
var i__5628__auto___12245 = (0);
while(true){
if((i__5628__auto___12245 < len__5627__auto___12244)){
args12194.push((arguments[i__5628__auto___12245]));

var G__12246 = (i__5628__auto___12245 + (1));
i__5628__auto___12245 = G__12246;
continue;
} else {
}
break;
}

var G__12196 = args12194.length;
switch (G__12196) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12194.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8375__auto___12248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___12248){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___12248){
return (function (state_12220){
var state_val_12221 = (state_12220[(1)]);
if((state_val_12221 === (7))){
var inst_12216 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12222_12249 = state_12220__$1;
(statearr_12222_12249[(2)] = inst_12216);

(statearr_12222_12249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (1))){
var state_12220__$1 = state_12220;
var statearr_12223_12250 = state_12220__$1;
(statearr_12223_12250[(2)] = null);

(statearr_12223_12250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (4))){
var inst_12199 = (state_12220[(7)]);
var inst_12199__$1 = (state_12220[(2)]);
var inst_12200 = (inst_12199__$1 == null);
var state_12220__$1 = (function (){var statearr_12224 = state_12220;
(statearr_12224[(7)] = inst_12199__$1);

return statearr_12224;
})();
if(cljs.core.truth_(inst_12200)){
var statearr_12225_12251 = state_12220__$1;
(statearr_12225_12251[(1)] = (5));

} else {
var statearr_12226_12252 = state_12220__$1;
(statearr_12226_12252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (13))){
var state_12220__$1 = state_12220;
var statearr_12227_12253 = state_12220__$1;
(statearr_12227_12253[(2)] = null);

(statearr_12227_12253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (6))){
var inst_12199 = (state_12220[(7)]);
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12220__$1,(11),to,inst_12199);
} else {
if((state_val_12221 === (3))){
var inst_12218 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12220__$1,inst_12218);
} else {
if((state_val_12221 === (12))){
var state_12220__$1 = state_12220;
var statearr_12228_12254 = state_12220__$1;
(statearr_12228_12254[(2)] = null);

(statearr_12228_12254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (2))){
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12220__$1,(4),from);
} else {
if((state_val_12221 === (11))){
var inst_12209 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
if(cljs.core.truth_(inst_12209)){
var statearr_12229_12255 = state_12220__$1;
(statearr_12229_12255[(1)] = (12));

} else {
var statearr_12230_12256 = state_12220__$1;
(statearr_12230_12256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (9))){
var state_12220__$1 = state_12220;
var statearr_12231_12257 = state_12220__$1;
(statearr_12231_12257[(2)] = null);

(statearr_12231_12257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (5))){
var state_12220__$1 = state_12220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12232_12258 = state_12220__$1;
(statearr_12232_12258[(1)] = (8));

} else {
var statearr_12233_12259 = state_12220__$1;
(statearr_12233_12259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (14))){
var inst_12214 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12234_12260 = state_12220__$1;
(statearr_12234_12260[(2)] = inst_12214);

(statearr_12234_12260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (10))){
var inst_12206 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12235_12261 = state_12220__$1;
(statearr_12235_12261[(2)] = inst_12206);

(statearr_12235_12261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12221 === (8))){
var inst_12203 = cljs.core.async.close_BANG_.call(null,to);
var state_12220__$1 = state_12220;
var statearr_12236_12262 = state_12220__$1;
(statearr_12236_12262[(2)] = inst_12203);

(statearr_12236_12262[(1)] = (10));


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
});})(c__8375__auto___12248))
;
return ((function (switch__8310__auto__,c__8375__auto___12248){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_12240 = [null,null,null,null,null,null,null,null];
(statearr_12240[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_12240[(1)] = (1));

return statearr_12240;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_12220){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12241){if((e12241 instanceof Object)){
var ex__8314__auto__ = e12241;
var statearr_12242_12263 = state_12220;
(statearr_12242_12263[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12264 = state_12220;
state_12220 = G__12264;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_12220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_12220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___12248))
})();
var state__8377__auto__ = (function (){var statearr_12243 = f__8376__auto__.call(null);
(statearr_12243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___12248);

return statearr_12243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___12248))
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
return (function (p__12448){
var vec__12449 = p__12448;
var v = cljs.core.nth.call(null,vec__12449,(0),null);
var p = cljs.core.nth.call(null,vec__12449,(1),null);
var job = vec__12449;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8375__auto___12631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___12631,res,vec__12449,v,p,job,jobs,results){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___12631,res,vec__12449,v,p,job,jobs,results){
return (function (state_12454){
var state_val_12455 = (state_12454[(1)]);
if((state_val_12455 === (1))){
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12454__$1,(2),res,v);
} else {
if((state_val_12455 === (2))){
var inst_12451 = (state_12454[(2)]);
var inst_12452 = cljs.core.async.close_BANG_.call(null,res);
var state_12454__$1 = (function (){var statearr_12456 = state_12454;
(statearr_12456[(7)] = inst_12451);

return statearr_12456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12454__$1,inst_12452);
} else {
return null;
}
}
});})(c__8375__auto___12631,res,vec__12449,v,p,job,jobs,results))
;
return ((function (switch__8310__auto__,c__8375__auto___12631,res,vec__12449,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0 = (function (){
var statearr_12460 = [null,null,null,null,null,null,null,null];
(statearr_12460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__);

(statearr_12460[(1)] = (1));

return statearr_12460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1 = (function (state_12454){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12461){if((e12461 instanceof Object)){
var ex__8314__auto__ = e12461;
var statearr_12462_12632 = state_12454;
(statearr_12462_12632[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12633 = state_12454;
state_12454 = G__12633;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = function(state_12454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1.call(this,state_12454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___12631,res,vec__12449,v,p,job,jobs,results))
})();
var state__8377__auto__ = (function (){var statearr_12463 = f__8376__auto__.call(null);
(statearr_12463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___12631);

return statearr_12463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___12631,res,vec__12449,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12464){
var vec__12465 = p__12464;
var v = cljs.core.nth.call(null,vec__12465,(0),null);
var p = cljs.core.nth.call(null,vec__12465,(1),null);
var job = vec__12465;
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
var n__5472__auto___12634 = n;
var __12635 = (0);
while(true){
if((__12635 < n__5472__auto___12634)){
var G__12466_12636 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12466_12636) {
case "compute":
var c__8375__auto___12638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12635,c__8375__auto___12638,G__12466_12636,n__5472__auto___12634,jobs,results,process,async){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (__12635,c__8375__auto___12638,G__12466_12636,n__5472__auto___12634,jobs,results,process,async){
return (function (state_12479){
var state_val_12480 = (state_12479[(1)]);
if((state_val_12480 === (1))){
var state_12479__$1 = state_12479;
var statearr_12481_12639 = state_12479__$1;
(statearr_12481_12639[(2)] = null);

(statearr_12481_12639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (2))){
var state_12479__$1 = state_12479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12479__$1,(4),jobs);
} else {
if((state_val_12480 === (3))){
var inst_12477 = (state_12479[(2)]);
var state_12479__$1 = state_12479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12479__$1,inst_12477);
} else {
if((state_val_12480 === (4))){
var inst_12469 = (state_12479[(2)]);
var inst_12470 = process.call(null,inst_12469);
var state_12479__$1 = state_12479;
if(cljs.core.truth_(inst_12470)){
var statearr_12482_12640 = state_12479__$1;
(statearr_12482_12640[(1)] = (5));

} else {
var statearr_12483_12641 = state_12479__$1;
(statearr_12483_12641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (5))){
var state_12479__$1 = state_12479;
var statearr_12484_12642 = state_12479__$1;
(statearr_12484_12642[(2)] = null);

(statearr_12484_12642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (6))){
var state_12479__$1 = state_12479;
var statearr_12485_12643 = state_12479__$1;
(statearr_12485_12643[(2)] = null);

(statearr_12485_12643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (7))){
var inst_12475 = (state_12479[(2)]);
var state_12479__$1 = state_12479;
var statearr_12486_12644 = state_12479__$1;
(statearr_12486_12644[(2)] = inst_12475);

(statearr_12486_12644[(1)] = (3));


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
});})(__12635,c__8375__auto___12638,G__12466_12636,n__5472__auto___12634,jobs,results,process,async))
;
return ((function (__12635,switch__8310__auto__,c__8375__auto___12638,G__12466_12636,n__5472__auto___12634,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0 = (function (){
var statearr_12490 = [null,null,null,null,null,null,null];
(statearr_12490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__);

(statearr_12490[(1)] = (1));

return statearr_12490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1 = (function (state_12479){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12491){if((e12491 instanceof Object)){
var ex__8314__auto__ = e12491;
var statearr_12492_12645 = state_12479;
(statearr_12492_12645[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12646 = state_12479;
state_12479 = G__12646;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = function(state_12479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1.call(this,state_12479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__;
})()
;})(__12635,switch__8310__auto__,c__8375__auto___12638,G__12466_12636,n__5472__auto___12634,jobs,results,process,async))
})();
var state__8377__auto__ = (function (){var statearr_12493 = f__8376__auto__.call(null);
(statearr_12493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___12638);

return statearr_12493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(__12635,c__8375__auto___12638,G__12466_12636,n__5472__auto___12634,jobs,results,process,async))
);


break;
case "async":
var c__8375__auto___12647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12635,c__8375__auto___12647,G__12466_12636,n__5472__auto___12634,jobs,results,process,async){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (__12635,c__8375__auto___12647,G__12466_12636,n__5472__auto___12634,jobs,results,process,async){
return (function (state_12506){
var state_val_12507 = (state_12506[(1)]);
if((state_val_12507 === (1))){
var state_12506__$1 = state_12506;
var statearr_12508_12648 = state_12506__$1;
(statearr_12508_12648[(2)] = null);

(statearr_12508_12648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (2))){
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12506__$1,(4),jobs);
} else {
if((state_val_12507 === (3))){
var inst_12504 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12506__$1,inst_12504);
} else {
if((state_val_12507 === (4))){
var inst_12496 = (state_12506[(2)]);
var inst_12497 = async.call(null,inst_12496);
var state_12506__$1 = state_12506;
if(cljs.core.truth_(inst_12497)){
var statearr_12509_12649 = state_12506__$1;
(statearr_12509_12649[(1)] = (5));

} else {
var statearr_12510_12650 = state_12506__$1;
(statearr_12510_12650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (5))){
var state_12506__$1 = state_12506;
var statearr_12511_12651 = state_12506__$1;
(statearr_12511_12651[(2)] = null);

(statearr_12511_12651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (6))){
var state_12506__$1 = state_12506;
var statearr_12512_12652 = state_12506__$1;
(statearr_12512_12652[(2)] = null);

(statearr_12512_12652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (7))){
var inst_12502 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12513_12653 = state_12506__$1;
(statearr_12513_12653[(2)] = inst_12502);

(statearr_12513_12653[(1)] = (3));


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
});})(__12635,c__8375__auto___12647,G__12466_12636,n__5472__auto___12634,jobs,results,process,async))
;
return ((function (__12635,switch__8310__auto__,c__8375__auto___12647,G__12466_12636,n__5472__auto___12634,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0 = (function (){
var statearr_12517 = [null,null,null,null,null,null,null];
(statearr_12517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__);

(statearr_12517[(1)] = (1));

return statearr_12517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1 = (function (state_12506){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12518){if((e12518 instanceof Object)){
var ex__8314__auto__ = e12518;
var statearr_12519_12654 = state_12506;
(statearr_12519_12654[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12655 = state_12506;
state_12506 = G__12655;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = function(state_12506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1.call(this,state_12506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__;
})()
;})(__12635,switch__8310__auto__,c__8375__auto___12647,G__12466_12636,n__5472__auto___12634,jobs,results,process,async))
})();
var state__8377__auto__ = (function (){var statearr_12520 = f__8376__auto__.call(null);
(statearr_12520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___12647);

return statearr_12520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(__12635,c__8375__auto___12647,G__12466_12636,n__5472__auto___12634,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12656 = (__12635 + (1));
__12635 = G__12656;
continue;
} else {
}
break;
}

var c__8375__auto___12657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___12657,jobs,results,process,async){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___12657,jobs,results,process,async){
return (function (state_12542){
var state_val_12543 = (state_12542[(1)]);
if((state_val_12543 === (1))){
var state_12542__$1 = state_12542;
var statearr_12544_12658 = state_12542__$1;
(statearr_12544_12658[(2)] = null);

(statearr_12544_12658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (2))){
var state_12542__$1 = state_12542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12542__$1,(4),from);
} else {
if((state_val_12543 === (3))){
var inst_12540 = (state_12542[(2)]);
var state_12542__$1 = state_12542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12542__$1,inst_12540);
} else {
if((state_val_12543 === (4))){
var inst_12523 = (state_12542[(7)]);
var inst_12523__$1 = (state_12542[(2)]);
var inst_12524 = (inst_12523__$1 == null);
var state_12542__$1 = (function (){var statearr_12545 = state_12542;
(statearr_12545[(7)] = inst_12523__$1);

return statearr_12545;
})();
if(cljs.core.truth_(inst_12524)){
var statearr_12546_12659 = state_12542__$1;
(statearr_12546_12659[(1)] = (5));

} else {
var statearr_12547_12660 = state_12542__$1;
(statearr_12547_12660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (5))){
var inst_12526 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12542__$1 = state_12542;
var statearr_12548_12661 = state_12542__$1;
(statearr_12548_12661[(2)] = inst_12526);

(statearr_12548_12661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (6))){
var inst_12528 = (state_12542[(8)]);
var inst_12523 = (state_12542[(7)]);
var inst_12528__$1 = cljs.core.async.chan.call(null,(1));
var inst_12529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12530 = [inst_12523,inst_12528__$1];
var inst_12531 = (new cljs.core.PersistentVector(null,2,(5),inst_12529,inst_12530,null));
var state_12542__$1 = (function (){var statearr_12549 = state_12542;
(statearr_12549[(8)] = inst_12528__$1);

return statearr_12549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12542__$1,(8),jobs,inst_12531);
} else {
if((state_val_12543 === (7))){
var inst_12538 = (state_12542[(2)]);
var state_12542__$1 = state_12542;
var statearr_12550_12662 = state_12542__$1;
(statearr_12550_12662[(2)] = inst_12538);

(statearr_12550_12662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (8))){
var inst_12528 = (state_12542[(8)]);
var inst_12533 = (state_12542[(2)]);
var state_12542__$1 = (function (){var statearr_12551 = state_12542;
(statearr_12551[(9)] = inst_12533);

return statearr_12551;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12542__$1,(9),results,inst_12528);
} else {
if((state_val_12543 === (9))){
var inst_12535 = (state_12542[(2)]);
var state_12542__$1 = (function (){var statearr_12552 = state_12542;
(statearr_12552[(10)] = inst_12535);

return statearr_12552;
})();
var statearr_12553_12663 = state_12542__$1;
(statearr_12553_12663[(2)] = null);

(statearr_12553_12663[(1)] = (2));


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
});})(c__8375__auto___12657,jobs,results,process,async))
;
return ((function (switch__8310__auto__,c__8375__auto___12657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0 = (function (){
var statearr_12557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__);

(statearr_12557[(1)] = (1));

return statearr_12557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1 = (function (state_12542){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12558){if((e12558 instanceof Object)){
var ex__8314__auto__ = e12558;
var statearr_12559_12664 = state_12542;
(statearr_12559_12664[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12665 = state_12542;
state_12542 = G__12665;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = function(state_12542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1.call(this,state_12542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___12657,jobs,results,process,async))
})();
var state__8377__auto__ = (function (){var statearr_12560 = f__8376__auto__.call(null);
(statearr_12560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___12657);

return statearr_12560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___12657,jobs,results,process,async))
);


var c__8375__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto__,jobs,results,process,async){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto__,jobs,results,process,async){
return (function (state_12598){
var state_val_12599 = (state_12598[(1)]);
if((state_val_12599 === (7))){
var inst_12594 = (state_12598[(2)]);
var state_12598__$1 = state_12598;
var statearr_12600_12666 = state_12598__$1;
(statearr_12600_12666[(2)] = inst_12594);

(statearr_12600_12666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (20))){
var state_12598__$1 = state_12598;
var statearr_12601_12667 = state_12598__$1;
(statearr_12601_12667[(2)] = null);

(statearr_12601_12667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (1))){
var state_12598__$1 = state_12598;
var statearr_12602_12668 = state_12598__$1;
(statearr_12602_12668[(2)] = null);

(statearr_12602_12668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (4))){
var inst_12563 = (state_12598[(7)]);
var inst_12563__$1 = (state_12598[(2)]);
var inst_12564 = (inst_12563__$1 == null);
var state_12598__$1 = (function (){var statearr_12603 = state_12598;
(statearr_12603[(7)] = inst_12563__$1);

return statearr_12603;
})();
if(cljs.core.truth_(inst_12564)){
var statearr_12604_12669 = state_12598__$1;
(statearr_12604_12669[(1)] = (5));

} else {
var statearr_12605_12670 = state_12598__$1;
(statearr_12605_12670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (15))){
var inst_12576 = (state_12598[(8)]);
var state_12598__$1 = state_12598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12598__$1,(18),to,inst_12576);
} else {
if((state_val_12599 === (21))){
var inst_12589 = (state_12598[(2)]);
var state_12598__$1 = state_12598;
var statearr_12606_12671 = state_12598__$1;
(statearr_12606_12671[(2)] = inst_12589);

(statearr_12606_12671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (13))){
var inst_12591 = (state_12598[(2)]);
var state_12598__$1 = (function (){var statearr_12607 = state_12598;
(statearr_12607[(9)] = inst_12591);

return statearr_12607;
})();
var statearr_12608_12672 = state_12598__$1;
(statearr_12608_12672[(2)] = null);

(statearr_12608_12672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (6))){
var inst_12563 = (state_12598[(7)]);
var state_12598__$1 = state_12598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12598__$1,(11),inst_12563);
} else {
if((state_val_12599 === (17))){
var inst_12584 = (state_12598[(2)]);
var state_12598__$1 = state_12598;
if(cljs.core.truth_(inst_12584)){
var statearr_12609_12673 = state_12598__$1;
(statearr_12609_12673[(1)] = (19));

} else {
var statearr_12610_12674 = state_12598__$1;
(statearr_12610_12674[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (3))){
var inst_12596 = (state_12598[(2)]);
var state_12598__$1 = state_12598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12598__$1,inst_12596);
} else {
if((state_val_12599 === (12))){
var inst_12573 = (state_12598[(10)]);
var state_12598__$1 = state_12598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12598__$1,(14),inst_12573);
} else {
if((state_val_12599 === (2))){
var state_12598__$1 = state_12598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12598__$1,(4),results);
} else {
if((state_val_12599 === (19))){
var state_12598__$1 = state_12598;
var statearr_12611_12675 = state_12598__$1;
(statearr_12611_12675[(2)] = null);

(statearr_12611_12675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (11))){
var inst_12573 = (state_12598[(2)]);
var state_12598__$1 = (function (){var statearr_12612 = state_12598;
(statearr_12612[(10)] = inst_12573);

return statearr_12612;
})();
var statearr_12613_12676 = state_12598__$1;
(statearr_12613_12676[(2)] = null);

(statearr_12613_12676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (9))){
var state_12598__$1 = state_12598;
var statearr_12614_12677 = state_12598__$1;
(statearr_12614_12677[(2)] = null);

(statearr_12614_12677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (5))){
var state_12598__$1 = state_12598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12615_12678 = state_12598__$1;
(statearr_12615_12678[(1)] = (8));

} else {
var statearr_12616_12679 = state_12598__$1;
(statearr_12616_12679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (14))){
var inst_12576 = (state_12598[(8)]);
var inst_12578 = (state_12598[(11)]);
var inst_12576__$1 = (state_12598[(2)]);
var inst_12577 = (inst_12576__$1 == null);
var inst_12578__$1 = cljs.core.not.call(null,inst_12577);
var state_12598__$1 = (function (){var statearr_12617 = state_12598;
(statearr_12617[(8)] = inst_12576__$1);

(statearr_12617[(11)] = inst_12578__$1);

return statearr_12617;
})();
if(inst_12578__$1){
var statearr_12618_12680 = state_12598__$1;
(statearr_12618_12680[(1)] = (15));

} else {
var statearr_12619_12681 = state_12598__$1;
(statearr_12619_12681[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (16))){
var inst_12578 = (state_12598[(11)]);
var state_12598__$1 = state_12598;
var statearr_12620_12682 = state_12598__$1;
(statearr_12620_12682[(2)] = inst_12578);

(statearr_12620_12682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (10))){
var inst_12570 = (state_12598[(2)]);
var state_12598__$1 = state_12598;
var statearr_12621_12683 = state_12598__$1;
(statearr_12621_12683[(2)] = inst_12570);

(statearr_12621_12683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (18))){
var inst_12581 = (state_12598[(2)]);
var state_12598__$1 = state_12598;
var statearr_12622_12684 = state_12598__$1;
(statearr_12622_12684[(2)] = inst_12581);

(statearr_12622_12684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12599 === (8))){
var inst_12567 = cljs.core.async.close_BANG_.call(null,to);
var state_12598__$1 = state_12598;
var statearr_12623_12685 = state_12598__$1;
(statearr_12623_12685[(2)] = inst_12567);

(statearr_12623_12685[(1)] = (10));


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
});})(c__8375__auto__,jobs,results,process,async))
;
return ((function (switch__8310__auto__,c__8375__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0 = (function (){
var statearr_12627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__);

(statearr_12627[(1)] = (1));

return statearr_12627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1 = (function (state_12598){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12628){if((e12628 instanceof Object)){
var ex__8314__auto__ = e12628;
var statearr_12629_12686 = state_12598;
(statearr_12629_12686[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12687 = state_12598;
state_12598 = G__12687;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__ = function(state_12598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1.call(this,state_12598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto__,jobs,results,process,async))
})();
var state__8377__auto__ = (function (){var statearr_12630 = f__8376__auto__.call(null);
(statearr_12630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto__);

return statearr_12630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto__,jobs,results,process,async))
);

return c__8375__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args12688 = [];
var len__5627__auto___12691 = arguments.length;
var i__5628__auto___12692 = (0);
while(true){
if((i__5628__auto___12692 < len__5627__auto___12691)){
args12688.push((arguments[i__5628__auto___12692]));

var G__12693 = (i__5628__auto___12692 + (1));
i__5628__auto___12692 = G__12693;
continue;
} else {
}
break;
}

var G__12690 = args12688.length;
switch (G__12690) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12688.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args12695 = [];
var len__5627__auto___12698 = arguments.length;
var i__5628__auto___12699 = (0);
while(true){
if((i__5628__auto___12699 < len__5627__auto___12698)){
args12695.push((arguments[i__5628__auto___12699]));

var G__12700 = (i__5628__auto___12699 + (1));
i__5628__auto___12699 = G__12700;
continue;
} else {
}
break;
}

var G__12697 = args12695.length;
switch (G__12697) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12695.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args12702 = [];
var len__5627__auto___12755 = arguments.length;
var i__5628__auto___12756 = (0);
while(true){
if((i__5628__auto___12756 < len__5627__auto___12755)){
args12702.push((arguments[i__5628__auto___12756]));

var G__12757 = (i__5628__auto___12756 + (1));
i__5628__auto___12756 = G__12757;
continue;
} else {
}
break;
}

var G__12704 = args12702.length;
switch (G__12704) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12702.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8375__auto___12759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___12759,tc,fc){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___12759,tc,fc){
return (function (state_12730){
var state_val_12731 = (state_12730[(1)]);
if((state_val_12731 === (7))){
var inst_12726 = (state_12730[(2)]);
var state_12730__$1 = state_12730;
var statearr_12732_12760 = state_12730__$1;
(statearr_12732_12760[(2)] = inst_12726);

(statearr_12732_12760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (1))){
var state_12730__$1 = state_12730;
var statearr_12733_12761 = state_12730__$1;
(statearr_12733_12761[(2)] = null);

(statearr_12733_12761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (4))){
var inst_12707 = (state_12730[(7)]);
var inst_12707__$1 = (state_12730[(2)]);
var inst_12708 = (inst_12707__$1 == null);
var state_12730__$1 = (function (){var statearr_12734 = state_12730;
(statearr_12734[(7)] = inst_12707__$1);

return statearr_12734;
})();
if(cljs.core.truth_(inst_12708)){
var statearr_12735_12762 = state_12730__$1;
(statearr_12735_12762[(1)] = (5));

} else {
var statearr_12736_12763 = state_12730__$1;
(statearr_12736_12763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (13))){
var state_12730__$1 = state_12730;
var statearr_12737_12764 = state_12730__$1;
(statearr_12737_12764[(2)] = null);

(statearr_12737_12764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (6))){
var inst_12707 = (state_12730[(7)]);
var inst_12713 = p.call(null,inst_12707);
var state_12730__$1 = state_12730;
if(cljs.core.truth_(inst_12713)){
var statearr_12738_12765 = state_12730__$1;
(statearr_12738_12765[(1)] = (9));

} else {
var statearr_12739_12766 = state_12730__$1;
(statearr_12739_12766[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (3))){
var inst_12728 = (state_12730[(2)]);
var state_12730__$1 = state_12730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12730__$1,inst_12728);
} else {
if((state_val_12731 === (12))){
var state_12730__$1 = state_12730;
var statearr_12740_12767 = state_12730__$1;
(statearr_12740_12767[(2)] = null);

(statearr_12740_12767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (2))){
var state_12730__$1 = state_12730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12730__$1,(4),ch);
} else {
if((state_val_12731 === (11))){
var inst_12707 = (state_12730[(7)]);
var inst_12717 = (state_12730[(2)]);
var state_12730__$1 = state_12730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12730__$1,(8),inst_12717,inst_12707);
} else {
if((state_val_12731 === (9))){
var state_12730__$1 = state_12730;
var statearr_12741_12768 = state_12730__$1;
(statearr_12741_12768[(2)] = tc);

(statearr_12741_12768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (5))){
var inst_12710 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12711 = cljs.core.async.close_BANG_.call(null,fc);
var state_12730__$1 = (function (){var statearr_12742 = state_12730;
(statearr_12742[(8)] = inst_12710);

return statearr_12742;
})();
var statearr_12743_12769 = state_12730__$1;
(statearr_12743_12769[(2)] = inst_12711);

(statearr_12743_12769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (14))){
var inst_12724 = (state_12730[(2)]);
var state_12730__$1 = state_12730;
var statearr_12744_12770 = state_12730__$1;
(statearr_12744_12770[(2)] = inst_12724);

(statearr_12744_12770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (10))){
var state_12730__$1 = state_12730;
var statearr_12745_12771 = state_12730__$1;
(statearr_12745_12771[(2)] = fc);

(statearr_12745_12771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (8))){
var inst_12719 = (state_12730[(2)]);
var state_12730__$1 = state_12730;
if(cljs.core.truth_(inst_12719)){
var statearr_12746_12772 = state_12730__$1;
(statearr_12746_12772[(1)] = (12));

} else {
var statearr_12747_12773 = state_12730__$1;
(statearr_12747_12773[(1)] = (13));

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
});})(c__8375__auto___12759,tc,fc))
;
return ((function (switch__8310__auto__,c__8375__auto___12759,tc,fc){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_12751 = [null,null,null,null,null,null,null,null,null];
(statearr_12751[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_12751[(1)] = (1));

return statearr_12751;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_12730){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12752){if((e12752 instanceof Object)){
var ex__8314__auto__ = e12752;
var statearr_12753_12774 = state_12730;
(statearr_12753_12774[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12775 = state_12730;
state_12730 = G__12775;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_12730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_12730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___12759,tc,fc))
})();
var state__8377__auto__ = (function (){var statearr_12754 = f__8376__auto__.call(null);
(statearr_12754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___12759);

return statearr_12754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___12759,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8375__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto__){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto__){
return (function (state_12822){
var state_val_12823 = (state_12822[(1)]);
if((state_val_12823 === (1))){
var inst_12808 = init;
var state_12822__$1 = (function (){var statearr_12824 = state_12822;
(statearr_12824[(7)] = inst_12808);

return statearr_12824;
})();
var statearr_12825_12840 = state_12822__$1;
(statearr_12825_12840[(2)] = null);

(statearr_12825_12840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (2))){
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12822__$1,(4),ch);
} else {
if((state_val_12823 === (3))){
var inst_12820 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12822__$1,inst_12820);
} else {
if((state_val_12823 === (4))){
var inst_12811 = (state_12822[(8)]);
var inst_12811__$1 = (state_12822[(2)]);
var inst_12812 = (inst_12811__$1 == null);
var state_12822__$1 = (function (){var statearr_12826 = state_12822;
(statearr_12826[(8)] = inst_12811__$1);

return statearr_12826;
})();
if(cljs.core.truth_(inst_12812)){
var statearr_12827_12841 = state_12822__$1;
(statearr_12827_12841[(1)] = (5));

} else {
var statearr_12828_12842 = state_12822__$1;
(statearr_12828_12842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (5))){
var inst_12808 = (state_12822[(7)]);
var state_12822__$1 = state_12822;
var statearr_12829_12843 = state_12822__$1;
(statearr_12829_12843[(2)] = inst_12808);

(statearr_12829_12843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (6))){
var inst_12811 = (state_12822[(8)]);
var inst_12808 = (state_12822[(7)]);
var inst_12815 = f.call(null,inst_12808,inst_12811);
var inst_12808__$1 = inst_12815;
var state_12822__$1 = (function (){var statearr_12830 = state_12822;
(statearr_12830[(7)] = inst_12808__$1);

return statearr_12830;
})();
var statearr_12831_12844 = state_12822__$1;
(statearr_12831_12844[(2)] = null);

(statearr_12831_12844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (7))){
var inst_12818 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12832_12845 = state_12822__$1;
(statearr_12832_12845[(2)] = inst_12818);

(statearr_12832_12845[(1)] = (3));


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
});})(c__8375__auto__))
;
return ((function (switch__8310__auto__,c__8375__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8311__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8311__auto____0 = (function (){
var statearr_12836 = [null,null,null,null,null,null,null,null,null];
(statearr_12836[(0)] = cljs$core$async$reduce_$_state_machine__8311__auto__);

(statearr_12836[(1)] = (1));

return statearr_12836;
});
var cljs$core$async$reduce_$_state_machine__8311__auto____1 = (function (state_12822){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12837){if((e12837 instanceof Object)){
var ex__8314__auto__ = e12837;
var statearr_12838_12846 = state_12822;
(statearr_12838_12846[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12847 = state_12822;
state_12822 = G__12847;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8311__auto__ = function(state_12822){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8311__auto____1.call(this,state_12822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8311__auto____0;
cljs$core$async$reduce_$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8311__auto____1;
return cljs$core$async$reduce_$_state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto__))
})();
var state__8377__auto__ = (function (){var statearr_12839 = f__8376__auto__.call(null);
(statearr_12839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto__);

return statearr_12839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto__))
);

return c__8375__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args12848 = [];
var len__5627__auto___12900 = arguments.length;
var i__5628__auto___12901 = (0);
while(true){
if((i__5628__auto___12901 < len__5627__auto___12900)){
args12848.push((arguments[i__5628__auto___12901]));

var G__12902 = (i__5628__auto___12901 + (1));
i__5628__auto___12901 = G__12902;
continue;
} else {
}
break;
}

var G__12850 = args12848.length;
switch (G__12850) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12848.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8375__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto__){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto__){
return (function (state_12875){
var state_val_12876 = (state_12875[(1)]);
if((state_val_12876 === (7))){
var inst_12857 = (state_12875[(2)]);
var state_12875__$1 = state_12875;
var statearr_12877_12904 = state_12875__$1;
(statearr_12877_12904[(2)] = inst_12857);

(statearr_12877_12904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (1))){
var inst_12851 = cljs.core.seq.call(null,coll);
var inst_12852 = inst_12851;
var state_12875__$1 = (function (){var statearr_12878 = state_12875;
(statearr_12878[(7)] = inst_12852);

return statearr_12878;
})();
var statearr_12879_12905 = state_12875__$1;
(statearr_12879_12905[(2)] = null);

(statearr_12879_12905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (4))){
var inst_12852 = (state_12875[(7)]);
var inst_12855 = cljs.core.first.call(null,inst_12852);
var state_12875__$1 = state_12875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12875__$1,(7),ch,inst_12855);
} else {
if((state_val_12876 === (13))){
var inst_12869 = (state_12875[(2)]);
var state_12875__$1 = state_12875;
var statearr_12880_12906 = state_12875__$1;
(statearr_12880_12906[(2)] = inst_12869);

(statearr_12880_12906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (6))){
var inst_12860 = (state_12875[(2)]);
var state_12875__$1 = state_12875;
if(cljs.core.truth_(inst_12860)){
var statearr_12881_12907 = state_12875__$1;
(statearr_12881_12907[(1)] = (8));

} else {
var statearr_12882_12908 = state_12875__$1;
(statearr_12882_12908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (3))){
var inst_12873 = (state_12875[(2)]);
var state_12875__$1 = state_12875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12875__$1,inst_12873);
} else {
if((state_val_12876 === (12))){
var state_12875__$1 = state_12875;
var statearr_12883_12909 = state_12875__$1;
(statearr_12883_12909[(2)] = null);

(statearr_12883_12909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (2))){
var inst_12852 = (state_12875[(7)]);
var state_12875__$1 = state_12875;
if(cljs.core.truth_(inst_12852)){
var statearr_12884_12910 = state_12875__$1;
(statearr_12884_12910[(1)] = (4));

} else {
var statearr_12885_12911 = state_12875__$1;
(statearr_12885_12911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (11))){
var inst_12866 = cljs.core.async.close_BANG_.call(null,ch);
var state_12875__$1 = state_12875;
var statearr_12886_12912 = state_12875__$1;
(statearr_12886_12912[(2)] = inst_12866);

(statearr_12886_12912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (9))){
var state_12875__$1 = state_12875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12887_12913 = state_12875__$1;
(statearr_12887_12913[(1)] = (11));

} else {
var statearr_12888_12914 = state_12875__$1;
(statearr_12888_12914[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (5))){
var inst_12852 = (state_12875[(7)]);
var state_12875__$1 = state_12875;
var statearr_12889_12915 = state_12875__$1;
(statearr_12889_12915[(2)] = inst_12852);

(statearr_12889_12915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (10))){
var inst_12871 = (state_12875[(2)]);
var state_12875__$1 = state_12875;
var statearr_12890_12916 = state_12875__$1;
(statearr_12890_12916[(2)] = inst_12871);

(statearr_12890_12916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12876 === (8))){
var inst_12852 = (state_12875[(7)]);
var inst_12862 = cljs.core.next.call(null,inst_12852);
var inst_12852__$1 = inst_12862;
var state_12875__$1 = (function (){var statearr_12891 = state_12875;
(statearr_12891[(7)] = inst_12852__$1);

return statearr_12891;
})();
var statearr_12892_12917 = state_12875__$1;
(statearr_12892_12917[(2)] = null);

(statearr_12892_12917[(1)] = (2));


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
});})(c__8375__auto__))
;
return ((function (switch__8310__auto__,c__8375__auto__){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_12896 = [null,null,null,null,null,null,null,null];
(statearr_12896[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_12896[(1)] = (1));

return statearr_12896;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_12875){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_12875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e12897){if((e12897 instanceof Object)){
var ex__8314__auto__ = e12897;
var statearr_12898_12918 = state_12875;
(statearr_12898_12918[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12919 = state_12875;
state_12875 = G__12919;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_12875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_12875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto__))
})();
var state__8377__auto__ = (function (){var statearr_12899 = f__8376__auto__.call(null);
(statearr_12899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto__);

return statearr_12899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto__))
);

return c__8375__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5224__auto__ = (((_ == null))?null:_);
var m__5225__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,_);
} else {
var m__5225__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5225__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m,ch);
} else {
var m__5225__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m);
} else {
var m__5225__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13141 = (function (mult,ch,cs,meta13142){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13142 = meta13142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13143,meta13142__$1){
var self__ = this;
var _13143__$1 = this;
return (new cljs.core.async.t_cljs$core$async13141(self__.mult,self__.ch,self__.cs,meta13142__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13143){
var self__ = this;
var _13143__$1 = this;
return self__.meta13142;
});})(cs))
;

cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13141.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13141.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13142","meta13142",-914553221,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13141";

cljs.core.async.t_cljs$core$async13141.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async13141");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13141 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13141(mult__$1,ch__$1,cs__$1,meta13142){
return (new cljs.core.async.t_cljs$core$async13141(mult__$1,ch__$1,cs__$1,meta13142));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13141(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8375__auto___13362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___13362,cs,m,dchan,dctr,done){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___13362,cs,m,dchan,dctr,done){
return (function (state_13274){
var state_val_13275 = (state_13274[(1)]);
if((state_val_13275 === (7))){
var inst_13270 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13276_13363 = state_13274__$1;
(statearr_13276_13363[(2)] = inst_13270);

(statearr_13276_13363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (20))){
var inst_13175 = (state_13274[(7)]);
var inst_13185 = cljs.core.first.call(null,inst_13175);
var inst_13186 = cljs.core.nth.call(null,inst_13185,(0),null);
var inst_13187 = cljs.core.nth.call(null,inst_13185,(1),null);
var state_13274__$1 = (function (){var statearr_13277 = state_13274;
(statearr_13277[(8)] = inst_13186);

return statearr_13277;
})();
if(cljs.core.truth_(inst_13187)){
var statearr_13278_13364 = state_13274__$1;
(statearr_13278_13364[(1)] = (22));

} else {
var statearr_13279_13365 = state_13274__$1;
(statearr_13279_13365[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (27))){
var inst_13146 = (state_13274[(9)]);
var inst_13222 = (state_13274[(10)]);
var inst_13215 = (state_13274[(11)]);
var inst_13217 = (state_13274[(12)]);
var inst_13222__$1 = cljs.core._nth.call(null,inst_13215,inst_13217);
var inst_13223 = cljs.core.async.put_BANG_.call(null,inst_13222__$1,inst_13146,done);
var state_13274__$1 = (function (){var statearr_13280 = state_13274;
(statearr_13280[(10)] = inst_13222__$1);

return statearr_13280;
})();
if(cljs.core.truth_(inst_13223)){
var statearr_13281_13366 = state_13274__$1;
(statearr_13281_13366[(1)] = (30));

} else {
var statearr_13282_13367 = state_13274__$1;
(statearr_13282_13367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (1))){
var state_13274__$1 = state_13274;
var statearr_13283_13368 = state_13274__$1;
(statearr_13283_13368[(2)] = null);

(statearr_13283_13368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (24))){
var inst_13175 = (state_13274[(7)]);
var inst_13192 = (state_13274[(2)]);
var inst_13193 = cljs.core.next.call(null,inst_13175);
var inst_13155 = inst_13193;
var inst_13156 = null;
var inst_13157 = (0);
var inst_13158 = (0);
var state_13274__$1 = (function (){var statearr_13284 = state_13274;
(statearr_13284[(13)] = inst_13192);

(statearr_13284[(14)] = inst_13156);

(statearr_13284[(15)] = inst_13157);

(statearr_13284[(16)] = inst_13155);

(statearr_13284[(17)] = inst_13158);

return statearr_13284;
})();
var statearr_13285_13369 = state_13274__$1;
(statearr_13285_13369[(2)] = null);

(statearr_13285_13369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (39))){
var state_13274__$1 = state_13274;
var statearr_13289_13370 = state_13274__$1;
(statearr_13289_13370[(2)] = null);

(statearr_13289_13370[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (4))){
var inst_13146 = (state_13274[(9)]);
var inst_13146__$1 = (state_13274[(2)]);
var inst_13147 = (inst_13146__$1 == null);
var state_13274__$1 = (function (){var statearr_13290 = state_13274;
(statearr_13290[(9)] = inst_13146__$1);

return statearr_13290;
})();
if(cljs.core.truth_(inst_13147)){
var statearr_13291_13371 = state_13274__$1;
(statearr_13291_13371[(1)] = (5));

} else {
var statearr_13292_13372 = state_13274__$1;
(statearr_13292_13372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (15))){
var inst_13156 = (state_13274[(14)]);
var inst_13157 = (state_13274[(15)]);
var inst_13155 = (state_13274[(16)]);
var inst_13158 = (state_13274[(17)]);
var inst_13171 = (state_13274[(2)]);
var inst_13172 = (inst_13158 + (1));
var tmp13286 = inst_13156;
var tmp13287 = inst_13157;
var tmp13288 = inst_13155;
var inst_13155__$1 = tmp13288;
var inst_13156__$1 = tmp13286;
var inst_13157__$1 = tmp13287;
var inst_13158__$1 = inst_13172;
var state_13274__$1 = (function (){var statearr_13293 = state_13274;
(statearr_13293[(14)] = inst_13156__$1);

(statearr_13293[(15)] = inst_13157__$1);

(statearr_13293[(16)] = inst_13155__$1);

(statearr_13293[(17)] = inst_13158__$1);

(statearr_13293[(18)] = inst_13171);

return statearr_13293;
})();
var statearr_13294_13373 = state_13274__$1;
(statearr_13294_13373[(2)] = null);

(statearr_13294_13373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (21))){
var inst_13196 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13298_13374 = state_13274__$1;
(statearr_13298_13374[(2)] = inst_13196);

(statearr_13298_13374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (31))){
var inst_13222 = (state_13274[(10)]);
var inst_13226 = done.call(null,null);
var inst_13227 = cljs.core.async.untap_STAR_.call(null,m,inst_13222);
var state_13274__$1 = (function (){var statearr_13299 = state_13274;
(statearr_13299[(19)] = inst_13226);

return statearr_13299;
})();
var statearr_13300_13375 = state_13274__$1;
(statearr_13300_13375[(2)] = inst_13227);

(statearr_13300_13375[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (32))){
var inst_13216 = (state_13274[(20)]);
var inst_13215 = (state_13274[(11)]);
var inst_13217 = (state_13274[(12)]);
var inst_13214 = (state_13274[(21)]);
var inst_13229 = (state_13274[(2)]);
var inst_13230 = (inst_13217 + (1));
var tmp13295 = inst_13216;
var tmp13296 = inst_13215;
var tmp13297 = inst_13214;
var inst_13214__$1 = tmp13297;
var inst_13215__$1 = tmp13296;
var inst_13216__$1 = tmp13295;
var inst_13217__$1 = inst_13230;
var state_13274__$1 = (function (){var statearr_13301 = state_13274;
(statearr_13301[(20)] = inst_13216__$1);

(statearr_13301[(22)] = inst_13229);

(statearr_13301[(11)] = inst_13215__$1);

(statearr_13301[(12)] = inst_13217__$1);

(statearr_13301[(21)] = inst_13214__$1);

return statearr_13301;
})();
var statearr_13302_13376 = state_13274__$1;
(statearr_13302_13376[(2)] = null);

(statearr_13302_13376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (40))){
var inst_13242 = (state_13274[(23)]);
var inst_13246 = done.call(null,null);
var inst_13247 = cljs.core.async.untap_STAR_.call(null,m,inst_13242);
var state_13274__$1 = (function (){var statearr_13303 = state_13274;
(statearr_13303[(24)] = inst_13246);

return statearr_13303;
})();
var statearr_13304_13377 = state_13274__$1;
(statearr_13304_13377[(2)] = inst_13247);

(statearr_13304_13377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (33))){
var inst_13233 = (state_13274[(25)]);
var inst_13235 = cljs.core.chunked_seq_QMARK_.call(null,inst_13233);
var state_13274__$1 = state_13274;
if(inst_13235){
var statearr_13305_13378 = state_13274__$1;
(statearr_13305_13378[(1)] = (36));

} else {
var statearr_13306_13379 = state_13274__$1;
(statearr_13306_13379[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (13))){
var inst_13165 = (state_13274[(26)]);
var inst_13168 = cljs.core.async.close_BANG_.call(null,inst_13165);
var state_13274__$1 = state_13274;
var statearr_13307_13380 = state_13274__$1;
(statearr_13307_13380[(2)] = inst_13168);

(statearr_13307_13380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (22))){
var inst_13186 = (state_13274[(8)]);
var inst_13189 = cljs.core.async.close_BANG_.call(null,inst_13186);
var state_13274__$1 = state_13274;
var statearr_13308_13381 = state_13274__$1;
(statearr_13308_13381[(2)] = inst_13189);

(statearr_13308_13381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (36))){
var inst_13233 = (state_13274[(25)]);
var inst_13237 = cljs.core.chunk_first.call(null,inst_13233);
var inst_13238 = cljs.core.chunk_rest.call(null,inst_13233);
var inst_13239 = cljs.core.count.call(null,inst_13237);
var inst_13214 = inst_13238;
var inst_13215 = inst_13237;
var inst_13216 = inst_13239;
var inst_13217 = (0);
var state_13274__$1 = (function (){var statearr_13309 = state_13274;
(statearr_13309[(20)] = inst_13216);

(statearr_13309[(11)] = inst_13215);

(statearr_13309[(12)] = inst_13217);

(statearr_13309[(21)] = inst_13214);

return statearr_13309;
})();
var statearr_13310_13382 = state_13274__$1;
(statearr_13310_13382[(2)] = null);

(statearr_13310_13382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (41))){
var inst_13233 = (state_13274[(25)]);
var inst_13249 = (state_13274[(2)]);
var inst_13250 = cljs.core.next.call(null,inst_13233);
var inst_13214 = inst_13250;
var inst_13215 = null;
var inst_13216 = (0);
var inst_13217 = (0);
var state_13274__$1 = (function (){var statearr_13311 = state_13274;
(statearr_13311[(20)] = inst_13216);

(statearr_13311[(27)] = inst_13249);

(statearr_13311[(11)] = inst_13215);

(statearr_13311[(12)] = inst_13217);

(statearr_13311[(21)] = inst_13214);

return statearr_13311;
})();
var statearr_13312_13383 = state_13274__$1;
(statearr_13312_13383[(2)] = null);

(statearr_13312_13383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (43))){
var state_13274__$1 = state_13274;
var statearr_13313_13384 = state_13274__$1;
(statearr_13313_13384[(2)] = null);

(statearr_13313_13384[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (29))){
var inst_13258 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13314_13385 = state_13274__$1;
(statearr_13314_13385[(2)] = inst_13258);

(statearr_13314_13385[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (44))){
var inst_13267 = (state_13274[(2)]);
var state_13274__$1 = (function (){var statearr_13315 = state_13274;
(statearr_13315[(28)] = inst_13267);

return statearr_13315;
})();
var statearr_13316_13386 = state_13274__$1;
(statearr_13316_13386[(2)] = null);

(statearr_13316_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (6))){
var inst_13206 = (state_13274[(29)]);
var inst_13205 = cljs.core.deref.call(null,cs);
var inst_13206__$1 = cljs.core.keys.call(null,inst_13205);
var inst_13207 = cljs.core.count.call(null,inst_13206__$1);
var inst_13208 = cljs.core.reset_BANG_.call(null,dctr,inst_13207);
var inst_13213 = cljs.core.seq.call(null,inst_13206__$1);
var inst_13214 = inst_13213;
var inst_13215 = null;
var inst_13216 = (0);
var inst_13217 = (0);
var state_13274__$1 = (function (){var statearr_13317 = state_13274;
(statearr_13317[(20)] = inst_13216);

(statearr_13317[(30)] = inst_13208);

(statearr_13317[(29)] = inst_13206__$1);

(statearr_13317[(11)] = inst_13215);

(statearr_13317[(12)] = inst_13217);

(statearr_13317[(21)] = inst_13214);

return statearr_13317;
})();
var statearr_13318_13387 = state_13274__$1;
(statearr_13318_13387[(2)] = null);

(statearr_13318_13387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (28))){
var inst_13233 = (state_13274[(25)]);
var inst_13214 = (state_13274[(21)]);
var inst_13233__$1 = cljs.core.seq.call(null,inst_13214);
var state_13274__$1 = (function (){var statearr_13319 = state_13274;
(statearr_13319[(25)] = inst_13233__$1);

return statearr_13319;
})();
if(inst_13233__$1){
var statearr_13320_13388 = state_13274__$1;
(statearr_13320_13388[(1)] = (33));

} else {
var statearr_13321_13389 = state_13274__$1;
(statearr_13321_13389[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (25))){
var inst_13216 = (state_13274[(20)]);
var inst_13217 = (state_13274[(12)]);
var inst_13219 = (inst_13217 < inst_13216);
var inst_13220 = inst_13219;
var state_13274__$1 = state_13274;
if(cljs.core.truth_(inst_13220)){
var statearr_13322_13390 = state_13274__$1;
(statearr_13322_13390[(1)] = (27));

} else {
var statearr_13323_13391 = state_13274__$1;
(statearr_13323_13391[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (34))){
var state_13274__$1 = state_13274;
var statearr_13324_13392 = state_13274__$1;
(statearr_13324_13392[(2)] = null);

(statearr_13324_13392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (17))){
var state_13274__$1 = state_13274;
var statearr_13325_13393 = state_13274__$1;
(statearr_13325_13393[(2)] = null);

(statearr_13325_13393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (3))){
var inst_13272 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13274__$1,inst_13272);
} else {
if((state_val_13275 === (12))){
var inst_13201 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13326_13394 = state_13274__$1;
(statearr_13326_13394[(2)] = inst_13201);

(statearr_13326_13394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (2))){
var state_13274__$1 = state_13274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13274__$1,(4),ch);
} else {
if((state_val_13275 === (23))){
var state_13274__$1 = state_13274;
var statearr_13327_13395 = state_13274__$1;
(statearr_13327_13395[(2)] = null);

(statearr_13327_13395[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (35))){
var inst_13256 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13328_13396 = state_13274__$1;
(statearr_13328_13396[(2)] = inst_13256);

(statearr_13328_13396[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (19))){
var inst_13175 = (state_13274[(7)]);
var inst_13179 = cljs.core.chunk_first.call(null,inst_13175);
var inst_13180 = cljs.core.chunk_rest.call(null,inst_13175);
var inst_13181 = cljs.core.count.call(null,inst_13179);
var inst_13155 = inst_13180;
var inst_13156 = inst_13179;
var inst_13157 = inst_13181;
var inst_13158 = (0);
var state_13274__$1 = (function (){var statearr_13329 = state_13274;
(statearr_13329[(14)] = inst_13156);

(statearr_13329[(15)] = inst_13157);

(statearr_13329[(16)] = inst_13155);

(statearr_13329[(17)] = inst_13158);

return statearr_13329;
})();
var statearr_13330_13397 = state_13274__$1;
(statearr_13330_13397[(2)] = null);

(statearr_13330_13397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (11))){
var inst_13175 = (state_13274[(7)]);
var inst_13155 = (state_13274[(16)]);
var inst_13175__$1 = cljs.core.seq.call(null,inst_13155);
var state_13274__$1 = (function (){var statearr_13331 = state_13274;
(statearr_13331[(7)] = inst_13175__$1);

return statearr_13331;
})();
if(inst_13175__$1){
var statearr_13332_13398 = state_13274__$1;
(statearr_13332_13398[(1)] = (16));

} else {
var statearr_13333_13399 = state_13274__$1;
(statearr_13333_13399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (9))){
var inst_13203 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13334_13400 = state_13274__$1;
(statearr_13334_13400[(2)] = inst_13203);

(statearr_13334_13400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (5))){
var inst_13153 = cljs.core.deref.call(null,cs);
var inst_13154 = cljs.core.seq.call(null,inst_13153);
var inst_13155 = inst_13154;
var inst_13156 = null;
var inst_13157 = (0);
var inst_13158 = (0);
var state_13274__$1 = (function (){var statearr_13335 = state_13274;
(statearr_13335[(14)] = inst_13156);

(statearr_13335[(15)] = inst_13157);

(statearr_13335[(16)] = inst_13155);

(statearr_13335[(17)] = inst_13158);

return statearr_13335;
})();
var statearr_13336_13401 = state_13274__$1;
(statearr_13336_13401[(2)] = null);

(statearr_13336_13401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (14))){
var state_13274__$1 = state_13274;
var statearr_13337_13402 = state_13274__$1;
(statearr_13337_13402[(2)] = null);

(statearr_13337_13402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (45))){
var inst_13264 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13338_13403 = state_13274__$1;
(statearr_13338_13403[(2)] = inst_13264);

(statearr_13338_13403[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (26))){
var inst_13206 = (state_13274[(29)]);
var inst_13260 = (state_13274[(2)]);
var inst_13261 = cljs.core.seq.call(null,inst_13206);
var state_13274__$1 = (function (){var statearr_13339 = state_13274;
(statearr_13339[(31)] = inst_13260);

return statearr_13339;
})();
if(inst_13261){
var statearr_13340_13404 = state_13274__$1;
(statearr_13340_13404[(1)] = (42));

} else {
var statearr_13341_13405 = state_13274__$1;
(statearr_13341_13405[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (16))){
var inst_13175 = (state_13274[(7)]);
var inst_13177 = cljs.core.chunked_seq_QMARK_.call(null,inst_13175);
var state_13274__$1 = state_13274;
if(inst_13177){
var statearr_13342_13406 = state_13274__$1;
(statearr_13342_13406[(1)] = (19));

} else {
var statearr_13343_13407 = state_13274__$1;
(statearr_13343_13407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (38))){
var inst_13253 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13344_13408 = state_13274__$1;
(statearr_13344_13408[(2)] = inst_13253);

(statearr_13344_13408[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (30))){
var state_13274__$1 = state_13274;
var statearr_13345_13409 = state_13274__$1;
(statearr_13345_13409[(2)] = null);

(statearr_13345_13409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (10))){
var inst_13156 = (state_13274[(14)]);
var inst_13158 = (state_13274[(17)]);
var inst_13164 = cljs.core._nth.call(null,inst_13156,inst_13158);
var inst_13165 = cljs.core.nth.call(null,inst_13164,(0),null);
var inst_13166 = cljs.core.nth.call(null,inst_13164,(1),null);
var state_13274__$1 = (function (){var statearr_13346 = state_13274;
(statearr_13346[(26)] = inst_13165);

return statearr_13346;
})();
if(cljs.core.truth_(inst_13166)){
var statearr_13347_13410 = state_13274__$1;
(statearr_13347_13410[(1)] = (13));

} else {
var statearr_13348_13411 = state_13274__$1;
(statearr_13348_13411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (18))){
var inst_13199 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13349_13412 = state_13274__$1;
(statearr_13349_13412[(2)] = inst_13199);

(statearr_13349_13412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (42))){
var state_13274__$1 = state_13274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13274__$1,(45),dchan);
} else {
if((state_val_13275 === (37))){
var inst_13233 = (state_13274[(25)]);
var inst_13146 = (state_13274[(9)]);
var inst_13242 = (state_13274[(23)]);
var inst_13242__$1 = cljs.core.first.call(null,inst_13233);
var inst_13243 = cljs.core.async.put_BANG_.call(null,inst_13242__$1,inst_13146,done);
var state_13274__$1 = (function (){var statearr_13350 = state_13274;
(statearr_13350[(23)] = inst_13242__$1);

return statearr_13350;
})();
if(cljs.core.truth_(inst_13243)){
var statearr_13351_13413 = state_13274__$1;
(statearr_13351_13413[(1)] = (39));

} else {
var statearr_13352_13414 = state_13274__$1;
(statearr_13352_13414[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (8))){
var inst_13157 = (state_13274[(15)]);
var inst_13158 = (state_13274[(17)]);
var inst_13160 = (inst_13158 < inst_13157);
var inst_13161 = inst_13160;
var state_13274__$1 = state_13274;
if(cljs.core.truth_(inst_13161)){
var statearr_13353_13415 = state_13274__$1;
(statearr_13353_13415[(1)] = (10));

} else {
var statearr_13354_13416 = state_13274__$1;
(statearr_13354_13416[(1)] = (11));

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
});})(c__8375__auto___13362,cs,m,dchan,dctr,done))
;
return ((function (switch__8310__auto__,c__8375__auto___13362,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8311__auto__ = null;
var cljs$core$async$mult_$_state_machine__8311__auto____0 = (function (){
var statearr_13358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13358[(0)] = cljs$core$async$mult_$_state_machine__8311__auto__);

(statearr_13358[(1)] = (1));

return statearr_13358;
});
var cljs$core$async$mult_$_state_machine__8311__auto____1 = (function (state_13274){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_13274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e13359){if((e13359 instanceof Object)){
var ex__8314__auto__ = e13359;
var statearr_13360_13417 = state_13274;
(statearr_13360_13417[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13418 = state_13274;
state_13274 = G__13418;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8311__auto__ = function(state_13274){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8311__auto____1.call(this,state_13274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8311__auto____0;
cljs$core$async$mult_$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8311__auto____1;
return cljs$core$async$mult_$_state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___13362,cs,m,dchan,dctr,done))
})();
var state__8377__auto__ = (function (){var statearr_13361 = f__8376__auto__.call(null);
(statearr_13361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___13362);

return statearr_13361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___13362,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args13419 = [];
var len__5627__auto___13422 = arguments.length;
var i__5628__auto___13423 = (0);
while(true){
if((i__5628__auto___13423 < len__5627__auto___13422)){
args13419.push((arguments[i__5628__auto___13423]));

var G__13424 = (i__5628__auto___13423 + (1));
i__5628__auto___13423 = G__13424;
continue;
} else {
}
break;
}

var G__13421 = args13419.length;
switch (G__13421) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13419.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m,ch);
} else {
var m__5225__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m,ch);
} else {
var m__5225__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m);
} else {
var m__5225__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m,state_map);
} else {
var m__5225__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5224__auto__ = (((m == null))?null:m);
var m__5225__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,m,mode);
} else {
var m__5225__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___13436 = arguments.length;
var i__5628__auto___13437 = (0);
while(true){
if((i__5628__auto___13437 < len__5627__auto___13436)){
args__5634__auto__.push((arguments[i__5628__auto___13437]));

var G__13438 = (i__5628__auto___13437 + (1));
i__5628__auto___13437 = G__13438;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((3) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5635__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13430){
var map__13431 = p__13430;
var map__13431__$1 = ((((!((map__13431 == null)))?((((map__13431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13431):map__13431);
var opts = map__13431__$1;
var statearr_13433_13439 = state;
(statearr_13433_13439[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__13431,map__13431__$1,opts){
return (function (val){
var statearr_13434_13440 = state;
(statearr_13434_13440[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13431,map__13431__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13435_13441 = state;
(statearr_13435_13441[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13426){
var G__13427 = cljs.core.first.call(null,seq13426);
var seq13426__$1 = cljs.core.next.call(null,seq13426);
var G__13428 = cljs.core.first.call(null,seq13426__$1);
var seq13426__$2 = cljs.core.next.call(null,seq13426__$1);
var G__13429 = cljs.core.first.call(null,seq13426__$2);
var seq13426__$3 = cljs.core.next.call(null,seq13426__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13427,G__13428,G__13429,seq13426__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async13605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13605 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13606){
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
this.meta13606 = meta13606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13607,meta13606__$1){
var self__ = this;
var _13607__$1 = this;
return (new cljs.core.async.t_cljs$core$async13605(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13606__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13607){
var self__ = this;
var _13607__$1 = this;
return self__.meta13606;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13605.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13606","meta13606",-2091318082,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13605";

cljs.core.async.t_cljs$core$async13605.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async13605");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13605 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13605(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13606){
return (new cljs.core.async.t_cljs$core$async13605(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13606));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13605(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8375__auto___13768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___13768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___13768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13705){
var state_val_13706 = (state_13705[(1)]);
if((state_val_13706 === (7))){
var inst_13623 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
var statearr_13707_13769 = state_13705__$1;
(statearr_13707_13769[(2)] = inst_13623);

(statearr_13707_13769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (20))){
var inst_13635 = (state_13705[(7)]);
var state_13705__$1 = state_13705;
var statearr_13708_13770 = state_13705__$1;
(statearr_13708_13770[(2)] = inst_13635);

(statearr_13708_13770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (27))){
var state_13705__$1 = state_13705;
var statearr_13709_13771 = state_13705__$1;
(statearr_13709_13771[(2)] = null);

(statearr_13709_13771[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (1))){
var inst_13611 = (state_13705[(8)]);
var inst_13611__$1 = calc_state.call(null);
var inst_13613 = (inst_13611__$1 == null);
var inst_13614 = cljs.core.not.call(null,inst_13613);
var state_13705__$1 = (function (){var statearr_13710 = state_13705;
(statearr_13710[(8)] = inst_13611__$1);

return statearr_13710;
})();
if(inst_13614){
var statearr_13711_13772 = state_13705__$1;
(statearr_13711_13772[(1)] = (2));

} else {
var statearr_13712_13773 = state_13705__$1;
(statearr_13712_13773[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (24))){
var inst_13658 = (state_13705[(9)]);
var inst_13665 = (state_13705[(10)]);
var inst_13679 = (state_13705[(11)]);
var inst_13679__$1 = inst_13658.call(null,inst_13665);
var state_13705__$1 = (function (){var statearr_13713 = state_13705;
(statearr_13713[(11)] = inst_13679__$1);

return statearr_13713;
})();
if(cljs.core.truth_(inst_13679__$1)){
var statearr_13714_13774 = state_13705__$1;
(statearr_13714_13774[(1)] = (29));

} else {
var statearr_13715_13775 = state_13705__$1;
(statearr_13715_13775[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (4))){
var inst_13626 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
if(cljs.core.truth_(inst_13626)){
var statearr_13716_13776 = state_13705__$1;
(statearr_13716_13776[(1)] = (8));

} else {
var statearr_13717_13777 = state_13705__$1;
(statearr_13717_13777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (15))){
var inst_13652 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
if(cljs.core.truth_(inst_13652)){
var statearr_13718_13778 = state_13705__$1;
(statearr_13718_13778[(1)] = (19));

} else {
var statearr_13719_13779 = state_13705__$1;
(statearr_13719_13779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (21))){
var inst_13657 = (state_13705[(12)]);
var inst_13657__$1 = (state_13705[(2)]);
var inst_13658 = cljs.core.get.call(null,inst_13657__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13659 = cljs.core.get.call(null,inst_13657__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13660 = cljs.core.get.call(null,inst_13657__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13705__$1 = (function (){var statearr_13720 = state_13705;
(statearr_13720[(9)] = inst_13658);

(statearr_13720[(12)] = inst_13657__$1);

(statearr_13720[(13)] = inst_13659);

return statearr_13720;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13705__$1,(22),inst_13660);
} else {
if((state_val_13706 === (31))){
var inst_13687 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
if(cljs.core.truth_(inst_13687)){
var statearr_13721_13780 = state_13705__$1;
(statearr_13721_13780[(1)] = (32));

} else {
var statearr_13722_13781 = state_13705__$1;
(statearr_13722_13781[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (32))){
var inst_13664 = (state_13705[(14)]);
var state_13705__$1 = state_13705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13705__$1,(35),out,inst_13664);
} else {
if((state_val_13706 === (33))){
var inst_13657 = (state_13705[(12)]);
var inst_13635 = inst_13657;
var state_13705__$1 = (function (){var statearr_13723 = state_13705;
(statearr_13723[(7)] = inst_13635);

return statearr_13723;
})();
var statearr_13724_13782 = state_13705__$1;
(statearr_13724_13782[(2)] = null);

(statearr_13724_13782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (13))){
var inst_13635 = (state_13705[(7)]);
var inst_13642 = inst_13635.cljs$lang$protocol_mask$partition0$;
var inst_13643 = (inst_13642 & (64));
var inst_13644 = inst_13635.cljs$core$ISeq$;
var inst_13645 = (inst_13643) || (inst_13644);
var state_13705__$1 = state_13705;
if(cljs.core.truth_(inst_13645)){
var statearr_13725_13783 = state_13705__$1;
(statearr_13725_13783[(1)] = (16));

} else {
var statearr_13726_13784 = state_13705__$1;
(statearr_13726_13784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (22))){
var inst_13665 = (state_13705[(10)]);
var inst_13664 = (state_13705[(14)]);
var inst_13663 = (state_13705[(2)]);
var inst_13664__$1 = cljs.core.nth.call(null,inst_13663,(0),null);
var inst_13665__$1 = cljs.core.nth.call(null,inst_13663,(1),null);
var inst_13666 = (inst_13664__$1 == null);
var inst_13667 = cljs.core._EQ_.call(null,inst_13665__$1,change);
var inst_13668 = (inst_13666) || (inst_13667);
var state_13705__$1 = (function (){var statearr_13727 = state_13705;
(statearr_13727[(10)] = inst_13665__$1);

(statearr_13727[(14)] = inst_13664__$1);

return statearr_13727;
})();
if(cljs.core.truth_(inst_13668)){
var statearr_13728_13785 = state_13705__$1;
(statearr_13728_13785[(1)] = (23));

} else {
var statearr_13729_13786 = state_13705__$1;
(statearr_13729_13786[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (36))){
var inst_13657 = (state_13705[(12)]);
var inst_13635 = inst_13657;
var state_13705__$1 = (function (){var statearr_13730 = state_13705;
(statearr_13730[(7)] = inst_13635);

return statearr_13730;
})();
var statearr_13731_13787 = state_13705__$1;
(statearr_13731_13787[(2)] = null);

(statearr_13731_13787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (29))){
var inst_13679 = (state_13705[(11)]);
var state_13705__$1 = state_13705;
var statearr_13732_13788 = state_13705__$1;
(statearr_13732_13788[(2)] = inst_13679);

(statearr_13732_13788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (6))){
var state_13705__$1 = state_13705;
var statearr_13733_13789 = state_13705__$1;
(statearr_13733_13789[(2)] = false);

(statearr_13733_13789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (28))){
var inst_13675 = (state_13705[(2)]);
var inst_13676 = calc_state.call(null);
var inst_13635 = inst_13676;
var state_13705__$1 = (function (){var statearr_13734 = state_13705;
(statearr_13734[(7)] = inst_13635);

(statearr_13734[(15)] = inst_13675);

return statearr_13734;
})();
var statearr_13735_13790 = state_13705__$1;
(statearr_13735_13790[(2)] = null);

(statearr_13735_13790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (25))){
var inst_13701 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
var statearr_13736_13791 = state_13705__$1;
(statearr_13736_13791[(2)] = inst_13701);

(statearr_13736_13791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (34))){
var inst_13699 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
var statearr_13737_13792 = state_13705__$1;
(statearr_13737_13792[(2)] = inst_13699);

(statearr_13737_13792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (17))){
var state_13705__$1 = state_13705;
var statearr_13738_13793 = state_13705__$1;
(statearr_13738_13793[(2)] = false);

(statearr_13738_13793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (3))){
var state_13705__$1 = state_13705;
var statearr_13739_13794 = state_13705__$1;
(statearr_13739_13794[(2)] = false);

(statearr_13739_13794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (12))){
var inst_13703 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13705__$1,inst_13703);
} else {
if((state_val_13706 === (2))){
var inst_13611 = (state_13705[(8)]);
var inst_13616 = inst_13611.cljs$lang$protocol_mask$partition0$;
var inst_13617 = (inst_13616 & (64));
var inst_13618 = inst_13611.cljs$core$ISeq$;
var inst_13619 = (inst_13617) || (inst_13618);
var state_13705__$1 = state_13705;
if(cljs.core.truth_(inst_13619)){
var statearr_13740_13795 = state_13705__$1;
(statearr_13740_13795[(1)] = (5));

} else {
var statearr_13741_13796 = state_13705__$1;
(statearr_13741_13796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (23))){
var inst_13664 = (state_13705[(14)]);
var inst_13670 = (inst_13664 == null);
var state_13705__$1 = state_13705;
if(cljs.core.truth_(inst_13670)){
var statearr_13742_13797 = state_13705__$1;
(statearr_13742_13797[(1)] = (26));

} else {
var statearr_13743_13798 = state_13705__$1;
(statearr_13743_13798[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (35))){
var inst_13690 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
if(cljs.core.truth_(inst_13690)){
var statearr_13744_13799 = state_13705__$1;
(statearr_13744_13799[(1)] = (36));

} else {
var statearr_13745_13800 = state_13705__$1;
(statearr_13745_13800[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (19))){
var inst_13635 = (state_13705[(7)]);
var inst_13654 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13635);
var state_13705__$1 = state_13705;
var statearr_13746_13801 = state_13705__$1;
(statearr_13746_13801[(2)] = inst_13654);

(statearr_13746_13801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (11))){
var inst_13635 = (state_13705[(7)]);
var inst_13639 = (inst_13635 == null);
var inst_13640 = cljs.core.not.call(null,inst_13639);
var state_13705__$1 = state_13705;
if(inst_13640){
var statearr_13747_13802 = state_13705__$1;
(statearr_13747_13802[(1)] = (13));

} else {
var statearr_13748_13803 = state_13705__$1;
(statearr_13748_13803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (9))){
var inst_13611 = (state_13705[(8)]);
var state_13705__$1 = state_13705;
var statearr_13749_13804 = state_13705__$1;
(statearr_13749_13804[(2)] = inst_13611);

(statearr_13749_13804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (5))){
var state_13705__$1 = state_13705;
var statearr_13750_13805 = state_13705__$1;
(statearr_13750_13805[(2)] = true);

(statearr_13750_13805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (14))){
var state_13705__$1 = state_13705;
var statearr_13751_13806 = state_13705__$1;
(statearr_13751_13806[(2)] = false);

(statearr_13751_13806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (26))){
var inst_13665 = (state_13705[(10)]);
var inst_13672 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13665);
var state_13705__$1 = state_13705;
var statearr_13752_13807 = state_13705__$1;
(statearr_13752_13807[(2)] = inst_13672);

(statearr_13752_13807[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (16))){
var state_13705__$1 = state_13705;
var statearr_13753_13808 = state_13705__$1;
(statearr_13753_13808[(2)] = true);

(statearr_13753_13808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (38))){
var inst_13695 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
var statearr_13754_13809 = state_13705__$1;
(statearr_13754_13809[(2)] = inst_13695);

(statearr_13754_13809[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (30))){
var inst_13658 = (state_13705[(9)]);
var inst_13665 = (state_13705[(10)]);
var inst_13659 = (state_13705[(13)]);
var inst_13682 = cljs.core.empty_QMARK_.call(null,inst_13658);
var inst_13683 = inst_13659.call(null,inst_13665);
var inst_13684 = cljs.core.not.call(null,inst_13683);
var inst_13685 = (inst_13682) && (inst_13684);
var state_13705__$1 = state_13705;
var statearr_13755_13810 = state_13705__$1;
(statearr_13755_13810[(2)] = inst_13685);

(statearr_13755_13810[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (10))){
var inst_13611 = (state_13705[(8)]);
var inst_13631 = (state_13705[(2)]);
var inst_13632 = cljs.core.get.call(null,inst_13631,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13633 = cljs.core.get.call(null,inst_13631,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13634 = cljs.core.get.call(null,inst_13631,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13635 = inst_13611;
var state_13705__$1 = (function (){var statearr_13756 = state_13705;
(statearr_13756[(16)] = inst_13634);

(statearr_13756[(7)] = inst_13635);

(statearr_13756[(17)] = inst_13632);

(statearr_13756[(18)] = inst_13633);

return statearr_13756;
})();
var statearr_13757_13811 = state_13705__$1;
(statearr_13757_13811[(2)] = null);

(statearr_13757_13811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (18))){
var inst_13649 = (state_13705[(2)]);
var state_13705__$1 = state_13705;
var statearr_13758_13812 = state_13705__$1;
(statearr_13758_13812[(2)] = inst_13649);

(statearr_13758_13812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (37))){
var state_13705__$1 = state_13705;
var statearr_13759_13813 = state_13705__$1;
(statearr_13759_13813[(2)] = null);

(statearr_13759_13813[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13706 === (8))){
var inst_13611 = (state_13705[(8)]);
var inst_13628 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13611);
var state_13705__$1 = state_13705;
var statearr_13760_13814 = state_13705__$1;
(statearr_13760_13814[(2)] = inst_13628);

(statearr_13760_13814[(1)] = (10));


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
});})(c__8375__auto___13768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8310__auto__,c__8375__auto___13768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8311__auto__ = null;
var cljs$core$async$mix_$_state_machine__8311__auto____0 = (function (){
var statearr_13764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13764[(0)] = cljs$core$async$mix_$_state_machine__8311__auto__);

(statearr_13764[(1)] = (1));

return statearr_13764;
});
var cljs$core$async$mix_$_state_machine__8311__auto____1 = (function (state_13705){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_13705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e13765){if((e13765 instanceof Object)){
var ex__8314__auto__ = e13765;
var statearr_13766_13815 = state_13705;
(statearr_13766_13815[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13816 = state_13705;
state_13705 = G__13816;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8311__auto__ = function(state_13705){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8311__auto____1.call(this,state_13705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8311__auto____0;
cljs$core$async$mix_$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8311__auto____1;
return cljs$core$async$mix_$_state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___13768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8377__auto__ = (function (){var statearr_13767 = f__8376__auto__.call(null);
(statearr_13767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___13768);

return statearr_13767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___13768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5224__auto__ = (((p == null))?null:p);
var m__5225__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5225__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5224__auto__ = (((p == null))?null:p);
var m__5225__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,p,v,ch);
} else {
var m__5225__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13817 = [];
var len__5627__auto___13820 = arguments.length;
var i__5628__auto___13821 = (0);
while(true){
if((i__5628__auto___13821 < len__5627__auto___13820)){
args13817.push((arguments[i__5628__auto___13821]));

var G__13822 = (i__5628__auto___13821 + (1));
i__5628__auto___13821 = G__13822;
continue;
} else {
}
break;
}

var G__13819 = args13817.length;
switch (G__13819) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13817.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5224__auto__ = (((p == null))?null:p);
var m__5225__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,p);
} else {
var m__5225__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5224__auto__ = (((p == null))?null:p);
var m__5225__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5224__auto__)]);
if(!((m__5225__auto__ == null))){
return m__5225__auto__.call(null,p,v);
} else {
var m__5225__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5225__auto____$1 == null))){
return m__5225__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args13825 = [];
var len__5627__auto___13950 = arguments.length;
var i__5628__auto___13951 = (0);
while(true){
if((i__5628__auto___13951 < len__5627__auto___13950)){
args13825.push((arguments[i__5628__auto___13951]));

var G__13952 = (i__5628__auto___13951 + (1));
i__5628__auto___13951 = G__13952;
continue;
} else {
}
break;
}

var G__13827 = args13825.length;
switch (G__13827) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13825.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4569__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4569__auto__)){
return or__4569__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4569__auto__,mults){
return (function (p1__13824_SHARP_){
if(cljs.core.truth_(p1__13824_SHARP_.call(null,topic))){
return p1__13824_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13824_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4569__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13828 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13829){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13829 = meta13829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13830,meta13829__$1){
var self__ = this;
var _13830__$1 = this;
return (new cljs.core.async.t_cljs$core$async13828(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13829__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13830){
var self__ = this;
var _13830__$1 = this;
return self__.meta13829;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13829","meta13829",-1552612763,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13828";

cljs.core.async.t_cljs$core$async13828.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async13828");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13828 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13828(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13829){
return (new cljs.core.async.t_cljs$core$async13828(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13829));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13828(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8375__auto___13954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___13954,mults,ensure_mult,p){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___13954,mults,ensure_mult,p){
return (function (state_13902){
var state_val_13903 = (state_13902[(1)]);
if((state_val_13903 === (7))){
var inst_13898 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
var statearr_13904_13955 = state_13902__$1;
(statearr_13904_13955[(2)] = inst_13898);

(statearr_13904_13955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (20))){
var state_13902__$1 = state_13902;
var statearr_13905_13956 = state_13902__$1;
(statearr_13905_13956[(2)] = null);

(statearr_13905_13956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (1))){
var state_13902__$1 = state_13902;
var statearr_13906_13957 = state_13902__$1;
(statearr_13906_13957[(2)] = null);

(statearr_13906_13957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (24))){
var inst_13881 = (state_13902[(7)]);
var inst_13890 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13881);
var state_13902__$1 = state_13902;
var statearr_13907_13958 = state_13902__$1;
(statearr_13907_13958[(2)] = inst_13890);

(statearr_13907_13958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (4))){
var inst_13833 = (state_13902[(8)]);
var inst_13833__$1 = (state_13902[(2)]);
var inst_13834 = (inst_13833__$1 == null);
var state_13902__$1 = (function (){var statearr_13908 = state_13902;
(statearr_13908[(8)] = inst_13833__$1);

return statearr_13908;
})();
if(cljs.core.truth_(inst_13834)){
var statearr_13909_13959 = state_13902__$1;
(statearr_13909_13959[(1)] = (5));

} else {
var statearr_13910_13960 = state_13902__$1;
(statearr_13910_13960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (15))){
var inst_13875 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
var statearr_13911_13961 = state_13902__$1;
(statearr_13911_13961[(2)] = inst_13875);

(statearr_13911_13961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (21))){
var inst_13895 = (state_13902[(2)]);
var state_13902__$1 = (function (){var statearr_13912 = state_13902;
(statearr_13912[(9)] = inst_13895);

return statearr_13912;
})();
var statearr_13913_13962 = state_13902__$1;
(statearr_13913_13962[(2)] = null);

(statearr_13913_13962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (13))){
var inst_13857 = (state_13902[(10)]);
var inst_13859 = cljs.core.chunked_seq_QMARK_.call(null,inst_13857);
var state_13902__$1 = state_13902;
if(inst_13859){
var statearr_13914_13963 = state_13902__$1;
(statearr_13914_13963[(1)] = (16));

} else {
var statearr_13915_13964 = state_13902__$1;
(statearr_13915_13964[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (22))){
var inst_13887 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
if(cljs.core.truth_(inst_13887)){
var statearr_13916_13965 = state_13902__$1;
(statearr_13916_13965[(1)] = (23));

} else {
var statearr_13917_13966 = state_13902__$1;
(statearr_13917_13966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (6))){
var inst_13883 = (state_13902[(11)]);
var inst_13833 = (state_13902[(8)]);
var inst_13881 = (state_13902[(7)]);
var inst_13881__$1 = topic_fn.call(null,inst_13833);
var inst_13882 = cljs.core.deref.call(null,mults);
var inst_13883__$1 = cljs.core.get.call(null,inst_13882,inst_13881__$1);
var state_13902__$1 = (function (){var statearr_13918 = state_13902;
(statearr_13918[(11)] = inst_13883__$1);

(statearr_13918[(7)] = inst_13881__$1);

return statearr_13918;
})();
if(cljs.core.truth_(inst_13883__$1)){
var statearr_13919_13967 = state_13902__$1;
(statearr_13919_13967[(1)] = (19));

} else {
var statearr_13920_13968 = state_13902__$1;
(statearr_13920_13968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (25))){
var inst_13892 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
var statearr_13921_13969 = state_13902__$1;
(statearr_13921_13969[(2)] = inst_13892);

(statearr_13921_13969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (17))){
var inst_13857 = (state_13902[(10)]);
var inst_13866 = cljs.core.first.call(null,inst_13857);
var inst_13867 = cljs.core.async.muxch_STAR_.call(null,inst_13866);
var inst_13868 = cljs.core.async.close_BANG_.call(null,inst_13867);
var inst_13869 = cljs.core.next.call(null,inst_13857);
var inst_13843 = inst_13869;
var inst_13844 = null;
var inst_13845 = (0);
var inst_13846 = (0);
var state_13902__$1 = (function (){var statearr_13922 = state_13902;
(statearr_13922[(12)] = inst_13844);

(statearr_13922[(13)] = inst_13868);

(statearr_13922[(14)] = inst_13845);

(statearr_13922[(15)] = inst_13846);

(statearr_13922[(16)] = inst_13843);

return statearr_13922;
})();
var statearr_13923_13970 = state_13902__$1;
(statearr_13923_13970[(2)] = null);

(statearr_13923_13970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (3))){
var inst_13900 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13902__$1,inst_13900);
} else {
if((state_val_13903 === (12))){
var inst_13877 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
var statearr_13924_13971 = state_13902__$1;
(statearr_13924_13971[(2)] = inst_13877);

(statearr_13924_13971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (2))){
var state_13902__$1 = state_13902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13902__$1,(4),ch);
} else {
if((state_val_13903 === (23))){
var state_13902__$1 = state_13902;
var statearr_13925_13972 = state_13902__$1;
(statearr_13925_13972[(2)] = null);

(statearr_13925_13972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (19))){
var inst_13883 = (state_13902[(11)]);
var inst_13833 = (state_13902[(8)]);
var inst_13885 = cljs.core.async.muxch_STAR_.call(null,inst_13883);
var state_13902__$1 = state_13902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13902__$1,(22),inst_13885,inst_13833);
} else {
if((state_val_13903 === (11))){
var inst_13857 = (state_13902[(10)]);
var inst_13843 = (state_13902[(16)]);
var inst_13857__$1 = cljs.core.seq.call(null,inst_13843);
var state_13902__$1 = (function (){var statearr_13926 = state_13902;
(statearr_13926[(10)] = inst_13857__$1);

return statearr_13926;
})();
if(inst_13857__$1){
var statearr_13927_13973 = state_13902__$1;
(statearr_13927_13973[(1)] = (13));

} else {
var statearr_13928_13974 = state_13902__$1;
(statearr_13928_13974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (9))){
var inst_13879 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
var statearr_13929_13975 = state_13902__$1;
(statearr_13929_13975[(2)] = inst_13879);

(statearr_13929_13975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (5))){
var inst_13840 = cljs.core.deref.call(null,mults);
var inst_13841 = cljs.core.vals.call(null,inst_13840);
var inst_13842 = cljs.core.seq.call(null,inst_13841);
var inst_13843 = inst_13842;
var inst_13844 = null;
var inst_13845 = (0);
var inst_13846 = (0);
var state_13902__$1 = (function (){var statearr_13930 = state_13902;
(statearr_13930[(12)] = inst_13844);

(statearr_13930[(14)] = inst_13845);

(statearr_13930[(15)] = inst_13846);

(statearr_13930[(16)] = inst_13843);

return statearr_13930;
})();
var statearr_13931_13976 = state_13902__$1;
(statearr_13931_13976[(2)] = null);

(statearr_13931_13976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (14))){
var state_13902__$1 = state_13902;
var statearr_13935_13977 = state_13902__$1;
(statearr_13935_13977[(2)] = null);

(statearr_13935_13977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (16))){
var inst_13857 = (state_13902[(10)]);
var inst_13861 = cljs.core.chunk_first.call(null,inst_13857);
var inst_13862 = cljs.core.chunk_rest.call(null,inst_13857);
var inst_13863 = cljs.core.count.call(null,inst_13861);
var inst_13843 = inst_13862;
var inst_13844 = inst_13861;
var inst_13845 = inst_13863;
var inst_13846 = (0);
var state_13902__$1 = (function (){var statearr_13936 = state_13902;
(statearr_13936[(12)] = inst_13844);

(statearr_13936[(14)] = inst_13845);

(statearr_13936[(15)] = inst_13846);

(statearr_13936[(16)] = inst_13843);

return statearr_13936;
})();
var statearr_13937_13978 = state_13902__$1;
(statearr_13937_13978[(2)] = null);

(statearr_13937_13978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (10))){
var inst_13844 = (state_13902[(12)]);
var inst_13845 = (state_13902[(14)]);
var inst_13846 = (state_13902[(15)]);
var inst_13843 = (state_13902[(16)]);
var inst_13851 = cljs.core._nth.call(null,inst_13844,inst_13846);
var inst_13852 = cljs.core.async.muxch_STAR_.call(null,inst_13851);
var inst_13853 = cljs.core.async.close_BANG_.call(null,inst_13852);
var inst_13854 = (inst_13846 + (1));
var tmp13932 = inst_13844;
var tmp13933 = inst_13845;
var tmp13934 = inst_13843;
var inst_13843__$1 = tmp13934;
var inst_13844__$1 = tmp13932;
var inst_13845__$1 = tmp13933;
var inst_13846__$1 = inst_13854;
var state_13902__$1 = (function (){var statearr_13938 = state_13902;
(statearr_13938[(17)] = inst_13853);

(statearr_13938[(12)] = inst_13844__$1);

(statearr_13938[(14)] = inst_13845__$1);

(statearr_13938[(15)] = inst_13846__$1);

(statearr_13938[(16)] = inst_13843__$1);

return statearr_13938;
})();
var statearr_13939_13979 = state_13902__$1;
(statearr_13939_13979[(2)] = null);

(statearr_13939_13979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (18))){
var inst_13872 = (state_13902[(2)]);
var state_13902__$1 = state_13902;
var statearr_13940_13980 = state_13902__$1;
(statearr_13940_13980[(2)] = inst_13872);

(statearr_13940_13980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13903 === (8))){
var inst_13845 = (state_13902[(14)]);
var inst_13846 = (state_13902[(15)]);
var inst_13848 = (inst_13846 < inst_13845);
var inst_13849 = inst_13848;
var state_13902__$1 = state_13902;
if(cljs.core.truth_(inst_13849)){
var statearr_13941_13981 = state_13902__$1;
(statearr_13941_13981[(1)] = (10));

} else {
var statearr_13942_13982 = state_13902__$1;
(statearr_13942_13982[(1)] = (11));

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
});})(c__8375__auto___13954,mults,ensure_mult,p))
;
return ((function (switch__8310__auto__,c__8375__auto___13954,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_13946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13946[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_13946[(1)] = (1));

return statearr_13946;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_13902){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_13902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e13947){if((e13947 instanceof Object)){
var ex__8314__auto__ = e13947;
var statearr_13948_13983 = state_13902;
(statearr_13948_13983[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13984 = state_13902;
state_13902 = G__13984;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_13902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_13902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___13954,mults,ensure_mult,p))
})();
var state__8377__auto__ = (function (){var statearr_13949 = f__8376__auto__.call(null);
(statearr_13949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___13954);

return statearr_13949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___13954,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args13985 = [];
var len__5627__auto___13988 = arguments.length;
var i__5628__auto___13989 = (0);
while(true){
if((i__5628__auto___13989 < len__5627__auto___13988)){
args13985.push((arguments[i__5628__auto___13989]));

var G__13990 = (i__5628__auto___13989 + (1));
i__5628__auto___13989 = G__13990;
continue;
} else {
}
break;
}

var G__13987 = args13985.length;
switch (G__13987) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13985.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args13992 = [];
var len__5627__auto___13995 = arguments.length;
var i__5628__auto___13996 = (0);
while(true){
if((i__5628__auto___13996 < len__5627__auto___13995)){
args13992.push((arguments[i__5628__auto___13996]));

var G__13997 = (i__5628__auto___13996 + (1));
i__5628__auto___13996 = G__13997;
continue;
} else {
}
break;
}

var G__13994 = args13992.length;
switch (G__13994) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13992.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args13999 = [];
var len__5627__auto___14070 = arguments.length;
var i__5628__auto___14071 = (0);
while(true){
if((i__5628__auto___14071 < len__5627__auto___14070)){
args13999.push((arguments[i__5628__auto___14071]));

var G__14072 = (i__5628__auto___14071 + (1));
i__5628__auto___14071 = G__14072;
continue;
} else {
}
break;
}

var G__14001 = args13999.length;
switch (G__14001) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13999.length)].join('')));

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
var c__8375__auto___14074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___14074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___14074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14040){
var state_val_14041 = (state_14040[(1)]);
if((state_val_14041 === (7))){
var state_14040__$1 = state_14040;
var statearr_14042_14075 = state_14040__$1;
(statearr_14042_14075[(2)] = null);

(statearr_14042_14075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (1))){
var state_14040__$1 = state_14040;
var statearr_14043_14076 = state_14040__$1;
(statearr_14043_14076[(2)] = null);

(statearr_14043_14076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (4))){
var inst_14004 = (state_14040[(7)]);
var inst_14006 = (inst_14004 < cnt);
var state_14040__$1 = state_14040;
if(cljs.core.truth_(inst_14006)){
var statearr_14044_14077 = state_14040__$1;
(statearr_14044_14077[(1)] = (6));

} else {
var statearr_14045_14078 = state_14040__$1;
(statearr_14045_14078[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (15))){
var inst_14036 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
var statearr_14046_14079 = state_14040__$1;
(statearr_14046_14079[(2)] = inst_14036);

(statearr_14046_14079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (13))){
var inst_14029 = cljs.core.async.close_BANG_.call(null,out);
var state_14040__$1 = state_14040;
var statearr_14047_14080 = state_14040__$1;
(statearr_14047_14080[(2)] = inst_14029);

(statearr_14047_14080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (6))){
var state_14040__$1 = state_14040;
var statearr_14048_14081 = state_14040__$1;
(statearr_14048_14081[(2)] = null);

(statearr_14048_14081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (3))){
var inst_14038 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14040__$1,inst_14038);
} else {
if((state_val_14041 === (12))){
var inst_14026 = (state_14040[(8)]);
var inst_14026__$1 = (state_14040[(2)]);
var inst_14027 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14026__$1);
var state_14040__$1 = (function (){var statearr_14049 = state_14040;
(statearr_14049[(8)] = inst_14026__$1);

return statearr_14049;
})();
if(cljs.core.truth_(inst_14027)){
var statearr_14050_14082 = state_14040__$1;
(statearr_14050_14082[(1)] = (13));

} else {
var statearr_14051_14083 = state_14040__$1;
(statearr_14051_14083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (2))){
var inst_14003 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14004 = (0);
var state_14040__$1 = (function (){var statearr_14052 = state_14040;
(statearr_14052[(7)] = inst_14004);

(statearr_14052[(9)] = inst_14003);

return statearr_14052;
})();
var statearr_14053_14084 = state_14040__$1;
(statearr_14053_14084[(2)] = null);

(statearr_14053_14084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (11))){
var inst_14004 = (state_14040[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14040,(10),Object,null,(9));
var inst_14013 = chs__$1.call(null,inst_14004);
var inst_14014 = done.call(null,inst_14004);
var inst_14015 = cljs.core.async.take_BANG_.call(null,inst_14013,inst_14014);
var state_14040__$1 = state_14040;
var statearr_14054_14085 = state_14040__$1;
(statearr_14054_14085[(2)] = inst_14015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (9))){
var inst_14004 = (state_14040[(7)]);
var inst_14017 = (state_14040[(2)]);
var inst_14018 = (inst_14004 + (1));
var inst_14004__$1 = inst_14018;
var state_14040__$1 = (function (){var statearr_14055 = state_14040;
(statearr_14055[(7)] = inst_14004__$1);

(statearr_14055[(10)] = inst_14017);

return statearr_14055;
})();
var statearr_14056_14086 = state_14040__$1;
(statearr_14056_14086[(2)] = null);

(statearr_14056_14086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (5))){
var inst_14024 = (state_14040[(2)]);
var state_14040__$1 = (function (){var statearr_14057 = state_14040;
(statearr_14057[(11)] = inst_14024);

return statearr_14057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14040__$1,(12),dchan);
} else {
if((state_val_14041 === (14))){
var inst_14026 = (state_14040[(8)]);
var inst_14031 = cljs.core.apply.call(null,f,inst_14026);
var state_14040__$1 = state_14040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14040__$1,(16),out,inst_14031);
} else {
if((state_val_14041 === (16))){
var inst_14033 = (state_14040[(2)]);
var state_14040__$1 = (function (){var statearr_14058 = state_14040;
(statearr_14058[(12)] = inst_14033);

return statearr_14058;
})();
var statearr_14059_14087 = state_14040__$1;
(statearr_14059_14087[(2)] = null);

(statearr_14059_14087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (10))){
var inst_14008 = (state_14040[(2)]);
var inst_14009 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14040__$1 = (function (){var statearr_14060 = state_14040;
(statearr_14060[(13)] = inst_14008);

return statearr_14060;
})();
var statearr_14061_14088 = state_14040__$1;
(statearr_14061_14088[(2)] = inst_14009);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (8))){
var inst_14022 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
var statearr_14062_14089 = state_14040__$1;
(statearr_14062_14089[(2)] = inst_14022);

(statearr_14062_14089[(1)] = (5));


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
});})(c__8375__auto___14074,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8310__auto__,c__8375__auto___14074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_14066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14066[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_14066[(1)] = (1));

return statearr_14066;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_14040){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14067){if((e14067 instanceof Object)){
var ex__8314__auto__ = e14067;
var statearr_14068_14090 = state_14040;
(statearr_14068_14090[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14091 = state_14040;
state_14040 = G__14091;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_14040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_14040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___14074,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8377__auto__ = (function (){var statearr_14069 = f__8376__auto__.call(null);
(statearr_14069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___14074);

return statearr_14069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___14074,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14093 = [];
var len__5627__auto___14149 = arguments.length;
var i__5628__auto___14150 = (0);
while(true){
if((i__5628__auto___14150 < len__5627__auto___14149)){
args14093.push((arguments[i__5628__auto___14150]));

var G__14151 = (i__5628__auto___14150 + (1));
i__5628__auto___14150 = G__14151;
continue;
} else {
}
break;
}

var G__14095 = args14093.length;
switch (G__14095) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14093.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8375__auto___14153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___14153,out){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___14153,out){
return (function (state_14125){
var state_val_14126 = (state_14125[(1)]);
if((state_val_14126 === (7))){
var inst_14104 = (state_14125[(7)]);
var inst_14105 = (state_14125[(8)]);
var inst_14104__$1 = (state_14125[(2)]);
var inst_14105__$1 = cljs.core.nth.call(null,inst_14104__$1,(0),null);
var inst_14106 = cljs.core.nth.call(null,inst_14104__$1,(1),null);
var inst_14107 = (inst_14105__$1 == null);
var state_14125__$1 = (function (){var statearr_14127 = state_14125;
(statearr_14127[(7)] = inst_14104__$1);

(statearr_14127[(8)] = inst_14105__$1);

(statearr_14127[(9)] = inst_14106);

return statearr_14127;
})();
if(cljs.core.truth_(inst_14107)){
var statearr_14128_14154 = state_14125__$1;
(statearr_14128_14154[(1)] = (8));

} else {
var statearr_14129_14155 = state_14125__$1;
(statearr_14129_14155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (1))){
var inst_14096 = cljs.core.vec.call(null,chs);
var inst_14097 = inst_14096;
var state_14125__$1 = (function (){var statearr_14130 = state_14125;
(statearr_14130[(10)] = inst_14097);

return statearr_14130;
})();
var statearr_14131_14156 = state_14125__$1;
(statearr_14131_14156[(2)] = null);

(statearr_14131_14156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (4))){
var inst_14097 = (state_14125[(10)]);
var state_14125__$1 = state_14125;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14125__$1,(7),inst_14097);
} else {
if((state_val_14126 === (6))){
var inst_14121 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
var statearr_14132_14157 = state_14125__$1;
(statearr_14132_14157[(2)] = inst_14121);

(statearr_14132_14157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (3))){
var inst_14123 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14125__$1,inst_14123);
} else {
if((state_val_14126 === (2))){
var inst_14097 = (state_14125[(10)]);
var inst_14099 = cljs.core.count.call(null,inst_14097);
var inst_14100 = (inst_14099 > (0));
var state_14125__$1 = state_14125;
if(cljs.core.truth_(inst_14100)){
var statearr_14134_14158 = state_14125__$1;
(statearr_14134_14158[(1)] = (4));

} else {
var statearr_14135_14159 = state_14125__$1;
(statearr_14135_14159[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (11))){
var inst_14097 = (state_14125[(10)]);
var inst_14114 = (state_14125[(2)]);
var tmp14133 = inst_14097;
var inst_14097__$1 = tmp14133;
var state_14125__$1 = (function (){var statearr_14136 = state_14125;
(statearr_14136[(11)] = inst_14114);

(statearr_14136[(10)] = inst_14097__$1);

return statearr_14136;
})();
var statearr_14137_14160 = state_14125__$1;
(statearr_14137_14160[(2)] = null);

(statearr_14137_14160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (9))){
var inst_14105 = (state_14125[(8)]);
var state_14125__$1 = state_14125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14125__$1,(11),out,inst_14105);
} else {
if((state_val_14126 === (5))){
var inst_14119 = cljs.core.async.close_BANG_.call(null,out);
var state_14125__$1 = state_14125;
var statearr_14138_14161 = state_14125__$1;
(statearr_14138_14161[(2)] = inst_14119);

(statearr_14138_14161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (10))){
var inst_14117 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
var statearr_14139_14162 = state_14125__$1;
(statearr_14139_14162[(2)] = inst_14117);

(statearr_14139_14162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (8))){
var inst_14104 = (state_14125[(7)]);
var inst_14105 = (state_14125[(8)]);
var inst_14106 = (state_14125[(9)]);
var inst_14097 = (state_14125[(10)]);
var inst_14109 = (function (){var cs = inst_14097;
var vec__14102 = inst_14104;
var v = inst_14105;
var c = inst_14106;
return ((function (cs,vec__14102,v,c,inst_14104,inst_14105,inst_14106,inst_14097,state_val_14126,c__8375__auto___14153,out){
return (function (p1__14092_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14092_SHARP_);
});
;})(cs,vec__14102,v,c,inst_14104,inst_14105,inst_14106,inst_14097,state_val_14126,c__8375__auto___14153,out))
})();
var inst_14110 = cljs.core.filterv.call(null,inst_14109,inst_14097);
var inst_14097__$1 = inst_14110;
var state_14125__$1 = (function (){var statearr_14140 = state_14125;
(statearr_14140[(10)] = inst_14097__$1);

return statearr_14140;
})();
var statearr_14141_14163 = state_14125__$1;
(statearr_14141_14163[(2)] = null);

(statearr_14141_14163[(1)] = (2));


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
});})(c__8375__auto___14153,out))
;
return ((function (switch__8310__auto__,c__8375__auto___14153,out){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_14145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14145[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_14145[(1)] = (1));

return statearr_14145;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_14125){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14146){if((e14146 instanceof Object)){
var ex__8314__auto__ = e14146;
var statearr_14147_14164 = state_14125;
(statearr_14147_14164[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14165 = state_14125;
state_14125 = G__14165;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_14125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_14125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___14153,out))
})();
var state__8377__auto__ = (function (){var statearr_14148 = f__8376__auto__.call(null);
(statearr_14148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___14153);

return statearr_14148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___14153,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14166 = [];
var len__5627__auto___14215 = arguments.length;
var i__5628__auto___14216 = (0);
while(true){
if((i__5628__auto___14216 < len__5627__auto___14215)){
args14166.push((arguments[i__5628__auto___14216]));

var G__14217 = (i__5628__auto___14216 + (1));
i__5628__auto___14216 = G__14217;
continue;
} else {
}
break;
}

var G__14168 = args14166.length;
switch (G__14168) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14166.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8375__auto___14219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___14219,out){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___14219,out){
return (function (state_14192){
var state_val_14193 = (state_14192[(1)]);
if((state_val_14193 === (7))){
var inst_14174 = (state_14192[(7)]);
var inst_14174__$1 = (state_14192[(2)]);
var inst_14175 = (inst_14174__$1 == null);
var inst_14176 = cljs.core.not.call(null,inst_14175);
var state_14192__$1 = (function (){var statearr_14194 = state_14192;
(statearr_14194[(7)] = inst_14174__$1);

return statearr_14194;
})();
if(inst_14176){
var statearr_14195_14220 = state_14192__$1;
(statearr_14195_14220[(1)] = (8));

} else {
var statearr_14196_14221 = state_14192__$1;
(statearr_14196_14221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (1))){
var inst_14169 = (0);
var state_14192__$1 = (function (){var statearr_14197 = state_14192;
(statearr_14197[(8)] = inst_14169);

return statearr_14197;
})();
var statearr_14198_14222 = state_14192__$1;
(statearr_14198_14222[(2)] = null);

(statearr_14198_14222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (4))){
var state_14192__$1 = state_14192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14192__$1,(7),ch);
} else {
if((state_val_14193 === (6))){
var inst_14187 = (state_14192[(2)]);
var state_14192__$1 = state_14192;
var statearr_14199_14223 = state_14192__$1;
(statearr_14199_14223[(2)] = inst_14187);

(statearr_14199_14223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (3))){
var inst_14189 = (state_14192[(2)]);
var inst_14190 = cljs.core.async.close_BANG_.call(null,out);
var state_14192__$1 = (function (){var statearr_14200 = state_14192;
(statearr_14200[(9)] = inst_14189);

return statearr_14200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14192__$1,inst_14190);
} else {
if((state_val_14193 === (2))){
var inst_14169 = (state_14192[(8)]);
var inst_14171 = (inst_14169 < n);
var state_14192__$1 = state_14192;
if(cljs.core.truth_(inst_14171)){
var statearr_14201_14224 = state_14192__$1;
(statearr_14201_14224[(1)] = (4));

} else {
var statearr_14202_14225 = state_14192__$1;
(statearr_14202_14225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (11))){
var inst_14169 = (state_14192[(8)]);
var inst_14179 = (state_14192[(2)]);
var inst_14180 = (inst_14169 + (1));
var inst_14169__$1 = inst_14180;
var state_14192__$1 = (function (){var statearr_14203 = state_14192;
(statearr_14203[(8)] = inst_14169__$1);

(statearr_14203[(10)] = inst_14179);

return statearr_14203;
})();
var statearr_14204_14226 = state_14192__$1;
(statearr_14204_14226[(2)] = null);

(statearr_14204_14226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (9))){
var state_14192__$1 = state_14192;
var statearr_14205_14227 = state_14192__$1;
(statearr_14205_14227[(2)] = null);

(statearr_14205_14227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (5))){
var state_14192__$1 = state_14192;
var statearr_14206_14228 = state_14192__$1;
(statearr_14206_14228[(2)] = null);

(statearr_14206_14228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (10))){
var inst_14184 = (state_14192[(2)]);
var state_14192__$1 = state_14192;
var statearr_14207_14229 = state_14192__$1;
(statearr_14207_14229[(2)] = inst_14184);

(statearr_14207_14229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14193 === (8))){
var inst_14174 = (state_14192[(7)]);
var state_14192__$1 = state_14192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14192__$1,(11),out,inst_14174);
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
});})(c__8375__auto___14219,out))
;
return ((function (switch__8310__auto__,c__8375__auto___14219,out){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_14211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14211[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_14211[(1)] = (1));

return statearr_14211;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_14192){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14212){if((e14212 instanceof Object)){
var ex__8314__auto__ = e14212;
var statearr_14213_14230 = state_14192;
(statearr_14213_14230[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14231 = state_14192;
state_14192 = G__14231;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_14192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_14192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___14219,out))
})();
var state__8377__auto__ = (function (){var statearr_14214 = f__8376__auto__.call(null);
(statearr_14214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___14219);

return statearr_14214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___14219,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14239 = (function (map_LT_,f,ch,meta14240){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14240 = meta14240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14241,meta14240__$1){
var self__ = this;
var _14241__$1 = this;
return (new cljs.core.async.t_cljs$core$async14239(self__.map_LT_,self__.f,self__.ch,meta14240__$1));
});

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14241){
var self__ = this;
var _14241__$1 = this;
return self__.meta14240;
});

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14242 = (function (map_LT_,f,ch,meta14240,_,fn1,meta14243){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14240 = meta14240;
this._ = _;
this.fn1 = fn1;
this.meta14243 = meta14243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14244,meta14243__$1){
var self__ = this;
var _14244__$1 = this;
return (new cljs.core.async.t_cljs$core$async14242(self__.map_LT_,self__.f,self__.ch,self__.meta14240,self__._,self__.fn1,meta14243__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14244){
var self__ = this;
var _14244__$1 = this;
return self__.meta14243;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14232_SHARP_){
return f1.call(null,(((p1__14232_SHARP_ == null))?null:self__.f.call(null,p1__14232_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14242.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14240","meta14240",-579557966,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14239","cljs.core.async/t_cljs$core$async14239",917868298,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14243","meta14243",-1746669448,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14242";

cljs.core.async.t_cljs$core$async14242.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async14242");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14242 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14242(map_LT___$1,f__$1,ch__$1,meta14240__$1,___$2,fn1__$1,meta14243){
return (new cljs.core.async.t_cljs$core$async14242(map_LT___$1,f__$1,ch__$1,meta14240__$1,___$2,fn1__$1,meta14243));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14242(self__.map_LT_,self__.f,self__.ch,self__.meta14240,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4557__auto__ = ret;
if(cljs.core.truth_(and__4557__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4557__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14240","meta14240",-579557966,null)], null);
});

cljs.core.async.t_cljs$core$async14239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14239";

cljs.core.async.t_cljs$core$async14239.cljs$lang$ctorPrWriter = (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async14239");
});

cljs.core.async.__GT_t_cljs$core$async14239 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14239(map_LT___$1,f__$1,ch__$1,meta14240){
return (new cljs.core.async.t_cljs$core$async14239(map_LT___$1,f__$1,ch__$1,meta14240));
});

}

return (new cljs.core.async.t_cljs$core$async14239(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14248 = (function (map_GT_,f,ch,meta14249){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14249 = meta14249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14250,meta14249__$1){
var self__ = this;
var _14250__$1 = this;
return (new cljs.core.async.t_cljs$core$async14248(self__.map_GT_,self__.f,self__.ch,meta14249__$1));
});

cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14250){
var self__ = this;
var _14250__$1 = this;
return self__.meta14249;
});

cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14249","meta14249",1174565603,null)], null);
});

cljs.core.async.t_cljs$core$async14248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14248";

cljs.core.async.t_cljs$core$async14248.cljs$lang$ctorPrWriter = (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async14248");
});

cljs.core.async.__GT_t_cljs$core$async14248 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14248(map_GT___$1,f__$1,ch__$1,meta14249){
return (new cljs.core.async.t_cljs$core$async14248(map_GT___$1,f__$1,ch__$1,meta14249));
});

}

return (new cljs.core.async.t_cljs$core$async14248(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14254 = (function (filter_GT_,p,ch,meta14255){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14255 = meta14255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14256,meta14255__$1){
var self__ = this;
var _14256__$1 = this;
return (new cljs.core.async.t_cljs$core$async14254(self__.filter_GT_,self__.p,self__.ch,meta14255__$1));
});

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14256){
var self__ = this;
var _14256__$1 = this;
return self__.meta14255;
});

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14255","meta14255",1572178678,null)], null);
});

cljs.core.async.t_cljs$core$async14254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14254";

cljs.core.async.t_cljs$core$async14254.cljs$lang$ctorPrWriter = (function (this__5167__auto__,writer__5168__auto__,opt__5169__auto__){
return cljs.core._write.call(null,writer__5168__auto__,"cljs.core.async/t_cljs$core$async14254");
});

cljs.core.async.__GT_t_cljs$core$async14254 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14254(filter_GT___$1,p__$1,ch__$1,meta14255){
return (new cljs.core.async.t_cljs$core$async14254(filter_GT___$1,p__$1,ch__$1,meta14255));
});

}

return (new cljs.core.async.t_cljs$core$async14254(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14257 = [];
var len__5627__auto___14301 = arguments.length;
var i__5628__auto___14302 = (0);
while(true){
if((i__5628__auto___14302 < len__5627__auto___14301)){
args14257.push((arguments[i__5628__auto___14302]));

var G__14303 = (i__5628__auto___14302 + (1));
i__5628__auto___14302 = G__14303;
continue;
} else {
}
break;
}

var G__14259 = args14257.length;
switch (G__14259) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14257.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8375__auto___14305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___14305,out){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___14305,out){
return (function (state_14280){
var state_val_14281 = (state_14280[(1)]);
if((state_val_14281 === (7))){
var inst_14276 = (state_14280[(2)]);
var state_14280__$1 = state_14280;
var statearr_14282_14306 = state_14280__$1;
(statearr_14282_14306[(2)] = inst_14276);

(statearr_14282_14306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (1))){
var state_14280__$1 = state_14280;
var statearr_14283_14307 = state_14280__$1;
(statearr_14283_14307[(2)] = null);

(statearr_14283_14307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (4))){
var inst_14262 = (state_14280[(7)]);
var inst_14262__$1 = (state_14280[(2)]);
var inst_14263 = (inst_14262__$1 == null);
var state_14280__$1 = (function (){var statearr_14284 = state_14280;
(statearr_14284[(7)] = inst_14262__$1);

return statearr_14284;
})();
if(cljs.core.truth_(inst_14263)){
var statearr_14285_14308 = state_14280__$1;
(statearr_14285_14308[(1)] = (5));

} else {
var statearr_14286_14309 = state_14280__$1;
(statearr_14286_14309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (6))){
var inst_14262 = (state_14280[(7)]);
var inst_14267 = p.call(null,inst_14262);
var state_14280__$1 = state_14280;
if(cljs.core.truth_(inst_14267)){
var statearr_14287_14310 = state_14280__$1;
(statearr_14287_14310[(1)] = (8));

} else {
var statearr_14288_14311 = state_14280__$1;
(statearr_14288_14311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (3))){
var inst_14278 = (state_14280[(2)]);
var state_14280__$1 = state_14280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14280__$1,inst_14278);
} else {
if((state_val_14281 === (2))){
var state_14280__$1 = state_14280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14280__$1,(4),ch);
} else {
if((state_val_14281 === (11))){
var inst_14270 = (state_14280[(2)]);
var state_14280__$1 = state_14280;
var statearr_14289_14312 = state_14280__$1;
(statearr_14289_14312[(2)] = inst_14270);

(statearr_14289_14312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (9))){
var state_14280__$1 = state_14280;
var statearr_14290_14313 = state_14280__$1;
(statearr_14290_14313[(2)] = null);

(statearr_14290_14313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (5))){
var inst_14265 = cljs.core.async.close_BANG_.call(null,out);
var state_14280__$1 = state_14280;
var statearr_14291_14314 = state_14280__$1;
(statearr_14291_14314[(2)] = inst_14265);

(statearr_14291_14314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (10))){
var inst_14273 = (state_14280[(2)]);
var state_14280__$1 = (function (){var statearr_14292 = state_14280;
(statearr_14292[(8)] = inst_14273);

return statearr_14292;
})();
var statearr_14293_14315 = state_14280__$1;
(statearr_14293_14315[(2)] = null);

(statearr_14293_14315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14281 === (8))){
var inst_14262 = (state_14280[(7)]);
var state_14280__$1 = state_14280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14280__$1,(11),out,inst_14262);
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
});})(c__8375__auto___14305,out))
;
return ((function (switch__8310__auto__,c__8375__auto___14305,out){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_14297 = [null,null,null,null,null,null,null,null,null];
(statearr_14297[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_14297[(1)] = (1));

return statearr_14297;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_14280){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14298){if((e14298 instanceof Object)){
var ex__8314__auto__ = e14298;
var statearr_14299_14316 = state_14280;
(statearr_14299_14316[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14317 = state_14280;
state_14280 = G__14317;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_14280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_14280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___14305,out))
})();
var state__8377__auto__ = (function (){var statearr_14300 = f__8376__auto__.call(null);
(statearr_14300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___14305);

return statearr_14300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___14305,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14318 = [];
var len__5627__auto___14321 = arguments.length;
var i__5628__auto___14322 = (0);
while(true){
if((i__5628__auto___14322 < len__5627__auto___14321)){
args14318.push((arguments[i__5628__auto___14322]));

var G__14323 = (i__5628__auto___14322 + (1));
i__5628__auto___14322 = G__14323;
continue;
} else {
}
break;
}

var G__14320 = args14318.length;
switch (G__14320) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14318.length)].join('')));

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
var c__8375__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto__){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto__){
return (function (state_14490){
var state_val_14491 = (state_14490[(1)]);
if((state_val_14491 === (7))){
var inst_14486 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14492_14533 = state_14490__$1;
(statearr_14492_14533[(2)] = inst_14486);

(statearr_14492_14533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (20))){
var inst_14456 = (state_14490[(7)]);
var inst_14467 = (state_14490[(2)]);
var inst_14468 = cljs.core.next.call(null,inst_14456);
var inst_14442 = inst_14468;
var inst_14443 = null;
var inst_14444 = (0);
var inst_14445 = (0);
var state_14490__$1 = (function (){var statearr_14493 = state_14490;
(statearr_14493[(8)] = inst_14467);

(statearr_14493[(9)] = inst_14445);

(statearr_14493[(10)] = inst_14442);

(statearr_14493[(11)] = inst_14444);

(statearr_14493[(12)] = inst_14443);

return statearr_14493;
})();
var statearr_14494_14534 = state_14490__$1;
(statearr_14494_14534[(2)] = null);

(statearr_14494_14534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (1))){
var state_14490__$1 = state_14490;
var statearr_14495_14535 = state_14490__$1;
(statearr_14495_14535[(2)] = null);

(statearr_14495_14535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (4))){
var inst_14431 = (state_14490[(13)]);
var inst_14431__$1 = (state_14490[(2)]);
var inst_14432 = (inst_14431__$1 == null);
var state_14490__$1 = (function (){var statearr_14496 = state_14490;
(statearr_14496[(13)] = inst_14431__$1);

return statearr_14496;
})();
if(cljs.core.truth_(inst_14432)){
var statearr_14497_14536 = state_14490__$1;
(statearr_14497_14536[(1)] = (5));

} else {
var statearr_14498_14537 = state_14490__$1;
(statearr_14498_14537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (15))){
var state_14490__$1 = state_14490;
var statearr_14502_14538 = state_14490__$1;
(statearr_14502_14538[(2)] = null);

(statearr_14502_14538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (21))){
var state_14490__$1 = state_14490;
var statearr_14503_14539 = state_14490__$1;
(statearr_14503_14539[(2)] = null);

(statearr_14503_14539[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (13))){
var inst_14445 = (state_14490[(9)]);
var inst_14442 = (state_14490[(10)]);
var inst_14444 = (state_14490[(11)]);
var inst_14443 = (state_14490[(12)]);
var inst_14452 = (state_14490[(2)]);
var inst_14453 = (inst_14445 + (1));
var tmp14499 = inst_14442;
var tmp14500 = inst_14444;
var tmp14501 = inst_14443;
var inst_14442__$1 = tmp14499;
var inst_14443__$1 = tmp14501;
var inst_14444__$1 = tmp14500;
var inst_14445__$1 = inst_14453;
var state_14490__$1 = (function (){var statearr_14504 = state_14490;
(statearr_14504[(14)] = inst_14452);

(statearr_14504[(9)] = inst_14445__$1);

(statearr_14504[(10)] = inst_14442__$1);

(statearr_14504[(11)] = inst_14444__$1);

(statearr_14504[(12)] = inst_14443__$1);

return statearr_14504;
})();
var statearr_14505_14540 = state_14490__$1;
(statearr_14505_14540[(2)] = null);

(statearr_14505_14540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (22))){
var state_14490__$1 = state_14490;
var statearr_14506_14541 = state_14490__$1;
(statearr_14506_14541[(2)] = null);

(statearr_14506_14541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (6))){
var inst_14431 = (state_14490[(13)]);
var inst_14440 = f.call(null,inst_14431);
var inst_14441 = cljs.core.seq.call(null,inst_14440);
var inst_14442 = inst_14441;
var inst_14443 = null;
var inst_14444 = (0);
var inst_14445 = (0);
var state_14490__$1 = (function (){var statearr_14507 = state_14490;
(statearr_14507[(9)] = inst_14445);

(statearr_14507[(10)] = inst_14442);

(statearr_14507[(11)] = inst_14444);

(statearr_14507[(12)] = inst_14443);

return statearr_14507;
})();
var statearr_14508_14542 = state_14490__$1;
(statearr_14508_14542[(2)] = null);

(statearr_14508_14542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (17))){
var inst_14456 = (state_14490[(7)]);
var inst_14460 = cljs.core.chunk_first.call(null,inst_14456);
var inst_14461 = cljs.core.chunk_rest.call(null,inst_14456);
var inst_14462 = cljs.core.count.call(null,inst_14460);
var inst_14442 = inst_14461;
var inst_14443 = inst_14460;
var inst_14444 = inst_14462;
var inst_14445 = (0);
var state_14490__$1 = (function (){var statearr_14509 = state_14490;
(statearr_14509[(9)] = inst_14445);

(statearr_14509[(10)] = inst_14442);

(statearr_14509[(11)] = inst_14444);

(statearr_14509[(12)] = inst_14443);

return statearr_14509;
})();
var statearr_14510_14543 = state_14490__$1;
(statearr_14510_14543[(2)] = null);

(statearr_14510_14543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (3))){
var inst_14488 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14490__$1,inst_14488);
} else {
if((state_val_14491 === (12))){
var inst_14476 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14511_14544 = state_14490__$1;
(statearr_14511_14544[(2)] = inst_14476);

(statearr_14511_14544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (2))){
var state_14490__$1 = state_14490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14490__$1,(4),in$);
} else {
if((state_val_14491 === (23))){
var inst_14484 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14512_14545 = state_14490__$1;
(statearr_14512_14545[(2)] = inst_14484);

(statearr_14512_14545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (19))){
var inst_14471 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14513_14546 = state_14490__$1;
(statearr_14513_14546[(2)] = inst_14471);

(statearr_14513_14546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (11))){
var inst_14456 = (state_14490[(7)]);
var inst_14442 = (state_14490[(10)]);
var inst_14456__$1 = cljs.core.seq.call(null,inst_14442);
var state_14490__$1 = (function (){var statearr_14514 = state_14490;
(statearr_14514[(7)] = inst_14456__$1);

return statearr_14514;
})();
if(inst_14456__$1){
var statearr_14515_14547 = state_14490__$1;
(statearr_14515_14547[(1)] = (14));

} else {
var statearr_14516_14548 = state_14490__$1;
(statearr_14516_14548[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (9))){
var inst_14478 = (state_14490[(2)]);
var inst_14479 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14490__$1 = (function (){var statearr_14517 = state_14490;
(statearr_14517[(15)] = inst_14478);

return statearr_14517;
})();
if(cljs.core.truth_(inst_14479)){
var statearr_14518_14549 = state_14490__$1;
(statearr_14518_14549[(1)] = (21));

} else {
var statearr_14519_14550 = state_14490__$1;
(statearr_14519_14550[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (5))){
var inst_14434 = cljs.core.async.close_BANG_.call(null,out);
var state_14490__$1 = state_14490;
var statearr_14520_14551 = state_14490__$1;
(statearr_14520_14551[(2)] = inst_14434);

(statearr_14520_14551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (14))){
var inst_14456 = (state_14490[(7)]);
var inst_14458 = cljs.core.chunked_seq_QMARK_.call(null,inst_14456);
var state_14490__$1 = state_14490;
if(inst_14458){
var statearr_14521_14552 = state_14490__$1;
(statearr_14521_14552[(1)] = (17));

} else {
var statearr_14522_14553 = state_14490__$1;
(statearr_14522_14553[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (16))){
var inst_14474 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14523_14554 = state_14490__$1;
(statearr_14523_14554[(2)] = inst_14474);

(statearr_14523_14554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (10))){
var inst_14445 = (state_14490[(9)]);
var inst_14443 = (state_14490[(12)]);
var inst_14450 = cljs.core._nth.call(null,inst_14443,inst_14445);
var state_14490__$1 = state_14490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14490__$1,(13),out,inst_14450);
} else {
if((state_val_14491 === (18))){
var inst_14456 = (state_14490[(7)]);
var inst_14465 = cljs.core.first.call(null,inst_14456);
var state_14490__$1 = state_14490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14490__$1,(20),out,inst_14465);
} else {
if((state_val_14491 === (8))){
var inst_14445 = (state_14490[(9)]);
var inst_14444 = (state_14490[(11)]);
var inst_14447 = (inst_14445 < inst_14444);
var inst_14448 = inst_14447;
var state_14490__$1 = state_14490;
if(cljs.core.truth_(inst_14448)){
var statearr_14524_14555 = state_14490__$1;
(statearr_14524_14555[(1)] = (10));

} else {
var statearr_14525_14556 = state_14490__$1;
(statearr_14525_14556[(1)] = (11));

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
});})(c__8375__auto__))
;
return ((function (switch__8310__auto__,c__8375__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8311__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8311__auto____0 = (function (){
var statearr_14529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14529[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8311__auto__);

(statearr_14529[(1)] = (1));

return statearr_14529;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8311__auto____1 = (function (state_14490){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14530){if((e14530 instanceof Object)){
var ex__8314__auto__ = e14530;
var statearr_14531_14557 = state_14490;
(statearr_14531_14557[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14558 = state_14490;
state_14490 = G__14558;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8311__auto__ = function(state_14490){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8311__auto____1.call(this,state_14490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8311__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8311__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto__))
})();
var state__8377__auto__ = (function (){var statearr_14532 = f__8376__auto__.call(null);
(statearr_14532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto__);

return statearr_14532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto__))
);

return c__8375__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14559 = [];
var len__5627__auto___14562 = arguments.length;
var i__5628__auto___14563 = (0);
while(true){
if((i__5628__auto___14563 < len__5627__auto___14562)){
args14559.push((arguments[i__5628__auto___14563]));

var G__14564 = (i__5628__auto___14563 + (1));
i__5628__auto___14563 = G__14564;
continue;
} else {
}
break;
}

var G__14561 = args14559.length;
switch (G__14561) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14559.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args14566 = [];
var len__5627__auto___14569 = arguments.length;
var i__5628__auto___14570 = (0);
while(true){
if((i__5628__auto___14570 < len__5627__auto___14569)){
args14566.push((arguments[i__5628__auto___14570]));

var G__14571 = (i__5628__auto___14570 + (1));
i__5628__auto___14570 = G__14571;
continue;
} else {
}
break;
}

var G__14568 = args14566.length;
switch (G__14568) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14566.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args14573 = [];
var len__5627__auto___14624 = arguments.length;
var i__5628__auto___14625 = (0);
while(true){
if((i__5628__auto___14625 < len__5627__auto___14624)){
args14573.push((arguments[i__5628__auto___14625]));

var G__14626 = (i__5628__auto___14625 + (1));
i__5628__auto___14625 = G__14626;
continue;
} else {
}
break;
}

var G__14575 = args14573.length;
switch (G__14575) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14573.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8375__auto___14628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___14628,out){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___14628,out){
return (function (state_14599){
var state_val_14600 = (state_14599[(1)]);
if((state_val_14600 === (7))){
var inst_14594 = (state_14599[(2)]);
var state_14599__$1 = state_14599;
var statearr_14601_14629 = state_14599__$1;
(statearr_14601_14629[(2)] = inst_14594);

(statearr_14601_14629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14600 === (1))){
var inst_14576 = null;
var state_14599__$1 = (function (){var statearr_14602 = state_14599;
(statearr_14602[(7)] = inst_14576);

return statearr_14602;
})();
var statearr_14603_14630 = state_14599__$1;
(statearr_14603_14630[(2)] = null);

(statearr_14603_14630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14600 === (4))){
var inst_14579 = (state_14599[(8)]);
var inst_14579__$1 = (state_14599[(2)]);
var inst_14580 = (inst_14579__$1 == null);
var inst_14581 = cljs.core.not.call(null,inst_14580);
var state_14599__$1 = (function (){var statearr_14604 = state_14599;
(statearr_14604[(8)] = inst_14579__$1);

return statearr_14604;
})();
if(inst_14581){
var statearr_14605_14631 = state_14599__$1;
(statearr_14605_14631[(1)] = (5));

} else {
var statearr_14606_14632 = state_14599__$1;
(statearr_14606_14632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14600 === (6))){
var state_14599__$1 = state_14599;
var statearr_14607_14633 = state_14599__$1;
(statearr_14607_14633[(2)] = null);

(statearr_14607_14633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14600 === (3))){
var inst_14596 = (state_14599[(2)]);
var inst_14597 = cljs.core.async.close_BANG_.call(null,out);
var state_14599__$1 = (function (){var statearr_14608 = state_14599;
(statearr_14608[(9)] = inst_14596);

return statearr_14608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14599__$1,inst_14597);
} else {
if((state_val_14600 === (2))){
var state_14599__$1 = state_14599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14599__$1,(4),ch);
} else {
if((state_val_14600 === (11))){
var inst_14579 = (state_14599[(8)]);
var inst_14588 = (state_14599[(2)]);
var inst_14576 = inst_14579;
var state_14599__$1 = (function (){var statearr_14609 = state_14599;
(statearr_14609[(10)] = inst_14588);

(statearr_14609[(7)] = inst_14576);

return statearr_14609;
})();
var statearr_14610_14634 = state_14599__$1;
(statearr_14610_14634[(2)] = null);

(statearr_14610_14634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14600 === (9))){
var inst_14579 = (state_14599[(8)]);
var state_14599__$1 = state_14599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14599__$1,(11),out,inst_14579);
} else {
if((state_val_14600 === (5))){
var inst_14579 = (state_14599[(8)]);
var inst_14576 = (state_14599[(7)]);
var inst_14583 = cljs.core._EQ_.call(null,inst_14579,inst_14576);
var state_14599__$1 = state_14599;
if(inst_14583){
var statearr_14612_14635 = state_14599__$1;
(statearr_14612_14635[(1)] = (8));

} else {
var statearr_14613_14636 = state_14599__$1;
(statearr_14613_14636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14600 === (10))){
var inst_14591 = (state_14599[(2)]);
var state_14599__$1 = state_14599;
var statearr_14614_14637 = state_14599__$1;
(statearr_14614_14637[(2)] = inst_14591);

(statearr_14614_14637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14600 === (8))){
var inst_14576 = (state_14599[(7)]);
var tmp14611 = inst_14576;
var inst_14576__$1 = tmp14611;
var state_14599__$1 = (function (){var statearr_14615 = state_14599;
(statearr_14615[(7)] = inst_14576__$1);

return statearr_14615;
})();
var statearr_14616_14638 = state_14599__$1;
(statearr_14616_14638[(2)] = null);

(statearr_14616_14638[(1)] = (2));


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
});})(c__8375__auto___14628,out))
;
return ((function (switch__8310__auto__,c__8375__auto___14628,out){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_14620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14620[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_14620[(1)] = (1));

return statearr_14620;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_14599){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14621){if((e14621 instanceof Object)){
var ex__8314__auto__ = e14621;
var statearr_14622_14639 = state_14599;
(statearr_14622_14639[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14640 = state_14599;
state_14599 = G__14640;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_14599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_14599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___14628,out))
})();
var state__8377__auto__ = (function (){var statearr_14623 = f__8376__auto__.call(null);
(statearr_14623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___14628);

return statearr_14623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___14628,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14641 = [];
var len__5627__auto___14711 = arguments.length;
var i__5628__auto___14712 = (0);
while(true){
if((i__5628__auto___14712 < len__5627__auto___14711)){
args14641.push((arguments[i__5628__auto___14712]));

var G__14713 = (i__5628__auto___14712 + (1));
i__5628__auto___14712 = G__14713;
continue;
} else {
}
break;
}

var G__14643 = args14641.length;
switch (G__14643) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14641.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8375__auto___14715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___14715,out){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___14715,out){
return (function (state_14681){
var state_val_14682 = (state_14681[(1)]);
if((state_val_14682 === (7))){
var inst_14677 = (state_14681[(2)]);
var state_14681__$1 = state_14681;
var statearr_14683_14716 = state_14681__$1;
(statearr_14683_14716[(2)] = inst_14677);

(statearr_14683_14716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (1))){
var inst_14644 = (new Array(n));
var inst_14645 = inst_14644;
var inst_14646 = (0);
var state_14681__$1 = (function (){var statearr_14684 = state_14681;
(statearr_14684[(7)] = inst_14646);

(statearr_14684[(8)] = inst_14645);

return statearr_14684;
})();
var statearr_14685_14717 = state_14681__$1;
(statearr_14685_14717[(2)] = null);

(statearr_14685_14717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (4))){
var inst_14649 = (state_14681[(9)]);
var inst_14649__$1 = (state_14681[(2)]);
var inst_14650 = (inst_14649__$1 == null);
var inst_14651 = cljs.core.not.call(null,inst_14650);
var state_14681__$1 = (function (){var statearr_14686 = state_14681;
(statearr_14686[(9)] = inst_14649__$1);

return statearr_14686;
})();
if(inst_14651){
var statearr_14687_14718 = state_14681__$1;
(statearr_14687_14718[(1)] = (5));

} else {
var statearr_14688_14719 = state_14681__$1;
(statearr_14688_14719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (15))){
var inst_14671 = (state_14681[(2)]);
var state_14681__$1 = state_14681;
var statearr_14689_14720 = state_14681__$1;
(statearr_14689_14720[(2)] = inst_14671);

(statearr_14689_14720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (13))){
var state_14681__$1 = state_14681;
var statearr_14690_14721 = state_14681__$1;
(statearr_14690_14721[(2)] = null);

(statearr_14690_14721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (6))){
var inst_14646 = (state_14681[(7)]);
var inst_14667 = (inst_14646 > (0));
var state_14681__$1 = state_14681;
if(cljs.core.truth_(inst_14667)){
var statearr_14691_14722 = state_14681__$1;
(statearr_14691_14722[(1)] = (12));

} else {
var statearr_14692_14723 = state_14681__$1;
(statearr_14692_14723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (3))){
var inst_14679 = (state_14681[(2)]);
var state_14681__$1 = state_14681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14681__$1,inst_14679);
} else {
if((state_val_14682 === (12))){
var inst_14645 = (state_14681[(8)]);
var inst_14669 = cljs.core.vec.call(null,inst_14645);
var state_14681__$1 = state_14681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14681__$1,(15),out,inst_14669);
} else {
if((state_val_14682 === (2))){
var state_14681__$1 = state_14681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14681__$1,(4),ch);
} else {
if((state_val_14682 === (11))){
var inst_14661 = (state_14681[(2)]);
var inst_14662 = (new Array(n));
var inst_14645 = inst_14662;
var inst_14646 = (0);
var state_14681__$1 = (function (){var statearr_14693 = state_14681;
(statearr_14693[(10)] = inst_14661);

(statearr_14693[(7)] = inst_14646);

(statearr_14693[(8)] = inst_14645);

return statearr_14693;
})();
var statearr_14694_14724 = state_14681__$1;
(statearr_14694_14724[(2)] = null);

(statearr_14694_14724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (9))){
var inst_14645 = (state_14681[(8)]);
var inst_14659 = cljs.core.vec.call(null,inst_14645);
var state_14681__$1 = state_14681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14681__$1,(11),out,inst_14659);
} else {
if((state_val_14682 === (5))){
var inst_14646 = (state_14681[(7)]);
var inst_14645 = (state_14681[(8)]);
var inst_14649 = (state_14681[(9)]);
var inst_14654 = (state_14681[(11)]);
var inst_14653 = (inst_14645[inst_14646] = inst_14649);
var inst_14654__$1 = (inst_14646 + (1));
var inst_14655 = (inst_14654__$1 < n);
var state_14681__$1 = (function (){var statearr_14695 = state_14681;
(statearr_14695[(12)] = inst_14653);

(statearr_14695[(11)] = inst_14654__$1);

return statearr_14695;
})();
if(cljs.core.truth_(inst_14655)){
var statearr_14696_14725 = state_14681__$1;
(statearr_14696_14725[(1)] = (8));

} else {
var statearr_14697_14726 = state_14681__$1;
(statearr_14697_14726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (14))){
var inst_14674 = (state_14681[(2)]);
var inst_14675 = cljs.core.async.close_BANG_.call(null,out);
var state_14681__$1 = (function (){var statearr_14699 = state_14681;
(statearr_14699[(13)] = inst_14674);

return statearr_14699;
})();
var statearr_14700_14727 = state_14681__$1;
(statearr_14700_14727[(2)] = inst_14675);

(statearr_14700_14727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (10))){
var inst_14665 = (state_14681[(2)]);
var state_14681__$1 = state_14681;
var statearr_14701_14728 = state_14681__$1;
(statearr_14701_14728[(2)] = inst_14665);

(statearr_14701_14728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (8))){
var inst_14645 = (state_14681[(8)]);
var inst_14654 = (state_14681[(11)]);
var tmp14698 = inst_14645;
var inst_14645__$1 = tmp14698;
var inst_14646 = inst_14654;
var state_14681__$1 = (function (){var statearr_14702 = state_14681;
(statearr_14702[(7)] = inst_14646);

(statearr_14702[(8)] = inst_14645__$1);

return statearr_14702;
})();
var statearr_14703_14729 = state_14681__$1;
(statearr_14703_14729[(2)] = null);

(statearr_14703_14729[(1)] = (2));


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
});})(c__8375__auto___14715,out))
;
return ((function (switch__8310__auto__,c__8375__auto___14715,out){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_14707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14707[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_14707[(1)] = (1));

return statearr_14707;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_14681){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14708){if((e14708 instanceof Object)){
var ex__8314__auto__ = e14708;
var statearr_14709_14730 = state_14681;
(statearr_14709_14730[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14731 = state_14681;
state_14681 = G__14731;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_14681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_14681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___14715,out))
})();
var state__8377__auto__ = (function (){var statearr_14710 = f__8376__auto__.call(null);
(statearr_14710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___14715);

return statearr_14710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___14715,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14732 = [];
var len__5627__auto___14806 = arguments.length;
var i__5628__auto___14807 = (0);
while(true){
if((i__5628__auto___14807 < len__5627__auto___14806)){
args14732.push((arguments[i__5628__auto___14807]));

var G__14808 = (i__5628__auto___14807 + (1));
i__5628__auto___14807 = G__14808;
continue;
} else {
}
break;
}

var G__14734 = args14732.length;
switch (G__14734) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14732.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8375__auto___14810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8375__auto___14810,out){
return (function (){
var f__8376__auto__ = (function (){var switch__8310__auto__ = ((function (c__8375__auto___14810,out){
return (function (state_14776){
var state_val_14777 = (state_14776[(1)]);
if((state_val_14777 === (7))){
var inst_14772 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14778_14811 = state_14776__$1;
(statearr_14778_14811[(2)] = inst_14772);

(statearr_14778_14811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (1))){
var inst_14735 = [];
var inst_14736 = inst_14735;
var inst_14737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14776__$1 = (function (){var statearr_14779 = state_14776;
(statearr_14779[(7)] = inst_14736);

(statearr_14779[(8)] = inst_14737);

return statearr_14779;
})();
var statearr_14780_14812 = state_14776__$1;
(statearr_14780_14812[(2)] = null);

(statearr_14780_14812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (4))){
var inst_14740 = (state_14776[(9)]);
var inst_14740__$1 = (state_14776[(2)]);
var inst_14741 = (inst_14740__$1 == null);
var inst_14742 = cljs.core.not.call(null,inst_14741);
var state_14776__$1 = (function (){var statearr_14781 = state_14776;
(statearr_14781[(9)] = inst_14740__$1);

return statearr_14781;
})();
if(inst_14742){
var statearr_14782_14813 = state_14776__$1;
(statearr_14782_14813[(1)] = (5));

} else {
var statearr_14783_14814 = state_14776__$1;
(statearr_14783_14814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (15))){
var inst_14766 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14784_14815 = state_14776__$1;
(statearr_14784_14815[(2)] = inst_14766);

(statearr_14784_14815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (13))){
var state_14776__$1 = state_14776;
var statearr_14785_14816 = state_14776__$1;
(statearr_14785_14816[(2)] = null);

(statearr_14785_14816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (6))){
var inst_14736 = (state_14776[(7)]);
var inst_14761 = inst_14736.length;
var inst_14762 = (inst_14761 > (0));
var state_14776__$1 = state_14776;
if(cljs.core.truth_(inst_14762)){
var statearr_14786_14817 = state_14776__$1;
(statearr_14786_14817[(1)] = (12));

} else {
var statearr_14787_14818 = state_14776__$1;
(statearr_14787_14818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (3))){
var inst_14774 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14776__$1,inst_14774);
} else {
if((state_val_14777 === (12))){
var inst_14736 = (state_14776[(7)]);
var inst_14764 = cljs.core.vec.call(null,inst_14736);
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14776__$1,(15),out,inst_14764);
} else {
if((state_val_14777 === (2))){
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14776__$1,(4),ch);
} else {
if((state_val_14777 === (11))){
var inst_14740 = (state_14776[(9)]);
var inst_14744 = (state_14776[(10)]);
var inst_14754 = (state_14776[(2)]);
var inst_14755 = [];
var inst_14756 = inst_14755.push(inst_14740);
var inst_14736 = inst_14755;
var inst_14737 = inst_14744;
var state_14776__$1 = (function (){var statearr_14788 = state_14776;
(statearr_14788[(7)] = inst_14736);

(statearr_14788[(11)] = inst_14756);

(statearr_14788[(12)] = inst_14754);

(statearr_14788[(8)] = inst_14737);

return statearr_14788;
})();
var statearr_14789_14819 = state_14776__$1;
(statearr_14789_14819[(2)] = null);

(statearr_14789_14819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (9))){
var inst_14736 = (state_14776[(7)]);
var inst_14752 = cljs.core.vec.call(null,inst_14736);
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14776__$1,(11),out,inst_14752);
} else {
if((state_val_14777 === (5))){
var inst_14740 = (state_14776[(9)]);
var inst_14744 = (state_14776[(10)]);
var inst_14737 = (state_14776[(8)]);
var inst_14744__$1 = f.call(null,inst_14740);
var inst_14745 = cljs.core._EQ_.call(null,inst_14744__$1,inst_14737);
var inst_14746 = cljs.core.keyword_identical_QMARK_.call(null,inst_14737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14747 = (inst_14745) || (inst_14746);
var state_14776__$1 = (function (){var statearr_14790 = state_14776;
(statearr_14790[(10)] = inst_14744__$1);

return statearr_14790;
})();
if(cljs.core.truth_(inst_14747)){
var statearr_14791_14820 = state_14776__$1;
(statearr_14791_14820[(1)] = (8));

} else {
var statearr_14792_14821 = state_14776__$1;
(statearr_14792_14821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (14))){
var inst_14769 = (state_14776[(2)]);
var inst_14770 = cljs.core.async.close_BANG_.call(null,out);
var state_14776__$1 = (function (){var statearr_14794 = state_14776;
(statearr_14794[(13)] = inst_14769);

return statearr_14794;
})();
var statearr_14795_14822 = state_14776__$1;
(statearr_14795_14822[(2)] = inst_14770);

(statearr_14795_14822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (10))){
var inst_14759 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14796_14823 = state_14776__$1;
(statearr_14796_14823[(2)] = inst_14759);

(statearr_14796_14823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (8))){
var inst_14736 = (state_14776[(7)]);
var inst_14740 = (state_14776[(9)]);
var inst_14744 = (state_14776[(10)]);
var inst_14749 = inst_14736.push(inst_14740);
var tmp14793 = inst_14736;
var inst_14736__$1 = tmp14793;
var inst_14737 = inst_14744;
var state_14776__$1 = (function (){var statearr_14797 = state_14776;
(statearr_14797[(7)] = inst_14736__$1);

(statearr_14797[(14)] = inst_14749);

(statearr_14797[(8)] = inst_14737);

return statearr_14797;
})();
var statearr_14798_14824 = state_14776__$1;
(statearr_14798_14824[(2)] = null);

(statearr_14798_14824[(1)] = (2));


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
});})(c__8375__auto___14810,out))
;
return ((function (switch__8310__auto__,c__8375__auto___14810,out){
return (function() {
var cljs$core$async$state_machine__8311__auto__ = null;
var cljs$core$async$state_machine__8311__auto____0 = (function (){
var statearr_14802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14802[(0)] = cljs$core$async$state_machine__8311__auto__);

(statearr_14802[(1)] = (1));

return statearr_14802;
});
var cljs$core$async$state_machine__8311__auto____1 = (function (state_14776){
while(true){
var ret_value__8312__auto__ = (function (){try{while(true){
var result__8313__auto__ = switch__8310__auto__.call(null,state_14776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8313__auto__;
}
break;
}
}catch (e14803){if((e14803 instanceof Object)){
var ex__8314__auto__ = e14803;
var statearr_14804_14825 = state_14776;
(statearr_14804_14825[(5)] = ex__8314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14826 = state_14776;
state_14776 = G__14826;
continue;
} else {
return ret_value__8312__auto__;
}
break;
}
});
cljs$core$async$state_machine__8311__auto__ = function(state_14776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8311__auto____1.call(this,state_14776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8311__auto____0;
cljs$core$async$state_machine__8311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8311__auto____1;
return cljs$core$async$state_machine__8311__auto__;
})()
;})(switch__8310__auto__,c__8375__auto___14810,out))
})();
var state__8377__auto__ = (function (){var statearr_14805 = f__8376__auto__.call(null);
(statearr_14805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8375__auto___14810);

return statearr_14805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8377__auto__);
});})(c__8375__auto___14810,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map