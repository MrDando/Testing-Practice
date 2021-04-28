import reverseString from '../functions/reverseString'

test('Single word', () => {
    expect(reverseString('Elephant')).toBe('tnahpelE');
})

test('Multiple words', () => {
    expect(reverseString('The wolves are on the prowl sire.')).toBe('.eris lworp eht no era sevlow ehT');
})

test('Single letter', () => {
    expect(reverseString('A')).toBe('A');
})

test('Empty string', () => {
    expect(reverseString('')).toBe('');
})