// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
//     It does not matter what you leave beyond the returned k (hence they are underscores).
// Do not allocate extra space for another array.

// 0,0,1,1,1,1,2,3,3
//         ^
// prev = 1
// cur = 1
// cnt = 3
var removeDuplicates = function(nums) {
    let i = 0;
    let prev = null;
    let cnt = 1;
    while (i < nums.length) {
        const cur = nums[i];
        if (cur === prev) {
            cnt++;
        } else {
            cnt = 1;
        }
        if (cnt > 2) {
            nums[i] = null;
        }
        prev = cur;
        i++;
    }

    i = 0;
    while (i < nums.length) {
        if (nums[i] === null && i !== nums.length - 1) {
            let j = i;
            let k = i + 1;
            while (k < nums.length) {
                if (nums[k] !== null) {
                    const swap = nums[j];
                    nums[j] = nums[k];
                    nums[k] = swap;
                    j++;
                }
                k++;
            }
        }
        i++;
    }
    console.log(nums)
    return nums.filter(v => !!v).length;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
