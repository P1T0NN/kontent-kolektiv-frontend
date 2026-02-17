// LIBRARIES
import { query } from '../../_generated/server';
import { v } from 'convex/values';

// HELPERS
import { requireAdmin } from '../../helpers/requireAdmin';

export const fetchAllVideos = query({
	args: {
		status: v.optional(v.union(v.literal('published'), v.literal('draft')))
	},
	handler: async (ctx, args) => {
		await requireAdmin(ctx);
		if (args.status) {
			return await ctx.db
				.query('videos')
				.withIndex('by_status', (q) => q.eq('status', args.status as 'published' | 'draft'))
				.collect();
		}
		return await ctx.db
			.query('videos')
			.withIndex('by_order')
			.collect();
	}
});

export const fetchAllPublishedVideos = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db
			.query('videos')
			.withIndex('by_status_and_order', (q) => q.eq('status', 'published'))
			.collect();
	}
});
