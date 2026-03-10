<script lang="ts">
    // COMPONENTS
    import AnimatedDashedBorderOnHover from '@/shared/components/ui/designs/animated-dashed-border-on-hover.svelte';

    // DATA
    import { whyChooseUsData } from '@/shared/data/whyChooseUsData';
</script>

{#each whyChooseUsData as reason, i}
    <div
        class="card-reveal group relative cursor-default overflow-hidden rounded-[20px] border border-[#2A2A4A] bg-[#12122A] p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:-rotate-[0.4deg]"
        style="
            --card-accent: {reason.accent};
            animation-delay: {i * 0.08}s;
        "
        >
        <AnimatedDashedBorderOnHover accent={reason.accent} />

        <div
            class="relative z-1 mb-5 inline-flex items-center rounded-md border px-2.5 py-0.5 font-mono text-[0.6rem] font-bold tracking-widdest"
            style="background: {reason.accent}18; color: {reason.accent}; border-color: {reason.accent}40;"
        >
            {reason.tag()}
        </div>

        <div class="relative z-1 mb-5 size-[52px]">
            <div
                class="relative z-2 flex size-[52px] items-center justify-center rounded-[14px] text-white transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110"
                style="background: linear-gradient(135deg, {reason.accent} 0%, color-mix(in srgb, {reason.accent} 60%, #6C63FF) 100%);"
            >
                <svelte:component this={reason.icon} class="h-6 w-6" />
            </div>

            <!-- Glow -->
            <div
                class="absolute inset-[-4px] z-1 rounded-[18px] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-35"
                style="background: {reason.accent};"
            ></div>
        </div>

        <!-- Stat -->
        <div class="relative z-1 mb-2.5 flex items-baseline gap-1.5">
            <span class="text-[2.2rem] font-black italic leading-none tracking-[-0.03em]" style="color: {reason.accent};">
                {reason.stat}
            </span>

            <span class="font-mono text-[0.65rem] uppercase tracking-[0.05em] text-[#8888AA]">
                {reason.statLabel()}
            </span>
        </div>

        <h3 class="relative z-1 mb-2 text-[1.15rem] font-extrabold tracking-[-0.01em] text-white">
            {reason.title()}
        </h3>

        <p class="relative z-1 text-sm leading-[1.65] text-[#B0B0CC]">
            {reason.desc()}
        </p>
    </div>
{/each}

<style>
    @keyframes cardReveal {
		from { opacity: 0; transform: translateY(24px) rotate(-0.5deg); }
		to   { opacity: 1; transform: translateY(0) rotate(0deg); }
	}
	.card-reveal { animation: cardReveal 0.5s ease both; }
</style>