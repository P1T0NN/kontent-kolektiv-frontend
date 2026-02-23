<script lang="ts">
	import { onMount } from 'svelte';
	import Skeleton from '@/shared/components/ui/skeleton/skeleton.svelte';

	interface Props {
		embedId: string;
		embedType?: string;
	}

	let { embedId, embedType = 'pp' }: Props = $props();

	let loaded = $state(false);

	onMount(() => {
		if (typeof window === 'undefined') return;

		const ltDiv = document.getElementById('lt');
		if (!ltDiv) return;

		(window as Window & { lt?: (id: string, type: string) => void }).lt = function (id: string, type: string) {
			if (ltDiv) {
				ltDiv.setAttribute('data-id', id);
				ltDiv.setAttribute('data-type', type);
			}
		};

		const observer = new MutationObserver(() => {
			if (ltDiv.children.length > 0 || ltDiv.innerText.trim().length > 50) {
				loaded = true;
				observer.disconnect();
			}
		});
		observer.observe(ltDiv, { childList: true, subtree: true, characterData: true });

		const script = document.createElement('script');
		script.src = 'https://legal-tech.bg/external/embeds.js';
		script.async = true;
		script.onload = () => {
			const lt = (window as Window & { lt?: (id: string, type: string) => void }).lt;
			if (typeof lt === 'function') lt(embedId, embedType);
		};
		script.onerror = () => {
			loaded = true;
			observer.disconnect();
		};
		document.body.appendChild(script);

		setTimeout(() => {
			loaded = true;
			observer.disconnect();
		}, 15000);

		return () => {
			script.remove();
			observer.disconnect();
		};
	});
</script>

<div class="relative min-h-[200px]">
	{#if !loaded}
		<div class="space-y-3 animate-pulse">
			<Skeleton class="h-4 w-full" />
			<Skeleton class="h-4 w-full" />
			<Skeleton class="h-4 w-11/12" />
			<Skeleton class="h-4 w-full" />
			<Skeleton class="h-4 w-3/4" />
			<div class="pt-4">
				<Skeleton class="h-4 w-full" />
				<Skeleton class="h-4 w-full" />
				<Skeleton class="h-4 w-11/12" />
			</div>
		</div>
	{/if}
	<div id="lt"></div>
</div>
