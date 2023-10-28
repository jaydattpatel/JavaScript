/* 
 * Author : Jaydatt Patel
Undefined, Null, Empty
Undefined : if variable or function does not have value then it returns undefined
Null is returned if value is not found
*/

//Undefined : if variable or function does not have value then it returns undefined
var val;
console.log("val : ",val);
//console.log(a); ReferenceError: a is not defined
var game = {score:100};
console.log("game.sc : ", game.sc);
//console.log(a); ReferenceError: a is not defined



//Null is returned if value is not found
var str = "ABC";
console.log("str.match(\"B\"): ", str.match("B"));
console.log("str.match(\"D\"): ", str.match("D"));

var result = null;
console.log("result : ",result);

//Empty
var set = ""; //string
var set2 = []; //array
var set3 = {}; //object
console.log(set);
console.log(set2);
console.log(set3);

//sample program
var x;

  if(x === null) {
    console.log("x is null");
  } else if(x === undefined) {
    console.log("x is undefined");
  } else {
    console.log("x is ok");
  }