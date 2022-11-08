import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	clearScreen: false,
	plugins: [sveltekit()]
};

export default config;
