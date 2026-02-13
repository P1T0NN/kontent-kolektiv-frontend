<script lang="ts">
	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	let visible = $state(false);

	$effect(() => {
		const timer = setTimeout(() => visible = true, 100);
		return () => clearTimeout(timer);
	});
</script>

<section class="relative min-h-screen flex items-center justify-center pt-[120px] pb-20 md:pb-20 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-[#0a0810] overflow-hidden">

		<!-- Base deep gradient — warm dark, not cold navy -->
		<div class="absolute inset-0" style="background: radial-gradient(ellipse 120% 80% at 60% 20%, #1a0d2e 0%, #0a0810 55%, #060409 100%);"></div>

		<!-- Primary ink smear — irregular, not a perfect circle -->
		<div class="absolute" style="
			top: -18%;
			right: -8%;
			width: 780px;
			height: 520px;
			background: radial-gradient(ellipse 60% 100% at 65% 30%, rgba(108,99,255,0.18) 0%, rgba(233,69,144,0.09) 45%, transparent 70%);
			filter: blur(72px);
			transform: rotate(-22deg) skewX(-8deg);
			border-radius: 40% 60% 55% 45% / 35% 45% 55% 65%;
		"></div>

		<!-- Secondary ink smear — bottom left, different angle -->
		<div class="absolute" style="
			bottom: -12%;
			left: -6%;
			width: 620px;
			height: 480px;
			background: radial-gradient(ellipse 70% 90% at 35% 70%, rgba(233,69,144,0.13) 0%, rgba(108,99,255,0.07) 50%, transparent 70%);
			filter: blur(80px);
			transform: rotate(15deg) skewY(5deg);
			border-radius: 55% 45% 40% 60% / 60% 40% 65% 35%;
		"></div>

		<!-- Tertiary mid-field glow — warm amber tint for depth -->
		<div class="absolute" style="
			top: 35%;
			left: 20%;
			width: 400px;
			height: 280px;
			background: radial-gradient(ellipse at 50% 50%, rgba(255,160,80,0.04) 0%, transparent 70%);
			filter: blur(60px);
			transform: rotate(-10deg);
			border-radius: 50% 50% 60% 40% / 40% 60% 40% 60%;
		"></div>

		<!-- Light leak — diagonal streak across upper half -->
		<div class="absolute" style="
			top: -5%;
			left: -10%;
			right: 20%;
			height: 60%;
			background: linear-gradient(115deg, transparent 0%, transparent 40%, rgba(108,99,255,0.035) 48%, rgba(255,255,255,0.018) 52%, rgba(108,99,255,0.025) 56%, transparent 65%, transparent 100%);
			transform: skewY(-5deg);
		"></div>

		<!-- Film grain overlay via SVG filter -->
		<svg class="absolute inset-0 w-full h-full opacity-[0.55]" xmlns="http://www.w3.org/2000/svg">
			<filter id="grain" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB">
				<feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" result="noise"/>
				<feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
				<feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend"/>
				<feComposite in="blend" in2="SourceGraphic" operator="in"/>
			</filter>
			<rect width="100%" height="100%" filter="url(#grain)"/>
		</svg>

		<!-- Vignette — darkens corners for cinematic depth -->
		<div class="absolute inset-0" style="background: radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%);"></div>

	</div>

	<!-- Content -->
	<div class="relative text-center max-w-[900px] mx-auto px-6">
		<p
			class="text-sm text-light-dim mb-6 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
		>
			Leading UGC Agency in Southeast Europe
		</p>
		<h1
			class="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-light mb-6 leading-[1.1] tracking-tight transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			Authentic UGC That
			<span class="gradient-text">Drives Growth</span>
			Across the Balkans
		</h1>

		<p
			class="text-[clamp(1rem,2vw,1.2rem)] text-light-muted max-w-[680px] mx-auto mb-10 leading-relaxed transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			We create high-impact User-Generated Content videos optimized for TikTok,
			Instagram Reels, YouTube Shorts and Meta Ads — serving top brands across 12+ countries.
		</p>

		<div
			class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			<a
				href="#contact"
				class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full text-light font-semibold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(233,69,144,0.3)] transition-all duration-200"
			>
				Start Your Campaign
				<ArrowRightIcon class="w-5 h-5" />
			</a>
			<a
				href="#results"
				class="inline-flex items-center px-8 py-4 bg-transparent border border-dark-border rounded-full text-light-muted font-semibold text-base hover:border-light-muted hover:text-light transition-all duration-200"
			>
				See Our Results
			</a>
		</div>

		<div
			class="flex items-center justify-center gap-6 sm:gap-10 flex-wrap transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
		>
			<div class="flex flex-col items-center gap-1">
				<span class="text-[1.5rem] sm:text-[2rem] font-extrabold gradient-text font-display">
					500+
				</span>
				<span class="text-[0.85rem] text-light-dim">UGC Videos Delivered</span>
			</div>
			<div class="hidden sm:block w-px h-10 bg-dark-border"></div>
			<div class="flex flex-col items-center gap-1">
				<span class="text-[1.5rem] sm:text-[2rem] font-extrabold gradient-text font-display">
					120+
				</span>
				<span class="text-[0.85rem] text-light-dim">Brands Served</span>
			</div>
			<div class="hidden sm:block w-px h-10 bg-dark-border"></div>
			<div class="flex flex-col items-center gap-1">
				<span class="text-[1.5rem] sm:text-[2rem] font-extrabold gradient-text font-display">
					12
				</span>
				<span class="text-[0.85rem] text-light-dim">Countries Covered</span>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
		<div class="w-0.5 h-10 bg-dark-border rounded-sm relative overflow-hidden">
			<div class="absolute left-0 w-full h-1/2 bg-gradient-brand animate-[scrollDown_2s_infinite]"></div>
		</div>
	</div>
</section>