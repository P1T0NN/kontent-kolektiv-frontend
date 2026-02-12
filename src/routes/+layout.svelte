<script lang="ts">
	import './layout.css';
	import favicon from '@/shared/lib/assets/favicon.svg';

	// LIBRARIES
	import { setupConvexAuth, useAuth } from '@mmailaender/convex-auth-svelte/sveltekit';
	import { useQuery } from 'convex-svelte';
	import { api } from '@/convex/_generated/api';

	// CLASSES
	import { usersClass } from '@/features/users/classes/users-class.svelte';

	// COMPONENTS
	import { Toaster } from '@/shared/components/ui/sonner';
	import Header from '@/shared/components/ui/header/header.svelte';
	import Footer from '@/shared/components/ui/footer/footer.svelte';

	let { children, data } = $props();

	setupConvexAuth({ getServerState: () => data.authState });

	// Call useAuth once at layout init
	const auth = useAuth();
	const isAuthenticated = $derived(auth.isAuthenticated);

	// Only query user data when authenticated (prevents unnecessary auth token refreshes)
	const currentUserQuery = useQuery(
		api.tables.users.usersQueries.getCurrentUser,
		() => (isAuthenticated ? {} : 'skip')
	);
	$effect(() => {
		usersClass.setUser(currentUserQuery.data);
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children()}
<Footer />
<Toaster richColors />