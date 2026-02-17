class AddVideoPageClass {
    public errorStates = $state({
        addVideoErrors: {} as Record<string, string[]>,
    });

    public pendingStates = $state({
        addVideoIsPending: false,
    });

    public addVideoInputs = $state({
        platform: 'tiktok' as 'youtube' | 'tiktok' | 'instagram' | 'vimeo' | 'other',
        embedUrl: '',
        thumbnailUrl: '',
        creatorName: '',
        brandName: ''
    });

    public resetAddVideoFields = () => {
        this.errorStates = {
            addVideoErrors: {}
        };
        this.addVideoInputs = {
            platform: 'tiktok' as 'youtube' | 'tiktok' | 'instagram' | 'vimeo' | 'other',
            embedUrl: '',
            thumbnailUrl: '',
            creatorName: '',
            brandName: ''
        };
    };
}

export const addVideoPageClass = new AddVideoPageClass();