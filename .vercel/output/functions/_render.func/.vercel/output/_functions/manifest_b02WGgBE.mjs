import { g as decodeKey } from './chunks/astro/server_BMtRqVYS.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_ChiNm8KU.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.18_@types+node@22.10.5_rollup@4.30.1_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.i_TAhQwP.js"}],"styles":[{"type":"external","src":"/_astro/index.DfTzNVLZ.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CPvQdrlZ.js"}],"styles":[{"type":"external","src":"/_astro/index.DfTzNVLZ.css"}],"routeData":{"route":"/projects/[...slug]","isIndex":false,"type":"page","pattern":"^\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/projects/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.O8IyoH17.js"}],"styles":[{"type":"external","src":"/_astro/index.DfTzNVLZ.css"}],"routeData":{"route":"/travel","isIndex":false,"type":"page","pattern":"^\\/travel\\/?$","segments":[[{"content":"travel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/travel.astro","pathname":"/travel","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CvsomXjo.js"}],"styles":[{"type":"external","src":"/_astro/index.DfTzNVLZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://ignaciomg.xyz/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/projects/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/travel.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"pages/projects/_---slug_.astro.mjs","\u0000@astro-page:src/pages/travel@_@astro":"pages/travel.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.18_@types+node@22.10.5_rollup@4.30.1_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/node_modules/.pnpm/astro@4.16.18_@types+node@22.10.5_rollup@4.30.1_typescript@5.7.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_b02WGgBE.mjs","C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/Globe":"_astro/Globe.C4xcd8ZU.js","C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/Tooltip/index":"_astro/index.D8reaGom.js","@astrojs/solid-js/client.js":"_astro/client.CKE6KGWa.js","@astrojs/svelte/client.js":"_astro/client.CWY0IrnN.js","/astro/hoisted.js?q=0":"_astro/hoisted.CvsomXjo.js","/astro/hoisted.js?q=1":"_astro/hoisted.CPvQdrlZ.js","/astro/hoisted.js?q=2":"_astro/hoisted.O8IyoH17.js","/astro/hoisted.js?q=3":"_astro/hoisted.i_TAhQwP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DfTzNVLZ.css","/Dropshipping.png","/favicon.ico","/HazTuHuerto.png","/hi.png","/hi2.png","/IgnacioMorenoGomezCVWebDeveloper.pdf","/IgnacioMorenoGomezCVWebDeveloperEn.pdf","/inmogibert.png","/laptopCat.png","/me.webp","/og-image.png","/preview.png","/SaPobla.png","/SpotifyClon.png","/sticker.png","/wall.png","/fonts/CabinetGrotesk-Variable.ttf","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf","/_astro/client.CKE6KGWa.js","/_astro/client.CWY0IrnN.js","/_astro/constants.CbTSZZC9.js","/_astro/Globe.C4xcd8ZU.js","/_astro/hoisted.CPvQdrlZ.js","/_astro/hoisted.CvsomXjo.js","/_astro/hoisted.i_TAhQwP.js","/_astro/hoisted.O8IyoH17.js","/_astro/index.D8reaGom.js","/_astro/index.es.U90kt3ba.js","/_astro/web.CoYGcTr4.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"E5naLZQiTlIw+WuW+suQ9+6QAR3M897ZcxwB8w8VjjQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };
