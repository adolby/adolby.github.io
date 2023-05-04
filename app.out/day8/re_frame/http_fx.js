// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__15535){
var vec__15536 = p__15535;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15536,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15536,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__15539 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__15539);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__15542){
var map__15543 = p__15542;
var map__15543__$1 = (((((!((map__15543 == null))))?(((((map__15543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15543):map__15543);
var request = map__15543__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15543__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15543__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__15543,map__15543__$1,request,on_success,on_failure){
return (function (p1__15540_SHARP_){
var G__15545 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__15540_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15545) : re_frame.core.dispatch.call(null,G__15545));
});})(api,map__15543,map__15543__$1,request,on_success,on_failure))
,((function (api,map__15543,map__15543__$1,request,on_success,on_failure){
return (function (p1__15541_SHARP_){
var G__15546 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__15541_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15546) : re_frame.core.dispatch.call(null,G__15546));
});})(api,map__15543,map__15543__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__15547 = cljs.core.seq(seq_request_maps);
var chunk__15548 = null;
var count__15549 = (0);
var i__15550 = (0);
while(true){
if((i__15550 < count__15549)){
var request__$1 = chunk__15548.cljs$core$IIndexed$_nth$arity$2(null,i__15550);
var G__15553_15555 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__15553_15555) : ajax.core.ajax_request.call(null,G__15553_15555));


var G__15556 = seq__15547;
var G__15557 = chunk__15548;
var G__15558 = count__15549;
var G__15559 = (i__15550 + (1));
seq__15547 = G__15556;
chunk__15548 = G__15557;
count__15549 = G__15558;
i__15550 = G__15559;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__15547);
if(temp__5720__auto__){
var seq__15547__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15547__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15547__$1);
var G__15560 = cljs.core.chunk_rest(seq__15547__$1);
var G__15561 = c__4550__auto__;
var G__15562 = cljs.core.count(c__4550__auto__);
var G__15563 = (0);
seq__15547 = G__15560;
chunk__15548 = G__15561;
count__15549 = G__15562;
i__15550 = G__15563;
continue;
} else {
var request__$1 = cljs.core.first(seq__15547__$1);
var G__15554_15564 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__15554_15564) : ajax.core.ajax_request.call(null,G__15554_15564));


var G__15565 = cljs.core.next(seq__15547__$1);
var G__15566 = null;
var G__15567 = (0);
var G__15568 = (0);
seq__15547 = G__15565;
chunk__15548 = G__15566;
count__15549 = G__15567;
i__15550 = G__15568;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__15569_15571 = cljs.core.cst$kw$http_DASH_xhrio;
var G__15570_15572 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15569_15571,G__15570_15572) : re_frame.core.reg_fx.call(null,G__15569_15571,G__15570_15572));
