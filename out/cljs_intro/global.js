// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.global');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
cljs_intro.global.build_begin_endpoint = (function cljs_intro$global$build_begin_endpoint(points,segments,closed){
return cljs_intro.g2d.endpoint.call(null,cljs.core.first.call(null,points),(cljs.core.truth_(closed)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,segments),cljs.core.first.call(null,segments)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,segments)], null)));
});
cljs_intro.global.build_end_endpoint = (function cljs_intro$global$build_end_endpoint(points,segments,closed){
return cljs_intro.g2d.endpoint.call(null,cljs.core.last.call(null,points),(cljs.core.truth_(closed)?(function (){var rev = cljs.core.reverse.call(null,segments);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,rev),cljs.core.first.call(null,rev)], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,segments)], null)));
});
cljs_intro.global.build_endpoint_list = (function cljs_intro$global$build_endpoint_list(points,segments,closed){
var cnt = cljs.core.count.call(null,points);
var bep = cljs_intro.global.build_begin_endpoint.call(null,points,segments,closed);
var eep = cljs_intro.global.build_end_endpoint.call(null,points,segments,closed);
var i = (0);
var p = cljs.core.rest.call(null,points);
var s = segments;
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((i < (cnt - (2)))){
var ep = cljs_intro.g2d.endpoint.call(null,cljs.core.first.call(null,p),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,s),cljs.core.second.call(null,s)], null));
var G__5515 = (i + (1));
var G__5516 = cljs.core.rest.call(null,p);
var G__5517 = cljs.core.rest.call(null,s);
var G__5518 = cljs.core.conj_BANG_.call(null,acc,ep);
i = G__5515;
p = G__5516;
s = G__5517;
acc = G__5518;
continue;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bep], null),cljs.core.conj.call(null,cljs.core.persistent_BANG_.call(null,acc),eep));
}
break;
}
});
cljs_intro.global.process_one_endpoint = (function cljs_intro$global$process_one_endpoint(o,segments,p__5519){
var map__5522 = p__5519;
var map__5522__$1 = ((cljs.core.seq_QMARK_.call(null,map__5522))?cljs.core.apply.call(null,cljs.core.hash_map,map__5522):map__5522);
var ep = map__5522__$1;
var angle = cljs.core.get.call(null,map__5522__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__5522__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var ray = cljs_intro.g2d.ray.call(null,o,point);
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);
var cols = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var classif = cljs_intro.core.classify_endpoint.call(null,ray,ep);
if(cljs.core.empty_QMARK_.call(null,cols)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
var vec__5523 = cols;
var c = cljs.core.nth.call(null,vec__5523,(0),null);
var col = cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508));
if((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"collision","collision",-201625508)),angle)], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"cross","cross",194557789))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"in","in",-1531184865))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"out","out",-910545517)),angle),cljs_intro.core.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"in","in",-1531184865))], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"out","out",-910545517))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"in","in",-1531184865)),angle)], null);
} else {
return null;
}
}
}
}
}
});
cljs_intro.global.process_many_endpoint = (function cljs_intro$global$process_many_endpoint(o,segments,p__5525){
var vec__5536 = p__5525;
var map__5537 = cljs.core.nth.call(null,vec__5536,(0),null);
var map__5537__$1 = ((cljs.core.seq_QMARK_.call(null,map__5537))?cljs.core.apply.call(null,cljs.core.hash_map,map__5537):map__5537);
var angle = cljs.core.get.call(null,map__5537__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__5537__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var eps = vec__5536;
var ray = cljs_intro.g2d.ray.call(null,o,point);
var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__5536,map__5537,map__5537__$1,angle,point,eps){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__5536,map__5537,map__5537__$1,angle,point,eps))
,eps);
var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__5536,map__5537,map__5537__$1,angle,point,eps){
return (function (p1__5524_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__5524_SHARP_,(0)));
});})(ray,eps_with_classif,vec__5536,map__5537,map__5537__$1,angle,point,eps))
,eps_with_classif);
if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear)){
return cljs.core.PersistentVector.EMPTY;
} else {
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);
var vec__5538 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var c = cljs.core.nth.call(null,vec__5538,(0),null);
var cols = vec__5538;
var vec__5539 = cljs.core.first.call(null,eps_wo_first_collinear);
var c1 = cljs.core.nth.call(null,vec__5539,(0),null);
var ep1 = cljs.core.nth.call(null,vec__5539,(1),null);
var e1 = vec__5539;
if((!((c == null))) && ((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1)){
var vec__5540 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__5538,c,cols,vec__5539,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5536,map__5537,map__5537__$1,angle,point,eps){
return (function (p__5541){
var vec__5542 = p__5541;
var c2 = cljs.core.nth.call(null,vec__5542,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__5538,c,cols,vec__5539,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5536,map__5537,map__5537__$1,angle,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__5540,(0),null);
var p2 = cljs.core.nth.call(null,vec__5540,(1),null);
if((c2 == null)){
if((c == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"in","in",-1531184865)),angle)], null);

}
} else {
if((c == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_role.call(null,p2,new cljs.core.Keyword(null,"in","in",-1531184865))], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < r2))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c):new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,p,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"in","in",-1531184865)),angle)], null);

}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c1)){
var vec__5543 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__5538,c,cols,vec__5539,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5536,map__5537,map__5537__$1,angle,point,eps){
return (function (p__5544){
var vec__5545 = p__5544;
var c2 = cljs.core.nth.call(null,vec__5545,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__5538,c,cols,vec__5539,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__5536,map__5537,map__5537__$1,angle,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__5543,(0),null);
var p2 = cljs.core.nth.call(null,vec__5543,(1),null);
if((c2 == null)){
if((c == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"in","in",-1531184865))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"out","out",-910545517)),angle),cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"in","in",-1531184865))], null);

}
} else {
if((c == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,p2,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"in","in",-1531184865))], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < r2))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c):new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,p,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"in","in",-1531184865)),angle),cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517))], null);

}
}
} else {
return null;
}
}
}
}

}
});
/**
 * Given a sequence of pairs (angle, endpoints) sorted by increasing angle, compute the sequence of endpoints defining the visibility hull.
 * 
 * For a given angle, endpoints are sorted by increasing distance from the origin.
 * 
 * Output endpoints are decorated with :role qualifier.
 * 
 * Input:
 * ((a0 (ep00 ep01 ... ep0n))
 * (a1 (ep10 ep11 ... ep1n))
 * ...
 * (am (epm0 epm1 ... epmn)))
 * 
 * Output:
 * (ep0 ep1 ... epn)
 */
cljs_intro.global.compute_hull_vertices = (function cljs_intro$global$compute_hull_vertices(o,segs,eps_by_angle){
return cljs.core.mapcat.call(null,(function (p__5548){
var vec__5549 = p__5548;
var _ = cljs.core.nth.call(null,vec__5549,(0),null);
var eps = cljs.core.nth.call(null,vec__5549,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,eps))){
return cljs_intro.global.process_one_endpoint.call(null,o,segs,cljs.core.first.call(null,eps));
} else {
return cljs_intro.global.process_many_endpoint.call(null,o,segs,eps);
}
}),eps_by_angle);
});
/**
 * Given a sequence of qualified endpoints, compute the sequence defining the visibility hull.
 * 
 * Each spitted out surface is a definition of either a triangle or an arc.
 * 
 * Input:
 * (ep0 ep1 ... epn)
 * 
 * Output:
 * (s0 s1 ... sn)
 * 
 */
cljs_intro.global.compute_hull_surfaces = (function cljs_intro$global$compute_hull_surfaces(o,eps){
if(cljs.core.empty_QMARK_.call(null,eps)){
return cljs.core.PersistentVector.EMPTY;
} else {
var pts = cljs.core.drop_while.call(null,(function (p__5557){
var map__5558 = p__5557;
var map__5558__$1 = ((cljs.core.seq_QMARK_.call(null,map__5558))?cljs.core.apply.call(null,cljs.core.hash_map,map__5558):map__5558);
var role = cljs.core.get.call(null,map__5558__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"collision","collision",-201625508));
}),cljs.core.cycle.call(null,eps));
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (pts){
return (function (p__5559,p__5560){
var vec__5561 = p__5559;
var acc = cljs.core.nth.call(null,vec__5561,(0),null);
var map__5562 = cljs.core.nth.call(null,vec__5561,(1),null);
var map__5562__$1 = ((cljs.core.seq_QMARK_.call(null,map__5562))?cljs.core.apply.call(null,cljs.core.hash_map,map__5562):map__5562);
var epa = map__5562__$1;
var a = cljs.core.get.call(null,map__5562__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__5562__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_a = cljs.core.get.call(null,map__5562__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_a = cljs.core.get.call(null,map__5562__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var map__5563 = p__5560;
var map__5563__$1 = ((cljs.core.seq_QMARK_.call(null,map__5563))?cljs.core.apply.call(null,cljs.core.hash_map,map__5563):map__5563);
var epb = map__5563__$1;
var b = cljs.core.get.call(null,map__5563__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__5563__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_b = cljs.core.get.call(null,map__5563__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_b = cljs.core.get.call(null,map__5563__$1,new cljs.core.Keyword(null,"role","role",-736691072));
if(cljs.core._EQ_.call(null,angle_a,angle_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,epb], null);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),role_b)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),role_b)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),role_b))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triangle","triangle",-1828376667),o,epa,epb], null)),epb], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,epa], null);

}
}
});})(pts))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,pts)], null),cljs.core.take.call(null,cljs.core.count.call(null,eps),cljs.core.rest.call(null,pts))));
}
});
/**
 * Compute the geometry of the visibility hull from
 * . the "light" position
 * . a set of endpoints
 * . a set of non intersecting segments, joining points from the above set
 * 
 * Return a list of [p c] where
 * . p is g2d/vec2d
 * . c is metadata associated to p
 * 
 * Point are ordered with respect to their polar coordinate.
 */
cljs_intro.global.compute_visibility_hull = (function cljs_intro$global$compute_visibility_hull(o,p__5564){
var vec__5566 = p__5564;
var _ = cljs.core.nth.call(null,vec__5566,(0),null);
var eps = cljs.core.nth.call(null,vec__5566,(1),null);
var segments = cljs.core.nth.call(null,vec__5566,(2),null);
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segments], null),cljs_intro.global.compute_hull_surfaces.call(null,o,cljs_intro.global.compute_hull_vertices.call(null,o,segments,cljs_intro.core.group_endpoints_by_angle.call(null,cljs_intro.core.sort_endpoints_by_angle.call(null,o,eps)))));
});

//# sourceMappingURL=global.js.map