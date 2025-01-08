/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_Bmc84dX9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CwTY0461.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "name", "description": "Software developer with strong focus on the user experience animations and micro interactions" })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/projects/index.astro", void 0);

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
