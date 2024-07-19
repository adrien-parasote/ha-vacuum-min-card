function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,$=f.trustedTypes,_=$?$.emptyScript:"",v=f.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??g)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,v?.({ReactiveElement:b}),(f.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,S=E.trustedTypes,w=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,U=`<${P}>`,H=document,T=()=>H.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,j=/>/g,z=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),W=new WeakMap,q=H.createTreeWalker(H,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=R;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===R?"!--"===l[1]?o=k:void 0!==l[1]?o=j:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=z):void 0!==l[3]&&(o=z):o===z?">"===l[0]?(o=r??R,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?z:'"'===l[3]?D:L):o===D||o===L?o=z:o===k||o===j?o=R:(o=z,r=void 0);const d=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===R?s+U:h>=0?(i.push(a),s.slice(0,h)+x+s.slice(h)+C+d):s+C+(-2===h?e:d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class F{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=K(t,e);if(this.el=F.createElement(l,s),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(x)){const e=h[n++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:X}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),q.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=H.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===V)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);q.currentNode=i;let r=q.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=q.nextNode(),n++)}return q.currentNode=H,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),O(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Z&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new G(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new F(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.S(T()),this.S(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Z}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Y(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Y(this,i[s+o],e,o),a===V&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===Z?t=Z:t!==Z&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class st extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??Z)===V)return;const s=this._$AH,i=t===Z&&s!==Z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==Z&&(s===Z||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=E.litHtmlPolyfillSupport;rt?.(F,Q),(E.litHtmlVersions??=[]).push("3.1.4");class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.6");const at={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g},lt=(t=at,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return function(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}({...t,state:!0,attribute:!1})}function ct(t,e){void 0===e&&(e={});var s=e.insertAt;if(t&&'undefined'!=typeof document){var i=document.head||document.getElementsByTagName('head')[0],r=document.createElement('style');r.type='text/css','top'===s&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var dt=o`:host {
    /* todo put here custom variable */
    display: flex;
    flex: 1;
    flex-direction: column;
}

ha-card {
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding: 10px 10px 0;
}
.footer {
    color: var(--primary-text-color);
    text-align: right;
    font-size: xx-small;
}
.error {
    color: red;
}

.card-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid green;
    padding: 0;
}

.card-top img {
    width: 75px;
    height: 75px;
}

.card-top .properties {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    width: -webkit-fill-available;
}

.card-top .properties .vacuum-name {
    font-size: xx-large;
    line-height: normal;
}

.card-top .battery {
    display: flex;
    flex-flow: row;
    align-self: self-start;
    margin-top: 7px;
}

.card-top .battery .icon-title {
    padding: 0 3px;
    font-size: small;
    align-self: center;
}

.card-content {
    margin: 0;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
}
.card-content div {
    border: 1px solid green;
}
`;ct(dt);class pt extends nt{setConfig(t){this._header=''===t.header?Z:t.header,this._entity=t.entity,this._version='0.0.10',this._hass&&(this.hass=this._hass)}set hass(t){if(this._hass=t,this._state=t.states[this._entity],this._state){this._status=this._state.state;const t=this._state.attributes.friendly_name;this._name=t||this._entity}}static get styles(){return dt}render(){return t=this._state?((t,e)=>I`<img class="vacuum ${t.state}" src="${e}" />
        <div class="properties">
            <div class="vacuum-name">${t.name}</div>
            <div class="vacuum-state">${t.attributes.state}</div>
        </div>
        <div class="battery">
            <ha-icon icon="${t.attributes.battery_icon}"></ha-icon>
            <span class="icon-title">${t.attributes.battery_level}%</span>
        </div> `)({attributes:{state:'cleaning',battery_level:90,battery_icon:'mdi:battery-90'},name:'Dobby'},"data:image/svg+xml,%3csvg width='490' height='490' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M490 245c0 135.31-109.69 245-245 245S0 380.31 0 245c0-3.013.0543891-6.013.162239-9H5l5 3v-12l-8.84919-5.899C13.1643 97.0064 117.754 0 245 0c127.089 0 231.578 96.7672 243.804 220.641L480 227v12.5l5-4h4.819c.12 3.152.181 6.319.181 9.5Z' fill='white'/%3e%3cpath d='M411.749 119c-6.307-8.348-13.27-16.258-20.851-23.6492C351.81 57.243 299.364 35.941 244.774 36.0001c-54.59.0591-106.99 21.4746-145.9954 59.667C59.7735 133.86 37.2596 185.797 36.0512 240.374l2.0895.046c.918-41.46 14.2556-81.382 37.8593-114.798V126h116v-2H77.1576c.7253-1.006 1.46-2.006 2.204-3H192v-2H80.8779c5.8988-7.683 12.3626-14.985 19.3631-21.8395 38.615-37.8105 90.491-59.0119 144.535-59.0704 54.044-.0585 105.966 21.0305 144.663 58.7572 7.123 6.9447 13.694 14.3517 19.683 22.1527H299v2h111.638c.744.994 1.479 1.994 2.204 3H299v2h115.266c23.35 33.213 36.583 72.821 37.583 113.972l2.089-.051c-1.066-43.848-15.882-85.962-41.938-120.589V119h-.251Z' fill='%23AAA'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M300 122.5c0 30.1-24.624 54.5-55 54.5s-55-24.4-55-54.5c0-30.0995 24.624-54.5 55-54.5s55 24.4005 55 54.5Zm-4 0c0 27.856-22.799 50.5-51 50.5s-51-22.644-51-50.5S216.799 72 245 72s51 22.644 51 50.5Z' fill='%23666'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.12741 221.523C6.9567 160.97 35.1055 104.75 80.0964 63.8045 125.087 22.8589 183.702.115675 244.536.00044016 305.369-.114809 364.07 22.4061 409.216 63.1811c44.985 40.6299 73.305 96.4879 79.5 156.7719l.011.001c-.002.013-.004.025-.007.038.021.202.042.405.062.607l-.279.028c-.145.286-.312.483-.382.565l-.003.005c-.185.218-.402.426-.611.612-.425.377-.994.817-1.651 1.294-1.325.963-3.171 2.194-5.341 3.588-.17.109-.341.219-.515.33v12.215l.249-.174c1.54-1.073 2.823-1.981 3.736-2.644.39-.283.703-.515.936-.693l-.007-.183.254-.01c.048-.038.083-.067.106-.087l.008-.007-.01.01c-.01.009-.033.032-.063.066l-.015.017 4.616-.182c1.298 32.938-4.063 65.799-15.764 96.616-11.7 30.816-29.499 58.955-52.331 82.731-22.832 23.776-50.226 42.7-80.544 55.64-30.317 12.939-62.934 19.627-95.898 19.664-32.963.037-65.594-6.579-95.941-19.45-30.346-12.872-57.783-31.735-80.6677-55.46-22.8846-23.725-40.7463-51.824-52.5157-82.614-11.76935-30.791-17.20429-63.64-15.979377-96.58l3.830807.142V236c.18555 0 .35898.025.50489.057l.56091.021-.00581.158c.13048.053.26118.112.38589.171.35305.167.78483.397 1.26649.667.87404.489 1.99915 1.158 3.2876 1.949v-12.13l-.4815-.302c-2.17716-1.367-4.02092-2.536-5.35246-3.398-.66426-.431-1.21155-.792-1.61262-1.066-.19905-.136-.37589-.261-.51834-.366l-.01222-.009c-.04061-.03-.11781-.087-.20795-.163l-.6875-.066ZM464.644 236.475c3.564-2.147 7.127-4.312 10.356-6.313v12.528c-1.909 1.31-3.945 2.699-5.987 4.086-4.093 2.779-8.206 5.546-11.376 7.648-1.586 1.052-2.93 1.933-3.915 2.566-.474.304-.857.546-1.14.719l-.19-.011-.007.131c-.063.037-.107.062-.135.079-.03.017-.042.025-.042.025l.024-.009c.01-.004.023-.01.039-.016l.095.241c-3.217 52.86-26.453 102.516-64.989 138.858-38.646 36.444-89.759 56.743-142.878 56.743-53.12 0-104.232-20.3-142.878-56.745-38.6453-36.445-61.9029-86.281-65.0136-139.31l-.2108.013c-.0549-.17-.1194-.3-.1616-.378-.0859-.16-.1788-.29-.2489-.38-.1401-.181-.2992-.346-.4386-.482-.2858-.279-.6601-.598-1.0796-.936-.8488-.684-2.029-1.563-3.413-2.556-2.7761-1.991-6.4661-4.507-10.1873-6.974-1.9862-1.317-3.9866-2.622-5.8676-3.83v-12.157c3.2173 2.001 6.7542 4.19 10.2783 6.365 5.686 3.509 11.3427 6.985 15.5776 9.583 2.1175 1.299 3.8798 2.379 5.1126 3.134l1.0774.66c1.0989 51.017 21.909 99.675 58.1301 135.725 36.902 36.729 86.816 57.401 138.881 57.518 52.066.116 102.072-20.331 139.139-56.895 36.507-36.012 57.554-84.787 58.75-135.992.352-.224.817-.513 1.385-.861 1.325-.813 3.172-1.923 5.371-3.238 1.287-.77 2.693-1.609 4.183-2.498l.097-.058c3.574-2.133 7.624-4.55 11.662-6.983ZM6.22995 219.764l.11131.072c1.3071.847 3.13156 2.004 5.30424 3.368 4.343 2.727 10.0507 6.265 15.7336 9.772 5.6819 3.507 11.3354 6.98 15.5686 9.578 2.1165 1.298 3.8778 2.377 5.11 3.132l1.9049 1.166.9921-.007c.3546 51.024 20.8428 99.843 57.0073 135.837 36.165 35.995 85.08 56.253 136.104 56.367 51.025.115 100.03-19.924 136.356-55.756 36.325-35.832 57.032-84.559 57.615-135.58l.585.006-.071-.066c.19-.204.434-.374.522-.435l.012-.008c.144-.101.323-.22.524-.35.406-.262.96-.607 1.631-1.018 1.346-.826 3.21-1.946 5.409-3.261 1.321-.79 2.764-1.651 4.292-2.563 3.571-2.131 7.608-4.54 11.639-6.969 5.757-3.469 11.476-6.963 15.773-9.723 2.152-1.384 3.921-2.565 5.152-3.459.053-.038.104-.076.154-.113l.102-.075c-6.233-58.782-33.937-113.219-77.829-152.8616C361.689 26.858 304.162 4.78749 244.545 4.90042 184.928 5.01336 127.486 27.3017 83.3945 67.4284 39.856 107.052 12.4116 161.271 6.22995 219.764Zm2.09908 22.928c-1.35577-.837-2.51273-1.53-3.38991-2.026-.55505 30.74 4.79901 61.315 15.78648 90.06 11.534 30.175 29.0385 57.712 51.4654 80.963 22.427 23.25 49.315 41.736 79.055 54.35 29.739 12.614 61.718 19.097 94.022 19.061 32.304-.036 64.269-6.591 93.98-19.271 29.711-12.681 56.558-31.226 78.933-54.527 22.375-23.3 39.818-50.876 51.284-81.077 10.871-28.632 16.159-59.064 15.594-89.655-.734.522-1.584 1.119-2.522 1.773-3.095 2.159-7.176 4.958-11.277 7.742-4.101 2.785-8.227 5.56-11.412 7.673-1.284.851-2.419 1.597-3.34 2.194-3.637 53.361-27.268 103.418-66.216 140.147C350.858 437.287 298.702 458 244.498 458c-54.204 0-106.359-20.714-145.7927-57.903-39.1679-36.938-62.8452-87.356-66.2735-141.057-.1301-.112-.2876-.243-.4742-.394-.7611-.613-1.8697-1.441-3.2341-2.419-2.7209-1.952-6.3663-4.439-10.0659-6.891-3.6986-2.452-7.4329-4.857-10.32857-6.644Z' fill='%23666'/%3e%3crect x='233' y='365' width='24' height='53' rx='12' stroke='%23AAA' stroke-width='2'/%3e%3c/svg%3e"):'',e=this._state?I`<div>home</div>
        <div>STOP / Start</div>
        <div>Clean room with list</div> `:(r=this._entity,I`<p class="error">${r} is unavailable.</p>`),i=this._version,s=I`<div class="footer">v${i}</div>`,I`
    <ha-card>
        <div class="card-top">${t}</div>
        <div class="card-content">${e}</div>
        <div class="card-footer">${s}</div>
    </ha-card>
`;var t,e,s,i,r}static getConfigElement(){return document.createElement('vacuum-card-min-editor')}}t([ht()],pt.prototype,"_header",void 0),t([ht()],pt.prototype,"_entity",void 0),t([ht()],pt.prototype,"_name",void 0),t([ht()],pt.prototype,"_state",void 0),t([ht()],pt.prototype,"_status",void 0),t([ht()],pt.prototype,"_version",void 0);var ut=o`.table {
    display: table;
}
.row {
    display: table-row;
}
.cell {
    display: table-cell;
    padding: 0.5em;
}
`;ct(ut);class ft extends nt{setConfig(t){if(!t.entities)throw new Error('You need to define entities');this._config=t}static get styles(){return ut}render(){return I`
            <form class="table">
                <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="entity">Entity:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="entity" value="${this._config.entity}"></input>
                </div>
            </form>
        `}handleChangedEvent(t){const e=t.target,s=Object.assign({},this._config);'header'==e.id?s.header=e.value:'entity'==e.id&&(s.entity=e.value);const i=new CustomEvent('config-changed',{detail:{config:s},bubbles:!0,composed:!0});this.dispatchEvent(i)}}t([ht()],ft.prototype,"_config",void 0),customElements.define('vacuum-card-min',pt),customElements.define('vacuum-card-min-editor',ft),window.customCards=window.customCards||[],window.customCards.push({type:'vacuum-card-min',name:'Vacuum card minimal',description:'Minimal card to monitor vacuum cleaner for Home Assistant Lovelace UI'});
