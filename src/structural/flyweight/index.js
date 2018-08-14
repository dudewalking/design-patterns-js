/**
 * It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.
 */

// let's have tea types and tea maker

// Anything that will be cached is flyweight. 
// Types of tea here will be flyweights.
class KarakTea {
}

// Acts as a factory and saves the tea
class TeaMaker {
    constructor() {
        this.availableTea = {}
    }

    make(preference) {
        this.availableTea[preference] = this.availableTea[preference] || (new KarakTea())
        return this.availableTea[preference]
    }
}

// Then we have the TeaShop which takes orders and serves them

class TeaShop {
    constructor(teaMaker) {
        this.teaMaker = teaMaker;
        this.orders = {};
    }

    takeOrder(teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType);
    }

    serve() {
        for (const key in this.orders) {
            if (this.orders.hasOwnProperty(key)) {
                console.log('Serving tea to table#' + key);
            }
        }
    }
}

// And it can be used as below

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('less sugar', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugur', 5);

// shop.serve();


module.exports = {
    TeaMaker, TeaShop
}