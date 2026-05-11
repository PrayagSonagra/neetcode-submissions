class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const library = new Set;
        for (let i = 0 ; i < nums.length ; i++){
          if(library.has(nums[i])){
            return true
          }else{
            library.add(nums[i])
          }
        }
         return false
    }
}
