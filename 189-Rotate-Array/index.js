/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let secondK = k > nums.length ? k % nums.length : k;
    const cut = nums.splice(-secondK, secondK);
    nums.unshift(...cut);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);