function validatePIN (pin) {
    return /(^(\d{4}|\d{6}))(?!.)/s.test(pin);
}

console.log(validatePIN('1222 '));