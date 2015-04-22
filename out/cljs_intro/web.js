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
return (function cljs_intro$web$build_dynamic_data_$_iter__21139(s__21140){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__21140__$1 = s__21140;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21140__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__21140__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function cljs_intro$web$build_dynamic_data_$_iter__21139_$_iter__21141(s__21142){
return (new cljs.core.LazySeq(null,((function (s__21140__$1,sx,xs__4624__auto__,temp__4126__auto__,data){
return (function (){
var s__21142__$1 = s__21142;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21142__$1);
if(temp__4126__auto____$1){
var s__21142__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21142__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__21142__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__21144 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__21143 = (0);
while(true){
if((i__21143 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__21143);
cljs.core.chunk_append.call(null,b__21144,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());

var G__21145 = (i__21143 + (1));
i__21143 = G__21145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21144),cljs_intro$web$build_dynamic_data_$_iter__21139_$_iter__21141.call(null,cljs.core.chunk_rest.call(null,s__21142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21144),null);
}
} else {
var sy = cljs.core.first.call(null,s__21142__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),cljs_intro$web$build_dynamic_data_$_iter__21139_$_iter__21141.call(null,cljs.core.rest.call(null,s__21142__$2)));
}
} else {
return null;
}
break;
}
});})(s__21140__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
,null,null));
});})(s__21140__$1,sx,xs__4624__auto__,temp__4126__auto__,data))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$web$build_dynamic_data_$_iter__21139.call(null,cljs.core.rest.call(null,s__21140__$1)));
} else {
var G__21146 = cljs.core.rest.call(null,s__21140__$1);
s__21140__$1 = G__21146;
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
cljs_intro.web.update_dynamic_data = (function cljs_intro$web$update_dynamic_data(a,p__21147){
var map__21150 = p__21147;
var map__21150__$1 = ((cljs.core.seq_QMARK_.call(null,map__21150))?cljs.core.apply.call(null,cljs.core.hash_map,map__21150):map__21150);
var alpha = cljs.core.get.call(null,map__21150__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var closed = cljs.core.get.call(null,map__21150__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var data = cljs.core.get.call(null,map__21150__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var y = cljs.core.get.call(null,map__21150__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__21150__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__21150,map__21150__$1,alpha,closed,data,y,x){
return (function (p){
var vec__21151 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));
var rpx = cljs.core.nth.call(null,vec__21151,(0),null);
var rpy = cljs.core.nth.call(null,vec__21151,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__21150,map__21150__$1,alpha,closed,data,y,x))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function cljs_intro$web$listen_timer(chan_out,period,cb){
var c__7107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7107__auto__){
return (function (){
var f__7108__auto__ = (function (){var switch__7086__auto__ = ((function (c__7107__auto__){
return (function (state_21193){
var state_val_21194 = (state_21193[(1)]);
if((state_val_21194 === (4))){
var inst_21183 = (state_21193[(2)]);
var inst_21184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21185 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];
var inst_21186 = (new cljs.core.PersistentVector(null,2,(5),inst_21184,inst_21185,null));
var inst_21187 = cljs.core.async.put_BANG_.call(null,chan_out,inst_21186);
var inst_21188 = cljs.core.async.timeout.call(null,period);
var inst_21180 = inst_21188;
var state_21193__$1 = (function (){var statearr_21195 = state_21193;
(statearr_21195[(7)] = inst_21183);

(statearr_21195[(8)] = inst_21180);

(statearr_21195[(9)] = inst_21187);

return statearr_21195;
})();
var statearr_21196_21206 = state_21193__$1;
(statearr_21196_21206[(2)] = null);

(statearr_21196_21206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21194 === (3))){
var inst_21191 = (state_21193[(2)]);
var state_21193__$1 = state_21193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21193__$1,inst_21191);
} else {
if((state_val_21194 === (2))){
var inst_21180 = (state_21193[(8)]);
var state_21193__$1 = state_21193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21193__$1,(4),inst_21180);
} else {
if((state_val_21194 === (1))){
var inst_21179 = cljs.core.async.timeout.call(null,period);
var inst_21180 = inst_21179;
var state_21193__$1 = (function (){var statearr_21197 = state_21193;
(statearr_21197[(8)] = inst_21180);

return statearr_21197;
})();
var statearr_21198_21207 = state_21193__$1;
(statearr_21198_21207[(2)] = null);

(statearr_21198_21207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7107__auto__))
;
return ((function (switch__7086__auto__,c__7107__auto__){
return (function() {
var cljs_intro$web$listen_timer_$_state_machine__7087__auto__ = null;
var cljs_intro$web$listen_timer_$_state_machine__7087__auto____0 = (function (){
var statearr_21202 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21202[(0)] = cljs_intro$web$listen_timer_$_state_machine__7087__auto__);

(statearr_21202[(1)] = (1));

return statearr_21202;
});
var cljs_intro$web$listen_timer_$_state_machine__7087__auto____1 = (function (state_21193){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_21193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e21203){if((e21203 instanceof Object)){
var ex__7090__auto__ = e21203;
var statearr_21204_21208 = state_21193;
(statearr_21204_21208[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21209 = state_21193;
state_21193 = G__21209;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs_intro$web$listen_timer_$_state_machine__7087__auto__ = function(state_21193){
switch(arguments.length){
case 0:
return cljs_intro$web$listen_timer_$_state_machine__7087__auto____0.call(this);
case 1:
return cljs_intro$web$listen_timer_$_state_machine__7087__auto____1.call(this,state_21193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$listen_timer_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$listen_timer_$_state_machine__7087__auto____0;
cljs_intro$web$listen_timer_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$listen_timer_$_state_machine__7087__auto____1;
return cljs_intro$web$listen_timer_$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7107__auto__))
})();
var state__7109__auto__ = (function (){var statearr_21205 = f__7108__auto__.call(null);
(statearr_21205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7107__auto__);

return statearr_21205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7109__auto__);
});})(c__7107__auto__))
);

return c__7107__auto__;
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
img.src = "http://upload.wikimedia.org/wikipedia/commons/e/ea/Selwyn_College_Old_Court%2C_Cambridge%2C_UK_-_Diliff.jpg";

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"dist","dist",-1401837144),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"height","height",1025178622)],[(180),dist,cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom),width,null,null,(0),context,(320),target,r_geom,img,height]);
});
cljs_intro.web.render_game = (function cljs_intro$web$render_game(p__21210){
var map__21213 = p__21210;
var map__21213__$1 = ((cljs.core.seq_QMARK_.call(null,map__21213))?cljs.core.apply.call(null,cljs.core.hash_map,map__21213):map__21213);
var state = map__21213__$1;
var x = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var img = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var eps = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));
var y = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segs = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var dist = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var width = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dynamic = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var hull = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var context = cljs.core.get.call(null,map__21213__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var vec__21214 = dynamic;
var drawdata = cljs.core.nth.call(null,vec__21214,(0),null);
var eps__$1 = cljs.core.nth.call(null,vec__21214,(1),null);
var _allsegs = cljs.core.nth.call(null,vec__21214,(2),null);
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var erase_color = "grey";
cljs_intro.draw.draw_rect.call(null,context,(0),(0),width,height,erase_color);

cljs_intro.draw.draw_hull_as_arc.call(null,context,x,y,hull,dist,img);

cljs_intro.draw.draw_segments.call(null,context,segs);

return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
});
cljs_intro.web.build_data = (function cljs_intro$web$build_data(p__21215,dynamic,alpha){
var vec__21221 = p__21215;
var drawdata = cljs.core.nth.call(null,vec__21221,(0),null);
var eps = cljs.core.nth.call(null,vec__21221,(1),null);
var allsegs = cljs.core.nth.call(null,vec__21221,(2),null);
return cljs.core.reduce.call(null,((function (vec__21221,drawdata,eps,allsegs){
return (function (p__21222,p__21223){
var vec__21224 = p__21222;
var adraw = cljs.core.nth.call(null,vec__21224,(0),null);
var aeps = cljs.core.nth.call(null,vec__21224,(1),null);
var asegs = cljs.core.nth.call(null,vec__21224,(2),null);
var vec__21225 = p__21223;
var e = cljs.core.nth.call(null,vec__21225,(0),null);
var s = cljs.core.nth.call(null,vec__21225,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(vec__21221,drawdata,eps,allsegs))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata,eps,allsegs], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.update_dynamic_data,alpha),dynamic));
});
cljs_intro.web.update_mouse_pos = (function cljs_intro$web$update_mouse_pos(ev,state){
return cljs_intro.web.update_visibility_hull.call(null,ev,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.x,new cljs.core.Keyword(null,"y","y",-1757859776),ev.y));
});
cljs_intro.web.update_click_pos = (function cljs_intro$web$update_click_pos(ev,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.x,new cljs.core.Keyword(null,"y","y",-1757859776),ev.y);
});
cljs_intro.web.update_visibility_hull = (function cljs_intro$web$update_visibility_hull(ev,p__21226){
var map__21230 = p__21226;
var map__21230__$1 = ((cljs.core.seq_QMARK_.call(null,map__21230))?cljs.core.apply.call(null,cljs.core.hash_map,map__21230):map__21230);
var state = map__21230__$1;
var dist = cljs.core.get.call(null,map__21230__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var r_geom = cljs.core.get.call(null,map__21230__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));
var y = cljs.core.get.call(null,map__21230__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__21230__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var static$ = cljs.core.get.call(null,map__21230__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var o = cljs_intro.g2d.vec2d.call(null,x,y);
var alpha = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(state);
var vec__21231 = static$;
var dd = cljs.core.nth.call(null,vec__21231,(0),null);
var de = cljs.core.nth.call(null,vec__21231,(1),null);
var ds = cljs.core.nth.call(null,vec__21231,(2),null);
var vec__21232 = cljs_intro.spot.compute_visibility_hull.call(null,ds,o,dist);
var segs = cljs.core.nth.call(null,vec__21232,(0),null);
var hull = cljs.core.nth.call(null,vec__21232,(1),null);
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"segs","segs",-1940299576),segs,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dd,de,ds], null),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(alpha + (Math.PI / (20))));
return new_state;
});
cljs_intro.web.init = (function cljs_intro$web$init(){
var target = document.getElementById("target");
var context = target.getContext("2d");
var width = target.width;
var height = target.height;
var vec__21262 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);
var drawdata = cljs.core.nth.call(null,vec__21262,(0),null);
var eps = cljs.core.nth.call(null,vec__21262,(1),null);
var allsegs = cljs.core.nth.call(null,vec__21262,(2),null);
var data = vec__21262;
var chan_out = cljs.core.async.chan.call(null);
cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),cljs_intro.web.update_mouse_pos);

var c__7107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7107__auto__,chan_out,target,context,width,height,vec__21262,drawdata,eps,allsegs,data){
return (function (){
var f__7108__auto__ = (function (){var switch__7086__auto__ = ((function (c__7107__auto__,chan_out,target,context,width,height,vec__21262,drawdata,eps,allsegs,data){
return (function (state_21278){
var state_val_21279 = (state_21278[(1)]);
if((state_val_21279 === (4))){
var inst_21265 = (state_21278[(7)]);
var inst_21269 = (state_21278[(2)]);
var inst_21270 = cljs.core.nth.call(null,inst_21269,(0),null);
var inst_21271 = cljs.core.nth.call(null,inst_21269,(1),null);
var inst_21272 = inst_21271.call(null,inst_21270,inst_21265);
var inst_21273 = cljs_intro.web.render_game.call(null,inst_21272);
var inst_21264 = true;
var inst_21265__$1 = inst_21272;
var state_21278__$1 = (function (){var statearr_21280 = state_21278;
(statearr_21280[(8)] = inst_21273);

(statearr_21280[(7)] = inst_21265__$1);

(statearr_21280[(9)] = inst_21264);

return statearr_21280;
})();
var statearr_21281_21291 = state_21278__$1;
(statearr_21281_21291[(2)] = null);

(statearr_21281_21291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (3))){
var inst_21276 = (state_21278[(2)]);
var state_21278__$1 = state_21278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21278__$1,inst_21276);
} else {
if((state_val_21279 === (2))){
var state_21278__$1 = state_21278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21278__$1,(4),chan_out);
} else {
if((state_val_21279 === (1))){
var inst_21263 = cljs_intro.web.init_game_state.call(null,(100));
var inst_21264 = true;
var inst_21265 = inst_21263;
var state_21278__$1 = (function (){var statearr_21282 = state_21278;
(statearr_21282[(7)] = inst_21265);

(statearr_21282[(9)] = inst_21264);

return statearr_21282;
})();
var statearr_21283_21292 = state_21278__$1;
(statearr_21283_21292[(2)] = null);

(statearr_21283_21292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7107__auto__,chan_out,target,context,width,height,vec__21262,drawdata,eps,allsegs,data))
;
return ((function (switch__7086__auto__,c__7107__auto__,chan_out,target,context,width,height,vec__21262,drawdata,eps,allsegs,data){
return (function() {
var cljs_intro$web$init_$_state_machine__7087__auto__ = null;
var cljs_intro$web$init_$_state_machine__7087__auto____0 = (function (){
var statearr_21287 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21287[(0)] = cljs_intro$web$init_$_state_machine__7087__auto__);

(statearr_21287[(1)] = (1));

return statearr_21287;
});
var cljs_intro$web$init_$_state_machine__7087__auto____1 = (function (state_21278){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_21278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e21288){if((e21288 instanceof Object)){
var ex__7090__auto__ = e21288;
var statearr_21289_21293 = state_21278;
(statearr_21289_21293[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21294 = state_21278;
state_21278 = G__21294;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs_intro$web$init_$_state_machine__7087__auto__ = function(state_21278){
switch(arguments.length){
case 0:
return cljs_intro$web$init_$_state_machine__7087__auto____0.call(this);
case 1:
return cljs_intro$web$init_$_state_machine__7087__auto____1.call(this,state_21278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$web$init_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_intro$web$init_$_state_machine__7087__auto____0;
cljs_intro$web$init_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_intro$web$init_$_state_machine__7087__auto____1;
return cljs_intro$web$init_$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7107__auto__,chan_out,target,context,width,height,vec__21262,drawdata,eps,allsegs,data))
})();
var state__7109__auto__ = (function (){var statearr_21290 = f__7108__auto__.call(null);
(statearr_21290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7107__auto__);

return statearr_21290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7109__auto__);
});})(c__7107__auto__,chan_out,target,context,width,height,vec__21262,drawdata,eps,allsegs,data))
);

return c__7107__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map