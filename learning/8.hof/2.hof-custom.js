// syarat HOF
// 1. ada callback (function dalam parameter function), dan / atau
// function hello(cb) {
//     console.log('hello 1')
//     cb()
// }

// hello(() => {
//     console.log("hello 2")
// })

// 2. me return function lagi
// function sumCurry(a) {
//     return function(b) {
//         return a + b
//     }
// }

// console.log(sumCurry(2)(3))