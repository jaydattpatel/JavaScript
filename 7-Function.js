/*
 * Author : Jaydatt Patel
*/
//add function
function add(a,b) { return(a+b); }
console.log(add(5,2));

//factorial function
function fact(a)
  { return((a === 0) ? 1  : (a * (fact(a-1)))); }
console.log("fact(10) : ", fact(10));
// sum funtion
function sum(a)
  { return((a === 0) ? 0  : (a + (sum(a-1)))); }
console.log("sum(10) : ", sum(10));

//function polymorphism
const bicycle =  { bell: function() { return ("Trin, Trin !"); } }
const bike = { bell: function() { return ("pip, pip !"); }}
function Bell(thing) {
  console.log(thing.bell())
}
Bell(bicycle);
Bell(bike);

//passing function as formal argument
function sayHello() {return "Hello, ";}
function intro(helloMessage, name) 
  { console.log(helloMessage() + name); }
intro(sayHello, "JavaScript!");


// create variable as function
  const display = (str) => {
    console.log(str);
  };
  display("display function variable");

/* First-class Function : A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. */

// passing object and its propery
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return (name);
  };
  
  console.log( greeting( { name: "Alice" } ) ); //passing object property
  console.log( greeting(null) ); 

//returning a function from another function - We can return a function because functions in JavaScript are treated as values.
  function sayHi() {
    console.log("Inside sayHi!");
    //below statement return function
    return () => {
      console.log("Inside function of function");
      return("Hi!");
    };
  }
  const hi = sayHi();
  console.log("-----");
  console.log("hi() : ", hi()) ;
  
 