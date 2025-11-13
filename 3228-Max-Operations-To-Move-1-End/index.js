/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
    let operations = 0;
    let onesCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            onesCount++;
            continue;
        };

        if (s[i] === '0' && s[i - 1] === '1') {
            operations += onesCount;
        }
    }

    return operations;
};

console.log(maxOperations("1001101"));
console.log(maxOperations("1111"));
console.log(maxOperations("001111"));
console.log(maxOperations("110"));
console.log(maxOperations("1"));
console.log(maxOperations("0"));