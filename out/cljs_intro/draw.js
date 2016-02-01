// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.draw');
goog.require('cljs.core');
goog.require('cljs_intro.g2d');
goog.require('cljs_intro.core');
cljs_intro.draw.draw_point = (function cljs_intro$draw$draw_point(context,p__27578,color){
var map__27582 = p__27578;
var map__27582__$1 = ((((!((map__27582 == null)))?((((map__27582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27582):map__27582);
var x = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = color;

var G__27584 = context;
G__27584.beginPath();

G__27584.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__27584.fill();

return G__27584;
});
cljs_intro.draw.draw_rect = (function cljs_intro$draw$draw_rect(context,x,y,w,h,color){
context.fillStyle = color;

return context.fillRect(x,y,w,h);
});
cljs_intro.draw.draw_hull_as_surfaces = (function cljs_intro$draw$draw_hull_as_surfaces(context,surfaces){
context.fillStyle = "yellow";

context.strokeStyle = "red";

context.lineWidth = (2);

var seq__27609 = cljs.core.seq.call(null,surfaces);
var chunk__27610 = null;
var count__27611 = (0);
var i__27612 = (0);
while(true){
if((i__27612 < count__27611)){
var vec__27613 = cljs.core._nth.call(null,chunk__27610,i__27612);
var t = cljs.core.nth.call(null,vec__27613,(0),null);
var map__27614 = cljs.core.nth.call(null,vec__27613,(1),null);
var map__27614__$1 = ((((!((map__27614 == null)))?((((map__27614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27614):map__27614);
var ox = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27615 = cljs.core.nth.call(null,vec__27613,(2),null);
var map__27615__$1 = ((((!((map__27615 == null)))?((((map__27615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27615):map__27615);
var a = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__27616 = cljs.core.nth.call(null,vec__27613,(3),null);
var map__27616__$1 = ((((!((map__27616 == null)))?((((map__27616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27616):map__27616);
var b = cljs.core.get.call(null,map__27616__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__27616__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__27613;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_27633 = cljs.core.nth.call(null,surf,(4));
var G__27620_27634 = context;
G__27620_27634.beginPath();

G__27620_27634.moveTo(ox,oy);

G__27620_27634.arc(ox,oy,dist_27633,angle_a,angle_b,false);

G__27620_27634.fill();

} else {
var G__27621_27635 = context;
G__27621_27635.beginPath();

G__27621_27635.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__27621_27635.lineTo(ox,oy);

G__27621_27635.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__27621_27635.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__27621_27635.fill();


var G__27622_27636 = context;
G__27622_27636.beginPath();

G__27622_27636.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__27622_27636.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__27622_27636.stroke();

}

var G__27637 = seq__27609;
var G__27638 = chunk__27610;
var G__27639 = count__27611;
var G__27640 = (i__27612 + (1));
seq__27609 = G__27637;
chunk__27610 = G__27638;
count__27611 = G__27639;
i__27612 = G__27640;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27609);
if(temp__4425__auto__){
var seq__27609__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27609__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__27609__$1);
var G__27641 = cljs.core.chunk_rest.call(null,seq__27609__$1);
var G__27642 = c__17147__auto__;
var G__27643 = cljs.core.count.call(null,c__17147__auto__);
var G__27644 = (0);
seq__27609 = G__27641;
chunk__27610 = G__27642;
count__27611 = G__27643;
i__27612 = G__27644;
continue;
} else {
var vec__27623 = cljs.core.first.call(null,seq__27609__$1);
var t = cljs.core.nth.call(null,vec__27623,(0),null);
var map__27624 = cljs.core.nth.call(null,vec__27623,(1),null);
var map__27624__$1 = ((((!((map__27624 == null)))?((((map__27624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27624):map__27624);
var ox = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27625 = cljs.core.nth.call(null,vec__27623,(2),null);
var map__27625__$1 = ((((!((map__27625 == null)))?((((map__27625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27625):map__27625);
var a = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_a = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__27626 = cljs.core.nth.call(null,vec__27623,(3),null);
var map__27626__$1 = ((((!((map__27626 == null)))?((((map__27626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27626):map__27626);
var b = cljs.core.get.call(null,map__27626__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle_b = cljs.core.get.call(null,map__27626__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var surf = vec__27623;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arc","arc",252411045),t)){
var dist_27645 = cljs.core.nth.call(null,surf,(4));
var G__27630_27646 = context;
G__27630_27646.beginPath();

G__27630_27646.moveTo(ox,oy);

G__27630_27646.arc(ox,oy,dist_27645,angle_a,angle_b,false);

G__27630_27646.fill();

} else {
var G__27631_27647 = context;
G__27631_27647.beginPath();

G__27631_27647.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__27631_27647.lineTo(ox,oy);

G__27631_27647.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__27631_27647.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__27631_27647.fill();


var G__27632_27648 = context;
G__27632_27648.beginPath();

G__27632_27648.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));

G__27632_27648.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));

G__27632_27648.stroke();

}

var G__27649 = cljs.core.next.call(null,seq__27609__$1);
var G__27650 = null;
var G__27651 = (0);
var G__27652 = (0);
seq__27609 = G__27649;
chunk__27610 = G__27650;
count__27611 = G__27651;
i__27612 = G__27652;
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

var seq__27679 = cljs.core.seq.call(null,data);
var chunk__27681 = null;
var count__27682 = (0);
var i__27683 = (0);
while(true){
if((i__27683 < count__27682)){
var d = cljs.core._nth.call(null,chunk__27681,i__27683);
var map__27685_27705 = cljs.core.first.call(null,d);
var map__27685_27706__$1 = ((((!((map__27685_27705 == null)))?((((map__27685_27705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27685_27705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27685_27705):map__27685_27705);
var ep_27707 = map__27685_27706__$1;
var point_27708 = cljs.core.get.call(null,map__27685_27706__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27708),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27708));

var seq__27687_27709 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__27688_27710 = null;
var count__27689_27711 = (0);
var i__27690_27712 = (0);
while(true){
if((i__27690_27712 < count__27689_27711)){
var map__27691_27713 = cljs.core._nth.call(null,chunk__27688_27710,i__27690_27712);
var map__27691_27714__$1 = ((((!((map__27691_27713 == null)))?((((map__27691_27713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27691_27713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27691_27713):map__27691_27713);
var point_27715__$1 = cljs.core.get.call(null,map__27691_27714__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27715__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27715__$1));

var G__27716 = seq__27687_27709;
var G__27717 = chunk__27688_27710;
var G__27718 = count__27689_27711;
var G__27719 = (i__27690_27712 + (1));
seq__27687_27709 = G__27716;
chunk__27688_27710 = G__27717;
count__27689_27711 = G__27718;
i__27690_27712 = G__27719;
continue;
} else {
var temp__4425__auto___27720 = cljs.core.seq.call(null,seq__27687_27709);
if(temp__4425__auto___27720){
var seq__27687_27721__$1 = temp__4425__auto___27720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27687_27721__$1)){
var c__17147__auto___27722 = cljs.core.chunk_first.call(null,seq__27687_27721__$1);
var G__27723 = cljs.core.chunk_rest.call(null,seq__27687_27721__$1);
var G__27724 = c__17147__auto___27722;
var G__27725 = cljs.core.count.call(null,c__17147__auto___27722);
var G__27726 = (0);
seq__27687_27709 = G__27723;
chunk__27688_27710 = G__27724;
count__27689_27711 = G__27725;
i__27690_27712 = G__27726;
continue;
} else {
var map__27693_27727 = cljs.core.first.call(null,seq__27687_27721__$1);
var map__27693_27728__$1 = ((((!((map__27693_27727 == null)))?((((map__27693_27727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27693_27727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27693_27727):map__27693_27727);
var point_27729__$1 = cljs.core.get.call(null,map__27693_27728__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27729__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27729__$1));

var G__27730 = cljs.core.next.call(null,seq__27687_27721__$1);
var G__27731 = null;
var G__27732 = (0);
var G__27733 = (0);
seq__27687_27709 = G__27730;
chunk__27688_27710 = G__27731;
count__27689_27711 = G__27732;
i__27690_27712 = G__27733;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_27707)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27708),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27708));
} else {
}

context.stroke();

var G__27734 = seq__27679;
var G__27735 = chunk__27681;
var G__27736 = count__27682;
var G__27737 = (i__27683 + (1));
seq__27679 = G__27734;
chunk__27681 = G__27735;
count__27682 = G__27736;
i__27683 = G__27737;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27679);
if(temp__4425__auto__){
var seq__27679__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27679__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__27679__$1);
var G__27738 = cljs.core.chunk_rest.call(null,seq__27679__$1);
var G__27739 = c__17147__auto__;
var G__27740 = cljs.core.count.call(null,c__17147__auto__);
var G__27741 = (0);
seq__27679 = G__27738;
chunk__27681 = G__27739;
count__27682 = G__27740;
i__27683 = G__27741;
continue;
} else {
var d = cljs.core.first.call(null,seq__27679__$1);
var map__27695_27742 = cljs.core.first.call(null,d);
var map__27695_27743__$1 = ((((!((map__27695_27742 == null)))?((((map__27695_27742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27695_27742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27695_27742):map__27695_27742);
var ep_27744 = map__27695_27743__$1;
var point_27745 = cljs.core.get.call(null,map__27695_27743__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.beginPath();

context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27745),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27745));

var seq__27697_27746 = cljs.core.seq.call(null,cljs.core.rest.call(null,d));
var chunk__27698_27747 = null;
var count__27699_27748 = (0);
var i__27700_27749 = (0);
while(true){
if((i__27700_27749 < count__27699_27748)){
var map__27701_27750 = cljs.core._nth.call(null,chunk__27698_27747,i__27700_27749);
var map__27701_27751__$1 = ((((!((map__27701_27750 == null)))?((((map__27701_27750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27701_27750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27701_27750):map__27701_27750);
var point_27752__$1 = cljs.core.get.call(null,map__27701_27751__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27752__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27752__$1));

var G__27753 = seq__27697_27746;
var G__27754 = chunk__27698_27747;
var G__27755 = count__27699_27748;
var G__27756 = (i__27700_27749 + (1));
seq__27697_27746 = G__27753;
chunk__27698_27747 = G__27754;
count__27699_27748 = G__27755;
i__27700_27749 = G__27756;
continue;
} else {
var temp__4425__auto___27757__$1 = cljs.core.seq.call(null,seq__27697_27746);
if(temp__4425__auto___27757__$1){
var seq__27697_27758__$1 = temp__4425__auto___27757__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27697_27758__$1)){
var c__17147__auto___27759 = cljs.core.chunk_first.call(null,seq__27697_27758__$1);
var G__27760 = cljs.core.chunk_rest.call(null,seq__27697_27758__$1);
var G__27761 = c__17147__auto___27759;
var G__27762 = cljs.core.count.call(null,c__17147__auto___27759);
var G__27763 = (0);
seq__27697_27746 = G__27760;
chunk__27698_27747 = G__27761;
count__27699_27748 = G__27762;
i__27700_27749 = G__27763;
continue;
} else {
var map__27703_27764 = cljs.core.first.call(null,seq__27697_27758__$1);
var map__27703_27765__$1 = ((((!((map__27703_27764 == null)))?((((map__27703_27764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27703_27764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27703_27764):map__27703_27764);
var point_27766__$1 = cljs.core.get.call(null,map__27703_27765__$1,new cljs.core.Keyword(null,"point","point",1813198264));
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27766__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27766__$1));

var G__27767 = cljs.core.next.call(null,seq__27697_27758__$1);
var G__27768 = null;
var G__27769 = (0);
var G__27770 = (0);
seq__27697_27746 = G__27767;
chunk__27698_27747 = G__27768;
count__27699_27748 = G__27769;
i__27700_27749 = G__27770;
continue;
}
} else {
}
}
break;
}

if((cljs.core.count.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(ep_27744)) > (1))){
context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point_27745),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point_27745));
} else {
}

context.stroke();

var G__27771 = cljs.core.next.call(null,seq__27679__$1);
var G__27772 = null;
var G__27773 = (0);
var G__27774 = (0);
seq__27679 = G__27771;
chunk__27681 = G__27772;
count__27682 = G__27773;
i__27683 = G__27774;
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
var seq__27783 = cljs.core.seq.call(null,pts);
var chunk__27784 = null;
var count__27785 = (0);
var i__27786 = (0);
while(true){
if((i__27786 < count__27785)){
var map__27787 = cljs.core._nth.call(null,chunk__27784,i__27786);
var map__27787__$1 = ((((!((map__27787 == null)))?((((map__27787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27787):map__27787);
var p = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var r = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"role","role",-736691072));
cljs_intro.draw.draw_point.call(null,context,p,cljs.core.get.call(null,cljs_intro.draw.role_to_color_map,r,"white"));

var G__27791 = seq__27783;
var G__27792 = chunk__27784;
var G__27793 = count__27785;
var G__27794 = (i__27786 + (1));
seq__27783 = G__27791;
chunk__27784 = G__27792;
count__27785 = G__27793;
i__27786 = G__27794;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27783);
if(temp__4425__auto__){
var seq__27783__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27783__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__27783__$1);
var G__27795 = cljs.core.chunk_rest.call(null,seq__27783__$1);
var G__27796 = c__17147__auto__;
var G__27797 = cljs.core.count.call(null,c__17147__auto__);
var G__27798 = (0);
seq__27783 = G__27795;
chunk__27784 = G__27796;
count__27785 = G__27797;
i__27786 = G__27798;
continue;
} else {
var map__27789 = cljs.core.first.call(null,seq__27783__$1);
var map__27789__$1 = ((((!((map__27789 == null)))?((((map__27789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27789):map__27789);
var p = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var r = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"role","role",-736691072));
cljs_intro.draw.draw_point.call(null,context,p,cljs.core.get.call(null,cljs_intro.draw.role_to_color_map,r,"white"));

var G__27799 = cljs.core.next.call(null,seq__27783__$1);
var G__27800 = null;
var G__27801 = (0);
var G__27802 = (0);
seq__27783 = G__27799;
chunk__27784 = G__27800;
count__27785 = G__27801;
i__27786 = G__27802;
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
var seq__27817 = cljs.core.seq.call(null,eps);
var chunk__27818 = null;
var count__27819 = (0);
var i__27820 = (0);
while(true){
if((i__27820 < count__27819)){
var map__27821 = cljs.core._nth.call(null,chunk__27818,i__27820);
var map__27821__$1 = ((((!((map__27821 == null)))?((((map__27821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27821):map__27821);
var map__27822 = cljs.core.get.call(null,map__27821__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__27822__$1 = ((((!((map__27822 == null)))?((((map__27822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27822):map__27822);
var x = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__27825_27831 = context;
G__27825_27831.beginPath();

G__27825_27831.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__27825_27831.fill();


var G__27832 = seq__27817;
var G__27833 = chunk__27818;
var G__27834 = count__27819;
var G__27835 = (i__27820 + (1));
seq__27817 = G__27832;
chunk__27818 = G__27833;
count__27819 = G__27834;
i__27820 = G__27835;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27817);
if(temp__4425__auto__){
var seq__27817__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27817__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__27817__$1);
var G__27836 = cljs.core.chunk_rest.call(null,seq__27817__$1);
var G__27837 = c__17147__auto__;
var G__27838 = cljs.core.count.call(null,c__17147__auto__);
var G__27839 = (0);
seq__27817 = G__27836;
chunk__27818 = G__27837;
count__27819 = G__27838;
i__27820 = G__27839;
continue;
} else {
var map__27826 = cljs.core.first.call(null,seq__27817__$1);
var map__27826__$1 = ((((!((map__27826 == null)))?((((map__27826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27826):map__27826);
var map__27827 = cljs.core.get.call(null,map__27826__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var map__27827__$1 = ((((!((map__27827 == null)))?((((map__27827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27827):map__27827);
var x = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.fillStyle = "red";

var G__27830_27840 = context;
G__27830_27840.beginPath();

G__27830_27840.arc(x,y,(5),(0),(2.0 * Math.PI),false);

G__27830_27840.fill();


var G__27841 = cljs.core.next.call(null,seq__27817__$1);
var G__27842 = null;
var G__27843 = (0);
var G__27844 = (0);
seq__27817 = G__27841;
chunk__27818 = G__27842;
count__27819 = G__27843;
i__27820 = G__27844;
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

var seq__27863 = cljs.core.seq.call(null,segments);
var chunk__27864 = null;
var count__27865 = (0);
var i__27866 = (0);
while(true){
if((i__27866 < count__27865)){
var map__27867 = cljs.core._nth.call(null,chunk__27864,i__27866);
var map__27867__$1 = ((((!((map__27867 == null)))?((((map__27867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27867):map__27867);
var map__27868 = cljs.core.get.call(null,map__27867__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__27868__$1 = ((((!((map__27868 == null)))?((((map__27868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27868):map__27868);
var x1 = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27869 = cljs.core.get.call(null,map__27867__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__27869__$1 = ((((!((map__27869 == null)))?((((map__27869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27869):map__27869);
var x2 = cljs.core.get.call(null,map__27869__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__27869__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__27873_27881 = context;
G__27873_27881.beginPath();

G__27873_27881.moveTo(x1,y1);

G__27873_27881.lineTo(x2,y2);

G__27873_27881.stroke();


var G__27882 = seq__27863;
var G__27883 = chunk__27864;
var G__27884 = count__27865;
var G__27885 = (i__27866 + (1));
seq__27863 = G__27882;
chunk__27864 = G__27883;
count__27865 = G__27884;
i__27866 = G__27885;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27863);
if(temp__4425__auto__){
var seq__27863__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27863__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__27863__$1);
var G__27886 = cljs.core.chunk_rest.call(null,seq__27863__$1);
var G__27887 = c__17147__auto__;
var G__27888 = cljs.core.count.call(null,c__17147__auto__);
var G__27889 = (0);
seq__27863 = G__27886;
chunk__27864 = G__27887;
count__27865 = G__27888;
i__27866 = G__27889;
continue;
} else {
var map__27874 = cljs.core.first.call(null,seq__27863__$1);
var map__27874__$1 = ((((!((map__27874 == null)))?((((map__27874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27874):map__27874);
var map__27875 = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var map__27875__$1 = ((((!((map__27875 == null)))?((((map__27875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27875):map__27875);
var x1 = cljs.core.get.call(null,map__27875__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__27875__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27876 = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var map__27876__$1 = ((((!((map__27876 == null)))?((((map__27876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27876):map__27876);
var x2 = cljs.core.get.call(null,map__27876__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__27876__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__27880_27890 = context;
G__27880_27890.beginPath();

G__27880_27890.moveTo(x1,y1);

G__27880_27890.lineTo(x2,y2);

G__27880_27890.stroke();


var G__27891 = cljs.core.next.call(null,seq__27863__$1);
var G__27892 = null;
var G__27893 = (0);
var G__27894 = (0);
seq__27863 = G__27891;
chunk__27864 = G__27892;
count__27865 = G__27893;
i__27866 = G__27894;
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

var G__27896 = context;
G__27896.beginPath();

G__27896.arc(ox,oy,dist,(0),((2) * Math.PI),false);

G__27896.stroke();

return G__27896;
});
cljs_intro.draw.draw_pie = (function cljs_intro$draw$draw_pie(context,ox,oy,dist,alpha,beta){
context.strokeStyle = "green";

context.lineWidth = (2);

var G__27898 = context;
G__27898.beginPath();

G__27898.moveTo(ox,oy);

G__27898.arc(ox,oy,dist,alpha,beta,false);

G__27898.lineTo(ox,oy);

G__27898.stroke();

return G__27898;
});

//# sourceMappingURL=draw.js.map