"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesePerson = void 0;
const WageEmployee_1 = require("./WageEmployee");
class SalesePerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _salesValue, _percentSales) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._salesValue = _salesValue;
        this._percentSales = _percentSales;
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue) {
        this._salesValue = salesValue;
    }
    get percentSales() {
        return this._percentSales;
    }
    set percentSales(percentSales) {
        this._percentSales = percentSales;
    }
    computeSalary() {
        return super.computeSalary() + this._percentSales;
    }
}
exports.SalesePerson = SalesePerson;
