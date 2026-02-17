// SVELTEKIT IMPORTS
import { command } from "$app/server";

// SCHEMAS
import { contactFormSchema } from "../schemas/contact-schemas";

export const submitContactForm = command(contactFormSchema, async (data) => {
	await new Promise(resolve => setTimeout(resolve, 1500));
	
	// TODO: Send email, store in DB, or forward to CRM
	console.log('Contact form submission:', data);

	return { 
		success: true as const,
		message: 'Contact form submitted successfully'
	} as const;
});
