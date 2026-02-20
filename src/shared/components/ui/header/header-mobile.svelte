<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS, ADMIN_PAGE_ENDPOINTS } from '@/shared/constants';

    // CLASSES
    import { headerClass } from './header.svelte.ts';
    import { usersClass } from '@/features/users/classes/users-class.svelte';

    // LUCIDE ICONS
    import BuildingIcon from '@lucide/svelte/icons/building-2';
    import VideoIcon from '@lucide/svelte/icons/video';
    import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
</script>

<div class="fixed inset-0 z-999 flex flex-col bg-[#0a0810]/95 backdrop-blur-xl pt-24 px-6 pb-10">
    <!-- Nav links -->
    <div class="flex flex-col gap-1 mb-8">
        {#if usersClass.currentUser?.role === 'admin'}
            <a
                href={ADMIN_PAGE_ENDPOINTS.DASHBOARD}
                onclick={() => headerClass.mobileOpen = false}
                class="px-4 py-4 text-lg font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-150 border border-white/15"
            >
                Dashboard
            </a>
        {/if}
        
        {#each [
            { href: UNPROTECTED_PAGE_ENDPOINTS.SERVICES, label: 'Services' },
            { href: UNPROTECTED_PAGE_ENDPOINTS.WORK, label: 'Work' },
            { href: UNPROTECTED_PAGE_ENDPOINTS.RESULTS, label: 'Results' },
            { href: UNPROTECTED_PAGE_ENDPOINTS.FAQ, label: 'FAQ' },
        ] as link}
            <a
                href={link.href}
                onclick={() => headerClass.mobileOpen = false}
                class="px-4 py-4 text-lg font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 border-b border-white/4 last:border-none"
            >
                {link.label}
            </a>
        {/each}
    </div>

    <!-- Mobile CTAs at bottom -->
    <div class="flex flex-col gap-3 mt-auto">
        <a
            href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
            onclick={() => headerClass.mobileOpen = false}
            class="flex items-center gap-3 p-4 rounded-2xl bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] hover:border-[rgba(108,99,255,0.4)] transition-all duration-150 group"
        >
            <div class="w-9 h-9 rounded-xl bg-[rgba(108,99,255,0.2)] flex items-center justify-center">
                <BuildingIcon class="w-4 h-4 text-primary" />
            </div>
            <div>
                <p class="text-[0.9rem] font-semibold text-white/90">Hire Creators</p>
                <p class="text-[0.78rem] text-white/40">Connect with creators</p>
            </div>
            <ArrowRightIcon class="w-4 h-4 text-white/25 ml-auto group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
        </a>
        <a
            href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT}
            onclick={() => headerClass.mobileOpen = false}
            class="flex items-center gap-3 p-4 rounded-2xl bg-[rgba(233,69,144,0.08)] border border-[rgba(233,69,144,0.15)] hover:border-[rgba(233,69,144,0.35)] transition-all duration-150 group"
        >
            <div class="w-9 h-9 rounded-xl bg-[rgba(233,69,144,0.18)] flex items-center justify-center">
                <VideoIcon class="w-4 h-4 text-secondary" />
            </div>
            <div>
                <p class="text-[0.9rem] font-semibold text-white/90">Become a Creator</p>
                <p class="text-[0.78rem] text-white/40">Monetize your content</p>
            </div>
            <ArrowRightIcon class="w-4 h-4 text-white/25 ml-auto group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
        </a>
    </div>
</div>