const person1 = {
    name: "Surya",
    address: "Depok"
}

const person2 = {
    name: "Haidar",
    address: "Jakarta"
}

const person3 = {
    name: "Ravano",
    address: "Bengkulu"
}

const persons = [person1, person2, person3] // array of objects


// study case : make array of object from medium.com

// const article1 = {
//     author: 'Mark Humpries',
//     title: '2023: A Review of teh year neuroscience',
//     date: 'Dec 27, 2023'
// }

// const article2 = {
//     author: 'Cassie Kozyrkov',
//     title: 'Birds, bugs, and beauty : The winners of wiki Loves Earth 2023',
//     date: 'Dec 14, 2023'
// }

const articles = [
    {
        author: {
            name: "Mark Humphries",
            image: "https://idsafjoijfdsad.jpg"
        },
        title: '2023: A Review of teh year neuroscience',
        date: 'Dec 27, 2023',
        readingTime: "11 min read",
        category: "Psychology",
        image: "https://dsfdoisajgoidsajg.jpg"
    },
    {
        author: {
            name: "Cassie",
            image: "https://dsfdsafdsaf.jpg"
        },
        title: 'Birds, bugs, and beauty : The winners of wiki Loves Earth 2023',
        date: 'Dec 14, 2023',
        readingTime: "11 min read",
        category: "Motivation",
        image: "https://iadifjidsajfdsoifa.jpg"
    }
] // array of objects

console.log(articles)