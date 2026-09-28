function e(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(t,e))}return e}toString(){return this.cssText}};const o=e=>new n("string"==typeof e?e:e+"",void 0,i),a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new n(s,e,i)},l=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return o(t)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,f=globalThis,_=f.trustedTypes,g=_?_.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},b=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);r?.call(this,t),this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(s)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:x).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i;const n=r.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){if(void 0!==e){const n=this.constructor;if(!1===i&&(r=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??b)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,s,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,M=e=>e,A=k.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,z=`<${P}>`,T=document,B=()=>T.createComment(""),q=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,L="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,I=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,H=/"/g,j=/^(?:script|style|textarea|title)$/i,V=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),U=V(1),G=V(2),W=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),K=new WeakMap,Y=T.createTreeWalker(T,129);function Z(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const J=(e,t)=>{const s=e.length-1,i=[];let r,n=2===t?"<svg>":3===t?"<math>":"",o=F;for(let t=0;t<s;t++){const s=e[t];let a,l,c=-1,d=0;for(;d<s.length&&(o.lastIndex=d,l=o.exec(s),null!==l);)d=o.lastIndex,o===F?"!--"===l[1]?o=N:void 0!==l[1]?o=O:void 0!==l[2]?(j.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=I):void 0!==l[3]&&(o=I):o===I?">"===l[0]?(o=r??F,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?I:'"'===l[3]?H:R):o===H||o===R?o=I:o===N||o===O?o=F:(o=I,r=void 0);const h=o===I&&e[t+1].startsWith("/>")?" ":"";n+=o===F?s+z:c>=0?(i.push(a),s.slice(0,c)+S+s.slice(c)+C+h):s+C+(-2===c?t:h)}return[Z(e,n+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class X{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,n=0;const o=e.length-1,a=this.parts,[l,c]=J(e,t);if(this.el=X.createElement(l,s),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Y.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(S)){const t=c[n++],s=i.getAttribute(e).split(C),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?re:"?"===o[1]?ne:"@"===o[1]?oe:ie}),i.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(e));if(j.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],B()),Y.nextNode(),a.push({type:2,index:++r});i.append(e[t],B())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)a.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const s=T.createElement("template");return s.innerHTML=e,s}}function ee(e,t,s=e,i){if(t===W)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=q(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=ee(e,r._$AS(e,t.values),r,i)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??T).importNode(t,!0);Y.currentNode=i;let r=Y.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new se(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new ae(r,this,e)),this._$AV.push(t),a=s[++o]}n!==a?.index&&(r=Y.nextNode(),n++)}return Y.currentNode=T,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),q(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=X.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new te(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new X(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new se(this.O(B()),this.O(B()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=M(e).nextSibling;M(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Q}_$AI(e,t=this,s,i){const r=this.strings;let n=!1;if(void 0===r)e=ee(this,e,t,0),n=!q(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{const i=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=ee(this,i[s+o],t,o),a===W&&(a=this._$AH[o]),n||=!q(a)||a!==this._$AH[o],a===Q?e=Q:e!==Q&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class re extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ne extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class oe extends ie{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??Q)===W)return;const s=this._$AH,i=e===Q&&s!==Q||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==Q&&(s===Q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const le=k.litHtmlPolyfillSupport;le?.(X,se),(k.litHtmlVersions??=[]).push("3.3.3");const ce=globalThis;class de extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=s?.renderBefore??null;i._$litPart$=r=new se(t.insertBefore(B(),e),e,void 0,s??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}de._$litElement$=!0,de.finalized=!0,ce.litElementHydrateSupport?.({LitElement:de});const he=ce.litElementPolyfillSupport;he?.({LitElement:de}),(ce.litElementVersions??=[]).push("4.2.2");const ue=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:b},me=(e=pe,t,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e,!0,s)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];t.call(this,s),this.requestUpdate(i,r,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function fe(e){return(t,s)=>"object"==typeof s?me(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function _e(e){return fe({...e,state:!0,attribute:!1})}function ge(e,t){return(t,s,i)=>((e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s))(t,s,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}const ve=(e,t,s,i,r)=>n=>t+s*Math.sin(n/i*Math.PI*2)+(e()-.5)*r;const ye=(e,t)=>t.map(([t,s])=>[{[e]:t},s]),xe=(e,t,s)=>i=>e.map(([e,r],n)=>[e,ve(i,r,t*(r||1),25+7*n,s*(r||1))]),be=(e,t,s=1,i=0)=>(r,n)=>r>n*e&&r<n*(e+t)?i:s,we=(e,t=.1,s=.08)=>({instant:e,range:xe(e,t,s)}),$e=ye("instance",[["nas",23],["router",71],["pi-kitchen",12],["hass",94]]),ke=ye("mountpoint",[["/",41],["/boot",18],["/data",86],["/var/lib/docker",63]]),Me=ye("instance",[["nas",62e8],["router",31e7],["pi-kitchen",14e8],["hass",27e8]]),Ae=ye("device",[["eth0 rx",42e5],["eth0 tx",11e5],["wlan0 rx",8e5]]),Ee=ye("job",[["node",.042],["hass",.31],["blackbox",.12],["mqtt",.018]]),Se=ye("job",[["node",14],["blackbox",9],["home-assistant",6],["mqtt",3],["prometheus",2]]),Ce=["0.005","0.01","0.025","0.05","0.1","0.25","0.5","1","+Inf"],Pe=[[/bucket/,{instant:[],range:e=>Ce.map((t,s)=>[{le:t},t=>8*(s+1)+Math.pow(s,1.6)*(6+5*Math.sin(t/9))+6*e()])}],[/network|receive|transmit/,{instant:Ae,range:e=>[[Ae[0][0],ve(e,42e5,25e5,40,12e5)],[Ae[1][0],ve(e,11e5,6e5,55,5e5)],[Ae[2][0],ve(e,8e5,4e5,30,3e5)]]}],[/cpu/,we($e,.3,.25)],[/filesystem|disk/,we(ke,.02,.01)],[/memory/,we(Me,.08,.04)],[/temp/,we([[{sensor:"living room"},22.4]],.03,.01)],[/power|watt/,we([[{device:"house"},1843]],.25,.1)],[/scrape_duration/,we(Ee,.3,.3)],[/count by \(job\)/,we(Se,0,0)],[/avg\s*\(\s*up\s*\)/,{instant:[[{},80]],range:()=>[[{},be(.6,.1,100,80)]]}],[/count\s*\(\s*up\s*\)/,we([[{},5]],0,0)],[/sum\s*\(\s*up\s*\)/,{instant:[[{},4]],range:()=>[[{},be(.6,.1,5,4)]]}],[/\bup\b/,{instant:[[{job:"node",instance:"nas:9100"},1],[{job:"node",instance:"router:9100"},1],[{job:"node",instance:"pi-kitchen:9100"},0],[{job:"hass",instance:"hass:8123"},1],[{job:"mqtt",instance:"broker:9234"},1]],range:()=>[[{job:"nas"},be(.62,.08)],[{job:"router"},()=>1],[{job:"pi-kitchen"},be(.2,.35)],[{job:"mqtt"},be(.85,.04)]]}]],ze=we([[{job:"demo"},42]],.4,.2),Te=e=>Pe.find(([t])=>t.test(e))?.[1]??ze;function Be(){const e=e=>new Date(Date.now()-e).toISOString();return[{labels:{alertname:"HostHighCpuLoad",severity:"critical",instance:"hass"},state:"firing",activeAt:e(282e4),annotations:{summary:"CPU load is above 90% for 10 minutes"}},{labels:{alertname:"DiskAlmostFull",severity:"warning",mountpoint:"/data"},state:"firing",activeAt:e(1872e4),annotations:{summary:"/data is 86% full"}},{labels:{alertname:"TargetDown",severity:"warning",instance:"pi-kitchen:9100"},state:"pending",activeAt:e(18e4),annotations:{summary:"pi-kitchen is not reachable"}}]}async function qe(e){const t=String(e.type).split("/")[1],s=Math.floor(Date.now()/1e3);let i;switch(t){case"query":i=((e,t)=>({status:"success",data:{resultType:"vector",result:e.map(([e,s])=>({metric:e,value:[t,String(s)]}))}}))(Te(String(e.query)).instant,s);break;case"query_range":i=function(e,t,s,i){const r=Math.max(2,Math.min(2e3,Math.floor((s-t)/i)));return{status:"success",data:{resultType:"matrix",result:e.map(([e,s])=>({metric:e,values:Array.from({length:r+1},(e,n)=>[t+n*i,String(Math.max(0,s(n,r)))])}))}}}(Te(String(e.query)).range(function(e=42){let t=e;return()=>(t=16807*t%2147483647)/2147483647}()),Number(e.start),Number(e.end),parseFloat(e.step)||60);break;case"alerts":i={alerts:Be()};break;case"entries":i=[{entry_id:"demo",title:"Demo",url:"http://prometheus:9090",loaded:!0}];break;default:i={status:"success",data:[]}}return i}const De=new Set(["hui-card-picker"]);class Le{constructor(e,t,s=!1){this.hass=e,this.entryId=t,this.demo=s}_ws(e){return this.demo?qe(e):this.hass.callWS(e)}_msg(e,t={}){const s={type:`prometheus_dashboard/${e}`};this.entryId&&(s.entry_id=this.entryId);for(const[e,i]of Object.entries(t))void 0!==i&&(s[e]=i);return s}async instantQuery(e,t){return this._ws(this._msg("query",{query:e,time:t}))}async rangeQuery(e,t,s,i){return this._ws(this._msg("query_range",{query:e,start:t,end:s,step:i}))}async getLabels(){return(await this._ws(this._msg("labels"))).data}async getLabelValues(e){return(await this._ws(this._msg("label_values",{label:e}))).data}async getMetadata(e){return(await this._ws(this._msg("metadata",{metric:e}))).data}async getSeries(e){return(await this._ws(this._msg("series",{match:e}))).data}async getAlerts(){return(await this._ws(this._msg("alerts"))).alerts||[]}static async getEntries(e){return e.callWS({type:"prometheus_dashboard/entries"})}}const Fe=a`
  ha-card {
    border-radius: var(--ha-card-border-radius, 12px);
    overflow: hidden;
    padding: 16px;
    /* --ha-card-background is overridden by the grid card ("transparent inner cards") */
    background: var(--ha-card-background, var(--card-background-color, var(--paper-card-background-color, white)));
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
`,Ne={entry_id:"Prometheus server",query:"PromQL query",name:"Name",title:"Title",icon:"Icon",unit:"Unit",decimals:"Decimals",refresh_interval:"Refresh interval (s)",min:"Min",max:"Max",arc_width:"Arc width",sparkline:"Show sparkline",sparkline_hours:"Sparkline range (hours)",time_range:"Time range",step:"Step (s, empty = auto)",fill:"Fill area",show_legend:"Show legend",height:"Chart height (px)",orientation:"Orientation",show_values:"Show values",bar_height:"Bar height (px)",value:"Value",color:"Color",section_display:"Display",section_advanced:"Advanced",section_thresholds:"Thresholds",section_series:"Series",helper_entry_id:"Leave empty to use the first configured server",helper_unit:"Values are scaled within the dimension (B → KiB → MiB, W → kW, s → min → h). You can also type a custom suffix",helper_thresholds:"The color of the highest threshold not greater than the value is used",add_threshold:"Add threshold",add_series:"Add series",remove:"Remove",series_n:"Series {n}",horizontal:"Horizontal",vertical:"Vertical",no_query:"Set a PromQL query in the card editor",no_series:"Add at least one series in the card editor",no_data:"No data",stat_name:"Prometheus Stat",stat_desc:"Single Prometheus metric value with optional sparkline",gauge_name:"Prometheus Gauge",gauge_desc:"Radial gauge with threshold colors",timeseries_name:"Prometheus Time Series",timeseries_desc:"Grafana-like line/area chart for one or more PromQL queries",bar_name:"Prometheus Bar Chart",bar_desc:"Bar chart grouped by a Prometheus label",legend_format:"Legend format",helper_legend_format:"Grafana syntax: {{instance}} {{job}}. Empty = metric{labels}",helper_name_series:"Series name or legend format, e.g. {{device}} rx",palette:"Color scheme",palette_classic:"Classic palette (Grafana)","palette_green-yellow-red":"Green-Yellow-Red (by series)",palette_blues:"Blues (by series)",palette_greens:"Greens (by series)",palette_reds:"Reds (by series)",palette_purples:"Purples (by series)",palette_single:"Single color (theme)",color_mode:"Color by",color_mode_thresholds:"Thresholds",color_mode_series:"Series palette",line_width:"Line width",fill_opacity:"Fill opacity (%)",sparkline_fill:"Sparkline gradient",reduce:"Several series",reduce_none:"Show each series",reduce_sum:"Sum",reduce_avg:"Average",reduce_min:"Min",reduce_max:"Max",show_labels:"Show series labels",stacked:"Stack series",legend_mode:"Legend mode",legend_mode_list:"List",legend_mode_table:"Table",legend_values:"Legend values",legend_value_last:"Last",legend_value_min:"Min",legend_value_max:"Max",legend_value_mean:"Mean",sort:"Sort",sort_desc:"Value, descending",sort_asc:"Value, ascending",sort_name:"Name",sort_none:"As returned",limit:"Max bars",section_legend:"Legend",section_colors:"Colors",section_queries:"Queries",add_query:"Add query",query_n:"Query {n}",helper_series_query:"A query may return many series; each gets its own color and legend entry",transparent:"Transparent background",show_current:"Show current / hovered value",current:"Current",layout:"Layout",layout_default:"Value with icon",layout_tiles:"Colored tiles (Grafana)",tile_style:"Tile background",tile_style_gradient:"Gradient",tile_style_solid:"Solid",tile_height:"Tile height",tile_min_width:"Tile min width",timeline_name:"Prometheus State Timeline",timeline_desc:"Grafana-like state timeline: value changes over time as colored bands",pie_name:"Prometheus Pie Chart",pie_desc:"Pie / donut chart, one slice per returned series",row_height:"Row height",merge_values:"Merge equal values",section_mappings:"Value mappings",helper_mappings:"Exact value (e.g. 1) or range from..to → text and color. Unmapped values use thresholds or the palette",add_mapping:"Add mapping",from:"From",to:"To",text:"Text",helper_timeline_query:"Each returned series is a row. Name: plain text or {{label}}",helper_pie_query:"Instant query; each returned series is a slice. Name: plain text or {{label}}",pie_type:"Type",pie_type_donut:"Donut",pie_type_pie:"Pie",donut_width:"Donut width",show_total:"Total in the center",size:"Size",legend_position:"Legend position",legend_position_right:"Right",legend_position_bottom:"Bottom",legend_pie_value:"Value",legend_pie_percent:"Percent",other:"Other",total:"Total",test_query:"Test query",testing:"Testing…",test_ok:"✓ {n} series ({type}), {ms} ms",autocomplete_hint:"Ctrl+Space — suggestions",bargauge_name:"Prometheus Bar Gauge",bargauge_desc:"Grafana-like bar gauges with threshold colors, one per series",table_name:"Prometheus Table",table_desc:"Instant query as a table: labels as columns, sortable",heatmap_name:"Prometheus Heatmap",heatmap_desc:"Heatmap of histogram buckets or many series over time",alerts_name:"Prometheus Alerts",alerts_desc:"List of active Prometheus alerts",grid_name:"Prometheus Grid",grid_desc:"Layout grid: rows with any number of cards and width ratios (e.g. 25/25/50) on a shared background",display_mode:"Display mode",display_mode_gradient:"Gradient",display_mode_basic:"Basic",display_mode_lcd:"LCD (segments)",show_unfilled:"Show unfilled area",columns:"Columns (labels)",helper_columns:"Label names to show; empty = all labels",hide_columns:"Hidden labels",value_column:"Value column title",sort_by:"Sort by",sort_by_value:"Value",sort_by_label:"First label",sort_dir:"Direction",sort_dir_desc:"Descending",sort_dir_asc:"Ascending",max_rows:"Max rows",color_cells:"Color value cells by thresholds",heatmap_mode:"Data",heatmap_mode_histogram:"Histogram buckets (le label)",heatmap_mode_series:"Series as rows",color_scheme:"Color scheme",scheme_oranges:"Oranges",scheme_spectral:"Spectral",scheme_viridis:"Viridis",scheme_blues:"Blues",scheme_greens:"Greens",scheme_reds:"Reds",scheme_purples:"Purples",log_scale:"Logarithmic colors",show_legend_scale:"Show color scale",state_filter:"States",state_firing:"Firing",state_pending:"Pending",state_inactive:"Inactive",severity_filter:"Severity (comma separated, empty = all)",show_labels_alerts:"Show labels",show_annotations:"Show summary / description",no_alerts:"No active alerts",active_since:"since {time}",rows:"Rows",row_n:"Row {n}",add_row:"Add row",add_card:"Add card",widths:"Widths (%)",helper_widths:"Comma separated, e.g. 25,25,50. Empty = equal widths",gap:"Gap",row_height_grid:"Row height (px, empty = auto)",background:"Background",background_card:"Card",background_transparent:"Transparent",background_custom:"Custom color",background_color:"Background color",inner_transparent:"Transparent inner cards",stack_on_mobile:"One card per row on narrow screens",edit_card:"Edit",move_up:"Move up",move_down:"Move down",card_n:"Card {n}",empty_row:"Empty row — add a card in the editor",unit_col:"Unit",states:"States",severities:"Severity (comma separated, empty = all)",name_filter:"Alert name filter (text or regex)"},Oe={en:Ne,ru:{entry_id:"Сервер Prometheus",query:"Запрос PromQL",name:"Название",title:"Заголовок",icon:"Иконка",unit:"Единица измерения",decimals:"Знаков после запятой",refresh_interval:"Интервал обновления (с)",min:"Минимум",max:"Максимум",arc_width:"Толщина дуги",sparkline:"Показывать мини-график",sparkline_hours:"Период мини-графика (ч)",time_range:"Период",step:"Шаг (с, пусто = авто)",fill:"Заливка области",show_legend:"Показывать легенду",height:"Высота графика (px)",orientation:"Ориентация",show_values:"Показывать значения",bar_height:"Высота столбца (px)",value:"Значение",color:"Цвет",section_display:"Отображение",section_advanced:"Дополнительно",section_thresholds:"Пороги",section_series:"Серии",helper_entry_id:"Оставьте пустым, чтобы использовать первый настроенный сервер",helper_unit:"Значение масштабируется в пределах размерности (B → KiB → MiB, W → kW, s → мин → ч). Можно ввести свой суффикс",helper_thresholds:"Используется цвет наибольшего порога, не превышающего значение",add_threshold:"Добавить порог",add_series:"Добавить серию",remove:"Удалить",series_n:"Серия {n}",horizontal:"Горизонтально",vertical:"Вертикально",no_query:"Укажите запрос PromQL в редакторе карточки",no_series:"Добавьте хотя бы одну серию в редакторе карточки",no_data:"Нет данных",stat_name:"Prometheus: значение",stat_desc:"Одно значение метрики Prometheus с мини-графиком",gauge_name:"Prometheus: индикатор",gauge_desc:"Круговой индикатор с цветовыми порогами",timeseries_name:"Prometheus: временной ряд",timeseries_desc:"График в стиле Grafana для одного или нескольких запросов PromQL",bar_name:"Prometheus: столбцы",bar_desc:"Столбчатая диаграмма с группировкой по метке Prometheus",legend_format:"Формат легенды",helper_legend_format:"Синтаксис Grafana: {{instance}} {{job}}. Пусто = metric{labels}",helper_name_series:"Имя серии или формат легенды, например {{device}} rx",palette:"Цветовая схема",palette_classic:"Классическая палитра (Grafana)","palette_green-yellow-red":"Зелёный-жёлтый-красный (по сериям)",palette_blues:"Синие (по сериям)",palette_greens:"Зелёные (по сериям)",palette_reds:"Красные (по сериям)",palette_purples:"Фиолетовые (по сериям)",palette_single:"Один цвет (тема)",color_mode:"Цвет по",color_mode_thresholds:"Порогам",color_mode_series:"Палитре серий",line_width:"Толщина линии",fill_opacity:"Прозрачность заливки (%)",sparkline_fill:"Градиент под мини-графиком",reduce:"Несколько серий",reduce_none:"Показать каждую",reduce_sum:"Сумма",reduce_avg:"Среднее",reduce_min:"Минимум",reduce_max:"Максимум",show_labels:"Подписи серий",stacked:"Накопление (stack)",legend_mode:"Вид легенды",legend_mode_list:"Список",legend_mode_table:"Таблица",legend_values:"Значения в легенде",legend_value_last:"Последнее",legend_value_min:"Мин",legend_value_max:"Макс",legend_value_mean:"Среднее",sort:"Сортировка",sort_desc:"По значению, убыв.",sort_asc:"По значению, возр.",sort_name:"По имени",sort_none:"Как вернул Prometheus",limit:"Максимум столбцов",section_legend:"Легенда",section_colors:"Цвета",section_queries:"Запросы",add_query:"Добавить запрос",query_n:"Запрос {n}",helper_series_query:"Запрос может вернуть много серий — у каждой свой цвет и строка в легенде",transparent:"Прозрачный фон",show_current:"Показывать текущее / выделенное значение",current:"Текущее",layout:"Вид",layout_default:"Значение с иконкой",layout_tiles:"Цветные плашки (Grafana)",tile_style:"Фон плашки",tile_style_gradient:"Градиент",tile_style_solid:"Сплошной",tile_height:"Высота плашки",tile_min_width:"Мин. ширина плашки",timeline_name:"Prometheus: шкала состояний",timeline_desc:"Шкала состояний как в Grafana: изменения значения во времени цветными полосами",pie_name:"Prometheus: круговая диаграмма",pie_desc:"Круговая / кольцевая диаграмма, сектор на каждую серию",row_height:"Высота строки",merge_values:"Объединять одинаковые значения",section_mappings:"Сопоставление значений",helper_mappings:"Точное значение (например 1) или диапазон от..до → текст и цвет. Остальные значения — по порогам или палитре",add_mapping:"Добавить сопоставление",from:"От",to:"До",text:"Текст",helper_timeline_query:"Каждая серия — отдельная строка. Название: текст или {{label}}",helper_pie_query:"Мгновенный запрос; каждая серия — сектор. Название: текст или {{label}}",pie_type:"Тип",pie_type_donut:"Кольцо",pie_type_pie:"Круг",donut_width:"Толщина кольца",show_total:"Сумма в центре",size:"Размер",legend_position:"Положение легенды",legend_position_right:"Справа",legend_position_bottom:"Снизу",legend_pie_value:"Значение",legend_pie_percent:"Процент",other:"Прочее",total:"Всего",test_query:"Проверить запрос",testing:"Проверка…",test_ok:"✓ Серий: {n} ({type}), {ms} мс",autocomplete_hint:"Ctrl+Пробел — подсказки",bargauge_name:"Prometheus: шкалы",bargauge_desc:"Горизонтальные шкалы как в Grafana, цвет по порогам, по одной на серию",table_name:"Prometheus: таблица",table_desc:"Мгновенный запрос в виде таблицы: метки — столбцы, сортировка",heatmap_name:"Prometheus: тепловая карта",heatmap_desc:"Тепловая карта бакетов гистограммы или множества серий во времени",alerts_name:"Prometheus: алерты",alerts_desc:"Список активных алертов Prometheus",grid_name:"Prometheus: сетка",grid_desc:"Сетка для компоновки: строки с любым числом карточек и долями ширины (например 25/25/50) на общем фоне",display_mode:"Режим отображения",display_mode_gradient:"Градиент",display_mode_basic:"Простой",display_mode_lcd:"LCD (сегменты)",show_unfilled:"Показывать незаполненную часть",columns:"Столбцы (метки)",helper_columns:"Имена меток для показа; пусто = все метки",hide_columns:"Скрытые метки",value_column:"Заголовок столбца значения",sort_by:"Сортировать по",sort_by_value:"Значению",sort_by_label:"Первой метке",sort_dir:"Направление",sort_dir_desc:"По убыванию",sort_dir_asc:"По возрастанию",max_rows:"Максимум строк",color_cells:"Цвет ячеек значения по порогам",heatmap_mode:"Данные",heatmap_mode_histogram:"Бакеты гистограммы (метка le)",heatmap_mode_series:"Серии как строки",color_scheme:"Цветовая схема",scheme_oranges:"Оранжевая",scheme_spectral:"Спектральная",scheme_viridis:"Viridis",scheme_blues:"Синяя",scheme_greens:"Зелёная",scheme_reds:"Красная",scheme_purples:"Фиолетовая",log_scale:"Логарифмическая шкала цвета",show_legend_scale:"Показывать шкалу цвета",state_filter:"Состояния",state_firing:"Активные (firing)",state_pending:"Ожидающие (pending)",state_inactive:"Неактивные",severity_filter:"Severity (через запятую, пусто = все)",show_labels_alerts:"Показывать метки",show_annotations:"Показывать summary / description",no_alerts:"Активных алертов нет",active_since:"с {time}",rows:"Строки",row_n:"Строка {n}",add_row:"Добавить строку",add_card:"Добавить карточку",widths:"Ширины (%)",helper_widths:"Через запятую, например 25,25,50. Пусто = поровну",gap:"Отступ",row_height_grid:"Высота строки (px, пусто = авто)",background:"Фон",background_card:"Карточка",background_transparent:"Прозрачный",background_custom:"Свой цвет",background_color:"Цвет фона",inner_transparent:"Прозрачные вложенные карточки",stack_on_mobile:"На узком экране — по одной карточке в строке",edit_card:"Изменить",move_up:"Выше",move_down:"Ниже",card_n:"Карточка {n}",empty_row:"Пустая строка — добавьте карточку в редакторе",unit_col:"Ед.",states:"Состояния",severities:"Severity (через запятую, пусто = все)",name_filter:"Фильтр по имени алерта (текст или regex)"}};function Ie(e,t,s={}){const i=Oe[function(e){return(e?.locale?.language||e?.language||("undefined"!=typeof localStorage?localStorage.getItem("selectedLanguage")?.replace(/"/g,""):null)||("undefined"!=typeof navigator?navigator.language:"en")||"en").split("-")[0].toLowerCase()}(t)]||Ne;let r=i[e]??Ne[e]??e;for(const[e,t]of Object.entries(s))r=r.replace(`{${e}}`,String(t));return r}class Re extends de{constructor(){super(...arguments),this._loading=!1,this._connected=!1,this._onVisibility=()=>{"hidden"===document.visibilityState?this._stopAutoRefresh():this._restart()}}setConfig(e){if(!e||!e.type)throw new Error("Invalid configuration");this._config=e,this._error=void 0,this.toggleAttribute("transparent",Boolean(e.transparent)),this._restart()}set hass(e){const t=!this._hass;this._hass=e,t&&this._restart()}get hass(){return this._hass}connectedCallback(){super.connectedCallback(),this._connected=!0,document.addEventListener("visibilitychange",this._onVisibility),this._restart()}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,document.removeEventListener("visibilitychange",this._onVisibility),this._stopAutoRefresh()}getGridOptions(){return{columns:6,rows:"auto",min_columns:3}}_hasQuery(){return Boolean(this._config?.query&&this._config.query.trim())}get _client(){const e=this._config.entry_id||void 0,t=this._isDemo();return this._cachedClient&&this._cachedClient.entryId===e&&this._cachedClient.demo===t||(this._cachedClient=new Le(this._hass,e,t)),this._cachedClient}_isDemo(){return void 0===this._demo&&this._connected&&(this._demo=function(e){if(globalThis.__PROM_CARDS_DEMO__)return!0;let t=e;for(;t;){if(t.localName&&De.has(t.localName))return!0;t=t.parentNode||t.host||null}return!1}(this)),Boolean(this._demo)}async _safeFetch(){if(this._hass&&this._config&&this._hasQuery())try{await this._fetchData()}catch(e){this._error=this._formatError(e),this._loading=!1}}_formatError(e){return e?"string"==typeof e?e:"unknown_command"===e.code?"Prometheus Dashboard integration is not installed or not loaded":e.message||e.code||"Error fetching data":"Error"}_restart(){this._hass&&this._config&&this._connected&&("undefined"!=typeof document&&"hidden"===document.visibilityState||(this._startAutoRefresh(),this._safeFetch()))}_startAutoRefresh(){this._stopAutoRefresh();const e=Number(this._config.refresh_interval)||30;this._interval=window.setInterval(()=>this._safeFetch(),1e3*Math.max(5,e))}_stopAutoRefresh(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}shouldUpdate(e){return Boolean(this._config)&&super.shouldUpdate(e)}getCardSize(){return 3}renderError(){return U`
      <ha-card>
        <div class="error-state">${this._error}</div>
      </ha-card>
    `}renderLoading(){return U`
      <ha-card>
        <div class="loading-state"></div>
      </ha-card>
    `}renderPlaceholder(e="no_query"){return U`
      <ha-card>
        <div class="placeholder-state">${Ie(e,this._hass)}</div>
      </ha-card>
    `}}function He(e,t){if(!Number.isFinite(e))return String(e);if(null==t||Number.isNaN(t)){const t=Math.abs(e),s=0===t?0:Math.min(6,Math.max(0,2-Math.floor(Math.log10(t))));return String(parseFloat(e.toFixed(s)))}return e.toFixed(Math.max(0,Math.min(10,t)))}Re.styles=Fe,e([_e()],Re.prototype,"_config",void 0),e([_e()],Re.prototype,"_error",void 0),e([_e()],Re.prototype,"_loading",void 0);const je=(e,t="",s="")=>({prefix:s,text:e,suffix:t});function Ve(e,t,s=0,i=""){return(r,n)=>{if(0===r||!Number.isFinite(r))return je(He(r,n),t[s],i);let o=Math.floor(Math.log(Math.abs(r))/Math.log(e));return o=Math.max(-s,Math.min(t.length-1-s,o)),je(He(r/Math.pow(e,o),n),t[o+s],i)}}const Ue=["p","n","µ","m","","k","M","G","T","P","E"];function Ge(e,t=""){return Ve(1e3,Ue.map(t=>` ${t}${e}`),Ue.indexOf(t))}function We(e){return(t,s)=>je(He(t,s),e)}function Qe(e,t=0){return Ve(1024,e.map(e=>` ${e}`),t)}function Ke(e,t=0){return Ve(1e3,e.map(e=>` ${e}`),t)}function Ye(e){return Ve(1e3,["","K","M","B","T"].map(t=>` ${t}${e}`))}function Ze(e,t=!1){const s=Ve(1e3,["","K","M","B","T"]);return(i,r)=>{const n=s(i,r);return t?je(n.text,`${n.suffix} ${e}`):je(n.text,n.suffix,e)}}const Je=[[" ns",1e-9],[" µs",1e-6],[" ms",.001],[" s",1],[" min",60],[" hour",3600],[" day",86400],[" week",604800],[" year",31536e3]];function Xe(e){return(t,s)=>{const i=t*e,r=Math.abs(i);let n=Je.find(([,t])=>t===e)||Je[3];if(r>0){for(const e of Je)r>=e[1]&&(n=e);r<Je[0][1]&&(n=Je[0])}return je(He(i/n[1],s),n[0])}}const et=[["y",31536e3],["w",604800],["d",86400],["h",3600],["m",60],["s",1]];function tt(e){return t=>{let s=Math.abs(t*e);const i=t<0?"-":"";if(s<1)return je(`${i}${Math.round(1e3*s)}ms`);const r=[];for(const[e,t]of et){if(s>=t||r.length&&r.length<3){const i=Math.floor(s/t);s-=i*t,i>0&&r.push(`${i}${e}`)}if(r.length>=3)break}return je(i+(r.join(" ")||"0s"))}}function st(e){return t=>{const s=Math.abs(t)<1e11?1e3*t:t,i=new Date(s);if(Number.isNaN(i.getTime()))return je(String(t));if("iso"===e)return je(i.toISOString());if("local"===e)return je(i.toLocaleString());const r=(s-Date.now())/1e3,n=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),o=Math.abs(r),[a,l]=o<60?["second",1]:o<3600?["minute",60]:o<86400?["hour",3600]:o<2592e3?["day",86400]:o<31536e3?["month",2592e3]:["year",31536e3];return je(n.format(Math.round(r/l),a))}}function it(e,t){return s=>je(s?e:t)}const rt=[["Misc",[["none","Number",(e,t)=>je(He(e,t))],["short","Short (K, M, B)",Ve(1e3,[""," K"," Mil"," Bil"," Tri"])],["sci","Scientific notation",(e,t)=>je(e.toExponential(t??2))],["percent","Percent (0-100)",We("%")],["percentunit","Percent (0.0-1.0)",(e,t)=>je(He(100*e,t),"%")],["humidity","Humidity (%H)",We("%H")],["dB","Decibel",We(" dB")],["ppm","Parts-per-million (ppm)",We(" ppm")],["bool_yes_no","Yes / No",it("Yes","No")],["bool_on_off","On / Off",it("On","Off")],["bool","True / False",it("True","False")]]],["Data",[["bytes","bytes (IEC)",Qe(["B","KiB","MiB","GiB","TiB","PiB","EiB"])],["decbytes","bytes (SI)",Ke(["B","kB","MB","GB","TB","PB","EB"])],["bits","bits (IEC)",Qe(["b","Kib","Mib","Gib","Tib","Pib"])],["decbits","bits (SI)",Ke(["b","kb","Mb","Gb","Tb","Pb"])],["kbytes","kibibytes",Qe(["B","KiB","MiB","GiB","TiB","PiB"],1)],["mbytes","mebibytes",Qe(["B","KiB","MiB","GiB","TiB","PiB"],2)],["gbytes","gibibytes",Qe(["B","KiB","MiB","GiB","TiB","PiB"],3)]]],["Data rate",[["binBps","bytes/sec (IEC)",Qe(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"])],["Bps","bytes/sec (SI)",Ke(["B/s","kB/s","MB/s","GB/s","TB/s"])],["binbps","bits/sec (IEC)",Qe(["b/s","Kib/s","Mib/s","Gib/s","Tib/s"])],["bps","bits/sec (SI)",Ke(["b/s","kb/s","Mb/s","Gb/s","Tb/s"])],["KiBs","kibibytes/sec",Qe(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"],1)],["MiBs","mebibytes/sec",Qe(["B/s","KiB/s","MiB/s","GiB/s","TiB/s"],2)],["pps","packets/sec",Ke(["p/s","kp/s","Mp/s","Gp/s"])]]],["Throughput",[["ops","ops/sec (ops)",Ye("ops")],["reqps","requests/sec (rps)",Ye("req/s")],["rps","reads/sec (rps)",Ye("rd/s")],["wps","writes/sec (wps)",Ye("wr/s")],["iops","I/O ops/sec (iops)",Ye("io/s")],["opm","ops/min (opm)",Ye("ops/min")],["eps","events/sec",Ye("evt/s")]]],["Time",[["ns","nanoseconds (ns)",Xe(1e-9)],["µs","microseconds (µs)",Xe(1e-6)],["ms","milliseconds (ms)",Xe(.001)],["s","seconds (s)",Xe(1)],["m","minutes (m)",Xe(60)],["h","hours (h)",Xe(3600)],["d","days (d)",Xe(86400)],["dtdurations","duration (s)",tt(1)],["dtdurationms","duration (ms)",tt(.001)],["hertz","Hertz (1/s)",Ge("Hz")]]],["Date & time",[["dateTimeAsLocal","Local date/time",st("local")],["dateTimeAsIso","ISO 8601",st("iso")],["dateTimeFromNow","From now",st("fromNow")]]],["Energy",[["watt","Watt (W)",Ge("W")],["kwatt","Kilowatt (kW)",Ge("W","k")],["voltamp","Volt-ampere (VA)",Ge("VA")],["watth","Watt-hour (Wh)",Ge("Wh")],["kwatth","Kilowatt-hour (kWh)",Ge("Wh","k")],["joule","Joule (J)",Ge("J")],["volt","Volt (V)",Ge("V")],["mvolt","Millivolt (mV)",Ge("V","m")],["amp","Ampere (A)",Ge("A")],["mamp","Milliampere (mA)",Ge("A","m")],["ohm","Ohm (Ω)",Ge("Ω")]]],["Temperature",[["celsius","Celsius (°C)",We("°C")],["fahrenheit","Fahrenheit (°F)",We("°F")],["kelvin","Kelvin (K)",We(" K")]]],["Pressure",[["pressurembar","Millibars",Ge("bar","m")],["pressurebar","Bars",Ge("bar")],["pressurehpa","Hectopascals",We(" hPa")],["pressurekpa","Kilopascals",We(" kPa")],["pressurepsi","PSI",We(" psi")]]],["Length & area",[["lengthmm","millimeter (mm)",Ge("m","m")],["lengthm","meter (m)",Ge("m")],["lengthkm","kilometer (km)",Ge("m","k")],["areaM2","Square meters (m²)",We(" m²")]]],["Mass & volume",[["massmg","milligram (mg)",Ge("g","m")],["massg","gram (g)",Ge("g")],["masskg","kilogram (kg)",Ge("g","k")],["mlitre","millilitre (mL)",Ge("L","m")],["litre","litre (L)",Ge("L")],["m3","cubic meter (m³)",We(" m³")]]],["Velocity & flow",[["velocityms","meters/second (m/s)",We(" m/s")],["velocitykmh","kilometers/hour (km/h)",We(" km/h")],["flowlpm","Litre/min (L/min)",We(" L/min")],["flowcms","Cubic meter/sec (m³/s)",We(" m³/s")]]],["Currency",[["currencyUSD","Dollars ($)",Ze("$")],["currencyEUR","Euro (€)",Ze("€")],["currencyRUB","Rubles (₽)",Ze("₽",!0)]]]],nt=rt.flatMap(([e,t])=>t.map(([t,s,i])=>({id:t,label:s,category:e,fn:i}))),ot=new Map(nt.map(e=>[e.id,e])),at={"%":"percent",B:"bytes",seconds:"s","bytes/s":"binBps"};function lt(e,t,s){if(null==e||Number.isNaN(e))return{prefix:"",text:"-",suffix:""};const i=function(e){if(e)return ot.get(e)||ot.get(at[e])}(t);return i?i.fn(e,s):{prefix:"",text:He(e,s),suffix:t?` ${t}`:""}}function ct(e,t,s){const i=lt(e,s,t);return`${i.prefix}${i.text}${i.suffix}`}function dt(e,t,s){if(t&&t.trim())return t.replace(/\{\{\s*([\w.]+)\s*\}\}/g,(t,s)=>e[s]??"");const{__name__:i,...r}=e,n=Object.entries(r);if(!n.length)return s||i||"Value";const o=n.map(([e,t])=>`${e}="${t}"`).join(", ");return i?`${i}{${o}}`:`{${o}}`}function ht(e,t,s){if(t&&t.trim())return dt(e,t);const i=Object.keys(e).filter(e=>"__name__"!==e);return 1===i.length?e[i[0]]:i.length>1?dt(e):e.__name__||"Value"}const ut=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7"],pt={green:"#73BF69",yellow:"#FADE2A",orange:"#FF9830",red:"#F2495C",blue:"#5794F2",purple:"#B877D9","dark-green":"#37872D","dark-red":"#C4162A",text:"var(--primary-text-color)"},mt={"green-yellow-red":["#73BF69","#A0D468","#FADE2A","#FFB357","#FF9830","#F2495C"],blues:["#C0D8FF","#8AB8FF","#5794F2","#3274D9","#1F60C4"],greens:["#C8F2C2","#96D98D","#73BF69","#56A64B","#37872D"],reds:["#FFA6B0","#FF7383","#F2495C","#E02F44","#C4162A"],purples:["#DEB6F2","#CA95E5","#B877D9","#A352CC","#8F3BB8"]};function ft(e){if(e)return pt[e]||e}function _t(e,t,s){if(!t||0===t.length)return s||ut[0];const i=[...t].sort((e,t)=>t.value-e.value);for(const t of i)if(e>=t.value)return ft(t.color);return ft(i[i.length-1].color)||s||ut[0]}function gt(e,t){return/^#[0-9a-f]{6}$/i.test(e)?e+Math.round(255*t).toString(16).padStart(2,"0"):e}function vt(e,t=0,s=Date.now()){const i=function(e){const t=String(e).trim().match(/^(\d+)([smhdw])$/);return t?parseInt(t[1],10)*{s:1,m:60,h:3600,d:86400,w:604800}[t[2]]:NaN}(e);let r=Math.floor(s/1e3);t>1&&(r=Math.floor(r/t)*t);return{start:r-(Number.isFinite(i)?i:3600),end:r}}function yt(e,t=500,s=Date.now()){const{start:i,end:r}=vt(e,0,s),n=function(e,t,s=500){const i=Math.max(1,(t-e)/s);return[1,2,5,10,15,30,60,120,300,600,900,1800,3600,7200,10800,21600,43200,86400].find(e=>e>=i)??86400*Math.ceil(i/86400)}(i,r,t),{start:o,end:a}=vt(e,n,s);return{start:o,end:a,step:`${n}s`}}const xt=100;function bt(e){if(void 0===e)return null;const t=parseFloat(e);return Number.isFinite(t)?t:null}function wt(e,t,s){const i=e?.data;if(!i)return[];if("scalar"===i.resultType||"string"===i.resultType){const e=i.result||[];return[{metric:{},label:s||"Value",value:bt(e[1])}]}return(i.result||[]).slice(0,xt).map(e=>({metric:e.metric||{},label:dt(e.metric||{},t,s),value:bt(e.value?.[1])}))}function $t(e,t,s){return(e?.data?.result||[]).slice(0,xt).map(e=>({metric:e.metric||{},label:dt(e.metric||{},t,s),points:(e.values||[]).map(([e,t])=>[Number(e),bt(t)])}))}function kt(e){for(let t=e.length-1;t>=0;t--)if(null!==e[t][1])return e[t][1];return null}function Mt(e,t){const s=e.filter(e=>null!==e);if(!s.length)return null;switch(t){case"sum":return s.reduce((e,t)=>e+t,0);case"avg":return s.reduce((e,t)=>e+t,0)/s.length;case"min":return Math.min(...s);case"max":return Math.max(...s);default:return s[0]}}function At(e,t,s,i){return i?ft(i):"single"===s?"var(--primary-color)":function(e,t,s="classic"){if("classic"===s||!mt[s])return ut[e%ut.length];const i=mt[s];if(t<=1)return i[Math.floor(i.length/2)];const r=e/(t-1)*(i.length-1);return i[Math.round(r)]}(e,t,s||"classic")}let Et=0,St=class extends de{constructor(){super(...arguments),this.series=[],this.fill=!0,this.height=40,this.lineWidth=2,this._id="pspark-"+ ++Et}render(){const e=this.series.flatMap(e=>e.values.filter(e=>null!==e));if(!e.length)return U``;let t=Math.min(...e),s=Math.max(...e);t===s&&(t-=1,s+=1);const i=s-t,r=this.lineWidth/2/this.height*100,n=this.series.map((e,s)=>{const n=e.values.length,o=[];e.values.forEach((e,s)=>{if(null===e)return;const a=n>1?s/(n-1)*100:50,l=r+(100-2*r)*(1-(e-t)/i);o.push(`${a.toFixed(2)},${l.toFixed(2)}`)});const a=`${this._id}-${s}`,l=this.fill&&1===this.series.length&&o.length>1,c=o[0]?.split(",")[0]??"0",d=o[o.length-1]?.split(",")[0]??"100";return G`
        ${l?G`
            <defs>
              <linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${e.color}" stop-opacity="0.35"></stop>
                <stop offset="100%" stop-color="${e.color}" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
            <polygon points="${c},100 ${o.join(" ")} ${d},100" fill="url(#${a})" stroke="none"></polygon>`:""}
        <polyline points="${o.join(" ")}" stroke="${e.color}" stroke-width="${this.lineWidth}"></polyline>
      `});return U`
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="height: ${this.height}px">${n}</svg>
    `}};St.styles=a`
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
  `,e([fe({attribute:!1})],St.prototype,"series",void 0),e([fe({type:Boolean})],St.prototype,"fill",void 0),e([fe({type:Number})],St.prototype,"height",void 0),e([fe({type:Number,attribute:"line-width"})],St.prototype,"lineWidth",void 0),St=e([ue("prometheus-sparkline")],St);const Ct=a`
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
`;function Pt(e,t,s,i){i=i||{},s=null==s?{}:s;const r=new CustomEvent(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed,detail:s});return e.dispatchEvent(r),r}function zt(e,t){Pt(e,"config-changed",{config:t})}let Tt;function Bt(){return customElements.get("ha-form")&&customElements.get("ha-selector")?Promise.resolve():(Tt||(Tt=(async()=>{try{const e=await(window.loadCardHelpers?.());if(!e)return;const t=await e.createCardElement({type:"entities",entities:[]});await(t?.constructor?.getConfigElement?.())}catch(e){console.warn("prometheus-cards: failed to preload HA form components",e)}})()),Tt)}function qt(e){const t={};for(const[s,i]of Object.entries(e))null!=i&&""!==i&&("number"==typeof i&&Number.isNaN(i)||(t[s]=i));return t}const Dt={name:"entry_id",selector:{config_entry:{integration:"prometheus_dashboard"}}},Lt={name:"query",required:!0,selector:{text:{multiline:!0}}},Ft={name:"refresh_interval",selector:{number:{min:5,max:86400,step:1,mode:"box",unit_of_measurement:"s"}}},Nt={name:"transparent",selector:{boolean:{}}};function Ot(...e){return{title:"section_advanced",schema:[{name:"",type:"grid",schema:[Ft,...e,Nt]}]}}const It={name:"decimals",selector:{number:{min:0,max:6,step:1,mode:"box"}}},Rt={name:"unit",selector:{select:{mode:"dropdown",custom_value:!0,options:nt.map(e=>({value:e.id,label:`${e.category} › ${e.label}`}))}}},Ht={name:"legend_format",selector:{text:{}}};function jt(e){return{name:"palette",selector:{select:{mode:"dropdown",options:["classic","green-yellow-red","blues","greens","reds","purples","single"].map(t=>({value:t,label:Ie(`palette_${t}`,e)}))}}}}function Vt(e){return{name:"color_mode",selector:{select:{mode:"dropdown",options:["thresholds","series"].map(t=>({value:t,label:Ie(`color_mode_${t}`,e)}))}}}}const Ut=["15m","30m","1h","3h","6h","12h","24h","2d","7d","30d"],Gt=["abs","absent","absent_over_time","avg_over_time","ceil","changes","clamp","clamp_max","clamp_min","count_over_time","day_of_month","day_of_week","delta","deriv","exp","floor","histogram_quantile","holt_winters","hour","idelta","increase","irate","label_join","label_replace","last_over_time","ln","log2","log10","max_over_time","min_over_time","minute","month","predict_linear","quantile_over_time","rate","resets","round","scalar","sort","sort_desc","sqrt","stddev_over_time","sum_over_time","time","timestamp","vector","year"],Wt=["sum","avg","min","max","count","count_values","group","stddev","stdvar","topk","bottomk","quantile"],Qt=["by","without","on","ignoring","group_left","group_right","offset","bool","and","or","unless"];function Kt(e,t){const s=e.slice(0,t).match(/([a-zA-Z_:][a-zA-Z0-9_:]*)\s*$/);if(!s)return;const i=s[1];return Wt.includes(i)||Gt.includes(i)||Qt.includes(i)?void 0:i}function Yt(e,t,s=50){const i=e.toLowerCase(),r=[],n=[];for(const e of t){const t=e.value.toLowerCase();!i||t.startsWith(i)?r.push(e):i.length>=2&&t.includes(i)&&n.push(e)}return[...r,...n].filter(t=>t.value!==e).slice(0,s)}const Zt=new Map;function Jt(e,t){const s=Zt.get(e);if(s&&Date.now()-s.at<3e5)return s.value;const i=t().catch(t=>{throw Zt.delete(e),t});return Zt.set(e,{at:Date.now(),value:i}),i}const Xt=[...Wt.map(e=>({value:e,kind:"aggregation"})),...Gt.map(e=>({value:e,kind:"function"})),...Qt.map(e=>({value:e,kind:"keyword"}))];async function es(e,t,s){try{if("metric"===s.kind){if(!s.prefix)return[];const i=await async function(e,t){const s=new Le(e,t),[i,r]=await Promise.all([Jt(`${t}|names`,()=>s.getLabelValues("__name__")),Jt(`${t}|meta`,()=>s.getMetadata().catch(()=>({})))]);return i.map(e=>{const t=r[e]?.[0];return{value:e,kind:"metric",detail:t?`${t.type} · ${t.help}`:void 0}})}(e,t).catch(()=>[]);return Yt(s.prefix,[...Xt,...i],40)}if("label"===s.kind){const i=await async function(e,t,s){const i=new Le(e,t);if(s){const e=await Jt(`${t}|series|${s}`,()=>i.getSeries([s])),r=new Set;for(const t of e.slice(0,2e3))Object.keys(t).forEach(e=>"__name__"!==e&&r.add(e));if(r.size)return[...r].sort()}return(await Jt(`${t}|labels`,()=>i.getLabels())).filter(e=>"__name__"!==e)}(e,t,s.metric);return Yt(s.prefix,i.map(e=>({value:e,kind:"label"})),40)}const i=await async function(e,t,s,i){const r=new Le(e,t);if(i){const e=await Jt(`${t}|series|${i}`,()=>r.getSeries([i])),n=new Set;for(const t of e.slice(0,5e3))void 0!==t[s]&&n.add(t[s]);if(n.size)return[...n].sort()}return Jt(`${t}|values|${s}`,()=>r.getLabelValues(s))}(e,t,s.label,s.metric);return Yt(s.prefix,i.map(e=>({value:e,kind:"value"})),40)}catch{return"metric"===s.kind?Yt(s.prefix,Xt,40):[]}}const ts=a`
  :host {
    display: block;
    position: relative;
  }
  .label {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin: 0 0 4px 2px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    min-height: 56px;
    resize: vertical;
    padding: 10px 12px;
    font-family: var(--code-font-family, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace);
    font-size: 13px;
    line-height: 1.45;
    color: var(--primary-text-color);
    background: var(--mdc-text-field-fill-color, var(--secondary-background-color));
    border: none;
    border-bottom: 1px solid var(--secondary-text-color);
    border-radius: 4px 4px 0 0;
    outline: none;
  }
  textarea:focus {
    border-bottom: 2px solid var(--primary-color);
  }
  .popup {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
    max-height: 240px;
    overflow-y: auto;
    background: var(--card-background-color, #fff);
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    padding: 4px 0;
  }
  .item {
    display: flex;
    gap: 8px;
    align-items: baseline;
    padding: 4px 12px;
    cursor: pointer;
    font-size: 13px;
    white-space: nowrap;
  }
  .item.active,
  .item:hover {
    background: color-mix(in srgb, var(--primary-color) 15%, transparent);
  }
  .item .value {
    font-family: var(--code-font-family, ui-monospace, monospace);
    color: var(--primary-text-color);
  }
  .item .kind {
    font-size: 10px;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    min-width: 42px;
  }
  .item .detail {
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 11px;
  }
  .toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
    flex-wrap: wrap;
  }
  .test-btn {
    border: 1px solid var(--divider-color);
    background: none;
    color: var(--primary-color);
    border-radius: 16px;
    padding: 4px 12px;
    font-size: 12px;
    cursor: pointer;
  }
  .test-btn[disabled] {
    opacity: 0.5;
    cursor: default;
  }
  .hint {
    font-size: 11px;
    color: var(--secondary-text-color);
  }
  .result {
    margin-top: 6px;
    font-size: 12px;
    border-radius: 6px;
    padding: 8px 10px;
    background: var(--secondary-background-color);
    word-break: break-word;
  }
  .result.ok {
    border-left: 3px solid var(--success-color, #43a047);
  }
  .result.err {
    border-left: 3px solid var(--error-color, #db4437);
    color: var(--error-color, #db4437);
  }
  .result code {
    font-family: var(--code-font-family, ui-monospace, monospace);
    font-size: 11px;
  }
  .result ul {
    margin: 4px 0 0;
    padding-left: 16px;
  }
`;let ss=class extends de{constructor(){super(...arguments),this.value="",this.label="",this.mode="instant",this._items=[],this._active=0,this._testing=!1,this._seq=0}_emit(e){this.value=e,Pt(this,"value-changed",{value:e})}_onInput(){this._emit(this._input.value),this._test=void 0,this._schedule()}_schedule(){clearTimeout(this._timer),this._timer=window.setTimeout(()=>this._complete(),150)}async _complete(){if(!this.hass||!this._input)return;const e=function(e,t){const s=e.slice(0,t),i=s.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*(=~|!~|=|!=)\s*"([^"]*)$/);if(i){const r=s.lastIndexOf("{");return{kind:"label_value",label:i[1],prefix:i[3],from:t-i[3].length,metric:r>=0?Kt(e,r):void 0}}const r=s.lastIndexOf("{"),n=s.lastIndexOf("}"),o=s.match(/\b(by|without|on|ignoring|group_left|group_right)\s*\(([^()]*)$/),a=r>n;if(a||o){const i=s.match(/([a-zA-Z_][a-zA-Z0-9_]*)$/),n=i?i[1]:"",o=s.slice(0,t-n.length).trimEnd();return o.endsWith("{")||o.endsWith(",")||o.endsWith("(")?{kind:"label",prefix:n,from:t-n.length,metric:a?Kt(e,r):void 0}:{kind:"none"}}const l=s.match(/([a-zA-Z_:][a-zA-Z0-9_:]*)$/);if(l)return"["===s[t-l[1].length-1]||/[0-9]/.test(l[1][0])?{kind:"none"}:{kind:"metric",prefix:l[1],from:t-l[1].length};return{kind:"none"}}(this._input.value,this._input.selectionStart??this._input.value.length);if("none"===e.kind)return void this._close();const t=++this._seq,s=await es(this.hass,this.entryId,e);t===this._seq&&(this._ctx=e,this._items=s,this._active=0)}_close(){this._items=[],this._ctx=void 0}_pick(e){if(!this._ctx)return;const t=this._input.selectionStart??this._input.value.length,s=function(e,t,s,i){let r=i.value,n=e.slice(t);const o=n.match(/^[a-zA-Z0-9_:]*/);if(o&&"label_value"!==s.kind&&(n=n.slice(o[0].length)),"label_value"===s.kind){const e=n.match(/^[^"},]*/);e&&(n=n.slice(e[0].length)),n.startsWith('"')||(r+='"')}else"function"===i.kind||"aggregation"===i.kind?r+="(":"label"!==s.kind||/^\s*(=|!=|=~|!~)/.test(n)||/\b(by|without|on|ignoring|group_left|group_right)\s*\([^()]*$/.test(e.slice(0,s.from))||(r+='="');return{text:e.slice(0,s.from)+r+n,cursor:s.from+r.length+("label_value"!==s.kind||r.endsWith('"')?0:1)}}(this._input.value,t,this._ctx,e);this._input.value=s.text,this._input.setSelectionRange(s.cursor,s.cursor),this._emit(s.text),this._close(),this._input.focus(),this._schedule()}_onKeyDown(e){if(e.stopPropagation()," "===e.key&&e.ctrlKey)return e.preventDefault(),void this._complete();if(this._items.length)if("ArrowDown"===e.key||"ArrowUp"===e.key){e.preventDefault();const t="ArrowDown"===e.key?1:-1;this._active=(this._active+t+this._items.length)%this._items.length,this.updateComplete.then(()=>this.shadowRoot?.querySelector(".item.active")?.scrollIntoView({block:"nearest"}))}else"Enter"===e.key||"Tab"===e.key?(e.preventDefault(),this._pick(this._items[this._active])):"Escape"===e.key&&this._close()}async _runTest(){this.hass&&this.value?.trim()&&(this._testing=!0,this._test=await async function(e,t,s,i){const r=new Le(e,t),n=performance.now();try{const t=Math.floor(Date.now()/1e3),o="range"===i?await r.rangeQuery(s,t-3600,t,"60s"):await r.instantQuery(s),a=Math.round(performance.now()-n),l=o.data;if("scalar"===l?.resultType){const t=l.result[1];return{ok:!0,text:Ie("test_ok",e,{n:1,ms:a,type:"scalar"}),samples:[`scalar = ${t}`]}}const c=Array.isArray(l?.result)?l.result:[],d=c.slice(0,5).map(e=>{const t=e.value?e.value[1]:e.values?.[e.values.length-1]?.[1];return`${dt(e.metric||{})} = ${t??"-"}`});return{ok:!0,text:Ie("test_ok",e,{n:c.length,ms:a,type:l?.resultType||"?"}),samples:d}}catch(e){return{ok:!1,text:e?.message||e?.code||String(e)}}}(this.hass,this.entryId,this.value,this.mode),this._testing=!1)}_renderPopup(){if(!this._items.length)return Q;return U`<div class="popup" @mousedown=${e=>e.preventDefault()}>
      ${this._items.map((e,t)=>U`<div class="item ${t===this._active?"active":""}" @click=${()=>this._pick(e)}>
          <span class="kind">${(e=>"aggregation"===e?"agg":"function"===e?"fn":e)(e.kind)}</span>
          <span class="value">${e.value}</span>
          ${e.detail?U`<span class="detail" title=${e.detail}>${e.detail}</span>`:Q}
        </div>`)}
    </div>`}render(){const e=this._test;return U`
      ${this.label?U`<div class="label">${this.label}</div>`:Q}
      <textarea
        spellcheck="false"
        .value=${this.value||""}
        placeholder="rate(node_network_receive_bytes_total[5m])"
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
        @click=${this._schedule}
        @blur=${()=>setTimeout(()=>this._close(),150)}
      ></textarea>
      ${this._renderPopup()}
      <div class="toolbar">
        <button class="test-btn" ?disabled=${this._testing||!this.value?.trim()} @click=${this._runTest}>
          ${this._testing?Ie("testing",this.hass):Ie("test_query",this.hass)}
        </button>
        <span class="hint">${Ie("autocomplete_hint",this.hass)}</span>
      </div>
      ${e?U`<div class="result ${e.ok?"ok":"err"}">
            ${e.text}
            ${e.samples?.length?U`<ul>${e.samples.map(e=>U`<li><code>${e}</code></li>`)}</ul>`:Q}
          </div>`:Q}
    `}};ss.styles=ts,e([fe({attribute:!1})],ss.prototype,"hass",void 0),e([fe()],ss.prototype,"value",void 0),e([fe()],ss.prototype,"label",void 0),e([fe({attribute:!1})],ss.prototype,"entryId",void 0),e([fe()],ss.prototype,"mode",void 0),e([_e()],ss.prototype,"_items",void 0),e([_e()],ss.prototype,"_active",void 0),e([_e()],ss.prototype,"_test",void 0),e([_e()],ss.prototype,"_testing",void 0),e([ge("textarea")],ss.prototype,"_input",void 0),ss=e([ue("prometheus-query-editor")],ss);const is="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";let rs=class extends de{constructor(){super(...arguments),this.items=[],this.schema=[],this.newItem=()=>({}),this.itemTitle="",this.addLabel="",this.queryMode="instant",this._computeLabel=e=>Ie(e.name,this.hass)}get _hasQuery(){return this.schema.some(e=>"query"===e.name&&!e.schema)}get _formSchema(){return this.schema.filter(e=>!("query"===e.name&&!e.schema))}_emit(e){Pt(this,"value-changed",{value:e})}_itemChanged(e,t){t.stopPropagation();const s=[...this.items],i={...s[e],...t.detail.value};for(const e of this._fieldNames(this._formSchema))e in t.detail.value||delete i[e];for(const e of Object.keys(i))""!==i[e]&&void 0!==i[e]||delete i[e];s[e]=i,this._emit(s)}_fieldNames(e){return e.flatMap(e=>e.schema?this._fieldNames(e.schema):[e.name])}_remove(e){const t=[...this.items];t.splice(e,1),this._emit(t)}_add(){this._emit([...this.items,this.newItem()])}render(){return U`
      ${this.items.map((e,t)=>U`
          <div class="item">
            <div class="item-header">
              <span>${this.itemTitle?this.itemTitle.replace("{n}",String(t+1)):Q}</span>
              <ha-icon-button
                .label=${Ie("remove",this.hass)}
                .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                @click=${()=>this._remove(t)}
              ></ha-icon-button>
            </div>
            ${this._hasQuery?U`<prometheus-query-editor
                  .hass=${this.hass}
                  .label=${Ie("query",this.hass)}
                  .value=${e.query||""}
                  .entryId=${this.entryId}
                  .mode=${this.queryMode}
                  @value-changed=${e=>{e.stopPropagation();const s=[...this.items];s[t]={...s[t],query:e.detail.value},this._emit(s)}}
                ></prometheus-query-editor>`:Q}
            <ha-form
              .hass=${this.hass}
              .data=${e}
              .schema=${this._formSchema}
              .computeLabel=${this._computeLabel}
              @value-changed=${e=>this._itemChanged(t,e)}
            ></ha-form>
          </div>
        `)}
      <ha-button class="add" @click=${this._add}>
        <ha-svg-icon slot="start" .path=${is}></ha-svg-icon>
        <ha-svg-icon slot="icon" .path=${is}></ha-svg-icon>
        ${this.addLabel}
      </ha-button>
    `}};rs.styles=a`
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
  `,e([fe({attribute:!1})],rs.prototype,"hass",void 0),e([fe({attribute:!1})],rs.prototype,"items",void 0),e([fe({attribute:!1})],rs.prototype,"schema",void 0),e([fe({attribute:!1})],rs.prototype,"newItem",void 0),e([fe()],rs.prototype,"itemTitle",void 0),e([fe()],rs.prototype,"addLabel",void 0),e([fe({attribute:!1})],rs.prototype,"entryId",void 0),e([fe()],rs.prototype,"queryMode",void 0),rs=e([ue("prometheus-list-editor")],rs);const ns=[{name:"",type:"grid",schema:[{name:"value",required:!0,selector:{number:{mode:"box",step:"any"}}},{name:"color",required:!0,selector:{text:{type:"color"}}}]}];class os extends de{constructor(){super(...arguments),this._ready=!1,this._computeLabel=e=>Ie(e.name,this.hass),this._computeHelper=e=>{const t=`helper_${e.name}`,s=Ie(t,this.hass);return s===t?void 0:s}}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),Bt().then(()=>{this._ready=!0})}_defaults(){return{}}_renderExtra(){return Q}_renderThresholds(){const e=this._config;return U`
      <div class="section-title">${Ie("section_thresholds",this.hass)}</div>
      <div class="helper">${Ie("helper_thresholds",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${e.thresholds||[]}
        .schema=${ns}
        .newItem=${()=>({value:0,color:"#73BF69"})}
        .addLabel=${Ie("add_threshold",this.hass)}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({thresholds:t.length?t:void 0})}}
      ></prometheus-list-editor>
    `}_updateConfig(e){this._config&&(this._config=qt({...this._config,...e}),zt(this,this._config))}_formChanged(e){if(e.stopPropagation(),!this._config)return;const t=e.detail.value,s=qt({...this._config,...t}),i=e.target,r=i?.schema?this._fieldNames(i.schema):[];for(const e of r)e in t&&""!==t[e]&&void 0!==t[e]||delete s[e];const n=this._defaults();for(const[e,t]of Object.entries(n))e in this._config||s[e]!==t||delete s[e];s.type=this._config.type,this._config=s,zt(this,this._config)}_fieldNames(e){const t=[];for(const s of e)s.schema?t.push(...this._fieldNames(s.schema)):t.push(s.name);return t}_renderSchema(e,t){const s=[];let i=[];const r=()=>{if(!i.length)return;const e=i;i=[],s.push(U`<ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${e}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._formChanged}
      ></ha-form>`)};for(const t of e)"query"!==t.name||t.schema?i.push(t):(r(),s.push(U`<prometheus-query-editor
          .hass=${this.hass}
          .label=${Ie("query",this.hass)}
          .value=${this._config?.query||""}
          .entryId=${this._config?.entry_id||void 0}
          .mode=${this._queryMode()}
          @value-changed=${e=>{e.stopPropagation(),this._updateConfig({query:e.detail.value})}}
        ></prometheus-query-editor>`));return r(),U`${s}`}_queryMode(){return"instant"}render(){if(!this.hass||!this._config||!this._ready)return U``;const e={...this._defaults(),...this._config};return U`
      <div class="card-config">
        ${this._sections().map(t=>U`
            ${t.title?U`<div class="section-title">${Ie(t.title,this.hass)}</div>`:Q}
            ${this._renderSchema(t.schema,e)}
          `)}
        ${this._renderExtra()}
      </div>
    `}}os.styles=Ct,e([fe({attribute:!1})],os.prototype,"hass",void 0),e([_e()],os.prototype,"_config",void 0),e([_e()],os.prototype,"_ready",void 0);let as=class extends os{_queryMode(){return this._config?.sparkline?"range":"instant"}_defaults(){return{refresh_interval:30,sparkline:!1,sparkline_hours:24,line_width:2,sparkline_fill:!0,reduce:"none",layout:"default",tile_style:"gradient",tile_height:110,palette:"classic",color_mode:"thresholds"}}_options(e,t){return t.map(t=>({value:t,label:Ie(`${e}${t}`,this.hass)}))}_sections(){const e=this._config?.sparkline?[{name:"sparkline_hours",selector:{number:{min:1,max:720,mode:"box",unit_of_measurement:"h"}}},{name:"line_width",selector:{number:{min:1,max:10,step:.5,mode:"slider",unit_of_measurement:"px"}}},{name:"sparkline_fill",selector:{boolean:{}}}]:[],t=this._options("reduce_",["none","sum","avg","min","max"]),s="tiles"===this._config?.layout;return[{schema:[Dt,Lt,{name:"",type:"grid",schema:[{name:"reduce",selector:{select:{mode:"dropdown",options:t}}},Ht]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"layout",selector:{select:{mode:"dropdown",options:this._options("layout_",["default","tiles"])}}},...s?[{name:"tile_style",selector:{select:{mode:"dropdown",options:this._options("tile_style_",["gradient","solid"])}}},{name:"tile_height",selector:{number:{min:50,max:400,mode:"box",unit_of_measurement:"px"}}},{name:"tile_min_width",selector:{number:{min:60,max:600,mode:"box",unit_of_measurement:"px"}}}]:[]]},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},...s?[]:[{name:"icon",selector:{icon:{}}}],Rt,It]},{name:"",type:"grid",schema:[{name:"sparkline",selector:{boolean:{}}},...e]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[Vt(this.hass),jt(this.hass)]}]},Ot()]}_renderExtra(){return U`${this._renderThresholds()}`}};as=e([ue("prometheus-stat-card-editor")],as);const ls=a`
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
`;let cs=class extends Re{constructor(){super(...arguments),this._items=[],this._loaded=!1}static get styles(){return[Fe,ls]}static getStubConfig(){return{type:"custom:prometheus-stat-card",name:"Targets up",query:"sum(up)",icon:"mdi:server-network",decimals:0,sparkline:!0}}static getConfigElement(){return document.createElement("prometheus-stat-card-editor")}async _fetchData(){const e=this._config;try{if(this._loading=!0,e.sparkline){const{start:t,end:s,step:i}=yt(`${e.sparkline_hours||24}h`,120),r=await this._client.rangeQuery(e.query,t,s,i);this._items=$t(r,e.legend_format).map(t=>({label:ht(t.metric,e.legend_format),value:kt(t.points),history:t.points.map(e=>e[1])}))}else{const t=await this._client.instantQuery(e.query);this._items=wt(t,e.legend_format).map(t=>({...t,label:ht(t.metric,e.legend_format),history:[]}))}this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_displayItems(){const e=this._config.reduce||"none";if("none"===e||this._items.length<=1)return this._items;const t=Math.max(...this._items.map(e=>e.history.length)),s=[];for(let i=0;i<t;i++)s.push(Mt(this._items.map(e=>e.history[i]??null),e));const i=Mt(this._items.map(e=>e.value),e);return[{label:this._config.name||"",value:i,history:s}]}_color(e,t,s){const i=this._config;if("series"!==i.color_mode&&(i.thresholds?.length||1===s)){const r=s>1?At(t,s,i.palette):void 0;return _t(e.value??0,i.thresholds||[],r)}return At(t,s,i.palette)}_renderValue(e,t="value"){const s=lt(e,this._config.unit,this._config.decimals),i=s.suffix.trim();return U`<span class=${t}>${s.prefix}${s.text}</span>${i?U`<span class="unit">${i}</span>`:Q}`}_renderRows(e){return U`<div class="rows">
      ${e.map((t,s)=>U`<div class="row">
          <span class="dot" style="background: ${this._color(t,s,e.length)}"></span>
          <span class="label" title=${t.label}>${t.label}</span>
          <span class="row-value">${this._renderValue(t.value,"")}</span>
        </div>`)}
    </div>`}_tileBackground(e){return"solid"===this._config.tile_style?e:`linear-gradient(120deg, color-mix(in srgb, ${e} 70%, white) 0%, ${e} 45%, color-mix(in srgb, ${e} 75%, black) 100%)`}_renderTiles(e){const t=this._config,s=e.length?e:[{label:t.name||"",value:null,history:[]}],i=s.length>1,r=[`--tile-min: ${t.tile_min_width||(i?140:200)}px`,`--tile-height: ${t.tile_height||110}px`,`--tile-font: ${i?28:40}px`].join(";");return U`
      <ha-card>
        ${t.name&&i?U`<div class="card-title">${t.name}</div>`:Q}
        <div class="tiles" style=${r}>
          ${s.map((e,r)=>{const n=this._color(e,r,s.length),o=i?e.label:t.name||e.label;return U`
              <div class="tile" style="--tile-bg: ${this._tileBackground(n)}">
                ${o?U`<div class="tile-label" title=${o}>${o}</div>`:Q}
                <div class="tile-value">${this._renderValue(e.value,"")}</div>
                ${t.sparkline&&e.history.length>1?U`<prometheus-sparkline
                      .series=${[{values:e.history,color:"rgba(255,255,255,0.85)"}]}
                      .fill=${!1!==t.sparkline_fill}
                      .lineWidth=${t.line_width??2}
                      .height=${Math.round(.4*(t.tile_height||110))}
                    ></prometheus-sparkline>`:Q}
              </div>
            `})}
        </div>
      </ha-card>
    `}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const t=this._displayItems();if("tiles"===e.layout)return this._renderTiles(t);const s=t.length<=1,i=t[0]||{label:"",value:null,history:[]},r=this._color(i,0,t.length),n=e.thresholds?.length?`--value-color: ${r}`:"",o=e.sparkline&&t.some(e=>e.history.length>1);return U`
      <ha-card>
        <div class="stat-container">
          ${e.icon?U`<div class="icon-container" style="--icon-color: ${r}">
                <ha-icon .icon=${e.icon}></ha-icon>
              </div>`:Q}
          <div class="info-container">
            ${e.name?U`<div class="name">${e.name}</div>`:Q}
            ${s?U`<div class="value-container" style=${n}>${this._renderValue(i.value)}</div>`:Q}
          </div>
        </div>
        ${s?Q:this._renderRows(t)}
        ${o?U`<prometheus-sparkline
              .series=${t.map((e,s)=>({values:e.history,color:this._color(e,s,t.length)}))}
              .fill=${!1!==e.sparkline_fill}
              .lineWidth=${e.line_width??2}
              .height=${40}
            ></prometheus-sparkline>`:Q}
      </ha-card>
    `}getGridOptions(){return{columns:this._displayItems().length>1||"tiles"===this._config?.layout?6:3,rows:"auto",min_columns:3}}getCardSize(){return"tiles"===this._config?.layout?3:2+Math.min(4,Math.max(0,this._displayItems().length-1))}};e([_e()],cs.prototype,"_items",void 0),e([_e()],cs.prototype,"_loaded",void 0),cs=e([ue("prometheus-stat-card")],cs);const ds=a`
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
`;let hs=class extends os{_defaults(){return{min:0,max:100,arc_width:8,refresh_interval:30,show_labels:!0,palette:"classic",color_mode:"thresholds"}}_sections(){return[{schema:[Dt,Lt,{name:"",type:"grid",schema:[Ht,{name:"show_labels",selector:{boolean:{}}}]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[Vt(this.hass),jt(this.hass)]}]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},Rt,It,{name:"arc_width",selector:{number:{min:2,max:20,step:1,mode:"slider"}}}]}]},Ot()]}_renderExtra(){return U`${this._renderThresholds()}`}};hs=e([ue("prometheus-gauge-card-editor")],hs);const us=40*Math.PI;let ps=class extends Re{constructor(){super(...arguments),this._items=[],this._loaded=!1}static get styles(){return[Fe,ds]}static getStubConfig(){return{type:"custom:prometheus-gauge-card",name:"Prometheus targets up",query:"avg(up) * 100",unit:"percent",min:0,max:100,decimals:0,thresholds:[{value:0,color:"#F2495C"},{value:50,color:"#FADE2A"},{value:90,color:"#73BF69"}]}}static getConfigElement(){return document.createElement("prometheus-gauge-card-editor")}async _fetchData(){try{this._loading=!0;const e=await this._client.instantQuery(this._config.query);this._items=wt(e,this._config.legend_format).map(e=>({...e,label:ht(e.metric,this._config.legend_format)})),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_color(e,t,s){const i=this._config;return"series"===i.color_mode||!i.thresholds?.length&&s>1?At(t,s,i.palette):_t(e??i.min??0,i.thresholds||[],At(t,s,i.palette))}_renderGauge(e,t,s){const i=this._config,r=i.min??0,n=i.max??100,o=i.arc_width??8,a=e.value??r,l=Math.min(Math.max(a,r),n),c=n>r?(l-r)/(n-r):0,d=this._color(e.value,t,s),h=lt(e.value,i.unit,i.decimals),u=s>1&&!1!==i.show_labels;return U`
      <div class="gauge">
        <div class="gauge-container">
          <svg viewBox="0 0 100 60" class="gauge-svg">
            <path class="arc-bg" d="M 10 50 A 40 40 0 0 1 90 50" fill="none"
              stroke-width="${o}" stroke-linecap="round"></path>
            <path class="arc-fg" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="${d}"
              stroke-width="${o}" stroke-linecap="round"
              stroke-dasharray="${us}" stroke-dashoffset="${us*(1-c)}"></path>
          </svg>
          <div class="value-container">
            <span class="value">${h.prefix}${h.text}</span>
            ${h.suffix.trim()?U`<span class="unit">${h.suffix.trim()}</span>`:Q}
          </div>
        </div>
        ${u?U`<div class="series-label" title=${e.label}>${e.label}</div>`:Q}
      </div>
    `}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const t=this._items.length?this._items:[{metric:{},label:"",value:null}],s=t.length>1?"--gauge-min: 110px; --gauge-font: 20px":"--gauge-min: 180px";return U`
      <ha-card>
        ${e.name?U`<div class="name">${e.name}</div>`:Q}
        ${this._loaded&&!this._items.length?U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`:U`<div class="gauges" style=${s}>
              ${t.map((e,s)=>this._renderGauge(e,s,t.length))}
            </div>`}
      </ha-card>
    `}getGridOptions(){return{columns:this._items.length>1?12:6,rows:"auto",min_columns:3}}getCardSize(){return this._items.length>2?5:3}};e([_e()],ps.prototype,"_items",void 0),e([_e()],ps.prototype,"_loaded",void 0),ps=e([ue("prometheus-gauge-card")],ps);const ms="u-off",fs="u-label",_s="width",gs="height",vs="top",ys="bottom",xs="left",bs="right",ws="#000",$s=ws+"0",ks="mousemove",Ms="mousedown",As="mouseup",Es="mouseenter",Ss="mouseleave",Cs="dblclick",Ps="change",zs="dppxchange",Ts="--",Bs="undefined"!=typeof window,qs=Bs?document:null,Ds=Bs?window:null,Ls=Bs?navigator:null;let Fs,Ns;function Os(e,t){if(null!=t){let s=e.classList;!s.contains(t)&&s.add(t)}}function Is(e,t){let s=e.classList;s.contains(t)&&s.remove(t)}function Rs(e,t,s){e.style[t]=s+"px"}function Hs(e,t,s,i){let r=qs.createElement(e);return null!=t&&Os(r,t),null!=s&&s.insertBefore(r,i),r}function js(e,t){return Hs("div",e,t)}const Vs=new WeakMap;function Us(e,t,s,i,r){let n="translate("+t+"px,"+s+"px)";n!=Vs.get(e)&&(e.style.transform=n,Vs.set(e,n),t<0||s<0||t>i||s>r?Os(e,ms):Is(e,ms))}const Gs=new WeakMap;function Ws(e,t,s){let i=t+s;i!=Gs.get(e)&&(Gs.set(e,i),e.style.background=t,e.style.borderColor=s)}const Qs=new WeakMap;function Ks(e,t,s,i){let r=t+""+s;r!=Qs.get(e)&&(Qs.set(e,r),e.style.height=s+"px",e.style.width=t+"px",e.style.marginLeft=i?-t/2+"px":0,e.style.marginTop=i?-s/2+"px":0)}const Ys={passive:!0},Zs={...Ys,capture:!0};function Js(e,t,s,i){t.addEventListener(e,s,i?Zs:Ys)}function Xs(e,t,s,i){t.removeEventListener(e,s,Ys)}function ei(e,t,s,i){let r;s=s||0;let n=(i=i||t.length-1)<=2147483647;for(;i-s>1;)r=n?s+i>>1:yi((s+i)/2),t[r]<e?s=r:i=r;return e-t[s]<=t[i]-e?s:i}function ti(e){return(t,s,i)=>{let r=-1,n=-1;for(let n=s;n<=i;n++)if(e(t[n])){r=n;break}for(let r=i;r>=s;r--)if(e(t[r])){n=r;break}return[r,n]}}Bs&&function e(){let t=devicePixelRatio;Fs!=t&&(Fs=t,Ns&&Xs(Ps,Ns,e),Ns=matchMedia(`(min-resolution: ${Fs-.001}dppx) and (max-resolution: ${Fs+.001}dppx)`),Js(Ps,Ns,e),Ds.dispatchEvent(new CustomEvent(zs)))}();const si=e=>null!=e,ii=e=>null!=e&&e>0,ri=ti(si),ni=ti(ii);function oi(e,t,s,i){let r=Mi(e),n=Mi(t);e==t&&(-1==r?(e*=s,t/=s):(e/=s,t*=s));let o=10==s?Ai:Ei,a=1==n?bi:yi,l=(1==r?yi:bi)(o(vi(e))),c=a(o(vi(t))),d=ki(s,l),h=ki(s,c);return 10==s&&(l<0&&(d=Vi(d,-l)),c<0&&(h=Vi(h,-c))),i||2==s?(e=d*r,t=h*n):(e=ji(e,d),t=Hi(t,h)),[e,t]}function ai(e,t,s,i){let r=oi(e,t,s,i);return 0==e&&(r[0]=0),0==t&&(r[1]=0),r}const li={mode:3,pad:.1},ci={pad:0,soft:null,mode:0},di={min:ci,max:ci};function hi(e,t,s,i){return er(s)?pi(e,t,s):(ci.pad=s,ci.soft=i?0:null,ci.mode=i?3:0,pi(e,t,di))}function ui(e,t){return null==e?t:e}function pi(e,t,s){let i=s.min,r=s.max,n=ui(i.pad,0),o=ui(r.pad,0),a=ui(i.hard,-Ci),l=ui(r.hard,Ci),c=ui(i.soft,Ci),d=ui(r.soft,-Ci),h=ui(i.mode,0),u=ui(r.mode,0),p=t-e,m=Ai(p),f=$i(vi(e),vi(t)),_=Ai(f),g=vi(_-m);(p<1e-24||g>10)&&(p=0,0!=e&&0!=t||(p=1e-24,2==h&&c!=Ci&&(n=0),2==u&&d!=-Ci&&(o=0)));let v=p||f||1e3,y=Ai(v),x=ki(10,yi(y)),b=Vi(ji(e-v*(0==p?0==e?.1:1:n),x/10),24),w=e>=c&&(1==h||3==h&&b<=c||2==h&&b>=c)?c:Ci,$=$i(a,b<w&&e>=w?w:wi(w,b)),k=Vi(Hi(t+v*(0==p?0==t?.1:1:o),x/10),24),M=t<=d&&(1==u||3==u&&k>=d||2==u&&k<=d)?d:-Ci,A=wi(l,k>M&&t<=M?M:$i(M,k));return $==A&&0==$&&(A=100),[$,A]}const mi=new Intl.NumberFormat(Bs?Ls.language:"en-US"),fi=e=>mi.format(e),_i=Math,gi=_i.PI,vi=_i.abs,yi=_i.floor,xi=_i.round,bi=_i.ceil,wi=_i.min,$i=_i.max,ki=_i.pow,Mi=_i.sign,Ai=_i.log10,Ei=_i.log2,Si=(e,t=1)=>_i.asinh(e/t),Ci=1/0;function Pi(e){return 1+(0|Ai((e^e>>31)-(e>>31)))}function zi(e,t,s){return wi($i(e,t),s)}function Ti(e){return"function"==typeof e}function Bi(e){return Ti(e)?e:()=>e}const qi=e=>e,Di=(e,t)=>t,Li=e=>null,Fi=e=>!0,Ni=(e,t)=>e==t,Oi=/\.\d*?(?=9{6,}|0{6,})/gm,Ii=e=>{if(Ji(e)||Ui.has(e))return e;const t=`${e}`,s=t.match(Oi);if(null==s)return e;let i=s[0].length-1;if(-1!=t.indexOf("e-")){let[e,s]=t.split("e");return+`${Ii(e)}e${s}`}return Vi(e,i)};function Ri(e,t){return Ii(Vi(Ii(e/t))*t)}function Hi(e,t){return Ii(bi(Ii(e/t))*t)}function ji(e,t){return Ii(yi(Ii(e/t))*t)}function Vi(e,t=0){if(Ji(e))return e;let s=10**t,i=e*s*(1+Number.EPSILON);return xi(i)/s}const Ui=new Map;function Gi(e){return((""+e).split(".")[1]||"").length}function Wi(e,t,s,i){let r=[],n=i.map(Gi);for(let o=t;o<s;o++){let t=vi(o),s=Vi(ki(e,o),t);for(let a=0;a<i.length;a++){let l=10==e?+`${i[a]}e${o}`:i[a]*s,c=(o>=0?0:t)+(o>=n[a]?0:n[a]),d=10==e?l:Vi(l,c);r.push(d),Ui.set(d,c)}}return r}const Qi={},Ki=[],Yi=[null,null],Zi=Array.isArray,Ji=Number.isInteger;function Xi(e){return"string"==typeof e}function er(e){let t=!1;if(null!=e){let s=e.constructor;t=null==s||s==Object}return t}function tr(e){return null!=e&&"object"==typeof e}const sr=Object.getPrototypeOf(Uint8Array),ir="__proto__";function rr(e,t=er){let s;if(Zi(e)){let i=e.find(e=>null!=e);if(Zi(i)||t(i)){s=Array(e.length);for(let i=0;i<e.length;i++)s[i]=rr(e[i],t)}else s=e.slice()}else if(e instanceof sr)s=e.slice();else if(t(e)){s={};for(let i in e)i!=ir&&(s[i]=rr(e[i],t))}else s=e;return s}function nr(e){let t=arguments;for(let s=1;s<t.length;s++){let i=t[s];for(let t in i)t!=ir&&(er(e[t])?nr(e[t],rr(i[t])):e[t]=rr(i[t]))}return e}function or(e,t,s){for(let i,r=0,n=-1;r<t.length;r++){let o=t[r];if(o>n){for(i=o-1;i>=0&&null==e[i];)e[i--]=null;for(i=o+1;i<s&&null==e[i];)e[n=i++]=null}}}const ar="undefined"==typeof queueMicrotask?e=>Promise.resolve().then(e):queueMicrotask;const lr=["January","February","March","April","May","June","July","August","September","October","November","December"],cr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function dr(e){return e.slice(0,3)}const hr=cr.map(dr),ur=lr.map(dr),pr={MMMM:lr,MMM:ur,WWWW:cr,WWW:hr};function mr(e){return(e<10?"0":"")+e}const fr={YYYY:e=>e.getFullYear(),YY:e=>(e.getFullYear()+"").slice(2),MMMM:(e,t)=>t.MMMM[e.getMonth()],MMM:(e,t)=>t.MMM[e.getMonth()],MM:e=>mr(e.getMonth()+1),M:e=>e.getMonth()+1,DD:e=>mr(e.getDate()),D:e=>e.getDate(),WWWW:(e,t)=>t.WWWW[e.getDay()],WWW:(e,t)=>t.WWW[e.getDay()],HH:e=>mr(e.getHours()),H:e=>e.getHours(),h:e=>{let t=e.getHours();return 0==t?12:t>12?t-12:t},AA:e=>e.getHours()>=12?"PM":"AM",aa:e=>e.getHours()>=12?"pm":"am",a:e=>e.getHours()>=12?"p":"a",mm:e=>mr(e.getMinutes()),m:e=>e.getMinutes(),ss:e=>mr(e.getSeconds()),s:e=>e.getSeconds(),fff:e=>{return((t=e.getMilliseconds())<10?"00":t<100?"0":"")+t;var t}};function _r(e,t){t=t||pr;let s,i=[],r=/\{([a-z]+)\}|[^{]+/gi;for(;s=r.exec(e);)i.push("{"==s[0][0]?fr[s[1]]:s[0]);return e=>{let s="";for(let r=0;r<i.length;r++)s+="string"==typeof i[r]?i[r]:i[r](e,t);return s}}const gr=(new Intl.DateTimeFormat).resolvedOptions().timeZone;const vr=e=>e%1==0,yr=[1,2,2.5,5],xr=Wi(10,-32,0,yr),br=Wi(10,0,32,yr),wr=br.filter(vr),$r=xr.concat(br),kr="{YYYY}",Mr="\n"+kr,Ar="{M}/{D}",Er="\n"+Ar,Sr=Er+"/{YY}",Cr="{aa}",Pr="{h}:{mm}"+Cr,zr="\n"+Pr,Tr=":{ss}",Br=null;function qr(e){let t=1e3*e,s=60*t,i=60*s,r=24*i,n=30*r,o=365*r;return[(1==e?Wi(10,0,3,yr).filter(vr):Wi(10,-3,0,yr)).concat([t,5*t,10*t,15*t,30*t,s,5*s,10*s,15*s,30*s,i,2*i,3*i,4*i,6*i,8*i,12*i,r,2*r,3*r,4*r,5*r,6*r,7*r,8*r,9*r,10*r,15*r,n,2*n,3*n,4*n,6*n,o,2*o,5*o,10*o,25*o,50*o,100*o]),[[o,kr,Br,Br,Br,Br,Br,Br,1],[28*r,"{MMM}",Mr,Br,Br,Br,Br,Br,1],[r,Ar,Mr,Br,Br,Br,Br,Br,1],[i,"{h}"+Cr,Sr,Br,Er,Br,Br,Br,1],[s,Pr,Sr,Br,Er,Br,Br,Br,1],[t,Tr,Sr+" "+Pr,Br,Er+" "+Pr,Br,zr,Br,1],[e,Tr+".{fff}",Sr+" "+Pr,Br,Er+" "+Pr,Br,zr,Br,1]],function(t){return(a,l,c,d,h,u)=>{let p=[],m=h>=o,f=h>=n&&h<o,_=t(c),g=Vi(_*e,3),v=jr(_.getFullYear(),m?0:_.getMonth(),f||m?1:_.getDate()),y=Vi(v*e,3);if(f||m){let s=f?h/n:0,i=m?h/o:0,r=g==y?g:Vi(jr(v.getFullYear()+i,v.getMonth()+s,1)*e,3),a=new Date(xi(r/e)),l=a.getFullYear(),c=a.getMonth();for(let n=0;r<=d;n++){let o=jr(l+i*n,c+s*n,1),a=o-t(Vi(o*e,3));r=Vi((+o+a)*e,3),r<=d&&p.push(r)}}else{let n=h>=r?r:h,o=y+(yi(c)-yi(g))+Hi(g-y,n);p.push(o);let m=t(o),f=m.getHours()+m.getMinutes()/s+m.getSeconds()/i,_=h/i,v=u/a.axes[l]._space;for(;o=Vi(o+h,1==e?0:3),!(o>d);)if(_>1){let e=yi(Vi(f+_,6))%24,s=t(o).getHours()-e;s>1&&(s=-1),o-=s*i,f=(f+_)%24,Vi((o-p[p.length-1])/h,3)*v>=.7&&p.push(o)}else p.push(o)}return p}}]}const[Dr,Lr,Fr]=qr(1),[Nr,Or,Ir]=qr(.001);function Rr(e,t){return e.map(e=>e.map((s,i)=>0==i||8==i||null==s?s:t(1==i||0==e[8]?s:e[1]+s)))}function Hr(e,t){return(s,i,r,n,o)=>{let a,l,c,d,h,u,p=t.find(e=>o>=e[0])||t[t.length-1];return i.map(t=>{let s=e(t),i=s.getFullYear(),r=s.getMonth(),n=s.getDate(),o=s.getHours(),m=s.getMinutes(),f=s.getSeconds(),_=i!=a&&p[2]||r!=l&&p[3]||n!=c&&p[4]||o!=d&&p[5]||m!=h&&p[6]||f!=u&&p[7]||p[1];return a=i,l=r,c=n,d=o,h=m,u=f,_(s)})}}function jr(e,t,s){return new Date(e,t,s)}function Vr(e,t){return t(e)}Wi(2,-53,53,[1]);function Ur(e,t){return(s,i,r,n)=>null==n?Ts:t(e(i))}const Gr={show:!0,live:!0,isolate:!1,mount:()=>{},markers:{show:!0,width:2,stroke:function(e,t){let s=e.series[t];return s.width?s.stroke(e,t):s.points.width?s.points.stroke(e,t):null},fill:function(e,t){return e.series[t].fill(e,t)},dash:"solid"},idx:null,idxs:null,values:[]};const Wr=[0,0];function Qr(e,t,s,i=!0){return e=>{0==e.button&&(!i||e.target==t)&&s(e)}}function Kr(e,t,s,i=!0){return e=>{(!i||e.target==t)&&s(e)}}const Yr={show:!0,x:!0,y:!0,lock:!1,move:function(e,t,s){return Wr[0]=t,Wr[1]=s,Wr},points:{one:!1,show:function(e,t){let s=e.cursor.points,i=js(),r=s.size(e,t);Rs(i,_s,r),Rs(i,gs,r);let n=r/-2;Rs(i,"marginLeft",n),Rs(i,"marginTop",n);let o=s.width(e,t,r);return o&&Rs(i,"borderWidth",o),i},size:function(e,t){return e.series[t].points.size},width:0,stroke:function(e,t){let s=e.series[t].points;return s._stroke||s._fill},fill:function(e,t){let s=e.series[t].points;return s._fill||s._stroke}},bind:{mousedown:Qr,mouseup:Qr,click:Qr,dblclick:Qr,mousemove:Kr,mouseleave:Kr,mouseenter:Kr},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(e,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(e,t,s,i,r)=>i-r,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Zr={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},Jr=nr({},Zr,{filter:Di}),Xr=nr({},Jr,{size:10}),en=nr({},Zr,{show:!1}),tn='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',sn="bold "+tn,rn={show:!0,scale:"x",stroke:ws,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:sn,side:2,grid:Jr,ticks:Xr,border:en,font:tn,lineGap:1.5,rotate:0},nn={show:!0,scale:"x",auto:!1,sorted:1,min:Ci,max:-Ci,idxs:[]};function on(e,t,s,i,r){return t.map(e=>null==e?"":fi(e))}function an(e,t,s,i,r,n,o){let a=[],l=Ui.get(r)||0;for(let e=s=o?s:Vi(Hi(s,r),l);e<=i;e=Vi(e+r,l))a.push(Object.is(e,-0)?0:e);return a}function ln(e,t,s,i,r,n,o){const a=[],l=e.scales[e.axes[t].scale].log,c=yi((10==l?Ai:Ei)(s));r=ki(l,c),10==l&&(r=$r[ei(r,$r)]);let d=s,h=r*l;10==l&&(h=$r[ei(h,$r)]);do{a.push(d),d+=r,10!=l||Ui.has(d)||(d=Vi(d,Ui.get(r))),d>=h&&(h=(r=d)*l,10==l&&(h=$r[ei(h,$r)]))}while(d<=i);return a}function cn(e,t,s,i,r,n,o){let a=e.scales[e.axes[t].scale].asinh,l=i>a?ln(e,t,$i(a,s),i,r):[a],c=i>=0&&s<=0?[0]:[];return(s<-a?ln(e,t,$i(a,-i),-s,r):[a]).reverse().map(e=>-e).concat(c,l)}const dn=/./,hn=/[12357]/,un=/[125]/,pn=/1/,mn=(e,t,s,i)=>e.map((e,r)=>4==t&&0==e||r%i==0&&s.test(e.toExponential()[e<0?1:0])?e:null);function fn(e,t,s,i,r){let n=e.axes[s],o=n.scale,a=e.scales[o],l=e.valToPos,c=n._space,d=l(10,o),h=l(9,o)-d>=c?dn:l(7,o)-d>=c?hn:l(5,o)-d>=c?un:pn;if(h==pn){let e=vi(l(1,o)-d);if(e<c)return mn(t.slice().reverse(),a.distr,h,bi(c/e)).reverse()}return mn(t,a.distr,h,1)}function _n(e,t,s,i,r){let n=e.axes[s],o=n.scale,a=n._space,l=e.valToPos,c=vi(l(1,o)-l(2,o));return c<a?mn(t.slice().reverse(),3,dn,bi(a/c)).reverse():t}function gn(e,t,s,i){return null==i?Ts:null==t?"":fi(t)}const vn={show:!0,scale:"y",stroke:ws,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:sn,side:3,grid:Jr,ticks:Xr,border:en,font:tn,lineGap:1.5,rotate:0};const yn={scale:null,auto:!0,sorted:0,min:Ci,max:-Ci},xn=(e,t,s,i,r)=>r,bn={show:!0,auto:!0,sorted:0,gaps:xn,alpha:1,facets:[nr({},yn,{scale:"x"}),nr({},yn,{scale:"y"})]},wn={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:xn,alpha:1,points:{show:function(e,t){let{scale:s,idxs:i}=e.series[0],r=e._data[0],n=e.valToPos(r[i[0]],s,!0),o=e.valToPos(r[i[1]],s,!0),a=vi(o-n)/(e.series[t].points.space*Fs);return i[1]-i[0]<=a},filter:null},values:null,min:Ci,max:-Ci,idxs:[],path:null,clip:null};function $n(e,t,s,i,r){return s/10}const kn={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},Mn=nr({},kn,{time:!1,ori:1}),An={};function En(e,t){let s=An[e];return s||(s={key:e,plots:[],sub(e){s.plots.push(e)},unsub(e){s.plots=s.plots.filter(t=>t!=e)},pub(e,t,i,r,n,o,a){for(let l=0;l<s.plots.length;l++)s.plots[l]!=t&&s.plots[l].pub(e,t,i,r,n,o,a)}},null!=e&&(An[e]=s)),s}function Sn(e,t,s){const i=e.mode,r=e.series[t],n=2==i?e._data[t]:e._data,o=e.scales,a=e.bbox;let l=n[0],c=2==i?n[1]:n[t],d=2==i?o[r.facets[0].scale]:o[e.series[0].scale],h=2==i?o[r.facets[1].scale]:o[r.scale],u=a.left,p=a.top,m=a.width,f=a.height,_=e.valToPosH,g=e.valToPosV;return 0==d.ori?s(r,l,c,d,h,_,g,u,p,m,f,Ln,Nn,In,Hn,Vn):s(r,l,c,d,h,g,_,p,u,f,m,Fn,On,Rn,jn,Un)}function Cn(e,t){let s=0,i=0,r=ui(e.bands,Ki);for(let e=0;e<r.length;e++){let n=r[e];n.series[0]==t?s=n.dir:n.series[1]==t&&(1==n.dir?i|=1:i|=2)}return[s,1==i?-1:2==i?1:3==i?2:0]}function Pn(e,t,s,i,r){let n=e.mode,o=e.series[t],a=2==n?o.facets[1].scale:o.scale,l=e.scales[a];return-1==r?l.min:1==r?l.max:3==l.distr?1==l.dir?l.min:l.max:0}function zn(e,t,s,i,r,n){return Sn(e,t,(e,t,o,a,l,c,d,h,u,p,m)=>{let f=e.pxRound;const _=a.dir*(0==a.ori?1:-1),g=0==a.ori?Nn:On;let v,y;1==_?(v=s,y=i):(v=i,y=s);let x=f(c(t[v],a,p,h)),b=f(d(o[v],l,m,u)),w=f(c(t[y],a,p,h)),$=f(d(1==n?l.max:l.min,l,m,u)),k=new Path2D(r);return g(k,w,$),g(k,x,$),g(k,x,b),k})}function Tn(e,t,s,i,r,n){let o=null;if(e.length>0){o=new Path2D;const a=0==t?In:Rn;let l=s;for(let t=0;t<e.length;t++){let s=e[t];if(s[1]>s[0]){let e=s[0]-l;e>0&&a(o,l,i,e,i+n),l=s[1]}}let c=s+r-l,d=10;c>0&&a(o,l,i-d/2,c,i+n+d)}return o}function Bn(e,t,s,i,r,n,o){let a=[],l=e.length;for(let c=1==r?s:i;c>=s&&c<=i;c+=r){if(null===t[c]){let d=c,h=c;if(1==r)for(;++c<=i&&null===t[c];)h=c;else for(;--c>=s&&null===t[c];)h=c;let u=n(e[d]),p=h==d?u:n(e[h]),m=d-r;u=o<=0&&m>=0&&m<l?n(e[m]):u;let f=h+r;p=o>=0&&f>=0&&f<l?n(e[f]):p,p>=u&&a.push([u,p])}}return a}function qn(e){return 0==e?qi:1==e?xi:t=>Ri(t,e)}function Dn(e){let t=0==e?Ln:Fn,s=0==e?(e,t,s,i,r,n)=>{e.arcTo(t,s,i,r,n)}:(e,t,s,i,r,n)=>{e.arcTo(s,t,r,i,n)},i=0==e?(e,t,s,i,r)=>{e.rect(t,s,i,r)}:(e,t,s,i,r)=>{e.rect(s,t,r,i)};return(e,r,n,o,a,l=0,c=0)=>{0==l&&0==c?i(e,r,n,o,a):(l=wi(l,o/2,a/2),c=wi(c,o/2,a/2),t(e,r+l,n),s(e,r+o,n,r+o,n+a,l),s(e,r+o,n+a,r,n+a,c),s(e,r,n+a,r,n,c),s(e,r,n,r+o,n,l),e.closePath())}}const Ln=(e,t,s)=>{e.moveTo(t,s)},Fn=(e,t,s)=>{e.moveTo(s,t)},Nn=(e,t,s)=>{e.lineTo(t,s)},On=(e,t,s)=>{e.lineTo(s,t)},In=Dn(0),Rn=Dn(1),Hn=(e,t,s,i,r,n)=>{e.arc(t,s,i,r,n)},jn=(e,t,s,i,r,n)=>{e.arc(s,t,i,r,n)},Vn=(e,t,s,i,r,n,o)=>{e.bezierCurveTo(t,s,i,r,n,o)},Un=(e,t,s,i,r,n,o)=>{e.bezierCurveTo(s,t,r,i,o,n)};function Gn(e){return(e,t,s,i,r)=>Sn(e,t,(t,n,o,a,l,c,d,h,u,p,m)=>{let f,_,{pxRound:g,points:v}=t;0==a.ori?(f=Ln,_=Hn):(f=Fn,_=jn);const y=Vi(v.width*Fs,3);let x=(v.size-v.width)/2*Fs,b=Vi(2*x,3),w=new Path2D,$=new Path2D,{left:k,top:M,width:A,height:E}=e.bbox;In($,k-b,M-b,A+2*b,E+2*b);const S=e=>{if(null!=o[e]){let t=g(c(n[e],a,p,h)),s=g(d(o[e],l,m,u));f(w,t+x,s),_(w,t,s,x,0,2*gi)}};if(r)r.forEach(S);else for(let e=s;e<=i;e++)S(e);return{stroke:y>0?w:null,fill:w,clip:$,flags:3}})}function Wn(e){return(t,s,i,r,n,o)=>{i!=r&&(n!=i&&o!=i&&e(t,s,i),n!=r&&o!=r&&e(t,s,r),e(t,s,o))}}const Qn=Wn(Nn),Kn=Wn(On);function Yn(e){const t=ui(e?.alignGaps,0);return(e,s,i,r)=>Sn(e,s,(n,o,a,l,c,d,h,u,p,m,f)=>{[i,r]=ri(a,i,r);let _,g,v=n.pxRound,y=e=>v(d(e,l,m,u)),x=e=>v(h(e,c,f,p));0==l.ori?(_=Nn,g=Qn):(_=On,g=Kn);const b=l.dir*(0==l.ori?1:-1),w={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},$=w.stroke;let k=!1;if(r-i>=4*m){let t,s,n,c=t=>e.posToVal(t,l.key,!0),d=null,h=null,u=y(o[1==b?i:r]),p=y(o[i]),m=y(o[r]),f=c(1==b?p+1:m-1);for(let e=1==b?i:r;e>=i&&e<=r;e+=b){let i=o[e],r=(1==b?i<f:i>f)?u:y(i),n=a[e];r==u?null!=n?(s=n,null==d?(_($,r,x(s)),t=d=h=s):s<d?d=s:s>h&&(h=s)):null===n&&(k=!0):(null!=d&&g($,u,x(d),x(h),x(t),x(s)),null!=n?(s=n,_($,r,x(s)),d=h=t=s):(d=h=null,null===n&&(k=!0)),u=r,f=c(u+b))}null!=d&&d!=h&&n!=u&&g($,u,x(d),x(h),x(t),x(s))}else for(let e=1==b?i:r;e>=i&&e<=r;e+=b){let t=a[e];null===t?k=!0:null!=t&&_($,y(o[e]),x(t))}let[M,A]=Cn(e,s);if(null!=n.fill||0!=M){let t=w.fill=new Path2D($),a=x(n.fillTo(e,s,n.min,n.max,M)),l=y(o[i]),c=y(o[r]);-1==b&&([c,l]=[l,c]),_(t,c,a),_(t,l,a)}if(!n.spanGaps){let c=[];k&&c.push(...Bn(o,a,i,r,b,y,t)),w.gaps=c=n.gaps(e,s,i,r,c),w.clip=Tn(c,l.ori,u,p,m,f)}return 0!=A&&(w.band=2==A?[zn(e,s,i,r,$,-1),zn(e,s,i,r,$,1)]:zn(e,s,i,r,$,A)),w})}function Zn(e,t,s,i,r,n,o=Ci){if(e.length>1){let a=null;for(let l=0,c=1/0;l<e.length;l++)if(void 0!==t[l]){if(null!=a){let t=vi(e[l]-e[a]);t<c&&(c=t,o=vi(s(e[l],i,r,n)-s(e[a],i,r,n)))}a=l}}return o}function Jn(e,t,s,i,r,n){const o=e.length;if(o<2)return null;const a=new Path2D;if(s(a,e[0],t[0]),2==o)i(a,e[1],t[1]);else{let s=Array(o),i=Array(o-1),n=Array(o-1),l=Array(o-1);for(let s=0;s<o-1;s++)n[s]=t[s+1]-t[s],l[s]=e[s+1]-e[s],i[s]=n[s]/l[s];s[0]=i[0];for(let e=1;e<o-1;e++)0===i[e]||0===i[e-1]||i[e-1]>0!=i[e]>0?s[e]=0:(s[e]=3*(l[e-1]+l[e])/((2*l[e]+l[e-1])/i[e-1]+(l[e]+2*l[e-1])/i[e]),isFinite(s[e])||(s[e]=0));s[o-1]=i[o-2];for(let i=0;i<o-1;i++)r(a,e[i]+l[i]/3,t[i]+s[i]*l[i]/3,e[i+1]-l[i]/3,t[i+1]-s[i+1]*l[i]/3,e[i+1],t[i+1])}return a}const Xn=new Set;function eo(){for(let e of Xn)e.syncRect(!0)}Bs&&(Js("resize",Ds,eo),Js("scroll",Ds,eo,!0),Js(zs,Ds,()=>{_o.pxRatio=Fs}));const to=Yn(),so=Gn();function io(e,t,s,i){return(i?[e[0],e[1]].concat(e.slice(2)):[e[0]].concat(e.slice(1))).map((e,i)=>ro(e,i,t,s))}function ro(e,t,s,i){return nr({},0==t?s:i,e)}function no(e,t,s){return null==t?Yi:[t,s]}const oo=no;function ao(e,t,s){return null==t?Yi:hi(t,s,.1,!0)}function lo(e,t,s,i){return null==t?Yi:oi(t,s,e.scales[i].log,!1)}const co=lo;function ho(e,t,s,i){return null==t?Yi:ai(t,s,e.scales[i].log,!1)}const uo=ho;function po(e,t,s,i,r){let n=$i(Pi(e),Pi(t)),o=t-e,a=ei(r/i*o,s);do{let e=s[a],t=i*e/o;if(t>=r&&n+(e<5?Ui.get(e):0)<=17)return[e,t]}while(++a<s.length);return[0,0]}function mo(e){let t,s;return[e=e.replace(/(\d+)px/,(e,i)=>(t=xi((s=+i)*Fs))+"px"),t,s]}function fo(e){e.show&&[e.font,e.labelFont].forEach(e=>{let t=Vi(e[2]*Fs,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function _o(e,t,s){const i={mode:ui(e.mode,1)},r=i.mode;function n(e,t,s,i){let r=t.valToPct(e);return i+s*(-1==t.dir?1-r:r)}function o(e,t,s,i){let r=t.valToPct(e);return i+s*(-1==t.dir?r:1-r)}function a(e,t,s,i){return 0==t.ori?n(e,t,s,i):o(e,t,s,i)}i.valToPosH=n,i.valToPosV=o;let l=!1;i.status=0;const c=i.root=js("uplot");if(null!=e.id&&(c.id=e.id),Os(c,e.class),e.title){js("u-title",c).textContent=e.title}const d=Hs("canvas"),h=i.ctx=d.getContext("2d"),u=js("u-wrap",c);Js("click",u,e=>{if(e.target===m){(St!=kt||Ct!=Mt)&&Nt.click(i,e)}},!0);const p=i.under=js("u-under",u);u.appendChild(d);const m=i.over=js("u-over",u),f=+ui((e=rr(e)).pxAlign,1),_=qn(f);(e.plugins||[]).forEach(t=>{t.opts&&(e=t.opts(i,e)||e)});const g=e.ms||.001,v=i.series=1==r?io(e.series||[],nn,wn,!1):function(e,t){return e.map((e,s)=>0==s?{}:nr({},t,e))}(e.series||[null],bn),y=i.axes=io(e.axes||[],rn,vn,!0),x=i.scales={},b=i.bands=e.bands||[];b.forEach(e=>{e.fill=Bi(e.fill||null),e.dir=ui(e.dir,-1)});const w=2==r?v[1].facets[0].scale:v[0].scale,$={axes:function(){for(let e=0;e<y.length;e++){let t=y[e];if(!t.show||!t._show)continue;let s,r,n=t.side,o=n%2,l=t.stroke(i,e),c=0==n||3==n?-1:1,[d,u]=t._found;if(null!=t.label){let a=t.labelGap*c,p=xi((t._lpos+a)*Fs);nt(t.labelFont[0],l,"center",2==n?vs:ys),h.save(),1==o?(s=r=0,h.translate(p,xi(me+_e/2)),h.rotate((3==n?-gi:gi)/2)):(s=xi(pe+fe/2),r=p);let m=Ti(t.label)?t.label(i,e,d,u):t.label;h.fillText(m,s,r),h.restore()}if(0==u)continue;let p=x[t.scale],m=0==o?fe:_e,f=0==o?pe:me,g=t._splits,v=2==p.distr?g.map(e=>et[e]):g,b=2==p.distr?et[g[1]]-et[g[0]]:d,w=t.ticks,$=t.border,k=w.show?w.size:0,M=xi(k*Fs),A=xi((2==t.alignTo?t._size-k-t.gap:t.gap)*Fs),E=t._rotate*-gi/180,S=_(t._pos*Fs),C=S+(M+A)*c;r=0==o?C:0,s=1==o?C:0,nt(t.font[0],l,1==t.align?xs:2==t.align?bs:E>0?xs:E<0?bs:0==o?"center":3==n?bs:xs,E||1==o?"middle":2==n?vs:ys);let P=t.font[1]*t.lineGap,z=g.map(e=>_(a(e,p,m,f))),T=t._values;for(let e=0;e<T.length;e++){let t=T[e];if(null!=t){0==o?s=z[e]:r=z[e],t=""+t;let i=-1==t.indexOf("\n")?[t]:t.split(/\n/gm);for(let e=0;e<i.length;e++){let t=i[e];E?(h.save(),h.translate(s,r+e*P),h.rotate(E),h.fillText(t,0,0),h.restore()):h.fillText(t,s,r+e*P)}}}w.show&&mt(z,w.filter(i,v,e,u,b),o,n,S,M,Vi(w.width*Fs,3),w.stroke(i,e),w.dash,w.cap);let B=t.grid;B.show&&mt(z,B.filter(i,v,e,u,b),o,0==o?2:1,0==o?me:pe,0==o?_e:fe,Vi(B.width*Fs,3),B.stroke(i,e),B.dash,B.cap),$.show&&mt([S],[1],0==o?1:0,0==o?1:2,1==o?me:pe,1==o?_e:fe,Vi($.width*Fs,3),$.stroke(i,e),$.dash,$.cap)}Gs("drawAxes")},series:function(){if(Ie>0){let e=v.some(e=>e._focus)&&Xe!=Se.alpha;e&&(h.globalAlpha=Xe=Se.alpha),v.forEach((e,s)=>{if(s>0&&e.show&&(lt(s,!1),lt(s,!0),null==e._paths)){let n=Xe;Xe!=e.alpha&&(h.globalAlpha=Xe=e.alpha);let o=2==r?[0,t[s][0].length-1]:function(e){let t=zi(Re-1,0,Ie-1),s=zi(He+1,0,Ie-1);for(;null==e[t]&&t>0;)t--;for(;null==e[s]&&s<Ie-1;)s++;return[t,s]}(t[s]);e._paths=e.paths(i,s,o[0],o[1]),Xe!=n&&(h.globalAlpha=Xe=n)}}),v.forEach((e,t)=>{if(t>0&&e.show){let s=Xe;Xe!=e.alpha&&(h.globalAlpha=Xe=e.alpha),null!=e._paths&&ct(t,!1);{let s=null!=e._paths?e._paths.gaps:null,r=e.points.show(i,t,Re,He,s),n=e.points.filter(i,t,r,s);(r||n)&&(e.points._paths=e.points.paths(i,t,Re,He,n),ct(t,!0))}Xe!=s&&(h.globalAlpha=Xe=s),Gs("drawSeries",t)}}),e&&(h.globalAlpha=Xe=1)}}},k=(e.drawOrder||["axes","series"]).map(e=>$[e]);function M(e){const t=3==e.distr?t=>Ai(t>0?t:e.clamp(i,t,e.min,e.max,e.key)):4==e.distr?t=>Si(t,e.asinh):100==e.distr?t=>e.fwd(t):e=>e;return s=>{let i=t(s),{_min:r,_max:n}=e;return(i-r)/(n-r)}}function A(t){let s=x[t];if(null==s){let i=(e.scales||Qi)[t]||Qi;if(null!=i.from){A(i.from);let e=nr({},x[i.from],i,{key:t});e.valToPct=M(e),x[t]=e}else{s=x[t]=nr({},t==w?kn:Mn,i),s.key=t;let e=s.time,n=s.range,o=Zi(n);if((t!=w||2==r&&!e)&&(!o||null!=n[0]&&null!=n[1]||(n={min:null==n[0]?li:{mode:1,hard:n[0],soft:n[0]},max:null==n[1]?li:{mode:1,hard:n[1],soft:n[1]}},o=!1),!o&&er(n))){let e=n;n=(t,s,i)=>null==s?Yi:hi(s,i,e)}s.range=Bi(n||(e?oo:t==w?3==s.distr?co:4==s.distr?uo:no:3==s.distr?lo:4==s.distr?ho:ao)),s.auto=Bi(!o&&s.auto),s.clamp=Bi(s.clamp||$n),s._min=s._max=null,s.valToPct=M(s)}}}A("x"),A("y"),1==r&&v.forEach(e=>{A(e.scale)}),y.forEach(e=>{A(e.scale)});for(let t in e.scales)A(t);const E=x[w],S=E.distr;let C,P;0==E.ori?(Os(c,"u-hz"),C=n,P=o):(Os(c,"u-vt"),C=o,P=n);const z={};for(let e in x){let t=x[e];null==t.min&&null==t.max||(z[e]={min:t.min,max:t.max},t.min=t.max=null)}const T=e.tzDate||(e=>new Date(xi(e/g))),B=e.fmtDate||_r,q=1==g?Fr(T):Ir(T),D=Hr(T,Rr(1==g?Lr:Or,B)),L=Ur(T,Vr("{YYYY}-{MM}-{DD} {h}:{mm}{aa}",B)),F=[],N=i.legend=nr({},Gr,e.legend),O=i.cursor=nr({},Yr,{drag:{y:2==r}},e.cursor),I=N.show,R=O.show,H=N.markers;let j,V,U;N.idxs=F,H.width=Bi(H.width),H.dash=Bi(H.dash),H.stroke=Bi(H.stroke),H.fill=Bi(H.fill);let G,W=[],Q=[],K=!1,Y={};if(N.live){const e=v[1]?v[1].values:null;K=null!=e,G=K?e(i,1,0):{_:0};for(let e in G)Y[e]=Ts}if(I)if(j=Hs("table","u-legend",c),U=Hs("tbody",null,j),N.mount(i,j),K){V=Hs("thead",null,j,U);let e=Hs("tr",null,V);for(var Z in Hs("th",null,e),G)Hs("th",fs,e).textContent=Z}else Os(j,"u-inline"),N.live&&Os(j,"u-live");const J={show:!0},X={show:!1};const ee=new Map;function te(e,t,s,r=!0){const n=ee.get(t)||{},o=O.bind[e](i,t,s,r);o&&(Js(e,t,n[e]=o),ee.set(t,n))}function se(e,t,s){const i=ee.get(t)||{};for(let s in i)null!=e&&s!=e||(Xs(s,t,i[s]),delete i[s]);null==e&&ee.delete(t)}let ie=0,re=0,ne=0,oe=0,ae=0,le=0,ce=ae,de=le,he=ne,ue=oe,pe=0,me=0,fe=0,_e=0;i.bbox={};let ge=!1,ve=!1,ye=!1,xe=!1,be=!1,we=!1;function $e(e,t,s){(s||e!=i.width||t!=i.height)&&ke(e,t),gt(!1),ye=!0,ve=!0,qt()}function ke(e,t){i.width=ie=ne=e,i.height=re=oe=t,ae=le=0,function(){let e=!1,t=!1,s=!1,i=!1;y.forEach((r,n)=>{if(r.show&&r._show){let{side:n,_size:o}=r,a=n%2,l=o+(null!=r.label?r.labelSize:0);l>0&&(a?(ne-=l,3==n?(ae+=l,i=!0):s=!0):(oe-=l,0==n?(le+=l,e=!0):t=!0))}}),Le[0]=e,Le[1]=s,Le[2]=t,Le[3]=i,ne-=Oe[1]+Oe[3],ae+=Oe[3],oe-=Oe[2]+Oe[0],le+=Oe[0]}(),function(){let e=ae+ne,t=le+oe,s=ae,i=le;function r(r,n){switch(r){case 1:return e+=n,e-n;case 2:return t+=n,t-n;case 3:return s-=n,s+n;case 0:return i-=n,i+n}}y.forEach((e,t)=>{if(e.show&&e._show){let t=e.side;e._pos=r(t,e._size),null!=e.label&&(e._lpos=r(t,e.labelSize))}})}();let s=i.bbox;pe=s.left=Ri(ae*Fs,.5),me=s.top=Ri(le*Fs,.5),fe=s.width=Ri(ne*Fs,.5),_e=s.height=Ri(oe*Fs,.5)}const Me=3;if(i.setSize=function({width:e,height:t}){$e(e,t)},null==O.dataIdx){let e=O.hover,s=e.skip=new Set(e.skip??[]);s.add(void 0);let i=e.prox=Bi(e.prox),r=e.bias??=0;O.dataIdx=(e,n,o,a)=>{if(0==n)return o;let l=o,c=i(e,n,o,a)??Ci,d=c>=0&&c<Ci,h=0==E.ori?ne:oe,u=O.left,p=t[0],m=t[n];if(s.has(m[o])){l=null;let e,t=null,i=null;if(0==r||-1==r)for(e=o;null==t&&e-- >0;)s.has(m[e])||(t=e);if(0==r||1==r)for(e=o;null==i&&e++<m.length;)s.has(m[e])||(i=e);if(null!=t||null!=i)if(d){let e=u-(null==t?-1/0:C(p[t],E,h,0)),s=(null==i?1/0:C(p[i],E,h,0))-u;e<=s?e<=c&&(l=t):s<=c&&(l=i)}else l=null==i?t:null==t?i:o-t<=i-o?t:i}else if(d){vi(u-C(p[o],E,h,0))>c&&(l=null)}return l}}const Ae=e=>{O.event=e};O.idxs=F,O._lock=!1;let Ee=O.points;Ee.show=Bi(Ee.show),Ee.size=Bi(Ee.size),Ee.stroke=Bi(Ee.stroke),Ee.width=Bi(Ee.width),Ee.fill=Bi(Ee.fill);const Se=i.focus=nr({},e.focus||{alpha:.3},O.focus),Ce=Se.prox>=0,Pe=Ce&&Ee.one;let ze=[],Te=[],Be=[];function qe(e,t){let s=Ee.show(i,t);if(s instanceof HTMLElement)return Os(s,"u-cursor-pt"),Os(s,e.class),Us(s,-10,-10,ne,oe),m.insertBefore(s,ze[t]),s}function De(e,t){if(1==r||t>0){let t=1==r&&x[e.scale].time,s=e.value;e.value=t?Xi(s)?Ur(T,Vr(s,B)):s||L:s||gn,e.label=e.label||(t?"Time":"Value")}if(Pe||t>0){e.width=null==e.width?1:e.width,e.paths=e.paths||to||Li,e.fillTo=Bi(e.fillTo||Pn),e.pxAlign=+ui(e.pxAlign,f),e.pxRound=qn(e.pxAlign),e.stroke=Bi(e.stroke||null),e.fill=Bi(e.fill||null),e._stroke=e._fill=e._paths=e._focus=null;let t=Vi((3+2*($i(1,e.width)||1))*1,3),s=e.points=nr({},{size:t,width:$i(1,.2*t),stroke:e.stroke,space:2*t,paths:so,_stroke:null,_fill:null},e.points);s.show=Bi(s.show),s.filter=Bi(s.filter),s.fill=Bi(s.fill),s.stroke=Bi(s.stroke),s.paths=Bi(s.paths),s.pxAlign=e.pxAlign}if(I){let s=function(e,t){if(0==t&&(K||!N.live||2==r))return Yi;let s=[],n=Hs("tr","u-series",U,U.childNodes[t]);Os(n,e.class),e.show||Os(n,ms);let o=Hs("th",null,n);if(H.show){let e=js("u-marker",o);if(t>0){let s=H.width(i,t);s&&(e.style.border=s+"px "+H.dash(i,t)+" "+H.stroke(i,t)),e.style.background=H.fill(i,t)}}let a=js(fs,o);for(var l in e.label instanceof HTMLElement?a.appendChild(e.label):a.textContent=e.label,t>0&&(H.show||(a.style.color=e.width>0?H.stroke(i,t):H.fill(i,t)),te("click",o,t=>{if(O._lock)return;Ae(t);let s=v.indexOf(e);if((t.ctrlKey||t.metaKey)!=N.isolate){let e=v.some((e,t)=>t>0&&t!=s&&e.show);v.forEach((t,i)=>{i>0&&Ut(i,e?i==s?J:X:J,!0,Ys.setSeries)})}else Ut(s,{show:!e.show},!0,Ys.setSeries)},!1),Ce&&te(Es,o,t=>{O._lock||(Ae(t),Ut(v.indexOf(e),Kt,!0,Ys.setSeries))},!1)),G){let e=Hs("td","u-value",n);e.textContent="--",s.push(e)}return[n,s]}(e,t);W.splice(t,0,s[0]),Q.splice(t,0,s[1]),N.values.push(null)}if(R){F.splice(t,0,null);let s=null;Pe?0==t&&(s=qe(e,t)):t>0&&(s=qe(e,t)),ze.splice(t,0,s),Te.splice(t,0,0),Be.splice(t,0,0)}Gs("addSeries",t)}i.addSeries=function(e,t){t=null==t?v.length:t,e=1==r?ro(e,t,nn,wn):ro(e,t,{},bn),v.splice(t,0,e),De(v[t],t)},i.delSeries=function(e){if(v.splice(e,1),I){N.values.splice(e,1),Q.splice(e,1);let t=W.splice(e,1)[0];se(null,t.firstChild),t.remove()}R&&(F.splice(e,1),ze.splice(e,1)[0].remove(),Te.splice(e,1),Be.splice(e,1)),Gs("delSeries",e)};const Le=[!1,!1,!1,!1];function Fe(e,t,s,i){let[r,n,o,a]=s,l=t%2,c=0;return 0==l&&(a||n)&&(c=0==t&&!r||2==t&&!o?xi(rn.size/3):0),1==l&&(r||o)&&(c=1==t&&!n||3==t&&!a?xi(vn.size/2):0),c}const Ne=i.padding=(e.padding||[Fe,Fe,Fe,Fe]).map(e=>Bi(ui(e,Fe))),Oe=i._padding=Ne.map((e,t)=>e(i,t,Le,0));let Ie,Re=null,He=null;const je=1==r?v[0].idxs:null;let Ve,Ue,Ge,We,Qe,Ke,Ye,Ze,Je,Xe,et=null,tt=!1;function st(e,s){if(t=null==e?[]:e,i.data=i._data=t,2==r){Ie=0;for(let e=1;e<v.length;e++)Ie+=t[e][0].length}else{0==t.length&&(i.data=i._data=t=[[]]),et=t[0],Ie=et.length;let e=t;if(2==S){e=t.slice();let s=e[0]=Array(Ie);for(let e=0;e<Ie;e++)s[e]=e}i._data=t=e}if(gt(!0),Gs("setData"),2==S&&(ye=!0),!1!==s){let e=E;e.auto(i,tt)?it():Vt(w,e.min,e.max),xe=xe||O.left>=0,we=!0,qt()}}function it(){let e,s;tt=!0,1==r&&(Ie>0?(Re=je[0]=0,He=je[1]=Ie-1,e=t[0][Re],s=t[0][He],2==S?(e=Re,s=He):e==s&&(3==S?[e,s]=oi(e,e,E.log,!1):4==S?[e,s]=ai(e,e,E.log,!1):E.time?s=e+xi(86400/g):[e,s]=hi(e,s,.1,!0))):(Re=je[0]=e=null,He=je[1]=s=null)),Vt(w,e,s)}function rt(e,t,s,i,r,n){e??=$s,s??=Ki,i??="butt",r??=$s,n??="round",e!=Ve&&(h.strokeStyle=Ve=e),r!=Ue&&(h.fillStyle=Ue=r),t!=Ge&&(h.lineWidth=Ge=t),n!=Qe&&(h.lineJoin=Qe=n),i!=Ke&&(h.lineCap=Ke=i),s!=We&&h.setLineDash(We=s)}function nt(e,t,s,i){t!=Ue&&(h.fillStyle=Ue=t),e!=Ye&&(h.font=Ye=e),s!=Ze&&(h.textAlign=Ze=s),i!=Je&&(h.textBaseline=Je=i)}function ot(e,t,s,r,n=0){if(r.length>0&&e.auto(i,tt)&&(null==t||null==t.min)){let t=ui(Re,0),i=ui(He,r.length-1),o=null==s.min?function(e,t,s,i=0,r=!1){let n=r?ni:ri,o=r?ii:si;[t,s]=n(e,t,s);let a=e[t],l=e[t];if(t>-1)if(1==i)a=e[t],l=e[s];else if(-1==i)a=e[s],l=e[t];else for(let i=t;i<=s;i++){let t=e[i];o(t)&&(t<a?a=t:t>l&&(l=t))}return[a??Ci,l??-Ci]}(r,t,i,n,3==e.distr):[s.min,s.max];e.min=wi(e.min,s.min=o[0]),e.max=$i(e.max,s.max=o[1])}}i.setData=st;const at={min:null,max:null};function lt(e,t){let s=t?v[e].points:v[e];s._stroke=s.stroke(i,e),s._fill=s.fill(i,e)}function ct(e,s){let r=s?v[e].points:v[e],{stroke:n,fill:o,clip:a,flags:l,_stroke:c=r._stroke,_fill:d=r._fill,_width:u=r.width}=r._paths;u=Vi(u*Fs,3);let p=null,m=u%2/2;s&&null==d&&(d=u>0?"#fff":c);let f=1==r.pxAlign&&m>0;if(f&&h.translate(m,m),!s){let e=pe-u/2,t=me-u/2,s=fe+u,i=_e+u;p=new Path2D,p.rect(e,t,s,i)}s?ht(c,u,r.dash,r.cap,d,n,o,l,a):function(e,s,r,n,o,a,l,c,d,h,u){let p=!1;0!=d&&b.forEach((m,f)=>{if(m.series[0]==e){let e,_=v[m.series[1]],g=t[m.series[1]],y=(_._paths||Qi).band;Zi(y)&&(y=1==m.dir?y[0]:y[1]);let x=null;_.show&&y&&function(e,t,s){for(t=ui(t,0),s=ui(s,e.length-1);t<=s;){if(null!=e[t])return!0;t++}return!1}(g,Re,He)?(x=m.fill(i,f)||a,e=_._paths.clip):y=null,ht(s,r,n,o,x,l,c,d,h,u,e,y),p=!0}}),p||ht(s,r,n,o,a,l,c,d,h,u)}(e,c,u,r.dash,r.cap,d,n,o,l,p,a),f&&h.translate(-m,-m)}const dt=3;function ht(e,t,s,i,r,n,o,a,l,c,d,u){rt(e,t,s,i,r),(l||c||u)&&(h.save(),l&&h.clip(l),c&&h.clip(c)),u?(a&dt)==dt?(h.clip(u),d&&h.clip(d),pt(r,o),ut(e,n,t)):2&a?(pt(r,o),h.clip(u),ut(e,n,t)):1&a&&(h.save(),h.clip(u),d&&h.clip(d),pt(r,o),h.restore(),ut(e,n,t)):(pt(r,o),ut(e,n,t)),(l||c||u)&&h.restore()}function ut(e,t,s){s>0&&(t instanceof Map?t.forEach((e,t)=>{h.strokeStyle=Ve=t,h.stroke(e)}):null!=t&&e&&h.stroke(t))}function pt(e,t){t instanceof Map?t.forEach((e,t)=>{h.fillStyle=Ue=t,h.fill(e)}):null!=t&&e&&h.fill(t)}function mt(e,t,s,i,r,n,o,a,l,c){let d=o%2/2;1==f&&h.translate(d,d),rt(a,o,l,c,a),h.beginPath();let u,p,m,_,g=r+(0==i||3==i?-n:n);0==s?(p=r,_=g):(u=r,m=g);for(let i=0;i<e.length;i++)null!=t[i]&&(0==s?u=m=e[i]:p=_=e[i],h.moveTo(u,p),h.lineTo(m,_));h.stroke(),1==f&&h.translate(-d,-d)}function ft(e){let t=!0;return y.forEach((s,r)=>{if(!s.show)return;let n=x[s.scale];if(null==n.min)return void(s._show&&(t=!1,s._show=!1,gt(!1)));s._show||(t=!1,s._show=!0,gt(!1));let o=s.side,a=o%2,{min:l,max:c}=n,[d,h]=function(e,t,s,r){let n,o=y[e];if(r<=0)n=[0,0];else{let a=o._space=o.space(i,e,t,s,r);n=po(t,s,o._incrs=o.incrs(i,e,t,s,r,a),r,a)}return o._found=n}(r,l,c,0==a?ne:oe);if(0==h)return;let u=2==n.distr,p=s._splits=s.splits(i,r,l,c,d,h,u),m=2==n.distr?p.map(e=>et[e]):p,f=2==n.distr?et[p[1]]-et[p[0]]:d,_=s._values=s.values(i,s.filter(i,m,r,h,f),r,h,f);s._rotate=2==o?s.rotate(i,_,r,h):0;let g=s._size;s._size=bi(s.size(i,_,r,e)),null!=g&&s._size!=g&&(t=!1)}),t}function _t(e){let t=!0;return Ne.forEach((s,r)=>{let n=s(i,r,Le,e);n!=Oe[r]&&(t=!1),Oe[r]=n}),t}function gt(e){v.forEach((t,s)=>{s>0&&(t._paths=null,e&&(1==r?(t.min=null,t.max=null):t.facets.forEach(e=>{e.min=null,e.max=null})))})}let vt,yt,xt,bt,wt,$t,kt,Mt,At,Et,St,Ct,Pt=!1,zt=!1,Tt=[];function Bt(){zt=!1;for(let e=0;e<Tt.length;e++)Gs(...Tt[e]);Tt.length=0}function qt(){Pt||(ar(Dt),Pt=!0)}function Dt(){if(ge&&(!function(){for(let e in x){let t=x[e];null==z[e]&&(null==t.min||null!=z[w]&&t.auto(i,tt))&&(z[e]=at)}for(let e in x){let t=x[e];null==z[e]&&null!=t.from&&null!=z[t.from]&&(z[e]=at)}null!=z[w]&&gt(!0);let e={};for(let t in z){let s=z[t];if(null!=s){let n=e[t]=rr(x[t],tr);if(null!=s.min)nr(n,s);else if(t!=w||2==r)if(0==Ie&&null==n.from){let e=n.range(i,null,null,t);n.min=e[0],n.max=e[1]}else n.min=Ci,n.max=-Ci}}if(Ie>0){v.forEach((s,n)=>{if(1==r){let r=s.scale,o=z[r];if(null==o)return;let a=e[r];if(0==n){let e=a.range(i,a.min,a.max,r);a.min=e[0],a.max=e[1],Re=ei(a.min,t[0]),He=ei(a.max,t[0]),He-Re>1&&(t[0][Re]<a.min&&Re++,t[0][He]>a.max&&He--),s.min=et[Re],s.max=et[He]}else s.show&&s.auto&&ot(a,o,s,t[n],s.sorted);s.idxs[0]=Re,s.idxs[1]=He}else if(n>0&&s.show&&s.auto){let[i,r]=s.facets,o=i.scale,a=r.scale,[l,c]=t[n],d=e[o],h=e[a];null!=d&&ot(d,z[o],i,l,i.sorted),null!=h&&ot(h,z[a],r,c,r.sorted),s.min=r.min,s.max=r.max}});for(let t in e){let s=e[t],r=z[t];if(null==s.from&&(null==r||null==r.min)){let e=s.range(i,s.min==Ci?null:s.min,s.max==-Ci?null:s.max,t);s.min=e[0],s.max=e[1]}}}for(let t in e){let s=e[t];if(null!=s.from){let r=e[s.from];if(null==r.min)s.min=s.max=null;else{let e=s.range(i,r.min,r.max,t);s.min=e[0],s.max=e[1]}}}let s={},n=!1;for(let t in e){let i=e[t],r=x[t];if(r.min!=i.min||r.max!=i.max){r.min=i.min,r.max=i.max;let e=r.distr;r._min=3==e?Ai(r.min):4==e?Si(r.min,r.asinh):100==e?r.fwd(r.min):r.min,r._max=3==e?Ai(r.max):4==e?Si(r.max,r.asinh):100==e?r.fwd(r.max):r.max,s[t]=n=!0}}if(n){v.forEach((e,t)=>{2==r?t>0&&s.y&&(e._paths=null):s[e.scale]&&(e._paths=null)});for(let e in s)ye=!0,Gs("setScale",e);R&&O.left>=0&&(xe=we=!0)}for(let e in z)z[e]=null}(),ge=!1),ye&&(!function(){let e=!1,t=0;for(;!e;){t++;let s=ft(t),r=_t(t);e=t==Me||s&&r,e||(ke(i.width,i.height),ve=!0)}}(),ye=!1),ve){if(Rs(p,xs,ae),Rs(p,vs,le),Rs(p,_s,ne),Rs(p,gs,oe),Rs(m,xs,ae),Rs(m,vs,le),Rs(m,_s,ne),Rs(m,gs,oe),Rs(u,_s,ie),Rs(u,gs,re),d.width=xi(ie*Fs),d.height=xi(re*Fs),y.forEach(({_el:e,_show:t,_size:s,_pos:i,side:r})=>{if(null!=e)if(t){let t=r%2==1;Rs(e,t?"left":"top",i-(3===r||0===r?s:0)),Rs(e,t?"width":"height",s),Rs(e,t?"top":"left",t?le:ae),Rs(e,t?"height":"width",t?oe:ne),Is(e,ms)}else Os(e,ms)}),Ve=Ue=Ge=Qe=Ke=Ye=Ze=Je=We=null,Xe=1,ns(!0),ae!=ce||le!=de||ne!=he||oe!=ue){gt(!1);let e=ne/he,t=oe/ue;if(R&&!xe&&O.left>=0){O.left*=e,O.top*=t,xt&&Us(xt,xi(O.left),0,ne,oe),bt&&Us(bt,0,xi(O.top),ne,oe);for(let s=0;s<ze.length;s++){let i=ze[s];null!=i&&(Te[s]*=e,Be[s]*=t,Us(i,bi(Te[s]),bi(Be[s]),ne,oe))}}if(Rt.show&&!be&&Rt.left>=0&&Rt.width>0){Rt.left*=e,Rt.width*=e,Rt.top*=t,Rt.height*=t;for(let e in ls)Rs(Ht,e,Rt[e])}ce=ae,de=le,he=ne,ue=oe}Gs("setSize"),ve=!1}ie>0&&re>0&&(h.clearRect(0,0,d.width,d.height),Gs("drawClear"),k.forEach(e=>e()),Gs("draw")),Rt.show&&be&&(jt(Rt),be=!1),R&&xe&&(is(null,!0,!1),xe=!1),N.show&&N.live&&we&&(ts(),we=!1),l||(l=!0,i.status=1,Gs("ready")),tt=!1,Pt=!1}function Lt(e,s){let r=x[e];if(null==r.from){if(0==Ie){let t=r.range(i,s.min,s.max,e);s.min=t[0],s.max=t[1]}if(s.min>s.max){let e=s.min;s.min=s.max,s.max=e}if(Ie>1&&null!=s.min&&null!=s.max&&s.max-s.min<1e-16)return;e==w&&2==r.distr&&Ie>0&&(s.min=ei(s.min,t[0]),s.max=ei(s.max,t[0]),s.min==s.max&&s.max++),z[e]=s,ge=!0,qt()}}i.batch=function(e,t=!1){Pt=!0,zt=t,e(i),Dt(),t&&Tt.length>0&&queueMicrotask(Bt)},i.redraw=(e,t)=>{ye=t||!1,!1!==e?Vt(w,E.min,E.max):qt()},i.setScale=Lt;let Ft=!1;const Nt=O.drag;let Ot=Nt.x,It=Nt.y;R&&(O.x&&(vt=js("u-cursor-x",m)),O.y&&(yt=js("u-cursor-y",m)),0==E.ori?(xt=vt,bt=yt):(xt=yt,bt=vt),St=O.left,Ct=O.top);const Rt=i.select=nr({show:!0,over:!0,left:0,width:0,top:0,height:0},e.select),Ht=Rt.show?js("u-select",Rt.over?m:p):null;function jt(e,t){if(Rt.show){for(let t in e)Rt[t]=e[t],t in ls&&Rs(Ht,t,e[t]);!1!==t&&Gs("setSelect")}}function Vt(e,t,s){Lt(e,{min:t,max:s})}function Ut(e,t,s,n){null!=t.focus&&function(e){if(e!=Qt){let t=null==e,s=1!=Se.alpha;v.forEach((i,n)=>{if(1==r||n>0){let r=t||0==n||n==e;i._focus=t?null:r,s&&function(e,t){v[e].alpha=t,R&&null!=ze[e]&&(ze[e].style.opacity=t);I&&W[e]&&(W[e].style.opacity=t)}(n,r?1:Se.alpha)}}),Qt=e,s&&qt()}}(e),null!=t.show&&v.forEach((s,i)=>{i>0&&(e==i||null==e)&&(s.show=t.show,function(e){if(v[e].show)I&&Is(W[e],ms);else if(I&&Os(W[e],ms),R){let t=Pe?ze[0]:ze[e];null!=t&&Us(t,-10,-10,ne,oe)}}(i),2==r?(Vt(s.facets[0].scale,null,null),Vt(s.facets[1].scale,null,null)):Vt(s.scale,null,null),qt())}),!1!==s&&Gs("setSeries",e,t),n&&ci("setSeries",i,e,t)}let Gt,Wt,Qt;i.setSelect=jt,i.setSeries=Ut,i.addBand=function(e,t){e.fill=Bi(e.fill||null),e.dir=ui(e.dir,-1),t=null==t?b.length:t,b.splice(t,0,e)},i.setBand=function(e,t){nr(b[e],t)},i.delBand=function(e){null==e?b.length=0:b.splice(e,1)};const Kt={focus:!0};function Yt(e,t,s){let i=x[t];s&&(e=e/Fs-(1==i.ori?le:ae));let r=ne;1==i.ori&&(r=oe,e=r-e),-1==i.dir&&(e=r-e);let n=i._min,o=n+(i._max-n)*(e/r),a=i.distr;return 3==a?ki(10,o):4==a?((e,t=1)=>_i.sinh(e)*t)(o,i.asinh):100==a?i.bwd(o):o}function Zt(e,t){Rs(Ht,xs,Rt.left=e),Rs(Ht,_s,Rt.width=t)}function Jt(e,t){Rs(Ht,vs,Rt.top=e),Rs(Ht,gs,Rt.height=t)}I&&Ce&&te(Ss,j,e=>{O._lock||(Ae(e),null!=Qt&&Ut(null,Kt,!0,Ys.setSeries))}),i.valToIdx=e=>ei(e,t[0]),i.posToIdx=function(e,s){return ei(Yt(e,w,s),t[0],Re,He)},i.posToVal=Yt,i.valToPos=(e,t,s)=>0==x[t].ori?n(e,x[t],s?fe:ne,s?pe:0):o(e,x[t],s?_e:oe,s?me:0),i.setCursor=(e,t,s)=>{St=e.left,Ct=e.top,is(null,t,s)};let Xt=0==E.ori?Zt:Jt,es=1==E.ori?Zt:Jt;function ts(e,t){if(null!=e&&(e.idxs?e.idxs.forEach((e,t)=>{F[t]=e}):(e=>void 0===e)(e.idx)||F.fill(e.idx),N.idx=F[0]),I&&N.live){for(let e=0;e<v.length;e++)(e>0||1==r&&!K)&&ss(e,F[e]);!function(){if(I&&N.live)for(let e=2==r?1:0;e<v.length;e++){if(0==e&&K)continue;let t=N.values[e],s=0;for(let i in t)Q[e][s++].firstChild.nodeValue=t[i]}}()}we=!1,!1!==t&&Gs("setLegend")}function ss(e,s){let r,n=v[e],o=0==e&&2==S?et:t[e];K?r=n.values(i,e,s)??Y:(r=n.value(i,null==s?null:o[s],e,s),r=null==r?Y:{_:r}),N.values[e]=r}function is(e,s,n){let o;At=St,Et=Ct,[St,Ct]=O.move(i,St,Ct),O.left=St,O.top=Ct,R&&(xt&&Us(xt,xi(St),0,ne,oe),bt&&Us(bt,0,xi(Ct),ne,oe));let a=Re>He;Gt=Ci,Wt=null;let l=0==E.ori?ne:oe,c=1==E.ori?ne:oe;if(St<0||0==Ie||a){o=O.idx=null;for(let e=0;e<v.length;e++){let t=ze[e];null!=t&&Us(t,-10,-10,ne,oe)}Ce&&Ut(null,Kt,!0,null==e&&Ys.setSeries),N.live&&(F.fill(o),we=!0)}else{let e,s,n;1==r&&(e=0==E.ori?St:Ct,s=Yt(e,w),o=O.idx=ei(s,t[0],Re,He),n=C(t[0][o],E,l,0));let a=-10,d=-10,h=0,u=0,p=!0,m="",f="";for(let e=2==r?1:0;e<v.length;e++){let _=v[e],g=F[e],y=null==g?null:1==r?t[e][g]:t[e][1][g],b=O.dataIdx(i,e,o,s),w=null==b?null:1==r?t[e][b]:t[e][1][b];if(we=we||w!=y||b!=g,F[e]=b,e>0&&_.show){let s=null==b?-10:b==o?n:C(1==r?t[0][b]:t[e][0][b],E,l,0),g=null==w?-10:P(w,1==r?x[_.scale]:x[_.facets[1].scale],c,0);if(Ce&&null!=w){let t=1==E.ori?St:Ct,s=vi(Se.dist(i,e,b,g,t));if(s<Gt){let i=Se.bias;if(0!=i){let r=Yt(t,_.scale),n=r>=0?1:-1;n==(w>=0?1:-1)&&(1==n?1==i?w>=r:w<=r:1==i?w<=r:w>=r)&&(Gt=s,Wt=e)}else Gt=s,Wt=e}}if(we||Pe){let t,r;0==E.ori?(t=s,r=g):(t=g,r=s);let n,o,l,c,_,v,y=!0,x=Ee.bbox;if(null!=x){y=!1;let t=x(i,e);l=t.left,c=t.top,n=t.width,o=t.height}else l=t,c=r,n=o=Ee.size(i,e);if(v=Ee.fill(i,e),_=Ee.stroke(i,e),Pe)e==Wt&&Gt<=Se.prox&&(a=l,d=c,h=n,u=o,p=y,m=v,f=_);else{let t=ze[e];null!=t&&(Te[e]=l,Be[e]=c,Ks(t,n,o,y),Ws(t,v,_),Us(t,bi(l),bi(c),ne,oe))}}}}if(Pe){let e=Se.prox;if(we||(null==Qt?Gt<=e:Gt>e||Wt!=Qt)){let e=ze[0];null!=e&&(Te[0]=a,Be[0]=d,Ks(e,h,u,p),Ws(e,m,f),Us(e,bi(a),bi(d),ne,oe))}}}if(Rt.show&&Ft)if(null!=e){let[t,s]=Ys.scales,[i,r]=Ys.match,[n,o]=e.cursor.sync.scales,a=e.cursor.drag;if(Ot=a._x,It=a._y,Ot||It){let a,d,h,u,p,{left:m,top:f,width:_,height:g}=e.select,v=e.scales[n].ori,y=e.posToVal,b=null!=t&&i(t,n),w=null!=s&&r(s,o);b&&Ot?(0==v?(a=m,d=_):(a=f,d=g),h=x[t],u=C(y(a,n),h,l,0),p=C(y(a+d,n),h,l,0),Xt(wi(u,p),vi(p-u))):Xt(0,l),w&&It?(1==v?(a=m,d=_):(a=f,d=g),h=x[s],u=P(y(a,o),h,c,0),p=P(y(a+d,o),h,c,0),es(wi(u,p),vi(p-u))):es(0,c)}else cs()}else{let e=vi(At-wt),t=vi(Et-$t);if(1==E.ori){let s=e;e=t,t=s}Ot=Nt.x&&e>=Nt.dist,It=Nt.y&&t>=Nt.dist;let s,i,r=Nt.uni;null!=r?Ot&&It&&(Ot=e>=r,It=t>=r,Ot||It||(t>e?It=!0:Ot=!0)):Nt.x&&Nt.y&&(Ot||It)&&(Ot=It=!0),Ot&&(0==E.ori?(s=kt,i=St):(s=Mt,i=Ct),Xt(wi(s,i),vi(i-s)),It||es(0,c)),It&&(1==E.ori?(s=kt,i=St):(s=Mt,i=Ct),es(wi(s,i),vi(i-s)),Ot||Xt(0,l)),Ot||It||(Xt(0,0),es(0,0))}if(Nt._x=Ot,Nt._y=It,null==e){if(n){if(null!=Zs){let[e,t]=Ys.scales;Ys.values[0]=null!=e?Yt(0==E.ori?St:Ct,e):null,Ys.values[1]=null!=t?Yt(1==E.ori?St:Ct,t):null}ci(ks,i,St,Ct,ne,oe,o)}if(Ce){let e=n&&Ys.setSeries,t=Se.prox;null==Qt?Gt<=t&&Ut(Wt,Kt,!0,e):Gt>t?Ut(null,Kt,!0,e):Wt!=Qt&&Ut(Wt,Kt,!0,e)}}we&&(N.idx=o,ts()),!1!==s&&Gs("setCursor")}i.setLegend=ts;let rs=null;function ns(e=!1){e?rs=null:(rs=m.getBoundingClientRect(),Gs("syncRect",rs))}function os(e,t,s,i,r,n,o){O._lock||Ft&&null!=e&&0==e.movementX&&0==e.movementY||(as(e,t,s,i,r,n,o,!1,null!=e),null!=e?is(null,!0,!0):is(t,!0,!1))}function as(e,t,s,r,n,o,l,c,d){if(null==rs&&ns(!1),Ae(e),null!=e)s=e.clientX-rs.left,r=e.clientY-rs.top;else{if(s<0||r<0)return St=-10,void(Ct=-10);let[e,i]=Ys.scales,l=t.cursor.sync,[c,d]=l.values,[h,u]=l.scales,[p,m]=Ys.match,f=t.axes[0].side%2==1,_=0==E.ori?ne:oe,g=1==E.ori?ne:oe,v=f?o:n,y=f?n:o,b=f?r:s,w=f?s:r;if(s=null!=h?p(e,h)?a(c,x[e],_,0):-10:_*(b/v),r=null!=u?m(i,u)?a(d,x[i],g,0):-10:g*(w/y),1==E.ori){let e=s;s=r,r=e}}!d||null!=t&&t.cursor.event.type!=ks||((s<=1||s>=ne-1)&&(s=Ri(s,ne)),(r<=1||r>=oe-1)&&(r=Ri(r,oe))),c?(wt=s,$t=r,[kt,Mt]=O.move(i,s,r)):(St=s,Ct=r)}Object.defineProperty(i,"rect",{get:()=>(null==rs&&ns(!1),rs)});const ls={width:0,height:0,left:0,top:0};function cs(){jt(ls,!1)}let ds,hs,us,ps;function ws(e,t,s,r,n,o,a){Ft=!0,Ot=It=Nt._x=Nt._y=!1,as(e,t,s,r,n,o,0,!0,!1),null!=e&&(te(As,qs,Ps,!1),ci(Ms,i,kt,Mt,ne,oe,null));let{left:l,top:c,width:d,height:h}=Rt;ds=l,hs=c,us=d,ps=h}function Ps(e,t,s,r,n,o,a){Ft=Nt._x=Nt._y=!1,as(e,t,s,r,n,o,0,!1,!0);let{left:l,top:c,width:d,height:h}=Rt,u=d>0||h>0,p=ds!=l||hs!=c||us!=d||ps!=h;if(u&&p&&jt(Rt),Nt.setScale&&u&&p){let e=l,t=d,s=c,i=h;if(1==E.ori&&(e=c,t=h,s=l,i=d),Ot&&Vt(w,Yt(e,w),Yt(e+t,w)),It)for(let e in x){let t=x[e];e!=w&&null==t.from&&t.min!=Ci&&Vt(e,Yt(s+i,e),Yt(s,e))}cs()}else O.lock&&(O._lock=!O._lock,is(t,!0,null!=e));null!=e&&(se(As,qs),ci(As,i,St,Ct,ne,oe,null))}function Bs(e,t,s,r,n,o,a){O._lock||(Ae(e),it(),cs(),null!=e&&ci(Cs,i,St,Ct,ne,oe,null))}function Ls(){y.forEach(fo),$e(i.width,i.height,!0)}Js(zs,Ds,Ls);const Ns={};Ns.mousedown=ws,Ns.mousemove=os,Ns.mouseup=Ps,Ns.dblclick=Bs,Ns.setSeries=(e,t,s,r)=>{-1!=(s=(0,Ys.match[2])(i,t,s))&&Ut(s,r,!0,!1)},R&&(te(Ms,m,ws),te(ks,m,os),te(Es,m,e=>{Ae(e),ns(!1)}),te(Ss,m,function(e,t,s,i,r,n,o){if(O._lock)return;Ae(e);let a=Ft;if(Ft){let e,t,s=!0,i=!0,r=10;0==E.ori?(e=Ot,t=It):(e=It,t=Ot),e&&t&&(s=St<=r||St>=ne-r,i=Ct<=r||Ct>=oe-r),e&&s&&(St=St<kt?0:ne),t&&i&&(Ct=Ct<Mt?0:oe),is(null,!0,!0),Ft=!1}St=-10,Ct=-10,F.fill(null),is(null,!0,!0),a&&(Ft=a)}),te(Cs,m,Bs),Xn.add(i),i.syncRect=ns);const Vs=i.hooks=e.hooks||{};function Gs(e,t,s){zt?Tt.push([e,t,s]):e in Vs&&Vs[e].forEach(e=>{e.call(null,i,t,s)})}(e.plugins||[]).forEach(e=>{for(let t in e.hooks)Vs[t]=(Vs[t]||[]).concat(e.hooks[t])});const Qs=(e,t,s)=>s,Ys=nr({key:null,setSeries:!1,filters:{pub:Fi,sub:Fi},scales:[w,v[1]?v[1].scale:null],match:[Ni,Ni,Qs],values:[null,null]},O.sync);2==Ys.match.length&&Ys.match.push(Qs),O.sync=Ys;const Zs=Ys.key,ti=En(Zs);function ci(e,t,s,i,r,n,o){Ys.filters.pub(e,t,s,i,r,n,o)&&ti.pub(e,t,s,i,r,n,o)}function di(){Gs("init",e,t),st(t||e.data,!1),z[w]?Lt(w,z[w]):it(),be=Rt.show&&(Rt.width>0||Rt.height>0),xe=we=!0,$e(e.width,e.height)}return ti.sub(i),i.pub=function(e,t,s,i,r,n,o){Ys.filters.sub(e,t,s,i,r,n,o)&&Ns[e](null,t,s,i,r,n,o)},i.destroy=function(){ti.unsub(i),Xn.delete(i),ee.clear(),Xs(zs,Ds,Ls),c.remove(),j?.remove(),Gs("destroy")},v.forEach(De),y.forEach(function(e,t){if(e._show=e.show,e.show){let s=e.side%2,r=x[e.scale];null==r&&(e.scale=s?v[1].scale:w,r=x[e.scale]);let n=r.time;e.size=Bi(e.size),e.space=Bi(e.space),e.rotate=Bi(e.rotate),Zi(e.incrs)&&e.incrs.forEach(e=>{!Ui.has(e)&&Ui.set(e,Gi(e))}),e.incrs=Bi(e.incrs||(2==r.distr?wr:n?1==g?Dr:Nr:$r)),e.splits=Bi(e.splits||(n&&1==r.distr?q:3==r.distr?ln:4==r.distr?cn:an)),e.stroke=Bi(e.stroke),e.grid.stroke=Bi(e.grid.stroke),e.ticks.stroke=Bi(e.ticks.stroke),e.border.stroke=Bi(e.border.stroke);let o=e.values;e.values=Zi(o)&&!Zi(o[0])?Bi(o):n?Zi(o)?Hr(T,Rr(o,B)):Xi(o)?function(e,t){let s=_r(t);return(t,i,r,n,o)=>i.map(t=>s(e(t)))}(T,o):o||D:o||on,e.filter=Bi(e.filter||(r.distr>=3&&10==r.log?fn:3==r.distr&&2==r.log?_n:Di)),e.font=mo(e.font),e.labelFont=mo(e.labelFont),e._size=e.size(i,null,t,0),e._space=e._rotate=e._incrs=e._found=e._splits=e._values=null,e._size>0&&(Le[t]=!0,e._el=js("u-axis",u))}}),s?s instanceof HTMLElement?(s.appendChild(c),di()):s(i,di):di(),i}_o.assign=nr,_o.fmtNum=fi,_o.rangeNum=hi,_o.rangeLog=oi,_o.rangeAsinh=ai,_o.orient=Sn,_o.pxRatio=Fs,_o.join=function(e,t){if(function(e){let t=e[0][0],s=t.length;for(let i=1;i<e.length;i++){let r=e[i][0];if(r.length!=s)return!1;if(r!=t)for(let e=0;e<s;e++)if(r[e]!=t[e])return!1}return!0}(e)){let t=e[0].slice();for(let s=1;s<e.length;s++)t.push(...e[s].slice(1));return function(e,t=100){const s=e.length;if(s<=1)return!0;let i=0,r=s-1;for(;i<=r&&null==e[i];)i++;for(;r>=i&&null==e[r];)r--;if(r<=i)return!0;const n=$i(1,yi((r-i+1)/t));for(let t=e[i],s=i+n;s<=r;s+=n){const i=e[s];if(null!=i){if(i<=t)return!1;t=i}}return!0}(t[0])||(t=function(e){let t=e[0],s=t.length,i=Array(s);for(let e=0;e<i.length;e++)i[e]=e;i.sort((e,s)=>t[e]-t[s]);let r=[];for(let t=0;t<e.length;t++){let n=e[t],o=Array(s);for(let e=0;e<s;e++)o[e]=n[i[e]];r.push(o)}return r}(t)),t}let s=new Set;for(let t=0;t<e.length;t++){let i=e[t][0],r=i.length;for(let e=0;e<r;e++)s.add(i[e])}let i=[Array.from(s).sort((e,t)=>e-t)],r=i[0].length,n=new Map;for(let e=0;e<r;e++)n.set(i[0][e],e);for(let s=0;s<e.length;s++){let o=e[s],a=o[0];for(let e=1;e<o.length;e++){let l=o[e],c=Array(r).fill(void 0),d=t?t[s][e]:1,h=[];for(let e=0;e<l.length;e++){let t=l[e],s=n.get(a[e]);null===t?0!=d&&(c[s]=t,2==d&&h.push(s)):c[s]=t}or(c,h,r),i.push(c)}}return i},_o.fmtDate=_r,_o.tzDate=function(e,t){let s;return"UTC"==t||"Etc/UTC"==t?s=new Date(+e+6e4*e.getTimezoneOffset()):t==gr?s=e:(s=new Date(e.toLocaleString("en-US",{timeZone:t})),s.setMilliseconds(e.getMilliseconds())),s},_o.sync=En;{_o.addGap=function(e,t,s){let i=e[e.length-1];i&&i[0]==t?i[1]=s:e.push([t,s])},_o.clipGaps=Tn;let e=_o.paths={points:Gn};e.linear=Yn,e.stepped=function(e){const t=ui(e.align,1),s=ui(e.ascDesc,!1),i=ui(e.alignGaps,0),r=ui(e.extend,!1);return(e,n,o,a)=>Sn(e,n,(l,c,d,h,u,p,m,f,_,g,v)=>{[o,a]=ri(d,o,a);let y=l.pxRound,{left:x,width:b}=e.bbox,w=e=>y(p(e,h,g,f)),$=e=>y(m(e,u,v,_)),k=0==h.ori?Nn:On;const M={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:1},A=M.stroke,E=h.dir*(0==h.ori?1:-1);let S=$(d[1==E?o:a]),C=w(c[1==E?o:a]),P=C,z=C;r&&-1==t&&(z=x,k(A,z,S)),k(A,C,S);for(let e=1==E?o:a;e>=o&&e<=a;e+=E){let s=d[e];if(null==s)continue;let i=w(c[e]),r=$(s);1==t?k(A,i,S):k(A,P,r),k(A,i,r),S=r,P=i}let T=P;r&&1==t&&(T=x+b,k(A,T,S));let[B,q]=Cn(e,n);if(null!=l.fill||0!=B){let t=M.fill=new Path2D(A),s=$(l.fillTo(e,n,l.min,l.max,B));k(t,T,s),k(t,z,s)}if(!l.spanGaps){let r=[];r.push(...Bn(c,d,o,a,E,w,i));let u=l.width*Fs/2,p=s||1==t?u:-u,m=s||-1==t?-u:u;r.forEach(e=>{e[0]+=p,e[1]+=m}),M.gaps=r=l.gaps(e,n,o,a,r),M.clip=Tn(r,h.ori,f,_,g,v)}return 0!=q&&(M.band=2==q?[zn(e,n,o,a,A,-1),zn(e,n,o,a,A,1)]:zn(e,n,o,a,A,q)),M})},e.bars=function(e){const t=ui((e=e||Qi).size,[.6,Ci,1]),s=e.align||0,i=e.gap||0;let r=e.radius;r=null==r?[0,0]:"number"==typeof r?[r,0]:r;const n=Bi(r),o=1-t[0],a=ui(t[1],Ci),l=ui(t[2],1),c=ui(e.disp,Qi),d=ui(e.each,e=>{}),{fill:h,stroke:u}=c;return(e,t,r,p)=>Sn(e,t,(m,f,_,g,v,y,x,b,w,$,k)=>{let M,A,E=m.pxRound,S=s,C=i*Fs,P=a*Fs,z=l*Fs;0==g.ori?[M,A]=n(e,t):[A,M]=n(e,t);const T=g.dir*(0==g.ori?1:-1);let B,q,D,L=0==g.ori?In:Rn,F=0==g.ori?d:(e,t,s,i,r,n,o)=>{d(e,t,s,r,i,o,n)},N=ui(e.bands,Ki).find(e=>e.series[0]==t),O=null!=N?N.dir:0,I=m.fillTo(e,t,m.min,m.max,O),R=E(x(I,v,k,w)),H=$,j=E(m.width*Fs),V=!1,U=null,G=null,W=null,Q=null;null==h||0!=j&&null==u||(V=!0,U=h.values(e,t,r,p),G=new Map,new Set(U).forEach(e=>{null!=e&&G.set(e,new Path2D)}),j>0&&(W=u.values(e,t,r,p),Q=new Map,new Set(W).forEach(e=>{null!=e&&Q.set(e,new Path2D)})));let{x0:K,size:Y}=c;if(null!=K&&null!=Y){S=1,f=K.values(e,t,r,p),2==K.unit&&(f=f.map(t=>e.posToVal(b+t*$,g.key,!0)));let s=Y.values(e,t,r,p);q=2==Y.unit?s[0]*$:y(s[0],g,$,b)-y(0,g,$,b),H=Zn(f,_,y,g,$,b,H),D=H-q+C}else H=Zn(f,_,y,g,$,b,H),D=H*o+C,q=H-D;D<1&&(D=0),j>=q/2&&(j=0),D<5&&(E=qi);let Z=D>0;q=E(zi(H-D-(Z?j:0),z,P)),B=(0==S?q/2:S==T?0:q)-S*T*((0==S?C/2:0)+(Z?j/2:0));const J={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},X=V?null:new Path2D;let ee=null;if(null!=N)ee=e.data[N.series[1]];else{let{y0:s,y1:i}=c;null!=s&&null!=i&&(_=i.values(e,t,r,p),ee=s.values(e,t,r,p))}let te=M*q,se=A*q;for(let s=1==T?r:p;s>=r&&s<=p;s+=T){let i=_[s];if(null==i)continue;if(null!=ee){let e=ee[s]??0;if(i-e==0)continue;R=x(e,v,k,w)}let r=y(2!=g.distr||null!=c?f[s]:s,g,$,b),n=x(ui(i,I),v,k,w),o=E(r-B),a=E($i(n,R)),l=E(wi(n,R)),d=a-l;if(null!=i){let r=i<0?se:te,n=i<0?te:se;V?(j>0&&null!=W[s]&&L(Q.get(W[s]),o,l+yi(j/2),q,$i(0,d-j),r,n),null!=U[s]&&L(G.get(U[s]),o,l+yi(j/2),q,$i(0,d-j),r,n)):L(X,o,l+yi(j/2),q,$i(0,d-j),r,n),F(e,t,s,o-j/2,l,q+j,d)}}return j>0?J.stroke=V?Q:X:V||(J._fill=0==m.width?m._fill:m._stroke??m._fill,J.width=0),J.fill=V?G:X,J})},e.spline=function(e){return function(e,t){const s=ui(t?.alignGaps,0);return(t,i,r,n)=>Sn(t,i,(o,a,l,c,d,h,u,p,m,f,_)=>{[r,n]=ri(l,r,n);let g,v,y,x=o.pxRound,b=e=>x(h(e,c,f,p)),w=e=>x(u(e,d,_,m));0==c.ori?(g=Ln,y=Nn,v=Vn):(g=Fn,y=On,v=Un);const $=c.dir*(0==c.ori?1:-1);let k=b(a[1==$?r:n]),M=k,A=[],E=[];for(let e=1==$?r:n;e>=r&&e<=n;e+=$)if(null!=l[e]){let t=b(a[e]);A.push(M=t),E.push(w(l[e]))}const S={stroke:e(A,E,g,y,v,x),fill:null,clip:null,band:null,gaps:null,flags:1},C=S.stroke;let[P,z]=Cn(t,i);if(null!=o.fill||0!=P){let e=S.fill=new Path2D(C),s=w(o.fillTo(t,i,o.min,o.max,P));y(e,M,s),y(e,k,s)}if(!o.spanGaps){let e=[];e.push(...Bn(a,l,r,n,$,b,s)),S.gaps=e=o.gaps(t,i,r,n,e),S.clip=Tn(e,c.ori,p,m,f,_)}return 0!=z&&(S.band=2==z?[zn(t,i,r,n,C,-1),zn(t,i,r,n,C,1)]:zn(t,i,r,n,C,z)),S})}(Jn,e)}}const go=a`
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
`;function vo(e){let t=null,s=null,i=0,r=0,n=null;for(const o of e)null!==o&&(t=null===t?o:Math.min(t,o),s=null===s?o:Math.max(s,o),i+=o,r++,n=o);return{last:n,min:t,max:s,mean:r?i/r:null}}const yo=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let xo=class extends os{_defaults(){return{time_range:"1h",height:200,show_legend:!0,legend_mode:"list",fill:!1,fill_opacity:20,line_width:2,stacked:!1,palette:"classic",refresh_interval:30}}_options(e,t){return t.map(t=>({value:t,label:Ie(`${e}${t}`,this.hass)}))}_sections(){const e=this._config?.fill||this._config?.stacked;return[{schema:[Dt,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"time_range",selector:{select:{mode:"dropdown",custom_value:!0,options:Ut}}},{name:"height",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}}},Rt,It,{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}}]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[jt(this.hass),{name:"line_width",selector:{number:{min:.5,max:10,step:.5,mode:"slider",unit_of_measurement:"px"}}},{name:"fill",selector:{boolean:{}}},{name:"stacked",selector:{boolean:{}}},...e?[{name:"fill_opacity",selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}}}]:[]]}]},{title:"section_legend",schema:[{name:"",type:"grid",schema:[{name:"show_legend",selector:{boolean:{}}},{name:"legend_mode",selector:{select:{mode:"dropdown",options:this._options("legend_mode_",["list","table"])}}},{name:"show_current",selector:{boolean:{}}}]},{name:"legend_values",selector:{select:{multiple:!0,mode:"list",options:this._options("legend_value_",["last","min","max","mean"])}}}]},Ot({name:"step",selector:{text:{}}})]}_renderExtra(){return U`
      <div class="section-title">${Ie("section_queries",this.hass)}</div>
      <div class="helper">${Ie("helper_series_query",this.hass)}. ${Ie("helper_name_series",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${yo}
        .entryId=${this._config?.entry_id}
        .queryMode=${"range"}
        .itemTitle=${Ie("query_n",this.hass)}
        .addLabel=${Ie("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value.map(({fill:e,...t})=>t);this._updateConfig({series:t})}}
      ></prometheus-list-editor>
    `}};xo=e([ue("prometheus-timeseries-card-editor")],xo);let bo=class extends Re{constructor(){super(...arguments),this._data={times:[],series:[]},this._cursorIdx=null,this._hidden=new Set,this._chartSignature=""}static get styles(){return[Fe,a`${o('.uplot, .uplot *, .uplot *::before, .uplot *::after {box-sizing: border-box;}.uplot {font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;width: min-content;}.u-title {text-align: center;font-size: 18px;font-weight: bold;}.u-wrap {position: relative;user-select: none;}.u-over, .u-under {position: absolute;}.u-under {overflow: hidden;}.uplot canvas {display: block;position: relative;width: 100%;height: 100%;}.u-axis {position: absolute;}.u-legend {font-size: 14px;margin: auto;text-align: center;}.u-inline {display: block;}.u-inline * {display: inline-block;}.u-inline tr {margin-right: 16px;}.u-legend th {font-weight: 600;}.u-legend th > * {vertical-align: middle;display: inline-block;}.u-legend .u-marker {width: 1em;height: 1em;margin-right: 4px;background-clip: padding-box !important;}.u-inline.u-live th::after {content: ":";vertical-align: middle;}.u-inline:not(.u-live) .u-value {display: none;}.u-series > * {padding: 4px;}.u-series th {cursor: pointer;}.u-legend .u-off > * {opacity: 0.3;}.u-select {background: rgba(0,0,0,0.07);position: absolute;pointer-events: none;}.u-cursor-x, .u-cursor-y {position: absolute;left: 0;top: 0;pointer-events: none;will-change: transform;}.u-hz .u-cursor-x, .u-vt .u-cursor-y {height: 100%;border-right: 1px dashed #607D8B;}.u-hz .u-cursor-y, .u-vt .u-cursor-x {width: 100%;border-bottom: 1px dashed #607D8B;}.u-cursor-pt {position: absolute;top: 0;left: 0;border-radius: 50%;border: 0 solid;pointer-events: none;will-change: transform;/*this has to be !important since we set inline "background" shorthand */background-clip: padding-box !important;}.u-axis.u-off, .u-select.u-off, .u-cursor-x.u-off, .u-cursor-y.u-off, .u-cursor-pt.u-off {display: none;}')}`,go]}static getStubConfig(){return{type:"custom:prometheus-timeseries-card",title:"Scrape duration",time_range:"1h",unit:"s",series:[{query:"scrape_duration_seconds",name:"{{job}}"}]}}static getConfigElement(){return document.createElement("prometheus-timeseries-card-editor")}setConfig(e){const t=Array.isArray(e.series)?e.series:[];super.setConfig({...e,series:t}),this._destroyChart()}_hasQuery(){return Boolean(this._config?.series?.some(e=>e&&e.query&&e.query.trim()))}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}getCardSize(){return Math.ceil(((this._config?.height||200)+100)/50)}disconnectedCallback(){super.disconnectedCallback(),this._destroyChart()}updated(e){if(super.updated(e),!this._data.times.length||!this._chartContainer)return;const t=this._data.series.map(e=>`${e.key}|${e.color}`).join(",");this._chart&&t===this._chartSignature?(e.has("_data")||e.has("_hidden"))&&(this._chart.setData(this._aligned()),this._data.series.forEach((e,t)=>this._chart.setSeries(t+1,{show:!this._hidden.has(e.key)}))):(this._destroyChart(),this._chartSignature=t,this._initChart())}_aligned(){return function(e,t,s){const i=t?function(e,t){const s=[];return e.map(e=>t.has(e.key)?e.values.map(()=>null):e.values.map((e,t)=>(s[t]=(s[t]||0)+(e??0),null===e?null:s[t])))}(e.series,s):e.series.map(e=>e.values);return[e.times,...i]}(this._data,Boolean(this._config.stacked),this._hidden)}_destroyChart(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._chart?.destroy(),this._chart=void 0,this._chartSignature=""}_cssVar(e,t){return getComputedStyle(this).getPropertyValue(e).trim()||t}_fmt(e){return null==e?"-":ct(e,this._config.decimals,this._config.unit)}_initChart(){if(!this._chartContainer||!this._config)return;const e=this._config,t=this._chartContainer.clientWidth||400,s=e.height||200,i=this._cssVar("--secondary-text-color","#888"),r=this._cssVar("--divider-color","rgba(127,127,127,0.2)"),n=e.line_width??2,o=e.fill||e.stacked||e.series.some(e=>e.fill),a=Math.max(0,Math.min(100,e.fill_opacity??20))/100,l=[{}];this._data.series.forEach(e=>{l.push({label:e.label,stroke:e.color,width:n,fill:o?gt(e.color,a):void 0,spanGaps:!0,show:!this._hidden.has(e.key),points:{show:!1}})});const c=[{stroke:i,grid:{stroke:r,width:1},ticks:{stroke:r,width:1}},{stroke:i,size:70,grid:{stroke:r,width:1},ticks:{stroke:r,width:1},values:(e,t)=>t.map(e=>null==e?"":this._fmt(e))}],d={width:t,height:s,series:l,axes:c,legend:{show:!1},scales:{y:{range:(t,s,i)=>{const r=e.min??(e.stacked?Math.min(0,s):s),n=e.max??i;return r===n?[r-1,n+1]:[r,n]}}},cursor:{points:{size:6}},hooks:{setCursor:[e=>this._cursorIdx=e.cursor.idx??null]}};this._chart=new _o(d,this._aligned(),this._chartContainer),this._resizeObserver=new ResizeObserver(e=>{for(const t of e)t.target===this._chartContainer&&this._chart&&t.contentRect.width>0&&this._chart.setSize({width:t.contentRect.width,height:this._config.height||200})}),this._resizeObserver.observe(this._chartContainer)}async _fetchData(){const e=this._config.series;try{this._loading=!0;const t=yt(this._config.time_range||"1h"),{start:s,end:i}=t,r=this._config.step?String(this._config.step):t.step,n=await Promise.all(e.map(e=>e.query&&e.query.trim()?this._client.rangeQuery(e.query,s,i,r):Promise.resolve(null)));this._data=function(e,t,s){const i=[],r=new Set;e.forEach((e,s)=>{const n=t[s],o=n.name?.trim(),a=o&&o.includes("{{")?o:void 0,l=o&&!a?o:void 0,c=$t(e,a);c.forEach((e,t)=>{let o=e.label;l&&(o=c.length>1?`${l} ${ht(e.metric)}`:l),o=o||`Series ${s+1}`;const a=new Map;for(const[t,s]of e.points)a.set(t,s),r.add(t);i.push({key:`${s}:${t}:${o}`,label:o,explicit:1===c.length?n.color:void 0,points:a})})});const n=i.slice(0,xt),o=Array.from(r).sort((e,t)=>e-t),a=n.map((e,t)=>{const i=o.map(t=>e.points.has(t)?e.points.get(t):null);return{key:e.key,label:e.label,color:At(t,n.length,s,e.explicit),values:i,stats:vo(i)}});return{times:o,series:a}}(n,e,this._config.palette),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1}}_toggle(e,t){const s=new Set(this._hidden),i=this._data.series.map(e=>e.key);if(t.ctrlKey||t.metaKey||t.shiftKey)s.has(e)?s.delete(e):s.add(e);else{const t=s.size===i.length-1&&!s.has(e);s.clear(),t||i.filter(t=>t!==e).forEach(e=>s.add(e))}this._hidden=s}_current(e){return null!==this._cursorIdx?e.values[this._cursorIdx]??null:e.stats.last}render(){if(!this._hasQuery())return this.renderPlaceholder("no_series");const e=this._data.times.length>0;let t=Q;return this._error?t=U`<div class="overlay error-state">${this._error}</div>`:e||(t=U`<div class="overlay">
        ${this._loading?U`<div class="loading-state"></div>`:U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`}
      </div>`),U`
      <ha-card>
        ${this._config.title?U`<div class="header">${this._config.title}</div>`:Q}
        <div class="chart-container" style="min-height: ${e?this._config.height||200:0}px"></div>
        ${t}
        ${!1!==this._config.show_legend&&e?this._renderLegend():Q}
      </ha-card>
    `}_showCurrent(){return!1!==this._config.show_current}_renderLegendTable(e){const t=e,s=this._showCurrent();return U`
      <div class="legend-table-wrap">
        <table class="legend-table">
          <thead>
            <tr>
              <th></th>
              ${t.map(e=>U`<th>${Ie(`legend_value_${e}`,this._hass)}</th>`)}
              ${s?U`<th>${Ie("current",this._hass)}</th>`:Q}
            </tr>
          </thead>
          <tbody>
            ${this._data.series.map(e=>U`
                <tr class=${this._hidden.has(e.key)?"hidden":""} @click=${t=>this._toggle(e.key,t)}>
                  <td>
                    <div class="name-cell" title=${e.label}>
                      <span class="legend-color" style="background:${e.color}"></span><span>${e.label}</span>
                    </div>
                  </td>
                  ${t.map(t=>U`<td>${this._fmt(e.stats[t])}</td>`)}
                  ${s?U`<td>${this._fmt(this._current(e))}</td>`:Q}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}_renderLegend(){const e=this._config.legend_values||[];return"table"===this._config.legend_mode?this._renderLegendTable(e):U`
      <div class="legend">
        ${this._data.series.map(t=>U`
            <div
              class="legend-item ${this._hidden.has(t.key)?"hidden":""}"
              title=${t.label}
              @click=${e=>this._toggle(t.key,e)}
            >
              <div class="legend-color" style="background-color: ${t.color}"></div>
              <span class="legend-name">${t.label}</span>
              ${e.map(e=>U`<span class="legend-value"
                  ><span class="legend-stat">${Ie(`legend_value_${e}`,this._hass)}:</span>
                  ${this._fmt(t.stats[e])}</span
                >`)}
              ${this._showCurrent()?U`<span class="legend-value">${this._fmt(this._current(t))}</span>`:Q}
            </div>
          `)}
      </div>
    `}};e([_e()],bo.prototype,"_data",void 0),e([_e()],bo.prototype,"_cursorIdx",void 0),e([_e()],bo.prototype,"_hidden",void 0),e([ge(".chart-container")],bo.prototype,"_chartContainer",void 0),bo=e([ue("prometheus-timeseries-card")],bo);const wo=a`
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
`,$o=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let ko=class extends os{_defaults(){return{orientation:"horizontal",show_values:!0,bar_height:24,refresh_interval:30,sort:"desc",palette:"classic",color_mode:"thresholds"}}_options(e,t){return t.map(t=>({value:t,label:Ie(`${e}${t}`,this.hass)}))}_sections(){return[{schema:[Dt,Lt,Ht]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"orientation",selector:{select:{mode:"dropdown",options:this._options("",["horizontal","vertical"])}}},{name:"show_values",selector:{boolean:{}}},Rt,It,{name:"sort",selector:{select:{mode:"dropdown",options:this._options("sort_",["desc","asc","name","none"])}}},{name:"limit",selector:{number:{min:1,max:100,mode:"box"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},{name:"bar_height",selector:{number:{min:4,max:80,mode:"box",unit_of_measurement:"px"}}}]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[Vt(this.hass),jt(this.hass)]}]},Ot()]}_renderExtra(){return U`
      <div class="section-title">${Ie("section_queries",this.hass)}</div>
      <div class="helper">${Ie("helper_series_query",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${$o}
        .entryId=${this._config?.entry_id}
        .itemTitle=${Ie("query_n",this.hass)}
        .addLabel=${Ie("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({series:t&&t.length?t:void 0})}}
      ></prometheus-list-editor>
      ${this._renderThresholds()}
    `}};ko=e([ue("prometheus-bar-card-editor")],ko);let Mo=class extends Re{constructor(){super(...arguments),this._barData=[],this._calculatedMax=0,this._loaded=!1}static get styles(){return[Fe,wo]}static getStubConfig(){return{type:"custom:prometheus-bar-card",name:"Scrape duration",query:"scrape_duration_seconds",legend_format:"{{job}}",unit:"s",orientation:"horizontal"}}static getConfigElement(){return document.createElement("prometheus-bar-card-editor")}_queries(){const e=[];this._config.query?.trim()&&e.push({query:this._config.query,name:this._config.legend_format});for(const t of this._config.series||[])t?.query?.trim()&&e.push(t);return e}_hasQuery(){return this._queries().length>0}async _fetchData(){const e=this._config;try{this._loading=!0;const t=this._queries(),s=await Promise.all(t.map(e=>this._client.instantQuery(e.query)));let i=[];s.forEach((e,s)=>{const r=t[s],n=r.name&&r.name.includes("{{")?r.name:void 0,o=wt(e,n);for(const e of o){if(null===e.value)continue;let t=ht(e.metric,n);r.name&&!n&&(t=o.length>1?`${r.name} ${t}`:r.name),i.push({label:t,value:e.value,color:"",explicitColor:1===o.length?r.color:void 0})}});const r=e.sort||"desc";"desc"===r?i.sort((e,t)=>t.value-e.value):"asc"===r?i.sort((e,t)=>e.value-t.value):"name"===r&&i.sort((e,t)=>e.label.localeCompare(t.label,void 0,{numeric:!0})),e.limit&&e.limit>0&&(i=i.slice(0,e.limit));const n=i.reduce((e,t)=>Math.max(e,t.value),0);this._calculatedMax=e.max||n||100;const o="series"!==e.color_mode&&e.thresholds?.length;i.forEach((t,s)=>{const r=At(s,i.length,e.palette,t.explicitColor);t.color=o?_t(t.value,e.thresholds,r):r}),this._barData=i,this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}render(){if(!this._hasQuery())return this.renderPlaceholder();let e;return e=this._error?U`<div class="error-state">${this._error}</div>`:this._barData.length>0?this._renderBars():this._loaded?U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`:U`<div class="loading-state"></div>`,U`
      <ha-card>
        ${this._config.name?U`<div class="header">${this._config.name}</div>`:Q}
        <div class="body">${e}</div>
      </ha-card>
    `}_fmt(e){return ct(e,this._config.decimals,this._config.unit)}_renderBars(){const e=this._calculatedMax||1,t=!1!==this._config.show_values;if("vertical"===this._config.orientation)return U`
        <div class="bars-container-vertical">
          ${this._barData.map(s=>{const i=Math.min(100,Math.max(0,s.value/e*100));return U`
              <div class="bar-col">
                ${t?U`<div class="bar-col-value">${this._fmt(s.value)}</div>`:Q}
                <div class="bar-col-track">
                  <div class="bar-col-fill" style="height: ${i}%; background-color: ${s.color};"></div>
                </div>
                <div class="bar-col-label" title="${s.label}">${s.label}</div>
              </div>
            `})}
        </div>
      `;const s=this._config.bar_height||24;return U`
      <div class="bars-container-horizontal">
        ${this._barData.map(i=>{const r=Math.min(100,Math.max(0,i.value/e*100));return U`
            <div class="bar-row">
              <div class="bar-label" title="${i.label}">${i.label}</div>
              <div class="bar-track" style="height: ${s}px;">
                <div class="bar-fill" style="width: ${r}%; background-color: ${i.color};"></div>
              </div>
              ${t?U`<div class="bar-value">${this._fmt(i.value)}</div>`:Q}
            </div>
          `})}
      </div>
    `}};e([_e()],Mo.prototype,"_barData",void 0),e([_e()],Mo.prototype,"_calculatedMax",void 0),e([_e()],Mo.prototype,"_loaded",void 0),Mo=e([ue("prometheus-bar-card")],Mo);const Ao=a`
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
`;function Eo(e,t){if(void 0!==e.value&&null!==e.value&&""!==String(e.value)){const s=Number(e.value);return Number.isFinite(s)?s===t:String(e.value)===String(t)}const s=void 0!==e.from&&null!==e.from,i=void 0!==e.to&&null!==e.to;return!(!s&&!i)&&((!s||t>=e.from)&&(!i||t<=e.to))}function So(e,t,s){const i=ct(e,t.decimals,t.unit);for(const[s,r]of(t.mappings||[]).entries())if(Eo(r,e))return{key:`m${s}`,text:r.text||i,color:ft(r.color)||At(s,(t.mappings||[]).length,t.palette)};if(t.thresholds?.length){const s=_t(e,t.thresholds);return{key:`t${s}`,text:i,color:s}}return{key:`v${e}`,text:i,color:At(Math.max(0,s.indexOf(e)),Math.max(s.length,2),t.palette)}}function Co(e,t,s,i,r){const n=[],o=!1!==r.merge_values;let a=1/0;for(let t=1;t<e.length;t++)a=Math.min(a,e[t][0]-e[t-1][0]);t=Number.isFinite(a)?Math.max(t,a):t;for(let a=0;a<e.length;a++){const[l,c]=e[a];if(null===c)continue;const d=e[a+1]?.[0],h=void 0!==d&&d-l<=2*t?d:Math.min(l+t,s),u=So(c,r,i),p=n[n.length-1];o&&p&&p.key===u.key&&p.end>=l?p.end=h:n.push({...u,start:l,end:h})}return n}const Po=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"name",selector:{text:{}}}],zo=[{name:"",type:"grid",schema:[{name:"value",selector:{text:{}}},{name:"text",selector:{text:{}}},{name:"from",selector:{number:{mode:"box",step:"any"}}},{name:"to",selector:{number:{mode:"box",step:"any"}}},{name:"color",selector:{text:{type:"color"}}}]}];let To=class extends os{_defaults(){return{time_range:"6h",row_height:26,show_values:!0,show_legend:!0,merge_values:!0,palette:"classic",refresh_interval:60}}_sections(){return[{schema:[Dt,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"time_range",selector:{select:{mode:"dropdown",custom_value:!0,options:Ut}}},{name:"row_height",selector:{number:{min:10,max:80,mode:"box",unit_of_measurement:"px"}}},Rt,It]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"show_values",selector:{boolean:{}}},{name:"show_legend",selector:{boolean:{}}},{name:"merge_values",selector:{boolean:{}}},jt(this.hass)]}]},Ot({name:"step",selector:{text:{}}})]}_renderExtra(){return U`
      <div class="section-title">${Ie("section_queries",this.hass)}</div>
      <div class="helper">${Ie("helper_timeline_query",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Po}
        .entryId=${this._config?.entry_id}
        .queryMode=${"range"}
        .itemTitle=${Ie("query_n",this.hass)}
        .addLabel=${Ie("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation(),this._updateConfig({series:e.detail.value})}}
      ></prometheus-list-editor>

      <div class="section-title">${Ie("section_mappings",this.hass)}</div>
      <div class="helper">${Ie("helper_mappings",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.mappings||[]}
        .schema=${zo}
        .addLabel=${Ie("add_mapping",this.hass)}
        .newItem=${()=>({value:"",text:"",color:"#73BF69"})}
        @value-changed=${e=>{e.stopPropagation();const t=e.detail.value;this._updateConfig({mappings:t.length?t:void 0})}}
      ></prometheus-list-editor>
      ${this._renderThresholds()}
    `}};To=e([ue("prometheus-state-timeline-card-editor")],To);let Bo=class extends Re{constructor(){super(...arguments),this._rows=[],this._range=[0,0],this._loaded=!1,this._hover=""}static get styles(){return[Fe,Ao]}static getStubConfig(){return{type:"custom:prometheus-state-timeline-card",title:"Targets",time_range:"6h",series:[{query:"up",name:"{{job}}"}],mappings:[{value:"1",text:"UP",color:"#73BF69"},{value:"0",text:"DOWN",color:"#F2495C"}]}}static getConfigElement(){return document.createElement("prometheus-state-timeline-card-editor")}setConfig(e){super.setConfig({...e,series:Array.isArray(e.series)?e.series:[]})}_hasQuery(){return Boolean(this._config?.series?.some(e=>e?.query?.trim()))}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}getCardSize(){return 2+Math.ceil(this._rows.length/2)}async _fetchData(){const e=this._config;try{this._loading=!0;const t=yt(e.time_range||"6h",300),{start:s,end:i}=t,r=e.step?String(e.step):t.step,n=e.series.filter(e=>e?.query?.trim()),o=await Promise.all(n.map(e=>this._client.rangeQuery(e.query,s,i,r)));this._rows=function(e,t,s,i,r){const n=[];e.forEach((e,s)=>{const i=t[s].name?.trim(),r=i&&i.includes("{{")?i:void 0,o=$t(e,r);for(const e of o){let t=r?e.label:ht(e.metric);i&&!r&&(t=o.length>1?`${i} ${ht(e.metric)}`:i),n.push({label:t,points:e.points})}});const o=Array.from(new Set(n.flatMap(e=>e.points.map(e=>e[1]).filter(e=>null!==e)))).sort((e,t)=>e-t);return n.slice(0,xt).map(e=>({label:e.label,segments:Co(e.points,i,r,o,s)}))}(o,n,e,parseFloat(r)||60,i),this._range=[s,i],this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_time(e){const t=this._range[1]-this._range[0]>172800?{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}:{hour:"2-digit",minute:"2-digit"};return new Date(1e3*e).toLocaleString(this._hass?.locale?.language,t)}_renderRow(e){const[t,s]=this._range,i=s-t||1,r=!1!==this._config.show_values;return U`
      <div class="row-label" title=${e.label}>${e.label}</div>
      <div class="row-bar">
        ${e.segments.map(s=>{const n=(s.start-t)/i*100,o=Math.max(.2,(s.end-s.start)/i*100),a=`${e.label}: ${s.text} (${this._time(s.start)} – ${this._time(s.end)})`;return U`<div
            class="segment"
            style="left:${n}%;width:${o}%;background:${s.color}"
            title=${a}
            @mouseenter=${()=>this._hover=a}
          >
            ${r&&o>6?U`<span>${s.text}</span>`:Q}
          </div>`})}
      </div>
    `}_renderLegend(){const e=new Map;return this._rows.forEach(t=>t.segments.forEach(t=>e.set(t.key,t))),U`<div class="legend">
      ${[...e.values()].map(e=>U`<div class="legend-item"><span class="legend-color" style="background:${e.color}"></span>${e.text}</div>`)}
    </div>`}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder("no_series");if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const[t,s]=this._range,i=[0,.25,.5,.75,1].map(e=>t+(s-t)*e);return U`
      <ha-card>
        ${e.title?U`<div class="header">${e.title}</div>`:Q}
        ${this._rows.length?U`
              <div class="timeline" style="--row-height: ${e.row_height||26}px" @mouseleave=${()=>this._hover=""}>
                ${this._rows.map(e=>this._renderRow(e))}
                <div class="axis">${i.map(e=>U`<span>${this._time(e)}</span>`)}</div>
              </div>
              <div class="tooltip">${this._hover}</div>
              ${!1!==e.show_legend?this._renderLegend():Q}
            `:U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`}
      </ha-card>
    `}};e([_e()],Bo.prototype,"_rows",void 0),e([_e()],Bo.prototype,"_range",void 0),e([_e()],Bo.prototype,"_loaded",void 0),e([_e()],Bo.prototype,"_hover",void 0),Bo=e([ue("prometheus-state-timeline-card")],Bo);const qo=a`
  :host {
    display: block;
    container-type: inline-size;
  }
  /* Narrow card (card picker preview, 3-4 sections columns): legend goes below the chart */
  @container (max-width: 340px) {
    .body {
      flex-direction: column;
    }
    .body .legend {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4px 14px;
      max-height: none;
    }
    .chart {
      width: min(var(--pie-size, 180px), 70cqw);
    }
  }
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
`;function Do(e,t,s,i){const r=(i-90)*Math.PI/180;return[e+s*Math.cos(r),t+s*Math.sin(r)]}const Lo=[{name:"query",required:!0,selector:{text:{multiline:!0}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{type:"color"}}}]}];let Fo=class extends os{_defaults(){return{pie_type:"donut",donut_width:40,show_legend:!0,legend_position:"right",legend_values:["value"],show_labels:!1,show_total:!0,sort:"desc",size:180,palette:"classic",refresh_interval:30}}_options(e,t){return t.map(t=>({value:t,label:Ie(`${e}${t}`,this.hass)}))}_sections(){const e="pie"!==this._config?.pie_type;return[{schema:[Dt,{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[Rt,It]}]},{title:"section_display",schema:[{name:"",type:"grid",schema:[{name:"pie_type",selector:{select:{mode:"dropdown",options:this._options("pie_type_",["donut","pie"])}}},...e?[{name:"donut_width",selector:{number:{min:10,max:90,step:5,mode:"slider",unit_of_measurement:"%"}}},{name:"show_total",selector:{boolean:{}}}]:[],{name:"show_labels",selector:{boolean:{}}},{name:"size",selector:{number:{min:80,max:500,mode:"box",unit_of_measurement:"px"}}},{name:"sort",selector:{select:{mode:"dropdown",options:this._options("sort_",["desc","asc","none"])}}},{name:"limit",selector:{number:{min:1,max:50,mode:"box"}}},jt(this.hass)]}]},{title:"section_legend",schema:[{name:"",type:"grid",schema:[{name:"show_legend",selector:{boolean:{}}},{name:"legend_position",selector:{select:{mode:"dropdown",options:this._options("legend_position_",["right","bottom"])}}}]},{name:"legend_values",selector:{select:{multiple:!0,mode:"list",options:this._options("legend_pie_",["value","percent"])}}}]},Ot()]}_renderExtra(){return U`
      <div class="section-title">${Ie("section_queries",this.hass)}</div>
      <div class="helper">${Ie("helper_pie_query",this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series||[]}
        .schema=${Lo}
        .entryId=${this._config?.entry_id}
        .itemTitle=${Ie("query_n",this.hass)}
        .addLabel=${Ie("add_query",this.hass)}
        .newItem=${()=>({query:""})}
        @value-changed=${e=>{e.stopPropagation(),this._updateConfig({series:e.detail.value})}}
      ></prometheus-list-editor>
    `}};Fo=e([ue("prometheus-pie-card-editor")],Fo);let No=class extends Re{constructor(){super(...arguments),this._slices=[],this._loaded=!1,this._active=null}static get styles(){return[Fe,qo]}static getStubConfig(){return{type:"custom:prometheus-pie-card",title:"Series by job",series:[{query:"count by (job) (up)",name:"{{job}}"}],pie_type:"donut"}}static getConfigElement(){return document.createElement("prometheus-pie-card-editor")}setConfig(e){super.setConfig({...e,series:Array.isArray(e.series)?e.series:[]})}_hasQuery(){return Boolean(this._config?.series?.some(e=>e?.query?.trim()))}getCardSize(){return 4}async _fetchData(){const e=this._config;try{this._loading=!0;const t=e.series.filter(e=>e?.query?.trim()),s=await Promise.all(t.map(e=>this._client.instantQuery(e.query)));this._slices=function(e,t,s){let i=[];e.forEach((e,s)=>{const r=t[s],n=r.name?.trim(),o=n&&n.includes("{{")?n:void 0,a=wt(e,o);for(const e of a){if(null===e.value||e.value<=0)continue;let t=o?e.label:ht(e.metric);n&&!o&&(t=a.length>1?`${n} ${ht(e.metric)}`:n),i.push({label:t,value:e.value,explicit:1===a.length?r.color:void 0})}});const r=s.sort||"desc";if("desc"===r?i.sort((e,t)=>t.value-e.value):"asc"===r&&i.sort((e,t)=>e.value-t.value),s.limit&&s.limit>0&&i.length>s.limit){const e=i.slice(s.limit);i=i.slice(0,s.limit),i.push({label:s.otherLabel,value:e.reduce((e,t)=>e+t.value,0),explicit:"#8E8E8E"})}const n=i.reduce((e,t)=>e+t.value,0)||1;return i.map((e,t)=>({label:e.label,value:e.value,color:At(t,i.length,s.palette,e.explicit),percent:e.value/n*100}))}(s,t,{palette:e.palette,sort:e.sort,limit:e.limit,otherLabel:Ie("other",this._hass)}),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_fmt(e){return ct(e,this._config.decimals,this._config.unit)}_renderChart(){const e=this._config,t="pie"!==e.pie_type,s=t?48*(1-Math.max(10,Math.min(90,e.donut_width??40))/100):0,i=this._slices.reduce((e,t)=>e+t.value,0);let r=0;const n=null!==this._active?this._slices[this._active]:void 0,o=this._slices.map((i,n)=>{const o=r,a=r+i.percent/100*360;r=a;const l=`slice ${this._active===n?"active":""} ${null!==this._active&&this._active!==n?"dim":""}`,[c,d]=function(e,t,s){return Do(50,50,s,(e+t)/2)}(o,a,t?(48+s)/2:48*.62);return G`
        <path class=${l} d=${function(e,t,s,i){const r=Math.min(t-e,359.999),n=e+r,o=r>180?1:0,[a,l]=Do(50,50,s,e),[c,d]=Do(50,50,s,n);if(i<=0)return`M 50 50 L ${a} ${l} A ${s} ${s} 0 ${o} 1 ${c} ${d} Z`;const[h,u]=Do(50,50,i,n),[p,m]=Do(50,50,i,e);return`M ${a} ${l} A ${s} ${s} 0 ${o} 1 ${c} ${d} L ${h} ${u} A ${i} ${i} 0 ${o} 0 ${p} ${m} Z`}(o,a,48,s)} fill=${i.color}
          @mouseenter=${()=>this._active=n} @mouseleave=${()=>this._active=null}>
          <title>${i.label}: ${this._fmt(i.value)} (${i.percent.toFixed(1)}%)</title>
        </path>
        ${e.show_labels&&i.percent>=5?G`<text class="slice-label" x=${c} y=${d} text-anchor="middle" dominant-baseline="middle">${Math.round(i.percent)}%</text>`:Q}
      `});return U`
      <div class="chart">
        <svg viewBox="0 0 100 100">${o}</svg>
        ${t&&!1!==e.show_total?U`<div class="center">
              <div class="total">${this._fmt(n?n.value:i)}</div>
              <div class="caption">${n?n.label:Ie("total",this._hass)}</div>
            </div>`:Q}
      </div>
    `}_renderLegend(){const e=this._config.legend_values||["value"];return U`<div class="legend">
      ${this._slices.map((t,s)=>U`<div
          class="legend-item ${null!==this._active&&this._active!==s?"dim":""}"
          title=${t.label}
          @mouseenter=${()=>this._active=s}
          @mouseleave=${()=>this._active=null}
        >
          <span class="legend-color" style="background:${t.color}"></span>
          <span class="legend-name">${t.label}</span>
          <span class="legend-value">
            ${e.includes("value")?this._fmt(t.value):Q}
            ${e.includes("percent")?U`${e.includes("value")?" · ":""}${t.percent.toFixed(1)}%`:Q}
          </span>
        </div>`)}
    </div>`}render(){const e=this._config;return this._hasQuery()?this._error?this.renderError():this._loaded?U`
      <ha-card>
        ${e.title?U`<div class="header">${e.title}</div>`:Q}
        ${this._slices.length?U`<div class="body ${"bottom"===e.legend_position?"bottom":""}" style="--pie-size: ${e.size||180}px">
              ${this._renderChart()} ${!1!==e.show_legend?this._renderLegend():Q}
            </div>`:U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`}
      </ha-card>
    `:this.renderLoading():this.renderPlaceholder("no_series")}};e([_e()],No.prototype,"_slices",void 0),e([_e()],No.prototype,"_loaded",void 0),e([_e()],No.prototype,"_active",void 0),No=e([ue("prometheus-pie-card")],No);let Oo=class extends os{_defaults(){return{min:0,display_mode:"gradient",show_unfilled:!0,orientation:"horizontal",bar_height:18,sort:"none",palette:"classic",color_mode:"thresholds",refresh_interval:30}}_options(e,t){return t.map(t=>({value:t,label:Ie(`${e}${t}`,this.hass)}))}_sections(){return[{schema:[Dt,Lt,Ht]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"display_mode",selector:{select:{mode:"dropdown",options:this._options("display_mode_",["gradient","basic","lcd"])}}},{name:"orientation",selector:{select:{mode:"dropdown",options:this._options("",["horizontal","vertical"])}}},Rt,It,{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},{name:"show_unfilled",selector:{boolean:{}}},{name:"bar_height",selector:{number:{min:4,max:60,mode:"box",unit_of_measurement:"px"}}},{name:"sort",selector:{select:{mode:"dropdown",options:this._options("sort_",["none","desc","asc","name"])}}},{name:"limit",selector:{number:{min:1,max:100,mode:"box"}}}]}]},{title:"section_colors",schema:[{name:"",type:"grid",schema:[Vt(this.hass),jt(this.hass)]}]},Ot()]}_renderExtra(){return U`${this._renderThresholds()}`}};Oo=e([ue("prometheus-bar-gauge-card-editor")],Oo);let Io=class extends Re{constructor(){super(...arguments),this._items=[],this._loaded=!1}static get styles(){return[Fe,a`
        ha-card { padding: 16px; gap: 10px; }
        .name { font-size: 14px; font-weight: 500; color: var(--secondary-text-color); }
        .list { display: flex; flex-direction: column; gap: 10px; }
        .row { display: flex; flex-direction: column; gap: 3px; }
        .row-head { display: flex; justify-content: space-between; gap: 8px; font-size: 13px; }
        .label { color: var(--secondary-text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .value { font-weight: 600; white-space: nowrap; }
        .track { position: relative; border-radius: 3px; overflow: hidden; height: var(--bar-h, 18px); }
        .track.unfilled { background: var(--secondary-background-color, rgba(127, 127, 127, 0.15)); }
        .fill { height: 100%; border-radius: 3px; transition: width 0.4s ease; }
        .cols { display: flex; gap: 10px; align-items: flex-end; height: 180px; }
        .col { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; }
        .col .track { width: 100%; max-width: 48px; height: auto; flex: 1; display: flex; align-items: flex-end; }
        .col .fill { width: 100%; transition: height 0.4s ease; }
        .col .label { font-size: 11px; max-width: 100%; }
        .col .value { font-size: 12px; }
      `]}static getStubConfig(){return{type:"custom:prometheus-bar-gauge-card",name:"Disk usage",query:"100 - node_filesystem_avail_bytes / node_filesystem_size_bytes * 100",legend_format:"{{mountpoint}}",unit:"percent",min:0,max:100,thresholds:[{value:0,color:"#73BF69"},{value:70,color:"#FF9830"},{value:90,color:"#F2495C"}]}}static getConfigElement(){return document.createElement("prometheus-bar-gauge-card-editor")}getGridOptions(){return{columns:6,rows:"auto",min_columns:3}}async _fetchData(){const e=this._config;try{this._loading=!0;let t=wt(await this._client.instantQuery(e.query),e.legend_format).filter(e=>null!==e.value).map(t=>({...t,label:ht(t.metric,e.legend_format)}));const s=e.sort||"none";"desc"===s?t.sort((e,t)=>t.value-e.value):"asc"===s?t.sort((e,t)=>e.value-t.value):"name"===s&&t.sort((e,t)=>e.label.localeCompare(t.label,void 0,{numeric:!0})),e.limit&&e.limit>0&&(t=t.slice(0,e.limit)),this._items=t,this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_bar(e,t,s,i){const r=this._config,n=r.min??0,o=e.value??n,a=s>n?Math.max(0,Math.min(100,(o-n)/(s-n)*100)):0,l=At(t,this._items.length,r.palette),c="series"===r.color_mode?[]:r.thresholds||[],d=function(e,t,s,i,r,n){const o=r.length?_t(t,r):n;if("basic"===e||!r.length||i<=s)return{fill:o,color:o};const a=i-s,l=e=>Math.max(0,Math.min(100,(e-s)/a*100)),c=[...r].sort((e,t)=>e.value-t.value),d=l(t)||1;if("lcd"===e){const e=20,t=[];for(let i=0;i<e;i++){const r=_t(s+(i+.5)/e*a,c),n=i/e*100,o=(i+1)/e*100;t.push(`${r} ${n}%`,`${r} ${o-100/e*.12}%`,`transparent ${o-100/e*.12}%`,`transparent ${o}%`)}return{fill:`linear-gradient(90deg, ${t.join(", ")}) 0 0 / ${100/d*100}% 100%`,color:o}}const h=c.map(e=>({at:l(e.value),color:ft(e.color)})).filter(e=>e.at<=d).map(e=>`${e.color} ${e.at/d*100}%`);return h.length<2?{fill:o,color:o}:{fill:`linear-gradient(90deg, ${h.join(", ")}, ${o} 100%)`,color:o}}(r.display_mode||"gradient",o,n,s,c,l),h=lt(e.value,r.unit,r.decimals),u=!1!==r.show_unfilled?"track unfilled":"track",p=i?`height:${a}%`:`width:${a}%`;return U`
      <div class=${i?"col":"row"}>
        ${i?U`<span class="value" style="color:${d.color}">${h.prefix}${h.text}${h.suffix}</span>`:U`<div class="row-head">
              <span class="label" title=${e.label}>${e.label}</span>
              <span class="value" style="color:${d.color}">${h.prefix}${h.text}${h.suffix}</span>
            </div>`}
        <div class=${u}><div class="fill" style="${p};background:${d.fill}"></div></div>
        ${i?U`<span class="label" title=${e.label}>${e.label}</span>`:Q}
      </div>
    `}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const t=e.max??Math.max(100,...this._items.map(e=>e.value??0)),s="vertical"===e.orientation;return U`
      <ha-card>
        ${e.name?U`<div class="name">${e.name}</div>`:Q}
        ${this._items.length?U`<div class=${s?"cols":"list"} style="--bar-h:${e.bar_height||18}px">
              ${this._items.map((e,i)=>this._bar(e,i,t,s))}
            </div>`:U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`}
      </ha-card>
    `}};e([_e()],Io.prototype,"_items",void 0),e([_e()],Io.prototype,"_loaded",void 0),Io=e([ue("prometheus-bar-gauge-card")],Io);let Ro=class extends os{_defaults(){return{sort_by:"value",sort_dir:"desc",color_cells:!1,refresh_interval:30}}_options(e,t){return t.map(t=>({value:t,label:Ie(`${e}${t}`,this.hass)}))}_sections(){return[{schema:[Dt,Lt,{name:"columns",selector:{text:{multiple:!0}}},{name:"hide_columns",selector:{text:{multiple:!0}}}]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"value_column",selector:{text:{}}},Rt,It,{name:"max_rows",selector:{number:{min:1,max:1e3,mode:"box"}}},{name:"sort_by",selector:{select:{mode:"dropdown",options:this._options("sort_by_",["value","label"])}}},{name:"sort_dir",selector:{select:{mode:"dropdown",options:this._options("sort_dir_",["desc","asc"])}}},{name:"color_cells",selector:{boolean:{}}}]}]},Ot()]}_renderExtra(){return U`${this._renderThresholds()}`}};Ro=e([ue("prometheus-table-card-editor")],Ro);let Ho=class extends Re{constructor(){super(...arguments),this._model={columns:[],rows:[]},this._loaded=!1}static get styles(){return[Fe,a`
        ha-card { padding: 12px 0 8px; gap: 6px; }
        .name { padding: 0 16px; font-size: 14px; font-weight: 500; color: var(--secondary-text-color); }
        .wrap { overflow: auto; max-height: var(--table-max-height, 420px); }
        table { width: 100%; border-collapse: collapse; font-size: 13px; }
        th { position: sticky; top: 0; background: var(--card-background-color, #fff); text-align: left;
          font-weight: 500; color: var(--secondary-text-color); padding: 6px 12px; cursor: pointer;
          white-space: nowrap; border-bottom: 1px solid var(--divider-color); user-select: none; }
        th.num, td.num { text-align: right; }
        td { padding: 5px 12px; border-bottom: 1px solid var(--divider-color); white-space: nowrap; }
        tr:last-child td { border-bottom: none; }
        td.num { font-weight: 600; font-variant-numeric: tabular-nums; }
        .arrow { opacity: 0.6; font-size: 10px; margin-left: 4px; }
      `]}static getStubConfig(){return{type:"custom:prometheus-table-card",name:"Targets",query:"up",columns:["job","instance"],thresholds:[{value:0,color:"#F2495C"},{value:1,color:"#73BF69"}],color_cells:!0}}static getConfigElement(){return document.createElement("prometheus-table-card-editor")}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}async _fetchData(){const e=this._config;try{this._loading=!0;const t=await this._client.instantQuery(e.query);this._model=function(e,t){const s=wt(e),i=new Set(t.hide||[]);let r;if(t.columns&&t.columns.length)r=t.columns.filter(e=>!i.has(e));else{const e=new Set;for(const t of s)Object.keys(t.metric).forEach(t=>e.add(t));const t=new Set(s.map(e=>e.metric.__name__));t.size<=1&&e.delete("__name__"),r=[...e].filter(e=>!i.has(e)).sort((e,t)=>"__name__"===e?-1:"__name__"===t?1:e.localeCompare(t))}const n=s.map(e=>({labels:e.metric,value:e.value})),o="asc"===t.sortDir?1:-1;if("label"===t.sortBy&&r.length){const e=r[0];n.sort((t,s)=>-1*o*(t.labels[e]??"").localeCompare(s.labels[e]??"",void 0,{numeric:!0}))}else n.sort((e,t)=>o*((e.value??-1/0)-(t.value??-1/0)));return{columns:r,rows:t.maxRows?n.slice(0,t.maxRows):n}}(t,{columns:e.columns,hide:e.hide_columns,sortBy:e.sort_by,sortDir:e.sort_dir,maxRows:e.max_rows}),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_rows(){const e=[...this._model.rows];if(!this._sort)return e;const{col:t,dir:s}=this._sort;return e.sort((e,i)=>"__value__"===t?s*((e.value??-1/0)-(i.value??-1/0)):s*(e.labels[t]??"").localeCompare(i.labels[t]??"",void 0,{numeric:!0}))}_toggleSort(e){this._sort=this._sort?.col===e?{col:e,dir:1===this._sort.dir?-1:1}:{col:e,dir:"__value__"===e?-1:1}}_th(e,t,s=!1){const i=this._sort?.col===e?1===this._sort.dir?"▲":"▼":"";return U`<th class=${s?"num":""} @click=${()=>this._toggleSort(e)}>
      ${t}${i?U`<span class="arrow">${i}</span>`:Q}
    </th>`}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();const{columns:t}=this._model,s=this._rows();return U`
      <ha-card>
        ${e.name?U`<div class="name">${e.name}</div>`:Q}
        ${s.length?U`<div class="wrap"><table>
              <thead><tr>
                ${t.map(e=>this._th(e,"__name__"===e?"metric":e))}
                ${this._th("__value__",e.value_column||Ie("value",this._hass),!0)}
              </tr></thead>
              <tbody>
                ${s.map(s=>{const i=e.thresholds?.length&&null!==s.value?_t(s.value,e.thresholds):"",r=i?e.color_cells?`background:${gt(i,.25)};color:${i}`:`color:${i}`:"";return U`<tr>
                    ${t.map(e=>U`<td>${s.labels[e]??""}</td>`)}
                    <td class="num" style=${r}>${ct(s.value,e.decimals,e.unit)}</td>
                  </tr>`})}
              </tbody>
            </table></div>`:U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`}
      </ha-card>
    `}};function jo(e){if("+Inf"===e)return 1/0;const t=parseFloat(e);return Number.isFinite(t)?t:NaN}function Vo(e){return e===1/0?"+Inf":String(parseFloat(e.toPrecision(4)))}e([_e()],Ho.prototype,"_model",void 0),e([_e()],Ho.prototype,"_loaded",void 0),e([_e()],Ho.prototype,"_sort",void 0),Ho=e([ue("prometheus-table-card")],Ho);const Uo={oranges:["#fff5eb","#fdd0a2","#fd8d3c","#d94801","#7f2704"],spectral:["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],viridis:["#440154","#3b528b","#21918c","#5ec962","#fde725"],blues:["#f7fbff","#c6dbef","#6baed6","#2171b5","#08306b"],greens:["#f7fcf5","#c7e9c0","#74c476","#238b45","#00441b"],reds:["#fff5f0","#fcbba1","#fb6a4a","#cb181d","#67000d"],purples:["#fcfbfd","#dadaeb","#9e9ac8","#6a51a3","#3f007d"]};function Go(e){const t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,255&t]}function Wo(e,t,s){const i=e.clientWidth||400,r=window.devicePixelRatio||1;e.width=i*r,e.height=s.height*r,e.style.height=`${s.height}px`;const n=e.getContext("2d");if(!n)return;n.scale(r,r),n.clearRect(0,0,i,s.height);const o=i-90,a=s.height-16,l=o/t.times.length,c=a/t.rows.length;t.cells.forEach((e,i)=>{const r=a-(i+1)*c;e.forEach((e,i)=>{null!==e&&(n.fillStyle=function(e,t){const s=Uo[e]||Uo.oranges,i=Math.max(0,Math.min(1,t))*(s.length-1),r=Math.min(s.length-2,Math.floor(i)),n=i-r,o=Go(s[r]),a=Go(s[r+1]),l=o.map((e,t)=>Math.round(e+(a[t]-e)*n));return`rgb(${l[0]}, ${l[1]}, ${l[2]})`}(s.scheme,function(e,t,s,i=!1){if(s<=t)return e>0?1:0;if(i){const i=Math.log10(Math.max(t,1e-9)+1),r=Math.log10(s+1);return Math.max(0,Math.min(1,(Math.log10(Math.max(e,0)+1)-i)/(r-i||1)))}return Math.max(0,Math.min(1,(e-t)/(s-t)))}(e,t.min,t.max,s.log)),n.fillRect(90+i*l,r,Math.ceil(l)+.5,Math.max(1,Math.ceil(c)-1)))})}),n.fillStyle=s.textColor,n.font="10px sans-serif",n.textBaseline="middle",n.textAlign="left";const d=Math.max(1,Math.ceil(12/c));t.rows.forEach((e,t)=>{t%d||n.fillText(e.length>14?`${e.slice(0,13)}…`:e,0,a-(t+.5)*c)}),n.textBaseline="top";const h=Math.min(5,t.times.length);for(let e=0;e<h;e++){const i=h>1?Math.round(e/(h-1)*(t.times.length-1)):0,r=new Date(1e3*t.times[i]).toLocaleTimeString(s.language,{hour:"2-digit",minute:"2-digit"});n.textAlign=0===e?"left":e===h-1?"right":"center",n.fillText(r,90+i*l,a+3)}}let Qo=class extends os{_queryMode(){return"range"}_defaults(){return{time_range:"6h",heatmap_mode:"histogram",color_scheme:"oranges",log_scale:!1,height:200,show_legend_scale:!0,refresh_interval:60}}_options(e,t){return t.map(t=>({value:t,label:Ie(`${e}${t}`,this.hass)}))}_sections(){const e="series"===this._config?.heatmap_mode;return[{schema:[Dt,Lt,{name:"",type:"grid",schema:[{name:"heatmap_mode",selector:{select:{mode:"dropdown",options:this._options("heatmap_mode_",["histogram","series"])}}},...e?[Ht]:[]]}]},{title:"section_display",schema:[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"time_range",selector:{select:{mode:"dropdown",custom_value:!0,options:Ut}}},{name:"height",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}}},{name:"color_scheme",selector:{select:{mode:"dropdown",options:this._options("scheme_",["oranges","spectral","viridis","blues","greens","reds","purples"])}}},{name:"log_scale",selector:{boolean:{}}},Rt,It,{name:"show_legend_scale",selector:{boolean:{}}}]}]},Ot()]}};Qo=e([ue("prometheus-heatmap-card-editor")],Qo);let Ko=class extends Re{constructor(){super(...arguments),this._hover=""}static get styles(){return[Fe,a`
        ha-card { padding: 12px 16px; gap: 6px; }
        .name { font-size: 14px; font-weight: 500; color: var(--secondary-text-color); }
        canvas { width: 100%; display: block; }
        .foot { display: flex; justify-content: space-between; align-items: center; gap: 8px;
          font-size: 11px; color: var(--secondary-text-color); min-height: 16px; }
        .scale { display: flex; align-items: center; gap: 6px; white-space: nowrap; }
        .bar { width: 120px; height: 8px; border-radius: 4px; }
      `]}static getStubConfig(){return{type:"custom:prometheus-heatmap-card",name:"Request duration",query:"sum by (le) (rate(prometheus_http_request_duration_seconds_bucket[5m]))",heatmap_mode:"histogram",time_range:"6h"}}static getConfigElement(){return document.createElement("prometheus-heatmap-card-editor")}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}disconnectedCallback(){super.disconnectedCallback(),this._resize?.disconnect(),this._resize=void 0}async _fetchData(){const e=this._config;try{this._loading=!0;const{start:t,end:s,step:i}=yt(e.time_range||"6h",120),r=await this._client.rangeQuery(e.query,t,s,i);this._model=function(e,t,s){const i=$t(e,s),r=new Set;i.forEach(e=>e.points.forEach(([e])=>r.add(e)));const n=[...r].sort((e,t)=>e-t),o=new Map(n.map((e,t)=>[e,t]));let a,l;if("histogram"===t){const e=new Map;for(const t of i){const s=jo(t.metric.le??"");if(Number.isNaN(s))continue;const i=e.get(s)??new Array(n.length).fill(null);for(const[e,s]of t.points){if(null===s)continue;const t=o.get(e);i[t]=(i[t]??0)+s}e.set(s,i)}const t=[...e.keys()].sort((e,t)=>e-t);a=t.map((e,s)=>0===s?`≤ ${Vo(e)}`:`${Vo(t[s-1])} – ${Vo(e)}`),l=t.map((s,i)=>{const r=e.get(s);if(0===i)return r;const n=e.get(t[i-1]);return r.map((e,t)=>null===e?null:Math.max(0,e-(n[t]??0)))})}else a=i.map(e=>s?e.label:dt(e.metric)),l=i.map(e=>{const t=new Array(n.length).fill(null);for(const[s,i]of e.points)t[o.get(s)]=i;return t});let c=1/0,d=-1/0;for(const e of l)for(const t of e)null!==t&&(t<c&&(c=t),t>d&&(d=t));return Number.isFinite(c)||(c=0,d=0),{times:n,rows:a,cells:l,min:c,max:d}}(r,e.heatmap_mode||"histogram",e.legend_format),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1}}updated(e){super.updated(e),this._canvas&&!this._resize&&"undefined"!=typeof ResizeObserver&&(this._resize=new ResizeObserver(()=>this._draw()),this._resize.observe(this._canvas)),(e.has("_model")||e.has("_config"))&&this._draw()}_draw(){const e=this._model;e&&this._canvas&&e.times.length&&e.rows.length&&Wo(this._canvas,e,{height:this._config.height||200,scheme:this._config.color_scheme||"oranges",log:Boolean(this._config.log_scale),textColor:getComputedStyle(this).getPropertyValue("--secondary-text-color").trim()||"#888",language:this._hass?.locale?.language})}_onMove(e){const t=this._model;if(!t||!this._canvas)return;const s=function(e,t,s,i,r){const n=s-t.left-90,o=i-t.top,a=r-16;if(n<0||o<0||o>a)return null;const l=Math.floor(n/(t.width-90)*e.times.length),c=e.rows.length-1-Math.floor(o/a*e.rows.length);return l<0||l>=e.times.length||c<0||c>=e.rows.length?null:[c,l]}(t,this._canvas.getBoundingClientRect(),e.clientX,e.clientY,this._config.height||200);if(!s)return void(this._hover="");const[i,r]=s,n=t.cells[i][r],o=new Date(1e3*t.times[r]).toLocaleString(this._hass?.locale?.language);this._hover=`${t.rows[i]} · ${o} · ${null===n?"-":ct(n,this._config.decimals,this._config.unit)}`}render(){const e=this._config;if(!this._hasQuery())return this.renderPlaceholder();if(this._error)return this.renderError();if(!this._model)return this.renderLoading();const t=this._model,s=(Uo[e.color_scheme||"oranges"]||Uo.oranges).join(", ");return U`
      <ha-card>
        ${e.name?U`<div class="name">${e.name}</div>`:Q}
        ${t.times.length&&t.rows.length?U`<canvas @mousemove=${this._onMove} @mouseleave=${()=>this._hover=""}></canvas>
              <div class="foot">
                <span>${this._hover}</span>
                ${!1!==e.show_legend_scale?U`<span class="scale">${ct(t.min,e.decimals,e.unit)}
                      <span class="bar" style="background:linear-gradient(90deg, ${s})"></span>
                      ${ct(t.max,e.decimals,e.unit)}</span>`:Q}
              </div>`:U`<div class="placeholder-state">${Ie("no_data",this._hass)}</div>`}
      </ha-card>
    `}};e([_e()],Ko.prototype,"_model",void 0),e([_e()],Ko.prototype,"_hover",void 0),e([ge("canvas")],Ko.prototype,"_canvas",void 0),Ko=e([ue("prometheus-heatmap-card")],Ko);const Yo={critical:0,error:1,warning:2,info:3,none:4},Zo={firing:0,pending:1,inactive:2};let Jo=class extends os{_defaults(){return{states:["firing","pending"],show_annotations:!0,show_labels:!1,refresh_interval:30}}_sections(){const e=["firing","pending","inactive"].map(e=>({value:e,label:Ie(`state_${e}`,this.hass)}));return[{schema:[Dt,{name:"name",selector:{text:{}}},{name:"states",selector:{select:{multiple:!0,mode:"list",options:e}}},{name:"",type:"grid",schema:[{name:"severities",selector:{text:{}}},{name:"name_filter",selector:{text:{}}},{name:"show_annotations",selector:{boolean:{}}},{name:"show_labels",selector:{boolean:{}}},{name:"max_rows",selector:{number:{min:1,max:200,mode:"box"}}}]}]},Ot()]}};Jo=e([ue("prometheus-alerts-card-editor")],Jo);const Xo=new Set(["alertname","severity"]);let ea=class extends Re{constructor(){super(...arguments),this._alerts=[],this._loaded=!1}static get styles(){return[Fe,a`
        ha-card { padding: 12px 16px; gap: 8px; }
        .head { display: flex; justify-content: space-between; align-items: center; }
        .name { font-size: 14px; font-weight: 500; color: var(--secondary-text-color); }
        .count { font-size: 12px; color: var(--secondary-text-color); }
        .list { display: flex; flex-direction: column; gap: 6px; }
        .alert { display: flex; gap: 10px; padding: 8px 10px; border-radius: 8px;
          background: var(--secondary-background-color, rgba(127, 127, 127, 0.08)); border-left: 4px solid var(--sev); }
        .alert.pending { opacity: 0.75; border-left-style: dashed; }
        .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
        .title { display: flex; gap: 8px; align-items: baseline; }
        .alertname { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .badge { font-size: 10px; text-transform: uppercase; padding: 1px 6px; border-radius: 8px; color: #fff; background: var(--sev); white-space: nowrap; }
        .time { margin-left: auto; font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; }
        .summary { font-size: 12px; color: var(--primary-text-color); }
        .labels { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
        .label { font-size: 10px; padding: 1px 6px; border-radius: 6px; background: var(--card-background-color); color: var(--secondary-text-color); }
        .ok { display: flex; align-items: center; gap: 8px; color: var(--success-color, #43a047); font-size: 14px; padding: 8px 0; }
      `]}static getStubConfig(){return{type:"custom:prometheus-alerts-card",name:"Alerts",show_annotations:!0}}static getConfigElement(){return document.createElement("prometheus-alerts-card-editor")}getGridOptions(){return{columns:6,rows:"auto",min_columns:4}}_hasQuery(){return!0}async _fetchData(){try{this._loading=!0,this._alerts=await this._client.getAlerts(),this._error=void 0}catch(e){this._error=this._formatError(e)}finally{this._loading=!1,this._loaded=!0}}_renderAlert(e){const t=this._config,s=e.labels.severity,i=e.annotations?.summary||e.annotations?.description,r=Object.entries(e.labels).filter(([e])=>!Xo.has(e));return U`
      <div class="alert ${e.state}" style="--sev:${function(e){switch((e||"").toLowerCase()){case"critical":case"error":return"#F2495C";case"warning":return"#FF9830";case"info":return"#5794F2";default:return"#8E8E8E"}}(s)}">
        <div class="body">
          <div class="title">
            <span class="alertname" title=${e.labels.alertname}>${e.labels.alertname}</span>
            ${s?U`<span class="badge">${s}</span>`:Q}
            <span class="time" title=${e.activeAt||""}>
              ${"pending"===e.state?`${Ie("state_pending",this._hass)} · `:""}${function(e,t=Date.now()){if(!e)return"";const s=Date.parse(e);if(Number.isNaN(s))return"";let i=Math.max(0,Math.floor((t-s)/1e3));const r=Math.floor(i/86400);i-=86400*r;const n=Math.floor(i/3600);i-=3600*n;const o=Math.floor(i/60);return r?`${r}d ${n}h`:n?`${n}h ${o}m`:`${o}m`}(e.activeAt)}
            </span>
          </div>
          ${!1!==t.show_annotations&&i?U`<div class="summary">${i}</div>`:Q}
          ${t.show_labels&&r.length?U`<div class="labels">${r.map(([e,t])=>U`<span class="label">${e}=${t}</span>`)}</div>`:Q}
        </div>
      </div>
    `}render(){const e=this._config;if(this._error)return this.renderError();if(!this._loaded)return this.renderLoading();let t=function(e,t){const s=new Set(t.states?.length?t.states:["firing","pending"]),i=(t.severities||"").split(",").map(e=>e.trim().toLowerCase()).filter(Boolean);let r;if(t.name_filter?.trim())try{r=new RegExp(t.name_filter.trim(),"i")}catch{const e=t.name_filter.trim().toLowerCase();r={test:t=>t.toLowerCase().includes(e)}}return e.filter(e=>s.has(e.state)).filter(e=>!i.length||i.includes((e.labels.severity||"").toLowerCase())).filter(e=>!r||r.test(e.labels.alertname||"")).sort((e,t)=>(Zo[e.state]??9)-(Zo[t.state]??9)||(Yo[(e.labels.severity||"none").toLowerCase()]??5)-(Yo[(t.labels.severity||"none").toLowerCase()]??5)||(t.activeAt||"").localeCompare(e.activeAt||""))}(this._alerts,e);const s=t.length;return e.max_rows&&(t=t.slice(0,e.max_rows)),U`
      <ha-card>
        <div class="head">
          ${e.name?U`<div class="name">${e.name}</div>`:U`<span></span>`}
          ${s?U`<span class="count">${s}</span>`:Q}
        </div>
        ${t.length?U`<div class="list">${t.map(e=>this._renderAlert(e))}</div>`:U`<div class="ok"><ha-icon icon="mdi:check-circle"></ha-icon>${Ie("no_alerts",this._hass)}</div>`}
      </ha-card>
    `}};function ta(e,t){if(t<=0)return[];let s=[];for(Array.isArray(e)?s=e.map(e=>Number.isFinite(Number(e))&&Number(e)>0?Number(e):null):"string"==typeof e&&e.trim()&&(s=e.split(/[,;\s/]+/).filter(Boolean).map(e=>{const t=parseFloat(e.replace("%",""));return Number.isFinite(t)&&t>0?t:null})),s=s.slice(0,t);s.length<t;)s.push(null);const i=s.filter(e=>null!==e),r=i.reduce((e,t)=>e+t,0),n=s.length-i.length;if(!i.length)return new Array(t).fill(100/t);const o=Math.max(0,100-r),a=n?o>0?o/n:r/i.length:0,l=s.map(e=>null===e?a:e),c=l.reduce((e,t)=>e+t,0);return l.map(e=>e/c*100)}function sa(e){const t=Array.isArray(e.rows)?e.rows:[];return{...e,type:"custom:prometheus-grid-card",rows:t.map(e=>({...e,cards:Array.isArray(e?.cards)?e.cards.filter(Boolean):[]}))}}e([_e()],ea.prototype,"_alerts",void 0),e([_e()],ea.prototype,"_loaded",void 0),ea=e([ue("prometheus-alerts-card")],ea);const ia=a`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .section-title {
    font-weight: 500;
    font-size: 15px;
    margin: 8px 0 -4px;
  }
  .row {
    border: 1px solid var(--divider-color);
    border-radius: var(--ha-card-border-radius, 12px);
    padding: 8px 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .row-head,
  .card-head {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .row-head .title,
  .card-head .title {
    flex: 1;
    font-weight: 500;
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .preview {
    display: flex;
    height: 10px;
    gap: 3px;
    border-radius: 3px;
    overflow: hidden;
  }
  .preview span {
    background: var(--primary-color);
    opacity: 0.55;
    border-radius: 2px;
  }
  .card {
    border-left: 3px solid var(--primary-color);
    padding: 4px 0 4px 8px;
  }
  .card-head .pct {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .helper {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
`,ra="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",na="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",oa="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",aa="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",la="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";let ca;let da,ha=class extends de{constructor(){super(...arguments),this._sel=null,this._ready=!1,this._t=(e,t)=>Ie(e,this.hass,t)}setConfig(e){this._config=sa(e)}connectedCallback(){super.connectedCallback(),Promise.all([Bt(),customElements.get("hui-card-element-editor")&&customElements.get("hui-card-picker")?Promise.resolve():ca??=(async()=>{const e=await(window.loadCardHelpers?.()),t=await(e?.createCardElement({type:"vertical-stack",cards:[]}));await(t?.constructor?.getConfigElement?.())})().catch(()=>{})]).then(()=>this._ready=!0)}_update(e){this._config=e,zt(this,e)}_rows(e){this._config&&this._update({...this._config,rows:e(this._config.rows.map(e=>({...e,cards:[...e.cards]})))})}_move(e,t,s){if(s<0||s>=e.length)return e;const i=[...e],[r]=i.splice(t,1);return i.splice(s,0,r),i}_generalSchema(){return[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"background",selector:{select:{mode:"dropdown",options:["card","transparent","custom"].map(e=>({value:e,label:this._t(`background_${e}`)}))}}},..."custom"===this._config?.background?[{name:"background_color",selector:{text:{type:"color"}}}]:[],{name:"gap",selector:{number:{min:0,max:48,mode:"box",unit_of_measurement:"px"}}},{name:"inner_transparent",selector:{boolean:{}}},{name:"stack_on_mobile",selector:{boolean:{}}}]}]}_generalChanged(e){if(e.stopPropagation(),!this._config)return;const t=e.detail.value,s={...this._config,...t};for(const e of["title","background_color","gap"])""!==t[e]&&void 0!==t[e]||delete s[e];this._update(s)}_rowChanged(e,t){t.stopPropagation();const s=t.detail.value;this._rows(t=>{const i={...t[e],widths:s.widths||void 0,height:s.height||void 0};return i.widths||delete i.widths,i.height||delete i.height,t[e]=i,t})}_cardPicked(e,t){t.stopPropagation();const s=t.detail.config;this._rows(t=>(t[e].cards.push(s),t)),this._sel={row:e,card:this._config.rows[e].cards.length-1}}_cardChanged(e,t,s){s.stopPropagation();const i=s.detail.config;i&&this._rows(s=>(s[e].cards[t]=i,s))}_cardTitle(e,t){const s=String(e.type||"").replace("custom:",""),i=e.name||e.title;return`${this._t("card_n",{n:t+1})} · ${i?`${i} (${s})`:s}`}_iconBtn(e,t,s,i=!1){return U`<ha-icon-button .path=${e} .label=${t} ?disabled=${i} @click=${s}></ha-icon-button>`}_renderCard(e,t,s,i,r){const n=this._sel?.row===e&&this._sel.card===t;return U`
      <div class="card">
        <div class="card-head">
          <span class="title" title=${String(s.type)}>${this._cardTitle(s,t)}</span>
          <span class="pct">${Math.round(i)}%</span>
          ${this._iconBtn(ra,this._t("move_up"),()=>this._rows(s=>(s[e].cards=this._move(s[e].cards,t,t-1),s)),0===t)}
          ${this._iconBtn(na,this._t("move_down"),()=>this._rows(s=>(s[e].cards=this._move(s[e].cards,t,t+1),s)),t===r-1)}
          ${this._iconBtn(aa,this._t("edit_card"),()=>this._sel=n?null:{row:e,card:t})}
          ${this._iconBtn(oa,this._t("remove"),()=>{this._sel=null,this._rows(s=>(s[e].cards.splice(t,1),s))})}
        </div>
        ${n?U`<hui-card-element-editor
              .hass=${this.hass}
              .lovelace=${this.lovelace}
              .value=${s}
              @config-changed=${s=>this._cardChanged(e,t,s)}
            ></hui-card-element-editor>`:Q}
      </div>
    `}_renderRow(e,t){const s=this._config.rows.length,i=ta(e.widths,Math.max(1,e.cards.length)),r=this._sel?.row===t&&-1===this._sel.card;return U`
      <div class="row">
        <div class="row-head">
          <span class="title">${this._t("row_n",{n:t+1})} · ${e.cards.length}</span>
          ${this._iconBtn(ra,this._t("move_up"),()=>this._rows(e=>this._move(e,t,t-1)),0===t)}
          ${this._iconBtn(na,this._t("move_down"),()=>this._rows(e=>this._move(e,t,t+1)),t===s-1)}
          ${this._iconBtn(oa,this._t("remove"),()=>{this._sel=null,this._rows(e=>e.filter((e,s)=>s!==t))})}
        </div>
        ${e.cards.length?U`<div class="preview">${i.map(e=>U`<span style="width:${e}%"></span>`)}</div>`:Q}
        <ha-form
          .hass=${this.hass}
          .data=${{widths:e.widths||"",height:e.height}}
          .schema=${[{name:"",type:"grid",schema:[{name:"widths",selector:{text:{}}},{name:"height",selector:{number:{min:20,max:1200,mode:"box",unit_of_measurement:"px"}}}]}]}
          .computeLabel=${e=>this._t("height"===e.name?"row_height_grid":e.name)}
          .computeHelper=${e=>"widths"===e.name?this._t("helper_widths"):void 0}
          @value-changed=${e=>this._rowChanged(t,e)}
        ></ha-form>
        ${e.cards.map((s,r)=>this._renderCard(t,r,s,i[r],e.cards.length))}
        ${r?U`<hui-card-picker
              .hass=${this.hass}
              .lovelace=${this.lovelace}
              @config-changed=${e=>this._cardPicked(t,e)}
            ></hui-card-picker>`:U`<div class="actions">
              <ha-button @click=${()=>this._sel={row:t,card:-1}}>
                <ha-svg-icon slot="start" .path=${la}></ha-svg-icon>${this._t("add_card")}
              </ha-button>
            </div>`}
      </div>
    `}render(){if(!this.hass||!this._config||!this._ready)return Q;const e=this._config,t={background:"card",gap:8,inner_transparent:!0,stack_on_mobile:!0,...e};return U`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${this._generalSchema()}
          .computeLabel=${e=>this._t(e.name)}
          @value-changed=${this._generalChanged}
        ></ha-form>
        <div class="section-title">${this._t("rows")}</div>
        ${e.rows.map((e,t)=>this._renderRow(e,t))}
        <div class="actions">
          <ha-button @click=${()=>this._rows(e=>[...e,{cards:[]}])}>
            <ha-svg-icon slot="start" .path=${la}></ha-svg-icon>${this._t("add_row")}
          </ha-button>
        </div>
      </div>
    `}};ha.styles=ia,e([fe({attribute:!1})],ha.prototype,"hass",void 0),e([fe({attribute:!1})],ha.prototype,"lovelace",void 0),e([_e()],ha.prototype,"_config",void 0),e([_e()],ha.prototype,"_sel",void 0),e([_e()],ha.prototype,"_ready",void 0),ha=e([ue("prometheus-grid-card-editor")],ha);let ua=class extends de{constructor(){super(...arguments),this.preview=!1,this._elements=[]}static get styles(){return[Fe,a`
        ha-card { padding: var(--grid-pad, 12px); gap: var(--grid-gap, 8px); }
        ha-card.custom-bg { background: var(--grid-bg); }
        .title { font-size: 1.2rem; font-weight: 500; color: var(--primary-text-color); padding: 0 4px 4px; }
        .row { display: grid; gap: var(--grid-gap, 8px); align-items: stretch; }
        .cell { min-width: 0; display: flex; flex-direction: column; }
        .cell > * { flex: 1; }
        .row.fixed .cell { height: var(--row-h); overflow: hidden; }
        .empty { color: var(--secondary-text-color); font-size: 13px; padding: 8px; text-align: center;
          border: 1px dashed var(--divider-color); border-radius: 8px; }
        .inner-transparent .cell > * {
          --ha-card-background: transparent;
          --card-background-color: transparent;
          --ha-card-box-shadow: none;
          --ha-card-border-width: 0;
        }
        @media (max-width: 600px) {
          .row.stack { grid-template-columns: minmax(0, 1fr) !important; }
        }
      `]}static getStubConfig(){return{type:"custom:prometheus-grid-card",rows:[{widths:"25,25,50",cards:[{type:"custom:prometheus-stat-card",name:"Targets",query:"count(up)",transparent:!0},{type:"custom:prometheus-stat-card",name:"Up",query:"sum(up)",transparent:!0},{type:"custom:prometheus-gauge-card",name:"Up %",query:"avg(up) * 100",unit:"percent",transparent:!0}]},{cards:[{type:"custom:prometheus-timeseries-card",time_range:"1h",transparent:!0,series:[{query:"sum(up)",name:"Up"}]}]}]}}static getConfigElement(){return document.createElement("prometheus-grid-card-editor")}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=sa(e),this._build()}getCardSize(){return Math.max(1,3*(this._config?.rows.length||1))}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}async _build(){const e=this._config;if(!e)return;const t=await(da??=window.loadCardHelpers?.()??Promise.resolve(void 0));e===this._config&&(this._elements=e.rows.map(e=>e.cards.map(e=>{const s=t?t.createCardElement(e):Object.assign(document.createElement("div"),{textContent:String(e.type)});return this.hass&&(s.hass=this.hass),s.addEventListener("ll-rebuild",e=>{e.stopPropagation(),this._build()},{once:!0}),s})))}updated(e){if(super.updated(e),e.has("hass")&&this.hass)for(const e of this._elements)for(const t of e)t.hass=this.hass}render(){const e=this._config;if(!e)return Q;const t=e.background||"card",s=[`--grid-gap:${e.gap??8}px`,"custom"===t&&e.background_color?`--grid-bg:${e.background_color}`:"","transparent"===t?"--grid-pad:0px":""].filter(Boolean).join(";"),i=["custom"===t?"custom-bg":"",!1!==e.inner_transparent?"inner-transparent":""].join(" ");return U`
      <ha-card class=${i} style=${s}>
        ${e.title?U`<div class="title">${e.title}</div>`:Q}
        ${e.rows.map((t,s)=>{const i=this._elements[s]||[];if(!t.cards.length)return this.preview||this.hasAttribute("editing")?U`<div class="empty">${Ie("empty_row",this.hass)}</div>`:Q;const r=ta(t.widths,t.cards.length),n=`row ${t.height?"fixed":""} ${!1!==e.stack_on_mobile?"stack":""}`;return U`<div class=${n} style="grid-template-columns:${function(e){return e.map(e=>`minmax(0, ${Math.round(100*e)/100}fr)`).join(" ")}(r)};--row-h:${t.height||0}px">
            ${i.map(e=>U`<div class="cell">${e}</div>`)}
          </div>`})}
      </ha-card>
    `}};e([fe({attribute:!1})],ua.prototype,"hass",void 0),e([fe({type:Boolean,reflect:!0})],ua.prototype,"preview",void 0),e([_e()],ua.prototype,"_config",void 0),e([_e()],ua.prototype,"_elements",void 0),ua=e([ue("prometheus-grid-card")],ua);const pa=[{type:"prometheus-stat-card",key:"stat"},{type:"prometheus-gauge-card",key:"gauge"},{type:"prometheus-timeseries-card",key:"timeseries"},{type:"prometheus-bar-card",key:"bar"},{type:"prometheus-state-timeline-card",key:"timeline"},{type:"prometheus-pie-card",key:"pie"},{type:"prometheus-bar-gauge-card",key:"bargauge"},{type:"prometheus-table-card",key:"table"},{type:"prometheus-heatmap-card",key:"heatmap"},{type:"prometheus-alerts-card",key:"alerts"},{type:"prometheus-grid-card",key:"grid"}],ma=window;ma.customCards=ma.customCards||[];for(const e of pa)ma.customCards.some(t=>t.type===e.type)||ma.customCards.push({type:e.type,name:Ie(`${e.key}_name`),description:Ie(`${e.key}_desc`),preview:!0,documentationURL:"https://github.com/1orgar/ha_prom_graph_cards"});console.info("%c PROMETHEUS-CARDS %c v0.6.0 ","color: white; background: #e65100; font-weight: bold;","color: #e65100; background: white; font-weight: bold;");
