console.log("forEach is working");

const singers = [
  "Adele",
  "Beyoncé",
  "Ed Sheeran",
  "Taylor Swift",
  "Bruno Mars",
  "Rihanna",
  "Justin Bieber",
  "Ariana Grande",
  "Shawn Mendes",
  "Billie Eilish",
];

const firsLetters = singers.map((name) => name[0]);
console.log(firsLetters);

const forEachResults = singers.forEach((n) =>
  console.log("coming from forEach", n.length % 2)
);

let numbersArray = [25, 38, 42, 49, 55, 63, 71, 89, 76, 82];
console.log(numbersArray);

const evenNumbers = numbersArray.filter((n) => n % 2 === 0);
console.log("even Nubmers", evenNumbers);



