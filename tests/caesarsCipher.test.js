import caesarsCipher from '../functions/caesarsCipher'

test('Zero shift test', () => {
    expect(caesarsCipher('Attack at dawn!', 0)).toBe('Attack at dawn!');
})

test('Letter wrapping test', () => {
    expect(caesarsCipher('Defend the east wall of the castle.', 5)).toBe('Ijkjsi ymj jfxy bfqq tk ymj hfxyqj.');
})

test('Letter wrapping test', () => {
    expect(caesarsCipher("Don't fret. This is just a test!", 13)).toBe("Qba'g serg. Guvf vf whfg n grfg!");
})