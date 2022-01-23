goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__29939,p__29940){
var map__29941 = p__29939;
var map__29941__$1 = cljs.core.__destructure_map(map__29941);
var svc = map__29941__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29942 = p__29940;
var map__29942__$1 = cljs.core.__destructure_map(map__29942);
var msg = map__29942__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29942__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29942__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29942__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29942__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__29947,p__29948){
var map__29949 = p__29947;
var map__29949__$1 = cljs.core.__destructure_map(map__29949);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29949__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__29950 = p__29948;
var map__29950__$1 = cljs.core.__destructure_map(map__29950);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29950__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__29957,p__29958){
var map__29960 = p__29957;
var map__29960__$1 = cljs.core.__destructure_map(map__29960);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29960__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29960__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29962 = p__29958;
var map__29962__$1 = cljs.core.__destructure_map(map__29962);
var msg = map__29962__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29962__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__29967,tid){
var map__29969 = p__29967;
var map__29969__$1 = cljs.core.__destructure_map(map__29969);
var svc = map__29969__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29969__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__29982 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__29983 = null;
var count__29984 = (0);
var i__29985 = (0);
while(true){
if((i__29985 < count__29984)){
var vec__30001 = chunk__29983.cljs$core$IIndexed$_nth$arity$2(null,i__29985);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30001,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30001,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30024 = seq__29982;
var G__30025 = chunk__29983;
var G__30026 = count__29984;
var G__30027 = (i__29985 + (1));
seq__29982 = G__30024;
chunk__29983 = G__30025;
count__29984 = G__30026;
i__29985 = G__30027;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29982);
if(temp__5753__auto__){
var seq__29982__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29982__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29982__$1);
var G__30028 = cljs.core.chunk_rest(seq__29982__$1);
var G__30029 = c__4679__auto__;
var G__30030 = cljs.core.count(c__4679__auto__);
var G__30031 = (0);
seq__29982 = G__30028;
chunk__29983 = G__30029;
count__29984 = G__30030;
i__29985 = G__30031;
continue;
} else {
var vec__30012 = cljs.core.first(seq__29982__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30012,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30012,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30034 = cljs.core.next(seq__29982__$1);
var G__30035 = null;
var G__30036 = (0);
var G__30037 = (0);
seq__29982 = G__30034;
chunk__29983 = G__30035;
count__29984 = G__30036;
i__29985 = G__30037;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__29971_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__29971_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__29972_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__29972_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__29974_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__29974_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__29975_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__29975_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__30018){
var map__30019 = p__30018;
var map__30019__$1 = cljs.core.__destructure_map(map__30019);
var svc = map__30019__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30019__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30019__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
