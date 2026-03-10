<script lang="ts">
    let {
        accent
    }: {
        accent: string;
    } = $props();
</script>

<svg class="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="none">
    <rect
        x="2" y="2" width="396" height="276" rx="16"
        fill="none"
        stroke={accent}
        stroke-width="1.5"
        stroke-dasharray="8 4"
        class="dash-border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
</svg>

<style>
	@keyframes dashMove {
		to { stroke-dashoffset: -48; }
	}
	.dash-border { animation: dashMove 4s linear infinite; }
</style>