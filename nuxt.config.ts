import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	head: {
		title: 'ASCLEPIUS',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'og-title', property: 'og:title', content: 'ASCLEPIUS - ASL TO ENGLISH' },
			{ hid: 'og-desc', property: 'og:description', content: 'Easily communicate with person having hearing or speech disability.' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ hid: 'og-image', property: 'og:image', content: '/logo.png' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
			{ href: 'https://fonts.googleapis.com/css2?family=Krub&display=swap', rel: 'stylesheet' },
			{ href: 'https://fonts.googleapis.com/css2?family=Mitr&display=swap', rel: 'stylesheet' },
			{ href: 'https://fonts.googleapis.com/css2?family=Fahkwang&display=swap', rel: 'stylesheet' },
			{ href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap', rel: 'stylesheet' },
		]
	},

	// css: [
	// 	'~/assets/css/tailwind.css',
	// ],

	modules: [
		'@nuxtjs/tailwindcss',
		// '@nuxtjs/toast'
	],

	publicRuntimeConfig: {
		wsHost: process.env.WS_HOST,
		wsPort: process.env.WS_PORT,
		wsPath: process.env.WS_PATH,
	},
});
