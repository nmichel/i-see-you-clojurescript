// Compiled by ClojureScript 0.0-2280
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj14317 = {};return obj14317;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3532__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (dommy.template._elem[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (dommy.template._elem["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":((new cljs.core.Keyword(null,"else","else",-1508377146))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_14320 = node_str.substring(base_idx);while(true){
var next_idx_14321 = dommy.template.next_css_index.call(null,str_14320,(1));var frag_14322 = (((next_idx_14321 >= (0)))?str_14320.substring((0),next_idx_14321):str_14320);var G__14319_14323 = frag_14322.charAt((0));switch (G__14319_14323) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_14322.substring((1)));

break;
case "#":
node.setAttribute("id",frag_14322.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_14322.charAt((0))))));

}
if((next_idx_14321 >= (0)))
{{
var G__14325 = str_14320.substring(next_idx_14321);
str_14320 = G__14325;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14331 = data;if(G__14331)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__14331.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14331.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14331);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14331);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14332_14336 = cljs.core.seq.call(null,data);var chunk__14333_14337 = null;var count__14334_14338 = (0);var i__14335_14339 = (0);while(true){
if((i__14335_14339 < count__14334_14338))
{var child_14340 = cljs.core._nth.call(null,chunk__14333_14337,i__14335_14339);__GT_document_fragment.call(null,result_frag,child_14340);
{
var G__14341 = seq__14332_14336;
var G__14342 = chunk__14333_14337;
var G__14343 = count__14334_14338;
var G__14344 = (i__14335_14339 + (1));
seq__14332_14336 = G__14341;
chunk__14333_14337 = G__14342;
count__14334_14338 = G__14343;
i__14335_14339 = G__14344;
continue;
}
} else
{var temp__4126__auto___14345 = cljs.core.seq.call(null,seq__14332_14336);if(temp__4126__auto___14345)
{var seq__14332_14346__$1 = temp__4126__auto___14345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14332_14346__$1))
{var c__4300__auto___14347 = cljs.core.chunk_first.call(null,seq__14332_14346__$1);{
var G__14348 = cljs.core.chunk_rest.call(null,seq__14332_14346__$1);
var G__14349 = c__4300__auto___14347;
var G__14350 = cljs.core.count.call(null,c__4300__auto___14347);
var G__14351 = (0);
seq__14332_14336 = G__14348;
chunk__14333_14337 = G__14349;
count__14334_14338 = G__14350;
i__14335_14339 = G__14351;
continue;
}
} else
{var child_14352 = cljs.core.first.call(null,seq__14332_14346__$1);__GT_document_fragment.call(null,result_frag,child_14352);
{
var G__14353 = cljs.core.next.call(null,seq__14332_14346__$1);
var G__14354 = null;
var G__14355 = (0);
var G__14356 = (0);
seq__14332_14336 = G__14353;
chunk__14333_14337 = G__14354;
count__14334_14338 = G__14355;
i__14335_14339 = G__14356;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14358 = data;if(G__14358)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__14358.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14358.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14358);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14358);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__14359){var vec__14379 = p__14359;var tag_name = cljs.core.nth.call(null,vec__14379,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__14379,(1),null);var children = cljs.core.nthnext.call(null,vec__14379,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__14381 = maybe_attrs;if(G__14381)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__14381.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14381.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14381);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14381);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14382_14398 = cljs.core.seq.call(null,attrs);var chunk__14383_14399 = null;var count__14384_14400 = (0);var i__14385_14401 = (0);while(true){
if((i__14385_14401 < count__14384_14400))
{var vec__14386_14402 = cljs.core._nth.call(null,chunk__14383_14399,i__14385_14401);var k_14403 = cljs.core.nth.call(null,vec__14386_14402,(0),null);var v_14404 = cljs.core.nth.call(null,vec__14386_14402,(1),null);var G__14387_14405 = (((k_14403 instanceof cljs.core.Keyword))?k_14403.fqn:null);switch (G__14387_14405) {
case "classes":
var seq__14388_14407 = cljs.core.seq.call(null,v_14404);var chunk__14389_14408 = null;var count__14390_14409 = (0);var i__14391_14410 = (0);while(true){
if((i__14391_14410 < count__14390_14409))
{var c_14411 = cljs.core._nth.call(null,chunk__14389_14408,i__14391_14410);dommy.attrs.add_class_BANG_.call(null,n,c_14411);
{
var G__14412 = seq__14388_14407;
var G__14413 = chunk__14389_14408;
var G__14414 = count__14390_14409;
var G__14415 = (i__14391_14410 + (1));
seq__14388_14407 = G__14412;
chunk__14389_14408 = G__14413;
count__14390_14409 = G__14414;
i__14391_14410 = G__14415;
continue;
}
} else
{var temp__4126__auto___14416 = cljs.core.seq.call(null,seq__14388_14407);if(temp__4126__auto___14416)
{var seq__14388_14417__$1 = temp__4126__auto___14416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14388_14417__$1))
{var c__4300__auto___14418 = cljs.core.chunk_first.call(null,seq__14388_14417__$1);{
var G__14419 = cljs.core.chunk_rest.call(null,seq__14388_14417__$1);
var G__14420 = c__4300__auto___14418;
var G__14421 = cljs.core.count.call(null,c__4300__auto___14418);
var G__14422 = (0);
seq__14388_14407 = G__14419;
chunk__14389_14408 = G__14420;
count__14390_14409 = G__14421;
i__14391_14410 = G__14422;
continue;
}
} else
{var c_14423 = cljs.core.first.call(null,seq__14388_14417__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14423);
{
var G__14424 = cljs.core.next.call(null,seq__14388_14417__$1);
var G__14425 = null;
var G__14426 = (0);
var G__14427 = (0);
seq__14388_14407 = G__14424;
chunk__14389_14408 = G__14425;
count__14390_14409 = G__14426;
i__14391_14410 = G__14427;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_14404);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_14403,v_14404);

}
{
var G__14428 = seq__14382_14398;
var G__14429 = chunk__14383_14399;
var G__14430 = count__14384_14400;
var G__14431 = (i__14385_14401 + (1));
seq__14382_14398 = G__14428;
chunk__14383_14399 = G__14429;
count__14384_14400 = G__14430;
i__14385_14401 = G__14431;
continue;
}
} else
{var temp__4126__auto___14432 = cljs.core.seq.call(null,seq__14382_14398);if(temp__4126__auto___14432)
{var seq__14382_14433__$1 = temp__4126__auto___14432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14382_14433__$1))
{var c__4300__auto___14434 = cljs.core.chunk_first.call(null,seq__14382_14433__$1);{
var G__14435 = cljs.core.chunk_rest.call(null,seq__14382_14433__$1);
var G__14436 = c__4300__auto___14434;
var G__14437 = cljs.core.count.call(null,c__4300__auto___14434);
var G__14438 = (0);
seq__14382_14398 = G__14435;
chunk__14383_14399 = G__14436;
count__14384_14400 = G__14437;
i__14385_14401 = G__14438;
continue;
}
} else
{var vec__14392_14439 = cljs.core.first.call(null,seq__14382_14433__$1);var k_14440 = cljs.core.nth.call(null,vec__14392_14439,(0),null);var v_14441 = cljs.core.nth.call(null,vec__14392_14439,(1),null);var G__14393_14442 = (((k_14440 instanceof cljs.core.Keyword))?k_14440.fqn:null);switch (G__14393_14442) {
case "classes":
var seq__14394_14444 = cljs.core.seq.call(null,v_14441);var chunk__14395_14445 = null;var count__14396_14446 = (0);var i__14397_14447 = (0);while(true){
if((i__14397_14447 < count__14396_14446))
{var c_14448 = cljs.core._nth.call(null,chunk__14395_14445,i__14397_14447);dommy.attrs.add_class_BANG_.call(null,n,c_14448);
{
var G__14449 = seq__14394_14444;
var G__14450 = chunk__14395_14445;
var G__14451 = count__14396_14446;
var G__14452 = (i__14397_14447 + (1));
seq__14394_14444 = G__14449;
chunk__14395_14445 = G__14450;
count__14396_14446 = G__14451;
i__14397_14447 = G__14452;
continue;
}
} else
{var temp__4126__auto___14453__$1 = cljs.core.seq.call(null,seq__14394_14444);if(temp__4126__auto___14453__$1)
{var seq__14394_14454__$1 = temp__4126__auto___14453__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14394_14454__$1))
{var c__4300__auto___14455 = cljs.core.chunk_first.call(null,seq__14394_14454__$1);{
var G__14456 = cljs.core.chunk_rest.call(null,seq__14394_14454__$1);
var G__14457 = c__4300__auto___14455;
var G__14458 = cljs.core.count.call(null,c__4300__auto___14455);
var G__14459 = (0);
seq__14394_14444 = G__14456;
chunk__14395_14445 = G__14457;
count__14396_14446 = G__14458;
i__14397_14447 = G__14459;
continue;
}
} else
{var c_14460 = cljs.core.first.call(null,seq__14394_14454__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14460);
{
var G__14461 = cljs.core.next.call(null,seq__14394_14454__$1);
var G__14462 = null;
var G__14463 = (0);
var G__14464 = (0);
seq__14394_14444 = G__14461;
chunk__14395_14445 = G__14462;
count__14396_14446 = G__14463;
i__14397_14447 = G__14464;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_14441);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_14440,v_14441);

}
{
var G__14465 = cljs.core.next.call(null,seq__14382_14433__$1);
var G__14466 = null;
var G__14467 = (0);
var G__14468 = (0);
seq__14382_14398 = G__14465;
chunk__14383_14399 = G__14466;
count__14384_14400 = G__14467;
i__14385_14401 = G__14468;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__14470 = data;if(G__14470)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__14470.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14470.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14470);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14470);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map