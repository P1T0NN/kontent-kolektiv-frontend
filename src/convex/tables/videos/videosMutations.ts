// LIBRARIES
import { mutation } from '../../_generated/server';
import { v } from 'convex/values';

// HELPERS
import { requireAdmin } from '../../helpers/requireAdmin';

// UTILS
import { convex_convertToEmbedUrl } from '../../utils/convex_videoEmbedUtils';

export const createVideo = mutation({
	args: {
		platform: v.union(
			v.literal('youtube'),
			v.literal('tiktok'),
			v.literal('instagram'),
			v.literal('vimeo'),
			v.literal('other')
		),
		embedUrl: v.string(),
		thumbnailUrl: v.optional(v.string()),
		creatorName: v.optional(v.string()),
		brandName: v.optional(v.string()),
		status: v.union(v.literal('published'), v.literal('draft'))
	},
	handler: async (ctx, args) => {
		await requireAdmin(ctx);
		const now = Date.now();
		const existing = await ctx.db.query('videos').withIndex('by_order').collect();
		const order = existing.length > 0 ? Math.max(...existing.map((v) => v.order)) + 1 : 0;

		// Convert to embed URL and auto-detect platform if needed
		const { embedUrl, detectedPlatform } = convex_convertToEmbedUrl(args.embedUrl);
		const platform = (args.platform === 'other' ? detectedPlatform : args.platform) as typeof args.platform;

		await ctx.db.insert('videos', {
			...args,
			platform,
			embedUrl,
			order,
			createdAt: now,
			updatedAt: now
		});

		return {
			success: true,
			message: 'Video added successfully'
		};
	}
});

export const deleteVideo = mutation({
	args: {
		id: v.id('videos')
	},
	handler: async (ctx, args) => {
		await requireAdmin(ctx);
		await ctx.db.delete(args.id);
		return {
			success: true,
			message: 'Video deleted successfully'
		};
	}
});

