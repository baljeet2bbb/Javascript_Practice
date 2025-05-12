function generateUsers(count) {
    const users = [];
    const getRandomString = (length) => Math.random().toString(36).substring(2, 2 + length);
    for (let i = 0; i < count; i++) {
        const username = getRandomString(Math.floor(Math.random() * 13) + 3);
        const email = getRandomString(5) + "@" + getRandomString(5) + ".com";
        const password = getRandomString(4) + "A1"; // Ensures uppercase and digit
        users.push({ username, email, password });
    }
    return users;
}
 
function validateUsers(users) {
    return users.map(user => {
        const errors = [];
        if (!/^[a-zA-Z0-9]{3,15}$/.test(user.username)) errors.push("Invalid username");
        if (!user.email.includes("@") || !user.email.endsWith(".com")) errors.push("Invalid email");
        if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(user.password)) errors.push("Invalid password");
        return { user, isValid: errors.length === 0, errors };
    });
}
 
function assertValidUsers(results) {
    const validCount = results.filter(r => r.isValid).length;
    const invalidUsers = results.filter(r => !r.isValid);
    console.log(`${validCount} users are valid, ${invalidUsers.length} users are invalid.`);
    invalidUsers.forEach((result, index) => {
        console.log(`User ${index + 1}: Invalid - ${result.errors.join(", ")}`);
    });
}
 
function retryValidation(users, retries) {
    let validationResults = validateUsers(users);
    let attempts = 0;
    while (validationResults.some(r => !r.isValid) && attempts < retries) {
        console.log(`Retry attempt ${attempts + 1}...`);
        validationResults = validationResults.map(r => 
            r.isValid ? r : { user: generateUsers(1)[0], isValid: false, errors: [] }
        );
        validationResults = validateUsers(validationResults.map(r => r.user));
        attempts++;
    }
 
    console.log(`Retry finished after ${attempts} attempt(s).`);
    assertValidUsers(validationResults);
}
 
// Example usage:
const userCount = 5;
const retryCount = 3;
const users = generateUsers(userCount);
const validationResults = validateUsers(users);
assertValidUsers(validationResults);
retryValidation(users, retryCount);