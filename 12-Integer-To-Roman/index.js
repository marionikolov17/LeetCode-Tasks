/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = "";

    while (num > 0) {
        if (num >= 1000) {
            result += "M";
            num -= 1000;
            continue;
        } else if (num < 1000 && num >= 900) {
            result += "CM";
            num -= 900;
            continue;
        } else if (num >= 500 && num < 900) {
            result += "D";
            num -= 500;
            continue;
        } else if (num < 500 && num >= 400) {
            result += "CD";
            num -= 400;
            continue;
        } else if (num >= 100 && num < 400) {
            result += "C";
            num -= 100;
            continue;
        } else if (num < 100 && num >= 90) {
            result += "XC";
            num -= 90;
            continue;
        } else if (num < 90 && num >= 50) {
            result += "L";
            num -= 50;
            continue;
        } else if (num < 50 && num >= 40) {
            result += "XL";
            num -= 40;
            continue;
        } else if (num < 40 && num >= 10) {
            result += "X";
            num -= 10;
            continue;
        } else if (num < 10 && num === 9) {
            result += "IX";
            num -= 9;
            continue;
        } else if (num < 10 && num >= 5) {
            result += "V";
            num -= 5;
            continue;
        } else if (num === 4) {
            result += "IV";
            num -= 4;
            continue;
        } else if (num < 4) {
            result += "I";
            num -= 1;
            continue;
        }
    }

    return result;
};

intToRoman(3749);