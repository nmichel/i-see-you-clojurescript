// Compiled by ClojureScript 0.0-3126 {}
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
var G__7380 = (i + (1));
var G__7381 = cljs.core.rest.call(null,p);
var G__7382 = cljs.core.rest.call(null,s);
var G__7383 = cljs.core.conj_BANG_.call(null,acc,ep);
i = G__7380;
p = G__7381;
s = G__7382;
acc = G__7383;
continue;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bep], null),cljs.core.conj.call(null,cljs.core.persistent_BANG_.call(null,acc),eep));
}
break;
}
});
cljs_intro.global.process_one_endpoint = (function cljs_intro$global$process_one_endpoint(p__7384,segments,o){
var map__7387 = p__7384;
var map__7387__$1 = ((cljs.core.seq_QMARK_.call(null,map__7387))?cljs.core.apply.call(null,cljs.core.hash_map,map__7387):map__7387);
var ep = map__7387__$1;
var point = cljs.core.get.call(null,map__7387__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var ray = cljs_intro.g2d.ray.call(null,o,point);
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);
var vec__7388 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var c = cljs.core.nth.call(null,vec__7388,(0),null);
var cols = vec__7388;
var classif = cljs_intro.core.classify_endpoint.call(null,ray,ep);
if(cljs.core.empty_QMARK_.call(null,cols)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"white"], null)], null);
} else {
if((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),"black"], null)], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"cross","cross",194557789))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"yellow"], null)], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"in","in",-1531184865))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"blue"], null)], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"out","out",-910545517))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),"blue"], null)], null);
} else {
return null;
}
}
}
}
}
});
cljs_intro.global.process_many_endpoint = (function cljs_intro$global$process_many_endpoint(p__7390,segments,o){
var vec__7401 = p__7390;
var map__7402 = cljs.core.nth.call(null,vec__7401,(0),null);
var map__7402__$1 = ((cljs.core.seq_QMARK_.call(null,map__7402))?cljs.core.apply.call(null,cljs.core.hash_map,map__7402):map__7402);
var point = cljs.core.get.call(null,map__7402__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var eps = vec__7401;
var ray = cljs_intro.g2d.ray.call(null,o,point);
var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__7401,map__7402,map__7402__$1,point,eps){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__7401,map__7402,map__7402__$1,point,eps))
,eps);
var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__7401,map__7402,map__7402__$1,point,eps){
return (function (p1__7389_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__7389_SHARP_,(0)));
});})(ray,eps_with_classif,vec__7401,map__7402,map__7402__$1,point,eps))
,eps_with_classif);
if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear)){
return cljs.core.PersistentVector.EMPTY;
} else {
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);
var vec__7403 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var col = cljs.core.nth.call(null,vec__7403,(0),null);
var cols = vec__7403;
var vec__7404 = cljs.core.first.call(null,eps_wo_first_collinear);
var c1 = cljs.core.nth.call(null,vec__7404,(0),null);
var ep1 = cljs.core.nth.call(null,vec__7404,(1),null);
var e1 = vec__7404;
if((!((col == null))) && ((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(col) < (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col),"black"], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"white"], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1)){
var vec__7405 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__7403,col,cols,vec__7404,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__7401,map__7402,map__7402__$1,point,eps){
return (function (p__7406){
var vec__7407 = p__7406;
var c2 = cljs.core.nth.call(null,vec__7407,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__7403,col,cols,vec__7404,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__7401,map__7402,map__7402__$1,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__7405,(0),null);
var p2 = cljs.core.nth.call(null,vec__7405,(1),null);
if((c2 == null)){
if((col == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"white"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col),"blue"], null)], null);

}
} else {
if((col == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2),"blue"], null)], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(col) < r2))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col):new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,"blue"], null)], null);

}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c1)){
var vec__7408 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tested_segs,vec__7403,col,cols,vec__7404,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__7401,map__7402,map__7402__$1,point,eps){
return (function (p__7409){
var vec__7410 = p__7409;
var c2 = cljs.core.nth.call(null,vec__7410,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(tested_segs,vec__7403,col,cols,vec__7404,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__7401,map__7402,map__7402__$1,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__7408,(0),null);
var p2 = cljs.core.nth.call(null,vec__7408,(1),null);
if((c2 == null)){
if((col == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"white"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"blue"], null)], null);

}
} else {
if((col == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"blue"], null)], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(col) < r2))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(col):new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(ep1),"blue"], null)], null);

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
cljs_intro.global.compute_visibility_hull = (function cljs_intro$global$compute_visibility_hull(o,eps,segments){
return cljs.core.reduce.call(null,(function (acc,p__7414){
var vec__7415 = p__7414;
var angle = cljs.core.nth.call(null,vec__7415,(0),null);
var vec__7416 = cljs.core.nth.call(null,vec__7415,(1),null);
var ep = cljs.core.nth.call(null,vec__7416,(0),null);
var eps__$1 = vec__7416;
return cljs.core.into.call(null,acc,((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,eps__$1)))?cljs_intro.global.process_one_endpoint.call(null,ep,segments,o):cljs_intro.global.process_many_endpoint.call(null,eps__$1,segments,o)
));
}),cljs.core.PersistentVector.EMPTY,cljs_intro.core.group_endpoints_by_angle.call(null,cljs_intro.core.sort_endpoints_by_angle.call(null,o,eps)));
});

//# sourceMappingURL=global.js.map