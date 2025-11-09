/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = [];
    let first = 0;
    let second = 0;

    while (first < nums1.length && second < nums2.length) {
        if (nums1[first] > nums2[second]) {
            mergedArr.push(nums2[second]);
            second++;
        } else {
            mergedArr.push(nums1[first]);
            first++;
        }
    }

    if (first < nums1.length && second >= nums2.length) {
        mergedArr = [...mergedArr, ...nums1.slice(first)];
    } else {
        mergedArr = [...mergedArr, ...nums2.slice(second)];
    }

    if (mergedArr.length % 2 === 0) {
        let firstIndex = mergedArr.length / 2;
        let secondIndex = firstIndex - 1;
        return (mergedArr[firstIndex] + mergedArr[secondIndex]) / 2;
    } else {
        return mergedArr[Math.floor(mergedArr.length / 2)];
    }
};