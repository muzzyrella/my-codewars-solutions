const sequenceSum = (begin, end, step) => {
    let totalSum = 0;
    for(begin; begin <= end; begin += step) {
        totalSum += begin;
    }
    return totalSum;
};