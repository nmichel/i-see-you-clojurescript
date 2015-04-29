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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__10122_SHARP_){
return !((p1__10122_SHARP_ === base));
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
var seq__10129_10135 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__10130_10136 = null;
var count__10131_10137 = (0);
var i__10132_10138 = (0);
while(true){
if((i__10132_10138 < count__10131_10137)){
var vec__10133_10139 = cljs.core._nth.call(null,chunk__10130_10136,i__10132_10138);
var k_10140 = cljs.core.nth.call(null,vec__10133_10139,(0),null);
var v_10141 = cljs.core.nth.call(null,vec__10133_10139,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_10140),v_10141);

var G__10142 = seq__10129_10135;
var G__10143 = chunk__10130_10136;
var G__10144 = count__10131_10137;
var G__10145 = (i__10132_10138 + (1));
seq__10129_10135 = G__10142;
chunk__10130_10136 = G__10143;
count__10131_10137 = G__10144;
i__10132_10138 = G__10145;
continue;
} else {
var temp__4126__auto___10146 = cljs.core.seq.call(null,seq__10129_10135);
if(temp__4126__auto___10146){
var seq__10129_10147__$1 = temp__4126__auto___10146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10129_10147__$1)){
var c__4907__auto___10148 = cljs.core.chunk_first.call(null,seq__10129_10147__$1);
var G__10149 = cljs.core.chunk_rest.call(null,seq__10129_10147__$1);
var G__10150 = c__4907__auto___10148;
var G__10151 = cljs.core.count.call(null,c__4907__auto___10148);
var G__10152 = (0);
seq__10129_10135 = G__10149;
chunk__10130_10136 = G__10150;
count__10131_10137 = G__10151;
i__10132_10138 = G__10152;
continue;
} else {
var vec__10134_10153 = cljs.core.first.call(null,seq__10129_10147__$1);
var k_10154 = cljs.core.nth.call(null,vec__10134_10153,(0),null);
var v_10155 = cljs.core.nth.call(null,vec__10134_10153,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_10154),v_10155);

var G__10156 = cljs.core.next.call(null,seq__10129_10147__$1);
var G__10157 = null;
var G__10158 = (0);
var G__10159 = (0);
seq__10129_10135 = G__10156;
chunk__10130_10136 = G__10157;
count__10131_10137 = G__10158;
i__10132_10138 = G__10159;
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
var G__10160__i = 0, G__10160__a = new Array(arguments.length -  1);
while (G__10160__i < G__10160__a.length) {G__10160__a[G__10160__i] = arguments[G__10160__i + 1]; ++G__10160__i;}
  kvs = new cljs.core.IndexedSeq(G__10160__a,0);
} 
return dommy$core$set_style_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_style_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_style_BANG_.cljs$lang$applyTo = (function (arglist__10161){
var elem = cljs.core.first(arglist__10161);
var kvs = cljs.core.rest(arglist__10161);
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

var seq__10168_10174 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__10169_10175 = null;
var count__10170_10176 = (0);
var i__10171_10177 = (0);
while(true){
if((i__10171_10177 < count__10170_10176)){
var vec__10172_10178 = cljs.core._nth.call(null,chunk__10169_10175,i__10171_10177);
var k_10179 = cljs.core.nth.call(null,vec__10172_10178,(0),null);
var v_10180 = cljs.core.nth.call(null,vec__10172_10178,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_10179,[cljs.core.str(v_10180),cljs.core.str("px")].join(''));

var G__10181 = seq__10168_10174;
var G__10182 = chunk__10169_10175;
var G__10183 = count__10170_10176;
var G__10184 = (i__10171_10177 + (1));
seq__10168_10174 = G__10181;
chunk__10169_10175 = G__10182;
count__10170_10176 = G__10183;
i__10171_10177 = G__10184;
continue;
} else {
var temp__4126__auto___10185 = cljs.core.seq.call(null,seq__10168_10174);
if(temp__4126__auto___10185){
var seq__10168_10186__$1 = temp__4126__auto___10185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10168_10186__$1)){
var c__4907__auto___10187 = cljs.core.chunk_first.call(null,seq__10168_10186__$1);
var G__10188 = cljs.core.chunk_rest.call(null,seq__10168_10186__$1);
var G__10189 = c__4907__auto___10187;
var G__10190 = cljs.core.count.call(null,c__4907__auto___10187);
var G__10191 = (0);
seq__10168_10174 = G__10188;
chunk__10169_10175 = G__10189;
count__10170_10176 = G__10190;
i__10171_10177 = G__10191;
continue;
} else {
var vec__10173_10192 = cljs.core.first.call(null,seq__10168_10186__$1);
var k_10193 = cljs.core.nth.call(null,vec__10173_10192,(0),null);
var v_10194 = cljs.core.nth.call(null,vec__10173_10192,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_10193,[cljs.core.str(v_10194),cljs.core.str("px")].join(''));

var G__10195 = cljs.core.next.call(null,seq__10168_10186__$1);
var G__10196 = null;
var G__10197 = (0);
var G__10198 = (0);
seq__10168_10174 = G__10195;
chunk__10169_10175 = G__10196;
count__10170_10176 = G__10197;
i__10171_10177 = G__10198;
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
var G__10199__i = 0, G__10199__a = new Array(arguments.length -  1);
while (G__10199__i < G__10199__a.length) {G__10199__a[G__10199__i] = arguments[G__10199__i + 1]; ++G__10199__i;}
  kvs = new cljs.core.IndexedSeq(G__10199__a,0);
} 
return dommy$core$set_px_BANG___delegate.call(this,elem,kvs);};
dommy$core$set_px_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$set_px_BANG_.cljs$lang$applyTo = (function (arglist__10200){
var elem = cljs.core.first(arglist__10200);
var kvs = cljs.core.rest(arglist__10200);
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
var G__10209 = elem;
(G__10209[k__$1] = v);

return G__10209;
} else {
var G__10210 = elem;
G__10210.setAttribute(k__$1,v);

return G__10210;
}
} else {
return null;
}
});
var dommy$core$set_attr_BANG___4 = (function() { 
var G__10217__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__10211_10218 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__10212_10219 = null;
var count__10213_10220 = (0);
var i__10214_10221 = (0);
while(true){
if((i__10214_10221 < count__10213_10220)){
var vec__10215_10222 = cljs.core._nth.call(null,chunk__10212_10219,i__10214_10221);
var k_10223__$1 = cljs.core.nth.call(null,vec__10215_10222,(0),null);
var v_10224__$1 = cljs.core.nth.call(null,vec__10215_10222,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_10223__$1,v_10224__$1);

var G__10225 = seq__10211_10218;
var G__10226 = chunk__10212_10219;
var G__10227 = count__10213_10220;
var G__10228 = (i__10214_10221 + (1));
seq__10211_10218 = G__10225;
chunk__10212_10219 = G__10226;
count__10213_10220 = G__10227;
i__10214_10221 = G__10228;
continue;
} else {
var temp__4126__auto___10229 = cljs.core.seq.call(null,seq__10211_10218);
if(temp__4126__auto___10229){
var seq__10211_10230__$1 = temp__4126__auto___10229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10211_10230__$1)){
var c__4907__auto___10231 = cljs.core.chunk_first.call(null,seq__10211_10230__$1);
var G__10232 = cljs.core.chunk_rest.call(null,seq__10211_10230__$1);
var G__10233 = c__4907__auto___10231;
var G__10234 = cljs.core.count.call(null,c__4907__auto___10231);
var G__10235 = (0);
seq__10211_10218 = G__10232;
chunk__10212_10219 = G__10233;
count__10213_10220 = G__10234;
i__10214_10221 = G__10235;
continue;
} else {
var vec__10216_10236 = cljs.core.first.call(null,seq__10211_10230__$1);
var k_10237__$1 = cljs.core.nth.call(null,vec__10216_10236,(0),null);
var v_10238__$1 = cljs.core.nth.call(null,vec__10216_10236,(1),null);
dommy$core$set_attr_BANG_.call(null,elem,k_10237__$1,v_10238__$1);

var G__10239 = cljs.core.next.call(null,seq__10211_10230__$1);
var G__10240 = null;
var G__10241 = (0);
var G__10242 = (0);
seq__10211_10218 = G__10239;
chunk__10212_10219 = G__10240;
count__10213_10220 = G__10241;
i__10214_10221 = G__10242;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__10217 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__10243__i = 0, G__10243__a = new Array(arguments.length -  3);
while (G__10243__i < G__10243__a.length) {G__10243__a[G__10243__i] = arguments[G__10243__i + 3]; ++G__10243__i;}
  kvs = new cljs.core.IndexedSeq(G__10243__a,0);
} 
return G__10217__delegate.call(this,elem,k,v,kvs);};
G__10217.cljs$lang$maxFixedArity = 3;
G__10217.cljs$lang$applyTo = (function (arglist__10244){
var elem = cljs.core.first(arglist__10244);
arglist__10244 = cljs.core.next(arglist__10244);
var k = cljs.core.first(arglist__10244);
arglist__10244 = cljs.core.next(arglist__10244);
var v = cljs.core.first(arglist__10244);
var kvs = cljs.core.rest(arglist__10244);
return G__10217__delegate(elem,k,v,kvs);
});
G__10217.cljs$core$IFn$_invoke$arity$variadic = G__10217__delegate;
return G__10217;
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
var G__10245 = null;
if (arguments.length > 3) {
var G__10246__i = 0, G__10246__a = new Array(arguments.length -  3);
while (G__10246__i < G__10246__a.length) {G__10246__a[G__10246__i] = arguments[G__10246__i + 3]; ++G__10246__i;}
G__10245 = new cljs.core.IndexedSeq(G__10246__a,0);
}
return dommy$core$set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__10245);
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
var k_10255__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_10255__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_10255__$1);
}

return elem;
});
var dommy$core$remove_attr_BANG___3 = (function() { 
var G__10256__delegate = function (elem,k,ks){
var seq__10251_10257 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__10252_10258 = null;
var count__10253_10259 = (0);
var i__10254_10260 = (0);
while(true){
if((i__10254_10260 < count__10253_10259)){
var k_10261__$1 = cljs.core._nth.call(null,chunk__10252_10258,i__10254_10260);
dommy$core$remove_attr_BANG_.call(null,elem,k_10261__$1);

var G__10262 = seq__10251_10257;
var G__10263 = chunk__10252_10258;
var G__10264 = count__10253_10259;
var G__10265 = (i__10254_10260 + (1));
seq__10251_10257 = G__10262;
chunk__10252_10258 = G__10263;
count__10253_10259 = G__10264;
i__10254_10260 = G__10265;
continue;
} else {
var temp__4126__auto___10266 = cljs.core.seq.call(null,seq__10251_10257);
if(temp__4126__auto___10266){
var seq__10251_10267__$1 = temp__4126__auto___10266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10251_10267__$1)){
var c__4907__auto___10268 = cljs.core.chunk_first.call(null,seq__10251_10267__$1);
var G__10269 = cljs.core.chunk_rest.call(null,seq__10251_10267__$1);
var G__10270 = c__4907__auto___10268;
var G__10271 = cljs.core.count.call(null,c__4907__auto___10268);
var G__10272 = (0);
seq__10251_10257 = G__10269;
chunk__10252_10258 = G__10270;
count__10253_10259 = G__10271;
i__10254_10260 = G__10272;
continue;
} else {
var k_10273__$1 = cljs.core.first.call(null,seq__10251_10267__$1);
dommy$core$remove_attr_BANG_.call(null,elem,k_10273__$1);

var G__10274 = cljs.core.next.call(null,seq__10251_10267__$1);
var G__10275 = null;
var G__10276 = (0);
var G__10277 = (0);
seq__10251_10257 = G__10274;
chunk__10252_10258 = G__10275;
count__10253_10259 = G__10276;
i__10254_10260 = G__10277;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__10256 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__10278__i = 0, G__10278__a = new Array(arguments.length -  2);
while (G__10278__i < G__10278__a.length) {G__10278__a[G__10278__i] = arguments[G__10278__i + 2]; ++G__10278__i;}
  ks = new cljs.core.IndexedSeq(G__10278__a,0);
} 
return G__10256__delegate.call(this,elem,k,ks);};
G__10256.cljs$lang$maxFixedArity = 2;
G__10256.cljs$lang$applyTo = (function (arglist__10279){
var elem = cljs.core.first(arglist__10279);
arglist__10279 = cljs.core.next(arglist__10279);
var k = cljs.core.first(arglist__10279);
var ks = cljs.core.rest(arglist__10279);
return G__10256__delegate(elem,k,ks);
});
G__10256.cljs$core$IFn$_invoke$arity$variadic = G__10256__delegate;
return G__10256;
})()
;
dommy$core$remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_attr_BANG___2.call(this,elem,k);
default:
var G__10280 = null;
if (arguments.length > 2) {
var G__10281__i = 0, G__10281__a = new Array(arguments.length -  2);
while (G__10281__i < G__10281__a.length) {G__10281__a[G__10281__i] = arguments[G__10281__i + 2]; ++G__10281__i;}
G__10280 = new cljs.core.IndexedSeq(G__10281__a,0);
}
return dommy$core$remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__10280);
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
var temp__4124__auto___10306 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___10306)){
var class_list_10307 = temp__4124__auto___10306;
var seq__10294_10308 = cljs.core.seq.call(null,classes__$1);
var chunk__10295_10309 = null;
var count__10296_10310 = (0);
var i__10297_10311 = (0);
while(true){
if((i__10297_10311 < count__10296_10310)){
var c_10312 = cljs.core._nth.call(null,chunk__10295_10309,i__10297_10311);
class_list_10307.add(c_10312);

var G__10313 = seq__10294_10308;
var G__10314 = chunk__10295_10309;
var G__10315 = count__10296_10310;
var G__10316 = (i__10297_10311 + (1));
seq__10294_10308 = G__10313;
chunk__10295_10309 = G__10314;
count__10296_10310 = G__10315;
i__10297_10311 = G__10316;
continue;
} else {
var temp__4126__auto___10317 = cljs.core.seq.call(null,seq__10294_10308);
if(temp__4126__auto___10317){
var seq__10294_10318__$1 = temp__4126__auto___10317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10294_10318__$1)){
var c__4907__auto___10319 = cljs.core.chunk_first.call(null,seq__10294_10318__$1);
var G__10320 = cljs.core.chunk_rest.call(null,seq__10294_10318__$1);
var G__10321 = c__4907__auto___10319;
var G__10322 = cljs.core.count.call(null,c__4907__auto___10319);
var G__10323 = (0);
seq__10294_10308 = G__10320;
chunk__10295_10309 = G__10321;
count__10296_10310 = G__10322;
i__10297_10311 = G__10323;
continue;
} else {
var c_10324 = cljs.core.first.call(null,seq__10294_10318__$1);
class_list_10307.add(c_10324);

var G__10325 = cljs.core.next.call(null,seq__10294_10318__$1);
var G__10326 = null;
var G__10327 = (0);
var G__10328 = (0);
seq__10294_10308 = G__10325;
chunk__10295_10309 = G__10326;
count__10296_10310 = G__10327;
i__10297_10311 = G__10328;
continue;
}
} else {
}
}
break;
}
} else {
var seq__10298_10329 = cljs.core.seq.call(null,classes__$1);
var chunk__10299_10330 = null;
var count__10300_10331 = (0);
var i__10301_10332 = (0);
while(true){
if((i__10301_10332 < count__10300_10331)){
var c_10333 = cljs.core._nth.call(null,chunk__10299_10330,i__10301_10332);
var class_name_10334 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10334,c_10333))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10334 === ""))?c_10333:[cljs.core.str(class_name_10334),cljs.core.str(" "),cljs.core.str(c_10333)].join('')));
}

var G__10335 = seq__10298_10329;
var G__10336 = chunk__10299_10330;
var G__10337 = count__10300_10331;
var G__10338 = (i__10301_10332 + (1));
seq__10298_10329 = G__10335;
chunk__10299_10330 = G__10336;
count__10300_10331 = G__10337;
i__10301_10332 = G__10338;
continue;
} else {
var temp__4126__auto___10339 = cljs.core.seq.call(null,seq__10298_10329);
if(temp__4126__auto___10339){
var seq__10298_10340__$1 = temp__4126__auto___10339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10298_10340__$1)){
var c__4907__auto___10341 = cljs.core.chunk_first.call(null,seq__10298_10340__$1);
var G__10342 = cljs.core.chunk_rest.call(null,seq__10298_10340__$1);
var G__10343 = c__4907__auto___10341;
var G__10344 = cljs.core.count.call(null,c__4907__auto___10341);
var G__10345 = (0);
seq__10298_10329 = G__10342;
chunk__10299_10330 = G__10343;
count__10300_10331 = G__10344;
i__10301_10332 = G__10345;
continue;
} else {
var c_10346 = cljs.core.first.call(null,seq__10298_10340__$1);
var class_name_10347 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10347,c_10346))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10347 === ""))?c_10346:[cljs.core.str(class_name_10347),cljs.core.str(" "),cljs.core.str(c_10346)].join('')));
}

var G__10348 = cljs.core.next.call(null,seq__10298_10340__$1);
var G__10349 = null;
var G__10350 = (0);
var G__10351 = (0);
seq__10298_10329 = G__10348;
chunk__10299_10330 = G__10349;
count__10300_10331 = G__10350;
i__10301_10332 = G__10351;
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
var G__10352__delegate = function (elem,classes,more_classes){
var seq__10302_10353 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__10303_10354 = null;
var count__10304_10355 = (0);
var i__10305_10356 = (0);
while(true){
if((i__10305_10356 < count__10304_10355)){
var c_10357 = cljs.core._nth.call(null,chunk__10303_10354,i__10305_10356);
dommy$core$add_class_BANG_.call(null,elem,c_10357);

var G__10358 = seq__10302_10353;
var G__10359 = chunk__10303_10354;
var G__10360 = count__10304_10355;
var G__10361 = (i__10305_10356 + (1));
seq__10302_10353 = G__10358;
chunk__10303_10354 = G__10359;
count__10304_10355 = G__10360;
i__10305_10356 = G__10361;
continue;
} else {
var temp__4126__auto___10362 = cljs.core.seq.call(null,seq__10302_10353);
if(temp__4126__auto___10362){
var seq__10302_10363__$1 = temp__4126__auto___10362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10302_10363__$1)){
var c__4907__auto___10364 = cljs.core.chunk_first.call(null,seq__10302_10363__$1);
var G__10365 = cljs.core.chunk_rest.call(null,seq__10302_10363__$1);
var G__10366 = c__4907__auto___10364;
var G__10367 = cljs.core.count.call(null,c__4907__auto___10364);
var G__10368 = (0);
seq__10302_10353 = G__10365;
chunk__10303_10354 = G__10366;
count__10304_10355 = G__10367;
i__10305_10356 = G__10368;
continue;
} else {
var c_10369 = cljs.core.first.call(null,seq__10302_10363__$1);
dommy$core$add_class_BANG_.call(null,elem,c_10369);

var G__10370 = cljs.core.next.call(null,seq__10302_10363__$1);
var G__10371 = null;
var G__10372 = (0);
var G__10373 = (0);
seq__10302_10353 = G__10370;
chunk__10303_10354 = G__10371;
count__10304_10355 = G__10372;
i__10305_10356 = G__10373;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__10352 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__10374__i = 0, G__10374__a = new Array(arguments.length -  2);
while (G__10374__i < G__10374__a.length) {G__10374__a[G__10374__i] = arguments[G__10374__i + 2]; ++G__10374__i;}
  more_classes = new cljs.core.IndexedSeq(G__10374__a,0);
} 
return G__10352__delegate.call(this,elem,classes,more_classes);};
G__10352.cljs$lang$maxFixedArity = 2;
G__10352.cljs$lang$applyTo = (function (arglist__10375){
var elem = cljs.core.first(arglist__10375);
arglist__10375 = cljs.core.next(arglist__10375);
var classes = cljs.core.first(arglist__10375);
var more_classes = cljs.core.rest(arglist__10375);
return G__10352__delegate(elem,classes,more_classes);
});
G__10352.cljs$core$IFn$_invoke$arity$variadic = G__10352__delegate;
return G__10352;
})()
;
dommy$core$add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$add_class_BANG___2.call(this,elem,classes);
default:
var G__10376 = null;
if (arguments.length > 2) {
var G__10377__i = 0, G__10377__a = new Array(arguments.length -  2);
while (G__10377__i < G__10377__a.length) {G__10377__a[G__10377__i] = arguments[G__10377__i + 2]; ++G__10377__i;}
G__10376 = new cljs.core.IndexedSeq(G__10377__a,0);
}
return dommy$core$add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__10376);
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
var temp__4124__auto___10386 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___10386)){
var class_list_10387 = temp__4124__auto___10386;
class_list_10387.remove(c__$1);
} else {
var class_name_10388 = dommy.core.class$.call(null,elem);
var new_class_name_10389 = dommy.utils.remove_class_str.call(null,class_name_10388,c__$1);
if((class_name_10388 === new_class_name_10389)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_10389);
}
}

return elem;
});
var dommy$core$remove_class_BANG___3 = (function() { 
var G__10390__delegate = function (elem,class$,classes){
var seq__10382 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__10383 = null;
var count__10384 = (0);
var i__10385 = (0);
while(true){
if((i__10385 < count__10384)){
var c = cljs.core._nth.call(null,chunk__10383,i__10385);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__10391 = seq__10382;
var G__10392 = chunk__10383;
var G__10393 = count__10384;
var G__10394 = (i__10385 + (1));
seq__10382 = G__10391;
chunk__10383 = G__10392;
count__10384 = G__10393;
i__10385 = G__10394;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10382);
if(temp__4126__auto__){
var seq__10382__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10382__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__10382__$1);
var G__10395 = cljs.core.chunk_rest.call(null,seq__10382__$1);
var G__10396 = c__4907__auto__;
var G__10397 = cljs.core.count.call(null,c__4907__auto__);
var G__10398 = (0);
seq__10382 = G__10395;
chunk__10383 = G__10396;
count__10384 = G__10397;
i__10385 = G__10398;
continue;
} else {
var c = cljs.core.first.call(null,seq__10382__$1);
dommy$core$remove_class_BANG_.call(null,elem,c);

var G__10399 = cljs.core.next.call(null,seq__10382__$1);
var G__10400 = null;
var G__10401 = (0);
var G__10402 = (0);
seq__10382 = G__10399;
chunk__10383 = G__10400;
count__10384 = G__10401;
i__10385 = G__10402;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10390 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__10403__i = 0, G__10403__a = new Array(arguments.length -  2);
while (G__10403__i < G__10403__a.length) {G__10403__a[G__10403__i] = arguments[G__10403__i + 2]; ++G__10403__i;}
  classes = new cljs.core.IndexedSeq(G__10403__a,0);
} 
return G__10390__delegate.call(this,elem,class$,classes);};
G__10390.cljs$lang$maxFixedArity = 2;
G__10390.cljs$lang$applyTo = (function (arglist__10404){
var elem = cljs.core.first(arglist__10404);
arglist__10404 = cljs.core.next(arglist__10404);
var class$ = cljs.core.first(arglist__10404);
var classes = cljs.core.rest(arglist__10404);
return G__10390__delegate(elem,class$,classes);
});
G__10390.cljs$core$IFn$_invoke$arity$variadic = G__10390__delegate;
return G__10390;
})()
;
dommy$core$remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return dommy$core$remove_class_BANG___2.call(this,elem,class$);
default:
var G__10405 = null;
if (arguments.length > 2) {
var G__10406__i = 0, G__10406__a = new Array(arguments.length -  2);
while (G__10406__i < G__10406__a.length) {G__10406__a[G__10406__i] = arguments[G__10406__i + 2]; ++G__10406__i;}
G__10405 = new cljs.core.IndexedSeq(G__10406__a,0);
}
return dommy$core$remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__10405);
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
var temp__4124__auto___10407 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___10407)){
var class_list_10408 = temp__4124__auto___10407;
class_list_10408.toggle(c__$1);
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
var G__10414 = parent;
G__10414.appendChild(child);

return G__10414;
});
var dommy$core$append_BANG___3 = (function() { 
var G__10419__delegate = function (parent,child,more_children){
var seq__10415_10420 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10416_10421 = null;
var count__10417_10422 = (0);
var i__10418_10423 = (0);
while(true){
if((i__10418_10423 < count__10417_10422)){
var c_10424 = cljs.core._nth.call(null,chunk__10416_10421,i__10418_10423);
dommy$core$append_BANG_.call(null,parent,c_10424);

var G__10425 = seq__10415_10420;
var G__10426 = chunk__10416_10421;
var G__10427 = count__10417_10422;
var G__10428 = (i__10418_10423 + (1));
seq__10415_10420 = G__10425;
chunk__10416_10421 = G__10426;
count__10417_10422 = G__10427;
i__10418_10423 = G__10428;
continue;
} else {
var temp__4126__auto___10429 = cljs.core.seq.call(null,seq__10415_10420);
if(temp__4126__auto___10429){
var seq__10415_10430__$1 = temp__4126__auto___10429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10415_10430__$1)){
var c__4907__auto___10431 = cljs.core.chunk_first.call(null,seq__10415_10430__$1);
var G__10432 = cljs.core.chunk_rest.call(null,seq__10415_10430__$1);
var G__10433 = c__4907__auto___10431;
var G__10434 = cljs.core.count.call(null,c__4907__auto___10431);
var G__10435 = (0);
seq__10415_10420 = G__10432;
chunk__10416_10421 = G__10433;
count__10417_10422 = G__10434;
i__10418_10423 = G__10435;
continue;
} else {
var c_10436 = cljs.core.first.call(null,seq__10415_10430__$1);
dommy$core$append_BANG_.call(null,parent,c_10436);

var G__10437 = cljs.core.next.call(null,seq__10415_10430__$1);
var G__10438 = null;
var G__10439 = (0);
var G__10440 = (0);
seq__10415_10420 = G__10437;
chunk__10416_10421 = G__10438;
count__10417_10422 = G__10439;
i__10418_10423 = G__10440;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__10419 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__10441__i = 0, G__10441__a = new Array(arguments.length -  2);
while (G__10441__i < G__10441__a.length) {G__10441__a[G__10441__i] = arguments[G__10441__i + 2]; ++G__10441__i;}
  more_children = new cljs.core.IndexedSeq(G__10441__a,0);
} 
return G__10419__delegate.call(this,parent,child,more_children);};
G__10419.cljs$lang$maxFixedArity = 2;
G__10419.cljs$lang$applyTo = (function (arglist__10442){
var parent = cljs.core.first(arglist__10442);
arglist__10442 = cljs.core.next(arglist__10442);
var child = cljs.core.first(arglist__10442);
var more_children = cljs.core.rest(arglist__10442);
return G__10419__delegate(parent,child,more_children);
});
G__10419.cljs$core$IFn$_invoke$arity$variadic = G__10419__delegate;
return G__10419;
})()
;
dommy$core$append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$append_BANG___2.call(this,parent,child);
default:
var G__10443 = null;
if (arguments.length > 2) {
var G__10444__i = 0, G__10444__a = new Array(arguments.length -  2);
while (G__10444__i < G__10444__a.length) {G__10444__a[G__10444__i] = arguments[G__10444__i + 2]; ++G__10444__i;}
G__10443 = new cljs.core.IndexedSeq(G__10444__a,0);
}
return dommy$core$append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__10443);
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
var G__10450 = parent;
G__10450.insertBefore(child,parent.firstChild);

return G__10450;
});
var dommy$core$prepend_BANG___3 = (function() { 
var G__10455__delegate = function (parent,child,more_children){
var seq__10451_10456 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10452_10457 = null;
var count__10453_10458 = (0);
var i__10454_10459 = (0);
while(true){
if((i__10454_10459 < count__10453_10458)){
var c_10460 = cljs.core._nth.call(null,chunk__10452_10457,i__10454_10459);
dommy$core$prepend_BANG_.call(null,parent,c_10460);

var G__10461 = seq__10451_10456;
var G__10462 = chunk__10452_10457;
var G__10463 = count__10453_10458;
var G__10464 = (i__10454_10459 + (1));
seq__10451_10456 = G__10461;
chunk__10452_10457 = G__10462;
count__10453_10458 = G__10463;
i__10454_10459 = G__10464;
continue;
} else {
var temp__4126__auto___10465 = cljs.core.seq.call(null,seq__10451_10456);
if(temp__4126__auto___10465){
var seq__10451_10466__$1 = temp__4126__auto___10465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10451_10466__$1)){
var c__4907__auto___10467 = cljs.core.chunk_first.call(null,seq__10451_10466__$1);
var G__10468 = cljs.core.chunk_rest.call(null,seq__10451_10466__$1);
var G__10469 = c__4907__auto___10467;
var G__10470 = cljs.core.count.call(null,c__4907__auto___10467);
var G__10471 = (0);
seq__10451_10456 = G__10468;
chunk__10452_10457 = G__10469;
count__10453_10458 = G__10470;
i__10454_10459 = G__10471;
continue;
} else {
var c_10472 = cljs.core.first.call(null,seq__10451_10466__$1);
dommy$core$prepend_BANG_.call(null,parent,c_10472);

var G__10473 = cljs.core.next.call(null,seq__10451_10466__$1);
var G__10474 = null;
var G__10475 = (0);
var G__10476 = (0);
seq__10451_10456 = G__10473;
chunk__10452_10457 = G__10474;
count__10453_10458 = G__10475;
i__10454_10459 = G__10476;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__10455 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__10477__i = 0, G__10477__a = new Array(arguments.length -  2);
while (G__10477__i < G__10477__a.length) {G__10477__a[G__10477__i] = arguments[G__10477__i + 2]; ++G__10477__i;}
  more_children = new cljs.core.IndexedSeq(G__10477__a,0);
} 
return G__10455__delegate.call(this,parent,child,more_children);};
G__10455.cljs$lang$maxFixedArity = 2;
G__10455.cljs$lang$applyTo = (function (arglist__10478){
var parent = cljs.core.first(arglist__10478);
arglist__10478 = cljs.core.next(arglist__10478);
var child = cljs.core.first(arglist__10478);
var more_children = cljs.core.rest(arglist__10478);
return G__10455__delegate(parent,child,more_children);
});
G__10455.cljs$core$IFn$_invoke$arity$variadic = G__10455__delegate;
return G__10455;
})()
;
dommy$core$prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return dommy$core$prepend_BANG___2.call(this,parent,child);
default:
var G__10479 = null;
if (arguments.length > 2) {
var G__10480__i = 0, G__10480__a = new Array(arguments.length -  2);
while (G__10480__i < G__10480__a.length) {G__10480__a[G__10480__i] = arguments[G__10480__i + 2]; ++G__10480__i;}
G__10479 = new cljs.core.IndexedSeq(G__10480__a,0);
}
return dommy$core$prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__10479);
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
var temp__4124__auto___10481 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___10481)){
var next_10482 = temp__4124__auto___10481;
dommy.core.insert_before_BANG_.call(null,elem,next_10482);
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
var G__10484 = p;
G__10484.removeChild(elem);

return G__10484;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10485){
var vec__10486 = p__10485;
var special_mouse_event = cljs.core.nth.call(null,vec__10486,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__10486,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__10486,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__10486,special_mouse_event,real_mouse_event){
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
;})(vec__10486,special_mouse_event,real_mouse_event))
});})(vec__10486,special_mouse_event,real_mouse_event))
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
var G__10487__i = 0, G__10487__a = new Array(arguments.length -  2);
while (G__10487__i < G__10487__a.length) {G__10487__a[G__10487__i] = arguments[G__10487__i + 2]; ++G__10487__i;}
  args = new cljs.core.IndexedSeq(G__10487__a,0);
} 
return dommy$core$update_event_listeners_BANG___delegate.call(this,elem,f,args);};
dommy$core$update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
dommy$core$update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__10488){
var elem = cljs.core.first(arglist__10488);
arglist__10488 = cljs.core.next(arglist__10488);
var f = cljs.core.first(arglist__10488);
var args = cljs.core.rest(arglist__10488);
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

var vec__10512_10535 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10536 = cljs.core.nth.call(null,vec__10512_10535,(0),null);
var selector_10537 = cljs.core.nth.call(null,vec__10512_10535,(1),null);
var seq__10513_10538 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10520_10539 = null;
var count__10521_10540 = (0);
var i__10522_10541 = (0);
while(true){
if((i__10522_10541 < count__10521_10540)){
var vec__10529_10542 = cljs.core._nth.call(null,chunk__10520_10539,i__10522_10541);
var orig_type_10543 = cljs.core.nth.call(null,vec__10529_10542,(0),null);
var f_10544 = cljs.core.nth.call(null,vec__10529_10542,(1),null);
var seq__10523_10545 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10543,new cljs.core.PersistentArrayMap.fromArray([orig_type_10543,cljs.core.identity], true, false)));
var chunk__10525_10546 = null;
var count__10526_10547 = (0);
var i__10527_10548 = (0);
while(true){
if((i__10527_10548 < count__10526_10547)){
var vec__10530_10549 = cljs.core._nth.call(null,chunk__10525_10546,i__10527_10548);
var actual_type_10550 = cljs.core.nth.call(null,vec__10530_10549,(0),null);
var factory_10551 = cljs.core.nth.call(null,vec__10530_10549,(1),null);
var canonical_f_10552 = (cljs.core.truth_(selector_10537)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10536,selector_10537):cljs.core.identity).call(null,factory_10551.call(null,f_10544));
dommy.core.update_event_listeners_BANG_.call(null,elem_10536,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10537,actual_type_10550,f_10544], null),canonical_f_10552);

if(cljs.core.truth_(elem_10536.addEventListener)){
elem_10536.addEventListener(cljs.core.name.call(null,actual_type_10550),canonical_f_10552);
} else {
elem_10536.attachEvent(cljs.core.name.call(null,actual_type_10550),canonical_f_10552);
}

var G__10553 = seq__10523_10545;
var G__10554 = chunk__10525_10546;
var G__10555 = count__10526_10547;
var G__10556 = (i__10527_10548 + (1));
seq__10523_10545 = G__10553;
chunk__10525_10546 = G__10554;
count__10526_10547 = G__10555;
i__10527_10548 = G__10556;
continue;
} else {
var temp__4126__auto___10557 = cljs.core.seq.call(null,seq__10523_10545);
if(temp__4126__auto___10557){
var seq__10523_10558__$1 = temp__4126__auto___10557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10523_10558__$1)){
var c__4907__auto___10559 = cljs.core.chunk_first.call(null,seq__10523_10558__$1);
var G__10560 = cljs.core.chunk_rest.call(null,seq__10523_10558__$1);
var G__10561 = c__4907__auto___10559;
var G__10562 = cljs.core.count.call(null,c__4907__auto___10559);
var G__10563 = (0);
seq__10523_10545 = G__10560;
chunk__10525_10546 = G__10561;
count__10526_10547 = G__10562;
i__10527_10548 = G__10563;
continue;
} else {
var vec__10531_10564 = cljs.core.first.call(null,seq__10523_10558__$1);
var actual_type_10565 = cljs.core.nth.call(null,vec__10531_10564,(0),null);
var factory_10566 = cljs.core.nth.call(null,vec__10531_10564,(1),null);
var canonical_f_10567 = (cljs.core.truth_(selector_10537)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10536,selector_10537):cljs.core.identity).call(null,factory_10566.call(null,f_10544));
dommy.core.update_event_listeners_BANG_.call(null,elem_10536,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10537,actual_type_10565,f_10544], null),canonical_f_10567);

if(cljs.core.truth_(elem_10536.addEventListener)){
elem_10536.addEventListener(cljs.core.name.call(null,actual_type_10565),canonical_f_10567);
} else {
elem_10536.attachEvent(cljs.core.name.call(null,actual_type_10565),canonical_f_10567);
}

var G__10568 = cljs.core.next.call(null,seq__10523_10558__$1);
var G__10569 = null;
var G__10570 = (0);
var G__10571 = (0);
seq__10523_10545 = G__10568;
chunk__10525_10546 = G__10569;
count__10526_10547 = G__10570;
i__10527_10548 = G__10571;
continue;
}
} else {
}
}
break;
}

var G__10572 = seq__10513_10538;
var G__10573 = chunk__10520_10539;
var G__10574 = count__10521_10540;
var G__10575 = (i__10522_10541 + (1));
seq__10513_10538 = G__10572;
chunk__10520_10539 = G__10573;
count__10521_10540 = G__10574;
i__10522_10541 = G__10575;
continue;
} else {
var temp__4126__auto___10576 = cljs.core.seq.call(null,seq__10513_10538);
if(temp__4126__auto___10576){
var seq__10513_10577__$1 = temp__4126__auto___10576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10513_10577__$1)){
var c__4907__auto___10578 = cljs.core.chunk_first.call(null,seq__10513_10577__$1);
var G__10579 = cljs.core.chunk_rest.call(null,seq__10513_10577__$1);
var G__10580 = c__4907__auto___10578;
var G__10581 = cljs.core.count.call(null,c__4907__auto___10578);
var G__10582 = (0);
seq__10513_10538 = G__10579;
chunk__10520_10539 = G__10580;
count__10521_10540 = G__10581;
i__10522_10541 = G__10582;
continue;
} else {
var vec__10532_10583 = cljs.core.first.call(null,seq__10513_10577__$1);
var orig_type_10584 = cljs.core.nth.call(null,vec__10532_10583,(0),null);
var f_10585 = cljs.core.nth.call(null,vec__10532_10583,(1),null);
var seq__10514_10586 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10584,new cljs.core.PersistentArrayMap.fromArray([orig_type_10584,cljs.core.identity], true, false)));
var chunk__10516_10587 = null;
var count__10517_10588 = (0);
var i__10518_10589 = (0);
while(true){
if((i__10518_10589 < count__10517_10588)){
var vec__10533_10590 = cljs.core._nth.call(null,chunk__10516_10587,i__10518_10589);
var actual_type_10591 = cljs.core.nth.call(null,vec__10533_10590,(0),null);
var factory_10592 = cljs.core.nth.call(null,vec__10533_10590,(1),null);
var canonical_f_10593 = (cljs.core.truth_(selector_10537)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10536,selector_10537):cljs.core.identity).call(null,factory_10592.call(null,f_10585));
dommy.core.update_event_listeners_BANG_.call(null,elem_10536,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10537,actual_type_10591,f_10585], null),canonical_f_10593);

if(cljs.core.truth_(elem_10536.addEventListener)){
elem_10536.addEventListener(cljs.core.name.call(null,actual_type_10591),canonical_f_10593);
} else {
elem_10536.attachEvent(cljs.core.name.call(null,actual_type_10591),canonical_f_10593);
}

var G__10594 = seq__10514_10586;
var G__10595 = chunk__10516_10587;
var G__10596 = count__10517_10588;
var G__10597 = (i__10518_10589 + (1));
seq__10514_10586 = G__10594;
chunk__10516_10587 = G__10595;
count__10517_10588 = G__10596;
i__10518_10589 = G__10597;
continue;
} else {
var temp__4126__auto___10598__$1 = cljs.core.seq.call(null,seq__10514_10586);
if(temp__4126__auto___10598__$1){
var seq__10514_10599__$1 = temp__4126__auto___10598__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10514_10599__$1)){
var c__4907__auto___10600 = cljs.core.chunk_first.call(null,seq__10514_10599__$1);
var G__10601 = cljs.core.chunk_rest.call(null,seq__10514_10599__$1);
var G__10602 = c__4907__auto___10600;
var G__10603 = cljs.core.count.call(null,c__4907__auto___10600);
var G__10604 = (0);
seq__10514_10586 = G__10601;
chunk__10516_10587 = G__10602;
count__10517_10588 = G__10603;
i__10518_10589 = G__10604;
continue;
} else {
var vec__10534_10605 = cljs.core.first.call(null,seq__10514_10599__$1);
var actual_type_10606 = cljs.core.nth.call(null,vec__10534_10605,(0),null);
var factory_10607 = cljs.core.nth.call(null,vec__10534_10605,(1),null);
var canonical_f_10608 = (cljs.core.truth_(selector_10537)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10536,selector_10537):cljs.core.identity).call(null,factory_10607.call(null,f_10585));
dommy.core.update_event_listeners_BANG_.call(null,elem_10536,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10537,actual_type_10606,f_10585], null),canonical_f_10608);

if(cljs.core.truth_(elem_10536.addEventListener)){
elem_10536.addEventListener(cljs.core.name.call(null,actual_type_10606),canonical_f_10608);
} else {
elem_10536.attachEvent(cljs.core.name.call(null,actual_type_10606),canonical_f_10608);
}

var G__10609 = cljs.core.next.call(null,seq__10514_10599__$1);
var G__10610 = null;
var G__10611 = (0);
var G__10612 = (0);
seq__10514_10586 = G__10609;
chunk__10516_10587 = G__10610;
count__10517_10588 = G__10611;
i__10518_10589 = G__10612;
continue;
}
} else {
}
}
break;
}

var G__10613 = cljs.core.next.call(null,seq__10513_10577__$1);
var G__10614 = null;
var G__10615 = (0);
var G__10616 = (0);
seq__10513_10538 = G__10613;
chunk__10520_10539 = G__10614;
count__10521_10540 = G__10615;
i__10522_10541 = G__10616;
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
var G__10617__i = 0, G__10617__a = new Array(arguments.length -  1);
while (G__10617__i < G__10617__a.length) {G__10617__a[G__10617__i] = arguments[G__10617__i + 1]; ++G__10617__i;}
  type_fs = new cljs.core.IndexedSeq(G__10617__a,0);
} 
return dommy$core$listen_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_BANG_.cljs$lang$applyTo = (function (arglist__10618){
var elem_sel = cljs.core.first(arglist__10618);
var type_fs = cljs.core.rest(arglist__10618);
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

var vec__10642_10665 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10666 = cljs.core.nth.call(null,vec__10642_10665,(0),null);
var selector_10667 = cljs.core.nth.call(null,vec__10642_10665,(1),null);
var seq__10643_10668 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10650_10669 = null;
var count__10651_10670 = (0);
var i__10652_10671 = (0);
while(true){
if((i__10652_10671 < count__10651_10670)){
var vec__10659_10672 = cljs.core._nth.call(null,chunk__10650_10669,i__10652_10671);
var orig_type_10673 = cljs.core.nth.call(null,vec__10659_10672,(0),null);
var f_10674 = cljs.core.nth.call(null,vec__10659_10672,(1),null);
var seq__10653_10675 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10673,new cljs.core.PersistentArrayMap.fromArray([orig_type_10673,cljs.core.identity], true, false)));
var chunk__10655_10676 = null;
var count__10656_10677 = (0);
var i__10657_10678 = (0);
while(true){
if((i__10657_10678 < count__10656_10677)){
var vec__10660_10679 = cljs.core._nth.call(null,chunk__10655_10676,i__10657_10678);
var actual_type_10680 = cljs.core.nth.call(null,vec__10660_10679,(0),null);
var __10681 = cljs.core.nth.call(null,vec__10660_10679,(1),null);
var keys_10682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10667,actual_type_10680,f_10674], null);
var canonical_f_10683 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10666),keys_10682);
dommy.core.update_event_listeners_BANG_.call(null,elem_10666,dommy.utils.dissoc_in,keys_10682);

if(cljs.core.truth_(elem_10666.removeEventListener)){
elem_10666.removeEventListener(cljs.core.name.call(null,actual_type_10680),canonical_f_10683);
} else {
elem_10666.detachEvent(cljs.core.name.call(null,actual_type_10680),canonical_f_10683);
}

var G__10684 = seq__10653_10675;
var G__10685 = chunk__10655_10676;
var G__10686 = count__10656_10677;
var G__10687 = (i__10657_10678 + (1));
seq__10653_10675 = G__10684;
chunk__10655_10676 = G__10685;
count__10656_10677 = G__10686;
i__10657_10678 = G__10687;
continue;
} else {
var temp__4126__auto___10688 = cljs.core.seq.call(null,seq__10653_10675);
if(temp__4126__auto___10688){
var seq__10653_10689__$1 = temp__4126__auto___10688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10653_10689__$1)){
var c__4907__auto___10690 = cljs.core.chunk_first.call(null,seq__10653_10689__$1);
var G__10691 = cljs.core.chunk_rest.call(null,seq__10653_10689__$1);
var G__10692 = c__4907__auto___10690;
var G__10693 = cljs.core.count.call(null,c__4907__auto___10690);
var G__10694 = (0);
seq__10653_10675 = G__10691;
chunk__10655_10676 = G__10692;
count__10656_10677 = G__10693;
i__10657_10678 = G__10694;
continue;
} else {
var vec__10661_10695 = cljs.core.first.call(null,seq__10653_10689__$1);
var actual_type_10696 = cljs.core.nth.call(null,vec__10661_10695,(0),null);
var __10697 = cljs.core.nth.call(null,vec__10661_10695,(1),null);
var keys_10698 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10667,actual_type_10696,f_10674], null);
var canonical_f_10699 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10666),keys_10698);
dommy.core.update_event_listeners_BANG_.call(null,elem_10666,dommy.utils.dissoc_in,keys_10698);

if(cljs.core.truth_(elem_10666.removeEventListener)){
elem_10666.removeEventListener(cljs.core.name.call(null,actual_type_10696),canonical_f_10699);
} else {
elem_10666.detachEvent(cljs.core.name.call(null,actual_type_10696),canonical_f_10699);
}

var G__10700 = cljs.core.next.call(null,seq__10653_10689__$1);
var G__10701 = null;
var G__10702 = (0);
var G__10703 = (0);
seq__10653_10675 = G__10700;
chunk__10655_10676 = G__10701;
count__10656_10677 = G__10702;
i__10657_10678 = G__10703;
continue;
}
} else {
}
}
break;
}

var G__10704 = seq__10643_10668;
var G__10705 = chunk__10650_10669;
var G__10706 = count__10651_10670;
var G__10707 = (i__10652_10671 + (1));
seq__10643_10668 = G__10704;
chunk__10650_10669 = G__10705;
count__10651_10670 = G__10706;
i__10652_10671 = G__10707;
continue;
} else {
var temp__4126__auto___10708 = cljs.core.seq.call(null,seq__10643_10668);
if(temp__4126__auto___10708){
var seq__10643_10709__$1 = temp__4126__auto___10708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10643_10709__$1)){
var c__4907__auto___10710 = cljs.core.chunk_first.call(null,seq__10643_10709__$1);
var G__10711 = cljs.core.chunk_rest.call(null,seq__10643_10709__$1);
var G__10712 = c__4907__auto___10710;
var G__10713 = cljs.core.count.call(null,c__4907__auto___10710);
var G__10714 = (0);
seq__10643_10668 = G__10711;
chunk__10650_10669 = G__10712;
count__10651_10670 = G__10713;
i__10652_10671 = G__10714;
continue;
} else {
var vec__10662_10715 = cljs.core.first.call(null,seq__10643_10709__$1);
var orig_type_10716 = cljs.core.nth.call(null,vec__10662_10715,(0),null);
var f_10717 = cljs.core.nth.call(null,vec__10662_10715,(1),null);
var seq__10644_10718 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10716,new cljs.core.PersistentArrayMap.fromArray([orig_type_10716,cljs.core.identity], true, false)));
var chunk__10646_10719 = null;
var count__10647_10720 = (0);
var i__10648_10721 = (0);
while(true){
if((i__10648_10721 < count__10647_10720)){
var vec__10663_10722 = cljs.core._nth.call(null,chunk__10646_10719,i__10648_10721);
var actual_type_10723 = cljs.core.nth.call(null,vec__10663_10722,(0),null);
var __10724 = cljs.core.nth.call(null,vec__10663_10722,(1),null);
var keys_10725 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10667,actual_type_10723,f_10717], null);
var canonical_f_10726 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10666),keys_10725);
dommy.core.update_event_listeners_BANG_.call(null,elem_10666,dommy.utils.dissoc_in,keys_10725);

if(cljs.core.truth_(elem_10666.removeEventListener)){
elem_10666.removeEventListener(cljs.core.name.call(null,actual_type_10723),canonical_f_10726);
} else {
elem_10666.detachEvent(cljs.core.name.call(null,actual_type_10723),canonical_f_10726);
}

var G__10727 = seq__10644_10718;
var G__10728 = chunk__10646_10719;
var G__10729 = count__10647_10720;
var G__10730 = (i__10648_10721 + (1));
seq__10644_10718 = G__10727;
chunk__10646_10719 = G__10728;
count__10647_10720 = G__10729;
i__10648_10721 = G__10730;
continue;
} else {
var temp__4126__auto___10731__$1 = cljs.core.seq.call(null,seq__10644_10718);
if(temp__4126__auto___10731__$1){
var seq__10644_10732__$1 = temp__4126__auto___10731__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10644_10732__$1)){
var c__4907__auto___10733 = cljs.core.chunk_first.call(null,seq__10644_10732__$1);
var G__10734 = cljs.core.chunk_rest.call(null,seq__10644_10732__$1);
var G__10735 = c__4907__auto___10733;
var G__10736 = cljs.core.count.call(null,c__4907__auto___10733);
var G__10737 = (0);
seq__10644_10718 = G__10734;
chunk__10646_10719 = G__10735;
count__10647_10720 = G__10736;
i__10648_10721 = G__10737;
continue;
} else {
var vec__10664_10738 = cljs.core.first.call(null,seq__10644_10732__$1);
var actual_type_10739 = cljs.core.nth.call(null,vec__10664_10738,(0),null);
var __10740 = cljs.core.nth.call(null,vec__10664_10738,(1),null);
var keys_10741 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10667,actual_type_10739,f_10717], null);
var canonical_f_10742 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10666),keys_10741);
dommy.core.update_event_listeners_BANG_.call(null,elem_10666,dommy.utils.dissoc_in,keys_10741);

if(cljs.core.truth_(elem_10666.removeEventListener)){
elem_10666.removeEventListener(cljs.core.name.call(null,actual_type_10739),canonical_f_10742);
} else {
elem_10666.detachEvent(cljs.core.name.call(null,actual_type_10739),canonical_f_10742);
}

var G__10743 = cljs.core.next.call(null,seq__10644_10732__$1);
var G__10744 = null;
var G__10745 = (0);
var G__10746 = (0);
seq__10644_10718 = G__10743;
chunk__10646_10719 = G__10744;
count__10647_10720 = G__10745;
i__10648_10721 = G__10746;
continue;
}
} else {
}
}
break;
}

var G__10747 = cljs.core.next.call(null,seq__10643_10709__$1);
var G__10748 = null;
var G__10749 = (0);
var G__10750 = (0);
seq__10643_10668 = G__10747;
chunk__10650_10669 = G__10748;
count__10651_10670 = G__10749;
i__10652_10671 = G__10750;
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
var G__10751__i = 0, G__10751__a = new Array(arguments.length -  1);
while (G__10751__i < G__10751__a.length) {G__10751__a[G__10751__i] = arguments[G__10751__i + 1]; ++G__10751__i;}
  type_fs = new cljs.core.IndexedSeq(G__10751__a,0);
} 
return dommy$core$unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$unlisten_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$unlisten_BANG_.cljs$lang$applyTo = (function (arglist__10752){
var elem_sel = cljs.core.first(arglist__10752);
var type_fs = cljs.core.rest(arglist__10752);
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

var vec__10760_10767 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10768 = cljs.core.nth.call(null,vec__10760_10767,(0),null);
var selector_10769 = cljs.core.nth.call(null,vec__10760_10767,(1),null);
var seq__10761_10770 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10762_10771 = null;
var count__10763_10772 = (0);
var i__10764_10773 = (0);
while(true){
if((i__10764_10773 < count__10763_10772)){
var vec__10765_10774 = cljs.core._nth.call(null,chunk__10762_10771,i__10764_10773);
var type_10775 = cljs.core.nth.call(null,vec__10765_10774,(0),null);
var f_10776 = cljs.core.nth.call(null,vec__10765_10774,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_10775,((function (seq__10761_10770,chunk__10762_10771,count__10763_10772,i__10764_10773,vec__10765_10774,type_10775,f_10776,vec__10760_10767,elem_10768,selector_10769){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_10775,dommy$core$listen_once_BANG__$_this_fn);

return f_10776.call(null,e);
});})(seq__10761_10770,chunk__10762_10771,count__10763_10772,i__10764_10773,vec__10765_10774,type_10775,f_10776,vec__10760_10767,elem_10768,selector_10769))
);

var G__10777 = seq__10761_10770;
var G__10778 = chunk__10762_10771;
var G__10779 = count__10763_10772;
var G__10780 = (i__10764_10773 + (1));
seq__10761_10770 = G__10777;
chunk__10762_10771 = G__10778;
count__10763_10772 = G__10779;
i__10764_10773 = G__10780;
continue;
} else {
var temp__4126__auto___10781 = cljs.core.seq.call(null,seq__10761_10770);
if(temp__4126__auto___10781){
var seq__10761_10782__$1 = temp__4126__auto___10781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10761_10782__$1)){
var c__4907__auto___10783 = cljs.core.chunk_first.call(null,seq__10761_10782__$1);
var G__10784 = cljs.core.chunk_rest.call(null,seq__10761_10782__$1);
var G__10785 = c__4907__auto___10783;
var G__10786 = cljs.core.count.call(null,c__4907__auto___10783);
var G__10787 = (0);
seq__10761_10770 = G__10784;
chunk__10762_10771 = G__10785;
count__10763_10772 = G__10786;
i__10764_10773 = G__10787;
continue;
} else {
var vec__10766_10788 = cljs.core.first.call(null,seq__10761_10782__$1);
var type_10789 = cljs.core.nth.call(null,vec__10766_10788,(0),null);
var f_10790 = cljs.core.nth.call(null,vec__10766_10788,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_10789,((function (seq__10761_10770,chunk__10762_10771,count__10763_10772,i__10764_10773,vec__10766_10788,type_10789,f_10790,seq__10761_10782__$1,temp__4126__auto___10781,vec__10760_10767,elem_10768,selector_10769){
return (function dommy$core$listen_once_BANG__$_this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_10789,dommy$core$listen_once_BANG__$_this_fn);

return f_10790.call(null,e);
});})(seq__10761_10770,chunk__10762_10771,count__10763_10772,i__10764_10773,vec__10766_10788,type_10789,f_10790,seq__10761_10782__$1,temp__4126__auto___10781,vec__10760_10767,elem_10768,selector_10769))
);

var G__10791 = cljs.core.next.call(null,seq__10761_10782__$1);
var G__10792 = null;
var G__10793 = (0);
var G__10794 = (0);
seq__10761_10770 = G__10791;
chunk__10762_10771 = G__10792;
count__10763_10772 = G__10793;
i__10764_10773 = G__10794;
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
var G__10795__i = 0, G__10795__a = new Array(arguments.length -  1);
while (G__10795__i < G__10795__a.length) {G__10795__a[G__10795__i] = arguments[G__10795__i + 1]; ++G__10795__i;}
  type_fs = new cljs.core.IndexedSeq(G__10795__a,0);
} 
return dommy$core$listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
dommy$core$listen_once_BANG_.cljs$lang$maxFixedArity = 1;
dommy$core$listen_once_BANG_.cljs$lang$applyTo = (function (arglist__10796){
var elem_sel = cljs.core.first(arglist__10796);
var type_fs = cljs.core.rest(arglist__10796);
return dommy$core$listen_once_BANG___delegate(elem_sel,type_fs);
});
dommy$core$listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = dommy$core$listen_once_BANG___delegate;
return dommy$core$listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map