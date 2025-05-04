function factorial(n) {
  if (n < 0) {
    return "undefined";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-1)); // Output: "undefined"
console.log(factorial(1)); // Output: 1
console.log(factorial(10)); // Output: 3628800
