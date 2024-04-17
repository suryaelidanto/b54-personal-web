class Invoice { // access modifier + proteksi properti dan method 
    #price = 0

    static name = "surya"

    set price(value) {
        if(value < 1) {
            throw new Error("Value cannot <= 0")
        }

        this.#price = value
    }

    get price() {
        return this.#price
    }
}

const struk = new Invoice()
struk.price = 100
console.log(struk.price)
