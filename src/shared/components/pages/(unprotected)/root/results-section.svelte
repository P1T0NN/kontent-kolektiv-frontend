<script lang="ts">
	// LUCIDE ICONS
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

	const testimonials = [
		{
			quote: "KontentKolektiv transformed our approach to the Balkan market. Their local creators produced content that felt genuinely native, and our ROAS improved dramatically. The UGC videos outperformed everything we had produced with traditional agencies.",
			name: 'Stefan Petrov',
			role: 'Head of Growth',
			company: 'E-Commerce Brand',
			stats: [
				{ value: '180%', label: 'increase in ROAS' },
				{ value: '3.2x', label: 'higher engagement rate' }
			]
		},
		{
			quote: "Working with KontentKolektiv allowed us to scale UGC production across 6 Balkan markets simultaneously. The creator matching was spot-on and turnaround times were incredibly fast. Our acquisition costs dropped significantly.",
			name: 'Ana Markovic',
			role: 'Marketing Director',
			company: 'DTC Brand',
			stats: [
				{ value: '58%', label: 'drop in acquisition cost' },
				{ value: '4x', label: 'more creative volume' }
			]
		},
		{
			quote: "The quality and authenticity of the UGC content from KontentKolektiv creators is unmatched in the region. Our TikTok campaigns saw massive improvements in hook rate and completion rate, driving real conversions.",
			name: 'Dimitris Papadopoulos',
			role: 'Performance Lead',
			company: 'App Company',
			stats: [
				{ value: '+22%', label: 'higher CTR on TikTok' },
				{ value: '12x', label: 'ROAS on top creative' }
			]
		}
	];

	let activeIndex = $state(0);

	function next() {
		activeIndex = (activeIndex + 1) % testimonials.length;
	}

	function prev() {
		activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
	}
</script>

<section id="results" class="py-28 bg-dark-surface">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="text-center mb-16">
			<span class="inline-block px-4 py-1.5 bg-dark-card border border-dark-border rounded-full text-xs font-semibold text-light-dim uppercase tracking-widest mb-5">
				Success Stories
			</span>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light">
				Brand success,<br /><span class="gradient-text">powered by KontentKolektiv</span>
			</h2>
		</div>

		<div class="max-w-[900px] mx-auto relative">
			{#each testimonials as testimonial, i}
				{#if i === activeIndex}
					<div class="bg-dark border border-dark-border rounded-[28px] overflow-hidden animate-[fadeIn_0.4s_ease]">
						<div class="p-8 md:p-12">
							<blockquote class="text-lg text-light-muted leading-[1.8] mb-8 italic">
								"{testimonial.quote}"
							</blockquote>
							<div class="flex items-center gap-3.5">
								<div class="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-lg text-light font-display">
									{testimonial.name[0]}
								</div>
								<div class="flex flex-col gap-0.5">
									<span class="font-semibold text-[0.95rem] text-light">{testimonial.name}</span>
									<span class="text-xs text-light-dim">{testimonial.role}, {testimonial.company}</span>
								</div>
							</div>
						</div>
						<div class="flex border-t border-dark-border">
							{#each testimonial.stats as stat, j}
								<div class="flex-1 py-8 flex flex-col items-center gap-1 text-center {j > 0 ? 'border-l border-dark-border' : ''}">
									<span class="text-[1.5rem] md:text-[2rem] font-extrabold gradient-text font-display">{stat.value}</span>
									<span class="text-xs text-light-dim">{stat.label}</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}

			<!-- Controls -->
			<div class="flex items-center justify-center gap-5 mt-8">
				<button
					class="w-11 h-11 rounded-full bg-dark border border-dark-border text-light-muted flex items-center justify-center hover:border-light-dim hover:text-light transition-all duration-200"
					onclick={prev}
					aria-label="Previous testimonial"
				>
					<ChevronLeftIcon class="w-5 h-5" />
				</button>
				<div class="flex gap-2">
					{#each testimonials as _, i}
						<button
							class="h-2.5 rounded-full transition-all duration-200 {i === activeIndex ? 'w-7 bg-gradient-brand' : 'w-2.5 bg-dark-border'}"
							onclick={() => activeIndex = i}
							aria-label="Go to testimonial {i + 1}"
						></button>
					{/each}
				</div>
				<button
					class="w-11 h-11 rounded-full bg-dark border border-dark-border text-light-muted flex items-center justify-center hover:border-light-dim hover:text-light transition-all duration-200"
					onclick={next}
					aria-label="Next testimonial"
				>
					<ChevronRightIcon class="w-5 h-5" />
				</button>
			</div>
		</div>
	</div>
</section>
