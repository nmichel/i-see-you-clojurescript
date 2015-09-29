// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.web');
goog.require('cljs.core');
goog.require('cljs_intro.draw');
goog.require('cljs_intro.spot');
goog.require('cljs_intro.pie');
goog.require('cljs_intro.data');
goog.require('cljs_intro.g2d');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('cljs_intro.global');
goog.require('cljs_intro.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_intro.web.geom = cljs_intro.data.produce_spiral.call(null,(320),(180),(170),(0));
cljs_intro.web.build_dynamic_data = (function cljs_intro$web$build_dynamic_data(){
var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(-20),(20),(-20),(20),(20),(-20),(20)], null);
var iter__16898__auto__ = ((function (data){
return (function cljs_intro$web$build_dynamic_data_$_iter__26014(s__26015){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__26015__$1 = s__26015;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26015__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__16894__auto__ = ((function (s__26015__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__26014_$_iter__26016(s__26017){
return (new cljs.core.LazySeq(null,((function (s__26015__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function (){
var s__26017__$1 = s__26017;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26017__$1);
if(temp__4126__auto____$1){
var s__26017__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26017__$2)){
var c__16896__auto__ = cljs.core.chunk_first.call(null,s__26017__$2);
var size__16897__auto__ = cljs.core.count.call(null,c__16896__auto__);
var b__26019 = cljs.core.chunk_buffer.call(null,size__16897__auto__);
if((function (){var i__26018 = (0);
while(true){
if((i__26018 < size__16897__auto__)){
var sy = cljs.core._nth.call(null,c__16896__auto__,i__26018);
cljs.core.chunk_append.call(null,b__26019,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__26020 = (i__26018 + (1));
i__26018 = G__26020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26019),cljs_intro$web$build_dynamic_data_$_iter__26014_$_iter__26016.call(null,cljs.core.chunk_rest.call(null,s__26017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26019),null);
}
} else {
var sy = cljs.core.first.call(null,s__26017__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__26014_$_iter__26016.call(null,cljs.core.rest.call(null,s__26017__$2)));
}
} else {
return null;
}
break;
}
});})(s__26015__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
,null,null));
});})(s__26015__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
;
var fs__16895__auto__ = cljs.core.seq.call(null,iterys__16894__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__16895__auto__){
return cljs.core.concat.call(null,fs__16895__auto__,cljs_intro$web$build_dynamic_data_$_iter__26014.call(null,cljs.core.rest.call(null,s__26015__$1)));
} else {
var G__26021 = cljs.core.rest.call(null,s__26015__$1);
s__26015__$1 = G__26021;
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
return iter__16898__auto__.call(null,cljs.core.range.call(null,(6)));
});
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__26022){
var map__26025 = p__26022;
var map__26025__$1 = ((cljs.core.seq_QMARK_.call(null,map__26025))?cljs.core.apply.call(null,cljs.core.hash_map,map__26025):map__26025);
var alpha = cljs.core.get.call(null,map__26025__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var closed = cljs.core.get.call(null,map__26025__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var data = cljs.core.get.call(null,map__26025__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var y = cljs.core.get.call(null,map__26025__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__26025__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__26025,map__26025__$1,alpha,closed,data,y,x){
return (function (p){
var vec__26026 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__26026,(0),null);
var rpy = cljs.core.nth.call(null,vec__26026,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__26025,map__26025__$1,alpha,closed,data,y,x))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__19080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19080__auto__){
return (function (){
var f__19081__auto__ = (function (){var switch__19059__auto__ = ((function (c__19080__auto__){
return (function (state_26068){
var state_val_26069 = (state_26068[(1)]);
if((state_val_26069 === (4))){
var inst_26058 = (state_26068[(2)]);
var inst_26059 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26060 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_26061 = (new cljs.core.PersistentVector(null,2,(5),inst_26059,inst_26060,null));
var inst_26062 = cljs.core.async.put_BANG_.call(null,chan_out,inst_26061);
var inst_26063 = cljs.core.async.timeout.call(null,period);
var inst_26055 = inst_26063;
var state_26068__$1 = (function (){var statearr_26070 = state_26068;
(statearr_26070[(7)] = inst_26058);

(statearr_26070[(8)] = inst_26062);

(statearr_26070[(9)] = inst_26055);

return statearr_26070;
})();
var statearr_26071_26081 = state_26068__$1;
(statearr_26071_26081[(2)] = null);

(statearr_26071_26081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26069 === (3))){
var inst_26066 = (state_26068[(2)]);
var state_26068__$1 = state_26068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26068__$1,inst_26066);
} else {
if((state_val_26069 === (2))){
var inst_26055 = (state_26068[(9)]);
var state_26068__$1 = state_26068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26068__$1,(4),inst_26055);
} else {
if((state_val_26069 === (1))){
var inst_26054 = cljs.core.async.timeout.call(null,period);
var inst_26055 = inst_26054;
var state_26068__$1 = (function (){var statearr_26072 = state_26068;
(statearr_26072[(9)] = inst_26055);

return statearr_26072;
})();
var statearr_26073_26082 = state_26068__$1;
(statearr_26073_26082[(2)] = null);

(statearr_26073_26082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19080__auto__))
;
return ((function (switch__19059__auto__,c__19080__auto__){
return (function() {
var cljs_intro$web$listen_timer_$_state_machine__19060__auto__ = null;
var cljs_intro$web$listen_timer_$_state_machine__19060__auto____0 = (function (){
var statearr_26077 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26077[(0)] = cljs_intro$web$listen_timer_$_state_machine__19060__auto__);

(statearr_26077[(1)] = (1));

return statearr_26077;
});
var cljs_intro$web$listen_timer_$_state_machine__19060__auto____1 = (function (state_26068){
while(true){
var ret_value__19061__auto__ = (function (){try{while(true){
var result__19062__auto__ = switch__19059__auto__.call(null,state_26068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19062__auto__;
}
break;
}
}catch (e26078){if((e26078 instanceof Object)){
var ex__19063__auto__ = e26078;
var statearr_26079_26083 = state_26068;
(statearr_26079_26083[(5)] = ex__19063__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26084 = state_26068;
state_26068 = G__26084;
continue;
} else {
return ret_value__19061__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__19060__auto__ = function(state_26068){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__19060__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__19060__auto____1.call(this,state_26068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__19060__auto____0;
cljs_intro$web$listen_timer_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__19060__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__19060__auto__;
})()
;})(switch__19059__auto__,c__19080__auto__))
})();
var state__19082__auto__ = (function (){var statearr_26080 = f__19081__auto__.call(null);
(statearr_26080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19080__auto__);

return statearr_26080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19082__auto__);
});})(c__19080__auto__))
);

return c__19080__auto__;
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
cljs_intro.web._STAR_alpha_STAR_ = cljs_intro.g2d.deg__GT_rad.call(null,(127));
cljs_intro.web._STAR_apperture_STAR_ = cljs_intro.g2d.deg__GT_rad.call(null,137.0);
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__26085){
var map__26088 = p__26085;
var map__26088__$1 = ((cljs.core.seq_QMARK_.call(null,map__26088))?cljs.core.apply.call(null,cljs.core.hash_map,map__26088):map__26088);
var state = map__26088__$1;
var x = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var img = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var eps = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var context = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var vec__26089 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__26089,(0),null);
var eps__$1 = cljs.core.nth.call(null,vec__26089,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__26089,(2),null);
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var erase_color = "grey";
cljs_intro.draw.draw_rect.call(null,context,(0),(0),width,height,erase_color);

cljs_intro.draw.draw_geometry.call(null,context,drawdata);

cljs_intro.draw.draw_segments.call(null,context,segs);

cljs_intro.draw.draw_hull_as_surfaces.call(null,context,hull);

cljs_intro.draw.draw_pie.call(null,context,x,y,dist,cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(cljs_intro.web._STAR_alpha_STAR_ - cljs_intro.web._STAR_apperture_STAR_)),cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(cljs_intro.web._STAR_alpha_STAR_ + cljs_intro.web._STAR_apperture_STAR_)));

return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
});
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__26090,dynamic,alpha){
var vec__26096 = p__26090;
var drawdata = cljs.core.nth.call(null,vec__26096,(0),null);
var eps = cljs.core.nth.call(null,vec__26096,(1),null);
var allsegs = cljs.core.nth.call(null,vec__26096,(2),null);
return cljs.core.reduce.call(null,((function (vec__26096,drawdata,eps,allsegs){
return (function (p__26097,p__26098){
var vec__26099 = p__26097;
var adraw = cljs.core.nth.call(null,vec__26099,(0),null);
var aeps = cljs.core.nth.call(null,vec__26099,(1),null);
var asegs = cljs.core.nth.call(null,vec__26099,(2),null);
var vec__26100 = p__26098;
var e = cljs.core.nth.call(null,vec__26100,(0),null);
var s = cljs.core.nth.call(null,vec__26100,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__26096,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,ev,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY);
});
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(ev,p__26101){
var map__26105 = p__26101;
var map__26105__$1 = ((cljs.core.seq_QMARK_.call(null,map__26105))?cljs.core.apply.call(null,cljs.core.hash_map,map__26105):map__26105);
var state = map__26105__$1;
var dist = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var r_geom = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var y = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var static$ = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var alpha = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(state);
var vec__26106 = static$;
var dd = cljs.core.nth.call(null,vec__26106,(0),null);
var de = cljs.core.nth.call(null,vec__26106,(1),null);
var ds = cljs.core.nth.call(null,vec__26106,(2),null);
var vec__26107 = cljs_intro.pie.compute_visibility_hull.call(null,cljs_intro.web._STAR_alpha_STAR_,cljs_intro.web._STAR_apperture_STAR_,o,dist,ds);
var segs = cljs.core.nth.call(null,vec__26107,(0),null);
var hull = cljs.core.nth.call(null,vec__26107,(1),null);
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),segs,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dd,de,ds], null),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(alpha + (Math.PI / (20))));
return new_state;
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__26138 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__26138,(0),null);
var eps = cljs.core.nth.call(null,vec__26138,(1),null);
var allsegs = cljs.core.nth.call(null,vec__26138,(2),null);
var data = vec__26138;
var chan_out = cljs.core.async.chan.call(null);
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

var c__19080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19080__auto__,chan_out,target,context,width,height,vec__26138,drawdata,eps,allsegs,data){
return (function (){
var f__19081__auto__ = (function (){var switch__19059__auto__ = ((function (c__19080__auto__,chan_out,target,context,width,height,vec__26138,drawdata,eps,allsegs,data){
return (function (state_26155){
var state_val_26156 = (state_26155[(1)]);
if((state_val_26156 === (4))){
var inst_26141 = (state_26155[(7)]);
var inst_26145 = (state_26155[(2)]);
var inst_26146 = cljs.core.nth.call(null,inst_26145,(0),null);
var inst_26147 = cljs.core.nth.call(null,inst_26145,(1),null);
var inst_26148 = inst_26147.call(null,inst_26146,inst_26141);
var inst_26149 = cljs.core.partial.call(null,cljs_intro.web.render_game,inst_26148);
var inst_26150 = window.requestAnimationFrame(inst_26149);
var inst_26140 = true;
var inst_26141__$1 = inst_26148;
var state_26155__$1 = (function (){var statearr_26157 = state_26155;
(statearr_26157[(8)] = inst_26150);

(statearr_26157[(9)] = inst_26140);

(statearr_26157[(7)] = inst_26141__$1);

return statearr_26157;
})();
var statearr_26158_26168 = state_26155__$1;
(statearr_26158_26168[(2)] = null);

(statearr_26158_26168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (3))){
var inst_26153 = (state_26155[(2)]);
var state_26155__$1 = state_26155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26155__$1,inst_26153);
} else {
if((state_val_26156 === (2))){
var state_26155__$1 = state_26155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26155__$1,(4),chan_out);
} else {
if((state_val_26156 === (1))){
var inst_26139 = cljs_intro.web.init_game_state.call(null,(100));
var inst_26140 = true;
var inst_26141 = inst_26139;
var state_26155__$1 = (function (){var statearr_26159 = state_26155;
(statearr_26159[(9)] = inst_26140);

(statearr_26159[(7)] = inst_26141);

return statearr_26159;
})();
var statearr_26160_26169 = state_26155__$1;
(statearr_26160_26169[(2)] = null);

(statearr_26160_26169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19080__auto__,chan_out,target,context,width,height,vec__26138,drawdata,eps,allsegs,data))
;
return ((function (switch__19059__auto__,c__19080__auto__,chan_out,target,context,width,height,vec__26138,drawdata,eps,allsegs,data){
return (function() {
var cljs_intro$web$init_$_state_machine__19060__auto__ = null;
var cljs_intro$web$init_$_state_machine__19060__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26164[(0)] = cljs_intro$web$init_$_state_machine__19060__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var cljs_intro$web$init_$_state_machine__19060__auto____1 = (function (state_26155){
while(true){
var ret_value__19061__auto__ = (function (){try{while(true){
var result__19062__auto__ = switch__19059__auto__.call(null,state_26155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19062__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__19063__auto__ = e26165;
var statearr_26166_26170 = state_26155;
(statearr_26166_26170[(5)] = ex__19063__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26171 = state_26155;
state_26155 = G__26171;
continue;
} else {
return ret_value__19061__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__19060__auto__ = function(state_26155){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__19060__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__19060__auto____1.call(this,state_26155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__19060__auto____0;
cljs_intro$web$init_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__19060__auto____1;
return cljs_intro$web$init_$_state_machine__19060__auto__;
})()
;})(switch__19059__auto__,c__19080__auto__,chan_out,target,context,width,height,vec__26138,drawdata,eps,allsegs,data))
})();
var state__19082__auto__ = (function (){var statearr_26167 = f__19081__auto__.call(null);
(statearr_26167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19080__auto__);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19082__auto__);
});})(c__19080__auto__,chan_out,target,context,width,height,vec__26138,drawdata,eps,allsegs,data))
);

return c__19080__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map