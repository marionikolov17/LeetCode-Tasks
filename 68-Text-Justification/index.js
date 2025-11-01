/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let currentWords = [];
    let currentLineChars = 0;

    function createLine(currentWords, currentLineChars, maxWidth) {
        let spacesToApply = maxWidth - currentLineChars + 1;
        let spacesToDivide = currentWords.length > 1 ? currentWords.length - 1 : 1;
        let line = "";

        for (let j = 0; j < currentWords.length; j++) {
            const currentWord = currentWords[j];

            const requiredSpaces = Math.ceil(spacesToApply / spacesToDivide);

            if (j === currentWords.length - 1) {
                line += currentWord + " ".repeat(requiredSpaces);
            } else {
                line += currentWord + " ".repeat(1 + requiredSpaces);
            }

            spacesToApply -= requiredSpaces;
            spacesToDivide -= 1;
        }

        return line;
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (currentLineChars + word.length > maxWidth) {
            const line = createLine(currentWords, currentLineChars, maxWidth);

            result.push(line);
            currentLineChars = 0;
            currentWords = [];
        }

        currentLineChars += word.length + 1;
        currentWords.push(word);

        if (i === words.length - 1 && currentWords.length > 0) {
            const joinedWords = currentWords.join(" ");

            result.push(joinedWords.padEnd(maxWidth, " "));
        }
    }

    return result;
};

fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16);