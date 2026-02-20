<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy } from 'svelte';

	// CLASS
	import { rootPageClass } from '@/routes/index.svelte';

	// COMPONENTS
	import HeroSection from '@/shared/components/pages/(unprotected)/root/hero-section.svelte';

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
	<title>KontentKolektiv – UGC Content That Connects Across Bulgaria & Southeast Europe</title>
	<meta name="description" content="Leading UGC Marketing Agency in Bulgaria and Southeast Europe. Authentic content that builds trust, engages audiences, and grows your brand. 8 countries, 200+ creators." />
</svelte:head>

<main>
	<HeroSection />

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
