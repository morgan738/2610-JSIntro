/*********************** Declaring and Instantiating Variables & Console.log ***********************/

/**
 * let
 * const
 * var
 */

/**
 * let x;
 * x = 5;
 */
/* let x = 5;
console.log(x);
x = "this is a string";
console.log(x); */

/* const y = "another one";
console.log(y); */

//single comment line
/*
  multiple 
  line comments
*/

/*********************** Variables and Data types ***********************/
/* const num1 = 5;
const num2 = 23;
const sum = num1 + num2;
//.    sum = 5 + 23
console.log(sum);
const string1 = "A whole new";
const string2 = "world";
const string3 = string1 + " " + string2;
console.log(string3);
const bool1 = true;
const bool2 = true;
const bool3 = bool1 + bool2;
console.log(typeof bool3);
const num3 = 1;
const num4 = "1";
const num5 = num3 + num4;
console.log(num5);
const num6 = 1234;
const num7 = "2";
const num8 = num6 - num7;
console.log(num8); */

/*********************** Concatenating String and Template Literals ***********************/

const username = "morgan";
const numVisitors = 73829;

/* console.log(
  "Hello " +
    username +
    ". Welcome to the site. There have been " +
    numVisitors +
    " visitors today.",
); */
console.log(
  `Hello ${username}. Welcome to the site. There have been ${numVisitors} visitors today.`,
);

/*********************** Booleans and Evaluating Booleans ***********************/
const likesPizza = true;
const likePineappleOnPizza = false;
const morganPizzaPreference = likesPizza && !likePineappleOnPizza;
//                                true    AND  NOT FALSE --> true
//                                true AND true --> true
//                                      || --> OR
console.log(morganPizzaPreference);
