import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DsLQw4rh.mjs';
import { manifest } from './manifest_b02WGgBE.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/projects.astro.mjs');
const _page2 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page3 = () => import('./pages/travel.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.18_@types+node@22.10.5_rollup@4.30.1_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/projects/index.astro", _page1],
    ["src/pages/projects/[...slug].astro", _page2],
    ["src/pages/travel.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0acc75fc-4835-4f55-9554-fc3cd430b60e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
