const assert = require('assert');
const DoorFactory = require('./index');

describe('SimpleFactory', function () {

    it('should create a new door with weight=150 and height=200', function () {
        const newDoor = DoorFactory.makeDoor(150, 200);
        assert.equal(newDoor.getWeight(), 150);
        assert.equal(newDoor.getHeight(), 200);
    });
});