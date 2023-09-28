test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
    const { diff } = require('jest-diff');

    const a = { a: { b: { c: 5 } } };
    const b = { a: { b: { c: 6 } } };

    const result = diff(a, b);

    // print diff
    console.log(result);
});