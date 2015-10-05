// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
cljs_intro.draw.draw_point = (function cljs_intro$draw$draw_point(context,p__43325,color){
var map__43328 = p__43325;
var map__43328__$1 = ((cljs.core.seq_QMARK_.call(null,map__43328))?cljs.core.apply.call(null,cljs.core.hash_map,map__43328):map__43328);
var x = cljs.core.get.call(null,map__43328__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__43328__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = color;

var G__43329 = context;
G__43329.beginPath();

G__43329.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__43329.fill();

return G__43329;
});
cljs_intro.draw.draw_rect = (function cljs_intro$draw$draw_rect(context,x,y,w,h,color){
context.fillStyle = color;

return context.fillRect(x,y,w,h);
});
cljs_intro.draw.draw_hull_as_surfaces = (function cljs_intro$draw$draw_hull_as_surfaces(context,surfaces){
context.fillStyle = "yellow";

context.strokeStyle = "red";

context.lineWidth = (2);

var seq__43348 = cljs.core.seq.call(null,surfaces);
var chunk__43349 = null;
var count__43350 = (0);
var i__43351 = (0);
while(true){
if((i__43351 < count__43350)){
var vec__43352 = cljs.core._nth.call(null,chunk__43349,i__43351);
var t = cljs.core.nth.call(null,vec__43352,(0),null);
var map__43353 = cljs.core.nth.call(null,vec__43352,(1),null);
var map__43353__$1 = ((cljs.core.seq_QMARK_.call(null,map__43353))?cljs.core.apply.call(null,cljs.core.hash_map,map__43353):map__43353);
var ox = cljs.core.get.call(null,map__43353__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__43353__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__43354 = cljs.core.nth.call(null,vec__43352,(2),null);
var map__43354__$1 = ((cljs.core.seq_QMARK_.call(null,map__43354))?cljs.core.apply.call(null,cljs.core.hash_map,map__43354):map__43354);
var a = cljs.core.get.call(null,map__43354__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__43354__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__43355 = cljs.core.nth.call(null,vec__43352,(3),null);
var map__43355__$1 = ((cljs.core.seq_QMARK_.call(null,map__43355))?cljs.core.apply.call(null,cljs.core.hash_map,map__43355):map__43355);
var b = cljs.core.get.call(null,map__43355__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__43355__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__43352;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_43366 = cljs.core.nth.call(null,surf,(4));
var G__43356_43367 = context;
G__43356_43367.beginPath();

G__43356_43367.moveTo(ox,oy);

G__43356_43367.arc(ox,oy,dist_43366,angle_a,angle_b,false);

G__43356_43367.fill();

} else {
var G__43357_43368 = context;
G__43357_43368.beginPath();

G__43357_43368.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__43357_43368.lineTo(ox,oy);

G__43357_43368.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__43357_43368.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__43357_43368.fill();


var G__43358_43369 = context;
G__43358_43369.beginPath();

G__43358_43369.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__43358_43369.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__43358_43369.stroke();

}

var G__43370 = seq__43348;
var G__43371 = chunk__43349;
var G__43372 = count__43350;
var G__43373 = (i__43351 + (1));
seq__43348 = G__43370;
chunk__43349 = G__43371;
count__43350 = G__43372;
i__43351 = G__43373;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__43348);
if(temp__4126__auto__){
var seq__43348__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43348__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__43348__$1);
var G__43374 = cljs.core.chunk_rest.call(null,seq__43348__$1);
var G__43375 = c__16928__auto__;
var G__43376 = cljs.core.count.call(null,c__16928__auto__);
var G__43377 = (0);
seq__43348 = G__43374;
chunk__43349 = G__43375;
count__43350 = G__43376;
i__43351 = G__43377;
continue;
} else {
var vec__43359 = cljs.core.first.call(null,seq__43348__$1);
var t = cljs.core.nth.call(null,vec__43359,(0),null);
var map__43360 = cljs.core.nth.call(null,vec__43359,(1),null);
var map__43360__$1 = ((cljs.core.seq_QMARK_.call(null,map__43360))?cljs.core.apply.call(null,cljs.core.hash_map,map__43360):map__43360);
var ox = cljs.core.get.call(null,map__43360__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__43360__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__43361 = cljs.core.nth.call(null,vec__43359,(2),null);
var map__43361__$1 = ((cljs.core.seq_QMARK_.call(null,map__43361))?cljs.core.apply.call(null,cljs.core.hash_map,map__43361):map__43361);
var a = cljs.core.get.call(null,map__43361__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__43361__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__43362 = cljs.core.nth.call(null,vec__43359,(3),null);
var map__43362__$1 = ((cljs.core.seq_QMARK_.call(null,map__43362))?cljs.core.apply.call(null,cljs.core.hash_map,map__43362):map__43362);
var b = cljs.core.get.call(null,map__43362__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__43362__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__43359;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_43378 = cljs.core.nth.call(null,surf,(4));
var G__43363_43379 = context;
G__43363_43379.beginPath();

G__43363_43379.moveTo(ox,oy);

G__43363_43379.arc(ox,oy,dist_43378,angle_a,angle_b,false);

G__43363_43379.fill();

} else {
var G__43364_43380 = context;
G__43364_43380.beginPath();

G__43364_43380.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__43364_43380.lineTo(ox,oy);

G__43364_43380.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__43364_43380.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__43364_43380.fill();


var G__43365_43381 = context;
G__43365_43381.beginPath();

G__43365_43381.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__43365_43381.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__43365_43381.stroke();

}

var G__43382 = cljs.core.next.call(null,seq__43348__$1);
var G__43383 = null;
var G__43384 = (0);
var G__43385 = (0);
seq__43348 = G__43382;
chunk__43349 = G__43383;
count__43350 = G__43384;
i__43351 = G__43385;
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

var seq__43406 = cljs.core.seq.call(null,data);
var chunk__43408 = null;
var count__43409 = (0);
var i__43410 = (0);
while(true){
if((i__43410 < count__43409)){
var d = cljs.core._nth.call(null,chunk__43408,i__43410);
var map__43412_43426 = cljs.core.first.call(null,d);
var map__43412_43427__$1 = ((cljs.core.seq_QMARK_.call(null,map__43412_43426))?cljs.core.apply.call(null,cljs.core.hash_map,map__43412_43426):map__43412_43426);
var ep_43428 = map__43412_43427__$1;
var point_43429 = cljs.core.get.call(null,map__43412_43427__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43429),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43429));

var seq__43413_43430 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__43414_43431 = null;
var count__43415_43432 = (0);
var i__43416_43433 = (0);
while(true){
if((i__43416_43433 < count__43415_43432)){
var map__43417_43434 = cljs.core._nth.call(null,chunk__43414_43431,i__43416_43433);
var map__43417_43435__$1 = ((cljs.core.seq_QMARK_.call(null,map__43417_43434))?cljs.core.apply.call(null,cljs.core.hash_map,map__43417_43434):map__43417_43434);
var point_43436__$1 = cljs.core.get.call(null,map__43417_43435__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43436__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43436__$1));

var G__43437 = seq__43413_43430;
var G__43438 = chunk__43414_43431;
var G__43439 = count__43415_43432;
var G__43440 = (i__43416_43433 + (1));
seq__43413_43430 = G__43437;
chunk__43414_43431 = G__43438;
count__43415_43432 = G__43439;
i__43416_43433 = G__43440;
continue;
} else {
var temp__4126__auto___43441 = cljs.core.seq.call(null,seq__43413_43430);
if(temp__4126__auto___43441){
var seq__43413_43442__$1 = temp__4126__auto___43441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43413_43442__$1)){
var c__16928__auto___43443 = cljs.core.chunk_first.call(null,seq__43413_43442__$1);
var G__43444 = cljs.core.chunk_rest.call(null,seq__43413_43442__$1);
var G__43445 = c__16928__auto___43443;
var G__43446 = cljs.core.count.call(null,c__16928__auto___43443);
var G__43447 = (0);
seq__43413_43430 = G__43444;
chunk__43414_43431 = G__43445;
count__43415_43432 = G__43446;
i__43416_43433 = G__43447;
continue;
} else {
var map__43418_43448 = cljs.core.first.call(null,seq__43413_43442__$1);
var map__43418_43449__$1 = ((cljs.core.seq_QMARK_.call(null,map__43418_43448))?cljs.core.apply.call(null,cljs.core.hash_map,map__43418_43448):map__43418_43448);
var point_43450__$1 = cljs.core.get.call(null,map__43418_43449__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43450__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43450__$1));

var G__43451 = cljs.core.next.call(null,seq__43413_43442__$1);
var G__43452 = null;
var G__43453 = (0);
var G__43454 = (0);
seq__43413_43430 = G__43451;
chunk__43414_43431 = G__43452;
count__43415_43432 = G__43453;
i__43416_43433 = G__43454;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_43428)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43429),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43429));
} else {
}

context.stroke();

var G__43455 = seq__43406;
var G__43456 = chunk__43408;
var G__43457 = count__43409;
var G__43458 = (i__43410 + (1));
seq__43406 = G__43455;
chunk__43408 = G__43456;
count__43409 = G__43457;
i__43410 = G__43458;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__43406);
if(temp__4126__auto__){
var seq__43406__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43406__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__43406__$1);
var G__43459 = cljs.core.chunk_rest.call(null,seq__43406__$1);
var G__43460 = c__16928__auto__;
var G__43461 = cljs.core.count.call(null,c__16928__auto__);
var G__43462 = (0);
seq__43406 = G__43459;
chunk__43408 = G__43460;
count__43409 = G__43461;
i__43410 = G__43462;
continue;
} else {
var d = cljs.core.first.call(null,seq__43406__$1);
var map__43419_43463 = cljs.core.first.call(null,d);
var map__43419_43464__$1 = ((cljs.core.seq_QMARK_.call(null,map__43419_43463))?cljs.core.apply.call(null,cljs.core.hash_map,map__43419_43463):map__43419_43463);
var ep_43465 = map__43419_43464__$1;
var point_43466 = cljs.core.get.call(null,map__43419_43464__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43466));

var seq__43420_43467 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__43421_43468 = null;
var count__43422_43469 = (0);
var i__43423_43470 = (0);
while(true){
if((i__43423_43470 < count__43422_43469)){
var map__43424_43471 = cljs.core._nth.call(null,chunk__43421_43468,i__43423_43470);
var map__43424_43472__$1 = ((cljs.core.seq_QMARK_.call(null,map__43424_43471))?cljs.core.apply.call(null,cljs.core.hash_map,map__43424_43471):map__43424_43471);
var point_43473__$1 = cljs.core.get.call(null,map__43424_43472__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43473__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43473__$1));

var G__43474 = seq__43420_43467;
var G__43475 = chunk__43421_43468;
var G__43476 = count__43422_43469;
var G__43477 = (i__43423_43470 + (1));
seq__43420_43467 = G__43474;
chunk__43421_43468 = G__43475;
count__43422_43469 = G__43476;
i__43423_43470 = G__43477;
continue;
} else {
var temp__4126__auto___43478__$1 = cljs.core.seq.call(null,seq__43420_43467);
if(temp__4126__auto___43478__$1){
var seq__43420_43479__$1 = temp__4126__auto___43478__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43420_43479__$1)){
var c__16928__auto___43480 = cljs.core.chunk_first.call(null,seq__43420_43479__$1);
var G__43481 = cljs.core.chunk_rest.call(null,seq__43420_43479__$1);
var G__43482 = c__16928__auto___43480;
var G__43483 = cljs.core.count.call(null,c__16928__auto___43480);
var G__43484 = (0);
seq__43420_43467 = G__43481;
chunk__43421_43468 = G__43482;
count__43422_43469 = G__43483;
i__43423_43470 = G__43484;
continue;
} else {
var map__43425_43485 = cljs.core.first.call(null,seq__43420_43479__$1);
var map__43425_43486__$1 = ((cljs.core.seq_QMARK_.call(null,map__43425_43485))?cljs.core.apply.call(null,cljs.core.hash_map,map__43425_43485):map__43425_43485);
var point_43487__$1 = cljs.core.get.call(null,map__43425_43486__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43487__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43487__$1));

var G__43488 = cljs.core.next.call(null,seq__43420_43479__$1);
var G__43489 = null;
var G__43490 = (0);
var G__43491 = (0);
seq__43420_43467 = G__43488;
chunk__43421_43468 = G__43489;
count__43422_43469 = G__43490;
i__43423_43470 = G__43491;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_43465)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_43466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_43466));
} else {
}

context.stroke();

var G__43492 = cljs.core.next.call(null,seq__43406__$1);
var G__43493 = null;
var G__43494 = (0);
var G__43495 = (0);
seq__43406 = G__43492;
chunk__43408 = G__43493;
count__43409 = G__43494;
i__43410 = G__43495;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.draw.role_to_color_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"in","in",-1531184865),"blue",new cljs.core.Keyword(null,"out","out",-910545517),"green",new cljs.core.Keyword(null,"cross","cross",194557789),"yellow",new cljs.core.Keyword(null,"collision","collision",-201625508),"black"], null);
cljs_intro.draw.draw_hull_vertices = (function cljs_intro$draw$draw_hull_vertices(context,pts){
var seq__43502 = cljs.core.seq.call(null,pts);
var chunk__43503 = null;
var count__43504 = (0);
var i__43505 = (0);
while(true){
if((i__43505 < count__43504)){
var map__43506 = cljs.core._nth.call(null,chunk__43503,i__43505);
var map__43506__$1 = ((cljs.core.seq_QMARK_.call(null,map__43506))?cljs.core.apply.call(null,cljs.core.hash_map,map__43506):map__43506);
var p = cljs.core.get.call(null,map__43506__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var r = cljs.core.get.call(null,map__43506__$1,new cljs.core.Keyword(null,"role","role",-736691072));
cljs_intro.draw.draw_point.call(null,context,p,cljs.core.get.call(null,cljs_intro.draw.role_to_color_map,r,"white"));

var G__43508 = seq__43502;
var G__43509 = chunk__43503;
var G__43510 = count__43504;
var G__43511 = (i__43505 + (1));
seq__43502 = G__43508;
chunk__43503 = G__43509;
count__43504 = G__43510;
i__43505 = G__43511;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__43502);
if(temp__4126__auto__){
var seq__43502__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43502__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__43502__$1);
var G__43512 = cljs.core.chunk_rest.call(null,seq__43502__$1);
var G__43513 = c__16928__auto__;
var G__43514 = cljs.core.count.call(null,c__16928__auto__);
var G__43515 = (0);
seq__43502 = G__43512;
chunk__43503 = G__43513;
count__43504 = G__43514;
i__43505 = G__43515;
continue;
} else {
var map__43507 = cljs.core.first.call(null,seq__43502__$1);
var map__43507__$1 = ((cljs.core.seq_QMARK_.call(null,map__43507))?cljs.core.apply.call(null,cljs.core.hash_map,map__43507):map__43507);
var p = cljs.core.get.call(null,map__43507__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var r = cljs.core.get.call(null,map__43507__$1,new cljs.core.Keyword(null,"role","role",-736691072));
cljs_intro.draw.draw_point.call(null,context,p,cljs.core.get.call(null,cljs_intro.draw.role_to_color_map,r,"white"));

var G__43516 = cljs.core.next.call(null,seq__43502__$1);
var G__43517 = null;
var G__43518 = (0);
var G__43519 = (0);
seq__43502 = G__43516;
chunk__43503 = G__43517;
count__43504 = G__43518;
i__43505 = G__43519;
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
var seq__43530 = cljs.core.seq.call(null,eps);
var chunk__43531 = null;
var count__43532 = (0);
var i__43533 = (0);
while(true){
if((i__43533 < count__43532)){
var map__43534 = cljs.core._nth.call(null,chunk__43531,i__43533);
var map__43534__$1 = ((cljs.core.seq_QMARK_.call(null,map__43534))?cljs.core.apply.call(null,cljs.core.hash_map,map__43534):map__43534);
var map__43535 = cljs.core.get.call(null,map__43534__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__43535__$1 = ((cljs.core.seq_QMARK_.call(null,map__43535))?cljs.core.apply.call(null,cljs.core.hash_map,map__43535):map__43535);
var x = cljs.core.get.call(null,map__43535__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__43535__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__43536_43540 = context;
G__43536_43540.beginPath();

G__43536_43540.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__43536_43540.fill();


var G__43541 = seq__43530;
var G__43542 = chunk__43531;
var G__43543 = count__43532;
var G__43544 = (i__43533 + (1));
seq__43530 = G__43541;
chunk__43531 = G__43542;
count__43532 = G__43543;
i__43533 = G__43544;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__43530);
if(temp__4126__auto__){
var seq__43530__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43530__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__43530__$1);
var G__43545 = cljs.core.chunk_rest.call(null,seq__43530__$1);
var G__43546 = c__16928__auto__;
var G__43547 = cljs.core.count.call(null,c__16928__auto__);
var G__43548 = (0);
seq__43530 = G__43545;
chunk__43531 = G__43546;
count__43532 = G__43547;
i__43533 = G__43548;
continue;
} else {
var map__43537 = cljs.core.first.call(null,seq__43530__$1);
var map__43537__$1 = ((cljs.core.seq_QMARK_.call(null,map__43537))?cljs.core.apply.call(null,cljs.core.hash_map,map__43537):map__43537);
var map__43538 = cljs.core.get.call(null,map__43537__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__43538__$1 = ((cljs.core.seq_QMARK_.call(null,map__43538))?cljs.core.apply.call(null,cljs.core.hash_map,map__43538):map__43538);
var x = cljs.core.get.call(null,map__43538__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__43538__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__43539_43549 = context;
G__43539_43549.beginPath();

G__43539_43549.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__43539_43549.fill();


var G__43550 = cljs.core.next.call(null,seq__43530__$1);
var G__43551 = null;
var G__43552 = (0);
var G__43553 = (0);
seq__43530 = G__43550;
chunk__43531 = G__43551;
count__43532 = G__43552;
i__43533 = G__43553;
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

var seq__43566 = cljs.core.seq.call(null,segments);
var chunk__43567 = null;
var count__43568 = (0);
var i__43569 = (0);
while(true){
if((i__43569 < count__43568)){
var map__43570 = cljs.core._nth.call(null,chunk__43567,i__43569);
var map__43570__$1 = ((cljs.core.seq_QMARK_.call(null,map__43570))?cljs.core.apply.call(null,cljs.core.hash_map,map__43570):map__43570);
var map__43571 = cljs.core.get.call(null,map__43570__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__43571__$1 = ((cljs.core.seq_QMARK_.call(null,map__43571))?cljs.core.apply.call(null,cljs.core.hash_map,map__43571):map__43571);
var x1 = cljs.core.get.call(null,map__43571__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__43571__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__43572 = cljs.core.get.call(null,map__43570__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__43572__$1 = ((cljs.core.seq_QMARK_.call(null,map__43572))?cljs.core.apply.call(null,cljs.core.hash_map,map__43572):map__43572);
var x2 = cljs.core.get.call(null,map__43572__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__43572__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__43573_43578 = context;
G__43573_43578.beginPath();

G__43573_43578.moveTo(x1,y1);

G__43573_43578.lineTo(x2,y2);

G__43573_43578.stroke();


var G__43579 = seq__43566;
var G__43580 = chunk__43567;
var G__43581 = count__43568;
var G__43582 = (i__43569 + (1));
seq__43566 = G__43579;
chunk__43567 = G__43580;
count__43568 = G__43581;
i__43569 = G__43582;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__43566);
if(temp__4126__auto__){
var seq__43566__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43566__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__43566__$1);
var G__43583 = cljs.core.chunk_rest.call(null,seq__43566__$1);
var G__43584 = c__16928__auto__;
var G__43585 = cljs.core.count.call(null,c__16928__auto__);
var G__43586 = (0);
seq__43566 = G__43583;
chunk__43567 = G__43584;
count__43568 = G__43585;
i__43569 = G__43586;
continue;
} else {
var map__43574 = cljs.core.first.call(null,seq__43566__$1);
var map__43574__$1 = ((cljs.core.seq_QMARK_.call(null,map__43574))?cljs.core.apply.call(null,cljs.core.hash_map,map__43574):map__43574);
var map__43575 = cljs.core.get.call(null,map__43574__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__43575__$1 = ((cljs.core.seq_QMARK_.call(null,map__43575))?cljs.core.apply.call(null,cljs.core.hash_map,map__43575):map__43575);
var x1 = cljs.core.get.call(null,map__43575__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__43575__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__43576 = cljs.core.get.call(null,map__43574__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__43576__$1 = ((cljs.core.seq_QMARK_.call(null,map__43576))?cljs.core.apply.call(null,cljs.core.hash_map,map__43576):map__43576);
var x2 = cljs.core.get.call(null,map__43576__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__43576__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__43577_43587 = context;
G__43577_43587.beginPath();

G__43577_43587.moveTo(x1,y1);

G__43577_43587.lineTo(x2,y2);

G__43577_43587.stroke();


var G__43588 = cljs.core.next.call(null,seq__43566__$1);
var G__43589 = null;
var G__43590 = (0);
var G__43591 = (0);
seq__43566 = G__43588;
chunk__43567 = G__43589;
count__43568 = G__43590;
i__43569 = G__43591;
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

var G__43593 = context;
G__43593.beginPath();

G__43593.arc(ox,oy,dist,(0),((2) * Math.PI),false);

G__43593.stroke();

return G__43593;
});
cljs_intro.draw.draw_pie = (function cljs_intro$draw$draw_pie(context,ox,oy,dist,alpha,beta){
context.strokeStyle = "green";

context.lineWidth = (2);

var G__43595 = context;
G__43595.beginPath();

G__43595.moveTo(ox,oy);

G__43595.arc(ox,oy,dist,alpha,beta,false);

G__43595.lineTo(ox,oy);

G__43595.stroke();

return G__43595;
});

//# sourceMappingURL=draw.js.map