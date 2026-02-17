<script lang="ts">
	// LUCIDE ICONS
	import MailIcon from '@lucide/svelte/icons/mail';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
</script>

<div class="flex flex-col pt-4">
    <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-light mb-6 leading-tight font-display">
        Let's build your next <span class="text-transparent bg-clip-text bg-gradient-brand">winning campaign.</span>
    </h2>
    
    <p class="text-lg text-light-muted leading-relaxed mb-10 max-w-md">
        Tell us about your brand and goals. We'll put together a custom content plan with creator recommendations within 24 hours.
    </p>

    <div class="flex flex-col gap-6 mb-12">
        <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center shrink-0 text-primary">
                <MailIcon class="w-5 h-5" />
            </div>
            <div>
                <h3 class="text-base font-semibold text-light mb-1">Email Us</h3>
                <a href="mailto:hello@kontentkolektiv.com" class="text-light-dim hover:text-white transition-colors">hello@kontentkolektiv.com</a>
            </div>
        </div>
        
        <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center shrink-0 text-secondary">
                <MapPinIcon class="w-5 h-5" />
            </div>
            <div>
                <h3 class="text-base font-semibold text-light mb-1">HQ</h3>
                <p class="text-light-dim">Sofia, Bulgaria</p>
                <p class="text-sm text-light-muted mt-1">Serving clients globally</p>
            </div>
        </div>
    </div>
</div>