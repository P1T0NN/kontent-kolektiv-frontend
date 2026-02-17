<script lang="ts">
	// LIBRARIES
	import { useConvexClient } from 'convex-svelte';
	import { api } from '@/convex/_generated/api';

	// CLASSES
	import { videosPageClass } from '@/routes/(protected)/admin/videos/index.svelte';

	// COMPONENTS
	import Button from '@/shared/components/ui/button/button.svelte';
	import { toast } from 'svelte-sonner';

	// UTILS
	import { safeMutation } from '@/shared/utils/convexHelpers';

	// TYPES
	import type { Id } from '@/convex/_generated/dataModel';

	// LUCIDE ICONS
	import ArrowUpIcon from '@lucide/svelte/icons/arrow-up';
	import ArrowDownIcon from '@lucide/svelte/icons/arrow-down';

	let {
		videoId,
		direction,
		disabled = false
	}: {
		videoId: Id<'videos'>;
		direction: 'up' | 'down';
		disabled?: boolean;
	} = $props();

	const client = useConvexClient();

	const handleClick = async () => {
		if (disabled || videosPageClass.pendingStates.changeVideoOrderIsPending) return;
		videosPageClass.pendingStates.changeVideoOrderIsPending = true;

		const result = await safeMutation(client, api.tables.videos.videosMutations.changeVideoOrder, {
			id: videoId,
			direction
		});

		if (result?.success) {
			toast.success(result.message);
		} else {
			toast.error(result?.message as string);
		}

		videosPageClass.pendingStates.changeVideoOrderIsPending = false;
	};

	const title = $derived(direction === 'up' ? 'Move Up' : 'Move Down');
</script>

<Button
	variant="outline"
	size="icon-sm"
	{title}
	disabled={disabled || videosPageClass.pendingStates.changeVideoOrderIsPending}
	onclick={handleClick}
>
	{#if direction === 'up'}
		<ArrowUpIcon class="h-3 w-3" />
	{:else}
		<ArrowDownIcon class="h-3 w-3" />
	{/if}
</Button>
