const gs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};gs();function Hr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const vs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bs=Hr(vs);function Ti(e){return!!e||e===""}function Br(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=oe(r)?ws(r):Br(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(oe(e))return e;if(ie(e))return e}}const ys=/;(?![^(]*\))/g,xs=/:(.+)/;function ws(e){const t={};return e.split(ys).forEach(n=>{if(n){const r=n.split(xs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Yr(e){let t="";if(oe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Yr(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fn=e=>oe(e)?e:e==null?"":F(e)||ie(e)&&(e.toString===Ri||!L(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!F(t)&&!Fi(t)?String(t):t,X={},Ct=[],Ie=()=>{},_s=()=>!1,ks=/^on[^a-z]/,Ln=e=>ks.test(e),Wr=e=>e.startsWith("onUpdate:"),fe=Object.assign,Gr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Os=Object.prototype.hasOwnProperty,H=(e,t)=>Os.call(e,t),F=Array.isArray,Pt=e=>jn(e)==="[object Map]",Mi=e=>jn(e)==="[object Set]",L=e=>typeof e=="function",oe=e=>typeof e=="string",Kr=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",$i=e=>ie(e)&&L(e.then)&&L(e.catch),Ri=Object.prototype.toString,jn=e=>Ri.call(e),As=e=>jn(e).slice(8,-1),Fi=e=>jn(e)==="[object Object]",qr=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vn=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Es=/-(\w)/g,Le=Dn(e=>e.replace(Es,(t,n)=>n?n.toUpperCase():"")),Cs=/\B([A-Z])/g,$t=Dn(e=>e.replace(Cs,"-$1").toLowerCase()),zn=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),rr=Dn(e=>e?`on${zn(e)}`:""),Qt=(e,t)=>!Object.is(e,t),ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},On=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ps=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sa;const Is=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class Li{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Me&&(this.parent=Me,this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ji(e){return new Li(e)}function Ss(e,t=Me){t&&t.active&&t.effects.push(e)}const Xr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Di=e=>(e.w&rt)>0,zi=e=>(e.n&rt)>0,Ts=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rt},Ns=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Di(a)&&!zi(a)?a.delete(e):t[n++]=a,a.w&=~rt,a.n&=~rt}t.length=n}},dr=new WeakMap;let Vt=0,rt=1;const mr=30;let Oe;const dt=Symbol(""),pr=Symbol("");class Jr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ss(this,r)}run(){if(!this.active)return this.fn();let t=Oe,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,et=!0,rt=1<<++Vt,Vt<=mr?Ts(this):Ta(this),this.fn()}finally{Vt<=mr&&Ns(this),rt=1<<--Vt,Oe=this.parent,et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const Ui=[];function Rt(){Ui.push(et),et=!1}function Ft(){const e=Ui.pop();et=e===void 0?!0:e}function ge(e,t,n){if(et&&Oe){let r=dr.get(e);r||dr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Xr()),Vi(a)}}function Vi(e,t){let n=!1;Vt<=mr?zi(e)||(e.n|=rt,n=!Di(e)):n=!e.has(Oe),n&&(e.add(Oe),Oe.deps.push(e))}function Ve(e,t,n,r,a,i){const o=dr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?qr(n)&&s.push(o.get("length")):(s.push(o.get(dt)),Pt(e)&&s.push(o.get(pr)));break;case"delete":F(e)||(s.push(o.get(dt)),Pt(e)&&s.push(o.get(pr)));break;case"set":Pt(e)&&s.push(o.get(dt));break}if(s.length===1)s[0]&&hr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);hr(Xr(l))}}function hr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ms=Hr("__proto__,__v_isRef,__isVue"),Hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kr)),$s=Zr(),Rs=Zr(!1,!0),Fs=Zr(!0),Ma=Ls();function Ls(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=G(this)[t].apply(this,n);return Ft(),r}}),e}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Qs:Ki:t?Gi:Wi).get(r))return r;const o=F(r);if(!e&&o&&H(Ma,a))return Reflect.get(Ma,a,i);const s=Reflect.get(r,a,i);return(Kr(a)?Hi.has(a):Ms(a))||(e||ge(r,"get",a),t)?s:re(s)?o&&qr(a)?s:s.value:ie(s)?e?qi(s):Vn(s):s}}const js=Bi(),Ds=Bi(!0);function Bi(e=!1){return function(n,r,a,i){let o=n[r];if(en(o)&&re(o)&&!re(a))return!1;if(!e&&!en(a)&&(gr(a)||(a=G(a),o=G(o)),!F(n)&&re(o)&&!re(a)))return o.value=a,!0;const s=F(n)&&qr(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===G(i)&&(s?Qt(a,o)&&Ve(n,"set",r,a):Ve(n,"add",r,a)),l}}function zs(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ve(e,"delete",t,void 0),r}function Us(e,t){const n=Reflect.has(e,t);return(!Kr(t)||!Hi.has(t))&&ge(e,"has",t),n}function Vs(e){return ge(e,"iterate",F(e)?"length":dt),Reflect.ownKeys(e)}const Yi={get:$s,set:js,deleteProperty:zs,has:Us,ownKeys:Vs},Hs={get:Fs,set(e,t){return!0},deleteProperty(e,t){return!0}},Bs=fe({},Yi,{get:Rs,set:Ds}),Qr=e=>e,Un=e=>Reflect.getPrototypeOf(e);function fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);n||(t!==i&&ge(a,"get",t),ge(a,"get",i));const{has:o}=Un(a),s=r?Qr:n?na:tn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return t||(e!==a&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function un(e,t=!1){return e=e.__v_raw,!t&&ge(G(e),"iterate",dt),Reflect.get(e,"size",e)}function $a(e){e=G(e);const t=G(this);return Un(t).has.call(t,e)||(t.add(e),Ve(t,"add",e,e)),this}function Ra(e,t){t=G(t);const n=G(this),{has:r,get:a}=Un(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Qt(t,o)&&Ve(n,"set",e,t):Ve(n,"add",e,t),this}function Fa(e){const t=G(this),{has:n,get:r}=Un(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ve(t,"delete",e,void 0),i}function La(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Ve(e,"clear",void 0,void 0),n}function dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=G(o),l=t?Qr:e?na:tn;return!e&&ge(s,"iterate",dt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function mn(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=Pt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Qr:t?na:tn;return!t&&ge(i,"iterate",l?pr:dt),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function Ys(){const e={get(i){return fn(this,i)},get size(){return un(this)},has:cn,add:$a,set:Ra,delete:Fa,clear:La,forEach:dn(!1,!1)},t={get(i){return fn(this,i,!1,!0)},get size(){return un(this)},has:cn,add:$a,set:Ra,delete:Fa,clear:La,forEach:dn(!1,!0)},n={get(i){return fn(this,i,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:dn(!0,!1)},r={get(i){return fn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=mn(i,!1,!1),n[i]=mn(i,!0,!1),t[i]=mn(i,!1,!0),r[i]=mn(i,!0,!0)}),[e,n,t,r]}const[Ws,Gs,Ks,qs]=Ys();function ea(e,t){const n=t?e?qs:Ks:e?Gs:Ws;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const Xs={get:ea(!1,!1)},Js={get:ea(!1,!0)},Zs={get:ea(!0,!1)},Wi=new WeakMap,Gi=new WeakMap,Ki=new WeakMap,Qs=new WeakMap;function el(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(e){return e.__v_skip||!Object.isExtensible(e)?0:el(As(e))}function Vn(e){return en(e)?e:ta(e,!1,Yi,Xs,Wi)}function nl(e){return ta(e,!1,Bs,Js,Gi)}function qi(e){return ta(e,!0,Hs,Zs,Ki)}function ta(e,t,n,r,a){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=tl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function tt(e){return en(e)?tt(e.__v_raw):!!(e&&e.__v_isReactive)}function en(e){return!!(e&&e.__v_isReadonly)}function gr(e){return!!(e&&e.__v_isShallow)}function Xi(e){return tt(e)||en(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Tt(e){return On(e,"__v_skip",!0),e}const tn=e=>ie(e)?Vn(e):e,na=e=>ie(e)?qi(e):e;function Ji(e){et&&Oe&&(e=G(e),Vi(e.dep||(e.dep=Xr())))}function Zi(e,t){e=G(e),e.dep&&hr(e.dep)}function re(e){return!!(e&&e.__v_isRef===!0)}function ra(e){return rl(e,!1)}function rl(e,t){return re(e)?e:new al(e,t)}class al{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:tn(t)}get value(){return Ji(this),this._value}set value(t){t=this.__v_isShallow?t:G(t),Qt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:tn(t),Zi(this))}}function R(e){return re(e)?e.value:e}const il={get:(e,t,n)=>R(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return re(a)&&!re(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qi(e){return tt(e)?e:new Proxy(e,il)}function ol(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=ll(e,n);return t}class sl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ll(e,t,n){const r=e[t];return re(r)?r:new sl(e,t,n)}class fl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Jr(t,()=>{this._dirty||(this._dirty=!0,Zi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return Ji(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ie):(r=e.get,a=e.set),new fl(r,a,i||!a,n)}function nt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Hn(i,t,n)}return a}function Se(e,t,n,r){if(L(e)){const i=nt(e,t,n,r);return i&&$i(i)&&i.catch(o=>{Hn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function Hn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,o,s]);return}}ul(e,n,a,r)}function ul(e,t,n,r=!0){console.error(e)}let An=!1,vr=!1;const he=[];let Ue=0;const Yt=[];let Ht=null,_t=0;const Wt=[];let Ze=null,kt=0;const eo=Promise.resolve();let aa=null,br=null;function to(e){const t=aa||eo;return e?t.then(this?e.bind(this):e):t}function dl(e){let t=Ue+1,n=he.length;for(;t<n;){const r=t+n>>>1;nn(he[r])<e?t=r+1:n=r}return t}function no(e){(!he.length||!he.includes(e,An&&e.allowRecurse?Ue+1:Ue))&&e!==br&&(e.id==null?he.push(e):he.splice(dl(e.id),0,e),ro())}function ro(){!An&&!vr&&(vr=!0,aa=eo.then(oo))}function ml(e){const t=he.indexOf(e);t>Ue&&he.splice(t,1)}function ao(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ro()}function pl(e){ao(e,Ht,Yt,_t)}function hl(e){ao(e,Ze,Wt,kt)}function Bn(e,t=null){if(Yt.length){for(br=t,Ht=[...new Set(Yt)],Yt.length=0,_t=0;_t<Ht.length;_t++)Ht[_t]();Ht=null,_t=0,br=null,Bn(e,t)}}function io(e){if(Bn(),Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,Ze){Ze.push(...t);return}for(Ze=t,Ze.sort((n,r)=>nn(n)-nn(r)),kt=0;kt<Ze.length;kt++)Ze[kt]();Ze=null,kt=0}}const nn=e=>e.id==null?1/0:e.id;function oo(e){vr=!1,An=!0,Bn(e),he.sort((n,r)=>nn(n)-nn(r));const t=Ie;try{for(Ue=0;Ue<he.length;Ue++){const n=he[Ue];n&&n.active!==!1&&nt(n,null,14)}}finally{Ue=0,he.length=0,io(),An=!1,aa=null,(he.length||Yt.length||Wt.length)&&oo(e)}}function gl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||X;h&&(a=n.map(k=>k.trim())),m&&(a=n.map(Ps))}let s,l=r[s=rr(t)]||r[s=rr(Le(t))];!l&&i&&(l=r[s=rr($t(t))]),l&&Se(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(u,e,6,a)}}function so(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=so(u,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):fe(o,i),r.set(e,o),o)}function Yn(e,t){return!e||!Ln(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,$t(t))||H(e,t))}let Ee=null,lo=null;function En(e){const t=Ee;return Ee=e,lo=e&&e.type.__scopeId||null,t}function vl(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ga(-1);const i=En(t),o=e(...a);return En(i),r._d&&Ga(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:h,setupState:k,ctx:N,inheritAttrs:j}=e;let T,y;const E=En(e);try{if(n.shapeFlag&4){const z=a||r;T=$e(d.call(z,z,m,i,k,h,N)),y=l}else{const z=t;T=$e(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),y=t.props?l:bl(l)}}catch(z){Gt.length=0,Hn(z,e,1),T=Y(pt)}let M=T;if(y&&j!==!1){const z=Object.keys(y),{shapeFlag:D}=M;z.length&&D&7&&(o&&z.some(Wr)&&(y=yl(y,o)),M=Nt(M,y))}return n.dirs&&(M=Nt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),T=M,En(E),T}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ln(n))&&((t||(t={}))[n]=e[n]);return t},yl=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ja(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!Yn(u,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ja(r,o,u):!0:!!o;return!1}function ja(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Yn(n,i))return!0}return!1}function wl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const _l=e=>e.__isSuspense;function kl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):hl(e)}function Ol(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function bn(e,t,n=!1){const r=ae||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Da={};function It(e,t,n){return fo(e,t,n)}function fo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){const s=ae;let l,u=!1,d=!1;if(re(e)?(l=()=>e.value,u=gr(e)):tt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>tt(y)||gr(y)),l=()=>e.map(y=>{if(re(y))return y.value;if(tt(y))return Ot(y);if(L(y))return nt(y,s,2)})):L(e)?t?l=()=>nt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Se(e,s,3,[h])}:l=Ie,t&&r){const y=l;l=()=>Ot(y())}let m,h=y=>{m=T.onStop=()=>{nt(y,s,4)}};if(an)return h=Ie,t?n&&Se(t,s,3,[l(),d?[]:void 0,h]):l(),Ie;let k=d?[]:Da;const N=()=>{if(!!T.active)if(t){const y=T.run();(r||u||(d?y.some((E,M)=>Qt(E,k[M])):Qt(y,k)))&&(m&&m(),Se(t,s,3,[y,k===Da?void 0:k,h]),k=y)}else T.run()};N.allowRecurse=!!t;let j;a==="sync"?j=N:a==="post"?j=()=>de(N,s&&s.suspense):j=()=>pl(N);const T=new Jr(l,j);return t?n?N():k=T.run():a==="post"?de(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Gr(s.scope.effects,T)}}function Al(e,t,n){const r=this.proxy,a=oe(e)?e.includes(".")?co(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ae;Mt(this);const s=fo(a,i.bind(r),n);return o?Mt(o):mt(),s}function co(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ot(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))Ot(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)Ot(e[n],t);else if(Mi(e)||Pt(e))e.forEach(n=>{Ot(n,t)});else if(Fi(e))for(const n in e)Ot(e[n],t);return e}function ia(e){return L(e)?{setup:e,name:e.name}:e}const yn=e=>!!e.type.__asyncLoader,uo=e=>e.type.__isKeepAlive;function El(e,t){mo(e,"a",t)}function Cl(e,t){mo(e,"da",t)}function mo(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Wn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)uo(a.parent.vnode)&&Pl(r,t,n,a),a=a.parent}}function Pl(e,t,n,r){const a=Wn(t,e,r,!0);oa(()=>{Gr(r[t],a)},n)}function Wn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),Mt(n);const s=Se(t,n,e,o);return mt(),Ft(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=ae)=>(!an||e==="sp")&&Wn(e,t,n),Il=We("bm"),po=We("m"),Sl=We("bu"),Tl=We("u"),Nl=We("bum"),oa=We("um"),Ml=We("sp"),$l=We("rtg"),Rl=We("rtc");function Fl(e,t=ae){Wn("ec",e,t)}function st(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Rt(),Se(l,n,8,[e.el,s,e,t]),Ft())}}const ho="components";function Ll(e,t){return Dl(ho,e,!0,t)||e}const jl=Symbol();function Dl(e,t,n=!0,r=!1){const a=Ee||ae;if(a){const i=a.type;if(e===ho){const s=gf(i,!1);if(s&&(s===t||s===Le(t)||s===zn(Le(t))))return i}const o=za(a[e]||i[e],t)||za(a.appContext[e],t);return!o&&r?i:o}}function za(e,t){return e&&(e[t]||e[Le(t)]||e[zn(Le(t))])}const yr=e=>e?Io(e)?ca(e)||e.proxy:yr(e.parent):null,Cn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>vo(e),$forceUpdate:e=>e.f||(e.f=()=>no(e.update)),$nextTick:e=>e.n||(e.n=to.bind(e.proxy)),$watch:e=>Al.bind(e)}),zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==X&&H(r,t))return o[t]=1,r[t];if(a!==X&&H(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&H(u,t))return o[t]=3,i[t];if(n!==X&&H(n,t))return o[t]=4,n[t];xr&&(o[t]=0)}}const d=Cn[t];let m,h;if(d)return t==="$attrs"&&ge(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&H(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,H(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==X&&H(a,t)?(a[t]=n,!0):r!==X&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&H(e,o)||t!==X&&H(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Cn,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xr=!0;function Ul(e){const t=vo(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&Ua(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:h,beforeUpdate:k,updated:N,activated:j,deactivated:T,beforeDestroy:y,beforeUnmount:E,destroyed:M,unmounted:z,render:D,renderTracked:ne,renderTriggered:U,errorCaptured:V,serverPrefetch:ee,expose:we,inheritAttrs:be,components:ot,directives:vt,filters:Ke}=t;if(u&&Vl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const J=o[te];L(J)&&(r[te]=J.bind(n))}if(a){const te=a.call(n,n);ie(te)&&(e.data=Vn(te))}if(xr=!0,i)for(const te in i){const J=i[te],je=L(J)?J.bind(n,n):L(J.get)?J.get.bind(n,n):Ie,er=!L(J)&&L(J.set)?J.set.bind(n):Ie,Dt=pe({get:je,set:er});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:bt=>Dt.value=bt})}if(s)for(const te in s)go(s[te],r,n,te);if(l){const te=L(l)?l.call(n):l;Reflect.ownKeys(te).forEach(J=>{Ol(J,te[J])})}d&&Ua(d,e,"c");function ce(te,J){F(J)?J.forEach(je=>te(je.bind(n))):J&&te(J.bind(n))}if(ce(Il,m),ce(po,h),ce(Sl,k),ce(Tl,N),ce(El,j),ce(Cl,T),ce(Fl,V),ce(Rl,ne),ce($l,U),ce(Nl,E),ce(oa,z),ce(Ml,ee),F(we))if(we.length){const te=e.exposed||(e.exposed={});we.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:je=>n[J]=je})})}else e.exposed||(e.exposed={});D&&e.render===Ie&&(e.render=D),be!=null&&(e.inheritAttrs=be),ot&&(e.components=ot),vt&&(e.directives=vt)}function Vl(e,t,n=Ie,r=!1){F(e)&&(e=wr(e));for(const a in e){const i=e[a];let o;ie(i)?"default"in i?o=bn(i.from||a,i.default,!0):o=bn(i.from||a):o=bn(i),re(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ua(e,t,n){Se(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function go(e,t,n,r){const a=r.includes(".")?co(n,r):()=>n[r];if(oe(e)){const i=t[e];L(i)&&It(a,i)}else if(L(e))It(a,e.bind(n));else if(ie(e))if(F(e))e.forEach(i=>go(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&It(a,i,e)}}function vo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Pn(l,u,o,!0)),Pn(l,t,o)),i.set(t,l),l}function Pn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Pn(e,i,n,!0),a&&a.forEach(o=>Pn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Hl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Hl={data:Va,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:ft,directives:ft,watch:Yl,provide:Va,inject:Bl};function Va(e,t){return t?e?function(){return fe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Bl(e,t){return ft(wr(e),wr(t))}function wr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function ft(e,t){return e?fe(fe(Object.create(null),e),t):t}function Yl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Wl(e,t,n,r=!1){const a={},i={};On(i,Gn,1),e.propsDefaults=Object.create(null),bo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:nl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Gl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=G(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(Yn(e.emitsOptions,h))continue;const k=t[h];if(l)if(H(i,h))k!==i[h]&&(i[h]=k,u=!0);else{const N=Le(h);a[N]=_r(l,s,N,k,e,!1)}else k!==i[h]&&(i[h]=k,u=!0)}}}else{bo(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=$t(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=_r(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m)&&!0)&&(delete i[m],u=!0)}u&&Ve(e,"set","$attrs")}function bo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(vn(l))continue;const u=t[l];let d;a&&H(a,d=Le(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Yn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=G(n),u=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=_r(a,l,m,u[m],e,!H(u,m))}}return o}function _r(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Mt(a),r=u[n]=l.call(null,t),mt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function yo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[h,k]=yo(m,t,!0);fe(o,h),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,Ct),Ct;if(F(i))for(let d=0;d<i.length;d++){const m=Le(i[d]);Ha(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Le(d);if(Ha(m)){const h=i[d],k=o[m]=F(h)||L(h)?{type:h}:h;if(k){const N=Wa(Boolean,k.type),j=Wa(String,k.type);k[0]=N>-1,k[1]=j<0||N<j,(N>-1||H(k,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Ha(e){return e[0]!=="$"}function Ba(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ya(e,t){return Ba(e)===Ba(t)}function Wa(e,t){return F(t)?t.findIndex(n=>Ya(n,e)):L(t)&&Ya(t,e)?0:-1}const xo=e=>e[0]==="_"||e==="$stable",sa=e=>F(e)?e.map($e):[$e(e)],Kl=(e,t,n)=>{if(t._n)return t;const r=vl((...a)=>sa(t(...a)),n);return r._c=!1,r},wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(xo(a))continue;const i=e[a];if(L(i))t[a]=Kl(a,i,r);else if(i!=null){const o=sa(i);t[a]=()=>o}}},_o=(e,t)=>{const n=sa(t);e.slots.default=()=>n},ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),On(t,"_",n)):wo(t,e.slots={})}else e.slots={},t&&_o(e,t);On(e.slots,Gn,1)},Xl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,wo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!xo(s)&&!(s in o)&&delete a[s]};function ko(){return{app:null,config:{isNativeTag:_s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jl=0;function Zl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!ie(a)&&(a=null);const i=ko(),o=new Set;let s=!1;const l=i.app={_uid:Jl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const h=Y(r,a);return h.appContext=i,d&&t?t(h,u):e(h,u,m),s=!0,l._container=u,u.__vue_app__=l,ca(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function kr(e,t,n,r,a=!1){if(F(e)){e.forEach((h,k)=>kr(h,t&&(F(t)?t[k]:t),n,r,a));return}if(yn(r)&&!a)return;const i=r.shapeFlag&4?ca(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(oe(u)?(d[u]=null,H(m,u)&&(m[u]=null)):re(u)&&(u.value=null)),L(l))nt(l,s,12,[o,d]);else{const h=oe(l),k=re(l);if(h||k){const N=()=>{if(e.f){const j=h?d[l]:l.value;a?F(j)&&Gr(j,i):F(j)?j.includes(i)||j.push(i):h?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,H(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(N.id=-1,de(N,n)):N()}}}const de=kl;function Ql(e){return ef(e)}function ef(e,t){const n=Is();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:h,setScopeId:k=Ie,cloneNode:N,insertStaticContent:j}=e,T=(f,c,p,v=null,g=null,w=null,O=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Ut(f,c)&&(v=ln(f),qe(f,g,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:P,shapeFlag:C}=c;switch(b){case la:y(f,c,p,v);break;case pt:E(f,c,p,v);break;case or:f==null&&M(c,p,v,O);break;case ye:vt(f,c,p,v,g,w,O,x,_);break;default:C&1?ne(f,c,p,v,g,w,O,x,_):C&6?Ke(f,c,p,v,g,w,O,x,_):(C&64||C&128)&&b.process(f,c,p,v,g,w,O,x,_,yt)}P!=null&&g&&kr(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,v)=>{if(f==null)r(c.el=s(c.children),p,v);else{const g=c.el=f.el;c.children!==f.children&&u(g,c.children)}},E=(f,c,p,v)=>{f==null?r(c.el=l(c.children||""),p,v):c.el=f.el},M=(f,c,p,v)=>{[f.el,f.anchor]=j(f.children,c,p,v,f.el,f.anchor)},z=({el:f,anchor:c},p,v)=>{let g;for(;f&&f!==c;)g=h(f),r(f,p,v),f=g;r(c,p,v)},D=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=h(f),a(f),f=p;a(c)},ne=(f,c,p,v,g,w,O,x,_)=>{O=O||c.type==="svg",f==null?U(c,p,v,g,w,O,x,_):we(f,c,g,w,O,x,_)},U=(f,c,p,v,g,w,O,x)=>{let _,b;const{type:P,props:C,shapeFlag:I,transition:$,patchFlag:B,dirs:K}=f;if(f.el&&N!==void 0&&B===-1)_=f.el=N(f.el);else{if(_=f.el=o(f.type,w,C&&C.is,C),I&8?d(_,f.children):I&16&&ee(f.children,_,null,v,g,w&&P!=="foreignObject",O,x),K&&st(f,null,v,"created"),C){for(const Z in C)Z!=="value"&&!vn(Z)&&i(_,Z,null,C[Z],w,f.children,v,g,De);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ne(b,v,f)}V(_,f,f.scopeId,O,v)}K&&st(f,null,v,"beforeMount");const q=(!g||g&&!g.pendingBranch)&&$&&!$.persisted;q&&$.beforeEnter(_),r(_,c,p),((b=C&&C.onVnodeMounted)||q||K)&&de(()=>{b&&Ne(b,v,f),q&&$.enter(_),K&&st(f,null,v,"mounted")},g)},V=(f,c,p,v,g)=>{if(p&&k(f,p),v)for(let w=0;w<v.length;w++)k(f,v[w]);if(g){let w=g.subTree;if(c===w){const O=g.vnode;V(f,O,O.scopeId,O.slotScopeIds,g.parent)}}},ee=(f,c,p,v,g,w,O,x,_=0)=>{for(let b=_;b<f.length;b++){const P=f[b]=x?Qe(f[b]):$e(f[b]);T(null,P,c,p,v,g,w,O,x)}},we=(f,c,p,v,g,w,O)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:P}=c;_|=f.patchFlag&16;const C=f.props||X,I=c.props||X;let $;p&&lt(p,!1),($=I.onVnodeBeforeUpdate)&&Ne($,p,c,f),P&&st(c,f,p,"beforeUpdate"),p&&lt(p,!0);const B=g&&c.type!=="foreignObject";if(b?be(f.dynamicChildren,b,x,p,v,B,w):O||je(f,c,x,null,p,v,B,w,!1),_>0){if(_&16)ot(x,c,C,I,p,v,g);else if(_&2&&C.class!==I.class&&i(x,"class",null,I.class,g),_&4&&i(x,"style",C.style,I.style,g),_&8){const K=c.dynamicProps;for(let q=0;q<K.length;q++){const Z=K[q],_e=C[Z],xt=I[Z];(xt!==_e||Z==="value")&&i(x,Z,_e,xt,g,f.children,p,v,De)}}_&1&&f.children!==c.children&&d(x,c.children)}else!O&&b==null&&ot(x,c,C,I,p,v,g);(($=I.onVnodeUpdated)||P)&&de(()=>{$&&Ne($,p,c,f),P&&st(c,f,p,"updated")},v)},be=(f,c,p,v,g,w,O)=>{for(let x=0;x<c.length;x++){const _=f[x],b=c[x],P=_.el&&(_.type===ye||!Ut(_,b)||_.shapeFlag&70)?m(_.el):p;T(_,b,P,null,v,g,w,O,!0)}},ot=(f,c,p,v,g,w,O)=>{if(p!==v){for(const x in v){if(vn(x))continue;const _=v[x],b=p[x];_!==b&&x!=="value"&&i(f,x,b,_,O,c.children,g,w,De)}if(p!==X)for(const x in p)!vn(x)&&!(x in v)&&i(f,x,p[x],null,O,c.children,g,w,De);"value"in v&&i(f,"value",p.value,v.value)}},vt=(f,c,p,v,g,w,O,x,_)=>{const b=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:$}=c;$&&(x=x?x.concat($):$),f==null?(r(b,p,v),r(P,p,v),ee(c.children,p,P,g,w,O,x,_)):C>0&&C&64&&I&&f.dynamicChildren?(be(f.dynamicChildren,I,p,g,w,O,x),(c.key!=null||g&&c===g.subTree)&&Oo(f,c,!0)):je(f,c,p,P,g,w,O,x,_)},Ke=(f,c,p,v,g,w,O,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?g.ctx.activate(c,p,v,O,_):se(c,p,v,g,w,O,_):ce(f,c,_)},se=(f,c,p,v,g,w,O)=>{const x=f.component=uf(f,v,g);if(uo(f)&&(x.ctx.renderer=yt),df(x),x.asyncDep){if(g&&g.registerDep(x,te),!f.el){const _=x.subTree=Y(pt);E(null,_,c,p)}return}te(x,f,c,p,g,w,O)},ce=(f,c,p)=>{const v=c.component=f.component;if(xl(f,c,p))if(v.asyncDep&&!v.asyncResolved){J(v,c,p);return}else v.next=c,ml(v.update),v.update();else c.el=f.el,v.vnode=c},te=(f,c,p,v,g,w,O)=>{const x=()=>{if(f.isMounted){let{next:P,bu:C,u:I,parent:$,vnode:B}=f,K=P,q;lt(f,!1),P?(P.el=B.el,J(f,P,O)):P=B,C&&ar(C),(q=P.props&&P.props.onVnodeBeforeUpdate)&&Ne(q,$,P,B),lt(f,!0);const Z=ir(f),_e=f.subTree;f.subTree=Z,T(_e,Z,m(_e.el),ln(_e),f,g,w),P.el=Z.el,K===null&&wl(f,Z.el),I&&de(I,g),(q=P.props&&P.props.onVnodeUpdated)&&de(()=>Ne(q,$,P,B),g)}else{let P;const{el:C,props:I}=c,{bm:$,m:B,parent:K}=f,q=yn(c);if(lt(f,!1),$&&ar($),!q&&(P=I&&I.onVnodeBeforeMount)&&Ne(P,K,c),lt(f,!0),C&&nr){const Z=()=>{f.subTree=ir(f),nr(C,f.subTree,f,g,null)};q?c.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=ir(f);T(null,Z,p,v,f,g,w),c.el=Z.el}if(B&&de(B,g),!q&&(P=I&&I.onVnodeMounted)){const Z=c;de(()=>Ne(P,K,Z),g)}(c.shapeFlag&256||K&&yn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&de(f.a,g),f.isMounted=!0,c=p=v=null}},_=f.effect=new Jr(x,()=>no(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,lt(f,!0),b()},J=(f,c,p)=>{c.component=f;const v=f.vnode.props;f.vnode=c,f.next=null,Gl(f,c.props,v,p),Xl(f,c.children,p),Rt(),Bn(void 0,f.update),Ft()},je=(f,c,p,v,g,w,O,x,_=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,C=c.children,{patchFlag:I,shapeFlag:$}=c;if(I>0){if(I&128){Dt(b,C,p,v,g,w,O,x,_);return}else if(I&256){er(b,C,p,v,g,w,O,x,_);return}}$&8?(P&16&&De(b,g,w),C!==b&&d(p,C)):P&16?$&16?Dt(b,C,p,v,g,w,O,x,_):De(b,g,w,!0):(P&8&&d(p,""),$&16&&ee(C,p,v,g,w,O,x,_))},er=(f,c,p,v,g,w,O,x,_)=>{f=f||Ct,c=c||Ct;const b=f.length,P=c.length,C=Math.min(b,P);let I;for(I=0;I<C;I++){const $=c[I]=_?Qe(c[I]):$e(c[I]);T(f[I],$,p,null,g,w,O,x,_)}b>P?De(f,g,w,!0,!1,C):ee(c,p,v,g,w,O,x,_,C)},Dt=(f,c,p,v,g,w,O,x,_)=>{let b=0;const P=c.length;let C=f.length-1,I=P-1;for(;b<=C&&b<=I;){const $=f[b],B=c[b]=_?Qe(c[b]):$e(c[b]);if(Ut($,B))T($,B,p,null,g,w,O,x,_);else break;b++}for(;b<=C&&b<=I;){const $=f[C],B=c[I]=_?Qe(c[I]):$e(c[I]);if(Ut($,B))T($,B,p,null,g,w,O,x,_);else break;C--,I--}if(b>C){if(b<=I){const $=I+1,B=$<P?c[$].el:v;for(;b<=I;)T(null,c[b]=_?Qe(c[b]):$e(c[b]),p,B,g,w,O,x,_),b++}}else if(b>I)for(;b<=C;)qe(f[b],g,w,!0),b++;else{const $=b,B=b,K=new Map;for(b=B;b<=I;b++){const me=c[b]=_?Qe(c[b]):$e(c[b]);me.key!=null&&K.set(me.key,b)}let q,Z=0;const _e=I-B+1;let xt=!1,Ca=0;const zt=new Array(_e);for(b=0;b<_e;b++)zt[b]=0;for(b=$;b<=C;b++){const me=f[b];if(Z>=_e){qe(me,g,w,!0);continue}let Te;if(me.key!=null)Te=K.get(me.key);else for(q=B;q<=I;q++)if(zt[q-B]===0&&Ut(me,c[q])){Te=q;break}Te===void 0?qe(me,g,w,!0):(zt[Te-B]=b+1,Te>=Ca?Ca=Te:xt=!0,T(me,c[Te],p,null,g,w,O,x,_),Z++)}const Pa=xt?tf(zt):Ct;for(q=Pa.length-1,b=_e-1;b>=0;b--){const me=B+b,Te=c[me],Ia=me+1<P?c[me+1].el:v;zt[b]===0?T(null,Te,p,Ia,g,w,O,x,_):xt&&(q<0||b!==Pa[q]?bt(Te,p,Ia,2):q--)}}},bt=(f,c,p,v,g=null)=>{const{el:w,type:O,transition:x,children:_,shapeFlag:b}=f;if(b&6){bt(f.component.subTree,c,p,v);return}if(b&128){f.suspense.move(c,p,v);return}if(b&64){O.move(f,c,p,yt);return}if(O===ye){r(w,c,p);for(let C=0;C<_.length;C++)bt(_[C],c,p,v);r(f.anchor,c,p);return}if(O===or){z(f,c,p);return}if(v!==2&&b&1&&x)if(v===0)x.beforeEnter(w),r(w,c,p),de(()=>x.enter(w),g);else{const{leave:C,delayLeave:I,afterLeave:$}=x,B=()=>r(w,c,p),K=()=>{C(w,()=>{B(),$&&$()})};I?I(w,B,K):K()}else r(w,c,p)},qe=(f,c,p,v=!1,g=!1)=>{const{type:w,props:O,ref:x,children:_,dynamicChildren:b,shapeFlag:P,patchFlag:C,dirs:I}=f;if(x!=null&&kr(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const $=P&1&&I,B=!yn(f);let K;if(B&&(K=O&&O.onVnodeBeforeUnmount)&&Ne(K,c,f),P&6)hs(f.component,p,v);else{if(P&128){f.suspense.unmount(p,v);return}$&&st(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,g,yt,v):b&&(w!==ye||C>0&&C&64)?De(b,c,p,!1,!0):(w===ye&&C&384||!g&&P&16)&&De(_,c,p),v&&Aa(f)}(B&&(K=O&&O.onVnodeUnmounted)||$)&&de(()=>{K&&Ne(K,c,f),$&&st(f,null,c,"unmounted")},p)},Aa=f=>{const{type:c,el:p,anchor:v,transition:g}=f;if(c===ye){ps(p,v);return}if(c===or){D(f);return}const w=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:x}=g,_=()=>O(p,w);x?x(f.el,w,_):_()}else w()},ps=(f,c)=>{let p;for(;f!==c;)p=h(f),a(f),f=p;a(c)},hs=(f,c,p)=>{const{bum:v,scope:g,update:w,subTree:O,um:x}=f;v&&ar(v),g.stop(),w&&(w.active=!1,qe(O,f,c,p)),x&&de(x,c),de(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},De=(f,c,p,v=!1,g=!1,w=0)=>{for(let O=w;O<f.length;O++)qe(f[O],c,p,v,g)},ln=f=>f.shapeFlag&6?ln(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Ea=(f,c,p)=>{f==null?c._vnode&&qe(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),io(),c._vnode=f},yt={p:T,um:qe,m:bt,r:Aa,mt:se,mc:ee,pc:je,pbc:be,n:ln,o:e};let tr,nr;return t&&([tr,nr]=t(yt)),{render:Ea,hydrate:tr,createApp:Zl(Ea,tr)}}function lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Oo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||Oo(o,s))}}function tf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const nf=e=>e.__isTeleport,ye=Symbol(void 0),la=Symbol(void 0),pt=Symbol(void 0),or=Symbol(void 0),Gt=[];let Ce=null;function xe(e=!1){Gt.push(Ce=e?null:[])}function rf(){Gt.pop(),Ce=Gt[Gt.length-1]||null}let rn=1;function Ga(e){rn+=e}function Ao(e){return e.dynamicChildren=rn>0?Ce||Ct:null,rf(),rn>0&&Ce&&Ce.push(e),e}function Re(e,t,n,r,a,i){return Ao(W(e,t,n,r,a,i,!0))}function Eo(e,t,n,r,a){return Ao(Y(e,t,n,r,a,!0))}function Or(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const Gn="__vInternal",Co=({key:e})=>e!=null?e:null,xn=({ref:e,ref_key:t,ref_for:n})=>e!=null?oe(e)||re(e)||L(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function W(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Co(t),ref:t&&xn(t),scopeId:lo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=oe(n)?8:16),rn>0&&!o&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const Y=af;function af(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===jl)&&(e=pt),Or(e)){const s=Nt(e,t,!0);return n&&fa(s,n),rn>0&&!i&&Ce&&(s.shapeFlag&6?Ce[Ce.indexOf(e)]=s:Ce.push(s)),s.patchFlag|=-2,s}if(vf(e)&&(e=e.__vccOpts),t){t=of(t);let{class:s,style:l}=t;s&&!oe(s)&&(t.class=Yr(s)),ie(l)&&(Xi(l)&&!F(l)&&(l=fe({},l)),t.style=Br(l))}const o=oe(e)?1:_l(e)?128:nf(e)?64:ie(e)?4:L(e)?2:0;return W(e,t,n,r,a,o,i,!0)}function of(e){return e?Xi(e)||Gn in e?fe({},e):e:null}function Nt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?lf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Co(s),ref:t&&t.ref?n&&a?F(a)?a.concat(xn(t)):[a,xn(t)]:xn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),el:e.el,anchor:e.anchor}}function sf(e=" ",t=0){return Y(la,null,e,t)}function pn(e="",t=!1){return t?(xe(),Eo(pt,null,e)):Y(pt,null,e)}function $e(e){return e==null||typeof e=="boolean"?Y(pt):F(e)?Y(ye,null,e.slice()):typeof e=="object"?Qe(e):Y(la,null,String(e))}function Qe(e){return e.el===null||e.memo?e:Nt(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Gn in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[sf(t)]):n=8);e.children=t,e.shapeFlag|=n}function lf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Yr([t.class,r.class]));else if(a==="style")t.style=Br([t.style,r.style]);else if(Ln(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Se(e,t,7,[n,r])}const ff=ko();let cf=0;function uf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ff,i={uid:cf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Li(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yo(r,a),emitsOptions:so(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=gl.bind(null,i),e.ce&&e.ce(i),i}let ae=null;const Po=()=>ae||Ee,Mt=e=>{ae=e,e.scope.on()},mt=()=>{ae&&ae.scope.off(),ae=null};function Io(e){return e.vnode.shapeFlag&4}let an=!1;function df(e,t=!1){an=t;const{props:n,children:r}=e.vnode,a=Io(e);Wl(e,n,a,t),ql(e,r);const i=a?mf(e,t):void 0;return an=!1,i}function mf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Tt(new Proxy(e.ctx,zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?hf(e):null;Mt(e),Rt();const i=nt(r,e,0,[e.props,a]);if(Ft(),mt(),$i(i)){if(i.then(mt,mt),t)return i.then(o=>{Ka(e,o,t)}).catch(o=>{Hn(o,e,0)});e.asyncDep=i}else Ka(e,i,t)}else So(e,t)}function Ka(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Qi(t)),So(e,n)}let qa;function So(e,t,n){const r=e.type;if(!e.render){if(!t&&qa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=qa(a,u)}}e.render=r.render||Ie}Mt(e),Rt(),Ul(e),Ft(),mt()}function pf(e){return new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}})}function hf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=pf(e))},slots:e.slots,emit:e.emit,expose:t}}function ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(Tt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cn)return Cn[n](e)}}))}function gf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function vf(e){return L(e)&&"__vccOpts"in e}const pe=(e,t)=>cl(e,t,an);function To(e,t,n){const r=arguments.length;return r===2?ie(t)&&!F(t)?Or(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Or(n)&&(n=[n]),Y(e,t,n))}const bf="3.2.37",yf="http://www.w3.org/2000/svg",ct=typeof document<"u"?document:null,Xa=ct&&ct.createElement("template"),xf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ct.createElementNS(yf,e):ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Xa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Xa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _f(e,t,n){const r=e.style,a=oe(n);if(n&&!a){for(const i in n)Ar(r,i,n[i]);if(t&&!oe(t))for(const i in t)n[i]==null&&Ar(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ja=/\s*!important$/;function Ar(e,t,n){if(F(n))n.forEach(r=>Ar(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kf(e,t);Ja.test(n)?e.setProperty($t(r),n.replace(Ja,""),"important"):e[r]=n}}const Za=["Webkit","Moz","ms"],sr={};function kf(e,t){const n=sr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return sr[t]=r;r=zn(r);for(let a=0;a<Za.length;a++){const i=Za[a]+r;if(i in e)return sr[t]=i}return t}const Qa="http://www.w3.org/1999/xlink";function Of(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qa,t.slice(6,t.length)):e.setAttributeNS(Qa,t,n);else{const i=bs(t);n==null||i&&!Ti(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Af(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ti(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[No,Ef]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Er=0;const Cf=Promise.resolve(),Pf=()=>{Er=0},If=()=>Er||(Cf.then(Pf),Er=No());function Sf(e,t,n,r){e.addEventListener(t,n,r)}function Tf(e,t,n,r){e.removeEventListener(t,n,r)}function Nf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Mf(t);if(r){const u=i[t]=$f(r,a);Sf(e,s,u,l)}else o&&(Tf(e,s,o,l),i[t]=void 0)}}const ei=/(?:Once|Passive|Capture)$/;function Mf(e){let t;if(ei.test(e)){t={};let n;for(;n=e.match(ei);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[$t(e.slice(2)),t]}function $f(e,t){const n=r=>{const a=r.timeStamp||No();(Ef||a>=n.attached-1)&&Se(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=If(),n}function Rf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ti=/^on[a-z]/,Ff=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?wf(e,r,a):t==="style"?_f(e,n,r):Ln(t)?Wr(t)||Nf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,r,a))?Af(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Of(e,t,r,a))};function Lf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ti.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ti.test(t)&&oe(n)?!1:t in e}const jf=fe({patchProp:Ff},xf);let ni;function Df(){return ni||(ni=Ql(jf))}const zf=(...e)=>{const t=Df().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Uf(e){return oe(e)?document.querySelector(e):e}var Vf=!1;/*!
  * pinia v2.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Mo;const Kn=e=>Mo=e,$o=Symbol();function Cr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Kt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Kt||(Kt={}));function Hf(){const e=ji(!0),t=e.run(()=>ra({}));let n=[],r=[];const a=Tt({install(i){Kn(a),a._a=i,i.provide($o,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Vf?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Ro=()=>{};function ri(e,t,n,r=Ro){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Po()&&oa(a),a}function wt(e,...t){e.slice().forEach(n=>{n(...t)})}function Pr(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Cr(a)&&Cr(r)&&e.hasOwnProperty(n)&&!re(r)&&!tt(r)?e[n]=Pr(a,r):e[n]=r}return e}const Bf=Symbol();function Yf(e){return!Cr(e)||!e.hasOwnProperty(Bf)}const{assign:ze}=Object;function Wf(e){return!!(re(e)&&e.effect)}function Gf(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function u(){s||(n.state.value[e]=a?a():{});const d=ol(n.state.value[e]);return ze(d,i,Object.keys(o||{}).reduce((m,h)=>(m[h]=Tt(pe(()=>{Kn(n);const k=n._s.get(e);return o[h].call(k,k)})),m),{}))}return l=Fo(e,u,t,n,r,!0),l.$reset=function(){const m=a?a():{};this.$patch(h=>{ze(h,m)})},l}function Fo(e,t,n={},r,a,i){let o;const s=ze({actions:{}},n),l={deep:!0};let u,d,m=Tt([]),h=Tt([]),k;const N=r.state.value[e];!i&&!N&&(r.state.value[e]={}),ra({});let j;function T(U){let V;u=d=!1,typeof U=="function"?(U(r.state.value[e]),V={type:Kt.patchFunction,storeId:e,events:k}):(Pr(r.state.value[e],U),V={type:Kt.patchObject,payload:U,storeId:e,events:k});const ee=j=Symbol();to().then(()=>{j===ee&&(u=!0)}),d=!0,wt(m,V,r.state.value[e])}const y=Ro;function E(){o.stop(),m=[],h=[],r._s.delete(e)}function M(U,V){return function(){Kn(r);const ee=Array.from(arguments),we=[],be=[];function ot(se){we.push(se)}function vt(se){be.push(se)}wt(h,{args:ee,name:U,store:D,after:ot,onError:vt});let Ke;try{Ke=V.apply(this&&this.$id===e?this:D,ee)}catch(se){throw wt(be,se),se}return Ke instanceof Promise?Ke.then(se=>(wt(we,se),se)).catch(se=>(wt(be,se),Promise.reject(se))):(wt(we,Ke),Ke)}}const z={_p:r,$id:e,$onAction:ri.bind(null,h),$patch:T,$reset:y,$subscribe(U,V={}){const ee=ri(m,U,V.detached,()=>we()),we=o.run(()=>It(()=>r.state.value[e],be=>{(V.flush==="sync"?d:u)&&U({storeId:e,type:Kt.direct,events:k},be)},ze({},l,V)));return ee},$dispose:E},D=Vn(ze({},z));r._s.set(e,D);const ne=r._e.run(()=>(o=ji(),o.run(()=>t())));for(const U in ne){const V=ne[U];if(re(V)&&!Wf(V)||tt(V))i||(N&&Yf(V)&&(re(V)?V.value=N[U]:Pr(V,N[U])),r.state.value[e][U]=V);else if(typeof V=="function"){const ee=M(U,V);ne[U]=ee,s.actions[U]=V}}return ze(D,ne),ze(G(D),ne),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:U=>{T(V=>{ze(V,U)})}}),r._p.forEach(U=>{ze(D,o.run(()=>U({store:D,app:r._a,pinia:r,options:s})))}),N&&i&&n.hydrate&&n.hydrate(D.$state,N),u=!0,d=!0,D}function Kf(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const u=Po();return s=s||u&&bn($o),s&&Kn(s),s=Mo,s._s.has(r)||(i?Fo(r,t,a,s):Gf(r,a,s)),s._s.get(r)}return o.$id=r,o}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ai(Object(n),!0).forEach(function(r){Jf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function In(e){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function qf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xf(e,t,n){return t&&ii(e.prototype,t),n&&ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return Qf(e)||tc(e,t)||Lo(e,t)||rc()}function qn(e){return Zf(e)||ec(e)||Lo(e)||nc()}function Zf(e){if(Array.isArray(e))return Ir(e)}function Qf(e){if(Array.isArray(e))return e}function ec(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Lo(e,t){if(!!e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oi=function(){},da={},jo={},Do=null,zo={mark:oi,measure:oi};try{typeof window<"u"&&(da=window),typeof document<"u"&&(jo=document),typeof MutationObserver<"u"&&(Do=MutationObserver),typeof performance<"u"&&(zo=performance)}catch{}var ac=da.navigator||{},si=ac.userAgent,li=si===void 0?"":si,at=da,Q=jo,fi=Do,hn=zo;at.document;var Ge=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Uo=~li.indexOf("MSIE")||~li.indexOf("Trident/"),He="___FONT_AWESOME___",Sr=16,Vo="fa",Ho="svg-inline--fa",ht="data-fa-i2svg",Tr="data-fa-pseudo-element",ic="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",ci="fontawesome-i2svg",oc="async",sc=["HTML","HEAD","STYLE","SCRIPT"],Bo=function(){try{return!0}catch{return!1}}(),ha={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Sn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Yo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},lc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},fc=/fa[srltdbk\-\ ]/,Wo="fa-layers-text",cc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,uc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Go=[1,2,3,4,5,6,7,8,9,10],dc=Go.concat([11,12,13,14,15,16,17,18,19,20]),mc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pc=[].concat(qn(Object.keys(Sn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(Go.map(function(e){return"".concat(e,"x")})).concat(dc.map(function(e){return"w-".concat(e)})),Ko=at.FontAwesomeConfig||{};function hc(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function gc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var vc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vc.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=gc(hc(n));a!=null&&(Ko[r]=a)})}var bc={familyPrefix:Vo,styleDefault:"solid",replacementClass:Ho,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},qt=A(A({},bc),Ko);qt.autoReplaceSvg||(qt.observeMutations=!1);var S={};Object.keys(qt).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){qt[e]=n,wn.forEach(function(r){return r(S)})},get:function(){return qt[e]}})});at.FontAwesomeConfig=S;var wn=[];function yc(e){return wn.push(e),function(){wn.splice(wn.indexOf(e),1)}}var Je=Sr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xc(e){if(!(!e||!Ge)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Q.head.insertBefore(t,r),e}}var wc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var e=12,t="";e-- >0;)t+=wc[Math.random()*62|0];return t}function Lt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _c(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(qo(e[n]),'" ')},"").trim()}function Xn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function kc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Oc(e){var t=e.transform,n=e.width,r=n===void 0?Sr:n,a=e.height,i=a===void 0?Sr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Uo?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ac=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xo(){var e=Vo,t=Ho,n=S.familyPrefix,r=S.replacementClass,a=Ac;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ui=!1;function lr(){S.autoAddCss&&!ui&&(xc(Xo()),ui=!0)}var Ec={mixout:function(){return{dom:{css:Xo,insertCss:lr}}},hooks:function(){return{beforeDOMElementCreation:function(){lr()},beforeI2svg:function(){lr()}}}},Be=at||{};Be[He]||(Be[He]={});Be[He].styles||(Be[He].styles={});Be[He].hooks||(Be[He].hooks={});Be[He].shims||(Be[He].shims=[]);var Pe=Be[He],Jo=[],Cc=function e(){Q.removeEventListener("DOMContentLoaded",e),Tn=1,Jo.map(function(t){return t()})},Tn=!1;Ge&&(Tn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Tn||Q.addEventListener("DOMContentLoaded",Cc));function Pc(e){!Ge||(Tn?setTimeout(e,0):Jo.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?qo(e):"<".concat(t," ").concat(_c(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ic=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ic(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Sc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Nr(e){var t=Sc(e);return t.length===1?t[0].toString(16):null}function Tc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=mi(t);typeof Pe.hooks.addPack=="function"&&!a?Pe.hooks.addPack(e,mi(t)):Pe.styles[e]=A(A({},Pe.styles[e]||{}),i),e==="fas"&&Mr("fa",t)}var Xt=Pe.styles,Nc=Pe.shims,Mc=Object.values(Yo),ba=null,Zo={},Qo={},es={},ts={},ns={},$c=Object.keys(ha);function Rc(e){return~pc.indexOf(e)}function Fc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Rc(a)?a:null}var rs=function(){var t=function(i){return fr(Xt,function(o,s,l){return o[l]=fr(s,i,{}),o},{})};Zo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Qo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ns=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Xt||S.autoFetchSvg,r=fr(Nc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});es=r.names,ts=r.unicodes,ba=Jn(S.styleDefault)};yc(function(e){ba=Jn(e.styleDefault)});rs();function ya(e,t){return(Zo[e]||{})[t]}function Lc(e,t){return(Qo[e]||{})[t]}function At(e,t){return(ns[e]||{})[t]}function as(e){return es[e]||{prefix:null,iconName:null}}function jc(e){var t=ts[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function Jn(e){var t=ha[e],n=Sn[e]||Sn[t],r=e in Pe.styles?e:null;return n||r||null}function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Fc(S.familyPrefix,s);if(Xt[s]?(s=Mc.includes(s)?lc[s]:s,a=s,o.prefix=s):$c.indexOf(s)>-1?(a=s,o.prefix=Jn(s)):l?o.iconName=l:s!==S.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?as(o.iconName):{},d=At(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Xt.far&&Xt.fas&&!S.autoFetchSvg&&(o.prefix="fas")}return o},xa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=it()||"fas"),i}var Dc=function(){function e(){qf(this,e),this.definitions={}}return Xf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Mr(s,o[s]);var l=Yo[s];l&&Mr(l,o[s]),rs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),pi=[],Et={},St={},zc=Object.keys(St);function Uc(e,t){var n=t.mixoutsTo;return pi=e,Et={},Object.keys(St).forEach(function(r){zc.indexOf(r)===-1&&delete St[r]}),pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),In(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Et[o]||(Et[o]=[]),Et[o].push(i[o])})}r.provides&&r.provides(St)}),n}function $r(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Et[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Et[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return St[e]?St[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(!!t)return t=At(n,t)||t,di(is.definitions,n,t)||di(Pe.styles,n,t)}var is=new Dc,Vc=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,gt("noAuto")},Hc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge?(gt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Pc(function(){Yc({autoReplaceSvgRoot:n}),gt("watch",t)})}},Bc={icon:function(t){if(t===null)return null;if(In(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:At(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Jn(t[0]);return{prefix:r,iconName:At(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.familyPrefix,"-"))>-1||t.match(fc))){var a=Zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:At(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=it();return{prefix:i,iconName:At(i,t)||t}}}},ve={noAuto:Vc,config:S,dom:Hc,parse:Bc,library:is,findIconDefinition:Rr,toHtml:sn},Yc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Pe.styles).length>0||S.autoFetchSvg)&&Ge&&S.autoReplaceSvg&&ve.dom.i2svg({node:r})};function Qn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ge){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Wc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Xn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Gc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,k=h===void 0?!1:h,N=r.found?r:n,j=N.width,T=N.height,y=a==="fak",E=[S.replacementClass,i?"".concat(S.familyPrefix,"-").concat(i):""].filter(function(ee){return m.classes.indexOf(ee)===-1}).filter(function(ee){return ee!==""||!!ee}).concat(m.classes).join(" "),M={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(T)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/T*16*.0625,"em")}:{};k&&(M.attributes[ht]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||on())},children:[l]}),delete M.attributes.title);var D=A(A({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},z),m.styles)}),ne=r.found&&n.found?Ye("generateAbstractMask",D)||{children:[],attributes:{}}:Ye("generateAbstractIcon",D)||{children:[],attributes:{}},U=ne.children,V=ne.attributes;return D.children=U,D.attributes=V,s?Gc(D):Wc(D)}function hi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ht]="");var d=A({},o.styles);va(a)&&(d.transform=Oc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Xn(d);m.length>0&&(u.style=m);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Kc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cr=Pe.styles;function Fr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.familyPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var qc={found:!1,width:512,height:512};function Xc(e,t){!Bo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=it()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=as(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&cr[t]&&cr[t][e]){var o=cr[t][e];return r(Fr(o))}Xc(e,t),r(A(A({},qc),{},{icon:S.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var gi=function(){},jr=S.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:gi,measure:gi},Bt='FA "6.1.1"',Jc=function(t){return jr.mark("".concat(Bt," ").concat(t," begins")),function(){return os(t)}},os=function(t){jr.mark("".concat(Bt," ").concat(t," ends")),jr.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},_a={begin:Jc,end:os},_n=function(){};function vi(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Zc(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function Qc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function eu(){if(S.autoReplaceSvg===!0)return kn.replace;var e=kn[S.autoReplaceSvg];return e||kn.replace}function tu(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function nu(e){return Q.createElement(e)}function ss(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?tu:nu:n;if(typeof e=="string")return Q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ss(o,{ceFn:r}))}),a}function ru(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ss(a),n)}),n.getAttribute(ht)===null&&S.keepOriginalSource){var r=Q.createComment(ru(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(S.replacementClass))return kn.replace(t);var a=new RegExp("".concat(S.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function bi(e){e()}function ls(e,t){var n=typeof t=="function"?t:_n;if(e.length===0)n();else{var r=bi;S.mutateApproach===oc&&(r=at.requestAnimationFrame||bi),r(function(){var a=eu(),i=_a.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function fs(){ka=!0}function Dr(){ka=!1}var Nn=null;function yi(e){if(!!fi&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?_n:t,r=e.nodeCallback,a=r===void 0?_n:r,i=e.pseudoElementsCallback,o=i===void 0?_n:i,s=e.observeMutationsRoot,l=s===void 0?Q:s;Nn=new fi(function(u){if(!ka){var d=it();Lt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!vi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&vi(m.target)&&~mc.indexOf(m.attributeName))if(m.attributeName==="class"&&Zc(m.target)){var h=Zn(ga(m.target)),k=h.prefix,N=h.iconName;m.target.setAttribute(ma,k||d),N&&m.target.setAttribute(pa,N)}else Qc(m.target)&&a(m.target)})}}),Ge&&Nn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function au(){!Nn||Nn.disconnect()}function iu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Zn(ga(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Lc(a.prefix,e.innerText)||ya(a.prefix,Nr(e.innerText))),a}function su(e){var t=Lt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||on()):(t["aria-hidden"]="true",t.focusable="false")),t}function lu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ou(e),r=n.iconName,a=n.prefix,i=n.rest,o=su(e),s=$r("parseNodeAttributes",{},e),l=t.styleParser?iu(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var fu=Pe.styles;function cs(e){var t=S.autoReplaceSvg==="nest"?xi(e,{styleParser:!1}):xi(e);return~t.extra.classes.indexOf(Wo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ge)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(ci,"-").concat(m))},a=function(m){return n.remove("".concat(ci,"-").concat(m))},i=S.autoFetchSvg?Object.keys(ha):Object.keys(fu),o=[".".concat(Wo,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=_a.begin("onTree"),u=s.reduce(function(d,m){try{var h=cs(m);h&&d.push(h)}catch(k){Bo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(h){ls(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function cu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cs(e).then(function(n){n&&ls([n],t)})}function uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Rr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var du=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,h=m===void 0?null:m,k=n.titleId,N=k===void 0?null:k,j=n.classes,T=j===void 0?[]:j,y=n.attributes,E=y===void 0?{}:y,M=n.styles,z=M===void 0?{}:M;if(!!t){var D=t.prefix,ne=t.iconName,U=t.icon;return Qn(A({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(h?E["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(N||on()):(E["aria-hidden"]="true",E.focusable="false")),wa({icons:{main:Fr(U),mask:l?Fr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:ne,transform:A(A({},Fe),a),symbol:o,title:h,maskId:d,titleId:N,extra:{attributes:E,styles:z,classes:T}})})}},mu={mixout:function(){return{icon:uu(du)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wi,n.nodeCallback=cu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Q:r,i=n.callback,o=i===void 0?function(){}:i;return wi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(k,N){Promise.all([Lr(a,s),d.iconName?Lr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var T=ua(j,2),y=T[0],E=T[1];k([n,wa({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Xn(s);l.length>0&&(a.style=l);var u;return va(o)&&(u=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},pu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Qn({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.familyPrefix,"-layers")].concat(qn(i)).join(" ")},children:o}]})}}}},hu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Qn({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Kc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(S.familyPrefix,"-layers-counter")].concat(qn(s))}})})}}}},gu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,k=h===void 0?{}:h;return Qn({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),hi({content:n,transform:A(A({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(S.familyPrefix,"-layers-text")].concat(qn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Uo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,hi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},vu=new RegExp('"',"ug"),_i=[1105920,1112319];function bu(e){var t=e.replace(vu,""),n=Tc(t,0),r=n>=_i[0]&&n<=_i[1],a=t.length===2?t[0]===t[1]:!1;return{value:Nr(a?t[0]:t),isSecondary:r||a}}function ki(e,t){var n="".concat(ic).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Lt(e.children),o=i.filter(function(ne){return ne.getAttribute(Tr)===t})[0],s=at.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(cc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[l[2].toLowerCase()]:uc[u],k=bu(m),N=k.value,j=k.isSecondary,T=l[0].startsWith("FontAwesome"),y=ya(h,N),E=y;if(T){var M=jc(N);M.iconName&&M.prefix&&(y=M.iconName,h=M.prefix)}if(y&&!j&&(!o||o.getAttribute(ma)!==h||o.getAttribute(pa)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var z=lu(),D=z.extra;D.attributes[Tr]=t,Lr(y,h).then(function(ne){var U=wa(A(A({},z),{},{icons:{main:ne,mask:xa()},prefix:h,iconName:E,extra:D,watchable:!0})),V=Q.createElement("svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=U.map(function(ee){return sn(ee)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yu(e){return Promise.all([ki(e,"::before"),ki(e,"::after")])}function xu(e){return e.parentNode!==document.head&&!~sc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oi(e){if(!!Ge)return new Promise(function(t,n){var r=Lt(e.querySelectorAll("*")).filter(xu).map(yu),a=_a.begin("searchPseudoElements");fs(),Promise.all(r).then(function(){a(),Dr(),t()}).catch(function(){a(),Dr(),n()})})}var wu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Q:r;S.searchPseudoElements&&Oi(a)}}},Ai=!1,_u={mixout:function(){return{dom:{unwatch:function(){fs(),Ai=!0}}}},hooks:function(){return{bootstrap:function(){yi($r("mutationObserverCallbacks",{}))},noAuto:function(){au()},watch:function(n){var r=n.observeMutationsRoot;Ai?Dr():yi($r("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ei=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ku={mixout:function(){return{parse:{transform:function(n){return Ei(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ei(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:h};return{tag:"g",attributes:A({},k.outer),children:[{tag:"g",attributes:A({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),k.path)}]}]}}}},ur={x:0,y:0,width:"100%",height:"100%"};function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ou(e){return e.tag==="g"?e.children:[e]}var Au={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Zn(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=it()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,h=o.icon,k=kc({transform:l,containerWidth:m,iconWidth:u}),N={tag:"rect",attributes:A(A({},ur),{},{fill:"white"})},j=d.children?{children:d.children.map(Ci)}:{},T={tag:"g",attributes:A({},k.inner),children:[Ci(A({tag:d.tag,attributes:A(A({},d.attributes),k.path)},j))]},y={tag:"g",attributes:A({},k.outer),children:[T]},E="mask-".concat(s||on()),M="clip-".concat(s||on()),z={tag:"mask",attributes:A(A({},ur),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,y]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Ou(h)},z]};return r.push(D,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(E,")")},ur)}),{children:r,attributes:a}}}},Eu={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Cu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Pu=[Ec,mu,pu,hu,gu,wu,_u,ku,Au,Eu,Cu];Uc(Pu,{mixoutsTo:ve});ve.noAuto;var us=ve.config,Iu=ve.library;ve.dom;var Mn=ve.parse;ve.findIconDefinition;ve.toHtml;var Su=ve.icon;ve.layer;var Tu=ve.text;ve.counter;function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Mu(e,t){if(e==null)return{};var n=Nu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function zr(e){return $u(e)||Ru(e)||Fu(e)||Lu()}function $u(e){if(Array.isArray(e))return Ur(e)}function Ru(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fu(e,t){if(!!e){if(typeof e=="string")return Ur(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ur(e,t)}}function Ur(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ds={exports:{}};(function(e){(function(t){var n=function(y,E,M){if(!u(E)||m(E)||h(E)||k(E)||l(E))return E;var z,D=0,ne=0;if(d(E))for(z=[],ne=E.length;D<ne;D++)z.push(n(y,E[D],M));else{z={};for(var U in E)Object.prototype.hasOwnProperty.call(E,U)&&(z[y(U,M)]=n(y,E[U],M))}return z},r=function(y,E){E=E||{};var M=E.separator||"_",z=E.split||/(?=[A-Z])/;return y.split(z).join(M)},a=function(y){return N(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},N=function(y){return y=y-0,y===y},j=function(y,E){var M=E&&"process"in E?E.process:E;return typeof M!="function"?y:function(z,D){return M(z,y,D)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(j(a,E),y)},decamelizeKeys:function(y,E){return n(j(o,E),y,E)},pascalizeKeys:function(y,E){return n(j(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(ju)})(ds);var Du=ds.exports,zu=["class","style"];function Uu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Du.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Oa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Oa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Vu(d);break;case"style":l.style=Uu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Mu(n,zu);return To(e.tag,Ae(Ae(Ae({},t),{},{class:a.class,style:Ae(Ae({},a.style),o)},a.attrs),s),r)}var ms=!1;try{ms=!0}catch{}function Hu(){if(!ms&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Bu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ii(e){if(e&&$n(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Mn.icon)return Mn.icon(e);if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Yu=ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pe(function(){return Ii(t.icon)}),i=pe(function(){return Jt("classes",Bu(t))}),o=pe(function(){return Jt("transform",typeof t.transform=="string"?Mn.transform(t.transform):t.transform)}),s=pe(function(){return Jt("mask",Ii(t.mask))}),l=pe(function(){return Su(a.value,Ae(Ae(Ae(Ae({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});It(l,function(d){if(!d)return Hu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=pe(function(){return l.value?Oa(l.value.abstract[0],{},r):null});return function(){return u.value}}});ia({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=us.familyPrefix,i=pe(function(){return["".concat(a,"-layers")].concat(zr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return To("div",{class:i.value},r.default?r.default():[])}}});ia({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=us.familyPrefix,i=pe(function(){return Jt("classes",[].concat(zr(t.counter?["".concat(a,"-layers-counter")]:[]),zr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=pe(function(){return Jt("transform",typeof t.transform=="string"?Mn.transform(t.transform):t.transform)}),s=pe(function(){var u=Tu(t.value.toString(),Ae(Ae({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=pe(function(){return Oa(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Wu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Iu.add(Wu);const Gu="/assets/default.2422ffbd.gif",Zt=()=>({backgroundColor:"transparent",timing:{duration:2*1e3,iterations:1/0},glitchTimeSpan:{start:.3,end:.7},shake:{velocity:20,amplitudeX:.5,amplitudeY:.5},slices:{count:6,velocity:20,minHeight:.01,maxHeight:.05,hueRotate:!0}}),Rn=(e,t)=>{let n=0;if(e.glitchTimeSpan){const a=e.glitchTimeSpan.start,i=e.glitchTimeSpan.end;if(t<a||t>i)return 0;const o=a+(i-a)/2;t<o?n=(t-a)/(o-a):n=(i-t)/(i-o)}else n=1;return(Math.random()-.5)*2*n},Ku=({minHeight:e,maxHeight:t,minWidth:n,maxWidth:r})=>{const a=Math.floor(Math.random()*((t-e)*100+1))+e*100,i=Math.floor(Math.random()*((r-n)*100+1))+n*100,o=Math.floor(Math.random()*(100-a)),s=Math.floor(Math.random()*(100-i));return{top:o,left:s,height:a,width:i}},qu=({top:e,left:t,height:n,width:r})=>{const a=`${t+r}% ${e}%`,i=`${t+r}% ${e+n}%`,o=`${t}% ${e+n}%`,s=`${t}% ${e}%`;return`polygon(${a}, ${i}, ${o}, ${s})`},Vr=e=>({easing:`steps(${e}, jump-start)`}),Xu=e=>{if(!e.slices)throw new Error("Slices are not enabled");const t=Math.floor(e.slices.velocity*e.timing.duration/1e3)+1,n=[];for(let r=0;r<t;++r){const a=Ku({minHeight:e.slices.minHeight,maxHeight:e.slices.maxHeight,minWidth:1,maxWidth:1}),i=Rn(e,r/t)*30,o={};o.transform=`translate3d(${i}%, 0, 0)`,o.clipPath=qu(a),e.slices.hueRotate&&(o.filter=`hue-rotate(${Math.floor(Rn(e,r/t)*360)}deg)`),n.push(o)}return{steps:n,timing:{...Vr(t),...e.timing}}},Ju=e=>{if(!e.shake)return{steps:[],timing:Vr(1)};const t=Math.floor(e.shake.velocity*e.timing.duration/1e3)+1,n=[];for(let r=0;r<t;++r){const a=Rn(e,r/t)*e.shake.amplitudeX*100,i=Rn(e,r/t)*e.shake.amplitudeY*100,o={};o.transform=`translate3d(${a}%, ${i}%, 0)`,n.push(o)}return{steps:n,timing:{...Vr(t),...e.timing}}},Zu=e=>{const t=[];if(t.push(Ju(e)),e.slices)for(let n=0;n<e.slices.count;++n)t.push(Xu(e));return t},Qu=(e,t)=>{if(t={...Zt(),...t},typeof e=="string"){const r=document.querySelector(e);if(!r)throw new Error(`Could not find element with selector ${e}`);e=r}for(e.style.position="relative",e.style.overflow="hidden";e.firstChild;)e.removeChild(e.firstChild);const n=Zu(t);for(const r of n){const a=document.createElement("div");a.classList.add("layer"),a.style.backgroundColor=t.backgroundColor,a.style.backgroundImage=`url(${t.imageUrl})`,a.style.backgroundRepeat="no-repeat",a.style.backgroundPosition="center",a.style.backgroundSize="contain",a.style.width="100%",a.style.height="100%",a.style.top="0",a.style.left="0",a.style.position="absolute",a.animate(r.steps,r.timing),e.appendChild(a)}},ed={install:Qu},jt=Kf("main",{state:()=>({powerGlitchOptions:{...Zt(),imageUrl:Gu}}),actions:{setOptions(e){this.powerGlitchOptions={...this.powerGlitchOptions,...e}}}}),td={class:"pl-4 text-sm grid grid-cols-12"},nd={class:"col-span-4 flex flex-col justify-center whitespace-nowrap overflow-x-hidden text-ellipsis min-w-0"},rd={class:"col-span-8 flex gap-4 overflow-x-hidden"},ad=["value"],id=W("option",{value:"true"},"Yes",-1),od=W("option",{value:"false"},"No",-1),sd=[id,od],gn={__name:"ToggleGroupOption",props:{modelValue:{required:!0},title:{type:String,required:!0},getDefaultValue:{type:Function,required:!0}},emits:["update:modelValue"],setup(e){return jt(),(t,n)=>(xe(),Re("div",td,[W("div",nd,Fn(e.title),1),W("div",rd,[W("select",{class:"w-20",value:!!e.modelValue,onInput:n[0]||(n[0]=r=>t.$emit("update:modelValue",e.getDefaultValue(r.target.value==="true")))},sd,40,ad)])]))}},ld={class:"pl-4 text-sm grid grid-cols-12"},fd={class:"col-span-4 flex flex-col justify-center whitespace-nowrap overflow-x-hidden text-ellipsis min-w-0"},cd={class:"col-span-8 flex gap-4 overflow-x-hidden"},ud=["placeholder","value"],Si={__name:"StringOption",props:{modelValue:{type:String,required:!0},title:{type:String,required:!0}},emits:["update:modelValue"],setup(e){return jt(),(t,n)=>(xe(),Re("div",ld,[W("div",fd,Fn(e.title),1),W("div",cd,[W("input",{class:"w-full",placeholder:e.title,value:e.modelValue,onInput:n[0]||(n[0]=r=>t.$emit("update:modelValue",r.target.value))},null,40,ud)])]))}},dd={class:"pl-4 text-sm grid grid-cols-12"},md={class:"col-span-4 flex flex-col justify-center whitespace-nowrap overflow-x-hidden text-ellipsis min-w-0"},pd={class:"col-span-8 flex gap-4 overflow-x-hidden"},hd=["value"],gd=W("option",{value:"true"},"Yes",-1),vd=W("option",{value:"false"},"No",-1),bd=[gd,vd],yd={__name:"BooleanOption",props:{modelValue:{type:Boolean,required:!0},title:{type:String,required:!0}},emits:["update:modelValue"],setup(e){return jt(),(t,n)=>(xe(),Re("div",dd,[W("div",md,Fn(e.title),1),W("div",pd,[W("select",{class:"w-20",value:e.modelValue,onInput:n[0]||(n[0]=r=>t.$emit("update:modelValue",r.target.value==="true"))},bd,40,hd)])]))}},xd={class:"pl-4 text-sm grid grid-cols-12"},wd={class:"col-span-4 flex flex-col justify-center whitespace-nowrap overflow-x-hidden text-ellipsis min-w-0"},_d={class:"col-span-8 flex gap-4 overflow-x-hidden"},kd=["value","min","max"],Od=["value","min","max","step"],ke={__name:"NumberOption",props:{modelValue:{type:Number,required:!0},title:{type:String,required:!0},min:{type:Number,required:!0},max:{type:Number,required:!0},step:{type:Number,required:!0},factor:{type:Number,default:1}},emits:["update:modelValue"],setup(e){return jt(),(t,n)=>(xe(),Re("div",xd,[W("div",wd,Fn(e.title),1),W("div",_d,[W("input",{class:"w-20",value:e.modelValue*e.factor,onChange:n[0]||(n[0]=r=>t.$emit("update:modelValue",parseInt(r.target.value)/e.factor)),type:"number",min:e.min*e.factor,max:e.max*e.factor},null,40,kd),W("input",{value:e.modelValue*e.factor,onInput:n[1]||(n[1]=r=>t.$emit("update:modelValue",parseInt(r.target.value)/e.factor)),type:"range",min:e.min*e.factor,max:e.max*e.factor,step:e.step*e.factor},null,40,Od)])]))}},Ad={class:"px-4"},Ed={class:"font-bold text-xl mb-4 flex"},Cd=W("div",{class:"grow"},"PowerGlitch",-1),Pd={title:"Github",target:"_blank",href:"https://github.com/7PH/powerglitch"},Id=W("div",{class:"font-bold mt-6 mb-2 pl-2"},"Global",-1),Sd=W("div",{class:"font-bold mt-6 mb-2 pl-2"},"Timing",-1),Td=W("div",{class:"font-bold mt-6 mb-2 pl-2"},"Glitch Time Span",-1),Nd=W("div",{class:"font-bold mt-6 mb-2 pl-2"},"Shake",-1),Md=W("div",{class:"font-bold mt-6 mb-2 pl-2"},"Slices",-1),$d={__name:"OptionPanel",setup(e){const t=jt();return(n,r)=>{const a=Ll("fa");return xe(),Re("div",Ad,[W("div",Ed,[Cd,W("div",null,[W("a",Pd,[Y(a,{icon:"fa-brands fa-github"})])])]),Id,Y(Si,{class:"mt-1",modelValue:R(t).powerGlitchOptions.imageUrl,"onUpdate:modelValue":r[0]||(r[0]=i=>R(t).powerGlitchOptions.imageUrl=i),title:"Image"},null,8,["modelValue"]),Y(Si,{class:"mt-1",modelValue:R(t).powerGlitchOptions.backgroundColor,"onUpdate:modelValue":r[1]||(r[1]=i=>R(t).powerGlitchOptions.backgroundColor=i),title:"Background color"},null,8,["modelValue"]),Sd,Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.timing.duration,"onUpdate:modelValue":r[2]||(r[2]=i=>R(t).powerGlitchOptions.timing.duration=i),title:"Loop duration (ms)",min:100,max:1e4,step:100},null,8,["modelValue","title"]),Y(gn,{class:"mt-1",modelValue:R(t).powerGlitchOptions.timing.iterations,"onUpdate:modelValue":r[3]||(r[3]=i=>R(t).powerGlitchOptions.timing.iterations=i),title:"Loop",getDefaultValue:i=>i?1/0:1},null,8,["modelValue","getDefaultValue"]),R(t).powerGlitchOptions.timing.iterations<1/0?(xe(),Eo(ke,{key:0,class:"mt-1",modelValue:R(t).powerGlitchOptions.shake.velocity,"onUpdate:modelValue":r[4]||(r[4]=i=>R(t).powerGlitchOptions.shake.velocity=i),title:"Velocity (steps/s)",min:1,max:60,step:1},null,8,["modelValue","title"])):pn("",!0),Td,Y(gn,{modelValue:R(t).powerGlitchOptions.glitchTimeSpan,"onUpdate:modelValue":r[5]||(r[5]=i=>R(t).powerGlitchOptions.glitchTimeSpan=i),title:"Enabled",getDefaultValue:i=>i?R(Zt)().glitchTimeSpan:!1},null,8,["modelValue","getDefaultValue"]),R(t).powerGlitchOptions.glitchTimeSpan?(xe(),Re(ye,{key:1},[Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.glitchTimeSpan.start,"onUpdate:modelValue":r[6]||(r[6]=i=>R(t).powerGlitchOptions.glitchTimeSpan.start=i),title:"Start time (%)",min:0,max:1,step:.01,factor:100},null,8,["modelValue","title","min","max","step"]),Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.glitchTimeSpan.end,"onUpdate:modelValue":r[7]||(r[7]=i=>R(t).powerGlitchOptions.glitchTimeSpan.end=i),title:"End time (%)",min:0,max:1,step:.01,factor:100},null,8,["modelValue","title","min","max","step"])],64)):pn("",!0),Nd,Y(gn,{modelValue:R(t).powerGlitchOptions.shake,"onUpdate:modelValue":r[8]||(r[8]=i=>R(t).powerGlitchOptions.shake=i),title:"Enabled",getDefaultValue:i=>i?R(Zt)().shake:!1},null,8,["modelValue","getDefaultValue"]),R(t).powerGlitchOptions.shake?(xe(),Re(ye,{key:2},[Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.shake.velocity,"onUpdate:modelValue":r[9]||(r[9]=i=>R(t).powerGlitchOptions.shake.velocity=i),title:"Velocity (steps/s)",min:1,max:60,step:1},null,8,["modelValue","title"]),Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.shake.amplitudeX,"onUpdate:modelValue":r[10]||(r[10]=i=>R(t).powerGlitchOptions.shake.amplitudeX=i),title:"X amplitude (%)",min:0,max:2,step:.01,factor:100},null,8,["modelValue","title","min","max","step"]),Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.shake.amplitudeY,"onUpdate:modelValue":r[11]||(r[11]=i=>R(t).powerGlitchOptions.shake.amplitudeY=i),title:"Y amplitude (%)",min:0,max:2,step:.01,factor:100},null,8,["modelValue","title","min","max","step"])],64)):pn("",!0),Md,Y(gn,{modelValue:R(t).powerGlitchOptions.slices,"onUpdate:modelValue":r[12]||(r[12]=i=>R(t).powerGlitchOptions.slices=i),title:"Enabled",getDefaultValue:i=>i?R(Zt)().slices:!1},null,8,["modelValue","getDefaultValue"]),R(t).powerGlitchOptions.slices?(xe(),Re(ye,{key:3},[Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.slices.count,"onUpdate:modelValue":r[13]||(r[13]=i=>R(t).powerGlitchOptions.slices.count=i),title:"Count (slices/step)",min:1,max:60,step:1},null,8,["modelValue","title"]),Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.slices.velocity,"onUpdate:modelValue":r[14]||(r[14]=i=>R(t).powerGlitchOptions.slices.velocity=i),title:"Velocity (steps/s)",min:1,max:60,step:1},null,8,["modelValue","title"]),Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.slices.minHeight,"onUpdate:modelValue":r[15]||(r[15]=i=>R(t).powerGlitchOptions.slices.minHeight=i),title:"Min slice height (%)",min:.01,max:1,step:.01,factor:100},null,8,["modelValue","title","min","max","step"]),Y(ke,{class:"mt-1",modelValue:R(t).powerGlitchOptions.slices.maxHeight,"onUpdate:modelValue":r[16]||(r[16]=i=>R(t).powerGlitchOptions.slices.maxHeight=i),title:"Max slice height (%)",min:.01,max:1,step:.01,factor:100},null,8,["modelValue","title","min","max","step"]),Y(yd,{class:"mt-1",modelValue:R(t).powerGlitchOptions.slices.hueRotate,"onUpdate:modelValue":r[17]||(r[17]=i=>R(t).powerGlitchOptions.slices.hueRotate=i),title:"Hue rotate"},null,8,["modelValue"])],64)):pn("",!0)])}}};const Rd=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Fd={__name:"ImagePreview",setup(e){const t=jt(),n=ra(null),r=()=>{!n.value||ed.install(n.value,t.powerGlitchOptions)};return po(r),It(r),(a,i)=>(xe(),Re("div",null,[W("div",{ref_key:"container",ref:n,class:"glitch"},null,512)]))}},Ld=Rd(Fd,[["__scopeId","data-v-a14c2e49"]]),jd={class:"app h-full grid grid-cols-12"},Dd={class:"col-span-4 border p-4 overflow-y-auto"},zd={class:"col-span-8 flex flex-col"},Ud={class:"grow flex flex-col justify-center"},Vd={__name:"App",setup(e){return(t,n)=>(xe(),Re("div",jd,[W("div",Dd,[Y($d)]),W("div",zd,[W("div",Ud,[Y(Ld,{class:"mx-auto"})])])]))}},Hd=Hf();zf(Vd).use(Hd).component("fa",Yu).mount("#app");
