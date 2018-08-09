/**
 * Decorator pattern lets you dynamically change the behavior of an object at run time 
 * by wrapping them in an object of a decorator class.
 */

// Lets take coffee for example. First of all we have a simple coffee implementing the coffee interface


class SimpleCoffee {

    getCost() {
        return 10;
    }

    getDescription() {
        return 'Simple coffee';
    }
}


// Lets make some add-ons (decorators)

class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 2;
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk'
    }
}

class WhipCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 5;
    }

    getDescription() {
        return this.coffee.getDescription() + ', whip'
    }
}

class VanillaCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 3;
    }

    getDescription() {
        return this.coffee.getDescription() + ', vanilla'
    }
}

// Let's make some coffee now

let someCoffee;

someCoffee = new SimpleCoffee();
someCoffee.getCost(); // 10
someCoffee.getDescription(); // Simple coffee


someCoffee = new MilkCoffee(someCoffee);
someCoffee.getCost(); // 12
someCoffee.getDescription(); // Simple coffee, milk

someCoffee = new WhipCoffee(someCoffee);
someCoffee.getCost(); // 17
someCoffee.getDescription(); // Simple coffee, milk, whip

someCoffee = new VanillaCoffee(someCoffee);
someCoffee.getCost(); // 20
someCoffee.getDescription(); // Simple coffee, milk, whip, vanilla


module.exports = {
    SimpleCoffee, MilkCoffee, WhipCoffee, VanillaCoffee
}