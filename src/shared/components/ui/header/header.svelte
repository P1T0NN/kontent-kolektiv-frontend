<script lang="ts">
	// CLASSES
	import { headerClass } from './header.svelte.ts';

	// LUCIDE ICONS
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';

	function handleScroll() {
		headerClass.scrolled = window.scrollY > 20;
	}

	function toggleMobile() {
		headerClass.mobileOpen = !headerClass.mobileOpen;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-1000 py-5 transition-all duration-300 {headerClass.scrolled ? 'bg-[rgba(10,10,26,0.9)] backdrop-blur-[20px] py-3 border-b border-dark-border' : ''}"
>
	<div class="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2.5">
			<img src="/logo/kontent-kolektiv-logo.png" alt="KontentKolektiv logo" class="w-10 h-10 rounded-md" />
			<span class="text-xl font-bold text-light font-display">KontentKolektiv</span>
		</a>

		<div
			class="flex items-center md:gap-8 md:static md:flex-row md:opacity-100 md:pointer-events-auto md:bg-transparent md:justify-start fixed top-0 left-0 right-0 bottom-0 bg-dark flex-col justify-center gap-10 opacity-0 pointer-events-none transition-opacity duration-300 {headerClass.mobileOpen ? 'opacity-100 pointer-events-auto' : ''}"
		>
			<a href="#services" class="text-sm font-medium text-light-muted hover:text-light transition-colors duration-200 md:text-[0.9rem]" onclick={() => headerClass.mobileOpen = false}>
				Services
			</a>
			<a href="#creators" class="text-sm font-medium text-light-muted hover:text-light transition-colors duration-200 md:text-[0.9rem]" onclick={() => headerClass.mobileOpen = false}>
				Creators
			</a>
			<a href="#results" class="text-sm font-medium text-light-muted hover:text-light transition-colors duration-200 md:text-[0.9rem]" onclick={() => headerClass.mobileOpen = false}>
				Results
			</a>
			<a href="#coverage" class="text-sm font-medium text-light-muted hover:text-light transition-colors duration-200 md:text-[0.9rem]" onclick={() => headerClass.mobileOpen = false}>
				Coverage
			</a>
			<a href="#contact" class="text-sm font-medium text-light-muted hover:text-light transition-colors duration-200 md:text-[0.9rem]" onclick={() => headerClass.mobileOpen = false}>
				<span class="inline-block px-6 py-2.5 bg-gradient-brand rounded-full text-light font-semibold text-[0.9rem] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
					Get Started
				</span>
			</a>
		</div>

		<button
			class="flex md:hidden flex-col gap-1.5 bg-transparent p-1"
			onclick={toggleMobile}
			aria-label="Toggle menu"
		>
			{#if headerClass.mobileOpen}
				<XIcon class="w-6 h-6 text-light" />
			{:else}
				<MenuIcon class="w-6 h-6 text-light" />
			{/if}
		</button>
	</div>
</nav>
