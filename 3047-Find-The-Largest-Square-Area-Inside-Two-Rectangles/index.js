/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
    let result = 0;
    let length = bottomLeft.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (bottomLeft[j][0] > topRight[i][0] || bottomLeft[j][1] > topRight[i][1]) continue;

            let newBottom = [
                Math.max(bottomLeft[i][0], bottomLeft[j][0]),
                Math.max(bottomLeft[i][1], bottomLeft[j][1])
            ];
            let newTop = [
                Math.min(topRight[i][0], topRight[j][0]),
                Math.min(topRight[i][1], topRight[j][1])
            ];

            let sideLength = Math.min(newTop[0] - newBottom[0], newTop[1] - newBottom[1]);

            if (sideLength < 0) continue;

            result = Math.max(result, sideLength * sideLength);
        }
    }

    return result;
};