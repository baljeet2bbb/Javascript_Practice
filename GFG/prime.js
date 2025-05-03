//prime no definition      
// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
// A prime number is a number that is only divisible by 1 and itself.
// For example, 2, 3, 5, 7, 11, and 13 are prime numbers.


function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If num is divisible by any number other than 1 and itself
    }
    return true; // num is prime
}
console.log(isPrime(7)); // true
console.log(isPrime(13)); // true
console.log(isPrime(10)); // true
console.log(isPrime(1)); // true
console.log(isPrime(0)); // true
console.log(isPrime(-5)); // true
console.log(isPrime(2)); // true

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i); // Print prime numbers between 1 and 100
    }
}
// Compare this snippet from GFG/prime.js:
// function isPrime(num) {
//     if (num <= 1) return false; // 0 and 1 are not prime numbers
//     for (let i = 2; i <= Math.sqrt(num); i++) {  
//         if (num % i === 0) return false; // If num is divisible by any number other than 1 and itself
//     }
//     return true; // num is prime
// }
// console.log(isPrime(7)); // true
sdjsbajkfj
// console.log(isPrime(13)); // true
// console.log(isPrime(10)); // true
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i); // Print prime numbers between 1 and 100
    }
}   
// Compare this snippet from GFG/prime.js:
// function isPrime(num) {  
