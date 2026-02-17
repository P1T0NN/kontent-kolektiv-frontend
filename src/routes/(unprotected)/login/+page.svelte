<script lang="ts">
	// CONFIG
	import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// COMPONENTS
	import GoogleLoginButton from '@/shared/components/ui/google-login-button/google-login-button.svelte';
</script>

<svelte:head>
	<title>Admin Login — {COMPANY_DATA.COMPANY_NAME}</title>
</svelte:head>

<div class="min-h-svh bg-dark flex items-center justify-center px-4">
	<!-- Subtle background glow -->
	<div class="pointer-events-none fixed inset-0 overflow-hidden">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px]"></div>
	</div>

	<div class="relative w-full max-w-sm">
		<!-- Logo -->
		<div class="flex items-center justify-center gap-2.5 mb-10">
			<img src="/logo/kontent-kolektiv-logo.png" alt="{COMPANY_DATA.COMPANY_NAME} logo" class="w-9 h-9 rounded-xl" />
			<span class="text-lg font-bold text-white/90 tracking-tight">{COMPANY_DATA.COMPANY_NAME}</span>
		</div>

		<!-- Card -->
		<div class="rounded-2xl border border-dark-border bg-dark-surface/60 backdrop-blur-xl p-8 flex flex-col gap-6">
			<div class="text-center">
				<h1 class="text-xl font-bold text-light mb-1">Admin Access</h1>
				<p class="text-sm text-light-muted">Sign in with your authorized Google account</p>
			</div>

			<GoogleLoginButton class="w-full" />

			<p class="text-center text-xs text-light-dim">
				Access restricted to authorized accounts only.
			</p>
		</div>

		<!-- Back link -->
		<div class="mt-6 text-center">
			<a
				href={UNPROTECTED_PAGE_ENDPOINTS.ROOT}
				class="text-xs text-light-dim hover:text-light-muted transition-colors duration-150"
			>
				← Back to site
			</a>
		</div>
	</div>
</div>
