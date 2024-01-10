// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// 01234 5
// aafgs
//   ^
//    ^
// result = 4
// current = afgs

var lengthOfLongestSubstring = function(s) {
    let arr = s.split('');

    if (arr.length === 0) {
        return 0;
    }

    let i = 0;
    let result = 1;

    while (i <= arr.length - 2) {
        if (arr.length - i <= result) {
            break;
        }
        let j = i + 1;
        const current = [arr[i]];
        while (j <= arr.length - 1) {
            if (current.includes(arr[j])) {
                break;
            }
            current.push(arr[j]);
            j++;
        }
        result = current.length > result ? current.length : result;
        i++;
    }

    return result;
};

console.log(lengthOfLongestSubstring("sa"));
