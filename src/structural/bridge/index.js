/**
 * Bridge pattern is about preferring composition over inheritance.
 * Implementation details are pushed from a hierarchy to another object with a separate hierarchy.
 */

// Suppose we have a website... And we want to implement multiple themes option for each page

class About {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return 'About page in ' + this.theme.getColor();
    }
}

class Careers {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return 'Careers page in ' + this.theme.getColor();
    }
}

// And the separate theme hierarchy...

class DarkTheme {
    getColor() {
        return 'dark';
    }
}

class LightTheme {
    getColor() {
        return 'light';
    }
}

class AquaTheme {
    getColor() {
        return 'aqua';
    }
}

// And both the hierarchies

const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);


module.exports = {
    About, Careers, DarkTheme, LightTheme, AquaTheme
}