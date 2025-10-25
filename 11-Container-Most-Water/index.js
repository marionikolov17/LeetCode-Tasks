/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];

        const minLevel = Math.min(leftHeight, rightHeight);
        const indexesDiff = Math.abs(left - right);
        const water = minLevel * indexesDiff;

        if (water > maxWater) maxWater = water;

        if (leftHeight <= rightHeight) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);