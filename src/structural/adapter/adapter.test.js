const assert = require('assert');
const expect = require('chai').expect;

const { AfricanLion, AsianLion, WildDog, WildDogAdapter, Hunter } = require('./index');

describe('Adapter', function () {

    it('should make hunter to hunt on an african lion', function () {
        const hunter = new Hunter();
        const africanLion = new AfricanLion();
        assert.equal(hunter.hunt(africanLion), 'african roar');
    });

    it('should make hunter to hunt on an asian lion', function () {
        const hunter = new Hunter();
        const asianLion = new AsianLion();
        assert.equal(hunter.hunt(asianLion), 'asian roar');
    });

    it('should throw exception', function () {
        const hunter = new Hunter();
        const wildDog = new WildDog();
        expect(hunter.hunt.bind(hunter, wildDog)).to.throw();
    });

    it('should make hunter to hunt on a wild dog', function () {
        const hunter = new Hunter();
        const wildDog = new WildDog();
        const wildDogAdapter = new WildDogAdapter(wildDog);
        assert.equal(hunter.hunt(wildDogAdapter), 'wild bark');
    });

});
