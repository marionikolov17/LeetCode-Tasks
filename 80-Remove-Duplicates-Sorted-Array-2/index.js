/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentNum = null;
    let occurences = 1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (currentNum === num) {
            if (occurences >= 2) {
                nums.splice(i, 1);
                i -= 1;
            } else {
                occurences++;
            }
        } else {
            currentNum = num;
            occurences = 1;
        }
    }

    return nums.length;
};

let nums = [1, 1, 1, 2, 2, 2];
let expectedNums = [1, 1, 2, 2, 2];
//let expectedNums = [0, 0, 1, 1, 2, 3, 3];
//let expectedNums = [0, 0, 1, 1, 2, 3, 3];

const k = removeDuplicates(nums);

for (let i = 0; i < k; i++) {
    console.log(nums[i], expectedNums[i]);
}