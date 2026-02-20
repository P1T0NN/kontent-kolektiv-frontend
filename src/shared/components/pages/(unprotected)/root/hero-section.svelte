<script lang="ts">
	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	// DATA
	import { brandsData } from '@/shared/data/brandsData';

	let visible = $state(false);

	$effect(() => {
		const timer = setTimeout(() => (visible = true), 100);
		return () => clearTimeout(timer);
	});
</script>

<section class="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-12 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-[#0a0810] overflow-hidden">
		<div class="absolute inset-0" style="background: radial-gradient(ellipse 120% 80% at 60% 20%, #1a0d2e 0%, #0a0810 55%, #060409 100%);"></div>

		<div class="absolute" style="
			top: -18%; right: -8%; width: 780px; height: 520px;
			background: radial-gradient(ellipse 60% 100% at 65% 30%, rgba(108,99,255,0.18) 0%, rgba(233,69,144,0.09) 45%, transparent 70%);
			filter: blur(72px); transform: rotate(-22deg) skewX(-8deg);
			border-radius: 40% 60% 55% 45% / 35% 45% 55% 65%;
		"></div>

		<div class="absolute" style="
			bottom: -12%; left: -6%; width: 620px; height: 480px;
			background: radial-gradient(ellipse 70% 90% at 35% 70%, rgba(233,69,144,0.13) 0%, rgba(108,99,255,0.07) 50%, transparent 70%);
			filter: blur(80px); transform: rotate(15deg) skewY(5deg);
			border-radius: 55% 45% 40% 60% / 60% 40% 65% 35%;
		"></div>

		<div class="absolute" style="
			top: 35%; left: 20%; width: 400px; height: 280px;
			background: radial-gradient(ellipse at 50% 50%, rgba(255,160,80,0.04) 0%, transparent 70%);
			filter: blur(60px); transform: rotate(-10deg);
			border-radius: 50% 50% 60% 40% / 40% 60% 40% 60%;
		"></div>

		<div class="absolute" style="
			top: -5%; left: -10%; right: 20%; height: 60%;
			background: linear-gradient(115deg, transparent 0%, transparent 40%, rgba(108,99,255,0.035) 48%, rgba(255,255,255,0.018) 52%, rgba(108,99,255,0.025) 56%, transparent 65%, transparent 100%);
			transform: skewY(-5deg);
		"></div>

		<svg class="absolute inset-0 w-full h-full opacity-[0.55]" xmlns="http://www.w3.org/2000/svg">
			<filter id="grain" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB">
				<feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" result="noise"/>
				<feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
				<feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend"/>
				<feComposite in="blend" in2="SourceGraphic" operator="in"/>
			</filter>
			<rect width="100%" height="100%" filter="url(#grain)"/>
		</svg>

		<div class="absolute inset-0" style="background: radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%);"></div>
	</div>

	<!-- Main content -->
	<div class="relative text-center max-w-[1100px] mx-auto px-6 mb-12 w-full">
		<!-- Urgency badge -->
		<p
			class="text-sm font-semibold text-light-dim tracking-wide mb-5 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
		>
			#1 UGC Network in Southeast Europe
		</p>

		<h1
			class="text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold text-light mb-5 leading-[1.1] tracking-tight transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			UGC Content That <span class="gradient-text">Actually Works</span> in Bulgaria & Southeast Europe
		</h1>

		<p
			class="text-[clamp(0.95rem,1.8vw,1.1rem)] text-light-muted max-w-[720px] mx-auto mb-8 leading-relaxed transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			Authentic UGC campaigns, built by local creators across 8 Southeast European markets.
		</p>

		<div
			class="mb-10 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			<a
				href="#contact"
				class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full text-light font-semibold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(233,69,144,0.4)] transition-all duration-200 shadow-[0_4px_20px_rgba(233,69,144,0.25)]"
			>
				Start Your Campaign
				<ArrowRightIcon class="w-5 h-5" />
			</a>
		</div>

		<!-- Stats -->
		<div
			class="flex items-center justify-center gap-2 sm:gap-8 flex-nowrap transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			<div class="flex flex-col items-center gap-0.5 shrink-0">
				<span class="text-[1.25rem] sm:text-[1.9rem] font-extrabold gradient-text font-display leading-none">500+</span>
				<span class="text-[0.65rem] sm:text-[0.78rem] text-light-dim mt-1 whitespace-nowrap">UGC Videos Delivered</span>
			</div>
			<div class="w-px h-7 sm:h-9 bg-dark-border shrink-0"></div>
			<div class="flex flex-col items-center gap-0.5 shrink-0">
				<span class="text-[1.25rem] sm:text-[1.9rem] font-extrabold gradient-text font-display leading-none">20+</span>
				<span class="text-[0.65rem] sm:text-[0.78rem] text-light-dim mt-1 whitespace-nowrap">Brands Served</span>
			</div>
			<div class="w-px h-7 sm:h-9 bg-dark-border shrink-0"></div>
			<div class="flex flex-col items-center gap-0.5 shrink-0">
				<span class="text-[1.25rem] sm:text-[1.9rem] font-extrabold gradient-text font-display leading-none">8</span>
				<span class="text-[0.65rem] sm:text-[0.78rem] text-light-dim mt-1 whitespace-nowrap">Countries Covered</span>
			</div>
		</div>
	</div>

	<!-- Marquee — no label, no background -->
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
