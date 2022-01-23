goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__30855){
var map__30856 = p__30855;
var map__30856__$1 = cljs.core.__destructure_map(map__30856);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__30862_30897 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__30863_30898 = null;
var count__30864_30899 = (0);
var i__30865_30900 = (0);
while(true){
if((i__30865_30900 < count__30864_30899)){
var vec__30876_30901 = chunk__30863_30898.cljs$core$IIndexed$_nth$arity$2(null,i__30865_30900);
var k_30902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30876_30901,(0),null);
var cb_30903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30876_30901,(1),null);
try{var G__30880_30904 = cljs.core.deref(re_frame.trace.traces);
(cb_30903.cljs$core$IFn$_invoke$arity$1 ? cb_30903.cljs$core$IFn$_invoke$arity$1(G__30880_30904) : cb_30903.call(null,G__30880_30904));
}catch (e30879){var e_30905 = e30879;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_30902,"while storing",cljs.core.deref(re_frame.trace.traces),e_30905], 0));
}

var G__30906 = seq__30862_30897;
var G__30907 = chunk__30863_30898;
var G__30908 = count__30864_30899;
var G__30909 = (i__30865_30900 + (1));
seq__30862_30897 = G__30906;
chunk__30863_30898 = G__30907;
count__30864_30899 = G__30908;
i__30865_30900 = G__30909;
continue;
} else {
var temp__5753__auto___30910 = cljs.core.seq(seq__30862_30897);
if(temp__5753__auto___30910){
var seq__30862_30911__$1 = temp__5753__auto___30910;
if(cljs.core.chunked_seq_QMARK_(seq__30862_30911__$1)){
var c__4679__auto___30912 = cljs.core.chunk_first(seq__30862_30911__$1);
var G__30913 = cljs.core.chunk_rest(seq__30862_30911__$1);
var G__30914 = c__4679__auto___30912;
var G__30915 = cljs.core.count(c__4679__auto___30912);
var G__30916 = (0);
seq__30862_30897 = G__30913;
chunk__30863_30898 = G__30914;
count__30864_30899 = G__30915;
i__30865_30900 = G__30916;
continue;
} else {
var vec__30881_30917 = cljs.core.first(seq__30862_30911__$1);
var k_30918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30881_30917,(0),null);
var cb_30919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30881_30917,(1),null);
try{var G__30885_30922 = cljs.core.deref(re_frame.trace.traces);
(cb_30919.cljs$core$IFn$_invoke$arity$1 ? cb_30919.cljs$core$IFn$_invoke$arity$1(G__30885_30922) : cb_30919.call(null,G__30885_30922));
}catch (e30884){var e_30923 = e30884;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_30918,"while storing",cljs.core.deref(re_frame.trace.traces),e_30923], 0));
}

var G__30924 = cljs.core.next(seq__30862_30911__$1);
var G__30925 = null;
var G__30926 = (0);
var G__30927 = (0);
seq__30862_30897 = G__30924;
chunk__30863_30898 = G__30925;
count__30864_30899 = G__30926;
i__30865_30900 = G__30927;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
