const spiralize = (n) => {
    //Creates a n x n array and fill it with 1s.
    const spiral = [];
    for (let i = 0; i < n; i++) {
        spiral.push([...Array(n)].fill(1));
    }

    //Limits for our 0 replacement loop
    let topLimit = 1;
    let leftLimit = 1;
    let bottomLimit = n - 2;
    let rightLimit = n - 2;

    //Starts 1 to 0 replacement loop
    for (;;) {
        //Replaces from left to right, top side of 2D array
        for (let i = leftLimit - 1; i <= rightLimit; i++) {
            spiral[topLimit][i] = 0;
        }
        topLimit += 2; //Increases top limit by 2
        //Replaces from top to bottom, right side of 2D array
        for (let i = topLimit - 1; i <= bottomLimit; i++) {
            spiral[i][rightLimit] = 0;
        }
        rightLimit -= 2; //Decreases right limit by 2
        //Replaces from right to left, bottom side of 2D array
        for (let i = rightLimit + 1; i >= leftLimit; i--) {
            spiral[bottomLimit][i] = 0;
        }
        bottomLimit -= 2; //Decreases bottom limit by 2
        //Replaces from bottom to top, left side of 2D array
        for (let i = bottomLimit + 1; i >= topLimit; i--) {
            spiral[i][leftLimit] = 0;
        }
        leftLimit += 2; //Increases left limit by 2
        //if break statement could be anywhere/any opposites limits (e.g. top bottom, right left)
        if (leftLimit - 1 > rightLimit) break;
    }
    return spiral;
};

console.log(spiral(8));
