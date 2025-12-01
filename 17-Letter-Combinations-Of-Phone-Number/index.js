/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const combinations = [];
    const letters = [];
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    const length = digits.length;

    for (const digit of digits) {
        letters.push(map[digit]);
    }

    backtrack(letters, 0, "", length, combinations);
    return combinations;
};

var backtrack = function(letters, index, sequence, maxLength, result) {
    if (sequence.length === maxLength) {
        result.push(sequence);
        return;
    }

    const arr = letters[index];

    for (let i = 0; i < arr.length; i++) {
        sequence += arr[i];
        backtrack(letters, Math.min(index + 1, maxLength - 1), sequence, maxLength, result);
        sequence = sequence.substring(0, sequence.length - 1);
    }
}