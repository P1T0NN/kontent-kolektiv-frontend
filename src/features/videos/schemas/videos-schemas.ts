import * as v from 'valibot';

const PLATFORM_OPTIONS = ['youtube', 'tiktok', 'instagram', 'vimeo', 'other'] as const;

/**
 * Add video form schema
 * Validates add video form submission data
 */
export const addVideoFormSchema = v.object({
	platform: v.picklist(PLATFORM_OPTIONS, 'Please select a platform'),
	embedUrl: v.pipe(
		v.string(),
		v.minLength(1, 'Embed URL is required'),
		v.maxLength(2000, 'Embed URL is too long')
	),
	thumbnailUrl: v.optional(
		v.pipe(
			v.string(),
			v.maxLength(2000, 'Thumbnail URL is too long')
		)
	),
	creatorName: v.optional(
		v.pipe(
			v.string(),
			v.maxLength(200, 'Creator name is too long')
		)
	),
	brandName: v.optional(
		v.pipe(
			v.string(),
			v.maxLength(200, 'Brand name is too long')
		)
	)
});

export type AddVideoFormInput = v.InferInput<typeof addVideoFormSchema>;
export type AddVideoFormOutput = v.InferOutput<typeof addVideoFormSchema>;
