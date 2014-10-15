// Compiled by ClojureScript 0.0-2280
goog.provide('cljs_intro.core');
goog.require('cljs.core');
goog.require('cljs_intro.g2d');
goog.require('cljs_intro.g2d');
cljs_intro.core.coord_list_to_point_list = (function coord_list_to_point_list(data){return cljs.core.map.call(null,(function (p__5196){var vec__5197 = p__5196;var x = cljs.core.nth.call(null,vec__5197,(0),null);var y = cljs.core.nth.call(null,vec__5197,(1),null);return cljs_intro.g2d.vec2d.call(null,x,y);
}),cljs.core.partition.call(null,(2),data));
});
cljs_intro.core.build_segment_lists = (function build_segment_lists(points,closed){var pcnt = cljs.core.count.call(null,points);var scnt = (cljs.core.truth_(closed)?pcnt:(pcnt - (1)));var pset = (cljs.core.truth_(closed)?cljs.core.cycle.call(null,points):points);var pairs = cljs.core.take.call(null,scnt,cljs.core.partition.call(null,(2),(1),pset));return cljs.core.map.call(null,((function (pcnt,scnt,pset,pairs){
return (function (p__5200){var vec__5201 = p__5200;var a = cljs.core.nth.call(null,vec__5201,(0),null);var b = cljs.core.nth.call(null,vec__5201,(1),null);return cljs_intro.g2d.segment.call(null,a,b);
});})(pcnt,scnt,pset,pairs))
,pairs);
});
cljs_intro.core.build_begin_endpoint = (function build_begin_endpoint(points,segments,closed){return cljs_intro.g2d.endpoint.call(null,cljs.core.first.call(null,points),(cljs.core.truth_(closed)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,segments),cljs.core.first.call(null,segments)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,segments)], null)));
});
cljs_intro.core.build_end_endpoint = (function build_end_endpoint(points,segments,closed){return cljs_intro.g2d.endpoint.call(null,cljs.core.last.call(null,points),(cljs.core.truth_(closed)?(function (){var rev = cljs.core.reverse.call(null,segments);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,rev),cljs.core.first.call(null,rev)], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,segments)], null)));
});
cljs_intro.core.build_endpoint_list = (function build_endpoint_list(points,segments,closed){var cnt = cljs.core.count.call(null,points);var bep = cljs_intro.core.build_begin_endpoint.call(null,points,segments,closed);var eep = cljs_intro.core.build_end_endpoint.call(null,points,segments,closed);var i = (0);var p = cljs.core.rest.call(null,points);var s = segments;var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if((i < (cnt - (2))))
{var ep = cljs_intro.g2d.endpoint.call(null,cljs.core.first.call(null,p),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,s),cljs.core.second.call(null,s)], null));{
var G__5202 = (i + (1));
var G__5203 = cljs.core.rest.call(null,p);
var G__5204 = cljs.core.rest.call(null,s);
var G__5205 = cljs.core.conj_BANG_.call(null,acc,ep);
i = G__5202;
p = G__5203;
s = G__5204;
acc = G__5205;
continue;
}
} else
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bep], null),cljs.core.conj.call(null,cljs.core.persistent_BANG_.call(null,acc),eep));
}
break;
}
});
cljs_intro.core.build_one_geom_data = (function build_one_geom_data(p__5206){var map__5208 = p__5206;var map__5208__$1 = ((cljs.core.seq_QMARK_.call(null,map__5208))?cljs.core.apply.call(null,cljs.core.hash_map,map__5208):map__5208);var closed = cljs.core.get.call(null,map__5208__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));var data = cljs.core.get.call(null,map__5208__$1,new cljs.core.Keyword(null,"data","data",-232669377));var points = cljs.core.vec.call(null,cljs_intro.core.coord_list_to_point_list.call(null,data));var segments = cljs.core.vec.call(null,cljs_intro.core.build_segment_lists.call(null,points,closed));var eps = cljs_intro.core.build_endpoint_list.call(null,points,segments,closed);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eps,segments], null);
});
cljs_intro.core.build_geom_data = (function build_geom_data(data){return cljs.core.reduce.call(null,(function (p__5212,g){var vec__5213 = p__5212;var adraw = cljs.core.nth.call(null,vec__5213,(0),null);var aeps = cljs.core.nth.call(null,vec__5213,(1),null);var asegs = cljs.core.nth.call(null,vec__5213,(2),null);var vec__5214 = cljs_intro.core.build_one_geom_data.call(null,g);var eps = cljs.core.nth.call(null,vec__5214,(0),null);var segs = cljs.core.nth.call(null,vec__5214,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,eps),cljs.core.into.call(null,aeps,eps),cljs.core.into.call(null,asegs,segs)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),data);
});
cljs_intro.core.find_other_end = (function find_other_end(p__5215,p){var map__5217 = p__5215;var map__5217__$1 = ((cljs.core.seq_QMARK_.call(null,map__5217))?cljs.core.apply.call(null,cljs.core.hash_map,map__5217):map__5217);var b = cljs.core.get.call(null,map__5217__$1,new cljs.core.Keyword(null,"b","b",1482224470));var a = cljs.core.get.call(null,map__5217__$1,new cljs.core.Keyword(null,"a","a",-2123407586));if((a === p))
{return b;
} else
{if((b === p))
{return a;
} else
{return null;
}
}
});
cljs_intro.core.sort_endpoints_by_angle = (function sort_endpoints_by_angle(eps,o){return cljs.core.sort.call(null,cljs.core.comp.call(null,(function (p__5226,p__5227){var vec__5228 = p__5226;var map__5229 = cljs.core.nth.call(null,vec__5228,(0),null);var map__5229__$1 = ((cljs.core.seq_QMARK_.call(null,map__5229))?cljs.core.apply.call(null,cljs.core.hash_map,map__5229):map__5229);var ra = cljs.core.get.call(null,map__5229__$1,new cljs.core.Keyword(null,"r","r",-471384190));var ta = cljs.core.get.call(null,map__5229__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));var epa = cljs.core.nth.call(null,vec__5228,(1),null);var vec__5230 = p__5227;var map__5231 = cljs.core.nth.call(null,vec__5230,(0),null);var map__5231__$1 = ((cljs.core.seq_QMARK_.call(null,map__5231))?cljs.core.apply.call(null,cljs.core.hash_map,map__5231):map__5231);var rb = cljs.core.get.call(null,map__5231__$1,new cljs.core.Keyword(null,"r","r",-471384190));var tb = cljs.core.get.call(null,map__5231__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));var epb = cljs.core.nth.call(null,vec__5230,(1),null);if((ta === tb))
{return (ra <= rb);
} else
{if((ta <= tb))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return false;
} else
{return null;
}
}
}
})),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,p__5232){var map__5233 = p__5232;var map__5233__$1 = ((cljs.core.seq_QMARK_.call(null,map__5233))?cljs.core.apply.call(null,cljs.core.hash_map,map__5233):map__5233);var ep = map__5233__$1;var p = cljs.core.get.call(null,map__5233__$1,new cljs.core.Keyword(null,"point","point",1813198264));var polar = cljs_intro.g2d.__GT_polar.call(null,cljs_intro.g2d.minus.call(null,p,o));return cljs.core.conj_BANG_.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [polar,ep], null));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),eps)));
});
cljs_intro.core.compute_ray_segments_intersections = (function compute_ray_segments_intersections(ray,segments){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.reduce.call(null,(function (acc,s){var i = cljs_intro.g2d.intersection.call(null,ray,s);if(cljs.core._EQ_.call(null,i,null))
{return acc;
} else
{return cljs.core.conj.call(null,acc,i);
}
}),cljs.core.PersistentVector.EMPTY,segments));
});
cljs_intro.core.is_segment_bearing_endpoint = (function is_segment_bearing_endpoint(seg,ep){return cljs.core.some.call(null,(function (p1__5234_SHARP_){return (p1__5234_SHARP_ === seg);
}),new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep));
});
cljs_intro.core.is_segment_bearing_some_endpoints = (function is_segment_bearing_some_endpoints(eps,seg){return cljs.core.some.call(null,cljs.core.partial.call(null,cljs_intro.core.is_segment_bearing_endpoint,seg),eps);
});
cljs_intro.core.compute_non_bearing_segments_list = (function compute_non_bearing_segments_list(eps,segs){return cljs.core.filter.call(null,(function (p1__5235_SHARP_){return cljs.core.not.call(null,cljs_intro.core.is_segment_bearing_some_endpoints.call(null,eps,p1__5235_SHARP_));
}),segs);
});
cljs_intro.core.classify_final_endpoint = (function classify_final_endpoint(ray,p__5236){var map__5239 = p__5236;var map__5239__$1 = ((cljs.core.seq_QMARK_.call(null,map__5239))?cljs.core.apply.call(null,cljs.core.hash_map,map__5239):map__5239);var segments = cljs.core.get.call(null,map__5239__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));var point = cljs.core.get.call(null,map__5239__$1,new cljs.core.Keyword(null,"point","point",1813198264));var vec__5240 = segments;var s = cljs.core.nth.call(null,vec__5240,(0),null);var o = cljs_intro.core.find_other_end.call(null,s,point);var d = cljs_intro.g2d.distance.call(null,ray,o);if(cljs.core._EQ_.call(null,(0),d))
{return new cljs.core.Keyword(null,"collinear","collinear",1159767033);
} else
{if(((0) > d))
{return new cljs.core.Keyword(null,"out","out",-910545517);
} else
{if(((0) < d))
{return new cljs.core.Keyword(null,"in","in",-1531184865);
} else
{return null;
}
}
}
});
cljs_intro.core.classify_internal_endpoint = (function classify_internal_endpoint(ray,p__5241){var map__5244 = p__5241;var map__5244__$1 = ((cljs.core.seq_QMARK_.call(null,map__5244))?cljs.core.apply.call(null,cljs.core.hash_map,map__5244):map__5244);var segments = cljs.core.get.call(null,map__5244__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));var point = cljs.core.get.call(null,map__5244__$1,new cljs.core.Keyword(null,"point","point",1813198264));var vec__5245 = segments;var s1 = cljs.core.nth.call(null,vec__5245,(0),null);var s2 = cljs.core.nth.call(null,vec__5245,(1),null);var o1 = cljs_intro.core.find_other_end.call(null,s1,point);var o2 = cljs_intro.core.find_other_end.call(null,s2,point);var d1 = cljs_intro.g2d.distance.call(null,ray,o1);var d2 = cljs_intro.g2d.distance.call(null,ray,o2);if((cljs.core._EQ_.call(null,(0),d1)) && (cljs.core._EQ_.call(null,(0),d2)))
{return new cljs.core.Keyword(null,"collinear","collinear",1159767033);
} else
{if(((d1 * d2) < (0)))
{return new cljs.core.Keyword(null,"cross","cross",194557789);
} else
{if((((0) > d1)) || (((0) > d2)))
{return new cljs.core.Keyword(null,"out","out",-910545517);
} else
{if((((0) < d1)) || (((0) < d2)))
{return new cljs.core.Keyword(null,"in","in",-1531184865);
} else
{return null;
}
}
}
}
});
cljs_intro.core.classify_endpoint = (function classify_endpoint(ray,p__5246){var map__5248 = p__5246;var map__5248__$1 = ((cljs.core.seq_QMARK_.call(null,map__5248))?cljs.core.apply.call(null,cljs.core.hash_map,map__5248):map__5248);var ep = map__5248__$1;var segments = cljs.core.get.call(null,map__5248__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments)))
{return cljs_intro.core.classify_final_endpoint.call(null,ray,ep);
} else
{return cljs_intro.core.classify_internal_endpoint.call(null,ray,ep);
}
});
cljs_intro.core.process_one_endpoint = (function process_one_endpoint(p__5249,segments,o){var map__5252 = p__5249;var map__5252__$1 = ((cljs.core.seq_QMARK_.call(null,map__5252))?cljs.core.apply.call(null,cljs.core.hash_map,map__5252):map__5252);var ep = map__5252__$1;var point = cljs.core.get.call(null,map__5252__$1,new cljs.core.Keyword(null,"point","point",1813198264));var ray = cljs_intro.g2d.ray.call(null,o,point);var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);var vec__5253 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);var c = cljs.core.nth.call(null,vec__5253,(0),null);var cols = vec__5253;var classif = cljs_intro.core.classify_endpoint.call(null,ray,ep);if(cljs.core.empty_QMARK_.call(null,cols))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"white"], null)], null);
} else
{if((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),"black"], null)], null);
} else
{if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"cross","cross",194557789)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"yellow"], null)], null);
} else
{if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"in","in",-1531184865)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"blue"], null)], null);
} else
{if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"out","out",-910545517)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),"blue"], null)], null);
} else
{return null;
}
}
}
}
}
});
cljs_intro.core.process_many_endpoint = (function process_many_endpoint(p__5255,segments,o){var vec__5266 = p__5255;var map__5267 = cljs.core.nth.call(null,vec__5266,(0),null);var map__5267__$1 = ((cljs.core.seq_QMARK_.call(null,map__5267))?cljs.core.apply.call(null,cljs.core.hash_map,map__5267):map__5267);var point = cljs.core.get.call(null,map__5267__$1,new cljs.core.Keyword(null,"point","point",1813198264));var eps = vec__5266;var ray = cljs_intro.g2d.ray.call(null,o,point);var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__5266,map__5267,map__5267__$1,point,eps){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__5266,map__5267,map__5267__$1,point,eps))
,eps);var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__5266,map__5267,map__5267__$1,point,eps){
return (function (p1__5254_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__5254_SHARP_,(0)));
});})(ray,eps_with_classif,vec__5266,map__5267,map__5267__$1,point,eps))
,eps_with_classif);if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);var vec__5268 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);var col = cljs.core.nth.call(null,vec__5268,(0),null);var cols = vec__5268;var vec__5269 = cljs.core.first.call(null,eps_wo_first_collinear);var c1 = cljs.core.nth.call(null,vec__5269,(0),null);var ep1 = cljs.core.nth.call(null,vec__5269,(1),null);var e1 = vec__5269;if((!((col == null))) && ((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(col) < (1))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col),"black"], null)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"white"], null)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1))
{var vec__5270 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__5268,col,cols,vec__5269,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5266,map__5267,map__5267__$1,point,eps){
return (function (p__5271){var vec__5272 = p__5271;var c2 = cljs.core.nth.call(null,vec__5272,(0),null);return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__5268,col,cols,vec__5269,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5266,map__5267,map__5267__$1,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));var c2 = cljs.core.nth.call(null,vec__5270,(0),null);var p2 = cljs.core.nth.call(null,vec__5270,(1),null);if((c2 == null))
{if((col == null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"white"], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col),"blue"], null)], null);
} else
{return null;
}
}
} else
{if((col == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2),"blue"], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));var p = (((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(col) < r2))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col):new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,"blue"], null)], null);
} else
{return null;
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c1))
{var vec__5273 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__5268,col,cols,vec__5269,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5266,map__5267,map__5267__$1,point,eps){
return (function (p__5274){var vec__5275 = p__5274;var c2 = cljs.core.nth.call(null,vec__5275,(0),null);return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__5268,col,cols,vec__5269,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5266,map__5267,map__5267__$1,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));var c2 = cljs.core.nth.call(null,vec__5273,(0),null);var p2 = cljs.core.nth.call(null,vec__5273,(1),null);if((c2 == null))
{if((col == null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"white"], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"blue"], null)], null);
} else
{return null;
}
}
} else
{if((col == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"blue"], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));var p = (((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(col) < r2))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col):new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"blue"], null)], null);
} else
{return null;
}
}
}
} else
{return null;
}
}
}
}
} else
{return null;
}
}
});
cljs_intro.core.group_endpoints_by_angle = (function group_endpoints_by_angle(p__5276){var vec__5286 = p__5276;var vec__5287 = cljs.core.nth.call(null,vec__5286,(0),null);var first_polar = cljs.core.nth.call(null,vec__5287,(0),null);var first_ep = cljs.core.nth.call(null,vec__5287,(1),null);var tail = cljs.core.nthnext.call(null,vec__5286,(1));return ((function (vec__5286,vec__5287,first_polar,first_ep,tail){
return (function (p__5288){var vec__5289 = p__5288;var out = cljs.core.nth.call(null,vec__5289,(0),null);var acc = cljs.core.nth.call(null,vec__5289,(1),null);return cljs.core.conj.call(null,out,acc);
});})(vec__5286,vec__5287,first_polar,first_ep,tail))
.call(null,cljs.core.reduce.call(null,((function (vec__5286,vec__5287,first_polar,first_ep,tail){
return (function (p__5290,p__5291){var vec__5292 = p__5290;var out = cljs.core.nth.call(null,vec__5292,(0),null);var vec__5293 = cljs.core.nth.call(null,vec__5292,(1),null);var current_angle = cljs.core.nth.call(null,vec__5293,(0),null);var eps_vec = cljs.core.nth.call(null,vec__5293,(1),null);var acc = vec__5293;var vec__5294 = p__5291;var next_polar = cljs.core.nth.call(null,vec__5294,(0),null);var next_ep = cljs.core.nth.call(null,vec__5294,(1),null);if(cljs.core._EQ_.call(null,current_angle,new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(next_polar)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_angle,cljs.core.conj.call(null,eps_vec,next_ep)], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,out,acc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(next_polar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_ep], null)], null)], null);
} else
{return null;
}
}
});})(vec__5286,vec__5287,first_polar,first_ep,tail))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(first_polar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_ep], null)], null)], null),tail));
});
cljs_intro.core.compute_visibility_hull = (function compute_visibility_hull(eps,segments,o){var sorted_ep = cljs_intro.core.sort_endpoints_by_angle.call(null,eps,o);var eps_by_angle = cljs_intro.core.group_endpoints_by_angle.call(null,sorted_ep);return cljs.core.reduce.call(null,((function (sorted_ep,eps_by_angle){
return (function (acc,p__5298){var vec__5299 = p__5298;var angle = cljs.core.nth.call(null,vec__5299,(0),null);var vec__5300 = cljs.core.nth.call(null,vec__5299,(1),null);var ep = cljs.core.nth.call(null,vec__5300,(0),null);var eps__$1 = vec__5300;return cljs.core.into.call(null,acc,((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,eps__$1)))?cljs_intro.core.process_one_endpoint.call(null,ep,segments,o):((new cljs.core.Keyword(null,"else","else",-1508377146))?cljs_intro.core.process_many_endpoint.call(null,eps__$1,segments,o):null)));
});})(sorted_ep,eps_by_angle))
,cljs.core.PersistentVector.EMPTY,eps_by_angle);
});

//# sourceMappingURL=core.js.map