// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_intro.g2d');
cljs_intro.core.dump_vec = (function cljs_intro$core$dump_vec(p__15024){
var map__15026 = p__15024;
var map__15026__$1 = ((cljs.core.seq_QMARK_.call(null,map__15026))?cljs.core.apply.call(null,cljs.core.hash_map,map__15026):map__15026);
var x = cljs.core.get.call(null,map__15026__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15026__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[x: ",x.toString(),", y: ",y.toString(),"]"], null));
});
cljs_intro.core.dump_segment = (function cljs_intro$core$dump_segment(p__15027){
var map__15029 = p__15027;
var map__15029__$1 = ((cljs.core.seq_QMARK_.call(null,map__15029))?cljs.core.apply.call(null,cljs.core.hash_map,map__15029):map__15029);
var a = cljs.core.get.call(null,map__15029__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__15029__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["< ",cljs_intro.core.dump_vec.call(null,a),cljs_intro.core.dump_vec.call(null,b)," >"], null));
});
cljs_intro.core.coord_list_to_point_list = (function cljs_intro$core$coord_list_to_point_list(data){
return cljs.core.map.call(null,(function (p__15032){
var vec__15033 = p__15032;
var x = cljs.core.nth.call(null,vec__15033,(0),null);
var y = cljs.core.nth.call(null,vec__15033,(1),null);
return cljs_intro.g2d.vec2d.call(null,x,y);
}),cljs.core.partition.call(null,(2),data));
});
cljs_intro.core.build_segment_lists = (function cljs_intro$core$build_segment_lists(points,closed){
var pcnt = cljs.core.count.call(null,points);
var scnt = (cljs.core.truth_(closed)?pcnt:(pcnt - (1)));
var pset = (cljs.core.truth_(closed)?cljs.core.cycle.call(null,points):points);
var pairs = cljs.core.take.call(null,scnt,cljs.core.partition.call(null,(2),(1),pset));
return cljs.core.map.call(null,((function (pcnt,scnt,pset,pairs){
return (function (p__15036){
var vec__15037 = p__15036;
var a = cljs.core.nth.call(null,vec__15037,(0),null);
var b = cljs.core.nth.call(null,vec__15037,(1),null);
return cljs_intro.g2d.segment.call(null,a,b);
});})(pcnt,scnt,pset,pairs))
,pairs);
});
cljs_intro.core.build_begin_endpoint = (function cljs_intro$core$build_begin_endpoint(points,segments,closed){
return cljs_intro.g2d.endpoint.call(null,cljs.core.first.call(null,points),(cljs.core.truth_(closed)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,segments),cljs.core.first.call(null,segments)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,segments)], null)));
});
cljs_intro.core.build_end_endpoint = (function cljs_intro$core$build_end_endpoint(points,segments,closed){
return cljs_intro.g2d.endpoint.call(null,cljs.core.last.call(null,points),(cljs.core.truth_(closed)?(function (){var rev = cljs.core.reverse.call(null,segments);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,rev),cljs.core.first.call(null,rev)], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,segments)], null)));
});
cljs_intro.core.build_endpoint_list = (function cljs_intro$core$build_endpoint_list(points,segments,closed){
var cnt = cljs.core.count.call(null,points);
var bep = cljs_intro.core.build_begin_endpoint.call(null,points,segments,closed);
var eep = cljs_intro.core.build_end_endpoint.call(null,points,segments,closed);
var i = (0);
var p = cljs.core.rest.call(null,points);
var s = segments;
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((i < (cnt - (2)))){
var ep = cljs_intro.g2d.endpoint.call(null,cljs.core.first.call(null,p),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,s),cljs.core.second.call(null,s)], null));
var G__15038 = (i + (1));
var G__15039 = cljs.core.rest.call(null,p);
var G__15040 = cljs.core.rest.call(null,s);
var G__15041 = cljs.core.conj_BANG_.call(null,acc,ep);
i = G__15038;
p = G__15039;
s = G__15040;
acc = G__15041;
continue;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bep], null),cljs.core.conj.call(null,cljs.core.persistent_BANG_.call(null,acc),eep));
}
break;
}
});
cljs_intro.core.build_one_geom_data = (function cljs_intro$core$build_one_geom_data(p__15042){
var map__15044 = p__15042;
var map__15044__$1 = ((cljs.core.seq_QMARK_.call(null,map__15044))?cljs.core.apply.call(null,cljs.core.hash_map,map__15044):map__15044);
var closed = cljs.core.get.call(null,map__15044__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var data = cljs.core.get.call(null,map__15044__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var points = cljs.core.vec.call(null,cljs_intro.core.coord_list_to_point_list.call(null,data));
var segments = cljs.core.vec.call(null,cljs_intro.core.build_segment_lists.call(null,points,closed));
var eps = cljs_intro.core.build_endpoint_list.call(null,points,segments,closed);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eps,segments], null);
});
cljs_intro.core.build_geom_data = (function cljs_intro$core$build_geom_data(data){

return cljs.core.reduce.call(null,(function (p__15048,g){
var vec__15049 = p__15048;
var adraw = cljs.core.nth.call(null,vec__15049,(0),null);
var aeps = cljs.core.nth.call(null,vec__15049,(1),null);
var asegs = cljs.core.nth.call(null,vec__15049,(2),null);
var vec__15050 = cljs_intro.core.build_one_geom_data.call(null,g);
var eps = cljs.core.nth.call(null,vec__15050,(0),null);
var segs = cljs.core.nth.call(null,vec__15050,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,eps),cljs.core.into.call(null,aeps,eps),cljs.core.into.call(null,asegs,segs)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),data);
});
cljs_intro.core.find_other_end = (function cljs_intro$core$find_other_end(p__15051,p){
var map__15053 = p__15051;
var map__15053__$1 = ((cljs.core.seq_QMARK_.call(null,map__15053))?cljs.core.apply.call(null,cljs.core.hash_map,map__15053):map__15053);
var b = cljs.core.get.call(null,map__15053__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.call(null,map__15053__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
if(cljs.core._EQ_.call(null,a,p)){
return b;
} else {
if(cljs.core._EQ_.call(null,b,p)){
return a;
} else {
return null;
}
}
});
cljs_intro.core.qualify_endpoint_angle = (function cljs_intro$core$qualify_endpoint_angle(ep,angle){
return cljs.core.assoc.call(null,ep,new cljs.core.Keyword(null,"angle","angle",1622094254),angle);
});
/**
 * Sort endpoints by increasing polar angle. If some endpoints lie on the same angle, they are
 * sorted by increasing distance to origin.
 * 
 * Each endpoint is also tagged with the angle it lies with key :angle
 */
cljs_intro.core.sort_endpoints_by_angle = (function cljs_intro$core$sort_endpoints_by_angle(eps,o){
return cljs.core.sort.call(null,cljs.core.comp.call(null,(function (p__15063,p__15064){
var vec__15065 = p__15063;
var map__15066 = cljs.core.nth.call(null,vec__15065,(0),null);
var map__15066__$1 = ((cljs.core.seq_QMARK_.call(null,map__15066))?cljs.core.apply.call(null,cljs.core.hash_map,map__15066):map__15066);
var ra = cljs.core.get.call(null,map__15066__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var ta = cljs.core.get.call(null,map__15066__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var epa = cljs.core.nth.call(null,vec__15065,(1),null);
var vec__15067 = p__15064;
var map__15068 = cljs.core.nth.call(null,vec__15067,(0),null);
var map__15068__$1 = ((cljs.core.seq_QMARK_.call(null,map__15068))?cljs.core.apply.call(null,cljs.core.hash_map,map__15068):map__15068);
var rb = cljs.core.get.call(null,map__15068__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tb = cljs.core.get.call(null,map__15068__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var epb = cljs.core.nth.call(null,vec__15067,(1),null);
if((ta === tb)){
return (ra <= rb);
} else {
if((ta <= tb)){
return true;
} else {
return false;

}
}
})),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,p__15069){
var map__15070 = p__15069;
var map__15070__$1 = ((cljs.core.seq_QMARK_.call(null,map__15070))?cljs.core.apply.call(null,cljs.core.hash_map,map__15070):map__15070);
var ep = map__15070__$1;
var p = cljs.core.get.call(null,map__15070__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__15071 = cljs_intro.g2d.__GT_polar.call(null,cljs_intro.g2d.minus.call(null,p,o));
var map__15071__$1 = ((cljs.core.seq_QMARK_.call(null,map__15071))?cljs.core.apply.call(null,cljs.core.hash_map,map__15071):map__15071);
var polar = map__15071__$1;
var angle = cljs.core.get.call(null,map__15071__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
return cljs.core.conj_BANG_.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [polar,cljs_intro.core.qualify_endpoint_angle.call(null,ep,angle)], null));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),eps)));
});
cljs_intro.core.group_endpoints_by_angle = (function cljs_intro$core$group_endpoints_by_angle(p__15072){
var vec__15082 = p__15072;
var vec__15083 = cljs.core.nth.call(null,vec__15082,(0),null);
var first_polar = cljs.core.nth.call(null,vec__15083,(0),null);
var first_ep = cljs.core.nth.call(null,vec__15083,(1),null);
var tail = cljs.core.nthnext.call(null,vec__15082,(1));

return ((function (vec__15082,vec__15083,first_polar,first_ep,tail){
return (function (p__15084){
var vec__15085 = p__15084;
var out = cljs.core.nth.call(null,vec__15085,(0),null);
var acc = cljs.core.nth.call(null,vec__15085,(1),null);
return cljs.core.conj.call(null,out,acc);
});})(vec__15082,vec__15083,first_polar,first_ep,tail))
.call(null,cljs.core.reduce.call(null,((function (vec__15082,vec__15083,first_polar,first_ep,tail){
return (function (p__15086,p__15087){
var vec__15088 = p__15086;
var out = cljs.core.nth.call(null,vec__15088,(0),null);
var vec__15089 = cljs.core.nth.call(null,vec__15088,(1),null);
var current_angle = cljs.core.nth.call(null,vec__15089,(0),null);
var eps_vec = cljs.core.nth.call(null,vec__15089,(1),null);
var acc = vec__15089;
var vec__15090 = p__15087;
var next_polar = cljs.core.nth.call(null,vec__15090,(0),null);
var next_ep = cljs.core.nth.call(null,vec__15090,(1),null);
if(cljs.core._EQ_.call(null,current_angle,new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(next_polar))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_angle,cljs.core.conj.call(null,eps_vec,next_ep)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,out,acc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(next_polar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_ep], null)], null)], null);

}
});})(vec__15082,vec__15083,first_polar,first_ep,tail))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(first_polar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_ep], null)], null)], null),tail));
});
cljs_intro.core.compute_ray_segments_intersections = (function cljs_intro$core$compute_ray_segments_intersections(ray,segments){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.reduce.call(null,(function (acc,s){
var i = cljs_intro.g2d.intersection.call(null,ray,s);
if(cljs.core._EQ_.call(null,i,null)){
return acc;
} else {
return cljs.core.conj.call(null,acc,i);
}
}),cljs.core.PersistentVector.EMPTY,segments));
});
/**
 * Return true if endpoint is at same position than one segment ends
 */
cljs_intro.core.is_segment_bearing_endpoint = (function cljs_intro$core$is_segment_bearing_endpoint(p__15091,p__15092){
var map__15095 = p__15091;
var map__15095__$1 = ((cljs.core.seq_QMARK_.call(null,map__15095))?cljs.core.apply.call(null,cljs.core.hash_map,map__15095):map__15095);
var a = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__15096 = p__15092;
var map__15096__$1 = ((cljs.core.seq_QMARK_.call(null,map__15096))?cljs.core.apply.call(null,cljs.core.hash_map,map__15096):map__15096);
var p = cljs.core.get.call(null,map__15096__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return (cljs.core._EQ_.call(null,a,p)) || (cljs.core._EQ_.call(null,b,p));
});
/**
 * Return true if seg is bearing at least one endpoint in eps
 */
cljs_intro.core.is_segment_bearing_some_endpoints = (function cljs_intro$core$is_segment_bearing_some_endpoints(eps,seg){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs_intro.core.is_segment_bearing_endpoint,seg),eps);
});
cljs_intro.core.compute_non_bearing_segments_list = (function cljs_intro$core$compute_non_bearing_segments_list(eps,segs){
return cljs.core.filter.call(null,(function (p1__15097_SHARP_){
return cljs.core.not.call(null,cljs_intro.core.is_segment_bearing_some_endpoints.call(null,eps,p1__15097_SHARP_));
}),segs);
});
cljs_intro.core.classify_final_endpoint = (function cljs_intro$core$classify_final_endpoint(ray,p__15098){
var map__15101 = p__15098;
var map__15101__$1 = ((cljs.core.seq_QMARK_.call(null,map__15101))?cljs.core.apply.call(null,cljs.core.hash_map,map__15101):map__15101);
var segments = cljs.core.get.call(null,map__15101__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var point = cljs.core.get.call(null,map__15101__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__15102 = segments;
var s = cljs.core.nth.call(null,vec__15102,(0),null);
var o = cljs_intro.core.find_other_end.call(null,s,point);
var d = cljs_intro.g2d.distance.call(null,ray,o);
if(cljs.core._EQ_.call(null,(0),d)){
return new cljs.core.Keyword(null,"collinear","collinear",1159767033);
} else {
if(((0) > d)){
return new cljs.core.Keyword(null,"in","in",-1531184865);
} else {
if(((0) < d)){
return new cljs.core.Keyword(null,"out","out",-910545517);
} else {
return null;
}
}
}
});
cljs_intro.core.classify_internal_endpoint = (function cljs_intro$core$classify_internal_endpoint(ray,p__15103){
var map__15106 = p__15103;
var map__15106__$1 = ((cljs.core.seq_QMARK_.call(null,map__15106))?cljs.core.apply.call(null,cljs.core.hash_map,map__15106):map__15106);
var segments = cljs.core.get.call(null,map__15106__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var point = cljs.core.get.call(null,map__15106__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__15107 = segments;
var s1 = cljs.core.nth.call(null,vec__15107,(0),null);
var s2 = cljs.core.nth.call(null,vec__15107,(1),null);
var o1 = cljs_intro.core.find_other_end.call(null,s1,point);
var o2 = cljs_intro.core.find_other_end.call(null,s2,point);
var d1 = cljs_intro.g2d.distance.call(null,ray,o1);
var d2 = cljs_intro.g2d.distance.call(null,ray,o2);
if((cljs.core._EQ_.call(null,(0),d1)) && (cljs.core._EQ_.call(null,(0),d2))){
return new cljs.core.Keyword(null,"collinear","collinear",1159767033);
} else {
if(((d1 * d2) < (0))){
return new cljs.core.Keyword(null,"cross","cross",194557789);
} else {
if((((0) > d1)) || (((0) > d2))){
return new cljs.core.Keyword(null,"in","in",-1531184865);
} else {
if((((0) < d1)) || (((0) < d2))){
return new cljs.core.Keyword(null,"out","out",-910545517);
} else {
return null;
}
}
}
}
});
/**
 * Classify a point depending on segments bearing it and the ray passing through it.
 * 
 * Returned classifier may be:
 * 
 * :collinear => all endpoints are on the ray
 * :cross     => one endpoint on each "side" of the ray
 * :out       => all endpoints "before" the ray
 * :in        => all endpoints "after" the ray
 * 
 */
cljs_intro.core.classify_endpoint = (function cljs_intro$core$classify_endpoint(ray,p__15108){
var map__15110 = p__15108;
var map__15110__$1 = ((cljs.core.seq_QMARK_.call(null,map__15110))?cljs.core.apply.call(null,cljs.core.hash_map,map__15110):map__15110);
var ep = map__15110__$1;
var segments = cljs.core.get.call(null,map__15110__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments))){
return cljs_intro.core.classify_final_endpoint.call(null,ray,ep);
} else {
return cljs_intro.core.classify_internal_endpoint.call(null,ray,ep);
}
});

//# sourceMappingURL=core.js.map