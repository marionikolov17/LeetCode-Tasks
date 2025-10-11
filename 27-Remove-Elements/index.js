/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            k++;
            i++;
        }
    }

    return k;
};

//removeElement([3, 2, 2, 3], 3);
//removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

let nums = [3, 2, 2, 3];
let val = 3;
let expectedNums = [2, 2];

const k = removeElement(nums, val);

nums = nums.sort((a, b) => a - b, 0, k - 1);
console.log(nums, k);

for (let i = 0; i < k; i++) {
    console.log(nums[i], expectedNums[i]);
}