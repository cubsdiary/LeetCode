/**
 * [description] 第一次完成 jest 302ms
 * @param  {[type]} height [description]
 * @return {[type]}        [description]
 */
var maxArea1 = function(height) {
    var len = height.length,
        max = 0;
    for (let i = 0; i < len ; i++) {
        for (let j = i + 1; j < len; j++) {
            var min = Math.min(height[i], height[j]);
            max = Math.max(max, (j - i) * min);
        }
    }
    return max;
};

module.exports.fun1 = maxArea1;

/**
 * [description] 最优解  jest 1ms
 * @param  {[type]} height [description]
 * @return {[type]}        [description]
 */
var maxArea2 = function(height) {
    let i = 0, j = height.length - 1
    let result = 0
    while (i < j) {
        let tmp = (j - i) * Math.min(height[i], height[j])
        if (tmp > result) result = tmp
        if (height[i] >= height[j]) {
            j--
        } else {
            i++
        }
    }
    return result
};

module.exports.fun2 = maxArea2;
