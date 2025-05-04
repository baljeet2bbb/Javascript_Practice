function power(x, n) {
  if (n === 0) return 1;
  if (n % 2 === 0) {
    const half = power(x, n / 2);
    return half * half;
  } else {
    return x * power(x, n - 1);
  }
}
console.log(power(2, 3)); // Output: 8
console.log(power(3, 4)); // Output: 81
console.log(power(5, 0)); // Output: 1

console.log(power(7, 2)); // Output: 49
