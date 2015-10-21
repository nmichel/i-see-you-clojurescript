// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.pie');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
/**
 * Select segments for which absolute distance to m is lower than or equal to d
 */
cljs_intro.pie.is_segment_near_point_QMARK_ = (function cljs_intro$pie$is_segment_near_point_QMARK_(m,d,s){
var sd = Math.abs(cljs_intro.g2d.distance_to_segment.call(null,s,m));
return ((sd < d)) && ((sd > (0)));
});
/**
 * Return true if segment s is totally out of the piece of pie defined by
 * center o, direction angle alpha, and half apperture angle h.
 */
cljs_intro.pie.is_segment_outside_pie_piece_QMARK_ = (function cljs_intro$pie$is_segment_outside_pie_piece_QMARK_(o,alpha,h,p__41956){
var map__41959 = p__41956;
var map__41959__$1 = ((((!((map__41959 == null)))?((((map__41959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41959):map__41959);
var s = map__41959__$1;
var a = cljs.core.get.call(null,map__41959__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__41959__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var h_PLUS_ = ((2) * h);
var ra = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,a)) - alpha)) + h)));
var rb = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,b)) - alpha)) + h)));
var minab = Math.min(ra,rb);
var maxab = Math.max(ra,rb);
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
cljs_intro.pie.trim_segment_by_circle = (function cljs_intro$pie$trim_segment_by_circle(c,p__41961){
var map__41965 = p__41961;
var map__41965__$1 = ((((!((map__41965 == null)))?((((map__41965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41965):map__41965);
var s = map__41965__$1;
var a = cljs.core.get.call(null,map__41965__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__41965__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var vec__41967 = cljs_intro.g2d.intersection_segment_circle.call(null,c,s);
var col_QMARK_ = cljs.core.nth.call(null,vec__41967,(0),null);
var cols = cljs.core.nth.call(null,vec__41967,(1),null);
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
cljs_intro.pie.trim_segment_by_angle_narrow;
cljs_intro.pie.trim_segment_by_angle_wide;
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
cljs_intro.pie.trim_segment_by_angle_wide = (function cljs_intro$pie$trim_segment_by_angle_wide(o,d,alpha,h,p__41968){
var map__41971 = p__41968;
var map__41971__$1 = ((((!((map__41971 == null)))?((((map__41971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41971):map__41971);
var s = map__41971__$1;
var a = cljs.core.get.call(null,map__41971__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__41971__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var h_PLUS_ = ((2) * h);
var ra = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,a)) - alpha)) + h)));
var rb = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,b)) - alpha)) + h)));
var minab = Math.min(ra,rb);
var maxab = Math.max(ra,rb);
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
cljs_intro.pie.trim_segment_by_angle_narrow = (function cljs_intro$pie$trim_segment_by_angle_narrow(o,d,alpha,h,p__41973){
var map__41976 = p__41973;
var map__41976__$1 = ((((!((map__41976 == null)))?((((map__41976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41976):map__41976);
var s = map__41976__$1;
var a = cljs.core.get.call(null,map__41976__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__41976__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var h_PLUS_ = ((2) * h);
var ra = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,a)) - alpha)) + h)));
var rb = cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs_intro.g2d.__GT_polar.call(null,o,b)) - alpha)) + h)));
var minab = Math.min(ra,rb);
var maxab = Math.max(ra,rb);
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
return cljs.core.reduce.call(null,(function (acc,p__41981){
var map__41982 = p__41981;
var map__41982__$1 = ((((!((map__41982 == null)))?((((map__41982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41982):map__41982);
var s = map__41982__$1;
var a = cljs.core.get.call(null,map__41982__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__41982__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var ma = cljs.core.get.call(null,map__41982__$1,new cljs.core.Keyword(null,"ma","ma",-2131895229));
var mb = cljs.core.get.call(null,map__41982__$1,new cljs.core.Keyword(null,"mb","mb",1534459853));
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
var G__41994 = cljs.core.conj.call(null,acc,a);
var G__41995 = atail;
acc = G__41994;
pts = G__41995;
continue;
} else {
var map__41989 = a;
var map__41989__$1 = ((((!((map__41989 == null)))?((((map__41989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41989):map__41989);
var pa = cljs.core.get.call(null,map__41989__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var sas = cljs.core.get.call(null,map__41989__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var map__41990 = b;
var map__41990__$1 = ((((!((map__41990 == null)))?((((map__41990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41990):map__41990);
var pb = cljs.core.get.call(null,map__41990__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__41991 = cljs.core.get.call(null,map__41990__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sb = cljs.core.nth.call(null,vec__41991,(0),null);
var c = cljs_intro.core.find_other_end.call(null,sb,pb);
var sa2 = cljs_intro.g2d.segment.call(null,pa,c);
var newa = cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.conj.call(null,sas,sa2));
var G__41996 = cljs.core.conj.call(null,acc,newa);
var G__41997 = btail;
acc = G__41996;
pts = G__41997;
continue;
}

}
}
break;
}
});
cljs_intro.pie.merge_angle_sorted_endpoints = (function cljs_intro$pie$merge_angle_sorted_endpoints(eps_by_angle){
var iter__17116__auto__ = (function cljs_intro$pie$merge_angle_sorted_endpoints_$_iter__42006(s__42007){
return (new cljs.core.LazySeq(null,(function (){
var s__42007__$1 = s__42007;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42007__$1);
if(temp__4425__auto__){
var s__42007__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42007__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__42007__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__42009 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__42008 = (0);
while(true){
if((i__42008 < size__17115__auto__)){
var vec__42012 = cljs.core._nth.call(null,c__17114__auto__,i__42008);
var angle = cljs.core.nth.call(null,vec__42012,(0),null);
var eps = cljs.core.nth.call(null,vec__42012,(1),null);
cljs.core.chunk_append.call(null,b__42009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle,cljs_intro.pie.merge_sorted_endpoints.call(null,eps)], null));

var G__42014 = (i__42008 + (1));
i__42008 = G__42014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42009),cljs_intro$pie$merge_angle_sorted_endpoints_$_iter__42006.call(null,cljs.core.chunk_rest.call(null,s__42007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42009),null);
}
} else {
var vec__42013 = cljs.core.first.call(null,s__42007__$2);
var angle = cljs.core.nth.call(null,vec__42013,(0),null);
var eps = cljs.core.nth.call(null,vec__42013,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle,cljs_intro.pie.merge_sorted_endpoints.call(null,eps)], null),cljs_intro$pie$merge_angle_sorted_endpoints_$_iter__42006.call(null,cljs.core.rest.call(null,s__42007__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17116__auto__.call(null,eps_by_angle);
});
cljs_intro.pie.rebase_angle_sorted_endpoints = (function cljs_intro$pie$rebase_angle_sorted_endpoints(alpha,apperture,eps_by_angle){
return cljs.core.map.call(null,(function (p__42017){
var vec__42018 = p__42017;
var angle = cljs.core.nth.call(null,vec__42018,(0),null);
var eps = cljs.core.nth.call(null,vec__42018,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.g2d.__GT_0_PLUS_2pi.call(null,(cljs_intro.g2d.__GT_0_PLUS_2pi.call(null,(cljs_intro.g2d.__GT_0_PLUS_2pi.call(null,(cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,angle) - cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi.call(null,alpha))) + apperture)) + 1.0E-6)),eps], null);
}),eps_by_angle);
});
cljs_intro.pie.sort_angle_sorted_endpoints = (function cljs_intro$pie$sort_angle_sorted_endpoints(eps_by_angle){
return cljs.core.sort.call(null,(function (p__42023,p__42024){
var vec__42025 = p__42023;
var a = cljs.core.nth.call(null,vec__42025,(0),null);
var _ = cljs.core.nth.call(null,vec__42025,(1),null);
var vec__42026 = p__42024;
var b = cljs.core.nth.call(null,vec__42026,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42026,(1),null);
return (a <= b);
}),eps_by_angle);
});
cljs_intro.pie.compute_far_point = (function cljs_intro$pie$compute_far_point(p__42027,d){
var map__42030 = p__42027;
var map__42030__$1 = ((((!((map__42030 == null)))?((((map__42030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42030):map__42030);
var o = cljs.core.get.call(null,map__42030__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var p = cljs.core.get.call(null,map__42030__$1,new cljs.core.Keyword(null,"p","p",151049309));
var po = cljs_intro.g2d.minus.call(null,p,o);
var l = cljs_intro.g2d.magnitude.call(null,po);
var n = cljs_intro.g2d.scale.call(null,po,(1.0 / l));
var p__$1 = cljs_intro.g2d.plus.call(null,o,cljs_intro.g2d.scale.call(null,n,d));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),p__$1,new cljs.core.Keyword(null,"f","f",-1597136552),(d / l)], null);
});
cljs_intro.pie.process_one_endpoint = (function cljs_intro$pie$process_one_endpoint(o,dist,segments,p__42032){
var map__42036 = p__42032;
var map__42036__$1 = ((((!((map__42036 == null)))?((((map__42036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42036):map__42036);
var ep = map__42036__$1;
var point = cljs.core.get.call(null,map__42036__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__42036__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom = cljs.core.get.call(null,map__42036__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var ray = cljs_intro.g2d.ray.call(null,o,point);
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);
var vec__42038 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var c = cljs.core.nth.call(null,vec__42038,(0),null);
var cols = vec__42038;
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
cljs_intro.pie.process_many_endpoint = (function cljs_intro$pie$process_many_endpoint(o,dist,segments,p__42040){
var vec__42052 = p__42040;
var map__42053 = cljs.core.nth.call(null,vec__42052,(0),null);
var map__42053__$1 = ((((!((map__42053 == null)))?((((map__42053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42053):map__42053);
var point = cljs.core.get.call(null,map__42053__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__42053__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var eps = vec__42052;
var ray = cljs_intro.g2d.ray.call(null,o,point);
var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__42052,map__42053,map__42053__$1,point,angle,eps){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__42052,map__42053,map__42053__$1,point,angle,eps))
,eps);
var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__42052,map__42053,map__42053__$1,point,angle,eps){
return (function (p1__42039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__42039_SHARP_,(0)));
});})(ray,eps_with_classif,vec__42052,map__42053,map__42053__$1,point,angle,eps))
,eps_with_classif);
if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear)){
return cljs.core.PersistentVector.EMPTY;
} else {
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);
var cols = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var vec__42055 = cljs.core.first.call(null,eps_wo_first_collinear);
var c1 = cljs.core.nth.call(null,vec__42055,(0),null);
var ep1 = cljs.core.nth.call(null,vec__42055,(1),null);
var e1 = vec__42055;
var vec__42056 = ((cljs.core.empty_QMARK_.call(null,cols))?(function (){var fp = cljs_intro.pie.compute_far_point.call(null,ray,dist);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(fp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(fp)], null);
})():(function (){var gp = cljs.core.first.call(null,cols);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(gp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(gp)], null);
})());
var col = cljs.core.nth.call(null,vec__42056,(0),null);
var fcol = cljs.core.nth.call(null,vec__42056,(1),null);
if((fcol < (1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"collision","collision",-201625508))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1)){
var vec__42057 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__42056,col,fcol,tested_segs,cols,vec__42055,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__42052,map__42053,map__42053__$1,point,angle,eps){
return (function (p__42058){
var vec__42059 = p__42058;
var c2 = cljs.core.nth.call(null,vec__42059,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__42056,col,fcol,tested_segs,cols,vec__42055,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__42052,map__42053,map__42053__$1,point,angle,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__42057,(0),null);
var p2 = cljs.core.nth.call(null,vec__42057,(1),null);
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
var vec__42060 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__42056,col,fcol,tested_segs,cols,vec__42055,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__42052,map__42053,map__42053__$1,point,angle,eps){
return (function (p__42061){
var vec__42062 = p__42061;
var c2 = cljs.core.nth.call(null,vec__42062,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__42056,col,fcol,tested_segs,cols,vec__42055,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__42052,map__42053,map__42053__$1,point,angle,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__42060,(0),null);
var p2 = cljs.core.nth.call(null,vec__42060,(1),null);
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
 *   For a given angle, endpoints are sorted by increasing distance from the origin.
 * 
 *   Output endpoints are decorated with :role and :geom qualifiers.
 * 
 *   Input:
 *   ((a0 (ep00 ep01 ... ep0n))
 * (a1 (ep10 ep11 ... ep1n))
 * ...
 * (am (epm0 epm1 ... epmn)))
 * 
 *   Output:
 *   (ep0 ep1 ... epn)
 *   
 */
cljs_intro.pie.compute_hull_vertices = (function cljs_intro$pie$compute_hull_vertices(alpha,apperture,o,dist,segs,eps_by_angle){
return cljs.core.concat.call(null,(function (){var angle = cljs_intro.g2d.__GT__pi_PLUS_pi.call(null,(alpha - apperture));
var sb = cljs_intro.g2d.polar__GT_.call(null,o,cljs_intro.g2d.polar.call(null,dist,angle));
var r = cljs_intro.g2d.ray.call(null,o,sb);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs_intro.pie.compute_far_point.call(null,r,dist)),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle)], null);
})(),cljs.core.mapcat.call(null,(function (p__42065){
var vec__42066 = p__42065;
var _ = cljs.core.nth.call(null,vec__42066,(0),null);
var eps = cljs.core.nth.call(null,vec__42066,(1),null);
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
 *   Each spitted out surface is a definition of either a triangle or an arc.
 * 
 *   Input:
 *   (ep0 ep1 ... epn)
 * 
 *   Output:
 *   (s0 s1 ... sn)
 *   
 */
cljs_intro.pie.compute_hull_surfaces = (function cljs_intro$pie$compute_hull_surfaces(o,dist,eps){
if(cljs.core.empty_QMARK_.call(null,eps)){
return cljs.core.PersistentVector.EMPTY;
} else {
var pts = cljs.core.drop_while.call(null,(function (p__42077){
var map__42078 = p__42077;
var map__42078__$1 = ((((!((map__42078 == null)))?((((map__42078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42078):map__42078);
var role = cljs.core.get.call(null,map__42078__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"collision","collision",-201625508));
}),eps);
return cljs.core.nth.call(null,cljs.core.reduce.call(null,((function (pts){
return (function (p__42080,p__42081){
var vec__42082 = p__42080;
var acc = cljs.core.nth.call(null,vec__42082,(0),null);
var map__42083 = cljs.core.nth.call(null,vec__42082,(1),null);
var map__42083__$1 = ((((!((map__42083 == null)))?((((map__42083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42083):map__42083);
var epa = map__42083__$1;
var a = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_a = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_a = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var map__42084 = p__42081;
var map__42084__$1 = ((((!((map__42084 == null)))?((((map__42084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42084):map__42084);
var epb = map__42084__$1;
var b = cljs.core.get.call(null,map__42084__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__42084__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_b = cljs.core.get.call(null,map__42084__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_b = cljs.core.get.call(null,map__42084__$1,new cljs.core.Keyword(null,"role","role",-736691072));
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
 *   the sequences of surface defining the visibility hull
 *   
 */
cljs_intro.pie.compute_visibility_hull = (function cljs_intro$pie$compute_visibility_hull(alpha,apperture,o,dist,p__42087){
var vec__42089 = p__42087;
var _ = cljs.core.nth.call(null,vec__42089,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42089,(1),null);
var segments = cljs.core.nth.call(null,vec__42089,(2),null);
var alpha__$1 = (alpha + 5.37E-5);
var segs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,cljs.core.partial.call(null,cljs_intro.pie.trim_segment_by_angle,o,dist,alpha__$1,apperture),cljs.core.remove.call(null,cljs.core.partial.call(null,cljs_intro.pie.is_segment_outside_pie_piece_QMARK_,o,alpha__$1,apperture),cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.partial.call(null,cljs_intro.pie.trim_segment_by_circle,cljs_intro.g2d.circle.call(null,o,dist)),cljs.core.filter.call(null,cljs.core.partial.call(null,cljs_intro.pie.is_segment_near_point_QMARK_,o,dist),cljs.core.remove.call(null,cljs.core.partial.call(null,cljs_intro.pie.is_segment_outside_pie_piece_QMARK_,o,alpha__$1,apperture),segments)))))));
var eps = cljs_intro.pie.build_endpoint_list.call(null,segs);
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segs], null),cljs_intro.pie.compute_hull_surfaces.call(null,o,dist,cljs_intro.pie.compute_hull_vertices.call(null,alpha__$1,apperture,o,dist,segs,cljs_intro.pie.sort_angle_sorted_endpoints.call(null,cljs_intro.pie.rebase_angle_sorted_endpoints.call(null,alpha__$1,apperture,cljs_intro.pie.merge_angle_sorted_endpoints.call(null,cljs_intro.core.group_endpoints_by_angle.call(null,cljs_intro.core.sort_endpoints_by_angle.call(null,o,eps))))))));
});

//# sourceMappingURL=pie.js.map