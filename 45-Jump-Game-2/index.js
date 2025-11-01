/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let index = 0;
    let steps = 0;

    if (nums.length === 1) return steps;

    while (index < nums.length - 1) {
        let max = 0;
        let nextIndex = index;

        if (index + nums[index] >= nums.length - 1) {
            steps++;
            break;
        }

        for (let j = index + 1; j < index + 1 + nums[index]; j++) {
            if (nums[j] === undefined) break;

            if (j + nums[j] > max && nums[j] !== 0) {
                max = j + nums[j];
                nextIndex = j;
            };
        }

        index = nextIndex;
        steps++;
    }

    return steps;
};

jump([2, 3, 1, 1, 4]);
jump([2, 3, 0, 1, 4]);