<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import * as Table from '@/shared/components/ui/table/index.js';

	// DATA
	import { comparisonData } from '@/shared/data/comparisonData';

	// LUCIDE ICONS
	import CheckIcon from '@lucide/svelte/icons/check';
	import XIcon from '@lucide/svelte/icons/x';
</script>

<section class="py-28 bg-dark">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-center mb-16">
			<p class="text-sm text-light-dim mb-3">{m['HomePage.ComparisonSection.label']()}</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light">
				{m['HomePage.ComparisonSection.title']()}
			</h2>
		</div>

		<div class="rounded-[28px] overflow-hidden border border-dark-border bg-dark-surface">
			<Table.Root class="border-0">
				<Table.Header>
					<Table.Row class="border-b border-dark-border bg-dark-card hover:bg-dark-card">
						<Table.Head class="px-4 sm:px-6 py-4 text-xs font-semibold uppercase tracking-wide text-light-dim min-w-[200px]">
							{m['HomePage.ComparisonSection.featureColumn']()}
						</Table.Head>
						<Table.Head class="px-4 sm:px-6 py-4 text-[0.85rem] font-bold text-light text-center">
							<div class="flex items-center justify-center gap-2">
								<img src="/logo/kontent-kolektiv-logo.png" alt="KontentKolektiv" class="w-6 h-6 rounded hidden sm:block" />
								<span class="text-xs sm:text-[0.85rem]">{m['HomePage.ComparisonSection.usColumn']()}</span>
							</div>
						</Table.Head>
						<Table.Head class="px-4 sm:px-6 py-4 text-[0.85rem] font-semibold text-light-dim text-center">
							{m['HomePage.ComparisonSection.themColumn']()}
						</Table.Head>
					</Table.Row>
				</Table.Header>
				
				<Table.Body>
					{#each comparisonData as feature}
						<Table.Row class="border-b border-dark-border last:border-b-0 transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-primary)_3%,transparent)]">
							<Table.Cell class="px-4 sm:px-6 py-4 text-xs sm:text-sm text-light-muted whitespace-normal">
								{feature.label()}
							</Table.Cell>
							<Table.Cell class="px-4 sm:px-6 py-4 text-center">
								<span class="w-8 h-8 rounded-full inline-flex items-center justify-center bg-[rgba(233,69,144,0.15)] text-primary">
									<CheckIcon class="w-4 h-4" />
								</span>
							</Table.Cell>
							<Table.Cell class="px-4 sm:px-6 py-4 text-center">
								{#if feature.them === 'partial'}
									<span class="w-8 h-8 rounded-full inline-flex items-center justify-center font-bold text-lg bg-[rgba(255,255,255,0.08)] text-light-dim">
										~
									</span>
								{:else}
									<span class="w-8 h-8 rounded-full inline-flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-[rgba(136,136,170,0.5)]">
										<XIcon class="w-4 h-4" />
									</span>
								{/if}
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
</section>
