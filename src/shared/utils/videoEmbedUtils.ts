/**
 * Detect platform and convert video URLs to embed format
 */

type Platform = 'youtube' | 'tiktok' | 'instagram' | 'vimeo' | 'other';

interface ConversionResult {
	platform: Platform;
	embedUrl: string;
	originalUrl: string;
}

/**
 * Convert a video URL to its embed format
 * @param url - The original video URL from social platform
 * @returns Conversion result with platform and embed URL
 */
export function convertToEmbedUrl(url: string): ConversionResult {
	const trimmedUrl = url.trim();

	// YouTube
	if (
		trimmedUrl.includes('youtube.com') ||
		trimmedUrl.includes('youtu.be') ||
		trimmedUrl.includes('youtube-nocookie.com')
	) {
		const videoId = extractYouTubeId(trimmedUrl);
		if (videoId) {
			return {
				platform: 'youtube',
				embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
				originalUrl: trimmedUrl
			};
		}
	}

	// Vimeo
	if (trimmedUrl.includes('vimeo.com')) {
		const videoId = extractVimeoId(trimmedUrl);
		if (videoId) {
			return {
				platform: 'vimeo',
				embedUrl: `https://player.vimeo.com/video/${videoId}`,
				originalUrl: trimmedUrl
			};
		}
	}

	// TikTok
	if (trimmedUrl.includes('tiktok.com')) {
		const videoId = extractTikTokId(trimmedUrl);
		if (videoId) {
			return {
				platform: 'tiktok',
				embedUrl: `https://www.tiktok.com/embed/${videoId}`,
				originalUrl: trimmedUrl
			};
		}
	}

	// Instagram (note: Instagram doesn't support iframe embeds well)
	if (trimmedUrl.includes('instagram.com')) {
		return {
			platform: 'instagram',
			embedUrl: trimmedUrl, // Instagram requires oEmbed API, keep original for now
			originalUrl: trimmedUrl
		};
	}

	// Fallback: other/unknown
	return {
		platform: 'other',
		embedUrl: trimmedUrl,
		originalUrl: trimmedUrl
	};
}

/**
 * Extract YouTube video ID from various URL formats
 */
function extractYouTubeId(url: string): string | null {
	const patterns = [
		/(?:youtube\.com\/watch\?v=)([^&\s]+)/, // youtube.com/watch?v=ID
		/(?:youtube\.com\/shorts\/)([^?\s]+)/, // youtube.com/shorts/ID
		/(?:youtu\.be\/)([^?\s]+)/, // youtu.be/ID
		/(?:youtube\.com\/embed\/)([^?\s]+)/, // youtube.com/embed/ID
		/(?:youtube-nocookie\.com\/embed\/)([^?\s]+)/ // youtube-nocookie.com/embed/ID
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match && match[1]) {
			return match[1];
		}
	}

	return null;
}

/**
 * Extract Vimeo video ID from various URL formats
 */
function extractVimeoId(url: string): string | null {
	const patterns = [
		/(?:vimeo\.com\/)(\d+)/, // vimeo.com/ID
		/(?:player\.vimeo\.com\/video\/)(\d+)/ // player.vimeo.com/video/ID
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match && match[1]) {
			return match[1];
		}
	}

	return null;
}

/**
 * Extract TikTok video ID from various URL formats
 */
function extractTikTokId(url: string): string | null {
	const patterns = [
		/(?:tiktok\.com\/@[^/]+\/video\/)(\d+)/, // tiktok.com/@user/video/ID
		/(?:tiktok\.com\/embed\/)(\d+)/, // tiktok.com/embed/ID
		/(?:vm\.tiktok\.com\/)([^\s?]+)/ // vm.tiktok.com/SHORT_ID (mobile share)
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match && match[1]) {
			return match[1];
		}
	}

	return null;
}

/**
 * Auto-detect platform from URL
 */
export function detectPlatform(url: string): Platform {
	const trimmedUrl = url.trim().toLowerCase();

	if (trimmedUrl.includes('youtube.com') || trimmedUrl.includes('youtu.be')) {
		return 'youtube';
	}
	if (trimmedUrl.includes('vimeo.com')) {
		return 'vimeo';
	}
	if (trimmedUrl.includes('tiktok.com')) {
		return 'tiktok';
	}
	if (trimmedUrl.includes('instagram.com')) {
		return 'instagram';
	}

	return 'other';
}
