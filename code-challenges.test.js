// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    describe('fib', () => {

    it("takes in any number (greater than 2) and returns an array that length containing the numbers inside the Fibonacci sequence", () => {
      
    expect(fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
  });

//   // FAIL  ./code-challenges.test.js
//   //   ReferenceError: fib is not defined

// b) Create the function that makes the test pass.

//PsuedoCode: 
// Create a function called fib that is equal to number and assign an array to 0 and 1
//a for loop will be created that iterates array length, and sums the previous index position with the current
// Each number iterated will push to the new array
// The array will be sliced at index 1 to skip the 0 index


const fib = (number) => {
  let arr = [0,1]
  for(let i = 2; i<=number; i++){
    arr.push(arr[i-2] + arr[i-1])
  }
  return arr.slice(1)
}
console.log(fib(fibLength1))
console.log(fib(fibLength2))


// PASS  ./code-challenges.test.js
// ● Console

//   console.log
//     [ 1, 1, 2, 3, 5, 8 ]

//     at Object.log (code-challenges.test.js:49:9)

//   console.log
//     [
//       1,  1,  2,  3,  5,
//       8, 13, 21, 34, 55
//    ]

// //  at Object.log (code-challenges.test.js:50:9)

// * I received a test suite failed to run error however my outputs passed.



// // // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // // a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]

describe('sortOdd', () => {

  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    
  expect(sortOdd(fullArr1)).toEqual([-9, 7, 9, 199]);
  expect(sortOdd(fullArr2)).toEqual([-823, 7, 23]);
   });
  });

//   // FAIL  ./code-challenges.test.js
//   // ● sortOdd › takes in an array and returns a new array of only odd numbers sorted from least to greatest

//   //   ReferenceError: sortOdd is not defined

// ////// b) Create the function that makes the test pass.

// //PsuedoCode:
// // Create a function called onlyOdd, also create a variable called oddNums to store the new array
// // The .filter method will be used to filter through the values offullArr1 and fullArr2.
// // The typeof command will be used to find number values
// // Odd numbers will be outputed by setting up a modulo that determines which number are not equal to 0
// // The .sort method will be used on oddNums

const sortOdd = (array) => {
let oddNums = array.filter((value)=> typeof value === 'number' && value % 2 !==0)
  return oddNums.sort((a,b) => a-b)
}
console.log(sortOdd(fullArr1))
console.log(sortOdd(fullArr2))

// PASS  ./code-challenges.test.js
// ● Console

//   console.log
//     [ -9, 7, 9, 199 ]

//     at Object.log (code-challenges.test.js:110:9)

//   console.log
//     [ -823, 7, 23 ]

//     at Object.log (code-challenges.test.js:111:9)

    //* Received test suite failed error but received a pass on my output


// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

describe('aSum', () => {
  it("takes in an array, returns an array of the accumulating sum", () => {
    expect(aSum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(aSum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(aSum(numbersToAdd3)).toEqual([]);
  })
})

  // FAIL  ./code-challenges.test.js
  // ● aSum › takes in an array, returns an array of the accumulating sum

  //   ReferenceError: aSum is not defined

// // b) Create the function that makes the test pass.

//PsuedoCode:
// A function will be created called aSum with array declared as the value
// A for loop will be used to itterate over an array with the output being the sum of the array
//Console log will be used to display 'numbersToAdd' variable

const aSum = (array) => {
  for(i = 1; i <array.length; i++ ){
  array[i] = array[i] + array[i - 1]
}
  return array
}

console.log(aSum(numbersToAdd1));
console.log(aSum(numbersToAdd2));
console.log(aSum(numbersToAdd3));

//* I have been having trouble getting this one to pass. Below is the error message I receive. I have tried rearranging the syntax in the for loop but have not been able to get it to pass.

// ● aSum › takes in an array, returns an array of the accumulating sum

// expect(received).toEqual(expected) // deep equality

// - Expected  - 3
// + Received  + 3

//   Array [
//     2,
// -   6,
// -   51,
// -   60,
// +   8,
// +   59,
// +   119,
//   ]

//   143 | describe('aSum', () => {
//   144 |   it("takes in an array, returns an array of the accumulating sum", () => {
// > 145 |     expect(aSum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
//       |                                 ^
//   146 |     expect(aSum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
//   147 |     expect(aSum(numbersToAdd3)).toEqual([]);
//   148 |   })