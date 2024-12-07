// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
// Follow up: Can you come up with an algorithm that runs in O(m + n) time?
/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   const finLength = m + n;
//   let counter = 0;
//   let x = 0; // m
//   let y = 0; // n
//   while (x < finLength) {
//     if (y > n - 1) break;
//     if (nums1[x] < nums2[y] && x < finLength) {
//       if (x >= m) {
//         nums1.splice(x, 0, nums2[y]);
//         nums1.pop();
//         x = 0;
//         y++;
//         counter++;
//         continue;
//       }
//       x++;
//       continue;
//     }
//     console.log(`insert no. : ${counter}`);
//     console.log(`nums2[y]: ${nums2[y]}`);
//     console.log(`nums1[x]: ${nums1[x]}`);
//     console.log(`x: ${x}`);
//     console.log(`y: ${y}`);
//     console.log(`nums1: ${nums1}`);
//     console.log(`nums2: ${nums2}`);
//     console.log();
//     nums1.splice(x, 0, nums2[y]);
//     nums1.pop();
//     x = 0;
//     y++;
//     counter++;
//     console.log(`nums2[y]: ${nums2[y]}`);
//     console.log(`nums1[x]: ${nums1[x]}`);
//     console.log(`x: ${x}`);
//     console.log(`y: ${y}`);
//     console.log(`nums1: ${nums1}`);
//     console.log(`nums2: ${nums2}`);
//     console.log();
//   }
//   console.log(nums1);
// }
function merge(nums1, m, nums2, n) {
    var x = m - 1;
    var y = n - 1;
    var i = m + n - 1;
    while (x >= 0 && y >= 0) {
        if (nums1[x] > nums2[y]) {
            nums1[i] = nums1[x];
            x--;
        }
        else {
            nums1[i] = nums2[y];
            y--;
        }
        i--;
    }
    while (y >= 0) {
        nums1[i] = nums2[y];
        y--;
        i--;
    }
    console.log(nums1);
}
// Example 0:
// Input: nums1 = [-1,0,0,3,3,3,0,0,0], m = 6, nums2 = [1,2,2], n = 3
// Output: [-1,0,0,1,2,2,3,3,3]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
console.log("Example 1");
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
console.log("Example 1");
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
console.log("Example 2");
merge([1], 1, [], 0);
// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
console.log("Example 3");
merge([0], 0, [1], 1);