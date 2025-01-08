/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_BMtRqVYS.mjs';
import { $ as $$Layout } from '../chunks/Layout_QbfUtCAU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "name", "description": "Software developer with strong focus on the user experience animations and micro interactions" })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/projects/index.astro", undefined);

const $$file = "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
