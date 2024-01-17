// https://leetcode.com/problems/rotate-array

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
//     rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// O(1) memory

// k = 1
// 7,1,2,3,4,5,6
//             ^
//
// swap = 7
//

var rotate = function(nums, k) {
    k = k % nums.length;

    const makeStep = (nums) => {
        let swap = nums[nums.length - 1];
        let i = 0;
        while (i < nums.length) {
            const tmp = nums[i];
            nums[i] = swap;
            swap = tmp;
            i++;
        }
    };

    while (k > 0) {
        makeStep(nums);
        k--;
    }
};

console.log(rotate([1,2,3,4,5,6,7], 4));
