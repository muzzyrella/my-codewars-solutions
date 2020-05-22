const sumOfDivided = (lst) => {
  const primes = [];
  const primeSum = [];

  let highestNum = 0;
  for (let i = 0; i < lst.length; i++) {
    if (Math.abs(lst[i]) > highestNum) {
      highestNum = Math.abs(lst[i]);
    }
  }

  for (let num = 2; num <= highestNum; num++) {
    let index = 0;
    let isPrime = true;
    while (index < primes.length && isPrime) {
      if (num % primes[index] == 0) {
        isPrime = false;
      }
      index++;
    }
    if (isPrime) {
      primes.push(num);
    }
  }

  for (let i = 0; i < primes.length; i++) {
    const primeNum = primes[i];
    if (lst.some((n) => n % primeNum == 0)) {
      primeSum.push([
        primeNum,
        lst.reduce((acc, cur) => {
          return cur % primeNum == 0 ? acc + cur : acc;
        }, 0),
      ]);
    }
  }

  return primeSum;
};

console.log(sumOfDivided([107, 158, 204, 100, 118, 123, 126, 110, 116, 100]));
