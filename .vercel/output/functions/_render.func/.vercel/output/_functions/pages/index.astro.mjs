/* empty css                                 */
import { a as createComponent$1, r as renderTemplate, b as renderComponent, m as maybeRenderHead, f as addAttribute, c as createAstro } from '../chunks/astro/server_Bmc84dX9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CwTY0461.mjs';
import { L as LINKS, k as $$Button, l as $$Icon, j as $$Index$2, $ as $$ReactIcon, a as $$TailwindIcon, h as $$NextJsIcon, b as $$AstroIcon, i as $$Stripe, c as $$SpringIcon, d as $$JavaIcon, e as $$DockerIcon, f as $$PostGressIcon, g as $$FlutterIcon } from '../chunks/Stripe_AGOFaY4y.mjs';
import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { createSignal, Show } from 'solid-js';
import { $ as $$Image } from '../chunks/_astro_assets_kV-z9WHs.mjs';
import 'clsx';
import { G as GlobeComponent } from '../chunks/Globe_DQBMgCM-.mjs';
export { renderers } from '../renderers.mjs';

var _tmpl$ = ["<div", ` class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20"><p class="w-max">`, "</p></div>"], _tmpl$2 = ["<div", ' class="relative inline-block"><div>', "</div><!--$-->", "<!--/--></div>"];
function Tooltip(props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);
  const messages = ["Hola! Qué tal?", "¿Interesado en contratarme?", "Soy un gran programador :D", "Lo juro!!", "Todavía estás aquí?", "No te aburres, verdad?", "Como va la cosa?", "Otra vez? De verdad?", "Parece que eres curioso!", "No es gracioso ya!", "Para un rato aunque sea!", "Esto empieza a molestarme!", "Para ya!", "No más clicks!", "En serio?!", "AY! eso duele! :(", "Eres pesadísimo!", "Por que tanta curiosidad?", "No tienes nada mejor que hacer!?", "Ya me abuerres!", "Para PARAAAAAA!", "Acaso no tienes un trabajo o pareja!?", "Por favor, Para de una vez!", "Ya está, la ultima!", "Si has llegado hasta aquí llamame aunque sea no? ;)", "Siempre dispuesto a una entrevista."];
  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };
  return ssr(_tmpl$2, ssrHydrationKey(), escape(props.children), escape(createComponent(Show, {
    get when() {
      return isVisible();
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(currentMessage()));
    }
  })));
}

const $$IntroCard = createComponent$1(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$2, { "colSpan": "md:col-span-3", "rowSpan": "md:row-span-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full h-full"> <div class="flex flex-col justify-between md:max-h-[300px] gap-4"> <div class="flex flex-col h-full"> <h6 class="text-sm font-light m-0 text-gray-500">Bienvenido</h6> <h1 class="m-0 font-light text-xl mt-2">
¡Hola! Soy <b class="font-bold">Ignacio Moreno Gómez</b>, un desarrollador
          web con un gran enfoque en la experiencia de usuario y la automatización de procesos.
</h1> <br> <h2 class="m-0 font-light text-xl">
Actualmente trabajo como freelance en el desarrollo de pequeñas y
            medianas aplicaciones web por encargo.
</h2> </div> <div class="flex gap-4"> <a${addAttribute(LINKS.github, "href")} aria-label="github profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:github-fill", "class": "h-6" })} <span class="sr-only">GitHub Profile</span> ` })} </a> <a${addAttribute(LINKS.linkedin, "href")} aria-label="linkeding profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "linkedin profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:linkedin-box-fill", "class": "h-6" })} <span class="sr-only">Linkedin Profile</span> ` })} </a> <a href="IgnacioMorenoGomezCVWebDeveloper.pdf" download="IgnacioMorenoGomezCVWebDeveloper.pdf" aria-label="dribble profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "dribble profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:download-fill", "class": "h-6" })} <span class="sr-only">Download Cv</span> ` })} </a> ${renderComponent($$result2, "Tooltip", Tooltip, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/Tooltip/index", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "aria-label": "easter egg btn" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": "ri:emotion-laugh-line", "class": "h-6" })} <span class="sr-only">Easter egg button</span> ` })} ` })} </div> </div> ${renderComponent($$result2, "Image", $$Image, { "width": "300", "height": "300", "src": "/laptopCat.png", "class": "w-auto max-h-[300px] select-none absolute right-[-110px] bottom-[-20px] z-[-1] opacity-50 md:opacity-100 md:relative md:right-auto md:bottom-auto md:z-auto pointer-events-none", "alt": "memoji of gianmarco" })} </div> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/IntroCard.astro", void 0);

const $$Astro$5 = createAstro("https://ignaciomg.xyz/");
const $$ContactsCard = createComponent$1(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContactsCard;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$2, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-4", "title": "Tecnolog\xEDas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col mt-4 w-fit max-h-65 min-h-50 overflow-auto scroll flex-grow">  <ul class="flex flex-col gap-3"> <li class="flex items-center gap-4 justify-between"> <h3 class="font-semibold text-xl">ReactJS</h3> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-react" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path> <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path> <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path> <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path> <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path> <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path> <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path> </svg> </li> <li class="flex items-center gap-6 justify-between"> <h3 class="font-semibold text-xl">NextJS</h3> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nextjs" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path> <path d="M15 12v-3"></path> </svg> </li> <li class="flex items-center gap-6 justify-between"> <h3 class="font-semibold text-xl">AstroJS</h3> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="882.997" x2="638.955" y1="27.113" y2="866.902" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000014"></stop><stop offset="1" stop-color="#150426"></stop> </linearGradient><linearGradient id="b" x1="1001.68" x2="790.326" y1="652.45" y2="1094.91" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#ff1639"></stop><stop offset="1" stop-color="#ff1639" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#a)" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 
            77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535
            -.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"></path><path fill="#ff5d01" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903
             5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 
             5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.
             513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"></path><path fill="url(#b)" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07
              0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488
              v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.5
              13 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"></path></svg> </li> <li class="flex items-center gap-6 justify-between"> <h3 class="font-semibold text-xl">NodeJs</h3> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nodejs" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path> <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path> </svg> </li> <li class="flex items-center gap-6"> <h3 class="font-semibold text-xl">Java - Spring</h3> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 128 128"><path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#77bc1f"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 128 128"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path></svg> </li> <li class="flex items-center gap-6 justify-between"> <h3 class="font-semibold text-xl">MongoDb</h3> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mongodb" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3v19"></path> <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z"></path> </svg> </li> <li class="flex items-center gap-6 justify-between"> <h3 class="font-semibold text-xl">SQL</h3> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-sql" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14 3v4a1 1 0 0 0 1 1h4"></path> <path d="M14 3v4a1 1 0 0 0 1 1h4"></path> <path d="M5 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path> <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path> <path d="M18 15v6h2"></path> <path d="M13 15a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2z"></path> <path d="M14 20l1.5 1.5"></path> </svg> </li> </ul> </div> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/ContactsCard.astro", void 0);

const $$Pulse = createComponent$1(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="relative flex h-3 w-3"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span>`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/Pulse.astro", void 0);

const $$Now = createComponent$1(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$2, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2", "color": "secondary" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between w-full items-start mb-2"> <h2 class="text-xl font-semibold">Freelance</h2> ${renderComponent($$result2, "Pulse", $$Pulse, {})} </div> <p class="text-xs">Actualmente enfocado en el desarrollo por encargo de aplicaciones y páginas web.</p> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/Now.astro", void 0);

const $$Astro$4 = createAstro("https://ignaciomg.xyz/");
const $$ExperienceCard = createComponent$1(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const { title, slug, description, company, time } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$2, { "href": slug, "height": "h-auto", "color": "secondary" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-white flex-col gap-6 items-center"> <h2 class="font-bold text-lg">${title}</h2> <h3 class="font-bold text-md">${`Empresa: ${company}`}</h3> <p class="font-light text-xs ">${description}</p> </div> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/ExperienceCard.astro", void 0);

const $$Astro$3 = createAstro("https://ignaciomg.xyz/");
const $$AboutMe = createComponent$1(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$2, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-6", "title": "Experiencia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6 w-full max-h-120 min-h-90 overflow-auto scroll flex-grow"> ${renderComponent($$result2, "Now", $$Now, {})} ${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, { "title": "Desarrollador FullStack", "company": "Memo", "description": "Programador en una startup irlandesa ubicada en Galway. Desarrollo de un programa de fidelizaci\xF3n de clientes." })} ${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, { "title": "Atenci\xF3n al cliente", "company": "Varias", "description": "Atenci\xF3n al cliente en diversas empresas de varios sectores tanto en espa\xF1a como en Irlanda." })}  </div> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/AboutMe.astro", void 0);

const $$Astro$2 = createAstro("https://ignaciomg.xyz/");
const $$ProjectCard = createComponent$1(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, slug, icons } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$2, { "href": slug, "height": "h-auto", "color": "secondary" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-white flex flex-col sm:flex-row gap-4 items-center"> <h2 class="font-bold  text-xl ">${title}</h2> <div class="w-full justify-center sm:justify-end flex gap-3 mx-3 sm:mr-6 sm:ml-1 flex-wrap"> ${icons?.map((Icon) => renderTemplate`${renderComponent($$result2, "Icon", Icon, {})}`)} </div> </div> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/playground/ProjectCard.astro", void 0);

const $$FirebaseIcon = createComponent$1(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" id="firebase"> <path fill="#FFA000" d="m14.714 8.669-2.4 2.235-2.228-4.496 1.151-2.585c.291-.516.767-.522 1.058 0l2.419 4.846z"></path> <path fill="#F57F17" d="m12.314 10.903-8.979 8.351 6.751-12.846 2.228 4.495z"></path> <path fill="#FFCA28" d="M17.346 5.251c.43-.41.873-.271.985.31l2.334 13.58-7.742 4.648c-.272.152-.992.211-.992.211s-.655-.08-.906-.218l-7.689-4.528 14.01-14.003z"></path> <path fill="#FFA000" d="m10.086 6.408-6.75 12.846L6.344.477c.113-.582.443-.641.74-.126l3.002 6.057z"></path> </svg>`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/icons/FirebaseIcon.astro", void 0);

const $$Astro$1 = createAstro("https://ignaciomg.xyz/");
const $$Index$1 = createComponent$1(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$2, { "colSpan": "md:col-span-2", "rowSpan": "md:row-span-4 flex gap-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="scroll flex flex-col justify-between h-100 gap-8 overflow-auto "> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "Inmobiliaria", "slug": "/projects/Inmogibert", "icons": [$$ReactIcon, $$TailwindIcon, $$NextJsIcon, $$FirebaseIcon] })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "SpotifyClon", "slug": "/projects/SpotifyClon", "icons": [$$ReactIcon, $$TailwindIcon, $$AstroIcon] })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "Dropshipping E-commerce", "slug": "/projects/DropShipping", "icons": [$$ReactIcon, $$NextJsIcon, $$TailwindIcon, $$Stripe] })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "HazTuHuerto", "slug": "/projects/HazTuHuerto", "icons": [$$ReactIcon, $$SpringIcon, $$JavaIcon, $$DockerIcon, $$PostGressIcon, $$FlutterIcon] })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "WebSaPobla", "slug": "/projects/WebSaPobla", "icons": [$$ReactIcon, $$NextJsIcon, $$TailwindIcon] })} </div> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/playground/index.astro", void 0);

const $$Astro = createAstro("https://ignaciomg.xyz/");
const $$Index = createComponent$1(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Ignacio Moreno G\xF3mez - Freelance Full-Stack Developer", "description": "Soy un desarrollador independiente de Sevilla,apasionado por la programaci\xF3n y enfocado en la experiencia de usuario y la automatizaci\xF3n de procesos. Mis principales tecnolog\xEDas son: JavaScript, React, NextJs, Astro, Java-Spring y Node.js." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]"> ${renderComponent($$result2, "IntroCard", $$IntroCard, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "ContactsCard", $$ContactsCard, {})} ${renderComponent($$result2, "PlayGround", $$Index$1, {})}    ${renderComponent($$result2, "Card", $$Index$2, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1", "href": "travel", "colorText": "text-neutral-900" }, { "default": ($$result3) => renderTemplate` <p class="text-lg lg:text-xl xl:text-2xl font-bold text-center">
Paises visitados
</p> <div class="h-full w-full absolute inset-0 -z-10"> ${renderComponent($$result3, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/components/Globe", "client:component-export": "default" })} </div> ` })} ${renderComponent($$result2, "Card", $$Index$2, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1" }, { "default": ($$result3) => renderTemplate` <div class="text-xs flex flex-col overflow-y-auto scroll flex-grow"> <p>
Hecho con ♥️ usando <a href="https://astro.build/" target="_blank" class="text-red-500">Astro</a> por Ignacio Moreno Gómez.
</p> <p>
Inspirado en <a href="https://github.com/Ladvace/astro-bento-portfolio" target="_blank" class="text-red-500">Ladvace.</a> </p> </div> ` })} </main> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
