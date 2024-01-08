// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100)
    {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy +=  10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10,name,age,energy)
    {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    
    goToWork() {
        this.xp += 10;
    }

}

// Task 3: Code an intern object, run methods
function intern() {
    var intern1 = new Worker(0, 10,"Bob", 21, 110);
    intern1.goToWork();
    return (intern1);
}
intern();
// Task 4: Code a manager object, methods
function manager() {
    var manager1 = new Worker(100, 30,"Alice", 30, 120);
    manager1.doSomethingFun();
    return (manager1);
}
manager();