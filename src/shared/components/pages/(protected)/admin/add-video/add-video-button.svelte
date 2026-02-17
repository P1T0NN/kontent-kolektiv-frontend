<script lang="ts">
    // SVELTEKIT IMPORTS
    import { goto } from '$app/navigation';

    // LIBRARIES
    import { useConvexClient } from 'convex-svelte';
    import { api } from '@/convex/_generated/api';
    import * as v from 'valibot';

    // CONFIG
    import { ADMIN_PAGE_ENDPOINTS } from '@/shared/constants';

    // CLASSES
    import { addVideoPageClass } from '@/routes/(protected)/admin/add-video/index.svelte';

    // COMPONENTS
    import Button from '@/shared/components/ui/button/button.svelte';
    import Spinner from '@/shared/components/ui/spinner/spinner.svelte';
    import { toast } from 'svelte-sonner';

    // UTILS
    import { safeMutation } from '@/shared/utils/convexHelpers';
    import { handleValidationErrors } from '@/shared/utils/validationUtils';

    // SCHEMAS
    import { addVideoFormSchema } from '@/features/videos/schemas/videos-schemas';

    // LUCIDE ICONS
    import PlusIcon from '@lucide/svelte/icons/plus';

    const client = useConvexClient();

    const handleAddVideo = async () => {
        addVideoPageClass.errorStates.addVideoErrors = {};

        const validation = v.safeParse(addVideoFormSchema, addVideoPageClass.addVideoInputs);

        if (!validation.success) {
            addVideoPageClass.errorStates.addVideoErrors = handleValidationErrors(validation.issues);
            return;
        } else {
            addVideoPageClass.pendingStates.addVideoIsPending = true;

            const payload = validation.output;
            const result = await safeMutation(client, api.tables.videos.videosMutations.createVideo, {
                ...payload,
                thumbnailUrl: payload.thumbnailUrl || undefined,
                creatorName: payload.creatorName || undefined,
                brandName: payload.brandName || undefined,
                status: 'published'
            });

            if (result?.success) {
                toast.success(result.message);
                addVideoPageClass.resetAddVideoFields();
                goto(ADMIN_PAGE_ENDPOINTS.VIDEOS);
            } else {
                toast.error(result?.message as string);
            }
        }

        addVideoPageClass.pendingStates.addVideoIsPending = false;
	};
</script>

<Button type="button" onclick={handleAddVideo} disabled={addVideoPageClass.pendingStates.addVideoIsPending}>
    {#if addVideoPageClass.pendingStates.addVideoIsPending}
        <Spinner class="mr-2 h-4 w-4" />
        Saving...
    {:else}
        <PlusIcon class="mr-2 h-4 w-4" />
        Add Video
    {/if}
</Button>