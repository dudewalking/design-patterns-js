const assert = require('assert');
const { SimpleCoffee, MilkCoffee, WhipCoffee, VanillaCoffee } = require('./index');

describe('Decorator', function () {

    let coffee;

    it('should make a simple coffee ', function () {
        coffee = new SimpleCoffee();
        assert.equal(coffee.getCost(), 10);
        assert.equal(coffee.getDescription(), 'Simple coffee');
    });

    it('should add milk to coffee', function () {
        coffee = new MilkCoffee(coffee);
        assert.equal(coffee.getCost(), 12);
        assert.equal(coffee.getDescription(), 'Simple coffee, milk');
    });

    it('should add whip to coffee', function () {
        coffee = new WhipCoffee(coffee);
        assert.equal(coffee.getCost(), 17);
        assert.equal(coffee.getDescription(), 'Simple coffee, milk, whip');
    });

    it('should add vanilla to coffee', function () {
        coffee = new VanillaCoffee(coffee);
        assert.equal(coffee.getCost(), 20);
        assert.equal(coffee.getDescription(), 'Simple coffee, milk, whip, vanilla');
    });


});
