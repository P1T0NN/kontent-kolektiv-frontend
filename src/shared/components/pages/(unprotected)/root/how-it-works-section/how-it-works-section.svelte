<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import GridTextureBackground from '@/shared/components/ui/page-backgrounds/grid-texture-background.svelte';
	import HowItWorksSectionItemMobile from './how-it-works-section-item-mobile.svelte';
	import HowItWorksSectionItemDesktop from './how-it-works-section-item-desktop.svelte';

	// DATA
	import { howItWorksData } from '@/shared/data/howItWorksData';
</script>

<section class="relative overflow-hidden bg-[#12122A] py-28">
	<GridTextureBackground />

	<div class="relative z-10 mx-auto max-w-[1200px] px-6">
		<div class="mb-20 text-center">
			<p class="mb-3 text-sm text-[#8888AA]">
				{m['HomePage.HowItWorksSection.label']()}
			</p>
			<h2 class="mb-4 text-[clamp(2.2rem,4.5vw,3.6rem)] font-black italic leading-[1.05] tracking-[-0.03em] text-white">
				{m['HomePage.HowItWorksSection.title']()}
			</h2>
			<p class="mx-auto font-mono text-[0.78rem] tracking-[0.05em] text-[#8888AA]">
				{m['HomePage.HowItWorksSection.deliveryNote']()}
			</p>
		</div>

		<div class="hidden lg:block">
			<div class="relative mb-10 flex items-center justify-between px-[60px]">
				<div class="absolute left-[60px] right-[60px] top-1/2 h-px -translate-y-1/2 border-t border-dashed border-[#2A2A4A]"></div>
				<div class="progress-line absolute left-[60px] right-[60px] top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-linear-to-r from-[#E94590] via-[#6C63FF] to-[#00D4FF] opacity-70"></div>

				{#each howItWorksData as step}
					<div class="relative z-10 flex flex-col items-center gap-3">
						<div
							class="step-node group relative flex size-14 cursor-default items-center justify-center rounded-full border-2 bg-[#12122A] transition-all duration-300"
							style="border-color: {step.accent}; box-shadow: 0 0 0 4px {step.accent}18;"
						>
							<div
								class="absolute inset-0 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-50"
								style="background: {step.accent};"
							></div>
							<span class="relative z-10 font-mono text-[0.7rem] font-bold" style="color: {step.accent};">{step.number}</span>
						</div>
					</div>
				{/each}
			</div>

			<div class="grid grid-cols-4 gap-5">
				<HowItWorksSectionItemDesktop />
			</div>
		</div>

		<div class="flex flex-col gap-0 lg:hidden">
			<HowItWorksSectionItemMobile />
		</div>

	</div>
</section>

<style>
	@keyframes progressLine {
		from { clip-path: inset(0 100% 0 0); }
		to   { clip-path: inset(0 0% 0 0); }
	}
	.progress-line {
		animation: progressLine 1.4s cubic-bezier(0.4, 0, 0.2, 1) both;
		animation-delay: 0.3s;
	}
</style>