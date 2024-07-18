// console.log("=======================Two Sum=======================")
// console.log("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.")
// console.log("=======================")

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (i != j) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
};
// console.log(twoSum([2,7,11,15],9))

////////////////////////

// console.log("=======================Best Time to Buy and Sell Stock=======================")
// console.log("You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.")
// console.log("=======================")

var maxProfit = function (prices) {
  let max = 0;
  for (var i = 0; i < prices.length; i++) {
    for (var j = i; j < prices.length; j++) {
      if (i != j) {
        if (prices[j] - prices[i] > 0 && max < prices[j] - prices[i]) {
          max = prices[j] - prices[i];
        }
      }
    }
  }
  return max;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

////////////////////////

// console.log("=======================Contains Duplicate=======================")
// console.log("Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.")
// console.log("=======================")
var containsDuplicate = function (nums) {
  let result = false;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (i != j && nums[i] == nums[j]) {
        result = true;
        break;
      }
    }
  }
  return result;
};
// console.log(containsDuplicate([1, 2, 3,1]));

////////////////////////

// console.log("=======================Product of Array Except Self=======================")
// console.log("Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].")
// console.log("=======================")
var productExceptSelf = function (nums) {
  //     let result = [];
  //   for (var i = 0; i < nums.length; i++) {
  //     let p = 1
  //     for (var j = 0; j < nums.length; j++) {
  //       if (i != j ) {
  //         p*=nums[j]
  //       }
  //     }

  //     result[i]=p
  //   }
  const totalProduct = nums.reduce((acc, num) => acc * num);

  // Map through the array and for each element, calculate the result
  const result = nums.map((num) => totalProduct / num);

  return result;
};
// console.log(productExceptSelf([1,2,3,4]))

////////////////////////

// console.log("=======================Maximum Subarray=======================")
// console.log("Given an integer array nums, find the subarray with the largest sum, and return its sum.")
// console.log("=======================")
// var maxSubArray = function(nums) {
//     let maxSoFar = nums[0];     //-2
//     let maxEndingHere = nums[0];  //-2
//     // Iterate through the array starting from the second element
//     for (let i = 1; i < nums.length; i++) {
//         // Update maxEndingHere to the maximum of the current element or the current element plus maxEndingHere
//         maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
//         // Update maxSoFar to the maximum of maxSoFar and maxEndingHere
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }
//     return maxSoFar;
// };
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// console.log("=======================Maximum Product Subarray=======================")
// console.log("Given an integer array nums, find a subarray that has the largest product, and return the product.")
// console.log("=======================")

var maxProduct = function (nums) {
  let maxProduct = nums[0]; //-2
  let minProduct = nums[0]; //-2
  let result = nums[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current number is negative, swap maxProduct and minProduct
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    // Update maxProduct and minProduct
    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    minProduct = Math.min(nums[i], minProduct * nums[i]);

    // Update result to the maximum product found so far
    result = Math.max(result, maxProduct);
  }

  return result;
};
// console.log(maxProduct([2,3,-2,4]))

// console.log("=======================Find Minimum in Rotated Sorted Array=======================")
// console.log("Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:[4,5,6,7,0,1,2] if it was rotated 4 times.[0,1,2,4,5,6,7] if it was rotated 7 times.")
// console.log("=======================")

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
// console.log(findMin([3,4,5,1,2]))

// console.log("=======================Search in Rotated Sorted Array=======================")
// console.log("There is an integer array nums sorted in ascending order (with distinct values).Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].")
// console.log("=======================")

var search = function (nums, target) {
  return nums.indexOf(target);
};

//   console.log(search([4,5,6,7,0,1,2],3))

// console.log("=======================3Sum=======================")
// console.log("Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.")
// console.log("=======================")
function removeDuplicateArrays(arrays) {
  // Create a Set to track unique arrays in string form
  const seen = new Set();

  // Filter the arrays to remove duplicates
  return arrays.filter((array) => {
    // Stringify the array
    const str = JSON.stringify(array);

    // Check if the Set has the stringified array
    if (seen.has(str)) {
      return false;
    } else {
      // Add the stringified array to the Set and keep the array in the result
      seen.add(str);
      return true;
    }
  });
}
var threeSum = function (nums) {
  let arr = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      for (var k = 0; k < nums.length; k++) {
        if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0) {
          arr[i] = [nums[i], nums[j], nums[k]];
          arr[i].sort();
        }
      }
    }
  }
  return removeDuplicateArrays(arr);
};

// console.log(threeSum([0,0,0]));

// console.log("=======================Container With Most Water=======================")
// console.log("You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).Find two lines that together with the x-axis form a container, such that the container contains the most water.Return the maximum amount of water a container can store.")
// console.log("=======================")

var maxArea = function (height) {
    let left = 0,
     right = height.length - 1,
    max_water = 0

    while (left < right){
        
        width = right - left
        current_height = Math.min(height[left], height[right])
        current_area = width * current_height
        max_water = Math.max(max_water, current_area)

        
        if (height[left] < height[right]){
            left += 1}
        else{
            right -= 1}}

    return max_water
};
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
