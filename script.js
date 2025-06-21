// Global variables
let apiKey = '';
const rootPath = 'https://mysite.itvarsity.org/api/ContactBook/';

// Check if API key exists when page loads
function checkApiKey() {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey) {
        apiKey = storedApiKey;
        // Show contacts page (Show page)
        showContacts();
        // Get contacts (API call)
        getContacts()
    }
}