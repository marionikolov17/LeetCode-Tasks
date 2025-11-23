/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const seen = new Map();
    const times = Math.floor(nums.length / 3);
    const result = [];

    for (const num of nums) {
        const count = map.get(num) || 0;

        if (count >= times) {
            if (seen.has(num)) continue;

            seen.set(num, true);
            result.push(num);
        }

        map.set(num, count + 1);
    }

    return result;
};