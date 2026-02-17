<script lang="ts">
	// COMPONENTS
	import Skeleton from '@/shared/components/ui/skeleton/skeleton.svelte';

	const CARD_COUNT = 6;
</script>

<section id="work" class="py-28 bg-dark-surface">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="text-center mb-14">
			<Skeleton class="h-4 w-20 mx-auto mb-3" />
			<Skeleton class="h-10 w-[clamp(12rem,30vw,18rem)] mx-auto mb-4" />
			<Skeleton class="h-5 w-[min(100%,28rem)] mx-auto max-w-[560px]" />
		</div>

		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
			{#each Array(CARD_COUNT) as _}
				<Skeleton class="aspect-9/16 rounded-2xl" />
			{/each}
		</div>

		<div class="text-center mt-10">
			<Skeleton class="h-5 w-44 mx-auto" />
		</div>
	</div>
</section>
