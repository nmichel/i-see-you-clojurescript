// Compiled by ClojureScript 0.0-2280
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
cljs_intro.draw.draw_point = (function draw_point(context,p__5013,color){var map__5015 = p__5013;var map__5015__$1 = ((cljs.core.seq_QMARK_.call(null,map__5015))?cljs.core.apply.call(null,cljs.core.hash_map,map__5015):map__5015);var x = cljs.core.get.call(null,map__5015__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__5015__$1,new cljs.core.Keyword(null,"y","y",-1757859776));context.beginPath();
context.arc(x,y,(3),(0),(2.0 * Math.PI),false);
context.fillStyle = color;
return context.fill();
});
cljs_intro.draw.draw_rect = (function draw_rect(context,x,y,w,h,color){context.fillStyle = color;
return context.fillRect(x,y,w,h);
});
cljs_intro.draw.draw_hull = (function draw_hull(context,ox,oy,pts,img){var poly_count_5022 = cljs.core.count.call(null,pts);var pts_source_5023 = cljs.core.cycle.call(null,pts);var vec__5019_5024 = cljs.core.first.call(null,pts_source_5023);var p_5025 = cljs.core.nth.call(null,vec__5019_5024,(0),null);var c_5026 = cljs.core.nth.call(null,vec__5019_5024,(1),null);var grd_5027 = context.createRadialGradient(ox,oy,(50),ox,oy,(500));context.save();
grd_5027.addColorStop((0),"yellow");
grd_5027.addColorStop((1),"white");
context.beginPath();
context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_5025),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_5025));
context.fillStyle = grd_5027;
var cnt_5028 = poly_count_5022;var pts_5029__$1 = cljs.core.rest.call(null,pts_source_5023);while(true){
if(cljs.core._EQ_.call(null,(0),cnt_5028))
{context.clip();
} else
{var vec__5020_5030 = pts_5029__$1;var vec__5021_5031 = cljs.core.nth.call(null,vec__5020_5030,(0),null);var a_5032 = cljs.core.nth.call(null,vec__5021_5031,(0),null);var tail_5033 = cljs.core.nthnext.call(null,vec__5020_5030,(1));context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a_5032),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a_5032));
{
var G__5034 = (cnt_5028 - (1));
var G__5035 = tail_5033;
cnt_5028 = G__5034;
pts_5029__$1 = G__5035;
continue;
}
}
break;
}
context.drawImage(img,(0),(0),(800),(600));
return context.restore();
});
cljs_intro.draw.draw_geometry = (function draw_geometry(context,data){var seq__5054 = cljs.core.seq.call(null,data);var chunk__5055 = null;var count__5056 = (0);var i__5057 = (0);while(true){
if((i__5057 < count__5056))
{var d = cljs.core._nth.call(null,chunk__5055,i__5057);var map__5058_5072 = cljs.core.first.call(null,d);var map__5058_5073__$1 = ((cljs.core.seq_QMARK_.call(null,map__5058_5072))?cljs.core.apply.call(null,cljs.core.hash_map,map__5058_5072):map__5058_5072);var ep_5074 = map__5058_5073__$1;var point_5075 = cljs.core.get.call(null,map__5058_5073__$1,new cljs.core.Keyword(null,"point","point",1813198264));context.strokeStyle = "red";
context.lineWidth = (2);
context.beginPath();
context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5075),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5075));
var seq__5059_5076 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));var chunk__5060_5077 = null;var count__5061_5078 = (0);var i__5062_5079 = (0);while(true){
if((i__5062_5079 < count__5061_5078))
{var map__5063_5080 = cljs.core._nth.call(null,chunk__5060_5077,i__5062_5079);var map__5063_5081__$1 = ((cljs.core.seq_QMARK_.call(null,map__5063_5080))?cljs.core.apply.call(null,cljs.core.hash_map,map__5063_5080):map__5063_5080);var point_5082__$1 = cljs.core.get.call(null,map__5063_5081__$1,new cljs.core.Keyword(null,"point","point",1813198264));context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5082__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5082__$1));
{
var G__5083 = seq__5059_5076;
var G__5084 = chunk__5060_5077;
var G__5085 = count__5061_5078;
var G__5086 = (i__5062_5079 + (1));
seq__5059_5076 = G__5083;
chunk__5060_5077 = G__5084;
count__5061_5078 = G__5085;
i__5062_5079 = G__5086;
continue;
}
} else
{var temp__4126__auto___5087 = cljs.core.seq.call(null,seq__5059_5076);if(temp__4126__auto___5087)
{var seq__5059_5088__$1 = temp__4126__auto___5087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5059_5088__$1))
{var c__4300__auto___5089 = cljs.core.chunk_first.call(null,seq__5059_5088__$1);{
var G__5090 = cljs.core.chunk_rest.call(null,seq__5059_5088__$1);
var G__5091 = c__4300__auto___5089;
var G__5092 = cljs.core.count.call(null,c__4300__auto___5089);
var G__5093 = (0);
seq__5059_5076 = G__5090;
chunk__5060_5077 = G__5091;
count__5061_5078 = G__5092;
i__5062_5079 = G__5093;
continue;
}
} else
{var map__5064_5094 = cljs.core.first.call(null,seq__5059_5088__$1);var map__5064_5095__$1 = ((cljs.core.seq_QMARK_.call(null,map__5064_5094))?cljs.core.apply.call(null,cljs.core.hash_map,map__5064_5094):map__5064_5094);var point_5096__$1 = cljs.core.get.call(null,map__5064_5095__$1,new cljs.core.Keyword(null,"point","point",1813198264));context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5096__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5096__$1));
{
var G__5097 = cljs.core.next.call(null,seq__5059_5088__$1);
var G__5098 = null;
var G__5099 = (0);
var G__5100 = (0);
seq__5059_5076 = G__5097;
chunk__5060_5077 = G__5098;
count__5061_5078 = G__5099;
i__5062_5079 = G__5100;
continue;
}
}
} else
{}
}
break;
}
if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_5074)) > (1)))
{context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5075),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5075));
} else
{}
context.stroke();
{
var G__5101 = seq__5054;
var G__5102 = chunk__5055;
var G__5103 = count__5056;
var G__5104 = (i__5057 + (1));
seq__5054 = G__5101;
chunk__5055 = G__5102;
count__5056 = G__5103;
i__5057 = G__5104;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5054);if(temp__4126__auto__)
{var seq__5054__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5054__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__5054__$1);{
var G__5105 = cljs.core.chunk_rest.call(null,seq__5054__$1);
var G__5106 = c__4300__auto__;
var G__5107 = cljs.core.count.call(null,c__4300__auto__);
var G__5108 = (0);
seq__5054 = G__5105;
chunk__5055 = G__5106;
count__5056 = G__5107;
i__5057 = G__5108;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__5054__$1);var map__5065_5109 = cljs.core.first.call(null,d);var map__5065_5110__$1 = ((cljs.core.seq_QMARK_.call(null,map__5065_5109))?cljs.core.apply.call(null,cljs.core.hash_map,map__5065_5109):map__5065_5109);var ep_5111 = map__5065_5110__$1;var point_5112 = cljs.core.get.call(null,map__5065_5110__$1,new cljs.core.Keyword(null,"point","point",1813198264));context.strokeStyle = "red";
context.lineWidth = (2);
context.beginPath();
context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5112),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5112));
var seq__5066_5113 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));var chunk__5067_5114 = null;var count__5068_5115 = (0);var i__5069_5116 = (0);while(true){
if((i__5069_5116 < count__5068_5115))
{var map__5070_5117 = cljs.core._nth.call(null,chunk__5067_5114,i__5069_5116);var map__5070_5118__$1 = ((cljs.core.seq_QMARK_.call(null,map__5070_5117))?cljs.core.apply.call(null,cljs.core.hash_map,map__5070_5117):map__5070_5117);var point_5119__$1 = cljs.core.get.call(null,map__5070_5118__$1,new cljs.core.Keyword(null,"point","point",1813198264));context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5119__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5119__$1));
{
var G__5120 = seq__5066_5113;
var G__5121 = chunk__5067_5114;
var G__5122 = count__5068_5115;
var G__5123 = (i__5069_5116 + (1));
seq__5066_5113 = G__5120;
chunk__5067_5114 = G__5121;
count__5068_5115 = G__5122;
i__5069_5116 = G__5123;
continue;
}
} else
{var temp__4126__auto___5124__$1 = cljs.core.seq.call(null,seq__5066_5113);if(temp__4126__auto___5124__$1)
{var seq__5066_5125__$1 = temp__4126__auto___5124__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5066_5125__$1))
{var c__4300__auto___5126 = cljs.core.chunk_first.call(null,seq__5066_5125__$1);{
var G__5127 = cljs.core.chunk_rest.call(null,seq__5066_5125__$1);
var G__5128 = c__4300__auto___5126;
var G__5129 = cljs.core.count.call(null,c__4300__auto___5126);
var G__5130 = (0);
seq__5066_5113 = G__5127;
chunk__5067_5114 = G__5128;
count__5068_5115 = G__5129;
i__5069_5116 = G__5130;
continue;
}
} else
{var map__5071_5131 = cljs.core.first.call(null,seq__5066_5125__$1);var map__5071_5132__$1 = ((cljs.core.seq_QMARK_.call(null,map__5071_5131))?cljs.core.apply.call(null,cljs.core.hash_map,map__5071_5131):map__5071_5131);var point_5133__$1 = cljs.core.get.call(null,map__5071_5132__$1,new cljs.core.Keyword(null,"point","point",1813198264));context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5133__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5133__$1));
{
var G__5134 = cljs.core.next.call(null,seq__5066_5125__$1);
var G__5135 = null;
var G__5136 = (0);
var G__5137 = (0);
seq__5066_5113 = G__5134;
chunk__5067_5114 = G__5135;
count__5068_5115 = G__5136;
i__5069_5116 = G__5137;
continue;
}
}
} else
{}
}
break;
}
if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_5111)) > (1)))
{context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_5112),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_5112));
} else
{}
context.stroke();
{
var G__5138 = cljs.core.next.call(null,seq__5054__$1);
var G__5139 = null;
var G__5140 = (0);
var G__5141 = (0);
seq__5054 = G__5138;
chunk__5055 = G__5139;
count__5056 = G__5140;
i__5057 = G__5141;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs_intro.draw.draw_collisions = (function draw_collisions(context,pts){var seq__5148 = cljs.core.seq.call(null,pts);var chunk__5149 = null;var count__5150 = (0);var i__5151 = (0);while(true){
if((i__5151 < count__5150))
{var vec__5152 = cljs.core._nth.call(null,chunk__5149,i__5151);var f = cljs.core.nth.call(null,vec__5152,(0),null);var color = cljs.core.nth.call(null,vec__5152,(1),null);cljs_intro.draw.draw_point.call(null,context,f,color);
{
var G__5154 = seq__5148;
var G__5155 = chunk__5149;
var G__5156 = count__5150;
var G__5157 = (i__5151 + (1));
seq__5148 = G__5154;
chunk__5149 = G__5155;
count__5150 = G__5156;
i__5151 = G__5157;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5148);if(temp__4126__auto__)
{var seq__5148__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5148__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__5148__$1);{
var G__5158 = cljs.core.chunk_rest.call(null,seq__5148__$1);
var G__5159 = c__4300__auto__;
var G__5160 = cljs.core.count.call(null,c__4300__auto__);
var G__5161 = (0);
seq__5148 = G__5158;
chunk__5149 = G__5159;
count__5150 = G__5160;
i__5151 = G__5161;
continue;
}
} else
{var vec__5153 = cljs.core.first.call(null,seq__5148__$1);var f = cljs.core.nth.call(null,vec__5153,(0),null);var color = cljs.core.nth.call(null,vec__5153,(1),null);cljs_intro.draw.draw_point.call(null,context,f,color);
{
var G__5162 = cljs.core.next.call(null,seq__5148__$1);
var G__5163 = null;
var G__5164 = (0);
var G__5165 = (0);
seq__5148 = G__5162;
chunk__5149 = G__5163;
count__5150 = G__5164;
i__5151 = G__5165;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs_intro.draw.draw_endpoints = (function draw_endpoints(context,eps){var seq__5174 = cljs.core.seq.call(null,eps);var chunk__5175 = null;var count__5176 = (0);var i__5177 = (0);while(true){
if((i__5177 < count__5176))
{var map__5178 = cljs.core._nth.call(null,chunk__5175,i__5177);var map__5178__$1 = ((cljs.core.seq_QMARK_.call(null,map__5178))?cljs.core.apply.call(null,cljs.core.hash_map,map__5178):map__5178);var map__5179 = cljs.core.get.call(null,map__5178__$1,new cljs.core.Keyword(null,"point","point",1813198264));var map__5179__$1 = ((cljs.core.seq_QMARK_.call(null,map__5179))?cljs.core.apply.call(null,cljs.core.hash_map,map__5179):map__5179);var x = cljs.core.get.call(null,map__5179__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__5179__$1,new cljs.core.Keyword(null,"y","y",-1757859776));context.beginPath();
context.arc(x,y,(5),(0),(2.0 * Math.PI),false);
context.fillStyle = "red";
context.fill();
{
var G__5182 = seq__5174;
var G__5183 = chunk__5175;
var G__5184 = count__5176;
var G__5185 = (i__5177 + (1));
seq__5174 = G__5182;
chunk__5175 = G__5183;
count__5176 = G__5184;
i__5177 = G__5185;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5174);if(temp__4126__auto__)
{var seq__5174__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5174__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__5174__$1);{
var G__5186 = cljs.core.chunk_rest.call(null,seq__5174__$1);
var G__5187 = c__4300__auto__;
var G__5188 = cljs.core.count.call(null,c__4300__auto__);
var G__5189 = (0);
seq__5174 = G__5186;
chunk__5175 = G__5187;
count__5176 = G__5188;
i__5177 = G__5189;
continue;
}
} else
{var map__5180 = cljs.core.first.call(null,seq__5174__$1);var map__5180__$1 = ((cljs.core.seq_QMARK_.call(null,map__5180))?cljs.core.apply.call(null,cljs.core.hash_map,map__5180):map__5180);var map__5181 = cljs.core.get.call(null,map__5180__$1,new cljs.core.Keyword(null,"point","point",1813198264));var map__5181__$1 = ((cljs.core.seq_QMARK_.call(null,map__5181))?cljs.core.apply.call(null,cljs.core.hash_map,map__5181):map__5181);var x = cljs.core.get.call(null,map__5181__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__5181__$1,new cljs.core.Keyword(null,"y","y",-1757859776));context.beginPath();
context.arc(x,y,(5),(0),(2.0 * Math.PI),false);
context.fillStyle = "red";
context.fill();
{
var G__5190 = cljs.core.next.call(null,seq__5174__$1);
var G__5191 = null;
var G__5192 = (0);
var G__5193 = (0);
seq__5174 = G__5190;
chunk__5175 = G__5191;
count__5176 = G__5192;
i__5177 = G__5193;
continue;
}
}
} else
{return null;
}
}
break;
}
});

//# sourceMappingURL=draw.js.map