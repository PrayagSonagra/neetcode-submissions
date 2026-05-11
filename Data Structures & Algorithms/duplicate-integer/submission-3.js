class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const library = new Set;
        for (const number of nums){
          if(library.has(number)){
            return true
          }else{
            library.add(number)
          }
        }
         return false
    }
}
