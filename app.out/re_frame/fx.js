// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7894 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7895 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7895;

try{try{var seq__7896 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__7897 = null;
var count__7898 = (0);
var i__7899 = (0);
while(true){
if((i__7899 < count__7898)){
var vec__7906 = chunk__7897.cljs$core$IIndexed$_nth$arity$2(null,i__7899);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7906,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7906,(1),null);
var temp__5718__auto___7928 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___7928)){
var effect_fn_7929 = temp__5718__auto___7928;
(effect_fn_7929.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7929.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7929.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__7930 = seq__7896;
var G__7931 = chunk__7897;
var G__7932 = count__7898;
var G__7933 = (i__7899 + (1));
seq__7896 = G__7930;
chunk__7897 = G__7931;
count__7898 = G__7932;
i__7899 = G__7933;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7896);
if(temp__5720__auto__){
var seq__7896__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7896__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7896__$1);
var G__7934 = cljs.core.chunk_rest(seq__7896__$1);
var G__7935 = c__4550__auto__;
var G__7936 = cljs.core.count(c__4550__auto__);
var G__7937 = (0);
seq__7896 = G__7934;
chunk__7897 = G__7935;
count__7898 = G__7936;
i__7899 = G__7937;
continue;
} else {
var vec__7909 = cljs.core.first(seq__7896__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7909,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7909,(1),null);
var temp__5718__auto___7938 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___7938)){
var effect_fn_7939 = temp__5718__auto___7938;
(effect_fn_7939.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7939.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7939.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__7940 = cljs.core.next(seq__7896__$1);
var G__7941 = null;
var G__7942 = (0);
var G__7943 = (0);
seq__7896 = G__7940;
chunk__7897 = G__7941;
count__7898 = G__7942;
i__7899 = G__7943;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7265__auto___7944 = re_frame.interop.now();
var duration__7266__auto___7945 = (end__7265__auto___7944 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7266__auto___7945,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__7265__auto___7944);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7894;
}} else {
var seq__7912 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__7913 = null;
var count__7914 = (0);
var i__7915 = (0);
while(true){
if((i__7915 < count__7914)){
var vec__7922 = chunk__7913.cljs$core$IIndexed$_nth$arity$2(null,i__7915);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7922,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7922,(1),null);
var temp__5718__auto___7946 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___7946)){
var effect_fn_7947 = temp__5718__auto___7946;
(effect_fn_7947.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7947.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7947.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__7948 = seq__7912;
var G__7949 = chunk__7913;
var G__7950 = count__7914;
var G__7951 = (i__7915 + (1));
seq__7912 = G__7948;
chunk__7913 = G__7949;
count__7914 = G__7950;
i__7915 = G__7951;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7912);
if(temp__5720__auto__){
var seq__7912__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7912__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7912__$1);
var G__7952 = cljs.core.chunk_rest(seq__7912__$1);
var G__7953 = c__4550__auto__;
var G__7954 = cljs.core.count(c__4550__auto__);
var G__7955 = (0);
seq__7912 = G__7952;
chunk__7913 = G__7953;
count__7914 = G__7954;
i__7915 = G__7955;
continue;
} else {
var vec__7925 = cljs.core.first(seq__7912__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7925,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7925,(1),null);
var temp__5718__auto___7956 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___7956)){
var effect_fn_7957 = temp__5718__auto___7956;
(effect_fn_7957.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7957.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7957.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__7958 = cljs.core.next(seq__7912__$1);
var G__7959 = null;
var G__7960 = (0);
var G__7961 = (0);
seq__7912 = G__7958;
chunk__7913 = G__7959;
count__7914 = G__7960;
i__7915 = G__7961;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__7962 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7963 = null;
var count__7964 = (0);
var i__7965 = (0);
while(true){
if((i__7965 < count__7964)){
var map__7970 = chunk__7963.cljs$core$IIndexed$_nth$arity$2(null,i__7965);
var map__7970__$1 = (((((!((map__7970 == null))))?(((((map__7970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7970):map__7970);
var effect = map__7970__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7970__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7970__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__7962,chunk__7963,count__7964,i__7965,map__7970,map__7970__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__7962,chunk__7963,count__7964,i__7965,map__7970,map__7970__$1,effect,ms,dispatch))
,ms);
}


var G__7974 = seq__7962;
var G__7975 = chunk__7963;
var G__7976 = count__7964;
var G__7977 = (i__7965 + (1));
seq__7962 = G__7974;
chunk__7963 = G__7975;
count__7964 = G__7976;
i__7965 = G__7977;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7962);
if(temp__5720__auto__){
var seq__7962__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7962__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7962__$1);
var G__7978 = cljs.core.chunk_rest(seq__7962__$1);
var G__7979 = c__4550__auto__;
var G__7980 = cljs.core.count(c__4550__auto__);
var G__7981 = (0);
seq__7962 = G__7978;
chunk__7963 = G__7979;
count__7964 = G__7980;
i__7965 = G__7981;
continue;
} else {
var map__7972 = cljs.core.first(seq__7962__$1);
var map__7972__$1 = (((((!((map__7972 == null))))?(((((map__7972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7972):map__7972);
var effect = map__7972__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7972__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7972__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__7962,chunk__7963,count__7964,i__7965,map__7972,map__7972__$1,effect,ms,dispatch,seq__7962__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__7962,chunk__7963,count__7964,i__7965,map__7972,map__7972__$1,effect,ms,dispatch,seq__7962__$1,temp__5720__auto__))
,ms);
}


var G__7982 = cljs.core.next(seq__7962__$1);
var G__7983 = null;
var G__7984 = (0);
var G__7985 = (0);
seq__7962 = G__7982;
chunk__7963 = G__7983;
count__7964 = G__7984;
i__7965 = G__7985;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__7986 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7987 = null;
var count__7988 = (0);
var i__7989 = (0);
while(true){
if((i__7989 < count__7988)){
var event = chunk__7987.cljs$core$IIndexed$_nth$arity$2(null,i__7989);
re_frame.router.dispatch(event);


var G__7990 = seq__7986;
var G__7991 = chunk__7987;
var G__7992 = count__7988;
var G__7993 = (i__7989 + (1));
seq__7986 = G__7990;
chunk__7987 = G__7991;
count__7988 = G__7992;
i__7989 = G__7993;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7986);
if(temp__5720__auto__){
var seq__7986__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7986__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7986__$1);
var G__7994 = cljs.core.chunk_rest(seq__7986__$1);
var G__7995 = c__4550__auto__;
var G__7996 = cljs.core.count(c__4550__auto__);
var G__7997 = (0);
seq__7986 = G__7994;
chunk__7987 = G__7995;
count__7988 = G__7996;
i__7989 = G__7997;
continue;
} else {
var event = cljs.core.first(seq__7986__$1);
re_frame.router.dispatch(event);


var G__7998 = cljs.core.next(seq__7986__$1);
var G__7999 = null;
var G__8000 = (0);
var G__8001 = (0);
seq__7986 = G__7998;
chunk__7987 = G__7999;
count__7988 = G__8000;
i__7989 = G__8001;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__8002 = cljs.core.seq(value);
var chunk__8003 = null;
var count__8004 = (0);
var i__8005 = (0);
while(true){
if((i__8005 < count__8004)){
var event = chunk__8003.cljs$core$IIndexed$_nth$arity$2(null,i__8005);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__8006 = seq__8002;
var G__8007 = chunk__8003;
var G__8008 = count__8004;
var G__8009 = (i__8005 + (1));
seq__8002 = G__8006;
chunk__8003 = G__8007;
count__8004 = G__8008;
i__8005 = G__8009;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8002);
if(temp__5720__auto__){
var seq__8002__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8002__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__8002__$1);
var G__8010 = cljs.core.chunk_rest(seq__8002__$1);
var G__8011 = c__4550__auto__;
var G__8012 = cljs.core.count(c__4550__auto__);
var G__8013 = (0);
seq__8002 = G__8010;
chunk__8003 = G__8011;
count__8004 = G__8012;
i__8005 = G__8013;
continue;
} else {
var event = cljs.core.first(seq__8002__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__8014 = cljs.core.next(seq__8002__$1);
var G__8015 = null;
var G__8016 = (0);
var G__8017 = (0);
seq__8002 = G__8014;
chunk__8003 = G__8015;
count__8004 = G__8016;
i__8005 = G__8017;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
