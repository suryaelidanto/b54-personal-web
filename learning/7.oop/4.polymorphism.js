class Animal {
    speak() {
        console.log("Please define an animal to speak!")
    }
}

class Duck extends Animal { // override an extending classes (menimpa)   
    speak() {
        console.log("Qwack!")
    }
}

class Dog extends Animal {
    speak() {
        console.log("Whoof!")
    }
}

class Cat extends Animal {
    speak() {
        console.log("Miaw!")
    }
}

const duck = new Duck()
console.log(duck.name)