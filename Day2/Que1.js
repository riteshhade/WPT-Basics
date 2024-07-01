// Function that returns a Promise which divides the given number by a random number
function divideByRandomNumber(num) {
    // Return a new Promise
    return new Promise((resolve, reject) => {
        // Generate a random number between 1 and 11 (exclusive of 11)
        const randomNum = (Math.random() * 10) + 1;
        console.log(randomNum); // To display the random number
        
        // Check if the random number is exactly 1
        if (randomNum === 1) {
            // If random number is 1, reject the Promise with an error message
            reject("Random number is 1, division not allowed....");
        } else {
            // Otherwise, calculate the result of the division
            const result = num / randomNum;
            // Resolve the Promise with the result
            resolve(result);
        }
    });
}

// Call the function and handle the Promise
divideByRandomNumber(10)
    .then(result => console.log(`Result is ${result}`)) // If resolved, log the result
    .catch(error => console.log(error)); // If rejected, log the error

