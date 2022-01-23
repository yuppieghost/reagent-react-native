goog.provide('dev.app');
dev.app.start = (function dev$app$start(){
re_frame.core.clear_subscription_cache_BANG_();

return shadow.react_native.render_root("AwesomeProject",reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev.views.root], null)));
});
dev.app.dev_setup = (function dev$app$dev_setup(){
if(dev.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
dev.app.init = (function dev$app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dev.events","initialize-db","dev.events/initialize-db",-23392086)], null));

dev.app.dev_setup();

return dev.app.start();
});

//# sourceMappingURL=dev.app.js.map
