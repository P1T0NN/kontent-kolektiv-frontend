import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';
import { m } from '@/shared/lib/paraglide/messages';

export const headerNavLinks = [
	{ href: UNPROTECTED_PAGE_ENDPOINTS.SERVICES, label: m['Header.services'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.WORK, label: m['Header.work'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.RESULTS, label: m['Header.results'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.FAQ, label: m['Header.faq'] }
];
