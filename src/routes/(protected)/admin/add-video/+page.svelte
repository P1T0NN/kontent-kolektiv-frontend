<script lang="ts">
    // CONFIG
    import { COMPANY_DATA } from '@/shared/constants';

	// COMPONENTS
	import { Separator } from '@/shared/components/ui/separator';
	import AddVideoHeader from '@/shared/components/pages/(protected)/admin/add-video/add-video-header.svelte';
	import AddVideoForm from '@/shared/components/pages/(protected)/admin/add-video/add-video-form.svelte';
    import SidebarHeader from '@/shared/components/ui/app-sidebar/sidebar-header.svelte';
</script>

<svelte:head>
    <title>Add Video | {COMPANY_DATA.COMPANY_NAME}</title>
</svelte:head>

<SidebarHeader title="Add Video" />

<div class="flex flex-col gap-6 p-6 max-w-3xl mx-auto w-full">
	<AddVideoHeader />

	<Separator />

    <AddVideoForm />
</div>
