function LongestWord(sen) {
    const regEx = /[a-zA-Z]/;
    let longestWord = "";
    let currentWord = "";

    for (let i = 0; i < sen.length; i++) {
        const char = sen[i];

        if (regEx.test(char)) {
            currentWord += char;
        } else {
            if (currentWord.length > longestWord.length) longestWord = currentWord;
            currentWord = "";
        }

        if (i === sen.length - 1 && currentWord !== "") {
            if (currentWord.length > longestWord.length) longestWord = currentWord;
        }
    }

    return longestWord;
}

LongestWord("i love dogs");