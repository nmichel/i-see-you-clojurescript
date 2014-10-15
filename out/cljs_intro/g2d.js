// Compiled by ClojureScript 0.0-2280
goog.provide('cljs_intro.g2d');
goog.require('cljs.core');
cljs_intro.g2d.vec2d = (function vec2d(x,y){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
cljs_intro.g2d.plus = (function plus(p__4946,p__4947){var map__4950 = p__4946;var map__4950__$1 = ((cljs.core.seq_QMARK_.call(null,map__4950))?cljs.core.apply.call(null,cljs.core.hash_map,map__4950):map__4950);var ax = cljs.core.get.call(null,map__4950__$1,new cljs.core.Keyword(null,"x","x",2099068185));var ay = cljs.core.get.call(null,map__4950__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__4951 = p__4947;var map__4951__$1 = ((cljs.core.seq_QMARK_.call(null,map__4951))?cljs.core.apply.call(null,cljs.core.hash_map,map__4951):map__4951);var bx = cljs.core.get.call(null,map__4951__$1,new cljs.core.Keyword(null,"x","x",2099068185));var by = cljs.core.get.call(null,map__4951__$1,new cljs.core.Keyword(null,"y","y",-1757859776));return cljs_intro.g2d.vec2d.call(null,(ax + bx),(ay + by));
});
cljs_intro.g2d.minus = (function minus(p__4952,p__4953){var map__4956 = p__4952;var map__4956__$1 = ((cljs.core.seq_QMARK_.call(null,map__4956))?cljs.core.apply.call(null,cljs.core.hash_map,map__4956):map__4956);var ax = cljs.core.get.call(null,map__4956__$1,new cljs.core.Keyword(null,"x","x",2099068185));var ay = cljs.core.get.call(null,map__4956__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__4957 = p__4953;var map__4957__$1 = ((cljs.core.seq_QMARK_.call(null,map__4957))?cljs.core.apply.call(null,cljs.core.hash_map,map__4957):map__4957);var bx = cljs.core.get.call(null,map__4957__$1,new cljs.core.Keyword(null,"x","x",2099068185));var by = cljs.core.get.call(null,map__4957__$1,new cljs.core.Keyword(null,"y","y",-1757859776));return cljs_intro.g2d.vec2d.call(null,(ax - bx),(ay - by));
});
cljs_intro.g2d.scale = (function scale(p__4958,f){var map__4960 = p__4958;var map__4960__$1 = ((cljs.core.seq_QMARK_.call(null,map__4960))?cljs.core.apply.call(null,cljs.core.hash_map,map__4960):map__4960);var ax = cljs.core.get.call(null,map__4960__$1,new cljs.core.Keyword(null,"x","x",2099068185));var ay = cljs.core.get.call(null,map__4960__$1,new cljs.core.Keyword(null,"y","y",-1757859776));return cljs_intro.g2d.vec2d.call(null,(ax * f),(ay * f));
});
cljs_intro.g2d.magnitude = (function() {
var magnitude = null;
var magnitude__1 = (function (p__4961){var map__4963 = p__4961;var map__4963__$1 = ((cljs.core.seq_QMARK_.call(null,map__4963))?cljs.core.apply.call(null,cljs.core.hash_map,map__4963):map__4963);var p = map__4963__$1;var dx = cljs.core.get.call(null,map__4963__$1,new cljs.core.Keyword(null,"x","x",2099068185));var dy = cljs.core.get.call(null,map__4963__$1,new cljs.core.Keyword(null,"y","y",-1757859776));return Math.sqrt.call(null,((dx * dx) + (dy * dy)));
});
var magnitude__2 = (function (a,b){return magnitude.call(null,cljs_intro.g2d.minus.call(null,a,b));
});
magnitude = function(a,b){
switch(arguments.length){
case 1:
return magnitude__1.call(this,a);
case 2:
return magnitude__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
magnitude.cljs$core$IFn$_invoke$arity$1 = magnitude__1;
magnitude.cljs$core$IFn$_invoke$arity$2 = magnitude__2;
return magnitude;
})()
;
cljs_intro.g2d.scale = (function scale(p__4964,f){var map__4966 = p__4964;var map__4966__$1 = ((cljs.core.seq_QMARK_.call(null,map__4966))?cljs.core.apply.call(null,cljs.core.hash_map,map__4966):map__4966);var x = cljs.core.get.call(null,map__4966__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__4966__$1,new cljs.core.Keyword(null,"y","y",-1757859776));return cljs_intro.g2d.vec2d.call(null,(x * f),(y * f));
});
cljs_intro.g2d.cross = (function cross(p__4967,p__4968){var map__4971 = p__4967;var map__4971__$1 = ((cljs.core.seq_QMARK_.call(null,map__4971))?cljs.core.apply.call(null,cljs.core.hash_map,map__4971):map__4971);var ax = cljs.core.get.call(null,map__4971__$1,new cljs.core.Keyword(null,"x","x",2099068185));var ay = cljs.core.get.call(null,map__4971__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__4972 = p__4968;var map__4972__$1 = ((cljs.core.seq_QMARK_.call(null,map__4972))?cljs.core.apply.call(null,cljs.core.hash_map,map__4972):map__4972);var bx = cljs.core.get.call(null,map__4972__$1,new cljs.core.Keyword(null,"x","x",2099068185));var by = cljs.core.get.call(null,map__4972__$1,new cljs.core.Keyword(null,"y","y",-1757859776));return ((ax * by) - (ay * bx));
});
cljs_intro.g2d.__GT_polar = (function __GT_polar(p__4973){var map__4975 = p__4973;var map__4975__$1 = ((cljs.core.seq_QMARK_.call(null,map__4975))?cljs.core.apply.call(null,cljs.core.hash_map,map__4975):map__4975);var p = map__4975__$1;var x = cljs.core.get.call(null,map__4975__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__4975__$1,new cljs.core.Keyword(null,"y","y",-1757859776));return cljs_intro.g2d.polar.call(null,cljs_intro.g2d.magnitude.call(null,p),Math.atan2.call(null,x,y));
});
cljs_intro.g2d.rotate = (function rotate(p__4976,a){var vec__4978 = p__4976;var x = cljs.core.nth.call(null,vec__4978,(0),null);var y = cljs.core.nth.call(null,vec__4978,(1),null);var c = Math.cos.call(null,a);var s = Math.sin.call(null,a);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * c) - (y * s)),((y * c) + (x * s))], null);
});
cljs_intro.g2d.polar = (function polar(r,theta){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"theta","theta",-427510258),theta], null);
});
cljs_intro.g2d.segment = (function segment(a,b){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),a,new cljs.core.Keyword(null,"b","b",1482224470),b], null);
});
cljs_intro.g2d.endpoint = (function endpoint(p,segs){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),p,new cljs.core.Keyword(null,"segments","segments",1937535949),segs], null);
});
cljs_intro.g2d.ray = (function ray(o,p){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"p","p",151049309),p], null);
});
cljs_intro.g2d.intersection = (function intersection(p__4979,p__4980){var map__4985 = p__4979;var map__4985__$1 = ((cljs.core.seq_QMARK_.call(null,map__4985))?cljs.core.apply.call(null,cljs.core.hash_map,map__4985):map__4985);var map__4986 = cljs.core.get.call(null,map__4985__$1,new cljs.core.Keyword(null,"o","o",-1350007228));var map__4986__$1 = ((cljs.core.seq_QMARK_.call(null,map__4986))?cljs.core.apply.call(null,cljs.core.hash_map,map__4986):map__4986);var ra = map__4986__$1;var rpx = cljs.core.get.call(null,map__4986__$1,new cljs.core.Keyword(null,"x","x",2099068185));var rpy = cljs.core.get.call(null,map__4986__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var rb = cljs.core.get.call(null,map__4985__$1,new cljs.core.Keyword(null,"p","p",151049309));var map__4987 = p__4980;var map__4987__$1 = ((cljs.core.seq_QMARK_.call(null,map__4987))?cljs.core.apply.call(null,cljs.core.hash_map,map__4987):map__4987);var map__4988 = cljs.core.get.call(null,map__4987__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var map__4988__$1 = ((cljs.core.seq_QMARK_.call(null,map__4988))?cljs.core.apply.call(null,cljs.core.hash_map,map__4988):map__4988);var sega = map__4988__$1;var spx = cljs.core.get.call(null,map__4988__$1,new cljs.core.Keyword(null,"x","x",2099068185));var spy = cljs.core.get.call(null,map__4988__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var segb = cljs.core.get.call(null,map__4987__$1,new cljs.core.Keyword(null,"b","b",1482224470));var r = cljs_intro.g2d.minus.call(null,rb,ra);var s = cljs_intro.g2d.minus.call(null,segb,sega);var uNumerator = cljs_intro.g2d.cross.call(null,cljs_intro.g2d.minus.call(null,sega,ra),r);var denominator = cljs_intro.g2d.cross.call(null,r,s);if((cljs.core._EQ_.call(null,(0),uNumerator)) && (cljs.core._EQ_.call(null,(0),denominator)))
{return null;
} else
{if(cljs.core._EQ_.call(null,(0),denominator))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var u = (uNumerator / denominator);var t = (cljs_intro.g2d.cross.call(null,cljs_intro.g2d.minus.call(null,sega,ra),s) / denominator);if(((t >= (0))) && ((u >= (0))) && ((u <= (1))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),cljs_intro.g2d.plus.call(null,ra,cljs_intro.g2d.scale.call(null,r,t)),new cljs.core.Keyword(null,"f","f",-1597136552),t], null);
} else
{return null;
}
} else
{return null;
}
}
}
});
cljs_intro.g2d.distance = (function distance(p__4989,p__4990){var map__4997 = p__4989;var map__4997__$1 = ((cljs.core.seq_QMARK_.call(null,map__4997))?cljs.core.apply.call(null,cljs.core.hash_map,map__4997):map__4997);var map__4998 = cljs.core.get.call(null,map__4997__$1,new cljs.core.Keyword(null,"o","o",-1350007228));var map__4998__$1 = ((cljs.core.seq_QMARK_.call(null,map__4998))?cljs.core.apply.call(null,cljs.core.hash_map,map__4998):map__4998);var a = map__4998__$1;var x1 = cljs.core.get.call(null,map__4998__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y1 = cljs.core.get.call(null,map__4998__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__4999 = cljs.core.get.call(null,map__4997__$1,new cljs.core.Keyword(null,"p","p",151049309));var map__4999__$1 = ((cljs.core.seq_QMARK_.call(null,map__4999))?cljs.core.apply.call(null,cljs.core.hash_map,map__4999):map__4999);var b = map__4999__$1;var x2 = cljs.core.get.call(null,map__4999__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y2 = cljs.core.get.call(null,map__4999__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__5000 = p__4990;var map__5000__$1 = ((cljs.core.seq_QMARK_.call(null,map__5000))?cljs.core.apply.call(null,cljs.core.hash_map,map__5000):map__5000);var m = map__5000__$1;var x0 = cljs.core.get.call(null,map__5000__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y0 = cljs.core.get.call(null,map__5000__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__5001 = cljs_intro.g2d.minus.call(null,b,a);var map__5001__$1 = ((cljs.core.seq_QMARK_.call(null,map__5001))?cljs.core.apply.call(null,cljs.core.hash_map,map__5001):map__5001);var vab = map__5001__$1;var dx21 = cljs.core.get.call(null,map__5001__$1,new cljs.core.Keyword(null,"x","x",2099068185));var dy21 = cljs.core.get.call(null,map__5001__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__5002 = cljs_intro.g2d.minus.call(null,a,m);var map__5002__$1 = ((cljs.core.seq_QMARK_.call(null,map__5002))?cljs.core.apply.call(null,cljs.core.hash_map,map__5002):map__5002);var dx10 = cljs.core.get.call(null,map__5002__$1,new cljs.core.Keyword(null,"x","x",2099068185));var dy10 = cljs.core.get.call(null,map__5002__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var normab = cljs_intro.g2d.magnitude.call(null,vab);return (((dx21 * dy10) - (dx10 * dy21)) / normab);
});
cljs_intro.g2d.ratio = (function ratio(p__5003,p__5004){var map__5009 = p__5003;var map__5009__$1 = ((cljs.core.seq_QMARK_.call(null,map__5009))?cljs.core.apply.call(null,cljs.core.hash_map,map__5009):map__5009);var map__5010 = cljs.core.get.call(null,map__5009__$1,new cljs.core.Keyword(null,"o","o",-1350007228));var map__5010__$1 = ((cljs.core.seq_QMARK_.call(null,map__5010))?cljs.core.apply.call(null,cljs.core.hash_map,map__5010):map__5010);var a = map__5010__$1;var x1 = cljs.core.get.call(null,map__5010__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y1 = cljs.core.get.call(null,map__5010__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__5011 = cljs.core.get.call(null,map__5009__$1,new cljs.core.Keyword(null,"p","p",151049309));var map__5011__$1 = ((cljs.core.seq_QMARK_.call(null,map__5011))?cljs.core.apply.call(null,cljs.core.hash_map,map__5011):map__5011);var b = map__5011__$1;var x2 = cljs.core.get.call(null,map__5011__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y2 = cljs.core.get.call(null,map__5011__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__5012 = p__5004;var map__5012__$1 = ((cljs.core.seq_QMARK_.call(null,map__5012))?cljs.core.apply.call(null,cljs.core.hash_map,map__5012):map__5012);var m = map__5012__$1;var x0 = cljs.core.get.call(null,map__5012__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y0 = cljs.core.get.call(null,map__5012__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var op = cljs_intro.g2d.minus.call(null,b,a);var om = cljs_intro.g2d.minus.call(null,m,a);return (cljs_intro.g2d.magnitude.call(null,om) / cljs_intro.g2d.magnitude.call(null,op));
});

//# sourceMappingURL=g2d.js.map