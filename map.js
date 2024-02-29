const numbers = [
  2, 7, 14, 23, 30, 41, 56, 63, 72, 85, 92, 101, 114, 127, 132, 145, 156, 163,
  172, 189,
];

const doubledArray = [];
for (let i = 0; i < numbers.length; i++) {
  doubledArray.push(numbers[i] * 2);
}
// console.log(doubledArray);

const secondDouble = [];

for (const num of doubledArray) {
  secondDouble.push(num * 2);
}
// console.log("coming from line number 18", secondDouble);

const doubleIt = (num) => num * 2;
const result = numbers.map(doubleIt);
console.log("from line number 22", result);

// what is map mathod does actually >
//  loop through each element of the the array and do the operation that you passed in the callback function and
// hold the result from each operation in an array and finally returns you the the array
/*

//Map একটা array এর উপর  যখন তুমি চালাও  তারপরে তুমি যেই ফাংশন টা দিবা সেই ফাংশন টা  সে প্রত্ত্যেক টা উপাদানের উপর চালাবে   , চালাইয়া  তুইমার  ঐ ফাংশন টা থেকে যেই রেজাল্ট টা আসবে  সে নিজে ইন্টারনালি একটা array এর মধ্যে রাখবে  তারপরে রেসাল্ট এর array টা তোমারে return করবে ।
*/

const doubleIt2 = n => n * 2;
const output = numbers.map(n => n * 2)
console.log('output', output);


const singers = ["Adele", "Beyoncé", "Ed Sheeran", "Taylor Swift", "Bruno Mars", "Rihanna", "Justin Bieber", "Ariana Grande", "Shawn Mendes", "Billie Eilish"];


const firsLetters = singers.map(name => name[0]);
console.log(firsLetters);


const forEachResults = singers.forEach(n => console.log( 'coming from forEach', n));