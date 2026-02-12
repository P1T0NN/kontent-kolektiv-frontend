<script lang="ts">
	const countries = [
		{ name: 'Bulgaria', flag: '🇧🇬' },
		{ name: 'Greece', flag: '🇬🇷' },
		{ name: 'Serbia', flag: '🇷🇸' },
		{ name: 'Hungary', flag: '🇭🇺' },
		{ name: 'Croatia', flag: '🇭🇷' },
		{ name: 'North Macedonia', flag: '🇲🇰' },
		{ name: 'Romania', flag: '🇷🇴' },
		{ name: 'Albania', flag: '🇦🇱' },
		{ name: 'Bosnia & Herzegovina', flag: '🇧🇦' },
		{ name: 'Montenegro', flag: '🇲🇪' },
		{ name: 'Slovenia', flag: '🇸🇮' },
		{ name: 'Kosovo', flag: '🇽🇰' },
	];

	const platforms = [
		{ name: 'TikTok', desc: 'Short-form vertical video' },
		{ name: 'Instagram Reels', desc: 'Engaging visual stories' },
		{ name: 'YouTube Shorts', desc: 'Discovery-driven shorts' },
		{ name: 'Meta Ads', desc: 'High-converting ad creatives' },
	];
</script>

<section id="coverage" class="py-[120px] bg-dark">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="text-center mb-16">
			<span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 bg-dark-card border border-dark-border text-light-dim">
				Our Coverage
			</span>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mb-4">
				Serving brands across <span class="gradient-text">Southeast Europe</span>
			</h2>
			<p class="text-lg text-light-muted max-w-[600px] mx-auto leading-relaxed">
				Native-language UGC creators in every major market across the region, delivering content optimized for all major platforms.
			</p>
		</div>

		<div class="flex flex-col gap-16">
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
				{#each countries as country}
					<div class="flex items-center gap-3 px-5 py-4 bg-dark-surface border border-dark-border rounded-lg transition-all duration-200 hover:border-[rgba(233,69,144,0.2)] hover:-translate-y-0.5">
						<span class="text-2xl">{country.flag}</span>
						<span class="text-sm font-semibold text-light">{country.name}</span>
					</div>
				{/each}
			</div>

			<div class="text-center">
				<h3 class="text-xl font-bold text-light mb-7">Optimized for every platform</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{#each platforms as platform}
						<div class="px-7 py-7 bg-dark-surface border border-dark-border rounded-lg flex flex-col gap-2 text-center transition-all duration-300 hover:border-[rgba(108,99,255,0.3)]">
							<span class="text-lg font-bold text-light font-display">
								{platform.name}
							</span>
							<span class="text-sm text-light-dim">{platform.desc}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
