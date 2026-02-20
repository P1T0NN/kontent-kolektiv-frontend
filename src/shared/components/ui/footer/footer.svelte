<script lang="ts">
	// CONFIG
	import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// COMPONENTS
	import Instagram from '@/shared/components/ui/socials/instagram.svelte';
</script>

<footer class="py-20 pb-10 bg-dark-surface border-t border-dark-border">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-15">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-2.5">
					<img src="/logo/kontent-kolektiv-logo.png" alt="{COMPANY_DATA.COMPANY_NAME} logo" class="w-9 h-9 rounded-md" />
					<span class="text-lg font-bold text-light font-display">{COMPANY_DATA.COMPANY_NAME}</span>
				</div>
				<p class="text-sm text-light-dim leading-relaxed max-w-[300px]">
					{COMPANY_DATA.TAGLINE} Authentic content that builds trust, engages audiences, and grows your brand.
				</p>
				<div class="flex gap-3">
					<Instagram />
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<h4 class="text-sm font-bold text-light uppercase tracking-wider mb-1 font-display">Services</h4>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.SERVICES} class="text-sm text-light-dim hover:text-light transition-colors duration-200">UGC Production</a>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.SERVICES} class="text-sm text-light-dim hover:text-light transition-colors duration-200">Creative Storytelling</a>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.WORK} class="text-sm text-light-dim hover:text-light transition-colors duration-200">Creator Network</a>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} class="text-sm text-light-dim hover:text-light transition-colors duration-200">Brand Partnerships</a>
			</div>

			<div class="flex flex-col gap-3">
				<h4 class="text-sm font-bold text-light uppercase tracking-wider mb-1 font-display">Company</h4>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.RESULTS} class="text-sm text-light-dim hover:text-light transition-colors duration-200">Case Studies</a>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} class="text-sm text-light-dim hover:text-light transition-colors duration-200">Contact</a>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT} class="text-sm text-light-dim hover:text-light transition-colors duration-200">Become a Creator</a>
			</div>
		</div>

		<div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-border">
			<p class="text-xs text-light-dim">&copy; 2026 KontentKolektiv. All Rights Reserved.</p>
			<div class="flex gap-6">
				<a href={UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY} class="text-xs text-light-dim hover:text-light transition-colors duration-200">Privacy Policy</a>
				<a href={UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_SERVICE} class="text-xs text-light-dim hover:text-light transition-colors duration-200">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>
