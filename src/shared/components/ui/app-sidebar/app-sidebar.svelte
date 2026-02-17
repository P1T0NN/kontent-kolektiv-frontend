<script lang="ts">
	// SVELTEKIT IMPORTS
	import { page } from '$app/state';

	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// COMPONENTS
	import NavMain from './nav-main.svelte';
	import NavUser from './nav-user.svelte';
	import * as Sidebar from '@/shared/components/ui/sidebar/index.js';

	// DATA
	import { getAdminNavigations } from './navigationLinks';

	// TYPES
	import type { ComponentProps } from 'svelte';

	// LUCIDE ICONS
	import HomeIcon from '@lucide/svelte/icons/home';

	const isAdminPage = $derived(page.url.pathname.startsWith('/admin'));

	const navigations = $derived(isAdminPage ? getAdminNavigations() : []);

	let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:p-1.5!">
					{#snippet child({ props })}
						<a href={UNPROTECTED_PAGE_ENDPOINTS.ROOT} {...props}>
							<span class="text-base font-semibold">{COMPANY_DATA.COMPANY_NAME}</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>

	<Sidebar.Content>
		<NavMain
			items={navigations}
		/>
	</Sidebar.Content>

	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>
					{#snippet child({ props })}
						<a href={UNPROTECTED_PAGE_ENDPOINTS.ROOT} {...props} class="{props.class} [&>svg]:text-primary">
							<HomeIcon />
							<span>Go to Home Page</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
		<NavUser />
	</Sidebar.Footer>
</Sidebar.Root>
