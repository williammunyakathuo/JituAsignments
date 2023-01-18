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
//spliting the string into an array



// function checkLongest(str){

//     var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length;
//      }
//   }
//   document.write(longestWord);
    
// }
// checkLongest("Web Development Tutorial");



let cars = ["bema", "benzo", "volvo", "supra", "crown"];
let lastItem = cars.slice(-1);
console.log(`the last item in the cars array is ${lastItem}`);
console.log(` the cars array has ${cars.length} elements`);

// adding a property in an object

let book = { 
    author: 'Suzanne Collins', 
    title:  'Mockingjay: The Final Book of The Hunger Games',  
    readingStatus: false 
} 

book.published_on = new Date();
console.log(book.published_on);





