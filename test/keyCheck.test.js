const keyCheck = require('../utils/keyCheck')

test('check \'f\' in a to i', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    const str = 'f'
    expect(keyCheck(str, arr)).toBe(6)
})

test('check \'z\' in a to i', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    const str = 'z'
    expect(keyCheck(str, arr)).toBe(0)
})
