const stockList = (listOfArt, listOfCat) => {
    let catCount = {},
        responseString = "";
    if (!listOfCat.length || !listOfArt.length) {
        return responseString;
    }
    for (let i = 0; i < listOfArt.length; i++) {
        const catAndCount = listOfArt[i].split(" ");
        let cat = catAndCount[0][0];
        let count = Number(catAndCount[1]);
        catCount[cat] ? (catCount[cat] += count) : (catCount[cat] = count);
    }
    for (let i = 0; i < listOfCat.length; i++) {
        let cat = listOfCat[i];
        let count = catCount[cat] ? catCount[cat] : 0;
        if (responseString == "") {
            responseString += `(${cat} : ${count})`;
        } else {
            responseString += ` - (${cat} : ${count})`;
        }
    }
    return responseString;
};
