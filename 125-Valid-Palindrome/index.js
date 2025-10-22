/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[a-zA-Z0-9]/;
    let word = "";
    let reverseWord = "";

    for (const char of s) {
        if (regex.test(char)) {
            const lowerCaseChar = char.toLowerCase();
            word += lowerCaseChar;

            const newReverseWord = lowerCaseChar + reverseWord;
            reverseWord = newReverseWord;
        }
    }

    return word === reverseWord;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");