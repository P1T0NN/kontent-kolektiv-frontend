// DATA
import { testimonialsData } from '@/shared/data/testimonialsData';

class RootPageClass {
    public pageStates = $state({
        resultsActiveIndex: 0,
        faqOpenIndex: null as number | null,
    })

    public nextResultsIndex() {
        this.pageStates.resultsActiveIndex = (this.pageStates.resultsActiveIndex + 1) % testimonialsData.length;
    }

    public prevResultsIndex() {
        this.pageStates.resultsActiveIndex = (this.pageStates.resultsActiveIndex - 1 + testimonialsData.length) % testimonialsData.length;
    }

    public toggleFaqIndex(index: number) {
        this.pageStates.faqOpenIndex = this.pageStates.faqOpenIndex === index ? null : index;
    }

    public cleanup() {
        this.pageStates.resultsActiveIndex = 0;
        this.pageStates.faqOpenIndex = null;
    }
}

export const rootPageClass = new RootPageClass();