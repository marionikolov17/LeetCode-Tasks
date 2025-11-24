/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const result = [];
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        x = (x * 2 + nums[i]) % 5;
        result.push(x % 5 === 0);
    }

    return result;
};