/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    function gcd(numbers) {
        const minNum = Math.min(...numbers);

        for (let i = minNum; i >= 1; i--) {
            if (numbers.every((num) => num % i === 0)) return i;
        }
    }

    let count = 0;

    for (const num of nums) {
        if (num === 1) count++;
    }

    if (count > 0) return nums.length - count;

    if (gcd(nums) > 1) return -1;

    let minLength = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let g = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            g = gcd([g, nums[j]]);

            if (g === 1) {
                minLength = Math.min(minLength, j - i + 1);
                break;
            }
        }
    }

    return minLength - 1 + nums.length - 1;
};

//console.log(minOperations([6, 10, 15]));
//console.log(minOperations([2, 6, 3, 4]));
//console.log(minOperations([846237, 105643, 71480, 567494, 315367, 503911, 836510, 984966, 748650]));
//console.log(minOperations([4, 2, 6, 3]));
console.log(minOperations([10, 5, 10, 30, 70, 4, 2, 6, 8, 4]));