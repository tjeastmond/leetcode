// https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const key = [...str].sort().join("");
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // [["bat"],["nat","tan"],["ate","eat","tea"]]
