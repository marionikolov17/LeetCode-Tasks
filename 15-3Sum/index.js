/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    let resultIndex = 0;

    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {
        const num = sortedNums[i];

        if (i > 0 && num === sortedNums[i - 1]) continue;

        const target = 0 - num;

        let j = i + 1;
        let k = sortedNums.length - 1;

        while (j < k) {
            const leftNum = sortedNums[j];
            const rightNum = sortedNums[k];
            let shouldSkip = false;

            if (j > i + 1 && leftNum === sortedNums[j - 1]) {
                j++;
                shouldSkip = true;
            };

            if (k < sortedNums.length - 1 && rightNum === sortedNums[k + 1]) {
                k--;
                shouldSkip = true;
            }

            if (shouldSkip) continue;

            const addition = leftNum + rightNum;

            if (addition > target) {
                k--;
            } else if (addition < target) {
                j++;
            } else if (addition === target) {
                const array = [num, leftNum, rightNum];

                result[resultIndex] = array;
                resultIndex++;

                j++;
                k--;
            }
        }
    }

    return result;
};

//threeSum([-1, 0, 1, 2, -1, -4]);
//threeSum([-100, -70, -60, 110, 120, 130, 160]);
//threeSum([-1, 0, 1, 0])