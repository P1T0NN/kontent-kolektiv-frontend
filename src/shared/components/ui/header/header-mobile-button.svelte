<script lang="ts">
    // CLASSES
    import { headerClass } from './header.svelte.ts';

    // LUCIDE ICONS
    import XIcon from '@lucide/svelte/icons/x';
    import MenuIcon from '@lucide/svelte/icons/menu';

    function toggleMobile() {
        headerClass.mobileOpen = !headerClass.mobileOpen;
    }
</script>

<button
    class="flex md:hidden p-1.5 rounded-xl hover:bg-white/[0.07] transition-colors duration-150 bg-transparent"
    onclick={toggleMobile}
    aria-label="Toggle menu"
>
    {#if headerClass.mobileOpen}
        <XIcon class="w-5 h-5 text-white/80" />
    {:else}
        <MenuIcon class="w-5 h-5 text-white/80" />
    {/if}
</button>