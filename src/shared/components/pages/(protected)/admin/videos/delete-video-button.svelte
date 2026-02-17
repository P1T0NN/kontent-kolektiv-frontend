<script lang="ts">
	// LIBRARIES
	import { useConvexClient } from 'convex-svelte';
	import { api } from '@/convex/_generated/api';

	// CLASSES
	import { videosPageClass } from '@/routes/(protected)/admin/videos/index.svelte';

	// COMPONENTS
	import AlertDialogButton from '@/shared/components/ui/alert-dialog-button/alert-dialog-button.svelte';
	import Button from '@/shared/components/ui/button/button.svelte';
    import { toast } from 'svelte-sonner';
    import Spinner from '@/shared/components/ui/spinner/spinner.svelte';
    
    // UTILS
	import { safeMutation } from '@/shared/utils/convexHelpers';

    // TYPES
    import type { Id } from '@/convex/_generated/dataModel';

	// LUCIDE ICONS
	import TrashIcon from '@lucide/svelte/icons/trash-2';

	let { videoId }: { videoId: Id<'videos'> } = $props();

	const client = useConvexClient();

	const handleDelete = async () => {
		videosPageClass.pendingStates.deleteVideoIsPending = true;

		const result = await safeMutation(client, api.tables.videos.videosMutations.deleteVideo, {
			id: videoId
		});

		if (result?.success) {
			toast.success(result.message);
		} else {
			toast.error(result?.message as string);
		}

		videosPageClass.pendingStates.deleteVideoIsPending = false;
	};
</script>

<AlertDialogButton
    open={videosPageClass.dialogStates.deleteVideoIsDialogOpen}
    onOpenChange={(open) => videosPageClass.dialogStates.deleteVideoIsDialogOpen = open}
	function={handleDelete}
	isPending={videosPageClass.pendingStates.deleteVideoIsPending}
	title="Delete video?"
	description="This action cannot be undone. The video will be removed from the showcase."
	triggerClass="w-full"
	actionClass="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
>
	{#snippet triggerChildren()}
		<Button variant="destructive" size="sm" class="w-full">
            {#if videosPageClass.pendingStates.deleteVideoIsPending}
                <Spinner />
            {:else}
			    <TrashIcon class="mr-2 h-3 w-3" />
            {/if}
			Delete
		</Button>
	{/snippet}
</AlertDialogButton>
