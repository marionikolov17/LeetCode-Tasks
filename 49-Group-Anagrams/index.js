/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let string = strs[i];

        string = string.split("").sort((a, b) => a.localeCompare(b)).join("");

        const value = map.get(string) || [];
        value.push(i);
        map.set(string, value);
    }

    const result = [];
    let index = 0;

    map.forEach((value) => {
        result.push([]);

        for (const i of value) {
            result[index].push(strs[i]);
        }

        index++;
    });

    return result;
};