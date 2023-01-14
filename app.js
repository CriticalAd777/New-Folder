"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalesePerson_1 = require("./SalesePerson");
const WageEmployee_1 = require("./WageEmployee");
const employee = new WageEmployee_1.WageEmployee(123, "Vasya", 2000, "QA", 10000, 100, 50);
console.log(employee.id);
const employee2 = new SalesePerson_1.SalesePerson(123, "Vasya", 2000, "QA", 10000, 100, 50, 11, 22);
employee2.computeSalary();
