const part = require('../code/part.1.js');

var arr = [];
var target = 19999;
for (var i = 0; i <= 10000; i++) {
    arr.push(i);
};
test('1', () => {
  expect(part.twoSum1(arr, target)).toStrictEqual([9999, 10000]);
});

test('2', () => {
  expect(part.twoSum2(arr, target)).toStrictEqual([9999, 10000]);
});

test('3', () => {
  expect(part.twoSum3(arr, target)).toStrictEqual([9999, 10000]);
});

test('4', () => {
  expect(part.twoSum4(arr, target)).toStrictEqual([9999, 10000]);
});
