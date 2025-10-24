/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function mergeSortedArrays(arr1, arr2) {
    let left = 0;
    let right = 0;

    while (left < arr1.length && right < arr2.length) {
        const firstNum = arr1[left];
        const secondNum = arr2[right];

        if (firstNum >= secondNum) {
            arr1.splice(left, 0, secondNum);
            right++;
        } else {
            left++;
        }
    }

    console.log(arr1);
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);