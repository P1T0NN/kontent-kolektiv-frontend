class VideosPageClass {
    public dialogStates = $state({
        deleteVideoIsDialogOpen: false,
    });

    public pendingStates = $state({
        deleteVideoIsPending: false,
    });
}

export const videosPageClass = new VideosPageClass();