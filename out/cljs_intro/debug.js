// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_intro.debug');
goog.require('cljs.core');
goog.require('clojure.string');
cljs_intro.debug.print = (function cljs_intro$debug$print(var_args){
var args__17409__auto__ = [];
var len__17402__auto___35497 = arguments.length;
var i__17403__auto___35498 = (0);
while(true){
if((i__17403__auto___35498 < len__17402__auto___35497)){
args__17409__auto__.push((arguments[i__17403__auto___35498]));

var G__35499 = (i__17403__auto___35498 + (1));
i__17403__auto___35498 = G__35499;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return cljs_intro.debug.print.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

cljs_intro.debug.print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(clojure.string.join.call(null,args));
});

cljs_intro.debug.print.cljs$lang$maxFixedArity = (0);

cljs_intro.debug.print.cljs$lang$applyTo = (function (seq35496){
return cljs_intro.debug.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35496));
});
cljs_intro.debug.dump_endpoints = (function cljs_intro$debug$dump_endpoints(s){
var seq__35508 = cljs.core.seq.call(null,s);
var chunk__35509 = null;
var count__35510 = (0);
var i__35511 = (0);
while(true){
if((i__35511 < count__35510)){
var map__35512 = cljs.core._nth.call(null,chunk__35509,i__35511);
var map__35512__$1 = ((((!((map__35512 == null)))?((((map__35512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35512):map__35512);
var angle = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"point","point",1813198264));
cljs_intro.debug.print.call(null,"| a: ",angle," p: ",point);

var G__35516 = seq__35508;
var G__35517 = chunk__35509;
var G__35518 = count__35510;
var G__35519 = (i__35511 + (1));
seq__35508 = G__35516;
chunk__35509 = G__35517;
count__35510 = G__35518;
i__35511 = G__35519;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35508);
if(temp__4425__auto__){
var seq__35508__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35508__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__35508__$1);
var G__35520 = cljs.core.chunk_rest.call(null,seq__35508__$1);
var G__35521 = c__17147__auto__;
var G__35522 = cljs.core.count.call(null,c__17147__auto__);
var G__35523 = (0);
seq__35508 = G__35520;
chunk__35509 = G__35521;
count__35510 = G__35522;
i__35511 = G__35523;
continue;
} else {
var map__35514 = cljs.core.first.call(null,seq__35508__$1);
var map__35514__$1 = ((((!((map__35514 == null)))?((((map__35514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35514):map__35514);
var angle = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var point = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword(null,"point","point",1813198264));
cljs_intro.debug.print.call(null,"| a: ",angle," p: ",point);

var G__35524 = cljs.core.next.call(null,seq__35508__$1);
var G__35525 = null;
var G__35526 = (0);
var G__35527 = (0);
seq__35508 = G__35524;
chunk__35509 = G__35525;
count__35510 = G__35526;
i__35511 = G__35527;
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
var seq__35534_35540 = cljs.core.seq.call(null,s);
var chunk__35535_35541 = null;
var count__35536_35542 = (0);
var i__35537_35543 = (0);
while(true){
if((i__35537_35543 < count__35536_35542)){
var vec__35538_35544 = cljs.core._nth.call(null,chunk__35535_35541,i__35537_35543);
var a_35545 = cljs.core.nth.call(null,vec__35538_35544,(0),null);
var eps_35546 = cljs.core.nth.call(null,vec__35538_35544,(1),null);
cljs_intro.debug.print.call(null,"* angle [",a_35545,"]");

cljs_intro.debug.dump_endpoints.call(null,eps_35546);

var G__35547 = seq__35534_35540;
var G__35548 = chunk__35535_35541;
var G__35549 = count__35536_35542;
var G__35550 = (i__35537_35543 + (1));
seq__35534_35540 = G__35547;
chunk__35535_35541 = G__35548;
count__35536_35542 = G__35549;
i__35537_35543 = G__35550;
continue;
} else {
var temp__4425__auto___35551 = cljs.core.seq.call(null,seq__35534_35540);
if(temp__4425__auto___35551){
var seq__35534_35552__$1 = temp__4425__auto___35551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35534_35552__$1)){
var c__17147__auto___35553 = cljs.core.chunk_first.call(null,seq__35534_35552__$1);
var G__35554 = cljs.core.chunk_rest.call(null,seq__35534_35552__$1);
var G__35555 = c__17147__auto___35553;
var G__35556 = cljs.core.count.call(null,c__17147__auto___35553);
var G__35557 = (0);
seq__35534_35540 = G__35554;
chunk__35535_35541 = G__35555;
count__35536_35542 = G__35556;
i__35537_35543 = G__35557;
continue;
} else {
var vec__35539_35558 = cljs.core.first.call(null,seq__35534_35552__$1);
var a_35559 = cljs.core.nth.call(null,vec__35539_35558,(0),null);
var eps_35560 = cljs.core.nth.call(null,vec__35539_35558,(1),null);
cljs_intro.debug.print.call(null,"* angle [",a_35559,"]");

cljs_intro.debug.dump_endpoints.call(null,eps_35560);

var G__35561 = cljs.core.next.call(null,seq__35534_35552__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__35534_35540 = G__35561;
chunk__35535_35541 = G__35562;
count__35536_35542 = G__35563;
i__35537_35543 = G__35564;
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
var seq__35569_35573 = cljs.core.seq.call(null,vs);
var chunk__35570_35574 = null;
var count__35571_35575 = (0);
var i__35572_35576 = (0);
while(true){
if((i__35572_35576 < count__35571_35575)){
var v_35577 = cljs.core._nth.call(null,chunk__35570_35574,i__35572_35576);
cljs_intro.debug.dump_vertex.call(null,v_35577);

var G__35578 = seq__35569_35573;
var G__35579 = chunk__35570_35574;
var G__35580 = count__35571_35575;
var G__35581 = (i__35572_35576 + (1));
seq__35569_35573 = G__35578;
chunk__35570_35574 = G__35579;
count__35571_35575 = G__35580;
i__35572_35576 = G__35581;
continue;
} else {
var temp__4425__auto___35582 = cljs.core.seq.call(null,seq__35569_35573);
if(temp__4425__auto___35582){
var seq__35569_35583__$1 = temp__4425__auto___35582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35569_35583__$1)){
var c__17147__auto___35584 = cljs.core.chunk_first.call(null,seq__35569_35583__$1);
var G__35585 = cljs.core.chunk_rest.call(null,seq__35569_35583__$1);
var G__35586 = c__17147__auto___35584;
var G__35587 = cljs.core.count.call(null,c__17147__auto___35584);
var G__35588 = (0);
seq__35569_35573 = G__35585;
chunk__35570_35574 = G__35586;
count__35571_35575 = G__35587;
i__35572_35576 = G__35588;
continue;
} else {
var v_35589 = cljs.core.first.call(null,seq__35569_35583__$1);
cljs_intro.debug.dump_vertex.call(null,v_35589);

var G__35590 = cljs.core.next.call(null,seq__35569_35583__$1);
var G__35591 = null;
var G__35592 = (0);
var G__35593 = (0);
seq__35569_35573 = G__35590;
chunk__35570_35574 = G__35591;
count__35571_35575 = G__35592;
i__35572_35576 = G__35593;
continue;
}
} else {
}
}
break;
}

return vs;
});
cljs_intro.debug.dump_surface = (function cljs_intro$debug$dump_surface(p__35594){
var vec__35598 = p__35594;
var kind = cljs.core.nth.call(null,vec__35598,(0),null);
var s = vec__35598;
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"arc","arc",252411045))){
var vec__35599 = s;
var arc = cljs.core.nth.call(null,vec__35599,(0),null);
var o = cljs.core.nth.call(null,vec__35599,(1),null);
var epa = cljs.core.nth.call(null,vec__35599,(2),null);
var epb = cljs.core.nth.call(null,vec__35599,(3),null);
var dist = cljs.core.nth.call(null,vec__35599,(4),null);
return cljs_intro.debug.print.call(null,"| kind: ",kind," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epa)," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epb)," ",dist);
} else {
var vec__35600 = s;
var triangle = cljs.core.nth.call(null,vec__35600,(0),null);
var o = cljs.core.nth.call(null,vec__35600,(1),null);
var epa = cljs.core.nth.call(null,vec__35600,(2),null);
var epb = cljs.core.nth.call(null,vec__35600,(3),null);
return cljs_intro.debug.print.call(null,"| kind: ",kind," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epa)," ",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(epb));
}
});
cljs_intro.debug.dump_surfaces = (function cljs_intro$debug$dump_surfaces(surfs){
var seq__35605_35609 = cljs.core.seq.call(null,surfs);
var chunk__35606_35610 = null;
var count__35607_35611 = (0);
var i__35608_35612 = (0);
while(true){
if((i__35608_35612 < count__35607_35611)){
var s_35613 = cljs.core._nth.call(null,chunk__35606_35610,i__35608_35612);
cljs_intro.debug.dump_surface.call(null,s_35613);

var G__35614 = seq__35605_35609;
var G__35615 = chunk__35606_35610;
var G__35616 = count__35607_35611;
var G__35617 = (i__35608_35612 + (1));
seq__35605_35609 = G__35614;
chunk__35606_35610 = G__35615;
count__35607_35611 = G__35616;
i__35608_35612 = G__35617;
continue;
} else {
var temp__4425__auto___35618 = cljs.core.seq.call(null,seq__35605_35609);
if(temp__4425__auto___35618){
var seq__35605_35619__$1 = temp__4425__auto___35618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35605_35619__$1)){
var c__17147__auto___35620 = cljs.core.chunk_first.call(null,seq__35605_35619__$1);
var G__35621 = cljs.core.chunk_rest.call(null,seq__35605_35619__$1);
var G__35622 = c__17147__auto___35620;
var G__35623 = cljs.core.count.call(null,c__17147__auto___35620);
var G__35624 = (0);
seq__35605_35609 = G__35621;
chunk__35606_35610 = G__35622;
count__35607_35611 = G__35623;
i__35608_35612 = G__35624;
continue;
} else {
var s_35625 = cljs.core.first.call(null,seq__35605_35619__$1);
cljs_intro.debug.dump_surface.call(null,s_35625);

var G__35626 = cljs.core.next.call(null,seq__35605_35619__$1);
var G__35627 = null;
var G__35628 = (0);
var G__35629 = (0);
seq__35605_35609 = G__35626;
chunk__35606_35610 = G__35627;
count__35607_35611 = G__35628;
i__35608_35612 = G__35629;
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