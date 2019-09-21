// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('re_frame.core');
app.views.icon_files = cljs.core.PersistentHashMap.fromArrays(["Disk Image","macOS","Android","Disk Image Archive","Portable","Windows","Linux","APK","Installer","Other"],["images/disc.svg","images/apple.svg","images/android.svg","images/disc.svg","images/archive.svg","images/windows.svg","images/linux.svg","images/archive.svg","images/monitor.svg",""]);
app.views.themes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default","green","red","blue"], null);
app.views.kryvo_download_item = (function app$views$kryvo_download_item(p__8357){
var map__8358 = p__8357;
var map__8358__$1 = (((((!((map__8358 == null))))?(((((map__8358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8358):map__8358);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8358__$1,cljs.core.cst$kw$url);
var word_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8358__$1,cljs.core.cst$kw$word_DASH_size);
var file_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8358__$1,cljs.core.cst$kw$file_DASH_type);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,url,cljs.core.cst$kw$class,"download-item link-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"align vertical button-outline",cljs.core.cst$kw$href,url,cljs.core.cst$kw$download,""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.views.icon_files,file_type),cljs.core.cst$kw$alt,["Download ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_type)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((clojure.string.blank_QMARK_(word_size))?file_type:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_type)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word_size)].join(''))], null)], null)], null);
});
app.views.kryvo_download = (function app$views$kryvo_download(category,files){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$download,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"align vertical"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$inline_DASH_heading,category], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$os_DASH_icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.views.icon_files,category),cljs.core.cst$kw$alt,category], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"align horizontal link-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.views.kryvo_download_item,files)], null)], null);
});
app.views.kryvo_downloads = (function app$views$kryvo_downloads(){
var downloads = (function (){var G__8360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$downloads], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8360) : re_frame.core.subscribe.call(null,G__8360));
})();
return ((function (downloads){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$downloads,(function (){var iter__4523__auto__ = ((function (downloads){
return (function app$views$kryvo_downloads_$_iter__8361(s__8362){
return (new cljs.core.LazySeq(null,((function (downloads){
return (function (){
var s__8362__$1 = s__8362;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8362__$1);
if(temp__5720__auto__){
var s__8362__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8362__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8362__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8364 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8363 = (0);
while(true){
if((i__8363 < size__4522__auto__)){
var vec__8365 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8363);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8365,(1),null);
cljs.core.chunk_append(b__8364,app.views.kryvo_download(k,v));

var G__8371 = (i__8363 + (1));
i__8363 = G__8371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8364),app$views$kryvo_downloads_$_iter__8361(cljs.core.chunk_rest(s__8362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8364),null);
}
} else {
var vec__8368 = cljs.core.first(s__8362__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8368,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8368,(1),null);
return cljs.core.cons(app.views.kryvo_download(k,v),app$views$kryvo_downloads_$_iter__8361(cljs.core.rest(s__8362__$2)));
}
} else {
return null;
}
break;
}
});})(downloads))
,null,null));
});})(downloads))
;
return iter__4523__auto__(cljs.core.deref(downloads));
})()], null);
});
;})(downloads))
});
app.views.theme_item = (function app$views$theme_item(theme){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$link_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,theme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,["images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme),".svg"].join(''),cljs.core.cst$kw$alt,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme)," Theme"].join(''),cljs.core.cst$kw$on_DASH_click,(function (){
var G__8372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_theme,theme], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8372) : re_frame.core.dispatch.call(null,G__8372));
})], null)], null)], null)], null);
});
app.views.theme_bar = (function app$views$theme_bar(){
var theme = (function (){var G__8373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$theme], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8373) : re_frame.core.subscribe.call(null,G__8373));
})();
return ((function (theme){
return (function (){
(document.getElementById("background")["className"] = ((clojure.string.blank_QMARK_(cljs.core.deref(theme)))?"background-image default":["background-image ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(theme))].join('')));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$link_DASH_list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.views.theme_item,app.views.themes)], null);
});
;})(theme))
});
app.views.render_kryvo_download = (function app$views$render_kryvo_download(){
var G__8374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.kryvo_downloads], null);
var G__8375 = document.getElementById("kryvo-downloads");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8374,G__8375) : reagent.core.render_component.call(null,G__8374,G__8375));
});
app.views.render_footer = (function app$views$render_footer(){
var G__8376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.theme_bar], null);
var G__8377 = document.getElementById("footer");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8376,G__8377) : reagent.core.render_component.call(null,G__8376,G__8377));
});
