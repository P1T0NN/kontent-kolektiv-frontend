// LUCIDE ICONS
import VideoIcon from '@lucide/svelte/icons/video';
import SparklesIcon from '@lucide/svelte/icons/sparkles';
import ZapIcon from '@lucide/svelte/icons/zap';
import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
import BarChartIcon from '@lucide/svelte/icons/bar-chart-3';

export const servicesData = [
    {
        tag: 'UGC Production',
        title: 'Scroll-stopping content at scale',
        description: 'We connect your brand with authentic creators across Southeast Europe who produce native-feeling UGC videos that resonate with local audiences and drive conversions.',
        features: [
            { label: '200+ Creators', desc: 'Vetted talent across 12 countries', icon: VideoIcon },
            { label: 'Platform-Native', desc: 'Optimized for TikTok, Reels & Shorts', icon: SparklesIcon },
            { label: 'Fast Delivery', desc: 'From brief to final cut in days', icon: ZapIcon },
            { label: 'Full Rights', desc: 'Complete usage rights included', icon: ArrowRightIcon },
        ],
        accent: 'primary', // pink/rose
        gradient: 'from-primary to-secondary'
    },
    {
        tag: 'Performance Creative',
        title: 'The data engine behind your ads',
        description: 'Our performance-first approach means every piece of content is designed to convert. We analyze what works across markets, test variations, and scale winners.',
        features: [
            { label: 'A/B Testing', desc: 'Data-backed creative variations', icon: BarChartIcon },
            { label: 'Hook Optimization', desc: 'Maximize thumb-stop rate', icon: ZapIcon },
            { label: 'Ad-Ready', desc: 'Delivered in every format you need', icon: VideoIcon },
            { label: 'Analytics', desc: 'Performance insights per creative', icon: BarChartIcon },
        ],
        accent: 'secondary', // purple/indigo
        gradient: 'from-secondary to-accent'
    }
];