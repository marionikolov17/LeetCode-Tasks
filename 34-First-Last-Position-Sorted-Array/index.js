/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let startPosition = -1;
    let endPosition = -1;

    let start = 0;
    let end = nums.length;
    let middle = Math.floor((end + start) / 2);

    while (end > start) {
        if (nums[middle] === target) {
            if (startPosition === -1) {
                if (nums[middle - 1] === target) {
                    middle = middle - 1;
                    continue;
                } else {
                    startPosition = middle;
                    endPosition = middle;
                    start = middle;
                }
            } else {
                if (nums[middle + 1] === target) {
                    middle = middle + 1;
                    continue;
                } else {
                    endPosition = middle;
                    break;
                }
            }
        } else if (nums[middle] > target) {
            end = middle;
        } else if (nums[middle] < target) {
            if (middle === 0 || middle === nums.length - 1) break;
            if (start === middle) break;
            start = middle;
        } else {
            break;
        }

        middle = Math.floor((end + start) / 2);
    }

    return [startPosition, endPosition];
};

console.log(searchRange([7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9], 7))
console.log(searchRange([3, 3, 3], 3));
console.log(searchRange([1, 1, 3, 3, 3, 3, 3], 3));
console.log(searchRange([1], 0));
console.log(searchRange([1, 3], 1));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 6));
console.log(searchRange([1], 1));
console.log(searchRange([0, 0, 1, 1, 1, 4, 5, 5], 2));