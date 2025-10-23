/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const addition = numbers[left] + numbers[right];

        if (addition === target) {
            break;
        } else if (addition > target) {
            right -= 1;
        } else if (addition < target) {
            left += 1;
        }
    }

    return [left + 1, right + 1];
};

twoSum([2, 7, 11, 15], 9);