const express = require('express');
const router = express.Router();

// 1. In the command line, navigate to the server directory, then run the command npm install aws-sdk
// 2. Configure the service interface object as follows:

const AWS = require("aws-sdk");
const awsConfig = {
  region: "us-east-2",
  endpoint: "http://localhost:8000",

};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = "Thoughts";

// In the preceding code, we're using some familiar configuration assignments to connect with the local DynamoDB instance. 
// The endpoint property in awsConfig points to the local DynamoDB instance. 
// We use the DocumentClient class to use native JavaScript objects to interface with the dynamodb service object. 
// We're also setting the table value to "Thoughts".

// Pause
// Why did we not lock the version number for the DocumentClient class like we did for the DynamoDB class?
// While DynamoDB class had two versions, DocumentClient has only one, so there is no need to lock the version number for DocumentClient.

