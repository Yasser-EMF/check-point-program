// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
        console.log(value);
    }
}

// Example Usage:
const array = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(array); // Logs each value with a 1-second delay


