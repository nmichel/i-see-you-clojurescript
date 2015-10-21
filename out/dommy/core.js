// Compiled by ClojureScript 1.7.145 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
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
var or__4569__auto__ = elem.textContent;
if(cljs.core.truth_(or__4569__auto__)){
return or__4569__auto__;
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
dommy.core.style = (function dommy$core$style(var_args){
var args11077 = [];
var len__5627__auto___11080 = arguments.length;
var i__5628__auto___11081 = (0);
while(true){
if((i__5628__auto___11081 < len__5627__auto___11080)){
args11077.push((arguments[i__5628__auto___11081]));

var G__11082 = (i__5628__auto___11081 + (1));
i__5628__auto___11081 = G__11082;
continue;
} else {
}
break;
}

var G__11079 = args11077.length;
switch (G__11079) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11077.length)].join('')));

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
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
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
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args11084 = [];
var len__5627__auto___11087 = arguments.length;
var i__5628__auto___11088 = (0);
while(true){
if((i__5628__auto___11088 < len__5627__auto___11087)){
args11084.push((arguments[i__5628__auto___11088]));

var G__11089 = (i__5628__auto___11088 + (1));
i__5628__auto___11088 = G__11089;
continue;
} else {
}
break;
}

var G__11086 = args11084.length;
switch (G__11086) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11084.length)].join('')));

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
dommy.core.closest = (function dommy$core$closest(var_args){
var args11092 = [];
var len__5627__auto___11095 = arguments.length;
var i__5628__auto___11096 = (0);
while(true){
if((i__5628__auto___11096 < len__5627__auto___11095)){
args11092.push((arguments[i__5628__auto___11096]));

var G__11097 = (i__5628__auto___11096 + (1));
i__5628__auto___11096 = G__11097;
continue;
} else {
}
break;
}

var G__11094 = args11092.length;
switch (G__11094) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11092.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__11091_SHARP_){
return !((p1__11091_SHARP_ === base));
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
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___11107 = arguments.length;
var i__5628__auto___11108 = (0);
while(true){
if((i__5628__auto___11108 < len__5627__auto___11107)){
args__5634__auto__.push((arguments[i__5628__auto___11108]));

var G__11109 = (i__5628__auto___11108 + (1));
i__5628__auto___11108 = G__11109;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((1) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5635__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__11101_11110 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__11102_11111 = null;
var count__11103_11112 = (0);
var i__11104_11113 = (0);
while(true){
if((i__11104_11113 < count__11103_11112)){
var vec__11105_11114 = cljs.core._nth.call(null,chunk__11102_11111,i__11104_11113);
var k_11115 = cljs.core.nth.call(null,vec__11105_11114,(0),null);
var v_11116 = cljs.core.nth.call(null,vec__11105_11114,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_11115),v_11116);

var G__11117 = seq__11101_11110;
var G__11118 = chunk__11102_11111;
var G__11119 = count__11103_11112;
var G__11120 = (i__11104_11113 + (1));
seq__11101_11110 = G__11117;
chunk__11102_11111 = G__11118;
count__11103_11112 = G__11119;
i__11104_11113 = G__11120;
continue;
} else {
var temp__4425__auto___11121 = cljs.core.seq.call(null,seq__11101_11110);
if(temp__4425__auto___11121){
var seq__11101_11122__$1 = temp__4425__auto___11121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11101_11122__$1)){
var c__5372__auto___11123 = cljs.core.chunk_first.call(null,seq__11101_11122__$1);
var G__11124 = cljs.core.chunk_rest.call(null,seq__11101_11122__$1);
var G__11125 = c__5372__auto___11123;
var G__11126 = cljs.core.count.call(null,c__5372__auto___11123);
var G__11127 = (0);
seq__11101_11110 = G__11124;
chunk__11102_11111 = G__11125;
count__11103_11112 = G__11126;
i__11104_11113 = G__11127;
continue;
} else {
var vec__11106_11128 = cljs.core.first.call(null,seq__11101_11122__$1);
var k_11129 = cljs.core.nth.call(null,vec__11106_11128,(0),null);
var v_11130 = cljs.core.nth.call(null,vec__11106_11128,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_11129),v_11130);

var G__11131 = cljs.core.next.call(null,seq__11101_11122__$1);
var G__11132 = null;
var G__11133 = (0);
var G__11134 = (0);
seq__11101_11110 = G__11131;
chunk__11102_11111 = G__11132;
count__11103_11112 = G__11133;
i__11104_11113 = G__11134;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq11099){
var G__11100 = cljs.core.first.call(null,seq11099);
var seq11099__$1 = cljs.core.next.call(null,seq11099);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11100,seq11099__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___11143 = arguments.length;
var i__5628__auto___11144 = (0);
while(true){
if((i__5628__auto___11144 < len__5627__auto___11143)){
args__5634__auto__.push((arguments[i__5628__auto___11144]));

var G__11145 = (i__5628__auto___11144 + (1));
i__5628__auto___11144 = G__11145;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((1) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5635__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__11137_11146 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__11138_11147 = null;
var count__11139_11148 = (0);
var i__11140_11149 = (0);
while(true){
if((i__11140_11149 < count__11139_11148)){
var vec__11141_11150 = cljs.core._nth.call(null,chunk__11138_11147,i__11140_11149);
var k_11151 = cljs.core.nth.call(null,vec__11141_11150,(0),null);
var v_11152 = cljs.core.nth.call(null,vec__11141_11150,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_11151,[cljs.core.str(v_11152),cljs.core.str("px")].join(''));

var G__11153 = seq__11137_11146;
var G__11154 = chunk__11138_11147;
var G__11155 = count__11139_11148;
var G__11156 = (i__11140_11149 + (1));
seq__11137_11146 = G__11153;
chunk__11138_11147 = G__11154;
count__11139_11148 = G__11155;
i__11140_11149 = G__11156;
continue;
} else {
var temp__4425__auto___11157 = cljs.core.seq.call(null,seq__11137_11146);
if(temp__4425__auto___11157){
var seq__11137_11158__$1 = temp__4425__auto___11157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11137_11158__$1)){
var c__5372__auto___11159 = cljs.core.chunk_first.call(null,seq__11137_11158__$1);
var G__11160 = cljs.core.chunk_rest.call(null,seq__11137_11158__$1);
var G__11161 = c__5372__auto___11159;
var G__11162 = cljs.core.count.call(null,c__5372__auto___11159);
var G__11163 = (0);
seq__11137_11146 = G__11160;
chunk__11138_11147 = G__11161;
count__11139_11148 = G__11162;
i__11140_11149 = G__11163;
continue;
} else {
var vec__11142_11164 = cljs.core.first.call(null,seq__11137_11158__$1);
var k_11165 = cljs.core.nth.call(null,vec__11142_11164,(0),null);
var v_11166 = cljs.core.nth.call(null,vec__11142_11164,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_11165,[cljs.core.str(v_11166),cljs.core.str("px")].join(''));

var G__11167 = cljs.core.next.call(null,seq__11137_11158__$1);
var G__11168 = null;
var G__11169 = (0);
var G__11170 = (0);
seq__11137_11146 = G__11167;
chunk__11138_11147 = G__11168;
count__11139_11148 = G__11169;
i__11140_11149 = G__11170;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq11135){
var G__11136 = cljs.core.first.call(null,seq11135);
var seq11135__$1 = cljs.core.next.call(null,seq11135);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11136,seq11135__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to "true":
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args11171 = [];
var len__5627__auto___11186 = arguments.length;
var i__5628__auto___11187 = (0);
while(true){
if((i__5628__auto___11187 < len__5627__auto___11186)){
args11171.push((arguments[i__5628__auto___11187]));

var G__11188 = (i__5628__auto___11187 + (1));
i__5628__auto___11187 = G__11188;
continue;
} else {
}
break;
}

var G__11177 = args11171.length;
switch (G__11177) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5646__auto__ = (new cljs.core.IndexedSeq(args11171.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5646__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,"true");
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__11178 = elem;
(G__11178[k__$1] = v);

return G__11178;
} else {
var G__11179 = elem;
G__11179.setAttribute(k__$1,v);

return G__11179;
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

var seq__11180_11190 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__11181_11191 = null;
var count__11182_11192 = (0);
var i__11183_11193 = (0);
while(true){
if((i__11183_11193 < count__11182_11192)){
var vec__11184_11194 = cljs.core._nth.call(null,chunk__11181_11191,i__11183_11193);
var k_11195__$1 = cljs.core.nth.call(null,vec__11184_11194,(0),null);
var v_11196__$1 = cljs.core.nth.call(null,vec__11184_11194,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_11195__$1,v_11196__$1);

var G__11197 = seq__11180_11190;
var G__11198 = chunk__11181_11191;
var G__11199 = count__11182_11192;
var G__11200 = (i__11183_11193 + (1));
seq__11180_11190 = G__11197;
chunk__11181_11191 = G__11198;
count__11182_11192 = G__11199;
i__11183_11193 = G__11200;
continue;
} else {
var temp__4425__auto___11201 = cljs.core.seq.call(null,seq__11180_11190);
if(temp__4425__auto___11201){
var seq__11180_11202__$1 = temp__4425__auto___11201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11180_11202__$1)){
var c__5372__auto___11203 = cljs.core.chunk_first.call(null,seq__11180_11202__$1);
var G__11204 = cljs.core.chunk_rest.call(null,seq__11180_11202__$1);
var G__11205 = c__5372__auto___11203;
var G__11206 = cljs.core.count.call(null,c__5372__auto___11203);
var G__11207 = (0);
seq__11180_11190 = G__11204;
chunk__11181_11191 = G__11205;
count__11182_11192 = G__11206;
i__11183_11193 = G__11207;
continue;
} else {
var vec__11185_11208 = cljs.core.first.call(null,seq__11180_11202__$1);
var k_11209__$1 = cljs.core.nth.call(null,vec__11185_11208,(0),null);
var v_11210__$1 = cljs.core.nth.call(null,vec__11185_11208,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_11209__$1,v_11210__$1);

var G__11211 = cljs.core.next.call(null,seq__11180_11202__$1);
var G__11212 = null;
var G__11213 = (0);
var G__11214 = (0);
seq__11180_11190 = G__11211;
chunk__11181_11191 = G__11212;
count__11182_11192 = G__11213;
i__11183_11193 = G__11214;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq11172){
var G__11173 = cljs.core.first.call(null,seq11172);
var seq11172__$1 = cljs.core.next.call(null,seq11172);
var G__11174 = cljs.core.first.call(null,seq11172__$1);
var seq11172__$2 = cljs.core.next.call(null,seq11172__$1);
var G__11175 = cljs.core.first.call(null,seq11172__$2);
var seq11172__$3 = cljs.core.next.call(null,seq11172__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11173,G__11174,G__11175,seq11172__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args11215 = [];
var len__5627__auto___11225 = arguments.length;
var i__5628__auto___11226 = (0);
while(true){
if((i__5628__auto___11226 < len__5627__auto___11225)){
args11215.push((arguments[i__5628__auto___11226]));

var G__11227 = (i__5628__auto___11226 + (1));
i__5628__auto___11226 = G__11227;
continue;
} else {
}
break;
}

var G__11220 = args11215.length;
switch (G__11220) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5646__auto__ = (new cljs.core.IndexedSeq(args11215.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5646__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_11229__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_11229__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_11229__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__11221_11230 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__11222_11231 = null;
var count__11223_11232 = (0);
var i__11224_11233 = (0);
while(true){
if((i__11224_11233 < count__11223_11232)){
var k_11234__$1 = cljs.core._nth.call(null,chunk__11222_11231,i__11224_11233);
dommy.core.remove_attr_BANG_.call(null,elem,k_11234__$1);

var G__11235 = seq__11221_11230;
var G__11236 = chunk__11222_11231;
var G__11237 = count__11223_11232;
var G__11238 = (i__11224_11233 + (1));
seq__11221_11230 = G__11235;
chunk__11222_11231 = G__11236;
count__11223_11232 = G__11237;
i__11224_11233 = G__11238;
continue;
} else {
var temp__4425__auto___11239 = cljs.core.seq.call(null,seq__11221_11230);
if(temp__4425__auto___11239){
var seq__11221_11240__$1 = temp__4425__auto___11239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11221_11240__$1)){
var c__5372__auto___11241 = cljs.core.chunk_first.call(null,seq__11221_11240__$1);
var G__11242 = cljs.core.chunk_rest.call(null,seq__11221_11240__$1);
var G__11243 = c__5372__auto___11241;
var G__11244 = cljs.core.count.call(null,c__5372__auto___11241);
var G__11245 = (0);
seq__11221_11230 = G__11242;
chunk__11222_11231 = G__11243;
count__11223_11232 = G__11244;
i__11224_11233 = G__11245;
continue;
} else {
var k_11246__$1 = cljs.core.first.call(null,seq__11221_11240__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_11246__$1);

var G__11247 = cljs.core.next.call(null,seq__11221_11240__$1);
var G__11248 = null;
var G__11249 = (0);
var G__11250 = (0);
seq__11221_11230 = G__11247;
chunk__11222_11231 = G__11248;
count__11223_11232 = G__11249;
i__11224_11233 = G__11250;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq11216){
var G__11217 = cljs.core.first.call(null,seq11216);
var seq11216__$1 = cljs.core.next.call(null,seq11216);
var G__11218 = cljs.core.first.call(null,seq11216__$1);
var seq11216__$2 = cljs.core.next.call(null,seq11216__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11217,G__11218,seq11216__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args11251 = [];
var len__5627__auto___11254 = arguments.length;
var i__5628__auto___11255 = (0);
while(true){
if((i__5628__auto___11255 < len__5627__auto___11254)){
args11251.push((arguments[i__5628__auto___11255]));

var G__11256 = (i__5628__auto___11255 + (1));
i__5628__auto___11255 = G__11256;
continue;
} else {
}
break;
}

var G__11253 = args11251.length;
switch (G__11253) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11251.length)].join('')));

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
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args11258 = [];
var len__5627__auto___11276 = arguments.length;
var i__5628__auto___11277 = (0);
while(true){
if((i__5628__auto___11277 < len__5627__auto___11276)){
args11258.push((arguments[i__5628__auto___11277]));

var G__11278 = (i__5628__auto___11277 + (1));
i__5628__auto___11277 = G__11278;
continue;
} else {
}
break;
}

var G__11263 = args11258.length;
switch (G__11263) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5646__auto__ = (new cljs.core.IndexedSeq(args11258.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5646__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___11280 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___11280)){
var class_list_11281 = temp__4423__auto___11280;
var seq__11264_11282 = cljs.core.seq.call(null,classes__$1);
var chunk__11265_11283 = null;
var count__11266_11284 = (0);
var i__11267_11285 = (0);
while(true){
if((i__11267_11285 < count__11266_11284)){
var c_11286 = cljs.core._nth.call(null,chunk__11265_11283,i__11267_11285);
class_list_11281.add(c_11286);

var G__11287 = seq__11264_11282;
var G__11288 = chunk__11265_11283;
var G__11289 = count__11266_11284;
var G__11290 = (i__11267_11285 + (1));
seq__11264_11282 = G__11287;
chunk__11265_11283 = G__11288;
count__11266_11284 = G__11289;
i__11267_11285 = G__11290;
continue;
} else {
var temp__4425__auto___11291 = cljs.core.seq.call(null,seq__11264_11282);
if(temp__4425__auto___11291){
var seq__11264_11292__$1 = temp__4425__auto___11291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11264_11292__$1)){
var c__5372__auto___11293 = cljs.core.chunk_first.call(null,seq__11264_11292__$1);
var G__11294 = cljs.core.chunk_rest.call(null,seq__11264_11292__$1);
var G__11295 = c__5372__auto___11293;
var G__11296 = cljs.core.count.call(null,c__5372__auto___11293);
var G__11297 = (0);
seq__11264_11282 = G__11294;
chunk__11265_11283 = G__11295;
count__11266_11284 = G__11296;
i__11267_11285 = G__11297;
continue;
} else {
var c_11298 = cljs.core.first.call(null,seq__11264_11292__$1);
class_list_11281.add(c_11298);

var G__11299 = cljs.core.next.call(null,seq__11264_11292__$1);
var G__11300 = null;
var G__11301 = (0);
var G__11302 = (0);
seq__11264_11282 = G__11299;
chunk__11265_11283 = G__11300;
count__11266_11284 = G__11301;
i__11267_11285 = G__11302;
continue;
}
} else {
}
}
break;
}
} else {
var seq__11268_11303 = cljs.core.seq.call(null,classes__$1);
var chunk__11269_11304 = null;
var count__11270_11305 = (0);
var i__11271_11306 = (0);
while(true){
if((i__11271_11306 < count__11270_11305)){
var c_11307 = cljs.core._nth.call(null,chunk__11269_11304,i__11271_11306);
var class_name_11308 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_11308,c_11307))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_11308 === ""))?c_11307:[cljs.core.str(class_name_11308),cljs.core.str(" "),cljs.core.str(c_11307)].join('')));
}

var G__11309 = seq__11268_11303;
var G__11310 = chunk__11269_11304;
var G__11311 = count__11270_11305;
var G__11312 = (i__11271_11306 + (1));
seq__11268_11303 = G__11309;
chunk__11269_11304 = G__11310;
count__11270_11305 = G__11311;
i__11271_11306 = G__11312;
continue;
} else {
var temp__4425__auto___11313 = cljs.core.seq.call(null,seq__11268_11303);
if(temp__4425__auto___11313){
var seq__11268_11314__$1 = temp__4425__auto___11313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11268_11314__$1)){
var c__5372__auto___11315 = cljs.core.chunk_first.call(null,seq__11268_11314__$1);
var G__11316 = cljs.core.chunk_rest.call(null,seq__11268_11314__$1);
var G__11317 = c__5372__auto___11315;
var G__11318 = cljs.core.count.call(null,c__5372__auto___11315);
var G__11319 = (0);
seq__11268_11303 = G__11316;
chunk__11269_11304 = G__11317;
count__11270_11305 = G__11318;
i__11271_11306 = G__11319;
continue;
} else {
var c_11320 = cljs.core.first.call(null,seq__11268_11314__$1);
var class_name_11321 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_11321,c_11320))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_11321 === ""))?c_11320:[cljs.core.str(class_name_11321),cljs.core.str(" "),cljs.core.str(c_11320)].join('')));
}

var G__11322 = cljs.core.next.call(null,seq__11268_11314__$1);
var G__11323 = null;
var G__11324 = (0);
var G__11325 = (0);
seq__11268_11303 = G__11322;
chunk__11269_11304 = G__11323;
count__11270_11305 = G__11324;
i__11271_11306 = G__11325;
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
var seq__11272_11326 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__11273_11327 = null;
var count__11274_11328 = (0);
var i__11275_11329 = (0);
while(true){
if((i__11275_11329 < count__11274_11328)){
var c_11330 = cljs.core._nth.call(null,chunk__11273_11327,i__11275_11329);
dommy.core.add_class_BANG_.call(null,elem,c_11330);

var G__11331 = seq__11272_11326;
var G__11332 = chunk__11273_11327;
var G__11333 = count__11274_11328;
var G__11334 = (i__11275_11329 + (1));
seq__11272_11326 = G__11331;
chunk__11273_11327 = G__11332;
count__11274_11328 = G__11333;
i__11275_11329 = G__11334;
continue;
} else {
var temp__4425__auto___11335 = cljs.core.seq.call(null,seq__11272_11326);
if(temp__4425__auto___11335){
var seq__11272_11336__$1 = temp__4425__auto___11335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11272_11336__$1)){
var c__5372__auto___11337 = cljs.core.chunk_first.call(null,seq__11272_11336__$1);
var G__11338 = cljs.core.chunk_rest.call(null,seq__11272_11336__$1);
var G__11339 = c__5372__auto___11337;
var G__11340 = cljs.core.count.call(null,c__5372__auto___11337);
var G__11341 = (0);
seq__11272_11326 = G__11338;
chunk__11273_11327 = G__11339;
count__11274_11328 = G__11340;
i__11275_11329 = G__11341;
continue;
} else {
var c_11342 = cljs.core.first.call(null,seq__11272_11336__$1);
dommy.core.add_class_BANG_.call(null,elem,c_11342);

var G__11343 = cljs.core.next.call(null,seq__11272_11336__$1);
var G__11344 = null;
var G__11345 = (0);
var G__11346 = (0);
seq__11272_11326 = G__11343;
chunk__11273_11327 = G__11344;
count__11274_11328 = G__11345;
i__11275_11329 = G__11346;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq11259){
var G__11260 = cljs.core.first.call(null,seq11259);
var seq11259__$1 = cljs.core.next.call(null,seq11259);
var G__11261 = cljs.core.first.call(null,seq11259__$1);
var seq11259__$2 = cljs.core.next.call(null,seq11259__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11260,G__11261,seq11259__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args11347 = [];
var len__5627__auto___11357 = arguments.length;
var i__5628__auto___11358 = (0);
while(true){
if((i__5628__auto___11358 < len__5627__auto___11357)){
args11347.push((arguments[i__5628__auto___11358]));

var G__11359 = (i__5628__auto___11358 + (1));
i__5628__auto___11358 = G__11359;
continue;
} else {
}
break;
}

var G__11352 = args11347.length;
switch (G__11352) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5646__auto__ = (new cljs.core.IndexedSeq(args11347.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5646__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___11361 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___11361)){
var class_list_11362 = temp__4423__auto___11361;
class_list_11362.remove(c__$1);
} else {
var class_name_11363 = dommy.core.class$.call(null,elem);
var new_class_name_11364 = dommy.utils.remove_class_str.call(null,class_name_11363,c__$1);
if((class_name_11363 === new_class_name_11364)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_11364);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__11353 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__11354 = null;
var count__11355 = (0);
var i__11356 = (0);
while(true){
if((i__11356 < count__11355)){
var c = cljs.core._nth.call(null,chunk__11354,i__11356);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__11365 = seq__11353;
var G__11366 = chunk__11354;
var G__11367 = count__11355;
var G__11368 = (i__11356 + (1));
seq__11353 = G__11365;
chunk__11354 = G__11366;
count__11355 = G__11367;
i__11356 = G__11368;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11353);
if(temp__4425__auto__){
var seq__11353__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11353__$1)){
var c__5372__auto__ = cljs.core.chunk_first.call(null,seq__11353__$1);
var G__11369 = cljs.core.chunk_rest.call(null,seq__11353__$1);
var G__11370 = c__5372__auto__;
var G__11371 = cljs.core.count.call(null,c__5372__auto__);
var G__11372 = (0);
seq__11353 = G__11369;
chunk__11354 = G__11370;
count__11355 = G__11371;
i__11356 = G__11372;
continue;
} else {
var c = cljs.core.first.call(null,seq__11353__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__11373 = cljs.core.next.call(null,seq__11353__$1);
var G__11374 = null;
var G__11375 = (0);
var G__11376 = (0);
seq__11353 = G__11373;
chunk__11354 = G__11374;
count__11355 = G__11375;
i__11356 = G__11376;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq11348){
var G__11349 = cljs.core.first.call(null,seq11348);
var seq11348__$1 = cljs.core.next.call(null,seq11348);
var G__11350 = cljs.core.first.call(null,seq11348__$1);
var seq11348__$2 = cljs.core.next.call(null,seq11348__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11349,G__11350,seq11348__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args11377 = [];
var len__5627__auto___11380 = arguments.length;
var i__5628__auto___11381 = (0);
while(true){
if((i__5628__auto___11381 < len__5627__auto___11380)){
args11377.push((arguments[i__5628__auto___11381]));

var G__11382 = (i__5628__auto___11381 + (1));
i__5628__auto___11381 = G__11382;
continue;
} else {
}
break;
}

var G__11379 = args11377.length;
switch (G__11379) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11377.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___11384 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___11384)){
var class_list_11385 = temp__4423__auto___11384;
class_list_11385.toggle(c__$1);
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
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args11386 = [];
var len__5627__auto___11389 = arguments.length;
var i__5628__auto___11390 = (0);
while(true){
if((i__5628__auto___11390 < len__5627__auto___11389)){
args11386.push((arguments[i__5628__auto___11390]));

var G__11391 = (i__5628__auto___11390 + (1));
i__5628__auto___11390 = G__11391;
continue;
} else {
}
break;
}

var G__11388 = args11386.length;
switch (G__11388) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11386.length)].join('')));

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
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args11393 = [];
var len__5627__auto___11396 = arguments.length;
var i__5628__auto___11397 = (0);
while(true){
if((i__5628__auto___11397 < len__5627__auto___11396)){
args11393.push((arguments[i__5628__auto___11397]));

var G__11398 = (i__5628__auto___11397 + (1));
i__5628__auto___11397 = G__11398;
continue;
} else {
}
break;
}

var G__11395 = args11393.length;
switch (G__11395) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11393.length)].join('')));

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
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args11400 = [];
var len__5627__auto___11411 = arguments.length;
var i__5628__auto___11412 = (0);
while(true){
if((i__5628__auto___11412 < len__5627__auto___11411)){
args11400.push((arguments[i__5628__auto___11412]));

var G__11413 = (i__5628__auto___11412 + (1));
i__5628__auto___11412 = G__11413;
continue;
} else {
}
break;
}

var G__11405 = args11400.length;
switch (G__11405) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5646__auto__ = (new cljs.core.IndexedSeq(args11400.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5646__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__11406 = parent;
G__11406.appendChild(child);

return G__11406;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__11407_11415 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__11408_11416 = null;
var count__11409_11417 = (0);
var i__11410_11418 = (0);
while(true){
if((i__11410_11418 < count__11409_11417)){
var c_11419 = cljs.core._nth.call(null,chunk__11408_11416,i__11410_11418);
dommy.core.append_BANG_.call(null,parent,c_11419);

var G__11420 = seq__11407_11415;
var G__11421 = chunk__11408_11416;
var G__11422 = count__11409_11417;
var G__11423 = (i__11410_11418 + (1));
seq__11407_11415 = G__11420;
chunk__11408_11416 = G__11421;
count__11409_11417 = G__11422;
i__11410_11418 = G__11423;
continue;
} else {
var temp__4425__auto___11424 = cljs.core.seq.call(null,seq__11407_11415);
if(temp__4425__auto___11424){
var seq__11407_11425__$1 = temp__4425__auto___11424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11407_11425__$1)){
var c__5372__auto___11426 = cljs.core.chunk_first.call(null,seq__11407_11425__$1);
var G__11427 = cljs.core.chunk_rest.call(null,seq__11407_11425__$1);
var G__11428 = c__5372__auto___11426;
var G__11429 = cljs.core.count.call(null,c__5372__auto___11426);
var G__11430 = (0);
seq__11407_11415 = G__11427;
chunk__11408_11416 = G__11428;
count__11409_11417 = G__11429;
i__11410_11418 = G__11430;
continue;
} else {
var c_11431 = cljs.core.first.call(null,seq__11407_11425__$1);
dommy.core.append_BANG_.call(null,parent,c_11431);

var G__11432 = cljs.core.next.call(null,seq__11407_11425__$1);
var G__11433 = null;
var G__11434 = (0);
var G__11435 = (0);
seq__11407_11415 = G__11432;
chunk__11408_11416 = G__11433;
count__11409_11417 = G__11434;
i__11410_11418 = G__11435;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq11401){
var G__11402 = cljs.core.first.call(null,seq11401);
var seq11401__$1 = cljs.core.next.call(null,seq11401);
var G__11403 = cljs.core.first.call(null,seq11401__$1);
var seq11401__$2 = cljs.core.next.call(null,seq11401__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11402,G__11403,seq11401__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args11436 = [];
var len__5627__auto___11447 = arguments.length;
var i__5628__auto___11448 = (0);
while(true){
if((i__5628__auto___11448 < len__5627__auto___11447)){
args11436.push((arguments[i__5628__auto___11448]));

var G__11449 = (i__5628__auto___11448 + (1));
i__5628__auto___11448 = G__11449;
continue;
} else {
}
break;
}

var G__11441 = args11436.length;
switch (G__11441) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5646__auto__ = (new cljs.core.IndexedSeq(args11436.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5646__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__11442 = parent;
G__11442.insertBefore(child,parent.firstChild);

return G__11442;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__11443_11451 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__11444_11452 = null;
var count__11445_11453 = (0);
var i__11446_11454 = (0);
while(true){
if((i__11446_11454 < count__11445_11453)){
var c_11455 = cljs.core._nth.call(null,chunk__11444_11452,i__11446_11454);
dommy.core.prepend_BANG_.call(null,parent,c_11455);

var G__11456 = seq__11443_11451;
var G__11457 = chunk__11444_11452;
var G__11458 = count__11445_11453;
var G__11459 = (i__11446_11454 + (1));
seq__11443_11451 = G__11456;
chunk__11444_11452 = G__11457;
count__11445_11453 = G__11458;
i__11446_11454 = G__11459;
continue;
} else {
var temp__4425__auto___11460 = cljs.core.seq.call(null,seq__11443_11451);
if(temp__4425__auto___11460){
var seq__11443_11461__$1 = temp__4425__auto___11460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11443_11461__$1)){
var c__5372__auto___11462 = cljs.core.chunk_first.call(null,seq__11443_11461__$1);
var G__11463 = cljs.core.chunk_rest.call(null,seq__11443_11461__$1);
var G__11464 = c__5372__auto___11462;
var G__11465 = cljs.core.count.call(null,c__5372__auto___11462);
var G__11466 = (0);
seq__11443_11451 = G__11463;
chunk__11444_11452 = G__11464;
count__11445_11453 = G__11465;
i__11446_11454 = G__11466;
continue;
} else {
var c_11467 = cljs.core.first.call(null,seq__11443_11461__$1);
dommy.core.prepend_BANG_.call(null,parent,c_11467);

var G__11468 = cljs.core.next.call(null,seq__11443_11461__$1);
var G__11469 = null;
var G__11470 = (0);
var G__11471 = (0);
seq__11443_11451 = G__11468;
chunk__11444_11452 = G__11469;
count__11445_11453 = G__11470;
i__11446_11454 = G__11471;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq11437){
var G__11438 = cljs.core.first.call(null,seq11437);
var seq11437__$1 = cljs.core.next.call(null,seq11437);
var G__11439 = cljs.core.first.call(null,seq11437__$1);
var seq11437__$2 = cljs.core.next.call(null,seq11437__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11438,G__11439,seq11437__$2);
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
var temp__4423__auto___11472 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___11472)){
var next_11473 = temp__4423__auto___11472;
dommy.core.insert_before_BANG_.call(null,elem,next_11473);
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
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args11474 = [];
var len__5627__auto___11478 = arguments.length;
var i__5628__auto___11479 = (0);
while(true){
if((i__5628__auto___11479 < len__5627__auto___11478)){
args11474.push((arguments[i__5628__auto___11479]));

var G__11480 = (i__5628__auto___11479 + (1));
i__5628__auto___11479 = G__11480;
continue;
} else {
}
break;
}

var G__11476 = args11474.length;
switch (G__11476) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11474.length)].join('')));

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
var G__11477 = p;
G__11477.removeChild(elem);

return G__11477;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11482){
var vec__11483 = p__11482;
var special_mouse_event = cljs.core.nth.call(null,vec__11483,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__11483,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11483,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__11483,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4569__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4569__auto__)){
return or__4569__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4557__auto__ = related_target;
if(cljs.core.truth_(and__4557__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4557__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__11483,special_mouse_event,real_mouse_event))
});})(vec__11483,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4557__auto__ = selected_target;
if(cljs.core.truth_(and__4557__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4557__auto__;
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
var or__4569__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4569__auto__)){
return or__4569__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___11487 = arguments.length;
var i__5628__auto___11488 = (0);
while(true){
if((i__5628__auto___11488 < len__5627__auto___11487)){
args__5634__auto__.push((arguments[i__5628__auto___11488]));

var G__11489 = (i__5628__auto___11488 + (1));
i__5628__auto___11488 = G__11489;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((2) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5635__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq11484){
var G__11485 = cljs.core.first.call(null,seq11484);
var seq11484__$1 = cljs.core.next.call(null,seq11484);
var G__11486 = cljs.core.first.call(null,seq11484__$1);
var seq11484__$2 = cljs.core.next.call(null,seq11484__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11485,G__11486,seq11484__$2);
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
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___11515 = arguments.length;
var i__5628__auto___11516 = (0);
while(true){
if((i__5628__auto___11516 < len__5627__auto___11515)){
args__5634__auto__.push((arguments[i__5628__auto___11516]));

var G__11517 = (i__5628__auto___11516 + (1));
i__5628__auto___11516 = G__11517;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((1) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5635__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__11492_11518 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11519 = cljs.core.nth.call(null,vec__11492_11518,(0),null);
var selector_11520 = cljs.core.nth.call(null,vec__11492_11518,(1),null);
var seq__11493_11521 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11500_11522 = null;
var count__11501_11523 = (0);
var i__11502_11524 = (0);
while(true){
if((i__11502_11524 < count__11501_11523)){
var vec__11509_11525 = cljs.core._nth.call(null,chunk__11500_11522,i__11502_11524);
var orig_type_11526 = cljs.core.nth.call(null,vec__11509_11525,(0),null);
var f_11527 = cljs.core.nth.call(null,vec__11509_11525,(1),null);
var seq__11503_11528 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11526,cljs.core.PersistentArrayMap.fromArray([orig_type_11526,cljs.core.identity], true, false)));
var chunk__11505_11529 = null;
var count__11506_11530 = (0);
var i__11507_11531 = (0);
while(true){
if((i__11507_11531 < count__11506_11530)){
var vec__11510_11532 = cljs.core._nth.call(null,chunk__11505_11529,i__11507_11531);
var actual_type_11533 = cljs.core.nth.call(null,vec__11510_11532,(0),null);
var factory_11534 = cljs.core.nth.call(null,vec__11510_11532,(1),null);
var canonical_f_11535 = (cljs.core.truth_(selector_11520)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11519,selector_11520):cljs.core.identity).call(null,factory_11534.call(null,f_11527));
dommy.core.update_event_listeners_BANG_.call(null,elem_11519,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11520,actual_type_11533,f_11527], null),canonical_f_11535);

if(cljs.core.truth_(elem_11519.addEventListener)){
elem_11519.addEventListener(cljs.core.name.call(null,actual_type_11533),canonical_f_11535);
} else {
elem_11519.attachEvent(cljs.core.name.call(null,actual_type_11533),canonical_f_11535);
}

var G__11536 = seq__11503_11528;
var G__11537 = chunk__11505_11529;
var G__11538 = count__11506_11530;
var G__11539 = (i__11507_11531 + (1));
seq__11503_11528 = G__11536;
chunk__11505_11529 = G__11537;
count__11506_11530 = G__11538;
i__11507_11531 = G__11539;
continue;
} else {
var temp__4425__auto___11540 = cljs.core.seq.call(null,seq__11503_11528);
if(temp__4425__auto___11540){
var seq__11503_11541__$1 = temp__4425__auto___11540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11503_11541__$1)){
var c__5372__auto___11542 = cljs.core.chunk_first.call(null,seq__11503_11541__$1);
var G__11543 = cljs.core.chunk_rest.call(null,seq__11503_11541__$1);
var G__11544 = c__5372__auto___11542;
var G__11545 = cljs.core.count.call(null,c__5372__auto___11542);
var G__11546 = (0);
seq__11503_11528 = G__11543;
chunk__11505_11529 = G__11544;
count__11506_11530 = G__11545;
i__11507_11531 = G__11546;
continue;
} else {
var vec__11511_11547 = cljs.core.first.call(null,seq__11503_11541__$1);
var actual_type_11548 = cljs.core.nth.call(null,vec__11511_11547,(0),null);
var factory_11549 = cljs.core.nth.call(null,vec__11511_11547,(1),null);
var canonical_f_11550 = (cljs.core.truth_(selector_11520)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11519,selector_11520):cljs.core.identity).call(null,factory_11549.call(null,f_11527));
dommy.core.update_event_listeners_BANG_.call(null,elem_11519,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11520,actual_type_11548,f_11527], null),canonical_f_11550);

if(cljs.core.truth_(elem_11519.addEventListener)){
elem_11519.addEventListener(cljs.core.name.call(null,actual_type_11548),canonical_f_11550);
} else {
elem_11519.attachEvent(cljs.core.name.call(null,actual_type_11548),canonical_f_11550);
}

var G__11551 = cljs.core.next.call(null,seq__11503_11541__$1);
var G__11552 = null;
var G__11553 = (0);
var G__11554 = (0);
seq__11503_11528 = G__11551;
chunk__11505_11529 = G__11552;
count__11506_11530 = G__11553;
i__11507_11531 = G__11554;
continue;
}
} else {
}
}
break;
}

var G__11555 = seq__11493_11521;
var G__11556 = chunk__11500_11522;
var G__11557 = count__11501_11523;
var G__11558 = (i__11502_11524 + (1));
seq__11493_11521 = G__11555;
chunk__11500_11522 = G__11556;
count__11501_11523 = G__11557;
i__11502_11524 = G__11558;
continue;
} else {
var temp__4425__auto___11559 = cljs.core.seq.call(null,seq__11493_11521);
if(temp__4425__auto___11559){
var seq__11493_11560__$1 = temp__4425__auto___11559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11493_11560__$1)){
var c__5372__auto___11561 = cljs.core.chunk_first.call(null,seq__11493_11560__$1);
var G__11562 = cljs.core.chunk_rest.call(null,seq__11493_11560__$1);
var G__11563 = c__5372__auto___11561;
var G__11564 = cljs.core.count.call(null,c__5372__auto___11561);
var G__11565 = (0);
seq__11493_11521 = G__11562;
chunk__11500_11522 = G__11563;
count__11501_11523 = G__11564;
i__11502_11524 = G__11565;
continue;
} else {
var vec__11512_11566 = cljs.core.first.call(null,seq__11493_11560__$1);
var orig_type_11567 = cljs.core.nth.call(null,vec__11512_11566,(0),null);
var f_11568 = cljs.core.nth.call(null,vec__11512_11566,(1),null);
var seq__11494_11569 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11567,cljs.core.PersistentArrayMap.fromArray([orig_type_11567,cljs.core.identity], true, false)));
var chunk__11496_11570 = null;
var count__11497_11571 = (0);
var i__11498_11572 = (0);
while(true){
if((i__11498_11572 < count__11497_11571)){
var vec__11513_11573 = cljs.core._nth.call(null,chunk__11496_11570,i__11498_11572);
var actual_type_11574 = cljs.core.nth.call(null,vec__11513_11573,(0),null);
var factory_11575 = cljs.core.nth.call(null,vec__11513_11573,(1),null);
var canonical_f_11576 = (cljs.core.truth_(selector_11520)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11519,selector_11520):cljs.core.identity).call(null,factory_11575.call(null,f_11568));
dommy.core.update_event_listeners_BANG_.call(null,elem_11519,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11520,actual_type_11574,f_11568], null),canonical_f_11576);

if(cljs.core.truth_(elem_11519.addEventListener)){
elem_11519.addEventListener(cljs.core.name.call(null,actual_type_11574),canonical_f_11576);
} else {
elem_11519.attachEvent(cljs.core.name.call(null,actual_type_11574),canonical_f_11576);
}

var G__11577 = seq__11494_11569;
var G__11578 = chunk__11496_11570;
var G__11579 = count__11497_11571;
var G__11580 = (i__11498_11572 + (1));
seq__11494_11569 = G__11577;
chunk__11496_11570 = G__11578;
count__11497_11571 = G__11579;
i__11498_11572 = G__11580;
continue;
} else {
var temp__4425__auto___11581__$1 = cljs.core.seq.call(null,seq__11494_11569);
if(temp__4425__auto___11581__$1){
var seq__11494_11582__$1 = temp__4425__auto___11581__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11494_11582__$1)){
var c__5372__auto___11583 = cljs.core.chunk_first.call(null,seq__11494_11582__$1);
var G__11584 = cljs.core.chunk_rest.call(null,seq__11494_11582__$1);
var G__11585 = c__5372__auto___11583;
var G__11586 = cljs.core.count.call(null,c__5372__auto___11583);
var G__11587 = (0);
seq__11494_11569 = G__11584;
chunk__11496_11570 = G__11585;
count__11497_11571 = G__11586;
i__11498_11572 = G__11587;
continue;
} else {
var vec__11514_11588 = cljs.core.first.call(null,seq__11494_11582__$1);
var actual_type_11589 = cljs.core.nth.call(null,vec__11514_11588,(0),null);
var factory_11590 = cljs.core.nth.call(null,vec__11514_11588,(1),null);
var canonical_f_11591 = (cljs.core.truth_(selector_11520)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11519,selector_11520):cljs.core.identity).call(null,factory_11590.call(null,f_11568));
dommy.core.update_event_listeners_BANG_.call(null,elem_11519,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11520,actual_type_11589,f_11568], null),canonical_f_11591);

if(cljs.core.truth_(elem_11519.addEventListener)){
elem_11519.addEventListener(cljs.core.name.call(null,actual_type_11589),canonical_f_11591);
} else {
elem_11519.attachEvent(cljs.core.name.call(null,actual_type_11589),canonical_f_11591);
}

var G__11592 = cljs.core.next.call(null,seq__11494_11582__$1);
var G__11593 = null;
var G__11594 = (0);
var G__11595 = (0);
seq__11494_11569 = G__11592;
chunk__11496_11570 = G__11593;
count__11497_11571 = G__11594;
i__11498_11572 = G__11595;
continue;
}
} else {
}
}
break;
}

var G__11596 = cljs.core.next.call(null,seq__11493_11560__$1);
var G__11597 = null;
var G__11598 = (0);
var G__11599 = (0);
seq__11493_11521 = G__11596;
chunk__11500_11522 = G__11597;
count__11501_11523 = G__11598;
i__11502_11524 = G__11599;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq11490){
var G__11491 = cljs.core.first.call(null,seq11490);
var seq11490__$1 = cljs.core.next.call(null,seq11490);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11491,seq11490__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___11625 = arguments.length;
var i__5628__auto___11626 = (0);
while(true){
if((i__5628__auto___11626 < len__5627__auto___11625)){
args__5634__auto__.push((arguments[i__5628__auto___11626]));

var G__11627 = (i__5628__auto___11626 + (1));
i__5628__auto___11626 = G__11627;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((1) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5635__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__11602_11628 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11629 = cljs.core.nth.call(null,vec__11602_11628,(0),null);
var selector_11630 = cljs.core.nth.call(null,vec__11602_11628,(1),null);
var seq__11603_11631 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11610_11632 = null;
var count__11611_11633 = (0);
var i__11612_11634 = (0);
while(true){
if((i__11612_11634 < count__11611_11633)){
var vec__11619_11635 = cljs.core._nth.call(null,chunk__11610_11632,i__11612_11634);
var orig_type_11636 = cljs.core.nth.call(null,vec__11619_11635,(0),null);
var f_11637 = cljs.core.nth.call(null,vec__11619_11635,(1),null);
var seq__11613_11638 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11636,cljs.core.PersistentArrayMap.fromArray([orig_type_11636,cljs.core.identity], true, false)));
var chunk__11615_11639 = null;
var count__11616_11640 = (0);
var i__11617_11641 = (0);
while(true){
if((i__11617_11641 < count__11616_11640)){
var vec__11620_11642 = cljs.core._nth.call(null,chunk__11615_11639,i__11617_11641);
var actual_type_11643 = cljs.core.nth.call(null,vec__11620_11642,(0),null);
var __11644 = cljs.core.nth.call(null,vec__11620_11642,(1),null);
var keys_11645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11630,actual_type_11643,f_11637], null);
var canonical_f_11646 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11629),keys_11645);
dommy.core.update_event_listeners_BANG_.call(null,elem_11629,dommy.utils.dissoc_in,keys_11645);

if(cljs.core.truth_(elem_11629.removeEventListener)){
elem_11629.removeEventListener(cljs.core.name.call(null,actual_type_11643),canonical_f_11646);
} else {
elem_11629.detachEvent(cljs.core.name.call(null,actual_type_11643),canonical_f_11646);
}

var G__11647 = seq__11613_11638;
var G__11648 = chunk__11615_11639;
var G__11649 = count__11616_11640;
var G__11650 = (i__11617_11641 + (1));
seq__11613_11638 = G__11647;
chunk__11615_11639 = G__11648;
count__11616_11640 = G__11649;
i__11617_11641 = G__11650;
continue;
} else {
var temp__4425__auto___11651 = cljs.core.seq.call(null,seq__11613_11638);
if(temp__4425__auto___11651){
var seq__11613_11652__$1 = temp__4425__auto___11651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11613_11652__$1)){
var c__5372__auto___11653 = cljs.core.chunk_first.call(null,seq__11613_11652__$1);
var G__11654 = cljs.core.chunk_rest.call(null,seq__11613_11652__$1);
var G__11655 = c__5372__auto___11653;
var G__11656 = cljs.core.count.call(null,c__5372__auto___11653);
var G__11657 = (0);
seq__11613_11638 = G__11654;
chunk__11615_11639 = G__11655;
count__11616_11640 = G__11656;
i__11617_11641 = G__11657;
continue;
} else {
var vec__11621_11658 = cljs.core.first.call(null,seq__11613_11652__$1);
var actual_type_11659 = cljs.core.nth.call(null,vec__11621_11658,(0),null);
var __11660 = cljs.core.nth.call(null,vec__11621_11658,(1),null);
var keys_11661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11630,actual_type_11659,f_11637], null);
var canonical_f_11662 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11629),keys_11661);
dommy.core.update_event_listeners_BANG_.call(null,elem_11629,dommy.utils.dissoc_in,keys_11661);

if(cljs.core.truth_(elem_11629.removeEventListener)){
elem_11629.removeEventListener(cljs.core.name.call(null,actual_type_11659),canonical_f_11662);
} else {
elem_11629.detachEvent(cljs.core.name.call(null,actual_type_11659),canonical_f_11662);
}

var G__11663 = cljs.core.next.call(null,seq__11613_11652__$1);
var G__11664 = null;
var G__11665 = (0);
var G__11666 = (0);
seq__11613_11638 = G__11663;
chunk__11615_11639 = G__11664;
count__11616_11640 = G__11665;
i__11617_11641 = G__11666;
continue;
}
} else {
}
}
break;
}

var G__11667 = seq__11603_11631;
var G__11668 = chunk__11610_11632;
var G__11669 = count__11611_11633;
var G__11670 = (i__11612_11634 + (1));
seq__11603_11631 = G__11667;
chunk__11610_11632 = G__11668;
count__11611_11633 = G__11669;
i__11612_11634 = G__11670;
continue;
} else {
var temp__4425__auto___11671 = cljs.core.seq.call(null,seq__11603_11631);
if(temp__4425__auto___11671){
var seq__11603_11672__$1 = temp__4425__auto___11671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11603_11672__$1)){
var c__5372__auto___11673 = cljs.core.chunk_first.call(null,seq__11603_11672__$1);
var G__11674 = cljs.core.chunk_rest.call(null,seq__11603_11672__$1);
var G__11675 = c__5372__auto___11673;
var G__11676 = cljs.core.count.call(null,c__5372__auto___11673);
var G__11677 = (0);
seq__11603_11631 = G__11674;
chunk__11610_11632 = G__11675;
count__11611_11633 = G__11676;
i__11612_11634 = G__11677;
continue;
} else {
var vec__11622_11678 = cljs.core.first.call(null,seq__11603_11672__$1);
var orig_type_11679 = cljs.core.nth.call(null,vec__11622_11678,(0),null);
var f_11680 = cljs.core.nth.call(null,vec__11622_11678,(1),null);
var seq__11604_11681 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11679,cljs.core.PersistentArrayMap.fromArray([orig_type_11679,cljs.core.identity], true, false)));
var chunk__11606_11682 = null;
var count__11607_11683 = (0);
var i__11608_11684 = (0);
while(true){
if((i__11608_11684 < count__11607_11683)){
var vec__11623_11685 = cljs.core._nth.call(null,chunk__11606_11682,i__11608_11684);
var actual_type_11686 = cljs.core.nth.call(null,vec__11623_11685,(0),null);
var __11687 = cljs.core.nth.call(null,vec__11623_11685,(1),null);
var keys_11688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11630,actual_type_11686,f_11680], null);
var canonical_f_11689 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11629),keys_11688);
dommy.core.update_event_listeners_BANG_.call(null,elem_11629,dommy.utils.dissoc_in,keys_11688);

if(cljs.core.truth_(elem_11629.removeEventListener)){
elem_11629.removeEventListener(cljs.core.name.call(null,actual_type_11686),canonical_f_11689);
} else {
elem_11629.detachEvent(cljs.core.name.call(null,actual_type_11686),canonical_f_11689);
}

var G__11690 = seq__11604_11681;
var G__11691 = chunk__11606_11682;
var G__11692 = count__11607_11683;
var G__11693 = (i__11608_11684 + (1));
seq__11604_11681 = G__11690;
chunk__11606_11682 = G__11691;
count__11607_11683 = G__11692;
i__11608_11684 = G__11693;
continue;
} else {
var temp__4425__auto___11694__$1 = cljs.core.seq.call(null,seq__11604_11681);
if(temp__4425__auto___11694__$1){
var seq__11604_11695__$1 = temp__4425__auto___11694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11604_11695__$1)){
var c__5372__auto___11696 = cljs.core.chunk_first.call(null,seq__11604_11695__$1);
var G__11697 = cljs.core.chunk_rest.call(null,seq__11604_11695__$1);
var G__11698 = c__5372__auto___11696;
var G__11699 = cljs.core.count.call(null,c__5372__auto___11696);
var G__11700 = (0);
seq__11604_11681 = G__11697;
chunk__11606_11682 = G__11698;
count__11607_11683 = G__11699;
i__11608_11684 = G__11700;
continue;
} else {
var vec__11624_11701 = cljs.core.first.call(null,seq__11604_11695__$1);
var actual_type_11702 = cljs.core.nth.call(null,vec__11624_11701,(0),null);
var __11703 = cljs.core.nth.call(null,vec__11624_11701,(1),null);
var keys_11704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11630,actual_type_11702,f_11680], null);
var canonical_f_11705 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11629),keys_11704);
dommy.core.update_event_listeners_BANG_.call(null,elem_11629,dommy.utils.dissoc_in,keys_11704);

if(cljs.core.truth_(elem_11629.removeEventListener)){
elem_11629.removeEventListener(cljs.core.name.call(null,actual_type_11702),canonical_f_11705);
} else {
elem_11629.detachEvent(cljs.core.name.call(null,actual_type_11702),canonical_f_11705);
}

var G__11706 = cljs.core.next.call(null,seq__11604_11695__$1);
var G__11707 = null;
var G__11708 = (0);
var G__11709 = (0);
seq__11604_11681 = G__11706;
chunk__11606_11682 = G__11707;
count__11607_11683 = G__11708;
i__11608_11684 = G__11709;
continue;
}
} else {
}
}
break;
}

var G__11710 = cljs.core.next.call(null,seq__11603_11672__$1);
var G__11711 = null;
var G__11712 = (0);
var G__11713 = (0);
seq__11603_11631 = G__11710;
chunk__11610_11632 = G__11711;
count__11611_11633 = G__11712;
i__11612_11634 = G__11713;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq11600){
var G__11601 = cljs.core.first.call(null,seq11600);
var seq11600__$1 = cljs.core.next.call(null,seq11600);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11601,seq11600__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5634__auto__ = [];
var len__5627__auto___11723 = arguments.length;
var i__5628__auto___11724 = (0);
while(true){
if((i__5628__auto___11724 < len__5627__auto___11723)){
args__5634__auto__.push((arguments[i__5628__auto___11724]));

var G__11725 = (i__5628__auto___11724 + (1));
i__5628__auto___11724 = G__11725;
continue;
} else {
}
break;
}

var argseq__5635__auto__ = ((((1) < args__5634__auto__.length))?(new cljs.core.IndexedSeq(args__5634__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5635__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__11716_11726 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11727 = cljs.core.nth.call(null,vec__11716_11726,(0),null);
var selector_11728 = cljs.core.nth.call(null,vec__11716_11726,(1),null);
var seq__11717_11729 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11718_11730 = null;
var count__11719_11731 = (0);
var i__11720_11732 = (0);
while(true){
if((i__11720_11732 < count__11719_11731)){
var vec__11721_11733 = cljs.core._nth.call(null,chunk__11718_11730,i__11720_11732);
var type_11734 = cljs.core.nth.call(null,vec__11721_11733,(0),null);
var f_11735 = cljs.core.nth.call(null,vec__11721_11733,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11734,((function (seq__11717_11729,chunk__11718_11730,count__11719_11731,i__11720_11732,vec__11721_11733,type_11734,f_11735,vec__11716_11726,elem_11727,selector_11728){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11734,dommy$core$this_fn);

return f_11735.call(null,e);
});})(seq__11717_11729,chunk__11718_11730,count__11719_11731,i__11720_11732,vec__11721_11733,type_11734,f_11735,vec__11716_11726,elem_11727,selector_11728))
);

var G__11736 = seq__11717_11729;
var G__11737 = chunk__11718_11730;
var G__11738 = count__11719_11731;
var G__11739 = (i__11720_11732 + (1));
seq__11717_11729 = G__11736;
chunk__11718_11730 = G__11737;
count__11719_11731 = G__11738;
i__11720_11732 = G__11739;
continue;
} else {
var temp__4425__auto___11740 = cljs.core.seq.call(null,seq__11717_11729);
if(temp__4425__auto___11740){
var seq__11717_11741__$1 = temp__4425__auto___11740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11717_11741__$1)){
var c__5372__auto___11742 = cljs.core.chunk_first.call(null,seq__11717_11741__$1);
var G__11743 = cljs.core.chunk_rest.call(null,seq__11717_11741__$1);
var G__11744 = c__5372__auto___11742;
var G__11745 = cljs.core.count.call(null,c__5372__auto___11742);
var G__11746 = (0);
seq__11717_11729 = G__11743;
chunk__11718_11730 = G__11744;
count__11719_11731 = G__11745;
i__11720_11732 = G__11746;
continue;
} else {
var vec__11722_11747 = cljs.core.first.call(null,seq__11717_11741__$1);
var type_11748 = cljs.core.nth.call(null,vec__11722_11747,(0),null);
var f_11749 = cljs.core.nth.call(null,vec__11722_11747,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11748,((function (seq__11717_11729,chunk__11718_11730,count__11719_11731,i__11720_11732,vec__11722_11747,type_11748,f_11749,seq__11717_11741__$1,temp__4425__auto___11740,vec__11716_11726,elem_11727,selector_11728){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11748,dommy$core$this_fn);

return f_11749.call(null,e);
});})(seq__11717_11729,chunk__11718_11730,count__11719_11731,i__11720_11732,vec__11722_11747,type_11748,f_11749,seq__11717_11741__$1,temp__4425__auto___11740,vec__11716_11726,elem_11727,selector_11728))
);

var G__11750 = cljs.core.next.call(null,seq__11717_11741__$1);
var G__11751 = null;
var G__11752 = (0);
var G__11753 = (0);
seq__11717_11729 = G__11750;
chunk__11718_11730 = G__11751;
count__11719_11731 = G__11752;
i__11720_11732 = G__11753;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq11714){
var G__11715 = cljs.core.first.call(null,seq11714);
var seq11714__$1 = cljs.core.next.call(null,seq11714);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11715,seq11714__$1);
});

//# sourceMappingURL=core.js.map