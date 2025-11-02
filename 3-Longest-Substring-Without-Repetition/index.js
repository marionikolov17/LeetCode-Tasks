/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let str = "";

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        while (str.includes(char)) {
            str = str.substring(1);
        }

        str += char;
        maxLength = Math.max(maxLength, str.length);
    }

    return maxLength;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");