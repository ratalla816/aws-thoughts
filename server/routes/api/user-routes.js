const express = require('express');
const router = express.Router();

// 1. In the command line, navigate to the server directory, then run the command npm install aws-sdk
// 2. Configure the service interface object as follows:

const AWS = require("aws-sdk");
const awsConfig = {
region: "us-east-2"
// endpoint: "http://localhost:8000", 
};

AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = "Thoughts";

// In the preceding code, we're using some familiar configuration assignments to connect with the local DynamoDB instance. 
// The endpoint property in awsConfig points to the local DynamoDB instance. 
// We use the DocumentClient class to use native JavaScript objects to interface with the dynamodb service object. 
// We're also setting the table value to "Thoughts".

// Pause..
// Why did we not lock the version number for the DocumentClient class like we did for the DynamoDB class?
// While DynamoDB class had two versions, DocumentClient has only one, so there is no need to lock the version number for DocumentClient.



// In the preceding statement, we'll use the scan method to return all the items of the table. 
// We also added a status code in case there was an internal error with retrieving the data from the table. 
// Notice that the data in the table is actually in the Items property of the response, so data.Items was returned.

// Test the Routes
// Now let's test this route by starting the Express.js server and using Insomnia to inspect the responses. 
// From the root directory, use the following command to run the server.js file:
// node ./server/server.js

// We should see the following message at the command prompt once the server is running:

// 🌎  ==> API Server now listening on PORT 3001!

// To test the GET route, open Insomnia and complete the following steps:

// Create a new folder called thoughts.

// Create a new request in the thoughts folder called all thoughts.

// In the address bar, insert the route that you created: localhost:3001/api/users.

// Select the GET method in the address bar from drop-down menu.

// Select Send.

// If we get a response with data, we know that we created the route and seeded the data into the table correctly.

// In the preceding route, we'll use query parameters to pass the username from the client to the server. 
// We'll capture the query parameter with the req.params object.
// Next we'll declare params to define the query call to DynamoDB. 
// We'll use the username retrieved from req.params to provide a condition for the query, because we're only interested in one user. 
// The goal is to find all the thoughts from this user.


// Similar to the WHERE clause in SQL, the KeyConditionExpression property is used to filter the query with an expression.

router.get('/users', (req, res) => {
  const params = {
    TableName: table
  };
  // Scan return all items in the table
  dynamodb.scan(params, (err, data) => {
    if (err) {
      res.status(500).json(err); // an error occurred
    }else {
      res.json(data.Items)
    }
  });
})

// get thoughts from a user //
router.get('/users/:username', (req, res) => {
  console.log(`Querying for thought(s) from ${req.params.username}.`);
  
  const params = {
    TableName: table,
    KeyConditionExpression: "#un = :user",
    ExpressionAttributeNames: {
        "#un": "username",
        "#ca": "createdAt",
        "#th": "thought",
        "#img": "image"
    },

    ExpressionAttributeValues: {
        ":user": req.params.username
    },

    ProjectionExpression: "#un, #th, #ca, #img",
    ScanIndexForward: false
};

dynamodb.query(params, (err, data) => {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
    } else {
        console.log("Query succeeded.");
        res.json(data.Items)
    }
  });
}); // closes the route for router.get(users/:username)

// Create new user at /api/users
router.post('/users', (req, res) => {
const params = {
    TableName: table,
    Item: {
        "username": req.body.username,
        "createdAt": Date.now(),
        "thought": req.body.thought,
        "image": req.body.image
    }
};

// Because we're dealing with a NoSQL database, 
// we don't have to adjust the table schema or perform a migration like we would for a relational database.

dynamodb.put(params, (err, data) => {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        res.json({ "Added": JSON.stringify(data, null, 2) });
    }
 });
});  // ends the route for router.post('/users')


module.exports = router;