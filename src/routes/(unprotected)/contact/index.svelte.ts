class ContactPageClass {
    public isSuccess = $state(false);

    public pendingStates = $state({
        contactIsPending: false,
    });

    public contactFormInputs = $state({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: ''
    });

    public fieldErrors = $state<Record<string, string[]>>({});

    public clearFieldErrors() {
        this.fieldErrors = {};
    }

    public clearFieldError(field: string) {
        if (!(field in this.fieldErrors)) return;
        const next = { ...this.fieldErrors };
        delete next[field];
        this.fieldErrors = next;
    }

    public resetContactInputs() {
        this.contactFormInputs = {
            name: '',
            email: '',
            service: '',
            budget: '',
            message: ''
        };
        this.clearFieldErrors();
    }
}   

export const contactPageClass = new ContactPageClass();