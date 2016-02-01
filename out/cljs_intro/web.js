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
return (function cljs_intro$web$build_dynamic_data_$_iter__27907(s__27908){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__27908__$1 = s__27908;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27908__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17112__auto__ = ((function (s__27908__$1,sx,xs__4977__auto__,temp__4425__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__27907_$_iter__27909(s__27910){
return (new cljs.core.LazySeq(null,((function (s__27908__$1,sx,xs__4977__auto__,temp__4425__auto__,data){
return (function (){
var s__27910__$1 = s__27910;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27910__$1);
if(temp__4425__auto____$1){
var s__27910__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27910__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__27910__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__27912 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__27911 = (0);
while(true){
if((i__27911 < size__17115__auto__)){
var sy = cljs.core._nth.call(null,c__17114__auto__,i__27911);
cljs.core.chunk_append.call(null,b__27912,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__27913 = (i__27911 + (1));
i__27911 = G__27913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27912),cljs_intro$web$build_dynamic_data_$_iter__27907_$_iter__27909.call(null,cljs.core.chunk_rest.call(null,s__27910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27912),null);
}
} else {
var sy = cljs.core.first.call(null,s__27910__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__27907_$_iter__27909.call(null,cljs.core.rest.call(null,s__27910__$2)));
}
} else {
return null;
}
break;
}
});})(s__27908__$1,sx,xs__4977__auto__,temp__4425__auto__,data))
,null,null));
});})(s__27908__$1,sx,xs__4977__auto__,temp__4425__auto__,data))
;
var fs__17113__auto__ = cljs.core.seq.call(null,iterys__17112__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__17113__auto__){
return cljs.core.concat.call(null,fs__17113__auto__,cljs_intro$web$build_dynamic_data_$_iter__27907.call(null,cljs.core.rest.call(null,s__27908__$1)));
} else {
var G__27914 = cljs.core.rest.call(null,s__27908__$1);
s__27908__$1 = G__27914;
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
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__27915){
var map__27919 = p__27915;
var map__27919__$1 = ((((!((map__27919 == null)))?((((map__27919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27919):map__27919);
var x = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var data = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var closed = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var alpha = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__27919,map__27919__$1,x,y,data,closed,alpha){
return (function (p){
var vec__27921 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__27921,(0),null);
var rpy = cljs.core.nth.call(null,vec__27921,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__27919,map__27919__$1,x,y,data,closed,alpha))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__){
return (function (state_27963){
var state_val_27964 = (state_27963[(1)]);
if((state_val_27964 === (1))){
var inst_27949 = cljs.core.async.timeout.call(null,period);
var inst_27950 = inst_27949;
var state_27963__$1 = (function (){var statearr_27965 = state_27963;
(statearr_27965[(7)] = inst_27950);

return statearr_27965;
})();
var statearr_27966_27976 = state_27963__$1;
(statearr_27966_27976[(2)] = null);

(statearr_27966_27976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (2))){
var inst_27950 = (state_27963[(7)]);
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27963__$1,(4),inst_27950);
} else {
if((state_val_27964 === (3))){
var inst_27961 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27963__$1,inst_27961);
} else {
if((state_val_27964 === (4))){
var inst_27953 = (state_27963[(2)]);
var inst_27954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27955 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_27956 = (new cljs.core.PersistentVector(null,2,(5),inst_27954,inst_27955,null));
var inst_27957 = cljs.core.async.put_BANG_.call(null,chan_out,inst_27956);
var inst_27958 = cljs.core.async.timeout.call(null,period);
var inst_27950 = inst_27958;
var state_27963__$1 = (function (){var statearr_27967 = state_27963;
(statearr_27967[(8)] = inst_27957);

(statearr_27967[(7)] = inst_27950);

(statearr_27967[(9)] = inst_27953);

return statearr_27967;
})();
var statearr_27968_27977 = state_27963__$1;
(statearr_27968_27977[(2)] = null);

(statearr_27968_27977[(1)] = (2));


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
var statearr_27972 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27972[(0)] = cljs_intro$web$listen_timer_$_state_machine__19346__auto__);

(statearr_27972[(1)] = (1));

return statearr_27972;
});
var cljs_intro$web$listen_timer_$_state_machine__19346__auto____1 = (function (state_27963){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_27963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e27973){if((e27973 instanceof Object)){
var ex__19349__auto__ = e27973;
var statearr_27974_27978 = state_27963;
(statearr_27974_27978[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27979 = state_27963;
state_27963 = G__27979;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__19346__auto__ = function(state_27963){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__19346__auto____1.call(this,state_27963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__19346__auto____0;
cljs_intro$web$listen_timer_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__19346__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_27975 = f__19367__auto__.call(null);
(statearr_27975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_27975;
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
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__27980){
var map__27984 = p__27980;
var map__27984__$1 = ((((!((map__27984 == null)))?((((map__27984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27984):map__27984);
var x = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var algo = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var eps = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var apperture = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var context = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var alpha = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var vec__27986 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__27986,(0),null);
var _ = cljs.core.nth.call(null,vec__27986,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__27986,(2),null);
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var erase_color = "#2D2D2D";
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

if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-outline","show-outline",-1154850895)], null)))){
if(cljs.core._EQ_.call(null,algo,new cljs.core.Keyword(null,"pie","pie",1530441672))){
cljs_intro.draw.draw_pie.call(null,context,x,y,dist,cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(alpha - apperture)),cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,(alpha + apperture)));
} else {
if(cljs.core._EQ_.call(null,algo,new cljs.core.Keyword(null,"spot","spot",-1706962147))){
cljs_intro.draw.draw_circle.call(null,context,x,y,dist);
} else {
}
}
} else {
}

if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-ep","show-ep",1537046453)], null)))){
cljs_intro.draw.draw_hull_vertices.call(null,context,eps);
} else {
}

if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-position","show-position",-1366942772)], null)))){
return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
} else {
return null;
}
});
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__27987,dynamic,alpha){
var vec__27993 = p__27987;
var drawdata = cljs.core.nth.call(null,vec__27993,(0),null);
var eps = cljs.core.nth.call(null,vec__27993,(1),null);
var allsegs = cljs.core.nth.call(null,vec__27993,(2),null);
return cljs.core.reduce.call(null,((function (vec__27993,drawdata,eps,allsegs){
return (function (p__27994,p__27995){
var vec__27996 = p__27994;
var adraw = cljs.core.nth.call(null,vec__27996,(0),null);
var aeps = cljs.core.nth.call(null,vec__27996,(1),null);
var asegs = cljs.core.nth.call(null,vec__27996,(2),null);
var vec__27997 = p__27995;
var e = cljs.core.nth.call(null,vec__27997,(0),null);
var s = cljs.core.nth.call(null,vec__27997,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__27993,drawdata,eps,allsegs))
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
var algo_27998 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"global","global",93595047),algo_27998)){
dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");

cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null),new cljs.core.Keyword(null,"global","global",93595047));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"spot","spot",-1706962147),algo_27998)){
dommy.core.add_class_BANG_.call(null,document.querySelector("div[name='spot_group']"),"visible");

dommy.core.remove_class_BANG_.call(null,document.querySelector("div[name='pie_group']"),"visible");

cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null),new cljs.core.Keyword(null,"spot","spot",-1706962147));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pie","pie",1530441672),algo_27998)){
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
cljs_intro.web.get_compute_visibility_hull_function = (function cljs_intro$web$get_compute_visibility_hull_function(p__27999){
var map__28002 = p__27999;
var map__28002__$1 = ((((!((map__28002 == null)))?((((map__28002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28002):map__28002);
var x = cljs.core.get.call(null,map__28002__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28002__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dist = cljs.core.get.call(null,map__28002__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var algo = cljs.core.get.call(null,map__28002__$1,new cljs.core.Keyword(null,"algo","algo",1472048382));
var alpha = cljs.core.get.call(null,map__28002__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var apperture = cljs.core.get.call(null,map__28002__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
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
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(p__28004){
var map__28009 = p__28004;
var map__28009__$1 = ((((!((map__28009 == null)))?((((map__28009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28009):map__28009);
var state = map__28009__$1;
var static$ = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var x = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r_geom = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var dist = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var alpha = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var apperture = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var data = static$;
var visibility_fn = cljs_intro.web.get_compute_visibility_hull_function.call(null,state);
var map__28011 = visibility_fn.call(null,data);
var map__28011__$1 = ((((!((map__28011 == null)))?((((map__28011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28011):map__28011);
var subgeom = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"subgeom","subgeom",-780953550));
var hull = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var endpoints = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"endpoints","endpoints",274088209));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),subgeom,new cljs.core.Keyword(null,"eps","eps",-1288776929),endpoints,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),data);
});
cljs_intro.web.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"spot_radius_slider",new cljs.core.Keyword(null,"value","value",305978217),(50),new cljs.core.Keyword(null,"min","min",444991522),(10),new cljs.core.Keyword(null,"max","max",61366548),(200)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pie_angle_slider",new cljs.core.Keyword(null,"value","value",305978217),(10),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(359)], null),new cljs.core.Keyword(null,"apperture","apperture",-2146397483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pie_apperture_slider",new cljs.core.Keyword(null,"value","value",305978217),(30),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(179)], null),new cljs.core.Keyword(null,"chan","chan",-2103021695),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show-ep","show-ep",1537046453),true,new cljs.core.Keyword(null,"show-geom","show-geom",268006744),false,new cljs.core.Keyword(null,"show-sub-geom","show-sub-geom",-1873366448),false,new cljs.core.Keyword(null,"show-position","show-position",-1366942772),true,new cljs.core.Keyword(null,"show-outline","show-outline",-1154850895),true], null)], null));
cljs_intro.web.comp_fake = (function cljs_intro$web$comp_fake(){
return (function (){
var map__28021 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__28021__$1 = ((((!((map__28021 == null)))?((((map__28021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28021):map__28021);
var map__28022 = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var map__28022__$1 = ((((!((map__28022 == null)))?((((map__28022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28022):map__28022);
var rv = cljs.core.get.call(null,map__28022__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__28023 = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__28023__$1 = ((((!((map__28023 == null)))?((((map__28023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);
var av = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__28024 = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var map__28024__$1 = ((((!((map__28024 == null)))?((((map__28024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28024):map__28024);
var pv = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rv,cljs_intro.web.change_radius], null));

cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [av,cljs_intro.web.change_angle], null));

cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pv,cljs_intro.web.change_apperture], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
});
});
cljs_intro.web.slider_fn = (function cljs_intro$web$slider_fn(name){
return (function() {
var G__28029 = null;
var G__28029__0 = (function (){
return name.call(null,cljs.core.deref.call(null,cljs_intro.web.state));
});
var G__28029__2 = (function (k,v){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,k], null),v);
});
G__28029 = function(k,v){
switch(arguments.length){
case 0:
return G__28029__0.call(this);
case 2:
return G__28029__2.call(this,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28029.cljs$core$IFn$_invoke$arity$0 = G__28029__0;
G__28029.cljs$core$IFn$_invoke$arity$2 = G__28029__2;
return G__28029;
})()
});
cljs_intro.web.debug_fn = (function cljs_intro$web$debug_fn(path){
return (function() {
var G__28030 = null;
var G__28030__0 = (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),path);
});
var G__28030__1 = (function (v){
return cljs.core.swap_BANG_.call(null,cljs_intro.web.state,cljs.core.assoc_in,path,v);
});
G__28030 = function(v){
switch(arguments.length){
case 0:
return G__28030__0.call(this);
case 1:
return G__28030__1.call(this,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28030.cljs$core$IFn$_invoke$arity$0 = G__28030__0;
G__28030.cljs$core$IFn$_invoke$arity$1 = G__28030__1;
return G__28030;
})()
});
cljs_intro.web.slider = (function cljs_intro$web$slider(f){
var slider__$1 = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (slider__$1){
return (function (this$){
var opts = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tooltip_position","tooltip_position",-801561859),"bottom"], null));
var s = (new Slider(reagent.core.dom_node.call(null,this$),opts));
var map__28038 = f.call(null);
var map__28038__$1 = ((((!((map__28038 == null)))?((((map__28038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28038):map__28038);
var value = cljs.core.get.call(null,map__28038__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.call(null,map__28038__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__28038__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__28040_28044 = s;
G__28040_28044.setValue(value);

G__28040_28044.setAttribute("min",min);

G__28040_28044.setAttribute("max",max);


cljs.core.reset_BANG_.call(null,slider__$1,s);

return s.on("change",((function (opts,s,map__28038,map__28038__$1,value,min,max,slider__$1){
return (function (p1__28031_SHARP_){
return f.call(null,new cljs.core.Keyword(null,"value","value",305978217),p1__28031_SHARP_.newValue);
});})(opts,s,map__28038,map__28038__$1,value,min,max,slider__$1))
);
});})(slider__$1))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (slider__$1){
return (function (){
var s = cljs.core.deref.call(null,slider__$1);
var map__28041 = f.call(null);
var map__28041__$1 = ((((!((map__28041 == null)))?((((map__28041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var id = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_(s)){
var G__28043_28045 = s;
G__28043_28045.setValue(value);

G__28043_28045.setAttribute("min",min);

G__28043_28045.setAttribute("max",max);

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar","div#sidebar",-63515832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-header","h2.card-header",882066215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-bug"], null)], null),"Debug"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table.debug","div.table.debug",-1912685468),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-ep","show-ep",1537046453)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"endpoints"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-sub-geom","show-sub-geom",-1873366448)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"subgeometry"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-geom","show-geom",268006744)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"geometry"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-position","show-position",-1366942772)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"position"], null)], null),((cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_intro.web.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algo","algo",1472048382)], null)),new cljs.core.Keyword(null,"global","global",93595047)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.btn-secondary","div.row.btn-secondary",-2107051688),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.cell","div.btn-group.cell",-1410096930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"buttons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_debug_check,cljs_intro.web.debug_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"show-outline","show-outline",-1154850895)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.cell","label.cell",1745281132),"outline"], null)], null):null)], null)], null)], null);
});
cljs_intro.web.comp_menu = (function cljs_intro$web$comp_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-dark bg-inverse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null),"cljs 2D"], null)], null);
});
cljs_intro.web.comp_content = (function cljs_intro$web$comp_content(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var e = reagent.core.dom_node.call(null,this$);
var G__28055 = e;
dommy.core.set_attr_BANG_.call(null,G__28055,new cljs.core.Keyword(null,"tabindex","tabindex",338877510),"1000");

dommy.core.listen_BANG_.call(null,G__28055,new cljs.core.Keyword(null,"keydown","keydown",-629268186),((function (G__28055,e){
return (function (ev){
var k = ev.keyCode;
var shift_QMARK_ = ev.shiftKey;
var map__28056 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__28056__$1 = ((((!((map__28056 == null)))?((((map__28056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056):map__28056);
var map__28057 = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var map__28057__$1 = ((((!((map__28057 == null)))?((((map__28057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28057):map__28057);
var min_r = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_r = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vr = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__28058 = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__28058__$1 = ((((!((map__28058 == null)))?((((map__28058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28058):map__28058);
var min_a = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_a = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"max","max",61366548));
var va = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__28059 = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"apperture","apperture",-2146397483));
var map__28059__$1 = ((((!((map__28059 == null)))?((((map__28059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28059):map__28059);
var min_p = cljs.core.get.call(null,map__28059__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_p = cljs.core.get.call(null,map__28059__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vp = cljs.core.get.call(null,map__28059__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
});})(G__28055,e))
);

dommy.core.listen_BANG_.call(null,G__28055,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),((function (G__28055,e){
return (function (ev){
return e.focus();
});})(G__28055,e))
);

return G__28055;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#rendering","div#rendering",-1328632519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-text","div.card-text",1661912080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#target","canvas#target",457915941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"640px",new cljs.core.Keyword(null,"height","height",1025178622),"360px"], null)], null)], null)], null)], null);
})], null));
});
cljs_intro.web.comp_view = (function cljs_intro$web$comp_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_menu], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-group","div.card-group",261375627),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_content], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_sidebar_control], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_sidebar_debug], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_fake], null)], null);
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var map__28101 = cljs.core.deref.call(null,cljs_intro.web.state);
var map__28101__$1 = ((((!((map__28101 == null)))?((((map__28101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);
var chan_out = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.web.comp_view], null),document.getElementById("hook"));

var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__28103 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__28103,(0),null);
var eps = cljs.core.nth.call(null,vec__28103,(1),null);
var allsegs = cljs.core.nth.call(null,vec__28103,(2),null);
var data = vec__28103;
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_global"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_spot"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"spot","spot",-1706962147)));

cljs_intro.web.listen_dom_evt.call(null,chan_out,document.getElementById("algo_pie"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"pie","pie",1530441672)));

var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__,target,context,width,height,vec__28103,drawdata,eps,allsegs,data,map__28101,map__28101__$1,chan_out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__,target,context,width,height,vec__28103,drawdata,eps,allsegs,data,map__28101,map__28101__$1,chan_out){
return (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (1))){
var inst_28104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28105 = cljs.core.partial.call(null,cljs_intro.web.change_algo,new cljs.core.Keyword(null,"global","global",93595047));
var inst_28106 = [new cljs.core.Keyword(null,"click","click",1912301393),inst_28105];
var inst_28107 = (new cljs.core.PersistentVector(null,2,(5),inst_28104,inst_28106,null));
var inst_28108 = cljs.core.async.put_BANG_.call(null,chan_out,inst_28107);
var inst_28109 = cljs_intro.web.init_game_state.call(null,(100));
var inst_28110 = true;
var inst_28111 = inst_28109;
var state_28125__$1 = (function (){var statearr_28127 = state_28125;
(statearr_28127[(7)] = inst_28111);

(statearr_28127[(8)] = inst_28110);

(statearr_28127[(9)] = inst_28108);

return statearr_28127;
})();
var statearr_28128_28138 = state_28125__$1;
(statearr_28128_28138[(2)] = null);

(statearr_28128_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (2))){
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(4),chan_out);
} else {
if((state_val_28126 === (3))){
var inst_28123 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28125__$1,inst_28123);
} else {
if((state_val_28126 === (4))){
var inst_28111 = (state_28125[(7)]);
var inst_28115 = (state_28125[(2)]);
var inst_28116 = cljs.core.nth.call(null,inst_28115,(0),null);
var inst_28117 = cljs.core.nth.call(null,inst_28115,(1),null);
var inst_28118 = inst_28117.call(null,inst_28116,inst_28111);
var inst_28119 = cljs.core.partial.call(null,cljs_intro.web.render_game,inst_28118);
var inst_28120 = window.requestAnimationFrame(inst_28119);
var inst_28110 = true;
var inst_28111__$1 = inst_28118;
var state_28125__$1 = (function (){var statearr_28129 = state_28125;
(statearr_28129[(7)] = inst_28111__$1);

(statearr_28129[(10)] = inst_28120);

(statearr_28129[(8)] = inst_28110);

return statearr_28129;
})();
var statearr_28130_28139 = state_28125__$1;
(statearr_28130_28139[(2)] = null);

(statearr_28130_28139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19366__auto__,target,context,width,height,vec__28103,drawdata,eps,allsegs,data,map__28101,map__28101__$1,chan_out))
;
return ((function (switch__19345__auto__,c__19366__auto__,target,context,width,height,vec__28103,drawdata,eps,allsegs,data,map__28101,map__28101__$1,chan_out){
return (function() {
var cljs_intro$web$init_$_state_machine__19346__auto__ = null;
var cljs_intro$web$init_$_state_machine__19346__auto____0 = (function (){
var statearr_28134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28134[(0)] = cljs_intro$web$init_$_state_machine__19346__auto__);

(statearr_28134[(1)] = (1));

return statearr_28134;
});
var cljs_intro$web$init_$_state_machine__19346__auto____1 = (function (state_28125){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_28125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e28135){if((e28135 instanceof Object)){
var ex__19349__auto__ = e28135;
var statearr_28136_28140 = state_28125;
(statearr_28136_28140[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28141 = state_28125;
state_28125 = G__28141;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__19346__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__19346__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__19346__auto____0;
cljs_intro$web$init_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__19346__auto____1;
return cljs_intro$web$init_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__,target,context,width,height,vec__28103,drawdata,eps,allsegs,data,map__28101,map__28101__$1,chan_out))
})();
var state__19368__auto__ = (function (){var statearr_28137 = f__19367__auto__.call(null);
(statearr_28137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_28137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__,target,context,width,height,vec__28103,drawdata,eps,allsegs,data,map__28101,map__28101__$1,chan_out))
);

return c__19366__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map