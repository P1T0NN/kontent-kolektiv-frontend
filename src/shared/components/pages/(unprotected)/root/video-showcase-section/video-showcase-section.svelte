<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';
	import { useQuery } from 'convex-svelte';
	import { api } from '@/convex/_generated/api';

	// COMPONENTS
	import VideoShowcaseSectionItem from './video-showcase-section-item.svelte';
	import VideoShowcaseSectionEmpty from '../empty/video-showcase-section-empty.svelte';
	import VideoShowcaseSectionLoading from '../loading/video-showcase-section-loading.svelte';
	import * as Carousel from '@/shared/components/ui/carousel';

	const videosQuery = useQuery(api.tables.videos.videosQueries.fetchAllPublishedVideos, () => ({}));
	const videos = $derived(videosQuery.data ?? []);
</script>

<section id="work" class="py-28 bg-dark-surface">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-center mb-14">
			<p class="text-sm text-light-dim mb-3">{m['HomePage.VideoShowcaseSection.label']()}</p>
			<h2 class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mb-4">
				{m['HomePage.VideoShowcaseSection.titleBefore']()}<span class="gradient-text">{m['HomePage.VideoShowcaseSection.titleHighlight']()}</span>
			</h2>
			<p class="text-lg text-light-muted max-w-[560px] mx-auto leading-relaxed">
				{m['HomePage.VideoShowcaseSection.subtitle']()}
			</p>
		</div>

		{#if videosQuery.isLoading}
			<VideoShowcaseSectionLoading />
		{:else if videos.length > 0}
			<Carousel.Root>
				<Carousel.Content class="-ml-4 touch-pan-y">
					{#each videos as video (video._id)}
						<Carousel.Item class="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
							<VideoShowcaseSectionItem video={video} />
						</Carousel.Item>
					{/each}
				</Carousel.Content>

				{#if videos.length > 2}
					<Carousel.Previous class="left-2 lg:left-4 xl:-left-12" />
					<Carousel.Next class="right-2 lg:right-4 xl:-right-12" />
				{/if}
			</Carousel.Root>
		{:else}
			<VideoShowcaseSectionEmpty />
		{/if}

		<div class="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap mt-12">
			<div class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-sm">
				<span class="text-2xl font-extrabold gradient-text font-display leading-none">5x</span>
				<span class="text-[0.8rem] text-light-muted text-left leading-snug max-w-[140px]">{m['HomePage.VideoShowcaseSection.stat1']()}</span>
			</div>
			<div class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-sm">
				<span class="text-2xl font-extrabold gradient-text font-display leading-none">70%</span>
				<span class="text-[0.8rem] text-light-muted text-left leading-snug max-w-[140px]">{m['HomePage.VideoShowcaseSection.stat2']()}</span>
			</div>
			<div class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-sm">
				<span class="text-2xl font-extrabold gradient-text font-display leading-none">3x</span>
				<span class="text-[0.8rem] text-light-muted text-left leading-snug max-w-[140px]">{m['HomePage.VideoShowcaseSection.stat3']()}</span>
			</div>
		</div>
	</div>
</section>
