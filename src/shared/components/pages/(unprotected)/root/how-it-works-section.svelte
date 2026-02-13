<script lang="ts">
	const steps = [
		{
			number: '01',
			title: 'Share your brief',
			description: 'Tell us about your brand, target audience, and campaign goals. We design a content strategy tailored to your Southeast European markets.',
		},
		{
			number: '02',
			title: 'We match creators',
			description: 'Our team hand-picks the best-fit UGC creators from our vetted network across 12 countries, matched to your niche and language needs.',
		},
		{
			number: '03',
			title: 'Content production',
			description: 'Creators produce authentic, platform-native UGC videos following your approved scripts and brand guidelines, with fast turnaround.',
		},
		{
			number: '04',
			title: 'Launch & optimize',
			description: 'Receive ad-ready content optimized for TikTok, Reels, Shorts, and Meta Ads. We analyze performance and iterate for even better results.',
		},
	];
</script>

<section class="py-28 bg-dark-surface">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="text-center mb-[72px]">
			<p class="text-sm text-light-dim mb-3">How It Works</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light">
				From brief to <span class="gradient-text">live campaign</span> in days
			</h2>
		</div>

		<div class="max-w-[700px] mx-auto flex flex-col">
			{#each steps as step, i}
				<div class="flex gap-5 sm:gap-8">
					<div class="flex flex-col items-center shrink-0">
						<span class="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-brand flex items-center justify-center text-sm sm:text-lg font-extrabold text-light shrink-0 font-display">
							{step.number}
						</span>
						{#if i < steps.length - 1}
							<div class="w-0.5 flex-1 min-h-[40px] my-2 bg-linear-to-b from-primary to-dark-border"></div>
						{/if}
					</div>
					<div class="pb-12 {i === steps.length - 1 ? 'pb-0!' : ''}">
						<h3 class="text-xl sm:text-[1.3rem] font-bold text-light mb-2 pt-2.5 sm:pt-3.5">{step.title}</h3>
						<p class="text-[0.95rem] text-light-muted leading-relaxed">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
