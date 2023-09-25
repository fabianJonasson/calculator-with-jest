//Detta är vår enhetstestkod
//
//Vad vill vi testa?
//Jo, vi börjar väl med Add-metoden, dvs 1,2 ska ge 3

const { default: expect } = require("expect");

// Inkluderar filen calcuator.js
// och därmed objektet som
// exporterades
const calc = require('./calculator');

// Test för att se om additionsfunktionen
// fungerar som tänkt
test('addition av 1 och 2 ska bli 3', () => {
    expect(calc.add(1,2)).toBe(3);
});

// Test för att se om subtraktionsfunktionen
// fungerar som tänkt
test('subtraktion av 5 från 10 ska bli 5', () => {
    expect(calc.sub(10,5)).toBe(5);
});

// Test för att se om divisionssfunktionen
// fungerar som tänkt
test('division av 10 med 2 ska bli 5', () => {
    expect(calc.div(10,2)).toBe(5);
});

// Test för att se om multiplikationsfunktionen
// fungerar som tänkt
test('multiplikation av 3 och 2 ska bli 6', () => {
    expect(calc.mult(3,2)).toBe(6);
});