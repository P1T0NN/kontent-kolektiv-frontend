<script lang="ts">
	// CONFIG
	import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';
	import { footerServicesLinks, footerCompanyLinks } from '@/shared/data/footerNavData';
	import { m } from '@/shared/lib/paraglide/messages';

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
					{COMPANY_DATA.TAGLINE} {m['Footer.description']()}
				</p>
				<div class="flex gap-3">
					<Instagram />
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<h4 class="text-sm font-bold text-light uppercase tracking-wider mb-1 font-display">{m['Footer.Services.title']()}</h4>
				{#each footerServicesLinks as link}
					<a href={link.href} class="text-sm text-light-dim hover:text-light transition-colors duration-200">{link.label()}</a>
				{/each}
			</div>

			<div class="flex flex-col gap-3">
				<h4 class="text-sm font-bold text-light uppercase tracking-wider mb-1 font-display">{m['Footer.Company.title']()}</h4>
				{#each footerCompanyLinks as link}
					<a href={link.href} class="text-sm text-light-dim hover:text-light transition-colors duration-200">{link.label()}</a>
				{/each}
			</div>
		</div>

		<div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-border">
			<p class="text-xs text-light-dim">{m['Footer.copyright']()}</p>
			<div class="flex gap-6">
				<a href={UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY} class="text-xs text-light-dim hover:text-light transition-colors duration-200">{m['Footer.privacyPolicy']()}</a>
				<!--	<a href={UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_SERVICE} class="text-xs text-light-dim hover:text-light transition-colors duration-200">{m['Footer.termsOfService']()}</a>-->
			</div>
		</div>
	</div>
</footer>
