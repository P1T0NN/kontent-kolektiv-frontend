<script lang="ts">
    // DATA
    import { howItWorksData } from '@/shared/data/howItWorksData';
</script>

{#each howItWorksData as step, i}
    <div class="relative flex gap-5">
        <!-- Vertical line + node column -->
        <div class="relative flex flex-col items-center">
            <!-- Node -->
            <div
                class="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 bg-[#12122A]"
                style="border-color: {step.accent}; box-shadow: 0 0 0 3px {step.accent}18;"
            >
                <span class="font-mono text-[0.65rem] font-bold" style="color: {step.accent};">{step.number}</span>
            </div>
            <!-- Connecting line (except last) -->
            {#if i < howItWorksData.length - 1}
                <div class="mt-1 w-px flex-1 bg-linear-to-b from-[#2A2A4A] to-transparent" style="min-height: 40px;"></div>
            {/if}
        </div>

        <!-- Card -->
        <div
            class="group mb-5 flex-1 cursor-default overflow-hidden rounded-2xl border border-[#2A2A4A] bg-[#0A0A1A] p-5"
            style="--step-accent: {step.accent};"
        >
            <!-- Ghost number in icon position -->
            <div class="mb-3 flex size-9 items-center justify-center overflow-visible rounded-xl" style="background: {step.accent}18; border: 1px solid {step.accent}30;">
                <span
                    class="pointer-events-none select-none font-black italic leading-none text-2xl opacity-[0.15]"
                    style="color: {step.accent};"
                >
                    {step.number}
                </span>
            </div>
            <h3 class="mb-1.5 text-[0.95rem] font-extrabold tracking-[-0.01em] text-white">{step.title()}</h3>
            <p class="text-[0.8rem] leading-relaxed text-[#B0B0CC]">{step.desc()}</p>
        </div>
    </div>
{/each}