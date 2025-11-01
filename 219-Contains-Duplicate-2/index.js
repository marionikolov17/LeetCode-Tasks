/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (map.has(num)) {
            const index = map.get(num);

            if (Math.abs(index - i) <= k) return true;

            map.set(num, i);
        } else {
            map.set(num, i);
        }
    }

    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));