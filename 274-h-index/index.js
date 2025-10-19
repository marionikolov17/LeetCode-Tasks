/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const sortedCitations = citations.sort((a, b) => b - a);
    let hIndex = 0;

    for (let i = 0; i < sortedCitations.length; i++) {
        const citation = sortedCitations[i];

        if (citation >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }

    return hIndex;
};

//hIndex([3, 0, 6, 1, 5]);
//hIndex([1, 3, 1]);
//hIndex([1, 1]);
//hIndex([0]);