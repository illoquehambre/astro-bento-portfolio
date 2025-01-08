/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_Bmc84dX9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CwTY0461.mjs';
import { $ as $$ReactIcon, a as $$TailwindIcon, b as $$AstroIcon, c as $$SpringIcon, d as $$JavaIcon, e as $$DockerIcon, f as $$PostGressIcon, g as $$FlutterIcon, h as $$NextJsIcon, i as $$Stripe, j as $$Index, k as $$Button, l as $$Icon, L as LINKS } from '../../chunks/Stripe_AGOFaY4y.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ignaciomg.xyz/");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const pages = [
    {
      slug: void 0,
      title: "undefined",
      text: "undefined",
      text2: "undefined",
      iconList: [$$ReactIcon],
      image: "/SpotifyClon.png"
    },
    {
      slug: "SpotifyClon",
      title: "Clon de Spotify usando Astro y ReactJs",
      text: `Proyecto basado en el Clon de spotify de Midudev. 
    El objetivo de este proyecto es realiza un reproductor de musica web en el que crear listas de resproducci\xF3n
    a partir de archivos de audio subidos por el usuario. Estas listas ser\xE1n compartibles para la reproducci\xF3n, no la descarga,
    por otros usuarios de la aplicacion..`,
      text2: `Este proyecto contiene un reproductor de musica como estado global usando zustand, el cual
    se mantine activo y editable a lo largo de toda la aplicaci\xF3n;
    Estilos generados con TailwindCSS; Componentes React & Svelte.`,
      text3: `Actualmente se busca realizar el resposive de la app, subida de archivos, implementacion de una BD, login/resgistro de usuarios...`,
      iconList: [$$ReactIcon, $$TailwindIcon, $$AstroIcon],
      image: "/SpotifyClon.png",
      github: "https://github.com/illoquehambre/AstroSpotifyClon",
      website: "https://astro-spotify-clon.vercel.app"
    },
    {
      slug: "HazTuHuerto",
      title: "Proyecto final de DAM",
      text: `Proyecto final del grado superior de Desarrollo de Aplciaciones Multiplataforma.
    La idea de este proyecto es una apliaci\xF3n que ayude a gestionar tu propio huerto, de forma que puedas clasificarlo en parcelas, cultivos y 
    tomar notas de los mismos. Consta tanto de una app movil como una web, interconectadas a un mismo backend y base de datos.
    Al mismo tiempo tendr\xEDa una sencilla red social la cual permitir\xEDa interactuar entre usuarios para
    resolver dudas en cuanto sus propios huertos (a modod de StackOverflow)`,
      text2: `
    Aplicaci\xF3n Fullstack usando Spring como backend, PostgressSQL como base de datos, React como entorno web y Flutter para la app movil.
    En cuanto al backend, se hace uso de SpringSecurity, dockerizaci\xF3n de la base de datos, paginaci\xF3n, gesti\xF3n de errores centralizada, gestion de sesi\xF3n de usuarios con JWT, CRUD completo,
    subida de archivos m\xFAltiples y mucho m\xE1s.`,
      text3: `Actualmente en proceso de refactorizar el frontend para su publicaci\xF3n.`,
      iconList: [
        $$ReactIcon,
        $$SpringIcon,
        $$JavaIcon,
        $$DockerIcon,
        $$PostGressIcon,
        $$FlutterIcon
      ],
      image: "/HazTuHuerto.png",
      github: "https://github.com/illoquehambre/HazTuHuerto",
      website: null
    },
    {
      slug: "DropShipping",
      title: "Tienda de ropa automatizada con dropshipping conectado a printful",
      text: ` La complejidad de este proyeco recae en que, a diferencia de una tienda convencional, 
    no existir\xE1 una gesti\xF3n de stock sino que cada producto comprado por el cliente final ser\xE1 fabricado y
    enviado directamente por el proveedor (printful). De igual manera los productos mostrados en la tienda ser\xE1n importados desde Printful a partir de dise\xF1os 
    generados por el propietario del comercio electronico. Este proyecto no consta de base de datos sinoq ue funciona completamente assyncrono con las APIS de fabricantes, provedores ys istemas de envio.`,
      text2: `El proyecto es desarrollado en Nextjs con TailwindCSS para los estilos. La pasarela de pago es un integraci\xF3n compleja personalizada de Stripe Elements.
    Se hace uso de estados globales para el carrito, localStorage, librerias de componentes de terceros como NextUI...`,
      iconList: [$$ReactIcon, $$NextJsIcon, $$TailwindIcon, $$Stripe],
      image: "/Dropshipping.png",
      github: "https://github.com/illoquehambre/Comercio-Beta",
      website: null
    },
    {
      slug: "WebSaPobla",
      title: "Web de puntos tur\xEDsticos de Sa Pobla, localidad Mallorquina.",
      text: `El objetivo es una web capaz de mostarr a nuevos turistas los puntos de inter\xE9s de la localidad de SaPobla. Para ello se debe hacer uso de un
    dise\xF1o y navegacion intuitivos, internacionalizaci\xF3n, uso de mapas...`,
      text2: `Se hace uso de NextJs y Tailwind, con Leaftlet para mapas y i18n para internacionalizaci\xF3n.
    Este proyecto, ha sido un reto a la hora de integrar por primera vez algunas funciones complejas
    como el uso de mapas, una internacionalizaci\xF3n en 4 idiomas diferentes y unos estilos din\xE1micos con tailwind
    en funci\xF3n de la ruta en la que el usuario se encuentre.`,
      iconList: [$$ReactIcon, $$NextJsIcon, $$TailwindIcon],
      image: "/SaPobla.png",
      github: "https://github.com/alexsociasdev/webturisme",
      website: "https://www.sapobla.net/es"
    },
    {
      slug: "Inmogibert",
      title: "Web de inmobiliaria con CRUD.",
      text: `El objetivo es una web para la venta y alquiler de propiedades en mallorca para la inmobiliaria Inmogibert.
    Para ello no solo se muestran las viviendas de forma paginada con diversos filtros, sino que tambien cuenta con login a una zona de administrador.
    En esta zona de administrador se puede hacer CRUD completo de todas las propiedades, solo pro aquellos usuarios autorizados.`,
      text2: `Se hace uso de NextJs como framework,Tailwind como estilos, Leaftlet para mapas y firebase como base de datos.
    Este proyecto, ha sido un reto a la hora de integrar una api compleja en este proyecto de NextJs adem\xE1s de un frontend muy grande.`,
      iconList: [$$ReactIcon, $$NextJsIcon, $$TailwindIcon],
      image: "/inmogibert.png",
      github: "https://github.com/alexsociasdev/inmogibertv2",
      website: "https://www.inmogibert.com"
    }
  ];
  const { slug } = Astro2.params;
  const page = pages.find((page2) => page2.slug === slug);
  if (!page) return Astro2.redirect("/404");
  const { title, text, text2, iconList, image, github, website } = page;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": slug ? slug : "UndefinedProject", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-8 text-white m-auto p-4 flex flex-col gap-4 md:gap-6 max-w-7xl overflow-hidden relative w-full sm:p-8 md:p-12 lg:max-h-[800px]"> <div class="text-white flex align-center align-middle gap-4"> <a href="/" class="bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg
        text-center align-center h-fit">Back</a> <span class="text-middle"> <h1 class="text-xl sm:text-2xl md:text-4xl font-bold h-fit"> ${title} </h1> </span> </div> <div class="md:col-span-2 md:row-span-4 gap-4 grid sm:gap-2 md:grid-cols-2 md:gap-3 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4"> <div class="md:col-span-2 md:row-span-4 flex flex-col gap-4"> ${renderComponent($$result2, "Card", $$Index, { "title": "Objetivo y Funcionalidades", "colSpan": "md:col-span-2", "rowSpan": "md:row-span-4", "body": text })} ${renderComponent($$result2, "Card", $$Index, { "title": "Tecnolog\xEDas y Aprendizaje", "colSpan": "md:col-span-2", "rowSpan": "md:row-span-4", "body": text2 })} </div> <div class="md:col-span-2 md:row-span-4"> <div class="rounded-xl"> <img class="rounded-xl"${addAttribute(image, "src")}${addAttribute(`${title}`, "alt")}> </div> <div class="flex flex-col sm:flex-row gap-6 w-full items-center justify-between mt-6 sm:mt-4"> <div class="flex gap-6 w-full items-center ml-3 md:ml-1"> <a${addAttribute(github, "href")} aria-label="github profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:github-fill", "class": "h-6" })} <span class="sr-only">GitHub Project</span> ` })} </a> ${website && renderTemplate`<a${addAttribute(website, "href")} aria-label="github profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:link", "class": "h-6" })} <span class="sr-only">Website</span> ` })} </a>`} </div> <div class="flex gap-6 w-full items-center sm:justify-right mr-2 ml-4"> ${iconList.map((Icon2) => renderTemplate`${renderComponent($$result2, "Icon", Icon2, {})}`)} </div> </div> <div> <a class="flex gap-6 w-full items-align h-30"${addAttribute(LINKS.github, "href")} aria-label="github profile" target="_blank"></a> </div> </div> </div> </main> ` })}`;
}, "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/Nacho/Desktop/repos/astro-bento-portfolio/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
