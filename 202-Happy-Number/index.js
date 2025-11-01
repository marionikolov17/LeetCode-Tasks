/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seenResults = new Map();
    let result = 0;

    let digits = n.toString().split('');

    while (result !== 1) {
        let newResult = 0;

        for (const digit of digits) {
            newResult += Math.pow(Number(digit), 2);
        }

        result = newResult;

        if (seenResults.has(result)) return false;

        seenResults.set(result, true);

        digits = result.toString().split('');
    }

    return true;
};

console.log(isHappy(7));