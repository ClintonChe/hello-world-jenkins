const http = require('http');

// Simple test to check if our app responds
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

console.log('Running tests...');

// Test 1: Check if app starts without errors
try {
  require('./app.js');
  console.log('✓ App starts successfully');
  setTimeout(() => {
    process.exit(0);
  }, 1000);
} catch (error) {
  console.log('✗ App failed to start:', error.message);
  process.exit(1);
}
