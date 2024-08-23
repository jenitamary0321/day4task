// anonymousFunctions.js

// 1. Print odd numbers in an array
const printOddNumbers = function(arr) {
    return arr.filter(num => num % 2 !== 0);
};
console.log(printOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

// 2. Convert all strings to title caps in a string array
const toTitleCaps = function(strArray) {
    return strArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
console.log(toTitleCaps(["hello", "world"])); // Output: ["Hello", "World"]

// 3. Sum of all numbers in an array
const sumArray = function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
};
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 4. Return all prime numbers in an array
const isPrime = function(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNumbers = function(arr) {
    return arr.filter(isPrime);
};
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]

// 5. Return all palindromes in an array
const isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
};
const palindromeArray = function(arr) {
    return arr.filter(isPalindrome);
};
console.log(palindromeArray(["madam", "hello", "racecar", "world"])); // Output: ["madam", "racecar"]

// 6. Return median of two sorted arrays of the same size
const findMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};
console.log(findMedian([1, 3, 5], [2, 4, 6])); // Output: 3.5

// 7. Remove duplicates from an array
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2, 3, 4]

// 8. Rotate an array by k times
const rotateArray = function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
