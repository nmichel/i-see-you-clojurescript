// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.spot');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
/**
 * Select segments for which absolute distance to m is lower than or equal to d
 */
cljs_intro.spot.select_segments = (function cljs_intro$spot$select_segments(m,d,segments){
return cljs.core.filter.call(null,(function (p1__23761_SHARP_){
var sd = Math.abs(cljs_intro.g2d.distance_to_segment.call(null,p1__23761_SHARP_,m));
return ((sd < d)) && ((sd > (0)));
}),segments);
});
/**
 * Trim segment s with respect to circle c
 */
cljs_intro.spot.trim_segment = (function cljs_intro$spot$trim_segment(p__23762,c){
var map__23766 = p__23762;
var map__23766__$1 = ((((!((map__23766 == null)))?((((map__23766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23766):map__23766);
var s = map__23766__$1;
var a = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var vec__23768 = cljs_intro.g2d.intersection_segment_circle.call(null,c,s);
var col_QMARK_ = cljs.core.nth.call(null,vec__23768,(0),null);
var cols = cljs.core.nth.call(null,vec__23768,(1),null);
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
cljs_intro.spot.trim_segments = (function cljs_intro$spot$trim_segments(m,d,segments){
var c = cljs_intro.g2d.circle.call(null,m,d);
return cljs.core.map.call(null,((function (c){
return (function (p1__23769_SHARP_){
return cljs_intro.spot.trim_segment.call(null,p1__23769_SHARP_,c);
});})(c))
,segments);
});
cljs_intro.spot.build_endpoint_list = (function cljs_intro$spot$build_endpoint_list(segments){
return cljs.core.reduce.call(null,(function (acc,p__23773){
var map__23774 = p__23773;
var map__23774__$1 = ((((!((map__23774 == null)))?((((map__23774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23774):map__23774);
var s = map__23774__$1;
var a = cljs.core.get.call(null,map__23774__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__23774__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var ma = cljs.core.get.call(null,map__23774__$1,new cljs.core.Keyword(null,"ma","ma",-2131895229));
var mb = cljs.core.get.call(null,map__23774__$1,new cljs.core.Keyword(null,"mb","mb",1534459853));
return cljs.core.conj.call(null,acc,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)),ma),cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,b,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)),mb));
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
var G__23786 = cljs.core.conj.call(null,acc,a);
var G__23787 = atail;
acc = G__23786;
pts = G__23787;
continue;
} else {
var map__23781 = a;
var map__23781__$1 = ((((!((map__23781 == null)))?((((map__23781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23781):map__23781);
var pa = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var sas = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var map__23782 = b;
var map__23782__$1 = ((((!((map__23782 == null)))?((((map__23782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23782):map__23782);
var pb = cljs.core.get.call(null,map__23782__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__23783 = cljs.core.get.call(null,map__23782__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sb = cljs.core.nth.call(null,vec__23783,(0),null);
var c = cljs_intro.core.find_other_end.call(null,sb,pb);
var sa2 = cljs_intro.g2d.segment.call(null,pa,c);
var newa = cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.conj.call(null,sas,sa2));
var G__23788 = cljs.core.conj.call(null,acc,newa);
var G__23789 = btail;
acc = G__23788;
pts = G__23789;
continue;
}

}
}
break;
}
});
cljs_intro.spot.merge_angle_sorted_endpoints = (function cljs_intro$spot$merge_angle_sorted_endpoints(eps_by_angle){
var iter__17116__auto__ = (function cljs_intro$spot$merge_angle_sorted_endpoints_$_iter__23798(s__23799){
return (new cljs.core.LazySeq(null,(function (){
var s__23799__$1 = s__23799;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23799__$1);
if(temp__4425__auto__){
var s__23799__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23799__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__23799__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__23801 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__23800 = (0);
while(true){
if((i__23800 < size__17115__auto__)){
var vec__23804 = cljs.core._nth.call(null,c__17114__auto__,i__23800);
var angle = cljs.core.nth.call(null,vec__23804,(0),null);
var eps = cljs.core.nth.call(null,vec__23804,(1),null);
cljs.core.chunk_append.call(null,b__23801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle,cljs_intro.spot.merge_sorted_endpoints.call(null,eps)], null));

var G__23806 = (i__23800 + (1));
i__23800 = G__23806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23801),cljs_intro$spot$merge_angle_sorted_endpoints_$_iter__23798.call(null,cljs.core.chunk_rest.call(null,s__23799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23801),null);
}
} else {
var vec__23805 = cljs.core.first.call(null,s__23799__$2);
var angle = cljs.core.nth.call(null,vec__23805,(0),null);
var eps = cljs.core.nth.call(null,vec__23805,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle,cljs_intro.spot.merge_sorted_endpoints.call(null,eps)], null),cljs_intro$spot$merge_angle_sorted_endpoints_$_iter__23798.call(null,cljs.core.rest.call(null,s__23799__$2)));
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
cljs_intro.spot.compute_far_point = (function cljs_intro$spot$compute_far_point(p__23807,d){
var map__23810 = p__23807;
var map__23810__$1 = ((((!((map__23810 == null)))?((((map__23810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23810):map__23810);
var o = cljs.core.get.call(null,map__23810__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var p = cljs.core.get.call(null,map__23810__$1,new cljs.core.Keyword(null,"p","p",151049309));
var po = cljs_intro.g2d.minus.call(null,p,o);
var l = cljs_intro.g2d.magnitude.call(null,po);
var n = cljs_intro.g2d.scale.call(null,po,(1.0 / l));
var p__$1 = cljs_intro.g2d.plus.call(null,o,cljs_intro.g2d.scale.call(null,n,d));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),p__$1,new cljs.core.Keyword(null,"f","f",-1597136552),(d / l)], null);
});
cljs_intro.spot.process_one_endpoint = (function cljs_intro$spot$process_one_endpoint(o,dist,segments,p__23812){
var map__23816 = p__23812;
var map__23816__$1 = ((((!((map__23816 == null)))?((((map__23816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23816):map__23816);
var ep = map__23816__$1;
var point = cljs.core.get.call(null,map__23816__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__23816__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom = cljs.core.get.call(null,map__23816__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var ray = cljs_intro.g2d.ray.call(null,o,point);
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ep], null),segments);
var vec__23818 = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var c = cljs.core.nth.call(null,vec__23818,(0),null);
var cols = vec__23818;
var classif = cljs_intro.core.classify_endpoint.call(null,ray,ep);
if(((c == null)) && (cljs.core._EQ_.call(null,geom,new cljs.core.Keyword(null,"inter","inter",-2036694714)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep,classif)], null);
} else {
if((!((c == null))) && ((new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(c) < (1)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_role.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle)], null);
} else {
var col = ((cljs.core.empty_QMARK_.call(null,cols))?cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs_intro.spot.compute_far_point.call(null,ray,dist)),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle):cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle));
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
cljs_intro.spot.process_many_endpoint = (function cljs_intro$spot$process_many_endpoint(o,dist,segments,p__23820){
var vec__23832 = p__23820;
var map__23833 = cljs.core.nth.call(null,vec__23832,(0),null);
var map__23833__$1 = ((((!((map__23833 == null)))?((((map__23833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23833):map__23833);
var point = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var eps = vec__23832;
var ray = cljs_intro.g2d.ray.call(null,o,point);
var eps_with_classif = cljs.core.map.call(null,((function (ray,vec__23832,map__23833,map__23833__$1,point,angle,eps){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.classify_endpoint.call(null,ray,e),e], null);
});})(ray,vec__23832,map__23833,map__23833__$1,point,angle,eps))
,eps);
var eps_wo_first_collinear = cljs.core.drop_while.call(null,((function (ray,eps_with_classif,vec__23832,map__23833,map__23833__$1,point,angle,eps){
return (function (p1__23819_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collinear","collinear",1159767033),cljs.core.nth.call(null,p1__23819_SHARP_,(0)));
});})(ray,eps_with_classif,vec__23832,map__23833,map__23833__$1,point,angle,eps))
,eps_with_classif);
if(cljs.core.empty_QMARK_.call(null,eps_wo_first_collinear)){
return cljs.core.PersistentVector.EMPTY;
} else {
var tested_segs = cljs_intro.core.compute_non_bearing_segments_list.call(null,eps,segments);
var cols = cljs_intro.core.compute_ray_segments_intersections.call(null,ray,tested_segs);
var vec__23835 = cljs.core.first.call(null,eps_wo_first_collinear);
var c1 = cljs.core.nth.call(null,vec__23835,(0),null);
var ep1 = cljs.core.nth.call(null,vec__23835,(1),null);
var e1 = vec__23835;
var vec__23836 = ((cljs.core.empty_QMARK_.call(null,cols))?(function (){var fp = cljs_intro.spot.compute_far_point.call(null,ray,dist);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(fp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"farpoint","farpoint",464801688)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(fp)], null);
})():(function (){var gp = cljs.core.first.call(null,cols);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_angle.call(null,cljs_intro.core.qualify_endpoint_geom.call(null,cljs_intro.g2d.endpoint.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(gp),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"collision","collision",-201625508)),angle),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(gp)], null);
})());
var col = cljs.core.nth.call(null,vec__23836,(0),null);
var fcol = cljs.core.nth.call(null,vec__23836,(1),null);
if((fcol < (1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,col,new cljs.core.Keyword(null,"collision","collision",-201625508))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_intro.core.qualify_endpoint_role.call(null,ep1,new cljs.core.Keyword(null,"cross","cross",194557789))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c1)){
var vec__23837 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__23836,col,fcol,tested_segs,cols,vec__23835,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__23832,map__23833,map__23833__$1,point,angle,eps){
return (function (p__23838){
var vec__23839 = p__23838;
var c2 = cljs.core.nth.call(null,vec__23839,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__23836,col,fcol,tested_segs,cols,vec__23835,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__23832,map__23833,map__23833__$1,point,angle,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__23837,(0),null);
var p2 = cljs.core.nth.call(null,vec__23837,(1),null);
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
var vec__23840 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__23836,col,fcol,tested_segs,cols,vec__23835,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__23832,map__23833,map__23833__$1,point,angle,eps){
return (function (p__23841){
var vec__23842 = p__23841;
var c2 = cljs.core.nth.call(null,vec__23842,(0),null);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517),c2)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),c2));
});})(vec__23836,col,fcol,tested_segs,cols,vec__23835,c1,ep1,e1,ray,eps_with_classif,eps_wo_first_collinear,vec__23832,map__23833,map__23833__$1,point,angle,eps))
,cljs.core.rest.call(null,eps_wo_first_collinear)));
var c2 = cljs.core.nth.call(null,vec__23840,(0),null);
var p2 = cljs.core.nth.call(null,vec__23840,(1),null);
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
 *   Output endpoints are decorated with :role qualifier.
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
cljs_intro.spot.compute_hull_vertices = (function cljs_intro$spot$compute_hull_vertices(o,dist,segs,eps_by_angle){
return cljs.core.mapcat.call(null,(function (p__23845){
var vec__23846 = p__23845;
var angle = cljs.core.nth.call(null,vec__23846,(0),null);
var eps = cljs.core.nth.call(null,vec__23846,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,eps))){
return cljs_intro.spot.process_one_endpoint.call(null,o,dist,segs,cljs.core.first.call(null,eps));
} else {
return cljs_intro.spot.process_many_endpoint.call(null,o,dist,segs,eps);

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
cljs_intro.spot.compute_hull_surfaces = (function cljs_intro$spot$compute_hull_surfaces(o,dist,eps){
if(cljs.core.empty_QMARK_.call(null,eps)){
return cljs.core.PersistentVector.EMPTY;
} else {
var pts = cljs.core.drop_while.call(null,(function (p__23857){
var map__23858 = p__23857;
var map__23858__$1 = ((((!((map__23858 == null)))?((((map__23858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23858):map__23858);
var role = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return cljs.core._EQ_.call(null,role,new cljs.core.Keyword(null,"collision","collision",-201625508));
}),cljs.core.cycle.call(null,eps));
return cljs.core.nth.call(null,cljs.core.reduce.call(null,((function (pts){
return (function (p__23860,p__23861){
var vec__23862 = p__23860;
var acc = cljs.core.nth.call(null,vec__23862,(0),null);
var map__23863 = cljs.core.nth.call(null,vec__23862,(1),null);
var map__23863__$1 = ((((!((map__23863 == null)))?((((map__23863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23863):map__23863);
var epa = map__23863__$1;
var a = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_a = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_a = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var map__23864 = p__23861;
var map__23864__$1 = ((((!((map__23864 == null)))?((((map__23864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23864):map__23864);
var epb = map__23864__$1;
var b = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var geom_b = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"geom","geom",1207084371));
var role_b = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"role","role",-736691072));
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
cljs_intro.spot.compute_visibility_hull = (function cljs_intro$spot$compute_visibility_hull(o,dist,p__23867){
var vec__23869 = p__23867;
var _ = cljs.core.nth.call(null,vec__23869,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23869,(1),null);
var segments = cljs.core.nth.call(null,vec__23869,(2),null);
var segs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs_intro.spot.trim_segments.call(null,o,dist,cljs_intro.spot.select_segments.call(null,o,dist,segments)));
var eps = cljs_intro.spot.compute_hull_vertices.call(null,o,dist,segs,cljs_intro.spot.merge_angle_sorted_endpoints.call(null,cljs_intro.core.group_endpoints_by_angle.call(null,cljs_intro.core.sort_endpoints_by_angle.call(null,o,cljs_intro.spot.build_endpoint_list.call(null,segs)))));
var surfs = cljs_intro.spot.compute_hull_surfaces.call(null,o,dist,eps);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"endpoints","endpoints",274088209),eps,new cljs.core.Keyword(null,"hull","hull",-957096876),surfs,new cljs.core.Keyword(null,"subgeom","subgeom",-780953550),segs], null);
});

//# sourceMappingURL=spot.js.map