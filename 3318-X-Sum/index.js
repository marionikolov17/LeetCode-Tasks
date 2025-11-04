/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    function calculateXSum(subArr, x) {
        let sum = 0;

        if (subArr.length <= x) {
            return subArr.reduce((acc, currentValue) => acc + currentValue, 0)
        }

        for (let i = 0; i < x; i++) {
            let maxOccurences = 0;
            let majorNumber;
            let maxNum = 0;

            for (let j = 0; j < subArr.length; j++) {
                let occurences = 1;

                maxNum = Math.max(maxNum, subArr[j]);

                for (let k = j + 1; k < subArr.length; k++) {
                    if (subArr[j] === subArr[k]) occurences++;
                }

                if (occurences === maxOccurences && subArr[j] > majorNumber) {
                    majorNumber = subArr[j];
                } else if (occurences > maxOccurences) {
                    maxOccurences = occurences;
                    majorNumber = subArr[j];
                }
            }

            if (maxOccurences > 1) {
                subArr = subArr.filter((el) => {
                    if (el === majorNumber) {
                        sum += el;
                        return false;
                    }

                    return true;
                });
            } else {
                subArr = subArr.filter((el) => el !== maxNum);
                sum += maxNum;
            }
        }

        return sum;
    }

    let index = 0;
    let subArray = nums.slice(index, k);
    const results = [];

    while (subArray.length === k) {
        results.push(calculateXSum(subArray, x));
        index++;
        subArray = nums.slice(index, k + index);
    }

    return results;
};

findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2);
findXSum([1, 6, 1, 3, 3, 5, 6, 2, 5], 7, 2);