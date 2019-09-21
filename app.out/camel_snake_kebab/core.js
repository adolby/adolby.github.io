// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8602 = arguments.length;
var i__4731__auto___8603 = (0);
while(true){
if((i__4731__auto___8603 < len__4730__auto___8602)){
args__4736__auto__.push((arguments[i__4731__auto___8603]));

var G__8604 = (i__4731__auto___8603 + (1));
i__4731__auto___8603 = G__8604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq8597){
var G__8598 = cljs.core.first(seq8597);
var seq8597__$1 = cljs.core.next(seq8597);
var G__8599 = cljs.core.first(seq8597__$1);
var seq8597__$2 = cljs.core.next(seq8597__$1);
var G__8600 = cljs.core.first(seq8597__$2);
var seq8597__$3 = cljs.core.next(seq8597__$2);
var G__8601 = cljs.core.first(seq8597__$3);
var seq8597__$4 = cljs.core.next(seq8597__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8598,G__8599,G__8600,G__8601,seq8597__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8613 = arguments.length;
var i__4731__auto___8614 = (0);
while(true){
if((i__4731__auto___8614 < len__4730__auto___8613)){
args__4736__auto__.push((arguments[i__4731__auto___8614]));

var G__8615 = (i__4731__auto___8614 + (1));
i__4731__auto___8614 = G__8615;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__8560__auto__,rest__8561__auto__){
var convert_case__8562__auto__ = (function (p1__8559__8563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__8559__8563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__8560__auto__,convert_case__8562__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq8605){
var G__8606 = cljs.core.first(seq8605);
var seq8605__$1 = cljs.core.next(seq8605);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8606,seq8605__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8616 = arguments.length;
var i__4731__auto___8617 = (0);
while(true){
if((i__4731__auto___8617 < len__4730__auto___8616)){
args__4736__auto__.push((arguments[i__4731__auto___8617]));

var G__8618 = (i__4731__auto___8617 + (1));
i__4731__auto___8617 = G__8618;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq8607){
var G__8608 = cljs.core.first(seq8607);
var seq8607__$1 = cljs.core.next(seq8607);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8608,seq8607__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8619 = arguments.length;
var i__4731__auto___8620 = (0);
while(true){
if((i__4731__auto___8620 < len__4730__auto___8619)){
args__4736__auto__.push((arguments[i__4731__auto___8620]));

var G__8621 = (i__4731__auto___8620 + (1));
i__4731__auto___8620 = G__8621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq8609){
var G__8610 = cljs.core.first(seq8609);
var seq8609__$1 = cljs.core.next(seq8609);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8610,seq8609__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8622 = arguments.length;
var i__4731__auto___8623 = (0);
while(true){
if((i__4731__auto___8623 < len__4730__auto___8622)){
args__4736__auto__.push((arguments[i__4731__auto___8623]));

var G__8624 = (i__4731__auto___8623 + (1));
i__4731__auto___8623 = G__8624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq8611){
var G__8612 = cljs.core.first(seq8611);
var seq8611__$1 = cljs.core.next(seq8611);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8612,seq8611__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8633 = arguments.length;
var i__4731__auto___8634 = (0);
while(true){
if((i__4731__auto___8634 < len__4730__auto___8633)){
args__4736__auto__.push((arguments[i__4731__auto___8634]));

var G__8635 = (i__4731__auto___8634 + (1));
i__4731__auto___8634 = G__8635;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__8560__auto__,rest__8561__auto__){
var convert_case__8562__auto__ = (function (p1__8559__8563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__8559__8563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__8560__auto__,convert_case__8562__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq8625){
var G__8626 = cljs.core.first(seq8625);
var seq8625__$1 = cljs.core.next(seq8625);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8626,seq8625__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8636 = arguments.length;
var i__4731__auto___8637 = (0);
while(true){
if((i__4731__auto___8637 < len__4730__auto___8636)){
args__4736__auto__.push((arguments[i__4731__auto___8637]));

var G__8638 = (i__4731__auto___8637 + (1));
i__4731__auto___8637 = G__8638;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq8627){
var G__8628 = cljs.core.first(seq8627);
var seq8627__$1 = cljs.core.next(seq8627);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8628,seq8627__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8639 = arguments.length;
var i__4731__auto___8640 = (0);
while(true){
if((i__4731__auto___8640 < len__4730__auto___8639)){
args__4736__auto__.push((arguments[i__4731__auto___8640]));

var G__8641 = (i__4731__auto___8640 + (1));
i__4731__auto___8640 = G__8641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq8629){
var G__8630 = cljs.core.first(seq8629);
var seq8629__$1 = cljs.core.next(seq8629);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8630,seq8629__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8642 = arguments.length;
var i__4731__auto___8643 = (0);
while(true){
if((i__4731__auto___8643 < len__4730__auto___8642)){
args__4736__auto__.push((arguments[i__4731__auto___8643]));

var G__8644 = (i__4731__auto___8643 + (1));
i__4731__auto___8643 = G__8644;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq8631){
var G__8632 = cljs.core.first(seq8631);
var seq8631__$1 = cljs.core.next(seq8631);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8632,seq8631__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8653 = arguments.length;
var i__4731__auto___8654 = (0);
while(true){
if((i__4731__auto___8654 < len__4730__auto___8653)){
args__4736__auto__.push((arguments[i__4731__auto___8654]));

var G__8655 = (i__4731__auto___8654 + (1));
i__4731__auto___8654 = G__8655;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__8560__auto__,rest__8561__auto__){
var convert_case__8562__auto__ = (function (p1__8559__8563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__8559__8563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__8560__auto__,convert_case__8562__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq8645){
var G__8646 = cljs.core.first(seq8645);
var seq8645__$1 = cljs.core.next(seq8645);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8646,seq8645__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8656 = arguments.length;
var i__4731__auto___8657 = (0);
while(true){
if((i__4731__auto___8657 < len__4730__auto___8656)){
args__4736__auto__.push((arguments[i__4731__auto___8657]));

var G__8658 = (i__4731__auto___8657 + (1));
i__4731__auto___8657 = G__8658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq8647){
var G__8648 = cljs.core.first(seq8647);
var seq8647__$1 = cljs.core.next(seq8647);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8648,seq8647__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8659 = arguments.length;
var i__4731__auto___8660 = (0);
while(true){
if((i__4731__auto___8660 < len__4730__auto___8659)){
args__4736__auto__.push((arguments[i__4731__auto___8660]));

var G__8661 = (i__4731__auto___8660 + (1));
i__4731__auto___8660 = G__8661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq8649){
var G__8650 = cljs.core.first(seq8649);
var seq8649__$1 = cljs.core.next(seq8649);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8650,seq8649__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8662 = arguments.length;
var i__4731__auto___8663 = (0);
while(true){
if((i__4731__auto___8663 < len__4730__auto___8662)){
args__4736__auto__.push((arguments[i__4731__auto___8663]));

var G__8664 = (i__4731__auto___8663 + (1));
i__4731__auto___8663 = G__8664;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq8651){
var G__8652 = cljs.core.first(seq8651);
var seq8651__$1 = cljs.core.next(seq8651);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8652,seq8651__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8673 = arguments.length;
var i__4731__auto___8674 = (0);
while(true){
if((i__4731__auto___8674 < len__4730__auto___8673)){
args__4736__auto__.push((arguments[i__4731__auto___8674]));

var G__8675 = (i__4731__auto___8674 + (1));
i__4731__auto___8674 = G__8675;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__8560__auto__,rest__8561__auto__){
var convert_case__8562__auto__ = (function (p1__8559__8563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__8559__8563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__8560__auto__,convert_case__8562__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq8665){
var G__8666 = cljs.core.first(seq8665);
var seq8665__$1 = cljs.core.next(seq8665);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8666,seq8665__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8676 = arguments.length;
var i__4731__auto___8677 = (0);
while(true){
if((i__4731__auto___8677 < len__4730__auto___8676)){
args__4736__auto__.push((arguments[i__4731__auto___8677]));

var G__8678 = (i__4731__auto___8677 + (1));
i__4731__auto___8677 = G__8678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq8667){
var G__8668 = cljs.core.first(seq8667);
var seq8667__$1 = cljs.core.next(seq8667);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8668,seq8667__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8679 = arguments.length;
var i__4731__auto___8680 = (0);
while(true){
if((i__4731__auto___8680 < len__4730__auto___8679)){
args__4736__auto__.push((arguments[i__4731__auto___8680]));

var G__8681 = (i__4731__auto___8680 + (1));
i__4731__auto___8680 = G__8681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq8669){
var G__8670 = cljs.core.first(seq8669);
var seq8669__$1 = cljs.core.next(seq8669);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8670,seq8669__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8682 = arguments.length;
var i__4731__auto___8683 = (0);
while(true){
if((i__4731__auto___8683 < len__4730__auto___8682)){
args__4736__auto__.push((arguments[i__4731__auto___8683]));

var G__8684 = (i__4731__auto___8683 + (1));
i__4731__auto___8683 = G__8684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq8671){
var G__8672 = cljs.core.first(seq8671);
var seq8671__$1 = cljs.core.next(seq8671);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8672,seq8671__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8693 = arguments.length;
var i__4731__auto___8694 = (0);
while(true){
if((i__4731__auto___8694 < len__4730__auto___8693)){
args__4736__auto__.push((arguments[i__4731__auto___8694]));

var G__8695 = (i__4731__auto___8694 + (1));
i__4731__auto___8694 = G__8695;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__8560__auto__,rest__8561__auto__){
var convert_case__8562__auto__ = (function (p1__8559__8563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__8559__8563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__8560__auto__,convert_case__8562__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq8685){
var G__8686 = cljs.core.first(seq8685);
var seq8685__$1 = cljs.core.next(seq8685);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8686,seq8685__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8696 = arguments.length;
var i__4731__auto___8697 = (0);
while(true){
if((i__4731__auto___8697 < len__4730__auto___8696)){
args__4736__auto__.push((arguments[i__4731__auto___8697]));

var G__8698 = (i__4731__auto___8697 + (1));
i__4731__auto___8697 = G__8698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq8687){
var G__8688 = cljs.core.first(seq8687);
var seq8687__$1 = cljs.core.next(seq8687);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8688,seq8687__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8699 = arguments.length;
var i__4731__auto___8700 = (0);
while(true){
if((i__4731__auto___8700 < len__4730__auto___8699)){
args__4736__auto__.push((arguments[i__4731__auto___8700]));

var G__8701 = (i__4731__auto___8700 + (1));
i__4731__auto___8700 = G__8701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq8689){
var G__8690 = cljs.core.first(seq8689);
var seq8689__$1 = cljs.core.next(seq8689);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8690,seq8689__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8702 = arguments.length;
var i__4731__auto___8703 = (0);
while(true){
if((i__4731__auto___8703 < len__4730__auto___8702)){
args__4736__auto__.push((arguments[i__4731__auto___8703]));

var G__8704 = (i__4731__auto___8703 + (1));
i__4731__auto___8703 = G__8704;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq8691){
var G__8692 = cljs.core.first(seq8691);
var seq8691__$1 = cljs.core.next(seq8691);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8692,seq8691__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8713 = arguments.length;
var i__4731__auto___8714 = (0);
while(true){
if((i__4731__auto___8714 < len__4730__auto___8713)){
args__4736__auto__.push((arguments[i__4731__auto___8714]));

var G__8715 = (i__4731__auto___8714 + (1));
i__4731__auto___8714 = G__8715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__8560__auto__,rest__8561__auto__){
var convert_case__8562__auto__ = (function (p1__8559__8563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__8559__8563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__8560__auto__,convert_case__8562__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq8705){
var G__8706 = cljs.core.first(seq8705);
var seq8705__$1 = cljs.core.next(seq8705);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8706,seq8705__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8716 = arguments.length;
var i__4731__auto___8717 = (0);
while(true){
if((i__4731__auto___8717 < len__4730__auto___8716)){
args__4736__auto__.push((arguments[i__4731__auto___8717]));

var G__8718 = (i__4731__auto___8717 + (1));
i__4731__auto___8717 = G__8718;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq8707){
var G__8708 = cljs.core.first(seq8707);
var seq8707__$1 = cljs.core.next(seq8707);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8708,seq8707__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8719 = arguments.length;
var i__4731__auto___8720 = (0);
while(true){
if((i__4731__auto___8720 < len__4730__auto___8719)){
args__4736__auto__.push((arguments[i__4731__auto___8720]));

var G__8721 = (i__4731__auto___8720 + (1));
i__4731__auto___8720 = G__8721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq8709){
var G__8710 = cljs.core.first(seq8709);
var seq8709__$1 = cljs.core.next(seq8709);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8710,seq8709__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8722 = arguments.length;
var i__4731__auto___8723 = (0);
while(true){
if((i__4731__auto___8723 < len__4730__auto___8722)){
args__4736__auto__.push((arguments[i__4731__auto___8723]));

var G__8724 = (i__4731__auto___8723 + (1));
i__4731__auto___8723 = G__8724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq8711){
var G__8712 = cljs.core.first(seq8711);
var seq8711__$1 = cljs.core.next(seq8711);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8712,seq8711__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8733 = arguments.length;
var i__4731__auto___8734 = (0);
while(true){
if((i__4731__auto___8734 < len__4730__auto___8733)){
args__4736__auto__.push((arguments[i__4731__auto___8734]));

var G__8735 = (i__4731__auto___8734 + (1));
i__4731__auto___8734 = G__8735;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__8560__auto__,rest__8561__auto__){
var convert_case__8562__auto__ = (function (p1__8559__8563__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__8559__8563__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8561__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__8560__auto__,convert_case__8562__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq8725){
var G__8726 = cljs.core.first(seq8725);
var seq8725__$1 = cljs.core.next(seq8725);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8726,seq8725__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8736 = arguments.length;
var i__4731__auto___8737 = (0);
while(true){
if((i__4731__auto___8737 < len__4730__auto___8736)){
args__4736__auto__.push((arguments[i__4731__auto___8737]));

var G__8738 = (i__4731__auto___8737 + (1));
i__4731__auto___8737 = G__8738;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq8727){
var G__8728 = cljs.core.first(seq8727);
var seq8727__$1 = cljs.core.next(seq8727);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8728,seq8727__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8739 = arguments.length;
var i__4731__auto___8740 = (0);
while(true){
if((i__4731__auto___8740 < len__4730__auto___8739)){
args__4736__auto__.push((arguments[i__4731__auto___8740]));

var G__8741 = (i__4731__auto___8740 + (1));
i__4731__auto___8740 = G__8741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq8729){
var G__8730 = cljs.core.first(seq8729);
var seq8729__$1 = cljs.core.next(seq8729);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8730,seq8729__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8742 = arguments.length;
var i__4731__auto___8743 = (0);
while(true){
if((i__4731__auto___8743 < len__4730__auto___8742)){
args__4736__auto__.push((arguments[i__4731__auto___8743]));

var G__8744 = (i__4731__auto___8743 + (1));
i__4731__auto___8743 = G__8744;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__8565__auto__,rest__8566__auto__){
if((!((s__8565__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__8565__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__8565__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__8566__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq8731){
var G__8732 = cljs.core.first(seq8731);
var seq8731__$1 = cljs.core.next(seq8731);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8732,seq8731__$1);
});

