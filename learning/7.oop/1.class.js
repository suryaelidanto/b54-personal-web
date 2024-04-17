class Dog { // pascal case
    // properties
   name = ""
   color = ""
   eyeColor = ""
   height = 0
   length = 0
   weight = 0

    constructor(name, color, eyeColor, height, length, weight) {
        this.name = name
        this.color = color
        this.eyeColor = eyeColor
        this.height = height
        this.length = length
        this.weight = weight
    }

    // methods
    sit() {
        console.log(`${this.name} is sitting`)
    }

    layDown() {
        console.log(`${this.name} is laying down`)
    }

    shake() {
        console.log(`${this.name} is shaking`)
    }

    come() {
        console.log(`${this.name} is coming`)
    }
}