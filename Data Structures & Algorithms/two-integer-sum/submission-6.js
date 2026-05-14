class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const library = new Map();
       for(let i = 0 ; i < nums.length ; i ++){
        const diff = target - nums[i] ;
        if(library.has(diff)){
            return ( [ i , library.get(diff)])
        }else {
            library.set(nums[i], i)
        }
       }

    }
}
