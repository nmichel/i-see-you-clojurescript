// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.g2d');
goog.require('cljs.core');
cljs_intro.g2d.vec2d = (function cljs_intro$g2d$vec2d(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
cljs_intro.g2d.plus = (function cljs_intro$g2d$plus(p__19230,p__19231){
var map__19234 = p__19230;
var map__19234__$1 = ((cljs.core.seq_QMARK_.call(null,map__19234))?cljs.core.apply.call(null,cljs.core.hash_map,map__19234):map__19234);
var ax = cljs.core.get.call(null,map__19234__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__19234__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19235 = p__19231;
var map__19235__$1 = ((cljs.core.seq_QMARK_.call(null,map__19235))?cljs.core.apply.call(null,cljs.core.hash_map,map__19235):map__19235);
var bx = cljs.core.get.call(null,map__19235__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__19235__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax + bx),(ay + by));
});
cljs_intro.g2d.minus = (function cljs_intro$g2d$minus(p__19236,p__19237){
var map__19240 = p__19236;
var map__19240__$1 = ((cljs.core.seq_QMARK_.call(null,map__19240))?cljs.core.apply.call(null,cljs.core.hash_map,map__19240):map__19240);
var ax = cljs.core.get.call(null,map__19240__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__19240__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19241 = p__19237;
var map__19241__$1 = ((cljs.core.seq_QMARK_.call(null,map__19241))?cljs.core.apply.call(null,cljs.core.hash_map,map__19241):map__19241);
var bx = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax - bx),(ay - by));
});
cljs_intro.g2d.magnitude = (function cljs_intro$g2d$magnitude(){
var G__19243 = arguments.length;
switch (G__19243) {
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

cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$1 = (function (p__19244){
var map__19245 = p__19244;
var map__19245__$1 = ((cljs.core.seq_QMARK_.call(null,map__19245))?cljs.core.apply.call(null,cljs.core.hash_map,map__19245):map__19245);
var p = map__19245__$1;
var dx = cljs.core.get.call(null,map__19245__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__19245__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt.call(null,((dx * dx) + (dy * dy)));
});

cljs_intro.g2d.magnitude.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs_intro.g2d.magnitude.call(null,cljs_intro.g2d.minus.call(null,a,b));
});

cljs_intro.g2d.magnitude.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.scale = (function cljs_intro$g2d$scale(p__19247,f){
var map__19249 = p__19247;
var map__19249__$1 = ((cljs.core.seq_QMARK_.call(null,map__19249))?cljs.core.apply.call(null,cljs.core.hash_map,map__19249):map__19249);
var x = cljs.core.get.call(null,map__19249__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19249__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(x * f),(y * f));
});
cljs_intro.g2d.cross = (function cljs_intro$g2d$cross(p__19250,p__19251){
var map__19254 = p__19250;
var map__19254__$1 = ((cljs.core.seq_QMARK_.call(null,map__19254))?cljs.core.apply.call(null,cljs.core.hash_map,map__19254):map__19254);
var ax = cljs.core.get.call(null,map__19254__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__19254__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19255 = p__19251;
var map__19255__$1 = ((cljs.core.seq_QMARK_.call(null,map__19255))?cljs.core.apply.call(null,cljs.core.hash_map,map__19255):map__19255);
var bx = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * by) - (ay * bx));
});
cljs_intro.g2d.dot = (function cljs_intro$g2d$dot(p__19256,p__19257){
var map__19260 = p__19256;
var map__19260__$1 = ((cljs.core.seq_QMARK_.call(null,map__19260))?cljs.core.apply.call(null,cljs.core.hash_map,map__19260):map__19260);
var ax = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19261 = p__19257;
var map__19261__$1 = ((cljs.core.seq_QMARK_.call(null,map__19261))?cljs.core.apply.call(null,cljs.core.hash_map,map__19261):map__19261);
var bx = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__19261__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * bx) + (ay * by));
});
cljs_intro.g2d.__GT_polar = (function cljs_intro$g2d$__GT_polar(){
var G__19263 = arguments.length;
switch (G__19263) {
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

cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$1 = (function (p__19264){
var map__19265 = p__19264;
var map__19265__$1 = ((cljs.core.seq_QMARK_.call(null,map__19265))?cljs.core.apply.call(null,cljs.core.hash_map,map__19265):map__19265);
var p = map__19265__$1;
var x = cljs.core.get.call(null,map__19265__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19265__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.polar.call(null,cljs_intro.g2d.magnitude.call(null,p),Math.atan2.call(null,y,x));
});

cljs_intro.g2d.__GT_polar.cljs$core$IFn$_invoke$arity$2 = (function (o,p){
return cljs_intro.g2d.__GT_polar.call(null,cljs_intro.g2d.minus.call(null,p,o));
});

cljs_intro.g2d.__GT_polar.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.O = cljs_intro.g2d.vec2d.call(null,(0),(0));
cljs_intro.g2d.polar__GT_ = (function cljs_intro$g2d$polar__GT_(){
var G__19268 = arguments.length;
switch (G__19268) {
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

cljs_intro.g2d.polar__GT_.cljs$core$IFn$_invoke$arity$2 = (function (o,p__19269){
var map__19270 = p__19269;
var map__19270__$1 = ((cljs.core.seq_QMARK_.call(null,map__19270))?cljs.core.apply.call(null,cljs.core.hash_map,map__19270):map__19270);
var r = cljs.core.get.call(null,map__19270__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var theta = cljs.core.get.call(null,map__19270__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.vec2d.call(null,Math.cos.call(null,theta),Math.sin.call(null,theta)),r),o);
});

cljs_intro.g2d.polar__GT_.cljs$lang$maxFixedArity = 2;
cljs_intro.g2d.rotate = (function cljs_intro$g2d$rotate(p__19272,a){
var vec__19274 = p__19272;
var x = cljs.core.nth.call(null,vec__19274,(0),null);
var y = cljs.core.nth.call(null,vec__19274,(1),null);
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
cljs_intro.g2d.stretch = (function cljs_intro$g2d$stretch(p__19275,f){
var map__19277 = p__19275;
var map__19277__$1 = ((cljs.core.seq_QMARK_.call(null,map__19277))?cljs.core.apply.call(null,cljs.core.hash_map,map__19277):map__19277);
var s = map__19277__$1;
var a = cljs.core.get.call(null,map__19277__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__19277__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.minus.call(null,b,a),f),a);
});
cljs_intro.g2d.endpoint = (function cljs_intro$g2d$endpoint(p,segs){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),p,new cljs.core.Keyword(null,"segments","segments",1937535949),segs], null);
});
cljs_intro.g2d.ray = (function cljs_intro$g2d$ray(o,p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"p","p",151049309),p], null);
});
cljs_intro.g2d.intersection = (function cljs_intro$g2d$intersection(p__19278,p__19279){
var map__19284 = p__19278;
var map__19284__$1 = ((cljs.core.seq_QMARK_.call(null,map__19284))?cljs.core.apply.call(null,cljs.core.hash_map,map__19284):map__19284);
var map__19285 = cljs.core.get.call(null,map__19284__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__19285__$1 = ((cljs.core.seq_QMARK_.call(null,map__19285))?cljs.core.apply.call(null,cljs.core.hash_map,map__19285):map__19285);
var ra = map__19285__$1;
var rpx = cljs.core.get.call(null,map__19285__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var rpy = cljs.core.get.call(null,map__19285__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rb = cljs.core.get.call(null,map__19284__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__19286 = p__19279;
var map__19286__$1 = ((cljs.core.seq_QMARK_.call(null,map__19286))?cljs.core.apply.call(null,cljs.core.hash_map,map__19286):map__19286);
var map__19287 = cljs.core.get.call(null,map__19286__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__19287__$1 = ((cljs.core.seq_QMARK_.call(null,map__19287))?cljs.core.apply.call(null,cljs.core.hash_map,map__19287):map__19287);
var sega = map__19287__$1;
var spx = cljs.core.get.call(null,map__19287__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var spy = cljs.core.get.call(null,map__19287__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segb = cljs.core.get.call(null,map__19286__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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
cljs_intro.g2d.distance = (function cljs_intro$g2d$distance(p__19288,p__19289){
var map__19296 = p__19288;
var map__19296__$1 = ((cljs.core.seq_QMARK_.call(null,map__19296))?cljs.core.apply.call(null,cljs.core.hash_map,map__19296):map__19296);
var map__19297 = cljs.core.get.call(null,map__19296__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__19297__$1 = ((cljs.core.seq_QMARK_.call(null,map__19297))?cljs.core.apply.call(null,cljs.core.hash_map,map__19297):map__19297);
var a = map__19297__$1;
var x1 = cljs.core.get.call(null,map__19297__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__19297__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19298 = cljs.core.get.call(null,map__19296__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__19298__$1 = ((cljs.core.seq_QMARK_.call(null,map__19298))?cljs.core.apply.call(null,cljs.core.hash_map,map__19298):map__19298);
var b = map__19298__$1;
var x2 = cljs.core.get.call(null,map__19298__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__19298__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19299 = p__19289;
var map__19299__$1 = ((cljs.core.seq_QMARK_.call(null,map__19299))?cljs.core.apply.call(null,cljs.core.hash_map,map__19299):map__19299);
var m = map__19299__$1;
var x0 = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19300 = cljs_intro.g2d.minus.call(null,b,a);
var map__19300__$1 = ((cljs.core.seq_QMARK_.call(null,map__19300))?cljs.core.apply.call(null,cljs.core.hash_map,map__19300):map__19300);
var vab = map__19300__$1;
var dx21 = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__19300__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19301 = cljs_intro.g2d.minus.call(null,a,m);
var map__19301__$1 = ((cljs.core.seq_QMARK_.call(null,map__19301))?cljs.core.apply.call(null,cljs.core.hash_map,map__19301):map__19301);
var dx10 = cljs.core.get.call(null,map__19301__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__19301__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
/**
 * Return the distance from point m to segment [a b]
 */
cljs_intro.g2d.distance_to_segment = (function cljs_intro$g2d$distance_to_segment(p__19302,p__19303){
var map__19310 = p__19302;
var map__19310__$1 = ((cljs.core.seq_QMARK_.call(null,map__19310))?cljs.core.apply.call(null,cljs.core.hash_map,map__19310):map__19310);
var map__19311 = cljs.core.get.call(null,map__19310__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__19311__$1 = ((cljs.core.seq_QMARK_.call(null,map__19311))?cljs.core.apply.call(null,cljs.core.hash_map,map__19311):map__19311);
var a = map__19311__$1;
var x1 = cljs.core.get.call(null,map__19311__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__19311__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19312 = cljs.core.get.call(null,map__19310__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__19312__$1 = ((cljs.core.seq_QMARK_.call(null,map__19312))?cljs.core.apply.call(null,cljs.core.hash_map,map__19312):map__19312);
var b = map__19312__$1;
var x2 = cljs.core.get.call(null,map__19312__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__19312__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19313 = p__19303;
var map__19313__$1 = ((cljs.core.seq_QMARK_.call(null,map__19313))?cljs.core.apply.call(null,cljs.core.hash_map,map__19313):map__19313);
var m = map__19313__$1;
var x0 = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19314 = cljs_intro.g2d.minus.call(null,b,a);
var map__19314__$1 = ((cljs.core.seq_QMARK_.call(null,map__19314))?cljs.core.apply.call(null,cljs.core.hash_map,map__19314):map__19314);
var vab = map__19314__$1;
var dx21 = cljs.core.get.call(null,map__19314__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__19314__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19315 = cljs_intro.g2d.minus.call(null,a,m);
var map__19315__$1 = ((cljs.core.seq_QMARK_.call(null,map__19315))?cljs.core.apply.call(null,cljs.core.hash_map,map__19315):map__19315);
var dx10 = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
cljs_intro.g2d.ratio = (function cljs_intro$g2d$ratio(p__19316,p__19317){
var map__19322 = p__19316;
var map__19322__$1 = ((cljs.core.seq_QMARK_.call(null,map__19322))?cljs.core.apply.call(null,cljs.core.hash_map,map__19322):map__19322);
var map__19323 = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__19323__$1 = ((cljs.core.seq_QMARK_.call(null,map__19323))?cljs.core.apply.call(null,cljs.core.hash_map,map__19323):map__19323);
var a = map__19323__$1;
var x1 = cljs.core.get.call(null,map__19323__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__19323__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19324 = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__19324__$1 = ((cljs.core.seq_QMARK_.call(null,map__19324))?cljs.core.apply.call(null,cljs.core.hash_map,map__19324):map__19324);
var b = map__19324__$1;
var x2 = cljs.core.get.call(null,map__19324__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__19324__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__19325 = p__19317;
var map__19325__$1 = ((cljs.core.seq_QMARK_.call(null,map__19325))?cljs.core.apply.call(null,cljs.core.hash_map,map__19325):map__19325);
var m = map__19325__$1;
var x0 = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
cljs_intro.g2d.intersection_segment_circle = (function cljs_intro$g2d$intersection_segment_circle(p__19326,p__19327){
var map__19331 = p__19326;
var map__19331__$1 = ((cljs.core.seq_QMARK_.call(null,map__19331))?cljs.core.apply.call(null,cljs.core.hash_map,map__19331):map__19331);
var map__19332 = cljs.core.get.call(null,map__19331__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__19332__$1 = ((cljs.core.seq_QMARK_.call(null,map__19332))?cljs.core.apply.call(null,cljs.core.hash_map,map__19332):map__19332);
var o = map__19332__$1;
var ox = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__19331__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__19333 = p__19327;
var map__19333__$1 = ((cljs.core.seq_QMARK_.call(null,map__19333))?cljs.core.apply.call(null,cljs.core.hash_map,map__19333):map__19333);
var a = cljs.core.get.call(null,map__19333__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__19333__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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