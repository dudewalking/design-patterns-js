const assert = require('assert');
const { About, Careers, DarkTheme, LightTheme, AquaTheme } = require('./index');

describe('Bridge', function () {

    it('should make about page to use light theme ', function () {
        const lightTheme = new LightTheme();
        const about = new About(lightTheme);
        assert.equal(about.getContent(), 'About page in light');
    });

    it('should make careers page to use dark theme ', function () {
        const darkTheme = new DarkTheme();
        const careers = new Careers(darkTheme);
        assert.equal(careers.getContent(), 'Careers page in dark');
    });

    it('should make about page to use aqua theme ', function () {
        const aquaTheme = new AquaTheme();
        const about = new About(aquaTheme);
        assert.equal(about.getContent(), 'About page in aqua');
    });

});
