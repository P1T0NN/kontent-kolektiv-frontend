<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import NoiseOverlayBackground from '@/shared/components/ui/page-backgrounds/noise-overlay-background.svelte';
	import BlobsBackground from '@/shared/components/ui/page-backgrounds/blobs-background.svelte';
	import FloatingDecosBackground from '@/shared/components/ui/page-backgrounds/floating-decos-background.svelte';
	import SketchyAnimatedLine from '@/shared/components/ui/designs/sketchy-animated-line.svelte';
	import WhyChooseUsSectionItem from './why-choose-us-section-item.svelte';
</script>

<section class="relative overflow-hidden bg-[#0A0A1A] py-28">
	<NoiseOverlayBackground />

	<BlobsBackground />

	<FloatingDecosBackground />

	<div class="relative z-10 mx-auto max-w-[1200px] px-6">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-[clamp(2.4rem,5vw,4rem)] font-black italic leading-[1.05] tracking-[-0.03em] text-white">
				{m['HomePage.WhyChooseUsSection.titleLine1']()}<br />
				<span class="bg-linear-to-br from-[#E94590] to-[#6C63FF] bg-clip-text text-transparent">{m['HomePage.WhyChooseUsSection.titleLine2']()}</span>
			</h2>

			<p class="mx-auto max-w-[520px] font-mono text-sm leading-relaxed text-[#B0B0CC]">
				{m['HomePage.WhyChooseUsSection.subtitle']()}
			</p>

			<SketchyAnimatedLine />
		</div>

		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			<WhyChooseUsSectionItem />
		</div>
	</div>
</section>