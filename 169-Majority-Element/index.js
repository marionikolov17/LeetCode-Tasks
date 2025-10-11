/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate;
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (counter === 0) {
            candidate = nums[i];
            counter = 1;
            continue;
        }

        if (nums[i] === candidate) {
            counter++;
        } else {
            counter--;
        }
    }

    return candidate;
};

console.log(majorityElement([3, 2, 3]));