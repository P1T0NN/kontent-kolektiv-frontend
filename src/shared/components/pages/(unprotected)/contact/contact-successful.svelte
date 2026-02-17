<script lang="ts">
    // CLASS
    import { contactPageClass } from '@/routes/(unprotected)/contact/index.svelte';

    // LUCIDE ICONS
    import CheckCircleIcon from '@lucide/svelte/icons/check-circle';
</script>

<div class="flex flex-col items-center justify-center text-center py-20 animate-[fadeIn_0.5s_ease]">
    <div class="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
        <CheckCircleIcon class="w-8 h-8" />
    </div>

    <h3 class="text-2xl font-bold text-light mb-3">Message Received!</h3>

    <p class="text-light-muted max-w-xs mx-auto mb-8">
        Thanks for reaching out. Our team will review your inquiry and get back to you within 24 hours.
    </p>

    <button 
        onclick={() => contactPageClass.isSuccess = false}
        class="px-6 py-2.5 rounded-full bg-dark-card border border-dark-border text-light font-medium hover:bg-dark-border transition-colors"
    >
        Send another message
    </button>
</div>