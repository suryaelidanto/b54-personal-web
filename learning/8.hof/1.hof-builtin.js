// built in hof => HOF bawaan javascript
// forEach, map, filter, reduce

// foreach kapan dipakai
// 1. mau manipulasi data aslinya, walaupun nggak disarankan juga sebenernya
// 2. mau looping doang, mirip2 ketika temen2 pakai for, while biasa


const numbers = [1,2,3,4,5]

// forEach

// for(let index = 0; index < numbers.length; index++) {
    //     numbers[index] = numbers[index] * 2
    // }

// numbers.forEach((number, index) => { 
//    numbers[index] = number * 2
// })

// console.log(numbers)

// const letters = ["a", "b", "c"];

// letters.forEach((letter, index) => {
//     letters[index] = letter.toUpperCase() 
// });

// console.log(letters);

// map
// const newNumbers = numbers.map(number => number * 2) // [2, 4, 6, 8, 10]

// console.log(newNumbers)

// filter (return sebuah boolean (true or false))
// const filteredNumbers = numbers.filter(number => number % 2 == 0)

// console.log(filteredNumbers)

// reduce
// const sum = numbers.reduce((previousNumber, currentNumber) => {
//     // console.log("previousNumber", previousNumber)
//     // console.log("currentNumber", currentNumber)
//     return previousNumber + currentNumber // 10 + 5
// }, 0) // 15

// console.log("jumlahnya adalah : ", sum)

