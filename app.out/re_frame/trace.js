// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__7287){
var map__7288 = p__7287;
var map__7288__$1 = (((((!((map__7288 == null))))?(((((map__7288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7288):map__7288);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7288__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7288__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7288__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7288__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__7290_7314 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__7291_7315 = null;
var count__7292_7316 = (0);
var i__7293_7317 = (0);
while(true){
if((i__7293_7317 < count__7292_7316)){
var vec__7304_7318 = chunk__7291_7315.cljs$core$IIndexed$_nth$arity$2(null,i__7293_7317);
var k_7319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7304_7318,(0),null);
var cb_7320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7304_7318,(1),null);
try{var G__7308_7321 = cljs.core.deref(re_frame.trace.traces);
(cb_7320.cljs$core$IFn$_invoke$arity$1 ? cb_7320.cljs$core$IFn$_invoke$arity$1(G__7308_7321) : cb_7320.call(null,G__7308_7321));
}catch (e7307){var e_7322 = e7307;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_7319,"while storing",cljs.core.deref(re_frame.trace.traces),e_7322], 0));
}

var G__7323 = seq__7290_7314;
var G__7324 = chunk__7291_7315;
var G__7325 = count__7292_7316;
var G__7326 = (i__7293_7317 + (1));
seq__7290_7314 = G__7323;
chunk__7291_7315 = G__7324;
count__7292_7316 = G__7325;
i__7293_7317 = G__7326;
continue;
} else {
var temp__5720__auto___7327 = cljs.core.seq(seq__7290_7314);
if(temp__5720__auto___7327){
var seq__7290_7328__$1 = temp__5720__auto___7327;
if(cljs.core.chunked_seq_QMARK_(seq__7290_7328__$1)){
var c__4550__auto___7329 = cljs.core.chunk_first(seq__7290_7328__$1);
var G__7330 = cljs.core.chunk_rest(seq__7290_7328__$1);
var G__7331 = c__4550__auto___7329;
var G__7332 = cljs.core.count(c__4550__auto___7329);
var G__7333 = (0);
seq__7290_7314 = G__7330;
chunk__7291_7315 = G__7331;
count__7292_7316 = G__7332;
i__7293_7317 = G__7333;
continue;
} else {
var vec__7309_7334 = cljs.core.first(seq__7290_7328__$1);
var k_7335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7309_7334,(0),null);
var cb_7336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7309_7334,(1),null);
try{var G__7313_7337 = cljs.core.deref(re_frame.trace.traces);
(cb_7336.cljs$core$IFn$_invoke$arity$1 ? cb_7336.cljs$core$IFn$_invoke$arity$1(G__7313_7337) : cb_7336.call(null,G__7313_7337));
}catch (e7312){var e_7338 = e7312;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_7335,"while storing",cljs.core.deref(re_frame.trace.traces),e_7338], 0));
}

var G__7339 = cljs.core.next(seq__7290_7328__$1);
var G__7340 = null;
var G__7341 = (0);
var G__7342 = (0);
seq__7290_7314 = G__7339;
chunk__7291_7315 = G__7340;
count__7292_7316 = G__7341;
i__7293_7317 = G__7342;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
