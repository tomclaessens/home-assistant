import{A as e,a$ as t,r as i,a7 as a,aa as n,b0 as o,b1 as s,b2 as r,a9 as l,Q as d,S as c,x as u,P as h,b3 as p,a as v,h as m,e as f,i as g,$ as _,z as y,ac as k,ad as b,n as x,b4 as $,aV as w,b5 as C,b6 as A,b7 as I,b8 as E,b9 as z,ba as S,bb as L,bc as T,bd as P,be as O,bf as M,aO as F,bg as B,bh as D,bi as V,bj as N,bk as R,bl as j,bm as q,bn as U,bo as H,bp as G,bq as W,aB as Y,br as K,bs as Z,bt as Q,bu as X,bv as J,ag as ee,bw as te,bx as ie,by as ae,bz as ne,bA as oe,bB as se,bC as re,bD as le,bE as de,bF as ce,bG as ue,bH as he,bI as pe,bJ as ve,bK as me,bL as fe,bM as ge,bN as _e,bO as ye,bP as ke,bQ as be,bR as xe,bS as $e,bT as we,bU as Ce,bV as Ae,bW as Ie,bX as Ee,bY as ze,bZ as Se,b_ as Le,b$ as Te,c0 as Pe,c1 as Oe,c2 as Me,c3 as Fe,c4 as Be,c5 as De,c6 as Ve,c7 as Ne,c8 as Re,c9 as je,ca as qe,cb as Ue,cc as He,cd as Ge,ce as We,cf as Ye,cg as Ke,ch as Ze,ci as Qe,cj as Xe,ck as Je,cl as et,cm as tt,cn as it,co as at,cp as nt,cq as ot,cr as st,cs as rt,aM as lt,ct as dt,cu as ct,cv as ut,cw as ht,cx as pt,cy as vt,cz as mt,cA as ft,cB as gt,cC as _t,cD as yt,cE as kt,cF as bt,cG as xt,cH as $t,cI as wt,cJ as Ct,cK as At,cL as It,cM as Et,cN as zt,cO as St,cP as Lt,cQ as Tt,cR as Pt,cS as Ot,cT as Mt,cU as Ft,cV as Bt,cW as Dt,cX as Vt,cY as Nt,cZ as Rt,c_ as jt,c$ as qt,d0 as Ut,d1 as Ht,d2 as Gt,d3 as Wt,d4 as Yt,d5 as Kt,d6 as Zt,d7 as Qt,d8 as Xt,d9 as Jt,da as ei,db as ti,dc as ii,dd as ai,de as ni,df as oi,dg as si,dh as ri,di as li,dj as di,dk as ci,dl as ui,dm as hi,dn as pi,dp as vi,dq as mi,dr as fi,ds as gi,dt as _i,du as yi,dv as ki,dw as bi,t as xi,O as $i,j as wi,I as Ci,J as Ai,m as Ii,Z as Ei,aQ as zi,dx as Si,dy as Li,dz as Ti,aR as Pi,dA as Oi,_ as Mi,o as Fi,dB as Bi,dC as Di,dD as Vi,dE as Ni,dF as Ri,dG as ji,dH as qi,dI as Ui,dJ as Hi,dK as Gi,dL as Wi,dM as Yi,dN as Ki,dO as Zi,dP as Qi,aZ as Xi,dQ as Ji,dR as ea,U as ta,dS as ia,dT as aa,dU as na,dV as oa,dW as sa,dX as ra,dY as la,dZ as da,G as ca,af as ua}from"./main-150a7578.js";import{d as ha,a as pa}from"./c.d128d0ff.js";import{i as va}from"./c.a3496f8c.js";import"./c.58ca2f44.js";import"./c.c3e3842d.js";import"./c.4ce71a53.js";import{s as ma,a as fa,b as ga}from"./c.bc4530d3.js";import{T as _a,d as ya,e as ka}from"./c.ce7c7300.js";import{b as ba,e as xa}from"./c.be11274c.js";import{g as $a}from"./c.8fa45673.js";import{c as wa,u as Ca}from"./c.743a15a1.js";import"./c.f02a8d43.js";import{c as Aa}from"./c.2222fc71.js";import{a as Ia}from"./c.cd17e526.js";import"./c.4ce2ce58.js";let Ea=!1,za=[],Sa=[];function La(){Ea=!0,requestAnimationFrame((function(){Ea=!1,function(e){for(;e.length;)Ta(e.shift())}(za),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)Ta(e.shift())}(Sa)}))}))}function Ta(e){const t=e[0],i=e[1],a=e[2];try{i.apply(t,a)}catch(e){setTimeout((()=>{throw e}))}}function Pa(e){if(!e||"object"!=typeof e)return e;if("[object Date]"==Object.prototype.toString.call(e))return new Date(e.getTime());if(Array.isArray(e))return e.map(Pa);var t={};return Object.keys(e).forEach((function(i){t[i]=Pa(e[i])})),t}const Oa=(e,t)=>e<t?-1:e>t?1:0,Ma=(e,t)=>Oa(e.toLowerCase(),t.toLowerCase());class Fa extends TypeError{constructor(e,t){let i;const{message:a,...n}=e,{path:o}=e;super(0===o.length?a:"At path: "+o.join(".")+" -- "+a),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>{var a;return null!=(a=i)?a:i=[e,...t()]}}}function Ba(e){return"object"==typeof e&&null!=e}function Da(e){return"string"==typeof e?JSON.stringify(e):""+e}function Va(e,t,i,a){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:n,branch:o}=t,{type:s}=i,{refinement:r,message:l="Expected a value of type `"+s+"`"+(r?" with refinement `"+r+"`":"")+", but received: `"+Da(a)+"`"}=e;return{value:a,type:s,refinement:r,key:n[n.length-1],path:n,branch:o,...e,message:l}}function*Na(e,t,i,a){(function(e){return Ba(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const n of e){const e=Va(n,t,i,a);e&&(yield e)}}function*Ra(e,t,i={}){const{path:a=[],branch:n=[e],coerce:o=!1,mask:s=!1}=i,r={path:a,branch:n};if(o&&(e=t.coercer(e,r),s&&"type"!==t.type&&Ba(t.schema)&&Ba(e)&&!Array.isArray(e)))for(const i in e)void 0===t.schema[i]&&delete e[i];let l=!0;for(const i of t.validator(e,r))l=!1,yield[i,void 0];for(let[i,d,c]of t.entries(e,r)){const t=Ra(d,c,{path:void 0===i?a:[...a,i],branch:void 0===i?n:[...n,d],coerce:o,mask:s});for(const a of t)a[0]?(l=!1,yield[a[0],void 0]):o&&(d=a[1],void 0===i?e=d:e instanceof Map?e.set(i,d):e instanceof Set?e.add(d):Ba(e)&&(e[i]=d))}if(l)for(const i of t.refiner(e,r))l=!1,yield[i,void 0];l&&(yield[void 0,e])}class ja{constructor(e){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:t,schema:i,validator:a,refiner:n,coercer:o=(e=>e),entries:s=function*(){}}=e;this.type=t,this.schema=i,this.entries=s,this.coercer=o,this.validator=a?(e,t)=>Na(a(e,t),t,this,e):()=>[],this.refiner=n?(e,t)=>Na(n(e,t),t,this,e):()=>[]}assert(e){return qa(e,this)}create(e){return function(e,t){const i=Ha(e,t,{coerce:!0});if(i[0])throw i[0];return i[1]}(e,this)}is(e){return Ua(e,this)}mask(e){return function(e,t){const i=Ha(e,t,{coerce:!0,mask:!0});if(i[0])throw i[0];return i[1]}(e,this)}validate(e,t={}){return Ha(e,this,t)}}function qa(e,t){const i=Ha(e,t);if(i[0])throw i[0]}function Ua(e,t){return!Ha(e,t)[0]}function Ha(e,t,i={}){const a=Ra(e,t,i),n=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(a);if(n[0]){const e=new Fa(n[0],(function*(){for(const e of a)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,n[1]]}function Ga(...e){const t="type"===e[0].type,i=e.map((e=>e.schema)),a=Object.assign({},...i);return t?function(e){const t=Object.keys(e);return new ja({type:"type",schema:e,*entries(i){if(Ba(i))for(const a of t)yield[a,i[a],e[a]]},validator:e=>Ba(e)||"Expected an object, but received: "+Da(e)})}(a):Ja(a)}function Wa(e,t){return new ja({type:e,schema:null,validator:t})}function Ya(){return Wa("any",(()=>!0))}function Ka(e){return new ja({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[i,a]of t.entries())yield[i,a,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||"Expected an array value, but received: "+Da(e)})}function Za(){return Wa("boolean",(e=>"boolean"==typeof e))}function Qa(e){const t=Da(e),i=typeof e;return new ja({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?e:null,validator:i=>i===e||"Expected the literal `"+t+"`, but received: "+Da(i)})}function Xa(){return Wa("number",(e=>"number"==typeof e&&!isNaN(e)||"Expected a number, but received: "+Da(e)))}function Ja(e){const t=e?Object.keys(e):[],i=Wa("never",(()=>!1));return new ja({type:"object",schema:e||null,*entries(a){if(e&&Ba(a)){const n=new Set(Object.keys(a));for(const i of t)n.delete(i),yield[i,a[i],e[i]];for(const e of n)yield[e,a[e],i]}},validator:e=>Ba(e)||"Expected an object, but received: "+Da(e),coercer:e=>Ba(e)?{...e}:e})}function en(e){return new ja({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function tn(){return Wa("string",(e=>"string"==typeof e||"Expected a string, but received: "+Da(e)))}function an(e){const t=e.map((e=>e.type)).join(" | ");return new ja({type:"union",schema:null,coercer(t,i){const a=e.find((e=>{const[i]=e.validate(t,{coerce:!0});return!i}))||Wa("unknown",(()=>!0));return a.coercer(t,i)},validator(i,a){const n=[];for(const t of e){const[...e]=Ra(i,t,a),[o]=e;if(!o[0])return[];for(const[t]of e)t&&n.push(t)}return["Expected the value to satisfy a union of `"+t+"`, but received: "+Da(i),...n]}})}const nn=(e,t)=>{if(!(t instanceof Fa))return{warnings:[t.message],errors:void 0};const i=[],a=[];for(const n of t.failures())if(void 0===n.value)i.push(e.localize("ui.errors.config.key_missing","key",n.path.join(".")));else if("never"===n.type)a.push(e.localize("ui.errors.config.key_not_expected","key",n.path.join(".")));else{if("union"===n.type)continue;"enums"===n.type?a.push(e.localize("ui.errors.config.key_wrong_type","key",n.path.join("."),"type_correct",n.message.replace("Expected ","").split(", ")[0],"type_wrong",JSON.stringify(n.value))):a.push(e.localize("ui.errors.config.key_wrong_type","key",n.path.join("."),"type_correct",n.refinement||n.type,"type_wrong",JSON.stringify(n.value)))}return{warnings:a,errors:i}},on=(e,t)=>e.callWS({type:"validate_config",...t}),sn=e=>e.substr(e.indexOf(".")+1),rn=Ja({alias:en(tn()),enabled:en(Za())}),ln=Ja({entity_id:en(an([tn(),Ka(tn())])),device_id:en(an([tn(),Ka(tn())])),area_id:en(an([tn(),Ka(tn())]))});Ga(rn,Ja({service:en(tn()),service_template:en(tn()),entity_id:en(tn()),target:en(ln),data:en(Ja())}));const dn=Ga(rn,Ja({service:Qa("media_player.play_media"),target:en(Ja({entity_id:en(tn())})),entity_id:en(tn()),data:Ja({media_content_id:tn(),media_content_type:tn()}),metadata:Ja()})),cn=Ga(rn,Ja({service:Qa("scene.turn_on"),target:en(Ja({entity_id:en(tn())})),entity_id:en(tn()),metadata:Ja()})),un=(t,i)=>e(t,"hass-notification",i),hn=e=>e.substr(0,e.indexOf(".")),pn=e=>{return t=e.entity_id,void 0===(i=e.attributes).friendly_name?sn(t).replace(/_/g," "):i.friendly_name||"";var t,i};class vn extends HTMLElement{static get version(){return"22.0.15"}}customElements.define("vaadin-material-styles",vn);const mn=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}},fn=[];function gn(e,t,i={}){if(e){const t=customElements.get(e);t&&Object.prototype.hasOwnProperty.call(t,"__finalized")&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)}t=kn(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,i):fn.push({themeFor:e,styles:t,include:i.include,moduleId:i.moduleId})}function _n(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():fn}function yn(e=""){let t=0;return 0===e.indexOf("lumo-")||0===e.indexOf("material-")?t=1:0===e.indexOf("vaadin-")&&(t=2),t}function kn(e=[],i=[]){return e instanceof t?i.push(e):Array.isArray(e)?e.forEach((e=>kn(e,i))):console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),i}function bn(e){const t=[];return e.include&&[].concat(e.include).forEach((e=>{const i=_n().find((t=>t.moduleId===e));i?t.push(...bn(i),...i.styles):console.warn(`Included moduleId ${e} not found in style registry`)}),e.styles),t}function xn(e){const t=e+"-default-theme",i=_n().filter((i=>i.moduleId!==t&&function(e,t){return(e||"").split(" ").some((e=>new RegExp("^"+e.split("*").join(".*")+"$").test(t)))}(i.themeFor,e))).map((e=>({...e,styles:[...bn(e),...e.styles],includePriority:yn(e.moduleId)}))).sort(((e,t)=>t.includePriority-e.includePriority));return i.length>0?i:_n().filter((e=>e.moduleId===t))}const $n=e=>class extends(mn(e)){static finalize(){super.finalize();const e=this.prototype._template;if(!e||e.__themes)return;const t=Object.getPrototypeOf(this.prototype)._template,i=(t?t.__themes:[])||[];e.__themes=[...i,...xn(this.is)];!function(e,t){const i=document.createElement("style");i.innerHTML=e.filter(((t,i)=>i===e.lastIndexOf(t))).map((e=>e.cssText)).join("\n"),t.content.appendChild(i)}(e.__themes.reduce(((e,t)=>[...e,...t.styles]),[]),e)}static finalizeStyles(e){return xn(this.is).reduce(((e,t)=>[...e,...t.styles]),[]).concat(e)}};gn("",i`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: initial;
    --_material-text-field-input-line-opacity: initial;
    --_material-text-field-input-line-hover-opacity: initial;
    --_material-text-field-focused-label-opacity: initial;

    /* Button tweaks */
    --_material-button-raised-background-color: initial;
    --_material-button-outline-color: initial;

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: initial;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: initial;

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  [theme~='dark'] {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  a {
    color: inherit;
  }
`,{moduleId:"material-color-light"});gn("",i`
  :host {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }
`,{moduleId:"material-color-dark"});const wn=i`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);
  }
`,Cn=document.createElement("template");Cn.innerHTML=`<style>${wn.toString().replace(":host","html")}</style>`,document.head.appendChild(Cn.content);const An=i`
  :host {
    /* Font family */
    --material-font-family: 'Roboto', sans-serif;

    /* Font sizes */
    --material-h1-font-size: 6rem;
    --material-h2-font-size: 3.75rem;
    --material-h3-font-size: 3rem;
    --material-h4-font-size: 2.125rem;
    --material-h5-font-size: 1.5rem;
    --material-h6-font-size: 1.25rem;
    --material-body-font-size: 1rem;
    --material-small-font-size: 0.875rem;
    --material-button-font-size: 0.875rem;
    --material-caption-font-size: 0.75rem;

    /* Icon size */
    --material-icon-font-size: 20px;
  }
`;gn("",i`
  body,
  :host {
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    line-height: 1.1;
    margin-top: 1.5em;
  }

  h1 {
    font-size: var(--material-h3-font-size);
    font-weight: 300;
    letter-spacing: -0.015em;
    margin-bottom: 1em;
    text-indent: -0.07em;
  }

  h2 {
    font-size: var(--material-h4-font-size);
    font-weight: 300;
    letter-spacing: -0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.07em;
  }

  h3 {
    font-size: var(--material-h5-font-size);
    font-weight: 400;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h4 {
    font-size: var(--material-h6-font-size);
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h5 {
    font-size: var(--material-body-font-size);
    font-weight: 500;
    margin-bottom: 0.5em;
    text-indent: -0.025em;
  }

  h6 {
    font-size: var(--material-small-font-size);
    font-weight: 500;
    letter-spacing: 0.01em;
    margin-bottom: 0.25em;
    text-indent: -0.025em;
  }

  a,
  b,
  strong {
    font-weight: 500;
  }
`,{moduleId:"material-typography"});const In=document.createElement("template");if(In.innerHTML=`<style>${An.toString().replace(":host","html")}</style>`,document.head.appendChild(In.content),!window.polymerSkipLoadingFontRoboto){const e="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href=e,document.head.appendChild(t)}const En=i`
  /* prettier-ignore */
  :host {
    /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */
    --material-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    --material-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);
  }
`,zn=document.createElement("template");zn.innerHTML=`<style>${En.toString().replace(":host","html")}</style>`,document.head.appendChild(zn.content);const Sn=i`
  :host {
    top: 16px;
    right: 16px;
    /* TODO (@jouni): remove unnecessary multiplication after https://github.com/vaadin/vaadin-overlay/issues/90 is fixed */
    bottom: calc(1px * var(--vaadin-overlay-viewport-bottom) + 16px);
    left: 16px;
  }

  [part='overlay'] {
    background-color: var(--material-background-color);
    border-radius: 4px;
    box-shadow: var(--material-shadow-elevation-4dp);
    color: var(--material-body-text-color);
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    font-weight: 400;
  }

  [part='content'] {
    padding: 8px 0;
  }

  [part='backdrop'] {
    opacity: 0.2;
    animation: 0.2s vaadin-overlay-backdrop-enter;
    will-change: opacity;
  }

  @keyframes vaadin-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }
`;gn("",Sn,{moduleId:"material-overlay"});const Ln=Sn;gn("",Ln,{moduleId:"material-menu-overlay"});gn("vaadin-combo-box-overlay",[Ln,i`
  :host {
    --_vaadin-combo-box-items-container-border-width: 8px 0;
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  [part='overlay'] {
    position: relative;
    overflow: visible;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  [part='content'] {
    padding: 0;
  }

  :host([loading]) [part='loader'] {
    height: 2px;
    position: absolute;
    z-index: 1;
    top: -2px;
    left: 0;
    right: 0;
    background: var(--material-background-color)
      linear-gradient(
        90deg,
        transparent 0%,
        transparent 20%,
        var(--material-primary-color) 20%,
        var(--material-primary-color) 40%,
        transparent 40%,
        transparent 60%,
        var(--material-primary-color) 60%,
        var(--material-primary-color) 80%,
        transparent 80%,
        transparent 100%
      )
      0 0 / 400% 100% repeat-x;
    opacity: 0;
    animation: 3s linear infinite material-combo-box-loader-progress, 0.3s 0.1s both material-combo-box-loader-fade-in;
  }

  [part='loader']::before {
    content: '';
    display: block;
    height: 100%;
    opacity: 0.16;
    background: var(--material-primary-color);
  }

  @keyframes material-combo-box-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes material-combo-box-loader-progress {
    0% {
      background-position: 0 0;
      background-size: 300% 100%;
    }

    33% {
      background-position: -100% 0;
      background-size: 400% 100%;
    }

    67% {
      background-position: -200% 0;
      background-size: 250% 100%;
    }

    100% {
      background-position: -300% 0;
      background-size: 300% 100%;
    }
  }

  /* RTL specific styles */

  @keyframes material-combo-box-loader-progress-rtl {
    0% {
      background-position: 100% 0;
      background-size: 300% 100%;
    }

    33% {
      background-position: 200% 0;
      background-size: 400% 100%;
    }

    67% {
      background-position: 300% 0;
      background-size: 250% 100%;
    }

    100% {
      background-position: 400% 0;
      background-size: 300% 100%;
    }
  }

  :host([loading][dir='rtl']) [part='loader'] {
    animation: 3s linear infinite material-combo-box-loader-progress-rtl,
      0.3s 0.1s both material-combo-box-loader-fade-in;
  }
`],{moduleId:"material-combo-box-overlay"});const Tn=document.createElement("template");Tn.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'material-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADaAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk1xEY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDoAAAX4NWGBxmhlYWQAAAZUAAAAMAAAADZhSa2YaGhlYQAABoQAAAAeAAAAJBGxCLtobXR4AAAGpAAAABMAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMAjcbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAkAAAAMondETCeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBga2WbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAA0HDXt4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UXUgcVxS+Z2ZnZpeq7IT9CbTY2Z24o1m72+zPTB/UFSS2MWssTZRs6doqialmy27bPIghPzQttCxjfEhjfGhoUFLBQoVdKixSkofCEkurwQdBgw1NqeCWFrokVt3b3pnRqm3J/Nw598537v3Od869CBC5uFm2EZkRAgl4kQcOuFm1NJcv3R+kBVpQS/dNdzcilH9w80e0F+8EPsiDAjCkUv485SMIgqd8GxHT3dIc8UYUQnjefINLoGfR88RDDIt2F3lFdwXYeVslBF2BBgjzIR/QLt7FzZ7Kb+7Pn5LfkMnDNhrfP++wjexYnlx6Z9fPtTXGZnAyh5hbiEHIApwFJPpD/OYg5TdNqnAJbpFgiGXgWIbp13AgWQhxllFL49RJFcumVWKVxlWY2cI1buHIdE6gV1S4h2WVOsn0qziMw8Ta0iLBLKFnjPk0qDYrlyArluaIJnpD+UmXaSONbu38IO40Qn+9RPQxo/3oEFLIPG6ORRxrdTqQ0yEoMlJkq+RBkod2Sz6QPFalARRZcFaC02HlKoBjaVFLgemrmVwGr0aPHYuCPZOD4VwG7NG2tihezeRmRq8NPaiPROofDF2D5h373etU+VHcwJkJrJDN4b5cFhc0J7Blc3A9lwVbtG1t7T9+OKfbjK00jr89D1r4umZj9IqWcQtFTUMRivQKLoPinhifQ8LTYhTDwbDIB02TM//HxGB5RiuEp1NeP5DPkwQZ+pLa2GQr0D7kRY3ba/+z8C5lQ7qyAV1Zm6EswXKszelwOgKKrMghySN5TJOPlxfwVEcHHFlYhsLyAhzp6MBTC8uPe+KxtEeSPOlY/Lsds+e15qbqmprqpuaxbYOt6IrjicVFPBHv6opD++IitMe7Nir/7WqYtLDHWTeQieyrXssyN4sqUBWqQy8jVMWKgqaivE/RahBYu02PJRhQJFZ0a9zDIcUCcjikxyu6OUkOCloSWIoMBwNaoHYb+8v8I1wsruKRzro7FzGXNi+l12PV3oPD3aeTZ7uzZeWxaEttLZi68Q+yt0YbvZD69acnUPZHAc50Rr4vfYYvCm4d1Nna1wPv/zYClrdhLf3kQJr5ovts8nT3cI23OgMveFuisfLyUh4OpS5oowe9cuH13h6s/v45LsB7cIWt9ba0xlxo114j9QU80IIpyiytf0xNo11nko90SJiCnj3rdvREEFEbEPfm2eEEF8/+nLxqlHNdJFJHSnt0avTmw9rZmvHUucsDycRtn9/vu51IFpN9x/E31DTTnty7B0jh8V+e+zoQ2oJpHi/6TmhYjRalNZa3CLcqVGuw05XX+Gj3do5cAZ1VWC8x4MlRSI6Tq+6+3pGbmcErl+5FPj0/cPgVfY0BxmZUWqS+N1HqxSk8r2+2RxPpT1pfDQam+q0njl/+6IbB3qjBD1LvNB3GD3EKhqCIy9DfIQrMlQAAeJxjYGRgYABiYWGbw/H8Nl8ZuDkTgCIMNaobGhH0v0zO++wXgFwOBiaQKAAHHgoPeJxjYGRgYL/wr4CBgcuKAQg47zMwMqACAQBc2wOEAAB4nGNgYGDgTCAec1mh8gG9VgYDAAAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHcAlQCYgKwAvwAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2M0Q6CMBRDV2CIOhTf/Ak+am5XIdyw5QoS/l4W4ptN2uYkTVWmdt3VfzXIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs+VHwtgyPaf6B9K/ukk7pjTj4IbKS4jpT9P2JTmtZDa3vn/bB5MvItu1FOJgfTnHVEp9AbKdMX4=) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --material-icons-arrow-downward: "\\ea01";\n      --material-icons-arrow-upward: "\\ea02";\n      --material-icons-calendar: "\\ea03";\n      --material-icons-check: "\\ea04";\n      --material-icons-chevron-left: "\\ea05";\n      --material-icons-chevron-right: "\\ea06";\n      --material-icons-clear: "\\ea07";\n      --material-icons-clock: "\\ea08";\n      --material-icons-dropdown: "\\ea09";\n      --material-icons-error: "\\ea0a";\n      --material-icons-eye: "\\ea0b";\n      --material-icons-eye-disabled: "\\ea0c";\n      --material-icons-play: "\\ea0d";\n      --material-icons-reload: "\\ea0e";\n      --material-icons-upload: "\\ea0f";\n    }\n  </style>\n',document.head.appendChild(Tn.content);const Pn=i`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    min-height: 36px;
    padding: 8px 32px 8px 10px;
    overflow: hidden;
    font-family: var(--material-font-family);
    font-size: var(--material-small-font-size);
    line-height: 24px;
  }

  /* It's the list-box's responsibility to add the focus style */
  :host([focused]) {
    outline: none;
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_material-item-selected-icon-display, none);
    content: '';
    font-family: material-icons;
    font-size: 24px;
    line-height: 1;
    font-weight: 400;
    width: 24px;
    text-align: center;
    margin-right: 10px;
    color: var(--material-secondary-text-color);
    flex: none;
  }

  :host([selected]) [part='checkmark']::before {
    content: var(--material-icons-check);
  }

  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--material-secondary-background-color);
    }

    :host([focused]:not([disabled])) {
      background-color: var(--material-divider-color);
    }
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--material-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding: 8px 10px 8px 32px;
  }

  :host([dir='rtl']) [part='checkmark']::before {
    margin-right: 0;
    margin-left: 10px;
  }
`;gn("vaadin-item",Pn,{moduleId:"material-item"});gn("vaadin-combo-box-item",[Pn,i`
  :host {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    padding: 4px 10px;
    --_material-item-selected-icon-display: block;
  }
`],{moduleId:"material-combo-box-item"});class On{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){const{scrollLeft:a}=i;if("rtl"!==t||!e)return a;switch(e){case"negative":return i.scrollWidth-i.clientWidth+a;case"reverse":return i.scrollWidth-i.clientWidth-a}return a}static setNormalizedScrollLeft(e,t,i,a){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+a;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-a;break;default:i.scrollLeft=a}else i.scrollLeft=a}}const Mn=[];let Fn;new MutationObserver((function(){const e=Dn();Mn.forEach((t=>{Bn(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Bn=function(e,t,i=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=i&&e.removeAttribute("dir")},Dn=function(){return document.documentElement.getAttribute("dir")},Vn=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),Fn||(Fn=On.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Bn(this,Dn(),null))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const a=Dn(),n=i===a&&-1===Mn.indexOf(this),o=!i&&t&&-1===Mn.indexOf(this),s=i!==a&&t===a;n||o?(this.__subscribe(),Bn(this,a,i)):s&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(e,t,i){("dir"!==i||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,i)}_attributeToProperty(e,t,i){"dir"!==e||t?super._attributeToProperty(e,t,i):this.dir=""}__subscribe(e=!0){e?-1===Mn.indexOf(this)&&Mn.push(this):Mn.indexOf(this)>-1&&Mn.splice(Mn.indexOf(this),1)}__getNormalizedScrollLeft(e){return On.getNormalizedScrollLeft(Fn,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return On.setNormalizedScrollLeft(Fn,this.getAttribute("dir")||"ltr",e,t)}};class Nn extends($n(Vn(n))){static get template(){return a`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const e=this._comboBox.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,e)}__rendererOrItemChanged(e,t,i,a,n){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}}customElements.define(Nn.is,Nn);const Rn=e=>e.test(navigator.userAgent),jn=e=>e.test(navigator.platform);Rn(/Android/),Rn(/Chrome/)&&/Google Inc/.test(navigator.vendor),Rn(/Firefox/);const qn=jn(/^iPad/)||jn(/^Mac/)&&navigator.maxTouchPoints>1,Un=jn(/^iPhone/)||qn,Hn=Rn(/^((?!chrome|android).)*safari/i),Gn=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Wn extends($n(Vn(n))){static get template(){return a`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new o(this,(e=>{this._setTemplateFromNodes(e.addedNodes)})),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),Un&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{}))}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter((e=>e.localName&&"template"===e.localName))[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){var i,a,n;this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),i=this,a=()=>{this.focusTrap&&!this.contains(document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)},Ea||La(),Sa.push([i,a,n]),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,a=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",a),delete this[i])};this[i]=a,this.addEventListener("animationend",a)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter((e=>e instanceof Wn&&!e.hasAttribute("closing"))).sort(((e,t)=>e.__zIndex-t.__zIndex||0))}get _last(){return this===Wn.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Wn.__attachedInstances.forEach((e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Wn.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach((e=>{e.parentNode===this.content&&this.content.removeChild(e)})),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=s(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const i=e._templateRoot||(e._templateRoot=e.getRootNode());if(i!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let e=Array.from(i.querySelectorAll("style")).reduce(((e,t)=>e+t.textContent),"");if(e=e.replace(/:host/g,":host-nomatch"),e){const t=document.createElement("style");t.textContent=e,this.$.content.shadowRoot.appendChild(t),this._contentNodes.unshift(t)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,a){e!==t?this.template=void 0:i!==a&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i,a,n,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const s=this._oldOwner!==i||this._oldModel!==a;this._oldModel=a,this._oldOwner=i;const r=this._oldInstanceProps!==n||this._oldTemplate!==e;this._oldInstanceProps=n,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==o;this._oldOpened=o,l&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),e&&r?this._stampOverlayTemplate(e,n):t&&(l||d||s)&&o&&this.requestContentUpdate()}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&e.matches(':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const i=e,a=this._normalizedTabIndex(i);let n,o=a>0;if(a>=0&&t.push(i),n="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children,n)for(let e=0;e<n.length;e++)o=this._collectTabbableNodes(n[e],t)||o;return o}static _isVisible(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)}static _sortByTabIndex(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2),a=this._sortByTabIndex(e.slice(0,i)),n=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(a,n)}static _mergeSortByTabIndex(e,t){const i=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}static _hasLowerTabOrder(e,t){const i=Math.max(e.tabIndex,0),a=Math.max(t.tabIndex,0);return 0===i||0===a?a>i:i>a}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=Wn.__attachedInstances.filter((e=>e!==this)).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(Wn.is,Wn);const Yn={start:"top",end:"bottom"},Kn={start:"left",end:"right"},Zn=e=>class extends e{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(positionTarget, horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened)"]}constructor(){super(),this.__boundUpdatePosition=this._updatePosition.bind(this)}__overlayOpenedChanged(e){if(["scroll","resize"].forEach((t=>{e?window.addEventListener(t,this.__boundUpdatePosition):window.removeEventListener(t,this.__boundUpdatePosition)})),e){const e=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach((t=>{this.__margins[t]=parseInt(e[t],10)}))),this.setAttribute("dir",e.direction),this._updatePosition(),requestAnimationFrame((()=>this._updatePosition()))}}get __isRTL(){return"rtl"===this.getAttribute("dir")}__positionSettingsChanged(){this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const i=this.__shouldAlignStartHorizontally(e,this.__isRTL),a=!this.__isRTL&&i||this.__isRTL&&!i;this.style.alignItems=a?"flex-start":"flex-end";const n=this.getBoundingClientRect(),o=this.__calculatePositionInOneDimension(e,n,this.noVerticalOverlap,Yn,this,t),s=this.__calculatePositionInOneDimension(e,n,this.noHorizontalOverlap,Kn,this,i);Object.assign(this.style,o,s),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!a),this.toggleAttribute("start-aligned",a)}__shouldAlignStartHorizontally(e,t){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const a=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!t&&"start"===this.horizontalAlign||t&&"end"===this.horizontalAlign;return this.__shouldAlignStart(e,i,a,this.__margins,n,this.noHorizontalOverlap,Kn)}__shouldAlignStartVertically(e){const t=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),a="top"===this.verticalAlign;return this.__shouldAlignStart(e,t,i,this.__margins,a,this.noVerticalOverlap,Yn)}__shouldAlignStart(e,t,i,a,n,o,s){const r=i-e[o?s.end:s.start]-a[s.end],l=e[o?s.start:s.end]-a[s.start],d=n?r:l;return n===(d>(n?l:r)||d>t)}__calculatePositionInOneDimension(e,t,i,a,n,o){const s=o?a.start:a.end,r=o?a.end:a.start;return{[s]:parseFloat(n.style[s]||getComputedStyle(n)[s])+(t[o?a.start:a.end]-e[i===o?a.end:a.start])*(o?-1:1)+"px",[r]:""}}};let Qn;gn("vaadin-combo-box-overlay",i`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});class Xn extends(Zn(Wn)){static get is(){return"vaadin-combo-box-overlay"}static get template(){return Qn||(Qn=super.template.cloneNode(!0),Qn.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Qn}connectedCallback(){super.connectedCallback();const e=this.__dataHost,t=e&&e.getRootNode().host,i=t&&t.getAttribute("dir");i&&this.setAttribute("dir",i)}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}_outsideClickListener(e){const t=e.composedPath();t.includes(this.positionTarget)||t.includes(this)||this.close()}}customElements.define(Xn.is,Xn);let Jn=0,eo=0,to=[],io=0,ao=!1,no=document.createTextNode("");new window.MutationObserver((function(){ao=!1;const e=to.length;for(let t=0;t<e;t++){let e=to[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}to.splice(0,e),eo+=e})).observe(no,{characterData:!0});const oo={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},so={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},ro={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},lo={run:e=>(ao||(ao=!0,no.textContent=io++),to.push(e),Jn++),cancel(e){const t=e-eo;if(t>=0){if(!to[t])throw new Error("invalid async handle: "+e);to[t]=null}}};class co{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,uo.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),uo.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof co?e._cancelAsync():e=new co,e.setConfig(t,i),e}}let uo=new Set;const ho=function(){const e=Boolean(uo.size);return uo.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e},po=()=>{let e;do{e=ho()}while(e)},vo=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),mo=vo&&vo[1]>=8,fo={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,a){t<this._scrollBottom&&(e=a),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var a=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+a,this._physicalStart=this._physicalStart+a,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var n=this._getReusables(i);i?(this._physicalTop=n.physicalTop,this._virtualStart=this._virtualStart+n.indexes.length,this._physicalStart=this._physicalStart+n.indexes.length):(this._virtualStart=this._virtualStart-n.indexes.length,this._physicalStart=this._physicalStart-n.indexes.length),this._update(n.indexes,i?null:n.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),lo)}},_getReusables:function(e){var t,i,a,n=[],o=this._hiddenContentSize*this._ratio,s=this._virtualStart,r=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,u=this._scrollPosition,h=this._scrollBottom;for(e?(t=this._physicalStart,i=u-d):(t=this._physicalEnd,i=c-h);i-=a=this._getPhysicalSizeIncrement(t),!(n.length>=l||i<=o);)if(e){if(r+n.length+1>=this._virtualCount)break;if(d+a>=u-this._scrollOffset)break;n.push(t),d+=a,t=(t+1)%l}else{if(s-n.length<=0)break;if(d+this._physicalSize-a<=h)break;n.push(t),d-=a,t=0===t?l-1:t-1}return{indexes:n,physicalTop:d-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var i=t%this._itemsPerRow;i&&t-i<=this._physicalCount&&(t+=this._itemsPerRow),t-=i}var a=t-this._physicalCount,n=Math.round(.5*this._physicalCount);if(!(a<0)){if(a>0){var o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(a));for(var s=0;s<a;s++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+a,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+a),this._update(),this._templateCost=(window.performance.now()-o)/a,n=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===n||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,n)),ro):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,n),lo))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),po(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,so);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some((function(e){return e.addedCount>0||e.removed.length>0}))){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=e.value.indexSplices.some((function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,so)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_iterateItems:function(e,t){var i,a,n,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],a=this._computeVidx(i),null!=(n=e.call(this,i,a)))return n}else{for(i=this._physicalStart,a=this._virtualStart;i<this._physicalCount;i++,a++)if(null!=(n=e.call(this,i,a)))return n;for(i=0;i<this._physicalStart;i++,a++)if(null!=(n=e.call(this,i,a)))return n}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){po();var t=0,i=0,a=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems((function(e,a){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==a&&(this._physicalAverage=Math.round((n*a+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-t)/2;this._iterateItems((function(t,a){var n=a%this._itemsPerRow,o=Math.floor(n*this._itemWidth+i);this._isRTL&&(o*=-1),this.translate3d(o+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(a)&&(e+=this._rowHeight)}))}else{const t=[];this._iterateItems((function(i,a){const n=this._physicalItems[i];this.translate3d(0,e+"px",0,n),e+=this._physicalSizes[i];const o=n.id;o&&t.push(o)})),t.length&&this.setAttribute("aria-owns",t.join(" "))}},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollPosition;!mo&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(po(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,a=0,n=this._hiddenContentSize;i<e&&a<=n;)a+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+a),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),so)},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){var a;this._debouncers=this._debouncers||{},this._debouncers[e]=co.debounce(this._debouncers[e],i,t.bind(this)),a=this._debouncers[e],uo.add(a)}};class go{constructor({createElements:e,updateElement:t,scrollTarget:i,scrollContainer:a,elementsContainer:n,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=t,this.scrollTarget=i,this.scrollContainer=a,this.elementsContainer=n||a,this.reorderElements=o,this._maxPages=1.3,this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(e=>this.__onWheel(e))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}_manageFocus(){}_removeFocusedItem(){}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(e){if("number"!=typeof e||isNaN(e)||0===this.size||!this.scrollTarget.offsetHeight)return;e=this._clamp(e,0,this.size-1);const t=this.__getVisibleElements().length;let i=Math.floor(e/this.size*this._virtualCount);this._virtualCount-i<t?(i=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):i<t?e<1e3?(i=e,this._vidxOffset=0):(i=1e3,this._vidxOffset=e-i):this._vidxOffset=e-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler()}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),po(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(e=0,t=this.size-1){this.__getVisibleElements().forEach((i=>{i.__virtualIndex>=e&&i.__virtualIndex<=t&&this.__updateElement(i,i.__virtualIndex,!0)}))}__updateElement(e,t,i){e.style.minHeight&&(e.style.minHeight=""),this.__preventElementUpdates||e.__lastUpdatedIndex===t&&!i||(this.updateElement(e,t),e.__lastUpdatedIndex=t),0===e.offsetHeight&&(e.style.minHeight="200px")}__getIndexScrollOffset(e){const t=this.__getVisibleElements().find((t=>t.__virtualIndex===e));return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}set size(e){if(e===this.size)return;let t,i;if(this.__preventElementUpdates=!0,e>0&&(t=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(t)),this.__size=e,po(),this._itemsChanged({path:"items"}),po(),e>0){t=Math.min(t,e-1),this.scrollToIndex(t);const a=this.__getIndexScrollOffset(t);void 0!==i&&void 0!==a&&(this._scrollTop+=i-a)}this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this.__preventElementUpdates=!1,this._resizeHandler(),po()}get size(){return this.__size}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const t=this.createElements(e),i=document.createDocumentFragment();return t.forEach((e=>{e.style.position="absolute",i.appendChild(e),this.__resizeObserver.observe(e)})),this.elementsContainer.appendChild(i),t}_assignModels(e){this._iterateItems(((e,t)=>{const i=this._physicalItems[e];i.hidden=t>=this.size,i.hidden?delete i.__lastUpdatedIndex:(i.__virtualIndex=t+(this._vidxOffset||0),this.__updateElement(i,i.__virtualIndex))}),e)}_isClientFull(){return setTimeout((()=>this.__clientFull=!0)),this.__clientFull||super._isClientFull()}translate3d(e,t,i,a){a.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0)),super._scrollHandler(),this.reorderElements&&(this.__scrollReorderDebouncer=co.debounce(this.__scrollReorderDebouncer,oo.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame)return this._deltaYAcc+=t,void e.preventDefault();t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=co.debounce(this.__debouncerWheelAnimationFrame,so,(()=>this._wheelAnimationFrame=!1));const i=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=co.debounce(this._debouncerIgnoreNewWheel,oo.after(this.timeouts.IGNORE_WHEEL),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(e,t,i){return e!==this.scrollTarget&&e!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((e=>!e.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),i=t.find((e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement)))||t[0];if(!i)return;const a=i.__virtualIndex-e,n=t.indexOf(i)-a;if(n>0)for(let e=0;e<n;e++)this.elementsContainer.appendChild(t[e]);else if(n<0)for(let e=t.length+n;e<t.length;e++)this.elementsContainer.insertBefore(t[e],t[0]);if(Hn){const{transform:e}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>this.scrollTarget.style.transform=e))}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else{if(this.__skipNextVirtualIndexAdjust)return void(this.__skipNextVirtualIndexAdjust=!1);if(Math.abs(e)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),t=e*this.size;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset,t=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const a=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=a,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<a&&(this._vidxOffset+=Math.min(a-this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}}Object.setPrototypeOf(go.prototype,fo);class _o{constructor(e){this.__adapter=new go(e)}set size(e){this.__adapter.size=e}get size(){return this.__adapter.size}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,t=this.size-1){this.__adapter.update(e,t)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}const yo=class{toString(){return""}};class ko extends n{static get is(){return"vaadin-combo-box-scroller"}static get template(){return a`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(e){e&&this.requestContentUpdate()}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",(e=>e.stopPropagation())),this.__patchWheelOverScrolling(),this.__virtualizer=new _o({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let i=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),i=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const a=[...this.children].find((e=>!e.hidden&&e.index===this.__virtualizer.lastVisibleIndex));if(!a||e!==a.index)return;const n=a.getBoundingClientRect(),o=this.getBoundingClientRect(),s=n.bottom-o.bottom+this._viewportTotalPaddingBottom;s>0&&(this.scrollTop+=s)}__getAriaRole(e){return void 0!==e&&"option"}__getAriaSelected(e,t){return this.__isItemFocused(e,t).toString()}__isItemFocused(e,t){return e==t}__isItemSelected(e,t,i){return!(e instanceof yo)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",e.length),this.requestContentUpdate())}__loadingChanged(e){this.__virtualizer&&!e&&setTimeout((()=>this.requestContentUpdate()))}__focusedIndexChanged(e,t){this.__virtualizer&&(e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e))}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map((()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e}))}__updateElement(e,t){const i=this.items[t],a=this.focusedIndex;e.setProperties({item:i,index:this.__requestItemByIndex(i,t),label:this.getItemLabel(i),selected:this.__isItemSelected(i,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(a,t)}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",this.__getAriaRole(t)),e.setAttribute("aria-selected",this.__getAriaSelected(a,t)),e.setAttribute("aria-posinset",t+1),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme")}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",(e=>{const t=0===this.scrollTop,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||i&&e.deltaY>0)&&e.preventDefault()}))}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map((e=>parseInt(e,10))).reduce(((e,t)=>e+t))}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(e,t){return e instanceof yo&&void 0!==t&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}_visibleItemsCount(){this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex);return this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(ko.is,ko);class bo extends n{static get is(){return"vaadin-combo-box-dropdown"}static get template(){return a`
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{opened:Boolean,positionTarget:{type:Object,observer:"_positionTargetChanged"},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0},theme:String,_selectedItem:{type:Object},_items:{type:Array},_focusedIndex:{type:Number,value:-1},focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_scroller:Object,_itemIdPath:String,_overlayOpened:{type:Boolean,observer:"_openedChanged"}}}static get observers(){return["_openedOrItemsChanged(opened, _items, loading)","__updateScroller(_scroller, _items, opened, loading, _selectedItem, _itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super();const e=bo._uniqueId=1+bo._uniqueId||0;this.scrollerId=`${this.localName}-scroller-${e}`}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-dropdown","");const e=this.$.overlay,t=`${this.__hostTagName}-scroller`;e.renderer=e=>{if(!e.firstChild){const i=document.createElement(t);e.appendChild(i)}},e.requestContentUpdate(),this._scroller=e.content.querySelector(t),this._scroller.id=this.scrollerId,this._scroller.getItemLabel=this.getItemLabel.bind(this),this._scroller.comboBox=this.getRootNode().host,this._scroller.addEventListener("selection-changed",(e=>this._forwardScrollerEvent(e))),this._scroller.addEventListener("index-requested",(e=>this._forwardScrollerEvent(e))),e.addEventListener("touchend",(e=>this._fireTouchAction(e))),e.addEventListener("touchmove",(e=>this._fireTouchAction(e))),e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("vaadin-overlay-outside-click",(e=>{e.preventDefault()}))}disconnectedCallback(){super.disconnectedCallback(),this._overlayOpened=!1}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_forwardScrollerEvent(e){this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}_openedChanged(e,t){e?(this._setOverlayWidth(),this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this.__hostTagName}-overlay-max-height`)||"65vh",this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):t&&!this.__emptyItems&&this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}_openedOrItemsChanged(e,t,i){const a=t&&t.length;a||(this.__emptyItems=!0),this._overlayOpened=!(!e||!i&&!a),this.__emptyItems=!1}_getFocusedItem(e){if(e>=0)return this._items[e]}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}getItemLabel(e,t){t=t||this._itemLabelPath;let i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}__updateScroller(e,t,i,a,n,o,s,r,l){e&&e.setProperties({items:i?t:[],opened:i,loading:a,selectedItem:n,itemIdPath:o,focusedIndex:s,renderer:r,theme:l})}_isOverlayHidden(){return!(this.loading||this._items&&this._items.length)}_positionTargetChanged(e){e&&this._setOverlayWidth()}_setOverlayWidth(){if(!this.positionTarget)return;const e=this.positionTarget.clientWidth+"px",t=`${this.__hostTagName}-overlay`,i=getComputedStyle(this).getPropertyValue(`--${t}-width`);this.$.overlay.style.setProperty(`--_${t}-default-width`,e),""===i?this.$.overlay.style.removeProperty(`--${t}-width`):this.$.overlay.style.setProperty(`--${t}-width`,i),this.$.overlay._updatePosition()}}customElements.define(bo.is,bo);const xo=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new yo}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,i){!e||this.loading||!this.filter||t&&this.autoOpenDisabled&&i===this.filter||(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.dropdown.addEventListener("index-requested",(e=>{const t=e.detail.index,i=e.detail.currentScrollerPos,a=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,a,i)&&void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}}))}_dataProviderFilterChanged(){this._shouldFetchData()&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,i){return 0!==i&&e>=i-t&&e<=i+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof yo:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const t={page:e,pageSize:this.pageSize,filter:this.filter},i=(a,n)=>{if(this._pendingRequests[e]===i){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,a.length,...a);else{const e=[];e.splice(t.page*t.pageSize,a.length,...a),this.filteredItems=e}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.opened||this.hasAttribute("focused")||this._commitValue(),this.size=n,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1)}};this._pendingRequests[e]||(this._pendingRequests[e]=i,this.dataProvider(t,i))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.dataProvider=t}))}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this._indexOfValue(t,this.filteredItems);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize),i=Object.keys(this._pendingRequests);for(let a=0;a<i.length;a++){const n=parseInt(i[a]);n>=t&&this._pendingRequests[n]([],e)}}}},$o=r((e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),wo=r((e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",(e=>{this._onKeyDown(e)})),this.addEventListener("keyup",(e=>{this._onKeyUp(e)}))}_onKeyDown(e){}_onKeyUp(e){}}));const Co=r((e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this.inputElement.value=null!=e?e:"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_onInput(e){this.__userInput=e.isTrusted,this.value=e.target.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(""!==e&&null!=e),""===e&&void 0===t||this.__userInput||this._forwardInputValue(e)}})),Ao=e=>class extends(wo(Co($o(e)))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_loadingChanged"},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.autocapitalize="off",e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-expanded",!!this.opened),e.setAttribute("spellcheck","false"),e.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.$.dropdown.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("click",this._boundOnClick),this.$.dropdown.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame((()=>{this.$.dropdown.$.overlay.bringToFront()}))};var t;this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),t=this,window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(t):t.querySelector("template")&&console.warn(`WARNING: <template> inside <${t.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}requestContentUpdate(){this.$.dropdown._scroller&&(this.$.dropdown._scroller.requestContentUpdate(),this._getItemElements().forEach((e=>{e.requestContentUpdate()})))}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_focusedIndexChanged(e,t){void 0!==t&&this._updateActiveDescendant(e)}_updateActiveDescendant(e){const t=this.inputElement;if(!t)return;const i=this._getItemElements().find((t=>t.index===e));i?t.setAttribute("aria-activedescendant",i.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(void 0===t)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),this.hasAttribute("focused")||Gn||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.setAttribute("focus-ring",""));const i=this.inputElement;i&&(i.setAttribute("aria-expanded",!!e),e?i.setAttribute("aria-controls",this.$.dropdown.scrollerId):i.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_handleClearButtonClick(e){e.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onHostClick(e){this.autoOpenDisabled||this.open()}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();this._isClearButton(e)?this._handleClearButtonClick(e):t.indexOf(this._toggleElement)>-1?this.opened?this.close():this.open():this._onHostClick(e),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){40===e.keyCode?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):38===e.keyCode?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):13===e.keyCode?this._onEnter(e):27===e.keyCode&&this._onEscape(e)}_getItemLabel(e){return this.$.dropdown.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._getOverlayItems();e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._getOverlayItems();e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue=this._getItemLabel(this.$.dropdown.focusedItem),this._markAllSelectionRange())}_setSelectionRange(e,t){this.hasAttribute("focused")&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){if(!this.allowCustomValue&&""!==this._inputElementValue&&this._focusedIndex<0)return e.preventDefault(),void e.stopPropagation();this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._clear()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("click",(()=>{Gn&&!this.hasAttribute("focused")&&document.activeElement.blur()})))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame((()=>{this.$.dropdown.adjustScrollPosition(),this._updateActiveDescendant(this._focusedIndex)})),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){const e=this._getOverlayItems();if(e&&this._focusedIndex>-1){const t=e[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=e=>e&&e.toLowerCase&&e.toLowerCase(),t=[...this.filteredItems||[],this.selectedItem].find((t=>e(this._getItemLabel(t))===e(this._inputElementValue)));if(this.allowCustomValue&&!t){const e=this._inputElementValue;this._lastCustomValue=e;const t=new CustomEvent("custom-value-set",{detail:e,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(t),t.defaultPrevented||(this._selectItemForValue(e),this.value=e)}else this.allowCustomValue||this.opened||!t?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(t)}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_onInput(e){this.opened||this._isClearButton(e)||this.autoOpenDisabled||this.open();const t=this._inputElementValue;this.filter===t?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=t}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.$.dropdown._scrollIntoView(0),this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.$.dropdown._selectedItem=e;const t=this._getOverlayItems();this.filteredItems&&t&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){if(this._isValidValue(e)){let t;this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):t=this.selectedItem,!t&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(""!==this.value)}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.items=t}))}_itemsOrPathsChanged(e){if("items"===e.path||"items.splices"===e.path){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);const e=this._indexOfValue(this.value,this.items);this._focusedIndex=e;const t=e>-1&&this.items[e];t&&(this.selectedItem=t)}this.__previousItems=e.value}_filteredItemsChanged(e){if("filteredItems"===e.path||"filteredItems.splices"===e.path){this._setOverlayItems(this.filteredItems);const e=this._indexOfValue(this.value,this.filteredItems);null===this.selectedItem&&e>=0&&this._selectItemForValue(this.value);const t=this._inputElementValue;void 0===t||t===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.$.dropdown.indexOfLabel(this._getItemLabel(this.selectedItem)):this._focusedIndex=this.$.dropdown.indexOfLabel(this.filter)}}_filterItems(e,t){if(!e)return e;const i=e.filter((e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)));return i}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?this.selectedItem=void 0:this.selectedItem=null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-combo-box-item"))}_getOverlayItems(){return this.$.dropdown._items}_setOverlayItems(e){this.$.dropdown.set("_items",e)}_indexOfValue(e,t){return t&&this._isValidValue(e)?t.findIndex((t=>!(t instanceof yo)&&this._getItemValue(t)===e)):-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof yo||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onFocusout(e){if(e.relatedTarget!==this.$.dropdown.$.overlay){if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue)return void delete this._lastCustomValue;this._closeOrCommit()}}else e.composedPath()[0].focus()}_onTouchend(e){this.clearElement&&e.composedPath()[0]===this.clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return super.checkValidity?super.checkValidity():!this.required||!!this.value}};class Io extends(xo(Ao($n(n)))){static get is(){return"vaadin-combo-box-light"}static get template(){return a`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-combo-box-dropdown
        id="dropdown"
        opened="[[opened]]"
        position-target="[[inputElement]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-combo-box-dropdown>
    `}static get properties(){return{attrForValue:{type:String,value:"value"}}}get clearElement(){return this.querySelector(".clear-button")}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button")}connectedCallback(){super.connectedCallback(),this._setInputElement(this.querySelector("vaadin-text-field,.input")),this._revertInputValue()}checkValidity(){return this.inputElement.validate?this.inputElement.validate():super.checkValidity()}get _propertyForValue(){return l(this.attrForValue)}_isClearButton(e){return super._isClearButton(e)||"input"===e.type&&!e.isTrusted||"clear-button"===e.composedPath()[0].getAttribute("part")}_onChange(e){super._onChange(e),this._isClearButton(e)&&this._clear()}}customElements.define(Io.is,Io);const Eo={};class zo extends d{constructor(e){if(super(e),this.previousValue=Eo,e.type!==c.ELEMENT)throw new Error("renderer only supports binding to element")}render(e,t){return u}update(e,[t,i]){var a;const n=this.previousValue===Eo;if(!this.hasChanged(i))return u;this.previousValue=Array.isArray(i)?Array.from(i):i;const o=e.element;if(n){const i=null===(a=e.options)||void 0===a?void 0:a.host;this.addRenderer(o,t,{host:i})}else this.runRenderer(o);return u}hasChanged(e){let t=!0;return Array.isArray(e)?Array.isArray(this.previousValue)&&this.previousValue.length===e.length&&e.every(((e,t)=>e===this.previousValue[t]))&&(t=!1):this.previousValue===e&&(t=!1),t}}const So=h(class extends zo{addRenderer(e,t,i){e.renderer=(e,a,n)=>{p(t.call(i.host,n.item,n,a),e,i)}}runRenderer(e){e.requestContentUpdate()}});gn("vaadin-combo-box-item",i`
    :host {
      padding: 0;
    }
    :host([focused]:not([disabled])) {
      background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12);
    }
    :host([selected]:not([disabled])) {
      background-color: transparent;
      color: var(--mdc-theme-primary);
      --mdc-ripple-color: var(--mdc-theme-primary);
      --mdc-theme-text-primary-on-background: var(--mdc-theme-primary);
    }
    :host([selected]:not([disabled])):before {
      background-color: var(--mdc-theme-primary);
      opacity: 0.12;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    :host([selected][focused]:not([disabled])):before {
      opacity: 0.24;
    }
    :host(:hover:not([disabled])) {
      background-color: transparent;
    }
    [part="content"] {
      width: 100%;
    }
    [part="checkmark"] {
      display: none;
    }
  `),v([x("ha-combo-box")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f()],key:"validationMessage",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[f()],key:"items",value:void 0},{kind:"field",decorators:[f()],key:"filteredItems",value:void 0},{kind:"field",decorators:[f({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:void 0},{kind:"field",decorators:[f({attribute:"item-value-path"})],key:"itemValuePath",value:void 0},{kind:"field",decorators:[f({attribute:"item-label-path"})],key:"itemLabelPath",value:void 0},{kind:"field",decorators:[f({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[f()],key:"renderer",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0,attribute:"opened"})],key:"_opened",value:void 0},{kind:"field",decorators:[g("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"method",key:"open",value:function(){this.updateComplete.then((()=>{var e;null===(e=this._comboBox)||void 0===e||e.open()}))}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e,t;null===(e=this._comboBox)||void 0===e||null===(t=e.inputElement)||void 0===t||t.focus()}))}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e,t,i,a;return _`
      <vaadin-combo-box-light
        .itemValuePath=${this.itemValuePath}
        .itemIdPath=${this.itemIdPath}
        .itemLabelPath=${this.itemLabelPath}
        .items=${this.items}
        .value=${this.value||""}
        .filteredItems=${this.filteredItems}
        .allowCustomValue=${this.allowCustomValue}
        .disabled=${this.disabled}
        .required=${this.required}
        ${i=this.renderer||this._defaultRowRenderer,So(i,a)}
        @opened-changed=${this._openedChanged}
        @filter-changed=${this._filterChanged}
        @value-changed=${this._valueChanged}
        attr-for-value="value"
      >
        <ha-textfield
          .label=${this.label}
          .placeholder=${this.placeholder}
          .disabled=${this.disabled}
          .required=${this.required}
          .validationMessage=${this.validationMessage}
          .errorMessage=${this.errorMessage}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          .suffix=${_`<div style="width: 28px;"></div>`}
          .icon=${this.icon}
          .invalid=${this.invalid}
          .helper=${this.helper}
          helperPersistent
        >
          <slot name="icon" slot="leadingIcon"></slot>
        </ha-textfield>
        ${this.value?_`<ha-svg-icon
              aria-label=${null===(e=this.hass)||void 0===e?void 0:e.localize("ui.components.combo-box.clear")}
              class="clear-button"
              .path=${y}
              @click=${this._clearValue}
            ></ha-svg-icon>`:""}
        <ha-svg-icon
          aria-label=${null===(t=this.hass)||void 0===t?void 0:t.localize("ui.components.combo-box.show")}
          class="toggle-button"
          .path=${this._opened?k:b}
          @click=${this._toggleOpen}
        ></ha-svg-icon>
      </vaadin-combo-box-light>
    `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>_`<mwc-list-item>
      ${this.itemLabelPath?e[this.itemLabelPath]:e}
    </mwc-list-item>`}},{kind:"method",key:"_clearValue",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this._opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(t){setTimeout((()=>{this._opened=t.detail.value}),0),e(this,t.type,t.detail)}},{kind:"method",key:"_filterChanged",value:function(t){e(this,t.type,t.detail,{composed:!1})}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;i!==this.value&&e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
        width: 100%;
      }
      vaadin-combo-box-light {
        position: relative;
      }
      ha-textfield {
        width: 100%;
      }
      ha-textfield > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      ha-svg-icon {
        color: var(--input-dropdown-icon-color);
        position: absolute;
        cursor: pointer;
      }
      .toggle-button {
        right: 12px;
        top: -10px;
        inset-inline-start: initial;
        inset-inline-end: 12px;
        direction: var(--direction);
      }
      :host([opened]) .toggle-button {
        color: var(--primary-color);
      }
      .clear-button {
        --mdc-icon-size: 20px;
        top: -7px;
        right: 36px;
        inset-inline-start: initial;
        inset-inline-end: 36px;
        direction: var(--direction);
      }
    `}}]}}),m);const Lo=e=>hn(e.entity_id),To=i`
  ha-state-icon[data-domain="alert"][data-state="on"],
  ha-state-icon[data-domain="automation"][data-state="on"],
  ha-state-icon[data-domain="binary_sensor"][data-state="on"],
  ha-state-icon[data-domain="calendar"][data-state="on"],
  ha-state-icon[data-domain="camera"][data-state="streaming"],
  ha-state-icon[data-domain="cover"][data-state="open"],
  ha-state-icon[data-domain="device_tracker"][data-state="home"],
  ha-state-icon[data-domain="fan"][data-state="on"],
  ha-state-icon[data-domain="humidifier"][data-state="on"],
  ha-state-icon[data-domain="light"][data-state="on"],
  ha-state-icon[data-domain="input_boolean"][data-state="on"],
  ha-state-icon[data-domain="lock"][data-state="unlocked"],
  ha-state-icon[data-domain="media_player"][data-state="on"],
  ha-state-icon[data-domain="media_player"][data-state="paused"],
  ha-state-icon[data-domain="media_player"][data-state="playing"],
  ha-state-icon[data-domain="remote"][data-state="on"],
  ha-state-icon[data-domain="script"][data-state="on"],
  ha-state-icon[data-domain="sun"][data-state="above_horizon"],
  ha-state-icon[data-domain="switch"][data-state="on"],
  ha-state-icon[data-domain="timer"][data-state="active"],
  ha-state-icon[data-domain="vacuum"][data-state="cleaning"],
  ha-state-icon[data-domain="group"][data-state="on"],
  ha-state-icon[data-domain="group"][data-state="home"],
  ha-state-icon[data-domain="group"][data-state="open"],
  ha-state-icon[data-domain="group"][data-state="locked"],
  ha-state-icon[data-domain="group"][data-state="problem"] {
    color: var(--paper-item-icon-active-color, #fdd835);
  }

  ha-state-icon[data-domain="climate"][data-state="cooling"] {
    color: var(--cool-color, var(--state-climate-cool-color));
  }

  ha-state-icon[data-domain="climate"][data-state="heating"] {
    color: var(--heat-color, var(--state-climate-heat-color));
  }

  ha-state-icon[data-domain="climate"][data-state="drying"] {
    color: var(--dry-color, var(--state-climate-dry-color));
  }

  ha-state-icon[data-domain="alarm_control_panel"] {
    color: var(--alarm-color-armed, var(--label-badge-red));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="disarmed"] {
    color: var(--alarm-color-disarmed, var(--label-badge-green));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="pending"],
  ha-state-icon[data-domain="alarm_control_panel"][data-state="arming"] {
    color: var(--alarm-color-pending, var(--label-badge-yellow));
    animation: pulse 1s infinite;
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="triggered"] {
    color: var(--alarm-color-triggered, var(--label-badge-red));
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ha-state-icon[data-domain="plant"][data-state="problem"],

  /* Color the icon if unavailable */
  ha-state-icon[data-state="unavailable"] {
    color: var(--state-unavailable-color);
  }
`,Po=$,Oo={alert:w,air_quality:C,automation:A,calendar:I,camera:E,climate:z,configurator:S,conversation:L,counter:T,fan:P,google_assistant:O,group:M,homeassistant:F,homekit:B,image_processing:D,input_button:V,input_datetime:N,input_number:R,input_select:j,input_text:q,light:U,mailbox:H,notify:G,number:R,persistent_notification:W,person:Y,plant:K,proximity:Z,remote:Q,scene:X,script:J,select:j,sensor:ee,siren:te,simple_alarm:W,sun:ie,timer:ae,updater:ne,vacuum:oe,water_heater:se,weather:re,zone:le},Mo={apparent_power:de,aqi:C,carbon_dioxide:ce,carbon_monoxide:ue,current:he,date:I,energy:pe,frequency:ve,gas:me,humidity:fe,illuminance:ge,monetary:_e,nitrogen_dioxide:ye,nitrogen_monoxide:ye,nitrous_oxide:ye,ozone:ye,pm1:ye,pm10:ye,pm25:ye,power:de,power_factor:ke,pressure:be,reactive_power:de,signal_strength:xe,sulphur_dioxide:ye,temperature:se,timestamp:$e,volatile_organic_compounds:ye,voltage:ve},Fo=(e,t)=>0!=(e.supported_features&t),Bo=e=>Fo(e,4)&&"number"==typeof e.in_progress,Do=e=>(e=>Bo(e.attributes))(e)||!!e.attributes.in_progress,Vo={10:Nt,20:Rt,30:jt,40:qt,50:Ut,60:Ht,70:Gt,80:Wt,90:Yt,100:_t},No={10:Kt,20:Zt,30:Qt,40:Xt,50:Jt,60:ei,70:ti,80:ii,90:ai,100:yt},Ro=(e,t)=>{const i=Number(e);if(isNaN(i))return"off"===e?_t:"on"===e?Ft:Bt;const a=10*Math.round(i/10);return t&&i>=10?No[a]:t?Dt:i<=5?Vt:Vo[a]},jo=e=>{const t=null==e?void 0:e.attributes.device_class;if(t&&t in Mo)return Mo[t];if("battery"===t)return e?((e,t)=>{const i=e.state,a=t&&"on"===t.state;return Ro(i,a)})(e):_t;const i=null==e?void 0:e.attributes.unit_of_measurement;return"°C"===i||"°F"===i?se:void 0},qo=(e,t,i)=>{const a=void 0!==i?i:null==t?void 0:t.state;switch(e){case"alarm_control_panel":return(e=>{switch(e){case"armed_away":return Te;case"armed_vacation":return Le;case"armed_home":return Se;case"armed_night":return ze;case"armed_custom_bypass":return Ee;case"pending":return Ie;case"triggered":return Ae;case"disarmed":return Ce;default:return we}})(a);case"binary_sensor":return((e,t)=>{const i="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return i?_t:kt;case"battery_charging":return i?_t:yt;case"carbon_monoxide":return i?ft:gt;case"cold":return i?se:mt;case"connectivity":return i?pt:vt;case"door":return i?ut:ht;case"garage_door":return i?dt:ct;case"power":case"plug":return i?We:Ye;case"gas":case"problem":case"safety":case"tamper":return i?rt:lt;case"smoke":return i?ot:st;case"heat":return i?se:nt;case"light":return i?ge:at;case"lock":return i?tt:it;case"moisture":return i?Je:et;case"motion":return i?Qe:Xe;case"occupancy":case"presence":return i?He:Ge;case"opening":return i?Ke:Ze;case"running":return i?qe:Ue;case"sound":return i?Re:je;case"update":return i?Ve:Ne;case"vibration":return i?Be:De;case"window":return i?Me:Fe;default:return i?Pe:Oe}})(a,t);case"button":switch(null==t?void 0:t.attributes.device_class){case"restart":return bi;case"update":return Ne;default:return V}case"cover":return((e,t)=>{const i="closed"!==e;switch(null==t?void 0:t.attributes.device_class){case"garage":switch(e){case"opening":return xt;case"closing":return bt;case"closed":return dt;default:return ct}case"gate":switch(e){case"opening":case"closing":return Mt;case"closed":return Ot;default:return Pt}case"door":return i?ht:ut;case"damper":return i?Lt:Tt;case"shutter":switch(e){case"opening":return xt;case"closing":return bt;case"closed":return St;default:return zt}case"curtain":switch(e){case"opening":return Et;case"closing":return It;case"closed":return At;default:return Ct}case"blind":case"shade":switch(e){case"opening":return xt;case"closing":return bt;case"closed":return wt;default:return $t}case"window":switch(e){case"opening":return xt;case"closing":return bt;case"closed":return Me;default:return Fe}}switch(e){case"opening":return xt;case"closing":return bt;case"closed":return Me;default:return Fe}})(a,t);case"device_tracker":return"router"===(null==t?void 0:t.attributes.source_type)?"home"===a?fi:gi:["bluetooth","bluetooth_le"].includes(null==t?void 0:t.attributes.source_type)?"home"===a?_i:yi:"not_home"===a?ki:Y;case"humidifier":return i&&"off"===i?vi:mi;case"input_boolean":return"on"===a?hi:pi;case"lock":switch(a){case"unlocked":return it;case"jammed":return ui;case"locking":case"unlocking":return ci;default:return tt}case"media_player":return"playing"===a?li:di;case"switch":switch(null==t?void 0:t.attributes.device_class){case"outlet":return"on"===a?Ye:We;case"switch":return"on"===a?si:ri;default:return si}case"sensor":{const e=jo(t);if(e)return e;break}case"input_datetime":if(null==t||!t.attributes.has_date)return $e;if(!t.attributes.has_time)return I;break;case"sun":return"above_horizon"===(null==t?void 0:t.state)?Oo[e]:oi;case"update":return"on"===a?Do(t)?ni:Ne:Ve}if(e in Oo)return Oo[e]},Uo=e=>e?((e,t,i)=>qo(e,t,i)||(console.warn(`Unable to find icon for domain ${e}`),Po))(hn(e.entity_id),e):Po;v([x("ha-state-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[f()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?_`<ha-icon
        .icon=${this.icon||(null===(t=this.state)||void 0===t?void 0:t.attributes.icon)}
      ></ha-icon>`:_`<ha-svg-icon .path=${Uo(this.state)}></ha-svg-icon>`}}]}}),m);let Ho=v(null,(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"stateObj",value:void 0},{kind:"field",decorators:[f()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[f()],key:"overrideImage",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[xi()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return _`<div class="missing">
        <ha-svg-icon .path=${w}></ha-svg-icon>
      </div>`;if(!this._showIcon)return _``;const t=e?Lo(e):void 0;return _`<ha-state-icon
      style=${$i(this._iconStyle)}
      data-domain=${wi(this.stateColor||"light"===t&&!1!==this.stateColor?t:void 0)}
      data-state=${e?(e=>{const t=e.entity_id.split(".")[0];let i=e.state;return"climate"===t&&(i=e.attributes.hvac_action),i})(e):""}
      .icon=${this.overrideIcon}
      .state=${e}
    ></ha-state-icon>`}},{kind:"method",key:"willUpdate",value:function(e){if(Ci(Ai(a.prototype),"willUpdate",this).call(this,e),!e.has("stateObj")&&!e.has("overrideImage")&&!e.has("overrideIcon"))return;const t=this.stateObj,i={},n={backgroundImage:""};if(this._showIcon=!0,t&&void 0===this.overrideImage)if(!t.attributes.entity_picture_local&&!t.attributes.entity_picture||this.overrideIcon){if("on"===t.state&&(!1!==this.stateColor&&t.attributes.rgb_color&&(i.color=`rgb(${t.attributes.rgb_color.join(",")})`),t.attributes.brightness&&!1!==this.stateColor)){const e=t.attributes.brightness;if("number"!=typeof e){const i=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(i)}i.filter=`brightness(${(e+245)/5}%)`}}else{let e=t.attributes.entity_picture_local||t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),n.backgroundImage=`url(${e})`,this._showIcon=!1}else if(this.overrideImage){let e=this.overrideImage;this.hass&&(e=this.hass.hassUrl(e)),n.backgroundImage=`url(${e})`,this._showIcon=!1}this._iconStyle=i,Object.assign(this.style,n)}},{kind:"get",static:!0,key:"styles",value:function(){return[To,i`
        :host {
          position: relative;
          display: inline-block;
          width: 40px;
          color: var(--paper-item-icon-color, #44739e);
          border-radius: 50%;
          height: 40px;
          text-align: center;
          background-size: cover;
          line-height: 40px;
          vertical-align: middle;
          box-sizing: border-box;
        }
        :host(:focus) {
          outline: none;
        }
        :host(:not([icon]):focus) {
          border: 2px solid var(--divider-color);
        }
        :host([icon]:focus) {
          background: var(--divider-color);
        }
        ha-state-icon {
          transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        }
        .missing {
          color: #fce588;
        }
      `]}}]}}),m);customElements.define("state-badge",Ho);const Go=e=>_`<mwc-list-item graphic="avatar" .twoline=${!!e.entity_id}>
    ${e.state?_`<state-badge slot="graphic" .stateObj=${e}></state-badge>`:""}
    <span>${e.friendly_name}</span>
    <span slot="secondary">${e.entity_id}</span>
  </mwc-list-item>`;v([x("ha-entity-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"hideClearIcon",value:()=>!1},{kind:"field",decorators:[xi()],key:"_opened",value:()=>!1},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"open",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.open()}))}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.focus()}))}},{kind:"field",key:"_initedStates",value:()=>!1},{kind:"field",key:"_states",value:()=>[]},{kind:"field",key:"_getStates",value(){return Ii(((e,t,i,a,n,o,s,r,l)=>{let d=[];if(!t)return[];let c=Object.keys(t.states);return c.length?r?(c=c.filter((e=>this.includeEntities.includes(e))),c.map((e=>({...t.states[e],friendly_name:pn(t.states[e])||e}))).sort(((e,t)=>Ma(e.friendly_name,t.friendly_name)))):(l&&(c=c.filter((e=>!l.includes(e)))),i&&(c=c.filter((e=>i.includes(hn(e))))),a&&(c=c.filter((e=>!a.includes(hn(e))))),d=c.map((e=>({...t.states[e],friendly_name:pn(t.states[e])||e}))).sort(((e,t)=>Ma(e.friendly_name,t.friendly_name))),o&&(d=d.filter((e=>e.entity_id===this.value||e.attributes.device_class&&o.includes(e.attributes.device_class)))),s&&(d=d.filter((e=>e.entity_id===this.value||e.attributes.unit_of_measurement&&s.includes(e.attributes.unit_of_measurement)))),n&&(d=d.filter((e=>e.entity_id===this.value||n(e)))),d.length?d:[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),icon:"mdi:magnify"}}]):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),icon:"mdi:magnify"}}]}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!!(e.has("value")||e.has("label")||e.has("disabled"))||!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"willUpdate",value:function(e){(!this._initedStates||e.has("_opened")&&this._opened)&&(this._states=this._getStates(this._opened,this.hass,this.includeDomains,this.excludeDomains,this.entityFilter,this.includeDeviceClasses,this.includeUnitOfMeasurement,this.includeEntities,this.excludeEntities),this._initedStates&&(this.comboBox.filteredItems=this._states),this._initedStates=!0)}},{kind:"method",key:"render",value:function(){return _`
      <ha-combo-box
        item-value-path="entity_id"
        item-label-path="friendly_name"
        .hass=${this.hass}
        .value=${this._value}
        .label=${void 0===this.label?this.hass.localize("ui.components.entity.entity-picker.entity"):this.label}
        .helper=${this.helper}
        .allowCustomValue=${this.allowCustomEntity}
        .filteredItems=${this._states}
        .renderer=${Go}
        .required=${this.required}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
        @filter-changed=${this._filterChanged}
      >
      </ha-combo-box>
    `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.detail.value.toLowerCase();this.comboBox.filteredItems=this._states.filter((e=>e.entity_id.toLowerCase().includes(t)||pn(e).toLowerCase().includes(t)))}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),m);const Wo=["scene"];function Yo(e){return void 0===e||Array.isArray(e)?e:[e]}function Ko(e){return null==e}v([x("ha-automation-action-activate_scene")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"scene.turn_on",target:{entity_id:""},metadata:{}}}},{kind:"method",key:"render",value:function(){let e;var t;"scene"in this.action?e=this.action.scene:e=null===(t=this.action.target)||void 0===t?void 0:t.entity_id;return _`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${e}
        @value-changed=${this._entityPicked}
        .includeDomains=${Wo}
        allow-custom-entity
      ></ha-entity-picker>
    `}},{kind:"method",key:"_entityPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{service:"scene.turn_on",target:{entity_id:t.detail.value},metadata:{}}})}}]}}),m),v([x("ha-automation-action-choose")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{choose:[{conditions:[],sequence:[]}],default:[]}}},{kind:"method",key:"render",value:function(){const e=this.action;return _`
      ${(e.choose?Yo(e.choose):[]).map(((e,t)=>_`<ha-card>
          <ha-icon-button
            .idx=${t}
            @click=${this._removeOption}
            .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.remove_option")}
            .path=${Ei}
          ></ha-icon-button>
          <div class="card-content">
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.option","number",t+1)}:
            </h2>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.conditions")}:
            </h3>
            <ha-automation-condition
              .conditions=${e.conditions}
              .hass=${this.hass}
              .idx=${t}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.sequence")}:
            </h3>
            <ha-form
              .hass=${this.hass}
              .schema=${[{name:"sequence",selector:{action:{}}}]}
              .data=${e}
              .idx=${t}
              @value-changed=${this._actionChanged}
            ></ha-form>
          </div>
        </ha-card>`))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addOption}>
            ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.add_option")}
          </mwc-button>
        </div>
      </ha-card>
      <h2>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.default")}:
      </h2>
      <ha-automation-action
        .actions=${e.default||[]}
        @value-changed=${this._defaultChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation();const i=t.detail.value,a=t.target.idx,n=this.action.choose?[...Yo(this.action.choose)]:[];n[a].conditions=i,e(this,"value-changed",{value:{...this.action,choose:n}})}},{kind:"method",key:"_actionChanged",value:function(t){t.stopPropagation();const i=t.detail.value.sequence,a=t.target.idx,n=this.action.choose?[...Yo(this.action.choose)]:[];n[a].sequence=i,e(this,"value-changed",{value:{...this.action,choose:n}})}},{kind:"method",key:"_addOption",value:function(){const t=this.action.choose?[...Yo(this.action.choose)]:[];t.push({conditions:[],sequence:[]}),e(this,"value-changed",{value:{...this.action,choose:t}})}},{kind:"method",key:"_removeOption",value:function(t){const i=t.currentTarget.idx,a=this.action.choose?[...Yo(this.action.choose)]:[];a.splice(i,1),e(this,"value-changed",{value:{...this.action,choose:a}})}},{kind:"method",key:"_defaultChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,default:i}})}},{kind:"get",static:!0,key:"styles",value:function(){return[zi,i`
        ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        ha-icon-button {
          position: absolute;
          right: 0;
          padding: 4px;
        }
        ha-form::part(root) {
          overflow: visible;
        }
      `]}}]}}),m);var Zo=function(e,t){var i,a="";for(i=0;i<t;i+=1)a+=e;return a},Qo=function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},Xo={isNothing:Ko,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:Ko(e)?[]:[e]},repeat:Zo,isNegativeZero:Qo,extend:function(e,t){var i,a,n,o;if(t)for(i=0,a=(o=Object.keys(t)).length;i<a;i+=1)e[n=o[i]]=t[n];return e}};function Jo(e,t){var i="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),a+" "+i):a}function es(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Jo(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}es.prototype=Object.create(Error.prototype),es.prototype.constructor=es,es.prototype.toString=function(e){return this.name+": "+Jo(this,e)};var ts=es;function is(e,t,i,a,n){var o="",s="",r=Math.floor(n/2)-1;return a-t>r&&(t=a-r+(o=" ... ").length),i-a>r&&(i=a+r-(s=" ...").length),{str:o+e.slice(t,i).replace(/\t/g,"→")+s,pos:a-t+o.length}}function as(e,t){return Xo.repeat(" ",t-e.length)+e}var ns=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var i,a=/\r?\n|\r|\0/g,n=[0],o=[],s=-1;i=a.exec(e.buffer);)o.push(i.index),n.push(i.index+i[0].length),e.position<=i.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var r,l,d="",c=Math.min(e.line+t.linesAfter,o.length).toString().length,u=t.maxLength-(t.indent+c+3);for(r=1;r<=t.linesBefore&&!(s-r<0);r++)l=is(e.buffer,n[s-r],o[s-r],e.position-(n[s]-n[s-r]),u),d=Xo.repeat(" ",t.indent)+as((e.line-r+1).toString(),c)+" | "+l.str+"\n"+d;for(l=is(e.buffer,n[s],o[s],e.position,u),d+=Xo.repeat(" ",t.indent)+as((e.line+1).toString(),c)+" | "+l.str+"\n",d+=Xo.repeat("-",t.indent+c+3+l.pos)+"^\n",r=1;r<=t.linesAfter&&!(s+r>=o.length);r++)l=is(e.buffer,n[s+r],o[s+r],e.position-(n[s]-n[s+r]),u),d+=Xo.repeat(" ",t.indent)+as((e.line+r+1).toString(),c)+" | "+l.str+"\n";return d.replace(/\n$/,"")},os=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ss=["scalar","sequence","mapping"];var rs=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===os.indexOf(t))throw new ts('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(i){e[i].forEach((function(e){t[String(e)]=i}))})),t}(t.styleAliases||null),-1===ss.indexOf(this.kind))throw new ts('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function ls(e,t){var i=[];return e[t].forEach((function(e){var t=i.length;i.forEach((function(i,a){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=a)})),i[t]=e})),i}function ds(e){return this.extend(e)}ds.prototype.extend=function(e){var t=[],i=[];if(e instanceof rs)i.push(e);else if(Array.isArray(e))i=i.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new ts("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof rs))throw new ts("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new ts("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new ts("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),i.forEach((function(e){if(!(e instanceof rs))throw new ts("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var a=Object.create(ds.prototype);return a.implicit=(this.implicit||[]).concat(t),a.explicit=(this.explicit||[]).concat(i),a.compiledImplicit=ls(a,"implicit"),a.compiledExplicit=ls(a,"explicit"),a.compiledTypeMap=function(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function a(e){e.multi?(i.multi[e.kind].push(e),i.multi.fallback.push(e)):i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(a);return i}(a.compiledImplicit,a.compiledExplicit),a};var cs=new ds({explicit:[new rs("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),new rs("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),new rs("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})]});var us=new rs("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var hs=new rs("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function ps(e){return 48<=e&&e<=55}function vs(e){return 48<=e&&e<=57}var ms=new rs("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,a=e.length,n=0,o=!1;if(!a)return!1;if("-"!==(t=e[n])&&"+"!==t||(t=e[++n]),"0"===t){if(n+1===a)return!0;if("b"===(t=e[++n])){for(n++;n<a;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(n++;n<a;n++)if("_"!==(t=e[n])){if(!(48<=(i=e.charCodeAt(n))&&i<=57||65<=i&&i<=70||97<=i&&i<=102))return!1;o=!0}return o&&"_"!==t}if("o"===t){for(n++;n<a;n++)if("_"!==(t=e[n])){if(!ps(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}}if("_"===t)return!1;for(;n<a;n++)if("_"!==(t=e[n])){if(!vs(e.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===t)},construct:function(e){var t,i=e,a=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(a=-1),t=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===t){if("b"===i[1])return a*parseInt(i.slice(2),2);if("x"===i[1])return a*parseInt(i.slice(2),16);if("o"===i[1])return a*parseInt(i.slice(2),8)}return a*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!Xo.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),fs=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var gs=/^[-+]?[0-9]+e/;var _s=new rs("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!fs.test(e)||"_"===e[e.length-1])},construct:function(e){var t,i;return i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||Xo.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Xo.isNegativeZero(e))return"-0.0";return i=e.toString(10),gs.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),ys=cs.extend({implicit:[us,hs,ms,_s]}),ks=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),bs=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var xs=new rs("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==ks.exec(e)||null!==bs.exec(e))},construct:function(e){var t,i,a,n,o,s,r,l,d=0,c=null;if(null===(t=ks.exec(e))&&(t=bs.exec(e)),null===t)throw new Error("Date resolve error");if(i=+t[1],a=+t[2]-1,n=+t[3],!t[4])return new Date(Date.UTC(i,a,n));if(o=+t[4],s=+t[5],r=+t[6],t[7]){for(d=t[7].slice(0,3);d.length<3;)d+="0";d=+d}return t[9]&&(c=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(c=-c)),l=new Date(Date.UTC(i,a,n,o,s,r,d)),c&&l.setTime(l.getTime()-c),l},instanceOf:Date,represent:function(e){return e.toISOString()}});var $s=new rs("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),ws="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var Cs=new rs("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,a=0,n=e.length,o=ws;for(i=0;i<n;i++)if(!((t=o.indexOf(e.charAt(i)))>64)){if(t<0)return!1;a+=6}return a%8==0},construct:function(e){var t,i,a=e.replace(/[\r\n=]/g,""),n=a.length,o=ws,s=0,r=[];for(t=0;t<n;t++)t%4==0&&t&&(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)),s=s<<6|o.indexOf(a.charAt(t));return 0===(i=n%4*6)?(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)):18===i?(r.push(s>>10&255),r.push(s>>2&255)):12===i&&r.push(s>>4&255),new Uint8Array(r)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,i,a="",n=0,o=e.length,s=ws;for(t=0;t<o;t++)t%3==0&&t&&(a+=s[n>>18&63],a+=s[n>>12&63],a+=s[n>>6&63],a+=s[63&n]),n=(n<<8)+e[t];return 0===(i=o%3)?(a+=s[n>>18&63],a+=s[n>>12&63],a+=s[n>>6&63],a+=s[63&n]):2===i?(a+=s[n>>10&63],a+=s[n>>4&63],a+=s[n<<2&63],a+=s[64]):1===i&&(a+=s[n>>2&63],a+=s[n<<4&63],a+=s[64],a+=s[64]),a}}),As=Object.prototype.hasOwnProperty,Is=Object.prototype.toString;var Es=new rs("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,a,n,o,s=[],r=e;for(t=0,i=r.length;t<i;t+=1){if(a=r[t],o=!1,"[object Object]"!==Is.call(a))return!1;for(n in a)if(As.call(a,n)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==s.indexOf(n))return!1;s.push(n)}return!0},construct:function(e){return null!==e?e:[]}}),zs=Object.prototype.toString;var Ss=new rs("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,a,n,o,s=e;for(o=new Array(s.length),t=0,i=s.length;t<i;t+=1){if(a=s[t],"[object Object]"!==zs.call(a))return!1;if(1!==(n=Object.keys(a)).length)return!1;o[t]=[n[0],a[n[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,a,n,o,s=e;for(o=new Array(s.length),t=0,i=s.length;t<i;t+=1)a=s[t],n=Object.keys(a),o[t]=[n[0],a[n[0]]];return o}}),Ls=Object.prototype.hasOwnProperty;var Ts=new rs("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(Ls.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),Ps=ys.extend({implicit:[xs,$s],explicit:[Cs,Es,Ss,Ts]}),Os=Object.prototype.hasOwnProperty,Ms=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Fs=/[\x85\u2028\u2029]/,Bs=/[,\[\]\{\}]/,Ds=/^(?:!|!!|![a-z\-]+!)$/i,Vs=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ns(e){return Object.prototype.toString.call(e)}function Rs(e){return 10===e||13===e}function js(e){return 9===e||32===e}function qs(e){return 9===e||32===e||10===e||13===e}function Us(e){return 44===e||91===e||93===e||123===e||125===e}function Hs(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function Gs(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function Ws(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var Ys=new Array(256),Ks=new Array(256),Zs=0;Zs<256;Zs++)Ys[Zs]=Gs(Zs)?1:0,Ks[Zs]=Gs(Zs);function Qs(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||Ps,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Xs(e,t){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=ns(i),new ts(t,i)}function Js(e,t){throw Xs(e,t)}function er(e,t){e.onWarning&&e.onWarning.call(null,Xs(e,t))}var tr={YAML:function(e,t,i){var a,n,o;null!==e.version&&Js(e,"duplication of %YAML directive"),1!==i.length&&Js(e,"YAML directive accepts exactly one argument"),null===(a=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&Js(e,"ill-formed argument of the YAML directive"),n=parseInt(a[1],10),o=parseInt(a[2],10),1!==n&&Js(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&er(e,"unsupported YAML version of the document")},TAG:function(e,t,i){var a,n;2!==i.length&&Js(e,"TAG directive accepts exactly two arguments"),a=i[0],n=i[1],Ds.test(a)||Js(e,"ill-formed tag handle (first argument) of the TAG directive"),Os.call(e.tagMap,a)&&Js(e,'there is a previously declared suffix for "'+a+'" tag handle'),Vs.test(n)||Js(e,"ill-formed tag prefix (second argument) of the TAG directive");try{n=decodeURIComponent(n)}catch(t){Js(e,"tag prefix is malformed: "+n)}e.tagMap[a]=n}};function ir(e,t,i,a){var n,o,s,r;if(t<i){if(r=e.input.slice(t,i),a)for(n=0,o=r.length;n<o;n+=1)9===(s=r.charCodeAt(n))||32<=s&&s<=1114111||Js(e,"expected valid JSON character");else Ms.test(r)&&Js(e,"the stream contains non-printable characters");e.result+=r}}function ar(e,t,i,a){var n,o,s,r;for(Xo.isObject(i)||Js(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,r=(n=Object.keys(i)).length;s<r;s+=1)o=n[s],Os.call(t,o)||(t[o]=i[o],a[o]=!0)}function nr(e,t,i,a,n,o,s,r,l){var d,c;if(Array.isArray(n))for(d=0,c=(n=Array.prototype.slice.call(n)).length;d<c;d+=1)Array.isArray(n[d])&&Js(e,"nested arrays are not supported inside keys"),"object"==typeof n&&"[object Object]"===Ns(n[d])&&(n[d]="[object Object]");if("object"==typeof n&&"[object Object]"===Ns(n)&&(n="[object Object]"),n=String(n),null===t&&(t={}),"tag:yaml.org,2002:merge"===a)if(Array.isArray(o))for(d=0,c=o.length;d<c;d+=1)ar(e,t,o[d],i);else ar(e,t,o,i);else e.json||Os.call(i,n)||!Os.call(t,n)||(e.line=s||e.line,e.lineStart=r||e.lineStart,e.position=l||e.position,Js(e,"duplicated mapping key")),"__proto__"===n?Object.defineProperty(t,n,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[n]=o,delete i[n];return t}function or(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):Js(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function sr(e,t,i){for(var a=0,n=e.input.charCodeAt(e.position);0!==n;){for(;js(n);)9===n&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),n=e.input.charCodeAt(++e.position);if(t&&35===n)do{n=e.input.charCodeAt(++e.position)}while(10!==n&&13!==n&&0!==n);if(!Rs(n))break;for(or(e),n=e.input.charCodeAt(e.position),a++,e.lineIndent=0;32===n;)e.lineIndent++,n=e.input.charCodeAt(++e.position)}return-1!==i&&0!==a&&e.lineIndent<i&&er(e,"deficient indentation"),a}function rr(e){var t,i=e.position;return!(45!==(t=e.input.charCodeAt(i))&&46!==t||t!==e.input.charCodeAt(i+1)||t!==e.input.charCodeAt(i+2)||(i+=3,0!==(t=e.input.charCodeAt(i))&&!qs(t)))}function lr(e,t){1===t?e.result+=" ":t>1&&(e.result+=Xo.repeat("\n",t-1))}function dr(e,t){var i,a,n=e.tag,o=e.anchor,s=[],r=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=s),a=e.input.charCodeAt(e.position);0!==a&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,Js(e,"tab characters must not be used in indentation")),45===a)&&qs(e.input.charCodeAt(e.position+1));)if(r=!0,e.position++,sr(e,!0,-1)&&e.lineIndent<=t)s.push(null),a=e.input.charCodeAt(e.position);else if(i=e.line,hr(e,t,3,!1,!0),s.push(e.result),sr(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&0!==a)Js(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!r&&(e.tag=n,e.anchor=o,e.kind="sequence",e.result=s,!0)}function cr(e){var t,i,a,n,o=!1,s=!1;if(33!==(n=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&Js(e,"duplication of a tag property"),60===(n=e.input.charCodeAt(++e.position))?(o=!0,n=e.input.charCodeAt(++e.position)):33===n?(s=!0,i="!!",n=e.input.charCodeAt(++e.position)):i="!",t=e.position,o){do{n=e.input.charCodeAt(++e.position)}while(0!==n&&62!==n);e.position<e.length?(a=e.input.slice(t,e.position),n=e.input.charCodeAt(++e.position)):Js(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==n&&!qs(n);)33===n&&(s?Js(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(t-1,e.position+1),Ds.test(i)||Js(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),n=e.input.charCodeAt(++e.position);a=e.input.slice(t,e.position),Bs.test(a)&&Js(e,"tag suffix cannot contain flow indicator characters")}a&&!Vs.test(a)&&Js(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch(t){Js(e,"tag name is malformed: "+a)}return o?e.tag=a:Os.call(e.tagMap,i)?e.tag=e.tagMap[i]+a:"!"===i?e.tag="!"+a:"!!"===i?e.tag="tag:yaml.org,2002:"+a:Js(e,'undeclared tag handle "'+i+'"'),!0}function ur(e){var t,i;if(38!==(i=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&Js(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!qs(i)&&!Us(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&Js(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function hr(e,t,i,a,n){var o,s,r,l,d,c,u,h,p,v=1,m=!1,f=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=r=4===i||3===i,a&&sr(e,!0,-1)&&(m=!0,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)),1===v)for(;cr(e)||ur(e);)sr(e,!0,-1)?(m=!0,r=o,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)):r=!1;if(r&&(r=m||n),1!==v&&4!==i||(h=1===i||2===i?t:t+1,p=e.position-e.lineStart,1===v?r&&(dr(e,p)||function(e,t,i){var a,n,o,s,r,l,d,c=e.tag,u=e.anchor,h={},p=Object.create(null),v=null,m=null,f=null,g=!1,_=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=h),d=e.input.charCodeAt(e.position);0!==d;){if(g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,Js(e,"tab characters must not be used in indentation")),a=e.input.charCodeAt(e.position+1),o=e.line,63!==d&&58!==d||!qs(a)){if(s=e.line,r=e.lineStart,l=e.position,!hr(e,i,2,!1,!0))break;if(e.line===o){for(d=e.input.charCodeAt(e.position);js(d);)d=e.input.charCodeAt(++e.position);if(58===d)qs(d=e.input.charCodeAt(++e.position))||Js(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(nr(e,h,p,v,m,null,s,r,l),v=m=f=null),_=!0,g=!1,n=!1,v=e.tag,m=e.result;else{if(!_)return e.tag=c,e.anchor=u,!0;Js(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return e.tag=c,e.anchor=u,!0;Js(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===d?(g&&(nr(e,h,p,v,m,null,s,r,l),v=m=f=null),_=!0,g=!0,n=!0):g?(g=!1,n=!0):Js(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,d=a;if((e.line===o||e.lineIndent>t)&&(g&&(s=e.line,r=e.lineStart,l=e.position),hr(e,t,4,!0,n)&&(g?m=e.result:f=e.result),g||(nr(e,h,p,v,m,f,s,r,l),v=m=f=null),sr(e,!0,-1),d=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&0!==d)Js(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&nr(e,h,p,v,m,null,s,r,l),_&&(e.tag=c,e.anchor=u,e.kind="mapping",e.result=h),_}(e,p,h))||function(e,t){var i,a,n,o,s,r,l,d,c,u,h,p,v=!0,m=e.tag,f=e.anchor,g=Object.create(null);if(91===(p=e.input.charCodeAt(e.position)))s=93,d=!1,o=[];else{if(123!==p)return!1;s=125,d=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),p=e.input.charCodeAt(++e.position);0!==p;){if(sr(e,!0,t),(p=e.input.charCodeAt(e.position))===s)return e.position++,e.tag=m,e.anchor=f,e.kind=d?"mapping":"sequence",e.result=o,!0;v?44===p&&Js(e,"expected the node content, but found ','"):Js(e,"missed comma between flow collection entries"),h=null,r=l=!1,63===p&&qs(e.input.charCodeAt(e.position+1))&&(r=l=!0,e.position++,sr(e,!0,t)),i=e.line,a=e.lineStart,n=e.position,hr(e,t,1,!1,!0),u=e.tag,c=e.result,sr(e,!0,t),p=e.input.charCodeAt(e.position),!l&&e.line!==i||58!==p||(r=!0,p=e.input.charCodeAt(++e.position),sr(e,!0,t),hr(e,t,1,!1,!0),h=e.result),d?nr(e,o,g,u,c,h,i,a,n):r?o.push(nr(e,null,g,u,c,h,i,a,n)):o.push(c),sr(e,!0,t),44===(p=e.input.charCodeAt(e.position))?(v=!0,p=e.input.charCodeAt(++e.position)):v=!1}Js(e,"unexpected end of the stream within a flow collection")}(e,h)?f=!0:(s&&function(e,t){var i,a,n,o,s,r=1,l=!1,d=!1,c=t,u=0,h=!1;if(124===(o=e.input.charCodeAt(e.position)))a=!1;else{if(62!==o)return!1;a=!0}for(e.kind="scalar",e.result="";0!==o;)if(43===(o=e.input.charCodeAt(++e.position))||45===o)1===r?r=43===o?3:2:Js(e,"repeat of a chomping mode identifier");else{if(!((n=48<=(s=o)&&s<=57?s-48:-1)>=0))break;0===n?Js(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?Js(e,"repeat of an indentation width identifier"):(c=t+n-1,d=!0)}if(js(o)){do{o=e.input.charCodeAt(++e.position)}while(js(o));if(35===o)do{o=e.input.charCodeAt(++e.position)}while(!Rs(o)&&0!==o)}for(;0!==o;){for(or(e),e.lineIndent=0,o=e.input.charCodeAt(e.position);(!d||e.lineIndent<c)&&32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position);if(!d&&e.lineIndent>c&&(c=e.lineIndent),Rs(o))u++;else{if(e.lineIndent<c){3===r?e.result+=Xo.repeat("\n",l?1+u:u):1===r&&l&&(e.result+="\n");break}for(a?js(o)?(h=!0,e.result+=Xo.repeat("\n",l?1+u:u)):h?(h=!1,e.result+=Xo.repeat("\n",u+1)):0===u?l&&(e.result+=" "):e.result+=Xo.repeat("\n",u):e.result+=Xo.repeat("\n",l?1+u:u),l=!0,d=!0,u=0,i=e.position;!Rs(o)&&0!==o;)o=e.input.charCodeAt(++e.position);ir(e,i,e.position,!1)}}return!0}(e,h)||function(e,t){var i,a,n;if(39!==(i=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,a=n=e.position;0!==(i=e.input.charCodeAt(e.position));)if(39===i){if(ir(e,a,e.position,!0),39!==(i=e.input.charCodeAt(++e.position)))return!0;a=e.position,e.position++,n=e.position}else Rs(i)?(ir(e,a,n,!0),lr(e,sr(e,!1,t)),a=n=e.position):e.position===e.lineStart&&rr(e)?Js(e,"unexpected end of the document within a single quoted scalar"):(e.position++,n=e.position);Js(e,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(e,t){var i,a,n,o,s,r,l;if(34!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=a=e.position;0!==(r=e.input.charCodeAt(e.position));){if(34===r)return ir(e,i,e.position,!0),e.position++,!0;if(92===r){if(ir(e,i,e.position,!0),Rs(r=e.input.charCodeAt(++e.position)))sr(e,!1,t);else if(r<256&&Ys[r])e.result+=Ks[r],e.position++;else if((s=120===(l=r)?2:117===l?4:85===l?8:0)>0){for(n=s,o=0;n>0;n--)(s=Hs(r=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+s:Js(e,"expected hexadecimal character");e.result+=Ws(o),e.position++}else Js(e,"unknown escape sequence");i=a=e.position}else Rs(r)?(ir(e,i,a,!0),lr(e,sr(e,!1,t)),i=a=e.position):e.position===e.lineStart&&rr(e)?Js(e,"unexpected end of the document within a double quoted scalar"):(e.position++,a=e.position)}Js(e,"unexpected end of the stream within a double quoted scalar")}(e,h)?f=!0:!function(e){var t,i,a;if(42!==(a=e.input.charCodeAt(e.position)))return!1;for(a=e.input.charCodeAt(++e.position),t=e.position;0!==a&&!qs(a)&&!Us(a);)a=e.input.charCodeAt(++e.position);return e.position===t&&Js(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),Os.call(e.anchorMap,i)||Js(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],sr(e,!0,-1),!0}(e)?function(e,t,i){var a,n,o,s,r,l,d,c,u=e.kind,h=e.result;if(qs(c=e.input.charCodeAt(e.position))||Us(c)||35===c||38===c||42===c||33===c||124===c||62===c||39===c||34===c||37===c||64===c||96===c)return!1;if((63===c||45===c)&&(qs(a=e.input.charCodeAt(e.position+1))||i&&Us(a)))return!1;for(e.kind="scalar",e.result="",n=o=e.position,s=!1;0!==c;){if(58===c){if(qs(a=e.input.charCodeAt(e.position+1))||i&&Us(a))break}else if(35===c){if(qs(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&rr(e)||i&&Us(c))break;if(Rs(c)){if(r=e.line,l=e.lineStart,d=e.lineIndent,sr(e,!1,-1),e.lineIndent>=t){s=!0,c=e.input.charCodeAt(e.position);continue}e.position=o,e.line=r,e.lineStart=l,e.lineIndent=d;break}}s&&(ir(e,n,o,!1),lr(e,e.line-r),n=o=e.position,s=!1),js(c)||(o=e.position+1),c=e.input.charCodeAt(++e.position)}return ir(e,n,o,!1),!!e.result||(e.kind=u,e.result=h,!1)}(e,h,1===i)&&(f=!0,null===e.tag&&(e.tag="?")):(f=!0,null===e.tag&&null===e.anchor||Js(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===v&&(f=r&&dr(e,p))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&Js(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,d=e.implicitTypes.length;l<d;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(Os.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,d=(c=e.typeMap.multi[e.kind||"fallback"]).length;l<d;l+=1)if(e.tag.slice(0,c[l].tag.length)===c[l].tag){u=c[l];break}u||Js(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&Js(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):Js(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||f}function pr(e){var t,i,a,n,o=e.position,s=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(n=e.input.charCodeAt(e.position))&&(sr(e,!0,-1),n=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==n));){for(s=!0,n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!qs(n);)n=e.input.charCodeAt(++e.position);for(a=[],(i=e.input.slice(t,e.position)).length<1&&Js(e,"directive name must not be less than one character in length");0!==n;){for(;js(n);)n=e.input.charCodeAt(++e.position);if(35===n){do{n=e.input.charCodeAt(++e.position)}while(0!==n&&!Rs(n));break}if(Rs(n))break;for(t=e.position;0!==n&&!qs(n);)n=e.input.charCodeAt(++e.position);a.push(e.input.slice(t,e.position))}0!==n&&or(e),Os.call(tr,i)?tr[i](e,i,a):er(e,'unknown document directive "'+i+'"')}sr(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,sr(e,!0,-1)):s&&Js(e,"directives end mark is expected"),hr(e,e.lineIndent-1,4,!1,!0),sr(e,!0,-1),e.checkLineBreaks&&Fs.test(e.input.slice(o,e.position))&&er(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&rr(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,sr(e,!0,-1)):e.position<e.length-1&&Js(e,"end of the stream or a document separator is expected")}function vr(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var i=new Qs(e,t),a=e.indexOf("\0");for(-1!==a&&(i.position=a,Js(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)pr(i);return i.documents}var mr={loadAll:function(e,t,i){null!==t&&"object"==typeof t&&void 0===i&&(i=t,t=null);var a=vr(e,i);if("function"!=typeof t)return a;for(var n=0,o=a.length;n<o;n+=1)t(a[n])},load:function(e,t){var i=vr(e,t);if(0!==i.length){if(1===i.length)return i[0];throw new ts("expected a single document in the stream, but found more")}}},fr=Object.prototype.toString,gr=Object.prototype.hasOwnProperty,_r={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},yr=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],kr=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function br(e){var t,i,a;if(t=e.toString(16).toUpperCase(),e<=255)i="x",a=2;else if(e<=65535)i="u",a=4;else{if(!(e<=4294967295))throw new ts("code point within a string may not be greater than 0xFFFFFFFF");i="U",a=8}return"\\"+i+Xo.repeat("0",a-t.length)+t}function xr(e){this.schema=e.schema||Ps,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Xo.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var i,a,n,o,s,r,l;if(null===t)return{};for(i={},n=0,o=(a=Object.keys(t)).length;n<o;n+=1)s=a[n],r=String(t[s]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=e.compiledTypeMap.fallback[s])&&gr.call(l.styleAliases,r)&&(r=l.styleAliases[r]),i[s]=r;return i}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function $r(e,t){for(var i,a=Xo.repeat(" ",t),n=0,o=-1,s="",r=e.length;n<r;)-1===(o=e.indexOf("\n",n))?(i=e.slice(n),n=r):(i=e.slice(n,o+1),n=o+1),i.length&&"\n"!==i&&(s+=a),s+=i;return s}function wr(e,t){return"\n"+Xo.repeat(" ",e.indent*t)}function Cr(e){return 32===e||9===e}function Ar(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function Ir(e){return Ar(e)&&65279!==e&&13!==e&&10!==e}function Er(e,t,i){var a=Ir(e),n=a&&!Cr(e);return(i?a:a&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!n)||Ir(t)&&!Cr(t)&&35===e||58===t&&n}function zr(e,t){var i,a=e.charCodeAt(t);return a>=55296&&a<=56319&&t+1<e.length&&(i=e.charCodeAt(t+1))>=56320&&i<=57343?1024*(a-55296)+i-56320+65536:a}function Sr(e){return/^\n* /.test(e)}function Lr(e,t,i,a,n,o,s,r){var l,d,c=0,u=null,h=!1,p=!1,v=-1!==a,m=-1,f=Ar(d=zr(e,0))&&65279!==d&&!Cr(d)&&45!==d&&63!==d&&58!==d&&44!==d&&91!==d&&93!==d&&123!==d&&125!==d&&35!==d&&38!==d&&42!==d&&33!==d&&124!==d&&61!==d&&62!==d&&39!==d&&34!==d&&37!==d&&64!==d&&96!==d&&function(e){return!Cr(e)&&58!==e}(zr(e,e.length-1));if(t||s)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!Ar(c=zr(e,l)))return 5;f=f&&Er(c,u,r),u=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=zr(e,l)))h=!0,v&&(p=p||l-m-1>a&&" "!==e[m+1],m=l);else if(!Ar(c))return 5;f=f&&Er(c,u,r),u=c}p=p||v&&l-m-1>a&&" "!==e[m+1]}return h||p?i>9&&Sr(e)?5:s?2===o?5:2:p?4:3:!f||s||n(e)?2===o?5:2:1}function Tr(e,t,i,a,n){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==yr.indexOf(t)||kr.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,i),s=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),r=a||e.flowLevel>-1&&i>=e.flowLevel;switch(Lr(t,r,e.indent,s,(function(t){return function(e,t){var i,a;for(i=0,a=e.implicitTypes.length;i<a;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!a,n)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Pr(t,e.indent)+Or($r(t,o));case 4:return">"+Pr(t,e.indent)+Or($r(function(e,t){var i,a,n=/(\n+)([^\n]*)/g,o=(r=e.indexOf("\n"),r=-1!==r?r:e.length,n.lastIndex=r,Mr(e.slice(0,r),t)),s="\n"===e[0]||" "===e[0];var r;for(;a=n.exec(e);){var l=a[1],d=a[2];i=" "===d[0],o+=l+(s||i||""===d?"":"\n")+Mr(d,t),s=i}return o}(t,s),o));case 5:return'"'+function(e){for(var t,i="",a=0,n=0;n<e.length;a>=65536?n+=2:n++)a=zr(e,n),!(t=_r[a])&&Ar(a)?(i+=e[n],a>=65536&&(i+=e[n+1])):i+=t||br(a);return i}(t)+'"';default:throw new ts("impossible error: invalid scalar style")}}()}function Pr(e,t){var i=Sr(e)?String(t):"",a="\n"===e[e.length-1];return i+(a&&("\n"===e[e.length-2]||"\n"===e)?"+":a?"":"-")+"\n"}function Or(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Mr(e,t){if(""===e||" "===e[0])return e;for(var i,a,n=/ [^ ]/g,o=0,s=0,r=0,l="";i=n.exec(e);)(r=i.index)-o>t&&(a=s>o?s:r,l+="\n"+e.slice(o,a),o=a+1),s=r;return l+="\n",e.length-o>t&&s>o?l+=e.slice(o,s)+"\n"+e.slice(s+1):l+=e.slice(o),l.slice(1)}function Fr(e,t,i,a){var n,o,s,r="",l=e.tag;for(n=0,o=i.length;n<o;n+=1)s=i[n],e.replacer&&(s=e.replacer.call(i,String(n),s)),(Dr(e,t+1,s,!0,!0,!1,!0)||void 0===s&&Dr(e,t+1,null,!0,!0,!1,!0))&&(a&&""===r||(r+=wr(e,t)),e.dump&&10===e.dump.charCodeAt(0)?r+="-":r+="- ",r+=e.dump);e.tag=l,e.dump=r||"[]"}function Br(e,t,i){var a,n,o,s,r,l;for(o=0,s=(n=i?e.explicitTypes:e.implicitTypes).length;o<s;o+=1)if(((r=n[o]).instanceOf||r.predicate)&&(!r.instanceOf||"object"==typeof t&&t instanceof r.instanceOf)&&(!r.predicate||r.predicate(t))){if(i?r.multi&&r.representName?e.tag=r.representName(t):e.tag=r.tag:e.tag="?",r.represent){if(l=e.styleMap[r.tag]||r.defaultStyle,"[object Function]"===fr.call(r.represent))a=r.represent(t,l);else{if(!gr.call(r.represent,l))throw new ts("!<"+r.tag+'> tag resolver accepts not "'+l+'" style');a=r.represent[l](t,l)}e.dump=a}return!0}return!1}function Dr(e,t,i,a,n,o,s){e.tag=null,e.dump=i,Br(e,i,!1)||Br(e,i,!0);var r,l=fr.call(e.dump),d=a;a&&(a=e.flowLevel<0||e.flowLevel>t);var c,u,h="[object Object]"===l||"[object Array]"===l;if(h&&(u=-1!==(c=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(n=!1),u&&e.usedDuplicates[c])e.dump="*ref_"+c;else{if(h&&u&&!e.usedDuplicates[c]&&(e.usedDuplicates[c]=!0),"[object Object]"===l)a&&0!==Object.keys(e.dump).length?(!function(e,t,i,a){var n,o,s,r,l,d,c="",u=e.tag,h=Object.keys(i);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new ts("sortKeys must be a boolean or a function");for(n=0,o=h.length;n<o;n+=1)d="",a&&""===c||(d+=wr(e,t)),r=i[s=h[n]],e.replacer&&(r=e.replacer.call(i,s,r)),Dr(e,t+1,s,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,l&&(d+=wr(e,t)),Dr(e,t+1,r,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?d+=":":d+=": ",c+=d+=e.dump));e.tag=u,e.dump=c||"{}"}(e,t,e.dump,n),u&&(e.dump="&ref_"+c+e.dump)):(!function(e,t,i){var a,n,o,s,r,l="",d=e.tag,c=Object.keys(i);for(a=0,n=c.length;a<n;a+=1)r="",""!==l&&(r+=", "),e.condenseFlow&&(r+='"'),s=i[o=c[a]],e.replacer&&(s=e.replacer.call(i,o,s)),Dr(e,t,o,!1,!1)&&(e.dump.length>1024&&(r+="? "),r+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Dr(e,t,s,!1,!1)&&(l+=r+=e.dump));e.tag=d,e.dump="{"+l+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+c+" "+e.dump));else if("[object Array]"===l)a&&0!==e.dump.length?(e.noArrayIndent&&!s&&t>0?Fr(e,t-1,e.dump,n):Fr(e,t,e.dump,n),u&&(e.dump="&ref_"+c+e.dump)):(!function(e,t,i){var a,n,o,s="",r=e.tag;for(a=0,n=i.length;a<n;a+=1)o=i[a],e.replacer&&(o=e.replacer.call(i,String(a),o)),(Dr(e,t,o,!1,!1)||void 0===o&&Dr(e,t,null,!1,!1))&&(""!==s&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump);e.tag=r,e.dump="["+s+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+c+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new ts("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&Tr(e,e.dump,t,o,d)}null!==e.tag&&"?"!==e.tag&&(r=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),r="!"===e.tag[0]?"!"+r:"tag:yaml.org,2002:"===r.slice(0,18)?"!!"+r.slice(18):"!<"+r+">",e.dump=r+" "+e.dump)}return!0}function Vr(e,t){var i,a,n=[],o=[];for(Nr(e,n,o),i=0,a=o.length;i<a;i+=1)t.duplicates.push(n[o[i]]);t.usedDuplicates=new Array(a)}function Nr(e,t,i){var a,n,o;if(null!==e&&"object"==typeof e)if(-1!==(n=t.indexOf(e)))-1===i.indexOf(n)&&i.push(n);else if(t.push(e),Array.isArray(e))for(n=0,o=e.length;n<o;n+=1)Nr(e[n],t,i);else for(n=0,o=(a=Object.keys(e)).length;n<o;n+=1)Nr(e[a[n]],t,i)}var Rr=Ps,jr=mr.load,qr={dump:function(e,t){var i=new xr(t=t||{});i.noRefs||Vr(e,i);var a=e;return i.replacer&&(a=i.replacer.call({"":a},"",a)),Dr(i,0,a,!0,!0)?i.dump+"\n":""}}.dump;let Ur;const Hr={key:"Mod-s",run:t=>(e(t.dom,"editor-save"),!0)};v([x("ha-code-editor")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[f()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[f()],key:"error",value:()=>!1},{kind:"field",decorators:[xi()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.HighlightStyle.get(this.codemirror.state,this._loadedCodeMirror.tags.comment);return!!this.shadowRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){Ci(Ai(n.prototype),"connectedCallback",this).call(this),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"update",value:function(e){Ci(Ai(n.prototype),"update",this).call(this,e),this.codemirror&&(e.has("mode")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),e.has("error")&&this.classList.toggle("error-state",this.error))}},{kind:"method",key:"firstUpdated",value:function(e){Ci(Ai(n.prototype),"firstUpdated",this).call(this,e),this._blockKeyboardShortcuts(),this._load()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_load",value:async function(){this._loadedCodeMirror=await(async()=>(Ur||(Ur=import("./c.da8de431.js")),Ur))();const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,Hr]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.theme,this._loadedCodeMirror.Prec.fallback(this._loadedCodeMirror.highlightStyle),this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of((e=>this._onUpdate(e)))];!this.readOnly&&this.autocompleteEntities&&this.hass&&e.push(this._loadedCodeMirror.autocompletion({override:[this._entityCompletions.bind(this)],maxRenderedOptions:10})),this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),root:this.shadowRoot,parent:this.shadowRoot})}},{kind:"field",key:"_getStates",value:()=>Ii((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\./);if(!t||t.from===t.to&&!e.explicit)return null;const i=this._getStates(this.hass.states);return i&&i.length?{from:Number(t.from),options:i,span:/^\w*.\w*$/}:null}},{kind:"method",key:"_blockKeyboardShortcuts",value:function(){this.addEventListener("keydown",(e=>e.stopPropagation()))}},{kind:"method",key:"_onUpdate",value:function(t){if(!t.docChanged)return;const i=this.value;i!==this._value&&(this._value=i,e(this,"value-changed",{value:this._value}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host(.error-state) .cm-gutters {
        border-color: var(--error-state-color, red);
      }
    `}}]}}),Si);v([x("ha-yaml-editor")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"yamlSchema",value:()=>Rr},{kind:"field",decorators:[f()],key:"defaultValue",value:void 0},{kind:"field",decorators:[f()],key:"isValid",value:()=>!0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[xi()],key:"_yaml",value:()=>""},{kind:"method",key:"setValue",value:function(e){try{this._yaml=e&&!(e=>{if("object"!=typeof e)return!1;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0})(e)?qr(e,{schema:this.yamlSchema}):""}catch(t){console.error(t,e),alert(`There was an error converting to YAML: ${t}`)}}},{kind:"method",key:"firstUpdated",value:function(){this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?_``:_`
      ${this.label?_`<p>${this.label}${this.required?" *":""}</p>`:""}
      <ha-code-editor
        .hass=${this.hass}
        .value=${this._yaml}
        .readOnly=${this.readOnly}
        mode="yaml"
        autocomplete-entities
        .error=${!1===this.isValid}
        @value-changed=${this._onChange}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_onChange",value:function(t){let i;t.stopPropagation(),this._yaml=t.detail.value;let a=!0;if(this._yaml)try{i=jr(this._yaml,{schema:this.yamlSchema})}catch(e){a=!1}else i={};this.value=i,this.isValid=a,e(this,"value-changed",{value:i,isValid:a})}},{kind:"get",key:"yaml",value:function(){return this._yaml}}]}}),m);v([x("ha-progress-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"progress",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"raised",value:()=>!1},{kind:"field",decorators:[xi()],key:"_result",value:void 0},{kind:"method",key:"render",value:function(){const e=this._result||this.progress;return _`
      <mwc-button
        ?raised=${this.raised}
        .disabled=${this.disabled||this.progress}
        @click=${this._buttonTapped}
        class=${this._result||""}
      >
        <slot></slot>
      </mwc-button>
      ${e?_`
            <div class="progress">
              ${"success"===this._result?_`<ha-svg-icon .path=${Li}></ha-svg-icon>`:"error"===this._result?_`<ha-svg-icon .path=${Ti}></ha-svg-icon>`:this.progress?_`
                    <ha-circular-progress
                      size="small"
                      active
                    ></ha-circular-progress>
                  `:""}
            </div>
          `:""}
    `}},{kind:"method",key:"actionSuccess",value:function(){this._setResult("success")}},{kind:"method",key:"actionError",value:function(){this._setResult("error")}},{kind:"method",key:"_setResult",value:function(e){this._result=e,setTimeout((()=>{this._result=void 0}),2e3)}},{kind:"method",key:"_buttonTapped",value:function(e){this.progress&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        outline: none;
        display: inline-block;
        position: relative;
      }

      mwc-button {
        transition: all 1s;
      }

      mwc-button.success {
        --mdc-theme-primary: white;
        background-color: var(--success-color);
        transition: none;
        border-radius: 4px;
        pointer-events: none;
      }

      mwc-button[raised].success {
        --mdc-theme-primary: var(--success-color);
        --mdc-theme-on-primary: white;
      }

      mwc-button.error {
        --mdc-theme-primary: white;
        background-color: var(--error-color);
        transition: none;
        border-radius: 4px;
        pointer-events: none;
      }

      mwc-button[raised].error {
        --mdc-theme-primary: var(--error-color);
        --mdc-theme-on-primary: white;
      }

      .progress {
        bottom: 4px;
        position: absolute;
        text-align: center;
        top: 4px;
        width: 100%;
      }

      ha-svg-icon {
        color: white;
      }

      mwc-button.success slot,
      mwc-button.error slot {
        visibility: hidden;
      }
    `}}]}}),m);v([x("ha-automation-condition-row")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"condition",value:void 0},{kind:"field",decorators:[xi()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[xi()],key:"_warnings",value:void 0},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"render",value:function(){return this.condition?_`
      <ha-card outlined>
        ${!1===this.condition.enabled?_`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}
        <div class="card-menu">
          <ha-progress-button @click=${this._testCondition}>
            ${this.hass.localize("ui.panel.config.automation.editor.conditions.test")}
          </ha-progress-button>
          <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
            <ha-icon-button
              slot="trigger"
              .label=${this.hass.localize("ui.common.menu")}
              .path=${Pi}
            >
            </ha-icon-button>
            <mwc-list-item>
              ${this._yamlMode?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </mwc-list-item>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
            </mwc-list-item>
            <mwc-list-item>
              ${!1===this.condition.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
            </mwc-list-item>
            <mwc-list-item class="warning">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
            </mwc-list-item>
          </ha-button-menu>
        </div>
        <div
          class="card-content ${!1===this.condition.enabled?"disabled":""}"
        >
          ${this._warnings?_`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length>0&&void 0!==this._warnings[0]?_` <ul>
                      ${this._warnings.map((e=>_`<li>${e}</li>`))}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          <ha-automation-condition-editor
            @ui-mode-not-available=${this._handleUiModeNotAvailable}
            @value-changed=${this._handleChangeEvent}
            .yamlMode=${this._yamlMode}
            .hass=${this.hass}
            .condition=${this.condition}
          ></ha-automation-condition-editor>
        </div>
      </ha-card>
    `:_``}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){e.stopPropagation(),this._warnings=nn(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_handleChangeEvent",value:function(e){e.detail.yaml&&(this._warnings=void 0)}},{kind:"method",key:"_handleAction",value:function(t){switch(t.detail.index){case 0:this._switchYamlMode();break;case 1:e(this,"duplicate");break;case 2:this._onDisable();break;case 3:this._onDelete()}}},{kind:"method",key:"_onDisable",value:function(){var t;const i=!(null===(t=this.condition.enabled)||void 0===t||t),a={...this.condition,enabled:i};var n;(e(this,"value-changed",{value:a}),this._yamlMode)&&(null===(n=this._yamlEditor)||void 0===n||n.setValue(a))}},{kind:"method",key:"_onDelete",value:function(){ma(this,{text:this.hass.localize("ui.panel.config.automation.editor.conditions.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{e(this,"value-changed",{value:null})}})}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!this._yamlMode}},{kind:"method",key:"_testCondition",value:async function(e){const t=this.condition,i=e.target;if(!i.progress){i.progress=!0;try{const e=await on(this.hass,{condition:t});if(this.condition!==t)return;if(!e.condition.valid)return void fa(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.invalid_condition"),text:e.condition.error});let a;try{a=await((e,t,i)=>e.callWS({type:"test_condition",condition:t,variables:i}))(this.hass,t)}catch(e){if(this.condition!==t)return;return void fa(this,{title:this.hass.localize("ui.panel.config.automation.editor.conditions.test_failed"),text:e.message})}if(this.condition!==t)return;a.result?i.actionSuccess():i.actionError()}finally{i.progress=!1}}}},{kind:"get",static:!0,key:"styles",value:function(){return[zi,i`
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .card-content {
          padding-top: 16px;
          margin-top: 0;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }
        .card-menu {
          float: var(--float-end, right);
          z-index: 3;
          margin: 4px;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
      `]}}]}}),m);const Gr=(e,t)=>e.callWS({type:"device_automation/action/list",device_id:t}),Wr=(e,t)=>e.callWS({type:"device_automation/condition/list",device_id:t}),Yr=(e,t)=>e.callWS({type:"device_automation/trigger/list",device_id:t}),Kr=["device_id","domain","entity_id","type","subtype","event","condition","platform"],Zr=(e,t)=>{if(typeof e!=typeof t)return!1;for(const i in e)if(Kr.includes(i)&&!Object.is(e[i],t[i]))return!1;for(const i in t)if(Kr.includes(i)&&!Object.is(e[i],t[i]))return!1;return!0},Qr=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.action_type.${t.type}`,"entity_name",i?pn(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.action_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},Xr=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.condition_type.${t.type}`,"entity_name",i?pn(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.condition_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},Jr=(e,t)=>{const i=t.entity_id?e.states[t.entity_id]:void 0;return e.localize(`component.${t.domain}.device_automation.trigger_type.${t.type}`,"entity_name",i?pn(i):t.entity_id||"<unknown>","subtype",t.subtype?e.localize(`component.${t.domain}.device_automation.trigger_subtype.${t.subtype}`)||t.subtype:"")||(t.subtype?`"${t.subtype}" ${t.type}`:t.type)},el=(e,t)=>{var i,a,n,o;return null===(i=e.metadata)||void 0===i||!i.secondary||null!==(a=t.metadata)&&void 0!==a&&a.secondary?null!==(n=e.metadata)&&void 0!==n&&n.secondary||null===(o=t.metadata)||void 0===o||!o.secondary?0:-1:1},tl="NO_AUTOMATION",il="UNKNOWN_AUTOMATION";let al=v(null,(function(t,a){class n extends a{constructor(e,i,a){super(),t(this),this._localizeDeviceAutomation=e,this._fetchDeviceAutomations=i,this._createNoAutomation=a}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"deviceId",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[xi()],key:"_automations",value:()=>[]},{kind:"field",decorators:[xi()],key:"_renderEmpty",value:()=>!1},{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action")}},{kind:"field",key:"_localizeDeviceAutomation",value:void 0},{kind:"field",key:"_fetchDeviceAutomations",value:void 0},{kind:"field",key:"_createNoAutomation",value:void 0},{kind:"get",key:"_value",value:function(){if(!this.value)return"";if(!this._automations.length)return tl;const e=this._automations.findIndex((e=>Zr(e,this.value)));return-1===e?il:`${this._automations[e].device_id}_${e}`}},{kind:"method",key:"render",value:function(){if(this._renderEmpty)return _``;const e=this._value;return _`
      <ha-select
        .label=${this.label}
        .value=${e}
        @selected=${this._automationChanged}
        .disabled=${0===this._automations.length}
      >
        ${e===tl?_`<mwc-list-item .value=${tl}>
              ${this.NO_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${e===il?_`<mwc-list-item .value=${il}>
              ${this.UNKNOWN_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${this._automations.map(((e,t)=>_`
            <mwc-list-item .value=${`${e.device_id}_${t}`}>
              ${this._localizeDeviceAutomation(this.hass,e)}
            </mwc-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"updated",value:function(e){Ci(Ai(n.prototype),"updated",this).call(this,e),e.has("deviceId")&&this._updateDeviceInfo()}},{kind:"method",key:"_updateDeviceInfo",value:async function(){this._automations=this.deviceId?(await this._fetchDeviceAutomations(this.hass,this.deviceId)).sort(el):[],this.value&&this.value.device_id===this.deviceId||this._setValue(this._automations.length?this._automations[0]:this._createNoAutomation(this.deviceId)),this._renderEmpty=!0,await this.updateComplete,this._renderEmpty=!1}},{kind:"method",key:"_automationChanged",value:function(e){const t=e.target.value;if(!t||[il,tl].includes(t))return;const[i,a]=t.split("_"),n=this._automations[a];n.device_id===i&&this._setValue(n)}},{kind:"method",key:"_setValue",value:function(t){if(this.value&&Zr(t,this.value))return;const i={...t};delete i.metadata,e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-select {
        width: 100%;
        margin-top: 4px;
      }
    `}}]}}),m);v([x("ha-device-condition-picker")],(function(e,t){return{F:class extends t{constructor(){super(Xr,Wr,(e=>({device_id:e||"",condition:"device",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.conditions.no_conditions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.conditions.unknown_condition")}}]}}),al);const nl=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,t)=>Oa(e.name,t.name))))),ol=(e,t)=>e.subscribeEvents(ha((()=>nl(e).then((e=>t.setState(e,!0)))),500,!0),"area_registry_updated"),sl=(e,t)=>Oi("_areaRegistry",nl,ol,e,t),rl=(e,t,i)=>e.name_by_user||e.name||i&&((e,t)=>{for(const i of t||[]){const t="string"==typeof i?i:i.entity_id,a=e.states[t];if(a)return pn(a)}})(t,i)||t.localize("ui.panel.config.devices.unnamed_device","type",t.localize(`ui.panel.config.devices.type.${e.entry_type||"device"}`)),ll=e=>e.sendMessagePromise({type:"config/device_registry/list"}),dl=(e,t)=>e.subscribeEvents(ha((()=>ll(e).then((e=>t.setState(e,!0)))),500,!0),"device_registry_updated"),cl=(e,t)=>Oi("_dr",ll,dl,e,t),ul=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),hl=(e,t)=>e.subscribeEvents(ha((()=>ul(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),pl=(e,t)=>Oi("_entityRegistry",ul,hl,e,t),vl=e=>v(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){Ci(Ai(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(Ci(Ai(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(Ci(Ai(i.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e),ml=e=>_`<mwc-list-item
  .twoline=${!!e.area}
>
  <span>${e.name}</span>
  <span slot="secondary">${e.area}</span>
</mwc-list-item>`;v([x("ha-device-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"devices",value:void 0},{kind:"field",decorators:[f()],key:"areas",value:void 0},{kind:"field",decorators:[f()],key:"entities",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[xi()],key:"_opened",value:void 0},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_getDevices",value(){return Ii(((e,t,i,a,n,o,s)=>{if(!e.length)return[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_devices")}];const r={};if(a||n||o)for(const e of i)e.device_id&&(e.device_id in r||(r[e.device_id]=[]),r[e.device_id].push(e));const l={};for(const e of t)l[e.area_id]=e;let d=e.filter((e=>e.id===this.value||!e.disabled_by));a&&(d=d.filter((e=>{const t=r[e.id];return!(!t||!t.length)&&r[e.id].some((e=>a.includes(hn(e.entity_id))))}))),n&&(d=d.filter((e=>{const t=r[e.id];return!t||!t.length||i.every((e=>!n.includes(hn(e.entity_id))))}))),o&&(d=d.filter((e=>{const t=r[e.id];return!(!t||!t.length)&&r[e.id].some((e=>{const t=this.hass.states[e.entity_id];return!!t&&(t.attributes.device_class&&o.includes(t.attributes.device_class))}))}))),s&&(d=d.filter((e=>e.id===this.value||s(e))));const c=d.map((e=>({id:e.id,name:rl(e,this.hass,r[e.id]),area:e.area_id&&l[e.area_id]?l[e.area_id].name:this.hass.localize("ui.components.device-picker.no_area")})));return c.length?1===c.length?c:c.sort(((e,t)=>Oa(e.name||"",t.name||""))):[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_match")}]}))}},{kind:"method",key:"open",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.focus()}},{kind:"method",key:"hassSubscribe",value:function(){return[cl(this.hass.connection,(e=>{this.devices=e})),sl(this.hass.connection,(e=>{this.areas=e})),pl(this.hass.connection,(e=>{this.entities=e}))]}},{kind:"method",key:"updated",value:function(e){(!this._init&&this.devices&&this.areas&&this.entities||e.has("_opened")&&this._opened)&&(this._init=!0,this.comboBox.items=this._getDevices(this.devices,this.areas,this.entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter))}},{kind:"method",key:"render",value:function(){return this.devices&&this.areas&&this.entities?_`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.device-picker.device"):this.label}
        .value=${this._value}
        .helper=${this.helper}
        .renderer=${ml}
        .disabled=${this.disabled}
        .required=${this.required}
        item-value-path="id"
        item-label-path="name"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._deviceChanged}
      ></ha-combo-box>
    `:_``}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();let t=e.detail.value;"no_devices"===t&&(t=""),t!==this._value&&this._setValue(t)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),vl(m));let fl=v([x("ha-automation-condition-device")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"condition",value:void 0},{kind:"field",decorators:[xi()],key:"_deviceId",value:void 0},{kind:"field",decorators:[xi()],key:"_capabilities",value:void 0},{kind:"field",key:"_origCondition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Ii(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.condition.device_id;return _`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.label")}
      ></ha-device-picker>
      <ha-device-condition-picker
        .value=${this.condition}
        .deviceId=${t}
        @value-changed=${this._deviceConditionPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.condition")}
      ></ha-device-condition-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?_`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.condition,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.condition&&(this._origCondition=this.condition)}},{kind:"method",key:"updated",value:function(e){const t=e.get("condition");t&&!Zr(t,this.condition)&&this._getCapabilities()}},{kind:"method",key:"_getCapabilities",value:async function(){const e=this.condition;this._capabilities=e.domain?await((e,t)=>e.callWS({type:"device_automation/condition/capabilities",condition:t}))(this.hass,e):void 0}},{kind:"method",key:"_devicePicked",value:function(t){t.stopPropagation(),this._deviceId=t.target.value,void 0===this._deviceId&&e(this,"value-changed",{value:{...n.defaultConfig,condition:"device"}})}},{kind:"method",key:"_deviceConditionPicked",value:function(t){t.stopPropagation();let i=t.detail.value;this._origCondition&&Zr(this._origCondition,i)&&(i=this._origCondition),e(this,"value-changed",{value:i})}},{kind:"method",key:"_extraFieldsChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,...t.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.conditions.type.device.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);v([x("ha-automation-condition")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"conditions",value:void 0},{kind:"method",key:"updated",value:function(t){if(!t.has("conditions"))return;let i;Array.isArray(this.conditions)||(i=[this.conditions]),(i||this.conditions).forEach(((e,t)=>{"string"==typeof e&&(i=i||[...this.conditions],i[t]={condition:"template",value_template:e})})),i&&e(this,"value-changed",{value:i})}},{kind:"method",key:"render",value:function(){return Array.isArray(this.conditions)?_`
      ${this.conditions.map(((e,t)=>_`
          <ha-automation-condition-row
            .index=${t}
            .condition=${e}
            @duplicate=${this._duplicateCondition}
            @value-changed=${this._conditionChanged}
            .hass=${this.hass}
          ></ha-automation-condition-row>
        `))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addCondition}>
            ${this.hass.localize("ui.panel.config.automation.editor.conditions.add")}
          </mwc-button>
        </div>
      </ha-card>
    `:_``}},{kind:"method",key:"_addCondition",value:function(){const t=this.conditions.concat({condition:"device",...fl.defaultConfig});e(this,"value-changed",{value:t})}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation();const i=[...this.conditions],a=t.detail.value,n=t.target.index;null===a?i.splice(n,1):i[n]=a,e(this,"value-changed",{value:i})}},{kind:"method",key:"_duplicateCondition",value:function(t){t.stopPropagation();const i=t.target.index;e(this,"value-changed",{value:this.conditions.concat(Pa(this.conditions[i]))})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-condition-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `}}]}}),m);const gl=e=>{if(void 0===e)return;if("object"!=typeof e){if("string"==typeof e||isNaN(e)){const t=(null==e?void 0:e.toString().split(":"))||[];return{hours:Number(t[0])||0,minutes:Number(t[1])||0,seconds:Number(t[2])||0,milliseconds:Number(t[3])||0}}return{seconds:e}}if(!("days"in e))return e;const{days:t,minutes:i,seconds:a,milliseconds:n}=e;let o=e.hours||0;return o=(o||0)+24*(t||0),{hours:o,minutes:i,seconds:a,milliseconds:n}},_l=Ja({platform:tn(),id:en(tn()),enabled:en(Za())}),yl=Ja({days:en(Xa()),hours:en(Xa()),minutes:en(Xa()),seconds:en(Xa())}),kl=Ja({condition:Qa("state"),entity_id:en(tn()),attribute:en(tn()),state:en(tn()),for:en(an([tn(),yl]))});let bl=v([x("ha-automation-condition-state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",state:""}}},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"state",selector:{text:{}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"shouldUpdate",value:function(t){if(t.has("condition"))try{qa(this.condition,kl)}catch(t){return e(this,"ui-mode-not-available",t),!1}return!0}},{kind:"method",key:"render",value:function(){const e=gl(this.condition.for),t={...this.condition,for:e},i=this._schema(this.condition.entity_id);return _`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize("ui.panel.config.automation.editor.triggers.type.state.for");default:return this.hass.localize(`ui.panel.config.automation.editor.conditions.type.state.${e.name}`)}}}}]}}),m),xl=v([x("ha-automation-condition-logical")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{conditions:[{condition:"state",...bl.defaultConfig}]}}},{kind:"method",key:"render",value:function(){return _`
      <ha-automation-condition
        .conditions=${this.condition.conditions||[]}
        @value-changed=${this._valueChanged}
        .hass=${this.hass}
      ></ha-automation-condition>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,conditions:t.detail.value}})}}]}}),m);v([x("ha-automation-condition-and")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),xl),v([x("ha-automation-condition-not")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),xl),v([x("ha-automation-condition-numeric_state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:""}}},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"above",selector:{text:{}}},{name:"below",selector:{text:{}}},{name:"value_template",selector:{text:{multiline:!0}}}]))},{kind:"method",key:"render",value:function(){const e=this._schema(this.condition.entity_id);return _`
      <ha-form
        .hass=${this.hass}
        .data=${this.condition}
        .schema=${e}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${e.name}`)}}}}]}}),m),v([x("ha-automation-condition-or")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[]}}),xl),v([x("ha-automation-condition-sun")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"before",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"before_offset",selector:{text:{}}},{name:"after",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"after_offset",selector:{text:{}}}]))},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize);return _`
      <ha-form
        .schema=${e}
        .data=${this.condition}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.sun.${e.name}`)}}]}}),m);const $l={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class wl extends _a{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&-1!==this.maxLength,t=e&&"internal"===this.charCounter,i=e&&!t,a=!!this.helper||!!this.validationMessage||i,n={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return _`
      <label class="mdc-text-field mdc-text-field--textarea ${Fi(n)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(a,i)}
    `}renderInput(){const e=this.label?"label":void 0,t=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,a=this.autocapitalize?this.autocapitalize:void 0;return _`
      <textarea
          aria-labelledby=${wi(e)}
          class="mdc-text-field__input"
          .value="${ya(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${wi(t)}"
          maxlength="${wi(i)}"
          name="${wi(""===this.name?void 0:this.name)}"
          inputmode="${wi(this.inputMode)}"
          autocapitalize="${wi(a)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}Mi([g("textarea")],wl.prototype,"formElement",void 0),Mi([f({type:Number})],wl.prototype,"rows",void 0),Mi([f({type:Number})],wl.prototype,"cols",void 0),Mi([f({converter:$l})],wl.prototype,"charCounter",void 0);const Cl=i`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;v([x("ha-textarea")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"autogrow",value:()=>!1},{kind:"method",key:"updated",value:function(e){Ci(Ai(a.prototype),"updated",this).call(this,e),this.autogrow&&e.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}},{kind:"field",static:!0,key:"styles",value:()=>[ka,Cl,i`
      :host([autogrow]) .mdc-text-field {
        position: relative;
        min-height: 74px;
        min-width: 178px;
        max-height: 200px;
      }
      :host([autogrow]) .mdc-text-field:after {
        content: attr(data-value);
        margin-top: 23px;
        margin-bottom: 9px;
        line-height: 1.5rem;
        min-height: 42px;
        padding: 0px 32px 0 16px;
        letter-spacing: var(
          --mdc-typography-subtitle1-letter-spacing,
          0.009375em
        );
        visibility: hidden;
        white-space: pre-wrap;
      }
      :host([autogrow]) .mdc-text-field__input {
        position: absolute;
        height: calc(100% - 32px);
      }
      :host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    `]}]}}),wl),v([x("ha-automation-condition-template")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{value_template:""}}},{kind:"method",key:"render",value:function(){const{value_template:e}=this.condition;return _`
      <p>
        ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.template.value_template")}
        *
      </p>
      <ha-code-editor
        .name=${"value_template"}
        mode="jinja2"
        .hass=${this.hass}
        .value=${e}
        autocomplete-entities
        @value-changed=${this._valueChanged}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(t){((t,i)=>{var a,n,o;i.stopPropagation();const s=null===(a=i.currentTarget)||void 0===a?void 0:a.name;if(!s)return;const r=(null===(n=i.detail)||void 0===n?void 0:n.value)||(null===(o=i.currentTarget)||void 0===o?void 0:o.value);if((t.condition[s]||"")===r)return;let l;r?l={...t.condition,[s]:r}:(l={...t.condition},delete l[s]),e(t,"value-changed",{value:l})})(this,t)}}]}}),m);const Al={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7};v([x("ha-automation-condition-time")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[xi()],key:"_inputModeBefore",value:void 0},{kind:"field",decorators:[xi()],key:"_inputModeAfter",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"field",key:"_schema",value:()=>Ii(((e,t,i)=>{const a=t?{name:"after",selector:{entity:{domain:"input_datetime"}}}:{name:"after",selector:{time:{}}},n=i?{name:"before",selector:{entity:{domain:"input_datetime"}}}:{name:"before",selector:{time:{}}};return[{name:"mode_after",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",e("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},a,{name:"mode_before",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",e("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},n,{type:"multi_select",name:"weekday",options:Object.keys(Al).map((t=>[t,e(`ui.panel.config.automation.editor.conditions.type.time.weekdays.${t}`)]))}]}))},{kind:"method",key:"render",value:function(){var e,t,i,a;const n=null!==(e=this._inputModeBefore)&&void 0!==e?e:null===(t=this.condition.before)||void 0===t?void 0:t.startsWith("input_datetime."),o=null!==(i=this._inputModeAfter)&&void 0!==i?i:null===(a=this.condition.after)||void 0===a?void 0:a.startsWith("input_datetime."),s=this._schema(this.hass.localize,o,n),r={mode_before:n?"input":"value",mode_after:o?"input":"value",...this.condition};return _`
      <ha-form
        .hass=${this.hass}
        .data=${r}
        .schema=${s}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;this._inputModeAfter="input"===i.mode_after,this._inputModeBefore="input"===i.mode_before,delete i.mode_after,delete i.mode_before,Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.time.${e.name}`)}}]}}),m),v([x("ha-automation-condition-trigger")],(function(t,i){class a extends i{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"condition",value:void 0},{kind:"field",decorators:[xi()],key:"_triggers",value:()=>[]},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{id:""}}},{kind:"method",key:"connectedCallback",value:function(){Ci(Ai(a.prototype),"connectedCallback",this).call(this);const t={callback:e=>this._automationUpdated(e)};e(this,"subscribe-automation-config",t),this._unsub=t.unsub}},{kind:"method",key:"disconnectedCallback",value:function(){Ci(Ai(a.prototype),"disconnectedCallback",this).call(this),this._unsub&&this._unsub()}},{kind:"method",key:"render",value:function(){const{id:e}=this.condition;return this._triggers.length?_`<ha-select
      .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.id")}
      .value=${e}
      @selected=${this._triggerPicked}
    >
      ${this._triggers.map((e=>_`
            <mwc-list-item .value=${e.id}> ${e.id} </mwc-list-item>
          `))}
    </ha-select>`:this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.no_triggers")}},{kind:"method",key:"_automationUpdated",value:function(e){this._triggers=null!=e&&e.trigger?Yo(e.trigger).filter((e=>e.id)):[]}},{kind:"method",key:"_triggerPicked",value:function(t){if(t.stopPropagation(),!t.target.value)return;const i=t.target.value;this.condition.id!==i&&e(this,"value-changed",{value:{...this.condition,id:i}})}}]}}),m);const Il=e=>"latitude"in e.attributes&&"longitude"in e.attributes;function El(e){return Il(e)&&"zone"!==Lo(e)}const zl=["zone"];v([x("ha-automation-condition-zone")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"condition",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",zone:""}}},{kind:"method",key:"render",value:function(){const{entity_id:e,zone:t}=this.condition;return _`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.entity")}
        .value=${e}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        allow-custom-entity
        .entityFilter=${El}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.zone")}
        .value=${t}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        allow-custom-entity
        .includeDomains=${zl}
      ></ha-entity-picker>
      <label id="eventlabel">
        ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.event")}
      </label>
    `}},{kind:"method",key:"_entityPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,entity_id:t.detail.value}})}},{kind:"method",key:"_zonePicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.condition,zone:t.detail.value}})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-entity-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const Sl=["device","and","or","not","state","numeric_state","sun","template","time","trigger","zone"];v([x("ha-automation-condition-editor")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"condition",value:void 0},{kind:"field",decorators:[f()],key:"yamlMode",value:()=>!1},{kind:"field",key:"_processedCondition",value:()=>Ii((e=>(e=>{if("condition"in e&&Array.isArray(e.condition))return{condition:"and",conditions:e.condition};for(const t of["and","or","not"])if(t in e)return{condition:t,conditions:e[t]};return e})(e)))},{kind:"field",key:"_processedTypes",value:()=>Ii((e=>Sl.map((t=>[t,e(`ui.panel.config.automation.editor.conditions.type.${t}.label`)])).sort(((e,t)=>Oa(e[1],t[1])))))},{kind:"method",key:"render",value:function(){const e=this._processedCondition(this.condition),t=Sl.indexOf(e.condition),i=this.yamlMode||-1===t;return _`
      ${i?_`
            ${-1===t?_`
                  ${this.hass.localize("ui.panel.config.automation.editor.conditions.unsupported_condition","condition",e.condition)}
                `:""}
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </h2>
            <ha-yaml-editor
              .hass=${this.hass}
              .defaultValue=${this.condition}
              @value-changed=${this._onYamlChange}
            ></ha-yaml-editor>
          `:_`
            <ha-select
              .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type_select")}
              .value=${e.condition}
              naturalMenuWidth
              @selected=${this._typeChanged}
            >
              ${this._processedTypes(this.hass.localize).map((([e,t])=>_`
                  <mwc-list-item .value=${e}>${t}</mwc-list-item>
                `))}
            </ha-select>

            <div>
              ${pa(`ha-automation-condition-${e.condition}`,{hass:this.hass,condition:e})}
            </div>
          `}
    `}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(!i)return;const a=customElements.get(`ha-automation-condition-${i}`);i!==this._processedCondition(this.condition).condition&&e(this,"value-changed",{value:{condition:i,...a.defaultConfig}})}},{kind:"method",key:"_onYamlChange",value:function(t){t.stopPropagation(),t.detail.isValid&&e(this,"value-changed",{value:t.detail.value,yaml:!0})}},{kind:"field",static:!0,key:"styles",value:()=>[zi,i`
      ha-select {
        margin-bottom: 24px;
      }
    `]}]}}),m),v([x("ha-automation-action-condition")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{condition:"state"}}},{kind:"method",key:"render",value:function(){return _`
      <ha-automation-condition-editor
        .condition=${this.action}
        .hass=${this.hass}
        @value-changed=${this._conditionChanged}
      ></ha-automation-condition-editor>
    `}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:t.detail.value})}}]}}),m);const Ll=new RegExp("{%|{{"),Tl=e=>{if(!e)return!1;if("string"==typeof e)return(e=>Ll.test(e))(e);if("object"==typeof e){return(Array.isArray(e)?e:Object.values(e)).some((e=>e&&Tl(e)))}return!1};v([x("ha-automation-action-delay")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[f()],key:"_timeData",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{delay:""}}},{kind:"method",key:"willUpdate",value:function(t){t.has("action")&&(this.action&&Tl(this.action)?e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))):this._timeData=gl(this.action.delay))}},{kind:"method",key:"render",value:function(){return _`<ha-duration-input
      .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.delay.delay")}
      .data=${this._timeData}
      enableMillisecond
      @value-changed=${this._valueChanged}
    ></ha-duration-input>`}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;i&&e(this,"value-changed",{value:{...this.action,delay:i}})}}]}}),m),v([x("ha-device-action-picker")],(function(e,t){return{F:class extends t{constructor(){super(Qr,Gr,(e=>({device_id:e||"",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action")}}]}}),al);let Pl=v([x("ha-automation-action-device_id")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"action",value:void 0},{kind:"field",decorators:[xi()],key:"_deviceId",value:void 0},{kind:"field",decorators:[xi()],key:"_capabilities",value:void 0},{kind:"field",key:"_origAction",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Ii(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.action.device_id;return _`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.label")}
      ></ha-device-picker>
      <ha-device-action-picker
        .value=${this.action}
        .deviceId=${t}
        @value-changed=${this._deviceActionPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.action")}
      ></ha-device-action-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?_`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.action,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.action&&(this._origAction=this.action)}},{kind:"method",key:"updated",value:function(e){const t=e.get("action");t&&!Zr(t,this.action)&&(this._deviceId=void 0,this._getCapabilities())}},{kind:"method",key:"_getCapabilities",value:async function(){var e,t;this._capabilities=this.action.domain?await(e=this.hass,t=this.action,e.callWS({type:"device_automation/action/capabilities",action:t})):void 0}},{kind:"method",key:"_devicePicked",value:function(t){t.stopPropagation(),this._deviceId=t.target.value,void 0===this._deviceId&&e(this,"value-changed",{value:n.defaultConfig})}},{kind:"method",key:"_deviceActionPicked",value:function(t){t.stopPropagation();let i=t.detail.value;this._origAction&&Zr(this._origAction,i)&&(i=this._origAction),e(this,"value-changed",{value:i})}},{kind:"method",key:"_extraFieldsChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,...t.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.actions.type.device_id.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-device-picker {
      display: block;
      margin-bottom: 16px;
    }
    ha-device-action-picker {
      display: block;
    }
  `}]}}),m);const Ol=(e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t,Ml=e=>_`<mwc-list-item twoline>
  <span>${e.name}</span>
  <span slot="secondary"
    >${e.name===e.service?"":e.service}</span
  >
</mwc-list-item>`;let Fl=v(null,(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[xi()],key:"_filter",value:void 0},{kind:"method",key:"render",value:function(){return _`
      <ha-combo-box
        .hass=${this.hass}
        .label=${this.hass.localize("ui.components.service-picker.service")}
        .filteredItems=${this._filteredServices(this.hass.localize,this.hass.services,this._filter)}
        .value=${this.value}
        .renderer=${Ml}
        item-value-path="service"
        item-label-path="name"
        allow-custom-value
        @filter-changed=${this._filterChanged}
        @value-changed=${this._valueChanged}
      ></ha-combo-box>
    `}},{kind:"field",key:"_services",value:()=>Ii(((e,t)=>{if(!t)return[];const i=[];return Object.keys(t).sort().forEach((a=>{const n=Object.keys(t[a]).sort();for(const o of n)i.push({service:`${a}.${o}`,name:`${Ol(e,a)}: ${t[a][o].name||o}`})})),i}))},{kind:"field",key:"_filteredServices",value(){return Ii(((e,t,i)=>{if(!t)return[];const a=this._services(e,t);return i?a.filter((e=>{var t;return e.service.toLowerCase().includes(i)||(null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(i))})):a}))}},{kind:"method",key:"_filterChanged",value:function(e){this._filter=e.detail.value.toLowerCase()}},{kind:"method",key:"_valueChanged",value:function(t){this.value=t.detail.value,e(this,"change"),e(this,"value-changed",{value:this.value})}}]}}),m);customElements.define("ha-service-picker",Fl),v([x("ha-automation-action-event")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[g("ha-yaml-editor",!0)],key:"_yamlEditor",value:void 0},{kind:"field",key:"_actionData",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"",event_data:{}}}},{kind:"method",key:"updated",value:function(e){e.has("action")&&(this._actionData&&this._actionData!==this.action.event_data&&this._yamlEditor&&this._yamlEditor.setValue(this.action.event_data),this._actionData=this.action.event_data)}},{kind:"method",key:"render",value:function(){const{event:e,event_data:t}=this.action;return _`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event")}
        .value=${e}
        @change=${this._eventChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event_data")}
        .name=${"event_data"}
        .defaultValue=${t}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
    `}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&(this._actionData=e.detail.value,hd(this,e))}},{kind:"method",key:"_eventChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,event:t.target.value}})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
      }
    `}}]}}),m),v([x("ha-automation-action-if")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{if:[{...fl.defaultConfig,condition:"device"}],then:[Pl.defaultConfig]}}},{kind:"method",key:"render",value:function(){const e=this.action;return _`
      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.if")}*:
      </h3>
      <ha-automation-condition
        .conditions=${e.if}
        .hass=${this.hass}
        @value-changed=${this._ifChanged}
      ></ha-automation-condition>

      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.then")}*:
      </h3>
      <ha-automation-action
        .actions=${e.then}
        @value-changed=${this._thenChanged}
        .hass=${this.hass}
      ></ha-automation-action>

      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.if.else")}:
      </h3>
      <ha-automation-action
        .actions=${e.else||[]}
        @value-changed=${this._elseChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_ifChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,if:i}})}},{kind:"method",key:"_thenChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,then:i}})}},{kind:"method",key:"_elseChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,else:i}})}},{kind:"get",static:!0,key:"styles",value:function(){return zi}}]}}),m),v([x("ha-automation-action-parallel")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{parallel:[Pl.defaultConfig]}}},{kind:"method",key:"render",value:function(){const e=this.action;return _`
      <ha-automation-action
        .actions=${e.parallel}
        @value-changed=${this._actionsChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_actionsChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{...this.action,parallel:i}})}},{kind:"get",static:!0,key:"styles",value:function(){return zi}}]}}),m);const Bl=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),Dl="browser",Vl={album:{icon:Bi,layout:"grid"},app:{icon:Di,layout:"grid"},artist:{icon:Vi,layout:"grid",show_list_images:!0},channel:{icon:Ni,thumbnail_ratio:"portrait",layout:"grid"},composer:{icon:Ri,layout:"grid",show_list_images:!0},contributing_artist:{icon:Vi,layout:"grid",show_list_images:!0},directory:{icon:ji,layout:"grid",show_list_images:!0},episode:{icon:Ni,layout:"grid",thumbnail_ratio:"portrait"},game:{icon:qi,layout:"grid",thumbnail_ratio:"portrait"},genre:{icon:Ui,layout:"grid",show_list_images:!0},image:{icon:Hi,layout:"grid"},movie:{icon:Gi,thumbnail_ratio:"portrait",layout:"grid"},music:{icon:Wi},playlist:{icon:Yi,layout:"grid",show_list_images:!0},podcast:{icon:Ki,layout:"grid"},season:{icon:Ni,layout:"grid",thumbnail_ratio:"portrait"},track:{icon:Zi},tv_show:{icon:Ni,layout:"grid",thumbnail_ratio:"portrait"},url:{icon:Qi},video:{icon:E,layout:"grid"}},Nl=(e,t,i,a)=>e.callWS({type:"media_player/browse_media",entity_id:t,media_content_id:i,media_content_type:a}),Rl=[{name:"media_content_id",required:!1,selector:{text:{}}},{name:"media_content_type",required:!1,selector:{text:{}}}];v([x("ha-selector-media")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"required",value:()=>!0},{kind:"field",decorators:[xi()],key:"_thumbnailUrl",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if(e.has("value")){var t,i,a,n;const s=null===(t=this.value)||void 0===t||null===(i=t.metadata)||void 0===i?void 0:i.thumbnail;if(s===(null===(a=e.get("value"))||void 0===a||null===(n=a.metadata)||void 0===n?void 0:n.thumbnail))return;if(s&&s.startsWith("/"))this._thumbnailUrl=void 0,Bl(this.hass,s).then((e=>{this._thumbnailUrl=e.path}));else if(s&&s.startsWith("https://brands.home-assistant.io")){var o;this._thumbnailUrl=ba({domain:xa(s),type:"icon",useFallback:!0,darkOptimized:null===(o=this.hass.themes)||void 0===o?void 0:o.darkMode})}else this._thumbnailUrl=s}}},{kind:"method",key:"render",value:function(){var e,t,i,a,n,o,s,r,l,d,c,u,h;const p=null!==(e=this.value)&&void 0!==e&&e.entity_id?this.hass.states[this.value.entity_id]:void 0,v=!(null!==(t=this.value)&&void 0!==t&&t.entity_id)||p&&((e,t)=>Fo(e.attributes,t))(p,131072);return _`<ha-entity-picker
        .hass=${this.hass}
        .value=${null===(i=this.value)||void 0===i?void 0:i.entity_id}
        .label=${this.label||this.hass.localize("ui.components.selectors.media.pick_media_player")}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .required=${this.required}
        include-domains='["media_player"]'
        allow-custom-entity
        @value-changed=${this._entityChanged}
      ></ha-entity-picker>
      ${v?_`<ha-card
            outlined
            @click=${this._pickMedia}
            class=${this.disabled||null===(a=this.value)||void 0===a||!a.entity_id?"disabled":""}
          >
            <div
              class="thumbnail ${Fi({portrait:!(null===(n=this.value)||void 0===n||null===(o=n.metadata)||void 0===o||!o.media_class)&&"portrait"===Vl[this.value.metadata.children_media_class||this.value.metadata.media_class].thumbnail_ratio})}"
            >
              ${null!==(s=this.value)&&void 0!==s&&null!==(r=s.metadata)&&void 0!==r&&r.thumbnail?_`
                    <div
                      class="${Fi({"centered-image":!!this.value.metadata.media_class&&["app","directory"].includes(this.value.metadata.media_class)})}
                        image"
                      style=${this._thumbnailUrl?`background-image: url(${this._thumbnailUrl});`:""}
                    ></div>
                  `:_`
                    <div class="icon-holder image">
                      <ha-svg-icon
                        class="folder"
                        .path=${null!==(l=this.value)&&void 0!==l&&l.media_content_id?null!==(d=this.value)&&void 0!==d&&null!==(c=d.metadata)&&void 0!==c&&c.media_class?Vl["directory"===this.value.metadata.media_class&&this.value.metadata.children_media_class||this.value.metadata.media_class].icon:Ji:Xi}
                      ></ha-svg-icon>
                    </div>
                  `}
            </div>
            <div class="title">
              ${null!==(u=this.value)&&void 0!==u&&u.media_content_id?(null===(h=this.value.metadata)||void 0===h?void 0:h.title)||this.value.media_content_id:this.hass.localize("ui.components.selectors.media.pick_media")}
            </div>
          </ha-card>`:_`<ha-alert>
              ${this.hass.localize("ui.components.selectors.media.browse_not_supported")}
            </ha-alert>
            <ha-form
              .hass=${this.hass}
              .data=${this.value}
              .schema=${Rl}
              .computeLabel=${this._computeLabelCallback}
            ></ha-form>`}`}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.components.selectors.media.${e.name}`)}},{kind:"method",key:"_entityChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{entity_id:t.detail.value,media_content_id:"",media_content_type:""}})}},{kind:"method",key:"_pickMedia",value:function(){var t,i,a;i=this,a={action:"pick",entityId:this.value.entity_id,navigateIds:null===(t=this.value.metadata)||void 0===t?void 0:t.navigateIds,mediaPickedCallback:t=>{var i;e(this,"value-changed",{value:{...this.value,media_content_id:t.item.media_content_id,media_content_type:t.item.media_content_type,metadata:{title:t.item.title,thumbnail:t.item.thumbnail,media_class:t.item.media_class,children_media_class:t.item.children_media_class,navigateIds:null===(i=t.navigateIds)||void 0===i?void 0:i.map((e=>({media_content_type:e.media_content_type,media_content_id:e.media_content_id})))}}})}},e(i,"show-dialog",{dialogTag:"dialog-media-player-browse",dialogImport:()=>import("./c.6e84564d.js").then((function(e){return e.a})),dialogParams:a})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-entity-picker {
        display: block;
        margin-bottom: 16px;
      }
      mwc-button {
        margin-top: 8px;
      }
      ha-alert {
        display: block;
        margin-bottom: 16px;
      }
      ha-card {
        position: relative;
        width: 200px;
        box-sizing: border-box;
        cursor: pointer;
      }
      ha-card.disabled {
        pointer-events: none;
        color: var(--disabled-text-color);
      }
      ha-card .thumbnail {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        transition: padding-bottom 0.1s ease-out;
        padding-bottom: 100%;
      }
      ha-card .thumbnail.portrait {
        padding-bottom: 150%;
      }
      ha-card .image {
        border-radius: 3px 3px 0 0;
      }
      .folder {
        --mdc-icon-size: calc(var(--media-browse-item-size, 175px) * 0.4);
      }
      .title {
        font-size: 16px;
        padding-top: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 16px;
        padding-left: 16px;
        padding-right: 4px;
        white-space: nowrap;
      }
      .image {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .centered-image {
        margin: 0 8px;
        background-size: contain;
      }
      .icon-holder {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}}]}}),m),v([x("ha-automation-action-play_media")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"media_player.play_media",target:{entity_id:""},data:{media_content_id:"",media_content_type:""},metadata:{}}}},{kind:"field",key:"_getSelectorValue",value:()=>Ii((e=>{var t,i,a;return{entity_id:(null===(t=e.target)||void 0===t?void 0:t.entity_id)||e.entity_id,media_content_id:null===(i=e.data)||void 0===i?void 0:i.media_content_id,media_content_type:null===(a=e.data)||void 0===a?void 0:a.media_content_type,metadata:e.metadata}}))},{kind:"method",key:"render",value:function(){return _`
      <ha-selector-media
        .hass=${this.hass}
        .value=${this._getSelectorValue(this.action)}
        @value-changed=${this._valueChanged}
      ></ha-selector-media>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{service:"media_player.play_media",target:{entity_id:t.detail.value.entity_id},data:{media_content_id:t.detail.value.media_content_id,media_content_type:t.detail.value.media_content_type},metadata:t.detail.value.metadata||{}}})}}]}}),m);const jl=["count","while","until"],ql=e=>jl.find((t=>t in e));v([x("ha-automation-action-repeat")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{repeat:{count:2,sequence:[]}}}},{kind:"method",key:"render",value:function(){const e=this.action.repeat,t=ql(e);return _`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type_select")}
        .value=${t}
        @selected=${this._typeChanged}
      >
        ${jl.map((e=>_`
            <mwc-list-item .value=${e}>
              ${this.hass.localize(`ui.panel.config.automation.editor.actions.type.repeat.type.${e}.label`)}
            </mwc-list-item>
          `))}
      </ha-select>
      ${"count"===t?_`
            <ha-textfield
              .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.count.label")}
              name="count"
              .value=${e.count||"0"}
              @change=${this._countChanged}
            ></ha-textfield>
          `:""}
      ${"while"===t?_` <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.while.conditions")}:
            </h3>
            <ha-automation-condition
              .conditions=${e.while||[]}
              .hass=${this.hass}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>`:""}
      ${"until"===t?_` <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.until.conditions")}:
            </h3>
            <ha-automation-condition
              .conditions=${e.until||[]}
              .hass=${this.hass}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>`:""}
      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.sequence")}:
      </h3>
      <ha-automation-action
        .actions=${e.sequence}
        @value-changed=${this._actionChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(!i||i===ql(this.action.repeat))return;e(this,"value-changed",{value:{repeat:{[i]:"count"===i?2:[],sequence:this.action.repeat.sequence}}})}},{kind:"method",key:"_conditionChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{repeat:{...this.action.repeat,[ql(this.action.repeat)]:i}}})}},{kind:"method",key:"_actionChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:{repeat:{...this.action.repeat,sequence:i}}})}},{kind:"method",key:"_countChanged",value:function(t){const i=t.target.value;this.action.repeat.count!==i&&e(this,"value-changed",{value:{repeat:{...this.action.repeat,count:i}}})}},{kind:"get",static:!0,key:"styles",value:function(){return[zi,i`
        ha-textfield {
          margin-top: 16px;
        }
      `]}}]}}),m);const Ul=e=>"all"===e||(e=>e.includes("."))(e),Hl=(e,t)=>`https://${e.config.version.includes("b")?"rc":e.config.version.includes("dev")?"next":"www"}.home-assistant.io${t}`,Gl=e=>e.selector&&!e.required&&!("boolean"in e.selector&&e.default);v([x("ha-service-control")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[xi()],key:"_value",value:void 0},{kind:"field",decorators:[f({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"showAdvanced",value:void 0},{kind:"field",decorators:[xi()],key:"_checkedKeys",value:()=>new Set},{kind:"field",decorators:[xi()],key:"_manifest",value:void 0},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"willUpdate",value:function(t){var i,a,n,o,s,r,l,d,c,u,h;if(!t.has("value"))return;const p=t.get("value");(null==p?void 0:p.service)!==(null===(i=this.value)||void 0===i?void 0:i.service)&&(this._checkedKeys=new Set);const v=this._getServiceInfo(null===(a=this.value)||void 0===a?void 0:a.service,this.hass.services);var m;null!==(n=this.value)&&void 0!==n&&n.service?null!=p&&p.service&&hn(this.value.service)===hn(p.service)||this._fetchManifest(hn(null===(m=this.value)||void 0===m?void 0:m.service)):this._manifest=void 0;if(v&&"target"in v&&(null!==(o=this.value)&&void 0!==o&&null!==(s=o.data)&&void 0!==s&&s.entity_id||null!==(r=this.value)&&void 0!==r&&null!==(l=r.data)&&void 0!==l&&l.area_id||null!==(d=this.value)&&void 0!==d&&null!==(c=d.data)&&void 0!==c&&c.device_id)){var f,g,_;const e={...this.value.target};!this.value.data.entity_id||null!==(f=this.value.target)&&void 0!==f&&f.entity_id||(e.entity_id=this.value.data.entity_id),!this.value.data.area_id||null!==(g=this.value.target)&&void 0!==g&&g.area_id||(e.area_id=this.value.data.area_id),!this.value.data.device_id||null!==(_=this.value.target)&&void 0!==_&&_.device_id||(e.device_id=this.value.data.device_id),this._value={...this.value,target:e,data:{...this.value.data}},delete this._value.data.entity_id,delete this._value.data.device_id,delete this._value.data.area_id}else this._value=this.value;if((null==p?void 0:p.service)!==(null===(u=this.value)||void 0===u?void 0:u.service)){let t=!1;this._value&&v&&(this._value.data||(this._value.data={}),v.fields.forEach((e=>{e.selector&&e.required&&void 0===e.default&&"boolean"in e.selector&&void 0===this._value.data[e.key]&&(t=!0,this._value.data[e.key]=!1)}))),t&&e(this,"value-changed",{value:{...this._value}})}if(null!==(h=this._value)&&void 0!==h&&h.data){const e=this._yamlEditor;e&&e.value!==this._value.data&&e.setValue(this._value.data)}}},{kind:"field",key:"_getServiceInfo",value:()=>Ii(((e,t)=>{if(!e||!t)return;const i=hn(e),a=sn(e);if(!(i in t))return;if(!(a in t[i]))return;const n=Object.entries(t[i][a].fields).map((([e,t])=>({key:e,...t,selector:t.selector})));return{...t[i][a],fields:n,hasSelector:n.length?n.filter((e=>e.selector)).map((e=>e.key)):[]}}))},{kind:"method",key:"render",value:function(){var e,t,i,a,n,o,s;const r=this._getServiceInfo(null===(e=this._value)||void 0===e?void 0:e.service,this.hass.services),l=(null==r?void 0:r.fields.length)&&!r.hasSelector.length||r&&Object.keys((null===(t=this._value)||void 0===t?void 0:t.data)||{}).some((e=>!r.hasSelector.includes(e))),d=l&&(null==r?void 0:r.fields.find((e=>"entity_id"===e.key))),c=Boolean(!l&&(null==r?void 0:r.fields.some((e=>Gl(e)))));return _`<ha-service-picker
        .hass=${this.hass}
        .value=${null===(i=this._value)||void 0===i?void 0:i.service}
        @value-changed=${this._serviceChanged}
      ></ha-service-picker>
      <div class="description">
        <p>${null==r?void 0:r.description}</p>
        ${this._manifest?_` <a
              href=${this._manifest.is_built_in?Hl(this.hass,`/integrations/${this._manifest.domain}`):this._manifest.documentation}
              title=${this.hass.localize("ui.components.service-control.integration_doc")}
              target="_blank"
              rel="noreferrer"
            >
              <ha-icon-button
                .path=${ea}
                class="help-icon"
              ></ha-icon-button>
            </a>`:""}
      </div>
      ${r&&"target"in r?_`<ha-settings-row .narrow=${this.narrow}>
            ${c?_`<div slot="prefix" class="checkbox-spacer"></div>`:""}
            <span slot="heading"
              >${this.hass.localize("ui.components.service-control.target")}</span
            >
            <span slot="description"
              >${this.hass.localize("ui.components.service-control.target_description")}</span
            ><ha-selector
              .hass=${this.hass}
              .selector=${r.target?{target:r.target}:{target:{}}}
              @value-changed=${this._targetChanged}
              .value=${null===(a=this._value)||void 0===a?void 0:a.target}
            ></ha-selector
          ></ha-settings-row>`:d?_`<ha-entity-picker
            .hass=${this.hass}
            .value=${null===(n=this._value)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.entity_id}
            .label=${d.description}
            @value-changed=${this._entityPicked}
            allow-custom-entity
          ></ha-entity-picker>`:""}
      ${l?_`<ha-yaml-editor
            .hass=${this.hass}
            .label=${this.hass.localize("ui.components.service-control.service_data")}
            .name=${"data"}
            .defaultValue=${null===(s=this._value)||void 0===s?void 0:s.data}
            @value-changed=${this._dataChanged}
          ></ha-yaml-editor>`:null==r?void 0:r.fields.map((e=>{var t,i,a,n;const o=Gl(e);return e.selector&&(!e.advanced||this.showAdvanced||null!==(t=this._value)&&void 0!==t&&t.data&&void 0!==this._value.data[e.key])?_`<ha-settings-row .narrow=${this.narrow}>
                  ${o?_`<ha-checkbox
                        .key=${e.key}
                        .checked=${this._checkedKeys.has(e.key)||(null===(i=this._value)||void 0===i?void 0:i.data)&&void 0!==this._value.data[e.key]}
                        @change=${this._checkboxChanged}
                        slot="prefix"
                      ></ha-checkbox>`:c?_`<div slot="prefix" class="checkbox-spacer"></div>`:""}
                  <span slot="heading">${e.name||e.key}</span>
                  <span slot="description">${null==e?void 0:e.description}</span>
                  <ha-selector
                    .disabled=${o&&!this._checkedKeys.has(e.key)&&(!(null!==(a=this._value)&&void 0!==a&&a.data)||void 0===this._value.data[e.key])}
                    .hass=${this.hass}
                    .selector=${e.selector}
                    .key=${e.key}
                    @value-changed=${this._serviceDataChanged}
                    .value=${null!==(n=this._value)&&void 0!==n&&n.data&&void 0!==this._value.data[e.key]?this._value.data[e.key]:e.default}
                  ></ha-selector>
                </ha-settings-row>`:""}))}`}},{kind:"method",key:"_checkboxChanged",value:function(t){const i=t.currentTarget.checked,a=t.currentTarget.key;let n;if(i){var o,s,r;this._checkedKeys.add(a);const e=null===(o=this._getServiceInfo(null===(r=this._value)||void 0===r?void 0:r.service,this.hass.services))||void 0===o||null===(s=o.fields.find((e=>e.key===a)))||void 0===s?void 0:s.default;var l;if(e)n={...null===(l=this._value)||void 0===l?void 0:l.data,[a]:e}}else{var d;this._checkedKeys.delete(a),n={...null===(d=this._value)||void 0===d?void 0:d.data},delete n[a]}n&&e(this,"value-changed",{value:{...this._value,data:n}}),this.requestUpdate("_checkedKeys")}},{kind:"method",key:"_serviceChanged",value:function(t){var i;t.stopPropagation(),t.detail.value!==(null===(i=this._value)||void 0===i?void 0:i.service)&&e(this,"value-changed",{value:{service:t.detail.value||""}})}},{kind:"method",key:"_entityPicked",value:function(t){var i,a,n;t.stopPropagation();const o=t.detail.value;if((null===(i=this._value)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.entity_id)===o)return;let s;var r;!o&&null!==(n=this._value)&&void 0!==n&&n.data?(s={...this._value},delete s.data.entity_id):s={...this._value,data:{...null===(r=this._value)||void 0===r?void 0:r.data,entity_id:t.detail.value}};e(this,"value-changed",{value:s})}},{kind:"method",key:"_targetChanged",value:function(t){var i;t.stopPropagation();const a=t.detail.value;if((null===(i=this._value)||void 0===i?void 0:i.target)===a)return;let n;a?n={...this._value,target:t.detail.value}:(n={...this._value},delete n.target),e(this,"value-changed",{value:n})}},{kind:"method",key:"_serviceDataChanged",value:function(t){var i,a,n,o,s;t.stopPropagation();const r=t.currentTarget.key,l=t.detail.value;if((null===(i=this._value)||void 0===i||null===(a=i.data)||void 0===a?void 0:a[r])===l||(null===(n=this._value)||void 0===n||null===(o=n.data)||void 0===o||!o[r])&&(""===l||void 0===l))return;const d={...null===(s=this._value)||void 0===s?void 0:s.data,[r]:l};""!==l&&void 0!==l||delete d[r],e(this,"value-changed",{value:{...this._value,data:d}})}},{kind:"method",key:"_dataChanged",value:function(t){t.stopPropagation(),t.detail.isValid&&e(this,"value-changed",{value:{...this._value,data:t.detail.value}})}},{kind:"method",key:"_fetchManifest",value:async function(e){this._manifest=void 0;try{this._manifest=await((e,t)=>e.callWS({type:"manifest/get",integration:t}))(this.hass,e)}catch(e){}}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-settings-row {
        padding: var(--service-control-padding, 0 16px);
      }
      ha-settings-row {
        --paper-time-input-justify-content: flex-end;
        --settings-row-content-width: 100%;
        --settings-row-prefix-display: contents;
        border-top: var(
          --service-control-items-border-top,
          1px solid var(--divider-color)
        );
      }
      ha-service-picker,
      ha-entity-picker,
      ha-yaml-editor {
        display: block;
        margin: var(--service-control-padding, 0 16px);
      }
      ha-yaml-editor {
        padding: 16px 0;
      }
      p {
        margin: var(--service-control-padding, 0 16px);
        padding: 16px 0;
      }
      .checkbox-spacer {
        width: 32px;
      }
      ha-checkbox {
        margin-left: -16px;
      }
      .help-icon {
        color: var(--secondary-text-color);
      }
      .description {
        justify-content: space-between;
        display: flex;
        align-items: center;
        padding-right: 2px;
      }
    `}}]}}),m);const Wl=Ja({service:en(tn()),entity_id:en((Yl=tn(),Kl="entity ID (domain.entity or all)",Zl=Ul,new ja({...Yl,*refiner(e,t){yield*Yl.refiner(e,t);const i=Na(Zl(e,t),t,Yl,e);for(const e of i)yield{...e,refinement:Kl}}}))),target:en(Ya()),data:en(Ya())});var Yl,Kl,Zl;v([x("ha-automation-action-service")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[xi()],key:"_action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{service:"",data:{}}}},{kind:"method",key:"willUpdate",value:function(t){if(t.has("action")){try{qa(this.action,Wl)}catch(t){return void e(this,"ui-mode-not-available",t)}this.action&&Tl(this.action)?e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))):this.action.entity_id?(this._action={...this.action,data:{...this.action.data,entity_id:this.action.entity_id}},delete this._action.entity_id):this._action=this.action}}},{kind:"method",key:"render",value:function(){var e;return _`
      <ha-service-control
        .narrow=${this.narrow}
        .hass=${this.hass}
        .value=${this._action}
        .showAdvanced=${null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced}
        @value-changed=${this._actionChanged}
      ></ha-service-control>
    `}},{kind:"method",key:"_actionChanged",value:function(e){e.detail.value===this._action&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-service-control {
        display: block;
        margin: 0 -16px;
      }
    `}}]}}),m),v([x("ha-automation-action-stop")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{stop:""}}},{kind:"method",key:"render",value:function(){const{error:e,stop:t}=this.action;return _`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.stop.stop")}
        .value=${t}
        @change=${this._stopChanged}
      ></ha-textfield>
      <ha-formfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.stop.error")}
      >
        <ha-switch
          .checked=${null!=e&&e}
          @change=${this._errorChanged}
        ></ha-switch>
      </ha-formfield>
    `}},{kind:"method",key:"_stopChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,stop:t.target.value}})}},{kind:"method",key:"_errorChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.action,error:t.target.checked}})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
        margin-bottom: 24px;
      }
    `}}]}}),m),v([x("ha-automation-trigger-calendar")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"entity_id",required:!0,selector:{entity:{domain:"calendar"}}},{name:"event",type:"select",required:!0,options:[["start",e("ui.panel.config.automation.editor.triggers.type.calendar.start")],["end",e("ui.panel.config.automation.editor.triggers.type.calendar.end")]]},{name:"offset",selector:{duration:{}}},{name:"offset_type",type:"select",required:!0,options:[["before",e("ui.panel.config.automation.editor.triggers.type.calendar.before")],["after",e("ui.panel.config.automation.editor.triggers.type.calendar.after")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"start",offset:0}}},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize),t=this.trigger.offset,i=gl(t);let a="after";("object"==typeof t&&i.hours<0||"string"==typeof t&&t.startsWith("-"))&&(i.hours=Math.abs(i.hours),a="before");const n={...this.trigger,offset:i,offset_type:a};return _`
      <ha-form
        .schema=${e}
        .data=${n}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value.offset,a="before"===t.detail.value.offset_type?"-":"",n={...t.detail.value,offset:`${a}${i.hours}:${i.minutes}:${i.seconds}`};delete n.offset_type,e(this,"value-changed",{value:n})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.calendar.${e.name}`)}}]}}),m),v([x("ha-device-trigger-picker")],(function(e,t){return{F:class extends t{constructor(){super(Jr,Yr,(e=>({device_id:e||"",platform:"device",domain:"",entity_id:""}))),e(this)}},d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.triggers.no_triggers")}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function(){return this.hass.localize("ui.panel.config.devices.automation.triggers.unknown_trigger")}}]}}),al);let Ql=v([x("ha-automation-trigger-device")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Object})],key:"trigger",value:void 0},{kind:"field",decorators:[xi()],key:"_deviceId",value:void 0},{kind:"field",decorators:[xi()],key:"_capabilities",value:void 0},{kind:"field",key:"_origTrigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{device_id:"",domain:"",entity_id:""}}},{kind:"field",key:"_extraFieldsData",value:()=>Ii(((e,t)=>{const i={};return t.extra_fields.forEach((t=>{void 0!==e[t.name]&&(i[t.name]=e[t.name])})),i}))},{kind:"method",key:"render",value:function(){var e;const t=this._deviceId||this.trigger.device_id;return _`
      <ha-device-picker
        .value=${t}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.label")}
      ></ha-device-picker>
      <ha-device-trigger-picker
        .value=${this.trigger}
        .deviceId=${t}
        @value-changed=${this._deviceTriggerPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.trigger")}
      ></ha-device-trigger-picker>
      ${null!==(e=this._capabilities)&&void 0!==e&&e.extra_fields?_`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.trigger,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `}},{kind:"method",key:"firstUpdated",value:function(){this._capabilities||this._getCapabilities(),this.trigger&&(this._origTrigger=this.trigger)}},{kind:"method",key:"updated",value:function(e){if(!e.has("trigger"))return;const t=e.get("trigger");t&&!Zr(t,this.trigger)&&this._getCapabilities()}},{kind:"method",key:"_getCapabilities",value:async function(){const e=this.trigger;this._capabilities=e.domain?await((e,t)=>e.callWS({type:"device_automation/trigger/capabilities",trigger:t}))(this.hass,e):void 0}},{kind:"method",key:"_devicePicked",value:function(t){t.stopPropagation(),this._deviceId=t.target.value,void 0===this._deviceId&&e(this,"value-changed",{value:{...n.defaultConfig,platform:"device"}})}},{kind:"method",key:"_deviceTriggerPicked",value:function(t){t.stopPropagation();let i=t.detail.value;this._origTrigger&&Zr(this._origTrigger,i)&&(i=this._origTrigger),this.trigger.id&&(i.id=this.trigger.id),e(this,"value-changed",{value:i})}},{kind:"method",key:"_extraFieldsChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,...t.detail.value}})}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function(e){return t=>e(`ui.panel.config.automation.editor.triggers.type.device.extra_fields.${t.name}`)||t.name}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const Xl={},Jl=h(class extends d{constructor(){super(...arguments),this.nt=Xl}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return ta}else if(this.nt===t)return ta;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,i)}}),ed=async e=>e.callWS({type:"config/auth/list"});v([x("ha-user-badge")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"user",value:void 0},{kind:"field",decorators:[xi()],key:"_personPicture",value:void 0},{kind:"field",key:"_personEntityId",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if(Ci(Ai(a.prototype),"willUpdate",this).call(this,e),e.has("user"))return void this._getPersonPicture();const t=e.get("hass");if(this._personEntityId&&t&&this.hass.states[this._personEntityId]!==t.states[this._personEntityId]){const e=this.hass.states[this._personEntityId];e?this._personPicture=e.attributes.entity_picture:this._getPersonPicture()}else!this._personEntityId&&t&&this._getPersonPicture()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.user)return _``;const e=this._personPicture;if(e)return _`<div
        style=${$i({backgroundImage:`url(${e})`})}
        class="picture"
      ></div>`;const t=(e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?")(this.user.name);return _`<div
      class="initials ${Fi({long:t.length>2})}"
    >
      ${t}
    </div>`}},{kind:"method",key:"_getPersonPicture",value:function(){if(this._personEntityId=void 0,this._personPicture=void 0,this.hass&&this.user)for(const e of Object.values(this.hass.states))if(e.attributes.user_id===this.user.id&&"person"===Lo(e)){this._personEntityId=e.entity_id,this._personPicture=e.attributes.entity_picture;break}}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: contents;
      }
      .picture {
        width: 40px;
        height: 40px;
        background-size: cover;
        border-radius: 50%;
      }
      .initials {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--text-light-primary-color, var(--primary-text-color));
        overflow: hidden;
      }
      .initials.long {
        font-size: 80%;
      }
    `}}]}}),m);let td=v(null,(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"noUserLabel",value:void 0},{kind:"field",decorators:[f()],key:"value",value:()=>""},{kind:"field",decorators:[f()],key:"users",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",key:"_sortedUsers",value:()=>Ii((e=>e?e.filter((e=>!e.system_generated)).sort(((e,t)=>Oa(e.name,t.name))):[]))},{kind:"method",key:"render",value:function(){var e,t;return _`
      <ha-select
        .label=${this.label}
        .disabled=${this.disabled}
        .value=${this.value}
        @selected=${this._userChanged}
      >
        ${0===(null===(e=this.users)||void 0===e?void 0:e.length)?_`<mwc-list-item value="">
              ${this.noUserLabel||(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.components.user-picker.no_user"))}
            </mwc-list-item>`:""}
        ${this._sortedUsers(this.users).map((e=>_`
            <mwc-list-item graphic="avatar" .value=${e.id}>
              <ha-user-badge
                .hass=${this.hass}
                .user=${e}
                slot="graphic"
              ></ha-user-badge>
              ${e.name}
            </mwc-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"firstUpdated",value:function(e){Ci(Ai(n.prototype),"firstUpdated",this).call(this,e),void 0===this.users&&ed(this.hass).then((e=>{this.users=e}))}},{kind:"method",key:"_userChanged",value:function(t){const i=t.target.value;i!==this.value&&(this.value=i,setTimeout((()=>{e(this,"value-changed",{value:i}),e(this,"change")}),0))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: inline-block;
      }
      mwc-list {
        display: block;
      }
    `}}]}}),m);customElements.define("ha-user-picker",td),v([x("ha-users-picker")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f({attribute:"picked-user-label"})],key:"pickedUserLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-user-label"})],key:"pickUserLabel",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"users",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){Ci(Ai(n.prototype),"firstUpdated",this).call(this,e),void 0===this.users&&ed(this.hass).then((e=>{this.users=e}))}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.users)return _``;const e=this._notSelectedUsers(this.users,this.value);return _`
      ${Jl([e],(()=>{var t;return null===(t=this.value)||void 0===t?void 0:t.map(((t,i)=>_`
            <div>
              <ha-user-picker
                .label=${this.pickedUserLabel}
                .noUserLabel=${this.hass.localize("ui.components.user-picker.remove_user")}
                .index=${i}
                .hass=${this.hass}
                .value=${t}
                .users=${this._notSelectedUsersAndSelected(t,this.users,e)}
                @value-changed=${this._userChanged}
              ></ha-user-picker>
              <ha-icon-button
                .userId=${t}
                .label=${this.hass.localize("ui.components.user-picker.remove_user")}
                .path=${y}
                @click=${this._removeUser}
              >
                ></ha-icon-button
              >
            </div>
          `))}))}
      <ha-user-picker
        .label=${this.pickUserLabel||this.hass.localize("ui.components.user-picker.add_user")}
        .hass=${this.hass}
        .users=${e}
        .disabled=${!(null!=e&&e.length)}
        @value-changed=${this._addUser}
      ></ha-user-picker>
    `}},{kind:"field",key:"_notSelectedUsers",value:()=>Ii(((e,t)=>t?null==e?void 0:e.filter((e=>!e.system_generated&&!t.includes(e.id))):null==e?void 0:e.filter((e=>!e.system_generated))))},{kind:"field",key:"_notSelectedUsersAndSelected",value:()=>(e,t,i)=>{const a=null==t?void 0:t.find((t=>t.id===e));return a?i?[...i,a]:[a]:i}},{kind:"get",key:"_currentUsers",value:function(){return this.value||[]}},{kind:"method",key:"_updateUsers",value:async function(t){this.value=t,e(this,"value-changed",{value:t})}},{kind:"method",key:"_userChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.index,i=e.detail.value,a=[...this._currentUsers];""===i?a.splice(t,1):a.splice(t,1,i),this._updateUsers(a)}},{kind:"method",key:"_addUser",value:async function(e){e.stopPropagation();const t=e.detail.value;if(e.currentTarget.value="",!t)return;const i=this._currentUsers;i.includes(t)||this._updateUsers([...i,t])}},{kind:"method",key:"_removeUser",value:function(e){const t=e.currentTarget.userId;this._updateUsers(this._currentUsers.filter((e=>e!==t)))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
      }
      div {
        display: flex;
        align-items: center;
      }
    `}}]}}),m),v([x("ha-automation-trigger-event")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event_type:""}}},{kind:"method",key:"render",value:function(){const{event_type:e,event_data:t,context:i}=this.trigger;return _`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_type")}
        name="event_type"
        .value=${e}
        @change=${this._valueChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_data")}
        .name=${"event_data"}
        .defaultValue=${t}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
      <br />
      ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_users")}
      <ha-users-picker
        .pickedUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_picked")}
        .pickUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_pick")}
        .hass=${this.hass}
        .value=${this._wrapUsersInArray(null==i?void 0:i.user_id)}
        @value-changed=${this._usersChanged}
      ></ha-users-picker>
    `}},{kind:"method",key:"_wrapUsersInArray",value:function(e){return e?"string"==typeof e?[e]:e:[]}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),ld(this,e)}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&ld(this,e)}},{kind:"method",key:"_usersChanged",value:function(t){t.stopPropagation();const i={...this.trigger};!t.detail.value.length&&i.context?delete i.context.user_id:(i.context||(i.context={}),i.context.user_id=t.detail.value),e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
      }
    `}}]}}),m),v([x("ha-automation-trigger-geo_location")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"source",selector:{text:{}}},{name:"zone",selector:{entity:{domain:"zone"}}},{name:"event",type:"select",required:!0,options:[["enter",e("ui.panel.config.automation.editor.triggers.type.geo_location.enter")],["leave",e("ui.panel.config.automation.editor.triggers.type.geo_location.leave")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{source:"",zone:"",event:"enter"}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.geo_location.${e.name}`)}}]}}),m),v([x("ha-automation-trigger-homeassistant")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"event",type:"select",required:!0,options:[["start",e("ui.panel.config.automation.editor.triggers.type.homeassistant.start")],["shutdown",e("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown")]]}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"start"}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.geo_location.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>i`
    label {
      display: flex;
      align-items: center;
    }
  `}]}}),m);const id=[{name:"topic",required:!0,selector:{text:{}}},{name:"payload",selector:{text:{}}}];v([x("ha-automation-trigger-mqtt")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{topic:""}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .schema=${id}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.mqtt.${e.name}`)}}]}}),m),v([x("ha-automation-trigger-numeric_state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"entity_id",required:!0,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"above",selector:{text:{}}},{name:"below",selector:{text:{}}},{name:"value_template",selector:{text:{multiline:!0}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"willUpdate",value:function(t){t.has("trigger")&&this.trigger&&Tl(this.trigger)&&e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support")))}},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:""}}},{kind:"method",key:"render",value:function(){const e=gl(this.trigger.for),t={...this.trigger,for:e},i=this._schema(this.trigger.entity_id);return _`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize("ui.panel.config.automation.editor.triggers.type.state.for");default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${e.name}`)}}}}]}}),m);const ad=Ga(_l,Ja({platform:Qa("state"),entity_id:en(an([tn(),Ka(tn())])),attribute:en(tn()),from:en(tn()),to:en(tn()),for:en(an([tn(),yl]))}));v([x("ha-automation-trigger-state")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:[]}}},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"entity_id",required:!0,selector:{entity:{multiple:!0}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}},{name:"for",selector:{duration:{}}}]))},{kind:"method",key:"shouldUpdate",value:function(t){if(!t.has("trigger"))return!0;if(this.trigger.for&&"object"==typeof this.trigger.for&&0===this.trigger.for.milliseconds&&delete this.trigger.for.milliseconds,this.trigger&&Tl(this.trigger))return e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support"))),!1;try{qa(this.trigger,ad)}catch(t){return e(this,"ui-mode-not-available",t),!1}return!0}},{kind:"method",key:"render",value:function(){const e=gl(this.trigger.for),t={...this.trigger,entity_id:Yo(this.trigger.entity_id),for:e},i=this._schema(this.trigger.entity_id);return _`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize("entity_id"===e.name?"ui.components.entity.entity-picker.entity":`ui.panel.config.automation.editor.triggers.type.state.${e.name}`)}}]}}),m),v([x("ha-automation-trigger-sun")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value:()=>Ii((e=>[{name:"event",type:"select",required:!0,options:[["sunrise",e("ui.panel.config.automation.editor.triggers.type.sun.sunrise")],["sunset",e("ui.panel.config.automation.editor.triggers.type.sun.sunset")]]},{name:"offset",selector:{text:{}}}]))},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{event:"sunrise",offset:0}}},{kind:"method",key:"render",value:function(){const e=this._schema(this.hass.localize);return _`
      <ha-form
        .schema=${e}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.sun.${e.name}`)}}]}}),m);v([x("ha-automation-trigger-tag")],(function(t,i){class a extends i{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[xi()],key:"_tags",value:()=>[]},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{tag_id:""}}},{kind:"method",key:"firstUpdated",value:function(e){Ci(Ai(a.prototype),"firstUpdated",this).call(this,e),this._fetchTags()}},{kind:"method",key:"render",value:function(){const{tag_id:e}=this.trigger;return _`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.tag.label")}
        .disabled=${0===this._tags.length}
        .value=${e}
        @selected=${this._tagChanged}
      >
        ${this._tags.map((e=>_`
            <mwc-list-item .value=${e.id}>
              ${e.name||e.id}
            </mwc-list-item>
          `))}
      </ha-select>
    `}},{kind:"method",key:"_fetchTags",value:async function(){this._tags=await(async e=>e.callWS({type:"tag/list"}))(this.hass),this._tags.sort(((e,t)=>Ma(e.name||e.id,t.name||t.id)))}},{kind:"method",key:"_tagChanged",value:function(t){e(this,"value-changed",{value:{...this.trigger,tag_id:t.target.value}})}}]}}),m),v([x("ha-automation-trigger-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{value_template:""}}},{kind:"method",key:"render",value:function(){const{value_template:e}=this.trigger;return _`
      <p>
        ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.template.value_template")}
        *
      </p>
      <ha-code-editor
        .name=${"value_template"}
        mode="jinja2"
        .hass=${this.hass}
        .value=${e}
        autocomplete-entities
        @value-changed=${this._valueChanged}
        dir="ltr"
      ></ha-code-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(e){ld(this,e)}}]}}),m),v([x("ha-automation-trigger-time")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"trigger",value:void 0},{kind:"field",decorators:[xi()],key:"_inputMode",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{at:""}}},{kind:"field",key:"_schema",value:()=>Ii(((e,t)=>{const i=t?{entity:{domain:"input_datetime"}}:{time:{}};return[{name:"mode",type:"select",required:!0,options:[["value",e("ui.panel.config.automation.editor.triggers.type.time.type_value")],["input",e("ui.panel.config.automation.editor.triggers.type.time.type_input")]]},{name:"at",selector:i}]}))},{kind:"method",key:"willUpdate",value:function(t){t.has("trigger")&&this.trigger&&Array.isArray(this.trigger.at)&&e(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.editor_not_supported")))}},{kind:"method",key:"render",value:function(){var e;const t=this.trigger.at;if(Array.isArray(t))return _``;const i=null!==(e=this._inputMode)&&void 0!==e?e:(null==t?void 0:t.startsWith("input_datetime."))||(null==t?void 0:t.startsWith("sensor.")),a=this._schema(this.hass.localize,i),n={mode:i?"input":"value",...this.trigger};return _`
      <ha-form
        .hass=${this.hass}
        .data=${n}
        .schema=${a}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;this._inputMode="input"===i.mode,delete i.mode,Object.keys(i).forEach((e=>void 0===i[e]||""===i[e]?delete i[e]:{})),e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time.${e.name}`)}}]}}),m);const nd=[{name:"hours",selector:{text:{}}},{name:"minutes",selector:{text:{}}},{name:"seconds",selector:{text:{}}}];v([x("ha-automation-trigger-time_pattern")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .hass=${this.hass}
        .schema=${nd}
        .data=${this.trigger}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation();const i=t.detail.value;e(this,"value-changed",{value:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time_pattern.${e.name}`)}}]}}),m);function od(e){return Il(e)&&"zone"!==Lo(e)}v([x("ha-automation-trigger-webhook")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[xi()],key:"_config",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{webhook_id:""}}},{kind:"method",key:"connectedCallback",value:function(){Ci(Ai(n.prototype),"connectedCallback",this).call(this);const t={callback:e=>{this._config=e}};e(this,"subscribe-automation-config",t),this._unsub=t.unsub}},{kind:"method",key:"disconnectedCallback",value:function(){Ci(Ai(n.prototype),"disconnectedCallback",this).call(this),this._unsub&&this._unsub()}},{kind:"method",key:"_generateWebhookId",value:function(){var e;const t=crypto.getRandomValues(new Uint8Array(18)),i=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_"),a=((e,t="_")=>{const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",a=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${t}${t}${t}${t}${t}${t}`,n=new RegExp(i.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(n,(e=>a.charAt(i.indexOf(e)))).replace(/&/g,`${t}and${t}`).replace(/[^\w-]+/g,"").replace(/-/g,t).replace(new RegExp(`(${t})\\1+`,"g"),"$1").replace(new RegExp(`^${t}+`),"").replace(new RegExp(`${t}+$`),"")})((null===(e=this._config)||void 0===e?void 0:e.alias)||"","-");return`${a}-${i}`}},{kind:"method",key:"willUpdate",value:function(e){Ci(Ai(n.prototype),"willUpdate",this).call(this,e),e.has("trigger")&&""===this.trigger.webhook_id&&(this.trigger.webhook_id=this._generateWebhookId())}},{kind:"method",key:"render",value:function(){const{webhook_id:e}=this.trigger;return _`
      <ha-textfield
        name="webhook_id"
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id")}
        .helper=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id_helper")}
        iconTrailing
        .value=${e||""}
        @input=${this._valueChanged}
      >
        <ha-icon-button
          @click=${this._copyUrl}
          slot="trailingIcon"
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.copy_url")}
          .path=${ia}
        ></ha-icon-button>
      </ha-textfield>
    `}},{kind:"method",key:"_valueChanged",value:function(e){ld(this,e)}},{kind:"method",key:"_copyUrl",value:async function(e){const t=e.target.parentElement,i=this.hass.hassUrl(`/api/webhook/${t.value}`);await(async e=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})(i),un(this,{message:this.hass.localize("ui.common.copied_clipboard")})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-textfield {
      display: block;
    }

    ha-textfield > ha-icon-button {
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 18px;
    }
  `}]}}),m);const sd=["zone"];v([x("ha-automation-trigger-zone")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{entity_id:"",zone:"",event:"enter"}}},{kind:"method",key:"render",value:function(){const{entity_id:e,zone:t,event:i}=this.trigger;return _`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.entity")}
        .value=${e}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        allow-custom-entity
        .entityFilter=${od}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.zone")}
        .value=${t}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        allow-custom-entity
        .includeDomains=${sd}
      ></ha-entity-picker>

      <label>
        ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.event")}
        <ha-formfield
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.enter")}
        >
          <ha-radio
            name="event"
            value="enter"
            .checked=${"enter"===i}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
        <ha-formfield
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.leave")}
        >
          <ha-radio
            name="event"
            value="leave"
            .checked=${"leave"===i}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
      </label>
    `}},{kind:"method",key:"_entityPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,entity_id:t.detail.value}})}},{kind:"method",key:"_zonePicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,zone:t.detail.value}})}},{kind:"method",key:"_radioGroupPicked",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:{...this.trigger,event:t.target.value}})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    label {
      display: flex;
      align-items: center;
    }
    ha-entity-picker {
      display: block;
      margin-bottom: 24px;
    }
  `}]}}),m);const rd=["calendar","device","event","state","geo_location","homeassistant","mqtt","numeric_state","sun","tag","template","time","time_pattern","webhook","zone"],ld=(t,i)=>{var a,n;i.stopPropagation();const o=null===(a=i.currentTarget)||void 0===a?void 0:a.name;if(!o)return;const s=null===(n=i.target)||void 0===n?void 0:n.value;if((t.trigger[o]||"")===s)return;let r;void 0===s||""===s?(r={...t.trigger},delete r[o]):r={...t.trigger,[o]:s},e(t,"value-changed",{value:r})};v([x("ha-automation-trigger-row")],(function(t,a){class n extends a{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"trigger",value:void 0},{kind:"field",decorators:[xi()],key:"_warnings",value:void 0},{kind:"field",decorators:[xi()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[xi()],key:"_requestShowId",value:()=>!1},{kind:"field",decorators:[xi()],key:"_triggered",value:void 0},{kind:"field",decorators:[xi()],key:"_triggerColor",value:()=>!1},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"field",key:"_triggerUnsub",value:void 0},{kind:"field",key:"_processedTypes",value:()=>Ii((e=>rd.map((t=>[t,e(`ui.panel.config.automation.editor.triggers.type.${t}.label`)])).sort(((e,t)=>Oa(e[1],t[1])))))},{kind:"method",key:"render",value:function(){const e=rd.indexOf(this.trigger.platform),t=this._yamlMode||-1===e,i="id"in this.trigger||this._requestShowId;return _`
      <ha-card outlined>
        ${!1===this.trigger.enabled?_`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}
        <div class="card-menu">
          <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
            <ha-icon-button
              slot="trigger"
              .label=${this.hass.localize("ui.common.menu")}
              .path=${Pi}
            ></ha-icon-button>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.triggers.edit_id")}
            </mwc-list-item>
            <mwc-list-item .disabled=${-1===e}>
              ${t?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </mwc-list-item>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
            </mwc-list-item>
            <mwc-list-item>
              ${!1===this.trigger.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
            </mwc-list-item>
            <mwc-list-item class="warning">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
            </mwc-list-item>
          </ha-button-menu>
        </div>
        <div
          class="card-content ${!1===this.trigger.enabled?"disabled":""}"
        >
          ${this._warnings?_`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length&&void 0!==this._warnings[0]?_` <ul>
                      ${this._warnings.map((e=>_`<li>${e}</li>`))}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          ${t?_`
                ${-1===e?_`
                      ${this.hass.localize("ui.panel.config.automation.editor.triggers.unsupported_platform","platform",this.trigger.platform)}
                    `:""}
                <h2>
                  ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                </h2>
                <ha-yaml-editor
                  .hass=${this.hass}
                  .defaultValue=${this.trigger}
                  @value-changed=${this._onYamlChange}
                ></ha-yaml-editor>
              `:_`
                <ha-select
                  .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type_select")}
                  .value=${this.trigger.platform}
                  naturalMenuWidth
                  @selected=${this._typeChanged}
                >
                  ${this._processedTypes(this.hass.localize).map((([e,t])=>_`
                      <mwc-list-item .value=${e}>${t}</mwc-list-item>
                    `))}
                </ha-select>
                ${i?_`
                      <ha-textfield
                        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.id")}
                        .value=${this.trigger.id||""}
                        @change=${this._idChanged}
                      >
                      </ha-textfield>
                    `:""}
                <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                  ${pa(`ha-automation-trigger-${this.trigger.platform}`,{hass:this.hass,trigger:this.trigger})}
                </div>
              `}
        </div>
        <div
          class="triggered ${Fi({active:void 0!==this._triggered,accent:this._triggerColor})}"
          @click=${this._showTriggeredInfo}
        >
          ${this.hass.localize("ui.panel.config.automation.editor.triggers.triggered")}
        </div>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){Ci(Ai(n.prototype),"updated",this).call(this,e),e.has("trigger")&&this._subscribeTrigger()}},{kind:"method",key:"connectedCallback",value:function(){Ci(Ai(n.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.trigger&&this._subscribeTrigger()}},{kind:"method",key:"disconnectedCallback",value:function(){Ci(Ai(n.prototype),"disconnectedCallback",this).call(this),this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0),this._doSubscribeTrigger.cancel()}},{kind:"method",key:"_subscribeTrigger",value:function(){this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0),this._doSubscribeTrigger()}},{kind:"field",key:"_doSubscribeTrigger",value(){return ha((async()=>{let e;const t=this.trigger;this._triggerUnsub&&(this._triggerUnsub.then((e=>e())),this._triggerUnsub=void 0);if(!(await on(this.hass,{trigger:t})).trigger.valid||this.trigger!==t)return;const i=((e,t,i,a)=>e.connection.subscribeMessage(t,{type:"subscribe_trigger",trigger:i,variables:a}))(this.hass,(t=>{void 0!==e?(clearTimeout(e),this._triggerColor=!this._triggerColor):this._triggerColor=!1,this._triggered=t,e=window.setTimeout((()=>{this._triggered=void 0,e=void 0}),5e3)}),t);i.catch((()=>{this._triggerUnsub===i&&(this._triggerUnsub=void 0)})),this._triggerUnsub=i}),5e3)}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){this._warnings=nn(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_handleAction",value:function(t){switch(t.detail.index){case 0:this._requestShowId=!0;break;case 1:this._switchYamlMode();break;case 2:e(this,"duplicate");break;case 3:this._onDisable();break;case 4:this._onDelete()}}},{kind:"method",key:"_onDelete",value:function(){ma(this,{text:this.hass.localize("ui.panel.config.automation.editor.triggers.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{e(this,"value-changed",{value:null})}})}},{kind:"method",key:"_onDisable",value:function(){var t;const i=!(null===(t=this.trigger.enabled)||void 0===t||t),a={...this.trigger,enabled:i};var n;(e(this,"value-changed",{value:a}),this._yamlMode)&&(null===(n=this._yamlEditor)||void 0===n||n.setValue(a))}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(!i)return;const a=customElements.get(`ha-automation-trigger-${i}`);if(i!==this.trigger.platform){const t={platform:i,...a.defaultConfig};this.trigger.id&&(t.id=this.trigger.id),e(this,"value-changed",{value:t})}}},{kind:"method",key:"_idChanged",value:function(t){var i;const a=t.target.value;if(a===(null!==(i=this.trigger.id)&&void 0!==i?i:""))return;this._requestShowId=!0;const n={...this.trigger};a?n.id=a:delete n.id,e(this,"value-changed",{value:n})}},{kind:"method",key:"_onYamlChange",value:function(t){t.stopPropagation(),t.detail.isValid&&(this._warnings=void 0,e(this,"value-changed",{value:t.detail.value}))}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!this._yamlMode}},{kind:"method",key:"_showTriggeredInfo",value:function(){fa(this,{text:_`
        <ha-yaml-editor
          readOnly
          .hass=${this.hass}
          .defaultValue=${this._triggered}
        ></ha-yaml-editor>
      `})}},{kind:"get",static:!0,key:"styles",value:function(){return[zi,i`
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .card-content {
          padding-top: 16px;
          margin-top: 0;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }
        .card-menu {
          float: var(--float-end, right);
          z-index: 3;
          margin: 4px;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        .triggered {
          cursor: pointer;
          position: absolute;
          top: 0px;
          right: 0px;
          left: 0px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          background-color: var(--primary-color);
          color: var(--text-primary-color);
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.3s;
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius, 4px);
          border-top-left-radius: var(--ha-card-border-radius, 4px);
        }
        .triggered.active {
          max-height: 100px;
        }
        .triggered:hover {
          opacity: 0.8;
        }
        .triggered.accent {
          background-color: var(--accent-color);
          color: var(--text-accent-color, var(--text-primary-color));
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        ha-select {
          margin-bottom: 24px;
        }
        ha-textfield {
          display: block;
          margin-bottom: 24px;
        }
      `]}}]}}),m),v([x("ha-automation-trigger")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"triggers",value:void 0},{kind:"method",key:"render",value:function(){return _`
      ${this.triggers.map(((e,t)=>_`
          <ha-automation-trigger-row
            .index=${t}
            .trigger=${e}
            @duplicate=${this._duplicateTrigger}
            @value-changed=${this._triggerChanged}
            .hass=${this.hass}
          ></ha-automation-trigger-row>
        `))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addTrigger}>
            ${this.hass.localize("ui.panel.config.automation.editor.triggers.add")}
          </mwc-button>
        </div>
      </ha-card>
    `}},{kind:"method",key:"_addTrigger",value:function(){const t=this.triggers.concat({platform:"device",...Ql.defaultConfig});e(this,"value-changed",{value:t})}},{kind:"method",key:"_triggerChanged",value:function(t){t.stopPropagation();const i=[...this.triggers],a=t.detail.value,n=t.target.index;null===a?i.splice(n,1):i[n]=a,e(this,"value-changed",{value:i})}},{kind:"method",key:"_duplicateTrigger",value:function(t){t.stopPropagation();const i=t.target.index;e(this,"value-changed",{value:this.triggers.concat(Pa(this.triggers[i]))})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-trigger-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `}}]}}),m),v([x("ha-automation-action-wait_for_trigger")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{wait_for_trigger:[]}}},{kind:"method",key:"render",value:function(){const{wait_for_trigger:e,continue_on_timeout:t,timeout:i}=this.action;return _`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.timeout")}
        .name=${"timeout"}
        .value=${i||""}
        @change=${this._valueChanged}
      ></ha-textfield>
      <ha-formfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.continue_timeout")}
      >
        <ha-switch
          .checked=${null==t||t}
          @change=${this._continueChanged}
        ></ha-switch>
      </ha-formfield>
      <ha-automation-trigger
        .triggers=${e}
        .hass=${this.hass}
        .name=${"wait_for_trigger"}
        @value-changed=${this._valueChanged}
      ></ha-automation-trigger>
    `}},{kind:"method",key:"_continueChanged",value:function(t){e(this,"value-changed",{value:{...this.action,continue_on_timeout:t.target.checked}})}},{kind:"method",key:"_valueChanged",value:function(e){hd(this,e)}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-textfield {
        display: block;
        margin-bottom: 24px;
      }
    `}}]}}),m);const dd=[{name:"wait_template",selector:{template:{}}},{name:"timeout",required:!1,selector:{text:{}}},{name:"continue_on_timeout",selector:{boolean:{}}}];v([x("ha-automation-action-wait_template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"action",value:void 0},{kind:"get",static:!0,key:"defaultConfig",value:function(){return{wait_template:"",continue_on_timeout:!0}}},{kind:"method",key:"render",value:function(){return _`
      <ha-form
        .hass=${this.hass}
        .data=${this.action}
        .schema=${dd}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.config.automation.editor.actions.type.wait_template.${"continue_on_timeout"===e.name?"continue_timeout":e.name}`)}}]}}),m);const cd=["condition","delay","event","play_media","activate_scene","service","wait_template","wait_for_trigger","repeat","choose","if","device_id","stop","parallel"],ud=e=>{if(e)return"service"in e||"scene"in e?(e=>{if("delay"in e)return"delay";if("wait_template"in e)return"wait_template";if(["condition","and","or","not"].some((t=>t in e)))return"check_condition";if("event"in e)return"fire_event";if("device_id"in e)return"device_action";if("scene"in e)return"activate_scene";if("repeat"in e)return"repeat";if("choose"in e)return"choose";if("if"in e)return"if";if("wait_for_trigger"in e)return"wait_for_trigger";if("variables"in e)return"variables";if("stop"in e)return"stop";if("parallel"in e)return"parallel";if("service"in e){if("metadata"in e){if(Ua(e,cn))return"activate_scene";if(Ua(e,dn))return"play_media"}return"service"}return"unknown"})(e):["and","or","not"].some((t=>t in e))?"condition":cd.find((t=>t in e))},hd=(t,i)=>{var a,n;i.stopPropagation();const o=null===(a=i.target)||void 0===a?void 0:a.name;if(!o)return;const s=(null===(n=i.detail)||void 0===n?void 0:n.value)||i.target.value;if((t.action[o]||"")===s)return;let r;s?r={...t.action,[o]:s}:(r={...t.action},delete r[o]),e(t,"value-changed",{value:r})};v([x("ha-automation-action-row")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"action",value:void 0},{kind:"field",decorators:[f()],key:"index",value:void 0},{kind:"field",decorators:[f()],key:"totalActions",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[xi()],key:"_warnings",value:void 0},{kind:"field",decorators:[xi()],key:"_uiModeAvailable",value:()=>!0},{kind:"field",decorators:[xi()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[g("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"field",key:"_processedTypes",value:()=>Ii((e=>cd.map((t=>[t,e(`ui.panel.config.automation.editor.actions.type.${t}.label`)])).sort(((e,t)=>Oa(e[1],t[1])))))},{kind:"method",key:"willUpdate",value:function(e){e.has("action")&&(this._uiModeAvailable=void 0!==ud(this.action),this._uiModeAvailable||this._yamlMode||(this._yamlMode=!0))}},{kind:"method",key:"updated",value:function(e){if(e.has("action")&&this._yamlMode){const e=this._yamlEditor;e&&e.value!==this.action&&e.setValue(this.action)}}},{kind:"method",key:"render",value:function(){const e=ud(this.action),t=this._yamlMode;return _`
      <ha-card outlined>
        ${!1===this.action.enabled?_`<div class="disabled-bar">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.disabled")}
            </div>`:""}
        <div class="card-menu">
          ${0!==this.index?_`
                <ha-icon-button
                  .label=${this.hass.localize("ui.panel.config.automation.editor.move_up")}
                  .path=${aa}
                  @click=${this._moveUp}
                ></ha-icon-button>
              `:""}
          ${this.index!==this.totalActions-1?_`
                <ha-icon-button
                  .label=${this.hass.localize("ui.panel.config.automation.editor.move_down")}
                  .path=${na}
                  @click=${this._moveDown}
                ></ha-icon-button>
              `:""}
          <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
            <ha-icon-button
              slot="trigger"
              .label=${this.hass.localize("ui.common.menu")}
              .path=${Pi}
            ></ha-icon-button>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.run_action")}
            </mwc-list-item>
            <mwc-list-item .disabled=${!this._uiModeAvailable}>
              ${t?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </mwc-list-item>
            <mwc-list-item>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
            </mwc-list-item>
            <mwc-list-item>
              ${!1===this.action.enabled?this.hass.localize("ui.panel.config.automation.editor.actions.enable"):this.hass.localize("ui.panel.config.automation.editor.actions.disable")}
            </mwc-list-item>
            <mwc-list-item class="warning">
              ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
            </mwc-list-item>
          </ha-button-menu>
        </div>
        <div
          class="card-content ${!1===this.action.enabled?"disabled":""}"
        >
          ${this._warnings?_`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length>0&&void 0!==this._warnings[0]?_` <ul>
                      ${this._warnings.map((e=>_`<li>${e}</li>`))}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          ${t?_`
                ${void 0===e?_`
                      ${this.hass.localize("ui.panel.config.automation.editor.actions.unsupported_action","action",e)}
                    `:""}
                <h2>
                  ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                </h2>
                <ha-yaml-editor
                  .hass=${this.hass}
                  .defaultValue=${this.action}
                  @value-changed=${this._onYamlChange}
                ></ha-yaml-editor>
              `:_`
                <ha-select
                  .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type_select")}
                  .value=${ud(this.action)}
                  naturalMenuWidth
                  @selected=${this._typeChanged}
                >
                  ${this._processedTypes(this.hass.localize).map((([e,t])=>_`
                      <mwc-list-item .value=${e}>${t}</mwc-list-item>
                    `))}
                </ha-select>

                <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                  ${pa(`ha-automation-action-${e}`,{hass:this.hass,action:this.action,narrow:this.narrow})}
                </div>
              `}
        </div>
      </ha-card>
    `}},{kind:"method",key:"_handleUiModeNotAvailable",value:function(e){e.stopPropagation(),this._warnings=nn(this.hass,e.detail).warnings,this._yamlMode||(this._yamlMode=!0)}},{kind:"method",key:"_moveUp",value:function(){e(this,"move-action",{direction:"up"})}},{kind:"method",key:"_moveDown",value:function(){e(this,"move-action",{direction:"down"})}},{kind:"method",key:"_handleAction",value:function(t){switch(t.detail.index){case 0:this._runAction();break;case 1:this._switchYamlMode();break;case 2:e(this,"duplicate");break;case 3:this._onDisable();break;case 4:this._onDelete()}}},{kind:"method",key:"_onDisable",value:function(){var t;const i=!(null===(t=this.action.enabled)||void 0===t||t),a={...this.action,enabled:i};var n;(e(this,"value-changed",{value:a}),this._yamlMode)&&(null===(n=this._yamlEditor)||void 0===n||n.setValue(a))}},{kind:"method",key:"_runAction",value:async function(){const e=await on(this.hass,{action:this.action});if(e.action.valid){try{await(t=this.hass,i=this.action,t.callWS({type:"execute_script",sequence:i}))}catch(e){return void fa(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_error"),text:e.message||e})}var t,i;un(this,{message:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_success")})}else fa(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.invalid_action"),text:e.action.error})}},{kind:"method",key:"_onDelete",value:function(){ma(this,{text:this.hass.localize("ui.panel.config.automation.editor.actions.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{e(this,"value-changed",{value:null})}})}},{kind:"method",key:"_typeChanged",value:function(t){const i=t.target.value;if(i&&(this._uiModeAvailable=cd.includes(i),this._uiModeAvailable||this._yamlMode||(this._yamlMode=!1),i!==ud(this.action))){const t=customElements.get(`ha-automation-action-${i}`);e(this,"value-changed",{value:{...t.defaultConfig}})}}},{kind:"method",key:"_onYamlChange",value:function(t){t.stopPropagation(),t.detail.isValid&&e(this,"value-changed",{value:t.detail.value})}},{kind:"method",key:"_switchYamlMode",value:function(){this._warnings=void 0,this._yamlMode=!this._yamlMode}},{kind:"get",static:!0,key:"styles",value:function(){return[zi,i`
        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .card-content {
          padding-top: 16px;
          margin-top: 0;
        }
        .disabled-bar {
          background: var(--divider-color, #e0e0e0);
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius);
          border-top-left-radius: var(--ha-card-border-radius);
        }
        .card-menu {
          float: var(--float-end, right);
          z-index: 3;
          margin: 4px;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        .warning {
          margin-bottom: 8px;
        }
        .warning ul {
          margin: 4px 0;
        }
        ha-select {
          margin-bottom: 24px;
        }
      `]}}]}}),m),v([x("ha-automation-action")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[f()],key:"actions",value:void 0},{kind:"method",key:"render",value:function(){return _`
      ${this.actions.map(((e,t)=>_`
          <ha-automation-action-row
            .index=${t}
            .totalActions=${this.actions.length}
            .action=${e}
            .narrow=${this.narrow}
            @duplicate=${this._duplicateAction}
            @move-action=${this._move}
            @value-changed=${this._actionChanged}
            .hass=${this.hass}
          ></ha-automation-action-row>
        `))}
      <ha-card outlined>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addAction}>
            ${this.hass.localize("ui.panel.config.automation.editor.actions.add")}
          </mwc-button>
        </div>
      </ha-card>
    `}},{kind:"method",key:"_addAction",value:function(){const t=this.actions.concat({...Pl.defaultConfig});e(this,"value-changed",{value:t})}},{kind:"method",key:"_move",value:function(t){t.stopPropagation();const i=t.target.index,a="up"===t.detail.direction?i-1:i+1,n=this.actions.concat(),o=n.splice(i,1)[0];n.splice(a,0,o),e(this,"value-changed",{value:n})}},{kind:"method",key:"_actionChanged",value:function(t){t.stopPropagation();const i=[...this.actions],a=t.detail.value,n=t.target.index;null===a?i.splice(n,1):i[n]=a,e(this,"value-changed",{value:i})}},{kind:"method",key:"_duplicateAction",value:function(t){t.stopPropagation();const i=t.target.index;e(this,"value-changed",{value:this.actions.concat(Pa(this.actions[i]))})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-action-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `}}]}}),m),v([x("ha-selector-action")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return _`<ha-automation-action
      .disabled=${this.disabled}
      .actions=${this.value||[]}
      .hass=${this.hass}
    ></ha-automation-action>`}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-automation-action {
        display: block;
        margin-bottom: 16px;
      }
      :host([disabled]) ha-automation-action {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `}}]}}),m);const pd=async e=>((e,t,i,a)=>{const[n,o,s]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===a?Number(o)>=i:Number(o)>i)||void 0!==a&&Number(n)===t&&Number(o)===i&&Number(s)>=a})(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/supervisor/info",method:"get"}):(await e.callApi("GET","hassio/supervisor/info")).data,vd=e=>_`<mwc-list-item twoline graphic="icon">
  <span>${e.name}</span>
  <span slot="secondary">${e.slug}</span>
  ${e.icon?_`<img slot="graphic" .src="/api/hassio/addons/${e.slug}/icon" />`:""}
</mwc-list-item>`;v([x("ha-addon-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:()=>""},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[xi()],key:"_addons",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[g("ha-combo-box")],key:"_comboBox",value:void 0},{kind:"method",key:"open",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this._comboBox)||void 0===e||e.focus()}},{kind:"method",key:"firstUpdated",value:function(){this._getAddons()}},{kind:"method",key:"render",value:function(){return this._addons?_`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.addon-picker.addon"):this.label}
        .value=${this._value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .renderer=${vd}
        .items=${this._addons}
        item-value-path="slug"
        item-id-path="slug"
        item-label-path="name"
        @value-changed=${this._addonChanged}
      ></ha-combo-box>
    `:_``}},{kind:"method",key:"_getAddons",value:async function(){try{if(va(this.hass,"hassio")){const e=await pd(this.hass);this._addons=e.addons.sort(((e,t)=>Oa(e.name,t.name)))}else fa(this,{title:this.hass.localize("ui.componencts.addon-picker.error.no_supervisor.title"),text:this.hass.localize("ui.componencts.addon-picker.error.no_supervisor.description")})}catch(e){fa(this,{title:this.hass.localize("ui.componencts.addon-picker.error.fetch_addons.title"),text:this.hass.localize("ui.componencts.addon-picker.error.fetch_addons.description")})}}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_addonChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),m),v([x("ha-selector-addon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`<ha-addon-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      .required=${this.required}
      allow-custom-entity
    ></ha-addon-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-addon-picker {
      width: 100%;
    }
  `}]}}),m);const md=e=>_`<mwc-list-item
  class=${Fi({"add-new":"add_new"===e.area_id})}
>
  ${e.name}
</mwc-list-item>`;v([x("ha-area-picker")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[xi()],key:"_areas",value:void 0},{kind:"field",decorators:[xi()],key:"_devices",value:void 0},{kind:"field",decorators:[xi()],key:"_entities",value:void 0},{kind:"field",decorators:[xi()],key:"_opened",value:void 0},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_filter",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"hassSubscribe",value:function(){return[sl(this.hass.connection,(e=>{this._areas=e})),cl(this.hass.connection,(e=>{this._devices=e})),pl(this.hass.connection,(e=>{this._entities=e}))]}},{kind:"method",key:"open",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.open()}))}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;null===(e=this.comboBox)||void 0===e||e.focus()}))}},{kind:"field",key:"_getAreas",value(){return Ii(((e,t,i,a,n,o,s,r,l)=>{if(!e.length)return[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null}];const d={};let c,u;if(a||n||o){for(const e of i)e.device_id&&(e.device_id in d||(d[e.device_id]=[]),d[e.device_id].push(e));c=t,u=i.filter((e=>e.area_id))}else s&&(c=t),r&&(u=i.filter((e=>e.area_id)));a&&(c=c.filter((e=>{const t=d[e.id];return!(!t||!t.length)&&d[e.id].some((e=>a.includes(hn(e.entity_id))))})),u=u.filter((e=>a.includes(hn(e.entity_id))))),n&&(c=c.filter((e=>{const t=d[e.id];return!t||!t.length||i.every((e=>!n.includes(hn(e.entity_id))))})),u=u.filter((e=>!n.includes(hn(e.entity_id))))),o&&(c=c.filter((e=>{const t=d[e.id];return!(!t||!t.length)&&d[e.id].some((e=>{const t=this.hass.states[e.entity_id];return!!t&&(t.attributes.device_class&&o.includes(t.attributes.device_class))}))})),u=u.filter((e=>{const t=this.hass.states[e.entity_id];return t.attributes.device_class&&o.includes(t.attributes.device_class)}))),s&&(c=c.filter((e=>s(e)))),r&&(u=u.filter((e=>r(e))));let h,p=e;var v;(c&&(h=c.filter((e=>e.area_id)).map((e=>e.area_id))),u)&&(h=(null!==(v=h)&&void 0!==v?v:[]).concat(u.filter((e=>e.area_id)).map((e=>e.area_id))));return h&&(p=e.filter((e=>h.includes(e.area_id)))),p.length||(p=[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_match"),picture:null}]),l?p:[...p,{area_id:"add_new",name:this.hass.localize("ui.components.area-picker.add_new"),picture:null}]}))}},{kind:"method",key:"updated",value:function(e){(!this._init&&this._devices&&this._areas&&this._entities||e.has("_opened")&&this._opened)&&(this._init=!0,this.comboBox.items=this._getAreas(this._areas,this._devices,this._entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd))}},{kind:"method",key:"render",value:function(){var e;return this._devices&&this._areas&&this._entities?_`
      <ha-combo-box
        .hass=${this.hass}
        .helper=${this.helper}
        item-value-path="area_id"
        item-id-path="area_id"
        item-label-path="name"
        .value=${this.value}
        .disabled=${this.disabled}
        .required=${this.required}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label}
        .placeholder=${this.placeholder?null===(e=this._area(this.placeholder))||void 0===e?void 0:e.name:void 0}
        .renderer=${md}
        @filter-changed=${this._filterChanged}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._areaChanged}
      >
      </ha-combo-box>
    `:_``}},{kind:"field",key:"_area",value(){return Ii((e=>{var t;return null===(t=this._areas)||void 0===t?void 0:t.find((t=>t.area_id===e))}))}},{kind:"method",key:"_filterChanged",value:function(e){var t,i;(this._filter=e.detail.value,this._filter)?this.noAdd||0!==(null===(t=this.comboBox._comboBox.filteredItems)||void 0===t?void 0:t.length)?this.comboBox.filteredItems=null===(i=this.comboBox.items)||void 0===i?void 0:i.filter((e=>e.name.toLowerCase().includes(this._filter.toLowerCase()))):this.comboBox.filteredItems=[{area_id:"add_new_suggestion",name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._filter}),picture:null}]:this.comboBox.filteredItems=this.comboBox.items}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let t=e.detail.value;"no_areas"===t&&(t=""),["add_new_suggestion","add_new"].includes(t)?(e.target.value=this._value,ga(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.title"),text:this.hass.localize("ui.components.area-picker.add_dialog.text"),confirmText:this.hass.localize("ui.components.area-picker.add_dialog.add"),inputLabel:this.hass.localize("ui.components.area-picker.add_dialog.name"),defaultValue:"add_new_suggestion"===t?this._filter:void 0,confirm:async e=>{var t,i;if(e)try{const a=await(t=this.hass,i={name:e},t.callWS({type:"config/area_registry/create",...i}));this._areas=[...this._areas,a],this.comboBox.filteredItems=this._getAreas(this._areas,this._devices,this._entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(a.area_id)}catch(e){fa(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.failed_create_area"),text:e.message})}}})):t!==this._value&&this._setValue(t)}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{e(this,"value-changed",{value:t}),e(this,"change")}),0)}}]}}),vl(m)),v([x("ha-areas-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({attribute:"picked-area-label"})],key:"pickedAreaLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-area-label"})],key:"pickAreaLabel",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return _``;const e=this._currentAreas;return _`
      ${e.map((e=>_`
          <div>
            <ha-area-picker
              .curValue=${e}
              .noAdd=${this.noAdd}
              .hass=${this.hass}
              .value=${e}
              .label=${this.pickedAreaLabel}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .deviceFilter=${this.deviceFilter}
              .entityFilter=${this.entityFilter}
              .disabled=${this.disabled}
              @value-changed=${this._areaChanged}
            ></ha-area-picker>
          </div>
        `))}
      <div>
        <ha-area-picker
          .noAdd=${this.noAdd}
          .hass=${this.hass}
          .label=${this.pickAreaLabel}
          .helper=${this.helper}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityFilter}
          .disabled=${this.disabled}
          .placeholder=${this.placeholder}
          .required=${this.required&&!e.length}
          @value-changed=${this._addArea}
        ></ha-area-picker>
      </div>
    `}},{kind:"get",key:"_currentAreas",value:function(){return this.value||[]}},{kind:"method",key:"_updateAreas",value:async function(t){this.value=t,e(this,"value-changed",{value:t})}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;if(i===t)return;const a=this._currentAreas;i&&!a.includes(i)?this._updateAreas(a.map((e=>e===t?i:e))):this._updateAreas(a.filter((e=>e!==t)))}},{kind:"method",key:"_addArea",value:function(e){e.stopPropagation();const t=e.detail.value;if(!t)return;e.currentTarget.value="";const i=this._currentAreas;i.includes(t)||this._updateAreas([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>i`
    div {
      margin-top: 8px;
    }
  `}]}}),vl(m)),v([x("ha-selector-area")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[xi()],key:"_configEntries",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"updated",value:function(e){if(e.has("selector")){var t;e.get("selector")!==this.selector&&null!==(t=this.selector.area.device)&&void 0!==t&&t.integration&&$a(this.hass,{domain:this.selector.area.device.integration}).then((e=>{this._configEntries=e}))}}},{kind:"method",key:"render",value:function(){var e,t,i,a;return this.selector.area.multiple?_`
      <ha-areas-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .pickAreaLabel=${this.label}
        no-add
        .deviceFilter=${this._filterDevices}
        .entityFilter=${this._filterEntities}
        .includeDeviceClasses=${null!==(e=this.selector.area.entity)&&void 0!==e&&e.device_class?[this.selector.area.entity.device_class]:void 0}
        .includeDomains=${null!==(t=this.selector.area.entity)&&void 0!==t&&t.domain?[this.selector.area.entity.domain]:void 0}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-areas-picker>
    `:_`
        <ha-area-picker
          .hass=${this.hass}
          .value=${this.value}
          .label=${this.label}
          .helper=${this.helper}
          no-add
          .deviceFilter=${this._filterDevices}
          .entityFilter=${this._filterEntities}
          .includeDeviceClasses=${null!==(i=this.selector.area.entity)&&void 0!==i&&i.device_class?[this.selector.area.entity.device_class]:void 0}
          .includeDomains=${null!==(a=this.selector.area.entity)&&void 0!==a&&a.domain?[this.selector.area.entity.domain]:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
        ></ha-area-picker>
      `}},{kind:"field",key:"_filterEntities",value(){return e=>{var t;return null===(t=this.selector.area.entity)||void 0===t||!t.integration||e.platform===this.selector.area.entity.integration}}},{kind:"field",key:"_filterDevices",value(){return e=>{var t,i,a;return(null===(t=this.selector.area.device)||void 0===t||!t.manufacturer||e.manufacturer===this.selector.area.device.manufacturer)&&((null===(i=this.selector.area.device)||void 0===i||!i.model||e.model===this.selector.area.device.model)&&!(null!==(a=this.selector.area.device)&&void 0!==a&&a.integration&&this._configEntries&&!this._configEntries.some((t=>e.config_entries.includes(t.entry_id)))))}}}]}}),m);var fd=/-u(?:-[0-9a-z]{2,8})+/gi;function gd(e,t,i){if(void 0===i&&(i=Error),!e)throw new i(t)}function _d(e,t){for(var i=t;;){if(e.has(i))return i;var a=i.lastIndexOf("-");if(!~a)return;a>=2&&"-"===i[a-2]&&(a-=2),i=i.slice(0,a)}}function yd(e,t){gd(2===t.length,"key must have 2 elements");var i=e.length,a="-".concat(t,"-"),n=e.indexOf(a);if(-1!==n){for(var o=n+4,s=o,r=o,l=!1;!l;){var d=e.indexOf("-",r);2===(-1===d?i-r:d-r)?l=!0:-1===d?(s=i,l=!0):(s=d,r=d+1)}return e.slice(o,s)}if(a="-".concat(t),-1!==(n=e.indexOf(a))&&n+3===i)return""}function kd(e,t,i,a,n,o){var s;s="lookup"===i.localeMatcher?function(e,t,i){for(var a={locale:""},n=0,o=t;n<o.length;n++){var s=o[n],r=s.replace(fd,""),l=_d(e,r);if(l)return a.locale=l,s!==r&&(a.extension=s.slice(r.length+1,s.length)),a}return a.locale=i(),a}(e,t,o):function(e,t,i){var a,n={},o={},s={},r=new Set;e.forEach((function(e){var t=new Intl.Locale(e).minimize().toString(),i=Intl.getCanonicalLocales(e)[0]||e;n[t]=e,o[e]=e,s[i]=e,r.add(t),r.add(e),r.add(i)}));for(var l=0,d=t;l<d.length;l++){var c=d[l];if(a)break;var u=c.replace(fd,"");if(e.has(u)){a=u;break}if(r.has(u)){a=u;break}var h=new Intl.Locale(u),p=h.maximize().toString(),v=h.minimize().toString();if(r.has(v)){a=v;break}a=_d(r,p)}return a?{locale:o[a]||s[a]||n[a]||a}:{locale:i()}}(e,t,o);for(var r=s.locale,l={locale:"",dataLocale:r},d="-u",c=0,u=a;c<u.length;c++){var h=u[c];gd(r in n,"Missing locale data for ".concat(r));var p=n[r];gd("object"==typeof p&&null!==p,"locale data ".concat(h," must be an object"));var v=p[h];gd(Array.isArray(v),"keyLocaleData for ".concat(h," must be an array"));var m=v[0];gd("string"==typeof m||null===m,"value must be string or null but got ".concat(typeof m," in key ").concat(h));var f="";if(s.extension){var g=yd(s.extension,h);void 0!==g&&(""!==g?~v.indexOf(g)&&(m=g,f="-".concat(h,"-").concat(m)):~g.indexOf("true")&&(m="true",f="-".concat(h)))}if(h in i){var _=i[h];gd("string"==typeof _||null==_,"optionsValue must be String, Undefined or Null"),~v.indexOf(_)&&_!==m&&(m=_,f="")}l[h]=m,d+=f}if(d.length>2){var y=r.indexOf("-x-");if(-1===y)r+=d;else{var k=r.slice(0,y),b=r.slice(y,r.length);r=k+d+b}r=Intl.getCanonicalLocales(r)[0]}return l.locale=r,l}function bd(e,t,i,a){var n=t.reduce((function(e,t){return e.add(t),e}),new Set);return kd(n,function(e){return Intl.getCanonicalLocales(e)}(e),{localeMatcher:(null==a?void 0:a.algorithm)||"best fit"},[],{},(function(){return i})).locale}var xd=Object.freeze({__proto__:null,match:bd,LookupSupportedLocales:function(e,t){for(var i=[],a=0,n=t;a<n.length;a++){var o=_d(e,n[a].replace(fd,""));o&&i.push(o)}return i},ResolveLocale:kd}),$d=["af","ak","am","an","ar","ars","as","asa","ast","az","bal","be","bem","bez","bg","bho","bm","bn","bo","br","brx","bs","ca","ce","ceb","cgg","chr","ckb","cs","cy","da","de","doi","dsb","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fil","fo","fr","fur","fy","ga","gd","gl","gsw","gu","guw","gv","ha","haw","he","hi","hnj","hr","hsb","hu","hy","ia","id","ig","ii","io","is","it","iu","ja","jbo","jgo","jmc","jv","jw","ka","kab","kaj","kcg","kde","kea","kk","kkj","kl","km","kn","ko","ks","ksb","ksh","ku","kw","ky","lag","lb","lg","lij","lkt","ln","lo","lt","lv","mas","mg","mgo","mk","ml","mn","mo","mr","ms","mt","my","nah","naq","nb","nd","ne","nl","nn","nnh","no","nqo","nr","nso","ny","nyn","om","or","os","osa","pa","pap","pcm","pl","prg","ps","pt-PT","pt","rm","ro","rof","ru","rwk","sah","saq","sat","sc","scn","sd","sdh","se","seh","ses","sg","sh","shi","si","sk","sl","sma","smi","smj","smn","sms","sn","so","sq","sr","ss","ssy","st","su","sv","sw","syr","ta","te","teo","th","ti","tig","tk","tl","tn","to","tpi","tr","ts","tzm","ug","uk","und","ur","uz","ve","vi","vo","vun","wa","wae","wo","xh","xog","yi","yo","yue","zh","zu"];var wd=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CanonicalizeLocaleList=void 0,t.CanonicalizeLocaleList=function(e){return Intl.getCanonicalLocales(e)}}));Ca(wd),wd.CanonicalizeLocaleList;var Cd=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.invariant=t.UNICODE_EXTENSION_SEQUENCE_REGEX=void 0,t.UNICODE_EXTENSION_SEQUENCE_REGEX=/-u(?:-[0-9a-z]{2,8})+/gi,t.invariant=function(e,t,i){if(void 0===i&&(i=Error),!e)throw new i(t)}}));Ca(Cd),Cd.invariant,Cd.UNICODE_EXTENSION_SEQUENCE_REGEX;var Ad=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BestAvailableLocale=void 0,t.BestAvailableLocale=function(e,t){for(var i=t;;){if(e.has(i))return i;var a=i.lastIndexOf("-");if(!~a)return;a>=2&&"-"===i[a-2]&&(a-=2),i=i.slice(0,a)}}}));Ca(Ad),Ad.BestAvailableLocale;var Id=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LookupMatcher=void 0,t.LookupMatcher=function(e,t,i){for(var a={locale:""},n=0,o=t;n<o.length;n++){var s=o[n],r=s.replace(Cd.UNICODE_EXTENSION_SEQUENCE_REGEX,""),l=(0,Ad.BestAvailableLocale)(e,r);if(l)return a.locale=l,s!==r&&(a.extension=s.slice(r.length+1,s.length)),a}return a.locale=i(),a}}));Ca(Id),Id.LookupMatcher;var Ed=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BestFitMatcher=void 0,t.BestFitMatcher=function(e,t,i){var a,n={},o={},s={},r=new Set;e.forEach((function(e){var t=new Intl.Locale(e).minimize().toString(),i=Intl.getCanonicalLocales(e)[0]||e;n[t]=e,o[e]=e,s[i]=e,r.add(t),r.add(e),r.add(i)}));for(var l=0,d=t;l<d.length;l++){var c=d[l];if(a)break;var u=c.replace(Cd.UNICODE_EXTENSION_SEQUENCE_REGEX,"");if(e.has(u)){a=u;break}if(r.has(u)){a=u;break}var h=new Intl.Locale(u),p=h.maximize().toString(),v=h.minimize().toString();if(r.has(v)){a=v;break}a=(0,Ad.BestAvailableLocale)(r,p)}return a?{locale:o[a]||s[a]||n[a]||a}:{locale:i()}}}));Ca(Ed),Ed.BestFitMatcher;var zd=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeExtensionValue=void 0,t.UnicodeExtensionValue=function(e,t){(0,Cd.invariant)(2===t.length,"key must have 2 elements");var i=e.length,a="-".concat(t,"-"),n=e.indexOf(a);if(-1!==n){for(var o=n+4,s=o,r=o,l=!1;!l;){var d=e.indexOf("-",r);2===(-1===d?i-r:d-r)?l=!0:-1===d?(s=i,l=!0):(s=d,r=d+1)}return e.slice(o,s)}if(a="-".concat(t),-1!==(n=e.indexOf(a))&&n+3===i)return""}}));Ca(zd),zd.UnicodeExtensionValue;var Sd=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolveLocale=void 0,t.ResolveLocale=function(e,t,i,a,n,o){for(var s,r=(s="lookup"===i.localeMatcher?(0,Id.LookupMatcher)(e,t,o):(0,Ed.BestFitMatcher)(e,t,o)).locale,l={locale:"",dataLocale:r},d="-u",c=0,u=a;c<u.length;c++){var h=u[c];(0,Cd.invariant)(r in n,"Missing locale data for ".concat(r));var p=n[r];(0,Cd.invariant)("object"==typeof p&&null!==p,"locale data ".concat(h," must be an object"));var v=p[h];(0,Cd.invariant)(Array.isArray(v),"keyLocaleData for ".concat(h," must be an array"));var m=v[0];(0,Cd.invariant)("string"==typeof m||null===m,"value must be string or null but got ".concat(typeof m," in key ").concat(h));var f="";if(s.extension){var g=(0,zd.UnicodeExtensionValue)(s.extension,h);void 0!==g&&(""!==g?~v.indexOf(g)&&(m=g,f="-".concat(h,"-").concat(m)):~g.indexOf("true")&&(m="true",f="-".concat(h)))}if(h in i){var _=i[h];(0,Cd.invariant)("string"==typeof _||null==_,"optionsValue must be String, Undefined or Null"),~v.indexOf(_)&&_!==m&&(m=_,f="")}l[h]=m,d+=f}if(d.length>2){var y=r.indexOf("-x-");if(-1===y)r+=d;else{var k=r.slice(0,y),b=r.slice(y,r.length);r=k+d+b}r=Intl.getCanonicalLocales(r)[0]}return l.locale=r,l}}));Ca(Sd),Sd.ResolveLocale;var Ld=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LookupSupportedLocales=void 0,t.LookupSupportedLocales=function(e,t){for(var i=[],a=0,n=t;a<n.length;a++){var o=n[a].replace(Cd.UNICODE_EXTENSION_SEQUENCE_REGEX,""),s=(0,Ad.BestAvailableLocale)(e,o);s&&i.push(s)}return i}}));Ca(Ld),Ld.LookupSupportedLocales;var Td=wa((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolveLocale=t.LookupSupportedLocales=t.match=void 0,t.match=function(e,t,i,a){var n=t.reduce((function(e,t){return e.add(t),e}),new Set);return(0,Sd.ResolveLocale)(n,(0,wd.CanonicalizeLocaleList)(e),{localeMatcher:(null==a?void 0:a.algorithm)||"best fit"},[],{},(function(){return i})).locale},Object.defineProperty(t,"LookupSupportedLocales",{enumerable:!0,get:function(){return Ld.LookupSupportedLocales}});var i=Sd;Object.defineProperty(t,"ResolveLocale",{enumerable:!0,get:function(){return i.ResolveLocale}})}));Ca(Td);var Pd=Td.ResolveLocale,Od=Td.LookupSupportedLocales,Md=Td.match,Fd=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"];var Bd=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"];let Dd,Vd;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Dd||(Dd={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Vd||(Vd={}));const Nd={},Rd=window.localStorage||{},jd={"zh-cn":"zh-Hans","zh-sg":"zh-Hans","zh-my":"zh-Hans","zh-tw":"zh-Hant","zh-hk":"zh-Hant","zh-mo":"zh-Hant",zh:"zh-Hant"};function qd(e){if(e in Nd.translations)return e;const t=e.toLowerCase();if(t in jd)return jd[t];const i=Object.keys(Nd.translations).find((e=>e.toLowerCase()===t));return i||(e.includes("-")?qd(e.split("-")[0]):void 0)}const Ud=new Set,Hd=[];"Locale"in Intl&&!function(){try{return"x-private"===new Intl.Locale("und-x-private").toString()}catch(e){return!0}}()||Hd.push(import("./c.4aecab07.js")),function(e){if(void 0===e&&(e="en"),!("PluralRules"in Intl)||"one"===new Intl.PluralRules("en",{minimumFractionDigits:2}).select(1)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.PluralRules.supportedLocalesOf(t).length===t.length}(e))return e?bd([e],$d,"en"):void 0}()&&(Hd.push(import("./c.814f6c41.js")),Hd.push(import("./c.e23b0d0b.js"))),function(e){if(void 0===e&&(e="en"),!("RelativeTimeFormat"in Intl)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.RelativeTimeFormat.supportedLocalesOf(t).length===t.length}(e)||!function(e){try{return"numberingSystem"in new Intl.RelativeTimeFormat(e||"en",{numeric:"auto"}).resolvedOptions()}catch(e){return!1}}(e))return Md([e],Fd,"en")}()&&Hd.push(import("./c.3fd4de1c.js")),function(e){if(void 0===e&&(e="en"),!("DateTimeFormat"in Intl)||!("formatToParts"in Intl.DateTimeFormat.prototype)||!("formatRange"in Intl.DateTimeFormat.prototype)||function(){try{return"dayPeriod"!==new Intl.DateTimeFormat("en",{hourCycle:"h11",hour:"numeric"}).formatToParts(0)[2].type}catch(e){return!1}}()||function(){try{return!!new Intl.DateTimeFormat("en",{dateStyle:"short",hour:"numeric"}).format(new Date(0))}catch(e){return!1}}()||!function(){try{return!!new Intl.DateTimeFormat(void 0,{dateStyle:"short"}).resolvedOptions().dateStyle}catch(e){return!1}}()||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.DateTimeFormat.supportedLocalesOf(t).length===t.length}(e))return e?Md([e],Bd,"en"):void 0}()&&(Hd.push(import("./c.f69cbbaf.js")),Hd.push(import("./c.ad739743.js")));const Gd=0===Hd.length?void 0:Promise.all(Hd).then((()=>Wd(function(){let e=null;if(Rd.selectedLanguage)try{const t=JSON.parse(Rd.selectedLanguage);if(t&&(e=qd(t),e))return e}catch(e){}if(navigator.languages)for(const t of navigator.languages)if(e=qd(t),e)return e;return e=qd(navigator.language),e||"en"}()))),Wd=async e=>{if(!Ud.has(e)){Ud.add(e);try{if(Intl.NumberFormat&&"function"==typeof Intl.NumberFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-numberformat/${e}.json`);Intl.NumberFormat.__addLocaleData(await t.json())}if(Intl.RelativeTimeFormat&&"function"==typeof Intl.RelativeTimeFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-relativetimeformat/${e}.json`);Intl.RelativeTimeFormat.__addLocaleData(await t.json())}if(Intl.DateTimeFormat&&"function"==typeof Intl.DateTimeFormat.__addLocaleData){const t=await fetch(`/static/locale-data/intl-datetimeformat/${e}.json`);Intl.DateTimeFormat.__addLocaleData(await t.json())}}catch(e){}}};Gd&&await Gd,Ii((e=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"}))),Ii((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})));const Yd=Ii((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"})));Ii((e=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"}))),Ii((e=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"}))),Ii((e=>new Intl.DateTimeFormat(e.language,{month:"long"}))),Ii((e=>new Intl.DateTimeFormat(e.language,{year:"numeric"})));const Kd=Ii((e=>{if(e.time_format===Vd.language||e.time_format===Vd.system){const t=e.time_format===Vd.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===Vd.am_pm}));Gd&&await Gd,Ii((e=>new Intl.DateTimeFormat("en"!==e.language||Kd(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Kd(e)?"numeric":"2-digit",minute:"2-digit",hour12:Kd(e)}))),Ii((e=>new Intl.DateTimeFormat("en"!==e.language||Kd(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Kd(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Kd(e)}))),Ii((e=>new Intl.DateTimeFormat("en"!==e.language||Kd(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:Kd(e)})));v([x("ha-entity-attribute-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"entityId",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,attribute:"allow-custom-value"})],key:"allowCustomValue",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"_opened",value:()=>!1},{kind:"field",decorators:[g("ha-combo-box",!0)],key:"_comboBox",value:void 0},{kind:"method",key:"shouldUpdate",value:function(e){return!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"updated",value:function(e){if(e.has("_opened")&&this._opened){const e=this.entityId?this.hass.states[this.entityId]:void 0;this._comboBox.items=e?Object.keys(e.attributes).map((e=>{return{value:e,label:(t=e,(e=>e.charAt(0).toUpperCase()+e.slice(1))(t=t.replace(/_/g," ").replace(/\bid\b/g,"ID").replace(/\bip\b/g,"IP").replace(/\bmac\b/g,"MAC").replace(/\bgps\b/g,"GPS")))};var t})):[]}}},{kind:"method",key:"render",value:function(){var e;return this.hass?_`
      <ha-combo-box
        .hass=${this.hass}
        .value=${this.value||""}
        .autofocus=${this.autofocus}
        .label=${null!==(e=this.label)&&void 0!==e?e:this.hass.localize("ui.components.entity.entity-attribute-picker.attribute")}
        .disabled=${this.disabled||!this.entityId}
        .required=${this.required}
        .helper=${this.helper}
        .allowCustomValue=${this.allowCustomValue}
        item-value-path="value"
        item-label-path="label"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
      </ha-combo-box>
    `:_``}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){this.value=e.detail.value}}]}}),m),v([x("ha-selector-attribute")],(function(t,i){class a extends i{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[f()],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e;return _`
      <ha-entity-attribute-picker
        .hass=${this.hass}
        .entityId=${this.selector.attribute.entity_id||(null===(e=this.context)||void 0===e?void 0:e.filter_entity)}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .disabled=${this.disabled}
        .required=${this.required}
        allow-custom-value
      ></ha-entity-attribute-picker>
    `}},{kind:"method",key:"updated",value:function(t){if(Ci(Ai(a.prototype),"updated",this).call(this,t),!this.value||this.selector.attribute.entity_id||!t.has("context"))return;const i=t.get("context");if(!this.context||(null==i?void 0:i.filter_entity)===this.context.filter_entity)return;let n=!1;if(this.context.filter_entity){const e=this.hass.states[this.context.filter_entity];e&&this.value in e.attributes||(n=!0)}else n=void 0!==this.value;n&&e(this,"value-changed",{value:void 0})}}]}}),vl(m)),v([x("ha-selector-boolean")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return _`
      <ha-formfield alignEnd spaceBetween .label=${this.label}>
        <ha-switch
          .checked=${this.value}
          @change=${this._handleChange}
          .disabled=${this.disabled}
        ></ha-switch>
      </ha-formfield>
      ${this.helper?_`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_handleChange",value:function(t){const i=t.target.checked;this.value!==i&&e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-formfield {
        display: flex;
        height: 56px;
        align-items: center;
        --mdc-typography-body2-font-size: 1em;
      }
    `}}]}}),m),v([x("ha-selector-color_rgb")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`
      <ha-textfield
        type="color"
        helperPersistent
        .value=${this.value?oa(this.value):""}
        .label=${this.label||""}
        .required=${this.required}
        .helper=${this.helper}
        .disalbled=${this.disabled}
        @change=${this._valueChanged}
      ></ha-textfield>
    `}},{kind:"method",key:"_valueChanged",value:function(t){const i=t.target.value;e(this,"value-changed",{value:sa(i)})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    :host {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    ha-textfield {
      --text-field-padding: 8px;
      min-width: 75px;
      flex-grow: 1;
      margin: 0 4px;
    }
  `}]}}),m);const Zd=()=>import("./c.7427347c.js");v([x("ha-date-input")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"method",key:"render",value:function(){return _`<ha-textfield
      .label=${this.label}
      .helper=${this.helper}
      .disabled=${this.disabled}
      iconTrailing
      helperPersistent
      @click=${this._openDialog}
      .value=${this.value?(e=new Date(this.value),t=this.locale,Yd(t).format(e)):""}
      .required=${this.required}
    >
      <ha-svg-icon slot="trailingIcon" .path=${I}></ha-svg-icon>
    </ha-textfield>`;var e,t}},{kind:"method",key:"_openDialog",value:function(){var t,i;this.disabled||(t=this,i={min:"1970-01-01",value:this.value,onChange:e=>this._valueChanged(e),locale:this.locale.language},e(t,"show-dialog",{dialogTag:"ha-dialog-date-picker",dialogImport:Zd,dialogParams:i}))}},{kind:"method",key:"_valueChanged",value:function(t){this.value!==t&&(this.value=t,e(this,"change"),e(this,"value-changed",{value:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-svg-icon {
        color: var(--secondary-text-color);
      }
    `}}]}}),m),v([x("ha-selector-date")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`
      <ha-date-input
        .label=${this.label}
        .locale=${this.hass.locale}
        .disabled=${this.disabled}
        .value=${this.value}
        .required=${this.required}
        .helper=${this.helper}
      >
      </ha-date-input>
    `}}]}}),m),v([x("ha-time-input")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[f({type:Boolean,attribute:"enable-second"})],key:"enableSecond",value:()=>!1},{kind:"method",key:"render",value:function(){var e;const t=Kd(this.locale),i=(null===(e=this.value)||void 0===e?void 0:e.split(":"))||[];let a=i[0];const n=Number(i[0]);return n&&t&&n>12&&n<24&&(a=String(n-12).padStart(2,"0")),t&&0===n&&(a="12"),_`
      <ha-base-time-input
        .label=${this.label}
        .hours=${Number(a)}
        .minutes=${Number(i[1])}
        .seconds=${Number(i[2])}
        .format=${t?12:24}
        .amPm=${t&&(n>=12?"PM":"AM")}
        .disabled=${this.disabled}
        @value-changed=${this._timeChanged}
        .enableSecond=${this.enableSecond}
        .required=${this.required}
        .helper=${this.helper}
      ></ha-base-time-input>
    `}},{kind:"method",key:"_timeChanged",value:function(t){t.stopPropagation();const i=t.detail.value,a=Kd(this.locale);let n=i.hours||0;i&&a&&("PM"===i.amPm&&n<12&&(n+=12),"AM"===i.amPm&&12===n&&(n=0));const o=`${n.toString().padStart(2,"0")}:${i.minutes?i.minutes.toString().padStart(2,"0"):"00"}:${i.seconds?i.seconds.toString().padStart(2,"0"):"00"}`;o!==this.value&&(this.value=o,e(this,"change"),e(this,"value-changed",{value:o}))}}]}}),m),v([x("ha-selector-datetime")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[g("ha-date-input")],key:"_dateInput",value:void 0},{kind:"field",decorators:[g("ha-time-input")],key:"_timeInput",value:void 0},{kind:"method",key:"render",value:function(){var e;const t=null===(e=this.value)||void 0===e?void 0:e.split(" ");return _`
      <div class="input">
        <ha-date-input
          .label=${this.label}
          .locale=${this.hass.locale}
          .disabled=${this.disabled}
          .required=${this.required}
          .value=${null==t?void 0:t[0]}
          @value-changed=${this._valueChanged}
        >
        </ha-date-input>
        <ha-time-input
          enable-second
          .value=${(null==t?void 0:t[1])||"0:00:00"}
          .locale=${this.hass.locale}
          .disabled=${this.disabled}
          .required=${this.required}
          @value-changed=${this._valueChanged}
        ></ha-time-input>
      </div>
      ${this.helper?_`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_valueChanged",value:function(t){t.stopPropagation(),e(this,"value-changed",{value:`${this._dateInput.value} ${this._timeInput.value}`})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    .input {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    ha-date-input {
      min-width: 150px;
      margin-right: 4px;
    }
  `}]}}),m),v([x("ha-devices-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({attribute:"picked-device-label"}),f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",key:"pickedDeviceLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-device-label"})],key:"pickDeviceLabel",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return _``;const e=this._currentDevices;return _`
      ${e.map((e=>_`
          <div>
            <ha-device-picker
              allow-custom-entity
              .curValue=${e}
              .hass=${this.hass}
              .deviceFilter=${this.deviceFilter}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .value=${e}
              .label=${this.pickedDeviceLabel}
              .disabled=${this.disabled}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          </div>
        `))}
      <div>
        <ha-device-picker
          allow-custom-entity
          .hass=${this.hass}
          .helper=${this.helper}
          .deviceFilter=${this.deviceFilter}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .label=${this.pickDeviceLabel}
          .disabled=${this.disabled}
          .required=${this.required&&!e.length}
          @value-changed=${this._addDevice}
        ></ha-device-picker>
      </div>
    `}},{kind:"get",key:"_currentDevices",value:function(){return this.value||[]}},{kind:"method",key:"_updateDevices",value:async function(t){e(this,"value-changed",{value:t}),this.value=t}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;i!==t&&""===i&&(""===i?this._updateDevices(this._currentDevices.filter((e=>e!==t))):this._updateDevices(this._currentDevices.map((e=>e===t?i:e))))}},{kind:"method",key:"_addDevice",value:async function(e){e.stopPropagation();const t=e.detail.value;if(e.currentTarget.value="",!t)return;const i=this._currentDevices;i.includes(t)||this._updateDevices([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>i`
    div {
      margin-top: 8px;
    }
  `}]}}),m),v([x("ha-selector-device")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[xi()],key:"_configEntries",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"updated",value:function(e){if(e.has("selector")){var t;e.get("selector")!==this.selector&&null!==(t=this.selector.device)&&void 0!==t&&t.integration&&$a(this.hass,{domain:this.selector.device.integration}).then((e=>{this._configEntries=e}))}}},{kind:"method",key:"render",value:function(){var e,t,i,a;return this.selector.device.multiple?_`
      ${this.label?_`<label>${this.label}</label>`:""}
      <ha-devices-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .deviceFilter=${this._filterDevices}
        .includeDeviceClasses=${null!==(e=this.selector.device.entity)&&void 0!==e&&e.device_class?[this.selector.device.entity.device_class]:void 0}
        .includeDomains=${null!==(t=this.selector.device.entity)&&void 0!==t&&t.domain?[this.selector.device.entity.domain]:void 0}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-devices-picker>
    `:_`
        <ha-device-picker
          .hass=${this.hass}
          .value=${this.value}
          .label=${this.label}
          .helper=${this.helper}
          .deviceFilter=${this._filterDevices}
          .includeDeviceClasses=${null!==(i=this.selector.device.entity)&&void 0!==i&&i.device_class?[this.selector.device.entity.device_class]:void 0}
          .includeDomains=${null!==(a=this.selector.device.entity)&&void 0!==a&&a.domain?[this.selector.device.entity.domain]:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
          allow-custom-entity
        ></ha-device-picker>
      `}},{kind:"field",key:"_filterDevices",value(){return e=>{var t,i,a;return(null===(t=this.selector.device)||void 0===t||!t.manufacturer||e.manufacturer===this.selector.device.manufacturer)&&((null===(i=this.selector.device)||void 0===i||!i.model||e.model===this.selector.device.model)&&!(null!==(a=this.selector.device)&&void 0!==a&&a.integration&&this._configEntries&&!this._configEntries.some((t=>e.config_entries.includes(t.entry_id)))))}}}]}}),m),v([x("ha-selector-duration")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`
      <ha-duration-input
        .label=${this.label}
        .helper=${this.helper}
        .data=${this.value}
        .disabled=${this.disabled}
        .required=${this.required}
        .enableDay=${this.selector.duration.enable_day}
      ></ha-duration-input>
    `}}]}}),m);const Qd=async(e,t,i,a,n,...o)=>{const s=n,r=s[e],l=r=>a&&a(n,r.result)!==r.cacheKey?(s[e]=void 0,Qd(e,t,i,a,n,...o)):r.result;if(r)return r instanceof Promise?r.then(l):l(r);const d=i(n,...o);return s[e]=d,d.then((i=>{s[e]={result:i,cacheKey:null==a?void 0:a(n,i)},setTimeout((()=>{s[e]=void 0}),t)}),(()=>{s[e]=void 0})),d},Xd=(e,t)=>e.callWS({type:"entity/source",entity_id:t}),Jd=/^(\w+)\.(\w+)$/;v([x("ha-entities-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[f({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[f({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return _``;const e=this._currentEntities;return _`
      ${e.map((e=>_`
          <div>
            <ha-entity-picker
              allow-custom-entity
              .curValue=${e}
              .hass=${this.hass}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeEntities=${this.includeEntities}
              .excludeEntities=${this.excludeEntities}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
              .entityFilter=${this._entityFilter}
              .value=${e}
              .label=${this.pickedEntityLabel}
              .disabled=${this.disabled}
              @value-changed=${this._entityChanged}
            ></ha-entity-picker>
          </div>
        `))}
      <div>
        <ha-entity-picker
          allow-custom-entity
          .hass=${this.hass}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeEntities=${this.includeEntities}
          .excludeEntities=${this.excludeEntities}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
          .entityFilter=${this._entityFilter}
          .label=${this.pickEntityLabel}
          .helper=${this.helper}
          .disabled=${this.disabled}
          .required=${this.required&&!e.length}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
      </div>
    `}},{kind:"field",key:"_entityFilter",value(){return e=>(!this.value||!this.value.includes(e.entity_id))&&(!this.entityFilter||this.entityFilter(e))}},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(t){this.value=t,e(this,"value-changed",{value:t})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;if(i===t||void 0!==i&&(a=i,!Jd.test(a)))return;var a;const n=this._currentEntities;i&&!n.includes(i)?this._updateEntities(n.map((e=>e===t?i:e))):this._updateEntities(n.filter((e=>e!==t)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const t=e.detail.value;if(!t)return;if(e.currentTarget.value="",!t)return;const i=this._currentEntities;i.includes(t)||this._updateEntities([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>i`
    div {
      margin-top: 8px;
    }
  `}]}}),m),v([x("ha-selector-entity")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[xi()],key:"_entitySources",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return this.selector.entity.multiple?_`
      ${this.label?_`<label>${this.label}</label>`:""}
      <ha-entities-picker
        .hass=${this.hass}
        .value=${this.value}
        .helper=${this.helper}
        .includeEntities=${this.selector.entity.include_entities}
        .excludeEntities=${this.selector.entity.exclude_entities}
        .entityFilter=${this._filterEntities}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-entities-picker>
    `:_`<ha-entity-picker
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
        .helper=${this.helper}
        .includeEntities=${this.selector.entity.include_entities}
        .excludeEntities=${this.selector.entity.exclude_entities}
        .entityFilter=${this._filterEntities}
        .disabled=${this.disabled}
        .required=${this.required}
        allow-custom-entity
      ></ha-entity-picker>`}},{kind:"method",key:"updated",value:function(e){var t,a;Ci(Ai(i.prototype),"updated",this).call(this,e),e.has("selector")&&this.selector.entity.integration&&!this._entitySources&&(t=this.hass,a?Xd(t,a):Qd("_entitySources",3e4,Xd,(e=>Object.keys(e.states).length),t)).then((e=>{this._entitySources=e}))}},{kind:"field",key:"_filterEntities",value(){return e=>{var t,i;const{domain:a,device_class:n,integration:o}=this.selector.entity;if(a){const t=Lo(e);if(Array.isArray(a)?!a.includes(t):t!==a)return!1}return(!n||e.attributes.device_class===n)&&(!o||(null===(t=this._entitySources)||void 0===t||null===(i=t[e.entity_id])||void 0===i?void 0:i.domain)===o)}}}]}}),m),v([x("ha-selector-number")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,i;const a="box"===this.selector.number.mode;return _`
      ${this.label?_`${this.label}${this.required?" *":""}`:""}
      <div class="input">
        ${a?"":_`<ha-slider
              .min=${this.selector.number.min}
              .max=${this.selector.number.max}
              .value=${this._value}
              .step=${null!==(e=this.selector.number.step)&&void 0!==e?e:1}
              .disabled=${this.disabled}
              .required=${this.required}
              pin
              ignore-bar-touch
              @change=${this._handleSliderChange}
            >
            </ha-slider>`}
        <ha-textfield
          inputMode="numeric"
          pattern="[0-9]+([\\.][0-9]+)?"
          .label=${"box"!==this.selector.number.mode?void 0:this.label}
          .placeholder=${this.placeholder}
          class=${Fi({single:"box"===this.selector.number.mode})}
          .min=${this.selector.number.min}
          .max=${this.selector.number.max}
          .value=${null!==(t=this.value)&&void 0!==t?t:""}
          .step=${null!==(i=this.selector.number.step)&&void 0!==i?i:1}
          helperPersistent
          .helper=${a?this.helper:void 0}
          .disabled=${this.disabled}
          .required=${this.required}
          .suffix=${this.selector.number.unit_of_measurement}
          type="number"
          autoValidate
          ?no-spinner=${"box"!==this.selector.number.mode}
          @input=${this._handleInputChange}
        >
        </ha-textfield>
      </div>
      ${!a&&this.helper?_`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"get",key:"_value",value:function(){var e;return null!==(e=this.value)&&void 0!==e?e:this.selector.number.min||0}},{kind:"method",key:"_handleInputChange",value:function(t){t.stopPropagation();const i=""===t.target.value||isNaN(t.target.value)?this.required?this.selector.number.min||0:void 0:Number(t.target.value);this.value!==i&&e(this,"value-changed",{value:i})}},{kind:"method",key:"_handleSliderChange",value:function(t){t.stopPropagation();const i=Number(t.target.value);this.value!==i&&e(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        direction: ltr;
      }
      ha-slider {
        flex: 1;
      }
      ha-textfield {
        --ha-textfield-input-width: 40px;
      }
      .single {
        --ha-textfield-input-width: unset;
        flex: 1;
      }
    `}}]}}),m),v([x("ha-selector-object")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`<ha-yaml-editor
        .hass=${this.hass}
        .readonly=${this.disabled}
        .label=${this.label}
        .required=${this.required}
        .placeholder=${this.placeholder}
        .defaultValue=${this.value}
        @value-changed=${this._handleChange}
      ></ha-yaml-editor>
      ${this.helper?_`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"_handleChange",value:function(t){const i=t.target.value;t.target.isValid&&this.value!==i&&e(this,"value-changed",{value:i})}}]}}),m),v([x("ha-target-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[f({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[f()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityRegFilter",value:void 0},{kind:"field",decorators:[f()],key:"entityFilter",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[xi()],key:"_areas",value:void 0},{kind:"field",decorators:[xi()],key:"_devices",value:void 0},{kind:"field",decorators:[xi()],key:"_entities",value:void 0},{kind:"field",decorators:[xi()],key:"_addMode",value:void 0},{kind:"field",decorators:[g("#input")],key:"_inputElement",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[sl(this.hass.connection,(e=>{const t={};for(const i of e)t[i.area_id]=i;this._areas=t})),cl(this.hass.connection,(e=>{const t={};for(const i of e)t[i.id]=i;this._devices=t})),pl(this.hass.connection,(e=>{this._entities=e}))]}},{kind:"method",key:"render",value:function(){var e,t,i;return this._areas&&this._devices&&this._entities?_`<div class="mdc-chip-set items">
        ${null!==(e=this.value)&&void 0!==e&&e.area_id?Yo(this.value.area_id).map((e=>{const t=this._areas[e];return this._renderChip("area_id",e,(null==t?void 0:t.name)||e,void 0,ra)})):""}
        ${null!==(t=this.value)&&void 0!==t&&t.device_id?Yo(this.value.device_id).map((e=>{const t=this._devices[e];return this._renderChip("device_id",e,t?rl(t,this.hass):e,void 0,la)})):""}
        ${null!==(i=this.value)&&void 0!==i&&i.entity_id?Yo(this.value.entity_id).map((e=>{const t=this.hass.states[e];return this._renderChip("entity_id",e,t?pn(t):e,t)})):""}
      </div>
      ${this._renderPicker()}
      <div class="mdc-chip-set">
        <div
          class="mdc-chip area_id add"
          .type=${"area_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${Xi}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_area_id")}</span
              >
            </span>
          </span>
        </div>
        <div
          class="mdc-chip device_id add"
          .type=${"device_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${Xi}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_device_id")}</span
              >
            </span>
          </span>
        </div>
        <div
          class="mdc-chip entity_id add"
          .type=${"entity_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${Xi}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_entity_id")}</span
              >
            </span>
          </span>
        </div>
      </div>

      ${this.helper?_`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `:_``}},{kind:"method",key:"_showPicker",value:async function(e){this._addMode=e.currentTarget.type,await this.updateComplete,setTimeout((()=>{var e,t;null===(e=this._inputElement)||void 0===e||e.open(),null===(t=this._inputElement)||void 0===t||t.focus()}),0)}},{kind:"method",key:"_renderChip",value:function(e,t,i,a,n){return _`
      <div
        class="mdc-chip ${Fi({[e]:!0})}"
      >
        ${n?_`<ha-svg-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .path=${n}
            ></ha-svg-icon>`:""}
        ${a?_`<ha-state-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .state=${a}
            ></ha-state-icon>`:""}
        <span role="gridcell">
          <span role="button" tabindex="0" class="mdc-chip__primary-action">
            <span class="mdc-chip__text">${i}</span>
          </span>
        </span>
        ${"entity_id"===e?"":_` <span role="gridcell">
              <ha-icon-button
                class="expand-btn mdc-chip__icon mdc-chip__icon--trailing"
                tabindex="-1"
                role="button"
                .label=${this.hass.localize("ui.components.target-picker.expand")}
                .path=${da}
                hideTooltip
                .id=${t}
                .type=${e}
                @click=${this._handleExpand}
              ></ha-icon-button>
              <paper-tooltip class="expand" animation-delay="0"
                >${this.hass.localize(`ui.components.target-picker.expand_${e}`)}</paper-tooltip
              >
            </span>`}
        <span role="gridcell">
          <ha-icon-button
            class="mdc-chip__icon mdc-chip__icon--trailing"
            tabindex="-1"
            role="button"
            .label=${this.hass.localize("ui.components.target-picker.expand")}
            .path=${y}
            hideTooltip
            .id=${t}
            .type=${e}
            @click=${this._handleRemove}
          ></ha-icon-button>
          <paper-tooltip animation-delay="0"
            >${this.hass.localize(`ui.components.target-picker.remove_${e}`)}</paper-tooltip
          >
        </span>
      </div>
    `}},{kind:"method",key:"_renderPicker",value:function(){switch(this._addMode){case"area_id":return _`<ha-area-picker
          .hass=${this.hass}
          id="input"
          .type=${"area_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_area_id")}
          no-add
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityRegFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          @value-changed=${this._targetPicked}
        ></ha-area-picker>`;case"device_id":return _`<ha-device-picker
          .hass=${this.hass}
          id="input"
          .type=${"device_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_device_id")}
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityRegFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          @value-changed=${this._targetPicked}
        ></ha-device-picker>`;case"entity_id":return _`<ha-entity-picker
          .hass=${this.hass}
          id="input"
          .type=${"entity_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_entity_id")}
          .entityFilter=${this.entityFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          @value-changed=${this._targetPicked}
          allow-custom-entity
        ></ha-entity-picker>`}return _``}},{kind:"method",key:"_targetPicked",value:function(t){if(t.stopPropagation(),!t.detail.value)return;const i=t.detail.value,a=t.currentTarget;a.value="",this._addMode=void 0,e(this,"value-changed",{value:this.value?{...this.value,[a.type]:this.value[a.type]?[...Yo(this.value[a.type]),i]:i}:{[a.type]:i}})}},{kind:"method",key:"_handleExpand",value:function(t){const i=t.currentTarget,a=[],n=[];if("area_id"===i.type)Object.values(this._devices).forEach((e=>{var t;e.area_id!==i.id||null!==(t=this.value.device_id)&&void 0!==t&&t.includes(e.id)||!this._deviceMeetsFilter(e)||a.push(e.id)})),this._entities.forEach((e=>{var t;e.area_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||n.push(e.entity_id)}));else{if("device_id"!==i.type)return;this._entities.forEach((e=>{var t;e.device_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||n.push(e.entity_id)}))}let o=this.value;n.length&&(o=this._addItems(o,"entity_id",n)),a.length&&(o=this._addItems(o,"device_id",a)),o=this._removeItem(o,i.type,i.id),e(this,"value-changed",{value:o})}},{kind:"method",key:"_handleRemove",value:function(t){const i=t.currentTarget;e(this,"value-changed",{value:this._removeItem(this.value,i.type,i.id)})}},{kind:"method",key:"_addItems",value:function(e,t,i){return{...e,[t]:e[t]?Yo(e[t]).concat(i):i}}},{kind:"method",key:"_removeItem",value:function(e,t,i){const a=Yo(e[t]).filter((e=>String(e)!==i));if(a.length)return{...e,[t]:a};const n={...e};return delete n[t],Object.keys(n).length?n:void 0}},{kind:"method",key:"_deviceMeetsFilter",value:function(e){var t;const i=null===(t=this._entities)||void 0===t?void 0:t.filter((t=>t.device_id===e.id));if(this.includeDomains){if(!i||!i.length)return!1;if(!i.some((e=>this.includeDomains.includes(hn(e.entity_id)))))return!1}if(this.includeDeviceClasses){if(!i||!i.length)return!1;if(!i.some((e=>{const t=this.hass.states[e.entity_id];return!!t&&(t.attributes.device_class&&this.includeDeviceClasses.includes(t.attributes.device_class))})))return!1}return!this.deviceFilter||this.deviceFilter(e)}},{kind:"method",key:"_entityRegMeetsFilter",value:function(e){if(e.entity_category)return!1;if(this.includeDomains&&!this.includeDomains.includes(hn(e.entity_id)))return!1;if(this.includeDeviceClasses){const t=this.hass.states[e.entity_id];if(!t)return!1;if(!t.attributes.device_class||!this.includeDeviceClasses.includes(t.attributes.device_class))return!1}return!this.entityRegFilter||this.entityRegFilter(e)}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ${ca(Aa)}
      .mdc-chip {
        color: var(--primary-text-color);
      }
      .items {
        z-index: 2;
      }
      .mdc-chip-set {
        padding: 4px 0;
      }
      .mdc-chip.add {
        color: rgba(0, 0, 0, 0.87);
      }
      .mdc-chip:not(.add) {
        cursor: default;
      }
      .mdc-chip ha-icon-button {
        --mdc-icon-button-size: 24px;
        display: flex;
        align-items: center;
        outline: none;
      }
      .mdc-chip ha-icon-button ha-svg-icon {
        border-radius: 50%;
        background: var(--secondary-text-color);
      }
      .mdc-chip__icon.mdc-chip__icon--trailing {
        width: 16px;
        height: 16px;
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
        margin-inline-start: 4px !important;
        margin-inline-end: -4px !important;
        direction: var(--direction);
      }
      .mdc-chip__icon--leading {
        display: flex;
        align-items: center;
        justify-content: center;
        --mdc-icon-size: 20px;
        border-radius: 50%;
        padding: 6px;
        margin-left: -14px !important;
        margin-inline-start: -14px !important;
        margin-inline-end: 4px !important;
        direction: var(--direction);
      }
      .expand-btn {
        margin-right: 0;
      }
      .mdc-chip.area_id:not(.add) {
        border: 2px solid #fed6a4;
        background: var(--card-background-color);
      }
      .mdc-chip.area_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.area_id.add {
        background: #fed6a4;
      }
      .mdc-chip.device_id:not(.add) {
        border: 2px solid #a8e1fb;
        background: var(--card-background-color);
      }
      .mdc-chip.device_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.device_id.add {
        background: #a8e1fb;
      }
      .mdc-chip.entity_id:not(.add) {
        border: 2px solid #d2e7b9;
        background: var(--card-background-color);
      }
      .mdc-chip.entity_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.entity_id.add {
        background: #d2e7b9;
      }
      .mdc-chip:hover {
        z-index: 5;
      }
      paper-tooltip.expand {
        min-width: 200px;
      }
      :host([disabled]) .mdc-chip {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `}}]}}),vl(m)),v([x("ha-selector-target")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[xi()],key:"_entityPlaformLookup",value:void 0},{kind:"field",decorators:[xi()],key:"_configEntries",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"hassSubscribe",value:function(){return[pl(this.hass.connection,(e=>{const t={};for(const i of e)i.platform&&(t[i.entity_id]=i.platform);this._entityPlaformLookup=t}))]}},{kind:"method",key:"updated",value:function(e){if(e.has("selector")){var t,i;e.get("selector")!==this.selector&&(null!==(t=this.selector.target.device)&&void 0!==t&&t.integration||null!==(i=this.selector.target.entity)&&void 0!==i&&i.integration)&&this._loadConfigEntries()}}},{kind:"method",key:"render",value:function(){var e,t;return _`<ha-target-picker
      .hass=${this.hass}
      .value=${this.value}
      .helper=${this.helper}
      .deviceFilter=${this._filterDevices}
      .entityRegFilter=${this._filterRegEntities}
      .entityFilter=${this._filterEntities}
      .includeDeviceClasses=${null!==(e=this.selector.target.entity)&&void 0!==e&&e.device_class?[this.selector.target.entity.device_class]:void 0}
      .includeDomains=${null!==(t=this.selector.target.entity)&&void 0!==t&&t.domain?[this.selector.target.entity.domain]:void 0}
      .disabled=${this.disabled}
    ></ha-target-picker>`}},{kind:"field",key:"_filterEntities",value(){return e=>{var t,i,a,n;if((null!==(t=this.selector.target.entity)&&void 0!==t&&t.integration||null!==(i=this.selector.target.device)&&void 0!==i&&i.integration)&&(!this._entityPlaformLookup||this._entityPlaformLookup[e.entity_id]!==((null===(a=this.selector.target.entity)||void 0===a?void 0:a.integration)||(null===(n=this.selector.target.device)||void 0===n?void 0:n.integration))))return!1;return!0}}},{kind:"field",key:"_filterRegEntities",value(){return e=>{var t;return null===(t=this.selector.target.entity)||void 0===t||!t.integration||e.platform===this.selector.target.entity.integration}}},{kind:"field",key:"_filterDevices",value(){return e=>{var t,i,a,n,o;if(null!==(t=this.selector.target.device)&&void 0!==t&&t.manufacturer&&e.manufacturer!==this.selector.target.device.manufacturer)return!1;if(null!==(i=this.selector.target.device)&&void 0!==i&&i.model&&e.model!==this.selector.target.device.model)return!1;if((null!==(a=this.selector.target.device)&&void 0!==a&&a.integration||null!==(n=this.selector.target.entity)&&void 0!==n&&n.integration)&&(null===(o=this._configEntries)||void 0===o||!o.some((t=>e.config_entries.includes(t.entry_id)))))return!1;return!0}}},{kind:"method",key:"_loadConfigEntries",value:async function(){this._configEntries=(await $a(this.hass)).filter((e=>{var t,i;return e.domain===(null===(t=this.selector.target.device)||void 0===t?void 0:t.integration)||e.domain===(null===(i=this.selector.target.entity)||void 0===i?void 0:i.integration)}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-target-picker {
        display: block;
      }
    `}}]}}),vl(m)),v([x("ha-selector-template")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`
      ${this.label?_`<p>${this.label}${this.required?" *":""}</p>`:""}
      <ha-code-editor
        mode="jinja2"
        .hass=${this.hass}
        .value=${this.value}
        .readOnly=${this.disabled}
        autofocus
        autocomplete-entities
        @value-changed=${this._handleChange}
        dir="ltr"
      ></ha-code-editor>
      ${this.helper?_`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_handleChange",value:function(t){const i=t.target.value;this.value!==i&&e(this,"value-changed",{value:i})}}]}}),m),v([x("ha-selector-text")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[xi()],key:"_unmaskedPassword",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,i,a,n;return null!==(e=this.selector.text)&&void 0!==e&&e.multiline?_`<ha-textarea
        .label=${this.label}
        .placeholder=${this.placeholder}
        .value=${this.value||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        @input=${this._handleChange}
        autocapitalize="none"
        autocomplete="off"
        spellcheck="false"
        .required=${this.required}
        autogrow
      ></ha-textarea>`:_`<ha-textfield
        .value=${this.value||""}
        .placeholder=${this.placeholder||""}
        .helper=${this.helper}
        helperPersistent
        .disabled=${this.disabled}
        .type=${this._unmaskedPassword?"text":null===(t=this.selector.text)||void 0===t?void 0:t.type}
        @input=${this._handleChange}
        .label=${this.label||""}
        .suffix=${"password"===(null===(i=this.selector.text)||void 0===i?void 0:i.type)?_`<div style="width: 24px"></div>`:null===(a=this.selector.text)||void 0===a?void 0:a.suffix}
        .required=${this.required}
      ></ha-textfield>
      ${"password"===(null===(n=this.selector.text)||void 0===n?void 0:n.type)?_`<ha-icon-button
            toggles
            .label=${(this._unmaskedPassword?"Hide":"Show")+" password"}
            @click=${this._toggleUnmaskedPassword}
            .path=${this._unmaskedPassword?ua:ee}
          ></ha-icon-button>`:""}`}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",key:"_handleChange",value:function(t){let i=t.target.value;this.value!==i&&(""!==i||this.required||(i=void 0),e(this,"value-changed",{value:i}))}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
        position: relative;
      }
      ha-textarea,
      ha-textfield {
        width: 100%;
      }
      ha-icon-button {
        position: absolute;
        top: 16px;
        right: 16px;
        --mdc-icon-button-size: 24px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
    `}}]}}),m),v([x("ha-selector-time")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return _`
      <ha-time-input
        .value=${this.value}
        .locale=${this.hass.locale}
        .disabled=${this.disabled}
        .required=${this.required}
        .helper=${this.helper}
        .label=${this.label}
        enable-second
      ></ha-time-input>
    `}}]}}),m),v([x("ha-selector-icon")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`
      <ha-icon-picker
        .label=${this.label}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .fallbackPath=${this.selector.icon.fallbackPath}
        .placeholder=${this.selector.icon.placeholder}
        @value-changed=${this._valueChanged}
      ></ha-icon-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(t){e(this,"value-changed",{value:t.detail.value})}}]}}),m),v([x("ha-theme-picker")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return _`
      <ha-select
        .label=${this.label||this.hass.localize("ui.components.theme_picker.theme")}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        @selected=${this._changed}
        @closed=${Ia}
        fixedMenuPosition
        naturalMenuWidth
      >
        <mwc-list-item value="remove"
          >${this.hass.localize("ui.components.theme_picker.no_theme")}</mwc-list-item
        >
        ${Object.keys(this.hass.themes.themes).sort().map((e=>_`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
      </ha-select>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-select {
        width: 100%;
      }
    `}},{kind:"method",key:"_changed",value:function(t){this.hass&&""!==t.target.value&&(this.value="remove"===t.target.value?void 0:t.target.value,e(this,"value-changed",{value:this.value}))}}]}}),m),v([x("ha-selector-theme")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return _`
      <ha-theme-picker
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-theme-picker>
    `}}]}}),m);const ec=(e,t)=>e.tileLayer(`https://{s}.basemaps.cartocdn.com/${t?"dark_all":"light_all"}/{z}/{x}/{y}${e.Browser.retina?"@2x.png":".png"}`,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20});let tc=v(null,(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[f({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[f({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[f({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return _`
      <div
        class="marker"
        style=${$i({"border-color":this.entityColor})}
        @click=${this._badgeTap}
      >
        ${this.entityPicture?_`<div
              class="entity-picture"
              style=${$i({"background-image":`url(${this.entityPicture})`})}
            ></div>`:this.entityName}
      </div>
    `}},{kind:"method",key:"_badgeTap",value:function(t){t.stopPropagation(),this.entityId&&e(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        width: 48px;
        height: 48px;
        font-size: var(--ha-marker-font-size, 1.5em);
        border-radius: 50%;
        border: 1px solid var(--ha-marker-color, var(--primary-color));
        color: var(--primary-text-color);
        background-color: var(--card-background-color);
      }
      .entity-picture {
        background-size: cover;
        height: 100%;
        width: 100%;
      }
    `}}]}}),m);customElements.define("ha-entity-marker",tc);const ic=async()=>{"function"!=typeof ResizeObserver&&(window.ResizeObserver=(await import("./c.004a7b01.js")).default)},ac=e=>"string"==typeof e?e:e.entity_id;v([x("ha-map")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"fitZones",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[f({type:Number})],key:"zoom",value:()=>14},{kind:"field",decorators:[xi()],key:"_loaded",value:()=>!1},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_tileLayer",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){Ci(Ai(a.prototype),"connectedCallback",this).call(this),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){Ci(Ai(a.prototype),"disconnectedCallback",this).call(this),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(e){var t;if(Ci(Ai(a.prototype),"update",this).call(this,e),!this._loaded)return;const i=e.get("hass");if(e.has("_loaded")||e.has("entities"))this._drawEntities();else if(this._loaded&&i&&this.entities)for(const e of this.entities)if(i.states[ac(e)]!==this.hass.states[ac(e)]){this._drawEntities();break}if((e.has("_loaded")||e.has("paths"))&&this._drawPaths(),(e.has("_loaded")||e.has("layers"))&&this._drawLayers(e.get("layers")),(e.has("_loaded")||(e.has("entities")||e.has("layers"))&&this.autoFit)&&this.fitMap(),e.has("zoom")&&this.leafletMap.setZoom(this.zoom),!e.has("darkMode")&&(!e.has("hass")||i&&i.themes.darkMode===this.hass.themes.darkMode))return;const n=null!==(t=this.darkMode)&&void 0!==t?t:this.hass.themes.darkMode;this._tileLayer=((e,t,i,a)=>(t.removeLayer(i),(i=ec(e,a)).addTo(t),i))(this.Leaflet,this.leafletMap,this._tileLayer,n),this.shadowRoot.getElementById("map").classList.toggle("dark",n)}},{kind:"method",key:"_loadMap",value:async function(){var e;let t=this.shadowRoot.getElementById("map");t||(t=document.createElement("div"),t.id="map",this.shadowRoot.append(t));const i=null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode;[this.leafletMap,this.Leaflet,this._tileLayer]=await(async(e,t)=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const i=(await import("./c.99c1c4ba.js")).default;i.Icon.Default.imagePath="/static/images/leaflet/images/";const a=i.map(e),n=document.createElement("link");return n.setAttribute("href","/static/images/leaflet/leaflet.css"),n.setAttribute("rel","stylesheet"),e.parentNode.appendChild(n),a.setView([52.3731339,4.8903147],13),[a,i,ec(i,Boolean(t)).addTo(a)]})(t,i),this.shadowRoot.getElementById("map").classList.toggle("dark",i),this._loaded=!0}},{kind:"method",key:"fitMap",value:function(){var e,t;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapItems.length||null!==(e=this.layers)&&void 0!==e&&e.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),this.zoom);let i=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map((e=>e.getLatLng())):[]);var a;this.fitZones&&(null===(a=this._mapZones)||void 0===a||a.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})));null===(t=this.layers)||void 0===t||t.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})),this.layers||(i=i.pad(.5)),this.leafletMap.fitBounds(i,{maxZoom:this.zoom})}},{kind:"method",key:"_drawLayers",value:function(e){if(e&&e.forEach((e=>e.remove())),!this.layers)return;const t=this.leafletMap;this.layers.forEach((e=>{t.addLayer(e)}))}},{kind:"method",key:"_drawPaths",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((e=>e.remove())),this._mapPaths=[]),!this.paths)return;const a=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((e=>{let n,o;e.gradualOpacity&&(n=e.gradualOpacity/(e.points.length-2),o=1-e.gradualOpacity);for(let t=0;t<e.points.length-1;t++){const s=e.gradualOpacity?o+t*n:void 0;this._mapPaths.push(i.circleMarker(e.points[t],{radius:3,color:e.color||a,opacity:s,fillOpacity:s,interactive:!1})),this._mapPaths.push(i.polyline([e.points[t],e.points[t+1]],{color:e.color||a,opacity:s,interactive:!1}))}const s=e.points.length-1;if(s>=0){const t=e.gradualOpacity?o+s*n:void 0;this._mapPaths.push(i.circleMarker(e.points[s],{radius:3,color:e.color||a,opacity:t,fillOpacity:t,interactive:!1}))}this._mapPaths.forEach((e=>t.addLayer(e)))}))}},{kind:"method",key:"_drawEntities",value:function(){var e;const t=this.hass,i=this.leafletMap,a=this.Leaflet;if(!t||!i||!a)return;if(this._mapItems.length&&(this._mapItems.forEach((e=>e.remove())),this._mapItems=[]),this._mapZones.length&&(this._mapZones.forEach((e=>e.remove())),this._mapZones=[]),!this.entities)return;const n=getComputedStyle(this),o=n.getPropertyValue("--accent-color"),s=n.getPropertyValue("--dark-primary-color"),r=(null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode)?"dark":"light";for(const e of this.entities){const i=t.states[ac(e)];if(!i)continue;const n=pn(i),{latitude:l,longitude:d,passive:c,icon:u,radius:h,entity_picture:p,gps_accuracy:v}=i.attributes;if(!l||!d)continue;if("zone"===Lo(i)){if(c)continue;let e="";if(u){const t=document.createElement("ha-icon");t.setAttribute("icon",u),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=n,e=t.outerHTML}this._mapZones.push(a.marker([l,d],{icon:a.divIcon({html:e,iconSize:[24,24],className:r}),interactive:!1,title:n})),this._mapZones.push(a.circle([l,d],{interactive:!1,color:o,radius:h}));continue}const m=n.split(" ").map((e=>e[0])).join("").substr(0,3);this._mapItems.push(a.marker([l,d],{icon:a.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${ac(e)}"\n                entity-name="${m}"\n                entity-picture="${p?this.hass.hassUrl(p):""}"\n                ${"string"!=typeof e?`entity-color="${e.color}"`:""}\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:pn(i)})),v&&this._mapItems.push(a.circle([l,d],{interactive:!1,color:s,radius:v}))}this._mapItems.forEach((e=>i.addLayer(e))),this._mapZones.forEach((e=>i.addLayer(e)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await ic(),this._resizeObserver=new ResizeObserver((()=>{var e;null===(e=this.leafletMap)||void 0===e||e.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
      #map.dark {
        background: #090909;
      }
      .light {
        color: #000000;
      }
      .dark {
        color: #ffffff;
      }
      .leaflet-marker-draggable {
        cursor: move !important;
      }
      .leaflet-edit-resize {
        border-radius: 50%;
        cursor: nesw-resize !important;
      }
      .named-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }
      .leaflet-pane {
        z-index: 0 !important;
      }
      .leaflet-control,
      .leaflet-top,
      .leaflet-bottom {
        z-index: 1 !important;
      }
    `}}]}}),Si),v([x("ha-locations-editor")],(function(t,a){class n extends a{constructor(){super(),t(this),import("./c.99c1c4ba.js").then((e=>{import("./c.bc53dda1.js").then((()=>{this.Leaflet=e.default,this._updateMarkers(),this.updateComplete.then((()=>this.fitMap()))}))}))}}return{F:n,d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"locations",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[f({type:Number})],key:"zoom",value:()=>16},{kind:"field",decorators:[f({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[xi()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[xi()],key:"_circles",value:()=>({})},{kind:"field",decorators:[g("ha-map",!0)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"method",key:"fitMap",value:function(){this.map.fitMap()}},{kind:"method",key:"fitMarker",value:function(e){if(!this.map.leafletMap||!this._locationMarkers)return;const t=this._locationMarkers[e];if(t)if("getBounds"in t)this.map.leafletMap.fitBounds(t.getBounds()),t.bringToFront();else{const i=this._circles[e];i?this.map.leafletMap.fitBounds(i.getBounds()):this.map.leafletMap.setView(t.getLatLng(),this.zoom)}}},{kind:"method",key:"render",value:function(){return _`
      <ha-map
        .hass=${this.hass}
        .layers=${this._getLayers(this._circles,this._locationMarkers)}
        .zoom=${this.zoom}
        .autoFit=${this.autoFit}
        .darkMode=${this.darkMode}
      ></ha-map>
      ${this.helper?_`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"field",key:"_getLayers",value:()=>Ii(((e,t)=>{const i=[];return Array.prototype.push.apply(i,Object.values(e)),t&&Array.prototype.push.apply(i,Object.values(t)),i}))},{kind:"method",key:"willUpdate",value:function(e){Ci(Ai(n.prototype),"willUpdate",this).call(this,e),this.Leaflet&&e.has("locations")&&this._updateMarkers()}},{kind:"method",key:"_updateLocation",value:function(t){const i=t.target,a=i.getLatLng();let n=a.lng;Math.abs(n)>180&&(n=(n%360+540)%360-180);const o=[a.lat,n];e(this,"location-updated",{id:i.id,location:o},{bubbles:!1})}},{kind:"method",key:"_updateRadius",value:function(t){const i=t.target,a=this._locationMarkers[i.id];e(this,"radius-updated",{id:i.id,radius:a.getRadius()},{bubbles:!1})}},{kind:"method",key:"_markerClicked",value:function(t){const i=t.target;e(this,"marker-clicked",{id:i.id},{bubbles:!1})}},{kind:"method",key:"_updateMarkers",value:function(){if(!this.locations||!this.locations.length)return this._circles={},void(this._locationMarkers=void 0);const t={},i={},a=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach((e=>{let n;if(e.icon){const t=document.createElement("div");t.className="named-icon",e.name&&(t.innerText=e.name);const i=document.createElement("ha-icon");i.setAttribute("icon",e.icon),t.prepend(i),n=this.Leaflet.divIcon({html:t.outerHTML,iconSize:[24,24],className:"light"})}if(e.radius){const o=this.Leaflet.circle([e.latitude,e.longitude],{color:e.radius_color||a,radius:e.radius});e.radius_editable||e.location_editable?(o.editing.enable(),o.addEventListener("add",(()=>{const t=o.editing._moveMarker,i=o.editing._resizeMarkers[0];n&&t.setIcon(n),i.id=t.id=e.id,t.addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e))),e.radius_editable?i.addEventListener("dragend",(e=>this._updateRadius(e))):i.remove()})),t[e.id]=o):i[e.id]=o}if(!e.radius||!e.radius_editable&&!e.location_editable){const i={title:e.name,draggable:e.location_editable};n&&(i.icon=n);const a=this.Leaflet.marker([e.latitude,e.longitude],i).addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e)));a.id=e.id,t[e.id]=a}})),this._circles=i,this._locationMarkers=t,e(this,"markers-updated")}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      ha-map {
        display: block;
        height: 100%;
      }
    `}}]}}),m),v([x("ha-selector-location")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[f({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return _`
      <ha-locations-editor
        class="flex"
        .hass=${this.hass}
        .helper=${this.helper}
        .locations=${this._location(this.selector,this.value)}
        @location-updated=${this._locationChanged}
        @radius-updated=${this._radiusChanged}
      ></ha-locations-editor>
    `}},{kind:"field",key:"_location",value(){return Ii(((e,t)=>{const i=getComputedStyle(this),a=e.location.radius?i.getPropertyValue("--zone-radius-color")||i.getPropertyValue("--accent-color"):void 0;return[{id:"location",latitude:(null==t?void 0:t.latitude)||this.hass.config.latitude,longitude:(null==t?void 0:t.longitude)||this.hass.config.longitude,radius:e.location.radius?(null==t?void 0:t.radius)||1e3:void 0,radius_color:a,icon:e.location.icon||e.location.radius?"mdi:map-marker-radius":"mdi:map-marker",location_editable:!0,radius_editable:!0}]}))}},{kind:"method",key:"_locationChanged",value:function(t){const[i,a]=t.detail.location;e(this,"value-changed",{value:{...this.value,latitude:i,longitude:a}})}},{kind:"method",key:"_radiusChanged",value:function(t){const i=t.detail.radius;e(this,"value-changed",{value:{...this.value,radius:i}})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    :host {
      display: block;
      height: 400px;
    }
  `}]}}),m);customElements.define("ha-labeled-slider",class extends n{static get template(){return a`
      <style>
        :host {
          display: block;
        }

        .title {
          margin: 5px 0 8px;
          color: var(--primary-text-color);
        }

        .slider-container {
          display: flex;
        }

        ha-icon {
          margin-top: 4px;
          color: var(--secondary-text-color);
        }

        ha-slider {
          flex-grow: 1;
          background-image: var(--ha-slider-background);
          border-radius: 4px;
        }
      </style>

      <div class="title">[[_getTitle()]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-slider>
      </div>
      <template is="dom-if" if="[[helper]]">
        <ha-input-helper-text>[[helper]]</ha-input-helper-text>
      </template>
    `}_getTitle(){return`${this.caption}${this.caption&&this.required?" *":""}`}static get properties(){return{caption:String,disabled:Boolean,required:Boolean,min:Number,max:Number,pin:Boolean,step:Number,helper:String,extra:{type:Boolean,value:!1},ignoreBarTouch:{type:Boolean,value:!0},icon:{type:String,value:""},value:{type:Number,notify:!0}}}}),v([x("ha-selector-color_temp")],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){var e,t,i,a;return _`
      <ha-labeled-slider
        pin
        icon="hass:thermometer"
        .caption=${this.label||""}
        .min=${null!==(e=null===(t=this.selector.color_temp)||void 0===t?void 0:t.min_mireds)&&void 0!==e?e:153}
        .max=${null!==(i=null===(a=this.selector.color_temp)||void 0===a?void 0:a.max_mireds)&&void 0!==i?i:500}
        .value=${this.value}
        .disabled=${this.disabled}
        .helper=${this.helper}
        .required=${this.required}
        @change=${this._valueChanged}
      ></ha-labeled-slider>
    `}},{kind:"method",key:"_valueChanged",value:function(t){e(this,"value-changed",{value:Number(t.target.value)})}},{kind:"field",static:!0,key:"styles",value:()=>i`
    ha-labeled-slider {
      --ha-slider-background: -webkit-linear-gradient(
        right,
        rgb(255, 160, 0) 0%,
        white 50%,
        rgb(166, 209, 255) 100%
      );
      /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
      --paper-slider-knob-start-border-color: var(--primary-color);
    }
  `}]}}),m);let nc=v([x("ha-selector")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[f()],key:"hass",value:void 0},{kind:"field",decorators:[f()],key:"selector",value:void 0},{kind:"field",decorators:[f()],key:"value",value:void 0},{kind:"field",decorators:[f()],key:"label",value:void 0},{kind:"field",decorators:[f()],key:"helper",value:void 0},{kind:"field",decorators:[f()],key:"placeholder",value:void 0},{kind:"field",decorators:[f({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[f({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[f()],key:"context",value:void 0},{kind:"method",key:"focus",value:function(){var e,t;null===(e=this.shadowRoot)||void 0===e||null===(t=e.getElementById("selector"))||void 0===t||t.focus()}},{kind:"get",key:"_type",value:function(){return Object.keys(this.selector)[0]}},{kind:"method",key:"render",value:function(){return _`
      ${pa(`ha-selector-${this._type}`,{hass:this.hass,selector:this.selector,value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,context:this.context,id:"selector"})}
    `}}]}}),m);var oc=Object.freeze({__proto__:null,HaSelector:nc});export{Dl as B,Vl as M,Pd as a,Nl as b,Ma as c,Hl as d,Od as e,Td as f,Bl as g,oc as h,ic as i,xd as l,Nd as t};
