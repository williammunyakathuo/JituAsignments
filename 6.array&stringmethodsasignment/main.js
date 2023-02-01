//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

function removeDuplicates(arr) {
    return Array.from(new Set(arr.map(x => x.toLowerCase()))).map(x => x.toLowerCase());
  }

console.log(removeDuplicates(["william","William" , "mseera", "munyaka", "mseera"]));

//Write a JavaScript function to find an array contains a specific element?
console.log(['joe', 'jane', 'mary'].includes('jane')); 

//Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null?
function clearArray(arr) {
    return arr.filter(x => x !== false && x !== undefined && x !== "" && x !== 0 && x !== null);
  }
console.log(clearArray(3, 8, 23, "hello", " ", false, "45"));

//Write a function to reverse the words a string?
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse("Hello world"));












