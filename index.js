//write a function that takes in  an argument(string)
//have that function return true if the word is pelled the same forwards and backwards 
// and false otherwise
let newWord = ''

function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('')
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
