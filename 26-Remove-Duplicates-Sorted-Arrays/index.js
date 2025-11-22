/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        let next = i + 1;

        while (num === nums[next]) {
            next++;
        }

        nums.splice(i + 1, next - i - 1);
        k++;
    }

    return k;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let expectedNums = [0, 1, 2, 3, 4];

const k = removeDuplicates(nums);

for (let i = 0; i < k; i++) {
    console.log(nums[i], expectedNums[i]);
}