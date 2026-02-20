<script lang="ts">
	const steps = [
		{
			number: '01',
			title: 'Share your brief',
			description: 'Tell us about your brand, audience, and campaign objectives.',
		},
		{
			number: '02',
			title: 'We match creators',
			description: 'Hand-picked from our network in Bulgaria and the Balkans.',
		},
		{
			number: '03',
			title: 'Content production',
			description: 'Authentic, platform-native videos, approved by your team.',
		},
		{
			number: '04',
			title: 'Launch & share',
			description: 'Ready-to-post videos optimized for TikTok, Instagram, YouTube Shorts.',
		},
	];
</script>

<section class="py-28 bg-dark-surface">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-center mb-[72px]">
			<p class="text-sm text-light-dim mb-3 uppercase tracking-wider">How It Works</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light">
				From brief to <span class="gradient-text">live campaign</span> in days
			</h2>
			<p class="text-sm text-light-dim mt-4">Average delivery: 7 days</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each steps as step, i}
				<div class="relative group flex flex-col gap-4 p-6 rounded-2xl border border-dark-border bg-dark hover:border-primary/20 transition-colors duration-300">
					<!-- Connector arrow between cards (desktop only) -->
					{#if i < steps.length - 1}
						<div class="hidden lg:flex absolute -right-3.5 top-8 z-10 w-7 h-7 items-center justify-center rounded-full bg-dark border border-dark-border text-light-dim text-xs">›</div>
					{/if}

					<span class="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-base font-extrabold text-light font-display shadow-[0_0_20px_rgba(233,69,144,0.2)] group-hover:shadow-[0_0_28px_rgba(233,69,144,0.35)] transition-shadow duration-300 shrink-0">
						{step.number}
					</span>
					<div>
						<h3 class="text-[1.05rem] font-bold text-light mb-1.5">{step.title}</h3>
						<p class="text-[0.88rem] text-light-muted leading-relaxed">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
