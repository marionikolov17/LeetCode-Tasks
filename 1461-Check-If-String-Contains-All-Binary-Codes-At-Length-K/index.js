/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const map = new Map();

    for (let i = 0; i <= s.length - k; i++) {
        let sub = s.substring(i, i + k);
        map.set(sub, true);
    }


    var recurse = function(current) {
        if (current.length === k) {
            return map.has(current);
        }

        if (recurse(current + "0") && recurse(current + "1")) {
            return true;
        } else {
            return false;
        }
    }

    return recurse("");
};