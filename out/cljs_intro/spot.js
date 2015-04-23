// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.spot');
goog.require('cljs.core');
goog.require('cljs_intro.g2d');
goog.require('cljs_intro.core');
/**
 * Select segments for which absolute distance to m is lower than or equal to d
 */
cljs_intro.spot.select_segments = (function cljs_intro$spot$select_segments(segments,m,d){
return cljs.core.filter.call(null,(function (p1__10310_SHARP_){
return (d >= Math.abs.call(null,cljs_intro.g2d.distance_to_segment.call(null,p1__10310_SHARP_,m)));
}),segments);
});
/**
 * Trim segment s with respect to circle c
 */
cljs_intro.spot.trim_segment = (function cljs_intro$spot$trim_segment(p__10311,c){
var map__10314 = p__10311;
var map__10314__$1 = ((cljs.core.seq_QMARK_.call(null,map__10314))?cljs.core.apply.call(null,cljs.core.hash_map,map__10314):map__10314);
var s = map__10314__$1;
var a = cljs.core.get.call(null,map__10314__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__10314__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var vec__10315 = cljs_intro.g2d.intersection_segment_circle.call(null,c,s);
var col_QMARK_ = cljs.core.nth.call(null,vec__10315,(0),null);
var cols = cljs.core.nth.call(null,vec__10315,(1),null);
if(cljs.core.truth_(col_QMARK_)){
var ta = (((cols.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)) == null))?a:cljs_intro.g2d.stretch.call(null,s,cols.call(null,new cljs.core.Keyword(null,"t1","t1",24972444))));
var tb = (((cols.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)) == null))?b:cljs_intro.g2d.stretch.call(null,s,cols.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222))));
var ma = (((cols.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)) == null))?new cljs.core.Keyword(null,"geom","geom",1207084371):new cljs.core.Keyword(null,"inter","inter",-2036694714));
var mb = (((cols.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)) == null))?new cljs.core.Keyword(null,"geom","geom",1207084371):new cljs.core.Keyword(null,"inter","inter",-2036694714));
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"a","a",-2123407586),ta,new cljs.core.Keyword(null,"b","b",1482224470),tb,new cljs.core.Keyword(null,"ma","ma",-2131895229),ma,new cljs.core.Keyword(null,"mb","mb",1534459853),mb);
} else {
return null;
}
});
/**
 * Trim segments with respect to circle centered on m with radius d
 */
cljs_intro.spot.trim_segments = (function cljs_intro$spot$trim_segments(segments,m,d){
var c = cljs_intro.g2d.circle.call(null,m,d);
return cljs.core.map.call(null,((function (c){
return (function (p1__10316_SHARP_){
return cljs_intro.spot.trim_segment.call(null,p1__10316_SHARP_,c);
});})(c))
,segments);
});
cljs_intro.spot.qualify_endpoint_geom = (function cljs_intro$spot$qualify_endpoint_geom(ep,kind){
return cljs.core.assoc.call(null,ep,new cljs.core.Keyword(null,"geom","geom",1207084371),kind);
});
cljs_intro.spot.qualify_endpoint_role = (function cljs_intro$spot$qualify_endpoint_role(ep,kind){
return cljs.core.assoc.call(null,ep,new cljs.core.Keyword(null,"role","role",-736691072),kind);
});
cljs_intro.spot.build_endpoint_list = (function cljs_intro$spot$build_endpoint_list(segments){
return cljs.core.reduce.call(null,(function (acc,p__10319){
var map__10320 = p__10319;
var map__10320__$1 = ((cljs.core.seq_QMARK_.call(null,map__10320))?cljs.core.apply.call(null,cljs.core.hash_map,map__10320):map__10320);
var s = map__10320__$1;
var mb = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword(null,"mb","mb",1534459853));
var ma = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword(null,"ma","ma",-2131895229));
var b = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return cljs.core.conj.call(null,acc,cljs_intro.spot.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)),ma),cljs_intro.spot.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,b,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)),mb));
}),cljs.core.PersistentVector.EMPTY,segments);
});
cljs_intro.spot.merge_sorted_endpoints = (function cljs_intro$spot$merge_sorted_endpoints(eps){
var acc = cljs.core.PersistentVector.EMPTY;
var pts = eps;
while(true){
var a = cljs.core.first.call(null,pts);
var atail = cljs.core.rest.call(null,pts);
if(cljs.core.empty_QMARK_.call(null,pts)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,atail)){
return cljs.core.conj.call(null,acc,a);
} else {
var b = cljs.core.first.call(null,atail);
var btail = cljs.core.rest.call(null,atail);
if(cljs.core.not_EQ_.call(null,a.call(null,new cljs.core.Keyword(null,"point","point",1813198264)),b.call(null,new cljs.core.Keyword(null,"point","point",1813198264)))){
var G__10327 = cljs.core.conj.call(null,acc,a);
var G__10328 = atail;
acc = G__10327;
pts = G__10328;
continue;
} else {
var map__10324 = a;
var map__10324__$1 = ((cljs.core.seq_QMARK_.call(null,map__10324))?cljs.core.apply.call(null,cljs.core.hash_map,map__10324):map__10324);
var pa = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var sas = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var map__10325 = b;
var map__10325__$1 = ((cljs.core.seq_QMARK_.call(null,map__10325))?cljs.core.apply.call(null,cljs.core.hash_map,map__10325):map__10325);
var pb = cljs.core.get.call(null,map__10325__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__10326 = cljs.core.get.call(null,map__10325__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sb = cljs.core.nth.call(null,vec__10326,(0),null);
var c = cljs_intro.core.find_other_end.call(null,sb,pb);
var sa2 = cljs_intro.g2d.segment.call(null,pa,c);
var newa = cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.conj.call(null,sas,sa2));
var G__10329 = cljs.core.conj.call(null,acc,newa);
var G__10330 = btail;
acc = G__10329;
pts = G__10330;
continue;
}

}
}
break;
}
});
cljs_intro.spot.merge_angle_sorted_endpoints = (function cljs_intro$spot$merge_angle_sorted_endpoints(eps_by_angle){
return cljs.core.map.call(null,(function (p__10333){
var vec__10334 = p__10333;
var angle = cljs.core.nth.call(null,vec__10334,(0),null);
var eps = cljs.core.nth.call(null,vec__10334,(1),null);
var merged = cljs_intro.spot.merge_sorted_endpoints.call(null,eps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle,merged], null);
}),eps_by_angle);
});
cljs_intro.spot.compute_far_point = (function cljs_intro$spot$compute_far_point(p__10335,d){
var map__10337 = p__10335;
var map__10337__$1 = ((cljs.core.seq_QMARK_.call(null,map__10337))?cljs.core.apply.call(null,cljs.core.hash_map,map__10337):map__10337);
var o = cljs.core.get.call(null,map__10337__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var p = cljs.core.get.call(null,map__10337__$1,new cljs.core.Keyword(null,"p","p",151049309));
var po = cljs_intro.g2d.minus.call(null,p,o);
var l = cljs_intro.g2d.magnitude.call(null,po);
var n = cljs_intro.g2d.scale.call(null,po,(1.0 / l));
var p__$1 = cljs_intro.g2d.plus.call(null,o,cljs_intro.g2d.scale.call(null,n,d));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),p__$1,new cljs.core.Keyword(null,"f","f",-1597136552),(d / l)], null);
});
cljs_intro.spot.process_one_endpoint = (function cljs_intro$spot$process_one_endpoint(p__10338,segments,o,dist){
var map__10341 = p__10338;
var map__10341__$1 = ((cljs.core.seq_QMARK_.call(null,map__10341))?cljs.core.apply.call(null,cljs.core.hash_map,map__10341):map__10341);
var ep = map__10341__$1;
var angle = cljs.core.get.call(null,map__10341__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__10341__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var ray = cljs_intro.g2d.ray.call(null,o,point);
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);
var vec__10342 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var c = cljs.core.nth.call(null,vec__10342,(0),null);
var cols = vec__10342;
var classif = cljs_intro.core.classify_endpoint.call(null,ray,ep);
if((!((c == null))) && ((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.spot.qualify_endpoint_role.call(null,cljs_intro.spot.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle),"black"], null)], null);
} else {
var col = ((cljs.core.empty_QMARK_.call(null,cols))?cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.spot.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs_intro.spot.compute_far_point.call(null,ray,dist)),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle):cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.spot.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle));
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"cross","cross",194557789))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.spot.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"cross","cross",194557789)),"yellow"], null)], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"in","in",-1531184865))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.spot.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"out","out",-910545517)),angle),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.spot.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"in","in",-1531184865)),"blue"], null)], null);
} else {
if(cljs.core._EQ_.call(null,classif,new cljs.core.Keyword(null,"out","out",-910545517))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.spot.qualify_endpoint_role.call(null,ep,new cljs.core.Keyword(null,"out","out",-910545517)),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.spot.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"in","in",-1531184865)),angle),"blue"], null)], null);
} else {
return null;
}
}
}
}
});
cljs_intro.spot.process_many_endpoint = (function cljs_intro$spot$process_many_endpoint(p__10344,segments,o,dist){
var vec__10355 = p__10344;
var map__10356 = cljs.core.nth.call(null,vec__10355,(0),null);
var map__10356__$1 = ((cljs.core.seq_QMARK_.call(null,map__10356))?cljs.core.apply.call(null,cljs.core.hash_map,map__10356):map__10356);
var angle = cljs.core.get.call(null,map__10356__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__10356__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var eps = vec__10355;
var ray = cljs_intro.g2d.ray.call(null,o,point);
var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__10355,map__10356,map__10356__$1,angle,point,eps){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__10355,map__10356,map__10356__$1,angle,point,eps))
,eps);
var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__10355,map__10356,map__10356__$1,angle,point,eps){
return (function (p1__10343_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__10343_SHARP_,(0)));
});})(ray,eps_with_classif,vec__10355,map__10356,map__10356__$1,angle,point,eps))
,eps_with_classif);
if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear)){
return cljs.core.PersistentVector.EMPTY;
} else {
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);
var cols = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var vec__10357 = cljs.core.first.call(null,eps_wo_first_collinear);
var c1 = cljs.core.nth.call(null,vec__10357,(0),null);
var ep1 = cljs.core.nth.call(null,vec__10357,(1),null);
var e1 = vec__10357;
var vec__10358 = ((cljs.core.empty_QMARK_.call(null,cols))?(function (){var fp = cljs_intro.spot.compute_far_point.call(null,ray,dist);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.spot.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(fp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(fp)], null);
})():(function (){var gp = cljs.core.first.call(null,cols);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.spot.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(gp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(gp)], null);
})());
var col = cljs.core.nth.call(null,vec__10358,(0),null);
var fcol = cljs.core.nth.call(null,vec__10358,(1),null);
if((fcol < (1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,"black"], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"white"], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1)){
var vec__10359 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__10358,col,fcol,tested_segs,cols,vec__10357,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__10355,map__10356,map__10356__$1,angle,point,eps){
return (function (p__10360){
var vec__10361 = p__10360;
var c2 = cljs.core.nth.call(null,vec__10361,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__10358,col,fcol,tested_segs,cols,vec__10357,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__10355,map__10356,map__10356__$1,angle,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__10359,(0),null);
var p2 = cljs.core.nth.call(null,vec__10359,(1),null);
if((c2 == null)){
if((col == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"white"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,"blue"], null)], null);

}
} else {
if((col == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,"blue"], null)], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((fcol < r2))?col:p2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,"blue"], null)], null);

}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c1)){
var vec__10362 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__10358,col,fcol,tested_segs,cols,vec__10357,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__10355,map__10356,map__10356__$1,angle,point,eps){
return (function (p__10363){
var vec__10364 = p__10363;
var c2 = cljs.core.nth.call(null,vec__10364,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__10358,col,fcol,tested_segs,cols,vec__10357,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__10355,map__10356,map__10356__$1,angle,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__10362,(0),null);
var p2 = cljs.core.nth.call(null,vec__10362,(1),null);
if((c2 == null)){
if((col == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"white"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"blue"], null)], null);

}
} else {
if((col == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"blue"], null)], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((fcol < r2))?col:p2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep1,"blue"], null)], null);

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
cljs_intro.spot.compute_visibility_hull = (function cljs_intro$spot$compute_visibility_hull(segments,o,dist){
var r = cljs_intro.spot.trim_segments.call(null,cljs_intro.spot.select_segments.call(null,segments,o,dist),o,dist);
var segs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,r);
var eps = cljs_intro.spot.build_endpoint_list.call(null,segs);
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segs], null),cljs.core.reduce.call(null,((function (r,segs,eps){
return (function (acc,p__10368){
var vec__10369 = p__10368;
var angle = cljs.core.nth.call(null,vec__10369,(0),null);
var vec__10370 = cljs.core.nth.call(null,vec__10369,(1),null);
var ep = cljs.core.nth.call(null,vec__10370,(0),null);
var eps__$1 = vec__10370;
return cljs.core.into.call(null,acc,((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,eps__$1)))?cljs_intro.spot.process_one_endpoint.call(null,ep,segs,o,dist):cljs_intro.spot.process_many_endpoint.call(null,eps__$1,segs,o,dist)
));
});})(r,segs,eps))
,cljs.core.PersistentVector.EMPTY,cljs_intro.spot.merge_angle_sorted_endpoints.call(null,cljs_intro.core.group_endpoints_by_angle.call(null,cljs_intro.core.sort_endpoints_by_angle.call(null,eps,o)))));
});

//# sourceMappingURL=spot.js.map