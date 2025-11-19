/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    while (true) {
        let isFound = false;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === original) {
                original *= 2;
                isFound = true;
                break;
            }
        }

        if (!isFound) break;
    }

    return original;
};