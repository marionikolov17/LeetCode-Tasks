/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = null;
    let start = 0;
    let end = 0;
    let lastEnd = null;
    let sum = 0;

    while (end < nums.length) {
        if (end !== lastEnd) {
            sum += nums[end];
        }

        if (sum >= target) {
            if (minLength === null) {
                minLength = end - start + 1;
            } else {
                minLength = Math.min(minLength, end - start + 1);
            }

            sum -= nums[start];
            lastEnd = end;
            start++;
        } else {
            end++;
        }
    }

    return minLength !== null ? minLength : 0;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
minSubArrayLen(4, [1, 4, 4]);
minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);