/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true;

    let currentIndex = 0;

    while (currentIndex < nums.length - 1) {
        const num = nums[currentIndex];
        let maxNum = null;
        let maxNumIndex = 0;

        if (num === 0) break;

        if (currentIndex + num >= nums.length - 1) {
            currentIndex += num;
            break;
        }

        for (let i = currentIndex + 1; i <= currentIndex + num; i++) {
            const nextNum = nums[i];

            if (nextNum >= maxNum || !maxNum) {
                maxNum = nextNum;
                maxNumIndex = i;
            } else {
                if (nextNum === 0) maxNum -= 1;
            }
        }

        currentIndex += maxNumIndex - currentIndex;
    }

    return currentIndex >= nums.length - 1;
};

// Optimized and more logical solution from top solutions:
// var canJump = function(nums) {
//   let target = nums.length-1
//   for(let i=nums.length-1;i>=0;i--){
//       if(i+nums[i]>=target){
//           target=i;
//       }
//   }
//   return target===0;
// };

//canJump([2, 3, 1, 1, 4]);
//canJump([2, 0]);
//canJump([2, 5, 0, 0]);
canJump([3, 0, 8, 2, 0, 0, 1]);