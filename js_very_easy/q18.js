//Question_18
/*
Basic Variable Assignment
A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

Examples
nameString("Mubashir") ➞ "MubashirEdabit"

nameString("Matt") ➞ "MattEdabit"

nameString("javaScript") ➞ "javaScriptEdabit"
Notes
Don't forget to return the result.

*/
//The solution
function nameString(name) {
  let a = "Edabit";
  let result = name + a;
  return result;
}
