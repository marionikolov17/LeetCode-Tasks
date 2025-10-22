/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let currentWord = "";
    let reversedString = "";

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];

        if (char !== " ") {
            const lastWord = currentWord;
            const newWord = char + lastWord;
            currentWord = newWord;
        } else {
            if (currentWord !== "") {
                reversedString += i === 0 ? currentWord : currentWord + " ";
                currentWord = "";
            }
        }

        if (i === 0 && currentWord !== "") {
            reversedString += i === 0 ? currentWord : currentWord + " ";
        }
    }

    return reversedString;
};

//reverseWords("the sky is blue");
//reverseWords("  hello world  ");
//reverseWords("a good   example");