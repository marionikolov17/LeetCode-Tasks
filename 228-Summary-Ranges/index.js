/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ranges = [];
    let start;
    let prev;

    for (let i = 0; i < nums.length; i++) {
        if (i !== 0) {
            if (nums[i] - prev === 1) {
                prev = nums[i];
            } else {
                if (start === prev) {
                    ranges.push(`${start}`);
                } else {
                    ranges.push(`${start}->${prev}`);
                }
                start = nums[i];
                prev = start;
            }
        } else {
            start = nums[i];
            prev = start;
        }

        if (i === nums.length - 1) {
            if (start === prev) {
                ranges.push(`${start}`);
            } else {
                ranges.push(`${start}->${prev}`);
            }
        }
    }

    return ranges;
};