// Define the URL of the API
const apiUrl = 'https://api.example.com/data';

// Function to fetch data from the API
async function fetchData() {
    try {
        // Fetch data from the API using the fetch() method
        const response = await fetch(apiUrl);

        // Check if the response is successful (status code in the range of 200-299)
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Log the fetched data
        console.log('Fetched data:', data);

        // You can now manipulate or use the fetched data as needed
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Call the fetchData function to fetch data from the API
fetchData();
