// SVELTEKIT IMPORTS
import { error } from '@sveltejs/kit';

// TYPES
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const status = Number.parseInt(url.searchParams.get('status') || '500', 10);
	const message = url.searchParams.get('message') || 'An error occurred';

	// Throw error so +error.svelte can handle it
	throw error(status, message);
};

