/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0; i < k; i++) {
        let index = happiness.length - 1 - i;

        sum += Math.max(0, happiness[index] - i);
    }

    return sum;
};