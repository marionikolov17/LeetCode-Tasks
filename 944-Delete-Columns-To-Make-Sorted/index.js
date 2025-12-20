/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let columns = 0;

    for (let index = 0; index < strs[0].length; index++) {
        let last = strs[0][index];

        for (let i = 1; i < strs.length; i++) {
            const char = strs[i][index];

            if (last > char) {
                columns++;
                break;
            }

            last = char;
        }
    }

    return columns;
};