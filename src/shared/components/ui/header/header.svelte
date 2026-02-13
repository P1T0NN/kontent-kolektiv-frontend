<script lang="ts">
	// CLASSES
	import { headerClass } from './header.svelte.ts';

	// LUCIDE ICONS
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import BuildingIcon from '@lucide/svelte/icons/building-2';
	import VideoIcon from '@lucide/svelte/icons/video';

	let ctaOpen = $state(false);
	let ctaRef: HTMLDivElement;

	function handleScroll() {
		headerClass.scrolled = window.scrollY > 20;
	}

	function toggleMobile() {
		headerClass.mobileOpen = !headerClass.mobileOpen;
	}

	function handleClickOutside(e: MouseEvent) {
		if (ctaRef && !ctaRef.contains(e.target as Node)) {
			ctaOpen = false;
		}
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll);
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});
</script>

<!-- Floating pill nav — Billo-style island -->
<nav class="fixed top-0 left-0 right-0 z-1000 flex justify-center pt-5 transition-all duration-300 {headerClass.scrolled ? 'pt-3' : ''}">
	<div
		class="relative flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 max-w-[1100px] w-[calc(100%-2rem)]
		{headerClass.scrolled
			? 'bg-[rgba(10,8,16,0.82)] backdrop-blur-xl border border-white/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
			: 'bg-[rgba(10,8,16,0.45)] backdrop-blur-lg border border-white/6'}"
	>
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2.5 shrink-0">
			<img src="/logo/kontent-kolektiv-logo.png" alt="KontentKolektiv logo" class="w-8 h-8 rounded-lg" />
			<span class="text-[1rem] font-bold text-white/90 tracking-tight font-display">KontentKolektiv</span>
		</a>

		<!-- Desktop nav links — centered absolutely so they don't push CTA -->
		<div class="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
			{#each [
				{ href: '#services', label: 'Services' },
				{ href: '#creators', label: 'Creators' },
				{ href: '#results', label: 'Results' },
				{ href: '#coverage', label: 'Coverage' },
			] as link}
				<a
					href={link.href}
					class="px-4 py-2 text-[0.85rem] font-medium text-white/55 hover:text-white/90 hover:bg-white/6 rounded-xl transition-all duration-150"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Right: Log in + Split CTA -->
		<div class="hidden md:flex items-center gap-3 shrink-0">
			<a
				href="#contact"
				class="text-[0.8rem] font-medium text-white/45 hover:text-white/75 transition-colors duration-150 px-2 py-1"
			>
				Log in
			</a>

			<!-- Split CTA dropdown — Billo style -->
			<div class="relative" bind:this={ctaRef}>
				<div class="flex items-center rounded-full bg-gradient-brand overflow-hidden shadow-[0_2px_20px_rgba(233,69,144,0.25)]">
					<a
						href="#contact"
						class="pl-5 pr-3 py-2.5 text-[0.82rem] font-semibold text-white hover:brightness-110 transition-all duration-150 whitespace-nowrap"
					>
						Start a Campaign
					</a>
					<button
						onclick={() => ctaOpen = !ctaOpen}
						aria-label="More options"
						class="pr-3 pl-2 py-2.5 border-l border-white/20 hover:brightness-110 transition-all duration-150 flex items-center bg-transparent"
					>
						<ChevronDownIcon class="w-3.5 h-3.5 text-white transition-transform duration-200 {ctaOpen ? 'rotate-180' : ''}" />
					</button>
				</div>

				<!-- Dropdown panel -->
				{#if ctaOpen}
					<div class="absolute right-0 top-[calc(100%+10px)] w-56 rounded-2xl bg-[#131021] border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
						<div class="p-1.5">
							<a
								href="#contact"
								onclick={() => { ctaOpen = false; }}
								class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/6 transition-colors duration-150 group"
							>
								<div class="w-8 h-8 rounded-lg bg-[rgba(108,99,255,0.15)] flex items-center justify-center shrink-0">
									<BuildingIcon class="w-4 h-4 text-primary" />
								</div>
								<div>
									<p class="text-[0.82rem] font-semibold text-white/90 group-hover:text-white transition-colors">I'm a brand</p>
									<p class="text-[0.72rem] text-white/40">Connect with creators</p>
								</div>
								<ArrowRightIcon class="w-3.5 h-3.5 text-white/25 ml-auto group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
							</a>
							<a
								href="#creators"
								onclick={() => { ctaOpen = false; }}
								class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/6 transition-colors duration-150 group"
							>
								<div class="w-8 h-8 rounded-lg bg-[rgba(233,69,144,0.15)] flex items-center justify-center shrink-0">
									<VideoIcon class="w-4 h-4 text-secondary" />
								</div>
								<div>
									<p class="text-[0.82rem] font-semibold text-white/90 group-hover:text-white transition-colors">I'm a creator</p>
									<p class="text-[0.72rem] text-white/40">Monetize your content</p>
								</div>
								<ArrowRightIcon class="w-3.5 h-3.5 text-white/25 ml-auto group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
							</a>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="flex md:hidden p-1.5 rounded-xl hover:bg-white/[0.07] transition-colors duration-150 bg-transparent"
			onclick={toggleMobile}
			aria-label="Toggle menu"
		>
			{#if headerClass.mobileOpen}
				<XIcon class="w-5 h-5 text-white/80" />
			{:else}
				<MenuIcon class="w-5 h-5 text-white/80" />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile overlay menu -->
{#if headerClass.mobileOpen}
	<div class="fixed inset-0 z-999 flex flex-col bg-[#0a0810]/95 backdrop-blur-xl pt-24 px-6 pb-10">
		<!-- Nav links -->
		<div class="flex flex-col gap-1 mb-8">
			{#each [
				{ href: '#services', label: 'Services' },
				{ href: '#creators', label: 'Creators' },
				{ href: '#results', label: 'Results' },
				{ href: '#coverage', label: 'Coverage' },
			] as link}
				<a
					href={link.href}
					onclick={() => headerClass.mobileOpen = false}
					class="px-4 py-4 text-lg font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 border-b border-white/4 last:border-none"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile CTAs at bottom -->
		<div class="flex flex-col gap-3 mt-auto">
			<a
				href="#contact"
				onclick={() => headerClass.mobileOpen = false}
				class="flex items-center gap-3 p-4 rounded-2xl bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] hover:border-[rgba(108,99,255,0.4)] transition-all duration-150 group"
			>
				<div class="w-9 h-9 rounded-xl bg-[rgba(108,99,255,0.2)] flex items-center justify-center">
					<BuildingIcon class="w-4 h-4 text-primary" />
				</div>
				<div>
					<p class="text-[0.9rem] font-semibold text-white/90">I'm a brand</p>
					<p class="text-[0.78rem] text-white/40">Connect with creators</p>
				</div>
				<ArrowRightIcon class="w-4 h-4 text-white/25 ml-auto group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
			</a>
			<a
				href="#creators"
				onclick={() => headerClass.mobileOpen = false}
				class="flex items-center gap-3 p-4 rounded-2xl bg-[rgba(233,69,144,0.08)] border border-[rgba(233,69,144,0.15)] hover:border-[rgba(233,69,144,0.35)] transition-all duration-150 group"
			>
				<div class="w-9 h-9 rounded-xl bg-[rgba(233,69,144,0.18)] flex items-center justify-center">
					<VideoIcon class="w-4 h-4 text-secondary" />
				</div>
				<div>
					<p class="text-[0.9rem] font-semibold text-white/90">I'm a creator</p>
					<p class="text-[0.78rem] text-white/40">Monetize your content</p>
				</div>
				<ArrowRightIcon class="w-4 h-4 text-white/25 ml-auto group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
			</a>
		</div>
	</div>
{/if}