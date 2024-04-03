function submitHandler() {
    // mengkap inputan dari form yang ada di contact.html
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;


    // Pengkondisian
    if (name == "") {
        return alert("please entered your name!")
    } else if (email == "") {
        return alert("please entered your email!")
    } else if (phone == "") {
        return alert("please entered your phone!")
    } else if (subject == "") {
        return alert("please entered your subject!")
    } else if (message == "") {
        return alert("please entered your message!")
    }

    // saya punya 2 apel
    // ibu saya menyuruh saya untuk memberikan 2 apel kepada paman
    // paman saya meminta dari ibu 2 apel

    // jika saya memeberikan hanya 1 apel kepada paman?
    //  returnnya apa? apa yang akan terjadi?
    //  #1 return paman tersenyum
    //  #2 return paman mengadu ke ibu

    // if (apel == 2){
    // return "paman senang"
    // } else if ( apel == 1 ) {
    // return "paman mengadu kepada ibu"
    // }

    // Menangkap isi dari inputan, ditampung ke data
    const data = {
        name, email, phone, subject, message
    }
    // alamat email yang dituju
    const yourEmail = "ikhsanp34@gmail.com"

    // manipulasi dom, untuk mengirimkan email
    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${message}`
    a.click();

    // melihat data
    console.log(data);

}




























// const form = document.querySelector("form")
// form.addEventListener("submit",()=> {
//     console.log()
// })