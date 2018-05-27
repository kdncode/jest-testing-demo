const reverseString = require('./reverseString')

test('reverseString func exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
});