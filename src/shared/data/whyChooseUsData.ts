// LIBRARIES
import { m } from '@/shared/lib/paraglide/messages';

// LUCIDE ICONS
import UsersIcon from '@lucide/svelte/icons/users';
import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
import ClockIcon from '@lucide/svelte/icons/clock';
import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';

export const whyChooseUsData = [
    {
        icon: UsersIcon,
        title: () => m['HomePage.WhyChooseUsSection.reason1Title'](),
        desc: () => m['HomePage.WhyChooseUsSection.reason1Desc'](),
        accent: '#E94590',
        tag: () => m['HomePage.WhyChooseUsSection.reason1Tag'](),
        stat: '500+',
        statLabel: () => m['HomePage.WhyChooseUsSection.reason1StatLabel']()
    },
    {
        icon: TrendingUpIcon,
        title: () => m['HomePage.WhyChooseUsSection.reason2Title'](),
        desc: () => m['HomePage.WhyChooseUsSection.reason2Desc'](),
        accent: '#6C63FF',
        tag: () => m['HomePage.WhyChooseUsSection.reason2Tag'](),
        stat: '3.2x',
        statLabel: () => m['HomePage.WhyChooseUsSection.reason2StatLabel']()
    },
    {
        icon: ClockIcon,
        title: () => m['HomePage.WhyChooseUsSection.reason3Title'](),
        desc: () => m['HomePage.WhyChooseUsSection.reason3Desc'](),
        accent: '#00D4FF',
        tag: () => m['HomePage.WhyChooseUsSection.reason3Tag'](),
        stat: '48h',
        statLabel: () => m['HomePage.WhyChooseUsSection.reason3StatLabel']()
    },
    {
        icon: ShieldCheckIcon,
        title: () => m['HomePage.WhyChooseUsSection.reason4Title'](),
        desc: () => m['HomePage.WhyChooseUsSection.reason4Desc'](),
        accent: '#F06AAB',
        tag: () => m['HomePage.WhyChooseUsSection.reason4Tag'](),
        stat: '100%',
        statLabel: () => m['HomePage.WhyChooseUsSection.reason4StatLabel']()
    }
];