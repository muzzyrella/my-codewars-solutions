const duplicateCount = (text) => {
    text = text.toLowerCase();
    let chars = [];
    let duplicates = [];
    for(let i = 0; i < text.length; i++) {
        letter = text[i];
        if (chars.includes(letter) && !duplicates.includes(letter)) {
            duplicates.push(letter);
        }
        else {
            chars.push(letter);
        }
    }
    return duplicates.length;
}