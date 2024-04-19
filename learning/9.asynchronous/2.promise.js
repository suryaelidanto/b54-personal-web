// promise
// resolved => ditepati, 
// rejected => tidak ditepati, 
// pending => menunggu status

const janji = new Promise((resolve, reject) => {
    const isPay = true 
    
    if(isPay) return resolve("Sudah bayar hutang!")
        
    reject("Galbay hutang!")
})

janji
.then((value) => console.log(value))
.catch((error) => console.log(error))