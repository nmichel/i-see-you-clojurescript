// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.web');
goog.require('cljs.core');
goog.require('cljs_intro.draw');
goog.require('cljs_intro.spot');
goog.require('cljs_intro.pie');
goog.require('cljs_intro.data');
goog.require('cljs_intro.g2d');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('cljs_intro.global');
goog.require('cljs_intro.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_intro.web.geom = cljs_intro.data.produce_block_soup.call(null);
cljs_intro.web.build_dynamic_data = (function cljs_intro$web$build_dynamic_data(){
var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(-20),(20),(-20),(20),(20),(-20),(20)], null);
var iter__17116__auto__ = ((function (data){
return (function cljs_intro$web$build_dynamic_data_$_iter__35086(s__35087){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__35087__$1 = s__35087;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35087__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17112__auto__ = ((function (s__35087__$1,sx,xs__4977__auto__,temp__4425__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__35086_$_iter__35088(s__35089){
return (new cljs.core.LazySeq(null,((function (s__35087__$1,sx,xs__4977__auto__,temp__4425__auto__,data){
return (function (){
var s__35089__$1 = s__35089;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__35089__$1);
if(temp__4425__auto____$1){
var s__35089__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35089__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__35089__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__35091 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__35090 = (0);
while(true){
if((i__35090 < size__17115__auto__)){
var sy = cljs.core._nth.call(null,c__17114__auto__,i__35090);
cljs.core.chunk_append.call(null,b__35091,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__35092 = (i__35090 + (1));
i__35090 = G__35092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35091),cljs_intro$web$build_dynamic_data_$_iter__35086_$_iter__35088.call(null,cljs.core.chunk_rest.call(null,s__35089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35091),null);
}
} else {
var sy = cljs.core.first.call(null,s__35089__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__35086_$_iter__35088.call(null,cljs.core.rest.call(null,s__35089__$2)));
}
} else {
return null;
}
break;
}
});})(s__35087__$1,sx,xs__4977__auto__,temp__4425__auto__,data))
,null,null));
});})(s__35087__$1,sx,xs__4977__auto__,temp__4425__auto__,data))
;
var fs__17113__auto__ = cljs.core.seq.call(null,iterys__17112__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__17113__auto__){
return cljs.core.concat.call(null,fs__17113__auto__,cljs_intro$web$build_dynamic_data_$_iter__35086.call(null,cljs.core.rest.call(null,s__35087__$1)));
} else {
var G__35093 = cljs.core.rest.call(null,s__35087__$1);
s__35087__$1 = G__35093;
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
return iter__17116__auto__.call(null,cljs.core.range.call(null,(6)));
});
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__35094){
var map__35098 = p__35094;
var map__35098__$1 = ((((!((map__35098 == null)))?((((map__35098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35098):map__35098);
var x = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var data = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var closed = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var alpha = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__35098,map__35098__$1,x,y,data,closed,alpha){
return (function (p){
var vec__35100 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__35100,(0),null);
var rpy = cljs.core.nth.call(null,vec__35100,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__35098,map__35098__$1,x,y,data,closed,alpha))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__){
return (function (state_35142){
var state_val_35143 = (state_35142[(1)]);
if((state_val_35143 === (1))){
var inst_35128 = cljs.core.async.timeout.call(null,period);
var inst_35129 = inst_35128;
var state_35142__$1 = (function (){var statearr_35144 = state_35142;
(statearr_35144[(7)] = inst_35129);

return statearr_35144;
})();
var statearr_35145_35155 = state_35142__$1;
(statearr_35145_35155[(2)] = null);

(statearr_35145_35155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (2))){
var inst_35129 = (state_35142[(7)]);
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35142__$1,(4),inst_35129);
} else {
if((state_val_35143 === (3))){
var inst_35140 = (state_35142[(2)]);
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35142__$1,inst_35140);
} else {
if((state_val_35143 === (4))){
var inst_35132 = (state_35142[(2)]);
var inst_35133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35134 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_35135 = (new cljs.core.PersistentVector(null,2,(5),inst_35133,inst_35134,null));
var inst_35136 = cljs.core.async.put_BANG_.call(null,chan_out,inst_35135);
var inst_35137 = cljs.core.async.timeout.call(null,period);
var inst_35129 = inst_35137;
var state_35142__$1 = (function (){var statearr_35146 = state_35142;
(statearr_35146[(7)] = inst_35129);

(statearr_35146[(8)] = inst_35132);

(statearr_35146[(9)] = inst_35136);

return statearr_35146;
})();
var statearr_35147_35156 = state_35142__$1;
(statearr_35147_35156[(2)] = null);

(statearr_35147_35156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19366__auto__))
;
return ((function (switch__19345__auto__,c__19366__auto__){
return (function() {
var cljs_intro$web$listen_timer_$_state_machine__19346__auto__ = null;
var cljs_intro$web$listen_timer_$_state_machine__19346__auto____0 = (function (){
var statearr_35151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35151[(0)] = cljs_intro$web$listen_timer_$_state_machine__19346__auto__);

(statearr_35151[(1)] = (1));

return statearr_35151;
});
var cljs_intro$web$listen_timer_$_state_machine__19346__auto____1 = (function (state_35142){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_35142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e35152){if((e35152 instanceof Object)){
var ex__19349__auto__ = e35152;
var statearr_35153_35157 = state_35142;
(statearr_35153_35157[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35158 = state_35142;
state_35142 = G__35158;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__19346__auto__ = function(state_35142){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__19346__auto____1.call(this,state_35142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__19346__auto____0;
cljs_intro$web$listen_timer_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__19346__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_35154 = f__19367__auto__.call(null);
(statearr_35154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_35154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__))
);

return c__19366__auto__;
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
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__35159){
var map__35163 = p__35159;
var map__35163__$1 = ((((!((map__35163 == null)))?((((map__35163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35163):map__35163);
var state = map__35163__$1;
var x = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var algo = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var eps = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var apperture = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var context = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var alpha = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var vec__35165 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__35165,(0),null);
var eps__$1 = cljs.core.nth.call(null,vec__35165,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__35165,(2),null);
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
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__35166,dynamic,alpha){
var vec__35172 = p__35166;
var drawdata = cljs.core.nth.call(null,vec__35172,(0),null);
var eps = cljs.core.nth.call(null,vec__35172,(1),null);
var allsegs = cljs.core.nth.call(null,vec__35172,(2),null);
return cljs.core.reduce.call(null,((function (vec__35172,drawdata,eps,allsegs){
return (function (p__35173,p__35174){
var vec__35175 = p__35173;
var adraw = cljs.core.nth.call(null,vec__35175,(0),null);
var aeps = cljs.core.nth.call(null,vec__35175,(1),null);
var asegs = cljs.core.nth.call(null,vec__35175,(2),null);
var vec__35176 = p__35174;
var e = cljs.core.nth.call(null,vec__35176,(0),null);
var s = cljs.core.nth.call(null,vec__35176,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__35172,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_visibility_hull;
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.offsetY));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY);
});
cljs_intro.web.change_algo = (function cljs_intro$web$change_algo(k,ev,state){
var algo_35177 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"global","global",93595047),algo_35177)){
dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"spot","spot",-1706962147),algo_35177)){
dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pie","pie",1530441672),algo_35177)){
dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");
} else {
}
}
}

return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"algo","algo",1472048382),k));
});
cljs_intro.web.change_radius = (function cljs_intro$web$change_radius(radius,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dist","dist",-1401837144),radius));
});
cljs_intro.web.change_angle = (function cljs_intro$web$change_angle(angle,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),cljs_intro.g2d.deg__GT_rad.call(null,(angle - (180)))));
});
cljs_intro.web.change_apperture = (function cljs_intro$web$change_apperture(apperture,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"apperture","apperture",-2146397483),cljs_intro.g2d.deg__GT_rad.call(null,apperture)));
});
cljs_intro.web.get_compute_visibility_hull_function = (function cljs_intro$web$get_compute_visibility_hull_function(p__35178){
var map__35181 = p__35178;
var map__35181__$1 = ((((!((map__35181 == null)))?((((map__35181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35181):map__35181);
var x = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dist = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var algo = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var alpha = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var apperture = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
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
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(p__35183){
var map__35187 = p__35183;
var map__35187__$1 = ((((!((map__35187 == null)))?((((map__35187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35187):map__35187);
var state = map__35187__$1;
var static$ = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var x = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r_geom = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var dist = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var alpha = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var apperture = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var data = static$;
var visibility_fn = cljs_intro.web.get_compute_visibility_hull_function.call(null,state);
var vec__35189 = visibility_fn.call(null,data);
var segs = cljs.core.nth.call(null,vec__35189,(0),null);
var hull = cljs.core.nth.call(null,vec__35189,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),segs,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),data);
});
cljs_intro.web.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"spot_radius_slider",new cljs.core.Keyword(null,"value","value",305978217),(50),new cljs.core.Keyword(null,"min","min",444991522),(10),new cljs.core.Keyword(null,"max","max",61366548),(200)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pie_angle_slider",new cljs.core.Keyword(null,"value","value",305978217),(10),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(359)], null),new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pie_apperture_slider",new cljs.core.Keyword(null,"value","value",305978217),(30),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(179)], null),new cljs.core.Keyword(null,"chan","chan",-2103021695),cljs.core.async.chan.call(null)], null));
cljs_intro.web.comp_fake = (function cljs_intro$web$comp_fake(){
return (function (){
var map__35198 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__35198__$1 = ((((!((map__35198 == null)))?((((map__35198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35198):map__35198);
var map__35199 = cljs.core.get.call(null,map__35198__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var map__35199__$1 = ((((!((map__35199 == null)))?((((map__35199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35199):map__35199);
var rv = cljs.core.get.call(null,map__35199__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__35200 = cljs.core.get.call(null,map__35198__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__35200__$1 = ((((!((map__35200 == null)))?((((map__35200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35200):map__35200);
var av = cljs.core.get.call(null,map__35200__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__35201 = cljs.core.get.call(null,map__35198__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var map__35201__$1 = ((((!((map__35201 == null)))?((((map__35201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35201):map__35201);
var pv = cljs.core.get.call(null,map__35201__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c = cljs.core.get.call(null,map__35198__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rv,cljs_intro.web.change_radius], null));

cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [av,cljs_intro.web.change_angle], null));

cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pv,cljs_intro.web.change_apperture], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
});
});
cljs_intro.web.slider_fn = (function cljs_intro$web$slider_fn(name){
return (function() {
var G__35206 = null;
var G__35206__0 = (function (){
return name.call(null,cljs.core.deref.call(null,cljs_intro.web.state));
});
var G__35206__2 = (function (k,v){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,k], null),v);
});
G__35206 = function(k,v){
switch(arguments.length){
case 0:
return G__35206__0.call(this);
case 2:
return G__35206__2.call(this,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35206.cljs$core$IFn$_invoke$arity$0 = G__35206__0;
G__35206.cljs$core$IFn$_invoke$arity$2 = G__35206__2;
return G__35206;
})()
});
cljs_intro.web.slider = (function cljs_intro$web$slider(f){
var slider__$1 = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (slider__$1){
return (function (this$){
var opts = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tooltip_position","tooltip_position",-801561859),"bottom"], null));
var s = (new Slider(reagent.core.dom_node.call(null,this$),opts));
var map__35214 = f.call(null);
var map__35214__$1 = ((((!((map__35214 == null)))?((((map__35214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35214):map__35214);
var value = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__35216_35220 = s;
G__35216_35220.setValue(value);

G__35216_35220.setAttribute("min",min);

G__35216_35220.setAttribute("max",max);


cljs.core.reset_BANG_.call(null,slider__$1,s);

return s.on("change",((function (opts,s,map__35214,map__35214__$1,value,min,max,slider__$1){
return (function (p1__35207_SHARP_){
return f.call(null,new cljs.core.Keyword(null,"value","value",305978217),p1__35207_SHARP_.newValue);
});})(opts,s,map__35214,map__35214__$1,value,min,max,slider__$1))
);
});})(slider__$1))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (slider__$1){
return (function (){
var s = cljs.core.deref.call(null,slider__$1);
var map__35217 = f.call(null);
var map__35217__$1 = ((((!((map__35217 == null)))?((((map__35217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35217):map__35217);
var id = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_(s)){
var G__35219_35221 = s;
G__35219_35221.setValue(value);

G__35219_35221.setAttribute("min",min);

G__35219_35221.setAttribute("max",max);

} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});})(slider__$1))
], null));
});
cljs_intro.web.comp_spot_param = (function cljs_intro$web$comp_spot_param(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"spot_group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keys btn label-primary"], null),"r | R"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slide btn btn-primary active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-long-arrow-left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.slider,cljs_intro.web.slider_fn.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"value btn label-primary"], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"value","value",305978217)], null))], null)], null);
});
cljs_intro.web.comp_pie_param = (function cljs_intro$web$comp_pie_param(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"pie_group"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keys btn label-primary"], null),"a | A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slide btn btn-primary active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-undo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.slider,cljs_intro.web.slider_fn.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"value btn label-primary"], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"value","value",305978217)], null)),"\u00B0"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keys btn label-primary"], null),"o | O"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slide btn btn-primary active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-circle-o-notch"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.slider,cljs_intro.web.slider_fn.call(null,new cljs.core.Keyword(null,"apperture","apperture",-2146397483))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"value btn label-primary"], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.Keyword(null,"value","value",305978217)], null)),"\u00B0"], null)], null)], null);
});
cljs_intro.web.comp_algo = (function cljs_intro$web$comp_algo(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#algo_global","label#algo_global",-554414685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-square"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"global",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null)], null),"Global"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#algo_spot","label#algo_spot",153659267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-circle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"spot"], null)], null),"Spot"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#algo_pie","label#algo_pie",-178948729),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-pie-chart"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"pie"], null)], null),"Pie"], null)], null);
});
cljs_intro.web.comp_sidebar = (function cljs_intro$web$comp_sidebar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar","div#sidebar",-63515832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.card-header","h4.card-header",-1567414957),"Algorithm"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_algo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.card-header","h4.card-header",-1567414957),"Parameters"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_spot_param], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_pie_param], null)], null)], null);
});
cljs_intro.web.comp_menu = (function cljs_intro$web$comp_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-dark bg-inverse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null),"cljs 2D"], null)], null);
});
cljs_intro.web.comp_content = (function cljs_intro$web$comp_content(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var e = reagent.core.dom_node.call(null,this$);
var G__35231 = e;
dommy.core.set_attr_BANG_.call(null,G__35231,new cljs.core.Keyword(null,"tabindex","tabindex",338877510),"1000");

dommy.core.listen_BANG_.call(null,G__35231,new cljs.core.Keyword(null,"keydown","keydown",-629268186),((function (G__35231,e){
return (function (ev){
var k = ev.keyCode;
var shift_QMARK_ = ev.shiftKey;
var map__35232 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__35232__$1 = ((((!((map__35232 == null)))?((((map__35232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35232):map__35232);
var map__35233 = cljs.core.get.call(null,map__35232__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var map__35233__$1 = ((((!((map__35233 == null)))?((((map__35233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35233):map__35233);
var min_r = cljs.core.get.call(null,map__35233__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_r = cljs.core.get.call(null,map__35233__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vr = cljs.core.get.call(null,map__35233__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__35234 = cljs.core.get.call(null,map__35232__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__35234__$1 = ((((!((map__35234 == null)))?((((map__35234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35234):map__35234);
var min_a = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_a = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"max","max",61366548));
var va = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__35235 = cljs.core.get.call(null,map__35232__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var map__35235__$1 = ((((!((map__35235 == null)))?((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35235):map__35235);
var min_p = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_p = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vp = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__16332__auto__ = cljs.core._EQ_.call(null,k,(82));
if(and__16332__auto__){
return shift_QMARK_;
} else {
return and__16332__auto__;
}
})())){
if((vr < max_r)){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.inc);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,k,(82))){
if((vr > min_r)){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.dec);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__16332__auto__ = cljs.core._EQ_.call(null,k,(65));
if(and__16332__auto__){
return shift_QMARK_;
} else {
return and__16332__auto__;
}
})())){
if((va < max_a)){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.inc);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,k,(65))){
if((va > min_a)){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.dec);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__16332__auto__ = cljs.core._EQ_.call(null,k,(79));
if(and__16332__auto__){
return shift_QMARK_;
} else {
return and__16332__auto__;
}
})())){
if((vp < max_p)){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.inc);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,k,(79))){
if((vp > min_p)){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.dec);
} else {
return null;
}
} else {
return null;
}
}
}
}
}
}
});})(G__35231,e))
);

dommy.core.listen_BANG_.call(null,G__35231,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),((function (G__35231,e){
return (function (ev){
return e.focus();
});})(G__35231,e))
);

return G__35231;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#rendering","div#rendering",-1328632519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-text","div.card-text",1661912080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#target","canvas#target",457915941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"640px",new cljs.core.Keyword(null,"height","height",1025178622),"360px"], null)], null)], null)], null)], null);
})], null));
});
cljs_intro.web.comp_view = (function cljs_intro$web$comp_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_menu], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-group","div.card-group",261375627),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_content], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_sidebar], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_fake], null)], null);
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var map__35277 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__35277__$1 = ((((!((map__35277 == null)))?((((map__35277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35277):map__35277);
var chan_out = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_view], null),document.getElementById("hook"));

var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__35279 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__35279,(0),null);
var eps = cljs.core.nth.call(null,vec__35279,(1),null);
var allsegs = cljs.core.nth.call(null,vec__35279,(2),null);
var data = vec__35279;
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_global"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_spot"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"spot","spot",-1706962147)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_pie"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"pie","pie",1530441672)));

var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__,target,context,width,height,vec__35279,drawdata,eps,allsegs,data,map__35277,map__35277__$1,chan_out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__,target,context,width,height,vec__35279,drawdata,eps,allsegs,data,map__35277,map__35277__$1,chan_out){
return (function (state_35301){
var state_val_35302 = (state_35301[(1)]);
if((state_val_35302 === (1))){
var inst_35280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35281 = cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047));
var inst_35282 = [new cljs.core.Keyword(null,"click","click",1912301393),inst_35281];
var inst_35283 = (new cljs.core.PersistentVector(null,2,(5),inst_35280,inst_35282,null));
var inst_35284 = cljs.core.async.put_BANG_.call(null,chan_out,inst_35283);
var inst_35285 = cljs_intro.web.init_game_state.call(null,(100));
var inst_35286 = true;
var inst_35287 = inst_35285;
var state_35301__$1 = (function (){var statearr_35303 = state_35301;
(statearr_35303[(7)] = inst_35286);

(statearr_35303[(8)] = inst_35284);

(statearr_35303[(9)] = inst_35287);

return statearr_35303;
})();
var statearr_35304_35314 = state_35301__$1;
(statearr_35304_35314[(2)] = null);

(statearr_35304_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35302 === (2))){
var state_35301__$1 = state_35301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35301__$1,(4),chan_out);
} else {
if((state_val_35302 === (3))){
var inst_35299 = (state_35301[(2)]);
var state_35301__$1 = state_35301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35301__$1,inst_35299);
} else {
if((state_val_35302 === (4))){
var inst_35287 = (state_35301[(9)]);
var inst_35291 = (state_35301[(2)]);
var inst_35292 = cljs.core.nth.call(null,inst_35291,(0),null);
var inst_35293 = cljs.core.nth.call(null,inst_35291,(1),null);
var inst_35294 = inst_35293.call(null,inst_35292,inst_35287);
var inst_35295 = cljs.core.partial.call(null,cljs_intro.web.render_game,inst_35294);
var inst_35296 = window.requestAnimationFrame(inst_35295);
var inst_35286 = true;
var inst_35287__$1 = inst_35294;
var state_35301__$1 = (function (){var statearr_35305 = state_35301;
(statearr_35305[(10)] = inst_35296);

(statearr_35305[(7)] = inst_35286);

(statearr_35305[(9)] = inst_35287__$1);

return statearr_35305;
})();
var statearr_35306_35315 = state_35301__$1;
(statearr_35306_35315[(2)] = null);

(statearr_35306_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19366__auto__,target,context,width,height,vec__35279,drawdata,eps,allsegs,data,map__35277,map__35277__$1,chan_out))
;
return ((function (switch__19345__auto__,c__19366__auto__,target,context,width,height,vec__35279,drawdata,eps,allsegs,data,map__35277,map__35277__$1,chan_out){
return (function() {
var cljs_intro$web$init_$_state_machine__19346__auto__ = null;
var cljs_intro$web$init_$_state_machine__19346__auto____0 = (function (){
var statearr_35310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35310[(0)] = cljs_intro$web$init_$_state_machine__19346__auto__);

(statearr_35310[(1)] = (1));

return statearr_35310;
});
var cljs_intro$web$init_$_state_machine__19346__auto____1 = (function (state_35301){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_35301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e35311){if((e35311 instanceof Object)){
var ex__19349__auto__ = e35311;
var statearr_35312_35316 = state_35301;
(statearr_35312_35316[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_35301;
state_35301 = G__35317;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__19346__auto__ = function(state_35301){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__19346__auto____1.call(this,state_35301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__19346__auto____0;
cljs_intro$web$init_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__19346__auto____1;
return cljs_intro$web$init_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__,target,context,width,height,vec__35279,drawdata,eps,allsegs,data,map__35277,map__35277__$1,chan_out))
})();
var state__19368__auto__ = (function (){var statearr_35313 = f__19367__auto__.call(null);
(statearr_35313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_35313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__,target,context,width,height,vec__35279,drawdata,eps,allsegs,data,map__35277,map__35277__$1,chan_out))
);

return c__19366__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map