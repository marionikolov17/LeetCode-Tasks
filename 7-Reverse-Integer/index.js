/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2, 31);

    let reversed;

    if (x < 0) {
        reversed = Number(`-${String(x * -1).split("").reverse().join("")}`)
    } else {
        reversed = Number(String(x).split("").reverse().join(""))
    }

    if (reversed >= max * -1 && reversed <= max - 1) {
        return reversed;
    }

    return 0;
};