const assert = require('assert');
const { LabDoor, Security } = require('./index');

describe('Proxy', function () {

    it('should open a door', function () {
        const door = new Security(new LabDoor());
        door.open('ecr@t');
        assert.equal(door.isOpen, true);
    });

    it('should not open a door', function () {
        const door = new Security(new LabDoor());
        door.open('invalid');
        assert.equal(door.isOpen, false);
    });

});
