function printerError(s) {
    const errors = s.match(RegExp(/[n-z]/, 'g'));
    let errorCount = 0;
    if(errors) for(i of errors) errorCount++;
    return `${errorCount}/${s.length}`
}

const testString = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
console.log(printerError(testString))
