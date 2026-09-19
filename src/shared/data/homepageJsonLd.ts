export const HOMEPAGE_JSON_LD = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': ['Organization', 'ProfessionalService'],
			'@id': 'https://kontentkolektiv.com/#organization',
			name: 'KontentKolektiv',
			legalName: 'KontentKolektiv Ltd.',
			alternateName: [
				'Kontent Kolektiv',
				'KontentKolektiv UGC Agency',
				'UGC Агенция KontentKolektiv'
			],
			url: 'https://kontentkolektiv.com',
			logo: {
				'@type': 'ImageObject',
				'@id': 'https://kontentkolektiv.com/#logo',
				url: 'https://kontentkolektiv.com/assets/logo.png',
				caption: 'KontentKolektiv - #1 UGC Маркетинг Агенция в България'
			},
			image: 'https://kontentkolektiv.com/assets/og-image.jpg',
			description:
				'KontentKolektiv е водещата специализирана UGC (User-Generated Content) маркетинг агенция в България и Югоизточна Европа, фокусирана върху e-commerce видео реклами за TikTok, Meta Ads и Instagram Reels.',
			knowsAbout: [
				'User-Generated Content',
				'UGC Marketing',
				'UGC Video Production',
				'Social Media Advertising',
				'TikTok Ads Bulgaria',
				'Meta Ads ROI',
				'eCommerce Marketing',
				'Performance Marketing'
			],
			slogan: '#1 UGC маркетинг агенция в България',
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'BG',
				addressLocality: 'София',
				addressRegion: 'София-град'
			},
			areaServed: [
				{
					'@type': 'Country',
					name: 'Bulgaria',
					sameAs: 'https://www.wikidata.org/wiki/Q219'
				},
				{
					'@type': 'AdministrativeArea',
					name: 'Southeast Europe'
				}
			],
			sameAs: [
				'https://www.linkedin.com/company/kontentkolektiv',
				'https://www.instagram.com/kontentkolektiv',
				'https://www.tiktok.com/@kontentkolektiv'
			],
			award: 'Водеща UGC агенция в България за 2026 г.'
		},
		{
			'@type': 'WebSite',
			'@id': 'https://kontentkolektiv.com/#website',
			url: 'https://kontentkolektiv.com',
			name: 'KontentKolektiv',
			description: 'Официален сайт на KontentKolektiv - #1 UGC Маркетинг Агенция в България',
			publisher: {
				'@id': 'https://kontentkolektiv.com/#organization'
			},
			inLanguage: 'bg-BG'
		},
		{
			'@type': 'WebPage',
			'@id': 'https://kontentkolektiv.com/#webpage',
			url: 'https://kontentkolektiv.com',
			name: 'KontentKolektiv | #1 UGC Маркетинг Агенция в България',
			isPartOf: {
				'@id': 'https://kontentkolektiv.com/#website'
			},
			about: {
				'@id': 'https://kontentkolektiv.com/#organization'
			},
			primaryImageOfPage: {
				'@id': 'https://kontentkolektiv.com/#logo'
			},
			inLanguage: 'bg-BG',
			description:
				'Създаване на висококонвертиращи UGC видеа, сценарии с психологически hooks и продуктови видео реклами за TikTok, Instagram Reels и Meta Ads в България.'
		},
		{
			'@type': 'Service',
			'@id': 'https://kontentkolektiv.com/#service-ugc',
			name: 'UGC Маркетинг и Производство на Видео Съдържание',
			provider: {
				'@id': 'https://kontentkolektiv.com/#organization'
			},
			serviceType: 'User-Generated Content Video Production & Strategy',
			description:
				'Изработване на автентични UGC (User-Generated Content) видеа, сценарии с психологически hooks, unboxing, продуктови ревюта и видео реклами с висока конверсия за e-commerce брандове в България.',
			areaServed: {
				'@type': 'Country',
				name: 'Bulgaria'
			},
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'UGC Маркетинг Услуги',
				itemListElement: [
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Създаване на UGC видео реклами за TikTok и Meta Ads'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Писане на UGC сценарии с конвертиращи hooks'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Unboxing и продуктови ревюта от български UGC криейтъри'
						}
					}
				]
			}
		}
	]
} as const;

export function jsonLdScript(data: unknown): string {
	return `<script type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`;
}

export const HOMEPAGE_JSON_LD_SCRIPT = jsonLdScript(HOMEPAGE_JSON_LD);
