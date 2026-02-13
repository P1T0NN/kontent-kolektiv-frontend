<script lang="ts">
	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	const services = [
		{
			tag: 'UGC Production',
			title: 'Scroll-stopping content at scale',
			description: 'We connect your brand with authentic creators across Southeast Europe who produce native-feeling UGC videos that resonate with local audiences and drive conversions.',
			features: [
				{ label: '200+ Creators', desc: 'Vetted talent across 12 countries' },
				{ label: 'Platform-Native', desc: 'Optimized for TikTok, Reels & Shorts' },
				{ label: 'Fast Delivery', desc: 'From brief to final cut in days' },
				{ label: 'Full Rights', desc: 'Complete usage rights included' },
			],
			accent: 'primary'
		},
		{
			tag: 'Performance Creative',
			title: 'The data engine behind your ads',
			description: 'Our performance-first approach means every piece of content is designed to convert. We analyze what works across markets, test variations, and scale winners.',
			features: [
				{ label: 'A/B Testing', desc: 'Data-backed creative variations' },
				{ label: 'Hook Optimization', desc: 'Maximize thumb-stop rate' },
				{ label: 'Ad-Ready', desc: 'Delivered in every format you need' },
				{ label: 'Analytics', desc: 'Performance insights per creative' },
			],
			accent: 'secondary'
		}
	];
</script>

<section id="services" class="py-28 bg-dark">
	<div class="max-w-[1200px] mx-auto px-6">
		<!-- Header -->
		<div class="text-center mb-16">
			<p class="text-sm text-light-dim mb-3">What We Do</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mb-4">
				Launch with creators.<br /><span class="gradient-text">Scale with data.</span>
			</h2>
			<p class="text-lg text-light-muted max-w-[600px] mx-auto leading-relaxed">
				KontentKolektiv is the first UGC marketing stack in Southeast Europe, combining local creator talent with performance-driven creative production.
			</p>
		</div>

		<!-- Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each services as service}
				<div class="group bg-dark-surface border border-dark-border rounded-[20px] p-7 md:p-10 transition-all duration-300 hover:-translate-y-1 {service.accent === 'primary' ? 'hover:border-primary/30' : 'hover:border-secondary/30'}">
					<div class="mb-5">
						<span class="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide {service.accent === 'primary' ? 'bg-primary/12 text-primary' : 'bg-secondary/12 text-secondary'}">
							{service.tag}
						</span>
					</div>
					<h3 class="text-[1.6rem] font-bold text-light mb-3 capitalize">{service.title}</h3>
					<p class="text-[0.95rem] text-light-muted leading-relaxed mb-7">{service.description}</p>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
						{#each service.features as feature}
							<div class="flex flex-col gap-1 p-3.5 bg-dark-card rounded-xl border border-transparent hover:border-dark-border transition-colors duration-200">
								<span class="text-[0.85rem] font-semibold text-light">{feature.label}</span>
								<span class="text-[0.78rem] text-light-dim">{feature.desc}</span>
							</div>
						{/each}
					</div>
					<a
						href="#contact"
						class="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-200 {service.accent === 'primary' ? 'text-primary' : 'text-secondary'}"
					>
						Learn more
						<ArrowRightIcon class="w-4 h-4" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
