<script lang="ts">
	// CLASS
	import { rootPageClass } from '@/routes/index.svelte';

	// DATA
	import { faqsData } from '@/shared/data/faqData';

	// LUCIDE ICONS
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
</script>

<section id="faq" class="py-28 bg-dark-surface">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-center mb-14">
			<p class="text-sm text-light-dim mb-3">FAQ</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light">
				Questions? <span class="gradient-text">Answered.</span>
			</h2>
		</div>

		<div class="flex flex-col gap-3">
			{#each faqsData as faq, i}
				<div class="bg-dark border border-dark-border rounded-2xl overflow-hidden transition-colors duration-200 {rootPageClass.pageStates.faqOpenIndex === i ? 'border-primary/20' : 'hover:border-dark-border'}">
					<button
						class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-transparent"
						onclick={() => rootPageClass.toggleFaqIndex(i)}
					>
						<span class="text-[0.95rem] font-semibold text-light">{faq.question}</span>
						<ChevronDownIcon class="w-5 h-5 text-light-dim shrink-0 transition-transform duration-200 {rootPageClass.pageStates.faqOpenIndex === i ? 'rotate-180' : ''}" />
					</button>
					{#if rootPageClass.pageStates.faqOpenIndex === i}
						<div class="px-6 pb-5 -mt-1">
							<p class="text-sm text-light-muted leading-relaxed">{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
