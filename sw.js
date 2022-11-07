(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"f748d881fad0942d73ad6e3efdeb63e0","url":"2022/03/03.html"},{"revision":"f5aa9a867886ed26c4d850aa8f46b704","url":"2022/03/08.html"},{"revision":"1c771001a31520adca1961a51f18a599","url":"2022/03/12.html"},{"revision":"f08b20fd9618726232c683390188bc55","url":"2022/03/13.html"},{"revision":"588a0c9287a1c50b60727579cef02c42","url":"2022/03/23.html"},{"revision":"f58ccd493b5da6eb0f39c62aecf1b9e3","url":"2022/03/28.html"},{"revision":"da7766a7a17b567d873718667d329e7c","url":"2022/03/30.html"},{"revision":"b34d99f191709a48074ed9190cc81027","url":"2022/04/01.html"},{"revision":"0cfe29488c1468868037c5d095ef114a","url":"2022/04/06.html"},{"revision":"38870f0355231d2a703f0b07fd19235b","url":"2022/05/11.html"},{"revision":"d3fdc5604cd4ee919eaf3a6dd6235093","url":"2022/05/15.html"},{"revision":"695efcd757778e46854984fceb7cb8e1","url":"2022/06/08.html"},{"revision":"4536b42a9eab1756a7c54d570d24c43d","url":"2022/06/09.html"},{"revision":"7ffd97bda43b2140f9f62bfa43fce521","url":"2022/06/17.html"},{"revision":"3db5118d9c739c55eac4a50920e685f8","url":"2022/11/07.html"},{"revision":"2a6609897bce1854e60e8ce9f83ee70f","url":"404.html"},{"revision":"812114e500b6a8f54c1c7dc7e43faafa","url":"archive.html"},{"revision":"169fcb01f5e451870335ced058b5f82e","url":"assets/css/styles.7be6c069.css"},{"revision":"3e863f43f0cdcf85b39c6103d283fa9b","url":"assets/js/01a85c17.ca57116e.js"},{"revision":"5301f0c3def03f19b17a600b3718ed4c","url":"assets/js/01bdddbf.8691cf52.js"},{"revision":"4fa1fca6098af3a30b078c69d7d2bf3f","url":"assets/js/09ddd5d6.4fc6c470.js"},{"revision":"85babaf50b736ad0ed296c7daf33bac5","url":"assets/js/0c071de2.7c47b9bb.js"},{"revision":"590f337d1abb972094d64edb7635313c","url":"assets/js/112dc7e2.8bc0b63e.js"},{"revision":"285536a540c15fce92453a21c0fa9d22","url":"assets/js/16bfa084.48c9a36a.js"},{"revision":"748277e134bf59a768830ee0a145e2d8","url":"assets/js/1963432a.730c01d1.js"},{"revision":"5d45dee7faa2e2b50f99b00d558aaf62","url":"assets/js/1deb323f.3959c823.js"},{"revision":"2e45d135206b626c7fb11a32de960501","url":"assets/js/209b4453.642eb1c3.js"},{"revision":"e78e1063b1900379a571c6ddab194c51","url":"assets/js/230.ffe341bb.js"},{"revision":"bf79e6b09d14dd988c845fdf3350ba2a","url":"assets/js/2d019394.a86311b4.js"},{"revision":"3a2ca30e3c248851ddce68980fcaa803","url":"assets/js/2dcb49ef.79b24090.js"},{"revision":"153fe22872c4adb7342d0e5ef49fe1ca","url":"assets/js/2e801cce.096ea445.js"},{"revision":"af9e9edf314ce00575c8273fa23d142d","url":"assets/js/3844.0181b934.js"},{"revision":"210af4e371abd150af1e6a06ac315b9c","url":"assets/js/38fbe308.7517ce77.js"},{"revision":"03e75ca4191b43ee5f06f576ab1291e7","url":"assets/js/3ddae62b.f8d60ada.js"},{"revision":"e97d49b21c4ef990db1ecb9f53a60471","url":"assets/js/46211bb2.b983f6a3.js"},{"revision":"1d7bf5e29737feed07fc37346bbec026","url":"assets/js/4972.4d6e747f.js"},{"revision":"b46019227aa44edb6376423f0d42bbc0","url":"assets/js/4b98c580.6b58e66b.js"},{"revision":"1f04d9ec58e14388463679f6ae1116f0","url":"assets/js/5131.b5bdf242.js"},{"revision":"9ddd4fe1e4cd7320b676e3e3b262b1b5","url":"assets/js/5283.c498c27a.js"},{"revision":"eb601b29358d57065093fb5acf7b6d36","url":"assets/js/595c6a17.109d8df8.js"},{"revision":"20396219ae8c34f5108ac9fc2dcd9a8e","url":"assets/js/59883241.bf8bd3ac.js"},{"revision":"8fd01a6a8e6fa8fac322c201c3b34e4d","url":"assets/js/5d435196.f7c95b18.js"},{"revision":"b815664c9d9155bde19f39c68723a8b9","url":"assets/js/5eecba21.8167a6d3.js"},{"revision":"b2213a7fe084e8c2bb924205e6a3d7ba","url":"assets/js/6007e35c.2670fdb3.js"},{"revision":"490370198ef3b31277cbbf3f2c7267e9","url":"assets/js/643f0560.6f815208.js"},{"revision":"76a97b916d93e9d36308886e07e33fc4","url":"assets/js/655ee501.de07a539.js"},{"revision":"15c87c53d14e740dc90de68aa90f5f50","url":"assets/js/6875c492.a289236d.js"},{"revision":"6676322a232405564eca26cfb23f2587","url":"assets/js/6def194c.4b887e2c.js"},{"revision":"80e75f4e26c0db178b7fa640aa855af1","url":"assets/js/718e3478.91fd12b2.js"},{"revision":"f40525c517f6d1b29a3df7905119f745","url":"assets/js/728c30e5.c84fe90f.js"},{"revision":"04da68abf4d7490796f3ea5e26969ae1","url":"assets/js/814f3328.a0750fc0.js"},{"revision":"6d397079ae472058804fcae358ed97f4","url":"assets/js/81939e20.75e8015a.js"},{"revision":"33a3a88fb0e17d357b3e9db56893f139","url":"assets/js/8499612a.75bf88e9.js"},{"revision":"aec9f656ef6cb6e30175e7da391513e7","url":"assets/js/951c5ff3.b8c1d1ab.js"},{"revision":"d64ba012278023210e4bd7578ef4d7ef","url":"assets/js/97f6a7f8.bc9f54a6.js"},{"revision":"39f8a347b80b5051d738fa4d7c964ce0","url":"assets/js/98f2f6cf.37f2e191.js"},{"revision":"38ea05f92818a94402f41a7f2365ef25","url":"assets/js/9e4087bc.2715b0cd.js"},{"revision":"ff416115f2054b372e56cf57ebe8cf93","url":"assets/js/a46e7db2.511bd76f.js"},{"revision":"8c87b13847992c55348381bfb1765832","url":"assets/js/a5557bb9.39887620.js"},{"revision":"edfc3d22e5cead876318bb168cf2129f","url":"assets/js/a60c6a73.70730c2f.js"},{"revision":"93b8398e1f70a71c7c3ebee71dbf41b1","url":"assets/js/a6aa9e1f.f5881ed7.js"},{"revision":"a2c64cf0a76fb81840863744feb59f09","url":"assets/js/b656bc34.e27fcdd7.js"},{"revision":"7c89a08e797b4b6fbab67eee4a73a785","url":"assets/js/b7f41adc.511a6737.js"},{"revision":"dba071e709e3f524f0f0e6031e1c72cc","url":"assets/js/b800954c.4ed1f0a9.js"},{"revision":"063e80d8ab1cf06589f42c4f7239dd9e","url":"assets/js/b83475be.f334867b.js"},{"revision":"e432c93ec9b47c6dec5f226631ed3d9a","url":"assets/js/bb3c8e60.df2c6404.js"},{"revision":"2db06a6a59fe0f32dad726532e2d5789","url":"assets/js/c173763c.ba30c570.js"},{"revision":"f3a75ec06631a27db1228c6036b16ba8","url":"assets/js/c2e3ac09.12f18869.js"},{"revision":"5142d61915f89a51195b3da9c19c50c2","url":"assets/js/c573638f.a698a62f.js"},{"revision":"39530f2ae04c19ad185063f67fd67d8d","url":"assets/js/c5f62d98.2a3c54d5.js"},{"revision":"0c158af19fb842b19f76a7471ed5775e","url":"assets/js/c7015929.66eef6e7.js"},{"revision":"37713e580a2ee79ec91bd2a782680d40","url":"assets/js/cbb4dc8f.3cf26f0b.js"},{"revision":"258f1e505436287e40c8d5fe9f83722f","url":"assets/js/ccc49370.df3afdf8.js"},{"revision":"bc08786eb4e9c642b51545ea369fcfcf","url":"assets/js/ccc96e7c.56fc365c.js"},{"revision":"25dd8ade085a24b0cfc64ca524fb9dac","url":"assets/js/cda01147.c929b24a.js"},{"revision":"d312f574c33fdbb2fff2b9dea6e24c65","url":"assets/js/d9f8f7d4.d68ccb3d.js"},{"revision":"e8ece4fe84af448a6ae2015d8a2c7e94","url":"assets/js/daf51724.8371f565.js"},{"revision":"91dec696bdb05c8aebbfe64ca6451573","url":"assets/js/ddfba5f3.7ee0ef43.js"},{"revision":"9c79155db3f31b8b743521266c61d0ee","url":"assets/js/df0696ba.960f66c1.js"},{"revision":"01d29818800af1897caa81242d72e16b","url":"assets/js/dfd66d76.4d85afcf.js"},{"revision":"d744ebe446279b2ab83514a4e99b76b7","url":"assets/js/e53cb30c.c261438a.js"},{"revision":"21f60cf45b1cc440e73b6ae71b5709d3","url":"assets/js/e5e06d67.d9619b80.js"},{"revision":"2cdadf667e6f6336dd25e80f6076f1a1","url":"assets/js/e64de837.2b0b1bdd.js"},{"revision":"1f560134e06b97617c7aeb060f86572f","url":"assets/js/e6e846ba.52661f4e.js"},{"revision":"ec4b7472c37961c602f96690117947cc","url":"assets/js/eee1d8e6.4a006157.js"},{"revision":"92f9232f3f9b570b06d4e25006605c8b","url":"assets/js/f1b3767c.99f299df.js"},{"revision":"b877f5aa9ea4ccbe123714404290a63a","url":"assets/js/f281c90e.f7170261.js"},{"revision":"03ee2c347e3e7e0f82f11617bc3a8ba3","url":"assets/js/f46cc6da.4857237d.js"},{"revision":"5b6c8a1ec20ff8fcf450dd3119f3c7c8","url":"assets/js/f580a9d0.1394c2d0.js"},{"revision":"f8e40325a7ef3cc7c5f175c24660c3d9","url":"assets/js/f695cd34.5a6b5ef6.js"},{"revision":"e605be04c3478e85654868b35329e35f","url":"assets/js/f6af7b19.02f58a82.js"},{"revision":"d1674e1c4bf9e3bdf7d741704874485f","url":"assets/js/f6d114ed.ce2dc92a.js"},{"revision":"741819abcea7e11c4a43c4fb6a727d15","url":"assets/js/f7c95061.b23037b2.js"},{"revision":"f21f9442c2e6b0413815fc81949c924f","url":"assets/js/f9d669fc.1fe39d75.js"},{"revision":"c3ce1338d12793894a6d4096757723e9","url":"assets/js/fdd1792a.3ef3d323.js"},{"revision":"a43dec6a839dfa8108b3aaeeea87ea4a","url":"assets/js/fe4fd697.22e57a97.js"},{"revision":"92fc673bf524c47eea1bfb6f27e11950","url":"assets/js/main.76dd1bb9.js"},{"revision":"a326ebab3607c6ccf7383255198bd643","url":"assets/js/runtime~main.592e5f2f.js"},{"revision":"4a811cec12e33f5c6499f14883caf830","url":"feed.json"},{"revision":"9a77ae13f401399b40ab88114492ad3f","url":"index.html"},{"revision":"8ae723feebf538328dc3b322b5547406","url":"page/2.html"},{"revision":"1addc1e9108c4e9f4e0d57320b77a304","url":"tags.html"},{"revision":"ad06b4fe72c9ae1e5b48b7c478f60d43","url":"tags/blog.html"},{"revision":"daa74462dc38d0ea543be30ee6dfc12e","url":"tags/codespaces.html"},{"revision":"d1047813805569664b198b2acb000cc7","url":"tags/docusaurus.html"},{"revision":"354eeac4594613435454c0441a9da457","url":"tags/git-hub.html"},{"revision":"04ce542f621cf1c74905e1803be1830c","url":"tags/hcomp.html"},{"revision":"ab64f2246a3215835f0c47d295845fed","url":"tags/lod.html"},{"revision":"1366dc944248b25b749c39deabb58071","url":"tags/ml-4-keiba.html"},{"revision":"a4749c1e6509e34db80d246eebbb2e23","url":"tags/python.html"},{"revision":"90ab18c023bb62923dd81ec9d6904c2b","url":"tags/twitter.html"},{"revision":"a1ab9e10ed28356ce124c9310ba99627","url":"tags/オープンデータ.html"},{"revision":"ce9169f86f76fe826f73df36aa246f8f","url":"tags/オープンレター.html"},{"revision":"fe88489db7b5708bfaca4d00b321f67f","url":"tags/キャンセルカルチャー.html"},{"revision":"8908db4fca0198e13562bed28ef7e16c","url":"tags/スクレイピング.html"},{"revision":"9d9b904f195710bcadc4b4002ba5301e","url":"tags/奮闘記.html"},{"revision":"10951e870d0ed363964f69391965d3c4","url":"tags/日記.html"},{"revision":"f2eab9e57f9fb26ca1357ad6fc6a08dc","url":"tags/競馬.html"},{"revision":"6fd37971c28f8c423aec26f701766bda","url":"assets/images/change_codespace_machine_type-d87c3d249991b6167607a44f682d285f.png"},{"revision":"d6b3f7fdac9474c2e1d39c7212c996de","url":"assets/images/codespaces_portforwarding-e59be5d66f39a032185bfe285c8a757f.png"},{"revision":"364effb771bdda7a37ead2d1131d2619","url":"img/android-chrome-192x192.png"},{"revision":"ca40b49ca48522c86be6c4a209d71e72","url":"img/android-chrome-384x384.png"},{"revision":"659d313a468e99370ba67adfd47ed505","url":"img/apple-touch-icon.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"17cefa300dd10a3cb948b8a32cffa2c6","url":"img/favicon-16x16.png"},{"revision":"671494e968feee2cc41c27bac5c4d4a6","url":"img/favicon-32x32.png"},{"revision":"44866d8b0d32344893ac21694f38a64d","url":"img/favicon.ico"},{"revision":"2e0473eb7ff9f347671fe66691c24460","url":"img/logo_dark.svg"},{"revision":"2e0473eb7ff9f347671fe66691c24460","url":"img/logo.svg"},{"revision":"f324e652c04f542fdc34d3b28cf60128","url":"img/mstile-150x150.png"},{"revision":"35574810a4fdc4c1bab7d6efd4a05434","url":"img/nono4rsibus.png"},{"revision":"d043cefe40c1ce4125c4fc8393b98350","url":"img/nono4rsibus.svg"},{"revision":"af625f0972be5eb178e6b35ae2ee144d","url":"img/safari-pinned-tab.svg"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();