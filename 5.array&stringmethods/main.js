//charAt() returns the character at a specified index (position) in a string.

let cohort = "The Jitu Cohort 11";
let letterOne = cohort.charAt(0);
let letterTwo = cohort.charAt(1);
let lastLetter = cohort.charAt(cohort.length-1);

console.log(`The first letter is ${letterOne}`);
console.log(`The second letter is ${letterTwo}`);
console.log(`The last letter is ${lastLetter}`);

document.write(`The first letter is ${letterOne} <br> The second letter is ${letterTwo} <br> The last letter is ${lastLetter}`);

//charCodeAt() returns the Unicode of the character at a specified position in a string.

let codeOne = cohort.charCodeAt(0);
let codeTwo = cohort.charCodeAt(cohort.length-1);

console.log(`The code of the first letter is ${codeOne}`);
console.log(`The code of the last letter is ${codeTwo}`);

document.write(`<h3> The charCodeAt() method</h3> The code of the first letter is ${codeOne}<br> The code of the last letter is ${codeTwo}`)

// javascript array methods
//map() creates a new array from calling a function for every array element.
document.write('<h2> Javascript Array Methods</h2> <h3> The map() method </h3>')

const randomNumbers = [5, 44, 32, 24];
const mappedArr = randomNumbers.map(myFunction)

function myFunction(num) {
  console.log (num * 10);
}
//The unshift() method adds new elements to the beginning of an array.
document.write('<h3>The unshift() method</h3>')


const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(`The contatent of the fruits array before using the unshift() method<br>`)
for (let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
    document.write(` ${fruits[i]}<br>`)
}


fruits.unshift("Lemon","Pineapple");
document.write(`<br>The content of the fruits array
 after using the unshift() method<br>`)
for (let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
    document.write(` ${fruits[i]}<br>`)
}
