<script lang="ts">
    // CONFIG
    import { ADMIN_PAGE_ENDPOINTS } from '@/shared/constants';

    // COMPONENTS
    import * as Card from '@/shared/components/ui/card';
    import Button from '@/shared/components/ui/button/button.svelte';

    // LUCIDE ICONS
    import PlusIcon from '@lucide/svelte/icons/plus';
</script>

<Card.Root>
    <Card.Content class="flex flex-col items-center justify-center py-16 text-center">
        <p class="text-muted-foreground mb-4">No videos yet. Add your first video to get started.</p>
        <Button href={ADMIN_PAGE_ENDPOINTS.ADD_VIDEO}>
            <PlusIcon class="mr-2 h-4 w-4" />
            Add First Video
        </Button>
    </Card.Content>
</Card.Root>