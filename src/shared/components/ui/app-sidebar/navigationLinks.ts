// CONFIG
import { ADMIN_PAGE_ENDPOINTS } from '@/shared/constants';

// TYPES
import type { Component } from 'svelte';

// LUCIDE ICONS
import DashboardIcon from '@lucide/svelte/icons/layout-dashboard';
import VideoIcon from '@lucide/svelte/icons/video';
import PlusIcon from '@lucide/svelte/icons/plus';

export interface NavigationItem {
	title: string;
	url: string;
	icon?: Component;
}

export const getAdminNavigations = (): NavigationItem[] => [
	{
		title: "Dashboard",
		url: ADMIN_PAGE_ENDPOINTS.DASHBOARD,
		icon: DashboardIcon
	},
	{
		title: "Videos",
		url: ADMIN_PAGE_ENDPOINTS.VIDEOS,
		icon: VideoIcon
	},
	{
		title: "Add Video",
		url: ADMIN_PAGE_ENDPOINTS.ADD_VIDEO,
		icon: PlusIcon
	}
];

/*export const getUserNavigations = (m: typeof mType): NavigationItem[] => [
	{
		title: m['AppSidebar.NavigationLinks.dashboard'](),
		url: PROTECTED_PAGE_ENDPOINTS.DASHBOARD,
		icon: DashboardIcon
	},
	{
		title: m['AppSidebar.NavigationLinks.myApartments'](),
		url: PROTECTED_PAGE_ENDPOINTS.MY_APARTMENTS,
		icon: BuildingIcon
	},
	{
		title: m['AppSidebar.NavigationLinks.bookings'](),
		url: PROTECTED_PAGE_ENDPOINTS.MY_BOOKINGS,
		icon: CalendarIcon
	}
];*/
