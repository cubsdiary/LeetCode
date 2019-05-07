const part = require('../code/part.12.js')

let result2 = {
  input: 3999,
  output: "MMMCMXCIX"
}

test('1', () => {
  expect(part.fun1(result2.input)).toBe(result2.output);
});

test('2', () => {
  expect(part.fun2(result2.input)).toBe(result2.output);
});
