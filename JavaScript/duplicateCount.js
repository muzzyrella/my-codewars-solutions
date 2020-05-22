const duplicateCount = (text) => {
  text = text.toLowerCase();
  const chars = [];
  const duplicates = [];
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (chars.includes(letter) && !duplicates.includes(letter)) {
      duplicates.push(letter);
    } else {
      chars.push(letter);
    }
  }
  return duplicates.length;
};
