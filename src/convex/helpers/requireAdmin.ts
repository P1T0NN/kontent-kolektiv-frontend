// LIBRARIES
import { getAuthUserId } from '@convex-dev/auth/server';
import { ConvexError } from 'convex/values';

// TYPES
import type { MutationCtx, QueryCtx } from '@/convex/_generated/server';

/**
 * Require admin role for the current user
 * Throws ConvexError if not authenticated or not an admin
 */
export const requireAdmin = async (ctx: MutationCtx | QueryCtx) => {
	const userId = await getAuthUserId(ctx);

	if (!userId) {
		throw new ConvexError('Not authenticated');
	}

	const user = await ctx.db.get(userId);

	if (!user || user.role !== 'admin') {
		throw new ConvexError('Admin access required');
	}

	return userId;
};
