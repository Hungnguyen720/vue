var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        image: "./assets/vmSocks-green.jpg",
        inventory: 1,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        cart:0
    }
})