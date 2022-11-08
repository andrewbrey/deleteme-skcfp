import { dev } from '$app/environment';
import type { PageServerLoad } from './$types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

type SiteLink = { text: string; link: string };

export const load: PageServerLoad = async () => {
	const links: SiteLink[] = [
		{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/andrew-brey' },
		{ text: 'Blog', link: 'https://blog.andrewbrey.com' },
		{ text: 'GitHub', link: 'https://github.com/andrewbrey' },
		{ text: 'Resume', link: '/assets/AndrewBrey_resume.pdf' }
	];

	return {
		links
	};
};
