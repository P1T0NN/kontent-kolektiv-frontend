<script lang="ts">
    // COMPONENTS
    import * as Card from '@/shared/components/ui/card';
    import DeleteVideoButton from './delete-video-button.svelte';
	import ChangeOrderButton from './change-order-button.svelte';
    import Separator from '@/shared/components/ui/separator/separator.svelte';

    // TYPES
    import type { Doc } from '@/convex/_generated/dataModel';

    // LUCIDE ICONS
    import ExternalLinkIcon from '@lucide/svelte/icons/external-link';

    let { video, isFirst = false, isLast = false }: { video: Doc<'videos'>; isFirst?: boolean; isLast?: boolean } = $props();

    const getPlatformColor = (platform: string) => {
		const colors: Record<string, string> = {
			tiktok: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
			instagram: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
			youtube: 'bg-red-500/10 text-red-500 border-red-500/20',
			vimeo: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
			other: 'bg-gray-500/10 text-gray-500 border-gray-500/20'
		};
		return colors[platform] || colors.other;
	};
</script>

<Card.Root class="py-0 overflow-hidden">
    <Card.Content class="p-0">
        <!-- Video Embed -->
        <div class="relative aspect-video bg-muted">
            <iframe
                src={video.embedUrl}
                title={video.brandName || 'Video embed'}
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <!-- Platform Badge -->
            <div class="absolute top-3 left-3 z-10">
                <span class="px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm {getPlatformColor(video.platform)}">
                    {video.platform.charAt(0).toUpperCase() + video.platform.slice(1)}
                </span>
            </div>
            <!-- Status Badge -->
            <div class="absolute top-3 right-3 z-10">
                {#if video.status === 'published'}
                    <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/20 backdrop-blur-sm">
                        Published
                    </span>
                {:else}
                    <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 backdrop-blur-sm">
                        Draft
                    </span>
                {/if}
            </div>
        </div>

        <!-- Video Info -->
        <div class="p-4 space-y-3">
            <div>
                {#if video.brandName}
                    <h3 class="font-semibold text-sm line-clamp-1">{video.brandName}</h3>
                {/if}
                {#if video.creatorName}
                    <p class="text-xs text-muted-foreground">by {video.creatorName}</p>
                {/if}
            </div>

            <!-- Embed URL -->
            <a 
                href={video.embedUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors line-clamp-1 group"
            >
                <ExternalLinkIcon class="h-3 w-3 shrink-0" />
                <span class="truncate">{video.embedUrl}</span>
            </a>

            <Separator />

            <!-- Order Display & Actions -->
            <div class="flex items-center justify-between gap-2">
                <span class="text-xs text-muted-foreground">Order: <span class="font-mono font-semibold text-foreground">#{video.order}</span></span>
                <div class="flex gap-1">
                    <ChangeOrderButton videoId={video._id} direction="up" disabled={isFirst} />
                    <ChangeOrderButton videoId={video._id} direction="down" disabled={isLast} />
                </div>
            </div>

            <Separator />

            <DeleteVideoButton videoId={video._id} />
        </div>
    </Card.Content>
</Card.Root>