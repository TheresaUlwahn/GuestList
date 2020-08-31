new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            eventDescription: "It’s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
        },
        newNameText: '',
        guestName: [],
        // to add a new classname every time our form is submitted, to change the background on the card and the button too
        // intitially this event is empty - nothing shall happened until the form is submitted
        formSubmitClass: "",
        // adding styles withing the vue instance as a data property
        appStyles: {
            marginTop: '25px'
        }
    },
    methods: {
        // adding the new names in a green box
        formSubmitted: function () {
            // if the new name is greater then zero, we push the  new name to the array
            if (this.newNameText.length > 0) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                // every time the form is submitted, the class formSubmitClass will be set as submitted
                this.formSubmitClass = "submitted"
            }
        }
    }
});