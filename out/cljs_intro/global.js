// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.global');
goog.require('cljs.core');
goog.require('cljs_intro.g2d');
goog.require('cljs_intro.core');
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
var G__6218 = (i + (1));
var G__6219 = cljs.core.rest.call(null,p);
var G__6220 = cljs.core.rest.call(null,s);
var G__6221 = cljs.core.conj_BANG_.call(null,acc,ep);
i = G__6218;
p = G__6219;
s = G__6220;
acc = G__6221;
continue;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bep], null),cljs.core.conj.call(null,cljs.core.persistent_BANG_.call(null,acc),eep));
}
break;
}
});
cljs_intro.global.process_one_endpoint = (function cljs_intro$global$process_one_endpoint(o,segments,p__6222){
var map__6226 = p__6222;
var map__6226__$1 = ((((!((map__6226 == null)))?((((map__6226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6226):map__6226);
var ep = map__6226__$1;
var point = cljs.core.get.call(null,map__6226__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__6226__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var ray = cljs_intro.g2d.ray.call(null,o,point);
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);
var cols = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var classif = cljs_intro.core.classify_endpoint.call(null,ray,ep);
if(cljs.core.empty_QMARK_.call(null,cols)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
var vec__6228 = cols;
var c = cljs.core.nth.call(null,vec__6228,(0),null);
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
cljs_intro.global.process_many_endpoint = (function cljs_intro$global$process_many_endpoint(o,segments,p__6230){
var vec__6242 = p__6230;
var map__6243 = cljs.core.nth.call(null,vec__6242,(0),null);
var map__6243__$1 = ((((!((map__6243 == null)))?((((map__6243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6243):map__6243);
var point = cljs.core.get.call(null,map__6243__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__6243__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var eps = vec__6242;
var ray = cljs_intro.g2d.ray.call(null,o,point);
var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__6242,map__6243,map__6243__$1,point,angle,eps){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__6242,map__6243,map__6243__$1,point,angle,eps))
,eps);
var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__6242,map__6243,map__6243__$1,point,angle,eps){
return (function (p1__6229_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__6229_SHARP_,(0)));
});})(ray,eps_with_classif,vec__6242,map__6243,map__6243__$1,point,angle,eps))
,eps_with_classif);
if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear)){
return cljs.core.PersistentVector.EMPTY;
} else {
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);
var vec__6245 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var c = cljs.core.nth.call(null,vec__6245,(0),null);
var cols = vec__6245;
var vec__6246 = cljs.core.first.call(null,eps_wo_first_collinear);
var c1 = cljs.core.nth.call(null,vec__6246,(0),null);
var ep1 = cljs.core.nth.call(null,vec__6246,(1),null);
var e1 = vec__6246;
if((!((c == null))) && ((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1)){
var vec__6247 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__6245,c,cols,vec__6246,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__6242,map__6243,map__6243__$1,point,angle,eps){
return (function (p__6248){
var vec__6249 = p__6248;
var c2 = cljs.core.nth.call(null,vec__6249,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__6245,c,cols,vec__6246,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__6242,map__6243,map__6243__$1,point,angle,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__6247,(0),null);
var p2 = cljs.core.nth.call(null,vec__6247,(1),null);
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
var vec__6250 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__6245,c,cols,vec__6246,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__6242,map__6243,map__6243__$1,point,angle,eps){
return (function (p__6251){
var vec__6252 = p__6251;
var c2 = cljs.core.nth.call(null,vec__6252,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__6245,c,cols,vec__6246,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__6242,map__6243,map__6243__$1,point,angle,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__6250,(0),null);
var p2 = cljs.core.nth.call(null,vec__6250,(1),null);
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
 *   For a given angle, endpoints are sorted by increasing distance from the origin.
 * 
 *   Output endpoints are decorated with :role qualifier.
 * 
 *   Input:
 *   ((a0 (ep00 ep01 ... ep0n))
 *   (a1 (ep10 ep11 ... ep1n))
 *   ...
 *   (am (epm0 epm1 ... epmn)))
 * 
 *   Output:
 *   (ep0 ep1 ... epn)
 */
cljs_intro.global.compute_hull_vertices = (function cljs_intro$global$compute_hull_vertices(o,segs,eps_by_angle){
return cljs.core.mapcat.call(null,(function (p__6255){
var vec__6256 = p__6255;
var _ = cljs.core.nth.call(null,vec__6256,(0),null);
var eps = cljs.core.nth.call(null,vec__6256,(1),null);
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
 *   Each spitted out surface is a definition of either a triangle or an arc.
 * 
 *   Input:
 *   (ep0 ep1 ... epn)
 * 
 *   Output:
 *   (s0 s1 ... sn)
 *   
 */
cljs_intro.global.compute_hull_surfaces = (function cljs_intro$global$compute_hull_surfaces(o,eps){
if(cljs.core.empty_QMARK_.call(null,eps)){
return cljs.core.PersistentVector.EMPTY;
} else {
var pts = cljs.core.drop_while.call(null,(function (p__6267){
var map__6268 = p__6267;
var map__6268__$1 = ((((!((map__6268 == null)))?((((map__6268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6268):map__6268);
var role = cljs.core.get.call(null,map__6268__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"collision","collision",-201625508));
}),cljs.core.cycle.call(null,eps));
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (pts){
return (function (p__6270,p__6271){
var vec__6272 = p__6270;
var acc = cljs.core.nth.call(null,vec__6272,(0),null);
var map__6273 = cljs.core.nth.call(null,vec__6272,(1),null);
var map__6273__$1 = ((((!((map__6273 == null)))?((((map__6273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6273):map__6273);
var epa = map__6273__$1;
var a = cljs.core.get.call(null,map__6273__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__6273__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_a = cljs.core.get.call(null,map__6273__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_a = cljs.core.get.call(null,map__6273__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var map__6274 = p__6271;
var map__6274__$1 = ((((!((map__6274 == null)))?((((map__6274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6274):map__6274);
var epb = map__6274__$1;
var b = cljs.core.get.call(null,map__6274__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__6274__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_b = cljs.core.get.call(null,map__6274__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_b = cljs.core.get.call(null,map__6274__$1,new cljs.core.Keyword(null,"role","role",-736691072));
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
 *    . the "light" position
 *    . a set of endpoints
 *    . a set of non intersecting segments, joining points from the above set
 * 
 *   Return a list of [p c] where
 *    . p is g2d/vec2d
 *    . c is metadata associated to p
 * 
 *   Point are ordered with respect to their polar coordinate.
 */
cljs_intro.global.compute_visibility_hull = (function cljs_intro$global$compute_visibility_hull(o,p__6277){
var vec__6279 = p__6277;
var _ = cljs.core.nth.call(null,vec__6279,(0),null);
var eps = cljs.core.nth.call(null,vec__6279,(1),null);
var segments = cljs.core.nth.call(null,vec__6279,(2),null);
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segments], null),cljs_intro.global.compute_hull_surfaces.call(null,o,cljs_intro.global.compute_hull_vertices.call(null,o,segments,cljs_intro.core.group_endpoints_by_angle.call(null,cljs_intro.core.sort_endpoints_by_angle.call(null,o,eps)))));
});

//# sourceMappingURL=global.js.map