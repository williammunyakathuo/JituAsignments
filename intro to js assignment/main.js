// functions which chekcs if a number is even or odd

let numbers = prompt("enter a number","number here");
function oddEven (number){
    if(number%2 == 0){
        document.write(`Your number ${number} is even` )
    }else{
        document.write(`Your number ${number} is odd`)
    }
};

oddEven(numbers);

//checking for the longest word in a string variable

function findLongest (str){
    let splitStr = str.split(' ');
    let longest = splitStr.sort(function(a, b){
        return b.length - a.length;
    });
console.log(` the longest word in the string is "${longest[0]}"`);
}

findLongest("Web Development Tutorial")



//last item in an aray and number of elements in an array

let cars = ["bema", "benzo", "volvo", "supra", "crown"];
let lastItem = cars.slice(-1);
console.log(`Last item in the cars array is ${lastItem}`);
console.log(`Cars array has ${cars.length} elements`);

// adding a property in an object

let book = { 
    author: 'Suzanne Collins', 
    title:  'Mockingjay: The Final Book of The Hunger Games',  
    readingStatus: false 
} 

book.published_on = new Date();
console.log(book.published_on);





