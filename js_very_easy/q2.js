//Question_2
/*
Football Points
Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

wins get 3 points
draws get 1 point
losses get 0 points
Examples
footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0
Notes
Inputs will be numbers greater than or equal to 0.

*/
//The solution
function footballPoints(wins, draws, losses) {
  w = wins * 3;
  d = draws * 1;
  l = losses * 0;
  sumPoints = w + d + l;
  return sumPoints;
}
