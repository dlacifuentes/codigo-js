// Equipo N°2
//
// Ejemplo de callback Hell N°2 evitado con async/await

//función empleada para calcular el salario neto de un empleado según las deduciones obligatorias de ley
// y una deducción adicional del 10% por un ahorro en el fondo de empleados

//Datos de los empleados
const empleadosDB = [{
    id: 32,
    Nombre: 'Alexander',
    Apellido: 'Jimenez',
    Salario: '3500000',
    Cargo: 'Lider de Proyectos',
    Edad: 35
}, {
    id: 32,
    Nombre: 'Paula',
    Apellido: 'Gonzalez',
    Salario: '1800000',
    Cargo: 'Analista de Datos',
    Edad: 23
}, {
    id: 40,
    Nombre: 'Andres',
    Apellido: 'Cardona',
    Salario: '2500000',
    Cargo: 'Analista de Pruebas',
    Edad: 29
}, {
    id: 51,
    Nombre: 'Luz',
    Apellido: 'Ospina',
    Salario: '2000000',
    Cargo: 'Ingeniera de Datos',
    Edad: 23
}];

//Callback Hell
const getEmpleadoById = (id, callback) => {
    const empleado = empleadosDB.find(empleado => empleado.id === id);
    if (!empleado) {
        const error = new Error();
        error.message = "ID de empleado no encontrado en la base de datos";
        return callback(error) //error si no encuentra el resultado
    }
    callback(null, empleado)
}

const salarioNeto = (a, b, callback) => {
    setTimeout(() => {
        callback(a * b);
    }, 1000);
};

getEmpleadoById(40, (err, empleado) => {
    if (err) {
        return console.log(err.message)
    }

    salarioNeto(empleado.Salario, 0.96, (deduccion1) => { //deduccion del 4% para aporte a salud
        salarioNeto(0.96, deduccion1, (deduccion2) => { //deduccion del 4% para aporte a pension
            salarioNeto(0.90, deduccion2, (deduccion3) => { //deduccion del 10% para ahorro voluntario
                console.log(`Salario neto del empleado ${empleado.Nombre} ${empleado.Apellido}: `, deduccion3.toFixed(2));
            });
        });
    });

})


//evitar callback hell utilizando async/await
//Datos de los empleados
const empleadosDB = [{
    id: 32,
    Nombre: 'Alexander',
    Apellido: 'Jimenez',
    Salario: '3500000',
    Cargo: 'Lider de Proyectos',
    Edad: 35
}, {
    id: 32,
    Nombre: 'Paula',
    Apellido: 'Gonzalez',
    Salario: '1800000',
    Cargo: 'Analista de Datos',
    Edad: 23
}, {
    id: 40,
    Nombre: 'Andres',
    Apellido: 'Cardona',
    Salario: '2500000',
    Cargo: 'Analista de Pruebas',
    Edad: 29
}, {
    id: 51,
    Nombre: 'Luz',
    Apellido: 'Ospina',
    Salario: '2000000',
    Cargo: 'Ingeniera de Datos',
    Edad: 23
}];

const getEmpleadoById = async(id) => {
    const empleado = empleadosDB.find(empleado => empleado.id === id);
    if (!empleado) {
        const error = new Error();
        error.message = "ID de empleado no encontrado en la base de datos";
        throw error
    }
    return empleado;
}

//retorna una promesa para ser consumida posteriormente
const salarioNeto = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a * b);
        }, 1000);
    });
};

const calcularSalario = async() => {
    try {
        const empleado = await getEmpleadoById(40);
        const deduccion1 = await salarioNeto(empleado.Salario, 0.96); //deduccion del 4% para aporte a salud
        const deduccion2 = await salarioNeto(deduccion1, 0.96); //deduccion del 4% para aporte a pension
        const deduccion3 = await salarioNeto(deduccion2, 0.90); //deduccion del 10% para ahorro voluntario
        console.log(`Salario neto del empleado ${empleado.Nombre} ${empleado.Apellido}: `, deduccion3.toFixed(2));
    } catch (ex) {
        console.log(ex.message)
    }

}

calcularSalario();