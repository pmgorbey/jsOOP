class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}

class Name{
    constructor(name) {
        this.name = name;
    }
}

class Departament{
    constructor(departament) {
        this.departament = departament;
    }
    
}


let name = new Name('pet');
let employee = new Employee(name, 'right', 'it');

console.log(employee.name);
console.log(employee.position);
console.log(employee.department);

