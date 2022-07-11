let numbers = [2, 3, 5, 8];
// let number = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     number.push(result);

// }
// console.log(number);


// //way one
// function square (element){
//     return element * element;
// }

// //way two<<<<<<<<<<<<<<<<<
// const square = x => x * x; 

// //way three
//  const result = numbers.map(function(element){
//    return (element * element);
// })
// console.log(result);

//way four
// const result1 = numbers.map(x => x * x);
// console.log(result1);




let myNumbers = [15, 45, 85, 45, 65, 12];

//when you squae a function
const myResult = myNumbers.map(x => x * x);
console.log(myResult);

//when you find bigger number from your selected number
const bigger = myNumbers.filter (x => x > 60);
console.log(bigger);

//when you find smaller number from your selected number
const smaller = myNumbers.filter (x => x < 60);
console.log(smaller);








let newNumbers = [45, 62, 75, 15, 35];

const newResult = newNumbers.map(x => x * x);
console.log(newResult);

const ourNumber = newNumbers.filter(x => x > 5);
console.log(ourNumber);