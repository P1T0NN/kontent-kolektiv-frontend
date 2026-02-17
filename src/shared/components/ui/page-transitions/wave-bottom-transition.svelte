<script lang="ts">
	interface Props {
		/** Tailwind text/color class for the wave fill (e.g. text-dark-surface). Passed to SVG so fill-current picks it up. */
		fillClass?: string;
		/** Additional classes for the wrapper */
		class?: string;
		/** Wave height: sm (50px), md (100px), lg (120px) */
		size?: 'sm' | 'md' | 'lg';
	}

	let { fillClass = 'text-dark-surface', class: className = '', size = 'lg' }: Props = $props();

	const heightClass = $derived(
		size === 'sm' ? 'h-[50px]' : size === 'md' ? 'h-[50px] sm:h-[100px]' : 'h-[50px] sm:h-[100px] md:h-[120px]'
	);
</script>

<div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 {className}">
	<svg
		class="relative block w-[calc(100%+1.3px)] {heightClass} {fillClass} rotate-180"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<path
			d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			class="fill-current"
		/>
	</svg>
</div>
