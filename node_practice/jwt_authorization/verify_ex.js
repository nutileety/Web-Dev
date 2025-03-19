const jwt = require('jsonwebtoken');
const secret = '123456abc';

// Create a simple token
const token = jwt.sign({ username: 'testuser'}, secret, { algorithm: 'HS256'});

console.log('Generated Token:', token);

// Verify the token
try {
    const decoded = jwt.verify(token, secret);
    console.log('Decoded Payload:', decoded);
} catch (err) {
    console.log('Error verifying token:', err);
}
