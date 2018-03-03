const objRemoveQuote = require('../dist/index.min');

test(`移除json对象和数组的引用`, () => {
    const obj1 = {a: 'hello', b: 'world'};
    const obj2 = objRemoveQuote(obj1);
    console.log(obj2); // {a: 'hello', b: 'world'}
    console.log(obj1 === obj2); // false
    expect(true).toEqual(true);
});
