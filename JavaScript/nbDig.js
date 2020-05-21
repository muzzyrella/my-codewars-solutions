function nbDig(n, d) {
    let digits = 0;
    for (let i = 0; i <= n; i++) {
        let k = String(i * i).match(RegExp(`${d}`, "g"));
        if (k) for (x of k) digits++;
    }
    return digits;
}
