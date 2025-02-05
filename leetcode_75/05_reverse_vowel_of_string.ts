function reverseVowels(s: string): string {
  const regex = /a|e|i|o|u/gi;
  const a = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!a[left].match(regex)) {
      ++left;
      continue;
    }

    if (!a[right].match(regex)) {
      --right;
      continue;
    }

    [a[left], a[right]] = [a[right], a[left]];
    ++left;
    --right;
  }

  return a.join("");
}

const result1 = reverseVowels("IceCreAm");
console.log(result1);

const result2 = reverseVowels("leetcode");
console.log(result2);
