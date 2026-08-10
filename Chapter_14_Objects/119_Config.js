let config = {};
config.apiUrl = "https://api.example.com";
config.browser = "chrome";
config.headless = true;
config.timeout = 5000;
config.timeout = 10000; // Update the timeout value 
console.log(config); // Output: https://api.example.com
delete config.headless;
console.log(config); // Output: { apiUrl: 'https://api.example.com', browser: 'chrome',
