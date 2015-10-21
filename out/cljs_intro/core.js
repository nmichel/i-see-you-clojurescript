// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.core');
goog.require('cljs.core');
goog.require('cljs_intro.g2d');
goog.require('clojure.string');
cljs_intro.core.dump_vec = (function cljs_intro$core$dump_vec(p__5965){
var map__5968 = p__5965;
var map__5968__$1 = ((((!((map__5968 == null)))?((((map__5968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5968):map__5968);
var x = cljs.core.get.call(null,map__5968__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5968__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[x: ",x.toString(),", y: ",y.toString(),"]"], null));
});
cljs_intro.core.dump_segment = (function cljs_intro$core$dump_segment(p__5970){
var map__5973 = p__5970;
var map__5973__$1 = ((((!((map__5973 == null)))?((((map__5973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5973):map__5973);
var a = cljs.core.get.call(null,map__5973__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__5973__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["< ",cljs_intro.core.dump_vec.call(null,a),cljs_intro.core.dump_vec.call(null,b)," >"], null));
});
cljs_intro.core.coord_list_to_point_list = (function cljs_intro$core$coord_list_to_point_list(data){
return cljs.core.map.call(null,(function (p__5977){
var vec__5978 = p__5977;
var x = cljs.core.nth.call(null,vec__5978,(0),null);
var y = cljs.core.nth.call(null,vec__5978,(1),null);
return cljs_intro.g2d.vec2d.call(null,x,y);
}),cljs.core.partition.call(null,(2),data));
});
cljs_intro.core.build_segment_lists = (function cljs_intro$core$build_segment_lists(points,closed){
var pcnt = cljs.core.count.call(null,points);
var scnt = (cljs.core.truth_(closed)?pcnt:(pcnt - (1)));
var pset = (cljs.core.truth_(closed)?cljs.core.cycle.call(null,points):points);
var pairs = cljs.core.take.call(null,scnt,cljs.core.partition.call(null,(2),(1),pset));
return cljs.core.map.call(null,((function (pcnt,scnt,pset,pairs){
return (function (p__5981){
var vec__5982 = p__5981;
var a = cljs.core.nth.call(null,vec__5982,(0),null);
var b = cljs.core.nth.call(null,vec__5982,(1),null);
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
var G__5983 = (i + (1));
var G__5984 = cljs.core.rest.call(null,p);
var G__5985 = cljs.core.rest.call(null,s);
var G__5986 = cljs.core.conj_BANG_.call(null,acc,ep);
i = G__5983;
p = G__5984;
s = G__5985;
acc = G__5986;
continue;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bep], null),cljs.core.conj.call(null,cljs.core.persistent_BANG_.call(null,acc),eep));
}
break;
}
});
cljs_intro.core.build_one_geom_data = (function cljs_intro$core$build_one_geom_data(p__5987){
var map__5990 = p__5987;
var map__5990__$1 = ((((!((map__5990 == null)))?((((map__5990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5990):map__5990);
var data = cljs.core.get.call(null,map__5990__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var closed = cljs.core.get.call(null,map__5990__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var points = cljs.core.vec.call(null,cljs_intro.core.coord_list_to_point_list.call(null,data));
var segments = cljs.core.vec.call(null,cljs_intro.core.build_segment_lists.call(null,points,closed));
var eps = cljs_intro.core.build_endpoint_list.call(null,points,segments,closed);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eps,segments], null);
});
cljs_intro.core.build_geom_data = (function cljs_intro$core$build_geom_data(data){

return cljs.core.reduce.call(null,(function (p__5995,g){
var vec__5996 = p__5995;
var adraw = cljs.core.nth.call(null,vec__5996,(0),null);
var aeps = cljs.core.nth.call(null,vec__5996,(1),null);
var asegs = cljs.core.nth.call(null,vec__5996,(2),null);
var vec__5997 = cljs_intro.core.build_one_geom_data.call(null,g);
var eps = cljs.core.nth.call(null,vec__5997,(0),null);
var segs = cljs.core.nth.call(null,vec__5997,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,adraw,eps),cljs.core.into.call(null,aeps,eps),cljs.core.into.call(null,asegs,segs)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),data);
});
cljs_intro.core.find_other_end = (function cljs_intro$core$find_other_end(p__5998,p){
var map__6001 = p__5998;
var map__6001__$1 = ((((!((map__6001 == null)))?((((map__6001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6001):map__6001);
var a = cljs.core.get.call(null,map__6001__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__6001__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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
cljs_intro.core.qualify_endpoint_geom = (function cljs_intro$core$qualify_endpoint_geom(ep,kind){
return cljs.core.assoc.call(null,ep,new cljs.core.Keyword(null,"geom","geom",1207084371),kind);
});
cljs_intro.core.qualify_endpoint_role = (function cljs_intro$core$qualify_endpoint_role(ep,kind){
return cljs.core.assoc.call(null,ep,new cljs.core.Keyword(null,"role","role",-736691072),kind);
});
cljs_intro.core.quite_same = (function cljs_intro$core$quite_same(e,a,b){
return (Math.abs((a - b)) < e);
});
/**
 * Sort endpoints by increasing polar angle. If some endpoints lie on the same angle, they are
 * sorted by increasing distance to origin.
 * 
 * Each endpoint is also tagged with the angle it lies with key :angle
 */
cljs_intro.core.sort_endpoints_by_angle = (function cljs_intro$core$sort_endpoints_by_angle(o,eps){
return cljs.core.sort.call(null,cljs.core.comp.call(null,(function (p__6016,p__6017){
var vec__6018 = p__6016;
var map__6019 = cljs.core.nth.call(null,vec__6018,(0),null);
var map__6019__$1 = ((((!((map__6019 == null)))?((((map__6019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6019):map__6019);
var ra = cljs.core.get.call(null,map__6019__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var ta = cljs.core.get.call(null,map__6019__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var epa = cljs.core.nth.call(null,vec__6018,(1),null);
var vec__6020 = p__6017;
var map__6021 = cljs.core.nth.call(null,vec__6020,(0),null);
var map__6021__$1 = ((((!((map__6021 == null)))?((((map__6021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6021):map__6021);
var rb = cljs.core.get.call(null,map__6021__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tb = cljs.core.get.call(null,map__6021__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var epb = cljs.core.nth.call(null,vec__6020,(1),null);
if(cljs.core.truth_(cljs_intro.core.quite_same.call(null,1.0E-6,ta,tb))){
return (ra <= rb);
} else {
if((ta <= tb)){
return true;
} else {
return false;

}
}
})),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,p__6024){
var map__6025 = p__6024;
var map__6025__$1 = ((((!((map__6025 == null)))?((((map__6025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6025):map__6025);
var ep = map__6025__$1;
var p = cljs.core.get.call(null,map__6025__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__6027 = cljs_intro.g2d.__GT_polar.call(null,cljs_intro.g2d.minus.call(null,p,o));
var map__6027__$1 = ((((!((map__6027 == null)))?((((map__6027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6027):map__6027);
var polar = map__6027__$1;
var angle = cljs.core.get.call(null,map__6027__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
return cljs.core.conj_BANG_.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [polar,cljs_intro.core.qualify_endpoint_angle.call(null,ep,angle)], null));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),eps)));
});
/**
 *  Group endpoints by "quite same" angle.
 * 
 *   i: ([a1 ep] [a2 ep] ... [an ep])
 *   o: ([a1 [ep ...]] [a2 [ep ...]] [an [ep ...]])
 */
cljs_intro.core.group_endpoints_by_angle = (function cljs_intro$core$group_endpoints_by_angle(p__6029){
var vec__6039 = p__6029;
var vec__6040 = cljs.core.nth.call(null,vec__6039,(0),null);
var first_polar = cljs.core.nth.call(null,vec__6040,(0),null);
var first_ep = cljs.core.nth.call(null,vec__6040,(1),null);
var tail = cljs.core.nthnext.call(null,vec__6039,(1));
return ((function (vec__6039,vec__6040,first_polar,first_ep,tail){
return (function (p__6041){
var vec__6042 = p__6041;
var out = cljs.core.nth.call(null,vec__6042,(0),null);
var acc = cljs.core.nth.call(null,vec__6042,(1),null);
return cljs.core.conj.call(null,out,acc);
});})(vec__6039,vec__6040,first_polar,first_ep,tail))
.call(null,cljs.core.reduce.call(null,((function (vec__6039,vec__6040,first_polar,first_ep,tail){
return (function (p__6043,p__6044){
var vec__6045 = p__6043;
var out = cljs.core.nth.call(null,vec__6045,(0),null);
var vec__6046 = cljs.core.nth.call(null,vec__6045,(1),null);
var current_angle = cljs.core.nth.call(null,vec__6046,(0),null);
var eps_vec = cljs.core.nth.call(null,vec__6046,(1),null);
var acc = vec__6046;
var vec__6047 = p__6044;
var next_polar = cljs.core.nth.call(null,vec__6047,(0),null);
var next_ep = cljs.core.nth.call(null,vec__6047,(1),null);
if(cljs.core.truth_(cljs_intro.core.quite_same.call(null,1.0E-6,current_angle,new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(next_polar)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_angle,cljs.core.conj.call(null,eps_vec,next_ep)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,out,acc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(next_polar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_ep], null)], null)], null);

}
});})(vec__6039,vec__6040,first_polar,first_ep,tail))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(first_polar),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_ep], null)], null)], null),tail));
});
cljs_intro.core.compute_ray_segments_intersections = (function cljs_intro$core$compute_ray_segments_intersections(ray,segments){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.reduce.call(null,(function (acc,s){
var i = cljs_intro.g2d.intersection.call(null,ray,s);
if((cljs.core._EQ_.call(null,i,null)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(i),(0)))){
return acc;
} else {
return cljs.core.conj.call(null,acc,i);
}
}),cljs.core.PersistentVector.EMPTY,segments));
});
/**
 * Return true if endpoint is at same position than one segment ends
 */
cljs_intro.core.is_segment_bearing_endpoint = (function cljs_intro$core$is_segment_bearing_endpoint(p__6048,p__6049){
var map__6054 = p__6048;
var map__6054__$1 = ((((!((map__6054 == null)))?((((map__6054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6054):map__6054);
var a = cljs.core.get.call(null,map__6054__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__6054__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__6055 = p__6049;
var map__6055__$1 = ((((!((map__6055 == null)))?((((map__6055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6055):map__6055);
var p = cljs.core.get.call(null,map__6055__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return (cljs.core._EQ_.call(null,a,p)) || (cljs.core._EQ_.call(null,b,p));
});
/**
 * Return true if seg is bearing at least one endpoint in eps
 */
cljs_intro.core.is_segment_bearing_some_endpoints = (function cljs_intro$core$is_segment_bearing_some_endpoints(eps,seg){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs_intro.core.is_segment_bearing_endpoint,seg),eps);
});
cljs_intro.core.compute_non_bearing_segments_list = (function cljs_intro$core$compute_non_bearing_segments_list(eps,segs){
return cljs.core.filter.call(null,(function (p1__6058_SHARP_){
return cljs.core.not.call(null,cljs_intro.core.is_segment_bearing_some_endpoints.call(null,eps,p1__6058_SHARP_));
}),segs);
});
cljs_intro.core.classify_final_endpoint = (function cljs_intro$core$classify_final_endpoint(ray,p__6059){
var map__6063 = p__6059;
var map__6063__$1 = ((((!((map__6063 == null)))?((((map__6063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6063):map__6063);
var point = cljs.core.get.call(null,map__6063__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var segments = cljs.core.get.call(null,map__6063__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var vec__6065 = segments;
var s = cljs.core.nth.call(null,vec__6065,(0),null);
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
cljs_intro.core.classify_internal_endpoint = (function cljs_intro$core$classify_internal_endpoint(ray,p__6066){
var map__6070 = p__6066;
var map__6070__$1 = ((((!((map__6070 == null)))?((((map__6070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6070):map__6070);
var point = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var segments = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var vec__6072 = segments;
var s1 = cljs.core.nth.call(null,vec__6072,(0),null);
var s2 = cljs.core.nth.call(null,vec__6072,(1),null);
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
 *   Returned classifier may be:
 * 
 *   :collinear => all endpoints are on the ray
 *   :cross     => one endpoint on each "side" of the ray
 *   :out       => all endpoints "before" the ray
 *   :in        => all endpoints "after" the ray
 *   
 */
cljs_intro.core.classify_endpoint = (function cljs_intro$core$classify_endpoint(ray,p__6073){
var map__6076 = p__6073;
var map__6076__$1 = ((((!((map__6076 == null)))?((((map__6076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6076):map__6076);
var ep = map__6076__$1;
var segments = cljs.core.get.call(null,map__6076__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments))){
return cljs_intro.core.classify_final_endpoint.call(null,ray,ep);
} else {
return cljs_intro.core.classify_internal_endpoint.call(null,ray,ep);
}
});

//# sourceMappingURL=core.js.map