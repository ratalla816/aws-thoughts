const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const paramsConfig = require('../../utils/params-config');

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

// image is the key!
const upload = multer({ storage }).single('image');

// instantiated service object s3 for uploading. locked version
const s3 = new AWS.S3({
    apiVersion: '2006-03-01'
})

router.post('/image-upload', upload, (req, res) => {
    console.log("post('/routes/api/image-upload'", req.file);
    // set up params config
    const params = paramsConfig(req.file);

    // set up S3 service call
    s3.upload(params, (err, data) => {
        if (err) {
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

