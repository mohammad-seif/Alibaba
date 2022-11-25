// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1',
			title: 'Alibaba Code Challenge',
			meta: [{ name: 'description', content: 'My amazing site.' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans',
					crossorigin: ''
				}
			]
		}
	},
	modules: ['nuxt-icon'],
	buildModules: ['@nuxtjs/google-analytics'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/_variables.scss";'
				}
			}
		}
	}
});
