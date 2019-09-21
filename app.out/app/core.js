// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.views');
goog.require('app.events');
goog.require('app.subs');
/**
 * Application entry point
 */
app.core.main = (function app$core$main(){
var G__15608_15610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15608_15610) : re_frame.core.dispatch_sync.call(null,G__15608_15610));

var downloads_url_15611 = "https://api.github.com/repos/adolby/Kryvo/releases/latest";
var G__15609_15612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$load_DASH_download_DASH_urls,downloads_url_15611], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15609_15612) : re_frame.core.dispatch.call(null,G__15609_15612));

app.views.render_kryvo_download();

return app.views.render_footer();
});
goog.exportSymbol('app.core.main', app.core.main);
