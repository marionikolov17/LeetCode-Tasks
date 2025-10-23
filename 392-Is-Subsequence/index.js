/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let newSubsequence = "";
    let startIndex = 0;

    for (const searchChar of s) {
        for (let i = startIndex; i < t.length; i++) {
            const char = t[i];

            if (char === searchChar) {
                startIndex = i + 1;

                newSubsequence += searchChar;
                break;
            }
        }
    }

    return newSubsequence === s;
};

//isSubsequence("abc", "ahbgdc");
//isSubsequence("axc", "ahbgdc");
isSubsequence("ab", "baab")
isSubsequence("aza", "abzba");