/*
 * Author : Jaydatt Patel
Built-in methods: Object.keys(obj), Object.values(obj), and Object.entries(obj).

Object.keys(obj) : return an array list of properties
Object.values(obj) :  returns an array list values. 
Object.entries(obj) : returns an array listing both the keys and the values.  
*/

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));
console.log(Object.values(car2)); 
console.log(Object.entries(car2));


function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log("drone[dynamicKey] : ",drone[dynamicKey]);
  }
  testBracketsDynamicAccess();