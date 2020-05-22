function bouncingBall(h, bounce, window) {
  let timesSeen = 0;

  // checks if it's a valid experiment
  if (!(h > 0 && 0 < bounce && bounce < 1 && window < h)) {
    return -1;
  }

  // only loops while it's possible to increase timesSeen
  while (h > window) {
    timesSeen++;
    h *= bounce; // changes h to new height after the bounce
    // checks if the ball will bounce back above the windows
    if (h > window) {
      timesSeen++;
    }
  }
  return timesSeen;
}

console.log(bouncingBall);
