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

cljs_intro.debug.print.cljs$lang$applyTo = (function (seq19532){
return cljs_intro.debug.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19532));
});
cljs_intro.debug.dump_endpoints = (function cljs_intro$debug$dump_endpoints(s){
var seq__19539 = cljs.core.seq.call(null,s);
var chunk__19540 = null;
var count__19541 = (0);
var i__19542 = (0);
while(true){
if((i__19542 < count__19541)){
var map__19543 = cljs.core._nth.call(null,chunk__19540,i__19542);
var map__19543__$1 = ((cljs.core.seq_QMARK_.call(null,map__19543))?cljs.core.apply.call(null,cljs.core.hash_map,map__19543):map__19543);
var point = cljs.core.get.call(null,map__19543__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__19543__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
cljs_intro.debug.print.call(null,"| a: ",angle," p: ",point);

var G__19545 = seq__19539;
var G__19546 = chunk__19540;
var G__19547 = count__19541;
var G__19548 = (i__19542 + (1));
seq__19539 = G__19545;
chunk__19540 = G__19546;
count__19541 = G__19547;
i__19542 = G__19548;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19539);
if(temp__4126__auto__){
var seq__19539__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19539__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__19539__$1);
var G__19549 = cljs.core.chunk_rest.call(null,seq__19539__$1);
var G__19550 = c__16928__auto__;
var G__19551 = cljs.core.count.call(null,c__16928__auto__);
var G__19552 = (0);
seq__19539 = G__19549;
chunk__19540 = G__19550;
count__19541 = G__19551;
i__19542 = G__19552;
continue;
} else {
var map__19544 = cljs.core.first.call(null,seq__19539__$1);
var map__19544__$1 = ((cljs.core.seq_QMARK_.call(null,map__19544))?cljs.core.apply.call(null,cljs.core.hash_map,map__19544):map__19544);
var point = cljs.core.get.call(null,map__19544__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var angle = cljs.core.get.call(null,map__19544__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
cljs_intro.debug.print.call(null,"| a: ",angle," p: ",point);

var G__19553 = cljs.core.next.call(null,seq__19539__$1);
var G__19554 = null;
var G__19555 = (0);
var G__19556 = (0);
seq__19539 = G__19553;
chunk__19540 = G__19554;
count__19541 = G__19555;
i__19542 = G__19556;
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
var seq__19563_19569 = cljs.core.seq.call(null,s);
var chunk__19564_19570 = null;
var count__19565_19571 = (0);
var i__19566_19572 = (0);
while(true){
if((i__19566_19572 < count__19565_19571)){
var vec__19567_19573 = cljs.core._nth.call(null,chunk__19564_19570,i__19566_19572);
var a_19574 = cljs.core.nth.call(null,vec__19567_19573,(0),null);
var eps_19575 = cljs.core.nth.call(null,vec__19567_19573,(1),null);
cljs_intro.debug.print.call(null,"* angle [",a_19574,"]");

cljs_intro.debug.dump_endpoints.call(null,eps_19575);

var G__19576 = seq__19563_19569;
var G__19577 = chunk__19564_19570;
var G__19578 = count__19565_19571;
var G__19579 = (i__19566_19572 + (1));
seq__19563_19569 = G__19576;
chunk__19564_19570 = G__19577;
count__19565_19571 = G__19578;
i__19566_19572 = G__19579;
continue;
} else {
var temp__4126__auto___19580 = cljs.core.seq.call(null,seq__19563_19569);
if(temp__4126__auto___19580){
var seq__19563_19581__$1 = temp__4126__auto___19580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19563_19581__$1)){
var c__16928__auto___19582 = cljs.core.chunk_first.call(null,seq__19563_19581__$1);
var G__19583 = cljs.core.chunk_rest.call(null,seq__19563_19581__$1);
var G__19584 = c__16928__auto___19582;
var G__19585 = cljs.core.count.call(null,c__16928__auto___19582);
var G__19586 = (0);
seq__19563_19569 = G__19583;
chunk__19564_19570 = G__19584;
count__19565_19571 = G__19585;
i__19566_19572 = G__19586;
continue;
} else {
var vec__19568_19587 = cljs.core.first.call(null,seq__19563_19581__$1);
var a_19588 = cljs.core.nth.call(null,vec__19568_19587,(0),null);
var eps_19589 = cljs.core.nth.call(null,vec__19568_19587,(1),null);
cljs_intro.debug.print.call(null,"* angle [",a_19588,"]");

cljs_intro.debug.dump_endpoints.call(null,eps_19589);

var G__19590 = cljs.core.next.call(null,seq__19563_19581__$1);
var G__19591 = null;
var G__19592 = (0);
var G__19593 = (0);
seq__19563_19569 = G__19590;
chunk__19564_19570 = G__19591;
count__19565_19571 = G__19592;
i__19566_19572 = G__19593;
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
var seq__19598_19602 = cljs.core.seq.call(null,vs);
var chunk__19599_19603 = null;
var count__19600_19604 = (0);
var i__19601_19605 = (0);
while(true){
if((i__19601_19605 < count__19600_19604)){
var v_19606 = cljs.core._nth.call(null,chunk__19599_19603,i__19601_19605);
cljs_intro.debug.dump_vertex.call(null,v_19606);

var G__19607 = seq__19598_19602;
var G__19608 = chunk__19599_19603;
var G__19609 = count__19600_19604;
var G__19610 = (i__19601_19605 + (1));
seq__19598_19602 = G__19607;
chunk__19599_19603 = G__19608;
count__19600_19604 = G__19609;
i__19601_19605 = G__19610;
continue;
} else {
var temp__4126__auto___19611 = cljs.core.seq.call(null,seq__19598_19602);
if(temp__4126__auto___19611){
var seq__19598_19612__$1 = temp__4126__auto___19611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19598_19612__$1)){
var c__16928__auto___19613 = cljs.core.chunk_first.call(null,seq__19598_19612__$1);
var G__19614 = cljs.core.chunk_rest.call(null,seq__19598_19612__$1);
var G__19615 = c__16928__auto___19613;
var G__19616 = cljs.core.count.call(null,c__16928__auto___19613);
var G__19617 = (0);
seq__19598_19602 = G__19614;
chunk__19599_19603 = G__19615;
count__19600_19604 = G__19616;
i__19601_19605 = G__19617;
continue;
} else {
var v_19618 = cljs.core.first.call(null,seq__19598_19612__$1);
cljs_intro.debug.dump_vertex.call(null,v_19618);

var G__19619 = cljs.core.next.call(null,seq__19598_19612__$1);
var G__19620 = null;
var G__19621 = (0);
var G__19622 = (0);
seq__19598_19602 = G__19619;
chunk__19599_19603 = G__19620;
count__19600_19604 = G__19621;
i__19601_19605 = G__19622;
continue;
}
} else {
}
}
break;
}

return vs;
});
cljs_intro.debug.dump_surface = (function cljs_intro$debug$dump_surface(p__19623){
var vec__19627 = p__19623;
var kind = cljs.core.nth.call(null,vec__19627,(0),null);
var s = vec__19627;
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"arc","arc",252411045))){
var vec__19628 = s;
var arc = cljs.core.nth.call(null,vec__19628,(0),null);
var o = cljs.core.nth.call(null,vec__19628,(1),null);
var epa = cljs.core.nth.call(null,vec__19628,(2),null);
var epb = cljs.core.nth.call(null,vec__19628,(3),null);
var dist = cljs.core.nth.call(null,vec__19628,(4),null);
return cljs_intro.debug.print.call(null,"| kind: ",kind," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epa)," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epb)," ",dist);
} else {
var vec__19629 = s;
var triangle = cljs.core.nth.call(null,vec__19629,(0),null);
var o = cljs.core.nth.call(null,vec__19629,(1),null);
var epa = cljs.core.nth.call(null,vec__19629,(2),null);
var epb = cljs.core.nth.call(null,vec__19629,(3),null);
return cljs_intro.debug.print.call(null,"| kind: ",kind," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epa)," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epb));
}
});
cljs_intro.debug.dump_surfaces = (function cljs_intro$debug$dump_surfaces(surfs){
var seq__19634_19638 = cljs.core.seq.call(null,surfs);
var chunk__19635_19639 = null;
var count__19636_19640 = (0);
var i__19637_19641 = (0);
while(true){
if((i__19637_19641 < count__19636_19640)){
var s_19642 = cljs.core._nth.call(null,chunk__19635_19639,i__19637_19641);
cljs_intro.debug.dump_surface.call(null,s_19642);

var G__19643 = seq__19634_19638;
var G__19644 = chunk__19635_19639;
var G__19645 = count__19636_19640;
var G__19646 = (i__19637_19641 + (1));
seq__19634_19638 = G__19643;
chunk__19635_19639 = G__19644;
count__19636_19640 = G__19645;
i__19637_19641 = G__19646;
continue;
} else {
var temp__4126__auto___19647 = cljs.core.seq.call(null,seq__19634_19638);
if(temp__4126__auto___19647){
var seq__19634_19648__$1 = temp__4126__auto___19647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19634_19648__$1)){
var c__16928__auto___19649 = cljs.core.chunk_first.call(null,seq__19634_19648__$1);
var G__19650 = cljs.core.chunk_rest.call(null,seq__19634_19648__$1);
var G__19651 = c__16928__auto___19649;
var G__19652 = cljs.core.count.call(null,c__16928__auto___19649);
var G__19653 = (0);
seq__19634_19638 = G__19650;
chunk__19635_19639 = G__19651;
count__19636_19640 = G__19652;
i__19637_19641 = G__19653;
continue;
} else {
var s_19654 = cljs.core.first.call(null,seq__19634_19648__$1);
cljs_intro.debug.dump_surface.call(null,s_19654);

var G__19655 = cljs.core.next.call(null,seq__19634_19648__$1);
var G__19656 = null;
var G__19657 = (0);
var G__19658 = (0);
seq__19634_19638 = G__19655;
chunk__19635_19639 = G__19656;
count__19636_19640 = G__19657;
i__19637_19641 = G__19658;
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