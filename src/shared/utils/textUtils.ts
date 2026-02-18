/**
 * Get initials from a full name.
 * "Ognjen Tapuskovic" → "OT"
 * "John Doe Smith" → "JS" (first + last)
 */
export function getInitials(name: string | null | undefined): string {
	if (!name?.trim()) return '';
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? '';
	const first = parts[0][0] ?? '';
	const last = parts[parts.length - 1][0] ?? '';
	return (first + last).toUpperCase();
}
