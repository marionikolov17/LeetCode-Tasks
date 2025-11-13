/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let remainder = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += remainder;

        if (digits[i] <= 9) {
            remainder = 0;
        } else {
            digits[i] -= 10;
            remainder = 1;
        }
    }

    if (remainder === 1) digits.unshift(remainder);

    return digits;
};