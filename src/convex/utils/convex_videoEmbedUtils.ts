/**
 * Convert video URL to embed format
 */
export function convex_convertToEmbedUrl(url: string): { embedUrl: string; detectedPlatform: string } {
	const trimmedUrl = url.trim();

	// YouTube
	if (trimmedUrl.includes('youtube.com') || trimmedUrl.includes('youtu.be')) {
		const videoId = extractYouTubeId(trimmedUrl);
		if (videoId) {
			return {
				embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
				detectedPlatform: 'youtube'
			};
		}
	}

	// Vimeo
	if (trimmedUrl.includes('vimeo.com')) {
		const videoId = extractVimeoId(trimmedUrl);
		if (videoId) {
			return {
				embedUrl: `https://player.vimeo.com/video/${videoId}`,
				detectedPlatform: 'vimeo'
			};
		}
	}

	// TikTok
	if (trimmedUrl.includes('tiktok.com')) {
		const videoId = extractTikTokId(trimmedUrl);
		if (videoId) {
			return {
				embedUrl: `https://www.tiktok.com/embed/${videoId}`,
				detectedPlatform: 'tiktok'
			};
		}
	}

	// Instagram
	if (trimmedUrl.includes('instagram.com')) {
		return { embedUrl: trimmedUrl, detectedPlatform: 'instagram' };
	}

	return { embedUrl: trimmedUrl, detectedPlatform: 'other' };
}

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
		if (match?.[1]) return match[1];
	}
	return null;
}

function extractVimeoId(url: string): string | null {
	const patterns = [/(?:vimeo\.com\/)(\d+)/, /(?:player\.vimeo\.com\/video\/)(\d+)/];
	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match?.[1]) return match[1];
	}
	return null;
}

function extractTikTokId(url: string): string | null {
	const patterns = [
		/(?:tiktok\.com\/@[^/]+\/video\/)(\d+)/,
		/(?:tiktok\.com\/embed\/)(\d+)/,
		/(?:vm\.tiktok\.com\/)([^\s?]+)/
	];
	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match?.[1]) return match[1];
	}
	return null;
}