<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS, COMPANY_DATA, ADMIN_PAGE_ENDPOINTS } from '@/shared/constants';
	import { headerNavLinks } from '@/shared/data/headerNavData';
	import { m } from '@/shared/lib/paraglide/messages';

	// CLASSES
	import { headerClass } from './header.svelte.ts';
	import { usersClass } from '@/features/users/classes/users-class.svelte';

	// COMPONENTS
	import HeaderMobile from './header-mobile.svelte';
	import HeaderMobileButton from './header-mobile-button.svelte';
	import LanguageSelector from '@/shared/components/ui/language-selector/language-selector.svelte';

	function handleScroll() {
		headerClass.scrolled = window.scrollY > 20;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-1000 pt-5 transition-all duration-300 {headerClass.scrolled ? 'pt-3' : ''}">
	<div class="w-full flex items-center px-5">
		<div class="flex-1 flex justify-center min-w-0">
			<div
				class="relative flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 max-w-[1100px] w-[calc(100%-2rem)]
				{headerClass.scrolled
					? 'bg-[rgba(10,8,16,0.82)] backdrop-blur-xl border border-white/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
					: 'bg-[rgba(10,8,16,0.45)] backdrop-blur-lg border border-white/6'}"
			>
		<!-- Logo -->
		<a href={UNPROTECTED_PAGE_ENDPOINTS.ROOT} class="flex items-center gap-2.5 shrink-0">
			<img src="/logo/kontent-kolektiv-logo.png" alt="{COMPANY_DATA.COMPANY_NAME} logo" class="w-8 h-8 rounded-lg" />
			<span class="text-[1rem] font-bold text-white/90 tracking-tight font-display">{COMPANY_DATA.COMPANY_NAME}</span>
		</a>

		<!-- Desktop nav links -->
		<div class="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
			{#each headerNavLinks as link}
				<a
					href={link.href}
					class="px-4 py-2 text-[0.85rem] font-medium text-white/55 hover:text-white/90 hover:bg-white/6 rounded-xl transition-all duration-150"
				>
					{link.label()}
				</a>
			{/each}
		</div>

		<!-- Right: Dashboard (admin) + CTAs -->
		<div class="hidden md:flex items-center gap-2.5 shrink-0">
			{#if usersClass.currentUser?.role === 'admin'}
				<a
					href={ADMIN_PAGE_ENDPOINTS.VIDEOS}
					class="px-4 py-2 text-[0.85rem] font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-150 border border-white/15"
				>
					{m['Header.dashboard']()}
				</a>
			{/if}

			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.HIRE_CREATORS}
				class="px-4 py-2.5 text-[0.82rem] font-semibold text-white/80 hover:text-white border border-white/12 hover:border-white/25 hover:bg-white/5 rounded-full transition-all duration-150 whitespace-nowrap"
			>
				{m['Header.hireCreators']()}
			</a>
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.BECOME_A_CREATOR}
				class="px-4 py-2.5 text-[0.82rem] font-semibold text-white bg-gradient-brand rounded-full shadow-[0_2px_16px_rgba(233,69,144,0.25)] hover:shadow-[0_4px_24px_rgba(233,69,144,0.4)] hover:brightness-110 transition-all duration-150 whitespace-nowrap"
			>
				{m['Header.becomeACreator']()}
			</a>
		</div>

		<HeaderMobileButton />
			</div>
		</div>
		<!-- Language selector: outside header bar, fully on the right -->
		<div class="hidden md:block shrink-0 ml-4">
			<LanguageSelector variant="header" />
		</div>
	</div>
</nav>

{#if headerClass.mobileOpen}
	<HeaderMobile />
{/if}
