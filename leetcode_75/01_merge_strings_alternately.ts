// brute
// function mergeAlternately(word1: string, word2: string): string {
//   let merged = "";
//   for (let i = 0; i <= Math.max(word1.length, word2.length); ++i) {
//     if (word1[i]) merged += word1[i];
//     if (word2[i]) merged += word2[i];
//   }
//   return merged;
// }

function mergeAlternately(word1: string, word2: string): string {
  const length = Math.max(word1.length, word2.length) * 2;
  let merged = "";
  for (let i = 0; i < length; i++) {
    const word = i % 2 ? word2 : word1;
    const index = Math.floor(i / 2);
    const char = word[index];

    if (char) merged += char;
  }

  return merged;
}

console.log(mergeAlternately("abc", "pqr") === "apbqcr");
