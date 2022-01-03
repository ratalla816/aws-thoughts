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
  
  * <https:///> - AWS Documentation
  * <https://> - TBD
  * Left off here: <https://coding-boot-camp.github.io/continuation-courses/aws/lesson-1-cloud-intro>
 
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
  *
  * 
  * 


  ## Screenshot
  ![Screenshot](./assets/images/aws.png)

  ## Features
  TBD
  
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

  * And as you might imagine, a hybrid cloud combines features of public and private clouds—which is useful for organizations like a government agency that needs both high security to store private data and a public-facing interface for    the community.

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
  TBD

  ## Contact:
  Holler at me! <a href="mailto:rob.atalla@robatalla816.com">rob.atalla@robatalla816.com</a>