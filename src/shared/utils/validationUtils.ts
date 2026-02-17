/**
 * Handle validation errors from forms, APIs, or other sources
 * @param errors - Validation errors in various formats
 * @param options - Configuration options
 * @returns Formatted validation errors as Record<string, string[]>
 */
export function handleValidationErrors(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
	errors: any,
	options: {
		fieldMapping?: Record<string, string>;
	} = {}
): Record<string, string[]> {
	const { fieldMapping = {} } = options;

	// Handle different error formats
	let formattedErrors: Record<string, string[]> = {};

	if (Array.isArray(errors)) {
		// Handle array of errors (including Valibot issues)
		errors.forEach((error, index) => {
			if (typeof error === 'string') {
				formattedErrors[`error_${index}`] = [error];
			} else if (error && typeof error === 'object') {
				// Handle Valibot issue format
				let field: string;
				
				if (error.path) {
					// Valibot provides path as an array of objects like [{ key: 'fieldName' }]
					if (Array.isArray(error.path) && error.path.length > 0) {
						// Extract the key from the first path item
						field = error.path[0]?.key || `field_${index}`;
					} else {
						field = `field_${index}`;
					}
				} else {
					field = error.field || `field_${index}`;
				}
				
				const message = error.message || error.error || 'Invalid value';
				
				// Append to existing errors for this field or create new array
				if (formattedErrors[field]) {
					formattedErrors[field].push(message);
				} else {
					formattedErrors[field] = [message];
				}
			}
		});
	} else if (errors && typeof errors === 'object') {
		// Handle object with field keys
		Object.entries(errors).forEach(([field, error]) => {
			if (typeof error === 'string') {
				formattedErrors[field] = [error];
			} else if (error && typeof error === 'object' && 'message' in error) {
				formattedErrors[field] = [error.message as string];
			} else if (Array.isArray(error) && error.length > 0) {
				// If error is already an array of strings, use it
				if (error.every(e => typeof e === 'string')) {
					formattedErrors[field] = error as string[];
				} else {
					// Convert array elements to strings
					formattedErrors[field] = error.map(e => String(e));
				}
			} else {
				formattedErrors[field] = ['Invalid value'];
			}
		});
	} else if (typeof errors === 'string') {
		// Handle single string error
		formattedErrors.general = [errors];
	}

	// Apply field mapping if provided
	if (Object.keys(fieldMapping).length > 0) {
		const mappedErrors: Record<string, string[]> = {};
		Object.entries(formattedErrors).forEach(([field, messages]) => {
			const mappedField = fieldMapping[field] || field;
			mappedErrors[mappedField] = messages;
		});
		formattedErrors = mappedErrors;
	}

	return formattedErrors;
}

/**
 * Convert string[] to FieldError-compatible format { message: string }[]
 */
export function toFieldErrors(messages?: string[]): { message: string }[] | undefined {
	return messages?.map((m) => ({ message: m }));
}