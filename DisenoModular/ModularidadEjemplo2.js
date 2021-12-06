//modularidad ejemplo 2
//callback hell

var suma = 0;

function sumarnaturales() {

    setTimeout(function() {
        suma = 1 + 2;
        setTimeout(function() {
            suma = suma + 3;
            setTimeout(function() {
                suma = suma + 4;
                console.log("La suma de los primero 4 numeros naturales es " + suma)
            }, 1000);
        }, 1000);
    }, 1000);
}

sumarnaturales();

// agregamos nombres a la funciones anonimas 

var suma = 0;

function sumarnaturales() {

    setTimeout(function sumar() {
        suma = 1 + 2;
        setTimeout(function sumar() {
            suma = suma + 3;
            setTimeout(function sumar() {
                suma = suma + 4;
                console.log("La suma de los primero 4 numeros naturales es " + suma)
            }, 1000);
        }, 1000);
    }, 1000);
}

sumarnaturales();

// Aplicamos modularidad tomando lo que mas se repite del callback hell

var sumar = require('./moduloEjemplo2');

function sumarnaturales() {
    sumar(1, 2, (sum1) => {
        sumar(3, sum1, (sum2) => {
            sumar(4, sum2, (sum3) => {
                console.log("La suma de los primero 4 numeros naturales es " + sum3)
            });
        });
    });
}

sumarnaturales();