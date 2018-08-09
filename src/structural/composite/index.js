/**
 * Composite pattern lets clients to treat the individual objects in a uniform manner.
 */

// Suppose we have a company with a lot of employees..

class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getRoles() {
        return this.roles;
    }

    develop() {
        // some code
    }
}

class Designer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getRoles() {
        return this.roles;
    }

    design() {
        // some code
    }
}

// And the organization as well

class Organization {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getNetSalaries() {
        let netSalary = 0;

        this.employees.forEach(employee => {
            netSalary += employee.getSalary();
        })

        return netSalary;
    }
}

// And then it can be used as...

const developer = new Developer('Lebron James', 12000);
const designer = new Designer('Derrick Rose', 10000);

const organization = new Organization();
organization.addEmployee(developer);
organization.addEmployee(designer);

organization.getNetSalaries() // 22000


module.exports = {
    Organization, Developer, Designer
}