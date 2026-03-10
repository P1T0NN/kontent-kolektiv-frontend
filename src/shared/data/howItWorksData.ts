// LIBRARIES
import { m } from '@/shared/lib/paraglide/messages';

// LUCIDE ICONS
import ClipboardListIcon from '@lucide/svelte/icons/clipboard-list';
import TargetIcon from '@lucide/svelte/icons/target';
import VideoIcon from '@lucide/svelte/icons/video';
import RocketIcon from '@lucide/svelte/icons/rocket';

export const howItWorksData = [
    {
        number: '01',
        title: m['HomePage.HowItWorksSection.step1Title'],
        desc: m['HomePage.HowItWorksSection.step1Desc'],
        accent: '#E94590',
        icon: ClipboardListIcon
    },
    {
        number: '02',
        title: m['HomePage.HowItWorksSection.step2Title'],
        desc: m['HomePage.HowItWorksSection.step2Desc'],
        accent: '#9B6FFF',
        icon: TargetIcon
    },
    {
        number: '03',
        title: m['HomePage.HowItWorksSection.step3Title'],
        desc: m['HomePage.HowItWorksSection.step3Desc'],
        accent: '#6C63FF',
        icon: VideoIcon
    },
    {
        number: '04',
        title: m['HomePage.HowItWorksSection.step4Title'],
        desc: m['HomePage.HowItWorksSection.step4Desc'],
        accent: '#00D4FF',
        icon: RocketIcon
    }
];