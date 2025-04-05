function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

module.exports = {
    add : addition,
    subtract : subtraction,
    multiply : multiplication,
    divide : division,
    modulus : modulus
}