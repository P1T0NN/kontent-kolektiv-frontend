<script lang="ts">
	// SVELTEKIT IMPORTS
	import { page } from '$app/state';

	// CONFIG
	import { ADMIN_PAGE_ENDPOINTS } from '@/shared/constants';

	// COMPONENTS
	import * as Sidebar from '@/shared/components/ui/sidebar/index.js';

	// UTILS
	import { cn } from '@/shared/utils/utils.js';

	// TYPES
	import type { Component } from 'svelte';

	let { items }: { items: { title: string; url: string; icon?: Component }[] } = $props();

	const isActive = (url: string) => {
		// Exact match for dashboard, prefix match for other pages
		if (url.endsWith(ADMIN_PAGE_ENDPOINTS.DASHBOARD)) {
			return page.url.pathname === url;
		}
		return page.url.pathname === url || page.url.pathname.startsWith(url + '/');
	};
</script>

<Sidebar.Group>
	<Sidebar.GroupContent class="flex flex-col gap-2">
		<Sidebar.Menu>
			{#each items as item (item.title)}
				{@const active = isActive(item.url)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton tooltipContent={item.title}>
						{#snippet child({ props })}
							<a
								href={item.url}
								{...props}
								class={cn(
									props.class as string,
									active
										? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
										: '[&>svg]:text-primary'
								)}
							>
								{#if item.icon}
									<item.icon />
								{/if}
								<span>{item.title}</span>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.GroupContent>
</Sidebar.Group>
