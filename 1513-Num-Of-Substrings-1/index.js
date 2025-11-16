/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let sum = 0;

    function findCumulativeSum(groupLength) {
        return (groupLength * (groupLength + 1)) / 2;
    }

    sum = s.split('0').reduce((acc, value) => acc += findCumulativeSum(value.length), 0);

    return sum % (Math.pow(10, 9) + 7);
};

console.log(numSub("0110111"));
console.log(numSub("101"));
console.log(numSub("111111"));

// var numSub = function(s) {
//   let sum = 0;
//   let consecutiveOnesGroupLength = 0;
// 
//   function findCumulativeSum(groupLength) {
//       if (groupLength <= 1) return groupLength;
// 
//       let cumulativeSum = 1;
//       let addition = 2;
// 
//       for (let i = groupLength - 1; i > 1; i--) {
//           cumulativeSum += addition;
//           addition++;
//       }
// 
//       return cumulativeSum;
//   }
// 
//   for (let i = 0; i < s.length; i++) {
//       const digit = s[i];
// 
//       if (digit === '1') {
//           consecutiveOnesGroupLength++;
//           sum++;
//       } else if (digit === '0') {
//           if (consecutiveOnesGroupLength > 1) {
//               sum += findCumulativeSum(consecutiveOnesGroupLength);
//           }
//           consecutiveOnesGroupLength = 0;
//       }
// 
//       if (i === s.length - 1 && consecutiveOnesGroupLength > 1) {
//           sum += findCumulativeSum(consecutiveOnesGroupLength);
//       }
//   }
// 
//   return sum % (Math.pow(10, 9) + 7);
// };