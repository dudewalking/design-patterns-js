const assert = require('assert');
const { President } = require('./index');

describe('Singleton', function () {

    it('should create a president ', function () {
        let president = new President('Derrick Rose');
        assert.equal(president.getName(), 'Derrick Rose');
    });

    it('should not create another president ', function () {
        let president = new President('Kevin Durant');
        assert.equal(president.getName(), 'Derrick Rose');
    });

});