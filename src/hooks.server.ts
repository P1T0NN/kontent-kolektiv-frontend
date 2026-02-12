// SVELTEKIT IMPORTS
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';

// LIBRARIES
import { paraglideMiddleware } from '@/shared/lib/paraglide/server';
import { createConvexAuthHooks, createRouteMatcher } from '@mmailaender/convex-auth-svelte/sveltekit/server';
import { api } from '@/convex/_generated/api';

// CONFIG
import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants.js';

// UTILS
import { getSecurityHeaders, getHstsHeader } from '@/shared/utils/securityHeaders.js';

// TYPES
import type { Handle } from '@sveltejs/kit';

const isPublicRoute = createRouteMatcher(Object.values(UNPROTECTED_PAGE_ENDPOINTS));

const { handleAuth, isAuthenticated, createConvexHttpClient } = createConvexAuthHooks();

const requireAuth: Handle = async ({ event, resolve }) => {
	// Allow public routes
	if (isPublicRoute(event.url.pathname)) {
		return resolve(event);
	}

	// Check if user is authenticated
	if (!(await isAuthenticated(event))) {
		// Redirect to signin if not authenticated
		throw redirect(302, `${UNPROTECTED_PAGE_ENDPOINTS.ROOT}`);
	}

	// Fetch user data for protected routes (needed for role-based access control)
	const client = await createConvexHttpClient(event);
	const user = await client.query(api.tables.users.usersQueries.getCurrentUser);
	event.locals.user = user;

	// User is authenticated, proceed
	return resolve(event);
};

// Security headers handle - adds security headers to all responses
const securityHeadersHandle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Add security headers to all responses
	const headers = getSecurityHeaders();
	for (const [key, value] of Object.entries(headers)) {
		response.headers.set(key, value);
	}

	// HSTS header (only on HTTPS)
	if (event.url.protocol === 'https:') {
		response.headers.set('Strict-Transport-Security', getHstsHeader());
	}

	return response;
};

// Paraglide middleware handle
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});

// Chain handles: rate limit first, then session validation, then security headers, then paraglide
export const handle: Handle = sequence(handleAuth, requireAuth, securityHeadersHandle, paraglideHandle);
