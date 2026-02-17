import * as v from 'valibot';

const SERVICE_OPTIONS = [
	'UGC Production',
	'Performance Creative',
	'Creator Partnership',
	'Full Campaign Management',
	'Other'
] as const;

const BUDGET_OPTIONS = [
	'Under €1k',
	'€1k - €5k',
	'€5k - €10k',
	'€10k+',
	'Not sure yet'
] as const;

/**
 * Contact form schema
 * Validates contact form submission data
 */
export const contactFormSchema = v.object({
	name: v.pipe(
		v.string(),
		v.minLength(2, 'Name must be at least 2 characters'),
		v.maxLength(100, 'Name must be at most 100 characters')
	),
	email: v.pipe(
		v.string(),
		v.minLength(1, 'Email is required'),
		v.email('Please enter a valid email address')
	),
	service: v.picklist(SERVICE_OPTIONS, 'Please select a service'),
	budget: v.pipe(
		v.string(),
		v.minLength(1, 'Budget cannot be empty'),
		v.picklist(BUDGET_OPTIONS)
	),
	message: v.pipe(
		v.string(),
		v.minLength(10, 'Project details must be at least 10 characters'),
		v.maxLength(5000, 'Project details must be at most 5000 characters')
	)
});

export type ContactFormInput = v.InferInput<typeof contactFormSchema>;
export type ContactFormOutput = v.InferOutput<typeof contactFormSchema>;
