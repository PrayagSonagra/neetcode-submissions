class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const lib = new Set();

        for (let num of nums) {
            if (lib.has(num)) {
                return true;
            } else {
                lib.add(num);
            }
        }
        return false;
    }
}
