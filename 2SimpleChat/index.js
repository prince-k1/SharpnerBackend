const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/login", (req, res, next) => {
    
    res.send(
      `<form action = "/" method = "POST"><input type = "text" name="username"><button type = "submit">Add</button></form>`
    );
  });
app.use("/", (req, res, next) => {
    const username = req.body.username;
    const message = req.body.message;
    const pathFile = path.join(__dirname, 'message.txt');
    if(username != 'undefined' && username != "" && message != 'undefined' && message != ""){
        let msg = `${username}: ${message}`
    fs.appendFile(pathFile,  msg+ '\n', (err,data) => {
        res.send(`<p>${data}</p>`)
    });
    }
  res.send(
    `<form action = "/" method = "POST"><input type = "text" name="message"><button type = "submit">Send</button></form>`
  );
});



app.listen(3000);
