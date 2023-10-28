/*
 * Author : Jaydatt Patel
Three specific methods that exist on arrays:
1) array.forEach(function(){})
2) array.filter(function(){})
3) array.map(function(){})

1. forEach(function) : Arrays in JavaScript come with a handy method that allows you to loop over each of their members. forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

2. filter(function) : It filters your arrays based on a specific test. Those array items that pass the test are returned.

3. map(function) : This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

*/

//array.forEach(function)
console.log("-------array.forEach(function)---1------");
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

console.log("-------array.forEach(function)---2------");
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( 
    function(veggie, index) {
    console.log(`${index}. ${veggie}`);
    }
);

console.log("-------array.forEach(function)---3------");
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( 
    function(key) {
    result.push(key, drone[key])
    }
)
console.log(result)

//array.filter(function)
console.log("----------array.filter(function)");
const nums = [0,10,20,30,40,50];
var num_filt = nums.filter( 
    function(num) {
    return (num > 20);
    }
)
console.log(num_filt);

//array.map(function)
console.log("----------array.map(function)");
var num2 = [0,10,20,30,40,50].map( 
    function(num) {
    return (num / 10);
    }
)
console.log(num2);

