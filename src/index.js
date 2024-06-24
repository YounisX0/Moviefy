const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

// Convert data to json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public"));

// Render login page
app.get("/", (req, res) => {
    res.render("login");
});

// Render signup page
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register user
app.post("/signup", async (req, res) => {
    const data = {
      username: req.body.username,
      password: req.body.password
    }
    const userdata = await collection.insertMany(data);
    console.log(userdata);
});

const port = 5000;
app.listen(port, () => {
    console.log('server running on Port: ${port}');
})
  
   
  