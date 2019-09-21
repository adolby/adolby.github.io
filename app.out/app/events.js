// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('ajax.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('taoensso.timbre');
goog.require('app.db');
goog.require('app.analysis');
/**
 * Throw an exception if db doesn't match the spec
 */
app.events.check_and_throw = (function app$events$check_and_throw(a_spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("spec check failed: ",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$problems,cljs.spec.alpha.explain_str(a_spec,db)], null));
}
});
app.events.check_spec_interceptor = (function (){var G__15585 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.check_and_throw,cljs.core.cst$kw$app$db_SLASH_db);
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__15585) : re_frame.core.after.call(null,G__15585));
})();
app.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(app.db.theme__GT_local_store) : re_frame.core.after.call(null,app.db.theme__GT_local_store));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,app.events.check_spec_interceptor,(function (_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.default_value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$theme,app.db.local_store__GT_theme()], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_download_DASH_urls,(function (_,p__15586){
var vec__15587 = p__15586;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,url,cljs.core.cst$kw$timeout,(8000),cljs.core.cst$kw$response_DASH_format,(function (){var G__15590 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__15590) : ajax.core.json_response_format.call(null,G__15590));
})(),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$result_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$result_DASH_fail], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$result_DASH_success,(function (db,p__15591){
var vec__15592 = p__15591;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15592,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15592,(1),null);
var map__15595 = result;
var map__15595__$1 = (((((!((map__15595 == null))))?(((((map__15595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15595):map__15595);
var asset_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15595__$1,cljs.core.cst$kw$assets);
var download_map = (function (){var v = asset_data;
var v__$1 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,v);
return app.analysis.build_download_map(v__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$downloads,download_map);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$result_DASH_fail,(function (db,p__15597){
var vec__15598 = p__15597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15598,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15598,(1),null);
return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$update_DASH_theme,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.events.check_spec_interceptor,(function (){var G__15601 = cljs.core.cst$kw$theme;
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__15601) : re_frame.core.path.call(null,G__15601));
})(),app.events.__GT_local_store,re_frame.core.trim_v], null),(function (_,p__15602){
var vec__15603 = p__15602;
var new_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15603,(0),null);
return new_theme;
}));
