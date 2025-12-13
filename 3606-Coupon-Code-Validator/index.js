/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const codes = [];
    const categories = {
        "electronics": [],
        "grocery": [],
        "pharmacy": [],
        "restaurant": []
    }

    for (let i = 0; i < code.length; i++) {
        const el = code[i];

        if (!isActive[i]) continue;

        if (!["electronics", "grocery", "pharmacy", "restaurant"].includes(businessLine[i])) continue;

        const match = el.match(/\w+/);

        if (!match) continue;

        if (match[0] !== el) continue;

        categories[businessLine[i]].push(el);
    }

    for (let [key, value] of Object.entries(categories)) {
        codes.push(...value.sort());
    }

    return codes;
};