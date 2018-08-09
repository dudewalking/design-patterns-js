const assert = require('assert');
const { Designer, Developer, Organization } = require('./index');

describe('Composite', function () {

    it('should calculate all developer salaries ', function () {
        const developer1 = new Developer('Kyrie Irving', 5000);
        const developer2 = new Developer('Lebron James', 10000);

        const organization = new Organization();
        organization.addEmployee(developer1);
        organization.addEmployee(developer2);

        assert.equal(organization.getNetSalaries(), 15000);
    });

    it('should calculate all designer salaries ', function () {
        const designer1 = new Designer('Steph Curry', 4000);
        const designer2 = new Designer('Kevin Durant', 9000);

        const organization = new Organization();
        organization.addEmployee(designer1);
        organization.addEmployee(designer2);

        assert.equal(organization.getNetSalaries(), 13000);
    });

    it('should calculate all salaries ', function () {
        const developer = new Developer('Michael Jordan', 10000);
        const designer = new Designer('Magic Jonson', 10000);

        const organization = new Organization();
        organization.addEmployee(developer);
        organization.addEmployee(designer);

        assert.equal(organization.getNetSalaries(), 20000);
    });



});
