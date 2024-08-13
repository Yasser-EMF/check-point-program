// task04.js

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

// Task 04: Awaiting Concurrent Requests
async function concurrentRequests() {
    const apiCall1 = simulateApiCall();
    const apiCall2 = simulateApiCall();

    try {
        const [response1, response2] = await Promise.all([apiCall1, apiCall2]);
        console.log('API 1 Response:', response1.data);
        console.log('API 2 Response:', response2.data);
    } catch (error) {
        console.error('An error occurred with concurrent requests:', error.message);
    }
}

// Example Usage:
concurrentRequests(); // Makes two API calls concurrently and logs the results
