## Setup the app
Open the app in any IDE as webStorm, phpStrorm, IntelliJ, Visual Studio Code, etc..

### before running the app (if system is not window)
The development is done on window and in a case your system is not window, 
change the two lines in the package.json at "scripts" to

    "build": "webpack -d && copy src/index.html public/index.html && webpack-dev-server --content-base public/ --inline --hot --port 8000",
    "build:prod": "webpack -p && copy src/index.html public/index.html"

## Run App

In the project directory, you can run:

### npm install
To install all the dependencies

### open a terminal and type node server.js for local storage
This command start the server
Server started. listening to 8000
Open [http://localhost:8000](http://localhost:8000) to 
Get  [http://localhost:8000/users](http://localhost:8000/users) to get all users from the local storage users.json in public folder
POST  [http://localhost:8000/adduser](http://localhost:8000/adduser) to add user to local storage users.json

### open another terminal and type npm start for running the react app
This command start the client React App
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser
