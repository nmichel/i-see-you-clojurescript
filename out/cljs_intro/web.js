// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.web');
goog.require('cljs.core');
goog.require('cljs_intro.draw');
goog.require('cljs_intro.spot');
goog.require('cljs_intro.data');
goog.require('cljs_intro.g2d');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('cljs_intro.global');
goog.require('cljs_intro.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_intro.web.geom = cljs_intro.data.produce_block_soup.call(null);
cljs_intro.web.build_dynamic_data = (function cljs_intro$web$build_dynamic_data(){
var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(-20),(20),(-20),(20),(20),(-20),(20)], null);
var iter__4876__auto__ = ((function (data){
return (function cljs_intro$web$build_dynamic_data_$_iter__15382(s__15383){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__15383__$1 = s__15383;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15383__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__15383__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__15382_$_iter__15384(s__15385){
return (new cljs.core.LazySeq(null,((function (s__15383__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function (){
var s__15385__$1 = s__15385;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15385__$1);
if(temp__4126__auto____$1){
var s__15385__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15385__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__15385__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__15387 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__15386 = (0);
while(true){
if((i__15386 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__15386);
cljs.core.chunk_append.call(null,b__15387,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__15388 = (i__15386 + (1));
i__15386 = G__15388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15387),cljs_intro$web$build_dynamic_data_$_iter__15382_$_iter__15384.call(null,cljs.core.chunk_rest.call(null,s__15385__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15387),null);
}
} else {
var sy = cljs.core.first.call(null,s__15385__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__15382_$_iter__15384.call(null,cljs.core.rest.call(null,s__15385__$2)));
}
} else {
return null;
}
break;
}
});})(s__15383__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
,null,null));
});})(s__15383__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$web$build_dynamic_data_$_iter__15382.call(null,cljs.core.rest.call(null,s__15383__$1)));
} else {
var G__15389 = cljs.core.rest.call(null,s__15383__$1);
s__15383__$1 = G__15389;
continue;
}
} else {
return null;
}
break;
}
});})(data))
,null,null));
});})(data))
;
return iter__4876__auto__.call(null,cljs.core.range.call(null,(6)));
});
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__15390){
var map__15393 = p__15390;
var map__15393__$1 = ((cljs.core.seq_QMARK_.call(null,map__15393))?cljs.core.apply.call(null,cljs.core.hash_map,map__15393):map__15393);
var alpha = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var closed = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var data = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var y = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__15393,map__15393__$1,alpha,closed,data,y,x){
return (function (p){
var vec__15394 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__15394,(0),null);
var rpy = cljs.core.nth.call(null,vec__15394,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__15393,map__15393__$1,alpha,closed,data,y,x))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__7033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto__){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto__){
return (function (state_15436){
var state_val_15437 = (state_15436[(1)]);
if((state_val_15437 === (4))){
var inst_15426 = (state_15436[(2)]);
var inst_15427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15428 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_15429 = (new cljs.core.PersistentVector(null,2,(5),inst_15427,inst_15428,null));
var inst_15430 = cljs.core.async.put_BANG_.call(null,chan_out,inst_15429);
var inst_15431 = cljs.core.async.timeout.call(null,period);
var inst_15423 = inst_15431;
var state_15436__$1 = (function (){var statearr_15438 = state_15436;
(statearr_15438[(7)] = inst_15423);

(statearr_15438[(8)] = inst_15430);

(statearr_15438[(9)] = inst_15426);

return statearr_15438;
})();
var statearr_15439_15449 = state_15436__$1;
(statearr_15439_15449[(2)] = null);

(statearr_15439_15449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (3))){
var inst_15434 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15436__$1,inst_15434);
} else {
if((state_val_15437 === (2))){
var inst_15423 = (state_15436[(7)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15436__$1,(4),inst_15423);
} else {
if((state_val_15437 === (1))){
var inst_15422 = cljs.core.async.timeout.call(null,period);
var inst_15423 = inst_15422;
var state_15436__$1 = (function (){var statearr_15440 = state_15436;
(statearr_15440[(7)] = inst_15423);

return statearr_15440;
})();
var statearr_15441_15450 = state_15436__$1;
(statearr_15441_15450[(2)] = null);

(statearr_15441_15450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7033__auto__))
;
return ((function (switch__6977__auto__,c__7033__auto__){
return (function() {
var cljs_intro$web$listen_timer_$_state_machine__6978__auto__ = null;
var cljs_intro$web$listen_timer_$_state_machine__6978__auto____0 = (function (){
var statearr_15445 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15445[(0)] = cljs_intro$web$listen_timer_$_state_machine__6978__auto__);

(statearr_15445[(1)] = (1));

return statearr_15445;
});
var cljs_intro$web$listen_timer_$_state_machine__6978__auto____1 = (function (state_15436){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_15436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e15446){if((e15446 instanceof Object)){
var ex__6981__auto__ = e15446;
var statearr_15447_15451 = state_15436;
(statearr_15447_15451[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15452 = state_15436;
state_15436 = G__15452;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__6978__auto__ = function(state_15436){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__6978__auto____1.call(this,state_15436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__6978__auto____0;
cljs_intro$web$listen_timer_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__6978__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto__))
})();
var state__7035__auto__ = (function (){var statearr_15448 = f__7034__auto__.call(null);
(statearr_15448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto__);

return statearr_15448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto__))
);

return c__7033__auto__;
});
cljs_intro.web.listen_dom_evt = (function cljs_intro$web$listen_dom_evt(chan_out,target,evt_type,cb){
return dommy.core.listen_BANG_.call(null,target,evt_type,(function (ev){
return cljs.core.async.put_BANG_.call(null,chan_out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,cb], null));
}));
});
cljs_intro.web.init_game_state = (function cljs_intro$web$init_game_state(dist){
var target = document.getElementById("target");
var context = target.getContext("2d");
var img = (new Image());
var width = target.width;
var height = target.height;
var r_geom = cljs_intro.web.build_dynamic_data.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"dist","dist",-1401837144),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"height","height",1025178622)],[(180),dist,cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom),width,null,null,(0),context,(320),target,r_geom,img,height]);
});
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__15453){
var map__15456 = p__15453;
var map__15456__$1 = ((cljs.core.seq_QMARK_.call(null,map__15456))?cljs.core.apply.call(null,cljs.core.hash_map,map__15456):map__15456);
var state = map__15456__$1;
var x = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var img = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var eps = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var context = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var vec__15457 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__15457,(0),null);
var eps__$1 = cljs.core.nth.call(null,vec__15457,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__15457,(2),null);
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var erase_color = "grey";
cljs_intro.draw.draw_rect.call(null,context,(0),(0),width,height,erase_color);

cljs_intro.draw.draw_hull_as_arc.call(null,context,x,y,hull,dist,img);

cljs_intro.draw.draw_segments.call(null,context,segs);

return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
});
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__15458,dynamic,alpha){
var vec__15464 = p__15458;
var drawdata = cljs.core.nth.call(null,vec__15464,(0),null);
var eps = cljs.core.nth.call(null,vec__15464,(1),null);
var allsegs = cljs.core.nth.call(null,vec__15464,(2),null);
return cljs.core.reduce.call(null,((function (vec__15464,drawdata,eps,allsegs){
return (function (p__15465,p__15466){
var vec__15467 = p__15465;
var adraw = cljs.core.nth.call(null,vec__15467,(0),null);
var aeps = cljs.core.nth.call(null,vec__15467,(1),null);
var asegs = cljs.core.nth.call(null,vec__15467,(2),null);
var vec__15468 = p__15466;
var e = cljs.core.nth.call(null,vec__15468,(0),null);
var s = cljs.core.nth.call(null,vec__15468,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__15464,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,ev,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY);
});
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(ev,p__15469){
var map__15473 = p__15469;
var map__15473__$1 = ((cljs.core.seq_QMARK_.call(null,map__15473))?cljs.core.apply.call(null,cljs.core.hash_map,map__15473):map__15473);
var state = map__15473__$1;
var dist = cljs.core.get.call(null,map__15473__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var r_geom = cljs.core.get.call(null,map__15473__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var y = cljs.core.get.call(null,map__15473__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__15473__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var static$ = cljs.core.get.call(null,map__15473__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var alpha = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(state);
var vec__15474 = static$;
var dd = cljs.core.nth.call(null,vec__15474,(0),null);
var de = cljs.core.nth.call(null,vec__15474,(1),null);
var ds = cljs.core.nth.call(null,vec__15474,(2),null);
var vec__15475 = cljs_intro.spot.compute_visibility_hull.call(null,ds,o,dist);
var segs = cljs.core.nth.call(null,vec__15475,(0),null);
var hull = cljs.core.nth.call(null,vec__15475,(1),null);
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),segs,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dd,de,ds], null),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(alpha + (Math.PI / (20))));
return new_state;
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__15505 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__15505,(0),null);
var eps = cljs.core.nth.call(null,vec__15505,(1),null);
var allsegs = cljs.core.nth.call(null,vec__15505,(2),null);
var data = vec__15505;
var chan_out = cljs.core.async.chan.call(null);
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

var c__7033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7033__auto__,chan_out,target,context,width,height,vec__15505,drawdata,eps,allsegs,data){
return (function (){
var f__7034__auto__ = (function (){var switch__6977__auto__ = ((function (c__7033__auto__,chan_out,target,context,width,height,vec__15505,drawdata,eps,allsegs,data){
return (function (state_15521){
var state_val_15522 = (state_15521[(1)]);
if((state_val_15522 === (4))){
var inst_15508 = (state_15521[(7)]);
var inst_15512 = (state_15521[(2)]);
var inst_15513 = cljs.core.nth.call(null,inst_15512,(0),null);
var inst_15514 = cljs.core.nth.call(null,inst_15512,(1),null);
var inst_15515 = inst_15514.call(null,inst_15513,inst_15508);
var inst_15516 = cljs_intro.web.render_game.call(null,inst_15515);
var inst_15507 = true;
var inst_15508__$1 = inst_15515;
var state_15521__$1 = (function (){var statearr_15523 = state_15521;
(statearr_15523[(8)] = inst_15516);

(statearr_15523[(7)] = inst_15508__$1);

(statearr_15523[(9)] = inst_15507);

return statearr_15523;
})();
var statearr_15524_15534 = state_15521__$1;
(statearr_15524_15534[(2)] = null);

(statearr_15524_15534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15522 === (3))){
var inst_15519 = (state_15521[(2)]);
var state_15521__$1 = state_15521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15521__$1,inst_15519);
} else {
if((state_val_15522 === (2))){
var state_15521__$1 = state_15521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15521__$1,(4),chan_out);
} else {
if((state_val_15522 === (1))){
var inst_15506 = cljs_intro.web.init_game_state.call(null,(100));
var inst_15507 = true;
var inst_15508 = inst_15506;
var state_15521__$1 = (function (){var statearr_15525 = state_15521;
(statearr_15525[(7)] = inst_15508);

(statearr_15525[(9)] = inst_15507);

return statearr_15525;
})();
var statearr_15526_15535 = state_15521__$1;
(statearr_15526_15535[(2)] = null);

(statearr_15526_15535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7033__auto__,chan_out,target,context,width,height,vec__15505,drawdata,eps,allsegs,data))
;
return ((function (switch__6977__auto__,c__7033__auto__,chan_out,target,context,width,height,vec__15505,drawdata,eps,allsegs,data){
return (function() {
var cljs_intro$web$init_$_state_machine__6978__auto__ = null;
var cljs_intro$web$init_$_state_machine__6978__auto____0 = (function (){
var statearr_15530 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15530[(0)] = cljs_intro$web$init_$_state_machine__6978__auto__);

(statearr_15530[(1)] = (1));

return statearr_15530;
});
var cljs_intro$web$init_$_state_machine__6978__auto____1 = (function (state_15521){
while(true){
var ret_value__6979__auto__ = (function (){try{while(true){
var result__6980__auto__ = switch__6977__auto__.call(null,state_15521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6980__auto__;
}
break;
}
}catch (e15531){if((e15531 instanceof Object)){
var ex__6981__auto__ = e15531;
var statearr_15532_15536 = state_15521;
(statearr_15532_15536[(5)] = ex__6981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15537 = state_15521;
state_15521 = G__15537;
continue;
} else {
return ret_value__6979__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__6978__auto__ = function(state_15521){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__6978__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__6978__auto____1.call(this,state_15521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__6978__auto____0;
cljs_intro$web$init_$_state_machine__6978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__6978__auto____1;
return cljs_intro$web$init_$_state_machine__6978__auto__;
})()
;})(switch__6977__auto__,c__7033__auto__,chan_out,target,context,width,height,vec__15505,drawdata,eps,allsegs,data))
})();
var state__7035__auto__ = (function (){var statearr_15533 = f__7034__auto__.call(null);
(statearr_15533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7033__auto__);

return statearr_15533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7035__auto__);
});})(c__7033__auto__,chan_out,target,context,width,height,vec__15505,drawdata,eps,allsegs,data))
);

return c__7033__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map