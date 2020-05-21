const snail = (array) => {
    const arrLen = array[0].length;
    let snail = [];
    let upLimit = 0;
    let leftLimit = 0;
    let downLimit = arrLen - 1;
    let rightLimit = arrLen - 1;
    for (;;) {
        for (let i = leftLimit; i <= rightLimit; i++) {
            snail.push(array[upLimit][i]);
        }
        if (snail.length == arrLen * arrLen) break;
        upLimit++;
        for (let i = upLimit; i <= downLimit; i++) {
            snail.push(array[i][rightLimit]);
        }
        if (snail.length == arrLen * arrLen) break;
        rightLimit--;
        for (let i = rightLimit; i >= leftLimit; i--) {
            snail.push(array[downLimit][i]);
        }
        if (snail.length == arrLen * arrLen) break;
        downLimit--;
        for (let i = downLimit; i >= upLimit; i--) {
            snail.push(array[i][leftLimit]);
        }
        if (snail.length == arrLen * arrLen) break;
        leftLimit++;
    }
    return snail;
};
