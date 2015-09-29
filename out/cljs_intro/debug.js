// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs_intro.debug');
goog.require('cljs.core');
goog.require('clojure.string');
cljs_intro.debug.print = (function cljs_intro$debug$print(){
var argseq__17183__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljs_intro.debug.print.cljs$core$IFn$_invoke$arity$variadic(argseq__17183__auto__);
});

cljs_intro.debug.print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(clojure.string.join.call(null,args));
});

cljs_intro.debug.print.cljs$lang$maxFixedArity = (0);

cljs_intro.debug.print.cljs$lang$applyTo = (function (seq22621){
return cljs_intro.debug.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22621));
});
cljs_intro.debug.dump_endpoints = (function cljs_intro$debug$dump_endpoints(s){
var seq__22628 = cljs.core.seq.call(null,s);
var chunk__22629 = null;
var count__22630 = (0);
var i__22631 = (0);
while(true){
if((i__22631 < count__22630)){
var map__22632 = cljs.core._nth.call(null,chunk__22629,i__22631);
var map__22632__$1 = ((cljs.core.seq_QMARK_.call(null,map__22632))?cljs.core.apply.call(null,cljs.core.hash_map,map__22632):map__22632);
var point = cljs.core.get.call(null,map__22632__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__22632__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
cljs_intro.debug.print.call(null,"| a: ",angle," p: ",point);

var G__22634 = seq__22628;
var G__22635 = chunk__22629;
var G__22636 = count__22630;
var G__22637 = (i__22631 + (1));
seq__22628 = G__22634;
chunk__22629 = G__22635;
count__22630 = G__22636;
i__22631 = G__22637;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22628);
if(temp__4126__auto__){
var seq__22628__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22628__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__22628__$1);
var G__22638 = cljs.core.chunk_rest.call(null,seq__22628__$1);
var G__22639 = c__16928__auto__;
var G__22640 = cljs.core.count.call(null,c__16928__auto__);
var G__22641 = (0);
seq__22628 = G__22638;
chunk__22629 = G__22639;
count__22630 = G__22640;
i__22631 = G__22641;
continue;
} else {
var map__22633 = cljs.core.first.call(null,seq__22628__$1);
var map__22633__$1 = ((cljs.core.seq_QMARK_.call(null,map__22633))?cljs.core.apply.call(null,cljs.core.hash_map,map__22633):map__22633);
var point = cljs.core.get.call(null,map__22633__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__22633__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
cljs_intro.debug.print.call(null,"| a: ",angle," p: ",point);

var G__22642 = cljs.core.next.call(null,seq__22628__$1);
var G__22643 = null;
var G__22644 = (0);
var G__22645 = (0);
seq__22628 = G__22642;
chunk__22629 = G__22643;
count__22630 = G__22644;
i__22631 = G__22645;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_intro.debug.dump_angle_sorted_endpoints = (function cljs_intro$debug$dump_angle_sorted_endpoints(s){
var seq__22652_22658 = cljs.core.seq.call(null,s);
var chunk__22653_22659 = null;
var count__22654_22660 = (0);
var i__22655_22661 = (0);
while(true){
if((i__22655_22661 < count__22654_22660)){
var vec__22656_22662 = cljs.core._nth.call(null,chunk__22653_22659,i__22655_22661);
var a_22663 = cljs.core.nth.call(null,vec__22656_22662,(0),null);
var eps_22664 = cljs.core.nth.call(null,vec__22656_22662,(1),null);
cljs_intro.debug.print.call(null,"* angle [",a_22663,"]");

cljs_intro.debug.dump_endpoints.call(null,eps_22664);

var G__22665 = seq__22652_22658;
var G__22666 = chunk__22653_22659;
var G__22667 = count__22654_22660;
var G__22668 = (i__22655_22661 + (1));
seq__22652_22658 = G__22665;
chunk__22653_22659 = G__22666;
count__22654_22660 = G__22667;
i__22655_22661 = G__22668;
continue;
} else {
var temp__4126__auto___22669 = cljs.core.seq.call(null,seq__22652_22658);
if(temp__4126__auto___22669){
var seq__22652_22670__$1 = temp__4126__auto___22669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22652_22670__$1)){
var c__16928__auto___22671 = cljs.core.chunk_first.call(null,seq__22652_22670__$1);
var G__22672 = cljs.core.chunk_rest.call(null,seq__22652_22670__$1);
var G__22673 = c__16928__auto___22671;
var G__22674 = cljs.core.count.call(null,c__16928__auto___22671);
var G__22675 = (0);
seq__22652_22658 = G__22672;
chunk__22653_22659 = G__22673;
count__22654_22660 = G__22674;
i__22655_22661 = G__22675;
continue;
} else {
var vec__22657_22676 = cljs.core.first.call(null,seq__22652_22670__$1);
var a_22677 = cljs.core.nth.call(null,vec__22657_22676,(0),null);
var eps_22678 = cljs.core.nth.call(null,vec__22657_22676,(1),null);
cljs_intro.debug.print.call(null,"* angle [",a_22677,"]");

cljs_intro.debug.dump_endpoints.call(null,eps_22678);

var G__22679 = cljs.core.next.call(null,seq__22652_22670__$1);
var G__22680 = null;
var G__22681 = (0);
var G__22682 = (0);
seq__22652_22658 = G__22679;
chunk__22653_22659 = G__22680;
count__22654_22660 = G__22681;
i__22655_22661 = G__22682;
continue;
}
} else {
}
}
break;
}

return s;
});
cljs_intro.debug.dump_vertex = (function cljs_intro$debug$dump_vertex(v){
return cljs_intro.debug.print.call(null,"| p: ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(v)," g: ",new cljs.core.Keyword(null,"geom","geom",1207084371).cljs$core$IFn$_invoke$arity$1(v)," r: ",new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(v)," a: ",new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(v));
});
cljs_intro.debug.dump_vertices = (function cljs_intro$debug$dump_vertices(vs){
var seq__22687_22691 = cljs.core.seq.call(null,vs);
var chunk__22688_22692 = null;
var count__22689_22693 = (0);
var i__22690_22694 = (0);
while(true){
if((i__22690_22694 < count__22689_22693)){
var v_22695 = cljs.core._nth.call(null,chunk__22688_22692,i__22690_22694);
cljs_intro.debug.dump_vertex.call(null,v_22695);

var G__22696 = seq__22687_22691;
var G__22697 = chunk__22688_22692;
var G__22698 = count__22689_22693;
var G__22699 = (i__22690_22694 + (1));
seq__22687_22691 = G__22696;
chunk__22688_22692 = G__22697;
count__22689_22693 = G__22698;
i__22690_22694 = G__22699;
continue;
} else {
var temp__4126__auto___22700 = cljs.core.seq.call(null,seq__22687_22691);
if(temp__4126__auto___22700){
var seq__22687_22701__$1 = temp__4126__auto___22700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22687_22701__$1)){
var c__16928__auto___22702 = cljs.core.chunk_first.call(null,seq__22687_22701__$1);
var G__22703 = cljs.core.chunk_rest.call(null,seq__22687_22701__$1);
var G__22704 = c__16928__auto___22702;
var G__22705 = cljs.core.count.call(null,c__16928__auto___22702);
var G__22706 = (0);
seq__22687_22691 = G__22703;
chunk__22688_22692 = G__22704;
count__22689_22693 = G__22705;
i__22690_22694 = G__22706;
continue;
} else {
var v_22707 = cljs.core.first.call(null,seq__22687_22701__$1);
cljs_intro.debug.dump_vertex.call(null,v_22707);

var G__22708 = cljs.core.next.call(null,seq__22687_22701__$1);
var G__22709 = null;
var G__22710 = (0);
var G__22711 = (0);
seq__22687_22691 = G__22708;
chunk__22688_22692 = G__22709;
count__22689_22693 = G__22710;
i__22690_22694 = G__22711;
continue;
}
} else {
}
}
break;
}

return vs;
});
cljs_intro.debug.dump_surface = (function cljs_intro$debug$dump_surface(p__22712){
var vec__22716 = p__22712;
var kind = cljs.core.nth.call(null,vec__22716,(0),null);
var s = vec__22716;
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"arc","arc",252411045))){
var vec__22717 = s;
var arc = cljs.core.nth.call(null,vec__22717,(0),null);
var o = cljs.core.nth.call(null,vec__22717,(1),null);
var epa = cljs.core.nth.call(null,vec__22717,(2),null);
var epb = cljs.core.nth.call(null,vec__22717,(3),null);
var dist = cljs.core.nth.call(null,vec__22717,(4),null);
return cljs_intro.debug.print.call(null,"| kind: ",kind," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epa)," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epb)," ",dist);
} else {
var vec__22718 = s;
var triangle = cljs.core.nth.call(null,vec__22718,(0),null);
var o = cljs.core.nth.call(null,vec__22718,(1),null);
var epa = cljs.core.nth.call(null,vec__22718,(2),null);
var epb = cljs.core.nth.call(null,vec__22718,(3),null);
return cljs_intro.debug.print.call(null,"| kind: ",kind," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epa)," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epb));
}
});
cljs_intro.debug.dump_surfaces = (function cljs_intro$debug$dump_surfaces(surfs){
var seq__22723_22727 = cljs.core.seq.call(null,surfs);
var chunk__22724_22728 = null;
var count__22725_22729 = (0);
var i__22726_22730 = (0);
while(true){
if((i__22726_22730 < count__22725_22729)){
var s_22731 = cljs.core._nth.call(null,chunk__22724_22728,i__22726_22730);
cljs_intro.debug.dump_surface.call(null,s_22731);

var G__22732 = seq__22723_22727;
var G__22733 = chunk__22724_22728;
var G__22734 = count__22725_22729;
var G__22735 = (i__22726_22730 + (1));
seq__22723_22727 = G__22732;
chunk__22724_22728 = G__22733;
count__22725_22729 = G__22734;
i__22726_22730 = G__22735;
continue;
} else {
var temp__4126__auto___22736 = cljs.core.seq.call(null,seq__22723_22727);
if(temp__4126__auto___22736){
var seq__22723_22737__$1 = temp__4126__auto___22736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22723_22737__$1)){
var c__16928__auto___22738 = cljs.core.chunk_first.call(null,seq__22723_22737__$1);
var G__22739 = cljs.core.chunk_rest.call(null,seq__22723_22737__$1);
var G__22740 = c__16928__auto___22738;
var G__22741 = cljs.core.count.call(null,c__16928__auto___22738);
var G__22742 = (0);
seq__22723_22727 = G__22739;
chunk__22724_22728 = G__22740;
count__22725_22729 = G__22741;
i__22726_22730 = G__22742;
continue;
} else {
var s_22743 = cljs.core.first.call(null,seq__22723_22737__$1);
cljs_intro.debug.dump_surface.call(null,s_22743);

var G__22744 = cljs.core.next.call(null,seq__22723_22737__$1);
var G__22745 = null;
var G__22746 = (0);
var G__22747 = (0);
seq__22723_22727 = G__22744;
chunk__22724_22728 = G__22745;
count__22725_22729 = G__22746;
i__22726_22730 = G__22747;
continue;
}
} else {
}
}
break;
}

return surfs;
});

//# sourceMappingURL=debug.js.map