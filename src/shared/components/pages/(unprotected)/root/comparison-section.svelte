<script lang="ts">
    // COMPONENTS
	import * as Card from '@/shared/components/ui/card/index.js';

    // LUCIDE ICONS
	import CheckIcon from '@lucide/svelte/icons/check';
	import XIcon from '@lucide/svelte/icons/x';

	const features = [
		{ label: 'Real local creators people trust', us: true, them: false },
		{ label: 'Native-language content for each market', us: true, them: false },
		{ label: 'Data-backed creative briefs', us: true, them: false },
		{ label: 'Ad-ready delivery for all platforms', us: true, them: 'partial' },
		{ label: 'Performance analytics & iteration', us: true, them: false },
		{ label: '12+ Southeast European markets', us: true, them: false },
		{ label: 'Creator matching by niche & language', us: true, them: 'partial' },
		{ label: 'Fast turnaround (days, not weeks)', us: true, them: false },
	];
</script>

<section class="py-28 bg-dark">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="text-center mb-16">
			<p class="text-sm text-light-dim mb-3">The New Standard</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light">
				The <span class="gradient-text">smarter choice</span> for UGC in Southeast Europe
			</h2>
		</div>

		<Card.Root class="py-0 max-w-[800px] mx-auto rounded-[28px] overflow-hidden border-dark-border bg-dark-surface">
			<!-- Table Header -->
			<div class="grid grid-cols-[2fr_1fr_1fr] border-b bg-dark-card border-dark-border">
				<div class="px-4 sm:px-6 py-4 text-xs font-semibold uppercase tracking-wide text-light-dim">
					Feature
				</div>
				<div class="px-4 sm:px-6 py-4 text-[0.85rem] font-bold flex items-center justify-center gap-2 text-light">
					<img src="/logo/kontent-kolektiv-logo.png" alt="KontentKolektiv" class="w-6 h-6 rounded hidden sm:block" />
					<span class="text-xs sm:text-[0.85rem]">KontentKolektiv</span>
				</div>
				<div class="px-4 sm:px-6 py-4 text-[0.85rem] font-semibold flex items-center justify-center text-light-dim">
					Generic Agencies
				</div>
			</div>

			<!-- Rows -->
			{#each features as feature, i}
				<div class="grid grid-cols-[2fr_1fr_1fr] border-b last:border-b-0 transition-colors duration-200 border-dark-border hover:bg-[color-mix(in_srgb,var(--color-primary)_3%,transparent)]">
					<div class="px-4 sm:px-6 py-4 text-xs sm:text-sm flex items-center text-light-muted">
						{feature.label}
					</div>
					<div class="px-4 sm:px-6 py-4 flex items-center justify-center">
						<span class="w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(233,69,144,0.15)] text-primary">
							<CheckIcon />
						</span>
					</div>
					<div class="px-4 sm:px-6 py-4 flex items-center justify-center">
						{#if feature.them === 'partial'}
							<span class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg bg-[rgba(255,255,255,0.08)] text-light-dim">
								~
							</span>
						{:else}
							<span class="w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-[rgba(136,136,170,0.5)]">
								<XIcon />
							</span>
						{/if}
					</div>
				</div>
			{/each}
		</Card.Root>
	</div>
</section>
