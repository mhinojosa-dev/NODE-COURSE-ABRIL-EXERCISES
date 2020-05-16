//Ejercicio de recuperar empleados con salario mediante promesas

//arreglo de empleados
let employees = [{ id: 1, name: 'cristian',id_salary:1 },{id: 2,name: 'jose',id_salary:2},{id: 3, name: 'juan',id_salary:2}]


let salaries = [{id: 1, salary: '1000'}, {id: 2, salary: '2000'}]

let employe_salary = [];

let getEmployee = (id) => {
    return new Promise((resolve, reject) =>{
        let employeeDB = employees.find(employees => employees.id === id);
        //employeeDB null
        if (!employeeDB) {
            reject("No existe el empleado con el id:"+id);
        } else {
            let salaryDB = salaries.find(salaries => salaries.id === employeeDB.id_salary);
            employe_salary.push({id: employeeDB.id, name: employeeDB.name, salary: salaryDB.salary});
          return resolve(employe_salary);
    
        }
    });
}

getEmployee(3)
.then((employees)=>{
    console.log(employees);
})
.catch(function(err){
    console.log(err);
})
