/**
 * Ensures that only one object of a particular class is ever created.
 * 
 * But here is a tip...
 * Singleton pattern is actually considered an anti-pattern and overuse of it should be avoided. 
 * It is not necessarily bad and could have some valid use-cases but should be used with caution
 * because it introduces a global state in your application and change to it in one place
 * could affect in the other areas and it could become pretty difficult to debug.
 * The other bad thing about them is it makes your code tightly coupled plus it mocking the singleton could be difficult.
 */

// In js it could be implemented via module pattern

// const president = (function () {
//     const presidentsPrivateInformation = 'Super private... Area 51';
//     const name = 'LeBron James';

//     const getName = () => name;

//     return {
//         getName
//     }
// }())

// or...

class President {
    constructor(name) {
        if (typeof President.instance === 'object') {
            return President.instance;
        }
        this.name = name;
        President.instance = this;
        return this;
    }

    getName() {
        return this.name;
    }
}

// ... and use it as

// let president1 = new President('LeBron James');
// let president2 = new President('LeBron James Jr');
// console.log(president1); // should be 'LeBron James'
// console.log(president2); // still should be 'LeBron James'


module.exports = {
    President
};