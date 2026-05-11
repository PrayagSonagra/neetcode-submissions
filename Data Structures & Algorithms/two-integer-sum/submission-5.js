class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

      const hashTable = new Map ;

      for(let i = 0 ; i < nums.length ; i++){

        const remainder = target - nums[i] ;

        if(hashTable.has(remainder)){
          return [hashTable.get(remainder) , i ]
        }
        else {
          hashTable.set(nums[i] , i); 
        }
      }

    }
}
