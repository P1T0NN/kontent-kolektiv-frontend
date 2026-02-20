<script lang="ts">
    // COMPONENTS
	import ContactLeftContent from '@/shared/components/pages/(unprotected)/contact/contact-left-content.svelte';
	import ContactRightContent from '@/shared/components/pages/(unprotected)/contact/contact-right-content.svelte';
</script>

<svelte:head>
	<title>Contact KontentKolektiv - Start Your UGC Campaign</title>
	<meta name="description" content="Ready to scale your brand with authentic UGC? Contact our team to discuss your campaign goals and get a custom strategy." />
</svelte:head>

<main class="relative min-h-screen pt-32 pb-20 bg-dark overflow-hidden">
	<div class="relative max-w-[1100px] mx-auto px-6">
		<h1 class="text-center text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-light mb-16 leading-tight font-display">
			Get in Touch
		</h1>

		<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
			<ContactLeftContent />

			<ContactRightContent />
		</div>
	</div>
</main>
