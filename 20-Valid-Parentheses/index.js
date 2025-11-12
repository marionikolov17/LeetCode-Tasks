/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            const opening = stack.pop();

            if (opening === '(' && char === ')') {
                continue;
            } else if (opening === '{' && char === '}') {
                continue;
            } else if (opening === '[' && char === ']') {
                continue;
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};