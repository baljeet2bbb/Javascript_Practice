characterCount = (str) => {
    // Create an object to store the character count
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If the character is not in the object, add it with a count of 1
            charCount[char] = 1;
        }
    }

    // Return the object containing the character counts
    return charCount;
}

// Example usage:
const inputString = "hello world";
const result = characterCount(inputString);
console.log(result); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }