/**
 * Helper to extract error message from response data
 */
export function getErrorMessage(data: unknown, fallback: string): string {
	const obj = data as { message?: string; error?: { message?: string } };
	return obj?.message || obj?.error?.message || (typeof data === 'string' ? data : fallback);
}

/**
 * Helper to extract data from response
 */
export function getResponseData<T>(data: unknown): T {
	const obj = data as { data?: T };
	return obj?.data ?? (data as T);
}

/**
 * Helper to extract message from response
 */
export function getResponseMessage(data: unknown): string {
	const obj = data as { message?: string };
	return obj?.message || '';
}

