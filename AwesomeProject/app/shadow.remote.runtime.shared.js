goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29451,res){
var map__29452 = p__29451;
var map__29452__$1 = cljs.core.__destructure_map(map__29452);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29452__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29452__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29456 = res;
var G__29456__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29456,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29456);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29456__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29456__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29476 = arguments.length;
switch (G__29476) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29484,msg,handlers,timeout_after_ms){
var map__29486 = p__29484;
var map__29486__$1 = cljs.core.__destructure_map(map__29486);
var runtime = map__29486__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29486__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29643 = arguments.length;
var i__4865__auto___29644 = (0);
while(true){
if((i__4865__auto___29644 < len__4864__auto___29643)){
args__4870__auto__.push((arguments[i__4865__auto___29644]));

var G__29645 = (i__4865__auto___29644 + (1));
i__4865__auto___29644 = G__29645;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29502,ev,args){
var map__29504 = p__29502;
var map__29504__$1 = cljs.core.__destructure_map(map__29504);
var runtime = map__29504__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29504__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29506 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29509 = null;
var count__29510 = (0);
var i__29511 = (0);
while(true){
if((i__29511 < count__29510)){
var ext = chunk__29509.cljs$core$IIndexed$_nth$arity$2(null,i__29511);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29646 = seq__29506;
var G__29647 = chunk__29509;
var G__29648 = count__29510;
var G__29649 = (i__29511 + (1));
seq__29506 = G__29646;
chunk__29509 = G__29647;
count__29510 = G__29648;
i__29511 = G__29649;
continue;
} else {
var G__29650 = seq__29506;
var G__29651 = chunk__29509;
var G__29652 = count__29510;
var G__29653 = (i__29511 + (1));
seq__29506 = G__29650;
chunk__29509 = G__29651;
count__29510 = G__29652;
i__29511 = G__29653;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29506);
if(temp__5753__auto__){
var seq__29506__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29506__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29506__$1);
var G__29654 = cljs.core.chunk_rest(seq__29506__$1);
var G__29655 = c__4679__auto__;
var G__29656 = cljs.core.count(c__4679__auto__);
var G__29657 = (0);
seq__29506 = G__29654;
chunk__29509 = G__29655;
count__29510 = G__29656;
i__29511 = G__29657;
continue;
} else {
var ext = cljs.core.first(seq__29506__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29658 = cljs.core.next(seq__29506__$1);
var G__29659 = null;
var G__29660 = (0);
var G__29661 = (0);
seq__29506 = G__29658;
chunk__29509 = G__29659;
count__29510 = G__29660;
i__29511 = G__29661;
continue;
} else {
var G__29664 = cljs.core.next(seq__29506__$1);
var G__29665 = null;
var G__29666 = (0);
var G__29667 = (0);
seq__29506 = G__29664;
chunk__29509 = G__29665;
count__29510 = G__29666;
i__29511 = G__29667;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29491){
var G__29492 = cljs.core.first(seq29491);
var seq29491__$1 = cljs.core.next(seq29491);
var G__29493 = cljs.core.first(seq29491__$1);
var seq29491__$2 = cljs.core.next(seq29491__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29492,G__29493,seq29491__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29531,p__29532){
var map__29537 = p__29531;
var map__29537__$1 = cljs.core.__destructure_map(map__29537);
var runtime = map__29537__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29537__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29538 = p__29532;
var map__29538__$1 = cljs.core.__destructure_map(map__29538);
var msg = map__29538__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29538__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29539 = cljs.core.deref(state_ref);
var map__29539__$1 = cljs.core.__destructure_map(map__29539);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29539__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29539__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29540){
var map__29544 = p__29540;
var map__29544__$1 = cljs.core.__destructure_map(map__29544);
var runtime = map__29544__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29544__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29548,msg){
var map__29549 = p__29548;
var map__29549__$1 = cljs.core.__destructure_map(map__29549);
var runtime = map__29549__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29549__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29559,key,p__29560){
var map__29561 = p__29559;
var map__29561__$1 = cljs.core.__destructure_map(map__29561);
var state = map__29561__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29561__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29562 = p__29560;
var map__29562__$1 = cljs.core.__destructure_map(map__29562);
var spec = map__29562__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29562__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29564,key,spec){
var map__29565 = p__29564;
var map__29565__$1 = cljs.core.__destructure_map(map__29565);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29565__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29566_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29566_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29567_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29567_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29568_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29568_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29569_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29569_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29570_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29570_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29576,key){
var map__29579 = p__29576;
var map__29579__$1 = cljs.core.__destructure_map(map__29579);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29579__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29587,msg){
var map__29588 = p__29587;
var map__29588__$1 = cljs.core.__destructure_map(map__29588);
var runtime = map__29588__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29588__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29597,p__29598){
var map__29599 = p__29597;
var map__29599__$1 = cljs.core.__destructure_map(map__29599);
var runtime = map__29599__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29599__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29600 = p__29598;
var map__29600__$1 = cljs.core.__destructure_map(map__29600);
var msg = map__29600__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29600__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29600__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29602 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29604 = null;
var count__29605 = (0);
var i__29606 = (0);
while(true){
if((i__29606 < count__29605)){
var map__29617 = chunk__29604.cljs$core$IIndexed$_nth$arity$2(null,i__29606);
var map__29617__$1 = cljs.core.__destructure_map(map__29617);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29617__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29720 = seq__29602;
var G__29721 = chunk__29604;
var G__29722 = count__29605;
var G__29723 = (i__29606 + (1));
seq__29602 = G__29720;
chunk__29604 = G__29721;
count__29605 = G__29722;
i__29606 = G__29723;
continue;
} else {
var G__29725 = seq__29602;
var G__29726 = chunk__29604;
var G__29727 = count__29605;
var G__29728 = (i__29606 + (1));
seq__29602 = G__29725;
chunk__29604 = G__29726;
count__29605 = G__29727;
i__29606 = G__29728;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29602);
if(temp__5753__auto__){
var seq__29602__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29602__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29602__$1);
var G__29732 = cljs.core.chunk_rest(seq__29602__$1);
var G__29733 = c__4679__auto__;
var G__29734 = cljs.core.count(c__4679__auto__);
var G__29735 = (0);
seq__29602 = G__29732;
chunk__29604 = G__29733;
count__29605 = G__29734;
i__29606 = G__29735;
continue;
} else {
var map__29627 = cljs.core.first(seq__29602__$1);
var map__29627__$1 = cljs.core.__destructure_map(map__29627);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29627__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29736 = cljs.core.next(seq__29602__$1);
var G__29737 = null;
var G__29738 = (0);
var G__29739 = (0);
seq__29602 = G__29736;
chunk__29604 = G__29737;
count__29605 = G__29738;
i__29606 = G__29739;
continue;
} else {
var G__29740 = cljs.core.next(seq__29602__$1);
var G__29741 = null;
var G__29742 = (0);
var G__29743 = (0);
seq__29602 = G__29740;
chunk__29604 = G__29741;
count__29605 = G__29742;
i__29606 = G__29743;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
