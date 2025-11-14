/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let number = "";
    let isNegative = false;
    let foundDigit = false;
    let foundSign = false;
    let digitRegex = /[0-9]/;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === " " && !foundDigit && !foundSign) continue;

        if (char === "-" && !foundDigit && !foundSign) {
            isNegative = true;
            foundSign = true;
            continue;
        }

        if (char === "+" && !foundDigit && !foundSign) {
            isNegative = false;
            foundSign = true;
            continue;
        }

        const isDigit = digitRegex.test(char);

        if (!isDigit) {
            break;
        }

        if (isDigit) {
            foundDigit = true;
            foundSign = true;
            number += char;
        }
    }

    while (number.length > 1 && number[0] === '0') {
        number = number.substring(1);
    }

    const min = Math.pow(2, 31) * -1;
    const max = Math.pow(2, 31) - 1;

    number = Number(number);

    if (isNegative) number *= -1;

    if (number < min) number = min;
    if (number > max) number = max;

    return number;
};

console.log(myAtoi("+-12"));