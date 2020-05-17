const expandedForm = (num) => {
    let responseString = ''
    const strNum = String(num);
    const len = strNum.length;
    for(let i = 0; i < len; i++) {
        n = Number(strNum[i]);
        if(n) {
            expand = String(n * Math.pow(10, len - 1 - i))
            responseString += responseString == '' ? expand : ' + ' + expand;
        }
    }
    return responseString;
}