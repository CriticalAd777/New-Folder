import { Employee } from "./Employee";

export class Company {
    constructor (private employees:Employee[]){
        
    }

    addEmployee (employee:Employee):void{
        this.employees.push(employee);
    }

    removeEmployee(idEmployee:number):boolean{
        const employeeWithIdIndex = this.employees.findIndex(obj => obj.id === idEmployee);
         if(employeeWithIdIndex > -1){
            this.employees.splice(employeeWithIdIndex, 1);
            return true;
         } else{
            return false;
         }
    }

    getEmployee(idEmployee:number):Employee{
        let foundEmployee = this.employees.find(obj => obj.id === idEmployee);
        if(foundEmployee != undefined){
            return foundEmployee as Employee;   // casting to Employee
        } else{
            throw `Employee with id of ${idEmployee} was not found`;
        }     
    }

    getEmployeeBySalary(from:number, to:number):Employee[]{
        let foundEmployees = this.employees.filter(obj => obj.basicSalary >= from && obj.basicSalary < to);      
        return foundEmployees.sort((a, b) => (a.birthYear > b.birthYear ? -1 : 1));
    }

    computeBudget():number{
        let overallSalary = 0;
         this.employees.forEach(function(emp){
            overallSalary += emp.basicSalary;
         });
        return overallSalary;
    }
} 