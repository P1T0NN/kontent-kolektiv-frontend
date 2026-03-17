import VideoIcon from '@lucide/svelte/icons/video';
import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
import ZapIcon from '@lucide/svelte/icons/zap';
import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
import PenToolIcon from '@lucide/svelte/icons/pen-tool';
import RefreshCwIcon from '@lucide/svelte/icons/refresh-cw';

export const servicesData = [
	{
		tag: 'UGC Production',
		title: 'Authentic content at scale',
		description:
			'We connect your brand with verified creators across Bulgaria and the Balkans who produce UGC videos that feel real and relatable.',
		features: [
			{ label: '200+ Creators', desc: 'Trusted talent in 8 countries', icon: VideoIcon },
			{ label: 'Platform-Native', desc: 'TikTok, Instagram Reels, YouTube Shorts', icon: LayoutGridIcon },
			{ label: 'Fast Delivery', desc: 'From brief to final cut in 7 days', icon: ZapIcon },
			{ label: 'Full Rights', desc: 'Complete usage rights included', icon: ArrowRightIcon }
		],
		accent: 'primary',
		gradient: 'from-primary to-secondary'
	},
	{
		tag: 'Creative Storytelling',
		title: 'The human voice behind your content',
		description:
			'Every video tells a real story. From unboxings to tutorials and testimonials, our creators craft content that audiences engage with, not skip.',
		features: [
			{ label: 'Multiple Formats', desc: 'Short-form, stories, Reels', icon: VideoIcon },
			{ label: 'Tailored Scripts', desc: 'Aligned with your brand tone', icon: PenToolIcon },
			{ label: 'Ad-Ready', desc: 'Delivered ready for social', icon: ZapIcon },
			{ label: 'Minor Feedback Loops', desc: '1–2 iterations for alignment', icon: RefreshCwIcon }
		],
		accent: 'secondary',
		gradient: 'from-secondary to-accent'
	}
];
