<script lang="ts">
	// COMPONENTS
	import Separator from '../separator/separator.svelte';
	import * as Sidebar from '../sidebar/index.js';

	let { title = 'Admin', children }: { title?: string; children?: import('svelte').Snippet } = $props();
</script>

<header
	class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
>
	<div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
		<Sidebar.Trigger class="-ms-1 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" />
		<Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
		<h1 class="text-base font-medium">{title}</h1>
		{#if children}
			<div class="ms-auto flex items-center gap-2">
				{@render children()}
			</div>
		{/if}
	</div>
</header>
