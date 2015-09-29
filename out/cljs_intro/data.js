// Compiled by ClojureScript 0.0-3211 {}
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
return cljs_intro.data.add_frame.call(null,(function (){var iter__16898__auto__ = (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__22788(s__22789){
return (new cljs.core.LazySeq(null,(function (){
var s__22789__$1 = s__22789;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22789__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__16894__auto__ = ((function (s__22789__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__22788_$_iter__22790(s__22791){
return (new cljs.core.LazySeq(null,((function (s__22789__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__22791__$1 = s__22791;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22791__$1);
if(temp__4126__auto____$1){
var s__22791__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22791__$2)){
var c__16896__auto__ = cljs.core.chunk_first.call(null,s__22791__$2);
var size__16897__auto__ = cljs.core.count.call(null,c__16896__auto__);
var b__22793 = cljs.core.chunk_buffer.call(null,size__16897__auto__);
if((function (){var i__22792 = (0);
while(true){
if((i__22792 < size__16897__auto__)){
var sy = cljs.core._nth.call(null,c__16896__auto__,i__22792);
cljs.core.chunk_append.call(null,b__22793,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__22794 = (i__22792 + (1));
i__22792 = G__22794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22793),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__22788_$_iter__22790.call(null,cljs.core.chunk_rest.call(null,s__22791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22793),null);
}
} else {
var sy = cljs.core.first.call(null,s__22791__$2);
return cljs.core.cons.call(null,(function (){var x = (((100) * sx) + (20));
var y = (((100) * sy) + (30));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20)),(x + (80)),(y + (80))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__22788_$_iter__22790.call(null,cljs.core.rest.call(null,s__22791__$2)));
}
} else {
return null;
}
break;
}
});})(s__22789__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__22789__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__16895__auto__ = cljs.core.seq.call(null,iterys__16894__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__16895__auto__){
return cljs.core.concat.call(null,fs__16895__auto__,cljs_intro$data$produce_parallel_diagonal_segments_soup_$_iter__22788.call(null,cljs.core.rest.call(null,s__22789__$1)));
} else {
var G__22795 = cljs.core.rest.call(null,s__22789__$1);
s__22789__$1 = G__22795;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16898__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_vertical_segments_soup = (function cljs_intro$data$produce_parallel_vertical_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__16898__auto__ = (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__22802(s__22803){
return (new cljs.core.LazySeq(null,(function (){
var s__22803__$1 = s__22803;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22803__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__16894__auto__ = ((function (s__22803__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__22802_$_iter__22804(s__22805){
return (new cljs.core.LazySeq(null,((function (s__22803__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__22805__$1 = s__22805;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22805__$1);
if(temp__4126__auto____$1){
var s__22805__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22805__$2)){
var c__16896__auto__ = cljs.core.chunk_first.call(null,s__22805__$2);
var size__16897__auto__ = cljs.core.count.call(null,c__16896__auto__);
var b__22807 = cljs.core.chunk_buffer.call(null,size__16897__auto__);
if((function (){var i__22806 = (0);
while(true){
if((i__22806 < size__16897__auto__)){
var sy = cljs.core._nth.call(null,c__16896__auto__,i__22806);
cljs.core.chunk_append.call(null,b__22807,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__22808 = (i__22806 + (1));
i__22806 = G__22808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22807),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__22802_$_iter__22804.call(null,cljs.core.chunk_rest.call(null,s__22805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22807),null);
}
} else {
var sy = cljs.core.first.call(null,s__22805__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (30)),x,(y - (30))], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__22802_$_iter__22804.call(null,cljs.core.rest.call(null,s__22805__$2)));
}
} else {
return null;
}
break;
}
});})(s__22803__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__22803__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__16895__auto__ = cljs.core.seq.call(null,iterys__16894__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__16895__auto__){
return cljs.core.concat.call(null,fs__16895__auto__,cljs_intro$data$produce_parallel_vertical_segments_soup_$_iter__22802.call(null,cljs.core.rest.call(null,s__22803__$1)));
} else {
var G__22809 = cljs.core.rest.call(null,s__22803__$1);
s__22803__$1 = G__22809;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16898__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_parallel_horizontal_segments_soup = (function cljs_intro$data$produce_parallel_horizontal_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__16898__auto__ = (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__22816(s__22817){
return (new cljs.core.LazySeq(null,(function (){
var s__22817__$1 = s__22817;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22817__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__16894__auto__ = ((function (s__22817__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__22816_$_iter__22818(s__22819){
return (new cljs.core.LazySeq(null,((function (s__22817__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__22819__$1 = s__22819;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22819__$1);
if(temp__4126__auto____$1){
var s__22819__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22819__$2)){
var c__16896__auto__ = cljs.core.chunk_first.call(null,s__22819__$2);
var size__16897__auto__ = cljs.core.count.call(null,c__16896__auto__);
var b__22821 = cljs.core.chunk_buffer.call(null,size__16897__auto__);
if((function (){var i__22820 = (0);
while(true){
if((i__22820 < size__16897__auto__)){
var sy = cljs.core._nth.call(null,c__16896__auto__,i__22820);
cljs.core.chunk_append.call(null,b__22821,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__22822 = (i__22820 + (1));
i__22820 = G__22822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22821),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__22816_$_iter__22818.call(null,cljs.core.chunk_rest.call(null,s__22819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22821),null);
}
} else {
var sy = cljs.core.first.call(null,s__22819__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (20));
var y = ((((100) * sy) + (30)) + (50));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (30)),y,(x - (30)),y], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__22816_$_iter__22818.call(null,cljs.core.rest.call(null,s__22819__$2)));
}
} else {
return null;
}
break;
}
});})(s__22817__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__22817__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__16895__auto__ = cljs.core.seq.call(null,iterys__16894__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__16895__auto__){
return cljs.core.concat.call(null,fs__16895__auto__,cljs_intro$data$produce_parallel_horizontal_segments_soup_$_iter__22816.call(null,cljs.core.rest.call(null,s__22817__$1)));
} else {
var G__22823 = cljs.core.rest.call(null,s__22817__$1);
s__22817__$1 = G__22823;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16898__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_oriented_segments_soup = (function cljs_intro$data$produce_oriented_segments_soup(){
return cljs_intro.data.add_frame.call(null,(function (){var iter__16898__auto__ = (function cljs_intro$data$produce_oriented_segments_soup_$_iter__22830(s__22831){
return (new cljs.core.LazySeq(null,(function (){
var s__22831__$1 = s__22831;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22831__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__16894__auto__ = ((function (s__22831__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function cljs_intro$data$produce_oriented_segments_soup_$_iter__22830_$_iter__22832(s__22833){
return (new cljs.core.LazySeq(null,((function (s__22831__$1,sx,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__22833__$1 = s__22833;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22833__$1);
if(temp__4126__auto____$1){
var s__22833__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22833__$2)){
var c__16896__auto__ = cljs.core.chunk_first.call(null,s__22833__$2);
var size__16897__auto__ = cljs.core.count.call(null,c__16896__auto__);
var b__22835 = cljs.core.chunk_buffer.call(null,size__16897__auto__);
if((function (){var i__22834 = (0);
while(true){
if((i__22834 < size__16897__auto__)){
var sy = cljs.core._nth.call(null,c__16896__auto__,i__22834);
cljs.core.chunk_append.call(null,b__22835,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
var c = (Math.cos.call(null,a) * (40));
var s = (Math.sin.call(null,a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})());

var G__22836 = (i__22834 + (1));
i__22834 = G__22836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22835),cljs_intro$data$produce_oriented_segments_soup_$_iter__22830_$_iter__22832.call(null,cljs.core.chunk_rest.call(null,s__22833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22835),null);
}
} else {
var sy = cljs.core.first.call(null,s__22833__$2);
return cljs.core.cons.call(null,(function (){var x = ((((100) * sx) + (50)) + (30));
var y = ((((100) * sy) + (30)) + (40));
var a = (Math.random.call(null) * ((2) * Math.PI));
var c = (Math.cos.call(null,a) * (40));
var s = (Math.sin.call(null,a) * (40));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + c),(y + s),(x - c),(y - s)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),false], null);
})(),cljs_intro$data$produce_oriented_segments_soup_$_iter__22830_$_iter__22832.call(null,cljs.core.rest.call(null,s__22833__$2)));
}
} else {
return null;
}
break;
}
});})(s__22831__$1,sx,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__22831__$1,sx,xs__4624__auto__,temp__4126__auto__))
;
var fs__16895__auto__ = cljs.core.seq.call(null,iterys__16894__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__16895__auto__){
return cljs.core.concat.call(null,fs__16895__auto__,cljs_intro$data$produce_oriented_segments_soup_$_iter__22830.call(null,cljs.core.rest.call(null,s__22831__$1)));
} else {
var G__22837 = cljs.core.rest.call(null,s__22831__$1);
s__22831__$1 = G__22837;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16898__auto__.call(null,cljs.core.range.call(null,(6)));
})());
});
cljs_intro.data.produce_square_soup = (function cljs_intro$data$produce_square_soup(){
var G__22839 = arguments.length;
switch (G__22839) {
case 0:
return cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$0();

break;
case 5:
return cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_intro.data.produce_square_soup.call(null,(6),(3),(50),(40),(50));
});

cljs_intro.data.produce_square_soup.cljs$core$IFn$_invoke$arity$5 = (function (rx,ry,hc,ox,oy){
var c = (hc * (2));
return cljs_intro.data.add_frame.call(null,(function (){var iter__16898__auto__ = ((function (c){
return (function cljs_intro$data$iter__22840(s__22841){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__22841__$1 = s__22841;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22841__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var sx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__16894__auto__ = ((function (s__22841__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function cljs_intro$data$iter__22840_$_iter__22842(s__22843){
return (new cljs.core.LazySeq(null,((function (s__22841__$1,sx,xs__4624__auto__,temp__4126__auto__,c){
return (function (){
var s__22843__$1 = s__22843;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22843__$1);
if(temp__4126__auto____$1){
var s__22843__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22843__$2)){
var c__16896__auto__ = cljs.core.chunk_first.call(null,s__22843__$2);
var size__16897__auto__ = cljs.core.count.call(null,c__16896__auto__);
var b__22845 = cljs.core.chunk_buffer.call(null,size__16897__auto__);
if((function (){var i__22844 = (0);
while(true){
if((i__22844 < size__16897__auto__)){
var sy = cljs.core._nth.call(null,c__16896__auto__,i__22844);
cljs.core.chunk_append.call(null,b__22845,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})());

var G__22847 = (i__22844 + (1));
i__22844 = G__22847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22845),cljs_intro$data$iter__22840_$_iter__22842.call(null,cljs.core.chunk_rest.call(null,s__22843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22845),null);
}
} else {
var sy = cljs.core.first.call(null,s__22843__$2);
return cljs.core.cons.call(null,(function (){var x = ((sx * c) + ox);
var y = ((sy * c) + oy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + hc),y,(x + hc),(y + hc),x,(y + hc)], null),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.even_QMARK_.call(null,(sx + sy))], null);
})(),cljs_intro$data$iter__22840_$_iter__22842.call(null,cljs.core.rest.call(null,s__22843__$2)));
}
} else {
return null;
}
break;
}
});})(s__22841__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
,null,null));
});})(s__22841__$1,sx,xs__4624__auto__,temp__4126__auto__,c))
;
var fs__16895__auto__ = cljs.core.seq.call(null,iterys__16894__auto__.call(null,cljs.core.range.call(null,ry)));
if(fs__16895__auto__){
return cljs.core.concat.call(null,fs__16895__auto__,cljs_intro$data$iter__22840.call(null,cljs.core.rest.call(null,s__22841__$1)));
} else {
var G__22848 = cljs.core.rest.call(null,s__22841__$1);
s__22841__$1 = G__22848;
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
return iter__16898__auto__.call(null,cljs.core.range.call(null,rx));
})());
});

cljs_intro.data.produce_square_soup.cljs$lang$maxFixedArity = 5;
cljs_intro.data.produce_space_partition_soup = (function cljs_intro$data$produce_space_partition_soup(){
var G__22850 = arguments.length;
switch (G__22850) {
case 4:
return cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return cljs_intro.data.produce_space_partition_soup.call(null,x,y,w,h,0.1,(3));
});

cljs_intro.data.produce_space_partition_soup.cljs$core$IFn$_invoke$arity$6 = (function (x,y,w,h,p,d){
if(((d > (0))) && ((Math.random.call(null) > p))){
var o = ((4) * d);
var hw = (w / (2));
var hh = (h / (2));
var ihw = ((w - ((2) * o)) / (2));
var ihh = ((h - ((2) * o)) / (2));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs_intro.data.produce_space_partition_soup.call(null,(x + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro.data.produce_space_partition_soup.call(null,((x + hw) + o),(y + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro.data.produce_space_partition_soup.call(null,((x + hw) + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1))),cljs_intro.data.produce_space_partition_soup.call(null,(x + o),((y + hh) + o),ihw,ihh,(p * (2)),(d - (1)))));
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

cljs_intro.data.produce_space_partition_soup.cljs$lang$maxFixedArity = 6;
cljs_intro.data.produce_block_soup = (function cljs_intro$data$produce_block_soup(){
return cljs_intro.data.add_frame.call(null,cljs_intro.data.produce_space_partition_soup.call(null,(10),(10),(620),(320)));
});
cljs_intro.data.produce_polygon = (function cljs_intro$data$produce_polygon(x,y,r,c,offset,closed){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((Math.cos.call(null,(a + offset)) * r) + x),((Math.sin.call(null,(a + offset)) * r) + y)], null);
}),cljs.core.range.call(null,(0),((2) * Math.PI),((Math.PI * (2)) / c)))),new cljs.core.Keyword(null,"closed","closed",-919675359),closed], null)], null);
});
cljs_intro.data.produce_nested_polygons = (function cljs_intro$data$produce_nested_polygons(x,y,r,c){
return cljs.core.mapcat.call(null,(function (rr){
return cljs_intro.data.produce_polygon.call(null,x,y,rr,((5) + (Math.random.call(null) * (5))),(Math.random.call(null) * Math.PI),false);
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
var d = ((Math.random.call(null) * coefd) * l);
var t = ((Math.random.call(null) * coeft) * (l - d));
var roffset = (Math.PI * Math.random.call(null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapcat.call(null,((function (l,d,t,roffset,twopi,spir,segs,step,dr,coefd,coeft){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((Math.cos.call(null,((i * step) + roffset)) * dr) * i) + x),(((Math.sin.call(null,((i * step) + roffset)) * dr) * i) + y)], null);
});})(l,d,t,roffset,twopi,spir,segs,step,dr,coefd,coeft))
,cljs.core.take.call(null,t,cljs.core.drop.call(null,d,rng))),new cljs.core.Keyword(null,"close","close",1835149582),false], null);
});})(twopi,spir,segs,step,dr,coefd,coeft))
,cljs.core.partition.call(null,(10),cljs.core.range.call(null,(0),segs)));
});

//# sourceMappingURL=data.js.map