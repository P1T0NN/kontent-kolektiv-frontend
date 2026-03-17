<script lang="ts">
	// COMPONENTS
	import LegalTechEmbed from '@/shared/components/ui/legal-tech-embed/legal-tech-embed.svelte';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';
</script>

<svelte:head>
	<title>Privacy Policy – KontentKolektiv</title>
	<meta name="description" content="Privacy Policy for KontentKolektiv. How we process your personal data." />
	<script id="CookieDeclaration" src="https://consent.cookiebot.com/c15d78a1-ac3a-491d-94bd-68cc1567a13e/cd.js" type="text/javascript" async></script>
</svelte:head>

<main class="min-h-screen pt-32 pb-24 bg-white">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="prose prose-neutral max-w-none">
			<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
			<p class="text-gray-500 mb-10">Effective Date: March 13th, 2025</p>

			<LegalTechEmbed embedId="5CZ0G658G9" />

			<h2 class="text-2xl font-semibold text-gray-900 mt-12 mb-4">Cookie Declaration</h2>
			<div id="CookieDeclaration" class="mt-4 mb-8"></div>

			<div class="mt-8 mb-4">
				<a
					href="https://legal-tech.bg/gdpr"
					target="_blank"
					rel="noopener noreferrer"
					class="text-primary hover:underline"
				>
					GDPR
				</a>
			</div>

			<h2 class="text-2xl font-semibold text-gray-900 mt-12 mb-4">Additional Privacy Policies</h2>
			<div class="p-6 rounded-2xl bg-gray-50 border border-gray-200">
				<h3 class="text-lg font-semibold text-gray-900 mb-4">English</h3>
				<ul class="space-y-2 text-gray-600">
					<li>
						<a href="/privacy-customers-en" class="text-primary hover:underline">Privacy Policy for Customers</a>
					</li>
					<li>
						<a href="/data-sharing-en" class="text-primary hover:underline">Data Sharing Policy</a>
					</li>
					<li>
						<a href="/privacy-creators-en" class="text-primary hover:underline">Privacy Policy for Creators</a>
					</li>
				</ul>

				<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4">Български</h3>
				<ul class="space-y-2 text-gray-600">
					<li>
						<a href="/privacy-customers-bg" class="text-primary hover:underline">Политика за поверителност за клиенти</a>
					</li>
					<li>
						<a href="/data-sharing-bg" class="text-primary hover:underline">Политика за споделяне на данни</a>
					</li>
					<li>
						<a href="/privacy-creators-bg" class="text-primary hover:underline">Политика за поверителност за създатели</a>
					</li>
				</ul>
			</div>

			<div class="mt-12">
				<a href={UNPROTECTED_PAGE_ENDPOINTS.ROOT} class="text-gray-500 hover:text-gray-900 transition-colors text-sm">← Back to home</a>
			</div>
		</div>
	</div>
</main>
