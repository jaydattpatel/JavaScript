/*
 * Author : Jaydatt Patel
Object literals and the dot notation
One of the most common ways of building an object in JavaScript is using the object literal syntax: {}.
*/

console.log("--------Method-1---------");

var student = {}; //create an object
student.id  = 123; 
student.name  = "Rahul";
student.degree  = "BCA";
student.subjects =  ["C","C++","JAVA","Python"];
student.printdata = function() //add function in objects
    {     
        console.log(student);
    };
student.getdata = function() //add function in objects
    {     
        console.log(this.id,this.name,this.degree,this.subjects );
    };

student.printdata();
student.getdata();


console.log("--------Method-2---------");
var address = {
    city: "Jaipur",
    pincode: 123456,
    state: "Rajasthan",
    contry: "India",
    show : function(){
        console.log(this.city,this.pincode,this.state,this.contry);
    } 
}
address.show();
console.log(address.city)
address.city = "Ajmer";
console.log(address)

/*
Object literals and the brackets notation. There is an alternative syntax to the dot notation I used up until this point. This alternative syntax is known as the brackets notation.
*/
console.log("--------Method-3---------");
var house = {};
house["rooms"] = 4;
house['color'] = "pink";
house["price"] = 12345;
console.log(house); 

console.log("--------Method-4---------");
var Keys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < Keys.length; i++) {
    console.log(drone[Keys[i]])
}

console.log("--------Method-5---------"); 
//constructor functions for the built-in objects, I can also define custom constructor functions.  (looks like class)
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () 
    {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }

const person = createPerson("Alex");
person.name;
person.introduceSelf();


console.log("--------Method-6---------");
//constructor functions for the built-in objects, I can also define custom constructor functions.  (looks like class) same as above.
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let kiwi_Icecream = new Icecream("kiwi");
let apple_Icecream = new Icecream("apple");
console.log(kiwi_Icecream.meltIt()); 
console.log(apple_Icecream.meltIt()); 

//create new object from old object using prototype inheritance
console.log("--------Method-7---------");
var o1 = {}
 o1.obj1 = "Object-1";
 console.log("Object.getPrototypeOf(o1) :",Object.getPrototypeOf(o1));

 var o2 = Object.create(o1); //create new obj with prototypes of old objects
 o2.obj2 = "Object-2";
 console.log("Object.getPrototypeOf(o2) :",Object.getPrototypeOf(o2));

 var objects = Object.create(o2);
 objects.obj3 = "Object-3";
 console.log("Object.getPrototypeOf(objects) :",Object.getPrototypeOf(objects));

 console.log("objects.obj1 :",objects.obj1); 
 console.log("objects.obj2 :",objects.obj2); 
 console.log("objects.obj3 :",objects.obj3); 

