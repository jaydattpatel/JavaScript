/*
 * Author : Jaydatt Patel
variables using------
ES5 : var  : we can declare variable using var and assign values or assign values later. we can redeclare same name variable anywhere by assining new value. If we do not assign value then it will hold previous assigned value. It does not support scope resolution means if we declare variable at outside block {} and also redeclare inside block {} with same name then both variables are same and hold same value and both consider as same. New variable declared inside{} can be accessed outside block. 

ES6 : let : we can declare variable using let and assign values or assign values later. we can not redeclare same name variable within block but we can redeclare same name variable inside {} as local variable. It supports scope resolution means if we declare variable at outside block {} and redeclare inside block {} with same name then they both works differently and they work only within scope {}. Variable defined inside block{} accessable within scope {} as local variable and can not accessable outside block. Variable defined outside block{} works as globle variable and it is accesable within its block{} and inside block{}.

ES6 : const : we can declare variable using const must by assigning values. Const variable must be initialized when it was declared. We can not initialize later. After assiging value, we can not modify value. we can not redeclare same name variable within block but we can redeclare same name variable inside {} as local variable. It supports scope resolution means if we declare variable at outside block {} and redeclare inside block {} with same name then they both works differently and they work only within scope {}. Variable defined inside block{} accessable within scope {} as local variable and can not accessable outside block. Variable defined outside block{} works as globle variable and it is accesable within its block{} and inside block{}.
*/


//var variables
console.log("----------var variables---------");
var str = "Hello";
var value = 1234;
var arr = ['aa','bb','cc','dd'];
var i = 5;
console.log("\nstr: ",str,"\nvalue: ",value,
            "\narr:",arr,"\ni: ",i);

var str =  "World";
var value =  5678;
var arr =  ['ee','ff','gg','hh','ii'];
var i = 10;
console.log("\nstr: ",str,"\nvalue: ",value,
            "\narr:",arr,"\ni: ",i);
{
    var i = 20;
    console.log("\ni in {}: ", i);
    var j = 30;
    console.log("\nj in {}: ", j);
}
console.log("\ni: ", i);
console.log("\nj: ", j);

//let veriables
console.log("----------let variables---------");
let str_l = "Hello";
let value_l = 1234;
let arr_l = ['aa','bb','cc','dd'];
let i_l = 5;
console.log("\nstr_l: ",str_l,"\nvalue_l: ",value_l,
            "\narr_l:",arr_l,"\ni_l: ",i_l);

// let str_l =  "World"; //error : can not redefine with let
// let value_l =  5678; //error : can not redefine with let
// let arr_l =  ['ee','ff','gg','hh','ii']; //error : can not redefine with let
// let i_l = 10;    //error : can not redefine with let

{
    let i_l = 20;
    console.log("\ni_l in {}: ", i_l); //redefine in scope
    let j_l = 30;
    console.log("\nj_l in {}: ", j_l);
}
console.log("\ni_l: ", i_l)
//console.log("\nj_l: ", j_l) // error: j_l can not access outside block{}

//const constiables
console.log("----------const variables---------");
//const str_c; //error : const variable must initialized with values
const str_c = "Hello";
const value_c = 1234;
const arr_c = ['aa','bb','cc','dd'];
const i_c = 5;
console.log("\nstr_c: ",str_c,"\nvalue_c: ",value_c,"\narr_c:",arr_c,"\ni_c: ",i_c);


// str_c =  "World";    //error : can not change values of const

// const str_c =  "World"; //error : can not redefine with const
// const value_c =  5678;   //error : can not redefine with const
// const arr_c =  ['ee','ff','gg','hh','ii']; //error : can not redefine with const
// const i_c = 10; //error : can not redefine with const
console.log("\nstr_c: ",str_c,"\nvalue_c: ",value_c,
            "\narr_c:",arr_c,"\ni_c: ",i_c);
{
    const i_c = 20;
    console.log("\ni_c in {}: ", i_c);
    let j_c = 30;
    console.log("\nj_c in {}: ", j_c);
}
console.log("\ni_c: ", i_c);
//console.log("\nj_c: ", j_c); // error: j_C can not access outside block
