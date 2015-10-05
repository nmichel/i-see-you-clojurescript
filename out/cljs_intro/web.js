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
cljs_intro.web.geom = cljs_intro.data.add_frame.call(null,cljs_intro.data.produce_spiral.call(null,(320),(180),(170),(0)));
cljs_intro.web.build_dynamic_data = (function cljs_intro$web$build_dynamic_data(){
var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(-20),(20),(-20),(20),(20),(-20),(20)], null);
var iter__16897__auto__ = ((function (data){
return (function cljs_intro$web$build_dynamic_data_$_iter__30006(s__30007){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__30007__$1 = s__30007;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30007__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__16893__auto__ = ((function (s__30007__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__30006_$_iter__30008(s__30009){
return (new cljs.core.LazySeq(null,((function (s__30007__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function (){
var s__30009__$1 = s__30009;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30009__$1);
if(temp__4126__auto____$1){
var s__30009__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30009__$2)){
var c__16895__auto__ = cljs.core.chunk_first.call(null,s__30009__$2);
var size__16896__auto__ = cljs.core.count.call(null,c__16895__auto__);
var b__30011 = cljs.core.chunk_buffer.call(null,size__16896__auto__);
if((function (){var i__30010 = (0);
while(true){
if((i__30010 < size__16896__auto__)){
var sy = cljs.core._nth.call(null,c__16895__auto__,i__30010);
cljs.core.chunk_append.call(null,b__30011,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__30012 = (i__30010 + (1));
i__30010 = G__30012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30011),cljs_intro$web$build_dynamic_data_$_iter__30006_$_iter__30008.call(null,cljs.core.chunk_rest.call(null,s__30009__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30011),null);
}
} else {
var sy = cljs.core.first.call(null,s__30009__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__30006_$_iter__30008.call(null,cljs.core.rest.call(null,s__30009__$2)));
}
} else {
return null;
}
break;
}
});})(s__30007__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
,null,null));
});})(s__30007__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
;
var fs__16894__auto__ = cljs.core.seq.call(null,iterys__16893__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__16894__auto__){
return cljs.core.concat.call(null,fs__16894__auto__,cljs_intro$web$build_dynamic_data_$_iter__30006.call(null,cljs.core.rest.call(null,s__30007__$1)));
} else {
var G__30013 = cljs.core.rest.call(null,s__30007__$1);
s__30007__$1 = G__30013;
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
return iter__16897__auto__.call(null,cljs.core.range.call(null,(6)));
});
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__30014){
var map__30017 = p__30014;
var map__30017__$1 = ((cljs.core.seq_QMARK_.call(null,map__30017))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);
var alpha = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var closed = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var data = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var y = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__30017,map__30017__$1,alpha,closed,data,y,x){
return (function (p){
var vec__30018 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__30018,(0),null);
var rpy = cljs.core.nth.call(null,vec__30018,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__30017,map__30017__$1,alpha,closed,data,y,x))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__19080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19080__auto__){
return (function (){
var f__19081__auto__ = (function (){var switch__19059__auto__ = ((function (c__19080__auto__){
return (function (state_30060){
var state_val_30061 = (state_30060[(1)]);
if((state_val_30061 === (4))){
var inst_30050 = (state_30060[(2)]);
var inst_30051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30052 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_30053 = (new cljs.core.PersistentVector(null,2,(5),inst_30051,inst_30052,null));
var inst_30054 = cljs.core.async.put_BANG_.call(null,chan_out,inst_30053);
var inst_30055 = cljs.core.async.timeout.call(null,period);
var inst_30047 = inst_30055;
var state_30060__$1 = (function (){var statearr_30062 = state_30060;
(statearr_30062[(7)] = inst_30050);

(statearr_30062[(8)] = inst_30047);

(statearr_30062[(9)] = inst_30054);

return statearr_30062;
})();
var statearr_30063_30073 = state_30060__$1;
(statearr_30063_30073[(2)] = null);

(statearr_30063_30073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30061 === (3))){
var inst_30058 = (state_30060[(2)]);
var state_30060__$1 = state_30060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30060__$1,inst_30058);
} else {
if((state_val_30061 === (2))){
var inst_30047 = (state_30060[(8)]);
var state_30060__$1 = state_30060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30060__$1,(4),inst_30047);
} else {
if((state_val_30061 === (1))){
var inst_30046 = cljs.core.async.timeout.call(null,period);
var inst_30047 = inst_30046;
var state_30060__$1 = (function (){var statearr_30064 = state_30060;
(statearr_30064[(8)] = inst_30047);

return statearr_30064;
})();
var statearr_30065_30074 = state_30060__$1;
(statearr_30065_30074[(2)] = null);

(statearr_30065_30074[(1)] = (2));


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
var statearr_30069 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30069[(0)] = cljs_intro$web$listen_timer_$_state_machine__19060__auto__);

(statearr_30069[(1)] = (1));

return statearr_30069;
});
var cljs_intro$web$listen_timer_$_state_machine__19060__auto____1 = (function (state_30060){
while(true){
var ret_value__19061__auto__ = (function (){try{while(true){
var result__19062__auto__ = switch__19059__auto__.call(null,state_30060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19062__auto__;
}
break;
}
}catch (e30070){if((e30070 instanceof Object)){
var ex__19063__auto__ = e30070;
var statearr_30071_30075 = state_30060;
(statearr_30071_30075[(5)] = ex__19063__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30076 = state_30060;
state_30060 = G__30076;
continue;
} else {
return ret_value__19061__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__19060__auto__ = function(state_30060){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__19060__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__19060__auto____1.call(this,state_30060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__19060__auto____0;
cljs_intro$web$listen_timer_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__19060__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__19060__auto__;
})()
;})(switch__19059__auto__,c__19080__auto__))
})();
var state__19082__auto__ = (function (){var statearr_30072 = f__19081__auto__.call(null);
(statearr_30072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19080__auto__);

return statearr_30072;
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
cljs_intro.web._STAR_alpha_STAR_ = cljs_intro.g2d.deg__GT_rad.call(null,(127));
cljs_intro.web._STAR_apperture_STAR_ = cljs_intro.g2d.deg__GT_rad.call(null,137.0);
cljs_intro.web.init_game_state = (function cljs_intro$web$init_game_state(dist){
var target = document.getElementById("target");
var context = target.getContext("2d");
var img = (new Image());
var width = target.width;
var height = target.height;
var r_geom = cljs_intro.web.build_dynamic_data.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"dist","dist",-1401837144),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612),new cljs.core.Keyword(null,"algo","algo",1472048382),new cljs.core.Keyword(null,"height","height",1025178622)],[(180),dist,cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom),width,null,null,cljs_intro.web._STAR_apperture_STAR_,cljs_intro.web._STAR_alpha_STAR_,context,(320),target,r_geom,new cljs.core.Keyword(null,"global","global",93595047),height]);
});
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__30077){
var map__30080 = p__30077;
var map__30080__$1 = ((cljs.core.seq_QMARK_.call(null,map__30080))?cljs.core.apply.call(null,cljs.core.hash_map,map__30080):map__30080);
var state = map__30080__$1;
var x = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var algo = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var eps = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var apperture = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var context = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var alpha = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var vec__30081 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__30081,(0),null);
var eps__$1 = cljs.core.nth.call(null,vec__30081,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__30081,(2),null);
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var erase_color = "grey";
cljs_intro.draw.draw_rect.call(null,context,(0),(0),width,height,erase_color);

cljs_intro.draw.draw_geometry.call(null,context,drawdata);

cljs_intro.draw.draw_segments.call(null,context,segs);

cljs_intro.draw.draw_hull_as_surfaces.call(null,context,hull);

if(cljs.core._EQ_.call(null,algo,new cljs.core.Keyword(null,"pie","pie",1530441672))){
cljs_intro.draw.draw_pie.call(null,context,x,y,dist,cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(alpha - apperture)),cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(alpha + apperture)));
} else {
if(cljs.core._EQ_.call(null,algo,new cljs.core.Keyword(null,"spot","spot",-1706962147))){
cljs_intro.draw.draw_circle.call(null,context,x,y,dist);
} else {
}
}

return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
});
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__30082,dynamic,alpha){
var vec__30088 = p__30082;
var drawdata = cljs.core.nth.call(null,vec__30088,(0),null);
var eps = cljs.core.nth.call(null,vec__30088,(1),null);
var allsegs = cljs.core.nth.call(null,vec__30088,(2),null);
return cljs.core.reduce.call(null,((function (vec__30088,drawdata,eps,allsegs){
return (function (p__30089,p__30090){
var vec__30091 = p__30089;
var adraw = cljs.core.nth.call(null,vec__30091,(0),null);
var aeps = cljs.core.nth.call(null,vec__30091,(1),null);
var asegs = cljs.core.nth.call(null,vec__30091,(2),null);
var vec__30092 = p__30090;
var e = cljs.core.nth.call(null,vec__30092,(0),null);
var s = cljs.core.nth.call(null,vec__30092,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__30088,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.offsetY));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY);
});
cljs_intro.web.change_algo = (function cljs_intro$web$change_algo(k,ev,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"algo","algo",1472048382),k));
});
cljs_intro.web.get_compute_visibility_hull_function = (function cljs_intro$web$get_compute_visibility_hull_function(p__30093){
var map__30095 = p__30093;
var map__30095__$1 = ((cljs.core.seq_QMARK_.call(null,map__30095))?cljs.core.apply.call(null,cljs.core.hash_map,map__30095):map__30095);
var apperture = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var alpha = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var algo = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var dist = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var y = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var o = cljs_intro.g2d.vec2d.call(null,x,y);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"global","global",93595047),algo)){
return cljs.core.partial.call(null,cljs_intro.global.compute_visibility_hull,o);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"spot","spot",-1706962147),algo)){
return cljs.core.partial.call(null,cljs_intro.spot.compute_visibility_hull,o,dist);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pie","pie",1530441672),algo)){
return cljs.core.partial.call(null,cljs_intro.pie.compute_visibility_hull,alpha,apperture,o,dist);
} else {
return null;
}
}
}
});
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(p__30096){
var map__30099 = p__30096;
var map__30099__$1 = ((cljs.core.seq_QMARK_.call(null,map__30099))?cljs.core.apply.call(null,cljs.core.hash_map,map__30099):map__30099);
var state = map__30099__$1;
var apperture = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var alpha = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var dist = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var r_geom = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var y = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var static$ = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var data = static$;
var visibility_fn = cljs_intro.web.get_compute_visibility_hull_function.call(null,state);
var vec__30100 = visibility_fn.call(null,data);
var segs = cljs.core.nth.call(null,vec__30100,(0),null);
var hull = cljs.core.nth.call(null,vec__30100,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),segs,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),data);
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__30136 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__30136,(0),null);
var eps = cljs.core.nth.call(null,vec__30136,(1),null);
var allsegs = cljs.core.nth.call(null,vec__30136,(2),null);
var data = vec__30136;
var chan_out = cljs.core.async.chan.call(null);
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_global"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_spot"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"spot","spot",-1706962147)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_pie"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"pie","pie",1530441672)));

var c__19080__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19080__auto__,chan_out,target,context,width,height,vec__30136,drawdata,eps,allsegs,data){
return (function (){
var f__19081__auto__ = (function (){var switch__19059__auto__ = ((function (c__19080__auto__,chan_out,target,context,width,height,vec__30136,drawdata,eps,allsegs,data){
return (function (state_30158){
var state_val_30159 = (state_30158[(1)]);
if((state_val_30159 === (4))){
var inst_30144 = (state_30158[(7)]);
var inst_30148 = (state_30158[(2)]);
var inst_30149 = cljs.core.nth.call(null,inst_30148,(0),null);
var inst_30150 = cljs.core.nth.call(null,inst_30148,(1),null);
var inst_30151 = inst_30150.call(null,inst_30149,inst_30144);
var inst_30152 = cljs.core.partial.call(null,cljs_intro.web.render_game,inst_30151);
var inst_30153 = window.requestAnimationFrame(inst_30152);
var inst_30143 = true;
var inst_30144__$1 = inst_30151;
var state_30158__$1 = (function (){var statearr_30160 = state_30158;
(statearr_30160[(7)] = inst_30144__$1);

(statearr_30160[(8)] = inst_30143);

(statearr_30160[(9)] = inst_30153);

return statearr_30160;
})();
var statearr_30161_30171 = state_30158__$1;
(statearr_30161_30171[(2)] = null);

(statearr_30161_30171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (3))){
var inst_30156 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30158__$1,inst_30156);
} else {
if((state_val_30159 === (2))){
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30158__$1,(4),chan_out);
} else {
if((state_val_30159 === (1))){
var inst_30137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30138 = cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047));
var inst_30139 = [new cljs.core.Keyword(null,"click","click",1912301393),inst_30138];
var inst_30140 = (new cljs.core.PersistentVector(null,2,(5),inst_30137,inst_30139,null));
var inst_30141 = cljs.core.async.put_BANG_.call(null,chan_out,inst_30140);
var inst_30142 = cljs_intro.web.init_game_state.call(null,(100));
var inst_30143 = true;
var inst_30144 = inst_30142;
var state_30158__$1 = (function (){var statearr_30162 = state_30158;
(statearr_30162[(7)] = inst_30144);

(statearr_30162[(10)] = inst_30141);

(statearr_30162[(8)] = inst_30143);

return statearr_30162;
})();
var statearr_30163_30172 = state_30158__$1;
(statearr_30163_30172[(2)] = null);

(statearr_30163_30172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19080__auto__,chan_out,target,context,width,height,vec__30136,drawdata,eps,allsegs,data))
;
return ((function (switch__19059__auto__,c__19080__auto__,chan_out,target,context,width,height,vec__30136,drawdata,eps,allsegs,data){
return (function() {
var cljs_intro$web$init_$_state_machine__19060__auto__ = null;
var cljs_intro$web$init_$_state_machine__19060__auto____0 = (function (){
var statearr_30167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30167[(0)] = cljs_intro$web$init_$_state_machine__19060__auto__);

(statearr_30167[(1)] = (1));

return statearr_30167;
});
var cljs_intro$web$init_$_state_machine__19060__auto____1 = (function (state_30158){
while(true){
var ret_value__19061__auto__ = (function (){try{while(true){
var result__19062__auto__ = switch__19059__auto__.call(null,state_30158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19062__auto__;
}
break;
}
}catch (e30168){if((e30168 instanceof Object)){
var ex__19063__auto__ = e30168;
var statearr_30169_30173 = state_30158;
(statearr_30169_30173[(5)] = ex__19063__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30174 = state_30158;
state_30158 = G__30174;
continue;
} else {
return ret_value__19061__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__19060__auto__ = function(state_30158){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__19060__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__19060__auto____1.call(this,state_30158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__19060__auto____0;
cljs_intro$web$init_$_state_machine__19060__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__19060__auto____1;
return cljs_intro$web$init_$_state_machine__19060__auto__;
})()
;})(switch__19059__auto__,c__19080__auto__,chan_out,target,context,width,height,vec__30136,drawdata,eps,allsegs,data))
})();
var state__19082__auto__ = (function (){var statearr_30170 = f__19081__auto__.call(null);
(statearr_30170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19080__auto__);

return statearr_30170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19082__auto__);
});})(c__19080__auto__,chan_out,target,context,width,height,vec__30136,drawdata,eps,allsegs,data))
);

return c__19080__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map