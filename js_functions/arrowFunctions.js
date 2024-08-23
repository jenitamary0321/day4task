// 1. Print odd numbers in an array
const printOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
console.log(printOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

// 2. Convert all strings to title caps in a string array
const toTitleCaps = (strArray) => strArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCaps(["hello", "world"])); // Output: ["Hello", "World"]

// 3. Sum of all numbers in an array
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 4. Return all prime numbers in an array
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNumbers = (arr) => arr.filter(isPrime);
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]

// 5. Return all palindromes in an array
const isPalindrome = (str) => str === str.split('').reverse().join('');
const palindromeArray = (arr) => arr.filter(isPalindrome);
console.log(palindromeArray(["madam", "hello", "racecar", "world"])); // Output: ["madam", "racecar"]
