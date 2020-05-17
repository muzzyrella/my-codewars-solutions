const comp = (array1, array2) => {
    if(!array1 || !array2 || array1 == [] || array2 == []) {
        return false;
    }
    arrayS1 = JSON.stringify(array1.sort((a, b) => a - b));
    arrayS2 = JSON.stringify(array2.map((n) => Math.sqrt(n)).sort((a, b) => a - b));
    return arrayS1 == arrayS2 ? true : false;
}