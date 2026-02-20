<script lang="ts">
	// CLASS
	import { rootPageClass } from '@/routes/index.svelte';

	// COMPONENTS
	import DiagonalCutFromTopRightToBottomLeft from '@/shared/components/ui/page-transitions/diagonal-cut-from-top-right-to-bottom-left.svelte';

	// DATA
	import { testimonialsData } from '@/shared/data/testimonialsData';

	// LUCIDE ICONS
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
</script>

<section id="results" class="relative pt-28 pb-44 bg-dark-surface overflow-hidden">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-center mb-16">
			<p class="text-sm text-light-dim mb-3">Success Stories</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light">
				Brand success,<br /><span class="gradient-text">powered by KontentKolektiv</span>
			</h2>
		</div>

		<div class="relative">
			{#each testimonialsData as testimonial, i}
				{#if i === rootPageClass.pageStates.resultsActiveIndex}
					<div class="relative rounded-[28px] overflow-hidden animate-[fadeIn_0.4s_ease] border border-white/8 bg-linear-to-br from-dark to-dark-surface">
						<!-- Subtle glow behind card -->
						<div class="absolute inset-0 pointer-events-none">
							<div class="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-brand blur-[100px] opacity-8"></div>
						</div>

						<div class="relative p-8 md:p-12">
							<!-- Large decorative quote mark -->
							<div class="text-[5rem] leading-none text-primary/20 font-serif absolute top-6 left-8 select-none">"</div>

							<blockquote class="text-lg md:text-xl text-light-muted leading-[1.8] mb-8 pt-6 relative z-10">
								{testimonial.quote}
							</blockquote>
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-lg text-light font-display shrink-0 shadow-[0_0_20px_rgba(233,69,144,0.3)]">
									{testimonial.name[0]}
								</div>
								<div class="flex flex-col gap-0.5">
									<span class="font-semibold text-[0.95rem] text-light">{testimonial.name}</span>
									<span class="text-xs text-light-dim">{testimonial.role}, {testimonial.company}</span>
								</div>
							</div>
						</div>

						<div class="relative flex border-t border-white/6">
							{#each testimonial.stats as stat, j}
								<div class="flex-1 py-7 flex flex-col items-center gap-1 text-center {j > 0 ? 'border-l border-white/6' : ''}">
									<span class="text-[1.5rem] md:text-[2rem] font-extrabold gradient-text font-display">{stat.value}</span>
									<span class="text-[0.72rem] text-light-dim px-2">{stat.label}</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}

			<!-- Controls — only show if more than one testimonial -->
			{#if testimonialsData.length > 1}
				<div class="flex items-center justify-center gap-5 mt-8">
					<button
						class="w-11 h-11 rounded-full bg-dark border border-dark-border text-light-muted flex items-center justify-center hover:border-light-dim hover:text-light transition-all duration-200"
						onclick={() => rootPageClass.prevResultsIndex()}
						aria-label="Previous testimonial"
					>
						<ChevronLeftIcon class="w-5 h-5" />
					</button>
					<div class="flex gap-2">
						{#each testimonialsData as _, i}
							<button
								class="h-2.5 rounded-full transition-all duration-200 {i === rootPageClass.pageStates.resultsActiveIndex ? 'w-7 bg-gradient-brand' : 'w-2.5 bg-dark-border'}"
								onclick={() => rootPageClass.pageStates.resultsActiveIndex = i}
								aria-label="Go to testimonial {i + 1}"
							></button>
						{/each}
					</div>
					<button
						class="w-11 h-11 rounded-full bg-dark border border-dark-border text-light-muted flex items-center justify-center hover:border-light-dim hover:text-light transition-all duration-200"
						onclick={() => rootPageClass.nextResultsIndex()}
						aria-label="Next testimonial"
					>
						<ChevronRightIcon class="w-5 h-5" />
					</button>
				</div>
			{/if}
		</div>
	</div>

	<DiagonalCutFromTopRightToBottomLeft fillClass="text-dark" />
</section>
