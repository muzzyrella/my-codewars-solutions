const list = (names) => {
    size = names.length;
    string = "";
    if (size === 1) {
        return names[0]["name"];
    }
    for (let i = 0; i < size; i++) {
        const lastTwoIndex = size - 2;
        if (i === lastTwoIndex) {
            string += names[i]["name"] + " & " + names[i + 1]["name"];
            break;
        } else {
            string += names[i]["name"] + ", ";
        }
    }
    return string;
};
