// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.g2d');
goog.require('cljs.core');
cljs_intro.g2d.vec2d = (function cljs_intro$g2d$vec2d(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
cljs_intro.g2d.plus = (function cljs_intro$g2d$plus(p__5760,p__5761){
var map__5766 = p__5760;
var map__5766__$1 = ((((!((map__5766 == null)))?((((map__5766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5766):map__5766);
var ax = cljs.core.get.call(null,map__5766__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5766__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5767 = p__5761;
var map__5767__$1 = ((((!((map__5767 == null)))?((((map__5767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5767):map__5767);
var bx = cljs.core.get.call(null,map__5767__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5767__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax + bx),(ay + by));
});
cljs_intro.g2d.minus = (function cljs_intro$g2d$minus(p__5770,p__5771){
var map__5776 = p__5770;
var map__5776__$1 = ((((!((map__5776 == null)))?((((map__5776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5776):map__5776);
var ax = cljs.core.get.call(null,map__5776__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5776__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5777 = p__5771;
var map__5777__$1 = ((((!((map__5777 == null)))?((((map__5777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5777):map__5777);
var bx = cljs.core.get.call(null,map__5777__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5777__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax - bx),(ay - by));
});
cljs_intro.g2d.magnitude = (function cljs_intro$g2d$magnitude(var_args){
var args5780 = [];
var len__5627__auto___5786 = arguments.length;
var i__5628__auto___5787 = (0);
while(true){
if((i__5628__auto___5787 < len__5627__auto___5786)){
args5780.push((arguments[i__5628__auto___5787]));

var G__5788 = (i__5628__auto___5787 + (1));
i__5628__auto___5787 = G__5788;
continue;
} else {
}
break;
}

var G__5782 = args5780.length;
switch (G__5782) {
case 1:
return cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5780.length)].join('')));

}
});

cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$1 = (function (p__5783){
var map__5784 = p__5783;
var map__5784__$1 = ((((!((map__5784 == null)))?((((map__5784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5784):map__5784);
var p = map__5784__$1;
var dx = cljs.core.get.call(null,map__5784__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__5784__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt(((dx * dx) + (dy * dy)));
});

cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs_intro.g2d.magnitude.call(null,cljs_intro.g2d.minus.call(null,a,b));
});

cljs_intro.g2d.magnitude.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.scale = (function cljs_intro$g2d$scale(p__5790,f){
var map__5793 = p__5790;
var map__5793__$1 = ((((!((map__5793 == null)))?((((map__5793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5793):map__5793);
var x = cljs.core.get.call(null,map__5793__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5793__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(x * f),(y * f));
});
cljs_intro.g2d.cross = (function cljs_intro$g2d$cross(p__5795,p__5796){
var map__5801 = p__5795;
var map__5801__$1 = ((((!((map__5801 == null)))?((((map__5801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5801):map__5801);
var ax = cljs.core.get.call(null,map__5801__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5801__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5802 = p__5796;
var map__5802__$1 = ((((!((map__5802 == null)))?((((map__5802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5802):map__5802);
var bx = cljs.core.get.call(null,map__5802__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5802__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * by) - (ay * bx));
});
cljs_intro.g2d.dot = (function cljs_intro$g2d$dot(p__5805,p__5806){
var map__5811 = p__5805;
var map__5811__$1 = ((((!((map__5811 == null)))?((((map__5811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5811):map__5811);
var ax = cljs.core.get.call(null,map__5811__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5811__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5812 = p__5806;
var map__5812__$1 = ((((!((map__5812 == null)))?((((map__5812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5812):map__5812);
var bx = cljs.core.get.call(null,map__5812__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5812__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * bx) + (ay * by));
});
cljs_intro.g2d.polar;
cljs_intro.g2d.__GT_polar = (function cljs_intro$g2d$__GT_polar(var_args){
var args5815 = [];
var len__5627__auto___5821 = arguments.length;
var i__5628__auto___5822 = (0);
while(true){
if((i__5628__auto___5822 < len__5627__auto___5821)){
args5815.push((arguments[i__5628__auto___5822]));

var G__5823 = (i__5628__auto___5822 + (1));
i__5628__auto___5822 = G__5823;
continue;
} else {
}
break;
}

var G__5817 = args5815.length;
switch (G__5817) {
case 1:
return cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5815.length)].join('')));

}
});

cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$1 = (function (p__5818){
var map__5819 = p__5818;
var map__5819__$1 = ((((!((map__5819 == null)))?((((map__5819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5819):map__5819);
var p = map__5819__$1;
var x = cljs.core.get.call(null,map__5819__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5819__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.polar.call(null,cljs_intro.g2d.magnitude.call(null,p),Math.atan2(y,x));
});

cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$2 = (function (o,p){
return cljs_intro.g2d.__GT_polar.call(null,cljs_intro.g2d.minus.call(null,p,o));
});

cljs_intro.g2d.__GT_polar.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.O = cljs_intro.g2d.vec2d.call(null,(0),(0));
cljs_intro.g2d.polar__GT_ = (function cljs_intro$g2d$polar__GT_(var_args){
var args5825 = [];
var len__5627__auto___5831 = arguments.length;
var i__5628__auto___5832 = (0);
while(true){
if((i__5628__auto___5832 < len__5627__auto___5831)){
args5825.push((arguments[i__5628__auto___5832]));

var G__5833 = (i__5628__auto___5832 + (1));
i__5628__auto___5832 = G__5833;
continue;
} else {
}
break;
}

var G__5827 = args5825.length;
switch (G__5827) {
case 1:
return cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5825.length)].join('')));

}
});

cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs_intro.g2d.polar__GT_.call(null,cljs_intro.g2d.O,p);
});

cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$2 = (function (o,p__5828){
var map__5829 = p__5828;
var map__5829__$1 = ((((!((map__5829 == null)))?((((map__5829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5829):map__5829);
var r = cljs.core.get.call(null,map__5829__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var theta = cljs.core.get.call(null,map__5829__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.vec2d.call(null,Math.cos(theta),Math.sin(theta)),r),o);
});

cljs_intro.g2d.polar__GT_.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.rotate = (function cljs_intro$g2d$rotate(p__5835,a){
var vec__5837 = p__5835;
var x = cljs.core.nth.call(null,vec__5837,(0),null);
var y = cljs.core.nth.call(null,vec__5837,(1),null);
var c = Math.cos(a);
var s = Math.sin(a);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * c) - (y * s)),((y * c) + (x * s))], null);
});
cljs_intro.g2d.polar = (function cljs_intro$g2d$polar(r,theta){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"theta","theta",-427510258),theta], null);
});
cljs_intro.g2d.segment = (function cljs_intro$g2d$segment(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),a,new cljs.core.Keyword(null,"b","b",1482224470),b], null);
});
cljs_intro.g2d.stretch = (function cljs_intro$g2d$stretch(p__5838,f){
var map__5841 = p__5838;
var map__5841__$1 = ((((!((map__5841 == null)))?((((map__5841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5841):map__5841);
var s = map__5841__$1;
var a = cljs.core.get.call(null,map__5841__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__5841__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.minus.call(null,b,a),f),a);
});
cljs_intro.g2d.endpoint = (function cljs_intro$g2d$endpoint(p,segs){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),p,new cljs.core.Keyword(null,"segments","segments",1937535949),segs], null);
});
cljs_intro.g2d.ray = (function cljs_intro$g2d$ray(o,p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"p","p",151049309),p], null);
});
cljs_intro.g2d.intersection = (function cljs_intro$g2d$intersection(p__5843,p__5844){
var map__5853 = p__5843;
var map__5853__$1 = ((((!((map__5853 == null)))?((((map__5853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5853):map__5853);
var map__5854 = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5854__$1 = ((((!((map__5854 == null)))?((((map__5854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5854):map__5854);
var ra = map__5854__$1;
var rpx = cljs.core.get.call(null,map__5854__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var rpy = cljs.core.get.call(null,map__5854__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rb = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5855 = p__5844;
var map__5855__$1 = ((((!((map__5855 == null)))?((((map__5855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5855):map__5855);
var map__5856 = cljs.core.get.call(null,map__5855__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5856__$1 = ((((!((map__5856 == null)))?((((map__5856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5856):map__5856);
var sega = map__5856__$1;
var spx = cljs.core.get.call(null,map__5856__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var spy = cljs.core.get.call(null,map__5856__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segb = cljs.core.get.call(null,map__5855__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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
cljs_intro.g2d.distance = (function cljs_intro$g2d$distance(p__5861,p__5862){
var map__5875 = p__5861;
var map__5875__$1 = ((((!((map__5875 == null)))?((((map__5875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5875):map__5875);
var map__5876 = cljs.core.get.call(null,map__5875__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5876__$1 = ((((!((map__5876 == null)))?((((map__5876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5876):map__5876);
var a = map__5876__$1;
var x1 = cljs.core.get.call(null,map__5876__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5876__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5877 = cljs.core.get.call(null,map__5875__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5877__$1 = ((((!((map__5877 == null)))?((((map__5877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5877):map__5877);
var b = map__5877__$1;
var x2 = cljs.core.get.call(null,map__5877__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5877__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5878 = p__5862;
var map__5878__$1 = ((((!((map__5878 == null)))?((((map__5878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5878):map__5878);
var m = map__5878__$1;
var x0 = cljs.core.get.call(null,map__5878__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5878__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5883 = cljs_intro.g2d.minus.call(null,b,a);
var map__5883__$1 = ((((!((map__5883 == null)))?((((map__5883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5883):map__5883);
var vab = map__5883__$1;
var dx21 = cljs.core.get.call(null,map__5883__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__5883__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5884 = cljs_intro.g2d.minus.call(null,a,m);
var map__5884__$1 = ((((!((map__5884 == null)))?((((map__5884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5884):map__5884);
var dx10 = cljs.core.get.call(null,map__5884__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__5884__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
/**
 * Return the distance from point m to segment [a b]
 */
cljs_intro.g2d.distance_to_segment = (function cljs_intro$g2d$distance_to_segment(p__5887,p__5888){
var map__5901 = p__5887;
var map__5901__$1 = ((((!((map__5901 == null)))?((((map__5901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5901):map__5901);
var map__5902 = cljs.core.get.call(null,map__5901__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5902__$1 = ((((!((map__5902 == null)))?((((map__5902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5902):map__5902);
var a = map__5902__$1;
var x1 = cljs.core.get.call(null,map__5902__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5902__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5903 = cljs.core.get.call(null,map__5901__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__5903__$1 = ((((!((map__5903 == null)))?((((map__5903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5903):map__5903);
var b = map__5903__$1;
var x2 = cljs.core.get.call(null,map__5903__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5903__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5904 = p__5888;
var map__5904__$1 = ((((!((map__5904 == null)))?((((map__5904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5904):map__5904);
var m = map__5904__$1;
var x0 = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5909 = cljs_intro.g2d.minus.call(null,b,a);
var map__5909__$1 = ((((!((map__5909 == null)))?((((map__5909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5909):map__5909);
var vab = map__5909__$1;
var dx21 = cljs.core.get.call(null,map__5909__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__5909__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5910 = cljs_intro.g2d.minus.call(null,a,m);
var map__5910__$1 = ((((!((map__5910 == null)))?((((map__5910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5910):map__5910);
var dx10 = cljs.core.get.call(null,map__5910__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__5910__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
cljs_intro.g2d.ratio = (function cljs_intro$g2d$ratio(p__5913,p__5914){
var map__5923 = p__5913;
var map__5923__$1 = ((((!((map__5923 == null)))?((((map__5923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5923):map__5923);
var map__5924 = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5924__$1 = ((((!((map__5924 == null)))?((((map__5924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5924):map__5924);
var a = map__5924__$1;
var x1 = cljs.core.get.call(null,map__5924__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5924__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5925 = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5925__$1 = ((((!((map__5925 == null)))?((((map__5925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5925):map__5925);
var b = map__5925__$1;
var x2 = cljs.core.get.call(null,map__5925__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5925__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5926 = p__5914;
var map__5926__$1 = ((((!((map__5926 == null)))?((((map__5926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5926):map__5926);
var m = map__5926__$1;
var x0 = cljs.core.get.call(null,map__5926__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5926__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
 *   Intersections are stated as ratios in [0, 1] such as
 *   . 0 mean intersection lies at segment's origin,
 *   . 1 means intersection lies at segment's endpoint,
 *   . ]0, 1[ means intersection is "in" the segment
 * 
 *   Result is a list of 0 to 2 offset values, sorted increasingly.
 * 
 *   Code derived from : http://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
 *   
 */
cljs_intro.g2d.intersection_segment_circle = (function cljs_intro$g2d$intersection_segment_circle(p__5931,p__5932){
var map__5939 = p__5931;
var map__5939__$1 = ((((!((map__5939 == null)))?((((map__5939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5939):map__5939);
var map__5940 = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5940__$1 = ((((!((map__5940 == null)))?((((map__5940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5940):map__5940);
var o = map__5940__$1;
var ox = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__5940__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__5941 = p__5932;
var map__5941__$1 = ((((!((map__5941 == null)))?((((map__5941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5941):map__5941);
var a = cljs.core.get.call(null,map__5941__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__5941__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var d = cljs_intro.g2d.minus.call(null,b,a);
var f = cljs_intro.g2d.minus.call(null,a,o);
var a__$1 = cljs_intro.g2d.dot.call(null,d,d);
var b__$1 = (2.0 * cljs_intro.g2d.dot.call(null,f,d));
var c = (cljs_intro.g2d.dot.call(null,f,f) - (r * r));
var discriminant = ((b__$1 * b__$1) - (((4) * a__$1) * c));
if((discriminant <= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
} else {
var root = Math.sqrt(discriminant);
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
/**
 * Map any angle initially in [-pi, pi], possibly translated by a value in [-pi, +pi] into [-pi, pi[.
 */
cljs_intro.g2d.__GT__pi_PLUS_pi = (function cljs_intro$g2d$__GT__pi_PLUS_pi(x){
if((x < (- Math.PI))){
return (x + ((2) * Math.PI));
} else {
if((x < Math.PI)){
return x;
} else {
return (x - ((2) * Math.PI));

}
}
});
/**
 * Map any angle in [-pi, pi] into [0, 2pi[.
 */
cljs_intro.g2d._pi_PLUS_pi__GT_0_PLUS_2pi = (function cljs_intro$g2d$_pi_PLUS_pi__GT_0_PLUS_2pi(x){
if((x >= (0))){
return x;
} else {
return (x + ((2) * Math.PI));
}
});
/**
 * Map any angle initially in [0, 2pi[, possibly translated by a value in [-pi, +pi] into [0, 2pi[.
 */
cljs_intro.g2d.__GT_0_PLUS_2pi = (function cljs_intro$g2d$__GT_0_PLUS_2pi(x){
if((x < (0))){
return (x + ((2) * Math.PI));
} else {
if((x < ((2) * Math.PI))){
return x;
} else {
return (x - ((2) * Math.PI));

}
}
});
cljs_intro.g2d.deg__GT_rad = (function cljs_intro$g2d$deg__GT_rad(d){
return ((d * Math.PI) / 180.0);
});
cljs_intro.g2d.rad__GT_deg = (function cljs_intro$g2d$rad__GT_deg(r){
return ((r * 180.0) / Math.PI);
});

//# sourceMappingURL=g2d.js.map