// Compiled by ClojureScript 0.0-3211 {}
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
var or__16143__auto__ = elem.textContent;
if(cljs.core.truth_(or__16143__auto__)){
return or__16143__auto__;
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
dommy.core.style = (function dommy$core$style(){
var G__23964 = arguments.length;
switch (G__23964) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
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
dommy.core.matches_pred = (function dommy$core$matches_pred(){
var G__23967 = arguments.length;
switch (G__23967) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(){
var G__23971 = arguments.length;
switch (G__23971) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__23969_SHARP_){
return !((p1__23969_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
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
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(){
var argseq__17183__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17183__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__23975_23981 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__23976_23982 = null;
var count__23977_23983 = (0);
var i__23978_23984 = (0);
while(true){
if((i__23978_23984 < count__23977_23983)){
var vec__23979_23985 = cljs.core._nth.call(null,chunk__23976_23982,i__23978_23984);
var k_23986 = cljs.core.nth.call(null,vec__23979_23985,(0),null);
var v_23987 = cljs.core.nth.call(null,vec__23979_23985,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_23986),v_23987);

var G__23988 = seq__23975_23981;
var G__23989 = chunk__23976_23982;
var G__23990 = count__23977_23983;
var G__23991 = (i__23978_23984 + (1));
seq__23975_23981 = G__23988;
chunk__23976_23982 = G__23989;
count__23977_23983 = G__23990;
i__23978_23984 = G__23991;
continue;
} else {
var temp__4126__auto___23992 = cljs.core.seq.call(null,seq__23975_23981);
if(temp__4126__auto___23992){
var seq__23975_23993__$1 = temp__4126__auto___23992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23975_23993__$1)){
var c__16928__auto___23994 = cljs.core.chunk_first.call(null,seq__23975_23993__$1);
var G__23995 = cljs.core.chunk_rest.call(null,seq__23975_23993__$1);
var G__23996 = c__16928__auto___23994;
var G__23997 = cljs.core.count.call(null,c__16928__auto___23994);
var G__23998 = (0);
seq__23975_23981 = G__23995;
chunk__23976_23982 = G__23996;
count__23977_23983 = G__23997;
i__23978_23984 = G__23998;
continue;
} else {
var vec__23980_23999 = cljs.core.first.call(null,seq__23975_23993__$1);
var k_24000 = cljs.core.nth.call(null,vec__23980_23999,(0),null);
var v_24001 = cljs.core.nth.call(null,vec__23980_23999,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_24000),v_24001);

var G__24002 = cljs.core.next.call(null,seq__23975_23993__$1);
var G__24003 = null;
var G__24004 = (0);
var G__24005 = (0);
seq__23975_23981 = G__24002;
chunk__23976_23982 = G__24003;
count__23977_23983 = G__24004;
i__23978_23984 = G__24005;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq23973){
var G__23974 = cljs.core.first.call(null,seq23973);
var seq23973__$1 = cljs.core.next.call(null,seq23973);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23974,seq23973__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var argseq__17183__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17183__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__24008_24014 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__24009_24015 = null;
var count__24010_24016 = (0);
var i__24011_24017 = (0);
while(true){
if((i__24011_24017 < count__24010_24016)){
var vec__24012_24018 = cljs.core._nth.call(null,chunk__24009_24015,i__24011_24017);
var k_24019 = cljs.core.nth.call(null,vec__24012_24018,(0),null);
var v_24020 = cljs.core.nth.call(null,vec__24012_24018,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_24019,[cljs.core.str(v_24020),cljs.core.str("px")].join(''));

var G__24021 = seq__24008_24014;
var G__24022 = chunk__24009_24015;
var G__24023 = count__24010_24016;
var G__24024 = (i__24011_24017 + (1));
seq__24008_24014 = G__24021;
chunk__24009_24015 = G__24022;
count__24010_24016 = G__24023;
i__24011_24017 = G__24024;
continue;
} else {
var temp__4126__auto___24025 = cljs.core.seq.call(null,seq__24008_24014);
if(temp__4126__auto___24025){
var seq__24008_24026__$1 = temp__4126__auto___24025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24008_24026__$1)){
var c__16928__auto___24027 = cljs.core.chunk_first.call(null,seq__24008_24026__$1);
var G__24028 = cljs.core.chunk_rest.call(null,seq__24008_24026__$1);
var G__24029 = c__16928__auto___24027;
var G__24030 = cljs.core.count.call(null,c__16928__auto___24027);
var G__24031 = (0);
seq__24008_24014 = G__24028;
chunk__24009_24015 = G__24029;
count__24010_24016 = G__24030;
i__24011_24017 = G__24031;
continue;
} else {
var vec__24013_24032 = cljs.core.first.call(null,seq__24008_24026__$1);
var k_24033 = cljs.core.nth.call(null,vec__24013_24032,(0),null);
var v_24034 = cljs.core.nth.call(null,vec__24013_24032,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_24033,[cljs.core.str(v_24034),cljs.core.str("px")].join(''));

var G__24035 = cljs.core.next.call(null,seq__24008_24026__$1);
var G__24036 = null;
var G__24037 = (0);
var G__24038 = (0);
seq__24008_24014 = G__24035;
chunk__24009_24015 = G__24036;
count__24010_24016 = G__24037;
i__24011_24017 = G__24038;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq24006){
var G__24007 = cljs.core.first.call(null,seq24006);
var seq24006__$1 = cljs.core.next.call(null,seq24006);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24007,seq24006__$1);
});
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
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(){
var G__24044 = arguments.length;
switch (G__24044) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__17194__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17194__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,"true");
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__24045 = elem;
(G__24045[k__$1] = v);

return G__24045;
} else {
var G__24046 = elem;
G__24046.setAttribute(k__$1,v);

return G__24046;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__24047_24054 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__24048_24055 = null;
var count__24049_24056 = (0);
var i__24050_24057 = (0);
while(true){
if((i__24050_24057 < count__24049_24056)){
var vec__24051_24058 = cljs.core._nth.call(null,chunk__24048_24055,i__24050_24057);
var k_24059__$1 = cljs.core.nth.call(null,vec__24051_24058,(0),null);
var v_24060__$1 = cljs.core.nth.call(null,vec__24051_24058,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_24059__$1,v_24060__$1);

var G__24061 = seq__24047_24054;
var G__24062 = chunk__24048_24055;
var G__24063 = count__24049_24056;
var G__24064 = (i__24050_24057 + (1));
seq__24047_24054 = G__24061;
chunk__24048_24055 = G__24062;
count__24049_24056 = G__24063;
i__24050_24057 = G__24064;
continue;
} else {
var temp__4126__auto___24065 = cljs.core.seq.call(null,seq__24047_24054);
if(temp__4126__auto___24065){
var seq__24047_24066__$1 = temp__4126__auto___24065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24047_24066__$1)){
var c__16928__auto___24067 = cljs.core.chunk_first.call(null,seq__24047_24066__$1);
var G__24068 = cljs.core.chunk_rest.call(null,seq__24047_24066__$1);
var G__24069 = c__16928__auto___24067;
var G__24070 = cljs.core.count.call(null,c__16928__auto___24067);
var G__24071 = (0);
seq__24047_24054 = G__24068;
chunk__24048_24055 = G__24069;
count__24049_24056 = G__24070;
i__24050_24057 = G__24071;
continue;
} else {
var vec__24052_24072 = cljs.core.first.call(null,seq__24047_24066__$1);
var k_24073__$1 = cljs.core.nth.call(null,vec__24052_24072,(0),null);
var v_24074__$1 = cljs.core.nth.call(null,vec__24052_24072,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_24073__$1,v_24074__$1);

var G__24075 = cljs.core.next.call(null,seq__24047_24066__$1);
var G__24076 = null;
var G__24077 = (0);
var G__24078 = (0);
seq__24047_24054 = G__24075;
chunk__24048_24055 = G__24076;
count__24049_24056 = G__24077;
i__24050_24057 = G__24078;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq24039){
var G__24040 = cljs.core.first.call(null,seq24039);
var seq24039__$1 = cljs.core.next.call(null,seq24039);
var G__24041 = cljs.core.first.call(null,seq24039__$1);
var seq24039__$2 = cljs.core.next.call(null,seq24039__$1);
var G__24042 = cljs.core.first.call(null,seq24039__$2);
var seq24039__$3 = cljs.core.next.call(null,seq24039__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24040,G__24041,G__24042,seq24039__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var G__24083 = arguments.length;
switch (G__24083) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17194__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17194__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_24089__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_24089__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_24089__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__24084_24090 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__24085_24091 = null;
var count__24086_24092 = (0);
var i__24087_24093 = (0);
while(true){
if((i__24087_24093 < count__24086_24092)){
var k_24094__$1 = cljs.core._nth.call(null,chunk__24085_24091,i__24087_24093);
dommy.core.remove_attr_BANG_.call(null,elem,k_24094__$1);

var G__24095 = seq__24084_24090;
var G__24096 = chunk__24085_24091;
var G__24097 = count__24086_24092;
var G__24098 = (i__24087_24093 + (1));
seq__24084_24090 = G__24095;
chunk__24085_24091 = G__24096;
count__24086_24092 = G__24097;
i__24087_24093 = G__24098;
continue;
} else {
var temp__4126__auto___24099 = cljs.core.seq.call(null,seq__24084_24090);
if(temp__4126__auto___24099){
var seq__24084_24100__$1 = temp__4126__auto___24099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24084_24100__$1)){
var c__16928__auto___24101 = cljs.core.chunk_first.call(null,seq__24084_24100__$1);
var G__24102 = cljs.core.chunk_rest.call(null,seq__24084_24100__$1);
var G__24103 = c__16928__auto___24101;
var G__24104 = cljs.core.count.call(null,c__16928__auto___24101);
var G__24105 = (0);
seq__24084_24090 = G__24102;
chunk__24085_24091 = G__24103;
count__24086_24092 = G__24104;
i__24087_24093 = G__24105;
continue;
} else {
var k_24106__$1 = cljs.core.first.call(null,seq__24084_24100__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_24106__$1);

var G__24107 = cljs.core.next.call(null,seq__24084_24100__$1);
var G__24108 = null;
var G__24109 = (0);
var G__24110 = (0);
seq__24084_24090 = G__24107;
chunk__24085_24091 = G__24108;
count__24086_24092 = G__24109;
i__24087_24093 = G__24110;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq24079){
var G__24080 = cljs.core.first.call(null,seq24079);
var seq24079__$1 = cljs.core.next.call(null,seq24079);
var G__24081 = cljs.core.first.call(null,seq24079__$1);
var seq24079__$2 = cljs.core.next.call(null,seq24079__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24080,G__24081,seq24079__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var G__24112 = arguments.length;
switch (G__24112) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(){
var G__24118 = arguments.length;
switch (G__24118) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17194__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17194__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___24132 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___24132)){
var class_list_24133 = temp__4124__auto___24132;
var seq__24119_24134 = cljs.core.seq.call(null,classes__$1);
var chunk__24120_24135 = null;
var count__24121_24136 = (0);
var i__24122_24137 = (0);
while(true){
if((i__24122_24137 < count__24121_24136)){
var c_24138 = cljs.core._nth.call(null,chunk__24120_24135,i__24122_24137);
class_list_24133.add(c_24138);

var G__24139 = seq__24119_24134;
var G__24140 = chunk__24120_24135;
var G__24141 = count__24121_24136;
var G__24142 = (i__24122_24137 + (1));
seq__24119_24134 = G__24139;
chunk__24120_24135 = G__24140;
count__24121_24136 = G__24141;
i__24122_24137 = G__24142;
continue;
} else {
var temp__4126__auto___24143 = cljs.core.seq.call(null,seq__24119_24134);
if(temp__4126__auto___24143){
var seq__24119_24144__$1 = temp__4126__auto___24143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24119_24144__$1)){
var c__16928__auto___24145 = cljs.core.chunk_first.call(null,seq__24119_24144__$1);
var G__24146 = cljs.core.chunk_rest.call(null,seq__24119_24144__$1);
var G__24147 = c__16928__auto___24145;
var G__24148 = cljs.core.count.call(null,c__16928__auto___24145);
var G__24149 = (0);
seq__24119_24134 = G__24146;
chunk__24120_24135 = G__24147;
count__24121_24136 = G__24148;
i__24122_24137 = G__24149;
continue;
} else {
var c_24150 = cljs.core.first.call(null,seq__24119_24144__$1);
class_list_24133.add(c_24150);

var G__24151 = cljs.core.next.call(null,seq__24119_24144__$1);
var G__24152 = null;
var G__24153 = (0);
var G__24154 = (0);
seq__24119_24134 = G__24151;
chunk__24120_24135 = G__24152;
count__24121_24136 = G__24153;
i__24122_24137 = G__24154;
continue;
}
} else {
}
}
break;
}
} else {
var seq__24123_24155 = cljs.core.seq.call(null,classes__$1);
var chunk__24124_24156 = null;
var count__24125_24157 = (0);
var i__24126_24158 = (0);
while(true){
if((i__24126_24158 < count__24125_24157)){
var c_24159 = cljs.core._nth.call(null,chunk__24124_24156,i__24126_24158);
var class_name_24160 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_24160,c_24159))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_24160 === ""))?c_24159:[cljs.core.str(class_name_24160),cljs.core.str(" "),cljs.core.str(c_24159)].join('')));
}

var G__24161 = seq__24123_24155;
var G__24162 = chunk__24124_24156;
var G__24163 = count__24125_24157;
var G__24164 = (i__24126_24158 + (1));
seq__24123_24155 = G__24161;
chunk__24124_24156 = G__24162;
count__24125_24157 = G__24163;
i__24126_24158 = G__24164;
continue;
} else {
var temp__4126__auto___24165 = cljs.core.seq.call(null,seq__24123_24155);
if(temp__4126__auto___24165){
var seq__24123_24166__$1 = temp__4126__auto___24165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24123_24166__$1)){
var c__16928__auto___24167 = cljs.core.chunk_first.call(null,seq__24123_24166__$1);
var G__24168 = cljs.core.chunk_rest.call(null,seq__24123_24166__$1);
var G__24169 = c__16928__auto___24167;
var G__24170 = cljs.core.count.call(null,c__16928__auto___24167);
var G__24171 = (0);
seq__24123_24155 = G__24168;
chunk__24124_24156 = G__24169;
count__24125_24157 = G__24170;
i__24126_24158 = G__24171;
continue;
} else {
var c_24172 = cljs.core.first.call(null,seq__24123_24166__$1);
var class_name_24173 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_24173,c_24172))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_24173 === ""))?c_24172:[cljs.core.str(class_name_24173),cljs.core.str(" "),cljs.core.str(c_24172)].join('')));
}

var G__24174 = cljs.core.next.call(null,seq__24123_24166__$1);
var G__24175 = null;
var G__24176 = (0);
var G__24177 = (0);
seq__24123_24155 = G__24174;
chunk__24124_24156 = G__24175;
count__24125_24157 = G__24176;
i__24126_24158 = G__24177;
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

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__24127_24178 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__24128_24179 = null;
var count__24129_24180 = (0);
var i__24130_24181 = (0);
while(true){
if((i__24130_24181 < count__24129_24180)){
var c_24182 = cljs.core._nth.call(null,chunk__24128_24179,i__24130_24181);
dommy.core.add_class_BANG_.call(null,elem,c_24182);

var G__24183 = seq__24127_24178;
var G__24184 = chunk__24128_24179;
var G__24185 = count__24129_24180;
var G__24186 = (i__24130_24181 + (1));
seq__24127_24178 = G__24183;
chunk__24128_24179 = G__24184;
count__24129_24180 = G__24185;
i__24130_24181 = G__24186;
continue;
} else {
var temp__4126__auto___24187 = cljs.core.seq.call(null,seq__24127_24178);
if(temp__4126__auto___24187){
var seq__24127_24188__$1 = temp__4126__auto___24187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24127_24188__$1)){
var c__16928__auto___24189 = cljs.core.chunk_first.call(null,seq__24127_24188__$1);
var G__24190 = cljs.core.chunk_rest.call(null,seq__24127_24188__$1);
var G__24191 = c__16928__auto___24189;
var G__24192 = cljs.core.count.call(null,c__16928__auto___24189);
var G__24193 = (0);
seq__24127_24178 = G__24190;
chunk__24128_24179 = G__24191;
count__24129_24180 = G__24192;
i__24130_24181 = G__24193;
continue;
} else {
var c_24194 = cljs.core.first.call(null,seq__24127_24188__$1);
dommy.core.add_class_BANG_.call(null,elem,c_24194);

var G__24195 = cljs.core.next.call(null,seq__24127_24188__$1);
var G__24196 = null;
var G__24197 = (0);
var G__24198 = (0);
seq__24127_24178 = G__24195;
chunk__24128_24179 = G__24196;
count__24129_24180 = G__24197;
i__24130_24181 = G__24198;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq24114){
var G__24115 = cljs.core.first.call(null,seq24114);
var seq24114__$1 = cljs.core.next.call(null,seq24114);
var G__24116 = cljs.core.first.call(null,seq24114__$1);
var seq24114__$2 = cljs.core.next.call(null,seq24114__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24115,G__24116,seq24114__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var G__24203 = arguments.length;
switch (G__24203) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17194__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17194__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___24209 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___24209)){
var class_list_24210 = temp__4124__auto___24209;
class_list_24210.remove(c__$1);
} else {
var class_name_24211 = dommy.core.class$.call(null,elem);
var new_class_name_24212 = dommy.utils.remove_class_str.call(null,class_name_24211,c__$1);
if((class_name_24211 === new_class_name_24212)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_24212);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__24204 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__24205 = null;
var count__24206 = (0);
var i__24207 = (0);
while(true){
if((i__24207 < count__24206)){
var c = cljs.core._nth.call(null,chunk__24205,i__24207);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__24213 = seq__24204;
var G__24214 = chunk__24205;
var G__24215 = count__24206;
var G__24216 = (i__24207 + (1));
seq__24204 = G__24213;
chunk__24205 = G__24214;
count__24206 = G__24215;
i__24207 = G__24216;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24204);
if(temp__4126__auto__){
var seq__24204__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24204__$1)){
var c__16928__auto__ = cljs.core.chunk_first.call(null,seq__24204__$1);
var G__24217 = cljs.core.chunk_rest.call(null,seq__24204__$1);
var G__24218 = c__16928__auto__;
var G__24219 = cljs.core.count.call(null,c__16928__auto__);
var G__24220 = (0);
seq__24204 = G__24217;
chunk__24205 = G__24218;
count__24206 = G__24219;
i__24207 = G__24220;
continue;
} else {
var c = cljs.core.first.call(null,seq__24204__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__24221 = cljs.core.next.call(null,seq__24204__$1);
var G__24222 = null;
var G__24223 = (0);
var G__24224 = (0);
seq__24204 = G__24221;
chunk__24205 = G__24222;
count__24206 = G__24223;
i__24207 = G__24224;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq24199){
var G__24200 = cljs.core.first.call(null,seq24199);
var seq24199__$1 = cljs.core.next.call(null,seq24199);
var G__24201 = cljs.core.first.call(null,seq24199__$1);
var seq24199__$2 = cljs.core.next.call(null,seq24199__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24200,G__24201,seq24199__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var G__24226 = arguments.length;
switch (G__24226) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___24228 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___24228)){
var class_list_24229 = temp__4124__auto___24228;
class_list_24229.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(){
var G__24231 = arguments.length;
switch (G__24231) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
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
dommy.core.create_element = (function dommy$core$create_element(){
var G__24234 = arguments.length;
switch (G__24234) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
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
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(){
var G__24240 = arguments.length;
switch (G__24240) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17194__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17194__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__24241 = parent;
G__24241.appendChild(child);

return G__24241;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__24242_24247 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__24243_24248 = null;
var count__24244_24249 = (0);
var i__24245_24250 = (0);
while(true){
if((i__24245_24250 < count__24244_24249)){
var c_24251 = cljs.core._nth.call(null,chunk__24243_24248,i__24245_24250);
dommy.core.append_BANG_.call(null,parent,c_24251);

var G__24252 = seq__24242_24247;
var G__24253 = chunk__24243_24248;
var G__24254 = count__24244_24249;
var G__24255 = (i__24245_24250 + (1));
seq__24242_24247 = G__24252;
chunk__24243_24248 = G__24253;
count__24244_24249 = G__24254;
i__24245_24250 = G__24255;
continue;
} else {
var temp__4126__auto___24256 = cljs.core.seq.call(null,seq__24242_24247);
if(temp__4126__auto___24256){
var seq__24242_24257__$1 = temp__4126__auto___24256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24242_24257__$1)){
var c__16928__auto___24258 = cljs.core.chunk_first.call(null,seq__24242_24257__$1);
var G__24259 = cljs.core.chunk_rest.call(null,seq__24242_24257__$1);
var G__24260 = c__16928__auto___24258;
var G__24261 = cljs.core.count.call(null,c__16928__auto___24258);
var G__24262 = (0);
seq__24242_24247 = G__24259;
chunk__24243_24248 = G__24260;
count__24244_24249 = G__24261;
i__24245_24250 = G__24262;
continue;
} else {
var c_24263 = cljs.core.first.call(null,seq__24242_24257__$1);
dommy.core.append_BANG_.call(null,parent,c_24263);

var G__24264 = cljs.core.next.call(null,seq__24242_24257__$1);
var G__24265 = null;
var G__24266 = (0);
var G__24267 = (0);
seq__24242_24247 = G__24264;
chunk__24243_24248 = G__24265;
count__24244_24249 = G__24266;
i__24245_24250 = G__24267;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq24236){
var G__24237 = cljs.core.first.call(null,seq24236);
var seq24236__$1 = cljs.core.next.call(null,seq24236);
var G__24238 = cljs.core.first.call(null,seq24236__$1);
var seq24236__$2 = cljs.core.next.call(null,seq24236__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24237,G__24238,seq24236__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var G__24272 = arguments.length;
switch (G__24272) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17194__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17194__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__24273 = parent;
G__24273.insertBefore(child,parent.firstChild);

return G__24273;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__24274_24279 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__24275_24280 = null;
var count__24276_24281 = (0);
var i__24277_24282 = (0);
while(true){
if((i__24277_24282 < count__24276_24281)){
var c_24283 = cljs.core._nth.call(null,chunk__24275_24280,i__24277_24282);
dommy.core.prepend_BANG_.call(null,parent,c_24283);

var G__24284 = seq__24274_24279;
var G__24285 = chunk__24275_24280;
var G__24286 = count__24276_24281;
var G__24287 = (i__24277_24282 + (1));
seq__24274_24279 = G__24284;
chunk__24275_24280 = G__24285;
count__24276_24281 = G__24286;
i__24277_24282 = G__24287;
continue;
} else {
var temp__4126__auto___24288 = cljs.core.seq.call(null,seq__24274_24279);
if(temp__4126__auto___24288){
var seq__24274_24289__$1 = temp__4126__auto___24288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24274_24289__$1)){
var c__16928__auto___24290 = cljs.core.chunk_first.call(null,seq__24274_24289__$1);
var G__24291 = cljs.core.chunk_rest.call(null,seq__24274_24289__$1);
var G__24292 = c__16928__auto___24290;
var G__24293 = cljs.core.count.call(null,c__16928__auto___24290);
var G__24294 = (0);
seq__24274_24279 = G__24291;
chunk__24275_24280 = G__24292;
count__24276_24281 = G__24293;
i__24277_24282 = G__24294;
continue;
} else {
var c_24295 = cljs.core.first.call(null,seq__24274_24289__$1);
dommy.core.prepend_BANG_.call(null,parent,c_24295);

var G__24296 = cljs.core.next.call(null,seq__24274_24289__$1);
var G__24297 = null;
var G__24298 = (0);
var G__24299 = (0);
seq__24274_24279 = G__24296;
chunk__24275_24280 = G__24297;
count__24276_24281 = G__24298;
i__24277_24282 = G__24299;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq24268){
var G__24269 = cljs.core.first.call(null,seq24268);
var seq24268__$1 = cljs.core.next.call(null,seq24268);
var G__24270 = cljs.core.first.call(null,seq24268__$1);
var seq24268__$2 = cljs.core.next.call(null,seq24268__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24269,G__24270,seq24268__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
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
var temp__4124__auto___24300 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___24300)){
var next_24301 = temp__4124__auto___24300;
dommy.core.insert_before_BANG_.call(null,elem,next_24301);
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
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(){
var G__24303 = arguments.length;
switch (G__24303) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__24304 = p;
G__24304.removeChild(elem);

return G__24304;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24306){
var vec__24307 = p__24306;
var special_mouse_event = cljs.core.nth.call(null,vec__24307,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__24307,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__24307,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__24307,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16143__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16143__auto__)){
return or__16143__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16131__auto__ = related_target;
if(cljs.core.truth_(and__16131__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__16131__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__24307,special_mouse_event,real_mouse_event))
});})(vec__24307,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16131__auto__ = selected_target;
if(cljs.core.truth_(and__16131__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16131__auto__;
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
var or__16143__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16143__auto__)){
return or__16143__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var argseq__17183__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17183__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq24308){
var G__24309 = cljs.core.first.call(null,seq24308);
var seq24308__$1 = cljs.core.next.call(null,seq24308);
var G__24310 = cljs.core.first.call(null,seq24308__$1);
var seq24308__$2 = cljs.core.next.call(null,seq24308__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24309,G__24310,seq24308__$2);
});
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
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(){
var argseq__17183__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17183__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__24313_24336 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_24337 = cljs.core.nth.call(null,vec__24313_24336,(0),null);
var selector_24338 = cljs.core.nth.call(null,vec__24313_24336,(1),null);
var seq__24314_24339 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__24321_24340 = null;
var count__24322_24341 = (0);
var i__24323_24342 = (0);
while(true){
if((i__24323_24342 < count__24322_24341)){
var vec__24330_24343 = cljs.core._nth.call(null,chunk__24321_24340,i__24323_24342);
var orig_type_24344 = cljs.core.nth.call(null,vec__24330_24343,(0),null);
var f_24345 = cljs.core.nth.call(null,vec__24330_24343,(1),null);
var seq__24324_24346 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24344,new cljs.core.PersistentArrayMap.fromArray([orig_type_24344,cljs.core.identity], true, false)));
var chunk__24326_24347 = null;
var count__24327_24348 = (0);
var i__24328_24349 = (0);
while(true){
if((i__24328_24349 < count__24327_24348)){
var vec__24331_24350 = cljs.core._nth.call(null,chunk__24326_24347,i__24328_24349);
var actual_type_24351 = cljs.core.nth.call(null,vec__24331_24350,(0),null);
var factory_24352 = cljs.core.nth.call(null,vec__24331_24350,(1),null);
var canonical_f_24353 = (cljs.core.truth_(selector_24338)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24337,selector_24338):cljs.core.identity).call(null,factory_24352.call(null,f_24345));
dommy.core.update_event_listeners_BANG_.call(null,elem_24337,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24338,actual_type_24351,f_24345], null),canonical_f_24353);

if(cljs.core.truth_(elem_24337.addEventListener)){
elem_24337.addEventListener(cljs.core.name.call(null,actual_type_24351),canonical_f_24353);
} else {
elem_24337.attachEvent(cljs.core.name.call(null,actual_type_24351),canonical_f_24353);
}

var G__24354 = seq__24324_24346;
var G__24355 = chunk__24326_24347;
var G__24356 = count__24327_24348;
var G__24357 = (i__24328_24349 + (1));
seq__24324_24346 = G__24354;
chunk__24326_24347 = G__24355;
count__24327_24348 = G__24356;
i__24328_24349 = G__24357;
continue;
} else {
var temp__4126__auto___24358 = cljs.core.seq.call(null,seq__24324_24346);
if(temp__4126__auto___24358){
var seq__24324_24359__$1 = temp__4126__auto___24358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24324_24359__$1)){
var c__16928__auto___24360 = cljs.core.chunk_first.call(null,seq__24324_24359__$1);
var G__24361 = cljs.core.chunk_rest.call(null,seq__24324_24359__$1);
var G__24362 = c__16928__auto___24360;
var G__24363 = cljs.core.count.call(null,c__16928__auto___24360);
var G__24364 = (0);
seq__24324_24346 = G__24361;
chunk__24326_24347 = G__24362;
count__24327_24348 = G__24363;
i__24328_24349 = G__24364;
continue;
} else {
var vec__24332_24365 = cljs.core.first.call(null,seq__24324_24359__$1);
var actual_type_24366 = cljs.core.nth.call(null,vec__24332_24365,(0),null);
var factory_24367 = cljs.core.nth.call(null,vec__24332_24365,(1),null);
var canonical_f_24368 = (cljs.core.truth_(selector_24338)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24337,selector_24338):cljs.core.identity).call(null,factory_24367.call(null,f_24345));
dommy.core.update_event_listeners_BANG_.call(null,elem_24337,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24338,actual_type_24366,f_24345], null),canonical_f_24368);

if(cljs.core.truth_(elem_24337.addEventListener)){
elem_24337.addEventListener(cljs.core.name.call(null,actual_type_24366),canonical_f_24368);
} else {
elem_24337.attachEvent(cljs.core.name.call(null,actual_type_24366),canonical_f_24368);
}

var G__24369 = cljs.core.next.call(null,seq__24324_24359__$1);
var G__24370 = null;
var G__24371 = (0);
var G__24372 = (0);
seq__24324_24346 = G__24369;
chunk__24326_24347 = G__24370;
count__24327_24348 = G__24371;
i__24328_24349 = G__24372;
continue;
}
} else {
}
}
break;
}

var G__24373 = seq__24314_24339;
var G__24374 = chunk__24321_24340;
var G__24375 = count__24322_24341;
var G__24376 = (i__24323_24342 + (1));
seq__24314_24339 = G__24373;
chunk__24321_24340 = G__24374;
count__24322_24341 = G__24375;
i__24323_24342 = G__24376;
continue;
} else {
var temp__4126__auto___24377 = cljs.core.seq.call(null,seq__24314_24339);
if(temp__4126__auto___24377){
var seq__24314_24378__$1 = temp__4126__auto___24377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24314_24378__$1)){
var c__16928__auto___24379 = cljs.core.chunk_first.call(null,seq__24314_24378__$1);
var G__24380 = cljs.core.chunk_rest.call(null,seq__24314_24378__$1);
var G__24381 = c__16928__auto___24379;
var G__24382 = cljs.core.count.call(null,c__16928__auto___24379);
var G__24383 = (0);
seq__24314_24339 = G__24380;
chunk__24321_24340 = G__24381;
count__24322_24341 = G__24382;
i__24323_24342 = G__24383;
continue;
} else {
var vec__24333_24384 = cljs.core.first.call(null,seq__24314_24378__$1);
var orig_type_24385 = cljs.core.nth.call(null,vec__24333_24384,(0),null);
var f_24386 = cljs.core.nth.call(null,vec__24333_24384,(1),null);
var seq__24315_24387 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24385,new cljs.core.PersistentArrayMap.fromArray([orig_type_24385,cljs.core.identity], true, false)));
var chunk__24317_24388 = null;
var count__24318_24389 = (0);
var i__24319_24390 = (0);
while(true){
if((i__24319_24390 < count__24318_24389)){
var vec__24334_24391 = cljs.core._nth.call(null,chunk__24317_24388,i__24319_24390);
var actual_type_24392 = cljs.core.nth.call(null,vec__24334_24391,(0),null);
var factory_24393 = cljs.core.nth.call(null,vec__24334_24391,(1),null);
var canonical_f_24394 = (cljs.core.truth_(selector_24338)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24337,selector_24338):cljs.core.identity).call(null,factory_24393.call(null,f_24386));
dommy.core.update_event_listeners_BANG_.call(null,elem_24337,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24338,actual_type_24392,f_24386], null),canonical_f_24394);

if(cljs.core.truth_(elem_24337.addEventListener)){
elem_24337.addEventListener(cljs.core.name.call(null,actual_type_24392),canonical_f_24394);
} else {
elem_24337.attachEvent(cljs.core.name.call(null,actual_type_24392),canonical_f_24394);
}

var G__24395 = seq__24315_24387;
var G__24396 = chunk__24317_24388;
var G__24397 = count__24318_24389;
var G__24398 = (i__24319_24390 + (1));
seq__24315_24387 = G__24395;
chunk__24317_24388 = G__24396;
count__24318_24389 = G__24397;
i__24319_24390 = G__24398;
continue;
} else {
var temp__4126__auto___24399__$1 = cljs.core.seq.call(null,seq__24315_24387);
if(temp__4126__auto___24399__$1){
var seq__24315_24400__$1 = temp__4126__auto___24399__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24315_24400__$1)){
var c__16928__auto___24401 = cljs.core.chunk_first.call(null,seq__24315_24400__$1);
var G__24402 = cljs.core.chunk_rest.call(null,seq__24315_24400__$1);
var G__24403 = c__16928__auto___24401;
var G__24404 = cljs.core.count.call(null,c__16928__auto___24401);
var G__24405 = (0);
seq__24315_24387 = G__24402;
chunk__24317_24388 = G__24403;
count__24318_24389 = G__24404;
i__24319_24390 = G__24405;
continue;
} else {
var vec__24335_24406 = cljs.core.first.call(null,seq__24315_24400__$1);
var actual_type_24407 = cljs.core.nth.call(null,vec__24335_24406,(0),null);
var factory_24408 = cljs.core.nth.call(null,vec__24335_24406,(1),null);
var canonical_f_24409 = (cljs.core.truth_(selector_24338)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24337,selector_24338):cljs.core.identity).call(null,factory_24408.call(null,f_24386));
dommy.core.update_event_listeners_BANG_.call(null,elem_24337,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24338,actual_type_24407,f_24386], null),canonical_f_24409);

if(cljs.core.truth_(elem_24337.addEventListener)){
elem_24337.addEventListener(cljs.core.name.call(null,actual_type_24407),canonical_f_24409);
} else {
elem_24337.attachEvent(cljs.core.name.call(null,actual_type_24407),canonical_f_24409);
}

var G__24410 = cljs.core.next.call(null,seq__24315_24400__$1);
var G__24411 = null;
var G__24412 = (0);
var G__24413 = (0);
seq__24315_24387 = G__24410;
chunk__24317_24388 = G__24411;
count__24318_24389 = G__24412;
i__24319_24390 = G__24413;
continue;
}
} else {
}
}
break;
}

var G__24414 = cljs.core.next.call(null,seq__24314_24378__$1);
var G__24415 = null;
var G__24416 = (0);
var G__24417 = (0);
seq__24314_24339 = G__24414;
chunk__24321_24340 = G__24415;
count__24322_24341 = G__24416;
i__24323_24342 = G__24417;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq24311){
var G__24312 = cljs.core.first.call(null,seq24311);
var seq24311__$1 = cljs.core.next.call(null,seq24311);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24312,seq24311__$1);
});
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
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(){
var argseq__17183__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17183__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__24420_24443 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_24444 = cljs.core.nth.call(null,vec__24420_24443,(0),null);
var selector_24445 = cljs.core.nth.call(null,vec__24420_24443,(1),null);
var seq__24421_24446 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__24428_24447 = null;
var count__24429_24448 = (0);
var i__24430_24449 = (0);
while(true){
if((i__24430_24449 < count__24429_24448)){
var vec__24437_24450 = cljs.core._nth.call(null,chunk__24428_24447,i__24430_24449);
var orig_type_24451 = cljs.core.nth.call(null,vec__24437_24450,(0),null);
var f_24452 = cljs.core.nth.call(null,vec__24437_24450,(1),null);
var seq__24431_24453 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24451,new cljs.core.PersistentArrayMap.fromArray([orig_type_24451,cljs.core.identity], true, false)));
var chunk__24433_24454 = null;
var count__24434_24455 = (0);
var i__24435_24456 = (0);
while(true){
if((i__24435_24456 < count__24434_24455)){
var vec__24438_24457 = cljs.core._nth.call(null,chunk__24433_24454,i__24435_24456);
var actual_type_24458 = cljs.core.nth.call(null,vec__24438_24457,(0),null);
var __24459 = cljs.core.nth.call(null,vec__24438_24457,(1),null);
var keys_24460 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24445,actual_type_24458,f_24452], null);
var canonical_f_24461 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24444),keys_24460);
dommy.core.update_event_listeners_BANG_.call(null,elem_24444,dommy.utils.dissoc_in,keys_24460);

if(cljs.core.truth_(elem_24444.removeEventListener)){
elem_24444.removeEventListener(cljs.core.name.call(null,actual_type_24458),canonical_f_24461);
} else {
elem_24444.detachEvent(cljs.core.name.call(null,actual_type_24458),canonical_f_24461);
}

var G__24462 = seq__24431_24453;
var G__24463 = chunk__24433_24454;
var G__24464 = count__24434_24455;
var G__24465 = (i__24435_24456 + (1));
seq__24431_24453 = G__24462;
chunk__24433_24454 = G__24463;
count__24434_24455 = G__24464;
i__24435_24456 = G__24465;
continue;
} else {
var temp__4126__auto___24466 = cljs.core.seq.call(null,seq__24431_24453);
if(temp__4126__auto___24466){
var seq__24431_24467__$1 = temp__4126__auto___24466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24431_24467__$1)){
var c__16928__auto___24468 = cljs.core.chunk_first.call(null,seq__24431_24467__$1);
var G__24469 = cljs.core.chunk_rest.call(null,seq__24431_24467__$1);
var G__24470 = c__16928__auto___24468;
var G__24471 = cljs.core.count.call(null,c__16928__auto___24468);
var G__24472 = (0);
seq__24431_24453 = G__24469;
chunk__24433_24454 = G__24470;
count__24434_24455 = G__24471;
i__24435_24456 = G__24472;
continue;
} else {
var vec__24439_24473 = cljs.core.first.call(null,seq__24431_24467__$1);
var actual_type_24474 = cljs.core.nth.call(null,vec__24439_24473,(0),null);
var __24475 = cljs.core.nth.call(null,vec__24439_24473,(1),null);
var keys_24476 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24445,actual_type_24474,f_24452], null);
var canonical_f_24477 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24444),keys_24476);
dommy.core.update_event_listeners_BANG_.call(null,elem_24444,dommy.utils.dissoc_in,keys_24476);

if(cljs.core.truth_(elem_24444.removeEventListener)){
elem_24444.removeEventListener(cljs.core.name.call(null,actual_type_24474),canonical_f_24477);
} else {
elem_24444.detachEvent(cljs.core.name.call(null,actual_type_24474),canonical_f_24477);
}

var G__24478 = cljs.core.next.call(null,seq__24431_24467__$1);
var G__24479 = null;
var G__24480 = (0);
var G__24481 = (0);
seq__24431_24453 = G__24478;
chunk__24433_24454 = G__24479;
count__24434_24455 = G__24480;
i__24435_24456 = G__24481;
continue;
}
} else {
}
}
break;
}

var G__24482 = seq__24421_24446;
var G__24483 = chunk__24428_24447;
var G__24484 = count__24429_24448;
var G__24485 = (i__24430_24449 + (1));
seq__24421_24446 = G__24482;
chunk__24428_24447 = G__24483;
count__24429_24448 = G__24484;
i__24430_24449 = G__24485;
continue;
} else {
var temp__4126__auto___24486 = cljs.core.seq.call(null,seq__24421_24446);
if(temp__4126__auto___24486){
var seq__24421_24487__$1 = temp__4126__auto___24486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24421_24487__$1)){
var c__16928__auto___24488 = cljs.core.chunk_first.call(null,seq__24421_24487__$1);
var G__24489 = cljs.core.chunk_rest.call(null,seq__24421_24487__$1);
var G__24490 = c__16928__auto___24488;
var G__24491 = cljs.core.count.call(null,c__16928__auto___24488);
var G__24492 = (0);
seq__24421_24446 = G__24489;
chunk__24428_24447 = G__24490;
count__24429_24448 = G__24491;
i__24430_24449 = G__24492;
continue;
} else {
var vec__24440_24493 = cljs.core.first.call(null,seq__24421_24487__$1);
var orig_type_24494 = cljs.core.nth.call(null,vec__24440_24493,(0),null);
var f_24495 = cljs.core.nth.call(null,vec__24440_24493,(1),null);
var seq__24422_24496 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24494,new cljs.core.PersistentArrayMap.fromArray([orig_type_24494,cljs.core.identity], true, false)));
var chunk__24424_24497 = null;
var count__24425_24498 = (0);
var i__24426_24499 = (0);
while(true){
if((i__24426_24499 < count__24425_24498)){
var vec__24441_24500 = cljs.core._nth.call(null,chunk__24424_24497,i__24426_24499);
var actual_type_24501 = cljs.core.nth.call(null,vec__24441_24500,(0),null);
var __24502 = cljs.core.nth.call(null,vec__24441_24500,(1),null);
var keys_24503 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24445,actual_type_24501,f_24495], null);
var canonical_f_24504 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24444),keys_24503);
dommy.core.update_event_listeners_BANG_.call(null,elem_24444,dommy.utils.dissoc_in,keys_24503);

if(cljs.core.truth_(elem_24444.removeEventListener)){
elem_24444.removeEventListener(cljs.core.name.call(null,actual_type_24501),canonical_f_24504);
} else {
elem_24444.detachEvent(cljs.core.name.call(null,actual_type_24501),canonical_f_24504);
}

var G__24505 = seq__24422_24496;
var G__24506 = chunk__24424_24497;
var G__24507 = count__24425_24498;
var G__24508 = (i__24426_24499 + (1));
seq__24422_24496 = G__24505;
chunk__24424_24497 = G__24506;
count__24425_24498 = G__24507;
i__24426_24499 = G__24508;
continue;
} else {
var temp__4126__auto___24509__$1 = cljs.core.seq.call(null,seq__24422_24496);
if(temp__4126__auto___24509__$1){
var seq__24422_24510__$1 = temp__4126__auto___24509__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24422_24510__$1)){
var c__16928__auto___24511 = cljs.core.chunk_first.call(null,seq__24422_24510__$1);
var G__24512 = cljs.core.chunk_rest.call(null,seq__24422_24510__$1);
var G__24513 = c__16928__auto___24511;
var G__24514 = cljs.core.count.call(null,c__16928__auto___24511);
var G__24515 = (0);
seq__24422_24496 = G__24512;
chunk__24424_24497 = G__24513;
count__24425_24498 = G__24514;
i__24426_24499 = G__24515;
continue;
} else {
var vec__24442_24516 = cljs.core.first.call(null,seq__24422_24510__$1);
var actual_type_24517 = cljs.core.nth.call(null,vec__24442_24516,(0),null);
var __24518 = cljs.core.nth.call(null,vec__24442_24516,(1),null);
var keys_24519 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24445,actual_type_24517,f_24495], null);
var canonical_f_24520 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24444),keys_24519);
dommy.core.update_event_listeners_BANG_.call(null,elem_24444,dommy.utils.dissoc_in,keys_24519);

if(cljs.core.truth_(elem_24444.removeEventListener)){
elem_24444.removeEventListener(cljs.core.name.call(null,actual_type_24517),canonical_f_24520);
} else {
elem_24444.detachEvent(cljs.core.name.call(null,actual_type_24517),canonical_f_24520);
}

var G__24521 = cljs.core.next.call(null,seq__24422_24510__$1);
var G__24522 = null;
var G__24523 = (0);
var G__24524 = (0);
seq__24422_24496 = G__24521;
chunk__24424_24497 = G__24522;
count__24425_24498 = G__24523;
i__24426_24499 = G__24524;
continue;
}
} else {
}
}
break;
}

var G__24525 = cljs.core.next.call(null,seq__24421_24487__$1);
var G__24526 = null;
var G__24527 = (0);
var G__24528 = (0);
seq__24421_24446 = G__24525;
chunk__24428_24447 = G__24526;
count__24429_24448 = G__24527;
i__24430_24449 = G__24528;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq24418){
var G__24419 = cljs.core.first.call(null,seq24418);
var seq24418__$1 = cljs.core.next.call(null,seq24418);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24419,seq24418__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var argseq__17183__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17183__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__24531_24538 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_24539 = cljs.core.nth.call(null,vec__24531_24538,(0),null);
var selector_24540 = cljs.core.nth.call(null,vec__24531_24538,(1),null);
var seq__24532_24541 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__24533_24542 = null;
var count__24534_24543 = (0);
var i__24535_24544 = (0);
while(true){
if((i__24535_24544 < count__24534_24543)){
var vec__24536_24545 = cljs.core._nth.call(null,chunk__24533_24542,i__24535_24544);
var type_24546 = cljs.core.nth.call(null,vec__24536_24545,(0),null);
var f_24547 = cljs.core.nth.call(null,vec__24536_24545,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24546,((function (seq__24532_24541,chunk__24533_24542,count__24534_24543,i__24535_24544,vec__24536_24545,type_24546,f_24547,vec__24531_24538,elem_24539,selector_24540){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24546,dommy$core$this_fn);

return f_24547.call(null,e);
});})(seq__24532_24541,chunk__24533_24542,count__24534_24543,i__24535_24544,vec__24536_24545,type_24546,f_24547,vec__24531_24538,elem_24539,selector_24540))
);

var G__24548 = seq__24532_24541;
var G__24549 = chunk__24533_24542;
var G__24550 = count__24534_24543;
var G__24551 = (i__24535_24544 + (1));
seq__24532_24541 = G__24548;
chunk__24533_24542 = G__24549;
count__24534_24543 = G__24550;
i__24535_24544 = G__24551;
continue;
} else {
var temp__4126__auto___24552 = cljs.core.seq.call(null,seq__24532_24541);
if(temp__4126__auto___24552){
var seq__24532_24553__$1 = temp__4126__auto___24552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24532_24553__$1)){
var c__16928__auto___24554 = cljs.core.chunk_first.call(null,seq__24532_24553__$1);
var G__24555 = cljs.core.chunk_rest.call(null,seq__24532_24553__$1);
var G__24556 = c__16928__auto___24554;
var G__24557 = cljs.core.count.call(null,c__16928__auto___24554);
var G__24558 = (0);
seq__24532_24541 = G__24555;
chunk__24533_24542 = G__24556;
count__24534_24543 = G__24557;
i__24535_24544 = G__24558;
continue;
} else {
var vec__24537_24559 = cljs.core.first.call(null,seq__24532_24553__$1);
var type_24560 = cljs.core.nth.call(null,vec__24537_24559,(0),null);
var f_24561 = cljs.core.nth.call(null,vec__24537_24559,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24560,((function (seq__24532_24541,chunk__24533_24542,count__24534_24543,i__24535_24544,vec__24537_24559,type_24560,f_24561,seq__24532_24553__$1,temp__4126__auto___24552,vec__24531_24538,elem_24539,selector_24540){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24560,dommy$core$this_fn);

return f_24561.call(null,e);
});})(seq__24532_24541,chunk__24533_24542,count__24534_24543,i__24535_24544,vec__24537_24559,type_24560,f_24561,seq__24532_24553__$1,temp__4126__auto___24552,vec__24531_24538,elem_24539,selector_24540))
);

var G__24562 = cljs.core.next.call(null,seq__24532_24553__$1);
var G__24563 = null;
var G__24564 = (0);
var G__24565 = (0);
seq__24532_24541 = G__24562;
chunk__24533_24542 = G__24563;
count__24534_24543 = G__24564;
i__24535_24544 = G__24565;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq24529){
var G__24530 = cljs.core.first.call(null,seq24529);
var seq24529__$1 = cljs.core.next.call(null,seq24529);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24530,seq24529__$1);
});

//# sourceMappingURL=core.js.map