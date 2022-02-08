// we'll create the back end of the Deep Thoughts application. 
// First we'll create the package-json file in the server. 
// This will allow us to install express and help create the API routes.
// Execute the following command inside the server directory: npm init --y
// Next we'll install the express package, as follows: npm install express.


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/api/user-routes');
const imageRoutes = require('./routes/api/image-upload');

// express middleware, used to be bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// app.use(require('./routes'));
app.use('/api/', userRoutes);
app.use('/api/', imageRoutes);

// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

// We need to create the routes directory in the server directory and create a user-routes.js file in the routes directory.
// The API routes will use /api/.