//Question_29
/*
rames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

Examples
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000
Notes
FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
*/
//The solution
function frames(minutes, fps) {
    s = minutes * 60;
    result = s * fps;
    return result;
  }