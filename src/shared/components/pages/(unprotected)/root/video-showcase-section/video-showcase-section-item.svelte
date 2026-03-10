<script lang="ts">
	// TYPES
	import type { Doc } from '@/convex/_generated/dataModel';

	let { video }: { video: Doc<'videos'> } = $props();
</script>

<div class="group relative aspect-9/16 rounded-2xl overflow-hidden border border-dark-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer touch-none">
	<iframe
		src={video.embedUrl}
		title={video.brandName ?? 'Video'}
        class="absolute inset-0 w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
</div>