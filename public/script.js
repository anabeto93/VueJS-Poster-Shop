
new Vue({
    el: "#app",
    data: {
        total: 0,
        products: [
            { title: 'Prod 1', id: 1, price: 0.5},
            { title: 'Prod 2', id: 2, price: 0.8},
            { title: 'Prod 3', id: 3, price: 1.2},
        ],
        cart: []
    },
    methods: {
        addToCart: function (product) {
            this.total += product.price;
            //this.cart.push(product)
            let found = false;

            for (let i = 0; i < this.cart.length; ++i) {
                if (this.cart[i].id === product.id) {
                    this.cart[i].qty++;
                    found = true;
                    break;
                }
            }

            if (!found) {
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1
                })
            }
        }
    },
    filters: {
        currency: function (price) {
            if (!price) return '';

            return "$".concat(price.toFixed(2));
        }
    }
});