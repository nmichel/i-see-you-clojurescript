// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.g2d');
goog.require('cljs.core');
cljs_intro.g2d.vec2d = (function cljs_intro$g2d$vec2d(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
cljs_intro.g2d.plus = (function cljs_intro$g2d$plus(p__5908,p__5909){
var map__5912 = p__5908;
var map__5912__$1 = ((cljs.core.seq_QMARK_.call(null,map__5912))?cljs.core.apply.call(null,cljs.core.hash_map,map__5912):map__5912);
var ax = cljs.core.get.call(null,map__5912__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5912__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5913 = p__5909;
var map__5913__$1 = ((cljs.core.seq_QMARK_.call(null,map__5913))?cljs.core.apply.call(null,cljs.core.hash_map,map__5913):map__5913);
var bx = cljs.core.get.call(null,map__5913__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5913__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax + bx),(ay + by));
});
cljs_intro.g2d.minus = (function cljs_intro$g2d$minus(p__5914,p__5915){
var map__5918 = p__5914;
var map__5918__$1 = ((cljs.core.seq_QMARK_.call(null,map__5918))?cljs.core.apply.call(null,cljs.core.hash_map,map__5918):map__5918);
var ax = cljs.core.get.call(null,map__5918__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5918__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5919 = p__5915;
var map__5919__$1 = ((cljs.core.seq_QMARK_.call(null,map__5919))?cljs.core.apply.call(null,cljs.core.hash_map,map__5919):map__5919);
var bx = cljs.core.get.call(null,map__5919__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5919__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax - bx),(ay - by));
});
cljs_intro.g2d.magnitude = (function() {
var cljs_intro$g2d$magnitude = null;
var cljs_intro$g2d$magnitude__1 = (function (p__5920){
var map__5922 = p__5920;
var map__5922__$1 = ((cljs.core.seq_QMARK_.call(null,map__5922))?cljs.core.apply.call(null,cljs.core.hash_map,map__5922):map__5922);
var p = map__5922__$1;
var dx = cljs.core.get.call(null,map__5922__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__5922__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt.call(null,((dx * dx) + (dy * dy)));
});
var cljs_intro$g2d$magnitude__2 = (function (a,b){
return cljs_intro$g2d$magnitude.call(null,cljs_intro.g2d.minus.call(null,a,b));
});
cljs_intro$g2d$magnitude = function(a,b){
switch(arguments.length){
case 1:
return cljs_intro$g2d$magnitude__1.call(this,a);
case 2:
return cljs_intro$g2d$magnitude__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$g2d$magnitude.cljs$core$IFn$_invoke$arity$1 = cljs_intro$g2d$magnitude__1;
cljs_intro$g2d$magnitude.cljs$core$IFn$_invoke$arity$2 = cljs_intro$g2d$magnitude__2;
return cljs_intro$g2d$magnitude;
})()
;
cljs_intro.g2d.scale = (function cljs_intro$g2d$scale(p__5923,f){
var map__5925 = p__5923;
var map__5925__$1 = ((cljs.core.seq_QMARK_.call(null,map__5925))?cljs.core.apply.call(null,cljs.core.hash_map,map__5925):map__5925);
var x = cljs.core.get.call(null,map__5925__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5925__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(x * f),(y * f));
});
cljs_intro.g2d.cross = (function cljs_intro$g2d$cross(p__5926,p__5927){
var map__5930 = p__5926;
var map__5930__$1 = ((cljs.core.seq_QMARK_.call(null,map__5930))?cljs.core.apply.call(null,cljs.core.hash_map,map__5930):map__5930);
var ax = cljs.core.get.call(null,map__5930__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5930__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5931 = p__5927;
var map__5931__$1 = ((cljs.core.seq_QMARK_.call(null,map__5931))?cljs.core.apply.call(null,cljs.core.hash_map,map__5931):map__5931);
var bx = cljs.core.get.call(null,map__5931__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5931__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * by) - (ay * bx));
});
cljs_intro.g2d.dot = (function cljs_intro$g2d$dot(p__5932,p__5933){
var map__5936 = p__5932;
var map__5936__$1 = ((cljs.core.seq_QMARK_.call(null,map__5936))?cljs.core.apply.call(null,cljs.core.hash_map,map__5936):map__5936);
var ax = cljs.core.get.call(null,map__5936__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5936__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5937 = p__5933;
var map__5937__$1 = ((cljs.core.seq_QMARK_.call(null,map__5937))?cljs.core.apply.call(null,cljs.core.hash_map,map__5937):map__5937);
var bx = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5937__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * bx) + (ay * by));
});
cljs_intro.g2d.__GT_polar = (function cljs_intro$g2d$__GT_polar(p__5938){
var map__5940 = p__5938;
var map__5940__$1 = ((cljs.core.seq_QMARK_.call(null,map__5940))?cljs.core.apply.call(null,cljs.core.hash_map,map__5940):map__5940);
var p = map__5940__$1;
var x = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.polar.call(null,cljs_intro.g2d.magnitude.call(null,p),Math.atan2.call(null,y,x));
});
cljs_intro.g2d.rotate = (function cljs_intro$g2d$rotate(p__5941,a){
var vec__5943 = p__5941;
var x = cljs.core.nth.call(null,vec__5943,(0),null);
var y = cljs.core.nth.call(null,vec__5943,(1),null);
var c = Math.cos.call(null,a);
var s = Math.sin.call(null,a);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * c) - (y * s)),((y * c) + (x * s))], null);
});
cljs_intro.g2d.polar = (function cljs_intro$g2d$polar(r,theta){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"theta","theta",-427510258),theta], null);
});
cljs_intro.g2d.segment = (function cljs_intro$g2d$segment(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),a,new cljs.core.Keyword(null,"b","b",1482224470),b], null);
});
cljs_intro.g2d.stretch = (function cljs_intro$g2d$stretch(p__5944,f){
var map__5946 = p__5944;
var map__5946__$1 = ((cljs.core.seq_QMARK_.call(null,map__5946))?cljs.core.apply.call(null,cljs.core.hash_map,map__5946):map__5946);
var s = map__5946__$1;
var a = cljs.core.get.call(null,map__5946__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__5946__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.minus.call(null,b,a),f),a);
});
cljs_intro.g2d.endpoint = (function cljs_intro$g2d$endpoint(p,segs){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),p,new cljs.core.Keyword(null,"segments","segments",1937535949),segs], null);
});
cljs_intro.g2d.ray = (function cljs_intro$g2d$ray(o,p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"p","p",151049309),p], null);
});
cljs_intro.g2d.intersection = (function cljs_intro$g2d$intersection(p__5947,p__5948){
var map__5953 = p__5947;
var map__5953__$1 = ((cljs.core.seq_QMARK_.call(null,map__5953))?cljs.core.apply.call(null,cljs.core.hash_map,map__5953):map__5953);
var map__5954 = cljs.core.get.call(null,map__5953__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5954__$1 = ((cljs.core.seq_QMARK_.call(null,map__5954))?cljs.core.apply.call(null,cljs.core.hash_map,map__5954):map__5954);
var ra = map__5954__$1;
var rpx = cljs.core.get.call(null,map__5954__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var rpy = cljs.core.get.call(null,map__5954__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rb = cljs.core.get.call(null,map__5953__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5955 = p__5948;
var map__5955__$1 = ((cljs.core.seq_QMARK_.call(null,map__5955))?cljs.core.apply.call(null,cljs.core.hash_map,map__5955):map__5955);
var map__5956 = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5956__$1 = ((cljs.core.seq_QMARK_.call(null,map__5956))?cljs.core.apply.call(null,cljs.core.hash_map,map__5956):map__5956);
var sega = map__5956__$1;
var spx = cljs.core.get.call(null,map__5956__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var spy = cljs.core.get.call(null,map__5956__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segb = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var r = cljs_intro.g2d.minus.call(null,rb,ra);
var s = cljs_intro.g2d.minus.call(null,segb,sega);
var uNumerator = cljs_intro.g2d.cross.call(null,cljs_intro.g2d.minus.call(null,sega,ra),r);
var denominator = cljs_intro.g2d.cross.call(null,r,s);
if((cljs.core._EQ_.call(null,(0),uNumerator)) && (cljs.core._EQ_.call(null,(0),denominator))){
return null;
} else {
if(cljs.core._EQ_.call(null,(0),denominator)){
return null;
} else {
var u = (uNumerator / denominator);
var t = (cljs_intro.g2d.cross.call(null,cljs_intro.g2d.minus.call(null,sega,ra),s) / denominator);
if(((t >= (0))) && ((u >= (0))) && ((u <= (1)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),cljs_intro.g2d.plus.call(null,ra,cljs_intro.g2d.scale.call(null,r,t)),new cljs.core.Keyword(null,"f","f",-1597136552),t], null);
} else {
return null;
}

}
}
});
/**
 * Return the distance from point m to ray [o p]
 */
cljs_intro.g2d.distance = (function cljs_intro$g2d$distance(p__5957,p__5958){
var map__5965 = p__5957;
var map__5965__$1 = ((cljs.core.seq_QMARK_.call(null,map__5965))?cljs.core.apply.call(null,cljs.core.hash_map,map__5965):map__5965);
var map__5966 = cljs.core.get.call(null,map__5965__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5966__$1 = ((cljs.core.seq_QMARK_.call(null,map__5966))?cljs.core.apply.call(null,cljs.core.hash_map,map__5966):map__5966);
var a = map__5966__$1;
var x1 = cljs.core.get.call(null,map__5966__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5966__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5967 = cljs.core.get.call(null,map__5965__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5967__$1 = ((cljs.core.seq_QMARK_.call(null,map__5967))?cljs.core.apply.call(null,cljs.core.hash_map,map__5967):map__5967);
var b = map__5967__$1;
var x2 = cljs.core.get.call(null,map__5967__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5967__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5968 = p__5958;
var map__5968__$1 = ((cljs.core.seq_QMARK_.call(null,map__5968))?cljs.core.apply.call(null,cljs.core.hash_map,map__5968):map__5968);
var m = map__5968__$1;
var x0 = cljs.core.get.call(null,map__5968__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5968__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5969 = cljs_intro.g2d.minus.call(null,b,a);
var map__5969__$1 = ((cljs.core.seq_QMARK_.call(null,map__5969))?cljs.core.apply.call(null,cljs.core.hash_map,map__5969):map__5969);
var vab = map__5969__$1;
var dx21 = cljs.core.get.call(null,map__5969__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__5969__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5970 = cljs_intro.g2d.minus.call(null,a,m);
var map__5970__$1 = ((cljs.core.seq_QMARK_.call(null,map__5970))?cljs.core.apply.call(null,cljs.core.hash_map,map__5970):map__5970);
var dx10 = cljs.core.get.call(null,map__5970__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__5970__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
/**
 * Return the distance from point m to segment [a b]
 */
cljs_intro.g2d.distance_to_segment = (function cljs_intro$g2d$distance_to_segment(p__5971,p__5972){
var map__5979 = p__5971;
var map__5979__$1 = ((cljs.core.seq_QMARK_.call(null,map__5979))?cljs.core.apply.call(null,cljs.core.hash_map,map__5979):map__5979);
var map__5980 = cljs.core.get.call(null,map__5979__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5980__$1 = ((cljs.core.seq_QMARK_.call(null,map__5980))?cljs.core.apply.call(null,cljs.core.hash_map,map__5980):map__5980);
var a = map__5980__$1;
var x1 = cljs.core.get.call(null,map__5980__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5980__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5981 = cljs.core.get.call(null,map__5979__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__5981__$1 = ((cljs.core.seq_QMARK_.call(null,map__5981))?cljs.core.apply.call(null,cljs.core.hash_map,map__5981):map__5981);
var b = map__5981__$1;
var x2 = cljs.core.get.call(null,map__5981__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5981__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5982 = p__5972;
var map__5982__$1 = ((cljs.core.seq_QMARK_.call(null,map__5982))?cljs.core.apply.call(null,cljs.core.hash_map,map__5982):map__5982);
var m = map__5982__$1;
var x0 = cljs.core.get.call(null,map__5982__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5982__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5983 = cljs_intro.g2d.minus.call(null,b,a);
var map__5983__$1 = ((cljs.core.seq_QMARK_.call(null,map__5983))?cljs.core.apply.call(null,cljs.core.hash_map,map__5983):map__5983);
var vab = map__5983__$1;
var dx21 = cljs.core.get.call(null,map__5983__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__5983__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5984 = cljs_intro.g2d.minus.call(null,a,m);
var map__5984__$1 = ((cljs.core.seq_QMARK_.call(null,map__5984))?cljs.core.apply.call(null,cljs.core.hash_map,map__5984):map__5984);
var dx10 = cljs.core.get.call(null,map__5984__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__5984__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
cljs_intro.g2d.ratio = (function cljs_intro$g2d$ratio(p__5985,p__5986){
var map__5991 = p__5985;
var map__5991__$1 = ((cljs.core.seq_QMARK_.call(null,map__5991))?cljs.core.apply.call(null,cljs.core.hash_map,map__5991):map__5991);
var map__5992 = cljs.core.get.call(null,map__5991__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5992__$1 = ((cljs.core.seq_QMARK_.call(null,map__5992))?cljs.core.apply.call(null,cljs.core.hash_map,map__5992):map__5992);
var a = map__5992__$1;
var x1 = cljs.core.get.call(null,map__5992__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5992__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5993 = cljs.core.get.call(null,map__5991__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5993__$1 = ((cljs.core.seq_QMARK_.call(null,map__5993))?cljs.core.apply.call(null,cljs.core.hash_map,map__5993):map__5993);
var b = map__5993__$1;
var x2 = cljs.core.get.call(null,map__5993__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5993__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5994 = p__5986;
var map__5994__$1 = ((cljs.core.seq_QMARK_.call(null,map__5994))?cljs.core.apply.call(null,cljs.core.hash_map,map__5994):map__5994);
var m = map__5994__$1;
var x0 = cljs.core.get.call(null,map__5994__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5994__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var op = cljs_intro.g2d.minus.call(null,b,a);
var om = cljs_intro.g2d.minus.call(null,m,a);
return (cljs_intro.g2d.magnitude.call(null,om) / cljs_intro.g2d.magnitude.call(null,op));
});
cljs_intro.g2d.circle = (function cljs_intro$g2d$circle(o,r){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
});
/**
 * Compute intersections between a circle and a segment.
 * 
 * Intersections are stated as ratios in [0, 1] such as
 * . 0 mean intersection lies at segment's origin,
 * . 1 means intersection lies at segment's endpoint,
 * . ]0, 1[ means intersection is "in" the segment
 * 
 * Result is a list of 0 to 2 offset values, sorted increasingly.
 * 
 * Code derived from : http://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
 * 
 */
cljs_intro.g2d.intersection_segment_circle = (function cljs_intro$g2d$intersection_segment_circle(p__5995,p__5996){
var map__6000 = p__5995;
var map__6000__$1 = ((cljs.core.seq_QMARK_.call(null,map__6000))?cljs.core.apply.call(null,cljs.core.hash_map,map__6000):map__6000);
var map__6001 = cljs.core.get.call(null,map__6000__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__6001__$1 = ((cljs.core.seq_QMARK_.call(null,map__6001))?cljs.core.apply.call(null,cljs.core.hash_map,map__6001):map__6001);
var o = map__6001__$1;
var ox = cljs.core.get.call(null,map__6001__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__6001__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__6000__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__6002 = p__5996;
var map__6002__$1 = ((cljs.core.seq_QMARK_.call(null,map__6002))?cljs.core.apply.call(null,cljs.core.hash_map,map__6002):map__6002);
var a = cljs.core.get.call(null,map__6002__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__6002__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var d = cljs_intro.g2d.minus.call(null,b,a);
var f = cljs_intro.g2d.minus.call(null,a,o);
var a__$1 = cljs_intro.g2d.dot.call(null,d,d);
var b__$1 = (2.0 * cljs_intro.g2d.dot.call(null,f,d));
var c = (cljs_intro.g2d.dot.call(null,f,f) - (r * r));
var discriminant = ((b__$1 * b__$1) - (((4) * a__$1) * c));
if((discriminant <= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
} else {
var root = Math.sqrt.call(null,discriminant);
var t1 = (((- b__$1) - root) / ((2) * a__$1));
var t2 = (((- b__$1) + root) / ((2) * a__$1));
var c1 = ((t1 >= (0))) && ((t1 <= (1)));
var c2 = ((t2 >= (0))) && ((t2 <= (1)));
if((c1) && (c2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t1","t1",24972444),t1,new cljs.core.Keyword(null,"t2","t2",-748855222),t2], null)], null);
} else {
if((c1) && (true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t1","t1",24972444),t1], null)], null);
} else {
if((c2) && (true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t2","t2",-748855222),t2], null)], null);
} else {
if(((t1 * t2) < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);

}
}
}
}

}
});

//# sourceMappingURL=g2d.js.map