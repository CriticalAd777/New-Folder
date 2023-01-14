import { WageEmployee } from "./WageEmployee";

export class SalesePerson extends WageEmployee{
    constructor(id: number, name: string, birthYear: number, department:string,
        basicSalary: number, wage: number, hours: number, private _salesValue:number, private _percentSales:number){
            super(id,name,birthYear,department,basicSalary,wage,hours);
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue:number){
        this._salesValue = salesValue;
    }
    get percentSales() {
        return this._percentSales;
    }
    set percentSales(percentSales:number){
        this._percentSales = percentSales;
    }

    computeSalary(): number {
        return super.computeSalary() + this._percentSales;
    }

}