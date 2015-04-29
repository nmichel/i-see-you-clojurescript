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
return (function cljs_intro$web$build_dynamic_data_$_iter__6736(s__6737){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__6737__$1 = s__6737;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6737__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__6737__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__6736_$_iter__6738(s__6739){
return (new cljs.core.LazySeq(null,((function (s__6737__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function (){
var s__6739__$1 = s__6739;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6739__$1);
if(temp__4126__auto____$1){
var s__6739__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6739__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__6739__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__6741 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__6740 = (0);
while(true){
if((i__6740 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__6740);
cljs.core.chunk_append.call(null,b__6741,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__6742 = (i__6740 + (1));
i__6740 = G__6742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6741),cljs_intro$web$build_dynamic_data_$_iter__6736_$_iter__6738.call(null,cljs.core.chunk_rest.call(null,s__6739__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6741),null);
}
} else {
var sy = cljs.core.first.call(null,s__6739__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__6736_$_iter__6738.call(null,cljs.core.rest.call(null,s__6739__$2)));
}
} else {
return null;
}
break;
}
});})(s__6737__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
,null,null));
});})(s__6737__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$web$build_dynamic_data_$_iter__6736.call(null,cljs.core.rest.call(null,s__6737__$1)));
} else {
var G__6743 = cljs.core.rest.call(null,s__6737__$1);
s__6737__$1 = G__6743;
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
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__6744){
var map__6747 = p__6744;
var map__6747__$1 = ((cljs.core.seq_QMARK_.call(null,map__6747))?cljs.core.apply.call(null,cljs.core.hash_map,map__6747):map__6747);
var alpha = cljs.core.get.call(null,map__6747__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var closed = cljs.core.get.call(null,map__6747__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var data = cljs.core.get.call(null,map__6747__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var y = cljs.core.get.call(null,map__6747__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__6747__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__6747,map__6747__$1,alpha,closed,data,y,x){
return (function (p){
var vec__6748 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__6748,(0),null);
var rpy = cljs.core.nth.call(null,vec__6748,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__6747,map__6747__$1,alpha,closed,data,y,x))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__6348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6348__auto__){
return (function (){
var f__6349__auto__ = (function (){var switch__6327__auto__ = ((function (c__6348__auto__){
return (function (state_6790){
var state_val_6791 = (state_6790[(1)]);
if((state_val_6791 === (4))){
var inst_6780 = (state_6790[(2)]);
var inst_6781 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6782 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_6783 = (new cljs.core.PersistentVector(null,2,(5),inst_6781,inst_6782,null));
var inst_6784 = cljs.core.async.put_BANG_.call(null,chan_out,inst_6783);
var inst_6785 = cljs.core.async.timeout.call(null,period);
var inst_6777 = inst_6785;
var state_6790__$1 = (function (){var statearr_6792 = state_6790;
(statearr_6792[(7)] = inst_6780);

(statearr_6792[(8)] = inst_6784);

(statearr_6792[(9)] = inst_6777);

return statearr_6792;
})();
var statearr_6793_6803 = state_6790__$1;
(statearr_6793_6803[(2)] = null);

(statearr_6793_6803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6791 === (3))){
var inst_6788 = (state_6790[(2)]);
var state_6790__$1 = state_6790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6790__$1,inst_6788);
} else {
if((state_val_6791 === (2))){
var inst_6777 = (state_6790[(9)]);
var state_6790__$1 = state_6790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6790__$1,(4),inst_6777);
} else {
if((state_val_6791 === (1))){
var inst_6776 = cljs.core.async.timeout.call(null,period);
var inst_6777 = inst_6776;
var state_6790__$1 = (function (){var statearr_6794 = state_6790;
(statearr_6794[(9)] = inst_6777);

return statearr_6794;
})();
var statearr_6795_6804 = state_6790__$1;
(statearr_6795_6804[(2)] = null);

(statearr_6795_6804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6348__auto__))
;
return ((function (switch__6327__auto__,c__6348__auto__){
return (function() {
var cljs_intro$web$listen_timer_$_state_machine__6328__auto__ = null;
var cljs_intro$web$listen_timer_$_state_machine__6328__auto____0 = (function (){
var statearr_6799 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6799[(0)] = cljs_intro$web$listen_timer_$_state_machine__6328__auto__);

(statearr_6799[(1)] = (1));

return statearr_6799;
});
var cljs_intro$web$listen_timer_$_state_machine__6328__auto____1 = (function (state_6790){
while(true){
var ret_value__6329__auto__ = (function (){try{while(true){
var result__6330__auto__ = switch__6327__auto__.call(null,state_6790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6330__auto__;
}
break;
}
}catch (e6800){if((e6800 instanceof Object)){
var ex__6331__auto__ = e6800;
var statearr_6801_6805 = state_6790;
(statearr_6801_6805[(5)] = ex__6331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6806 = state_6790;
state_6790 = G__6806;
continue;
} else {
return ret_value__6329__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__6328__auto__ = function(state_6790){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__6328__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__6328__auto____1.call(this,state_6790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__6328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__6328__auto____0;
cljs_intro$web$listen_timer_$_state_machine__6328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__6328__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__6328__auto__;
})()
;})(switch__6327__auto__,c__6348__auto__))
})();
var state__6350__auto__ = (function (){var statearr_6802 = f__6349__auto__.call(null);
(statearr_6802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6348__auto__);

return statearr_6802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6350__auto__);
});})(c__6348__auto__))
);

return c__6348__auto__;
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
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__6807){
var map__6810 = p__6807;
var map__6810__$1 = ((cljs.core.seq_QMARK_.call(null,map__6810))?cljs.core.apply.call(null,cljs.core.hash_map,map__6810):map__6810);
var state = map__6810__$1;
var x = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var img = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var eps = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var context = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var vec__6811 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__6811,(0),null);
var eps__$1 = cljs.core.nth.call(null,vec__6811,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__6811,(2),null);
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var erase_color = "grey";
cljs_intro.draw.draw_rect.call(null,context,(0),(0),width,height,erase_color);

cljs_intro.draw.draw_hull_as_surfaces.call(null,context,hull);

cljs_intro.draw.draw_segments.call(null,context,segs);

return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
});
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__6812,dynamic,alpha){
var vec__6818 = p__6812;
var drawdata = cljs.core.nth.call(null,vec__6818,(0),null);
var eps = cljs.core.nth.call(null,vec__6818,(1),null);
var allsegs = cljs.core.nth.call(null,vec__6818,(2),null);
return cljs.core.reduce.call(null,((function (vec__6818,drawdata,eps,allsegs){
return (function (p__6819,p__6820){
var vec__6821 = p__6819;
var adraw = cljs.core.nth.call(null,vec__6821,(0),null);
var aeps = cljs.core.nth.call(null,vec__6821,(1),null);
var asegs = cljs.core.nth.call(null,vec__6821,(2),null);
var vec__6822 = p__6820;
var e = cljs.core.nth.call(null,vec__6822,(0),null);
var s = cljs.core.nth.call(null,vec__6822,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__6818,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,ev,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY);
});
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(ev,p__6823){
var map__6827 = p__6823;
var map__6827__$1 = ((cljs.core.seq_QMARK_.call(null,map__6827))?cljs.core.apply.call(null,cljs.core.hash_map,map__6827):map__6827);
var state = map__6827__$1;
var dist = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var r_geom = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var y = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var static$ = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var alpha = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(state);
var vec__6828 = static$;
var dd = cljs.core.nth.call(null,vec__6828,(0),null);
var de = cljs.core.nth.call(null,vec__6828,(1),null);
var ds = cljs.core.nth.call(null,vec__6828,(2),null);
var vec__6829 = cljs_intro.spot.compute_visibility_hull.call(null,o,dist,ds);
var segs = cljs.core.nth.call(null,vec__6829,(0),null);
var hull = cljs.core.nth.call(null,vec__6829,(1),null);
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),segs,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dd,de,ds], null),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(alpha + (Math.PI / (20))));
return new_state;
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__6859 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__6859,(0),null);
var eps = cljs.core.nth.call(null,vec__6859,(1),null);
var allsegs = cljs.core.nth.call(null,vec__6859,(2),null);
var data = vec__6859;
var chan_out = cljs.core.async.chan.call(null);
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

var c__6348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6348__auto__,chan_out,target,context,width,height,vec__6859,drawdata,eps,allsegs,data){
return (function (){
var f__6349__auto__ = (function (){var switch__6327__auto__ = ((function (c__6348__auto__,chan_out,target,context,width,height,vec__6859,drawdata,eps,allsegs,data){
return (function (state_6875){
var state_val_6876 = (state_6875[(1)]);
if((state_val_6876 === (4))){
var inst_6862 = (state_6875[(7)]);
var inst_6866 = (state_6875[(2)]);
var inst_6867 = cljs.core.nth.call(null,inst_6866,(0),null);
var inst_6868 = cljs.core.nth.call(null,inst_6866,(1),null);
var inst_6869 = inst_6868.call(null,inst_6867,inst_6862);
var inst_6870 = cljs_intro.web.render_game.call(null,inst_6869);
var inst_6861 = true;
var inst_6862__$1 = inst_6869;
var state_6875__$1 = (function (){var statearr_6877 = state_6875;
(statearr_6877[(8)] = inst_6861);

(statearr_6877[(7)] = inst_6862__$1);

(statearr_6877[(9)] = inst_6870);

return statearr_6877;
})();
var statearr_6878_6888 = state_6875__$1;
(statearr_6878_6888[(2)] = null);

(statearr_6878_6888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6876 === (3))){
var inst_6873 = (state_6875[(2)]);
var state_6875__$1 = state_6875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6875__$1,inst_6873);
} else {
if((state_val_6876 === (2))){
var state_6875__$1 = state_6875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6875__$1,(4),chan_out);
} else {
if((state_val_6876 === (1))){
var inst_6860 = cljs_intro.web.init_game_state.call(null,(100));
var inst_6861 = true;
var inst_6862 = inst_6860;
var state_6875__$1 = (function (){var statearr_6879 = state_6875;
(statearr_6879[(8)] = inst_6861);

(statearr_6879[(7)] = inst_6862);

return statearr_6879;
})();
var statearr_6880_6889 = state_6875__$1;
(statearr_6880_6889[(2)] = null);

(statearr_6880_6889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6348__auto__,chan_out,target,context,width,height,vec__6859,drawdata,eps,allsegs,data))
;
return ((function (switch__6327__auto__,c__6348__auto__,chan_out,target,context,width,height,vec__6859,drawdata,eps,allsegs,data){
return (function() {
var cljs_intro$web$init_$_state_machine__6328__auto__ = null;
var cljs_intro$web$init_$_state_machine__6328__auto____0 = (function (){
var statearr_6884 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6884[(0)] = cljs_intro$web$init_$_state_machine__6328__auto__);

(statearr_6884[(1)] = (1));

return statearr_6884;
});
var cljs_intro$web$init_$_state_machine__6328__auto____1 = (function (state_6875){
while(true){
var ret_value__6329__auto__ = (function (){try{while(true){
var result__6330__auto__ = switch__6327__auto__.call(null,state_6875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6330__auto__;
}
break;
}
}catch (e6885){if((e6885 instanceof Object)){
var ex__6331__auto__ = e6885;
var statearr_6886_6890 = state_6875;
(statearr_6886_6890[(5)] = ex__6331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6891 = state_6875;
state_6875 = G__6891;
continue;
} else {
return ret_value__6329__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__6328__auto__ = function(state_6875){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__6328__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__6328__auto____1.call(this,state_6875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__6328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__6328__auto____0;
cljs_intro$web$init_$_state_machine__6328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__6328__auto____1;
return cljs_intro$web$init_$_state_machine__6328__auto__;
})()
;})(switch__6327__auto__,c__6348__auto__,chan_out,target,context,width,height,vec__6859,drawdata,eps,allsegs,data))
})();
var state__6350__auto__ = (function (){var statearr_6887 = f__6349__auto__.call(null);
(statearr_6887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6348__auto__);

return statearr_6887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6350__auto__);
});})(c__6348__auto__,chan_out,target,context,width,height,vec__6859,drawdata,eps,allsegs,data))
);

return c__6348__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map