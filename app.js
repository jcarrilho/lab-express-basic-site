// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// about route:
app.get('/purpose', (request, response, next) => response.sendFile(__dirname + '/views/purpose.html'));

// works route:
app.get('/examples', (request, response, next) => response.sendFile(__dirname + '/views/examples.html'));

// photo gallery route:
app.get('/photo', (request, response, next) => response.sendFile(__dirname + '/views/photo.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
    