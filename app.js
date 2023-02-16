const app = Vue.createApp({
    //data, function
    data() {
        return {
            title: "bof kour",
            author: "Hedayat",
            age: 45
        }
    },
    methods: {
        changeTitle(name) {
            this.title = name
        }
    }
});

app.mount("#app")