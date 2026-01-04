/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let sum = 0;

    for (const num of nums) {
        let divisors = 2;
        let divisorsSum = num + 1;

        for (let i = 2; i * i <= num; i++) {
            if (divisors > 4) break;

            if (num % i === 0) {
                divisors++;
                divisorsSum += i;
                if (i !== (num / i)) {
                    divisors++;
                    divisorsSum += num / i;
                }
            }
        }

        if (divisors === 4) sum += divisorsSum;
    }

    return sum;
};