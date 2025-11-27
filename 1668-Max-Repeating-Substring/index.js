/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let max = 0;

    for (let i = 0; i < sequence.length; i++) {
        let j = i;
        let substring = sequence.substring(j, j + word.length);

        if (substring !== word) continue;

        let count = 1;

        while (true) {
            j += word.length;
            substring = sequence.substring(j, j + word.length);

            if (substring === word) {
                count++;
            } else {
                break;
            }
        }

        max = Math.max(max, count);
    }

    return max;
};