<script lang="ts">
	interface Props {
		/** Tailwind text/color class for the fill (e.g. text-dark). Passed to SVG so fill-current picks it up. */
		fillClass?: string;
		/** Additional classes for the wrapper */
		class?: string;
		/** Height: sm (60px), md (80px), lg (100px) */
		size?: 'sm' | 'md' | 'lg';
	}

	let { fillClass = 'text-dark', class: className = '', size = 'lg' }: Props = $props();

	const heightClass = $derived(
		size === 'sm' ? 'h-[60px]' : size === 'md' ? 'h-[60px] sm:h-[80px]' : 'h-[60px] sm:h-[80px] md:h-[100px]'
	);
</script>

<div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 {className}">
	<svg
		class="relative block w-[calc(100%+1.3px)] {heightClass} {fillClass}"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<polygon points="1200,0 1200,120 0,120" class="fill-current" />
	</svg>
</div>
