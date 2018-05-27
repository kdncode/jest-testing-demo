const functions = require('./functions');

test('Add 2 + 1 to equal 3', () => {
    expect(functions.add(2, 1)).toBe(3);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// Object
test('User should be John Wick object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'John',
        lastName: 'Wick'
    });
});

// Array
test('Admin should be in usernames array', () => {
    usernames = ['admin', 'user1', 'user2'];
    expect(usernames).toContain('admin');
})

// Less than & greater than
test('Should be under 1000', () => {
    const abc = 400;
    const xyz = 500;
    // expect(abc + xyz).toBeLessThan(1000);
    expect(abc + xyz).toBeLessThanOrEqual(1000);
});

// Regex
test('There is no A in hello', () => {
    expect('hello').not.toMatch(/A/);
})

// Working with Async Data - Axios

// Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham')
//         })
// })

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})
