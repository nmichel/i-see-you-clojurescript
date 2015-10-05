// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.pie');
goog.require('cljs.core');
goog.require('cljs_intro.g2d');
goog.require('cljs_intro.core');
/**
 * Select segments for which absolute distance to m is lower than or equal to d
 */
cljs_intro.pie.is_segment_near_point_QMARK_ = (function cljs_intro$pie$is_segment_near_point_QMARK_(m,d,s){
var sd = Math.abs.call(null,cljs_intro.g2d.distance_to_segment.call(null,s,m));
return ((sd < d)) && ((sd > (0)));
});
/**
 * Return true if segment s is totally out of the piece of pie defined by
 * center o, direction angle alpha, and half apperture angle h.
 */
cljs_intro.pie.is_segment_outside_pie_piece_QMARK_ = (function cljs_intro$pie$is_segment_outside_pie_piece_QMARK_(o,alpha,h,p__23944){
var map__23946 = p__23944;
var map__23946__$1 = ((cljs.core.seq_QMARK_.call(null,map__23946))?cljs.core.apply.call(null,cljs.core.hash_map,map__23946):map__23946);
var s = map__23946__$1;
var a = cljs.core.get.call(null,map__23946__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__23946__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var h_PLUS_ = ((2) * h);
var ra = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,a)) - alpha)) + h)));
var rb = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,b)) - alpha)) + h)));
var minab = Math.min.call(null,ra,rb);
var maxab = Math.max.call(null,ra,rb);
if((minab < h_PLUS_)){
return false;
} else {
if((h > (Math.PI * 0.5))){
return true;
} else {
return (maxab <= (minab + Math.PI));

}
}
});
/**
 * Trim segment s with respect to circle c.
 * 
 */
cljs_intro.pie.trim_segment_by_circle = (function cljs_intro$pie$trim_segment_by_circle(c,p__23947){
var map__23950 = p__23947;
var map__23950__$1 = ((cljs.core.seq_QMARK_.call(null,map__23950))?cljs.core.apply.call(null,cljs.core.hash_map,map__23950):map__23950);
var s = map__23950__$1;
var a = cljs.core.get.call(null,map__23950__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__23950__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var vec__23951 = cljs_intro.g2d.intersection_segment_circle.call(null,c,s);
var col_QMARK_ = cljs.core.nth.call(null,vec__23951,(0),null);
var cols = cljs.core.nth.call(null,vec__23951,(1),null);
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
 * *WARN* segment should *NOT* be totally out-of-sight !
 */
cljs_intro.pie.trim_segment_by_angle = (function cljs_intro$pie$trim_segment_by_angle(o,d,alpha,h,s){
if((h < (Math.PI * 0.5))){
return cljs_intro.pie.trim_segment_by_angle_narrow.call(null,o,d,alpha,h,s);
} else {
return cljs_intro.pie.trim_segment_by_angle_wide.call(null,o,d,alpha,h,s);
}
});
/**
 * TODO
 */
cljs_intro.pie.trim_segment_by_angle_wide = (function cljs_intro$pie$trim_segment_by_angle_wide(o,d,alpha,h,p__23952){
var map__23954 = p__23952;
var map__23954__$1 = ((cljs.core.seq_QMARK_.call(null,map__23954))?cljs.core.apply.call(null,cljs.core.hash_map,map__23954):map__23954);
var s = map__23954__$1;
var a = cljs.core.get.call(null,map__23954__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__23954__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var h_PLUS_ = ((2) * h);
var ra = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,a)) - alpha)) + h)));
var rb = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,b)) - alpha)) + h)));
var minab = Math.min.call(null,ra,rb);
var maxab = Math.max.call(null,ra,rb);
var p = (((minab === ra))?a:b);
var q = (((maxab === ra))?a:b);
if((minab >= h_PLUS_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else {
if((maxab < h_PLUS_)){
if((maxab < (minab + Math.PI))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
var s1b = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha + h)));
var r1 = cljs_intro.g2d.ray.call(null,o,s1b);
var i1 = cljs_intro.g2d.intersection.call(null,r1,s);
var s2b = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha - h)));
var r2 = cljs_intro.g2d.ray.call(null,o,s2b);
var i2 = cljs_intro.g2d.intersection.call(null,r2,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.segment.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i1),q),cljs_intro.g2d.segment.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i2),p)], null);
}
} else {
if((maxab < (minab + Math.PI))){
var sb = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha + h)));
var r = cljs_intro.g2d.ray.call(null,o,sb);
var i = cljs_intro.g2d.intersection.call(null,r,s);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.segment.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i),p)], null);
} else {
var sb = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha - h)));
var r = cljs_intro.g2d.ray.call(null,o,sb);
var i = cljs_intro.g2d.intersection.call(null,r,s);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.segment.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i),p)], null);
}
}
}
});
/**
 * TODO
 */
cljs_intro.pie.trim_segment_by_angle_narrow = (function cljs_intro$pie$trim_segment_by_angle_narrow(o,d,alpha,h,p__23955){
var map__23957 = p__23955;
var map__23957__$1 = ((cljs.core.seq_QMARK_.call(null,map__23957))?cljs.core.apply.call(null,cljs.core.hash_map,map__23957):map__23957);
var s = map__23957__$1;
var a = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var h_PLUS_ = ((2) * h);
var ra = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,a)) - alpha)) + h)));
var rb = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,b)) - alpha)) + h)));
var minab = Math.min.call(null,ra,rb);
var maxab = Math.max.call(null,ra,rb);
var p = (((minab === ra))?a:b);
var q = (((maxab === ra))?a:b);
if((minab < h_PLUS_)){
if((maxab < h_PLUS_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
if((maxab < (minab + Math.PI))){
var sb = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha + h)));
var r = cljs_intro.g2d.ray.call(null,o,sb);
var i = cljs_intro.g2d.intersection.call(null,r,s);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.segment.call(null,p,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i))], null);
} else {
var sb = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha - h)));
var r = cljs_intro.g2d.ray.call(null,o,sb);
var i = cljs_intro.g2d.intersection.call(null,r,s);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.segment.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i),p)], null);

}
}
} else {
if((maxab <= (minab + Math.PI))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else {
var s1b = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha + h)));
var r1 = cljs_intro.g2d.ray.call(null,o,s1b);
var i1 = cljs_intro.g2d.intersection.call(null,r1,s);
var s2b = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,d,(alpha - h)));
var r2 = cljs_intro.g2d.ray.call(null,o,s2b);
var i2 = cljs_intro.g2d.intersection.call(null,r2,s);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.segment.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i1),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(i2))], null);
}
}
});
cljs_intro.pie.build_endpoint_list = (function cljs_intro$pie$build_endpoint_list(segments){
return cljs.core.reduce.call(null,(function (acc,p__23960){
var map__23961 = p__23960;
var map__23961__$1 = ((cljs.core.seq_QMARK_.call(null,map__23961))?cljs.core.apply.call(null,cljs.core.hash_map,map__23961):map__23961);
var s = map__23961__$1;
var mb = cljs.core.get.call(null,map__23961__$1,new cljs.core.Keyword(null,"mb","mb",1534459853));
var ma = cljs.core.get.call(null,map__23961__$1,new cljs.core.Keyword(null,"ma","ma",-2131895229));
var b = cljs.core.get.call(null,map__23961__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.call(null,map__23961__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return cljs.core.conj.call(null,acc,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)),ma),cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,b,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)),mb));
}),cljs.core.PersistentVector.EMPTY,segments);
});
/**
 * When 2 endpoints are at the same position, then melt them, an reconstruct their bearing segments.
 */
cljs_intro.pie.merge_sorted_endpoints = (function cljs_intro$pie$merge_sorted_endpoints(eps){
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
var G__23968 = cljs.core.conj.call(null,acc,a);
var G__23969 = atail;
acc = G__23968;
pts = G__23969;
continue;
} else {
var map__23965 = a;
var map__23965__$1 = ((cljs.core.seq_QMARK_.call(null,map__23965))?cljs.core.apply.call(null,cljs.core.hash_map,map__23965):map__23965);
var pa = cljs.core.get.call(null,map__23965__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var sas = cljs.core.get.call(null,map__23965__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var map__23966 = b;
var map__23966__$1 = ((cljs.core.seq_QMARK_.call(null,map__23966))?cljs.core.apply.call(null,cljs.core.hash_map,map__23966):map__23966);
var pb = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__23967 = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sb = cljs.core.nth.call(null,vec__23967,(0),null);
var c = cljs_intro.core.find_other_end.call(null,sb,pb);
var sa2 = cljs_intro.g2d.segment.call(null,pa,c);
var newa = cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.conj.call(null,sas,sa2));
var G__23970 = cljs.core.conj.call(null,acc,newa);
var G__23971 = btail;
acc = G__23970;
pts = G__23971;
continue;
}

}
}
break;
}
});
cljs_intro.pie.merge_angle_sorted_endpoints = (function cljs_intro$pie$merge_angle_sorted_endpoints(eps_by_angle){
var iter__16897__auto__ = (function cljs_intro$pie$merge_angle_sorted_endpoints_$_iter__23980(s__23981){
return (new cljs.core.LazySeq(null,(function (){
var s__23981__$1 = s__23981;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23981__$1);
if(temp__4126__auto__){
var s__23981__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23981__$2)){
var c__16895__auto__ = cljs.core.chunk_first.call(null,s__23981__$2);
var size__16896__auto__ = cljs.core.count.call(null,c__16895__auto__);
var b__23983 = cljs.core.chunk_buffer.call(null,size__16896__auto__);
if((function (){var i__23982 = (0);
while(true){
if((i__23982 < size__16896__auto__)){
var vec__23986 = cljs.core._nth.call(null,c__16895__auto__,i__23982);
var angle = cljs.core.nth.call(null,vec__23986,(0),null);
var eps = cljs.core.nth.call(null,vec__23986,(1),null);
cljs.core.chunk_append.call(null,b__23983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle,cljs_intro.pie.merge_sorted_endpoints.call(null,eps)], null));

var G__23988 = (i__23982 + (1));
i__23982 = G__23988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23983),cljs_intro$pie$merge_angle_sorted_endpoints_$_iter__23980.call(null,cljs.core.chunk_rest.call(null,s__23981__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23983),null);
}
} else {
var vec__23987 = cljs.core.first.call(null,s__23981__$2);
var angle = cljs.core.nth.call(null,vec__23987,(0),null);
var eps = cljs.core.nth.call(null,vec__23987,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle,cljs_intro.pie.merge_sorted_endpoints.call(null,eps)], null),cljs_intro$pie$merge_angle_sorted_endpoints_$_iter__23980.call(null,cljs.core.rest.call(null,s__23981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16897__auto__.call(null,eps_by_angle);
});
cljs_intro.pie.rebase_angle_sorted_endpoints = (function cljs_intro$pie$rebase_angle_sorted_endpoints(alpha,apperture,eps_by_angle){
return cljs.core.map.call(null,(function (p__23991){
var vec__23992 = p__23991;
var angle = cljs.core.nth.call(null,vec__23992,(0),null);
var eps = cljs.core.nth.call(null,vec__23992,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.__GT_0_PLUS_2pi.call(null,(cljs_intro.g2d.__GT_0_PLUS_2pi.call(null,(cljs_intro.g2d.__GT_0_PLUS_2pi.call(null,(cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,angle) - cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,alpha))) + apperture)) + 1.0E-6)),eps], null);
}),eps_by_angle);
});
cljs_intro.pie.sort_angle_sorted_endpoints = (function cljs_intro$pie$sort_angle_sorted_endpoints(eps_by_angle){
return cljs.core.sort.call(null,(function (p__23997,p__23998){
var vec__23999 = p__23997;
var a = cljs.core.nth.call(null,vec__23999,(0),null);
var _ = cljs.core.nth.call(null,vec__23999,(1),null);
var vec__24000 = p__23998;
var b = cljs.core.nth.call(null,vec__24000,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24000,(1),null);
return (a <= b);
}),eps_by_angle);
});
cljs_intro.pie.compute_far_point = (function cljs_intro$pie$compute_far_point(p__24001,d){
var map__24003 = p__24001;
var map__24003__$1 = ((cljs.core.seq_QMARK_.call(null,map__24003))?cljs.core.apply.call(null,cljs.core.hash_map,map__24003):map__24003);
var o = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var p = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"p","p",151049309));
var po = cljs_intro.g2d.minus.call(null,p,o);
var l = cljs_intro.g2d.magnitude.call(null,po);
var n = cljs_intro.g2d.scale.call(null,po,(1.0 / l));
var p__$1 = cljs_intro.g2d.plus.call(null,o,cljs_intro.g2d.scale.call(null,n,d));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),p__$1,new cljs.core.Keyword(null,"f","f",-1597136552),(d / l)], null);
});
cljs_intro.pie.process_one_endpoint = (function cljs_intro$pie$process_one_endpoint(o,dist,segments,p__24004){
var map__24007 = p__24004;
var map__24007__$1 = ((cljs.core.seq_QMARK_.call(null,map__24007))?cljs.core.apply.call(null,cljs.core.hash_map,map__24007):map__24007);
var ep = map__24007__$1;
var geom = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var angle = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var ray = cljs_intro.g2d.ray.call(null,o,point);
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);
var vec__24008 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var c = cljs.core.nth.call(null,vec__24008,(0),null);
var cols = vec__24008;
var classif = cljs_intro.core.classify_endpoint.call(null,ray,ep);
if(((c == null)) && (cljs.core._EQ_.call(null,geom,new cljs.core.Keyword(null,"inter","inter",-2036694714)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep,classif)], null);
} else {
if((!((c == null))) && ((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle)], null);
} else {
var col = ((cljs.core.empty_QMARK_.call(null,cols))?cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs_intro.pie.compute_far_point.call(null,ray,dist)),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle):cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle));
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
cljs_intro.pie.process_many_endpoint = (function cljs_intro$pie$process_many_endpoint(o,dist,segments,p__24010){
var vec__24021 = p__24010;
var map__24022 = cljs.core.nth.call(null,vec__24021,(0),null);
var map__24022__$1 = ((cljs.core.seq_QMARK_.call(null,map__24022))?cljs.core.apply.call(null,cljs.core.hash_map,map__24022):map__24022);
var angle = cljs.core.get.call(null,map__24022__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__24022__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var eps = vec__24021;
var ray = cljs_intro.g2d.ray.call(null,o,point);
var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__24021,map__24022,map__24022__$1,angle,point,eps){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__24021,map__24022,map__24022__$1,angle,point,eps))
,eps);
var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__24021,map__24022,map__24022__$1,angle,point,eps){
return (function (p1__24009_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__24009_SHARP_,(0)));
});})(ray,eps_with_classif,vec__24021,map__24022,map__24022__$1,angle,point,eps))
,eps_with_classif);
if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear)){
return cljs.core.PersistentVector.EMPTY;
} else {
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);
var cols = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var vec__24023 = cljs.core.first.call(null,eps_wo_first_collinear);
var c1 = cljs.core.nth.call(null,vec__24023,(0),null);
var ep1 = cljs.core.nth.call(null,vec__24023,(1),null);
var e1 = vec__24023;
var vec__24024 = ((cljs.core.empty_QMARK_.call(null,cols))?(function (){var fp = cljs_intro.pie.compute_far_point.call(null,ray,dist);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(fp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(fp)], null);
})():(function (){var gp = cljs.core.first.call(null,cols);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(gp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(gp)], null);
})());
var col = cljs.core.nth.call(null,vec__24024,(0),null);
var fcol = cljs.core.nth.call(null,vec__24024,(1),null);
if((fcol < (1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"collision","collision",-201625508))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1)){
var vec__24025 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__24024,col,fcol,tested_segs,cols,vec__24023,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__24021,map__24022,map__24022__$1,angle,point,eps){
return (function (p__24026){
var vec__24027 = p__24026;
var c2 = cljs.core.nth.call(null,vec__24027,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__24024,col,fcol,tested_segs,cols,vec__24023,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__24021,map__24022,map__24022__$1,angle,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__24025,(0),null);
var p2 = cljs.core.nth.call(null,vec__24025,(1),null);
if((c2 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"in","in",-1531184865))], null);
} else {
if((col == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_role.call(null,p2,new cljs.core.Keyword(null,"in","in",-1531184865))], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((fcol < r2))?col:p2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517)),cljs_intro.core.qualify_endpoint_role.call(null,p,new cljs.core.Keyword(null,"in","in",-1531184865))], null);

}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c1)){
var vec__24028 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__24024,col,fcol,tested_segs,cols,vec__24023,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__24021,map__24022,map__24022__$1,angle,point,eps){
return (function (p__24029){
var vec__24030 = p__24029;
var c2 = cljs.core.nth.call(null,vec__24030,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__24024,col,fcol,tested_segs,cols,vec__24023,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__24021,map__24022,map__24022__$1,angle,point,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__24028,(0),null);
var p2 = cljs.core.nth.call(null,vec__24028,(1),null);
if((c2 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"in","in",-1531184865)),cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517))], null);
} else {
if((col == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,p2,new cljs.core.Keyword(null,"in","in",-1531184865)),cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517))], null);
} else {
var r2 = cljs_intro.g2d.ratio.call(null,ray,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p2));
var p = (((fcol < r2))?col:p2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,p,new cljs.core.Keyword(null,"in","in",-1531184865)),cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"out","out",-910545517))], null);

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
 * Output endpoints are decorated with :role and :geom qualifiers.
 * 
 * Input:
 * ((a0 (ep00 ep01 ... ep0n))
 * (a1 (ep10 ep11 ... ep1n))
 * ...
 * (am (epm0 epm1 ... epmn)))
 * 
 * Output:
 * (ep0 ep1 ... epn)
 * 
 */
cljs_intro.pie.compute_hull_vertices = (function cljs_intro$pie$compute_hull_vertices(alpha,apperture,o,dist,segs,eps_by_angle){
return cljs.core.concat.call(null,(function (){var angle = cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(alpha - apperture));
var sb = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,dist,angle));
var r = cljs_intro.g2d.ray.call(null,o,sb);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs_intro.pie.compute_far_point.call(null,r,dist)),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle)], null);
})(),cljs.core.mapcat.call(null,(function (p__24033){
var vec__24034 = p__24033;
var _ = cljs.core.nth.call(null,vec__24034,(0),null);
var eps = cljs.core.nth.call(null,vec__24034,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,eps))){
return cljs_intro.pie.process_one_endpoint.call(null,o,dist,segs,cljs.core.first.call(null,eps));
} else {
return cljs_intro.pie.process_many_endpoint.call(null,o,dist,segs,eps);

}
}),eps_by_angle),(function (){var angle = cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(alpha + apperture));
var sb = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,dist,angle));
var r = cljs_intro.g2d.ray.call(null,o,sb);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs_intro.pie.compute_far_point.call(null,r,dist)),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle)], null);
})());
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
cljs_intro.pie.compute_hull_surfaces = (function cljs_intro$pie$compute_hull_surfaces(o,dist,eps){
if(cljs.core.empty_QMARK_.call(null,eps)){
return cljs.core.PersistentVector.EMPTY;
} else {
var pts = cljs.core.drop_while.call(null,(function (p__24042){
var map__24043 = p__24042;
var map__24043__$1 = ((cljs.core.seq_QMARK_.call(null,map__24043))?cljs.core.apply.call(null,cljs.core.hash_map,map__24043):map__24043);
var role = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"collision","collision",-201625508));
}),eps);
return cljs.core.nth.call(null,cljs.core.reduce.call(null,((function (pts){
return (function (p__24044,p__24045){
var vec__24046 = p__24044;
var acc = cljs.core.nth.call(null,vec__24046,(0),null);
var map__24047 = cljs.core.nth.call(null,vec__24046,(1),null);
var map__24047__$1 = ((cljs.core.seq_QMARK_.call(null,map__24047))?cljs.core.apply.call(null,cljs.core.hash_map,map__24047):map__24047);
var epa = map__24047__$1;
var a = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_a = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_a = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var map__24048 = p__24045;
var map__24048__$1 = ((cljs.core.seq_QMARK_.call(null,map__24048))?cljs.core.apply.call(null,cljs.core.hash_map,map__24048):map__24048);
var epb = map__24048__$1;
var b = cljs.core.get.call(null,map__24048__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__24048__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_b = cljs.core.get.call(null,map__24048__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_b = cljs.core.get.call(null,map__24048__$1,new cljs.core.Keyword(null,"role","role",-736691072));
if(cljs.core._EQ_.call(null,angle_a,angle_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,epb], null);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"farpoint","farpoint",464801688),geom_a,geom_b)) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"farpoint","farpoint",464801688),geom_a)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"inter","inter",-2036694714),geom_b))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"farpoint","farpoint",464801688),geom_b)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"inter","inter",-2036694714),geom_a))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"inter","inter",-2036694714),geom_b,geom_a)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),role_a)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),role_b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arc","arc",252411045),o,epa,epb,dist], null)),epb], null);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),role_b)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),role_b)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),role_b))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triangle","triangle",-1828376667),o,epa,epb], null)),epb], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,epa], null);

}
}
}
});})(pts))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,pts)], null),cljs.core.take.call(null,cljs.core.count.call(null,eps),cljs.core.rest.call(null,pts))),(0));
}
});
/**
 * Given a position, visibility radius and a set of segments, compute
 * the sequences of surface defining the visibility hull
 * 
 */
cljs_intro.pie.compute_visibility_hull = (function cljs_intro$pie$compute_visibility_hull(alpha,apperture,o,dist,p__24049){
var vec__24051 = p__24049;
var _ = cljs.core.nth.call(null,vec__24051,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24051,(1),null);
var segments = cljs.core.nth.call(null,vec__24051,(2),null);
var segs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,cljs.core.partial.call(null,cljs_intro.pie.trim_segment_by_angle,o,dist,alpha,apperture),cljs.core.remove.call(null,cljs.core.partial.call(null,cljs_intro.pie.is_segment_outside_pie_piece_QMARK_,o,alpha,apperture),cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.pie.trim_segment_by_circle,cljs_intro.g2d.circle.call(null,o,dist)),cljs.core.filter.call(null,cljs.core.partial.call(null,cljs_intro.pie.is_segment_near_point_QMARK_,o,dist),cljs.core.remove.call(null,cljs.core.partial.call(null,cljs_intro.pie.is_segment_outside_pie_piece_QMARK_,o,alpha,apperture),segments)))))));
var eps = cljs_intro.pie.build_endpoint_list.call(null,segs);
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segs], null),cljs_intro.pie.compute_hull_surfaces.call(null,o,dist,cljs_intro.pie.compute_hull_vertices.call(null,alpha,apperture,o,dist,segs,cljs_intro.pie.sort_angle_sorted_endpoints.call(null,cljs_intro.pie.rebase_angle_sorted_endpoints.call(null,alpha,apperture,cljs_intro.pie.merge_angle_sorted_endpoints.call(null,cljs_intro.core.group_endpoints_by_angle.call(null,cljs_intro.core.sort_endpoints_by_angle.call(null,o,eps))))))));
});

//# sourceMappingURL=pie.js.map