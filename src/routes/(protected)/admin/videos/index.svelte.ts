class VideosPageClass {
    public dialogStates = $state({
        deleteVideoIsDialogOpen: false,
    });

    public pendingStates = $state({
        deleteVideoIsPending: false,
        changeVideoOrderIsPending: false,
    });
}

export const videosPageClass = new VideosPageClass();