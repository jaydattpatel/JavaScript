/* 
 * Author : Jaydatt Patel
Destructur the array or object property and copy them in other variable or object without affecting original data.
*/
console.log("-----------0-----------");
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

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

//get copy id property of student
console.log("-----------1-----------");
console.log((id === student.id)); // check the same property 
var {id} = student; //copy id from student obj if not found then undefined 
console.log(id);
console.log((id === student.id));

//get copy subject property of student
console.log("-----------2-----------");
console.log((subjects === student.subjects));
var {subjects} = student; //copy subjects from student obj if not found then undefined 
console.log(subjects);
console.log((subjects === student.subjects));

//try to copy unkonwn property 
console.log("-----------3-----------");
console.log((pop === student.id)); // check the same property 
var {pop} = student; //copy pop from student obj if not found then undefined 
console.log(pop);
console.log((pop === student.id));

console.log("-----------4-----------");
var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
for(var i = 0; i < days.length ; i++)
{
    const {[i]: one , [i+1]: two} = days
    console.log(one,two)
}