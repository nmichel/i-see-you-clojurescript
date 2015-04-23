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
if(typeof cljs.core.async.t11154 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11154 = (function (f,fn_handler,meta11155){
this.f = f;
this.fn_handler = fn_handler;
this.meta11155 = meta11155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11156){
var self__ = this;
var _11156__$1 = this;
return self__.meta11155;
});

cljs.core.async.t11154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11156,meta11155__$1){
var self__ = this;
var _11156__$1 = this;
return (new cljs.core.async.t11154(self__.f,self__.fn_handler,meta11155__$1));
});

cljs.core.async.t11154.cljs$lang$type = true;

cljs.core.async.t11154.cljs$lang$ctorStr = "cljs.core.async/t11154";

cljs.core.async.t11154.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t11154");
});

cljs.core.async.__GT_t11154 = (function cljs$core$async$fn_handler_$___GT_t11154(f__$1,fn_handler__$1,meta11155){
return (new cljs.core.async.t11154(f__$1,fn_handler__$1,meta11155));
});

}

return (new cljs.core.async.t11154(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11158 = buff;
if(G__11158){
var bit__4796__auto__ = null;
if(cljs.core.truth_((function (){var or__4122__auto__ = bit__4796__auto__;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return G__11158.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11158.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11158);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11158);
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
var val_11159 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11159);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11159,ret){
return (function (){
return fn1.call(null,val_11159);
});})(val_11159,ret))
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
var n__5007__auto___11160 = n;
var x_11161 = (0);
while(true){
if((x_11161 < n__5007__auto___11160)){
(a[x_11161] = (0));

var G__11162 = (x_11161 + (1));
x_11161 = G__11162;
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

var G__11163 = (i + (1));
i = G__11163;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11167 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11167 = (function (flag,alt_flag,meta11168){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11168 = meta11168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11167.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11169){
var self__ = this;
var _11169__$1 = this;
return self__.meta11168;
});})(flag))
;

cljs.core.async.t11167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11169,meta11168__$1){
var self__ = this;
var _11169__$1 = this;
return (new cljs.core.async.t11167(self__.flag,self__.alt_flag,meta11168__$1));
});})(flag))
;

cljs.core.async.t11167.cljs$lang$type = true;

cljs.core.async.t11167.cljs$lang$ctorStr = "cljs.core.async/t11167";

cljs.core.async.t11167.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t11167");
});})(flag))
;

cljs.core.async.__GT_t11167 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t11167(flag__$1,alt_flag__$1,meta11168){
return (new cljs.core.async.t11167(flag__$1,alt_flag__$1,meta11168));
});})(flag))
;

}

return (new cljs.core.async.t11167(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t11173 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11173 = (function (cb,flag,alt_handler,meta11174){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11174 = meta11174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11173.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11175){
var self__ = this;
var _11175__$1 = this;
return self__.meta11174;
});

cljs.core.async.t11173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11175,meta11174__$1){
var self__ = this;
var _11175__$1 = this;
return (new cljs.core.async.t11173(self__.cb,self__.flag,self__.alt_handler,meta11174__$1));
});

cljs.core.async.t11173.cljs$lang$type = true;

cljs.core.async.t11173.cljs$lang$ctorStr = "cljs.core.async/t11173";

cljs.core.async.t11173.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t11173");
});

cljs.core.async.__GT_t11173 = (function cljs$core$async$alt_handler_$___GT_t11173(cb__$1,flag__$1,alt_handler__$1,meta11174){
return (new cljs.core.async.t11173(cb__$1,flag__$1,alt_handler__$1,meta11174));
});

}

return (new cljs.core.async.t11173(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11176_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11176_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11177_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11177_SHARP_,port], null));
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
var G__11178 = (i + (1));
i = G__11178;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__11179){
var map__11181 = p__11179;
var map__11181__$1 = ((cljs.core.seq_QMARK_.call(null,map__11181))?cljs.core.apply.call(null,cljs.core.hash_map,map__11181):map__11181);
var opts = map__11181__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__11179 = null;
if (arguments.length > 1) {
var G__11182__i = 0, G__11182__a = new Array(arguments.length -  1);
while (G__11182__i < G__11182__a.length) {G__11182__a[G__11182__i] = arguments[G__11182__i + 1]; ++G__11182__i;}
  p__11179 = new cljs.core.IndexedSeq(G__11182__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__11179);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__11183){
var ports = cljs.core.first(arglist__11183);
var p__11179 = cljs.core.rest(arglist__11183);
return cljs$core$async$alts_BANG___delegate(ports,p__11179);
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
var c__7033__auto___11278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___11278){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___11278){
return (function (state_11254){
var state_val_11255 = (state_11254[(1)]);
if((state_val_11255 === (7))){
var inst_11250 = (state_11254[(2)]);
var state_11254__$1 = state_11254;
var statearr_11256_11279 = state_11254__$1;
(statearr_11256_11279[(2)] = inst_11250);

(statearr_11256_11279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (1))){
var state_11254__$1 = state_11254;
var statearr_11257_11280 = state_11254__$1;
(statearr_11257_11280[(2)] = null);

(statearr_11257_11280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (4))){
var inst_11233 = (state_11254[(7)]);
var inst_11233__$1 = (state_11254[(2)]);
var inst_11234 = (inst_11233__$1 == null);
var state_11254__$1 = (function (){var statearr_11258 = state_11254;
(statearr_11258[(7)] = inst_11233__$1);

return statearr_11258;
})();
if(cljs.core.truth_(inst_11234)){
var statearr_11259_11281 = state_11254__$1;
(statearr_11259_11281[(1)] = (5));

} else {
var statearr_11260_11282 = state_11254__$1;
(statearr_11260_11282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (13))){
var state_11254__$1 = state_11254;
var statearr_11261_11283 = state_11254__$1;
(statearr_11261_11283[(2)] = null);

(statearr_11261_11283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (6))){
var inst_11233 = (state_11254[(7)]);
var state_11254__$1 = state_11254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11254__$1,(11),to,inst_11233);
} else {
if((state_val_11255 === (3))){
var inst_11252 = (state_11254[(2)]);
var state_11254__$1 = state_11254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11254__$1,inst_11252);
} else {
if((state_val_11255 === (12))){
var state_11254__$1 = state_11254;
var statearr_11262_11284 = state_11254__$1;
(statearr_11262_11284[(2)] = null);

(statearr_11262_11284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (2))){
var state_11254__$1 = state_11254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11254__$1,(4),from);
} else {
if((state_val_11255 === (11))){
var inst_11243 = (state_11254[(2)]);
var state_11254__$1 = state_11254;
if(cljs.core.truth_(inst_11243)){
var statearr_11263_11285 = state_11254__$1;
(statearr_11263_11285[(1)] = (12));

} else {
var statearr_11264_11286 = state_11254__$1;
(statearr_11264_11286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (9))){
var state_11254__$1 = state_11254;
var statearr_11265_11287 = state_11254__$1;
(statearr_11265_11287[(2)] = null);

(statearr_11265_11287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (5))){
var state_11254__$1 = state_11254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11266_11288 = state_11254__$1;
(statearr_11266_11288[(1)] = (8));

} else {
var statearr_11267_11289 = state_11254__$1;
(statearr_11267_11289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (14))){
var inst_11248 = (state_11254[(2)]);
var state_11254__$1 = state_11254;
var statearr_11268_11290 = state_11254__$1;
(statearr_11268_11290[(2)] = inst_11248);

(statearr_11268_11290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (10))){
var inst_11240 = (state_11254[(2)]);
var state_11254__$1 = state_11254;
var statearr_11269_11291 = state_11254__$1;
(statearr_11269_11291[(2)] = inst_11240);

(statearr_11269_11291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (8))){
var inst_11237 = cljs.core.async.close_BANG_.call(null,to);
var state_11254__$1 = state_11254;
var statearr_11270_11292 = state_11254__$1;
(statearr_11270_11292[(2)] = inst_11237);

(statearr_11270_11292[(1)] = (10));


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
});})(c__7033__auto___11278))
;
return ((function (switch__6977__auto__,c__7033__auto___11278){
return (function() {
var cljs$core$async$pipe_$_state_machine__6978__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6978__auto____0 = (function (){
var statearr_11274 = [null,null,null,null,null,null,null,null];
(statearr_11274[(0)] = cljs$core$async$pipe_$_state_machine__6978__auto__);

(statearr_11274[(1)] = (1));

return statearr_11274;
});
var cljs$core$async$pipe_$_state_machine__6978__auto____1 = (function (state_11254){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11275){if((e11275 instanceof Object)){
var ex__6981__auto__ = e11275;
var statearr_11276_11293 = state_11254;
(statearr_11276_11293[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11294 = state_11254;
state_11254 = G__11294;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6978__auto__ = function(state_11254){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6978__auto____1.call(this,state_11254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6978__auto____0;
cljs$core$async$pipe_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6978__auto____1;
return cljs$core$async$pipe_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___11278))
})();
var state__7035__auto__ = (function (){var statearr_11277 = f__7034__auto__.call(null);
(statearr_11277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___11278);

return statearr_11277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___11278))
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
return (function (p__11478){
var vec__11479 = p__11478;
var v = cljs.core.nth.call(null,vec__11479,(0),null);
var p = cljs.core.nth.call(null,vec__11479,(1),null);
var job = vec__11479;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7033__auto___11661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___11661,res,vec__11479,v,p,job,jobs,results){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___11661,res,vec__11479,v,p,job,jobs,results){
return (function (state_11484){
var state_val_11485 = (state_11484[(1)]);
if((state_val_11485 === (2))){
var inst_11481 = (state_11484[(2)]);
var inst_11482 = cljs.core.async.close_BANG_.call(null,res);
var state_11484__$1 = (function (){var statearr_11486 = state_11484;
(statearr_11486[(7)] = inst_11481);

return statearr_11486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11484__$1,inst_11482);
} else {
if((state_val_11485 === (1))){
var state_11484__$1 = state_11484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11484__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7033__auto___11661,res,vec__11479,v,p,job,jobs,results))
;
return ((function (switch__6977__auto__,c__7033__auto___11661,res,vec__11479,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0 = (function (){
var statearr_11490 = [null,null,null,null,null,null,null,null];
(statearr_11490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__);

(statearr_11490[(1)] = (1));

return statearr_11490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1 = (function (state_11484){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11491){if((e11491 instanceof Object)){
var ex__6981__auto__ = e11491;
var statearr_11492_11662 = state_11484;
(statearr_11492_11662[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11663 = state_11484;
state_11484 = G__11663;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = function(state_11484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1.call(this,state_11484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___11661,res,vec__11479,v,p,job,jobs,results))
})();
var state__7035__auto__ = (function (){var statearr_11493 = f__7034__auto__.call(null);
(statearr_11493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___11661);

return statearr_11493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___11661,res,vec__11479,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11494){
var vec__11495 = p__11494;
var v = cljs.core.nth.call(null,vec__11495,(0),null);
var p = cljs.core.nth.call(null,vec__11495,(1),null);
var job = vec__11495;
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
var n__5007__auto___11664 = n;
var __11665 = (0);
while(true){
if((__11665 < n__5007__auto___11664)){
var G__11496_11666 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11496_11666) {
case "async":
var c__7033__auto___11668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11665,c__7033__auto___11668,G__11496_11666,n__5007__auto___11664,jobs,results,process,async){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (__11665,c__7033__auto___11668,G__11496_11666,n__5007__auto___11664,jobs,results,process,async){
return (function (state_11509){
var state_val_11510 = (state_11509[(1)]);
if((state_val_11510 === (7))){
var inst_11505 = (state_11509[(2)]);
var state_11509__$1 = state_11509;
var statearr_11511_11669 = state_11509__$1;
(statearr_11511_11669[(2)] = inst_11505);

(statearr_11511_11669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11510 === (6))){
var state_11509__$1 = state_11509;
var statearr_11512_11670 = state_11509__$1;
(statearr_11512_11670[(2)] = null);

(statearr_11512_11670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11510 === (5))){
var state_11509__$1 = state_11509;
var statearr_11513_11671 = state_11509__$1;
(statearr_11513_11671[(2)] = null);

(statearr_11513_11671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11510 === (4))){
var inst_11499 = (state_11509[(2)]);
var inst_11500 = async.call(null,inst_11499);
var state_11509__$1 = state_11509;
if(cljs.core.truth_(inst_11500)){
var statearr_11514_11672 = state_11509__$1;
(statearr_11514_11672[(1)] = (5));

} else {
var statearr_11515_11673 = state_11509__$1;
(statearr_11515_11673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11510 === (3))){
var inst_11507 = (state_11509[(2)]);
var state_11509__$1 = state_11509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11509__$1,inst_11507);
} else {
if((state_val_11510 === (2))){
var state_11509__$1 = state_11509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11509__$1,(4),jobs);
} else {
if((state_val_11510 === (1))){
var state_11509__$1 = state_11509;
var statearr_11516_11674 = state_11509__$1;
(statearr_11516_11674[(2)] = null);

(statearr_11516_11674[(1)] = (2));


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
});})(__11665,c__7033__auto___11668,G__11496_11666,n__5007__auto___11664,jobs,results,process,async))
;
return ((function (__11665,switch__6977__auto__,c__7033__auto___11668,G__11496_11666,n__5007__auto___11664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0 = (function (){
var statearr_11520 = [null,null,null,null,null,null,null];
(statearr_11520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__);

(statearr_11520[(1)] = (1));

return statearr_11520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1 = (function (state_11509){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11521){if((e11521 instanceof Object)){
var ex__6981__auto__ = e11521;
var statearr_11522_11675 = state_11509;
(statearr_11522_11675[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11676 = state_11509;
state_11509 = G__11676;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = function(state_11509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1.call(this,state_11509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__;
})()
;})(__11665,switch__6977__auto__,c__7033__auto___11668,G__11496_11666,n__5007__auto___11664,jobs,results,process,async))
})();
var state__7035__auto__ = (function (){var statearr_11523 = f__7034__auto__.call(null);
(statearr_11523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___11668);

return statearr_11523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(__11665,c__7033__auto___11668,G__11496_11666,n__5007__auto___11664,jobs,results,process,async))
);


break;
case "compute":
var c__7033__auto___11677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11665,c__7033__auto___11677,G__11496_11666,n__5007__auto___11664,jobs,results,process,async){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (__11665,c__7033__auto___11677,G__11496_11666,n__5007__auto___11664,jobs,results,process,async){
return (function (state_11536){
var state_val_11537 = (state_11536[(1)]);
if((state_val_11537 === (7))){
var inst_11532 = (state_11536[(2)]);
var state_11536__$1 = state_11536;
var statearr_11538_11678 = state_11536__$1;
(statearr_11538_11678[(2)] = inst_11532);

(statearr_11538_11678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (6))){
var state_11536__$1 = state_11536;
var statearr_11539_11679 = state_11536__$1;
(statearr_11539_11679[(2)] = null);

(statearr_11539_11679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (5))){
var state_11536__$1 = state_11536;
var statearr_11540_11680 = state_11536__$1;
(statearr_11540_11680[(2)] = null);

(statearr_11540_11680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (4))){
var inst_11526 = (state_11536[(2)]);
var inst_11527 = process.call(null,inst_11526);
var state_11536__$1 = state_11536;
if(cljs.core.truth_(inst_11527)){
var statearr_11541_11681 = state_11536__$1;
(statearr_11541_11681[(1)] = (5));

} else {
var statearr_11542_11682 = state_11536__$1;
(statearr_11542_11682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (3))){
var inst_11534 = (state_11536[(2)]);
var state_11536__$1 = state_11536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11536__$1,inst_11534);
} else {
if((state_val_11537 === (2))){
var state_11536__$1 = state_11536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11536__$1,(4),jobs);
} else {
if((state_val_11537 === (1))){
var state_11536__$1 = state_11536;
var statearr_11543_11683 = state_11536__$1;
(statearr_11543_11683[(2)] = null);

(statearr_11543_11683[(1)] = (2));


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
});})(__11665,c__7033__auto___11677,G__11496_11666,n__5007__auto___11664,jobs,results,process,async))
;
return ((function (__11665,switch__6977__auto__,c__7033__auto___11677,G__11496_11666,n__5007__auto___11664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0 = (function (){
var statearr_11547 = [null,null,null,null,null,null,null];
(statearr_11547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__);

(statearr_11547[(1)] = (1));

return statearr_11547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1 = (function (state_11536){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11548){if((e11548 instanceof Object)){
var ex__6981__auto__ = e11548;
var statearr_11549_11684 = state_11536;
(statearr_11549_11684[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11685 = state_11536;
state_11536 = G__11685;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = function(state_11536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1.call(this,state_11536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__;
})()
;})(__11665,switch__6977__auto__,c__7033__auto___11677,G__11496_11666,n__5007__auto___11664,jobs,results,process,async))
})();
var state__7035__auto__ = (function (){var statearr_11550 = f__7034__auto__.call(null);
(statearr_11550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___11677);

return statearr_11550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(__11665,c__7033__auto___11677,G__11496_11666,n__5007__auto___11664,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11686 = (__11665 + (1));
__11665 = G__11686;
continue;
} else {
}
break;
}

var c__7033__auto___11687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___11687,jobs,results,process,async){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___11687,jobs,results,process,async){
return (function (state_11572){
var state_val_11573 = (state_11572[(1)]);
if((state_val_11573 === (9))){
var inst_11565 = (state_11572[(2)]);
var state_11572__$1 = (function (){var statearr_11574 = state_11572;
(statearr_11574[(7)] = inst_11565);

return statearr_11574;
})();
var statearr_11575_11688 = state_11572__$1;
(statearr_11575_11688[(2)] = null);

(statearr_11575_11688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (8))){
var inst_11558 = (state_11572[(8)]);
var inst_11563 = (state_11572[(2)]);
var state_11572__$1 = (function (){var statearr_11576 = state_11572;
(statearr_11576[(9)] = inst_11563);

return statearr_11576;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11572__$1,(9),results,inst_11558);
} else {
if((state_val_11573 === (7))){
var inst_11568 = (state_11572[(2)]);
var state_11572__$1 = state_11572;
var statearr_11577_11689 = state_11572__$1;
(statearr_11577_11689[(2)] = inst_11568);

(statearr_11577_11689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (6))){
var inst_11558 = (state_11572[(8)]);
var inst_11553 = (state_11572[(10)]);
var inst_11558__$1 = cljs.core.async.chan.call(null,(1));
var inst_11559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11560 = [inst_11553,inst_11558__$1];
var inst_11561 = (new cljs.core.PersistentVector(null,2,(5),inst_11559,inst_11560,null));
var state_11572__$1 = (function (){var statearr_11578 = state_11572;
(statearr_11578[(8)] = inst_11558__$1);

return statearr_11578;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11572__$1,(8),jobs,inst_11561);
} else {
if((state_val_11573 === (5))){
var inst_11556 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11572__$1 = state_11572;
var statearr_11579_11690 = state_11572__$1;
(statearr_11579_11690[(2)] = inst_11556);

(statearr_11579_11690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (4))){
var inst_11553 = (state_11572[(10)]);
var inst_11553__$1 = (state_11572[(2)]);
var inst_11554 = (inst_11553__$1 == null);
var state_11572__$1 = (function (){var statearr_11580 = state_11572;
(statearr_11580[(10)] = inst_11553__$1);

return statearr_11580;
})();
if(cljs.core.truth_(inst_11554)){
var statearr_11581_11691 = state_11572__$1;
(statearr_11581_11691[(1)] = (5));

} else {
var statearr_11582_11692 = state_11572__$1;
(statearr_11582_11692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (3))){
var inst_11570 = (state_11572[(2)]);
var state_11572__$1 = state_11572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11572__$1,inst_11570);
} else {
if((state_val_11573 === (2))){
var state_11572__$1 = state_11572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11572__$1,(4),from);
} else {
if((state_val_11573 === (1))){
var state_11572__$1 = state_11572;
var statearr_11583_11693 = state_11572__$1;
(statearr_11583_11693[(2)] = null);

(statearr_11583_11693[(1)] = (2));


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
});})(c__7033__auto___11687,jobs,results,process,async))
;
return ((function (switch__6977__auto__,c__7033__auto___11687,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0 = (function (){
var statearr_11587 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__);

(statearr_11587[(1)] = (1));

return statearr_11587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1 = (function (state_11572){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11588){if((e11588 instanceof Object)){
var ex__6981__auto__ = e11588;
var statearr_11589_11694 = state_11572;
(statearr_11589_11694[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11695 = state_11572;
state_11572 = G__11695;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = function(state_11572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1.call(this,state_11572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___11687,jobs,results,process,async))
})();
var state__7035__auto__ = (function (){var statearr_11590 = f__7034__auto__.call(null);
(statearr_11590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___11687);

return statearr_11590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___11687,jobs,results,process,async))
);


var c__7033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto__,jobs,results,process,async){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto__,jobs,results,process,async){
return (function (state_11628){
var state_val_11629 = (state_11628[(1)]);
if((state_val_11629 === (7))){
var inst_11624 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
var statearr_11630_11696 = state_11628__$1;
(statearr_11630_11696[(2)] = inst_11624);

(statearr_11630_11696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (20))){
var state_11628__$1 = state_11628;
var statearr_11631_11697 = state_11628__$1;
(statearr_11631_11697[(2)] = null);

(statearr_11631_11697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (1))){
var state_11628__$1 = state_11628;
var statearr_11632_11698 = state_11628__$1;
(statearr_11632_11698[(2)] = null);

(statearr_11632_11698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (4))){
var inst_11593 = (state_11628[(7)]);
var inst_11593__$1 = (state_11628[(2)]);
var inst_11594 = (inst_11593__$1 == null);
var state_11628__$1 = (function (){var statearr_11633 = state_11628;
(statearr_11633[(7)] = inst_11593__$1);

return statearr_11633;
})();
if(cljs.core.truth_(inst_11594)){
var statearr_11634_11699 = state_11628__$1;
(statearr_11634_11699[(1)] = (5));

} else {
var statearr_11635_11700 = state_11628__$1;
(statearr_11635_11700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (15))){
var inst_11606 = (state_11628[(8)]);
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11628__$1,(18),to,inst_11606);
} else {
if((state_val_11629 === (21))){
var inst_11619 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
var statearr_11636_11701 = state_11628__$1;
(statearr_11636_11701[(2)] = inst_11619);

(statearr_11636_11701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (13))){
var inst_11621 = (state_11628[(2)]);
var state_11628__$1 = (function (){var statearr_11637 = state_11628;
(statearr_11637[(9)] = inst_11621);

return statearr_11637;
})();
var statearr_11638_11702 = state_11628__$1;
(statearr_11638_11702[(2)] = null);

(statearr_11638_11702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (6))){
var inst_11593 = (state_11628[(7)]);
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11628__$1,(11),inst_11593);
} else {
if((state_val_11629 === (17))){
var inst_11614 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
if(cljs.core.truth_(inst_11614)){
var statearr_11639_11703 = state_11628__$1;
(statearr_11639_11703[(1)] = (19));

} else {
var statearr_11640_11704 = state_11628__$1;
(statearr_11640_11704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (3))){
var inst_11626 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11628__$1,inst_11626);
} else {
if((state_val_11629 === (12))){
var inst_11603 = (state_11628[(10)]);
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11628__$1,(14),inst_11603);
} else {
if((state_val_11629 === (2))){
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11628__$1,(4),results);
} else {
if((state_val_11629 === (19))){
var state_11628__$1 = state_11628;
var statearr_11641_11705 = state_11628__$1;
(statearr_11641_11705[(2)] = null);

(statearr_11641_11705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (11))){
var inst_11603 = (state_11628[(2)]);
var state_11628__$1 = (function (){var statearr_11642 = state_11628;
(statearr_11642[(10)] = inst_11603);

return statearr_11642;
})();
var statearr_11643_11706 = state_11628__$1;
(statearr_11643_11706[(2)] = null);

(statearr_11643_11706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (9))){
var state_11628__$1 = state_11628;
var statearr_11644_11707 = state_11628__$1;
(statearr_11644_11707[(2)] = null);

(statearr_11644_11707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (5))){
var state_11628__$1 = state_11628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11645_11708 = state_11628__$1;
(statearr_11645_11708[(1)] = (8));

} else {
var statearr_11646_11709 = state_11628__$1;
(statearr_11646_11709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (14))){
var inst_11606 = (state_11628[(8)]);
var inst_11608 = (state_11628[(11)]);
var inst_11606__$1 = (state_11628[(2)]);
var inst_11607 = (inst_11606__$1 == null);
var inst_11608__$1 = cljs.core.not.call(null,inst_11607);
var state_11628__$1 = (function (){var statearr_11647 = state_11628;
(statearr_11647[(8)] = inst_11606__$1);

(statearr_11647[(11)] = inst_11608__$1);

return statearr_11647;
})();
if(inst_11608__$1){
var statearr_11648_11710 = state_11628__$1;
(statearr_11648_11710[(1)] = (15));

} else {
var statearr_11649_11711 = state_11628__$1;
(statearr_11649_11711[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (16))){
var inst_11608 = (state_11628[(11)]);
var state_11628__$1 = state_11628;
var statearr_11650_11712 = state_11628__$1;
(statearr_11650_11712[(2)] = inst_11608);

(statearr_11650_11712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (10))){
var inst_11600 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
var statearr_11651_11713 = state_11628__$1;
(statearr_11651_11713[(2)] = inst_11600);

(statearr_11651_11713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (18))){
var inst_11611 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
var statearr_11652_11714 = state_11628__$1;
(statearr_11652_11714[(2)] = inst_11611);

(statearr_11652_11714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (8))){
var inst_11597 = cljs.core.async.close_BANG_.call(null,to);
var state_11628__$1 = state_11628;
var statearr_11653_11715 = state_11628__$1;
(statearr_11653_11715[(2)] = inst_11597);

(statearr_11653_11715[(1)] = (10));


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
});})(c__7033__auto__,jobs,results,process,async))
;
return ((function (switch__6977__auto__,c__7033__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0 = (function (){
var statearr_11657 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__);

(statearr_11657[(1)] = (1));

return statearr_11657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1 = (function (state_11628){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11658){if((e11658 instanceof Object)){
var ex__6981__auto__ = e11658;
var statearr_11659_11716 = state_11628;
(statearr_11659_11716[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11717 = state_11628;
state_11628 = G__11717;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__ = function(state_11628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1.call(this,state_11628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto__,jobs,results,process,async))
})();
var state__7035__auto__ = (function (){var statearr_11660 = f__7034__auto__.call(null);
(statearr_11660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto__);

return statearr_11660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto__,jobs,results,process,async))
);

return c__7033__auto__;
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
var c__7033__auto___11818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___11818,tc,fc){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___11818,tc,fc){
return (function (state_11793){
var state_val_11794 = (state_11793[(1)]);
if((state_val_11794 === (7))){
var inst_11789 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
var statearr_11795_11819 = state_11793__$1;
(statearr_11795_11819[(2)] = inst_11789);

(statearr_11795_11819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (1))){
var state_11793__$1 = state_11793;
var statearr_11796_11820 = state_11793__$1;
(statearr_11796_11820[(2)] = null);

(statearr_11796_11820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (4))){
var inst_11770 = (state_11793[(7)]);
var inst_11770__$1 = (state_11793[(2)]);
var inst_11771 = (inst_11770__$1 == null);
var state_11793__$1 = (function (){var statearr_11797 = state_11793;
(statearr_11797[(7)] = inst_11770__$1);

return statearr_11797;
})();
if(cljs.core.truth_(inst_11771)){
var statearr_11798_11821 = state_11793__$1;
(statearr_11798_11821[(1)] = (5));

} else {
var statearr_11799_11822 = state_11793__$1;
(statearr_11799_11822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (13))){
var state_11793__$1 = state_11793;
var statearr_11800_11823 = state_11793__$1;
(statearr_11800_11823[(2)] = null);

(statearr_11800_11823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (6))){
var inst_11770 = (state_11793[(7)]);
var inst_11776 = p.call(null,inst_11770);
var state_11793__$1 = state_11793;
if(cljs.core.truth_(inst_11776)){
var statearr_11801_11824 = state_11793__$1;
(statearr_11801_11824[(1)] = (9));

} else {
var statearr_11802_11825 = state_11793__$1;
(statearr_11802_11825[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (3))){
var inst_11791 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11793__$1,inst_11791);
} else {
if((state_val_11794 === (12))){
var state_11793__$1 = state_11793;
var statearr_11803_11826 = state_11793__$1;
(statearr_11803_11826[(2)] = null);

(statearr_11803_11826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (2))){
var state_11793__$1 = state_11793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11793__$1,(4),ch);
} else {
if((state_val_11794 === (11))){
var inst_11770 = (state_11793[(7)]);
var inst_11780 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11793__$1,(8),inst_11780,inst_11770);
} else {
if((state_val_11794 === (9))){
var state_11793__$1 = state_11793;
var statearr_11804_11827 = state_11793__$1;
(statearr_11804_11827[(2)] = tc);

(statearr_11804_11827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (5))){
var inst_11773 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11774 = cljs.core.async.close_BANG_.call(null,fc);
var state_11793__$1 = (function (){var statearr_11805 = state_11793;
(statearr_11805[(8)] = inst_11773);

return statearr_11805;
})();
var statearr_11806_11828 = state_11793__$1;
(statearr_11806_11828[(2)] = inst_11774);

(statearr_11806_11828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (14))){
var inst_11787 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
var statearr_11807_11829 = state_11793__$1;
(statearr_11807_11829[(2)] = inst_11787);

(statearr_11807_11829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (10))){
var state_11793__$1 = state_11793;
var statearr_11808_11830 = state_11793__$1;
(statearr_11808_11830[(2)] = fc);

(statearr_11808_11830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (8))){
var inst_11782 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
if(cljs.core.truth_(inst_11782)){
var statearr_11809_11831 = state_11793__$1;
(statearr_11809_11831[(1)] = (12));

} else {
var statearr_11810_11832 = state_11793__$1;
(statearr_11810_11832[(1)] = (13));

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
});})(c__7033__auto___11818,tc,fc))
;
return ((function (switch__6977__auto__,c__7033__auto___11818,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6978__auto__ = null;
var cljs$core$async$split_$_state_machine__6978__auto____0 = (function (){
var statearr_11814 = [null,null,null,null,null,null,null,null,null];
(statearr_11814[(0)] = cljs$core$async$split_$_state_machine__6978__auto__);

(statearr_11814[(1)] = (1));

return statearr_11814;
});
var cljs$core$async$split_$_state_machine__6978__auto____1 = (function (state_11793){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11815){if((e11815 instanceof Object)){
var ex__6981__auto__ = e11815;
var statearr_11816_11833 = state_11793;
(statearr_11816_11833[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11834 = state_11793;
state_11793 = G__11834;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6978__auto__ = function(state_11793){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6978__auto____1.call(this,state_11793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6978__auto____0;
cljs$core$async$split_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6978__auto____1;
return cljs$core$async$split_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___11818,tc,fc))
})();
var state__7035__auto__ = (function (){var statearr_11817 = f__7034__auto__.call(null);
(statearr_11817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___11818);

return statearr_11817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___11818,tc,fc))
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
var c__7033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto__){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto__){
return (function (state_11881){
var state_val_11882 = (state_11881[(1)]);
if((state_val_11882 === (7))){
var inst_11877 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11883_11899 = state_11881__$1;
(statearr_11883_11899[(2)] = inst_11877);

(statearr_11883_11899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (6))){
var inst_11870 = (state_11881[(7)]);
var inst_11867 = (state_11881[(8)]);
var inst_11874 = f.call(null,inst_11867,inst_11870);
var inst_11867__$1 = inst_11874;
var state_11881__$1 = (function (){var statearr_11884 = state_11881;
(statearr_11884[(8)] = inst_11867__$1);

return statearr_11884;
})();
var statearr_11885_11900 = state_11881__$1;
(statearr_11885_11900[(2)] = null);

(statearr_11885_11900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (5))){
var inst_11867 = (state_11881[(8)]);
var state_11881__$1 = state_11881;
var statearr_11886_11901 = state_11881__$1;
(statearr_11886_11901[(2)] = inst_11867);

(statearr_11886_11901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (4))){
var inst_11870 = (state_11881[(7)]);
var inst_11870__$1 = (state_11881[(2)]);
var inst_11871 = (inst_11870__$1 == null);
var state_11881__$1 = (function (){var statearr_11887 = state_11881;
(statearr_11887[(7)] = inst_11870__$1);

return statearr_11887;
})();
if(cljs.core.truth_(inst_11871)){
var statearr_11888_11902 = state_11881__$1;
(statearr_11888_11902[(1)] = (5));

} else {
var statearr_11889_11903 = state_11881__$1;
(statearr_11889_11903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (3))){
var inst_11879 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11881__$1,inst_11879);
} else {
if((state_val_11882 === (2))){
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11881__$1,(4),ch);
} else {
if((state_val_11882 === (1))){
var inst_11867 = init;
var state_11881__$1 = (function (){var statearr_11890 = state_11881;
(statearr_11890[(8)] = inst_11867);

return statearr_11890;
})();
var statearr_11891_11904 = state_11881__$1;
(statearr_11891_11904[(2)] = null);

(statearr_11891_11904[(1)] = (2));


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
});})(c__7033__auto__))
;
return ((function (switch__6977__auto__,c__7033__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6978__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6978__auto____0 = (function (){
var statearr_11895 = [null,null,null,null,null,null,null,null,null];
(statearr_11895[(0)] = cljs$core$async$reduce_$_state_machine__6978__auto__);

(statearr_11895[(1)] = (1));

return statearr_11895;
});
var cljs$core$async$reduce_$_state_machine__6978__auto____1 = (function (state_11881){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e11896){if((e11896 instanceof Object)){
var ex__6981__auto__ = e11896;
var statearr_11897_11905 = state_11881;
(statearr_11897_11905[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11906 = state_11881;
state_11881 = G__11906;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6978__auto__ = function(state_11881){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6978__auto____1.call(this,state_11881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6978__auto____0;
cljs$core$async$reduce_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6978__auto____1;
return cljs$core$async$reduce_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto__))
})();
var state__7035__auto__ = (function (){var statearr_11898 = f__7034__auto__.call(null);
(statearr_11898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto__);

return statearr_11898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto__))
);

return c__7033__auto__;
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
var c__7033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto__){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto__){
return (function (state_11980){
var state_val_11981 = (state_11980[(1)]);
if((state_val_11981 === (7))){
var inst_11962 = (state_11980[(2)]);
var state_11980__$1 = state_11980;
var statearr_11982_12005 = state_11980__$1;
(statearr_11982_12005[(2)] = inst_11962);

(statearr_11982_12005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (1))){
var inst_11956 = cljs.core.seq.call(null,coll);
var inst_11957 = inst_11956;
var state_11980__$1 = (function (){var statearr_11983 = state_11980;
(statearr_11983[(7)] = inst_11957);

return statearr_11983;
})();
var statearr_11984_12006 = state_11980__$1;
(statearr_11984_12006[(2)] = null);

(statearr_11984_12006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (4))){
var inst_11957 = (state_11980[(7)]);
var inst_11960 = cljs.core.first.call(null,inst_11957);
var state_11980__$1 = state_11980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11980__$1,(7),ch,inst_11960);
} else {
if((state_val_11981 === (13))){
var inst_11974 = (state_11980[(2)]);
var state_11980__$1 = state_11980;
var statearr_11985_12007 = state_11980__$1;
(statearr_11985_12007[(2)] = inst_11974);

(statearr_11985_12007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (6))){
var inst_11965 = (state_11980[(2)]);
var state_11980__$1 = state_11980;
if(cljs.core.truth_(inst_11965)){
var statearr_11986_12008 = state_11980__$1;
(statearr_11986_12008[(1)] = (8));

} else {
var statearr_11987_12009 = state_11980__$1;
(statearr_11987_12009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (3))){
var inst_11978 = (state_11980[(2)]);
var state_11980__$1 = state_11980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11980__$1,inst_11978);
} else {
if((state_val_11981 === (12))){
var state_11980__$1 = state_11980;
var statearr_11988_12010 = state_11980__$1;
(statearr_11988_12010[(2)] = null);

(statearr_11988_12010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (2))){
var inst_11957 = (state_11980[(7)]);
var state_11980__$1 = state_11980;
if(cljs.core.truth_(inst_11957)){
var statearr_11989_12011 = state_11980__$1;
(statearr_11989_12011[(1)] = (4));

} else {
var statearr_11990_12012 = state_11980__$1;
(statearr_11990_12012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (11))){
var inst_11971 = cljs.core.async.close_BANG_.call(null,ch);
var state_11980__$1 = state_11980;
var statearr_11991_12013 = state_11980__$1;
(statearr_11991_12013[(2)] = inst_11971);

(statearr_11991_12013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (9))){
var state_11980__$1 = state_11980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11992_12014 = state_11980__$1;
(statearr_11992_12014[(1)] = (11));

} else {
var statearr_11993_12015 = state_11980__$1;
(statearr_11993_12015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (5))){
var inst_11957 = (state_11980[(7)]);
var state_11980__$1 = state_11980;
var statearr_11994_12016 = state_11980__$1;
(statearr_11994_12016[(2)] = inst_11957);

(statearr_11994_12016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (10))){
var inst_11976 = (state_11980[(2)]);
var state_11980__$1 = state_11980;
var statearr_11995_12017 = state_11980__$1;
(statearr_11995_12017[(2)] = inst_11976);

(statearr_11995_12017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (8))){
var inst_11957 = (state_11980[(7)]);
var inst_11967 = cljs.core.next.call(null,inst_11957);
var inst_11957__$1 = inst_11967;
var state_11980__$1 = (function (){var statearr_11996 = state_11980;
(statearr_11996[(7)] = inst_11957__$1);

return statearr_11996;
})();
var statearr_11997_12018 = state_11980__$1;
(statearr_11997_12018[(2)] = null);

(statearr_11997_12018[(1)] = (2));


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
});})(c__7033__auto__))
;
return ((function (switch__6977__auto__,c__7033__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6978__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6978__auto____0 = (function (){
var statearr_12001 = [null,null,null,null,null,null,null,null];
(statearr_12001[(0)] = cljs$core$async$onto_chan_$_state_machine__6978__auto__);

(statearr_12001[(1)] = (1));

return statearr_12001;
});
var cljs$core$async$onto_chan_$_state_machine__6978__auto____1 = (function (state_11980){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_11980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e12002){if((e12002 instanceof Object)){
var ex__6981__auto__ = e12002;
var statearr_12003_12019 = state_11980;
(statearr_12003_12019[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12020 = state_11980;
state_11980 = G__12020;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6978__auto__ = function(state_11980){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6978__auto____1.call(this,state_11980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6978__auto____0;
cljs$core$async$onto_chan_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6978__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto__))
})();
var state__7035__auto__ = (function (){var statearr_12004 = f__7034__auto__.call(null);
(statearr_12004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto__);

return statearr_12004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto__))
);

return c__7033__auto__;
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

cljs.core.async.Mux = (function (){var obj12022 = {};
return obj12022;
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


cljs.core.async.Mult = (function (){var obj12024 = {};
return obj12024;
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
if(typeof cljs.core.async.t12246 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12246 = (function (cs,ch,mult,meta12247){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12247 = meta12247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12246.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12246.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12246.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12246.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12246.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12248){
var self__ = this;
var _12248__$1 = this;
return self__.meta12247;
});})(cs))
;

cljs.core.async.t12246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12248,meta12247__$1){
var self__ = this;
var _12248__$1 = this;
return (new cljs.core.async.t12246(self__.cs,self__.ch,self__.mult,meta12247__$1));
});})(cs))
;

cljs.core.async.t12246.cljs$lang$type = true;

cljs.core.async.t12246.cljs$lang$ctorStr = "cljs.core.async/t12246";

cljs.core.async.t12246.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t12246");
});})(cs))
;

cljs.core.async.__GT_t12246 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t12246(cs__$1,ch__$1,mult__$1,meta12247){
return (new cljs.core.async.t12246(cs__$1,ch__$1,mult__$1,meta12247));
});})(cs))
;

}

return (new cljs.core.async.t12246(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7033__auto___12467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___12467,cs,m,dchan,dctr,done){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___12467,cs,m,dchan,dctr,done){
return (function (state_12379){
var state_val_12380 = (state_12379[(1)]);
if((state_val_12380 === (7))){
var inst_12375 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12381_12468 = state_12379__$1;
(statearr_12381_12468[(2)] = inst_12375);

(statearr_12381_12468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (20))){
var inst_12280 = (state_12379[(7)]);
var inst_12290 = cljs.core.first.call(null,inst_12280);
var inst_12291 = cljs.core.nth.call(null,inst_12290,(0),null);
var inst_12292 = cljs.core.nth.call(null,inst_12290,(1),null);
var state_12379__$1 = (function (){var statearr_12382 = state_12379;
(statearr_12382[(8)] = inst_12291);

return statearr_12382;
})();
if(cljs.core.truth_(inst_12292)){
var statearr_12383_12469 = state_12379__$1;
(statearr_12383_12469[(1)] = (22));

} else {
var statearr_12384_12470 = state_12379__$1;
(statearr_12384_12470[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (27))){
var inst_12251 = (state_12379[(9)]);
var inst_12320 = (state_12379[(10)]);
var inst_12327 = (state_12379[(11)]);
var inst_12322 = (state_12379[(12)]);
var inst_12327__$1 = cljs.core._nth.call(null,inst_12320,inst_12322);
var inst_12328 = cljs.core.async.put_BANG_.call(null,inst_12327__$1,inst_12251,done);
var state_12379__$1 = (function (){var statearr_12385 = state_12379;
(statearr_12385[(11)] = inst_12327__$1);

return statearr_12385;
})();
if(cljs.core.truth_(inst_12328)){
var statearr_12386_12471 = state_12379__$1;
(statearr_12386_12471[(1)] = (30));

} else {
var statearr_12387_12472 = state_12379__$1;
(statearr_12387_12472[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (1))){
var state_12379__$1 = state_12379;
var statearr_12388_12473 = state_12379__$1;
(statearr_12388_12473[(2)] = null);

(statearr_12388_12473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (24))){
var inst_12280 = (state_12379[(7)]);
var inst_12297 = (state_12379[(2)]);
var inst_12298 = cljs.core.next.call(null,inst_12280);
var inst_12260 = inst_12298;
var inst_12261 = null;
var inst_12262 = (0);
var inst_12263 = (0);
var state_12379__$1 = (function (){var statearr_12389 = state_12379;
(statearr_12389[(13)] = inst_12262);

(statearr_12389[(14)] = inst_12261);

(statearr_12389[(15)] = inst_12297);

(statearr_12389[(16)] = inst_12263);

(statearr_12389[(17)] = inst_12260);

return statearr_12389;
})();
var statearr_12390_12474 = state_12379__$1;
(statearr_12390_12474[(2)] = null);

(statearr_12390_12474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (39))){
var state_12379__$1 = state_12379;
var statearr_12394_12475 = state_12379__$1;
(statearr_12394_12475[(2)] = null);

(statearr_12394_12475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (4))){
var inst_12251 = (state_12379[(9)]);
var inst_12251__$1 = (state_12379[(2)]);
var inst_12252 = (inst_12251__$1 == null);
var state_12379__$1 = (function (){var statearr_12395 = state_12379;
(statearr_12395[(9)] = inst_12251__$1);

return statearr_12395;
})();
if(cljs.core.truth_(inst_12252)){
var statearr_12396_12476 = state_12379__$1;
(statearr_12396_12476[(1)] = (5));

} else {
var statearr_12397_12477 = state_12379__$1;
(statearr_12397_12477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (15))){
var inst_12262 = (state_12379[(13)]);
var inst_12261 = (state_12379[(14)]);
var inst_12263 = (state_12379[(16)]);
var inst_12260 = (state_12379[(17)]);
var inst_12276 = (state_12379[(2)]);
var inst_12277 = (inst_12263 + (1));
var tmp12391 = inst_12262;
var tmp12392 = inst_12261;
var tmp12393 = inst_12260;
var inst_12260__$1 = tmp12393;
var inst_12261__$1 = tmp12392;
var inst_12262__$1 = tmp12391;
var inst_12263__$1 = inst_12277;
var state_12379__$1 = (function (){var statearr_12398 = state_12379;
(statearr_12398[(18)] = inst_12276);

(statearr_12398[(13)] = inst_12262__$1);

(statearr_12398[(14)] = inst_12261__$1);

(statearr_12398[(16)] = inst_12263__$1);

(statearr_12398[(17)] = inst_12260__$1);

return statearr_12398;
})();
var statearr_12399_12478 = state_12379__$1;
(statearr_12399_12478[(2)] = null);

(statearr_12399_12478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (21))){
var inst_12301 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12403_12479 = state_12379__$1;
(statearr_12403_12479[(2)] = inst_12301);

(statearr_12403_12479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (31))){
var inst_12327 = (state_12379[(11)]);
var inst_12331 = done.call(null,null);
var inst_12332 = cljs.core.async.untap_STAR_.call(null,m,inst_12327);
var state_12379__$1 = (function (){var statearr_12404 = state_12379;
(statearr_12404[(19)] = inst_12331);

return statearr_12404;
})();
var statearr_12405_12480 = state_12379__$1;
(statearr_12405_12480[(2)] = inst_12332);

(statearr_12405_12480[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (32))){
var inst_12319 = (state_12379[(20)]);
var inst_12320 = (state_12379[(10)]);
var inst_12321 = (state_12379[(21)]);
var inst_12322 = (state_12379[(12)]);
var inst_12334 = (state_12379[(2)]);
var inst_12335 = (inst_12322 + (1));
var tmp12400 = inst_12319;
var tmp12401 = inst_12320;
var tmp12402 = inst_12321;
var inst_12319__$1 = tmp12400;
var inst_12320__$1 = tmp12401;
var inst_12321__$1 = tmp12402;
var inst_12322__$1 = inst_12335;
var state_12379__$1 = (function (){var statearr_12406 = state_12379;
(statearr_12406[(20)] = inst_12319__$1);

(statearr_12406[(10)] = inst_12320__$1);

(statearr_12406[(21)] = inst_12321__$1);

(statearr_12406[(22)] = inst_12334);

(statearr_12406[(12)] = inst_12322__$1);

return statearr_12406;
})();
var statearr_12407_12481 = state_12379__$1;
(statearr_12407_12481[(2)] = null);

(statearr_12407_12481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (40))){
var inst_12347 = (state_12379[(23)]);
var inst_12351 = done.call(null,null);
var inst_12352 = cljs.core.async.untap_STAR_.call(null,m,inst_12347);
var state_12379__$1 = (function (){var statearr_12408 = state_12379;
(statearr_12408[(24)] = inst_12351);

return statearr_12408;
})();
var statearr_12409_12482 = state_12379__$1;
(statearr_12409_12482[(2)] = inst_12352);

(statearr_12409_12482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (33))){
var inst_12338 = (state_12379[(25)]);
var inst_12340 = cljs.core.chunked_seq_QMARK_.call(null,inst_12338);
var state_12379__$1 = state_12379;
if(inst_12340){
var statearr_12410_12483 = state_12379__$1;
(statearr_12410_12483[(1)] = (36));

} else {
var statearr_12411_12484 = state_12379__$1;
(statearr_12411_12484[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (13))){
var inst_12270 = (state_12379[(26)]);
var inst_12273 = cljs.core.async.close_BANG_.call(null,inst_12270);
var state_12379__$1 = state_12379;
var statearr_12412_12485 = state_12379__$1;
(statearr_12412_12485[(2)] = inst_12273);

(statearr_12412_12485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (22))){
var inst_12291 = (state_12379[(8)]);
var inst_12294 = cljs.core.async.close_BANG_.call(null,inst_12291);
var state_12379__$1 = state_12379;
var statearr_12413_12486 = state_12379__$1;
(statearr_12413_12486[(2)] = inst_12294);

(statearr_12413_12486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (36))){
var inst_12338 = (state_12379[(25)]);
var inst_12342 = cljs.core.chunk_first.call(null,inst_12338);
var inst_12343 = cljs.core.chunk_rest.call(null,inst_12338);
var inst_12344 = cljs.core.count.call(null,inst_12342);
var inst_12319 = inst_12343;
var inst_12320 = inst_12342;
var inst_12321 = inst_12344;
var inst_12322 = (0);
var state_12379__$1 = (function (){var statearr_12414 = state_12379;
(statearr_12414[(20)] = inst_12319);

(statearr_12414[(10)] = inst_12320);

(statearr_12414[(21)] = inst_12321);

(statearr_12414[(12)] = inst_12322);

return statearr_12414;
})();
var statearr_12415_12487 = state_12379__$1;
(statearr_12415_12487[(2)] = null);

(statearr_12415_12487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (41))){
var inst_12338 = (state_12379[(25)]);
var inst_12354 = (state_12379[(2)]);
var inst_12355 = cljs.core.next.call(null,inst_12338);
var inst_12319 = inst_12355;
var inst_12320 = null;
var inst_12321 = (0);
var inst_12322 = (0);
var state_12379__$1 = (function (){var statearr_12416 = state_12379;
(statearr_12416[(27)] = inst_12354);

(statearr_12416[(20)] = inst_12319);

(statearr_12416[(10)] = inst_12320);

(statearr_12416[(21)] = inst_12321);

(statearr_12416[(12)] = inst_12322);

return statearr_12416;
})();
var statearr_12417_12488 = state_12379__$1;
(statearr_12417_12488[(2)] = null);

(statearr_12417_12488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (43))){
var state_12379__$1 = state_12379;
var statearr_12418_12489 = state_12379__$1;
(statearr_12418_12489[(2)] = null);

(statearr_12418_12489[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (29))){
var inst_12363 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12419_12490 = state_12379__$1;
(statearr_12419_12490[(2)] = inst_12363);

(statearr_12419_12490[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (44))){
var inst_12372 = (state_12379[(2)]);
var state_12379__$1 = (function (){var statearr_12420 = state_12379;
(statearr_12420[(28)] = inst_12372);

return statearr_12420;
})();
var statearr_12421_12491 = state_12379__$1;
(statearr_12421_12491[(2)] = null);

(statearr_12421_12491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (6))){
var inst_12311 = (state_12379[(29)]);
var inst_12310 = cljs.core.deref.call(null,cs);
var inst_12311__$1 = cljs.core.keys.call(null,inst_12310);
var inst_12312 = cljs.core.count.call(null,inst_12311__$1);
var inst_12313 = cljs.core.reset_BANG_.call(null,dctr,inst_12312);
var inst_12318 = cljs.core.seq.call(null,inst_12311__$1);
var inst_12319 = inst_12318;
var inst_12320 = null;
var inst_12321 = (0);
var inst_12322 = (0);
var state_12379__$1 = (function (){var statearr_12422 = state_12379;
(statearr_12422[(20)] = inst_12319);

(statearr_12422[(29)] = inst_12311__$1);

(statearr_12422[(10)] = inst_12320);

(statearr_12422[(21)] = inst_12321);

(statearr_12422[(30)] = inst_12313);

(statearr_12422[(12)] = inst_12322);

return statearr_12422;
})();
var statearr_12423_12492 = state_12379__$1;
(statearr_12423_12492[(2)] = null);

(statearr_12423_12492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (28))){
var inst_12319 = (state_12379[(20)]);
var inst_12338 = (state_12379[(25)]);
var inst_12338__$1 = cljs.core.seq.call(null,inst_12319);
var state_12379__$1 = (function (){var statearr_12424 = state_12379;
(statearr_12424[(25)] = inst_12338__$1);

return statearr_12424;
})();
if(inst_12338__$1){
var statearr_12425_12493 = state_12379__$1;
(statearr_12425_12493[(1)] = (33));

} else {
var statearr_12426_12494 = state_12379__$1;
(statearr_12426_12494[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (25))){
var inst_12321 = (state_12379[(21)]);
var inst_12322 = (state_12379[(12)]);
var inst_12324 = (inst_12322 < inst_12321);
var inst_12325 = inst_12324;
var state_12379__$1 = state_12379;
if(cljs.core.truth_(inst_12325)){
var statearr_12427_12495 = state_12379__$1;
(statearr_12427_12495[(1)] = (27));

} else {
var statearr_12428_12496 = state_12379__$1;
(statearr_12428_12496[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (34))){
var state_12379__$1 = state_12379;
var statearr_12429_12497 = state_12379__$1;
(statearr_12429_12497[(2)] = null);

(statearr_12429_12497[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (17))){
var state_12379__$1 = state_12379;
var statearr_12430_12498 = state_12379__$1;
(statearr_12430_12498[(2)] = null);

(statearr_12430_12498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (3))){
var inst_12377 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12379__$1,inst_12377);
} else {
if((state_val_12380 === (12))){
var inst_12306 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12431_12499 = state_12379__$1;
(statearr_12431_12499[(2)] = inst_12306);

(statearr_12431_12499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (2))){
var state_12379__$1 = state_12379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12379__$1,(4),ch);
} else {
if((state_val_12380 === (23))){
var state_12379__$1 = state_12379;
var statearr_12432_12500 = state_12379__$1;
(statearr_12432_12500[(2)] = null);

(statearr_12432_12500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (35))){
var inst_12361 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12433_12501 = state_12379__$1;
(statearr_12433_12501[(2)] = inst_12361);

(statearr_12433_12501[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (19))){
var inst_12280 = (state_12379[(7)]);
var inst_12284 = cljs.core.chunk_first.call(null,inst_12280);
var inst_12285 = cljs.core.chunk_rest.call(null,inst_12280);
var inst_12286 = cljs.core.count.call(null,inst_12284);
var inst_12260 = inst_12285;
var inst_12261 = inst_12284;
var inst_12262 = inst_12286;
var inst_12263 = (0);
var state_12379__$1 = (function (){var statearr_12434 = state_12379;
(statearr_12434[(13)] = inst_12262);

(statearr_12434[(14)] = inst_12261);

(statearr_12434[(16)] = inst_12263);

(statearr_12434[(17)] = inst_12260);

return statearr_12434;
})();
var statearr_12435_12502 = state_12379__$1;
(statearr_12435_12502[(2)] = null);

(statearr_12435_12502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (11))){
var inst_12260 = (state_12379[(17)]);
var inst_12280 = (state_12379[(7)]);
var inst_12280__$1 = cljs.core.seq.call(null,inst_12260);
var state_12379__$1 = (function (){var statearr_12436 = state_12379;
(statearr_12436[(7)] = inst_12280__$1);

return statearr_12436;
})();
if(inst_12280__$1){
var statearr_12437_12503 = state_12379__$1;
(statearr_12437_12503[(1)] = (16));

} else {
var statearr_12438_12504 = state_12379__$1;
(statearr_12438_12504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (9))){
var inst_12308 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12439_12505 = state_12379__$1;
(statearr_12439_12505[(2)] = inst_12308);

(statearr_12439_12505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (5))){
var inst_12258 = cljs.core.deref.call(null,cs);
var inst_12259 = cljs.core.seq.call(null,inst_12258);
var inst_12260 = inst_12259;
var inst_12261 = null;
var inst_12262 = (0);
var inst_12263 = (0);
var state_12379__$1 = (function (){var statearr_12440 = state_12379;
(statearr_12440[(13)] = inst_12262);

(statearr_12440[(14)] = inst_12261);

(statearr_12440[(16)] = inst_12263);

(statearr_12440[(17)] = inst_12260);

return statearr_12440;
})();
var statearr_12441_12506 = state_12379__$1;
(statearr_12441_12506[(2)] = null);

(statearr_12441_12506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (14))){
var state_12379__$1 = state_12379;
var statearr_12442_12507 = state_12379__$1;
(statearr_12442_12507[(2)] = null);

(statearr_12442_12507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (45))){
var inst_12369 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12443_12508 = state_12379__$1;
(statearr_12443_12508[(2)] = inst_12369);

(statearr_12443_12508[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (26))){
var inst_12311 = (state_12379[(29)]);
var inst_12365 = (state_12379[(2)]);
var inst_12366 = cljs.core.seq.call(null,inst_12311);
var state_12379__$1 = (function (){var statearr_12444 = state_12379;
(statearr_12444[(31)] = inst_12365);

return statearr_12444;
})();
if(inst_12366){
var statearr_12445_12509 = state_12379__$1;
(statearr_12445_12509[(1)] = (42));

} else {
var statearr_12446_12510 = state_12379__$1;
(statearr_12446_12510[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (16))){
var inst_12280 = (state_12379[(7)]);
var inst_12282 = cljs.core.chunked_seq_QMARK_.call(null,inst_12280);
var state_12379__$1 = state_12379;
if(inst_12282){
var statearr_12447_12511 = state_12379__$1;
(statearr_12447_12511[(1)] = (19));

} else {
var statearr_12448_12512 = state_12379__$1;
(statearr_12448_12512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (38))){
var inst_12358 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12449_12513 = state_12379__$1;
(statearr_12449_12513[(2)] = inst_12358);

(statearr_12449_12513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (30))){
var state_12379__$1 = state_12379;
var statearr_12450_12514 = state_12379__$1;
(statearr_12450_12514[(2)] = null);

(statearr_12450_12514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (10))){
var inst_12261 = (state_12379[(14)]);
var inst_12263 = (state_12379[(16)]);
var inst_12269 = cljs.core._nth.call(null,inst_12261,inst_12263);
var inst_12270 = cljs.core.nth.call(null,inst_12269,(0),null);
var inst_12271 = cljs.core.nth.call(null,inst_12269,(1),null);
var state_12379__$1 = (function (){var statearr_12451 = state_12379;
(statearr_12451[(26)] = inst_12270);

return statearr_12451;
})();
if(cljs.core.truth_(inst_12271)){
var statearr_12452_12515 = state_12379__$1;
(statearr_12452_12515[(1)] = (13));

} else {
var statearr_12453_12516 = state_12379__$1;
(statearr_12453_12516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (18))){
var inst_12304 = (state_12379[(2)]);
var state_12379__$1 = state_12379;
var statearr_12454_12517 = state_12379__$1;
(statearr_12454_12517[(2)] = inst_12304);

(statearr_12454_12517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (42))){
var state_12379__$1 = state_12379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12379__$1,(45),dchan);
} else {
if((state_val_12380 === (37))){
var inst_12251 = (state_12379[(9)]);
var inst_12338 = (state_12379[(25)]);
var inst_12347 = (state_12379[(23)]);
var inst_12347__$1 = cljs.core.first.call(null,inst_12338);
var inst_12348 = cljs.core.async.put_BANG_.call(null,inst_12347__$1,inst_12251,done);
var state_12379__$1 = (function (){var statearr_12455 = state_12379;
(statearr_12455[(23)] = inst_12347__$1);

return statearr_12455;
})();
if(cljs.core.truth_(inst_12348)){
var statearr_12456_12518 = state_12379__$1;
(statearr_12456_12518[(1)] = (39));

} else {
var statearr_12457_12519 = state_12379__$1;
(statearr_12457_12519[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12380 === (8))){
var inst_12262 = (state_12379[(13)]);
var inst_12263 = (state_12379[(16)]);
var inst_12265 = (inst_12263 < inst_12262);
var inst_12266 = inst_12265;
var state_12379__$1 = state_12379;
if(cljs.core.truth_(inst_12266)){
var statearr_12458_12520 = state_12379__$1;
(statearr_12458_12520[(1)] = (10));

} else {
var statearr_12459_12521 = state_12379__$1;
(statearr_12459_12521[(1)] = (11));

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
});})(c__7033__auto___12467,cs,m,dchan,dctr,done))
;
return ((function (switch__6977__auto__,c__7033__auto___12467,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6978__auto__ = null;
var cljs$core$async$mult_$_state_machine__6978__auto____0 = (function (){
var statearr_12463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12463[(0)] = cljs$core$async$mult_$_state_machine__6978__auto__);

(statearr_12463[(1)] = (1));

return statearr_12463;
});
var cljs$core$async$mult_$_state_machine__6978__auto____1 = (function (state_12379){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_12379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e12464){if((e12464 instanceof Object)){
var ex__6981__auto__ = e12464;
var statearr_12465_12522 = state_12379;
(statearr_12465_12522[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12523 = state_12379;
state_12379 = G__12523;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6978__auto__ = function(state_12379){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6978__auto____1.call(this,state_12379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6978__auto____0;
cljs$core$async$mult_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6978__auto____1;
return cljs$core$async$mult_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___12467,cs,m,dchan,dctr,done))
})();
var state__7035__auto__ = (function (){var statearr_12466 = f__7034__auto__.call(null);
(statearr_12466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___12467);

return statearr_12466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___12467,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj12525 = {};
return obj12525;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12526){
var map__12531 = p__12526;
var map__12531__$1 = ((cljs.core.seq_QMARK_.call(null,map__12531))?cljs.core.apply.call(null,cljs.core.hash_map,map__12531):map__12531);
var opts = map__12531__$1;
var statearr_12532_12535 = state;
(statearr_12532_12535[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12531,map__12531__$1,opts){
return (function (val){
var statearr_12533_12536 = state;
(statearr_12533_12536[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12531,map__12531__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12534_12537 = state;
(statearr_12534_12537[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12526 = null;
if (arguments.length > 3) {
var G__12538__i = 0, G__12538__a = new Array(arguments.length -  3);
while (G__12538__i < G__12538__a.length) {G__12538__a[G__12538__i] = arguments[G__12538__i + 3]; ++G__12538__i;}
  p__12526 = new cljs.core.IndexedSeq(G__12538__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12526);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12539){
var state = cljs.core.first(arglist__12539);
arglist__12539 = cljs.core.next(arglist__12539);
var cont_block = cljs.core.first(arglist__12539);
arglist__12539 = cljs.core.next(arglist__12539);
var ports = cljs.core.first(arglist__12539);
var p__12526 = cljs.core.rest(arglist__12539);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__12526);
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
if(typeof cljs.core.async.t12659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12659 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12660){
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
this.meta12660 = meta12660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12659.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12659.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12659.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12659.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12659.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12659.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t12659.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12661){
var self__ = this;
var _12661__$1 = this;
return self__.meta12660;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12661,meta12660__$1){
var self__ = this;
var _12661__$1 = this;
return (new cljs.core.async.t12659(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12660__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12659.cljs$lang$type = true;

cljs.core.async.t12659.cljs$lang$ctorStr = "cljs.core.async/t12659";

cljs.core.async.t12659.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t12659");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12659 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t12659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12660){
return (new cljs.core.async.t12659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12660));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12659(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7033__auto___12778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___12778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___12778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12731){
var state_val_12732 = (state_12731[(1)]);
if((state_val_12732 === (7))){
var inst_12675 = (state_12731[(7)]);
var inst_12680 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12675);
var state_12731__$1 = state_12731;
var statearr_12733_12779 = state_12731__$1;
(statearr_12733_12779[(2)] = inst_12680);

(statearr_12733_12779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (20))){
var inst_12690 = (state_12731[(8)]);
var state_12731__$1 = state_12731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12731__$1,(23),out,inst_12690);
} else {
if((state_val_12732 === (1))){
var inst_12665 = (state_12731[(9)]);
var inst_12665__$1 = calc_state.call(null);
var inst_12666 = cljs.core.seq_QMARK_.call(null,inst_12665__$1);
var state_12731__$1 = (function (){var statearr_12734 = state_12731;
(statearr_12734[(9)] = inst_12665__$1);

return statearr_12734;
})();
if(inst_12666){
var statearr_12735_12780 = state_12731__$1;
(statearr_12735_12780[(1)] = (2));

} else {
var statearr_12736_12781 = state_12731__$1;
(statearr_12736_12781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (24))){
var inst_12683 = (state_12731[(10)]);
var inst_12675 = inst_12683;
var state_12731__$1 = (function (){var statearr_12737 = state_12731;
(statearr_12737[(7)] = inst_12675);

return statearr_12737;
})();
var statearr_12738_12782 = state_12731__$1;
(statearr_12738_12782[(2)] = null);

(statearr_12738_12782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (4))){
var inst_12665 = (state_12731[(9)]);
var inst_12671 = (state_12731[(2)]);
var inst_12672 = cljs.core.get.call(null,inst_12671,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12673 = cljs.core.get.call(null,inst_12671,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12674 = cljs.core.get.call(null,inst_12671,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12675 = inst_12665;
var state_12731__$1 = (function (){var statearr_12739 = state_12731;
(statearr_12739[(11)] = inst_12672);

(statearr_12739[(12)] = inst_12673);

(statearr_12739[(13)] = inst_12674);

(statearr_12739[(7)] = inst_12675);

return statearr_12739;
})();
var statearr_12740_12783 = state_12731__$1;
(statearr_12740_12783[(2)] = null);

(statearr_12740_12783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (15))){
var state_12731__$1 = state_12731;
var statearr_12741_12784 = state_12731__$1;
(statearr_12741_12784[(2)] = null);

(statearr_12741_12784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (21))){
var inst_12683 = (state_12731[(10)]);
var inst_12675 = inst_12683;
var state_12731__$1 = (function (){var statearr_12742 = state_12731;
(statearr_12742[(7)] = inst_12675);

return statearr_12742;
})();
var statearr_12743_12785 = state_12731__$1;
(statearr_12743_12785[(2)] = null);

(statearr_12743_12785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (13))){
var inst_12727 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
var statearr_12744_12786 = state_12731__$1;
(statearr_12744_12786[(2)] = inst_12727);

(statearr_12744_12786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (22))){
var inst_12725 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
var statearr_12745_12787 = state_12731__$1;
(statearr_12745_12787[(2)] = inst_12725);

(statearr_12745_12787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (6))){
var inst_12729 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12731__$1,inst_12729);
} else {
if((state_val_12732 === (25))){
var state_12731__$1 = state_12731;
var statearr_12746_12788 = state_12731__$1;
(statearr_12746_12788[(2)] = null);

(statearr_12746_12788[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (17))){
var inst_12705 = (state_12731[(14)]);
var state_12731__$1 = state_12731;
var statearr_12747_12789 = state_12731__$1;
(statearr_12747_12789[(2)] = inst_12705);

(statearr_12747_12789[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (3))){
var inst_12665 = (state_12731[(9)]);
var state_12731__$1 = state_12731;
var statearr_12748_12790 = state_12731__$1;
(statearr_12748_12790[(2)] = inst_12665);

(statearr_12748_12790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (12))){
var inst_12705 = (state_12731[(14)]);
var inst_12691 = (state_12731[(15)]);
var inst_12686 = (state_12731[(16)]);
var inst_12705__$1 = inst_12686.call(null,inst_12691);
var state_12731__$1 = (function (){var statearr_12749 = state_12731;
(statearr_12749[(14)] = inst_12705__$1);

return statearr_12749;
})();
if(cljs.core.truth_(inst_12705__$1)){
var statearr_12750_12791 = state_12731__$1;
(statearr_12750_12791[(1)] = (17));

} else {
var statearr_12751_12792 = state_12731__$1;
(statearr_12751_12792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (2))){
var inst_12665 = (state_12731[(9)]);
var inst_12668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12665);
var state_12731__$1 = state_12731;
var statearr_12752_12793 = state_12731__$1;
(statearr_12752_12793[(2)] = inst_12668);

(statearr_12752_12793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (23))){
var inst_12716 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
if(cljs.core.truth_(inst_12716)){
var statearr_12753_12794 = state_12731__$1;
(statearr_12753_12794[(1)] = (24));

} else {
var statearr_12754_12795 = state_12731__$1;
(statearr_12754_12795[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (19))){
var inst_12713 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
if(cljs.core.truth_(inst_12713)){
var statearr_12755_12796 = state_12731__$1;
(statearr_12755_12796[(1)] = (20));

} else {
var statearr_12756_12797 = state_12731__$1;
(statearr_12756_12797[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (11))){
var inst_12690 = (state_12731[(8)]);
var inst_12696 = (inst_12690 == null);
var state_12731__$1 = state_12731;
if(cljs.core.truth_(inst_12696)){
var statearr_12757_12798 = state_12731__$1;
(statearr_12757_12798[(1)] = (14));

} else {
var statearr_12758_12799 = state_12731__$1;
(statearr_12758_12799[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (9))){
var inst_12683 = (state_12731[(10)]);
var inst_12683__$1 = (state_12731[(2)]);
var inst_12684 = cljs.core.get.call(null,inst_12683__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12685 = cljs.core.get.call(null,inst_12683__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12686 = cljs.core.get.call(null,inst_12683__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_12731__$1 = (function (){var statearr_12759 = state_12731;
(statearr_12759[(10)] = inst_12683__$1);

(statearr_12759[(17)] = inst_12685);

(statearr_12759[(16)] = inst_12686);

return statearr_12759;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12731__$1,(10),inst_12684);
} else {
if((state_val_12732 === (5))){
var inst_12675 = (state_12731[(7)]);
var inst_12678 = cljs.core.seq_QMARK_.call(null,inst_12675);
var state_12731__$1 = state_12731;
if(inst_12678){
var statearr_12760_12800 = state_12731__$1;
(statearr_12760_12800[(1)] = (7));

} else {
var statearr_12761_12801 = state_12731__$1;
(statearr_12761_12801[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (14))){
var inst_12691 = (state_12731[(15)]);
var inst_12698 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12691);
var state_12731__$1 = state_12731;
var statearr_12762_12802 = state_12731__$1;
(statearr_12762_12802[(2)] = inst_12698);

(statearr_12762_12802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (26))){
var inst_12721 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
var statearr_12763_12803 = state_12731__$1;
(statearr_12763_12803[(2)] = inst_12721);

(statearr_12763_12803[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (16))){
var inst_12701 = (state_12731[(2)]);
var inst_12702 = calc_state.call(null);
var inst_12675 = inst_12702;
var state_12731__$1 = (function (){var statearr_12764 = state_12731;
(statearr_12764[(18)] = inst_12701);

(statearr_12764[(7)] = inst_12675);

return statearr_12764;
})();
var statearr_12765_12804 = state_12731__$1;
(statearr_12765_12804[(2)] = null);

(statearr_12765_12804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (10))){
var inst_12691 = (state_12731[(15)]);
var inst_12690 = (state_12731[(8)]);
var inst_12689 = (state_12731[(2)]);
var inst_12690__$1 = cljs.core.nth.call(null,inst_12689,(0),null);
var inst_12691__$1 = cljs.core.nth.call(null,inst_12689,(1),null);
var inst_12692 = (inst_12690__$1 == null);
var inst_12693 = cljs.core._EQ_.call(null,inst_12691__$1,change);
var inst_12694 = (inst_12692) || (inst_12693);
var state_12731__$1 = (function (){var statearr_12766 = state_12731;
(statearr_12766[(15)] = inst_12691__$1);

(statearr_12766[(8)] = inst_12690__$1);

return statearr_12766;
})();
if(cljs.core.truth_(inst_12694)){
var statearr_12767_12805 = state_12731__$1;
(statearr_12767_12805[(1)] = (11));

} else {
var statearr_12768_12806 = state_12731__$1;
(statearr_12768_12806[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (18))){
var inst_12685 = (state_12731[(17)]);
var inst_12691 = (state_12731[(15)]);
var inst_12686 = (state_12731[(16)]);
var inst_12708 = cljs.core.empty_QMARK_.call(null,inst_12686);
var inst_12709 = inst_12685.call(null,inst_12691);
var inst_12710 = cljs.core.not.call(null,inst_12709);
var inst_12711 = (inst_12708) && (inst_12710);
var state_12731__$1 = state_12731;
var statearr_12769_12807 = state_12731__$1;
(statearr_12769_12807[(2)] = inst_12711);

(statearr_12769_12807[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (8))){
var inst_12675 = (state_12731[(7)]);
var state_12731__$1 = state_12731;
var statearr_12770_12808 = state_12731__$1;
(statearr_12770_12808[(2)] = inst_12675);

(statearr_12770_12808[(1)] = (9));


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
});})(c__7033__auto___12778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6977__auto__,c__7033__auto___12778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6978__auto__ = null;
var cljs$core$async$mix_$_state_machine__6978__auto____0 = (function (){
var statearr_12774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12774[(0)] = cljs$core$async$mix_$_state_machine__6978__auto__);

(statearr_12774[(1)] = (1));

return statearr_12774;
});
var cljs$core$async$mix_$_state_machine__6978__auto____1 = (function (state_12731){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_12731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e12775){if((e12775 instanceof Object)){
var ex__6981__auto__ = e12775;
var statearr_12776_12809 = state_12731;
(statearr_12776_12809[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12810 = state_12731;
state_12731 = G__12810;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6978__auto__ = function(state_12731){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6978__auto____1.call(this,state_12731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6978__auto____0;
cljs$core$async$mix_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6978__auto____1;
return cljs$core$async$mix_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___12778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7035__auto__ = (function (){var statearr_12777 = f__7034__auto__.call(null);
(statearr_12777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___12778);

return statearr_12777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___12778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj12812 = {};
return obj12812;
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
return (function (p1__12813_SHARP_){
if(cljs.core.truth_(p1__12813_SHARP_.call(null,topic))){
return p1__12813_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12813_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4122__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12936 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12936 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12937){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12937 = meta12937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12936.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12936.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12936.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t12936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12936.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12938){
var self__ = this;
var _12938__$1 = this;
return self__.meta12937;
});})(mults,ensure_mult))
;

cljs.core.async.t12936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12938,meta12937__$1){
var self__ = this;
var _12938__$1 = this;
return (new cljs.core.async.t12936(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12937__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12936.cljs$lang$type = true;

cljs.core.async.t12936.cljs$lang$ctorStr = "cljs.core.async/t12936";

cljs.core.async.t12936.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t12936");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12936 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t12936(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12937){
return (new cljs.core.async.t12936(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12937));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12936(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7033__auto___13058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___13058,mults,ensure_mult,p){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___13058,mults,ensure_mult,p){
return (function (state_13010){
var state_val_13011 = (state_13010[(1)]);
if((state_val_13011 === (7))){
var inst_13006 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
var statearr_13012_13059 = state_13010__$1;
(statearr_13012_13059[(2)] = inst_13006);

(statearr_13012_13059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (20))){
var state_13010__$1 = state_13010;
var statearr_13013_13060 = state_13010__$1;
(statearr_13013_13060[(2)] = null);

(statearr_13013_13060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (1))){
var state_13010__$1 = state_13010;
var statearr_13014_13061 = state_13010__$1;
(statearr_13014_13061[(2)] = null);

(statearr_13014_13061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (24))){
var inst_12989 = (state_13010[(7)]);
var inst_12998 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12989);
var state_13010__$1 = state_13010;
var statearr_13015_13062 = state_13010__$1;
(statearr_13015_13062[(2)] = inst_12998);

(statearr_13015_13062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (4))){
var inst_12941 = (state_13010[(8)]);
var inst_12941__$1 = (state_13010[(2)]);
var inst_12942 = (inst_12941__$1 == null);
var state_13010__$1 = (function (){var statearr_13016 = state_13010;
(statearr_13016[(8)] = inst_12941__$1);

return statearr_13016;
})();
if(cljs.core.truth_(inst_12942)){
var statearr_13017_13063 = state_13010__$1;
(statearr_13017_13063[(1)] = (5));

} else {
var statearr_13018_13064 = state_13010__$1;
(statearr_13018_13064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (15))){
var inst_12983 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
var statearr_13019_13065 = state_13010__$1;
(statearr_13019_13065[(2)] = inst_12983);

(statearr_13019_13065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (21))){
var inst_13003 = (state_13010[(2)]);
var state_13010__$1 = (function (){var statearr_13020 = state_13010;
(statearr_13020[(9)] = inst_13003);

return statearr_13020;
})();
var statearr_13021_13066 = state_13010__$1;
(statearr_13021_13066[(2)] = null);

(statearr_13021_13066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (13))){
var inst_12965 = (state_13010[(10)]);
var inst_12967 = cljs.core.chunked_seq_QMARK_.call(null,inst_12965);
var state_13010__$1 = state_13010;
if(inst_12967){
var statearr_13022_13067 = state_13010__$1;
(statearr_13022_13067[(1)] = (16));

} else {
var statearr_13023_13068 = state_13010__$1;
(statearr_13023_13068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (22))){
var inst_12995 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
if(cljs.core.truth_(inst_12995)){
var statearr_13024_13069 = state_13010__$1;
(statearr_13024_13069[(1)] = (23));

} else {
var statearr_13025_13070 = state_13010__$1;
(statearr_13025_13070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (6))){
var inst_12989 = (state_13010[(7)]);
var inst_12991 = (state_13010[(11)]);
var inst_12941 = (state_13010[(8)]);
var inst_12989__$1 = topic_fn.call(null,inst_12941);
var inst_12990 = cljs.core.deref.call(null,mults);
var inst_12991__$1 = cljs.core.get.call(null,inst_12990,inst_12989__$1);
var state_13010__$1 = (function (){var statearr_13026 = state_13010;
(statearr_13026[(7)] = inst_12989__$1);

(statearr_13026[(11)] = inst_12991__$1);

return statearr_13026;
})();
if(cljs.core.truth_(inst_12991__$1)){
var statearr_13027_13071 = state_13010__$1;
(statearr_13027_13071[(1)] = (19));

} else {
var statearr_13028_13072 = state_13010__$1;
(statearr_13028_13072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (25))){
var inst_13000 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
var statearr_13029_13073 = state_13010__$1;
(statearr_13029_13073[(2)] = inst_13000);

(statearr_13029_13073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (17))){
var inst_12965 = (state_13010[(10)]);
var inst_12974 = cljs.core.first.call(null,inst_12965);
var inst_12975 = cljs.core.async.muxch_STAR_.call(null,inst_12974);
var inst_12976 = cljs.core.async.close_BANG_.call(null,inst_12975);
var inst_12977 = cljs.core.next.call(null,inst_12965);
var inst_12951 = inst_12977;
var inst_12952 = null;
var inst_12953 = (0);
var inst_12954 = (0);
var state_13010__$1 = (function (){var statearr_13030 = state_13010;
(statearr_13030[(12)] = inst_12952);

(statearr_13030[(13)] = inst_12954);

(statearr_13030[(14)] = inst_12953);

(statearr_13030[(15)] = inst_12951);

(statearr_13030[(16)] = inst_12976);

return statearr_13030;
})();
var statearr_13031_13074 = state_13010__$1;
(statearr_13031_13074[(2)] = null);

(statearr_13031_13074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (3))){
var inst_13008 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13010__$1,inst_13008);
} else {
if((state_val_13011 === (12))){
var inst_12985 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
var statearr_13032_13075 = state_13010__$1;
(statearr_13032_13075[(2)] = inst_12985);

(statearr_13032_13075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (2))){
var state_13010__$1 = state_13010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13010__$1,(4),ch);
} else {
if((state_val_13011 === (23))){
var state_13010__$1 = state_13010;
var statearr_13033_13076 = state_13010__$1;
(statearr_13033_13076[(2)] = null);

(statearr_13033_13076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (19))){
var inst_12991 = (state_13010[(11)]);
var inst_12941 = (state_13010[(8)]);
var inst_12993 = cljs.core.async.muxch_STAR_.call(null,inst_12991);
var state_13010__$1 = state_13010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13010__$1,(22),inst_12993,inst_12941);
} else {
if((state_val_13011 === (11))){
var inst_12965 = (state_13010[(10)]);
var inst_12951 = (state_13010[(15)]);
var inst_12965__$1 = cljs.core.seq.call(null,inst_12951);
var state_13010__$1 = (function (){var statearr_13034 = state_13010;
(statearr_13034[(10)] = inst_12965__$1);

return statearr_13034;
})();
if(inst_12965__$1){
var statearr_13035_13077 = state_13010__$1;
(statearr_13035_13077[(1)] = (13));

} else {
var statearr_13036_13078 = state_13010__$1;
(statearr_13036_13078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (9))){
var inst_12987 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
var statearr_13037_13079 = state_13010__$1;
(statearr_13037_13079[(2)] = inst_12987);

(statearr_13037_13079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (5))){
var inst_12948 = cljs.core.deref.call(null,mults);
var inst_12949 = cljs.core.vals.call(null,inst_12948);
var inst_12950 = cljs.core.seq.call(null,inst_12949);
var inst_12951 = inst_12950;
var inst_12952 = null;
var inst_12953 = (0);
var inst_12954 = (0);
var state_13010__$1 = (function (){var statearr_13038 = state_13010;
(statearr_13038[(12)] = inst_12952);

(statearr_13038[(13)] = inst_12954);

(statearr_13038[(14)] = inst_12953);

(statearr_13038[(15)] = inst_12951);

return statearr_13038;
})();
var statearr_13039_13080 = state_13010__$1;
(statearr_13039_13080[(2)] = null);

(statearr_13039_13080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (14))){
var state_13010__$1 = state_13010;
var statearr_13043_13081 = state_13010__$1;
(statearr_13043_13081[(2)] = null);

(statearr_13043_13081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (16))){
var inst_12965 = (state_13010[(10)]);
var inst_12969 = cljs.core.chunk_first.call(null,inst_12965);
var inst_12970 = cljs.core.chunk_rest.call(null,inst_12965);
var inst_12971 = cljs.core.count.call(null,inst_12969);
var inst_12951 = inst_12970;
var inst_12952 = inst_12969;
var inst_12953 = inst_12971;
var inst_12954 = (0);
var state_13010__$1 = (function (){var statearr_13044 = state_13010;
(statearr_13044[(12)] = inst_12952);

(statearr_13044[(13)] = inst_12954);

(statearr_13044[(14)] = inst_12953);

(statearr_13044[(15)] = inst_12951);

return statearr_13044;
})();
var statearr_13045_13082 = state_13010__$1;
(statearr_13045_13082[(2)] = null);

(statearr_13045_13082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (10))){
var inst_12952 = (state_13010[(12)]);
var inst_12954 = (state_13010[(13)]);
var inst_12953 = (state_13010[(14)]);
var inst_12951 = (state_13010[(15)]);
var inst_12959 = cljs.core._nth.call(null,inst_12952,inst_12954);
var inst_12960 = cljs.core.async.muxch_STAR_.call(null,inst_12959);
var inst_12961 = cljs.core.async.close_BANG_.call(null,inst_12960);
var inst_12962 = (inst_12954 + (1));
var tmp13040 = inst_12952;
var tmp13041 = inst_12953;
var tmp13042 = inst_12951;
var inst_12951__$1 = tmp13042;
var inst_12952__$1 = tmp13040;
var inst_12953__$1 = tmp13041;
var inst_12954__$1 = inst_12962;
var state_13010__$1 = (function (){var statearr_13046 = state_13010;
(statearr_13046[(12)] = inst_12952__$1);

(statearr_13046[(17)] = inst_12961);

(statearr_13046[(13)] = inst_12954__$1);

(statearr_13046[(14)] = inst_12953__$1);

(statearr_13046[(15)] = inst_12951__$1);

return statearr_13046;
})();
var statearr_13047_13083 = state_13010__$1;
(statearr_13047_13083[(2)] = null);

(statearr_13047_13083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (18))){
var inst_12980 = (state_13010[(2)]);
var state_13010__$1 = state_13010;
var statearr_13048_13084 = state_13010__$1;
(statearr_13048_13084[(2)] = inst_12980);

(statearr_13048_13084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13011 === (8))){
var inst_12954 = (state_13010[(13)]);
var inst_12953 = (state_13010[(14)]);
var inst_12956 = (inst_12954 < inst_12953);
var inst_12957 = inst_12956;
var state_13010__$1 = state_13010;
if(cljs.core.truth_(inst_12957)){
var statearr_13049_13085 = state_13010__$1;
(statearr_13049_13085[(1)] = (10));

} else {
var statearr_13050_13086 = state_13010__$1;
(statearr_13050_13086[(1)] = (11));

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
});})(c__7033__auto___13058,mults,ensure_mult,p))
;
return ((function (switch__6977__auto__,c__7033__auto___13058,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6978__auto__ = null;
var cljs$core$async$pub_$_state_machine__6978__auto____0 = (function (){
var statearr_13054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13054[(0)] = cljs$core$async$pub_$_state_machine__6978__auto__);

(statearr_13054[(1)] = (1));

return statearr_13054;
});
var cljs$core$async$pub_$_state_machine__6978__auto____1 = (function (state_13010){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_13010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e13055){if((e13055 instanceof Object)){
var ex__6981__auto__ = e13055;
var statearr_13056_13087 = state_13010;
(statearr_13056_13087[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13088 = state_13010;
state_13010 = G__13088;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6978__auto__ = function(state_13010){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6978__auto____1.call(this,state_13010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6978__auto____0;
cljs$core$async$pub_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6978__auto____1;
return cljs$core$async$pub_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___13058,mults,ensure_mult,p))
})();
var state__7035__auto__ = (function (){var statearr_13057 = f__7034__auto__.call(null);
(statearr_13057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___13058);

return statearr_13057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___13058,mults,ensure_mult,p))
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
var c__7033__auto___13225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___13225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___13225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13195){
var state_val_13196 = (state_13195[(1)]);
if((state_val_13196 === (7))){
var state_13195__$1 = state_13195;
var statearr_13197_13226 = state_13195__$1;
(statearr_13197_13226[(2)] = null);

(statearr_13197_13226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (1))){
var state_13195__$1 = state_13195;
var statearr_13198_13227 = state_13195__$1;
(statearr_13198_13227[(2)] = null);

(statearr_13198_13227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (4))){
var inst_13159 = (state_13195[(7)]);
var inst_13161 = (inst_13159 < cnt);
var state_13195__$1 = state_13195;
if(cljs.core.truth_(inst_13161)){
var statearr_13199_13228 = state_13195__$1;
(statearr_13199_13228[(1)] = (6));

} else {
var statearr_13200_13229 = state_13195__$1;
(statearr_13200_13229[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (15))){
var inst_13191 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13201_13230 = state_13195__$1;
(statearr_13201_13230[(2)] = inst_13191);

(statearr_13201_13230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (13))){
var inst_13184 = cljs.core.async.close_BANG_.call(null,out);
var state_13195__$1 = state_13195;
var statearr_13202_13231 = state_13195__$1;
(statearr_13202_13231[(2)] = inst_13184);

(statearr_13202_13231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (6))){
var state_13195__$1 = state_13195;
var statearr_13203_13232 = state_13195__$1;
(statearr_13203_13232[(2)] = null);

(statearr_13203_13232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (3))){
var inst_13193 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13195__$1,inst_13193);
} else {
if((state_val_13196 === (12))){
var inst_13181 = (state_13195[(8)]);
var inst_13181__$1 = (state_13195[(2)]);
var inst_13182 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13181__$1);
var state_13195__$1 = (function (){var statearr_13204 = state_13195;
(statearr_13204[(8)] = inst_13181__$1);

return statearr_13204;
})();
if(cljs.core.truth_(inst_13182)){
var statearr_13205_13233 = state_13195__$1;
(statearr_13205_13233[(1)] = (13));

} else {
var statearr_13206_13234 = state_13195__$1;
(statearr_13206_13234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (2))){
var inst_13158 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13159 = (0);
var state_13195__$1 = (function (){var statearr_13207 = state_13195;
(statearr_13207[(7)] = inst_13159);

(statearr_13207[(9)] = inst_13158);

return statearr_13207;
})();
var statearr_13208_13235 = state_13195__$1;
(statearr_13208_13235[(2)] = null);

(statearr_13208_13235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (11))){
var inst_13159 = (state_13195[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13195,(10),Object,null,(9));
var inst_13168 = chs__$1.call(null,inst_13159);
var inst_13169 = done.call(null,inst_13159);
var inst_13170 = cljs.core.async.take_BANG_.call(null,inst_13168,inst_13169);
var state_13195__$1 = state_13195;
var statearr_13209_13236 = state_13195__$1;
(statearr_13209_13236[(2)] = inst_13170);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13195__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (9))){
var inst_13159 = (state_13195[(7)]);
var inst_13172 = (state_13195[(2)]);
var inst_13173 = (inst_13159 + (1));
var inst_13159__$1 = inst_13173;
var state_13195__$1 = (function (){var statearr_13210 = state_13195;
(statearr_13210[(7)] = inst_13159__$1);

(statearr_13210[(10)] = inst_13172);

return statearr_13210;
})();
var statearr_13211_13237 = state_13195__$1;
(statearr_13211_13237[(2)] = null);

(statearr_13211_13237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (5))){
var inst_13179 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13212 = state_13195;
(statearr_13212[(11)] = inst_13179);

return statearr_13212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13195__$1,(12),dchan);
} else {
if((state_val_13196 === (14))){
var inst_13181 = (state_13195[(8)]);
var inst_13186 = cljs.core.apply.call(null,f,inst_13181);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13195__$1,(16),out,inst_13186);
} else {
if((state_val_13196 === (16))){
var inst_13188 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13213 = state_13195;
(statearr_13213[(12)] = inst_13188);

return statearr_13213;
})();
var statearr_13214_13238 = state_13195__$1;
(statearr_13214_13238[(2)] = null);

(statearr_13214_13238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (10))){
var inst_13163 = (state_13195[(2)]);
var inst_13164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13195__$1 = (function (){var statearr_13215 = state_13195;
(statearr_13215[(13)] = inst_13163);

return statearr_13215;
})();
var statearr_13216_13239 = state_13195__$1;
(statearr_13216_13239[(2)] = inst_13164);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13195__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (8))){
var inst_13177 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13217_13240 = state_13195__$1;
(statearr_13217_13240[(2)] = inst_13177);

(statearr_13217_13240[(1)] = (5));


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
});})(c__7033__auto___13225,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6977__auto__,c__7033__auto___13225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6978__auto__ = null;
var cljs$core$async$map_$_state_machine__6978__auto____0 = (function (){
var statearr_13221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13221[(0)] = cljs$core$async$map_$_state_machine__6978__auto__);

(statearr_13221[(1)] = (1));

return statearr_13221;
});
var cljs$core$async$map_$_state_machine__6978__auto____1 = (function (state_13195){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_13195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e13222){if((e13222 instanceof Object)){
var ex__6981__auto__ = e13222;
var statearr_13223_13241 = state_13195;
(statearr_13223_13241[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13242 = state_13195;
state_13195 = G__13242;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6978__auto__ = function(state_13195){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6978__auto____1.call(this,state_13195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6978__auto____0;
cljs$core$async$map_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6978__auto____1;
return cljs$core$async$map_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___13225,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7035__auto__ = (function (){var statearr_13224 = f__7034__auto__.call(null);
(statearr_13224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___13225);

return statearr_13224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___13225,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7033__auto___13350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___13350,out){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___13350,out){
return (function (state_13326){
var state_val_13327 = (state_13326[(1)]);
if((state_val_13327 === (7))){
var inst_13305 = (state_13326[(7)]);
var inst_13306 = (state_13326[(8)]);
var inst_13305__$1 = (state_13326[(2)]);
var inst_13306__$1 = cljs.core.nth.call(null,inst_13305__$1,(0),null);
var inst_13307 = cljs.core.nth.call(null,inst_13305__$1,(1),null);
var inst_13308 = (inst_13306__$1 == null);
var state_13326__$1 = (function (){var statearr_13328 = state_13326;
(statearr_13328[(7)] = inst_13305__$1);

(statearr_13328[(9)] = inst_13307);

(statearr_13328[(8)] = inst_13306__$1);

return statearr_13328;
})();
if(cljs.core.truth_(inst_13308)){
var statearr_13329_13351 = state_13326__$1;
(statearr_13329_13351[(1)] = (8));

} else {
var statearr_13330_13352 = state_13326__$1;
(statearr_13330_13352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (1))){
var inst_13297 = cljs.core.vec.call(null,chs);
var inst_13298 = inst_13297;
var state_13326__$1 = (function (){var statearr_13331 = state_13326;
(statearr_13331[(10)] = inst_13298);

return statearr_13331;
})();
var statearr_13332_13353 = state_13326__$1;
(statearr_13332_13353[(2)] = null);

(statearr_13332_13353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (4))){
var inst_13298 = (state_13326[(10)]);
var state_13326__$1 = state_13326;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13326__$1,(7),inst_13298);
} else {
if((state_val_13327 === (6))){
var inst_13322 = (state_13326[(2)]);
var state_13326__$1 = state_13326;
var statearr_13333_13354 = state_13326__$1;
(statearr_13333_13354[(2)] = inst_13322);

(statearr_13333_13354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (3))){
var inst_13324 = (state_13326[(2)]);
var state_13326__$1 = state_13326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13326__$1,inst_13324);
} else {
if((state_val_13327 === (2))){
var inst_13298 = (state_13326[(10)]);
var inst_13300 = cljs.core.count.call(null,inst_13298);
var inst_13301 = (inst_13300 > (0));
var state_13326__$1 = state_13326;
if(cljs.core.truth_(inst_13301)){
var statearr_13335_13355 = state_13326__$1;
(statearr_13335_13355[(1)] = (4));

} else {
var statearr_13336_13356 = state_13326__$1;
(statearr_13336_13356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (11))){
var inst_13298 = (state_13326[(10)]);
var inst_13315 = (state_13326[(2)]);
var tmp13334 = inst_13298;
var inst_13298__$1 = tmp13334;
var state_13326__$1 = (function (){var statearr_13337 = state_13326;
(statearr_13337[(11)] = inst_13315);

(statearr_13337[(10)] = inst_13298__$1);

return statearr_13337;
})();
var statearr_13338_13357 = state_13326__$1;
(statearr_13338_13357[(2)] = null);

(statearr_13338_13357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (9))){
var inst_13306 = (state_13326[(8)]);
var state_13326__$1 = state_13326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13326__$1,(11),out,inst_13306);
} else {
if((state_val_13327 === (5))){
var inst_13320 = cljs.core.async.close_BANG_.call(null,out);
var state_13326__$1 = state_13326;
var statearr_13339_13358 = state_13326__$1;
(statearr_13339_13358[(2)] = inst_13320);

(statearr_13339_13358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (10))){
var inst_13318 = (state_13326[(2)]);
var state_13326__$1 = state_13326;
var statearr_13340_13359 = state_13326__$1;
(statearr_13340_13359[(2)] = inst_13318);

(statearr_13340_13359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (8))){
var inst_13305 = (state_13326[(7)]);
var inst_13307 = (state_13326[(9)]);
var inst_13306 = (state_13326[(8)]);
var inst_13298 = (state_13326[(10)]);
var inst_13310 = (function (){var c = inst_13307;
var v = inst_13306;
var vec__13303 = inst_13305;
var cs = inst_13298;
return ((function (c,v,vec__13303,cs,inst_13305,inst_13307,inst_13306,inst_13298,state_val_13327,c__7033__auto___13350,out){
return (function (p1__13243_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13243_SHARP_);
});
;})(c,v,vec__13303,cs,inst_13305,inst_13307,inst_13306,inst_13298,state_val_13327,c__7033__auto___13350,out))
})();
var inst_13311 = cljs.core.filterv.call(null,inst_13310,inst_13298);
var inst_13298__$1 = inst_13311;
var state_13326__$1 = (function (){var statearr_13341 = state_13326;
(statearr_13341[(10)] = inst_13298__$1);

return statearr_13341;
})();
var statearr_13342_13360 = state_13326__$1;
(statearr_13342_13360[(2)] = null);

(statearr_13342_13360[(1)] = (2));


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
});})(c__7033__auto___13350,out))
;
return ((function (switch__6977__auto__,c__7033__auto___13350,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6978__auto__ = null;
var cljs$core$async$merge_$_state_machine__6978__auto____0 = (function (){
var statearr_13346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13346[(0)] = cljs$core$async$merge_$_state_machine__6978__auto__);

(statearr_13346[(1)] = (1));

return statearr_13346;
});
var cljs$core$async$merge_$_state_machine__6978__auto____1 = (function (state_13326){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_13326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e13347){if((e13347 instanceof Object)){
var ex__6981__auto__ = e13347;
var statearr_13348_13361 = state_13326;
(statearr_13348_13361[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_13326;
state_13326 = G__13362;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6978__auto__ = function(state_13326){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6978__auto____1.call(this,state_13326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6978__auto____0;
cljs$core$async$merge_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6978__auto____1;
return cljs$core$async$merge_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___13350,out))
})();
var state__7035__auto__ = (function (){var statearr_13349 = f__7034__auto__.call(null);
(statearr_13349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___13350);

return statearr_13349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___13350,out))
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
var c__7033__auto___13455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___13455,out){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___13455,out){
return (function (state_13432){
var state_val_13433 = (state_13432[(1)]);
if((state_val_13433 === (7))){
var inst_13414 = (state_13432[(7)]);
var inst_13414__$1 = (state_13432[(2)]);
var inst_13415 = (inst_13414__$1 == null);
var inst_13416 = cljs.core.not.call(null,inst_13415);
var state_13432__$1 = (function (){var statearr_13434 = state_13432;
(statearr_13434[(7)] = inst_13414__$1);

return statearr_13434;
})();
if(inst_13416){
var statearr_13435_13456 = state_13432__$1;
(statearr_13435_13456[(1)] = (8));

} else {
var statearr_13436_13457 = state_13432__$1;
(statearr_13436_13457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (1))){
var inst_13409 = (0);
var state_13432__$1 = (function (){var statearr_13437 = state_13432;
(statearr_13437[(8)] = inst_13409);

return statearr_13437;
})();
var statearr_13438_13458 = state_13432__$1;
(statearr_13438_13458[(2)] = null);

(statearr_13438_13458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (4))){
var state_13432__$1 = state_13432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13432__$1,(7),ch);
} else {
if((state_val_13433 === (6))){
var inst_13427 = (state_13432[(2)]);
var state_13432__$1 = state_13432;
var statearr_13439_13459 = state_13432__$1;
(statearr_13439_13459[(2)] = inst_13427);

(statearr_13439_13459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (3))){
var inst_13429 = (state_13432[(2)]);
var inst_13430 = cljs.core.async.close_BANG_.call(null,out);
var state_13432__$1 = (function (){var statearr_13440 = state_13432;
(statearr_13440[(9)] = inst_13429);

return statearr_13440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13432__$1,inst_13430);
} else {
if((state_val_13433 === (2))){
var inst_13409 = (state_13432[(8)]);
var inst_13411 = (inst_13409 < n);
var state_13432__$1 = state_13432;
if(cljs.core.truth_(inst_13411)){
var statearr_13441_13460 = state_13432__$1;
(statearr_13441_13460[(1)] = (4));

} else {
var statearr_13442_13461 = state_13432__$1;
(statearr_13442_13461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (11))){
var inst_13409 = (state_13432[(8)]);
var inst_13419 = (state_13432[(2)]);
var inst_13420 = (inst_13409 + (1));
var inst_13409__$1 = inst_13420;
var state_13432__$1 = (function (){var statearr_13443 = state_13432;
(statearr_13443[(8)] = inst_13409__$1);

(statearr_13443[(10)] = inst_13419);

return statearr_13443;
})();
var statearr_13444_13462 = state_13432__$1;
(statearr_13444_13462[(2)] = null);

(statearr_13444_13462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (9))){
var state_13432__$1 = state_13432;
var statearr_13445_13463 = state_13432__$1;
(statearr_13445_13463[(2)] = null);

(statearr_13445_13463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (5))){
var state_13432__$1 = state_13432;
var statearr_13446_13464 = state_13432__$1;
(statearr_13446_13464[(2)] = null);

(statearr_13446_13464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (10))){
var inst_13424 = (state_13432[(2)]);
var state_13432__$1 = state_13432;
var statearr_13447_13465 = state_13432__$1;
(statearr_13447_13465[(2)] = inst_13424);

(statearr_13447_13465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13433 === (8))){
var inst_13414 = (state_13432[(7)]);
var state_13432__$1 = state_13432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13432__$1,(11),out,inst_13414);
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
});})(c__7033__auto___13455,out))
;
return ((function (switch__6977__auto__,c__7033__auto___13455,out){
return (function() {
var cljs$core$async$take_$_state_machine__6978__auto__ = null;
var cljs$core$async$take_$_state_machine__6978__auto____0 = (function (){
var statearr_13451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13451[(0)] = cljs$core$async$take_$_state_machine__6978__auto__);

(statearr_13451[(1)] = (1));

return statearr_13451;
});
var cljs$core$async$take_$_state_machine__6978__auto____1 = (function (state_13432){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_13432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e13452){if((e13452 instanceof Object)){
var ex__6981__auto__ = e13452;
var statearr_13453_13466 = state_13432;
(statearr_13453_13466[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13467 = state_13432;
state_13432 = G__13467;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6978__auto__ = function(state_13432){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6978__auto____1.call(this,state_13432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6978__auto____0;
cljs$core$async$take_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6978__auto____1;
return cljs$core$async$take_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___13455,out))
})();
var state__7035__auto__ = (function (){var statearr_13454 = f__7034__auto__.call(null);
(statearr_13454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___13455);

return statearr_13454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___13455,out))
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
if(typeof cljs.core.async.t13475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13475 = (function (ch,f,map_LT_,meta13476){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13476 = meta13476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13478 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13478 = (function (fn1,_,meta13476,map_LT_,f,ch,meta13479){
this.fn1 = fn1;
this._ = _;
this.meta13476 = meta13476;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13479 = meta13479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13478.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13468_SHARP_){
return f1.call(null,(((p1__13468_SHARP_ == null))?null:self__.f.call(null,p1__13468_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13480){
var self__ = this;
var _13480__$1 = this;
return self__.meta13479;
});})(___$1))
;

cljs.core.async.t13478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13480,meta13479__$1){
var self__ = this;
var _13480__$1 = this;
return (new cljs.core.async.t13478(self__.fn1,self__._,self__.meta13476,self__.map_LT_,self__.f,self__.ch,meta13479__$1));
});})(___$1))
;

cljs.core.async.t13478.cljs$lang$type = true;

cljs.core.async.t13478.cljs$lang$ctorStr = "cljs.core.async/t13478";

cljs.core.async.t13478.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13478");
});})(___$1))
;

cljs.core.async.__GT_t13478 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t13478(fn1__$1,___$2,meta13476__$1,map_LT___$1,f__$1,ch__$1,meta13479){
return (new cljs.core.async.t13478(fn1__$1,___$2,meta13476__$1,map_LT___$1,f__$1,ch__$1,meta13479));
});})(___$1))
;

}

return (new cljs.core.async.t13478(fn1,___$1,self__.meta13476,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t13475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13477){
var self__ = this;
var _13477__$1 = this;
return self__.meta13476;
});

cljs.core.async.t13475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13477,meta13476__$1){
var self__ = this;
var _13477__$1 = this;
return (new cljs.core.async.t13475(self__.ch,self__.f,self__.map_LT_,meta13476__$1));
});

cljs.core.async.t13475.cljs$lang$type = true;

cljs.core.async.t13475.cljs$lang$ctorStr = "cljs.core.async/t13475";

cljs.core.async.t13475.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13475");
});

cljs.core.async.__GT_t13475 = (function cljs$core$async$map_LT__$___GT_t13475(ch__$1,f__$1,map_LT___$1,meta13476){
return (new cljs.core.async.t13475(ch__$1,f__$1,map_LT___$1,meta13476));
});

}

return (new cljs.core.async.t13475(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t13484 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13484 = (function (ch,f,map_GT_,meta13485){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13485 = meta13485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13484.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13486){
var self__ = this;
var _13486__$1 = this;
return self__.meta13485;
});

cljs.core.async.t13484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13486,meta13485__$1){
var self__ = this;
var _13486__$1 = this;
return (new cljs.core.async.t13484(self__.ch,self__.f,self__.map_GT_,meta13485__$1));
});

cljs.core.async.t13484.cljs$lang$type = true;

cljs.core.async.t13484.cljs$lang$ctorStr = "cljs.core.async/t13484";

cljs.core.async.t13484.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13484");
});

cljs.core.async.__GT_t13484 = (function cljs$core$async$map_GT__$___GT_t13484(ch__$1,f__$1,map_GT___$1,meta13485){
return (new cljs.core.async.t13484(ch__$1,f__$1,map_GT___$1,meta13485));
});

}

return (new cljs.core.async.t13484(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t13490 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13490 = (function (ch,p,filter_GT_,meta13491){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13491 = meta13491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13490.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13492){
var self__ = this;
var _13492__$1 = this;
return self__.meta13491;
});

cljs.core.async.t13490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13492,meta13491__$1){
var self__ = this;
var _13492__$1 = this;
return (new cljs.core.async.t13490(self__.ch,self__.p,self__.filter_GT_,meta13491__$1));
});

cljs.core.async.t13490.cljs$lang$type = true;

cljs.core.async.t13490.cljs$lang$ctorStr = "cljs.core.async/t13490";

cljs.core.async.t13490.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t13490");
});

cljs.core.async.__GT_t13490 = (function cljs$core$async$filter_GT__$___GT_t13490(ch__$1,p__$1,filter_GT___$1,meta13491){
return (new cljs.core.async.t13490(ch__$1,p__$1,filter_GT___$1,meta13491));
});

}

return (new cljs.core.async.t13490(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7033__auto___13575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___13575,out){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___13575,out){
return (function (state_13554){
var state_val_13555 = (state_13554[(1)]);
if((state_val_13555 === (7))){
var inst_13550 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
var statearr_13556_13576 = state_13554__$1;
(statearr_13556_13576[(2)] = inst_13550);

(statearr_13556_13576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (1))){
var state_13554__$1 = state_13554;
var statearr_13557_13577 = state_13554__$1;
(statearr_13557_13577[(2)] = null);

(statearr_13557_13577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (4))){
var inst_13536 = (state_13554[(7)]);
var inst_13536__$1 = (state_13554[(2)]);
var inst_13537 = (inst_13536__$1 == null);
var state_13554__$1 = (function (){var statearr_13558 = state_13554;
(statearr_13558[(7)] = inst_13536__$1);

return statearr_13558;
})();
if(cljs.core.truth_(inst_13537)){
var statearr_13559_13578 = state_13554__$1;
(statearr_13559_13578[(1)] = (5));

} else {
var statearr_13560_13579 = state_13554__$1;
(statearr_13560_13579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (6))){
var inst_13536 = (state_13554[(7)]);
var inst_13541 = p.call(null,inst_13536);
var state_13554__$1 = state_13554;
if(cljs.core.truth_(inst_13541)){
var statearr_13561_13580 = state_13554__$1;
(statearr_13561_13580[(1)] = (8));

} else {
var statearr_13562_13581 = state_13554__$1;
(statearr_13562_13581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (3))){
var inst_13552 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13554__$1,inst_13552);
} else {
if((state_val_13555 === (2))){
var state_13554__$1 = state_13554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13554__$1,(4),ch);
} else {
if((state_val_13555 === (11))){
var inst_13544 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
var statearr_13563_13582 = state_13554__$1;
(statearr_13563_13582[(2)] = inst_13544);

(statearr_13563_13582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (9))){
var state_13554__$1 = state_13554;
var statearr_13564_13583 = state_13554__$1;
(statearr_13564_13583[(2)] = null);

(statearr_13564_13583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (5))){
var inst_13539 = cljs.core.async.close_BANG_.call(null,out);
var state_13554__$1 = state_13554;
var statearr_13565_13584 = state_13554__$1;
(statearr_13565_13584[(2)] = inst_13539);

(statearr_13565_13584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (10))){
var inst_13547 = (state_13554[(2)]);
var state_13554__$1 = (function (){var statearr_13566 = state_13554;
(statearr_13566[(8)] = inst_13547);

return statearr_13566;
})();
var statearr_13567_13585 = state_13554__$1;
(statearr_13567_13585[(2)] = null);

(statearr_13567_13585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (8))){
var inst_13536 = (state_13554[(7)]);
var state_13554__$1 = state_13554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13554__$1,(11),out,inst_13536);
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
});})(c__7033__auto___13575,out))
;
return ((function (switch__6977__auto__,c__7033__auto___13575,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6978__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6978__auto____0 = (function (){
var statearr_13571 = [null,null,null,null,null,null,null,null,null];
(statearr_13571[(0)] = cljs$core$async$filter_LT__$_state_machine__6978__auto__);

(statearr_13571[(1)] = (1));

return statearr_13571;
});
var cljs$core$async$filter_LT__$_state_machine__6978__auto____1 = (function (state_13554){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_13554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e13572){if((e13572 instanceof Object)){
var ex__6981__auto__ = e13572;
var statearr_13573_13586 = state_13554;
(statearr_13573_13586[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13587 = state_13554;
state_13554 = G__13587;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6978__auto__ = function(state_13554){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6978__auto____1.call(this,state_13554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6978__auto____0;
cljs$core$async$filter_LT__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6978__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___13575,out))
})();
var state__7035__auto__ = (function (){var statearr_13574 = f__7034__auto__.call(null);
(statearr_13574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___13575);

return statearr_13574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___13575,out))
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
var c__7033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto__){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto__){
return (function (state_13753){
var state_val_13754 = (state_13753[(1)]);
if((state_val_13754 === (7))){
var inst_13749 = (state_13753[(2)]);
var state_13753__$1 = state_13753;
var statearr_13755_13796 = state_13753__$1;
(statearr_13755_13796[(2)] = inst_13749);

(statearr_13755_13796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (20))){
var inst_13719 = (state_13753[(7)]);
var inst_13730 = (state_13753[(2)]);
var inst_13731 = cljs.core.next.call(null,inst_13719);
var inst_13705 = inst_13731;
var inst_13706 = null;
var inst_13707 = (0);
var inst_13708 = (0);
var state_13753__$1 = (function (){var statearr_13756 = state_13753;
(statearr_13756[(8)] = inst_13708);

(statearr_13756[(9)] = inst_13706);

(statearr_13756[(10)] = inst_13705);

(statearr_13756[(11)] = inst_13730);

(statearr_13756[(12)] = inst_13707);

return statearr_13756;
})();
var statearr_13757_13797 = state_13753__$1;
(statearr_13757_13797[(2)] = null);

(statearr_13757_13797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (1))){
var state_13753__$1 = state_13753;
var statearr_13758_13798 = state_13753__$1;
(statearr_13758_13798[(2)] = null);

(statearr_13758_13798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (4))){
var inst_13694 = (state_13753[(13)]);
var inst_13694__$1 = (state_13753[(2)]);
var inst_13695 = (inst_13694__$1 == null);
var state_13753__$1 = (function (){var statearr_13759 = state_13753;
(statearr_13759[(13)] = inst_13694__$1);

return statearr_13759;
})();
if(cljs.core.truth_(inst_13695)){
var statearr_13760_13799 = state_13753__$1;
(statearr_13760_13799[(1)] = (5));

} else {
var statearr_13761_13800 = state_13753__$1;
(statearr_13761_13800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (15))){
var state_13753__$1 = state_13753;
var statearr_13765_13801 = state_13753__$1;
(statearr_13765_13801[(2)] = null);

(statearr_13765_13801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (21))){
var state_13753__$1 = state_13753;
var statearr_13766_13802 = state_13753__$1;
(statearr_13766_13802[(2)] = null);

(statearr_13766_13802[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (13))){
var inst_13708 = (state_13753[(8)]);
var inst_13706 = (state_13753[(9)]);
var inst_13705 = (state_13753[(10)]);
var inst_13707 = (state_13753[(12)]);
var inst_13715 = (state_13753[(2)]);
var inst_13716 = (inst_13708 + (1));
var tmp13762 = inst_13706;
var tmp13763 = inst_13705;
var tmp13764 = inst_13707;
var inst_13705__$1 = tmp13763;
var inst_13706__$1 = tmp13762;
var inst_13707__$1 = tmp13764;
var inst_13708__$1 = inst_13716;
var state_13753__$1 = (function (){var statearr_13767 = state_13753;
(statearr_13767[(8)] = inst_13708__$1);

(statearr_13767[(9)] = inst_13706__$1);

(statearr_13767[(14)] = inst_13715);

(statearr_13767[(10)] = inst_13705__$1);

(statearr_13767[(12)] = inst_13707__$1);

return statearr_13767;
})();
var statearr_13768_13803 = state_13753__$1;
(statearr_13768_13803[(2)] = null);

(statearr_13768_13803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (22))){
var state_13753__$1 = state_13753;
var statearr_13769_13804 = state_13753__$1;
(statearr_13769_13804[(2)] = null);

(statearr_13769_13804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (6))){
var inst_13694 = (state_13753[(13)]);
var inst_13703 = f.call(null,inst_13694);
var inst_13704 = cljs.core.seq.call(null,inst_13703);
var inst_13705 = inst_13704;
var inst_13706 = null;
var inst_13707 = (0);
var inst_13708 = (0);
var state_13753__$1 = (function (){var statearr_13770 = state_13753;
(statearr_13770[(8)] = inst_13708);

(statearr_13770[(9)] = inst_13706);

(statearr_13770[(10)] = inst_13705);

(statearr_13770[(12)] = inst_13707);

return statearr_13770;
})();
var statearr_13771_13805 = state_13753__$1;
(statearr_13771_13805[(2)] = null);

(statearr_13771_13805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (17))){
var inst_13719 = (state_13753[(7)]);
var inst_13723 = cljs.core.chunk_first.call(null,inst_13719);
var inst_13724 = cljs.core.chunk_rest.call(null,inst_13719);
var inst_13725 = cljs.core.count.call(null,inst_13723);
var inst_13705 = inst_13724;
var inst_13706 = inst_13723;
var inst_13707 = inst_13725;
var inst_13708 = (0);
var state_13753__$1 = (function (){var statearr_13772 = state_13753;
(statearr_13772[(8)] = inst_13708);

(statearr_13772[(9)] = inst_13706);

(statearr_13772[(10)] = inst_13705);

(statearr_13772[(12)] = inst_13707);

return statearr_13772;
})();
var statearr_13773_13806 = state_13753__$1;
(statearr_13773_13806[(2)] = null);

(statearr_13773_13806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (3))){
var inst_13751 = (state_13753[(2)]);
var state_13753__$1 = state_13753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13753__$1,inst_13751);
} else {
if((state_val_13754 === (12))){
var inst_13739 = (state_13753[(2)]);
var state_13753__$1 = state_13753;
var statearr_13774_13807 = state_13753__$1;
(statearr_13774_13807[(2)] = inst_13739);

(statearr_13774_13807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (2))){
var state_13753__$1 = state_13753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13753__$1,(4),in$);
} else {
if((state_val_13754 === (23))){
var inst_13747 = (state_13753[(2)]);
var state_13753__$1 = state_13753;
var statearr_13775_13808 = state_13753__$1;
(statearr_13775_13808[(2)] = inst_13747);

(statearr_13775_13808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (19))){
var inst_13734 = (state_13753[(2)]);
var state_13753__$1 = state_13753;
var statearr_13776_13809 = state_13753__$1;
(statearr_13776_13809[(2)] = inst_13734);

(statearr_13776_13809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (11))){
var inst_13719 = (state_13753[(7)]);
var inst_13705 = (state_13753[(10)]);
var inst_13719__$1 = cljs.core.seq.call(null,inst_13705);
var state_13753__$1 = (function (){var statearr_13777 = state_13753;
(statearr_13777[(7)] = inst_13719__$1);

return statearr_13777;
})();
if(inst_13719__$1){
var statearr_13778_13810 = state_13753__$1;
(statearr_13778_13810[(1)] = (14));

} else {
var statearr_13779_13811 = state_13753__$1;
(statearr_13779_13811[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (9))){
var inst_13741 = (state_13753[(2)]);
var inst_13742 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13753__$1 = (function (){var statearr_13780 = state_13753;
(statearr_13780[(15)] = inst_13741);

return statearr_13780;
})();
if(cljs.core.truth_(inst_13742)){
var statearr_13781_13812 = state_13753__$1;
(statearr_13781_13812[(1)] = (21));

} else {
var statearr_13782_13813 = state_13753__$1;
(statearr_13782_13813[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (5))){
var inst_13697 = cljs.core.async.close_BANG_.call(null,out);
var state_13753__$1 = state_13753;
var statearr_13783_13814 = state_13753__$1;
(statearr_13783_13814[(2)] = inst_13697);

(statearr_13783_13814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (14))){
var inst_13719 = (state_13753[(7)]);
var inst_13721 = cljs.core.chunked_seq_QMARK_.call(null,inst_13719);
var state_13753__$1 = state_13753;
if(inst_13721){
var statearr_13784_13815 = state_13753__$1;
(statearr_13784_13815[(1)] = (17));

} else {
var statearr_13785_13816 = state_13753__$1;
(statearr_13785_13816[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (16))){
var inst_13737 = (state_13753[(2)]);
var state_13753__$1 = state_13753;
var statearr_13786_13817 = state_13753__$1;
(statearr_13786_13817[(2)] = inst_13737);

(statearr_13786_13817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13754 === (10))){
var inst_13708 = (state_13753[(8)]);
var inst_13706 = (state_13753[(9)]);
var inst_13713 = cljs.core._nth.call(null,inst_13706,inst_13708);
var state_13753__$1 = state_13753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13753__$1,(13),out,inst_13713);
} else {
if((state_val_13754 === (18))){
var inst_13719 = (state_13753[(7)]);
var inst_13728 = cljs.core.first.call(null,inst_13719);
var state_13753__$1 = state_13753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13753__$1,(20),out,inst_13728);
} else {
if((state_val_13754 === (8))){
var inst_13708 = (state_13753[(8)]);
var inst_13707 = (state_13753[(12)]);
var inst_13710 = (inst_13708 < inst_13707);
var inst_13711 = inst_13710;
var state_13753__$1 = state_13753;
if(cljs.core.truth_(inst_13711)){
var statearr_13787_13818 = state_13753__$1;
(statearr_13787_13818[(1)] = (10));

} else {
var statearr_13788_13819 = state_13753__$1;
(statearr_13788_13819[(1)] = (11));

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
});})(c__7033__auto__))
;
return ((function (switch__6977__auto__,c__7033__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6978__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6978__auto____0 = (function (){
var statearr_13792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13792[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6978__auto__);

(statearr_13792[(1)] = (1));

return statearr_13792;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6978__auto____1 = (function (state_13753){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_13753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e13793){if((e13793 instanceof Object)){
var ex__6981__auto__ = e13793;
var statearr_13794_13820 = state_13753;
(statearr_13794_13820[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13821 = state_13753;
state_13753 = G__13821;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6978__auto__ = function(state_13753){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6978__auto____1.call(this,state_13753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6978__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6978__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto__))
})();
var state__7035__auto__ = (function (){var statearr_13795 = f__7034__auto__.call(null);
(statearr_13795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto__);

return statearr_13795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto__))
);

return c__7033__auto__;
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
var c__7033__auto___13918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___13918,out){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___13918,out){
return (function (state_13893){
var state_val_13894 = (state_13893[(1)]);
if((state_val_13894 === (7))){
var inst_13888 = (state_13893[(2)]);
var state_13893__$1 = state_13893;
var statearr_13895_13919 = state_13893__$1;
(statearr_13895_13919[(2)] = inst_13888);

(statearr_13895_13919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13894 === (1))){
var inst_13870 = null;
var state_13893__$1 = (function (){var statearr_13896 = state_13893;
(statearr_13896[(7)] = inst_13870);

return statearr_13896;
})();
var statearr_13897_13920 = state_13893__$1;
(statearr_13897_13920[(2)] = null);

(statearr_13897_13920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13894 === (4))){
var inst_13873 = (state_13893[(8)]);
var inst_13873__$1 = (state_13893[(2)]);
var inst_13874 = (inst_13873__$1 == null);
var inst_13875 = cljs.core.not.call(null,inst_13874);
var state_13893__$1 = (function (){var statearr_13898 = state_13893;
(statearr_13898[(8)] = inst_13873__$1);

return statearr_13898;
})();
if(inst_13875){
var statearr_13899_13921 = state_13893__$1;
(statearr_13899_13921[(1)] = (5));

} else {
var statearr_13900_13922 = state_13893__$1;
(statearr_13900_13922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13894 === (6))){
var state_13893__$1 = state_13893;
var statearr_13901_13923 = state_13893__$1;
(statearr_13901_13923[(2)] = null);

(statearr_13901_13923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13894 === (3))){
var inst_13890 = (state_13893[(2)]);
var inst_13891 = cljs.core.async.close_BANG_.call(null,out);
var state_13893__$1 = (function (){var statearr_13902 = state_13893;
(statearr_13902[(9)] = inst_13890);

return statearr_13902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13893__$1,inst_13891);
} else {
if((state_val_13894 === (2))){
var state_13893__$1 = state_13893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13893__$1,(4),ch);
} else {
if((state_val_13894 === (11))){
var inst_13873 = (state_13893[(8)]);
var inst_13882 = (state_13893[(2)]);
var inst_13870 = inst_13873;
var state_13893__$1 = (function (){var statearr_13903 = state_13893;
(statearr_13903[(10)] = inst_13882);

(statearr_13903[(7)] = inst_13870);

return statearr_13903;
})();
var statearr_13904_13924 = state_13893__$1;
(statearr_13904_13924[(2)] = null);

(statearr_13904_13924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13894 === (9))){
var inst_13873 = (state_13893[(8)]);
var state_13893__$1 = state_13893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13893__$1,(11),out,inst_13873);
} else {
if((state_val_13894 === (5))){
var inst_13873 = (state_13893[(8)]);
var inst_13870 = (state_13893[(7)]);
var inst_13877 = cljs.core._EQ_.call(null,inst_13873,inst_13870);
var state_13893__$1 = state_13893;
if(inst_13877){
var statearr_13906_13925 = state_13893__$1;
(statearr_13906_13925[(1)] = (8));

} else {
var statearr_13907_13926 = state_13893__$1;
(statearr_13907_13926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13894 === (10))){
var inst_13885 = (state_13893[(2)]);
var state_13893__$1 = state_13893;
var statearr_13908_13927 = state_13893__$1;
(statearr_13908_13927[(2)] = inst_13885);

(statearr_13908_13927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13894 === (8))){
var inst_13870 = (state_13893[(7)]);
var tmp13905 = inst_13870;
var inst_13870__$1 = tmp13905;
var state_13893__$1 = (function (){var statearr_13909 = state_13893;
(statearr_13909[(7)] = inst_13870__$1);

return statearr_13909;
})();
var statearr_13910_13928 = state_13893__$1;
(statearr_13910_13928[(2)] = null);

(statearr_13910_13928[(1)] = (2));


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
});})(c__7033__auto___13918,out))
;
return ((function (switch__6977__auto__,c__7033__auto___13918,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6978__auto__ = null;
var cljs$core$async$unique_$_state_machine__6978__auto____0 = (function (){
var statearr_13914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13914[(0)] = cljs$core$async$unique_$_state_machine__6978__auto__);

(statearr_13914[(1)] = (1));

return statearr_13914;
});
var cljs$core$async$unique_$_state_machine__6978__auto____1 = (function (state_13893){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_13893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e13915){if((e13915 instanceof Object)){
var ex__6981__auto__ = e13915;
var statearr_13916_13929 = state_13893;
(statearr_13916_13929[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13930 = state_13893;
state_13893 = G__13930;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6978__auto__ = function(state_13893){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6978__auto____1.call(this,state_13893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6978__auto____0;
cljs$core$async$unique_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6978__auto____1;
return cljs$core$async$unique_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___13918,out))
})();
var state__7035__auto__ = (function (){var statearr_13917 = f__7034__auto__.call(null);
(statearr_13917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___13918);

return statearr_13917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___13918,out))
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
var c__7033__auto___14065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___14065,out){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___14065,out){
return (function (state_14035){
var state_val_14036 = (state_14035[(1)]);
if((state_val_14036 === (7))){
var inst_14031 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14037_14066 = state_14035__$1;
(statearr_14037_14066[(2)] = inst_14031);

(statearr_14037_14066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (1))){
var inst_13998 = (new Array(n));
var inst_13999 = inst_13998;
var inst_14000 = (0);
var state_14035__$1 = (function (){var statearr_14038 = state_14035;
(statearr_14038[(7)] = inst_14000);

(statearr_14038[(8)] = inst_13999);

return statearr_14038;
})();
var statearr_14039_14067 = state_14035__$1;
(statearr_14039_14067[(2)] = null);

(statearr_14039_14067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (4))){
var inst_14003 = (state_14035[(9)]);
var inst_14003__$1 = (state_14035[(2)]);
var inst_14004 = (inst_14003__$1 == null);
var inst_14005 = cljs.core.not.call(null,inst_14004);
var state_14035__$1 = (function (){var statearr_14040 = state_14035;
(statearr_14040[(9)] = inst_14003__$1);

return statearr_14040;
})();
if(inst_14005){
var statearr_14041_14068 = state_14035__$1;
(statearr_14041_14068[(1)] = (5));

} else {
var statearr_14042_14069 = state_14035__$1;
(statearr_14042_14069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (15))){
var inst_14025 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14043_14070 = state_14035__$1;
(statearr_14043_14070[(2)] = inst_14025);

(statearr_14043_14070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (13))){
var state_14035__$1 = state_14035;
var statearr_14044_14071 = state_14035__$1;
(statearr_14044_14071[(2)] = null);

(statearr_14044_14071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (6))){
var inst_14000 = (state_14035[(7)]);
var inst_14021 = (inst_14000 > (0));
var state_14035__$1 = state_14035;
if(cljs.core.truth_(inst_14021)){
var statearr_14045_14072 = state_14035__$1;
(statearr_14045_14072[(1)] = (12));

} else {
var statearr_14046_14073 = state_14035__$1;
(statearr_14046_14073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (3))){
var inst_14033 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14035__$1,inst_14033);
} else {
if((state_val_14036 === (12))){
var inst_13999 = (state_14035[(8)]);
var inst_14023 = cljs.core.vec.call(null,inst_13999);
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14035__$1,(15),out,inst_14023);
} else {
if((state_val_14036 === (2))){
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14035__$1,(4),ch);
} else {
if((state_val_14036 === (11))){
var inst_14015 = (state_14035[(2)]);
var inst_14016 = (new Array(n));
var inst_13999 = inst_14016;
var inst_14000 = (0);
var state_14035__$1 = (function (){var statearr_14047 = state_14035;
(statearr_14047[(7)] = inst_14000);

(statearr_14047[(10)] = inst_14015);

(statearr_14047[(8)] = inst_13999);

return statearr_14047;
})();
var statearr_14048_14074 = state_14035__$1;
(statearr_14048_14074[(2)] = null);

(statearr_14048_14074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (9))){
var inst_13999 = (state_14035[(8)]);
var inst_14013 = cljs.core.vec.call(null,inst_13999);
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14035__$1,(11),out,inst_14013);
} else {
if((state_val_14036 === (5))){
var inst_14008 = (state_14035[(11)]);
var inst_14000 = (state_14035[(7)]);
var inst_13999 = (state_14035[(8)]);
var inst_14003 = (state_14035[(9)]);
var inst_14007 = (inst_13999[inst_14000] = inst_14003);
var inst_14008__$1 = (inst_14000 + (1));
var inst_14009 = (inst_14008__$1 < n);
var state_14035__$1 = (function (){var statearr_14049 = state_14035;
(statearr_14049[(12)] = inst_14007);

(statearr_14049[(11)] = inst_14008__$1);

return statearr_14049;
})();
if(cljs.core.truth_(inst_14009)){
var statearr_14050_14075 = state_14035__$1;
(statearr_14050_14075[(1)] = (8));

} else {
var statearr_14051_14076 = state_14035__$1;
(statearr_14051_14076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (14))){
var inst_14028 = (state_14035[(2)]);
var inst_14029 = cljs.core.async.close_BANG_.call(null,out);
var state_14035__$1 = (function (){var statearr_14053 = state_14035;
(statearr_14053[(13)] = inst_14028);

return statearr_14053;
})();
var statearr_14054_14077 = state_14035__$1;
(statearr_14054_14077[(2)] = inst_14029);

(statearr_14054_14077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (10))){
var inst_14019 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14055_14078 = state_14035__$1;
(statearr_14055_14078[(2)] = inst_14019);

(statearr_14055_14078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14036 === (8))){
var inst_14008 = (state_14035[(11)]);
var inst_13999 = (state_14035[(8)]);
var tmp14052 = inst_13999;
var inst_13999__$1 = tmp14052;
var inst_14000 = inst_14008;
var state_14035__$1 = (function (){var statearr_14056 = state_14035;
(statearr_14056[(7)] = inst_14000);

(statearr_14056[(8)] = inst_13999__$1);

return statearr_14056;
})();
var statearr_14057_14079 = state_14035__$1;
(statearr_14057_14079[(2)] = null);

(statearr_14057_14079[(1)] = (2));


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
});})(c__7033__auto___14065,out))
;
return ((function (switch__6977__auto__,c__7033__auto___14065,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6978__auto__ = null;
var cljs$core$async$partition_$_state_machine__6978__auto____0 = (function (){
var statearr_14061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14061[(0)] = cljs$core$async$partition_$_state_machine__6978__auto__);

(statearr_14061[(1)] = (1));

return statearr_14061;
});
var cljs$core$async$partition_$_state_machine__6978__auto____1 = (function (state_14035){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_14035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e14062){if((e14062 instanceof Object)){
var ex__6981__auto__ = e14062;
var statearr_14063_14080 = state_14035;
(statearr_14063_14080[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14081 = state_14035;
state_14035 = G__14081;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6978__auto__ = function(state_14035){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6978__auto____1.call(this,state_14035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6978__auto____0;
cljs$core$async$partition_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6978__auto____1;
return cljs$core$async$partition_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___14065,out))
})();
var state__7035__auto__ = (function (){var statearr_14064 = f__7034__auto__.call(null);
(statearr_14064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___14065);

return statearr_14064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___14065,out))
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
var c__7033__auto___14224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto___14224,out){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto___14224,out){
return (function (state_14194){
var state_val_14195 = (state_14194[(1)]);
if((state_val_14195 === (7))){
var inst_14190 = (state_14194[(2)]);
var state_14194__$1 = state_14194;
var statearr_14196_14225 = state_14194__$1;
(statearr_14196_14225[(2)] = inst_14190);

(statearr_14196_14225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (1))){
var inst_14153 = [];
var inst_14154 = inst_14153;
var inst_14155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14194__$1 = (function (){var statearr_14197 = state_14194;
(statearr_14197[(7)] = inst_14154);

(statearr_14197[(8)] = inst_14155);

return statearr_14197;
})();
var statearr_14198_14226 = state_14194__$1;
(statearr_14198_14226[(2)] = null);

(statearr_14198_14226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (4))){
var inst_14158 = (state_14194[(9)]);
var inst_14158__$1 = (state_14194[(2)]);
var inst_14159 = (inst_14158__$1 == null);
var inst_14160 = cljs.core.not.call(null,inst_14159);
var state_14194__$1 = (function (){var statearr_14199 = state_14194;
(statearr_14199[(9)] = inst_14158__$1);

return statearr_14199;
})();
if(inst_14160){
var statearr_14200_14227 = state_14194__$1;
(statearr_14200_14227[(1)] = (5));

} else {
var statearr_14201_14228 = state_14194__$1;
(statearr_14201_14228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (15))){
var inst_14184 = (state_14194[(2)]);
var state_14194__$1 = state_14194;
var statearr_14202_14229 = state_14194__$1;
(statearr_14202_14229[(2)] = inst_14184);

(statearr_14202_14229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (13))){
var state_14194__$1 = state_14194;
var statearr_14203_14230 = state_14194__$1;
(statearr_14203_14230[(2)] = null);

(statearr_14203_14230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (6))){
var inst_14154 = (state_14194[(7)]);
var inst_14179 = inst_14154.length;
var inst_14180 = (inst_14179 > (0));
var state_14194__$1 = state_14194;
if(cljs.core.truth_(inst_14180)){
var statearr_14204_14231 = state_14194__$1;
(statearr_14204_14231[(1)] = (12));

} else {
var statearr_14205_14232 = state_14194__$1;
(statearr_14205_14232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (3))){
var inst_14192 = (state_14194[(2)]);
var state_14194__$1 = state_14194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14194__$1,inst_14192);
} else {
if((state_val_14195 === (12))){
var inst_14154 = (state_14194[(7)]);
var inst_14182 = cljs.core.vec.call(null,inst_14154);
var state_14194__$1 = state_14194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14194__$1,(15),out,inst_14182);
} else {
if((state_val_14195 === (2))){
var state_14194__$1 = state_14194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14194__$1,(4),ch);
} else {
if((state_val_14195 === (11))){
var inst_14162 = (state_14194[(10)]);
var inst_14158 = (state_14194[(9)]);
var inst_14172 = (state_14194[(2)]);
var inst_14173 = [];
var inst_14174 = inst_14173.push(inst_14158);
var inst_14154 = inst_14173;
var inst_14155 = inst_14162;
var state_14194__$1 = (function (){var statearr_14206 = state_14194;
(statearr_14206[(11)] = inst_14172);

(statearr_14206[(7)] = inst_14154);

(statearr_14206[(8)] = inst_14155);

(statearr_14206[(12)] = inst_14174);

return statearr_14206;
})();
var statearr_14207_14233 = state_14194__$1;
(statearr_14207_14233[(2)] = null);

(statearr_14207_14233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (9))){
var inst_14154 = (state_14194[(7)]);
var inst_14170 = cljs.core.vec.call(null,inst_14154);
var state_14194__$1 = state_14194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14194__$1,(11),out,inst_14170);
} else {
if((state_val_14195 === (5))){
var inst_14162 = (state_14194[(10)]);
var inst_14158 = (state_14194[(9)]);
var inst_14155 = (state_14194[(8)]);
var inst_14162__$1 = f.call(null,inst_14158);
var inst_14163 = cljs.core._EQ_.call(null,inst_14162__$1,inst_14155);
var inst_14164 = cljs.core.keyword_identical_QMARK_.call(null,inst_14155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14165 = (inst_14163) || (inst_14164);
var state_14194__$1 = (function (){var statearr_14208 = state_14194;
(statearr_14208[(10)] = inst_14162__$1);

return statearr_14208;
})();
if(cljs.core.truth_(inst_14165)){
var statearr_14209_14234 = state_14194__$1;
(statearr_14209_14234[(1)] = (8));

} else {
var statearr_14210_14235 = state_14194__$1;
(statearr_14210_14235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (14))){
var inst_14187 = (state_14194[(2)]);
var inst_14188 = cljs.core.async.close_BANG_.call(null,out);
var state_14194__$1 = (function (){var statearr_14212 = state_14194;
(statearr_14212[(13)] = inst_14187);

return statearr_14212;
})();
var statearr_14213_14236 = state_14194__$1;
(statearr_14213_14236[(2)] = inst_14188);

(statearr_14213_14236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (10))){
var inst_14177 = (state_14194[(2)]);
var state_14194__$1 = state_14194;
var statearr_14214_14237 = state_14194__$1;
(statearr_14214_14237[(2)] = inst_14177);

(statearr_14214_14237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (8))){
var inst_14154 = (state_14194[(7)]);
var inst_14162 = (state_14194[(10)]);
var inst_14158 = (state_14194[(9)]);
var inst_14167 = inst_14154.push(inst_14158);
var tmp14211 = inst_14154;
var inst_14154__$1 = tmp14211;
var inst_14155 = inst_14162;
var state_14194__$1 = (function (){var statearr_14215 = state_14194;
(statearr_14215[(14)] = inst_14167);

(statearr_14215[(7)] = inst_14154__$1);

(statearr_14215[(8)] = inst_14155);

return statearr_14215;
})();
var statearr_14216_14238 = state_14194__$1;
(statearr_14216_14238[(2)] = null);

(statearr_14216_14238[(1)] = (2));


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
});})(c__7033__auto___14224,out))
;
return ((function (switch__6977__auto__,c__7033__auto___14224,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6978__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6978__auto____0 = (function (){
var statearr_14220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14220[(0)] = cljs$core$async$partition_by_$_state_machine__6978__auto__);

(statearr_14220[(1)] = (1));

return statearr_14220;
});
var cljs$core$async$partition_by_$_state_machine__6978__auto____1 = (function (state_14194){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_14194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e14221){if((e14221 instanceof Object)){
var ex__6981__auto__ = e14221;
var statearr_14222_14239 = state_14194;
(statearr_14222_14239[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14240 = state_14194;
state_14194 = G__14240;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6978__auto__ = function(state_14194){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6978__auto____1.call(this,state_14194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6978__auto____0;
cljs$core$async$partition_by_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6978__auto____1;
return cljs$core$async$partition_by_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto___14224,out))
})();
var state__7035__auto__ = (function (){var statearr_14223 = f__7034__auto__.call(null);
(statearr_14223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto___14224);

return statearr_14223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto___14224,out))
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