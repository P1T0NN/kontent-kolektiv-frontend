<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onDestroy } from 'svelte';
	import { page } from '$app/state';

	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { SITE_URL, COMPANY_DATA } from '@/shared/constants';

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
	import JaggedTearTransition from '@/shared/components/ui/page-transitions/jagged-tear-transition.svelte';
	import InkDripTransition from '@/shared/components/ui/page-transitions/ink-drip-transition.svelte';
	import GlitchSliceTransition from '@/shared/components/ui/page-transitions/glitch-slice-transition.svelte';

	const canonicalUrl = $derived(SITE_URL + page.url.pathname);
	const ogImage = `${SITE_URL}/logo/kontent-kolektiv-logo.png`;
	const faqSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{ '@type': 'Question', name: m['HomePage.FaqSection.faq1Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq1Answer']() } },
			{ '@type': 'Question', name: m['HomePage.FaqSection.faq2Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq2Answer']() } },
			{ '@type': 'Question', name: m['HomePage.FaqSection.faq3Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq3Answer']() } },
			{ '@type': 'Question', name: m['HomePage.FaqSection.faq4Question'](), acceptedAnswer: { '@type': 'Answer', text: m['HomePage.FaqSection.faq4Answer']() } }
		]
	});
	const orgSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: COMPANY_DATA.COMPANY_NAME,
		url: SITE_URL,
		email: COMPANY_DATA.EMAIL,
		sameAs: [COMPANY_DATA.INSTAGRAM_URL]
	};
	
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
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(orgSchema)}<\/script>`}
</svelte:head>

<main>
	<HeroSection />

	<JaggedTearTransition />
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
