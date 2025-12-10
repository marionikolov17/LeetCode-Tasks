/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
    const min = complexity[0];

    for (let i = 1; i < complexity.length; i++) {
        if (complexity[i] <= min) return 0;
    }

    const max = Math.pow(10, 9) + 7;

    let answer = 1;

    for (let i = 2; i < complexity.length; i++) {
        answer = (answer * i) % max;
    }

    return answer;
};