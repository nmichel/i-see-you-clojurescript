// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
cljs_intro.draw.draw_point = (function cljs_intro$draw$draw_point(context,p__26175,color){
var map__26178 = p__26175;
var map__26178__$1 = ((cljs.core.seq_QMARK_.call(null,map__26178))?cljs.core.apply.call(null,cljs.core.hash_map,map__26178):map__26178);
var x = cljs.core.get.call(null,map__26178__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__26178__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = color;

var G__26179 = context;
G__26179.beginPath();

G__26179.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__26179.fill();

return G__26179;
});
cljs_intro.draw.draw_rect = (function cljs_intro$draw$draw_rect(context,x,y,w,h,color){
context.fillStyle = color;

return context.fillRect(x,y,w,h);
});
cljs_intro.draw.draw_hull_by_clipping = (function cljs_intro$draw$draw_hull_by_clipping(context,ox,oy,p__26180,img){
var vec__26191 = p__26180;
var vec__26192 = cljs.core.nth.call(null,vec__26191,(0),null);
var p = cljs.core.nth.call(null,vec__26192,(0),null);
var _pcolor = cljs.core.nth.call(null,vec__26192,(1),null);
var pts = cljs.core.nthnext.call(null,vec__26191,(1));
var G__26193_26201 = context;
G__26193_26201.save();

G__26193_26201.beginPath();

G__26193_26201.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));


var seq__26194_26202 = cljs.core.seq.call(null,pts);
var chunk__26195_26203 = null;
var count__26196_26204 = (0);
var i__26197_26205 = (0);
while(true){
if((i__26197_26205 < count__26196_26204)){
var vec__26198_26206 = cljs.core._nth.call(null,chunk__26195_26203,i__26197_26205);
var a_26207 = cljs.core.nth.call(null,vec__26198_26206,(0),null);
var _acolor_26208 = cljs.core.nth.call(null,vec__26198_26206,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_26207),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_26207));

var G__26209 = seq__26194_26202;
var G__26210 = chunk__26195_26203;
var G__26211 = count__26196_26204;
var G__26212 = (i__26197_26205 + (1));
seq__26194_26202 = G__26209;
chunk__26195_26203 = G__26210;
count__26196_26204 = G__26211;
i__26197_26205 = G__26212;
continue;
} else {
var temp__4126__auto___26213 = cljs.core.seq.call(null,seq__26194_26202);
if(temp__4126__auto___26213){
var seq__26194_26214__$1 = temp__4126__auto___26213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26194_26214__$1)){
var c__16929__auto___26215 = cljs.core.chunk_first.call(null,seq__26194_26214__$1);
var G__26216 = cljs.core.chunk_rest.call(null,seq__26194_26214__$1);
var G__26217 = c__16929__auto___26215;
var G__26218 = cljs.core.count.call(null,c__16929__auto___26215);
var G__26219 = (0);
seq__26194_26202 = G__26216;
chunk__26195_26203 = G__26217;
count__26196_26204 = G__26218;
i__26197_26205 = G__26219;
continue;
} else {
var vec__26199_26220 = cljs.core.first.call(null,seq__26194_26214__$1);
var a_26221 = cljs.core.nth.call(null,vec__26199_26220,(0),null);
var _acolor_26222 = cljs.core.nth.call(null,vec__26199_26220,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_26221),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_26221));

var G__26223 = cljs.core.next.call(null,seq__26194_26214__$1);
var G__26224 = null;
var G__26225 = (0);
var G__26226 = (0);
seq__26194_26202 = G__26223;
chunk__26195_26203 = G__26224;
count__26196_26204 = G__26225;
i__26197_26205 = G__26226;
continue;
}
} else {
}
}
break;
}

var G__26200 = context;
G__26200.clip();

cljs_intro.draw.draw_rect.call(null,G__26200,(0),(0),(800),(600),"green");

G__26200.restore();

return G__26200;
});
cljs_intro.draw.draw_hull_as_polygon = (function cljs_intro$draw$draw_hull_as_polygon(context,ox,oy,p__26227){
var vec__26236 = p__26227;
var vec__26237 = cljs.core.nth.call(null,vec__26236,(0),null);
var p = cljs.core.nth.call(null,vec__26237,(0),null);
var _pcolor = cljs.core.nth.call(null,vec__26237,(1),null);
var pts = cljs.core.nthnext.call(null,vec__26236,(1));
context.fillStyle = "yellow";

context.lineWidth = (2);

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));

var seq__26238_26244 = cljs.core.seq.call(null,pts);
var chunk__26239_26245 = null;
var count__26240_26246 = (0);
var i__26241_26247 = (0);
while(true){
if((i__26241_26247 < count__26240_26246)){
var vec__26242_26248 = cljs.core._nth.call(null,chunk__26239_26245,i__26241_26247);
var a_26249 = cljs.core.nth.call(null,vec__26242_26248,(0),null);
var _acolor_26250 = cljs.core.nth.call(null,vec__26242_26248,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_26249),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_26249));

var G__26251 = seq__26238_26244;
var G__26252 = chunk__26239_26245;
var G__26253 = count__26240_26246;
var G__26254 = (i__26241_26247 + (1));
seq__26238_26244 = G__26251;
chunk__26239_26245 = G__26252;
count__26240_26246 = G__26253;
i__26241_26247 = G__26254;
continue;
} else {
var temp__4126__auto___26255 = cljs.core.seq.call(null,seq__26238_26244);
if(temp__4126__auto___26255){
var seq__26238_26256__$1 = temp__4126__auto___26255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26238_26256__$1)){
var c__16929__auto___26257 = cljs.core.chunk_first.call(null,seq__26238_26256__$1);
var G__26258 = cljs.core.chunk_rest.call(null,seq__26238_26256__$1);
var G__26259 = c__16929__auto___26257;
var G__26260 = cljs.core.count.call(null,c__16929__auto___26257);
var G__26261 = (0);
seq__26238_26244 = G__26258;
chunk__26239_26245 = G__26259;
count__26240_26246 = G__26260;
i__26241_26247 = G__26261;
continue;
} else {
var vec__26243_26262 = cljs.core.first.call(null,seq__26238_26256__$1);
var a_26263 = cljs.core.nth.call(null,vec__26243_26262,(0),null);
var _acolor_26264 = cljs.core.nth.call(null,vec__26243_26262,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_26263),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_26263));

var G__26265 = cljs.core.next.call(null,seq__26238_26256__$1);
var G__26266 = null;
var G__26267 = (0);
var G__26268 = (0);
seq__26238_26244 = G__26265;
chunk__26239_26245 = G__26266;
count__26240_26246 = G__26267;
i__26241_26247 = G__26268;
continue;
}
} else {
}
}
break;
}

return context.fill();
});
cljs_intro.draw.draw_hull_as_fan = (function cljs_intro$draw$draw_hull_as_fan(context,ox,oy,pts,img){
context.fillStyle = "yellow";

context.strokeStyle = "orange";

context.lineWidth = (2);

var seq__26285 = cljs.core.seq.call(null,cljs.core.take.call(null,cljs.core.count.call(null,pts),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,pts))));
var chunk__26286 = null;
var count__26287 = (0);
var i__26288 = (0);
while(true){
if((i__26288 < count__26287)){
var vec__26289 = cljs.core._nth.call(null,chunk__26286,i__26288);
var vec__26290 = cljs.core.nth.call(null,vec__26289,(0),null);
var map__26291 = cljs.core.nth.call(null,vec__26290,(0),null);
var map__26291__$1 = ((cljs.core.seq_QMARK_.call(null,map__26291))?cljs.core.apply.call(null,cljs.core.hash_map,map__26291):map__26291);
var ax = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ca = cljs.core.nth.call(null,vec__26290,(1),null);
var vec__26292 = cljs.core.nth.call(null,vec__26289,(1),null);
var map__26293 = cljs.core.nth.call(null,vec__26292,(0),null);
var map__26293__$1 = ((cljs.core.seq_QMARK_.call(null,map__26293))?cljs.core.apply.call(null,cljs.core.hash_map,map__26293):map__26293);
var bx = cljs.core.get.call(null,map__26293__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__26293__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cb = cljs.core.nth.call(null,vec__26292,(1),null);
var G__26294_26301 = context;
G__26294_26301.beginPath();

G__26294_26301.moveTo(ax,ay);

G__26294_26301.lineTo(ox,oy);

G__26294_26301.lineTo(bx,by);

G__26294_26301.lineTo(ax,ay);

G__26294_26301.fill();

G__26294_26301.stroke();


var G__26302 = seq__26285;
var G__26303 = chunk__26286;
var G__26304 = count__26287;
var G__26305 = (i__26288 + (1));
seq__26285 = G__26302;
chunk__26286 = G__26303;
count__26287 = G__26304;
i__26288 = G__26305;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26285);
if(temp__4126__auto__){
var seq__26285__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26285__$1)){
var c__16929__auto__ = cljs.core.chunk_first.call(null,seq__26285__$1);
var G__26306 = cljs.core.chunk_rest.call(null,seq__26285__$1);
var G__26307 = c__16929__auto__;
var G__26308 = cljs.core.count.call(null,c__16929__auto__);
var G__26309 = (0);
seq__26285 = G__26306;
chunk__26286 = G__26307;
count__26287 = G__26308;
i__26288 = G__26309;
continue;
} else {
var vec__26295 = cljs.core.first.call(null,seq__26285__$1);
var vec__26296 = cljs.core.nth.call(null,vec__26295,(0),null);
var map__26297 = cljs.core.nth.call(null,vec__26296,(0),null);
var map__26297__$1 = ((cljs.core.seq_QMARK_.call(null,map__26297))?cljs.core.apply.call(null,cljs.core.hash_map,map__26297):map__26297);
var ax = cljs.core.get.call(null,map__26297__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__26297__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ca = cljs.core.nth.call(null,vec__26296,(1),null);
var vec__26298 = cljs.core.nth.call(null,vec__26295,(1),null);
var map__26299 = cljs.core.nth.call(null,vec__26298,(0),null);
var map__26299__$1 = ((cljs.core.seq_QMARK_.call(null,map__26299))?cljs.core.apply.call(null,cljs.core.hash_map,map__26299):map__26299);
var bx = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cb = cljs.core.nth.call(null,vec__26298,(1),null);
var G__26300_26310 = context;
G__26300_26310.beginPath();

G__26300_26310.moveTo(ax,ay);

G__26300_26310.lineTo(ox,oy);

G__26300_26310.lineTo(bx,by);

G__26300_26310.lineTo(ax,ay);

G__26300_26310.fill();

G__26300_26310.stroke();


var G__26311 = cljs.core.next.call(null,seq__26285__$1);
var G__26312 = null;
var G__26313 = (0);
var G__26314 = (0);
seq__26285 = G__26311;
chunk__26286 = G__26312;
count__26287 = G__26313;
i__26288 = G__26314;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.draw.draw_hull_as_surfaces = (function cljs_intro$draw$draw_hull_as_surfaces(context,surfaces){
context.fillStyle = "yellow";

context.strokeStyle = "red";

context.lineWidth = (2);

var seq__26333 = cljs.core.seq.call(null,surfaces);
var chunk__26334 = null;
var count__26335 = (0);
var i__26336 = (0);
while(true){
if((i__26336 < count__26335)){
var vec__26337 = cljs.core._nth.call(null,chunk__26334,i__26336);
var t = cljs.core.nth.call(null,vec__26337,(0),null);
var map__26338 = cljs.core.nth.call(null,vec__26337,(1),null);
var map__26338__$1 = ((cljs.core.seq_QMARK_.call(null,map__26338))?cljs.core.apply.call(null,cljs.core.hash_map,map__26338):map__26338);
var ox = cljs.core.get.call(null,map__26338__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__26338__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__26339 = cljs.core.nth.call(null,vec__26337,(2),null);
var map__26339__$1 = ((cljs.core.seq_QMARK_.call(null,map__26339))?cljs.core.apply.call(null,cljs.core.hash_map,map__26339):map__26339);
var a = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__26340 = cljs.core.nth.call(null,vec__26337,(3),null);
var map__26340__$1 = ((cljs.core.seq_QMARK_.call(null,map__26340))?cljs.core.apply.call(null,cljs.core.hash_map,map__26340):map__26340);
var b = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__26337;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_26351 = cljs.core.nth.call(null,surf,(4));
var G__26341_26352 = context;
G__26341_26352.beginPath();

G__26341_26352.moveTo(ox,oy);

G__26341_26352.arc(ox,oy,dist_26351,angle_a,angle_b,false);

G__26341_26352.fill();

} else {
var G__26342_26353 = context;
G__26342_26353.beginPath();

G__26342_26353.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__26342_26353.lineTo(ox,oy);

G__26342_26353.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__26342_26353.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__26342_26353.fill();


var G__26343_26354 = context;
G__26343_26354.beginPath();

G__26343_26354.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__26343_26354.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__26343_26354.stroke();

}

var G__26355 = seq__26333;
var G__26356 = chunk__26334;
var G__26357 = count__26335;
var G__26358 = (i__26336 + (1));
seq__26333 = G__26355;
chunk__26334 = G__26356;
count__26335 = G__26357;
i__26336 = G__26358;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26333);
if(temp__4126__auto__){
var seq__26333__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26333__$1)){
var c__16929__auto__ = cljs.core.chunk_first.call(null,seq__26333__$1);
var G__26359 = cljs.core.chunk_rest.call(null,seq__26333__$1);
var G__26360 = c__16929__auto__;
var G__26361 = cljs.core.count.call(null,c__16929__auto__);
var G__26362 = (0);
seq__26333 = G__26359;
chunk__26334 = G__26360;
count__26335 = G__26361;
i__26336 = G__26362;
continue;
} else {
var vec__26344 = cljs.core.first.call(null,seq__26333__$1);
var t = cljs.core.nth.call(null,vec__26344,(0),null);
var map__26345 = cljs.core.nth.call(null,vec__26344,(1),null);
var map__26345__$1 = ((cljs.core.seq_QMARK_.call(null,map__26345))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var ox = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__26346 = cljs.core.nth.call(null,vec__26344,(2),null);
var map__26346__$1 = ((cljs.core.seq_QMARK_.call(null,map__26346))?cljs.core.apply.call(null,cljs.core.hash_map,map__26346):map__26346);
var a = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__26347 = cljs.core.nth.call(null,vec__26344,(3),null);
var map__26347__$1 = ((cljs.core.seq_QMARK_.call(null,map__26347))?cljs.core.apply.call(null,cljs.core.hash_map,map__26347):map__26347);
var b = cljs.core.get.call(null,map__26347__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__26347__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__26344;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_26363 = cljs.core.nth.call(null,surf,(4));
var G__26348_26364 = context;
G__26348_26364.beginPath();

G__26348_26364.moveTo(ox,oy);

G__26348_26364.arc(ox,oy,dist_26363,angle_a,angle_b,false);

G__26348_26364.fill();

} else {
var G__26349_26365 = context;
G__26349_26365.beginPath();

G__26349_26365.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__26349_26365.lineTo(ox,oy);

G__26349_26365.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__26349_26365.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__26349_26365.fill();


var G__26350_26366 = context;
G__26350_26366.beginPath();

G__26350_26366.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__26350_26366.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__26350_26366.stroke();

}

var G__26367 = cljs.core.next.call(null,seq__26333__$1);
var G__26368 = null;
var G__26369 = (0);
var G__26370 = (0);
seq__26333 = G__26367;
chunk__26334 = G__26368;
count__26335 = G__26369;
i__26336 = G__26370;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.draw.draw_geometry = (function cljs_intro$draw$draw_geometry(context,data){
context.strokeStyle = "blue";

context.lineWidth = (2);

var seq__26391 = cljs.core.seq.call(null,data);
var chunk__26393 = null;
var count__26394 = (0);
var i__26395 = (0);
while(true){
if((i__26395 < count__26394)){
var d = cljs.core._nth.call(null,chunk__26393,i__26395);
var map__26397_26411 = cljs.core.first.call(null,d);
var map__26397_26412__$1 = ((cljs.core.seq_QMARK_.call(null,map__26397_26411))?cljs.core.apply.call(null,cljs.core.hash_map,map__26397_26411):map__26397_26411);
var ep_26413 = map__26397_26412__$1;
var point_26414 = cljs.core.get.call(null,map__26397_26412__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26414),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26414));

var seq__26398_26415 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__26399_26416 = null;
var count__26400_26417 = (0);
var i__26401_26418 = (0);
while(true){
if((i__26401_26418 < count__26400_26417)){
var map__26402_26419 = cljs.core._nth.call(null,chunk__26399_26416,i__26401_26418);
var map__26402_26420__$1 = ((cljs.core.seq_QMARK_.call(null,map__26402_26419))?cljs.core.apply.call(null,cljs.core.hash_map,map__26402_26419):map__26402_26419);
var point_26421__$1 = cljs.core.get.call(null,map__26402_26420__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26421__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26421__$1));

var G__26422 = seq__26398_26415;
var G__26423 = chunk__26399_26416;
var G__26424 = count__26400_26417;
var G__26425 = (i__26401_26418 + (1));
seq__26398_26415 = G__26422;
chunk__26399_26416 = G__26423;
count__26400_26417 = G__26424;
i__26401_26418 = G__26425;
continue;
} else {
var temp__4126__auto___26426 = cljs.core.seq.call(null,seq__26398_26415);
if(temp__4126__auto___26426){
var seq__26398_26427__$1 = temp__4126__auto___26426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26398_26427__$1)){
var c__16929__auto___26428 = cljs.core.chunk_first.call(null,seq__26398_26427__$1);
var G__26429 = cljs.core.chunk_rest.call(null,seq__26398_26427__$1);
var G__26430 = c__16929__auto___26428;
var G__26431 = cljs.core.count.call(null,c__16929__auto___26428);
var G__26432 = (0);
seq__26398_26415 = G__26429;
chunk__26399_26416 = G__26430;
count__26400_26417 = G__26431;
i__26401_26418 = G__26432;
continue;
} else {
var map__26403_26433 = cljs.core.first.call(null,seq__26398_26427__$1);
var map__26403_26434__$1 = ((cljs.core.seq_QMARK_.call(null,map__26403_26433))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403_26433):map__26403_26433);
var point_26435__$1 = cljs.core.get.call(null,map__26403_26434__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26435__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26435__$1));

var G__26436 = cljs.core.next.call(null,seq__26398_26427__$1);
var G__26437 = null;
var G__26438 = (0);
var G__26439 = (0);
seq__26398_26415 = G__26436;
chunk__26399_26416 = G__26437;
count__26400_26417 = G__26438;
i__26401_26418 = G__26439;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_26413)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26414),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26414));
} else {
}

context.stroke();

var G__26440 = seq__26391;
var G__26441 = chunk__26393;
var G__26442 = count__26394;
var G__26443 = (i__26395 + (1));
seq__26391 = G__26440;
chunk__26393 = G__26441;
count__26394 = G__26442;
i__26395 = G__26443;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26391);
if(temp__4126__auto__){
var seq__26391__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26391__$1)){
var c__16929__auto__ = cljs.core.chunk_first.call(null,seq__26391__$1);
var G__26444 = cljs.core.chunk_rest.call(null,seq__26391__$1);
var G__26445 = c__16929__auto__;
var G__26446 = cljs.core.count.call(null,c__16929__auto__);
var G__26447 = (0);
seq__26391 = G__26444;
chunk__26393 = G__26445;
count__26394 = G__26446;
i__26395 = G__26447;
continue;
} else {
var d = cljs.core.first.call(null,seq__26391__$1);
var map__26404_26448 = cljs.core.first.call(null,d);
var map__26404_26449__$1 = ((cljs.core.seq_QMARK_.call(null,map__26404_26448))?cljs.core.apply.call(null,cljs.core.hash_map,map__26404_26448):map__26404_26448);
var ep_26450 = map__26404_26449__$1;
var point_26451 = cljs.core.get.call(null,map__26404_26449__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26451),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26451));

var seq__26405_26452 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__26406_26453 = null;
var count__26407_26454 = (0);
var i__26408_26455 = (0);
while(true){
if((i__26408_26455 < count__26407_26454)){
var map__26409_26456 = cljs.core._nth.call(null,chunk__26406_26453,i__26408_26455);
var map__26409_26457__$1 = ((cljs.core.seq_QMARK_.call(null,map__26409_26456))?cljs.core.apply.call(null,cljs.core.hash_map,map__26409_26456):map__26409_26456);
var point_26458__$1 = cljs.core.get.call(null,map__26409_26457__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26458__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26458__$1));

var G__26459 = seq__26405_26452;
var G__26460 = chunk__26406_26453;
var G__26461 = count__26407_26454;
var G__26462 = (i__26408_26455 + (1));
seq__26405_26452 = G__26459;
chunk__26406_26453 = G__26460;
count__26407_26454 = G__26461;
i__26408_26455 = G__26462;
continue;
} else {
var temp__4126__auto___26463__$1 = cljs.core.seq.call(null,seq__26405_26452);
if(temp__4126__auto___26463__$1){
var seq__26405_26464__$1 = temp__4126__auto___26463__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26405_26464__$1)){
var c__16929__auto___26465 = cljs.core.chunk_first.call(null,seq__26405_26464__$1);
var G__26466 = cljs.core.chunk_rest.call(null,seq__26405_26464__$1);
var G__26467 = c__16929__auto___26465;
var G__26468 = cljs.core.count.call(null,c__16929__auto___26465);
var G__26469 = (0);
seq__26405_26452 = G__26466;
chunk__26406_26453 = G__26467;
count__26407_26454 = G__26468;
i__26408_26455 = G__26469;
continue;
} else {
var map__26410_26470 = cljs.core.first.call(null,seq__26405_26464__$1);
var map__26410_26471__$1 = ((cljs.core.seq_QMARK_.call(null,map__26410_26470))?cljs.core.apply.call(null,cljs.core.hash_map,map__26410_26470):map__26410_26470);
var point_26472__$1 = cljs.core.get.call(null,map__26410_26471__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26472__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26472__$1));

var G__26473 = cljs.core.next.call(null,seq__26405_26464__$1);
var G__26474 = null;
var G__26475 = (0);
var G__26476 = (0);
seq__26405_26452 = G__26473;
chunk__26406_26453 = G__26474;
count__26407_26454 = G__26475;
i__26408_26455 = G__26476;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_26450)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_26451),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_26451));
} else {
}

context.stroke();

var G__26477 = cljs.core.next.call(null,seq__26391__$1);
var G__26478 = null;
var G__26479 = (0);
var G__26480 = (0);
seq__26391 = G__26477;
chunk__26393 = G__26478;
count__26394 = G__26479;
i__26395 = G__26480;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.draw.draw_hull_vertices = (function cljs_intro$draw$draw_hull_vertices(context,pts){
var seq__26487 = cljs.core.seq.call(null,pts);
var chunk__26488 = null;
var count__26489 = (0);
var i__26490 = (0);
while(true){
if((i__26490 < count__26489)){
var vec__26491 = cljs.core._nth.call(null,chunk__26488,i__26490);
var f = cljs.core.nth.call(null,vec__26491,(0),null);
var color = cljs.core.nth.call(null,vec__26491,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__26493 = seq__26487;
var G__26494 = chunk__26488;
var G__26495 = count__26489;
var G__26496 = (i__26490 + (1));
seq__26487 = G__26493;
chunk__26488 = G__26494;
count__26489 = G__26495;
i__26490 = G__26496;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26487);
if(temp__4126__auto__){
var seq__26487__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26487__$1)){
var c__16929__auto__ = cljs.core.chunk_first.call(null,seq__26487__$1);
var G__26497 = cljs.core.chunk_rest.call(null,seq__26487__$1);
var G__26498 = c__16929__auto__;
var G__26499 = cljs.core.count.call(null,c__16929__auto__);
var G__26500 = (0);
seq__26487 = G__26497;
chunk__26488 = G__26498;
count__26489 = G__26499;
i__26490 = G__26500;
continue;
} else {
var vec__26492 = cljs.core.first.call(null,seq__26487__$1);
var f = cljs.core.nth.call(null,vec__26492,(0),null);
var color = cljs.core.nth.call(null,vec__26492,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__26501 = cljs.core.next.call(null,seq__26487__$1);
var G__26502 = null;
var G__26503 = (0);
var G__26504 = (0);
seq__26487 = G__26501;
chunk__26488 = G__26502;
count__26489 = G__26503;
i__26490 = G__26504;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.draw.draw_endpoints = (function cljs_intro$draw$draw_endpoints(context,eps){
var seq__26515 = cljs.core.seq.call(null,eps);
var chunk__26516 = null;
var count__26517 = (0);
var i__26518 = (0);
while(true){
if((i__26518 < count__26517)){
var map__26519 = cljs.core._nth.call(null,chunk__26516,i__26518);
var map__26519__$1 = ((cljs.core.seq_QMARK_.call(null,map__26519))?cljs.core.apply.call(null,cljs.core.hash_map,map__26519):map__26519);
var map__26520 = cljs.core.get.call(null,map__26519__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__26520__$1 = ((cljs.core.seq_QMARK_.call(null,map__26520))?cljs.core.apply.call(null,cljs.core.hash_map,map__26520):map__26520);
var x = cljs.core.get.call(null,map__26520__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__26520__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__26521_26525 = context;
G__26521_26525.beginPath();

G__26521_26525.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__26521_26525.fill();


var G__26526 = seq__26515;
var G__26527 = chunk__26516;
var G__26528 = count__26517;
var G__26529 = (i__26518 + (1));
seq__26515 = G__26526;
chunk__26516 = G__26527;
count__26517 = G__26528;
i__26518 = G__26529;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26515);
if(temp__4126__auto__){
var seq__26515__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26515__$1)){
var c__16929__auto__ = cljs.core.chunk_first.call(null,seq__26515__$1);
var G__26530 = cljs.core.chunk_rest.call(null,seq__26515__$1);
var G__26531 = c__16929__auto__;
var G__26532 = cljs.core.count.call(null,c__16929__auto__);
var G__26533 = (0);
seq__26515 = G__26530;
chunk__26516 = G__26531;
count__26517 = G__26532;
i__26518 = G__26533;
continue;
} else {
var map__26522 = cljs.core.first.call(null,seq__26515__$1);
var map__26522__$1 = ((cljs.core.seq_QMARK_.call(null,map__26522))?cljs.core.apply.call(null,cljs.core.hash_map,map__26522):map__26522);
var map__26523 = cljs.core.get.call(null,map__26522__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__26523__$1 = ((cljs.core.seq_QMARK_.call(null,map__26523))?cljs.core.apply.call(null,cljs.core.hash_map,map__26523):map__26523);
var x = cljs.core.get.call(null,map__26523__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__26523__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__26524_26534 = context;
G__26524_26534.beginPath();

G__26524_26534.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__26524_26534.fill();


var G__26535 = cljs.core.next.call(null,seq__26515__$1);
var G__26536 = null;
var G__26537 = (0);
var G__26538 = (0);
seq__26515 = G__26535;
chunk__26516 = G__26536;
count__26517 = G__26537;
i__26518 = G__26538;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.draw.draw_segments = (function cljs_intro$draw$draw_segments(context,segments){
context.strokeStyle = "cyan";

context.lineWidth = (2);

var seq__26551 = cljs.core.seq.call(null,segments);
var chunk__26552 = null;
var count__26553 = (0);
var i__26554 = (0);
while(true){
if((i__26554 < count__26553)){
var map__26555 = cljs.core._nth.call(null,chunk__26552,i__26554);
var map__26555__$1 = ((cljs.core.seq_QMARK_.call(null,map__26555))?cljs.core.apply.call(null,cljs.core.hash_map,map__26555):map__26555);
var map__26556 = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__26556__$1 = ((cljs.core.seq_QMARK_.call(null,map__26556))?cljs.core.apply.call(null,cljs.core.hash_map,map__26556):map__26556);
var x1 = cljs.core.get.call(null,map__26556__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__26556__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__26557 = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__26557__$1 = ((cljs.core.seq_QMARK_.call(null,map__26557))?cljs.core.apply.call(null,cljs.core.hash_map,map__26557):map__26557);
var x2 = cljs.core.get.call(null,map__26557__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__26557__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__26558_26563 = context;
G__26558_26563.beginPath();

G__26558_26563.moveTo(x1,y1);

G__26558_26563.lineTo(x2,y2);

G__26558_26563.stroke();


var G__26564 = seq__26551;
var G__26565 = chunk__26552;
var G__26566 = count__26553;
var G__26567 = (i__26554 + (1));
seq__26551 = G__26564;
chunk__26552 = G__26565;
count__26553 = G__26566;
i__26554 = G__26567;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26551);
if(temp__4126__auto__){
var seq__26551__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26551__$1)){
var c__16929__auto__ = cljs.core.chunk_first.call(null,seq__26551__$1);
var G__26568 = cljs.core.chunk_rest.call(null,seq__26551__$1);
var G__26569 = c__16929__auto__;
var G__26570 = cljs.core.count.call(null,c__16929__auto__);
var G__26571 = (0);
seq__26551 = G__26568;
chunk__26552 = G__26569;
count__26553 = G__26570;
i__26554 = G__26571;
continue;
} else {
var map__26559 = cljs.core.first.call(null,seq__26551__$1);
var map__26559__$1 = ((cljs.core.seq_QMARK_.call(null,map__26559))?cljs.core.apply.call(null,cljs.core.hash_map,map__26559):map__26559);
var map__26560 = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__26560__$1 = ((cljs.core.seq_QMARK_.call(null,map__26560))?cljs.core.apply.call(null,cljs.core.hash_map,map__26560):map__26560);
var x1 = cljs.core.get.call(null,map__26560__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__26560__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__26561 = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__26561__$1 = ((cljs.core.seq_QMARK_.call(null,map__26561))?cljs.core.apply.call(null,cljs.core.hash_map,map__26561):map__26561);
var x2 = cljs.core.get.call(null,map__26561__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__26561__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__26562_26572 = context;
G__26562_26572.beginPath();

G__26562_26572.moveTo(x1,y1);

G__26562_26572.lineTo(x2,y2);

G__26562_26572.stroke();


var G__26573 = cljs.core.next.call(null,seq__26551__$1);
var G__26574 = null;
var G__26575 = (0);
var G__26576 = (0);
seq__26551 = G__26573;
chunk__26552 = G__26574;
count__26553 = G__26575;
i__26554 = G__26576;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.draw.draw_circle = (function cljs_intro$draw$draw_circle(context,ox,oy,dist){
context.strokeStyle = "green";

context.lineWidth = (2);

var G__26578 = context;
G__26578.beginPath();

G__26578.arc(ox,oy,dist,(0),((2) * Math.PI),false);

G__26578.stroke();

return G__26578;
});
cljs_intro.draw.draw_pie = (function cljs_intro$draw$draw_pie(context,ox,oy,dist,alpha,beta){
context.strokeStyle = "green";

context.lineWidth = (2);

var G__26580 = context;
G__26580.beginPath();

G__26580.moveTo(ox,oy);

G__26580.arc(ox,oy,dist,alpha,beta,false);

G__26580.lineTo(ox,oy);

G__26580.stroke();

return G__26580;
});

//# sourceMappingURL=draw.js.map