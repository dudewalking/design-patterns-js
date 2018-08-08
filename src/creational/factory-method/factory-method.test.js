const assert = require('assert');
const { DevelopmentManager, MarketingManager } = require('./index');

describe('FactoryMethod', function () {

    it('should create a new DeveloperManager to interview a developer ', function () {
        const devManager = new DevelopmentManager();
        assert.equal(devManager.takeInterview(), 'Asking about GoF design patterns');
    });

    it('should create a new MarketingManager to interview a community executive ', function () {
        const marketingManager = new MarketingManager();
        assert.equal(marketingManager.takeInterview(), 'Asking about community building');
    });

});