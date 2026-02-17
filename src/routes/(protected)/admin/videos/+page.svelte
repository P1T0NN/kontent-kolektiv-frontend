<script lang="ts">
	// LIBRARIES
	import { useQuery } from 'convex-svelte';
	import { api } from '@/convex/_generated/api';

	// COMPONENTS
	import { Separator } from '@/shared/components/ui/separator';
	import VideosHeader from '@/shared/components/pages/(protected)/admin/videos/videos-header.svelte';
	import VideosEmpty from '@/shared/components/pages/(protected)/admin/videos/videos-empty.svelte';
	import VideosLoading from '@/shared/components/pages/(protected)/admin/videos/videos-loading.svelte';
	import VideosItem from '@/shared/components/pages/(protected)/admin/videos/videos-item.svelte';

	const videosQuery = useQuery(api.tables.videos.videosQueries.fetchAllVideos, () => ({}));
	const videos = $derived(videosQuery.data ?? []);
</script>

<svelte:head>
	<title>Manage Videos - Admin</title>
</svelte:head>

<div class="flex flex-col gap-6 p-6">
	<VideosHeader />

	<Separator />

	{#if videosQuery.isLoading}
		<VideosLoading />
	{:else if videos.length === 0}
		<VideosEmpty />
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
			{#each videos as video, i (video._id)}
				<VideosItem video={video} isFirst={i === 0} isLast={i === videos.length - 1} />
			{/each}
		</div>
	{/if}
</div>
