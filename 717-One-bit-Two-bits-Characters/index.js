/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let isTwoBit = false;
    let bitsCount = 0;

    for (let i = 0; i < bits.length; i++) {
        const bit = bits[i];

        if (bit === 1) {
            isTwoBit = true;
            bitsCount++;

            if (bitsCount === 2 && i !== bits.length - 1) {
                bitsCount = 0;
                isTwoBit = false;
            }
        } else if (bit === 0) {
            if (isTwoBit) {
                bitsCount++;

                if (bitsCount === 2 && i !== bits.length - 1) {
                    bitsCount = 0;
                    isTwoBit = false;
                }
            } else {
                isTwoBit = false;
                bitsCount = 0;
            }
        }
    }

    return !isTwoBit;
};