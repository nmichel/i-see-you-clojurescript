// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
cljs_intro.draw.draw_point = (function cljs_intro$draw$draw_point(context,p__20881,color){
var map__20883 = p__20881;
var map__20883__$1 = ((cljs.core.seq_QMARK_.call(null,map__20883))?cljs.core.apply.call(null,cljs.core.hash_map,map__20883):map__20883);
var x = cljs.core.get.call(null,map__20883__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20883__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
var poly_count_20890 = cljs.core.count.call(null,pts);
var pts_source_20891 = cljs.core.cycle.call(null,pts);
var vec__20887_20892 = cljs.core.first.call(null,pts_source_20891);
var p_20893 = cljs.core.nth.call(null,vec__20887_20892,(0),null);
var c_20894 = cljs.core.nth.call(null,vec__20887_20892,(1),null);
context.save();

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_20893),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_20893));

var cnt_20895 = poly_count_20890;
var pts_20896__$1 = cljs.core.rest.call(null,pts_source_20891);
while(true){
if(cljs.core._EQ_.call(null,(0),cnt_20895)){
context.clip();
} else {
var vec__20888_20897 = pts_20896__$1;
var vec__20889_20898 = cljs.core.nth.call(null,vec__20888_20897,(0),null);
var a_20899 = cljs.core.nth.call(null,vec__20889_20898,(0),null);
var tail_20900 = cljs.core.nthnext.call(null,vec__20888_20897,(1));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_20899),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_20899));

var G__20901 = (cnt_20895 - (1));
var G__20902 = tail_20900;
cnt_20895 = G__20901;
pts_20896__$1 = G__20902;
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
var vec__20906 = cljs.core.first.call(null,pts_source);
var p = cljs.core.nth.call(null,vec__20906,(0),null);
var c = cljs.core.nth.call(null,vec__20906,(1),null);
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
var vec__20907 = pts__$1;
var vec__20908 = cljs.core.nth.call(null,vec__20907,(0),null);
var a = cljs.core.nth.call(null,vec__20908,(0),null);
var tail = cljs.core.nthnext.call(null,vec__20907,(1));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

var G__20909 = (cnt - (1));
var G__20910 = tail;
cnt = G__20909;
pts__$1 = G__20910;
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
var vec__20913 = cljs.core.first.call(null,pair);
var a = cljs.core.nth.call(null,vec__20913,(0),null);
var ca = cljs.core.nth.call(null,vec__20913,(1),null);
var vec__20914 = cljs.core.second.call(null,pair);
var b = cljs.core.nth.call(null,vec__20914,(0),null);
var cb = cljs.core.nth.call(null,vec__20914,(1),null);
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.lineTo(ox,oy);

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.fill();

context.stroke();

var G__20915 = (cnt - (1));
var G__20916 = cljs.core.rest.call(null,pts__$1);
cnt = G__20915;
pts__$1 = G__20916;
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
var vec__20925 = cljs.core.first.call(null,pair);
var map__20926 = cljs.core.nth.call(null,vec__20925,(0),null);
var map__20926__$1 = ((cljs.core.seq_QMARK_.call(null,map__20926))?cljs.core.apply.call(null,cljs.core.hash_map,map__20926):map__20926);
var a = cljs.core.get.call(null,map__20926__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__20927 = cljs.core.get.call(null,map__20926__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sega = cljs.core.nth.call(null,vec__20927,(0),null);
var angle_a = cljs.core.get.call(null,map__20926__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var ca = cljs.core.nth.call(null,vec__20925,(1),null);
var vec__20928 = cljs.core.second.call(null,pair);
var map__20929 = cljs.core.nth.call(null,vec__20928,(0),null);
var map__20929__$1 = ((cljs.core.seq_QMARK_.call(null,map__20929))?cljs.core.apply.call(null,cljs.core.hash_map,map__20929):map__20929);
var b = cljs.core.get.call(null,map__20929__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var vec__20930 = cljs.core.get.call(null,map__20929__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var segb = cljs.core.nth.call(null,vec__20930,(0),null);
var angle_b = cljs.core.get.call(null,map__20929__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var cb = cljs.core.nth.call(null,vec__20928,(1),null);
var ao = cljs_intro.g2d.minus.call(null,a,o);
var bo = cljs_intro.g2d.minus.call(null,b,o);
var dao = cljs_intro.g2d.magnitude.call(null,ao);
var dbo = cljs_intro.g2d.magnitude.call(null,bo);
context.fillStyle = "yellow";

if(!(cljs.core._EQ_.call(null,angle_a,angle_b))){
if(((1.0E-5 > Math.abs.call(null,(dist - dao)))) && ((1.0E-5 > Math.abs.call(null,(dist - dbo)))) && ((!((sega === segb))) || ((sega == null)))){
var map__20931_20933 = cljs_intro.g2d.__GT_polar.call(null,ao);
var map__20931_20934__$1 = ((cljs.core.seq_QMARK_.call(null,map__20931_20933))?cljs.core.apply.call(null,cljs.core.hash_map,map__20931_20933):map__20931_20933);
var ta_20935 = cljs.core.get.call(null,map__20931_20934__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var map__20932_20936 = cljs_intro.g2d.__GT_polar.call(null,bo);
var map__20932_20937__$1 = ((cljs.core.seq_QMARK_.call(null,map__20932_20936))?cljs.core.apply.call(null,cljs.core.hash_map,map__20932_20936):map__20932_20936);
var tb_20938 = cljs.core.get.call(null,map__20932_20937__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
context.beginPath();

context.moveTo(ox,oy);

context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

context.arc(ox,oy,dist,ta_20935,tb_20938,false);

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

var G__20939 = (cnt - (1));
var G__20940 = cljs.core.rest.call(null,pts__$1);
cnt = G__20939;
pts__$1 = G__20940;
continue;
} else {
return null;
}
break;
}
});
cljs_intro.draw.draw_geometry = (function cljs_intro$draw$draw_geometry(context,data){
var seq__20959 = cljs.core.seq.call(null,data);
var chunk__20960 = null;
var count__20961 = (0);
var i__20962 = (0);
while(true){
if((i__20962 < count__20961)){
var d = cljs.core._nth.call(null,chunk__20960,i__20962);
var map__20963_20977 = cljs.core.first.call(null,d);
var map__20963_20978__$1 = ((cljs.core.seq_QMARK_.call(null,map__20963_20977))?cljs.core.apply.call(null,cljs.core.hash_map,map__20963_20977):map__20963_20977);
var ep_20979 = map__20963_20978__$1;
var point_20980 = cljs.core.get.call(null,map__20963_20978__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.strokeStyle = "red";

context.lineWidth = (2);

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_20980),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_20980));

var seq__20964_20981 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__20965_20982 = null;
var count__20966_20983 = (0);
var i__20967_20984 = (0);
while(true){
if((i__20967_20984 < count__20966_20983)){
var map__20968_20985 = cljs.core._nth.call(null,chunk__20965_20982,i__20967_20984);
var map__20968_20986__$1 = ((cljs.core.seq_QMARK_.call(null,map__20968_20985))?cljs.core.apply.call(null,cljs.core.hash_map,map__20968_20985):map__20968_20985);
var point_20987__$1 = cljs.core.get.call(null,map__20968_20986__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_20987__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_20987__$1));

var G__20988 = seq__20964_20981;
var G__20989 = chunk__20965_20982;
var G__20990 = count__20966_20983;
var G__20991 = (i__20967_20984 + (1));
seq__20964_20981 = G__20988;
chunk__20965_20982 = G__20989;
count__20966_20983 = G__20990;
i__20967_20984 = G__20991;
continue;
} else {
var temp__4126__auto___20992 = cljs.core.seq.call(null,seq__20964_20981);
if(temp__4126__auto___20992){
var seq__20964_20993__$1 = temp__4126__auto___20992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20964_20993__$1)){
var c__4907__auto___20994 = cljs.core.chunk_first.call(null,seq__20964_20993__$1);
var G__20995 = cljs.core.chunk_rest.call(null,seq__20964_20993__$1);
var G__20996 = c__4907__auto___20994;
var G__20997 = cljs.core.count.call(null,c__4907__auto___20994);
var G__20998 = (0);
seq__20964_20981 = G__20995;
chunk__20965_20982 = G__20996;
count__20966_20983 = G__20997;
i__20967_20984 = G__20998;
continue;
} else {
var map__20969_20999 = cljs.core.first.call(null,seq__20964_20993__$1);
var map__20969_21000__$1 = ((cljs.core.seq_QMARK_.call(null,map__20969_20999))?cljs.core.apply.call(null,cljs.core.hash_map,map__20969_20999):map__20969_20999);
var point_21001__$1 = cljs.core.get.call(null,map__20969_21000__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_21001__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_21001__$1));

var G__21002 = cljs.core.next.call(null,seq__20964_20993__$1);
var G__21003 = null;
var G__21004 = (0);
var G__21005 = (0);
seq__20964_20981 = G__21002;
chunk__20965_20982 = G__21003;
count__20966_20983 = G__21004;
i__20967_20984 = G__21005;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_20979)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_20980),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_20980));
} else {
}

context.stroke();

var G__21006 = seq__20959;
var G__21007 = chunk__20960;
var G__21008 = count__20961;
var G__21009 = (i__20962 + (1));
seq__20959 = G__21006;
chunk__20960 = G__21007;
count__20961 = G__21008;
i__20962 = G__21009;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20959);
if(temp__4126__auto__){
var seq__20959__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20959__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__20959__$1);
var G__21010 = cljs.core.chunk_rest.call(null,seq__20959__$1);
var G__21011 = c__4907__auto__;
var G__21012 = cljs.core.count.call(null,c__4907__auto__);
var G__21013 = (0);
seq__20959 = G__21010;
chunk__20960 = G__21011;
count__20961 = G__21012;
i__20962 = G__21013;
continue;
} else {
var d = cljs.core.first.call(null,seq__20959__$1);
var map__20970_21014 = cljs.core.first.call(null,d);
var map__20970_21015__$1 = ((cljs.core.seq_QMARK_.call(null,map__20970_21014))?cljs.core.apply.call(null,cljs.core.hash_map,map__20970_21014):map__20970_21014);
var ep_21016 = map__20970_21015__$1;
var point_21017 = cljs.core.get.call(null,map__20970_21015__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.strokeStyle = "red";

context.lineWidth = (2);

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_21017),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_21017));

var seq__20971_21018 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__20972_21019 = null;
var count__20973_21020 = (0);
var i__20974_21021 = (0);
while(true){
if((i__20974_21021 < count__20973_21020)){
var map__20975_21022 = cljs.core._nth.call(null,chunk__20972_21019,i__20974_21021);
var map__20975_21023__$1 = ((cljs.core.seq_QMARK_.call(null,map__20975_21022))?cljs.core.apply.call(null,cljs.core.hash_map,map__20975_21022):map__20975_21022);
var point_21024__$1 = cljs.core.get.call(null,map__20975_21023__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_21024__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_21024__$1));

var G__21025 = seq__20971_21018;
var G__21026 = chunk__20972_21019;
var G__21027 = count__20973_21020;
var G__21028 = (i__20974_21021 + (1));
seq__20971_21018 = G__21025;
chunk__20972_21019 = G__21026;
count__20973_21020 = G__21027;
i__20974_21021 = G__21028;
continue;
} else {
var temp__4126__auto___21029__$1 = cljs.core.seq.call(null,seq__20971_21018);
if(temp__4126__auto___21029__$1){
var seq__20971_21030__$1 = temp__4126__auto___21029__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20971_21030__$1)){
var c__4907__auto___21031 = cljs.core.chunk_first.call(null,seq__20971_21030__$1);
var G__21032 = cljs.core.chunk_rest.call(null,seq__20971_21030__$1);
var G__21033 = c__4907__auto___21031;
var G__21034 = cljs.core.count.call(null,c__4907__auto___21031);
var G__21035 = (0);
seq__20971_21018 = G__21032;
chunk__20972_21019 = G__21033;
count__20973_21020 = G__21034;
i__20974_21021 = G__21035;
continue;
} else {
var map__20976_21036 = cljs.core.first.call(null,seq__20971_21030__$1);
var map__20976_21037__$1 = ((cljs.core.seq_QMARK_.call(null,map__20976_21036))?cljs.core.apply.call(null,cljs.core.hash_map,map__20976_21036):map__20976_21036);
var point_21038__$1 = cljs.core.get.call(null,map__20976_21037__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_21038__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_21038__$1));

var G__21039 = cljs.core.next.call(null,seq__20971_21030__$1);
var G__21040 = null;
var G__21041 = (0);
var G__21042 = (0);
seq__20971_21018 = G__21039;
chunk__20972_21019 = G__21040;
count__20973_21020 = G__21041;
i__20974_21021 = G__21042;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_21016)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_21017),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_21017));
} else {
}

context.stroke();

var G__21043 = cljs.core.next.call(null,seq__20959__$1);
var G__21044 = null;
var G__21045 = (0);
var G__21046 = (0);
seq__20959 = G__21043;
chunk__20960 = G__21044;
count__20961 = G__21045;
i__20962 = G__21046;
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
var seq__21053 = cljs.core.seq.call(null,pts);
var chunk__21054 = null;
var count__21055 = (0);
var i__21056 = (0);
while(true){
if((i__21056 < count__21055)){
var vec__21057 = cljs.core._nth.call(null,chunk__21054,i__21056);
var f = cljs.core.nth.call(null,vec__21057,(0),null);
var color = cljs.core.nth.call(null,vec__21057,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__21059 = seq__21053;
var G__21060 = chunk__21054;
var G__21061 = count__21055;
var G__21062 = (i__21056 + (1));
seq__21053 = G__21059;
chunk__21054 = G__21060;
count__21055 = G__21061;
i__21056 = G__21062;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21053);
if(temp__4126__auto__){
var seq__21053__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21053__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__21053__$1);
var G__21063 = cljs.core.chunk_rest.call(null,seq__21053__$1);
var G__21064 = c__4907__auto__;
var G__21065 = cljs.core.count.call(null,c__4907__auto__);
var G__21066 = (0);
seq__21053 = G__21063;
chunk__21054 = G__21064;
count__21055 = G__21065;
i__21056 = G__21066;
continue;
} else {
var vec__21058 = cljs.core.first.call(null,seq__21053__$1);
var f = cljs.core.nth.call(null,vec__21058,(0),null);
var color = cljs.core.nth.call(null,vec__21058,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__21067 = cljs.core.next.call(null,seq__21053__$1);
var G__21068 = null;
var G__21069 = (0);
var G__21070 = (0);
seq__21053 = G__21067;
chunk__21054 = G__21068;
count__21055 = G__21069;
i__21056 = G__21070;
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
var seq__21079 = cljs.core.seq.call(null,eps);
var chunk__21080 = null;
var count__21081 = (0);
var i__21082 = (0);
while(true){
if((i__21082 < count__21081)){
var map__21083 = cljs.core._nth.call(null,chunk__21080,i__21082);
var map__21083__$1 = ((cljs.core.seq_QMARK_.call(null,map__21083))?cljs.core.apply.call(null,cljs.core.hash_map,map__21083):map__21083);
var map__21084 = cljs.core.get.call(null,map__21083__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__21084__$1 = ((cljs.core.seq_QMARK_.call(null,map__21084))?cljs.core.apply.call(null,cljs.core.hash_map,map__21084):map__21084);
var x = cljs.core.get.call(null,map__21084__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21084__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.arc(x,y,(5),(0),(2.0 * Math.PI),false);

context.fillStyle = "red";

context.fill();

var G__21087 = seq__21079;
var G__21088 = chunk__21080;
var G__21089 = count__21081;
var G__21090 = (i__21082 + (1));
seq__21079 = G__21087;
chunk__21080 = G__21088;
count__21081 = G__21089;
i__21082 = G__21090;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21079);
if(temp__4126__auto__){
var seq__21079__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21079__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__21079__$1);
var G__21091 = cljs.core.chunk_rest.call(null,seq__21079__$1);
var G__21092 = c__4907__auto__;
var G__21093 = cljs.core.count.call(null,c__4907__auto__);
var G__21094 = (0);
seq__21079 = G__21091;
chunk__21080 = G__21092;
count__21081 = G__21093;
i__21082 = G__21094;
continue;
} else {
var map__21085 = cljs.core.first.call(null,seq__21079__$1);
var map__21085__$1 = ((cljs.core.seq_QMARK_.call(null,map__21085))?cljs.core.apply.call(null,cljs.core.hash_map,map__21085):map__21085);
var map__21086 = cljs.core.get.call(null,map__21085__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__21086__$1 = ((cljs.core.seq_QMARK_.call(null,map__21086))?cljs.core.apply.call(null,cljs.core.hash_map,map__21086):map__21086);
var x = cljs.core.get.call(null,map__21086__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21086__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.arc(x,y,(5),(0),(2.0 * Math.PI),false);

context.fillStyle = "red";

context.fill();

var G__21095 = cljs.core.next.call(null,seq__21079__$1);
var G__21096 = null;
var G__21097 = (0);
var G__21098 = (0);
seq__21079 = G__21095;
chunk__21080 = G__21096;
count__21081 = G__21097;
i__21082 = G__21098;
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

var seq__21109 = cljs.core.seq.call(null,segments);
var chunk__21110 = null;
var count__21111 = (0);
var i__21112 = (0);
while(true){
if((i__21112 < count__21111)){
var map__21113 = cljs.core._nth.call(null,chunk__21110,i__21112);
var map__21113__$1 = ((cljs.core.seq_QMARK_.call(null,map__21113))?cljs.core.apply.call(null,cljs.core.hash_map,map__21113):map__21113);
var map__21114 = cljs.core.get.call(null,map__21113__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__21114__$1 = ((cljs.core.seq_QMARK_.call(null,map__21114))?cljs.core.apply.call(null,cljs.core.hash_map,map__21114):map__21114);
var x1 = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__21115 = cljs.core.get.call(null,map__21113__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__21115__$1 = ((cljs.core.seq_QMARK_.call(null,map__21115))?cljs.core.apply.call(null,cljs.core.hash_map,map__21115):map__21115);
var x2 = cljs.core.get.call(null,map__21115__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__21115__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.moveTo(x1,y1);

context.lineTo(x2,y2);

context.stroke();

var G__21119 = seq__21109;
var G__21120 = chunk__21110;
var G__21121 = count__21111;
var G__21122 = (i__21112 + (1));
seq__21109 = G__21119;
chunk__21110 = G__21120;
count__21111 = G__21121;
i__21112 = G__21122;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21109);
if(temp__4126__auto__){
var seq__21109__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21109__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__21109__$1);
var G__21123 = cljs.core.chunk_rest.call(null,seq__21109__$1);
var G__21124 = c__4907__auto__;
var G__21125 = cljs.core.count.call(null,c__4907__auto__);
var G__21126 = (0);
seq__21109 = G__21123;
chunk__21110 = G__21124;
count__21111 = G__21125;
i__21112 = G__21126;
continue;
} else {
var map__21116 = cljs.core.first.call(null,seq__21109__$1);
var map__21116__$1 = ((cljs.core.seq_QMARK_.call(null,map__21116))?cljs.core.apply.call(null,cljs.core.hash_map,map__21116):map__21116);
var map__21117 = cljs.core.get.call(null,map__21116__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__21117__$1 = ((cljs.core.seq_QMARK_.call(null,map__21117))?cljs.core.apply.call(null,cljs.core.hash_map,map__21117):map__21117);
var x1 = cljs.core.get.call(null,map__21117__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__21117__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__21118 = cljs.core.get.call(null,map__21116__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__21118__$1 = ((cljs.core.seq_QMARK_.call(null,map__21118))?cljs.core.apply.call(null,cljs.core.hash_map,map__21118):map__21118);
var x2 = cljs.core.get.call(null,map__21118__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__21118__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

context.moveTo(x1,y1);

context.lineTo(x2,y2);

context.stroke();

var G__21127 = cljs.core.next.call(null,seq__21109__$1);
var G__21128 = null;
var G__21129 = (0);
var G__21130 = (0);
seq__21109 = G__21127;
chunk__21110 = G__21128;
count__21111 = G__21129;
i__21112 = G__21130;
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