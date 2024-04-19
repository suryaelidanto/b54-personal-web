const xhr = new XMLHttpRequest()

// CRUD => CREATE, READ, UPDATE, DELETE

xhr.open("GET", "https://api.npoint.io/866829d0e4851e873f3a", true) 

xhr.onerror = () => {
    console.log("Network error!")
}

xhr.onload = () => {
    console.log(xhr.response)
}

xhr.send()
