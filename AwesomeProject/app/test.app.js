goog.provide('test.app');
if((typeof test !== 'undefined') && (typeof test.app !== 'undefined') && (typeof test.app.splash_img !== 'undefined')){
} else {
test.app.splash_img = require("../assets/shadow-cljs.png");
}
test.app.styles = shadow.js.shim.module$react_native.StyleSheet.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center"], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(24),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null)));
test.app.root = (function test$app$root(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),test.app.styles.container], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),test.app.styles.title], null),"Hello!!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),test.app.splash_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null)], null)], null);
});
test.app.start = (function test$app$start(){
return shadow.react_native.render_root("AwesomeProject",reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.app.root], null)));
});
test.app.init = (function test$app$init(){
return test.app.start();
});

//# sourceMappingURL=test.app.js.map
