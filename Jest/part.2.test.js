const part = require('../code/part.2.js');

let result1 = {
  input: {
    arr1: [2,4,3],
    arr2: [5,6,4]
  },
  output: [7,0,8]
}
test('1', () => {
  expect(part.fun1(result1.input.arr1, result1.input.arr2)).toStrictEqual(result1.output);
});
