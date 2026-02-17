<script lang="ts">
	// LUCIDE ICONS
	import VideoIcon from '@lucide/svelte/icons/video';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
</script>

<div class="flex flex-col items-center justify-center py-16 px-6 rounded-2xl border border-dark-border bg-dark/30">
	<VideoIcon class="w-12 h-12 text-light-muted mb-4" strokeWidth={1.5} />
	<p class="text-light-muted text-center max-w-sm">
		No showcases yet. We're adding new work soon — check back later.
	</p>
</div>

<div class="text-center mt-10">
	<a
		href="#contact"
		class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
	>
		Get in touch
		<ArrowRightIcon class="w-4 h-4" />
	</a>
</div>
