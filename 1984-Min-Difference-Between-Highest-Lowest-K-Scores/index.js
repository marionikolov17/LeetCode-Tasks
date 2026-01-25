/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) return 0;

    nums.sort((a, b) => b - a);

    let min = Infinity;
    let start = 0;

    for (let end = 0; end <= nums.length; end++) {
        while (end - start >= k) {
            let sub = nums.slice(start, end)
            min = Math.min(min, sub[0] - sub[sub.length - 1]);
            start++;
        }
    }

    return min;
};