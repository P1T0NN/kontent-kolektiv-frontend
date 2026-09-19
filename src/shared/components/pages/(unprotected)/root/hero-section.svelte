<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// DATA
	import { brandsData } from '@/shared/data/brandsData';

	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import GradientGrainBackground from '@/shared/components/ui/page-backgrounds/gradient-grain-background.svelte';

	let visible = $state(false);

	// EFFECT
	$effect(() => {
		const timer = setTimeout(() => (visible = true), 100);
		return () => clearTimeout(timer);
	});
</script>

<section class="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-12 overflow-hidden">
	<!-- Background -->
	<GradientGrainBackground />

	<!-- Main content -->
	<div class="relative text-center max-w-[1100px] mx-auto px-6 mb-12 w-full">
		<p
			class="text-sm font-semibold text-light-dim tracking-wide mb-5 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
		>
			{m['HomePage.HeroSection.badge']()}
		</p>

		<h1
			class="text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold text-light mb-5 leading-[1.1] tracking-tight transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			{m['HomePage.HeroSection.titleBefore']()}<span class="gradient-text">{m['HomePage.HeroSection.titleHighlight']()}</span>{m['HomePage.HeroSection.titleAfter']()}
		</h1>

		<p
			class="text-[clamp(0.95rem,1.8vw,1.1rem)] text-light-muted max-w-[720px] mx-auto mb-8 leading-relaxed transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			{m['HomePage.HeroSection.subtitle']()}
		</p>

		<div
			class="mb-10 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			<a
				href="#contact"
				class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full text-light font-semibold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(233,69,144,0.4)] transition-all duration-200 shadow-[0_4px_20px_rgba(233,69,144,0.25)]"
			>
				{m['HomePage.HeroSection.cta']()}
				<ArrowRightIcon class="w-5 h-5" />
			</a>
		</div>

		<!-- Stats -->
		<div
			class="flex items-center justify-center gap-2 sm:gap-8 flex-nowrap transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			<div class="flex flex-col items-center gap-0.5 shrink-0">
				<span class="text-[1.25rem] sm:text-[1.9rem] font-extrabold gradient-text font-display leading-none">500+</span>
				<span class="text-[0.65rem] sm:text-[0.78rem] text-light-dim mt-1 whitespace-nowrap">{m['HomePage.HeroSection.statsVideos']()}</span>
			</div>
			<div class="w-px h-7 sm:h-9 bg-dark-border shrink-0"></div>
			<div class="flex flex-col items-center gap-0.5 shrink-0">
				<span class="text-[1.25rem] sm:text-[1.9rem] font-extrabold gradient-text font-display leading-none">20+</span>
				<span class="text-[0.65rem] sm:text-[0.78rem] text-light-dim mt-1 whitespace-nowrap">{m['HomePage.HeroSection.statsBrands']()}</span>
			</div>
			<div class="w-px h-7 sm:h-9 bg-dark-border shrink-0"></div>
			<div class="flex flex-col items-center gap-0.5 shrink-0">
				<span class="text-[1.25rem] sm:text-[1.9rem] font-extrabold gradient-text font-display leading-none">8</span>
				<span class="text-[0.65rem] sm:text-[0.78rem] text-light-dim mt-1 whitespace-nowrap">{m['HomePage.HeroSection.statsCountries']()}</span>
			</div>
		</div>
	</div>

	<!-- Marquee -->
	<div
		class="w-full max-w-[1100px] mx-auto px-6 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 {visible ? 'opacity-100' : 'opacity-0'}"
	>
		<div
			class="relative overflow-hidden mask-[linear-gradient(90deg,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_8%,black_92%,transparent_100%)]"
		>
			<div class="flex w-max animate-[marquee_35s_linear_infinite]">
				{#each [0, 1] as _set}
					<div class="flex items-center gap-12 pr-12" aria-hidden={_set > 0 ? 'true' : undefined}>
						{#each brandsData as brand}
							<div class="flex items-center gap-2.5 opacity-30 hover:opacity-55 transition-opacity duration-300 shrink-0">
								<span class="w-1.5 h-1.5 rounded-full bg-gradient-brand shrink-0"></span>
								<span class="text-lg font-bold text-light tracking-wide whitespace-nowrap font-display">{brand}</span>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
