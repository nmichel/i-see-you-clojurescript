// Compiled by ClojureScript 1.7.145 {}
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
return cljs_intro.data.add_frame.call(null,(function (){var iter__5341__auto__ = (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__5685(s__5686){
return (new cljs.core.LazySeq(null,(function (){
var s__5686__$1 = s__5686;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5686__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5337__auto__ = ((function (s__5686__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__5685_$_iter__5687(s__5688){
return (new cljs.core.LazySeq(null,((function (s__5686__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__5688__$1 = s__5688;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__5688__$1);
if(temp__4425__auto____$1){
var s__5688__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5688__$2)){
var c__5339__auto__ = cljs.core.chunk_first.call(null,s__5688__$2);
var size__5340__auto__ = cljs.core.count.call(null,c__5339__auto__);
var b__5690 = cljs.core.chunk_buffer.call(null,size__5340__auto__);
if((function (){var i__5689 = (0);
while(true){
if((i__5689 < size__5340__auto__)){
var sy = cljs.core._nth.call(null,c__5339__auto__,i__5689);
cljs.core.chunk_append.call(null,b__5690,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__5691 = (i__5689 + (1));
i__5689 = G__5691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5690),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__5685_$_iter__5687.call(null,cljs.core.chunk_rest.call(null,s__5688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5690),null);
}
} else {
var sy = cljs.core.first.call(null,s__5688__$2);
return cljs.core.cons.call(null,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__5685_$_iter__5687.call(null,cljs.core.rest.call(null,s__5688__$2)));
}
} else {
return null;
}
break;
}
});})(s__5686__$1,sx,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__5686__$1,sx,xs__4977__auto__,temp__4425__auto__))
;
var fs__5338__auto__ = cljs.core.seq.call(null,iterys__5337__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5338__auto__){
return cljs.core.concat.call(null,fs__5338__auto__,cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__5685.call(null,cljs.core.rest.call(null,s__5686__$1)));
} else {
var G__5692 = cljs.core.rest.call(null,s__5686__$1);
s__5686__$1 = G__5692;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5341__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_vertical_segments_soup = (function cljs_intro$data$produce_parallel_vertical_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__5341__auto__ = (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__5699(s__5700){
return (new cljs.core.LazySeq(null,(function (){
var s__5700__$1 = s__5700;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5700__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5337__auto__ = ((function (s__5700__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__5699_$_iter__5701(s__5702){
return (new cljs.core.LazySeq(null,((function (s__5700__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__5702__$1 = s__5702;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__5702__$1);
if(temp__4425__auto____$1){
var s__5702__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5702__$2)){
var c__5339__auto__ = cljs.core.chunk_first.call(null,s__5702__$2);
var size__5340__auto__ = cljs.core.count.call(null,c__5339__auto__);
var b__5704 = cljs.core.chunk_buffer.call(null,size__5340__auto__);
if((function (){var i__5703 = (0);
while(true){
if((i__5703 < size__5340__auto__)){
var sy = cljs.core._nth.call(null,c__5339__auto__,i__5703);
cljs.core.chunk_append.call(null,b__5704,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__5705 = (i__5703 + (1));
i__5703 = G__5705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5704),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__5699_$_iter__5701.call(null,cljs.core.chunk_rest.call(null,s__5702__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5704),null);
}
} else {
var sy = cljs.core.first.call(null,s__5702__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__5699_$_iter__5701.call(null,cljs.core.rest.call(null,s__5702__$2)));
}
} else {
return null;
}
break;
}
});})(s__5700__$1,sx,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__5700__$1,sx,xs__4977__auto__,temp__4425__auto__))
;
var fs__5338__auto__ = cljs.core.seq.call(null,iterys__5337__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5338__auto__){
return cljs.core.concat.call(null,fs__5338__auto__,cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__5699.call(null,cljs.core.rest.call(null,s__5700__$1)));
} else {
var G__5706 = cljs.core.rest.call(null,s__5700__$1);
s__5700__$1 = G__5706;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5341__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_horizontal_segments_soup = (function cljs_intro$data$produce_parallel_horizontal_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__5341__auto__ = (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__5713(s__5714){
return (new cljs.core.LazySeq(null,(function (){
var s__5714__$1 = s__5714;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5714__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5337__auto__ = ((function (s__5714__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__5713_$_iter__5715(s__5716){
return (new cljs.core.LazySeq(null,((function (s__5714__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__5716__$1 = s__5716;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__5716__$1);
if(temp__4425__auto____$1){
var s__5716__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5716__$2)){
var c__5339__auto__ = cljs.core.chunk_first.call(null,s__5716__$2);
var size__5340__auto__ = cljs.core.count.call(null,c__5339__auto__);
var b__5718 = cljs.core.chunk_buffer.call(null,size__5340__auto__);
if((function (){var i__5717 = (0);
while(true){
if((i__5717 < size__5340__auto__)){
var sy = cljs.core._nth.call(null,c__5339__auto__,i__5717);
cljs.core.chunk_append.call(null,b__5718,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__5719 = (i__5717 + (1));
i__5717 = G__5719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5718),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__5713_$_iter__5715.call(null,cljs.core.chunk_rest.call(null,s__5716__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5718),null);
}
} else {
var sy = cljs.core.first.call(null,s__5716__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__5713_$_iter__5715.call(null,cljs.core.rest.call(null,s__5716__$2)));
}
} else {
return null;
}
break;
}
});})(s__5714__$1,sx,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__5714__$1,sx,xs__4977__auto__,temp__4425__auto__))
;
var fs__5338__auto__ = cljs.core.seq.call(null,iterys__5337__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5338__auto__){
return cljs.core.concat.call(null,fs__5338__auto__,cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__5713.call(null,cljs.core.rest.call(null,s__5714__$1)));
} else {
var G__5720 = cljs.core.rest.call(null,s__5714__$1);
s__5714__$1 = G__5720;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5341__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_oriented_segments_soup = (function cljs_intro$data$produce_oriented_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__5341__auto__ = (function cljs_intro$data$produce_oriented_segments_soup_$_iter__5727(s__5728){
return (new cljs.core.LazySeq(null,(function (){
var s__5728__$1 = s__5728;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5728__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5337__auto__ = ((function (s__5728__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function cljs_intro$data$produce_oriented_segments_soup_$_iter__5727_$_iter__5729(s__5730){
return (new cljs.core.LazySeq(null,((function (s__5728__$1,sx,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__5730__$1 = s__5730;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__5730__$1);
if(temp__4425__auto____$1){
var s__5730__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5730__$2)){
var c__5339__auto__ = cljs.core.chunk_first.call(null,s__5730__$2);
var size__5340__auto__ = cljs.core.count.call(null,c__5339__auto__);
var b__5732 = cljs.core.chunk_buffer.call(null,size__5340__auto__);
if((function (){var i__5731 = (0);
while(true){
if((i__5731 < size__5340__auto__)){
var sy = cljs.core._nth.call(null,c__5339__auto__,i__5731);
cljs.core.chunk_append.call(null,b__5732,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
var c = (Math.cos(a) * (40));
var s = (Math.sin(a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__5733 = (i__5731 + (1));
i__5731 = G__5733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5732),cljs_intro$data$produce_oriented_segments_soup_$_iter__5727_$_iter__5729.call(null,cljs.core.chunk_rest.call(null,s__5730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5732),null);
}
} else {
var sy = cljs.core.first.call(null,s__5730__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random() * ((2) * Math.PI));
var c = (Math.cos(a) * (40));
var s = (Math.sin(a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_oriented_segments_soup_$_iter__5727_$_iter__5729.call(null,cljs.core.rest.call(null,s__5730__$2)));
}
} else {
return null;
}
break;
}
});})(s__5728__$1,sx,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__5728__$1,sx,xs__4977__auto__,temp__4425__auto__))
;
var fs__5338__auto__ = cljs.core.seq.call(null,iterys__5337__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5338__auto__){
return cljs.core.concat.call(null,fs__5338__auto__,cljs_intro$data$produce_oriented_segments_soup_$_iter__5727.call(null,cljs.core.rest.call(null,s__5728__$1)));
} else {
var G__5734 = cljs.core.rest.call(null,s__5728__$1);
s__5728__$1 = G__5734;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5341__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_square_soup = (function cljs_intro$data$produce_square_soup(var_args){
var args5735 = [];
var len__5627__auto___5744 = arguments.length;
var i__5628__auto___5745 = (0);
while(true){
if((i__5628__auto___5745 < len__5627__auto___5744)){
args5735.push((arguments[i__5628__auto___5745]));

var G__5746 = (i__5628__auto___5745 + (1));
i__5628__auto___5745 = G__5746;
continue;
} else {
}
break;
}

var G__5737 = args5735.length;
switch (G__5737) {
case 0:
return cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$0();

break;
case 5:
return cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5735.length)].join('')));

}
});

cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_intro.data.produce_square_soup.call(null,(6),(3),(50),(40),(50));
});

cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$5 = (function (rx,ry,hc,ox,oy){
var c = (hc * (2));
return cljs_intro.data.add_frame.call(null,(function (){var iter__5341__auto__ = ((function (c){
return (function cljs_intro$data$iter__5738(s__5739){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__5739__$1 = s__5739;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5739__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var sx = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5337__auto__ = ((function (s__5739__$1,sx,xs__4977__auto__,temp__4425__auto__,c){
return (function cljs_intro$data$iter__5738_$_iter__5740(s__5741){
return (new cljs.core.LazySeq(null,((function (s__5739__$1,sx,xs__4977__auto__,temp__4425__auto__,c){
return (function (){
var s__5741__$1 = s__5741;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__5741__$1);
if(temp__4425__auto____$1){
var s__5741__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5741__$2)){
var c__5339__auto__ = cljs.core.chunk_first.call(null,s__5741__$2);
var size__5340__auto__ = cljs.core.count.call(null,c__5339__auto__);
var b__5743 = cljs.core.chunk_buffer.call(null,size__5340__auto__);
if((function (){var i__5742 = (0);
while(true){
if((i__5742 < size__5340__auto__)){
var sy = cljs.core._nth.call(null,c__5339__auto__,i__5742);
cljs.core.chunk_append.call(null,b__5743,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})());

var G__5748 = (i__5742 + (1));
i__5742 = G__5748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5743),cljs_intro$data$iter__5738_$_iter__5740.call(null,cljs.core.chunk_rest.call(null,s__5741__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5743),null);
}
} else {
var sy = cljs.core.first.call(null,s__5741__$2);
return cljs.core.cons.call(null,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})(),cljs_intro$data$iter__5738_$_iter__5740.call(null,cljs.core.rest.call(null,s__5741__$2)));
}
} else {
return null;
}
break;
}
});})(s__5739__$1,sx,xs__4977__auto__,temp__4425__auto__,c))
,null,null));
});})(s__5739__$1,sx,xs__4977__auto__,temp__4425__auto__,c))
;
var fs__5338__auto__ = cljs.core.seq.call(null,iterys__5337__auto__.call(null,cljs.core.range.call(null,ry)));
if(fs__5338__auto__){
return cljs.core.concat.call(null,fs__5338__auto__,cljs_intro$data$iter__5738.call(null,cljs.core.rest.call(null,s__5739__$1)));
} else {
var G__5749 = cljs.core.rest.call(null,s__5739__$1);
s__5739__$1 = G__5749;
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
return iter__5341__auto__.call(null,cljs.core.range.call(null,rx));
})());
});

cljs_intro.data.produce_square_soup.cljs$lang$maxFixedArity = 5;
cljs_intro.data.produce_space_partition_soup = (function cljs_intro$data$produce_space_partition_soup(var_args){
var args5750 = [];
var len__5627__auto___5753 = arguments.length;
var i__5628__auto___5754 = (0);
while(true){
if((i__5628__auto___5754 < len__5627__auto___5753)){
args5750.push((arguments[i__5628__auto___5754]));

var G__5755 = (i__5628__auto___5754 + (1));
i__5628__auto___5754 = G__5755;
continue;
} else {
}
break;
}

var G__5752 = args5750.length;
switch (G__5752) {
case 4:
return cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5750.length)].join('')));

}
});

cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return cljs_intro.data.produce_space_partition_soup.call(null,x,y,w,h,0.1,(3));
});

cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$6 = (function (x,y,w,h,p,d){
if(((d > (0))) && ((Math.random() > p))){
var o = ((4) * d);
var hw = (w / (2));
var hh = (h / (2));
var ihw = ((w - ((2) * o)) / (2));
var ihh = ((h - ((2) * o)) / (2));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs_intro.data.produce_space_partition_soup.call(null,(x + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro.data.produce_space_partition_soup.call(null,((x + hw) + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro.data.produce_space_partition_soup.call(null,((x + hw) + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro.data.produce_space_partition_soup.call(null,(x + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1)))));
} else {
if((Math.random() > p)){
var data = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + w),y,(x + w),(y + h),x,(y + h)], null);
var closed = (Math.random() > 0.5);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(8),cljs.core.drop.call(null,((((4) * Math.random()) | (0)) * (2)),cljs.core.cycle.call(null,data)))),new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});

cljs_intro.data.produce_space_partition_soup.cljs$lang$maxFixedArity = 6;
cljs_intro.data.produce_block_soup = (function cljs_intro$data$produce_block_soup(){
return cljs_intro.data.add_frame.call(null,cljs_intro.data.produce_space_partition_soup.call(null,(10),(10),(620),(320)));
});
cljs_intro.data.produce_polygon = (function cljs_intro$data$produce_polygon(x,y,r,c,offset,closed){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((Math.cos((a + offset)) * r) + x),((Math.sin((a + offset)) * r) + y)], null);
}),cljs.core.range.call(null,(0),((2) * Math.PI),((Math.PI * (2)) / c)))),new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null)], null);
});
cljs_intro.data.produce_nested_polygons = (function cljs_intro$data$produce_nested_polygons(x,y,r,c){
return cljs.core.mapcat.call(null,(function (rr){
return cljs_intro.data.produce_polygon.call(null,x,y,rr,((5) + (Math.random() * (5))),(Math.random() * Math.PI),false);
}),cljs.core.drop.call(null,(1),cljs.core.range.call(null,(0),r,(r / c))));
});
cljs_intro.data.produce_spiral = (function cljs_intro$data$produce_spiral(x,y,r,offset){
var twopi = ((2) * Math.PI);
var spir = ((6) * twopi);
var segs = (200);
var step = (spir / segs);
var dr = (r / segs);
var coefd = 0.25;
var coeft = (1);
return cljs.core.map.call(null,((function (twopi,spir,segs,step,dr,coefd,coeft){
return (function (rng){
var l = cljs.core.count.call(null,rng);
var d = (function (){var x__4907__auto__ = ((Math.random() * coefd) * l);
var y__4908__auto__ = (l - (2));
return ((x__4907__auto__ < y__4908__auto__) ? x__4907__auto__ : y__4908__auto__);
})();
var t = (function (){var x__4900__auto__ = ((Math.random() * coeft) * (l - d));
var y__4901__auto__ = (2);
return ((x__4900__auto__ > y__4901__auto__) ? x__4900__auto__ : y__4901__auto__);
})();
var roffset = (Math.PI * Math.random());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapcat.call(null,((function (l,d,t,roffset,twopi,spir,segs,step,dr,coefd,coeft){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((Math.cos(((i * step) + roffset)) * dr) * i) + x),(((Math.sin(((i * step) + roffset)) * dr) * i) + y)], null);
});})(l,d,t,roffset,twopi,spir,segs,step,dr,coefd,coeft))
,cljs.core.take.call(null,t,cljs.core.drop.call(null,d,rng))),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
});})(twopi,spir,segs,step,dr,coefd,coeft))
,cljs.core.filter.call(null,((function (twopi,spir,segs,step,dr,coefd,coeft){
return (function (p1__5757_SHARP_){
return (cljs.core.count.call(null,p1__5757_SHARP_) >= (2));
});})(twopi,spir,segs,step,dr,coefd,coeft))
,cljs.core.partition.call(null,(10),cljs.core.range.call(null,(1),segs))));
});

//# sourceMappingURL=data.js.map