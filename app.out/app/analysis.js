// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.analysis');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.timbre');
app.analysis.get_os = (function app$analysis$get_os(url){
if(cljs.core.boolean$(cljs.core.re_find(/windows/,url))){
return "Windows";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/linux/,url))){
return "Linux";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/mac|.dmg/,url))){
return "macOS";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/.ipa/,url))){
return "iOS";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/.apk/,url))){
return "Android";
} else {
return "Other";

}
}
}
}
}
});
app.analysis.get_word_size = (function app$analysis$get_word_size(url){
if(cljs.core.boolean$(cljs.core.re_find(/x86_64/,url))){
return "64-bit";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/x64/,url))){
return "64-bit";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/x86/,url))){
return "32-bit";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/armv7/,url))){
return "32-bit";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/arm64/,url))){
return "64-bit";
} else {
return "";

}
}
}
}
}
});
app.analysis.get_file_type = (function app$analysis$get_file_type(url){
if(cljs.core.boolean$(cljs.core.re_find(/mac/,url))){
return "Disk Image Archive";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/.dmg/,url))){
return "Disk Image";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/.zip/,url))){
return "Portable";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/.tar.gz/,url))){
return "Portable";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/.apk/,url))){
return "APK";
} else {
if(cljs.core.boolean$(cljs.core.re_find(/.ipa/,url))){
return "iOS App Package";
} else {
return "Installer";

}
}
}
}
}
}
});
app.analysis.analyze_download_url = (function app$analysis$analyze_download_url(asset_info){
var map__15531 = asset_info;
var map__15531__$1 = (((((!((map__15531 == null))))?(((((map__15531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15531):map__15531);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15531__$1,cljs.core.cst$kw$browser_DASH_download_DASH_url);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$os,app.analysis.get_os(url),cljs.core.cst$kw$word_DASH_size,app.analysis.get_word_size(url),cljs.core.cst$kw$file_DASH_type,app.analysis.get_file_type(url),cljs.core.cst$kw$url,url], null);
});
app.analysis.build_download_map = (function app$analysis$build_download_map(asset_info_vector){
return cljs.core.group_by(cljs.core.cst$kw$os,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.analysis.analyze_download_url,asset_info_vector));
});
