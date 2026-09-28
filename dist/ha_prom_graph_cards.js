function e(e,t,s,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,s,l):n(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new r("string"==typeof e?e:e+"",void 0,i),o=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new r(s,e,i)},a=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return l(t)})(e):e,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},b=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);n?.call(this,t),this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(s)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:x).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i;const r=n.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(void 0!==e){const r=this.constructor;if(!1===i&&(n=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??b)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,s,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,A=e=>e,E=k.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,M="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,T=`<${P}>`,B=document,z=()=>B.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,q=Array.isArray,L="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,H=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,j=/^(?:script|style|textarea|title)$/i,U=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),W=U(1),V=U(2),G=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Q=new WeakMap,Y=B.createTreeWalker(B,129);function J(e,t){if(!q(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":3===t?"<math>":"",l=F;for(let t=0;t<s;t++){const s=e[t];let o,a,c=-1,h=0;for(;h<s.length&&(l.lastIndex=h,a=l.exec(s),null!==a);)h=l.lastIndex,l===F?"!--"===a[1]?l=O:void 0!==a[1]?l=N:void 0!==a[2]?(j.test(a[2])&&(n=RegExp("</"+a[2],"g")),l=H):void 0!==a[3]&&(l=H):l===H?">"===a[0]?(l=n??F,c=-1):void 0===a[1]?c=-2:(c=l.lastIndex-a[2].length,o=a[1],l=void 0===a[3]?H:'"'===a[3]?I:R):l===I||l===R?l=H:l===O||l===N?l=F:(l=H,n=void 0);const d=l===H&&e[t+1].startsWith("/>")?" ":"";r+=l===F?s+T:c>=0?(i.push(o),s.slice(0,c)+M+s.slice(c)+C+d):s+C+(-2===c?t:d)}return[J(e,r+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class X{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const l=e.length-1,o=this.parts,[a,c]=Z(e,t);if(this.el=X.createElement(a,s),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Y.nextNode())&&o.length<l;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(M)){const t=c[r++],s=i.getAttribute(e).split(C),l=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:l[2],strings:s,ctor:"."===l[1]?ne:"?"===l[1]?re:"@"===l[1]?le:ie}),i.removeAttribute(e)}else e.startsWith(C)&&(o.push({type:6,index:n}),i.removeAttribute(e));if(j.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],z()),Y.nextNode(),o.push({type:2,index:++n});i.append(e[t],z())}}}else if(8===i.nodeType)if(i.data===P)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)o.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const s=B.createElement("template");return s.innerHTML=e,s}}function ee(e,t,s=e,i){if(t===G)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=D(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=ee(e,n._$AS(e,t.values),n,i)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??B).importNode(t,!0);Y.currentNode=i;let n=Y.nextNode(),r=0,l=0,o=s[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new se(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new oe(n,this,e)),this._$AV.push(t),o=s[++l]}r!==o?.index&&(n=Y.nextNode(),r++)}return Y.currentNode=B,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),D(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>q(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(B.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=X.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new te(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new X(e)),t}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new se(this.O(z()),this.O(z()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=ee(this,e,t,0),r=!D(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const i=e;let l,o;for(e=n[0],l=0;l<n.length-1;l++)o=ee(this,i[s+l],t,l),o===G&&(o=this._$AH[l]),r||=!D(o)||o!==this._$AH[l],o===K?e=K:e!==K&&(e+=(o??"")+n[l+1]),this._$AH[l]=o}r&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ne extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class le extends ie{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??K)===G)return;const s=this._$AH,i=e===K&&s!==K||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const ae=k.litHtmlPolyfillSupport;ae?.(X,se),(k.litHtmlVersions??=[]).push("3.3.3");const ce=globalThis;class he extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=s?.renderBefore??null;i._$litPart$=n=new se(t.insertBefore(z(),e),e,void 0,s??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}he._$litElement$=!0,he.finalized=!0,ce.litElementHydrateSupport?.({LitElement:he});const de=ce.litElementPolyfillSupport;de?.({LitElement:he}),(ce.litElementVersions??=[]).push("4.2.2");const ue=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:b},me=(e=pe,t,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const n=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,n,e,!0,s)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];t.call(this,s),this.requestUpdate(i,n,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function fe(e){return(t,s)=>"object"==typeof s?me(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function ge(e){return fe({...e,state:!0,attribute:!1})}class _e{constructor(e,t){this.hass=e,this.entryId=t}_msg(e,t={}){const s={type:`prometheus_dashboard/${e}`};this.entryId&&(s.entry_id=this.entryId);for(const[e,i]of Object.entries(t))void 0!==i&&(s[e]=i);return s}async instantQuery(e,t){return this.hass.callWS(this._msg("query",{query:e,time:t}))}async rangeQuery(e,t,s,i){return this.hass.callWS(this._msg("query_range",{query:e,start:t,end:s,step:i}))}async getLabels(){return(await this.hass.callWS(this._msg("labels"))).data}async getLabelValues(e){return(await this.hass.callWS(this._msg("label_values",{label:e}))).data}async getMetadata(e){return(await this.hass.callWS(this._msg("metadata",{metric:e}))).data}async getSeries(e){return(await this.hass.callWS(this._msg("series",{match:e}))).data}static async getEntries(e){return e.callWS({type:"prometheus_dashboard/entries"})}}const ve=o`
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

  /* "Transparent background" option: no plate, no shadow, no border */
  :host([transparent]) ha-card {
    background: none;
    box-shadow: none;
    border: none;
    --ha-card-border-width: 0;
    backdrop-filter: none;
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
`,ye={entry_id:"Prometheus server",query:"PromQL query",name:"Name",title:"Title",icon:"Icon",unit:"Unit",decimals:"Decimals",refresh_interval:"Refresh interval (s)",min:"Min",max:"Max",arc_width:"Arc width",sparkline:"Show sparkline",sparkline_hours:"Sparkline range (hours)",time_range:"Time range",step:"Step (s, empty = auto)",fill:"Fill area",show_legend:"Show legend",height:"Chart height (px)",orientation:"Orientation",show_values:"Show values",bar_height:"Bar height (px)",value:"Value",color:"Color",section_display:"Display",section_advanced:"Advanced",section_thresholds:"Thresholds",section_series:"Series",helper_entry_id:"Leave empty to use the first configured server",helper_unit:"Values are scaled within the dimension (B → KiB → MiB, W → kW, s → min → h). You can also type a custom suffix",helper_thresholds:"The color of the highest threshold not greater than the value is used",add_threshold:"Add threshold",add_series:"Add series",remove:"Remove",series_n:"Series {n}",horizontal:"Horizontal",vertical:"Vertical",no_query:"Set a PromQL query in the card editor",no_series:"Add at least one series in the card editor",no_data:"No data",stat_name:"Prometheus Stat",stat_desc:"Single Prometheus metric value with optional sparkline",gauge_name:"Prometheus Gauge",gauge_desc:"Radial gauge with threshold colors",timeseries_name:"Prometheus Time Series",timeseries_desc:"Grafana-like line/area chart for one or more PromQL queries",bar_name:"Prometheus Bar Chart",bar_desc:"Bar chart grouped by a Prometheus label",legend_format:"Legend format",helper_legend_format:"Grafana syntax: {{instance}} {{job}}. Empty = metric{labels}",helper_name_series:"Series name or legend format, e.g. {{device}} rx",palette:"Color scheme",palette_classic:"Classic palette (Grafana)","palette_green-yellow-red":"Green-Yellow-Red (by series)",palette_blues:"Blues (by series)",palette_greens:"Greens (by series)",palette_reds:"Reds (by series)",palette_purples:"Purples (by series)",palette_single:"Single color (theme)",color_mode:"Color by",color_mode_thresholds:"Thresholds",color_mode_series:"Series palette",line_width:"Line width",fill_opacity:"Fill opacity (%)",sparkline_fill:"Sparkline gradient",reduce:"Several series",reduce_none:"Show each series",reduce_sum:"Sum",reduce_avg:"Average",reduce_min:"Min",reduce_max:"Max",show_labels:"Show series labels",stacked:"Stack series",legend_mode:"Legend mode",legend_mode_list:"List",legend_mode_table:"Table",legend_values:"Legend values",legend_value_last:"Last",legend_value_min:"Min",legend_value_max:"Max",legend_value_mean:"Mean",sort:"Sort",sort_desc:"Value, descending",sort_asc:"Value, ascending",sort_name:"Name",sort_none:"As returned",limit:"Max bars",section_legend:"Legend",section_colors:"Colors",section_queries:"Queries",add_query:"Add query",query_n:"Query {n}",helper_series_query:"A query may return many series; each gets its own color and legend entry",transparent:"Transparent background",show_current:"Show current / hovered value",current:"Current",layout:"Layout",layout_default:"Value with icon",layout_tiles:"Colored tiles (Grafana)",tile_style:"Tile background",tile_style_gradient:"Gradient",tile_style_solid:"Solid",tile_height:"Tile height",tile_min_width:"Tile min width",timeline_name:"Prometheus State Timeline",timeline_desc:"Grafana-like state timeline: value changes over time as colored bands",pie_name:"Prometheus Pie Chart",pie_desc:"Pie / donut chart, one slice per returned series",row_height:"Row height",merge_values:"Merge equal values",section_mappings:"Value mappings",helper_mappings:"Exact value (e.g. 1) or range from..to → text and color. Unmapped values use thresholds or the palette",add_mapping:"Add mapping",from:"From",to:"To",text:"Text",helper_timeline_query:"Each returned series is a row. Name: plain text or {{label}}",helper_pie_query:"Instant query; each returned series is a slice. Name: plain text or {{label}}",pie_type:"Type",pie_type_donut:"Donut",pie_type_pie:"Pie",donut_width:"Donut width",show_total:"Total in the center",size:"Size",legend_position:"Legend position",legend_position_right:"Right",legend_position_bottom:"Bottom",legend_pie_value:"Value",legend_pie_percent:"Percent",other:"Other",total:"Total"},xe={en:ye,ru:{entry_id:"Сервер Prometheus",query:"Запрос PromQL",name:"Название",title:"Заголовок",icon:"Иконка",unit:"Единица измерения",decimals:"Знаков после запятой",refresh_interval:"Интервал обновления (с)",min:"Минимум",max:"Максимум",arc_width:"Толщина дуги",sparkline:"Показывать мини-график",sparkline_hours:"Период мини-графика (ч)",time_range:"Период",step:"Шаг (с, пусто = авто)",fill:"Заливка области",show_legend:"Показывать легенду",height:"Высота графика (px)",orientation:"Ориентация",show_values:"Показывать значения",bar_height:"Высота столбца (px)",value:"Значение",color:"Цвет",section_display:"Отображение",section_advanced:"Дополнительно",section_thresholds:"Пороги",section_series:"Серии",helper_entry_id:"Оставьте пустым, чтобы использовать первый настроенный сервер",helper_unit:"Значение масштабируется в пределах размерности (B → KiB → MiB, W → kW, s → мин → ч). Можно ввести свой суффикс",helper_thresholds:"Используется цвет наибольшего порога, не превышающего значение",add_threshold:"Добавить порог",add_series:"Добавить серию",remove:"Удалить",series_n:"Серия {n}",horizontal:"Горизонтально",vertical:"Вертикально",no_query:"Укажите запрос PromQL в редакторе карточки",no_series:"Добавьте хотя бы одну серию в редакторе карточки",no_data:"Нет данных",stat_name:"Prometheus: значение",stat_desc:"Одно значение метрики Prometheus с мини-графиком",gauge_name:"Prometheus: индикатор",gauge_desc:"Круговой индикатор с цветовыми порогами",timeseries_name:"Prometheus: временной ряд",timeseries_desc:"График в стиле Grafana для одного или нескольких запросов PromQL",bar_name:"Prometheus: столбцы",bar_desc:"Столбчатая диаграмма с группировкой по метке Prometheus",legend_format:"Формат легенды",helper_legend_format:"Синтаксис Grafana: {{instance}} {{job}}. Пусто = metric{labels}",helper_name_series:"Имя серии или формат легенды, например {{device}} rx",palette:"Цветовая схема",palette_classic:"Классическая палитра (Grafana)","palette_green-yellow-red":"Зелёный-жёлтый-красный (по сериям)",palette_blues:"Синие (по сериям)",palette_greens:"Зелёные (по сериям)",palette_reds:"Красные (по сериям)",palette_purples:"Фиолетовые (по сериям)",palette_single:"Один цвет (тема)",color_mode:"Цвет по",color_mode_thresholds:"Порогам",color_mode_series:"Палитре серий",line_width:"Толщина линии",fill_opacity:"Прозрачность заливки (%)",sparkline_fill:"Градиент под мини-графиком",reduce:"Несколько серий",reduce_none:"Показать каждую",reduce_sum:"Сумма",reduce_avg:"Среднее",reduce_min:"Минимум",reduce_max:"Максимум",show_labels:"Подписи серий",stacked:"Накопление (stack)",legend_mode:"Вид легенды",legend_mode_list:"Список",legend_mode_table:"Таблица",legend_values:"Значения в легенде",legend_value_last:"Последнее",legend_value_min:"Мин",legend_value_max:"Макс",legend_value_mean:"Среднее",sort:"Сортировка",sort_desc:"По значению, убыв.",sort_asc:"По значению, возр.",sort_name:"По имени",sort_none:"Как вернул Prometheus",limit:"Максимум столбцов",section_legend:"Легенда",section_colors:"Цвета",section_queries:"Запросы",add_query:"Добавить запрос",query_n:"Запрос {n}",helper_series_query:"Запрос может вернуть много серий — у каждой свой цвет и строка в легенде",transparent:"Прозрачный фон",show_current:"Показывать текущее / выделенное значение",current:"Текущее",layout:"Вид",layout_default:"Значение с иконкой",layout_tiles:"Цветные плашки (Grafana)",tile_style:"Фон плашки",tile_style_gradient:"Градиент",tile_style_solid:"Сплошной",tile_height:"Высота плашки",tile_min_width:"Мин. ширина плашки",timeline_name:"Prometheus: шкала состояний",timeline_desc:"Шкала состояний как в Grafana: изменения значения во времени цветными полосами",pie_name:"Prometheus: круговая диаграмма",pie_desc:"Круговая / кольцевая диаграмма, сектор на каждую серию",row_height:"Высота строки",merge_values:"Объединять одинаковые значения",section_mappings:"Сопоставление значений",helper_mappings:"Точное значение (например 1) или диапазон от..до → текст и цвет. Остальные значения — по порогам или палитре",add_mapping:"Добавить сопоставление",from:"От",to:"До",text:"Текст",helper_timeline_query:"Каждая серия — отдельная строка. Название: текст или {{label}}",helper_pie_query:"Мгновенный запрос; каждая серия — сектор. Название: текст или {{label}}",pie_type:"Тип",pie_type_donut:"Кольцо",pie_type_pie:"Круг",donut_width:"Толщина кольца",show_total:"Сумма в центре",size:"Размер",legend_position:"Положение легенды",legend_position_right:"Справа",legend_position_bottom:"Снизу",legend_pie_value:"Значение",legend_pie_percent:"Процент",other:"Прочее",total:"Всего"}};function be(e,t,s={}){const i=xe[function(e){return(e?.locale?.language||e?.language||("undefined"!=typeof localStorage?localStorage.getItem("selectedLanguage")?.replace(/"/g,""):null)||("undefined"!=typeof navigator?navigator.language:"en")||"en").split("-")[0].toLowerCase()}(t)]||ye;let n=i[e]??ye[e]??e;for(const[e,t]of Object.entries(s))n=n.replace(`{${e}}`,String(t));return n}class we extends he{constructor(){super(...arguments),this._loading=!1,this._connected=!1}setConfig(e){if(!e||!e.type)throw new Error("Invalid configuration");this._config=e,this._error=void 0,this.toggleAttribute("transparent",Boolean(e.transparent)),this._restart()}set hass(e){const t=!this._hass;this._hass=e,t&&this._restart()}get hass(){return this._hass}connectedCallback(){super.connectedCallback(),this._connected=!0,this._restart()}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._stopAutoRefresh()}_hasQuery(){return Boolean(this._config?.query&&this._config.query.trim())}get _client(){const e=this._config.entry_id||void 0;return this._cachedClient&&this._cachedClient.entryId===e||(this._cachedClient=new _e(this._hass,e)),this._cachedClient}async _safeFetch(){if(this._hass&&this._config&&this._hasQuery())try{await this._fetchData()}catch(e){this._error=this._formatError(e),this._loading=!1}}_formatError(e){return e?"string"==typeof e?e:"unknown_command"===e.code?"Prometheus Dashboard integration is not installed or not loaded":e.message||e.code||"Error fetching data":"Error"}_restart(){this._hass&&this._config&&this._connected&&(this._startAutoRefresh(),this._safeFetch())}_startAutoRefresh(){this._stopAutoRefresh();const e=Number(this._config.refresh_interval)||30;this._interval=window.setInterval(()=>this._safeFetch(),1e3*Math.max(5,e))}_stopAutoRefresh(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}shouldUpdate(e){return Boolean(this._config)&&super.shouldUpdate(e)}getCardSize(){return 3}renderError(){return W`
      <ha-card>
        <div class="error-state">${this._error}</div>
      </ha-card>
    `}renderLoading(){return W`
      <ha-card>
        <div class="loading-state"></div>
      </ha-card>
    `}renderPlaceholder(e="no_query"){return W`
      <ha-card>
        <div class="placeholder-state">${be(e,this._hass)}</div>
      </ha-card>
    `}}function $e(e,t){if(!Number.isFinite(e))return String(e);if(null==t||Number.isNaN(t)){const t=Math.abs(e),s=0===t?0:Math.min(6,Math.max(0,2-Math.floor(Math.log10(t))));return String(parseFloat(e.toFixed(s)))}return e.toFixed(Math.max(0,Math.min(10,t)))}we.styles=ve,e([ge()],we.prototype,"_config",void 0),e([ge()],we.prototype,"_error",void 0),e([ge()],we.prototype,"_loading",void 0);const ke=(e,t="",s="")=>({prefix:s,text:e,suffix:t});function Ae(e,t,s=0,i=""){return(n,r)=>{if(0===n||!Number.isFinite(n))return ke($e(n,r),t[s],i);let l=Math.floor(Math.log(Math.abs(n))/Math.log(e));return l=Math.max(-s,Math.min(t.length-1-s,l)),ke($e(n/Math.pow(e,l),r),t[l+s],i)}}const Ee=["p","n","µ","m","","k","M","G","T","P","E"];function Se(e,t=""){return Ae(1e3,Ee.map(t=>` ${t}${e}`),Ee.indexOf(t))}function Me(e){return(t,s)=>ke($e(t,s),e)}function Ce(e,t=0){return Ae(1024,e.map(e=>` ${e}`),t)}function Pe(e,t=0){return Ae(1e3,e.map(e=>` ${e}`),t)}function Te(e){return Ae(1e3,["","K","M","B","T"].map(t=>` ${t}${e}`))}function Be(e,t=!1){const s=Ae(1e3,["","K","M","B","T"]);return(i,n)=>{const r=s(i,n);return t?ke(r.text,`${r.suffix} ${e}`):ke(r.text,r.suffix,e)}}const ze=[[" ns",1e-9],[" µs",1e-6],[" ms",.001],[" s",1],[" min",60],[" hour",3600],[" day",86400],[" week",604800],[" year",31536e3]];function De(e){return(t,s)=>{const i=t*e,n=Math.abs(i);let r=ze.find(([,t])=>t===e)||ze[3];if(n>0){for(const e of ze)n>=e[1]&&(r=e);n<ze[0][1]&&(r=ze[0])}return ke($e(i/r[1],s),r[0])}}const qe=[["y",31536e3],["w",604800],["d",86400],["h",3600],["m",60],["s",1]];function Le(e){return t=>{let s=Math.abs(t*e);const i=t<0?"-":"";if(s<1)return ke(`${i}${Math.round(1e3*s)}ms`);const n=[];for(const[e,t]of qe){if(s>=t||n.length&&n.length<3){const i=Math.floor(s/t);s-=i*t,i>0&&n.push(`${i}${e}`)}if(n.length>=3)break}return ke(i+(n.join(" ")||"0s"))}}function Fe(e){return t=>{const s=Math.abs(t)<1e11?1e3*t:t,i=new Date(s);if(Number.isNaN(i.getTime()))return ke(String(t));if("iso"===e)return ke(i.toISOString());if("local"===e)return ke(i.toLocaleString());const n=(s-Date.now())/1e3,r=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),l=Math.abs(n),[o,a]=l<60?["second",1]:l<3600?["minute",60]:l<86400?["hour",3600]:l<2592e3?["day",86400]:l<31536e3?["month",2592e3]:["year",31536e3];return ke(r.format(Math.round(n/a),o))}}function Oe(e,t){return s=>ke(s?e:t)}const Ne=[["Misc",[["none","Number",(e,t)=>ke($e(e,t))],["short","Short (K, M, B)",Ae(1e3,[""," K"," Mil"," Bil"," Tri"])],["sci","Scientific notation",(e,t)=>ke(e.toExponential(t??2))],["percent","Percent (0-100)",Me("%")],["percentunit","Percent (0.0-1.0)",(e,t)=>ke($e(100*e,t),"%")],["humidity","Humidity (%H)",Me("%H")],["dB","Decibel",Me(" dB")],["ppm","Parts-per-million (ppm)",Me(" ppm")],["bool_yes_no","Yes / No",Oe("Yes","No")],["bool_on_off","On / Off",Oe("On","Off")],["bool","True / False",Oe("True","False")]]],["Data",[["bytes","bytes (IEC)",Ce(["B","KiB","MiB","GiB","TiB","PiB","EiB"])],["decbytes","bytes (SI)",Pe(["B","kB","MB","GB","TB","PB","EB"])],["bits","bits (IEC)",Ce(["b","Kib","Mib","Gib","Tib","Pib"])],["decbits","bits (SI)",Pe(["b","kb","Mb","Gb","Tb","Pb"])],["kbytes","kibibytes",Ce(["B","KiB","MiB","GiB","TiB","PiB"],1)],["mbytes","mebibytes",Ce(["B","KiB","MiB","GiB","TiB","PiB"],2)],["gbytes","gibibytes",Ce(["B","KiB","MiB","GiB","TiB","PiB"],3)]]],["Data rate",[["binBps","bytes/sec (IEC)",Ce(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"])],["Bps","bytes/sec (SI)",Pe(["B/s","kB/s","MB/s","GB/s","TB/s"])],["binbps","bits/sec (IEC)",Ce(["b/s","Kib/s","Mib/s","Gib/s","Tib/s"])],["bps","bits/sec (SI)",Pe(["b/s","kb/s","Mb/s","Gb/s","Tb/s"])],["KiBs","kibibytes/sec",Ce(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"],1)],["MiBs","mebibytes/sec",Ce(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"],2)],["pps","packets/sec",Pe(["p/s","kp/s","Mp/s","Gp/s"])]]],["Throughput",[["ops","ops/sec (ops)",Te("ops")],["reqps","requests/sec (rps)",Te("req/s")],["rps","reads/sec (rps)",Te("rd/s")],["wps","writes/sec (wps)",Te("wr/s")],["iops","I/O ops/sec (iops)",Te("io/s")],["opm","ops/min (opm)",Te("ops/min")],["eps","events/sec",Te("evt/s")]]],["Time",[["ns","nanoseconds (ns)",De(1e-9)],["µs","microseconds (µs)",De(1e-6)],["ms","milliseconds (ms)",De(.001)],["s","seconds (s)",De(1)],["m","minutes (m)",De(60)],["h","hours (h)",De(3600)],["d","days (d)",De(86400)],["dtdurations","duration (s)",Le(1)],["dtdurationms","duration (ms)",Le(.001)],["hertz","Hertz (1/s)",Se("Hz")]]],["Date & time",[["dateTimeAsLocal","Local date/time",Fe("local")],["dateTimeAsIso","ISO 8601",Fe("iso")],["dateTimeFromNow","From now",Fe("fromNow")]]],["Energy",[["watt","Watt (W)",Se("W")],["kwatt","Kilowatt (kW)",Se("W","k")],["voltamp","Volt-ampere (VA)",Se("VA")],["watth","Watt-hour (Wh)",Se("Wh")],["kwatth","Kilowatt-hour (kWh)",Se("Wh","k")],["joule","Joule (J)",Se("J")],["volt","Volt (V)",Se("V")],["mvolt","Millivolt (mV)",Se("V","m")],["amp","Ampere (A)",Se("A")],["mamp","Milliampere (mA)",Se("A","m")],["ohm","Ohm (Ω)",Se("Ω")]]],["Temperature",[["celsius","Celsius (°C)",Me("°C")],["fahrenheit","Fahrenheit (°F)",Me("°F")],["kelvin","Kelvin (K)",Me(" K")]]],["Pressure",[["pressurembar","Millibars",Se("bar","m")],["pressurebar","Bars",Se("bar")],["pressurehpa","Hectopascals",Me(" hPa")],["pressurekpa","Kilopascals",Me(" kPa")],["pressurepsi","PSI",Me(" psi")]]],["Length & area",[["lengthmm","millimeter (mm)",Se("m","m")],["lengthm","meter (m)",Se("m")],["lengthkm","kilometer (km)",Se("m","k")],["areaM2","Square meters (m²)",Me(" m²")]]],["Mass & volume",[["massmg","milligram (mg)",Se("g","m")],["massg","gram (g)",Se("g")],["masskg","kilogram (kg)",Se("g","k")],["mlitre","millilitre (mL)",Se("L","m")],["litre","litre (L)",Se("L")],["m3","cubic meter (m³)",Me(" m³")]]],["Velocity & flow",[["velocityms","meters/second (m/s)",Me(" m/s")],["velocitykmh","kilometers/hour (km/h)",Me(" km/h")],["flowlpm","Litre/min (L/min)",Me(" L/min")],["flowcms","Cubic meter/sec (m³/s)",Me(" m³/s")]]],["Currency",[["currencyUSD","Dollars ($)",Be("$")],["currencyEUR","Euro (€)",Be("€")],["currencyRUB","Rubles (₽)",Be("₽",!0)]]]],He=Ne.flatMap(([e,t])=>t.map(([t,s,i])=>({id:t,label:s,category:e,fn:i}))),Re=new Map(He.map(e=>[e.id,e])),Ie={"%":"percent",B:"bytes",seconds:"s","bytes/s":"binBps"};function je(e,t,s){if(null==e||Number.isNaN(e))return{prefix:"",text:"-",suffix:""};const i=function(e){if(e)return Re.get(e)||Re.get(Ie[e])}(t);return i?i.fn(e,s):{prefix:"",text:$e(e,s),suffix:t?` ${t}`:""}}function Ue(e,t,s){const i=je(e,s,t);return`${i.prefix}${i.text}${i.suffix}`}function We(e,t,s){if(t&&t.trim())return t.replace(/\{\{\s*([\w.]+)\s*\}\}/g,(t,s)=>e[s]??"");const{__name__:i,...n}=e,r=Object.entries(n);if(!r.length)return s||i||"Value";const l=r.map(([e,t])=>`${e}="${t}"`).join(", ");return i?`${i}{${l}}`:`{${l}}`}function Ve(e,t,s){if(t&&t.trim())return We(e,t);const i=Object.keys(e).filter(e=>"__name__"!==e);return 1===i.length?e[i[0]]:i.length>1?We(e):e.__name__||"Value"}const Ge=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7"],Ke={green:"#73BF69",yellow:"#FADE2A",orange:"#FF9830",red:"#F2495C",blue:"#5794F2",purple:"#B877D9","dark-green":"#37872D","dark-red":"#C4162A",text:"var(--primary-text-color)"},Qe={"green-yellow-red":["#73BF69","#A0D468","#FADE2A","#FFB357","#FF9830","#F2495C"],blues:["#C0D8FF","#8AB8FF","#5794F2","#3274D9","#1F60C4"],greens:["#C8F2C2","#96D98D","#73BF69","#56A64B","#37872D"],reds:["#FFA6B0","#FF7383","#F2495C","#E02F44","#C4162A"],purples:["#DEB6F2","#CA95E5","#B877D9","#A352CC","#8F3BB8"]};function Ye(e){if(e)return Ke[e]||e}function Je(e,t,s){if(!t||0===t.length)return s||Ge[0];const i=[...t].sort((e,t)=>t.value-e.value);for(const t of i)if(e>=t.value)return Ye(t.color);return Ye(i[i.length-1].color)||s||Ge[0]}function Ze(e){const t=Math.floor(Date.now()/1e3);let s=t-3600;const i=String(e).trim().match(/^(\d+)([smhdw])$/);if(i){const e=parseInt(i[1],10);let n=0;switch(i[2]){case"s":n=e;break;case"m":n=60*e;break;case"h":n=3600*e;break;case"d":n=86400*e;break;case"w":n=604800*e}s=t-n}return{start:s,end:t}}function Xe(e,t,s=500){const i=t-e;return`${Math.max(1,Math.floor(i/s))}s`}const et=100;function tt(e){if(void 0===e)return null;const t=parseFloat(e);return Number.isFinite(t)?t:null}function st(e,t,s){const i=e?.data;if(!i)return[];if("scalar"===i.resultType||"string"===i.resultType){const e=i.result||[];return[{metric:{},label:s||"Value",value:tt(e[1])}]}return(i.result||[]).slice(0,et).map(e=>({metric:e.metric||{},label:We(e.metric||{},t,s),value:tt(e.value?.[1])}))}function it(e,t,s){return(e?.data?.result||[]).slice(0,et).map(e=>({metric:e.metric||{},label:We(e.metric||{},t,s),points:(e.values||[]).map(([e,t])=>[Number(e),tt(t)])}))}function nt(e){for(let t=e.length-1;t>=0;t--)if(null!==e[t][1])return e[t][1];return null}function rt(e,t){const s=e.filter(e=>null!==e);if(!s.length)return null;switch(t){case"sum":return s.reduce((e,t)=>e+t,0);case"avg":return s.reduce((e,t)=>e+t,0)/s.length;case"min":return Math.min(...s);case"max":return Math.max(...s);default:return s[0]}}function lt(e,t,s,i){return i?Ye(i):"single"===s?"var(--primary-color)":function(e,t,s="classic"){if("classic"===s||!Qe[s])return Ge[e%Ge.length];const i=Qe[s];if(t<=1)return i[Math.floor(i.length/2)];const n=e/(t-1)*(i.length-1);return i[Math.round(n)]}(e,t,s||"classic")}let ot=0,at=class extends he{constructor(){super(...arguments),this.series=[],this.fill=!0,this.height=40,this.lineWidth=2,this._id="pspark-"+ ++ot}render(){const e=this.series.flatMap(e=>e.values.filter(e=>null!==e));if(!e.length)return W``;let t=Math.min(...e),s=Math.max(...e);t===s&&(t-=1,s+=1);const i=s-t,n=this.lineWidth/2/this.height*100,r=this.series.map((e,s)=>{const r=e.values.length,l=[];e.values.forEach((e,s)=>{if(null===e)return;const o=r>1?s/(r-1)*100:50,a=n+(100-2*n)*(1-(e-t)/i);l.push(`${o.toFixed(2)},${a.toFixed(2)}`)});const o=`${this._id}-${s}`,a=this.fill&&1===this.series.length&&l.length>1,c=l[0]?.split(",")[0]??"0",h=l[l.length-1]?.split(",")[0]??"100";return V`
        ${a?V`
            <defs>
              <linearGradient id="${o}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${e.color}" stop-opacity="0.35"></stop>
                <stop offset="100%" stop-color="${e.color}" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
            <polygon points="${c},100 ${l.join(" ")} ${h},100" fill="url(#${o})" stroke="none"></polygon>`:""}
        <polyline points="${l.join(" ")}" stroke="${e.color}" stroke-width="${this.lineWidth}"></polyline>
      `});return W`
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="height: ${this.height}px">${r}</svg>
    `}};at.styles=o`
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
  `,e([fe({attribute:!1})],at.prototype,"series",void 0),e([fe({type:Boolean})],at.prototype,"fill",void 0),e([fe({type:Number})],at.prototype,"height",void 0),e([fe({type:Number,attribute:"line-width"})],at.prototype,"lineWidth",void 0),at=e([ue("prometheus-sparkline")],at);const ct=o`
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
`;function ht(e,t,s,i){i=i||{},s=null==s?{}:s;const n=new CustomEvent(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed,detail:s});return e.dispatchEvent(n),n}function dt(e,t){ht(e,"config-changed",{config:t})}let ut;function pt(e){const t={};for(const[s,i]of Object.entries(e))null!=i&&""!==i&&("number"==typeof i&&Number.isNaN(i)||(t[s]=i));return t}const mt={name:"entry_id",selector:{config_entry:{integration:"prometheus_dashboard"}}},ft={name:"query",required:!0,selector:{text:{multiline:!0}}},gt={name:"refresh_interval",selector:{number:{min:5,max:86400,step:1,mode:"box",unit_of_measurement:"s"}}},_t={name:"transparent",selector:{boolean:{}}};function vt(...e){return{title:"section_advanced",schema:[{name:"",type:"grid",schema:[gt,...e,_t]}]}}const yt={name:"decimals",selector:{number:{min:0,max:6,step:1,mode:"box"}}},xt={name:"unit",selector:{select:{mode:"dropdown",custom_value:!0,options:He.map(e=>({value:e.id,label:`${e.category} › ${e.label}`}))}}},bt={name:"legend_format",selector:{text:{}}};function wt(e){return{name:"palette",selector:{select:{mode:"dropdown",options:["classic","green-yellow-red","blues","greens","reds","purples","single"].map(t=>({value:t,label:be(`palette_${t}`,e)}))}}}}function $t(e){return{name:"color_mode",selector:{select:{mode:"dropdown",options:["thresholds","series"].map(t=>({value:t,label:be(`color_mode_${t}`,e)}))}}}}const kt=["15m","30m","1h","3h","6h","12h","24h","2d","7d","30d"],At="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";let Et=class extends he{constructor(){super(...arguments),this.items=[],this.schema=[],this.newItem=()=>({}),this.itemTitle="",this.addLabel="",this._computeLabel=e=>be(e.name,this.hass)}_emit(e){ht(this,"value-changed",{value:e})}_itemChanged(e,t){t.stopPropagation();const s=[...this.items],i={...t.detail.value};for(const e of Object.keys(i))""!==i[e]&&void 0!==i[e]||delete i[e];s[e]=i,this._emit(s)}_remove(e){const t=[...this.items];t.splice(e,1),this._emit(t)}_add(){this._emit([...this.items,this.newItem()])}render(){return W`
      ${this.items.map((e,t)=>W`
          <div class="item">
            <div class="item-header">
              <span>${this.itemTitle?this.itemTitle.replace("{n}",String(t+1)):K}</span>
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
        <ha-svg-icon slot="start" .path=${At}></ha-svg-icon>
        <ha-svg-icon slot="icon" .path=${At}></ha-svg-icon>
        ${this.addLabel}
      </ha-button>
    `}};Et.styles=o`
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
  `,e([fe({attribute:!1})],Et.prototype,"hass",void 0),e([fe({attribute:!1})],Et.prototype,"items",void 0),e([fe({attribute:!1})],Et.prototype,"schema",void 0),e([fe({attribute:!1})],Et.prototype,"newItem",void 0),e([fe()],Et.prototype,"itemTitle",void 0),e([fe()],Et.prototype,"addLabel",void 0),Et=e([ue("prometheus-list-editor")],Et);const St=[{name:"",type:"grid",schema:[{name:"value",required:!0,selector:{number:{mode:"box",step:"any"}}},{name:"color",required:!0,selector:{text:{type:"color"}}}]}];class Mt extends he{constructor(){super(...arguments),this._ready=!1,this._computeLabel=e=>be(e.name,this.hass),this._computeHelper=e=>{const t=`helper_${e.name}`,s=be(t,this.hass);return s===t?void 0:s}}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),(customElements.get("ha-form")&&customElements.get("ha-selector")?Promise.resolve():(ut||(ut=(async()=>{try{const e=await(window.loadCardHelpers?.());if(!e)return;const t=await e.createCardElement({type:"entities",entities:[]});await(t?.constructor?.getConfigElement?.())}catch(e){console.warn("prometheus-cards: failed to preload HA form components",e)}})()),ut)).then(()=>{this._ready=!0})}_defaults(){return{}}_renderExtra(){return K}_renderThresholds(){const e=this._config;return W`
      <div class="section-title">${be("section_thresholds",this.hass)}</div>
      <div class="helper">${be("helper_thresholds",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${e.thresholds||[]}
        .schema=${St}
        .newItem=${()=>({value:0,color:"#73BF69"})}
        .addLabel=${be("add_threshold",this.hass)}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({thresholds:t.length?t:void 0})}}
      ></prometheus-list-editor>
    `}_updateConfig(e){this._config&&(this._config=pt({...this._config,...e}),dt(this,this._config))}_formChanged(e){if(e.stopPropagation(),!this._config)return;const t=e.detail.value,s=pt({...this._config,...t});for(const e of this._sections())for(const i of this._fieldNames(e.schema))i in t&&""!==t[i]&&void 0!==t[i]||delete s[i];const i=this._defaults();for(const[e,t]of Object.entries(i))e in this._config||s[e]!==t||delete s[e];s.type=this._config.type,this._config=s,dt(this,this._config)}_fieldNames(e){const t=[];for(const s of e)s.schema?t.push(...this._fieldNames(s.schema)):t.push(s.name);return t}render(){if(!this.hass||!this._config||!this._ready)return W``;const e={...this._defaults(),...this._config};return W`
      <div class="card-config">
        ${this._sections().map(t=>W`
            ${t.title?W`<div class="section-title">${be(t.title,this.hass)}</div>`:K}
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
    `}}Mt.styles=ct,e([fe({attribute:!1})],Mt.prototype,"hass",void 0),e([ge()],Mt.prototype,"_config",void 0),e([ge()],Mt.prototype,"_ready",void 0);let Ct=class extends Mt{_defaults(){return{refresh_interval:30,sparkline:!1,sparkline_hours:24,line_width:2,sparkline_fill:!0,reduce:"none",layout:"default",tile_style:"gradient",tile_height:110,palette:"classic",color_mode:"thresholds"}}_options(e,t){return t.map(t=>({value:t,label:be(`${e}${t}`,this.hass)}))}_sections(){const e=this._config?.sparkline?[{name:"sparkline_hours",selector:{number:{min:1,max:720,mode:"box",unit_of_measurement:"h"}}},{name:"line_width",selector:{number:{min:1,max:10,step:.5,mode:"slider",unit_of_measurement:"px"}}},{name:"sparkline_fill",selector:{boolean:{}}}]:[],t=this._options("reduce_",["none","sum","avg","min","max"]),s="tiles"===this._config?.layout;return[{schema:[mt,ft,{name:"",type:"grid",schema:[{name:"reduce",selector:{select:{mode:"dropdown",options:t}}},bt]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"layout",selector:{select:{mode:"dropdown",options:this._options("layout_",["default","tiles"])}}},...s?[{name:"tile_style",selector:{select:{mode:"dropdown",options:this._options("tile_style_",["gradient","solid"])}}},{name:"tile_height",selector:{number:{min:50,max:400,mode:"box",unit_of_measurement:"px"}}},{name:"tile_min_width",selector:{number:{min:60,max:600,mode:"box",unit_of_measurement:"px"}}}]:[]]},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},...s?[]:[{name:"icon",selector:{icon:{}}}],xt,yt]},{name:"",type:"grid",schema:[{name:"sparkline",selector:{boolean:{}}},...e]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[$t(this.hass),wt(this.hass)]}]},vt()]}_renderExtra(){return W`${this._renderThresholds()}`}};Ct=e([ue("prometheus-stat-card-editor")],Ct);const Pt=o`
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

  /* ---- tiles layout (Grafana "background gradient") ---- */
  .card-title {
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 500;
  }
  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--tile-min, 140px), 1fr));
    gap: 8px;
  }
  .tile {
    position: relative;
    overflow: hidden;
    border-radius: calc(var(--ha-card-border-radius, 12px) - 4px);
    min-height: var(--tile-height, 110px);
    padding: 10px 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    color: #fff;
    background: var(--tile-bg);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }
  .tile .tile-label {
    font-size: 13px;
    font-weight: 500;
    opacity: 0.9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    z-index: 1;
  }
  .tile .tile-value {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    font-size: var(--tile-font, 32px);
    font-weight: 500;
    line-height: 1.1;
    position: relative;
    z-index: 1;
    white-space: nowrap;
  }
  .tile .tile-value .unit {
    color: inherit;
    opacity: 0.85;
    font-size: 0.55em;
  }
  .tile prometheus-sparkline {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.9;
  }
`;let Tt=class extends we{constructor(){super(...arguments),this._items=[],this._loaded=!1}static get styles(){return[ve,Pt]}static getStubConfig(){return{type:"custom:prometheus-stat-card",name:"Prometheus",query:"up",icon:"mdi:chart-line",decimals:0,sparkline:!0}}static getConfigElement(){return document.createElement("prometheus-stat-card-editor")}async _fetchData(){const e=this._config;try{if(this._loading=!0,e.sparkline){const t=e.sparkline_hours||24,s=Math.floor(Date.now()/1e3),i=s-3600*t,n=await this._client.rangeQuery(e.query,i,s,Xe(i,s,120));this._items=it(n,e.legend_format).map(t=>({label:Ve(t.metric,e.legend_format),value:nt(t.points),history:t.points.map(e=>e[1])}))}else{const t=await this._client.instantQuery(e.query);this._items=st(t,e.legend_format).map(t=>({...t,label:Ve(t.metric,e.legend_format),history:[]}))}this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_displayItems(){const e=this._config.reduce||"none";if("none"===e||this._items.length<=1)return this._items;const t=Math.max(...this._items.map(e=>e.history.length)),s=[];for(let i=0;i<t;i++)s.push(rt(this._items.map(e=>e.history[i]??null),e));const i=rt(this._items.map(e=>e.value),e);return[{label:this._config.name||"",value:i,history:s}]}_color(e,t,s){const i=this._config;if("series"!==i.color_mode&&(i.thresholds?.length||1===s)){const n=s>1?lt(t,s,i.palette):void 0;return Je(e.value??0,i.thresholds||[],n)}return lt(t,s,i.palette)}_renderValue(e,t="value"){const s=je(e,this._config.unit,this._config.decimals),i=s.suffix.trim();return W`<span class=${t}>${s.prefix}${s.text}</span>${i?W`<span class="unit">${i}</span>`:K}`}_renderRows(e){return W`<div class="rows">
      ${e.map((t,s)=>W`<div class="row">
          <span class="dot" style="background: ${this._color(t,s,e.length)}"></span>
          <span class="label" title=${t.label}>${t.label}</span>
          <span class="row-value">${this._renderValue(t.value,"")}</span>
        </div>`)}
    </div>`}_tileBackground(e){return"solid"===this._config.tile_style?e:`linear-gradient(120deg, color-mix(in srgb, ${e} 70%, white) 0%, ${e} 45%, color-mix(in srgb, ${e} 75%, black) 100%)`}_renderTiles(e){const t=this._config,s=e.length?e:[{label:t.name||"",value:null,history:[]}],i=s.length>1,n=[`--tile-min: ${t.tile_min_width||(i?140:200)}px`,`--tile-height: ${t.tile_height||110}px`,`--tile-font: ${i?28:40}px`].join(";");return W`
      <ha-card>
        ${t.name&&i?W`<div class="card-title">${t.name}</div>`:K}
        <div class="tiles" style=${n}>
          ${s.map((e,n)=>{const r=this._color(e,n,s.length),l=i?e.label:t.name||e.label;return W`
              <div class="tile" style="--tile-bg: ${this._tileBackground(r)}">
                ${l?W`<div class="tile-label" title=${l}>${l}</div>`:K}
                <div class="tile-value">${this._renderValue(e.value,"")}</div>
                ${t.sparkline&&e.history.length>1?W`<prometheus-sparkline
                      .series=${[{values:e.history,color:"rgba(255,255,255,0.85)"}]}
                      .fill=${!1!==t.sparkline_fill}
                      .lineWidth=${t.line_width??2}
                      .height=${Math.round(.4*(t.tile_height||110))}
                    ></prometheus-sparkline>`:K}
              </div>
            `})}
        </div>
      </ha-card>
    `}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const t=this._displayItems();if("tiles"===e.layout)return this._renderTiles(t);const s=t.length<=1,i=t[0]||{label:"",value:null,history:[]},n=this._color(i,0,t.length),r=e.thresholds?.length?`--value-color: ${n}`:"",l=e.sparkline&&t.some(e=>e.history.length>1);return W`
      <ha-card>
        <div class="stat-container">
          ${e.icon?W`<div class="icon-container" style="--icon-color: ${n}">
                <ha-icon .icon=${e.icon}></ha-icon>
              </div>`:K}
          <div class="info-container">
            ${e.name?W`<div class="name">${e.name}</div>`:K}
            ${s?W`<div class="value-container" style=${r}>${this._renderValue(i.value)}</div>`:K}
          </div>
        </div>
        ${s?K:this._renderRows(t)}
        ${l?W`<prometheus-sparkline
              .series=${t.map((e,s)=>({values:e.history,color:this._color(e,s,t.length)}))}
              .fill=${!1!==e.sparkline_fill}
              .lineWidth=${e.line_width??2}
              .height=${40}
            ></prometheus-sparkline>`:K}
      </ha-card>
    `}getCardSize(){return"tiles"===this._config?.layout?3:2+Math.min(4,Math.max(0,this._displayItems().length-1))}};e([ge()],Tt.prototype,"_items",void 0),e([ge()],Tt.prototype,"_loaded",void 0),Tt=e([ue("prometheus-stat-card")],Tt);const Bt=o`
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
    bottom: 4%;
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
`;let zt=class extends Mt{_defaults(){return{min:0,max:100,arc_width:8,refresh_interval:30,show_labels:!0,palette:"classic",color_mode:"thresholds"}}_sections(){return[{schema:[mt,ft,{name:"",type:"grid",schema:[bt,{name:"show_labels",selector:{boolean:{}}}]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[$t(this.hass),wt(this.hass)]}]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},xt,yt,{name:"arc_width",selector:{number:{min:2,max:20,step:1,mode:"slider"}}}]}]},vt()]}_renderExtra(){return W`${this._renderThresholds()}`}};zt=e([ue("prometheus-gauge-card-editor")],zt);const Dt=40*Math.PI;let qt=class extends we{constructor(){super(...arguments),this._items=[],this._loaded=!1}static get styles(){return[ve,Bt]}static getStubConfig(){return{type:"custom:prometheus-gauge-card",name:"Prometheus targets up",query:"avg(up) * 100",unit:"percent",min:0,max:100,decimals:0,thresholds:[{value:0,color:"#F2495C"},{value:50,color:"#FADE2A"},{value:90,color:"#73BF69"}]}}static getConfigElement(){return document.createElement("prometheus-gauge-card-editor")}async _fetchData(){try{this._loading=!0;const e=await this._client.instantQuery(this._config.query);this._items=st(e,this._config.legend_format).map(e=>({...e,label:Ve(e.metric,this._config.legend_format)})),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_color(e,t,s){const i=this._config;return"series"===i.color_mode||!i.thresholds?.length&&s>1?lt(t,s,i.palette):Je(e??i.min??0,i.thresholds||[],lt(t,s,i.palette))}_renderGauge(e,t,s){const i=this._config,n=i.min??0,r=i.max??100,l=i.arc_width??8,o=e.value??n,a=Math.min(Math.max(o,n),r),c=r>n?(a-n)/(r-n):0,h=this._color(e.value,t,s),d=je(e.value,i.unit,i.decimals),u=s>1&&!1!==i.show_labels;return W`
      <div class="gauge">
        <div class="gauge-container">
          <svg viewBox="0 0 100 60" class="gauge-svg">
            <path class="arc-bg" d="M 10 50 A 40 40 0 0 1 90 50" fill="none"
              stroke-width="${l}" stroke-linecap="round"></path>
            <path class="arc-fg" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="${h}"
              stroke-width="${l}" stroke-linecap="round"
              stroke-dasharray="${Dt}" stroke-dashoffset="${Dt*(1-c)}"></path>
          </svg>
          <div class="value-container">
            <span class="value">${d.prefix}${d.text}</span>
            ${d.suffix.trim()?W`<span class="unit">${d.suffix.trim()}</span>`:K}
          </div>
        </div>
        ${u?W`<div class="series-label" title=${e.label}>${e.label}</div>`:K}
      </div>
    `}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const t=this._items.length?this._items:[{metric:{},label:"",value:null}],s=t.length>1?"--gauge-min: 110px; --gauge-font: 20px":"--gauge-min: 180px";return W`
      <ha-card>
        ${e.name?W`<div class="name">${e.name}</div>`:K}
        ${this._loaded&&!this._items.length?W`<div class="placeholder-state">${be("no_data",this._hass)}</div>`:W`<div class="gauges" style=${s}>
              ${t.map((e,s)=>this._renderGauge(e,s,t.length))}
            </div>`}
      </ha-card>
    `}getCardSize(){return this._items.length>2?5:3}};e([ge()],qt.prototype,"_items",void 0),e([ge()],qt.prototype,"_loaded",void 0),qt=e([ue("prometheus-gauge-card")],qt);const Lt="u-off",Ft="u-label",Ot="width",Nt="height",Ht="top",Rt="bottom",It="left",jt="right",Ut="#000",Wt=Ut+"0",Vt="mousemove",Gt="mousedown",Kt="mouseup",Qt="mouseenter",Yt="mouseleave",Jt="dblclick",Zt="change",Xt="dppxchange",es="--",ts="undefined"!=typeof window,ss=ts?document:null,is=ts?window:null,ns=ts?navigator:null;let rs,ls;function os(e,t){if(null!=t){let s=e.classList;!s.contains(t)&&s.add(t)}}function as(e,t){let s=e.classList;s.contains(t)&&s.remove(t)}function cs(e,t,s){e.style[t]=s+"px"}function hs(e,t,s,i){let n=ss.createElement(e);return null!=t&&os(n,t),null!=s&&s.insertBefore(n,i),n}function ds(e,t){return hs("div",e,t)}const us=new WeakMap;function ps(e,t,s,i,n){let r="translate("+t+"px,"+s+"px)";r!=us.get(e)&&(e.style.transform=r,us.set(e,r),t<0||s<0||t>i||s>n?os(e,Lt):as(e,Lt))}const ms=new WeakMap;function fs(e,t,s){let i=t+s;i!=ms.get(e)&&(ms.set(e,i),e.style.background=t,e.style.borderColor=s)}const gs=new WeakMap;function _s(e,t,s,i){let n=t+""+s;n!=gs.get(e)&&(gs.set(e,n),e.style.height=s+"px",e.style.width=t+"px",e.style.marginLeft=i?-t/2+"px":0,e.style.marginTop=i?-s/2+"px":0)}const vs={passive:!0},ys={...vs,capture:!0};function xs(e,t,s,i){t.addEventListener(e,s,i?ys:vs)}function bs(e,t,s,i){t.removeEventListener(e,s,vs)}function ws(e,t,s,i){let n;s=s||0;let r=(i=i||t.length-1)<=2147483647;for(;i-s>1;)n=r?s+i>>1:Rs((s+i)/2),t[n]<e?s=n:i=n;return e-t[s]<=t[i]-e?s:i}function $s(e){return(t,s,i)=>{let n=-1,r=-1;for(let r=s;r<=i;r++)if(e(t[r])){n=r;break}for(let n=i;n>=s;n--)if(e(t[n])){r=n;break}return[n,r]}}ts&&function e(){let t=devicePixelRatio;rs!=t&&(rs=t,ls&&bs(Zt,ls,e),ls=matchMedia(`(min-resolution: ${rs-.001}dppx) and (max-resolution: ${rs+.001}dppx)`),xs(Zt,ls,e),is.dispatchEvent(new CustomEvent(Xt)))}();const ks=e=>null!=e,As=e=>null!=e&&e>0,Es=$s(ks),Ss=$s(As);function Ms(e,t,s,i){let n=Gs(e),r=Gs(t);e==t&&(-1==n?(e*=s,t/=s):(e/=s,t*=s));let l=10==s?Ks:Qs,o=1==r?js:Rs,a=(1==n?Rs:js)(l(Hs(e))),c=o(l(Hs(t))),h=Vs(s,a),d=Vs(s,c);return 10==s&&(a<0&&(h=ui(h,-a)),c<0&&(d=ui(d,-c))),i||2==s?(e=h*n,t=d*r):(e=di(e,h),t=hi(t,d)),[e,t]}function Cs(e,t,s,i){let n=Ms(e,t,s,i);return 0==e&&(n[0]=0),0==t&&(n[1]=0),n}const Ps={mode:3,pad:.1},Ts={pad:0,soft:null,mode:0},Bs={min:Ts,max:Ts};function zs(e,t,s,i){return wi(s)?qs(e,t,s):(Ts.pad=s,Ts.soft=i?0:null,Ts.mode=i?3:0,qs(e,t,Bs))}function Ds(e,t){return null==e?t:e}function qs(e,t,s){let i=s.min,n=s.max,r=Ds(i.pad,0),l=Ds(n.pad,0),o=Ds(i.hard,-Js),a=Ds(n.hard,Js),c=Ds(i.soft,Js),h=Ds(n.soft,-Js),d=Ds(i.mode,0),u=Ds(n.mode,0),p=t-e,m=Ks(p),f=Ws(Hs(e),Hs(t)),g=Ks(f),_=Hs(g-m);(p<1e-24||_>10)&&(p=0,0!=e&&0!=t||(p=1e-24,2==d&&c!=Js&&(r=0),2==u&&h!=-Js&&(l=0)));let v=p||f||1e3,y=Ks(v),x=Vs(10,Rs(y)),b=ui(di(e-v*(0==p?0==e?.1:1:r),x/10),24),w=e>=c&&(1==d||3==d&&b<=c||2==d&&b>=c)?c:Js,$=Ws(o,b<w&&e>=w?w:Us(w,b)),k=ui(hi(t+v*(0==p?0==t?.1:1:l),x/10),24),A=t<=h&&(1==u||3==u&&k>=h||2==u&&k<=h)?h:-Js,E=Us(a,k>A&&t<=A?A:Ws(A,k));return $==E&&0==$&&(E=100),[$,E]}const Ls=new Intl.NumberFormat(ts?ns.language:"en-US"),Fs=e=>Ls.format(e),Os=Math,Ns=Os.PI,Hs=Os.abs,Rs=Os.floor,Is=Os.round,js=Os.ceil,Us=Os.min,Ws=Os.max,Vs=Os.pow,Gs=Os.sign,Ks=Os.log10,Qs=Os.log2,Ys=(e,t=1)=>Os.asinh(e/t),Js=1/0;function Zs(e){return 1+(0|Ks((e^e>>31)-(e>>31)))}function Xs(e,t,s){return Us(Ws(e,t),s)}function ei(e){return"function"==typeof e}function ti(e){return ei(e)?e:()=>e}const si=e=>e,ii=(e,t)=>t,ni=e=>null,ri=e=>!0,li=(e,t)=>e==t,oi=/\.\d*?(?=9{6,}|0{6,})/gm,ai=e=>{if(xi(e)||pi.has(e))return e;const t=`${e}`,s=t.match(oi);if(null==s)return e;let i=s[0].length-1;if(-1!=t.indexOf("e-")){let[e,s]=t.split("e");return+`${ai(e)}e${s}`}return ui(e,i)};function ci(e,t){return ai(ui(ai(e/t))*t)}function hi(e,t){return ai(js(ai(e/t))*t)}function di(e,t){return ai(Rs(ai(e/t))*t)}function ui(e,t=0){if(xi(e))return e;let s=10**t,i=e*s*(1+Number.EPSILON);return Is(i)/s}const pi=new Map;function mi(e){return((""+e).split(".")[1]||"").length}function fi(e,t,s,i){let n=[],r=i.map(mi);for(let l=t;l<s;l++){let t=Hs(l),s=ui(Vs(e,l),t);for(let o=0;o<i.length;o++){let a=10==e?+`${i[o]}e${l}`:i[o]*s,c=(l>=0?0:t)+(l>=r[o]?0:r[o]),h=10==e?a:ui(a,c);n.push(h),pi.set(h,c)}}return n}const gi={},_i=[],vi=[null,null],yi=Array.isArray,xi=Number.isInteger;function bi(e){return"string"==typeof e}function wi(e){let t=!1;if(null!=e){let s=e.constructor;t=null==s||s==Object}return t}function $i(e){return null!=e&&"object"==typeof e}const ki=Object.getPrototypeOf(Uint8Array),Ai="__proto__";function Ei(e,t=wi){let s;if(yi(e)){let i=e.find(e=>null!=e);if(yi(i)||t(i)){s=Array(e.length);for(let i=0;i<e.length;i++)s[i]=Ei(e[i],t)}else s=e.slice()}else if(e instanceof ki)s=e.slice();else if(t(e)){s={};for(let i in e)i!=Ai&&(s[i]=Ei(e[i],t))}else s=e;return s}function Si(e){let t=arguments;for(let s=1;s<t.length;s++){let i=t[s];for(let t in i)t!=Ai&&(wi(e[t])?Si(e[t],Ei(i[t])):e[t]=Ei(i[t]))}return e}function Mi(e,t,s){for(let i,n=0,r=-1;n<t.length;n++){let l=t[n];if(l>r){for(i=l-1;i>=0&&null==e[i];)e[i--]=null;for(i=l+1;i<s&&null==e[i];)e[r=i++]=null}}}const Ci="undefined"==typeof queueMicrotask?e=>Promise.resolve().then(e):queueMicrotask;const Pi=["January","February","March","April","May","June","July","August","September","October","November","December"],Ti=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function Bi(e){return e.slice(0,3)}const zi=Ti.map(Bi),Di=Pi.map(Bi),qi={MMMM:Pi,MMM:Di,WWWW:Ti,WWW:zi};function Li(e){return(e<10?"0":"")+e}const Fi={YYYY:e=>e.getFullYear(),YY:e=>(e.getFullYear()+"").slice(2),MMMM:(e,t)=>t.MMMM[e.getMonth()],MMM:(e,t)=>t.MMM[e.getMonth()],MM:e=>Li(e.getMonth()+1),M:e=>e.getMonth()+1,DD:e=>Li(e.getDate()),D:e=>e.getDate(),WWWW:(e,t)=>t.WWWW[e.getDay()],WWW:(e,t)=>t.WWW[e.getDay()],HH:e=>Li(e.getHours()),H:e=>e.getHours(),h:e=>{let t=e.getHours();return 0==t?12:t>12?t-12:t},AA:e=>e.getHours()>=12?"PM":"AM",aa:e=>e.getHours()>=12?"pm":"am",a:e=>e.getHours()>=12?"p":"a",mm:e=>Li(e.getMinutes()),m:e=>e.getMinutes(),ss:e=>Li(e.getSeconds()),s:e=>e.getSeconds(),fff:e=>{return((t=e.getMilliseconds())<10?"00":t<100?"0":"")+t;var t}};function Oi(e,t){t=t||qi;let s,i=[],n=/\{([a-z]+)\}|[^{]+/gi;for(;s=n.exec(e);)i.push("{"==s[0][0]?Fi[s[1]]:s[0]);return e=>{let s="";for(let n=0;n<i.length;n++)s+="string"==typeof i[n]?i[n]:i[n](e,t);return s}}const Ni=(new Intl.DateTimeFormat).resolvedOptions().timeZone;const Hi=e=>e%1==0,Ri=[1,2,2.5,5],Ii=fi(10,-32,0,Ri),ji=fi(10,0,32,Ri),Ui=ji.filter(Hi),Wi=Ii.concat(ji),Vi="{YYYY}",Gi="\n"+Vi,Ki="{M}/{D}",Qi="\n"+Ki,Yi=Qi+"/{YY}",Ji="{aa}",Zi="{h}:{mm}"+Ji,Xi="\n"+Zi,en=":{ss}",tn=null;function sn(e){let t=1e3*e,s=60*t,i=60*s,n=24*i,r=30*n,l=365*n;return[(1==e?fi(10,0,3,Ri).filter(Hi):fi(10,-3,0,Ri)).concat([t,5*t,10*t,15*t,30*t,s,5*s,10*s,15*s,30*s,i,2*i,3*i,4*i,6*i,8*i,12*i,n,2*n,3*n,4*n,5*n,6*n,7*n,8*n,9*n,10*n,15*n,r,2*r,3*r,4*r,6*r,l,2*l,5*l,10*l,25*l,50*l,100*l]),[[l,Vi,tn,tn,tn,tn,tn,tn,1],[28*n,"{MMM}",Gi,tn,tn,tn,tn,tn,1],[n,Ki,Gi,tn,tn,tn,tn,tn,1],[i,"{h}"+Ji,Yi,tn,Qi,tn,tn,tn,1],[s,Zi,Yi,tn,Qi,tn,tn,tn,1],[t,en,Yi+" "+Zi,tn,Qi+" "+Zi,tn,Xi,tn,1],[e,en+".{fff}",Yi+" "+Zi,tn,Qi+" "+Zi,tn,Xi,tn,1]],function(t){return(o,a,c,h,d,u)=>{let p=[],m=d>=l,f=d>=r&&d<l,g=t(c),_=ui(g*e,3),v=un(g.getFullYear(),m?0:g.getMonth(),f||m?1:g.getDate()),y=ui(v*e,3);if(f||m){let s=f?d/r:0,i=m?d/l:0,n=_==y?_:ui(un(v.getFullYear()+i,v.getMonth()+s,1)*e,3),o=new Date(Is(n/e)),a=o.getFullYear(),c=o.getMonth();for(let r=0;n<=h;r++){let l=un(a+i*r,c+s*r,1),o=l-t(ui(l*e,3));n=ui((+l+o)*e,3),n<=h&&p.push(n)}}else{let r=d>=n?n:d,l=y+(Rs(c)-Rs(_))+hi(_-y,r);p.push(l);let m=t(l),f=m.getHours()+m.getMinutes()/s+m.getSeconds()/i,g=d/i,v=u/o.axes[a]._space;for(;l=ui(l+d,1==e?0:3),!(l>h);)if(g>1){let e=Rs(ui(f+g,6))%24,s=t(l).getHours()-e;s>1&&(s=-1),l-=s*i,f=(f+g)%24,ui((l-p[p.length-1])/d,3)*v>=.7&&p.push(l)}else p.push(l)}return p}}]}const[nn,rn,ln]=sn(1),[on,an,cn]=sn(.001);function hn(e,t){return e.map(e=>e.map((s,i)=>0==i||8==i||null==s?s:t(1==i||0==e[8]?s:e[1]+s)))}function dn(e,t){return(s,i,n,r,l)=>{let o,a,c,h,d,u,p=t.find(e=>l>=e[0])||t[t.length-1];return i.map(t=>{let s=e(t),i=s.getFullYear(),n=s.getMonth(),r=s.getDate(),l=s.getHours(),m=s.getMinutes(),f=s.getSeconds(),g=i!=o&&p[2]||n!=a&&p[3]||r!=c&&p[4]||l!=h&&p[5]||m!=d&&p[6]||f!=u&&p[7]||p[1];return o=i,a=n,c=r,h=l,d=m,u=f,g(s)})}}function un(e,t,s){return new Date(e,t,s)}function pn(e,t){return t(e)}fi(2,-53,53,[1]);function mn(e,t){return(s,i,n,r)=>null==r?es:t(e(i))}const fn={show:!0,live:!0,isolate:!1,mount:()=>{},markers:{show:!0,width:2,stroke:function(e,t){let s=e.series[t];return s.width?s.stroke(e,t):s.points.width?s.points.stroke(e,t):null},fill:function(e,t){return e.series[t].fill(e,t)},dash:"solid"},idx:null,idxs:null,values:[]};const gn=[0,0];function _n(e,t,s,i=!0){return e=>{0==e.button&&(!i||e.target==t)&&s(e)}}function vn(e,t,s,i=!0){return e=>{(!i||e.target==t)&&s(e)}}const yn={show:!0,x:!0,y:!0,lock:!1,move:function(e,t,s){return gn[0]=t,gn[1]=s,gn},points:{one:!1,show:function(e,t){let s=e.cursor.points,i=ds(),n=s.size(e,t);cs(i,Ot,n),cs(i,Nt,n);let r=n/-2;cs(i,"marginLeft",r),cs(i,"marginTop",r);let l=s.width(e,t,n);return l&&cs(i,"borderWidth",l),i},size:function(e,t){return e.series[t].points.size},width:0,stroke:function(e,t){let s=e.series[t].points;return s._stroke||s._fill},fill:function(e,t){let s=e.series[t].points;return s._fill||s._stroke}},bind:{mousedown:_n,mouseup:_n,click:_n,dblclick:_n,mousemove:vn,mouseleave:vn,mouseenter:vn},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(e,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(e,t,s,i,n)=>i-n,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},xn={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},bn=Si({},xn,{filter:ii}),wn=Si({},bn,{size:10}),$n=Si({},xn,{show:!1}),kn='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',An="bold "+kn,En={show:!0,scale:"x",stroke:Ut,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:An,side:2,grid:bn,ticks:wn,border:$n,font:kn,lineGap:1.5,rotate:0},Sn={show:!0,scale:"x",auto:!1,sorted:1,min:Js,max:-Js,idxs:[]};function Mn(e,t,s,i,n){return t.map(e=>null==e?"":Fs(e))}function Cn(e,t,s,i,n,r,l){let o=[],a=pi.get(n)||0;for(let e=s=l?s:ui(hi(s,n),a);e<=i;e=ui(e+n,a))o.push(Object.is(e,-0)?0:e);return o}function Pn(e,t,s,i,n,r,l){const o=[],a=e.scales[e.axes[t].scale].log,c=Rs((10==a?Ks:Qs)(s));n=Vs(a,c),10==a&&(n=Wi[ws(n,Wi)]);let h=s,d=n*a;10==a&&(d=Wi[ws(d,Wi)]);do{o.push(h),h+=n,10!=a||pi.has(h)||(h=ui(h,pi.get(n))),h>=d&&(d=(n=h)*a,10==a&&(d=Wi[ws(d,Wi)]))}while(h<=i);return o}function Tn(e,t,s,i,n,r,l){let o=e.scales[e.axes[t].scale].asinh,a=i>o?Pn(e,t,Ws(o,s),i,n):[o],c=i>=0&&s<=0?[0]:[];return(s<-o?Pn(e,t,Ws(o,-i),-s,n):[o]).reverse().map(e=>-e).concat(c,a)}const Bn=/./,zn=/[12357]/,Dn=/[125]/,qn=/1/,Ln=(e,t,s,i)=>e.map((e,n)=>4==t&&0==e||n%i==0&&s.test(e.toExponential()[e<0?1:0])?e:null);function Fn(e,t,s,i,n){let r=e.axes[s],l=r.scale,o=e.scales[l],a=e.valToPos,c=r._space,h=a(10,l),d=a(9,l)-h>=c?Bn:a(7,l)-h>=c?zn:a(5,l)-h>=c?Dn:qn;if(d==qn){let e=Hs(a(1,l)-h);if(e<c)return Ln(t.slice().reverse(),o.distr,d,js(c/e)).reverse()}return Ln(t,o.distr,d,1)}function On(e,t,s,i,n){let r=e.axes[s],l=r.scale,o=r._space,a=e.valToPos,c=Hs(a(1,l)-a(2,l));return c<o?Ln(t.slice().reverse(),3,Bn,js(o/c)).reverse():t}function Nn(e,t,s,i){return null==i?es:null==t?"":Fs(t)}const Hn={show:!0,scale:"y",stroke:Ut,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:An,side:3,grid:bn,ticks:wn,border:$n,font:kn,lineGap:1.5,rotate:0};const Rn={scale:null,auto:!0,sorted:0,min:Js,max:-Js},In=(e,t,s,i,n)=>n,jn={show:!0,auto:!0,sorted:0,gaps:In,alpha:1,facets:[Si({},Rn,{scale:"x"}),Si({},Rn,{scale:"y"})]},Un={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:In,alpha:1,points:{show:function(e,t){let{scale:s,idxs:i}=e.series[0],n=e._data[0],r=e.valToPos(n[i[0]],s,!0),l=e.valToPos(n[i[1]],s,!0),o=Hs(l-r)/(e.series[t].points.space*rs);return i[1]-i[0]<=o},filter:null},values:null,min:Js,max:-Js,idxs:[],path:null,clip:null};function Wn(e,t,s,i,n){return s/10}const Vn={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},Gn=Si({},Vn,{time:!1,ori:1}),Kn={};function Qn(e,t){let s=Kn[e];return s||(s={key:e,plots:[],sub(e){s.plots.push(e)},unsub(e){s.plots=s.plots.filter(t=>t!=e)},pub(e,t,i,n,r,l,o){for(let a=0;a<s.plots.length;a++)s.plots[a]!=t&&s.plots[a].pub(e,t,i,n,r,l,o)}},null!=e&&(Kn[e]=s)),s}function Yn(e,t,s){const i=e.mode,n=e.series[t],r=2==i?e._data[t]:e._data,l=e.scales,o=e.bbox;let a=r[0],c=2==i?r[1]:r[t],h=2==i?l[n.facets[0].scale]:l[e.series[0].scale],d=2==i?l[n.facets[1].scale]:l[n.scale],u=o.left,p=o.top,m=o.width,f=o.height,g=e.valToPosH,_=e.valToPosV;return 0==h.ori?s(n,a,c,h,d,g,_,u,p,m,f,nr,lr,ar,hr,ur):s(n,a,c,h,d,_,g,p,u,f,m,rr,or,cr,dr,pr)}function Jn(e,t){let s=0,i=0,n=Ds(e.bands,_i);for(let e=0;e<n.length;e++){let r=n[e];r.series[0]==t?s=r.dir:r.series[1]==t&&(1==r.dir?i|=1:i|=2)}return[s,1==i?-1:2==i?1:3==i?2:0]}function Zn(e,t,s,i,n){let r=e.mode,l=e.series[t],o=2==r?l.facets[1].scale:l.scale,a=e.scales[o];return-1==n?a.min:1==n?a.max:3==a.distr?1==a.dir?a.min:a.max:0}function Xn(e,t,s,i,n,r){return Yn(e,t,(e,t,l,o,a,c,h,d,u,p,m)=>{let f=e.pxRound;const g=o.dir*(0==o.ori?1:-1),_=0==o.ori?lr:or;let v,y;1==g?(v=s,y=i):(v=i,y=s);let x=f(c(t[v],o,p,d)),b=f(h(l[v],a,m,u)),w=f(c(t[y],o,p,d)),$=f(h(1==r?a.max:a.min,a,m,u)),k=new Path2D(n);return _(k,w,$),_(k,x,$),_(k,x,b),k})}function er(e,t,s,i,n,r){let l=null;if(e.length>0){l=new Path2D;const o=0==t?ar:cr;let a=s;for(let t=0;t<e.length;t++){let s=e[t];if(s[1]>s[0]){let e=s[0]-a;e>0&&o(l,a,i,e,i+r),a=s[1]}}let c=s+n-a,h=10;c>0&&o(l,a,i-h/2,c,i+r+h)}return l}function tr(e,t,s,i,n,r,l){let o=[],a=e.length;for(let c=1==n?s:i;c>=s&&c<=i;c+=n){if(null===t[c]){let h=c,d=c;if(1==n)for(;++c<=i&&null===t[c];)d=c;else for(;--c>=s&&null===t[c];)d=c;let u=r(e[h]),p=d==h?u:r(e[d]),m=h-n;u=l<=0&&m>=0&&m<a?r(e[m]):u;let f=d+n;p=l>=0&&f>=0&&f<a?r(e[f]):p,p>=u&&o.push([u,p])}}return o}function sr(e){return 0==e?si:1==e?Is:t=>ci(t,e)}function ir(e){let t=0==e?nr:rr,s=0==e?(e,t,s,i,n,r)=>{e.arcTo(t,s,i,n,r)}:(e,t,s,i,n,r)=>{e.arcTo(s,t,n,i,r)},i=0==e?(e,t,s,i,n)=>{e.rect(t,s,i,n)}:(e,t,s,i,n)=>{e.rect(s,t,n,i)};return(e,n,r,l,o,a=0,c=0)=>{0==a&&0==c?i(e,n,r,l,o):(a=Us(a,l/2,o/2),c=Us(c,l/2,o/2),t(e,n+a,r),s(e,n+l,r,n+l,r+o,a),s(e,n+l,r+o,n,r+o,c),s(e,n,r+o,n,r,c),s(e,n,r,n+l,r,a),e.closePath())}}const nr=(e,t,s)=>{e.moveTo(t,s)},rr=(e,t,s)=>{e.moveTo(s,t)},lr=(e,t,s)=>{e.lineTo(t,s)},or=(e,t,s)=>{e.lineTo(s,t)},ar=ir(0),cr=ir(1),hr=(e,t,s,i,n,r)=>{e.arc(t,s,i,n,r)},dr=(e,t,s,i,n,r)=>{e.arc(s,t,i,n,r)},ur=(e,t,s,i,n,r,l)=>{e.bezierCurveTo(t,s,i,n,r,l)},pr=(e,t,s,i,n,r,l)=>{e.bezierCurveTo(s,t,n,i,l,r)};function mr(e){return(e,t,s,i,n)=>Yn(e,t,(t,r,l,o,a,c,h,d,u,p,m)=>{let f,g,{pxRound:_,points:v}=t;0==o.ori?(f=nr,g=hr):(f=rr,g=dr);const y=ui(v.width*rs,3);let x=(v.size-v.width)/2*rs,b=ui(2*x,3),w=new Path2D,$=new Path2D,{left:k,top:A,width:E,height:S}=e.bbox;ar($,k-b,A-b,E+2*b,S+2*b);const M=e=>{if(null!=l[e]){let t=_(c(r[e],o,p,d)),s=_(h(l[e],a,m,u));f(w,t+x,s),g(w,t,s,x,0,2*Ns)}};if(n)n.forEach(M);else for(let e=s;e<=i;e++)M(e);return{stroke:y>0?w:null,fill:w,clip:$,flags:3}})}function fr(e){return(t,s,i,n,r,l)=>{i!=n&&(r!=i&&l!=i&&e(t,s,i),r!=n&&l!=n&&e(t,s,n),e(t,s,l))}}const gr=fr(lr),_r=fr(or);function vr(e){const t=Ds(e?.alignGaps,0);return(e,s,i,n)=>Yn(e,s,(r,l,o,a,c,h,d,u,p,m,f)=>{[i,n]=Es(o,i,n);let g,_,v=r.pxRound,y=e=>v(h(e,a,m,u)),x=e=>v(d(e,c,f,p));0==a.ori?(g=lr,_=gr):(g=or,_=_r);const b=a.dir*(0==a.ori?1:-1),w={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},$=w.stroke;let k=!1;if(n-i>=4*m){let t,s,r,c=t=>e.posToVal(t,a.key,!0),h=null,d=null,u=y(l[1==b?i:n]),p=y(l[i]),m=y(l[n]),f=c(1==b?p+1:m-1);for(let e=1==b?i:n;e>=i&&e<=n;e+=b){let i=l[e],n=(1==b?i<f:i>f)?u:y(i),r=o[e];n==u?null!=r?(s=r,null==h?(g($,n,x(s)),t=h=d=s):s<h?h=s:s>d&&(d=s)):null===r&&(k=!0):(null!=h&&_($,u,x(h),x(d),x(t),x(s)),null!=r?(s=r,g($,n,x(s)),h=d=t=s):(h=d=null,null===r&&(k=!0)),u=n,f=c(u+b))}null!=h&&h!=d&&r!=u&&_($,u,x(h),x(d),x(t),x(s))}else for(let e=1==b?i:n;e>=i&&e<=n;e+=b){let t=o[e];null===t?k=!0:null!=t&&g($,y(l[e]),x(t))}let[A,E]=Jn(e,s);if(null!=r.fill||0!=A){let t=w.fill=new Path2D($),o=x(r.fillTo(e,s,r.min,r.max,A)),a=y(l[i]),c=y(l[n]);-1==b&&([c,a]=[a,c]),g(t,c,o),g(t,a,o)}if(!r.spanGaps){let c=[];k&&c.push(...tr(l,o,i,n,b,y,t)),w.gaps=c=r.gaps(e,s,i,n,c),w.clip=er(c,a.ori,u,p,m,f)}return 0!=E&&(w.band=2==E?[Xn(e,s,i,n,$,-1),Xn(e,s,i,n,$,1)]:Xn(e,s,i,n,$,E)),w})}function yr(e,t,s,i,n,r,l=Js){if(e.length>1){let o=null;for(let a=0,c=1/0;a<e.length;a++)if(void 0!==t[a]){if(null!=o){let t=Hs(e[a]-e[o]);t<c&&(c=t,l=Hs(s(e[a],i,n,r)-s(e[o],i,n,r)))}o=a}}return l}function xr(e,t,s,i,n,r){const l=e.length;if(l<2)return null;const o=new Path2D;if(s(o,e[0],t[0]),2==l)i(o,e[1],t[1]);else{let s=Array(l),i=Array(l-1),r=Array(l-1),a=Array(l-1);for(let s=0;s<l-1;s++)r[s]=t[s+1]-t[s],a[s]=e[s+1]-e[s],i[s]=r[s]/a[s];s[0]=i[0];for(let e=1;e<l-1;e++)0===i[e]||0===i[e-1]||i[e-1]>0!=i[e]>0?s[e]=0:(s[e]=3*(a[e-1]+a[e])/((2*a[e]+a[e-1])/i[e-1]+(a[e]+2*a[e-1])/i[e]),isFinite(s[e])||(s[e]=0));s[l-1]=i[l-2];for(let i=0;i<l-1;i++)n(o,e[i]+a[i]/3,t[i]+s[i]*a[i]/3,e[i+1]-a[i]/3,t[i+1]-s[i+1]*a[i]/3,e[i+1],t[i+1])}return o}const br=new Set;function wr(){for(let e of br)e.syncRect(!0)}ts&&(xs("resize",is,wr),xs("scroll",is,wr,!0),xs(Xt,is,()=>{Fr.pxRatio=rs}));const $r=vr(),kr=mr();function Ar(e,t,s,i){return(i?[e[0],e[1]].concat(e.slice(2)):[e[0]].concat(e.slice(1))).map((e,i)=>Er(e,i,t,s))}function Er(e,t,s,i){return Si({},0==t?s:i,e)}function Sr(e,t,s){return null==t?vi:[t,s]}const Mr=Sr;function Cr(e,t,s){return null==t?vi:zs(t,s,.1,!0)}function Pr(e,t,s,i){return null==t?vi:Ms(t,s,e.scales[i].log,!1)}const Tr=Pr;function Br(e,t,s,i){return null==t?vi:Cs(t,s,e.scales[i].log,!1)}const zr=Br;function Dr(e,t,s,i,n){let r=Ws(Zs(e),Zs(t)),l=t-e,o=ws(n/i*l,s);do{let e=s[o],t=i*e/l;if(t>=n&&r+(e<5?pi.get(e):0)<=17)return[e,t]}while(++o<s.length);return[0,0]}function qr(e){let t,s;return[e=e.replace(/(\d+)px/,(e,i)=>(t=Is((s=+i)*rs))+"px"),t,s]}function Lr(e){e.show&&[e.font,e.labelFont].forEach(e=>{let t=ui(e[2]*rs,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function Fr(e,t,s){const i={mode:Ds(e.mode,1)},n=i.mode;function r(e,t,s,i){let n=t.valToPct(e);return i+s*(-1==t.dir?1-n:n)}function l(e,t,s,i){let n=t.valToPct(e);return i+s*(-1==t.dir?n:1-n)}function o(e,t,s,i){return 0==t.ori?r(e,t,s,i):l(e,t,s,i)}i.valToPosH=r,i.valToPosV=l;let a=!1;i.status=0;const c=i.root=ds("uplot");if(null!=e.id&&(c.id=e.id),os(c,e.class),e.title){ds("u-title",c).textContent=e.title}const h=hs("canvas"),d=i.ctx=h.getContext("2d"),u=ds("u-wrap",c);xs("click",u,e=>{if(e.target===m){(Mt!=kt||Ct!=At)&&ts.click(i,e)}},!0);const p=i.under=ds("u-under",u);u.appendChild(h);const m=i.over=ds("u-over",u),f=+Ds((e=Ei(e)).pxAlign,1),g=sr(f);(e.plugins||[]).forEach(t=>{t.opts&&(e=t.opts(i,e)||e)});const _=e.ms||.001,v=i.series=1==n?Ar(e.series||[],Sn,Un,!1):function(e,t){return e.map((e,s)=>0==s?{}:Si({},t,e))}(e.series||[null],jn),y=i.axes=Ar(e.axes||[],En,Hn,!0),x=i.scales={},b=i.bands=e.bands||[];b.forEach(e=>{e.fill=ti(e.fill||null),e.dir=Ds(e.dir,-1)});const w=2==n?v[1].facets[0].scale:v[0].scale,$={axes:function(){for(let e=0;e<y.length;e++){let t=y[e];if(!t.show||!t._show)continue;let s,n,r=t.side,l=r%2,a=t.stroke(i,e),c=0==r||3==r?-1:1,[h,u]=t._found;if(null!=t.label){let o=t.labelGap*c,p=Is((t._lpos+o)*rs);rt(t.labelFont[0],a,"center",2==r?Ht:Rt),d.save(),1==l?(s=n=0,d.translate(p,Is(me+ge/2)),d.rotate((3==r?-Ns:Ns)/2)):(s=Is(pe+fe/2),n=p);let m=ei(t.label)?t.label(i,e,h,u):t.label;d.fillText(m,s,n),d.restore()}if(0==u)continue;let p=x[t.scale],m=0==l?fe:ge,f=0==l?pe:me,_=t._splits,v=2==p.distr?_.map(e=>et[e]):_,b=2==p.distr?et[_[1]]-et[_[0]]:h,w=t.ticks,$=t.border,k=w.show?w.size:0,A=Is(k*rs),E=Is((2==t.alignTo?t._size-k-t.gap:t.gap)*rs),S=t._rotate*-Ns/180,M=g(t._pos*rs),C=M+(A+E)*c;n=0==l?C:0,s=1==l?C:0,rt(t.font[0],a,1==t.align?It:2==t.align?jt:S>0?It:S<0?jt:0==l?"center":3==r?jt:It,S||1==l?"middle":2==r?Ht:Rt);let P=t.font[1]*t.lineGap,T=_.map(e=>g(o(e,p,m,f))),B=t._values;for(let e=0;e<B.length;e++){let t=B[e];if(null!=t){0==l?s=T[e]:n=T[e],t=""+t;let i=-1==t.indexOf("\n")?[t]:t.split(/\n/gm);for(let e=0;e<i.length;e++){let t=i[e];S?(d.save(),d.translate(s,n+e*P),d.rotate(S),d.fillText(t,0,0),d.restore()):d.fillText(t,s,n+e*P)}}}w.show&&mt(T,w.filter(i,v,e,u,b),l,r,M,A,ui(w.width*rs,3),w.stroke(i,e),w.dash,w.cap);let z=t.grid;z.show&&mt(T,z.filter(i,v,e,u,b),l,0==l?2:1,0==l?me:pe,0==l?ge:fe,ui(z.width*rs,3),z.stroke(i,e),z.dash,z.cap),$.show&&mt([M],[1],0==l?1:0,0==l?1:2,1==l?me:pe,1==l?ge:fe,ui($.width*rs,3),$.stroke(i,e),$.dash,$.cap)}Ni("drawAxes")},series:function(){if(He>0){let e=v.some(e=>e._focus)&&Xe!=Me.alpha;e&&(d.globalAlpha=Xe=Me.alpha),v.forEach((e,s)=>{if(s>0&&e.show&&(at(s,!1),at(s,!0),null==e._paths)){let r=Xe;Xe!=e.alpha&&(d.globalAlpha=Xe=e.alpha);let l=2==n?[0,t[s][0].length-1]:function(e){let t=Xs(Re-1,0,He-1),s=Xs(Ie+1,0,He-1);for(;null==e[t]&&t>0;)t--;for(;null==e[s]&&s<He-1;)s++;return[t,s]}(t[s]);e._paths=e.paths(i,s,l[0],l[1]),Xe!=r&&(d.globalAlpha=Xe=r)}}),v.forEach((e,t)=>{if(t>0&&e.show){let s=Xe;Xe!=e.alpha&&(d.globalAlpha=Xe=e.alpha),null!=e._paths&&ct(t,!1);{let s=null!=e._paths?e._paths.gaps:null,n=e.points.show(i,t,Re,Ie,s),r=e.points.filter(i,t,n,s);(n||r)&&(e.points._paths=e.points.paths(i,t,Re,Ie,r),ct(t,!0))}Xe!=s&&(d.globalAlpha=Xe=s),Ni("drawSeries",t)}}),e&&(d.globalAlpha=Xe=1)}}},k=(e.drawOrder||["axes","series"]).map(e=>$[e]);function A(e){const t=3==e.distr?t=>Ks(t>0?t:e.clamp(i,t,e.min,e.max,e.key)):4==e.distr?t=>Ys(t,e.asinh):100==e.distr?t=>e.fwd(t):e=>e;return s=>{let i=t(s),{_min:n,_max:r}=e;return(i-n)/(r-n)}}function E(t){let s=x[t];if(null==s){let i=(e.scales||gi)[t]||gi;if(null!=i.from){E(i.from);let e=Si({},x[i.from],i,{key:t});e.valToPct=A(e),x[t]=e}else{s=x[t]=Si({},t==w?Vn:Gn,i),s.key=t;let e=s.time,r=s.range,l=yi(r);if((t!=w||2==n&&!e)&&(!l||null!=r[0]&&null!=r[1]||(r={min:null==r[0]?Ps:{mode:1,hard:r[0],soft:r[0]},max:null==r[1]?Ps:{mode:1,hard:r[1],soft:r[1]}},l=!1),!l&&wi(r))){let e=r;r=(t,s,i)=>null==s?vi:zs(s,i,e)}s.range=ti(r||(e?Mr:t==w?3==s.distr?Tr:4==s.distr?zr:Sr:3==s.distr?Pr:4==s.distr?Br:Cr)),s.auto=ti(!l&&s.auto),s.clamp=ti(s.clamp||Wn),s._min=s._max=null,s.valToPct=A(s)}}}E("x"),E("y"),1==n&&v.forEach(e=>{E(e.scale)}),y.forEach(e=>{E(e.scale)});for(let t in e.scales)E(t);const S=x[w],M=S.distr;let C,P;0==S.ori?(os(c,"u-hz"),C=r,P=l):(os(c,"u-vt"),C=l,P=r);const T={};for(let e in x){let t=x[e];null==t.min&&null==t.max||(T[e]={min:t.min,max:t.max},t.min=t.max=null)}const B=e.tzDate||(e=>new Date(Is(e/_))),z=e.fmtDate||Oi,D=1==_?ln(B):cn(B),q=dn(B,hn(1==_?rn:an,z)),L=mn(B,pn("{YYYY}-{MM}-{DD} {h}:{mm}{aa}",z)),F=[],O=i.legend=Si({},fn,e.legend),N=i.cursor=Si({},yn,{drag:{y:2==n}},e.cursor),H=O.show,R=N.show,I=O.markers;let j,U,W;O.idxs=F,I.width=ti(I.width),I.dash=ti(I.dash),I.stroke=ti(I.stroke),I.fill=ti(I.fill);let V,G=[],K=[],Q=!1,Y={};if(O.live){const e=v[1]?v[1].values:null;Q=null!=e,V=Q?e(i,1,0):{_:0};for(let e in V)Y[e]=es}if(H)if(j=hs("table","u-legend",c),W=hs("tbody",null,j),O.mount(i,j),Q){U=hs("thead",null,j,W);let e=hs("tr",null,U);for(var J in hs("th",null,e),V)hs("th",Ft,e).textContent=J}else os(j,"u-inline"),O.live&&os(j,"u-live");const Z={show:!0},X={show:!1};const ee=new Map;function te(e,t,s,n=!0){const r=ee.get(t)||{},l=N.bind[e](i,t,s,n);l&&(xs(e,t,r[e]=l),ee.set(t,r))}function se(e,t,s){const i=ee.get(t)||{};for(let s in i)null!=e&&s!=e||(bs(s,t,i[s]),delete i[s]);null==e&&ee.delete(t)}let ie=0,ne=0,re=0,le=0,oe=0,ae=0,ce=oe,he=ae,de=re,ue=le,pe=0,me=0,fe=0,ge=0;i.bbox={};let _e=!1,ve=!1,ye=!1,xe=!1,be=!1,we=!1;function $e(e,t,s){(s||e!=i.width||t!=i.height)&&ke(e,t),_t(!1),ye=!0,ve=!0,Dt()}function ke(e,t){i.width=ie=re=e,i.height=ne=le=t,oe=ae=0,function(){let e=!1,t=!1,s=!1,i=!1;y.forEach((n,r)=>{if(n.show&&n._show){let{side:r,_size:l}=n,o=r%2,a=l+(null!=n.label?n.labelSize:0);a>0&&(o?(re-=a,3==r?(oe+=a,i=!0):s=!0):(le-=a,0==r?(ae+=a,e=!0):t=!0))}}),Le[0]=e,Le[1]=s,Le[2]=t,Le[3]=i,re-=Ne[1]+Ne[3],oe+=Ne[3],le-=Ne[2]+Ne[0],ae+=Ne[0]}(),function(){let e=oe+re,t=ae+le,s=oe,i=ae;function n(n,r){switch(n){case 1:return e+=r,e-r;case 2:return t+=r,t-r;case 3:return s-=r,s+r;case 0:return i-=r,i+r}}y.forEach((e,t)=>{if(e.show&&e._show){let t=e.side;e._pos=n(t,e._size),null!=e.label&&(e._lpos=n(t,e.labelSize))}})}();let s=i.bbox;pe=s.left=ci(oe*rs,.5),me=s.top=ci(ae*rs,.5),fe=s.width=ci(re*rs,.5),ge=s.height=ci(le*rs,.5)}const Ae=3;if(i.setSize=function({width:e,height:t}){$e(e,t)},null==N.dataIdx){let e=N.hover,s=e.skip=new Set(e.skip??[]);s.add(void 0);let i=e.prox=ti(e.prox),n=e.bias??=0;N.dataIdx=(e,r,l,o)=>{if(0==r)return l;let a=l,c=i(e,r,l,o)??Js,h=c>=0&&c<Js,d=0==S.ori?re:le,u=N.left,p=t[0],m=t[r];if(s.has(m[l])){a=null;let e,t=null,i=null;if(0==n||-1==n)for(e=l;null==t&&e-- >0;)s.has(m[e])||(t=e);if(0==n||1==n)for(e=l;null==i&&e++<m.length;)s.has(m[e])||(i=e);if(null!=t||null!=i)if(h){let e=u-(null==t?-1/0:C(p[t],S,d,0)),s=(null==i?1/0:C(p[i],S,d,0))-u;e<=s?e<=c&&(a=t):s<=c&&(a=i)}else a=null==i?t:null==t?i:l-t<=i-l?t:i}else if(h){Hs(u-C(p[l],S,d,0))>c&&(a=null)}return a}}const Ee=e=>{N.event=e};N.idxs=F,N._lock=!1;let Se=N.points;Se.show=ti(Se.show),Se.size=ti(Se.size),Se.stroke=ti(Se.stroke),Se.width=ti(Se.width),Se.fill=ti(Se.fill);const Me=i.focus=Si({},e.focus||{alpha:.3},N.focus),Ce=Me.prox>=0,Pe=Ce&&Se.one;let Te=[],Be=[],ze=[];function De(e,t){let s=Se.show(i,t);if(s instanceof HTMLElement)return os(s,"u-cursor-pt"),os(s,e.class),ps(s,-10,-10,re,le),m.insertBefore(s,Te[t]),s}function qe(e,t){if(1==n||t>0){let t=1==n&&x[e.scale].time,s=e.value;e.value=t?bi(s)?mn(B,pn(s,z)):s||L:s||Nn,e.label=e.label||(t?"Time":"Value")}if(Pe||t>0){e.width=null==e.width?1:e.width,e.paths=e.paths||$r||ni,e.fillTo=ti(e.fillTo||Zn),e.pxAlign=+Ds(e.pxAlign,f),e.pxRound=sr(e.pxAlign),e.stroke=ti(e.stroke||null),e.fill=ti(e.fill||null),e._stroke=e._fill=e._paths=e._focus=null;let t=ui((3+2*(Ws(1,e.width)||1))*1,3),s=e.points=Si({},{size:t,width:Ws(1,.2*t),stroke:e.stroke,space:2*t,paths:kr,_stroke:null,_fill:null},e.points);s.show=ti(s.show),s.filter=ti(s.filter),s.fill=ti(s.fill),s.stroke=ti(s.stroke),s.paths=ti(s.paths),s.pxAlign=e.pxAlign}if(H){let s=function(e,t){if(0==t&&(Q||!O.live||2==n))return vi;let s=[],r=hs("tr","u-series",W,W.childNodes[t]);os(r,e.class),e.show||os(r,Lt);let l=hs("th",null,r);if(I.show){let e=ds("u-marker",l);if(t>0){let s=I.width(i,t);s&&(e.style.border=s+"px "+I.dash(i,t)+" "+I.stroke(i,t)),e.style.background=I.fill(i,t)}}let o=ds(Ft,l);for(var a in e.label instanceof HTMLElement?o.appendChild(e.label):o.textContent=e.label,t>0&&(I.show||(o.style.color=e.width>0?I.stroke(i,t):I.fill(i,t)),te("click",l,t=>{if(N._lock)return;Ee(t);let s=v.indexOf(e);if((t.ctrlKey||t.metaKey)!=O.isolate){let e=v.some((e,t)=>t>0&&t!=s&&e.show);v.forEach((t,i)=>{i>0&&ys(i,e?i==s?Z:X:Z,!0,Ri.setSeries)})}else ys(s,{show:!e.show},!0,Ri.setSeries)},!1),Ce&&te(Qt,l,t=>{N._lock||(Ee(t),ys(v.indexOf(e),qs,!0,Ri.setSeries))},!1)),V){let e=hs("td","u-value",r);e.textContent="--",s.push(e)}return[r,s]}(e,t);G.splice(t,0,s[0]),K.splice(t,0,s[1]),O.values.push(null)}if(R){F.splice(t,0,null);let s=null;Pe?0==t&&(s=De(e,t)):t>0&&(s=De(e,t)),Te.splice(t,0,s),Be.splice(t,0,0),ze.splice(t,0,0)}Ni("addSeries",t)}i.addSeries=function(e,t){t=null==t?v.length:t,e=1==n?Er(e,t,Sn,Un):Er(e,t,{},jn),v.splice(t,0,e),qe(v[t],t)},i.delSeries=function(e){if(v.splice(e,1),H){O.values.splice(e,1),K.splice(e,1);let t=G.splice(e,1)[0];se(null,t.firstChild),t.remove()}R&&(F.splice(e,1),Te.splice(e,1)[0].remove(),Be.splice(e,1),ze.splice(e,1)),Ni("delSeries",e)};const Le=[!1,!1,!1,!1];function Fe(e,t,s,i){let[n,r,l,o]=s,a=t%2,c=0;return 0==a&&(o||r)&&(c=0==t&&!n||2==t&&!l?Is(En.size/3):0),1==a&&(n||l)&&(c=1==t&&!r||3==t&&!o?Is(Hn.size/2):0),c}const Oe=i.padding=(e.padding||[Fe,Fe,Fe,Fe]).map(e=>ti(Ds(e,Fe))),Ne=i._padding=Oe.map((e,t)=>e(i,t,Le,0));let He,Re=null,Ie=null;const je=1==n?v[0].idxs:null;let Ue,We,Ve,Ge,Ke,Qe,Ye,Je,Ze,Xe,et=null,tt=!1;function st(e,s){if(t=null==e?[]:e,i.data=i._data=t,2==n){He=0;for(let e=1;e<v.length;e++)He+=t[e][0].length}else{0==t.length&&(i.data=i._data=t=[[]]),et=t[0],He=et.length;let e=t;if(2==M){e=t.slice();let s=e[0]=Array(He);for(let e=0;e<He;e++)s[e]=e}i._data=t=e}if(_t(!0),Ni("setData"),2==M&&(ye=!0),!1!==s){let e=S;e.auto(i,tt)?it():vs(w,e.min,e.max),xe=xe||N.left>=0,we=!0,Dt()}}function it(){let e,s;tt=!0,1==n&&(He>0?(Re=je[0]=0,Ie=je[1]=He-1,e=t[0][Re],s=t[0][Ie],2==M?(e=Re,s=Ie):e==s&&(3==M?[e,s]=Ms(e,e,S.log,!1):4==M?[e,s]=Cs(e,e,S.log,!1):S.time?s=e+Is(86400/_):[e,s]=zs(e,s,.1,!0))):(Re=je[0]=e=null,Ie=je[1]=s=null)),vs(w,e,s)}function nt(e,t,s,i,n,r){e??=Wt,s??=_i,i??="butt",n??=Wt,r??="round",e!=Ue&&(d.strokeStyle=Ue=e),n!=We&&(d.fillStyle=We=n),t!=Ve&&(d.lineWidth=Ve=t),r!=Ke&&(d.lineJoin=Ke=r),i!=Qe&&(d.lineCap=Qe=i),s!=Ge&&d.setLineDash(Ge=s)}function rt(e,t,s,i){t!=We&&(d.fillStyle=We=t),e!=Ye&&(d.font=Ye=e),s!=Je&&(d.textAlign=Je=s),i!=Ze&&(d.textBaseline=Ze=i)}function lt(e,t,s,n,r=0){if(n.length>0&&e.auto(i,tt)&&(null==t||null==t.min)){let t=Ds(Re,0),i=Ds(Ie,n.length-1),l=null==s.min?function(e,t,s,i=0,n=!1){let r=n?Ss:Es,l=n?As:ks;[t,s]=r(e,t,s);let o=e[t],a=e[t];if(t>-1)if(1==i)o=e[t],a=e[s];else if(-1==i)o=e[s],a=e[t];else for(let i=t;i<=s;i++){let t=e[i];l(t)&&(t<o?o=t:t>a&&(a=t))}return[o??Js,a??-Js]}(n,t,i,r,3==e.distr):[s.min,s.max];e.min=Us(e.min,s.min=l[0]),e.max=Ws(e.max,s.max=l[1])}}i.setData=st;const ot={min:null,max:null};function at(e,t){let s=t?v[e].points:v[e];s._stroke=s.stroke(i,e),s._fill=s.fill(i,e)}function ct(e,s){let n=s?v[e].points:v[e],{stroke:r,fill:l,clip:o,flags:a,_stroke:c=n._stroke,_fill:h=n._fill,_width:u=n.width}=n._paths;u=ui(u*rs,3);let p=null,m=u%2/2;s&&null==h&&(h=u>0?"#fff":c);let f=1==n.pxAlign&&m>0;if(f&&d.translate(m,m),!s){let e=pe-u/2,t=me-u/2,s=fe+u,i=ge+u;p=new Path2D,p.rect(e,t,s,i)}s?dt(c,u,n.dash,n.cap,h,r,l,a,o):function(e,s,n,r,l,o,a,c,h,d,u){let p=!1;0!=h&&b.forEach((m,f)=>{if(m.series[0]==e){let e,g=v[m.series[1]],_=t[m.series[1]],y=(g._paths||gi).band;yi(y)&&(y=1==m.dir?y[0]:y[1]);let x=null;g.show&&y&&function(e,t,s){for(t=Ds(t,0),s=Ds(s,e.length-1);t<=s;){if(null!=e[t])return!0;t++}return!1}(_,Re,Ie)?(x=m.fill(i,f)||o,e=g._paths.clip):y=null,dt(s,n,r,l,x,a,c,h,d,u,e,y),p=!0}}),p||dt(s,n,r,l,o,a,c,h,d,u)}(e,c,u,n.dash,n.cap,h,r,l,a,p,o),f&&d.translate(-m,-m)}const ht=3;function dt(e,t,s,i,n,r,l,o,a,c,h,u){nt(e,t,s,i,n),(a||c||u)&&(d.save(),a&&d.clip(a),c&&d.clip(c)),u?(o&ht)==ht?(d.clip(u),h&&d.clip(h),pt(n,l),ut(e,r,t)):2&o?(pt(n,l),d.clip(u),ut(e,r,t)):1&o&&(d.save(),d.clip(u),h&&d.clip(h),pt(n,l),d.restore(),ut(e,r,t)):(pt(n,l),ut(e,r,t)),(a||c||u)&&d.restore()}function ut(e,t,s){s>0&&(t instanceof Map?t.forEach((e,t)=>{d.strokeStyle=Ue=t,d.stroke(e)}):null!=t&&e&&d.stroke(t))}function pt(e,t){t instanceof Map?t.forEach((e,t)=>{d.fillStyle=We=t,d.fill(e)}):null!=t&&e&&d.fill(t)}function mt(e,t,s,i,n,r,l,o,a,c){let h=l%2/2;1==f&&d.translate(h,h),nt(o,l,a,c,o),d.beginPath();let u,p,m,g,_=n+(0==i||3==i?-r:r);0==s?(p=n,g=_):(u=n,m=_);for(let i=0;i<e.length;i++)null!=t[i]&&(0==s?u=m=e[i]:p=g=e[i],d.moveTo(u,p),d.lineTo(m,g));d.stroke(),1==f&&d.translate(-h,-h)}function ft(e){let t=!0;return y.forEach((s,n)=>{if(!s.show)return;let r=x[s.scale];if(null==r.min)return void(s._show&&(t=!1,s._show=!1,_t(!1)));s._show||(t=!1,s._show=!0,_t(!1));let l=s.side,o=l%2,{min:a,max:c}=r,[h,d]=function(e,t,s,n){let r,l=y[e];if(n<=0)r=[0,0];else{let o=l._space=l.space(i,e,t,s,n);r=Dr(t,s,l._incrs=l.incrs(i,e,t,s,n,o),n,o)}return l._found=r}(n,a,c,0==o?re:le);if(0==d)return;let u=2==r.distr,p=s._splits=s.splits(i,n,a,c,h,d,u),m=2==r.distr?p.map(e=>et[e]):p,f=2==r.distr?et[p[1]]-et[p[0]]:h,g=s._values=s.values(i,s.filter(i,m,n,d,f),n,d,f);s._rotate=2==l?s.rotate(i,g,n,d):0;let _=s._size;s._size=js(s.size(i,g,n,e)),null!=_&&s._size!=_&&(t=!1)}),t}function gt(e){let t=!0;return Oe.forEach((s,n)=>{let r=s(i,n,Le,e);r!=Ne[n]&&(t=!1),Ne[n]=r}),t}function _t(e){v.forEach((t,s)=>{s>0&&(t._paths=null,e&&(1==n?(t.min=null,t.max=null):t.facets.forEach(e=>{e.min=null,e.max=null})))})}let vt,yt,xt,bt,wt,$t,kt,At,Et,St,Mt,Ct,Pt=!1,Tt=!1,Bt=[];function zt(){Tt=!1;for(let e=0;e<Bt.length;e++)Ni(...Bt[e]);Bt.length=0}function Dt(){Pt||(Ci(qt),Pt=!0)}function qt(){if(_e&&(!function(){for(let e in x){let t=x[e];null==T[e]&&(null==t.min||null!=T[w]&&t.auto(i,tt))&&(T[e]=ot)}for(let e in x){let t=x[e];null==T[e]&&null!=t.from&&null!=T[t.from]&&(T[e]=ot)}null!=T[w]&&_t(!0);let e={};for(let t in T){let s=T[t];if(null!=s){let r=e[t]=Ei(x[t],$i);if(null!=s.min)Si(r,s);else if(t!=w||2==n)if(0==He&&null==r.from){let e=r.range(i,null,null,t);r.min=e[0],r.max=e[1]}else r.min=Js,r.max=-Js}}if(He>0){v.forEach((s,r)=>{if(1==n){let n=s.scale,l=T[n];if(null==l)return;let o=e[n];if(0==r){let e=o.range(i,o.min,o.max,n);o.min=e[0],o.max=e[1],Re=ws(o.min,t[0]),Ie=ws(o.max,t[0]),Ie-Re>1&&(t[0][Re]<o.min&&Re++,t[0][Ie]>o.max&&Ie--),s.min=et[Re],s.max=et[Ie]}else s.show&&s.auto&&lt(o,l,s,t[r],s.sorted);s.idxs[0]=Re,s.idxs[1]=Ie}else if(r>0&&s.show&&s.auto){let[i,n]=s.facets,l=i.scale,o=n.scale,[a,c]=t[r],h=e[l],d=e[o];null!=h&&lt(h,T[l],i,a,i.sorted),null!=d&&lt(d,T[o],n,c,n.sorted),s.min=n.min,s.max=n.max}});for(let t in e){let s=e[t],n=T[t];if(null==s.from&&(null==n||null==n.min)){let e=s.range(i,s.min==Js?null:s.min,s.max==-Js?null:s.max,t);s.min=e[0],s.max=e[1]}}}for(let t in e){let s=e[t];if(null!=s.from){let n=e[s.from];if(null==n.min)s.min=s.max=null;else{let e=s.range(i,n.min,n.max,t);s.min=e[0],s.max=e[1]}}}let s={},r=!1;for(let t in e){let i=e[t],n=x[t];if(n.min!=i.min||n.max!=i.max){n.min=i.min,n.max=i.max;let e=n.distr;n._min=3==e?Ks(n.min):4==e?Ys(n.min,n.asinh):100==e?n.fwd(n.min):n.min,n._max=3==e?Ks(n.max):4==e?Ys(n.max,n.asinh):100==e?n.fwd(n.max):n.max,s[t]=r=!0}}if(r){v.forEach((e,t)=>{2==n?t>0&&s.y&&(e._paths=null):s[e.scale]&&(e._paths=null)});for(let e in s)ye=!0,Ni("setScale",e);R&&N.left>=0&&(xe=we=!0)}for(let e in T)T[e]=null}(),_e=!1),ye&&(!function(){let e=!1,t=0;for(;!e;){t++;let s=ft(t),n=gt(t);e=t==Ae||s&&n,e||(ke(i.width,i.height),ve=!0)}}(),ye=!1),ve){if(cs(p,It,oe),cs(p,Ht,ae),cs(p,Ot,re),cs(p,Nt,le),cs(m,It,oe),cs(m,Ht,ae),cs(m,Ot,re),cs(m,Nt,le),cs(u,Ot,ie),cs(u,Nt,ne),h.width=Is(ie*rs),h.height=Is(ne*rs),y.forEach(({_el:e,_show:t,_size:s,_pos:i,side:n})=>{if(null!=e)if(t){let t=n%2==1;cs(e,t?"left":"top",i-(3===n||0===n?s:0)),cs(e,t?"width":"height",s),cs(e,t?"top":"left",t?ae:oe),cs(e,t?"height":"width",t?le:re),as(e,Lt)}else os(e,Lt)}),Ue=We=Ve=Ke=Qe=Ye=Je=Ze=Ge=null,Xe=1,hi(!0),oe!=ce||ae!=he||re!=de||le!=ue){_t(!1);let e=re/de,t=le/ue;if(R&&!xe&&N.left>=0){N.left*=e,N.top*=t,xt&&ps(xt,Is(N.left),0,re,le),bt&&ps(bt,0,Is(N.top),re,le);for(let s=0;s<Te.length;s++){let i=Te[s];null!=i&&(Be[s]*=e,ze[s]*=t,ps(i,js(Be[s]),js(ze[s]),re,le))}}if(us.show&&!be&&us.left>=0&&us.width>0){us.left*=e,us.width*=e,us.top*=t,us.height*=t;for(let e in xi)cs(ms,e,us[e])}ce=oe,he=ae,de=re,ue=le}Ni("setSize"),ve=!1}ie>0&&ne>0&&(d.clearRect(0,0,h.width,h.height),Ni("drawClear"),k.forEach(e=>e()),Ni("draw")),us.show&&be&&(gs(us),be=!1),R&&xe&&(oi(null,!0,!1),xe=!1),O.show&&O.live&&we&&(Zs(),we=!1),a||(a=!0,i.status=1,Ni("ready")),tt=!1,Pt=!1}function Ut(e,s){let n=x[e];if(null==n.from){if(0==He){let t=n.range(i,s.min,s.max,e);s.min=t[0],s.max=t[1]}if(s.min>s.max){let e=s.min;s.min=s.max,s.max=e}if(He>1&&null!=s.min&&null!=s.max&&s.max-s.min<1e-16)return;e==w&&2==n.distr&&He>0&&(s.min=ws(s.min,t[0]),s.max=ws(s.max,t[0]),s.min==s.max&&s.max++),T[e]=s,_e=!0,Dt()}}i.batch=function(e,t=!1){Pt=!0,Tt=t,e(i),qt(),t&&Bt.length>0&&queueMicrotask(zt)},i.redraw=(e,t)=>{ye=t||!1,!1!==e?vs(w,S.min,S.max):Dt()},i.setScale=Ut;let Zt=!1;const ts=N.drag;let ns=ts.x,ls=ts.y;R&&(N.x&&(vt=ds("u-cursor-x",m)),N.y&&(yt=ds("u-cursor-y",m)),0==S.ori?(xt=vt,bt=yt):(xt=yt,bt=vt),Mt=N.left,Ct=N.top);const us=i.select=Si({show:!0,over:!0,left:0,width:0,top:0,height:0},e.select),ms=us.show?ds("u-select",us.over?m:p):null;function gs(e,t){if(us.show){for(let t in e)us[t]=e[t],t in xi&&cs(ms,t,e[t]);!1!==t&&Ni("setSelect")}}function vs(e,t,s){Ut(e,{min:t,max:s})}function ys(e,t,s,r){null!=t.focus&&function(e){if(e!=Bs){let t=null==e,s=1!=Me.alpha;v.forEach((i,r)=>{if(1==n||r>0){let n=t||0==r||r==e;i._focus=t?null:n,s&&function(e,t){v[e].alpha=t,R&&null!=Te[e]&&(Te[e].style.opacity=t);H&&G[e]&&(G[e].style.opacity=t)}(r,n?1:Me.alpha)}}),Bs=e,s&&Dt()}}(e),null!=t.show&&v.forEach((s,i)=>{i>0&&(e==i||null==e)&&(s.show=t.show,function(e){if(v[e].show)H&&as(G[e],Lt);else if(H&&os(G[e],Lt),R){let t=Pe?Te[0]:Te[e];null!=t&&ps(t,-10,-10,re,le)}}(i),2==n?(vs(s.facets[0].scale,null,null),vs(s.facets[1].scale,null,null)):vs(s.scale,null,null),Dt())}),!1!==s&&Ni("setSeries",e,t),r&&Vi("setSeries",i,e,t)}let $s,Ts,Bs;i.setSelect=gs,i.setSeries=ys,i.addBand=function(e,t){e.fill=ti(e.fill||null),e.dir=Ds(e.dir,-1),t=null==t?b.length:t,b.splice(t,0,e)},i.setBand=function(e,t){Si(b[e],t)},i.delBand=function(e){null==e?b.length=0:b.splice(e,1)};const qs={focus:!0};function Ls(e,t,s){let i=x[t];s&&(e=e/rs-(1==i.ori?ae:oe));let n=re;1==i.ori&&(n=le,e=n-e),-1==i.dir&&(e=n-e);let r=i._min,l=r+(i._max-r)*(e/n),o=i.distr;return 3==o?Vs(10,l):4==o?((e,t=1)=>Os.sinh(e)*t)(l,i.asinh):100==o?i.bwd(l):l}function Fs(e,t){cs(ms,It,us.left=e),cs(ms,Ot,us.width=t)}function Rs(e,t){cs(ms,Ht,us.top=e),cs(ms,Nt,us.height=t)}H&&Ce&&te(Yt,j,e=>{N._lock||(Ee(e),null!=Bs&&ys(null,qs,!0,Ri.setSeries))}),i.valToIdx=e=>ws(e,t[0]),i.posToIdx=function(e,s){return ws(Ls(e,w,s),t[0],Re,Ie)},i.posToVal=Ls,i.valToPos=(e,t,s)=>0==x[t].ori?r(e,x[t],s?fe:re,s?pe:0):l(e,x[t],s?ge:le,s?me:0),i.setCursor=(e,t,s)=>{Mt=e.left,Ct=e.top,oi(null,t,s)};let Gs=0==S.ori?Fs:Rs,Qs=1==S.ori?Fs:Rs;function Zs(e,t){if(null!=e&&(e.idxs?e.idxs.forEach((e,t)=>{F[t]=e}):(e=>void 0===e)(e.idx)||F.fill(e.idx),O.idx=F[0]),H&&O.live){for(let e=0;e<v.length;e++)(e>0||1==n&&!Q)&&si(e,F[e]);!function(){if(H&&O.live)for(let e=2==n?1:0;e<v.length;e++){if(0==e&&Q)continue;let t=O.values[e],s=0;for(let i in t)K[e][s++].firstChild.nodeValue=t[i]}}()}we=!1,!1!==t&&Ni("setLegend")}function si(e,s){let n,r=v[e],l=0==e&&2==M?et:t[e];Q?n=r.values(i,e,s)??Y:(n=r.value(i,null==s?null:l[s],e,s),n=null==n?Y:{_:n}),O.values[e]=n}function oi(e,s,r){let l;Et=Mt,St=Ct,[Mt,Ct]=N.move(i,Mt,Ct),N.left=Mt,N.top=Ct,R&&(xt&&ps(xt,Is(Mt),0,re,le),bt&&ps(bt,0,Is(Ct),re,le));let o=Re>Ie;$s=Js,Ts=null;let a=0==S.ori?re:le,c=1==S.ori?re:le;if(Mt<0||0==He||o){l=N.idx=null;for(let e=0;e<v.length;e++){let t=Te[e];null!=t&&ps(t,-10,-10,re,le)}Ce&&ys(null,qs,!0,null==e&&Ri.setSeries),O.live&&(F.fill(l),we=!0)}else{let e,s,r;1==n&&(e=0==S.ori?Mt:Ct,s=Ls(e,w),l=N.idx=ws(s,t[0],Re,Ie),r=C(t[0][l],S,a,0));let o=-10,h=-10,d=0,u=0,p=!0,m="",f="";for(let e=2==n?1:0;e<v.length;e++){let g=v[e],_=F[e],y=null==_?null:1==n?t[e][_]:t[e][1][_],b=N.dataIdx(i,e,l,s),w=null==b?null:1==n?t[e][b]:t[e][1][b];if(we=we||w!=y||b!=_,F[e]=b,e>0&&g.show){let s=null==b?-10:b==l?r:C(1==n?t[0][b]:t[e][0][b],S,a,0),_=null==w?-10:P(w,1==n?x[g.scale]:x[g.facets[1].scale],c,0);if(Ce&&null!=w){let t=1==S.ori?Mt:Ct,s=Hs(Me.dist(i,e,b,_,t));if(s<$s){let i=Me.bias;if(0!=i){let n=Ls(t,g.scale),r=n>=0?1:-1;r==(w>=0?1:-1)&&(1==r?1==i?w>=n:w<=n:1==i?w<=n:w>=n)&&($s=s,Ts=e)}else $s=s,Ts=e}}if(we||Pe){let t,n;0==S.ori?(t=s,n=_):(t=_,n=s);let r,l,a,c,g,v,y=!0,x=Se.bbox;if(null!=x){y=!1;let t=x(i,e);a=t.left,c=t.top,r=t.width,l=t.height}else a=t,c=n,r=l=Se.size(i,e);if(v=Se.fill(i,e),g=Se.stroke(i,e),Pe)e==Ts&&$s<=Me.prox&&(o=a,h=c,d=r,u=l,p=y,m=v,f=g);else{let t=Te[e];null!=t&&(Be[e]=a,ze[e]=c,_s(t,r,l,y),fs(t,v,g),ps(t,js(a),js(c),re,le))}}}}if(Pe){let e=Me.prox;if(we||(null==Bs?$s<=e:$s>e||Ts!=Bs)){let e=Te[0];null!=e&&(Be[0]=o,ze[0]=h,_s(e,d,u,p),fs(e,m,f),ps(e,js(o),js(h),re,le))}}}if(us.show&&Zt)if(null!=e){let[t,s]=Ri.scales,[i,n]=Ri.match,[r,l]=e.cursor.sync.scales,o=e.cursor.drag;if(ns=o._x,ls=o._y,ns||ls){let o,h,d,u,p,{left:m,top:f,width:g,height:_}=e.select,v=e.scales[r].ori,y=e.posToVal,b=null!=t&&i(t,r),w=null!=s&&n(s,l);b&&ns?(0==v?(o=m,h=g):(o=f,h=_),d=x[t],u=C(y(o,r),d,a,0),p=C(y(o+h,r),d,a,0),Gs(Us(u,p),Hs(p-u))):Gs(0,a),w&&ls?(1==v?(o=m,h=g):(o=f,h=_),d=x[s],u=P(y(o,l),d,c,0),p=P(y(o+h,l),d,c,0),Qs(Us(u,p),Hs(p-u))):Qs(0,c)}else ki()}else{let e=Hs(Et-wt),t=Hs(St-$t);if(1==S.ori){let s=e;e=t,t=s}ns=ts.x&&e>=ts.dist,ls=ts.y&&t>=ts.dist;let s,i,n=ts.uni;null!=n?ns&&ls&&(ns=e>=n,ls=t>=n,ns||ls||(t>e?ls=!0:ns=!0)):ts.x&&ts.y&&(ns||ls)&&(ns=ls=!0),ns&&(0==S.ori?(s=kt,i=Mt):(s=At,i=Ct),Gs(Us(s,i),Hs(i-s)),ls||Qs(0,c)),ls&&(1==S.ori?(s=kt,i=Mt):(s=At,i=Ct),Qs(Us(s,i),Hs(i-s)),ns||Gs(0,a)),ns||ls||(Gs(0,0),Qs(0,0))}if(ts._x=ns,ts._y=ls,null==e){if(r){if(null!=Ii){let[e,t]=Ri.scales;Ri.values[0]=null!=e?Ls(0==S.ori?Mt:Ct,e):null,Ri.values[1]=null!=t?Ls(1==S.ori?Mt:Ct,t):null}Vi(Vt,i,Mt,Ct,re,le,l)}if(Ce){let e=r&&Ri.setSeries,t=Me.prox;null==Bs?$s<=t&&ys(Ts,qs,!0,e):$s>t?ys(null,qs,!0,e):Ts!=Bs&&ys(Ts,qs,!0,e)}}we&&(O.idx=l,Zs()),!1!==s&&Ni("setCursor")}i.setLegend=Zs;let ai=null;function hi(e=!1){e?ai=null:(ai=m.getBoundingClientRect(),Ni("syncRect",ai))}function di(e,t,s,i,n,r,l){N._lock||Zt&&null!=e&&0==e.movementX&&0==e.movementY||(fi(e,t,s,i,n,r,l,!1,null!=e),null!=e?oi(null,!0,!0):oi(t,!0,!1))}function fi(e,t,s,n,r,l,a,c,h){if(null==ai&&hi(!1),Ee(e),null!=e)s=e.clientX-ai.left,n=e.clientY-ai.top;else{if(s<0||n<0)return Mt=-10,void(Ct=-10);let[e,i]=Ri.scales,a=t.cursor.sync,[c,h]=a.values,[d,u]=a.scales,[p,m]=Ri.match,f=t.axes[0].side%2==1,g=0==S.ori?re:le,_=1==S.ori?re:le,v=f?l:r,y=f?r:l,b=f?n:s,w=f?s:n;if(s=null!=d?p(e,d)?o(c,x[e],g,0):-10:g*(b/v),n=null!=u?m(i,u)?o(h,x[i],_,0):-10:_*(w/y),1==S.ori){let e=s;s=n,n=e}}!h||null!=t&&t.cursor.event.type!=Vt||((s<=1||s>=re-1)&&(s=ci(s,re)),(n<=1||n>=le-1)&&(n=ci(n,le))),c?(wt=s,$t=n,[kt,At]=N.move(i,s,n)):(Mt=s,Ct=n)}Object.defineProperty(i,"rect",{get:()=>(null==ai&&hi(!1),ai)});const xi={width:0,height:0,left:0,top:0};function ki(){gs(xi,!1)}let Ai,Mi,Pi,Ti;function Bi(e,t,s,n,r,l,o){Zt=!0,ns=ls=ts._x=ts._y=!1,fi(e,t,s,n,r,l,0,!0,!1),null!=e&&(te(Kt,ss,zi,!1),Vi(Gt,i,kt,At,re,le,null));let{left:a,top:c,width:h,height:d}=us;Ai=a,Mi=c,Pi=h,Ti=d}function zi(e,t,s,n,r,l,o){Zt=ts._x=ts._y=!1,fi(e,t,s,n,r,l,0,!1,!0);let{left:a,top:c,width:h,height:d}=us,u=h>0||d>0,p=Ai!=a||Mi!=c||Pi!=h||Ti!=d;if(u&&p&&gs(us),ts.setScale&&u&&p){let e=a,t=h,s=c,i=d;if(1==S.ori&&(e=c,t=d,s=a,i=h),ns&&vs(w,Ls(e,w),Ls(e+t,w)),ls)for(let e in x){let t=x[e];e!=w&&null==t.from&&t.min!=Js&&vs(e,Ls(s+i,e),Ls(s,e))}ki()}else N.lock&&(N._lock=!N._lock,oi(t,!0,null!=e));null!=e&&(se(Kt,ss),Vi(Kt,i,Mt,Ct,re,le,null))}function Di(e,t,s,n,r,l,o){N._lock||(Ee(e),it(),ki(),null!=e&&Vi(Jt,i,Mt,Ct,re,le,null))}function qi(){y.forEach(Lr),$e(i.width,i.height,!0)}xs(Xt,is,qi);const Li={};Li.mousedown=Bi,Li.mousemove=di,Li.mouseup=zi,Li.dblclick=Di,Li.setSeries=(e,t,s,n)=>{-1!=(s=(0,Ri.match[2])(i,t,s))&&ys(s,n,!0,!1)},R&&(te(Gt,m,Bi),te(Vt,m,di),te(Qt,m,e=>{Ee(e),hi(!1)}),te(Yt,m,function(e,t,s,i,n,r,l){if(N._lock)return;Ee(e);let o=Zt;if(Zt){let e,t,s=!0,i=!0,n=10;0==S.ori?(e=ns,t=ls):(e=ls,t=ns),e&&t&&(s=Mt<=n||Mt>=re-n,i=Ct<=n||Ct>=le-n),e&&s&&(Mt=Mt<kt?0:re),t&&i&&(Ct=Ct<At?0:le),oi(null,!0,!0),Zt=!1}Mt=-10,Ct=-10,F.fill(null),oi(null,!0,!0),o&&(Zt=o)}),te(Jt,m,Di),br.add(i),i.syncRect=hi);const Fi=i.hooks=e.hooks||{};function Ni(e,t,s){Tt?Bt.push([e,t,s]):e in Fi&&Fi[e].forEach(e=>{e.call(null,i,t,s)})}(e.plugins||[]).forEach(e=>{for(let t in e.hooks)Fi[t]=(Fi[t]||[]).concat(e.hooks[t])});const Hi=(e,t,s)=>s,Ri=Si({key:null,setSeries:!1,filters:{pub:ri,sub:ri},scales:[w,v[1]?v[1].scale:null],match:[li,li,Hi],values:[null,null]},N.sync);2==Ri.match.length&&Ri.match.push(Hi),N.sync=Ri;const Ii=Ri.key,ji=Qn(Ii);function Vi(e,t,s,i,n,r,l){Ri.filters.pub(e,t,s,i,n,r,l)&&ji.pub(e,t,s,i,n,r,l)}function Gi(){Ni("init",e,t),st(t||e.data,!1),T[w]?Ut(w,T[w]):it(),be=us.show&&(us.width>0||us.height>0),xe=we=!0,$e(e.width,e.height)}return ji.sub(i),i.pub=function(e,t,s,i,n,r,l){Ri.filters.sub(e,t,s,i,n,r,l)&&Li[e](null,t,s,i,n,r,l)},i.destroy=function(){ji.unsub(i),br.delete(i),ee.clear(),bs(Xt,is,qi),c.remove(),j?.remove(),Ni("destroy")},v.forEach(qe),y.forEach(function(e,t){if(e._show=e.show,e.show){let s=e.side%2,n=x[e.scale];null==n&&(e.scale=s?v[1].scale:w,n=x[e.scale]);let r=n.time;e.size=ti(e.size),e.space=ti(e.space),e.rotate=ti(e.rotate),yi(e.incrs)&&e.incrs.forEach(e=>{!pi.has(e)&&pi.set(e,mi(e))}),e.incrs=ti(e.incrs||(2==n.distr?Ui:r?1==_?nn:on:Wi)),e.splits=ti(e.splits||(r&&1==n.distr?D:3==n.distr?Pn:4==n.distr?Tn:Cn)),e.stroke=ti(e.stroke),e.grid.stroke=ti(e.grid.stroke),e.ticks.stroke=ti(e.ticks.stroke),e.border.stroke=ti(e.border.stroke);let l=e.values;e.values=yi(l)&&!yi(l[0])?ti(l):r?yi(l)?dn(B,hn(l,z)):bi(l)?function(e,t){let s=Oi(t);return(t,i,n,r,l)=>i.map(t=>s(e(t)))}(B,l):l||q:l||Mn,e.filter=ti(e.filter||(n.distr>=3&&10==n.log?Fn:3==n.distr&&2==n.log?On:ii)),e.font=qr(e.font),e.labelFont=qr(e.labelFont),e._size=e.size(i,null,t,0),e._space=e._rotate=e._incrs=e._found=e._splits=e._values=null,e._size>0&&(Le[t]=!0,e._el=ds("u-axis",u))}}),s?s instanceof HTMLElement?(s.appendChild(c),Gi()):s(i,Gi):Gi(),i}Fr.assign=Si,Fr.fmtNum=Fs,Fr.rangeNum=zs,Fr.rangeLog=Ms,Fr.rangeAsinh=Cs,Fr.orient=Yn,Fr.pxRatio=rs,Fr.join=function(e,t){if(function(e){let t=e[0][0],s=t.length;for(let i=1;i<e.length;i++){let n=e[i][0];if(n.length!=s)return!1;if(n!=t)for(let e=0;e<s;e++)if(n[e]!=t[e])return!1}return!0}(e)){let t=e[0].slice();for(let s=1;s<e.length;s++)t.push(...e[s].slice(1));return function(e,t=100){const s=e.length;if(s<=1)return!0;let i=0,n=s-1;for(;i<=n&&null==e[i];)i++;for(;n>=i&&null==e[n];)n--;if(n<=i)return!0;const r=Ws(1,Rs((n-i+1)/t));for(let t=e[i],s=i+r;s<=n;s+=r){const i=e[s];if(null!=i){if(i<=t)return!1;t=i}}return!0}(t[0])||(t=function(e){let t=e[0],s=t.length,i=Array(s);for(let e=0;e<i.length;e++)i[e]=e;i.sort((e,s)=>t[e]-t[s]);let n=[];for(let t=0;t<e.length;t++){let r=e[t],l=Array(s);for(let e=0;e<s;e++)l[e]=r[i[e]];n.push(l)}return n}(t)),t}let s=new Set;for(let t=0;t<e.length;t++){let i=e[t][0],n=i.length;for(let e=0;e<n;e++)s.add(i[e])}let i=[Array.from(s).sort((e,t)=>e-t)],n=i[0].length,r=new Map;for(let e=0;e<n;e++)r.set(i[0][e],e);for(let s=0;s<e.length;s++){let l=e[s],o=l[0];for(let e=1;e<l.length;e++){let a=l[e],c=Array(n).fill(void 0),h=t?t[s][e]:1,d=[];for(let e=0;e<a.length;e++){let t=a[e],s=r.get(o[e]);null===t?0!=h&&(c[s]=t,2==h&&d.push(s)):c[s]=t}Mi(c,d,n),i.push(c)}}return i},Fr.fmtDate=Oi,Fr.tzDate=function(e,t){let s;return"UTC"==t||"Etc/UTC"==t?s=new Date(+e+6e4*e.getTimezoneOffset()):t==Ni?s=e:(s=new Date(e.toLocaleString("en-US",{timeZone:t})),s.setMilliseconds(e.getMilliseconds())),s},Fr.sync=Qn;{Fr.addGap=function(e,t,s){let i=e[e.length-1];i&&i[0]==t?i[1]=s:e.push([t,s])},Fr.clipGaps=er;let e=Fr.paths={points:mr};e.linear=vr,e.stepped=function(e){const t=Ds(e.align,1),s=Ds(e.ascDesc,!1),i=Ds(e.alignGaps,0),n=Ds(e.extend,!1);return(e,r,l,o)=>Yn(e,r,(a,c,h,d,u,p,m,f,g,_,v)=>{[l,o]=Es(h,l,o);let y=a.pxRound,{left:x,width:b}=e.bbox,w=e=>y(p(e,d,_,f)),$=e=>y(m(e,u,v,g)),k=0==d.ori?lr:or;const A={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},E=A.stroke,S=d.dir*(0==d.ori?1:-1);let M=$(h[1==S?l:o]),C=w(c[1==S?l:o]),P=C,T=C;n&&-1==t&&(T=x,k(E,T,M)),k(E,C,M);for(let e=1==S?l:o;e>=l&&e<=o;e+=S){let s=h[e];if(null==s)continue;let i=w(c[e]),n=$(s);1==t?k(E,i,M):k(E,P,n),k(E,i,n),M=n,P=i}let B=P;n&&1==t&&(B=x+b,k(E,B,M));let[z,D]=Jn(e,r);if(null!=a.fill||0!=z){let t=A.fill=new Path2D(E),s=$(a.fillTo(e,r,a.min,a.max,z));k(t,B,s),k(t,T,s)}if(!a.spanGaps){let n=[];n.push(...tr(c,h,l,o,S,w,i));let u=a.width*rs/2,p=s||1==t?u:-u,m=s||-1==t?-u:u;n.forEach(e=>{e[0]+=p,e[1]+=m}),A.gaps=n=a.gaps(e,r,l,o,n),A.clip=er(n,d.ori,f,g,_,v)}return 0!=D&&(A.band=2==D?[Xn(e,r,l,o,E,-1),Xn(e,r,l,o,E,1)]:Xn(e,r,l,o,E,D)),A})},e.bars=function(e){const t=Ds((e=e||gi).size,[.6,Js,1]),s=e.align||0,i=e.gap||0;let n=e.radius;n=null==n?[0,0]:"number"==typeof n?[n,0]:n;const r=ti(n),l=1-t[0],o=Ds(t[1],Js),a=Ds(t[2],1),c=Ds(e.disp,gi),h=Ds(e.each,e=>{}),{fill:d,stroke:u}=c;return(e,t,n,p)=>Yn(e,t,(m,f,g,_,v,y,x,b,w,$,k)=>{let A,E,S=m.pxRound,M=s,C=i*rs,P=o*rs,T=a*rs;0==_.ori?[A,E]=r(e,t):[E,A]=r(e,t);const B=_.dir*(0==_.ori?1:-1);let z,D,q,L=0==_.ori?ar:cr,F=0==_.ori?h:(e,t,s,i,n,r,l)=>{h(e,t,s,n,i,l,r)},O=Ds(e.bands,_i).find(e=>e.series[0]==t),N=null!=O?O.dir:0,H=m.fillTo(e,t,m.min,m.max,N),R=S(x(H,v,k,w)),I=$,j=S(m.width*rs),U=!1,W=null,V=null,G=null,K=null;null==d||0!=j&&null==u||(U=!0,W=d.values(e,t,n,p),V=new Map,new Set(W).forEach(e=>{null!=e&&V.set(e,new Path2D)}),j>0&&(G=u.values(e,t,n,p),K=new Map,new Set(G).forEach(e=>{null!=e&&K.set(e,new Path2D)})));let{x0:Q,size:Y}=c;if(null!=Q&&null!=Y){M=1,f=Q.values(e,t,n,p),2==Q.unit&&(f=f.map(t=>e.posToVal(b+t*$,_.key,!0)));let s=Y.values(e,t,n,p);D=2==Y.unit?s[0]*$:y(s[0],_,$,b)-y(0,_,$,b),I=yr(f,g,y,_,$,b,I),q=I-D+C}else I=yr(f,g,y,_,$,b,I),q=I*l+C,D=I-q;q<1&&(q=0),j>=D/2&&(j=0),q<5&&(S=si);let J=q>0;D=S(Xs(I-q-(J?j:0),T,P)),z=(0==M?D/2:M==B?0:D)-M*B*((0==M?C/2:0)+(J?j/2:0));const Z={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},X=U?null:new Path2D;let ee=null;if(null!=O)ee=e.data[O.series[1]];else{let{y0:s,y1:i}=c;null!=s&&null!=i&&(g=i.values(e,t,n,p),ee=s.values(e,t,n,p))}let te=A*D,se=E*D;for(let s=1==B?n:p;s>=n&&s<=p;s+=B){let i=g[s];if(null==i)continue;if(null!=ee){let e=ee[s]??0;if(i-e==0)continue;R=x(e,v,k,w)}let n=y(2!=_.distr||null!=c?f[s]:s,_,$,b),r=x(Ds(i,H),v,k,w),l=S(n-z),o=S(Ws(r,R)),a=S(Us(r,R)),h=o-a;if(null!=i){let n=i<0?se:te,r=i<0?te:se;U?(j>0&&null!=G[s]&&L(K.get(G[s]),l,a+Rs(j/2),D,Ws(0,h-j),n,r),null!=W[s]&&L(V.get(W[s]),l,a+Rs(j/2),D,Ws(0,h-j),n,r)):L(X,l,a+Rs(j/2),D,Ws(0,h-j),n,r),F(e,t,s,l-j/2,a,D+j,h)}}return j>0?Z.stroke=U?K:X:U||(Z._fill=0==m.width?m._fill:m._stroke??m._fill,Z.width=0),Z.fill=U?V:X,Z})},e.spline=function(e){return function(e,t){const s=Ds(t?.alignGaps,0);return(t,i,n,r)=>Yn(t,i,(l,o,a,c,h,d,u,p,m,f,g)=>{[n,r]=Es(a,n,r);let _,v,y,x=l.pxRound,b=e=>x(d(e,c,f,p)),w=e=>x(u(e,h,g,m));0==c.ori?(_=nr,y=lr,v=ur):(_=rr,y=or,v=pr);const $=c.dir*(0==c.ori?1:-1);let k=b(o[1==$?n:r]),A=k,E=[],S=[];for(let e=1==$?n:r;e>=n&&e<=r;e+=$)if(null!=a[e]){let t=b(o[e]);E.push(A=t),S.push(w(a[e]))}const M={stroke:e(E,S,_,y,v,x),fill:null,clip:null,band:null,gaps:null,flags:1},C=M.stroke;let[P,T]=Jn(t,i);if(null!=l.fill||0!=P){let e=M.fill=new Path2D(C),s=w(l.fillTo(t,i,l.min,l.max,P));y(e,A,s),y(e,k,s)}if(!l.spanGaps){let e=[];e.push(...tr(o,a,n,r,$,b,s)),M.gaps=e=l.gaps(t,i,n,r,e),M.clip=er(e,c.ori,p,m,f,g)}return 0!=T&&(M.band=2==T?[Xn(t,i,n,r,C,-1),Xn(t,i,n,r,C,1)]:Xn(t,i,n,r,C,T)),M})}(xr,e)}}const Or=o`
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
  .legend-stat {
    font-weight: 400;
    color: var(--secondary-text-color);
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
`;function Nr(e){let t=null,s=null,i=0,n=0,r=null;for(const l of e)null!==l&&(t=null===t?l:Math.min(t,l),s=null===s?l:Math.max(s,l),i+=l,n++,r=l);return{last:r,min:t,max:s,mean:n?i/n:null}}const Hr=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let Rr=class extends Mt{_defaults(){return{time_range:"1h",height:200,show_legend:!0,legend_mode:"list",fill:!1,fill_opacity:20,line_width:2,stacked:!1,palette:"classic",refresh_interval:30}}_options(e,t){return t.map(t=>({value:t,label:be(`${e}${t}`,this.hass)}))}_sections(){const e=this._config?.fill||this._config?.stacked;return[{schema:[mt,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"time_range",selector:{select:{mode:"dropdown",custom_value:!0,options:kt}}},{name:"height",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}}},xt,yt,{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}}]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[wt(this.hass),{name:"line_width",selector:{number:{min:.5,max:10,step:.5,mode:"slider",unit_of_measurement:"px"}}},{name:"fill",selector:{boolean:{}}},{name:"stacked",selector:{boolean:{}}},...e?[{name:"fill_opacity",selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}}}]:[]]}]},{title:"section_legend",schema:[{name:"",type:"grid",schema:[{name:"show_legend",selector:{boolean:{}}},{name:"legend_mode",selector:{select:{mode:"dropdown",options:this._options("legend_mode_",["list","table"])}}},{name:"show_current",selector:{boolean:{}}}]},{name:"legend_values",selector:{select:{multiple:!0,mode:"list",options:this._options("legend_value_",["last","min","max","mean"])}}}]},vt({name:"step",selector:{text:{}}})]}_renderExtra(){return W`
      <div class="section-title">${be("section_queries",this.hass)}</div>
      <div class="helper">${be("helper_series_query",this.hass)}. ${be("helper_name_series",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Hr}
        .itemTitle=${be("query_n",this.hass)}
        .addLabel=${be("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value.map(({fill:e,...t})=>t);this._updateConfig({series:t})}}
      ></prometheus-list-editor>
    `}};Rr=e([ue("prometheus-timeseries-card-editor")],Rr);let Ir=class extends we{constructor(){super(...arguments),this._data={times:[],series:[]},this._cursorIdx=null,this._hidden=new Set,this._chartSignature=""}static get styles(){return[ve,o`${l('.uplot, .uplot *, .uplot *::before, .uplot *::after {box-sizing: border-box;}.uplot {font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;width: min-content;}.u-title {text-align: center;font-size: 18px;font-weight: bold;}.u-wrap {position: relative;user-select: none;}.u-over, .u-under {position: absolute;}.u-under {overflow: hidden;}.uplot canvas {display: block;position: relative;width: 100%;height: 100%;}.u-axis {position: absolute;}.u-legend {font-size: 14px;margin: auto;text-align: center;}.u-inline {display: block;}.u-inline * {display: inline-block;}.u-inline tr {margin-right: 16px;}.u-legend th {font-weight: 600;}.u-legend th > * {vertical-align: middle;display: inline-block;}.u-legend .u-marker {width: 1em;height: 1em;margin-right: 4px;background-clip: padding-box !important;}.u-inline.u-live th::after {content: ":";vertical-align: middle;}.u-inline:not(.u-live) .u-value {display: none;}.u-series > * {padding: 4px;}.u-series th {cursor: pointer;}.u-legend .u-off > * {opacity: 0.3;}.u-select {background: rgba(0,0,0,0.07);position: absolute;pointer-events: none;}.u-cursor-x, .u-cursor-y {position: absolute;left: 0;top: 0;pointer-events: none;will-change: transform;}.u-hz .u-cursor-x, .u-vt .u-cursor-y {height: 100%;border-right: 1px dashed #607D8B;}.u-hz .u-cursor-y, .u-vt .u-cursor-x {width: 100%;border-bottom: 1px dashed #607D8B;}.u-cursor-pt {position: absolute;top: 0;left: 0;border-radius: 50%;border: 0 solid;pointer-events: none;will-change: transform;/*this has to be !important since we set inline "background" shorthand */background-clip: padding-box !important;}.u-axis.u-off, .u-select.u-off, .u-cursor-x.u-off, .u-cursor-y.u-off, .u-cursor-pt.u-off {display: none;}')}`,Or]}static getStubConfig(){return{type:"custom:prometheus-timeseries-card",title:"Prometheus",time_range:"1h",series:[{query:"up",name:"{{job}} {{instance}}"}]}}static getConfigElement(){return document.createElement("prometheus-timeseries-card-editor")}setConfig(e){const t=Array.isArray(e.series)?e.series:[];super.setConfig({...e,series:t}),this._destroyChart()}_hasQuery(){return Boolean(this._config?.series?.some(e=>e&&e.query&&e.query.trim()))}getCardSize(){return Math.ceil(((this._config?.height||200)+100)/50)}disconnectedCallback(){super.disconnectedCallback(),this._destroyChart()}updated(e){if(super.updated(e),!this._data.times.length||!this._chartContainer)return;const t=this._data.series.map(e=>`${e.key}|${e.color}`).join(",");this._chart&&t===this._chartSignature?(e.has("_data")||e.has("_hidden"))&&(this._chart.setData(this._aligned()),this._data.series.forEach((e,t)=>this._chart.setSeries(t+1,{show:!this._hidden.has(e.key)}))):(this._destroyChart(),this._chartSignature=t,this._initChart())}_aligned(){return function(e,t,s){const i=t?function(e,t){const s=[];return e.map(e=>t.has(e.key)?e.values.map(()=>null):e.values.map((e,t)=>(s[t]=(s[t]||0)+(e??0),null===e?null:s[t])))}(e.series,s):e.series.map(e=>e.values);return[e.times,...i]}(this._data,Boolean(this._config.stacked),this._hidden)}_destroyChart(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._chart?.destroy(),this._chart=void 0,this._chartSignature=""}_cssVar(e,t){return getComputedStyle(this).getPropertyValue(e).trim()||t}_fmt(e){return null==e?"-":Ue(e,this._config.decimals,this._config.unit)}_initChart(){if(!this._chartContainer||!this._config)return;const e=this._config,t=this._chartContainer.clientWidth||400,s=e.height||200,i=this._cssVar("--secondary-text-color","#888"),n=this._cssVar("--divider-color","rgba(127,127,127,0.2)"),r=e.line_width??2,l=e.fill||e.stacked||e.series.some(e=>e.fill),o=Math.max(0,Math.min(100,e.fill_opacity??20))/100,a=[{}];this._data.series.forEach(e=>{var t,s;a.push({label:e.label,stroke:e.color,width:r,fill:l?(t=e.color,s=o,/^#[0-9a-f]{6}$/i.test(t)?t+Math.round(255*s).toString(16).padStart(2,"0"):t):void 0,spanGaps:!0,show:!this._hidden.has(e.key),points:{show:!1}})});const c=[{stroke:i,grid:{stroke:n,width:1},ticks:{stroke:n,width:1}},{stroke:i,size:70,grid:{stroke:n,width:1},ticks:{stroke:n,width:1},values:(e,t)=>t.map(e=>null==e?"":this._fmt(e))}],h={width:t,height:s,series:a,axes:c,legend:{show:!1},scales:{y:{range:(t,s,i)=>{const n=e.min??(e.stacked?Math.min(0,s):s),r=e.max??i;return n===r?[n-1,r+1]:[n,r]}}},cursor:{points:{size:6}},hooks:{setCursor:[e=>this._cursorIdx=e.cursor.idx??null]}};this._chart=new Fr(h,this._aligned(),this._chartContainer),this._resizeObserver=new ResizeObserver(e=>{for(const t of e)t.target===this._chartContainer&&this._chart&&t.contentRect.width>0&&this._chart.setSize({width:t.contentRect.width,height:this._config.height||200})}),this._resizeObserver.observe(this._chartContainer)}async _fetchData(){const e=this._config.series;try{this._loading=!0;const{start:t,end:s}=Ze(this._config.time_range||"1h"),i=this._config.step?String(this._config.step):Xe(t,s),n=await Promise.all(e.map(e=>e.query&&e.query.trim()?this._client.rangeQuery(e.query,t,s,i):Promise.resolve(null)));this._data=function(e,t,s){const i=[],n=new Set;e.forEach((e,s)=>{const r=t[s],l=r.name?.trim(),o=l&&l.includes("{{")?l:void 0,a=l&&!o?l:void 0,c=it(e,o);c.forEach((e,t)=>{let l=e.label;a&&(l=c.length>1?`${a} ${Ve(e.metric)}`:a),l=l||`Series ${s+1}`;const o=new Map;for(const[t,s]of e.points)o.set(t,s),n.add(t);i.push({key:`${s}:${t}:${l}`,label:l,explicit:1===c.length?r.color:void 0,points:o})})});const r=i.slice(0,et),l=Array.from(n).sort((e,t)=>e-t),o=r.map((e,t)=>{const i=l.map(t=>e.points.has(t)?e.points.get(t):null);return{key:e.key,label:e.label,color:lt(t,r.length,s,e.explicit),values:i,stats:Nr(i)}});return{times:l,series:o}}(n,e,this._config.palette),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1}}_toggle(e,t){const s=new Set(this._hidden),i=this._data.series.map(e=>e.key);if(t.ctrlKey||t.metaKey||t.shiftKey)s.has(e)?s.delete(e):s.add(e);else{const t=s.size===i.length-1&&!s.has(e);s.clear(),t||i.filter(t=>t!==e).forEach(e=>s.add(e))}this._hidden=s}_current(e){return null!==this._cursorIdx?e.values[this._cursorIdx]??null:e.stats.last}render(){if(!this._hasQuery())return this.renderPlaceholder("no_series");const e=this._data.times.length>0;let t=K;return this._error?t=W`<div class="overlay error-state">${this._error}</div>`:e||(t=W`<div class="overlay">
        ${this._loading?W`<div class="loading-state"></div>`:W`<div class="placeholder-state">${be("no_data",this._hass)}</div>`}
      </div>`),W`
      <ha-card>
        ${this._config.title?W`<div class="header">${this._config.title}</div>`:K}
        <div class="chart-container" style="min-height: ${e?this._config.height||200:0}px"></div>
        ${t}
        ${!1!==this._config.show_legend&&e?this._renderLegend():K}
      </ha-card>
    `}_showCurrent(){return!1!==this._config.show_current}_renderLegendTable(e){const t=e,s=this._showCurrent();return W`
      <div class="legend-table-wrap">
        <table class="legend-table">
          <thead>
            <tr>
              <th></th>
              ${t.map(e=>W`<th>${be(`legend_value_${e}`,this._hass)}</th>`)}
              ${s?W`<th>${be("current",this._hass)}</th>`:K}
            </tr>
          </thead>
          <tbody>
            ${this._data.series.map(e=>W`
                <tr class=${this._hidden.has(e.key)?"hidden":""} @click=${t=>this._toggle(e.key,t)}>
                  <td>
                    <div class="name-cell" title=${e.label}>
                      <span class="legend-color" style="background:${e.color}"></span><span>${e.label}</span>
                    </div>
                  </td>
                  ${t.map(t=>W`<td>${this._fmt(e.stats[t])}</td>`)}
                  ${s?W`<td>${this._fmt(this._current(e))}</td>`:K}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}_renderLegend(){const e=this._config.legend_values||[];return"table"===this._config.legend_mode?this._renderLegendTable(e):W`
      <div class="legend">
        ${this._data.series.map(t=>W`
            <div
              class="legend-item ${this._hidden.has(t.key)?"hidden":""}"
              title=${t.label}
              @click=${e=>this._toggle(t.key,e)}
            >
              <div class="legend-color" style="background-color: ${t.color}"></div>
              <span class="legend-name">${t.label}</span>
              ${e.map(e=>W`<span class="legend-value"
                  ><span class="legend-stat">${be(`legend_value_${e}`,this._hass)}:</span>
                  ${this._fmt(t.stats[e])}</span
                >`)}
              ${this._showCurrent()?W`<span class="legend-value">${this._fmt(this._current(t))}</span>`:K}
            </div>
          `)}
      </div>
    `}};e([ge()],Ir.prototype,"_data",void 0),e([ge()],Ir.prototype,"_cursorIdx",void 0),e([ge()],Ir.prototype,"_hidden",void 0),e([function(e){return(t,s,i)=>((e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s))(t,s,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}(".chart-container")],Ir.prototype,"_chartContainer",void 0),Ir=e([ue("prometheus-timeseries-card")],Ir);const jr=o`
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
`,Ur=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let Wr=class extends Mt{_defaults(){return{orientation:"horizontal",show_values:!0,bar_height:24,refresh_interval:30,sort:"desc",palette:"classic",color_mode:"thresholds"}}_options(e,t){return t.map(t=>({value:t,label:be(`${e}${t}`,this.hass)}))}_sections(){return[{schema:[mt,ft,bt]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"orientation",selector:{select:{mode:"dropdown",options:this._options("",["horizontal","vertical"])}}},{name:"show_values",selector:{boolean:{}}},xt,yt,{name:"sort",selector:{select:{mode:"dropdown",options:this._options("sort_",["desc","asc","name","none"])}}},{name:"limit",selector:{number:{min:1,max:100,mode:"box"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},{name:"bar_height",selector:{number:{min:4,max:80,mode:"box",unit_of_measurement:"px"}}}]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[$t(this.hass),wt(this.hass)]}]},vt()]}_renderExtra(){return W`
      <div class="section-title">${be("section_queries",this.hass)}</div>
      <div class="helper">${be("helper_series_query",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Ur}
        .itemTitle=${be("query_n",this.hass)}
        .addLabel=${be("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({series:t&&t.length?t:void 0})}}
      ></prometheus-list-editor>
      ${this._renderThresholds()}
    `}};Wr=e([ue("prometheus-bar-card-editor")],Wr);let Vr=class extends we{constructor(){super(...arguments),this._barData=[],this._calculatedMax=0,this._loaded=!1}static get styles(){return[ve,jr]}static getStubConfig(){return{type:"custom:prometheus-bar-card",name:"Scrape duration",query:"scrape_duration_seconds",legend_format:"{{job}}",unit:"s",decimals:3,orientation:"horizontal"}}static getConfigElement(){return document.createElement("prometheus-bar-card-editor")}_queries(){const e=[];this._config.query?.trim()&&e.push({query:this._config.query,name:this._config.legend_format});for(const t of this._config.series||[])t?.query?.trim()&&e.push(t);return e}_hasQuery(){return this._queries().length>0}async _fetchData(){const e=this._config;try{this._loading=!0;const t=this._queries(),s=await Promise.all(t.map(e=>this._client.instantQuery(e.query)));let i=[];s.forEach((e,s)=>{const n=t[s],r=n.name&&n.name.includes("{{")?n.name:void 0,l=st(e,r);for(const e of l){if(null===e.value)continue;let t=Ve(e.metric,r);n.name&&!r&&(t=l.length>1?`${n.name} ${t}`:n.name),i.push({label:t,value:e.value,color:"",explicitColor:1===l.length?n.color:void 0})}});const n=e.sort||"desc";"desc"===n?i.sort((e,t)=>t.value-e.value):"asc"===n?i.sort((e,t)=>e.value-t.value):"name"===n&&i.sort((e,t)=>e.label.localeCompare(t.label,void 0,{numeric:!0})),e.limit&&e.limit>0&&(i=i.slice(0,e.limit));const r=i.reduce((e,t)=>Math.max(e,t.value),0);this._calculatedMax=e.max||r||100;const l="series"!==e.color_mode&&e.thresholds?.length;i.forEach((t,s)=>{const n=lt(s,i.length,e.palette,t.explicitColor);t.color=l?Je(t.value,e.thresholds,n):n}),this._barData=i,this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}render(){if(!this._hasQuery())return this.renderPlaceholder();let e;return e=this._error?W`<div class="error-state">${this._error}</div>`:this._barData.length>0?this._renderBars():this._loaded?W`<div class="placeholder-state">${be("no_data",this._hass)}</div>`:W`<div class="loading-state"></div>`,W`
      <ha-card>
        ${this._config.name?W`<div class="header">${this._config.name}</div>`:K}
        <div class="body">${e}</div>
      </ha-card>
    `}_fmt(e){return Ue(e,this._config.decimals,this._config.unit)}_renderBars(){const e=this._calculatedMax||1,t=!1!==this._config.show_values;if("vertical"===this._config.orientation)return W`
        <div class="bars-container-vertical">
          ${this._barData.map(s=>{const i=Math.min(100,Math.max(0,s.value/e*100));return W`
              <div class="bar-col">
                ${t?W`<div class="bar-col-value">${this._fmt(s.value)}</div>`:K}
                <div class="bar-col-track">
                  <div class="bar-col-fill" style="height: ${i}%; background-color: ${s.color};"></div>
                </div>
                <div class="bar-col-label" title="${s.label}">${s.label}</div>
              </div>
            `})}
        </div>
      `;const s=this._config.bar_height||24;return W`
      <div class="bars-container-horizontal">
        ${this._barData.map(i=>{const n=Math.min(100,Math.max(0,i.value/e*100));return W`
            <div class="bar-row">
              <div class="bar-label" title="${i.label}">${i.label}</div>
              <div class="bar-track" style="height: ${s}px;">
                <div class="bar-fill" style="width: ${n}%; background-color: ${i.color};"></div>
              </div>
              ${t?W`<div class="bar-value">${this._fmt(i.value)}</div>`:K}
            </div>
          `})}
      </div>
    `}};e([ge()],Vr.prototype,"_barData",void 0),e([ge()],Vr.prototype,"_calculatedMax",void 0),e([ge()],Vr.prototype,"_loaded",void 0),Vr=e([ue("prometheus-bar-card")],Vr);const Gr=o`
  ha-card {
    padding: 16px;
    gap: 8px;
  }
  .header {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .timeline {
    display: grid;
    grid-template-columns: minmax(0, max-content) 1fr;
    column-gap: 8px;
    row-gap: 4px;
    align-items: center;
  }
  .row-label {
    font-size: 12px;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
  }
  .row-bar {
    position: relative;
    height: var(--row-height, 26px);
    border-radius: 4px;
    overflow: hidden;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
  }
  .segment {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 11px;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
    white-space: nowrap;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.15);
  }
  .segment span {
    padding: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .axis {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: var(--secondary-text-color);
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }
  .tooltip {
    font-size: 12px;
    color: var(--secondary-text-color);
    min-height: 16px;
  }
`;function Kr(e,t){if(void 0!==e.value&&null!==e.value&&""!==String(e.value)){const s=Number(e.value);return Number.isFinite(s)?s===t:String(e.value)===String(t)}const s=void 0!==e.from&&null!==e.from,i=void 0!==e.to&&null!==e.to;return!(!s&&!i)&&((!s||t>=e.from)&&(!i||t<=e.to))}function Qr(e,t,s){const i=Ue(e,t.decimals,t.unit);for(const[s,n]of(t.mappings||[]).entries())if(Kr(n,e))return{key:`m${s}`,text:n.text||i,color:Ye(n.color)||lt(s,(t.mappings||[]).length,t.palette)};if(t.thresholds?.length){const s=Je(e,t.thresholds);return{key:`t${s}`,text:i,color:s}}return{key:`v${e}`,text:i,color:lt(Math.max(0,s.indexOf(e)),Math.max(s.length,2),t.palette)}}function Yr(e,t,s,i,n){const r=[],l=!1!==n.merge_values;let o=1/0;for(let t=1;t<e.length;t++)o=Math.min(o,e[t][0]-e[t-1][0]);t=Number.isFinite(o)?Math.max(t,o):t;for(let o=0;o<e.length;o++){const[a,c]=e[o];if(null===c)continue;const h=e[o+1]?.[0],d=void 0!==h&&h-a<=2*t?h:Math.min(a+t,s),u=Qr(c,n,i),p=r[r.length-1];l&&p&&p.key===u.key&&p.end>=a?p.end=d:r.push({...u,start:a,end:d})}return r}const Jr=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"name",selector:{text:{}}}],Zr=[{name:"",type:"grid",schema:[{name:"value",selector:{text:{}}},{name:"text",selector:{text:{}}},{name:"from",selector:{number:{mode:"box",step:"any"}}},{name:"to",selector:{number:{mode:"box",step:"any"}}},{name:"color",selector:{text:{type:"color"}}}]}];let Xr=class extends Mt{_defaults(){return{time_range:"6h",row_height:26,show_values:!0,show_legend:!0,merge_values:!0,palette:"classic",refresh_interval:60}}_sections(){return[{schema:[mt,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"time_range",selector:{select:{mode:"dropdown",custom_value:!0,options:kt}}},{name:"row_height",selector:{number:{min:10,max:80,mode:"box",unit_of_measurement:"px"}}},xt,yt]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"show_values",selector:{boolean:{}}},{name:"show_legend",selector:{boolean:{}}},{name:"merge_values",selector:{boolean:{}}},wt(this.hass)]}]},vt({name:"step",selector:{text:{}}})]}_renderExtra(){return W`
      <div class="section-title">${be("section_queries",this.hass)}</div>
      <div class="helper">${be("helper_timeline_query",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Jr}
        .itemTitle=${be("query_n",this.hass)}
        .addLabel=${be("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation(),this._updateConfig({series:e.detail.value})}}
      ></prometheus-list-editor>

      <div class="section-title">${be("section_mappings",this.hass)}</div>
      <div class="helper">${be("helper_mappings",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.mappings||[]}
        .schema=${Zr}
        .addLabel=${be("add_mapping",this.hass)}
        .newItem=${()=>({value:"",text:"",color:"#73BF69"})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({mappings:t.length?t:void 0})}}
      ></prometheus-list-editor>
      ${this._renderThresholds()}
    `}};Xr=e([ue("prometheus-state-timeline-card-editor")],Xr);let el=class extends we{constructor(){super(...arguments),this._rows=[],this._range=[0,0],this._loaded=!1,this._hover=""}static get styles(){return[ve,Gr]}static getStubConfig(){return{type:"custom:prometheus-state-timeline-card",title:"Targets",time_range:"6h",series:[{query:"up",name:"{{job}}"}],mappings:[{value:"1",text:"UP",color:"#73BF69"},{value:"0",text:"DOWN",color:"#F2495C"}]}}static getConfigElement(){return document.createElement("prometheus-state-timeline-card-editor")}setConfig(e){super.setConfig({...e,series:Array.isArray(e.series)?e.series:[]})}_hasQuery(){return Boolean(this._config?.series?.some(e=>e?.query?.trim()))}getCardSize(){return 2+Math.ceil(this._rows.length/2)}async _fetchData(){const e=this._config;try{this._loading=!0;const{start:t,end:s}=Ze(e.time_range||"6h"),i=e.step?String(e.step):Xe(t,s,300),n=e.series.filter(e=>e?.query?.trim()),r=await Promise.all(n.map(e=>this._client.rangeQuery(e.query,t,s,i)));this._rows=function(e,t,s,i,n){const r=[];e.forEach((e,s)=>{const i=t[s].name?.trim(),n=i&&i.includes("{{")?i:void 0,l=it(e,n);for(const e of l){let t=n?e.label:Ve(e.metric);i&&!n&&(t=l.length>1?`${i} ${Ve(e.metric)}`:i),r.push({label:t,points:e.points})}});const l=Array.from(new Set(r.flatMap(e=>e.points.map(e=>e[1]).filter(e=>null!==e)))).sort((e,t)=>e-t);return r.slice(0,et).map(e=>({label:e.label,segments:Yr(e.points,i,n,l,s)}))}(r,n,e,parseFloat(i)||60,s),this._range=[t,s],this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_time(e){const t=this._range[1]-this._range[0]>172800?{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}:{hour:"2-digit",minute:"2-digit"};return new Date(1e3*e).toLocaleString(this._hass?.locale?.language,t)}_renderRow(e){const[t,s]=this._range,i=s-t||1,n=!1!==this._config.show_values;return W`
      <div class="row-label" title=${e.label}>${e.label}</div>
      <div class="row-bar">
        ${e.segments.map(s=>{const r=(s.start-t)/i*100,l=Math.max(.2,(s.end-s.start)/i*100),o=`${e.label}: ${s.text} (${this._time(s.start)} – ${this._time(s.end)})`;return W`<div
            class="segment"
            style="left:${r}%;width:${l}%;background:${s.color}"
            title=${o}
            @mouseenter=${()=>this._hover=o}
          >
            ${n&&l>6?W`<span>${s.text}</span>`:K}
          </div>`})}
      </div>
    `}_renderLegend(){const e=new Map;return this._rows.forEach(t=>t.segments.forEach(t=>e.set(t.key,t))),W`<div class="legend">
      ${[...e.values()].map(e=>W`<div class="legend-item"><span class="legend-color" style="background:${e.color}"></span>${e.text}</div>`)}
    </div>`}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder("no_series");if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const[t,s]=this._range,i=[0,.25,.5,.75,1].map(e=>t+(s-t)*e);return W`
      <ha-card>
        ${e.title?W`<div class="header">${e.title}</div>`:K}
        ${this._rows.length?W`
              <div class="timeline" style="--row-height: ${e.row_height||26}px" @mouseleave=${()=>this._hover=""}>
                ${this._rows.map(e=>this._renderRow(e))}
                <div class="axis">${i.map(e=>W`<span>${this._time(e)}</span>`)}</div>
              </div>
              <div class="tooltip">${this._hover}</div>
              ${!1!==e.show_legend?this._renderLegend():K}
            `:W`<div class="placeholder-state">${be("no_data",this._hass)}</div>`}
      </ha-card>
    `}};e([ge()],el.prototype,"_rows",void 0),e([ge()],el.prototype,"_range",void 0),e([ge()],el.prototype,"_loaded",void 0),e([ge()],el.prototype,"_hover",void 0),el=e([ue("prometheus-state-timeline-card")],el);const tl=o`
  ha-card {
    padding: 16px;
    gap: 12px;
  }
  .header {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .body {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
  .body.bottom {
    flex-direction: column;
  }
  .chart {
    position: relative;
    flex-shrink: 0;
    width: var(--pie-size, 180px);
    max-width: 100%;
    aspect-ratio: 1;
  }
  svg {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }
  path.slice {
    stroke: var(--card-background-color, #fff);
    stroke-width: 1.5;
    transition: transform 0.15s ease, opacity 0.15s ease;
    transform-origin: 50% 50%;
    cursor: pointer;
  }
  path.slice.dim {
    opacity: 0.35;
  }
  path.slice.active {
    transform: scale(1.04);
  }
  .slice-label {
    font-size: 5px;
    fill: #fff;
    pointer-events: none;
    font-weight: 500;
  }
  .center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    text-align: center;
    padding: 20%;
  }
  .center .total {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .center .caption {
    font-size: 11px;
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
  .legend {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    min-width: 0;
    max-height: var(--pie-size, 180px);
    overflow-y: auto;
  }
  .body.bottom .legend {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 14px;
    max-height: none;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    min-width: 0;
  }
  .legend-item.dim {
    opacity: 0.4;
  }
  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
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
    margin-left: auto;
    padding-left: 8px;
  }
`;function sl(e,t,s,i){const n=(i-90)*Math.PI/180;return[e+s*Math.cos(n),t+s*Math.sin(n)]}const il=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let nl=class extends Mt{_defaults(){return{pie_type:"donut",donut_width:40,show_legend:!0,legend_position:"right",legend_values:["value"],show_labels:!1,show_total:!0,sort:"desc",size:180,palette:"classic",refresh_interval:30}}_options(e,t){return t.map(t=>({value:t,label:be(`${e}${t}`,this.hass)}))}_sections(){const e="pie"!==this._config?.pie_type;return[{schema:[mt,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[xt,yt]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"pie_type",selector:{select:{mode:"dropdown",options:this._options("pie_type_",["donut","pie"])}}},...e?[{name:"donut_width",selector:{number:{min:10,max:90,step:5,mode:"slider",unit_of_measurement:"%"}}},{name:"show_total",selector:{boolean:{}}}]:[],{name:"show_labels",selector:{boolean:{}}},{name:"size",selector:{number:{min:80,max:500,mode:"box",unit_of_measurement:"px"}}},{name:"sort",selector:{select:{mode:"dropdown",options:this._options("sort_",["desc","asc","none"])}}},{name:"limit",selector:{number:{min:1,max:50,mode:"box"}}},wt(this.hass)]}]},{title:"section_legend",schema:[{name:"",type:"grid",schema:[{name:"show_legend",selector:{boolean:{}}},{name:"legend_position",selector:{select:{mode:"dropdown",options:this._options("legend_position_",["right","bottom"])}}}]},{name:"legend_values",selector:{select:{multiple:!0,mode:"list",options:this._options("legend_pie_",["value","percent"])}}}]},vt()]}_renderExtra(){return W`
      <div class="section-title">${be("section_queries",this.hass)}</div>
      <div class="helper">${be("helper_pie_query",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${il}
        .itemTitle=${be("query_n",this.hass)}
        .addLabel=${be("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation(),this._updateConfig({series:e.detail.value})}}
      ></prometheus-list-editor>
    `}};nl=e([ue("prometheus-pie-card-editor")],nl);let rl=class extends we{constructor(){super(...arguments),this._slices=[],this._loaded=!1,this._active=null}static get styles(){return[ve,tl]}static getStubConfig(){return{type:"custom:prometheus-pie-card",title:"Series by job",series:[{query:"count by (job) (up)",name:"{{job}}"}],pie_type:"donut"}}static getConfigElement(){return document.createElement("prometheus-pie-card-editor")}setConfig(e){super.setConfig({...e,series:Array.isArray(e.series)?e.series:[]})}_hasQuery(){return Boolean(this._config?.series?.some(e=>e?.query?.trim()))}getCardSize(){return 4}async _fetchData(){const e=this._config;try{this._loading=!0;const t=e.series.filter(e=>e?.query?.trim()),s=await Promise.all(t.map(e=>this._client.instantQuery(e.query)));this._slices=function(e,t,s){let i=[];e.forEach((e,s)=>{const n=t[s],r=n.name?.trim(),l=r&&r.includes("{{")?r:void 0,o=st(e,l);for(const e of o){if(null===e.value||e.value<=0)continue;let t=l?e.label:Ve(e.metric);r&&!l&&(t=o.length>1?`${r} ${Ve(e.metric)}`:r),i.push({label:t,value:e.value,explicit:1===o.length?n.color:void 0})}});const n=s.sort||"desc";if("desc"===n?i.sort((e,t)=>t.value-e.value):"asc"===n&&i.sort((e,t)=>e.value-t.value),s.limit&&s.limit>0&&i.length>s.limit){const e=i.slice(s.limit);i=i.slice(0,s.limit),i.push({label:s.otherLabel,value:e.reduce((e,t)=>e+t.value,0),explicit:"#8E8E8E"})}const r=i.reduce((e,t)=>e+t.value,0)||1;return i.map((e,t)=>({label:e.label,value:e.value,color:lt(t,i.length,s.palette,e.explicit),percent:e.value/r*100}))}(s,t,{palette:e.palette,sort:e.sort,limit:e.limit,otherLabel:be("other",this._hass)}),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_fmt(e){return Ue(e,this._config.decimals,this._config.unit)}_renderChart(){const e=this._config,t="pie"!==e.pie_type,s=t?48*(1-Math.max(10,Math.min(90,e.donut_width??40))/100):0,i=this._slices.reduce((e,t)=>e+t.value,0);let n=0;const r=null!==this._active?this._slices[this._active]:void 0,l=this._slices.map((i,r)=>{const l=n,o=n+i.percent/100*360;n=o;const a=`slice ${this._active===r?"active":""} ${null!==this._active&&this._active!==r?"dim":""}`,[c,h]=function(e,t,s){return sl(50,50,s,(e+t)/2)}(l,o,t?(48+s)/2:48*.62);return V`
        <path class=${a} d=${function(e,t,s,i){const n=Math.min(t-e,359.999),r=e+n,l=n>180?1:0,[o,a]=sl(50,50,s,e),[c,h]=sl(50,50,s,r);if(i<=0)return`M 50 50 L ${o} ${a} A ${s} ${s} 0 ${l} 1 ${c} ${h} Z`;const[d,u]=sl(50,50,i,r),[p,m]=sl(50,50,i,e);return`M ${o} ${a} A ${s} ${s} 0 ${l} 1 ${c} ${h} L ${d} ${u} A ${i} ${i} 0 ${l} 0 ${p} ${m} Z`}(l,o,48,s)} fill=${i.color}
          @mouseenter=${()=>this._active=r} @mouseleave=${()=>this._active=null}>
          <title>${i.label}: ${this._fmt(i.value)} (${i.percent.toFixed(1)}%)</title>
        </path>
        ${e.show_labels&&i.percent>=5?V`<text class="slice-label" x=${c} y=${h} text-anchor="middle" dominant-baseline="middle">${Math.round(i.percent)}%</text>`:K}
      `});return W`
      <div class="chart">
        <svg viewBox="0 0 100 100">${l}</svg>
        ${t&&!1!==e.show_total?W`<div class="center">
              <div class="total">${this._fmt(r?r.value:i)}</div>
              <div class="caption">${r?r.label:be("total",this._hass)}</div>
            </div>`:K}
      </div>
    `}_renderLegend(){const e=this._config.legend_values||["value"];return W`<div class="legend">
      ${this._slices.map((t,s)=>W`<div
          class="legend-item ${null!==this._active&&this._active!==s?"dim":""}"
          title=${t.label}
          @mouseenter=${()=>this._active=s}
          @mouseleave=${()=>this._active=null}
        >
          <span class="legend-color" style="background:${t.color}"></span>
          <span class="legend-name">${t.label}</span>
          <span class="legend-value">
            ${e.includes("value")?this._fmt(t.value):K}
            ${e.includes("percent")?W`${e.includes("value")?" · ":""}${t.percent.toFixed(1)}%`:K}
          </span>
        </div>`)}
    </div>`}render(){const e=this._config;return this._hasQuery()?this._error?this.renderError():this._loaded?W`
      <ha-card>
        ${e.title?W`<div class="header">${e.title}</div>`:K}
        ${this._slices.length?W`<div class="body ${"bottom"===e.legend_position?"bottom":""}" style="--pie-size: ${e.size||180}px">
              ${this._renderChart()} ${!1!==e.show_legend?this._renderLegend():K}
            </div>`:W`<div class="placeholder-state">${be("no_data",this._hass)}</div>`}
      </ha-card>
    `:this.renderLoading():this.renderPlaceholder("no_series")}};e([ge()],rl.prototype,"_slices",void 0),e([ge()],rl.prototype,"_loaded",void 0),e([ge()],rl.prototype,"_active",void 0),rl=e([ue("prometheus-pie-card")],rl);const ll=[{type:"prometheus-stat-card",key:"stat"},{type:"prometheus-gauge-card",key:"gauge"},{type:"prometheus-timeseries-card",key:"timeseries"},{type:"prometheus-bar-card",key:"bar"},{type:"prometheus-state-timeline-card",key:"timeline"},{type:"prometheus-pie-card",key:"pie"}],ol=window;ol.customCards=ol.customCards||[];for(const e of ll)ol.customCards.some(t=>t.type===e.type)||ol.customCards.push({type:e.type,name:be(`${e.key}_name`),description:be(`${e.key}_desc`),preview:!0,documentationURL:"https://github.com/1orgar/ha_prom_graph_cards"});console.info("%c PROMETHEUS-CARDS %c v0.4.0 ","color: white; background: #e65100; font-weight: bold;","color: #e65100; background: white; font-weight: bold;");
