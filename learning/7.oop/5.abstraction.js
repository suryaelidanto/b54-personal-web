class Phone {
    name = ""
    battery = 0
    screen = 0
    signal = 0

    constructor(name) {
        this.name = name
    }

    connectWifi() {
        // logic konek ke wifi
        if(this.signal > 50 && this.battery > 5) {
            wifiConnectSuccess()
        }
    }

    wifiConnectSuccess() {
        // 
    }
}

const apple = new Phone("I Phone")
apple.connectWifi()