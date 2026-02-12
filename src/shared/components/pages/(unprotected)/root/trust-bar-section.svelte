<script lang="ts">
	const brands = ['Bolt', 'Glovo', 'Wolt', 'eMag', 'Temu', 'Shein', 'FashionNova', 'Revolut'];
</script>

<section class="py-12 border-t border-b border-dark-border bg-dark-surface overflow-hidden">
	<div class="max-w-[1200px] mx-auto px-6">
		<p class="text-center text-xs font-medium text-light-dim uppercase tracking-[0.12em] mb-7">
			Trusted by leading brands across Southeast Europe
		</p>
	</div>
	<div class="relative w-full overflow-hidden mask-[linear-gradient(90deg,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_10%,black_90%,transparent_100%)]">
		<div class="flex w-max animate-[marquee_30s_linear_infinite]">
			{#each [0, 1] as _set}
				<div class="flex items-center gap-14 pr-14" aria-hidden={_set > 0 ? 'true' : undefined}>
					{#each brands as brand}
						<div class="flex items-center gap-2.5 opacity-45 hover:opacity-75 transition-opacity duration-300 shrink-0">
							<span class="w-1.5 h-1.5 rounded-full bg-gradient-brand shrink-0"></span>
							<span class="text-xl font-bold text-light tracking-wide whitespace-nowrap font-display">{brand}</span>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
