const getNumber = function*() {
    yield 2;
    yield "hello";
    yield true;
    yield { name: "anna" };
    return 'i am done'
};

const numberGen = getNumber();
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);