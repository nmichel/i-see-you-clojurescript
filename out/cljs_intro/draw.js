// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
cljs_intro.draw.draw_point = (function cljs_intro$draw$draw_point(context,p__5314,color){
var map__5316 = p__5314;
var map__5316__$1 = ((cljs.core.seq_QMARK_.call(null,map__5316))?cljs.core.apply.call(null,cljs.core.hash_map,map__5316):map__5316);
var x = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.arc(x,y,(5),(0),(2.0 * Math.PI),false);

context.fillStyle = color;

return context.fill();
});
cljs_intro.draw.draw_rect = (function cljs_intro$draw$draw_rect(context,x,y,w,h,color){
context.fillStyle = color;

return context.fillRect(x,y,w,h);
});
cljs_intro.draw.draw_hull_by_clipping = (function cljs_intro$draw$draw_hull_by_clipping(context,ox,oy,pts,img){
var poly_count_5323 = cljs.core.count.call(null,pts);
var pts_source_5324 = cljs.core.cycle.call(null,pts);
var vec__5320_5325 = cljs.core.first.call(null,pts_source_5324);
var p_5326 = cljs.core.nth.call(null,vec__5320_5325,(0),null);
var c_5327 = cljs.core.nth.call(null,vec__5320_5325,(1),null);
context.save();

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_5326),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_5326));

var cnt_5328 = poly_count_5323;
var pts_5329__$1 = cljs.core.rest.call(null,pts_source_5324);
while(true){
if(cljs.core._EQ_.call(null,(0),cnt_5328)){
context.clip();
} else {
var vec__5321_5330 = pts_5329__$1;
var vec__5322_5331 = cljs.core.nth.call(null,vec__5321_5330,(0),null);
var a_5332 = cljs.core.nth.call(null,vec__5322_5331,(0),null);
var tail_5333 = cljs.core.nthnext.call(null,vec__5321_5330,(1));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_5332),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_5332));

var G__5334 = (cnt_5328 - (1));
var G__5335 = tail_5333;
cnt_5328 = G__5334;
pts_5329__$1 = G__5335;
continue;
}
break;
}

cljs_intro.draw.draw_rect.call(null,context,(0),(0),(800),(600),"green");

return context.restore();
});
cljs_intro.draw.draw_hull_as_polygon = (function cljs_intro$draw$draw_hull_as_polygon(context,ox,oy,pts,img){
var poly_count = cljs.core.count.call(null,pts);
var pts_source = cljs.core.cycle.call(null,pts);
var vec__5339 = cljs.core.first.call(null,pts_source);
var p = cljs.core.nth.call(null,vec__5339,(0),null);
var c = cljs.core.nth.call(null,vec__5339,(1),null);
context.fillStyle = "yellow";

context.lineWidth = (2);

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));

var cnt = poly_count;
var pts__$1 = cljs.core.rest.call(null,pts_source);
while(true){
if(cljs.core._EQ_.call(null,(0),cnt)){
return context.fill();
} else {
var vec__5340 = pts__$1;
var vec__5341 = cljs.core.nth.call(null,vec__5340,(0),null);
var a = cljs.core.nth.call(null,vec__5341,(0),null);
var tail = cljs.core.nthnext.call(null,vec__5340,(1));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

var G__5342 = (cnt - (1));
var G__5343 = tail;
cnt = G__5342;
pts__$1 = G__5343;
continue;
}
break;
}
});
cljs_intro.draw.draw_hull_as_fan = (function cljs_intro$draw$draw_hull_as_fan(context,ox,oy,pts,img){
var poly_count = cljs.core.count.call(null,pts);
var pts_source = cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,pts));
context.fillStyle = "yellow";

context.strokeStyle = "orange";

context.lineWidth = (2);

var cnt = poly_count;
var pts__$1 = pts_source;
while(true){
if(((0) < cnt)){
var pair = cljs.core.first.call(null,pts__$1);
var vec__5346 = cljs.core.first.call(null,pair);
var a = cljs.core.nth.call(null,vec__5346,(0),null);
var ca = cljs.core.nth.call(null,vec__5346,(1),null);
var vec__5347 = cljs.core.second.call(null,pair);
var b = cljs.core.nth.call(null,vec__5347,(0),null);
var cb = cljs.core.nth.call(null,vec__5347,(1),null);
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.lineTo(ox,oy);

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.fill();

context.stroke();

var G__5348 = (cnt - (1));
var G__5349 = cljs.core.rest.call(null,pts__$1);
cnt = G__5348;
pts__$1 = G__5349;
continue;
} else {
return null;
}
break;
}
});
cljs_intro.draw.draw_hull_as_arc = (function cljs_intro$draw$draw_hull_as_arc(context,ox,oy,pts,dist,img){
var o = cljs_intro.g2d.vec2d.call(null,ox,oy);
var poly_count = cljs.core.count.call(null,pts);
var pts_source = cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,pts));
context.fillStyle = "yellow";

var cnt = poly_count;
var pts__$1 = pts_source;
while(true){
if(((0) < cnt)){
var pair = cljs.core.first.call(null,pts__$1);
var vec__5358 = cljs.core.first.call(null,pair);
var map__5359 = cljs.core.nth.call(null,vec__5358,(0),null);
var map__5359__$1 = ((cljs.core.seq_QMARK_.call(null,map__5359))?cljs.core.apply.call(null,cljs.core.hash_map,map__5359):map__5359);
var a = cljs.core.get.call(null,map__5359__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__5360 = cljs.core.get.call(null,map__5359__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sega = cljs.core.nth.call(null,vec__5360,(0),null);
var angle_a = cljs.core.get.call(null,map__5359__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var ca = cljs.core.nth.call(null,vec__5358,(1),null);
var vec__5361 = cljs.core.second.call(null,pair);
var map__5362 = cljs.core.nth.call(null,vec__5361,(0),null);
var map__5362__$1 = ((cljs.core.seq_QMARK_.call(null,map__5362))?cljs.core.apply.call(null,cljs.core.hash_map,map__5362):map__5362);
var b = cljs.core.get.call(null,map__5362__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__5363 = cljs.core.get.call(null,map__5362__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var segb = cljs.core.nth.call(null,vec__5363,(0),null);
var angle_b = cljs.core.get.call(null,map__5362__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var cb = cljs.core.nth.call(null,vec__5361,(1),null);
var ao = cljs_intro.g2d.minus.call(null,a,o);
var bo = cljs_intro.g2d.minus.call(null,b,o);
var dao = cljs_intro.g2d.magnitude.call(null,ao);
var dbo = cljs_intro.g2d.magnitude.call(null,bo);
context.fillStyle = "yellow";

if(!(cljs.core._EQ_.call(null,angle_a,angle_b))){
if(((1.0E-5 > Math.abs.call(null,(dist - dao)))) && ((1.0E-5 > Math.abs.call(null,(dist - dbo)))) && ((!((sega === segb))) || ((sega == null)))){
var map__5364_5366 = cljs_intro.g2d.__GT_polar.call(null,ao);
var map__5364_5367__$1 = ((cljs.core.seq_QMARK_.call(null,map__5364_5366))?cljs.core.apply.call(null,cljs.core.hash_map,map__5364_5366):map__5364_5366);
var ta_5368 = cljs.core.get.call(null,map__5364_5367__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var map__5365_5369 = cljs_intro.g2d.__GT_polar.call(null,bo);
var map__5365_5370__$1 = ((cljs.core.seq_QMARK_.call(null,map__5365_5369))?cljs.core.apply.call(null,cljs.core.hash_map,map__5365_5369):map__5365_5369);
var tb_5371 = cljs.core.get.call(null,map__5365_5370__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
context.beginPath();

context.moveTo(ox,oy);

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.arc(ox,oy,dist,ta_5368,tb_5371,false);

context.fill();
} else {
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.lineTo(ox,oy);

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.fill();
}
} else {
}

var G__5372 = (cnt - (1));
var G__5373 = cljs.core.rest.call(null,pts__$1);
cnt = G__5372;
pts__$1 = G__5373;
continue;
} else {
return null;
}
break;
}
});
cljs_intro.draw.draw_geometry = (function cljs_intro$draw$draw_geometry(context,data){
var seq__5392 = cljs.core.seq.call(null,data);
var chunk__5393 = null;
var count__5394 = (0);
var i__5395 = (0);
while(true){
if((i__5395 < count__5394)){
var d = cljs.core._nth.call(null,chunk__5393,i__5395);
var map__5396_5410 = cljs.core.first.call(null,d);
var map__5396_5411__$1 = ((cljs.core.seq_QMARK_.call(null,map__5396_5410))?cljs.core.apply.call(null,cljs.core.hash_map,map__5396_5410):map__5396_5410);
var ep_5412 = map__5396_5411__$1;
var point_5413 = cljs.core.get.call(null,map__5396_5411__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.strokeStyle = "red";

context.lineWidth = (2);

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5413),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5413));

var seq__5397_5414 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__5398_5415 = null;
var count__5399_5416 = (0);
var i__5400_5417 = (0);
while(true){
if((i__5400_5417 < count__5399_5416)){
var map__5401_5418 = cljs.core._nth.call(null,chunk__5398_5415,i__5400_5417);
var map__5401_5419__$1 = ((cljs.core.seq_QMARK_.call(null,map__5401_5418))?cljs.core.apply.call(null,cljs.core.hash_map,map__5401_5418):map__5401_5418);
var point_5420__$1 = cljs.core.get.call(null,map__5401_5419__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5420__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5420__$1));

var G__5421 = seq__5397_5414;
var G__5422 = chunk__5398_5415;
var G__5423 = count__5399_5416;
var G__5424 = (i__5400_5417 + (1));
seq__5397_5414 = G__5421;
chunk__5398_5415 = G__5422;
count__5399_5416 = G__5423;
i__5400_5417 = G__5424;
continue;
} else {
var temp__4126__auto___5425 = cljs.core.seq.call(null,seq__5397_5414);
if(temp__4126__auto___5425){
var seq__5397_5426__$1 = temp__4126__auto___5425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5397_5426__$1)){
var c__4907__auto___5427 = cljs.core.chunk_first.call(null,seq__5397_5426__$1);
var G__5428 = cljs.core.chunk_rest.call(null,seq__5397_5426__$1);
var G__5429 = c__4907__auto___5427;
var G__5430 = cljs.core.count.call(null,c__4907__auto___5427);
var G__5431 = (0);
seq__5397_5414 = G__5428;
chunk__5398_5415 = G__5429;
count__5399_5416 = G__5430;
i__5400_5417 = G__5431;
continue;
} else {
var map__5402_5432 = cljs.core.first.call(null,seq__5397_5426__$1);
var map__5402_5433__$1 = ((cljs.core.seq_QMARK_.call(null,map__5402_5432))?cljs.core.apply.call(null,cljs.core.hash_map,map__5402_5432):map__5402_5432);
var point_5434__$1 = cljs.core.get.call(null,map__5402_5433__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5434__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5434__$1));

var G__5435 = cljs.core.next.call(null,seq__5397_5426__$1);
var G__5436 = null;
var G__5437 = (0);
var G__5438 = (0);
seq__5397_5414 = G__5435;
chunk__5398_5415 = G__5436;
count__5399_5416 = G__5437;
i__5400_5417 = G__5438;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_5412)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5413),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5413));
} else {
}

context.stroke();

var G__5439 = seq__5392;
var G__5440 = chunk__5393;
var G__5441 = count__5394;
var G__5442 = (i__5395 + (1));
seq__5392 = G__5439;
chunk__5393 = G__5440;
count__5394 = G__5441;
i__5395 = G__5442;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5392);
if(temp__4126__auto__){
var seq__5392__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5392__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__5392__$1);
var G__5443 = cljs.core.chunk_rest.call(null,seq__5392__$1);
var G__5444 = c__4907__auto__;
var G__5445 = cljs.core.count.call(null,c__4907__auto__);
var G__5446 = (0);
seq__5392 = G__5443;
chunk__5393 = G__5444;
count__5394 = G__5445;
i__5395 = G__5446;
continue;
} else {
var d = cljs.core.first.call(null,seq__5392__$1);
var map__5403_5447 = cljs.core.first.call(null,d);
var map__5403_5448__$1 = ((cljs.core.seq_QMARK_.call(null,map__5403_5447))?cljs.core.apply.call(null,cljs.core.hash_map,map__5403_5447):map__5403_5447);
var ep_5449 = map__5403_5448__$1;
var point_5450 = cljs.core.get.call(null,map__5403_5448__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.strokeStyle = "red";

context.lineWidth = (2);

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5450),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5450));

var seq__5404_5451 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__5405_5452 = null;
var count__5406_5453 = (0);
var i__5407_5454 = (0);
while(true){
if((i__5407_5454 < count__5406_5453)){
var map__5408_5455 = cljs.core._nth.call(null,chunk__5405_5452,i__5407_5454);
var map__5408_5456__$1 = ((cljs.core.seq_QMARK_.call(null,map__5408_5455))?cljs.core.apply.call(null,cljs.core.hash_map,map__5408_5455):map__5408_5455);
var point_5457__$1 = cljs.core.get.call(null,map__5408_5456__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5457__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5457__$1));

var G__5458 = seq__5404_5451;
var G__5459 = chunk__5405_5452;
var G__5460 = count__5406_5453;
var G__5461 = (i__5407_5454 + (1));
seq__5404_5451 = G__5458;
chunk__5405_5452 = G__5459;
count__5406_5453 = G__5460;
i__5407_5454 = G__5461;
continue;
} else {
var temp__4126__auto___5462__$1 = cljs.core.seq.call(null,seq__5404_5451);
if(temp__4126__auto___5462__$1){
var seq__5404_5463__$1 = temp__4126__auto___5462__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5404_5463__$1)){
var c__4907__auto___5464 = cljs.core.chunk_first.call(null,seq__5404_5463__$1);
var G__5465 = cljs.core.chunk_rest.call(null,seq__5404_5463__$1);
var G__5466 = c__4907__auto___5464;
var G__5467 = cljs.core.count.call(null,c__4907__auto___5464);
var G__5468 = (0);
seq__5404_5451 = G__5465;
chunk__5405_5452 = G__5466;
count__5406_5453 = G__5467;
i__5407_5454 = G__5468;
continue;
} else {
var map__5409_5469 = cljs.core.first.call(null,seq__5404_5463__$1);
var map__5409_5470__$1 = ((cljs.core.seq_QMARK_.call(null,map__5409_5469))?cljs.core.apply.call(null,cljs.core.hash_map,map__5409_5469):map__5409_5469);
var point_5471__$1 = cljs.core.get.call(null,map__5409_5470__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5471__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5471__$1));

var G__5472 = cljs.core.next.call(null,seq__5404_5463__$1);
var G__5473 = null;
var G__5474 = (0);
var G__5475 = (0);
seq__5404_5451 = G__5472;
chunk__5405_5452 = G__5473;
count__5406_5453 = G__5474;
i__5407_5454 = G__5475;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_5449)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5450),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5450));
} else {
}

context.stroke();

var G__5476 = cljs.core.next.call(null,seq__5392__$1);
var G__5477 = null;
var G__5478 = (0);
var G__5479 = (0);
seq__5392 = G__5476;
chunk__5393 = G__5477;
count__5394 = G__5478;
i__5395 = G__5479;
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
var seq__5486 = cljs.core.seq.call(null,pts);
var chunk__5487 = null;
var count__5488 = (0);
var i__5489 = (0);
while(true){
if((i__5489 < count__5488)){
var vec__5490 = cljs.core._nth.call(null,chunk__5487,i__5489);
var f = cljs.core.nth.call(null,vec__5490,(0),null);
var color = cljs.core.nth.call(null,vec__5490,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__5492 = seq__5486;
var G__5493 = chunk__5487;
var G__5494 = count__5488;
var G__5495 = (i__5489 + (1));
seq__5486 = G__5492;
chunk__5487 = G__5493;
count__5488 = G__5494;
i__5489 = G__5495;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5486);
if(temp__4126__auto__){
var seq__5486__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5486__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__5486__$1);
var G__5496 = cljs.core.chunk_rest.call(null,seq__5486__$1);
var G__5497 = c__4907__auto__;
var G__5498 = cljs.core.count.call(null,c__4907__auto__);
var G__5499 = (0);
seq__5486 = G__5496;
chunk__5487 = G__5497;
count__5488 = G__5498;
i__5489 = G__5499;
continue;
} else {
var vec__5491 = cljs.core.first.call(null,seq__5486__$1);
var f = cljs.core.nth.call(null,vec__5491,(0),null);
var color = cljs.core.nth.call(null,vec__5491,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__5500 = cljs.core.next.call(null,seq__5486__$1);
var G__5501 = null;
var G__5502 = (0);
var G__5503 = (0);
seq__5486 = G__5500;
chunk__5487 = G__5501;
count__5488 = G__5502;
i__5489 = G__5503;
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
var seq__5512 = cljs.core.seq.call(null,eps);
var chunk__5513 = null;
var count__5514 = (0);
var i__5515 = (0);
while(true){
if((i__5515 < count__5514)){
var map__5516 = cljs.core._nth.call(null,chunk__5513,i__5515);
var map__5516__$1 = ((cljs.core.seq_QMARK_.call(null,map__5516))?cljs.core.apply.call(null,cljs.core.hash_map,map__5516):map__5516);
var map__5517 = cljs.core.get.call(null,map__5516__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__5517__$1 = ((cljs.core.seq_QMARK_.call(null,map__5517))?cljs.core.apply.call(null,cljs.core.hash_map,map__5517):map__5517);
var x = cljs.core.get.call(null,map__5517__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5517__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.arc(x,y,(5),(0),(2.0 * Math.PI),false);

context.fillStyle = "red";

context.fill();

var G__5520 = seq__5512;
var G__5521 = chunk__5513;
var G__5522 = count__5514;
var G__5523 = (i__5515 + (1));
seq__5512 = G__5520;
chunk__5513 = G__5521;
count__5514 = G__5522;
i__5515 = G__5523;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5512);
if(temp__4126__auto__){
var seq__5512__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5512__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__5512__$1);
var G__5524 = cljs.core.chunk_rest.call(null,seq__5512__$1);
var G__5525 = c__4907__auto__;
var G__5526 = cljs.core.count.call(null,c__4907__auto__);
var G__5527 = (0);
seq__5512 = G__5524;
chunk__5513 = G__5525;
count__5514 = G__5526;
i__5515 = G__5527;
continue;
} else {
var map__5518 = cljs.core.first.call(null,seq__5512__$1);
var map__5518__$1 = ((cljs.core.seq_QMARK_.call(null,map__5518))?cljs.core.apply.call(null,cljs.core.hash_map,map__5518):map__5518);
var map__5519 = cljs.core.get.call(null,map__5518__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__5519__$1 = ((cljs.core.seq_QMARK_.call(null,map__5519))?cljs.core.apply.call(null,cljs.core.hash_map,map__5519):map__5519);
var x = cljs.core.get.call(null,map__5519__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5519__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.arc(x,y,(5),(0),(2.0 * Math.PI),false);

context.fillStyle = "red";

context.fill();

var G__5528 = cljs.core.next.call(null,seq__5512__$1);
var G__5529 = null;
var G__5530 = (0);
var G__5531 = (0);
seq__5512 = G__5528;
chunk__5513 = G__5529;
count__5514 = G__5530;
i__5515 = G__5531;
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

var seq__5542 = cljs.core.seq.call(null,segments);
var chunk__5543 = null;
var count__5544 = (0);
var i__5545 = (0);
while(true){
if((i__5545 < count__5544)){
var map__5546 = cljs.core._nth.call(null,chunk__5543,i__5545);
var map__5546__$1 = ((cljs.core.seq_QMARK_.call(null,map__5546))?cljs.core.apply.call(null,cljs.core.hash_map,map__5546):map__5546);
var map__5547 = cljs.core.get.call(null,map__5546__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5547__$1 = ((cljs.core.seq_QMARK_.call(null,map__5547))?cljs.core.apply.call(null,cljs.core.hash_map,map__5547):map__5547);
var x1 = cljs.core.get.call(null,map__5547__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5547__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5548 = cljs.core.get.call(null,map__5546__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__5548__$1 = ((cljs.core.seq_QMARK_.call(null,map__5548))?cljs.core.apply.call(null,cljs.core.hash_map,map__5548):map__5548);
var x2 = cljs.core.get.call(null,map__5548__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5548__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.moveTo(x1,y1);

context.lineTo(x2,y2);

context.stroke();

var G__5552 = seq__5542;
var G__5553 = chunk__5543;
var G__5554 = count__5544;
var G__5555 = (i__5545 + (1));
seq__5542 = G__5552;
chunk__5543 = G__5553;
count__5544 = G__5554;
i__5545 = G__5555;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5542);
if(temp__4126__auto__){
var seq__5542__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5542__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__5542__$1);
var G__5556 = cljs.core.chunk_rest.call(null,seq__5542__$1);
var G__5557 = c__4907__auto__;
var G__5558 = cljs.core.count.call(null,c__4907__auto__);
var G__5559 = (0);
seq__5542 = G__5556;
chunk__5543 = G__5557;
count__5544 = G__5558;
i__5545 = G__5559;
continue;
} else {
var map__5549 = cljs.core.first.call(null,seq__5542__$1);
var map__5549__$1 = ((cljs.core.seq_QMARK_.call(null,map__5549))?cljs.core.apply.call(null,cljs.core.hash_map,map__5549):map__5549);
var map__5550 = cljs.core.get.call(null,map__5549__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__5550__$1 = ((cljs.core.seq_QMARK_.call(null,map__5550))?cljs.core.apply.call(null,cljs.core.hash_map,map__5550):map__5550);
var x1 = cljs.core.get.call(null,map__5550__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__5550__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5551 = cljs.core.get.call(null,map__5549__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__5551__$1 = ((cljs.core.seq_QMARK_.call(null,map__5551))?cljs.core.apply.call(null,cljs.core.hash_map,map__5551):map__5551);
var x2 = cljs.core.get.call(null,map__5551__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__5551__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.moveTo(x1,y1);

context.lineTo(x2,y2);

context.stroke();

var G__5560 = cljs.core.next.call(null,seq__5542__$1);
var G__5561 = null;
var G__5562 = (0);
var G__5563 = (0);
seq__5542 = G__5560;
chunk__5543 = G__5561;
count__5544 = G__5562;
i__5545 = G__5563;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=draw.js.map