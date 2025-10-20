/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;

    let startIndex = 0;
    let tank = 0;

    for (let i = 0; i < n * 2; i++) {
        tank += gas[i % n] - cost[i % n];

        if (tank < 0) {
            tank = 0;
            startIndex = i + 1;
        } else {
            if (i - startIndex + 1 === n) return startIndex;
        }
    }

    return -1;
};

//canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
//canCompleteCircuit([2, 3, 4], [3, 4, 3]);
//canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]);
//canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]);