// task05.js

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

// Task 05: Awaiting Parallel Calls
async function parallelCalls(urls) {
    const fetchPromises = urls.map(url => simulateApiCall()); // Replace with actual fetch call

    try {
        const responses = await Promise.all(fetchPromises);
        responses.forEach((response, index) => {
            console.log(`Response from URL ${urls[index]}:`, response.data);
        });
    } catch (error) {
        console.error('An error occurred during parallel calls:', error.message);
    }
}

// Example Usage:
const urls = ['url1', 'url2', 'url3']; // Replace with actual URLs
parallelCalls(urls); // Fetches data from each URL concurrently
