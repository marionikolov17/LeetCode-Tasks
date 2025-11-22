/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const map = new Map();

    const sortedNums = nums.sort((a, b) => a - b);

    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            let d = sortedNums.length - 1;
            let c = b + 1;

            while (c < d) {
                const sum = sortedNums[a] + sortedNums[b] + sortedNums[c] + sortedNums[d];
                const array = [sortedNums[a], sortedNums[b], sortedNums[c], sortedNums[d]];
                const key = array.join("");

                if (sum < target) {
                    c++;
                } else {
                    if (sum === target) {
                        if (!map.has(key)) {
                            map.set(key, true);
                            result.push(array);
                        }
                    }
                    d--;
                }
            }
        }
    }

    return result;
};

console.log(fourSum([-3, -1, 0, 2, 4, 5], 2));
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
// -2, -1, 0, 0, 1, 2