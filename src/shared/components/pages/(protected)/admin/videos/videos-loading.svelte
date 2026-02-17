<script lang="ts">
    // COMPONENTS
    import * as Card from '@/shared/components/ui/card';
    import Skeleton from '@/shared/components/ui/skeleton/skeleton.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each Array(6) as _}
        <Card.Root>
            <Card.Content class="p-6 space-y-4">
                <Skeleton class="h-48 w-full rounded-lg" />
                <Skeleton class="h-4 w-3/4" />
                <Skeleton class="h-4 w-1/2" />
            </Card.Content>
        </Card.Root>
    {/each}
</div>