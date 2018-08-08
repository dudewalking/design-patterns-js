/**
 * Allows you to create different flavors of an object while avoiding constructor pollution.
 * Useful when there could be several flavors of an object. 
 * Or when there are a lot of steps involved in creation of an object.
 */


// But before... telescoping constructor anti-pattern looks like

// constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
//     // ... 
// }

// Now let's create a burger!

class Burger {
    constructor(builder) {
        this.size = builder.size
        this.cheese = builder.cheese || false
        this.pepperoni = builder.pepperoni || false
        this.lettuce = builder.lettuce || false
        this.tomato = builder.tomato || false
    }
}

// And then we have the builder...

class BurgerBuilder {
    constructor(size = 1) {
        this.size = size;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addLettuce() {
        this.lettuce = true;
        return this;
    }

    addTomato() {
        this.tomato = true;
        return this;
    }

    build() {
        return new Burger(this)
    }
}

// And then it can be used as

const burger1 = (new BurgerBuilder(14))
    .addCheese()
    .addPepperoni()
    .addLettuce()
    .addLettuce();

// or a better way

const burger2 = new BurgerBuilder({
    size: 14,
    pepperoni: true,
    cheese: true,
    lettuce: true,
    tomato: true,
})

/**
 * When to use?
 * When there could be several flavors of an object and to avoid the constructor telescoping. 
 * The key difference from the factory pattern is that factory pattern is to be used when the creation is a one step process 
 * while builder pattern is to be used when the creation is a multi step process.
 */

module.exports = {
    BurgerBuilder
};