/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];

    backtrack(s, 0, "", [], res);

    return res;
};

var backtrack = function(s, start, sub, arr, res) {
    if (start >= s.length) {
        return;
    }

    for (let i = start; i < s.length; i++) {
        sub += s[i];

        if (isPalindrome(sub)) {
            arr.push(sub)
            backtrack(s, i + 1, "", arr, res);
            if (i === s.length - 1) res.push(arr.slice());
            arr.pop();
        }
    }
}

var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }

    return true;
}