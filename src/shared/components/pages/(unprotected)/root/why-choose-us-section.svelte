<script lang="ts">
	// LUCIDE ICONS
	import UsersIcon from '@lucide/svelte/icons/users';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';

	const reasons = [
		{
			icon: UsersIcon,
			title: 'Local creators your audience trusts',
			desc: 'Build trust with authentic content from real people across Southeast Europe who speak the language and understand the culture.'
		},
		{
			icon: TrendingUpIcon,
			title: 'Built on real ad performance data',
			desc: 'Every decision is backed by insights from hundreds of campaigns and thousands of ad variations across the region.'
		},
		{
			icon: ClockIcon,
			title: 'From brief to live ads in days',
			desc: 'Our streamlined workflow means you go from creative brief to platform-ready UGC content faster than any traditional agency.'
		},
		{
			icon: ShieldCheckIcon,
			title: 'Improve with every campaign',
			desc: 'We turn performance data into actionable next steps so each new round of UGC content performs better than the last.'
		}
	];
</script>

<section class="py-28 bg-dark-surface">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="text-center mb-16">
			<span class="inline-block px-4 py-1.5 bg-dark-card border border-dark-border rounded-full text-xs font-semibold text-light-dim uppercase tracking-widest mb-5">
				Why KontentKolektiv
			</span>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mb-4">
				Why smart brands choose us
			</h2>
			<p class="text-lg text-light-muted max-w-[560px] mx-auto leading-relaxed">
				Launch UGC ads that convert, powered by local creator expertise and real performance data.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each reasons as reason}
				<div class="p-7 md:p-9 bg-dark border border-dark-border rounded-[20px] hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300">
					<div class="w-12 h-12 flex items-center justify-center bg-gradient-brand rounded-xl mb-5 text-light">
						<svelte:component this={reason.icon} class="w-6 h-6" />
					</div>
					<h3 class="text-[1.15rem] font-bold text-light mb-2">{reason.title}</h3>
					<p class="text-sm text-light-muted leading-relaxed">{reason.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
