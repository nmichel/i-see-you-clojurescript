// Compiled by ClojureScript 0.0-2280
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3544__auto__ = elem.textContent;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__13624 = dommy.template.__GT_node_like.call(null,parent);G__13624.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__13624;
});
var append_BANG___3 = (function() { 
var G__13629__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13625_13630 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13626_13631 = null;var count__13627_13632 = (0);var i__13628_13633 = (0);while(true){
if((i__13628_13633 < count__13627_13632))
{var c_13634 = cljs.core._nth.call(null,chunk__13626_13631,i__13628_13633);append_BANG_.call(null,parent__$1,c_13634);
{
var G__13635 = seq__13625_13630;
var G__13636 = chunk__13626_13631;
var G__13637 = count__13627_13632;
var G__13638 = (i__13628_13633 + (1));
seq__13625_13630 = G__13635;
chunk__13626_13631 = G__13636;
count__13627_13632 = G__13637;
i__13628_13633 = G__13638;
continue;
}
} else
{var temp__4126__auto___13639 = cljs.core.seq.call(null,seq__13625_13630);if(temp__4126__auto___13639)
{var seq__13625_13640__$1 = temp__4126__auto___13639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13625_13640__$1))
{var c__4300__auto___13641 = cljs.core.chunk_first.call(null,seq__13625_13640__$1);{
var G__13642 = cljs.core.chunk_rest.call(null,seq__13625_13640__$1);
var G__13643 = c__4300__auto___13641;
var G__13644 = cljs.core.count.call(null,c__4300__auto___13641);
var G__13645 = (0);
seq__13625_13630 = G__13642;
chunk__13626_13631 = G__13643;
count__13627_13632 = G__13644;
i__13628_13633 = G__13645;
continue;
}
} else
{var c_13646 = cljs.core.first.call(null,seq__13625_13640__$1);append_BANG_.call(null,parent__$1,c_13646);
{
var G__13647 = cljs.core.next.call(null,seq__13625_13640__$1);
var G__13648 = null;
var G__13649 = (0);
var G__13650 = (0);
seq__13625_13630 = G__13647;
chunk__13626_13631 = G__13648;
count__13627_13632 = G__13649;
i__13628_13633 = G__13650;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__13629 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13629__delegate.call(this,parent,child,more_children);};
G__13629.cljs$lang$maxFixedArity = 2;
G__13629.cljs$lang$applyTo = (function (arglist__13651){
var parent = cljs.core.first(arglist__13651);
arglist__13651 = cljs.core.next(arglist__13651);
var child = cljs.core.first(arglist__13651);
var more_children = cljs.core.rest(arglist__13651);
return G__13629__delegate(parent,child,more_children);
});
G__13629.cljs$core$IFn$_invoke$arity$variadic = G__13629__delegate;
return G__13629;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__13660__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13656_13661 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13657_13662 = null;var count__13658_13663 = (0);var i__13659_13664 = (0);while(true){
if((i__13659_13664 < count__13658_13663))
{var c_13665 = cljs.core._nth.call(null,chunk__13657_13662,i__13659_13664);prepend_BANG_.call(null,parent__$1,c_13665);
{
var G__13666 = seq__13656_13661;
var G__13667 = chunk__13657_13662;
var G__13668 = count__13658_13663;
var G__13669 = (i__13659_13664 + (1));
seq__13656_13661 = G__13666;
chunk__13657_13662 = G__13667;
count__13658_13663 = G__13668;
i__13659_13664 = G__13669;
continue;
}
} else
{var temp__4126__auto___13670 = cljs.core.seq.call(null,seq__13656_13661);if(temp__4126__auto___13670)
{var seq__13656_13671__$1 = temp__4126__auto___13670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13656_13671__$1))
{var c__4300__auto___13672 = cljs.core.chunk_first.call(null,seq__13656_13671__$1);{
var G__13673 = cljs.core.chunk_rest.call(null,seq__13656_13671__$1);
var G__13674 = c__4300__auto___13672;
var G__13675 = cljs.core.count.call(null,c__4300__auto___13672);
var G__13676 = (0);
seq__13656_13661 = G__13673;
chunk__13657_13662 = G__13674;
count__13658_13663 = G__13675;
i__13659_13664 = G__13676;
continue;
}
} else
{var c_13677 = cljs.core.first.call(null,seq__13656_13671__$1);prepend_BANG_.call(null,parent__$1,c_13677);
{
var G__13678 = cljs.core.next.call(null,seq__13656_13671__$1);
var G__13679 = null;
var G__13680 = (0);
var G__13681 = (0);
seq__13656_13661 = G__13678;
chunk__13657_13662 = G__13679;
count__13658_13663 = G__13680;
i__13659_13664 = G__13681;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__13660 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13660__delegate.call(this,parent,child,more_children);};
G__13660.cljs$lang$maxFixedArity = 2;
G__13660.cljs$lang$applyTo = (function (arglist__13682){
var parent = cljs.core.first(arglist__13682);
arglist__13682 = cljs.core.next(arglist__13682);
var child = cljs.core.first(arglist__13682);
var more_children = cljs.core.rest(arglist__13682);
return G__13660__delegate(parent,child,more_children);
});
G__13660.cljs$core$IFn$_invoke$arity$variadic = G__13660__delegate;
return G__13660;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___13683 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___13683))
{var next_13684 = temp__4124__auto___13683;parent.insertBefore(actual_node,next_13684);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__13686 = dommy.template.__GT_node_like.call(null,parent);G__13686.innerHTML = "";
dommy.core.append_BANG_.call(null,G__13686,node_like);
return G__13686;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__13688 = elem__$1.parentNode;G__13688.removeChild(elem__$1);
return G__13688;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__13694){var vec__13695 = p__13694;var k = cljs.core.nth.call(null,vec__13695,(0),null);var v = cljs.core.nth.call(null,vec__13695,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t13696 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t13696 = (function (v,k,vec__13695,p__13694,container,key_selectors_map,template,selector_map,meta13697){
this.v = v;
this.k = k;
this.vec__13695 = vec__13695;
this.p__13694 = p__13694;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta13697 = meta13697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t13696.cljs$lang$type = true;
dommy.core.t13696.cljs$lang$ctorStr = "dommy.core/t13696";
dommy.core.t13696.cljs$lang$ctorPrWriter = ((function (vec__13695,k,v,container){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"dommy.core/t13696");
});})(vec__13695,k,v,container))
;
dommy.core.t13696.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__13695,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__13695,k,v,container))
;
dommy.core.t13696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__13695,k,v,container){
return (function (_13698){var self__ = this;
var _13698__$1 = this;return self__.meta13697;
});})(vec__13695,k,v,container))
;
dommy.core.t13696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__13695,k,v,container){
return (function (_13698,meta13697__$1){var self__ = this;
var _13698__$1 = this;return (new dommy.core.t13696(self__.v,self__.k,self__.vec__13695,self__.p__13694,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta13697__$1));
});})(vec__13695,k,v,container))
;
dommy.core.__GT_t13696 = ((function (vec__13695,k,v,container){
return (function __GT_t13696(v__$1,k__$1,vec__13695__$1,p__13694__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13697){return (new dommy.core.t13696(v__$1,k__$1,vec__13695__$1,p__13694__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13697));
});})(vec__13695,k,v,container))
;
}
return (new dommy.core.t13696(v,k,vec__13695,p__13694,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__13699_SHARP_){return p1__13699_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__13700_SHARP_){return !((p1__13700_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13701){var vec__13702 = p__13701;var special_mouse_event = cljs.core.nth.call(null,vec__13702,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__13702,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__13702,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__13702,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3544__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3532__auto__ = related_target;if(cljs.core.truth_(and__3532__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3532__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__13702,special_mouse_event,real_mouse_event))
});})(vec__13702,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3532__auto__ = selected_target;if(cljs.core.truth_(and__3532__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3532__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3544__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__13703){
var elem = cljs.core.first(arglist__13703);
arglist__13703 = cljs.core.next(arglist__13703);
var f = cljs.core.first(arglist__13703);
var args = cljs.core.rest(arglist__13703);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__13704_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__13704_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
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
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__13728_13751 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13752 = cljs.core.nth.call(null,vec__13728_13751,(0),null);var selector_13753 = cljs.core.nth.call(null,vec__13728_13751,(1),null);var seq__13729_13754 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__13736_13755 = null;var count__13737_13756 = (0);var i__13738_13757 = (0);while(true){
if((i__13738_13757 < count__13737_13756))
{var vec__13745_13758 = cljs.core._nth.call(null,chunk__13736_13755,i__13738_13757);var orig_type_13759 = cljs.core.nth.call(null,vec__13745_13758,(0),null);var f_13760 = cljs.core.nth.call(null,vec__13745_13758,(1),null);var seq__13739_13761 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13759,new cljs.core.PersistentArrayMap.fromArray([orig_type_13759,cljs.core.identity], true, false)));var chunk__13741_13762 = null;var count__13742_13763 = (0);var i__13743_13764 = (0);while(true){
if((i__13743_13764 < count__13742_13763))
{var vec__13746_13765 = cljs.core._nth.call(null,chunk__13741_13762,i__13743_13764);var actual_type_13766 = cljs.core.nth.call(null,vec__13746_13765,(0),null);var factory_13767 = cljs.core.nth.call(null,vec__13746_13765,(1),null);var canonical_f_13768 = (cljs.core.truth_(selector_13753)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13752,selector_13753):cljs.core.identity).call(null,factory_13767.call(null,f_13760));dommy.core.update_event_listeners_BANG_.call(null,elem_13752,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13753,actual_type_13766,f_13760], null),canonical_f_13768);
if(cljs.core.truth_(elem_13752.addEventListener))
{elem_13752.addEventListener(cljs.core.name.call(null,actual_type_13766),canonical_f_13768);
} else
{elem_13752.attachEvent(cljs.core.name.call(null,actual_type_13766),canonical_f_13768);
}
{
var G__13769 = seq__13739_13761;
var G__13770 = chunk__13741_13762;
var G__13771 = count__13742_13763;
var G__13772 = (i__13743_13764 + (1));
seq__13739_13761 = G__13769;
chunk__13741_13762 = G__13770;
count__13742_13763 = G__13771;
i__13743_13764 = G__13772;
continue;
}
} else
{var temp__4126__auto___13773 = cljs.core.seq.call(null,seq__13739_13761);if(temp__4126__auto___13773)
{var seq__13739_13774__$1 = temp__4126__auto___13773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13739_13774__$1))
{var c__4300__auto___13775 = cljs.core.chunk_first.call(null,seq__13739_13774__$1);{
var G__13776 = cljs.core.chunk_rest.call(null,seq__13739_13774__$1);
var G__13777 = c__4300__auto___13775;
var G__13778 = cljs.core.count.call(null,c__4300__auto___13775);
var G__13779 = (0);
seq__13739_13761 = G__13776;
chunk__13741_13762 = G__13777;
count__13742_13763 = G__13778;
i__13743_13764 = G__13779;
continue;
}
} else
{var vec__13747_13780 = cljs.core.first.call(null,seq__13739_13774__$1);var actual_type_13781 = cljs.core.nth.call(null,vec__13747_13780,(0),null);var factory_13782 = cljs.core.nth.call(null,vec__13747_13780,(1),null);var canonical_f_13783 = (cljs.core.truth_(selector_13753)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13752,selector_13753):cljs.core.identity).call(null,factory_13782.call(null,f_13760));dommy.core.update_event_listeners_BANG_.call(null,elem_13752,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13753,actual_type_13781,f_13760], null),canonical_f_13783);
if(cljs.core.truth_(elem_13752.addEventListener))
{elem_13752.addEventListener(cljs.core.name.call(null,actual_type_13781),canonical_f_13783);
} else
{elem_13752.attachEvent(cljs.core.name.call(null,actual_type_13781),canonical_f_13783);
}
{
var G__13784 = cljs.core.next.call(null,seq__13739_13774__$1);
var G__13785 = null;
var G__13786 = (0);
var G__13787 = (0);
seq__13739_13761 = G__13784;
chunk__13741_13762 = G__13785;
count__13742_13763 = G__13786;
i__13743_13764 = G__13787;
continue;
}
}
} else
{}
}
break;
}
{
var G__13788 = seq__13729_13754;
var G__13789 = chunk__13736_13755;
var G__13790 = count__13737_13756;
var G__13791 = (i__13738_13757 + (1));
seq__13729_13754 = G__13788;
chunk__13736_13755 = G__13789;
count__13737_13756 = G__13790;
i__13738_13757 = G__13791;
continue;
}
} else
{var temp__4126__auto___13792 = cljs.core.seq.call(null,seq__13729_13754);if(temp__4126__auto___13792)
{var seq__13729_13793__$1 = temp__4126__auto___13792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13729_13793__$1))
{var c__4300__auto___13794 = cljs.core.chunk_first.call(null,seq__13729_13793__$1);{
var G__13795 = cljs.core.chunk_rest.call(null,seq__13729_13793__$1);
var G__13796 = c__4300__auto___13794;
var G__13797 = cljs.core.count.call(null,c__4300__auto___13794);
var G__13798 = (0);
seq__13729_13754 = G__13795;
chunk__13736_13755 = G__13796;
count__13737_13756 = G__13797;
i__13738_13757 = G__13798;
continue;
}
} else
{var vec__13748_13799 = cljs.core.first.call(null,seq__13729_13793__$1);var orig_type_13800 = cljs.core.nth.call(null,vec__13748_13799,(0),null);var f_13801 = cljs.core.nth.call(null,vec__13748_13799,(1),null);var seq__13730_13802 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13800,new cljs.core.PersistentArrayMap.fromArray([orig_type_13800,cljs.core.identity], true, false)));var chunk__13732_13803 = null;var count__13733_13804 = (0);var i__13734_13805 = (0);while(true){
if((i__13734_13805 < count__13733_13804))
{var vec__13749_13806 = cljs.core._nth.call(null,chunk__13732_13803,i__13734_13805);var actual_type_13807 = cljs.core.nth.call(null,vec__13749_13806,(0),null);var factory_13808 = cljs.core.nth.call(null,vec__13749_13806,(1),null);var canonical_f_13809 = (cljs.core.truth_(selector_13753)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13752,selector_13753):cljs.core.identity).call(null,factory_13808.call(null,f_13801));dommy.core.update_event_listeners_BANG_.call(null,elem_13752,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13753,actual_type_13807,f_13801], null),canonical_f_13809);
if(cljs.core.truth_(elem_13752.addEventListener))
{elem_13752.addEventListener(cljs.core.name.call(null,actual_type_13807),canonical_f_13809);
} else
{elem_13752.attachEvent(cljs.core.name.call(null,actual_type_13807),canonical_f_13809);
}
{
var G__13810 = seq__13730_13802;
var G__13811 = chunk__13732_13803;
var G__13812 = count__13733_13804;
var G__13813 = (i__13734_13805 + (1));
seq__13730_13802 = G__13810;
chunk__13732_13803 = G__13811;
count__13733_13804 = G__13812;
i__13734_13805 = G__13813;
continue;
}
} else
{var temp__4126__auto___13814__$1 = cljs.core.seq.call(null,seq__13730_13802);if(temp__4126__auto___13814__$1)
{var seq__13730_13815__$1 = temp__4126__auto___13814__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13730_13815__$1))
{var c__4300__auto___13816 = cljs.core.chunk_first.call(null,seq__13730_13815__$1);{
var G__13817 = cljs.core.chunk_rest.call(null,seq__13730_13815__$1);
var G__13818 = c__4300__auto___13816;
var G__13819 = cljs.core.count.call(null,c__4300__auto___13816);
var G__13820 = (0);
seq__13730_13802 = G__13817;
chunk__13732_13803 = G__13818;
count__13733_13804 = G__13819;
i__13734_13805 = G__13820;
continue;
}
} else
{var vec__13750_13821 = cljs.core.first.call(null,seq__13730_13815__$1);var actual_type_13822 = cljs.core.nth.call(null,vec__13750_13821,(0),null);var factory_13823 = cljs.core.nth.call(null,vec__13750_13821,(1),null);var canonical_f_13824 = (cljs.core.truth_(selector_13753)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13752,selector_13753):cljs.core.identity).call(null,factory_13823.call(null,f_13801));dommy.core.update_event_listeners_BANG_.call(null,elem_13752,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13753,actual_type_13822,f_13801], null),canonical_f_13824);
if(cljs.core.truth_(elem_13752.addEventListener))
{elem_13752.addEventListener(cljs.core.name.call(null,actual_type_13822),canonical_f_13824);
} else
{elem_13752.attachEvent(cljs.core.name.call(null,actual_type_13822),canonical_f_13824);
}
{
var G__13825 = cljs.core.next.call(null,seq__13730_13815__$1);
var G__13826 = null;
var G__13827 = (0);
var G__13828 = (0);
seq__13730_13802 = G__13825;
chunk__13732_13803 = G__13826;
count__13733_13804 = G__13827;
i__13734_13805 = G__13828;
continue;
}
}
} else
{}
}
break;
}
{
var G__13829 = cljs.core.next.call(null,seq__13729_13793__$1);
var G__13830 = null;
var G__13831 = (0);
var G__13832 = (0);
seq__13729_13754 = G__13829;
chunk__13736_13755 = G__13830;
count__13737_13756 = G__13831;
i__13738_13757 = G__13832;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__13833){
var elem_sel = cljs.core.first(arglist__13833);
var type_fs = cljs.core.rest(arglist__13833);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__13857_13880 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13881 = cljs.core.nth.call(null,vec__13857_13880,(0),null);var selector_13882 = cljs.core.nth.call(null,vec__13857_13880,(1),null);var seq__13858_13883 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__13865_13884 = null;var count__13866_13885 = (0);var i__13867_13886 = (0);while(true){
if((i__13867_13886 < count__13866_13885))
{var vec__13874_13887 = cljs.core._nth.call(null,chunk__13865_13884,i__13867_13886);var orig_type_13888 = cljs.core.nth.call(null,vec__13874_13887,(0),null);var f_13889 = cljs.core.nth.call(null,vec__13874_13887,(1),null);var seq__13868_13890 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13888,new cljs.core.PersistentArrayMap.fromArray([orig_type_13888,cljs.core.identity], true, false)));var chunk__13870_13891 = null;var count__13871_13892 = (0);var i__13872_13893 = (0);while(true){
if((i__13872_13893 < count__13871_13892))
{var vec__13875_13894 = cljs.core._nth.call(null,chunk__13870_13891,i__13872_13893);var actual_type_13895 = cljs.core.nth.call(null,vec__13875_13894,(0),null);var __13896 = cljs.core.nth.call(null,vec__13875_13894,(1),null);var keys_13897 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13882,actual_type_13895,f_13889], null);var canonical_f_13898 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13881),keys_13897);dommy.core.update_event_listeners_BANG_.call(null,elem_13881,dommy.utils.dissoc_in,keys_13897);
if(cljs.core.truth_(elem_13881.removeEventListener))
{elem_13881.removeEventListener(cljs.core.name.call(null,actual_type_13895),canonical_f_13898);
} else
{elem_13881.detachEvent(cljs.core.name.call(null,actual_type_13895),canonical_f_13898);
}
{
var G__13899 = seq__13868_13890;
var G__13900 = chunk__13870_13891;
var G__13901 = count__13871_13892;
var G__13902 = (i__13872_13893 + (1));
seq__13868_13890 = G__13899;
chunk__13870_13891 = G__13900;
count__13871_13892 = G__13901;
i__13872_13893 = G__13902;
continue;
}
} else
{var temp__4126__auto___13903 = cljs.core.seq.call(null,seq__13868_13890);if(temp__4126__auto___13903)
{var seq__13868_13904__$1 = temp__4126__auto___13903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13868_13904__$1))
{var c__4300__auto___13905 = cljs.core.chunk_first.call(null,seq__13868_13904__$1);{
var G__13906 = cljs.core.chunk_rest.call(null,seq__13868_13904__$1);
var G__13907 = c__4300__auto___13905;
var G__13908 = cljs.core.count.call(null,c__4300__auto___13905);
var G__13909 = (0);
seq__13868_13890 = G__13906;
chunk__13870_13891 = G__13907;
count__13871_13892 = G__13908;
i__13872_13893 = G__13909;
continue;
}
} else
{var vec__13876_13910 = cljs.core.first.call(null,seq__13868_13904__$1);var actual_type_13911 = cljs.core.nth.call(null,vec__13876_13910,(0),null);var __13912 = cljs.core.nth.call(null,vec__13876_13910,(1),null);var keys_13913 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13882,actual_type_13911,f_13889], null);var canonical_f_13914 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13881),keys_13913);dommy.core.update_event_listeners_BANG_.call(null,elem_13881,dommy.utils.dissoc_in,keys_13913);
if(cljs.core.truth_(elem_13881.removeEventListener))
{elem_13881.removeEventListener(cljs.core.name.call(null,actual_type_13911),canonical_f_13914);
} else
{elem_13881.detachEvent(cljs.core.name.call(null,actual_type_13911),canonical_f_13914);
}
{
var G__13915 = cljs.core.next.call(null,seq__13868_13904__$1);
var G__13916 = null;
var G__13917 = (0);
var G__13918 = (0);
seq__13868_13890 = G__13915;
chunk__13870_13891 = G__13916;
count__13871_13892 = G__13917;
i__13872_13893 = G__13918;
continue;
}
}
} else
{}
}
break;
}
{
var G__13919 = seq__13858_13883;
var G__13920 = chunk__13865_13884;
var G__13921 = count__13866_13885;
var G__13922 = (i__13867_13886 + (1));
seq__13858_13883 = G__13919;
chunk__13865_13884 = G__13920;
count__13866_13885 = G__13921;
i__13867_13886 = G__13922;
continue;
}
} else
{var temp__4126__auto___13923 = cljs.core.seq.call(null,seq__13858_13883);if(temp__4126__auto___13923)
{var seq__13858_13924__$1 = temp__4126__auto___13923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13858_13924__$1))
{var c__4300__auto___13925 = cljs.core.chunk_first.call(null,seq__13858_13924__$1);{
var G__13926 = cljs.core.chunk_rest.call(null,seq__13858_13924__$1);
var G__13927 = c__4300__auto___13925;
var G__13928 = cljs.core.count.call(null,c__4300__auto___13925);
var G__13929 = (0);
seq__13858_13883 = G__13926;
chunk__13865_13884 = G__13927;
count__13866_13885 = G__13928;
i__13867_13886 = G__13929;
continue;
}
} else
{var vec__13877_13930 = cljs.core.first.call(null,seq__13858_13924__$1);var orig_type_13931 = cljs.core.nth.call(null,vec__13877_13930,(0),null);var f_13932 = cljs.core.nth.call(null,vec__13877_13930,(1),null);var seq__13859_13933 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13931,new cljs.core.PersistentArrayMap.fromArray([orig_type_13931,cljs.core.identity], true, false)));var chunk__13861_13934 = null;var count__13862_13935 = (0);var i__13863_13936 = (0);while(true){
if((i__13863_13936 < count__13862_13935))
{var vec__13878_13937 = cljs.core._nth.call(null,chunk__13861_13934,i__13863_13936);var actual_type_13938 = cljs.core.nth.call(null,vec__13878_13937,(0),null);var __13939 = cljs.core.nth.call(null,vec__13878_13937,(1),null);var keys_13940 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13882,actual_type_13938,f_13932], null);var canonical_f_13941 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13881),keys_13940);dommy.core.update_event_listeners_BANG_.call(null,elem_13881,dommy.utils.dissoc_in,keys_13940);
if(cljs.core.truth_(elem_13881.removeEventListener))
{elem_13881.removeEventListener(cljs.core.name.call(null,actual_type_13938),canonical_f_13941);
} else
{elem_13881.detachEvent(cljs.core.name.call(null,actual_type_13938),canonical_f_13941);
}
{
var G__13942 = seq__13859_13933;
var G__13943 = chunk__13861_13934;
var G__13944 = count__13862_13935;
var G__13945 = (i__13863_13936 + (1));
seq__13859_13933 = G__13942;
chunk__13861_13934 = G__13943;
count__13862_13935 = G__13944;
i__13863_13936 = G__13945;
continue;
}
} else
{var temp__4126__auto___13946__$1 = cljs.core.seq.call(null,seq__13859_13933);if(temp__4126__auto___13946__$1)
{var seq__13859_13947__$1 = temp__4126__auto___13946__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13859_13947__$1))
{var c__4300__auto___13948 = cljs.core.chunk_first.call(null,seq__13859_13947__$1);{
var G__13949 = cljs.core.chunk_rest.call(null,seq__13859_13947__$1);
var G__13950 = c__4300__auto___13948;
var G__13951 = cljs.core.count.call(null,c__4300__auto___13948);
var G__13952 = (0);
seq__13859_13933 = G__13949;
chunk__13861_13934 = G__13950;
count__13862_13935 = G__13951;
i__13863_13936 = G__13952;
continue;
}
} else
{var vec__13879_13953 = cljs.core.first.call(null,seq__13859_13947__$1);var actual_type_13954 = cljs.core.nth.call(null,vec__13879_13953,(0),null);var __13955 = cljs.core.nth.call(null,vec__13879_13953,(1),null);var keys_13956 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13882,actual_type_13954,f_13932], null);var canonical_f_13957 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13881),keys_13956);dommy.core.update_event_listeners_BANG_.call(null,elem_13881,dommy.utils.dissoc_in,keys_13956);
if(cljs.core.truth_(elem_13881.removeEventListener))
{elem_13881.removeEventListener(cljs.core.name.call(null,actual_type_13954),canonical_f_13957);
} else
{elem_13881.detachEvent(cljs.core.name.call(null,actual_type_13954),canonical_f_13957);
}
{
var G__13958 = cljs.core.next.call(null,seq__13859_13947__$1);
var G__13959 = null;
var G__13960 = (0);
var G__13961 = (0);
seq__13859_13933 = G__13958;
chunk__13861_13934 = G__13959;
count__13862_13935 = G__13960;
i__13863_13936 = G__13961;
continue;
}
}
} else
{}
}
break;
}
{
var G__13962 = cljs.core.next.call(null,seq__13858_13924__$1);
var G__13963 = null;
var G__13964 = (0);
var G__13965 = (0);
seq__13858_13883 = G__13962;
chunk__13865_13884 = G__13963;
count__13866_13885 = G__13964;
i__13867_13886 = G__13965;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__13966){
var elem_sel = cljs.core.first(arglist__13966);
var type_fs = cljs.core.rest(arglist__13966);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__13974_13981 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13982 = cljs.core.nth.call(null,vec__13974_13981,(0),null);var selector_13983 = cljs.core.nth.call(null,vec__13974_13981,(1),null);var seq__13975_13984 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__13976_13985 = null;var count__13977_13986 = (0);var i__13978_13987 = (0);while(true){
if((i__13978_13987 < count__13977_13986))
{var vec__13979_13988 = cljs.core._nth.call(null,chunk__13976_13985,i__13978_13987);var type_13989 = cljs.core.nth.call(null,vec__13979_13988,(0),null);var f_13990 = cljs.core.nth.call(null,vec__13979_13988,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_13989,((function (seq__13975_13984,chunk__13976_13985,count__13977_13986,i__13978_13987,vec__13979_13988,type_13989,f_13990,vec__13974_13981,elem_13982,selector_13983){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13989,this_fn);
return f_13990.call(null,e);
});})(seq__13975_13984,chunk__13976_13985,count__13977_13986,i__13978_13987,vec__13979_13988,type_13989,f_13990,vec__13974_13981,elem_13982,selector_13983))
);
{
var G__13991 = seq__13975_13984;
var G__13992 = chunk__13976_13985;
var G__13993 = count__13977_13986;
var G__13994 = (i__13978_13987 + (1));
seq__13975_13984 = G__13991;
chunk__13976_13985 = G__13992;
count__13977_13986 = G__13993;
i__13978_13987 = G__13994;
continue;
}
} else
{var temp__4126__auto___13995 = cljs.core.seq.call(null,seq__13975_13984);if(temp__4126__auto___13995)
{var seq__13975_13996__$1 = temp__4126__auto___13995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13975_13996__$1))
{var c__4300__auto___13997 = cljs.core.chunk_first.call(null,seq__13975_13996__$1);{
var G__13998 = cljs.core.chunk_rest.call(null,seq__13975_13996__$1);
var G__13999 = c__4300__auto___13997;
var G__14000 = cljs.core.count.call(null,c__4300__auto___13997);
var G__14001 = (0);
seq__13975_13984 = G__13998;
chunk__13976_13985 = G__13999;
count__13977_13986 = G__14000;
i__13978_13987 = G__14001;
continue;
}
} else
{var vec__13980_14002 = cljs.core.first.call(null,seq__13975_13996__$1);var type_14003 = cljs.core.nth.call(null,vec__13980_14002,(0),null);var f_14004 = cljs.core.nth.call(null,vec__13980_14002,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_14003,((function (seq__13975_13984,chunk__13976_13985,count__13977_13986,i__13978_13987,vec__13980_14002,type_14003,f_14004,seq__13975_13996__$1,temp__4126__auto___13995,vec__13974_13981,elem_13982,selector_13983){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14003,this_fn);
return f_14004.call(null,e);
});})(seq__13975_13984,chunk__13976_13985,count__13977_13986,i__13978_13987,vec__13980_14002,type_14003,f_14004,seq__13975_13996__$1,temp__4126__auto___13995,vec__13974_13981,elem_13982,selector_13983))
);
{
var G__14005 = cljs.core.next.call(null,seq__13975_13996__$1);
var G__14006 = null;
var G__14007 = (0);
var G__14008 = (0);
seq__13975_13984 = G__14005;
chunk__13976_13985 = G__14006;
count__13977_13986 = G__14007;
i__13978_13987 = G__14008;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14009){
var elem_sel = cljs.core.first(arglist__14009);
var type_fs = cljs.core.rest(arglist__14009);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__14010){var vec__14012 = p__14010;var update_event_BANG_ = cljs.core.nth.call(null,vec__14012,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3544__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__14010 = null;if (arguments.length > 2) {
  p__14010 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14010);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14013){
var node = cljs.core.first(arglist__14013);
arglist__14013 = cljs.core.next(arglist__14013);
var event_type = cljs.core.first(arglist__14013);
var p__14010 = cljs.core.rest(arglist__14013);
return fire_BANG___delegate(node,event_type,p__14010);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map