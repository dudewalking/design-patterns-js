/**
 * Using the proxy pattern, a class represents the functionality of another class.
 */

// Assume we have doors...

class LabDoor {
    open() {
        console.log('Opening a lab door');
    }

    close() {
        console.log('Closing a lab door');
    }
}

// Then we have a proxy to secure any doors that we want

class Security {
    constructor(door) {
        this.door = door;
        this.isOpen = false;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
            this.isOpen = true;
        } else {
            return 'Nope! You shall not pass!';
        }
    }

    close() {
        this.door.close();
        this.isOpen = false;
    }

    authenticate(password) {
        return password === 'ecr@t';
    }
}

// And here is how it can be used

const door = new Security(new LabDoor());
door.open('invalid');
door.open('ecr@t');
door.close();

module.exports = {
    Security, LabDoor
}