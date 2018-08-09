/**
 * Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
 */

//Consider a game where there is a hunter and he hunts lions.


//First we have an interface Lion that all types of lions have to implement

class AfricanLion {
    roar() {
        return 'african roar'
    }
}

class AsianLion {
    roar() {
        return 'asian roar'
    }
}

//And hunter expects any implementation of Lion interface to hunt.

class Hunter {
    hunt(lion) {
        // ... some code before
        return lion.roar()
        //... some code after
    }
}

// Now let's say we have to add a WildDog in our game so that hunter can hunt that also.
// Need adapter...

class WildDog {
    bark() {
        return 'wild bark'
    }
}

class WildDogAdapter {
    constructor(dog) {
        this.dog = dog;
    }

    roar() {
        return this.dog.bark();
    }
}

//And now the WildDog can be used in our game using WildDogAdapter.

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);


module.exports = {
    AfricanLion, AsianLion, WildDog, WildDogAdapter, Hunter
}