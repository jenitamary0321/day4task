// 1. Print odd numbers in an array
(function(arr) {
    console.log(arr.filter(num => num % 2 !== 0));
})([1, 2, 3, 4, 5]); // Output: [1, 3, 5]

// 2. Convert all strings to title caps in a string array
(function(strArray) {
    console.log(strArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
})(["hello", "world"]); // Output: ["Hello", "World"]

// 3. Sum of all numbers in an array
(function(arr) {
    console.log(arr.reduce((sum, num) => sum + num, 0));
})([1, 2, 3, 4, 5]); // Output: 15

// 4. Return all prime numbers in an array
(function(arr) {
    const isPrime = function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    console.log(arr.filter(isPrime));
})([1, 2, 3, 4, 5, 6, 7]); // Output: [2, 3, 5, 7]

// 5. Return all palindromes in an array
(function(arr) {
    const isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    console.log(arr.filter(isPalindrome));
})(["madam", "hello", "racecar", "world"]); // Output: ["madam", "racecar"]

// 6. Return median of two sorted arrays of the same size
(function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    console.log((merged[mid - 1] + merged[mid]) / 2);
})([1, 3, 5], [2, 4, 6]); // Output: 3.5

// 7. Remove duplicates from an array
(function(arr) {
    console.log([...new Set(arr)]);
})([1, 2, 3, 2, 4, 1]); // Output: [1, 2, 3, 4]

// 8. Rotate an array by k times
(function(arr, k) {
    k = k % arr.length;
    console.log(arr.slice(-k).concat(arr.slice(0, -k)));
})([1, 2, 3, 4, 5], 2); // Output: [4, 5, 1, 2, 3]
