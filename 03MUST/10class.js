//definicja klasy
class User {
    constructor(name) {
        this.name = name;
    }

sayHello () {
    return `${this.name} powiedz czesc!`;
}
}
//wykorzystanie 
let user = new User ("Pawel");
console.log (user.sayHello ());

class Employee extends User {
    constructor (name, salary) {
        super (name);
        this.salary = salary;
    }

    raiseSalary () {
        this.salary += 1000;
        return this.salary;
    }
}

let employee = new Employee ("Jan", 1999);
console.log (employee);
employee.raiseSalary ();
console.log (employee);