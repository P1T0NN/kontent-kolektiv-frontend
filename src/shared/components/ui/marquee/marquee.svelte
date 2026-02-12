<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		speed = 30,
		gap = 56,
		class: className = ''
	}: {
		children: Snippet;
		speed?: number;
		gap?: number;
		class?: string;
	} = $props();
</script>

<div
	class="relative w-full overflow-hidden {className}"
	style="-webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%); mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);"
>
	<div
		class="flex w-max"
		style="animation: marquee {speed}s linear infinite"
	>
		<div class="flex items-center" style="gap: {gap}px; padding-right: {gap}px">
			{@render children()}
		</div>
		<div class="flex items-center" style="gap: {gap}px; padding-right: {gap}px" aria-hidden="true">
			{@render children()}
		</div>
	</div>
</div>
