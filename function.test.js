const functions = require('./functions');

test('Add 2 + 1 to equal 3', () => {
    expect(functions.add(2, 1)).toBe(3);
});