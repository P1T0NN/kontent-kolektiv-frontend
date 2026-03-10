<script lang="ts">
    let {
        accent
    }: {
        accent: string;
    } = $props();
</script>

<svg class="pointer-events-none absolute bottom-4 right-4 z-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M36 4 C30 10, 20 8, 14 20 C8 32, 4 36, 4 36" stroke={accent} stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
    <circle cx="36" cy="4" r="2" fill={accent} opacity="0.4"/>
</svg>