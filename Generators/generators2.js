function* famousNames() {
    console.log(`Devuelvo "Luke"`);
    let received = yield "Luke";
    console.log(`Recibo "${received}" y devuelvo "Homer"`);
    received = yield "Homer";
    console.log(`Recibo "${received}" y devuelvo "Bugs"`);
    received = yield "Bugs";
    console.log(`Recibo "${received}"`)
}

const generator = famousNames();
let returned = generator.next();
returned = generator.next(`${returned.value} Skywalker`);
returned = generator.next(`${returned.value} Simpson`);
returned = generator.next(`${returned.value} Bunny`);
generator.next();

// Devuelvo "Luke"
// Recibo "Luke Skywalker" y devuelvo "Homer"
// Recibo "Homer Simpson" y devuelvo "Bugs"
// Recibo "Bugs Bunny"