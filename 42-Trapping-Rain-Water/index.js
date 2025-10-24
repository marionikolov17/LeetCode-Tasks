/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;

    let maxLeftHeight = height[0];
    let maxRightHeight = height[height.length - 1];

    let maxLeftHeights = new Map();
    let maxRightHeights = new Map();

    let left = 1;
    let right = height.length - 2;

    while (left < height.length - 1 && right > 0) {
        const leftHeight = height[left];
        const rightHeight = height[right];

        if (leftHeight > maxLeftHeight) {
            maxLeftHeight = leftHeight;
        }

        if (rightHeight > maxRightHeight) {
            maxRightHeight = rightHeight;
        }

        maxLeftHeights.set(left, maxLeftHeight);
        maxRightHeights.set(right, maxRightHeight);

        left++;
        right--;
    }

    for (let i = 1; i < height.length - 1; i++) {
        const currentHeight = height[i];

        const diff = Math.min(maxLeftHeights.get(i), maxRightHeights.get(i)) - currentHeight;
        water += Math.max(0, diff);
    }

    return water;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
trap([4, 2, 0, 3, 2, 5]);