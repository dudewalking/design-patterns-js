const assert = require('assert');
const { IronDoorFactory, WoodenDoorFactory } = require('./index');

describe('AbstractFactory', function () {

    it('should create a new wooden door', function () {
        const woodenFactory = new WoodenDoorFactory();
        const door = woodenFactory.makeDoor();
        assert.equal(door.getDescription(), 'I am a wooden door');
    });

    it('should create a new iron door', function () {
        const ironFactory = new IronDoorFactory();
        const door = ironFactory.makeDoor();
        assert.equal(door.getDescription(), 'I am an iron door');
    });

    it('should create a wooden expert', function () {
        const woodenFactory = new WoodenDoorFactory();
        const expert = woodenFactory.makeFittingExpert();
        assert.equal(expert.getDescription(), 'I can only fit wooden doors');
    });

    it('should create a new iron door', function () {
        const ironFactory = new IronDoorFactory();
        const expert = ironFactory.makeFittingExpert();
        assert.equal(expert.getDescription(), 'I can only fit iron doors');
    });

});

