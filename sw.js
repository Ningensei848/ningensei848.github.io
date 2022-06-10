(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"432cbcf339e909f131f4417845f57195","url":"2022/03/03.html"},{"revision":"a7856656b11387f56cc20d141f362135","url":"2022/03/08.html"},{"revision":"dbf7feda28ffcdfc6a1bd98a93d8b4c6","url":"2022/03/12.html"},{"revision":"c7132437f12de61868178ad021dceff1","url":"2022/03/13.html"},{"revision":"a6847ab4d0cc582573d464525755ca80","url":"2022/03/23.html"},{"revision":"6aed8297cff3cade7282e2d7009f6d74","url":"2022/03/28.html"},{"revision":"2f28eb3e60b82c731fb4bd1355f0756f","url":"2022/03/30.html"},{"revision":"1cfc177b5df9e0ca29b95294123ea33b","url":"2022/04/01.html"},{"revision":"155b3f28b4cf5cc67c57fcae5366f8a2","url":"2022/04/06.html"},{"revision":"793cda246a8346bf65390fc041ceb2bd","url":"2022/05/11.html"},{"revision":"d09e4204e1094d87630a4a869bdad7ef","url":"2022/05/15.html"},{"revision":"3db45f0f54dc1baf712c4aa8a957f8e7","url":"2022/06/08.html"},{"revision":"2ce9972d3373bb29e30a44581daaa847","url":"2022/06/09.html"},{"revision":"ecf6401a8aac531c52c036553088a2b8","url":"404.html"},{"revision":"a79a37b915aa97446fb6c766f567ee8e","url":"archive.html"},{"revision":"6d7b886acbcbea9735eb8f292156c341","url":"assets/css/styles.a1d0f458.css"},{"revision":"befc6b50d19597533a44e04e21c181ac","url":"assets/js/01a85c17.d1596cb1.js"},{"revision":"dae16377ce03c9ee8d81674f2cf70762","url":"assets/js/01bdddbf.a5c63b1b.js"},{"revision":"a2158273c29a0e05b4fb69bbbe2f44fc","url":"assets/js/09ddd5d6.82c8c0d1.js"},{"revision":"2d33f3df118b1231a8853b43b7c93f9c","url":"assets/js/0c071de2.689f3e6e.js"},{"revision":"3acea763220c54d0b0eab9dd89a97ae2","url":"assets/js/112dc7e2.c428df70.js"},{"revision":"ba5331210c90fb0b155a2b9e381b8f75","url":"assets/js/16bfa084.89ab5792.js"},{"revision":"fdb2aac1d2561f7febce072abc0d8396","url":"assets/js/1963432a.3d81f793.js"},{"revision":"1d21cd430ea3935fbd100ca8822df264","url":"assets/js/1deb323f.1499401e.js"},{"revision":"56be56448eb2d1c5c22bec7e8e513231","url":"assets/js/2039.83087380.js"},{"revision":"0f52da8a7d187fa797f259634d5f0831","url":"assets/js/230.ebd3f54e.js"},{"revision":"dcb8740584db8830a07fcdd0b2ab7a58","url":"assets/js/2d019394.d37bed28.js"},{"revision":"99c0b4d2842ed6fb675bf99acbe84a9c","url":"assets/js/2dcb49ef.5cbeebdd.js"},{"revision":"2d0434527e48ecf5e1e3c7a84ec587b6","url":"assets/js/2e801cce.eabef834.js"},{"revision":"d5d54d2e7b4aff9bdd1a16fb1a48bc9e","url":"assets/js/38fbe308.f97fc644.js"},{"revision":"9def52830175cac8ed9851b344ceaee1","url":"assets/js/3ddae62b.c7c2547f.js"},{"revision":"dd6f8789c64cbcedf7b986b33d302c18","url":"assets/js/4972.3077a5ff.js"},{"revision":"ddba9b33485544a130b36d14dd5c90d7","url":"assets/js/4b98c580.ac3ca5c8.js"},{"revision":"6cfc47617d12b0bbb4a6c8585401f2e1","url":"assets/js/5131.545f3a50.js"},{"revision":"b05b86a4a96aa7ba1059ceb420be5d9b","url":"assets/js/5283.7cb9f47b.js"},{"revision":"4733e12771ee500c8c87e510fc172d76","url":"assets/js/595c6a17.ee9933ff.js"},{"revision":"aff12bae0f80401ed157509fd6d367a3","url":"assets/js/59883241.760436cb.js"},{"revision":"9986640110c4f4fab373914f94f2aaca","url":"assets/js/5d435196.f5a2908b.js"},{"revision":"afa9f81902c589f6f5461bc81dbf128a","url":"assets/js/643f0560.6b0ed4ba.js"},{"revision":"90540b4af772b7f6a6317608de8eb133","url":"assets/js/6875c492.22659b69.js"},{"revision":"cf5dac7f99ea9787192b66eb193f789d","url":"assets/js/6def194c.58e268d8.js"},{"revision":"f442c5423b265e71634fe60719218855","url":"assets/js/718e3478.13dda9ed.js"},{"revision":"bdff963735e66b27db6cf3287125835c","url":"assets/js/814f3328.57fe828c.js"},{"revision":"dc95fe775395e0bd7eaf11274c1bcef3","url":"assets/js/81939e20.08210b27.js"},{"revision":"dc3106852c14da1476f64adaea8749d4","url":"assets/js/951c5ff3.ba75b32e.js"},{"revision":"d122a3f597cf29a856f21c7ab0f0d975","url":"assets/js/97f6a7f8.93032a8e.js"},{"revision":"e32ab9ec4b3785206bf8e7c77a8c2014","url":"assets/js/98f2f6cf.5c4c7740.js"},{"revision":"66475c283f11ffe2ec9c7281af86d6d2","url":"assets/js/9e4087bc.c9968265.js"},{"revision":"90259a542ff2a1ddb355b93d7c23e4ee","url":"assets/js/a46e7db2.7e152232.js"},{"revision":"65e6300d6b948055ce7754d454576e2d","url":"assets/js/a5557bb9.abec5c29.js"},{"revision":"32d6288709ebf5cfb614042cd42beb43","url":"assets/js/a60c6a73.16846ef9.js"},{"revision":"7125f0809fca624cdb6d159ca105409d","url":"assets/js/a6aa9e1f.c8f4a2e2.js"},{"revision":"94d97e2d50ee34e3d7ddf3964497fdc0","url":"assets/js/b656bc34.6a4ae72f.js"},{"revision":"c932a540ef22474d79c65c2f78f50866","url":"assets/js/b7f41adc.1371142b.js"},{"revision":"9ccce190781ec4a0b99d07c5f95d3e6d","url":"assets/js/b83475be.3252b52b.js"},{"revision":"ba25221427b87cf5c1b22b8fdfbde256","url":"assets/js/bb3c8e60.7bf63980.js"},{"revision":"4eae7378d49750ebde4db1d6c0821ab5","url":"assets/js/c173763c.41ae6a3a.js"},{"revision":"5fb15ac3f495872c8772c75ddcde818a","url":"assets/js/c2e3ac09.f9a333af.js"},{"revision":"e5f832835faa3769453523bdc78a8933","url":"assets/js/c573638f.2c0c7766.js"},{"revision":"f5aabbad5bfe09ee07ffadd68cfee4a4","url":"assets/js/c7015929.85dd459c.js"},{"revision":"2fd2819f62ea79413a1c94b22c159c23","url":"assets/js/cbb4dc8f.0e6d88b8.js"},{"revision":"0da7f17a95917ff36e5de764d078305d","url":"assets/js/ccc49370.76f7dc82.js"},{"revision":"ab30770cd078f892d6c7b926b870401f","url":"assets/js/ccc96e7c.8c83edf3.js"},{"revision":"28cd17350cd00139bbf1bb17608aba7b","url":"assets/js/cda01147.85ee7c76.js"},{"revision":"3d92c9f21f41c4ab55c7223c89572741","url":"assets/js/d9f8f7d4.dd699c4a.js"},{"revision":"b3c87322922119b6ca020d2a1ed98c56","url":"assets/js/daf51724.e836c480.js"},{"revision":"045c056d7569a50aefded7eee1bd64e1","url":"assets/js/ddfba5f3.8480dcdf.js"},{"revision":"c2f4bb79cdc4625182f99d372f4b5f68","url":"assets/js/df0696ba.70162dc6.js"},{"revision":"8ee3294bc8504b4f58422307a9ff5d1f","url":"assets/js/dfd66d76.70bfcb72.js"},{"revision":"5c6a543253878b224af9ece9f91a8c8b","url":"assets/js/e53cb30c.4116ce03.js"},{"revision":"8512fdd93a7946e5f38b74897701eff0","url":"assets/js/e5e06d67.f49c47d7.js"},{"revision":"a7a7a468c4276e2ec553cad4091ee468","url":"assets/js/e64de837.9081520d.js"},{"revision":"1b9dd0d0377cfb7e8ffa59ea214559f8","url":"assets/js/e6e846ba.2bbcf2d9.js"},{"revision":"a840bc081563b836021f7a255455030f","url":"assets/js/eee1d8e6.5f213a4d.js"},{"revision":"d80fcccf95e3549b6689f99dbae36a93","url":"assets/js/f281c90e.c774cdbe.js"},{"revision":"6af4bfedd43f3248e01b76f7cebbc5b7","url":"assets/js/f46cc6da.5076c316.js"},{"revision":"203977b9a964a654725e4fd5d264d358","url":"assets/js/f580a9d0.a5fb62bd.js"},{"revision":"541b6ada625dd3898ede17706e20ebb6","url":"assets/js/f695cd34.aa4ecd5b.js"},{"revision":"6a02bc62a5691bfe41c888552895c1f4","url":"assets/js/f6af7b19.b38ea116.js"},{"revision":"98e13d85f93637ce9a57d12701b95189","url":"assets/js/f6d114ed.7a41886b.js"},{"revision":"72f28cdc498346f8b4537c67fecc36e1","url":"assets/js/f7c95061.968a3b76.js"},{"revision":"76e11c683f638999e08e3954a12b14f6","url":"assets/js/f9d669fc.027e3ad4.js"},{"revision":"f7d2954a6fae3cd9d33ee569cb01a0da","url":"assets/js/fdd1792a.53810201.js"},{"revision":"ddc10373cdaf6c3c3d956d2231919868","url":"assets/js/fe4fd697.7d963360.js"},{"revision":"44a5652950753519fc2631cf636ec647","url":"assets/js/main.ae5ee54c.js"},{"revision":"d80fc61c12df2bbf8aa03782662fd9ff","url":"assets/js/runtime~main.e7151728.js"},{"revision":"8196a9f09e6bf6794e6a00cdbdd7b38b","url":"feed.json"},{"revision":"b4f86bad11af9f2b89f89eabb209d622","url":"index.html"},{"revision":"c59466e455bca3ccdbc92c21ce619301","url":"page/2.html"},{"revision":"aad3a79b4dc3173feae0e8f6ab7a6020","url":"tags.html"},{"revision":"4f42ce4ad29e2237f7a139766bc9f6cf","url":"tags/codespaces.html"},{"revision":"c7029e0440ff82d53f1eb8517da02f57","url":"tags/git-hub.html"},{"revision":"cef90e41d1964d088daede5b573bfc6c","url":"tags/lod.html"},{"revision":"a5926b2b751953701791fa3f6ff65d29","url":"tags/ml-4-keiba.html"},{"revision":"2d3583508cc4cbb8fbb5c1eef638c871","url":"tags/python.html"},{"revision":"e7ee9a6c68260c6ec1bb522894f11716","url":"tags/twitter.html"},{"revision":"014017de10695f7fbaaa59b141072dcb","url":"tags/オープンデータ.html"},{"revision":"b98ae6e28ed7bfc77d3b39d5ec745a2f","url":"tags/オープンレター.html"},{"revision":"8a6801a3ea999d5835bd823341c8f4a3","url":"tags/キャンセルカルチャー.html"},{"revision":"6ed0994456df671d8a70788dc8053225","url":"tags/スクレイピング.html"},{"revision":"c82b3772ae92b83eecdc1024d03f6b44","url":"tags/奮闘記.html"},{"revision":"5af7e29c25e82a8410c92dedfb7bd958","url":"tags/日記.html"},{"revision":"992687359ca72abcd0ff28aa6d706605","url":"tags/競馬.html"},{"revision":"6fd37971c28f8c423aec26f701766bda","url":"assets/images/change_codespace_machine_type-d87c3d249991b6167607a44f682d285f.png"},{"revision":"d6b3f7fdac9474c2e1d39c7212c996de","url":"assets/images/codespaces_portforwarding-e59be5d66f39a032185bfe285c8a757f.png"},{"revision":"364effb771bdda7a37ead2d1131d2619","url":"img/android-chrome-192x192.png"},{"revision":"ca40b49ca48522c86be6c4a209d71e72","url":"img/android-chrome-384x384.png"},{"revision":"659d313a468e99370ba67adfd47ed505","url":"img/apple-touch-icon.png"},{"revision":"17cefa300dd10a3cb948b8a32cffa2c6","url":"img/favicon-16x16.png"},{"revision":"671494e968feee2cc41c27bac5c4d4a6","url":"img/favicon-32x32.png"},{"revision":"44866d8b0d32344893ac21694f38a64d","url":"img/favicon.ico"},{"revision":"2e0473eb7ff9f347671fe66691c24460","url":"img/logo_dark.svg"},{"revision":"2e0473eb7ff9f347671fe66691c24460","url":"img/logo.svg"},{"revision":"f324e652c04f542fdc34d3b28cf60128","url":"img/mstile-150x150.png"},{"revision":"35574810a4fdc4c1bab7d6efd4a05434","url":"img/nono4rsibus.png"},{"revision":"d043cefe40c1ce4125c4fc8393b98350","url":"img/nono4rsibus.svg"},{"revision":"af625f0972be5eb178e6b35ae2ee144d","url":"img/safari-pinned-tab.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();