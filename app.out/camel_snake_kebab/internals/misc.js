// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8401 = arguments.length;
var i__4731__auto___8402 = (0);
while(true){
if((i__4731__auto___8402 < len__4730__auto___8401)){
args__4736__auto__.push((arguments[i__4731__auto___8402]));

var G__8403 = (i__4731__auto___8402 + (1));
i__4731__auto___8402 = G__8403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__8395){
var map__8396 = p__8395;
var map__8396__$1 = (((((!((map__8396 == null))))?(((((map__8396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8396):map__8396);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8396__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__8398 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__8399 = cljs.core.seq(vec__8398);
var first__8400 = cljs.core.first(seq__8399);
var seq__8399__$1 = cljs.core.next(seq__8399);
var first = first__8400;
var rest = seq__8399__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq8390){
var G__8391 = cljs.core.first(seq8390);
var seq8390__$1 = cljs.core.next(seq8390);
var G__8392 = cljs.core.first(seq8390__$1);
var seq8390__$2 = cljs.core.next(seq8390__$1);
var G__8393 = cljs.core.first(seq8390__$2);
var seq8390__$3 = cljs.core.next(seq8390__$2);
var G__8394 = cljs.core.first(seq8390__$3);
var seq8390__$4 = cljs.core.next(seq8390__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8391,G__8392,G__8393,G__8394,seq8390__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4131__auto__ = (function (){var G__8405 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__8405) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__8405));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.capitalize(s);
}
});
