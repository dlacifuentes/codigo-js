module.exports = function sumar(a, b, suma) {
    setTimeout(() => {
        suma(a + b);
    }, 1000);
};