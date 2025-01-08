import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B_T7DHOB.mjs';
import { manifest } from './manifest_BVTbY9qY.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/projects.astro.mjs');
const _page2 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page3 = () => import('./pages/travel.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "3d568af5-6c88-43d7-8df6-d6448d60a51c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
