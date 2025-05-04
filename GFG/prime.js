//prime no definition      
// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
// A prime number is a number that is only divisible by 1 and itself.
// For example, 2, 3, 5, 7, 11, and 13 are prime numbers.


function isPrime(num) {

   if(num <=1) {
        return false;
    } // 0 and 1 are not prime numbers

   for(let i=2;i<num/2;i++)
    {
        if(num % i === 0)
            return false; // If num is divisible by any number other than 1 and itself
    }
   return true;
}

console.log(isPrime(4)); // true    
console.log(isPrime(5)); // true
console.log(isPrime(6)); // true
console.log(isPrime(8)); // true
console.log(isPrime(9)); // true
console.log(isPrime(11)); // true













