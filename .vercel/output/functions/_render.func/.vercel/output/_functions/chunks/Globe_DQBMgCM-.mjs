import { ssr, ssrHydrationKey } from 'solid-js/web';
import { onMount } from 'solid-js';
import 'd3';

var _tmpl$ = ["<div", ' class="flex flex-col text-white justify-center items-center w-full h-full overflow-hidden rounded-lg"><div class="w-full flex justify-center"></div></div>'];
const GlobeComponent = () => {
  onMount(() => {
    return;
  });
  return ssr(_tmpl$, ssrHydrationKey());
};

export { GlobeComponent as G };
