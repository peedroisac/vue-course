const { createApp, ref } = Vue

createApp({
    setup() {
        const message = ref('Hello vue #!')
        return {
            message
        }
    }
}).mount('#myappp')

//patricio escreveu isso aqui
