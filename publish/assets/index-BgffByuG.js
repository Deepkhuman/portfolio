(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function D1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qf={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function L1(){if(_g)return Oo;_g=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=t,Oo.jsx=i,Oo.jsxs=i,Oo}var yg;function U1(){return yg||(yg=1,Qf.exports=L1()),Qf.exports}var L=U1(),Jf={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function N1(){if(Mg)return ce;Mg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function M(O,V,st){this.props=O,this.context=V,this.refs=T,this.updater=st||y}M.prototype.isReactComponent={},M.prototype.setState=function(O,V){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,V,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=M.prototype;function N(O,V,st){this.props=O,this.context=V,this.refs=T,this.updater=st||y}var U=N.prototype=new x;U.constructor=N,E(U,M.prototype),U.isPureReactComponent=!0;var R=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function B(O,V,st,ht,X,ct){return st=ct.ref,{$$typeof:r,type:O,key:V,ref:st!==void 0?st:null,props:ct}}function G(O,V){return B(O.type,V,void 0,void 0,void 0,O.props)}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function b(O){var V={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(st){return V[st]})}var H=/\/+/g;function $(O,V){return typeof O=="object"&&O!==null&&O.key!=null?b(""+O.key):V.toString(36)}function tt(){}function ot(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(tt,tt):(O.status="pending",O.then(function(V){O.status==="pending"&&(O.status="fulfilled",O.value=V)},function(V){O.status==="pending"&&(O.status="rejected",O.reason=V)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function dt(O,V,st,ht,X){var ct=typeof O;(ct==="undefined"||ct==="boolean")&&(O=null);var mt=!1;if(O===null)mt=!0;else switch(ct){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(O.$$typeof){case r:case t:mt=!0;break;case g:return mt=O._init,dt(mt(O._payload),V,st,ht,X)}}if(mt)return X=X(O),mt=ht===""?"."+$(O,0):ht,R(X)?(st="",mt!=null&&(st=mt.replace(H,"$&/")+"/"),dt(X,V,st,"",function(Xt){return Xt})):X!=null&&(C(X)&&(X=G(X,st+(X.key==null||O&&O.key===X.key?"":(""+X.key).replace(H,"$&/")+"/")+mt)),V.push(X)),1;mt=0;var bt=ht===""?".":ht+":";if(R(O))for(var wt=0;wt<O.length;wt++)ht=O[wt],ct=bt+$(ht,wt),mt+=dt(ht,V,st,ct,X);else if(wt=_(O),typeof wt=="function")for(O=wt.call(O),wt=0;!(ht=O.next()).done;)ht=ht.value,ct=bt+$(ht,wt++),mt+=dt(ht,V,st,ct,X);else if(ct==="object"){if(typeof O.then=="function")return dt(ot(O),V,st,ht,X);throw V=String(O),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return mt}function z(O,V,st){if(O==null)return O;var ht=[],X=0;return dt(O,ht,"","",function(ct){return V.call(st,ct,X++)}),ht}function et(O){if(O._status===-1){var V=O._result;V=V(),V.then(function(st){(O._status===0||O._status===-1)&&(O._status=1,O._result=st)},function(st){(O._status===0||O._status===-1)&&(O._status=2,O._result=st)}),O._status===-1&&(O._status=0,O._result=V)}if(O._status===1)return O._result.default;throw O._result}var q=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function xt(){}return ce.Children={map:z,forEach:function(O,V,st){z(O,function(){V.apply(this,arguments)},st)},count:function(O){var V=0;return z(O,function(){V++}),V},toArray:function(O){return z(O,function(V){return V})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ce.Component=M,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return k.H.useMemoCache(O)}},ce.cache=function(O){return function(){return O.apply(null,arguments)}},ce.cloneElement=function(O,V,st){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ht=E({},O.props),X=O.key,ct=void 0;if(V!=null)for(mt in V.ref!==void 0&&(ct=void 0),V.key!==void 0&&(X=""+V.key),V)!I.call(V,mt)||mt==="key"||mt==="__self"||mt==="__source"||mt==="ref"&&V.ref===void 0||(ht[mt]=V[mt]);var mt=arguments.length-2;if(mt===1)ht.children=st;else if(1<mt){for(var bt=Array(mt),wt=0;wt<mt;wt++)bt[wt]=arguments[wt+2];ht.children=bt}return B(O.type,X,void 0,void 0,ct,ht)},ce.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ce.createElement=function(O,V,st){var ht,X={},ct=null;if(V!=null)for(ht in V.key!==void 0&&(ct=""+V.key),V)I.call(V,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(X[ht]=V[ht]);var mt=arguments.length-2;if(mt===1)X.children=st;else if(1<mt){for(var bt=Array(mt),wt=0;wt<mt;wt++)bt[wt]=arguments[wt+2];X.children=bt}if(O&&O.defaultProps)for(ht in mt=O.defaultProps,mt)X[ht]===void 0&&(X[ht]=mt[ht]);return B(O,ct,void 0,void 0,null,X)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(O){return{$$typeof:d,render:O}},ce.isValidElement=C,ce.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:et}},ce.memo=function(O,V){return{$$typeof:p,type:O,compare:V===void 0?null:V}},ce.startTransition=function(O){var V=k.T,st={};k.T=st;try{var ht=O(),X=k.S;X!==null&&X(st,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(xt,q)}catch(ct){q(ct)}finally{k.T=V}},ce.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ce.use=function(O){return k.H.use(O)},ce.useActionState=function(O,V,st){return k.H.useActionState(O,V,st)},ce.useCallback=function(O,V){return k.H.useCallback(O,V)},ce.useContext=function(O){return k.H.useContext(O)},ce.useDebugValue=function(){},ce.useDeferredValue=function(O,V){return k.H.useDeferredValue(O,V)},ce.useEffect=function(O,V,st){var ht=k.H;if(typeof st=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(O,V)},ce.useId=function(){return k.H.useId()},ce.useImperativeHandle=function(O,V,st){return k.H.useImperativeHandle(O,V,st)},ce.useInsertionEffect=function(O,V){return k.H.useInsertionEffect(O,V)},ce.useLayoutEffect=function(O,V){return k.H.useLayoutEffect(O,V)},ce.useMemo=function(O,V){return k.H.useMemo(O,V)},ce.useOptimistic=function(O,V){return k.H.useOptimistic(O,V)},ce.useReducer=function(O,V,st){return k.H.useReducer(O,V,st)},ce.useRef=function(O){return k.H.useRef(O)},ce.useState=function(O){return k.H.useState(O)},ce.useSyncExternalStore=function(O,V,st){return k.H.useSyncExternalStore(O,V,st)},ce.useTransition=function(){return k.H.useTransition()},ce.version="19.1.0",ce}var Sg;function Ad(){return Sg||(Sg=1,Jf.exports=N1()),Jf.exports}var Se=Ad();const bs=D1(Se);var $f={exports:{}},Po={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function O1(){return Eg||(Eg=1,function(r){function t(z,et){var q=z.length;z.push(et);t:for(;0<q;){var xt=q-1>>>1,O=z[xt];if(0<l(O,et))z[xt]=et,z[q]=O,q=xt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var et=z[0],q=z.pop();if(q!==et){z[0]=q;t:for(var xt=0,O=z.length,V=O>>>1;xt<V;){var st=2*(xt+1)-1,ht=z[st],X=st+1,ct=z[X];if(0>l(ht,q))X<O&&0>l(ct,ht)?(z[xt]=ct,z[X]=q,xt=X):(z[xt]=ht,z[st]=q,xt=st);else if(X<O&&0>l(ct,q))z[xt]=ct,z[X]=q,xt=X;else break t}}return et}function l(z,et){var q=z.sortIndex-et.sortIndex;return q!==0?q:z.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,v=null,_=3,y=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(z){for(var et=i(p);et!==null;){if(et.callback===null)s(p);else if(et.startTime<=z)s(p),et.sortIndex=et.expirationTime,t(m,et);else break;et=i(p)}}function k(z){if(T=!1,R(z),!E)if(i(m)!==null)E=!0,I||(I=!0,$());else{var et=i(p);et!==null&&dt(k,et.startTime-z)}}var I=!1,B=-1,G=5,C=-1;function b(){return M?!0:!(r.unstable_now()-C<G)}function H(){if(M=!1,I){var z=r.unstable_now();C=z;var et=!0;try{t:{E=!1,T&&(T=!1,N(B),B=-1),y=!0;var q=_;try{e:{for(R(z),v=i(m);v!==null&&!(v.expirationTime>z&&b());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,_=v.priorityLevel;var O=xt(v.expirationTime<=z);if(z=r.unstable_now(),typeof O=="function"){v.callback=O,R(z),et=!0;break e}v===i(m)&&s(m),R(z)}else s(m);v=i(m)}if(v!==null)et=!0;else{var V=i(p);V!==null&&dt(k,V.startTime-z),et=!1}}break t}finally{v=null,_=q,y=!1}et=void 0}}finally{et?$():I=!1}}}var $;if(typeof U=="function")$=function(){U(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ot=tt.port2;tt.port1.onmessage=H,$=function(){ot.postMessage(null)}}else $=function(){x(H,0)};function dt(z,et){B=x(function(){z(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(z){switch(_){case 1:case 2:case 3:var et=3;break;default:et=_}var q=_;_=et;try{return z()}finally{_=q}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,et){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=_;_=z;try{return et()}finally{_=q}},r.unstable_scheduleCallback=function(z,et,q){var xt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?xt+q:xt):q=xt,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,z={id:g++,callback:et,priorityLevel:z,startTime:q,expirationTime:O,sortIndex:-1},q>xt?(z.sortIndex=q,t(p,z),i(m)===null&&z===i(p)&&(T?(N(B),B=-1):T=!0,dt(k,q-xt))):(z.sortIndex=O,t(m,z),E||y||(E=!0,I||(I=!0,$()))),z},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(z){var et=_;return function(){var q=_;_=et;try{return z.apply(this,arguments)}finally{_=q}}}}(eh)),eh}var bg;function P1(){return bg||(bg=1,th.exports=O1()),th.exports}var nh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function z1(){if(Tg)return Rn;Tg=1;var r=Ad();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var Ag;function I1(){if(Ag)return nh.exports;Ag=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),nh.exports=z1(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function B1(){if(wg)return Po;wg=1;var r=P1(),t=Ad(),i=I1();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),e;if(h===o)return d(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,w=u.child;w;){if(w===a){S=!0,a=u,o=h;break}if(w===o){S=!0,o=u,a=h;break}w=w.sibling}if(!S){for(w=h.child;w;){if(w===a){S=!0,a=h,o=u;break}if(w===o){S=!0,o=h,a=u;break}w=w.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),b=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case k:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case U:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case G:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var dt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},xt=[],O=-1;function V(e){return{current:e}}function st(e){0>O||(e.current=xt[O],xt[O]=null,O--)}function ht(e,n){O++,xt[O]=e.current,e.current=n}var X=V(null),ct=V(null),mt=V(null),bt=V(null);function wt(e,n){switch(ht(mt,n),ht(ct,e),ht(X,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?q0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=q0(n),e=Y0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(X),ht(X,e)}function Xt(){st(X),st(ct),st(mt)}function te(e){e.memoizedState!==null&&ht(bt,e);var n=X.current,a=Y0(n,e.type);n!==a&&(ht(ct,e),ht(X,a))}function de(e){ct.current===e&&(st(X),st(ct)),bt.current===e&&(st(bt),Co._currentValue=q)}var ie=Object.prototype.hasOwnProperty,Rt=r.unstable_scheduleCallback,j=r.unstable_cancelCallback,oe=r.unstable_shouldYield,Vt=r.unstable_requestPaint,Gt=r.unstable_now,Ht=r.unstable_getCurrentPriorityLevel,Ut=r.unstable_ImmediatePriority,Lt=r.unstable_UserBlockingPriority,P=r.unstable_NormalPriority,A=r.unstable_LowPriority,at=r.unstable_IdlePriority,yt=r.log,Et=r.unstable_setDisableYieldValue,vt=null,It=null;function Ct(e){if(typeof yt=="function"&&Et(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(vt,e)}catch{}}var Dt=Math.clz32?Math.clz32:kt,ge=Math.log,Tt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(ge(e)/Tt|0)|0}var Qt=256,ee=4194304;function Bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=Bt(o):(S&=w,S!==0?u=Bt(S):a||(a=w&~e,a!==0&&(u=Bt(a))))):(w=o&~h,w!==0?u=Bt(w):S!==0?u=Bt(S):a||(a=o&~e,a!==0&&(u=Bt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Pe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=Qt;return Qt<<=1,(Qt&4194048)===0&&(Qt=256),e}function Nt(){var e=ee;return ee<<=1,(ee&62914560)===0&&(ee=4194304),e}function pt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Mt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ft(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,F=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var gt=31-Dt(a),St=1<<gt;w[gt]=0,F[gt]=-1;var rt=it[gt];if(rt!==null)for(it[gt]=null,gt=0;gt<rt.length;gt++){var ft=rt[gt];ft!==null&&(ft.lane&=-536870913)}a&=~St}o!==0&&Pt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Pt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Dt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function le(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Dt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:dg(e.type))}function Wn(e,n){var a=et.p;try{return et.p=e,n()}finally{et.p=a}}var dn=Math.random().toString(36).slice(2),ln="__reactFiber$"+dn,Sn="__reactProps$"+dn,Bn="__reactContainer$"+dn,qa="__reactEvents$"+dn,$o="__reactListeners$"+dn,tl="__reactHandles$"+dn,Ya="__reactResources$"+dn,fa="__reactMarker$"+dn;function ha(e){delete e[ln],delete e[Sn],delete e[qa],delete e[$o],delete e[tl]}function zi(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Bn]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=J0(e);e!==null;){if(a=e[ln])return a;e=J0(e)}return n}e=a,a=e.parentNode}return null}function Ii(e){if(e=e[ln]||e[Bn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function da(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function an(e){e[fa]=!0}var D=new Set,K={};function lt(e,n){ut(e,n),ut(e+"Capture",n)}function ut(e,n){for(K[e]=n,e=0;e<n.length;e++)D.add(n[e])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),At={},zt={};function Yt(e){return ie.call(zt,e)?!0:ie.call(At,e)?!1:J.test(e)?zt[e]=!0:(At[e]=!0,!1)}function Wt(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Jt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var qt,Me;function Te(e){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",Me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+e+Me}var Ue=!1;function pn(e,n){if(!e||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ft){var rt=ft}Reflect.construct(e,[],St)}else{try{St.call()}catch(ft){rt=ft}e.call(St.prototype)}}else{try{throw Error()}catch(ft){rt=ft}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ft){if(ft&&rt&&typeof ft.stack=="string")return[ft.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],w=h[1];if(S&&w){var F=S.split(`
`),it=w.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===it.length)for(o=F.length-1,u=it.length-1;1<=o&&0<=u&&F[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==it[u]){var gt=`
`+F[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Te(a):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te("Lazy");case 13:return Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return pn(e.type,!1);case 11:return pn(e.type.render,!1);case 1:return pn(e.type,!0);case 31:return Te("Activity");default:return""}}function Zt(e){try{var n="";do n+=Ce(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Qe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ae(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qn(e){var n=Ae(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pi(e){e._valueTracker||(e._valueTracker=qn(e))}function An(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ae(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ge=/[\n"\\]/g;function Ye(e){return e.replace(Ge,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(e,n,a,o,u,h,S,w){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Qe(n)):e.value!==""+Qe(n)&&(e.value=""+Qe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?ai(e,S,Qe(n)):a!=null?ai(e,S,Qe(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Qe(w):e.removeAttribute("name")}function On(e,n,a,o,u,h,S,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+Qe(a):"",n=n!=null?""+Qe(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function ai(e,n,a){n==="number"&&wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Qe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Hr(e,n,a){if(n!=null&&(n=""+Qe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Qe(a):""}function Wd(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Qe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ls(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var wx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||wx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Yd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&qd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&qd(e,h,n[h])}function Zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return Cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Kc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ns=null;function Zd(e){var n=Ii(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(s(90));Bi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&An(o)}break t;case"textarea":Hr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Pn(e,!!a.multiple,n,!1)}}}var Jc=!1;function Kd(e,n,a){if(Jc)return e(n,a);Jc=!0;try{var o=e(n);return o}finally{if(Jc=!1,(Us!==null||Ns!==null)&&(Hl(),Us&&(n=Us,e=Ns,Ns=Us=null,Zd(n),e)))for(n=0;n<e.length;n++)Zd(e[n])}}function Gr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Fi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{$c=!1}var pa=null,tu=null,nl=null;function Qd(){if(nl)return nl;var e,n=tu,a=n.length,o,u="value"in pa?pa.value:pa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return nl=u.slice(e,1<o?1-o:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function Jd(){return!1}function Fn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?al:Jd,this.isPropagationStopped=Jd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Fn(Ka),kr=g({},Ka,{view:0,detail:0}),Dx=Fn(kr),eu,nu,Xr,rl=g({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(eu=e.screenX-Xr.screenX,nu=e.screenY-Xr.screenY):nu=eu=0,Xr=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),$d=Fn(rl),Lx=g({},rl,{dataTransfer:0}),Ux=Fn(Lx),Nx=g({},kr,{relatedTarget:0}),iu=Fn(Nx),Ox=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Px=Fn(Ox),zx=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ix=Fn(zx),Bx=g({},Ka,{data:0}),tp=Fn(Bx),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gx[e])?!!n[e]:!1}function au(){return Vx}var kx=g({},kr,{key:function(e){if(e.key){var n=Fx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xx=Fn(kx),jx=g({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Fn(jx),Wx=g({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),qx=Fn(Wx),Yx=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=Fn(Yx),Kx=g({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Fn(Kx),Jx=g({},Ka,{newState:0,oldState:0}),$x=Fn(Jx),t_=[9,13,27,32],su=Fi&&"CompositionEvent"in window,jr=null;Fi&&"documentMode"in document&&(jr=document.documentMode);var e_=Fi&&"TextEvent"in window&&!jr,np=Fi&&(!su||jr&&8<jr&&11>=jr),ip=" ",ap=!1;function sp(e,n){switch(e){case"keyup":return t_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function n_(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return e=n.data,e===ip&&ap?null:e;default:return null}}function i_(e,n){if(Os)return e==="compositionend"||!su&&sp(e,n)?(e=Qd(),nl=tu=pa=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var a_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!a_[e.type]:n==="textarea"}function lp(e,n,a,o){Us?Ns?Ns.push(o):Ns=[o]:Us=o,n=Wl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Wr=null,qr=null;function s_(e){V0(e,0)}function ol(e){var n=Za(e);if(An(n))return e}function cp(e,n){if(e==="change")return n}var up=!1;if(Fi){var ru;if(Fi){var ou="oninput"in document;if(!ou){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),ou=typeof fp.oninput=="function"}ru=ou}else ru=!1;up=ru&&(!document.documentMode||9<document.documentMode)}function hp(){Wr&&(Wr.detachEvent("onpropertychange",dp),qr=Wr=null)}function dp(e){if(e.propertyName==="value"&&ol(qr)){var n=[];lp(n,qr,e,Qc(e)),Kd(s_,n)}}function r_(e,n,a){e==="focusin"?(hp(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",dp)):e==="focusout"&&hp()}function o_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(qr)}function l_(e,n){if(e==="click")return ol(n)}function c_(e,n){if(e==="input"||e==="change")return ol(n)}function u_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:u_;function Yr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ie.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,n){var a=pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pp(a)}}function gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=wi(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var f_=Fi&&"documentMode"in document&&11>=document.documentMode,Ps=null,cu=null,Zr=null,uu=!1;function xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uu||Ps==null||Ps!==wi(o)||(o=Ps,"selectionStart"in o&&lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&Yr(Zr,o)||(Zr=o,o=Wl(cu,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ps)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},fu={},_p={};Fi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ja(e){if(fu[e])return fu[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return fu[e]=n[a];return e}var yp=Ja("animationend"),Mp=Ja("animationiteration"),Sp=Ja("animationstart"),h_=Ja("transitionrun"),d_=Ja("transitionstart"),p_=Ja("transitioncancel"),Ep=Ja("transitionend"),bp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function mi(e,n){bp.set(e,n),lt(n,[e])}var Tp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Zt(n)},Tp.set(e,n),n)}return{value:e,source:n,stack:Zt(n)}}var ri=[],Is=0,du=0;function ll(){for(var e=Is,n=du=Is=0;n<e;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var h=ri[n];if(ri[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&Ap(a,u,h)}}function cl(e,n,a,o){ri[Is++]=e,ri[Is++]=n,ri[Is++]=a,ri[Is++]=o,du|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pu(e,n,a,o){return cl(e,n,a,o),ul(e)}function Bs(e,n){return cl(e,null,null,n),ul(e)}function Ap(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Dt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function ul(e){if(50<Mo)throw Mo=0,Mf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fs={};function m_(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new m_(e,n,a,o)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")mu(e)&&(S=1);else if(typeof e=="string")S=v1(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Zn(31,a,n,u),e.elementType=C,e.lanes=h,e;case E:return $a(a.children,u,h,n);case T:S=8,u|=24;break;case M:return e=Zn(12,a,n,u|2),e.elementType=M,e.lanes=h,e;case k:return e=Zn(13,a,n,u),e.elementType=k,e.lanes=h,e;case I:return e=Zn(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case U:S=10;break t;case N:S=9;break t;case R:S=11;break t;case B:S=14;break t;case G:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Zn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function $a(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function gu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function vu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Hs=[],Gs=0,hl=null,dl=0,oi=[],li=0,ts=null,Gi=1,Vi="";function es(e,n){Hs[Gs++]=dl,Hs[Gs++]=hl,hl=e,dl=n}function Rp(e,n,a){oi[li++]=Gi,oi[li++]=Vi,oi[li++]=ts,ts=e;var o=Gi;e=Vi;var u=32-Dt(o)-1;o&=~(1<<u),a+=1;var h=32-Dt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Gi=1<<32-Dt(n)+u|a<<u|o,Vi=h+e}else Gi=1<<h|a<<u|o,Vi=e}function xu(e){e.return!==null&&(es(e,1),Rp(e,1,0))}function _u(e){for(;e===hl;)hl=Hs[--Gs],Hs[Gs]=null,dl=Hs[--Gs],Hs[Gs]=null;for(;e===ts;)ts=oi[--li],oi[li]=null,Vi=oi[--li],oi[li]=null,Gi=oi[--li],oi[li]=null}var zn=null,Je=null,Le=!1,ns=null,Ri=!1,yu=Error(s(519));function is(e){var n=Error(s(418,""));throw Jr(si(n,e)),yu}function Cp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Sn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)_e(Eo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),pi(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Wd(n,o.value,o.defaultValue,o.children),pi(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||W0(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=ql),n=!0):n=!1,n||is(e)}function Dp(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:zn=zn.return}}function Kr(e){if(e!==zn)return!1;if(!Le)return Dp(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&Je&&is(e),Dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=vi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Da(e.type)?(e=Gf,Gf=null,Je=e):Je=n):Je=zn?vi(e.stateNode.nextSibling):null;return!0}function Qr(){Je=zn=null,Le=!1}function Lp(){var e=ns;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ns=null),e}function Jr(e){ns===null?ns=[e]:ns.push(e)}var Mu=V(null),as=null,ki=null;function ma(e,n,a){ht(Mu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Mu.current,st(Mu)}function Su(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var w=h;h=u;for(var F=0;F<n.length;F++)if(w.context===n[F]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),Su(h.return,a,e),o||(S=null);break t}h=w.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Su(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function $r(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var w=u.type;Yn(u.pendingProps.value,S.value)||(e!==null?e.push(w):e=[w])}}else if(u===bt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&Eu(n,e,a,o),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Up(as,e)}function ml(e,n){return as===null&&ss(e),Up(e,n)}function Up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var g_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},v_=r.unstable_scheduleCallback,x_=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new g_,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&v_(x_,function(){e.controller.abort()})}var eo=null,Tu=0,Vs=0,ks=null;function __(e,n){if(eo===null){var a=eo=[];Tu=0,Vs=Rf(),ks={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Tu++,n.then(Np,Np),n}function Np(){if(--Tu===0&&eo!==null){ks!==null&&(ks.status="fulfilled");var e=eo;eo=null,Vs=0,ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function y_(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Op=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&__(e,n),Op!==null&&Op(e,n)};var rs=V(null);function Au(){var e=rs.current;return e!==null?e:je.pooledCache}function gl(e,n){n===null?ht(rs,rs.current):ht(rs,n.pool)}function Pp(){var e=Au();return e===null?null:{parent:cn._currentValue,pool:e}}var no=Error(s(460)),zp=Error(s(474)),vl=Error(s(542)),wu={then:function(){}};function Ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xl(){}function Bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(xl,xl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e;default:if(typeof n.status=="string")n.then(xl,xl);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e}throw io=n,no}}var io=null;function Fp(){if(io===null)throw Error(s(459));var e=io;return io=null,e}function Hp(e){if(e===no||e===vl)throw Error(s(483))}var ga=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ul(e),Ap(e,null,a),n}return cl(e,o,n,a),ul(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}function Du(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function so(){if(Lu){var e=ks;if(e!==null)throw e}}function ro(e,n,a,o){Lu=!1;var u=e.updateQueue;ga=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var F=w,it=F.next;F.next=null,S===null?h=it:S.next=it,S=F;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,w=gt.lastBaseUpdate,w!==S&&(w===null?gt.firstBaseUpdate=it:w.next=it,gt.lastBaseUpdate=F))}if(h!==null){var St=u.baseState;S=0,gt=it=F=null,w=h;do{var rt=w.lane&-536870913,ft=rt!==w.lane;if(ft?(Ee&rt)===rt:(o&rt)===rt){rt!==0&&rt===Vs&&(Lu=!0),gt!==null&&(gt=gt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var se=e,$t=w;rt=n;var Be=a;switch($t.tag){case 1:if(se=$t.payload,typeof se=="function"){St=se.call(Be,St,rt);break t}St=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=$t.payload,rt=typeof se=="function"?se.call(Be,St,rt):se,rt==null)break t;St=g({},St,rt);break t;case 2:ga=!0}}rt=w.callback,rt!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[rt]:ft.push(rt))}else ft={lane:rt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},gt===null?(it=gt=ft,F=St):gt=gt.next=ft,S|=rt;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ft=w,w=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);gt===null&&(F=St),u.baseState=F,u.firstBaseUpdate=it,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),Aa|=S,e.lanes=S,e.memoizedState=St}}function Gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gp(a[e],n)}var Xs=V(null),_l=V(0);function kp(e,n){e=Qi,ht(_l,e),ht(Xs,n),Qi=e|n.baseLanes}function Uu(){ht(_l,Qi),ht(Xs,Xs.current)}function Nu(){Qi=_l.current,st(Xs),st(_l)}var _a=0,me=null,ze=null,sn=null,yl=!1,js=!1,os=!1,Ml=0,oo=0,Ws=null,M_=0;function tn(){throw Error(s(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,o,u,h){return _a=h,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Am:wm,os=!1,h=a(o,u),os=!1,js&&(h=jp(n,a,o,u)),Xp(e),h}function Xp(e){z.H=wl;var n=ze!==null&&ze.next!==null;if(_a=0,sn=ze=me=null,yl=!1,oo=0,Ws=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&pl(e)&&(mn=!0))}function jp(e,n,a,o){me=e;var u=0;do{if(js&&(Ws=null),oo=0,js=!1,25<=u)throw Error(s(301));if(u+=1,sn=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=R_,h=n(a,o)}while(js);return h}function S_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?lo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(me.flags|=1024),n}function zu(){var e=Ml!==0;return Ml=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yl=!1}_a=0,sn=ze=me=null,js=!1,oo=Ml=0,Ws=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?me.memoizedState=sn=e:sn=sn.next=e,sn}function rn(){if(ze===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=sn===null?me.memoizedState:sn.next;if(n!==null)sn=n,ze=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},sn===null?me.memoizedState=sn=e:sn=sn.next=e}return sn}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var n=oo;return oo+=1,Ws===null&&(Ws=[]),e=Bp(Ws,e,n),n=me,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Am:wm),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===U)return wn(e)}throw Error(s(438,String(e)))}function Hu(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fu(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=b;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function El(e){var n=rn();return Gu(n,ze,e)}function Gu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var w=S=null,F=null,it=n,gt=!1;do{var St=it.lane&-536870913;if(St!==it.lane?(Ee&St)===St:(_a&St)===St){var rt=it.revertLane;if(rt===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),St===Vs&&(gt=!0);else if((_a&rt)===rt){it=it.next,rt===Vs&&(gt=!0);continue}else St={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(w=F=St,S=h):F=F.next=St,me.lanes|=rt,Aa|=rt;St=it.action,os&&a(h,St),h=it.hasEagerState?it.eagerState:a(h,St)}else rt={lane:St,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(w=F=rt,S=h):F=F.next=rt,me.lanes|=St,Aa|=St;it=it.next}while(it!==null&&it!==n);if(F===null?S=h:F.next=w,!Yn(h,e.memoizedState)&&(mn=!0,gt&&(a=ks,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vu(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Yn(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Wp(e,n,a){var o=me,u=rn(),h=Le;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Yn((ze||u).memoizedState,a);S&&(u.memoizedState=a,mn=!0),u=u.queue;var w=Zp.bind(null,o,u,e);if(co(2048,8,w,[e]),u.getSnapshot!==n||S||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,qs(9,bl(),Yp.bind(null,o,u,a,n),null),je===null)throw Error(s(349));h||(_a&124)!==0||qp(o,n,a)}return a}function qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Fu(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Yp(e,n,a,o){n.value=a,n.getSnapshot=o,Kp(n)&&Qp(e)}function Zp(e,n,a){return a(function(){Kp(n)&&Qp(e)})}function Kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Qp(e){var n=Bs(e,2);n!==null&&ti(n,e,2)}function ku(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),os){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function Jp(e,n,a,o){return e.baseState=a,Gu(e,ze,typeof o=="function"?o:ji)}function E_(e,n,a,o,u){if(Al(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,$p(n,h)):(h.next=a.next,n.pending=a.next=h)}}function $p(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=z.T,S={};z.T=S;try{var w=a(u,o),F=z.S;F!==null&&F(S,w),tm(e,n,w)}catch(it){Xu(e,n,it)}finally{z.T=h}}else try{h=a(u,o),tm(e,n,h)}catch(it){Xu(e,n,it)}}function tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){em(e,n,o)},function(o){return Xu(e,n,o)}):em(e,n,a)}function em(e,n,a){n.status="fulfilled",n.value=a,nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,$p(e,a)))}function Xu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,nm(n),n=n.next;while(n!==o)}e.action=null}function nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function im(e,n){return n}function am(e,n){if(Le){var a=je.formState;if(a!==null){t:{var o=me;if(Le){if(Je){e:{for(var u=Je,h=Ri;u.nodeType!==8;){if(!h){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Je=vi(u.nextSibling),o=u.data==="F!";break t}}is(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},a.queue=o,a=Em.bind(null,me,o),o.dispatch=a,o=ku(!1),h=Zu.bind(null,me,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=E_.bind(null,me,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function sm(e){var n=rn();return rm(n,ze,e)}function rm(e,n,a){if(n=Gu(e,n,im)[0],e=El(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=lo(n)}catch(S){throw S===no?vl:S}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,qs(9,bl(),b_.bind(null,u,a),null)),[o,h,e]}function b_(e,n){e.action=n}function om(e){var n=rn(),a=ze;if(a!==null)return rm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function qs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=me.updateQueue,n===null&&(n=Fu(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function bl(){return{destroy:void 0,resource:void 0}}function lm(){return rn().memoizedState}function Tl(e,n,a,o){var u=Hn();o=o===void 0?null:o,me.flags|=e,u.memoizedState=qs(1|n,bl(),a,o)}function co(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;ze!==null&&o!==null&&Ou(o,ze.memoizedState.deps)?u.memoizedState=qs(n,h,a,o):(me.flags|=e,u.memoizedState=qs(1|n,h,a,o))}function cm(e,n){Tl(8390656,8,e,n)}function um(e,n){co(2048,8,e,n)}function fm(e,n){return co(4,2,e,n)}function hm(e,n){return co(4,4,e,n)}function dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pm(e,n,a){a=a!=null?a.concat([e]):null,co(4,4,dm.bind(null,n,e),a)}function ju(){}function mm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ou(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function gm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ou(n,o[1]))return o[0];if(o=e(),os){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o}function Wu(e,n,a){return a===void 0||(_a&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=_0(),me.lanes|=e,Aa|=e,a)}function vm(e,n,a,o){return Yn(a,n)?a:Xs.current!==null?(e=Wu(e,a,o),Yn(e,n)||(mn=!0),e):(_a&42)===0?(mn=!0,e.memoizedState=a):(e=_0(),me.lanes|=e,Aa|=e,n)}function xm(e,n,a,o,u){var h=et.p;et.p=h!==0&&8>h?h:8;var S=z.T,w={};z.T=w,Zu(e,!1,n,a);try{var F=u(),it=z.S;if(it!==null&&it(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var gt=y_(F,o);uo(e,n,gt,$n(e))}else uo(e,n,o,$n(e))}catch(St){uo(e,n,{then:function(){},status:"rejected",reason:St},$n())}finally{et.p=h,z.T=S}}function T_(){}function qu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=_m(e).queue;xm(e,u,n,q,a===null?T_:function(){return ym(e),a(o)})}function _m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ym(e){var n=_m(e).next.queue;uo(e,n,{},$n())}function Yu(){return wn(Co)}function Mm(){return rn().memoizedState}function Sm(){return rn().memoizedState}function A_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=va(a);var o=xa(n,e,a);o!==null&&(ti(o,n,a),ao(o,n,a)),n={cache:bu()},e.payload=n;return}n=n.return}}function w_(e,n,a){var o=$n();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?bm(n,a):(a=pu(e,n,a,o),a!==null&&(ti(a,e,o),Tm(a,n,o)))}function Em(e,n,a){var o=$n();uo(e,n,a,o)}function uo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))bm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,w=h(S,a);if(u.hasEagerState=!0,u.eagerState=w,Yn(w,S))return cl(e,n,u,0),je===null&&ll(),!1}catch{}finally{}if(a=pu(e,n,u,o),a!==null)return ti(a,e,o),Tm(a,n,o),!0}return!1}function Zu(e,n,a,o){if(o={lane:2,revertLane:Rf(),action:o,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(s(479))}else n=pu(e,a,o,2),n!==null&&ti(n,e,2)}function Al(e){var n=e.alternate;return e===me||n!==null&&n===me}function bm(e,n){js=yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Tm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}var wl={readContext:wn,use:Sl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Am={readContext:wn,use:Sl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(os){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(os){Ct(!0);try{a(n)}finally{Ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=w_.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=Em.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=Hn();return Wu(a,e,n)},useTransition:function(){var e=ku(!1);return e=xm.bind(null,me,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=me,u=Hn();if(Le){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Ee&124)!==0||qp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,cm(Zp.bind(null,o,h,e),[e]),o.flags|=2048,qs(9,bl(),Yp.bind(null,o,h,a,n),null),a},useId:function(){var e=Hn(),n=je.identifierPrefix;if(Le){var a=Vi,o=Gi;a=(o&~(1<<32-Dt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=M_++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:am,useActionState:am,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hu,useCacheRefresh:function(){return Hn().memoizedState=A_.bind(null,me)}},wm={readContext:wn,use:Sl,useCallback:mm,useContext:wn,useEffect:um,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:El,useRef:lm,useState:function(){return El(ji)},useDebugValue:ju,useDeferredValue:function(e,n){var a=rn();return vm(a,ze.memoizedState,e,n)},useTransition:function(){var e=El(ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Wp,useId:Mm,useHostTransitionStatus:Yu,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var a=rn();return Jp(a,ze,e,n)},useMemoCache:Hu,useCacheRefresh:Sm},R_={readContext:wn,use:Sl,useCallback:mm,useContext:wn,useEffect:um,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Vu,useRef:lm,useState:function(){return Vu(ji)},useDebugValue:ju,useDeferredValue:function(e,n){var a=rn();return ze===null?Wu(a,e,n):vm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Vu(ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Wp,useId:Mm,useHostTransitionStatus:Yu,useFormState:om,useActionState:om,useOptimistic:function(e,n){var a=rn();return ze!==null?Jp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Sm},Ys=null,fo=0;function Rl(e){var n=fo;return fo+=1,Ys===null&&(Ys=[]),Bp(Ys,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rm(e){var n=e._init;return n(e._payload)}function Cm(e){function n(Q,W){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[W],Q.flags|=16):nt.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=Hi(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<W?(Q.flags|=67108866,W):nt):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,W,nt,_t){return W===null||W.tag!==6?(W=gu(nt,Q.mode,_t),W.return=Q,W):(W=u(W,nt),W.return=Q,W)}function F(Q,W,nt,_t){var jt=nt.type;return jt===E?gt(Q,W,nt.props.children,_t,nt.key):W!==null&&(W.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===G&&Rm(jt)===W.type)?(W=u(W,nt.props),ho(W,nt),W.return=Q,W):(W=fl(nt.type,nt.key,nt.props,null,Q.mode,_t),ho(W,nt),W.return=Q,W)}function it(Q,W,nt,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=vu(nt,Q.mode,_t),W.return=Q,W):(W=u(W,nt.children||[]),W.return=Q,W)}function gt(Q,W,nt,_t,jt){return W===null||W.tag!==7?(W=$a(nt,Q.mode,_t,jt),W.return=Q,W):(W=u(W,nt),W.return=Q,W)}function St(Q,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=gu(""+W,Q.mode,nt),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return nt=fl(W.type,W.key,W.props,null,Q.mode,nt),ho(nt,W),nt.return=Q,nt;case y:return W=vu(W,Q.mode,nt),W.return=Q,W;case G:var _t=W._init;return W=_t(W._payload),St(Q,W,nt)}if(dt(W)||$(W))return W=$a(W,Q.mode,nt,null),W.return=Q,W;if(typeof W.then=="function")return St(Q,Rl(W),nt);if(W.$$typeof===U)return St(Q,ml(Q,W),nt);Cl(Q,W)}return null}function rt(Q,W,nt,_t){var jt=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return jt!==null?null:w(Q,W,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case _:return nt.key===jt?F(Q,W,nt,_t):null;case y:return nt.key===jt?it(Q,W,nt,_t):null;case G:return jt=nt._init,nt=jt(nt._payload),rt(Q,W,nt,_t)}if(dt(nt)||$(nt))return jt!==null?null:gt(Q,W,nt,_t,null);if(typeof nt.then=="function")return rt(Q,W,Rl(nt),_t);if(nt.$$typeof===U)return rt(Q,W,ml(Q,nt),_t);Cl(Q,nt)}return null}function ft(Q,W,nt,_t,jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(nt)||null,w(W,Q,""+_t,jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case _:return Q=Q.get(_t.key===null?nt:_t.key)||null,F(W,Q,_t,jt);case y:return Q=Q.get(_t.key===null?nt:_t.key)||null,it(W,Q,_t,jt);case G:var ve=_t._init;return _t=ve(_t._payload),ft(Q,W,nt,_t,jt)}if(dt(_t)||$(_t))return Q=Q.get(nt)||null,gt(W,Q,_t,jt,null);if(typeof _t.then=="function")return ft(Q,W,nt,Rl(_t),jt);if(_t.$$typeof===U)return ft(Q,W,nt,ml(W,_t),jt);Cl(W,_t)}return null}function se(Q,W,nt,_t){for(var jt=null,ve=null,Kt=W,ne=W=0,vn=null;Kt!==null&&ne<nt.length;ne++){Kt.index>ne?(vn=Kt,Kt=null):vn=Kt.sibling;var De=rt(Q,Kt,nt[ne],_t);if(De===null){Kt===null&&(Kt=vn);break}e&&Kt&&De.alternate===null&&n(Q,Kt),W=h(De,W,ne),ve===null?jt=De:ve.sibling=De,ve=De,Kt=vn}if(ne===nt.length)return a(Q,Kt),Le&&es(Q,ne),jt;if(Kt===null){for(;ne<nt.length;ne++)Kt=St(Q,nt[ne],_t),Kt!==null&&(W=h(Kt,W,ne),ve===null?jt=Kt:ve.sibling=Kt,ve=Kt);return Le&&es(Q,ne),jt}for(Kt=o(Kt);ne<nt.length;ne++)vn=ft(Kt,Q,ne,nt[ne],_t),vn!==null&&(e&&vn.alternate!==null&&Kt.delete(vn.key===null?ne:vn.key),W=h(vn,W,ne),ve===null?jt=vn:ve.sibling=vn,ve=vn);return e&&Kt.forEach(function(Pa){return n(Q,Pa)}),Le&&es(Q,ne),jt}function $t(Q,W,nt,_t){if(nt==null)throw Error(s(151));for(var jt=null,ve=null,Kt=W,ne=W=0,vn=null,De=nt.next();Kt!==null&&!De.done;ne++,De=nt.next()){Kt.index>ne?(vn=Kt,Kt=null):vn=Kt.sibling;var Pa=rt(Q,Kt,De.value,_t);if(Pa===null){Kt===null&&(Kt=vn);break}e&&Kt&&Pa.alternate===null&&n(Q,Kt),W=h(Pa,W,ne),ve===null?jt=Pa:ve.sibling=Pa,ve=Pa,Kt=vn}if(De.done)return a(Q,Kt),Le&&es(Q,ne),jt;if(Kt===null){for(;!De.done;ne++,De=nt.next())De=St(Q,De.value,_t),De!==null&&(W=h(De,W,ne),ve===null?jt=De:ve.sibling=De,ve=De);return Le&&es(Q,ne),jt}for(Kt=o(Kt);!De.done;ne++,De=nt.next())De=ft(Kt,Q,ne,De.value,_t),De!==null&&(e&&De.alternate!==null&&Kt.delete(De.key===null?ne:De.key),W=h(De,W,ne),ve===null?jt=De:ve.sibling=De,ve=De);return e&&Kt.forEach(function(C1){return n(Q,C1)}),Le&&es(Q,ne),jt}function Be(Q,W,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===E&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case _:t:{for(var jt=nt.key;W!==null;){if(W.key===jt){if(jt=nt.type,jt===E){if(W.tag===7){a(Q,W.sibling),_t=u(W,nt.props.children),_t.return=Q,Q=_t;break t}}else if(W.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===G&&Rm(jt)===W.type){a(Q,W.sibling),_t=u(W,nt.props),ho(_t,nt),_t.return=Q,Q=_t;break t}a(Q,W);break}else n(Q,W);W=W.sibling}nt.type===E?(_t=$a(nt.props.children,Q.mode,_t,nt.key),_t.return=Q,Q=_t):(_t=fl(nt.type,nt.key,nt.props,null,Q.mode,_t),ho(_t,nt),_t.return=Q,Q=_t)}return S(Q);case y:t:{for(jt=nt.key;W!==null;){if(W.key===jt)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(Q,W.sibling),_t=u(W,nt.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}_t=vu(nt,Q.mode,_t),_t.return=Q,Q=_t}return S(Q);case G:return jt=nt._init,nt=jt(nt._payload),Be(Q,W,nt,_t)}if(dt(nt))return se(Q,W,nt,_t);if($(nt)){if(jt=$(nt),typeof jt!="function")throw Error(s(150));return nt=jt.call(nt),$t(Q,W,nt,_t)}if(typeof nt.then=="function")return Be(Q,W,Rl(nt),_t);if(nt.$$typeof===U)return Be(Q,W,ml(Q,nt),_t);Cl(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(Q,W.sibling),_t=u(W,nt),_t.return=Q,Q=_t):(a(Q,W),_t=gu(nt,Q.mode,_t),_t.return=Q,Q=_t),S(Q)):a(Q,W)}return function(Q,W,nt,_t){try{fo=0;var jt=Be(Q,W,nt,_t);return Ys=null,jt}catch(Kt){if(Kt===no||Kt===vl)throw Kt;var ve=Zn(29,Kt,null,Q.mode);return ve.lanes=_t,ve.return=Q,ve}finally{}}}var Zs=Cm(!0),Dm=Cm(!1),ci=V(null),Ci=null;function ya(e){var n=e.alternate;ht(un,un.current&1),ht(ci,e),Ci===null&&(n===null||Xs.current!==null||n.memoizedState!==null)&&(Ci=e)}function Lm(e){if(e.tag===22){if(ht(un,un.current),ht(ci,e),Ci===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ci=e)}}else Ma()}function Ma(){ht(un,un.current),ht(ci,ci.current)}function Wi(e){st(ci),Ci===e&&(Ci=null),st(un)}var un=V(0);function Dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ku(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(ti(n,e,o),ao(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(ti(n,e,o),ao(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(ti(n,e,a),ao(n,e,a))}};function Um(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,o)||!Yr(u,h):!0}function Nm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Om(e){Ll(e)}function Pm(e){console.error(e)}function zm(e){Ll(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Im(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Bm(e){return e=va(e),e.tag=3,e}function Fm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Im(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Im(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function C_(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ci.current,a!==null){switch(a.tag){case 13:return Ci===null?Ef():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Tf(e,o,u)),!1;case 22:return a.flags|=65536,o===wu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Tf(e,o,u)),!1}throw Error(s(435,a.tag))}return Tf(e,o,u),Ef(),!1}if(Le)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==yu&&(e=Error(s(422),{cause:o}),Jr(si(e,a)))):(o!==yu&&(n=Error(s(423),{cause:o}),Jr(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=Ju(e.stateNode,o,u),Du(e,u),$e!==4&&($e=2)),!1;var h=Error(s(520),{cause:o});if(h=si(h,a),yo===null?yo=[h]:yo.push(h),$e!==4&&($e=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ju(a.stateNode,o,e),Du(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wa===null||!wa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Bm(u),Fm(u,e,a,o),Du(a,u),!1}a=a.return}while(a!==null);return!1}var Hm=Error(s(461)),mn=!1;function En(e,n,a,o){n.child=e===null?Dm(n,null,a,o):Zs(n,e.child,a,o)}function Gm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var w in o)w!=="ref"&&(S[w]=o[w])}else S=o;return ss(n),o=Pu(e,n,a,S,h,u),w=zu(),e!==null&&!mn?(Iu(e,n,u),qi(e,n,u)):(Le&&w&&xu(n),n.flags|=1,En(e,n,o,u),n.child)}function Vm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!mu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,km(e,n,h,o,u)):(e=fl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!of(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(S,o)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Hi(h,o),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Yr(h,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=h,of(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return $u(e,n,a,o,u)}function Xm(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return jm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,h!==null?h.cachePool:null),h!==null?kp(n,h):Uu(),Lm(n);else return n.lanes=n.childLanes=536870912,jm(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(gl(n,h.cachePool),kp(n,h),Ma(),n.memoizedState=null):(e!==null&&gl(n,null),Uu(),Ma());return En(e,n,u,a),n.child}function jm(e,n,a,o){var u=Au();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&gl(n,null),Uu(),Lm(n),e!==null&&$r(e,n,o,!0),null}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,o,u){return ss(n),a=Pu(e,n,a,o,void 0,u),o=zu(),e!==null&&!mn?(Iu(e,n,u),qi(e,n,u)):(Le&&o&&xu(n),n.flags|=1,En(e,n,a,u),n.child)}function Wm(e,n,a,o,u,h){return ss(n),n.updateQueue=null,a=jp(n,o,a,u),Xp(e),o=zu(),e!==null&&!mn?(Iu(e,n,h),qi(e,n,h)):(Le&&o&&xu(n),n.flags|=1,En(e,n,a,h),n.child)}function qm(e,n,a,o,u){if(ss(n),n.stateNode===null){var h=Fs,S=a.contextType;typeof S=="object"&&S!==null&&(h=wn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Qu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Ru(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?wn(S):Fs,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ku(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Qu.enqueueReplaceState(h,h.state,null),ro(n,o,h,u),so(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var w=n.memoizedProps,F=ls(a,w);h.props=F;var it=h.context,gt=a.contextType;S=Fs,typeof gt=="object"&&gt!==null&&(S=wn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||it!==S)&&Nm(n,h,o,S),ga=!1;var rt=n.memoizedState;h.state=rt,ro(n,o,h,u),so(),it=n.memoizedState,w||rt!==it||ga?(typeof St=="function"&&(Ku(n,a,St,o),it=n.memoizedState),(F=ga||Um(n,a,F,o,rt,it,S))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),h.props=o,h.state=it,h.context=S,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Cu(e,n),S=n.memoizedProps,gt=ls(a,S),h.props=gt,St=n.pendingProps,rt=h.context,it=a.contextType,F=Fs,typeof it=="object"&&it!==null&&(F=wn(it)),w=a.getDerivedStateFromProps,(it=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==St||rt!==F)&&Nm(n,h,o,F),ga=!1,rt=n.memoizedState,h.state=rt,ro(n,o,h,u),so();var ft=n.memoizedState;S!==St||rt!==ft||ga||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof w=="function"&&(Ku(n,a,w,o),ft=n.memoizedState),(gt=ga||Um(n,a,gt,o,rt,ft,F)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(it||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=F,o=gt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Nl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Zs(n,e.child,null,u),n.child=Zs(n,null,a,u)):En(e,n,a,u),n.memoizedState=h.state,e=n.child):e=qi(e,n,u),e}function Ym(e,n,a,o){return Qr(),n.flags|=256,En(e,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Pp()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function Zm(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?ya(n):Ma(),Le){var w=Je,F;if(F=w){t:{for(F=w,w=Ri;F.nodeType!==8;){if(!w){w=null;break t}if(F=vi(F.nextSibling),F===null){w=null;break t}}w=F}w!==null?(n.memoizedState={dehydrated:w,treeContext:ts!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},F=Zn(18,null,null,0),F.stateNode=w,F.return=n,n.child=F,zn=n,Je=null,F=!0):F=!1}F||is(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Hf(w)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return w=o.children,o=o.fallback,u?(Ma(),u=n.mode,w=Ol({mode:"hidden",children:w},u),o=$a(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=ef(a),u.childLanes=nf(e,S,a),n.memoizedState=tf,o):(ya(n),af(n,w))}if(F=e.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(h)n.flags&256?(ya(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),u=o.fallback,w=n.mode,o=Ol({mode:"visible",children:o.children},w),u=$a(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Zs(n,e.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,S,a),n.memoizedState=tf,n=u);else if(ya(n),Hf(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var it=S.dgst;S=it,o=Error(s(419)),o.stack="",o.digest=S,Jr({value:o,source:null,stack:null}),n=sf(e,n,a)}else if(mn||$r(e,n,a,!1),S=(a&e.childLanes)!==0,mn||S){if(S=je,S!==null&&(o=a&-a,o=(o&42)!==0?1:Xe(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Bs(e,o),ti(S,e,o),Hm;w.data==="$?"||Ef(),n=sf(e,n,a)}else w.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Je=vi(w.nextSibling),zn=n,Le=!0,ns=null,Ri=!1,e!==null&&(oi[li++]=Gi,oi[li++]=Vi,oi[li++]=ts,Gi=e.id,Vi=e.overflow,ts=n),n=af(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,w=n.mode,F=e.child,it=F.sibling,o=Hi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,it!==null?u=Hi(it,u):(u=$a(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=e.child.memoizedState,w===null?w=ef(a):(F=w.cachePool,F!==null?(it=cn._currentValue,F=F.parent!==it?{parent:it,pool:it}:F):F=Pp(),w={baseLanes:w.baseLanes|a,cachePool:F}),u.memoizedState=w,u.childLanes=nf(e,S,a),n.memoizedState=tf,o):(ya(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=Zn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return Zs(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Su(e.return,n,a)}function rf(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function Qm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(En(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Km(e,a,n);else if(e.tag===19)Km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(ht(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),rf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}rf(n,!0,a,null,h);break;case"together":rf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($r(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function D_(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ma(n,cn,e.memoizedState.cache),Qr();break;case 27:case 5:te(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(e,n,a):(ya(n),e=qi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Qm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,Xm(e,n,a);case 24:ma(n,cn,e.memoizedState.cache)}return qi(e,n,a)}function Jm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!of(e,a)&&(n.flags&128)===0)return mn=!1,D_(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Le&&(n.flags&1048576)!==0&&Rp(n,dl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")mu(o)?(e=ls(o,e),n.tag=1,n=qm(null,n,o,e,a)):(n.tag=0,n=$u(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===R){n.tag=11,n=Gm(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=Vm(null,n,o,e,a);break t}}throw n=ot(o)||o,Error(s(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ls(o,n.pendingProps),qm(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Cu(e,n),ro(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ma(n,cn,o),o!==h.cache&&Eu(n,[cn],a,!0),so(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Ym(e,n,o,a);break t}else if(o!==u){u=si(Error(s(424)),n),Jr(u),n=Ym(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=vi(e.firstChild),zn=n,Le=!0,ns=null,Ri=!0,a=Dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qr(),o===u){n=qi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=ng(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,o=Yl(mt.current).createElement(a),o[ln]=n,o[Sn]=e,Tn(o,a,e),an(o),n.stateNode=o):n.memoizedState=ng(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&Le&&(o=n.stateNode=$0(n.type,n.pendingProps,mt.current),zn=n,Ri=!0,u=Je,Da(n.type)?(Gf=u,Je=vi(o.firstChild)):Je=u),En(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=o=Je)&&(o=a1(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,zn=n,Je=vi(o.firstChild),Ri=!1,u=!0):u=!1),u||is(n)),te(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,If(u,h)?o=null:S!==null&&If(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,S_,null,null,a),Co._currentValue=u),Nl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Le&&((e=a=Je)&&(a=s1(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,zn=n,Je=null,e=!0):e=!1),e||is(n)),null;case 13:return Zm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Zs(n,null,o,a):En(e,n,o,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ss(n),u=wn(u),o=o(u),n.flags|=1,En(e,n,o,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return km(e,n,n.type,n.pendingProps,a);case 19:return Qm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ol(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Xm(e,n,a);case 24:return ss(n),o=wn(cn),e===null?(u=Au(),u===null&&(u=je,h=bu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Ru(n),ma(n,cn,u)):((e.lanes&a)!==0&&(Cu(e,n),ro(n,null,null,a),so()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,cn,o)):(o=h.cache,ma(n,cn,o),o!==u.cache&&Eu(n,[cn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function $m(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!og(n)){if(n=ci.current,n!==null&&((Ee&4194048)===Ee?Ci!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==Ci))throw io=wu,zp;e.flags|=8192}}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,$s|=n)}function po(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function L_(e,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(cn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ze(n),$m(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ze(n),$m(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),Ze(n),n.flags&=-16777217),null;case 27:de(n),a=mt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=X.current,Kr(n)?Cp(n):(e=$0(u,o,a),n.stateNode=e,Yi(n))}return Ze(n),null;case 5:if(de(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(e=X.current,Kr(n))Cp(n);else{switch(u=Yl(mt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[ln]=n,e[Sn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Tn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=mt.current,Kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||W0(e.nodeValue,a)),e||is(n)}else e=Yl(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else Qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Lp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Ze(n),null;case 4:return Xt(),e===null&&Uf(n.stateNode.containerInfo),Ze(n),null;case 10:return Xi(n.type),Ze(n),null;case 19:if(st(un),u=n.memoizedState,u===null)return Ze(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)po(u,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Dl(e),h!==null){for(n.flags|=128,po(u,!1),e=h.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wp(a,e),a=a.sibling;return ht(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&Gt()>Bl&&(n.flags|=128,o=!0,po(u,!1),n.lanes=4194304)}else{if(!o)if(e=Dl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),po(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Le)return Ze(n),null}else 2*Gt()-u.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,o=!0,po(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Gt(),n.sibling=null,e=un.current,ht(un,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return Wi(n),Nu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&st(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function U_(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(cn),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return st(un),null;case 4:return Xt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Wi(n),Nu(),e!==null&&st(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(cn),null;case 25:return null;default:return null}}function t0(e,n){switch(_u(n),n.tag){case 3:Xi(cn),Xt();break;case 26:case 27:case 5:de(n);break;case 4:Xt();break;case 13:Wi(n);break;case 19:st(un);break;case 10:Xi(n.type);break;case 22:case 23:Wi(n),Nu(),e!==null&&st(rs);break;case 24:Xi(cn)}}function mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(w){Ve(n,n.return,w)}}function Sa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,u=n;var F=a,it=w;try{it()}catch(gt){Ve(u,F,gt)}}}o=o.next}while(o!==h)}}catch(gt){Ve(n,n.return,gt)}}function e0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Vp(n,a)}catch(o){Ve(e,e.return,o)}}}function n0(e,n,a){a.props=ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function i0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function lf(e,n,a){try{var o=e.stateNode;$_(o,e.type,a,n),o[Sn]=n}catch(u){Ve(e,e.return,u)}}function a0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||a0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ql));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function s0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[ln]=e,n[Sn]=a}catch(h){Ve(e,e.return,h)}}var Zi=!1,en=!1,ff=!1,r0=typeof WeakSet=="function"?WeakSet:Set,gn=null;function N_(e,n){if(e=e.containerInfo,Pf=tc,e=vp(e),lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,w=-1,F=-1,it=0,gt=0,St=e,rt=null;e:for(;;){for(var ft;St!==a||u!==0&&St.nodeType!==3||(w=S+u),St!==h||o!==0&&St.nodeType!==3||(F=S+o),St.nodeType===3&&(S+=St.nodeValue.length),(ft=St.firstChild)!==null;)rt=St,St=ft;for(;;){if(St===e)break e;if(rt===a&&++it===u&&(w=S),rt===h&&++gt===o&&(F=S),(ft=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=ft}a=w===-1||F===-1?null:{start:w,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},tc=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var se=ls(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(se,h),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ve(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function o0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),o&4&&mo(5,a);break;case 1:if(Ea(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ve(a,a.return,S)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ve(a,a.return,S)}}o&64&&e0(a),o&512&&go(a,a.return);break;case 3:if(Ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(e,n)}catch(S){Ve(a,a.return,S)}}break;case 27:n===null&&o&4&&s0(a);case 26:case 5:Ea(e,a),n===null&&o&4&&i0(a),o&512&&go(a,a.return);break;case 12:Ea(e,a);break;case 13:Ea(e,a),o&4&&u0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=V_.bind(null,a),r1(e,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||en,u=Zi;var h=en;Zi=o,(en=n)&&!h?ba(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),Zi=u,en=h}break;case 30:break;default:Ea(e,a)}}function l0(e){var n=e.alternate;n!==null&&(e.alternate=null,l0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ha(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Gn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)c0(e,n,a),a=a.sibling}function c0(e,n,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(vt,a)}catch{}switch(a.tag){case 26:en||Di(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Di(a,n);var o=qe,u=Gn;Da(a.type)&&(qe=a.stateNode,Gn=!1),Ki(e,n,a),To(a.stateNode),qe=o,Gn=u;break;case 5:en||Di(a,n);case 6:if(o=qe,u=Gn,qe=null,Ki(e,n,a),qe=o,Gn=u,qe!==null)if(Gn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(h){Ve(a,n,h)}else try{qe.removeChild(a.stateNode)}catch(h){Ve(a,n,h)}break;case 18:qe!==null&&(Gn?(e=qe,Q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),No(e)):Q0(qe,a.stateNode));break;case 4:o=qe,u=Gn,qe=a.stateNode.containerInfo,Gn=!0,Ki(e,n,a),qe=o,Gn=u;break;case 0:case 11:case 14:case 15:en||Sa(2,a,n),en||Sa(4,a,n),Ki(e,n,a);break;case 1:en||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&n0(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ki(e,n,a),en=o;break;default:Ki(e,n,a)}}function u0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(a){Ve(n,n.return,a)}}function O_(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new r0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new r0),n;default:throw Error(s(435,e.tag))}}function hf(e,n){var a=O_(e);n.forEach(function(o){var u=k_.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,w=S;t:for(;w!==null;){switch(w.tag){case 27:if(Da(w.type)){qe=w.stateNode,Gn=!1;break t}break;case 5:qe=w.stateNode,Gn=!1;break t;case 3:case 4:qe=w.stateNode.containerInfo,Gn=!0;break t}w=w.return}if(qe===null)throw Error(s(160));c0(h,S,u),qe=null,Gn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)f0(n,e),n=n.sibling}var gi=null;function f0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Qn(e),o&4&&(Sa(3,e,e.return),mo(3,e),Sa(5,e,e.return));break;case 1:Kn(n,e),Qn(e),o&512&&(en||a===null||Di(a,a.return)),o&64&&Zi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(Kn(n,e),Qn(e),o&512&&(en||a===null||Di(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[fa]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Tn(h,o,a),h[ln]=e,an(h),o=h;break t;case"link":var S=sg("link","href",u).get(o+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(h=S[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=sg("meta","content",u).get(o+(a.content||""))){for(w=0;w<S.length;w++)if(h=S[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[ln]=e,an(h),o=h}e.stateNode=o}else rg(u,e.type,e.stateNode);else e.stateNode=ag(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?rg(u,e.type,e.stateNode):ag(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Qn(e),o&512&&(en||a===null||Di(a,a.return)),a!==null&&o&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Qn(e),o&512&&(en||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Ls(u,"")}catch(ft){Ve(e,e.return,ft)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,lf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(ff=!0);break;case 6:if(Kn(n,e),Qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ft){Ve(e,e.return,ft)}}break;case 3:if(Ql=null,u=gi,gi=Zl(n.containerInfo),Kn(n,e),gi=u,Qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{No(n.containerInfo)}catch(ft){Ve(e,e.return,ft)}ff&&(ff=!1,h0(e));break;case 4:o=gi,gi=Zl(e.stateNode.containerInfo),Kn(n,e),Qn(e),gi=o;break;case 12:Kn(n,e),Qn(e);break;case 13:Kn(n,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=Gt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,it=Zi,gt=en;if(Zi=it||u,en=gt||F,Kn(n,e),en=gt,Zi=it,Qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Zi||en||cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=F.stateNode;var St=F.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;w.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ft){Ve(F,F.return,ft)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ft){Ve(F,F.return,ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hf(e,a))));break;case 19:Kn(n,e),Qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 30:break;case 21:break;default:Kn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(a0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=cf(e);zl(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ls(S,""),a.flags&=-33);var w=cf(e);zl(e,w,S);break;case 3:case 4:var F=a.stateNode.containerInfo,it=cf(e);uf(e,it,F);break;default:throw Error(s(161))}}catch(gt){Ve(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function h0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;h0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)o0(e,n.alternate,n),n=n.sibling}function cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),cs(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&n0(n,n.return,a),cs(n);break;case 27:To(n.stateNode);case 26:case 5:Di(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:ba(u,h,a),mo(4,h);break;case 1:if(ba(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ve(o,o.return,it)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Gp(F[u],w)}catch(it){Ve(o,o.return,it)}}a&&S&64&&e0(h),go(h,h.return);break;case 27:s0(h);case 26:case 5:ba(u,h,a),a&&o===null&&S&4&&i0(h),go(h,h.return);break;case 12:ba(u,h,a);break;case 13:ba(u,h,a),a&&S&4&&u0(u,h);break;case 22:h.memoizedState===null&&ba(u,h,a),go(h,h.return);break;case 30:break;default:ba(u,h,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&to(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)d0(e,n,a,o),n=n.sibling}function d0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&mo(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,w=h.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ve(n,n.return,F)}}else Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Li(e,n,a,o):vo(e,n):h._visibility&2?Li(e,n,a,o):(h._visibility|=2,Ks(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&df(S,n);break;case 24:Li(e,n,a,o),u&2048&&pf(n.alternate,n);break;default:Li(e,n,a,o)}}function Ks(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,S=n,w=a,F=o,it=S.flags;switch(S.tag){case 0:case 11:case 15:Ks(h,S,w,F,u),mo(8,S);break;case 23:break;case 22:var gt=S.stateNode;S.memoizedState!==null?gt._visibility&2?Ks(h,S,w,F,u):vo(h,S):(gt._visibility|=2,Ks(h,S,w,F,u)),u&&it&2048&&df(S.alternate,S);break;case 24:Ks(h,S,w,F,u),u&&it&2048&&pf(S.alternate,S);break;default:Ks(h,S,w,F,u)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&df(o.alternate,o);break;case 24:vo(a,o),u&2048&&pf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var xo=8192;function Qs(e){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)p0(e),e=e.sibling}function p0(e){switch(e.tag){case 26:Qs(e),e.flags&xo&&e.memoizedState!==null&&_1(gi,e.memoizedState,e.memoizedProps);break;case 5:Qs(e);break;case 3:case 4:var n=gi;gi=Zl(e.stateNode.containerInfo),Qs(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,Qs(e),xo=n):Qs(e));break;default:Qs(e)}}function m0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,v0(o,e)}m0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)g0(e),e=e.sibling}function g0(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):_o(e);break;default:_o(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,v0(o,e)}m0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function v0(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,h=o.return;if(l0(o),o===a){gn=null;break t}if(u!==null){u.return=h,gn=u;break t}gn=h}}}var P_={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},z_=typeof WeakMap=="function"?WeakMap:Map,Ne=0,je=null,xe=null,Ee=0,Oe=0,Jn=null,Ta=!1,Js=!1,mf=!1,Qi=0,$e=0,Aa=0,us=0,gf=0,ui=0,$s=0,yo=null,Vn=null,vf=!1,xf=0,Bl=1/0,Fl=null,wa=null,bn=0,Ra=null,tr=null,er=0,_f=0,yf=null,x0=null,Mo=0,Mf=null;function $n(){if((Ne&2)!==0&&Ee!==0)return Ee&-Ee;if(z.T!==null){var e=Vs;return e!==0?e:Rf()}return Re()}function _0(){ui===0&&(ui=(Ee&536870912)===0||Le?Y():536870912);var e=ci.current;return e!==null&&(e.flags|=32),ui}function ti(e,n,a){(e===je&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Ca(e,Ee,ui,!1)),Mt(e,a),((Ne&2)===0||e!==je)&&(e===je&&((Ne&2)===0&&(us|=a),$e===4&&Ca(e,Ee,ui,!1)),Ui(e))}function y0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||re(e,n),u=o?F_(e,n):bf(e,n,!0),h=o;do{if(u===0){Js&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!I_(a)){u=bf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var w=e;u=yo;var F=w.current.memoizedState.isDehydrated;if(F&&(nr(w,S).flags|=256),S=bf(w,S,!1),S!==2){if(mf&&!F){w.errorRecoveryDisabledLanes|=h,us|=h,u=4;break t}h=Vn,Vn=u,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){nr(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ui,!Ta);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=xf+300-Gt(),10<u)){if(Ca(o,n,ui,!Ta),pe(o,0,!0)!==0)break t;o.timeoutHandle=Z0(M0.bind(null,o,a,Vn,Fl,vf,n,ui,us,$s,Ta,h,2,-0,0),u);break t}M0(o,a,Vn,Fl,vf,n,ui,us,$s,Ta,h,0,-0,0)}}break}while(!0);Ui(e)}function M0(e,n,a,o,u,h,S,w,F,it,gt,St,rt,ft){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:x1},p0(n),St=y1(),St!==null)){e.cancelPendingCommit=St(R0.bind(null,e,n,h,a,o,u,S,w,F,gt,1,rt,ft)),Ca(e,h,S,!it);return}R0(e,n,h,a,o,u,S,w,F)}function I_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Yn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~gf,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Dt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&Pt(e,a,n)}function Hl(){return(Ne&6)===0?(So(0),!1):!0}function Sf(){if(xe!==null){if(Oe===0)var e=xe.return;else e=xe,ki=as=null,Bu(e),Ys=null,fo=0,e=xe;for(;e!==null;)t0(e.alternate,e),e=e.return;xe=null}}function nr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,e1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sf(),je=e,xe=a=Hi(e.current,null),Ee=n,Oe=0,Jn=null,Ta=!1,Js=re(e,n),mf=!1,$s=ui=gf=us=Aa=$e=0,Vn=yo=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Dt(o),h=1<<u;n|=e[u],o&=~h}return Qi=n,ll(),a}function S0(e,n){me=null,z.H=wl,n===no||n===vl?(n=Fp(),Oe=3):n===zp?(n=Fp(),Oe=4):Oe=n===Hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,xe===null&&($e=1,Ul(e,si(n,e.current)))}function E0(){var e=z.H;return z.H=wl,e===null?wl:e}function b0(){var e=z.A;return z.A=P_,e}function Ef(){$e=4,Ta||(Ee&4194048)!==Ee&&ci.current!==null||(Js=!0),(Aa&134217727)===0&&(us&134217727)===0||je===null||Ca(je,Ee,ui,!1)}function bf(e,n,a){var o=Ne;Ne|=2;var u=E0(),h=b0();(je!==e||Ee!==n)&&(Fl=null,nr(e,n)),n=!1;var S=$e;t:do try{if(Oe!==0&&xe!==null){var w=xe,F=Jn;switch(Oe){case 8:Sf(),S=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var it=Oe;if(Oe=0,Jn=null,ir(e,w,F,it),a&&Js){S=0;break t}break;default:it=Oe,Oe=0,Jn=null,ir(e,w,F,it)}}B_(),S=$e;break}catch(gt){S0(e,gt)}while(!0);return n&&e.shellSuspendCounter++,ki=as=null,Ne=o,z.H=u,z.A=h,xe===null&&(je=null,Ee=0,ll()),S}function B_(){for(;xe!==null;)T0(xe)}function F_(e,n){var a=Ne;Ne|=2;var o=E0(),u=b0();je!==e||Ee!==n?(Fl=null,Bl=Gt()+500,nr(e,n)):Js=re(e,n);t:do try{if(Oe!==0&&xe!==null){n=xe;var h=Jn;e:switch(Oe){case 1:Oe=0,Jn=null,ir(e,n,h,1);break;case 2:case 9:if(Ip(h)){Oe=0,Jn=null,A0(n);break}n=function(){Oe!==2&&Oe!==9||je!==e||(Oe=7),Ui(e)},h.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Ip(h)?(Oe=0,Jn=null,A0(n)):(Oe=0,Jn=null,ir(e,n,h,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var w=xe;if(!S||og(S)){Oe=0,Jn=null;var F=w.sibling;if(F!==null)xe=F;else{var it=w.return;it!==null?(xe=it,Gl(it)):xe=null}break e}}Oe=0,Jn=null,ir(e,n,h,5);break;case 6:Oe=0,Jn=null,ir(e,n,h,6);break;case 8:Sf(),$e=6;break t;default:throw Error(s(462))}}H_();break}catch(gt){S0(e,gt)}while(!0);return ki=as=null,z.H=o,z.A=u,Ne=a,xe!==null?0:(je=null,Ee=0,ll(),$e)}function H_(){for(;xe!==null&&!oe();)T0(xe)}function T0(e){var n=Jm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Gl(e):xe=n}function A0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Wm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Wm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Bu(n);default:t0(a,n),n=xe=wp(n,Qi),n=Jm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Gl(e):xe=n}function ir(e,n,a,o){ki=as=null,Bu(n),Ys=null,fo=0;var u=n.return;try{if(C_(e,u,n,a,Ee)){$e=1,Ul(e,si(a,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;$e=1,Ul(e,si(a,e.current)),xe=null;return}n.flags&32768?(Le||o===1?e=!0:Js||(Ee&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),w0(n,e)):Gl(n)}function Gl(e){var n=e;do{if((n.flags&32768)!==0){w0(n,Ta);return}e=n.return;var a=L_(n.alternate,n,Qi);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);$e===0&&($e=5)}function w0(e,n){do{var a=U_(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);$e=6,xe=null}function R0(e,n,a,o,u,h,S,w,F){e.cancelPendingCommit=null;do Vl();while(bn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=du,Ft(e,a,h,S,w,F),e===je&&(xe=je=null,Ee=0),tr=n,Ra=e,er=a,_f=h,yf=u,x0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,X_(P,function(){return N0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=et.p,et.p=2,S=Ne,Ne|=4;try{N_(e,n,a)}finally{Ne=S,et.p=u,z.T=o}}bn=1,C0(),D0(),L0()}}function C0(){if(bn===1){bn=0;var e=Ra,n=tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=et.p;et.p=2;var u=Ne;Ne|=4;try{f0(n,e);var h=zf,S=vp(e.containerInfo),w=h.focusedElem,F=h.selectionRange;if(S!==w&&w&&w.ownerDocument&&gp(w.ownerDocument.documentElement,w)){if(F!==null&&lu(w)){var it=F.start,gt=F.end;if(gt===void 0&&(gt=it),"selectionStart"in w)w.selectionStart=it,w.selectionEnd=Math.min(gt,w.value.length);else{var St=w.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var ft=rt.getSelection(),se=w.textContent.length,$t=Math.min(F.start,se),Be=F.end===void 0?$t:Math.min(F.end,se);!ft.extend&&$t>Be&&(S=Be,Be=$t,$t=S);var Q=mp(w,$t),W=mp(w,Be);if(Q&&W&&(ft.rangeCount!==1||ft.anchorNode!==Q.node||ft.anchorOffset!==Q.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var nt=St.createRange();nt.setStart(Q.node,Q.offset),ft.removeAllRanges(),$t>Be?(ft.addRange(nt),ft.extend(W.node,W.offset)):(nt.setEnd(W.node,W.offset),ft.addRange(nt))}}}}for(St=[],ft=w;ft=ft.parentNode;)ft.nodeType===1&&St.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<St.length;w++){var _t=St[w];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}tc=!!Pf,zf=Pf=null}finally{Ne=u,et.p=o,z.T=a}}e.current=n,bn=2}}function D0(){if(bn===2){bn=0;var e=Ra,n=tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=et.p;et.p=2;var u=Ne;Ne|=4;try{o0(e,n.alternate,n)}finally{Ne=u,et.p=o,z.T=a}}bn=3}}function L0(){if(bn===4||bn===3){bn=0,Vt();var e=Ra,n=tr,a=er,o=x0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,tr=Ra=null,U0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),nn(a),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(vt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=et.p,et.p=2,z.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var w=o[S];h(w.value,{componentStack:w.stack})}}finally{z.T=n,et.p=u}}(er&3)!==0&&Vl(),Ui(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Mf?Mo++:(Mo=0,Mf=e):Mo=0,So(0)}}function U0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,to(n)))}function Vl(e){return C0(),D0(),L0(),N0()}function N0(){if(bn!==5)return!1;var e=Ra,n=_f;_f=0;var a=nn(er),o=z.T,u=et.p;try{et.p=32>a?32:a,z.T=null,a=yf,yf=null;var h=Ra,S=er;if(bn=0,tr=Ra=null,er=0,(Ne&6)!==0)throw Error(s(331));var w=Ne;if(Ne|=4,g0(h.current),d0(h,h.current,S,a),Ne=w,So(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(vt,h)}catch{}return!0}finally{et.p=u,z.T=o,U0(e,n)}}function O0(e,n,a){n=si(a,n),n=Ju(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Mt(e,2),Ui(e))}function Ve(e,n,a){if(e.tag===3)O0(e,e,a);else for(;n!==null;){if(n.tag===3){O0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=si(a,e),a=Bm(2),o=xa(n,a,2),o!==null&&(Fm(a,o,n,e),Mt(o,2),Ui(o));break}}n=n.return}}function Tf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new z_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mf=!0,u.add(a),e=G_.bind(null,e,n,a),n.then(e,e))}function G_(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Ee&a)===a&&($e===4||$e===3&&(Ee&62914560)===Ee&&300>Gt()-xf?(Ne&2)===0&&nr(e,0):gf|=a,$s===Ee&&($s=0)),Ui(e)}function P0(e,n){n===0&&(n=Nt()),e=Bs(e,n),e!==null&&(Mt(e,n),Ui(e))}function V_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),P0(e,a)}function k_(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),P0(e,a)}function X_(e,n){return Rt(e,n)}var kl=null,ar=null,Af=!1,Xl=!1,wf=!1,fs=0;function Ui(e){e!==ar&&e.next===null&&(ar===null?kl=ar=e:ar=ar.next=e),Xl=!0,Af||(Af=!0,W_())}function So(e,n){if(!wf&&Xl){wf=!0;do for(var a=!1,o=kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Dt(42|e)+1)-1,h&=u&~(S&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,F0(o,h))}else h=Ee,h=pe(o,o===je?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||re(o,h)||(a=!0,F0(o,h));o=o.next}while(a);wf=!1}}function j_(){z0()}function z0(){Xl=Af=!1;var e=0;fs!==0&&(t1()&&(e=fs),fs=0);for(var n=Gt(),a=null,o=kl;o!==null;){var u=o.next,h=I0(o,n);h===0?(o.next=null,a===null?kl=u:a.next=u,u===null&&(ar=a)):(a=o,(e!==0||(h&3)!==0)&&(Xl=!0)),o=u}So(e)}function I0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Dt(h),w=1<<S,F=u[S];F===-1?((w&a)===0||(w&o)!==0)&&(u[S]=Pe(w,n)):F<=n&&(e.expiredLanes|=w),h&=~w}if(n=je,a=Ee,a=pe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&j(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&j(o),nn(a)){case 2:case 8:a=Lt;break;case 32:a=P;break;case 268435456:a=at;break;default:a=P}return o=B0.bind(null,e),a=Rt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&j(o),e.callbackPriority=2,e.callbackNode=null,2}function B0(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var o=Ee;return o=pe(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(y0(e,o,n),I0(e,Gt()),e.callbackNode!=null&&e.callbackNode===a?B0.bind(null,e):null)}function F0(e,n){if(Vl())return null;y0(e,n,!0)}function W_(){n1(function(){(Ne&6)!==0?Rt(Ut,j_):z0()})}function Rf(){return fs===0&&(fs=Y()),fs}function H0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function G0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function q_(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=H0((u[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?H0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var w=new sl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fs!==0){var F=S?G0(u,S):new FormData(u);qu(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(w.preventDefault(),F=S?G0(u,S):new FormData(u),qu(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var Cf=0;Cf<hu.length;Cf++){var Df=hu[Cf],Y_=Df.toLowerCase(),Z_=Df[0].toUpperCase()+Df.slice(1);mi(Y_,"on"+Z_)}mi(yp,"onAnimationEnd"),mi(Mp,"onAnimationIteration"),mi(Sp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(h_,"onTransitionRun"),mi(d_,"onTransitionStart"),mi(p_,"onTransitionCancel"),mi(Ep,"onTransitionEnd"),ut("onMouseEnter",["mouseout","mouseover"]),ut("onMouseLeave",["mouseout","mouseover"]),ut("onPointerEnter",["pointerout","pointerover"]),ut("onPointerLeave",["pointerout","pointerover"]),lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function V0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var w=o[S],F=w.instance,it=w.currentTarget;if(w=w.listener,F!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=it;try{h(u)}catch(gt){Ll(gt)}u.currentTarget=null,h=F}else for(S=0;S<o.length;S++){if(w=o[S],F=w.instance,it=w.currentTarget,w=w.listener,F!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=it;try{h(u)}catch(gt){Ll(gt)}u.currentTarget=null,h=F}}}}function _e(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var o=e+"__bubble";a.has(o)||(k0(n,e,2,!1),a.add(o))}function Lf(e,n,a){var o=0;n&&(o|=4),k0(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[jl]){e[jl]=!0,D.forEach(function(a){a!=="selectionchange"&&(K_.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Lf("selectionchange",!1,n))}}function k0(e,n,a,o){switch(dg(n)){case 2:var u=E1;break;case 8:u=b1;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var w=o.stateNode.containerInfo;if(w===u)break;if(S===4)for(S=o.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;w!==null;){if(S=zi(w),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){o=h=S;continue t}w=w.parentNode}}o=o.return}Kd(function(){var it=h,gt=Qc(a),St=[];t:{var rt=bp.get(e);if(rt!==void 0){var ft=sl,se=e;switch(e){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":ft=Xx;break;case"focusin":se="focus",ft=iu;break;case"focusout":se="blur",ft=iu;break;case"beforeblur":case"afterblur":ft=iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=qx;break;case yp:case Mp:case Sp:ft=Px;break;case Ep:ft=Zx;break;case"scroll":case"scrollend":ft=Dx;break;case"wheel":ft=Qx;break;case"copy":case"cut":case"paste":ft=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=ep;break;case"toggle":case"beforetoggle":ft=$x}var $t=(n&4)!==0,Be=!$t&&(e==="scroll"||e==="scrollend"),Q=$t?rt!==null?rt+"Capture":null:rt;$t=[];for(var W=it,nt;W!==null;){var _t=W;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||Q===null||(_t=Gr(W,Q),_t!=null&&$t.push(bo(W,_t,nt))),Be)break;W=W.return}0<$t.length&&(rt=new ft(rt,se,null,a,gt),St.push({event:rt,listeners:$t}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",rt&&a!==Kc&&(se=a.relatedTarget||a.fromElement)&&(zi(se)||se[Bn]))break t;if((ft||rt)&&(rt=gt.window===gt?gt:(rt=gt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ft?(se=a.relatedTarget||a.toElement,ft=it,se=se?zi(se):null,se!==null&&(Be=c(se),$t=se.tag,se!==Be||$t!==5&&$t!==27&&$t!==6)&&(se=null)):(ft=null,se=it),ft!==se)){if($t=$d,_t="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&($t=ep,_t="onPointerLeave",Q="onPointerEnter",W="pointer"),Be=ft==null?rt:Za(ft),nt=se==null?rt:Za(se),rt=new $t(_t,W+"leave",ft,a,gt),rt.target=Be,rt.relatedTarget=nt,_t=null,zi(gt)===it&&($t=new $t(Q,W+"enter",se,a,gt),$t.target=nt,$t.relatedTarget=Be,_t=$t),Be=_t,ft&&se)e:{for($t=ft,Q=se,W=0,nt=$t;nt;nt=sr(nt))W++;for(nt=0,_t=Q;_t;_t=sr(_t))nt++;for(;0<W-nt;)$t=sr($t),W--;for(;0<nt-W;)Q=sr(Q),nt--;for(;W--;){if($t===Q||Q!==null&&$t===Q.alternate)break e;$t=sr($t),Q=sr(Q)}$t=null}else $t=null;ft!==null&&X0(St,rt,ft,$t,!1),se!==null&&Be!==null&&X0(St,Be,se,$t,!0)}}t:{if(rt=it?Za(it):window,ft=rt.nodeName&&rt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&rt.type==="file")var jt=cp;else if(op(rt))if(up)jt=c_;else{jt=o_;var ve=r_}else ft=rt.nodeName,!ft||ft.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Zc(it.elementType)&&(jt=cp):jt=l_;if(jt&&(jt=jt(e,it))){lp(St,jt,a,gt);break t}ve&&ve(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&ai(rt,"number",rt.value)}switch(ve=it?Za(it):window,e){case"focusin":(op(ve)||ve.contentEditable==="true")&&(Ps=ve,cu=it,Zr=null);break;case"focusout":Zr=cu=Ps=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,xp(St,a,gt);break;case"selectionchange":if(f_)break;case"keydown":case"keyup":xp(St,a,gt)}var Kt;if(su)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Os?sp(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(np&&a.locale!=="ko"&&(Os||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Os&&(Kt=Qd()):(pa=gt,tu="value"in pa?pa.value:pa.textContent,Os=!0)),ve=Wl(it,ne),0<ve.length&&(ne=new tp(ne,e,null,a,gt),St.push({event:ne,listeners:ve}),Kt?ne.data=Kt:(Kt=rp(a),Kt!==null&&(ne.data=Kt)))),(Kt=e_?n_(e,a):i_(e,a))&&(ne=Wl(it,"onBeforeInput"),0<ne.length&&(ve=new tp("onBeforeInput","beforeinput",null,a,gt),St.push({event:ve,listeners:ne}),ve.data=Kt)),q_(St,e,it,a,gt)}V0(St,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Gr(e,a),u!=null&&o.unshift(bo(e,u,h)),u=Gr(e,n),u!=null&&o.push(bo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function X0(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var w=a,F=w.alternate,it=w.stateNode;if(w=w.tag,F!==null&&F===o)break;w!==5&&w!==26&&w!==27||it===null||(F=it,u?(it=Gr(a,h),it!=null&&S.unshift(bo(a,it,F))):u||(it=Gr(a,h),it!=null&&S.push(bo(a,it,F)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Q_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function j0(e){return(typeof e=="string"?e:""+e).replace(Q_,`
`).replace(J_,"")}function W0(e,n){return n=j0(n),j0(e)===n}function ql(){}function Ie(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ls(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ls(e,""+o);break;case"className":ae(e,"class",o);break;case"tabIndex":ae(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(e,a,o);break;case"style":Yd(e,o,h);break;case"data":if(n!=="object"){ae(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ql);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=el(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Wt(e,"popover",o);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rx.get(a)||a,Wt(e,a,o))}}function Of(e,n,a,o,u,h){switch(a){case"style":Yd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ls(e,o):(typeof o=="number"||typeof o=="bigint")&&Ls(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!K.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Wt(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,h,S,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var w=h=S=u=null,F=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":S=gt;break;case"checked":F=gt;break;case"defaultChecked":it=gt;break;case"value":h=gt;break;case"defaultValue":w=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Ie(e,n,o,gt,a,null)}}On(e,h,w,F,it,S,u,!1),pi(e);return;case"select":_e("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":S=w;break;case"multiple":o=w;default:Ie(e,n,u,w,a,null)}n=h,a=S,e.multiple=!!o,n!=null?Pn(e,!!o,n,!1):a!=null&&Pn(e,!!o,a,!0);return;case"textarea":_e("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ie(e,n,S,w,a,null)}Wd(e,o,u,h),pi(e);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,F,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<Eo.length;o++)_e(Eo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,it,o,a,null)}return;default:if(Zc(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Of(e,n,gt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ie(e,n,w,o,a,null))}function $_(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,w=null,F=null,it=null,gt=null;for(ft in a){var St=a[ft];if(a.hasOwnProperty(ft)&&St!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":F=St;default:o.hasOwnProperty(ft)||Ie(e,n,ft,null,o,St)}}for(var rt in o){var ft=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(ft!=null||St!=null))switch(rt){case"type":h=ft;break;case"name":u=ft;break;case"checked":it=ft;break;case"defaultChecked":gt=ft;break;case"value":S=ft;break;case"defaultValue":w=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==St&&Ie(e,n,rt,ft,o,St)}}Bi(e,S,w,F,it,gt,h,u);return;case"select":ft=S=w=rt=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ft=F;default:o.hasOwnProperty(h)||Ie(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":rt=h;break;case"defaultValue":w=h;break;case"multiple":S=h;default:h!==F&&Ie(e,n,u,h,o,F)}n=w,a=S,o=ft,rt!=null?Pn(e,!!a,rt,!1):!!o!=!!a&&(n!=null?Pn(e,!!a,n,!0):Pn(e,!!a,a?[]:"",!1));return;case"textarea":ft=rt=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ie(e,n,w,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":rt=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ie(e,n,S,u,o,h)}Hr(e,rt,ft);return;case"option":for(var se in a)if(rt=a[se],a.hasOwnProperty(se)&&rt!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Ie(e,n,se,null,o,rt)}for(F in o)if(rt=o[F],ft=a[F],o.hasOwnProperty(F)&&rt!==ft&&(rt!=null||ft!=null))switch(F){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ie(e,n,F,rt,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)rt=a[$t],a.hasOwnProperty($t)&&rt!=null&&!o.hasOwnProperty($t)&&Ie(e,n,$t,null,o,rt);for(it in o)if(rt=o[it],ft=a[it],o.hasOwnProperty(it)&&rt!==ft&&(rt!=null||ft!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ie(e,n,it,rt,o,ft)}return;default:if(Zc(n)){for(var Be in a)rt=a[Be],a.hasOwnProperty(Be)&&rt!==void 0&&!o.hasOwnProperty(Be)&&Of(e,n,Be,void 0,o,rt);for(gt in o)rt=o[gt],ft=a[gt],!o.hasOwnProperty(gt)||rt===ft||rt===void 0&&ft===void 0||Of(e,n,gt,rt,o,ft);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!o.hasOwnProperty(Q)&&Ie(e,n,Q,null,o,rt);for(St in o)rt=o[St],ft=a[St],!o.hasOwnProperty(St)||rt===ft||rt==null&&ft==null||Ie(e,n,St,rt,o,ft)}var Pf=null,zf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function t1(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var Z0=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(e){return K0.resolve(null).then(e).catch(i1)}:Z0;function i1(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function Q0(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&To(S.documentElement),a&2&&To(S.body),a&4)for(a=S.head,To(a),S=a.firstChild;S;){var w=S.nextSibling,F=S.nodeName;S[fa]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=w}}if(u===0){e.removeChild(h),No(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);No(n)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function a1(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function s1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function r1(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Gf=null;function J0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function $0(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ha(e)}var fi=new Map,tg=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=et.d;et.d={f:o1,r:l1,D:c1,C:u1,L:f1,m:h1,X:p1,S:d1,M:m1};function o1(){var e=Ji.f(),n=Hl();return e||n}function l1(e){var n=Ii(e);n!==null&&n.tag===5&&n.type==="form"?ym(n):Ji.r(e)}var rr=typeof document>"u"?null:document;function eg(e,n,a){var o=rr;if(o&&typeof n=="string"&&n){var u=Ye(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),tg.has(u)||(tg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),an(n),o.head.appendChild(n)))}}function c1(e){Ji.D(e),eg("dns-prefetch",e,null)}function u1(e,n){Ji.C(e,n),eg("preconnect",e,n)}function f1(e,n,a){Ji.L(e,n,a);var o=rr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ye(a.imageSizes)+'"]')):u+='[href="'+Ye(e)+'"]';var h=u;switch(n){case"style":h=or(e);break;case"script":h=lr(e)}fi.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(wo(h))||(n=o.createElement("link"),Tn(n,"link",e),an(n),o.head.appendChild(n)))}}function h1(e,n){Ji.m(e,n);var a=rr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ye(o)+'"][href="'+Ye(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=lr(e)}if(!fi.has(h)&&(e=g({rel:"modulepreload",href:e},n),fi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(h)))return}o=a.createElement("link"),Tn(o,"link",e),an(o),a.head.appendChild(o)}}}function d1(e,n,a){Ji.S(e,n,a);var o=rr;if(o&&e){var u=da(o).hoistableStyles,h=or(e);n=n||"default";var S=u.get(h);if(!S){var w={loading:0,preload:null};if(S=o.querySelector(Ao(h)))w.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(h))&&Vf(e,a);var F=S=o.createElement("link");an(F),Tn(F,"link",e),F._p=new Promise(function(it,gt){F.onload=it,F.onerror=gt}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Kl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:w},u.set(h,S)}}}function p1(e,n){Ji.X(e,n);var a=rr;if(a&&e){var o=da(a).hoistableScripts,u=lr(e),h=o.get(u);h||(h=a.querySelector(wo(u)),h||(e=g({src:e,async:!0},n),(n=fi.get(u))&&kf(e,n),h=a.createElement("script"),an(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function m1(e,n){Ji.M(e,n);var a=rr;if(a&&e){var o=da(a).hoistableScripts,u=lr(e),h=o.get(u);h||(h=a.querySelector(wo(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&kf(e,n),h=a.createElement("script"),an(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ng(e,n,a,o){var u=(u=mt.current)?Zl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=or(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=or(a.href);var h=da(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Ao(e)))&&!h._p&&(S.instance=h,S.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),h||g1(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=lr(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function or(e){return'href="'+Ye(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function ig(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function g1(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),an(n),e.head.appendChild(n))}function lr(e){return'[src="'+Ye(e)+'"]'}function wo(e){return"script[async]"+e}function ag(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(o)return n.instance=o,an(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),an(o),Tn(o,"style",u),Kl(o,a.precedence,e),n.instance=o;case"stylesheet":u=or(a.href);var h=e.querySelector(Ao(u));if(h)return n.state.loading|=4,n.instance=h,an(h),h;o=ig(a),(u=fi.get(u))&&Vf(o,u),h=(e.ownerDocument||e).createElement("link"),an(h);var S=h;return S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Tn(h,"link",o),n.state.loading|=4,Kl(h,a.precedence,e),n.instance=h;case"script":return h=lr(a.src),(u=e.querySelector(wo(h)))?(n.instance=u,an(u),u):(o=a,(u=fi.get(h))&&(o=g({},a),kf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),an(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Kl(o,a.precedence,e));return n.instance}function Kl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var w=o[S];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function sg(e,n,a){if(Ql===null){var o=new Map,u=Ql=new Map;u.set(a,o)}else u=Ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[fa]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var w=o.get(S);w?w.push(h):o.set(S,[h])}}return o}function rg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function v1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function og(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function x1(){}function _1(e,n,a){if(Ro===null)throw Error(s(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=or(a.href),h=e.querySelector(Ao(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,an(h);return}h=e.ownerDocument||e,a=ig(a),(u=fi.get(u))&&Vf(a,u),h=h.createElement("link"),an(h);var S=h;S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Tn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function y1(){if(Ro===null)throw Error(s(475));var e=Ro;return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function Xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(M1,e),$l=null,Jl.call(e))}function M1(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var o=a.get(null);else{a=new Map,$l.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=Jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function S1(e,n,a,o,u,h,S,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function lg(e,n,a,o,u,h,S,w,F,it,gt,St){return e=new S1(e,n,a,S,w,F,it,St),n=1,h===!0&&(n|=24),h=Zn(3,null,null,n),e.current=h,h.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Ru(h),e}function cg(e){return e?(e=Fs,e):Fs}function ug(e,n,a,o,u,h){u=cg(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=xa(e,o,n),a!==null&&(ti(a,e,n),ao(a,e,n))}function fg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){fg(e,n),(e=e.alternate)&&fg(e,n)}function hg(e){if(e.tag===13){var n=Bs(e,67108864);n!==null&&ti(n,e,67108864),jf(e,67108864)}}var tc=!0;function E1(e,n,a,o){var u=z.T;z.T=null;var h=et.p;try{et.p=2,Wf(e,n,a,o)}finally{et.p=h,z.T=u}}function b1(e,n,a,o){var u=z.T;z.T=null;var h=et.p;try{et.p=8,Wf(e,n,a,o)}finally{et.p=h,z.T=u}}function Wf(e,n,a,o){if(tc){var u=qf(o);if(u===null)Nf(e,n,o,ec,a),pg(e,o);else if(A1(u,e,n,a,o))o.stopPropagation();else if(pg(e,o),n&4&&-1<T1.indexOf(e)){for(;u!==null;){var h=Ii(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Bt(h.pendingLanes);if(S!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var F=1<<31-Dt(S);w.entanglements[1]|=F,S&=~F}Ui(h),(Ne&6)===0&&(Bl=Gt()+500,So(0))}}break;case 13:w=Bs(h,2),w!==null&&ti(w,h,2),Hl(),jf(h,2)}if(h=qf(o),h===null&&Nf(e,n,o,ec,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Nf(e,n,o,null,a)}}function qf(e){return e=Qc(e),Yf(e)}var ec=null;function Yf(e){if(ec=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ec=e,null}function dg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case Ut:return 2;case Lt:return 8;case P:case A:return 32;case at:return 268435456;default:return 32}default:return 32}}var Zf=!1,La=null,Ua=null,Na=null,Do=new Map,Lo=new Map,Oa=[],T1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Uo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ii(n),n!==null&&hg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function A1(e,n,a,o,u){switch(n){case"focusin":return La=Uo(La,e,n,a,o,u),!0;case"dragenter":return Ua=Uo(Ua,e,n,a,o,u),!0;case"mouseover":return Na=Uo(Na,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Do.set(h,Uo(Do.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Lo.set(h,Uo(Lo.get(h)||null,e,n,a,o,u)),!0}return!1}function mg(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=$n();o=Xe(o);var u=Bs(a,o);u!==null&&ti(u,a,o),jf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Kc=o,a.target.dispatchEvent(o),Kc=null}else return n=Ii(a),n!==null&&hg(n),e.blockedOn=a,!1;n.shift()}return!0}function gg(e,n,a){nc(e)&&a.delete(n)}function w1(){Zf=!1,La!==null&&nc(La)&&(La=null),Ua!==null&&nc(Ua)&&(Ua=null),Na!==null&&nc(Na)&&(Na=null),Do.forEach(gg),Lo.forEach(gg)}function ic(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,w1)))}var ac=null;function vg(e){ac!==e&&(ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var h=Ii(a);h!==null&&(e.splice(n,3),n-=3,qu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function No(e){function n(F){return ic(F,e)}La!==null&&ic(La,e),Ua!==null&&ic(Ua,e),Na!==null&&ic(Na,e),Do.forEach(n),Lo.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)mg(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[Sn]||null;if(typeof h=="function")S||vg(a);else if(S){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[Sn]||null)w=S.formAction;else if(Yf(u)!==null)continue}else w=S.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),vg(a)}}}function Kf(e){this._internalRoot=e}sc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=$n();ug(a,o,e,n,null,null)},sc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ug(e.current,2,null,e,null,null),Hl(),n[Bn]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Re();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&mg(e)}};var xg=t.version;if(xg!=="19.1.0")throw Error(s(527,xg,"19.1.0"));et.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var R1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{vt=rc.inject(R1),It=rc}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Om,h=Pm,S=zm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=lg(e,1,!1,null,null,a,o,u,h,S,w,null),e[Bn]=n.current,Uf(e),new Kf(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Om,S=Pm,w=zm,F=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=lg(e,1,!0,n,a??null,o,u,h,S,w,F,it),n.context=cg(null),a=n.current,o=$n(),o=Xe(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,Mt(n,a),Ui(n),e[Bn]=n.current,Uf(e),new sc(n)},Po.version="19.1.0",Po}var Rg;function F1(){if(Rg)return $f.exports;Rg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),$f.exports=B1(),$f.exports}var H1=F1(),Gv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cg=bs.createContext&&bs.createContext(Gv),G1=["attr","size","title"];function V1(r,t){if(r==null)return{};var i=k1(r,t),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}function k1(r,t){if(r==null)return{};var i={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(t.indexOf(s)>=0)continue;i[s]=r[s]}return i}function Fc(){return Fc=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Fc.apply(this,arguments)}function Dg(r,t){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function Hc(r){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Dg(Object(i),!0).forEach(function(s){X1(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Dg(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function X1(r,t,i){return t=j1(t),t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i,r}function j1(r){var t=W1(r,"string");return typeof t=="symbol"?t:t+""}function W1(r,t){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Vv(r){return r&&r.map((t,i)=>bs.createElement(t.tag,Hc({key:i},t.attr),Vv(t.child)))}function We(r){return t=>bs.createElement(q1,Fc({attr:Hc({},r.attr)},t),Vv(r.child))}function q1(r){var t=i=>{var{attr:s,size:l,title:c}=r,f=V1(r,G1),d=l||i.size||"1em",m;return i.className&&(m=i.className),r.className&&(m=(m?m+" ":"")+r.className),bs.createElement("svg",Fc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,f,{className:m,style:Hc(Hc({color:r.color||i.color},i.style),r.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&bs.createElement("title",null,c),r.children)};return Cg!==void 0?bs.createElement(Cg.Consumer,null,i=>t(i)):t(Gv)}function wd(r){return We({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function kv(r){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function Y1(r){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(r)}function Z1(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(r)}function K1(r){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(r)}function Q1(r){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(r)}function J1(r){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function $1(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(r)}function ty(r){return We({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function ey(r){return We({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function ny(r){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(r)}function iy(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(r)}function ay(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function sy(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(r)}function Xv(r){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z"},child:[]}]})(r)}function ry(r){return We({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(r)}function oy(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(r)}function ly(r){return We({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(r)}function Lg(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(r)}function Rd(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(r)}function cy(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(r)}function uy(r){return We({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}const fy=({onScrollToHero:r,onScrollToAbout:t,onScrollToSkills:i,onScrollToProjects:s,onScrollToContact:l})=>{const[c,f]=Se.useState(!1),[d,m]=Se.useState(!1);Se.useEffect(()=>{const v=()=>{f(window.scrollY>30)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const p=[{label:"About",onClick:t},{label:"Skills",onClick:i},{label:"Projects",onClick:s},{label:"Contact",onClick:l}],g=v=>{m(!1),v()};return L.jsxs("header",{className:"fixed top-0 left-0 w-full z-50 px-3 sm:px-8 py-3 sm:py-4 transition-all duration-300",children:[L.jsxs("div",{className:`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${c?"glass-panel shadow-2xl shadow-cyan-950/40 bg-slate-950/85 border border-white/10":"bg-slate-950/50 backdrop-blur-md border border-white/5"}`,children:[L.jsxs("button",{onClick:r,className:"group flex items-center gap-2.5 cursor-pointer text-left focus:outline-none min-h-[44px]",children:[L.jsx("div",{className:"w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs sm:text-sm shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform",children:"DK"}),L.jsxs("div",{children:[L.jsx("span",{className:"font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-cyan-400 transition-colors",children:"Devang Khuman"}),L.jsx("span",{className:"block text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-cyan-400",children:"MERN Developer"})]})]}),L.jsx("nav",{className:"hidden md:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5",children:p.map(({label:v,onClick:_})=>L.jsx("button",{onClick:_,className:"px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer min-h-[36px]",children:v},v))}),L.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[L.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium",children:[L.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"Available"]}),L.jsx("button",{onClick:l,className:"px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer min-h-[38px]",children:"Let's Talk"})]}),L.jsx("button",{onClick:()=>m(!d),className:"md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white focus:outline-none cursor-pointer","aria-label":"Toggle Menu",children:d?L.jsx(uy,{size:18}):L.jsx(J1,{size:18})})]}),d&&L.jsxs("div",{className:"md:hidden mt-2 max-w-6xl mx-auto glass-panel bg-slate-950/95 backdrop-blur-2xl rounded-2xl p-4 border border-white/15 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3",children:[L.jsx("div",{className:"flex flex-col gap-1",children:p.map(({label:v,onClick:_})=>L.jsxs("button",{onClick:()=>g(_),className:"text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-200 active:bg-white/10 transition-colors flex items-center justify-between min-h-[44px]",children:[L.jsx("span",{children:v}),L.jsx("span",{className:"text-xs text-cyan-400 font-mono",children:"→"})]},v))}),L.jsxs("div",{className:"pt-3 border-t border-white/10 flex items-center justify-between gap-3",children:[L.jsxs("div",{className:"flex items-center gap-2 text-xs text-emerald-400 font-medium",children:[L.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"Available for work"]}),L.jsx("button",{onClick:()=>g(l),className:"px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 active:scale-95 transition-all shadow-md",children:"Contact Me"})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="170",hy=0,Ug=1,dy=2,jv=1,py=2,aa=3,ja=0,jn=1,Mi=2,ka=0,br=1,zh=2,Ng=3,Og=4,my=5,ys=100,gy=101,vy=102,xy=103,_y=104,yy=200,My=201,Sy=202,Ey=203,Ih=204,Bh=205,by=206,Ty=207,Ay=208,wy=209,Ry=210,Cy=211,Dy=212,Ly=213,Uy=214,Fh=0,Hh=1,Gh=2,wr=3,Vh=4,kh=5,Xh=6,jh=7,Wv=0,Ny=1,Oy=2,Xa=0,Py=1,zy=2,Iy=3,Cs=4,By=5,Fy=6,Hy=7,qv=300,Rr=301,Cr=302,Wh=303,qh=304,Xc=306,Yh=1e3,Ss=1001,Zh=1002,Ti=1003,Gy=1004,oc=1005,Ei=1006,ih=1007,Es=1008,ca=1009,Yv=1010,Zv=1011,jo=1012,Dd=1013,Ts=1014,sa=1015,qo=1016,Ld=1017,Ud=1018,Dr=1020,Kv=35902,Qv=1021,Jv=1022,bi=1023,$v=1024,tx=1025,Tr=1026,Lr=1027,ex=1028,Nd=1029,nx=1030,Od=1031,Pd=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,td=36196,ed=37492,nd=37496,id=37808,ad=37809,sd=37810,rd=37811,od=37812,ld=37813,cd=37814,ud=37815,fd=37816,hd=37817,dd=37818,pd=37819,md=37820,gd=37821,Ic=36492,vd=36494,xd=36495,ix=36283,_d=36284,yd=36285,Md=36286,Vy=3200,ky=3201,ax=0,Xy=1,Va="",ii="srgb",Nr="srgb-linear",jc="linear",Fe="srgb",cr=7680,Pg=519,jy=512,Wy=513,qy=514,sx=515,Yy=516,Zy=517,Ky=518,Qy=519,zg=35044,Ig="300 es",ra=2e3,Gc=2001;class Or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,Sd=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Ln(r,t,i){return Math.max(t,Math.min(i,r))}function Jy(r,t){return(r%t+t)%t}function sh(r,t,i){return(1-i)*r+i*t}function zo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ln(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,i,s,l,c,f,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],_=s[2],y=s[5],E=s[8],T=l[0],M=l[3],x=l[6],N=l[1],U=l[4],R=l[7],k=l[2],I=l[5],B=l[8];return c[0]=f*T+d*N+m*k,c[3]=f*M+d*U+m*I,c[6]=f*x+d*R+m*B,c[1]=p*T+g*N+v*k,c[4]=p*M+g*U+v*I,c[7]=p*x+g*R+v*B,c[2]=_*T+y*N+E*k,c[5]=_*M+y*U+E*I,c[8]=_*x+y*R+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*f-d*p,_=d*m-g*c,y=p*c-f*m,E=i*v+s*_+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*f)*T,t[3]=_*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(rh.makeScale(t,i)),this}rotate(t){return this.premultiply(rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new ue;function rx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Wo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $y(){const r=Wo("canvas");return r.style.display="block",r}const Bg={};function ko(r){r in Bg||(Bg[r]=!0,console.warn(r))}function tM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function eM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const we={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===Fe&&(r.r=oa(r.r),r.g=oa(r.g),r.b=oa(r.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Fe&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Va?jc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,i){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Fg=[.64,.33,.3,.6,.15,.06],Hg=[.2126,.7152,.0722],Gg=[.3127,.329],Vg=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[Nr]:{primaries:Fg,whitePoint:Gg,transfer:jc,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:Hg,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:Fg,whitePoint:Gg,transfer:Fe,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:Hg,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}});let ur;class iM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ur===void 0&&(ur=Wo("canvas")),ur.width=t.width,ur.height=t.height;const s=ur.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ur}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Wo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=oa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aM=0;class ox{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(oh(l[f].image)):c.push(oh(l[f]))}else c=oh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?iM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sM=0;class Un extends Or{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,s=Ss,l=Ss,c=Ei,f=Es,d=bi,m=ca,p=Un.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Yo(),this.name="",this.source=new ox(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=qv;Un.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],_=m[1],y=m[5],E=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,R=(y+1)/2,k=(x+1)/2,I=(g+_)/4,B=(v+T)/4,G=(E+M)/4;return U>R&&U>k?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=B/s):R>k?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=I/l,c=G/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=B/c,l=G/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-E)*(M-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(v-T)/N,this.z=(_-g)/N,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends Or{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Un(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new ox(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends rM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class lx extends Un{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends Un{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const _=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=_,t[i+1]=y,t[i+2]=E,t[i+3]=T;return}if(v!==T||m!==_||p!==y||g!==E){let M=1-d;const x=m*_+p*y+g*E+v*T,N=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const k=Math.sqrt(U),I=Math.atan2(k,x*N);M=Math.sin(M*I)/k,d=Math.sin(d*I)/k}const R=d*N;if(m=m*M+_*R,p=p*M+y*R,g=g*M+E*R,v=v*M+T*R,M===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=k,p*=k,g*=k,v*=k}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[f],_=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+g*v+m*y-p*_,t[i+1]=m*E+g*_+p*v-d*y,t[i+2]=p*E+g*y+d*_-m*v,t[i+3]=g*E-d*v-m*_-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),_=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=_*g*v+p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v-_*y*E;break;case"YXZ":this._x=_*g*v+p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v+_*y*E;break;case"ZXY":this._x=_*g*v-p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v-_*y*E;break;case"ZYX":this._x=_*g*v-p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v+_*y*E;break;case"YZX":this._x=_*g*v+p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v-_*y*E;break;case"XZY":this._x=_*g*v-p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],_=s+d+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ln(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,_=Math.sin(i*g)/p;return this._w=f*v+this._w*_,this._x=s*v+this._x*_,this._y=l*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Xg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Xg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ln(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new Z,Xg=new Zo;class Ko{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),cc.subVectors(this.max,Io),fr.subVectors(t.a,Io),hr.subVectors(t.b,Io),dr.subVectors(t.c,Io),za.subVectors(hr,fr),Ia.subVectors(dr,hr),hs.subVectors(fr,dr);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-hs.z,hs.y,za.z,0,-za.x,Ia.z,0,-Ia.x,hs.z,0,-hs.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-hs.y,hs.x,0];return!ch(i,fr,hr,dr,cc)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,fr,hr,dr,cc))?!1:(uc.crossVectors(za,Ia),i=[uc.x,uc.y,uc.z],ch(i,fr,hr,dr,cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],xi=new Z,lc=new Ko,fr=new Z,hr=new Z,dr=new Z,za=new Z,Ia=new Z,hs=new Z,Io=new Z,cc=new Z,uc=new Z,ds=new Z;function ch(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ds.fromArray(r,c);const d=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=t.dot(ds),p=i.dot(ds),g=s.dot(ds);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const lM=new Ko,Bo=new Z,uh=new Z;class Qo{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):lM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(uh)),this.expandByPoint(Bo.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new Z,fh=new Z,fc=new Z,Ba=new Z,hh=new Z,hc=new Z,dh=new Z;class Wc{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){fh.copy(t).add(i).multiplyScalar(.5),fc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(fc),d=Ba.dot(this.direction),m=-Ba.dot(fc),p=Ba.lengthSq(),g=Math.abs(1-f*f);let v,_,y,E;if(g>0)if(v=f*m-d,_=f*d-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,y=v*(v+f*_+2*d)+_*(f*v+_+2*m)+p}else _=c,v=Math.max(0,-(f*_+d)),y=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(f*_+d)),y=-v*v+_*(_+2*m)+p;else _<=-E?(v=Math.max(0,-(-f*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(v=Math.max(0,-(f*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p);else _=f>0?-c:c,v=Math.max(0,-(f*_+d)),y=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(fh).addScaledVector(fc,_),y}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(d=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,s,l,c){hh.subVectors(i,t),hc.subVectors(s,t),dh.crossVectors(hh,hc);let f=this.direction.dot(dh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(hc.crossVectors(Ba,hc));if(m<0)return null;const p=d*this.direction.dot(hh.cross(Ba));if(p<0||m+p>f)return null;const g=-d*Ba.dot(dh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,i,s,l,c,f,d,m,p,g,v,_,y,E,T,M){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,v,_,y,E,T,M)}set(t,i,s,l,c,f,d,m,p,g,v,_,y,E,T,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/pr.setFromMatrixColumn(t,0).length(),c=1/pr.setFromMatrixColumn(t,1).length(),f=1/pr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=f*g,y=f*v,E=d*g,T=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=_-T*p,i[9]=-d*m,i[2]=T-_*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const _=m*g,y=m*v,E=p*g,T=p*v;i[0]=_+T*d,i[4]=E*d-y,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=y*d-E,i[6]=T+_*d,i[10]=f*m}else if(t.order==="ZXY"){const _=m*g,y=m*v,E=p*g,T=p*v;i[0]=_-T*d,i[4]=-f*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*g,i[9]=T-_*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const _=f*g,y=f*v,E=d*g,T=d*v;i[0]=m*g,i[4]=E*p-y,i[8]=_*p+T,i[1]=m*v,i[5]=T*p+_,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,y=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-_*v,i[8]=E*v+y,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+E,i[10]=_-T*v}else if(t.order==="XZY"){const _=f*m,y=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=_*v+T,i[5]=f*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*g,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cM,t,uM)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Fa.crossVectors(s,ei),Fa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Fa.crossVectors(s,ei)),Fa.normalize(),dc.crossVectors(ei,Fa),l[0]=Fa.x,l[4]=dc.x,l[8]=ei.x,l[1]=Fa.y,l[5]=dc.y,l[9]=ei.y,l[2]=Fa.z,l[6]=dc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],_=s[9],y=s[13],E=s[2],T=s[6],M=s[10],x=s[14],N=s[3],U=s[7],R=s[11],k=s[15],I=l[0],B=l[4],G=l[8],C=l[12],b=l[1],H=l[5],$=l[9],tt=l[13],ot=l[2],dt=l[6],z=l[10],et=l[14],q=l[3],xt=l[7],O=l[11],V=l[15];return c[0]=f*I+d*b+m*ot+p*q,c[4]=f*B+d*H+m*dt+p*xt,c[8]=f*G+d*$+m*z+p*O,c[12]=f*C+d*tt+m*et+p*V,c[1]=g*I+v*b+_*ot+y*q,c[5]=g*B+v*H+_*dt+y*xt,c[9]=g*G+v*$+_*z+y*O,c[13]=g*C+v*tt+_*et+y*V,c[2]=E*I+T*b+M*ot+x*q,c[6]=E*B+T*H+M*dt+x*xt,c[10]=E*G+T*$+M*z+x*O,c[14]=E*C+T*tt+M*et+x*V,c[3]=N*I+U*b+R*ot+k*q,c[7]=N*B+U*H+R*dt+k*xt,c[11]=N*G+U*$+R*z+k*O,c[15]=N*C+U*tt+R*et+k*V,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],_=t[10],y=t[14],E=t[3],T=t[7],M=t[11],x=t[15];return E*(+c*m*v-l*p*v-c*d*_+s*p*_+l*d*y-s*m*y)+T*(+i*m*y-i*p*_+c*f*_-l*f*y+l*p*g-c*m*g)+M*(+i*p*v-i*d*y-c*f*v+s*f*y+c*d*g-s*p*g)+x*(-l*d*g-i*m*v+i*d*_+l*f*v-s*f*_+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],_=t[10],y=t[11],E=t[12],T=t[13],M=t[14],x=t[15],N=v*M*p-T*_*p+T*m*y-d*M*y-v*m*x+d*_*x,U=E*_*p-g*M*p-E*m*y+f*M*y+g*m*x-f*_*x,R=g*T*p-E*v*p+E*d*y-f*T*y-g*d*x+f*v*x,k=E*v*m-g*T*m-E*d*_+f*T*_+g*d*M-f*v*M,I=i*N+s*U+l*R+c*k;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=N*B,t[1]=(T*_*c-v*M*c-T*l*y+s*M*y+v*l*x-s*_*x)*B,t[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*x+s*m*x)*B,t[3]=(v*m*c-d*_*c-v*l*p+s*_*p+d*l*y-s*m*y)*B,t[4]=U*B,t[5]=(g*M*c-E*_*c+E*l*y-i*M*y-g*l*x+i*_*x)*B,t[6]=(E*m*c-f*M*c-E*l*p+i*M*p+f*l*x-i*m*x)*B,t[7]=(f*_*c-g*m*c+g*l*p-i*_*p-f*l*y+i*m*y)*B,t[8]=R*B,t[9]=(E*v*c-g*T*c-E*s*y+i*T*y+g*s*x-i*v*x)*B,t[10]=(f*T*c-E*d*c+E*s*p-i*T*p-f*s*x+i*d*x)*B,t[11]=(g*d*c-f*v*c-g*s*p+i*v*p+f*s*y-i*d*y)*B,t[12]=k*B,t[13]=(g*T*l-E*v*l+E*s*_-i*T*_-g*s*M+i*v*M)*B,t[14]=(E*d*l-f*T*l-E*s*m+i*T*m+f*s*M-i*d*M)*B,t[15]=(f*v*l-g*d*l+g*s*m-i*v*m-f*s*_+i*d*_)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,v=d+d,_=c*p,y=c*g,E=c*v,T=f*g,M=f*v,x=d*v,N=m*p,U=m*g,R=m*v,k=s.x,I=s.y,B=s.z;return l[0]=(1-(T+x))*k,l[1]=(y+R)*k,l[2]=(E-U)*k,l[3]=0,l[4]=(y-R)*I,l[5]=(1-(_+x))*I,l[6]=(M+N)*I,l[7]=0,l[8]=(E+U)*B,l[9]=(M-N)*B,l[10]=(1-(_+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=pr.set(l[0],l[1],l[2]).length();const f=pr.set(l[4],l[5],l[6]).length(),d=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/c,g=1/f,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=ra){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),_=(s+l)/(s-l);let y,E;if(d===ra)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Gc)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ra){const m=this.elements,p=1/(i-t),g=1/(s-l),v=1/(f-c),_=(i+t)*p,y=(s+l)*g;let E,T;if(d===ra)E=(f+c)*v,T=-2*v;else if(d===Gc)E=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-_,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const pr=new Z,_i=new ke,cM=new Z(0,0,0),uM=new Z(1,1,1),Fa=new Z,dc=new Z,ei=new Z,jg=new ke,Wg=new Zo;class Pi{constructor(t=0,i=0,s=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ln(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return jg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fM=0;const qg=new Z,mr=new Zo,ea=new ke,pc=new Z,Fo=new Z,hM=new Z,dM=new Zo,Yg=new Z(1,0,0),Zg=new Z(0,1,0),Kg=new Z(0,0,1),Qg={type:"added"},pM={type:"removed"},gr={type:"childadded",child:null},ph={type:"childremoved",child:null};class Mn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new Z,i=new Pi,s=new Zo,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new ue}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(Yg,t)}rotateY(t){return this.rotateOnAxis(Zg,t)}rotateZ(t){return this.rotateOnAxis(Kg,t)}translateOnAxis(t,i){return qg.copy(t).applyQuaternion(this.quaternion),this.position.add(qg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Yg,t)}translateY(t){return this.translateOnAxis(Zg,t)}translateZ(t){return this.translateOnAxis(Kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?pc.copy(t):pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Fo,pc,this.up):ea.lookAt(pc,Fo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(ea),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qg),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pM),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qg),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,hM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,dM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new Z(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new Z,na=new Z,mh=new Z,ia=new Z,vr=new Z,xr=new Z,Jg=new Z,gh=new Z,vh=new Z,xh=new Z,_h=new He,yh=new He,Mh=new He;class Si{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),yi.subVectors(t,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){yi.subVectors(l,i),na.subVectors(s,i),mh.subVectors(t,i);const f=yi.dot(yi),d=yi.dot(na),m=yi.dot(mh),p=na.dot(na),g=na.dot(mh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(p*m-d*g)*_,E=(f*g-d*m)*_;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ia.x),m.addScaledVector(f,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return _h.setScalar(0),yh.setScalar(0),Mh.setScalar(0),_h.fromBufferAttribute(t,i),yh.fromBufferAttribute(t,s),Mh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(_h,c.x),f.addScaledVector(yh,c.y),f.addScaledVector(Mh,c.z),f}static isFrontFacing(t,i,s,l){return yi.subVectors(s,i),na.subVectors(t,i),yi.cross(na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;vr.subVectors(l,s),xr.subVectors(c,s),gh.subVectors(t,s);const m=vr.dot(gh),p=xr.dot(gh);if(m<=0&&p<=0)return i.copy(s);vh.subVectors(t,l);const g=vr.dot(vh),v=xr.dot(vh);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(vr,f);xh.subVectors(t,c);const y=vr.dot(xh),E=xr.dot(xh);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(xr,d);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return Jg.subVectors(c,l),d=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(Jg,d);const x=1/(M+T+_);return f=T*x,d=_*x,i.copy(s).addScaledVector(vr,f).addScaledVector(xr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Sh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=Jy(t,1),i=Ln(i,0,1),s=Ln(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Sh(f,c,t+1/3),this.g=Sh(f,c,t),this.b=Sh(f,c,t-1/3)}return we.toWorkingColorSpace(this,l),this}setStyle(t,i=ii){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ii){const s=cx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return we.fromWorkingColorSpace(Dn.copy(this),t),Math.round(Ln(Dn.r*255,0,255))*65536+Math.round(Ln(Dn.g*255,0,255))*256+Math.round(Ln(Dn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.fromWorkingColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=g<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.fromWorkingColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ii){we.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==ii?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(mc);const s=sh(Ha.h,mc.h,i),l=sh(Ha.s,mc.s,i),c=sh(Ha.l,mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new ye;ye.NAMES=cx;let mM=0;class Ds extends Or{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Yo(),this.name="",this.blending=br,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Bh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ih&&(s.blendSrc=this.blendSrc),this.blendDst!==Bh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oi extends Ds{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new Z,gc=new he;class di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=zg,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(t),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=zo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zg&&(t.usage=this.usage),t}}class ux extends di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class fx extends di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ke extends di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let gM=0;const hi=new ke,Eh=new Mn,_r=new Z,ni=new Ko,Ho=new Ko,xn=new Z;class Nn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rx(t)?fx:ux)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ke(s,3))}else{for(let s=0,l=i.count;s<l;s++){const c=t[s];i.setXYZ(s,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ni.min,Ho.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Ho.max),ni.expandByPoint(xn)):(ni.expandByPoint(Ho.min),ni.expandByPoint(Ho.max))}ni.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(t,p),xn.add(_r)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let G=0;G<s.count;G++)d[G]=new Z,m[G]=new Z;const p=new Z,g=new Z,v=new Z,_=new he,y=new he,E=new he,T=new Z,M=new Z;function x(G,C,b){p.fromBufferAttribute(s,G),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,b),_.fromBufferAttribute(c,G),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,b),g.sub(p),v.sub(p),y.sub(_),E.sub(_);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),d[G].add(T),d[C].add(T),d[b].add(T),m[G].add(M),m[C].add(M),m[b].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let G=0,C=N.length;G<C;++G){const b=N[G],H=b.start,$=b.count;for(let tt=H,ot=H+$;tt<ot;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new Z,R=new Z,k=new Z,I=new Z;function B(G){k.fromBufferAttribute(l,G),I.copy(k);const C=d[G];U.copy(C),U.sub(k.multiplyScalar(k.dot(C))).normalize(),R.crossVectors(I,C);const H=R.dot(m[G])<0?-1:1;f.setXYZW(G,U.x,U.y,U.z,H)}for(let G=0,C=N.length;G<C;++G){const b=N[G],H=b.start,$=b.count;for(let tt=H,ot=H+$;tt<ot;tt+=3)B(t.getX(tt+0)),B(t.getX(tt+1)),B(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new Z,c=new Z,f=new Z,d=new Z,m=new Z,p=new Z,g=new Z,v=new Z;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,_=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let x=0;x<g;x++)_[E++]=p[y++]}return new di(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=t(_,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $g=new ke,ps=new Wc,vc=new Qo,tv=new Z,xc=new Z,_c=new Z,yc=new Z,bh=new Z,Mc=new Z,ev=new Z,Sc=new Z;class be extends Mn{constructor(t=new Nn,i=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(bh.fromBufferAttribute(v,t),f?Mc.addScaledVector(bh,g):Mc.addScaledVector(bh.sub(i),g))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(c),ps.copy(t.ray).recast(t.near),!(vc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(vc,tv)===null||ps.origin.distanceToSquared(tv)>(t.far-t.near)**2))&&($g.copy(c).invert(),ps.copy(t.ray).applyMatrix4($g),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ps)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=f[M.materialIndex],N=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let R=N,k=U;R<k;R+=3){const I=d.getX(R),B=d.getX(R+1),G=d.getX(R+2);l=Ec(this,x,t,s,p,g,v,I,B,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const N=d.getX(M),U=d.getX(M+1),R=d.getX(M+2);l=Ec(this,f,t,s,p,g,v,N,U,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=f[M.materialIndex],N=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let R=N,k=U;R<k;R+=3){const I=R,B=R+1,G=R+2;l=Ec(this,x,t,s,p,g,v,I,B,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const N=M,U=M+1,R=M+2;l=Ec(this,f,t,s,p,g,v,N,U,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vM(r,t,i,s,l,c,f,d){let m;if(t.side===jn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===ja,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:r}}function Ec(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,xc),r.getVertexPosition(m,_c),r.getVertexPosition(p,yc);const g=vM(r,t,i,s,xc,_c,yc,ev);if(g){const v=new Z;Si.getBarycoord(ev,xc,_c,yc,v),l&&(g.uv=Si.getInterpolatedAttribute(l,d,m,p,v,new he)),c&&(g.uv1=Si.getInterpolatedAttribute(c,d,m,p,v,new he)),f&&(g.normal=Si.getInterpolatedAttribute(f,d,m,p,v,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new Z,materialIndex:0};Si.getNormal(xc,_c,yc,_.normal),g.face=_,g.barycoord=v}return g}class ua extends Nn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(v,2));function E(T,M,x,N,U,R,k,I,B,G,C){const b=R/B,H=k/G,$=R/2,tt=k/2,ot=I/2,dt=B+1,z=G+1;let et=0,q=0;const xt=new Z;for(let O=0;O<z;O++){const V=O*H-tt;for(let st=0;st<dt;st++){const ht=st*b-$;xt[T]=ht*N,xt[M]=V*U,xt[x]=ot,p.push(xt.x,xt.y,xt.z),xt[T]=0,xt[M]=0,xt[x]=I>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(st/B),v.push(1-O/G),et+=1}}for(let O=0;O<G;O++)for(let V=0;V<B;V++){const st=_+V+dt*O,ht=_+V+dt*(O+1),X=_+(V+1)+dt*(O+1),ct=_+(V+1)+dt*O;m.push(st,ht,ct),m.push(ht,X,ct),q+=6}d.addGroup(y,q,C),y+=q,_+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Ur(r[i]);for(const l in s)t[l]=s[l]}return t}function xM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function hx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const _M={clone:Ur,merge:In};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Ds{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class dx extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new Z,nv=new he,iv=new he;class _n extends dx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,nv,iv),i.subVectors(iv,nv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ah*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const yr=-90,Mr=1;class SM extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _n(yr,Mr,t,i);l.layers=this.layers,this.add(l);const c=new _n(yr,Mr,t,i);c.layers=this.layers,this.add(c);const f=new _n(yr,Mr,t,i);f.layers=this.layers,this.add(f);const d=new _n(yr,Mr,t,i);d.layers=this.layers,this.add(d);const m=new _n(yr,Mr,t,i);m.layers=this.layers,this.add(m);const p=new _n(yr,Mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,_,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class px extends Un{constructor(t,i,s,l,c,f,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Rr,super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class EM extends As{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new px(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ei}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ua(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:Ur(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:ka});c.uniforms.tEquirect.value=i;const f=new be(l,c),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=Ei),new SM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}const Th=new Z,bM=new Z,TM=new ue;class xs{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Th.subVectors(s,i).cross(bM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||TM.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Qo,bc=new Z;class Id{constructor(t=new xs,i=new xs,s=new xs,l=new xs,c=new xs,f=new xs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ra){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],_=l[7],y=l[8],E=l[9],T=l[10],M=l[11],x=l[12],N=l[13],U=l[14],R=l[15];if(s[0].setComponents(m-c,_-p,M-y,R-x).normalize(),s[1].setComponents(m+c,_+p,M+y,R+x).normalize(),s[2].setComponents(m+f,_+g,M+E,R+N).normalize(),s[3].setComponents(m-f,_-g,M-E,R-N).normalize(),s[4].setComponents(m-d,_-v,M-T,R-U).normalize(),i===ra)s[5].setComponents(m+d,_+v,M+T,R+U).normalize();else if(i===Gc)s[5].setComponents(d,v,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function AM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<v.length;y++){const E=v[_],T=v[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let y=0,E=v.length;y<E;y++){const T=v[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}class Jo extends Nn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,_=i/m,y=[],E=[],T=[],M=[];for(let x=0;x<g;x++){const N=x*_-f;for(let U=0;U<p;U++){const R=U*v-c;E.push(R,-N,0),T.push(0,0,1),M.push(U/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<d;N++){const U=N+p*x,R=N+p*(x+1),k=N+1+p*(x+1),I=N+1+p*x;y.push(U,R,I),y.push(R,k,I)}this.setIndex(y),this.setAttribute("position",new Ke(E,3)),this.setAttribute("normal",new Ke(T,3)),this.setAttribute("uv",new Ke(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:wM,alphahash_pars_fragment:RM,alphamap_fragment:CM,alphamap_pars_fragment:DM,alphatest_fragment:LM,alphatest_pars_fragment:UM,aomap_fragment:NM,aomap_pars_fragment:OM,batching_pars_vertex:PM,batching_vertex:zM,begin_vertex:IM,beginnormal_vertex:BM,bsdfs:FM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:jM,color_fragment:WM,color_pars_fragment:qM,color_pars_vertex:YM,color_vertex:ZM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:tS,emissivemap_fragment:eS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:aS,envmap_fragment:sS,envmap_common_pars_fragment:rS,envmap_pars_fragment:oS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:_S,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:fS,fog_fragment:hS,fog_pars_fragment:dS,gradientmap_pars_fragment:pS,lightmap_pars_fragment:mS,lights_lambert_fragment:gS,lights_lambert_pars_fragment:vS,lights_pars_begin:xS,lights_toon_fragment:yS,lights_toon_pars_fragment:MS,lights_phong_fragment:SS,lights_phong_pars_fragment:ES,lights_physical_fragment:bS,lights_physical_pars_fragment:TS,lights_fragment_begin:AS,lights_fragment_maps:wS,lights_fragment_end:RS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:DS,logdepthbuf_pars_vertex:LS,logdepthbuf_vertex:US,map_fragment:NS,map_pars_fragment:OS,map_particle_fragment:PS,map_particle_pars_fragment:zS,metalnessmap_fragment:IS,metalnessmap_pars_fragment:BS,morphinstance_vertex:FS,morphcolor_vertex:HS,morphnormal_vertex:GS,morphtarget_pars_vertex:VS,morphtarget_vertex:kS,normal_fragment_begin:XS,normal_fragment_maps:jS,normal_pars_fragment:WS,normal_pars_vertex:qS,normal_vertex:YS,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:QS,clearcoat_pars_fragment:JS,iridescence_pars_fragment:$S,opaque_fragment:t2,packing:e2,premultiplied_alpha_fragment:n2,project_vertex:i2,dithering_fragment:a2,dithering_pars_fragment:s2,roughnessmap_fragment:r2,roughnessmap_pars_fragment:o2,shadowmap_pars_fragment:l2,shadowmap_pars_vertex:c2,shadowmap_vertex:u2,shadowmask_pars_fragment:f2,skinbase_vertex:h2,skinning_pars_vertex:d2,skinning_vertex:p2,skinnormal_vertex:m2,specularmap_fragment:g2,specularmap_pars_fragment:v2,tonemapping_fragment:x2,tonemapping_pars_fragment:_2,transmission_fragment:y2,transmission_pars_fragment:M2,uv_pars_fragment:S2,uv_pars_vertex:E2,uv_vertex:b2,worldpos_vertex:T2,background_vert:A2,background_frag:w2,backgroundCube_vert:R2,backgroundCube_frag:C2,cube_vert:D2,cube_frag:L2,depth_vert:U2,depth_frag:N2,distanceRGBA_vert:O2,distanceRGBA_frag:P2,equirect_vert:z2,equirect_frag:I2,linedashed_vert:B2,linedashed_frag:F2,meshbasic_vert:H2,meshbasic_frag:G2,meshlambert_vert:V2,meshlambert_frag:k2,meshmatcap_vert:X2,meshmatcap_frag:j2,meshnormal_vert:W2,meshnormal_frag:q2,meshphong_vert:Y2,meshphong_frag:Z2,meshphysical_vert:K2,meshphysical_frag:Q2,meshtoon_vert:J2,meshtoon_frag:$2,points_vert:tE,points_frag:eE,shadow_vert:nE,shadow_frag:iE,sprite_vert:aE,sprite_frag:sE},Ot={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:In([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:In([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:In([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:In([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:In([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:In([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:In([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:In([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:In([Ot.common,Ot.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:In([Ot.lights,Ot.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Tc={r:0,b:0,g:0},gs=new Pi,rE=new ke;function oE(r,t,i,s,l,c,f){const d=new ye(0);let m=c===!0?0:1,p,g,v=null,_=0,y=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function T(N){let U=!1;const R=E(N);R===null?x(d,m):R&&R.isColor&&(x(R,1),U=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,U){const R=E(U);R&&(R.isCubeTexture||R.mapping===Xc)?(g===void 0&&(g=new be(new ua(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ur(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gs.copy(U.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rE.makeRotationFromEuler(gs)),g.material.toneMapped=we.getTransfer(R.colorSpace)!==Fe,(v!==R||_!==R.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,v=R,_=R.version,y=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new be(new Jo(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ur(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=we.getTransfer(R.colorSpace)!==Fe,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||_!==R.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,v=R,_=R.version,y=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,U){N.getRGB(Tc,hx(r)),s.buffers.color.setClear(Tc.r,Tc.g,Tc.b,U,f)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:T,addToRenderList:M}}function lE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function d(b,H,$,tt,ot){let dt=!1;const z=v(tt,$,H);c!==z&&(c=z,p(c.object)),dt=y(b,tt,$,ot),dt&&E(b,tt,$,ot),ot!==null&&t.update(ot,r.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,R(b,H,$,tt),ot!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function m(){return r.createVertexArray()}function p(b){return r.bindVertexArray(b)}function g(b){return r.deleteVertexArray(b)}function v(b,H,$){const tt=$.wireframe===!0;let ot=s[b.id];ot===void 0&&(ot={},s[b.id]=ot);let dt=ot[H.id];dt===void 0&&(dt={},ot[H.id]=dt);let z=dt[tt];return z===void 0&&(z=_(m()),dt[tt]=z),z}function _(b){const H=[],$=[],tt=[];for(let ot=0;ot<i;ot++)H[ot]=0,$[ot]=0,tt[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:tt,object:b,attributes:{},index:null}}function y(b,H,$,tt){const ot=c.attributes,dt=H.attributes;let z=0;const et=$.getAttributes();for(const q in et)if(et[q].location>=0){const O=ot[q];let V=dt[q];if(V===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),O===void 0||O.attribute!==V||V&&O.data!==V.data)return!0;z++}return c.attributesNum!==z||c.index!==tt}function E(b,H,$,tt){const ot={},dt=H.attributes;let z=0;const et=$.getAttributes();for(const q in et)if(et[q].location>=0){let O=dt[q];O===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(O=b.instanceColor));const V={};V.attribute=O,O&&O.data&&(V.data=O.data),ot[q]=V,z++}c.attributes=ot,c.attributesNum=z,c.index=tt}function T(){const b=c.newAttributes;for(let H=0,$=b.length;H<$;H++)b[H]=0}function M(b){x(b,0)}function x(b,H){const $=c.newAttributes,tt=c.enabledAttributes,ot=c.attributeDivisors;$[b]=1,tt[b]===0&&(r.enableVertexAttribArray(b),tt[b]=1),ot[b]!==H&&(r.vertexAttribDivisor(b,H),ot[b]=H)}function N(){const b=c.newAttributes,H=c.enabledAttributes;for(let $=0,tt=H.length;$<tt;$++)H[$]!==b[$]&&(r.disableVertexAttribArray($),H[$]=0)}function U(b,H,$,tt,ot,dt,z){z===!0?r.vertexAttribIPointer(b,H,$,ot,dt):r.vertexAttribPointer(b,H,$,tt,ot,dt)}function R(b,H,$,tt){T();const ot=tt.attributes,dt=$.getAttributes(),z=H.defaultAttributeValues;for(const et in dt){const q=dt[et];if(q.location>=0){let xt=ot[et];if(xt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),xt!==void 0){const O=xt.normalized,V=xt.itemSize,st=t.get(xt);if(st===void 0)continue;const ht=st.buffer,X=st.type,ct=st.bytesPerElement,mt=X===r.INT||X===r.UNSIGNED_INT||xt.gpuType===Dd;if(xt.isInterleavedBufferAttribute){const bt=xt.data,wt=bt.stride,Xt=xt.offset;if(bt.isInstancedInterleavedBuffer){for(let te=0;te<q.locationSize;te++)x(q.location+te,bt.meshPerAttribute);b.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let te=0;te<q.locationSize;te++)M(q.location+te);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let te=0;te<q.locationSize;te++)U(q.location+te,V/q.locationSize,X,O,wt*ct,(Xt+V/q.locationSize*te)*ct,mt)}else{if(xt.isInstancedBufferAttribute){for(let bt=0;bt<q.locationSize;bt++)x(q.location+bt,xt.meshPerAttribute);b.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let bt=0;bt<q.locationSize;bt++)M(q.location+bt);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let bt=0;bt<q.locationSize;bt++)U(q.location+bt,V/q.locationSize,X,O,V*ct,V/q.locationSize*bt*ct,mt)}}else if(z!==void 0){const O=z[et];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(q.location,O);break;case 3:r.vertexAttrib3fv(q.location,O);break;case 4:r.vertexAttrib4fv(q.location,O);break;default:r.vertexAttrib1fv(q.location,O)}}}}N()}function k(){G();for(const b in s){const H=s[b];for(const $ in H){const tt=H[$];for(const ot in tt)g(tt[ot].object),delete tt[ot];delete H[$]}delete s[b]}}function I(b){if(s[b.id]===void 0)return;const H=s[b.id];for(const $ in H){const tt=H[$];for(const ot in tt)g(tt[ot].object),delete tt[ot];delete H[$]}delete s[b.id]}function B(b){for(const H in s){const $=s[H];if($[b.id]===void 0)continue;const tt=$[b.id];for(const ot in tt)g(tt[ot].object),delete tt[ot];delete $[b.id]}}function G(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:M,disableUnusedAttributes:N}}function cE(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,s,1)}function m(p,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function uE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==bi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const G=B===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ca&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sa&&!G)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:k,maxSamples:I}}function fE(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new xs,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||l;return l=_,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,x=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const N=c?0:s,U=N*4;let R=x.clippingState||null;m.value=R,R=g(E,_,U,y);for(let k=0;k!==U;++k)R[k]=i[k];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,y,E){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const x=y+T*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,R=y;U!==T;++U,R+=4)f.copy(v[U]).applyMatrix4(N,d),f.normal.toArray(M,R),M[R+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function hE(r){let t=new WeakMap;function i(f,d){return d===Wh?f.mapping=Rr:d===qh&&(f.mapping=Cr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Wh||d===qh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new EM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}class gx extends dx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Er=4,av=[.125,.215,.35,.446,.526,.582],Ms=20,Ah=new gx,sv=new ye;let wh=null,Rh=0,Ch=0,Dh=!1;const _s=(1+Math.sqrt(5))/2,Sr=1/_s,rv=[new Z(-_s,Sr,0),new Z(_s,Sr,0),new Z(-Sr,0,_s),new Z(Sr,0,_s),new Z(0,_s,-Sr),new Z(0,_s,Sr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class ov{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wh,Rh,Ch),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:qo,format:bi,colorSpace:Nr,depthBuffer:!1},l=lv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(c)),this._blurMaterial=pE(c,t,i)}return l}_compileMaterial(t){const i=new be(this._lodPlanes[0],t);this._renderer.compile(i,Ah)}_sceneToCubeUV(t,i,s,l){const d=new _n(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(sv),g.toneMapping=Xa,g.autoClear=!1;const y=new Oi({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),E=new be(new ua,y);let T=!1;const M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,T=!0):(y.color.copy(sv),T=!0);for(let x=0;x<6;x++){const N=x%3;N===0?(d.up.set(0,m[x],0),d.lookAt(p[x],0,0)):N===1?(d.up.set(0,0,m[x]),d.lookAt(0,p[x],0)):(d.up.set(0,m[x],0),d.lookAt(0,0,p[x]));const U=this._cubeSize;Ac(l,N*U,x>2?U:0,U,U),g.setRenderTarget(l),T&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=v,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rr||t.mapping===Cr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new be(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Ah)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=rv[(l-c-1)%rv.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new be(this._lodPlanes[l],p),_=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Ms;M>Ms&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ms}`);const x=[];let N=0;for(let B=0;B<Ms;++B){const G=B/T,C=Math.exp(-G*G/2);x.push(C),B===0?N+=C:B<M&&(N+=2*C)}for(let B=0;B<x.length;B++)x[B]=x[B]/N;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=f==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-s;const R=this._sizeLods[l],k=3*R*(l>U-Er?l-U+Er:0),I=4*(this._cubeSize-R);Ac(i,k,I,3*R,2*R),m.setRenderTarget(i),m.render(v,Ah)}}function dE(r){const t=[],i=[],s=[];let l=r;const c=r-Er+1+av.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Er?m=av[f-r+Er-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,T=3,M=2,x=1,N=new Float32Array(T*E*y),U=new Float32Array(M*E*y),R=new Float32Array(x*E*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,G=I>2?0:-1,C=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];N.set(C,T*E*I),U.set(_,M*E*I);const b=[I,I,I,I,I,I];R.set(b,x*E*I)}const k=new Nn;k.setAttribute("position",new di(N,T)),k.setAttribute("uv",new di(U,M)),k.setAttribute("faceIndex",new di(R,x)),t.push(k),l>Er&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function lv(r,t,i){const s=new As(r,t,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ac(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function pE(r,t,i){const s=new Float32Array(Ms),l=new Z(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function cv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function uv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mE(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,g=m===Rr||m===Cr;if(p||g){let v=t.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new ov(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new ov(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function gE(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function vE(r,t,i,s){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);for(const E in _.morphAttributes){const T=_.morphAttributes[E];for(let M=0,x=T.length;M<x;M++)t.remove(T[M])}_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const E in _)t.update(_[E],r.ARRAY_BUFFER);const y=v.morphAttributes;for(const E in y){const T=y[E];for(let M=0,x=T.length;M<x;M++)t.update(T[M],r.ARRAY_BUFFER)}}function p(v){const _=[],y=v.index,E=v.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let U=0,R=N.length;U<R;U+=3){const k=N[U+0],I=N[U+1],B=N[U+2];_.push(k,I,I,B,B,k)}}else if(E!==void 0){const N=E.array;T=E.version;for(let U=0,R=N.length/3-1;U<R;U+=3){const k=U+0,I=U+1,B=U+2;_.push(k,I,I,B,B,k)}}else return;const M=new(rx(_)?fx:ux)(_,1);M.version=T;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function xE(r,t,i){let s;function l(_){s=_}let c,f;function d(_){c=_.type,f=_.bytesPerElement}function m(_,y){r.drawElements(s,y,c,_*f),i.update(y,s,1)}function p(_,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,_*f,E),i.update(y,s,E))}function g(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];i.update(M,s,1)}function v(_,y,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)p(_[x]/f,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,T,0,E);let x=0;for(let N=0;N<E;N++)x+=y[N]*T[N];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function _E(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function yE(r,t,i){const s=new WeakMap,l=new He;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(d);if(_===void 0||_.count!==v){let C=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;y===!0&&(U=1),E===!0&&(U=2),T===!0&&(U=3);let R=d.attributes.position.count*U,k=1;R>t.maxTextureSize&&(k=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const I=new Float32Array(R*k*4*v),B=new lx(I,R,k,v);B.type=sa,B.needsUpdate=!0;const G=U*4;for(let b=0;b<v;b++){const H=M[b],$=x[b],tt=N[b],ot=R*k*4*b;for(let dt=0;dt<H.count;dt++){const z=dt*G;y===!0&&(l.fromBufferAttribute(H,dt),I[ot+z+0]=l.x,I[ot+z+1]=l.y,I[ot+z+2]=l.z,I[ot+z+3]=0),E===!0&&(l.fromBufferAttribute($,dt),I[ot+z+4]=l.x,I[ot+z+5]=l.y,I[ot+z+6]=l.z,I[ot+z+7]=0),T===!0&&(l.fromBufferAttribute(tt,dt),I[ot+z+8]=l.x,I[ot+z+9]=l.y,I[ot+z+10]=l.z,I[ot+z+11]=tt.itemSize===4?l.w:1)}}_={count:v,texture:B,size:new he(R,k)},s.set(d,_),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let y=0;for(let T=0;T<p.length;T++)y+=p[T];const E=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function ME(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}class vx extends Un{constructor(t,i,s,l,c,f,d,m,p,g=Tr){if(g!==Tr&&g!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Tr&&(s=Ts),s===void 0&&g===Lr&&(s=Dr),super(null,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const xx=new Un,fv=new vx(1,1),_x=new lx,yx=new oM,Mx=new px,hv=[],dv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function Pr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=hv[l];if(c===void 0&&(c=new Float32Array(l),hv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function fn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function hn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function qc(r,t){let i=dv[t];i===void 0&&(i=new Int32Array(t),dv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function SE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function EE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2fv(this.addr,t),hn(i,t)}}function bE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;r.uniform3fv(this.addr,t),hn(i,t)}}function TE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4fv(this.addr,t),hn(i,t)}}function AE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;gv.set(s),r.uniformMatrix2fv(this.addr,!1,gv),hn(i,s)}}function wE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;mv.set(s),r.uniformMatrix3fv(this.addr,!1,mv),hn(i,s)}}function RE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;pv.set(s),r.uniformMatrix4fv(this.addr,!1,pv),hn(i,s)}}function CE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function DE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2iv(this.addr,t),hn(i,t)}}function LE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;r.uniform3iv(this.addr,t),hn(i,t)}}function UE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4iv(this.addr,t),hn(i,t)}}function NE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function OE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2uiv(this.addr,t),hn(i,t)}}function PE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;r.uniform3uiv(this.addr,t),hn(i,t)}}function zE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4uiv(this.addr,t),hn(i,t)}}function IE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(fv.compareFunction=sx,c=fv):c=xx,i.setTexture2D(t||c,l)}function BE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||yx,l)}function FE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Mx,l)}function HE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_x,l)}function GE(r){switch(r){case 5126:return SE;case 35664:return EE;case 35665:return bE;case 35666:return TE;case 35674:return AE;case 35675:return wE;case 35676:return RE;case 5124:case 35670:return CE;case 35667:case 35671:return DE;case 35668:case 35672:return LE;case 35669:case 35673:return UE;case 5125:return NE;case 36294:return OE;case 36295:return PE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return BE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return HE}}function VE(r,t){r.uniform1fv(this.addr,t)}function kE(r,t){const i=Pr(t,this.size,2);r.uniform2fv(this.addr,i)}function XE(r,t){const i=Pr(t,this.size,3);r.uniform3fv(this.addr,i)}function jE(r,t){const i=Pr(t,this.size,4);r.uniform4fv(this.addr,i)}function WE(r,t){const i=Pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function qE(r,t){const i=Pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function YE(r,t){const i=Pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ZE(r,t){r.uniform1iv(this.addr,t)}function KE(r,t){r.uniform2iv(this.addr,t)}function QE(r,t){r.uniform3iv(this.addr,t)}function JE(r,t){r.uniform4iv(this.addr,t)}function $E(r,t){r.uniform1uiv(this.addr,t)}function tb(r,t){r.uniform2uiv(this.addr,t)}function eb(r,t){r.uniform3uiv(this.addr,t)}function nb(r,t){r.uniform4uiv(this.addr,t)}function ib(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||xx,c[f])}function ab(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||yx,c[f])}function sb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Mx,c[f])}function rb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||_x,c[f])}function ob(r){switch(r){case 5126:return VE;case 35664:return kE;case 35665:return XE;case 35666:return jE;case 35674:return WE;case 35675:return qE;case 35676:return YE;case 5124:case 35670:return ZE;case 35667:case 35671:return KE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return $E;case 36294:return tb;case 36295:return eb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}class lb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=GE(i.type)}}class cb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ob(i.type)}}class ub{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function vv(r,t){r.seq.push(t),r.map[t.id]=t}function fb(r,t,i){const s=r.name,l=s.length;for(Lh.lastIndex=0;;){const c=Lh.exec(s),f=Lh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){vv(i,p===void 0?new lb(d,r,t):new cb(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new ub(d),vv(i,v)),i=v}}}class Bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);fb(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function xv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const hb=37297;let db=0;function pb(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const _v=new ue;function mb(r){we._getMatrix(_v,we.workingColorSpace,r);const t=`mat3( ${_v.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case jc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function yv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+pb(r.getShaderSource(t),f)}else return l}function gb(r,t){const i=mb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function vb(r,t){let i;switch(t){case Py:i="Linear";break;case zy:i="Reinhard";break;case Iy:i="Cineon";break;case Cs:i="ACESFilmic";break;case Fy:i="AgX";break;case Hy:i="Neutral";break;case By:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new Z;function xb(){we.getLuminanceCoefficients(wc);const r=wc.x.toFixed(4),t=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function yb(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Mb(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Xo(r){return r!==""}function Mv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(r){return r.replace(Sb,bb)}const Eb=new Map;function bb(r,t){let i=fe[t];if(i===void 0){const s=Eb.get(t);if(s!==void 0)i=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ed(i)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(r){return r.replace(Tb,Ab)}function Ab(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function bv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===jv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===py?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function Rb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Db(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wv:t="ENVMAP_BLENDING_MULTIPLY";break;case Ny:t="ENVMAP_BLENDING_MIX";break;case Oy:t="ENVMAP_BLENDING_ADD";break}return t}function Lb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Ub(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=wb(i),p=Rb(i),g=Cb(i),v=Db(i),_=Lb(i),y=_b(i),E=yb(c),T=l.createProgram();let M,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(M=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Xa?vb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,gb("linearToOutputTexel",i.outputColorSpace),xb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Ed(f),f=Mv(f,i),f=Sv(f,i),d=Ed(d),d=Mv(d,i),d=Sv(d,i),f=Ev(f),d=Ev(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=N+M+f,R=N+x+d,k=xv(l,l.VERTEX_SHADER,U),I=xv(l,l.FRAGMENT_SHADER,R);l.attachShader(T,k),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(H){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(T).trim(),tt=l.getShaderInfoLog(k).trim(),ot=l.getShaderInfoLog(I).trim();let dt=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(dt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,k,I);else{const et=yv(l,k,"vertex"),q=yv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+et+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(tt===""||ot==="")&&(z=!1);z&&(H.diagnostics={runnable:dt,programLog:$,vertexShader:{log:tt,prefix:M},fragmentShader:{log:ot,prefix:x}})}l.deleteShader(k),l.deleteShader(I),G=new Bc(l,T),C=Mb(l,T)}let G;this.getUniforms=function(){return G===void 0&&B(this),G};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(T,hb)),b},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=db++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=I,this}let Nb=0;class Ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Pb(t),i.set(t,s)),s}}class Pb{constructor(t){this.id=Nb++,this.code=t,this.usedTimes=0}}function zb(r,t,i,s,l,c,f){const d=new zd,m=new Ob,p=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,b,H,$,tt){const ot=$.fog,dt=tt.geometry,z=C.isMeshStandardMaterial?$.environment:null,et=(C.isMeshStandardMaterial?i:t).get(C.envMap||z),q=et&&et.mapping===Xc?et.image.height:null,xt=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const O=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,V=O!==void 0?O.length:0;let st=0;dt.morphAttributes.position!==void 0&&(st=1),dt.morphAttributes.normal!==void 0&&(st=2),dt.morphAttributes.color!==void 0&&(st=3);let ht,X,ct,mt;if(xt){const Re=Ni[xt];ht=Re.vertexShader,X=Re.fragmentShader}else ht=C.vertexShader,X=C.fragmentShader,m.update(C),ct=m.getVertexShaderID(C),mt=m.getFragmentShaderID(C);const bt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Xt=tt.isInstancedMesh===!0,te=tt.isBatchedMesh===!0,de=!!C.map,ie=!!C.matcap,Rt=!!et,j=!!C.aoMap,oe=!!C.lightMap,Vt=!!C.bumpMap,Gt=!!C.normalMap,Ht=!!C.displacementMap,Ut=!!C.emissiveMap,Lt=!!C.metalnessMap,P=!!C.roughnessMap,A=C.anisotropy>0,at=C.clearcoat>0,yt=C.dispersion>0,Et=C.iridescence>0,vt=C.sheen>0,It=C.transmission>0,Ct=A&&!!C.anisotropyMap,Dt=at&&!!C.clearcoatMap,ge=at&&!!C.clearcoatNormalMap,Tt=at&&!!C.clearcoatRoughnessMap,kt=Et&&!!C.iridescenceMap,Qt=Et&&!!C.iridescenceThicknessMap,ee=vt&&!!C.sheenColorMap,Bt=vt&&!!C.sheenRoughnessMap,pe=!!C.specularMap,re=!!C.specularColorMap,Pe=!!C.specularIntensityMap,Y=It&&!!C.transmissionMap,Nt=It&&!!C.thicknessMap,pt=!!C.gradientMap,Mt=!!C.alphaMap,Ft=C.alphaTest>0,Pt=!!C.alphaHash,le=!!C.extensions;let Xe=Xa;C.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const nn={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:ht,fragmentShader:X,defines:C.defines,customVertexShaderID:ct,customFragmentShaderID:mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:te,batchingColor:te&&tt._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&tt.instanceColor!==null,instancingMorph:Xt&&tt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Nr,alphaToCoverage:!!C.alphaToCoverage,map:de,matcap:ie,envMap:Rt,envMapMode:Rt&&et.mapping,envMapCubeUVHeight:q,aoMap:j,lightMap:oe,bumpMap:Vt,normalMap:Gt,displacementMap:_&&Ht,emissiveMap:Ut,normalMapObjectSpace:Gt&&C.normalMapType===Xy,normalMapTangentSpace:Gt&&C.normalMapType===ax,metalnessMap:Lt,roughnessMap:P,anisotropy:A,anisotropyMap:Ct,clearcoat:at,clearcoatMap:Dt,clearcoatNormalMap:ge,clearcoatRoughnessMap:Tt,dispersion:yt,iridescence:Et,iridescenceMap:kt,iridescenceThicknessMap:Qt,sheen:vt,sheenColorMap:ee,sheenRoughnessMap:Bt,specularMap:pe,specularColorMap:re,specularIntensityMap:Pe,transmission:It,transmissionMap:Y,thicknessMap:Nt,gradientMap:pt,opaque:C.transparent===!1&&C.blending===br&&C.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ft,alphaHash:Pt,combine:C.combine,mapUv:de&&T(C.map.channel),aoMapUv:j&&T(C.aoMap.channel),lightMapUv:oe&&T(C.lightMap.channel),bumpMapUv:Vt&&T(C.bumpMap.channel),normalMapUv:Gt&&T(C.normalMap.channel),displacementMapUv:Ht&&T(C.displacementMap.channel),emissiveMapUv:Ut&&T(C.emissiveMap.channel),metalnessMapUv:Lt&&T(C.metalnessMap.channel),roughnessMapUv:P&&T(C.roughnessMap.channel),anisotropyMapUv:Ct&&T(C.anisotropyMap.channel),clearcoatMapUv:Dt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:ge&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(C.sheenRoughnessMap.channel),specularMapUv:pe&&T(C.specularMap.channel),specularColorMapUv:re&&T(C.specularColorMap.channel),specularIntensityMapUv:Pe&&T(C.specularIntensityMap.channel),transmissionMapUv:Y&&T(C.transmissionMap.channel),thicknessMapUv:Nt&&T(C.thicknessMap.channel),alphaMapUv:Mt&&T(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Gt||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!dt.attributes.uv&&(de||Mt),fog:!!ot,useFog:C.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:wt,skinning:tt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:de&&C.map.isVideoTexture===!0&&we.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ut&&C.emissiveMap.isVideoTexture===!0&&we.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Mi,flipSided:C.side===jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:le&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&C.extensions.multiDraw===!0||te)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return nn.vertexUv1s=p.has(1),nn.vertexUv2s=p.has(2),nn.vertexUv3s=p.has(3),p.clear(),nn}function x(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)b.push(H),b.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(N(b,C),U(b,C),b.push(r.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function N(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function U(C,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),C.push(d.mask)}function R(C){const b=E[C.type];let H;if(b){const $=Ni[b];H=_M.clone($.uniforms)}else H=C.uniforms;return H}function k(C,b){let H;for(let $=0,tt=g.length;$<tt;$++){const ot=g[$];if(ot.cacheKey===b){H=ot,++H.usedTimes;break}}return H===void 0&&(H=new Ub(r,b,C,c),g.push(H)),H}function I(C){if(--C.usedTimes===0){const b=g.indexOf(C);g[b]=g[g.length-1],g.pop(),C.destroy()}}function B(C){m.remove(C)}function G(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:R,acquireProgram:k,releaseProgram:I,releaseShaderCache:B,programs:g,dispose:G}}function Ib(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function Bb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Tv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Av(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v,_,y,E,T,M){let x=r[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:E,renderOrder:v.renderOrder,z:T,group:M},r[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=T,x.group=M),t++,x}function d(v,_,y,E,T,M){const x=f(v,_,y,E,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(v,_,y,E,T,M){const x=f(v,_,y,E,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,_){i.length>1&&i.sort(v||Bb),s.length>1&&s.sort(_||Tv),l.length>1&&l.sort(_||Tv)}function g(){for(let v=t,_=r.length;v<_;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function Fb(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Av,r.set(s,[f])):l>=c.length?(f=new Av,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function Hb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new ye};break;case"SpotLight":i={position:new Z,direction:new Z,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function Gb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let Vb=0;function kb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Xb(r){const t=new Hb,i=Gb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new ke,f=new ke;function d(p){let g=0,v=0,_=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,E=0,T=0,M=0,x=0,N=0,U=0,R=0,k=0,I=0,B=0;p.sort(kb);for(let C=0,b=p.length;C<b;C++){const H=p[C],$=H.color,tt=H.intensity,ot=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=$.r*tt,v+=$.g*tt,_+=$.b*tt;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],tt);B++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const et=H.shadow,q=i.get(H);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=dt,s.directionalShadowMatrix[y]=H.shadow.matrix,N++}s.directional[y]=z,y++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy($).multiplyScalar(tt),z.distance=ot,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[T]=z;const et=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,et.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[T]=et.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,s.spotShadow[T]=q,s.spotShadowMap[T]=dt,R++}T++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy($).multiplyScalar(tt),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=z,M++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const et=H.shadow,q=i.get(H);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,q.shadowCameraNear=et.camera.near,q.shadowCameraFar=et.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=dt,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=z,E++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(tt),z.groundColor.copy(H.groundColor).multiplyScalar(tt),s.hemi[x]=z,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const G=s.hash;(G.directionalLength!==y||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==M||G.hemiLength!==x||G.numDirectionalShadows!==N||G.numPointShadows!==U||G.numSpotShadows!==R||G.numSpotMaps!==k||G.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=R+k-I,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=B,G.directionalLength=y,G.pointLength=E,G.spotLength=T,G.rectAreaLength=M,G.hemiLength=x,G.numDirectionalShadows=N,G.numPointShadows=U,G.numSpotShadows=R,G.numSpotMaps=k,G.numLightProbes=B,s.version=Vb++)}function m(p,g){let v=0,_=0,y=0,E=0,T=0;const M=g.matrixWorldInverse;for(let x=0,N=p.length;x<N;x++){const U=p[x];if(U.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),v++}else if(U.isSpotLight){const R=s.spot[y];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const R=s.point[_];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function wv(r){const t=new Xb(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function jb(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new wv(r),t.set(l,[d])):c>=f.length?(d=new wv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}class Wb extends Ds{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qb extends Ds{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kb(r,t,i){let s=new Id;const l=new he,c=new he,f=new He,d=new Wb({depthPacking:ky}),m=new qb,p={},g=i.maxTextureSize,v={[ja]:jn,[jn]:ja,[Mi]:Mi},_=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Yb,fragmentShader:Zb}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Nn;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new be(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let x=this.type;this.render=function(I,B,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),$=r.state;$.setBlending(ka),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const tt=x!==aa&&this.type===aa,ot=x===aa&&this.type!==aa;for(let dt=0,z=I.length;dt<z;dt++){const et=I[dt],q=et.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const xt=q.getFrameExtents();if(l.multiply(xt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,q.mapSize.y=c.y)),q.map===null||tt===!0||ot===!0){const V=this.type!==aa?{minFilter:Ti,magFilter:Ti}:{};q.map!==null&&q.map.dispose(),q.map=new As(l.x,l.y,V),q.map.texture.name=et.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const O=q.getViewportCount();for(let V=0;V<O;V++){const st=q.getViewport(V);f.set(c.x*st.x,c.y*st.y,c.x*st.z,c.y*st.w),$.viewport(f),q.updateMatrices(et,V),s=q.getFrustum(),R(B,G,q.camera,et,this.type)}q.isPointLightShadow!==!0&&this.type===aa&&N(q,G),q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(C,b,H)};function N(I,B){const G=t.update(T);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new As(l.x,l.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(B,null,G,_,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(B,null,G,y,T,null)}function U(I,B,G,C){let b=null;const H=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)b=H;else if(b=G.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const $=b.uuid,tt=B.uuid;let ot=p[$];ot===void 0&&(ot={},p[$]=ot);let dt=ot[tt];dt===void 0&&(dt=b.clone(),ot[tt]=dt,B.addEventListener("dispose",k)),b=dt}if(b.visible=B.visible,b.wireframe=B.wireframe,C===aa?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:v[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=r.properties.get(b);$.light=G}return b}function R(I,B,G,C,b){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===aa)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const tt=t.update(I),ot=I.material;if(Array.isArray(ot)){const dt=tt.groups;for(let z=0,et=dt.length;z<et;z++){const q=dt[z],xt=ot[q.materialIndex];if(xt&&xt.visible){const O=U(I,xt,C,b);I.onBeforeShadow(r,I,B,G,tt,O,q),r.renderBufferDirect(G,null,tt,O,I,q),I.onAfterShadow(r,I,B,G,tt,O,q)}}}else if(ot.visible){const dt=U(I,ot,C,b);I.onBeforeShadow(r,I,B,G,tt,dt,null),r.renderBufferDirect(G,null,tt,dt,I,null),I.onAfterShadow(r,I,B,G,tt,dt,null)}}const $=I.children;for(let tt=0,ot=$.length;tt<ot;tt++)R($[tt],B,G,C,b)}function k(I){I.target.removeEventListener("dispose",k);for(const G in p){const C=p[G],b=I.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const Qb={[Fh]:Hh,[Gh]:Xh,[Vh]:jh,[wr]:kh,[Hh]:Fh,[Xh]:Gh,[jh]:Vh,[kh]:wr};function Jb(r,t){function i(){let Y=!1;const Nt=new He;let pt=null;const Mt=new He(0,0,0,0);return{setMask:function(Ft){pt!==Ft&&!Y&&(r.colorMask(Ft,Ft,Ft,Ft),pt=Ft)},setLocked:function(Ft){Y=Ft},setClear:function(Ft,Pt,le,Xe,nn){nn===!0&&(Ft*=Xe,Pt*=Xe,le*=Xe),Nt.set(Ft,Pt,le,Xe),Mt.equals(Nt)===!1&&(r.clearColor(Ft,Pt,le,Xe),Mt.copy(Nt))},reset:function(){Y=!1,pt=null,Mt.set(-1,0,0,0)}}}function s(){let Y=!1,Nt=!1,pt=null,Mt=null,Ft=null;return{setReversed:function(Pt){if(Nt!==Pt){const le=t.get("EXT_clip_control");Nt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const Xe=Ft;Ft=null,this.setClear(Xe)}Nt=Pt},getReversed:function(){return Nt},setTest:function(Pt){Pt?bt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(Pt){pt!==Pt&&!Y&&(r.depthMask(Pt),pt=Pt)},setFunc:function(Pt){if(Nt&&(Pt=Qb[Pt]),Mt!==Pt){switch(Pt){case Fh:r.depthFunc(r.NEVER);break;case Hh:r.depthFunc(r.ALWAYS);break;case Gh:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case Vh:r.depthFunc(r.EQUAL);break;case kh:r.depthFunc(r.GEQUAL);break;case Xh:r.depthFunc(r.GREATER);break;case jh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Mt=Pt}},setLocked:function(Pt){Y=Pt},setClear:function(Pt){Ft!==Pt&&(Nt&&(Pt=1-Pt),r.clearDepth(Pt),Ft=Pt)},reset:function(){Y=!1,pt=null,Mt=null,Ft=null,Nt=!1}}}function l(){let Y=!1,Nt=null,pt=null,Mt=null,Ft=null,Pt=null,le=null,Xe=null,nn=null;return{setTest:function(Re){Y||(Re?bt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Re){Nt!==Re&&!Y&&(r.stencilMask(Re),Nt=Re)},setFunc:function(Re,Wn,dn){(pt!==Re||Mt!==Wn||Ft!==dn)&&(r.stencilFunc(Re,Wn,dn),pt=Re,Mt=Wn,Ft=dn)},setOp:function(Re,Wn,dn){(Pt!==Re||le!==Wn||Xe!==dn)&&(r.stencilOp(Re,Wn,dn),Pt=Re,le=Wn,Xe=dn)},setLocked:function(Re){Y=Re},setClear:function(Re){nn!==Re&&(r.clearStencil(Re),nn=Re)},reset:function(){Y=!1,Nt=null,pt=null,Mt=null,Ft=null,Pt=null,le=null,Xe=null,nn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,y=[],E=null,T=!1,M=null,x=null,N=null,U=null,R=null,k=null,I=null,B=new ye(0,0,0),G=0,C=!1,b=null,H=null,$=null,tt=null,ot=null;const dt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,et=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=et>=2);let xt=null,O={};const V=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),ht=new He().fromArray(V),X=new He().fromArray(st);function ct(Y,Nt,pt,Mt){const Ft=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(Y,Pt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let le=0;le<pt;le++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,Mt,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(Nt+le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return Pt}const mt={};mt[r.TEXTURE_2D]=ct(r.TEXTURE_2D,r.TEXTURE_2D,1),mt[r.TEXTURE_CUBE_MAP]=ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[r.TEXTURE_2D_ARRAY]=ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),mt[r.TEXTURE_3D]=ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),bt(r.DEPTH_TEST),f.setFunc(wr),Vt(!1),Gt(Ug),bt(r.CULL_FACE),j(ka);function bt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function wt(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Xt(Y,Nt){return v[Y]!==Nt?(r.bindFramebuffer(Y,Nt),v[Y]=Nt,Y===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Nt),Y===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function te(Y,Nt){let pt=y,Mt=!1;if(Y){pt=_.get(Nt),pt===void 0&&(pt=[],_.set(Nt,pt));const Ft=Y.textures;if(pt.length!==Ft.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,le=Ft.length;Pt<le;Pt++)pt[Pt]=r.COLOR_ATTACHMENT0+Pt;pt.length=Ft.length,Mt=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,Mt=!0);Mt&&r.drawBuffers(pt)}function de(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const ie={[ys]:r.FUNC_ADD,[gy]:r.FUNC_SUBTRACT,[vy]:r.FUNC_REVERSE_SUBTRACT};ie[xy]=r.MIN,ie[_y]=r.MAX;const Rt={[yy]:r.ZERO,[My]:r.ONE,[Sy]:r.SRC_COLOR,[Ih]:r.SRC_ALPHA,[Ry]:r.SRC_ALPHA_SATURATE,[Ay]:r.DST_COLOR,[by]:r.DST_ALPHA,[Ey]:r.ONE_MINUS_SRC_COLOR,[Bh]:r.ONE_MINUS_SRC_ALPHA,[wy]:r.ONE_MINUS_DST_COLOR,[Ty]:r.ONE_MINUS_DST_ALPHA,[Cy]:r.CONSTANT_COLOR,[Dy]:r.ONE_MINUS_CONSTANT_COLOR,[Ly]:r.CONSTANT_ALPHA,[Uy]:r.ONE_MINUS_CONSTANT_ALPHA};function j(Y,Nt,pt,Mt,Ft,Pt,le,Xe,nn,Re){if(Y===ka){T===!0&&(wt(r.BLEND),T=!1);return}if(T===!1&&(bt(r.BLEND),T=!0),Y!==my){if(Y!==M||Re!==C){if((x!==ys||R!==ys)&&(r.blendEquation(r.FUNC_ADD),x=ys,R=ys),Re)switch(Y){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zh:r.blendFunc(r.ONE,r.ONE);break;case Ng:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Og:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ng:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Og:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}N=null,U=null,k=null,I=null,B.set(0,0,0),G=0,M=Y,C=Re}return}Ft=Ft||Nt,Pt=Pt||pt,le=le||Mt,(Nt!==x||Ft!==R)&&(r.blendEquationSeparate(ie[Nt],ie[Ft]),x=Nt,R=Ft),(pt!==N||Mt!==U||Pt!==k||le!==I)&&(r.blendFuncSeparate(Rt[pt],Rt[Mt],Rt[Pt],Rt[le]),N=pt,U=Mt,k=Pt,I=le),(Xe.equals(B)===!1||nn!==G)&&(r.blendColor(Xe.r,Xe.g,Xe.b,nn),B.copy(Xe),G=nn),M=Y,C=!1}function oe(Y,Nt){Y.side===Mi?wt(r.CULL_FACE):bt(r.CULL_FACE);let pt=Y.side===jn;Nt&&(pt=!pt),Vt(pt),Y.blending===br&&Y.transparent===!1?j(ka):j(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Mt=Y.stencilWrite;d.setTest(Mt),Mt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ut(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(Y){b!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),b=Y)}function Gt(Y){Y!==hy?(bt(r.CULL_FACE),Y!==H&&(Y===Ug?r.cullFace(r.BACK):Y===dy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),H=Y}function Ht(Y){Y!==$&&(z&&r.lineWidth(Y),$=Y)}function Ut(Y,Nt,pt){Y?(bt(r.POLYGON_OFFSET_FILL),(tt!==Nt||ot!==pt)&&(r.polygonOffset(Nt,pt),tt=Nt,ot=pt)):wt(r.POLYGON_OFFSET_FILL)}function Lt(Y){Y?bt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function P(Y){Y===void 0&&(Y=r.TEXTURE0+dt-1),xt!==Y&&(r.activeTexture(Y),xt=Y)}function A(Y,Nt,pt){pt===void 0&&(xt===null?pt=r.TEXTURE0+dt-1:pt=xt);let Mt=O[pt];Mt===void 0&&(Mt={type:void 0,texture:void 0},O[pt]=Mt),(Mt.type!==Y||Mt.texture!==Nt)&&(xt!==pt&&(r.activeTexture(pt),xt=pt),r.bindTexture(Y,Nt||mt[Y]),Mt.type=Y,Mt.texture=Nt)}function at(){const Y=O[xt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function yt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function vt(){try{r.texSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{r.texSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{r.texStorage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kt(){try{r.texImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{r.texImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ee(Y){ht.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),ht.copy(Y))}function Bt(Y){X.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),X.copy(Y))}function pe(Y,Nt){let pt=p.get(Nt);pt===void 0&&(pt=new WeakMap,p.set(Nt,pt));let Mt=pt.get(Y);Mt===void 0&&(Mt=r.getUniformBlockIndex(Nt,Y.name),pt.set(Y,Mt))}function re(Y,Nt){const Mt=p.get(Nt).get(Y);m.get(Nt)!==Mt&&(r.uniformBlockBinding(Nt,Mt,Y.__bindingPointIndex),m.set(Nt,Mt))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},xt=null,O={},v={},_=new WeakMap,y=[],E=null,T=!1,M=null,x=null,N=null,U=null,R=null,k=null,I=null,B=new ye(0,0,0),G=0,C=!1,b=null,H=null,$=null,tt=null,ot=null,ht.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:bt,disable:wt,bindFramebuffer:Xt,drawBuffers:te,useProgram:de,setBlending:j,setMaterial:oe,setFlipSided:Vt,setCullFace:Gt,setLineWidth:Ht,setPolygonOffset:Ut,setScissorTest:Lt,activeTexture:P,bindTexture:A,unbindTexture:at,compressedTexImage2D:yt,compressedTexImage3D:Et,texImage2D:kt,texImage3D:Qt,updateUBOMapping:pe,uniformBlockBinding:re,texStorage2D:ge,texStorage3D:Tt,texSubImage2D:vt,texSubImage3D:It,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Dt,scissor:ee,viewport:Bt,reset:Pe}}function Rv(r,t,i,s){const l=$b(s);switch(i){case Qv:return r*t;case $v:return r*t;case tx:return r*t*2;case ex:return r*t/l.components*l.byteLength;case Nd:return r*t/l.components*l.byteLength;case nx:return r*t*2/l.components*l.byteLength;case Od:return r*t*2/l.components*l.byteLength;case Jv:return r*t*3/l.components*l.byteLength;case bi:return r*t*4/l.components*l.byteLength;case Pd:return r*t*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qh:case $h:return Math.max(r,16)*Math.max(t,8)/4;case Kh:case Jh:return Math.max(r,8)*Math.max(t,8)/2;case td:case ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case sd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case od:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case cd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ud:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case pd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case md:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ic:case vd:case xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ix:case _d:return Math.ceil(r/4)*Math.ceil(t/4)*8;case yd:case Md:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $b(r){switch(r){case ca:case Yv:return{byteLength:1,components:1};case jo:case Zv:case qo:return{byteLength:2,components:1};case Ld:case Ud:return{byteLength:2,components:4};case Ts:case Dd:case sa:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function tT(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return y?new OffscreenCanvas(P,A):Wo("canvas")}function T(P,A,at){let yt=1;const Et=Lt(P);if((Et.width>at||Et.height>at)&&(yt=at/Math.max(Et.width,Et.height)),yt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const vt=Math.floor(yt*Et.width),It=Math.floor(yt*Et.height);v===void 0&&(v=E(vt,It));const Ct=A?E(vt,It):v;return Ct.width=vt,Ct.height=It,Ct.getContext("2d").drawImage(P,0,0,vt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+vt+"x"+It+")."),Ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),P;return P}function M(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(P,A,at,yt,Et=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let vt=A;if(A===r.RED&&(at===r.FLOAT&&(vt=r.R32F),at===r.HALF_FLOAT&&(vt=r.R16F),at===r.UNSIGNED_BYTE&&(vt=r.R8)),A===r.RED_INTEGER&&(at===r.UNSIGNED_BYTE&&(vt=r.R8UI),at===r.UNSIGNED_SHORT&&(vt=r.R16UI),at===r.UNSIGNED_INT&&(vt=r.R32UI),at===r.BYTE&&(vt=r.R8I),at===r.SHORT&&(vt=r.R16I),at===r.INT&&(vt=r.R32I)),A===r.RG&&(at===r.FLOAT&&(vt=r.RG32F),at===r.HALF_FLOAT&&(vt=r.RG16F),at===r.UNSIGNED_BYTE&&(vt=r.RG8)),A===r.RG_INTEGER&&(at===r.UNSIGNED_BYTE&&(vt=r.RG8UI),at===r.UNSIGNED_SHORT&&(vt=r.RG16UI),at===r.UNSIGNED_INT&&(vt=r.RG32UI),at===r.BYTE&&(vt=r.RG8I),at===r.SHORT&&(vt=r.RG16I),at===r.INT&&(vt=r.RG32I)),A===r.RGB_INTEGER&&(at===r.UNSIGNED_BYTE&&(vt=r.RGB8UI),at===r.UNSIGNED_SHORT&&(vt=r.RGB16UI),at===r.UNSIGNED_INT&&(vt=r.RGB32UI),at===r.BYTE&&(vt=r.RGB8I),at===r.SHORT&&(vt=r.RGB16I),at===r.INT&&(vt=r.RGB32I)),A===r.RGBA_INTEGER&&(at===r.UNSIGNED_BYTE&&(vt=r.RGBA8UI),at===r.UNSIGNED_SHORT&&(vt=r.RGBA16UI),at===r.UNSIGNED_INT&&(vt=r.RGBA32UI),at===r.BYTE&&(vt=r.RGBA8I),at===r.SHORT&&(vt=r.RGBA16I),at===r.INT&&(vt=r.RGBA32I)),A===r.RGB&&at===r.UNSIGNED_INT_5_9_9_9_REV&&(vt=r.RGB9_E5),A===r.RGBA){const It=Et?jc:we.getTransfer(yt);at===r.FLOAT&&(vt=r.RGBA32F),at===r.HALF_FLOAT&&(vt=r.RGBA16F),at===r.UNSIGNED_BYTE&&(vt=It===Fe?r.SRGB8_ALPHA8:r.RGBA8),at===r.UNSIGNED_SHORT_4_4_4_4&&(vt=r.RGBA4),at===r.UNSIGNED_SHORT_5_5_5_1&&(vt=r.RGB5_A1)}return(vt===r.R16F||vt===r.R32F||vt===r.RG16F||vt===r.RG32F||vt===r.RGBA16F||vt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function R(P,A){let at;return P?A===null||A===Ts||A===Dr?at=r.DEPTH24_STENCIL8:A===sa?at=r.DEPTH32F_STENCIL8:A===jo&&(at=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ts||A===Dr?at=r.DEPTH_COMPONENT24:A===sa?at=r.DEPTH_COMPONENT32F:A===jo&&(at=r.DEPTH_COMPONENT16),at}function k(P,A){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ti&&P.minFilter!==Ei?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function I(P){const A=P.target;A.removeEventListener("dispose",I),G(A),A.isVideoTexture&&g.delete(A)}function B(P){const A=P.target;A.removeEventListener("dispose",B),b(A)}function G(P){const A=s.get(P);if(A.__webglInit===void 0)return;const at=P.source,yt=_.get(at);if(yt){const Et=yt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&C(P),Object.keys(yt).length===0&&_.delete(at)}s.remove(P)}function C(P){const A=s.get(P);r.deleteTexture(A.__webglTexture);const at=P.source,yt=_.get(at);delete yt[A.__cacheKey],f.memory.textures--}function b(P){const A=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(A.__webglFramebuffer[yt]))for(let Et=0;Et<A.__webglFramebuffer[yt].length;Et++)r.deleteFramebuffer(A.__webglFramebuffer[yt][Et]);else r.deleteFramebuffer(A.__webglFramebuffer[yt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[yt])}else{if(Array.isArray(A.__webglFramebuffer))for(let yt=0;yt<A.__webglFramebuffer.length;yt++)r.deleteFramebuffer(A.__webglFramebuffer[yt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let yt=0;yt<A.__webglColorRenderbuffer.length;yt++)A.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[yt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=P.textures;for(let yt=0,Et=at.length;yt<Et;yt++){const vt=s.get(at[yt]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),f.memory.textures--),s.remove(at[yt])}s.remove(P)}let H=0;function $(){H=0}function tt(){const P=H;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function ot(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function dt(P,A){const at=s.get(P);if(P.isVideoTexture&&Ht(P),P.isRenderTargetTexture===!1&&P.version>0&&at.__version!==P.version){const yt=P.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(at,P,A);return}}i.bindTexture(r.TEXTURE_2D,at.__webglTexture,r.TEXTURE0+A)}function z(P,A){const at=s.get(P);if(P.version>0&&at.__version!==P.version){X(at,P,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,at.__webglTexture,r.TEXTURE0+A)}function et(P,A){const at=s.get(P);if(P.version>0&&at.__version!==P.version){X(at,P,A);return}i.bindTexture(r.TEXTURE_3D,at.__webglTexture,r.TEXTURE0+A)}function q(P,A){const at=s.get(P);if(P.version>0&&at.__version!==P.version){ct(at,P,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture,r.TEXTURE0+A)}const xt={[Yh]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[Zh]:r.MIRRORED_REPEAT},O={[Ti]:r.NEAREST,[Gy]:r.NEAREST_MIPMAP_NEAREST,[oc]:r.NEAREST_MIPMAP_LINEAR,[Ei]:r.LINEAR,[ih]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},V={[jy]:r.NEVER,[Qy]:r.ALWAYS,[Wy]:r.LESS,[sx]:r.LEQUAL,[qy]:r.EQUAL,[Ky]:r.GEQUAL,[Yy]:r.GREATER,[Zy]:r.NOTEQUAL};function st(P,A){if(A.type===sa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ei||A.magFilter===ih||A.magFilter===oc||A.magFilter===Es||A.minFilter===Ei||A.minFilter===ih||A.minFilter===oc||A.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,xt[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,xt[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,xt[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,O[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,O[A.minFilter]),A.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ti||A.minFilter!==oc&&A.minFilter!==Es||A.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function ht(P,A){let at=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",I));const yt=A.source;let Et=_.get(yt);Et===void 0&&(Et={},_.set(yt,Et));const vt=ot(A);if(vt!==P.__cacheKey){Et[vt]===void 0&&(Et[vt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Et[vt].usedTimes++;const It=Et[P.__cacheKey];It!==void 0&&(Et[P.__cacheKey].usedTimes--,It.usedTimes===0&&C(A)),P.__cacheKey=vt,P.__webglTexture=Et[vt].texture}return at}function X(P,A,at){let yt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=r.TEXTURE_3D);const Et=ht(P,A),vt=A.source;i.bindTexture(yt,P.__webglTexture,r.TEXTURE0+at);const It=s.get(vt);if(vt.version!==It.__version||Et===!0){i.activeTexture(r.TEXTURE0+at);const Ct=we.getPrimaries(we.workingColorSpace),Dt=A.colorSpace===Va?null:we.getPrimaries(A.colorSpace),ge=A.colorSpace===Va||Ct===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Tt=T(A.image,!1,l.maxTextureSize);Tt=Ut(A,Tt);const kt=c.convert(A.format,A.colorSpace),Qt=c.convert(A.type);let ee=U(A.internalFormat,kt,Qt,A.colorSpace,A.isVideoTexture);st(yt,A);let Bt;const pe=A.mipmaps,re=A.isVideoTexture!==!0,Pe=It.__version===void 0||Et===!0,Y=vt.dataReady,Nt=k(A,Tt);if(A.isDepthTexture)ee=R(A.format===Lr,A.type),Pe&&(re?i.texStorage2D(r.TEXTURE_2D,1,ee,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,ee,Tt.width,Tt.height,0,kt,Qt,null));else if(A.isDataTexture)if(pe.length>0){re&&Pe&&i.texStorage2D(r.TEXTURE_2D,Nt,ee,pe[0].width,pe[0].height);for(let pt=0,Mt=pe.length;pt<Mt;pt++)Bt=pe[pt],re?Y&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Bt.width,Bt.height,kt,Qt,Bt.data):i.texImage2D(r.TEXTURE_2D,pt,ee,Bt.width,Bt.height,0,kt,Qt,Bt.data);A.generateMipmaps=!1}else re?(Pe&&i.texStorage2D(r.TEXTURE_2D,Nt,ee,Tt.width,Tt.height),Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt.width,Tt.height,kt,Qt,Tt.data)):i.texImage2D(r.TEXTURE_2D,0,ee,Tt.width,Tt.height,0,kt,Qt,Tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){re&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,ee,pe[0].width,pe[0].height,Tt.depth);for(let pt=0,Mt=pe.length;pt<Mt;pt++)if(Bt=pe[pt],A.format!==bi)if(kt!==null)if(re){if(Y)if(A.layerUpdates.size>0){const Ft=Rv(Bt.width,Bt.height,A.format,A.type);for(const Pt of A.layerUpdates){const le=Bt.data.subarray(Pt*Ft/Bt.data.BYTES_PER_ELEMENT,(Pt+1)*Ft/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,Pt,Bt.width,Bt.height,1,kt,le)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Bt.width,Bt.height,Tt.depth,kt,Bt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,ee,Bt.width,Bt.height,Tt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Bt.width,Bt.height,Tt.depth,kt,Qt,Bt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pt,ee,Bt.width,Bt.height,Tt.depth,0,kt,Qt,Bt.data)}else{re&&Pe&&i.texStorage2D(r.TEXTURE_2D,Nt,ee,pe[0].width,pe[0].height);for(let pt=0,Mt=pe.length;pt<Mt;pt++)Bt=pe[pt],A.format!==bi?kt!==null?re?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,Bt.width,Bt.height,kt,Bt.data):i.compressedTexImage2D(r.TEXTURE_2D,pt,ee,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Y&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Bt.width,Bt.height,kt,Qt,Bt.data):i.texImage2D(r.TEXTURE_2D,pt,ee,Bt.width,Bt.height,0,kt,Qt,Bt.data)}else if(A.isDataArrayTexture)if(re){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,ee,Tt.width,Tt.height,Tt.depth),Y)if(A.layerUpdates.size>0){const pt=Rv(Tt.width,Tt.height,A.format,A.type);for(const Mt of A.layerUpdates){const Ft=Tt.data.subarray(Mt*pt/Tt.data.BYTES_PER_ELEMENT,(Mt+1)*pt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,Tt.width,Tt.height,1,kt,Qt,Ft)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,kt,Qt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,Tt.width,Tt.height,Tt.depth,0,kt,Qt,Tt.data);else if(A.isData3DTexture)re?(Pe&&i.texStorage3D(r.TEXTURE_3D,Nt,ee,Tt.width,Tt.height,Tt.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,kt,Qt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,ee,Tt.width,Tt.height,Tt.depth,0,kt,Qt,Tt.data);else if(A.isFramebufferTexture){if(Pe)if(re)i.texStorage2D(r.TEXTURE_2D,Nt,ee,Tt.width,Tt.height);else{let pt=Tt.width,Mt=Tt.height;for(let Ft=0;Ft<Nt;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,ee,pt,Mt,0,kt,Qt,null),pt>>=1,Mt>>=1}}else if(pe.length>0){if(re&&Pe){const pt=Lt(pe[0]);i.texStorage2D(r.TEXTURE_2D,Nt,ee,pt.width,pt.height)}for(let pt=0,Mt=pe.length;pt<Mt;pt++)Bt=pe[pt],re?Y&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,kt,Qt,Bt):i.texImage2D(r.TEXTURE_2D,pt,ee,kt,Qt,Bt);A.generateMipmaps=!1}else if(re){if(Pe){const pt=Lt(Tt);i.texStorage2D(r.TEXTURE_2D,Nt,ee,pt.width,pt.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,kt,Qt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,ee,kt,Qt,Tt);M(A)&&x(yt),It.__version=vt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ct(P,A,at){if(A.image.length!==6)return;const yt=ht(P,A),Et=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+at);const vt=s.get(Et);if(Et.version!==vt.__version||yt===!0){i.activeTexture(r.TEXTURE0+at);const It=we.getPrimaries(we.workingColorSpace),Ct=A.colorSpace===Va?null:we.getPrimaries(A.colorSpace),Dt=A.colorSpace===Va||It===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const ge=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,kt=[];for(let Mt=0;Mt<6;Mt++)!ge&&!Tt?kt[Mt]=T(A.image[Mt],!0,l.maxCubemapSize):kt[Mt]=Tt?A.image[Mt].image:A.image[Mt],kt[Mt]=Ut(A,kt[Mt]);const Qt=kt[0],ee=c.convert(A.format,A.colorSpace),Bt=c.convert(A.type),pe=U(A.internalFormat,ee,Bt,A.colorSpace),re=A.isVideoTexture!==!0,Pe=vt.__version===void 0||yt===!0,Y=Et.dataReady;let Nt=k(A,Qt);st(r.TEXTURE_CUBE_MAP,A);let pt;if(ge){re&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,pe,Qt.width,Qt.height);for(let Mt=0;Mt<6;Mt++){pt=kt[Mt].mipmaps;for(let Ft=0;Ft<pt.length;Ft++){const Pt=pt[Ft];A.format!==bi?ee!==null?re?Y&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,0,0,Pt.width,Pt.height,ee,Pt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,pe,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,0,0,Pt.width,Pt.height,ee,Bt,Pt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft,pe,Pt.width,Pt.height,0,ee,Bt,Pt.data)}}}else{if(pt=A.mipmaps,re&&Pe){pt.length>0&&Nt++;const Mt=Lt(kt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,pe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Tt){re?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,kt[Mt].width,kt[Mt].height,ee,Bt,kt[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,pe,kt[Mt].width,kt[Mt].height,0,ee,Bt,kt[Mt].data);for(let Ft=0;Ft<pt.length;Ft++){const le=pt[Ft].image[Mt].image;re?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,0,0,le.width,le.height,ee,Bt,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,pe,le.width,le.height,0,ee,Bt,le.data)}}else{re?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ee,Bt,kt[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,pe,ee,Bt,kt[Mt]);for(let Ft=0;Ft<pt.length;Ft++){const Pt=pt[Ft];re?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,0,0,ee,Bt,Pt.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft+1,pe,ee,Bt,Pt.image[Mt])}}}M(A)&&x(r.TEXTURE_CUBE_MAP),vt.__version=Et.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function mt(P,A,at,yt,Et,vt){const It=c.convert(at.format,at.colorSpace),Ct=c.convert(at.type),Dt=U(at.internalFormat,It,Ct,at.colorSpace),ge=s.get(A),Tt=s.get(at);if(Tt.__renderTarget=A,!ge.__hasExternalTextures){const kt=Math.max(1,A.width>>vt),Qt=Math.max(1,A.height>>vt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,vt,Dt,kt,Qt,A.depth,0,It,Ct,null):i.texImage2D(Et,vt,Dt,kt,Qt,0,It,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Gt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,Et,Tt.__webglTexture,0,Vt(A)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,Et,Tt.__webglTexture,vt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(P,A,at){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer){const yt=A.depthTexture,Et=yt&&yt.isDepthTexture?yt.type:null,vt=R(A.stencilBuffer,Et),It=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=Vt(A);Gt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,vt,A.width,A.height):at?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,vt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,vt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,It,r.RENDERBUFFER,P)}else{const yt=A.textures;for(let Et=0;Et<yt.length;Et++){const vt=yt[Et],It=c.convert(vt.format,vt.colorSpace),Ct=c.convert(vt.type),Dt=U(vt.internalFormat,It,Ct,vt.colorSpace),ge=Vt(A);at&&Gt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Dt,A.width,A.height):Gt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Dt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Dt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(A.depthTexture);yt.__renderTarget=A,(!yt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),dt(A.depthTexture,0);const Et=yt.__webglTexture,vt=Vt(A);if(A.depthTexture.format===Tr)Gt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Lr)Gt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Xt(P){const A=s.get(P),at=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const yt=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),yt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,yt.removeEventListener("dispose",Et)};yt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=yt}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");wt(A.__webglFramebuffer,P)}else if(at){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]===void 0)A.__webglDepthbuffer[yt]=r.createRenderbuffer(),bt(A.__webglDepthbuffer[yt],P,!1);else{const Et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,vt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,vt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),bt(A.__webglDepthbuffer,P,!1);else{const yt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,Et)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function te(P,A,at){const yt=s.get(P);A!==void 0&&mt(yt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),at!==void 0&&Xt(P)}function de(P){const A=P.texture,at=s.get(P),yt=s.get(A);P.addEventListener("dispose",B);const Et=P.textures,vt=P.isWebGLCubeRenderTarget===!0,It=Et.length>1;if(It||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=A.version,f.memory.textures++),vt){at.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Ct]=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)at.__webglFramebuffer[Ct][Dt]=r.createFramebuffer()}else at.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)at.__webglFramebuffer[Ct]=r.createFramebuffer()}else at.__webglFramebuffer=r.createFramebuffer();if(It)for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const ge=s.get(Et[Ct]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Gt(P)===!1){at.__webglMultisampledFramebuffer=r.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const Dt=Et[Ct];at.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,at.__webglColorRenderbuffer[Ct]);const ge=c.convert(Dt.format,Dt.colorSpace),Tt=c.convert(Dt.type),kt=U(Dt.internalFormat,ge,Tt,Dt.colorSpace,P.isXRRenderTarget===!0),Qt=Vt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,kt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,at.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(at.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(at.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(vt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),st(r.TEXTURE_CUBE_MAP,A);for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)mt(at.__webglFramebuffer[Ct][Dt],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Dt);else mt(at.__webglFramebuffer[Ct],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(A)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const ge=Et[Ct],Tt=s.get(ge);i.bindTexture(r.TEXTURE_2D,Tt.__webglTexture),st(r.TEXTURE_2D,ge),mt(at.__webglFramebuffer,P,ge,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,0),M(ge)&&x(r.TEXTURE_2D)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,yt.__webglTexture),st(Ct,A),A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)mt(at.__webglFramebuffer[Dt],P,A,r.COLOR_ATTACHMENT0,Ct,Dt);else mt(at.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,Ct,0);M(A)&&x(Ct),i.unbindTexture()}P.depthBuffer&&Xt(P)}function ie(P){const A=P.textures;for(let at=0,yt=A.length;at<yt;at++){const Et=A[at];if(M(Et)){const vt=N(P),It=s.get(Et).__webglTexture;i.bindTexture(vt,It),x(vt),i.unbindTexture()}}}const Rt=[],j=[];function oe(P){if(P.samples>0){if(Gt(P)===!1){const A=P.textures,at=P.width,yt=P.height;let Et=r.COLOR_BUFFER_BIT;const vt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=s.get(P),Ct=A.length>1;if(Ct)for(let Dt=0;Dt<A.length;Dt++)i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Dt=0;Dt<A.length;Dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);const ge=s.get(A[Dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,at,yt,0,0,at,yt,Et,r.NEAREST),m===!0&&(Rt.length=0,j.length=0,Rt.push(r.COLOR_ATTACHMENT0+Dt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(vt),j.push(vt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,j)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Dt=0;Dt<A.length;Dt++){i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);const ge=s.get(A[Dt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const A=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Vt(P){return Math.min(l.maxSamples,P.samples)}function Gt(P){const A=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ht(P){const A=f.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function Ut(P,A){const at=P.colorSpace,yt=P.format,Et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||at!==Nr&&at!==Va&&(we.getTransfer(at)===Fe?(yt!==bi||Et!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=$,this.setTexture2D=dt,this.setTexture2DArray=z,this.setTexture3D=et,this.setTextureCube=q,this.rebindTextures=te,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Gt}function eT(r,t){function i(s,l=Va){let c;const f=we.getTransfer(l);if(s===ca)return r.UNSIGNED_BYTE;if(s===Ld)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ud)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Yv)return r.BYTE;if(s===Zv)return r.SHORT;if(s===jo)return r.UNSIGNED_SHORT;if(s===Dd)return r.INT;if(s===Ts)return r.UNSIGNED_INT;if(s===sa)return r.FLOAT;if(s===qo)return r.HALF_FLOAT;if(s===Qv)return r.ALPHA;if(s===Jv)return r.RGB;if(s===bi)return r.RGBA;if(s===$v)return r.LUMINANCE;if(s===tx)return r.LUMINANCE_ALPHA;if(s===Tr)return r.DEPTH_COMPONENT;if(s===Lr)return r.DEPTH_STENCIL;if(s===ex)return r.RED;if(s===Nd)return r.RED_INTEGER;if(s===nx)return r.RG;if(s===Od)return r.RG_INTEGER;if(s===Pd)return r.RGBA_INTEGER;if(s===Nc||s===Oc||s===Pc||s===zc)if(f===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kh||s===Qh||s===Jh||s===$h)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===td||s===ed||s===nd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===td||s===ed)return f===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===nd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===id)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ad)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===od)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ld)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ud)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===md)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ic||s===vd||s===xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ic)return f===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ix||s===_d||s===yd||s===Md)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ic)return c.COMPRESSED_RED_RGTC1_EXT;if(s===_d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class nT extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xn extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iT={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Xn;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const aT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Un,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wa({vertexShader:aT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new be(new Jo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oT extends Or{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,v=null,_=null,y=null,E=null;const T=new rT,M=i.getContextAttributes();let x=null,N=null;const U=[],R=[],k=new he;let I=null;const B=new _n;B.viewport=new He;const G=new _n;G.viewport=new He;const C=[B,G],b=new nT;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ct=U[X];return ct===void 0&&(ct=new Uh,U[X]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(X){let ct=U[X];return ct===void 0&&(ct=new Uh,U[X]=ct),ct.getGripSpace()},this.getHand=function(X){let ct=U[X];return ct===void 0&&(ct=new Uh,U[X]=ct),ct.getHandSpace()};function tt(X){const ct=R.indexOf(X.inputSource);if(ct===-1)return;const mt=U[ct];mt!==void 0&&(mt.update(X.inputSource,X.frame,p||f),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function ot(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ot),l.removeEventListener("inputsourceschange",dt);for(let X=0;X<U.length;X++){const ct=R[X];ct!==null&&(R[X]=null,U[X].disconnect(ct))}H=null,$=null,T.reset(),t.setRenderTarget(x),y=null,_=null,v=null,l=null,N=null,ht.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ot),l.addEventListener("inputsourceschange",dt),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(k),l.renderState.layers===void 0){const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new As(y.framebufferWidth,y.framebufferHeight,{format:bi,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ct=null,mt=null,bt=null;M.depth&&(bt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=M.stencil?Lr:Tr,mt=M.stencil?Dr:Ts);const wt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:c};v=new XRWebGLBinding(l,i),_=v.createProjectionLayer(wt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),N=new As(_.textureWidth,_.textureHeight,{format:bi,type:ca,depthTexture:new vx(_.textureWidth,_.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),ht.setContext(l),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function dt(X){for(let ct=0;ct<X.removed.length;ct++){const mt=X.removed[ct],bt=R.indexOf(mt);bt>=0&&(R[bt]=null,U[bt].disconnect(mt))}for(let ct=0;ct<X.added.length;ct++){const mt=X.added[ct];let bt=R.indexOf(mt);if(bt===-1){for(let Xt=0;Xt<U.length;Xt++)if(Xt>=R.length){R.push(mt),bt=Xt;break}else if(R[Xt]===null){R[Xt]=mt,bt=Xt;break}if(bt===-1)break}const wt=U[bt];wt&&wt.connect(mt)}}const z=new Z,et=new Z;function q(X,ct,mt){z.setFromMatrixPosition(ct.matrixWorld),et.setFromMatrixPosition(mt.matrixWorld);const bt=z.distanceTo(et),wt=ct.projectionMatrix.elements,Xt=mt.projectionMatrix.elements,te=wt[14]/(wt[10]-1),de=wt[14]/(wt[10]+1),ie=(wt[9]+1)/wt[5],Rt=(wt[9]-1)/wt[5],j=(wt[8]-1)/wt[0],oe=(Xt[8]+1)/Xt[0],Vt=te*j,Gt=te*oe,Ht=bt/(-j+oe),Ut=Ht*-j;if(ct.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(Ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(ct.projectionMatrix),X.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Lt=te+Ht,P=de+Ht,A=Vt-Ut,at=Gt+(bt-Ut),yt=ie*de/P*Lt,Et=Rt*de/P*Lt;X.projectionMatrix.makePerspective(A,at,yt,Et,Lt,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function xt(X,ct){ct===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ct.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let ct=X.near,mt=X.far;T.texture!==null&&(T.depthNear>0&&(ct=T.depthNear),T.depthFar>0&&(mt=T.depthFar)),b.near=G.near=B.near=ct,b.far=G.far=B.far=mt,(H!==b.near||$!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),H=b.near,$=b.far),B.layers.mask=X.layers.mask|2,G.layers.mask=X.layers.mask|4,b.layers.mask=B.layers.mask|G.layers.mask;const bt=X.parent,wt=b.cameras;xt(b,bt);for(let Xt=0;Xt<wt.length;Xt++)xt(wt[Xt],bt);wt.length===2?q(b,B,G):b.projectionMatrix.copy(B.projectionMatrix),O(X,b,bt)};function O(X,ct,mt){mt===null?X.matrix.copy(ct.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(ct.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ct.projectionMatrix),X.projectionMatrixInverse.copy(ct.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Sd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(X){m=X,_!==null&&(_.fixedFoveation=X),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=X)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(b)};let V=null;function st(X,ct){if(g=ct.getViewerPose(p||f),E=ct,g!==null){const mt=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let bt=!1;mt.length!==b.cameras.length&&(b.cameras.length=0,bt=!0);for(let Xt=0;Xt<mt.length;Xt++){const te=mt[Xt];let de=null;if(y!==null)de=y.getViewport(te);else{const Rt=v.getViewSubImage(_,te);de=Rt.viewport,Xt===0&&(t.setRenderTargetTextures(N,Rt.colorTexture,_.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(N))}let ie=C[Xt];ie===void 0&&(ie=new _n,ie.layers.enable(Xt),ie.viewport=new He,C[Xt]=ie),ie.matrix.fromArray(te.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(te.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(de.x,de.y,de.width,de.height),Xt===0&&(b.matrix.copy(ie.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),bt===!0&&b.cameras.push(ie)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Xt=v.getDepthInformation(mt[0]);Xt&&Xt.isValid&&Xt.texture&&T.init(t,Xt,l.renderState)}}for(let mt=0;mt<U.length;mt++){const bt=R[mt],wt=U[mt];bt!==null&&wt!==void 0&&wt.update(bt,ct,p||f)}V&&V(X,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),E=null}const ht=new mx;ht.setAnimationLoop(st),this.setAnimationLoop=function(X){V=X},this.dispose=function(){}}}const vs=new Pi,lT=new ke;function cT(r,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,hx(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,N,U,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,R)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,N,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const N=t.get(x),U=N.envMap,R=N.envMapRotation;U&&(M.envMap.value=U,vs.copy(R),vs.x*=-1,vs.y*=-1,vs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),M.envMapRotation.value.setFromMatrix4(lT.makeRotationFromEuler(vs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,N,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*N,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,N){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const N=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uT(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const R=U.program;s.uniformBlockBinding(N,R)}function p(N,U){let R=l[N.id];R===void 0&&(E(N),R=g(N),l[N.id]=R,N.addEventListener("dispose",M));const k=U.program;s.updateUBOMapping(N,k);const I=t.render.frame;c[N.id]!==I&&(_(N),c[N.id]=I)}function g(N){const U=v();N.__bindingPointIndex=U;const R=r.createBuffer(),k=N.__size,I=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,k,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,R),R}function v(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const U=l[N.id],R=N.uniforms,k=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,B=R.length;I<B;I++){const G=Array.isArray(R[I])?R[I]:[R[I]];for(let C=0,b=G.length;C<b;C++){const H=G[C];if(y(H,I,C,k)===!0){const $=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let ot=0;for(let dt=0;dt<tt.length;dt++){const z=tt[dt],et=T(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,$+ot,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,ot),ot+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,U,R,k){const I=N.value,B=U+"_"+R;if(k[B]===void 0)return typeof I=="number"||typeof I=="boolean"?k[B]=I:k[B]=I.clone(),!0;{const G=k[B];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return k[B]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function E(N){const U=N.uniforms;let R=0;const k=16;for(let B=0,G=U.length;B<G;B++){const C=Array.isArray(U[B])?U[B]:[U[B]];for(let b=0,H=C.length;b<H;b++){const $=C[b],tt=Array.isArray($.value)?$.value:[$.value];for(let ot=0,dt=tt.length;ot<dt;ot++){const z=tt[ot],et=T(z),q=R%k,xt=q%et.boundary,O=q+xt;R+=xt,O!==0&&k-O<et.storage&&(R+=k-O),$.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=et.storage}}}const I=R%k;return I>0&&(R+=k-I),N.__size=R,N.__cache={},this}function T(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function M(N){const U=N.target;U.removeEventListener("dispose",M);const R=f.indexOf(U.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}class zr{constructor(t={}){const{canvas:i=$y(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Xa,this.toneMappingExposure=1;const R=this;let k=!1,I=0,B=0,G=null,C=-1,b=null;const H=new He,$=new He;let tt=null;const ot=new ye(0);let dt=0,z=i.width,et=i.height,q=1,xt=null,O=null;const V=new He(0,0,z,et),st=new He(0,0,z,et);let ht=!1;const X=new Id;let ct=!1,mt=!1;const bt=new ke,wt=new ke,Xt=new Z,te=new He,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Rt(){return G===null?q:1}let j=s;function oe(D,K){return i.getContext(D,K)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cd}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),j===null){const K="webgl2";if(j=oe(K,D),j===null)throw oe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Vt,Gt,Ht,Ut,Lt,P,A,at,yt,Et,vt,It,Ct,Dt,ge,Tt,kt,Qt,ee,Bt,pe,re,Pe,Y;function Nt(){Vt=new gE(j),Vt.init(),re=new eT(j,Vt),Gt=new uE(j,Vt,t,re),Ht=new Jb(j,Vt),Gt.reverseDepthBuffer&&_&&Ht.buffers.depth.setReversed(!0),Ut=new _E(j),Lt=new Ib,P=new tT(j,Vt,Ht,Lt,Gt,re,Ut),A=new hE(R),at=new mE(R),yt=new AM(j),Pe=new lE(j,yt),Et=new vE(j,yt,Ut,Pe),vt=new ME(j,Et,yt,Ut),ee=new yE(j,Gt,P),Tt=new fE(Lt),It=new zb(R,A,at,Vt,Gt,Pe,Tt),Ct=new cT(R,Lt),Dt=new Fb,ge=new jb(Vt),Qt=new oE(R,A,at,Ht,vt,y,m),kt=new Kb(R,vt,Gt),Y=new uT(j,Ut,Gt,Ht),Bt=new cE(j,Vt,Ut),pe=new xE(j,Vt,Ut),Ut.programs=It.programs,R.capabilities=Gt,R.extensions=Vt,R.properties=Lt,R.renderLists=Dt,R.shadowMap=kt,R.state=Ht,R.info=Ut}Nt();const pt=new oT(R,j);this.xr=pt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const D=Vt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Vt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(z,et,!1))},this.getSize=function(D){return D.set(z,et)},this.setSize=function(D,K,lt=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=D,et=K,i.width=Math.floor(D*q),i.height=Math.floor(K*q),lt===!0&&(i.style.width=D+"px",i.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(z*q,et*q).floor()},this.setDrawingBufferSize=function(D,K,lt){z=D,et=K,q=lt,i.width=Math.floor(D*lt),i.height=Math.floor(K*lt),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(V)},this.setViewport=function(D,K,lt,ut){D.isVector4?V.set(D.x,D.y,D.z,D.w):V.set(D,K,lt,ut),Ht.viewport(H.copy(V).multiplyScalar(q).round())},this.getScissor=function(D){return D.copy(st)},this.setScissor=function(D,K,lt,ut){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,K,lt,ut),Ht.scissor($.copy(st).multiplyScalar(q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(D){Ht.setScissorTest(ht=D)},this.setOpaqueSort=function(D){xt=D},this.setTransparentSort=function(D){O=D},this.getClearColor=function(D){return D.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(D=!0,K=!0,lt=!0){let ut=0;if(D){let J=!1;if(G!==null){const At=G.texture.format;J=At===Pd||At===Od||At===Nd}if(J){const At=G.texture.type,zt=At===ca||At===Ts||At===jo||At===Dr||At===Ld||At===Ud,Yt=Qt.getClearColor(),Wt=Qt.getClearAlpha(),ae=Yt.r,Jt=Yt.g,qt=Yt.b;zt?(E[0]=ae,E[1]=Jt,E[2]=qt,E[3]=Wt,j.clearBufferuiv(j.COLOR,0,E)):(T[0]=ae,T[1]=Jt,T[2]=qt,T[3]=Wt,j.clearBufferiv(j.COLOR,0,T))}else ut|=j.COLOR_BUFFER_BIT}K&&(ut|=j.DEPTH_BUFFER_BIT),lt&&(ut|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Dt.dispose(),ge.dispose(),Lt.dispose(),A.dispose(),at.dispose(),vt.dispose(),Pe.dispose(),Y.dispose(),It.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",ln),pt.removeEventListener("sessionend",Sn),Bn.stop()};function Mt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const D=Ut.autoReset,K=kt.enabled,lt=kt.autoUpdate,ut=kt.needsUpdate,J=kt.type;Nt(),Ut.autoReset=D,kt.enabled=K,kt.autoUpdate=lt,kt.needsUpdate=ut,kt.type=J}function Pt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function le(D){const K=D.target;K.removeEventListener("dispose",le),Xe(K)}function Xe(D){nn(D),Lt.remove(D)}function nn(D){const K=Lt.get(D).programs;K!==void 0&&(K.forEach(function(lt){It.releaseProgram(lt)}),D.isShaderMaterial&&It.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,lt,ut,J,At){K===null&&(K=de);const zt=J.isMesh&&J.matrixWorld.determinant()<0,Yt=Za(D,K,lt,ut,J);Ht.setMaterial(ut,zt);let Wt=lt.index,ae=1;if(ut.wireframe===!0){if(Wt=Et.getWireframeAttribute(lt),Wt===void 0)return;ae=2}const Jt=lt.drawRange,qt=lt.attributes.position;let Me=Jt.start*ae,Te=(Jt.start+Jt.count)*ae;At!==null&&(Me=Math.max(Me,At.start*ae),Te=Math.min(Te,(At.start+At.count)*ae)),Wt!==null?(Me=Math.max(Me,0),Te=Math.min(Te,Wt.count)):qt!=null&&(Me=Math.max(Me,0),Te=Math.min(Te,qt.count));const Ue=Te-Me;if(Ue<0||Ue===1/0)return;Pe.setup(J,ut,Yt,lt,Wt);let pn,Ce=Bt;if(Wt!==null&&(pn=yt.get(Wt),Ce=pe,Ce.setIndex(pn)),J.isMesh)ut.wireframe===!0?(Ht.setLineWidth(ut.wireframeLinewidth*Rt()),Ce.setMode(j.LINES)):Ce.setMode(j.TRIANGLES);else if(J.isLine){let Zt=ut.linewidth;Zt===void 0&&(Zt=1),Ht.setLineWidth(Zt*Rt()),J.isLineSegments?Ce.setMode(j.LINES):J.isLineLoop?Ce.setMode(j.LINE_LOOP):Ce.setMode(j.LINE_STRIP)}else J.isPoints?Ce.setMode(j.POINTS):J.isSprite&&Ce.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Ce.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Zt=J._multiDrawStarts,Qe=J._multiDrawCounts,Ae=J._multiDrawCount,qn=Wt?yt.get(Wt).bytesPerElement:1,pi=Lt.get(ut).currentProgram.getUniforms();for(let An=0;An<Ae;An++)pi.setValue(j,"_gl_DrawID",An),Ce.render(Zt[An]/qn,Qe[An])}else if(J.isInstancedMesh)Ce.renderInstances(Me,Ue,J.count);else if(lt.isInstancedBufferGeometry){const Zt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Qe=Math.min(lt.instanceCount,Zt);Ce.renderInstances(Me,Ue,Qe)}else Ce.render(Me,Ue)};function Re(D,K,lt){D.transparent===!0&&D.side===Mi&&D.forceSinglePass===!1?(D.side=jn,D.needsUpdate=!0,ha(D,K,lt),D.side=ja,D.needsUpdate=!0,ha(D,K,lt),D.side=Mi):ha(D,K,lt)}this.compile=function(D,K,lt=null){lt===null&&(lt=D),x=ge.get(lt),x.init(K),U.push(x),lt.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),D!==lt&&D.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ut=new Set;return D.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let zt=0;zt<At.length;zt++){const Yt=At[zt];Re(Yt,lt,J),ut.add(Yt)}else Re(At,lt,J),ut.add(At)}),U.pop(),x=null,ut},this.compileAsync=function(D,K,lt=null){const ut=this.compile(D,K,lt);return new Promise(J=>{function At(){if(ut.forEach(function(zt){Lt.get(zt).currentProgram.isReady()&&ut.delete(zt)}),ut.size===0){J(D);return}setTimeout(At,10)}Vt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Wn=null;function dn(D){Wn&&Wn(D)}function ln(){Bn.stop()}function Sn(){Bn.start()}const Bn=new mx;Bn.setAnimationLoop(dn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(D){Wn=D,pt.setAnimationLoop(D),D===null?Bn.stop():Bn.start()},pt.addEventListener("sessionstart",ln),pt.addEventListener("sessionend",Sn),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(K),K=pt.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,K,G),x=ge.get(D,U.length),x.init(K),U.push(x),wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X.setFromProjectionMatrix(wt),mt=this.localClippingEnabled,ct=Tt.init(this.clippingPlanes,mt),M=Dt.get(D,N.length),M.init(),N.push(M),pt.enabled===!0&&pt.isPresenting===!0){const At=R.xr.getDepthSensingMesh();At!==null&&qa(At,K,-1/0,R.sortObjects)}qa(D,K,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(xt,O),ie=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,ie&&Qt.addToRenderList(M,D),this.info.render.frame++,ct===!0&&Tt.beginShadows();const lt=x.state.shadowsArray;kt.render(lt,D,K),ct===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,J=M.transmissive;if(x.setupLights(),K.isArrayCamera){const At=K.cameras;if(J.length>0)for(let zt=0,Yt=At.length;zt<Yt;zt++){const Wt=At[zt];tl(ut,J,D,Wt)}ie&&Qt.render(D);for(let zt=0,Yt=At.length;zt<Yt;zt++){const Wt=At[zt];$o(M,D,Wt,Wt.viewport)}}else J.length>0&&tl(ut,J,D,K),ie&&Qt.render(D),$o(M,D,K);G!==null&&(P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G)),D.isScene===!0&&D.onAfterRender(R,D,K),Pe.resetDefaultState(),C=-1,b=null,U.pop(),U.length>0?(x=U[U.length-1],ct===!0&&Tt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function qa(D,K,lt,ut){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)lt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||X.intersectsSprite(D)){ut&&te.setFromMatrixPosition(D.matrixWorld).applyMatrix4(wt);const zt=vt.update(D),Yt=D.material;Yt.visible&&M.push(D,zt,Yt,lt,te.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||X.intersectsObject(D))){const zt=vt.update(D),Yt=D.material;if(ut&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),te.copy(D.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),te.copy(zt.boundingSphere.center)),te.applyMatrix4(D.matrixWorld).applyMatrix4(wt)),Array.isArray(Yt)){const Wt=zt.groups;for(let ae=0,Jt=Wt.length;ae<Jt;ae++){const qt=Wt[ae],Me=Yt[qt.materialIndex];Me&&Me.visible&&M.push(D,zt,Me,lt,te.z,qt)}}else Yt.visible&&M.push(D,zt,Yt,lt,te.z,null)}}const At=D.children;for(let zt=0,Yt=At.length;zt<Yt;zt++)qa(At[zt],K,lt,ut)}function $o(D,K,lt,ut){const J=D.opaque,At=D.transmissive,zt=D.transparent;x.setupLightsView(lt),ct===!0&&Tt.setGlobalState(R.clippingPlanes,lt),ut&&Ht.viewport(H.copy(ut)),J.length>0&&Ya(J,K,lt),At.length>0&&Ya(At,K,lt),zt.length>0&&Ya(zt,K,lt),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function tl(D,K,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ut.id]===void 0&&(x.state.transmissionRenderTarget[ut.id]=new As(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?qo:ca,minFilter:Es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const At=x.state.transmissionRenderTarget[ut.id],zt=ut.viewport||H;At.setSize(zt.z,zt.w);const Yt=R.getRenderTarget();R.setRenderTarget(At),R.getClearColor(ot),dt=R.getClearAlpha(),dt<1&&R.setClearColor(16777215,.5),R.clear(),ie&&Qt.render(lt);const Wt=R.toneMapping;R.toneMapping=Xa;const ae=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),x.setupLightsView(ut),ct===!0&&Tt.setGlobalState(R.clippingPlanes,ut),Ya(D,lt,ut),P.updateMultisampleRenderTarget(At),P.updateRenderTargetMipmap(At),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let qt=0,Me=K.length;qt<Me;qt++){const Te=K[qt],Ue=Te.object,pn=Te.geometry,Ce=Te.material,Zt=Te.group;if(Ce.side===Mi&&Ue.layers.test(ut.layers)){const Qe=Ce.side;Ce.side=jn,Ce.needsUpdate=!0,fa(Ue,lt,ut,pn,Ce,Zt),Ce.side=Qe,Ce.needsUpdate=!0,Jt=!0}}Jt===!0&&(P.updateMultisampleRenderTarget(At),P.updateRenderTargetMipmap(At))}R.setRenderTarget(Yt),R.setClearColor(ot,dt),ae!==void 0&&(ut.viewport=ae),R.toneMapping=Wt}function Ya(D,K,lt){const ut=K.isScene===!0?K.overrideMaterial:null;for(let J=0,At=D.length;J<At;J++){const zt=D[J],Yt=zt.object,Wt=zt.geometry,ae=ut===null?zt.material:ut,Jt=zt.group;Yt.layers.test(lt.layers)&&fa(Yt,K,lt,Wt,ae,Jt)}}function fa(D,K,lt,ut,J,At){D.onBeforeRender(R,K,lt,ut,J,At),D.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(R,K,lt,ut,D,At),J.transparent===!0&&J.side===Mi&&J.forceSinglePass===!1?(J.side=jn,J.needsUpdate=!0,R.renderBufferDirect(lt,K,ut,J,D,At),J.side=ja,J.needsUpdate=!0,R.renderBufferDirect(lt,K,ut,J,D,At),J.side=Mi):R.renderBufferDirect(lt,K,ut,J,D,At),D.onAfterRender(R,K,lt,ut,J,At)}function ha(D,K,lt){K.isScene!==!0&&(K=de);const ut=Lt.get(D),J=x.state.lights,At=x.state.shadowsArray,zt=J.state.version,Yt=It.getParameters(D,J.state,At,K,lt),Wt=It.getProgramCacheKey(Yt);let ae=ut.programs;ut.environment=D.isMeshStandardMaterial?K.environment:null,ut.fog=K.fog,ut.envMap=(D.isMeshStandardMaterial?at:A).get(D.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,ae===void 0&&(D.addEventListener("dispose",le),ae=new Map,ut.programs=ae);let Jt=ae.get(Wt);if(Jt!==void 0){if(ut.currentProgram===Jt&&ut.lightsStateVersion===zt)return Ii(D,Yt),Jt}else Yt.uniforms=It.getUniforms(D),D.onBeforeCompile(Yt,R),Jt=It.acquireProgram(Yt,Wt),ae.set(Wt,Jt),ut.uniforms=Yt.uniforms;const qt=ut.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(qt.clippingPlanes=Tt.uniform),Ii(D,Yt),ut.needsLights=an(D),ut.lightsStateVersion=zt,ut.needsLights&&(qt.ambientLightColor.value=J.state.ambient,qt.lightProbe.value=J.state.probe,qt.directionalLights.value=J.state.directional,qt.directionalLightShadows.value=J.state.directionalShadow,qt.spotLights.value=J.state.spot,qt.spotLightShadows.value=J.state.spotShadow,qt.rectAreaLights.value=J.state.rectArea,qt.ltc_1.value=J.state.rectAreaLTC1,qt.ltc_2.value=J.state.rectAreaLTC2,qt.pointLights.value=J.state.point,qt.pointLightShadows.value=J.state.pointShadow,qt.hemisphereLights.value=J.state.hemi,qt.directionalShadowMap.value=J.state.directionalShadowMap,qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qt.spotShadowMap.value=J.state.spotShadowMap,qt.spotLightMatrix.value=J.state.spotLightMatrix,qt.spotLightMap.value=J.state.spotLightMap,qt.pointShadowMap.value=J.state.pointShadowMap,qt.pointShadowMatrix.value=J.state.pointShadowMatrix),ut.currentProgram=Jt,ut.uniformsList=null,Jt}function zi(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=Bc.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Ii(D,K){const lt=Lt.get(D);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function Za(D,K,lt,ut,J){K.isScene!==!0&&(K=de),P.resetTextureUnits();const At=K.fog,zt=ut.isMeshStandardMaterial?K.environment:null,Yt=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Nr,Wt=(ut.isMeshStandardMaterial?at:A).get(ut.envMap||zt),ae=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),qt=!!lt.morphAttributes.position,Me=!!lt.morphAttributes.normal,Te=!!lt.morphAttributes.color;let Ue=Xa;ut.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ue=R.toneMapping);const pn=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ce=pn!==void 0?pn.length:0,Zt=Lt.get(ut),Qe=x.state.lights;if(ct===!0&&(mt===!0||D!==b)){const On=D===b&&ut.id===C;Tt.setState(ut,D,On)}let Ae=!1;ut.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Qe.state.version||Zt.outputColorSpace!==Yt||J.isBatchedMesh&&Zt.batching===!1||!J.isBatchedMesh&&Zt.batching===!0||J.isBatchedMesh&&Zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Zt.instancing===!1||!J.isInstancedMesh&&Zt.instancing===!0||J.isSkinnedMesh&&Zt.skinning===!1||!J.isSkinnedMesh&&Zt.skinning===!0||J.isInstancedMesh&&Zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Zt.instancingMorph===!1&&J.morphTexture!==null||Zt.envMap!==Wt||ut.fog===!0&&Zt.fog!==At||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Tt.numPlanes||Zt.numIntersection!==Tt.numIntersection)||Zt.vertexAlphas!==ae||Zt.vertexTangents!==Jt||Zt.morphTargets!==qt||Zt.morphNormals!==Me||Zt.morphColors!==Te||Zt.toneMapping!==Ue||Zt.morphTargetsCount!==Ce)&&(Ae=!0):(Ae=!0,Zt.__version=ut.version);let qn=Zt.currentProgram;Ae===!0&&(qn=ha(ut,K,J));let pi=!1,An=!1,wi=!1;const Ge=qn.getUniforms(),Ye=Zt.uniforms;if(Ht.useProgram(qn.program)&&(pi=!0,An=!0,wi=!0),ut.id!==C&&(C=ut.id,An=!0),pi||b!==D){Ht.buffers.depth.getReversed()?(bt.copy(D.projectionMatrix),eM(bt),nM(bt),Ge.setValue(j,"projectionMatrix",bt)):Ge.setValue(j,"projectionMatrix",D.projectionMatrix),Ge.setValue(j,"viewMatrix",D.matrixWorldInverse);const ai=Ge.map.cameraPosition;ai!==void 0&&ai.setValue(j,Xt.setFromMatrixPosition(D.matrixWorld)),Gt.logarithmicDepthBuffer&&Ge.setValue(j,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ge.setValue(j,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,An=!0,wi=!0)}if(J.isSkinnedMesh){Ge.setOptional(j,J,"bindMatrix"),Ge.setOptional(j,J,"bindMatrixInverse");const On=J.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Ge.setValue(j,"boneTexture",On.boneTexture,P))}J.isBatchedMesh&&(Ge.setOptional(j,J,"batchingTexture"),Ge.setValue(j,"batchingTexture",J._matricesTexture,P),Ge.setOptional(j,J,"batchingIdTexture"),Ge.setValue(j,"batchingIdTexture",J._indirectTexture,P),Ge.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Ge.setValue(j,"batchingColorTexture",J._colorsTexture,P));const Bi=lt.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&ee.update(J,lt,qn),(An||Zt.receiveShadow!==J.receiveShadow)&&(Zt.receiveShadow=J.receiveShadow,Ge.setValue(j,"receiveShadow",J.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Ye.envMap.value=Wt,Ye.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&K.environment!==null&&(Ye.envMapIntensity.value=K.environmentIntensity),An&&(Ge.setValue(j,"toneMappingExposure",R.toneMappingExposure),Zt.needsLights&&da(Ye,wi),At&&ut.fog===!0&&Ct.refreshFogUniforms(Ye,At),Ct.refreshMaterialUniforms(Ye,ut,q,et,x.state.transmissionRenderTarget[D.id]),Bc.upload(j,zi(Zt),Ye,P)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Bc.upload(j,zi(Zt),Ye,P),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ge.setValue(j,"center",J.center),Ge.setValue(j,"modelViewMatrix",J.modelViewMatrix),Ge.setValue(j,"normalMatrix",J.normalMatrix),Ge.setValue(j,"modelMatrix",J.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const On=ut.uniformsGroups;for(let ai=0,Pn=On.length;ai<Pn;ai++){const Hr=On[ai];Y.update(Hr,qn),Y.bind(Hr,qn)}}return qn}function da(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function an(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,K,lt){Lt.get(D.texture).__webglTexture=K,Lt.get(D.depthTexture).__webglTexture=lt;const ut=Lt.get(D);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=lt===void 0,ut.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,K){const lt=Lt.get(D);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,lt=0){G=D,I=K,B=lt;let ut=!0,J=null,At=!1,zt=!1;if(D){const Wt=Lt.get(D);if(Wt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(j.FRAMEBUFFER,null),ut=!1;else if(Wt.__webglFramebuffer===void 0)P.setupRenderTarget(D);else if(Wt.__hasExternalTextures)P.rebindTextures(D,Lt.get(D.texture).__webglTexture,Lt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const qt=D.depthTexture;if(Wt.__boundDepthTexture!==qt){if(qt!==null&&Lt.has(qt)&&(D.width!==qt.image.width||D.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(D)}}const ae=D.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(zt=!0);const Jt=Lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Jt[K])?J=Jt[K][lt]:J=Jt[K],At=!0):D.samples>0&&P.useMultisampledRTT(D)===!1?J=Lt.get(D).__webglMultisampledFramebuffer:Array.isArray(Jt)?J=Jt[lt]:J=Jt,H.copy(D.viewport),$.copy(D.scissor),tt=D.scissorTest}else H.copy(V).multiplyScalar(q).floor(),$.copy(st).multiplyScalar(q).floor(),tt=ht;if(Ht.bindFramebuffer(j.FRAMEBUFFER,J)&&ut&&Ht.drawBuffers(D,J),Ht.viewport(H),Ht.scissor($),Ht.setScissorTest(tt),At){const Wt=Lt.get(D.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,Wt.__webglTexture,lt)}else if(zt){const Wt=Lt.get(D.texture),ae=K||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Wt.__webglTexture,lt||0,ae)}C=-1},this.readRenderTargetPixels=function(D,K,lt,ut,J,At,zt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt){Ht.bindFramebuffer(j.FRAMEBUFFER,Yt);try{const Wt=D.texture,ae=Wt.format,Jt=Wt.type;if(!Gt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-ut&&lt>=0&&lt<=D.height-J&&j.readPixels(K,lt,ut,J,re.convert(ae),re.convert(Jt),At)}finally{const Wt=G!==null?Lt.get(G).__webglFramebuffer:null;Ht.bindFramebuffer(j.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(D,K,lt,ut,J,At,zt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt){const Wt=D.texture,ae=Wt.format,Jt=Wt.type;if(!Gt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=D.width-ut&&lt>=0&&lt<=D.height-J){Ht.bindFramebuffer(j.FRAMEBUFFER,Yt);const qt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,qt),j.bufferData(j.PIXEL_PACK_BUFFER,At.byteLength,j.STREAM_READ),j.readPixels(K,lt,ut,J,re.convert(ae),re.convert(Jt),0);const Me=G!==null?Lt.get(G).__webglFramebuffer:null;Ht.bindFramebuffer(j.FRAMEBUFFER,Me);const Te=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await tM(j,Te,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,qt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,At),j.deleteBuffer(qt),j.deleteSync(Te),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,K=null,lt=0){D.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,D=arguments[1]);const ut=Math.pow(2,-lt),J=Math.floor(D.image.width*ut),At=Math.floor(D.image.height*ut),zt=K!==null?K.x:0,Yt=K!==null?K.y:0;P.setTexture2D(D,0),j.copyTexSubImage2D(j.TEXTURE_2D,lt,0,0,zt,Yt,J,At),Ht.unbindTexture()},this.copyTextureToTexture=function(D,K,lt=null,ut=null,J=0){D.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,D=arguments[1],K=arguments[2],J=arguments[3]||0,lt=null);let At,zt,Yt,Wt,ae,Jt,qt,Me,Te;const Ue=D.isCompressedTexture?D.mipmaps[J]:D.image;lt!==null?(At=lt.max.x-lt.min.x,zt=lt.max.y-lt.min.y,Yt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,ae=lt.min.y,Jt=lt.isBox3?lt.min.z:0):(At=Ue.width,zt=Ue.height,Yt=Ue.depth||1,Wt=0,ae=0,Jt=0),ut!==null?(qt=ut.x,Me=ut.y,Te=ut.z):(qt=0,Me=0,Te=0);const pn=re.convert(K.format),Ce=re.convert(K.type);let Zt;K.isData3DTexture?(P.setTexture3D(K,0),Zt=j.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(P.setTexture2DArray(K,0),Zt=j.TEXTURE_2D_ARRAY):(P.setTexture2D(K,0),Zt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const Qe=j.getParameter(j.UNPACK_ROW_LENGTH),Ae=j.getParameter(j.UNPACK_IMAGE_HEIGHT),qn=j.getParameter(j.UNPACK_SKIP_PIXELS),pi=j.getParameter(j.UNPACK_SKIP_ROWS),An=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ue.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ue.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Wt),j.pixelStorei(j.UNPACK_SKIP_ROWS,ae),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Jt);const wi=D.isDataArrayTexture||D.isData3DTexture,Ge=K.isDataArrayTexture||K.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const Ye=Lt.get(D),Bi=Lt.get(K),On=Lt.get(Ye.__renderTarget),ai=Lt.get(Bi.__renderTarget);Ht.bindFramebuffer(j.READ_FRAMEBUFFER,On.__webglFramebuffer),Ht.bindFramebuffer(j.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let Pn=0;Pn<Yt;Pn++)wi&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Lt.get(D).__webglTexture,J,Jt+Pn),D.isDepthTexture?(Ge&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Lt.get(K).__webglTexture,J,Te+Pn),j.blitFramebuffer(Wt,ae,At,zt,qt,Me,At,zt,j.DEPTH_BUFFER_BIT,j.NEAREST)):Ge?j.copyTexSubImage3D(Zt,J,qt,Me,Te+Pn,Wt,ae,At,zt):j.copyTexSubImage2D(Zt,J,qt,Me,Te+Pn,Wt,ae,At,zt);Ht.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ge?D.isDataTexture||D.isData3DTexture?j.texSubImage3D(Zt,J,qt,Me,Te,At,zt,Yt,pn,Ce,Ue.data):K.isCompressedArrayTexture?j.compressedTexSubImage3D(Zt,J,qt,Me,Te,At,zt,Yt,pn,Ue.data):j.texSubImage3D(Zt,J,qt,Me,Te,At,zt,Yt,pn,Ce,Ue):D.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,J,qt,Me,At,zt,pn,Ce,Ue.data):D.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,J,qt,Me,Ue.width,Ue.height,pn,Ue.data):j.texSubImage2D(j.TEXTURE_2D,J,qt,Me,At,zt,pn,Ce,Ue);j.pixelStorei(j.UNPACK_ROW_LENGTH,Qe),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ae),j.pixelStorei(j.UNPACK_SKIP_PIXELS,qn),j.pixelStorei(j.UNPACK_SKIP_ROWS,pi),j.pixelStorei(j.UNPACK_SKIP_IMAGES,An),J===0&&K.generateMipmaps&&j.generateMipmap(Zt),Ht.unbindTexture()},this.copyTextureToTexture3D=function(D,K,lt=null,ut=null,J=0){return D.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ut=arguments[1]||null,D=arguments[2],K=arguments[3],J=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,K,lt,ut,J)},this.initRenderTarget=function(D){Lt.get(D).__webglFramebuffer===void 0&&P.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?P.setTextureCube(D,0):D.isData3DTexture?P.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?P.setTexture2DArray(D,0):P.setTexture2D(D,0),Ht.unbindTexture()},this.resetState=function(){I=0,B=0,G=null,Ht.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}class Fd{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Fd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ir extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Sx extends Ds{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vc=new Z,kc=new Z,Cv=new ke,Go=new Wc,Rc=new Qo,Nh=new Z,Dv=new Z;class fT extends Mn{constructor(t=new Nn,i=new Sx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Vc.fromBufferAttribute(i,l-1),kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Vc.distanceTo(kc);t.setAttribute("lineDistance",new Ke(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,t.ray.intersectsSphere(Rc)===!1)return;Cv.copy(l).invert(),Go.copy(t.ray).applyMatrix4(Cv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=p){const x=g.getX(T),N=g.getX(T+1),U=Cc(this,t,Go,m,x,N);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(y),x=Cc(this,t,Go,m,T,M);x&&i.push(x)}}else{const y=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=p){const x=Cc(this,t,Go,m,T,T+1);x&&i.push(x)}if(this.isLineLoop){const T=Cc(this,t,Go,m,E-1,y);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Cc(r,t,i,s,l,c){const f=r.geometry.attributes.position;if(Vc.fromBufferAttribute(f,l),kc.fromBufferAttribute(f,c),i.distanceSqToSegment(Vc,kc,Nh,Dv)>s)return;Nh.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Nh);if(!(m<t.near||m>t.far))return{distance:m,point:Dv.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}class Ex extends Ds{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lv=new ke,bd=new Wc,Dc=new Qo,Lc=new Z;class hT extends Mn{constructor(t=new Nn,i=new Ex){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,t.ray.intersectsSphere(Dc)===!1)return;Lv.copy(l).invert(),bd.copy(t.ray).applyMatrix4(Lv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let E=_,T=y;E<T;E++){const M=p.getX(E);Lc.fromBufferAttribute(v,M),Uv(Lc,M,m,l,t,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let E=_,T=y;E<T;E++)Lc.fromBufferAttribute(v,E),Uv(Lc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Uv(r,t,i,s,l,c,f){const d=bd.distanceSqToPoint(r);if(d<i){const m=new Z;bd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class dT extends Un{constructor(t,i,s,l,c,f,d,m,p){super(t,i,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pT{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],_=s[l+1]-g,y=(f-g)/_;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new he:new Z);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i){const s=new Z,l=[],c=[],f=[],d=new Z,m=new ke;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Z)}c[0]=new Z,f[0]=new Z;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),_=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),_<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ln(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Ln(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mT extends pT{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new he){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=m-this.aX,y=p-this.aY;m=_*g-y*v+this.aX,p=_*v+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hd extends Nn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],_=[],y=[];let E=0;const T=[],M=s/2;let x=0;N(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new Ke(v,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(y,2));function N(){const R=new Z,k=new Z;let I=0;const B=(i-t)/s;for(let G=0;G<=c;G++){const C=[],b=G/c,H=b*(i-t)+t;for(let $=0;$<=l;$++){const tt=$/l,ot=tt*m+d,dt=Math.sin(ot),z=Math.cos(ot);k.x=H*dt,k.y=-b*s+M,k.z=H*z,v.push(k.x,k.y,k.z),R.set(dt,B,z).normalize(),_.push(R.x,R.y,R.z),y.push(tt,1-b),C.push(E++)}T.push(C)}for(let G=0;G<l;G++)for(let C=0;C<c;C++){const b=T[C][G],H=T[C+1][G],$=T[C+1][G+1],tt=T[C][G+1];(t>0||C!==0)&&(g.push(b,H,tt),I+=3),(i>0||C!==c-1)&&(g.push(H,$,tt),I+=3)}p.addGroup(x,I,0),x+=I}function U(R){const k=E,I=new he,B=new Z;let G=0;const C=R===!0?t:i,b=R===!0?1:-1;for(let $=1;$<=l;$++)v.push(0,M*b,0),_.push(0,b,0),y.push(.5,.5),E++;const H=E;for(let $=0;$<=l;$++){const ot=$/l*m+d,dt=Math.cos(ot),z=Math.sin(ot);B.x=C*z,B.y=M*b,B.z=C*dt,v.push(B.x,B.y,B.z),_.push(0,b,0),I.x=dt*.5+.5,I.y=z*.5*b+.5,y.push(I.x,I.y),E++}for(let $=0;$<l;$++){const tt=k+$,ot=H+$;R===!0?g.push(ot,ot+1,tt):g.push(ot+1,ot,tt),G+=3}p.addGroup(x,G,R===!0?1:2),x+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yc extends Nn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];d(l),p(s),g(),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(c.slice(),3)),this.setAttribute("uv",new Ke(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const U=new Z,R=new Z,k=new Z;for(let I=0;I<i.length;I+=3)y(i[I+0],U),y(i[I+1],R),y(i[I+2],k),m(U,R,k,N)}function m(N,U,R,k){const I=k+1,B=[];for(let G=0;G<=I;G++){B[G]=[];const C=N.clone().lerp(R,G/I),b=U.clone().lerp(R,G/I),H=I-G;for(let $=0;$<=H;$++)$===0&&G===I?B[G][$]=C:B[G][$]=C.clone().lerp(b,$/H)}for(let G=0;G<I;G++)for(let C=0;C<2*(I-G)-1;C++){const b=Math.floor(C/2);C%2===0?(_(B[G][b+1]),_(B[G+1][b]),_(B[G][b])):(_(B[G][b+1]),_(B[G+1][b+1]),_(B[G+1][b]))}}function p(N){const U=new Z;for(let R=0;R<c.length;R+=3)U.x=c[R+0],U.y=c[R+1],U.z=c[R+2],U.normalize().multiplyScalar(N),c[R+0]=U.x,c[R+1]=U.y,c[R+2]=U.z}function g(){const N=new Z;for(let U=0;U<c.length;U+=3){N.x=c[U+0],N.y=c[U+1],N.z=c[U+2];const R=M(N)/2/Math.PI+.5,k=x(N)/Math.PI+.5;f.push(R,1-k)}E(),v()}function v(){for(let N=0;N<f.length;N+=6){const U=f[N+0],R=f[N+2],k=f[N+4],I=Math.max(U,R,k),B=Math.min(U,R,k);I>.9&&B<.1&&(U<.2&&(f[N+0]+=1),R<.2&&(f[N+2]+=1),k<.2&&(f[N+4]+=1))}}function _(N){c.push(N.x,N.y,N.z)}function y(N,U){const R=N*3;U.x=t[R+0],U.y=t[R+1],U.z=t[R+2]}function E(){const N=new Z,U=new Z,R=new Z,k=new Z,I=new he,B=new he,G=new he;for(let C=0,b=0;C<c.length;C+=9,b+=6){N.set(c[C+0],c[C+1],c[C+2]),U.set(c[C+3],c[C+4],c[C+5]),R.set(c[C+6],c[C+7],c[C+8]),I.set(f[b+0],f[b+1]),B.set(f[b+2],f[b+3]),G.set(f[b+4],f[b+5]),k.copy(N).add(U).add(R).divideScalar(3);const H=M(k);T(I,b+0,N,H),T(B,b+2,U,H),T(G,b+4,R,H)}}function T(N,U,R,k){k<0&&N.x===1&&(f[U]=N.x-1),R.x===0&&R.z===0&&(f[U]=k/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function x(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.vertices,t.indices,t.radius,t.details)}}class ws extends Yc{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new ws(t.radius,t.detail)}}class Gd extends Yc{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Gd(t.radius,t.detail)}}class Vd extends Nn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=t;const _=(i-t)/l,y=new Z,E=new he;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const x=c+M/s*f;y.x=v*Math.cos(x),y.y=v*Math.sin(x),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,g.push(E.x,E.y)}v+=_}for(let T=0;T<l;T++){const M=T*(s+1);for(let x=0;x<s;x++){const N=x+M,U=N,R=N+s+1,k=N+s+2,I=N+1;d.push(U,R,I),d.push(R,k,I)}}this.setIndex(d),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Rs extends Nn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const g=[],v=new Z,_=new Z,y=[],E=[],T=[],M=[];for(let x=0;x<=s;x++){const N=[],U=x/s;let R=0;x===0&&f===0?R=.5/i:x===s&&m===Math.PI&&(R=-.5/i);for(let k=0;k<=i;k++){const I=k/i;v.x=-t*Math.cos(l+I*c)*Math.sin(f+U*d),v.y=t*Math.cos(f+U*d),v.z=t*Math.sin(l+I*c)*Math.sin(f+U*d),E.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),M.push(I+R,1-U),N.push(p++)}g.push(N)}for(let x=0;x<s;x++)for(let N=0;N<i;N++){const U=g[x][N+1],R=g[x][N],k=g[x+1][N],I=g[x+1][N+1];(x!==0||f>0)&&y.push(U,R,I),(x!==s-1||m<Math.PI)&&y.push(R,k,I)}this.setIndex(y),this.setAttribute("position",new Ke(E,3)),this.setAttribute("normal",new Ke(T,3)),this.setAttribute("uv",new Ke(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class la extends Nn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],m=[],p=[],g=new Z,v=new Z,_=new Z;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const T=E/l*c,M=y/s*Math.PI*2;v.x=(t+i*Math.cos(M))*Math.cos(T),v.y=(t+i*Math.cos(M))*Math.sin(T),v.z=i*Math.sin(M),d.push(v.x,v.y,v.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),_.subVectors(v,g).normalize(),m.push(_.x,_.y,_.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const T=(l+1)*y+E-1,M=(l+1)*(y-1)+E-1,x=(l+1)*(y-1)+E,N=(l+1)*y+E;f.push(T,M,N),f.push(M,x,N)}this.setIndex(f),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(m,3)),this.setAttribute("uv",new Ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yn extends Ds{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ax,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Nv={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class gT{constructor(t,i,s){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,d),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=p.length;v<_;v+=2){const y=p[v],E=p[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const vT=new gT;class kd{constructor(t){this.manager=t!==void 0?t:vT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}kd.DEFAULT_MATERIAL_NAME="__DEFAULT";class xT extends kd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Nv.get(t);if(f!==void 0)return c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0),f;const d=Wo("img");function m(){g(),Nv.add(t,this),i&&i(this),c.manager.itemEnd(t)}function p(v){g(),l&&l(v),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),c.manager.itemStart(t),d.src=t,d}}class _T extends kd{constructor(t){super(t)}load(t,i,s,l){const c=new Un,f=new xT(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class Xd extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Oh=new ke,Ov=new Z,Pv=new Z;class bx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Ov.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ov),Pv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Pv),i.updateMatrixWorld(),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zv=new ke,Vo=new Z,Ph=new Z;class yT extends bx{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Vo),Ph.copy(s.position),Ph.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Ph),s.updateMatrixWorld(),l.makeTranslation(-Vo.x,-Vo.y,-Vo.z),zv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zv)}}class Ai extends Xd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new yT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class MT extends bx{constructor(){super(new gx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jd extends Xd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new MT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Br extends Xd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fr{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Iv();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Iv(){return performance.now()}const Bv=new ke;class ST{constructor(t,i,s=0,l=1/0){this.ray=new Wc(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Bv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bv),this}intersectObject(t,i=!0,s=[]){return Td(t,this,s,i),s.sort(Fv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Td(t[l],this,s,i);return s.sort(Fv),s}}function Fv(r,t){return r.distance-t.distance}function Td(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Td(c[f],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);const ET=()=>{const r=Se.useRef(null);return Se.useEffect(()=>{const t=r.current;if(!t)return;const i=window.innerWidth<768,s=new Ir;s.fog=new Fd(198418,i?.045:.035);const l=new _n(i?70:60,window.innerWidth/window.innerHeight,.1,100);l.position.z=i?10:8,l.position.y=0;const c=new zr({alpha:!0,antialias:!i,powerPreference:"high-performance"});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,i?1.5:2)),c.toneMapping=Cs,c.toneMappingExposure=1.2,t.appendChild(c.domElement);const f=new Br(988970,1.2);s.add(f);const d=new Ai(3718648,3.5,30);d.position.set(4,3,3),s.add(d);const m=new Ai(11032055,3.5,30);m.position.set(-4,-2,2),s.add(m);const p=i?450:1200,g=new Float32Array(p*3),v=new Float32Array(p*3),_=new ye(3718648),y=new ye(8490232),E=new ye(12616956);for(let V=0;V<p*3;V+=3){g[V]=(Math.random()-.5)*(i?25:35),g[V+1]=(Math.random()-.5)*(i?35:45),g[V+2]=(Math.random()-.5)*25;const st=Math.random(),ht=st<.4?_:st<.7?y:E;v[V]=ht.r,v[V+1]=ht.g,v[V+2]=ht.b}const T=new Nn;T.setAttribute("position",new di(g,3)),T.setAttribute("color",new di(v,3));const M=new Ex({size:i?.07:.05,vertexColors:!0,transparent:!0,opacity:.75,blending:zh}),x=new hT(T,M);s.add(x);const N=new Xn;s.add(N);const U=new la(i?1.8:2.5,.4,16,48),R=new yn({color:3718648,wireframe:!0,transparent:!0,opacity:.15,roughness:.2,metalness:.8}),k=new be(U,R);k.position.set(i?-3:-6,-2,-6),N.add(k);const I=new ws(i?1.5:2,1),B=new yn({color:11032055,wireframe:!0,transparent:!0,opacity:.18,roughness:.3,metalness:.9}),G=new be(I,B);G.position.set(i?3:7,3,-8),N.add(G);let C=0,b=0,H=0,$=0;const tt=V=>{H=V.clientX/window.innerWidth*2-1,$=-(V.clientY/window.innerHeight)*2+1},ot=V=>{V.gamma!==null&&V.beta!==null&&(H=Math.min(Math.max(V.gamma/30,-1),1),$=Math.min(Math.max((V.beta-45)/30,-1),1))};let dt=0;const z=()=>{const V=document.documentElement.scrollHeight-window.innerHeight;V>0&&(dt=window.scrollY/V)},et=()=>{const V=window.innerWidth<768;l.fov=V?70:60,l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,V?1.5:2))};window.addEventListener("mousemove",tt),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",ot),window.addEventListener("scroll",z,{passive:!0}),window.addEventListener("resize",et);let q;const xt=new Fr,O=()=>{q=requestAnimationFrame(O);const V=xt.getElapsedTime();C+=(H-C)*.05,b+=($-b)*.05,x.rotation.y=V*.02+C*.08,x.rotation.x=V*.01-b*.08,k.rotation.x=V*.12,k.rotation.y=V*.15,G.rotation.x=-V*.15,G.rotation.y=V*.2,d.position.x=Math.sin(V*.7)*5+C*2,d.position.y=Math.cos(V*.5)*4+b*2,m.position.x=-Math.sin(V*.6)*5-C*2,m.position.y=-Math.cos(V*.8)*4-b*2;const st=window.innerWidth<768?10:8,ht=-dt*12,X=st+Math.sin(dt*Math.PI)*2;l.position.y+=(ht-l.position.y)*.05,l.position.z+=(X-l.position.z)*.05,l.position.x+=(C*.8-l.position.x)*.05,l.lookAt(0,l.position.y,0),c.render(s,l)};return O(),()=>{cancelAnimationFrame(q),window.removeEventListener("mousemove",tt),window.removeEventListener("deviceorientation",ot),window.removeEventListener("scroll",z),window.removeEventListener("resize",et),t&&c.domElement&&t.removeChild(c.domElement),T.dispose(),M.dispose(),U.dispose(),R.dispose(),I.dispose(),B.dispose(),c.dispose()}},[]),L.jsx("div",{ref:r,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden"})},bT=({words:r=[],typingSpeed:t=50,deletingSpeed:i=25,pauseTime:s=1800})=>{const[l,c]=Se.useState(0),[f,d]=Se.useState(""),[m,p]=Se.useState(!1);return Se.useEffect(()=>{if(!r.length)return;const g=r[l%r.length];let v;return m?v=setTimeout(()=>{d(_=>_.slice(0,-1)),f.length<=1&&(p(!1),c(_=>(_+1)%r.length))},i):f.length<g.length?v=setTimeout(()=>{d(g.slice(0,f.length+1))},t):v=setTimeout(()=>{p(!0)},s),()=>clearTimeout(v)},[f,m,l,r,t,i,s]),L.jsxs("span",{className:"inline-block",children:[L.jsx("span",{children:f}),L.jsx("span",{className:"inline-block w-2 h-5 ml-1 bg-cyan-400 animate-pulse align-middle"})]})};function Tx(r){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(r)}function TT(r){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(r)}function AT(r){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(r)}const wT=()=>{const r=Se.useRef(null),[t,i]=Se.useState(!1);return Se.useEffect(()=>{const s=r.current;if(!s)return;let l=s.clientWidth||320,c=s.clientHeight||320;const f=window.innerWidth<768,d=new Ir,m=new _n(45,l/c,.1,100);m.position.z=f?8.2:6.5;const p=new zr({alpha:!0,antialias:!f,powerPreference:"high-performance"});p.setSize(l,c),p.setPixelRatio(Math.min(window.devicePixelRatio,f?1.5:2)),p.toneMapping=Cs,p.toneMappingExposure=1.3,s.appendChild(p.domElement);const g=new Br(16777215,.8);d.add(g);const v=new jd(3718648,3.5);v.position.set(5,5,4),d.add(v);const _=new Ai(11032055,4.5,20);_.position.set(-4,-3,2),d.add(_);const y=new Ai(440020,3,15);y.position.set(0,-4,4),d.add(y);const E=new Xn;d.add(E);const T=new ws(1.2,0),M=new yn({color:593174,emissive:165063,emissiveIntensity:.35,roughness:.15,metalness:.95,flatShading:!0}),x=new be(T,M);E.add(x);const N=new ws(1.45,1),U=new yn({color:3718648,wireframe:!0,transparent:!0,opacity:.45,roughness:.2,metalness:.8}),R=new be(N,U);E.add(R);const k=new la(2,.04,16,80),I=new yn({color:3718648,roughness:.1,metalness:.9,emissive:165063,emissiveIntensity:.25}),B=new be(k,I);E.add(B);const G=new la(2.2,.035,16,80),C=new yn({color:11032055,roughness:.1,metalness:.9,emissive:8141549,emissiveIntensity:.3}),b=new be(G,C);b.rotation.x=Math.PI/3,b.rotation.y=Math.PI/4,E.add(b);const H=new la(1.8,.03,16,64),$=new yn({color:16317180,roughness:.2,metalness:.95}),tt=new be(H,$);tt.rotation.x=-Math.PI/4,tt.rotation.z=Math.PI/3,E.add(tt);const ot=5,dt=new Xn;E.add(dt);const z=new Rs(.09,16,16),et=[3718648,4906624,11032055,16436245,6333946],q=[];for(let Ut=0;Ut<ot;Ut++){const Lt=new yn({color:et[Ut],emissive:et[Ut],emissiveIntensity:.8,roughness:.1}),P=new be(z,Lt);q.push({mesh:P,speed:.8+Ut*.2,radius:2.3+Ut%2*.3,angleOffset:Ut/ot*Math.PI*2,elevation:(Ut-2)*.4}),dt.add(P)}let xt=!1,O=0,V=0,st=0,ht=0,X=0,ct=0;const mt=Ut=>{xt=!0,i(!0),O=Ut.clientX,V=Ut.clientY},bt=Ut=>{const Lt=s.getBoundingClientRect();if(X=(Ut.clientX-Lt.left)/Lt.width*2-1,ct=-((Ut.clientY-Lt.top)/Lt.height*2-1),xt){const P=Ut.clientX-O,A=Ut.clientY-V;ht=P*.007,st=A*.007,O=Ut.clientX,V=Ut.clientY}},wt=()=>{xt=!1,setTimeout(()=>i(!1),800)};s.addEventListener("mousedown",mt),window.addEventListener("mousemove",bt),window.addEventListener("mouseup",wt);let Xt=0,te=0,de=!1;const ie=Ut=>{Ut.touches.length===1&&(Xt=Ut.touches[0].clientX,te=Ut.touches[0].clientY,O=Xt,V=te,de=!1)},Rt=Ut=>{if(Ut.touches.length===1){const Lt=Ut.touches[0].clientX,P=Ut.touches[0].clientY,A=Math.abs(Lt-Xt),at=Math.abs(P-te);if(A>at&&A>8&&(de=!0,xt=!0,i(!0)),de){const yt=Lt-O,Et=P-V;ht=yt*.009,st=Et*.009,O=Lt,V=P}}},j=()=>{xt=!1,de=!1,setTimeout(()=>i(!1),800)};s.addEventListener("touchstart",ie,{passive:!0}),window.addEventListener("touchmove",Rt,{passive:!0}),window.addEventListener("touchend",j);let oe;const Vt=new Fr,Gt=()=>{oe=requestAnimationFrame(Gt);const Ut=Vt.getElapsedTime();xt?(E.rotation.y+=ht,E.rotation.x+=st):(st*=.94,ht*=.94,E.rotation.y+=ht+.006,E.rotation.x+=st+.003,E.position.x+=(X*.15-E.position.x)*.05,E.position.y+=(ct*.15-E.position.y)*.05),x.rotation.y=-Ut*.4,x.rotation.x=Ut*.3,R.rotation.y=Ut*.25,B.rotation.z=Ut*.5,b.rotation.z=-Ut*.4,tt.rotation.x=Ut*.6,q.forEach(Lt=>{const P=Ut*Lt.speed+Lt.angleOffset;Lt.mesh.position.x=Math.cos(P)*Lt.radius,Lt.mesh.position.z=Math.sin(P)*Lt.radius,Lt.mesh.position.y=Math.sin(P*1.5)*.8+Lt.elevation}),p.render(d,m)};Gt();const Ht=()=>{if(!s)return;l=s.clientWidth,c=s.clientHeight;const Ut=window.innerWidth<768;m.aspect=l/c,m.position.z=Ut?8.2:6.5,m.updateProjectionMatrix(),p.setSize(l,c),p.setPixelRatio(Math.min(window.devicePixelRatio,Ut?1.5:2))};return window.addEventListener("resize",Ht),()=>{cancelAnimationFrame(oe),s.removeEventListener("mousedown",mt),window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",wt),s.removeEventListener("touchstart",ie),window.removeEventListener("touchmove",Rt),window.removeEventListener("touchend",j),window.removeEventListener("resize",Ht),s&&p.domElement&&s.removeChild(p.domElement),T.dispose(),M.dispose(),N.dispose(),U.dispose(),k.dispose(),I.dispose(),G.dispose(),C.dispose(),H.dispose(),$.dispose(),z.dispose(),p.dispose()}},[]),L.jsxs("div",{className:"relative w-full max-w-[320px] sm:max-w-[440px] aspect-square flex items-center justify-center select-none mx-auto",children:[L.jsx("div",{ref:r,className:"w-full h-full cursor-grab active:cursor-grabbing relative z-10 touch-pan-y",title:"Swipe or drag to orbit in 3D"}),L.jsxs("div",{className:"absolute top-2 left-1 sm:top-4 sm:left-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow",children:[L.jsx(Z1,{className:"text-cyan-400 text-sm sm:text-lg animate-spin-slow"}),L.jsx("span",{className:"text-[10px] sm:text-xs font-semibold text-slate-200",children:"React 19"})]}),L.jsxs("div",{className:"absolute bottom-6 left-1 sm:bottom-8 sm:left-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-emerald-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow",style:{animationDelay:"1.5s"},children:[L.jsx(AT,{className:"text-emerald-400 text-sm sm:text-lg"}),L.jsx("span",{className:"text-[10px] sm:text-xs font-semibold text-slate-200",children:"MongoDB"})]}),L.jsxs("div",{className:"absolute top-4 right-1 sm:top-6 sm:right-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-indigo-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow",style:{animationDelay:"2.5s"},children:[L.jsx(Y1,{className:"text-green-400 text-sm sm:text-lg"}),L.jsx("span",{className:"text-[10px] sm:text-xs font-semibold text-slate-200",children:"Node.js"})]}),L.jsxs("div",{className:"absolute bottom-8 right-1 sm:bottom-10 sm:right-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md border border-purple-500/30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg pointer-events-none animate-float-slow",style:{animationDelay:"3.5s"},children:[L.jsx(TT,{className:"text-purple-300 text-sm sm:text-lg"}),L.jsx("span",{className:"text-[10px] sm:text-xs font-semibold text-slate-200",children:"Express"})]}),L.jsxs("div",{className:"absolute -bottom-2 z-20 flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-slate-400 shadow-xl pointer-events-none",children:[L.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),L.jsx("span",{children:t?"Rotating 3D Model...":"Swipe to Orbit in 3D"})]})]})},RT={name:"Devang Khuman",description:"I'm a passionate MERN Stack Developer who loves to build fast, responsive, and scalable web applications.",profile_picture_url:"src/assets/Ninja.png",resume_url:"src/assets/Resume.pdf"},CT=[{platform:"GitHub",link:"https://github.com/deepkhuman"},{platform:"LinkedIn",link:"https://www.linkedin.com/in/devang-khuman-364a28269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmlqmfS1bR%2FyXyDl7P7CvXQ%3D%3D"},{platform:"Twitter",link:"https://twitter.com/GetMemes93957"}],DT=[{name:"Project 1",description:"A cool project",url:"https://project1.com",technologies:["React","Node.js","MongoDB"],image_url:"assets/project1.jpg"},{name:"Project 2",description:"Another cool project",url:"https://project2.com",technologies:["React","Express","MySQL"],image_url:"assets/project2.jpg"}],LT={title:"About Me",description:"I'm a passionate full-stack web developer proficient in the MERN stack. I love solving problems and building modern, scalable applications. I started my journey in tech by learning web development and eventually fell in love with the MERN stack for its flexibility and efficiency."},UT=[{name:"React",icon:"FaReact",color:"text-blue-400"},{name:"Node.js",icon:"FaNodeJs",color:"text-green-400"},{name:"Database",icon:"FaDatabase",color:"text-yellow-400"},{name:"JavaScript",icon:"FaJsSquare",color:"text-yellow-500"}],Ax={user:RT,social_links:CT,projects:DT,about:LT,technologies:UT},NT=""+new URL("Resume-rszQaCtY.pdf",import.meta.url).href,OT=({onScrollToProjects:r})=>{const[t]=Se.useState(Ax),i=s=>{switch(s.toLowerCase()){case"github":return L.jsx(wd,{size:16});case"linkedin":return L.jsx(kv,{size:16});case"twitter":return L.jsx(Tx,{size:16});default:return null}};return L.jsxs("section",{className:"relative min-h-[90vh] w-full flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden",children:[L.jsx("div",{className:"absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),L.jsx("div",{className:"absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),L.jsxs("div",{className:"relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center",children:[L.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6",children:[L.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400 shadow-sm",children:[L.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),"Full-Stack Developer • MERN Specialist"]}),L.jsxs("h1",{className:"text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight",children:["Crafting Scalable ",L.jsx("br",{}),L.jsx("span",{className:"text-gradient-cyan",children:"Modern Web Apps"})," ",L.jsx("br",{}),"& 3D Experiences."]}),L.jsxs("div",{className:"text-base sm:text-lg font-medium text-slate-300 min-h-[32px] sm:min-h-[36px] flex items-center justify-center lg:justify-start",children:[L.jsx("span",{className:"text-cyan-400 mr-2 font-mono",children:">"}),L.jsx(bT,{words:["Building fast, responsive web systems 🔥","Architecting scalable MERN backends ⚡","Creating interactive, modern UI/UX 🚀","Passionate about clean code 💻"],typingSpeed:40,deletingSpeed:20,pauseTime:2e3})]}),L.jsxs("p",{className:"text-xs sm:text-sm md:text-base text-slate-400 max-w-lg leading-relaxed",children:["Hi, I'm ",L.jsx("strong",{className:"text-white font-semibold",children:t.user.name}),". ",t.user.description]}),L.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto pt-1",children:[L.jsxs("button",{onClick:r,className:"group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer min-h-[46px]",children:[L.jsx(Rd,{className:"text-xs group-hover:rotate-12 transition-transform"}),L.jsx("span",{children:"Explore 3D Projects"}),L.jsx(K1,{className:"text-[10px] group-hover:translate-x-1 transition-transform"})]}),L.jsxs("a",{href:NT,download:"Devang_Khuman_Resume.pdf",className:"inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass-panel glass-panel-hover hover:text-white active:scale-95 transition-all cursor-pointer min-h-[46px]",children:[L.jsx(iy,{className:"text-xs text-cyan-400"}),L.jsx("span",{children:"Resume"})]})]}),L.jsxs("div",{className:"pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5",children:[L.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-slate-500 mr-1",children:"Connect:"}),t.social_links.map(s=>L.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer","aria-label":s.platform,className:"w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-900 transition-all active:scale-90 shadow-sm",children:i(s.platform)},s.platform))]}),L.jsxs("div",{className:"grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/5 w-full max-w-md",children:[L.jsxs("div",{className:"p-2 sm:p-0",children:[L.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white font-mono",children:"10+"}),L.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400",children:"Projects Built"})]}),L.jsxs("div",{className:"p-2 sm:p-0",children:[L.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white font-mono",children:"MERN"}),L.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400",children:"Core Stack"})]}),L.jsxs("div",{className:"p-2 sm:p-0",children:[L.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white font-mono",children:"100%"}),L.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400",children:"Code Quality"})]})]})]}),L.jsx("div",{className:"lg:col-span-5 flex justify-center items-center py-4",children:L.jsx(wT,{})})]})]})},PT=()=>{const r=Se.useRef(null);return Se.useEffect(()=>{const t=r.current;if(!t)return;let i=t.clientWidth||320,s=t.clientHeight||340;const l=window.innerWidth<768,c=new Ir,f=new _n(45,i/s,.1,100);f.position.set(0,0,l?7.6:6.2);const d=new zr({alpha:!0,antialias:!l,powerPreference:"high-performance"});d.setSize(i,s),d.setPixelRatio(Math.min(window.devicePixelRatio,l?1.5:2)),d.toneMapping=Cs,t.appendChild(d.domElement);const m=new Br(16777215,.9);c.add(m);const p=new Ai(3718648,4,15);p.position.set(3,3,3),c.add(p);const g=new Ai(11032055,4,15);g.position.set(-3,-2,2),c.add(g);const v=new Xn;c.add(v);const _=new ua(3.2,2.2,.08),y=new yn({color:988970,roughness:.1,metalness:.9,transparent:!0,opacity:.75}),E=new be(_,y);v.add(E);const T=new ua(3.26,2.26,.1),M=new Oi({color:3718648,wireframe:!0,transparent:!0,opacity:.35}),x=new be(T,M);v.add(x);const N=new la(2,.025,16,64),U=new Oi({color:8490232,transparent:!0,opacity:.5}),R=new be(N,U);R.rotation.x=Math.PI/2.5,v.add(R);const k=new Gd(.65,0),I=new yn({color:3718648,emissive:165063,emissiveIntensity:.7,roughness:.2,metalness:.9,wireframe:!0}),B=new be(k,I);B.position.set(0,0,.3),v.add(B);const G=5,C=[],b=new Rs(.08,16,16),H=new Oi({color:6809849});for(let V=0;V<G;V++){const st=new be(b,H);v.add(st),C.push({mesh:st,radius:1.7,speed:1.2+V*.2,offset:V/G*Math.PI*2})}let $=0,tt=0,ot=0,dt=0;const z=V=>{const st=t.getBoundingClientRect();ot=(V.clientX-st.left)/st.width*2-1,dt=-((V.clientY-st.top)/st.height*2-1)};window.addEventListener("mousemove",z);let et;const q=new Fr,xt=()=>{et=requestAnimationFrame(xt);const V=q.getElapsedTime();$+=(ot-$)*.05,tt+=(dt-tt)*.05,v.rotation.y=$*.35,v.rotation.x=-tt*.25,v.position.y=Math.sin(V*1.5)*.08,B.rotation.y=V*.6,B.rotation.x=V*.4,R.rotation.z=V*.3,C.forEach(st=>{const ht=V*st.speed+st.offset;st.mesh.position.x=Math.cos(ht)*st.radius,st.mesh.position.y=Math.sin(ht*1.5)*.5,st.mesh.position.z=Math.sin(ht)*st.radius*.5+.3}),d.render(c,f)};xt();const O=()=>{if(!t)return;i=t.clientWidth,s=t.clientHeight;const V=window.innerWidth<768;f.aspect=i/s,f.position.z=V?7.6:6.2,f.updateProjectionMatrix(),d.setSize(i,s),d.setPixelRatio(Math.min(window.devicePixelRatio,V?1.5:2))};return window.addEventListener("resize",O),()=>{cancelAnimationFrame(et),window.removeEventListener("mousemove",z),window.removeEventListener("resize",O),t&&d.domElement&&t.removeChild(d.domElement),_.dispose(),y.dispose(),T.dispose(),M.dispose(),N.dispose(),U.dispose(),k.dispose(),I.dispose(),d.dispose()}},[]),L.jsxs("section",{id:"about",className:"relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-10 sm:mb-16 space-y-2.5 sm:space-y-3",children:[L.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400",children:[L.jsx(ry,{}),L.jsx("span",{children:"3D Architecture & Background"})]}),L.jsxs("h2",{className:"text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:["Engineering In ",L.jsx("span",{className:"text-gradient-cyan",children:"Three Dimensions"})]}),L.jsx("p",{className:"text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base",children:"Building high-performance, resilient web architecture with clean code and cutting-edge 3D user experiences."})]}),L.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center",children:[L.jsxs("div",{className:"lg:col-span-6 relative w-full h-[320px] sm:h-[420px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center",children:[L.jsx("div",{ref:r,className:"w-full h-full cursor-pointer touch-pan-y"}),L.jsxs("div",{className:"absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-[10px] sm:text-xs font-mono text-cyan-400 pointer-events-none",children:[L.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),L.jsx("span",{children:"Three.js System Core Active"})]}),L.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 bg-slate-950/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10 pointer-events-none text-xs font-mono text-slate-300",children:[L.jsxs("div",{className:"flex items-center justify-between pb-2 mb-1.5 border-b border-white/10 text-cyan-400",children:[L.jsx("span",{className:"text-[11px] sm:text-xs font-bold",children:"Devang Khuman // MERN"}),L.jsx("span",{className:"text-emerald-400 text-[10px]",children:"● ONLINE"})]}),L.jsx("p",{className:"text-slate-400 text-[10px] sm:text-[11px] leading-relaxed",children:"Full-cycle engineering: from database schema & REST microservices to 60fps WebGL rendering."})]})]}),L.jsxs("div",{className:"lg:col-span-6 space-y-4 sm:space-y-5",children:[L.jsxs("div",{className:"glass-panel rounded-3xl p-5 sm:p-7 border border-white/10 space-y-2.5 sm:space-y-3",children:[L.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[L.jsx("span",{className:"w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm sm:text-base",children:L.jsx(Rd,{})}),L.jsx("h3",{className:"text-base sm:text-lg font-bold text-white",children:"Full-Stack Philosophy"})]}),L.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:Ax.about.description})]}),L.jsxs("div",{className:"glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto",children:[L.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500/80"}),L.jsx("span",{className:"w-2 h-2 rounded-full bg-yellow-500/80"}),L.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500/80"})]}),L.jsx("span",{className:"text-slate-500 text-[10px]",children:"stack.config.js"})]}),L.jsxs("div",{className:"space-y-1",children:[L.jsxs("p",{children:[L.jsx("span",{className:"text-purple-400",children:"export default"})," {"]}),L.jsxs("p",{className:"pl-3 sm:pl-4",children:[L.jsx("span",{className:"text-slate-400",children:"frontend:"})," ",L.jsx("span",{className:"text-cyan-300",children:'["React 19", "Three.js", "Tailwind"]'}),","]}),L.jsxs("p",{className:"pl-3 sm:pl-4",children:[L.jsx("span",{className:"text-slate-400",children:"backend:"})," ",L.jsx("span",{className:"text-emerald-300",children:'["Node.js", "Express.js", "APIs"]'}),","]}),L.jsxs("p",{className:"pl-3 sm:pl-4",children:[L.jsx("span",{className:"text-slate-400",children:"database:"})," ",L.jsx("span",{className:"text-amber-300",children:'["MongoDB", "MySQL"]'}),","]}),L.jsxs("p",{className:"pl-3 sm:pl-4",children:[L.jsx("span",{className:"text-slate-400",children:"architecture:"})," ",L.jsx("span",{className:"text-purple-300",children:'"Scalable & 60fps"'})]}),L.jsx("p",{children:"};"})]})]}),L.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:gap-4",children:[L.jsxs("div",{className:"glass-panel rounded-2xl p-4 sm:p-5 border border-white/10",children:[L.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 mb-1",children:[L.jsx(cy,{className:"text-xs sm:text-sm"}),L.jsx("span",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-wider",children:"Quality"})]}),L.jsx("div",{className:"text-base sm:text-lg font-bold text-white",children:"Clean & Tested"}),L.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-400",children:"Production-grade code"})]}),L.jsxs("div",{className:"glass-panel rounded-2xl p-4 sm:p-5 border border-white/10",children:[L.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 mb-1",children:[L.jsx(ly,{className:"text-xs sm:text-sm"}),L.jsx("span",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-wider",children:"Location"})]}),L.jsx("div",{className:"text-base sm:text-lg font-bold text-white",children:"Remote Ready"}),L.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-400",children:"Worldwide availability"})]})]})]})]})]})},Hv=[{name:"React 19",category:"Frontend",color:"#38bdf8",hex:3718648,radius:3.2,speed:.6,angleOffset:0,elevation:.4,size:.38,level:"Advanced",desc:"Component architecture, Virtual DOM, Custom Hooks & 3D WebGL"},{name:"Node.js",category:"Backend",color:"#4ade80",hex:4906624,radius:4.2,speed:.45,angleOffset:1.2,elevation:-.5,size:.36,level:"Advanced",desc:"Asynchronous event-driven I/O, microservices & RESTful API engines"},{name:"MongoDB",category:"Database",color:"#34d399",hex:3462041,radius:5.1,speed:.35,angleOffset:2.3,elevation:.6,size:.35,level:"Advanced",desc:"Document schema design, indexing, aggregations & database scaling"},{name:"Express.js",category:"Backend",color:"#cbd5e1",hex:13358561,radius:3.7,speed:.52,angleOffset:3.4,elevation:-.3,size:.32,level:"Advanced",desc:"Routing middleware, JWT auth security & controller abstractions"},{name:"JavaScript",category:"Frontend",color:"#facc15",hex:16436245,radius:4.7,speed:.4,angleOffset:4.5,elevation:.3,size:.34,level:"Expert",desc:"Closures, asynchronous execution, DOM rendering & performance"},{name:"Tailwind CSS",category:"Frontend",color:"#67e8f9",hex:6809849,radius:2.8,speed:.7,angleOffset:5.2,elevation:-.4,size:.3,level:"Expert",desc:"Custom design systems, responsive utilities & modern 3D glassmorphism"},{name:"Docker",category:"DevOps",color:"#60a5fa",hex:6333946,radius:5.8,speed:.28,angleOffset:.8,elevation:-.6,size:.34,level:"Intermediate",desc:"Containerized deployment pipelines, Dockerfiles & multi-container compose"},{name:"AWS Cloud",category:"DevOps",color:"#fbbf24",hex:16498468,radius:6.5,speed:.22,angleOffset:2.9,elevation:.5,size:.36,level:"Intermediate",desc:"EC2 instance provisioning, S3 bucket storage & production hosting"},{name:"Git & GitHub",category:"DevOps",color:"#f97316",hex:16347926,radius:6.1,speed:.25,angleOffset:4.1,elevation:-.2,size:.3,level:"Advanced",desc:"Version control branching, CI/CD automated deployments & pull requests"}],zT=()=>{const r=Se.useRef(null),[t,i]=Se.useState(Hv[0]),[s,l]=Se.useState(null);return Se.useEffect(()=>{const c=r.current;if(!c)return;let f=c.clientWidth,d=c.clientHeight||450;const m=window.innerWidth<768,p=new Ir,g=new _n(50,f/d,.1,100);g.position.set(0,m?8.5:5,m?14:9.5),g.lookAt(0,0,0);const v=new zr({alpha:!0,antialias:!m,powerPreference:"high-performance"});v.setSize(f,d),v.setPixelRatio(Math.min(window.devicePixelRatio,m?1.5:2)),v.toneMapping=Cs,c.appendChild(v.domElement);const _=new Br(16777215,.6);p.add(_);const y=new Ai(3718648,4,25);y.position.set(0,0,0),p.add(y);const E=new jd(8490232,2);E.position.set(5,10,7),p.add(E);const T=new Xn;p.add(T);const M=new Rs(m?.85:1,24,24),x=new yn({color:988970,emissive:165063,emissiveIntensity:.8,roughness:.1,metalness:.9}),N=new be(M,x);T.add(N);const U=new ws(m?1.05:1.2,1),R=new yn({color:3718648,wireframe:!0,transparent:!0,opacity:.35}),k=new be(U,R);T.add(k);const I=(Rt,j)=>{const oe=document.createElement("canvas");oe.width=256,oe.height=64;const Vt=oe.getContext("2d");Vt.fillStyle="rgba(15, 23, 42, 0.9)",Vt.strokeStyle=j,Vt.lineWidth=4,Vt.beginPath(),Vt.roundRect(4,4,248,56,16),Vt.fill(),Vt.stroke(),Vt.font='bold 26px "Space Grotesk", sans-serif',Vt.fillStyle="#ffffff",Vt.textAlign="center",Vt.textBaseline="middle",Vt.fillText(Rt,128,32);const Gt=new dT(oe);return Gt.minFilter=Ei,Gt},B=[],G=new Xn;p.add(G),Hv.forEach(Rt=>{const j=new Xn;G.add(j);const oe=new Rs(Rt.size,20,20),Vt=new yn({color:Rt.hex,emissive:Rt.hex,emissiveIntensity:.5,roughness:.2,metalness:.8}),Gt=new be(oe,Vt);Gt.userData={skill:Rt},j.add(Gt);const Ht=new la(Rt.size*1.5,.015,10,36),Ut=new Oi({color:Rt.hex,transparent:!0,opacity:.6}),Lt=new be(Ht,Ut);Lt.rotation.x=Math.PI/2,j.add(Lt);const P=I(Rt.name,Rt.color),A=new Jo(m?1.4:1.2,m?.35:.3),at=new Oi({map:P,transparent:!0,opacity:.9,side:Mi}),yt=new be(A,at);yt.position.y=Rt.size+.35,j.add(yt);const vt=new mT(0,0,Rt.radius,Rt.radius,0,2*Math.PI,!1,0).getPoints(48),It=new Nn().setFromPoints(vt.map(ge=>new Z(ge.x,0,ge.y))),Ct=new Sx({color:Rt.hex,transparent:!0,opacity:.15}),Dt=new fT(It,Ct);G.add(Dt),B.push({group:j,sphere:Gt,badge:yt,orbitLine:Dt,data:Rt})});const C=new ST,b=new he(-999,-999);let H=!1,$=0,tt=0,ot=0,dt=0,z=0,et=0;const q=Rt=>{H=!0,$=Rt.clientX,tt=Rt.clientY},xt=Rt=>{const j=c.getBoundingClientRect();if(b.x=(Rt.clientX-j.left)/j.width*2-1,b.y=-((Rt.clientY-j.top)/j.height*2+1),H){const oe=Rt.clientX-$,Vt=Rt.clientY-tt;z+=oe*.007,et+=Vt*.007,$=Rt.clientX,tt=Rt.clientY}},O=()=>{H=!1},V=(Rt,j)=>{const oe=c.getBoundingClientRect(),Vt=new he((Rt-oe.left)/oe.width*2-1,-((j-oe.top)/oe.height*2-1));C.setFromCamera(Vt,g);const Gt=C.intersectObjects(B.map(Ht=>Ht.sphere));if(Gt.length>0){const Ht=Gt[0].object.userData.skill;Ht&&i(Ht)}},st=Rt=>{V(Rt.clientX,Rt.clientY)};c.addEventListener("mousedown",q),window.addEventListener("mousemove",xt),window.addEventListener("mouseup",O),c.addEventListener("click",st);let ht=0,X=0,ct=!1;const mt=Rt=>{Rt.touches.length===1&&(ht=Rt.touches[0].clientX,X=Rt.touches[0].clientY,$=ht,tt=X,ct=!1)},bt=Rt=>{if(Rt.touches.length===1){const j=Rt.touches[0].clientX,oe=Rt.touches[0].clientY,Vt=Math.abs(j-ht),Gt=Math.abs(oe-X);if(Vt>Gt&&Vt>8&&(ct=!0,H=!0),ct){const Ht=j-$,Ut=oe-tt;z+=Ht*.009,et+=Ut*.009,$=j,tt=oe}}},wt=Rt=>{!ct&&Rt.changedTouches&&Rt.changedTouches.length===1&&V(Rt.changedTouches[0].clientX,Rt.changedTouches[0].clientY),H=!1,ct=!1};c.addEventListener("touchstart",mt,{passive:!0}),window.addEventListener("touchmove",bt,{passive:!0}),window.addEventListener("touchend",wt);let Xt;const te=new Fr,de=()=>{Xt=requestAnimationFrame(de);const Rt=te.getElapsedTime();ot+=(z-ot)*.08,dt+=(et-dt)*.08,G.rotation.y=ot,G.rotation.x=dt,N.rotation.y=Rt*.4,k.rotation.y=-Rt*.3,k.rotation.x=Rt*.2,B.forEach(({group:oe,badge:Vt,data:Gt})=>{const Ht=Rt*Gt.speed*.4+Gt.angleOffset,Ut=Math.cos(Ht)*Gt.radius,Lt=Math.sin(Ht)*Gt.radius,P=Math.sin(Ht*2)*.3+Gt.elevation;oe.position.set(Ut,P,Lt),Vt.quaternion.copy(g.quaternion)}),C.setFromCamera(b,g);const j=C.intersectObjects(B.map(oe=>oe.sphere));if(j.length>0){const oe=j[0].object.userData.skill;l(oe.name),c.style.cursor="pointer",j[0].object.scale.set(1.35,1.35,1.35)}else l(null),c.style.cursor=H?"grabbing":"grab",B.forEach(oe=>oe.sphere.scale.set(1,1,1));v.render(p,g)};de();const ie=()=>{if(!c)return;f=c.clientWidth,d=c.clientHeight;const Rt=window.innerWidth<768;g.aspect=f/d,g.position.set(0,Rt?8.5:5,Rt?14:9.5),g.updateProjectionMatrix(),v.setSize(f,d),v.setPixelRatio(Math.min(window.devicePixelRatio,Rt?1.5:2))};return window.addEventListener("resize",ie),()=>{cancelAnimationFrame(Xt),c.removeEventListener("mousedown",q),window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",O),c.removeEventListener("click",st),c.removeEventListener("touchstart",mt),window.removeEventListener("touchmove",bt),window.removeEventListener("touchend",wt),window.removeEventListener("resize",ie),c&&v.domElement&&c.removeChild(v.domElement),M.dispose(),x.dispose(),U.dispose(),R.dispose(),v.dispose()}},[]),L.jsxs("section",{id:"skills",className:"relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-8 sm:mb-10 space-y-2.5 sm:space-y-3",children:[L.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400",children:[L.jsx(oy,{}),L.jsx("span",{children:"Interactive WebGL Experience"})]}),L.jsxs("h2",{className:"text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:["3D Technical ",L.jsx("span",{className:"text-gradient-cyan",children:"Galaxy"})]}),L.jsx("p",{className:"text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base",children:"Swipe in 3D space to orbit around the technical universe. Tap any planetary node to inspect its architecture."}),L.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-1 text-[11px] sm:text-xs text-slate-400 font-mono",children:[L.jsxs("span",{className:"flex items-center gap-1.5 text-cyan-400",children:[L.jsx(Xv,{size:11})," Swipe to Rotate"]}),L.jsx("span",{children:"•"}),L.jsx("span",{className:"text-slate-300",children:"Tap Planet to Inspect"})]})]}),L.jsxs("div",{className:"flex flex-col gap-4",children:[L.jsxs("div",{className:"relative w-full h-[360px] sm:h-[480px] lg:h-[560px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[L.jsx("div",{ref:r,className:"w-full h-full touch-pan-y"}),L.jsx("div",{className:"absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-none z-10",children:L.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs text-slate-300 font-mono",children:[L.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),L.jsxs("span",{children:["Target: ",L.jsx("strong",{className:"text-white",children:s||t.name})]})]})})]}),L.jsx("div",{className:"w-full",children:L.jsxs("div",{className:"p-5 sm:p-6 rounded-2xl glass-panel bg-slate-950/90 border border-white/15 backdrop-blur-xl shadow-2xl transition-all duration-300",style:{borderColor:t.color,boxShadow:`0 10px 30px -10px ${t.color}33`},children:[L.jsxs("div",{className:"flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10 mb-2.5 sm:mb-3",children:[L.jsxs("div",{className:"flex items-center gap-2 sm:gap-2.5",children:[L.jsx("span",{className:"w-3 h-3 rounded-full animate-pulse",style:{backgroundColor:t.color}}),L.jsx("h3",{className:"text-base sm:text-lg font-bold text-white",children:t.name})]}),L.jsx("span",{className:"text-[9px] sm:text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-cyan-300",children:t.level})]}),L.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:t.desc}),L.jsxs("div",{className:"flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono pt-2 border-t border-white/5",children:[L.jsxs("span",{children:["Domain: ",L.jsx("strong",{className:"text-white",children:t.category})]}),L.jsx("span",{className:"text-cyan-400",children:"Status: Active in Production"})]})]})})]})]})},IT=""+new URL("sumangal-CFbvxrdL.webp",import.meta.url).href,BT=""+new URL("cryptoverse-MQFLMWly.webp",import.meta.url).href,FT=""+new URL("parkme-DpbXkmjg.webp",import.meta.url).href,Uc=[{title:"Sumangal Matrimony",tagline:"Matchmaking & Matrimonial Production Platform",description:"A scalable matchmaking platform built with modern UI/UX principles and robust backend logic. Features secure user authentication, advanced search filters, and user-centric profile management.",category:"Full-Stack MERN",tags:["React","Node.js","Express","MongoDB","Tailwind CSS"],image:IT,liveUrl:"https://sumangalglobal.com/",githubUrl:"https://github.com/Deepkhuman",color:"#38bdf8",hex:3718648,badge:"Production App"},{title:"Crypto Verse",tagline:"Real-Time Cryptocurrency Analytics & Dashboard",description:"A live cryptocurrency tracker utilizing RapidAPI streams. Features dynamic market statistics, interactive financial coin analytics, and crypto rankings with responsive design.",category:"Frontend & API",tags:["React","RapidAPI","Tailwind CSS","Chart.js","Vite"],image:BT,liveUrl:"#",githubUrl:"https://github.com/Deepkhuman",color:"#a855f7",hex:11032055,badge:"Live Dashboard"},{title:"Park.Me",tagline:"Smart Vehicle Parking & Slot Management System",description:"A full-cycle smart vehicle parking system. Automates parking slot allocation, entry/exit tracking, slot occupancy vacancy in real-time, and administrative role-based access.",category:"Full-Stack Architecture",tags:["PHP","MySQL","JavaScript","Bootstrap","REST"],image:FT,liveUrl:"https://github.com/Deepkhuman/Park.me",githubUrl:"https://github.com/Deepkhuman/Park.me",color:"#34d399",hex:3462041,badge:"System Architecture"}],HT=()=>{const r=Se.useRef(null),[t,i]=Se.useState(0),s=Se.useRef(0),l=Se.useRef(0),c=Uc.length,f=Math.PI*2/c,d=()=>{const g=(t+1)%c;i(g),s.current-=f},m=()=>{const g=(t-1+c)%c;i(g),s.current+=f};Se.useEffect(()=>{const g=r.current;if(!g)return;let v=g.clientWidth,_=g.clientHeight||450;const y=window.innerWidth<768,E=new Ir,T=new _n(45,v/_,.1,100);T.position.set(0,.4,y?9.8:7.8),T.lookAt(0,0,0);const M=new zr({alpha:!0,antialias:!y,powerPreference:"high-performance"});M.setSize(v,_),M.setPixelRatio(Math.min(window.devicePixelRatio,y?1.5:2)),M.toneMapping=Cs,M.toneMappingExposure=1.25,g.appendChild(M.domElement);const x=new Br(16777215,.85);E.add(x);const N=new jd(16777215,2);N.position.set(5,8,8),E.add(N);const U=new Ai(3718648,3,20);U.position.set(-6,2,4),E.add(U);const R=new Ai(11032055,3,20);R.position.set(6,-2,4),E.add(R);const k=new Xn;E.add(k);const I=y?3.4:3.8,B=[],G=new _T;Uc.forEach((X,ct)=>{const mt=new Xn,bt=ct*f;mt.position.x=Math.sin(bt)*I,mt.position.z=Math.cos(bt)*I,mt.rotation.y=bt;const wt=y?3:3.6,Xt=y?1.85:2.2,te=.12,de=G.load(X.image);de.colorSpace=ii;const ie=new yn({color:593174,roughness:.15,metalness:.9}),Rt=new yn({map:de,roughness:.2,metalness:.1}),j=[ie,ie,ie,ie,Rt,ie],oe=new ua(wt,Xt,te),Vt=new be(oe,j);Vt.userData={index:ct,project:X},mt.add(Vt);const Gt=new ua(wt+.08,Xt+.08,te*.8),Ht=new Oi({color:X.hex,wireframe:!0,transparent:!0,opacity:.35}),Ut=new be(Gt,Ht);mt.add(Ut);const Lt=new Hd(1.4,1.6,.08,24),P=new yn({color:X.hex,roughness:.2,metalness:.8,transparent:!0,opacity:.4}),A=new be(Lt,P);A.position.y=-Xt/2-.2,mt.add(A),k.add(mt),B.push({cardGroup:mt,cardMesh:Vt,bezelMesh:Ut,index:ct})});let C=!1,b=0;const H=X=>{C=!0,b=X.clientX},$=X=>{if(!C)return;const ct=X.clientX-b;s.current+=ct*.006,b=X.clientX},tt=()=>{if(!C)return;C=!1;const X=-s.current,ct=Math.round(X/f);s.current=-ct*f;const mt=(ct%c+c)%c;i(mt)};g.addEventListener("mousedown",H),window.addEventListener("mousemove",$),window.addEventListener("mouseup",tt);let ot=0,dt=0,z=!1;const et=X=>{X.touches.length===1&&(ot=X.touches[0].clientX,dt=X.touches[0].clientY,b=ot,z=!1)},q=X=>{if(X.touches.length===1){const ct=X.touches[0].clientX,mt=X.touches[0].clientY,bt=Math.abs(ct-ot),wt=Math.abs(mt-dt);if(bt>wt&&bt>8&&(z=!0,C=!0),z){const Xt=ct-b;s.current+=Xt*.009,b=ct}}},xt=()=>{if(C){C=!1,z=!1;const X=-s.current,ct=Math.round(X/f);s.current=-ct*f;const mt=(ct%c+c)%c;i(mt)}};g.addEventListener("touchstart",et,{passive:!0}),window.addEventListener("touchmove",q,{passive:!0}),window.addEventListener("touchend",xt);let O;const V=new Fr,st=()=>{O=requestAnimationFrame(st);const X=V.getElapsedTime();l.current+=(s.current-l.current)*.08,k.rotation.y=l.current,B.forEach(ct=>{const mt=Math.cos(ct.cardGroup.rotation.y+l.current);ct.cardGroup.position.y=Math.sin(X*1.5+ct.index)*.06,mt>.8?(ct.bezelMesh.material.opacity=.8,ct.cardMesh.scale.set(1.04,1.04,1.04)):(ct.bezelMesh.material.opacity=.25,ct.cardMesh.scale.set(.96,.96,.96))}),M.render(E,T)};st();const ht=()=>{if(!g)return;v=g.clientWidth,_=g.clientHeight;const X=window.innerWidth<768;T.aspect=v/_,T.position.set(0,.4,X?9.8:7.8),T.updateProjectionMatrix(),M.setSize(v,_),M.setPixelRatio(Math.min(window.devicePixelRatio,X?1.5:2))};return window.addEventListener("resize",ht),()=>{cancelAnimationFrame(O),g.removeEventListener("mousedown",H),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",tt),g.removeEventListener("touchstart",et),window.removeEventListener("touchmove",q),window.removeEventListener("touchend",xt),window.removeEventListener("resize",ht),g&&M.domElement&&g.removeChild(M.domElement),M.dispose()}},[]);const p=Uc[t];return L.jsxs("section",{id:"projects",className:"relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-8 sm:mb-10 space-y-2.5 sm:space-y-3",children:[L.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400",children:[L.jsx(Rd,{}),L.jsx("span",{children:"Interactive 3D WebGL Showcase"})]}),L.jsxs("h2",{className:"text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:["3D Project ",L.jsx("span",{className:"text-gradient-cyan",children:"Gallery"})]}),L.jsx("p",{className:"text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base",children:"Swipe horizontally in 3D space to rotate the curved showcase monoliths, or use the chevron buttons."}),L.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1 text-[11px] sm:text-xs text-cyan-400 font-mono",children:[L.jsx(Xv,{size:11,className:"animate-pulse"}),L.jsx("span",{children:"Swipe Left / Right in 3D Space"})]})]}),L.jsxs("div",{className:"relative w-full h-[360px] sm:h-[480px] lg:h-[540px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[L.jsx("div",{ref:r,className:"w-full h-full cursor-grab active:cursor-grabbing touch-pan-y",title:"Swipe horizontally to rotate 3D showcase"}),L.jsx("button",{onClick:m,"aria-label":"Previous project",className:"absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl glass-panel bg-slate-950/85 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all shadow-xl cursor-pointer",children:L.jsx(ty,{size:14})}),L.jsx("button",{onClick:d,"aria-label":"Next project",className:"absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl glass-panel bg-slate-950/85 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all shadow-xl cursor-pointer",children:L.jsx(ey,{size:14})}),L.jsx("div",{className:"absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10",children:Uc.map((g,v)=>L.jsx("button",{onClick:()=>{const _=v-t;s.current-=_*f,i(v)},className:`h-2 rounded-full transition-all cursor-pointer ${t===v?"bg-cyan-400 w-5 sm:w-6":"bg-white/20 w-2 hover:bg-white/40"}`},g.title))})]}),L.jsxs("div",{className:"mt-6 sm:mt-8 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl transition-all duration-300",children:[L.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 transition-colors duration-500",style:{backgroundColor:p.color}}),L.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6",children:[L.jsxs("div",{className:"space-y-2.5 sm:space-y-3 max-w-2xl",children:[L.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3",children:[L.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/10",children:p.badge}),L.jsxs("span",{className:"text-[11px] sm:text-xs font-mono text-slate-400",children:["Category: ",L.jsx("strong",{className:"text-white",children:p.category})]})]}),L.jsx("h3",{className:"text-xl sm:text-2xl lg:text-3xl font-extrabold text-white",children:p.title}),L.jsx("p",{className:"text-xs sm:text-sm font-medium text-cyan-400",children:p.tagline}),L.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:p.description}),L.jsx("div",{className:"pt-1 flex flex-wrap gap-1.5 sm:gap-2",children:p.tags.map(g=>L.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/10",children:g},g))})]}),L.jsxs("div",{className:"flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0",children:[p.liveUrl&&p.liveUrl!=="#"?L.jsxs("a",{href:p.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer min-h-[46px]",children:[L.jsx("span",{children:"Launch Live Project"}),L.jsx(sy,{size:11})]}):L.jsx("span",{className:"inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-500 bg-white/5 border border-white/5 cursor-not-allowed min-h-[46px]",children:L.jsx("span",{children:"Internal Project"})}),L.jsxs("a",{href:p.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 glass-panel glass-panel-hover hover:text-white active:scale-95 transition-all cursor-pointer min-h-[46px]",children:[L.jsx(wd,{size:15}),L.jsx("span",{children:"Inspect Source Code"})]})]})]})]})]})},GT=()=>{const r=Se.useRef(null),[t,i]=Se.useState(!1),s="devangkhuman2003@gmail.com",l=Se.useRef(0),c=()=>{navigator.clipboard.writeText(s),i(!0),l.current=1,setTimeout(()=>i(!1),2500)};return Se.useEffect(()=>{const f=r.current;if(!f)return;let d=f.clientWidth||320,m=f.clientHeight||320;const p=window.innerWidth<768,g=new Ir,v=new _n(45,d/m,.1,100);v.position.set(0,0,p?7.6:6.5);const _=new zr({alpha:!0,antialias:!p,powerPreference:"high-performance"});_.setSize(d,m),_.setPixelRatio(Math.min(window.devicePixelRatio,p?1.5:2)),_.toneMapping=Cs,f.appendChild(_.domElement);const y=new Br(16777215,.75);g.add(y);const E=new Ai(3718648,4,15);E.position.set(3,4,3),g.add(E);const T=new Ai(11032055,3,15);T.position.set(-3,-3,2),g.add(T);const M=new Xn;g.add(M);const x=new Rs(1.8,24,24),N=new yn({color:3718648,wireframe:!0,transparent:!0,opacity:.35,roughness:.2,metalness:.9}),U=new be(x,N);M.add(U);const R=new ws(.8,1),k=new yn({color:988970,emissive:165063,emissiveIntensity:.8,roughness:.1,metalness:.9}),I=new be(R,k);M.add(I);const B=new la(2.3,.03,16,64),G=new Oi({color:8490232,transparent:!0,opacity:.5}),C=new be(B,G);C.rotation.x=Math.PI/2.3,M.add(C);const b=3,H=[],$=new Vd(.5,.54,36);for(let st=0;st<b;st++){const ht=new Oi({color:3718648,transparent:!0,opacity:.8,side:Mi}),X=new be($,ht);X.rotation.x=Math.PI/2,M.add(X),H.push({mesh:X,progress:st/b})}let tt=0,ot=0,dt=0,z=0;const et=st=>{const ht=f.getBoundingClientRect();dt=(st.clientX-ht.left)/ht.width*2-1,z=-((st.clientY-ht.top)/ht.height*2-1)};window.addEventListener("mousemove",et);let q;const xt=new Fr,O=()=>{q=requestAnimationFrame(O);const st=xt.getElapsedTime();tt+=(dt-tt)*.05,ot+=(z-ot)*.05,M.rotation.y=st*.4+tt*.4,M.rotation.x=ot*.3,I.rotation.y=-st*.6,C.rotation.z=st*.3,H.forEach(ht=>{ht.progress+=.01,ht.progress>1&&(ht.progress=0);const X=.8+ht.progress*3.5;ht.mesh.scale.set(X,X,X),ht.mesh.material.opacity=(1-ht.progress)*.6}),l.current>.01?(l.current*=.92,I.scale.set(1+l.current*.5,1+l.current*.5,1+l.current*.5),N.opacity=.35+l.current*.6):(I.scale.set(1,1,1),N.opacity=.35),_.render(g,v)};O();const V=()=>{if(!f)return;d=f.clientWidth,m=f.clientHeight;const st=window.innerWidth<768;v.aspect=d/m,v.position.set(0,0,st?7.6:6.5),v.updateProjectionMatrix(),_.setSize(d,m),_.setPixelRatio(Math.min(window.devicePixelRatio,st?1.5:2))};return window.addEventListener("resize",V),()=>{cancelAnimationFrame(q),window.removeEventListener("mousemove",et),window.removeEventListener("resize",V),f&&_.domElement&&f.removeChild(_.domElement),x.dispose(),N.dispose(),R.dispose(),k.dispose(),B.dispose(),G.dispose(),$.dispose(),_.dispose()}},[]),L.jsxs("section",{id:"contact",className:"relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-10 sm:mb-16 space-y-2.5 sm:space-y-3",children:[L.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400",children:[L.jsx(Lg,{}),L.jsx("span",{children:"Interactive 3D Communication"})]}),L.jsxs("h2",{className:"text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:["Connect In ",L.jsx("span",{className:"text-gradient-cyan",children:"Real-Time"})]}),L.jsx("p",{className:"text-slate-400 max-w-lg mx-auto text-xs sm:text-sm md:text-base",children:"Ready to build your next web application? Send a signal through the network — my inbox is always open."})]}),L.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center",children:[L.jsxs("div",{className:"lg:col-span-5 relative w-full h-[300px] sm:h-[400px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center",children:[L.jsx("div",{ref:r,className:"w-full h-full cursor-pointer touch-pan-y"}),L.jsxs("div",{className:"absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-[10px] sm:text-xs font-mono text-cyan-400 pointer-events-none",children:[L.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),L.jsx("span",{children:"Signal Transmitter Online"})]}),L.jsx("div",{className:"absolute bottom-4 z-10 text-[10px] sm:text-[11px] font-mono text-slate-400 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 pointer-events-none",children:"Move cursor to steer transmission wave"})]}),L.jsxs("div",{className:"lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6 sm:space-y-8 shadow-2xl",children:[L.jsxs("div",{className:"space-y-2",children:[L.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium",children:[L.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"Fast response time: within 24 hours"]}),L.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Direct Communication"}),L.jsx("p",{className:"text-slate-400 text-xs sm:text-sm leading-relaxed",children:"Open for full-stack engineering roles, technical contracting, and innovative web projects."})]}),L.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 bg-slate-900/90 border border-white/10 p-2.5 sm:p-3 rounded-2xl",children:[L.jsxs("div",{className:"flex items-center gap-2.5 px-3 py-1.5 text-slate-300 font-mono text-xs sm:text-sm flex-1 truncate",children:[L.jsx(ay,{className:"text-cyan-400 shrink-0"}),L.jsx("span",{className:"truncate",children:s})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("button",{onClick:c,className:"flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all cursor-pointer border border-white/5 min-h-[42px]",children:t?L.jsxs(L.Fragment,{children:[L.jsx($1,{className:"text-emerald-400"}),L.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):L.jsxs(L.Fragment,{children:[L.jsx(ny,{className:"text-slate-400"}),L.jsx("span",{children:"Copy"})]})}),L.jsxs("a",{href:`mailto:${s}`,className:"flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 active:scale-95 shadow-md shadow-cyan-500/20 transition-all cursor-pointer min-h-[42px]",children:[L.jsx("span",{children:"Send Mail"}),L.jsx(Lg,{size:11})]})]})]}),L.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1",children:[L.jsxs("a",{href:"https://github.com/deepkhuman",target:"_blank",rel:"noopener noreferrer",className:"p-3.5 sm:p-4 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all flex items-center sm:flex-col sm:items-start justify-between gap-3 group min-h-[48px]",children:[L.jsx(wd,{className:"text-xl sm:text-2xl text-cyan-400 group-hover:scale-110 transition-transform"}),L.jsxs("div",{children:[L.jsx("div",{className:"text-xs font-bold text-white",children:"GitHub"}),L.jsx("div",{className:"text-[10px] sm:text-[11px] text-slate-400",children:"@deepkhuman"})]})]}),L.jsxs("a",{href:"https://www.linkedin.com/in/devang-khuman-364a28269",target:"_blank",rel:"noopener noreferrer",className:"p-3.5 sm:p-4 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all flex items-center sm:flex-col sm:items-start justify-between gap-3 group min-h-[48px]",children:[L.jsx(kv,{className:"text-xl sm:text-2xl text-indigo-400 group-hover:scale-110 transition-transform"}),L.jsxs("div",{children:[L.jsx("div",{className:"text-xs font-bold text-white",children:"LinkedIn"}),L.jsx("div",{className:"text-[10px] sm:text-[11px] text-slate-400",children:"Devang Khuman"})]})]}),L.jsxs("a",{href:"https://twitter.com/GetMemes93957",target:"_blank",rel:"noopener noreferrer",className:"p-3.5 sm:p-4 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all flex items-center sm:flex-col sm:items-start justify-between gap-3 group min-h-[48px]",children:[L.jsx(Tx,{className:"text-xl sm:text-2xl text-purple-400 group-hover:scale-110 transition-transform"}),L.jsxs("div",{children:[L.jsx("div",{className:"text-xs font-bold text-white",children:"X / Twitter"}),L.jsx("div",{className:"text-[10px] sm:text-[11px] text-slate-400",children:"@GetMemes93957"})]})]})]})]})]})]})},VT=()=>{const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return L.jsxs("footer",{className:"relative border-t border-white/5 bg-slate-950/80 py-8 sm:py-12 px-4 sm:px-6 overflow-hidden",children:[L.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-24 sm:h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"}),L.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10 text-center sm:text-left",children:[L.jsxs("div",{className:"flex flex-col items-center sm:items-start space-y-1",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("span",{className:"w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-cyan-500/20",children:"DK"}),L.jsx("span",{className:"font-bold text-sm tracking-wide text-white",children:"Devang Khuman"})]}),L.jsx("p",{className:"text-[11px] sm:text-xs text-slate-400",children:"MERN Stack Developer • Building high-performance web applications."})]}),L.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500 font-mono",children:'"Code is like humor. When you have to explain it, it’s bad."'}),L.jsxs("button",{onClick:r,className:"group flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all cursor-pointer text-xs font-semibold min-h-[40px]","aria-label":"Back to top",children:[L.jsx("span",{children:"Back to Top"}),L.jsx(Q1,{className:"text-cyan-400 text-xs group-hover:-translate-y-1 transition-transform"})]})]}),L.jsxs("div",{className:"max-w-6xl mx-auto mt-6 pt-5 border-t border-white/5 text-center text-[11px] text-slate-500",children:["© ",new Date().getFullYear()," Devang Khuman. Crafted with precision, React & modern 3D design."]})]})};function kT(){const r=Se.useRef(null),t=Se.useRef(null),i=Se.useRef(null),s=Se.useRef(null),l=Se.useRef(null),c=f=>{var d;(d=f.current)==null||d.scrollIntoView({behavior:"smooth"})};return L.jsxs("div",{className:"relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden",children:[L.jsx(ET,{}),L.jsx(fy,{onScrollToHero:()=>c(r),onScrollToAbout:()=>c(t),onScrollToSkills:()=>c(i),onScrollToProjects:()=>c(s),onScrollToContact:()=>c(l)}),L.jsxs("main",{className:"relative z-10 flex flex-col space-y-10 sm:space-y-16",children:[L.jsx("div",{ref:r,children:L.jsx(OT,{onScrollToProjects:()=>c(s)})}),L.jsx("div",{ref:t,children:L.jsx(PT,{})}),L.jsx("div",{ref:i,children:L.jsx(zT,{})}),L.jsx("div",{ref:s,children:L.jsx(HT,{})}),L.jsx("div",{ref:l,children:L.jsx(GT,{})})]}),L.jsx(VT,{})]})}H1.createRoot(document.getElementById("root")).render(L.jsx(Se.StrictMode,{children:L.jsx(kT,{})}));
