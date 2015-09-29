// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.g2d');
goog.require('cljs.core');
cljs_intro.g2d.vec2d = (function cljs_intro$g2d$vec2d(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
cljs_intro.g2d.plus = (function cljs_intro$g2d$plus(p__9298,p__9299){
var map__9302 = p__9298;
var map__9302__$1 = ((cljs.core.seq_QMARK_.call(null,map__9302))?cljs.core.apply.call(null,cljs.core.hash_map,map__9302):map__9302);
var ax = cljs.core.get.call(null,map__9302__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__9302__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9303 = p__9299;
var map__9303__$1 = ((cljs.core.seq_QMARK_.call(null,map__9303))?cljs.core.apply.call(null,cljs.core.hash_map,map__9303):map__9303);
var bx = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax + bx),(ay + by));
});
cljs_intro.g2d.minus = (function cljs_intro$g2d$minus(p__9304,p__9305){
var map__9308 = p__9304;
var map__9308__$1 = ((cljs.core.seq_QMARK_.call(null,map__9308))?cljs.core.apply.call(null,cljs.core.hash_map,map__9308):map__9308);
var ax = cljs.core.get.call(null,map__9308__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__9308__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9309 = p__9305;
var map__9309__$1 = ((cljs.core.seq_QMARK_.call(null,map__9309))?cljs.core.apply.call(null,cljs.core.hash_map,map__9309):map__9309);
var bx = cljs.core.get.call(null,map__9309__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__9309__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax - bx),(ay - by));
});
cljs_intro.g2d.magnitude = (function cljs_intro$g2d$magnitude(){
var G__9311 = arguments.length;
switch (G__9311) {
case 1:
return cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$1 = (function (p__9312){
var map__9313 = p__9312;
var map__9313__$1 = ((cljs.core.seq_QMARK_.call(null,map__9313))?cljs.core.apply.call(null,cljs.core.hash_map,map__9313):map__9313);
var p = map__9313__$1;
var dx = cljs.core.get.call(null,map__9313__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__9313__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt.call(null,((dx * dx) + (dy * dy)));
});

cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs_intro.g2d.magnitude.call(null,cljs_intro.g2d.minus.call(null,a,b));
});

cljs_intro.g2d.magnitude.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.scale = (function cljs_intro$g2d$scale(p__9315,f){
var map__9317 = p__9315;
var map__9317__$1 = ((cljs.core.seq_QMARK_.call(null,map__9317))?cljs.core.apply.call(null,cljs.core.hash_map,map__9317):map__9317);
var x = cljs.core.get.call(null,map__9317__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9317__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(x * f),(y * f));
});
cljs_intro.g2d.cross = (function cljs_intro$g2d$cross(p__9318,p__9319){
var map__9322 = p__9318;
var map__9322__$1 = ((cljs.core.seq_QMARK_.call(null,map__9322))?cljs.core.apply.call(null,cljs.core.hash_map,map__9322):map__9322);
var ax = cljs.core.get.call(null,map__9322__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__9322__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9323 = p__9319;
var map__9323__$1 = ((cljs.core.seq_QMARK_.call(null,map__9323))?cljs.core.apply.call(null,cljs.core.hash_map,map__9323):map__9323);
var bx = cljs.core.get.call(null,map__9323__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__9323__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * by) - (ay * bx));
});
cljs_intro.g2d.dot = (function cljs_intro$g2d$dot(p__9324,p__9325){
var map__9328 = p__9324;
var map__9328__$1 = ((cljs.core.seq_QMARK_.call(null,map__9328))?cljs.core.apply.call(null,cljs.core.hash_map,map__9328):map__9328);
var ax = cljs.core.get.call(null,map__9328__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__9328__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9329 = p__9325;
var map__9329__$1 = ((cljs.core.seq_QMARK_.call(null,map__9329))?cljs.core.apply.call(null,cljs.core.hash_map,map__9329):map__9329);
var bx = cljs.core.get.call(null,map__9329__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__9329__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * bx) + (ay * by));
});
cljs_intro.g2d.__GT_polar = (function cljs_intro$g2d$__GT_polar(){
var G__9331 = arguments.length;
switch (G__9331) {
case 1:
return cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$1 = (function (p__9332){
var map__9333 = p__9332;
var map__9333__$1 = ((cljs.core.seq_QMARK_.call(null,map__9333))?cljs.core.apply.call(null,cljs.core.hash_map,map__9333):map__9333);
var p = map__9333__$1;
var x = cljs.core.get.call(null,map__9333__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9333__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.polar.call(null,cljs_intro.g2d.magnitude.call(null,p),Math.atan2.call(null,y,x));
});

cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$2 = (function (o,p){
return cljs_intro.g2d.__GT_polar.call(null,cljs_intro.g2d.minus.call(null,p,o));
});

cljs_intro.g2d.__GT_polar.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.O = cljs_intro.g2d.vec2d.call(null,(0),(0));
cljs_intro.g2d.polar__GT_ = (function cljs_intro$g2d$polar__GT_(){
var G__9336 = arguments.length;
switch (G__9336) {
case 1:
return cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs_intro.g2d.polar__GT_.call(null,cljs_intro.g2d.O,p);
});

cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$2 = (function (o,p__9337){
var map__9338 = p__9337;
var map__9338__$1 = ((cljs.core.seq_QMARK_.call(null,map__9338))?cljs.core.apply.call(null,cljs.core.hash_map,map__9338):map__9338);
var r = cljs.core.get.call(null,map__9338__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var theta = cljs.core.get.call(null,map__9338__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.vec2d.call(null,Math.cos.call(null,theta),Math.sin.call(null,theta)),r),o);
});

cljs_intro.g2d.polar__GT_.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.rotate = (function cljs_intro$g2d$rotate(p__9340,a){
var vec__9342 = p__9340;
var x = cljs.core.nth.call(null,vec__9342,(0),null);
var y = cljs.core.nth.call(null,vec__9342,(1),null);
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
cljs_intro.g2d.stretch = (function cljs_intro$g2d$stretch(p__9343,f){
var map__9345 = p__9343;
var map__9345__$1 = ((cljs.core.seq_QMARK_.call(null,map__9345))?cljs.core.apply.call(null,cljs.core.hash_map,map__9345):map__9345);
var s = map__9345__$1;
var a = cljs.core.get.call(null,map__9345__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__9345__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.minus.call(null,b,a),f),a);
});
cljs_intro.g2d.endpoint = (function cljs_intro$g2d$endpoint(p,segs){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),p,new cljs.core.Keyword(null,"segments","segments",1937535949),segs], null);
});
cljs_intro.g2d.ray = (function cljs_intro$g2d$ray(o,p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"p","p",151049309),p], null);
});
cljs_intro.g2d.intersection = (function cljs_intro$g2d$intersection(p__9346,p__9347){
var map__9352 = p__9346;
var map__9352__$1 = ((cljs.core.seq_QMARK_.call(null,map__9352))?cljs.core.apply.call(null,cljs.core.hash_map,map__9352):map__9352);
var map__9353 = cljs.core.get.call(null,map__9352__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__9353__$1 = ((cljs.core.seq_QMARK_.call(null,map__9353))?cljs.core.apply.call(null,cljs.core.hash_map,map__9353):map__9353);
var ra = map__9353__$1;
var rpx = cljs.core.get.call(null,map__9353__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var rpy = cljs.core.get.call(null,map__9353__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rb = cljs.core.get.call(null,map__9352__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__9354 = p__9347;
var map__9354__$1 = ((cljs.core.seq_QMARK_.call(null,map__9354))?cljs.core.apply.call(null,cljs.core.hash_map,map__9354):map__9354);
var map__9355 = cljs.core.get.call(null,map__9354__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__9355__$1 = ((cljs.core.seq_QMARK_.call(null,map__9355))?cljs.core.apply.call(null,cljs.core.hash_map,map__9355):map__9355);
var sega = map__9355__$1;
var spx = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var spy = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segb = cljs.core.get.call(null,map__9354__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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
cljs_intro.g2d.distance = (function cljs_intro$g2d$distance(p__9356,p__9357){
var map__9364 = p__9356;
var map__9364__$1 = ((cljs.core.seq_QMARK_.call(null,map__9364))?cljs.core.apply.call(null,cljs.core.hash_map,map__9364):map__9364);
var map__9365 = cljs.core.get.call(null,map__9364__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__9365__$1 = ((cljs.core.seq_QMARK_.call(null,map__9365))?cljs.core.apply.call(null,cljs.core.hash_map,map__9365):map__9365);
var a = map__9365__$1;
var x1 = cljs.core.get.call(null,map__9365__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9365__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9366 = cljs.core.get.call(null,map__9364__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__9366__$1 = ((cljs.core.seq_QMARK_.call(null,map__9366))?cljs.core.apply.call(null,cljs.core.hash_map,map__9366):map__9366);
var b = map__9366__$1;
var x2 = cljs.core.get.call(null,map__9366__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__9366__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9367 = p__9357;
var map__9367__$1 = ((cljs.core.seq_QMARK_.call(null,map__9367))?cljs.core.apply.call(null,cljs.core.hash_map,map__9367):map__9367);
var m = map__9367__$1;
var x0 = cljs.core.get.call(null,map__9367__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9367__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9368 = cljs_intro.g2d.minus.call(null,b,a);
var map__9368__$1 = ((cljs.core.seq_QMARK_.call(null,map__9368))?cljs.core.apply.call(null,cljs.core.hash_map,map__9368):map__9368);
var vab = map__9368__$1;
var dx21 = cljs.core.get.call(null,map__9368__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__9368__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9369 = cljs_intro.g2d.minus.call(null,a,m);
var map__9369__$1 = ((cljs.core.seq_QMARK_.call(null,map__9369))?cljs.core.apply.call(null,cljs.core.hash_map,map__9369):map__9369);
var dx10 = cljs.core.get.call(null,map__9369__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__9369__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
/**
 * Return the distance from point m to segment [a b]
 */
cljs_intro.g2d.distance_to_segment = (function cljs_intro$g2d$distance_to_segment(p__9370,p__9371){
var map__9378 = p__9370;
var map__9378__$1 = ((cljs.core.seq_QMARK_.call(null,map__9378))?cljs.core.apply.call(null,cljs.core.hash_map,map__9378):map__9378);
var map__9379 = cljs.core.get.call(null,map__9378__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__9379__$1 = ((cljs.core.seq_QMARK_.call(null,map__9379))?cljs.core.apply.call(null,cljs.core.hash_map,map__9379):map__9379);
var a = map__9379__$1;
var x1 = cljs.core.get.call(null,map__9379__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9379__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9380 = cljs.core.get.call(null,map__9378__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__9380__$1 = ((cljs.core.seq_QMARK_.call(null,map__9380))?cljs.core.apply.call(null,cljs.core.hash_map,map__9380):map__9380);
var b = map__9380__$1;
var x2 = cljs.core.get.call(null,map__9380__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__9380__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9381 = p__9371;
var map__9381__$1 = ((cljs.core.seq_QMARK_.call(null,map__9381))?cljs.core.apply.call(null,cljs.core.hash_map,map__9381):map__9381);
var m = map__9381__$1;
var x0 = cljs.core.get.call(null,map__9381__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9381__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9382 = cljs_intro.g2d.minus.call(null,b,a);
var map__9382__$1 = ((cljs.core.seq_QMARK_.call(null,map__9382))?cljs.core.apply.call(null,cljs.core.hash_map,map__9382):map__9382);
var vab = map__9382__$1;
var dx21 = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9383 = cljs_intro.g2d.minus.call(null,a,m);
var map__9383__$1 = ((cljs.core.seq_QMARK_.call(null,map__9383))?cljs.core.apply.call(null,cljs.core.hash_map,map__9383):map__9383);
var dx10 = cljs.core.get.call(null,map__9383__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__9383__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
cljs_intro.g2d.ratio = (function cljs_intro$g2d$ratio(p__9384,p__9385){
var map__9390 = p__9384;
var map__9390__$1 = ((cljs.core.seq_QMARK_.call(null,map__9390))?cljs.core.apply.call(null,cljs.core.hash_map,map__9390):map__9390);
var map__9391 = cljs.core.get.call(null,map__9390__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__9391__$1 = ((cljs.core.seq_QMARK_.call(null,map__9391))?cljs.core.apply.call(null,cljs.core.hash_map,map__9391):map__9391);
var a = map__9391__$1;
var x1 = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9392 = cljs.core.get.call(null,map__9390__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__9392__$1 = ((cljs.core.seq_QMARK_.call(null,map__9392))?cljs.core.apply.call(null,cljs.core.hash_map,map__9392):map__9392);
var b = map__9392__$1;
var x2 = cljs.core.get.call(null,map__9392__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__9392__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9393 = p__9385;
var map__9393__$1 = ((cljs.core.seq_QMARK_.call(null,map__9393))?cljs.core.apply.call(null,cljs.core.hash_map,map__9393):map__9393);
var m = map__9393__$1;
var x0 = cljs.core.get.call(null,map__9393__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9393__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
cljs_intro.g2d.intersection_segment_circle = (function cljs_intro$g2d$intersection_segment_circle(p__9394,p__9395){
var map__9399 = p__9394;
var map__9399__$1 = ((cljs.core.seq_QMARK_.call(null,map__9399))?cljs.core.apply.call(null,cljs.core.hash_map,map__9399):map__9399);
var map__9400 = cljs.core.get.call(null,map__9399__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__9400__$1 = ((cljs.core.seq_QMARK_.call(null,map__9400))?cljs.core.apply.call(null,cljs.core.hash_map,map__9400):map__9400);
var o = map__9400__$1;
var ox = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__9400__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__9399__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__9401 = p__9395;
var map__9401__$1 = ((cljs.core.seq_QMARK_.call(null,map__9401))?cljs.core.apply.call(null,cljs.core.hash_map,map__9401):map__9401);
var a = cljs.core.get.call(null,map__9401__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__9401__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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