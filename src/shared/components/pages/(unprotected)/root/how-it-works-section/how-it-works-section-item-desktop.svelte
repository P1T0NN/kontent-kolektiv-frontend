<script lang="ts">
    // DATA
    import { howItWorksData } from '@/shared/data/howItWorksData';
</script>

{#each howItWorksData as step, i}
    <div
        class="group relative cursor-default overflow-hidden rounded-2xl border border-[#2A2A4A] bg-[#0A0A1A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-opacity-60"
        style="--step-accent: {step.accent}; animation: cardReveal 0.5s ease both; animation-delay: {i * 0.1}s;"
    >
        <!-- Hover glow inset -->
        <div
            class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style="box-shadow: inset 0 0 30px {step.accent}0A; border: 1px solid {step.accent}30;"
        ></div>

        <!-- Ghost number in icon position -->
        <div
            class="mb-4 flex size-10 items-center justify-center overflow-visible transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110"
            style="background: {step.accent}18; border: 1px solid {step.accent}30;"
        >
            <span
                class="pointer-events-none select-none font-black italic leading-none text-[3rem] opacity-[0.15] transition-opacity duration-300 group-hover:opacity-[0.25]"
                style="color: {step.accent};"
            >
                {step.number}
            </span>
        </div>

        <h3 class="relative z-10 mb-2 text-[1rem] font-extrabold leading-snug tracking-[-0.01em] text-white">
            {step.title()}
        </h3>
        <p class="relative z-10 text-[0.82rem] leading-relaxed text-[#B0B0CC]">
            {step.desc()}
        </p>

        <!-- Bottom accent bar -->
        <div
            class="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 rounded-b-2xl transition-transform duration-300 group-hover:scale-x-100"
            style="background: linear-gradient(to right, {step.accent}, transparent);"
        ></div>
    </div>
{/each}