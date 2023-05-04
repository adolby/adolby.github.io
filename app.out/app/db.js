// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.spec.alpha');
goog.require('taoensso.timbre');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$app$db_SLASH_theme,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$app$db_SLASH_db,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$db_SLASH_theme,cljs.core.cst$kw$app$db_SLASH_downloads], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$db_SLASH_theme,cljs.core.cst$kw$app$db_SLASH_downloads], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15528){
return cljs.core.map_QMARK_(G__15528);
}),(function (G__15528){
return cljs.core.contains_QMARK_(G__15528,cljs.core.cst$kw$theme);
}),(function (G__15528){
return cljs.core.contains_QMARK_(G__15528,cljs.core.cst$kw$downloads);
})], null),(function (G__15528){
return ((cljs.core.map_QMARK_(G__15528)) && (cljs.core.contains_QMARK_(G__15528,cljs.core.cst$kw$theme)) && (cljs.core.contains_QMARK_(G__15528,cljs.core.cst$kw$downloads)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$db_SLASH_theme,cljs.core.cst$kw$app$db_SLASH_downloads], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$theme,cljs.core.cst$kw$downloads], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$theme)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$downloads))], null),null])));
app.db.default_value = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$theme,"default",cljs.core.cst$kw$downloads,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Read in last theme from LocalStorage, and process into a map that can be
 * merged into app-db
 */
app.db.local_store__GT_theme = (function app$db$local_store__GT_theme(){
var theme = localStorage.getItem("theme");
if(clojure.string.blank_QMARK_(theme)){
return "default";
} else {
return theme;
}
});
/**
 * Put current theme into LocalStorage
 */
app.db.theme__GT_local_store = (function app$db$theme__GT_local_store(theme){
return localStorage.setItem("theme",theme);
});
