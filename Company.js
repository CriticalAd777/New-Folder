"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(employees) {
        this.employees = employees;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    removeEmployee(idEmployee) {
        const employeeWithIdIndex = this.employees.findIndex(obj => obj.id === idEmployee);
        if (employeeWithIdIndex > -1) {
            this.employees.splice(employeeWithIdIndex, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getEmployee(idEmployee) {
        let foundEmployee = this.employees.find(obj => obj.id === idEmployee);
        if (foundEmployee != undefined) {
            return foundEmployee; // casting to Employee
        }
        else {
            throw `Employee with id of ${idEmployee} was not found`;
        }
    }
    getEmployeeBySalary(from, to) {
        let foundEmployees = this.employees.filter(obj => obj.basicSalary >= from && obj.basicSalary < to);
        return foundEmployees.sort((a, b) => (a.birthYear > b.birthYear ? -1 : 1));
    }
    computeBudget() {
        let overallSalary = 0;
        this.employees.forEach(function (emp) {
            overallSalary += emp.basicSalary;
        });
        return overallSalary;
    }
}
exports.Company = Company;
