class Animal {
    brain  = true
    legs = 0
}

class Human extends Animal {
    legs = 2
    eyesCount = 2 
}

class Pet extends Animal {
    legs = 4
    fleas = 0 
}

class Dog extends Pet {
    fleas = 8
}

class Cat extends Pet {
    fleas = 4
}