<script lang="ts">
	// CLASS
	import { contactPageClass } from '@/routes/(unprotected)/contact/index.svelte';

	// COMPONENTS
	import ContactSuccessful from './contact-successful.svelte';
	import ContactForm from './contact-form.svelte';
</script>

<div class="relative">
    <div class="relative bg-dark-surface border border-dark-border rounded-[28px] p-6 sm:p-8 md:p-10">
        {#if contactPageClass.isSuccess}
            <ContactSuccessful />
        {:else}
            <ContactForm />
        {/if}
    </div>
</div>