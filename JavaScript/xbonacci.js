const Xbonacci = (signature, n) => {
    if(!n) {
        return [];
    }
    let len = signature.length;
    const x = len;
    while(len < n) {
        let sum = 0;
        for(let n = 1; n <= x; n++) {
            console.log(signature[len - n]);
            sum += signature[len - n]
            console.log(sum);
        }
        len = signature.push(sum);
    }
    while(len > n) {
        signature.pop();
        len--;
    }
    return signature;
}