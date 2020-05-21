function titleCase(title, minorWords) {
    //creates a lowercase array with words in string
    //initialize an array for the minorWords
    let words = title.toLowerCase().split(" ");
    let filter = [];
    let newTitle = "";

    //checks if there's a second argument (filter)
    //then creates an array with lowercase filter words
    if (minorWords) {
        filter = minorWords.toLowerCase().split(" ");
    }

    //loops for each word of array Words
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        //checks if it's the first word and
        //if it's a filtered word
        if (i != 0 && filter.includes(word)) {
            newTitle += word + " ";
        }

        //checks if it's a valid word, then, title case it
        else if (words[0]) {
            newTitle += word[0].toUpperCase() + word.slice(1) + " ";
        }
    }

    //removes extra blankspaces before returning the string
    return newTitle.trim();
}
