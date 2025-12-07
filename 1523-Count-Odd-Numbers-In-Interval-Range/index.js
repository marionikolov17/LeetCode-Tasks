/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let numbersInRange = high - low + 1;

    if (low % 2 !== 0 || high % 2 !== 0) {
        return Math.ceil(numbersInRange / 2);
    } else {
        return Math.floor(numbersInRange / 2);
    }
};