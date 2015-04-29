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
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__11571(s__11572){
return (new cljs.core.LazySeq(null,(function (){
var s__11572__$1 = s__11572;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11572__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__11572__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__11571_$_iter__11573(s__11574){
return (new cljs.core.LazySeq(null,((function (s__11572__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__11574__$1 = s__11574;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11574__$1);
if(temp__4126__auto____$1){
var s__11574__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11574__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__11574__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__11576 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__11575 = (0);
while(true){
if((i__11575 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__11575);
cljs.core.chunk_append.call(null,b__11576,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__11577 = (i__11575 + (1));
i__11575 = G__11577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11576),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__11571_$_iter__11573.call(null,cljs.core.chunk_rest.call(null,s__11574__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11576),null);
}
} else {
var sy = cljs.core.first.call(null,s__11574__$2);
return cljs.core.cons.call(null,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__11571_$_iter__11573.call(null,cljs.core.rest.call(null,s__11574__$2)));
}
} else {
return null;
}
break;
}
});})(s__11572__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__11572__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__11571.call(null,cljs.core.rest.call(null,s__11572__$1)));
} else {
var G__11578 = cljs.core.rest.call(null,s__11572__$1);
s__11572__$1 = G__11578;
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
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__11585(s__11586){
return (new cljs.core.LazySeq(null,(function (){
var s__11586__$1 = s__11586;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11586__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__11586__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__11585_$_iter__11587(s__11588){
return (new cljs.core.LazySeq(null,((function (s__11586__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__11588__$1 = s__11588;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11588__$1);
if(temp__4126__auto____$1){
var s__11588__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11588__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__11588__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__11590 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__11589 = (0);
while(true){
if((i__11589 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__11589);
cljs.core.chunk_append.call(null,b__11590,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__11591 = (i__11589 + (1));
i__11589 = G__11591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11590),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__11585_$_iter__11587.call(null,cljs.core.chunk_rest.call(null,s__11588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11590),null);
}
} else {
var sy = cljs.core.first.call(null,s__11588__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__11585_$_iter__11587.call(null,cljs.core.rest.call(null,s__11588__$2)));
}
} else {
return null;
}
break;
}
});})(s__11586__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__11586__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__11585.call(null,cljs.core.rest.call(null,s__11586__$1)));
} else {
var G__11592 = cljs.core.rest.call(null,s__11586__$1);
s__11586__$1 = G__11592;
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
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__11599(s__11600){
return (new cljs.core.LazySeq(null,(function (){
var s__11600__$1 = s__11600;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11600__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__11600__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__11599_$_iter__11601(s__11602){
return (new cljs.core.LazySeq(null,((function (s__11600__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__11602__$1 = s__11602;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11602__$1);
if(temp__4126__auto____$1){
var s__11602__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11602__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__11602__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__11604 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__11603 = (0);
while(true){
if((i__11603 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__11603);
cljs.core.chunk_append.call(null,b__11604,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__11605 = (i__11603 + (1));
i__11603 = G__11605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11604),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__11599_$_iter__11601.call(null,cljs.core.chunk_rest.call(null,s__11602__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11604),null);
}
} else {
var sy = cljs.core.first.call(null,s__11602__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__11599_$_iter__11601.call(null,cljs.core.rest.call(null,s__11602__$2)));
}
} else {
return null;
}
break;
}
});})(s__11600__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__11600__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__11599.call(null,cljs.core.rest.call(null,s__11600__$1)));
} else {
var G__11606 = cljs.core.rest.call(null,s__11600__$1);
s__11600__$1 = G__11606;
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
return cljs_intro.data.add_frame.call(null,(function (){var iter__4876__auto__ = (function cljs_intro$data$produce_oriented_segments_soup_$_iter__11613(s__11614){
return (new cljs.core.LazySeq(null,(function (){
var s__11614__$1 = s__11614;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11614__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__11614__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_oriented_segments_soup_$_iter__11613_$_iter__11615(s__11616){
return (new cljs.core.LazySeq(null,((function (s__11614__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__11616__$1 = s__11616;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11616__$1);
if(temp__4126__auto____$1){
var s__11616__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11616__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__11616__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__11618 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__11617 = (0);
while(true){
if((i__11617 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__11617);
cljs.core.chunk_append.call(null,b__11618,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
var c = (Math.cos.call(null,a) * (40));
var s = (Math.sin.call(null,a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__11619 = (i__11617 + (1));
i__11617 = G__11619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11618),cljs_intro$data$produce_oriented_segments_soup_$_iter__11613_$_iter__11615.call(null,cljs.core.chunk_rest.call(null,s__11616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11618),null);
}
} else {
var sy = cljs.core.first.call(null,s__11616__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
var c = (Math.cos.call(null,a) * (40));
var s = (Math.sin.call(null,a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_oriented_segments_soup_$_iter__11613_$_iter__11615.call(null,cljs.core.rest.call(null,s__11616__$2)));
}
} else {
return null;
}
break;
}
});})(s__11614__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__11614__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_oriented_segments_soup_$_iter__11613.call(null,cljs.core.rest.call(null,s__11614__$1)));
} else {
var G__11620 = cljs.core.rest.call(null,s__11614__$1);
s__11614__$1 = G__11620;
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
return (function cljs_intro$data$produce_square_soup_$_iter__11627(s__11628){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__11628__$1 = s__11628;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11628__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4872__auto__ = ((function (s__11628__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function cljs_intro$data$produce_square_soup_$_iter__11627_$_iter__11629(s__11630){
return (new cljs.core.LazySeq(null,((function (s__11628__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function (){
var s__11630__$1 = s__11630;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11630__$1);
if(temp__4126__auto____$1){
var s__11630__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11630__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__11630__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__11632 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__11631 = (0);
while(true){
if((i__11631 < size__4875__auto__)){
var sy = cljs.core._nth.call(null,c__4874__auto__,i__11631);
cljs.core.chunk_append.call(null,b__11632,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})());

var G__11633 = (i__11631 + (1));
i__11631 = G__11633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11632),cljs_intro$data$produce_square_soup_$_iter__11627_$_iter__11629.call(null,cljs.core.chunk_rest.call(null,s__11630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11632),null);
}
} else {
var sy = cljs.core.first.call(null,s__11630__$2);
return cljs.core.cons.call(null,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})(),cljs_intro$data$produce_square_soup_$_iter__11627_$_iter__11629.call(null,cljs.core.rest.call(null,s__11630__$2)));
}
} else {
return null;
}
break;
}
});})(s__11628__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
,null,null));
});})(s__11628__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
;
var fs__4873__auto__ = cljs.core.seq.call(null,iterys__4872__auto__.call(null,cljs.core.range.call(null,ry)));
if(fs__4873__auto__){
return cljs.core.concat.call(null,fs__4873__auto__,cljs_intro$data$produce_square_soup_$_iter__11627.call(null,cljs.core.rest.call(null,s__11628__$1)));
} else {
var G__11634 = cljs.core.rest.call(null,s__11628__$1);
s__11628__$1 = G__11634;
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