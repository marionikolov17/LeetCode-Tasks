/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 1;

    while (index < nums.length) {
        const previousNum = nums[index - 1];
        const currentNum = nums[index];

        if (previousNum === 0 && currentNum !== 0) {
            nums[index - 1] = currentNum;
            nums[index] = previousNum;

            index = Math.max(1, index - 1);
        } else {
            index++;
        }
    }
};

moveZeroes([0, 1, 0, 3, 12]);