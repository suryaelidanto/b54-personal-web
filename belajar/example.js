//  Tipe data Primitif
// string
let name = "Widodo";

// number
let age = 21;

// boolean
let status = true;

// array
var person = ["John", 25, true]
//              0     1    2
// harap diingat bahwa setiap indeks pada array selalu
// dimulai dari 0

console.log(person);

console.log("Indeks ke-0 :", person[0]);
console.log("Indeks ke-1 :", person[1]);
console.log("Indeks ke-2 :", person[2]);

const user = {
    name: "aliando",
    age: 30,
    email: "aliando@gmail.com",
    address: {
        city: " Jakarta",
        country: "Indonesia"
    }
}

console.log(user);

console.log("Nama pengguna : ", user.name);
console.log("Umur pengguna : ", user.age);
console.log("Email pengguna : ", user.email);
console.log(user.address.country);
// console.log(user["address"]["country"]);

var mahasiswa = [
    {
        name: "Xander",
        ager: 22,
        status: true
    },
    {
        name: "Budi",
        age: 50,
        status: false
    }
]

console.log(mahasiswa);
console.log(mahasiswa[0].name);


// Push dalam Array
let fruits = [];

console.log("Log pertama: ", fruits);

fruits.push("Apple")
fruits.push("Banana")
fruits.push("Lemon")
fruits.push("Orange")

console.log("Log kedua: ", fruits);

// unshift
fruits.unshift("Mango")
fruits.unshift("Watermelon")

console.log("Log kedua: ", fruits);

// Untuk menginputkan data secara berurutan menggunakan push
// Untuk menginputkan data didepan secara berurutan menggunakan unshift


let students = [
    {
        name: "Arre",
        age: 17,
        status: true
    },
    {
        name: "Ikhsan",
        age: 99
    },
    {
        name: "Ansha",
        age: 88
    }
]

console.log("Belum ada data baru: ", students);

let newStudent = { name: "Yurino", age: 77 }

students.push(newStudent)

console.log("Ada murid baru : ", students);


let murid = [
    {
        name: "someone",
        age: 11
    },
    {
        name: "nobody",
        age: 1
    }
]

console.log("sebelum ditambahkan data baru pada indeks:", murid);

murid[0].status = true

console.log("sesudah ditambahakan data: ", murid);