function Employee ( name , position , salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.getSalary = function(){
    console.log(this.salary)
}

Employee.prototype.display = function(){
    const e = this;//way to make thiss available to run functiono
    function run(){
        console.log(e.name,e.salary,'run ') //here this is not available so we have to bind this
    }
    run()
}

const emp = new Employee('sabin','developer',25000);
console.log(Employee.prototype);
console.log(emp.__proto__) //when we use new emp inherits properties from Employe
console.log(emp)
emp.getSalary();
emp.display()