/**
 * [description]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * leetcode 332 ms
 * jest 3ms
 */

var intToRoman1 = function (num) {
  const map = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]);

  let str = ''

  for (let [key, value] of map) {
    let a = Math.floor(num / key);
    if (a == 0)
      continue;
    str += new Array(a).fill(value).join('')
    num -= key * a;
    if (num == 0)
      break;
  }

  return str
}

module.exports.fun1 = intToRoman1;


var Letters = ['I','V','X','L','C','D','M'];
/**
 * [description]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 * leetcode 最优  160ms
 * jest 1ms
 */
var intToRoman2 = function(num) {
  let res = ''
  for(let i = 0; i < 4; i++){
    let n = num%10;
    if(n<4&&n>0){
      for(let j = 0; j < n; j++){
        res = Letters[i*2]+res;
      }
    }else if(n===4){
      res = Letters[i*2]+Letters[i*2+1]+res;
    }else if(n>4 && n < 9){
      for(let j = 0; j < n-5; j++){
        res = Letters[i*2]+res;
      }
      res = Letters[i*2+1]+res;

    }else if(n===9){
      res = Letters[i*2]+Letters[i*2+2]+res;
    }
    num = Math.floor(num/10);
    if(num === 0) break;
  }
  return res;

};

module.exports.fun2 = intToRoman2;
