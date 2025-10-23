/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        const previousRating = ratings[i - 1];
        const currentRating = ratings[i];

        if (currentRating > previousRating) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        const nextRating = ratings[i + 1];
        const currentRating = ratings[i];

        if (currentRating > nextRating) {
            if (candies[i] <= candies[i + 1]) {
                candies[i] = candies[i + 1] + 1;
            }
        }
    }

    return candies.reduce((a, b) => a + b);
};

candy([1, 2, 87, 87, 87, 2, 1]);