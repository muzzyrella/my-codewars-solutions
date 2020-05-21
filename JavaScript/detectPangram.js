const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

function isPangram(string) {
    let n = 0;
    let check;
    do {
        check = string.toLowerCase().includes(alphabet[n]);
        n++;
    } while (check && n < alphabet.length);
    return check;
}
