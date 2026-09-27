function e(e,t,s,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,s,l):n(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new r("string"==typeof e?e:e+"",void 0,i),o=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new r(s,e,i)},a=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return l(t)})(e):e,{is:c,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,m=globalThis,g=m.trustedTypes,_=g?g.emptyScript:"",v=m.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},x=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);n?.call(this,t),this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(s)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=i;const r=n.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(void 0!==e){const r=this.constructor;if(!1===i&&(n=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??x)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,s,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,A=e=>e,E=k.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,M="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,T=`<${P}>`,B=document,z=()=>B.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,L="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,q=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,U=/^(?:script|style|textarea|title)$/i,W=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),j=W(1),V=W(2),G=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Y=new WeakMap,Q=B.createTreeWalker(B,129);function J(e,t){if(!F(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":3===t?"<math>":"",l=O;for(let t=0;t<s;t++){const s=e[t];let o,a,c=-1,h=0;for(;h<s.length&&(l.lastIndex=h,a=l.exec(s),null!==a);)h=l.lastIndex,l===O?"!--"===a[1]?l=H:void 0!==a[1]?l=q:void 0!==a[2]?(U.test(a[2])&&(n=RegExp("</"+a[2],"g")),l=N):void 0!==a[3]&&(l=N):l===N?">"===a[0]?(l=n??O,c=-1):void 0===a[1]?c=-2:(c=l.lastIndex-a[2].length,o=a[1],l=void 0===a[3]?N:'"'===a[3]?I:R):l===I||l===R?l=N:l===H||l===q?l=O:(l=N,n=void 0);const u=l===N&&e[t+1].startsWith("/>")?" ":"";r+=l===O?s+T:c>=0?(i.push(o),s.slice(0,c)+M+s.slice(c)+C+u):s+C+(-2===c?t:u)}return[J(e,r+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class X{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const l=e.length-1,o=this.parts,[a,c]=Z(e,t);if(this.el=X.createElement(a,s),Q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Q.nextNode())&&o.length<l;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(M)){const t=c[r++],s=i.getAttribute(e).split(C),l=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:l[2],strings:s,ctor:"."===l[1]?ne:"?"===l[1]?re:"@"===l[1]?le:ie}),i.removeAttribute(e)}else e.startsWith(C)&&(o.push({type:6,index:n}),i.removeAttribute(e));if(U.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],z()),Q.nextNode(),o.push({type:2,index:++n});i.append(e[t],z())}}}else if(8===i.nodeType)if(i.data===P)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)o.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const s=B.createElement("template");return s.innerHTML=e,s}}function ee(e,t,s=e,i){if(t===G)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=D(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=ee(e,n._$AS(e,t.values),n,i)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??B).importNode(t,!0);Q.currentNode=i;let n=Q.nextNode(),r=0,l=0,o=s[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new se(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new oe(n,this,e)),this._$AV.push(t),o=s[++l]}r!==o?.index&&(n=Q.nextNode(),r++)}return Q.currentNode=B,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),D(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>F(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(B.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=X.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new te(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new X(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new se(this.O(z()),this.O(z()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=ee(this,e,t,0),r=!D(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const i=e;let l,o;for(e=n[0],l=0;l<n.length-1;l++)o=ee(this,i[s+l],t,l),o===G&&(o=this._$AH[l]),r||=!D(o)||o!==this._$AH[l],o===K?e=K:e!==K&&(e+=(o??"")+n[l+1]),this._$AH[l]=o}r&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ne extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class le extends ie{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??K)===G)return;const s=this._$AH,i=e===K&&s!==K||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const ae=k.litHtmlPolyfillSupport;ae?.(X,se),(k.litHtmlVersions??=[]).push("3.3.3");const ce=globalThis;class he extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=s?.renderBefore??null;i._$litPart$=n=new se(t.insertBefore(z(),e),e,void 0,s??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}he._$litElement$=!0,he.finalized=!0,ce.litElementHydrateSupport?.({LitElement:he});const ue=ce.litElementPolyfillSupport;ue?.({LitElement:he}),(ce.litElementVersions??=[]).push("4.2.2");const de=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},fe=(e=pe,t,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const n=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,n,e,!0,s)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];t.call(this,s),this.requestUpdate(i,n,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function me(e){return(t,s)=>"object"==typeof s?fe(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function ge(e){return me({...e,state:!0,attribute:!1})}class _e{constructor(e,t){this.hass=e,this.entryId=t}_msg(e,t={}){const s={type:`prometheus_dashboard/${e}`};this.entryId&&(s.entry_id=this.entryId);for(const[e,i]of Object.entries(t))void 0!==i&&(s[e]=i);return s}async instantQuery(e,t){return this.hass.callWS(this._msg("query",{query:e,time:t}))}async rangeQuery(e,t,s,i){return this.hass.callWS(this._msg("query_range",{query:e,start:t,end:s,step:i}))}async getLabels(){return(await this.hass.callWS(this._msg("labels"))).data}async getLabelValues(e){return(await this.hass.callWS(this._msg("label_values",{label:e}))).data}async getMetadata(e){return(await this.hass.callWS(this._msg("metadata",{metric:e}))).data}async getSeries(e){return(await this.hass.callWS(this._msg("series",{match:e}))).data}static async getEntries(e){return e.callWS({type:"prometheus_dashboard/entries"})}}const ve=o`
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
`,ye={entry_id:"Prometheus server",query:"PromQL query",name:"Name",title:"Title",icon:"Icon",unit:"Unit",decimals:"Decimals",refresh_interval:"Refresh interval (s)",min:"Min",max:"Max",arc_width:"Arc width",sparkline:"Show sparkline",sparkline_hours:"Sparkline range (hours)",time_range:"Time range",step:"Step (s, empty = auto)",fill:"Fill area",show_legend:"Show legend",height:"Chart height (px)",group_by:"Group by label",orientation:"Orientation",show_values:"Show values",bar_height:"Bar height (px)",value:"Value",color:"Color",section_display:"Display",section_advanced:"Advanced",section_thresholds:"Thresholds",section_series:"Series",helper_entry_id:"Leave empty to use the first configured server",helper_unit:"Values are scaled within the dimension (B → KiB → MiB, W → kW, s → min → h). You can also type a custom suffix",helper_group_by:"Label whose value is used as the bar name (e.g. job, instance)",helper_thresholds:"The color of the highest threshold not greater than the value is used",add_threshold:"Add threshold",add_series:"Add series",remove:"Remove",series_n:"Series {n}",horizontal:"Horizontal",vertical:"Vertical",no_query:"Set a PromQL query in the card editor",no_series:"Add at least one series in the card editor",no_data:"No data",stat_name:"Prometheus Stat",stat_desc:"Single Prometheus metric value with optional sparkline",gauge_name:"Prometheus Gauge",gauge_desc:"Radial gauge with threshold colors",timeseries_name:"Prometheus Time Series",timeseries_desc:"Grafana-like line/area chart for one or more PromQL queries",bar_name:"Prometheus Bar Chart",bar_desc:"Bar chart grouped by a Prometheus label",legend_format:"Legend format",helper_legend_format:"Grafana syntax: {{instance}} {{job}}. Empty = metric{labels}",helper_name_series:"Series name or legend format, e.g. {{device}} rx",palette:"Color scheme",palette_classic:"Classic palette (Grafana)","palette_green-yellow-red":"Green-Yellow-Red (by series)",palette_blues:"Blues (by series)",palette_greens:"Greens (by series)",palette_reds:"Reds (by series)",palette_purples:"Purples (by series)",palette_single:"Single color (theme)",color_mode:"Color by",color_mode_thresholds:"Thresholds",color_mode_series:"Series palette",line_width:"Line width",fill_opacity:"Fill opacity (%)",sparkline_fill:"Sparkline gradient",reduce:"Several series",reduce_none:"Show each series",reduce_sum:"Sum",reduce_avg:"Average",reduce_min:"Min",reduce_max:"Max",show_labels:"Show series labels",stacked:"Stack series",legend_mode:"Legend mode",legend_mode_list:"List",legend_mode_table:"Table",legend_values:"Legend values",legend_value_last:"Last",legend_value_min:"Min",legend_value_max:"Max",legend_value_mean:"Mean",sort:"Sort",sort_desc:"Value, descending",sort_asc:"Value, ascending",sort_name:"Name",sort_none:"As returned",limit:"Max bars",section_legend:"Legend",section_colors:"Colors",section_queries:"Queries",add_query:"Add query",query_n:"Query {n}",helper_series_query:"A query may return many series; each gets its own color and legend entry"},be={en:ye,ru:{entry_id:"Сервер Prometheus",query:"Запрос PromQL",name:"Название",title:"Заголовок",icon:"Иконка",unit:"Единица измерения",decimals:"Знаков после запятой",refresh_interval:"Интервал обновления (с)",min:"Минимум",max:"Максимум",arc_width:"Толщина дуги",sparkline:"Показывать мини-график",sparkline_hours:"Период мини-графика (ч)",time_range:"Период",step:"Шаг (с, пусто = авто)",fill:"Заливка области",show_legend:"Показывать легенду",height:"Высота графика (px)",group_by:"Группировать по метке",orientation:"Ориентация",show_values:"Показывать значения",bar_height:"Высота столбца (px)",value:"Значение",color:"Цвет",section_display:"Отображение",section_advanced:"Дополнительно",section_thresholds:"Пороги",section_series:"Серии",helper_entry_id:"Оставьте пустым, чтобы использовать первый настроенный сервер",helper_unit:"Значение масштабируется в пределах размерности (B → KiB → MiB, W → kW, s → мин → ч). Можно ввести свой суффикс",helper_group_by:"Метка, значение которой станет подписью столбца (например job, instance)",helper_thresholds:"Используется цвет наибольшего порога, не превышающего значение",add_threshold:"Добавить порог",add_series:"Добавить серию",remove:"Удалить",series_n:"Серия {n}",horizontal:"Горизонтально",vertical:"Вертикально",no_query:"Укажите запрос PromQL в редакторе карточки",no_series:"Добавьте хотя бы одну серию в редакторе карточки",no_data:"Нет данных",stat_name:"Prometheus: значение",stat_desc:"Одно значение метрики Prometheus с мини-графиком",gauge_name:"Prometheus: индикатор",gauge_desc:"Круговой индикатор с цветовыми порогами",timeseries_name:"Prometheus: временной ряд",timeseries_desc:"График в стиле Grafana для одного или нескольких запросов PromQL",bar_name:"Prometheus: столбцы",bar_desc:"Столбчатая диаграмма с группировкой по метке Prometheus",legend_format:"Формат легенды",helper_legend_format:"Синтаксис Grafana: {{instance}} {{job}}. Пусто = metric{labels}",helper_name_series:"Имя серии или формат легенды, например {{device}} rx",palette:"Цветовая схема",palette_classic:"Классическая палитра (Grafana)","palette_green-yellow-red":"Зелёный-жёлтый-красный (по сериям)",palette_blues:"Синие (по сериям)",palette_greens:"Зелёные (по сериям)",palette_reds:"Красные (по сериям)",palette_purples:"Фиолетовые (по сериям)",palette_single:"Один цвет (тема)",color_mode:"Цвет по",color_mode_thresholds:"Порогам",color_mode_series:"Палитре серий",line_width:"Толщина линии",fill_opacity:"Прозрачность заливки (%)",sparkline_fill:"Градиент под мини-графиком",reduce:"Несколько серий",reduce_none:"Показать каждую",reduce_sum:"Сумма",reduce_avg:"Среднее",reduce_min:"Минимум",reduce_max:"Максимум",show_labels:"Подписи серий",stacked:"Накопление (stack)",legend_mode:"Вид легенды",legend_mode_list:"Список",legend_mode_table:"Таблица",legend_values:"Значения в легенде",legend_value_last:"Последнее",legend_value_min:"Мин",legend_value_max:"Макс",legend_value_mean:"Среднее",sort:"Сортировка",sort_desc:"По значению, убыв.",sort_asc:"По значению, возр.",sort_name:"По имени",sort_none:"Как вернул Prometheus",limit:"Максимум столбцов",section_legend:"Легенда",section_colors:"Цвета",section_queries:"Запросы",add_query:"Добавить запрос",query_n:"Запрос {n}",helper_series_query:"Запрос может вернуть много серий — у каждой свой цвет и строка в легенде"}};function xe(e,t,s={}){const i=be[function(e){return(e?.locale?.language||e?.language||("undefined"!=typeof localStorage?localStorage.getItem("selectedLanguage")?.replace(/"/g,""):null)||("undefined"!=typeof navigator?navigator.language:"en")||"en").split("-")[0].toLowerCase()}(t)]||ye;let n=i[e]??ye[e]??e;for(const[e,t]of Object.entries(s))n=n.replace(`{${e}}`,String(t));return n}class we extends he{constructor(){super(...arguments),this._loading=!1,this._connected=!1}setConfig(e){if(!e||!e.type)throw new Error("Invalid configuration");this._config=e,this._error=void 0,this._restart()}set hass(e){const t=!this._hass;this._hass=e,t&&this._restart()}get hass(){return this._hass}connectedCallback(){super.connectedCallback(),this._connected=!0,this._restart()}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._stopAutoRefresh()}_hasQuery(){return Boolean(this._config?.query&&this._config.query.trim())}get _client(){const e=this._config.entry_id||void 0;return this._cachedClient&&this._cachedClient.entryId===e||(this._cachedClient=new _e(this._hass,e)),this._cachedClient}async _safeFetch(){if(this._hass&&this._config&&this._hasQuery())try{await this._fetchData()}catch(e){this._error=this._formatError(e),this._loading=!1}}_formatError(e){return e?"string"==typeof e?e:"unknown_command"===e.code?"Prometheus Dashboard integration is not installed or not loaded":e.message||e.code||"Error fetching data":"Error"}_restart(){this._hass&&this._config&&this._connected&&(this._startAutoRefresh(),this._safeFetch())}_startAutoRefresh(){this._stopAutoRefresh();const e=Number(this._config.refresh_interval)||30;this._interval=window.setInterval(()=>this._safeFetch(),1e3*Math.max(5,e))}_stopAutoRefresh(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}shouldUpdate(e){return Boolean(this._config)&&super.shouldUpdate(e)}getCardSize(){return 3}renderError(){return j`
      <ha-card>
        <div class="error-state">${this._error}</div>
      </ha-card>
    `}renderLoading(){return j`
      <ha-card>
        <div class="loading-state"></div>
      </ha-card>
    `}renderPlaceholder(e="no_query"){return j`
      <ha-card>
        <div class="placeholder-state">${xe(e,this._hass)}</div>
      </ha-card>
    `}}function $e(e,t){if(!Number.isFinite(e))return String(e);if(null==t||Number.isNaN(t)){const t=Math.abs(e),s=0===t?0:Math.min(6,Math.max(0,2-Math.floor(Math.log10(t))));return String(parseFloat(e.toFixed(s)))}return e.toFixed(Math.max(0,Math.min(10,t)))}we.styles=ve,e([ge()],we.prototype,"_config",void 0),e([ge()],we.prototype,"_error",void 0),e([ge()],we.prototype,"_loading",void 0);const ke=(e,t="",s="")=>({prefix:s,text:e,suffix:t});function Ae(e,t,s=0,i=""){return(n,r)=>{if(0===n||!Number.isFinite(n))return ke($e(n,r),t[s],i);let l=Math.floor(Math.log(Math.abs(n))/Math.log(e));return l=Math.max(-s,Math.min(t.length-1-s,l)),ke($e(n/Math.pow(e,l),r),t[l+s],i)}}const Ee=["p","n","µ","m","","k","M","G","T","P","E"];function Se(e,t=""){return Ae(1e3,Ee.map(t=>` ${t}${e}`),Ee.indexOf(t))}function Me(e){return(t,s)=>ke($e(t,s),e)}function Ce(e,t=0){return Ae(1024,e.map(e=>` ${e}`),t)}function Pe(e,t=0){return Ae(1e3,e.map(e=>` ${e}`),t)}function Te(e){return Ae(1e3,["","K","M","B","T"].map(t=>` ${t}${e}`))}function Be(e,t=!1){const s=Ae(1e3,["","K","M","B","T"]);return(i,n)=>{const r=s(i,n);return t?ke(r.text,`${r.suffix} ${e}`):ke(r.text,r.suffix,e)}}const ze=[[" ns",1e-9],[" µs",1e-6],[" ms",.001],[" s",1],[" min",60],[" hour",3600],[" day",86400],[" week",604800],[" year",31536e3]];function De(e){return(t,s)=>{const i=t*e,n=Math.abs(i);let r=ze.find(([,t])=>t===e)||ze[3];if(n>0){for(const e of ze)n>=e[1]&&(r=e);n<ze[0][1]&&(r=ze[0])}return ke($e(i/r[1],s),r[0])}}const Fe=[["y",31536e3],["w",604800],["d",86400],["h",3600],["m",60],["s",1]];function Le(e){return t=>{let s=Math.abs(t*e);const i=t<0?"-":"";if(s<1)return ke(`${i}${Math.round(1e3*s)}ms`);const n=[];for(const[e,t]of Fe){if(s>=t||n.length&&n.length<3){const i=Math.floor(s/t);s-=i*t,i>0&&n.push(`${i}${e}`)}if(n.length>=3)break}return ke(i+(n.join(" ")||"0s"))}}function Oe(e){return t=>{const s=Math.abs(t)<1e11?1e3*t:t,i=new Date(s);if(Number.isNaN(i.getTime()))return ke(String(t));if("iso"===e)return ke(i.toISOString());if("local"===e)return ke(i.toLocaleString());const n=(s-Date.now())/1e3,r=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),l=Math.abs(n),[o,a]=l<60?["second",1]:l<3600?["minute",60]:l<86400?["hour",3600]:l<2592e3?["day",86400]:l<31536e3?["month",2592e3]:["year",31536e3];return ke(r.format(Math.round(n/a),o))}}function He(e,t){return s=>ke(s?e:t)}const qe=[["Misc",[["none","Number",(e,t)=>ke($e(e,t))],["short","Short (K, M, B)",Ae(1e3,[""," K"," Mil"," Bil"," Tri"])],["sci","Scientific notation",(e,t)=>ke(e.toExponential(t??2))],["percent","Percent (0-100)",Me("%")],["percentunit","Percent (0.0-1.0)",(e,t)=>ke($e(100*e,t),"%")],["humidity","Humidity (%H)",Me("%H")],["dB","Decibel",Me(" dB")],["ppm","Parts-per-million (ppm)",Me(" ppm")],["bool_yes_no","Yes / No",He("Yes","No")],["bool_on_off","On / Off",He("On","Off")],["bool","True / False",He("True","False")]]],["Data",[["bytes","bytes (IEC)",Ce(["B","KiB","MiB","GiB","TiB","PiB","EiB"])],["decbytes","bytes (SI)",Pe(["B","kB","MB","GB","TB","PB","EB"])],["bits","bits (IEC)",Ce(["b","Kib","Mib","Gib","Tib","Pib"])],["decbits","bits (SI)",Pe(["b","kb","Mb","Gb","Tb","Pb"])],["kbytes","kibibytes",Ce(["B","KiB","MiB","GiB","TiB","PiB"],1)],["mbytes","mebibytes",Ce(["B","KiB","MiB","GiB","TiB","PiB"],2)],["gbytes","gibibytes",Ce(["B","KiB","MiB","GiB","TiB","PiB"],3)]]],["Data rate",[["binBps","bytes/sec (IEC)",Ce(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"])],["Bps","bytes/sec (SI)",Pe(["B/s","kB/s","MB/s","GB/s","TB/s"])],["binbps","bits/sec (IEC)",Ce(["b/s","Kib/s","Mib/s","Gib/s","Tib/s"])],["bps","bits/sec (SI)",Pe(["b/s","kb/s","Mb/s","Gb/s","Tb/s"])],["KiBs","kibibytes/sec",Ce(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"],1)],["MiBs","mebibytes/sec",Ce(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"],2)],["pps","packets/sec",Pe(["p/s","kp/s","Mp/s","Gp/s"])]]],["Throughput",[["ops","ops/sec (ops)",Te("ops")],["reqps","requests/sec (rps)",Te("req/s")],["rps","reads/sec (rps)",Te("rd/s")],["wps","writes/sec (wps)",Te("wr/s")],["iops","I/O ops/sec (iops)",Te("io/s")],["opm","ops/min (opm)",Te("ops/min")],["eps","events/sec",Te("evt/s")]]],["Time",[["ns","nanoseconds (ns)",De(1e-9)],["µs","microseconds (µs)",De(1e-6)],["ms","milliseconds (ms)",De(.001)],["s","seconds (s)",De(1)],["m","minutes (m)",De(60)],["h","hours (h)",De(3600)],["d","days (d)",De(86400)],["dtdurations","duration (s)",Le(1)],["dtdurationms","duration (ms)",Le(.001)],["hertz","Hertz (1/s)",Se("Hz")]]],["Date & time",[["dateTimeAsLocal","Local date/time",Oe("local")],["dateTimeAsIso","ISO 8601",Oe("iso")],["dateTimeFromNow","From now",Oe("fromNow")]]],["Energy",[["watt","Watt (W)",Se("W")],["kwatt","Kilowatt (kW)",Se("W","k")],["voltamp","Volt-ampere (VA)",Se("VA")],["watth","Watt-hour (Wh)",Se("Wh")],["kwatth","Kilowatt-hour (kWh)",Se("Wh","k")],["joule","Joule (J)",Se("J")],["volt","Volt (V)",Se("V")],["mvolt","Millivolt (mV)",Se("V","m")],["amp","Ampere (A)",Se("A")],["mamp","Milliampere (mA)",Se("A","m")],["ohm","Ohm (Ω)",Se("Ω")]]],["Temperature",[["celsius","Celsius (°C)",Me("°C")],["fahrenheit","Fahrenheit (°F)",Me("°F")],["kelvin","Kelvin (K)",Me(" K")]]],["Pressure",[["pressurembar","Millibars",Se("bar","m")],["pressurebar","Bars",Se("bar")],["pressurehpa","Hectopascals",Me(" hPa")],["pressurekpa","Kilopascals",Me(" kPa")],["pressurepsi","PSI",Me(" psi")]]],["Length & area",[["lengthmm","millimeter (mm)",Se("m","m")],["lengthm","meter (m)",Se("m")],["lengthkm","kilometer (km)",Se("m","k")],["areaM2","Square meters (m²)",Me(" m²")]]],["Mass & volume",[["massmg","milligram (mg)",Se("g","m")],["massg","gram (g)",Se("g")],["masskg","kilogram (kg)",Se("g","k")],["mlitre","millilitre (mL)",Se("L","m")],["litre","litre (L)",Se("L")],["m3","cubic meter (m³)",Me(" m³")]]],["Velocity & flow",[["velocityms","meters/second (m/s)",Me(" m/s")],["velocitykmh","kilometers/hour (km/h)",Me(" km/h")],["flowlpm","Litre/min (L/min)",Me(" L/min")],["flowcms","Cubic meter/sec (m³/s)",Me(" m³/s")]]],["Currency",[["currencyUSD","Dollars ($)",Be("$")],["currencyEUR","Euro (€)",Be("€")],["currencyRUB","Rubles (₽)",Be("₽",!0)]]]],Ne=qe.flatMap(([e,t])=>t.map(([t,s,i])=>({id:t,label:s,category:e,fn:i}))),Re=new Map(Ne.map(e=>[e.id,e])),Ie={"%":"percent",B:"bytes",seconds:"s","bytes/s":"binBps"};function Ue(e,t,s){if(null==e||Number.isNaN(e))return{prefix:"",text:"-",suffix:""};const i=function(e){if(e)return Re.get(e)||Re.get(Ie[e])}(t);return i?i.fn(e,s):{prefix:"",text:$e(e,s),suffix:t?` ${t}`:""}}function We(e,t,s){const i=Ue(e,s,t);return`${i.prefix}${i.text}${i.suffix}`}function je(e,t,s){if(t&&t.trim())return t.replace(/\{\{\s*([\w.]+)\s*\}\}/g,(t,s)=>e[s]??"");const{__name__:i,...n}=e,r=Object.entries(n);if(!r.length)return s||i||"Value";const l=r.map(([e,t])=>`${e}="${t}"`).join(", ");return s?1===r.length?`${s} ${r[0][1]}`:`${s} {${l}}`:i?`${i}{${l}}`:`{${l}}`}function Ve(e,t,s){if(t&&t.trim())return je(e,t);if(s&&e[s])return e[s];const i=Object.keys(e).filter(e=>"__name__"!==e);return 1===i.length?e[i[0]]:i.length>1?je(e):e.__name__||"Value"}const Ge=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7"],Ke={green:"#73BF69",yellow:"#FADE2A",orange:"#FF9830",red:"#F2495C",blue:"#5794F2",purple:"#B877D9","dark-green":"#37872D","dark-red":"#C4162A",text:"var(--primary-text-color)"},Ye={"green-yellow-red":["#73BF69","#A0D468","#FADE2A","#FFB357","#FF9830","#F2495C"],blues:["#C0D8FF","#8AB8FF","#5794F2","#3274D9","#1F60C4"],greens:["#C8F2C2","#96D98D","#73BF69","#56A64B","#37872D"],reds:["#FFA6B0","#FF7383","#F2495C","#E02F44","#C4162A"],purples:["#DEB6F2","#CA95E5","#B877D9","#A352CC","#8F3BB8"]};function Qe(e){if(e)return Ke[e]||e}function Je(e,t,s){if(!t||0===t.length)return s||Ge[0];const i=[...t].sort((e,t)=>t.value-e.value);for(const t of i)if(e>=t.value)return Qe(t.color);return Qe(i[i.length-1].color)||s||Ge[0]}function Ze(e,t,s=500){const i=t-e;return`${Math.max(1,Math.floor(i/s))}s`}function Xe(e){if(void 0===e)return null;const t=parseFloat(e);return Number.isFinite(t)?t:null}function et(e,t,s){const i=e?.data;if(!i)return[];if("scalar"===i.resultType||"string"===i.resultType){const e=i.result||[];return[{metric:{},label:s||"Value",value:Xe(e[1])}]}return(i.result||[]).slice(0,100).map(e=>({metric:e.metric||{},label:je(e.metric||{},t,s),value:Xe(e.value?.[1])}))}function tt(e,t,s){return(e?.data?.result||[]).slice(0,100).map(e=>({metric:e.metric||{},label:je(e.metric||{},t,s),points:(e.values||[]).map(([e,t])=>[Number(e),Xe(t)])}))}function st(e){for(let t=e.length-1;t>=0;t--)if(null!==e[t][1])return e[t][1];return null}function it(e,t){const s=e.filter(e=>null!==e);if(!s.length)return null;switch(t){case"sum":return s.reduce((e,t)=>e+t,0);case"avg":return s.reduce((e,t)=>e+t,0)/s.length;case"min":return Math.min(...s);case"max":return Math.max(...s);default:return s[0]}}function nt(e,t,s,i){return i?Qe(i):"single"===s?"var(--primary-color)":function(e,t,s="classic"){if("classic"===s||!Ye[s])return Ge[e%Ge.length];const i=Ye[s];if(t<=1)return i[Math.floor(i.length/2)];const n=e/(t-1)*(i.length-1);return i[Math.round(n)]}(e,t,s||"classic")}let rt=0,lt=class extends he{constructor(){super(...arguments),this.series=[],this.fill=!0,this.height=40,this.lineWidth=2,this._id="pspark-"+ ++rt}render(){const e=this.series.flatMap(e=>e.values.filter(e=>null!==e));if(!e.length)return j``;let t=Math.min(...e),s=Math.max(...e);t===s&&(t-=1,s+=1);const i=s-t,n=this.lineWidth/2/this.height*100,r=this.series.map((e,s)=>{const r=e.values.length,l=[];e.values.forEach((e,s)=>{if(null===e)return;const o=r>1?s/(r-1)*100:50,a=n+(100-2*n)*(1-(e-t)/i);l.push(`${o.toFixed(2)},${a.toFixed(2)}`)});const o=`${this._id}-${s}`,a=this.fill&&1===this.series.length&&l.length>1,c=l[0]?.split(",")[0]??"0",h=l[l.length-1]?.split(",")[0]??"100";return V`
        ${a?V`
            <defs>
              <linearGradient id="${o}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${e.color}" stop-opacity="0.35"></stop>
                <stop offset="100%" stop-color="${e.color}" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
            <polygon points="${c},100 ${l.join(" ")} ${h},100" fill="url(#${o})" stroke="none"></polygon>`:""}
        <polyline points="${l.join(" ")}" stroke="${e.color}" stroke-width="${this.lineWidth}"></polyline>
      `});return j`
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="height: ${this.height}px">${r}</svg>
    `}};lt.styles=o`
    :host {
      display: block;
    }
    svg {
      display: block;
      overflow: visible;
      width: 100%;
    }
    polyline {
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
    }
  `,e([me({attribute:!1})],lt.prototype,"series",void 0),e([me({type:Boolean})],lt.prototype,"fill",void 0),e([me({type:Number})],lt.prototype,"height",void 0),e([me({type:Number,attribute:"line-width"})],lt.prototype,"lineWidth",void 0),lt=e([de("prometheus-sparkline")],lt);const ot=o`
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
`;function at(e,t,s,i){i=i||{},s=null==s?{}:s;const n=new CustomEvent(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed,detail:s});return e.dispatchEvent(n),n}function ct(e,t){at(e,"config-changed",{config:t})}let ht;function ut(e){const t={};for(const[s,i]of Object.entries(e))null!=i&&""!==i&&("number"==typeof i&&Number.isNaN(i)||(t[s]=i));return t}const dt={name:"entry_id",selector:{config_entry:{integration:"prometheus_dashboard"}}},pt={name:"query",required:!0,selector:{text:{multiline:!0}}},ft={name:"refresh_interval",selector:{number:{min:5,max:86400,step:1,mode:"box",unit_of_measurement:"s"}}},mt={name:"decimals",selector:{number:{min:0,max:6,step:1,mode:"box"}}},gt={name:"unit",selector:{select:{mode:"dropdown",custom_value:!0,options:Ne.map(e=>({value:e.id,label:`${e.category} › ${e.label}`}))}}},_t={name:"legend_format",selector:{text:{}}};function vt(e){return{name:"palette",selector:{select:{mode:"dropdown",options:["classic","green-yellow-red","blues","greens","reds","purples","single"].map(t=>({value:t,label:xe(`palette_${t}`,e)}))}}}}function yt(e){return{name:"color_mode",selector:{select:{mode:"dropdown",options:["thresholds","series"].map(t=>({value:t,label:xe(`color_mode_${t}`,e)}))}}}}const bt=["15m","30m","1h","3h","6h","12h","24h","2d","7d","30d"],xt="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";let wt=class extends he{constructor(){super(...arguments),this.items=[],this.schema=[],this.newItem=()=>({}),this.itemTitle="",this.addLabel="",this._computeLabel=e=>xe(e.name,this.hass)}_emit(e){at(this,"value-changed",{value:e})}_itemChanged(e,t){t.stopPropagation();const s=[...this.items],i={...t.detail.value};for(const e of Object.keys(i))""!==i[e]&&void 0!==i[e]||delete i[e];s[e]=i,this._emit(s)}_remove(e){const t=[...this.items];t.splice(e,1),this._emit(t)}_add(){this._emit([...this.items,this.newItem()])}render(){return j`
      ${this.items.map((e,t)=>j`
          <div class="item">
            <div class="item-header">
              <span>${this.itemTitle?this.itemTitle.replace("{n}",String(t+1)):K}</span>
              <ha-icon-button
                .label=${xe("remove",this.hass)}
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
        <ha-svg-icon slot="start" .path=${xt}></ha-svg-icon>
        <ha-svg-icon slot="icon" .path=${xt}></ha-svg-icon>
        ${this.addLabel}
      </ha-button>
    `}};wt.styles=o`
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
  `,e([me({attribute:!1})],wt.prototype,"hass",void 0),e([me({attribute:!1})],wt.prototype,"items",void 0),e([me({attribute:!1})],wt.prototype,"schema",void 0),e([me({attribute:!1})],wt.prototype,"newItem",void 0),e([me()],wt.prototype,"itemTitle",void 0),e([me()],wt.prototype,"addLabel",void 0),wt=e([de("prometheus-list-editor")],wt);const $t=[{name:"",type:"grid",schema:[{name:"value",required:!0,selector:{number:{mode:"box",step:"any"}}},{name:"color",required:!0,selector:{text:{type:"color"}}}]}];class kt extends he{constructor(){super(...arguments),this._ready=!1,this._computeLabel=e=>xe(e.name,this.hass),this._computeHelper=e=>{const t=`helper_${e.name}`,s=xe(t,this.hass);return s===t?void 0:s}}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),(customElements.get("ha-form")&&customElements.get("ha-selector")?Promise.resolve():(ht||(ht=(async()=>{try{const e=await(window.loadCardHelpers?.());if(!e)return;const t=await e.createCardElement({type:"entities",entities:[]});await(t?.constructor?.getConfigElement?.())}catch(e){console.warn("prometheus-cards: failed to preload HA form components",e)}})()),ht)).then(()=>{this._ready=!0})}_defaults(){return{}}_renderExtra(){return K}_renderThresholds(){const e=this._config;return j`
      <div class="section-title">${xe("section_thresholds",this.hass)}</div>
      <div class="helper">${xe("helper_thresholds",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${e.thresholds||[]}
        .schema=${$t}
        .newItem=${()=>({value:0,color:"#73BF69"})}
        .addLabel=${xe("add_threshold",this.hass)}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({thresholds:t.length?t:void 0})}}
      ></prometheus-list-editor>
    `}_updateConfig(e){this._config&&(this._config=ut({...this._config,...e}),ct(this,this._config))}_formChanged(e){if(e.stopPropagation(),!this._config)return;const t=e.detail.value,s=ut({...this._config,...t});for(const e of this._sections())for(const i of this._fieldNames(e.schema))i in t&&""!==t[i]&&void 0!==t[i]||delete s[i];const i=this._defaults();for(const[e,t]of Object.entries(i))e in this._config||s[e]!==t||delete s[e];s.type=this._config.type,this._config=s,ct(this,this._config)}_fieldNames(e){const t=[];for(const s of e)s.schema?t.push(...this._fieldNames(s.schema)):t.push(s.name);return t}render(){if(!this.hass||!this._config||!this._ready)return j``;const e={...this._defaults(),...this._config};return j`
      <div class="card-config">
        ${this._sections().map(t=>j`
            ${t.title?j`<div class="section-title">${xe(t.title,this.hass)}</div>`:K}
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
    `}}kt.styles=ot,e([me({attribute:!1})],kt.prototype,"hass",void 0),e([ge()],kt.prototype,"_config",void 0),e([ge()],kt.prototype,"_ready",void 0);let At=class extends kt{_defaults(){return{refresh_interval:30,sparkline:!1,sparkline_hours:24,line_width:2,sparkline_fill:!0,reduce:"none",palette:"classic",color_mode:"thresholds"}}_sections(){const e=this._config?.sparkline?[{name:"sparkline_hours",selector:{number:{min:1,max:720,mode:"box",unit_of_measurement:"h"}}},{name:"line_width",selector:{number:{min:1,max:10,step:.5,mode:"slider",unit_of_measurement:"px"}}},{name:"sparkline_fill",selector:{boolean:{}}}]:[],t=["none","sum","avg","min","max"].map(e=>({value:e,label:xe(`reduce_${e}`,this.hass)}));return[{schema:[dt,pt,{name:"",type:"grid",schema:[{name:"reduce",selector:{select:{mode:"dropdown",options:t}}},_t]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},gt,mt]},{name:"",type:"grid",schema:[{name:"sparkline",selector:{boolean:{}}},...e]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[yt(this.hass),vt(this.hass)]}]},{title:"section_advanced",schema:[ft]}]}_renderExtra(){return j`${this._renderThresholds()}`}};At=e([de("prometheus-stat-card-editor")],At);const Et=o`
  ha-card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .stat-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .icon-container {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    opacity: 1;
    background-color: color-mix(in srgb, var(--icon-color, var(--primary-color)) 20%, transparent);
    color: var(--icon-color, var(--primary-color));
  }
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
  .name {
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 500;
  }
  .value-container {
    display: flex;
    align-items: baseline;
    gap: 2px;
  }
  .value {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--value-color, var(--primary-text-color));
  }
  .unit {
    font-size: 16px;
    color: var(--secondary-text-color);
  }
  .rows {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  .row .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .row .label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-color);
  }
  .row .row-value {
    font-weight: 500;
    font-size: 18px;
    white-space: nowrap;
  }
  .row .row-value .unit {
    font-size: 13px;
  }
`;let St=class extends we{constructor(){super(...arguments),this._items=[],this._loaded=!1}static get styles(){return[ve,Et]}static getStubConfig(){return{type:"custom:prometheus-stat-card",name:"Prometheus",query:"up",icon:"mdi:chart-line",decimals:0,sparkline:!0}}static getConfigElement(){return document.createElement("prometheus-stat-card-editor")}async _fetchData(){const e=this._config;try{if(this._loading=!0,e.sparkline){const t=e.sparkline_hours||24,s=Math.floor(Date.now()/1e3),i=s-3600*t,n=await this._client.rangeQuery(e.query,i,s,Ze(i,s,120));this._items=tt(n,e.legend_format).map(t=>({label:Ve(t.metric,e.legend_format),value:st(t.points),history:t.points.map(e=>e[1])}))}else{const t=await this._client.instantQuery(e.query);this._items=et(t,e.legend_format).map(t=>({...t,label:Ve(t.metric,e.legend_format),history:[]}))}this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_displayItems(){const e=this._config.reduce||"none";if("none"===e||this._items.length<=1)return this._items;const t=Math.max(...this._items.map(e=>e.history.length)),s=[];for(let i=0;i<t;i++)s.push(it(this._items.map(e=>e.history[i]??null),e));const i=it(this._items.map(e=>e.value),e);return[{label:this._config.name||"",value:i,history:s}]}_color(e,t,s){const i=this._config;if("series"!==i.color_mode&&(i.thresholds?.length||1===s)){const n=s>1?nt(t,s,i.palette):void 0;return Je(e.value??0,i.thresholds||[],n)}return nt(t,s,i.palette)}_renderValue(e,t="value"){const s=Ue(e,this._config.unit,this._config.decimals),i=s.suffix.trim();return j`<span class=${t}>${s.prefix}${s.text}</span>${i?j`<span class="unit">${i}</span>`:K}`}_renderRows(e){return j`<div class="rows">
      ${e.map((t,s)=>j`<div class="row">
          <span class="dot" style="background: ${this._color(t,s,e.length)}"></span>
          <span class="label" title=${t.label}>${t.label}</span>
          <span class="row-value">${this._renderValue(t.value,"")}</span>
        </div>`)}
    </div>`}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const t=this._displayItems(),s=t.length<=1,i=t[0]||{label:"",value:null,history:[]},n=this._color(i,0,t.length),r=e.thresholds?.length?`--value-color: ${n}`:"",l=e.sparkline&&t.some(e=>e.history.length>1);return j`
      <ha-card>
        <div class="stat-container">
          ${e.icon?j`<div class="icon-container" style="--icon-color: ${n}">
                <ha-icon .icon=${e.icon}></ha-icon>
              </div>`:K}
          <div class="info-container">
            ${e.name?j`<div class="name">${e.name}</div>`:K}
            ${s?j`<div class="value-container" style=${r}>${this._renderValue(i.value)}</div>`:K}
          </div>
        </div>
        ${s?K:this._renderRows(t)}
        ${l?j`<prometheus-sparkline
              .series=${t.map((e,s)=>({values:e.history,color:this._color(e,s,t.length)}))}
              .fill=${!1!==e.sparkline_fill}
              .lineWidth=${e.line_width??2}
              .height=${40}
            ></prometheus-sparkline>`:K}
      </ha-card>
    `}getCardSize(){return 2+Math.min(4,Math.max(0,this._displayItems().length-1))}};e([ge()],St.prototype,"_items",void 0),e([ge()],St.prototype,"_loaded",void 0),St=e([de("prometheus-stat-card")],St);const Mt=o`
  ha-card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .name {
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 500;
  }
  .gauges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--gauge-min, 120px), 1fr));
    gap: 12px 16px;
    justify-items: center;
  }
  .gauge {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 250px;
    min-width: 0;
  }
  .gauge-container {
    position: relative;
    width: 100%;
    aspect-ratio: 100 / 60;
  }
  .gauge-svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .arc-bg {
    stroke: var(--divider-color, #e0e0e0);
  }
  .arc-fg {
    transition: stroke-dashoffset 0.5s ease-in-out, stroke 0.5s ease-in-out;
  }
  .value-container {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: baseline;
    gap: 2px;
    white-space: nowrap;
  }
  .value {
    font-size: var(--gauge-font, 28px);
    font-weight: 400;
    color: var(--primary-text-color);
    line-height: 1;
  }
  .unit {
    font-size: calc(var(--gauge-font, 28px) * 0.5);
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
    font-size: 11px;
    color: var(--secondary-text-color);
  }
  .series-label {
    margin-top: 4px;
    font-size: 13px;
    color: var(--secondary-text-color);
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;let Ct=class extends kt{_defaults(){return{min:0,max:100,arc_width:8,refresh_interval:30,show_labels:!0,palette:"classic",color_mode:"thresholds"}}_sections(){return[{schema:[dt,pt,{name:"",type:"grid",schema:[_t,{name:"show_labels",selector:{boolean:{}}}]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[yt(this.hass),vt(this.hass)]}]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},gt,mt,{name:"arc_width",selector:{number:{min:2,max:20,step:1,mode:"slider"}}}]}]},{title:"section_advanced",schema:[ft]}]}_renderExtra(){return j`${this._renderThresholds()}`}};Ct=e([de("prometheus-gauge-card-editor")],Ct);const Pt=40*Math.PI;let Tt=class extends we{constructor(){super(...arguments),this._items=[],this._loaded=!1}static get styles(){return[ve,Mt]}static getStubConfig(){return{type:"custom:prometheus-gauge-card",name:"Prometheus targets up",query:"avg(up) * 100",unit:"percent",min:0,max:100,decimals:0,thresholds:[{value:0,color:"#F2495C"},{value:50,color:"#FADE2A"},{value:90,color:"#73BF69"}]}}static getConfigElement(){return document.createElement("prometheus-gauge-card-editor")}async _fetchData(){try{this._loading=!0;const e=await this._client.instantQuery(this._config.query);this._items=et(e,this._config.legend_format).map(e=>({...e,label:Ve(e.metric,this._config.legend_format)})),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_color(e,t,s){const i=this._config;return"series"===i.color_mode||!i.thresholds?.length&&s>1?nt(t,s,i.palette):Je(e??i.min??0,i.thresholds||[],nt(t,s,i.palette))}_renderGauge(e,t,s){const i=this._config,n=i.min??0,r=i.max??100,l=i.arc_width??8,o=e.value??n,a=Math.min(Math.max(o,n),r),c=r>n?(a-n)/(r-n):0,h=this._color(e.value,t,s),u=Ue(e.value,i.unit,i.decimals),d=Ue(n,i.unit,0),p=Ue(r,i.unit,0),f=s>1&&!1!==i.show_labels;return j`
      <div class="gauge">
        <div class="gauge-container">
          <svg viewBox="0 0 100 60" class="gauge-svg">
            <path class="arc-bg" d="M 10 50 A 40 40 0 0 1 90 50" fill="none"
              stroke-width="${l}" stroke-linecap="round"></path>
            <path class="arc-fg" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="${h}"
              stroke-width="${l}" stroke-linecap="round"
              stroke-dasharray="${Pt}" stroke-dashoffset="${Pt*(1-c)}"></path>
          </svg>
          <div class="value-container">
            <span class="value">${u.prefix}${u.text}</span>
            ${u.suffix.trim()?j`<span class="unit">${u.suffix.trim()}</span>`:K}
          </div>
          <div class="labels">
            <span>${d.prefix}${d.text}</span>
            <span>${p.prefix}${p.text}${p.suffix}</span>
          </div>
        </div>
        ${f?j`<div class="series-label" title=${e.label}>${e.label}</div>`:K}
      </div>
    `}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const t=this._items.length?this._items:[{metric:{},label:"",value:null}],s=t.length>1?"--gauge-min: 110px; --gauge-font: 20px":"--gauge-min: 180px";return j`
      <ha-card>
        ${e.name?j`<div class="name">${e.name}</div>`:K}
        ${this._loaded&&!this._items.length?j`<div class="placeholder-state">${xe("no_data",this._hass)}</div>`:j`<div class="gauges" style=${s}>
              ${t.map((e,s)=>this._renderGauge(e,s,t.length))}
            </div>`}
      </ha-card>
    `}getCardSize(){return this._items.length>2?5:3}};e([ge()],Tt.prototype,"_items",void 0),e([ge()],Tt.prototype,"_loaded",void 0),Tt=e([de("prometheus-gauge-card")],Tt);const Bt="u-off",zt="u-label",Dt="width",Ft="height",Lt="top",Ot="bottom",Ht="left",qt="right",Nt="#000",Rt=Nt+"0",It="mousemove",Ut="mousedown",Wt="mouseup",jt="mouseenter",Vt="mouseleave",Gt="dblclick",Kt="change",Yt="dppxchange",Qt="--",Jt="undefined"!=typeof window,Zt=Jt?document:null,Xt=Jt?window:null,es=Jt?navigator:null;let ts,ss;function is(e,t){if(null!=t){let s=e.classList;!s.contains(t)&&s.add(t)}}function ns(e,t){let s=e.classList;s.contains(t)&&s.remove(t)}function rs(e,t,s){e.style[t]=s+"px"}function ls(e,t,s,i){let n=Zt.createElement(e);return null!=t&&is(n,t),null!=s&&s.insertBefore(n,i),n}function os(e,t){return ls("div",e,t)}const as=new WeakMap;function cs(e,t,s,i,n){let r="translate("+t+"px,"+s+"px)";r!=as.get(e)&&(e.style.transform=r,as.set(e,r),t<0||s<0||t>i||s>n?is(e,Bt):ns(e,Bt))}const hs=new WeakMap;function us(e,t,s){let i=t+s;i!=hs.get(e)&&(hs.set(e,i),e.style.background=t,e.style.borderColor=s)}const ds=new WeakMap;function ps(e,t,s,i){let n=t+""+s;n!=ds.get(e)&&(ds.set(e,n),e.style.height=s+"px",e.style.width=t+"px",e.style.marginLeft=i?-t/2+"px":0,e.style.marginTop=i?-s/2+"px":0)}const fs={passive:!0},ms={...fs,capture:!0};function gs(e,t,s,i){t.addEventListener(e,s,i?ms:fs)}function _s(e,t,s,i){t.removeEventListener(e,s,fs)}function vs(e,t,s,i){let n;s=s||0;let r=(i=i||t.length-1)<=2147483647;for(;i-s>1;)n=r?s+i>>1:Os((s+i)/2),t[n]<e?s=n:i=n;return e-t[s]<=t[i]-e?s:i}function ys(e){return(t,s,i)=>{let n=-1,r=-1;for(let r=s;r<=i;r++)if(e(t[r])){n=r;break}for(let n=i;n>=s;n--)if(e(t[n])){r=n;break}return[n,r]}}Jt&&function e(){let t=devicePixelRatio;ts!=t&&(ts=t,ss&&_s(Kt,ss,e),ss=matchMedia(`(min-resolution: ${ts-.001}dppx) and (max-resolution: ${ts+.001}dppx)`),gs(Kt,ss,e),Xt.dispatchEvent(new CustomEvent(Yt)))}();const bs=e=>null!=e,xs=e=>null!=e&&e>0,ws=ys(bs),$s=ys(xs);function ks(e,t,s,i){let n=Us(e),r=Us(t);e==t&&(-1==n?(e*=s,t/=s):(e/=s,t*=s));let l=10==s?Ws:js,o=1==r?qs:Os,a=(1==n?Os:qs)(l(Ls(e))),c=o(l(Ls(t))),h=Is(s,a),u=Is(s,c);return 10==s&&(a<0&&(h=ai(h,-a)),c<0&&(u=ai(u,-c))),i||2==s?(e=h*n,t=u*r):(e=oi(e,h),t=li(t,u)),[e,t]}function As(e,t,s,i){let n=ks(e,t,s,i);return 0==e&&(n[0]=0),0==t&&(n[1]=0),n}const Es={mode:3,pad:.1},Ss={pad:0,soft:null,mode:0},Ms={min:Ss,max:Ss};function Cs(e,t,s,i){return vi(s)?Ts(e,t,s):(Ss.pad=s,Ss.soft=i?0:null,Ss.mode=i?3:0,Ts(e,t,Ms))}function Ps(e,t){return null==e?t:e}function Ts(e,t,s){let i=s.min,n=s.max,r=Ps(i.pad,0),l=Ps(n.pad,0),o=Ps(i.hard,-Gs),a=Ps(n.hard,Gs),c=Ps(i.soft,Gs),h=Ps(n.soft,-Gs),u=Ps(i.mode,0),d=Ps(n.mode,0),p=t-e,f=Ws(p),m=Rs(Ls(e),Ls(t)),g=Ws(m),_=Ls(g-f);(p<1e-24||_>10)&&(p=0,0!=e&&0!=t||(p=1e-24,2==u&&c!=Gs&&(r=0),2==d&&h!=-Gs&&(l=0)));let v=p||m||1e3,y=Ws(v),b=Is(10,Os(y)),x=ai(oi(e-v*(0==p?0==e?.1:1:r),b/10),24),w=e>=c&&(1==u||3==u&&x<=c||2==u&&x>=c)?c:Gs,$=Rs(o,x<w&&e>=w?w:Ns(w,x)),k=ai(li(t+v*(0==p?0==t?.1:1:l),b/10),24),A=t<=h&&(1==d||3==d&&k>=h||2==d&&k<=h)?h:-Gs,E=Ns(a,k>A&&t<=A?A:Rs(A,k));return $==E&&0==$&&(E=100),[$,E]}const Bs=new Intl.NumberFormat(Jt?es.language:"en-US"),zs=e=>Bs.format(e),Ds=Math,Fs=Ds.PI,Ls=Ds.abs,Os=Ds.floor,Hs=Ds.round,qs=Ds.ceil,Ns=Ds.min,Rs=Ds.max,Is=Ds.pow,Us=Ds.sign,Ws=Ds.log10,js=Ds.log2,Vs=(e,t=1)=>Ds.asinh(e/t),Gs=1/0;function Ks(e){return 1+(0|Ws((e^e>>31)-(e>>31)))}function Ys(e,t,s){return Ns(Rs(e,t),s)}function Qs(e){return"function"==typeof e}function Js(e){return Qs(e)?e:()=>e}const Zs=e=>e,Xs=(e,t)=>t,ei=e=>null,ti=e=>!0,si=(e,t)=>e==t,ii=/\.\d*?(?=9{6,}|0{6,})/gm,ni=e=>{if(gi(e)||ci.has(e))return e;const t=`${e}`,s=t.match(ii);if(null==s)return e;let i=s[0].length-1;if(-1!=t.indexOf("e-")){let[e,s]=t.split("e");return+`${ni(e)}e${s}`}return ai(e,i)};function ri(e,t){return ni(ai(ni(e/t))*t)}function li(e,t){return ni(qs(ni(e/t))*t)}function oi(e,t){return ni(Os(ni(e/t))*t)}function ai(e,t=0){if(gi(e))return e;let s=10**t,i=e*s*(1+Number.EPSILON);return Hs(i)/s}const ci=new Map;function hi(e){return((""+e).split(".")[1]||"").length}function ui(e,t,s,i){let n=[],r=i.map(hi);for(let l=t;l<s;l++){let t=Ls(l),s=ai(Is(e,l),t);for(let o=0;o<i.length;o++){let a=10==e?+`${i[o]}e${l}`:i[o]*s,c=(l>=0?0:t)+(l>=r[o]?0:r[o]),h=10==e?a:ai(a,c);n.push(h),ci.set(h,c)}}return n}const di={},pi=[],fi=[null,null],mi=Array.isArray,gi=Number.isInteger;function _i(e){return"string"==typeof e}function vi(e){let t=!1;if(null!=e){let s=e.constructor;t=null==s||s==Object}return t}function yi(e){return null!=e&&"object"==typeof e}const bi=Object.getPrototypeOf(Uint8Array),xi="__proto__";function wi(e,t=vi){let s;if(mi(e)){let i=e.find(e=>null!=e);if(mi(i)||t(i)){s=Array(e.length);for(let i=0;i<e.length;i++)s[i]=wi(e[i],t)}else s=e.slice()}else if(e instanceof bi)s=e.slice();else if(t(e)){s={};for(let i in e)i!=xi&&(s[i]=wi(e[i],t))}else s=e;return s}function $i(e){let t=arguments;for(let s=1;s<t.length;s++){let i=t[s];for(let t in i)t!=xi&&(vi(e[t])?$i(e[t],wi(i[t])):e[t]=wi(i[t]))}return e}function ki(e,t,s){for(let i,n=0,r=-1;n<t.length;n++){let l=t[n];if(l>r){for(i=l-1;i>=0&&null==e[i];)e[i--]=null;for(i=l+1;i<s&&null==e[i];)e[r=i++]=null}}}const Ai="undefined"==typeof queueMicrotask?e=>Promise.resolve().then(e):queueMicrotask;const Ei=["January","February","March","April","May","June","July","August","September","October","November","December"],Si=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function Mi(e){return e.slice(0,3)}const Ci=Si.map(Mi),Pi=Ei.map(Mi),Ti={MMMM:Ei,MMM:Pi,WWWW:Si,WWW:Ci};function Bi(e){return(e<10?"0":"")+e}const zi={YYYY:e=>e.getFullYear(),YY:e=>(e.getFullYear()+"").slice(2),MMMM:(e,t)=>t.MMMM[e.getMonth()],MMM:(e,t)=>t.MMM[e.getMonth()],MM:e=>Bi(e.getMonth()+1),M:e=>e.getMonth()+1,DD:e=>Bi(e.getDate()),D:e=>e.getDate(),WWWW:(e,t)=>t.WWWW[e.getDay()],WWW:(e,t)=>t.WWW[e.getDay()],HH:e=>Bi(e.getHours()),H:e=>e.getHours(),h:e=>{let t=e.getHours();return 0==t?12:t>12?t-12:t},AA:e=>e.getHours()>=12?"PM":"AM",aa:e=>e.getHours()>=12?"pm":"am",a:e=>e.getHours()>=12?"p":"a",mm:e=>Bi(e.getMinutes()),m:e=>e.getMinutes(),ss:e=>Bi(e.getSeconds()),s:e=>e.getSeconds(),fff:e=>{return((t=e.getMilliseconds())<10?"00":t<100?"0":"")+t;var t}};function Di(e,t){t=t||Ti;let s,i=[],n=/\{([a-z]+)\}|[^{]+/gi;for(;s=n.exec(e);)i.push("{"==s[0][0]?zi[s[1]]:s[0]);return e=>{let s="";for(let n=0;n<i.length;n++)s+="string"==typeof i[n]?i[n]:i[n](e,t);return s}}const Fi=(new Intl.DateTimeFormat).resolvedOptions().timeZone;const Li=e=>e%1==0,Oi=[1,2,2.5,5],Hi=ui(10,-32,0,Oi),qi=ui(10,0,32,Oi),Ni=qi.filter(Li),Ri=Hi.concat(qi),Ii="{YYYY}",Ui="\n"+Ii,Wi="{M}/{D}",ji="\n"+Wi,Vi=ji+"/{YY}",Gi="{aa}",Ki="{h}:{mm}"+Gi,Yi="\n"+Ki,Qi=":{ss}",Ji=null;function Zi(e){let t=1e3*e,s=60*t,i=60*s,n=24*i,r=30*n,l=365*n;return[(1==e?ui(10,0,3,Oi).filter(Li):ui(10,-3,0,Oi)).concat([t,5*t,10*t,15*t,30*t,s,5*s,10*s,15*s,30*s,i,2*i,3*i,4*i,6*i,8*i,12*i,n,2*n,3*n,4*n,5*n,6*n,7*n,8*n,9*n,10*n,15*n,r,2*r,3*r,4*r,6*r,l,2*l,5*l,10*l,25*l,50*l,100*l]),[[l,Ii,Ji,Ji,Ji,Ji,Ji,Ji,1],[28*n,"{MMM}",Ui,Ji,Ji,Ji,Ji,Ji,1],[n,Wi,Ui,Ji,Ji,Ji,Ji,Ji,1],[i,"{h}"+Gi,Vi,Ji,ji,Ji,Ji,Ji,1],[s,Ki,Vi,Ji,ji,Ji,Ji,Ji,1],[t,Qi,Vi+" "+Ki,Ji,ji+" "+Ki,Ji,Yi,Ji,1],[e,Qi+".{fff}",Vi+" "+Ki,Ji,ji+" "+Ki,Ji,Yi,Ji,1]],function(t){return(o,a,c,h,u,d)=>{let p=[],f=u>=l,m=u>=r&&u<l,g=t(c),_=ai(g*e,3),v=an(g.getFullYear(),f?0:g.getMonth(),m||f?1:g.getDate()),y=ai(v*e,3);if(m||f){let s=m?u/r:0,i=f?u/l:0,n=_==y?_:ai(an(v.getFullYear()+i,v.getMonth()+s,1)*e,3),o=new Date(Hs(n/e)),a=o.getFullYear(),c=o.getMonth();for(let r=0;n<=h;r++){let l=an(a+i*r,c+s*r,1),o=l-t(ai(l*e,3));n=ai((+l+o)*e,3),n<=h&&p.push(n)}}else{let r=u>=n?n:u,l=y+(Os(c)-Os(_))+li(_-y,r);p.push(l);let f=t(l),m=f.getHours()+f.getMinutes()/s+f.getSeconds()/i,g=u/i,v=d/o.axes[a]._space;for(;l=ai(l+u,1==e?0:3),!(l>h);)if(g>1){let e=Os(ai(m+g,6))%24,s=t(l).getHours()-e;s>1&&(s=-1),l-=s*i,m=(m+g)%24,ai((l-p[p.length-1])/u,3)*v>=.7&&p.push(l)}else p.push(l)}return p}}]}const[Xi,en,tn]=Zi(1),[sn,nn,rn]=Zi(.001);function ln(e,t){return e.map(e=>e.map((s,i)=>0==i||8==i||null==s?s:t(1==i||0==e[8]?s:e[1]+s)))}function on(e,t){return(s,i,n,r,l)=>{let o,a,c,h,u,d,p=t.find(e=>l>=e[0])||t[t.length-1];return i.map(t=>{let s=e(t),i=s.getFullYear(),n=s.getMonth(),r=s.getDate(),l=s.getHours(),f=s.getMinutes(),m=s.getSeconds(),g=i!=o&&p[2]||n!=a&&p[3]||r!=c&&p[4]||l!=h&&p[5]||f!=u&&p[6]||m!=d&&p[7]||p[1];return o=i,a=n,c=r,h=l,u=f,d=m,g(s)})}}function an(e,t,s){return new Date(e,t,s)}function cn(e,t){return t(e)}ui(2,-53,53,[1]);function hn(e,t){return(s,i,n,r)=>null==r?Qt:t(e(i))}const un={show:!0,live:!0,isolate:!1,mount:()=>{},markers:{show:!0,width:2,stroke:function(e,t){let s=e.series[t];return s.width?s.stroke(e,t):s.points.width?s.points.stroke(e,t):null},fill:function(e,t){return e.series[t].fill(e,t)},dash:"solid"},idx:null,idxs:null,values:[]};const dn=[0,0];function pn(e,t,s,i=!0){return e=>{0==e.button&&(!i||e.target==t)&&s(e)}}function fn(e,t,s,i=!0){return e=>{(!i||e.target==t)&&s(e)}}const mn={show:!0,x:!0,y:!0,lock:!1,move:function(e,t,s){return dn[0]=t,dn[1]=s,dn},points:{one:!1,show:function(e,t){let s=e.cursor.points,i=os(),n=s.size(e,t);rs(i,Dt,n),rs(i,Ft,n);let r=n/-2;rs(i,"marginLeft",r),rs(i,"marginTop",r);let l=s.width(e,t,n);return l&&rs(i,"borderWidth",l),i},size:function(e,t){return e.series[t].points.size},width:0,stroke:function(e,t){let s=e.series[t].points;return s._stroke||s._fill},fill:function(e,t){let s=e.series[t].points;return s._fill||s._stroke}},bind:{mousedown:pn,mouseup:pn,click:pn,dblclick:pn,mousemove:fn,mouseleave:fn,mouseenter:fn},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(e,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(e,t,s,i,n)=>i-n,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},gn={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},_n=$i({},gn,{filter:Xs}),vn=$i({},_n,{size:10}),yn=$i({},gn,{show:!1}),bn='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',xn="bold "+bn,wn={show:!0,scale:"x",stroke:Nt,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:xn,side:2,grid:_n,ticks:vn,border:yn,font:bn,lineGap:1.5,rotate:0},$n={show:!0,scale:"x",auto:!1,sorted:1,min:Gs,max:-Gs,idxs:[]};function kn(e,t,s,i,n){return t.map(e=>null==e?"":zs(e))}function An(e,t,s,i,n,r,l){let o=[],a=ci.get(n)||0;for(let e=s=l?s:ai(li(s,n),a);e<=i;e=ai(e+n,a))o.push(Object.is(e,-0)?0:e);return o}function En(e,t,s,i,n,r,l){const o=[],a=e.scales[e.axes[t].scale].log,c=Os((10==a?Ws:js)(s));n=Is(a,c),10==a&&(n=Ri[vs(n,Ri)]);let h=s,u=n*a;10==a&&(u=Ri[vs(u,Ri)]);do{o.push(h),h+=n,10!=a||ci.has(h)||(h=ai(h,ci.get(n))),h>=u&&(u=(n=h)*a,10==a&&(u=Ri[vs(u,Ri)]))}while(h<=i);return o}function Sn(e,t,s,i,n,r,l){let o=e.scales[e.axes[t].scale].asinh,a=i>o?En(e,t,Rs(o,s),i,n):[o],c=i>=0&&s<=0?[0]:[];return(s<-o?En(e,t,Rs(o,-i),-s,n):[o]).reverse().map(e=>-e).concat(c,a)}const Mn=/./,Cn=/[12357]/,Pn=/[125]/,Tn=/1/,Bn=(e,t,s,i)=>e.map((e,n)=>4==t&&0==e||n%i==0&&s.test(e.toExponential()[e<0?1:0])?e:null);function zn(e,t,s,i,n){let r=e.axes[s],l=r.scale,o=e.scales[l],a=e.valToPos,c=r._space,h=a(10,l),u=a(9,l)-h>=c?Mn:a(7,l)-h>=c?Cn:a(5,l)-h>=c?Pn:Tn;if(u==Tn){let e=Ls(a(1,l)-h);if(e<c)return Bn(t.slice().reverse(),o.distr,u,qs(c/e)).reverse()}return Bn(t,o.distr,u,1)}function Dn(e,t,s,i,n){let r=e.axes[s],l=r.scale,o=r._space,a=e.valToPos,c=Ls(a(1,l)-a(2,l));return c<o?Bn(t.slice().reverse(),3,Mn,qs(o/c)).reverse():t}function Fn(e,t,s,i){return null==i?Qt:null==t?"":zs(t)}const Ln={show:!0,scale:"y",stroke:Nt,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:xn,side:3,grid:_n,ticks:vn,border:yn,font:bn,lineGap:1.5,rotate:0};const On={scale:null,auto:!0,sorted:0,min:Gs,max:-Gs},Hn=(e,t,s,i,n)=>n,qn={show:!0,auto:!0,sorted:0,gaps:Hn,alpha:1,facets:[$i({},On,{scale:"x"}),$i({},On,{scale:"y"})]},Nn={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Hn,alpha:1,points:{show:function(e,t){let{scale:s,idxs:i}=e.series[0],n=e._data[0],r=e.valToPos(n[i[0]],s,!0),l=e.valToPos(n[i[1]],s,!0),o=Ls(l-r)/(e.series[t].points.space*ts);return i[1]-i[0]<=o},filter:null},values:null,min:Gs,max:-Gs,idxs:[],path:null,clip:null};function Rn(e,t,s,i,n){return s/10}const In={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},Un=$i({},In,{time:!1,ori:1}),Wn={};function jn(e,t){let s=Wn[e];return s||(s={key:e,plots:[],sub(e){s.plots.push(e)},unsub(e){s.plots=s.plots.filter(t=>t!=e)},pub(e,t,i,n,r,l,o){for(let a=0;a<s.plots.length;a++)s.plots[a]!=t&&s.plots[a].pub(e,t,i,n,r,l,o)}},null!=e&&(Wn[e]=s)),s}function Vn(e,t,s){const i=e.mode,n=e.series[t],r=2==i?e._data[t]:e._data,l=e.scales,o=e.bbox;let a=r[0],c=2==i?r[1]:r[t],h=2==i?l[n.facets[0].scale]:l[e.series[0].scale],u=2==i?l[n.facets[1].scale]:l[n.scale],d=o.left,p=o.top,f=o.width,m=o.height,g=e.valToPosH,_=e.valToPosV;return 0==h.ori?s(n,a,c,h,u,g,_,d,p,f,m,er,sr,nr,lr,ar):s(n,a,c,h,u,_,g,p,d,m,f,tr,ir,rr,or,cr)}function Gn(e,t){let s=0,i=0,n=Ps(e.bands,pi);for(let e=0;e<n.length;e++){let r=n[e];r.series[0]==t?s=r.dir:r.series[1]==t&&(1==r.dir?i|=1:i|=2)}return[s,1==i?-1:2==i?1:3==i?2:0]}function Kn(e,t,s,i,n){let r=e.mode,l=e.series[t],o=2==r?l.facets[1].scale:l.scale,a=e.scales[o];return-1==n?a.min:1==n?a.max:3==a.distr?1==a.dir?a.min:a.max:0}function Yn(e,t,s,i,n,r){return Vn(e,t,(e,t,l,o,a,c,h,u,d,p,f)=>{let m=e.pxRound;const g=o.dir*(0==o.ori?1:-1),_=0==o.ori?sr:ir;let v,y;1==g?(v=s,y=i):(v=i,y=s);let b=m(c(t[v],o,p,u)),x=m(h(l[v],a,f,d)),w=m(c(t[y],o,p,u)),$=m(h(1==r?a.max:a.min,a,f,d)),k=new Path2D(n);return _(k,w,$),_(k,b,$),_(k,b,x),k})}function Qn(e,t,s,i,n,r){let l=null;if(e.length>0){l=new Path2D;const o=0==t?nr:rr;let a=s;for(let t=0;t<e.length;t++){let s=e[t];if(s[1]>s[0]){let e=s[0]-a;e>0&&o(l,a,i,e,i+r),a=s[1]}}let c=s+n-a,h=10;c>0&&o(l,a,i-h/2,c,i+r+h)}return l}function Jn(e,t,s,i,n,r,l){let o=[],a=e.length;for(let c=1==n?s:i;c>=s&&c<=i;c+=n){if(null===t[c]){let h=c,u=c;if(1==n)for(;++c<=i&&null===t[c];)u=c;else for(;--c>=s&&null===t[c];)u=c;let d=r(e[h]),p=u==h?d:r(e[u]),f=h-n;d=l<=0&&f>=0&&f<a?r(e[f]):d;let m=u+n;p=l>=0&&m>=0&&m<a?r(e[m]):p,p>=d&&o.push([d,p])}}return o}function Zn(e){return 0==e?Zs:1==e?Hs:t=>ri(t,e)}function Xn(e){let t=0==e?er:tr,s=0==e?(e,t,s,i,n,r)=>{e.arcTo(t,s,i,n,r)}:(e,t,s,i,n,r)=>{e.arcTo(s,t,n,i,r)},i=0==e?(e,t,s,i,n)=>{e.rect(t,s,i,n)}:(e,t,s,i,n)=>{e.rect(s,t,n,i)};return(e,n,r,l,o,a=0,c=0)=>{0==a&&0==c?i(e,n,r,l,o):(a=Ns(a,l/2,o/2),c=Ns(c,l/2,o/2),t(e,n+a,r),s(e,n+l,r,n+l,r+o,a),s(e,n+l,r+o,n,r+o,c),s(e,n,r+o,n,r,c),s(e,n,r,n+l,r,a),e.closePath())}}const er=(e,t,s)=>{e.moveTo(t,s)},tr=(e,t,s)=>{e.moveTo(s,t)},sr=(e,t,s)=>{e.lineTo(t,s)},ir=(e,t,s)=>{e.lineTo(s,t)},nr=Xn(0),rr=Xn(1),lr=(e,t,s,i,n,r)=>{e.arc(t,s,i,n,r)},or=(e,t,s,i,n,r)=>{e.arc(s,t,i,n,r)},ar=(e,t,s,i,n,r,l)=>{e.bezierCurveTo(t,s,i,n,r,l)},cr=(e,t,s,i,n,r,l)=>{e.bezierCurveTo(s,t,n,i,l,r)};function hr(e){return(e,t,s,i,n)=>Vn(e,t,(t,r,l,o,a,c,h,u,d,p,f)=>{let m,g,{pxRound:_,points:v}=t;0==o.ori?(m=er,g=lr):(m=tr,g=or);const y=ai(v.width*ts,3);let b=(v.size-v.width)/2*ts,x=ai(2*b,3),w=new Path2D,$=new Path2D,{left:k,top:A,width:E,height:S}=e.bbox;nr($,k-x,A-x,E+2*x,S+2*x);const M=e=>{if(null!=l[e]){let t=_(c(r[e],o,p,u)),s=_(h(l[e],a,f,d));m(w,t+b,s),g(w,t,s,b,0,2*Fs)}};if(n)n.forEach(M);else for(let e=s;e<=i;e++)M(e);return{stroke:y>0?w:null,fill:w,clip:$,flags:3}})}function ur(e){return(t,s,i,n,r,l)=>{i!=n&&(r!=i&&l!=i&&e(t,s,i),r!=n&&l!=n&&e(t,s,n),e(t,s,l))}}const dr=ur(sr),pr=ur(ir);function fr(e){const t=Ps(e?.alignGaps,0);return(e,s,i,n)=>Vn(e,s,(r,l,o,a,c,h,u,d,p,f,m)=>{[i,n]=ws(o,i,n);let g,_,v=r.pxRound,y=e=>v(h(e,a,f,d)),b=e=>v(u(e,c,m,p));0==a.ori?(g=sr,_=dr):(g=ir,_=pr);const x=a.dir*(0==a.ori?1:-1),w={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},$=w.stroke;let k=!1;if(n-i>=4*f){let t,s,r,c=t=>e.posToVal(t,a.key,!0),h=null,u=null,d=y(l[1==x?i:n]),p=y(l[i]),f=y(l[n]),m=c(1==x?p+1:f-1);for(let e=1==x?i:n;e>=i&&e<=n;e+=x){let i=l[e],n=(1==x?i<m:i>m)?d:y(i),r=o[e];n==d?null!=r?(s=r,null==h?(g($,n,b(s)),t=h=u=s):s<h?h=s:s>u&&(u=s)):null===r&&(k=!0):(null!=h&&_($,d,b(h),b(u),b(t),b(s)),null!=r?(s=r,g($,n,b(s)),h=u=t=s):(h=u=null,null===r&&(k=!0)),d=n,m=c(d+x))}null!=h&&h!=u&&r!=d&&_($,d,b(h),b(u),b(t),b(s))}else for(let e=1==x?i:n;e>=i&&e<=n;e+=x){let t=o[e];null===t?k=!0:null!=t&&g($,y(l[e]),b(t))}let[A,E]=Gn(e,s);if(null!=r.fill||0!=A){let t=w.fill=new Path2D($),o=b(r.fillTo(e,s,r.min,r.max,A)),a=y(l[i]),c=y(l[n]);-1==x&&([c,a]=[a,c]),g(t,c,o),g(t,a,o)}if(!r.spanGaps){let c=[];k&&c.push(...Jn(l,o,i,n,x,y,t)),w.gaps=c=r.gaps(e,s,i,n,c),w.clip=Qn(c,a.ori,d,p,f,m)}return 0!=E&&(w.band=2==E?[Yn(e,s,i,n,$,-1),Yn(e,s,i,n,$,1)]:Yn(e,s,i,n,$,E)),w})}function mr(e,t,s,i,n,r,l=Gs){if(e.length>1){let o=null;for(let a=0,c=1/0;a<e.length;a++)if(void 0!==t[a]){if(null!=o){let t=Ls(e[a]-e[o]);t<c&&(c=t,l=Ls(s(e[a],i,n,r)-s(e[o],i,n,r)))}o=a}}return l}function gr(e,t,s,i,n,r){const l=e.length;if(l<2)return null;const o=new Path2D;if(s(o,e[0],t[0]),2==l)i(o,e[1],t[1]);else{let s=Array(l),i=Array(l-1),r=Array(l-1),a=Array(l-1);for(let s=0;s<l-1;s++)r[s]=t[s+1]-t[s],a[s]=e[s+1]-e[s],i[s]=r[s]/a[s];s[0]=i[0];for(let e=1;e<l-1;e++)0===i[e]||0===i[e-1]||i[e-1]>0!=i[e]>0?s[e]=0:(s[e]=3*(a[e-1]+a[e])/((2*a[e]+a[e-1])/i[e-1]+(a[e]+2*a[e-1])/i[e]),isFinite(s[e])||(s[e]=0));s[l-1]=i[l-2];for(let i=0;i<l-1;i++)n(o,e[i]+a[i]/3,t[i]+s[i]*a[i]/3,e[i+1]-a[i]/3,t[i+1]-s[i+1]*a[i]/3,e[i+1],t[i+1])}return o}const _r=new Set;function vr(){for(let e of _r)e.syncRect(!0)}Jt&&(gs("resize",Xt,vr),gs("scroll",Xt,vr,!0),gs(Yt,Xt,()=>{zr.pxRatio=ts}));const yr=fr(),br=hr();function xr(e,t,s,i){return(i?[e[0],e[1]].concat(e.slice(2)):[e[0]].concat(e.slice(1))).map((e,i)=>wr(e,i,t,s))}function wr(e,t,s,i){return $i({},0==t?s:i,e)}function $r(e,t,s){return null==t?fi:[t,s]}const kr=$r;function Ar(e,t,s){return null==t?fi:Cs(t,s,.1,!0)}function Er(e,t,s,i){return null==t?fi:ks(t,s,e.scales[i].log,!1)}const Sr=Er;function Mr(e,t,s,i){return null==t?fi:As(t,s,e.scales[i].log,!1)}const Cr=Mr;function Pr(e,t,s,i,n){let r=Rs(Ks(e),Ks(t)),l=t-e,o=vs(n/i*l,s);do{let e=s[o],t=i*e/l;if(t>=n&&r+(e<5?ci.get(e):0)<=17)return[e,t]}while(++o<s.length);return[0,0]}function Tr(e){let t,s;return[e=e.replace(/(\d+)px/,(e,i)=>(t=Hs((s=+i)*ts))+"px"),t,s]}function Br(e){e.show&&[e.font,e.labelFont].forEach(e=>{let t=ai(e[2]*ts,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function zr(e,t,s){const i={mode:Ps(e.mode,1)},n=i.mode;function r(e,t,s,i){let n=t.valToPct(e);return i+s*(-1==t.dir?1-n:n)}function l(e,t,s,i){let n=t.valToPct(e);return i+s*(-1==t.dir?n:1-n)}function o(e,t,s,i){return 0==t.ori?r(e,t,s,i):l(e,t,s,i)}i.valToPosH=r,i.valToPosV=l;let a=!1;i.status=0;const c=i.root=os("uplot");if(null!=e.id&&(c.id=e.id),is(c,e.class),e.title){os("u-title",c).textContent=e.title}const h=ls("canvas"),u=i.ctx=h.getContext("2d"),d=os("u-wrap",c);gs("click",d,e=>{if(e.target===f){(Mt!=kt||Ct!=At)&&hs.click(i,e)}},!0);const p=i.under=os("u-under",d);d.appendChild(h);const f=i.over=os("u-over",d),m=+Ps((e=wi(e)).pxAlign,1),g=Zn(m);(e.plugins||[]).forEach(t=>{t.opts&&(e=t.opts(i,e)||e)});const _=e.ms||.001,v=i.series=1==n?xr(e.series||[],$n,Nn,!1):function(e,t){return e.map((e,s)=>0==s?{}:$i({},t,e))}(e.series||[null],qn),y=i.axes=xr(e.axes||[],wn,Ln,!0),b=i.scales={},x=i.bands=e.bands||[];x.forEach(e=>{e.fill=Js(e.fill||null),e.dir=Ps(e.dir,-1)});const w=2==n?v[1].facets[0].scale:v[0].scale,$={axes:function(){for(let e=0;e<y.length;e++){let t=y[e];if(!t.show||!t._show)continue;let s,n,r=t.side,l=r%2,a=t.stroke(i,e),c=0==r||3==r?-1:1,[h,d]=t._found;if(null!=t.label){let o=t.labelGap*c,p=Hs((t._lpos+o)*ts);rt(t.labelFont[0],a,"center",2==r?Lt:Ot),u.save(),1==l?(s=n=0,u.translate(p,Hs(fe+ge/2)),u.rotate((3==r?-Fs:Fs)/2)):(s=Hs(pe+me/2),n=p);let f=Qs(t.label)?t.label(i,e,h,d):t.label;u.fillText(f,s,n),u.restore()}if(0==d)continue;let p=b[t.scale],f=0==l?me:ge,m=0==l?pe:fe,_=t._splits,v=2==p.distr?_.map(e=>et[e]):_,x=2==p.distr?et[_[1]]-et[_[0]]:h,w=t.ticks,$=t.border,k=w.show?w.size:0,A=Hs(k*ts),E=Hs((2==t.alignTo?t._size-k-t.gap:t.gap)*ts),S=t._rotate*-Fs/180,M=g(t._pos*ts),C=M+(A+E)*c;n=0==l?C:0,s=1==l?C:0,rt(t.font[0],a,1==t.align?Ht:2==t.align?qt:S>0?Ht:S<0?qt:0==l?"center":3==r?qt:Ht,S||1==l?"middle":2==r?Lt:Ot);let P=t.font[1]*t.lineGap,T=_.map(e=>g(o(e,p,f,m))),B=t._values;for(let e=0;e<B.length;e++){let t=B[e];if(null!=t){0==l?s=T[e]:n=T[e],t=""+t;let i=-1==t.indexOf("\n")?[t]:t.split(/\n/gm);for(let e=0;e<i.length;e++){let t=i[e];S?(u.save(),u.translate(s,n+e*P),u.rotate(S),u.fillText(t,0,0),u.restore()):u.fillText(t,s,n+e*P)}}}w.show&&ft(T,w.filter(i,v,e,d,x),l,r,M,A,ai(w.width*ts,3),w.stroke(i,e),w.dash,w.cap);let z=t.grid;z.show&&ft(T,z.filter(i,v,e,d,x),l,0==l?2:1,0==l?fe:pe,0==l?ge:me,ai(z.width*ts,3),z.stroke(i,e),z.dash,z.cap),$.show&&ft([M],[1],0==l?1:0,0==l?1:2,1==l?fe:pe,1==l?ge:me,ai($.width*ts,3),$.stroke(i,e),$.dash,$.cap)}qi("drawAxes")},series:function(){if(Ne>0){let e=v.some(e=>e._focus)&&Xe!=Me.alpha;e&&(u.globalAlpha=Xe=Me.alpha),v.forEach((e,s)=>{if(s>0&&e.show&&(at(s,!1),at(s,!0),null==e._paths)){let r=Xe;Xe!=e.alpha&&(u.globalAlpha=Xe=e.alpha);let l=2==n?[0,t[s][0].length-1]:function(e){let t=Ys(Re-1,0,Ne-1),s=Ys(Ie+1,0,Ne-1);for(;null==e[t]&&t>0;)t--;for(;null==e[s]&&s<Ne-1;)s++;return[t,s]}(t[s]);e._paths=e.paths(i,s,l[0],l[1]),Xe!=r&&(u.globalAlpha=Xe=r)}}),v.forEach((e,t)=>{if(t>0&&e.show){let s=Xe;Xe!=e.alpha&&(u.globalAlpha=Xe=e.alpha),null!=e._paths&&ct(t,!1);{let s=null!=e._paths?e._paths.gaps:null,n=e.points.show(i,t,Re,Ie,s),r=e.points.filter(i,t,n,s);(n||r)&&(e.points._paths=e.points.paths(i,t,Re,Ie,r),ct(t,!0))}Xe!=s&&(u.globalAlpha=Xe=s),qi("drawSeries",t)}}),e&&(u.globalAlpha=Xe=1)}}},k=(e.drawOrder||["axes","series"]).map(e=>$[e]);function A(e){const t=3==e.distr?t=>Ws(t>0?t:e.clamp(i,t,e.min,e.max,e.key)):4==e.distr?t=>Vs(t,e.asinh):100==e.distr?t=>e.fwd(t):e=>e;return s=>{let i=t(s),{_min:n,_max:r}=e;return(i-n)/(r-n)}}function E(t){let s=b[t];if(null==s){let i=(e.scales||di)[t]||di;if(null!=i.from){E(i.from);let e=$i({},b[i.from],i,{key:t});e.valToPct=A(e),b[t]=e}else{s=b[t]=$i({},t==w?In:Un,i),s.key=t;let e=s.time,r=s.range,l=mi(r);if((t!=w||2==n&&!e)&&(!l||null!=r[0]&&null!=r[1]||(r={min:null==r[0]?Es:{mode:1,hard:r[0],soft:r[0]},max:null==r[1]?Es:{mode:1,hard:r[1],soft:r[1]}},l=!1),!l&&vi(r))){let e=r;r=(t,s,i)=>null==s?fi:Cs(s,i,e)}s.range=Js(r||(e?kr:t==w?3==s.distr?Sr:4==s.distr?Cr:$r:3==s.distr?Er:4==s.distr?Mr:Ar)),s.auto=Js(!l&&s.auto),s.clamp=Js(s.clamp||Rn),s._min=s._max=null,s.valToPct=A(s)}}}E("x"),E("y"),1==n&&v.forEach(e=>{E(e.scale)}),y.forEach(e=>{E(e.scale)});for(let t in e.scales)E(t);const S=b[w],M=S.distr;let C,P;0==S.ori?(is(c,"u-hz"),C=r,P=l):(is(c,"u-vt"),C=l,P=r);const T={};for(let e in b){let t=b[e];null==t.min&&null==t.max||(T[e]={min:t.min,max:t.max},t.min=t.max=null)}const B=e.tzDate||(e=>new Date(Hs(e/_))),z=e.fmtDate||Di,D=1==_?tn(B):rn(B),F=on(B,ln(1==_?en:nn,z)),L=hn(B,cn("{YYYY}-{MM}-{DD} {h}:{mm}{aa}",z)),O=[],H=i.legend=$i({},un,e.legend),q=i.cursor=$i({},mn,{drag:{y:2==n}},e.cursor),N=H.show,R=q.show,I=H.markers;let U,W,j;H.idxs=O,I.width=Js(I.width),I.dash=Js(I.dash),I.stroke=Js(I.stroke),I.fill=Js(I.fill);let V,G=[],K=[],Y=!1,Q={};if(H.live){const e=v[1]?v[1].values:null;Y=null!=e,V=Y?e(i,1,0):{_:0};for(let e in V)Q[e]=Qt}if(N)if(U=ls("table","u-legend",c),j=ls("tbody",null,U),H.mount(i,U),Y){W=ls("thead",null,U,j);let e=ls("tr",null,W);for(var J in ls("th",null,e),V)ls("th",zt,e).textContent=J}else is(U,"u-inline"),H.live&&is(U,"u-live");const Z={show:!0},X={show:!1};const ee=new Map;function te(e,t,s,n=!0){const r=ee.get(t)||{},l=q.bind[e](i,t,s,n);l&&(gs(e,t,r[e]=l),ee.set(t,r))}function se(e,t,s){const i=ee.get(t)||{};for(let s in i)null!=e&&s!=e||(_s(s,t,i[s]),delete i[s]);null==e&&ee.delete(t)}let ie=0,ne=0,re=0,le=0,oe=0,ae=0,ce=oe,he=ae,ue=re,de=le,pe=0,fe=0,me=0,ge=0;i.bbox={};let _e=!1,ve=!1,ye=!1,be=!1,xe=!1,we=!1;function $e(e,t,s){(s||e!=i.width||t!=i.height)&&ke(e,t),_t(!1),ye=!0,ve=!0,Jt()}function ke(e,t){i.width=ie=re=e,i.height=ne=le=t,oe=ae=0,function(){let e=!1,t=!1,s=!1,i=!1;y.forEach((n,r)=>{if(n.show&&n._show){let{side:r,_size:l}=n,o=r%2,a=l+(null!=n.label?n.labelSize:0);a>0&&(o?(re-=a,3==r?(oe+=a,i=!0):s=!0):(le-=a,0==r?(ae+=a,e=!0):t=!0))}}),Le[0]=e,Le[1]=s,Le[2]=t,Le[3]=i,re-=qe[1]+qe[3],oe+=qe[3],le-=qe[2]+qe[0],ae+=qe[0]}(),function(){let e=oe+re,t=ae+le,s=oe,i=ae;function n(n,r){switch(n){case 1:return e+=r,e-r;case 2:return t+=r,t-r;case 3:return s-=r,s+r;case 0:return i-=r,i+r}}y.forEach((e,t)=>{if(e.show&&e._show){let t=e.side;e._pos=n(t,e._size),null!=e.label&&(e._lpos=n(t,e.labelSize))}})}();let s=i.bbox;pe=s.left=ri(oe*ts,.5),fe=s.top=ri(ae*ts,.5),me=s.width=ri(re*ts,.5),ge=s.height=ri(le*ts,.5)}const Ae=3;if(i.setSize=function({width:e,height:t}){$e(e,t)},null==q.dataIdx){let e=q.hover,s=e.skip=new Set(e.skip??[]);s.add(void 0);let i=e.prox=Js(e.prox),n=e.bias??=0;q.dataIdx=(e,r,l,o)=>{if(0==r)return l;let a=l,c=i(e,r,l,o)??Gs,h=c>=0&&c<Gs,u=0==S.ori?re:le,d=q.left,p=t[0],f=t[r];if(s.has(f[l])){a=null;let e,t=null,i=null;if(0==n||-1==n)for(e=l;null==t&&e-- >0;)s.has(f[e])||(t=e);if(0==n||1==n)for(e=l;null==i&&e++<f.length;)s.has(f[e])||(i=e);if(null!=t||null!=i)if(h){let e=d-(null==t?-1/0:C(p[t],S,u,0)),s=(null==i?1/0:C(p[i],S,u,0))-d;e<=s?e<=c&&(a=t):s<=c&&(a=i)}else a=null==i?t:null==t?i:l-t<=i-l?t:i}else if(h){Ls(d-C(p[l],S,u,0))>c&&(a=null)}return a}}const Ee=e=>{q.event=e};q.idxs=O,q._lock=!1;let Se=q.points;Se.show=Js(Se.show),Se.size=Js(Se.size),Se.stroke=Js(Se.stroke),Se.width=Js(Se.width),Se.fill=Js(Se.fill);const Me=i.focus=$i({},e.focus||{alpha:.3},q.focus),Ce=Me.prox>=0,Pe=Ce&&Se.one;let Te=[],Be=[],ze=[];function De(e,t){let s=Se.show(i,t);if(s instanceof HTMLElement)return is(s,"u-cursor-pt"),is(s,e.class),cs(s,-10,-10,re,le),f.insertBefore(s,Te[t]),s}function Fe(e,t){if(1==n||t>0){let t=1==n&&b[e.scale].time,s=e.value;e.value=t?_i(s)?hn(B,cn(s,z)):s||L:s||Fn,e.label=e.label||(t?"Time":"Value")}if(Pe||t>0){e.width=null==e.width?1:e.width,e.paths=e.paths||yr||ei,e.fillTo=Js(e.fillTo||Kn),e.pxAlign=+Ps(e.pxAlign,m),e.pxRound=Zn(e.pxAlign),e.stroke=Js(e.stroke||null),e.fill=Js(e.fill||null),e._stroke=e._fill=e._paths=e._focus=null;let t=ai((3+2*(Rs(1,e.width)||1))*1,3),s=e.points=$i({},{size:t,width:Rs(1,.2*t),stroke:e.stroke,space:2*t,paths:br,_stroke:null,_fill:null},e.points);s.show=Js(s.show),s.filter=Js(s.filter),s.fill=Js(s.fill),s.stroke=Js(s.stroke),s.paths=Js(s.paths),s.pxAlign=e.pxAlign}if(N){let s=function(e,t){if(0==t&&(Y||!H.live||2==n))return fi;let s=[],r=ls("tr","u-series",j,j.childNodes[t]);is(r,e.class),e.show||is(r,Bt);let l=ls("th",null,r);if(I.show){let e=os("u-marker",l);if(t>0){let s=I.width(i,t);s&&(e.style.border=s+"px "+I.dash(i,t)+" "+I.stroke(i,t)),e.style.background=I.fill(i,t)}}let o=os(zt,l);for(var a in e.label instanceof HTMLElement?o.appendChild(e.label):o.textContent=e.label,t>0&&(I.show||(o.style.color=e.width>0?I.stroke(i,t):I.fill(i,t)),te("click",l,t=>{if(q._lock)return;Ee(t);let s=v.indexOf(e);if((t.ctrlKey||t.metaKey)!=H.isolate){let e=v.some((e,t)=>t>0&&t!=s&&e.show);v.forEach((t,i)=>{i>0&&Ts(i,e?i==s?Z:X:Z,!0,Ui.setSeries)})}else Ts(s,{show:!e.show},!0,Ui.setSeries)},!1),Ce&&te(jt,l,t=>{q._lock||(Ee(t),Ts(v.indexOf(e),Us,!0,Ui.setSeries))},!1)),V){let e=ls("td","u-value",r);e.textContent="--",s.push(e)}return[r,s]}(e,t);G.splice(t,0,s[0]),K.splice(t,0,s[1]),H.values.push(null)}if(R){O.splice(t,0,null);let s=null;Pe?0==t&&(s=De(e,t)):t>0&&(s=De(e,t)),Te.splice(t,0,s),Be.splice(t,0,0),ze.splice(t,0,0)}qi("addSeries",t)}i.addSeries=function(e,t){t=null==t?v.length:t,e=1==n?wr(e,t,$n,Nn):wr(e,t,{},qn),v.splice(t,0,e),Fe(v[t],t)},i.delSeries=function(e){if(v.splice(e,1),N){H.values.splice(e,1),K.splice(e,1);let t=G.splice(e,1)[0];se(null,t.firstChild),t.remove()}R&&(O.splice(e,1),Te.splice(e,1)[0].remove(),Be.splice(e,1),ze.splice(e,1)),qi("delSeries",e)};const Le=[!1,!1,!1,!1];function Oe(e,t,s,i){let[n,r,l,o]=s,a=t%2,c=0;return 0==a&&(o||r)&&(c=0==t&&!n||2==t&&!l?Hs(wn.size/3):0),1==a&&(n||l)&&(c=1==t&&!r||3==t&&!o?Hs(Ln.size/2):0),c}const He=i.padding=(e.padding||[Oe,Oe,Oe,Oe]).map(e=>Js(Ps(e,Oe))),qe=i._padding=He.map((e,t)=>e(i,t,Le,0));let Ne,Re=null,Ie=null;const Ue=1==n?v[0].idxs:null;let We,je,Ve,Ge,Ke,Ye,Qe,Je,Ze,Xe,et=null,tt=!1;function st(e,s){if(t=null==e?[]:e,i.data=i._data=t,2==n){Ne=0;for(let e=1;e<v.length;e++)Ne+=t[e][0].length}else{0==t.length&&(i.data=i._data=t=[[]]),et=t[0],Ne=et.length;let e=t;if(2==M){e=t.slice();let s=e[0]=Array(Ne);for(let e=0;e<Ne;e++)s[e]=e}i._data=t=e}if(_t(!0),qi("setData"),2==M&&(ye=!0),!1!==s){let e=S;e.auto(i,tt)?it():Ms(w,e.min,e.max),be=be||q.left>=0,we=!0,Jt()}}function it(){let e,s;tt=!0,1==n&&(Ne>0?(Re=Ue[0]=0,Ie=Ue[1]=Ne-1,e=t[0][Re],s=t[0][Ie],2==M?(e=Re,s=Ie):e==s&&(3==M?[e,s]=ks(e,e,S.log,!1):4==M?[e,s]=As(e,e,S.log,!1):S.time?s=e+Hs(86400/_):[e,s]=Cs(e,s,.1,!0))):(Re=Ue[0]=e=null,Ie=Ue[1]=s=null)),Ms(w,e,s)}function nt(e,t,s,i,n,r){e??=Rt,s??=pi,i??="butt",n??=Rt,r??="round",e!=We&&(u.strokeStyle=We=e),n!=je&&(u.fillStyle=je=n),t!=Ve&&(u.lineWidth=Ve=t),r!=Ke&&(u.lineJoin=Ke=r),i!=Ye&&(u.lineCap=Ye=i),s!=Ge&&u.setLineDash(Ge=s)}function rt(e,t,s,i){t!=je&&(u.fillStyle=je=t),e!=Qe&&(u.font=Qe=e),s!=Je&&(u.textAlign=Je=s),i!=Ze&&(u.textBaseline=Ze=i)}function lt(e,t,s,n,r=0){if(n.length>0&&e.auto(i,tt)&&(null==t||null==t.min)){let t=Ps(Re,0),i=Ps(Ie,n.length-1),l=null==s.min?function(e,t,s,i=0,n=!1){let r=n?$s:ws,l=n?xs:bs;[t,s]=r(e,t,s);let o=e[t],a=e[t];if(t>-1)if(1==i)o=e[t],a=e[s];else if(-1==i)o=e[s],a=e[t];else for(let i=t;i<=s;i++){let t=e[i];l(t)&&(t<o?o=t:t>a&&(a=t))}return[o??Gs,a??-Gs]}(n,t,i,r,3==e.distr):[s.min,s.max];e.min=Ns(e.min,s.min=l[0]),e.max=Rs(e.max,s.max=l[1])}}i.setData=st;const ot={min:null,max:null};function at(e,t){let s=t?v[e].points:v[e];s._stroke=s.stroke(i,e),s._fill=s.fill(i,e)}function ct(e,s){let n=s?v[e].points:v[e],{stroke:r,fill:l,clip:o,flags:a,_stroke:c=n._stroke,_fill:h=n._fill,_width:d=n.width}=n._paths;d=ai(d*ts,3);let p=null,f=d%2/2;s&&null==h&&(h=d>0?"#fff":c);let m=1==n.pxAlign&&f>0;if(m&&u.translate(f,f),!s){let e=pe-d/2,t=fe-d/2,s=me+d,i=ge+d;p=new Path2D,p.rect(e,t,s,i)}s?ut(c,d,n.dash,n.cap,h,r,l,a,o):function(e,s,n,r,l,o,a,c,h,u,d){let p=!1;0!=h&&x.forEach((f,m)=>{if(f.series[0]==e){let e,g=v[f.series[1]],_=t[f.series[1]],y=(g._paths||di).band;mi(y)&&(y=1==f.dir?y[0]:y[1]);let b=null;g.show&&y&&function(e,t,s){for(t=Ps(t,0),s=Ps(s,e.length-1);t<=s;){if(null!=e[t])return!0;t++}return!1}(_,Re,Ie)?(b=f.fill(i,m)||o,e=g._paths.clip):y=null,ut(s,n,r,l,b,a,c,h,u,d,e,y),p=!0}}),p||ut(s,n,r,l,o,a,c,h,u,d)}(e,c,d,n.dash,n.cap,h,r,l,a,p,o),m&&u.translate(-f,-f)}const ht=3;function ut(e,t,s,i,n,r,l,o,a,c,h,d){nt(e,t,s,i,n),(a||c||d)&&(u.save(),a&&u.clip(a),c&&u.clip(c)),d?(o&ht)==ht?(u.clip(d),h&&u.clip(h),pt(n,l),dt(e,r,t)):2&o?(pt(n,l),u.clip(d),dt(e,r,t)):1&o&&(u.save(),u.clip(d),h&&u.clip(h),pt(n,l),u.restore(),dt(e,r,t)):(pt(n,l),dt(e,r,t)),(a||c||d)&&u.restore()}function dt(e,t,s){s>0&&(t instanceof Map?t.forEach((e,t)=>{u.strokeStyle=We=t,u.stroke(e)}):null!=t&&e&&u.stroke(t))}function pt(e,t){t instanceof Map?t.forEach((e,t)=>{u.fillStyle=je=t,u.fill(e)}):null!=t&&e&&u.fill(t)}function ft(e,t,s,i,n,r,l,o,a,c){let h=l%2/2;1==m&&u.translate(h,h),nt(o,l,a,c,o),u.beginPath();let d,p,f,g,_=n+(0==i||3==i?-r:r);0==s?(p=n,g=_):(d=n,f=_);for(let i=0;i<e.length;i++)null!=t[i]&&(0==s?d=f=e[i]:p=g=e[i],u.moveTo(d,p),u.lineTo(f,g));u.stroke(),1==m&&u.translate(-h,-h)}function mt(e){let t=!0;return y.forEach((s,n)=>{if(!s.show)return;let r=b[s.scale];if(null==r.min)return void(s._show&&(t=!1,s._show=!1,_t(!1)));s._show||(t=!1,s._show=!0,_t(!1));let l=s.side,o=l%2,{min:a,max:c}=r,[h,u]=function(e,t,s,n){let r,l=y[e];if(n<=0)r=[0,0];else{let o=l._space=l.space(i,e,t,s,n);r=Pr(t,s,l._incrs=l.incrs(i,e,t,s,n,o),n,o)}return l._found=r}(n,a,c,0==o?re:le);if(0==u)return;let d=2==r.distr,p=s._splits=s.splits(i,n,a,c,h,u,d),f=2==r.distr?p.map(e=>et[e]):p,m=2==r.distr?et[p[1]]-et[p[0]]:h,g=s._values=s.values(i,s.filter(i,f,n,u,m),n,u,m);s._rotate=2==l?s.rotate(i,g,n,u):0;let _=s._size;s._size=qs(s.size(i,g,n,e)),null!=_&&s._size!=_&&(t=!1)}),t}function gt(e){let t=!0;return He.forEach((s,n)=>{let r=s(i,n,Le,e);r!=qe[n]&&(t=!1),qe[n]=r}),t}function _t(e){v.forEach((t,s)=>{s>0&&(t._paths=null,e&&(1==n?(t.min=null,t.max=null):t.facets.forEach(e=>{e.min=null,e.max=null})))})}let vt,yt,bt,xt,wt,$t,kt,At,Et,St,Mt,Ct,Pt=!1,Tt=!1,Nt=[];function Kt(){Tt=!1;for(let e=0;e<Nt.length;e++)qi(...Nt[e]);Nt.length=0}function Jt(){Pt||(Ai(es),Pt=!0)}function es(){if(_e&&(!function(){for(let e in b){let t=b[e];null==T[e]&&(null==t.min||null!=T[w]&&t.auto(i,tt))&&(T[e]=ot)}for(let e in b){let t=b[e];null==T[e]&&null!=t.from&&null!=T[t.from]&&(T[e]=ot)}null!=T[w]&&_t(!0);let e={};for(let t in T){let s=T[t];if(null!=s){let r=e[t]=wi(b[t],yi);if(null!=s.min)$i(r,s);else if(t!=w||2==n)if(0==Ne&&null==r.from){let e=r.range(i,null,null,t);r.min=e[0],r.max=e[1]}else r.min=Gs,r.max=-Gs}}if(Ne>0){v.forEach((s,r)=>{if(1==n){let n=s.scale,l=T[n];if(null==l)return;let o=e[n];if(0==r){let e=o.range(i,o.min,o.max,n);o.min=e[0],o.max=e[1],Re=vs(o.min,t[0]),Ie=vs(o.max,t[0]),Ie-Re>1&&(t[0][Re]<o.min&&Re++,t[0][Ie]>o.max&&Ie--),s.min=et[Re],s.max=et[Ie]}else s.show&&s.auto&&lt(o,l,s,t[r],s.sorted);s.idxs[0]=Re,s.idxs[1]=Ie}else if(r>0&&s.show&&s.auto){let[i,n]=s.facets,l=i.scale,o=n.scale,[a,c]=t[r],h=e[l],u=e[o];null!=h&&lt(h,T[l],i,a,i.sorted),null!=u&&lt(u,T[o],n,c,n.sorted),s.min=n.min,s.max=n.max}});for(let t in e){let s=e[t],n=T[t];if(null==s.from&&(null==n||null==n.min)){let e=s.range(i,s.min==Gs?null:s.min,s.max==-Gs?null:s.max,t);s.min=e[0],s.max=e[1]}}}for(let t in e){let s=e[t];if(null!=s.from){let n=e[s.from];if(null==n.min)s.min=s.max=null;else{let e=s.range(i,n.min,n.max,t);s.min=e[0],s.max=e[1]}}}let s={},r=!1;for(let t in e){let i=e[t],n=b[t];if(n.min!=i.min||n.max!=i.max){n.min=i.min,n.max=i.max;let e=n.distr;n._min=3==e?Ws(n.min):4==e?Vs(n.min,n.asinh):100==e?n.fwd(n.min):n.min,n._max=3==e?Ws(n.max):4==e?Vs(n.max,n.asinh):100==e?n.fwd(n.max):n.max,s[t]=r=!0}}if(r){v.forEach((e,t)=>{2==n?t>0&&s.y&&(e._paths=null):s[e.scale]&&(e._paths=null)});for(let e in s)ye=!0,qi("setScale",e);R&&q.left>=0&&(be=we=!0)}for(let e in T)T[e]=null}(),_e=!1),ye&&(!function(){let e=!1,t=0;for(;!e;){t++;let s=mt(t),n=gt(t);e=t==Ae||s&&n,e||(ke(i.width,i.height),ve=!0)}}(),ye=!1),ve){if(rs(p,Ht,oe),rs(p,Lt,ae),rs(p,Dt,re),rs(p,Ft,le),rs(f,Ht,oe),rs(f,Lt,ae),rs(f,Dt,re),rs(f,Ft,le),rs(d,Dt,ie),rs(d,Ft,ne),h.width=Hs(ie*ts),h.height=Hs(ne*ts),y.forEach(({_el:e,_show:t,_size:s,_pos:i,side:n})=>{if(null!=e)if(t){let t=n%2==1;rs(e,t?"left":"top",i-(3===n||0===n?s:0)),rs(e,t?"width":"height",s),rs(e,t?"top":"left",t?ae:oe),rs(e,t?"height":"width",t?le:re),ns(e,Bt)}else is(e,Bt)}),We=je=Ve=Ke=Ye=Qe=Je=Ze=Ge=null,Xe=1,bi(!0),oe!=ce||ae!=he||re!=ue||le!=de){_t(!1);let e=re/ue,t=le/de;if(R&&!be&&q.left>=0){q.left*=e,q.top*=t,bt&&cs(bt,Hs(q.left),0,re,le),xt&&cs(xt,0,Hs(q.top),re,le);for(let s=0;s<Te.length;s++){let i=Te[s];null!=i&&(Be[s]*=e,ze[s]*=t,cs(i,qs(Be[s]),qs(ze[s]),re,le))}}if(ms.show&&!xe&&ms.left>=0&&ms.width>0){ms.left*=e,ms.width*=e,ms.top*=t,ms.height*=t;for(let e in Ei)rs(ys,e,ms[e])}ce=oe,he=ae,ue=re,de=le}qi("setSize"),ve=!1}ie>0&&ne>0&&(u.clearRect(0,0,h.width,h.height),qi("drawClear"),k.forEach(e=>e()),qi("draw")),ms.show&&xe&&(Ss(ms),xe=!1),R&&be&&(ui(null,!0,!1),be=!1),H.show&&H.live&&we&&(li(),we=!1),a||(a=!0,i.status=1,qi("ready")),tt=!1,Pt=!1}function ss(e,s){let n=b[e];if(null==n.from){if(0==Ne){let t=n.range(i,s.min,s.max,e);s.min=t[0],s.max=t[1]}if(s.min>s.max){let e=s.min;s.min=s.max,s.max=e}if(Ne>1&&null!=s.min&&null!=s.max&&s.max-s.min<1e-16)return;e==w&&2==n.distr&&Ne>0&&(s.min=vs(s.min,t[0]),s.max=vs(s.max,t[0]),s.min==s.max&&s.max++),T[e]=s,_e=!0,Jt()}}i.batch=function(e,t=!1){Pt=!0,Tt=t,e(i),es(),t&&Nt.length>0&&queueMicrotask(Kt)},i.redraw=(e,t)=>{ye=t||!1,!1!==e?Ms(w,S.min,S.max):Jt()},i.setScale=ss;let as=!1;const hs=q.drag;let ds=hs.x,fs=hs.y;R&&(q.x&&(vt=os("u-cursor-x",f)),q.y&&(yt=os("u-cursor-y",f)),0==S.ori?(bt=vt,xt=yt):(bt=yt,xt=vt),Mt=q.left,Ct=q.top);const ms=i.select=$i({show:!0,over:!0,left:0,width:0,top:0,height:0},e.select),ys=ms.show?os("u-select",ms.over?f:p):null;function Ss(e,t){if(ms.show){for(let t in e)ms[t]=e[t],t in Ei&&rs(ys,t,e[t]);!1!==t&&qi("setSelect")}}function Ms(e,t,s){ss(e,{min:t,max:s})}function Ts(e,t,s,r){null!=t.focus&&function(e){if(e!=Os){let t=null==e,s=1!=Me.alpha;v.forEach((i,r)=>{if(1==n||r>0){let n=t||0==r||r==e;i._focus=t?null:n,s&&function(e,t){v[e].alpha=t,R&&null!=Te[e]&&(Te[e].style.opacity=t);N&&G[e]&&(G[e].style.opacity=t)}(r,n?1:Me.alpha)}}),Os=e,s&&Jt()}}(e),null!=t.show&&v.forEach((s,i)=>{i>0&&(e==i||null==e)&&(s.show=t.show,function(e){if(v[e].show)N&&ns(G[e],Bt);else if(N&&is(G[e],Bt),R){let t=Pe?Te[0]:Te[e];null!=t&&cs(t,-10,-10,re,le)}}(i),2==n?(Ms(s.facets[0].scale,null,null),Ms(s.facets[1].scale,null,null)):Ms(s.scale,null,null),Jt())}),!1!==s&&qi("setSeries",e,t),r&&Vi("setSeries",i,e,t)}let Bs,zs,Os;i.setSelect=Ss,i.setSeries=Ts,i.addBand=function(e,t){e.fill=Js(e.fill||null),e.dir=Ps(e.dir,-1),t=null==t?x.length:t,x.splice(t,0,e)},i.setBand=function(e,t){$i(x[e],t)},i.delBand=function(e){null==e?x.length=0:x.splice(e,1)};const Us={focus:!0};function js(e,t,s){let i=b[t];s&&(e=e/ts-(1==i.ori?ae:oe));let n=re;1==i.ori&&(n=le,e=n-e),-1==i.dir&&(e=n-e);let r=i._min,l=r+(i._max-r)*(e/n),o=i.distr;return 3==o?Is(10,l):4==o?((e,t=1)=>Ds.sinh(e)*t)(l,i.asinh):100==o?i.bwd(l):l}function Ks(e,t){rs(ys,Ht,ms.left=e),rs(ys,Dt,ms.width=t)}function Zs(e,t){rs(ys,Lt,ms.top=e),rs(ys,Ft,ms.height=t)}N&&Ce&&te(Vt,U,e=>{q._lock||(Ee(e),null!=Os&&Ts(null,Us,!0,Ui.setSeries))}),i.valToIdx=e=>vs(e,t[0]),i.posToIdx=function(e,s){return vs(js(e,w,s),t[0],Re,Ie)},i.posToVal=js,i.valToPos=(e,t,s)=>0==b[t].ori?r(e,b[t],s?me:re,s?pe:0):l(e,b[t],s?ge:le,s?fe:0),i.setCursor=(e,t,s)=>{Mt=e.left,Ct=e.top,ui(null,t,s)};let ii=0==S.ori?Ks:Zs,ni=1==S.ori?Ks:Zs;function li(e,t){if(null!=e&&(e.idxs?e.idxs.forEach((e,t)=>{O[t]=e}):(e=>void 0===e)(e.idx)||O.fill(e.idx),H.idx=O[0]),N&&H.live){for(let e=0;e<v.length;e++)(e>0||1==n&&!Y)&&oi(e,O[e]);!function(){if(N&&H.live)for(let e=2==n?1:0;e<v.length;e++){if(0==e&&Y)continue;let t=H.values[e],s=0;for(let i in t)K[e][s++].firstChild.nodeValue=t[i]}}()}we=!1,!1!==t&&qi("setLegend")}function oi(e,s){let n,r=v[e],l=0==e&&2==M?et:t[e];Y?n=r.values(i,e,s)??Q:(n=r.value(i,null==s?null:l[s],e,s),n=null==n?Q:{_:n}),H.values[e]=n}function ui(e,s,r){let l;Et=Mt,St=Ct,[Mt,Ct]=q.move(i,Mt,Ct),q.left=Mt,q.top=Ct,R&&(bt&&cs(bt,Hs(Mt),0,re,le),xt&&cs(xt,0,Hs(Ct),re,le));let o=Re>Ie;Bs=Gs,zs=null;let a=0==S.ori?re:le,c=1==S.ori?re:le;if(Mt<0||0==Ne||o){l=q.idx=null;for(let e=0;e<v.length;e++){let t=Te[e];null!=t&&cs(t,-10,-10,re,le)}Ce&&Ts(null,Us,!0,null==e&&Ui.setSeries),H.live&&(O.fill(l),we=!0)}else{let e,s,r;1==n&&(e=0==S.ori?Mt:Ct,s=js(e,w),l=q.idx=vs(s,t[0],Re,Ie),r=C(t[0][l],S,a,0));let o=-10,h=-10,u=0,d=0,p=!0,f="",m="";for(let e=2==n?1:0;e<v.length;e++){let g=v[e],_=O[e],y=null==_?null:1==n?t[e][_]:t[e][1][_],x=q.dataIdx(i,e,l,s),w=null==x?null:1==n?t[e][x]:t[e][1][x];if(we=we||w!=y||x!=_,O[e]=x,e>0&&g.show){let s=null==x?-10:x==l?r:C(1==n?t[0][x]:t[e][0][x],S,a,0),_=null==w?-10:P(w,1==n?b[g.scale]:b[g.facets[1].scale],c,0);if(Ce&&null!=w){let t=1==S.ori?Mt:Ct,s=Ls(Me.dist(i,e,x,_,t));if(s<Bs){let i=Me.bias;if(0!=i){let n=js(t,g.scale),r=n>=0?1:-1;r==(w>=0?1:-1)&&(1==r?1==i?w>=n:w<=n:1==i?w<=n:w>=n)&&(Bs=s,zs=e)}else Bs=s,zs=e}}if(we||Pe){let t,n;0==S.ori?(t=s,n=_):(t=_,n=s);let r,l,a,c,g,v,y=!0,b=Se.bbox;if(null!=b){y=!1;let t=b(i,e);a=t.left,c=t.top,r=t.width,l=t.height}else a=t,c=n,r=l=Se.size(i,e);if(v=Se.fill(i,e),g=Se.stroke(i,e),Pe)e==zs&&Bs<=Me.prox&&(o=a,h=c,u=r,d=l,p=y,f=v,m=g);else{let t=Te[e];null!=t&&(Be[e]=a,ze[e]=c,ps(t,r,l,y),us(t,v,g),cs(t,qs(a),qs(c),re,le))}}}}if(Pe){let e=Me.prox;if(we||(null==Os?Bs<=e:Bs>e||zs!=Os)){let e=Te[0];null!=e&&(Be[0]=o,ze[0]=h,ps(e,u,d,p),us(e,f,m),cs(e,qs(o),qs(h),re,le))}}}if(ms.show&&as)if(null!=e){let[t,s]=Ui.scales,[i,n]=Ui.match,[r,l]=e.cursor.sync.scales,o=e.cursor.drag;if(ds=o._x,fs=o._y,ds||fs){let o,h,u,d,p,{left:f,top:m,width:g,height:_}=e.select,v=e.scales[r].ori,y=e.posToVal,x=null!=t&&i(t,r),w=null!=s&&n(s,l);x&&ds?(0==v?(o=f,h=g):(o=m,h=_),u=b[t],d=C(y(o,r),u,a,0),p=C(y(o+h,r),u,a,0),ii(Ns(d,p),Ls(p-d))):ii(0,a),w&&fs?(1==v?(o=f,h=g):(o=m,h=_),u=b[s],d=P(y(o,l),u,c,0),p=P(y(o+h,l),u,c,0),ni(Ns(d,p),Ls(p-d))):ni(0,c)}else Si()}else{let e=Ls(Et-wt),t=Ls(St-$t);if(1==S.ori){let s=e;e=t,t=s}ds=hs.x&&e>=hs.dist,fs=hs.y&&t>=hs.dist;let s,i,n=hs.uni;null!=n?ds&&fs&&(ds=e>=n,fs=t>=n,ds||fs||(t>e?fs=!0:ds=!0)):hs.x&&hs.y&&(ds||fs)&&(ds=fs=!0),ds&&(0==S.ori?(s=kt,i=Mt):(s=At,i=Ct),ii(Ns(s,i),Ls(i-s)),fs||ni(0,c)),fs&&(1==S.ori?(s=kt,i=Mt):(s=At,i=Ct),ni(Ns(s,i),Ls(i-s)),ds||ii(0,a)),ds||fs||(ii(0,0),ni(0,0))}if(hs._x=ds,hs._y=fs,null==e){if(r){if(null!=Wi){let[e,t]=Ui.scales;Ui.values[0]=null!=e?js(0==S.ori?Mt:Ct,e):null,Ui.values[1]=null!=t?js(1==S.ori?Mt:Ct,t):null}Vi(It,i,Mt,Ct,re,le,l)}if(Ce){let e=r&&Ui.setSeries,t=Me.prox;null==Os?Bs<=t&&Ts(zs,Us,!0,e):Bs>t?Ts(null,Us,!0,e):zs!=Os&&Ts(zs,Us,!0,e)}}we&&(H.idx=l,li()),!1!==s&&qi("setCursor")}i.setLegend=li;let gi=null;function bi(e=!1){e?gi=null:(gi=f.getBoundingClientRect(),qi("syncRect",gi))}function xi(e,t,s,i,n,r,l){q._lock||as&&null!=e&&0==e.movementX&&0==e.movementY||(ki(e,t,s,i,n,r,l,!1,null!=e),null!=e?ui(null,!0,!0):ui(t,!0,!1))}function ki(e,t,s,n,r,l,a,c,h){if(null==gi&&bi(!1),Ee(e),null!=e)s=e.clientX-gi.left,n=e.clientY-gi.top;else{if(s<0||n<0)return Mt=-10,void(Ct=-10);let[e,i]=Ui.scales,a=t.cursor.sync,[c,h]=a.values,[u,d]=a.scales,[p,f]=Ui.match,m=t.axes[0].side%2==1,g=0==S.ori?re:le,_=1==S.ori?re:le,v=m?l:r,y=m?r:l,x=m?n:s,w=m?s:n;if(s=null!=u?p(e,u)?o(c,b[e],g,0):-10:g*(x/v),n=null!=d?f(i,d)?o(h,b[i],_,0):-10:_*(w/y),1==S.ori){let e=s;s=n,n=e}}!h||null!=t&&t.cursor.event.type!=It||((s<=1||s>=re-1)&&(s=ri(s,re)),(n<=1||n>=le-1)&&(n=ri(n,le))),c?(wt=s,$t=n,[kt,At]=q.move(i,s,n)):(Mt=s,Ct=n)}Object.defineProperty(i,"rect",{get:()=>(null==gi&&bi(!1),gi)});const Ei={width:0,height:0,left:0,top:0};function Si(){Ss(Ei,!1)}let Mi,Ci,Pi,Ti;function Bi(e,t,s,n,r,l,o){as=!0,ds=fs=hs._x=hs._y=!1,ki(e,t,s,n,r,l,0,!0,!1),null!=e&&(te(Wt,Zt,zi,!1),Vi(Ut,i,kt,At,re,le,null));let{left:a,top:c,width:h,height:u}=ms;Mi=a,Ci=c,Pi=h,Ti=u}function zi(e,t,s,n,r,l,o){as=hs._x=hs._y=!1,ki(e,t,s,n,r,l,0,!1,!0);let{left:a,top:c,width:h,height:u}=ms,d=h>0||u>0,p=Mi!=a||Ci!=c||Pi!=h||Ti!=u;if(d&&p&&Ss(ms),hs.setScale&&d&&p){let e=a,t=h,s=c,i=u;if(1==S.ori&&(e=c,t=u,s=a,i=h),ds&&Ms(w,js(e,w),js(e+t,w)),fs)for(let e in b){let t=b[e];e!=w&&null==t.from&&t.min!=Gs&&Ms(e,js(s+i,e),js(s,e))}Si()}else q.lock&&(q._lock=!q._lock,ui(t,!0,null!=e));null!=e&&(se(Wt,Zt),Vi(Wt,i,Mt,Ct,re,le,null))}function Fi(e,t,s,n,r,l,o){q._lock||(Ee(e),it(),Si(),null!=e&&Vi(Gt,i,Mt,Ct,re,le,null))}function Li(){y.forEach(Br),$e(i.width,i.height,!0)}gs(Yt,Xt,Li);const Oi={};Oi.mousedown=Bi,Oi.mousemove=xi,Oi.mouseup=zi,Oi.dblclick=Fi,Oi.setSeries=(e,t,s,n)=>{-1!=(s=(0,Ui.match[2])(i,t,s))&&Ts(s,n,!0,!1)},R&&(te(Ut,f,Bi),te(It,f,xi),te(jt,f,e=>{Ee(e),bi(!1)}),te(Vt,f,function(e,t,s,i,n,r,l){if(q._lock)return;Ee(e);let o=as;if(as){let e,t,s=!0,i=!0,n=10;0==S.ori?(e=ds,t=fs):(e=fs,t=ds),e&&t&&(s=Mt<=n||Mt>=re-n,i=Ct<=n||Ct>=le-n),e&&s&&(Mt=Mt<kt?0:re),t&&i&&(Ct=Ct<At?0:le),ui(null,!0,!0),as=!1}Mt=-10,Ct=-10,O.fill(null),ui(null,!0,!0),o&&(as=o)}),te(Gt,f,Fi),_r.add(i),i.syncRect=bi);const Hi=i.hooks=e.hooks||{};function qi(e,t,s){Tt?Nt.push([e,t,s]):e in Hi&&Hi[e].forEach(e=>{e.call(null,i,t,s)})}(e.plugins||[]).forEach(e=>{for(let t in e.hooks)Hi[t]=(Hi[t]||[]).concat(e.hooks[t])});const Ii=(e,t,s)=>s,Ui=$i({key:null,setSeries:!1,filters:{pub:ti,sub:ti},scales:[w,v[1]?v[1].scale:null],match:[si,si,Ii],values:[null,null]},q.sync);2==Ui.match.length&&Ui.match.push(Ii),q.sync=Ui;const Wi=Ui.key,ji=jn(Wi);function Vi(e,t,s,i,n,r,l){Ui.filters.pub(e,t,s,i,n,r,l)&&ji.pub(e,t,s,i,n,r,l)}function Gi(){qi("init",e,t),st(t||e.data,!1),T[w]?ss(w,T[w]):it(),xe=ms.show&&(ms.width>0||ms.height>0),be=we=!0,$e(e.width,e.height)}return ji.sub(i),i.pub=function(e,t,s,i,n,r,l){Ui.filters.sub(e,t,s,i,n,r,l)&&Oi[e](null,t,s,i,n,r,l)},i.destroy=function(){ji.unsub(i),_r.delete(i),ee.clear(),_s(Yt,Xt,Li),c.remove(),U?.remove(),qi("destroy")},v.forEach(Fe),y.forEach(function(e,t){if(e._show=e.show,e.show){let s=e.side%2,n=b[e.scale];null==n&&(e.scale=s?v[1].scale:w,n=b[e.scale]);let r=n.time;e.size=Js(e.size),e.space=Js(e.space),e.rotate=Js(e.rotate),mi(e.incrs)&&e.incrs.forEach(e=>{!ci.has(e)&&ci.set(e,hi(e))}),e.incrs=Js(e.incrs||(2==n.distr?Ni:r?1==_?Xi:sn:Ri)),e.splits=Js(e.splits||(r&&1==n.distr?D:3==n.distr?En:4==n.distr?Sn:An)),e.stroke=Js(e.stroke),e.grid.stroke=Js(e.grid.stroke),e.ticks.stroke=Js(e.ticks.stroke),e.border.stroke=Js(e.border.stroke);let l=e.values;e.values=mi(l)&&!mi(l[0])?Js(l):r?mi(l)?on(B,ln(l,z)):_i(l)?function(e,t){let s=Di(t);return(t,i,n,r,l)=>i.map(t=>s(e(t)))}(B,l):l||F:l||kn,e.filter=Js(e.filter||(n.distr>=3&&10==n.log?zn:3==n.distr&&2==n.log?Dn:Xs)),e.font=Tr(e.font),e.labelFont=Tr(e.labelFont),e._size=e.size(i,null,t,0),e._space=e._rotate=e._incrs=e._found=e._splits=e._values=null,e._size>0&&(Le[t]=!0,e._el=os("u-axis",d))}}),s?s instanceof HTMLElement?(s.appendChild(c),Gi()):s(i,Gi):Gi(),i}zr.assign=$i,zr.fmtNum=zs,zr.rangeNum=Cs,zr.rangeLog=ks,zr.rangeAsinh=As,zr.orient=Vn,zr.pxRatio=ts,zr.join=function(e,t){if(function(e){let t=e[0][0],s=t.length;for(let i=1;i<e.length;i++){let n=e[i][0];if(n.length!=s)return!1;if(n!=t)for(let e=0;e<s;e++)if(n[e]!=t[e])return!1}return!0}(e)){let t=e[0].slice();for(let s=1;s<e.length;s++)t.push(...e[s].slice(1));return function(e,t=100){const s=e.length;if(s<=1)return!0;let i=0,n=s-1;for(;i<=n&&null==e[i];)i++;for(;n>=i&&null==e[n];)n--;if(n<=i)return!0;const r=Rs(1,Os((n-i+1)/t));for(let t=e[i],s=i+r;s<=n;s+=r){const i=e[s];if(null!=i){if(i<=t)return!1;t=i}}return!0}(t[0])||(t=function(e){let t=e[0],s=t.length,i=Array(s);for(let e=0;e<i.length;e++)i[e]=e;i.sort((e,s)=>t[e]-t[s]);let n=[];for(let t=0;t<e.length;t++){let r=e[t],l=Array(s);for(let e=0;e<s;e++)l[e]=r[i[e]];n.push(l)}return n}(t)),t}let s=new Set;for(let t=0;t<e.length;t++){let i=e[t][0],n=i.length;for(let e=0;e<n;e++)s.add(i[e])}let i=[Array.from(s).sort((e,t)=>e-t)],n=i[0].length,r=new Map;for(let e=0;e<n;e++)r.set(i[0][e],e);for(let s=0;s<e.length;s++){let l=e[s],o=l[0];for(let e=1;e<l.length;e++){let a=l[e],c=Array(n).fill(void 0),h=t?t[s][e]:1,u=[];for(let e=0;e<a.length;e++){let t=a[e],s=r.get(o[e]);null===t?0!=h&&(c[s]=t,2==h&&u.push(s)):c[s]=t}ki(c,u,n),i.push(c)}}return i},zr.fmtDate=Di,zr.tzDate=function(e,t){let s;return"UTC"==t||"Etc/UTC"==t?s=new Date(+e+6e4*e.getTimezoneOffset()):t==Fi?s=e:(s=new Date(e.toLocaleString("en-US",{timeZone:t})),s.setMilliseconds(e.getMilliseconds())),s},zr.sync=jn;{zr.addGap=function(e,t,s){let i=e[e.length-1];i&&i[0]==t?i[1]=s:e.push([t,s])},zr.clipGaps=Qn;let e=zr.paths={points:hr};e.linear=fr,e.stepped=function(e){const t=Ps(e.align,1),s=Ps(e.ascDesc,!1),i=Ps(e.alignGaps,0),n=Ps(e.extend,!1);return(e,r,l,o)=>Vn(e,r,(a,c,h,u,d,p,f,m,g,_,v)=>{[l,o]=ws(h,l,o);let y=a.pxRound,{left:b,width:x}=e.bbox,w=e=>y(p(e,u,_,m)),$=e=>y(f(e,d,v,g)),k=0==u.ori?sr:ir;const A={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},E=A.stroke,S=u.dir*(0==u.ori?1:-1);let M=$(h[1==S?l:o]),C=w(c[1==S?l:o]),P=C,T=C;n&&-1==t&&(T=b,k(E,T,M)),k(E,C,M);for(let e=1==S?l:o;e>=l&&e<=o;e+=S){let s=h[e];if(null==s)continue;let i=w(c[e]),n=$(s);1==t?k(E,i,M):k(E,P,n),k(E,i,n),M=n,P=i}let B=P;n&&1==t&&(B=b+x,k(E,B,M));let[z,D]=Gn(e,r);if(null!=a.fill||0!=z){let t=A.fill=new Path2D(E),s=$(a.fillTo(e,r,a.min,a.max,z));k(t,B,s),k(t,T,s)}if(!a.spanGaps){let n=[];n.push(...Jn(c,h,l,o,S,w,i));let d=a.width*ts/2,p=s||1==t?d:-d,f=s||-1==t?-d:d;n.forEach(e=>{e[0]+=p,e[1]+=f}),A.gaps=n=a.gaps(e,r,l,o,n),A.clip=Qn(n,u.ori,m,g,_,v)}return 0!=D&&(A.band=2==D?[Yn(e,r,l,o,E,-1),Yn(e,r,l,o,E,1)]:Yn(e,r,l,o,E,D)),A})},e.bars=function(e){const t=Ps((e=e||di).size,[.6,Gs,1]),s=e.align||0,i=e.gap||0;let n=e.radius;n=null==n?[0,0]:"number"==typeof n?[n,0]:n;const r=Js(n),l=1-t[0],o=Ps(t[1],Gs),a=Ps(t[2],1),c=Ps(e.disp,di),h=Ps(e.each,e=>{}),{fill:u,stroke:d}=c;return(e,t,n,p)=>Vn(e,t,(f,m,g,_,v,y,b,x,w,$,k)=>{let A,E,S=f.pxRound,M=s,C=i*ts,P=o*ts,T=a*ts;0==_.ori?[A,E]=r(e,t):[E,A]=r(e,t);const B=_.dir*(0==_.ori?1:-1);let z,D,F,L=0==_.ori?nr:rr,O=0==_.ori?h:(e,t,s,i,n,r,l)=>{h(e,t,s,n,i,l,r)},H=Ps(e.bands,pi).find(e=>e.series[0]==t),q=null!=H?H.dir:0,N=f.fillTo(e,t,f.min,f.max,q),R=S(b(N,v,k,w)),I=$,U=S(f.width*ts),W=!1,j=null,V=null,G=null,K=null;null==u||0!=U&&null==d||(W=!0,j=u.values(e,t,n,p),V=new Map,new Set(j).forEach(e=>{null!=e&&V.set(e,new Path2D)}),U>0&&(G=d.values(e,t,n,p),K=new Map,new Set(G).forEach(e=>{null!=e&&K.set(e,new Path2D)})));let{x0:Y,size:Q}=c;if(null!=Y&&null!=Q){M=1,m=Y.values(e,t,n,p),2==Y.unit&&(m=m.map(t=>e.posToVal(x+t*$,_.key,!0)));let s=Q.values(e,t,n,p);D=2==Q.unit?s[0]*$:y(s[0],_,$,x)-y(0,_,$,x),I=mr(m,g,y,_,$,x,I),F=I-D+C}else I=mr(m,g,y,_,$,x,I),F=I*l+C,D=I-F;F<1&&(F=0),U>=D/2&&(U=0),F<5&&(S=Zs);let J=F>0;D=S(Ys(I-F-(J?U:0),T,P)),z=(0==M?D/2:M==B?0:D)-M*B*((0==M?C/2:0)+(J?U/2:0));const Z={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},X=W?null:new Path2D;let ee=null;if(null!=H)ee=e.data[H.series[1]];else{let{y0:s,y1:i}=c;null!=s&&null!=i&&(g=i.values(e,t,n,p),ee=s.values(e,t,n,p))}let te=A*D,se=E*D;for(let s=1==B?n:p;s>=n&&s<=p;s+=B){let i=g[s];if(null==i)continue;if(null!=ee){let e=ee[s]??0;if(i-e==0)continue;R=b(e,v,k,w)}let n=y(2!=_.distr||null!=c?m[s]:s,_,$,x),r=b(Ps(i,N),v,k,w),l=S(n-z),o=S(Rs(r,R)),a=S(Ns(r,R)),h=o-a;if(null!=i){let n=i<0?se:te,r=i<0?te:se;W?(U>0&&null!=G[s]&&L(K.get(G[s]),l,a+Os(U/2),D,Rs(0,h-U),n,r),null!=j[s]&&L(V.get(j[s]),l,a+Os(U/2),D,Rs(0,h-U),n,r)):L(X,l,a+Os(U/2),D,Rs(0,h-U),n,r),O(e,t,s,l-U/2,a,D+U,h)}}return U>0?Z.stroke=W?K:X:W||(Z._fill=0==f.width?f._fill:f._stroke??f._fill,Z.width=0),Z.fill=W?V:X,Z})},e.spline=function(e){return function(e,t){const s=Ps(t?.alignGaps,0);return(t,i,n,r)=>Vn(t,i,(l,o,a,c,h,u,d,p,f,m,g)=>{[n,r]=ws(a,n,r);let _,v,y,b=l.pxRound,x=e=>b(u(e,c,m,p)),w=e=>b(d(e,h,g,f));0==c.ori?(_=er,y=sr,v=ar):(_=tr,y=ir,v=cr);const $=c.dir*(0==c.ori?1:-1);let k=x(o[1==$?n:r]),A=k,E=[],S=[];for(let e=1==$?n:r;e>=n&&e<=r;e+=$)if(null!=a[e]){let t=x(o[e]);E.push(A=t),S.push(w(a[e]))}const M={stroke:e(E,S,_,y,v,b),fill:null,clip:null,band:null,gaps:null,flags:1},C=M.stroke;let[P,T]=Gn(t,i);if(null!=l.fill||0!=P){let e=M.fill=new Path2D(C),s=w(l.fillTo(t,i,l.min,l.max,P));y(e,A,s),y(e,k,s)}if(!l.spanGaps){let e=[];e.push(...Jn(o,a,n,r,$,x,s)),M.gaps=e=l.gaps(t,i,n,r,e),M.clip=Qn(e,c.ori,p,f,m,g)}return 0!=T&&(M.band=2==T?[Yn(t,i,n,r,C,-1),Yn(t,i,n,r,C,1)]:Yn(t,i,n,r,C,T)),M})}(gr,e)}}const Dr=o`
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
    gap: 4px 16px;
    padding: 8px 16px 16px;
    font-size: 12px;
    max-height: var(--legend-max-height, 160px);
    overflow-y: auto;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;
    min-width: 0;
  }
  .legend-item.hidden,
  tr.hidden {
    opacity: 0.4;
  }
  .legend-color {
    width: 14px;
    height: 4px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-name {
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .legend-value {
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .legend-table-wrap {
    padding: 4px 16px 12px;
    max-height: var(--legend-max-height, 200px);
    overflow: auto;
  }
  table.legend-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }
  .legend-table th {
    text-align: right;
    font-weight: 500;
    color: var(--secondary-text-color);
    padding: 2px 6px;
    white-space: nowrap;
  }
  .legend-table th:first-child,
  .legend-table td:first-child {
    text-align: left;
  }
  .legend-table td {
    padding: 2px 6px;
    text-align: right;
    white-space: nowrap;
    border-top: 1px solid var(--divider-color);
  }
  .legend-table tr {
    cursor: pointer;
  }
  .legend-table .name-cell {
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 260px;
  }
  .legend-table .name-cell span:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .uplot {
    font-family: inherit;
  }
  .uplot .u-legend {
    display: none; /* own legend */
  }
`;function Fr(e){let t=null,s=null,i=0,n=0,r=null;for(const l of e)null!==l&&(t=null===t?l:Math.min(t,l),s=null===s?l:Math.max(s,l),i+=l,n++,r=l);return{last:r,min:t,max:s,mean:n?i/n:null}}const Lr=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let Or=class extends kt{_defaults(){return{time_range:"1h",height:200,show_legend:!0,legend_mode:"list",fill:!1,fill_opacity:20,line_width:2,stacked:!1,palette:"classic",refresh_interval:30}}_options(e,t){return t.map(t=>({value:t,label:xe(`${e}${t}`,this.hass)}))}_sections(){const e=this._config?.fill||this._config?.stacked;return[{schema:[dt,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"time_range",selector:{select:{mode:"dropdown",custom_value:!0,options:bt}}},{name:"height",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}}},gt,mt,{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}}]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[vt(this.hass),{name:"line_width",selector:{number:{min:.5,max:10,step:.5,mode:"slider",unit_of_measurement:"px"}}},{name:"fill",selector:{boolean:{}}},{name:"stacked",selector:{boolean:{}}},...e?[{name:"fill_opacity",selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}}}]:[]]}]},{title:"section_legend",schema:[{name:"",type:"grid",schema:[{name:"show_legend",selector:{boolean:{}}},{name:"legend_mode",selector:{select:{mode:"dropdown",options:this._options("legend_mode_",["list","table"])}}}]},{name:"legend_values",selector:{select:{multiple:!0,mode:"list",options:this._options("legend_value_",["last","min","max","mean"])}}},_t]},{title:"section_advanced",schema:[{name:"",type:"grid",schema:[ft,{name:"step",selector:{text:{}}}]}]}]}_renderExtra(){return j`
      <div class="section-title">${xe("section_queries",this.hass)}</div>
      <div class="helper">${xe("helper_series_query",this.hass)}. ${xe("helper_name_series",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Lr}
        .itemTitle=${xe("query_n",this.hass)}
        .addLabel=${xe("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value.map(({fill:e,...t})=>t);this._updateConfig({series:t})}}
      ></prometheus-list-editor>
    `}};Or=e([de("prometheus-timeseries-card-editor")],Or);let Hr=class extends we{constructor(){super(...arguments),this._data={times:[],series:[]},this._cursorIdx=null,this._hidden=new Set,this._chartSignature=""}static get styles(){return[ve,o`${l('.uplot, .uplot *, .uplot *::before, .uplot *::after {box-sizing: border-box;}.uplot {font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;width: min-content;}.u-title {text-align: center;font-size: 18px;font-weight: bold;}.u-wrap {position: relative;user-select: none;}.u-over, .u-under {position: absolute;}.u-under {overflow: hidden;}.uplot canvas {display: block;position: relative;width: 100%;height: 100%;}.u-axis {position: absolute;}.u-legend {font-size: 14px;margin: auto;text-align: center;}.u-inline {display: block;}.u-inline * {display: inline-block;}.u-inline tr {margin-right: 16px;}.u-legend th {font-weight: 600;}.u-legend th > * {vertical-align: middle;display: inline-block;}.u-legend .u-marker {width: 1em;height: 1em;margin-right: 4px;background-clip: padding-box !important;}.u-inline.u-live th::after {content: ":";vertical-align: middle;}.u-inline:not(.u-live) .u-value {display: none;}.u-series > * {padding: 4px;}.u-series th {cursor: pointer;}.u-legend .u-off > * {opacity: 0.3;}.u-select {background: rgba(0,0,0,0.07);position: absolute;pointer-events: none;}.u-cursor-x, .u-cursor-y {position: absolute;left: 0;top: 0;pointer-events: none;will-change: transform;}.u-hz .u-cursor-x, .u-vt .u-cursor-y {height: 100%;border-right: 1px dashed #607D8B;}.u-hz .u-cursor-y, .u-vt .u-cursor-x {width: 100%;border-bottom: 1px dashed #607D8B;}.u-cursor-pt {position: absolute;top: 0;left: 0;border-radius: 50%;border: 0 solid;pointer-events: none;will-change: transform;/*this has to be !important since we set inline "background" shorthand */background-clip: padding-box !important;}.u-axis.u-off, .u-select.u-off, .u-cursor-x.u-off, .u-cursor-y.u-off, .u-cursor-pt.u-off {display: none;}')}`,Dr]}static getStubConfig(){return{type:"custom:prometheus-timeseries-card",title:"Prometheus",time_range:"1h",series:[{query:"up",name:"{{job}} {{instance}}"}]}}static getConfigElement(){return document.createElement("prometheus-timeseries-card-editor")}setConfig(e){const t=Array.isArray(e.series)?e.series:[];super.setConfig({...e,series:t}),this._destroyChart()}_hasQuery(){return Boolean(this._config?.series?.some(e=>e&&e.query&&e.query.trim()))}getCardSize(){return Math.ceil(((this._config?.height||200)+100)/50)}disconnectedCallback(){super.disconnectedCallback(),this._destroyChart()}updated(e){if(super.updated(e),!this._data.times.length||!this._chartContainer)return;const t=this._data.series.map(e=>`${e.key}|${e.color}`).join(",");this._chart&&t===this._chartSignature?(e.has("_data")||e.has("_hidden"))&&(this._chart.setData(this._aligned()),this._data.series.forEach((e,t)=>this._chart.setSeries(t+1,{show:!this._hidden.has(e.key)}))):(this._destroyChart(),this._chartSignature=t,this._initChart())}_aligned(){return function(e,t,s){const i=t?function(e,t){const s=[];return e.map(e=>t.has(e.key)?e.values.map(()=>null):e.values.map((e,t)=>(s[t]=(s[t]||0)+(e??0),null===e?null:s[t])))}(e.series,s):e.series.map(e=>e.values);return[e.times,...i]}(this._data,Boolean(this._config.stacked),this._hidden)}_destroyChart(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._chart?.destroy(),this._chart=void 0,this._chartSignature=""}_cssVar(e,t){return getComputedStyle(this).getPropertyValue(e).trim()||t}_fmt(e){return null==e?"-":We(e,this._config.decimals,this._config.unit)}_initChart(){if(!this._chartContainer||!this._config)return;const e=this._config,t=this._chartContainer.clientWidth||400,s=e.height||200,i=this._cssVar("--secondary-text-color","#888"),n=this._cssVar("--divider-color","rgba(127,127,127,0.2)"),r=e.line_width??2,l=e.fill||e.stacked||e.series.some(e=>e.fill),o=Math.max(0,Math.min(100,e.fill_opacity??20))/100,a=[{}];this._data.series.forEach(e=>{var t,s;a.push({label:e.label,stroke:e.color,width:r,fill:l?(t=e.color,s=o,/^#[0-9a-f]{6}$/i.test(t)?t+Math.round(255*s).toString(16).padStart(2,"0"):t):void 0,spanGaps:!0,show:!this._hidden.has(e.key),points:{show:!1}})});const c=[{stroke:i,grid:{stroke:n,width:1},ticks:{stroke:n,width:1}},{stroke:i,size:70,grid:{stroke:n,width:1},ticks:{stroke:n,width:1},values:(e,t)=>t.map(e=>null==e?"":this._fmt(e))}],h={width:t,height:s,series:a,axes:c,legend:{show:!1},scales:{y:{range:(t,s,i)=>{const n=e.min??(e.stacked?Math.min(0,s):s),r=e.max??i;return n===r?[n-1,r+1]:[n,r]}}},cursor:{points:{size:6}},hooks:{setCursor:[e=>this._cursorIdx=e.cursor.idx??null]}};this._chart=new zr(h,this._aligned(),this._chartContainer),this._resizeObserver=new ResizeObserver(e=>{for(const t of e)t.target===this._chartContainer&&this._chart&&t.contentRect.width>0&&this._chart.setSize({width:t.contentRect.width,height:this._config.height||200})}),this._resizeObserver.observe(this._chartContainer)}async _fetchData(){const e=this._config.series;try{this._loading=!0;const{start:t,end:s}=function(e){const t=Math.floor(Date.now()/1e3);let s=t-3600;const i=String(e).trim().match(/^(\d+)([smhdw])$/);if(i){const e=parseInt(i[1],10);let n=0;switch(i[2]){case"s":n=e;break;case"m":n=60*e;break;case"h":n=3600*e;break;case"d":n=86400*e;break;case"w":n=604800*e}s=t-n}return{start:s,end:t}}(this._config.time_range||"1h"),i=this._config.step?String(this._config.step):Ze(t,s),n=await Promise.all(e.map(e=>e.query&&e.query.trim()?this._client.rangeQuery(e.query,t,s,i):Promise.resolve(null)));this._data=function(e,t,s,i){const n=[],r=new Set;e.forEach((e,s)=>{const l=t[s],o=l.name?.trim(),a=o&&o.includes("{{")?o:i,c=o&&!o.includes("{{")?o:void 0,h=tt(e,a,c);h.forEach((e,i)=>{const o=!a&&!c&&t.length>1&&!e.label?`Series ${s+1}`:e.label,u=new Map;for(const[t,s]of e.points)u.set(t,s),r.add(t);n.push({key:`${s}:${i}:${o}`,label:o,explicit:1===h.length?l.color:void 0,points:u})})});const l=n.slice(0,100),o=Array.from(r).sort((e,t)=>e-t),a=l.map((e,t)=>{const i=o.map(t=>e.points.has(t)?e.points.get(t):null);return{key:e.key,label:e.label,color:nt(t,l.length,s,e.explicit),values:i,stats:Fr(i)}});return{times:o,series:a}}(n,e,this._config.palette,this._config.legend_format),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1}}_toggle(e,t){const s=new Set(this._hidden),i=this._data.series.map(e=>e.key);if(t.ctrlKey||t.metaKey||t.shiftKey)s.has(e)?s.delete(e):s.add(e);else{const t=s.size===i.length-1&&!s.has(e);s.clear(),t||i.filter(t=>t!==e).forEach(e=>s.add(e))}this._hidden=s}_current(e){return null!==this._cursorIdx?e.values[this._cursorIdx]??null:e.stats.last}render(){if(!this._hasQuery())return this.renderPlaceholder("no_series");const e=this._data.times.length>0;let t=K;return this._error?t=j`<div class="overlay error-state">${this._error}</div>`:e||(t=j`<div class="overlay">
        ${this._loading?j`<div class="loading-state"></div>`:j`<div class="placeholder-state">${xe("no_data",this._hass)}</div>`}
      </div>`),j`
      <ha-card>
        ${this._config.title?j`<div class="header">${this._config.title}</div>`:K}
        <div class="chart-container" style="min-height: ${e?this._config.height||200:0}px"></div>
        ${t}
        ${!1!==this._config.show_legend&&e?this._renderLegend():K}
      </ha-card>
    `}_renderLegendTable(e){const t=e.length?e:["last"];return j`
      <div class="legend-table-wrap">
        <table class="legend-table">
          <thead>
            <tr>
              <th></th>
              ${t.map(e=>j`<th>${xe(`legend_value_${e}`,this._hass)}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this._data.series.map(e=>j`
                <tr class=${this._hidden.has(e.key)?"hidden":""} @click=${t=>this._toggle(e.key,t)}>
                  <td>
                    <div class="name-cell" title=${e.label}>
                      <span class="legend-color" style="background:${e.color}"></span><span>${e.label}</span>
                    </div>
                  </td>
                  ${t.map(t=>j`<td>${this._fmt("last"===t?this._current(e):e.stats[t])}</td>`)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}_renderLegend(){const e=this._config.legend_values||[];return"table"===this._config.legend_mode?this._renderLegendTable(e):j`
      <div class="legend">
        ${this._data.series.map(t=>j`
            <div
              class="legend-item ${this._hidden.has(t.key)?"hidden":""}"
              title=${t.label}
              @click=${e=>this._toggle(t.key,e)}
            >
              <div class="legend-color" style="background-color: ${t.color}"></div>
              <span class="legend-name">${t.label}</span>
              ${e.length?e.map(e=>j`<span class="legend-value"
                      >${xe(`legend_value_${e}`,this._hass)}:
                      ${this._fmt("last"===e?this._current(t):t.stats[e])}</span
                    >`):j`<span class="legend-value">${this._fmt(this._current(t))}</span>`}
            </div>
          `)}
      </div>
    `}};e([ge()],Hr.prototype,"_data",void 0),e([ge()],Hr.prototype,"_cursorIdx",void 0),e([ge()],Hr.prototype,"_hidden",void 0),e([function(e){return(t,s,i)=>((e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s))(t,s,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}(".chart-container")],Hr.prototype,"_chartContainer",void 0),Hr=e([de("prometheus-timeseries-card")],Hr);const qr=o`
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
`,Nr=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let Rr=class extends kt{_defaults(){return{orientation:"horizontal",show_values:!0,bar_height:24,refresh_interval:30,sort:"desc",palette:"classic",color_mode:"thresholds"}}_options(e,t){return t.map(t=>({value:t,label:xe(`${e}${t}`,this.hass)}))}_sections(){return[{schema:[dt,pt,{name:"",type:"grid",schema:[_t,{name:"group_by",selector:{text:{}}}]}]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"orientation",selector:{select:{mode:"dropdown",options:this._options("",["horizontal","vertical"])}}},{name:"show_values",selector:{boolean:{}}},gt,mt,{name:"sort",selector:{select:{mode:"dropdown",options:this._options("sort_",["desc","asc","name","none"])}}},{name:"limit",selector:{number:{min:1,max:100,mode:"box"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},{name:"bar_height",selector:{number:{min:4,max:80,mode:"box",unit_of_measurement:"px"}}}]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[yt(this.hass),vt(this.hass)]}]},{title:"section_advanced",schema:[ft]}]}_renderExtra(){return j`
      <div class="section-title">${xe("section_queries",this.hass)}</div>
      <div class="helper">${xe("helper_series_query",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Nr}
        .itemTitle=${xe("query_n",this.hass)}
        .addLabel=${xe("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({series:t&&t.length?t:void 0})}}
      ></prometheus-list-editor>
      ${this._renderThresholds()}
    `}};Rr=e([de("prometheus-bar-card-editor")],Rr);let Ir=class extends we{constructor(){super(...arguments),this._barData=[],this._calculatedMax=0,this._loaded=!1}static get styles(){return[ve,qr]}static getStubConfig(){return{type:"custom:prometheus-bar-card",name:"Scrape duration",query:"scrape_duration_seconds",group_by:"job",unit:"s",decimals:3,orientation:"horizontal"}}static getConfigElement(){return document.createElement("prometheus-bar-card-editor")}_queries(){const e=[];this._config.query?.trim()&&e.push({query:this._config.query,name:this._config.legend_format});for(const t of this._config.series||[])t?.query?.trim()&&e.push(t);return e}_hasQuery(){return this._queries().length>0}async _fetchData(){const e=this._config;try{this._loading=!0;const t=this._queries(),s=await Promise.all(t.map(e=>this._client.instantQuery(e.query)));let i=[];s.forEach((s,n)=>{const r=t[n],l=r.name&&r.name.includes("{{")?r.name:void 0,o=et(s,l);for(const t of o){if(null===t.value)continue;let s=Ve(t.metric,l,e.group_by);r.name&&!l&&(s=o.length>1?`${r.name} ${s}`:r.name),i.push({label:s,value:t.value,color:"",explicitColor:1===o.length?r.color:void 0})}});const n=e.sort||"desc";"desc"===n?i.sort((e,t)=>t.value-e.value):"asc"===n?i.sort((e,t)=>e.value-t.value):"name"===n&&i.sort((e,t)=>e.label.localeCompare(t.label,void 0,{numeric:!0})),e.limit&&e.limit>0&&(i=i.slice(0,e.limit));const r=i.reduce((e,t)=>Math.max(e,t.value),0);this._calculatedMax=e.max||r||100;const l="series"!==e.color_mode&&e.thresholds?.length;i.forEach((t,s)=>{const n=nt(s,i.length,e.palette,t.explicitColor);t.color=l?Je(t.value,e.thresholds,n):n}),this._barData=i,this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}render(){if(!this._hasQuery())return this.renderPlaceholder();let e;return e=this._error?j`<div class="error-state">${this._error}</div>`:this._barData.length>0?this._renderBars():this._loaded?j`<div class="placeholder-state">${xe("no_data",this._hass)}</div>`:j`<div class="loading-state"></div>`,j`
      <ha-card>
        ${this._config.name?j`<div class="header">${this._config.name}</div>`:K}
        <div class="body">${e}</div>
      </ha-card>
    `}_fmt(e){return We(e,this._config.decimals,this._config.unit)}_renderBars(){const e=this._calculatedMax||1,t=!1!==this._config.show_values;if("vertical"===this._config.orientation)return j`
        <div class="bars-container-vertical">
          ${this._barData.map(s=>{const i=Math.min(100,Math.max(0,s.value/e*100));return j`
              <div class="bar-col">
                ${t?j`<div class="bar-col-value">${this._fmt(s.value)}</div>`:K}
                <div class="bar-col-track">
                  <div class="bar-col-fill" style="height: ${i}%; background-color: ${s.color};"></div>
                </div>
                <div class="bar-col-label" title="${s.label}">${s.label}</div>
              </div>
            `})}
        </div>
      `;const s=this._config.bar_height||24;return j`
      <div class="bars-container-horizontal">
        ${this._barData.map(i=>{const n=Math.min(100,Math.max(0,i.value/e*100));return j`
            <div class="bar-row">
              <div class="bar-label" title="${i.label}">${i.label}</div>
              <div class="bar-track" style="height: ${s}px;">
                <div class="bar-fill" style="width: ${n}%; background-color: ${i.color};"></div>
              </div>
              ${t?j`<div class="bar-value">${this._fmt(i.value)}</div>`:K}
            </div>
          `})}
      </div>
    `}};e([ge()],Ir.prototype,"_barData",void 0),e([ge()],Ir.prototype,"_calculatedMax",void 0),e([ge()],Ir.prototype,"_loaded",void 0),Ir=e([de("prometheus-bar-card")],Ir);const Ur=[{type:"prometheus-stat-card",key:"stat"},{type:"prometheus-gauge-card",key:"gauge"},{type:"prometheus-timeseries-card",key:"timeseries"},{type:"prometheus-bar-card",key:"bar"}],Wr=window;Wr.customCards=Wr.customCards||[];for(const e of Ur)Wr.customCards.some(t=>t.type===e.type)||Wr.customCards.push({type:e.type,name:xe(`${e.key}_name`),description:xe(`${e.key}_desc`),preview:!0,documentationURL:"https://github.com/1orgar/ha_prom_graph_cards"});console.info("%c PROMETHEUS-CARDS %c v0.3.0 ","color: white; background: #e65100; font-weight: bold;","color: #e65100; background: white; font-weight: bold;");
