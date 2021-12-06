//Equipo N°2
//Ejemplo N°1 Uso de Async/Await para evitar los callbacks Hell
//Se genera un método para determinar los lugares visitados en un viaje al desierto de la tatacoa


//Callback Hell
const lugaresVisitados = []

const viajeDesiertoTatacoa = () => {
    setTimeout(() => {
        lugaresVisitados.push('Cuzco Rojo'); //cada que se visita un lugar se añade al array
        setTimeout(() => {
            lugaresVisitados.push('Desierto Gris');
            setTimeout(() => {
                lugaresVisitados.push('Oasis');
                setTimeout(() => {
                    lugaresVisitados.push('Piscilodo');
                    setTimeout(() => {
                        lugaresVisitados.push('Museos');
                        setTimeout(() => {
                            lugaresVisitados.push('Observatorio astronómico');
                            setTimeout(() => {
                                lugaresVisitados.push('Xilópalos');
                                console.log(`Lugares visitados:\n`, lugaresVisitados.toString())
                            }, 1000);
                        }, 1000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

viajeDesiertoTatacoa();



//Uso de async await para evitar Callback Hell
const lugaresVisitados = []

//función que permite utilizar setTimeout con await
const Timeout = (cb, timeout = 0) => new Promise(resolve => {
    setTimeout(() => {
        cb();
        resolve();
    }, timeout);
});

//async function viajeDesiertoTatacoa() {
const viajeDesiertoTatacoa = async() => {
    await Timeout(() => { lugaresVisitados.push('Cuzco Rojo'); }, 1000);
    await Timeout(() => { lugaresVisitados.push('Desierto Gris'); }, 1000)
    await Timeout(() => { lugaresVisitados.push('Oasis'); }, 1000)
    await Timeout(() => { lugaresVisitados.push('Piscilodo'); }, 1000)
    await Timeout(() => { lugaresVisitados.push('Museos'); }, 2000)
    await Timeout(() => { lugaresVisitados.push('Observatorio astronómico'); }, 1000)
    await Timeout(() => {
        lugaresVisitados.push('Xilópalos');
        console.log(`Lugares visitados:\n`, lugaresVisitados.toString())
    }, 1000)
}

viajeDesiertoTatacoa()