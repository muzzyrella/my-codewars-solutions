const sum_pairs = (ints, s) => {
  const cache = {};
  for (let m = 0; m < ints.length; m++) {
    const find = s - ints[m];
    if (cache[find] != undefined) {
      return [find, cache[find]];
    } else {
      cache[ints[m]] = find;
    }
  }
};
