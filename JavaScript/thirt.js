const thirt = (n) => {
  // Since the pattern is always the same, store it in a constant variable
  const remainders13 = [1, 10, 9, 12, 3, 4];

  // Declare a variable to store the previous number
  // and one for the new number (same as 'n' in the first run)
  let previousNum = 0;
  let newNum = n;

  // Check if the actual number and the previous one are the same
  while (newNum != previousNum) {
    // Transform 'newNum' in a array of strings, then reverse it
    // This makes it easy to multiply each number for the equivalent remainder.
    const revStrNum = String(newNum).split("").reverse();

    // The number is already stored as a reversed array of strings
    // So save it as the previous number and clean 'newNum'
    previousNum = newNum;
    newNum = 0;

    // Then loop over the array
    for (let i = 0; i < revStrNum.length; i++) {
      // Since remainders13 is constant, use i % 6 for index access
      // This makes sure that even when revStrNum.length is bigger than 6
      // The correct index is selected
      newNum += revStrNum[i] * remainders13[i % 6];
    }

    // Then repeat until while condition is met
  }
  return newNum;
};
