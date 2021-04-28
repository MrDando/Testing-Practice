import calculator from '../functions/calculator'

test('Add two positive integers', () => {
    expect(calculator.add(1, 3)).toBe(4);
})

test('Add positive and negative integer', () => {
    expect(calculator.add(-2, 3)).toBe(1);
})

test('Add floating point numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test('Subtract two positive integers - 1', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
})

test('Subtract two positive integers - 2', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
})

test('Subtract zero', () => {
    expect(calculator.subtract(7, 0)).toBe(7);
})

test('Subtract negative integer', () => {
    expect(calculator.subtract(2, -3)).toBe(5);
})

test('Subtract floating point number', () => {
    expect(calculator.subtract(4, 1.1)).toBeCloseTo(2.9);
})

test('Multiply two positive integers', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
})

test('Multiply integer and floating point number', () => {
    expect(calculator.multiply(3, 5.2)).toBeCloseTo(15.6);
})

test('Multiply negative nuber', () => {
    expect(calculator.multiply(3, -2)).toBe(-6);
})

test('Divide integers - 1', () => {
    expect(calculator.divide(10, 5)).toBe(2);
})

test('Divide integers - 2', () => {
    expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
})

test('Divide floating point numbers', () => {
    expect(calculator.divide(10.2, 2)).toBeCloseTo(5.1);
})