function reverseWords(s: string): string {
  s = s.trim().replace(/\s+/gi, " ");

  const words = s.split(" ");
  let i = 0;
  let j = words.length - 1;

  while (i < j) {
    let left = words[i];
    let right = words[j];

    words[i] = right;
    words[j] = left;

    ++i;
    --j;
  }

  return words.join(" ");
}

console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
