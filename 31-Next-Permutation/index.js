/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let k;
    let l;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            k = i - 1;
        }
        if (nums[i] > nums[k]) {
            l = i;
        }
    }

    if (k === undefined) {
        reverse(nums, 0);
        return nums;
    }

    let first = nums[k];
    let last = nums[l];
    nums[k] = last;
    nums[l] = first;

    reverse(nums, k + 1);
    return nums;
};

var reverse = function(arr, start) {
    for (let i = 0; i < arr.length - start; i++) {
        for (let j = start; j < arr.length - i - 1; j++) {
            let current = arr[j];
            let next = arr[j + 1];
            arr[j] = next;
            arr[j + 1] = current;
        }
    }
}