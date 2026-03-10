import { m } from '@/shared/lib/paraglide/messages';

export const testimonialsData = [
	{
		quote: m['HomePage.ResultsSection.testimonial1Quote'],
		name: 'Emiliya Angelova',
		role: 'Regional Digital Marketing',
		company: 'NAOS',
		stats: [
			{ value: '75', label: m['HomePage.ResultsSection.testimonial1Stat1'] },
			{ value: '5', label: m['HomePage.ResultsSection.testimonial1Stat2'] },
			{ value: 'High', label: m['HomePage.ResultsSection.testimonial1Stat3'] }
		]
	},
	{
		quote: m['HomePage.ResultsSection.testimonial2Quote'],
		name: 'Vladislav Ganchev',
		role: 'Senior Brand Manager',
		company: 'Pernod Ricard',
		stats: [
			{ value: '13×', label: m['HomePage.ResultsSection.testimonial2Stat1'] },
			{ value: '€0.001', label: m['HomePage.ResultsSection.testimonial2Stat2'] },
			{ value: '9', label: m['HomePage.ResultsSection.testimonial2Stat3'] }
		]
	},
	{
		quote: m['HomePage.ResultsSection.testimonial3Quote'],
		name: 'Vladimir Chilingirov',
		role: 'Junior Brand Manager',
		company: 'FICOSOTA',
		stats: [
			{ value: '22', label: m['HomePage.ResultsSection.testimonial3Stat1'] },
			{ value: 'On time', label: m['HomePage.ResultsSection.testimonial3Stat2'] },
			{ value: 'Reusable', label: m['HomePage.ResultsSection.testimonial3Stat3'] }
		]
	}
];
