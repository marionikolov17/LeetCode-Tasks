/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let seconds = 0;

    for (let i = 1; i < points.length; i++) {
        const [prevX, prevY] = points[i - 1];
        const [x, y] = points[i];

        let diffX = Math.abs(prevX - x);
        let diffY = Math.abs(prevY - y);

        let max = Math.max(diffX, diffY);

        seconds += max;
    }

    return seconds;
};