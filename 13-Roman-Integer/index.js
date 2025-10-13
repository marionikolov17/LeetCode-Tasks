/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let result = 0;
    const regex = /[I, V, X, L, C, D, M, IV, IX, XL, XC, CD, CM]/gm

    const matches = s.match(regex);

    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];

        switch (match) {
            case "I":
                {
                    const nextMatch = matches[i + 1];

                    if (nextMatch === "V" || nextMatch === "X") {
                        result += nextMatch === "V" ? 4 : 9;
                        matches.splice(i + 1, 1);
                    } else {
                        result += values[match];
                    }
                    break;
                }
            case "X":
                {
                    const nextMatch = matches[i + 1];

                    if (nextMatch === "L" || nextMatch === "C") {
                        result += nextMatch === "L" ? 40 : 90;
                        matches.splice(i + 1, 1);
                    } else {
                        result += values[match];
                    }
                    break;
                }
            case "C":
                {
                    const nextMatch = matches[i + 1];

                    if (nextMatch === "D" || nextMatch === "M") {
                        result += nextMatch === "D" ? 400 : 900;
                        matches.splice(i + 1, 1);
                    } else {
                        result += values[match];
                    }
                    break;
                }
            default:
                result += values[match];
                break;
        }
    }

    console.log(result);

    return result;
};

romanToInt("III");