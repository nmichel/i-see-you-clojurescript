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
return (function cljs_intro$web$build_dynamic_data_$_iter__23893(s__23894){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__23894__$1 = s__23894;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23894__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17112__auto__ = ((function (s__23894__$1,sx,xs__4977__auto__,temp__4425__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__23893_$_iter__23895(s__23896){
return (new cljs.core.LazySeq(null,((function (s__23894__$1,sx,xs__4977__auto__,temp__4425__auto__,data){
return (function (){
var s__23896__$1 = s__23896;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23896__$1);
if(temp__4425__auto____$1){
var s__23896__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23896__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__23896__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__23898 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__23897 = (0);
while(true){
if((i__23897 < size__17115__auto__)){
var sy = cljs.core._nth.call(null,c__17114__auto__,i__23897);
cljs.core.chunk_append.call(null,b__23898,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__23899 = (i__23897 + (1));
i__23897 = G__23899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23898),cljs_intro$web$build_dynamic_data_$_iter__23893_$_iter__23895.call(null,cljs.core.chunk_rest.call(null,s__23896__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23898),null);
}
} else {
var sy = cljs.core.first.call(null,s__23896__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__23893_$_iter__23895.call(null,cljs.core.rest.call(null,s__23896__$2)));
}
} else {
return null;
}
break;
}
});})(s__23894__$1,sx,xs__4977__auto__,temp__4425__auto__,data))
,null,null));
});})(s__23894__$1,sx,xs__4977__auto__,temp__4425__auto__,data))
;
var fs__17113__auto__ = cljs.core.seq.call(null,iterys__17112__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__17113__auto__){
return cljs.core.concat.call(null,fs__17113__auto__,cljs_intro$web$build_dynamic_data_$_iter__23893.call(null,cljs.core.rest.call(null,s__23894__$1)));
} else {
var G__23900 = cljs.core.rest.call(null,s__23894__$1);
s__23894__$1 = G__23900;
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
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__23901){
var map__23905 = p__23901;
var map__23905__$1 = ((((!((map__23905 == null)))?((((map__23905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23905):map__23905);
var x = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var data = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var closed = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var alpha = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__23905,map__23905__$1,x,y,data,closed,alpha){
return (function (p){
var vec__23907 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__23907,(0),null);
var rpy = cljs.core.nth.call(null,vec__23907,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__23905,map__23905__$1,x,y,data,closed,alpha))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__){
return (function (state_23949){
var state_val_23950 = (state_23949[(1)]);
if((state_val_23950 === (1))){
var inst_23935 = cljs.core.async.timeout.call(null,period);
var inst_23936 = inst_23935;
var state_23949__$1 = (function (){var statearr_23951 = state_23949;
(statearr_23951[(7)] = inst_23936);

return statearr_23951;
})();
var statearr_23952_23962 = state_23949__$1;
(statearr_23952_23962[(2)] = null);

(statearr_23952_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (2))){
var inst_23936 = (state_23949[(7)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23949__$1,(4),inst_23936);
} else {
if((state_val_23950 === (3))){
var inst_23947 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23949__$1,inst_23947);
} else {
if((state_val_23950 === (4))){
var inst_23939 = (state_23949[(2)]);
var inst_23940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23941 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_23942 = (new cljs.core.PersistentVector(null,2,(5),inst_23940,inst_23941,null));
var inst_23943 = cljs.core.async.put_BANG_.call(null,chan_out,inst_23942);
var inst_23944 = cljs.core.async.timeout.call(null,period);
var inst_23936 = inst_23944;
var state_23949__$1 = (function (){var statearr_23953 = state_23949;
(statearr_23953[(8)] = inst_23943);

(statearr_23953[(7)] = inst_23936);

(statearr_23953[(9)] = inst_23939);

return statearr_23953;
})();
var statearr_23954_23963 = state_23949__$1;
(statearr_23954_23963[(2)] = null);

(statearr_23954_23963[(1)] = (2));


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
var statearr_23958 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23958[(0)] = cljs_intro$web$listen_timer_$_state_machine__19346__auto__);

(statearr_23958[(1)] = (1));

return statearr_23958;
});
var cljs_intro$web$listen_timer_$_state_machine__19346__auto____1 = (function (state_23949){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_23949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e23959){if((e23959 instanceof Object)){
var ex__19349__auto__ = e23959;
var statearr_23960_23964 = state_23949;
(statearr_23960_23964[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23965 = state_23949;
state_23949 = G__23965;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__19346__auto__ = function(state_23949){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__19346__auto____1.call(this,state_23949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__19346__auto____0;
cljs_intro$web$listen_timer_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__19346__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_23961 = f__19367__auto__.call(null);
(statearr_23961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_23961;
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
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__23966){
var map__23970 = p__23966;
var map__23970__$1 = ((((!((map__23970 == null)))?((((map__23970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23970):map__23970);
var x = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var algo = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var eps = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var apperture = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var context = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var alpha = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var vec__23972 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__23972,(0),null);
var _ = cljs.core.nth.call(null,vec__23972,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__23972,(2),null);
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var erase_color = "grey";
cljs_intro.draw.draw_rect.call(null,context,(0),(0),width,height,erase_color);

if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-geom","show-geom",268006744)], null)))){
cljs_intro.draw.draw_geometry.call(null,context,drawdata);
} else {
}

if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-sub-geom","show-sub-geom",-1873366448)], null)))){
cljs_intro.draw.draw_segments.call(null,context,segs);
} else {
}

cljs_intro.draw.draw_hull_as_surfaces.call(null,context,hull);

if(cljs.core._EQ_.call(null,algo,new cljs.core.Keyword(null,"pie","pie",1530441672))){
cljs_intro.draw.draw_pie.call(null,context,x,y,dist,cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(alpha - apperture)),cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(alpha + apperture)));
} else {
if(cljs.core._EQ_.call(null,algo,new cljs.core.Keyword(null,"spot","spot",-1706962147))){
cljs_intro.draw.draw_circle.call(null,context,x,y,dist);
} else {
}
}

if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-ep","show-ep",1537046453)], null)))){
cljs_intro.draw.draw_hull_vertices.call(null,context,eps);
} else {
}

return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
});
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__23973,dynamic,alpha){
var vec__23979 = p__23973;
var drawdata = cljs.core.nth.call(null,vec__23979,(0),null);
var eps = cljs.core.nth.call(null,vec__23979,(1),null);
var allsegs = cljs.core.nth.call(null,vec__23979,(2),null);
return cljs.core.reduce.call(null,((function (vec__23979,drawdata,eps,allsegs){
return (function (p__23980,p__23981){
var vec__23982 = p__23980;
var adraw = cljs.core.nth.call(null,vec__23982,(0),null);
var aeps = cljs.core.nth.call(null,vec__23982,(1),null);
var asegs = cljs.core.nth.call(null,vec__23982,(2),null);
var vec__23983 = p__23981;
var e = cljs.core.nth.call(null,vec__23983,(0),null);
var s = cljs.core.nth.call(null,vec__23983,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__23979,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_visibility_hull;
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.offsetY));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY);
});
cljs_intro.web.change_algo = (function cljs_intro$web$change_algo(k,ev,s){
var algo_23984 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"global","global",93595047),algo_23984)){
dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");

cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null),new cljs.core.Keyword(null,"global","global",93595047));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"spot","spot",-1706962147),algo_23984)){
dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");

cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null),new cljs.core.Keyword(null,"spot","spot",-1706962147));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pie","pie",1530441672),algo_23984)){
dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");

cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null),new cljs.core.Keyword(null,"pie","pie",1530441672));
} else {
}
}
}

return cljs_intro.web.update_visibility_hull.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"algo","algo",1472048382),k));
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
cljs_intro.web.get_compute_visibility_hull_function = (function cljs_intro$web$get_compute_visibility_hull_function(p__23985){
var map__23988 = p__23985;
var map__23988__$1 = ((((!((map__23988 == null)))?((((map__23988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23988):map__23988);
var x = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dist = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var algo = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var alpha = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var apperture = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
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
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(p__23990){
var map__23995 = p__23990;
var map__23995__$1 = ((((!((map__23995 == null)))?((((map__23995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23995):map__23995);
var state = map__23995__$1;
var static$ = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var x = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r_geom = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var dist = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var alpha = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var apperture = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var data = static$;
var visibility_fn = cljs_intro.web.get_compute_visibility_hull_function.call(null,state);
var map__23997 = visibility_fn.call(null,data);
var map__23997__$1 = ((((!((map__23997 == null)))?((((map__23997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23997):map__23997);
var subgeom = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"subgeom","subgeom",-780953550));
var hull = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var endpoints = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"endpoints","endpoints",274088209));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),subgeom,new cljs.core.Keyword(null,"eps","eps",-1288776929),endpoints,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),data);
});
cljs_intro.web.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"spot_radius_slider",new cljs.core.Keyword(null,"value","value",305978217),(50),new cljs.core.Keyword(null,"min","min",444991522),(10),new cljs.core.Keyword(null,"max","max",61366548),(200)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pie_angle_slider",new cljs.core.Keyword(null,"value","value",305978217),(10),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(359)], null),new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pie_apperture_slider",new cljs.core.Keyword(null,"value","value",305978217),(30),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(179)], null),new cljs.core.Keyword(null,"chan","chan",-2103021695),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-ep","show-ep",1537046453),true,new cljs.core.Keyword(null,"show-geom","show-geom",268006744),false,new cljs.core.Keyword(null,"show-sub-geom","show-sub-geom",-1873366448),false], null)], null));
cljs_intro.web.comp_fake = (function cljs_intro$web$comp_fake(){
return (function (){
var map__24007 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__24007__$1 = ((((!((map__24007 == null)))?((((map__24007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24007):map__24007);
var map__24008 = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var map__24008__$1 = ((((!((map__24008 == null)))?((((map__24008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24008):map__24008);
var rv = cljs.core.get.call(null,map__24008__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__24009 = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__24009__$1 = ((((!((map__24009 == null)))?((((map__24009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24009):map__24009);
var av = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__24010 = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var map__24010__$1 = ((((!((map__24010 == null)))?((((map__24010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24010):map__24010);
var pv = cljs.core.get.call(null,map__24010__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rv,cljs_intro.web.change_radius], null));

cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [av,cljs_intro.web.change_angle], null));

cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pv,cljs_intro.web.change_apperture], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
});
});
cljs_intro.web.slider_fn = (function cljs_intro$web$slider_fn(name){
return (function() {
var G__24015 = null;
var G__24015__0 = (function (){
return name.call(null,cljs.core.deref.call(null,cljs_intro.web.state));
});
var G__24015__2 = (function (k,v){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,k], null),v);
});
G__24015 = function(k,v){
switch(arguments.length){
case 0:
return G__24015__0.call(this);
case 2:
return G__24015__2.call(this,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24015.cljs$core$IFn$_invoke$arity$0 = G__24015__0;
G__24015.cljs$core$IFn$_invoke$arity$2 = G__24015__2;
return G__24015;
})()
});
cljs_intro.web.debug_fn = (function cljs_intro$web$debug_fn(path){
return (function() {
var G__24016 = null;
var G__24016__0 = (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),path);
});
var G__24016__1 = (function (v){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,path,v);
});
G__24016 = function(v){
switch(arguments.length){
case 0:
return G__24016__0.call(this);
case 1:
return G__24016__1.call(this,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24016.cljs$core$IFn$_invoke$arity$0 = G__24016__0;
G__24016.cljs$core$IFn$_invoke$arity$1 = G__24016__1;
return G__24016;
})()
});
cljs_intro.web.slider = (function cljs_intro$web$slider(f){
var slider__$1 = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (slider__$1){
return (function (this$){
var opts = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tooltip_position","tooltip_position",-801561859),"bottom"], null));
var s = (new Slider(reagent.core.dom_node.call(null,this$),opts));
var map__24024 = f.call(null);
var map__24024__$1 = ((((!((map__24024 == null)))?((((map__24024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24024):map__24024);
var value = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__24026_24030 = s;
G__24026_24030.setValue(value);

G__24026_24030.setAttribute("min",min);

G__24026_24030.setAttribute("max",max);


cljs.core.reset_BANG_.call(null,slider__$1,s);

return s.on("change",((function (opts,s,map__24024,map__24024__$1,value,min,max,slider__$1){
return (function (p1__24017_SHARP_){
return f.call(null,new cljs.core.Keyword(null,"value","value",305978217),p1__24017_SHARP_.newValue);
});})(opts,s,map__24024,map__24024__$1,value,min,max,slider__$1))
);
});})(slider__$1))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (slider__$1){
return (function (){
var s = cljs.core.deref.call(null,slider__$1);
var map__24027 = f.call(null);
var map__24027__$1 = ((((!((map__24027 == null)))?((((map__24027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);
var id = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_(s)){
var G__24029_24031 = s;
G__24029_24031.setValue(value);

G__24029_24031.setAttribute("min",min);

G__24029_24031.setAttribute("max",max);

} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});})(slider__$1))
], null));
});
cljs_intro.web.comp_spot_param = (function cljs_intro$web$comp_spot_param(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"spot_group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keys btn label-primary"], null),"r | R"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slide btn btn-primary active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-long-arrow-left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.slider,cljs_intro.web.slider_fn.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"value btn label-primary"], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"value","value",305978217)], null))], null)], null);
});
cljs_intro.web.comp_pie_param = (function cljs_intro$web$comp_pie_param(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"pie_group"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keys btn label-primary"], null),"a | A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slide btn btn-primary active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-undo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.slider,cljs_intro.web.slider_fn.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"value btn label-primary"], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"value","value",305978217)], null)),"\u00B0"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keys btn label-primary"], null),"o | O"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slide btn btn-primary active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-circle-o-notch"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.slider,cljs_intro.web.slider_fn.call(null,new cljs.core.Keyword(null,"apperture","apperture",-2146397483))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"value btn label-primary"], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.Keyword(null,"value","value",305978217)], null)),"\u00B0"], null)], null)], null);
});
cljs_intro.web.comp_algo = (function cljs_intro$web$comp_algo(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#algo_global","label#algo_global",-554414685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-primary"),cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null)),new cljs.core.Keyword(null,"global","global",93595047)))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-square"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"global"], null)], null),"Global"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#algo_spot","label#algo_spot",153659267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-primary"),cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null)),new cljs.core.Keyword(null,"spot","spot",-1706962147)))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-circle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"spot"], null)], null),"Spot"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#algo_pie","label#algo_pie",-178948729),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-primary"),cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null)),new cljs.core.Keyword(null,"pie","pie",1530441672)))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-pie-chart"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"pie"], null)], null),"Pie"], null)], null);
});
cljs_intro.web.comp_sidebar_control = (function cljs_intro$web$comp_sidebar_control(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar","div#sidebar",-63515832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-header","h2.card-header",882066215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-cogs"], null)], null),"Controls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-header","h5.card-header",-332163615),"Algorithm"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_algo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-header","h5.card-header",-332163615),"Parameters"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_spot_param], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_pie_param], null)], null)], null);
});
cljs_intro.web.comp_debug_check = (function cljs_intro$web$comp_debug_check(f){
return (function (){
var v = f.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-warning debug"),cljs.core.str((cljs.core.truth_(v)?" active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (v){
return (function (){
return f.call(null,cljs.core.not.call(null,v));
});})(v))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fa "),cljs.core.str((cljs.core.truth_(v)?"fa-check":"fa-times"))].join('')], null)], null)], null)], null);
});
});
cljs_intro.web.comp_sidebar_debug = (function cljs_intro$web$comp_sidebar_debug(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar","div#sidebar",-63515832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-header","h2.card-header",882066215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-bug"], null)], null),"Debug"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table.debug","div.table.debug",-1912685468),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-ep","show-ep",1537046453)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"endpoints"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-sub-geom","show-sub-geom",-1873366448)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"subgeometry"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-geom","show-geom",268006744)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"geometry"], null)], null)], null)], null)], null);
});
cljs_intro.web.comp_menu = (function cljs_intro$web$comp_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-dark bg-inverse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null),"cljs 2D"], null)], null);
});
cljs_intro.web.comp_content = (function cljs_intro$web$comp_content(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var e = reagent.core.dom_node.call(null,this$);
var G__24041 = e;
dommy.core.set_attr_BANG_.call(null,G__24041,new cljs.core.Keyword(null,"tabindex","tabindex",338877510),"1000");

dommy.core.listen_BANG_.call(null,G__24041,new cljs.core.Keyword(null,"keydown","keydown",-629268186),((function (G__24041,e){
return (function (ev){
var k = ev.keyCode;
var shift_QMARK_ = ev.shiftKey;
var map__24042 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__24042__$1 = ((((!((map__24042 == null)))?((((map__24042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24042):map__24042);
var map__24043 = cljs.core.get.call(null,map__24042__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var map__24043__$1 = ((((!((map__24043 == null)))?((((map__24043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24043):map__24043);
var min_r = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_r = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vr = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__24044 = cljs.core.get.call(null,map__24042__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__24044__$1 = ((((!((map__24044 == null)))?((((map__24044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24044):map__24044);
var min_a = cljs.core.get.call(null,map__24044__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_a = cljs.core.get.call(null,map__24044__$1,new cljs.core.Keyword(null,"max","max",61366548));
var va = cljs.core.get.call(null,map__24044__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__24045 = cljs.core.get.call(null,map__24042__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var map__24045__$1 = ((((!((map__24045 == null)))?((((map__24045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24045):map__24045);
var min_p = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_p = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vp = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
});})(G__24041,e))
);

dommy.core.listen_BANG_.call(null,G__24041,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),((function (G__24041,e){
return (function (ev){
return e.focus();
});})(G__24041,e))
);

return G__24041;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#rendering","div#rendering",-1328632519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-text","div.card-text",1661912080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#target","canvas#target",457915941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"640px",new cljs.core.Keyword(null,"height","height",1025178622),"360px"], null)], null)], null)], null)], null);
})], null));
});
cljs_intro.web.comp_view = (function cljs_intro$web$comp_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_menu], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-group","div.card-group",261375627),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_content], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_sidebar_control], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_sidebar_debug], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_fake], null)], null);
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var map__24087 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__24087__$1 = ((((!((map__24087 == null)))?((((map__24087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24087):map__24087);
var chan_out = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_view], null),document.getElementById("hook"));

var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__24089 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__24089,(0),null);
var eps = cljs.core.nth.call(null,vec__24089,(1),null);
var allsegs = cljs.core.nth.call(null,vec__24089,(2),null);
var data = vec__24089;
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_global"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_spot"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"spot","spot",-1706962147)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_pie"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"pie","pie",1530441672)));

var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__,target,context,width,height,vec__24089,drawdata,eps,allsegs,data,map__24087,map__24087__$1,chan_out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__,target,context,width,height,vec__24089,drawdata,eps,allsegs,data,map__24087,map__24087__$1,chan_out){
return (function (state_24111){
var state_val_24112 = (state_24111[(1)]);
if((state_val_24112 === (1))){
var inst_24090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24091 = cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047));
var inst_24092 = [new cljs.core.Keyword(null,"click","click",1912301393),inst_24091];
var inst_24093 = (new cljs.core.PersistentVector(null,2,(5),inst_24090,inst_24092,null));
var inst_24094 = cljs.core.async.put_BANG_.call(null,chan_out,inst_24093);
var inst_24095 = cljs_intro.web.init_game_state.call(null,(100));
var inst_24096 = true;
var inst_24097 = inst_24095;
var state_24111__$1 = (function (){var statearr_24113 = state_24111;
(statearr_24113[(7)] = inst_24094);

(statearr_24113[(8)] = inst_24096);

(statearr_24113[(9)] = inst_24097);

return statearr_24113;
})();
var statearr_24114_24124 = state_24111__$1;
(statearr_24114_24124[(2)] = null);

(statearr_24114_24124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24112 === (2))){
var state_24111__$1 = state_24111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24111__$1,(4),chan_out);
} else {
if((state_val_24112 === (3))){
var inst_24109 = (state_24111[(2)]);
var state_24111__$1 = state_24111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24111__$1,inst_24109);
} else {
if((state_val_24112 === (4))){
var inst_24097 = (state_24111[(9)]);
var inst_24101 = (state_24111[(2)]);
var inst_24102 = cljs.core.nth.call(null,inst_24101,(0),null);
var inst_24103 = cljs.core.nth.call(null,inst_24101,(1),null);
var inst_24104 = inst_24103.call(null,inst_24102,inst_24097);
var inst_24105 = cljs.core.partial.call(null,cljs_intro.web.render_game,inst_24104);
var inst_24106 = window.requestAnimationFrame(inst_24105);
var inst_24096 = true;
var inst_24097__$1 = inst_24104;
var state_24111__$1 = (function (){var statearr_24115 = state_24111;
(statearr_24115[(8)] = inst_24096);

(statearr_24115[(9)] = inst_24097__$1);

(statearr_24115[(10)] = inst_24106);

return statearr_24115;
})();
var statearr_24116_24125 = state_24111__$1;
(statearr_24116_24125[(2)] = null);

(statearr_24116_24125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19366__auto__,target,context,width,height,vec__24089,drawdata,eps,allsegs,data,map__24087,map__24087__$1,chan_out))
;
return ((function (switch__19345__auto__,c__19366__auto__,target,context,width,height,vec__24089,drawdata,eps,allsegs,data,map__24087,map__24087__$1,chan_out){
return (function() {
var cljs_intro$web$init_$_state_machine__19346__auto__ = null;
var cljs_intro$web$init_$_state_machine__19346__auto____0 = (function (){
var statearr_24120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24120[(0)] = cljs_intro$web$init_$_state_machine__19346__auto__);

(statearr_24120[(1)] = (1));

return statearr_24120;
});
var cljs_intro$web$init_$_state_machine__19346__auto____1 = (function (state_24111){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_24111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e24121){if((e24121 instanceof Object)){
var ex__19349__auto__ = e24121;
var statearr_24122_24126 = state_24111;
(statearr_24122_24126[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24127 = state_24111;
state_24111 = G__24127;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__19346__auto__ = function(state_24111){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__19346__auto____1.call(this,state_24111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__19346__auto____0;
cljs_intro$web$init_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__19346__auto____1;
return cljs_intro$web$init_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__,target,context,width,height,vec__24089,drawdata,eps,allsegs,data,map__24087,map__24087__$1,chan_out))
})();
var state__19368__auto__ = (function (){var statearr_24123 = f__19367__auto__.call(null);
(statearr_24123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_24123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__,target,context,width,height,vec__24089,drawdata,eps,allsegs,data,map__24087,map__24087__$1,chan_out))
);

return c__19366__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map