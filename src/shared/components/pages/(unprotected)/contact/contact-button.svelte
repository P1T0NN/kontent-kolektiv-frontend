<script lang="ts">
    // LIBRARIES
    import * as v from 'valibot';

    // CLASS
    import { contactPageClass } from '@/routes/(unprotected)/contact/index.svelte';

    // COMPONENTS
    import Button from '@/shared/components/ui/button/button.svelte';
    import Spinner from '@/shared/components/ui/spinner/spinner.svelte';
    import { toast } from 'svelte-sonner';

    // ACTIONS
    import { submitContactForm } from '@/features/contact/actions/contactActions.remote';

    // SCHEMAS
    import { contactFormSchema, type ContactFormInput } from '@/features/contact/schemas/contact-schemas';

    // UTILS
    import { handleValidationErrors } from '@/shared/utils/validationUtils';

    const handleContactSubmit = async () => {
        contactPageClass.clearFieldErrors();

        const validation = v.safeParse(contactFormSchema, contactPageClass.contactFormInputs);

        if (!validation.success) {
            contactPageClass.fieldErrors = handleValidationErrors(validation.issues);
            return;
        } else {
            contactPageClass.pendingStates.contactIsPending = true;

            const result = await submitContactForm(validation.output as ContactFormInput);

            if (result.success) {
                contactPageClass.isSuccess = true;
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }

            contactPageClass.pendingStates.contactIsPending = false;
        }
    }
</script>

<Button
    type="button"
    onclick={handleContactSubmit}
    disabled={contactPageClass.pendingStates.contactIsPending}
    class="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-brand rounded-xl text-light font-semibold text-base hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-[0_4px_20px_rgba(233,69,144,0.25)] hover:shadow-[0_8px_30px_rgba(233,69,144,0.4)]"
>
    {#if contactPageClass.pendingStates.contactIsPending}
        <Spinner />
        Sending...
    {:else}
        Send Message
    {/if}
</Button>