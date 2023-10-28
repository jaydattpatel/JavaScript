/*
 * Author : Jaydatt Patel
class syntex:
1)  class class_name{
            constructor(){
                .........
            }
            methods(){
                ........
            }
        }

2)  const class_name = class {
            constructor(){
                .........
            }
            methods(){
                ........
            }
        }

*/
class Car {
    constructor(col,spd){
        this.color = col;   //color var automatically create using constructor
        this.speed = spd;   //speed var automatically create using constructor
    }

    turbo(){        //method without function keyword
        console.log("Turbo On");
    }
}
console.log("Type :",Car);

var car1 = new Car();
car1.turbo();

var car2 = new Car('Red',150);
console.log(car2.color,car2.speed);




