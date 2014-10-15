// Compiled by ClojureScript 0.0-2280
goog.provide('cljs_intro.web');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_intro.draw');
goog.require('cljs_intro.data');
goog.require('cljs_intro.data');
goog.require('cljs_intro.g2d');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('cljs_intro.core');
goog.require('cljs_intro.draw');
goog.require('dommy.core');
goog.require('cljs_intro.g2d');
goog.require('cljs_intro.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_intro.web.geom = cljs_intro.data.produce_empty_frame.call(null);
cljs_intro.web.build_time_dep_data = (function build_time_dep_data(a,p__9489){var map__9492 = p__9489;var map__9492__$1 = ((cljs.core.seq_QMARK_.call(null,map__9492))?cljs.core.apply.call(null,cljs.core.hash_map,map__9492):map__9492);var alpha = cljs.core.get.call(null,map__9492__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));var closed = cljs.core.get.call(null,map__9492__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));var data = cljs.core.get.call(null,map__9492__$1,new cljs.core.Keyword(null,"data","data",-232669377));var y = cljs.core.get.call(null,map__9492__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__9492__$1,new cljs.core.Keyword(null,"x","x",2099068185));return cljs_intro.core.build_one_geom_data.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,((function (map__9492,map__9492__$1,alpha,closed,data,y,x){
return (function (p){var vec__9493 = cljs_intro.g2d.rotate.call(null,p,(a + alpha));var rpx = cljs.core.nth.call(null,vec__9493,(0),null);var rpy = cljs.core.nth.call(null,vec__9493,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + rpx),(y + rpy)], null);
});})(map__9492,map__9492__$1,alpha,closed,data,y,x))
,cljs.core.partition.call(null,(2),data))))));
});
cljs_intro.web.listen_timer = (function listen_timer(chan_out,period,cb){var c__6523__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto__){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto__){
return (function (state_9533){var state_val_9534 = (state_9533[(1)]);if((state_val_9534 === (4)))
{var inst_9524 = (state_9533[(2)]);var inst_9525 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),cb];var inst_9526 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9525,null));var inst_9527 = cljs.core.async.put_BANG_.call(null,chan_out,inst_9526);var inst_9528 = cljs.core.async.timeout.call(null,period);var inst_9521 = inst_9528;var state_9533__$1 = (function (){var statearr_9535 = state_9533;(statearr_9535[(7)] = inst_9527);
(statearr_9535[(8)] = inst_9524);
(statearr_9535[(9)] = inst_9521);
return statearr_9535;
})();var statearr_9536_9546 = state_9533__$1;(statearr_9536_9546[(2)] = null);
(statearr_9536_9546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9534 === (3)))
{var inst_9531 = (state_9533[(2)]);var state_9533__$1 = state_9533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9533__$1,inst_9531);
} else
{if((state_val_9534 === (2)))
{var inst_9521 = (state_9533[(9)]);var state_9533__$1 = state_9533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9533__$1,(4),inst_9521);
} else
{if((state_val_9534 === (1)))
{var inst_9520 = cljs.core.async.timeout.call(null,period);var inst_9521 = inst_9520;var state_9533__$1 = (function (){var statearr_9537 = state_9533;(statearr_9537[(9)] = inst_9521);
return statearr_9537;
})();var statearr_9538_9547 = state_9533__$1;(statearr_9538_9547[(2)] = null);
(statearr_9538_9547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6523__auto__))
;return ((function (switch__6508__auto__,c__6523__auto__){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_9542 = [null,null,null,null,null,null,null,null,null,null];(statearr_9542[(0)] = state_machine__6509__auto__);
(statearr_9542[(1)] = (1));
return statearr_9542;
});
var state_machine__6509__auto____1 = (function (state_9533){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_9533);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e9543){if((e9543 instanceof Object))
{var ex__6512__auto__ = e9543;var statearr_9544_9548 = state_9533;(statearr_9544_9548[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9533);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9549 = state_9533;
state_9533 = G__9549;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_9533){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_9533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto__))
})();var state__6525__auto__ = (function (){var statearr_9545 = f__6524__auto__.call(null);(statearr_9545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto__);
return statearr_9545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto__))
);
return c__6523__auto__;
});
cljs_intro.web.listen_dom_evt = (function listen_dom_evt(chan_out,target,evt_type,cb){return dommy.core.listen_BANG_.call(null,target,evt_type,(function (ev){return cljs.core.async.put_BANG_.call(null,chan_out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,cb], null));
}));
});
cljs_intro.web.init_game_state = (function init_game_state(){var target = document.getElementById("target");var context = target.getContext("2d");var img = (new Image());var width = target.width;var height = target.height;var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(-20),(20),(-20),(20),(20),(-20),(20)], null);var r_geom = (function (){var iter__4269__auto__ = ((function (target,context,img,width,height,data){
return (function iter__9556(s__9557){return (new cljs.core.LazySeq(null,((function (target,context,img,width,height,data){
return (function (){var s__9557__$1 = s__9557;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9557__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var sx = cljs.core.first.call(null,xs__4624__auto__);var iterys__4265__auto__ = ((function (s__9557__$1,sx,xs__4624__auto__,temp__4126__auto__,target,context,img,width,height,data){
return (function iter__9558(s__9559){return (new cljs.core.LazySeq(null,((function (s__9557__$1,sx,xs__4624__auto__,temp__4126__auto__,target,context,img,width,height,data){
return (function (){var s__9559__$1 = s__9559;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9559__$1);if(temp__4126__auto____$1)
{var s__9559__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9559__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__9559__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__9561 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__9560 = (0);while(true){
if((i__9560 < size__4268__auto__))
{var sy = cljs.core._nth.call(null,c__4267__auto__,i__9560);cljs.core.chunk_append.call(null,b__9561,(function (){var x = ((((100) * sx) + (50)) + (30));var y = ((((100) * sy) + (30)) + (40));var a = (Math.random.call(null) * ((2) * Math.PI));return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})());
{
var G__9562 = (i__9560 + (1));
i__9560 = G__9562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9561),iter__9558.call(null,cljs.core.chunk_rest.call(null,s__9559__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9561),null);
}
} else
{var sy = cljs.core.first.call(null,s__9559__$2);return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));var y = ((((100) * sy) + (30)) + (40));var a = (Math.random.call(null) * ((2) * Math.PI));return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a], null);
})(),iter__9558.call(null,cljs.core.rest.call(null,s__9559__$2)));
}
} else
{return null;
}
break;
}
});})(s__9557__$1,sx,xs__4624__auto__,temp__4126__auto__,target,context,img,width,height,data))
,null,null));
});})(s__9557__$1,sx,xs__4624__auto__,temp__4126__auto__,target,context,img,width,height,data))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,cljs.core.range.call(null,(3))));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__9556.call(null,cljs.core.rest.call(null,s__9557__$1)));
} else
{{
var G__9563 = cljs.core.rest.call(null,s__9557__$1);
s__9557__$1 = G__9563;
continue;
}
}
} else
{return null;
}
break;
}
});})(target,context,img,width,height,data))
,null,null));
});})(target,context,img,width,height,data))
;return iter__4269__auto__.call(null,cljs.core.range.call(null,(6)));
})();img.src = "http://www.topuniversities.com/sites/qs.topuni/files/filefields/field_article_image/Top_10_Universities_in_New_York_City.jpg";
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"height","height",1025178622)],[(180),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawdata","drawdata",1759569463),new cljs.core.Keyword(null,"eps","eps",-1288776929),new cljs.core.Keyword(null,"allsegs","allsegs",-295227585)], null),cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom))),width,null,null,(0),context,(320),target,r_geom,img,height]);
});
cljs_intro.web.render_game = (function render_game(p__9564){var map__9567 = p__9564;var map__9567__$1 = ((cljs.core.seq_QMARK_.call(null,map__9567))?cljs.core.apply.call(null,cljs.core.hash_map,map__9567):map__9567);var state = map__9567__$1;var dynamic = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));var eps = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));var context = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"context","context",-830191113));var y = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"x","x",2099068185));var hull = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));var height = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"height","height",1025178622));var width = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"width","width",-384071477));var img = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"img","img",1442687358));var map__9568 = dynamic;var map__9568__$1 = ((cljs.core.seq_QMARK_.call(null,map__9568))?cljs.core.apply.call(null,cljs.core.hash_map,map__9568):map__9568);var eps__$1 = cljs.core.get.call(null,map__9568__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));var drawdata = cljs.core.get.call(null,map__9568__$1,new cljs.core.Keyword(null,"drawdata","drawdata",1759569463));var o = cljs_intro.g2d.vec2d.call(null,x,y);var erase_color = "black";cljs_intro.draw.draw_rect.call(null,context,(0),(0),width,height,erase_color);
cljs_intro.draw.draw_hull.call(null,context,x,y,hull,img);
cljs_intro.draw.draw_geometry.call(null,context,drawdata);
return cljs_intro.draw.draw_point.call(null,context,o,"lightblue");
});
cljs_intro.web.init = (function init(){var target = document.getElementById("target");var context = target.getContext("2d");var width = target.width;var height = target.height;var vec__9605 = cljs_intro.core.build_geom_data.call(null,cljs_intro.web.geom);var drawdata = cljs.core.nth.call(null,vec__9605,(0),null);var eps = cljs.core.nth.call(null,vec__9605,(1),null);var allsegs = cljs.core.nth.call(null,vec__9605,(2),null);var data = vec__9605;var chan_out = cljs.core.async.chan.call(null);cljs_intro.web.listen_dom_evt.call(null,chan_out,target,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),((function (chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data){
return (function (ev,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),ev.x,new cljs.core.Keyword(null,"y","y",-1757859776),ev.y);
});})(chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data))
);
cljs_intro.web.listen_timer.call(null,chan_out,(50),cljs.core.partial.call(null,((function (chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data){
return (function (ev,p__9606){var map__9607 = p__9606;var map__9607__$1 = ((cljs.core.seq_QMARK_.call(null,map__9607))?cljs.core.apply.call(null,cljs.core.hash_map,map__9607):map__9607);var state = map__9607__$1;var r_geom = cljs.core.get.call(null,map__9607__$1,new cljs.core.Keyword(null,"r-geom","r-geom",-1546080612));var y = cljs.core.get.call(null,map__9607__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__9607__$1,new cljs.core.Keyword(null,"x","x",2099068185));var static$ = cljs.core.get.call(null,map__9607__$1,new cljs.core.Keyword(null,"static","static",1214358571));var map__9608 = static$;var map__9608__$1 = ((cljs.core.seq_QMARK_.call(null,map__9608))?cljs.core.apply.call(null,cljs.core.hash_map,map__9608):map__9608);var allsegs__$1 = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"allsegs","allsegs",-295227585));var eps__$1 = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"eps","eps",-1288776929));var drawdata__$1 = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"drawdata","drawdata",1759569463));var o = cljs_intro.g2d.vec2d.call(null,x,y);var alpha = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(state);var vec__9609 = cljs.core.reduce.call(null,((function (map__9608,map__9608__$1,allsegs__$1,eps__$1,drawdata__$1,o,alpha,map__9607,map__9607__$1,state,r_geom,y,x,static$,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data){
return (function (p__9610,p__9611){var vec__9612 = p__9610;var adraw = cljs.core.nth.call(null,vec__9612,(0),null);var aeps = cljs.core.nth.call(null,vec__9612,(1),null);var asegs = cljs.core.nth.call(null,vec__9612,(2),null);var vec__9613 = p__9611;var e = cljs.core.nth.call(null,vec__9613,(0),null);var s = cljs.core.nth.call(null,vec__9613,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,e),cljs.core.into.call(null,aeps,e),cljs.core.into.call(null,asegs,s)], null);
});})(map__9608,map__9608__$1,allsegs__$1,eps__$1,drawdata__$1,o,alpha,map__9607,map__9607__$1,state,r_geom,y,x,static$,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawdata__$1,eps__$1,allsegs__$1], null),cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.web.build_time_dep_data,alpha),r_geom));var dd = cljs.core.nth.call(null,vec__9609,(0),null);var de = cljs.core.nth.call(null,vec__9609,(1),null);var ds = cljs.core.nth.call(null,vec__9609,(2),null);var hull = cljs_intro.core.compute_visibility_hull.call(null,de,ds,o);var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hull","hull",-957096876),hull,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"drawdata","drawdata",1759569463),dd,new cljs.core.Keyword(null,"eps","eps",-1288776929),de,new cljs.core.Keyword(null,"allsegs","allsegs",-295227585),ds),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(alpha + (Math.PI / (20))));cljs_intro.web.render_game.call(null,new_state);
return new_state;
});})(chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data))
));
var c__6523__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6523__auto__,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data){
return (function (){var f__6524__auto__ = (function (){var switch__6508__auto__ = ((function (c__6523__auto__,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data){
return (function (state_9628){var state_val_9629 = (state_9628[(1)]);if((state_val_9629 === (4)))
{var inst_9616 = (state_9628[(7)]);var inst_9620 = (state_9628[(2)]);var inst_9621 = cljs.core.nth.call(null,inst_9620,(0),null);var inst_9622 = cljs.core.nth.call(null,inst_9620,(1),null);var inst_9623 = inst_9622.call(null,inst_9621,inst_9616);var inst_9615 = true;var inst_9616__$1 = inst_9623;var state_9628__$1 = (function (){var statearr_9630 = state_9628;(statearr_9630[(8)] = inst_9615);
(statearr_9630[(7)] = inst_9616__$1);
return statearr_9630;
})();var statearr_9631_9641 = state_9628__$1;(statearr_9631_9641[(2)] = null);
(statearr_9631_9641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9629 === (3)))
{var inst_9626 = (state_9628[(2)]);var state_9628__$1 = state_9628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9628__$1,inst_9626);
} else
{if((state_val_9629 === (2)))
{var state_9628__$1 = state_9628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9628__$1,(4),chan_out);
} else
{if((state_val_9629 === (1)))
{var inst_9614 = cljs_intro.web.init_game_state.call(null);var inst_9615 = true;var inst_9616 = inst_9614;var state_9628__$1 = (function (){var statearr_9632 = state_9628;(statearr_9632[(8)] = inst_9615);
(statearr_9632[(7)] = inst_9616);
return statearr_9632;
})();var statearr_9633_9642 = state_9628__$1;(statearr_9633_9642[(2)] = null);
(statearr_9633_9642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6523__auto__,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data))
;return ((function (switch__6508__auto__,c__6523__auto__,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data){
return (function() {
var state_machine__6509__auto__ = null;
var state_machine__6509__auto____0 = (function (){var statearr_9637 = [null,null,null,null,null,null,null,null,null];(statearr_9637[(0)] = state_machine__6509__auto__);
(statearr_9637[(1)] = (1));
return statearr_9637;
});
var state_machine__6509__auto____1 = (function (state_9628){while(true){
var ret_value__6510__auto__ = (function (){try{while(true){
var result__6511__auto__ = switch__6508__auto__.call(null,state_9628);if(cljs.core.keyword_identical_QMARK_.call(null,result__6511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6511__auto__;
}
break;
}
}catch (e9638){if((e9638 instanceof Object))
{var ex__6512__auto__ = e9638;var statearr_9639_9643 = state_9628;(statearr_9639_9643[(5)] = ex__6512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9644 = state_9628;
state_9628 = G__9644;
continue;
}
} else
{return ret_value__6510__auto__;
}
break;
}
});
state_machine__6509__auto__ = function(state_9628){
switch(arguments.length){
case 0:
return state_machine__6509__auto____0.call(this);
case 1:
return state_machine__6509__auto____1.call(this,state_9628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6509__auto____0;
state_machine__6509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6509__auto____1;
return state_machine__6509__auto__;
})()
;})(switch__6508__auto__,c__6523__auto__,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data))
})();var state__6525__auto__ = (function (){var statearr_9640 = f__6524__auto__.call(null);(statearr_9640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6523__auto__);
return statearr_9640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6525__auto__);
});})(c__6523__auto__,chan_out,target,context,width,height,vec__9605,drawdata,eps,allsegs,data))
);
return c__6523__auto__;
});
goog.exportSymbol('cljs_intro.web.init', cljs_intro.web.init);

//# sourceMappingURL=web.js.map