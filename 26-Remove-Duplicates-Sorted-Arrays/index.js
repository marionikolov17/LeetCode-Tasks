/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    let i = 1;
    let selectedNum = nums[0];

    while (i < nums.length) {
        const currentNum = nums[i];

        if (selectedNum === currentNum) {
            nums.splice(i, 1);
        } else {
            selectedNum = currentNum;
            k++
            i++;
        }
    }

    console.log(nums);
    return k;
};

let nums = [1, 1, 2];
let expectedNums = [1, 2];

const k = removeDuplicates(nums);

for (let i = 0; i < k; i++) {
    console.log(nums[i], expectedNums[i]);
}