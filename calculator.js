// Klass för ett kalkylator-objekt med
// funktioner för addition, subtraktion,
// division och multiplikation
class Calculator {
    add(x,y) {
        if(typeof x === 'string' || typeof y === 'string') {
            return 'invalid char';
        } else {
            return x + y;
        };    
    };

    sub(x,y) {
        if(typeof x === 'string' || typeof y === 'string') {
            return 'invalid char';
        } else {
            return x - y;
        };    
    };

    div(x,y) {
        if(typeof x === 'string' || typeof y === 'string') {
            return 'invalid char';

        } else if(y === 0) {
            return 'not possible';
        } else {
            return x / y;
        };
    };

    mult(x,y) {
        if(typeof x === 'string' || typeof y === 'string') {
            return 'invalid char';
        } else {
            return x * y;
        };    
    };
}

// Skapar ett kalkylator-objekt
const calc = new Calculator;

// Exporterar kalkylator-objektet
module.exports = calc;