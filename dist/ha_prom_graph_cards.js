function e(e,t,s,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,s,l):n(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new r("string"==typeof e?e:e+"",void 0,i),o=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new r(s,e,i)},a=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return l(t)})(e):e,{is:c,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,m=globalThis,g=m.trustedTypes,_=g?g.emptyScript:"",v=m.reactiveElementPolyfillSupport,y=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},b=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);n?.call(this,t),this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(s)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:x).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i;const r=n.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(void 0!==e){const r=this.constructor;if(!1===i&&(n=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??b)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,s,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,A=e=>e,S=k.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+M,z=`<${P}>`,T=document,D=()=>T.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,R="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,U=/>/g,N=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,q=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),B=q(1),W=q(2),G=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Q=new WeakMap,K=T.createTreeWalker(T,129);function J(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Z=(e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":3===t?"<math>":"",l=F;for(let t=0;t<s;t++){const s=e[t];let o,a,c=-1,h=0;for(;h<s.length&&(l.lastIndex=h,a=l.exec(s),null!==a);)h=l.lastIndex,l===F?"!--"===a[1]?l=L:void 0!==a[1]?l=U:void 0!==a[2]?(I.test(a[2])&&(n=RegExp("</"+a[2],"g")),l=N):void 0!==a[3]&&(l=N):l===N?">"===a[0]?(l=n??F,c=-1):void 0===a[1]?c=-2:(c=l.lastIndex-a[2].length,o=a[1],l=void 0===a[3]?N:'"'===a[3]?j:V):l===j||l===V?l=N:l===L||l===U?l=F:(l=N,n=void 0);const u=l===N&&e[t+1].startsWith("/>")?" ":"";r+=l===F?s+z:c>=0?(i.push(o),s.slice(0,c)+C+s.slice(c)+M+u):s+M+(-2===c?t:u)}return[J(e,r+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class X{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const l=e.length-1,o=this.parts,[a,c]=Z(e,t);if(this.el=X.createElement(a,s),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&o.length<l;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(C)){const t=c[r++],s=i.getAttribute(e).split(M),l=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:l[2],strings:s,ctor:"."===l[1]?ne:"?"===l[1]?re:"@"===l[1]?le:ie}),i.removeAttribute(e)}else e.startsWith(M)&&(o.push({type:6,index:n}),i.removeAttribute(e));if(I.test(i.tagName)){const e=i.textContent.split(M),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],D()),K.nextNode(),o.push({type:2,index:++n});i.append(e[t],D())}}}else if(8===i.nodeType)if(i.data===P)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(M,e+1));)o.push({type:7,index:n}),e+=M.length-1}n++}}static createElement(e,t){const s=T.createElement("template");return s.innerHTML=e,s}}function ee(e,t,s=e,i){if(t===G)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=H(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=ee(e,n._$AS(e,t.values),n,i)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??T).importNode(t,!0);K.currentNode=i;let n=K.nextNode(),r=0,l=0,o=s[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new se(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new oe(n,this,e)),this._$AV.push(t),o=s[++l]}r!==o?.index&&(n=K.nextNode(),r++)}return K.currentNode=T,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),H(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=X.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new te(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new X(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new se(this.O(D()),this.O(D()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Y}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=ee(this,e,t,0),r=!H(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const i=e;let l,o;for(e=n[0],l=0;l<n.length-1;l++)o=ee(this,i[s+l],t,l),o===G&&(o=this._$AH[l]),r||=!H(o)||o!==this._$AH[l],o===Y?e=Y:e!==Y&&(e+=(o??"")+n[l+1]),this._$AH[l]=o}r&&!i&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ne extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class le extends ie{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??Y)===G)return;const s=this._$AH,i=e===Y&&s!==Y||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==Y&&(s===Y||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const ae=k.litHtmlPolyfillSupport;ae?.(X,se),(k.litHtmlVersions??=[]).push("3.3.3");const ce=globalThis;class he extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=s?.renderBefore??null;i._$litPart$=n=new se(t.insertBefore(D(),e),e,void 0,s??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}he._$litElement$=!0,he.finalized=!0,ce.litElementHydrateSupport?.({LitElement:he});const ue=ce.litElementPolyfillSupport;ue?.({LitElement:he}),(ce.litElementVersions??=[]).push("4.2.2");const de=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:b},fe=(e=pe,t,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const n=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,n,e,!0,s)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];t.call(this,s),this.requestUpdate(i,n,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function me(e){return(t,s)=>"object"==typeof s?fe(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function ge(e){return me({...e,state:!0,attribute:!1})}class _e{constructor(e,t){this.hass=e,this.entryId=t}_msg(e,t={}){const s={type:`prometheus_dashboard/${e}`};this.entryId&&(s.entry_id=this.entryId);for(const[e,i]of Object.entries(t))void 0!==i&&(s[e]=i);return s}async instantQuery(e,t){return this.hass.callWS(this._msg("query",{query:e,time:t}))}async rangeQuery(e,t,s,i){return this.hass.callWS(this._msg("query_range",{query:e,start:t,end:s,step:i}))}async getLabels(){return(await this.hass.callWS(this._msg("labels"))).data}async getLabelValues(e){return(await this.hass.callWS(this._msg("label_values",{label:e}))).data}async getMetadata(e){return(await this.hass.callWS(this._msg("metadata",{metric:e}))).data}async getSeries(e){return(await this.hass.callWS(this._msg("series",{match:e}))).data}static async getEntries(e){return e.callWS({type:"prometheus_dashboard/entries"})}}const ve=o`
  ha-card {
    border-radius: var(--ha-card-border-radius, 12px);
    overflow: hidden;
    padding: 16px;
    background: var(--card-background-color, var(--paper-card-background-color, white));
    box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12));
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .card-header {
    font-weight: 500;
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }

  .card-content {
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .value-large {
    font-size: 36px;
    font-weight: 700;
    color: var(--primary-text-color);
    line-height: 1.2;
  }

  .value-unit {
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-text-color);
    margin-left: 4px;
  }

  .icon-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-color);
    opacity: 0.1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .error-state {
    color: var(--error-color, #db4437);
    font-size: 14px;
    padding: 16px;
    text-align: center;
  }

  .placeholder-state {
    color: var(--secondary-text-color);
    font-size: 14px;
    padding: 16px;
    text-align: center;
  }

  .loading-state {
    animation: shimmer 2s infinite linear;
    background: linear-gradient(
      to right,
      rgba(130, 130, 130, 0.2) 4%,
      rgba(130, 130, 130, 0.3) 25%,
      rgba(130, 130, 130, 0.2) 36%
    );
    background-size: 1000px 100%;
    height: 40px;
    border-radius: 4px;
    width: 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,ye={entry_id:"Prometheus server",query:"PromQL query",name:"Name",title:"Title",icon:"Icon",unit:"Unit",decimals:"Decimals",refresh_interval:"Refresh interval (s)",min:"Min",max:"Max",arc_width:"Arc width",sparkline:"Show sparkline",sparkline_hours:"Sparkline range (hours)",time_range:"Time range",step:"Step (s, empty = auto)",fill:"Fill area",show_legend:"Show legend",height:"Chart height (px)",group_by:"Group by label",orientation:"Orientation",show_values:"Show values",bar_height:"Bar height (px)",value:"Value",color:"Color",section_display:"Display",section_advanced:"Advanced",section_thresholds:"Thresholds",section_series:"Series",helper_entry_id:"Leave empty to use the first configured server",helper_unit:"Special units: %, bytes, bps, s, short",helper_group_by:"Label whose value is used as the bar name (e.g. job, instance)",helper_thresholds:"The color of the highest threshold not greater than the value is used",add_threshold:"Add threshold",add_series:"Add series",remove:"Remove",series_n:"Series {n}",horizontal:"Horizontal",vertical:"Vertical",no_query:"Set a PromQL query in the card editor",no_series:"Add at least one series in the card editor",no_data:"No data",stat_name:"Prometheus Stat",stat_desc:"Single Prometheus metric value with optional sparkline",gauge_name:"Prometheus Gauge",gauge_desc:"Radial gauge with threshold colors",timeseries_name:"Prometheus Time Series",timeseries_desc:"Grafana-like line/area chart for one or more PromQL queries",bar_name:"Prometheus Bar Chart",bar_desc:"Bar chart grouped by a Prometheus label"},xe={en:ye,ru:{entry_id:"Сервер Prometheus",query:"Запрос PromQL",name:"Название",title:"Заголовок",icon:"Иконка",unit:"Единица измерения",decimals:"Знаков после запятой",refresh_interval:"Интервал обновления (с)",min:"Минимум",max:"Максимум",arc_width:"Толщина дуги",sparkline:"Показывать мини-график",sparkline_hours:"Период мини-графика (ч)",time_range:"Период",step:"Шаг (с, пусто = авто)",fill:"Заливка области",show_legend:"Показывать легенду",height:"Высота графика (px)",group_by:"Группировать по метке",orientation:"Ориентация",show_values:"Показывать значения",bar_height:"Высота столбца (px)",value:"Значение",color:"Цвет",section_display:"Отображение",section_advanced:"Дополнительно",section_thresholds:"Пороги",section_series:"Серии",helper_entry_id:"Оставьте пустым, чтобы использовать первый настроенный сервер",helper_unit:"Специальные единицы: %, bytes, bps, s, short",helper_group_by:"Метка, значение которой станет подписью столбца (например job, instance)",helper_thresholds:"Используется цвет наибольшего порога, не превышающего значение",add_threshold:"Добавить порог",add_series:"Добавить серию",remove:"Удалить",series_n:"Серия {n}",horizontal:"Горизонтально",vertical:"Вертикально",no_query:"Укажите запрос PromQL в редакторе карточки",no_series:"Добавьте хотя бы одну серию в редакторе карточки",no_data:"Нет данных",stat_name:"Prometheus: значение",stat_desc:"Одно значение метрики Prometheus с мини-графиком",gauge_name:"Prometheus: индикатор",gauge_desc:"Круговой индикатор с цветовыми порогами",timeseries_name:"Prometheus: временной ряд",timeseries_desc:"График в стиле Grafana для одного или нескольких запросов PromQL",bar_name:"Prometheus: столбцы",bar_desc:"Столбчатая диаграмма с группировкой по метке Prometheus"}};function be(e,t,s={}){const i=xe[function(e){return(e?.locale?.language||e?.language||("undefined"!=typeof localStorage?localStorage.getItem("selectedLanguage")?.replace(/"/g,""):null)||("undefined"!=typeof navigator?navigator.language:"en")||"en").split("-")[0].toLowerCase()}(t)]||ye;let n=i[e]??ye[e]??e;for(const[e,t]of Object.entries(s))n=n.replace(`{${e}}`,String(t));return n}class we extends he{constructor(){super(...arguments),this._loading=!1,this._connected=!1}setConfig(e){if(!e||!e.type)throw new Error("Invalid configuration");this._config=e,this._error=void 0,this._restart()}set hass(e){const t=!this._hass;this._hass=e,t&&this._restart()}get hass(){return this._hass}connectedCallback(){super.connectedCallback(),this._connected=!0,this._restart()}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._stopAutoRefresh()}_hasQuery(){return Boolean(this._config?.query&&this._config.query.trim())}get _client(){const e=this._config.entry_id||void 0;return this._cachedClient&&this._cachedClient.entryId===e||(this._cachedClient=new _e(this._hass,e)),this._cachedClient}async _safeFetch(){if(this._hass&&this._config&&this._hasQuery())try{await this._fetchData()}catch(e){this._error=this._formatError(e),this._loading=!1}}_formatError(e){return e?"string"==typeof e?e:"unknown_command"===e.code?"Prometheus Dashboard integration is not installed or not loaded":e.message||e.code||"Error fetching data":"Error"}_restart(){this._hass&&this._config&&this._connected&&(this._startAutoRefresh(),this._safeFetch())}_startAutoRefresh(){this._stopAutoRefresh();const e=Number(this._config.refresh_interval)||30;this._interval=window.setInterval(()=>this._safeFetch(),1e3*Math.max(5,e))}_stopAutoRefresh(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}shouldUpdate(e){return Boolean(this._config)&&super.shouldUpdate(e)}getCardSize(){return 3}renderError(){return B`
      <ha-card>
        <div class="error-state">${this._error}</div>
      </ha-card>
    `}renderLoading(){return B`
      <ha-card>
        <div class="loading-state"></div>
      </ha-card>
    `}renderPlaceholder(e="no_query"){return B`
      <ha-card>
        <div class="placeholder-state">${be(e,this._hass)}</div>
      </ha-card>
    `}}function $e(e,t=2,s){if(isNaN(e)||null==e)return"-";if("bytes"===s||"B"===s){const s=1024,i=["B","KB","MB","GB","TB","PB"];if(0===e)return"0 B";const n=Math.floor(Math.log(e)/Math.log(s));return parseFloat((e/Math.pow(s,n)).toFixed(t))+" "+i[n]}if("percent"===s||"%"===s)return parseFloat(e.toFixed(t))+"%";if("s"===s||"seconds"===s){if(e<60)return parseFloat(e.toFixed(t))+" s";const s=e/60;if(s<60)return parseFloat(s.toFixed(t))+" m";const i=s/60;if(i<24)return parseFloat(i.toFixed(t))+" h";return parseFloat((i/24).toFixed(t))+" d"}if("short"===s)return function(e){if(0===e)return"0";const t=Math.abs(e);return t>=1e9?(e/1e9).toFixed(1)+"B":t>=1e6?(e/1e6).toFixed(1)+"M":t>=1e3?(e/1e3).toFixed(1)+"K":parseFloat(e.toFixed(2)).toString()}(e);if("bps"===s){const s=1e3,i=["bps","Kbps","Mbps","Gbps","Tbps"];if(0===e)return"0 bps";const n=Math.floor(Math.log(e)/Math.log(s));return parseFloat((e/Math.pow(s,n)).toFixed(t))+" "+i[n]}const i=parseFloat(e.toFixed(t)).toString();return s?`${i} ${s}`:i}we.styles=ve,e([ge()],we.prototype,"_config",void 0),e([ge()],we.prototype,"_error",void 0),e([ge()],we.prototype,"_loading",void 0);const ke=["#4CAF50","#2196F3","#F44336","#FF9800","#9C27B0","#00BCD4","#E91E63","#8BC34A","#FFC107","#795548"];function Ae(e,t){if(!t||0===t.length)return ke[0];const s=[...t].sort((e,t)=>t.value-e.value);for(const t of s)if(e>=t.value)return t.color;return s[s.length-1].color||"#4CAF50"}function Se(e,t,s=500){const i=t-e;return`${Math.max(1,Math.floor(i/s))}s`}let Ee=class extends he{constructor(){super(...arguments),this.data=[],this.color="var(--primary-color)",this.fill=!1,this.height=40,this.width="100%"}render(){if(!this.data||0===this.data.length)return B``;const e=Math.min(...this.data),t=Math.max(...this.data)-e||1,s=this.data.map((s,i)=>`${i/(this.data.length-1)*100},${100-(s-e)/t*100}`).join(" "),i=`0,100 ${s} 100,100`;return B`
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style="height: ${this.height}px; width: ${this.width};"
      >
        ${this.fill?W`
          <defs>
            <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${this.color}" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="${this.color}" stop-opacity="0.0"/>
            </linearGradient>
          </defs>
          <polygon points="${i}" fill="url(#fillGrad)" class="area"></polygon>
        `:""}
        <polyline points="${s}" stroke="${this.color}" class="line"></polyline>
      </svg>
    `}};Ee.styles=o`
    :host {
      display: block;
    }
    svg {
      display: block;
      overflow: visible;
    }
    .line {
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .area {
      stroke: none;
    }
  `,e([me({type:Array})],Ee.prototype,"data",void 0),e([me({type:String})],Ee.prototype,"color",void 0),e([me({type:Boolean})],Ee.prototype,"fill",void 0),e([me({type:Number})],Ee.prototype,"height",void 0),e([me({type:String})],Ee.prototype,"width",void 0),Ee=e([de("prometheus-sparkline")],Ee);const Ce=o`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .section-title {
    font-weight: 500;
    font-size: 15px;
    margin: 8px 0 -4px;
    color: var(--primary-text-color);
  }
  .helper {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
`;function Me(e,t,s,i){i=i||{},s=null==s?{}:s;const n=new CustomEvent(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed,detail:s});return e.dispatchEvent(n),n}function Pe(e,t){Me(e,"config-changed",{config:t})}let ze;function Te(e){const t={};for(const[s,i]of Object.entries(e))null!=i&&""!==i&&("number"==typeof i&&Number.isNaN(i)||(t[s]=i));return t}const De={name:"entry_id",selector:{config_entry:{integration:"prometheus_dashboard"}}},He={name:"query",required:!0,selector:{text:{multiline:!0}}},Oe={name:"refresh_interval",selector:{number:{min:5,max:86400,step:1,mode:"box",unit_of_measurement:"s"}}},Re={name:"decimals",selector:{number:{min:0,max:6,step:1,mode:"box"}}},Fe={name:"unit",selector:{text:{}}},Le=["15m","30m","1h","3h","6h","12h","24h","2d","7d","30d"],Ue="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";let Ne=class extends he{constructor(){super(...arguments),this.items=[],this.schema=[],this.newItem=()=>({}),this.itemTitle="",this.addLabel="",this._computeLabel=e=>be(e.name,this.hass)}_emit(e){Me(this,"value-changed",{value:e})}_itemChanged(e,t){t.stopPropagation();const s=[...this.items],i={...t.detail.value};for(const e of Object.keys(i))""!==i[e]&&void 0!==i[e]||delete i[e];s[e]=i,this._emit(s)}_remove(e){const t=[...this.items];t.splice(e,1),this._emit(t)}_add(){this._emit([...this.items,this.newItem()])}render(){return B`
      ${this.items.map((e,t)=>B`
          <div class="item">
            <div class="item-header">
              <span>${this.itemTitle?this.itemTitle.replace("{n}",String(t+1)):Y}</span>
              <ha-icon-button
                .label=${be("remove",this.hass)}
                .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                @click=${()=>this._remove(t)}
              ></ha-icon-button>
            </div>
            <ha-form
              .hass=${this.hass}
              .data=${e}
              .schema=${this.schema}
              .computeLabel=${this._computeLabel}
              @value-changed=${e=>this._itemChanged(t,e)}
            ></ha-form>
          </div>
        `)}
      <ha-button class="add" @click=${this._add}>
        <ha-svg-icon slot="start" .path=${Ue}></ha-svg-icon>
        <ha-svg-icon slot="icon" .path=${Ue}></ha-svg-icon>
        ${this.addLabel}
      </ha-button>
    `}};Ne.styles=o`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .item {
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, 12px);
      padding: 4px 12px 12px;
    }
    .item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      color: var(--secondary-text-color);
    }
    .add {
      align-self: flex-start;
    }
  `,e([me({attribute:!1})],Ne.prototype,"hass",void 0),e([me({attribute:!1})],Ne.prototype,"items",void 0),e([me({attribute:!1})],Ne.prototype,"schema",void 0),e([me({attribute:!1})],Ne.prototype,"newItem",void 0),e([me()],Ne.prototype,"itemTitle",void 0),e([me()],Ne.prototype,"addLabel",void 0),Ne=e([de("prometheus-list-editor")],Ne);const Ve=[{name:"",type:"grid",schema:[{name:"value",required:!0,selector:{number:{mode:"box",step:"any"}}},{name:"color",required:!0,selector:{text:{type:"color"}}}]}];class je extends he{constructor(){super(...arguments),this._ready=!1,this._computeLabel=e=>be(e.name,this.hass),this._computeHelper=e=>{const t=`helper_${e.name}`,s=be(t,this.hass);return s===t?void 0:s}}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),(customElements.get("ha-form")&&customElements.get("ha-selector")?Promise.resolve():(ze||(ze=(async()=>{try{const e=await(window.loadCardHelpers?.());if(!e)return;const t=await e.createCardElement({type:"entities",entities:[]});await(t?.constructor?.getConfigElement?.())}catch(e){console.warn("prometheus-cards: failed to preload HA form components",e)}})()),ze)).then(()=>{this._ready=!0})}_defaults(){return{}}_renderExtra(){return Y}_renderThresholds(){const e=this._config;return B`
      <div class="section-title">${be("section_thresholds",this.hass)}</div>
      <div class="helper">${be("helper_thresholds",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${e.thresholds||[]}
        .schema=${Ve}
        .newItem=${()=>({value:0,color:"#4CAF50"})}
        .addLabel=${be("add_threshold",this.hass)}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({thresholds:t.length?t:void 0})}}
      ></prometheus-list-editor>
    `}_updateConfig(e){this._config&&(this._config=Te({...this._config,...e}),Pe(this,this._config))}_formChanged(e){if(e.stopPropagation(),!this._config)return;const t=e.detail.value,s=Te({...this._config,...t});for(const e of this._sections())for(const i of this._fieldNames(e.schema))i in t&&""!==t[i]&&void 0!==t[i]||delete s[i];const i=this._defaults();for(const[e,t]of Object.entries(i))e in this._config||s[e]!==t||delete s[e];s.type=this._config.type,this._config=s,Pe(this,this._config)}_fieldNames(e){const t=[];for(const s of e)s.schema?t.push(...this._fieldNames(s.schema)):t.push(s.name);return t}render(){if(!this.hass||!this._config||!this._ready)return B``;const e={...this._defaults(),...this._config};return B`
      <div class="card-config">
        ${this._sections().map(t=>B`
            ${t.title?B`<div class="section-title">${be(t.title,this.hass)}</div>`:Y}
            <ha-form
              .hass=${this.hass}
              .data=${e}
              .schema=${t.schema}
              .computeLabel=${this._computeLabel}
              .computeHelper=${this._computeHelper}
              @value-changed=${this._formChanged}
            ></ha-form>
          `)}
        ${this._renderExtra()}
      </div>
    `}}je.styles=Ce,e([me({attribute:!1})],je.prototype,"hass",void 0),e([ge()],je.prototype,"_config",void 0),e([ge()],je.prototype,"_ready",void 0);let Ie=class extends je{_defaults(){return{decimals:1,refresh_interval:30,sparkline:!1,sparkline_hours:24}}_sections(){return[{schema:[De,He]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},Fe,Re]},{name:"",type:"grid",schema:[{name:"sparkline",selector:{boolean:{}}},...this._config?.sparkline?[{name:"sparkline_hours",selector:{number:{min:1,max:720,mode:"box",unit_of_measurement:"h"}}}]:[]]}]},{title:"section_advanced",schema:[Oe]}]}_renderExtra(){return B`${this._renderThresholds()}`}};Ie=e([de("prometheus-stat-card-editor")],Ie);let qe=class extends we{constructor(){super(...arguments),this._currentValue=null,this._sparklineData=[]}static getStubConfig(){return{type:"custom:prometheus-stat-card",name:"Prometheus",query:"up",icon:"mdi:chart-line",decimals:0,sparkline:!0}}static getConfigElement(){return document.createElement("prometheus-stat-card-editor")}async _fetchData(){const e=this._config;try{if(this._loading=!0,e.sparkline){const t=e.sparkline_hours||24,s=Math.floor(Date.now()/1e3),i=s-3600*t,n=Se(i,s,100),r=await this._client.rangeQuery(e.query,i,s,n);if(r?.data?.result?.length>0&&r.data.result[0].values){const e=r.data.result[0].values.map(e=>parseFloat(e[1]));this._sparklineData=e,this._currentValue=e.length>0?e[e.length-1]:null}else this._sparklineData=[],this._currentValue=null}else{const t=await this._client.instantQuery(e.query);t?.data?.result?.length>0&&t.data.result[0].value?this._currentValue=parseFloat(t.data.result[0].value[1]):this._currentValue=null,this._sparklineData=[]}this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1}}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(this._loading&&null===this._currentValue)return this.renderLoading();const t=Ae(this._currentValue??0,e.thresholds||[]),s=void 0!==e.decimals?e.decimals:1,i=null!==this._currentValue?$e(this._currentValue,s):"-";return B`
      <ha-card>
        <div class="stat-container">
          ${e.icon?B`
            <div class="icon-container" style="--icon-color: ${t}">
              <ha-icon .icon="${e.icon}"></ha-icon>
            </div>
          `:""}
          <div class="info-container">
            ${e.name?B`<div class="name">${e.name}</div>`:""}
            <div class="value-container">
              <span class="value">${i}</span>
              ${e.unit?B`<span class="unit">${e.unit}</span>`:""}
            </div>
          </div>
        </div>
        ${e.sparkline&&this._sparklineData.length>0?B`
          <div class="sparkline-container">
            <prometheus-sparkline 
              .data="${this._sparklineData}" 
              .color="${t}"
            ></prometheus-sparkline>
          </div>
        `:""}
      </ha-card>
    `}static get styles(){return[ve,o`
        ha-card {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .stat-container {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: color-mix(in srgb, var(--icon-color, var(--primary-color)) 20%, transparent);
          color: var(--icon-color, var(--primary-color));
        }
        .info-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .name {
          font-size: 14px;
          color: var(--secondary-text-color);
          font-weight: 500;
        }
        .value-container {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .value {
          font-size: 36px;
          font-weight: 400;
          color: var(--primary-text-color);
        }
        .unit {
          font-size: 16px;
          color: var(--secondary-text-color);
        }
        .sparkline-container {
          height: 40px;
          width: 100%;
        }
      `]}};e([ge()],qe.prototype,"_currentValue",void 0),e([ge()],qe.prototype,"_sparklineData",void 0),qe=e([de("prometheus-stat-card")],qe);let Be=class extends je{_defaults(){return{min:0,max:100,decimals:1,arc_width:8,refresh_interval:30}}_sections(){return[{schema:[De,He]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},Fe,Re,{name:"arc_width",selector:{number:{min:2,max:20,step:1,mode:"slider"}}}]}]},{title:"section_advanced",schema:[Oe]}]}_renderExtra(){return B`${this._renderThresholds()}`}};Be=e([de("prometheus-gauge-card-editor")],Be);let We=class extends we{constructor(){super(...arguments),this._currentValue=null}static getStubConfig(){return{type:"custom:prometheus-gauge-card",name:"Prometheus targets up",query:"avg(up) * 100",unit:"%",min:0,max:100,decimals:0,thresholds:[{value:0,color:"#F44336"},{value:50,color:"#FFC107"},{value:90,color:"#4CAF50"}]}}static getConfigElement(){return document.createElement("prometheus-gauge-card-editor")}async _fetchData(){try{this._loading=!0;const e=await this._client.instantQuery(this._config.query);e?.data?.result?.length>0&&e.data.result[0].value?this._currentValue=parseFloat(e.data.result[0].value[1]):this._currentValue=null,this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1}}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(this._loading&&null===this._currentValue)return this.renderLoading();const t=void 0!==e.min?e.min:0,s=void 0!==e.max?e.max:100,i=void 0!==e.decimals?e.decimals:1,n=void 0!==e.arc_width?e.arc_width:8,r=null!==this._currentValue?this._currentValue:t,l=Math.min(Math.max(r,t),s),o=40*Math.PI,a=o*(1-(s>t?(l-t)/(s-t):0)),c=Ae(this._currentValue??t,e.thresholds||[]),h=null!==this._currentValue?$e(this._currentValue,i):"-";return B`
      <ha-card>
        ${e.name?B`<div class="name">${e.name}</div>`:""}
        
        <div class="gauge-container">
          <svg viewBox="0 0 100 60" class="gauge-svg">
            <path
              class="arc-bg"
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke-width="${n}"
              stroke-linecap="round"
            ></path>
            
            <path
              class="arc-fg"
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="${c}"
              stroke-width="${n}"
              stroke-linecap="round"
              stroke-dasharray="${o}"
              stroke-dashoffset="${a}"
            ></path>
          </svg>
          
          <div class="value-container">
            <span class="value">${h}</span>
            ${e.unit?B`<span class="unit">${e.unit}</span>`:""}
          </div>
          
          <div class="labels">
            <span class="min-label">${t}</span>
            <span class="max-label">${s}</span>
          </div>
        </div>
      </ha-card>
    `}static get styles(){return[ve,o`
        ha-card {
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .name {
          font-size: 14px;
          color: var(--secondary-text-color);
          font-weight: 500;
          align-self: flex-start;
        }
        .gauge-container {
          position: relative;
          width: 100%;
          max-width: 250px;
          aspect-ratio: 100 / 60;
        }
        .gauge-svg {
          width: 100%;
          height: 100%;
        }
        .arc-bg {
          stroke: var(--divider-color, #e0e0e0);
        }
        .arc-fg {
          transition: stroke-dashoffset 0.5s ease-in-out, stroke 0.5s ease-in-out;
        }
        .value-container {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .value {
          font-size: 28px;
          font-weight: 400;
          color: var(--primary-text-color);
          line-height: 1;
        }
        .unit {
          font-size: 14px;
          color: var(--secondary-text-color);
        }
        .labels {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 5%;
          box-sizing: border-box;
        }
        .min-label, .max-label {
          font-size: 12px;
          color: var(--secondary-text-color);
        }
      `]}};e([ge()],We.prototype,"_currentValue",void 0),We=e([de("prometheus-gauge-card")],We);const Ge="u-off",Ye="u-label",Qe="width",Ke="height",Je="top",Ze="bottom",Xe="left",et="right",tt="#000",st=tt+"0",it="mousemove",nt="mousedown",rt="mouseup",lt="mouseenter",ot="mouseleave",at="dblclick",ct="change",ht="dppxchange",ut="--",dt="undefined"!=typeof window,pt=dt?document:null,ft=dt?window:null,mt=dt?navigator:null;let gt,_t;function vt(e,t){if(null!=t){let s=e.classList;!s.contains(t)&&s.add(t)}}function yt(e,t){let s=e.classList;s.contains(t)&&s.remove(t)}function xt(e,t,s){e.style[t]=s+"px"}function bt(e,t,s,i){let n=pt.createElement(e);return null!=t&&vt(n,t),null!=s&&s.insertBefore(n,i),n}function wt(e,t){return bt("div",e,t)}const $t=new WeakMap;function kt(e,t,s,i,n){let r="translate("+t+"px,"+s+"px)";r!=$t.get(e)&&(e.style.transform=r,$t.set(e,r),t<0||s<0||t>i||s>n?vt(e,Ge):yt(e,Ge))}const At=new WeakMap;function St(e,t,s){let i=t+s;i!=At.get(e)&&(At.set(e,i),e.style.background=t,e.style.borderColor=s)}const Et=new WeakMap;function Ct(e,t,s,i){let n=t+""+s;n!=Et.get(e)&&(Et.set(e,n),e.style.height=s+"px",e.style.width=t+"px",e.style.marginLeft=i?-t/2+"px":0,e.style.marginTop=i?-s/2+"px":0)}const Mt={passive:!0},Pt={...Mt,capture:!0};function zt(e,t,s,i){t.addEventListener(e,s,i?Pt:Mt)}function Tt(e,t,s,i){t.removeEventListener(e,s,Mt)}function Dt(e,t,s,i){let n;s=s||0;let r=(i=i||t.length-1)<=2147483647;for(;i-s>1;)n=r?s+i>>1:Zt((s+i)/2),t[n]<e?s=n:i=n;return e-t[s]<=t[i]-e?s:i}function Ht(e){return(t,s,i)=>{let n=-1,r=-1;for(let r=s;r<=i;r++)if(e(t[r])){n=r;break}for(let n=i;n>=s;n--)if(e(t[n])){r=n;break}return[n,r]}}dt&&function e(){let t=devicePixelRatio;gt!=t&&(gt=t,_t&&Tt(ct,_t,e),_t=matchMedia(`(min-resolution: ${gt-.001}dppx) and (max-resolution: ${gt+.001}dppx)`),zt(ct,_t,e),ft.dispatchEvent(new CustomEvent(ht)))}();const Ot=e=>null!=e,Rt=e=>null!=e&&e>0,Ft=Ht(Ot),Lt=Ht(Rt);function Ut(e,t,s,i){let n=ns(e),r=ns(t);e==t&&(-1==n?(e*=s,t/=s):(e/=s,t*=s));let l=10==s?rs:ls,o=1==r?es:Zt,a=(1==n?Zt:es)(l(Jt(e))),c=o(l(Jt(t))),h=is(s,a),u=is(s,c);return 10==s&&(a<0&&(h=$s(h,-a)),c<0&&(u=$s(u,-c))),i||2==s?(e=h*n,t=u*r):(e=ws(e,h),t=bs(t,u)),[e,t]}function Nt(e,t,s,i){let n=Ut(e,t,s,i);return 0==e&&(n[0]=0),0==t&&(n[1]=0),n}const Vt={mode:3,pad:.1},jt={pad:0,soft:null,mode:0},It={min:jt,max:jt};function qt(e,t,s,i){return Ds(s)?Wt(e,t,s):(jt.pad=s,jt.soft=i?0:null,jt.mode=i?3:0,Wt(e,t,It))}function Bt(e,t){return null==e?t:e}function Wt(e,t,s){let i=s.min,n=s.max,r=Bt(i.pad,0),l=Bt(n.pad,0),o=Bt(i.hard,-as),a=Bt(n.hard,as),c=Bt(i.soft,as),h=Bt(n.soft,-as),u=Bt(i.mode,0),d=Bt(n.mode,0),p=t-e,f=rs(p),m=ss(Jt(e),Jt(t)),g=rs(m),_=Jt(g-f);(p<1e-24||_>10)&&(p=0,0!=e&&0!=t||(p=1e-24,2==u&&c!=as&&(r=0),2==d&&h!=-as&&(l=0)));let v=p||m||1e3,y=rs(v),x=is(10,Zt(y)),b=$s(ws(e-v*(0==p?0==e?.1:1:r),x/10),24),w=e>=c&&(1==u||3==u&&b<=c||2==u&&b>=c)?c:as,$=ss(o,b<w&&e>=w?w:ts(w,b)),k=$s(bs(t+v*(0==p?0==t?.1:1:l),x/10),24),A=t<=h&&(1==d||3==d&&k>=h||2==d&&k<=h)?h:-as,S=ts(a,k>A&&t<=A?A:ss(A,k));return $==S&&0==$&&(S=100),[$,S]}const Gt=new Intl.NumberFormat(dt?mt.language:"en-US"),Yt=e=>Gt.format(e),Qt=Math,Kt=Qt.PI,Jt=Qt.abs,Zt=Qt.floor,Xt=Qt.round,es=Qt.ceil,ts=Qt.min,ss=Qt.max,is=Qt.pow,ns=Qt.sign,rs=Qt.log10,ls=Qt.log2,os=(e,t=1)=>Qt.asinh(e/t),as=1/0;function cs(e){return 1+(0|rs((e^e>>31)-(e>>31)))}function hs(e,t,s){return ts(ss(e,t),s)}function us(e){return"function"==typeof e}function ds(e){return us(e)?e:()=>e}const ps=e=>e,fs=(e,t)=>t,ms=e=>null,gs=e=>!0,_s=(e,t)=>e==t,vs=/\.\d*?(?=9{6,}|0{6,})/gm,ys=e=>{if(zs(e)||ks.has(e))return e;const t=`${e}`,s=t.match(vs);if(null==s)return e;let i=s[0].length-1;if(-1!=t.indexOf("e-")){let[e,s]=t.split("e");return+`${ys(e)}e${s}`}return $s(e,i)};function xs(e,t){return ys($s(ys(e/t))*t)}function bs(e,t){return ys(es(ys(e/t))*t)}function ws(e,t){return ys(Zt(ys(e/t))*t)}function $s(e,t=0){if(zs(e))return e;let s=10**t,i=e*s*(1+Number.EPSILON);return Xt(i)/s}const ks=new Map;function As(e){return((""+e).split(".")[1]||"").length}function Ss(e,t,s,i){let n=[],r=i.map(As);for(let l=t;l<s;l++){let t=Jt(l),s=$s(is(e,l),t);for(let o=0;o<i.length;o++){let a=10==e?+`${i[o]}e${l}`:i[o]*s,c=(l>=0?0:t)+(l>=r[o]?0:r[o]),h=10==e?a:$s(a,c);n.push(h),ks.set(h,c)}}return n}const Es={},Cs=[],Ms=[null,null],Ps=Array.isArray,zs=Number.isInteger;function Ts(e){return"string"==typeof e}function Ds(e){let t=!1;if(null!=e){let s=e.constructor;t=null==s||s==Object}return t}function Hs(e){return null!=e&&"object"==typeof e}const Os=Object.getPrototypeOf(Uint8Array),Rs="__proto__";function Fs(e,t=Ds){let s;if(Ps(e)){let i=e.find(e=>null!=e);if(Ps(i)||t(i)){s=Array(e.length);for(let i=0;i<e.length;i++)s[i]=Fs(e[i],t)}else s=e.slice()}else if(e instanceof Os)s=e.slice();else if(t(e)){s={};for(let i in e)i!=Rs&&(s[i]=Fs(e[i],t))}else s=e;return s}function Ls(e){let t=arguments;for(let s=1;s<t.length;s++){let i=t[s];for(let t in i)t!=Rs&&(Ds(e[t])?Ls(e[t],Fs(i[t])):e[t]=Fs(i[t]))}return e}function Us(e,t,s){for(let i,n=0,r=-1;n<t.length;n++){let l=t[n];if(l>r){for(i=l-1;i>=0&&null==e[i];)e[i--]=null;for(i=l+1;i<s&&null==e[i];)e[r=i++]=null}}}const Ns="undefined"==typeof queueMicrotask?e=>Promise.resolve().then(e):queueMicrotask;const Vs=["January","February","March","April","May","June","July","August","September","October","November","December"],js=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function Is(e){return e.slice(0,3)}const qs=js.map(Is),Bs=Vs.map(Is),Ws={MMMM:Vs,MMM:Bs,WWWW:js,WWW:qs};function Gs(e){return(e<10?"0":"")+e}const Ys={YYYY:e=>e.getFullYear(),YY:e=>(e.getFullYear()+"").slice(2),MMMM:(e,t)=>t.MMMM[e.getMonth()],MMM:(e,t)=>t.MMM[e.getMonth()],MM:e=>Gs(e.getMonth()+1),M:e=>e.getMonth()+1,DD:e=>Gs(e.getDate()),D:e=>e.getDate(),WWWW:(e,t)=>t.WWWW[e.getDay()],WWW:(e,t)=>t.WWW[e.getDay()],HH:e=>Gs(e.getHours()),H:e=>e.getHours(),h:e=>{let t=e.getHours();return 0==t?12:t>12?t-12:t},AA:e=>e.getHours()>=12?"PM":"AM",aa:e=>e.getHours()>=12?"pm":"am",a:e=>e.getHours()>=12?"p":"a",mm:e=>Gs(e.getMinutes()),m:e=>e.getMinutes(),ss:e=>Gs(e.getSeconds()),s:e=>e.getSeconds(),fff:e=>{return((t=e.getMilliseconds())<10?"00":t<100?"0":"")+t;var t}};function Qs(e,t){t=t||Ws;let s,i=[],n=/\{([a-z]+)\}|[^{]+/gi;for(;s=n.exec(e);)i.push("{"==s[0][0]?Ys[s[1]]:s[0]);return e=>{let s="";for(let n=0;n<i.length;n++)s+="string"==typeof i[n]?i[n]:i[n](e,t);return s}}const Ks=(new Intl.DateTimeFormat).resolvedOptions().timeZone;const Js=e=>e%1==0,Zs=[1,2,2.5,5],Xs=Ss(10,-32,0,Zs),ei=Ss(10,0,32,Zs),ti=ei.filter(Js),si=Xs.concat(ei),ii="{YYYY}",ni="\n"+ii,ri="{M}/{D}",li="\n"+ri,oi=li+"/{YY}",ai="{aa}",ci="{h}:{mm}"+ai,hi="\n"+ci,ui=":{ss}",di=null;function pi(e){let t=1e3*e,s=60*t,i=60*s,n=24*i,r=30*n,l=365*n;return[(1==e?Ss(10,0,3,Zs).filter(Js):Ss(10,-3,0,Zs)).concat([t,5*t,10*t,15*t,30*t,s,5*s,10*s,15*s,30*s,i,2*i,3*i,4*i,6*i,8*i,12*i,n,2*n,3*n,4*n,5*n,6*n,7*n,8*n,9*n,10*n,15*n,r,2*r,3*r,4*r,6*r,l,2*l,5*l,10*l,25*l,50*l,100*l]),[[l,ii,di,di,di,di,di,di,1],[28*n,"{MMM}",ni,di,di,di,di,di,1],[n,ri,ni,di,di,di,di,di,1],[i,"{h}"+ai,oi,di,li,di,di,di,1],[s,ci,oi,di,li,di,di,di,1],[t,ui,oi+" "+ci,di,li+" "+ci,di,hi,di,1],[e,ui+".{fff}",oi+" "+ci,di,li+" "+ci,di,hi,di,1]],function(t){return(o,a,c,h,u,d)=>{let p=[],f=u>=l,m=u>=r&&u<l,g=t(c),_=$s(g*e,3),v=wi(g.getFullYear(),f?0:g.getMonth(),m||f?1:g.getDate()),y=$s(v*e,3);if(m||f){let s=m?u/r:0,i=f?u/l:0,n=_==y?_:$s(wi(v.getFullYear()+i,v.getMonth()+s,1)*e,3),o=new Date(Xt(n/e)),a=o.getFullYear(),c=o.getMonth();for(let r=0;n<=h;r++){let l=wi(a+i*r,c+s*r,1),o=l-t($s(l*e,3));n=$s((+l+o)*e,3),n<=h&&p.push(n)}}else{let r=u>=n?n:u,l=y+(Zt(c)-Zt(_))+bs(_-y,r);p.push(l);let f=t(l),m=f.getHours()+f.getMinutes()/s+f.getSeconds()/i,g=u/i,v=d/o.axes[a]._space;for(;l=$s(l+u,1==e?0:3),!(l>h);)if(g>1){let e=Zt($s(m+g,6))%24,s=t(l).getHours()-e;s>1&&(s=-1),l-=s*i,m=(m+g)%24,$s((l-p[p.length-1])/u,3)*v>=.7&&p.push(l)}else p.push(l)}return p}}]}const[fi,mi,gi]=pi(1),[_i,vi,yi]=pi(.001);function xi(e,t){return e.map(e=>e.map((s,i)=>0==i||8==i||null==s?s:t(1==i||0==e[8]?s:e[1]+s)))}function bi(e,t){return(s,i,n,r,l)=>{let o,a,c,h,u,d,p=t.find(e=>l>=e[0])||t[t.length-1];return i.map(t=>{let s=e(t),i=s.getFullYear(),n=s.getMonth(),r=s.getDate(),l=s.getHours(),f=s.getMinutes(),m=s.getSeconds(),g=i!=o&&p[2]||n!=a&&p[3]||r!=c&&p[4]||l!=h&&p[5]||f!=u&&p[6]||m!=d&&p[7]||p[1];return o=i,a=n,c=r,h=l,u=f,d=m,g(s)})}}function wi(e,t,s){return new Date(e,t,s)}function $i(e,t){return t(e)}Ss(2,-53,53,[1]);function ki(e,t){return(s,i,n,r)=>null==r?ut:t(e(i))}const Ai={show:!0,live:!0,isolate:!1,mount:()=>{},markers:{show:!0,width:2,stroke:function(e,t){let s=e.series[t];return s.width?s.stroke(e,t):s.points.width?s.points.stroke(e,t):null},fill:function(e,t){return e.series[t].fill(e,t)},dash:"solid"},idx:null,idxs:null,values:[]};const Si=[0,0];function Ei(e,t,s,i=!0){return e=>{0==e.button&&(!i||e.target==t)&&s(e)}}function Ci(e,t,s,i=!0){return e=>{(!i||e.target==t)&&s(e)}}const Mi={show:!0,x:!0,y:!0,lock:!1,move:function(e,t,s){return Si[0]=t,Si[1]=s,Si},points:{one:!1,show:function(e,t){let s=e.cursor.points,i=wt(),n=s.size(e,t);xt(i,Qe,n),xt(i,Ke,n);let r=n/-2;xt(i,"marginLeft",r),xt(i,"marginTop",r);let l=s.width(e,t,n);return l&&xt(i,"borderWidth",l),i},size:function(e,t){return e.series[t].points.size},width:0,stroke:function(e,t){let s=e.series[t].points;return s._stroke||s._fill},fill:function(e,t){let s=e.series[t].points;return s._fill||s._stroke}},bind:{mousedown:Ei,mouseup:Ei,click:Ei,dblclick:Ei,mousemove:Ci,mouseleave:Ci,mouseenter:Ci},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(e,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(e,t,s,i,n)=>i-n,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Pi={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},zi=Ls({},Pi,{filter:fs}),Ti=Ls({},zi,{size:10}),Di=Ls({},Pi,{show:!1}),Hi='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Oi="bold "+Hi,Ri={show:!0,scale:"x",stroke:tt,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Oi,side:2,grid:zi,ticks:Ti,border:Di,font:Hi,lineGap:1.5,rotate:0},Fi={show:!0,scale:"x",auto:!1,sorted:1,min:as,max:-as,idxs:[]};function Li(e,t,s,i,n){return t.map(e=>null==e?"":Yt(e))}function Ui(e,t,s,i,n,r,l){let o=[],a=ks.get(n)||0;for(let e=s=l?s:$s(bs(s,n),a);e<=i;e=$s(e+n,a))o.push(Object.is(e,-0)?0:e);return o}function Ni(e,t,s,i,n,r,l){const o=[],a=e.scales[e.axes[t].scale].log,c=Zt((10==a?rs:ls)(s));n=is(a,c),10==a&&(n=si[Dt(n,si)]);let h=s,u=n*a;10==a&&(u=si[Dt(u,si)]);do{o.push(h),h+=n,10!=a||ks.has(h)||(h=$s(h,ks.get(n))),h>=u&&(u=(n=h)*a,10==a&&(u=si[Dt(u,si)]))}while(h<=i);return o}function Vi(e,t,s,i,n,r,l){let o=e.scales[e.axes[t].scale].asinh,a=i>o?Ni(e,t,ss(o,s),i,n):[o],c=i>=0&&s<=0?[0]:[];return(s<-o?Ni(e,t,ss(o,-i),-s,n):[o]).reverse().map(e=>-e).concat(c,a)}const ji=/./,Ii=/[12357]/,qi=/[125]/,Bi=/1/,Wi=(e,t,s,i)=>e.map((e,n)=>4==t&&0==e||n%i==0&&s.test(e.toExponential()[e<0?1:0])?e:null);function Gi(e,t,s,i,n){let r=e.axes[s],l=r.scale,o=e.scales[l],a=e.valToPos,c=r._space,h=a(10,l),u=a(9,l)-h>=c?ji:a(7,l)-h>=c?Ii:a(5,l)-h>=c?qi:Bi;if(u==Bi){let e=Jt(a(1,l)-h);if(e<c)return Wi(t.slice().reverse(),o.distr,u,es(c/e)).reverse()}return Wi(t,o.distr,u,1)}function Yi(e,t,s,i,n){let r=e.axes[s],l=r.scale,o=r._space,a=e.valToPos,c=Jt(a(1,l)-a(2,l));return c<o?Wi(t.slice().reverse(),3,ji,es(o/c)).reverse():t}function Qi(e,t,s,i){return null==i?ut:null==t?"":Yt(t)}const Ki={show:!0,scale:"y",stroke:tt,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Oi,side:3,grid:zi,ticks:Ti,border:Di,font:Hi,lineGap:1.5,rotate:0};const Ji={scale:null,auto:!0,sorted:0,min:as,max:-as},Zi=(e,t,s,i,n)=>n,Xi={show:!0,auto:!0,sorted:0,gaps:Zi,alpha:1,facets:[Ls({},Ji,{scale:"x"}),Ls({},Ji,{scale:"y"})]},en={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Zi,alpha:1,points:{show:function(e,t){let{scale:s,idxs:i}=e.series[0],n=e._data[0],r=e.valToPos(n[i[0]],s,!0),l=e.valToPos(n[i[1]],s,!0),o=Jt(l-r)/(e.series[t].points.space*gt);return i[1]-i[0]<=o},filter:null},values:null,min:as,max:-as,idxs:[],path:null,clip:null};function tn(e,t,s,i,n){return s/10}const sn={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},nn=Ls({},sn,{time:!1,ori:1}),rn={};function ln(e,t){let s=rn[e];return s||(s={key:e,plots:[],sub(e){s.plots.push(e)},unsub(e){s.plots=s.plots.filter(t=>t!=e)},pub(e,t,i,n,r,l,o){for(let a=0;a<s.plots.length;a++)s.plots[a]!=t&&s.plots[a].pub(e,t,i,n,r,l,o)}},null!=e&&(rn[e]=s)),s}function on(e,t,s){const i=e.mode,n=e.series[t],r=2==i?e._data[t]:e._data,l=e.scales,o=e.bbox;let a=r[0],c=2==i?r[1]:r[t],h=2==i?l[n.facets[0].scale]:l[e.series[0].scale],u=2==i?l[n.facets[1].scale]:l[n.scale],d=o.left,p=o.top,f=o.width,m=o.height,g=e.valToPosH,_=e.valToPosV;return 0==h.ori?s(n,a,c,h,u,g,_,d,p,f,m,mn,_n,yn,bn,$n):s(n,a,c,h,u,_,g,p,d,m,f,gn,vn,xn,wn,kn)}function an(e,t){let s=0,i=0,n=Bt(e.bands,Cs);for(let e=0;e<n.length;e++){let r=n[e];r.series[0]==t?s=r.dir:r.series[1]==t&&(1==r.dir?i|=1:i|=2)}return[s,1==i?-1:2==i?1:3==i?2:0]}function cn(e,t,s,i,n){let r=e.mode,l=e.series[t],o=2==r?l.facets[1].scale:l.scale,a=e.scales[o];return-1==n?a.min:1==n?a.max:3==a.distr?1==a.dir?a.min:a.max:0}function hn(e,t,s,i,n,r){return on(e,t,(e,t,l,o,a,c,h,u,d,p,f)=>{let m=e.pxRound;const g=o.dir*(0==o.ori?1:-1),_=0==o.ori?_n:vn;let v,y;1==g?(v=s,y=i):(v=i,y=s);let x=m(c(t[v],o,p,u)),b=m(h(l[v],a,f,d)),w=m(c(t[y],o,p,u)),$=m(h(1==r?a.max:a.min,a,f,d)),k=new Path2D(n);return _(k,w,$),_(k,x,$),_(k,x,b),k})}function un(e,t,s,i,n,r){let l=null;if(e.length>0){l=new Path2D;const o=0==t?yn:xn;let a=s;for(let t=0;t<e.length;t++){let s=e[t];if(s[1]>s[0]){let e=s[0]-a;e>0&&o(l,a,i,e,i+r),a=s[1]}}let c=s+n-a,h=10;c>0&&o(l,a,i-h/2,c,i+r+h)}return l}function dn(e,t,s,i,n,r,l){let o=[],a=e.length;for(let c=1==n?s:i;c>=s&&c<=i;c+=n){if(null===t[c]){let h=c,u=c;if(1==n)for(;++c<=i&&null===t[c];)u=c;else for(;--c>=s&&null===t[c];)u=c;let d=r(e[h]),p=u==h?d:r(e[u]),f=h-n;d=l<=0&&f>=0&&f<a?r(e[f]):d;let m=u+n;p=l>=0&&m>=0&&m<a?r(e[m]):p,p>=d&&o.push([d,p])}}return o}function pn(e){return 0==e?ps:1==e?Xt:t=>xs(t,e)}function fn(e){let t=0==e?mn:gn,s=0==e?(e,t,s,i,n,r)=>{e.arcTo(t,s,i,n,r)}:(e,t,s,i,n,r)=>{e.arcTo(s,t,n,i,r)},i=0==e?(e,t,s,i,n)=>{e.rect(t,s,i,n)}:(e,t,s,i,n)=>{e.rect(s,t,n,i)};return(e,n,r,l,o,a=0,c=0)=>{0==a&&0==c?i(e,n,r,l,o):(a=ts(a,l/2,o/2),c=ts(c,l/2,o/2),t(e,n+a,r),s(e,n+l,r,n+l,r+o,a),s(e,n+l,r+o,n,r+o,c),s(e,n,r+o,n,r,c),s(e,n,r,n+l,r,a),e.closePath())}}const mn=(e,t,s)=>{e.moveTo(t,s)},gn=(e,t,s)=>{e.moveTo(s,t)},_n=(e,t,s)=>{e.lineTo(t,s)},vn=(e,t,s)=>{e.lineTo(s,t)},yn=fn(0),xn=fn(1),bn=(e,t,s,i,n,r)=>{e.arc(t,s,i,n,r)},wn=(e,t,s,i,n,r)=>{e.arc(s,t,i,n,r)},$n=(e,t,s,i,n,r,l)=>{e.bezierCurveTo(t,s,i,n,r,l)},kn=(e,t,s,i,n,r,l)=>{e.bezierCurveTo(s,t,n,i,l,r)};function An(e){return(e,t,s,i,n)=>on(e,t,(t,r,l,o,a,c,h,u,d,p,f)=>{let m,g,{pxRound:_,points:v}=t;0==o.ori?(m=mn,g=bn):(m=gn,g=wn);const y=$s(v.width*gt,3);let x=(v.size-v.width)/2*gt,b=$s(2*x,3),w=new Path2D,$=new Path2D,{left:k,top:A,width:S,height:E}=e.bbox;yn($,k-b,A-b,S+2*b,E+2*b);const C=e=>{if(null!=l[e]){let t=_(c(r[e],o,p,u)),s=_(h(l[e],a,f,d));m(w,t+x,s),g(w,t,s,x,0,2*Kt)}};if(n)n.forEach(C);else for(let e=s;e<=i;e++)C(e);return{stroke:y>0?w:null,fill:w,clip:$,flags:3}})}function Sn(e){return(t,s,i,n,r,l)=>{i!=n&&(r!=i&&l!=i&&e(t,s,i),r!=n&&l!=n&&e(t,s,n),e(t,s,l))}}const En=Sn(_n),Cn=Sn(vn);function Mn(e){const t=Bt(e?.alignGaps,0);return(e,s,i,n)=>on(e,s,(r,l,o,a,c,h,u,d,p,f,m)=>{[i,n]=Ft(o,i,n);let g,_,v=r.pxRound,y=e=>v(h(e,a,f,d)),x=e=>v(u(e,c,m,p));0==a.ori?(g=_n,_=En):(g=vn,_=Cn);const b=a.dir*(0==a.ori?1:-1),w={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},$=w.stroke;let k=!1;if(n-i>=4*f){let t,s,r,c=t=>e.posToVal(t,a.key,!0),h=null,u=null,d=y(l[1==b?i:n]),p=y(l[i]),f=y(l[n]),m=c(1==b?p+1:f-1);for(let e=1==b?i:n;e>=i&&e<=n;e+=b){let i=l[e],n=(1==b?i<m:i>m)?d:y(i),r=o[e];n==d?null!=r?(s=r,null==h?(g($,n,x(s)),t=h=u=s):s<h?h=s:s>u&&(u=s)):null===r&&(k=!0):(null!=h&&_($,d,x(h),x(u),x(t),x(s)),null!=r?(s=r,g($,n,x(s)),h=u=t=s):(h=u=null,null===r&&(k=!0)),d=n,m=c(d+b))}null!=h&&h!=u&&r!=d&&_($,d,x(h),x(u),x(t),x(s))}else for(let e=1==b?i:n;e>=i&&e<=n;e+=b){let t=o[e];null===t?k=!0:null!=t&&g($,y(l[e]),x(t))}let[A,S]=an(e,s);if(null!=r.fill||0!=A){let t=w.fill=new Path2D($),o=x(r.fillTo(e,s,r.min,r.max,A)),a=y(l[i]),c=y(l[n]);-1==b&&([c,a]=[a,c]),g(t,c,o),g(t,a,o)}if(!r.spanGaps){let c=[];k&&c.push(...dn(l,o,i,n,b,y,t)),w.gaps=c=r.gaps(e,s,i,n,c),w.clip=un(c,a.ori,d,p,f,m)}return 0!=S&&(w.band=2==S?[hn(e,s,i,n,$,-1),hn(e,s,i,n,$,1)]:hn(e,s,i,n,$,S)),w})}function Pn(e,t,s,i,n,r,l=as){if(e.length>1){let o=null;for(let a=0,c=1/0;a<e.length;a++)if(void 0!==t[a]){if(null!=o){let t=Jt(e[a]-e[o]);t<c&&(c=t,l=Jt(s(e[a],i,n,r)-s(e[o],i,n,r)))}o=a}}return l}function zn(e,t,s,i,n,r){const l=e.length;if(l<2)return null;const o=new Path2D;if(s(o,e[0],t[0]),2==l)i(o,e[1],t[1]);else{let s=Array(l),i=Array(l-1),r=Array(l-1),a=Array(l-1);for(let s=0;s<l-1;s++)r[s]=t[s+1]-t[s],a[s]=e[s+1]-e[s],i[s]=r[s]/a[s];s[0]=i[0];for(let e=1;e<l-1;e++)0===i[e]||0===i[e-1]||i[e-1]>0!=i[e]>0?s[e]=0:(s[e]=3*(a[e-1]+a[e])/((2*a[e]+a[e-1])/i[e-1]+(a[e]+2*a[e-1])/i[e]),isFinite(s[e])||(s[e]=0));s[l-1]=i[l-2];for(let i=0;i<l-1;i++)n(o,e[i]+a[i]/3,t[i]+s[i]*a[i]/3,e[i+1]-a[i]/3,t[i+1]-s[i+1]*a[i]/3,e[i+1],t[i+1])}return o}const Tn=new Set;function Dn(){for(let e of Tn)e.syncRect(!0)}dt&&(zt("resize",ft,Dn),zt("scroll",ft,Dn,!0),zt(ht,ft,()=>{Yn.pxRatio=gt}));const Hn=Mn(),On=An();function Rn(e,t,s,i){return(i?[e[0],e[1]].concat(e.slice(2)):[e[0]].concat(e.slice(1))).map((e,i)=>Fn(e,i,t,s))}function Fn(e,t,s,i){return Ls({},0==t?s:i,e)}function Ln(e,t,s){return null==t?Ms:[t,s]}const Un=Ln;function Nn(e,t,s){return null==t?Ms:qt(t,s,.1,!0)}function Vn(e,t,s,i){return null==t?Ms:Ut(t,s,e.scales[i].log,!1)}const jn=Vn;function In(e,t,s,i){return null==t?Ms:Nt(t,s,e.scales[i].log,!1)}const qn=In;function Bn(e,t,s,i,n){let r=ss(cs(e),cs(t)),l=t-e,o=Dt(n/i*l,s);do{let e=s[o],t=i*e/l;if(t>=n&&r+(e<5?ks.get(e):0)<=17)return[e,t]}while(++o<s.length);return[0,0]}function Wn(e){let t,s;return[e=e.replace(/(\d+)px/,(e,i)=>(t=Xt((s=+i)*gt))+"px"),t,s]}function Gn(e){e.show&&[e.font,e.labelFont].forEach(e=>{let t=$s(e[2]*gt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function Yn(e,t,s){const i={mode:Bt(e.mode,1)},n=i.mode;function r(e,t,s,i){let n=t.valToPct(e);return i+s*(-1==t.dir?1-n:n)}function l(e,t,s,i){let n=t.valToPct(e);return i+s*(-1==t.dir?n:1-n)}function o(e,t,s,i){return 0==t.ori?r(e,t,s,i):l(e,t,s,i)}i.valToPosH=r,i.valToPosV=l;let a=!1;i.status=0;const c=i.root=wt("uplot");if(null!=e.id&&(c.id=e.id),vt(c,e.class),e.title){wt("u-title",c).textContent=e.title}const h=bt("canvas"),u=i.ctx=h.getContext("2d"),d=wt("u-wrap",c);zt("click",d,e=>{if(e.target===f){(Ws!=js||Gs!=Is)&&ri.click(i,e)}},!0);const p=i.under=wt("u-under",d);d.appendChild(h);const f=i.over=wt("u-over",d),m=+Bt((e=Fs(e)).pxAlign,1),g=pn(m);(e.plugins||[]).forEach(t=>{t.opts&&(e=t.opts(i,e)||e)});const _=e.ms||.001,v=i.series=1==n?Rn(e.series||[],Fi,en,!1):function(e,t){return e.map((e,s)=>0==s?{}:Ls({},t,e))}(e.series||[null],Xi),y=i.axes=Rn(e.axes||[],Ri,Ki,!0),x=i.scales={},b=i.bands=e.bands||[];b.forEach(e=>{e.fill=ds(e.fill||null),e.dir=Bt(e.dir,-1)});const w=2==n?v[1].facets[0].scale:v[0].scale,$={axes:function(){for(let e=0;e<y.length;e++){let t=y[e];if(!t.show||!t._show)continue;let s,n,r=t.side,l=r%2,a=t.stroke(i,e),c=0==r||3==r?-1:1,[h,d]=t._found;if(null!=t.label){let o=t.labelGap*c,p=Xt((t._lpos+o)*gt);It(t.labelFont[0],a,"center",2==r?Je:Ze),u.save(),1==l?(s=n=0,u.translate(p,Xt(fe+ge/2)),u.rotate((3==r?-Kt:Kt)/2)):(s=Xt(pe+me/2),n=p);let f=us(t.label)?t.label(i,e,h,d):t.label;u.fillText(f,s,n),u.restore()}if(0==d)continue;let p=x[t.scale],f=0==l?me:ge,m=0==l?pe:fe,_=t._splits,v=2==p.distr?_.map(e=>Et[e]):_,b=2==p.distr?Et[_[1]]-Et[_[0]]:h,w=t.ticks,$=t.border,k=w.show?w.size:0,A=Xt(k*gt),S=Xt((2==t.alignTo?t._size-k-t.gap:t.gap)*gt),E=t._rotate*-Kt/180,C=g(t._pos*gt),M=C+(A+S)*c;n=0==l?M:0,s=1==l?M:0,It(t.font[0],a,1==t.align?Xe:2==t.align?et:E>0?Xe:E<0?et:0==l?"center":3==r?et:Xe,E||1==l?"middle":2==r?Je:Ze);let P=t.font[1]*t.lineGap,z=_.map(e=>g(o(e,p,f,m))),T=t._values;for(let e=0;e<T.length;e++){let t=T[e];if(null!=t){0==l?s=z[e]:n=z[e],t=""+t;let i=-1==t.indexOf("\n")?[t]:t.split(/\n/gm);for(let e=0;e<i.length;e++){let t=i[e];E?(u.save(),u.translate(s,n+e*P),u.rotate(E),u.fillText(t,0,0),u.restore()):u.fillText(t,s,n+e*P)}}}w.show&&vs(z,w.filter(i,v,e,d,b),l,r,C,A,$s(w.width*gt,3),w.stroke(i,e),w.dash,w.cap);let D=t.grid;D.show&&vs(z,D.filter(i,v,e,d,b),l,0==l?2:1,0==l?fe:pe,0==l?ge:me,$s(D.width*gt,3),D.stroke(i,e),D.dash,D.cap),$.show&&vs([C],[1],0==l?1:0,0==l?1:2,1==l?fe:pe,1==l?ge:me,$s($.width*gt,3),$.stroke(i,e),$.dash,$.cap)}vn("drawAxes")},series:function(){if(Ne>0){let e=v.some(e=>e._focus)&&At!=Ce.alpha;e&&(u.globalAlpha=At=Ce.alpha),v.forEach((e,s)=>{if(s>0&&e.show&&(Yt(s,!1),Yt(s,!0),null==e._paths)){let r=At;At!=e.alpha&&(u.globalAlpha=At=e.alpha);let l=2==n?[0,t[s][0].length-1]:function(e){let t=hs(Ve-1,0,Ne-1),s=hs(je+1,0,Ne-1);for(;null==e[t]&&t>0;)t--;for(;null==e[s]&&s<Ne-1;)s++;return[t,s]}(t[s]);e._paths=e.paths(i,s,l[0],l[1]),At!=r&&(u.globalAlpha=At=r)}}),v.forEach((e,t)=>{if(t>0&&e.show){let s=At;At!=e.alpha&&(u.globalAlpha=At=e.alpha),null!=e._paths&&Zt(t,!1);{let s=null!=e._paths?e._paths.gaps:null,n=e.points.show(i,t,Ve,je,s),r=e.points.filter(i,t,n,s);(n||r)&&(e.points._paths=e.points.paths(i,t,Ve,je,r),Zt(t,!0))}At!=s&&(u.globalAlpha=At=s),vn("drawSeries",t)}}),e&&(u.globalAlpha=At=1)}}},k=(e.drawOrder||["axes","series"]).map(e=>$[e]);function A(e){const t=3==e.distr?t=>rs(t>0?t:e.clamp(i,t,e.min,e.max,e.key)):4==e.distr?t=>os(t,e.asinh):100==e.distr?t=>e.fwd(t):e=>e;return s=>{let i=t(s),{_min:n,_max:r}=e;return(i-n)/(r-n)}}function S(t){let s=x[t];if(null==s){let i=(e.scales||Es)[t]||Es;if(null!=i.from){S(i.from);let e=Ls({},x[i.from],i,{key:t});e.valToPct=A(e),x[t]=e}else{s=x[t]=Ls({},t==w?sn:nn,i),s.key=t;let e=s.time,r=s.range,l=Ps(r);if((t!=w||2==n&&!e)&&(!l||null!=r[0]&&null!=r[1]||(r={min:null==r[0]?Vt:{mode:1,hard:r[0],soft:r[0]},max:null==r[1]?Vt:{mode:1,hard:r[1],soft:r[1]}},l=!1),!l&&Ds(r))){let e=r;r=(t,s,i)=>null==s?Ms:qt(s,i,e)}s.range=ds(r||(e?Un:t==w?3==s.distr?jn:4==s.distr?qn:Ln:3==s.distr?Vn:4==s.distr?In:Nn)),s.auto=ds(!l&&s.auto),s.clamp=ds(s.clamp||tn),s._min=s._max=null,s.valToPct=A(s)}}}S("x"),S("y"),1==n&&v.forEach(e=>{S(e.scale)}),y.forEach(e=>{S(e.scale)});for(let t in e.scales)S(t);const E=x[w],C=E.distr;let M,P;0==E.ori?(vt(c,"u-hz"),M=r,P=l):(vt(c,"u-vt"),M=l,P=r);const z={};for(let e in x){let t=x[e];null==t.min&&null==t.max||(z[e]={min:t.min,max:t.max},t.min=t.max=null)}const T=e.tzDate||(e=>new Date(Xt(e/_))),D=e.fmtDate||Qs,H=1==_?gi(T):yi(T),O=bi(T,xi(1==_?mi:vi,D)),R=ki(T,$i("{YYYY}-{MM}-{DD} {h}:{mm}{aa}",D)),F=[],L=i.legend=Ls({},Ai,e.legend),U=i.cursor=Ls({},Mi,{drag:{y:2==n}},e.cursor),N=L.show,V=U.show,j=L.markers;let I,q,B;L.idxs=F,j.width=ds(j.width),j.dash=ds(j.dash),j.stroke=ds(j.stroke),j.fill=ds(j.fill);let W,G=[],Y=[],Q=!1,K={};if(L.live){const e=v[1]?v[1].values:null;Q=null!=e,W=Q?e(i,1,0):{_:0};for(let e in W)K[e]=ut}if(N)if(I=bt("table","u-legend",c),B=bt("tbody",null,I),L.mount(i,I),Q){q=bt("thead",null,I,B);let e=bt("tr",null,q);for(var J in bt("th",null,e),W)bt("th",Ye,e).textContent=J}else vt(I,"u-inline"),L.live&&vt(I,"u-live");const Z={show:!0},X={show:!1};const ee=new Map;function te(e,t,s,n=!0){const r=ee.get(t)||{},l=U.bind[e](i,t,s,n);l&&(zt(e,t,r[e]=l),ee.set(t,r))}function se(e,t,s){const i=ee.get(t)||{};for(let s in i)null!=e&&s!=e||(Tt(s,t,i[s]),delete i[s]);null==e&&ee.delete(t)}let ie=0,ne=0,re=0,le=0,oe=0,ae=0,ce=oe,he=ae,ue=re,de=le,pe=0,fe=0,me=0,ge=0;i.bbox={};let _e=!1,ve=!1,ye=!1,xe=!1,be=!1,we=!1;function $e(e,t,s){(s||e!=i.width||t!=i.height)&&ke(e,t),ws(!1),ye=!0,ve=!0,Xs()}function ke(e,t){i.width=ie=re=e,i.height=ne=le=t,oe=ae=0,function(){let e=!1,t=!1,s=!1,i=!1;y.forEach((n,r)=>{if(n.show&&n._show){let{side:r,_size:l}=n,o=r%2,a=l+(null!=n.label?n.labelSize:0);a>0&&(o?(re-=a,3==r?(oe+=a,i=!0):s=!0):(le-=a,0==r?(ae+=a,e=!0):t=!0))}}),Re[0]=e,Re[1]=s,Re[2]=t,Re[3]=i,re-=Ue[1]+Ue[3],oe+=Ue[3],le-=Ue[2]+Ue[0],ae+=Ue[0]}(),function(){let e=oe+re,t=ae+le,s=oe,i=ae;function n(n,r){switch(n){case 1:return e+=r,e-r;case 2:return t+=r,t-r;case 3:return s-=r,s+r;case 0:return i-=r,i+r}}y.forEach((e,t)=>{if(e.show&&e._show){let t=e.side;e._pos=n(t,e._size),null!=e.label&&(e._lpos=n(t,e.labelSize))}})}();let s=i.bbox;pe=s.left=xs(oe*gt,.5),fe=s.top=xs(ae*gt,.5),me=s.width=xs(re*gt,.5),ge=s.height=xs(le*gt,.5)}const Ae=3;if(i.setSize=function({width:e,height:t}){$e(e,t)},null==U.dataIdx){let e=U.hover,s=e.skip=new Set(e.skip??[]);s.add(void 0);let i=e.prox=ds(e.prox),n=e.bias??=0;U.dataIdx=(e,r,l,o)=>{if(0==r)return l;let a=l,c=i(e,r,l,o)??as,h=c>=0&&c<as,u=0==E.ori?re:le,d=U.left,p=t[0],f=t[r];if(s.has(f[l])){a=null;let e,t=null,i=null;if(0==n||-1==n)for(e=l;null==t&&e-- >0;)s.has(f[e])||(t=e);if(0==n||1==n)for(e=l;null==i&&e++<f.length;)s.has(f[e])||(i=e);if(null!=t||null!=i)if(h){let e=d-(null==t?-1/0:M(p[t],E,u,0)),s=(null==i?1/0:M(p[i],E,u,0))-d;e<=s?e<=c&&(a=t):s<=c&&(a=i)}else a=null==i?t:null==t?i:l-t<=i-l?t:i}else if(h){Jt(d-M(p[l],E,u,0))>c&&(a=null)}return a}}const Se=e=>{U.event=e};U.idxs=F,U._lock=!1;let Ee=U.points;Ee.show=ds(Ee.show),Ee.size=ds(Ee.size),Ee.stroke=ds(Ee.stroke),Ee.width=ds(Ee.width),Ee.fill=ds(Ee.fill);const Ce=i.focus=Ls({},e.focus||{alpha:.3},U.focus),Me=Ce.prox>=0,Pe=Me&&Ee.one;let ze=[],Te=[],De=[];function He(e,t){let s=Ee.show(i,t);if(s instanceof HTMLElement)return vt(s,"u-cursor-pt"),vt(s,e.class),kt(s,-10,-10,re,le),f.insertBefore(s,ze[t]),s}function Oe(e,t){if(1==n||t>0){let t=1==n&&x[e.scale].time,s=e.value;e.value=t?Ts(s)?ki(T,$i(s,D)):s||R:s||Qi,e.label=e.label||(t?"Time":"Value")}if(Pe||t>0){e.width=null==e.width?1:e.width,e.paths=e.paths||Hn||ms,e.fillTo=ds(e.fillTo||cn),e.pxAlign=+Bt(e.pxAlign,m),e.pxRound=pn(e.pxAlign),e.stroke=ds(e.stroke||null),e.fill=ds(e.fill||null),e._stroke=e._fill=e._paths=e._focus=null;let t=$s((3+2*(ss(1,e.width)||1))*1,3),s=e.points=Ls({},{size:t,width:ss(1,.2*t),stroke:e.stroke,space:2*t,paths:On,_stroke:null,_fill:null},e.points);s.show=ds(s.show),s.filter=ds(s.filter),s.fill=ds(s.fill),s.stroke=ds(s.stroke),s.paths=ds(s.paths),s.pxAlign=e.pxAlign}if(N){let s=function(e,t){if(0==t&&(Q||!L.live||2==n))return Ms;let s=[],r=bt("tr","u-series",B,B.childNodes[t]);vt(r,e.class),e.show||vt(r,Ge);let l=bt("th",null,r);if(j.show){let e=wt("u-marker",l);if(t>0){let s=j.width(i,t);s&&(e.style.border=s+"px "+j.dash(i,t)+" "+j.stroke(i,t)),e.style.background=j.fill(i,t)}}let o=wt(Ye,l);for(var a in e.label instanceof HTMLElement?o.appendChild(e.label):o.textContent=e.label,t>0&&(j.show||(o.style.color=e.width>0?j.stroke(i,t):j.fill(i,t)),te("click",l,t=>{if(U._lock)return;Se(t);let s=v.indexOf(e);if((t.ctrlKey||t.metaKey)!=L.isolate){let e=v.some((e,t)=>t>0&&t!=s&&e.show);v.forEach((t,i)=>{i>0&&di(i,e?i==s?Z:X:Z,!0,xn.setSeries)})}else di(s,{show:!e.show},!0,xn.setSeries)},!1),Me&&te(lt,l,t=>{U._lock||(Se(t),di(v.indexOf(e),Ei,!0,xn.setSeries))},!1)),W){let e=bt("td","u-value",r);e.textContent="--",s.push(e)}return[r,s]}(e,t);G.splice(t,0,s[0]),Y.splice(t,0,s[1]),L.values.push(null)}if(V){F.splice(t,0,null);let s=null;Pe?0==t&&(s=He(e,t)):t>0&&(s=He(e,t)),ze.splice(t,0,s),Te.splice(t,0,0),De.splice(t,0,0)}vn("addSeries",t)}i.addSeries=function(e,t){t=null==t?v.length:t,e=1==n?Fn(e,t,Fi,en):Fn(e,t,{},Xi),v.splice(t,0,e),Oe(v[t],t)},i.delSeries=function(e){if(v.splice(e,1),N){L.values.splice(e,1),Y.splice(e,1);let t=G.splice(e,1)[0];se(null,t.firstChild),t.remove()}V&&(F.splice(e,1),ze.splice(e,1)[0].remove(),Te.splice(e,1),De.splice(e,1)),vn("delSeries",e)};const Re=[!1,!1,!1,!1];function Fe(e,t,s,i){let[n,r,l,o]=s,a=t%2,c=0;return 0==a&&(o||r)&&(c=0==t&&!n||2==t&&!l?Xt(Ri.size/3):0),1==a&&(n||l)&&(c=1==t&&!r||3==t&&!o?Xt(Ki.size/2):0),c}const Le=i.padding=(e.padding||[Fe,Fe,Fe,Fe]).map(e=>ds(Bt(e,Fe))),Ue=i._padding=Le.map((e,t)=>e(i,t,Re,0));let Ne,Ve=null,je=null;const Ie=1==n?v[0].idxs:null;let qe,Be,We,tt,ct,dt,mt,_t,$t,At,Et=null,Mt=!1;function Pt(e,s){if(t=null==e?[]:e,i.data=i._data=t,2==n){Ne=0;for(let e=1;e<v.length;e++)Ne+=t[e][0].length}else{0==t.length&&(i.data=i._data=t=[[]]),Et=t[0],Ne=Et.length;let e=t;if(2==C){e=t.slice();let s=e[0]=Array(Ne);for(let e=0;e<Ne;e++)s[e]=e}i._data=t=e}if(ws(!0),vn("setData"),2==C&&(ye=!0),!1!==s){let e=E;e.auto(i,Mt)?Ht():ui(w,e.min,e.max),xe=xe||U.left>=0,we=!0,Xs()}}function Ht(){let e,s;Mt=!0,1==n&&(Ne>0?(Ve=Ie[0]=0,je=Ie[1]=Ne-1,e=t[0][Ve],s=t[0][je],2==C?(e=Ve,s=je):e==s&&(3==C?[e,s]=Ut(e,e,E.log,!1):4==C?[e,s]=Nt(e,e,E.log,!1):E.time?s=e+Xt(86400/_):[e,s]=qt(e,s,.1,!0))):(Ve=Ie[0]=e=null,je=Ie[1]=s=null)),ui(w,e,s)}function jt(e,t,s,i,n,r){e??=st,s??=Cs,i??="butt",n??=st,r??="round",e!=qe&&(u.strokeStyle=qe=e),n!=Be&&(u.fillStyle=Be=n),t!=We&&(u.lineWidth=We=t),r!=ct&&(u.lineJoin=ct=r),i!=dt&&(u.lineCap=dt=i),s!=tt&&u.setLineDash(tt=s)}function It(e,t,s,i){t!=Be&&(u.fillStyle=Be=t),e!=mt&&(u.font=mt=e),s!=_t&&(u.textAlign=_t=s),i!=$t&&(u.textBaseline=$t=i)}function Wt(e,t,s,n,r=0){if(n.length>0&&e.auto(i,Mt)&&(null==t||null==t.min)){let t=Bt(Ve,0),i=Bt(je,n.length-1),l=null==s.min?function(e,t,s,i=0,n=!1){let r=n?Lt:Ft,l=n?Rt:Ot;[t,s]=r(e,t,s);let o=e[t],a=e[t];if(t>-1)if(1==i)o=e[t],a=e[s];else if(-1==i)o=e[s],a=e[t];else for(let i=t;i<=s;i++){let t=e[i];l(t)&&(t<o?o=t:t>a&&(a=t))}return[o??as,a??-as]}(n,t,i,r,3==e.distr):[s.min,s.max];e.min=ts(e.min,s.min=l[0]),e.max=ss(e.max,s.max=l[1])}}i.setData=Pt;const Gt={min:null,max:null};function Yt(e,t){let s=t?v[e].points:v[e];s._stroke=s.stroke(i,e),s._fill=s.fill(i,e)}function Zt(e,s){let n=s?v[e].points:v[e],{stroke:r,fill:l,clip:o,flags:a,_stroke:c=n._stroke,_fill:h=n._fill,_width:d=n.width}=n._paths;d=$s(d*gt,3);let p=null,f=d%2/2;s&&null==h&&(h=d>0?"#fff":c);let m=1==n.pxAlign&&f>0;if(m&&u.translate(f,f),!s){let e=pe-d/2,t=fe-d/2,s=me+d,i=ge+d;p=new Path2D,p.rect(e,t,s,i)}s?ls(c,d,n.dash,n.cap,h,r,l,a,o):function(e,s,n,r,l,o,a,c,h,u,d){let p=!1;0!=h&&b.forEach((f,m)=>{if(f.series[0]==e){let e,g=v[f.series[1]],_=t[f.series[1]],y=(g._paths||Es).band;Ps(y)&&(y=1==f.dir?y[0]:y[1]);let x=null;g.show&&y&&function(e,t,s){for(t=Bt(t,0),s=Bt(s,e.length-1);t<=s;){if(null!=e[t])return!0;t++}return!1}(_,Ve,je)?(x=f.fill(i,m)||o,e=g._paths.clip):y=null,ls(s,n,r,l,x,a,c,h,u,d,e,y),p=!0}}),p||ls(s,n,r,l,o,a,c,h,u,d)}(e,c,d,n.dash,n.cap,h,r,l,a,p,o),m&&u.translate(-f,-f)}const ns=3;function ls(e,t,s,i,n,r,l,o,a,c,h,d){jt(e,t,s,i,n),(a||c||d)&&(u.save(),a&&u.clip(a),c&&u.clip(c)),d?(o&ns)==ns?(u.clip(d),h&&u.clip(h),ps(n,l),cs(e,r,t)):2&o?(ps(n,l),u.clip(d),cs(e,r,t)):1&o&&(u.save(),u.clip(d),h&&u.clip(h),ps(n,l),u.restore(),cs(e,r,t)):(ps(n,l),cs(e,r,t)),(a||c||d)&&u.restore()}function cs(e,t,s){s>0&&(t instanceof Map?t.forEach((e,t)=>{u.strokeStyle=qe=t,u.stroke(e)}):null!=t&&e&&u.stroke(t))}function ps(e,t){t instanceof Map?t.forEach((e,t)=>{u.fillStyle=Be=t,u.fill(e)}):null!=t&&e&&u.fill(t)}function vs(e,t,s,i,n,r,l,o,a,c){let h=l%2/2;1==m&&u.translate(h,h),jt(o,l,a,c,o),u.beginPath();let d,p,f,g,_=n+(0==i||3==i?-r:r);0==s?(p=n,g=_):(d=n,f=_);for(let i=0;i<e.length;i++)null!=t[i]&&(0==s?d=f=e[i]:p=g=e[i],u.moveTo(d,p),u.lineTo(f,g));u.stroke(),1==m&&u.translate(-h,-h)}function ys(e){let t=!0;return y.forEach((s,n)=>{if(!s.show)return;let r=x[s.scale];if(null==r.min)return void(s._show&&(t=!1,s._show=!1,ws(!1)));s._show||(t=!1,s._show=!0,ws(!1));let l=s.side,o=l%2,{min:a,max:c}=r,[h,u]=function(e,t,s,n){let r,l=y[e];if(n<=0)r=[0,0];else{let o=l._space=l.space(i,e,t,s,n);r=Bn(t,s,l._incrs=l.incrs(i,e,t,s,n,o),n,o)}return l._found=r}(n,a,c,0==o?re:le);if(0==u)return;let d=2==r.distr,p=s._splits=s.splits(i,n,a,c,h,u,d),f=2==r.distr?p.map(e=>Et[e]):p,m=2==r.distr?Et[p[1]]-Et[p[0]]:h,g=s._values=s.values(i,s.filter(i,f,n,u,m),n,u,m);s._rotate=2==l?s.rotate(i,g,n,u):0;let _=s._size;s._size=es(s.size(i,g,n,e)),null!=_&&s._size!=_&&(t=!1)}),t}function bs(e){let t=!0;return Le.forEach((s,n)=>{let r=s(i,n,Re,e);r!=Ue[n]&&(t=!1),Ue[n]=r}),t}function ws(e){v.forEach((t,s)=>{s>0&&(t._paths=null,e&&(1==n?(t.min=null,t.max=null):t.facets.forEach(e=>{e.min=null,e.max=null})))})}let Ss,zs,Os,Rs,Us,Vs,js,Is,qs,Bs,Ws,Gs,Ys=!1,Ks=!1,Js=[];function Zs(){Ks=!1;for(let e=0;e<Js.length;e++)vn(...Js[e]);Js.length=0}function Xs(){Ys||(Ns(ei),Ys=!0)}function ei(){if(_e&&(!function(){for(let e in x){let t=x[e];null==z[e]&&(null==t.min||null!=z[w]&&t.auto(i,Mt))&&(z[e]=Gt)}for(let e in x){let t=x[e];null==z[e]&&null!=t.from&&null!=z[t.from]&&(z[e]=Gt)}null!=z[w]&&ws(!0);let e={};for(let t in z){let s=z[t];if(null!=s){let r=e[t]=Fs(x[t],Hs);if(null!=s.min)Ls(r,s);else if(t!=w||2==n)if(0==Ne&&null==r.from){let e=r.range(i,null,null,t);r.min=e[0],r.max=e[1]}else r.min=as,r.max=-as}}if(Ne>0){v.forEach((s,r)=>{if(1==n){let n=s.scale,l=z[n];if(null==l)return;let o=e[n];if(0==r){let e=o.range(i,o.min,o.max,n);o.min=e[0],o.max=e[1],Ve=Dt(o.min,t[0]),je=Dt(o.max,t[0]),je-Ve>1&&(t[0][Ve]<o.min&&Ve++,t[0][je]>o.max&&je--),s.min=Et[Ve],s.max=Et[je]}else s.show&&s.auto&&Wt(o,l,s,t[r],s.sorted);s.idxs[0]=Ve,s.idxs[1]=je}else if(r>0&&s.show&&s.auto){let[i,n]=s.facets,l=i.scale,o=n.scale,[a,c]=t[r],h=e[l],u=e[o];null!=h&&Wt(h,z[l],i,a,i.sorted),null!=u&&Wt(u,z[o],n,c,n.sorted),s.min=n.min,s.max=n.max}});for(let t in e){let s=e[t],n=z[t];if(null==s.from&&(null==n||null==n.min)){let e=s.range(i,s.min==as?null:s.min,s.max==-as?null:s.max,t);s.min=e[0],s.max=e[1]}}}for(let t in e){let s=e[t];if(null!=s.from){let n=e[s.from];if(null==n.min)s.min=s.max=null;else{let e=s.range(i,n.min,n.max,t);s.min=e[0],s.max=e[1]}}}let s={},r=!1;for(let t in e){let i=e[t],n=x[t];if(n.min!=i.min||n.max!=i.max){n.min=i.min,n.max=i.max;let e=n.distr;n._min=3==e?rs(n.min):4==e?os(n.min,n.asinh):100==e?n.fwd(n.min):n.min,n._max=3==e?rs(n.max):4==e?os(n.max,n.asinh):100==e?n.fwd(n.max):n.max,s[t]=r=!0}}if(r){v.forEach((e,t)=>{2==n?t>0&&s.y&&(e._paths=null):s[e.scale]&&(e._paths=null)});for(let e in s)ye=!0,vn("setScale",e);V&&U.left>=0&&(xe=we=!0)}for(let e in z)z[e]=null}(),_e=!1),ye&&(!function(){let e=!1,t=0;for(;!e;){t++;let s=ys(t),n=bs(t);e=t==Ae||s&&n,e||(ke(i.width,i.height),ve=!0)}}(),ye=!1),ve){if(xt(p,Xe,oe),xt(p,Je,ae),xt(p,Qe,re),xt(p,Ke,le),xt(f,Xe,oe),xt(f,Je,ae),xt(f,Qe,re),xt(f,Ke,le),xt(d,Qe,ie),xt(d,Ke,ne),h.width=Xt(ie*gt),h.height=Xt(ne*gt),y.forEach(({_el:e,_show:t,_size:s,_pos:i,side:n})=>{if(null!=e)if(t){let t=n%2==1;xt(e,t?"left":"top",i-(3===n||0===n?s:0)),xt(e,t?"width":"height",s),xt(e,t?"top":"left",t?ae:oe),xt(e,t?"height":"width",t?le:re),yt(e,Ge)}else vt(e,Ge)}),qe=Be=We=ct=dt=mt=_t=$t=tt=null,At=1,qi(!0),oe!=ce||ae!=he||re!=ue||le!=de){ws(!1);let e=re/ue,t=le/de;if(V&&!xe&&U.left>=0){U.left*=e,U.top*=t,Os&&kt(Os,Xt(U.left),0,re,le),Rs&&kt(Rs,0,Xt(U.top),re,le);for(let s=0;s<ze.length;s++){let i=ze[s];null!=i&&(Te[s]*=e,De[s]*=t,kt(i,es(Te[s]),es(De[s]),re,le))}}if(ai.show&&!be&&ai.left>=0&&ai.width>0){ai.left*=e,ai.width*=e,ai.top*=t,ai.height*=t;for(let e in Ji)xt(ci,e,ai[e])}ce=oe,he=ae,ue=re,de=le}vn("setSize"),ve=!1}ie>0&&ne>0&&(u.clearRect(0,0,h.width,h.height),vn("drawClear"),k.forEach(e=>e()),vn("draw")),ai.show&&be&&(hi(ai),be=!1),V&&xe&&(ji(null,!0,!1),xe=!1),L.show&&L.live&&we&&(Hi(),we=!1),a||(a=!0,i.status=1,vn("ready")),Mt=!1,Ys=!1}function ii(e,s){let n=x[e];if(null==n.from){if(0==Ne){let t=n.range(i,s.min,s.max,e);s.min=t[0],s.max=t[1]}if(s.min>s.max){let e=s.min;s.min=s.max,s.max=e}if(Ne>1&&null!=s.min&&null!=s.max&&s.max-s.min<1e-16)return;e==w&&2==n.distr&&Ne>0&&(s.min=Dt(s.min,t[0]),s.max=Dt(s.max,t[0]),s.min==s.max&&s.max++),z[e]=s,_e=!0,Xs()}}i.batch=function(e,t=!1){Ys=!0,Ks=t,e(i),ei(),t&&Js.length>0&&queueMicrotask(Zs)},i.redraw=(e,t)=>{ye=t||!1,!1!==e?ui(w,E.min,E.max):Xs()},i.setScale=ii;let ni=!1;const ri=U.drag;let li=ri.x,oi=ri.y;V&&(U.x&&(Ss=wt("u-cursor-x",f)),U.y&&(zs=wt("u-cursor-y",f)),0==E.ori?(Os=Ss,Rs=zs):(Os=zs,Rs=Ss),Ws=U.left,Gs=U.top);const ai=i.select=Ls({show:!0,over:!0,left:0,width:0,top:0,height:0},e.select),ci=ai.show?wt("u-select",ai.over?f:p):null;function hi(e,t){if(ai.show){for(let t in e)ai[t]=e[t],t in Ji&&xt(ci,t,e[t]);!1!==t&&vn("setSelect")}}function ui(e,t,s){ii(e,{min:t,max:s})}function di(e,t,s,r){null!=t.focus&&function(e){if(e!=Si){let t=null==e,s=1!=Ce.alpha;v.forEach((i,r)=>{if(1==n||r>0){let n=t||0==r||r==e;i._focus=t?null:n,s&&function(e,t){v[e].alpha=t,V&&null!=ze[e]&&(ze[e].style.opacity=t);N&&G[e]&&(G[e].style.opacity=t)}(r,n?1:Ce.alpha)}}),Si=e,s&&Xs()}}(e),null!=t.show&&v.forEach((s,i)=>{i>0&&(e==i||null==e)&&(s.show=t.show,function(e){if(v[e].show)N&&yt(G[e],Ge);else if(N&&vt(G[e],Ge),V){let t=Pe?ze[0]:ze[e];null!=t&&kt(t,-10,-10,re,le)}}(i),2==n?(ui(s.facets[0].scale,null,null),ui(s.facets[1].scale,null,null)):ui(s.scale,null,null),Xs())}),!1!==s&&vn("setSeries",e,t),r&&$n("setSeries",i,e,t)}let pi,wi,Si;i.setSelect=hi,i.setSeries=di,i.addBand=function(e,t){e.fill=ds(e.fill||null),e.dir=Bt(e.dir,-1),t=null==t?b.length:t,b.splice(t,0,e)},i.setBand=function(e,t){Ls(b[e],t)},i.delBand=function(e){null==e?b.length=0:b.splice(e,1)};const Ei={focus:!0};function Ci(e,t,s){let i=x[t];s&&(e=e/gt-(1==i.ori?ae:oe));let n=re;1==i.ori&&(n=le,e=n-e),-1==i.dir&&(e=n-e);let r=i._min,l=r+(i._max-r)*(e/n),o=i.distr;return 3==o?is(10,l):4==o?((e,t=1)=>Qt.sinh(e)*t)(l,i.asinh):100==o?i.bwd(l):l}function Pi(e,t){xt(ci,Xe,ai.left=e),xt(ci,Qe,ai.width=t)}function zi(e,t){xt(ci,Je,ai.top=e),xt(ci,Ke,ai.height=t)}N&&Me&&te(ot,I,e=>{U._lock||(Se(e),null!=Si&&di(null,Ei,!0,xn.setSeries))}),i.valToIdx=e=>Dt(e,t[0]),i.posToIdx=function(e,s){return Dt(Ci(e,w,s),t[0],Ve,je)},i.posToVal=Ci,i.valToPos=(e,t,s)=>0==x[t].ori?r(e,x[t],s?me:re,s?pe:0):l(e,x[t],s?ge:le,s?fe:0),i.setCursor=(e,t,s)=>{Ws=e.left,Gs=e.top,ji(null,t,s)};let Ti=0==E.ori?Pi:zi,Di=1==E.ori?Pi:zi;function Hi(e,t){if(null!=e&&(e.idxs?e.idxs.forEach((e,t)=>{F[t]=e}):(e=>void 0===e)(e.idx)||F.fill(e.idx),L.idx=F[0]),N&&L.live){for(let e=0;e<v.length;e++)(e>0||1==n&&!Q)&&Oi(e,F[e]);!function(){if(N&&L.live)for(let e=2==n?1:0;e<v.length;e++){if(0==e&&Q)continue;let t=L.values[e],s=0;for(let i in t)Y[e][s++].firstChild.nodeValue=t[i]}}()}we=!1,!1!==t&&vn("setLegend")}function Oi(e,s){let n,r=v[e],l=0==e&&2==C?Et:t[e];Q?n=r.values(i,e,s)??K:(n=r.value(i,null==s?null:l[s],e,s),n=null==n?K:{_:n}),L.values[e]=n}function ji(e,s,r){let l;qs=Ws,Bs=Gs,[Ws,Gs]=U.move(i,Ws,Gs),U.left=Ws,U.top=Gs,V&&(Os&&kt(Os,Xt(Ws),0,re,le),Rs&&kt(Rs,0,Xt(Gs),re,le));let o=Ve>je;pi=as,wi=null;let a=0==E.ori?re:le,c=1==E.ori?re:le;if(Ws<0||0==Ne||o){l=U.idx=null;for(let e=0;e<v.length;e++){let t=ze[e];null!=t&&kt(t,-10,-10,re,le)}Me&&di(null,Ei,!0,null==e&&xn.setSeries),L.live&&(F.fill(l),we=!0)}else{let e,s,r;1==n&&(e=0==E.ori?Ws:Gs,s=Ci(e,w),l=U.idx=Dt(s,t[0],Ve,je),r=M(t[0][l],E,a,0));let o=-10,h=-10,u=0,d=0,p=!0,f="",m="";for(let e=2==n?1:0;e<v.length;e++){let g=v[e],_=F[e],y=null==_?null:1==n?t[e][_]:t[e][1][_],b=U.dataIdx(i,e,l,s),w=null==b?null:1==n?t[e][b]:t[e][1][b];if(we=we||w!=y||b!=_,F[e]=b,e>0&&g.show){let s=null==b?-10:b==l?r:M(1==n?t[0][b]:t[e][0][b],E,a,0),_=null==w?-10:P(w,1==n?x[g.scale]:x[g.facets[1].scale],c,0);if(Me&&null!=w){let t=1==E.ori?Ws:Gs,s=Jt(Ce.dist(i,e,b,_,t));if(s<pi){let i=Ce.bias;if(0!=i){let n=Ci(t,g.scale),r=n>=0?1:-1;r==(w>=0?1:-1)&&(1==r?1==i?w>=n:w<=n:1==i?w<=n:w>=n)&&(pi=s,wi=e)}else pi=s,wi=e}}if(we||Pe){let t,n;0==E.ori?(t=s,n=_):(t=_,n=s);let r,l,a,c,g,v,y=!0,x=Ee.bbox;if(null!=x){y=!1;let t=x(i,e);a=t.left,c=t.top,r=t.width,l=t.height}else a=t,c=n,r=l=Ee.size(i,e);if(v=Ee.fill(i,e),g=Ee.stroke(i,e),Pe)e==wi&&pi<=Ce.prox&&(o=a,h=c,u=r,d=l,p=y,f=v,m=g);else{let t=ze[e];null!=t&&(Te[e]=a,De[e]=c,Ct(t,r,l,y),St(t,v,g),kt(t,es(a),es(c),re,le))}}}}if(Pe){let e=Ce.prox;if(we||(null==Si?pi<=e:pi>e||wi!=Si)){let e=ze[0];null!=e&&(Te[0]=o,De[0]=h,Ct(e,u,d,p),St(e,f,m),kt(e,es(o),es(h),re,le))}}}if(ai.show&&ni)if(null!=e){let[t,s]=xn.scales,[i,n]=xn.match,[r,l]=e.cursor.sync.scales,o=e.cursor.drag;if(li=o._x,oi=o._y,li||oi){let o,h,u,d,p,{left:f,top:m,width:g,height:_}=e.select,v=e.scales[r].ori,y=e.posToVal,b=null!=t&&i(t,r),w=null!=s&&n(s,l);b&&li?(0==v?(o=f,h=g):(o=m,h=_),u=x[t],d=M(y(o,r),u,a,0),p=M(y(o+h,r),u,a,0),Ti(ts(d,p),Jt(p-d))):Ti(0,a),w&&oi?(1==v?(o=f,h=g):(o=m,h=_),u=x[s],d=P(y(o,l),u,c,0),p=P(y(o+h,l),u,c,0),Di(ts(d,p),Jt(p-d))):Di(0,c)}else Zi()}else{let e=Jt(qs-Us),t=Jt(Bs-Vs);if(1==E.ori){let s=e;e=t,t=s}li=ri.x&&e>=ri.dist,oi=ri.y&&t>=ri.dist;let s,i,n=ri.uni;null!=n?li&&oi&&(li=e>=n,oi=t>=n,li||oi||(t>e?oi=!0:li=!0)):ri.x&&ri.y&&(li||oi)&&(li=oi=!0),li&&(0==E.ori?(s=js,i=Ws):(s=Is,i=Gs),Ti(ts(s,i),Jt(i-s)),oi||Di(0,c)),oi&&(1==E.ori?(s=js,i=Ws):(s=Is,i=Gs),Di(ts(s,i),Jt(i-s)),li||Ti(0,a)),li||oi||(Ti(0,0),Di(0,0))}if(ri._x=li,ri._y=oi,null==e){if(r){if(null!=bn){let[e,t]=xn.scales;xn.values[0]=null!=e?Ci(0==E.ori?Ws:Gs,e):null,xn.values[1]=null!=t?Ci(1==E.ori?Ws:Gs,t):null}$n(it,i,Ws,Gs,re,le,l)}if(Me){let e=r&&xn.setSeries,t=Ce.prox;null==Si?pi<=t&&di(wi,Ei,!0,e):pi>t?di(null,Ei,!0,e):wi!=Si&&di(wi,Ei,!0,e)}}we&&(L.idx=l,Hi()),!1!==s&&vn("setCursor")}i.setLegend=Hi;let Ii=null;function qi(e=!1){e?Ii=null:(Ii=f.getBoundingClientRect(),vn("syncRect",Ii))}function Bi(e,t,s,i,n,r,l){U._lock||ni&&null!=e&&0==e.movementX&&0==e.movementY||(Wi(e,t,s,i,n,r,l,!1,null!=e),null!=e?ji(null,!0,!0):ji(t,!0,!1))}function Wi(e,t,s,n,r,l,a,c,h){if(null==Ii&&qi(!1),Se(e),null!=e)s=e.clientX-Ii.left,n=e.clientY-Ii.top;else{if(s<0||n<0)return Ws=-10,void(Gs=-10);let[e,i]=xn.scales,a=t.cursor.sync,[c,h]=a.values,[u,d]=a.scales,[p,f]=xn.match,m=t.axes[0].side%2==1,g=0==E.ori?re:le,_=1==E.ori?re:le,v=m?l:r,y=m?r:l,b=m?n:s,w=m?s:n;if(s=null!=u?p(e,u)?o(c,x[e],g,0):-10:g*(b/v),n=null!=d?f(i,d)?o(h,x[i],_,0):-10:_*(w/y),1==E.ori){let e=s;s=n,n=e}}!h||null!=t&&t.cursor.event.type!=it||((s<=1||s>=re-1)&&(s=xs(s,re)),(n<=1||n>=le-1)&&(n=xs(n,le))),c?(Us=s,Vs=n,[js,Is]=U.move(i,s,n)):(Ws=s,Gs=n)}Object.defineProperty(i,"rect",{get:()=>(null==Ii&&qi(!1),Ii)});const Ji={width:0,height:0,left:0,top:0};function Zi(){hi(Ji,!1)}let rn,on,an,hn;function un(e,t,s,n,r,l,o){ni=!0,li=oi=ri._x=ri._y=!1,Wi(e,t,s,n,r,l,0,!0,!1),null!=e&&(te(rt,pt,dn,!1),$n(nt,i,js,Is,re,le,null));let{left:a,top:c,width:h,height:u}=ai;rn=a,on=c,an=h,hn=u}function dn(e,t,s,n,r,l,o){ni=ri._x=ri._y=!1,Wi(e,t,s,n,r,l,0,!1,!0);let{left:a,top:c,width:h,height:u}=ai,d=h>0||u>0,p=rn!=a||on!=c||an!=h||hn!=u;if(d&&p&&hi(ai),ri.setScale&&d&&p){let e=a,t=h,s=c,i=u;if(1==E.ori&&(e=c,t=u,s=a,i=h),li&&ui(w,Ci(e,w),Ci(e+t,w)),oi)for(let e in x){let t=x[e];e!=w&&null==t.from&&t.min!=as&&ui(e,Ci(s+i,e),Ci(s,e))}Zi()}else U.lock&&(U._lock=!U._lock,ji(t,!0,null!=e));null!=e&&(se(rt,pt),$n(rt,i,Ws,Gs,re,le,null))}function fn(e,t,s,n,r,l,o){U._lock||(Se(e),Ht(),Zi(),null!=e&&$n(at,i,Ws,Gs,re,le,null))}function mn(){y.forEach(Gn),$e(i.width,i.height,!0)}zt(ht,ft,mn);const gn={};gn.mousedown=un,gn.mousemove=Bi,gn.mouseup=dn,gn.dblclick=fn,gn.setSeries=(e,t,s,n)=>{-1!=(s=(0,xn.match[2])(i,t,s))&&di(s,n,!0,!1)},V&&(te(nt,f,un),te(it,f,Bi),te(lt,f,e=>{Se(e),qi(!1)}),te(ot,f,function(e,t,s,i,n,r,l){if(U._lock)return;Se(e);let o=ni;if(ni){let e,t,s=!0,i=!0,n=10;0==E.ori?(e=li,t=oi):(e=oi,t=li),e&&t&&(s=Ws<=n||Ws>=re-n,i=Gs<=n||Gs>=le-n),e&&s&&(Ws=Ws<js?0:re),t&&i&&(Gs=Gs<Is?0:le),ji(null,!0,!0),ni=!1}Ws=-10,Gs=-10,F.fill(null),ji(null,!0,!0),o&&(ni=o)}),te(at,f,fn),Tn.add(i),i.syncRect=qi);const _n=i.hooks=e.hooks||{};function vn(e,t,s){Ks?Js.push([e,t,s]):e in _n&&_n[e].forEach(e=>{e.call(null,i,t,s)})}(e.plugins||[]).forEach(e=>{for(let t in e.hooks)_n[t]=(_n[t]||[]).concat(e.hooks[t])});const yn=(e,t,s)=>s,xn=Ls({key:null,setSeries:!1,filters:{pub:gs,sub:gs},scales:[w,v[1]?v[1].scale:null],match:[_s,_s,yn],values:[null,null]},U.sync);2==xn.match.length&&xn.match.push(yn),U.sync=xn;const bn=xn.key,wn=ln(bn);function $n(e,t,s,i,n,r,l){xn.filters.pub(e,t,s,i,n,r,l)&&wn.pub(e,t,s,i,n,r,l)}function kn(){vn("init",e,t),Pt(t||e.data,!1),z[w]?ii(w,z[w]):Ht(),be=ai.show&&(ai.width>0||ai.height>0),xe=we=!0,$e(e.width,e.height)}return wn.sub(i),i.pub=function(e,t,s,i,n,r,l){xn.filters.sub(e,t,s,i,n,r,l)&&gn[e](null,t,s,i,n,r,l)},i.destroy=function(){wn.unsub(i),Tn.delete(i),ee.clear(),Tt(ht,ft,mn),c.remove(),I?.remove(),vn("destroy")},v.forEach(Oe),y.forEach(function(e,t){if(e._show=e.show,e.show){let s=e.side%2,n=x[e.scale];null==n&&(e.scale=s?v[1].scale:w,n=x[e.scale]);let r=n.time;e.size=ds(e.size),e.space=ds(e.space),e.rotate=ds(e.rotate),Ps(e.incrs)&&e.incrs.forEach(e=>{!ks.has(e)&&ks.set(e,As(e))}),e.incrs=ds(e.incrs||(2==n.distr?ti:r?1==_?fi:_i:si)),e.splits=ds(e.splits||(r&&1==n.distr?H:3==n.distr?Ni:4==n.distr?Vi:Ui)),e.stroke=ds(e.stroke),e.grid.stroke=ds(e.grid.stroke),e.ticks.stroke=ds(e.ticks.stroke),e.border.stroke=ds(e.border.stroke);let l=e.values;e.values=Ps(l)&&!Ps(l[0])?ds(l):r?Ps(l)?bi(T,xi(l,D)):Ts(l)?function(e,t){let s=Qs(t);return(t,i,n,r,l)=>i.map(t=>s(e(t)))}(T,l):l||O:l||Li,e.filter=ds(e.filter||(n.distr>=3&&10==n.log?Gi:3==n.distr&&2==n.log?Yi:fs)),e.font=Wn(e.font),e.labelFont=Wn(e.labelFont),e._size=e.size(i,null,t,0),e._space=e._rotate=e._incrs=e._found=e._splits=e._values=null,e._size>0&&(Re[t]=!0,e._el=wt("u-axis",d))}}),s?s instanceof HTMLElement?(s.appendChild(c),kn()):s(i,kn):kn(),i}Yn.assign=Ls,Yn.fmtNum=Yt,Yn.rangeNum=qt,Yn.rangeLog=Ut,Yn.rangeAsinh=Nt,Yn.orient=on,Yn.pxRatio=gt,Yn.join=function(e,t){if(function(e){let t=e[0][0],s=t.length;for(let i=1;i<e.length;i++){let n=e[i][0];if(n.length!=s)return!1;if(n!=t)for(let e=0;e<s;e++)if(n[e]!=t[e])return!1}return!0}(e)){let t=e[0].slice();for(let s=1;s<e.length;s++)t.push(...e[s].slice(1));return function(e,t=100){const s=e.length;if(s<=1)return!0;let i=0,n=s-1;for(;i<=n&&null==e[i];)i++;for(;n>=i&&null==e[n];)n--;if(n<=i)return!0;const r=ss(1,Zt((n-i+1)/t));for(let t=e[i],s=i+r;s<=n;s+=r){const i=e[s];if(null!=i){if(i<=t)return!1;t=i}}return!0}(t[0])||(t=function(e){let t=e[0],s=t.length,i=Array(s);for(let e=0;e<i.length;e++)i[e]=e;i.sort((e,s)=>t[e]-t[s]);let n=[];for(let t=0;t<e.length;t++){let r=e[t],l=Array(s);for(let e=0;e<s;e++)l[e]=r[i[e]];n.push(l)}return n}(t)),t}let s=new Set;for(let t=0;t<e.length;t++){let i=e[t][0],n=i.length;for(let e=0;e<n;e++)s.add(i[e])}let i=[Array.from(s).sort((e,t)=>e-t)],n=i[0].length,r=new Map;for(let e=0;e<n;e++)r.set(i[0][e],e);for(let s=0;s<e.length;s++){let l=e[s],o=l[0];for(let e=1;e<l.length;e++){let a=l[e],c=Array(n).fill(void 0),h=t?t[s][e]:1,u=[];for(let e=0;e<a.length;e++){let t=a[e],s=r.get(o[e]);null===t?0!=h&&(c[s]=t,2==h&&u.push(s)):c[s]=t}Us(c,u,n),i.push(c)}}return i},Yn.fmtDate=Qs,Yn.tzDate=function(e,t){let s;return"UTC"==t||"Etc/UTC"==t?s=new Date(+e+6e4*e.getTimezoneOffset()):t==Ks?s=e:(s=new Date(e.toLocaleString("en-US",{timeZone:t})),s.setMilliseconds(e.getMilliseconds())),s},Yn.sync=ln;{Yn.addGap=function(e,t,s){let i=e[e.length-1];i&&i[0]==t?i[1]=s:e.push([t,s])},Yn.clipGaps=un;let e=Yn.paths={points:An};e.linear=Mn,e.stepped=function(e){const t=Bt(e.align,1),s=Bt(e.ascDesc,!1),i=Bt(e.alignGaps,0),n=Bt(e.extend,!1);return(e,r,l,o)=>on(e,r,(a,c,h,u,d,p,f,m,g,_,v)=>{[l,o]=Ft(h,l,o);let y=a.pxRound,{left:x,width:b}=e.bbox,w=e=>y(p(e,u,_,m)),$=e=>y(f(e,d,v,g)),k=0==u.ori?_n:vn;const A={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},S=A.stroke,E=u.dir*(0==u.ori?1:-1);let C=$(h[1==E?l:o]),M=w(c[1==E?l:o]),P=M,z=M;n&&-1==t&&(z=x,k(S,z,C)),k(S,M,C);for(let e=1==E?l:o;e>=l&&e<=o;e+=E){let s=h[e];if(null==s)continue;let i=w(c[e]),n=$(s);1==t?k(S,i,C):k(S,P,n),k(S,i,n),C=n,P=i}let T=P;n&&1==t&&(T=x+b,k(S,T,C));let[D,H]=an(e,r);if(null!=a.fill||0!=D){let t=A.fill=new Path2D(S),s=$(a.fillTo(e,r,a.min,a.max,D));k(t,T,s),k(t,z,s)}if(!a.spanGaps){let n=[];n.push(...dn(c,h,l,o,E,w,i));let d=a.width*gt/2,p=s||1==t?d:-d,f=s||-1==t?-d:d;n.forEach(e=>{e[0]+=p,e[1]+=f}),A.gaps=n=a.gaps(e,r,l,o,n),A.clip=un(n,u.ori,m,g,_,v)}return 0!=H&&(A.band=2==H?[hn(e,r,l,o,S,-1),hn(e,r,l,o,S,1)]:hn(e,r,l,o,S,H)),A})},e.bars=function(e){const t=Bt((e=e||Es).size,[.6,as,1]),s=e.align||0,i=e.gap||0;let n=e.radius;n=null==n?[0,0]:"number"==typeof n?[n,0]:n;const r=ds(n),l=1-t[0],o=Bt(t[1],as),a=Bt(t[2],1),c=Bt(e.disp,Es),h=Bt(e.each,e=>{}),{fill:u,stroke:d}=c;return(e,t,n,p)=>on(e,t,(f,m,g,_,v,y,x,b,w,$,k)=>{let A,S,E=f.pxRound,C=s,M=i*gt,P=o*gt,z=a*gt;0==_.ori?[A,S]=r(e,t):[S,A]=r(e,t);const T=_.dir*(0==_.ori?1:-1);let D,H,O,R=0==_.ori?yn:xn,F=0==_.ori?h:(e,t,s,i,n,r,l)=>{h(e,t,s,n,i,l,r)},L=Bt(e.bands,Cs).find(e=>e.series[0]==t),U=null!=L?L.dir:0,N=f.fillTo(e,t,f.min,f.max,U),V=E(x(N,v,k,w)),j=$,I=E(f.width*gt),q=!1,B=null,W=null,G=null,Y=null;null==u||0!=I&&null==d||(q=!0,B=u.values(e,t,n,p),W=new Map,new Set(B).forEach(e=>{null!=e&&W.set(e,new Path2D)}),I>0&&(G=d.values(e,t,n,p),Y=new Map,new Set(G).forEach(e=>{null!=e&&Y.set(e,new Path2D)})));let{x0:Q,size:K}=c;if(null!=Q&&null!=K){C=1,m=Q.values(e,t,n,p),2==Q.unit&&(m=m.map(t=>e.posToVal(b+t*$,_.key,!0)));let s=K.values(e,t,n,p);H=2==K.unit?s[0]*$:y(s[0],_,$,b)-y(0,_,$,b),j=Pn(m,g,y,_,$,b,j),O=j-H+M}else j=Pn(m,g,y,_,$,b,j),O=j*l+M,H=j-O;O<1&&(O=0),I>=H/2&&(I=0),O<5&&(E=ps);let J=O>0;H=E(hs(j-O-(J?I:0),z,P)),D=(0==C?H/2:C==T?0:H)-C*T*((0==C?M/2:0)+(J?I/2:0));const Z={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},X=q?null:new Path2D;let ee=null;if(null!=L)ee=e.data[L.series[1]];else{let{y0:s,y1:i}=c;null!=s&&null!=i&&(g=i.values(e,t,n,p),ee=s.values(e,t,n,p))}let te=A*H,se=S*H;for(let s=1==T?n:p;s>=n&&s<=p;s+=T){let i=g[s];if(null==i)continue;if(null!=ee){let e=ee[s]??0;if(i-e==0)continue;V=x(e,v,k,w)}let n=y(2!=_.distr||null!=c?m[s]:s,_,$,b),r=x(Bt(i,N),v,k,w),l=E(n-D),o=E(ss(r,V)),a=E(ts(r,V)),h=o-a;if(null!=i){let n=i<0?se:te,r=i<0?te:se;q?(I>0&&null!=G[s]&&R(Y.get(G[s]),l,a+Zt(I/2),H,ss(0,h-I),n,r),null!=B[s]&&R(W.get(B[s]),l,a+Zt(I/2),H,ss(0,h-I),n,r)):R(X,l,a+Zt(I/2),H,ss(0,h-I),n,r),F(e,t,s,l-I/2,a,H+I,h)}}return I>0?Z.stroke=q?Y:X:q||(Z._fill=0==f.width?f._fill:f._stroke??f._fill,Z.width=0),Z.fill=q?W:X,Z})},e.spline=function(e){return function(e,t){const s=Bt(t?.alignGaps,0);return(t,i,n,r)=>on(t,i,(l,o,a,c,h,u,d,p,f,m,g)=>{[n,r]=Ft(a,n,r);let _,v,y,x=l.pxRound,b=e=>x(u(e,c,m,p)),w=e=>x(d(e,h,g,f));0==c.ori?(_=mn,y=_n,v=$n):(_=gn,y=vn,v=kn);const $=c.dir*(0==c.ori?1:-1);let k=b(o[1==$?n:r]),A=k,S=[],E=[];for(let e=1==$?n:r;e>=n&&e<=r;e+=$)if(null!=a[e]){let t=b(o[e]);S.push(A=t),E.push(w(a[e]))}const C={stroke:e(S,E,_,y,v,x),fill:null,clip:null,band:null,gaps:null,flags:1},M=C.stroke;let[P,z]=an(t,i);if(null!=l.fill||0!=P){let e=C.fill=new Path2D(M),s=w(l.fillTo(t,i,l.min,l.max,P));y(e,A,s),y(e,k,s)}if(!l.spanGaps){let e=[];e.push(...dn(o,a,n,r,$,b,s)),C.gaps=e=l.gaps(t,i,n,r,e),C.clip=un(e,c.ori,p,f,m,g)}return 0!=z&&(C.band=2==z?[hn(t,i,n,r,M,-1),hn(t,i,n,r,M,1)]:hn(t,i,n,r,M,z)),C})}(zn,e)}}const Qn=o`
  :host {
    display: block;
  }
  ha-card {
    padding: 0;
  }
  .header {
    padding: 16px 16px 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .chart-container {
    width: 100%;
    position: relative;
    padding: 12px 8px 0;
    box-sizing: border-box;
  }
  .overlay {
    padding: 0 16px 16px;
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 8px 16px 16px;
    font-size: 12px;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }
  .legend-name {
    color: var(--secondary-text-color);
  }
  .legend-value {
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .uplot {
    font-family: inherit;
  }
  .uplot .u-legend {
    display: none; /* own legend */
  }
`,Kn=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}},{name:"fill",selector:{boolean:{}}}]}];let Jn=class extends je{_defaults(){return{time_range:"1h",height:200,show_legend:!0,fill:!1,decimals:2,refresh_interval:30}}_sections(){return[{schema:[De,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"time_range",selector:{select:{mode:"dropdown",custom_value:!0,options:Le}}},{name:"height",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}}},Fe,Re,{name:"show_legend",selector:{boolean:{}}},{name:"fill",selector:{boolean:{}}}]}]},{title:"section_advanced",schema:[{name:"",type:"grid",schema:[Oe,{name:"step",selector:{text:{}}}]}]}]}_renderExtra(){return B`
      <div class="section-title">${be("section_series",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Kn}
        .itemTitle=${be("series_n",this.hass)}
        .addLabel=${be("add_series",this.hass)}
        .newItem=${()=>({query:"",name:be("series_n",this.hass,{n:(this._config?.series?.length||0)+1})})}
        @value-changed=${e=>{e.stopPropagation(),this._updateConfig({series:e.detail.value})}}
      ></prometheus-list-editor>
    `}};Jn=e([de("prometheus-timeseries-card-editor")],Jn);let Zn=class extends we{constructor(){super(...arguments),this._chartData=[[]],this._currentValues={},this._hasData=!1}static get styles(){return[ve,o`${l('.uplot, .uplot *, .uplot *::before, .uplot *::after {box-sizing: border-box;}.uplot {font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;width: min-content;}.u-title {text-align: center;font-size: 18px;font-weight: bold;}.u-wrap {position: relative;user-select: none;}.u-over, .u-under {position: absolute;}.u-under {overflow: hidden;}.uplot canvas {display: block;position: relative;width: 100%;height: 100%;}.u-axis {position: absolute;}.u-legend {font-size: 14px;margin: auto;text-align: center;}.u-inline {display: block;}.u-inline * {display: inline-block;}.u-inline tr {margin-right: 16px;}.u-legend th {font-weight: 600;}.u-legend th > * {vertical-align: middle;display: inline-block;}.u-legend .u-marker {width: 1em;height: 1em;margin-right: 4px;background-clip: padding-box !important;}.u-inline.u-live th::after {content: ":";vertical-align: middle;}.u-inline:not(.u-live) .u-value {display: none;}.u-series > * {padding: 4px;}.u-series th {cursor: pointer;}.u-legend .u-off > * {opacity: 0.3;}.u-select {background: rgba(0,0,0,0.07);position: absolute;pointer-events: none;}.u-cursor-x, .u-cursor-y {position: absolute;left: 0;top: 0;pointer-events: none;will-change: transform;}.u-hz .u-cursor-x, .u-vt .u-cursor-y {height: 100%;border-right: 1px dashed #607D8B;}.u-hz .u-cursor-y, .u-vt .u-cursor-x {width: 100%;border-bottom: 1px dashed #607D8B;}.u-cursor-pt {position: absolute;top: 0;left: 0;border-radius: 50%;border: 0 solid;pointer-events: none;will-change: transform;/*this has to be !important since we set inline "background" shorthand */background-clip: padding-box !important;}.u-axis.u-off, .u-select.u-off, .u-cursor-x.u-off, .u-cursor-y.u-off, .u-cursor-pt.u-off {display: none;}')}`,Qn]}static getStubConfig(){return{type:"custom:prometheus-timeseries-card",title:"Prometheus",time_range:"1h",series:[{query:"sum(up)",name:"Targets up"}]}}static getConfigElement(){return document.createElement("prometheus-timeseries-card-editor")}setConfig(e){const t=Array.isArray(e.series)?e.series:[];super.setConfig({...e,series:t}),this._destroyChart()}_hasQuery(){return Boolean(this._config?.series?.some(e=>e&&e.query&&e.query.trim()))}getCardSize(){return Math.ceil(((this._config?.height||200)+100)/50)}disconnectedCallback(){super.disconnectedCallback(),this._destroyChart()}updated(e){super.updated(e),this._chartContainer&&!this._chart&&this._hasData?this._initChart():this._chart&&e.has("_chartData")&&this._chart.setData(this._chartData)}_destroyChart(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._chart?.destroy(),this._chart=void 0}_cssVar(e,t){return getComputedStyle(this).getPropertyValue(e).trim()||t}_seriesColor(e){const t=this._config.series[e];return t&&t.color||ke[e%ke.length]}_latest(e){for(let t=e.length-1;t>=0;t--){const s=e[t];if(null!=s)return s}return null}_initChart(){if(!this._chartContainer||!this._config)return;const e=this._chartContainer.clientWidth||400,t=this._config.height||200,s=this._cssVar("--secondary-text-color","#888"),i=this._cssVar("--divider-color","rgba(127,127,127,0.2)"),n=[{}];this._config.series.forEach((e,t)=>{const s=this._seriesColor(t),i=e.fill??this._config.fill;n.push({label:e.name||`Series ${t+1}`,stroke:s,width:2,fill:i&&/^#[0-9a-f]{6}$/i.test(s)?`${s}33`:void 0,spanGaps:!0,points:{show:!1}})});const r=[{stroke:s,grid:{stroke:i,width:1},ticks:{stroke:i,width:1}},{stroke:s,size:60,grid:{stroke:i,width:1},ticks:{stroke:i,width:1},values:(e,t)=>t.map(e=>null==e?"":$e(e,this._config.decimals??2,this._config.unit))}],l={width:e,height:t,series:n,axes:r,legend:{show:!1},cursor:{points:{size:6}},hooks:{setCursor:[e=>{const t=e.cursor.idx,s={};for(let i=1;i<e.series.length;i++){const n=e.data[i];s[i-1]=null!=t?n[t]??null:this._latest(n)}this._currentValues=s}]}};this._chart=new Yn(l,this._chartData,this._chartContainer),this._resizeObserver=new ResizeObserver(e=>{for(const t of e)t.target===this._chartContainer&&this._chart&&t.contentRect.width>0&&this._chart.setSize({width:t.contentRect.width,height:this._config.height||200})}),this._resizeObserver.observe(this._chartContainer)}async _fetchData(){const e=this._config.series;try{this._loading=!0;const{start:t,end:s}=function(e){const t=Math.floor(Date.now()/1e3);let s=t-3600;const i=String(e).trim().match(/^(\d+)([smhdw])$/);if(i){const e=parseInt(i[1],10);let n=0;switch(i[2]){case"s":n=e;break;case"m":n=60*e;break;case"h":n=3600*e;break;case"d":n=86400*e;break;case"w":n=604800*e}s=t-n}return{start:s,end:t}}(this._config.time_range||"1h"),i=this._config.step?String(this._config.step):Se(t,s),n=await Promise.all(e.map(e=>e.query&&e.query.trim()?this._client.rangeQuery(e.query,t,s,i):Promise.resolve(null))),r=new Map;n.forEach((t,s)=>{const i=t?.data?.result?.[0]?.values||[];for(const[t,n]of i){r.has(t)||r.set(t,new Array(e.length).fill(null));const i=parseFloat(n);r.get(t)[s]=Number.isFinite(i)?i:null}});const l=Array.from(r.keys()).sort((e,t)=>e-t),o=[l];for(let t=0;t<e.length;t++)o.push(l.map(e=>r.get(e)[t]));const a={};for(let t=0;t<e.length;t++)a[t]=this._latest(o[t+1]);this._currentValues=a,this._chartData=o,this._hasData=l.length>0,this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1}}render(){if(!this._hasQuery())return this.renderPlaceholder("no_series");let e=Y;return this._error?e=B`<div class="overlay error-state">${this._error}</div>`:this._hasData||(e=B`<div class="overlay">
        ${this._loading?B`<div class="loading-state"></div>`:B`<div class="placeholder-state">${be("no_data",this._hass)}</div>`}
      </div>`),B`
      <ha-card>
        ${this._config.title?B`<div class="header">${this._config.title}</div>`:Y}
        <div class="chart-container" style="min-height: ${this._hasData?this._config.height||200:0}px"></div>
        ${e}
        ${!1!==this._config.show_legend&&this._hasData?this._renderLegend():Y}
      </ha-card>
    `}_renderLegend(){return B`
      <div class="legend">
        ${this._config.series.map((e,t)=>{const s=this._currentValues[t],i=null!=s?$e(s,this._config.decimals??2,this._config.unit):"-";return B`
            <div class="legend-item">
              <div class="legend-color" style="background-color: ${this._seriesColor(t)}"></div>
              <span class="legend-name">${e.name||`Series ${t+1}`}</span>
              <span class="legend-value">${i}</span>
            </div>
          `})}
      </div>
    `}};e([ge()],Zn.prototype,"_chartData",void 0),e([ge()],Zn.prototype,"_currentValues",void 0),e([ge()],Zn.prototype,"_hasData",void 0),e([function(e){return(t,s,i)=>((e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s))(t,s,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}(".chart-container")],Zn.prototype,"_chartContainer",void 0),Zn=e([de("prometheus-timeseries-card")],Zn);const Xn=o`
  :host {
    display: block;
  }
  ha-card {
    padding: 0;
  }
  .header {
    padding: 16px 16px 8px;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .body {
    padding: 8px 16px 16px;
  }
  .bars-container-horizontal {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .bar-label {
    width: 80px;
    flex-shrink: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
  }
  .bar-track {
    flex-grow: 1;
    background: var(--secondary-background-color, rgba(100, 100, 100, 0.2));
    border-radius: 4px;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease-out;
  }
  .bar-value {
    min-width: 60px;
    flex-shrink: 0;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
  }
  .bars-container-vertical {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    height: 200px;
    justify-content: space-around;
  }
  .bar-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex: 1;
    height: 100%;
    min-width: 0;
  }
  .bar-col-value {
    font-size: 12px;
    font-weight: 500;
  }
  .bar-col-track {
    width: 100%;
    max-width: 40px;
    flex-grow: 1;
    background: var(--secondary-background-color, rgba(100, 100, 100, 0.2));
    border-radius: 4px;
    position: relative;
    display: flex;
    align-items: flex-end;
  }
  .bar-col-fill {
    width: 100%;
    border-radius: 4px;
    transition: height 0.3s ease-out;
  }
  .bar-col-label {
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
  }
`;let er=class extends je{_defaults(){return{orientation:"horizontal",decimals:2,show_values:!0,bar_height:24,refresh_interval:30}}_sections(){return[{schema:[De,He,{name:"group_by",selector:{text:{}}}]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"orientation",selector:{select:{mode:"dropdown",options:[{value:"horizontal",label:be("horizontal",this.hass)},{value:"vertical",label:be("vertical",this.hass)}]}}},{name:"show_values",selector:{boolean:{}}},Fe,Re,{name:"max",selector:{number:{mode:"box",step:"any"}}},{name:"bar_height",selector:{number:{min:4,max:80,mode:"box",unit_of_measurement:"px"}}}]}]},{title:"section_advanced",schema:[Oe]}]}_renderExtra(){return B`${this._renderThresholds()}`}};er=e([de("prometheus-bar-card-editor")],er);let tr=class extends we{constructor(){super(...arguments),this._barData=[],this._calculatedMax=0,this._loaded=!1}static get styles(){return[ve,Xn]}static getStubConfig(){return{type:"custom:prometheus-bar-card",name:"Scrape duration",query:"scrape_duration_seconds",group_by:"job",unit:"s",decimals:3,orientation:"horizontal"}}static getConfigElement(){return document.createElement("prometheus-bar-card-editor")}async _fetchData(){try{this._loading=!0;const e=await this._client.instantQuery(this._config.query),t=e?.data?.result||[],s=[];let i=0;for(const e of t){let t="Value";if(this._config.group_by&&e.metric[this._config.group_by])t=e.metric[this._config.group_by];else{const s=Object.keys(e.metric).filter(e=>"__name__"!==e);s.length>0?t=e.metric[s[0]]:e.metric.__name__&&(t=e.metric.__name__)}const n=e.value?parseFloat(e.value[1]):0;Number.isFinite(n)&&(n>i&&(i=n),s.push({label:t,value:n,color:"var(--primary-color)"}))}s.sort((e,t)=>t.value-e.value),this._calculatedMax=this._config.max||i||100;const n=this._config.thresholds||[];s.forEach(e=>{e.color=n.length?Ae(e.value,n):"var(--primary-color)"}),this._barData=s,this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}render(){if(!this._hasQuery())return this.renderPlaceholder();let e;return e=this._error?B`<div class="error-state">${this._error}</div>`:this._barData.length>0?this._renderBars():this._loaded?B`<div class="placeholder-state">${be("no_data",this._hass)}</div>`:B`<div class="loading-state"></div>`,B`
      <ha-card>
        ${this._config.name?B`<div class="header">${this._config.name}</div>`:Y}
        <div class="body">${e}</div>
      </ha-card>
    `}_fmt(e){return $e(e,this._config.decimals??2,this._config.unit)}_renderBars(){const e=this._calculatedMax||1,t=!1!==this._config.show_values;if("vertical"===this._config.orientation)return B`
        <div class="bars-container-vertical">
          ${this._barData.map(s=>{const i=Math.min(100,Math.max(0,s.value/e*100));return B`
              <div class="bar-col">
                ${t?B`<div class="bar-col-value">${this._fmt(s.value)}</div>`:Y}
                <div class="bar-col-track">
                  <div class="bar-col-fill" style="height: ${i}%; background-color: ${s.color};"></div>
                </div>
                <div class="bar-col-label" title="${s.label}">${s.label}</div>
              </div>
            `})}
        </div>
      `;const s=this._config.bar_height||24;return B`
      <div class="bars-container-horizontal">
        ${this._barData.map(i=>{const n=Math.min(100,Math.max(0,i.value/e*100));return B`
            <div class="bar-row">
              <div class="bar-label" title="${i.label}">${i.label}</div>
              <div class="bar-track" style="height: ${s}px;">
                <div class="bar-fill" style="width: ${n}%; background-color: ${i.color};"></div>
              </div>
              ${t?B`<div class="bar-value">${this._fmt(i.value)}</div>`:Y}
            </div>
          `})}
      </div>
    `}};e([ge()],tr.prototype,"_barData",void 0),e([ge()],tr.prototype,"_calculatedMax",void 0),e([ge()],tr.prototype,"_loaded",void 0),tr=e([de("prometheus-bar-card")],tr);const sr=[{type:"prometheus-stat-card",key:"stat"},{type:"prometheus-gauge-card",key:"gauge"},{type:"prometheus-timeseries-card",key:"timeseries"},{type:"prometheus-bar-card",key:"bar"}],ir=window;ir.customCards=ir.customCards||[];for(const e of sr)ir.customCards.some(t=>t.type===e.type)||ir.customCards.push({type:e.type,name:be(`${e.key}_name`),description:be(`${e.key}_desc`),preview:!0,documentationURL:"https://github.com/1orgar/ha_prom_graph_cards"});console.info("%c PROMETHEUS-CARDS %c v0.2.0 ","color: white; background: #e65100; font-weight: bold;","color: #e65100; background: white; font-weight: bold;");
