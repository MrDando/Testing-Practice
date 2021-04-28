import arrayAnalysis from '../functions/arrayAnalysis'

test('TOD example array', () => {
    expect(arrayAnalysis([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})

test('Single number array', () => {
    expect(arrayAnalysis([3, 4.3, 1, 7.1])).toStrictEqual({
        average: 3.85,
        min: 1,
        max: 7.1,
        length: 4
      });
})

test('Single number array', () => {
    expect(arrayAnalysis([3])).toStrictEqual({
        average: 3,
        min: 3,
        max: 3,
        length: 1
      });
})