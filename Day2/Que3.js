// Demonstrating setTimeout
console.log("start"); // Log "start" to the console

setTimeout(() => {
    console.log("inside timeout"); // Log "inside timeout" after 2000 milliseconds (2 seconds)
}, 2000);

console.log("end"); // Log "end" to the console immediately
console.log("-----------------------------"); // Log a separator for clarity

// Demonstrating setInterval
console.log("started"); // Log "started" to the console

setInterval(() => {
    console.log("inside interval"); // Log "inside interval" every 1000 milliseconds (1 second)
}, 1000);

console.log("ended"); // Log "ended" to the console immediately
console.log("-----------------------------"); // Log a separator for clarity

// Demonstrating setImmediate
console.log("Starting"); // Log "Starting" to the console

setImmediate((A) => {
    console.log(`Immediate: ${A}`); // Log "Immediate: 1000" immediately after I/O events
}, 1000);

console.log("ending"); // Log "ending" to the console immediately
console.log("-----------------------------"); // Log a separator for clarity
