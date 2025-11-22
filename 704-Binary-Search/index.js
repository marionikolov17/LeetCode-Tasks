/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid = Math.floor((right + left) / 2);

    while (left <= right) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((right + left) / 2);
    }

    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 3));
console.log(search([-1, 0, 3, 5, 9, 12], 2));