/**
 * [第一次自己写的思路， 有点差 jest 204ms]
 * @param  {[String]} s [description]
 * @return {[Number]}   [description]
 */
function lengthOfLongestSubstring1 (s) {
    var arr = s.split(''),
        maxLen = 0,
        map = new Map();
    for (var i = 0, len = arr.length;i < len && len - i > maxLen; i++) {
        map.set(arr[i], i);
        for (var j = i + 1; j <= len; j++) {
            if (map.has(arr[j])) {
                if (map.size > maxLen ) {
                  maxLen = map.size;
                }
                map.clear();
                break;
            } else {
              map.set(arr[j], j);
              if (j == len){
                maxLen = map.size - 1;
              }
            }
        }
    }
    return maxLen;
};

module.exports.fun1 = lengthOfLongestSubstring1;

/**
 * [lengthOfLongestSubstring3 jest 841ms]
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
function lengthOfLongestSubstring3 (s) {
  var len = s.length,
      map = new Map(),
      ans = 0,
      j = 0;
  while (j < len) {
    if (!map.has(s.charAt(j))) {
      map.set(s.charAt(j), j);
      j++;
      ans = Math.max(ans, map.size);
    } else {
      ans = Math.max(ans, map.size);
      j = j - (map.size - 1);
      map.clear();
    }
  }
  return ans
}

module.exports.fun3 = lengthOfLongestSubstring3;

/**
 * [lengthOfLongestSubstring2 最优解 jest 20ms]
 * @param  {[String]} s [description]
 * @return {[Number]}   [description]
 */
function lengthOfLongestSubstring2 (s) {
  var maxLen,
      l,
      r,
      i;

  if (s.length < 2) {
      return s.length;
  }

  maxLen = 0;

  for (l = 0, r = 1; r < s.length; r++) {
      i = s.lastIndexOf(s[r], r-1);
      if (i >= 0) {
          maxLen = Math.max(maxLen, r - l);
          l = Math.max(l, i + 1);
      }
  }
  return Math.max(maxLen, r - l);
};
module.exports.fun2 = lengthOfLongestSubstring2;
