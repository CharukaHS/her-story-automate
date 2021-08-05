const robot = require("robotjs");

// add delay after mouse/keyboard click
robot.setMouseDelay(100);
robot.setKeyboardDelay(100);

const POSITIONS = {
  search: [997, 259], // search button
  play: [1044, 537], // play button
  textbox: [958, 452], // textbox containing tags
  close: [1082, 303], // close button
  0: [482, 352], // thumbnail 1
  1: [638, 342], // thumbnail 2
  2: [770, 348], // thumbnail 3
  3: [936, 354], // thumbnail 4
  4: [1028, 358], // thumbnail 5
};

const playVid = (x, y) => {
  // x, y is position of the thumbnail
  // click on thumbnail
  robot.moveMouse(x, y);
  robot.mouseClick();

  // click play button
  robot.moveMouse(POSITIONS.play[0], POSITIONS.play[1]);
  robot.mouseClick();

  // escape from video player
  robot.keyTap("escape");

  // remove user tag from textbox
  robot.moveMouse(POSITIONS.textbox[0], POSITIONS.textbox[1]);
  robot.mouseClick();
  robot.keyTap("backspace");

  // close the overlay
  robot.moveMouse(POSITIONS.close[0], POSITIONS.close[1]);
  robot.mouseClick();
};

let n = 1;
const main = async () => {
  console.log(`Looping for ${n} times`);
  n++;
  await sleep(4000);

  // click search button
  robot.moveMouse(POSITIONS.search[0], POSITIONS.search[1]);
  robot.mouseClick();

  // wait till db query complete
  await sleep(2000);

  // loop through five thumbnails
  for (let i = 0; i < 5; i++) {
    playVid(POSITIONS[i][0], POSITIONS[i][1]);
  }

  // recursion
  main();
};

const sleep = (t) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

main();
