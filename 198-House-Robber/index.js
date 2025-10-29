/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const map = new Map();
    let maxAmount = 0;

    for (let i = 0; i < nums.length; i++) {
        let resultAmount;

        if (i < 2) {
            map.set(i, nums[i]);

            resultAmount = nums[i];
        } else {
            let currentMaxAmount = 0;

            for (let j = i - 2; j >= 0; j--) {
                const amount = map.get(j);

                if (amount > currentMaxAmount) currentMaxAmount = amount;
            }

            resultAmount = currentMaxAmount + nums[i];
            map.set(i, resultAmount);
        }

        if (resultAmount > maxAmount) maxAmount = resultAmount;
    }

    return maxAmount;
};

rob([1, 2, 3, 1]);
rob([2, 1, 1, 2]);
rob([2, 7, 9, 3, 1]);