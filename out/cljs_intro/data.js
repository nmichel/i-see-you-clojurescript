// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs_intro.data');
goog.require('cljs.core');
cljs_intro.data.add_frame = (function cljs_intro$data$add_frame(data){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,640.0,0.0,640.0,360.0,0.0,360.0], null),new cljs.core.Keyword(null,"closed","closed",-919675359),true], null)], null),data));
});
cljs_intro.data.produce_empty_frame = (function cljs_intro$data$produce_empty_frame(){
return cljs_intro.data.add_frame.call(null,cljs.core.PersistentVector.EMPTY);
});
cljs_intro.data.produce_dev_data_1 = (function cljs_intro$data$produce_dev_data_1(){
return cljs_intro.data.add_frame.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [100.0,50.0,540.0,50.0,540.0,160.0,100.0,160.0], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [200.0,190.0,(300),(350)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null)], null));
});
cljs_intro.data.produce_dev_data_2 = (function cljs_intro$data$produce_dev_data_2(){
return cljs_intro.data.add_frame.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [100.0,80.0,150.0,50.0,150.0,160.0], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [150.0,190.0,150.0,250.0,200.0,220.0], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null)], null));
});
cljs_intro.data.produce_dev_data_3 = (function cljs_intro$data$produce_dev_data_3(){
return cljs_intro.data.add_frame.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [50.0,20.0,50.0,200.0], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null)], null));
});
cljs_intro.data.produce_dev_data_4 = (function cljs_intro$data$produce_dev_data_4(){
return cljs_intro.data.add_frame.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20),(220),(20),(220),(220),(20),(220)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),true], null)], null));
});
cljs_intro.data.produce_dev_data_5 = (function cljs_intro$data$produce_dev_data_5(){
return cljs_intro.data.add_frame.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(120),(120),(320),(120),(320),(320),(120),(320)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),true], null)], null));
});
cljs_intro.data.produce_parallel_diagonal_segments_soup = (function cljs_intro$data$produce_parallel_diagonal_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__10379(s__10380){
return (new cljs.core.LazySeq(null,(function (){
var s__10380__$1 = s__10380;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10380__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__10380__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__10379_$_iter__10381(s__10382){
return (new cljs.core.LazySeq(null,((function (s__10380__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__10382__$1 = s__10382;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10382__$1);
if(temp__4126__auto____$1){
var s__10382__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10382__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__10382__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__10384 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__10383 = (0);
while(true){
if((i__10383 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__10383);
cljs.core.chunk_append.call(null,b__10384,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__10385 = (i__10383 + (1));
i__10383 = G__10385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10384),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__10379_$_iter__10381.call(null,cljs.core.chunk_rest.call(null,s__10382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10384),null);
}
} else {
var sy = cljs.core.first.call(null,s__10382__$2);
return cljs.core.cons.call(null,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__10379_$_iter__10381.call(null,cljs.core.rest.call(null,s__10382__$2)));
}
} else {
return null;
}
break;
}
});})(s__10380__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__10380__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__10379.call(null,cljs.core.rest.call(null,s__10380__$1)));
} else {
var G__10386 = cljs.core.rest.call(null,s__10380__$1);
s__10380__$1 = G__10386;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4876__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_vertical_segments_soup = (function cljs_intro$data$produce_parallel_vertical_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__10393(s__10394){
return (new cljs.core.LazySeq(null,(function (){
var s__10394__$1 = s__10394;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10394__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__10394__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__10393_$_iter__10395(s__10396){
return (new cljs.core.LazySeq(null,((function (s__10394__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__10396__$1 = s__10396;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10396__$1);
if(temp__4126__auto____$1){
var s__10396__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10396__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__10396__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__10398 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__10397 = (0);
while(true){
if((i__10397 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__10397);
cljs.core.chunk_append.call(null,b__10398,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__10399 = (i__10397 + (1));
i__10397 = G__10399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10398),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__10393_$_iter__10395.call(null,cljs.core.chunk_rest.call(null,s__10396__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10398),null);
}
} else {
var sy = cljs.core.first.call(null,s__10396__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__10393_$_iter__10395.call(null,cljs.core.rest.call(null,s__10396__$2)));
}
} else {
return null;
}
break;
}
});})(s__10394__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__10394__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__10393.call(null,cljs.core.rest.call(null,s__10394__$1)));
} else {
var G__10400 = cljs.core.rest.call(null,s__10394__$1);
s__10394__$1 = G__10400;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4876__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_horizontal_segments_soup = (function cljs_intro$data$produce_parallel_horizontal_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__10407(s__10408){
return (new cljs.core.LazySeq(null,(function (){
var s__10408__$1 = s__10408;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10408__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__10408__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__10407_$_iter__10409(s__10410){
return (new cljs.core.LazySeq(null,((function (s__10408__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__10410__$1 = s__10410;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10410__$1);
if(temp__4126__auto____$1){
var s__10410__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10410__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__10410__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__10412 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__10411 = (0);
while(true){
if((i__10411 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__10411);
cljs.core.chunk_append.call(null,b__10412,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__10413 = (i__10411 + (1));
i__10411 = G__10413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10412),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__10407_$_iter__10409.call(null,cljs.core.chunk_rest.call(null,s__10410__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10412),null);
}
} else {
var sy = cljs.core.first.call(null,s__10410__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__10407_$_iter__10409.call(null,cljs.core.rest.call(null,s__10410__$2)));
}
} else {
return null;
}
break;
}
});})(s__10408__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__10408__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__10407.call(null,cljs.core.rest.call(null,s__10408__$1)));
} else {
var G__10414 = cljs.core.rest.call(null,s__10408__$1);
s__10408__$1 = G__10414;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4876__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_oriented_segments_soup = (function cljs_intro$data$produce_oriented_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_oriented_segments_soup_$_iter__10421(s__10422){
return (new cljs.core.LazySeq(null,(function (){
var s__10422__$1 = s__10422;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10422__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__10422__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_oriented_segments_soup_$_iter__10421_$_iter__10423(s__10424){
return (new cljs.core.LazySeq(null,((function (s__10422__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__10424__$1 = s__10424;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10424__$1);
if(temp__4126__auto____$1){
var s__10424__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10424__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__10424__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__10426 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__10425 = (0);
while(true){
if((i__10425 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__10425);
cljs.core.chunk_append.call(null,b__10426,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
var c = (Math.cos.call(null,a) * (40));
var s = (Math.sin.call(null,a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__10427 = (i__10425 + (1));
i__10425 = G__10427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10426),cljs_intro$data$produce_oriented_segments_soup_$_iter__10421_$_iter__10423.call(null,cljs.core.chunk_rest.call(null,s__10424__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10426),null);
}
} else {
var sy = cljs.core.first.call(null,s__10424__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
var c = (Math.cos.call(null,a) * (40));
var s = (Math.sin.call(null,a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_oriented_segments_soup_$_iter__10421_$_iter__10423.call(null,cljs.core.rest.call(null,s__10424__$2)));
}
} else {
return null;
}
break;
}
});})(s__10422__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__10422__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_oriented_segments_soup_$_iter__10421.call(null,cljs.core.rest.call(null,s__10422__$1)));
} else {
var G__10428 = cljs.core.rest.call(null,s__10422__$1);
s__10422__$1 = G__10428;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4876__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_square_soup = (function() {
var cljs_intro$data$produce_square_soup = null;
var cljs_intro$data$produce_square_soup__0 = (function (){
return cljs_intro$data$produce_square_soup.call(null,(6),(3),(50),(40),(50));
});
var cljs_intro$data$produce_square_soup__5 = (function (rx,ry,hc,ox,oy){
var c = (hc * (2));
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = ((function (c){
return (function cljs_intro$data$produce_square_soup_$_iter__10435(s__10436){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__10436__$1 = s__10436;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10436__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__10436__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function cljs_intro$data$produce_square_soup_$_iter__10435_$_iter__10437(s__10438){
return (new cljs.core.LazySeq(null,((function (s__10436__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function (){
var s__10438__$1 = s__10438;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10438__$1);
if(temp__4126__auto____$1){
var s__10438__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10438__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__10438__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__10440 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__10439 = (0);
while(true){
if((i__10439 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__10439);
cljs.core.chunk_append.call(null,b__10440,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})());

var G__10441 = (i__10439 + (1));
i__10439 = G__10441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10440),cljs_intro$data$produce_square_soup_$_iter__10435_$_iter__10437.call(null,cljs.core.chunk_rest.call(null,s__10438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10440),null);
}
} else {
var sy = cljs.core.first.call(null,s__10438__$2);
return cljs.core.cons.call(null,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})(),cljs_intro$data$produce_square_soup_$_iter__10435_$_iter__10437.call(null,cljs.core.rest.call(null,s__10438__$2)));
}
} else {
return null;
}
break;
}
});})(s__10436__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
,null,null));
});})(s__10436__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,ry)));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_square_soup_$_iter__10435.call(null,cljs.core.rest.call(null,s__10436__$1)));
} else {
var G__10442 = cljs.core.rest.call(null,s__10436__$1);
s__10436__$1 = G__10442;
continue;
}
} else {
return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;
return iter__4876__auto__.call(null,cljs.core.range.call(null,rx));
})());
});
cljs_intro$data$produce_square_soup = function(rx,ry,hc,ox,oy){
switch(arguments.length){
case 0:
return cljs_intro$data$produce_square_soup__0.call(this);
case 5:
return cljs_intro$data$produce_square_soup__5.call(this,rx,ry,hc,ox,oy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$data$produce_square_soup.cljs$core$IFn$_invoke$arity$0 = cljs_intro$data$produce_square_soup__0;
cljs_intro$data$produce_square_soup.cljs$core$IFn$_invoke$arity$5 = cljs_intro$data$produce_square_soup__5;
return cljs_intro$data$produce_square_soup;
})()
;
cljs_intro.data.produce_space_partition_soup = (function() {
var cljs_intro$data$produce_space_partition_soup = null;
var cljs_intro$data$produce_space_partition_soup__4 = (function (x,y,w,h){
return cljs_intro$data$produce_space_partition_soup.call(null,x,y,w,h,0.1,(3));
});
var cljs_intro$data$produce_space_partition_soup__6 = (function (x,y,w,h,p,d){
if(((d > (0))) && ((Math.random.call(null) > p))){
var o = ((4) * d);
var hw = (w / (2));
var hh = (h / (2));
var ihw = ((w - ((2) * o)) / (2));
var ihh = ((h - ((2) * o)) / (2));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs_intro$data$produce_space_partition_soup.call(null,(x + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro$data$produce_space_partition_soup.call(null,((x + hw) + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro$data$produce_space_partition_soup.call(null,((x + hw) + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro$data$produce_space_partition_soup.call(null,(x + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1)))));
} else {
if((Math.random.call(null) > p)){
var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + w),y,(x + w),(y + h),x,(y + h)], null);
var closed = (Math.random.call(null) > 0.5);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(8),cljs.core.drop.call(null,((((4) * Math.random.call(null)) | (0)) * (2)),cljs.core.cycle.call(null,data)))),new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
cljs_intro$data$produce_space_partition_soup = function(x,y,w,h,p,d){
switch(arguments.length){
case 4:
return cljs_intro$data$produce_space_partition_soup__4.call(this,x,y,w,h);
case 6:
return cljs_intro$data$produce_space_partition_soup__6.call(this,x,y,w,h,p,d);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_intro$data$produce_space_partition_soup.cljs$core$IFn$_invoke$arity$4 = cljs_intro$data$produce_space_partition_soup__4;
cljs_intro$data$produce_space_partition_soup.cljs$core$IFn$_invoke$arity$6 = cljs_intro$data$produce_space_partition_soup__6;
return cljs_intro$data$produce_space_partition_soup;
})()
;
cljs_intro.data.produce_block_soup = (function cljs_intro$data$produce_block_soup(){
return cljs_intro.data.add_frame.call(null,cljs_intro.data.produce_space_partition_soup.call(null,(10),(10),(620),(320)));
});

//# sourceMappingURL=data.js.map