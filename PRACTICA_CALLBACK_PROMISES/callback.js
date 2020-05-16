//ejercicio de recuperar empleados con salario mediante call_backs
//arreglo de empleados
let employees = [{ id: 1, name: 'cristian',id_salary:1 },{id: 2,name: 'jose',id_salary:2},{id: 3, name: 'juan',id_salary:2}]


let salaries = [{id: 1, salary: '1000'}, {id: 2, salary: '2000'}]

let employe_salary = [];
//employe_salary.push({id:2,name:'asdasdas',salary:'12312'});
//console.log(employe_salary);


/*let colors=['hola','mundo'];
colors.push['hola1'];
console.log(colors);*/

let getEmployee = (id, callback) => {
    let employeeDB = employees.find(employees => employees.id === id);

    //employedDB === null
    if (!employeeDB) {
        callback('No existe el empleado con el id: ' + id);

    } else {
       
        let salaryDB = salaries.find(salaries => salaries.id === employeeDB.id_salary);
        employe_salary.push({id: employeeDB.id, name: employeeDB.name, salary: salaryDB.salary});
        callback(null, employe_salary);


    }
}

getEmployee(2, (err, employees) => {
    if (err) {
        return console.log(err);


    }
    console.log(employees);

});