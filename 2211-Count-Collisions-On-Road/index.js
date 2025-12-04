/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let collisions = 0;
    let cars = 0;
    directions = directions.split("");

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];

        if (direction === "L") {
            const prevDirection = directions[i - 1];

            if (prevDirection !== "L" && prevDirection !== undefined) {
                collisions += 1;
                directions[i] = "S";
            }
        } else if (direction === "S") {
            const prevDirection = directions[i - 1];

            if (prevDirection === "R") {
                collisions += 1;
                directions[i - 1] = "S";
            }
        } else if (direction === "R") {
            const nextDirection = directions[i + 1];

            if (nextDirection === "R") {
                cars++;
            } else if (nextDirection !== "R" && nextDirection !== undefined) {
                collisions += cars + 1;
                cars = 0;

                if (nextDirection === "S") {
                    directions[i] = "S";
                }

                directions[i + 1] = "S";
            }
        }
    }

    return collisions;
};