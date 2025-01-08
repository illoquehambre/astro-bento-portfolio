/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bmc84dX9.mjs';
import 'kleur/colors';
import { G as GlobeComponent } from '../chunks/Globe_DQBMgCM-.mjs';
import { $ as $$BasicLayout } from '../chunks/BasicLayout_B_UZUwEU.mjs';
export { renderers } from '../renderers.mjs';

const $$Travel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Gianmarco Cavallo - Visited Countries", "description": "A 3d globe showing countries that I have visited so far", "page": "travel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="text-white absolute bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg">Back</a> ${renderComponent($$result2, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/Globe", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/travel.astro", void 0);

const $$file = "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/travel.astro";
const $$url = "/travel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Travel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
