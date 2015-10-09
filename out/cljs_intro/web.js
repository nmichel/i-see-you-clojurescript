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
cljs_intro.web.geom = cljs_intro.data.produce_block_soup.call(null);
cljs_intro.web.build_dynamic_data = (function cljs_intro$web$build_dynamic_data(){
var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(-20),(20),(-20),(20),(20),(-20),(20)], null);
var iter__5087__auto__ = ((function (data){
return (function cljs_intro$web$build_dynamic_data_$_iter__15794(s__15795){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__15795__$1 = s__15795;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15795__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__5083__auto__ = ((function (s__15795__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__15794_$_iter__15796(s__15797){
return (new cljs.core.LazySeq(null,((function (s__15795__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function (){
var s__15797__$1 = s__15797;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15797__$1);
if(temp__4126__auto____$1){
var s__15797__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15797__$2)){
var c__5085__auto__ = cljs.core.chunk_first.call(null,s__15797__$2);
var size__5086__auto__ = cljs.core.count.call(null,c__5085__auto__);
var b__15799 = cljs.core.chunk_buffer.call(null,size__5086__auto__);
if((function (){var i__15798 = (0);
while(true){
if((i__15798 < size__5086__auto__)){
var sy = cljs.core._nth.call(null,c__5085__auto__,i__15798);
cljs.core.chunk_append.call(null,b__15799,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__15800 = (i__15798 + (1));
i__15798 = G__15800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15799),cljs_intro$web$build_dynamic_data_$_iter__15794_$_iter__15796.call(null,cljs.core.chunk_rest.call(null,s__15797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15799),null);
}
} else {
var sy = cljs.core.first.call(null,s__15797__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__15794_$_iter__15796.call(null,cljs.core.rest.call(null,s__15797__$2)));
}
} else {
return null;
}
break;
}
});})(s__15795__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
,null,null));
});})(s__15795__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
;
var fs__5084__auto__ = cljs.core.seq.call(null,iterys__5083__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5084__auto__){
return cljs.core.concat.call(null,fs__5084__auto__,cljs_intro$web$build_dynamic_data_$_iter__15794.call(null,cljs.core.rest.call(null,s__15795__$1)));
} else {
var G__15801 = cljs.core.rest.call(null,s__15795__$1);
s__15795__$1 = G__15801;
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
return iter__5087__auto__.call(null,cljs.core.range.call(null,(6)));
});
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__15802){
var map__15805 = p__15802;
var map__15805__$1 = ((cljs.core.seq_QMARK_.call(null,map__15805))?cljs.core.apply.call(null,cljs.core.hash_map,map__15805):map__15805);
var alpha = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var closed = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var data = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var y = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__15805,map__15805__$1,alpha,closed,data,y,x){
return (function (p){
var vec__15806 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__15806,(0),null);
var rpy = cljs.core.nth.call(null,vec__15806,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__15805,map__15805__$1,alpha,closed,data,y,x))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__6625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6625__auto__){
return (function (){
var f__6626__auto__ = (function (){var switch__6604__auto__ = ((function (c__6625__auto__){
return (function (state_15848){
var state_val_15849 = (state_15848[(1)]);
if((state_val_15849 === (4))){
var inst_15838 = (state_15848[(2)]);
var inst_15839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15840 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_15841 = (new cljs.core.PersistentVector(null,2,(5),inst_15839,inst_15840,null));
var inst_15842 = cljs.core.async.put_BANG_.call(null,chan_out,inst_15841);
var inst_15843 = cljs.core.async.timeout.call(null,period);
var inst_15835 = inst_15843;
var state_15848__$1 = (function (){var statearr_15850 = state_15848;
(statearr_15850[(7)] = inst_15838);

(statearr_15850[(8)] = inst_15842);

(statearr_15850[(9)] = inst_15835);

return statearr_15850;
})();
var statearr_15851_15861 = state_15848__$1;
(statearr_15851_15861[(2)] = null);

(statearr_15851_15861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (3))){
var inst_15846 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15848__$1,inst_15846);
} else {
if((state_val_15849 === (2))){
var inst_15835 = (state_15848[(9)]);
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15848__$1,(4),inst_15835);
} else {
if((state_val_15849 === (1))){
var inst_15834 = cljs.core.async.timeout.call(null,period);
var inst_15835 = inst_15834;
var state_15848__$1 = (function (){var statearr_15852 = state_15848;
(statearr_15852[(9)] = inst_15835);

return statearr_15852;
})();
var statearr_15853_15862 = state_15848__$1;
(statearr_15853_15862[(2)] = null);

(statearr_15853_15862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6625__auto__))
;
return ((function (switch__6604__auto__,c__6625__auto__){
return (function() {
var cljs_intro$web$listen_timer_$_state_machine__6605__auto__ = null;
var cljs_intro$web$listen_timer_$_state_machine__6605__auto____0 = (function (){
var statearr_15857 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15857[(0)] = cljs_intro$web$listen_timer_$_state_machine__6605__auto__);

(statearr_15857[(1)] = (1));

return statearr_15857;
});
var cljs_intro$web$listen_timer_$_state_machine__6605__auto____1 = (function (state_15848){
while(true){
var ret_value__6606__auto__ = (function (){try{while(true){
var result__6607__auto__ = switch__6604__auto__.call(null,state_15848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6607__auto__;
}
break;
}
}catch (e15858){if((e15858 instanceof Object)){
var ex__6608__auto__ = e15858;
var statearr_15859_15863 = state_15848;
(statearr_15859_15863[(5)] = ex__6608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15864 = state_15848;
state_15848 = G__15864;
continue;
} else {
return ret_value__6606__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__6605__auto__ = function(state_15848){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__6605__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__6605__auto____1.call(this,state_15848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__6605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__6605__auto____0;
cljs_intro$web$listen_timer_$_state_machine__6605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__6605__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__6605__auto__;
})()
;})(switch__6604__auto__,c__6625__auto__))
})();
var state__6627__auto__ = (function (){var statearr_15860 = f__6626__auto__.call(null);
(statearr_15860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto__);

return statearr_15860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
});})(c__6625__auto__))
);

return c__6625__auto__;
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
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__15865){
var map__15868 = p__15865;
var map__15868__$1 = ((cljs.core.seq_QMARK_.call(null,map__15868))?cljs.core.apply.call(null,cljs.core.hash_map,map__15868):map__15868);
var state = map__15868__$1;
var x = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var algo = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var eps = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var apperture = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var context = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var alpha = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var vec__15869 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__15869,(0),null);
var eps__$1 = cljs.core.nth.call(null,vec__15869,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__15869,(2),null);
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
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__15870,dynamic,alpha){
var vec__15876 = p__15870;
var drawdata = cljs.core.nth.call(null,vec__15876,(0),null);
var eps = cljs.core.nth.call(null,vec__15876,(1),null);
var allsegs = cljs.core.nth.call(null,vec__15876,(2),null);
return cljs.core.reduce.call(null,((function (vec__15876,drawdata,eps,allsegs){
return (function (p__15877,p__15878){
var vec__15879 = p__15877;
var adraw = cljs.core.nth.call(null,vec__15879,(0),null);
var aeps = cljs.core.nth.call(null,vec__15879,(1),null);
var asegs = cljs.core.nth.call(null,vec__15879,(2),null);
var vec__15880 = p__15878;
var e = cljs.core.nth.call(null,vec__15880,(0),null);
var s = cljs.core.nth.call(null,vec__15880,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__15876,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.offsetY));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY);
});
cljs_intro.web.change_algo = (function cljs_intro$web$change_algo(k,ev,state){
var algo_15881 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"global","global",93595047),algo_15881)){
dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"spot","spot",-1706962147),algo_15881)){
dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pie","pie",1530441672),algo_15881)){
dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");
} else {
}
}
}

return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"algo","algo",1472048382),k));
});
cljs_intro.web.change_radius = (function cljs_intro$web$change_radius(radius,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dist","dist",-1401837144),radius.newValue));
});
cljs_intro.web.change_angle = (function cljs_intro$web$change_angle(angle,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),cljs_intro.g2d.deg__GT_rad.call(null,(angle.newValue - (180)))));
});
cljs_intro.web.change_apperture = (function cljs_intro$web$change_apperture(apperture,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"apperture","apperture",-2146397483),cljs_intro.g2d.deg__GT_rad.call(null,apperture.newValue)));
});
cljs_intro.web.get_compute_visibility_hull_function = (function cljs_intro$web$get_compute_visibility_hull_function(p__15882){
var map__15884 = p__15882;
var map__15884__$1 = ((cljs.core.seq_QMARK_.call(null,map__15884))?cljs.core.apply.call(null,cljs.core.hash_map,map__15884):map__15884);
var apperture = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var alpha = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var algo = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var dist = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var y = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"x","x",2099068185));
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
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(p__15885){
var map__15888 = p__15885;
var map__15888__$1 = ((cljs.core.seq_QMARK_.call(null,map__15888))?cljs.core.apply.call(null,cljs.core.hash_map,map__15888):map__15888);
var state = map__15888__$1;
var apperture = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var alpha = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var dist = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var r_geom = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var y = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var static$ = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var data = static$;
var visibility_fn = cljs_intro.web.get_compute_visibility_hull_function.call(null,state);
var vec__15889 = visibility_fn.call(null,data);
var segs = cljs.core.nth.call(null,vec__15889,(0),null);
var hull = cljs.core.nth.call(null,vec__15889,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),segs,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),data);
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__15925 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__15925,(0),null);
var eps = cljs.core.nth.call(null,vec__15925,(1),null);
var allsegs = cljs.core.nth.call(null,vec__15925,(2),null);
var data = vec__15925;
var chan_out = cljs.core.async.chan.call(null);
var opts = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tooltip_position","tooltip_position",-801561859),"bottom"], null));
var radius = (new Slider("#spot_radius_slider",opts));
var angle = (new Slider("#pie_angle_slider",opts));
var apperture = (new Slider("#pie_apperture_slider",opts));
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_global"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_spot"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"spot","spot",-1706962147)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_pie"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"pie","pie",1530441672)));

radius.on("change",((function (chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data){
return (function (ev){
return cljs.core.async.put_BANG_.call(null,chan_out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,cljs_intro.web.change_radius], null));
});})(chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data))
);

angle.on("change",((function (chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data){
return (function (ev){
return cljs.core.async.put_BANG_.call(null,chan_out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,cljs_intro.web.change_angle], null));
});})(chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data))
);

apperture.on("change",((function (chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data){
return (function (ev){
return cljs.core.async.put_BANG_.call(null,chan_out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,cljs_intro.web.change_apperture], null));
});})(chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data))
);

var c__6625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6625__auto__,chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data){
return (function (){
var f__6626__auto__ = (function (){var switch__6604__auto__ = ((function (c__6625__auto__,chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data){
return (function (state_15947){
var state_val_15948 = (state_15947[(1)]);
if((state_val_15948 === (4))){
var inst_15933 = (state_15947[(7)]);
var inst_15937 = (state_15947[(2)]);
var inst_15938 = cljs.core.nth.call(null,inst_15937,(0),null);
var inst_15939 = cljs.core.nth.call(null,inst_15937,(1),null);
var inst_15940 = inst_15939.call(null,inst_15938,inst_15933);
var inst_15941 = cljs.core.partial.call(null,cljs_intro.web.render_game,inst_15940);
var inst_15942 = window.requestAnimationFrame(inst_15941);
var inst_15932 = true;
var inst_15933__$1 = inst_15940;
var state_15947__$1 = (function (){var statearr_15949 = state_15947;
(statearr_15949[(7)] = inst_15933__$1);

(statearr_15949[(8)] = inst_15942);

(statearr_15949[(9)] = inst_15932);

return statearr_15949;
})();
var statearr_15950_15960 = state_15947__$1;
(statearr_15950_15960[(2)] = null);

(statearr_15950_15960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (3))){
var inst_15945 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15947__$1,inst_15945);
} else {
if((state_val_15948 === (2))){
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15947__$1,(4),chan_out);
} else {
if((state_val_15948 === (1))){
var inst_15926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15927 = cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047));
var inst_15928 = [new cljs.core.Keyword(null,"click","click",1912301393),inst_15927];
var inst_15929 = (new cljs.core.PersistentVector(null,2,(5),inst_15926,inst_15928,null));
var inst_15930 = cljs.core.async.put_BANG_.call(null,chan_out,inst_15929);
var inst_15931 = cljs_intro.web.init_game_state.call(null,(100));
var inst_15932 = true;
var inst_15933 = inst_15931;
var state_15947__$1 = (function (){var statearr_15951 = state_15947;
(statearr_15951[(7)] = inst_15933);

(statearr_15951[(10)] = inst_15930);

(statearr_15951[(9)] = inst_15932);

return statearr_15951;
})();
var statearr_15952_15961 = state_15947__$1;
(statearr_15952_15961[(2)] = null);

(statearr_15952_15961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6625__auto__,chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data))
;
return ((function (switch__6604__auto__,c__6625__auto__,chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data){
return (function() {
var cljs_intro$web$init_$_state_machine__6605__auto__ = null;
var cljs_intro$web$init_$_state_machine__6605__auto____0 = (function (){
var statearr_15956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15956[(0)] = cljs_intro$web$init_$_state_machine__6605__auto__);

(statearr_15956[(1)] = (1));

return statearr_15956;
});
var cljs_intro$web$init_$_state_machine__6605__auto____1 = (function (state_15947){
while(true){
var ret_value__6606__auto__ = (function (){try{while(true){
var result__6607__auto__ = switch__6604__auto__.call(null,state_15947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6607__auto__;
}
break;
}
}catch (e15957){if((e15957 instanceof Object)){
var ex__6608__auto__ = e15957;
var statearr_15958_15962 = state_15947;
(statearr_15958_15962[(5)] = ex__6608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15963 = state_15947;
state_15947 = G__15963;
continue;
} else {
return ret_value__6606__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__6605__auto__ = function(state_15947){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__6605__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__6605__auto____1.call(this,state_15947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__6605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__6605__auto____0;
cljs_intro$web$init_$_state_machine__6605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__6605__auto____1;
return cljs_intro$web$init_$_state_machine__6605__auto__;
})()
;})(switch__6604__auto__,c__6625__auto__,chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data))
})();
var state__6627__auto__ = (function (){var statearr_15959 = f__6626__auto__.call(null);
(statearr_15959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto__);

return statearr_15959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
});})(c__6625__auto__,chan_out,opts,radius,angle,apperture,target,context,width,height,vec__15925,drawdata,eps,allsegs,data))
);

return c__6625__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map