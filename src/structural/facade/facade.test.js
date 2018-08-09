const assert = require('assert');
const { Computer, ComputerFacade } = require('./index');

describe('Facade', function () {

    it('should turn on a computer ', function () {
        const computer = new ComputerFacade(new Computer());
        assert.equal(computer.turnOn(), 'Ouch! beep beep Loading... Ready to be used!');
    });

    it('should turn off a computer ', function () {
        const computer = new ComputerFacade(new Computer());
        assert.equal(computer.turnOff(), 'bup bup bup Hah! zzzz');
    });

});
