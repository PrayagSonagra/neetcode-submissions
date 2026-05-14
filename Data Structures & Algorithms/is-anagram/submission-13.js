class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const lib = new Map();

        for (let char of s) {
            lib.set(char, (lib.get(char) || 0) + 1);
        }

        for (let char of t) {
            if (!lib.has(char) || lib.get(char) === 0) {
                return false;
            }
            lib.set(char, lib.get(char) - 1);
        }
        return true;
    }
}
