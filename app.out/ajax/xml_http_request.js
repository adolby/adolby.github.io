// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__6336 = e.target.readyState;
var fexpr__6335 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__6335.cljs$core$IFn$_invoke$arity$1 ? fexpr__6335.cljs$core$IFn$_invoke$arity$1(G__6336) : fexpr__6335.call(null,G__6336));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6338,handler){
var map__6339 = p__6338;
var map__6339__$1 = (((((!((map__6339 == null))))?(((((map__6339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6339):map__6339);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6339__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6339__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6339__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6339__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6339__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6339__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6339__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__6339,map__6339__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__6337_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__6337_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__6339,map__6339__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___6357 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___6357)){
var response_type_6358 = temp__5720__auto___6357;
this$__$1.responseType = cljs.core.name(response_type_6358);
} else {
}

var seq__6341_6359 = cljs.core.seq(headers);
var chunk__6342_6360 = null;
var count__6343_6361 = (0);
var i__6344_6362 = (0);
while(true){
if((i__6344_6362 < count__6343_6361)){
var vec__6351_6363 = chunk__6342_6360.cljs$core$IIndexed$_nth$arity$2(null,i__6344_6362);
var k_6364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6351_6363,(0),null);
var v_6365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6351_6363,(1),null);
this$__$1.setRequestHeader(k_6364,v_6365);


var G__6366 = seq__6341_6359;
var G__6367 = chunk__6342_6360;
var G__6368 = count__6343_6361;
var G__6369 = (i__6344_6362 + (1));
seq__6341_6359 = G__6366;
chunk__6342_6360 = G__6367;
count__6343_6361 = G__6368;
i__6344_6362 = G__6369;
continue;
} else {
var temp__5720__auto___6370 = cljs.core.seq(seq__6341_6359);
if(temp__5720__auto___6370){
var seq__6341_6371__$1 = temp__5720__auto___6370;
if(cljs.core.chunked_seq_QMARK_(seq__6341_6371__$1)){
var c__4550__auto___6372 = cljs.core.chunk_first(seq__6341_6371__$1);
var G__6373 = cljs.core.chunk_rest(seq__6341_6371__$1);
var G__6374 = c__4550__auto___6372;
var G__6375 = cljs.core.count(c__4550__auto___6372);
var G__6376 = (0);
seq__6341_6359 = G__6373;
chunk__6342_6360 = G__6374;
count__6343_6361 = G__6375;
i__6344_6362 = G__6376;
continue;
} else {
var vec__6354_6377 = cljs.core.first(seq__6341_6371__$1);
var k_6378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6354_6377,(0),null);
var v_6379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6354_6377,(1),null);
this$__$1.setRequestHeader(k_6378,v_6379);


var G__6380 = cljs.core.next(seq__6341_6371__$1);
var G__6381 = null;
var G__6382 = (0);
var G__6383 = (0);
seq__6341_6359 = G__6380;
chunk__6342_6360 = G__6381;
count__6343_6361 = G__6382;
i__6344_6362 = G__6383;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
