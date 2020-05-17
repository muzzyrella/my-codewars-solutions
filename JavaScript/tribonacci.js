const tribonacci = (signature, n) => {
    if(!n) {
        return [];
    }
    let len = signature.length;
    while(len < n) {
        newElem = signature[len - 1] + signature[len - 2] + signature[len - 3];
        len = signature.push(newElem);
    }
    while(len > n) {
        signature.pop();
        len--;
    }
    return signature;
}