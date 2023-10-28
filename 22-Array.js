/*
 * Author : Jaydatt Patel
declare array and get array length by 
array.length : to get length
array.push(obj) : to add at end
array.pop() : to remove at end
array.unshift(obj) : to add at start
array.shift(obj) : to remove at start
array.splice(index,length) : to remove specific index and more by length
*/
console.log("-----------1------------");
var tue = "tuesday";
var sun = "sunday";
var days = [sun,"monday",tue,"wednesday","thursday","friday","saturday"];
days.unshift("X-days"); // to add at start
days.shift(); // to remove at start
days.push("X-days"); //to add at end
days.pop(); // to remove at end
console.log(days);

console.log("-----------2------------");
var v1 = 11; 
var v2 = 14;
var values = [v1,12,13,v2,15];
console.log(values);
var ind = values.indexOf(13);
if(ind >= 0)
    values.splice(ind,2) //remove 2 items from index ind
console.log("After splice :", values);

console.log("-----------3------------");
var mix = [v1,12,sun,"monday"];
for(var i = 0; i < mix.length ;  i++ )
{
    console.log(i,mix[i]);
}

//you will want to do the same thing to each item in an array, leaving you with an array containing the changed items. You can do this using map(). 
console.log("-----------4------------");
function double(item) 
    {
        return item * 2;
    }
var numbers = [5, 2, 7, 6];
var doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

//you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter().
console.log("-----------5------------");
function isLong(item) 
    {
        return item.length > 8;
}
var cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
var longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]


console.log("-----------6------------");
var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
for(var i = 0; i < days.length ; i++)
{
    const {[i]: one , [i+1]: two} = days
    console.log(one,two)
}