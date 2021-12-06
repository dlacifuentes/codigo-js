// Equipo N°2
// Ejemplo de callback Hell N°3 evitado con async/await


//Callback Hell
const multiplicacion = function(a, b, callback) {
    setTimeout(() => {
        callback(a * b);
    }, 1000);
};

multiplicacion(2, 10, (multi1) => {
    multiplicacion(6, multi1, (multi2) => {
        multiplicacion(10, multi2, (multi3) => {
            console.log(`El resultado de las operaciones es:\n ${multi3}`);
        });
    });
});

//proceso con async/await para evitar callback hell

//retorna una promesa para ser consumida posteriormente
const resultandoOperacion = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a * b);
        }, 1000);
    });
};

//calculando el resultado de la operación con Async/await
(async() => {
    const operacion1 = await resultandoOperacion(2, 10);
    const operacion2 = await resultandoOperacion(6, operacion1);
    const operacion3 = await resultandoOperacion(10, operacion2);

    console.log(`El resultado de las operaciones es:\n${operacion3}`);
})();