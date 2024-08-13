// Simulating an API call with a delay
async function simulateApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Randomly succeed or fail
            if (success) {
                resolve({ data: 'Fetched data from API' });
            } else {
                reject(new Error('API call failed'));
            }
        }, 1000);
    });
}

// Task 02 & 03: Awaiting a Call and Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await simulateApiCall();
        console.log(response.data);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Example Usage:
awaitCall(); // Attempts to fetch data, handles success or failure gracefully

