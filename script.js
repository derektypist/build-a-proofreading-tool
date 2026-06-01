function isPalindrome(word) {
  let wordNew = word.toLowerCase();
  return [...wordNew].reverse().join("") === wordNew;
}

function findPalindromeBreaks(words) {
  const result = [];
  if (words.length === 0) return result;
  for (let i=0;i< words.length; i++) {
    if (!isPalindrome(words[i])) result.push(i);
  }
  return result;
}

function findRepeatedPhrases(words, phraseLength) {
  
  let repeatedPhrases = [];
  if (phraseLength >= words.length) return repeatedPhrases;
  for (let i=0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i+ phraseLength).join(" ");
    let found = false;
    for (let j = 0; j<= words.length - phraseLength; j++) {
      if (i === j) continue;
      if (words.slice(j, j + phraseLength).join(" ") === phrase) {
        found = true;
        break;
      }
    }
    if (found) repeatedPhrases.push(i);
  }

  return repeatedPhrases;
}

function analyzeTexts(texts, phraseLength) {
  const results = [];
  if (texts.length === 0) return results;
  for (let i=0; i< texts.length; i++) {
    results.push({repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
    palindromeBreaks: findPalindromeBreaks(texts[i])});
  }
  return results;
}

console.log(isPalindrome("racecar"));
console.log(findPalindromeBreaks(["the","cat","racecar","break"]));
console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2));
console.log(analyzeTexts([["the","cat","sat","on","the","mat", "and","played","with","the","racecar"]],1));
