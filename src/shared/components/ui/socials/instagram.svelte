<script lang="ts">
    // CONFIG
	import { COMPANY_DATA } from '@/shared/constants';

    // LUCIDE ICONS
	import InstagramIcon from '@lucide/svelte/icons/instagram';

	interface Props {
		href?: string;
		class?: string;
	}

	let { href = COMPANY_DATA.INSTAGRAM_URL, class: className = '' }: Props = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-light-muted hover:border-primary hover:text-primary transition-all duration-200 {className}"
	aria-label="Instagram"
>
	<InstagramIcon class="w-[18px] h-[18px]" />
</a>
