const assert = require('assert');
const { BurgerBuilder } = require('./index');

describe('Builder', function () {

    it('should create a burger only with cheese ', function () {
        const burger = (new BurgerBuilder()).addCheese();
        assert.equal(burger.size, 1);
        assert.equal(burger.cheese, true);
    });

    it('should create a burger with cheese and tomato ', function () {
        const burger = new BurgerBuilder().addCheese().addTomato();
        assert.equal(burger.size, 1);
        assert.equal(burger.cheese, true);
        assert.equal(burger.tomato, true);
    });

    it('should create a burger with all ingredients ', function () {
        const burger = new BurgerBuilder(15).addCheese().addTomato().addLettuce().addPepperoni();
        assert.equal(burger.size, 15);
        assert.equal(burger.cheese, true);
        assert.equal(burger.tomato, true);
        assert.equal(burger.lettuce, true);
        assert.equal(burger.pepperoni, true);
    });


});