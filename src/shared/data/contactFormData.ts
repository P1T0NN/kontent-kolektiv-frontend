import { m } from '@/shared/lib/paraglide/messages';

export const contactServices = [
	{ value: 'UGC Production' as const, label: m['ContactPage.Form.service1'] },
	{ value: 'Performance Creative' as const, label: m['ContactPage.Form.service2'] },
	{ value: 'Creator Partnership' as const, label: m['ContactPage.Form.service3'] },
	{ value: 'Full Campaign Management' as const, label: m['ContactPage.Form.service4'] },
	{ value: 'Other' as const, label: m['ContactPage.Form.service5'] }
];

export const contactBudgets = [
	{ value: 'Under €1k' as const, label: m['ContactPage.Form.budget1'] },
	{ value: '€1k - €5k' as const, label: m['ContactPage.Form.budget2'] },
	{ value: '€5k - €10k' as const, label: m['ContactPage.Form.budget3'] },
	{ value: '€10k+' as const, label: m['ContactPage.Form.budget4'] },
	{ value: 'Not sure yet' as const, label: m['ContactPage.Form.budget5'] }
];
