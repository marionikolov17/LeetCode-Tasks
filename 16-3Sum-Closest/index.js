/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestSum = Infinity;
    let minDiff = Infinity;

    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {
        const num = sortedNums[i];

        let j = i + 1;
        let k = sortedNums.length - 1;

        while (j < k) {
            const sum = num + sortedNums[j] + sortedNums[k];
            const diff = Math.abs(target - sum);

            if (diff < minDiff) {
                minDiff = diff;
                closestSum = sum;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return closestSum;
};