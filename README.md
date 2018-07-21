# react-express-calculator
A Simple Calculator Built With create-react-app, Express and Node.js 

This project builds on the: https://github.com/ahfarmer/calculator project which is an iOS style calculator built with create-react-app. The difference with this project is that is uses an Express, Node.js backend to send a simple title message to the React calculator frontend. This is obviously a very simple example and was built as a demo to show how a React app can work alongside a Node.js Express app backend. It can be enhanced to do something more cool like have an API and database connectivety to store calculator results and display them from memory or something like that. 

The project consists of two apps, the Node.js and Express backend running on: http://localhost:5000 and the React frontend running on: http://localhost:3000 

The package.json file is setup to use the Yarn package manager to deploy both the Express backend and React frontend applications at the same time using Concurrently (https://www.npmjs.com/package/concurrently). 

To run the project, clone the repo to an empty directory and run a: "yarn install" to install the Node.js packages 

Then go into the client directory and run another: "yarn install" to install the React packages 

Finally, in the project root directory, run: "yarn dev" and the application will come up in your browser at: http://localhost:3000 

Last of all, have fun!

If you need help with a React, Express, Node.js project you can get a free consultation by filling out the contact form on my website: https://www.boriswebappdevelopment.ca/

