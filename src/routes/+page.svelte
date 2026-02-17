<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy } from 'svelte';

	// CLASS
	import { rootPageClass } from '@/routes/index.svelte';

	// COMPONENTS
	import HeroSection from '@/shared/components/pages/(unprotected)/root/hero-section.svelte';
	import TrustBarSection from '@/shared/components/pages/(unprotected)/root/trust-bar-section.svelte';
	import ServicesSection from '@/shared/components/pages/(unprotected)/root/services-section.svelte';
	import VideoShowcaseSection from '@/shared/components/pages/(unprotected)/root/video-showcase-section/video-showcase-section.svelte';
	import HowItWorksSection from '@/shared/components/pages/(unprotected)/root/how-it-works-section.svelte';
	import ResultsSection from '@/shared/components/pages/(unprotected)/root/results-section.svelte';
	import ComparisonSection from '@/shared/components/pages/(unprotected)/root/comparison-section.svelte';
	import FaqSection from '@/shared/components/pages/(unprotected)/root/faq-section.svelte';
	import CtaSection from '@/shared/components/pages/(unprotected)/root/cta-section.svelte';
	import Reveal from '@/shared/components/ui/reveal/reveal.svelte';
	
	onDestroy(() => {
		rootPageClass.cleanup();
	});
</script>

<svelte:head>
	<title>KontentKolektiv - UGC Ads That Convert Across Southeast Europe</title>
	<meta name="description" content="The UGC agency behind high-performing ad campaigns across the Balkans. Native-language creators, platform-native content, real results. Serving brands across 12+ countries." />
</svelte:head>

<main>
	<HeroSection />

	<Reveal>
		<TrustBarSection />
	</Reveal>

	<Reveal>
		<VideoShowcaseSection />
	</Reveal>

	<Reveal>
		<ServicesSection />
	</Reveal>

	<HowItWorksSection />

	<Reveal>
		<ResultsSection />
	</Reveal>

	<Reveal>
		<ComparisonSection />
	</Reveal>

	<Reveal>
		<FaqSection />
	</Reveal>

	<Reveal>
		<CtaSection />
	</Reveal>
</main>
