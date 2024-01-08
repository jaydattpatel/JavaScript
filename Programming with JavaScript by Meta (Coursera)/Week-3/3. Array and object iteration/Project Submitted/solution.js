// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (const x of dairy) {
        console.log(x);
    }
}
logDairy();

// Task 2
const animal = {
canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const x of (Object.keys(bird))) {
        console.log(x+":"+" "+bird[x]);
    }
}
birdCan();

// Task 3

function animalCan() {
    for (const x in bird) {
        console.log(x+":"+" "+ bird[x]);
    }
}
animalCan();