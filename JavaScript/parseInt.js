const parseInt = (string) => {
  // Since original string will always be up to 'one million'
  // return 1000000 if 'million' exits at string.
  if (string.includes("million")) {
    return 1000000;
  }

  // Used to convert string to numbers based on string start.
  const strNums = {
    ze: 0,
    on: 1,
    tw: 2,
    th: 3,
    fo: 4,
    fi: 5,
    si: 6,
    se: 7,
    ei: 8,
    ni: 9,
    te: 10,
    el: 11,
  };

  // Removes '-' and 'and' from original string, stores it as an array.
  const arrNum = string
    .split("-")
    .join(" ")
    .split(" ")
    .filter((n) => n != "and");

  // Search and stores 'thousand' index, avoid searching for it multiple times
  const thousandIndex = arrNum.lastIndexOf("thousand");
  const numbers = [];

  // If 'thousand' is found, split arrNum in two parts of three numbers each
  if (thousandIndex > 0) {
    numbers.push(arrNum.slice(0, thousandIndex));
    numbers.push(
      arrNum[thousandIndex + 1] // Checks if there's anything after 'thousand'
        ? arrNum.slice(thousandIndex + 1) // true: push it to numbers array.
        : ["zero", "zero", "zero"] // false: Return a 'zero' filled array.
    );
  } else {
    numbers.push(arrNum); // Else just push arrNum
  }

  return Number(
    // Used to trim zeroes at the beginning of the final number (e.g. 009892, 089, 002)
    numbers
      .map((a) => {
        // Call function for each array in numbers
        a = a.map((n, i, a) => {
          // Then call another function for each word
          if (n != "hundred") {
            // Checks if actual word is hundred
            const num = strNums[n[0] + n[1]]; // Uses the first two chars to search for a valid number at strNums
            return a[i + 1] == "hundred" // If the next word is 'hundred'
              ? num * 100 // Multiply num by 100
              : n.endsWith("y") // Else if actual word ends with 'y' (e.g. twenty, forty)
              ? num * 10 // Multiply num by 10
              : n.endsWith("een") || n.endsWith("elve") // Else if word is twelve, fifteen, seventeen, etc.
              ? num + 10 // Add 10 to num
              : num; // If nothing above is true, return num
          }
          return 0; // If actual word == 'hundred', return 0 since it isn't a number.
        });
        a = String(a.reduce((a, b) => a + b)); // String convert the sum of all values returned by above function
        while (a.length < 3) {
          // Checks if sum length is less then 3 (e.g. 79, 9)
          a = "0" + a; // While true, adds '0' at the beginning
        }
        return a; // Returns transformed number as a string
      })
      .join("") // Joins strings
  );
};
