var isAnagram = function (s, t) {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT ? true : false;
};

console.log(isAnagram("anagram", "nagaram") === true);
console.log(isAnagram("car", "rat") === false);
