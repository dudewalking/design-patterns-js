/**
 * Facade pattern provides a simplified interface to a complex subsystem.
 */

// Lets take computer...

class Computer {
    getElectricShock() {
        return 'Ouch!';
    }

    makeSound() {
        return 'beep beep';
    }

    showLoadingScreen() {
        return 'Loading...'
    }

    bam() {
        return 'Ready to be used!'
    }

    closeEverything() {
        return 'bup bup bup'
    }

    snooze() {
        return 'zzzz'
    }

    pullCurrent() {
        return 'Hah!'
    }
}

// Here we have a facade

class ComputerFacade {
    constructor(computer) {
        this.computer = computer;
    }

    turnOn() {
        let states = [];
        states.push(this.computer.getElectricShock());
        states.push(this.computer.makeSound());
        states.push(this.computer.showLoadingScreen());
        states.push(this.computer.bam());
        return states.join(' ');
    }

    turnOff() {
        let states = [];
        states.push(this.computer.closeEverything());
        states.push(this.computer.pullCurrent());
        states.push(this.computer.snooze());
        return states.join(' ');
    }
}

// Now we can use the facade 

const computer = new ComputerFacade(new Computer())

computer.turnOn();
computer.turnOff();


module.exports = {
    Computer, ComputerFacade
}