const express = require('express');
const pasth = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config"); // This will initiate the DB connection

const app = express();


//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});




//register user

app.post("/signup",async (req,res) => {
    const data = {
        name: req.body.fullName,
        email: req.body.email,
        username: req.body.username,
        gender: req.body.gender,
        phone: req.body.phone,
        password: req.body.password,
        conf_pss: req.body.conf_password
    }

    const userdata = await collection.insertMany(data);
    console.log(userdata);

})

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
