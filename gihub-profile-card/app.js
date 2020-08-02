let GithubUserCardComponent = {
    template: '#github-user-card-template',
    props: {
        username: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            user: {}
        }
    },
    created() {
        axios.get(`https://api.github.com/users/${this.username}`)
            .then((response) => {
                this.user = response.data
            })
    }
}

new Vue({
    el: '#app',
    components: {
        'github-user-card': GithubUserCardComponent
    },
    data: {
        usernames: ['matts2cant', 'SoleneLivran', 'hootlex', 'rahaug', 'sdras', 'akryum']
    }
})