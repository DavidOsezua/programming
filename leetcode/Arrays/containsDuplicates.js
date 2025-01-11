/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3

Dificulty: Easy.
Link: https://leetcode.com/problems/contains-duplicate/description/
*/

//My First Solution==> FAILED BADLY
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (i === x) {
        return true;
      } else {
        return false;
      }
    }
  }
};

//Why did it fail

//Correct Solution
const containsDuplicate2 = function (nums) {
  const numsSet = new Set(nums);
  if (numsSet.size !== nums) return true;
  else return false;
};

//WHY is it correct
