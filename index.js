const express = require('express');
const path = require ("path");
const bcrypt = require ("bcrypt");



const app = express();

app.set('view engine', 'ejs');
app.get("/", (req, res) =>{
    res.render("login");

});

app.get("/signup", (req,res) =>{
    res.render("signup");
})



const prt = 5000;
app.listen(port, ()=>{
    console.log('server running on port: &{port}');
})