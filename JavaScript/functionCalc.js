function number(n) {
  return function (op) {
    if (!op) return n;
    return Math.floor(op(n));
  };
}

const one = number(1);
const two = number(2);
const three = number(3);
const four = number(4);
const five = number(5);
const six = number(6);
const seven = number(7);
const eight = number(8);
const nine = number(9);
const zero = number(0);

function plus(num) {
  return (n) => n + num;
}
function minus(num) {
  return (n) => n - num;
}
function times(num) {
  return (n) => n * num;
}
function dividedBy(num) {
  return (n) => n / num;
}
