<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import WaveBottomTransition from '@/shared/components/ui/page-transitions/wave-bottom-transition.svelte';

	// DATA
	import { servicesData } from '@/shared/data/servicesData';

	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	const serviceMessages = [
		{
			tag: () => m['HomePage.ServicesSection.service1Tag'](),
			title: () => m['HomePage.ServicesSection.service1Title'](),
			desc: () => m['HomePage.ServicesSection.service1Desc'](),
			features: [
				{ label: () => m['HomePage.ServicesSection.service1Feature1Label'](), desc: () => m['HomePage.ServicesSection.service1Feature1Desc']() },
				{ label: () => m['HomePage.ServicesSection.service1Feature2Label'](), desc: () => m['HomePage.ServicesSection.service1Feature2Desc']() },
				{ label: () => m['HomePage.ServicesSection.service1Feature3Label'](), desc: () => m['HomePage.ServicesSection.service1Feature3Desc']() },
				{ label: () => m['HomePage.ServicesSection.service1Feature4Label'](), desc: () => m['HomePage.ServicesSection.service1Feature4Desc']() }
			]
		},
		{
			tag: () => m['HomePage.ServicesSection.service2Tag'](),
			title: () => m['HomePage.ServicesSection.service2Title'](),
			desc: () => m['HomePage.ServicesSection.service2Desc'](),
			features: [
				{ label: () => m['HomePage.ServicesSection.service2Feature1Label'](), desc: () => m['HomePage.ServicesSection.service2Feature1Desc']() },
				{ label: () => m['HomePage.ServicesSection.service2Feature2Label'](), desc: () => m['HomePage.ServicesSection.service2Feature2Desc']() },
				{ label: () => m['HomePage.ServicesSection.service2Feature3Label'](), desc: () => m['HomePage.ServicesSection.service2Feature3Desc']() },
				{ label: () => m['HomePage.ServicesSection.service2Feature4Label'](), desc: () => m['HomePage.ServicesSection.service2Feature4Desc']() }
			]
		}
	];
</script>

<section id="services" class="relative pt-32 pb-48 bg-dark overflow-hidden">
	<div class="relative max-w-[1100px] mx-auto px-6">
		<!-- Header -->
		<div class="text-center mb-24 relative z-10">
			<p class="text-sm text-light-dim mb-6 uppercase tracking-wider">{m['HomePage.ServicesSection.label']()}</p>

			<h2 class="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-light mb-6 leading-[1.1] tracking-tight">
				{m['HomePage.ServicesSection.titleLine1']()}<br />
				<span class="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent animate-gradient-x">{m['HomePage.ServicesSection.titleLine2']()}</span>
			</h2>

			<p class="text-lg md:text-xl text-light-muted max-w-[640px] mx-auto leading-relaxed">
				{m['HomePage.ServicesSection.subtitle']()}
			</p>
		</div>

		<!-- Services Layout -->
		<div class="flex flex-col gap-20 lg:gap-32">
			{#each servicesData as service, i}
				{@const msg = serviceMessages[i]}
				<!-- Service Card Container -->
				<div class="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-20 {i % 2 === 1 ? 'lg:flex-row-reverse' : ''}">

					<!-- Content Side -->
					<div class="flex-1 relative z-10 text-center lg:text-left">
						<div class="inline-block mb-4">
							<span class="text-xs font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-linear-to-r {service.gradient}">
								0{i + 1} — {msg.tag()}
							</span>
						</div>

						<h3 class="text-4xl md:text-5xl font-bold text-light mb-6 font-display leading-tight">
							{msg.title()}
						</h3>

						<p class="text-lg text-light-muted leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
							{msg.desc()}
						</p>

						<a
							href="#contact"
							class="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/20 pb-1 hover:border-white hover:gap-3 transition-all duration-300"
						>
							{m['HomePage.ServicesSection.learnMore']()}
							<ArrowRightIcon class="w-4 h-4" />
						</a>
					</div>

					<!-- Visual Side (Feature Grid) -->
					<div class="flex-1 w-full max-w-[500px] lg:max-w-none">
						<div class="relative">
							<!-- Glass Card Container -->
							<div class="relative grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-colors duration-500">
								{#each service.features as feature, j}
									<div class="bg-dark/40 border border-white/5 rounded-2xl p-5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group/feature">
										<div class="w-10 h-10 rounded-xl bg-linear-to-br {service.gradient} p-px mb-4 group-hover/feature:scale-110 transition-transform duration-300">
											<div class="w-full h-full rounded-xl bg-dark flex items-center justify-center">
												<svelte:component this={feature.icon} class="w-5 h-5 text-white/80 group-hover/feature:text-white transition-colors" />
											</div>
										</div>
										<h4 class="text-base font-bold text-light">{msg.features[j].label()}</h4>
										{#if msg.features[j].desc()}
											<p class="text-sm text-light-dim leading-snug mt-1">{msg.features[j].desc()}</p>
										{/if}
									</div>
								{/each}
							</div>
						</div>
					</div>

				</div>
			{/each}
		</div>
	</div>

	<WaveBottomTransition fillClass="text-dark-surface" />
</section>

