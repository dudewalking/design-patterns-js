/**
 * A factory of factories is a factory that groups the individual but related/dependent factories together without specifying their concrete classes.
 */

// Back to our Doors...

class WoodenDoor {
    getDescription() {
        return 'I am a wooden door';
    }
}

class IronDoor {
    getDescription() {
        return 'I am an iron door';
    }
}

// Then we have some fitting experts for each door type

class Welder {
    getDescription() {
        return 'I can only fit iron doors';
    }
}

class Carpenter {
    getDescription() {
        return 'I can only fit wooden doors';
    }
}

// Now we have our abstract factory that would let us make family of related objects 
// i.e. wooden door factory would create a wooden door and wooden door fitting expert 
// and iron door factory would create an iron door and iron door fitting expert

class WoodenDoorFactory {
    makeDoor() {
        return new WoodenDoor();
    }

    makeFittingExpert() {
        return new Carpenter();
    }
}

class IronDoorFactory {
    makeDoor() {
        return new IronDoor();
    }

    makeFittingExpert() {
        return new Welder();
    }
}

// And then it can be used as following

const woodenFactory = new WoodenDoorFactory()

const woodDoor = woodenFactory.makeDoor()
const woodExpert = woodenFactory.makeFittingExpert()

woodDoor.getDescription()  // Output: I am a wooden door
woodExpert.getDescription() // Output: I can only fit wooden doors

// Same for Iron Factory
const ironFactory = new IronDoorFactory()

const ironDoor = ironFactory.makeDoor()
const ironExpert = ironFactory.makeFittingExpert()

ironDoor.getDescription()  // Output: I am an iron door
ironExpert.getDescription() // Output: I can only fit iron doors

/**
 * When to use?
 * When there are interrelated dependencies with not-that-simple creation logic involved
 */

module.exports = { WoodenDoorFactory, IronDoorFactory }