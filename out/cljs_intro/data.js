// Compiled by ClojureScript 0.0-2280
goog.provide('cljs_intro.data');
goog.require('cljs.core');
cljs_intro.data.add_frame = (function add_frame(data){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0], null),new cljs.core.Keyword(null,"closed","closed",-919675359),true], null)], null),data));
});
cljs_intro.data.produce_empty_frame = (function produce_empty_frame(){return cljs_intro.data.add_frame.call(null,cljs.core.PersistentVector.EMPTY);
});
cljs_intro.data.produce_dev_data = (function produce_dev_data(){return cljs_intro.data.add_frame.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [100.0,50.0,540.0,50.0,540.0,160.0,100.0,160.0], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [200.0,190.0,(300),(350)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null)], null));
});
cljs_intro.data.produce_parallel_diagonal_segments_soup = (function produce_parallel_diagonal_segments_soup(){return cljs_intro.data.add_frame.call(null,(function (){var iter__4269__auto__ = (function iter__9651(s__9652){return (new cljs.core.LazySeq(null,(function (){var s__9652__$1 = s__9652;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9652__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var sx = cljs.core.first.call(null,xs__4624__auto__);var iterys__4265__auto__ = ((function (s__9652__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function iter__9653(s__9654){return (new cljs.core.LazySeq(null,((function (s__9652__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__9654__$1 = s__9654;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9654__$1);if(temp__4126__auto____$1)
{var s__9654__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9654__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__9654__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__9656 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__9655 = (0);while(true){
if((i__9655 < size__4268__auto__))
{var sy = cljs.core._nth.call(null,c__4267__auto__,i__9655);cljs.core.chunk_append.call(null,b__9656,(function (){var x = (((100) * sx) + (20));var y = (((100) * sy) + (30));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());
{
var G__9657 = (i__9655 + (1));
i__9655 = G__9657;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9656),iter__9653.call(null,cljs.core.chunk_rest.call(null,s__9654__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9656),null);
}
} else
{var sy = cljs.core.first.call(null,s__9654__$2);return cljs.core.cons.call(null,(function (){var x = (((100) * sx) + (20));var y = (((100) * sy) + (30));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),iter__9653.call(null,cljs.core.rest.call(null,s__9654__$2)));
}
} else
{return null;
}
break;
}
});})(s__9652__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__9652__$1,sx,xs__4624__auto__,temp__4126__auto__))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,cljs.core.range.call(null,(3))));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__9651.call(null,cljs.core.rest.call(null,s__9652__$1)));
} else
{{
var G__9658 = cljs.core.rest.call(null,s__9652__$1);
s__9652__$1 = G__9658;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_vertical_segments_soup = (function produce_parallel_vertical_segments_soup(){return cljs_intro.data.add_frame.call(null,(function (){var iter__4269__auto__ = (function iter__9665(s__9666){return (new cljs.core.LazySeq(null,(function (){var s__9666__$1 = s__9666;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9666__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var sx = cljs.core.first.call(null,xs__4624__auto__);var iterys__4265__auto__ = ((function (s__9666__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function iter__9667(s__9668){return (new cljs.core.LazySeq(null,((function (s__9666__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__9668__$1 = s__9668;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9668__$1);if(temp__4126__auto____$1)
{var s__9668__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9668__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__9668__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__9670 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__9669 = (0);while(true){
if((i__9669 < size__4268__auto__))
{var sy = cljs.core._nth.call(null,c__4267__auto__,i__9669);cljs.core.chunk_append.call(null,b__9670,(function (){var x = ((((100) * sx) + (50)) + (20));var y = ((((100) * sy) + (30)) + (50));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());
{
var G__9671 = (i__9669 + (1));
i__9669 = G__9671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9670),iter__9667.call(null,cljs.core.chunk_rest.call(null,s__9668__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9670),null);
}
} else
{var sy = cljs.core.first.call(null,s__9668__$2);return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));var y = ((((100) * sy) + (30)) + (50));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),iter__9667.call(null,cljs.core.rest.call(null,s__9668__$2)));
}
} else
{return null;
}
break;
}
});})(s__9666__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__9666__$1,sx,xs__4624__auto__,temp__4126__auto__))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,cljs.core.range.call(null,(3))));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__9665.call(null,cljs.core.rest.call(null,s__9666__$1)));
} else
{{
var G__9672 = cljs.core.rest.call(null,s__9666__$1);
s__9666__$1 = G__9672;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_horizontal_segments_soup = (function produce_parallel_horizontal_segments_soup(){return cljs_intro.data.add_frame.call(null,(function (){var iter__4269__auto__ = (function iter__9679(s__9680){return (new cljs.core.LazySeq(null,(function (){var s__9680__$1 = s__9680;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9680__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var sx = cljs.core.first.call(null,xs__4624__auto__);var iterys__4265__auto__ = ((function (s__9680__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function iter__9681(s__9682){return (new cljs.core.LazySeq(null,((function (s__9680__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__9682__$1 = s__9682;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9682__$1);if(temp__4126__auto____$1)
{var s__9682__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9682__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__9682__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__9684 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__9683 = (0);while(true){
if((i__9683 < size__4268__auto__))
{var sy = cljs.core._nth.call(null,c__4267__auto__,i__9683);cljs.core.chunk_append.call(null,b__9684,(function (){var x = ((((100) * sx) + (50)) + (20));var y = ((((100) * sy) + (30)) + (50));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());
{
var G__9685 = (i__9683 + (1));
i__9683 = G__9685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9684),iter__9681.call(null,cljs.core.chunk_rest.call(null,s__9682__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9684),null);
}
} else
{var sy = cljs.core.first.call(null,s__9682__$2);return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));var y = ((((100) * sy) + (30)) + (50));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),iter__9681.call(null,cljs.core.rest.call(null,s__9682__$2)));
}
} else
{return null;
}
break;
}
});})(s__9680__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__9680__$1,sx,xs__4624__auto__,temp__4126__auto__))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,cljs.core.range.call(null,(3))));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__9679.call(null,cljs.core.rest.call(null,s__9680__$1)));
} else
{{
var G__9686 = cljs.core.rest.call(null,s__9680__$1);
s__9680__$1 = G__9686;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_oriented_segments_soup = (function produce_oriented_segments_soup(){return cljs_intro.data.add_frame.call(null,(function (){var iter__4269__auto__ = (function iter__9693(s__9694){return (new cljs.core.LazySeq(null,(function (){var s__9694__$1 = s__9694;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9694__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var sx = cljs.core.first.call(null,xs__4624__auto__);var iterys__4265__auto__ = ((function (s__9694__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function iter__9695(s__9696){return (new cljs.core.LazySeq(null,((function (s__9694__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__9696__$1 = s__9696;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9696__$1);if(temp__4126__auto____$1)
{var s__9696__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9696__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__9696__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__9698 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__9697 = (0);while(true){
if((i__9697 < size__4268__auto__))
{var sy = cljs.core._nth.call(null,c__4267__auto__,i__9697);cljs.core.chunk_append.call(null,b__9698,(function (){var x = ((((100) * sx) + (50)) + (30));var y = ((((100) * sy) + (30)) + (40));var a = (Math.random.call(null) * ((2) * Math.PI));var c = (Math.cos.call(null,a) * (40));var s = (Math.sin.call(null,a) * (40));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());
{
var G__9699 = (i__9697 + (1));
i__9697 = G__9699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9698),iter__9695.call(null,cljs.core.chunk_rest.call(null,s__9696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9698),null);
}
} else
{var sy = cljs.core.first.call(null,s__9696__$2);return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));var y = ((((100) * sy) + (30)) + (40));var a = (Math.random.call(null) * ((2) * Math.PI));var c = (Math.cos.call(null,a) * (40));var s = (Math.sin.call(null,a) * (40));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),iter__9695.call(null,cljs.core.rest.call(null,s__9696__$2)));
}
} else
{return null;
}
break;
}
});})(s__9694__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__9694__$1,sx,xs__4624__auto__,temp__4126__auto__))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,cljs.core.range.call(null,(3))));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__9693.call(null,cljs.core.rest.call(null,s__9694__$1)));
} else
{{
var G__9700 = cljs.core.rest.call(null,s__9694__$1);
s__9694__$1 = G__9700;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4269__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_square_soup = (function() {
var produce_square_soup = null;
var produce_square_soup__0 = (function (){return produce_square_soup.call(null,(6),(3),(50),(40),(50));
});
var produce_square_soup__5 = (function (rx,ry,hc,ox,oy){var c = (hc * (2));return cljs_intro.data.add_frame.call(null,(function (){var iter__4269__auto__ = ((function (c){
return (function iter__9707(s__9708){return (new cljs.core.LazySeq(null,((function (c){
return (function (){var s__9708__$1 = s__9708;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9708__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var sx = cljs.core.first.call(null,xs__4624__auto__);var iterys__4265__auto__ = ((function (s__9708__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function iter__9709(s__9710){return (new cljs.core.LazySeq(null,((function (s__9708__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function (){var s__9710__$1 = s__9710;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9710__$1);if(temp__4126__auto____$1)
{var s__9710__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9710__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__9710__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__9712 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__9711 = (0);while(true){
if((i__9711 < size__4268__auto__))
{var sy = cljs.core._nth.call(null,c__4267__auto__,i__9711);cljs.core.chunk_append.call(null,b__9712,(function (){var x = ((sx * c) + ox);var y = ((sy * c) + oy);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})());
{
var G__9713 = (i__9711 + (1));
i__9711 = G__9713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9712),iter__9709.call(null,cljs.core.chunk_rest.call(null,s__9710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9712),null);
}
} else
{var sy = cljs.core.first.call(null,s__9710__$2);return cljs.core.cons.call(null,(function (){var x = ((sx * c) + ox);var y = ((sy * c) + oy);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})(),iter__9709.call(null,cljs.core.rest.call(null,s__9710__$2)));
}
} else
{return null;
}
break;
}
});})(s__9708__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
,null,null));
});})(s__9708__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
;var fs__4266__auto__ = cljs.core.seq.call(null,iterys__4265__auto__.call(null,cljs.core.range.call(null,ry)));if(fs__4266__auto__)
{return cljs.core.concat.call(null,fs__4266__auto__,iter__9707.call(null,cljs.core.rest.call(null,s__9708__$1)));
} else
{{
var G__9714 = cljs.core.rest.call(null,s__9708__$1);
s__9708__$1 = G__9714;
continue;
}
}
} else
{return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;return iter__4269__auto__.call(null,cljs.core.range.call(null,rx));
})());
});
produce_square_soup = function(rx,ry,hc,ox,oy){
switch(arguments.length){
case 0:
return produce_square_soup__0.call(this);
case 5:
return produce_square_soup__5.call(this,rx,ry,hc,ox,oy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
produce_square_soup.cljs$core$IFn$_invoke$arity$0 = produce_square_soup__0;
produce_square_soup.cljs$core$IFn$_invoke$arity$5 = produce_square_soup__5;
return produce_square_soup;
})()
;
cljs_intro.data.produce_space_partition_soup = (function() {
var produce_space_partition_soup = null;
var produce_space_partition_soup__4 = (function (x,y,w,h){return produce_space_partition_soup.call(null,x,y,w,h,0.1,(3));
});
var produce_space_partition_soup__6 = (function (x,y,w,h,p,d){if(((d > (0))) && ((Math.random.call(null) > p)))
{var o = ((4) * d);var hw = (w / (2));var hh = (h / (2));var ihw = ((w - ((2) * o)) / (2));var ihh = ((h - ((2) * o)) / (2));return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,produce_space_partition_soup.call(null,(x + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),produce_space_partition_soup.call(null,((x + hw) + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),produce_space_partition_soup.call(null,((x + hw) + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1))),produce_space_partition_soup.call(null,(x + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1)))));
} else
{if((Math.random.call(null) > p))
{var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + w),y,(x + w),(y + h),x,(y + h)], null);var closed = (Math.random.call(null) > 0.5);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(8),cljs.core.drop.call(null,((((4) * Math.random.call(null)) | (0)) * (2)),cljs.core.cycle.call(null,data)))),new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null)], null);
} else
{return cljs.core.PersistentVector.EMPTY;
}
}
});
produce_space_partition_soup = function(x,y,w,h,p,d){
switch(arguments.length){
case 4:
return produce_space_partition_soup__4.call(this,x,y,w,h);
case 6:
return produce_space_partition_soup__6.call(this,x,y,w,h,p,d);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
produce_space_partition_soup.cljs$core$IFn$_invoke$arity$4 = produce_space_partition_soup__4;
produce_space_partition_soup.cljs$core$IFn$_invoke$arity$6 = produce_space_partition_soup__6;
return produce_space_partition_soup;
})()
;
cljs_intro.data.produce_block_soup = (function produce_block_soup(){return cljs_intro.data.add_frame.call(null,cljs_intro.data.produce_space_partition_soup.call(null,(10),(10),(620),(320)));
});

//# sourceMappingURL=data.js.map