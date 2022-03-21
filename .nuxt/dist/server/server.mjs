
// --------------------
// Request: D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/css.mjs ($id_972bee3a)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs ($id_e9c1dfd3)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/root-component.mjs ($id_d51f34de)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/app-component.mjs ($id_9f94ed6f)
// --------------------
const $id_4a4c4d72 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry ($id_4a4c4d72)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/components.mjs ($id_ae504ba6)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/app/components/utils.mjs ($id_bb7711fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/langs.vue?macro=true ($id_28162eaa)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue?macro=true ($id_78d6e4bb)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue?macro=true ($id_5df6171f)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue ($id_db4a8bcd)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue ($id_040a5bdf)
// - /pages/index/langs.vue ($id_424b21b4)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/vue/dist/vue.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/vue/dist/vue.cjs.js\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry ($id_4a4c4d72)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/error.mjs ($id_228109ca)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/components/index.mjs ($id_dcef81fa)
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup, args) {
  setNuxtAppInstance(nuxt);
  const p = args ? setup(...args) : setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/hookable/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/hookable/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/unenv/runtime/mock/proxy.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/unenv/runtime/mock/proxy.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/error.mjs ($id_228109ca)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/vue-router/dist/vue-router.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/vue-router/dist/vue-router.cjs.js\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
    if (options.watch) {
      const unwatch = __vite_ssr_import_0__.watch(options.watch, () => {
        asyncData.refresh();
      });
      if (instance) {
        __vite_ssr_import_0__.onUnmounted(() => unwatch());
      }
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_228109ca = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, opts]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, opts);
  }, {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  });
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/ohash/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/ohash/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/cookie-es/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/cookie-es/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/h3/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/h3/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/destr/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/destr/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_541bda03 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_1__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_1__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true && __vite_ssr_import_1__.useNuxtApp().ssrContext) {
    const res = __vite_ssr_import_1__.useNuxtApp().ssrContext?.res;
    const redirectLocation = router.resolve(to).fullPath;
    return __vite_ssr_import_0__.sendRedirect(res, redirectLocation);
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// --------------------
const $id_dcef81fa = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/components/index.mjs ($id_dcef81fa)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_3a707821 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// Dependencies: 

// --------------------
const $id_614de060 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/ufo/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/ufo/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_ea12a3fb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/@vue/shared/dist/shared.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/@vue/shared/dist/shared.cjs.js\".") })


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/css.mjs
// Parents: 
// - D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry ($id_4a4c4d72)
// Dependencies: 

// --------------------
const $id_972bee3a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs
// Parents: 
// - D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry ($id_4a4c4d72)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/components.mjs ($id_ae504ba6)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// --------------------
const $id_e9c1dfd3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs ($id_e9c1dfd3)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs ($id_e9c1dfd3)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_ae504ba6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs ($id_e9c1dfd3)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs ($id_e9c1dfd3)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/meta.config.mjs ($id_81ce1a9c)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
      __vite_ssr_import_2__.useMeta(source);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_81ce1a9c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs ($id_e9c1dfd3)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/router.options.mjs ($id_a3f273db)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/middleware.mjs ($id_a5d68bcc)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/router.options.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/middleware.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_4__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_3__.default);
  const { baseURL } = __vite_ssr_import_4__.useRuntimeConfig().app;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_6__.default,
    history: routerHistory,
    routes: __vite_ssr_import_5__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_7__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    if (false && !nuxtApp.isHydrating) {
      await __vite_ssr_import_4__.callWithNuxt(nuxtApp, __vite_ssr_import_4__.clearError);
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_7__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_7__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_4__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${nuxtApp.ssrContext.url}`
          });
          return __vite_ssr_import_4__.callWithNuxt(nuxtApp, __vite_ssr_import_4__.throwError, [error]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  nuxtApp.hook("app:created", async () => {
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        __vite_ssr_import_4__.callWithNuxt(nuxtApp, __vite_ssr_import_4__.throwError, [__vite_ssr_import_2__.createError({
          statusCode: 404,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      }
    });
    if (true) {
      router.push(nuxtApp.ssrContext.url);
      router.afterEach((to) => {
        if (to.fullPath !== nuxtApp.ssrContext.url) {
          nuxtApp.ssrContext.res.setHeader("Location", to.fullPath);
          nuxtApp.ssrContext.res.statusCode = 301;
          nuxtApp.ssrContext.res.end();
        }
      });
    }
    try {
      await router.isReady();
    } catch (error) {
      __vite_ssr_import_4__.callWithNuxt(nuxtApp, __vite_ssr_import_4__.throwError, [error]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/components/utils.mjs ($id_bb7711fa)
// --------------------
const $id_485c89bf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/utils.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_e1b210cc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_bb7711fa = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/langs.vue?macro=true ($id_28162eaa)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue?macro=true ($id_78d6e4bb)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue?macro=true ($id_5df6171f)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue ($id_db4a8bcd)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue ($id_040a5bdf)
// - /pages/index/langs.vue ($id_424b21b4)
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_6bd5f1bd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/index/index.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/index/langs.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    path: "/",
    file: "D:/Wss/meuscc/notes/pages/index.vue",
    children: [
  {
    name: "index",
    path: "",
    file: "D:/Wss/meuscc/notes/pages/index/index.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/index/index.vue')
  },
  {
    name: "index-langs",
    path: "langs",
    file: "D:/Wss/meuscc/notes/pages/index/langs.vue",
    children: [
  {
    name: "index-langs-cpp-cpp_cheatsheet-cpp_cheatsheet",
    path: "cpp/cpp_cheatsheet/cpp_cheatsheet",
    file: "D:/Wss/meuscc/notes/pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue')
  },
  {
    name: "index-langs-rust-rust_cheatsheet-rust_cheatsheet",
    path: "rust/rust_cheatsheet/rust_cheatsheet",
    file: "D:/Wss/meuscc/notes/pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue')
  }
],
    meta: __vite_ssr_import_2__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/index/langs.vue')
  }
],
    meta: __vite_ssr_import_0__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = __vite_ssr_import_0__.resolveComponent("router-view")

  _push(`<!--[--><h1>Index page大是大非士大夫士大夫</h1>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_router_view, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/langs.vue?macro=true ($id_28162eaa)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue?macro=true ($id_78d6e4bb)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue?macro=true ($id_5df6171f)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue ($id_db4a8bcd)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue ($id_040a5bdf)
// - /pages/index/langs.vue ($id_424b21b4)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/vue/server-renderer/index.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/vue/server-renderer/index.js\".") })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/langs.vue?macro=true ($id_28162eaa)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue?macro=true ($id_78d6e4bb)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue?macro=true ($id_5df6171f)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue ($id_db4a8bcd)
// - /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue ($id_040a5bdf)
// - /pages/index/langs.vue ($id_424b21b4)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/index/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5878fe75 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>Index 2222222dddddd</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index/langs.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_28162eaa = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = __vite_ssr_import_0__.resolveComponent("router-view")

  _push(`<!--[--><h1>langs ddd</h1>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_router_view, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/langs.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/langs.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_78d6e4bb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = __vite_ssr_import_1__.resolveComponent("router-link")

  _push(`<!--[--><h1>Cpp sdsdsdf s</h1><h1>Cpp sdsdsdf s</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_router_link, { to: "/langs/rust/rust_cheatsheet/rust_cheatsheet" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`去 Rust`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("去 Rust")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5df6171f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = __vite_ssr_import_1__.resolveComponent("router-link")

  _push(`<!--[--><h1>Rust</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_router_link, { to: "/langs/cpp/cpp_cheatsheet/cpp_cheatsheet" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`去 C++`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("去 C++")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<p>你好这个还真是</p><!--]-->`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index/index.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a200782a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>Index 2222222dddddd</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/index.vue"]]);
}


// --------------------
// Request: /pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_db4a8bcd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = __vite_ssr_import_1__.resolveComponent("router-link")

  _push(`<!--[--><h1>Cpp sdsdsdf s</h1><h1>Cpp sdsdsdf s</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_router_link, { to: "/langs/rust/rust_cheatsheet/rust_cheatsheet" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`去 Rust`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("去 Rust")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue"]]);
}


// --------------------
// Request: /pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_040a5bdf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = __vite_ssr_import_1__.resolveComponent("router-link")

  _push(`<!--[--><h1>Rust</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_router_link, { to: "/langs/cpp/cpp_cheatsheet/cpp_cheatsheet" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`去 C++`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("去 C++")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<p>你好这个还真是</p><!--]-->`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue"]]);
}


// --------------------
// Request: /pages/index/langs.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_424b21b4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = __vite_ssr_import_0__.resolveComponent("router-view")

  _push(`<!--[--><h1>langs ddd</h1>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_router_view, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/langs.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index/langs.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs ($id_6bd5f1bd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = __vite_ssr_import_0__.resolveComponent("router-view")

  _push(`<!--[--><h1>Index page大是大非士大夫士大夫</h1>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_router_view, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Wss/meuscc/notes/pages/index.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_a3f273db = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,

};
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_a5d68bcc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs ($id_e9c1dfd3)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///D:/Wss/meuscc/notes/node_modules/ohmyfetch/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"D:/Wss/meuscc/notes/node_modules/ohmyfetch/dist/index.mjs\".") })


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/root-component.mjs
// Parents: 
// - D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry ($id_4a4c4d72)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_d51f34de = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/root-component.mjs ($id_d51f34de)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/error-component.mjs ($id_47bed804)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/error-component.mjs");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    const onResolve = () => nuxtApp.callHook("app:suspense:resolve");
    const results = nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    if (true && results && results.some((i) => i && "then" in i)) {
      console.error("[nuxt] Error in `vue:setup`. Callbacks must be synchronous.");
    }
    const error = __vite_ssr_import_2__.useError();
    __vite_ssr_import_1__.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      if (true) {
        __vite_ssr_import_2__.callWithNuxt(nuxtApp, __vite_ssr_import_2__.throwError, [err]);
      }
    });
    const __returned__ = { nuxtApp, onResolve, results, error, ErrorComponent: __vite_ssr_import_3__.default };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_4__.resolveComponent("App");
  __vite_ssr_import_5__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_5__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent));
      } else {
        _push(__vite_ssr_import_5__.ssrRenderComponent(_component_App, null, null, _parent));
      }
    },
    _: 1
  });
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// --------------------
const $id_47bed804 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/error-component.mjs ($id_47bed804)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f10a5dcc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  props: {
    error: Object
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const error = props.error;
    const stacktrace = (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = error.statusMessage ?? is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : void 0;
    const ErrorTemplate = is404 ? __vite_ssr_import_1__.default : true ? __vite_ssr_import_3__.default : __vite_ssr_import_2__.default;
    const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_5__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_4__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent));
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/components/nuxt-error-page.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useMeta({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}img{border-style:solid;max-width:100%;height:auto}img{display:block;vertical-align:middle}p{margin:0}`
    }
  ]
})

const __returned__ = { props, useMeta: __vite_ssr_import_1__.useMeta }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-cloud-surface dark:bg-sky-darker text-sky-darkest dark:text-sky-surface" }, _attrs))
  } data-v-573335c0><!-- <sprite> --><div class="min-h-screen md:flex" data-v-573335c0><div class="flex items-center justify-center w-full md:w-1/2" data-v-573335c0><div class="max-w-sm m-8" data-v-573335c0><div class="text-5xl font-bold dark:text-white md:text-15xl" data-v-573335c0>${
    $props.statusCode
  }</div><div class="w-16 h-1 my-3 bg-primary md:my-6" data-v-573335c0></div><p class="mb-8 text-2xl font-light leading-normal dark:text-cloud-lighter md:text-3xl" data-v-573335c0>${
    $props.description
  }</p>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "px-4 py-3 font-bold bg-transparent rounded text-sky-darkest bg-primary hover:bg-primary-400 dark:bg-primary"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><div class="relative w-full pb-full md:flex md:pb-0 md:min-h-screen md:w-1/2" data-v-573335c0><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Cpath%20d%3D%22M0%200v399.944h639.96V0H0z%22%20fill%3D%22%23BBEDE1%22%2F%3E%3Cpath%20d%3D%22M221.298%2034.631c-3.712.003-7.421-.194-11.112-.592l-7.575-9.998a.944.944%200%200%200-1.52%200l-4.656%206.19c-1.288-3.519-3.56-7.31-7.415-7.31a6.495%206.495%200%200%200-4%201.512%2013.096%2013.096%200%200%200-10.047-4.672c-1.12%200-2.234.138-3.32.408-10.331-6.895-16.213-8.112-20.165-6.658l-.074-.06a162.272%20162.272%200%200%201-31.318%209.598l-7.359-9.67a.952.952%200%200%200-1.52%200l-6.856%209.086a7.023%207.023%200%200%200-4.991-2.32c-3.16%200-5.264%202.56-6.632%205.424h-.096c-10.312%200-18.46%2010.236-28.57%2022.94-8.8%2011.057-19.088%2023.983-33.586%2033.66a13.77%2013.77%200%200%200-3.32-.408%2013.096%2013.096%200%200%200-10.047%204.671%206.495%206.495%200%200%200-4-1.511c-3.856%200-6.128%203.791-7.415%207.31l-4.656-6.19a.944.944%200%200%200-1.52%200L0%20101c-3.69.397.288%2030.5-.472%2041.5.76%2046%201.52%2037.5%200%2091.5v61.5L0%20380.252V400l24.416-9.874L192.015%20397l10.124-78.748%2019.523-7.896h381.236c-20.542%200-53.431-40.063-89.052-83.454-42.073-51.25-87.957-107.143-121.806-107.143-3.712.003-7.421-.195-11.112-.592l-7.575-9.999a.945.945%200%200%200-1.52%200l-4.656%206.192c-1.288-3.52-3.56-7.311-7.415-7.311a6.493%206.493%200%200%200-4%201.511%2013.096%2013.096%200%200%200-10.047-4.671c-1.12.001-2.234.138-3.32.408-14.498-9.677-24.786-22.603-33.585-33.66-10.112-12.704-18.259-22.94-28.571-22.94h-.096c-1.368-2.864-3.472-5.423-6.632-5.423-1.91.062-3.713.9-4.992%202.32l-6.855-9.087a.953.953%200%200%200-1.52%200l-7.36%209.67a165.64%20165.64%200%200%201-1.402-.285c-10.71-7.097-20.845-11.26-30.084-11.26z%22%20fill%3D%22%235DBFA5%22%2F%3E%3Cpath%20d%3D%22M631.609%2039.394c3.456%200%206.192%201.72%208.351%204.176v243.19l-90.8.007%203.475%205.681L0%20400V102.5c0-6-.5-22%200-27.39C0%2068.5-.185%2059.183-.5%2056.5l3.297-19.28c1.928-9.103%205.415-9.183%207.76-.176l6.327%2024.372%205.936-28.06c2.615-12.382%207.36-12.486%2010.543-.24l3.712%2014.302-5.768%204%207.528%202.783%205.423%2020.91L49.504%2042.5c1.92-9.11%203.665-9.015%206%200l4.801%2027.619%202.2-4.619c4-9.5%206.665-3.507%209%205.5l2.08%206.326a9.712%209.712%200%200%201%208.007%201.84l1.915-4.666c1.927-9.11%207.164-9.015%209.5%200l5.72%2020.08h.592a14.992%2014.992%200%200%201%2010.671%204.335c2.184-2.552%209.484-14.415%2013.02-14.415%206.463%200%205.691%2016.087%207.763%2021.678%207.862%201.886%2015.688%204.466%2023.405%207.488%208.562-17.268%2022.179-19.183%2022.179-19.183%204.816%202.175%207.792%207.999%209.495%2012.798a10.4%2010.4%200%200%201%207.912-3.864c6.504%200%2010.487%206.048%2012.799%2011.647a10.332%2010.332%200%200%201%207.88-3.832c5.975%200%209.807%205.152%2012.207%2010.351%2020.998%200%2044.033%208.235%2066.012%2016.77%201.657-7.042%204.326-7.969%206.48-2.743%201.966-2.072%204.444-3.469%207.551-3.469%204.256%200%207.439%202.616%209.775%206l1.256-4.8c2.336-9.007%205.832-8.927%207.752.176l2.831%2013.374%201.84-7.087c2.344-9.014%205.832-8.934%207.76.176l1.84%208.623a9.968%209.968%200%200%201%206.903-2.84c6.192%200%2010.104%205.528%2012.448%2010.911%2013.453-1.538%2031.451-11.404%2052.015-22.674%2023.064-12.642%2049.353-27.051%2076.073-33.462%202.071-5.591%205.807-11.623%2012.271-11.623%203.536%200%206.328%201.808%208.511%204.36a14.993%2014.993%200%200%201%2010.672-4.336h.592l6.975-26.86c2.336-9.014%205.832-8.935%207.76.176l2.4%2011.27a9.71%209.71%200%200%201%208.007-1.84l3.928-15.109c2.336-9.007%205.832-8.927%207.752.176l1.599%207.727%204-15.31c2.336-9.015%205.832-8.935%207.752.176L573.7%2069.47l5.424-20.909%207.528-2.783-5.768-4%203.712-14.302c3.184-12.246%207.927-12.142%2010.543.24l5.936%2028.06%206.327-24.373c2.344-9.006%205.832-8.926%207.76.177l4.112%2019.597c2.071-5.64%205.815-11.783%2012.335-11.783z%22%20fill%3D%22%231B7064%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M448.9%20262.867a22.06%2022.06%200%200%201%2015.999-6.719c22.59%200%2029.046%2030.66%2029.046%2030.66H241.409s3.032-33.059%2015.495-46.865H254.6l.312-1.2c-9.847-.056-16.463-4.312-16.463-10.015%200-4.271%202.768-7.735%208.599-9.223-6.063-1.831-9.599-5.591-9.599-11.662%200-5.887%207.728-10.087%2018.487-10.087.185%200%20.364.013.542.025.176.012.351.023.53.023a.684.684%200%200%201%200-.128c-.304-5.023%201.36-9.35%2011.199-10.102l1.76-6.783c3.488-13.438%208.696-13.342%2011.567.256l1.768%208.359c4.656%201.807%208.04%204.975%208.32%209.926a3.77%203.77%200%200%201%200%20.736%2043.226%2043.226%200%200%201%2010.399%202.152c3.24-1.616%207.632-2.56%2012.719-2.56.181%200%20.36.012.538.024.176.012.351.024.526.024v-.128c-.296-5.127%201.432-9.55%2011.863-10.15%2010.432-.6%2022.223%202.375%2022.767%2011.806.02.245.02.491%200%20.736%206.624.456%2015.959%203.279%2020.047%207.543a30.543%2030.543%200%200%201%207.943-1.448c8.168-.472%2012.192%205.535%2012.751%2012.446a15.396%2015.396%200%200%201%202.4-.312c7.576-.44%2016.215%202.72%2016.759%2012.151v.336c10.536.16%2016.303%207.431%2016.303%2011.75a10.264%2010.264%200%200%201-5.263%209.271%2037.966%2037.966%200%200%201%207.287%202.775%2022.893%2022.893%200%200%201%203.92-.336%2023.242%2023.242%200%200%201%2016.319%206.719zM282.91%20242.11c.552.712%201.08%201.44%201.6%202.24a19.626%2019.626%200%200%201%207.183-1.184%2011.515%2011.515%200%200%201-1.16-3.2h-6.471l-1.152%202.144zm19.799%2015.182c2.12-1.128%203.32-2.76%203.32-4.864a8.264%208.264%200%200%200-.8-3.535%2022.621%2022.621%200%200%200%203.783-.888l.472%2012.862a23.628%2023.628%200%200%200-6.775-3.575zm15.207%2013.142c1.944-4.527%205.064-8.535%2010.063-9.766l.24-2.976-8.799-17.398c-1.2.16-2.48.256-3.832.304.004.056.004.112%200%20.168.168%202.896-1.672%205.008-4.527%206.399l1.015%2015.894a37.178%2037.178%200%200%201%205.84%207.375zm13.335-16.542-8.255-14.294c2.903-.8%205.087-2.056%206.319-3.744.833.216%201.691.326%202.552.328h.607l.536%2014.518-1.759%203.192zm6.768-18.525a19.29%2019.29%200%200%201-3.424.672l.696%2010.534%204.799-8.847a6.8%206.8%200%200%201-2.071-2.359zm13.487%2014.63c-7.584.44-8.799%204.799-8.487%209.95.085%201.232.386%202.44.887%203.568-.431.448-.839.912-1.239%201.392a19.07%2019.07%200%200%200-7.048-4l-.152-5.151%208.663-16.246a29.78%2029.78%200%200%200%205.76.8c1.912%202.808%205.24%205.015%209.6%206.399l1.895%205.08a20.37%2020.37%200%200%200-9.895-1.792h.016zm15.578%207.108h.001c.36.108.724.217%201.075.339l1.952-9.127a40.447%2040.447%200%200%201-8.079-.952l2.704%206.695a11.211%2011.211%200%200%201%202.224%203.008l.123.037zm4.173-3.285.002-.013a18.682%2018.682%200%200%201%205.517-2.643%2016.597%2016.597%200%200%201-3.863-2.863h-.624l-1.03%205.506-.018.013h.016zm13.445%2019.868.01.017h-.016a.325.325%200%200%200%20.006-.017zm0%200a.64.64%200%200%201%20.066-.127h-.128c.018.044.039.086.062.127z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M637.064%20105.001a9.16%209.16%200%200%200%202.896%206.767V99.986a5.927%205.927%200%200%200-2.896%205.015z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M621.985%2078.501c0%204.72%202.672%207.687%207.256%209.207l-.688%2020.797-6.528-5.839a8.263%208.263%200%200%200%205.192-7.911c0-3.496-4.72-9.43-13.343-9.43-8.624%200-14.815%203.375-14.815%208.086a9.273%209.273%200%200%200%201.152%204.711%2016.242%2016.242%200%200%200-6.12-1.143c-5.24%200-9.6%201.247-12.175%203.279v-2.584c.682.08%201.368.123%202.056.128%208.623%200%2014.823-3.367%2014.823-8.078%200-5.6-3.784-8.8-10.088-9.911a5.46%205.46%200%200%200%201.728-4.096c0-2.28-3.08-6.15-8.703-6.15-5.624%200-9.664%202.2-9.664%205.27a5.8%205.8%200%200%200%203.76%205.6%208.398%208.398%200%200%200-3.88%203.2%2010.397%2010.397%200%200%200-4.799-1.128c-5.6%200-9.664%202.2-9.664%205.27%200%204.744%204.128%206.8%2010.632%206.8a13.67%2013.67%200%200%200%202.071-.152l5.912%2017.805-.304%209.143a19.69%2019.69%200%200%200-6.92-1.24c-6.031%200-13.655%202.88-13.655%207.319.005.334.026.668.064%201-7.999%201.088-11.767%205.071-11.767%2010.175a7.583%207.583%200%200%200%201.28%204.207c-3.234.27-6.418.975-9.463%202.096l-4.968-23.269c-2.872-13.598-8.08-13.702-11.567-.264l-4.072%2015.694%206.327%204.391-8.287%203.048-1.656%206.399-4-18.997c-2.88-13.598-8.079-13.702-11.575-.264l-15.359%2059.151h39.39l-2.176-10.262h25.43l-1.304-6.183a48.326%2048.326%200%200%200%2010.296%201.048%2073.11%2073.11%200%200%200%206.663-.296l14.719%2023.908-2.896%2087.804h13.16l-.488-58.872%208.887-6.831c3.283.666%206.626.993%209.975.976%2010.536%200%2018.703-2.008%2023.199-5.847l-1.36%2041.154a22.846%2022.846%200%200%200-7.687-1.304c-22.599%200-27.439%2030.668-27.439%2030.668h51.413v-47.417a18.316%2018.316%200%200%200-4.496%203.071l-.12-14.398%204.616-3.591v-4.224l-4.648%203.4-.048-5.695c1.5.821%203.072%201.504%204.696%202.039v-29.02a25.332%2025.332%200%200%200-4.904%201.968l-.056-6.831%204.96-3.047v-5.376l-5.008%202.768v-5.359a26.732%2026.732%200%200%200%205.048%201.535v-24.324c-1.787.279-3.54.743-5.232%201.384l-.056-6.767c3.112-1.36%205-3.4%205.288-6.096v-1.623a10.597%2010.597%200%200%200-5.416-8.423l-.088-10.007%205.464-3.967v-4l-5.536%203.616-.168-20.51a14.905%2014.905%200%200%200%205.704%201.28V70.71a17.182%2017.182%200%200%200-3.2-.288c-8.575-.032-14.775%203.368-14.775%208.08zm-48.534%20112.784-10.902-16.733c4.871-.84%208.799-2.296%2011.598-4.36l-.696%2021.093zm-2.111-43.57a18.137%2018.137%200%200%201%203.448%203.056l.16-4.808a14.26%2014.26%200%200%201-3.608%201.752zm4.976-43.177-3.888-10.719c.224-.098.443-.207.656-.328a13.2%2013.2%200%200%200%203.504%202.6l-.272%208.447zm6.576%20113.376.048%205.695%204.863-3.552a28.444%2028.444%200%200%201-4.911-2.143zm-.208-25.013-.056-6.831.152-.096a26.766%2026.766%200%200%200%208.526%204.088%2028.708%2028.708%200%200%200-8.622%202.855v-.016zm34.414-2.384%208.582%205.12.288-8.655a26.263%2026.263%200%200%201-8.87%203.535zm9.703-28.947a11.593%2011.593%200%200%200-.4%202.999c-.001.67.071%201.338.216%201.992-2.584-2.712-6.448-4.967-11.935-6.295-1.6-2.88-4.544-5.423-9.352-6.959a5.12%205.12%200%200%200%202.48-4.439c0-3.48-4.064-6.08-10.103-6.08-6.04%200-9.976%201.784-9.976%205.104a6.048%206.048%200%200%200%201.6%204.135%2027.214%2027.214%200%200%200-6.951%201.6l-.088-10.623%209.031-6.455a24.62%2024.62%200%200%200%209.391%201.6c1.57.008%203.138-.112%204.688-.36v.608c0%206.007%207.008%2010.487%2017.431%2010.487%201.6%200%203.056-.08%204.456-.216l-.488%2012.902zm-5.672-41.835a14.473%2014.473%200%200%201%207%201.6l.328-9.062-9.336-8.799c-1.233.215-2.483.32-3.735.312a28.422%2028.422%200%200%201-9.408-1.344%207.134%207.134%200%200%201%201.488%203.911c0%203.48-1.888%209.079-11.855%209.079-6.12%200-10.84-1.184-13.599-3.751l.224%2026.996%206.007-3.928a9.167%209.167%200%200%201-3.552-7.351c0-5.031%205.976-7.719%2015.12-7.719%205.071%200%209.215%201.224%2011.903%203.2%201.288-2.056%204.712-3.144%209.415-3.144zM-1.96%20140.032c0%203.714-2.675%206.05-7.266%207.246l.69%2016.368L-2%20159.05c-3.224-1.013-5.3-3.499-5.2-6.226%200-2.751%204.727-7.422%2013.363-7.422%208.637%200%2014.838%202.656%2014.838%206.364.04%201.295-.358%202.575-1.154%203.708a20.233%2020.233%200%200%201%206.13-.9c5.247%200%209.613.982%2012.193%202.581v-2.033c-.684.063-1.371.096-2.06.101-8.636%200-14.845-2.651-14.845-6.359%200-4.407%203.79-6.925%2010.103-7.8-1.132-.833-1.761-2.004-1.73-3.223%200-1.794%203.084-4.841%208.716-4.841s9.678%201.731%209.678%204.149c.073%201.95-1.44%203.721-3.766%204.406%201.593.508%202.949%201.387%203.886%202.518a12.802%2012.802%200%200%201%204.807-.887c5.608%200%209.678%201.731%209.678%204.148%200%203.734-4.134%205.351-10.647%205.351a17.3%2017.3%200%200%201-2.075-.119l-5.92%2014.013.304%207.196a24.55%2024.55%200%200%201%206.93-.976c6.04%200%2013.675%202.266%2013.675%205.76a6.2%206.2%200%200%201-.064.787c8.012.856%2011.785%203.991%2011.785%208.008-.002%201.179-.448%202.331-1.281%203.311%203.239.213%206.427.767%209.477%201.65l3.348%202.19c2.003%202.405.501-.117%205.008%207.753%200%200%201.866%206.063%200%208.264-2.743%203.237-11.518%205.79-11.518%205.79l-16.755%2023.33-3.9%205.358-5%206.5-7.922%2011.5.126%203%20.314%207.5.42%2010-1.348-32.129%2026.365-35.292%204.67-.591a61.06%2061.06%200%200%201-10.312.824c-2.347%200-4.574-.081-6.673-.233l-14.742%2018.817%202.9%2069.104H36.626l.488-46.334-8.9-5.376a61.899%2061.899%200%200%201-9.991.768c-10.551%200-18.731-1.58-23.234-4.602L-.5%20266c2.473-.686%206-1.797%2010%20.637C33.335%20281.137%2024.456%20286%2024.456%20286H-19.96v-19.363a19.174%2019.174%200%200%201%204.502%202.418l.12-11.332-4.623-2.827v-3.323l4.655%202.675.048-4.482a32.559%2032.559%200%200%201-4.703%201.605v-22.839a29.72%2029.72%200%200%201%204.912%201.548l.056-5.376-4.968-2.398v-4.231l5.016%202.178v-4.218c-1.63.533-3.324.938-5.056%201.209V198.1c1.79.22%203.546.585%205.24%201.089l.056-5.326c-3.116-1.07-5.007-2.675-5.296-4.797v-1.278c.282-2.784%202.318-5.272%205.424-6.629l.088-7.875-5.472-3.123v-3.147l5.545%202.845.168-16.141a18.398%2018.398%200%200%201-5.713%201.007V133.9c1.057-.154%202.13-.23%203.205-.226%208.589-.026%2014.798%202.65%2014.798%206.358zm48.607%2088.764%2010.92-13.17c-4.88-.661-8.813-1.807-11.617-3.431l.697%2016.601zm2.115-34.291a17.518%2017.518%200%200%200-3.453%202.405l-.16-3.784a16.228%2016.228%200%200%200%203.613%201.379zm-4.983-33.982%203.893-8.435a8.348%208.348%200%200%201-.656-.259%2013.46%2013.46%200%200%201-3.51%202.046l.273%206.648zm-6.586%2089.23-.048%204.482-4.87-2.795a32.882%2032.882%200%200%200%204.918-1.687zm.209-19.685.056-5.377-.153-.075c-2.58%201.462-5.473%202.551-8.54%203.217a34.476%2034.476%200%200%201%208.637%202.247v-.012zm-32.047-2.235-11.016%204.388-.288-6.812c2.72%201.346%208.151%201.931%2011.304%202.424zm-12.137-22.424c.264.77.398%201.564.4%202.361a5.724%205.724%200%200%201-.216%201.567c2.588-2.134%206.457-3.909%2011.953-4.954%201.602-2.266%204.55-4.268%209.366-5.477-1.558-.736-2.503-2.066-2.484-3.494%200-2.738%204.07-4.784%2010.119-4.784%206.049%200%209.99%201.404%209.99%204.016.01%201.205-.563%202.368-1.602%203.255a33.58%2033.58%200%200%201%206.962%201.259l.088-8.36-9.045-5.081a30.746%2030.746%200%200%201-9.406%201.259%2036.395%2036.395%200%200%201-4.694-.283v.479c0%204.727-7.019%208.253-17.458%208.253a57.99%2057.99%200%200%201-4.462-.17l.489%2010.154zm5.68-32.925c-2.434-.05-4.845.383-7.01%201.259l-.329-7.132%209.35-6.925c1.235.17%202.487.252%203.741.245a35.67%2035.67%200%200%200%209.422-1.057c-.877.886-1.396%201.958-1.49%203.078%200%202.739%201.89%207.145%2011.873%207.145%206.129%200%2010.856-.931%2013.62-2.952l-.225%2021.247-6.017-3.091c2.274-1.385%203.59-3.526%203.558-5.786%200-3.959-5.985-6.075-15.142-6.075-5.08%200-9.23.963-11.922%202.518-1.29-1.617-4.718-2.474-9.43-2.474z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M177.405%20255.364H154.39c5.384%2014.63%206.92%2031.356%206.92%2031.356H65.372s.475-8.91%203.133-13.72c2.822-5.104%203.756%202.636%208.001%204.5%204.245%201.864%207.22-10.204%208.4-7.194a37.424%2037.424%200%200%201%205.84-7.375l1-15.861a10.398%2010.398%200%200%201-2.535-1.688s-6.059-16.081%200-22.382c4.37-4.545%2015.51-4.486%2015.51-4.486h1.432a21.718%2021.718%200%200%201%206.568.887c.712-4.415%206.504-10.878%2016.567-10.878%2010.359%200%2017.895%203.911%2018.439%209.455l5.647-21.773c3.488-13.43%208.696-13.334%2011.568.264l12.463%2058.895zm-83.61-7.463-.473%2012.862a23.226%2023.226%200%200%201%206.792-3.591c-2.12-1.136-3.32-2.768-3.32-4.864a8.283%208.283%200%200%201%20.8-3.543%2023.428%2023.428%200%200%201-3.8-.864zm24.518-3.655-.033-.012-2.239-12.658a12.724%2012.724%200%200%201-4%202.055%2014.02%2014.02%200%200%201%20.416%204.856%2010.78%2010.78%200%200%201-1.344%204.519c2.445-.04%204.875.376%207.167%201.228l.001.004.032.008zm-.424-14.63%202.4%2011.91v.04c3.119-3.911%206.799-6.671%2011.143-7.455a4.803%204.803%200%200%201-.8-2.608c-1.056.096-2.104.096-3.2.096-4.256%200-7.335-.816-9.543-2.063v.08z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M443.324%20146.891c-2.872-13.598-8.079-13.702-11.567-.264l-15.359%2059.192h39.381l-12.455-58.928z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M0%20399.944h639.96V283.088H0v116.856z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M393.015%20161.337h219.443v125.479H390.624V163.729a2.4%202.4%200%200%201%202.391-2.392z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20d%3D%22M609.386%20161.337h6.135a2.4%202.4%200%200%201%202.4%202.4v123.079h-10.935V163.737a2.4%202.4%200%200%201%202.4-2.4zm-207.547%2012.679h193.932v23.733H401.839z%22%20fill%3D%22%2300DB81%22%2F%3E%3Cpath%20fill%3D%22%2366E9B3%22%20d%3D%22M401.839%20210.834h63.86v9.935h-63.86zm0%2018.902h44.493v9.935h-44.493z%22%2F%3E%3Cpath%20fill%3D%22%2300DB81%22%20d%3D%22M401.839%20248.629h25.83v9.935h-25.83zm31.574%200h25.83v9.935h-25.83z%22%2F%3E%3Cpath%20fill%3D%22%2366E9B3%22%20d%3D%22M518.32%20210.834h77.451v63.295H518.32z%22%2F%3E%3Cpath%20fill%3D%22%2300DB81%22%20d%3D%22M528.111%20217.777h57.868v5.135h-57.868zm0%2011.071h57.868v5.135h-57.868zm0%2011.07h57.868v5.135h-57.868zm0%2011.063h57.868v5.135h-57.868zm0%2011.07h57.868v5.135h-57.868z%22%2F%3E%3Cpath%20d%3D%22M393.135%20161.337h125.177l-62.524%20125.431h-65.052V163.737a2.4%202.4%200%200%201%202.399-2.4z%22%20fill%3D%22%2364E5B3%22%20style%3D%22mix-blend-mode%3Ascreen%22%20opacity%3D%22.33%22%2F%3E%3Cpath%20d%3D%22M464.867%20288.664h-44.269l10.455-9.255a7.515%207.515%200%200%201%205-1.896h3.696a7.551%207.551%200%200%201%205.159%202.04l1.6%201.496a7.537%207.537%200%200%200%205.16%202.039h4.304a7.52%207.52%200%200%201%205.159%202.04l3.736%203.536z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M386.488%20287.896h-13.295l-5.32-19.934h10.575a3.551%203.551%200%200%201%203.424%202.632l4.616%2017.302z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20opacity%3D%22.75%22%20d%3D%22m382.032%20271.202-11.983%204.911%202.168%2011.782h5.959l5.464-10.662-1.608-6.031z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M370.873%20270.258a3.103%203.103%200%200%200-3-2.303H355.65a3.095%203.095%200%200%200-2.992%202.303l-4.68%2017.638h27.599l-4.704-17.638z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22m381.128%20282.2%209.6-1.047a3.295%203.295%200%200%201%203.495%202.263l1.712%205.28h-18.447l.76-3.856a3.313%203.313%200%200%201%202.88-2.64zm-29.814%2012.047h-35.622l5.456-8.215a8.053%208.053%200%200%201%206.704-3.599%208.059%208.059%200%200%200%205.711-2.4l2.072-2.096a8.074%208.074%200%200%201%205.72-2.399h2.847a8.045%208.045%200%200%201%206.176%202.895l3.464%204.152a8.048%208.048%200%200%200%204.848%202.783l3.391.568a8%208%200%200%201%205.64%203.912l2.52%204.359-18.927.04zm284.702-19.981a12.553%2012.553%200%200%200%203.64-5.991%2014.392%2014.392%200%200%200-7.831.528c.748-2.128.824-4.435.216-6.608a11.89%2011.89%200%200%200-5.08%202.36%208.51%208.51%200%200%200-2.064-4.623%206.768%206.768%200%200%200-3.952%203.055%208.511%208.511%200%200%200-2.944-4.695s-3.367%201.296-3.999%206.175a12.642%2012.642%200%200%200-3.848-4.623%2015.525%2015.525%200%200%200-2.032%204.679%2011.189%2011.189%200%200%200-4.672-3.423%2012.069%2012.069%200%200%200-1.088%206.703c-2.911-3.24-6.159-2.8-6.159-2.8a11.833%2011.833%200%200%200-.144%204.527%2010.93%2010.93%200%200%200-6.808-.288%2012.099%2012.099%200%200%200%203.6%206.4c-4.752-.632-6.984%202.151-6.984%202.151a11.733%2011.733%200%200%200%203.2%203.528l-.6.112a7.938%207.938%200%200%200-2.464-.84l-3.391-.568a8.044%208.044%200%200%201-4.848-2.784l-3.4-4.135a8.04%208.04%200%200%200-6.175-2.888h-2.856a8.06%208.06%200%200%200-5.712%202.4l-2.072%202.096a8.062%208.062%200%200%201-5.711%202.399%208%208%200%200%200-6.704%203.592l-5.464%208.215h48.957c.81.227%201.647.34%202.488.336h44.365a12.618%2012.618%200%200%200-1.384-1.6c.264.096.544.192.8.272a8.988%208.988%200%200%200%205.08.04v-4.967a9.51%209.51%200%200%200-2.616-1.76%2011.895%2011.895%200%200%200%202.616-1.144v-5.215a11.737%2011.737%200%200%200-3.96-.616zm-549.67%201.708a12.551%2012.551%200%200%200%203.64-5.991%2014.394%2014.394%200%200%200-7.832.528%2010.97%2010.97%200%200%200%20.216-6.608%2011.904%2011.904%200%200%200-5.08%202.36%208.501%208.501%200%200%200-2.063-4.623%206.766%206.766%200%200%200-3.952%203.055A8.518%208.518%200%200%200%2068.33%20260s-3.368%201.296-4%206.175a12.644%2012.644%200%200%200-3.847-4.623%2015.53%2015.53%200%200%200-2.032%204.679%2011.192%2011.192%200%200%200-4.672-3.423%2012.06%2012.06%200%200%200-1.088%206.703c-2.912-3.24-6.16-2.8-6.16-2.8a11.835%2011.835%200%200%200-.143%204.527%2010.928%2010.928%200%200%200-6.808-.288%2012.102%2012.102%200%200%200%203.6%206.4c-4.752-.632-6.984%202.151-6.984%202.151a11.725%2011.725%200%200%200%203.2%203.528l-.6.112a7.942%207.942%200%200%200-2.464-.84l-3.392-.568a8.046%208.046%200%200%201-4.847-2.784l-3.4-4.135a8.04%208.04%200%200%200-6.176-2.888h-2.856a8.059%208.059%200%200%200-5.711%202.4l-2.072%202.096a8.063%208.063%200%200%201-5.712%202.399%208%208%200%200%200-6.703%203.592L-10%20290.628h48.957c.81.227%201.647.34%202.488.336H85.81a12.681%2012.681%200%200%200-1.384-1.6c.264.096.544.192.8.272a8.987%208.987%200%200%200%205.08.04v-4.967a9.521%209.521%200%200%200-2.616-1.76%2011.896%2011.896%200%200%200%202.616-1.144l4.202-3.305-4.202-1.91a11.736%2011.736%200%200%200-3.96-.616z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M572.804%20308.549h13.303l5.312-19.942h-10.567a3.552%203.552%200%200%200-3.432%202.632l-4.616%2017.31z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20opacity%3D%22.75%22%20d%3D%22m591.427%20288.607-2.176%208.159-12.919%2011.783h-3.528l2.104-7.871%2016.519-12.071z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M588.427%20290.911a3.099%203.099%200%200%201%202.992-2.304h12.223a3.096%203.096%200%200%201%203%202.304l4.704%2017.638h-27.622l4.703-17.638z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22M597.939%20311.445h-44.27l10.464-9.263a7.502%207.502%200%200%201%204.991-1.896h3.696a7.522%207.522%200%200%201%205.16%202.04l1.6%201.496a7.519%207.519%200%200%200%205.159%202.039h4.288a7.547%207.547%200%200%201%205.16%202.048l3.752%203.536zm-286.638%206.454h-35.622l5.455-8.223a8.048%208.048%200%200%201%206.704-3.591%207.999%207.999%200%200%200%205.712-2.4l2.079-2.095a7.999%207.999%200%200%201%205.712-2.4h2.848a8.04%208.04%200%200%201%206.192%202.928l3.463%204.151a8.046%208.046%200%200%200%204.856%202.784l3.384.567a8.042%208.042%200%200%201%205.64%203.912l2.519%204.367h-18.942zm-54.685-29.187a8.079%208.079%200%200%200%207.439%204.239h44.366a11.911%2011.911%200%200%200-1.384-1.6c.272.096.544.184.8.264%205.015%201.384%207.679-1.384%207.679-1.384a11.242%2011.242%200%200%200-5.215-5.295%2012.668%2012.668%200%200%200%206.463-4.567s-3.648-2.536-7.791-2.344a12.635%2012.635%200%200%200%203.647-5.991%2014.392%2014.392%200%200%200-7.831.528c.744-2.129.817-4.436.208-6.607a11.842%2011.842%200%200%200-5.072%202.359%208.58%208.58%200%200%200-2.072-4.631%206.82%206.82%200%200%200-3.951%203.064%208.484%208.484%200%200%200-2.944-4.696s-3.368%201.296-4%206.175a12.57%2012.57%200%200%200-3.848-4.623%2015.55%2015.55%200%200%200-2.032%204.679%2011.107%2011.107%200%200%200-4.671-3.431%2012.158%2012.158%200%200%200-1.048%206.703c-2.912-3.2-6.16-2.8-6.16-2.8a11.88%2011.88%200%200%200-.144%204.536%2010.912%2010.912%200%200%200-6.807-.288%2012.07%2012.07%200%200%200%203.599%206.399c-4.743-.624-6.983%202.16-6.983%202.16a11.726%2011.726%200%200%200%203.2%203.519%207.062%207.062%200%200%200-5.448%203.632z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M436.277%20359.662c-13.295%200-23.199%2011.39-30.398%2025.636-7.344-24.132-18.399-50.321-34.31-65.591a1.6%201.6%200%200%200-2.16%200l-17.359%2015.374%209.527-21.349a1.6%201.6%200%200%200-.656-2.032%2038.172%2038.172%200%200%200-18.862-5.039c-10.728%200-20.119%204.488-28.311%2011.823-17.943-19.43-40.325-33.268-67.707-33.268-23.319%200-41.302%2010.039-55.197%2025.021-16.415-14.982-36.11-25.021-59.428-25.021a70.537%2070.537%200%200%200-36.582%209.815l7.464%2022.525-14.528-17.782c-19.11%2014.398-31.95%2037.643-40.533%2061.152-4-7.287-17.735-34.426-47.237-29.426v68.444h472.522c-7.095-20.197-18.59-40.282-36.245-40.282z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22m291.638%20343.2-14.527%2017.781%207.479-22.508a70.62%2070.62%200%200%200-36.605-9.807c-31.766%200-56.797%2018.637-75.996%2043.01-9.231-10.399-19.463-19.197-30.534-24.685l-6.623%2020.414-.288-23.341a50.917%2050.917%200%200%200-31.782-1.056c-24.679%207.111-39.326%2029.9-47.901%2056.936h275.646c-8.551-21.973-20.926-43.25-38.869-56.744z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M355.618%20309.1s-.944-6.815-4.168-8.734c-4.896-1.92-15.927-4.136-20.359-3.448a22.851%2022.851%200%200%200-6.135%203.632%207.793%207.793%200%200%200-2.768%205.175l-1.712%2015.894.12.312c-5.656%204.127-14.839%2011.07-22.903%2018.189l-5.647-61.335s-38.062%2017.837-38.062%2050.849c0%2024.38%2012.343%2044.281%2021.919%2056.064%207.055%208.67%2019.087%209.054%2026.758.928%2014.287-15.126%2025.886-41.203%2030.654-52.897%207.608-.568%2017.015-16.846%2015.719-26.284l6.584%201.655z%22%20fill%3D%22%23A7816D%22%2F%3E%3Cpath%20d%3D%22M170.205%20213.034s-29.902%2019.725-40.797%2030.636c-4.8%204.799-5.528%2020.261%200%2026.764%206.976%208.215%2021.127%2011.527%2021.127%2011.527s39.413-8.103%2039.413-28.365c0-20.261-19.743-40.562-19.743-40.562z%22%20fill%3D%22%23FF6446%22%2F%3E%3Cpath%20d%3D%22M130.832%20247.501c-5.88%203.32-18.791%2017.822-26.783%2027.197a18.324%2018.324%200%200%200-2.399%2020.349c14.135%2027.196%2049.901%2035.043%2049.901%2035.043s6.975-65.327-20.719-82.589z%22%20fill%3D%22%23A7816D%22%2F%3E%3Cpath%20d%3D%22M272.566%20189.125c4%204.336%208.223%209.223%205.216%2011.663-2.88%202.328-11.399-.816-11.399-.816l6.183-10.847z%22%20fill%3D%22%237D6152%22%2F%3E%3Cpath%20d%3D%22M227.122%20172.352c2.68-16.862%2018.399-18.334%2025.926-17.134%2011.023%201.744%2023.247%2012.174%2020.527%2029.316a251.332%20251.332%200%200%201-6.848%2030.068%205.046%205.046%200%200%201-3.951%203.575%2028.77%2028.77%200%200%201-7.2.416l-4.624%2013.598-43.149-6.839%2022.463-38.394c-3.152-4.392-3.984-9.271-3.144-14.606z%22%20fill%3D%22%23A7816D%22%2F%3E%3Cpath%20d%3D%22M281.694%20168.376c-1.248-5.015-4.151-7.015-8.111-7.199%204.344-3.479%206.503-7.838%203.952-12.702-3.376-6.447-8.84-5.743-13.416-3.343l-.959.504c1.711-3.832.495-6.855-2.208-9.399-3.76-3.552-9-3.44-13.479%201.304-.6.64-1.128%201.272-1.6%201.912-2.072-4.496-5.6-8.183-10.336-7.024-5.047%201.248-8.799%207.871-6.799%2015.758.185.777.434%201.536.744%202.272l-.376.08a31.052%2031.052%200%200%200-.632-3.408c-1.712-6.887-5.264-11.646-11.456-10.11-6.191%201.536-7.295%206.671-5.407%2014.294.168.656.352%201.28.544%201.88l-1.048-.104c-9.368-.696-13.135%204.407-13.599%2010.63-.408%205.447%203.935%208.975%209.543%2010.119-5.6%202.775-9.655%208.135-8.271%2013.71%201.383%205.575%206.887%206.687%2012.927%205.943-3.44%202.984-4.696%206.223-3.28%208.975%202.304%204.495%206.904%206.919%2014.183%203.199l.856-.464c.084.731.218%201.455.4%202.168%201.48%205.999%207.32%207.903%2012.999%206.495%205.216-1.288%208.848-4.271%207.912-10.806%204.463%204.799%209.327%203.743%2012.991%201.063%204.04-2.951%204.192-8.534.544-13.518-.296-.408-.616-.8-.944-1.199%204.936%203.815%2010.047%203.711%2012.911.799%202.4-2.399%202.336-5.639.144-9.166.656-.096%201.32-.224%201.984-.384%206.536-1.648%2011.079-5.04%209.287-12.279z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22m299.621%20332.209-3.895-42.05a52.72%2052.72%200%200%200-9.064-25.044c-9.207-13.366-25.638-34.067-44.709-43.914-29.454-15.198-71.748-8.167-71.748-8.167-33.158%2034.323-53.188%20141.316-53.188%20141.316l90.666%2022.013c19.327.12%2024.703-15.63%2038.574-39.674%201.76%206.007%203.407%2010.726%204.263%2013.062a1.705%201.705%200%200%200%202.208%201.016l45.869-16.91a1.598%201.598%200%200%200%201.024-1.648z%22%20fill%3D%22%23FF6446%22%2F%3E%3Cpath%20d%3D%22M221.482%20373.236c-15.703-15.95-36.717-24.613-76.379-24.613-14.799%200-28.086%205.703-28.086%205.703S93.202%20372.26%2088.394%20399.92h137.864l-3.072-9.255s6.48-9.119-1.704-17.429z%22%20fill%3D%22%23336363%22%2F%3E%3Cpath%20d%3D%22M213.427%20384.482c-3.392-7.103-8.648-9.67-13.719-12.15l1.399-2.872c5.048%202.464%2011.336%205.536%2015.199%2013.639l-2.879%201.383zM255.6%20218.593l1.184-3.503c1.68%201.28%204.951%202.863%207.791%202.4-1.536%201.495-8.975%201.103-8.975%201.103z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M231.642%20335.625s6.575%202.232%2014.463-1.879l3.048%2012.086s-11.2%205.823-22.503%205.823l4.992-16.03zm-21.711%2028.676c-1.992%2010.606-47.461%2018.013-76.491%2012.038-26.543-5.471-31.014-21.221-29.023-31.835%201.992-10.615%2027.199-14.774%2056.357-9.311%2029.158%205.463%2051.141%2018.501%2049.157%2029.108z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22m298.733%20361.253-3.199-.272a90.603%2090.603%200%200%200%20.096-16.221l3.199-.328a93.943%2093.943%200%200%201-.096%2016.821z%22%20fill%3D%22%23614B3F%22%2F%3E%3Cpath%20d%3D%22m271.063%20245.149-24.958%2028.388-2.632-19.645%2027.59-8.743z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M246.105%20236.183c11.359-6.111%2019.27-5.175%2022.838-2.192%203.568%202.984%206.904%208.519%207.56%2011.543a10.583%2010.583%200%200%201-.32%205.599c-2.224-2.824-5.12-5.991-5.12-5.991-12.943%204.799-23.286%2014.03-23.286%2014.03l-1.672-22.989z%22%20fill%3D%22%23336363%22%2F%3E%3Cpath%20d%3D%22m292.214%20336.185-34.878%2020.277-.824-7.111%2035.702-13.166z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22m131.904%20279.753-13.991%201.92a4.352%204.352%200%200%200-2.656%201.431c-18.503%2021.293-24.239%2037.035-24.239%2046.274%200%209.407%207.416%2018.397%2016.999%2018.397%206.48-.008%2023.887-31.235%2023.887-68.022z%22%20fill%3D%22%23336363%22%2F%3E%3Cellipse%20cx%3D%22211.643%22%20cy%3D%22212.578%22%20rx%3D%2223.119%22%20ry%3D%2215.926%22%20stroke%3D%22%235A7D7D%22%20stroke-width%3D%229%22%2F%3E%3Cpath%20d%3D%22M252.08%20230.104c-9.215-8.247-15.695-10.831-22.662-10.831-26.223%200-36.798-2.671-46.206-5.359-15.703-4.495-26.046-2-28.606%207.199-4.799%2017.286-19.199%2048.849-26.318%2059.656-18.399%2014.462-28.798%2031.819-29.75%2043.394-.952%2011.574%204.328%2023.092%209.599%2025.972%208.392%204.591%2062.684%2020.317%2081.123%2019.349%2018.439-.968%2033.598-10.606%2042.341-30.284%208.744-19.677%2023.343-75.989%2026.199-90.651%201.624-8.343.072-13.254-5.72-18.445z%22%20fill%3D%22%235A7D7D%22%2F%3E%3Cpath%20d%3D%22M252.424%20305.813c-7.999-6.439-28.102-12.742-36.646-13.278a2.734%202.734%200%200%200-2.567%201.352c-8.424%2014.574-24.775%2023.668-30.023%2042.81-5.375%2019.701%205.84%2033.403%2020.407%2033.403s28.846-5.239%2036.71-20.477c7.599-14.726%2011.255-27.3%2013.071-41.322a2.736%202.736%200%200%200-.952-2.488z%22%20fill%3D%22%23336363%22%2F%3E%3Cpath%20d%3D%22M195.572%20343.232c-.888%200-1.784%200-2.68-.088a1.604%201.604%200%200%201%20.2-3.2c22.527%201.432%2038.11-16.262%2043.789-26.94a1.6%201.6%200%201%201%202.824%201.504c-7.719%2014.574-24.214%2028.724-44.133%2028.724zm-58.325-78.957-3.103%206.199c12.247%203.76%2058.124%2015.886%2065.924%2018.285%207.799%202.4%2014.535-.231%2017.598-9.99%203.064-9.759-80.419-14.494-80.419-14.494z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M253.328%20231.279c-2.696-6.399-6.167-10.75-13.599-13.51-13.991-5.207-53.709-9.374-63.044-10.278-9.335-.904-22.183%201.248-24.847%209.598-3.879%2012.167-11.799%2032.796-17.454%2041.595-3.456%205.391-1.6%208.71%204.239%2010.398%205.84%201.688%2057.965%2014.198%2065.468%2015.958%207.504%201.76%2014.919-1.008%2017.183-5.303%203.144-5.96%208.928-39.195%209.36-46.234.304-4.935%205.687-8.199%2011.727-7.407a18.296%2018.296%200%200%201%2010.967%205.183z%22%20fill%3D%22%23336363%22%2F%3E%3Cpath%20d%3D%22M204.051%20266.595c-18.207-2.208-38.661-23.549-40.637-37.875l3.2-.44c1.792%2012.998%2021.198%2033.124%2037.853%2035.139l-.416%203.176zm-24.342%201.424a1.598%201.598%200%200%200-1.184-2.04l-11.055-2.4a1.6%201.6%200%200%200-1.88%201.136c-.8%202.976-2.832%209.799-5.08%2013.598-.392.664-.88%201.384-1.416%202.136-1.6-.504-3.2-.944-4.688-1.256a1.601%201.601%200%200%200-1.656.632l-2.111%202.96a1.598%201.598%200%200%200%20.952%202.495c.799.176%201.807.424%202.951.72a134.512%20134.512%200%200%201-3.095%203.376%201.597%201.597%200%200%200%20.592%202.591l10.207%203.912a1.6%201.6%200%200%200%201.736-.4c.904-.96%202.528-2.736%204.264-4.799%201.135.48%202.287.983%203.463%201.535a1.6%201.6%200%200%200%201.888-.392l2.328-2.671a1.6%201.6%200%200%200-.568-2.512c-.8-.36-1.848-.8-3.032-1.296a31.099%2031.099%200%200%200%201.656-2.687c2.36-4.376%204.712-11.439%205.728-14.638z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cellipse%20cx%3D%22223.402%22%20cy%3D%22249.653%22%20rx%3D%2216.895%22%20ry%3D%2216.894%22%20fill%3D%22%23003C3C%22%2F%3E%3Cellipse%20cx%3D%22221.21%22%20cy%3D%22247.469%22%20rx%3D%2216.895%22%20ry%3D%2216.894%22%20fill%3D%22%2300D180%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22m233.721%20248.661-8.055%204.168.144-2.992%205.288-2.735-7.52-4.8-.136%202.976-.256%205.551a5.534%205.534%200%200%201-3.152%204.919l-5.055%202.616a1.6%201.6%200%200%201-2.4-1.536l.696-15.134a1.6%201.6%200%200%201%202.519-1.312l5.128%203.288.144-3.112a1.647%201.647%200%200%201%202.528-1.303l10.255%206.567c.495.315.784.87.757%201.456a1.636%201.636%200%200%201-.885%201.383zm-18.495%206.664%203.536-1.824v.008a3.098%203.098%200%200%200%201.84-2.88l.184-3.999-5.016-3.2-.544%2011.895z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M208.059%20247.47h-1.6c.005-8.243%206.684-14.926%2014.927-14.934v1.599c-7.358.014-13.318%205.977-13.327%2013.335z%22%20fill%3D%22%238FE7C3%22%2F%3E%3Cpath%20d%3D%22M593.371%20308.549h7.663l3.063-11.487h-6.087a2.048%202.048%200%200%200-1.975%201.512l-2.664%209.975z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20opacity%3D%22.75%22%20d%3D%22m604.097%20297.062-1.255%204.696-7.439%206.791h-2.032l1.216-4.535%209.51-6.952z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M602.362%20298.358a1.793%201.793%200%200%201%201.728-1.328h7.072c.81.002%201.518.546%201.728%201.328l2.704%2010.159h-15.935l2.703-10.159z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22M619.905%20315.46s-11.519.8-18.823%2014.398a39.248%2039.248%200%200%200-2.399-16.526%2036.793%2036.793%200%200%200-17.527%2011.199%2039.442%2039.442%200%200%200-7.2-15.854%2037.247%2037.247%200%200%200-11.879%2012.334%2050.73%2050.73%200%200%200-10.791-16.142%2039.87%2039.87%200%200%200-7.2%2011.119c-5.704-13.894-16.703-15.654-16.703-15.654a27.992%2027.992%200%200%200-5.352%2010.127%2051.148%2051.148%200%200%200-11.823-9.599%2041.341%2041.341%200%200%200-4.56%2016.326c-7.719-9.863-17.127-9.759-17.127-9.759a28.3%2028.3%200%200%200-3.199%2019.197%2040.07%2040.07%200%200%200-20.607-5.599%2036.887%2036.887%200%200%200%204.272%2019.997%2050.953%2050.953%200%200%200-17.551-2.879%2040.734%2040.734%200%200%200%203.832%2014.782c-11.632-2.912-23.047.416-23.047.416a41.204%2041.204%200%200%200%208.719%2015.197%2039.51%2039.51%200%200%200-17.358%203.448s4.799%2015.318%2019.518%2020.693l.344.12A44.601%2044.601%200%200%200%20428.653%20400H639.96v-70.006a34.69%2034.69%200%200%200-16.735%205.727%2038.57%2038.57%200%200%200-3.32-20.261z%22%20fill%3D%22%231B7064%22%2F%3E%3Cpath%20d%3D%22M620.657%20363.893a39.188%2039.188%200%200%200-3.2-15.726s-6.159.28-12.455%205.664a51.032%2051.032%200%200%200-4.448-13.791%2039.168%2039.168%200%200%200-9.303%207.111c-1.272-7.838-5.6-11.814-5.6-11.814a28.345%2028.345%200%200%200-12.167%207.551c-2.928-7.639-8.215-10.662-8.215-10.662a28.378%2028.378%200%200%200-9.968%209.598%2050.065%2050.065%200%200%200-6.767-9.31%2041.325%2041.325%200%200%200-9.224%2014.542%2039.385%2039.385%200%200%200-10.263-13.303%2037.173%2037.173%200%200%200-7.64%2011.343%2038.914%2038.914%200%200%200-16.335-8.343%2021.735%2021.735%200%200%200-2.975%2010.734c-8.456-4.703-15.471-2.791-15.471-2.791a27.778%2027.778%200%200%200-.8%2010.398%2038.584%2038.584%200%200%200-11.008.424s-.96%205.216%201.944%2011.831a50.518%2050.518%200%200%200-19.343%205.047%2039.994%2039.994%200%200%200%208.248%2010.398%2038.994%2038.994%200%200%200-16.207%207.695s1.6%205.016%207.295%209.447H639.96V357.35c-3.096-.344-11.055-.376-19.303%206.543z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22m615.61%20298.766%2015.663-1.72a5.384%205.384%200%200%201%205.703%203.696l2.792%208.607h-30.094l1.24-6.287a5.376%205.376%200%200%201%204.696-4.296z%22%20fill%3D%22%23002D2D%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h640v400H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" class="object-cover" data-v-573335c0></div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"D:/Wss/meuscc/notes/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-cloud-surface[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(230,240,240,var(--tw-bg-opacity))}.bg-primary[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity))}.bg-transparent[data-v-573335c0]{background-color:transparent}.hover\\:bg-primary-400[data-v-573335c0]:hover{--tw-bg-opacity:1;background-color:rgba(77,231,168,var(--tw-bg-opacity))}.rounded[data-v-573335c0]{border-radius:.25rem}.flex[data-v-573335c0]{display:flex}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-bold[data-v-573335c0]{font-weight:700}.font-light[data-v-573335c0]{font-weight:300}.h-1[data-v-573335c0]{height:.25rem}.text-5xl[data-v-573335c0]{font-size:3rem;line-height:1}.text-2xl[data-v-573335c0]{font-size:1.5rem;line-height:2rem}.leading-normal[data-v-573335c0]{line-height:1.5}.m-8[data-v-573335c0]{margin:2rem}.my-3[data-v-573335c0]{margin-bottom:.75rem;margin-top:.75rem}.mb-8[data-v-573335c0]{margin-bottom:2rem}.max-w-sm[data-v-573335c0]{max-width:24rem}.min-h-screen[data-v-573335c0]{min-height:100vh}.object-cover[data-v-573335c0]{-o-object-fit:cover;object-fit:cover}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.relative[data-v-573335c0]{position:relative}.text-sky-darkest[data-v-573335c0]{--tw-text-opacity:1;color:rgba(1,42,53,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.w-16[data-v-573335c0]{width:4rem}@media (min-width:768px){.md\\:flex[data-v-573335c0]{display:flex}.md\\:text-3xl[data-v-573335c0]{font-size:1.875rem;line-height:2.25rem}.md\\:text-15xl[data-v-573335c0]{font-size:15rem;line-height:1}.md\\:my-6[data-v-573335c0]{margin-bottom:1.5rem;margin-top:1.5rem}.md\\:min-h-screen[data-v-573335c0]{min-height:100vh}.md\\:pb-0[data-v-573335c0]{padding-bottom:0}.md\\:w-1\\/2[data-v-573335c0]{width:50%}}@media (prefers-color-scheme:dark){.dark\\:bg-sky-darker[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.dark\\:bg-primary[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity))}.dark\\:text-sky-surface[data-v-573335c0]{--tw-text-opacity:1;color:rgba(229,249,255,var(--tw-text-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-cloud-lighter[data-v-573335c0]{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useMeta({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}img{border-style:solid;max-width:100%;height:auto}img{display:block;vertical-align:middle}`
    }
  ]
})

const __returned__ = { props, useMeta: __vite_ssr_import_0__.useMeta }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-cloud-surface dark:bg-sky-darker text-sky-darkest dark:text-sky-surface" }, _attrs))
  } data-v-0914425d><div class="min-h-screen md:flex" data-v-0914425d><div class="flex items-center justify-center w-full max-w-full" data-v-0914425d><div class="max-w-full lg:max-w-10xl m-8 p-4" data-v-0914425d><div class="md:max-w-sm text-5xl font-bold dark:text-white md:text-15xl" data-v-0914425d>${
    $props.statusCode
  }</div><div class="w-16 h-1 my-3 bg-primary md:my-6" data-v-0914425d></div><div class="mb-8 text-2xl font-light leading-normal dark:text-cloud-lighter md:text-3xl max-w-sm" data-v-0914425d>${
    $props.description
  }</div></div></div><div class="relative w-full pb-full md:flex md:pb-0 md:min-h-screen md:w-1/2" data-v-0914425d><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22640%22%20height%3D%22400%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Cpath%20d%3D%22M0%200v399.968h640V0H0z%22%20fill%3D%22%23BBEDE1%22%2F%3E%3Cpath%20d%3D%22M259.72%20188.385a26.005%2026.005%200%200%200-5.896.68%2066.547%2066.547%200%200%200-38.379-53.917c-21.457-9.887-62.933%202.352-62.933%202.352s-22.002%207-33.002%2024c-11.001%2017-9.99%2048.795-9.99%2048.795h175.8c-1.971-12.612-12.834-21.909-25.6-21.91z%22%20fill%3D%22%23F5F9F9%22%2F%3E%3Cpath%20d%3D%22M564.68%20181.297c-14.584%200-28.92%2010.208-42.288%2014.455l-5.648-7.447a.952.952%200%200%200-1.528%200l-6.944%209.167c-21.776-1.136-34.16-11.703-50.48-11.703-17.256%200-33.76%2015.895-58.152%2015.895-24.392%200-32.96%2019.118-50.04%2019.118s-31.944-23.742-47.424-23.742c-14.328%200-27.464%2011.751-42.944%2011.751-14.616-.008-19.232-12.647-32.032-13.607l-5.2-6.855a.952.952%200%200%200-1.528%200l-4.344%205.727c-8.688-1.928-15.2-5.799-23.2-5.799-10.656%200-29.16%2013.199-38.728%2013.199-14.072%200-24.096-4.184-35.416-7.12L0%20399.968h640V205.879c-10.616-3.351-20.088-11.919-31.472-11.919-16.84%200-31.048-12.663-43.848-12.663z%22%20fill%3D%22%235DBFA5%22%2F%3E%3Cpath%20d%3D%22M355.408%20302.272c-.416-2.88-1.6-7.039-5.128-7.039-1.936%200-3.496%201.272-4.704%202.895l-2.072-9.783c-.8-3.896-2.312-3.927-3.304-.08l-2.344%209.015c-12.568-6.103-28.328-15.702-50.728-15.702-22.608%200-34.16-26.854-48.432-32.798-1.104-2.28-2.912-4.159-5.904-4.159h-.536c-.944-3.048-2.848-6.112-6.664-6.112-.876%200-1.745.165-2.56.488l-1.768-6.815-2.4-.872%201.816-1.256-1.136-4.472c-1-3.848-2.488-3.808-3.312.08l-1.256%205.944a6.314%206.314%200%200%200-4.08-1.36%208.531%208.531%200%200%200-4.848%201.552l-1.304-6.136c-.8-3.888-2.312-3.928-3.312-.08l-1.6%206.144-.728-3.464c-.8-3.888-2.312-3.92-3.312-.072l-1.6%206.159c-14.024-9.031-25.072-31.773-36.8-31.773a15.304%2015.304%200%200%201-4.8-.736l-2.104-9.975c-.8-3.888-2.312-3.92-3.312-.072l-.448%201.712-1.88-8.88c-.8-3.887-2.312-3.927-3.312-.08l-2.296%208.848c-3.832-2.136-8.8-3.8-16.336-3.8C98.508%20183.5%2075.506%20157.5%2052.504%20165%2016.501%20153%2010.501%20135-1.5%20141v259l437.028-41.628s-43.704-54.46-80.12-56.1z%22%20fill%3D%22%231B7064%22%2F%3E%3Cpath%20d%3D%22M148.688%20235.557a4.497%204.497%200%200%200-2.4-1.599l24.952%2064.554h25.128l-47.68-62.955z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20d%3D%22M141.504%20235.557%2093.8%20298.504h77.456l-24.952-64.554a4.495%204.495%200%200%200-4.8%201.607z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M114.12%20304.224s-6.088-20.863-19.12-20.863-13.04%2020.863-13.04%2020.863h32.16zm76.216-22.103c-6.976%200-11.96%205.976-15.088%2011.528l-3.768-17.823c-1.32-6.256-3.72-6.311-5.336-.12l-5.6%2021.718c-1.152-4.511-4-10.127-11.152-10.127-11.92%200-17.488%2015.679-17.488%2015.679h71.504s-.032-20.855-13.072-20.855z%22%20fill%3D%22%231B7064%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M438.24%20334.302c6.56-2.784%2012.344-5.232%2020.96-5.232%208%200%2012.2%205.672%2014.4%2012.503H640v58.395H0l75.08-130.069a20.59%2020.59%200%200%201%204.528-.864%202.756%202.756%200%200%201%200-.368c.272-4.688%206.104-6.2%2011.272-5.896%205.168.304%206.024%202.488%205.88%205.032v.064h.528c5.336%200%209.168%201.984%209.168%204.999%200%203.016-1.792%204.872-4.8%205.784%202.896.736%204.272%202.448%204.272%204.576a3.739%203.739%200%200%201-1.088%202.583c3.4.304%205%201.88%205%203.92a3.278%203.278%200%200%201-1.6%202.712%2011.36%2011.36%200%200%201%203.728%201.376%209.477%209.477%200%200%201%205.496-1.6c4.904%200%208.536%201.768%209.088%204.32a9.508%209.508%200%200%201%205.272-1.48c5.336%200%209.168%202.08%209.168%204.999a5.679%205.679%200%200%201-.8%203.064%2014%2014%200%200%201%201.76-.12c6.376%200%209.944%202.456%209.944%205.144a5.073%205.073%200%200%201-.12%201.056%2017.668%2017.668%200%200%201%202.496-.176c5.264%200%208.584%202.007%209.8%205.055a3.347%203.347%200%200%201%202.032-.664c2.088%200%203.68%202.208%203.944%205.6a3.32%203.32%200%200%201%202.8-1.464c1.856%200%203.32%201.76%203.808%204.536a3.032%203.032%200%200%201%203.44-1.248%202.815%202.815%200%200%201%202.088%202.327c1.08-.799%202.752-1.343%205.248-1.343a9.105%209.105%200%200%201%204.24.848%202.894%202.894%200%200%201%202.968-.728c1.776.6%202.576%202.095%201.88%204.159-.117.35-.255.692-.416%201.024a110.414%20110.414%200%200%200%2019.736%201.776c13.843%200%2035.186.356%2056.889.717h.002c22.446.374%2045.276.755%2060.589.755%2014.698%200%2023.308%202.859%2032.081%205.772l.418.139.581.192%201.608-6.007c1.672-6.424%204.16-6.368%205.528.12l1.224%205.775%202.656-10.239c1.672-6.423%204.16-6.367%205.528.12l2.168%2010.239a14.296%2014.296%200%200%201%208.104-2.575%2010.4%2010.4%200%200%201%208.944%204.567l1.72-6.615%203.944-1.464-3.024-2.096%201.92-7.495c1.664-6.416%204.152-6.36%205.52.128l3.336%2015.758c3.192-4.343%207.536-8.047%2013.136-8.047%204.52%200%207.528%202.456%209.528%205.656zM76.536%20294.657c2.61.346%205.239.52%207.871.52.824-.003%201.647.048%202.464.152l-4.087-7.664c-.94.22-1.9.349-2.864.384a7.66%207.66%200%200%201-3%202.472c.151.715.2%201.447.144%202.176a5.237%205.237%200%200%201-.528%201.96zm10.648-3.48-2.4-4.384a3.31%203.31%200%200%200%201.032-1.176%209.42%209.42%200%200%200%201.696.336l-.328%205.224zm1.376-5.16-.264%207.2.872%201.584%204.088-7.088a5.6%205.6%200%200%201-3.136-1.864%204.98%204.98%200%200%201-1.256.168h-.304zm4.24%2010.935a23.146%2023.146%200%200%200-1.88-.704l4.112-8.167c.767.097%201.538.15%202.312.16a3.998%203.998%200%200%200-.632%202.184c0%201.192.8%202.08%202.127%202.639-2.703.8-5.24%202.152-6.04%203.848v.04zm25.096%2010.151a19.588%2019.588%200%200%201%203.384-1.263l.176-2.696c-1.571.38-3.184.562-4.8.544a7.202%207.202%200%200%201%201.24%203.415zm4.488-1.535.104-2.736a9.541%209.541%200%200%200%201.256-.584%204.904%204.904%200%200%200%201.88%202.872%2018.707%2018.707%200%200%200-3.224.408l-.016.04zm17.88%2012.551c.84.08%201.704.152%202.576.208v-.04c-.003-.044-.008-.089-.012-.131-.006-.067-.012-.129-.012-.173a8.124%208.124%200%200%201%20.616-3.112c-.992.134-1.991.201-2.992.2h-.056a7.98%207.98%200%200%201%20.088%201.928c-.027.38-.097.755-.208%201.12z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M66.21%20273.301c6.56-2.783%203.18%201.845%2011.797%201.845%208%200-17.702%2023.022-15.502%2029.854l13.001%2011-39.711%2022.968L0%20342.5V339c0%201-.008-5.878%200-6v-33c-.036%201.107%200-1.689%200-3.936V276.5c0-.5-.333-2.611%200-2.5l-4.021-4.53c1.672-6.424%204.16-6.368%205.528.12l1.224%205.775%202.656-10.239c1.672-6.423%204.16-6.367%205.528.12l2.168%2010.239a14.304%2014.304%200%200%201%208.104-2.576%2010.402%2010.402%200%200%201%208.944%204.568l1.72-6.615%203.944-1.464-3.024-2.096%201.92-7.495c1.664-6.416%204.152-6.36%205.52.128l3.336%2015.758c3.192-4.343%207.536-8.047%2013.136-8.047%204.52%200%207.528%202.456%209.528%205.655z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M0%20370.5V381c-.157%206%20.156%207.602.156%207.602S0%20392.5%200%20395.5l.156%204.197-.156.271h184.96c.664-.68%201.016-1.112%201.016-1.112s-4.608-8.807-17.816-9.983a34.089%2034.089%200%200%200%205.824-12.455s-6.104-4.159-15.608-1.976a34.086%2034.086%200%200%200%207.152-12.255%2032.466%2032.466%200%200%200-15.928-2.359%2033.806%2033.806%200%200%200%201.336-11.48s-6.872-2.191-15.2%202.4c.767-3.617.934-7.335.496-11.007%200%200-7.928-1.984-16.616%204.408a33.977%2033.977%200%200%200-2.8-13.911s-5.368.248-10.864%204.935a44.54%2044.54%200%200%200-3.872-11.999%2034.043%2034.043%200%200%200-8.112%206.192c-1.112-6.84-4.912-10.311-4.912-10.311a24.8%2024.8%200%200%200-10.608%206.519c-2.56-6.663-7.2-9.303-7.2-9.303a24.794%2024.794%200%200%200-8.672%208.423%2043.756%2043.756%200%200%200-5.896-8.119%2036.012%2036.012%200%200%200-5.114%206.588%2035.968%2035.968%200%200%200-5.277-6.859%2043.755%2043.755%200%200%200-5.896%208.119A24.795%2024.795%200%200%200%2031.721%20316s-4.64%202.64-7.2%209.303a24.8%2024.8%200%200%200-10.608-6.519s-3.8%203.471-4.912%2010.311a34.044%2034.044%200%200%200-8.112-6.192C-.5%20326.5%200%20326.78%200%20331v4c0%205-.056%202.218%200%207v24c-.157%204.5%200%204.5%200%204.5z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M555.2%2043.62a41.955%2041.955%200%200%200-58.648%2026.694H640V0h-57.528A68.095%2068.095%200%200%200%20555.2%2043.62zm-531.405%2013a41.955%2041.955%200%200%201%2058.648%2026.694H-61.005V13h57.528a68.098%2068.098%200%200%201%2027.272%2043.62z%22%20fill%3D%22%23F5F9F9%22%2F%3E%3Cpath%20d%3D%22M283.2%20259.571a7.13%207.13%200%200%200-3.816-2.584l39.92%20103.272h40.2L283.2%20259.571z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22m271.728%20259.571-76.304%20100.688h123.904l-39.92-103.272a7.202%207.202%200%200%200-7.68%202.584z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20d%3D%22M195.424%20360.259h70.232l36.056-46.116-11.976-30.63-56.272%2026.55-38.04%2050.196z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M344.856%20344.908c-5.528%200-9.944%202.752-13.304%206.168-2.456-6.072-7.2-11.959-16.456-11.959-8.968%200-15.688%205.543-20.288%2011.423a11.151%2011.151%200%200%200-6.072-1.752%2010.944%2010.944%200%200%200-7.92%203.328%2011.52%2011.52%200%200%200-10.032-3.184%2019.54%2019.54%200%200%200-3.584-1.36%205.088%205.088%200%200%200%202.624-4.592c0-2.143-2.864-5.743-8.088-5.823v-.168c-.272-4.68-4.552-6.24-8.312-6.024a8.172%208.172%200%200%200-1.176.152c-.272-3.423-2.272-6.399-6.32-6.167a15.178%2015.178%200%200%200-3.944.728c-2.024-2.12-6.648-3.528-9.936-3.752.008-.12.008-.24%200-.36-.272-4.679-6.112-6.151-11.28-5.855-5.168.296-6.032%202.487-5.888%205.031v.064h-.528c-5.32%200-9.152%202.08-9.16%204.984a10.619%2010.619%200%200%200-2.608-.32c-5.336%200-9.168%202.088-9.168%204.999%200%204.504%203.92%206.448%2010.088%206.448.748.001%201.495-.06%202.232-.184a3.88%203.88%200%200%200%201.032%202.016c-2.616.232-4.168%201.216-4.736%202.6h-.36c-14.288%200-14.288%2022.854-14.288%2022.854l172.152.04s-.008-19.335-14.68-19.335zm-120.392-.872-.328-5.223a9.326%209.326%200%200%200%201.688-.336%203.34%203.34%200%200%200%201.04%201.176l-2.4%204.383zm16.336%205.392.944-4.536a19.276%2019.276%200%200%201-3.976-.464l1.344%203.328c.443.429.811.929%201.088%201.48l.202.062c.135.041.27.082.398.13zm-19.272-10.711c.409.11.832.166%201.256.168h.296l.264%207.199-.864%201.6-4.08-7.103a5.644%205.644%200%200%200%203.128-1.864zm7.328%201.816-4.288%208.047.072%202.592a9.354%209.354%200%200%201%203.496%201.984c.2-.232.4-.464.616-.688a5.127%205.127%200%200%201-.44-1.768c-.144-2.528.448-4.712%204.208-4.927a10.019%2010.019%200%200%201%204.896.871l-.944-2.527a8.8%208.8%200%200%201-4.752-3.2%2015.185%2015.185%200%200%201-2.864-.384zm13.456%207.095.504-2.727h.32a8.268%208.268%200%200%200%201.936%201.399%209.46%209.46%200%200%200-2.76%201.328zm-27.376-4.343c0%201.327-.96%202.271-2.6%202.815a33.228%2033.228%200%200%201%205.32%206.896%206.299%206.299%200%200%201%203.199-1.96l.104-1.464-4.351-8.631c-.765.094-1.534.144-2.304.152.415.655.634%201.416.632%202.192z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22m610.304%2065.235-15.152%20112.879H640V40.277h-9.12c-10.016%200-18.632%2010.455-20.576%2024.958z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M626.344%2071.138%20611.2%20183.986H640V47.925c-6.856%203.543-12.176%2012.206-13.656%2023.213z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22m569.272%20184.969-15.152%2076.458H640v-93.361h-50.152c-10.015.001-18.632%207.08-20.576%2016.903z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22m585.312%20192.169-15.144%2076.458H640v-93.361h-34.104c-10.015.003-18.634%207.08-20.584%2016.903z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22m540.08%20260.827-8.176%208.175H497.96l-3.44-3.431a12.441%2012.441%200%200%200-8.8-3.648h-20.44l-2.08-2.072a11.652%2011.652%200%200%200-8.224-3.4H401.6a9.716%209.716%200%200%200-6.864%202.84l-2.912%202.912a5.078%205.078%200%200%200-1.496%203.6v6.039a12.424%2012.424%200%200%200%203.64%208.8l23.424%2023.422a22.796%2022.796%200%200%200%206.688%2016.134l32.72%2032.718a22.863%2022.863%200%200%200-21.744%2015.783l-10.168%2031.269H640V254.724h-85.176a20.88%2020.88%200%200%200-14.744%206.103z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M483.752%20364.579a13.991%2013.991%200%200%200-13.72%2011.271l-4.8%2024.118h44.864v-35.389h-26.344z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M437.2%20379.969c-1.08-8.719-7.128-15.558-7.128-15.558a28.06%2028.06%200%200%200-7.4%2011.287%2026.242%2026.242%200%200%200-10.04-6.992s-3.272%203.624-3.2%2010.103a26.176%2026.176%200%200%200-9.28-1.279s-2.256%206.783%203.376%2014.398a34.098%2034.098%200%200%200-12.848%201.6%2026.103%2026.103%200%200%200%203.552%206.4h67.264v-19.959H437.2z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M456.8%20357.7h.384a6.665%206.665%200%200%200%206.4-4.8H456.8a22.863%2022.863%200%200%200-21.744%2015.783l-10.168%2031.285h5.048l9.72-29.797A18.064%2018.064%200%200%201%20456.8%20357.7z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M580.976%20254.66h13.296l5.32-19.943h-10.576a3.552%203.552%200%200%200-3.424%202.632l-4.616%2017.311z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20opacity%3D%22.75%22%20d%3D%22m599.592%20234.717-2.176%208.16-12.912%2011.783h-3.528l2.096-7.872%2016.52-12.071z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M596.592%20237.021a3.104%203.104%200%200%201%203-2.304h12.224a3.097%203.097%200%200%201%202.992%202.304l4.704%2017.639h-27.624l4.704-17.639z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22M601.544%20254.66h7.655l3.064-11.479h-6.087c-.925%200-1.734.619-1.976%201.512l-2.656%209.967z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20opacity%3D%22.75%22%20d%3D%22m612.263%20243.173-1.248%204.695-7.439%206.792h-2.032l1.208-4.536%209.511-6.951z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M610.544%20244.501a1.775%201.775%200%200%201%201.72-1.328h7.04a1.783%201.783%200%200%201%201.728%201.328l2.712%2010.159h-15.912l2.712-10.159z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22M623.776%20244.877a5.366%205.366%200%200%200-4.688%204.295l-1.104%205.552h-63.2a20.88%2020.88%200%200%200-14.744%206.103l-8.176%208.176h3.2a8.62%208.62%200%200%200%206.096-2.52l2.256-2.256a16.004%2016.004%200%200%201%2011.352-4.704H640v-16.342h-.552l-15.672%201.696z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M483.656%20364.467h11.152l4.464-16.727H490.4a2.977%202.977%200%200%200-2.872%202.208l-3.872%2014.519z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20opacity%3D%22.75%22%20d%3D%22m499.272%20347.74-1.824%206.848-10.832%209.879h-2.96l1.76-6.6%2013.856-10.127z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M496.8%20349.676a2.601%202.601%200%200%201%202.512-1.936h10.208a2.592%202.592%200%200%201%202.512%201.936L516%20364.467h-23.2l4-14.791z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22M501.992%20368.578a13.983%2013.983%200%200%200-13.72%2011.271l-4%2020.119h44.072v-31.39h-26.352z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M550.4%20315.247h13.304l5.312-19.942H558.4a3.551%203.551%200%200%200-3.432%202.631l-4.568%2017.311z%22%20fill%3D%22%2333E39B%22%2F%3E%3Cpath%20opacity%3D%22.75%22%20d%3D%22m568.984%20295.305-2.176%208.159-12.912%2011.783h-3.528l2.104-7.871%2016.512-12.071z%22%20fill%3D%22%2399F1CD%22%2F%3E%3Cpath%20d%3D%22M565.992%20297.576a3.097%203.097%200%200%201%202.992-2.304h12.224c1.406%200%202.637.945%203%202.304l4.704%2017.599h-27.624l4.704-17.599z%22%20fill%3D%22%2300DC82%22%2F%3E%3Cpath%20d%3D%22M593.464%20310.767a3.28%203.28%200%200%200-3.496-2.263l-9.6%201.048a3.303%203.303%200%200%200-2.88%202.639l-.472%202.4h-44.28a20.984%2020.984%200%200%200-20.584%2016.903l-13.6%2068.498H640v-85.425h-45.304l-1.232-3.8z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22m543.504%20335.47-12.8%2064.498H640v-81.401h-75.912c-10.016%200-18.637%207.078-20.584%2016.903z%22%20fill%3D%22%23002D2D%22%2F%3E%3Cpath%20d%3D%22M626.792%20334.685a44.712%2044.712%200%200%200-10.312-8.391%2035.982%2035.982%200%200%200-4%2014.239c-6.712-8.56-14.88-8.512-14.88-8.512a24.678%2024.678%200%200%200-2.856%2016.751A34.903%2034.903%200%200%200%20576.8%20343.9a32.15%2032.15%200%200%200%203.728%2017.423%2044.436%2044.436%200%200%200-15.312-2.512%2035.333%2035.333%200%200%200%203.344%2012.895c-10.152-2.536-20.112.368-20.112.368A36.05%2036.05%200%200%200%20556%20385.361a34.532%2034.532%200%200%200-15.144%203.008%2032.606%2032.606%200%200%200%207.2%2011.599H640v-69.435a18.107%2018.107%200%200%200-8.536-4.687%2024.488%2024.488%200%200%200-4.672%208.839z%22%20fill%3D%22%231B7064%22%2F%3E%3Cpath%20d%3D%22M634.232%20344.165a32.482%2032.482%200%200%200-6.664%209.895%2033.898%2033.898%200%200%200-14.232-7.264%2018.964%2018.964%200%200%200-2.592%209.36c-7.376-4.096-13.496-2.4-13.496-2.4a24.082%2024.082%200%200%200-.728%209.071%2033.301%2033.301%200%200%200-9.6.368%2019.27%2019.27%200%200%200%201.688%2010.319%2044.095%2044.095%200%200%200-16.872%204.4%2034.795%2034.795%200%200%200%207.2%209.063%2034.016%2034.016%200%200%200-14.144%206.72%2018.067%2018.067%200%200%200%204.184%206.303H640v-49.58a31.6%2031.6%200%200%200-5.768-6.255zM494.52%20265.578a12.44%2012.44%200%200%200-8.8-3.647h-4.488a3.328%203.328%200%200%200-2.4-2.216l-5.08-1.168a3.328%203.328%200%200%200-4%202.592l-.152.8h-4.32l-2.08-2.088a11.648%2011.648%200%200%200-8.224-3.4H401.6a9.73%209.73%200%200%200-6.864%202.84l-2.912%202.912a5.055%205.055%200%200%200-1.424%203.375h.752a9.922%209.922%200%200%200%207.032-2.919%204.9%204.9%200%200%201%203.472-1.432h53.352a6.83%206.83%200%200%201%204.8%202l3.472%203.471h22.48a9.337%209.337%200%200%201%203.776%201.312%208.241%208.241%200%200%200%203.92.968h4.504l-3.44-3.4z%22%20fill%3D%22%23003C3C%22%2F%3E%3Cpath%20d%3D%22M460.288%20264.379a19.869%2019.869%200%200%201-2.688-9.911v-39.517c0-4-1.424-8.744-3.056-12.879a28.999%2028.999%200%200%200-12.504-14.399l-3-1.736a13.926%2013.926%200%200%200-6.968-1.864H428a4.174%204.174%200%200%201-3.912-2.704c-2.32-6.135-9.144-20.686-21.928-21.534l-.352-1.552s5.808-19.414%2025.392-19.414%2029.128%2011.103%2029.128%2020.102c0%209.368-4.8%2014.551-10.816%2017.383a.56.56%200%200%200%20.216%201.064c6.656.192%2017.264-8.112%2017.264-18.447%200-13.599-12.312-29.141-36.16-29.141-26.584%200-36.928%2021.598-36.928%2029.349v2.24a4.248%204.248%200%200%200-2.36%202.832l-.544%202.176-12.768%2013.559%202.664%202.879a9.648%209.648%200%200%200%207.088%203.104h1.76a31.01%2031.01%200%200%201-2.824%2013.095c5.872-3.616%209.144-14.111%209.144-14.111l5.64-1.808s6.2%2013.911%206.2%2028.214c0%207.144%204.48%2014.911%204.48%2014.911v9.399a18.087%2018.087%200%200%200%201.488%207.2l1.288%202.991a20.708%2020.708%200%200%201%201.696%208.216v10.191h4.288v-9.215a16.801%2016.801%200%200%200-.688-4.752l-.744-2.496v-15.199s4.064%204.288%209.448%205.448v9.743l-.8%202.48a13.499%2013.499%200%200%200-.624%204.064v9.895h4.112v-8.679c0-1.8.472-3.568%201.368-5.128l1.848-3.2%201.768%204.504c.6%201.529.91%203.157.912%204.799v7.704h4.288V251.18a10.758%2010.758%200%200%201-2.68-6.616v-5.703s8.208-1.408%2012.152-5.36c2.144%205.008%205.768%2016.983%205.768%2016.983v5.887a14.72%2014.72%200%200%200%201.128%205.528l3.384%208.239h5.848l-3.344-5.759z%22%20fill%3D%22%23002D2D%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h640v400H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" class="object-cover" data-v-0914425d></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"D:/Wss/meuscc/notes/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-cloud-surface[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(230,240,240,var(--tw-bg-opacity))}.bg-primary[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity))}.flex[data-v-0914425d]{display:flex}.items-center[data-v-0914425d]{align-items:center}.justify-center[data-v-0914425d]{justify-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-bold[data-v-0914425d]{font-weight:700}.font-light[data-v-0914425d]{font-weight:300}.h-1[data-v-0914425d]{height:.25rem}.text-5xl[data-v-0914425d]{font-size:3rem;line-height:1}.text-2xl[data-v-0914425d]{font-size:1.5rem;line-height:2rem}.leading-normal[data-v-0914425d]{line-height:1.5}.m-8[data-v-0914425d]{margin:2rem}.my-3[data-v-0914425d]{margin-bottom:.75rem;margin-top:.75rem}.mb-8[data-v-0914425d]{margin-bottom:2rem}.max-w-sm[data-v-0914425d]{max-width:24rem}.max-w-full[data-v-0914425d]{max-width:100%}.min-h-screen[data-v-0914425d]{min-height:100vh}.object-cover[data-v-0914425d]{-o-object-fit:cover;object-fit:cover}.p-4[data-v-0914425d]{padding:1rem}.relative[data-v-0914425d]{position:relative}.text-sky-darkest[data-v-0914425d]{--tw-text-opacity:1;color:rgba(1,42,53,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-0914425d]{width:100%}.w-16[data-v-0914425d]{width:4rem}@media (min-width:768px){.md\\:flex[data-v-0914425d]{display:flex}.md\\:text-3xl[data-v-0914425d]{font-size:1.875rem;line-height:2.25rem}.md\\:text-15xl[data-v-0914425d]{font-size:15rem;line-height:1}.md\\:my-6[data-v-0914425d]{margin-bottom:1.5rem;margin-top:1.5rem}.md\\:max-w-sm[data-v-0914425d]{max-width:24rem}.md\\:min-h-screen[data-v-0914425d]{min-height:100vh}.md\\:pb-0[data-v-0914425d]{padding-bottom:0}.md\\:w-1\\/2[data-v-0914425d]{width:50%}}@media (min-width:1024px){.lg\\:max-w-10xl[data-v-0914425d]{max-width:104rem}}@media (prefers-color-scheme:dark){.dark\\:bg-sky-darker[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.dark\\:text-sky-surface[data-v-0914425d]{--tw-text-opacity:1;color:rgba(229,249,255,var(--tw-text-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-cloud-lighter[data-v-0914425d]{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useMeta({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}`
    }
  ]
})

const __returned__ = { props, useMeta: __vite_ssr_import_0__.useMeta }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-cloud-surface dark:bg-sky-darker text-sky-darkest dark:text-sky-surface" }, _attrs))
  } data-v-1da4697d><div class="min-h-screen md:flex" data-v-1da4697d><div class="flex items-center justify-center w-full max-w-full" data-v-1da4697d><div class="max-w-full lg:max-w-10xl m-8 p-4" data-v-1da4697d><div class="md:max-w-sm text-5xl font-bold dark:text-white md:text-15xl" data-v-1da4697d>${
    $props.statusCode
  }</div><div class="w-16 h-1 my-3 bg-primary md:my-6" data-v-1da4697d></div><div class="mb-8 text-2xl font-light leading-normal dark:text-cloud-lighter md:text-3xl max-w-sm" data-v-1da4697d>${
    $props.description
  }</div><div class="mb-8 text-sm leading-normal dark:text-cloud-lighter md:text-lg white overflow-scroll max-w-full" data-v-1da4697d>${
    $props.stack
  }</div></div></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"D:/Wss/meuscc/notes/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-cloud-surface[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(230,240,240,var(--tw-bg-opacity))}.bg-primary[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,220,130,var(--tw-bg-opacity))}.flex[data-v-1da4697d]{display:flex}.items-center[data-v-1da4697d]{align-items:center}.justify-center[data-v-1da4697d]{justify-content:center}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-bold[data-v-1da4697d]{font-weight:700}.font-light[data-v-1da4697d]{font-weight:300}.h-1[data-v-1da4697d]{height:.25rem}.text-5xl[data-v-1da4697d]{font-size:3rem;line-height:1}.text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}.text-sm[data-v-1da4697d]{font-size:.875rem;line-height:1.25rem}.leading-normal[data-v-1da4697d]{line-height:1.5}.m-8[data-v-1da4697d]{margin:2rem}.my-3[data-v-1da4697d]{margin-bottom:.75rem;margin-top:.75rem}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.max-w-sm[data-v-1da4697d]{max-width:24rem}.max-w-full[data-v-1da4697d]{max-width:100%}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-scroll[data-v-1da4697d]{overflow:scroll}.p-4[data-v-1da4697d]{padding:1rem}.text-sky-darkest[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(1,42,53,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-1da4697d]{width:100%}.w-16[data-v-1da4697d]{width:4rem}@media (min-width:768px){.md\\:flex[data-v-1da4697d]{display:flex}.md\\:text-3xl[data-v-1da4697d]{font-size:1.875rem;line-height:2.25rem}.md\\:text-lg[data-v-1da4697d]{font-size:1.125rem;line-height:1.75rem}.md\\:text-15xl[data-v-1da4697d]{font-size:15rem;line-height:1}.md\\:my-6[data-v-1da4697d]{margin-bottom:1.5rem;margin-top:1.5rem}.md\\:max-w-sm[data-v-1da4697d]{max-width:24rem}}@media (min-width:1024px){.lg\\:max-w-10xl[data-v-1da4697d]{max-width:104rem}}@media (prefers-color-scheme:dark){.dark\\:bg-sky-darker[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,53,67,var(--tw-bg-opacity))}.dark\\:text-sky-surface[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(229,249,255,var(--tw-text-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-cloud-lighter[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(178,204,204,var(--tw-text-opacity))}}";
}


// --------------------
// Request: /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/app-component.mjs
// Parents: 
// - D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry ($id_4a4c4d72)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_9f94ed6f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/app-component.mjs ($id_9f94ed6f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /styles/index.ts ($id_dae6cd41)
// - /index.tsx ($id_d4445df8)
// - /ytb_bg.ts ($id_4f13f3e8)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/styles/index.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/index.tsx");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/ytb_bg.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const route = __vite_ssr_import_1__.useRoute();
    __vite_ssr_import_5__.onMounted(() => {
      if ("undefined" !== "undefined") {
        __vite_ssr_import_4__.createNav();
        __vite_ssr_import_6__.default();
        __vite_ssr_import_3__.createStyles();
      }
    });
    const __returned__ = { route };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __vite_ssr_import_7__.resolveComponent("NuxtPage");
  _push(`<!--[--><div id="root"></div><div class="dark"><!-- Markup shared across all pages, ex: NavBar -->`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div><!--]-->`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Wss/meuscc/notes/app.vue"]]);
;
}


// --------------------
// Request: /styles/index.ts
// Parents: 
// - /app.vue ($id_2b46e842)
// - /index.tsx ($id_d4445df8)
// Dependencies: 
// - /styles/index.scss ($id_682f17ee)
// - /themes/create_theme_variables.ts ($id_501018ef)
// - /themes/variables.ts ($id_9de6835f)
// - /themes/themes.ts ($id_bf3b438d)
// --------------------
const $id_dae6cd41 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/styles/index.scss");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/themes/create_theme_variables.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/themes/variables.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/themes/themes.ts");

function createStyles() {
  console.log(3333333333);
  const style = document.createElement("style");
  __vite_ssr_import_2__.variables.mixins = {};
  __vite_ssr_import_2__.variables.breakpoints = {};
  style.innerText = `:root{${__vite_ssr_import_1__.createStyle(__vite_ssr_import_2__.variables)}${__vite_ssr_import_1__.createStyle(__vite_ssr_import_3__.themes.light, "--palette")}}.dark{${__vite_ssr_import_1__.createStyle(__vite_ssr_import_3__.themes.dark, "--palette")}}`;
  console.log(style);
  document.body.classList.add("dark");
  document.head.append(style);
}
Object.defineProperty(__vite_ssr_exports__, "createStyles", { enumerable: true, configurable: true, get(){ return createStyles }});
;
}


// --------------------
// Request: /styles/index.scss
// Parents: 
// - /styles/index.ts ($id_dae6cd41)
// Dependencies: 

// --------------------
const $id_682f17ee = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:after,:before{box-sizing:border-box}html{-webkit-text-size-adjust:100%;line-height:1.15;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{font-family:system-ui,-apple-system,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";margin:0}hr{color:inherit;height:0}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}html{font-feature-settings:\"rlig\" 1,\"calt\" 0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;font-size:var(--typography-htmlFontSize);touch-action:manipulation}body{background-color:var(--palette-background-default);color:var(--palette-text-primary);font-size:var(--typography-fontSize)}.menu{list-style:none;margin:0;padding:0}.menu-navi{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu .menu{position:absolute}.menu.vertical .menu{position:relative}.menu.horizontal{display:flex}.menu-navi{color:currentColor;text-decoration:none}.menu-link,.menu-navi{display:flex;justify-content:space-between}.menu-link{flex:1}.menu-link-content{display:flex;gap:8px}.expand-enter-active,.expand-exit-active{transition:all .2s ease-in-out}.dropdown-enter-active{opacity:.25;transform:translate3d(0,-10px,0)}.dropdown-enter-to{opacity:1;transform:translateZ(0)}.dropdown-exit-to{opacity:.5;transform:translateZ(0)}.dropdown-enter-active,.dropdown-exit-active{transition:all .2s ease-in-out}:root{--header-bg:hsla(0,0%,100%,.5);--header-hover-bg:hsla(0,0%,100%,.55);--header-height:40px;--header-color:var(--palette-text-secondary);--header-text-shadow:0 1px 0 hsla(0,0%,100%,.25)}.dark{--header-bg:rgba(0,0,0,.2);--header-hover-bg:rgba(0,0,0,.5);--header-height:40px;--header-color:var(--palette-text-secondary);--header-text-shadow:0 1px 0 rgba(0,0,0,.25)}.header{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background:var(--header-bg);color:var(--header-color);font-weight:600;height:var(--header-height);justify-content:space-between;left:0;position:fixed;text-shadow:var(--header-text-shadow);top:0;width:100%;z-index:var(--zIndex-appBar)}.header,.header-left{align-items:center;display:flex}.header-left{height:100%}@media screen and (min-width:900px){.header-menu-wrap{display:block}}.header .menu{transform-origin:left top}.header .menu:not(.l1){background-color:var(--header-bg);border-radius:4px}.header .menu-navi{padding:0 5px}.header .menu-link{align-items:center;border-radius:4px;display:flex;gap:5px;height:32px;padding:0 5px;white-space:nowrap;width:140px;word-break:keep-all}.header .menu.l1>.menu-item>.menu-navi>.menu-link{height:var(--header-height);width:auto}.header .menu-link:hover{background-color:rgba(0,0,0,.095)}.header .menu .menu{padding:5px 0}:root{--sider-item-height:40px;--sider-bg:hsla(0,0%,100%,.95);--sider-menu-bg:rgba(0,0,0,.05);--sider-hover-bg:hsla(0,0%,100%,.8);--sider-width:240px;--sider-color:rgba(0,0,0,.6)}.dark{--sider-bg:rgba(0,0,0,.25);--sider-menu-bg:rgba(0,0,0,.05);--sider-hover-bg:rgba(0,0,0,.4);--sider-width:240px;--sider-color:hsla(0,0%,100%,.8)}.sider-mask{background-color:rgba(0,0,0,.3);height:100vh;left:0;opacity:0;position:fixed;top:0;transition:opacity var(--transitions-duration-shorter);width:0;z-index:calc(var(--zIndex-drawer) - 1)}.sider-mask.open{opacity:1;width:100vw}.sider{background-color:var(--sider-bg);box-shadow:var(--shadows-8);height:100vh;left:0;position:fixed;top:0;transform:translate3d(-100%,0,0);transition:transform var(--transitions-easing-easeInOut) var(--transitions-duration-shorter);width:var(--sider-width);z-index:var(--zIndex-drawer)}.sider.open{transform:translateZ(0)}.sider .menu{border-radius:4px;overflow-y:hidden;padding:5px 0}.sider .menu.l1{background-color:transparent;border-radius:0}.sider .menu-item.open{background-color:#e5e5e5}.sider .menu-link{align-items:center;border-radius:4px;display:flex;gap:8px;height:var(--sider-item-height);padding:0 5px;white-space:nowrap;word-break:keep-all}.sider .menu.l2{overflow-y:hidden}.sider .menu.l2,.sider .menu.l3{background-color:#fff}.sider .menu.l2>.menu-item>.menu-navi{padding-left:16px}.sider .menu.l3>.menu-item>.menu-navi{padding-left:24px}.sider .menu-link-chevron{margin-right:4px}.sider .menu-link-chevron svg{fill:currentColor;display:block;height:12px;width:12px}.sider .menu-navi.active{box-shadow:inset 2px 0 0 0 red}.bg{background-color:var(--palette-background-default)}.article,.fg{background-color:var(--palette-background-paper)}.article{border-radius:4px;box-shadow:var(--shadows-4);margin-left:auto;margin-right:auto;max-width:768px;padding:48px;width:100%}:not(:defined){visibility:hidden}li,ul{cursor:pointer;list-style:none;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}li>div{align-items:center;display:flex;height:32px;width:200px}li>div:hover{background-color:rgba(0,0,0,.12)}li{overflow-y:hidden}ul{backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background:hsla(0,0%,100%,.2);box-shadow:0 4px 30px rgba(0,0,0,.1);width:240px}";
}


// --------------------
// Request: /themes/create_theme_variables.ts
// Parents: 
// - /styles/index.ts ($id_dae6cd41)
// Dependencies: 

// --------------------
const $id_501018ef = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function createTheme(themeObj, output = {}, prefix = "--") {
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      createTheme(themeObj[key], output, `${prefix}-${key}`);
    } else {
      output[`${prefix}-${key}`] = themeObj[key];
    }
  });
  return output;
}
function createStyle(themeObj, prefix = "-") {
  let output = "";
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      output += createStyle(themeObj[key], `${prefix}-${key}`);
    } else if (typeof themeObj[key] !== "function") {
      const appendPx = key.toLocaleLowerCase().indexOf("size") > -1 && `${themeObj[key]}`.indexOf("rem") === -1 || key.toLocaleLowerCase().indexOf("radius") > -1;
      const appendMs = `${prefix}-${key}`.indexOf("transitions-duration") > -1;
      if (appendPx) {
        output += `${prefix}-${key}:${themeObj[key]}${appendPx ? "px" : ""};`;
      } else if (appendMs) {
        output += `${prefix}-${key}:${themeObj[key]}${appendMs ? "ms" : ""};`;
      } else {
        output += `${prefix}-${key}:${themeObj[key]};`;
      }
    }
  });
  return output;
}
Object.defineProperty(__vite_ssr_exports__, "createStyle", { enumerable: true, configurable: true, get(){ return createStyle }});

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, value: createTheme });;
}


// --------------------
// Request: /themes/variables.ts
// Parents: 
// - /styles/index.ts ($id_dae6cd41)
// Dependencies: 

// --------------------
const $id_9de6835f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const variables = { "breakpoints": { "keys": ["xs", "sm", "md", "lg", "xl"], "values": { "xs": 0, "sm": 600, "md": 900, "lg": 1200, "xl": 1536 }, "unit": "px" }, "direction": "ltr", "components": {}, "shape": { "borderRadius": 4 }, "mixins": { "toolbar": { "minHeight": 56, "@media (min-width:0px) and (orientation: landscape)": { "minHeight": 48 }, "@media (min-width:600px)": { "minHeight": 64 } } }, "shadows": ["none", "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)", "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)", "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)", "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)", "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)", "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)", "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)", "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)", "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)", "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)", "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)", "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)", "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)", "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)", "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)", "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)", "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)", "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)", "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)", "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)", "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)", "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"], "typography": { "htmlFontSize": 16, "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontSize": 14, "fontWeightLight": 300, "fontWeightRegular": 400, "fontWeightMedium": 500, "fontWeightBold": 700, "h1": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 300, "fontSize": "6rem", "lineHeight": 1.167, "letterSpacing": "-0.01562em" }, "h2": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 300, "fontSize": "3.75rem", "lineHeight": 1.2, "letterSpacing": "-0.00833em" }, "h3": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "3rem", "lineHeight": 1.167, "letterSpacing": "0em" }, "h4": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "2.125rem", "lineHeight": 1.235, "letterSpacing": "0.00735em" }, "h5": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "1.5rem", "lineHeight": 1.334, "letterSpacing": "0em" }, "h6": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 500, "fontSize": "1.25rem", "lineHeight": 1.6, "letterSpacing": "0.0075em" }, "subtitle1": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "1rem", "lineHeight": 1.75, "letterSpacing": "0.00938em" }, "subtitle2": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 500, "fontSize": "0.875rem", "lineHeight": 1.57, "letterSpacing": "0.00714em" }, "body1": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "1rem", "lineHeight": 1.5, "letterSpacing": "0.00938em" }, "body2": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "0.875rem", "lineHeight": 1.43, "letterSpacing": "0.01071em" }, "button": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 500, "fontSize": "0.875rem", "lineHeight": 1.75, "letterSpacing": "0.02857em", "textTransform": "uppercase" }, "caption": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "0.75rem", "lineHeight": 1.66, "letterSpacing": "0.03333em" }, "overline": { "fontFamily": '"Roboto", "Helvetica", "Arial", sans-serif', "fontWeight": 400, "fontSize": "0.75rem", "lineHeight": 2.66, "letterSpacing": "0.08333em", "textTransform": "uppercase" } }, "transitions": { "easing": { "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)", "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)", "easeIn": "cubic-bezier(0.4, 0, 1, 1)", "sharp": "cubic-bezier(0.4, 0, 0.6, 1)" }, "duration": { "shortest": 150, "shorter": 200, "short": 250, "standard": 300, "complex": 375, "enteringScreen": 225, "leavingScreen": 195 } }, "zIndex": { "mobileStepper": 1e3, "speedDial": 1050, "appBar": 1100, "drawer": 1200, "modal": 1300, "snackbar": 1400, "tooltip": 1500 } };
Object.defineProperty(__vite_ssr_exports__, "variables", { enumerable: true, configurable: true, get(){ return variables }});
;
}


// --------------------
// Request: /themes/themes.ts
// Parents: 
// - /styles/index.ts ($id_dae6cd41)
// Dependencies: 

// --------------------
const $id_bf3b438d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const themes = { "light": { "mode": "light", "background": { "default": "#e5e5e5", "paper": "#ffffff" }, "common": { "black": "#000", "white": "#fff" }, "primary": { "main": "#1976d2", "light": "#42a5f5", "dark": "#1565c0", "contrastText": "#fff" }, "secondary": { "main": "#9c27b0", "light": "#ba68c8", "dark": "#7b1fa2", "contrastText": "#fff" }, "error": { "main": "#d32f2f", "light": "#ef5350", "dark": "#c62828", "contrastText": "#fff" }, "warning": { "main": "#ed6c02", "light": "#ff9800", "dark": "#e65100", "contrastText": "#fff" }, "info": { "main": "#0288d1", "light": "#03a9f4", "dark": "#01579b", "contrastText": "#fff" }, "success": { "main": "#2e7d32", "light": "#4caf50", "dark": "#1b5e20", "contrastText": "#fff" }, "grey": { "50": "#fafafa", "100": "#f5f5f5", "200": "#eeeeee", "300": "#e0e0e0", "400": "#bdbdbd", "500": "#9e9e9e", "600": "#757575", "700": "#616161", "800": "#424242", "900": "#212121", "A100": "#f5f5f5", "A200": "#eeeeee", "A400": "#bdbdbd", "A700": "#616161" }, "contrastThreshold": 3, "tonalOffset": 0.2, "text": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.6)", "disabled": "rgba(0, 0, 0, 0.38)" }, "divider": "rgba(0, 0, 0, 0.12)", "action": { "active": "rgba(0, 0, 0, 0.54)", "hover": "rgba(0, 0, 0, 0.04)", "hoverOpacity": 0.04, "selected": "rgba(0, 0, 0, 0.08)", "selectedOpacity": 0.08, "disabled": "rgba(0, 0, 0, 0.26)", "disabledBackground": "rgba(0, 0, 0, 0.12)", "disabledOpacity": 0.38, "focus": "rgba(0, 0, 0, 0.12)", "focusOpacity": 0.12, "activatedOpacity": 0.12 } }, "dark": { "mode": "dark", "background": { "default": "#121212", "paper": "#252525" }, "common": { "black": "#000", "white": "#fff" }, "primary": { "main": "#90caf9", "light": "#e3f2fd", "dark": "#42a5f5", "contrastText": "rgba(0, 0, 0, 0.87)" }, "secondary": { "main": "#ce93d8", "light": "#f3e5f5", "dark": "#ab47bc", "contrastText": "rgba(0, 0, 0, 0.87)" }, "error": { "main": "#f44336", "light": "#e57373", "dark": "#d32f2f", "contrastText": "#fff" }, "warning": { "main": "#ffa726", "light": "#ffb74d", "dark": "#f57c00", "contrastText": "rgba(0, 0, 0, 0.87)" }, "info": { "main": "#29b6f6", "light": "#4fc3f7", "dark": "#0288d1", "contrastText": "rgba(0, 0, 0, 0.87)" }, "success": { "main": "#66bb6a", "light": "#81c784", "dark": "#388e3c", "contrastText": "rgba(0, 0, 0, 0.87)" }, "grey": { "50": "#fafafa", "100": "#f5f5f5", "200": "#eeeeee", "300": "#e0e0e0", "400": "#bdbdbd", "500": "#9e9e9e", "600": "#757575", "700": "#616161", "800": "#424242", "900": "#212121", "A100": "#f5f5f5", "A200": "#eeeeee", "A400": "#bdbdbd", "A700": "#616161" }, "contrastThreshold": 3, "tonalOffset": 0.2, "text": { "primary": "#fff", "secondary": "rgba(255, 255, 255, 0.7)", "disabled": "rgba(255, 255, 255, 0.5)", "icon": "rgba(255, 255, 255, 0.5)" }, "divider": "rgba(255, 255, 255, 0.12)", "action": { "active": "#fff", "hover": "rgba(255, 255, 255, 0.08)", "hoverOpacity": 0.08, "selected": "rgba(255, 255, 255, 0.16)", "selectedOpacity": 0.16, "disabled": "rgba(255, 255, 255, 0.3)", "disabledBackground": "rgba(255, 255, 255, 0.12)", "disabledOpacity": 0.38, "focus": "rgba(255, 255, 255, 0.12)", "focusOpacity": 0.12, "activatedOpacity": 0.24 } } };
Object.defineProperty(__vite_ssr_exports__, "themes", { enumerable: true, configurable: true, get(){ return themes }});
;
}


// --------------------
// Request: /index.tsx
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /styles/index.ts ($id_dae6cd41)
// - /create_navs.tsx ($id_5b5547ec)
// --------------------
const $id_d4445df8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/styles/index.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/create_navs.tsx");

const navs = __vite_ssr_import_1__.default()[0].children;
console.log(navs);
let _navs = [];

function flatNavs(navs, parentPath = "") {
  navs.forEach(nav => {
    const path = parentPath ? `${parentPath}${nav.path}` : nav.path;

    _navs.push({
      name: nav.name,
      path
    });

    if (nav.children?.length) {
      flatNavs(nav.children, path);
    }
  });
}

flatNavs(navs);

function create() {
  const root = document.getElementById("root");
  const menu = document.createElement("ul");
  navs.map(nav => {
    return createMenuItem(nav);
  }).forEach(nav => {
    menu.appendChild(nav);
  });
  root?.appendChild(menu);
}

function createMenuItem(nav, parentPath = "", level = 1) {
  const hasChildren = nav.children?.length;
  const path = parentPath ? `${parentPath}${nav.path}` : nav.path;
  const el = document.createElement("li");
  el.dataset["level"] = `${level}`;
  const menuNavi = document.createElement("div");
  const link = hasChildren ? document.createElement("span") : document.createElement("a");
  let dropdown = null;

  if (!hasChildren) {
    // @ts-ignore
    link.href = path;
  } else {
    //
    menuNavi.addEventListener("pointerup", e => {
      console.log(e);
      console.log(el.dataset["show"]);

      if (!el.dataset["show"]) {
        el.dataset["show"] = "show";
        el.appendChild(dropdown);
        const a = dropdown.animate([{
          height: "0px"
        }, {
          height: `${nav.children.length * 32}px`
        }], {
          duration: 125
        });
        a.finished.then();
      } else {
        delete el.dataset["show"];
        const a = dropdown.animate([{
          height: `${nav.children.length * 32}px`
        }, {
          height: "0px"
        }], {
          duration: 125
        });
        a.finished.then(() => {
          el.removeChild(dropdown);
        });
      }
    });
  }

  link.innerHTML = nav.name;
  menuNavi.appendChild(link);
  el.appendChild(menuNavi);

  if (hasChildren) {
    dropdown = document.createElement("ul");
    nav.children.forEach(_nav => {
      dropdown.appendChild(createMenuItem(_nav, path, level + 1));
    });
  }

  return el;
}

const createNav = create;
Object.defineProperty(__vite_ssr_exports__, "createNav", { enumerable: true, configurable: true, get(){ return createNav }});
const data = [{
  id: 1,
  name: "abc",
  active: true
}, {
  id: 2,
  name: "abc",
  active: true
}, {
  id: undefined,
  name: "abc"
}];;
}


// --------------------
// Request: /create_navs.tsx
// Parents: 
// - /index.tsx ($id_d4445df8)
// Dependencies: 

// --------------------
const $id_5b5547ec = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function createNavs() {
  return [{
    path: "/",
    children: [{
      path: "/",
      name: "首页"
    }, {
      path: "/math",
      name: "数学",
      children: [{
        path: "/set_theory",
        name: "集合论",
        children: [{
          path: "/set_theory_cheat",
          name: "集合论概览"
        }]
      }, {
        path: "/set_topology",
        name: "点集拓扑",
        children: [{
          path: "/set_topology_cheat",
          name: "点集拓扑概览"
        }]
      }, {
        path: "/real_analysis",
        name: "实分析",
        children: [{
          path: "/real_analysis_cheat",
          name: "实分析概览"
        }]
      }, {
        path: "/complex_analysis",
        name: "复分析",
        children: [{
          path: "/complex_analysis_cheat",
          name: "复分析概览"
        }]
      }, {
        path: "/linear_algebra",
        name: "线性代数",
        children: [{
          path: "/linear_algebra_cheat",
          name: "线性代数概览"
        }]
      }, {
        path: "/abstract_algebra",
        name: "抽象代数",
        children: [{
          path: "/abstract_algebra_cheat",
          name: "抽象代数概览"
        }]
      }, {
        path: "/probability_theory",
        name: "概率论",
        children: [{
          path: "/probability_theory",
          name: "概率论概览"
        }]
      }, {
        path: "/statistics",
        name: "统计",
        children: [{
          path: "/statistics_cheat",
          name: "统计概览"
        }]
      }]
    }, {
      path: "/langs",
      name: "计算机",
      children: [{
        path: "/clang",
        name: "C语言",
        children: [{
          path: "/c_cheat",
          name: "C语言概览"
        }]
      }, {
        path: "/cpp",
        name: "C++",
        children: [{
          path: "/cpp_cheat",
          name: "C++概览"
        }]
      }, {
        path: "/rust",
        name: "Rust语言",
        children: [{
          path: "/rust_cheat",
          name: "Rust概览"
        }]
      }, {
        path: "/csharp",
        name: "C#语言",
        children: [{
          path: "/csharp_cheat",
          name: "C#概览"
        }]
      }, {
        path: "/go",
        name: "Go语言",
        children: [{
          path: "/go_cheat",
          name: "Go语言概览"
        }]
      }, {
        path: "/swift",
        name: "Swift语言",
        children: [{
          path: "/swift_cheat",
          name: "Swift概览"
        }]
      }, {
        path: "/julia",
        name: "Julia语言",
        children: [{
          path: "/JuliaCheat",
          name: "Julia概览"
        }]
      }, {
        path: "/js",
        name: "Js语言",
        children: [{
          path: "/js_cheat",
          name: "Js概览"
        }]
      }, {
        path: "/python",
        name: "Python语言",
        children: [{
          path: "/python_cheat",
          name: "Python概览"
        }]
      }, {
        path: "/sql",
        name: "SQL语言",
        children: [{
          path: "/sql_cheat",
          name: "SQL概览"
        }]
      }, {
        path: "/script",
        name: "其他脚本语言",
        children: [{
          path: "/ScriptCheat",
          name: "其他脚本概览"
        }]
      }]
    }, {
      path: "/videos",
      name: "动视"
    }, {
      path: "/sounds",
      name: "音声"
    }, {
      path: "/color",
      name: "乐色"
    }, {
      path: "/articles",
      name: "美文"
    }]
  }];
}
Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, value: createNavs });;
}


// --------------------
// Request: /ytb_bg.ts
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_4f13f3e8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function createYtbBg() {
  const ctn = document.createElement("div");
  const iframe = document.createElement("iframe");
  const opEl = document.createElement("div");
  opEl.style.position = "absolute";
  opEl.style.zIndex = "9999";
  opEl.style.right = "24px";
  opEl.style.top = "100px";
  ctn.style.pointerEvents = "none";
  ctn.style.position = "absolute";
  ctn.style.left = "0";
  ctn.style.top = "0";
  ctn.style.overflow = "hidden";
  ctn.style.zIndex = "-1";
  ctn.style.width = "100vw";
  ctn.style.height = "100vh";
  iframe.style.position = "absolute";
  iframe.style.width = "120vw";
  iframe.style.height = "120vh";
  iframe.title = "YouTube video player";
  iframe.style.left = "50%";
  iframe.style.top = "50%";
  iframe.style.transform = "translateX(-50%) translateY(-50%)";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  let vid = "kok4GdJl3Jg";
  if (location.search.includes("?bgv=")) {
    vid = location.search.replace("?bgv=", "");
  }
  iframe.src = `https://www.youtube.com/embed/${vid}?enablejsapi=1&controls=0&rel=0&playsinline=1&showinfo=0&origin=*&mute=1&autoplay=1&loop=1`;
  ctn.appendChild(iframe);
  opEl.innerHTML = "<button>\u6253\u5F00\u58F0\u97F3</button>";
  document.body.append(ctn);
  document.body.append(opEl);
  opEl.addEventListener("click", () => {
    opEl.muted = !opEl.muted;
    iframe.contentWindow?.postMessage(JSON.stringify({
      event: "command",
      func: opEl.muted ? "unMute" : "mute",
      args: []
    }), "*");
  }, false);
}
__vite_ssr_exports__.default = createYtbBg;
;
}


const __modules__ = {
  "D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry": $id_4a4c4d72,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/nuxt3/dist/app/index.mjs": $id_d8c2af0f,
  "/node_modules/nuxt3/dist/app/nuxt.mjs": $id_bf77ef36,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/nuxt3/dist/app/compat/legacy-app.mjs": $id_75047751,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt3/dist/app/composables/index.mjs": $id_42ae3d5d,
  "/node_modules/nuxt3/dist/app/composables/component.mjs": $id_b47c3881,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt3/dist/app/composables/asyncData.mjs": $id_a2ef143e,
  "/node_modules/nuxt3/dist/app/composables/hydrate.mjs": $id_43a772c2,
  "/node_modules/nuxt3/dist/app/composables/state.mjs": $id_d232db97,
  "/node_modules/nuxt3/dist/app/composables/error.mjs": $id_228109ca,
  "/node_modules/nuxt3/dist/app/composables/fetch.mjs": $id_765a0ed7,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt3/dist/app/composables/cookie.mjs": $id_792d64c4,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt3/dist/app/composables/ssr.mjs": $id_4d0dc923,
  "/node_modules/nuxt3/dist/app/composables/router.mjs": $id_541bda03,
  "/node_modules/nuxt3/dist/app/components/index.mjs": $id_dcef81fa,
  "/node_modules/nuxt3/dist/app/components/nuxt-link.mjs": $id_3a707821,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt3/dist/meta/runtime/index.mjs": $id_ea12a3fb,
  "/node_modules/nuxt3/dist/meta/runtime/composables.mjs": $id_ca9295be,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/css.mjs": $id_972bee3a,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/plugins/server.mjs": $id_e9c1dfd3,
  "/node_modules/nuxt3/dist/app/plugins/preload.server.mjs": $id_b9f3c557,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/components.mjs": $id_ae504ba6,
  "/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs": $id_cbe5172d,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/nuxt3/dist/meta/runtime/plugin.mjs": $id_9fd5f35e,
  "/node_modules/nuxt3/dist/meta/runtime/components.mjs": $id_94744df3,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/meta.config.mjs": $id_81ce1a9c,
  "/node_modules/nuxt3/dist/pages/runtime/router.mjs": $id_a4d6cb5b,
  "/node_modules/nuxt3/dist/pages/runtime/page.mjs": $id_485c89bf,
  "/node_modules/nuxt3/dist/pages/runtime/utils.mjs": $id_e1b210cc,
  "/node_modules/nuxt3/dist/app/components/utils.mjs": $id_bb7711fa,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/routes.mjs": $id_6bd5f1bd,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/index/index.vue?macro=true": $id_5878fe75,
  "/pages/index/langs.vue?macro=true": $id_28162eaa,
  "/pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue?macro=true": $id_78d6e4bb,
  "/pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue?macro=true": $id_5df6171f,
  "/pages/index/index.vue": $id_a200782a,
  "/pages/index/langs/cpp/cpp_cheatsheet/cpp_cheatsheet.vue": $id_db4a8bcd,
  "/pages/index/langs/rust/rust_cheatsheet/rust_cheatsheet.vue": $id_040a5bdf,
  "/pages/index/langs.vue": $id_424b21b4,
  "/pages/index.vue": $id_cca58e97,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/router.options.mjs": $id_a3f273db,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/middleware.mjs": $id_a5d68bcc,
  "/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs": $id_7b587af2,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/root-component.mjs": $id_d51f34de,
  "/node_modules/nuxt3/dist/app/components/nuxt-root.vue": $id_f8564e04,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/error-component.mjs": $id_47bed804,
  "/node_modules/nuxt3/dist/app/components/nuxt-error-page.vue": $id_f10a5dcc,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/__x00__virtual:D:/Wss/meuscc/notes/.nuxt/app-component.mjs": $id_9f94ed6f,
  "/app.vue": $id_2b46e842,
  "/styles/index.ts": $id_dae6cd41,
  "/styles/index.scss": $id_682f17ee,
  "/themes/create_theme_variables.ts": $id_501018ef,
  "/themes/variables.ts": $id_9de6835f,
  "/themes/themes.ts": $id_bf3b438d,
  "/index.tsx": $id_d4445df8,
  "/create_navs.tsx": $id_5b5547ec,
  "/ytb_bg.ts": $id_4f13f3e8
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("D:/Wss/meuscc/notes/node_modules/nuxt3/dist/app/entry")