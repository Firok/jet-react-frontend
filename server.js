'use strict'

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();


let staticPath = path.join(__dirname, 'public')

app.use('/', express.static(staticPath));
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.options('*', cors());


// save users data in local store json file
let storeUsers = (data) => {
    fs.writeFile(staticPath + "/" + "users.json", data, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}

/* ===============================
 ROUTE
 ============================== */

// route for adding user to local file storage users.json
app.post('/adduser', (req, res) => {
    // First read users.json.
    fs.readFile(staticPath + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data.push(req.body)
        console.log(data);
        data =JSON.stringify(data);
        storeUsers(data)
        res.end(data);
    });
});

// route for getting users from users.json file
app.get('/users', (req, res) => {
    fs.readFile(staticPath + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

// general route
app.get( '/', ( req, res ) => {
    res.sendFile( staticPath + '/index.html' );
})


let server = app.listen(8000, _ => {
    console.log('server started. listening to 8000');
});