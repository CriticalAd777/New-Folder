import { SalesePerson } from "./SalesePerson";
import { WageEmployee } from "./WageEmployee";
const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA",
 10000, 100,50);
 console.log(employee.id);

 const employee2: SalesePerson = new SalesePerson(123, "Vasya", 2000, "QA",
 10000, 100, 50, 11, 22);

 employee2.computeSalary();