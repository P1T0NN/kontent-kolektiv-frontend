// LIBRARIES
import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';
import { v } from 'convex/values';

const schema = defineSchema({
	...authTables,
	users: defineTable({
		// Auth fields from @convex-dev/auth
		email: v.optional(v.string()),
		emailVerificationTime: v.optional(v.number()),
		image: v.optional(v.string()),
		isAnonymous: v.optional(v.boolean()),
		name: v.optional(v.string()),
		phone: v.optional(v.string()),
		phoneVerificationTime: v.optional(v.number()),

		// Custom fields
		role: v.union(v.literal('admin'), v.literal('user'))
	}).index('email', ['email']),

	// Audit logs table (enable via FEATURES.AUDIT_LOGS in features.ts)
	auditLogs: defineTable({
		userId: v.id('users'),
		action: v.string(),
		targetTable: v.optional(v.string()),
		targetId: v.optional(v.string()),
		metadata: v.optional(v.any()),
		timestamp: v.number()
	})
		.index('by_user', ['userId'])
		.index('by_action', ['action'])
		.index('by_timestamp', ['timestamp']),

	videos: defineTable({
		platform: v.union(
			v.literal('youtube'),
			v.literal('tiktok'),
			v.literal('instagram'),
			v.literal('vimeo'),
			v.literal('other')
		),
		embedUrl: v.string(), // Direct embed URL from social platform
		thumbnailUrl: v.optional(v.string()), // Custom thumbnail or auto-extracted
		creatorName: v.optional(v.string()), // Display name for the creator
		brandName: v.optional(v.string()), // Client brand featured
		order: v.number(), // Display order in showcase
		status: v.union(v.literal('published'), v.literal('draft')),
		createdAt: v.number(),
		updatedAt: v.number()
	})
		.index('by_status', ['status'])
		.index('by_order', ['order'])
		.index('by_status_and_order', ['status', 'order']),
});

export default schema;
