function zero(op) {
    if(op) return Math.floor(op(0));
    return 0;
};
function one(op) {
    if(op) return Math.floor(op(1));
    return 1;
};
function two(op) {
    if(op) return Math.floor(op(2));
    return 2;
};
function three(op) {
    if(op) return Math.floor(op(3));
    return 3;
};
function four(op) {
    if(op) return Math.floor(op(4));
    return 4;
};
function five(op) {
    if(op) return Math.floor(op(5));
    return 5;
};
function six(op) {
    if(op) return Math.floor(op(6));
    return 6;
};
function seven(op) {
    if(op) return Math.floor(op(7));
    return 7;
};
function eight(op) {
    if(op) return Math.floor(op(8));
    return 8;
};
function nine(op) {
    if(op) return Math.floor(op(9));
    return 9;
};

function plus(num) {
    return (n) => n + num
};
function minus(num) {
    return (n) => n - num
};
function times(num) {
    return (n) => n * num
};
function dividedBy(num) {
    return (n) => n / num;
};
