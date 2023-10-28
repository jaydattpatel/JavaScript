/*
 * Author : Jaydatt Patel
conditional statements : if else , switch
*/
console.log("(100 == \"100\") : " + (100 == "100"));
console.log("(100 === \"100\") : " + (100 === "100"));//compare and check data type also same or not
console.log("(100 != \"100\") : " + (100 != "100"));
console.log("(100 !== \"100\") : " + (100 !== "100"));//compare and check data type also same or not
console.log("(5 > 4 > 3) : " + (5 > 4 > 3)); // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`


var A = 5;
var B = 10;
var C = 2;

if((A>B) && (A>C)) 
    {
        console.log("A is largest");
    } 
else if ((B>A) && (B>C)) 
    {
        console.log("B is largest");
    } 
else if ((C>A) && (C>B)) 
    {
        console.log("C is largest");
    } 
else 
    {
        console.log("All are Same");
    }

var light = "orange";

if(light == "green") 
    console.log("Drive");
else if (light == "orange") 
    console.log("Get ready");
else if (light == "red")
    console.log("Dont' drive");
else 
    console.log("The light is not green, orange, or red");

//converting the previous if-else example with switch-case
light = "red";
switch(light) {
    case 'green':console.log("Drive");  break;
    case 'orange':console.log("Get ready"); break;
    case 'red':console.log("Don't drive");  break;
    default:console.log('The light is not green, orange, or red');  break;
 }
