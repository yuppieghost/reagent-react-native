goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29086){
var map__29087 = p__29086;
var map__29087__$1 = cljs.core.__destructure_map(map__29087);
var m = map__29087__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29087__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29089_29391 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29090_29392 = null;
var count__29091_29393 = (0);
var i__29092_29394 = (0);
while(true){
if((i__29092_29394 < count__29091_29393)){
var f_29395 = chunk__29090_29392.cljs$core$IIndexed$_nth$arity$2(null,i__29092_29394);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29395], 0));


var G__29396 = seq__29089_29391;
var G__29397 = chunk__29090_29392;
var G__29398 = count__29091_29393;
var G__29399 = (i__29092_29394 + (1));
seq__29089_29391 = G__29396;
chunk__29090_29392 = G__29397;
count__29091_29393 = G__29398;
i__29092_29394 = G__29399;
continue;
} else {
var temp__5753__auto___29400 = cljs.core.seq(seq__29089_29391);
if(temp__5753__auto___29400){
var seq__29089_29402__$1 = temp__5753__auto___29400;
if(cljs.core.chunked_seq_QMARK_(seq__29089_29402__$1)){
var c__4679__auto___29403 = cljs.core.chunk_first(seq__29089_29402__$1);
var G__29404 = cljs.core.chunk_rest(seq__29089_29402__$1);
var G__29405 = c__4679__auto___29403;
var G__29406 = cljs.core.count(c__4679__auto___29403);
var G__29407 = (0);
seq__29089_29391 = G__29404;
chunk__29090_29392 = G__29405;
count__29091_29393 = G__29406;
i__29092_29394 = G__29407;
continue;
} else {
var f_29409 = cljs.core.first(seq__29089_29402__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29409], 0));


var G__29410 = cljs.core.next(seq__29089_29402__$1);
var G__29411 = null;
var G__29412 = (0);
var G__29413 = (0);
seq__29089_29391 = G__29410;
chunk__29090_29392 = G__29411;
count__29091_29393 = G__29412;
i__29092_29394 = G__29413;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29414 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29414], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29414)))?cljs.core.second(arglists_29414):arglists_29414)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29103_29415 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29104_29416 = null;
var count__29105_29417 = (0);
var i__29106_29418 = (0);
while(true){
if((i__29106_29418 < count__29105_29417)){
var vec__29122_29419 = chunk__29104_29416.cljs$core$IIndexed$_nth$arity$2(null,i__29106_29418);
var name_29420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122_29419,(0),null);
var map__29125_29421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122_29419,(1),null);
var map__29125_29422__$1 = cljs.core.__destructure_map(map__29125_29421);
var doc_29423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29125_29422__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29125_29422__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29420], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29424], 0));

if(cljs.core.truth_(doc_29423)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29423], 0));
} else {
}


var G__29425 = seq__29103_29415;
var G__29426 = chunk__29104_29416;
var G__29427 = count__29105_29417;
var G__29428 = (i__29106_29418 + (1));
seq__29103_29415 = G__29425;
chunk__29104_29416 = G__29426;
count__29105_29417 = G__29427;
i__29106_29418 = G__29428;
continue;
} else {
var temp__5753__auto___29429 = cljs.core.seq(seq__29103_29415);
if(temp__5753__auto___29429){
var seq__29103_29430__$1 = temp__5753__auto___29429;
if(cljs.core.chunked_seq_QMARK_(seq__29103_29430__$1)){
var c__4679__auto___29434 = cljs.core.chunk_first(seq__29103_29430__$1);
var G__29435 = cljs.core.chunk_rest(seq__29103_29430__$1);
var G__29436 = c__4679__auto___29434;
var G__29437 = cljs.core.count(c__4679__auto___29434);
var G__29438 = (0);
seq__29103_29415 = G__29435;
chunk__29104_29416 = G__29436;
count__29105_29417 = G__29437;
i__29106_29418 = G__29438;
continue;
} else {
var vec__29131_29439 = cljs.core.first(seq__29103_29430__$1);
var name_29440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131_29439,(0),null);
var map__29134_29441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131_29439,(1),null);
var map__29134_29442__$1 = cljs.core.__destructure_map(map__29134_29441);
var doc_29443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29134_29442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29134_29442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29440], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29444], 0));

if(cljs.core.truth_(doc_29443)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29443], 0));
} else {
}


var G__29447 = cljs.core.next(seq__29103_29430__$1);
var G__29448 = null;
var G__29449 = (0);
var G__29450 = (0);
seq__29103_29415 = G__29447;
chunk__29104_29416 = G__29448;
count__29105_29417 = G__29449;
i__29106_29418 = G__29450;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__29139 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29140 = null;
var count__29141 = (0);
var i__29142 = (0);
while(true){
if((i__29142 < count__29141)){
var role = chunk__29140.cljs$core$IIndexed$_nth$arity$2(null,i__29142);
var temp__5753__auto___29454__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___29454__$1)){
var spec_29455 = temp__5753__auto___29454__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29455)], 0));
} else {
}


var G__29457 = seq__29139;
var G__29458 = chunk__29140;
var G__29459 = count__29141;
var G__29460 = (i__29142 + (1));
seq__29139 = G__29457;
chunk__29140 = G__29458;
count__29141 = G__29459;
i__29142 = G__29460;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__29139);
if(temp__5753__auto____$1){
var seq__29139__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29139__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29139__$1);
var G__29461 = cljs.core.chunk_rest(seq__29139__$1);
var G__29462 = c__4679__auto__;
var G__29463 = cljs.core.count(c__4679__auto__);
var G__29464 = (0);
seq__29139 = G__29461;
chunk__29140 = G__29462;
count__29141 = G__29463;
i__29142 = G__29464;
continue;
} else {
var role = cljs.core.first(seq__29139__$1);
var temp__5753__auto___29466__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___29466__$2)){
var spec_29467 = temp__5753__auto___29466__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29467)], 0));
} else {
}


var G__29468 = cljs.core.next(seq__29139__$1);
var G__29469 = null;
var G__29470 = (0);
var G__29471 = (0);
seq__29139 = G__29468;
chunk__29140 = G__29469;
count__29141 = G__29470;
i__29142 = G__29471;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29478 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__29479 = cljs.core.ex_cause(t);
via = G__29478;
t = G__29479;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29175 = datafied_throwable;
var map__29175__$1 = cljs.core.__destructure_map(map__29175);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29175__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29175__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29175__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29176 = cljs.core.last(via);
var map__29176__$1 = cljs.core.__destructure_map(map__29176);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29176__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29176__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29176__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29177 = data;
var map__29177__$1 = cljs.core.__destructure_map(map__29177);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29177__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29177__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29177__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29178 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29178__$1 = cljs.core.__destructure_map(map__29178);
var top_data = map__29178__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29182 = phase;
var G__29182__$1 = (((G__29182 instanceof cljs.core.Keyword))?G__29182.fqn:null);
switch (G__29182__$1) {
case "read-source":
var map__29186 = data;
var map__29186__$1 = cljs.core.__destructure_map(map__29186);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29186__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29186__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29187 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29187__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29187,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29187);
var G__29187__$2 = (cljs.core.truth_((function (){var fexpr__29188 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29188.cljs$core$IFn$_invoke$arity$1 ? fexpr__29188.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29188.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29187__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29187__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29187__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29187__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29189 = top_data;
var G__29189__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29189);
var G__29189__$2 = (cljs.core.truth_((function (){var fexpr__29191 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29191.cljs$core$IFn$_invoke$arity$1 ? fexpr__29191.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29191.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29189__$1);
var G__29189__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29189__$2);
var G__29189__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29189__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29189__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29189__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29194 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(3),null);
var G__29198 = top_data;
var G__29198__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29198,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29198);
var G__29198__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29198__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29198__$1);
var G__29198__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29198__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29198__$2);
var G__29198__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29198__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29198__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29198__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29198__$4;
}

break;
case "execution":
var vec__29205 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29174_SHARP_){
var or__4253__auto__ = (p1__29174_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__29211 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29211.cljs$core$IFn$_invoke$arity$1 ? fexpr__29211.cljs$core$IFn$_invoke$arity$1(p1__29174_SHARP_) : fexpr__29211.call(null,p1__29174_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__29212 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29212__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29212,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29212);
var G__29212__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29212__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29212__$1);
var G__29212__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29212__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29212__$2);
var G__29212__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29212__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29212__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29212__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29212__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29182__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29248){
var map__29253 = p__29248;
var map__29253__$1 = cljs.core.__destructure_map(map__29253);
var triage_data = map__29253__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29277 = phase;
var G__29277__$1 = (((G__29277 instanceof cljs.core.Keyword))?G__29277.fqn:null);
switch (G__29277__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29281 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29282 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29283 = loc;
var G__29284 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29297_29533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29298_29534 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29299_29535 = true;
var _STAR_print_fn_STAR__temp_val__29300_29536 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29299_29535);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29300_29536);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29241_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29241_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29298_29534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29297_29533);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29281,G__29282,G__29283,G__29284) : format.call(null,G__29281,G__29282,G__29283,G__29284));

break;
case "macroexpansion":
var G__29321 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29322 = cause_type;
var G__29323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29324 = loc;
var G__29325 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29321,G__29322,G__29323,G__29324,G__29325) : format.call(null,G__29321,G__29322,G__29323,G__29324,G__29325));

break;
case "compile-syntax-check":
var G__29327 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29328 = cause_type;
var G__29329 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29330 = loc;
var G__29331 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29327,G__29328,G__29329,G__29330,G__29331) : format.call(null,G__29327,G__29328,G__29329,G__29330,G__29331));

break;
case "compilation":
var G__29336 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29337 = cause_type;
var G__29338 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29339 = loc;
var G__29340 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29336,G__29337,G__29338,G__29339,G__29340) : format.call(null,G__29336,G__29337,G__29338,G__29339,G__29340));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29344 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29345 = symbol;
var G__29346 = loc;
var G__29347 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29348_29550 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29349_29551 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29350_29552 = true;
var _STAR_print_fn_STAR__temp_val__29351_29553 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29350_29552);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29351_29553);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29242_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29242_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29349_29551);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29348_29550);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29344,G__29345,G__29346,G__29347) : format.call(null,G__29344,G__29345,G__29346,G__29347));
} else {
var G__29367 = "Execution error%s at %s(%s).\n%s\n";
var G__29368 = cause_type;
var G__29369 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29370 = loc;
var G__29371 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29367,G__29368,G__29369,G__29370,G__29371) : format.call(null,G__29367,G__29368,G__29369,G__29370,G__29371));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29277__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
