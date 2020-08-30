
// https://baffinlee.com/leetcode-javascript/problem/two-sum.html

// [1, 3, 5, 4] 9
var twoSum = function(nums, target) {
  var hash = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    let current = nums[i]
    let needed = target - current;

    if (current in hash) {
      console.log(hash)
      return [hash[current], i];
    }

    hash[target - current] = i
  }
  return [-1, -1];
};

const x = twoSum([1, 3, 5, 1, 4], 90)
console.log(x, 'result')