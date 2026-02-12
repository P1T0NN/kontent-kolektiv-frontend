// SVELTEKIT IMPORTS
import { redirect } from '@sveltejs/kit';

// CONFIG
import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants.js';

// TYPES
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, UNPROTECTED_PAGE_ENDPOINTS.ROOT);
	}

	if (locals.user.role !== 'admin') {
		throw redirect(302, UNPROTECTED_PAGE_ENDPOINTS.ROOT);
	}

	return {
		user: locals.user
	};
};

