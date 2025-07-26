const palindromes = function (palindrome) {
  let cleanedPalindrome = palindrome.replace(/[^\w\s]|_/g, "").toLowerCase().replace(/\s+/g, '')
  let isPalindrome = cleanedPalindrome.split('').reverse().join('')
  if (cleanedPalindrome.toLowerCase() === isPalindrome) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
