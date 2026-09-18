import{r as o,R as I,a as pe,b as He,d as Ue}from"./vendor-CQocOPQg.js";var he={exports:{}},X={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=o,We=Symbol.for("react.element"),$e=Symbol.for("react.fragment"),Ke=Object.prototype.hasOwnProperty,Ze=Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0};function fe(e,t,r){var n,a={},s=null,l=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Ke.call(t,n)&&!Xe.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:We,type:e,key:s,ref:l,props:a,_owner:Ze.current}}X.Fragment=$e;X.jsx=fe;X.jsxs=fe;he.exports=X;var m=he.exports;function S(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function le(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function me(...e){return t=>{let r=!1;const n=e.map(a=>{const s=le(a,t);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let a=0;a<n.length;a++){const s=n[a];typeof s=="function"?s():le(e[a],null)}}}}function j(...e){return o.useCallback(me(...e),e)}function ke(e,t=[]){let r=[];function n(s,l){const d=o.createContext(l),y=r.length;r=[...r,l];const c=h=>{var T;const{scope:v,children:C,...b}=h,f=((T=v==null?void 0:v[e])==null?void 0:T[y])||d,p=o.useMemo(()=>b,Object.values(b));return m.jsx(f.Provider,{value:p,children:C})};c.displayName=s+"Provider";function u(h,v){var f;const C=((f=v==null?void 0:v[e])==null?void 0:f[y])||d,b=o.useContext(C);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,u]}const a=()=>{const s=r.map(l=>o.createContext(l));return function(d){const y=(d==null?void 0:d[e])||s;return o.useMemo(()=>({[`__scope${e}`]:{...d,[e]:y}}),[d,y])}};return a.scopeName=e,[n,Ye(a,...t)]}function Ye(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const l=n.reduce((d,{useScope:y,scopeName:c})=>{const h=y(s)[`__scope${c}`];return{...d,...h}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function ee(e){const t=Ge(e),r=o.forwardRef((n,a)=>{const{children:s,...l}=n,d=o.Children.toArray(s),y=d.find(Qe);if(y){const c=y.props.children,u=d.map(h=>h===y?o.Children.count(c)>1?o.Children.only(null):o.isValidElement(c)?c.props.children:null:h);return m.jsx(t,{...l,ref:a,children:o.isValidElement(c)?o.cloneElement(c,void 0,u):null})}return m.jsx(t,{...l,ref:a,children:s})});return r.displayName=`${e}.Slot`,r}function Ge(e){const t=o.forwardRef((r,n)=>{const{children:a,...s}=r;if(o.isValidElement(a)){const l=et(a),d=Je(s,a.props);return a.type!==o.Fragment&&(d.ref=n?me(n,l):l),o.cloneElement(a,d)}return o.Children.count(a)>1?o.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ve=Symbol("radix.slottable");function Ut(e){const t=({children:r})=>m.jsx(m.Fragment,{children:r});return t.displayName=`${e}.Slottable`,t.__radixId=ve,t}function Qe(e){return o.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ve}function Je(e,t){const r={...t};for(const n in t){const a=e[n],s=t[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...d)=>{const y=s(...d);return a(...d),y}:a&&(r[n]=a):n==="style"?r[n]={...a,...s}:n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}function et(e){var n,a;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function tt(e){const t=e+"CollectionProvider",[r,n]=ke(t),[a,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),l=f=>{const{scope:p,children:T}=f,x=I.useRef(null),w=I.useRef(new Map).current;return m.jsx(a,{scope:p,itemMap:w,collectionRef:x,children:T})};l.displayName=t;const d=e+"CollectionSlot",y=ee(d),c=I.forwardRef((f,p)=>{const{scope:T,children:x}=f,w=s(d,T),E=j(p,w.collectionRef);return m.jsx(y,{ref:E,children:x})});c.displayName=d;const u=e+"CollectionItemSlot",h="data-radix-collection-item",v=ee(u),C=I.forwardRef((f,p)=>{const{scope:T,children:x,...w}=f,E=I.useRef(null),P=j(p,E),g=s(u,T);return I.useEffect(()=>(g.itemMap.set(E,{ref:E,...w}),()=>void g.itemMap.delete(E))),m.jsx(v,{[h]:"",ref:P,children:x})});C.displayName=u;function b(f){const p=s(e+"CollectionConsumer",f);return I.useCallback(()=>{const x=p.collectionRef.current;if(!x)return[];const w=Array.from(x.querySelectorAll(`[${h}]`));return Array.from(p.itemMap.values()).sort((g,M)=>w.indexOf(g.ref.current)-w.indexOf(M.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:l,Slot:c,ItemSlot:C},b,n]}var nt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],L=nt.reduce((e,t)=>{const r=ee(`Primitive.${t}`),n=o.forwardRef((a,s)=>{const{asChild:l,...d}=a,y=l?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),m.jsx(y,{...d,ref:s})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function xe(e,t){e&&pe.flushSync(()=>e.dispatchEvent(t))}function F(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function rt(e,t=globalThis==null?void 0:globalThis.document){const r=F(e);o.useEffect(()=>{const n=a=>{a.key==="Escape"&&r(a)};return t.addEventListener("keydown",n,{capture:!0}),()=>t.removeEventListener("keydown",n,{capture:!0})},[r,t])}var at="DismissableLayer",te="dismissableLayer.update",ot="dismissableLayer.pointerDownOutside",st="dismissableLayer.focusOutside",de,we=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Me=o.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:n,onPointerDownOutside:a,onFocusOutside:s,onInteractOutside:l,onDismiss:d,...y}=e,c=o.useContext(we),[u,h]=o.useState(null),v=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,C]=o.useState({}),b=j(t,M=>h(M)),f=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),T=f.indexOf(p),x=u?f.indexOf(u):-1,w=c.layersWithOutsidePointerEventsDisabled.size>0,E=x>=T,P=ct(M=>{const A=M.target,N=[...c.branches].some(D=>D.contains(A));!E||N||(a==null||a(M),l==null||l(M),M.defaultPrevented||d==null||d())},v),g=lt(M=>{const A=M.target;[...c.branches].some(D=>D.contains(A))||(s==null||s(M),l==null||l(M),M.defaultPrevented||d==null||d())},v);return rt(M=>{x===c.layers.size-1&&(n==null||n(M),!M.defaultPrevented&&d&&(M.preventDefault(),d()))},v),o.useEffect(()=>{if(u)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(de=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),ue(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=de)}},[u,v,r,c]),o.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),ue())},[u,c]),o.useEffect(()=>{const M=()=>C({});return document.addEventListener(te,M),()=>document.removeEventListener(te,M)},[]),m.jsx(L.div,{...y,ref:b,style:{pointerEvents:w?E?"auto":"none":void 0,...e.style},onFocusCapture:S(e.onFocusCapture,g.onFocusCapture),onBlurCapture:S(e.onBlurCapture,g.onBlurCapture),onPointerDownCapture:S(e.onPointerDownCapture,P.onPointerDownCapture)})});Me.displayName=at;var it="DismissableLayerBranch",Ee=o.forwardRef((e,t)=>{const r=o.useContext(we),n=o.useRef(null),a=j(t,n);return o.useEffect(()=>{const s=n.current;if(s)return r.branches.add(s),()=>{r.branches.delete(s)}},[r.branches]),m.jsx(L.div,{...e,ref:a})});Ee.displayName=it;function ct(e,t=globalThis==null?void 0:globalThis.document){const r=F(e),n=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{const s=d=>{if(d.target&&!n.current){let y=function(){Ce(ot,r,c,{discrete:!0})};const c={originalEvent:d};d.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=y,t.addEventListener("click",a.current,{once:!0})):y()}else t.removeEventListener("click",a.current);n.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",s),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}function lt(e,t=globalThis==null?void 0:globalThis.document){const r=F(e),n=o.useRef(!1);return o.useEffect(()=>{const a=s=>{s.target&&!n.current&&Ce(st,r,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function ue(){const e=new CustomEvent(te);document.dispatchEvent(e)}function Ce(e,t,r,{discrete:n}){const a=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),n?xe(a,s):a.dispatchEvent(s)}var dt=Me,ut=Ee,H=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{},yt="Portal",Te=o.forwardRef((e,t)=>{var d;const{container:r,...n}=e,[a,s]=o.useState(!1);H(()=>s(!0),[]);const l=r||a&&((d=globalThis==null?void 0:globalThis.document)==null?void 0:d.body);return l?He.createPortal(m.jsx(L.div,{...n,ref:t}),l):null});Te.displayName=yt;function pt(e,t){return o.useReducer((r,n)=>t[r][n]??r,e)}var ge=e=>{const{present:t,children:r}=e,n=ht(t),a=typeof r=="function"?r({present:n.isPresent}):o.Children.only(r),s=j(n.ref,ft(a));return typeof r=="function"||n.isPresent?o.cloneElement(a,{ref:s}):null};ge.displayName="Presence";function ht(e){const[t,r]=o.useState(),n=o.useRef(null),a=o.useRef(e),s=o.useRef("none"),l=e?"mounted":"unmounted",[d,y]=pt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const c=K(n.current);s.current=d==="mounted"?c:"none"},[d]),H(()=>{const c=n.current,u=a.current;if(u!==e){const v=s.current,C=K(c);e?y("MOUNT"):C==="none"||(c==null?void 0:c.display)==="none"?y("UNMOUNT"):y(u&&v!==C?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,y]),H(()=>{if(t){let c;const u=t.ownerDocument.defaultView??window,h=C=>{const f=K(n.current).includes(C.animationName);if(C.target===t&&f&&(y("ANIMATION_END"),!a.current)){const p=t.style.animationFillMode;t.style.animationFillMode="forwards",c=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=p)})}},v=C=>{C.target===t&&(s.current=K(n.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{u.clearTimeout(c),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else y("ANIMATION_END")},[t,y]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:o.useCallback(c=>{n.current=c?getComputedStyle(c):null,r(c)},[])}}function K(e){return(e==null?void 0:e.animationName)||"none"}function ft(e){var n,a;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var mt=Ue[" useInsertionEffect ".trim().toString()]||H;function kt({prop:e,defaultProp:t,onChange:r=()=>{},caller:n}){const[a,s,l]=vt({defaultProp:t,onChange:r}),d=e!==void 0,y=d?e:a;{const u=o.useRef(e!==void 0);o.useEffect(()=>{const h=u.current;h!==d&&console.warn(`${n} is changing from ${h?"controlled":"uncontrolled"} to ${d?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=d},[d,n])}const c=o.useCallback(u=>{var h;if(d){const v=xt(u)?u(e):u;v!==e&&((h=l.current)==null||h.call(l,v))}else s(u)},[d,e,s,l]);return[y,c]}function vt({defaultProp:e,onChange:t}){const[r,n]=o.useState(e),a=o.useRef(r),s=o.useRef(t);return mt(()=>{s.current=t},[t]),o.useEffect(()=>{var l;a.current!==r&&((l=s.current)==null||l.call(s,r),a.current=r)},[r,a]),[r,n,s]}function xt(e){return typeof e=="function"}var wt=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Mt="VisuallyHidden",Y=o.forwardRef((e,t)=>m.jsx(L.span,{...e,ref:t,style:{...wt,...e.style}}));Y.displayName=Mt;var Bt=Y,oe="ToastProvider",[se,Et,Ct]=tt("Toast"),[be,Wt]=ke("Toast",[Ct]),[Tt,G]=be(oe),Pe=e=>{const{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:a="right",swipeThreshold:s=50,children:l}=e,[d,y]=o.useState(null),[c,u]=o.useState(0),h=o.useRef(!1),v=o.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${oe}\`. Expected non-empty \`string\`.`),m.jsx(se.Provider,{scope:t,children:m.jsx(Tt,{scope:t,label:r,duration:n,swipeDirection:a,swipeThreshold:s,toastCount:c,viewport:d,onViewportChange:y,onToastAdd:o.useCallback(()=>u(C=>C+1),[]),onToastRemove:o.useCallback(()=>u(C=>C-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:v,children:l})})};Pe.displayName=oe;var Se="ToastViewport",gt=["F8"],ne="toast.viewportPause",re="toast.viewportResume",Re=o.forwardRef((e,t)=>{const{__scopeToast:r,hotkey:n=gt,label:a="Notifications ({hotkey})",...s}=e,l=G(Se,r),d=Et(r),y=o.useRef(null),c=o.useRef(null),u=o.useRef(null),h=o.useRef(null),v=j(t,h,l.onViewportChange),C=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=l.toastCount>0;o.useEffect(()=>{const p=T=>{var w;n.length!==0&&n.every(E=>T[E]||T.code===E)&&((w=h.current)==null||w.focus())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]),o.useEffect(()=>{const p=y.current,T=h.current;if(b&&p&&T){const x=()=>{if(!l.isClosePausedRef.current){const g=new CustomEvent(ne);T.dispatchEvent(g),l.isClosePausedRef.current=!0}},w=()=>{if(l.isClosePausedRef.current){const g=new CustomEvent(re);T.dispatchEvent(g),l.isClosePausedRef.current=!1}},E=g=>{!p.contains(g.relatedTarget)&&w()},P=()=>{p.contains(document.activeElement)||w()};return p.addEventListener("focusin",x),p.addEventListener("focusout",E),p.addEventListener("pointermove",x),p.addEventListener("pointerleave",P),window.addEventListener("blur",x),window.addEventListener("focus",w),()=>{p.removeEventListener("focusin",x),p.removeEventListener("focusout",E),p.removeEventListener("pointermove",x),p.removeEventListener("pointerleave",P),window.removeEventListener("blur",x),window.removeEventListener("focus",w)}}},[b,l.isClosePausedRef]);const f=o.useCallback(({tabbingDirection:p})=>{const x=d().map(w=>{const E=w.ref.current,P=[E,...Ft(E)];return p==="forwards"?P:P.reverse()});return(p==="forwards"?x.reverse():x).flat()},[d]);return o.useEffect(()=>{const p=h.current;if(p){const T=x=>{var P,g,M;const w=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!w){const A=document.activeElement,N=x.shiftKey;if(x.target===p&&N){(P=c.current)==null||P.focus();return}const _=f({tabbingDirection:N?"backwards":"forwards"}),B=_.findIndex(k=>k===A);J(_.slice(B+1))?x.preventDefault():N?(g=c.current)==null||g.focus():(M=u.current)==null||M.focus()}};return p.addEventListener("keydown",T),()=>p.removeEventListener("keydown",T)}},[d,f]),m.jsxs(ut,{ref:y,role:"region","aria-label":a.replace("{hotkey}",C),tabIndex:-1,style:{pointerEvents:b?void 0:"none"},children:[b&&m.jsx(ae,{ref:c,onFocusFromOutsideViewport:()=>{const p=f({tabbingDirection:"forwards"});J(p)}}),m.jsx(se.Slot,{scope:r,children:m.jsx(L.ol,{tabIndex:-1,...s,ref:v})}),b&&m.jsx(ae,{ref:u,onFocusFromOutsideViewport:()=>{const p=f({tabbingDirection:"backwards"});J(p)}})]})});Re.displayName=Se;var Ae="ToastFocusProxy",ae=o.forwardRef((e,t)=>{const{__scopeToast:r,onFocusFromOutsideViewport:n,...a}=e,s=G(Ae,r);return m.jsx(Y,{"aria-hidden":!0,tabIndex:0,...a,ref:t,style:{position:"fixed"},onFocus:l=>{var c;const d=l.relatedTarget;!((c=s.viewport)!=null&&c.contains(d))&&n()}})});ae.displayName=Ae;var U="Toast",bt="toast.swipeStart",Pt="toast.swipeMove",St="toast.swipeCancel",Rt="toast.swipeEnd",Le=o.forwardRef((e,t)=>{const{forceMount:r,open:n,defaultOpen:a,onOpenChange:s,...l}=e,[d,y]=kt({prop:n,defaultProp:a??!0,onChange:s,caller:U});return m.jsx(ge,{present:r||d,children:m.jsx(Nt,{open:d,...l,ref:t,onClose:()=>y(!1),onPause:F(e.onPause),onResume:F(e.onResume),onSwipeStart:S(e.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:S(e.onSwipeMove,c=>{const{x:u,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:S(e.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:S(e.onSwipeEnd,c=>{const{x:u,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),y(!1)})})})});Le.displayName=U;var[At,Lt]=be(U,{onClose(){}}),Nt=o.forwardRef((e,t)=>{const{__scopeToast:r,type:n="foreground",duration:a,open:s,onClose:l,onEscapeKeyDown:d,onPause:y,onResume:c,onSwipeStart:u,onSwipeMove:h,onSwipeCancel:v,onSwipeEnd:C,...b}=e,f=G(U,r),[p,T]=o.useState(null),x=j(t,k=>T(k)),w=o.useRef(null),E=o.useRef(null),P=a||f.duration,g=o.useRef(0),M=o.useRef(P),A=o.useRef(0),{onToastAdd:N,onToastRemove:D}=f,z=F(()=>{var R;(p==null?void 0:p.contains(document.activeElement))&&((R=f.viewport)==null||R.focus()),l()}),_=o.useCallback(k=>{!k||k===1/0||(window.clearTimeout(A.current),g.current=new Date().getTime(),A.current=window.setTimeout(z,k))},[z]);o.useEffect(()=>{const k=f.viewport;if(k){const R=()=>{_(M.current),c==null||c()},O=()=>{const q=new Date().getTime()-g.current;M.current=M.current-q,window.clearTimeout(A.current),y==null||y()};return k.addEventListener(ne,O),k.addEventListener(re,R),()=>{k.removeEventListener(ne,O),k.removeEventListener(re,R)}}},[f.viewport,P,y,c,_]),o.useEffect(()=>{s&&!f.isClosePausedRef.current&&_(P)},[s,P,f.isClosePausedRef,_]),o.useEffect(()=>(N(),()=>D()),[N,D]);const B=o.useMemo(()=>p?Fe(p):null,[p]);return f.viewport?m.jsxs(m.Fragment,{children:[B&&m.jsx(Ot,{__scopeToast:r,role:"status","aria-live":n==="foreground"?"assertive":"polite","aria-atomic":!0,children:B}),m.jsx(At,{scope:r,onClose:z,children:pe.createPortal(m.jsx(se.ItemSlot,{scope:r,children:m.jsx(dt,{asChild:!0,onEscapeKeyDown:S(d,()=>{f.isFocusedToastEscapeKeyDownRef.current||z(),f.isFocusedToastEscapeKeyDownRef.current=!1}),children:m.jsx(L.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":f.swipeDirection,...b,ref:x,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:S(e.onKeyDown,k=>{k.key==="Escape"&&(d==null||d(k.nativeEvent),k.nativeEvent.defaultPrevented||(f.isFocusedToastEscapeKeyDownRef.current=!0,z()))}),onPointerDown:S(e.onPointerDown,k=>{k.button===0&&(w.current={x:k.clientX,y:k.clientY})}),onPointerMove:S(e.onPointerMove,k=>{if(!w.current)return;const R=k.clientX-w.current.x,O=k.clientY-w.current.y,q=!!E.current,V=["left","right"].includes(f.swipeDirection),W=["left","up"].includes(f.swipeDirection)?Math.min:Math.max,qe=V?W(0,R):0,Ve=V?0:W(0,O),Q=k.pointerType==="touch"?10:2,$={x:qe,y:Ve},ce={originalEvent:k,delta:$};q?(E.current=$,Z(Pt,h,ce,{discrete:!1})):ye($,f.swipeDirection,Q)?(E.current=$,Z(bt,u,ce,{discrete:!1}),k.target.setPointerCapture(k.pointerId)):(Math.abs(R)>Q||Math.abs(O)>Q)&&(w.current=null)}),onPointerUp:S(e.onPointerUp,k=>{const R=E.current,O=k.target;if(O.hasPointerCapture(k.pointerId)&&O.releasePointerCapture(k.pointerId),E.current=null,w.current=null,R){const q=k.currentTarget,V={originalEvent:k,delta:R};ye(R,f.swipeDirection,f.swipeThreshold)?Z(Rt,C,V,{discrete:!0}):Z(St,v,V,{discrete:!0}),q.addEventListener("click",W=>W.preventDefault(),{once:!0})}})})})}),f.viewport)})]}):null}),Ot=e=>{const{__scopeToast:t,children:r,...n}=e,a=G(U,t),[s,l]=o.useState(!1),[d,y]=o.useState(!1);return It(()=>l(!0)),o.useEffect(()=>{const c=window.setTimeout(()=>y(!0),1e3);return()=>window.clearTimeout(c)},[]),d?null:m.jsx(Te,{asChild:!0,children:m.jsx(Y,{...n,children:s&&m.jsxs(m.Fragment,{children:[a.label," ",r]})})})},Dt="ToastTitle",Ne=o.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e;return m.jsx(L.div,{...n,ref:t})});Ne.displayName=Dt;var _t="ToastDescription",Oe=o.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e;return m.jsx(L.div,{...n,ref:t})});Oe.displayName=_t;var De="ToastAction",_e=o.forwardRef((e,t)=>{const{altText:r,...n}=e;return r.trim()?m.jsx(je,{altText:r,asChild:!0,children:m.jsx(ie,{...n,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${De}\`. Expected non-empty \`string\`.`),null)});_e.displayName=De;var Ie="ToastClose",ie=o.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e,a=Lt(Ie,r);return m.jsx(je,{asChild:!0,children:m.jsx(L.button,{type:"button",...n,ref:t,onClick:S(e.onClick,a.onClose)})})});ie.displayName=Ie;var je=o.forwardRef((e,t)=>{const{__scopeToast:r,altText:n,...a}=e;return m.jsx(L.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...a,ref:t})});function Fe(e){const t=[];return Array.from(e.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&t.push(n.textContent),jt(n)){const a=n.ariaHidden||n.hidden||n.style.display==="none",s=n.dataset.radixToastAnnounceExclude==="";if(!a)if(s){const l=n.dataset.radixToastAnnounceAlt;l&&t.push(l)}else t.push(...Fe(n))}}),t}function Z(e,t,r,{discrete:n}){const a=r.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),n?xe(a,s):a.dispatchEvent(s)}var ye=(e,t,r=0)=>{const n=Math.abs(e.x),a=Math.abs(e.y),s=n>a;return t==="left"||t==="right"?s&&n>r:!s&&a>r};function It(e=()=>{}){const t=F(e);H(()=>{let r=0,n=0;return r=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(n)}},[t])}function jt(e){return e.nodeType===e.ELEMENT_NODE}function Ft(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function J(e){const t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}var $t=Pe,Kt=Re,Zt=Le,Xt=Ne,Yt=Oe,Gt=_e,Qt=ie;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ze=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:s,iconNode:l,...d},y)=>o.createElement("svg",{ref:y,...qt,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:ze("lucide",a),...d},[...l.map(([c,u])=>o.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(e,t)=>{const r=o.forwardRef(({className:n,...a},s)=>o.createElement(Vt,{ref:s,iconNode:t,className:ze(`lucide-${zt(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=i("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=i("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=i("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=i("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=i("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=i("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=i("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=i("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=i("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=i("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=i("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=i("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=i("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=i("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=i("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=i("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=i("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=i("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=i("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=i("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=i("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=i("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=i("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=i("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=i("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=i("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=i("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=i("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=i("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=i("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=i("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=i("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=i("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=i("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=i("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=i("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=i("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=i("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=i("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=i("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=i("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=i("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=i("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=i("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=i("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=i("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=i("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=i("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=i("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=i("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=i("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=i("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=i("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=i("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=i("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=i("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=i("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=i("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=i("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=i("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=i("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=i("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=i("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=i("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=i("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=i("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=i("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=i("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=i("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=i("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=i("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=i("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=i("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=i("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=i("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=i("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=i("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=i("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=i("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=i("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=i("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=i("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=i("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=i("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=i("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=i("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=i("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=i("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=i("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function _r(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function Ir(e,t,r,n){function a(s){return s instanceof r?s:new r(function(l){l(s)})}return new(r||(r=Promise))(function(s,l){function d(u){try{c(n.next(u))}catch(h){l(h)}}function y(u){try{c(n.throw(u))}catch(h){l(h)}}function c(u){u.done?s(u.value):a(u.value).then(d,y)}c((n=n.apply(e,t||[])).next())})}export{ar as $,Gt as A,dn as B,Qt as C,Yt as D,Pn as E,An as F,jn as G,Er as H,ln as I,Sr as J,Nr as K,Kn as L,Yn as M,ir as N,un as O,$t as P,mn as Q,Zt as R,mr as S,Xt as T,Rr as U,Kt as V,Lr as W,Or as X,fn as Y,Dr as Z,Ir as _,_r as a,gr as a0,Cr as a1,pr as a2,Dn as a3,Xn as a4,dr as a5,zn as a6,Gn as a7,xr as a8,Bn as a9,tn as aA,kr as aB,an as aC,sn as aD,Vn as aE,ur as aF,En as aG,tr as aH,er as aI,kn as aJ,vn as aK,br as aL,wr as aM,Cn as aN,Zn as aO,rn as aP,Nn as aQ,yn as aR,qn as aS,gn as aa,nn as ab,en as ac,Pr as ad,Rn as ae,yr as af,wn as ag,On as ah,Ar as ai,_n as aj,lr as ak,Hn as al,Fn as am,hn as an,on as ao,Ln as ap,Tn as aq,Mn as ar,nr as as,rr as at,cn as au,Mr as av,xn as aw,bn as ax,or as ay,fr as az,L as b,ke as c,j as d,F as e,S as f,ge as g,Me as h,Bt as i,m as j,Ut as k,Sn as l,Tr as m,Un as n,Jt as o,Wn as p,pn as q,cr as r,sr as s,$n as t,H as u,In as v,vr as w,Jn as x,Qn as y,hr as z};
