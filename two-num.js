/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const pairs = Math.abs(target - nums[i]);
    const indexPairs = nums.indexOf(pairs);

    if (indexPairs != i && indexPairs >= 0) {
      return [i, indexPairs];
    }
  }
};

const twoSumHashTable = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    const pairs = Math.abs(target - nums[j]);
    if (map[pairs] != null) {
      return [map[nums[j]], map[pairs]];
    }
  }
}

const data = [2, 7, 11, 15];
const target = 22;
console.log(twoSumHashTable(data, target));
// console.log(twoSum(data, target));