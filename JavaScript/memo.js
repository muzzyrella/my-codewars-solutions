const memo = (func) => {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    } else {
      const val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }
  };
};
