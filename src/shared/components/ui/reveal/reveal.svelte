<script lang="ts">
	let { children, delay = 0 } = $props();
	let element = $state<HTMLDivElement | null>(null);
	let visible = $state(false);

	$effect(() => {
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[{delay}ms] {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}"
>
	{@render children()}
</div>
