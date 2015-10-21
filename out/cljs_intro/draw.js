// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
goog.require('cljs_intro.g2d');
goog.require('cljs_intro.core');
cljs_intro.draw.draw_point = (function cljs_intro$draw$draw_point(context,p__6529,color){
var map__6533 = p__6529;
var map__6533__$1 = ((((!((map__6533 == null)))?((((map__6533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6533):map__6533);
var x = cljs.core.get.call(null,map__6533__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__6533__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = color;

var G__6535 = context;
G__6535.beginPath();

G__6535.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__6535.fill();

return G__6535;
});
cljs_intro.draw.draw_rect = (function cljs_intro$draw$draw_rect(context,x,y,w,h,color){
context.fillStyle = color;

return context.fillRect(x,y,w,h);
});
cljs_intro.draw.draw_hull_as_surfaces = (function cljs_intro$draw$draw_hull_as_surfaces(context,surfaces){
context.fillStyle = "yellow";

context.strokeStyle = "red";

context.lineWidth = (2);

var seq__6560 = cljs.core.seq.call(null,surfaces);
var chunk__6561 = null;
var count__6562 = (0);
var i__6563 = (0);
while(true){
if((i__6563 < count__6562)){
var vec__6564 = cljs.core._nth.call(null,chunk__6561,i__6563);
var t = cljs.core.nth.call(null,vec__6564,(0),null);
var map__6565 = cljs.core.nth.call(null,vec__6564,(1),null);
var map__6565__$1 = ((((!((map__6565 == null)))?((((map__6565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6565):map__6565);
var ox = cljs.core.get.call(null,map__6565__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__6565__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__6566 = cljs.core.nth.call(null,vec__6564,(2),null);
var map__6566__$1 = ((((!((map__6566 == null)))?((((map__6566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6566):map__6566);
var a = cljs.core.get.call(null,map__6566__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__6566__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__6567 = cljs.core.nth.call(null,vec__6564,(3),null);
var map__6567__$1 = ((((!((map__6567 == null)))?((((map__6567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6567):map__6567);
var b = cljs.core.get.call(null,map__6567__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__6567__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__6564;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_6584 = cljs.core.nth.call(null,surf,(4));
var G__6571_6585 = context;
G__6571_6585.beginPath();

G__6571_6585.moveTo(ox,oy);

G__6571_6585.arc(ox,oy,dist_6584,angle_a,angle_b,false);

G__6571_6585.fill();

} else {
var G__6572_6586 = context;
G__6572_6586.beginPath();

G__6572_6586.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__6572_6586.lineTo(ox,oy);

G__6572_6586.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__6572_6586.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__6572_6586.fill();


var G__6573_6587 = context;
G__6573_6587.beginPath();

G__6573_6587.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__6573_6587.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__6573_6587.stroke();

}

var G__6588 = seq__6560;
var G__6589 = chunk__6561;
var G__6590 = count__6562;
var G__6591 = (i__6563 + (1));
seq__6560 = G__6588;
chunk__6561 = G__6589;
count__6562 = G__6590;
i__6563 = G__6591;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6560);
if(temp__4425__auto__){
var seq__6560__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6560__$1)){
var c__5372__auto__ = cljs.core.chunk_first.call(null,seq__6560__$1);
var G__6592 = cljs.core.chunk_rest.call(null,seq__6560__$1);
var G__6593 = c__5372__auto__;
var G__6594 = cljs.core.count.call(null,c__5372__auto__);
var G__6595 = (0);
seq__6560 = G__6592;
chunk__6561 = G__6593;
count__6562 = G__6594;
i__6563 = G__6595;
continue;
} else {
var vec__6574 = cljs.core.first.call(null,seq__6560__$1);
var t = cljs.core.nth.call(null,vec__6574,(0),null);
var map__6575 = cljs.core.nth.call(null,vec__6574,(1),null);
var map__6575__$1 = ((((!((map__6575 == null)))?((((map__6575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6575):map__6575);
var ox = cljs.core.get.call(null,map__6575__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__6575__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__6576 = cljs.core.nth.call(null,vec__6574,(2),null);
var map__6576__$1 = ((((!((map__6576 == null)))?((((map__6576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6576):map__6576);
var a = cljs.core.get.call(null,map__6576__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__6576__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__6577 = cljs.core.nth.call(null,vec__6574,(3),null);
var map__6577__$1 = ((((!((map__6577 == null)))?((((map__6577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6577):map__6577);
var b = cljs.core.get.call(null,map__6577__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__6577__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__6574;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_6596 = cljs.core.nth.call(null,surf,(4));
var G__6581_6597 = context;
G__6581_6597.beginPath();

G__6581_6597.moveTo(ox,oy);

G__6581_6597.arc(ox,oy,dist_6596,angle_a,angle_b,false);

G__6581_6597.fill();

} else {
var G__6582_6598 = context;
G__6582_6598.beginPath();

G__6582_6598.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__6582_6598.lineTo(ox,oy);

G__6582_6598.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__6582_6598.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__6582_6598.fill();


var G__6583_6599 = context;
G__6583_6599.beginPath();

G__6583_6599.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__6583_6599.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__6583_6599.stroke();

}

var G__6600 = cljs.core.next.call(null,seq__6560__$1);
var G__6601 = null;
var G__6602 = (0);
var G__6603 = (0);
seq__6560 = G__6600;
chunk__6561 = G__6601;
count__6562 = G__6602;
i__6563 = G__6603;
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

var seq__6630 = cljs.core.seq.call(null,data);
var chunk__6632 = null;
var count__6633 = (0);
var i__6634 = (0);
while(true){
if((i__6634 < count__6633)){
var d = cljs.core._nth.call(null,chunk__6632,i__6634);
var map__6636_6656 = cljs.core.first.call(null,d);
var map__6636_6657__$1 = ((((!((map__6636_6656 == null)))?((((map__6636_6656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6636_6656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6636_6656):map__6636_6656);
var ep_6658 = map__6636_6657__$1;
var point_6659 = cljs.core.get.call(null,map__6636_6657__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6659),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6659));

var seq__6638_6660 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__6639_6661 = null;
var count__6640_6662 = (0);
var i__6641_6663 = (0);
while(true){
if((i__6641_6663 < count__6640_6662)){
var map__6642_6664 = cljs.core._nth.call(null,chunk__6639_6661,i__6641_6663);
var map__6642_6665__$1 = ((((!((map__6642_6664 == null)))?((((map__6642_6664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6642_6664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6642_6664):map__6642_6664);
var point_6666__$1 = cljs.core.get.call(null,map__6642_6665__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6666__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6666__$1));

var G__6667 = seq__6638_6660;
var G__6668 = chunk__6639_6661;
var G__6669 = count__6640_6662;
var G__6670 = (i__6641_6663 + (1));
seq__6638_6660 = G__6667;
chunk__6639_6661 = G__6668;
count__6640_6662 = G__6669;
i__6641_6663 = G__6670;
continue;
} else {
var temp__4425__auto___6671 = cljs.core.seq.call(null,seq__6638_6660);
if(temp__4425__auto___6671){
var seq__6638_6672__$1 = temp__4425__auto___6671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6638_6672__$1)){
var c__5372__auto___6673 = cljs.core.chunk_first.call(null,seq__6638_6672__$1);
var G__6674 = cljs.core.chunk_rest.call(null,seq__6638_6672__$1);
var G__6675 = c__5372__auto___6673;
var G__6676 = cljs.core.count.call(null,c__5372__auto___6673);
var G__6677 = (0);
seq__6638_6660 = G__6674;
chunk__6639_6661 = G__6675;
count__6640_6662 = G__6676;
i__6641_6663 = G__6677;
continue;
} else {
var map__6644_6678 = cljs.core.first.call(null,seq__6638_6672__$1);
var map__6644_6679__$1 = ((((!((map__6644_6678 == null)))?((((map__6644_6678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6644_6678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6644_6678):map__6644_6678);
var point_6680__$1 = cljs.core.get.call(null,map__6644_6679__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6680__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6680__$1));

var G__6681 = cljs.core.next.call(null,seq__6638_6672__$1);
var G__6682 = null;
var G__6683 = (0);
var G__6684 = (0);
seq__6638_6660 = G__6681;
chunk__6639_6661 = G__6682;
count__6640_6662 = G__6683;
i__6641_6663 = G__6684;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_6658)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6659),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6659));
} else {
}

context.stroke();

var G__6685 = seq__6630;
var G__6686 = chunk__6632;
var G__6687 = count__6633;
var G__6688 = (i__6634 + (1));
seq__6630 = G__6685;
chunk__6632 = G__6686;
count__6633 = G__6687;
i__6634 = G__6688;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6630);
if(temp__4425__auto__){
var seq__6630__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6630__$1)){
var c__5372__auto__ = cljs.core.chunk_first.call(null,seq__6630__$1);
var G__6689 = cljs.core.chunk_rest.call(null,seq__6630__$1);
var G__6690 = c__5372__auto__;
var G__6691 = cljs.core.count.call(null,c__5372__auto__);
var G__6692 = (0);
seq__6630 = G__6689;
chunk__6632 = G__6690;
count__6633 = G__6691;
i__6634 = G__6692;
continue;
} else {
var d = cljs.core.first.call(null,seq__6630__$1);
var map__6646_6693 = cljs.core.first.call(null,d);
var map__6646_6694__$1 = ((((!((map__6646_6693 == null)))?((((map__6646_6693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6646_6693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6646_6693):map__6646_6693);
var ep_6695 = map__6646_6694__$1;
var point_6696 = cljs.core.get.call(null,map__6646_6694__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6696),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6696));

var seq__6648_6697 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__6649_6698 = null;
var count__6650_6699 = (0);
var i__6651_6700 = (0);
while(true){
if((i__6651_6700 < count__6650_6699)){
var map__6652_6701 = cljs.core._nth.call(null,chunk__6649_6698,i__6651_6700);
var map__6652_6702__$1 = ((((!((map__6652_6701 == null)))?((((map__6652_6701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6652_6701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6652_6701):map__6652_6701);
var point_6703__$1 = cljs.core.get.call(null,map__6652_6702__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6703__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6703__$1));

var G__6704 = seq__6648_6697;
var G__6705 = chunk__6649_6698;
var G__6706 = count__6650_6699;
var G__6707 = (i__6651_6700 + (1));
seq__6648_6697 = G__6704;
chunk__6649_6698 = G__6705;
count__6650_6699 = G__6706;
i__6651_6700 = G__6707;
continue;
} else {
var temp__4425__auto___6708__$1 = cljs.core.seq.call(null,seq__6648_6697);
if(temp__4425__auto___6708__$1){
var seq__6648_6709__$1 = temp__4425__auto___6708__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6648_6709__$1)){
var c__5372__auto___6710 = cljs.core.chunk_first.call(null,seq__6648_6709__$1);
var G__6711 = cljs.core.chunk_rest.call(null,seq__6648_6709__$1);
var G__6712 = c__5372__auto___6710;
var G__6713 = cljs.core.count.call(null,c__5372__auto___6710);
var G__6714 = (0);
seq__6648_6697 = G__6711;
chunk__6649_6698 = G__6712;
count__6650_6699 = G__6713;
i__6651_6700 = G__6714;
continue;
} else {
var map__6654_6715 = cljs.core.first.call(null,seq__6648_6709__$1);
var map__6654_6716__$1 = ((((!((map__6654_6715 == null)))?((((map__6654_6715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6654_6715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6654_6715):map__6654_6715);
var point_6717__$1 = cljs.core.get.call(null,map__6654_6716__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6717__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6717__$1));

var G__6718 = cljs.core.next.call(null,seq__6648_6709__$1);
var G__6719 = null;
var G__6720 = (0);
var G__6721 = (0);
seq__6648_6697 = G__6718;
chunk__6649_6698 = G__6719;
count__6650_6699 = G__6720;
i__6651_6700 = G__6721;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_6695)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_6696),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_6696));
} else {
}

context.stroke();

var G__6722 = cljs.core.next.call(null,seq__6630__$1);
var G__6723 = null;
var G__6724 = (0);
var G__6725 = (0);
seq__6630 = G__6722;
chunk__6632 = G__6723;
count__6633 = G__6724;
i__6634 = G__6725;
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
var seq__6734 = cljs.core.seq.call(null,pts);
var chunk__6735 = null;
var count__6736 = (0);
var i__6737 = (0);
while(true){
if((i__6737 < count__6736)){
var map__6738 = cljs.core._nth.call(null,chunk__6735,i__6737);
var map__6738__$1 = ((((!((map__6738 == null)))?((((map__6738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6738):map__6738);
var p = cljs.core.get.call(null,map__6738__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var r = cljs.core.get.call(null,map__6738__$1,new cljs.core.Keyword(null,"role","role",-736691072));
cljs_intro.draw.draw_point.call(null,context,p,cljs.core.get.call(null,cljs_intro.draw.role_to_color_map,r,"white"));

var G__6742 = seq__6734;
var G__6743 = chunk__6735;
var G__6744 = count__6736;
var G__6745 = (i__6737 + (1));
seq__6734 = G__6742;
chunk__6735 = G__6743;
count__6736 = G__6744;
i__6737 = G__6745;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6734);
if(temp__4425__auto__){
var seq__6734__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6734__$1)){
var c__5372__auto__ = cljs.core.chunk_first.call(null,seq__6734__$1);
var G__6746 = cljs.core.chunk_rest.call(null,seq__6734__$1);
var G__6747 = c__5372__auto__;
var G__6748 = cljs.core.count.call(null,c__5372__auto__);
var G__6749 = (0);
seq__6734 = G__6746;
chunk__6735 = G__6747;
count__6736 = G__6748;
i__6737 = G__6749;
continue;
} else {
var map__6740 = cljs.core.first.call(null,seq__6734__$1);
var map__6740__$1 = ((((!((map__6740 == null)))?((((map__6740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6740):map__6740);
var p = cljs.core.get.call(null,map__6740__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var r = cljs.core.get.call(null,map__6740__$1,new cljs.core.Keyword(null,"role","role",-736691072));
cljs_intro.draw.draw_point.call(null,context,p,cljs.core.get.call(null,cljs_intro.draw.role_to_color_map,r,"white"));

var G__6750 = cljs.core.next.call(null,seq__6734__$1);
var G__6751 = null;
var G__6752 = (0);
var G__6753 = (0);
seq__6734 = G__6750;
chunk__6735 = G__6751;
count__6736 = G__6752;
i__6737 = G__6753;
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
var seq__6768 = cljs.core.seq.call(null,eps);
var chunk__6769 = null;
var count__6770 = (0);
var i__6771 = (0);
while(true){
if((i__6771 < count__6770)){
var map__6772 = cljs.core._nth.call(null,chunk__6769,i__6771);
var map__6772__$1 = ((((!((map__6772 == null)))?((((map__6772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6772):map__6772);
var map__6773 = cljs.core.get.call(null,map__6772__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__6773__$1 = ((((!((map__6773 == null)))?((((map__6773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6773):map__6773);
var x = cljs.core.get.call(null,map__6773__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__6773__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__6776_6782 = context;
G__6776_6782.beginPath();

G__6776_6782.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__6776_6782.fill();


var G__6783 = seq__6768;
var G__6784 = chunk__6769;
var G__6785 = count__6770;
var G__6786 = (i__6771 + (1));
seq__6768 = G__6783;
chunk__6769 = G__6784;
count__6770 = G__6785;
i__6771 = G__6786;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6768);
if(temp__4425__auto__){
var seq__6768__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6768__$1)){
var c__5372__auto__ = cljs.core.chunk_first.call(null,seq__6768__$1);
var G__6787 = cljs.core.chunk_rest.call(null,seq__6768__$1);
var G__6788 = c__5372__auto__;
var G__6789 = cljs.core.count.call(null,c__5372__auto__);
var G__6790 = (0);
seq__6768 = G__6787;
chunk__6769 = G__6788;
count__6770 = G__6789;
i__6771 = G__6790;
continue;
} else {
var map__6777 = cljs.core.first.call(null,seq__6768__$1);
var map__6777__$1 = ((((!((map__6777 == null)))?((((map__6777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6777):map__6777);
var map__6778 = cljs.core.get.call(null,map__6777__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__6778__$1 = ((((!((map__6778 == null)))?((((map__6778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6778):map__6778);
var x = cljs.core.get.call(null,map__6778__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__6778__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__6781_6791 = context;
G__6781_6791.beginPath();

G__6781_6791.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__6781_6791.fill();


var G__6792 = cljs.core.next.call(null,seq__6768__$1);
var G__6793 = null;
var G__6794 = (0);
var G__6795 = (0);
seq__6768 = G__6792;
chunk__6769 = G__6793;
count__6770 = G__6794;
i__6771 = G__6795;
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

var seq__6814 = cljs.core.seq.call(null,segments);
var chunk__6815 = null;
var count__6816 = (0);
var i__6817 = (0);
while(true){
if((i__6817 < count__6816)){
var map__6818 = cljs.core._nth.call(null,chunk__6815,i__6817);
var map__6818__$1 = ((((!((map__6818 == null)))?((((map__6818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6818):map__6818);
var map__6819 = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__6819__$1 = ((((!((map__6819 == null)))?((((map__6819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6819):map__6819);
var x1 = cljs.core.get.call(null,map__6819__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__6819__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__6820 = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__6820__$1 = ((((!((map__6820 == null)))?((((map__6820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6820):map__6820);
var x2 = cljs.core.get.call(null,map__6820__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__6820__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__6824_6832 = context;
G__6824_6832.beginPath();

G__6824_6832.moveTo(x1,y1);

G__6824_6832.lineTo(x2,y2);

G__6824_6832.stroke();


var G__6833 = seq__6814;
var G__6834 = chunk__6815;
var G__6835 = count__6816;
var G__6836 = (i__6817 + (1));
seq__6814 = G__6833;
chunk__6815 = G__6834;
count__6816 = G__6835;
i__6817 = G__6836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6814);
if(temp__4425__auto__){
var seq__6814__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6814__$1)){
var c__5372__auto__ = cljs.core.chunk_first.call(null,seq__6814__$1);
var G__6837 = cljs.core.chunk_rest.call(null,seq__6814__$1);
var G__6838 = c__5372__auto__;
var G__6839 = cljs.core.count.call(null,c__5372__auto__);
var G__6840 = (0);
seq__6814 = G__6837;
chunk__6815 = G__6838;
count__6816 = G__6839;
i__6817 = G__6840;
continue;
} else {
var map__6825 = cljs.core.first.call(null,seq__6814__$1);
var map__6825__$1 = ((((!((map__6825 == null)))?((((map__6825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6825):map__6825);
var map__6826 = cljs.core.get.call(null,map__6825__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__6826__$1 = ((((!((map__6826 == null)))?((((map__6826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6826):map__6826);
var x1 = cljs.core.get.call(null,map__6826__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__6826__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__6827 = cljs.core.get.call(null,map__6825__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__6827__$1 = ((((!((map__6827 == null)))?((((map__6827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6827):map__6827);
var x2 = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__6831_6841 = context;
G__6831_6841.beginPath();

G__6831_6841.moveTo(x1,y1);

G__6831_6841.lineTo(x2,y2);

G__6831_6841.stroke();


var G__6842 = cljs.core.next.call(null,seq__6814__$1);
var G__6843 = null;
var G__6844 = (0);
var G__6845 = (0);
seq__6814 = G__6842;
chunk__6815 = G__6843;
count__6816 = G__6844;
i__6817 = G__6845;
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

var G__6847 = context;
G__6847.beginPath();

G__6847.arc(ox,oy,dist,(0),((2) * Math.PI),false);

G__6847.stroke();

return G__6847;
});
cljs_intro.draw.draw_pie = (function cljs_intro$draw$draw_pie(context,ox,oy,dist,alpha,beta){
context.strokeStyle = "green";

context.lineWidth = (2);

var G__6849 = context;
G__6849.beginPath();

G__6849.moveTo(ox,oy);

G__6849.arc(ox,oy,dist,alpha,beta,false);

G__6849.lineTo(ox,oy);

G__6849.stroke();

return G__6849;
});

//# sourceMappingURL=draw.js.map