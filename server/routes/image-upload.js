const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const paramsConfig = require('../utils/params-config');

// We'll use the package multer to provide the middleware for handling multipart/form-data, primarily used for uploading files. 
// The multer package will add a file property on the req object that contains the image file uploaded by the form, as we shall soon see...

const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
      callback(null, '');
    }
  });

  // image is the key!
const upload = multer({storage}).single('image');

// We'll use the preceding function, upload, to store the image data from the form data received by the POST route. 
// We'll use the single method to define this upload function will only receive one image. 
// We'll also define the key of image object as image.

// Next, we'll instantiate the service object, s3, to communicate with the S3 web service, which will allow us to upload the image to the S3 bucket. See the following code for an example:

const s3 = new AWS.S3({
    apiVersion: '2006-03-01'
  })
//   We locked the version number as a precautionary measure in case the default S3 version changes. 
//   This way the code we write has a lower chance of breaking due to default version changes to the API.

router.post('/image-upload', upload, (req, res) => {
    console.log("post('/api/image-upload'", req.file);
    const params = paramsConfig(req.file);
    // In the preceding expression, we retrieved the image file object, req.file, from the route using multer. 
// We assigned the returned object from the paramsConfig function to the params object.

// Next, use the s3 service interface object we instantiated previously with the aws-sdk package to call the upload() method—as shown in the following S3 service call:
    s3.upload(params, (err, data) => {
      if(err) {
        console.log(err); 
        res.status(500).send(err);
      }
      res.json(data);
    });
  });
  
  module.exports = router;   
  

//   QUESTION:                                                                              \\
//   How does S3 get the access keys to provide web service permission?                      \\
//                                                                                            \\
//   ANSWER:                                                                                   \\
//   The aws-sdk package retrieves this information from the local folder, ~/.aws/credentials,  \\
//   where we stored the access id key and private key information with the AWS-CLI.             \\

// We'll need to do two things to complete this endpoint. We need to configure the params object, then make the web service call to S3 to upload the image.
// Let's create a function that will return the params object in a separate file. 
// This way we can keep the route uncluttered and more legible. 
// We'll create this function in a file called params-config.js, which will be located in the utils folder in the server directory. 
// So from the root directory, the relative path for the file will look like this: ./server/utils/params-config.js.

