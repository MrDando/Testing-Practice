import CapitalizeString from '../functions/capitalizeString'

test('Single word/ all lowercase', () => {
    expect(CapitalizeString('elephant')).toBe('Elephant');
})

test('Single word/ first letter already uppercase', () => {
    expect(CapitalizeString('Tiger')).toBe('Tiger');
})

test('Single word/ all letters uppercase', () => {
    expect(CapitalizeString('ZEBRA')).toBe('ZEBRA');
})

test('Multiple words/ all lowercase', () => {
    expect(CapitalizeString('one can only wonder.')).toBe('One can only wonder.');
})

test('Single letter/ lowercase', () => {
    expect(CapitalizeString('a')).toBe('A');
})

test('Empty string', () => {
    expect(CapitalizeString('')).toBe('');
})