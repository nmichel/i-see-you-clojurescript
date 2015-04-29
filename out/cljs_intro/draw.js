// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
goog.require('cljs_intro.core');
goog.require('cljs_intro.g2d');
cljs_intro.draw.draw_point = (function cljs_intro$draw$draw_point(context,p__6982,color){
var map__6985 = p__6982;
var map__6985__$1 = ((cljs.core.seq_QMARK_.call(null,map__6985))?cljs.core.apply.call(null,cljs.core.hash_map,map__6985):map__6985);
var x = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = color;

var G__6986 = context;
G__6986.beginPath();

G__6986.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__6986.fill();

return G__6986;
});
cljs_intro.draw.draw_rect = (function cljs_intro$draw$draw_rect(context,x,y,w,h,color){
context.fillStyle = color;

return context.fillRect(x,y,w,h);
});
cljs_intro.draw.draw_hull_by_clipping = (function cljs_intro$draw$draw_hull_by_clipping(context,ox,oy,p__6987,img){
var vec__6998 = p__6987;
var vec__6999 = cljs.core.nth.call(null,vec__6998,(0),null);
var p = cljs.core.nth.call(null,vec__6999,(0),null);
var _pcolor = cljs.core.nth.call(null,vec__6999,(1),null);
var pts = cljs.core.nthnext.call(null,vec__6998,(1));
var G__7000_7008 = context;
G__7000_7008.save();

G__7000_7008.beginPath();

G__7000_7008.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));


var seq__7001_7009 = cljs.core.seq.call(null,pts);
var chunk__7002_7010 = null;
var count__7003_7011 = (0);
var i__7004_7012 = (0);
while(true){
if((i__7004_7012 < count__7003_7011)){
var vec__7005_7013 = cljs.core._nth.call(null,chunk__7002_7010,i__7004_7012);
var a_7014 = cljs.core.nth.call(null,vec__7005_7013,(0),null);
var _acolor_7015 = cljs.core.nth.call(null,vec__7005_7013,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_7014),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_7014));

var G__7016 = seq__7001_7009;
var G__7017 = chunk__7002_7010;
var G__7018 = count__7003_7011;
var G__7019 = (i__7004_7012 + (1));
seq__7001_7009 = G__7016;
chunk__7002_7010 = G__7017;
count__7003_7011 = G__7018;
i__7004_7012 = G__7019;
continue;
} else {
var temp__4126__auto___7020 = cljs.core.seq.call(null,seq__7001_7009);
if(temp__4126__auto___7020){
var seq__7001_7021__$1 = temp__4126__auto___7020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7001_7021__$1)){
var c__4907__auto___7022 = cljs.core.chunk_first.call(null,seq__7001_7021__$1);
var G__7023 = cljs.core.chunk_rest.call(null,seq__7001_7021__$1);
var G__7024 = c__4907__auto___7022;
var G__7025 = cljs.core.count.call(null,c__4907__auto___7022);
var G__7026 = (0);
seq__7001_7009 = G__7023;
chunk__7002_7010 = G__7024;
count__7003_7011 = G__7025;
i__7004_7012 = G__7026;
continue;
} else {
var vec__7006_7027 = cljs.core.first.call(null,seq__7001_7021__$1);
var a_7028 = cljs.core.nth.call(null,vec__7006_7027,(0),null);
var _acolor_7029 = cljs.core.nth.call(null,vec__7006_7027,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_7028),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_7028));

var G__7030 = cljs.core.next.call(null,seq__7001_7021__$1);
var G__7031 = null;
var G__7032 = (0);
var G__7033 = (0);
seq__7001_7009 = G__7030;
chunk__7002_7010 = G__7031;
count__7003_7011 = G__7032;
i__7004_7012 = G__7033;
continue;
}
} else {
}
}
break;
}

var G__7007 = context;
G__7007.clip();

cljs_intro.draw.draw_rect.call(null,G__7007,(0),(0),(800),(600),"green");

G__7007.restore();

return G__7007;
});
cljs_intro.draw.draw_hull_as_polygon = (function cljs_intro$draw$draw_hull_as_polygon(context,ox,oy,p__7034){
var vec__7043 = p__7034;
var vec__7044 = cljs.core.nth.call(null,vec__7043,(0),null);
var p = cljs.core.nth.call(null,vec__7044,(0),null);
var _pcolor = cljs.core.nth.call(null,vec__7044,(1),null);
var pts = cljs.core.nthnext.call(null,vec__7043,(1));
context.fillStyle = "yellow";

context.lineWidth = (2);

context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));

var seq__7045_7051 = cljs.core.seq.call(null,pts);
var chunk__7046_7052 = null;
var count__7047_7053 = (0);
var i__7048_7054 = (0);
while(true){
if((i__7048_7054 < count__7047_7053)){
var vec__7049_7055 = cljs.core._nth.call(null,chunk__7046_7052,i__7048_7054);
var a_7056 = cljs.core.nth.call(null,vec__7049_7055,(0),null);
var _acolor_7057 = cljs.core.nth.call(null,vec__7049_7055,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_7056),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_7056));

var G__7058 = seq__7045_7051;
var G__7059 = chunk__7046_7052;
var G__7060 = count__7047_7053;
var G__7061 = (i__7048_7054 + (1));
seq__7045_7051 = G__7058;
chunk__7046_7052 = G__7059;
count__7047_7053 = G__7060;
i__7048_7054 = G__7061;
continue;
} else {
var temp__4126__auto___7062 = cljs.core.seq.call(null,seq__7045_7051);
if(temp__4126__auto___7062){
var seq__7045_7063__$1 = temp__4126__auto___7062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7045_7063__$1)){
var c__4907__auto___7064 = cljs.core.chunk_first.call(null,seq__7045_7063__$1);
var G__7065 = cljs.core.chunk_rest.call(null,seq__7045_7063__$1);
var G__7066 = c__4907__auto___7064;
var G__7067 = cljs.core.count.call(null,c__4907__auto___7064);
var G__7068 = (0);
seq__7045_7051 = G__7065;
chunk__7046_7052 = G__7066;
count__7047_7053 = G__7067;
i__7048_7054 = G__7068;
continue;
} else {
var vec__7050_7069 = cljs.core.first.call(null,seq__7045_7063__$1);
var a_7070 = cljs.core.nth.call(null,vec__7050_7069,(0),null);
var _acolor_7071 = cljs.core.nth.call(null,vec__7050_7069,(1),null);
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_7070),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_7070));

var G__7072 = cljs.core.next.call(null,seq__7045_7063__$1);
var G__7073 = null;
var G__7074 = (0);
var G__7075 = (0);
seq__7045_7051 = G__7072;
chunk__7046_7052 = G__7073;
count__7047_7053 = G__7074;
i__7048_7054 = G__7075;
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

var seq__7092 = cljs.core.seq.call(null,cljs.core.take.call(null,cljs.core.count.call(null,pts),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,pts))));
var chunk__7093 = null;
var count__7094 = (0);
var i__7095 = (0);
while(true){
if((i__7095 < count__7094)){
var vec__7096 = cljs.core._nth.call(null,chunk__7093,i__7095);
var vec__7097 = cljs.core.nth.call(null,vec__7096,(0),null);
var map__7098 = cljs.core.nth.call(null,vec__7097,(0),null);
var map__7098__$1 = ((cljs.core.seq_QMARK_.call(null,map__7098))?cljs.core.apply.call(null,cljs.core.hash_map,map__7098):map__7098);
var ax = cljs.core.get.call(null,map__7098__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__7098__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ca = cljs.core.nth.call(null,vec__7097,(1),null);
var vec__7099 = cljs.core.nth.call(null,vec__7096,(1),null);
var map__7100 = cljs.core.nth.call(null,vec__7099,(0),null);
var map__7100__$1 = ((cljs.core.seq_QMARK_.call(null,map__7100))?cljs.core.apply.call(null,cljs.core.hash_map,map__7100):map__7100);
var bx = cljs.core.get.call(null,map__7100__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__7100__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cb = cljs.core.nth.call(null,vec__7099,(1),null);
var G__7101_7108 = context;
G__7101_7108.beginPath();

G__7101_7108.moveTo(ax,ay);

G__7101_7108.lineTo(ox,oy);

G__7101_7108.lineTo(bx,by);

G__7101_7108.lineTo(ax,ay);

G__7101_7108.fill();

G__7101_7108.stroke();


var G__7109 = seq__7092;
var G__7110 = chunk__7093;
var G__7111 = count__7094;
var G__7112 = (i__7095 + (1));
seq__7092 = G__7109;
chunk__7093 = G__7110;
count__7094 = G__7111;
i__7095 = G__7112;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7092);
if(temp__4126__auto__){
var seq__7092__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7092__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__7092__$1);
var G__7113 = cljs.core.chunk_rest.call(null,seq__7092__$1);
var G__7114 = c__4907__auto__;
var G__7115 = cljs.core.count.call(null,c__4907__auto__);
var G__7116 = (0);
seq__7092 = G__7113;
chunk__7093 = G__7114;
count__7094 = G__7115;
i__7095 = G__7116;
continue;
} else {
var vec__7102 = cljs.core.first.call(null,seq__7092__$1);
var vec__7103 = cljs.core.nth.call(null,vec__7102,(0),null);
var map__7104 = cljs.core.nth.call(null,vec__7103,(0),null);
var map__7104__$1 = ((cljs.core.seq_QMARK_.call(null,map__7104))?cljs.core.apply.call(null,cljs.core.hash_map,map__7104):map__7104);
var ax = cljs.core.get.call(null,map__7104__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__7104__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ca = cljs.core.nth.call(null,vec__7103,(1),null);
var vec__7105 = cljs.core.nth.call(null,vec__7102,(1),null);
var map__7106 = cljs.core.nth.call(null,vec__7105,(0),null);
var map__7106__$1 = ((cljs.core.seq_QMARK_.call(null,map__7106))?cljs.core.apply.call(null,cljs.core.hash_map,map__7106):map__7106);
var bx = cljs.core.get.call(null,map__7106__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__7106__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cb = cljs.core.nth.call(null,vec__7105,(1),null);
var G__7107_7117 = context;
G__7107_7117.beginPath();

G__7107_7117.moveTo(ax,ay);

G__7107_7117.lineTo(ox,oy);

G__7107_7117.lineTo(bx,by);

G__7107_7117.lineTo(ax,ay);

G__7107_7117.fill();

G__7107_7117.stroke();


var G__7118 = cljs.core.next.call(null,seq__7092__$1);
var G__7119 = null;
var G__7120 = (0);
var G__7121 = (0);
seq__7092 = G__7118;
chunk__7093 = G__7119;
count__7094 = G__7120;
i__7095 = G__7121;
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

var seq__7138 = cljs.core.seq.call(null,surfaces);
var chunk__7139 = null;
var count__7140 = (0);
var i__7141 = (0);
while(true){
if((i__7141 < count__7140)){
var vec__7142 = cljs.core._nth.call(null,chunk__7139,i__7141);
var t = cljs.core.nth.call(null,vec__7142,(0),null);
var map__7143 = cljs.core.nth.call(null,vec__7142,(1),null);
var map__7143__$1 = ((cljs.core.seq_QMARK_.call(null,map__7143))?cljs.core.apply.call(null,cljs.core.hash_map,map__7143):map__7143);
var ox = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__7144 = cljs.core.nth.call(null,vec__7142,(2),null);
var map__7144__$1 = ((cljs.core.seq_QMARK_.call(null,map__7144))?cljs.core.apply.call(null,cljs.core.hash_map,map__7144):map__7144);
var a = cljs.core.get.call(null,map__7144__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__7144__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__7145 = cljs.core.nth.call(null,vec__7142,(3),null);
var map__7145__$1 = ((cljs.core.seq_QMARK_.call(null,map__7145))?cljs.core.apply.call(null,cljs.core.hash_map,map__7145):map__7145);
var b = cljs.core.get.call(null,map__7145__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__7145__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__7142;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_7154 = cljs.core.nth.call(null,surf,(4));
var G__7146_7155 = context;
G__7146_7155.beginPath();

G__7146_7155.moveTo(ox,oy);

G__7146_7155.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__7146_7155.arc(ox,oy,dist_7154,angle_a,angle_b,false);

G__7146_7155.fill();

} else {
var G__7147_7156 = context;
G__7147_7156.beginPath();

G__7147_7156.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__7147_7156.lineTo(ox,oy);

G__7147_7156.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__7147_7156.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__7147_7156.fill();

}

var G__7157 = seq__7138;
var G__7158 = chunk__7139;
var G__7159 = count__7140;
var G__7160 = (i__7141 + (1));
seq__7138 = G__7157;
chunk__7139 = G__7158;
count__7140 = G__7159;
i__7141 = G__7160;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7138);
if(temp__4126__auto__){
var seq__7138__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7138__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__7138__$1);
var G__7161 = cljs.core.chunk_rest.call(null,seq__7138__$1);
var G__7162 = c__4907__auto__;
var G__7163 = cljs.core.count.call(null,c__4907__auto__);
var G__7164 = (0);
seq__7138 = G__7161;
chunk__7139 = G__7162;
count__7140 = G__7163;
i__7141 = G__7164;
continue;
} else {
var vec__7148 = cljs.core.first.call(null,seq__7138__$1);
var t = cljs.core.nth.call(null,vec__7148,(0),null);
var map__7149 = cljs.core.nth.call(null,vec__7148,(1),null);
var map__7149__$1 = ((cljs.core.seq_QMARK_.call(null,map__7149))?cljs.core.apply.call(null,cljs.core.hash_map,map__7149):map__7149);
var ox = cljs.core.get.call(null,map__7149__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__7149__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__7150 = cljs.core.nth.call(null,vec__7148,(2),null);
var map__7150__$1 = ((cljs.core.seq_QMARK_.call(null,map__7150))?cljs.core.apply.call(null,cljs.core.hash_map,map__7150):map__7150);
var a = cljs.core.get.call(null,map__7150__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__7150__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__7151 = cljs.core.nth.call(null,vec__7148,(3),null);
var map__7151__$1 = ((cljs.core.seq_QMARK_.call(null,map__7151))?cljs.core.apply.call(null,cljs.core.hash_map,map__7151):map__7151);
var b = cljs.core.get.call(null,map__7151__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__7151__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__7148;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_7165 = cljs.core.nth.call(null,surf,(4));
var G__7152_7166 = context;
G__7152_7166.beginPath();

G__7152_7166.moveTo(ox,oy);

G__7152_7166.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__7152_7166.arc(ox,oy,dist_7165,angle_a,angle_b,false);

G__7152_7166.fill();

} else {
var G__7153_7167 = context;
G__7153_7167.beginPath();

G__7153_7167.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__7153_7167.lineTo(ox,oy);

G__7153_7167.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__7153_7167.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__7153_7167.fill();

}

var G__7168 = cljs.core.next.call(null,seq__7138__$1);
var G__7169 = null;
var G__7170 = (0);
var G__7171 = (0);
seq__7138 = G__7168;
chunk__7139 = G__7169;
count__7140 = G__7170;
i__7141 = G__7171;
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
context.strokeStyle = "red";

context.lineWidth = (2);

var seq__7192 = cljs.core.seq.call(null,data);
var chunk__7194 = null;
var count__7195 = (0);
var i__7196 = (0);
while(true){
if((i__7196 < count__7195)){
var d = cljs.core._nth.call(null,chunk__7194,i__7196);
var map__7198_7212 = cljs.core.first.call(null,d);
var map__7198_7213__$1 = ((cljs.core.seq_QMARK_.call(null,map__7198_7212))?cljs.core.apply.call(null,cljs.core.hash_map,map__7198_7212):map__7198_7212);
var ep_7214 = map__7198_7213__$1;
var point_7215 = cljs.core.get.call(null,map__7198_7213__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7215),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7215));

var seq__7199_7216 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__7200_7217 = null;
var count__7201_7218 = (0);
var i__7202_7219 = (0);
while(true){
if((i__7202_7219 < count__7201_7218)){
var map__7203_7220 = cljs.core._nth.call(null,chunk__7200_7217,i__7202_7219);
var map__7203_7221__$1 = ((cljs.core.seq_QMARK_.call(null,map__7203_7220))?cljs.core.apply.call(null,cljs.core.hash_map,map__7203_7220):map__7203_7220);
var point_7222__$1 = cljs.core.get.call(null,map__7203_7221__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7222__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7222__$1));

var G__7223 = seq__7199_7216;
var G__7224 = chunk__7200_7217;
var G__7225 = count__7201_7218;
var G__7226 = (i__7202_7219 + (1));
seq__7199_7216 = G__7223;
chunk__7200_7217 = G__7224;
count__7201_7218 = G__7225;
i__7202_7219 = G__7226;
continue;
} else {
var temp__4126__auto___7227 = cljs.core.seq.call(null,seq__7199_7216);
if(temp__4126__auto___7227){
var seq__7199_7228__$1 = temp__4126__auto___7227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7199_7228__$1)){
var c__4907__auto___7229 = cljs.core.chunk_first.call(null,seq__7199_7228__$1);
var G__7230 = cljs.core.chunk_rest.call(null,seq__7199_7228__$1);
var G__7231 = c__4907__auto___7229;
var G__7232 = cljs.core.count.call(null,c__4907__auto___7229);
var G__7233 = (0);
seq__7199_7216 = G__7230;
chunk__7200_7217 = G__7231;
count__7201_7218 = G__7232;
i__7202_7219 = G__7233;
continue;
} else {
var map__7204_7234 = cljs.core.first.call(null,seq__7199_7228__$1);
var map__7204_7235__$1 = ((cljs.core.seq_QMARK_.call(null,map__7204_7234))?cljs.core.apply.call(null,cljs.core.hash_map,map__7204_7234):map__7204_7234);
var point_7236__$1 = cljs.core.get.call(null,map__7204_7235__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7236__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7236__$1));

var G__7237 = cljs.core.next.call(null,seq__7199_7228__$1);
var G__7238 = null;
var G__7239 = (0);
var G__7240 = (0);
seq__7199_7216 = G__7237;
chunk__7200_7217 = G__7238;
count__7201_7218 = G__7239;
i__7202_7219 = G__7240;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_7214)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7215),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7215));
} else {
}

context.stroke();

var G__7241 = seq__7192;
var G__7242 = chunk__7194;
var G__7243 = count__7195;
var G__7244 = (i__7196 + (1));
seq__7192 = G__7241;
chunk__7194 = G__7242;
count__7195 = G__7243;
i__7196 = G__7244;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7192);
if(temp__4126__auto__){
var seq__7192__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7192__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__7192__$1);
var G__7245 = cljs.core.chunk_rest.call(null,seq__7192__$1);
var G__7246 = c__4907__auto__;
var G__7247 = cljs.core.count.call(null,c__4907__auto__);
var G__7248 = (0);
seq__7192 = G__7245;
chunk__7194 = G__7246;
count__7195 = G__7247;
i__7196 = G__7248;
continue;
} else {
var d = cljs.core.first.call(null,seq__7192__$1);
var map__7205_7249 = cljs.core.first.call(null,d);
var map__7205_7250__$1 = ((cljs.core.seq_QMARK_.call(null,map__7205_7249))?cljs.core.apply.call(null,cljs.core.hash_map,map__7205_7249):map__7205_7249);
var ep_7251 = map__7205_7250__$1;
var point_7252 = cljs.core.get.call(null,map__7205_7250__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7252),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7252));

var seq__7206_7253 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__7207_7254 = null;
var count__7208_7255 = (0);
var i__7209_7256 = (0);
while(true){
if((i__7209_7256 < count__7208_7255)){
var map__7210_7257 = cljs.core._nth.call(null,chunk__7207_7254,i__7209_7256);
var map__7210_7258__$1 = ((cljs.core.seq_QMARK_.call(null,map__7210_7257))?cljs.core.apply.call(null,cljs.core.hash_map,map__7210_7257):map__7210_7257);
var point_7259__$1 = cljs.core.get.call(null,map__7210_7258__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7259__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7259__$1));

var G__7260 = seq__7206_7253;
var G__7261 = chunk__7207_7254;
var G__7262 = count__7208_7255;
var G__7263 = (i__7209_7256 + (1));
seq__7206_7253 = G__7260;
chunk__7207_7254 = G__7261;
count__7208_7255 = G__7262;
i__7209_7256 = G__7263;
continue;
} else {
var temp__4126__auto___7264__$1 = cljs.core.seq.call(null,seq__7206_7253);
if(temp__4126__auto___7264__$1){
var seq__7206_7265__$1 = temp__4126__auto___7264__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7206_7265__$1)){
var c__4907__auto___7266 = cljs.core.chunk_first.call(null,seq__7206_7265__$1);
var G__7267 = cljs.core.chunk_rest.call(null,seq__7206_7265__$1);
var G__7268 = c__4907__auto___7266;
var G__7269 = cljs.core.count.call(null,c__4907__auto___7266);
var G__7270 = (0);
seq__7206_7253 = G__7267;
chunk__7207_7254 = G__7268;
count__7208_7255 = G__7269;
i__7209_7256 = G__7270;
continue;
} else {
var map__7211_7271 = cljs.core.first.call(null,seq__7206_7265__$1);
var map__7211_7272__$1 = ((cljs.core.seq_QMARK_.call(null,map__7211_7271))?cljs.core.apply.call(null,cljs.core.hash_map,map__7211_7271):map__7211_7271);
var point_7273__$1 = cljs.core.get.call(null,map__7211_7272__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7273__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7273__$1));

var G__7274 = cljs.core.next.call(null,seq__7206_7265__$1);
var G__7275 = null;
var G__7276 = (0);
var G__7277 = (0);
seq__7206_7253 = G__7274;
chunk__7207_7254 = G__7275;
count__7208_7255 = G__7276;
i__7209_7256 = G__7277;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_7251)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_7252),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_7252));
} else {
}

context.stroke();

var G__7278 = cljs.core.next.call(null,seq__7192__$1);
var G__7279 = null;
var G__7280 = (0);
var G__7281 = (0);
seq__7192 = G__7278;
chunk__7194 = G__7279;
count__7195 = G__7280;
i__7196 = G__7281;
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
var seq__7288 = cljs.core.seq.call(null,pts);
var chunk__7289 = null;
var count__7290 = (0);
var i__7291 = (0);
while(true){
if((i__7291 < count__7290)){
var vec__7292 = cljs.core._nth.call(null,chunk__7289,i__7291);
var f = cljs.core.nth.call(null,vec__7292,(0),null);
var color = cljs.core.nth.call(null,vec__7292,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__7294 = seq__7288;
var G__7295 = chunk__7289;
var G__7296 = count__7290;
var G__7297 = (i__7291 + (1));
seq__7288 = G__7294;
chunk__7289 = G__7295;
count__7290 = G__7296;
i__7291 = G__7297;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7288);
if(temp__4126__auto__){
var seq__7288__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7288__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__7288__$1);
var G__7298 = cljs.core.chunk_rest.call(null,seq__7288__$1);
var G__7299 = c__4907__auto__;
var G__7300 = cljs.core.count.call(null,c__4907__auto__);
var G__7301 = (0);
seq__7288 = G__7298;
chunk__7289 = G__7299;
count__7290 = G__7300;
i__7291 = G__7301;
continue;
} else {
var vec__7293 = cljs.core.first.call(null,seq__7288__$1);
var f = cljs.core.nth.call(null,vec__7293,(0),null);
var color = cljs.core.nth.call(null,vec__7293,(1),null);
cljs_intro.draw.draw_point.call(null,context,f,color);

var G__7302 = cljs.core.next.call(null,seq__7288__$1);
var G__7303 = null;
var G__7304 = (0);
var G__7305 = (0);
seq__7288 = G__7302;
chunk__7289 = G__7303;
count__7290 = G__7304;
i__7291 = G__7305;
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
var seq__7316 = cljs.core.seq.call(null,eps);
var chunk__7317 = null;
var count__7318 = (0);
var i__7319 = (0);
while(true){
if((i__7319 < count__7318)){
var map__7320 = cljs.core._nth.call(null,chunk__7317,i__7319);
var map__7320__$1 = ((cljs.core.seq_QMARK_.call(null,map__7320))?cljs.core.apply.call(null,cljs.core.hash_map,map__7320):map__7320);
var map__7321 = cljs.core.get.call(null,map__7320__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__7321__$1 = ((cljs.core.seq_QMARK_.call(null,map__7321))?cljs.core.apply.call(null,cljs.core.hash_map,map__7321):map__7321);
var x = cljs.core.get.call(null,map__7321__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__7321__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__7322_7326 = context;
G__7322_7326.beginPath();

G__7322_7326.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__7322_7326.fill();


var G__7327 = seq__7316;
var G__7328 = chunk__7317;
var G__7329 = count__7318;
var G__7330 = (i__7319 + (1));
seq__7316 = G__7327;
chunk__7317 = G__7328;
count__7318 = G__7329;
i__7319 = G__7330;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7316);
if(temp__4126__auto__){
var seq__7316__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7316__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__7316__$1);
var G__7331 = cljs.core.chunk_rest.call(null,seq__7316__$1);
var G__7332 = c__4907__auto__;
var G__7333 = cljs.core.count.call(null,c__4907__auto__);
var G__7334 = (0);
seq__7316 = G__7331;
chunk__7317 = G__7332;
count__7318 = G__7333;
i__7319 = G__7334;
continue;
} else {
var map__7323 = cljs.core.first.call(null,seq__7316__$1);
var map__7323__$1 = ((cljs.core.seq_QMARK_.call(null,map__7323))?cljs.core.apply.call(null,cljs.core.hash_map,map__7323):map__7323);
var map__7324 = cljs.core.get.call(null,map__7323__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__7324__$1 = ((cljs.core.seq_QMARK_.call(null,map__7324))?cljs.core.apply.call(null,cljs.core.hash_map,map__7324):map__7324);
var x = cljs.core.get.call(null,map__7324__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__7324__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__7325_7335 = context;
G__7325_7335.beginPath();

G__7325_7335.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__7325_7335.fill();


var G__7336 = cljs.core.next.call(null,seq__7316__$1);
var G__7337 = null;
var G__7338 = (0);
var G__7339 = (0);
seq__7316 = G__7336;
chunk__7317 = G__7337;
count__7318 = G__7338;
i__7319 = G__7339;
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

var seq__7352 = cljs.core.seq.call(null,segments);
var chunk__7353 = null;
var count__7354 = (0);
var i__7355 = (0);
while(true){
if((i__7355 < count__7354)){
var map__7356 = cljs.core._nth.call(null,chunk__7353,i__7355);
var map__7356__$1 = ((cljs.core.seq_QMARK_.call(null,map__7356))?cljs.core.apply.call(null,cljs.core.hash_map,map__7356):map__7356);
var map__7357 = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__7357__$1 = ((cljs.core.seq_QMARK_.call(null,map__7357))?cljs.core.apply.call(null,cljs.core.hash_map,map__7357):map__7357);
var x1 = cljs.core.get.call(null,map__7357__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__7357__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__7358 = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__7358__$1 = ((cljs.core.seq_QMARK_.call(null,map__7358))?cljs.core.apply.call(null,cljs.core.hash_map,map__7358):map__7358);
var x2 = cljs.core.get.call(null,map__7358__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__7358__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__7359_7364 = context;
G__7359_7364.beginPath();

G__7359_7364.moveTo(x1,y1);

G__7359_7364.lineTo(x2,y2);

G__7359_7364.stroke();


var G__7365 = seq__7352;
var G__7366 = chunk__7353;
var G__7367 = count__7354;
var G__7368 = (i__7355 + (1));
seq__7352 = G__7365;
chunk__7353 = G__7366;
count__7354 = G__7367;
i__7355 = G__7368;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7352);
if(temp__4126__auto__){
var seq__7352__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7352__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__7352__$1);
var G__7369 = cljs.core.chunk_rest.call(null,seq__7352__$1);
var G__7370 = c__4907__auto__;
var G__7371 = cljs.core.count.call(null,c__4907__auto__);
var G__7372 = (0);
seq__7352 = G__7369;
chunk__7353 = G__7370;
count__7354 = G__7371;
i__7355 = G__7372;
continue;
} else {
var map__7360 = cljs.core.first.call(null,seq__7352__$1);
var map__7360__$1 = ((cljs.core.seq_QMARK_.call(null,map__7360))?cljs.core.apply.call(null,cljs.core.hash_map,map__7360):map__7360);
var map__7361 = cljs.core.get.call(null,map__7360__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__7361__$1 = ((cljs.core.seq_QMARK_.call(null,map__7361))?cljs.core.apply.call(null,cljs.core.hash_map,map__7361):map__7361);
var x1 = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__7362 = cljs.core.get.call(null,map__7360__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__7362__$1 = ((cljs.core.seq_QMARK_.call(null,map__7362))?cljs.core.apply.call(null,cljs.core.hash_map,map__7362):map__7362);
var x2 = cljs.core.get.call(null,map__7362__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__7362__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__7363_7373 = context;
G__7363_7373.beginPath();

G__7363_7373.moveTo(x1,y1);

G__7363_7373.lineTo(x2,y2);

G__7363_7373.stroke();


var G__7374 = cljs.core.next.call(null,seq__7352__$1);
var G__7375 = null;
var G__7376 = (0);
var G__7377 = (0);
seq__7352 = G__7374;
chunk__7353 = G__7375;
count__7354 = G__7376;
i__7355 = G__7377;
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