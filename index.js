
function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
 return word;
}

function isPalindrome(word) {
 const reversedWord = reverseString(word);
 if (word === reversedWord) {
   return true;
 } else {
   return false;
 }
}
/* 
 Add your pseudocode here
Read string from the user 
calculate the length of the string
initialize a variable reversed to store the reversed string
initialize i=this.length-1
repeat until i>=0
if string === reversed string
 output given string is a palindrome
else
 output given string is not a palindrome
stop
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