// Klass för ett kalkylator-objekt med
// funktioner för addition, subtraktion,
// division och multiplikation
class Calculator {
    add(x,y) {
        return x + y;
    };

    sub(x,y) {
        return x - y;
    };

    div(x,y) {
        return x / y;
    };

    mult(x,y) {
        return x * y;
    };
}

// Skapar ett kalkylator-objekt
const calc = new Calculator;

// Exporterar kalkylator-objektet
module.exports = calc;