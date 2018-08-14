const assert = require('assert');
const { TeaMaker, TeaShop } = require('./index');

describe('Flyweight', function () {

    it('should have only three tables in the orders', function () {
        const teaMaker = new TeaMaker();
        const shop = new TeaShop(teaMaker);
        shop.takeOrder('less sugar', 1);
        shop.takeOrder('more sugar', 1);
        shop.takeOrder('less milk', 2);
        shop.takeOrder('more milk', 2);
        shop.takeOrder('without sugur', 3);
        shop.takeOrder('with sugur', 3);
        assert.equal(Object.keys(shop.orders).length, 3);
    });

});
