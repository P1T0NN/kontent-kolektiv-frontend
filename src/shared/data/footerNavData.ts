import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';
import { m } from '@/shared/lib/paraglide/messages';

export const footerServicesLinks = [
	{ href: UNPROTECTED_PAGE_ENDPOINTS.SERVICES, label: m['Footer.Services.ugcProduction'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.SERVICES, label: m['Footer.Services.creativeStorytelling'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.WORK, label: m['Footer.Services.creatorNetwork'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.CONTACT, label: m['Footer.Services.brandPartnerships'] }
];

export const footerCompanyLinks = [
	{ href: UNPROTECTED_PAGE_ENDPOINTS.RESULTS, label: m['Footer.Company.caseStudies'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.CONTACT, label: m['Footer.Company.contact'] },
	{ href: UNPROTECTED_PAGE_ENDPOINTS.CONTACT, label: m['Footer.Company.becomeACreator'] }
];
