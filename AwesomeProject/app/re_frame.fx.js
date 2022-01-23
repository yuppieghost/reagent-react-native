goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__31167 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__31168 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__31168);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___31260 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___31260)){
var new_db_31261 = temp__5753__auto___31260;
var fexpr__31176_31262 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31176_31262.cljs$core$IFn$_invoke$arity$1 ? fexpr__31176_31262.cljs$core$IFn$_invoke$arity$1(new_db_31261) : fexpr__31176_31262.call(null,new_db_31261));
} else {
}

var seq__31179 = cljs.core.seq(effects_without_db);
var chunk__31180 = null;
var count__31181 = (0);
var i__31182 = (0);
while(true){
if((i__31182 < count__31181)){
var vec__31191 = chunk__31180.cljs$core$IIndexed$_nth$arity$2(null,i__31182);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31191,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31191,(1),null);
var temp__5751__auto___31271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31271)){
var effect_fn_31272 = temp__5751__auto___31271;
(effect_fn_31272.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31272.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31272.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31273 = seq__31179;
var G__31274 = chunk__31180;
var G__31275 = count__31181;
var G__31276 = (i__31182 + (1));
seq__31179 = G__31273;
chunk__31180 = G__31274;
count__31181 = G__31275;
i__31182 = G__31276;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31179);
if(temp__5753__auto__){
var seq__31179__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31179__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31179__$1);
var G__31277 = cljs.core.chunk_rest(seq__31179__$1);
var G__31278 = c__4679__auto__;
var G__31279 = cljs.core.count(c__4679__auto__);
var G__31280 = (0);
seq__31179 = G__31277;
chunk__31180 = G__31278;
count__31181 = G__31279;
i__31182 = G__31280;
continue;
} else {
var vec__31194 = cljs.core.first(seq__31179__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31194,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31194,(1),null);
var temp__5751__auto___31281 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31281)){
var effect_fn_31282 = temp__5751__auto___31281;
(effect_fn_31282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31283 = cljs.core.next(seq__31179__$1);
var G__31284 = null;
var G__31285 = (0);
var G__31286 = (0);
seq__31179 = G__31283;
chunk__31180 = G__31284;
count__31181 = G__31285;
i__31182 = G__31286;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__30826__auto___31287 = re_frame.interop.now();
var duration__30827__auto___31288 = (end__30826__auto___31287 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30827__auto___31288,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__30826__auto___31287);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__31167);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___31289 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___31289)){
var new_db_31291 = temp__5753__auto___31289;
var fexpr__31198_31293 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31198_31293.cljs$core$IFn$_invoke$arity$1 ? fexpr__31198_31293.cljs$core$IFn$_invoke$arity$1(new_db_31291) : fexpr__31198_31293.call(null,new_db_31291));
} else {
}

var seq__31201 = cljs.core.seq(effects_without_db);
var chunk__31202 = null;
var count__31203 = (0);
var i__31204 = (0);
while(true){
if((i__31204 < count__31203)){
var vec__31212 = chunk__31202.cljs$core$IIndexed$_nth$arity$2(null,i__31204);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31212,(1),null);
var temp__5751__auto___31294 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31294)){
var effect_fn_31295 = temp__5751__auto___31294;
(effect_fn_31295.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31295.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31295.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31296 = seq__31201;
var G__31297 = chunk__31202;
var G__31298 = count__31203;
var G__31299 = (i__31204 + (1));
seq__31201 = G__31296;
chunk__31202 = G__31297;
count__31203 = G__31298;
i__31204 = G__31299;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31201);
if(temp__5753__auto__){
var seq__31201__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31201__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31201__$1);
var G__31300 = cljs.core.chunk_rest(seq__31201__$1);
var G__31301 = c__4679__auto__;
var G__31302 = cljs.core.count(c__4679__auto__);
var G__31303 = (0);
seq__31201 = G__31300;
chunk__31202 = G__31301;
count__31203 = G__31302;
i__31204 = G__31303;
continue;
} else {
var vec__31215 = cljs.core.first(seq__31201__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31215,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31215,(1),null);
var temp__5751__auto___31304 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31304)){
var effect_fn_31305 = temp__5751__auto___31304;
(effect_fn_31305.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31305.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31305.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31306 = cljs.core.next(seq__31201__$1);
var G__31307 = null;
var G__31308 = (0);
var G__31309 = (0);
seq__31201 = G__31306;
chunk__31202 = G__31307;
count__31203 = G__31308;
i__31204 = G__31309;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__31226){
var map__31231 = p__31226;
var map__31231__$1 = cljs.core.__destructure_map(map__31231);
var effect = map__31231__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__31232 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31233 = null;
var count__31234 = (0);
var i__31235 = (0);
while(true){
if((i__31235 < count__31234)){
var effect = chunk__31233.cljs$core$IIndexed$_nth$arity$2(null,i__31235);
re_frame.fx.dispatch_later(effect);


var G__31311 = seq__31232;
var G__31312 = chunk__31233;
var G__31313 = count__31234;
var G__31314 = (i__31235 + (1));
seq__31232 = G__31311;
chunk__31233 = G__31312;
count__31234 = G__31313;
i__31235 = G__31314;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31232);
if(temp__5753__auto__){
var seq__31232__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31232__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31232__$1);
var G__31315 = cljs.core.chunk_rest(seq__31232__$1);
var G__31316 = c__4679__auto__;
var G__31317 = cljs.core.count(c__4679__auto__);
var G__31318 = (0);
seq__31232 = G__31315;
chunk__31233 = G__31316;
count__31234 = G__31317;
i__31235 = G__31318;
continue;
} else {
var effect = cljs.core.first(seq__31232__$1);
re_frame.fx.dispatch_later(effect);


var G__31320 = cljs.core.next(seq__31232__$1);
var G__31321 = null;
var G__31322 = (0);
var G__31323 = (0);
seq__31232 = G__31320;
chunk__31233 = G__31321;
count__31234 = G__31322;
i__31235 = G__31323;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__31236 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__31237 = null;
var count__31238 = (0);
var i__31239 = (0);
while(true){
if((i__31239 < count__31238)){
var vec__31246 = chunk__31237.cljs$core$IIndexed$_nth$arity$2(null,i__31239);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31246,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31246,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___31324 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31324)){
var effect_fn_31325 = temp__5751__auto___31324;
(effect_fn_31325.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31325.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31325.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31326 = seq__31236;
var G__31327 = chunk__31237;
var G__31328 = count__31238;
var G__31329 = (i__31239 + (1));
seq__31236 = G__31326;
chunk__31237 = G__31327;
count__31238 = G__31328;
i__31239 = G__31329;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31236);
if(temp__5753__auto__){
var seq__31236__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31236__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31236__$1);
var G__31332 = cljs.core.chunk_rest(seq__31236__$1);
var G__31333 = c__4679__auto__;
var G__31334 = cljs.core.count(c__4679__auto__);
var G__31335 = (0);
seq__31236 = G__31332;
chunk__31237 = G__31333;
count__31238 = G__31334;
i__31239 = G__31335;
continue;
} else {
var vec__31249 = cljs.core.first(seq__31236__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___31336 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31336)){
var effect_fn_31337 = temp__5751__auto___31336;
(effect_fn_31337.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31337.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31337.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31338 = cljs.core.next(seq__31236__$1);
var G__31339 = null;
var G__31340 = (0);
var G__31341 = (0);
seq__31236 = G__31338;
chunk__31237 = G__31339;
count__31238 = G__31340;
i__31239 = G__31341;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__31252 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31253 = null;
var count__31254 = (0);
var i__31255 = (0);
while(true){
if((i__31255 < count__31254)){
var event = chunk__31253.cljs$core$IIndexed$_nth$arity$2(null,i__31255);
re_frame.router.dispatch(event);


var G__31344 = seq__31252;
var G__31345 = chunk__31253;
var G__31346 = count__31254;
var G__31347 = (i__31255 + (1));
seq__31252 = G__31344;
chunk__31253 = G__31345;
count__31254 = G__31346;
i__31255 = G__31347;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31252);
if(temp__5753__auto__){
var seq__31252__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31252__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31252__$1);
var G__31348 = cljs.core.chunk_rest(seq__31252__$1);
var G__31349 = c__4679__auto__;
var G__31350 = cljs.core.count(c__4679__auto__);
var G__31351 = (0);
seq__31252 = G__31348;
chunk__31253 = G__31349;
count__31254 = G__31350;
i__31255 = G__31351;
continue;
} else {
var event = cljs.core.first(seq__31252__$1);
re_frame.router.dispatch(event);


var G__31352 = cljs.core.next(seq__31252__$1);
var G__31353 = null;
var G__31354 = (0);
var G__31355 = (0);
seq__31252 = G__31352;
chunk__31253 = G__31353;
count__31254 = G__31354;
i__31255 = G__31355;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__31256 = cljs.core.seq(value);
var chunk__31257 = null;
var count__31258 = (0);
var i__31259 = (0);
while(true){
if((i__31259 < count__31258)){
var event = chunk__31257.cljs$core$IIndexed$_nth$arity$2(null,i__31259);
clear_event(event);


var G__31356 = seq__31256;
var G__31357 = chunk__31257;
var G__31358 = count__31258;
var G__31359 = (i__31259 + (1));
seq__31256 = G__31356;
chunk__31257 = G__31357;
count__31258 = G__31358;
i__31259 = G__31359;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31256);
if(temp__5753__auto__){
var seq__31256__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31256__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31256__$1);
var G__31360 = cljs.core.chunk_rest(seq__31256__$1);
var G__31361 = c__4679__auto__;
var G__31362 = cljs.core.count(c__4679__auto__);
var G__31363 = (0);
seq__31256 = G__31360;
chunk__31257 = G__31361;
count__31258 = G__31362;
i__31259 = G__31363;
continue;
} else {
var event = cljs.core.first(seq__31256__$1);
clear_event(event);


var G__31364 = cljs.core.next(seq__31256__$1);
var G__31365 = null;
var G__31366 = (0);
var G__31367 = (0);
seq__31256 = G__31364;
chunk__31257 = G__31365;
count__31258 = G__31366;
i__31259 = G__31367;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
