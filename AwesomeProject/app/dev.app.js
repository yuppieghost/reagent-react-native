goog.provide('dev.app');
dev.app.styles = shadow.js.shim.module$react_native.StyleSheet.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center"], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(24),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null)));
dev.app.root = (function dev$app$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dev.app.styles.container], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dev.app.styles.title], null),"Hello dev"], null)], null);
});
dev.app.start = (function dev$app$start(){
return shadow.react_native.render_root("AwesomeProject",reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev.app.root], null)));
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
