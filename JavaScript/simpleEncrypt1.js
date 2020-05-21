function encrypt(text, n) {
    //validates text and n
    if (text == null || "" || n <= 0) {
        return text;
    }

    //encrypts the string N times
    for (let times = 1; times <= n; times++) {
        //define odds and even index substrings
        let [oddStr, evenStr] = ["", ""];
        for (let i = 0; i < text.length; i++) {
            //iterates the string, checks if string[index] is odd or even
            i % 2 === 0
                ? (evenStr = evenStr.concat(text[i]))
                : (oddStr = oddStr.concat(text[i]));
        }
        //saves the encrypted string for reuse if N > 1
        text = oddStr.concat(evenStr);
    }
    return text;
}

function decrypt(encryptedText, n) {
    //validates text and n
    if (encryptedText == null || "" || n <= 0) {
        return encryptedText;
    }

    //define global variables for better readability
    let lastChar = "";
    let decryptedText = encryptedText;
    const len = decryptedText.length;
    const middle = Math.floor(len / 2);

    //odd length strings will always have the same last char
    //so we'll store it for better iteration bellow
    if (len % 2 === 1) {
        lastChar = decryptedText[len - 1];
    }

    //decrypts the string N times
    for (n; n > 0; n--) {
        //'recover' both odd and even indexes strings
        const oddStr = decryptedText.slice(0, middle);
        const evenStr = decryptedText.slice(middle);

        //clean decryptedText
        decryptedText = "";

        //iterates both odd and even indexes strings
        //and combines all of them, removing one "layer" of encryption
        for (let i = 0; i < middle; i++) {
            decryptedText = decryptedText.concat(evenStr[i], oddStr[i]);
        }
    }
    //return decryptedText combined with lastChar
    return decryptedText.concat(lastChar);
}
