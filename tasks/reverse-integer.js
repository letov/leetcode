// https://leetcode.com/problems/reverse-integer/

// Input: x = 123
// Output: 321

var reverse = function(x) {
    const zn = x < 0 ? -1 : 1;
    const result = zn * +Math.abs(x).toString().split('').reverse().join('');
    return result < -Math.pow(2, 31) || result >= Math.pow(2, 31) ? 0 : result;
};

console.log(reverse(1534236469));
