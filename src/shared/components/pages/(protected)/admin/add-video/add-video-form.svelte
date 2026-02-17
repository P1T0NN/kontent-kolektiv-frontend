<script lang="ts">
    // CLASSES
    import { addVideoPageClass } from '@/routes/(protected)/admin/add-video/index.svelte';

    // COMPONENTS
    import * as Card from '@/shared/components/ui/card';
    import * as Select from '@/shared/components/ui/select';
    import Label from '@/shared/components/ui/label/label.svelte';
    import Input from '@/shared/components/ui/input/input.svelte';
    import Button from '@/shared/components/ui/button/button.svelte';
	import AddVideoButton from './add-video-button.svelte';

	// UTILS
	import { detectPlatform } from '@/shared/utils/videoEmbedUtils';

    const platforms = [
		{ value: 'tiktok', label: 'TikTok' },
		{ value: 'instagram', label: 'Instagram' },
		{ value: 'youtube', label: 'YouTube' },
		{ value: 'vimeo', label: 'Vimeo' },
		{ value: 'other', label: 'Other' }
	];

	const handleUrlInput = () => {
		if (addVideoPageClass.addVideoInputs.embedUrl) {
			const detected = detectPlatform(addVideoPageClass.addVideoInputs.embedUrl);
			addVideoPageClass.addVideoInputs.platform = detected;
		}
	};
</script>

<Card.Root>
    <Card.Header>
        <Card.Title>Video Details</Card.Title>
        <Card.Description>Enter the embed details from the social platform.</Card.Description>
    </Card.Header>

    <Card.Content class="space-y-6">
        <!-- Platform -->
        <div class="space-y-2">
            <Label for="platform">Platform</Label>
            <Select.Root type="single" bind:value={addVideoPageClass.addVideoInputs.platform}>
                <Select.Trigger id="platform">
                    {platforms.find((p) => p.value === addVideoPageClass.addVideoInputs.platform)?.label ?? 'Select platform'}
                </Select.Trigger>
                <Select.Content>
                    {#each platforms as platform}
                        <Select.Item value={platform.value} label={platform.label} />
                    {/each}
                </Select.Content>
            </Select.Root>
        </div>

        <!-- Embed URL -->
        <div class="space-y-2">
            <Label for="embedUrl">Embed URL <span class="text-destructive">*</span></Label>
            <Input 
                id="embedUrl" 
                bind:value={addVideoPageClass.addVideoInputs.embedUrl} 
                placeholder="https://www.youtube.com/watch?v=... or https://www.tiktok.com/@user/video/..." 
                required
				oninput={handleUrlInput}
            />
            <p class="text-xs text-muted-foreground">Paste any video URL - we'll auto-detect the platform and convert to embed format.</p>
        </div>

        <!-- Metadata -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
                <Label for="creatorName">Creator Name</Label>
                <Input id="creatorName" bind:value={addVideoPageClass.addVideoInputs.creatorName} placeholder="@username" />
            </div>
            <div class="space-y-2">
                <Label for="brandName">Brand Name</Label>
                <Input id="brandName" bind:value={addVideoPageClass.addVideoInputs.brandName} placeholder="Brand Name" />
            </div>
        </div>

        <!-- Thumbnail -->
        <div class="space-y-2">
            <Label for="thumbnailUrl">Thumbnail URL (Optional)</Label>
            <Input id="thumbnailUrl" bind:value={addVideoPageClass.addVideoInputs.thumbnailUrl} placeholder="https://..." />
            <p class="text-xs text-muted-foreground">Provide a custom cover image if needed.</p>
        </div>

    </Card.Content>

    <Card.Footer class="flex justify-end gap-4 border-t px-6 py-4">
        <Button variant="outline" href="/admin/dashboard" type="button">Cancel</Button>
        <AddVideoButton />
    </Card.Footer>
</Card.Root>