<script lang="ts">
	// CLASSES
	import { usersClass } from '@/features/users/classes/users-class.svelte';

    // COMPONENTS
	import * as Avatar from '@/shared/components/ui/avatar/index.js';
	import * as DropdownMenu from '@/shared/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '@/shared/components/ui/sidebar/index.js';
	import LogoutButton from '../logout-button/logout-button.svelte';

	// LUCIDE ICONS
	import MoreVerticalIcon from '@lucide/svelte/icons/more-vertical';

	const sidebar = Sidebar.useSidebar();

	const currentUser = $derived(usersClass.currentUser);
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<Avatar.Root class="size-8 rounded-lg grayscale">
							<Avatar.Image src={currentUser?.image} alt={currentUser?.name} />
							<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root>

						<div class="grid flex-1 text-start text-sm leading-tight">
							<span class="truncate font-medium">{currentUser?.name}</span>
							<span class="truncate text-xs text-muted-foreground">
								{currentUser?.email}
							</span>
						</div>

						<MoreVerticalIcon class="ms-auto size-4" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>

			<DropdownMenu.Content
				class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
				side={sidebar.isMobile ? 'bottom' : 'right'}
				align="end"
				sideOffset={4}
			>
				<DropdownMenu.Label class="p-0 font-normal">
					<div class="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
						<Avatar.Root class="size-8 rounded-lg">
							<Avatar.Image src={currentUser?.image} alt={currentUser?.name} />
							<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root>

						<div class="grid flex-1 text-start text-sm leading-tight">
							<span class="truncate font-medium">{currentUser?.name}</span>
							<span class="truncate text-xs text-muted-foreground">
								{currentUser?.email}
							</span>
						</div>
					</div>
				</DropdownMenu.Label>

				<DropdownMenu.Separator />

				<DropdownMenu.Separator />

				<LogoutButton isDropdown />
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
