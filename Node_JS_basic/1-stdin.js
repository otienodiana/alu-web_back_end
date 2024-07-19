// Import the readline module to handle input and output
const readline = require('readline');

// Create an interface to read from stdin and write to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for the 'line' event which is triggered when the user inputs a line
rl.on('line', (input) => {
  // Display the user's name
  console.log(`Your name is: ${input}`);
  
  // Close the readline interface and display the closing message
  rl.close();
});

// Listen for the 'close' event which is triggered when the readline interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
});
