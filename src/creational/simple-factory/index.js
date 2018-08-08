/**
 * Simple factory simply generates an instance for client without exposing any instantiation logic to the client
 */

// We have Door class
class WoodenDoor {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWeight() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

// Let's make 'Factory' which creates a new door on-demand...
const DoorFactory = {
    makeDoor: (width, height) => new WoodenDoor(width, height)
}

//... which can be used as following

// const door = DoorFactory.makeDoor(10, 10);
// console.log('Width: ' + door.getWeight());
// console.log('Height: ' + door.getHeight());


/**
 * When to use?
 * When creating an object is not just a few assignments and involves some logic, 
 * it makes sense to put it in a dedicated factory instead of repeating the same code everywhere.
 */

module.exports = DoorFactory;