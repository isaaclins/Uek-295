const http = require('http');

// Extract URLs from command-line arguments (assuming they are provided)
const urls = process.argv.slice(2);

// Function to make HTTP GET request to a URL and collect its content
function getContent(url, callback) {
    http.get(url, (response) => {
        let content = '';
        response.setEncoding('utf8'); // Set encoding to interpret data as string
        response.on('data', (data) => {
            content += data;
        });
        response.on('end', () => {
            callback(null, content);
        });
    }).on('error', (error) => {
        callback(error);
    });
}

// Array to store content from each URL in the order they are provided
const contentArray = [];

// Function to print content in the correct order
function printContent() {
    contentArray.forEach((content) => {
        console.log(content);
    });
}

// Track the number of completed requests
let completedRequests = 0;

// Collect content from all URLs
urls.forEach((url, index) => {
    getContent(url, (error, content) => {
        if (error) {
            console.error(`Error fetching URL ${url}: ${error.message}`);
            // Store an empty string for failed requests
            contentArray[index] = '';
        } else {
            // Store content in the correct index
            contentArray[index] = content;
        }
        // Check if all requests have completed
        completedRequests++;
        if (completedRequests === urls.length) {
            printContent();
        }
    });
});
