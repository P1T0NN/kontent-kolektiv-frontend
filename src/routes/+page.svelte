<script lang="ts">
	import HeroSection from '@/shared/components/pages/(unprotected)/root/hero-section.svelte';
	import TrustBarSection from '@/shared/components/pages/(unprotected)/root/trust-bar-section.svelte';
	import ServicesSection from '@/shared/components/pages/(unprotected)/root/services-section.svelte';
	import WhyChooseUsSection from '@/shared/components/pages/(unprotected)/root/why-choose-us-section.svelte';
	import CreatorsSection from '@/shared/components/pages/(unprotected)/root/creators-section.svelte';
	import HowItWorksSection from '@/shared/components/pages/(unprotected)/root/how-it-works-section.svelte';
	import ResultsSection from '@/shared/components/pages/(unprotected)/root/results-section.svelte';
	import ComparisonSection from '@/shared/components/pages/(unprotected)/root/comparison-section.svelte';
	import CoverageSection from '@/shared/components/pages/(unprotected)/root/coverage-section.svelte';
	import CtaSection from '@/shared/components/pages/(unprotected)/root/cta-section.svelte';
	import Reveal from '@/shared/components/ui/reveal/reveal.svelte';
</script>

<svelte:head>
	<title>KontentKolektiv - Leading UGC Marketing Agency in Southeast Europe</title>
	<meta name="description" content="Authentic User-Generated Content (UGC) That Drives Engagement, Builds Trust & Boosts Sales. Serving top brands across Bulgaria, Greece, Serbia, Hungary, Croatia, and more." />
</svelte:head>

<main>
	<HeroSection />

	<Reveal>
		<TrustBarSection />
	</Reveal>

	<Reveal>
		<ServicesSection />
	</Reveal>

	<Reveal>
		<WhyChooseUsSection />
	</Reveal>

	<Reveal>
		<CreatorsSection />
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
		<CoverageSection />
	</Reveal>

	<Reveal>
		<CtaSection />
	</Reveal>
</main>
