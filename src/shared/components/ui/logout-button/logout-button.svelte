<script lang="ts">
	// LIBRARIES
	import { useAuth } from '@mmailaender/convex-auth-svelte/sveltekit';

	// COMPONENTS
	import Button from '@/shared/components/ui/button/button.svelte';
	import * as DropdownMenu from '@/shared/components/ui/dropdown-menu/index.js';
	import Spinner from '@/shared/components/ui/spinner/spinner.svelte';

	// LUCIDE ICONS
	import LogOutIcon from '@lucide/svelte/icons/log-out';

	interface Props {
		isDropdown?: boolean;
	}

	let { isDropdown = false }: Props = $props();

	const auth = useAuth();
	const { signOut } = auth;

	let isLoggingOut = $state(false);

	const handleLogout = async () => {
		isLoggingOut = true;
		await signOut();
		isLoggingOut = false;
	};
</script>

{#if isDropdown}
	<DropdownMenu.Item onclick={handleLogout} disabled={isLoggingOut}>
		{#if isLoggingOut}
			<Spinner class="size-4" />
		{:else}
			<LogOutIcon />
		{/if}
		Logout
	</DropdownMenu.Item>
{:else}
	<Button
		variant="outline"
		onclick={handleLogout}
		disabled={isLoggingOut}
	>
		{#if isLoggingOut}
			<Spinner />
		{:else}
			<LogOutIcon class="h-5 w-5" />
		{/if}

		<span>Logout</span>
	</Button>
{/if}

