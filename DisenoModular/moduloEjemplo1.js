module.exports = function agregarDato(a, b, cb) {
    setTimeout(() => {
        cb(b.push(a));
    }, 1000);
}