/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    let prefixSum = 0;
    let maxSum = -Number.MAX_SAFE_INTEGER;
    let kSum = Array(k).fill(Number.MAX_SAFE_INTEGER / 2);

    kSum[k - 1] = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        maxSum = Math.max(maxSum, prefixSum - kSum[i % k]);
        kSum[i % k] = Math.min(kSum[i % k], prefixSum);
    }

    return maxSum;
};

// Test case -> nums = [-1, -2, -3, -4, -5], k = 4
// kSum = [MAX, MAX, MAX, 0]

// First iteration: i = 0, i % k = 0
// prefixSum -> -1
// maxSum -> Math.max(-MAX(maxSum), -1(prefixSum) - MAX(kSum[0])) -> maxSum is still -MAX
// kSum[0] = Math.min(MAX(kSum[0]), -1) -> -1;

// Second Iteration: i = 1, i % k = 1
// prefixSum -> -3
// maxSum -> Math.max(-MAX(maxSum), -3(prefixSum) - MAX(kSum[1])) -> maxSum is still -MAX
// kSum[1] = Math.min(MAX(kSum[1]), -3) -> -3;

// Third Iteration: i = 2, i % k = 2
// prefixSum -> -6
// maxSum -> Math.max(-MAX(maxSum), -6(prefixSum) - MAX(kSum[2])) -> maxSum is still -MAX
// kSum[2] = Math.min(MAX(kSum[2]), -6) -> -6;

// Fourth Iteration: i = 3, i % k = 3
// prefixSum -> -10
// maxSum -> Math.max(-MAX(maxSum), -10(prefixSum) - 0(kSum[3])) -> maxSum is -10 now
// kSum[3] = Math.min(0(kSum[3]), -10) -> -10;

// Fifth Iteration: i = 4, i % k = 0
// prefixSum -> -15
// maxSum -> Math.max(-10(maxSum), -15(prefixSum) - -1(kSum[0])) -> maxSum is still -10
// kSum[0] = Math.min(-1(kSum[0]), -15) -> -15;

//maxSubarraySum([-1, -2, -3, -4, -5], 4);
//maxSubarraySum([-5, 1, 2, -3, 4], 2);
//maxSubarraySum([-10, -1], 1);
//maxSubarraySum([-14, -31, -17, -20], 2);