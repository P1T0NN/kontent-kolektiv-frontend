<script lang="ts">
    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';

    // LUCIDE ICONS
    import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
</script>

<div class="flex items-center gap-4">
    <Button variant="outline" size="icon" href="/admin/dashboard" class="shrink-0">
        <ChevronLeftIcon class="size-4" />
    </Button>
    <div>

        <h1 class="text-2xl font-bold tracking-tight">Add New Video</h1>
        <p class="text-muted-foreground">Add a video embed to your showcase.</p>
    </div>
</div>