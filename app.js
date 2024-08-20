const { createApp, ref } = Vue

createApp({
    setup() {
        const message = ref('Hello vue #!')
        return {
            message
        }
    }
}).mount('#myapp')

//teste de teste
