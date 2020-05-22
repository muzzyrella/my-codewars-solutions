function nbDig(n, d) {
  let digits = 0;
  for (let i = 0; i <= n; i++) {
    const k = String(i * i).match(RegExp(`${d}`, "g"));
    if (k) digits += k.length;
  }
  return digits;
}
