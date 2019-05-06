const part = require('../code/part.11.js');
const util = require('../util/util.js');

let result1 = {
  input: [1,8,6,2,5,4,8,3,7],
  output: 49
}
var arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(i)
}

let result2 = {
  input: arr,
  output: 249500
}
test('1', () => {
  expect(part.fun1(result2.input)).toBe(result2.output);
});

test('2', () => {
  expect(part.fun2(result2.input)).toBe(result2.output);
});
