<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref, getLocale } from '@/shared/lib/paraglide/runtime';
	import { m } from '@/shared/lib/paraglide/messages';
	import * as Select from '@/shared/components/ui/select';
	import { cn } from '@/shared/utils/utils';
	import GlobeIcon from '@lucide/svelte/icons/globe';

	interface Props {
		variant?: 'default' | 'header';
		inOverlay?: boolean;
	}

	let { variant = 'default', inOverlay = false }: Props = $props();

	const currentLocale = $derived(getLocale());

	const localeLabels = $derived({
		en: m['Header.LanguageSelector.english'](),
		bg: m['Header.LanguageSelector.bulgarian']()
	});

	function handleLocaleChange(value: string | undefined) {
		if (!value || value === currentLocale) return;
		window.location.href = localizeHref(page.url.pathname, { locale: value });
	}
</script>

<Select.Root
	type="single"
	value={currentLocale}
	onValueChange={(value) => handleLocaleChange(value)}
>
	<Select.Trigger
		class={cn(
			'size-9 min-w-28 gap-1.5',
			variant === 'header'
				? 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20 [&_svg]:text-white/60'
				: 'border-input text-foreground'
		)}
		aria-label={m['Header.LanguageSelector.ariaLabel']()}
	>
		<GlobeIcon class="size-4 shrink-0 opacity-70" />
		<span class="whitespace-nowrap">{localeLabels[currentLocale] ?? currentLocale.toUpperCase()}</span>
	</Select.Trigger>
	<Select.Content
		class={cn(
			variant === 'header'
				? 'border-white/10 bg-[rgba(10,8,16,0.95)] backdrop-blur-xl text-white **:data-[slot=select-item]:text-white/90 **:data-[slot=select-item]:data-highlighted:bg-white/10'
				: '',
			inOverlay && 'z-1000'
		)}
		side="bottom"
		align="end"
	>
		{#each locales as locale}
			<Select.Item value={locale} label={localeLabels[locale] ?? locale.toUpperCase()} />
		{/each}
	</Select.Content>
</Select.Root>
