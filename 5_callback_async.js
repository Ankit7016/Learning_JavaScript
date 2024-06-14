// Example function simulating an asynchronous operation with a callback
function fetchData(callback) {
    // Simulating fetching data asynchronously after 2 seconds
    setTimeout(() => {
        const data = "This is the fetched data";
        // Invoke the callback function and pass the fetched data to it
        callback(null, data); // Passing null as the error since there's no error in this example
    }, 2000);
}

// Callback function to handle the fetched data
function handleData(error, data) {
    if (error) {
        console.error("Error occurred:", error);
    } else {
        console.log("Fetched data:", data);
    }
}

// Call the fetchData function and pass the handleData callback
fetchData(handleData);





//===================================================================================================================================


// Example function simulating an asynchronous operation with a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data asynchronously after 2 seconds
        setTimeout(() => {
            const data = "This is the fetched data";
            // Resolve the Promise with the fetched data
            resolve(data);
        }, 2000);
    });
}

// Call the fetchData function using Promise chaining
fetchData()
    .then(data => {
        console.log("Fetched data:", data);
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });
//===================================================================================================================================



// Example function simulating an asynchronous operation with a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data asynchronously after 2 seconds
        setTimeout(() => {
            const data = "This is the fetched data";
            // Resolve the Promise with the fetched data
            resolve(data);
        }, 2000);
    });
}

// Async function using the async keyword
async function getData() {
    try {
        // Await the result of fetchData() function
        const data = await fetchData();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Call the async function
getData();
