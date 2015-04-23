// Compiled by ClojureScript 0.0-3126 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4122__auto__ = elem.textContent;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function() {
var dommy$core$style = null;
var dommy$core$style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var dommy$core$style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
dommy$core$style = function(elem,k){
switch(arguments.length){
case 1:
return dommy$core$style__1.call(this,elem);
case 2:
return dommy$core$style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$style.cljs$core$IFn$_invoke$arity$1 = dommy$core$style__1;
dommy$core$style.cljs$core$IFn$_invoke$arity$2 = dommy$core$style__2;
return dommy$core$style;
})()
;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function() {
var dommy$core$matches_pred = null;
var dommy$core$matches_pred__1 = (function (selector){
return dommy$core$matches_pred.call(null,document,selector);
});
var dommy$core$matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
dommy$core$matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return dommy$core$matches_pred__1.call(this,base);
case 2:
return dommy$core$matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$matches_pred.cljs$core$IFn$_invoke$arity$1 = dommy$core$matches_pred__1;
dommy$core$matches_pred.cljs$core$IFn$_invoke$arity$2 = dommy$core$matches_pred__2;
return dommy$core$matches_pred;
})()
;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function() {
var dommy$core$closest = null;
var dommy$core$closest__2 = (function (elem,selector){
return dommy$core$closest.call(null,document.body,elem,selector);
});
var dommy$core$closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__10445_SHARP_){
return !((p1__10445_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
dommy$core$closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return dommy$core$closest__2.call(this,base,elem);
case 3:
return dommy$core$closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$closest.cljs$core$IFn$_invoke$arity$2 = dommy$core$closest__2;
dommy$core$closest.cljs$core$IFn$_invoke$arity$3 = dommy$core$closest__3;
return dommy$core$closest;
})()
;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 * @param {...*} var_args
 */
dommy.core.set_style_BANG_ = (function() { 
var dommy$core$set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__10452_10458 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__10453_10459 = null;
var count__10454_10460 = (0);
var i__10455_10461 = (0);
while(true){
if((i__10455_10461 < count__10454_10460)){
var vec__10456_10462 = cljs.core._nth.call(null,chunk__10453_10459,i__10455_10461);
var k_10463 = cljs.core.nth.call(null,vec__10456_10462,(0),null);
var v_10464 = cljs.core.nth.call(null,vec__10456_10462,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_10463),v_10464);

var G__10465 = seq__10452_10458;
var G__10466 = chunk__10453_10459;
var G__10467 = count__10454_10460;
var G__10468 = (i__10455_10461 + (1));
seq__10452_10458 = G__10465;
chunk__10453_10459 = G__10466;
count__10454_10460 = G__10467;
i__10455_10461 = G__10468;
continue;
} else {
var temp__4126__auto___10469 = cljs.core.seq.call(null,seq__10452_10458);
if(temp__4126__auto___10469){
var seq__10452_10470__$1 = temp__4126__auto___10469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10452_10470__$1)){
var c__4907__auto___10471 = cljs.core.chunk_first.call(null,seq__10452_10470__$1);
var G__10472 = cljs.core.chunk_rest.call(null,seq__10452_10470__$1);
var G__10473 = c__4907__auto___10471;
var G__10474 = cljs.core.count.call(null,c__4907__auto___10471);
var G__10475 = (0);
seq__10452_10458 = G__10472;
chunk__10453_10459 = G__10473;
count__10454_10460 = G__10474;
i__10455_10461 = G__10475;
continue;
} else {
var vec__10457_10476 = cljs.core.first.call(null,seq__10452_10470__$1);
var k_10477 = cljs.core.nth.call(null,vec__10457_10476,(0),null);
var v_10478 = cljs.core.nth.call(null,vec__10457_10476,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_10477),v_10478);

var G__10479 = cljs.core.next.call(null,seq__10452_10470__$1);
var G__10480 = null;
var G__10481 = (0);
var G__10482 = (0);
seq__10452_10458 = G__10479;
chunk__10453_10459 = G__10480;
count__10454_10460 = G__10481;
i__10455_10461 = G__10482;
continue;
}
} else {
}
}
break;
}

return elem;
};
var dommy$core$set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__10483__i = 0, G__10483__a = new Array(arguments.length -  1);
while (G__10483__i < G__10483__a.length) {G__10483__a[G__10483__i] = arguments[G__10483__i + 1]; ++G__10483__i;}
  kvs = new cljs.core.IndexedSeq(G__10483__a,0);
} 
return dommy$core$set_style_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_style_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_style_BANG_.cljs$lang$applyTo = (function (arglist__10484){
var elem = cljs.core.first(arglist__10484);
var kvs = cljs.core.rest(arglist__10484);
return dommy$core$set_style_BANG___delegate(elem,kvs);
});
dommy$core$set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_style_BANG___delegate;
return dommy$core$set_style_BANG_;
})()
;
/**
 * @param {...*} var_args
 */
dommy.core.set_px_BANG_ = (function() { 
var dommy$core$set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__10491_10497 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__10492_10498 = null;
var count__10493_10499 = (0);
var i__10494_10500 = (0);
while(true){
if((i__10494_10500 < count__10493_10499)){
var vec__10495_10501 = cljs.core._nth.call(null,chunk__10492_10498,i__10494_10500);
var k_10502 = cljs.core.nth.call(null,vec__10495_10501,(0),null);
var v_10503 = cljs.core.nth.call(null,vec__10495_10501,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_10502,[cljs.core.str(v_10503),cljs.core.str("px")].join(''));

var G__10504 = seq__10491_10497;
var G__10505 = chunk__10492_10498;
var G__10506 = count__10493_10499;
var G__10507 = (i__10494_10500 + (1));
seq__10491_10497 = G__10504;
chunk__10492_10498 = G__10505;
count__10493_10499 = G__10506;
i__10494_10500 = G__10507;
continue;
} else {
var temp__4126__auto___10508 = cljs.core.seq.call(null,seq__10491_10497);
if(temp__4126__auto___10508){
var seq__10491_10509__$1 = temp__4126__auto___10508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10491_10509__$1)){
var c__4907__auto___10510 = cljs.core.chunk_first.call(null,seq__10491_10509__$1);
var G__10511 = cljs.core.chunk_rest.call(null,seq__10491_10509__$1);
var G__10512 = c__4907__auto___10510;
var G__10513 = cljs.core.count.call(null,c__4907__auto___10510);
var G__10514 = (0);
seq__10491_10497 = G__10511;
chunk__10492_10498 = G__10512;
count__10493_10499 = G__10513;
i__10494_10500 = G__10514;
continue;
} else {
var vec__10496_10515 = cljs.core.first.call(null,seq__10491_10509__$1);
var k_10516 = cljs.core.nth.call(null,vec__10496_10515,(0),null);
var v_10517 = cljs.core.nth.call(null,vec__10496_10515,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_10516,[cljs.core.str(v_10517),cljs.core.str("px")].join(''));

var G__10518 = cljs.core.next.call(null,seq__10491_10509__$1);
var G__10519 = null;
var G__10520 = (0);
var G__10521 = (0);
seq__10491_10497 = G__10518;
chunk__10492_10498 = G__10519;
count__10493_10499 = G__10520;
i__10494_10500 = G__10521;
continue;
}
} else {
}
}
break;
}

return elem;
};
var dommy$core$set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__10522__i = 0, G__10522__a = new Array(arguments.length -  1);
while (G__10522__i < G__10522__a.length) {G__10522__a[G__10522__i] = arguments[G__10522__i + 1]; ++G__10522__i;}
  kvs = new cljs.core.IndexedSeq(G__10522__a,0);
} 
return dommy$core$set_px_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_px_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_px_BANG_.cljs$lang$applyTo = (function (arglist__10523){
var elem = cljs.core.first(arglist__10523);
var kvs = cljs.core.rest(arglist__10523);
return dommy$core$set_px_BANG___delegate(elem,kvs);
});
dommy$core$set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_px_BANG___delegate;
return dommy$core$set_px_BANG_;
})()
;
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to "true":
 * 
 * (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 * (set-attr! elem :id "some-id"
 * :name "some-name")
 * @param {...*} var_args
 */
dommy.core.set_attr_BANG_ = (function() {
var dommy$core$set_attr_BANG_ = null;
var dommy$core$set_attr_BANG___2 = (function (elem,k){
return dommy$core$set_attr_BANG_.call(null,elem,k,"true");
});
var dommy$core$set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__10532 = elem;
(G__10532[k__$1] = v);

return G__10532;
} else {
var G__10533 = elem;
G__10533.setAttribute(k__$1,v);

return G__10533;
}
} else {
return null;
}
});
var dommy$core$set_attr_BANG___4 = (function() { 
var G__10540__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__10534_10541 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__10535_10542 = null;
var count__10536_10543 = (0);
var i__10537_10544 = (0);
while(true){
if((i__10537_10544 < count__10536_10543)){
var vec__10538_10545 = cljs.core._nth.call(null,chunk__10535_10542,i__10537_10544);
var k_10546__$1 = cljs.core.nth.call(null,vec__10538_10545,(0),null);
var v_10547__$1 = cljs.core.nth.call(null,vec__10538_10545,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_10546__$1,v_10547__$1);

var G__10548 = seq__10534_10541;
var G__10549 = chunk__10535_10542;
var G__10550 = count__10536_10543;
var G__10551 = (i__10537_10544 + (1));
seq__10534_10541 = G__10548;
chunk__10535_10542 = G__10549;
count__10536_10543 = G__10550;
i__10537_10544 = G__10551;
continue;
} else {
var temp__4126__auto___10552 = cljs.core.seq.call(null,seq__10534_10541);
if(temp__4126__auto___10552){
var seq__10534_10553__$1 = temp__4126__auto___10552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10534_10553__$1)){
var c__4907__auto___10554 = cljs.core.chunk_first.call(null,seq__10534_10553__$1);
var G__10555 = cljs.core.chunk_rest.call(null,seq__10534_10553__$1);
var G__10556 = c__4907__auto___10554;
var G__10557 = cljs.core.count.call(null,c__4907__auto___10554);
var G__10558 = (0);
seq__10534_10541 = G__10555;
chunk__10535_10542 = G__10556;
count__10536_10543 = G__10557;
i__10537_10544 = G__10558;
continue;
} else {
var vec__10539_10559 = cljs.core.first.call(null,seq__10534_10553__$1);
var k_10560__$1 = cljs.core.nth.call(null,vec__10539_10559,(0),null);
var v_10561__$1 = cljs.core.nth.call(null,vec__10539_10559,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_10560__$1,v_10561__$1);

var G__10562 = cljs.core.next.call(null,seq__10534_10553__$1);
var G__10563 = null;
var G__10564 = (0);
var G__10565 = (0);
seq__10534_10541 = G__10562;
chunk__10535_10542 = G__10563;
count__10536_10543 = G__10564;
i__10537_10544 = G__10565;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__10540 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__10566__i = 0, G__10566__a = new Array(arguments.length -  3);
while (G__10566__i < G__10566__a.length) {G__10566__a[G__10566__i] = arguments[G__10566__i + 3]; ++G__10566__i;}
  kvs = new cljs.core.IndexedSeq(G__10566__a,0);
} 
return G__10540__delegate.call(this,elem,k,v,kvs);};
G__10540.cljs$lang$maxFixedArity = 3;
G__10540.cljs$lang$applyTo = (function (arglist__10567){
var elem = cljs.core.first(arglist__10567);
arglist__10567 = cljs.core.next(arglist__10567);
var k = cljs.core.first(arglist__10567);
arglist__10567 = cljs.core.next(arglist__10567);
var v = cljs.core.first(arglist__10567);
var kvs = cljs.core.rest(arglist__10567);
return G__10540__delegate(elem,k,v,kvs);
});
G__10540.cljs$core$IFn$_invoke$arity$variadic = G__10540__delegate;
return G__10540;
})()
;
dommy$core$set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return dommy$core$set_attr_BANG___2.call(this,elem,k);
case 3:
return dommy$core$set_attr_BANG___3.call(this,elem,k,v);
default:
var G__10568 = null;
if (arguments.length > 3) {
var G__10569__i = 0, G__10569__a = new Array(arguments.length -  3);
while (G__10569__i < G__10569__a.length) {G__10569__a[G__10569__i] = arguments[G__10569__i + 3]; ++G__10569__i;}
G__10568 = new cljs.core.IndexedSeq(G__10569__a,0);
}
return dommy$core$set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__10568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$set_attr_BANG_.cljs$lang$maxFixedArity = 3;
dommy$core$set_attr_BANG_.cljs$lang$applyTo = dommy$core$set_attr_BANG___4.cljs$lang$applyTo;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$set_attr_BANG___2;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$set_attr_BANG___3;
dommy$core$set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$set_attr_BANG_;
})()
;
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 * @param {...*} var_args
 */
dommy.core.remove_attr_BANG_ = (function() {
var dommy$core$remove_attr_BANG_ = null;
var dommy$core$remove_attr_BANG___2 = (function (elem,k){
var k_10578__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_10578__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_10578__$1);
}

return elem;
});
var dommy$core$remove_attr_BANG___3 = (function() { 
var G__10579__delegate = function (elem,k,ks){
var seq__10574_10580 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__10575_10581 = null;
var count__10576_10582 = (0);
var i__10577_10583 = (0);
while(true){
if((i__10577_10583 < count__10576_10582)){
var k_10584__$1 = cljs.core._nth.call(null,chunk__10575_10581,i__10577_10583);
dommy$core$remove_attr_BANG_.call(null,elem,k_10584__$1);

var G__10585 = seq__10574_10580;
var G__10586 = chunk__10575_10581;
var G__10587 = count__10576_10582;
var G__10588 = (i__10577_10583 + (1));
seq__10574_10580 = G__10585;
chunk__10575_10581 = G__10586;
count__10576_10582 = G__10587;
i__10577_10583 = G__10588;
continue;
} else {
var temp__4126__auto___10589 = cljs.core.seq.call(null,seq__10574_10580);
if(temp__4126__auto___10589){
var seq__10574_10590__$1 = temp__4126__auto___10589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10574_10590__$1)){
var c__4907__auto___10591 = cljs.core.chunk_first.call(null,seq__10574_10590__$1);
var G__10592 = cljs.core.chunk_rest.call(null,seq__10574_10590__$1);
var G__10593 = c__4907__auto___10591;
var G__10594 = cljs.core.count.call(null,c__4907__auto___10591);
var G__10595 = (0);
seq__10574_10580 = G__10592;
chunk__10575_10581 = G__10593;
count__10576_10582 = G__10594;
i__10577_10583 = G__10595;
continue;
} else {
var k_10596__$1 = cljs.core.first.call(null,seq__10574_10590__$1);
dommy$core$remove_attr_BANG_.call(null,elem,k_10596__$1);

var G__10597 = cljs.core.next.call(null,seq__10574_10590__$1);
var G__10598 = null;
var G__10599 = (0);
var G__10600 = (0);
seq__10574_10580 = G__10597;
chunk__10575_10581 = G__10598;
count__10576_10582 = G__10599;
i__10577_10583 = G__10600;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__10579 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__10601__i = 0, G__10601__a = new Array(arguments.length -  2);
while (G__10601__i < G__10601__a.length) {G__10601__a[G__10601__i] = arguments[G__10601__i + 2]; ++G__10601__i;}
  ks = new cljs.core.IndexedSeq(G__10601__a,0);
} 
return G__10579__delegate.call(this,elem,k,ks);};
G__10579.cljs$lang$maxFixedArity = 2;
G__10579.cljs$lang$applyTo = (function (arglist__10602){
var elem = cljs.core.first(arglist__10602);
arglist__10602 = cljs.core.next(arglist__10602);
var k = cljs.core.first(arglist__10602);
var ks = cljs.core.rest(arglist__10602);
return G__10579__delegate(elem,k,ks);
});
G__10579.cljs$core$IFn$_invoke$arity$variadic = G__10579__delegate;
return G__10579;
})()
;
dommy$core$remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_attr_BANG___2.call(this,elem,k);
default:
var G__10603 = null;
if (arguments.length > 2) {
var G__10604__i = 0, G__10604__a = new Array(arguments.length -  2);
while (G__10604__i < G__10604__a.length) {G__10604__a[G__10604__i] = arguments[G__10604__i + 2]; ++G__10604__i;}
G__10603 = new cljs.core.IndexedSeq(G__10604__a,0);
}
return dommy$core$remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__10603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$remove_attr_BANG_.cljs$lang$applyTo = dommy$core$remove_attr_BANG___3.cljs$lang$applyTo;
dommy$core$remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_attr_BANG___2;
dommy$core$remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$remove_attr_BANG_;
})()
;
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function() {
var dommy$core$toggle_attr_BANG_ = null;
var dommy$core$toggle_attr_BANG___2 = (function (elem,k){
return dommy$core$toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var dommy$core$toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
dommy$core$toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return dommy$core$toggle_attr_BANG___2.call(this,elem,k);
case 3:
return dommy$core$toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_attr_BANG___2;
dommy$core$toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$toggle_attr_BANG___3;
return dommy$core$toggle_attr_BANG_;
})()
;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 * @param {...*} var_args
 */
dommy.core.add_class_BANG_ = (function() {
var dommy$core$add_class_BANG_ = null;
var dommy$core$add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___10629 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___10629)){
var class_list_10630 = temp__4124__auto___10629;
var seq__10617_10631 = cljs.core.seq.call(null,classes__$1);
var chunk__10618_10632 = null;
var count__10619_10633 = (0);
var i__10620_10634 = (0);
while(true){
if((i__10620_10634 < count__10619_10633)){
var c_10635 = cljs.core._nth.call(null,chunk__10618_10632,i__10620_10634);
class_list_10630.add(c_10635);

var G__10636 = seq__10617_10631;
var G__10637 = chunk__10618_10632;
var G__10638 = count__10619_10633;
var G__10639 = (i__10620_10634 + (1));
seq__10617_10631 = G__10636;
chunk__10618_10632 = G__10637;
count__10619_10633 = G__10638;
i__10620_10634 = G__10639;
continue;
} else {
var temp__4126__auto___10640 = cljs.core.seq.call(null,seq__10617_10631);
if(temp__4126__auto___10640){
var seq__10617_10641__$1 = temp__4126__auto___10640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10617_10641__$1)){
var c__4907__auto___10642 = cljs.core.chunk_first.call(null,seq__10617_10641__$1);
var G__10643 = cljs.core.chunk_rest.call(null,seq__10617_10641__$1);
var G__10644 = c__4907__auto___10642;
var G__10645 = cljs.core.count.call(null,c__4907__auto___10642);
var G__10646 = (0);
seq__10617_10631 = G__10643;
chunk__10618_10632 = G__10644;
count__10619_10633 = G__10645;
i__10620_10634 = G__10646;
continue;
} else {
var c_10647 = cljs.core.first.call(null,seq__10617_10641__$1);
class_list_10630.add(c_10647);

var G__10648 = cljs.core.next.call(null,seq__10617_10641__$1);
var G__10649 = null;
var G__10650 = (0);
var G__10651 = (0);
seq__10617_10631 = G__10648;
chunk__10618_10632 = G__10649;
count__10619_10633 = G__10650;
i__10620_10634 = G__10651;
continue;
}
} else {
}
}
break;
}
} else {
var seq__10621_10652 = cljs.core.seq.call(null,classes__$1);
var chunk__10622_10653 = null;
var count__10623_10654 = (0);
var i__10624_10655 = (0);
while(true){
if((i__10624_10655 < count__10623_10654)){
var c_10656 = cljs.core._nth.call(null,chunk__10622_10653,i__10624_10655);
var class_name_10657 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10657,c_10656))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10657 === ""))?c_10656:[cljs.core.str(class_name_10657),cljs.core.str(" "),cljs.core.str(c_10656)].join('')));
}

var G__10658 = seq__10621_10652;
var G__10659 = chunk__10622_10653;
var G__10660 = count__10623_10654;
var G__10661 = (i__10624_10655 + (1));
seq__10621_10652 = G__10658;
chunk__10622_10653 = G__10659;
count__10623_10654 = G__10660;
i__10624_10655 = G__10661;
continue;
} else {
var temp__4126__auto___10662 = cljs.core.seq.call(null,seq__10621_10652);
if(temp__4126__auto___10662){
var seq__10621_10663__$1 = temp__4126__auto___10662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10621_10663__$1)){
var c__4907__auto___10664 = cljs.core.chunk_first.call(null,seq__10621_10663__$1);
var G__10665 = cljs.core.chunk_rest.call(null,seq__10621_10663__$1);
var G__10666 = c__4907__auto___10664;
var G__10667 = cljs.core.count.call(null,c__4907__auto___10664);
var G__10668 = (0);
seq__10621_10652 = G__10665;
chunk__10622_10653 = G__10666;
count__10623_10654 = G__10667;
i__10624_10655 = G__10668;
continue;
} else {
var c_10669 = cljs.core.first.call(null,seq__10621_10663__$1);
var class_name_10670 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10670,c_10669))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10670 === ""))?c_10669:[cljs.core.str(class_name_10670),cljs.core.str(" "),cljs.core.str(c_10669)].join('')));
}

var G__10671 = cljs.core.next.call(null,seq__10621_10663__$1);
var G__10672 = null;
var G__10673 = (0);
var G__10674 = (0);
seq__10621_10652 = G__10671;
chunk__10622_10653 = G__10672;
count__10623_10654 = G__10673;
i__10624_10655 = G__10674;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var dommy$core$add_class_BANG___3 = (function() { 
var G__10675__delegate = function (elem,classes,more_classes){
var seq__10625_10676 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__10626_10677 = null;
var count__10627_10678 = (0);
var i__10628_10679 = (0);
while(true){
if((i__10628_10679 < count__10627_10678)){
var c_10680 = cljs.core._nth.call(null,chunk__10626_10677,i__10628_10679);
dommy$core$add_class_BANG_.call(null,elem,c_10680);

var G__10681 = seq__10625_10676;
var G__10682 = chunk__10626_10677;
var G__10683 = count__10627_10678;
var G__10684 = (i__10628_10679 + (1));
seq__10625_10676 = G__10681;
chunk__10626_10677 = G__10682;
count__10627_10678 = G__10683;
i__10628_10679 = G__10684;
continue;
} else {
var temp__4126__auto___10685 = cljs.core.seq.call(null,seq__10625_10676);
if(temp__4126__auto___10685){
var seq__10625_10686__$1 = temp__4126__auto___10685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10625_10686__$1)){
var c__4907__auto___10687 = cljs.core.chunk_first.call(null,seq__10625_10686__$1);
var G__10688 = cljs.core.chunk_rest.call(null,seq__10625_10686__$1);
var G__10689 = c__4907__auto___10687;
var G__10690 = cljs.core.count.call(null,c__4907__auto___10687);
var G__10691 = (0);
seq__10625_10676 = G__10688;
chunk__10626_10677 = G__10689;
count__10627_10678 = G__10690;
i__10628_10679 = G__10691;
continue;
} else {
var c_10692 = cljs.core.first.call(null,seq__10625_10686__$1);
dommy$core$add_class_BANG_.call(null,elem,c_10692);

var G__10693 = cljs.core.next.call(null,seq__10625_10686__$1);
var G__10694 = null;
var G__10695 = (0);
var G__10696 = (0);
seq__10625_10676 = G__10693;
chunk__10626_10677 = G__10694;
count__10627_10678 = G__10695;
i__10628_10679 = G__10696;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__10675 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__10697__i = 0, G__10697__a = new Array(arguments.length -  2);
while (G__10697__i < G__10697__a.length) {G__10697__a[G__10697__i] = arguments[G__10697__i + 2]; ++G__10697__i;}
  more_classes = new cljs.core.IndexedSeq(G__10697__a,0);
} 
return G__10675__delegate.call(this,elem,classes,more_classes);};
G__10675.cljs$lang$maxFixedArity = 2;
G__10675.cljs$lang$applyTo = (function (arglist__10698){
var elem = cljs.core.first(arglist__10698);
arglist__10698 = cljs.core.next(arglist__10698);
var classes = cljs.core.first(arglist__10698);
var more_classes = cljs.core.rest(arglist__10698);
return G__10675__delegate(elem,classes,more_classes);
});
G__10675.cljs$core$IFn$_invoke$arity$variadic = G__10675__delegate;
return G__10675;
})()
;
dommy$core$add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$add_class_BANG___2.call(this,elem,classes);
default:
var G__10699 = null;
if (arguments.length > 2) {
var G__10700__i = 0, G__10700__a = new Array(arguments.length -  2);
while (G__10700__i < G__10700__a.length) {G__10700__a[G__10700__i] = arguments[G__10700__i + 2]; ++G__10700__i;}
G__10699 = new cljs.core.IndexedSeq(G__10700__a,0);
}
return dommy$core$add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__10699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$add_class_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$add_class_BANG_.cljs$lang$applyTo = dommy$core$add_class_BANG___3.cljs$lang$applyTo;
dommy$core$add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$add_class_BANG___2;
dommy$core$add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$add_class_BANG_;
})()
;
/**
 * Remove `c` from `elem` class list
 * @param {...*} var_args
 */
dommy.core.remove_class_BANG_ = (function() {
var dommy$core$remove_class_BANG_ = null;
var dommy$core$remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___10709 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___10709)){
var class_list_10710 = temp__4124__auto___10709;
class_list_10710.remove(c__$1);
} else {
var class_name_10711 = dommy.core.class$.call(null,elem);
var new_class_name_10712 = dommy.utils.remove_class_str.call(null,class_name_10711,c__$1);
if((class_name_10711 === new_class_name_10712)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_10712);
}
}

return elem;
});
var dommy$core$remove_class_BANG___3 = (function() { 
var G__10713__delegate = function (elem,class$,classes){
var seq__10705 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__10706 = null;
var count__10707 = (0);
var i__10708 = (0);
while(true){
if((i__10708 < count__10707)){
var c = cljs.core._nth.call(null,chunk__10706,i__10708);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__10714 = seq__10705;
var G__10715 = chunk__10706;
var G__10716 = count__10707;
var G__10717 = (i__10708 + (1));
seq__10705 = G__10714;
chunk__10706 = G__10715;
count__10707 = G__10716;
i__10708 = G__10717;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10705);
if(temp__4126__auto__){
var seq__10705__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10705__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__10705__$1);
var G__10718 = cljs.core.chunk_rest.call(null,seq__10705__$1);
var G__10719 = c__4907__auto__;
var G__10720 = cljs.core.count.call(null,c__4907__auto__);
var G__10721 = (0);
seq__10705 = G__10718;
chunk__10706 = G__10719;
count__10707 = G__10720;
i__10708 = G__10721;
continue;
} else {
var c = cljs.core.first.call(null,seq__10705__$1);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__10722 = cljs.core.next.call(null,seq__10705__$1);
var G__10723 = null;
var G__10724 = (0);
var G__10725 = (0);
seq__10705 = G__10722;
chunk__10706 = G__10723;
count__10707 = G__10724;
i__10708 = G__10725;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10713 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__10726__i = 0, G__10726__a = new Array(arguments.length -  2);
while (G__10726__i < G__10726__a.length) {G__10726__a[G__10726__i] = arguments[G__10726__i + 2]; ++G__10726__i;}
  classes = new cljs.core.IndexedSeq(G__10726__a,0);
} 
return G__10713__delegate.call(this,elem,class$,classes);};
G__10713.cljs$lang$maxFixedArity = 2;
G__10713.cljs$lang$applyTo = (function (arglist__10727){
var elem = cljs.core.first(arglist__10727);
arglist__10727 = cljs.core.next(arglist__10727);
var class$ = cljs.core.first(arglist__10727);
var classes = cljs.core.rest(arglist__10727);
return G__10713__delegate(elem,class$,classes);
});
G__10713.cljs$core$IFn$_invoke$arity$variadic = G__10713__delegate;
return G__10713;
})()
;
dommy$core$remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_class_BANG___2.call(this,elem,class$);
default:
var G__10728 = null;
if (arguments.length > 2) {
var G__10729__i = 0, G__10729__a = new Array(arguments.length -  2);
while (G__10729__i < G__10729__a.length) {G__10729__a[G__10729__i] = arguments[G__10729__i + 2]; ++G__10729__i;}
G__10728 = new cljs.core.IndexedSeq(G__10729__a,0);
}
return dommy$core$remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__10728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_class_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$remove_class_BANG_.cljs$lang$applyTo = dommy$core$remove_class_BANG___3.cljs$lang$applyTo;
dommy$core$remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_class_BANG___2;
dommy$core$remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$remove_class_BANG_;
})()
;
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function() {
var dommy$core$toggle_class_BANG_ = null;
var dommy$core$toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___10730 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___10730)){
var class_list_10731 = temp__4124__auto___10730;
class_list_10731.toggle(c__$1);
} else {
dommy$core$toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var dommy$core$toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
dommy$core$toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return dommy$core$toggle_class_BANG___2.call(this,elem,class$);
case 3:
return dommy$core$toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_class_BANG___2;
dommy$core$toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = dommy$core$toggle_class_BANG___3;
return dommy$core$toggle_class_BANG_;
})()
;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function() {
var dommy$core$toggle_BANG_ = null;
var dommy$core$toggle_BANG___1 = (function (elem){
return dommy$core$toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var dommy$core$toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
dommy$core$toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return dommy$core$toggle_BANG___1.call(this,elem);
case 2:
return dommy$core$toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = dommy$core$toggle_BANG___1;
dommy$core$toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$toggle_BANG___2;
return dommy$core$toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var dommy$core$create_element = null;
var dommy$core$create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var dommy$core$create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
dommy$core$create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return dommy$core$create_element__1.call(this,tag_ns);
case 2:
return dommy$core$create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$create_element.cljs$core$IFn$_invoke$arity$1 = dommy$core$create_element__1;
dommy$core$create_element.cljs$core$IFn$_invoke$arity$2 = dommy$core$create_element__2;
return dommy$core$create_element;
})()
;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 * @param {...*} var_args
 */
dommy.core.append_BANG_ = (function() {
var dommy$core$append_BANG_ = null;
var dommy$core$append_BANG___2 = (function (parent,child){
var G__10737 = parent;
G__10737.appendChild(child);

return G__10737;
});
var dommy$core$append_BANG___3 = (function() { 
var G__10742__delegate = function (parent,child,more_children){
var seq__10738_10743 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10739_10744 = null;
var count__10740_10745 = (0);
var i__10741_10746 = (0);
while(true){
if((i__10741_10746 < count__10740_10745)){
var c_10747 = cljs.core._nth.call(null,chunk__10739_10744,i__10741_10746);
dommy$core$append_BANG_.call(null,parent,c_10747);

var G__10748 = seq__10738_10743;
var G__10749 = chunk__10739_10744;
var G__10750 = count__10740_10745;
var G__10751 = (i__10741_10746 + (1));
seq__10738_10743 = G__10748;
chunk__10739_10744 = G__10749;
count__10740_10745 = G__10750;
i__10741_10746 = G__10751;
continue;
} else {
var temp__4126__auto___10752 = cljs.core.seq.call(null,seq__10738_10743);
if(temp__4126__auto___10752){
var seq__10738_10753__$1 = temp__4126__auto___10752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10738_10753__$1)){
var c__4907__auto___10754 = cljs.core.chunk_first.call(null,seq__10738_10753__$1);
var G__10755 = cljs.core.chunk_rest.call(null,seq__10738_10753__$1);
var G__10756 = c__4907__auto___10754;
var G__10757 = cljs.core.count.call(null,c__4907__auto___10754);
var G__10758 = (0);
seq__10738_10743 = G__10755;
chunk__10739_10744 = G__10756;
count__10740_10745 = G__10757;
i__10741_10746 = G__10758;
continue;
} else {
var c_10759 = cljs.core.first.call(null,seq__10738_10753__$1);
dommy$core$append_BANG_.call(null,parent,c_10759);

var G__10760 = cljs.core.next.call(null,seq__10738_10753__$1);
var G__10761 = null;
var G__10762 = (0);
var G__10763 = (0);
seq__10738_10743 = G__10760;
chunk__10739_10744 = G__10761;
count__10740_10745 = G__10762;
i__10741_10746 = G__10763;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__10742 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__10764__i = 0, G__10764__a = new Array(arguments.length -  2);
while (G__10764__i < G__10764__a.length) {G__10764__a[G__10764__i] = arguments[G__10764__i + 2]; ++G__10764__i;}
  more_children = new cljs.core.IndexedSeq(G__10764__a,0);
} 
return G__10742__delegate.call(this,parent,child,more_children);};
G__10742.cljs$lang$maxFixedArity = 2;
G__10742.cljs$lang$applyTo = (function (arglist__10765){
var parent = cljs.core.first(arglist__10765);
arglist__10765 = cljs.core.next(arglist__10765);
var child = cljs.core.first(arglist__10765);
var more_children = cljs.core.rest(arglist__10765);
return G__10742__delegate(parent,child,more_children);
});
G__10742.cljs$core$IFn$_invoke$arity$variadic = G__10742__delegate;
return G__10742;
})()
;
dommy$core$append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$append_BANG___2.call(this,parent,child);
default:
var G__10766 = null;
if (arguments.length > 2) {
var G__10767__i = 0, G__10767__a = new Array(arguments.length -  2);
while (G__10767__i < G__10767__a.length) {G__10767__a[G__10767__i] = arguments[G__10767__i + 2]; ++G__10767__i;}
G__10766 = new cljs.core.IndexedSeq(G__10767__a,0);
}
return dommy$core$append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__10766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$append_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$append_BANG_.cljs$lang$applyTo = dommy$core$append_BANG___3.cljs$lang$applyTo;
dommy$core$append_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$append_BANG___2;
dommy$core$append_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$append_BANG_;
})()
;
/**
 * Prepend `child` to `parent`
 * @param {...*} var_args
 */
dommy.core.prepend_BANG_ = (function() {
var dommy$core$prepend_BANG_ = null;
var dommy$core$prepend_BANG___2 = (function (parent,child){
var G__10773 = parent;
G__10773.insertBefore(child,parent.firstChild);

return G__10773;
});
var dommy$core$prepend_BANG___3 = (function() { 
var G__10778__delegate = function (parent,child,more_children){
var seq__10774_10779 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10775_10780 = null;
var count__10776_10781 = (0);
var i__10777_10782 = (0);
while(true){
if((i__10777_10782 < count__10776_10781)){
var c_10783 = cljs.core._nth.call(null,chunk__10775_10780,i__10777_10782);
dommy$core$prepend_BANG_.call(null,parent,c_10783);

var G__10784 = seq__10774_10779;
var G__10785 = chunk__10775_10780;
var G__10786 = count__10776_10781;
var G__10787 = (i__10777_10782 + (1));
seq__10774_10779 = G__10784;
chunk__10775_10780 = G__10785;
count__10776_10781 = G__10786;
i__10777_10782 = G__10787;
continue;
} else {
var temp__4126__auto___10788 = cljs.core.seq.call(null,seq__10774_10779);
if(temp__4126__auto___10788){
var seq__10774_10789__$1 = temp__4126__auto___10788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10774_10789__$1)){
var c__4907__auto___10790 = cljs.core.chunk_first.call(null,seq__10774_10789__$1);
var G__10791 = cljs.core.chunk_rest.call(null,seq__10774_10789__$1);
var G__10792 = c__4907__auto___10790;
var G__10793 = cljs.core.count.call(null,c__4907__auto___10790);
var G__10794 = (0);
seq__10774_10779 = G__10791;
chunk__10775_10780 = G__10792;
count__10776_10781 = G__10793;
i__10777_10782 = G__10794;
continue;
} else {
var c_10795 = cljs.core.first.call(null,seq__10774_10789__$1);
dommy$core$prepend_BANG_.call(null,parent,c_10795);

var G__10796 = cljs.core.next.call(null,seq__10774_10789__$1);
var G__10797 = null;
var G__10798 = (0);
var G__10799 = (0);
seq__10774_10779 = G__10796;
chunk__10775_10780 = G__10797;
count__10776_10781 = G__10798;
i__10777_10782 = G__10799;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__10778 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__10800__i = 0, G__10800__a = new Array(arguments.length -  2);
while (G__10800__i < G__10800__a.length) {G__10800__a[G__10800__i] = arguments[G__10800__i + 2]; ++G__10800__i;}
  more_children = new cljs.core.IndexedSeq(G__10800__a,0);
} 
return G__10778__delegate.call(this,parent,child,more_children);};
G__10778.cljs$lang$maxFixedArity = 2;
G__10778.cljs$lang$applyTo = (function (arglist__10801){
var parent = cljs.core.first(arglist__10801);
arglist__10801 = cljs.core.next(arglist__10801);
var child = cljs.core.first(arglist__10801);
var more_children = cljs.core.rest(arglist__10801);
return G__10778__delegate(parent,child,more_children);
});
G__10778.cljs$core$IFn$_invoke$arity$variadic = G__10778__delegate;
return G__10778;
})()
;
dommy$core$prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$prepend_BANG___2.call(this,parent,child);
default:
var G__10802 = null;
if (arguments.length > 2) {
var G__10803__i = 0, G__10803__a = new Array(arguments.length -  2);
while (G__10803__i < G__10803__a.length) {G__10803__a[G__10803__i] = arguments[G__10803__i + 2]; ++G__10803__i;}
G__10802 = new cljs.core.IndexedSeq(G__10803__a,0);
}
return dommy$core$prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__10802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$prepend_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$prepend_BANG_.cljs$lang$applyTo = dommy$core$prepend_BANG___3.cljs$lang$applyTo;
dommy$core$prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$prepend_BANG___2;
dommy$core$prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dommy$core$prepend_BANG_;
})()
;
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4124__auto___10804 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___10804)){
var next_10805 = temp__4124__auto___10804;
dommy.core.insert_before_BANG_.call(null,elem,next_10805);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function() {
var dommy$core$remove_BANG_ = null;
var dommy$core$remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy$core$remove_BANG_.call(null,p,elem);
});
var dommy$core$remove_BANG___2 = (function (p,elem){
var G__10807 = p;
G__10807.removeChild(elem);

return G__10807;
});
dommy$core$remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return dommy$core$remove_BANG___1.call(this,p);
case 2:
return dommy$core$remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dommy$core$remove_BANG_.cljs$core$IFn$_invoke$arity$1 = dommy$core$remove_BANG___1;
dommy$core$remove_BANG_.cljs$core$IFn$_invoke$arity$2 = dommy$core$remove_BANG___2;
return dommy$core$remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10808){
var vec__10809 = p__10808;
var special_mouse_event = cljs.core.nth.call(null,vec__10809,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__10809,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__10809,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__10809,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4122__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4110__auto__ = related_target;
if(cljs.core.truth_(and__4110__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4110__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__10809,special_mouse_event,real_mouse_event))
});})(vec__10809,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4110__auto__ = selected_target;
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4110__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4122__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * @param {...*} var_args
 */
dommy.core.update_event_listeners_BANG_ = (function() { 
var dommy$core$update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var dommy$core$update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__10810__i = 0, G__10810__a = new Array(arguments.length -  2);
while (G__10810__i < G__10810__a.length) {G__10810__a[G__10810__i] = arguments[G__10810__i + 2]; ++G__10810__i;}
  args = new cljs.core.IndexedSeq(G__10810__a,0);
} 
return dommy$core$update_event_listeners_BANG___delegate.call(this,elem,f,args);};
dommy$core$update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__10811){
var elem = cljs.core.first(arglist__10811);
arglist__10811 = cljs.core.next(arglist__10811);
var f = cljs.core.first(arglist__10811);
var args = cljs.core.rest(arglist__10811);
return dommy$core$update_event_listeners_BANG___delegate(elem,f,args);
});
dommy$core$update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$update_event_listeners_BANG___delegate;
return dommy$core$update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 * (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 * (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 * (listen! some-elem :click click-handler :hover hover-handler)
 * @param {...*} var_args
 */
dommy.core.listen_BANG_ = (function() { 
var dommy$core$listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__10835_10858 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10859 = cljs.core.nth.call(null,vec__10835_10858,(0),null);
var selector_10860 = cljs.core.nth.call(null,vec__10835_10858,(1),null);
var seq__10836_10861 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10843_10862 = null;
var count__10844_10863 = (0);
var i__10845_10864 = (0);
while(true){
if((i__10845_10864 < count__10844_10863)){
var vec__10852_10865 = cljs.core._nth.call(null,chunk__10843_10862,i__10845_10864);
var orig_type_10866 = cljs.core.nth.call(null,vec__10852_10865,(0),null);
var f_10867 = cljs.core.nth.call(null,vec__10852_10865,(1),null);
var seq__10846_10868 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10866,new cljs.core.PersistentArrayMap.fromArray([orig_type_10866,cljs.core.identity], true, false)));
var chunk__10848_10869 = null;
var count__10849_10870 = (0);
var i__10850_10871 = (0);
while(true){
if((i__10850_10871 < count__10849_10870)){
var vec__10853_10872 = cljs.core._nth.call(null,chunk__10848_10869,i__10850_10871);
var actual_type_10873 = cljs.core.nth.call(null,vec__10853_10872,(0),null);
var factory_10874 = cljs.core.nth.call(null,vec__10853_10872,(1),null);
var canonical_f_10875 = (cljs.core.truth_(selector_10860)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10859,selector_10860):cljs.core.identity).call(null,factory_10874.call(null,f_10867));
dommy.core.update_event_listeners_BANG_.call(null,elem_10859,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10860,actual_type_10873,f_10867], null),canonical_f_10875);

if(cljs.core.truth_(elem_10859.addEventListener)){
elem_10859.addEventListener(cljs.core.name.call(null,actual_type_10873),canonical_f_10875);
} else {
elem_10859.attachEvent(cljs.core.name.call(null,actual_type_10873),canonical_f_10875);
}

var G__10876 = seq__10846_10868;
var G__10877 = chunk__10848_10869;
var G__10878 = count__10849_10870;
var G__10879 = (i__10850_10871 + (1));
seq__10846_10868 = G__10876;
chunk__10848_10869 = G__10877;
count__10849_10870 = G__10878;
i__10850_10871 = G__10879;
continue;
} else {
var temp__4126__auto___10880 = cljs.core.seq.call(null,seq__10846_10868);
if(temp__4126__auto___10880){
var seq__10846_10881__$1 = temp__4126__auto___10880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10846_10881__$1)){
var c__4907__auto___10882 = cljs.core.chunk_first.call(null,seq__10846_10881__$1);
var G__10883 = cljs.core.chunk_rest.call(null,seq__10846_10881__$1);
var G__10884 = c__4907__auto___10882;
var G__10885 = cljs.core.count.call(null,c__4907__auto___10882);
var G__10886 = (0);
seq__10846_10868 = G__10883;
chunk__10848_10869 = G__10884;
count__10849_10870 = G__10885;
i__10850_10871 = G__10886;
continue;
} else {
var vec__10854_10887 = cljs.core.first.call(null,seq__10846_10881__$1);
var actual_type_10888 = cljs.core.nth.call(null,vec__10854_10887,(0),null);
var factory_10889 = cljs.core.nth.call(null,vec__10854_10887,(1),null);
var canonical_f_10890 = (cljs.core.truth_(selector_10860)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10859,selector_10860):cljs.core.identity).call(null,factory_10889.call(null,f_10867));
dommy.core.update_event_listeners_BANG_.call(null,elem_10859,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10860,actual_type_10888,f_10867], null),canonical_f_10890);

if(cljs.core.truth_(elem_10859.addEventListener)){
elem_10859.addEventListener(cljs.core.name.call(null,actual_type_10888),canonical_f_10890);
} else {
elem_10859.attachEvent(cljs.core.name.call(null,actual_type_10888),canonical_f_10890);
}

var G__10891 = cljs.core.next.call(null,seq__10846_10881__$1);
var G__10892 = null;
var G__10893 = (0);
var G__10894 = (0);
seq__10846_10868 = G__10891;
chunk__10848_10869 = G__10892;
count__10849_10870 = G__10893;
i__10850_10871 = G__10894;
continue;
}
} else {
}
}
break;
}

var G__10895 = seq__10836_10861;
var G__10896 = chunk__10843_10862;
var G__10897 = count__10844_10863;
var G__10898 = (i__10845_10864 + (1));
seq__10836_10861 = G__10895;
chunk__10843_10862 = G__10896;
count__10844_10863 = G__10897;
i__10845_10864 = G__10898;
continue;
} else {
var temp__4126__auto___10899 = cljs.core.seq.call(null,seq__10836_10861);
if(temp__4126__auto___10899){
var seq__10836_10900__$1 = temp__4126__auto___10899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10836_10900__$1)){
var c__4907__auto___10901 = cljs.core.chunk_first.call(null,seq__10836_10900__$1);
var G__10902 = cljs.core.chunk_rest.call(null,seq__10836_10900__$1);
var G__10903 = c__4907__auto___10901;
var G__10904 = cljs.core.count.call(null,c__4907__auto___10901);
var G__10905 = (0);
seq__10836_10861 = G__10902;
chunk__10843_10862 = G__10903;
count__10844_10863 = G__10904;
i__10845_10864 = G__10905;
continue;
} else {
var vec__10855_10906 = cljs.core.first.call(null,seq__10836_10900__$1);
var orig_type_10907 = cljs.core.nth.call(null,vec__10855_10906,(0),null);
var f_10908 = cljs.core.nth.call(null,vec__10855_10906,(1),null);
var seq__10837_10909 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10907,new cljs.core.PersistentArrayMap.fromArray([orig_type_10907,cljs.core.identity], true, false)));
var chunk__10839_10910 = null;
var count__10840_10911 = (0);
var i__10841_10912 = (0);
while(true){
if((i__10841_10912 < count__10840_10911)){
var vec__10856_10913 = cljs.core._nth.call(null,chunk__10839_10910,i__10841_10912);
var actual_type_10914 = cljs.core.nth.call(null,vec__10856_10913,(0),null);
var factory_10915 = cljs.core.nth.call(null,vec__10856_10913,(1),null);
var canonical_f_10916 = (cljs.core.truth_(selector_10860)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10859,selector_10860):cljs.core.identity).call(null,factory_10915.call(null,f_10908));
dommy.core.update_event_listeners_BANG_.call(null,elem_10859,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10860,actual_type_10914,f_10908], null),canonical_f_10916);

if(cljs.core.truth_(elem_10859.addEventListener)){
elem_10859.addEventListener(cljs.core.name.call(null,actual_type_10914),canonical_f_10916);
} else {
elem_10859.attachEvent(cljs.core.name.call(null,actual_type_10914),canonical_f_10916);
}

var G__10917 = seq__10837_10909;
var G__10918 = chunk__10839_10910;
var G__10919 = count__10840_10911;
var G__10920 = (i__10841_10912 + (1));
seq__10837_10909 = G__10917;
chunk__10839_10910 = G__10918;
count__10840_10911 = G__10919;
i__10841_10912 = G__10920;
continue;
} else {
var temp__4126__auto___10921__$1 = cljs.core.seq.call(null,seq__10837_10909);
if(temp__4126__auto___10921__$1){
var seq__10837_10922__$1 = temp__4126__auto___10921__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10837_10922__$1)){
var c__4907__auto___10923 = cljs.core.chunk_first.call(null,seq__10837_10922__$1);
var G__10924 = cljs.core.chunk_rest.call(null,seq__10837_10922__$1);
var G__10925 = c__4907__auto___10923;
var G__10926 = cljs.core.count.call(null,c__4907__auto___10923);
var G__10927 = (0);
seq__10837_10909 = G__10924;
chunk__10839_10910 = G__10925;
count__10840_10911 = G__10926;
i__10841_10912 = G__10927;
continue;
} else {
var vec__10857_10928 = cljs.core.first.call(null,seq__10837_10922__$1);
var actual_type_10929 = cljs.core.nth.call(null,vec__10857_10928,(0),null);
var factory_10930 = cljs.core.nth.call(null,vec__10857_10928,(1),null);
var canonical_f_10931 = (cljs.core.truth_(selector_10860)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10859,selector_10860):cljs.core.identity).call(null,factory_10930.call(null,f_10908));
dommy.core.update_event_listeners_BANG_.call(null,elem_10859,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10860,actual_type_10929,f_10908], null),canonical_f_10931);

if(cljs.core.truth_(elem_10859.addEventListener)){
elem_10859.addEventListener(cljs.core.name.call(null,actual_type_10929),canonical_f_10931);
} else {
elem_10859.attachEvent(cljs.core.name.call(null,actual_type_10929),canonical_f_10931);
}

var G__10932 = cljs.core.next.call(null,seq__10837_10922__$1);
var G__10933 = null;
var G__10934 = (0);
var G__10935 = (0);
seq__10837_10909 = G__10932;
chunk__10839_10910 = G__10933;
count__10840_10911 = G__10934;
i__10841_10912 = G__10935;
continue;
}
} else {
}
}
break;
}

var G__10936 = cljs.core.next.call(null,seq__10836_10900__$1);
var G__10937 = null;
var G__10938 = (0);
var G__10939 = (0);
seq__10836_10861 = G__10936;
chunk__10843_10862 = G__10937;
count__10844_10863 = G__10938;
i__10845_10864 = G__10939;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__10940__i = 0, G__10940__a = new Array(arguments.length -  1);
while (G__10940__i < G__10940__a.length) {G__10940__a[G__10940__i] = arguments[G__10940__i + 1]; ++G__10940__i;}
  type_fs = new cljs.core.IndexedSeq(G__10940__a,0);
} 
return dommy$core$listen_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_BANG_.cljs$lang$applyTo = (function (arglist__10941){
var elem_sel = cljs.core.first(arglist__10941);
var type_fs = cljs.core.rest(arglist__10941);
return dommy$core$listen_BANG___delegate(elem_sel,type_fs);
});
dommy$core$listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$listen_BANG___delegate;
return dommy$core$listen_BANG_;
})()
;
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 * The following forms are allowed, and will remove all handlers
 * that match the parameters passed in:
 * 
 * (unlisten! [elem :.selector] :click event-listener)
 * 
 * (unlisten! [elem :.selector]
 * :click event-listener
 * :mouseover other-event-listener)
 * @param {...*} var_args
 */
dommy.core.unlisten_BANG_ = (function() { 
var dommy$core$unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__10965_10988 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10989 = cljs.core.nth.call(null,vec__10965_10988,(0),null);
var selector_10990 = cljs.core.nth.call(null,vec__10965_10988,(1),null);
var seq__10966_10991 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10973_10992 = null;
var count__10974_10993 = (0);
var i__10975_10994 = (0);
while(true){
if((i__10975_10994 < count__10974_10993)){
var vec__10982_10995 = cljs.core._nth.call(null,chunk__10973_10992,i__10975_10994);
var orig_type_10996 = cljs.core.nth.call(null,vec__10982_10995,(0),null);
var f_10997 = cljs.core.nth.call(null,vec__10982_10995,(1),null);
var seq__10976_10998 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10996,new cljs.core.PersistentArrayMap.fromArray([orig_type_10996,cljs.core.identity], true, false)));
var chunk__10978_10999 = null;
var count__10979_11000 = (0);
var i__10980_11001 = (0);
while(true){
if((i__10980_11001 < count__10979_11000)){
var vec__10983_11002 = cljs.core._nth.call(null,chunk__10978_10999,i__10980_11001);
var actual_type_11003 = cljs.core.nth.call(null,vec__10983_11002,(0),null);
var __11004 = cljs.core.nth.call(null,vec__10983_11002,(1),null);
var keys_11005 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10990,actual_type_11003,f_10997], null);
var canonical_f_11006 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10989),keys_11005);
dommy.core.update_event_listeners_BANG_.call(null,elem_10989,dommy.utils.dissoc_in,keys_11005);

if(cljs.core.truth_(elem_10989.removeEventListener)){
elem_10989.removeEventListener(cljs.core.name.call(null,actual_type_11003),canonical_f_11006);
} else {
elem_10989.detachEvent(cljs.core.name.call(null,actual_type_11003),canonical_f_11006);
}

var G__11007 = seq__10976_10998;
var G__11008 = chunk__10978_10999;
var G__11009 = count__10979_11000;
var G__11010 = (i__10980_11001 + (1));
seq__10976_10998 = G__11007;
chunk__10978_10999 = G__11008;
count__10979_11000 = G__11009;
i__10980_11001 = G__11010;
continue;
} else {
var temp__4126__auto___11011 = cljs.core.seq.call(null,seq__10976_10998);
if(temp__4126__auto___11011){
var seq__10976_11012__$1 = temp__4126__auto___11011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10976_11012__$1)){
var c__4907__auto___11013 = cljs.core.chunk_first.call(null,seq__10976_11012__$1);
var G__11014 = cljs.core.chunk_rest.call(null,seq__10976_11012__$1);
var G__11015 = c__4907__auto___11013;
var G__11016 = cljs.core.count.call(null,c__4907__auto___11013);
var G__11017 = (0);
seq__10976_10998 = G__11014;
chunk__10978_10999 = G__11015;
count__10979_11000 = G__11016;
i__10980_11001 = G__11017;
continue;
} else {
var vec__10984_11018 = cljs.core.first.call(null,seq__10976_11012__$1);
var actual_type_11019 = cljs.core.nth.call(null,vec__10984_11018,(0),null);
var __11020 = cljs.core.nth.call(null,vec__10984_11018,(1),null);
var keys_11021 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10990,actual_type_11019,f_10997], null);
var canonical_f_11022 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10989),keys_11021);
dommy.core.update_event_listeners_BANG_.call(null,elem_10989,dommy.utils.dissoc_in,keys_11021);

if(cljs.core.truth_(elem_10989.removeEventListener)){
elem_10989.removeEventListener(cljs.core.name.call(null,actual_type_11019),canonical_f_11022);
} else {
elem_10989.detachEvent(cljs.core.name.call(null,actual_type_11019),canonical_f_11022);
}

var G__11023 = cljs.core.next.call(null,seq__10976_11012__$1);
var G__11024 = null;
var G__11025 = (0);
var G__11026 = (0);
seq__10976_10998 = G__11023;
chunk__10978_10999 = G__11024;
count__10979_11000 = G__11025;
i__10980_11001 = G__11026;
continue;
}
} else {
}
}
break;
}

var G__11027 = seq__10966_10991;
var G__11028 = chunk__10973_10992;
var G__11029 = count__10974_10993;
var G__11030 = (i__10975_10994 + (1));
seq__10966_10991 = G__11027;
chunk__10973_10992 = G__11028;
count__10974_10993 = G__11029;
i__10975_10994 = G__11030;
continue;
} else {
var temp__4126__auto___11031 = cljs.core.seq.call(null,seq__10966_10991);
if(temp__4126__auto___11031){
var seq__10966_11032__$1 = temp__4126__auto___11031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10966_11032__$1)){
var c__4907__auto___11033 = cljs.core.chunk_first.call(null,seq__10966_11032__$1);
var G__11034 = cljs.core.chunk_rest.call(null,seq__10966_11032__$1);
var G__11035 = c__4907__auto___11033;
var G__11036 = cljs.core.count.call(null,c__4907__auto___11033);
var G__11037 = (0);
seq__10966_10991 = G__11034;
chunk__10973_10992 = G__11035;
count__10974_10993 = G__11036;
i__10975_10994 = G__11037;
continue;
} else {
var vec__10985_11038 = cljs.core.first.call(null,seq__10966_11032__$1);
var orig_type_11039 = cljs.core.nth.call(null,vec__10985_11038,(0),null);
var f_11040 = cljs.core.nth.call(null,vec__10985_11038,(1),null);
var seq__10967_11041 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11039,new cljs.core.PersistentArrayMap.fromArray([orig_type_11039,cljs.core.identity], true, false)));
var chunk__10969_11042 = null;
var count__10970_11043 = (0);
var i__10971_11044 = (0);
while(true){
if((i__10971_11044 < count__10970_11043)){
var vec__10986_11045 = cljs.core._nth.call(null,chunk__10969_11042,i__10971_11044);
var actual_type_11046 = cljs.core.nth.call(null,vec__10986_11045,(0),null);
var __11047 = cljs.core.nth.call(null,vec__10986_11045,(1),null);
var keys_11048 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10990,actual_type_11046,f_11040], null);
var canonical_f_11049 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10989),keys_11048);
dommy.core.update_event_listeners_BANG_.call(null,elem_10989,dommy.utils.dissoc_in,keys_11048);

if(cljs.core.truth_(elem_10989.removeEventListener)){
elem_10989.removeEventListener(cljs.core.name.call(null,actual_type_11046),canonical_f_11049);
} else {
elem_10989.detachEvent(cljs.core.name.call(null,actual_type_11046),canonical_f_11049);
}

var G__11050 = seq__10967_11041;
var G__11051 = chunk__10969_11042;
var G__11052 = count__10970_11043;
var G__11053 = (i__10971_11044 + (1));
seq__10967_11041 = G__11050;
chunk__10969_11042 = G__11051;
count__10970_11043 = G__11052;
i__10971_11044 = G__11053;
continue;
} else {
var temp__4126__auto___11054__$1 = cljs.core.seq.call(null,seq__10967_11041);
if(temp__4126__auto___11054__$1){
var seq__10967_11055__$1 = temp__4126__auto___11054__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10967_11055__$1)){
var c__4907__auto___11056 = cljs.core.chunk_first.call(null,seq__10967_11055__$1);
var G__11057 = cljs.core.chunk_rest.call(null,seq__10967_11055__$1);
var G__11058 = c__4907__auto___11056;
var G__11059 = cljs.core.count.call(null,c__4907__auto___11056);
var G__11060 = (0);
seq__10967_11041 = G__11057;
chunk__10969_11042 = G__11058;
count__10970_11043 = G__11059;
i__10971_11044 = G__11060;
continue;
} else {
var vec__10987_11061 = cljs.core.first.call(null,seq__10967_11055__$1);
var actual_type_11062 = cljs.core.nth.call(null,vec__10987_11061,(0),null);
var __11063 = cljs.core.nth.call(null,vec__10987_11061,(1),null);
var keys_11064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10990,actual_type_11062,f_11040], null);
var canonical_f_11065 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10989),keys_11064);
dommy.core.update_event_listeners_BANG_.call(null,elem_10989,dommy.utils.dissoc_in,keys_11064);

if(cljs.core.truth_(elem_10989.removeEventListener)){
elem_10989.removeEventListener(cljs.core.name.call(null,actual_type_11062),canonical_f_11065);
} else {
elem_10989.detachEvent(cljs.core.name.call(null,actual_type_11062),canonical_f_11065);
}

var G__11066 = cljs.core.next.call(null,seq__10967_11055__$1);
var G__11067 = null;
var G__11068 = (0);
var G__11069 = (0);
seq__10967_11041 = G__11066;
chunk__10969_11042 = G__11067;
count__10970_11043 = G__11068;
i__10971_11044 = G__11069;
continue;
}
} else {
}
}
break;
}

var G__11070 = cljs.core.next.call(null,seq__10966_11032__$1);
var G__11071 = null;
var G__11072 = (0);
var G__11073 = (0);
seq__10966_10991 = G__11070;
chunk__10973_10992 = G__11071;
count__10974_10993 = G__11072;
i__10975_10994 = G__11073;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__11074__i = 0, G__11074__a = new Array(arguments.length -  1);
while (G__11074__i < G__11074__a.length) {G__11074__a[G__11074__i] = arguments[G__11074__i + 1]; ++G__11074__i;}
  type_fs = new cljs.core.IndexedSeq(G__11074__a,0);
} 
return dommy$core$unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$unlisten_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11075){
var elem_sel = cljs.core.first(arglist__11075);
var type_fs = cljs.core.rest(arglist__11075);
return dommy$core$unlisten_BANG___delegate(elem_sel,type_fs);
});
dommy$core$unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$unlisten_BANG___delegate;
return dommy$core$unlisten_BANG_;
})()
;
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 * @param {...*} var_args
 */
dommy.core.listen_once_BANG_ = (function() { 
var dommy$core$listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__11083_11090 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11091 = cljs.core.nth.call(null,vec__11083_11090,(0),null);
var selector_11092 = cljs.core.nth.call(null,vec__11083_11090,(1),null);
var seq__11084_11093 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11085_11094 = null;
var count__11086_11095 = (0);
var i__11087_11096 = (0);
while(true){
if((i__11087_11096 < count__11086_11095)){
var vec__11088_11097 = cljs.core._nth.call(null,chunk__11085_11094,i__11087_11096);
var type_11098 = cljs.core.nth.call(null,vec__11088_11097,(0),null);
var f_11099 = cljs.core.nth.call(null,vec__11088_11097,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11098,((function (seq__11084_11093,chunk__11085_11094,count__11086_11095,i__11087_11096,vec__11088_11097,type_11098,f_11099,vec__11083_11090,elem_11091,selector_11092){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11098,dommy$core$listen_once_BANG__$_this_fn);

return f_11099.call(null,e);
});})(seq__11084_11093,chunk__11085_11094,count__11086_11095,i__11087_11096,vec__11088_11097,type_11098,f_11099,vec__11083_11090,elem_11091,selector_11092))
);

var G__11100 = seq__11084_11093;
var G__11101 = chunk__11085_11094;
var G__11102 = count__11086_11095;
var G__11103 = (i__11087_11096 + (1));
seq__11084_11093 = G__11100;
chunk__11085_11094 = G__11101;
count__11086_11095 = G__11102;
i__11087_11096 = G__11103;
continue;
} else {
var temp__4126__auto___11104 = cljs.core.seq.call(null,seq__11084_11093);
if(temp__4126__auto___11104){
var seq__11084_11105__$1 = temp__4126__auto___11104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11084_11105__$1)){
var c__4907__auto___11106 = cljs.core.chunk_first.call(null,seq__11084_11105__$1);
var G__11107 = cljs.core.chunk_rest.call(null,seq__11084_11105__$1);
var G__11108 = c__4907__auto___11106;
var G__11109 = cljs.core.count.call(null,c__4907__auto___11106);
var G__11110 = (0);
seq__11084_11093 = G__11107;
chunk__11085_11094 = G__11108;
count__11086_11095 = G__11109;
i__11087_11096 = G__11110;
continue;
} else {
var vec__11089_11111 = cljs.core.first.call(null,seq__11084_11105__$1);
var type_11112 = cljs.core.nth.call(null,vec__11089_11111,(0),null);
var f_11113 = cljs.core.nth.call(null,vec__11089_11111,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11112,((function (seq__11084_11093,chunk__11085_11094,count__11086_11095,i__11087_11096,vec__11089_11111,type_11112,f_11113,seq__11084_11105__$1,temp__4126__auto___11104,vec__11083_11090,elem_11091,selector_11092){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11112,dommy$core$listen_once_BANG__$_this_fn);

return f_11113.call(null,e);
});})(seq__11084_11093,chunk__11085_11094,count__11086_11095,i__11087_11096,vec__11089_11111,type_11112,f_11113,seq__11084_11105__$1,temp__4126__auto___11104,vec__11083_11090,elem_11091,selector_11092))
);

var G__11114 = cljs.core.next.call(null,seq__11084_11105__$1);
var G__11115 = null;
var G__11116 = (0);
var G__11117 = (0);
seq__11084_11093 = G__11114;
chunk__11085_11094 = G__11115;
count__11086_11095 = G__11116;
i__11087_11096 = G__11117;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var dommy$core$listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__11118__i = 0, G__11118__a = new Array(arguments.length -  1);
while (G__11118__i < G__11118__a.length) {G__11118__a[G__11118__i] = arguments[G__11118__i + 1]; ++G__11118__i;}
  type_fs = new cljs.core.IndexedSeq(G__11118__a,0);
} 
return dommy$core$listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_once_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11119){
var elem_sel = cljs.core.first(arglist__11119);
var type_fs = cljs.core.rest(arglist__11119);
return dommy$core$listen_once_BANG___delegate(elem_sel,type_fs);
});
dommy$core$listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$listen_once_BANG___delegate;
return dommy$core$listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map