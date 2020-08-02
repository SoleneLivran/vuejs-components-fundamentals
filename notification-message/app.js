// declaration du composant
let NotificationMessageComponent = {
    // quand il est appele, le composant doit :
    // etre construit selon ce template :
    template: '#notification-message-template',
    // et on doit lui renseigner les props suivantes :
    props: {
        header: {
            type: String,
            default: 'Hello!'
        },
        type: {
            type: String,
            default: 'info'
        }
    },
    data () {
        return {
            isDisplayed: true
        }
    },
    methods: {
        close() {
            this.isDisplayed = false
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'notification-message': NotificationMessageComponent
    },
})
