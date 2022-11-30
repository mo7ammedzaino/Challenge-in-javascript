//Question_24
/*
Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.

*/
//The solution
function convert(hours, minutes) {
  ch = hours * 3600;
  cm = minutes * 60;
  sumSecond = ch + cm;
  return sumSecond;
}
