<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy } from 'svelte';
	import { page } from '$app/state';

	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { SITE_URL } from '@/shared/constants';
	import { HOMEPAGE_JSON_LD_SCRIPT, jsonLdScript } from '@/shared/data/homepageJsonLd';

	// CLASS
	import { rootPageClass } from '@/routes/index.svelte';

	// COMPONENTS
	import HeroSection from '@/shared/components/pages/(unprotected)/root/hero-section.svelte';
	import VideoShowcaseSection from '@/shared/components/pages/(unprotected)/root/video-showcase-section/video-showcase-section.svelte';
	import WhyChooseUsSection from '@/shared/components/pages/(unprotected)/root/why-choose-us-section/why-choose-us-section.svelte';
	import ServicesSection from '@/shared/components/pages/(unprotected)/root/services-section.svelte';
	import HowItWorksSection from '@/shared/components/pages/(unprotected)/root/how-it-works-section/how-it-works-section.svelte';
	import ResultsSection from '@/shared/components/pages/(unprotected)/root/results-section.svelte';
	import ComparisonSection from '@/shared/components/pages/(unprotected)/root/comparison-section.svelte';
	import FaqSection from '@/shared/components/pages/(unprotected)/root/faq-section.svelte';
	import CtaSection from '@/shared/components/pages/(unprotected)/root/cta-section.svelte';
	import Reveal from '@/shared/components/ui/reveal/reveal.svelte';
	import InkDripTransition from '@/shared/components/ui/page-transitions/ink-drip-transition.svelte';
	import GlitchSliceTransition from '@/shared/components/ui/page-transitions/glitch-slice-transition.svelte';

	const canonicalUrl = $derived(SITE_URL + page.url.pathname);
	const ogImage = `${SITE_URL}/logo/kontent-kolektiv-logo.png`;
	const faqJsonLdScript = $derived(
		jsonLdScript({
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: [
				{ '@type': 'Question', name: m['HomePage.FaqSection.faq1Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq1Answer']() } },
				{ '@type': 'Question', name: m['HomePage.FaqSection.faq2Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq2Answer']() } },
				{ '@type': 'Question', name: m['HomePage.FaqSection.faq3Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq3Answer']() } },
				{ '@type': 'Question', name: m['HomePage.FaqSection.faq4Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq4Answer']() } }
			]
		})
	);

	onDestroy(() => {
		rootPageClass.cleanup();
	});
</script>

<svelte:head>
	<title>{m['HomePage.title']()}</title>
	<meta name="description" content={m['HomePage.metaDescription']()} />
	<meta property="og:title" content={m['HomePage.title']()} />
	<meta property="og:description" content={m['HomePage.metaDescription']()} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="website" />
	<!-- JSON-LD is generated from a trusted static object via JSON.stringify -->
	{@html HOMEPAGE_JSON_LD_SCRIPT}
	{@html faqJsonLdScript}
</svelte:head>

<main>
	<HeroSection />

	<Reveal>
		<VideoShowcaseSection />
	</Reveal>

	<InkDripTransition />
	<Reveal>
		<WhyChooseUsSection />
	</Reveal>

	<GlitchSliceTransition />
	<Reveal>
		<ServicesSection />
	</Reveal>

	<Reveal>
		<HowItWorksSection />
	</Reveal>

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
