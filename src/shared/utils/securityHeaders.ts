/**
 * Security headers configuration and utilities
 */

/**
 * Generate Content-Security-Policy header
 * Adjust based on your app's needs
 */
export function getContentSecurityPolicy(): string {
	return [
		"default-src 'self'",
		"script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:",
		"worker-src 'self' blob:",
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
		"img-src 'self' data: https:",
		"font-src 'self' data: https://fonts.gstatic.com",
		"connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com https://www.googleapis.com https://*.convex.cloud wss://*.convex.cloud",
		"frame-src 'self' https://accounts.google.com https://www.youtube.com https://www.youtube-nocookie.com https://m.youtube.com https://consent.youtube.com https://player.vimeo.com https://www.tiktok.com https://www.instagram.com",
		"object-src 'none'",
		"base-uri 'self'",
		"form-action 'self'",
		"frame-ancestors 'none'",
		"upgrade-insecure-requests"
	].join("; ");
  }

/**
 * Security headers to add to all responses
 */
export function getSecurityHeaders(): Record<string, string> {
	return {
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
		'Content-Security-Policy': getContentSecurityPolicy()
	};
}

/**
 * Get HSTS header (only for HTTPS)
 */
export function getHstsHeader(): string {
	return 'max-age=31536000; includeSubDomains; preload';
}

