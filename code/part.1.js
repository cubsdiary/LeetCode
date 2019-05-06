/**
 * [ in 可以代替 map 的用法， 用 in 可以 判断 Array 的下标 以及 Object 的 键值]
 */

/**
 * [twoSum1 description] 自己写的 jest 70ms
 * @param  {[Array]} arr    [description]
 * @param  {[Number]} target [description]
 * @return {[Array]}        [description]
 */
function twoSum1 (arr, target) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] == target - arr[i]) {
        return new Array(i, j)
      }
    }
  }
}

module.exports.twoSum1 = twoSum1;

/**
 * [twoSum2 description]  优化后 jest 10ms
 * @param  {[Array]} arr    [description]
 * @param  {[Number]} target [description]
 * @return {[Array]}        [description]
 */
function twoSum2 (arr, target) {
  let map = new Map();
      len = arr.length;

  for (let i = 0; i < len; i++) {
    map.set(arr[i], i);
  }

  for (let j = 0; j < len; j++) {
    let component = target - arr[j];
    if (map.has(component) && map.get(component) !== j) {
      return new Array(j, map.get(component))
    }
  }
}

module.exports.twoSum2 = twoSum2;

/**
 * [twoSum3 description]  最优解 2ms map 写法
 * @param  {[Array]} arr    [description]
 * @param  {[Number]} target [description]
 * @return {[Array]}        [description]
 */
function twoSum3 (arr, target) {
  let map = new Map();
  for (let i = 0, len = arr.length; i < len; i++) {
    let component = target - arr[i]
    if (map.has(component) && map.get(component) != i) {
      return new Array(map.get(component), i);
    }
    map.set(arr[i], i)
  }
}

module.exports.twoSum3 = twoSum3;

function twoSum4 (arr, target) {
  let map = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    map[target-arr[i]] = i
    if (arr[i+1] in map) {
      return [map[arr[i+1]], i+1];
    }
  }
}

module.exports.twoSum4 = twoSum4;
