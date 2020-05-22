function oddOrEven(array) {
  return array.length === 0 ||
    array.reduce((total, actual) => total + actual) % 2 == 0
    ? "even"
    : "odd";
}
