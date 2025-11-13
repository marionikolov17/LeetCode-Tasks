/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const numA = BigInt('0b' + a);
    const numB = BigInt('0b' + b);
    const sum = numA + numB;
    return sum.toString(2);
};