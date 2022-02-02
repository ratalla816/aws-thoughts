const AWS = require("aws-sdk");
const fs = require('fs');

// This is similar to the CreateThoughtsTable.js configuration, with one key distinction - We'll use the DocumentClient() class this time to create the dynamodb service object. 
// This class offers a level of abstraction that enables us to use JavaScript objects as arguments and return native JavaScript types. 
// This constructor helps map objects, which reduces impedance mismatching and speeds up the development process. 
// We'll be using this class for most of the database calls in this project.

AWS.config.update({
    region: "us-east-2",
  endpoint: "http://localhost:8000" 
  });

// AWS.config.update({
//   region: "us-east-2"
// });

  const dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

//   In the next step, we'll use the fs package to read the users.json file and assign the object to the allUsers constant, as follows:

console.log("Importing thoughts into DynamoDB. Please wait.");
const allUsers = JSON.parse(fs.readFileSync('./server/seed/users.json', 'utf8'));

// important! 
// The relative path for the fs.readFileSync function is relative to where the file is executed, not the path between files. 
// In this case, the file path will work if this command is executed from the project's root directory.

// Next we'll loop over the allUsers array and create the params object with the elements in the array, as follows:

allUsers.forEach(user => {
    const params = {
      TableName: "Thoughts",
      Item: {
        "username": user.username,
        "createdAt": user.createdAt,
        "thought": user.thought
      }
    };


// In the loop, we assigned the values from the array elements in the Item property.
// While still in the loop, we make a call to the database with the service interface object, dynamodb, as shown in the following code:

dynamodb.put(params, (err, data) => {
    if (err) {
      console.error("Unable to add thought", user.username, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded:", user.username);
    }
});
})

// In the preceding statement, we used the same pattern that we used to create the table, but this time we used the put method.
// Due to the fs.readFileSync function, we must navigate to the root directory of the project first. Otherwise, we'll receive an error that no file was found. Then we can execute the following command:
// node ./server/db/LoadThoughts.js