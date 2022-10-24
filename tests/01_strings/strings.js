/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  return str.includes( letter );
}

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

function cap(str, letter) {
  if (str.indexOf(letter) !== -1) {
    let char = str.indexOf(letter);
    return str[char + 1].toUpperCase();
  } else {
    return "sorry not found";
  }
}

function firstCharacter(str1, str2) {
  
  return str1[0].toLowerCase() === str2[0].toLowerCase() ? true : false;

}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
