// # Strings and Numbers

// #### 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number.
// Concatenate the string and the number.
let varOne = "007";
let varTwo = 008;
console.log(parseInt(varOne) + varTwo);

// ```javascript
let introSentence = "hello, my name is Fran and I am ";
let age = 25;

// age converted into a string and concatenated with ths string  
console.log(introSentence + parseInt(age));

0
// **Expected Output**: 
// ```javascript
// "hello, my name is Fran and I am 25"
// ```
// * In this case, what is the `+` operator doing? Comment your answer in the js file.

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 
let numOne = "1005";
console.log(parseInt(numOne));
console.log(typeof numOne);

let numTwo = "10.05";
console.log(parseInt(numTwo));



