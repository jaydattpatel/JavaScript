/*
 * Author : Jaydatt Patel
RegExp :
The RegExp object is used for matching text with a pattern.

Literal notation and constructor:
- There are two ways to create a RegExp object: a literal notation and a constructor.
- The literal notation takes a pattern between two slashes, followed by optional flags, after the second slash.
- The constructor function takes either a string or a RegExp object as its first parameter and a string of optional flags as its second parameter.

 */
const re = /ab+c/i; // literal notation
console.log(re);
const re1 = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
console.log(re1);

const re2 = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
console.log(re2);

//In the replacement text, the script uses $1 and $2 to indicate the results of the corresponding matching parentheses in the regular expression pattern.
const re3 = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re3, "$2, $1");
console.log(newstr);

//The default line ending varies depending on the platform (Unix, Windows, etc.). The line splitting provided in this example works on all platforms.
const text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]


//Using regular expression on multiple lines
const s = "Please yes\nmake my day!";
console.log(s.match(/yes.*day/));// Returns null
console.log(s.match(/yes[^]*day/));/* Returns [
    'yes\nmake my day',
    index: 7,
    input: 'Please yes\nmake my day!',
    groups: undefined
  ]*/
console.log(s.match(/make[^]*day/));/* Returns [
    'make my day',
    index: 11,
    input: 'Please yes\nmake my day!',
    groups: undefined
  ] */