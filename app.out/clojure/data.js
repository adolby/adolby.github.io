// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__8025){
var vec__8026 = p__8025;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8026,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__8029 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8029,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8029,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8029,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__8033 = arguments.length;
switch (G__8033) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__8035_8059 = clojure.data.equality_partition;
var G__8036_8060 = "null";
var G__8037_8061 = ((function (G__8035_8059,G__8036_8060){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8035_8059,G__8036_8060))
;
goog.object.set(G__8035_8059,G__8036_8060,G__8037_8061);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__8038_8062 = clojure.data.equality_partition;
var G__8039_8063 = "string";
var G__8040_8064 = ((function (G__8038_8062,G__8039_8063){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8038_8062,G__8039_8063))
;
goog.object.set(G__8038_8062,G__8039_8063,G__8040_8064);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__8041_8065 = clojure.data.equality_partition;
var G__8042_8066 = "number";
var G__8043_8067 = ((function (G__8041_8065,G__8042_8066){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8041_8065,G__8042_8066))
;
goog.object.set(G__8041_8065,G__8042_8066,G__8043_8067);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__8044_8068 = clojure.data.equality_partition;
var G__8045_8069 = "array";
var G__8046_8070 = ((function (G__8044_8068,G__8045_8069){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__8044_8068,G__8045_8069))
;
goog.object.set(G__8044_8068,G__8045_8069,G__8046_8070);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__8047_8071 = clojure.data.equality_partition;
var G__8048_8072 = "function";
var G__8049_8073 = ((function (G__8047_8071,G__8048_8072){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8047_8071,G__8048_8072))
;
goog.object.set(G__8047_8071,G__8048_8072,G__8049_8073);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__8050_8074 = clojure.data.equality_partition;
var G__8051_8075 = "boolean";
var G__8052_8076 = ((function (G__8050_8074,G__8051_8075){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8050_8074,G__8051_8075))
;
goog.object.set(G__8050_8074,G__8051_8075,G__8052_8076);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__8053_8077 = clojure.data.equality_partition;
var G__8054_8078 = "_";
var G__8055_8079 = ((function (G__8053_8077,G__8054_8078){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__8053_8077,G__8054_8078))
;
goog.object.set(G__8053_8077,G__8054_8078,G__8055_8079);
goog.object.set(clojure.data.Diff,"null",true);

var G__8080_8104 = clojure.data.diff_similar;
var G__8081_8105 = "null";
var G__8082_8106 = ((function (G__8080_8104,G__8081_8105){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8080_8104,G__8081_8105))
;
goog.object.set(G__8080_8104,G__8081_8105,G__8082_8106);

goog.object.set(clojure.data.Diff,"string",true);

var G__8083_8107 = clojure.data.diff_similar;
var G__8084_8108 = "string";
var G__8085_8109 = ((function (G__8083_8107,G__8084_8108){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8083_8107,G__8084_8108))
;
goog.object.set(G__8083_8107,G__8084_8108,G__8085_8109);

goog.object.set(clojure.data.Diff,"number",true);

var G__8086_8110 = clojure.data.diff_similar;
var G__8087_8111 = "number";
var G__8088_8112 = ((function (G__8086_8110,G__8087_8111){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8086_8110,G__8087_8111))
;
goog.object.set(G__8086_8110,G__8087_8111,G__8088_8112);

goog.object.set(clojure.data.Diff,"array",true);

var G__8089_8113 = clojure.data.diff_similar;
var G__8090_8114 = "array";
var G__8091_8115 = ((function (G__8089_8113,G__8090_8114){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__8089_8113,G__8090_8114))
;
goog.object.set(G__8089_8113,G__8090_8114,G__8091_8115);

goog.object.set(clojure.data.Diff,"function",true);

var G__8092_8116 = clojure.data.diff_similar;
var G__8093_8117 = "function";
var G__8094_8118 = ((function (G__8092_8116,G__8093_8117){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8092_8116,G__8093_8117))
;
goog.object.set(G__8092_8116,G__8093_8117,G__8094_8118);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__8095_8119 = clojure.data.diff_similar;
var G__8096_8120 = "boolean";
var G__8097_8121 = ((function (G__8095_8119,G__8096_8120){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8095_8119,G__8096_8120))
;
goog.object.set(G__8095_8119,G__8096_8120,G__8097_8121);

goog.object.set(clojure.data.Diff,"_",true);

var G__8098_8122 = clojure.data.diff_similar;
var G__8099_8123 = "_";
var G__8100_8124 = ((function (G__8098_8122,G__8099_8123){
return (function (a,b){
var fexpr__8102 = (function (){var G__8103 = clojure.data.equality_partition(a);
var G__8103__$1 = (((G__8103 instanceof cljs.core.Keyword))?G__8103.fqn:null);
switch (G__8103__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8103__$1)].join('')));

}
})();
return (fexpr__8102.cljs$core$IFn$_invoke$arity$2 ? fexpr__8102.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__8102.call(null,a,b));
});})(G__8098_8122,G__8099_8123))
;
goog.object.set(G__8098_8122,G__8099_8123,G__8100_8124);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
