// https://leetcode.com/problems/longest-palindromic-substring/

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// aba
// ^
//   ^

const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        j--;
        i++;
    }
    return true;
};

var longestPalindrome = function(s) {
    let i = 0;
    let result = '';

    if (s.length === 1) {
        return s;
    }

    while(i <= s.length - 2) {
        if (s.length - i <= result.length) {
            break;
        }
        let j = i + 1;
        let current = s[i];
        while(j <= s.length - 1) {
            result = current.length > result.length && isPalindrome(current)
                ? current
                : result;
            current += s[j];
            j++;
        }
        result = current.length > result.length && isPalindrome(current)
            ? current
            : result;
        i++;
    }

    return result;
};

console.log(longestPalindrome("adasa"));
