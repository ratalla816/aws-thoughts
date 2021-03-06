# AWS Integration: Deep Thoughts

  ![badge](https://img.shields.io/github/languages/top/ratalla816/aws-thoughts)
  <br> 
  ![badge](https://img.shields.io/github/languages/count/ratalla816/aws-thoughts)
  <br>
  ![badge](https://img.shields.io/github/issues/ratalla816/aws-thoughts)
  <br>
  ![badge](https://img.shields.io/github/issues-closed/ratalla816/aws-thoughts)
  <br>
  ![badge](https://img.shields.io/github/last-commit/ratalla816/aws-thoughts)
  <br>
  ![badge](https://img.shields.io/badge/license-MIT-important)
  
  ## Description
  
   The Deep Thoughts application which allows users to post their thoughts, was built using React, Node.js, Express.js, and MongoDB, which makes it a MERN application. 
   Moving forward, we'll deploy this app to the cloud and replace the back-end API with cloud resources to handle the storage, database, and computing.

   We've chosen Amazon Web Services, or AWS, to fulfill this role. We chose AWS over other providers, like Microsoft Azure or the Google Cloud Platform, because AWS is currently the most comprehensive and widely adopted cloud platform. 
   AWS offers the widest range of web services, a vast array of customers (from startups to enterprise), and an extensive free tier.

   Upon completing this project, we will learn how to do the following:

   * Configure IAM user permissions to connect various AWS services.

   * Store and retrieve static assets using Amazon Simple Storage Service (S3).

   * Connect an existing application to a DynamoDB database.

   * Configure a Linux server to deploy the application to an Elastic Compute Cloud (EC2) instance.
 
  ## Table of Contents
  - [Description](#description)
  - [Documentation](#documentation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Features](#features)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Abstract](#abstract)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Documentation
  
  * <a href="https://aws.amazon.com">AWS</a> 
  * <a href="https://aws.amazon.com/iam">IAM (Identity and Access Management)</a>
  * <a href="https://aws.amazon.com/s3">S3 (Simple Storage Service)</a>
  * <a href="https://aws.amazon.com/dynamodb">DynamoDB (Database)</a> 
  * <a href="https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/#:~:text=DynamoDB%20stores%20data%20as%20groups,value%2C%20which%20must%20be%20unique.&text=DynamoDB%20splits%20partitions%20by%20sort,grows%20bigger%20than%2010%20GB">AWS documentation on partition keys for DynamoDB</a> 
  * <a href="https://aws.amazon.com/ec2">EC2 (Elastic Compute Cloud)</a>
  * <a href="https://aws.amazon.com/ecs">ECS (Elastic Container Service)</a>
  * <a href="https://aws.amazon.com/cli">Amazon Command Line Interface (CLI)</a>
  * <a href="https://aws.amazon.com/lambda">Lambda (Lambda Functions)</a>
  * <a href="https://aws.amazon.com/cloudfront">CloudFront (Content Delivery Network)</a>
  * <a href="https://aws.amazon.com/cloudwatch">CloudWatch (Monitoring)</a>
  * <a href="https://www.npmjs.com/package/aws-sdk">AWS-SDK (official AWS software development kit (SDK) for JavaScript)
  * <a href="https://www.npmjs.com/package/multer">Multer (Node.js middleware for handling file uploads)</a>
  * <a href="https://www.npmjs.com/package/uuid">UUID Universally Unique Identifier - generates random alphanumeric strings that can serve as unique identifiers. (generate identifiers for S3 bucket and application images)</a>
  * <a href="https://www.npmjs.com/package/pm2">Node.js production process manager that helps you manage your web application???and keep it live online.</a>
  * <a href="https://www.nginx.com">Nginx (free and open-source web server that can also serve as a reverse proxy, load balancer, mail proxy, or HTTP cache)</a>
  * <a href="https://dynobase.dev/run-dynamodb-locally/#connecting-dynamodb-offline-sdk">How to run DynamoDB Local and Offline - Complete Guide</a>
  
  <!-- ### Left off here:<br>
  *Set Up the EC2 Environment<br>
  <https://coding-boot-camp.github.io/continuation-courses/aws/lesson-4-deploy><br>
  
  ![Screenshot](./assets/images/start-nginx.jpg)<br> -->
 
  ## Usage

  * As a developer, I want to be able to view the management console in AWS.
  * As a developer, I want to manage my IAM role.
  * As a developer, I want to set up a billing alert.
  * As a developer, I need to create a route to query all the thoughts.
  * As a developer, I need to create a route to query all the thoughts from a user.
  * As a developer, I need to create a route to create a thought.
  * As a user, I want to view all the thoughts.
  * As a user, I want to be able to create a new thought.
  * As a user, I want to view thoughts of a user.
  * As a user, I want to add an image to my thought.
  * As a user, I want to see all images.
  * As a user, I want to view images of a user.
  * As a user, I want to be able to visit the app on a public URL.

  ### Instructions 
  * Install AWS-CLI on Windows <https://awscli.amazonaws.com/AWSCLIV2.msi><br>To verify the installation, open the Start menu, search for cmd to open a command-prompt window, and at the command prompt use the aws --version command.
  
  * Use the aws-sdk package to interface with AWS from the Node.js application.<br>Create a file the root directory called create-bucket.js and import the uuid package<br>Download the NPM packages to the node_modules directory with the following command: npm install aws-sdk uuid<br>Now run the create-bucket.js file at the command line from the root directory of the application, as follows: node create-bucket.js<br>You should see a success message in the command line if you've successfully created a new S3 bucket.
  
  * Download the DynamoDB file and start a local instance of the database:<br>
  Visit the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html">AWS DynamoDB download page and select the zip file in the US region.</a><br>
  Open the zip file to expand the folder.<br>
  Open the CLI, navigate to where this folder is located, and cd into that folder.<br>
  Run the following command: java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb<br>
  NOTE! Windows 10 users might need to enclose parameter name or the name & value. Try running one of these paths instead:<br>
  java -D"java.library.path"=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb (this is what I use)<br>
  OR<br>
  java "-Djava.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar -sharedDb
  Upon success you will should see a message similar to this:<br>![Screenshot](./assets/images/dynamoSuccess.jpg)<br>
  
  * Create a table in ./server/db then run the following command: node ./server/db/(your-table-name).js<br>
  If the table was created successfully, we should see a message that resembles the following image:<br>![Screenshot](./assets/images/tableSuccess.jpg)<br>
  
  * Run seeds by navigating to the root directory then execute this command: node ./server/db/LoadThoughts.js<br>
  If the seeds were created successfully, we should see a message that resembles the following image:<br>![Screenshot](./assets/images/seedSuccess.jpg)<br>

  * Run the server by navigating to the root directory then execute this command: node ./server/server.js<br>

  * Start react server by Navigating to the client folder of the application and execute the following command: npm start<br>

  ### SET PUBLIC ACCESS PERMISSIONS FOR S3 BUCKET

  To enable anyone with the URL address to view the images files, we must allow public read access. First navigate in the browser to the S3 console, then select the bucket name.<br>

  Select the Permissions menu option, then select Bucket Policy.<br>

  We'll add a bucket policy that will grant read access for anonymous users so that anyone can see the images in their browsers.<br>
  Enter the following code into the text editor on the Bucket Policy page by selecting the JSON tab:<br>![Screenshot](./assets/images/s3-permission-script.jpg)<br>

  Make sure to save this policy. To understand most security policies, you should consider who gets access and what type of access will they receive.<br>
  In the preceding bucket policy the "who" is the Principal, which is set to everyone.<br> 
  The type of Action or what this policy allows, is GetObject, which also means the read object, which is the image file in this case.<br> 
  In the Resource property, you designate the S3 bucket name and all its contents.<br>

  ### DEPLOYMENT 

  create an EC2 instance by following these steps:<br>

  Navigate to the AWS Management Console in the browser.<br>

  In the Find Services search field, select EC2. The EC2 console will open.<br>

  Scroll down and select the Launch Instance button.<br>

  #### Choose an Amazon Machine Image (AMI)
An AMI is a preconfigured template of software. This step is to select the operating system and application server so that the EC2 instance has the correct software configuration needed by your application.<br>
Select the Ubuntu Server AMI template, which is on the free tier.<br>

Choose an Instance Type:<br>
Amazon EC2 provides a wide selection of instance types optimized to fit different use cases. An instance type will have different configurations of CPU, memory, storage, and networking capacity.<br>
Choose the t2.micro option because it's free-tier eligible and capable of fulfilling the requirements of the Deep Thoughts application.<br>

Configure Instance Details:<br>
hoose the t2.micro option because it's free-tier eligible and capable of fulfilling the requirements of the Deep Thoughts application.<br>

In this step, we can create a new Virtual Private Cloud, or VPC. As we learned previously, a private cloud can offer more security because we can regulate inbound traffic. Here we have an opportunity to select an IAM role.<br>
We'll create a new IAM role and a new set of permissions because the current IAM role has admin privileges. Ideally, limiting the IAM permissions on an EC2 instance is preferred to limit vulnerability to the AWS account.<br>


Create an IAM role in the IAM console in another tab in the browser so that we can continue with this EC2 configuration later. Select Roles from the right side menu, then select "Create role".<br>


Next select "Create policy", and select the JSON tab. Replace with the following JSON object:<br>![Screenshot](./assets/images/iam-policy.jpg)<br>

With the preceding JSON statement, we'll be able to access S3 and DynamoDB from the EC2 instance. 
However, you will still need to use the access and private keys to authenticate into these services.<br>  
Once we select the Review button, we're redirected to the "Review policy" page, where we name the policy and describe the permissions allowed.<br> 
Name this IAM role S3-DynamoDB so that we can remember which services this role is giving access to.<br>
Assign this role to the EC2 instance to ensure you can communicate with S3 and DynamoDB.<br>

### Set up EC2 Environment

We need to configure the EC2 environment so that the Deep Thoughts application can run on the virtual machine.<br> 
We'll need the following to begin:<br> 

AWS-CLI<br> 
Node.js and npm<br> 
Git<br> 
To do this, we must first connect to the EC2 instance from the command line.<br> 
In the security group configuration, we left a default setting for inbound traffic to allow an SSH IP connection on port 22. <br> 
First navigate in the command line to the .ssh folder. Then go to the browser, navigate to the EC2 console, and select the dashboard.<br> 

Next, select Running Instances to see which EC2 instances are running or stopped. After a few minutes, the EC2 instance should be green, with a running instance state.<br> 

*Important:**
If the instance is running, then AWS is counting this time towards the free time given in the free tier.<br>
Even though the EC2 instance is currently idle and not actively processing anything, because this virtual machine is provisioned, the rental time begins when the state of the instance is running.<br>

To turn the instance state off, select the checkbox for this instance and select the Actions button.<br>
This will drop down a menu of options, including the instance state. By choosing that option, we can stop the instance.<br>

As a general rule, if only one instance is running at any given time, then the free tier will not be exceeded.<br>

Now select the Instance ID to expand the details of the EC2 instance we just launched. This section is divided by tabs that detail information about the EC2 instance???for example, the security group, to see which ports have access to the app or the instance type. Also look at the Network tab and write down the information regarding the public IPv4 address. We'll use this address to access the EC2 instance from the internet. Look at the options also available in the side menu, in case we need to make changes in the instance configuration.

Let's make sure that the instance is still running and select the Connect button at the top left area of the page. This will direct us to another page with details of the SSH client. We'll use the SSH client to connect to the EC2 instance from the command line.<br>

As directed by this page, in the ~/.ssh directory, run the following commands:<br>

chmod 400 aws-thought.pem<br>

This command ensures that the key isn't publicly viewable.<br>

Next, copy the following command for an example of how to connect to the instance:<br>

ssh -i "aws-thought.pem" ubuntu@ec2-##-###-##-###.us-east-2.compute.amazonaws.com<br>

If successful, we'll be prompted to confirm connection. Affirm with yes, to see the following message in the command line:<br>
![Screenshot](./assets/images/ec2-success.jpg)<br>

#### Install the Application Environment Dependencies

Next, add the runtime environment that will execute the application.<br>
Start with the following command to receive root access control:<br>
sudo su -<br>

The command prompt changed to root. Without assigned root user status, we'd need to prefix the installation commands with sudo to run these commands with root user permission.<br>
Because the EC2 instance has open access to the internet, we need tightened security around file permissions, especially for code installations.<br>

Update the environment with the following Ubuntu command using the APT package:<br>

* apt update<br>

! The apt command might seem similar to the npm command in the Node.js !<br>

### Install AWS-CLI

Next install AWS-CLI, which is a useful command-line tool that we used previously to connect to the DynamoDB service.<br>
Here, we'll use it to store the access keys that the application will use to authenticate access for the S3 and DynamoDB services.<br>

*Store the Access Key and Private Key<br>
Now use the AWS-CLI tool to store the access key and private key.<br>
To begin, run the following command:<br>
* aws configure<br>
When prompted, enter the access and private keys, set the region as us-east-2, and assign the data type to JSON.<br>

#### Install Node.js, NPM, and Git

*Install Node.js and npm by using the following commands:<br>
curl -sL https://deb.nodesource.com/setup_10.x | bash -<br>
apt install -y nodejs<br>

Run node --version to check if the installation was successful.<br>

*Next install Git with the following command:<br>
apt install git-all<br>

Run git --version to verify that installation was successful.<br>

*In the browser, navigate to the GitHub repo for aws-thought. We'll clone this repo in the EC2 instance by copying the HTTPS URL from the GitHub repo on the main branch.<br>

Go back to the CLI and navigate to /opt/ and clone aws-thought to the EC2 instance. Root folder access to the application will simplify the application's availability to the application server.

### Install NGINX

*To install nginx, run the following command in the Ubuntu CLI:<br>
apt install nginx<br>

To test the installation, start the nginx server by running the following command:<br>
systemctl start nginx<br>

#### Configure the NGINX Server

Next, configure this application server to handle the communication from the application's front and back ends.<br>
We'll use proxies to route the exposed route from nginx to the client and server.<br>
Then we'll modify the fetch calls in the UI components to connect to the API routes of the application's back end.<br>

Run the following command to enter the text editor in the EC2 instance to allow code to be changed. We'll create a new configuration file so that the application can be exposed to port 80.<br>
The server configuration file is located at the root folder in the following path:<br>
nano /etc/nginx/sites-available/default<br>


  
  ### Pricing 

  We'll use an EC2 instance to host the application. EC2, or Elastic Cloud Compute, is a cornerstone of AWS's Infrastructure-as-a-Service (IaaS) model. An EC2 instance provides a powerful computing services that can be located in any region around the globe. An EC2 is a great example of leveraging AWS's cloud infrastructure. As the need for capacity changes with the demands of a website, EC2 instances can be quickly added or dropped depending on the need.

  With AWS's free tier, we can use a free EC2 instance for up to 750 hours per month???running the EC2 instance roughly 24/7 for the entire month. With the EC2 instance available on the free tier, the website can handle approximately 45 concurrent users. If we reach this capacity, we can easily add another EC2 instance???however, we'll exceed the free tier because this will add about 744 hours of computing time each month. Because EC2 costs about five cents per hour, this will equate to an additional $37 per month, or $444 per year.

  This cost analysis shows that an EC2 instance is much more expensive compared to a Heroku deployment as a comparison. Normally an EC2 instance is used by a company that needs to handle a steady amount of requests or concurrent users. EC2 instances are also great for supporting roles as an emergency backup system in case the main servers go down.


  ## Screenshot
  ![Screenshot](./assets/images/uploaded.jpg)
  
  ![Screenshot](./assets/images/handey.jpg)
 
  ![Screenshot](./assets/images/insomnia.jpg)

  ## Features
  * DynamoDB<br>With MongoDB and relational databases like MySQL, as the number of requests increase, the performance drops.<br>DynamoDB, however, was made with high performance under extreme load conditions in mind. If we use a large-scale-first mentality when designing web applications, we can circumvent the technical debt of database migration by starting with a system that can handle a high request load.
  
  # Acknowledgements
  
  * Rob Atalla
    
  ## License
  ![badge](https://img.shields.io/badge/license-MIT-important)
  <br>
  Permission to use this application is granted under the MIT license. <https://opensource.org/licenses/MIT>

  ## Abstract
  
  ### Benefits of cloud computing
  
  Cloud computing is the on-demand availability of computer system resources through the internet, which enables companies to use remote data centers to serve applications on a pay-as-you-go basis.

  The cloud refers to servers that are accessed through the internet. For example, when you back up images on your phone to the cloud, the photos aren't stored on-premises (in other words, on your phone) but in a remote server connected via the internet. Many email services use the cloud too, allowing you to send and receive hundreds or even thousands of messages at any time. In this way, cloud storage serves as a reliable backup that preserves data even if you lose or break your device.

  With cloud computing, a company can instead focus on their core competencies and shift the administrative infrastructure and IT work onto a cloud provider. Managers don't have to worry about costly server failures anymore, because cloud providers replicate their code on redundant systems, guaranteeing to provide 99.999% uptime (Source: <a href="https://aws.amazon.com/blogs/publicsector/achieving-five-nines-cloud-justice-public-safety/#:~:text=The%20accepted%20availability%20standard%20for,system%20must%20work%20seamlessly%20together.">AWS/Amazon</a>)

  Another key advantage is that cloud computing leverages not just a single data center but a global infrastructure of data centers that can serve consumers at previously unthinkable speeds. Such a comprehensive network of data centers allows even a small company to serve performant applications globally.
  ### Deployment Models 

  certain industries like healthcare, finance, and government require more rigorous security measures because of the sensitive nature of the information they store. A breach of this type of data can lead to national security concerns or other serious problems. Advancements in technology have helped reduce the extent of data breaches, but security should remain a major concern for all cloud users.

  Adherence to security protocol is ultimately the best safeguard against data breaches, because most occur due to human error. That said, cloud computing offers different deployment models to accommodate varying security concerns, including private clouds, public clouds, and hybrid clouds:

  * When security is a top concern, a private cloud provides more security than a public cloud, but less than an on-premises server. The private cloud has specific access points that only certain devices or IP addresses can enter.

  * The public cloud, on the other hand, can be accessed from any device through any IP address.

  * And as you might imagine, a hybrid cloud combines features of public and private clouds???which is useful for organizations like a government agency that needs both high security to store private data and a public-facing interface for    the community.

  ### Service Models

  Cloud providers offer many types of computer resources, because the needs of applications are wide-ranging. Cloud providers also offer many levels of service depending on how much time, energy, and control is available. Let's explore a few.

  * Platform-as-a-Service (PaaS)
    Imagine that Company A does not have the extra personnel, time, or desire to configure their own cloud solution. They might have a very simple application that won't strain resources, so they would like a solution right out of the box. The best service model in this scenario would be a Platform-as-a-Service, or PaaS.

    Heroku is an example of a PaaS. When we want to deploy an app on Heroku, we don't need to specify computer system requirements; we simply connect the GitHub repo and optimize the build for deployment. PaaS models are built for developers that don't have an IT administrative background and just want to plug-and-play.

  * Software-as-a-Service (SaaS)
    SaaS, or Software-as-a-Service, is another popular service model. The difference between PaaS and Saas is that SaaS is for end users. In the PaaS model, the application is served to users through the cloud, which runs the application and stores the user's data, typically for a subscription fee. GitHub is an example of a SaaS, as many companies pay GitHub to secure their source code and use their tools. The repos are stored in the cloud, and the interface connects users to their accounts. Other popular SaaS companies include Zoom, Microsoft Office, Adobe, Salesforce, DoorDash, and Peloton. E-commerce sites are often not thought of as SaaS due to the difference in the business model and the exchange of hard goods.

    The meteoric rise and success of companies that use the SaaS business model illustrates the extent to which cloud computing is a powerful economic vehicle that can scale globally to reach millions of consumers and handle this load efficiently. The amazing profit margins that a SaaS company can attain demonstrates the economic feasibility of using cloud computing to deliver software solutions in a consistent and reliable manner.

  * Infrastructure as a Service (IaaS)
    IaaS, or Infrastructure as a Service, is another service model. The difference between PaaS and IaaS is that IaaS is for the infrastructure. In the PaaS model, the application is served to users through the cloud, which runs the application and stores the user's data, typically for a subscription fee. GitHub is an example of a IaaS, as many companies pay GitHub to secure their source code and use their tools. The repos are stored in the cloud, and the interface connects users to their accounts. Other popular IaaS companies include Zoom, Microsoft Office, Adobe, Salesforce, DoorDash, and Peloton. E-commerce sites are often not thought of as IaaS due to the difference in the business model and the exchange of hard goods.

    The meteoric rise and success of companies that use the IaaS business model illustrates the extent to which cloud computing is a powerful economic vehicle that can scale globally to reach millions of consumers and handle this load efficiently. The amazing profit margins that a IaaS company can attain demonstrates the economic feasibility of using cloud computing to deliver software solutions in a consistent and reliable manner.


  ## Testing
  Insomnia

  ## Contact:
  Holler at me! <a href="mailto:rob.atalla@robatalla816.com">rob.atalla@robatalla816.com</a>