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
	<div class="absolute inset-0 bg-linear-to-b from-dark via-[#0D0D2B] to-[#100D28]">
		<div class="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.04)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
		<div class="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] rounded-full bg-primary blur-[120px] opacity-15"></div>
		<div class="absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.12]"></div>
	</div>

	<!-- Content -->
	<div class="relative text-center max-w-[900px] mx-auto px-6">
		<div
			class="inline-flex items-center gap-2 px-5 py-2 bg-dark-card border border-dark-border rounded-full text-[0.85rem] font-medium text-light-muted mb-8 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
		>
			<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
			Leading UGC Agency in Southeast Europe
		</div>

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
