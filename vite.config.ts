import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ 
    plugins: [
        paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/shared/lib/paraglide',
			strategy: ['url', 'baseLocale'],
			disableAsyncLocalStorage: true,
			urlPatterns: [
				{ pattern: '/', localized: [['en', '/en'], ['bg', '/bg']] },
				{ pattern: '/:path(.*)?', localized: [['en', '/en/:path(.*)?'], ['bg', '/bg/:path(.*)?']] }
			]
		}),
        tailwindcss(), 
        sveltekit()
    ] 
});
