// At the top of the file, we'll be importing the aws-sdk package, as follows:

const AWS = require('aws-sdk');

//Then we'll modify the AWS config object that DynamoDB will use to connect to the local instance, as shown in the following example:

AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
  });

//   Next, create the DynamoDB service object by adding the following expression:

 const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// By specifying the API version in the preceding statement, we ensure that the API library we're using is compatible with the following commands. This is also the latest long-term support version, or LTS.
// It is important to note that we're using the DynamoDB class to create a service interface object, dynamodb. 

// Next we'll create a params object that will hold the schema and metadata of the table, by adding the following code:

 const params = {

    // In the first line, we designate the table name as Thoughts.
    
 TableName : "Thoughts",

    //  Next is the KeySchema property, which is where we define the partition key and the sort key. 
    //  Here we see that the partition key is defined as the KeyType: "HASH" and the sort key is defined as the "RANGE". We'll use these terms interchangeably throughout this project.
    //  We defined the hash key as username and the range key as createdAt to create a unique composite key. One benefit of using createdAt as the sort key is that queries will automatically sort by this value, which conveniently orders thoughts by most recent entry.
    
 KeySchema: [       
   { AttributeName: "username", KeyType: "HASH"},  // Partition key
   { AttributeName: "createdAt", KeyType: "RANGE" }  // Sort key
 ],

    // Next we see the AttributeDefinitions property. 
    // This defines the attributes we've used for the hash and range keys. We must assign a data type to the attributes we've declared. 
    // We assigned a string to the username and a number to createdAt, indicated by "S" and "N" respectively.
    
 AttributeDefinitions: [       
   { AttributeName: "username", AttributeType: "S" },
   { AttributeName: "createdAt", AttributeType: "N" }
 ],

    // Next is the ProvisionedThroughput property. 
    // This setting reserves a maximum write and read capacity of the database, which is how AWS factors in pricing.

     ProvisionedThroughput: {       
       ReadCapacityUnits: 10, 
       WriteCapacityUnits: 10
     }
   };

//   Now that the params object is configured, we can use it to make a call to the DynamoDB instance and create a table, by adding the following code:

 dynamodb.createTable(params, (err, data) => {
     if (err) {
         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
     } else {
         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
     }
 });

// In the preceding statement, we used the method, createTable, on the dynamodb service object. 
// Next we pass in the params object and use a callback function to capture the error and response.
// To run this file, run the following command from the root directory:
// node server/db/CreateThoughtsTable.js



