/*
 * Author : Jaydatt Patel
different loops : for, for(of) , for(in) , while
*/
console.log("----------for loop - 1:");
for(var i = 1; i <=3 ; i++)
    console.log(i);

console.log("----------for loop - 2:");
const birds = ["Parrot", "Falcon", "Owl"];
for (const bird of birds) 
    console.log(bird);

console.log("----------for loop - 3:");
const values = [11,12,13,14,15];
for (const num of values) 
    console.log(num);

console.log("----------for loop - 4:");
var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) 
    console.log(cubes[i])

console.log("---------");
var car = {
    color : "red",
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("sportsCar : ",sportsCar);
console.log("---------");

//for(of) loop iterat properties keys with objects.
console.log("----------for loop - 5:");
for(const prop of (Object.keys(sportsCar)))
    console.log(prop, ':',sportsCar[prop]);

//for(in) loop iterat properties keys with objects and its hidden prototype.
console.log("----------for loop - 6:");
for(const prop in sportsCar)
    console.log(prop, ':',sportsCar[prop]);


i = 11;
console.log("----------while loop:");
while(i <=13)
    {
        console.log(i);
        i++;
    }


//styling console output using CSS with a %c format specifier
/*
console.log("--------------:");
var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
*/
