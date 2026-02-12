<script lang="ts">
	// LUCIDE ICONS
	import StarIcon from '@lucide/svelte/icons/star';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	const categories = ['Health & Beauty', 'Fashion & Lifestyle', 'Food & Beverage', 'Tech & Apps', 'Home & Living', 'Fitness'];
	let activeCategory = $state('Health & Beauty');

	const creators = [
		{ name: 'Marija', rating: 5.0, country: 'Serbia', category: 'Health & Beauty' },
		{ name: 'Eleni', rating: 4.9, country: 'Greece', category: 'Health & Beauty' },
		{ name: 'Ana', rating: 4.9, country: 'Croatia', category: 'Health & Beauty' },
		{ name: 'Nikola', rating: 5.0, country: 'Bulgaria', category: 'Health & Beauty' },
		{ name: 'Daria', rating: 4.8, country: 'Romania', category: 'Fashion & Lifestyle' },
		{ name: 'Luka', rating: 4.9, country: 'Slovenia', category: 'Fashion & Lifestyle' },
		{ name: 'Viktor', rating: 4.7, country: 'Hungary', category: 'Food & Beverage' },
		{ name: 'Besiana', rating: 5.0, country: 'Kosovo', category: 'Tech & Apps' },
		{ name: 'Stefan', rating: 4.9, country: 'N. Macedonia', category: 'Home & Living' },
		{ name: 'Emina', rating: 4.8, country: 'Bosnia', category: 'Fitness' },
		{ name: 'Dritan', rating: 4.9, country: 'Albania', category: 'Food & Beverage' },
		{ name: 'Mila', rating: 5.0, country: 'Montenegro', category: 'Fashion & Lifestyle' },
	];

	const filteredCreators = $derived(
		creators.filter(c => c.category === activeCategory).length > 0
			? creators.filter(c => c.category === activeCategory)
			: creators.slice(0, 4)
	);

	const colors = ['#E94590', '#6C63FF', '#00D4FF', '#FF6B35', '#22C55E', '#F59E0B'];

	function getInitialColor(name: string) {
		const index = name.charCodeAt(0) % colors.length;
		return colors[index];
	}
</script>

<section id="creators" class="py-28 bg-dark">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="text-center mb-12">
			<span class="inline-block px-4 py-1.5 bg-dark-card border border-dark-border rounded-full text-xs font-semibold text-light-dim uppercase tracking-widest mb-5">
				Our Creators
			</span>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mb-4">
				UGC starts with <span class="gradient-text">proven talent</span>
			</h2>
			<p class="text-lg text-light-muted max-w-[560px] mx-auto leading-relaxed">
				Meet our vetted creators from across Southeast Europe, ready to produce authentic content in their native language.
			</p>
		</div>

		<!-- Category Filter -->
		<div class="flex justify-center gap-2 mb-10 flex-wrap">
			{#each categories as cat}
				<button
					class="px-5 py-2 rounded-full text-[0.85rem] font-medium transition-all duration-200 {activeCategory === cat ? 'bg-gradient-brand border-transparent text-light' : 'bg-dark-card border border-dark-border text-light-muted hover:border-light-dim hover:text-light'}"
					onclick={() => activeCategory = cat}
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Creator Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
			{#each filteredCreators as creator}
				{@const color = getInitialColor(creator.name)}
				<div class="bg-dark-surface border border-dark-border rounded-[20px] p-6 flex flex-col items-center text-center gap-4 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
					<div class="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-[{color}]">
						<span class="text-2xl font-bold text-light font-display">{creator.name[0]}</span>
					</div>
					<div class="flex flex-col gap-1.5">
						<span class="font-semibold text-base text-light">{creator.name}</span>
						<div class="flex items-center justify-center gap-3">
							<span class="flex items-center gap-1 text-xs font-semibold text-[#F59E0B]">
								<StarIcon class="w-3.5 h-3.5 fill-current" />
								{creator.rating}
							</span>
							<span class="text-xs text-light-dim">{creator.country}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="text-center">
			<a
				href="#contact"
				class="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-brand rounded-full text-light font-semibold text-[0.95rem] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(233,69,144,0.3)] transition-all duration-200"
			>
				Explore creators
				<ArrowRightIcon class="w-[18px] h-[18px]" />
			</a>
		</div>
	</div>
</section>
