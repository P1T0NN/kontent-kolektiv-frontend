// LIBRARIES
import { convexAuth } from '@convex-dev/auth/server';
import Google from '@auth/core/providers/google';

const ADMIN_EMAILS = [
	"ognjen.tapuskovic@gmail.com"
] as const;

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
	providers: [Google],
	callbacks: {
		async createOrUpdateUser(ctx, args) {
			const email = args.profile?.email as string | undefined;

			if (args.existingUserId) {
				return args.existingUserId;
			}

			if (!email || !ADMIN_EMAILS.includes(email as typeof ADMIN_EMAILS[number])) {
				throw new Error('Access denied. Only whitelisted admins can sign up.');
			}

			return ctx.db.insert('users', {
				...args.profile,
				role: 'admin'
			});
		}
	}
});
