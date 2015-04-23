// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.g2d');
goog.require('cljs.core');
cljs_intro.g2d.vec2d = (function cljs_intro$g2d$vec2d(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
cljs_intro.g2d.plus = (function cljs_intro$g2d$plus(p__5128,p__5129){
var map__5132 = p__5128;
var map__5132__$1 = ((cljs.core.seq_QMARK_.call(null,map__5132))?cljs.core.apply.call(null,cljs.core.hash_map,map__5132):map__5132);
var ax = cljs.core.get.call(null,map__5132__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5132__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5133 = p__5129;
var map__5133__$1 = ((cljs.core.seq_QMARK_.call(null,map__5133))?cljs.core.apply.call(null,cljs.core.hash_map,map__5133):map__5133);
var bx = cljs.core.get.call(null,map__5133__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5133__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax + bx),(ay + by));
});
cljs_intro.g2d.minus = (function cljs_intro$g2d$minus(p__5134,p__5135){
var map__5138 = p__5134;
var map__5138__$1 = ((cljs.core.seq_QMARK_.call(null,map__5138))?cljs.core.apply.call(null,cljs.core.hash_map,map__5138):map__5138);
var ax = cljs.core.get.call(null,map__5138__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5138__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5139 = p__5135;
var map__5139__$1 = ((cljs.core.seq_QMARK_.call(null,map__5139))?cljs.core.apply.call(null,cljs.core.hash_map,map__5139):map__5139);
var bx = cljs.core.get.call(null,map__5139__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5139__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(ax - bx),(ay - by));
});
cljs_intro.g2d.magnitude = (function() {
var cljs_intro$g2d$magnitude = null;
var cljs_intro$g2d$magnitude__1 = (function (p__5140){
var map__5142 = p__5140;
var map__5142__$1 = ((cljs.core.seq_QMARK_.call(null,map__5142))?cljs.core.apply.call(null,cljs.core.hash_map,map__5142):map__5142);
var p = map__5142__$1;
var dx = cljs.core.get.call(null,map__5142__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__5142__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
cljs_intro.g2d.scale = (function cljs_intro$g2d$scale(p__5143,f){
var map__5145 = p__5143;
var map__5145__$1 = ((cljs.core.seq_QMARK_.call(null,map__5145))?cljs.core.apply.call(null,cljs.core.hash_map,map__5145):map__5145);
var x = cljs.core.get.call(null,map__5145__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5145__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.vec2d.call(null,(x * f),(y * f));
});
cljs_intro.g2d.cross = (function cljs_intro$g2d$cross(p__5146,p__5147){
var map__5150 = p__5146;
var map__5150__$1 = ((cljs.core.seq_QMARK_.call(null,map__5150))?cljs.core.apply.call(null,cljs.core.hash_map,map__5150):map__5150);
var ax = cljs.core.get.call(null,map__5150__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5150__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5151 = p__5147;
var map__5151__$1 = ((cljs.core.seq_QMARK_.call(null,map__5151))?cljs.core.apply.call(null,cljs.core.hash_map,map__5151):map__5151);
var bx = cljs.core.get.call(null,map__5151__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5151__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * by) - (ay * bx));
});
cljs_intro.g2d.dot = (function cljs_intro$g2d$dot(p__5152,p__5153){
var map__5156 = p__5152;
var map__5156__$1 = ((cljs.core.seq_QMARK_.call(null,map__5156))?cljs.core.apply.call(null,cljs.core.hash_map,map__5156):map__5156);
var ax = cljs.core.get.call(null,map__5156__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__5156__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5157 = p__5153;
var map__5157__$1 = ((cljs.core.seq_QMARK_.call(null,map__5157))?cljs.core.apply.call(null,cljs.core.hash_map,map__5157):map__5157);
var bx = cljs.core.get.call(null,map__5157__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__5157__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ax * bx) + (ay * by));
});
cljs_intro.g2d.__GT_polar = (function cljs_intro$g2d$__GT_polar(p__5158){
var map__5160 = p__5158;
var map__5160__$1 = ((cljs.core.seq_QMARK_.call(null,map__5160))?cljs.core.apply.call(null,cljs.core.hash_map,map__5160):map__5160);
var p = map__5160__$1;
var x = cljs.core.get.call(null,map__5160__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5160__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs_intro.g2d.polar.call(null,cljs_intro.g2d.magnitude.call(null,p),Math.atan2.call(null,y,x));
});
cljs_intro.g2d.rotate = (function cljs_intro$g2d$rotate(p__5161,a){
var vec__5163 = p__5161;
var x = cljs.core.nth.call(null,vec__5163,(0),null);
var y = cljs.core.nth.call(null,vec__5163,(1),null);
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
cljs_intro.g2d.stretch = (function cljs_intro$g2d$stretch(p__5164,f){
var map__5166 = p__5164;
var map__5166__$1 = ((cljs.core.seq_QMARK_.call(null,map__5166))?cljs.core.apply.call(null,cljs.core.hash_map,map__5166):map__5166);
var s = map__5166__$1;
var a = cljs.core.get.call(null,map__5166__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__5166__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return cljs_intro.g2d.plus.call(null,cljs_intro.g2d.scale.call(null,cljs_intro.g2d.minus.call(null,b,a),f),a);
});
cljs_intro.g2d.endpoint = (function cljs_intro$g2d$endpoint(p,segs){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),p,new cljs.core.Keyword(null,"segments","segments",1937535949),segs], null);
});
cljs_intro.g2d.ray = (function cljs_intro$g2d$ray(o,p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"p","p",151049309),p], null);
});
cljs_intro.g2d.intersection = (function cljs_intro$g2d$intersection(p__5167,p__5168){
var map__5173 = p__5167;
var map__5173__$1 = ((cljs.core.seq_QMARK_.call(null,map__5173))?cljs.core.apply.call(null,cljs.core.hash_map,map__5173):map__5173);
var map__5174 = cljs.core.get.call(null,map__5173__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5174__$1 = ((cljs.core.seq_QMARK_.call(null,map__5174))?cljs.core.apply.call(null,cljs.core.hash_map,map__5174):map__5174);
var ra = map__5174__$1;
var rpx = cljs.core.get.call(null,map__5174__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var rpy = cljs.core.get.call(null,map__5174__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rb = cljs.core.get.call(null,map__5173__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5175 = p__5168;
var map__5175__$1 = ((cljs.core.seq_QMARK_.call(null,map__5175))?cljs.core.apply.call(null,cljs.core.hash_map,map__5175):map__5175);
var map__5176 = cljs.core.get.call(null,map__5175__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5176__$1 = ((cljs.core.seq_QMARK_.call(null,map__5176))?cljs.core.apply.call(null,cljs.core.hash_map,map__5176):map__5176);
var sega = map__5176__$1;
var spx = cljs.core.get.call(null,map__5176__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var spy = cljs.core.get.call(null,map__5176__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var segb = cljs.core.get.call(null,map__5175__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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
cljs_intro.g2d.distance = (function cljs_intro$g2d$distance(p__5177,p__5178){
var map__5185 = p__5177;
var map__5185__$1 = ((cljs.core.seq_QMARK_.call(null,map__5185))?cljs.core.apply.call(null,cljs.core.hash_map,map__5185):map__5185);
var map__5186 = cljs.core.get.call(null,map__5185__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5186__$1 = ((cljs.core.seq_QMARK_.call(null,map__5186))?cljs.core.apply.call(null,cljs.core.hash_map,map__5186):map__5186);
var a = map__5186__$1;
var x1 = cljs.core.get.call(null,map__5186__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5186__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5187 = cljs.core.get.call(null,map__5185__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5187__$1 = ((cljs.core.seq_QMARK_.call(null,map__5187))?cljs.core.apply.call(null,cljs.core.hash_map,map__5187):map__5187);
var b = map__5187__$1;
var x2 = cljs.core.get.call(null,map__5187__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5187__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5188 = p__5178;
var map__5188__$1 = ((cljs.core.seq_QMARK_.call(null,map__5188))?cljs.core.apply.call(null,cljs.core.hash_map,map__5188):map__5188);
var m = map__5188__$1;
var x0 = cljs.core.get.call(null,map__5188__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5188__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5189 = cljs_intro.g2d.minus.call(null,b,a);
var map__5189__$1 = ((cljs.core.seq_QMARK_.call(null,map__5189))?cljs.core.apply.call(null,cljs.core.hash_map,map__5189):map__5189);
var vab = map__5189__$1;
var dx21 = cljs.core.get.call(null,map__5189__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__5189__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5190 = cljs_intro.g2d.minus.call(null,a,m);
var map__5190__$1 = ((cljs.core.seq_QMARK_.call(null,map__5190))?cljs.core.apply.call(null,cljs.core.hash_map,map__5190):map__5190);
var dx10 = cljs.core.get.call(null,map__5190__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__5190__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
/**
 * Return the distance from point m to segment [a b]
 */
cljs_intro.g2d.distance_to_segment = (function cljs_intro$g2d$distance_to_segment(p__5191,p__5192){
var map__5199 = p__5191;
var map__5199__$1 = ((cljs.core.seq_QMARK_.call(null,map__5199))?cljs.core.apply.call(null,cljs.core.hash_map,map__5199):map__5199);
var map__5200 = cljs.core.get.call(null,map__5199__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5200__$1 = ((cljs.core.seq_QMARK_.call(null,map__5200))?cljs.core.apply.call(null,cljs.core.hash_map,map__5200):map__5200);
var a = map__5200__$1;
var x1 = cljs.core.get.call(null,map__5200__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5200__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5201 = cljs.core.get.call(null,map__5199__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__5201__$1 = ((cljs.core.seq_QMARK_.call(null,map__5201))?cljs.core.apply.call(null,cljs.core.hash_map,map__5201):map__5201);
var b = map__5201__$1;
var x2 = cljs.core.get.call(null,map__5201__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5201__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5202 = p__5192;
var map__5202__$1 = ((cljs.core.seq_QMARK_.call(null,map__5202))?cljs.core.apply.call(null,cljs.core.hash_map,map__5202):map__5202);
var m = map__5202__$1;
var x0 = cljs.core.get.call(null,map__5202__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5202__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5203 = cljs_intro.g2d.minus.call(null,b,a);
var map__5203__$1 = ((cljs.core.seq_QMARK_.call(null,map__5203))?cljs.core.apply.call(null,cljs.core.hash_map,map__5203):map__5203);
var vab = map__5203__$1;
var dx21 = cljs.core.get.call(null,map__5203__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy21 = cljs.core.get.call(null,map__5203__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5204 = cljs_intro.g2d.minus.call(null,a,m);
var map__5204__$1 = ((cljs.core.seq_QMARK_.call(null,map__5204))?cljs.core.apply.call(null,cljs.core.hash_map,map__5204):map__5204);
var dx10 = cljs.core.get.call(null,map__5204__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy10 = cljs.core.get.call(null,map__5204__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var normab = cljs_intro.g2d.magnitude.call(null,vab);
return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
cljs_intro.g2d.ratio = (function cljs_intro$g2d$ratio(p__5205,p__5206){
var map__5211 = p__5205;
var map__5211__$1 = ((cljs.core.seq_QMARK_.call(null,map__5211))?cljs.core.apply.call(null,cljs.core.hash_map,map__5211):map__5211);
var map__5212 = cljs.core.get.call(null,map__5211__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5212__$1 = ((cljs.core.seq_QMARK_.call(null,map__5212))?cljs.core.apply.call(null,cljs.core.hash_map,map__5212):map__5212);
var a = map__5212__$1;
var x1 = cljs.core.get.call(null,map__5212__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5212__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5213 = cljs.core.get.call(null,map__5211__$1,new cljs.core.Keyword(null,"p","p",151049309));
var map__5213__$1 = ((cljs.core.seq_QMARK_.call(null,map__5213))?cljs.core.apply.call(null,cljs.core.hash_map,map__5213):map__5213);
var b = map__5213__$1;
var x2 = cljs.core.get.call(null,map__5213__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5213__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5214 = p__5206;
var map__5214__$1 = ((cljs.core.seq_QMARK_.call(null,map__5214))?cljs.core.apply.call(null,cljs.core.hash_map,map__5214):map__5214);
var m = map__5214__$1;
var x0 = cljs.core.get.call(null,map__5214__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__5214__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
cljs_intro.g2d.intersection_segment_circle = (function cljs_intro$g2d$intersection_segment_circle(p__5215,p__5216){
var map__5220 = p__5215;
var map__5220__$1 = ((cljs.core.seq_QMARK_.call(null,map__5220))?cljs.core.apply.call(null,cljs.core.hash_map,map__5220):map__5220);
var map__5221 = cljs.core.get.call(null,map__5220__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var map__5221__$1 = ((cljs.core.seq_QMARK_.call(null,map__5221))?cljs.core.apply.call(null,cljs.core.hash_map,map__5221):map__5221);
var o = map__5221__$1;
var ox = cljs.core.get.call(null,map__5221__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__5221__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__5220__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__5222 = p__5216;
var map__5222__$1 = ((cljs.core.seq_QMARK_.call(null,map__5222))?cljs.core.apply.call(null,cljs.core.hash_map,map__5222):map__5222);
var a = cljs.core.get.call(null,map__5222__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__5222__$1,new cljs.core.Keyword(null,"b","b",1482224470));
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