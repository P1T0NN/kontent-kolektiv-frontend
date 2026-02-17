<script lang="ts">
    // CONFIG
    import { ADMIN_PAGE_ENDPOINTS } from '@/shared/constants';

    // COMPONENTS
    import Button from '@/shared/components/ui/button/button.svelte';

    // LUCIDE ICONS
    import PlusIcon from '@lucide/svelte/icons/plus';
</script>

<div class="flex items-center justify-between">
    <div>
        <h1 class="text-2xl font-bold tracking-tight">Video Showcase</h1>
        <p class="text-muted-foreground">Manage videos displayed on your landing page.</p>
    </div>

    <Button href={ADMIN_PAGE_ENDPOINTS.ADD_VIDEO}>
        <PlusIcon class="mr-2 h-4 w-4" />
        Add Video
    </Button>
</div>