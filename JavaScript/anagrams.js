const anagrams = (word, words) => {
  const anagList = [];
  const sortWordArr = JSON.stringify(word.split("").sort());
  for (let i = 0; i < words.length; i++) {
    const wordToCheck = words[i];
    if (sortWordArr == JSON.stringify(wordToCheck.split("").sort())) {
      anagList.push(wordToCheck);
    }
  }
  return anagList;
};

console.log(anagrams);
