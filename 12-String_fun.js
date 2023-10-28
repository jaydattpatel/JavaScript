/**
  * Author : Jaydatt Patel
  * String Functions
 */

console.log("Hello, World");
console.log("Hello " + "there, " + "World");//Not space add automatically
console.log("Hello","there,","World");//space add automatically


var str = "Hello";
console.log(str,'World');
var year = 2023;
console.log(str,'World',year);

// string.concat(string).concat(string).concate(string)...............
console.log("concate: ", str.concat('World').concat(year)); //

console.log(("Hello " + "there, " + "World").length);
console.log("str.length : ", str.length);

console.log("str.charAt(1) : ", str.charAt(1));
console.log("str.indexOf('l') : ", str.indexOf('l'));
console.log("str.lastIndexOf('l') : ", str.lastIndexOf('l'));

console.log("str.toUpperCase() : ", str.toUpperCase());
console.log("str.toLowerCase() : ", str.toLowerCase());

var spl = 'ho-ho-ho'.split('-');
console.log("'ho-ho-ho'.split('-') : ", spl);

//find or match string 
console.log("str.match('ll') : ", str.match('ll'));
console.log("str.match('He') : ", str.startsWith('He'));
console.log("str.match('lo') : ", str.endsWith('lo'));

//string padding
console.log("str.padStart(10,'*') : ", str.padStart(10,'*'));
console.log("str.padStart(10) : ", str.padStart(10));
console.log("str.padEnd(10,'#') : ", str.padEnd(10,'#'));
console.log("str.padEnd(10) : ", str.padEnd(10));

//substring(strart index)  , substring(strart index, end index)
console.log("str.substring(1) : ", str.substring(1));
console.log("str.substring(1,4) : ", str.substring(1,4));

//get new string with replace characters. 
console.log("str.replace('ll','LL') : ", str.replace('ll','LL'));

console.log("str.includes('ll') : ", str.includes('ll'));
console.log("str.repeat(2) : ", str.repeat(2));

console.log("'   Hello  '.trim() : ", '   Hello  '.trim());
console.log("'   Hello  '.trimStart() : ", '   Hello  '.trimStart());
console.log("'   Hello  '.trimEnd() : ", '   Hello  '.trimEnd());





