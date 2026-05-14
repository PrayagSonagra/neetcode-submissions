class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const lib = new Set(nums);

     return lib.size !== nums.length ;

    }
}
