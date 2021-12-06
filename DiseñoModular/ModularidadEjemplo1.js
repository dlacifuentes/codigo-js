// callback hell ejemplo 1
const lugaresVisitados = []

function irDePaseo() {

    setTimeout(function() {
        lugaresVisitados.push('Bogota');

        setTimeout(function() {
            lugaresVisitados.push('Medellin');

            setTimeout(function() {
                lugaresVisitados.push('Santa marta');

                setTimeout(function() {
                    lugaresVisitados.push('Choco');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

irDePaseo();
console.log(lugaresVisitados.toString());

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//NOMBRAR LAS FUNCIONES ANINOMAS
const lugaresVisitados = []

function irDePaseo() {

    setTimeout(function agregardato() {
        lugaresVisitados.push('Bogota');

        setTimeout(function agregardato() {
            lugaresVisitados.push('Medellin');

            setTimeout(function agregardato() {
                lugaresVisitados.push('Santa marta');

                setTimeout(function agregardato() {
                    lugaresVisitados.push('Choco');
                    console.log(lugaresVisitados.toString());
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

irDePaseo();

// Aplicamos modularidad tomando lo que mas se repite del callback hell

const lugares = require("./moduloEjemplo1");
const lugaresVisitados2 = [] // callback hell ejemplo uno


function irDePaseo() {

    lugares('Bogota', lugaresVisitados2, (callback) => {
        lugares('Medellin', lugaresVisitados2, (callback) => {
            lugares('Santamarta', lugaresVisitados2, (callback) => {
                console.log(lugaresVisitados2.toString());
            });
        });
    });
}

irDePaseo();