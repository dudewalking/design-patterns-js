/**
 * It provides a way to delegate the instantiation logic to child classes.
 */

// Suppose we have Interviewer interface

class Developer {
    askQuestion() {
        return 'Asking about GoF design patterns';
    }
}

class CommunityExecutive {
    askQuestion() {
        return 'Asking about community building';
    }
}

// And we have an Hiring manager

class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer()
        return interviewer.askQuestion()
    }
}

// Now any child can extend it and provide the required interviewer...

class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer();
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive();
    }
}

//... which can be used as following

const devManger = new DevelopmentManager();
devManger.takeInterview();

const marketingManger = new MarketingManager();
marketingManger.takeInterview();


/** 
 * When to use?
 * Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime.
 * Or putting it in other words, when the client doesn't know what exact sub-class it might need.
 */

module.exports = {
    DevelopmentManager, MarketingManager
};