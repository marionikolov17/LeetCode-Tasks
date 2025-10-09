/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/* var merge = function(nums1, m, nums2, n) {
    let currentNumFromNum2 = nums2.shift();
    let smallestPositiveNumber = null;
    let smallestPositiveNumberIndex = 0;

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.length === 0 && currentNumFromNum2 === undefined) {
            if (nums1[i] <= smallestPositiveNumber && smallestPositiveNumber !== null) {
                console.log("smallest positive number", smallestPositiveNumber, "number from that index", nums1[i]);
                let lastNum = nums1[i];
                nums1.splice(i, 1);
                nums1.splice(smallestPositiveNumberIndex, 0, lastNum);
                smallestPositiveNumberIndex += 1;
            }
            continue;
        }
        if (nums1[i] >= currentNumFromNum2 || (nums1[i] === 0 && i >= m)) {
            console.log("index", i, "number from that index", nums1[i]);
            let lastNum = nums1[i];
            nums1.splice(i, 0, currentNumFromNum2);
            nums1.pop();
            currentNumFromNum2 = nums2.shift();
            if (currentNumFromNum2 === lastNum) i += 1;
            if (nums1[i] > 0 && (nums1[i] < smallestPositiveNumber || smallestPositiveNumber === null)) {
                smallestPositiveNumber = nums1[i];
                smallestPositiveNumberIndex = i;
            }
            console.log("current nums1", nums1);
        }
    }

    console.log(nums1);
}; */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let midx = m - 1;
    let nidx = n - 1;
    let right = m + n - 1;

    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx];
            midx--;
        } else {
            nums1[right] = nums2[nidx];
            nidx--;
        }
        right--;
    }
};

//merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
//merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
//merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2);
//merge([-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], 5, [-1, -1, 0, 0, 1, 2], 6);