/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let middle = Math.floor(nums.length / 2);

    while (true) {
        if (nums[middle] === target) return middle;

        if (target > nums[middle]) {
            if (middle === nums.length - 1) {
                return middle + 1;
            }

            middle++;
        } else if (target < nums[middle]) {
            if (middle === 0) {
                return middle;
            }

            if (target > nums[middle - 1]) {
                return middle;
            }

            middle--;
        }
    }
};