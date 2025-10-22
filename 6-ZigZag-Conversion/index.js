/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const zigzagRepresentationArray = [];
    let currentVertical = null;
    let currentRow = 1;
    let isDecreasingRows = false;

    for (const char of s) {
        if (currentRow === 1) {
            zigzagRepresentationArray.push(Array(numRows).fill(''));
            currentVertical = zigzagRepresentationArray[zigzagRepresentationArray.length - 1];

            currentVertical[currentRow - 1] = char;

            if (currentRow !== numRows) currentRow += 1;
            isDecreasingRows = false;
        } else if (currentRow === numRows) {
            currentVertical[currentRow - 1] = char;

            zigzagRepresentationArray.push(Array(numRows).fill(''));
            currentVertical = zigzagRepresentationArray[zigzagRepresentationArray.length - 1];

            currentRow -= 1;
            isDecreasingRows = true;
        } else {
            currentVertical[currentRow - 1] = char;

            if (isDecreasingRows) {
                currentRow -= 1;
            } else {
                currentRow += 1;
            }
        }
    }

    let result = "";

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < zigzagRepresentationArray.length; j++) {
            result += zigzagRepresentationArray[j][i];
        }
    }

    return result;
};

//convert("PAYPALISHIRING", 3);
//convert("PAYPALISHIRING", 4);
//convert("A", 1);
//convert("AB", 1);