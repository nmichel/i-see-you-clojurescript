// Compiled by ClojureScript 0.0-2280
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3532__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3532__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3532__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__14033 = (i + class$.length);
start_from = G__14033;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___14058 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___14058))
{var class_list_14059 = temp__4124__auto___14058;var seq__14046_14060 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14047_14061 = null;var count__14048_14062 = (0);var i__14049_14063 = (0);while(true){
if((i__14049_14063 < count__14048_14062))
{var class_14064 = cljs.core._nth.call(null,chunk__14047_14061,i__14049_14063);class_list_14059.add(class_14064);
{
var G__14065 = seq__14046_14060;
var G__14066 = chunk__14047_14061;
var G__14067 = count__14048_14062;
var G__14068 = (i__14049_14063 + (1));
seq__14046_14060 = G__14065;
chunk__14047_14061 = G__14066;
count__14048_14062 = G__14067;
i__14049_14063 = G__14068;
continue;
}
} else
{var temp__4126__auto___14069 = cljs.core.seq.call(null,seq__14046_14060);if(temp__4126__auto___14069)
{var seq__14046_14070__$1 = temp__4126__auto___14069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14046_14070__$1))
{var c__4300__auto___14071 = cljs.core.chunk_first.call(null,seq__14046_14070__$1);{
var G__14072 = cljs.core.chunk_rest.call(null,seq__14046_14070__$1);
var G__14073 = c__4300__auto___14071;
var G__14074 = cljs.core.count.call(null,c__4300__auto___14071);
var G__14075 = (0);
seq__14046_14060 = G__14072;
chunk__14047_14061 = G__14073;
count__14048_14062 = G__14074;
i__14049_14063 = G__14075;
continue;
}
} else
{var class_14076 = cljs.core.first.call(null,seq__14046_14070__$1);class_list_14059.add(class_14076);
{
var G__14077 = cljs.core.next.call(null,seq__14046_14070__$1);
var G__14078 = null;
var G__14079 = (0);
var G__14080 = (0);
seq__14046_14060 = G__14077;
chunk__14047_14061 = G__14078;
count__14048_14062 = G__14079;
i__14049_14063 = G__14080;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__14050_14081 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14051_14082 = null;var count__14052_14083 = (0);var i__14053_14084 = (0);while(true){
if((i__14053_14084 < count__14052_14083))
{var class_14085 = cljs.core._nth.call(null,chunk__14051_14082,i__14053_14084);var class_name_14086 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14086,class_14085)))
{} else
{elem__$1.className = (((class_name_14086 === ""))?class_14085:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14086)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_14085)));
}
{
var G__14087 = seq__14050_14081;
var G__14088 = chunk__14051_14082;
var G__14089 = count__14052_14083;
var G__14090 = (i__14053_14084 + (1));
seq__14050_14081 = G__14087;
chunk__14051_14082 = G__14088;
count__14052_14083 = G__14089;
i__14053_14084 = G__14090;
continue;
}
} else
{var temp__4126__auto___14091 = cljs.core.seq.call(null,seq__14050_14081);if(temp__4126__auto___14091)
{var seq__14050_14092__$1 = temp__4126__auto___14091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14050_14092__$1))
{var c__4300__auto___14093 = cljs.core.chunk_first.call(null,seq__14050_14092__$1);{
var G__14094 = cljs.core.chunk_rest.call(null,seq__14050_14092__$1);
var G__14095 = c__4300__auto___14093;
var G__14096 = cljs.core.count.call(null,c__4300__auto___14093);
var G__14097 = (0);
seq__14050_14081 = G__14094;
chunk__14051_14082 = G__14095;
count__14052_14083 = G__14096;
i__14053_14084 = G__14097;
continue;
}
} else
{var class_14098 = cljs.core.first.call(null,seq__14050_14092__$1);var class_name_14099 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14099,class_14098)))
{} else
{elem__$1.className = (((class_name_14099 === ""))?class_14098:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14099)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_14098)));
}
{
var G__14100 = cljs.core.next.call(null,seq__14050_14092__$1);
var G__14101 = null;
var G__14102 = (0);
var G__14103 = (0);
seq__14050_14081 = G__14100;
chunk__14051_14082 = G__14101;
count__14052_14083 = G__14102;
i__14053_14084 = G__14103;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__14104__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14054_14105 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14055_14106 = null;var count__14056_14107 = (0);var i__14057_14108 = (0);while(true){
if((i__14057_14108 < count__14056_14107))
{var c_14109 = cljs.core._nth.call(null,chunk__14055_14106,i__14057_14108);add_class_BANG_.call(null,elem__$1,c_14109);
{
var G__14110 = seq__14054_14105;
var G__14111 = chunk__14055_14106;
var G__14112 = count__14056_14107;
var G__14113 = (i__14057_14108 + (1));
seq__14054_14105 = G__14110;
chunk__14055_14106 = G__14111;
count__14056_14107 = G__14112;
i__14057_14108 = G__14113;
continue;
}
} else
{var temp__4126__auto___14114 = cljs.core.seq.call(null,seq__14054_14105);if(temp__4126__auto___14114)
{var seq__14054_14115__$1 = temp__4126__auto___14114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14054_14115__$1))
{var c__4300__auto___14116 = cljs.core.chunk_first.call(null,seq__14054_14115__$1);{
var G__14117 = cljs.core.chunk_rest.call(null,seq__14054_14115__$1);
var G__14118 = c__4300__auto___14116;
var G__14119 = cljs.core.count.call(null,c__4300__auto___14116);
var G__14120 = (0);
seq__14054_14105 = G__14117;
chunk__14055_14106 = G__14118;
count__14056_14107 = G__14119;
i__14057_14108 = G__14120;
continue;
}
} else
{var c_14121 = cljs.core.first.call(null,seq__14054_14115__$1);add_class_BANG_.call(null,elem__$1,c_14121);
{
var G__14122 = cljs.core.next.call(null,seq__14054_14115__$1);
var G__14123 = null;
var G__14124 = (0);
var G__14125 = (0);
seq__14054_14105 = G__14122;
chunk__14055_14106 = G__14123;
count__14056_14107 = G__14124;
i__14057_14108 = G__14125;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14104 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14104__delegate.call(this,elem,classes,more_classes);};
G__14104.cljs$lang$maxFixedArity = 2;
G__14104.cljs$lang$applyTo = (function (arglist__14126){
var elem = cljs.core.first(arglist__14126);
arglist__14126 = cljs.core.next(arglist__14126);
var classes = cljs.core.first(arglist__14126);
var more_classes = cljs.core.rest(arglist__14126);
return G__14104__delegate(elem,classes,more_classes);
});
G__14104.cljs$core$IFn$_invoke$arity$variadic = G__14104__delegate;
return G__14104;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__14127 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__14127;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___14136 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___14136))
{var class_list_14137 = temp__4124__auto___14136;class_list_14137.remove(class$__$1);
} else
{var class_name_14138 = elem__$1.className;var new_class_name_14139 = dommy.attrs.remove_class_str.call(null,class_name_14138,class$__$1);if((class_name_14138 === new_class_name_14139))
{} else
{elem__$1.className = new_class_name_14139;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14140__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14132 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14133 = null;var count__14134 = (0);var i__14135 = (0);while(true){
if((i__14135 < count__14134))
{var c = cljs.core._nth.call(null,chunk__14133,i__14135);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14141 = seq__14132;
var G__14142 = chunk__14133;
var G__14143 = count__14134;
var G__14144 = (i__14135 + (1));
seq__14132 = G__14141;
chunk__14133 = G__14142;
count__14134 = G__14143;
i__14135 = G__14144;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14132);if(temp__4126__auto__)
{var seq__14132__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14132__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__14132__$1);{
var G__14145 = cljs.core.chunk_rest.call(null,seq__14132__$1);
var G__14146 = c__4300__auto__;
var G__14147 = cljs.core.count.call(null,c__4300__auto__);
var G__14148 = (0);
seq__14132 = G__14145;
chunk__14133 = G__14146;
count__14134 = G__14147;
i__14135 = G__14148;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14132__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14149 = cljs.core.next.call(null,seq__14132__$1);
var G__14150 = null;
var G__14151 = (0);
var G__14152 = (0);
seq__14132 = G__14149;
chunk__14133 = G__14150;
count__14134 = G__14151;
i__14135 = G__14152;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__14140 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14140__delegate.call(this,elem,class$,classes);};
G__14140.cljs$lang$maxFixedArity = 2;
G__14140.cljs$lang$applyTo = (function (arglist__14153){
var elem = cljs.core.first(arglist__14153);
arglist__14153 = cljs.core.next(arglist__14153);
var class$ = cljs.core.first(arglist__14153);
var classes = cljs.core.rest(arglist__14153);
return G__14140__delegate(elem,class$,classes);
});
G__14140.cljs$core$IFn$_invoke$arity$variadic = G__14140__delegate;
return G__14140;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___14154 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___14154))
{var class_list_14155 = temp__4124__auto___14154;class_list_14155.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14158){var vec__14159 = p__14158;var k = cljs.core.nth.call(null,vec__14159,(0),null);var v = cljs.core.nth.call(null,vec__14159,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14166_14172 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__14167_14173 = null;var count__14168_14174 = (0);var i__14169_14175 = (0);while(true){
if((i__14169_14175 < count__14168_14174))
{var vec__14170_14176 = cljs.core._nth.call(null,chunk__14167_14173,i__14169_14175);var k_14177 = cljs.core.nth.call(null,vec__14170_14176,(0),null);var v_14178 = cljs.core.nth.call(null,vec__14170_14176,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_14177),v_14178);
{
var G__14179 = seq__14166_14172;
var G__14180 = chunk__14167_14173;
var G__14181 = count__14168_14174;
var G__14182 = (i__14169_14175 + (1));
seq__14166_14172 = G__14179;
chunk__14167_14173 = G__14180;
count__14168_14174 = G__14181;
i__14169_14175 = G__14182;
continue;
}
} else
{var temp__4126__auto___14183 = cljs.core.seq.call(null,seq__14166_14172);if(temp__4126__auto___14183)
{var seq__14166_14184__$1 = temp__4126__auto___14183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14166_14184__$1))
{var c__4300__auto___14185 = cljs.core.chunk_first.call(null,seq__14166_14184__$1);{
var G__14186 = cljs.core.chunk_rest.call(null,seq__14166_14184__$1);
var G__14187 = c__4300__auto___14185;
var G__14188 = cljs.core.count.call(null,c__4300__auto___14185);
var G__14189 = (0);
seq__14166_14172 = G__14186;
chunk__14167_14173 = G__14187;
count__14168_14174 = G__14188;
i__14169_14175 = G__14189;
continue;
}
} else
{var vec__14171_14190 = cljs.core.first.call(null,seq__14166_14184__$1);var k_14191 = cljs.core.nth.call(null,vec__14171_14190,(0),null);var v_14192 = cljs.core.nth.call(null,vec__14171_14190,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_14191),v_14192);
{
var G__14193 = cljs.core.next.call(null,seq__14166_14184__$1);
var G__14194 = null;
var G__14195 = (0);
var G__14196 = (0);
seq__14166_14172 = G__14193;
chunk__14167_14173 = G__14194;
count__14168_14174 = G__14195;
i__14169_14175 = G__14196;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14197){
var elem = cljs.core.first(arglist__14197);
var kvs = cljs.core.rest(arglist__14197);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14204_14210 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__14205_14211 = null;var count__14206_14212 = (0);var i__14207_14213 = (0);while(true){
if((i__14207_14213 < count__14206_14212))
{var vec__14208_14214 = cljs.core._nth.call(null,chunk__14205_14211,i__14207_14213);var k_14215 = cljs.core.nth.call(null,vec__14208_14214,(0),null);var v_14216 = cljs.core.nth.call(null,vec__14208_14214,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14215,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14216)+"px"));
{
var G__14217 = seq__14204_14210;
var G__14218 = chunk__14205_14211;
var G__14219 = count__14206_14212;
var G__14220 = (i__14207_14213 + (1));
seq__14204_14210 = G__14217;
chunk__14205_14211 = G__14218;
count__14206_14212 = G__14219;
i__14207_14213 = G__14220;
continue;
}
} else
{var temp__4126__auto___14221 = cljs.core.seq.call(null,seq__14204_14210);if(temp__4126__auto___14221)
{var seq__14204_14222__$1 = temp__4126__auto___14221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14204_14222__$1))
{var c__4300__auto___14223 = cljs.core.chunk_first.call(null,seq__14204_14222__$1);{
var G__14224 = cljs.core.chunk_rest.call(null,seq__14204_14222__$1);
var G__14225 = c__4300__auto___14223;
var G__14226 = cljs.core.count.call(null,c__4300__auto___14223);
var G__14227 = (0);
seq__14204_14210 = G__14224;
chunk__14205_14211 = G__14225;
count__14206_14212 = G__14226;
i__14207_14213 = G__14227;
continue;
}
} else
{var vec__14209_14228 = cljs.core.first.call(null,seq__14204_14222__$1);var k_14229 = cljs.core.nth.call(null,vec__14209_14228,(0),null);var v_14230 = cljs.core.nth.call(null,vec__14209_14228,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14229,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14230)+"px"));
{
var G__14231 = cljs.core.next.call(null,seq__14204_14222__$1);
var G__14232 = null;
var G__14233 = (0);
var G__14234 = (0);
seq__14204_14210 = G__14231;
chunk__14205_14211 = G__14232;
count__14206_14212 = G__14233;
i__14207_14213 = G__14234;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14235){
var elem = cljs.core.first(arglist__14235);
var kvs = cljs.core.rest(arglist__14235);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
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
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__14244 = dommy.template.__GT_node_like.call(null,elem);(G__14244[dommy.utils.as_str.call(null,k)] = v);
return G__14244;
} else
{var G__14245 = dommy.template.__GT_node_like.call(null,elem);G__14245.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__14245;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14252__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14246_14253 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__14247_14254 = null;var count__14248_14255 = (0);var i__14249_14256 = (0);while(true){
if((i__14249_14256 < count__14248_14255))
{var vec__14250_14257 = cljs.core._nth.call(null,chunk__14247_14254,i__14249_14256);var k_14258__$1 = cljs.core.nth.call(null,vec__14250_14257,(0),null);var v_14259__$1 = cljs.core.nth.call(null,vec__14250_14257,(1),null);set_attr_BANG_.call(null,elem__$1,k_14258__$1,v_14259__$1);
{
var G__14260 = seq__14246_14253;
var G__14261 = chunk__14247_14254;
var G__14262 = count__14248_14255;
var G__14263 = (i__14249_14256 + (1));
seq__14246_14253 = G__14260;
chunk__14247_14254 = G__14261;
count__14248_14255 = G__14262;
i__14249_14256 = G__14263;
continue;
}
} else
{var temp__4126__auto___14264 = cljs.core.seq.call(null,seq__14246_14253);if(temp__4126__auto___14264)
{var seq__14246_14265__$1 = temp__4126__auto___14264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14246_14265__$1))
{var c__4300__auto___14266 = cljs.core.chunk_first.call(null,seq__14246_14265__$1);{
var G__14267 = cljs.core.chunk_rest.call(null,seq__14246_14265__$1);
var G__14268 = c__4300__auto___14266;
var G__14269 = cljs.core.count.call(null,c__4300__auto___14266);
var G__14270 = (0);
seq__14246_14253 = G__14267;
chunk__14247_14254 = G__14268;
count__14248_14255 = G__14269;
i__14249_14256 = G__14270;
continue;
}
} else
{var vec__14251_14271 = cljs.core.first.call(null,seq__14246_14265__$1);var k_14272__$1 = cljs.core.nth.call(null,vec__14251_14271,(0),null);var v_14273__$1 = cljs.core.nth.call(null,vec__14251_14271,(1),null);set_attr_BANG_.call(null,elem__$1,k_14272__$1,v_14273__$1);
{
var G__14274 = cljs.core.next.call(null,seq__14246_14265__$1);
var G__14275 = null;
var G__14276 = (0);
var G__14277 = (0);
seq__14246_14253 = G__14274;
chunk__14247_14254 = G__14275;
count__14248_14255 = G__14276;
i__14249_14256 = G__14277;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14252 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14252__delegate.call(this,elem,k,v,kvs);};
G__14252.cljs$lang$maxFixedArity = 3;
G__14252.cljs$lang$applyTo = (function (arglist__14278){
var elem = cljs.core.first(arglist__14278);
arglist__14278 = cljs.core.next(arglist__14278);
var k = cljs.core.first(arglist__14278);
arglist__14278 = cljs.core.next(arglist__14278);
var v = cljs.core.first(arglist__14278);
var kvs = cljs.core.rest(arglist__14278);
return G__14252__delegate(elem,k,v,kvs);
});
G__14252.cljs$core$IFn$_invoke$arity$variadic = G__14252__delegate;
return G__14252;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__14287__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14283_14288 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14284_14289 = null;var count__14285_14290 = (0);var i__14286_14291 = (0);while(true){
if((i__14286_14291 < count__14285_14290))
{var k_14292__$1 = cljs.core._nth.call(null,chunk__14284_14289,i__14286_14291);remove_attr_BANG_.call(null,elem__$1,k_14292__$1);
{
var G__14293 = seq__14283_14288;
var G__14294 = chunk__14284_14289;
var G__14295 = count__14285_14290;
var G__14296 = (i__14286_14291 + (1));
seq__14283_14288 = G__14293;
chunk__14284_14289 = G__14294;
count__14285_14290 = G__14295;
i__14286_14291 = G__14296;
continue;
}
} else
{var temp__4126__auto___14297 = cljs.core.seq.call(null,seq__14283_14288);if(temp__4126__auto___14297)
{var seq__14283_14298__$1 = temp__4126__auto___14297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14283_14298__$1))
{var c__4300__auto___14299 = cljs.core.chunk_first.call(null,seq__14283_14298__$1);{
var G__14300 = cljs.core.chunk_rest.call(null,seq__14283_14298__$1);
var G__14301 = c__4300__auto___14299;
var G__14302 = cljs.core.count.call(null,c__4300__auto___14299);
var G__14303 = (0);
seq__14283_14288 = G__14300;
chunk__14284_14289 = G__14301;
count__14285_14290 = G__14302;
i__14286_14291 = G__14303;
continue;
}
} else
{var k_14304__$1 = cljs.core.first.call(null,seq__14283_14298__$1);remove_attr_BANG_.call(null,elem__$1,k_14304__$1);
{
var G__14305 = cljs.core.next.call(null,seq__14283_14298__$1);
var G__14306 = null;
var G__14307 = (0);
var G__14308 = (0);
seq__14283_14288 = G__14305;
chunk__14284_14289 = G__14306;
count__14285_14290 = G__14307;
i__14286_14291 = G__14308;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14287 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14287__delegate.call(this,elem,k,ks);};
G__14287.cljs$lang$maxFixedArity = 2;
G__14287.cljs$lang$applyTo = (function (arglist__14309){
var elem = cljs.core.first(arglist__14309);
arglist__14309 = cljs.core.next(arglist__14309);
var k = cljs.core.first(arglist__14309);
var ks = cljs.core.rest(arglist__14309);
return G__14287__delegate(elem,k,ks);
});
G__14287.cljs$core$IFn$_invoke$arity$variadic = G__14287__delegate;
return G__14287;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14311 = dommy.template.__GT_node_like.call(null,elem);G__14311.style.display = ((show_QMARK_)?"":"none");
return G__14311;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14313 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14313,false);
return G__14313;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14315 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14315,true);
return G__14315;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map