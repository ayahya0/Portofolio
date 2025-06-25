import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	}


  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  
}
